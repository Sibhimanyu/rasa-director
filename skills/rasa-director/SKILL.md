---
name: rasa-director
description: >
  Rasa Director: creative direction for video made with Claude, so motion graphics stop looking and moving the same. Walks the user
  through every style decision in order (brief, concept, look, motion personality, keyframes, music), each by
  eye on previews of their own content in a local Director's Console web page (or in chat), and any step can be
  skipped with "you decide". Locks the motion in a binding motion.md, hands a finished brief to HyperFrames to
  build, streams build progress and renders back to the console, and checks the built composition obeys the
  motion before render. Use when the user asks for a motion graphic / animated title / sting / kinetic type and
  wants to choose the style, says "/rasa-director", "guide me through the style", "show me motion options",
  "tasting menu", "show keyframes first", or complains that motion looks generic. Builds with HyperFrames
  (/hyperframes, /motion-graphics); does not replace them.
---

# Rasa Director

*Rasa* (ரசம், रस): the essence a work makes its audience feel. Rasa Director lets the user direct that for a motion graphic, by eye, before anything is built: they're the director, Rasa handles taste, HyperFrames shoots. It **decides**; HyperFrames **builds**.

The gap it fills: HyperFrames lets a user pick a *look* (palette, type, layout) by eye, but nothing lets them pick *how things move*, and `/motion-graphics` asks at most one question. So every piece gets the same default choreography (its `slide_bottom` = fade-up-slide on power4.out). This skill adds a motion step judged by eye, writes the choice into a binding `motion.md`, passes it to every build subagent, and checks the build against it.

Scripts are zero-dependency Node (≥ 20) in `<skill dir>/scripts/`. They print JSON; read it rather than reconstructing their work by hand.

## Hard rules

1. **One path, every step skippable.** Walk the steps in order. At every step the user may pick, say **"you decide"** (this step) or **"you decide the rest"** (every remaining step, keyframes and music included). Never ask who should do what; never split the flow into modes.
2. **Intent in the request counts.** Anything the request already settles is not asked again: "you decide the look" skips Step 3 only; "show me keyframes" answers Step 5's question; a stated concept skips the pitch round; "no music" skips Step 6. Each such answer gets a line in the receipts summary ("look: you left it to me in your request").
3. **Content is the only required input:** the exact words the piece shows (headline, plus an optional secondary line such as a tagline or URL), or a logo / data file.
4. **Show, don't ask.** Decisions are made on rendered previews of the user's content, not adjectives. Every step's options go to the **Director's Console** (below) and, briefly, into chat with the PNG stills inline. The user can answer in either place.
5. **"You decide" never means the default.** Concept and Motion skips sample wide with a tail constraint; Look skips rotate; Brief, Keyframes and Music skips use fixed defaults (music: pick the first candidate that fits the concept, or none if nothing fits). Every agent decision gets a one-line receipt: what was picked and the obvious option passed over.
6. **One question per step**, recommended option first. "Go" or silence on a step accepts the recommendation.
7. **Render is never skipped by "you decide".** The route workflow's own "preview first, or render?" gate always runs.

## Setup (once per run)

```bash
# SKILL_DIR = the base directory Claude Code printed when this skill loaded; this finds it otherwise
SKILL_DIR=$(for d in ~/.claude/skills/rasa-director ~/.agents/skills/rasa-director .claude/skills/rasa-director; do [ -f "$d/SKILL.md" ] && (cd "$d" && pwd -P) && break; done)
[ -n "$SKILL_DIR" ] || SKILL_DIR=$(dirname "$(find ~/.claude/plugins/cache -path '*rasa-director*/skills/rasa-director/SKILL.md' 2>/dev/null | sort -V | tail -1)")
RUN=".rasa-director/$(date +%Y%m%d-%H%M%S)"; mkdir -p "$RUN"; echo "SKILL_DIR=$SKILL_DIR RUN=$RUN"
grep -qx '.rasa-director/' .gitignore 2>/dev/null || printf '\n.rasa-director/\n' >> .gitignore
npx --yes hyperframes --version && npx --yes hyperframes browser ensure >/dev/null && echo READY
node $SKILL_DIR/scripts/console.mjs serve --run "$RUN" --open
```

**Shell variables do not survive between tool calls.** Note the literal `SKILL_DIR` and `RUN` values printed above and write them literally in every later command (below they appear as `$SKILL_DIR` / `$RUN` for readability). Run everything from the workspace root.

- The last command starts the Director's Console in the background and opens it; it prints the URL. Give the user that URL in your first message. If they say they'd rather stay in chat ("no console"), skip every console command below and work in chat only.
- No HyperFrames CLI → tell the user to install it (`npm i -g hyperframes`, or use `npx`); stop.
- `browser ensure` fails → previews still open as HTML, but there are no stills and obey can't run; say so, never claim a check passed.
- The user is asking to change a piece that already exists in `videos/` → go to **Revise** instead.

Then show the step map once:

> Here's how we'll direct this. Seven steps, each decided by eye in the console at <URL> (or right here). Say **"you decide"** on any step, or **"you decide the rest"** to hand me everything after it.
> 1 Brief · 2 Concept · 3 Look · 4 Motion · 5 Keyframes · 6 Music · 7 Build & render

## The Director's Console

A local page (`console.mjs`, 127.0.0.1 only) with one panel per step: brief form, concept cards, look presets opened live, the live tasting menu with adjust controls, the keyframe board, music with players, the plan, build progress and the renders. The user's clicks come back to you as actions. Payload fields per step: `references/console.md`.

**For every step:**

1. **Push** the step's options. A push **replaces** that step's payload (old options, issues and the "you sent" banner are cleared), so always send the full payload. Write it to a file (avoids shell-quoting problems), then:
   ```bash
   node $SKILL_DIR/scripts/console.mjs push --run "$RUN" --step <brief|concept|look|motion|keyframes|music|plan|render> --file "$RUN/<step>.json"
   ```
   Paths inside payloads are workspace-relative (e.g. `.rasa-director/<run>/tasting/index.html`).
2. **Say it in chat too:** the question in one or two lines, the recommended option, and any still (tasting, board) inline.
3. **Wait** for the answer, with `run_in_background: true` so the user can also reply in chat:
   ```bash
   node $SKILL_DIR/scripts/console.mjs wait --run "$RUN" --timeout 3000
   ```
   You are notified when it returns one JSON action: `{step, type, value, note}`. Exit 3 (`console_down`) means the console stopped: restart it with `serve` (same `--run`) and push the current step again. If the user answers **in chat** instead, record it with `console.mjs record --run "$RUN" --step <step> --type choose --value '<json>' --note "<their words>"` and carry on. A wait that returns later for a step you already settled is a correction if it differs, otherwise ignore it. On timeout (exit 2), start another wait.
4. **Act** on the action:

   | type | means |
   |---|---|
   | `submit` | brief form values (`value` = fields) |
   | `choose` | the pick (`value` = option id, or `"poses"` / `"skip"`, `"none"`, `"preview"` / `"render"`, `{file}` for own music). A motion id like `luxe-minimal+slower+calmer` is an adjusted variant: lock it with `--personality luxe-minimal --adjust slower,calmer` (its tasting cell also carries `parent` and `adjust`) |
   | `adjust` | motion: `value` = `{id, adjust:[adjectives]}`: re-preview, then ask to lock |
   | `more` | motion: `value.exclude` = ids to leave out of a new menu |
   | `approve` | keyframes or plan approved |
   | `decide` | "you decide" for this step |
   | `decide-rest` | step `*`: "you decide the rest" from here on (still ask the render question) |
   | `note` | free text: a correction, a mix of options, a question. Answer or apply it, and re-push |

5. **Close** the step: `console.mjs push --run "$RUN" --step <step> --status done --data '{"decision":"<what was decided + receipt>"}'`. Then push the next step, which moves the console to it.

## Step 1: Brief

Ask for the **content** first. Console: push `brief` with the fields you already know (from the request) and the question; the user fills the form. Then, one question each with a recommended default:
- **Where it plays** → aspect: website / YouTube 16:9 · feed 1:1 · Reels / TikTok / Stories 9:16 (also 4:5). `node $SKILL_DIR/scripts/memory.mjs recommend --step aspect` returns a remembered value to recommend, with its receipt.
- **Length:** default from content (about 4–6 s for a line or two).

`destination` is free text (website, youtube, x-feed, reels, tiktok, story...); it goes into BRIEF.md, and into HyperFrames' remembered preferences only if the user stated it.

**Logo or data pieces:** the previews are text-only. Preview with the words the piece will show (brand name for a logo sting; "40% | faster builds" for a stat), tell the user the real logo / data enters at build, and list the file under `assets` in decisions.json.

Skip → 16:9 (1920x1080), length from content. Record: `node $SKILL_DIR/scripts/memory.mjs record --step aspect --value <WxH> --mode confirmed|auto`.

## Step 2: Concept

Unless the request states a concept: first ask what they are already picturing (an idea they have seeds the round and is never displaced). Then pitch **five concepts**, 3 lines each (the idea · its visual world · its opening hook), with HyperFrames' pitch-round discipline (`~/.claude/skills/hyperframes/references/pitch-round.md`): answer its four questions about the subject, one concept per path, **at least two a model would rarely produce** (mark those `rare: true`), no two with the same silhouette. Present all five before recommending one. Mixing is a valid answer (it arrives as a `note`). Console: push `concept` with `options` and `recommended`.

Also pick the `/motion-graphics` **category** the concept implies: `kinetic-type`, `stat`, `charts`, `logo-reveal`, `lower-thirds`, `maps`, `webpage`, `news`, `tweet`, `asset-fusion`. It goes into decisions.json so the build's planner doesn't re-decide it.

Skip → run the same gate silently, pick one; the receipt names the typical concept left behind. Record: `node $SKILL_DIR/scripts/memory.mjs record --step concept --value "<short concept name>" --mode confirmed|auto`.

## Step 3: Look

```bash
node $SKILL_DIR/scripts/pick.mjs look --count 3 --feel "<feel words>" --seed "<content>"
```

- Feel words come from the vocabulary in `references/personalities.md`; `unmatched_feel` in the output lists words it didn't understand, so re-run with vocabulary words.
- User has a brand spec (frame.md / design.md / guidelines) → use it (`look.frame` in decisions.json; `--frame <path>` for tasting and board) and skip the presets. If the scripts warn that no colours or font were found in it, previews use a default palette: say so, and use a preset for the preview or add a `colors:` block.
- Otherwise push `look` with the candidates (`id`, `showcase`, `description`): the console shows each showcase live so they pick **by eye**. Say plainly: showcases wear the preset's own sample content and are designed at 16:9; their real content, at their real aspect, appears in Step 4 in this look, and they can reopen Look from there.
- A non-null `recommended` is listed first with its receipt.

Skip → `auto.pick`, receipt `auto.receipt`. Record: `node $SKILL_DIR/scripts/memory.mjs record --step look --value <preset> --mode confirmed|auto`.

## Step 4: Motion (the tasting menu)

```bash
node $SKILL_DIR/scripts/pick.mjs motion --count 6 --feel "<feel words>" --seed "<content>"
node $SKILL_DIR/scripts/tasting.mjs --content "<headline>" [--sub "<secondary line>"] \
  --personalities <candidate ids, comma-separated> --preset <look> (or --frame <path>) \
  --aspect <aspect> --out "$RUN/tasting" --stills
```

`|` in `--content` forces a line break. The secondary line animates with the headline, so the whole lockup is judged. Push `motion` with `tasting` (`$RUN/tasting/index.html`), `cells` (the `cells` array from `$RUN/tasting/tasting.json`, as is), `adjectives` (the object `motion-md.mjs adjectives` prints, as is) and `recommended`: the console plays the menu live with a picker and adjust chips. In chat, show `tasting-enterMid.png` inline (motion character is visible mid-entrance). Ask one question: **which one (A–F), or adjust one** ("B but slower").

- **Adjust** (`adjust` action, or said in chat): `node $SKILL_DIR/scripts/motion-md.mjs adjectives` lists the supported adjustments (slower, faster, calmer, punchier, bouncier, stiffer; they combine). Emit the variant with `--emit-personality "$RUN/custom.json"` (and a scratch `--out "$RUN/motion-draft.md"`), re-run tasting with `--personalities <parent>,$RUN/custom.json --out "$RUN/tasting-adjusted"` so they see before and after, re-push `motion` with that tasting, and confirm before locking. Unsupported adjective → say which supported ones come closest.
- **None fit** (`more` action): ask what felt wrong, map it to vocabulary feel words, and run `pick.mjs motion` again with `--exclude <the ids just shown>` so the new menu is genuinely new (the same inputs give the same menu).
- Lock it (the `--adjust` list must match what they approved):

```bash
node $SKILL_DIR/scripts/motion-md.mjs write --personality <id> [--adjust a,b] --out "$RUN/motion.md" \
  --mode confirmed|auto --reason "<one line: why this fits the concept>"
node $SKILL_DIR/scripts/memory.mjs record --step motion --value <id> --mode confirmed|auto
```

Skip → `auto.pick` from `pick.mjs motion` (tail-weighted, rotates away from the last 3 motion picks); receipt `auto.receipt`.

## Step 5: Keyframes

Ask: **see the key poses before the build, or go straight to the build?** Recommend poses for anything longer than about 4 s or with more than two elements. Console: push `keyframes` with just the `question` (no `board`); the panel offers both buttons.

If yes, write `$RUN/keyframes.json` (format: `references/board-format.md`): per shot, the elements (text, position, size, `split` for per-letter / per-word motion) and 4–7 poses. Pick pose times so every animated segment lands on the motion.md scale, staggered segments finish before the next move, and every element holds at least `holds.min_ms` after it has fully arrived. Then:

```bash
node $SKILL_DIR/scripts/board.mjs --poses "$RUN/keyframes.json" --motion "$RUN/motion.md" \
  --preset <look> (or --frame <path>) --out "$RUN/board" --still
```

Exit code 3 = problems against the contract (listed in the output and on the board): off-scale or off-ease segments, stagger overruns, short holds, and pose pairs that would force a **banned** move. Fix keyframes.json and re-run **before** showing it. Push `keyframes` with `board` (`$RUN/board/board.html`) and `issues` (empty); show `board.png` inline (after a revision, `board.prev.png` is the previous version). Feedback ("hold longer on the tagline", "snap into 4", "drop the label") arrives as a `note` → edit poses / segment `kind` / `ease` (motion.md eases only), re-run, re-push. Loop until `approve`.

Skip → no board; the build choreographs from motion.md alone. Record: `node $SKILL_DIR/scripts/memory.mjs record --step keyframes --value yes|no --mode confirmed|auto`.

## Step 6: Music

Optional music bed. Unless the request settled it, fetch 2–3 candidates whose moods come from the concept and the motion personality's feel:

```bash
node $SKILL_DIR/scripts/music.mjs --run "$RUN" --intents "<mood one>|<mood two>|<mood three>"
```

It prints console-ready `options` (id, title, mood, duration, file) from HyperFrames' media-use catalog. Push `music` with that JSON plus the question; the console plays each track. If the result has `unavailable` (media-use / heygen not set up), push it anyway: the panel explains and still offers "No music" and "Use my track". In chat, list the tracks with their moods.

Answers: `choose` with an id (use that file), `"none"` (silent piece), or `{file}` (their own track; check it exists). Record: `node $SKILL_DIR/scripts/memory.mjs record --step music --value <id|none> --mode confirmed|auto`. The chosen track goes into decisions.json as `"music": {"path": "<file>", "title": "<title>"}`.

Skip → the first candidate whose mood fits the concept, or none if none fits; receipt names the choice.

## Step 7: Build & render

**7a. Plan.** Push `plan` with `shape` (route, category, aspect, length, motion, keyframes, music), `stated` (what the user chose, per step) and `agent` (what you decided, each with its receipt). Say the same in chat. A correction (`note`) is folded in and the plan is pushed again; never hand off an edited-but-unconfirmed plan. Continue on `approve`. An agent pick the user explicitly keeps here is re-recorded with `--mode confirmed`.

**7b. Handoff.** Write `$RUN/decisions.json` (format: `references/handoff.md`). Set `confirmed` to only the answers the user actually gave (destination, aspect, language, look), because those become HyperFrames' remembered defaults. Then:

```bash
node $SKILL_DIR/scripts/handoff.mjs --decisions "$RUN/decisions.json"
node $SKILL_DIR/scripts/console.mjs log --run "$RUN" --stage handoff --stage-status done --level ok --message "project ready: videos/<project>"
```

If it stops because `videos/<project>` already exists, ask: revise that piece (go to **Revise**) or use a new name. Otherwise it inits `videos/<project>` for the route, writes `frame.md`, `motion.md`, `keyframes.json`, the music and other assets, a canonical `BRIEF.md` and `DISPATCH.md`, and for `motion-graphics` a host root `index.html` that mounts the Builder's `compositions/index.html`. It records HyperFrames' preference fields. Route: `motion-graphics` for a short unnarrated piece (the normal case); otherwise the route HyperFrames' own table would pick.

**7c. Build through the route workflow.** For a route other than `motion-graphics`, DISPATCH.md carries only the decisions and the motion contract; append it to whichever subagents that workflow uses to plan, design, build or repair, and let its own design step own layout. The rest of 7c is written for `/motion-graphics`. Read its SKILL.md (`~/.claude/skills/<route>/SKILL.md`) and follow it. Its opening "keep this skill fresh" command is already done: handoff's `init` refreshed the skills this run, so don't re-ask. It adopts the project: Step 0 skips `init` because `hyperframes.json` exists, and BRIEF.md answers the director's question. These additions stay in force for the whole build:

1. **Append the full text of `videos/<project>/DISPATCH.md` to every subagent dispatch**: Director Part 1, Director Part 2, Builder, and repair (finalize). Those subagents never read BRIEF.md; DISPATCH.md carries the decisions, the motion contract, the output shape, where it overrides the workflow's references, the music bed, and how approved keyframes map into `shot-plan.json`.
2. **Stream progress to the console.** At each workflow stage run `console.mjs log --run "$RUN" --stage <plan|design|build|verify|obey|render-gate> --stage-status working|done|failed --message "<one line>"`. Stages: plan = Director Part 1, design = Part 2, build = Builder, verify = lint/check/snapshots.
3. **After the workflow's verify step** (lint, check, snapshots) and **before its render question**:
   ```bash
   node $SKILL_DIR/scripts/obey.mjs --project videos/<project>
   ```
   - **Exit 2 = violations.** Dispatch the workflow's repair subagent with: its `agents/finalize.md` + the output of `obey.mjs --project videos/<project> --json` + DISPATCH.md, and one line saying the obey findings are in scope for this repair (finalize otherwise only fixes lint/check/snapshot defects). Then **re-run lint, check and snapshots, then obey again**. At most **2** obey repair passes. If the repair escalates back to design/build, those dispatches carry DISPATCH.md too.
   - **Exit 1 = could not run** (Chrome, a script error, no tweens found). Nothing was checked: report it plainly, fix the cause if it's a real composition error, and never present it as clean.
   - Warnings don't block; mention them. Log the result to the console's `obey` stage (`--level ok|warn|error`).
4. **Violations left after 2 passes** are listed at the render gate with a per-item choice: fix again, or waive. Record each waiver with `node $SKILL_DIR/scripts/obey.mjs waive --project videos/<project> --rule "<rule>" --target "<target>"` (rule and target exactly as obey printed them; don't hand-edit motion.md), then re-run obey. The finding shows as WAIVED.
5. **The render question goes to the console.** Push `render` with `images` (the proof snapshots / contact sheet under `videos/<project>/snapshots/`), `question` ("preview first, or render?") and, once Studio is running, `studio` (its URL). Wait. `choose "preview"` → open Studio per the workflow and come back to the same question; `choose "render"` → render per the workflow; a `note` → revise and re-verify.
6. **Deliver.** Push `render` again with `videos` (`videos/<project>/renders/*.mp4`) and `status: done`, log `render-gate` done, and in chat give the workflow's render report plus one line: motion personality, obey status (clean / N warnings / N waived).

## Memory

`$RASA_DIRECTOR_HOME/history.jsonl` (default `~/.rasa-director/`), via `scripts/memory.mjs`, one row per pick with `mode`:
- **Confirmed** picks (the user chose it, or kept an agent pick in the plan) only **pre-select the recommended option when the user is choosing**, with a receipt.
- **Every** pick (auto or confirmed) feeds rotation. "You decide" never applies a remembered preference; it rotates away from recent picks, so skipping everything doesn't converge on a house style:
  - Motion and Look: `pick.mjs` excludes the last 3 picks (the window shrinks when the pool gets too small; Motion keeps two tail candidates regardless).
  - Concept: before deciding, run `node $SKILL_DIR/scripts/memory.mjs recent --step concept --n 3` and don't reuse those concepts.
  - Brief, Keyframes and Music skips use fixed defaults and don't rotate.

## Revise an existing piece

When `videos/<name>` already has a project: show the current brief, look and motion (from `BRIEF.md`, `frame.md`, `motion.md`) as pre-filled answers and ask which steps to reopen (`concept`, `look`, `motion`, `keyframes`, `music`, `brief`). Start a console for the new `$RUN` and rework only those steps, reusing the project's files for the rest, then:

```bash
node $SKILL_DIR/scripts/handoff.mjs --decisions "$RUN/decisions.json" --revise --reopen <steps>
```

It moves what those steps invalidate (`shot-plan.json`, `compositions/`, `snapshots/`, `renders/`; never the user's `assets/`) into `.superseded/<stamp>/`, so the workflow's resume table rebuilds instead of jumping to the render gate. It rewrites `BRIEF.md`, `DISPATCH.md`, the specs and the host root from decisions.json, which must therefore describe the whole piece (unchanged steps point at the project's existing `motion.md` / `keyframes.json`; keep `look.preset` if a preset was used, since pointing `look.frame` at the project's frame.md would drop `style_preset`; keep `music` pointing at the project's `assets/` file). handoff re-validates any keyframes against the new motion.md and refuses if they no longer pass (after reopening `motion`, re-run `board.mjs`, fix and re-approve the poses). A different aspect needs a new project. Then continue at 7c.

## Failure handling

- A script exits non-zero → show its stderr, fix the input, re-run. Don't hand-write the artifact instead.
- The console won't start or the user can't open it → carry on in chat; every step works there too. `console.mjs url --run "$RUN"` reprints the URL; `console.mjs stop --run "$RUN"` stops it at the end.
- Offline: previews and obey use the vendored GSAP, so they still work, but fonts come from Google Fonts and fall back to system fonts (say the stills aren't the real type). Music needs the network. The project's host root and HyperFrames itself load GSAP / fonts from the network at build and render time.
- tasting.mjs / board.mjs exit 1 with "did not render" → the page hit a script error; open it in a browser, report the console error.

## References

| Need | Read |
|---|---|
| console payload fields per step, action types | `references/console.md` |
| motion.md fields, tween classes, rules, banned-pattern signatures, adjectives, waivers | `references/motion-md-contract.md` |
| keyframes.json format for the board, and how the build uses it | `references/board-format.md` |
| decisions.json format, what handoff writes, how the route adopts it, revise | `references/handoff.md` |
| the 10 personalities, feel vocabulary, adding a personality | `references/personalities.md` |
