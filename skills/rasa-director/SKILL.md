---
name: rasa-director
description: >
  Rasa Director: creative direction for entire videos made with Claude and HyperFrames (launch films,
  explainers, PR videos, brand reels, music videos, reels cut from a folder of raw footage with
  motion-graphics cards between clips and overlays/captions on top, captioned talking heads, and short
  motion graphics). Walks the user through every creative decision in the terms motion designers use: a
  taxonomy of 30 dimensions (format, UI treatment, visual style, illustration, typography, color, shape,
  depth, motion language, transitions, camera, pacing…) compiled into an art-direction brief; many complete
  design directions shown as boards; or the project's own DESIGN.md as the look. Each decision is made by
  eye or ear in a local Director's Console that opens in the browser; any step can be skipped with "you decide". Claude
  then designs and animates every frame (style frames, cards, scenes) from that direction through the
  matching HyperFrames workflow, and every built scene is checked against the motion contract. Use when the user wants to make a video and choose how it looks, moves and sounds, has a
  folder of clips to cut into a reel or edit, says
  "/rasa-director", "direct my video", "guide me through the style", "show me options first", "tasting
  menu", "storyboard first", or complains that AI video looks generic. Builds with HyperFrames
  (/hyperframes and its workflows); does not replace them. Videos only: never slide decks or presentations (for a talk
  it makes the video that plays in it, not the deck).
---

# Rasa Director

*Rasa* (रस): the feeling a work leaves in its audience; *rasanai* (ரசனை, Tamil): the taste to choose it. The user is the director; Rasa gives them the vocabulary and the choices; **Claude designs and animates**; HyperFrames renders. Rasa Director **decides** everything creative about a video up front, then Claude builds exactly that.

Why it exists: left alone, every AI video tells the obvious story, in a default look, where everything fades up and slides on the same ease. A motion-graphics style is never one style: it is a stack of decisions (format, UI treatment, visual style, typography, color, depth, motion language, transitions, pacing…). Rasa puts each decision in front of the user in proper terms, shows it by eye, compiles the stack into an art-direction brief (`DIRECTION.md`) and a binding motion contract (`motion.md`), and checks that what Claude builds obeys them.

Scripts are zero-dependency Node (≥ 20) in `<skill dir>/scripts/`. They print JSON; read it rather than reconstructing their work by hand. The integration details per workflow are in `references/video.md`.

## Hard rules

1. **One path, every step skippable.** Walk the steps in order. At every step the user may pick, say **"you decide"** (this step) or **"you decide the rest"** (every remaining step). Never ask who should do what; never split the flow into modes.
2. **Intent in the request counts.** Anything the request already settles is not asked again ("you decide the look" skips Look only; a pasted script answers the script; "no voiceover" skips Voice). Each such answer gets a line in the plan's receipts.
3. **Only the source is required:** what the video is about (a product URL, a topic, a script, a PR, a music track, footage). Everything else can be decided.
4. **Show, don't ask.** Decisions are made on rendered previews of the user's own video (design directions on their words, motion-language swatches of their lines, style frames of their video, their scenes in the transitions menu, their hook line in the voice samples). Every question and its options go to the **Director's Console**, always. Chat only points to it in one line; never list the options in chat and never ask through an in-chat question or multiple-choice tool (such as AskUserQuestion). If the user types an answer in chat anyway, accept it.
5. **"You decide" never means the default.** Story and Motion skips sample wide with a tail constraint; Look skips rotate; the rest use sensible defaults. Every agent decision gets a one-line receipt: what was picked and the obvious option passed over.
6. **One question per step**, recommended option first. "Go" or silence accepts the recommendation.
7. **Render is never skipped by "you decide".** The workflow's own "preview first, or render?" gate always runs.
8. **Claude designs and animates; HyperFrames renders.** Every frame, card, overlay and style frame of the real video is designed by Claude from `DIRECTION.md`, `frame.md` and `motion.md`, through the matching HyperFrames workflow (or, for reels, from the card briefs). Rasa's own previews (design boards, motion swatches, the transitions menu) exist only to choose by eye; they are never the product.
9. **Proper terms.** Every option shown and every decision recorded uses the taxonomy's terms (`taxonomy/dimensions/*.json`, `node $SKILL_DIR/scripts/taxonomy.mjs show <dimension>`); prompts to builders are compiled from those entries, never from vague adjectives.
10. **Videos only.** Rasa makes rendered videos (MP4), nothing else. Never offer, ask about or build a slide deck, presentation, pitch deck, speaker notes or a web page, and never route to HyperFrames' `slideshow` workflow. If the video is for a talk, keynote or pitch ("a 5-minute talk with my deck"), it is the video that plays in or around it (an opener, a walk-on, a segment during the talk, a loop behind the speaker), and the user's deck or script is source material to read, not something to make.
11. **The project's brand wins.** If the workspace has a brand reference (`brand.mjs detect`: DESIGN.md, design.md, BRAND.md, docs/DESIGN.md), offer it first and use its colors and fonts exactly; directions then vary the art direction around it.

## Setup (once per run)

```bash
# SKILL_DIR = the base directory Claude Code printed when this skill loaded. Otherwise this finds every installed
# copy (skills folders and the plugin cache) and takes the newest version, so an old copy never shadows an update
SKILL_DIR=$(for d in ~/.claude/skills/rasa-director ~/.agents/skills/rasa-director .claude/skills/rasa-director $(find ~/.claude/plugins/cache -maxdepth 6 -type d -path '*rasa-director*/skills/rasa-director' 2>/dev/null); do [ -f "$d/SKILL.md" ] && echo "$(cat "$d/VERSION" 2>/dev/null || echo 0) $(cd "$d" && pwd -P)"; done | sort -V | tail -1 | cut -d' ' -f2-)
bash "$SKILL_DIR/scripts/setup.sh" --open
```

`setup.sh` needs only bash and curl. It finds Node ≥ 20 (the PATH, then nvm, fnm, Volta, asdf, Homebrew; if there is none it downloads a private, checksum-verified copy of Node LTS into `~/.rasa-director/node`; nothing system-wide changes), checks for updates, checks HyperFrames and the browser, makes the run folder, adds `.rasa-director/` to `.gitignore` and starts the Director's Console. It prints `SKILL_DIR=`, `RUN=`, `NODE=`, `UPDATE=`, `HYPERFRAMES=`, `BROWSER=`, `CONSOLE=` and ends with `READY` or `FAILED`; every `PROBLEM:` line says what broke and the fix. Tell the user each problem in plain words and fix what you can before going on.

**`PATH_PREFIX=` means Node isn't on the shell's PATH.** Put that prefix, literally, in front of every later command that runs `node` or `npx` (e.g. `PATH="/Users/me/.rasa-director/node/bin:$PATH" node …/direction.mjs …`), including the HyperFrames workflow's own commands.

**Shell variables do not survive between tool calls.** Note the literal `SKILL_DIR` and `RUN` values and write them literally in every later command (below they appear as `$SKILL_DIR` / `$RUN`). Run everything from the workspace root.

- Setup starts the Director's Console and opens it in the browser. Run setup again in the same video (a new session, after compaction) and it resumes the unfinished run and its console (`RESUMED=`); `--new` starts a fresh video. The console survives on its own: if it stops (sleep, a killed process), the next `push`, `activity`, `log` or `wait` restarts it on the same address and the open tab reconnects by itself; give the user its URL in your first message. The console is where every question is asked, for every run; there is no chat-only mode. If the user can't find the page, run `serve --run "$RUN" --open` again (it reuses the running console and reopens the tab).
- **Updates happen by themselves.** Setup checks for a newer release every time the skill loads (a 10-minute cache; 2 seconds at most; silent offline) and installs it the way this copy was installed (plugin, installer, git clone on master, skills CLI), then starts over from the new copy. **If setup prints `UPDATED=`, re-read `SKILL.md` in the `SKILL_DIR` it printed last, before anything else, and follow that version from here on**; tell the user in one line ("Updated Rasa Director from 0.5.0 to 0.6.0: <the `whats_new` highlights>"). `behind: true` without an update (the user set `RASA_DIRECTOR_AUTO_UPDATE=0`, a git checkout on another branch, or the update failed: see `error`) → one line saying a newer version is out; "update" runs `node $SKILL_DIR/scripts/update.mjs apply`. Never update while a build or render is running.
- `FAILED` with no Node → setup could not download one (offline, or `RASA_DIRECTOR_NO_NODE_DOWNLOAD=1`): tell the user to install Node ≥ 20 from https://nodejs.org and run setup again; stop.
- No HyperFrames CLI → tell the user to install it (`npm i -g hyperframes`, or use `npx`); stop. Workflows install on demand with `npx hyperframes skills update <workflow>`.
- `browser ensure` fails → previews still open as HTML but there are no stills and the motion check can't run; say so, never claim a check passed.
- The user wants to change a video that already exists in `videos/` → **Revise** below.

Then show the step map once:

> Here's how we'll direct this, each step decided by eye (or ear) in the console at <URL>. Say **"you decide"** on any step, or **"you decide the rest"**.
> 1 Brief · 2 Brand · 3 Route · 4 Direction · 5 Story · 6 Scenes · 7 Look · 8 Motion · 9 Style frames · 10 Transitions · 11 Voice · 12 Music · 13 Storyboard · 14 Build & render
>
> (A footage reel runs: Brief · Brand · Route · Footage · Direction · Story · Look · Motion · Style frames · Cut · Music · Plan · Build & render.)

## The Director's Console

A local page (`console.mjs`, 127.0.0.1 only, token + session cookie) with one panel per step. Payload fields per step and every action type: `references/console.md`.

**For every step:**

1. **Push** the step's full payload (a push replaces the step): write it to a file, then `node $SKILL_DIR/scripts/console.mjs push --run "$RUN" --step <step> --file "$RUN/<step>.json"`. Paths inside payloads are workspace-relative.
2. **Point to it in chat**, one line: what's waiting and your pick ("Next in the console: pick a direction. My pick is B, a Swiss grid launch film."). No option lists, no question tool.
3. **Wait** with `run_in_background: true` so the user can also reply in chat: `node $SKILL_DIR/scripts/console.mjs wait --run "$RUN" --timeout 3000`. You're notified with one JSON action `{step, type, value, note}`. A chat answer → `console.mjs record --run "$RUN" --step <step> --type choose --value '<json>' --note "<their words>"`. Exit 2 = timeout (wait again); exit 3 = the console could not be restarted by itself (`serve --open` again, then re-push the step). A late action for a settled step is a correction if it differs.
   **Between questions, the console shows the work live.** Rasa's scripts report themselves ("Composing three directions", "Drawing direction 2 of 3", "Capturing tally.app") and, in the plugin, every command, write and edit you make appears too, from the description you give each command, so write those descriptions for the user. Narrate the rest yourself, the thinking between scripts: `node $SKILL_DIR/scripts/console.mjs activity --run "$RUN" --message "<what you're doing, in plain words>"` before each piece of work that takes more than a few seconds (capturing the site, composing directions, writing pitches, drawing style frames, building scene 3 of 9). One line each, the user's language, no file paths. Aim for something new in the feed at least every 30 seconds of work.
   **Talking it through.** Under every step the user can discuss it with you ("the second one, but warmer", "why this story?", "mix 1 and 3"); it arrives as a `note`. Answer in the console, never only in chat: `node $SKILL_DIR/scripts/console.mjs reply --run "$RUN" --step <step> --message "<one to three sentences>"`. If they asked for a change, make it and re-push the step (the discussion is kept), and say what changed in the reply.
4. **Act** on it (types: `submit`, `choose`, `adjust`, `more`, `approve`, `decide`, `decide-rest` on step `*`, `note`; see `references/console.md`).
5. **Close** the step: `console.mjs push --run "$RUN" --step <step> --status done --data '{"decision":"<what + receipt>"}'` (or `--status skipped` for steps this route doesn't use), then push the next.

## Step 1: Brief

Console: push `brief` with what the request already gives. The user fills: **what the video is** (source), an optional key line, where it plays (→ aspect: website/YouTube 16:9 · feed 1:1 · Reels/TikTok/Stories 9:16 · 4:5), length (launch films and explainers are strongest at 30–90 s), and **voiceover or not**. `memory.mjs recommend --step aspect` gives a remembered aspect to recommend. Record the aspect: `node $SKILL_DIR/scripts/memory.mjs record --step aspect --value <WxH> --mode confirmed|auto`.

## Step 2: Brand (the project's own design system)

```bash
node $SKILL_DIR/scripts/brand.mjs detect            # DESIGN.md / design.md / BRAND.md / docs/DESIGN.md in the workspace
node $SKILL_DIR/scripts/brand.mjs board --file <DESIGN.md> --out "$RUN/brand" [--mode light|dark]
```

It reads every common shape (Google design.md spec frontmatter with oklch colors, impeccable, gstack, Stitch-style prose, CSS custom properties, token tables), assigns roles (canvas, ink, accent, surface, muted, status), finds the fonts (mapping platform fonts like SF Pro to shipped equivalents, with a warning), radii, shadows and do/don't rules. Push `brand` with `brand` (the `read` summary) and `board`; read its warnings aloud. Answers: Either way set `"brand": "<DESIGN.md>"` (and `"brand_mode"`) in decisions.json so its don'ts reach DIRECTION.md. `use: "direct"` → the brand's own frame.md is the look (`look: {design_md, mode}`; skip the Look step's boards or show them for reference); `use: "remix"` → brand-locked design directions in Step 7 (`design.mjs looks --brand`), and the picked one is the look (`look.frame`; its colors and fonts are still the brand's); `use: "none"` → ignore it. A brand with light and dark variants needs a `mode`. No brand reference → push `brand` `--status skipped`.

## Step 3: Route

Pick the HyperFrames workflow that builds this video, using HyperFrames' own route table (`~/.claude/skills/hyperframes/SKILL.md` §2 and its "Resolve common ambiguities"):

| The video is… | Route |
|---|---|
| a product, app, company or site being launched / promoted / toured | `product-launch-video` |
| a topic, article, notes or how-to told with invented visuals | `faceless-explainer` |
| a GitHub pull request / code change | `pr-to-video` |
| cut to a music track (lyric video, beat-synced promo) | `music-to-video` |
| **a folder of raw clips** to cut together (reels, vlogs, event recaps, product b-roll edits), with cards between clips and titles, lower thirds or captions on top | `reel` (Rasa's own reel editor, rendered by HyperFrames) → **Footage reels** below |
| one continuous talking-head clip + plain captions (no cutting) | `embedded-captions` |
| existing talking-head / interview / podcast footage + designed overlay cards | `talking-head-recut` |
| anything else: brand reel, montage, longer or custom multi-scene piece, footage remix | `general-video` |
| one short unnarrated motion unit (a title, sting, stat hit, under ~10 s) | `motion-graphics` → **Single motion units** below |
| a video for a talk, keynote or pitch (an opener, a segment played during it, a loop behind the speaker); the deck or notes are the source | `general-video` (a product being launched on stage: `product-launch-video`). Never `slideshow`: Rasa doesn't make decks |

Push `route` with 2–3 plausible options (`id`, `label`, `why`), the best one recommended. Record it (`memory.mjs record --step route --value <route> --mode confirmed|auto`), then set up the project and intake:

```bash
node $SKILL_DIR/scripts/video.mjs init --route <route> --project <kebab-name> --aspect <aspect>
# product site:            node $SKILL_DIR/scripts/video.mjs capture --project-dir videos/<name> --url "<URL>"
# topic / script / no site: node $SKILL_DIR/scripts/video.mjs capture --project-dir videos/<name> --no-capture --title "<title>" --text-file "$RUN/brief.txt"
```

- A failed or blocked capture is a **hard stop**: report the reason and ask for screenshots or a brief; never build from a partial capture. Show a couple of capture screenshots in the Story panel's context.
- `pr-to-video`: resolve the project folder with that workflow's `scripts/project-dir.mjs --pr <ref>` and pass it as `--project-dir`; run its Step 1 fetch/ingest scripts (`fetch-pr.mjs`, `ingest.mjs`) before Story.
- `music-to-video`: the track is the spine; ask for it (run Step 12, Music, now). The workflow plans its cuts from the beat grid with hard cuts, so skip Scenes, Transitions and Voice (push them `--status skipped`).
- `reel`: no `video.mjs init`/`capture`; go to **Footage reels** below.
- Footage routes (`embedded-captions`, `talking-head-recut`): skip Story, Scenes, Transitions and Voice (push them `--status skipped`); Look becomes the caption identity / overlay style (see `references/video.md`).

## Step 4: Direction (the stack of decisions, in proper terms)

The heart of Rasa. Every dimension of the taxonomy is a decision the user can make or hand to Claude:

```bash
node $SKILL_DIR/scripts/direction.mjs directions --decisions "$RUN/decisions.json" --out "$RUN/directions" \
  --headline "<the key line>" --sub "<a real second line>" [--brand <DESIGN.md> --mode <m>] [--aspect <aspect>]   # three complete directions, with boards
node $SKILL_DIR/scripts/direction.mjs pick-direction --directions "$RUN/directions/directions.json" --id <id> --decisions "$RUN/decisions.json"
node $SKILL_DIR/scripts/direction.mjs menu > "$RUN/menu.json"         # every dimension, its question, terms, definitions
node $SKILL_DIR/scripts/direction.mjs suggest --dimension visual-style --decisions "$RUN/decisions.json"   # candidates for "you decide"
node $SKILL_DIR/scripts/direction.mjs compile --decisions "$RUN/decisions.json" --out "$RUN/direction"
```

- **Ask with three complete directions, never with the dimension form.** Write what the request already settles into `$RUN/decisions.json` first ("a playful explainer with doodles" settles format, tone and illustration), then run `directions`: whole style combinations that fit those picks, no two with the same visual style, one of them unusual, never one built on the generic default (it is returned as `passed_over`, your receipt), each with a name, a one-line why, its defining terms and a board image in the user's words (in the brand with `--brand`). Push `direction` with `question: "Pick a direction"`, `directions`, `recommended` (the file's) and `dimensions` (menu.json's list, for Fine-tune). Answers: `choose <id>` → `pick-direction` merges that direction's picks and sets the look from its board (Step 7 then doesn't ask); `submit {direction, picks, decided_by}` (Fine-tune) → `pick-direction`, then write those picks over it; `more {exclude}` → run `directions` again with `--exclude <those ids>` and re-push; a full-form `submit {picks, decided_by, notes}` (the user opened every dimension) → write them into decisions.json (format: `references/direction.md`).
- For every dimension still open (or marked "Claude decides") that matters for this piece (always: format, visual style, typography, color, motion language, transitions, pacing; for product pieces also UI treatment; for explainers illustration), run `suggest` and pick from its candidates: they fit the picks so far (35 known style combinations), the generic default is excluded (it is returned as `passed_over`, your receipt), and `--recent` keeps it rotating; record `decided_by: agent` and a receipt naming the obvious option passed over.
- **References.** If the user shares screenshots, GIFs or videos of work they like, analyze each with `direction.mjs analyze` (every category: STYLE, EVIDENCE, CONFIDENCE, CLOSE ALTERNATIVES, then a style formula) by looking at it, and turn the result into picks. Two references → `direction.mjs compare`, and name the three or four decisions that make them feel different.
- `compile` writes `DIRECTION.md` (the style name, the style formula as a stack, a one-paragraph brief, and for every decision its definition, a precise **Do** instruction and what it is **not**) and `direction.json`. Show the style name and formula in chat. Motion language picked here becomes `motion.md` in Step 8; the look terms (visual style, color, typography, shape, stroke, shadow, texture) drive Step 7.

## Step 5: Story

Unless the request states a concept: ask what they're already picturing, then pitch **three stories, shown, not described**: each is a title, a one-line logline (12 words at most) and **three sketch frames** (the opening, the turn, the close) that Claude draws in the chosen direction's look, using the real captured screenshots and assets where they fit, with only the on-screen words (a caption of one to three words per frame, `beats`). Write the frames as HTML in `$RUN/story/<id>/01.html … 03.html` (sized to the aspect, the look's frame.md colors and fonts) and render them with `node $SKILL_DIR/scripts/design.mjs stills --dir "$RUN/story/<id>" --aspect <aspect>`. Push `concept` with `options: [{id, title, logline, frames: [3 PNGs], beats: [3 captions], rare}]` and `recommended`. The stories follow HyperFrames' pitch-round discipline (`~/.claude/skills/hyperframes/references/pitch-round.md`): one per path, **two of the three a model would rarely produce** (`rare: true`), no two with the same silhouette. Use the route's story craft: for launch films the arcs in `~/.claude/skills/product-launch-video/references/story-design.md` (PAS, Future Pacing, Demo Loop, Before-After-Bridge, Feature-Benefit Cascade) and its hook strategies; for explainers `faceless-explainer`'s story references. A mix or a question arrives as a `note` (see **Talking it through** below). Record: `memory.mjs record --step concept --value "<story name>" --mode confirmed|auto` (before a "you decide", check `memory.mjs recent --step concept --n 3` and don't reuse those).

## Step 6: Scenes (the whole film, scene by scene)

Write `$RUN/scenes.json` (format: `references/video.md`): per scene the title, on-screen text, what we see, voiceover line, duration, `type`/`persuasion`/`beat` (launch films), optional `blueprint` (only ids that exist in `hyperframes-animation/blueprints/`), `intensity` (low/medium/high), and `transition_in` (default from Step 10). Plan to the brief's length; every scene has one job.

Push `scenes` with `{"scenes": [...], "target_s": <length>, "transition_default": "...", "narrated": true|false}`. The panel is an editable table with a timeline strip: the user edits text, voiceover, length, transition and intensity, reorders, adds, removes, then **approves** (`submit` with the full list: write it back into scenes.json). Then:

```bash
node $SKILL_DIR/scripts/scenes.mjs --scenes "$RUN/scenes.json" --route <route> --out "$RUN/plan" [--mode autonomous]
```

It writes `STORYBOARD.md` (+ `SCRIPT.md` when narrated) in the workflow's exact format, validated with the workflow's own parser, and `timeline.json`. Exit 1 lists every problem (bad transition, missing blueprint, non-positive duration…): fix scenes.json and re-run. Voiced scene lengths are re-timed to the real narration by the workflow's audio step; say so. Pass `--mode autonomous` only after "you decide the rest".

## Step 7: Look

**Usually already decided: don't ask twice.** A direction picked from the cards comes with its look (`pick-direction` sets `look.frame` from the card's board and prints `look`): push `look` `--status done` with `decision: "From your direction: <look name>"` and go on. Show looks only when the user asks for variations ("show me other looks", a `note`), when the direction came from the full dimension form, or when `pick-direction` printed `look: null`; then the looks are variations of the chosen visual style (they honor its picks):

```bash
node $SKILL_DIR/scripts/design.mjs looks --decisions "$RUN/decisions.json" --out "$RUN/looks" --count 6 --aspect <aspect> \
  --headline "<the key line>" --sub "<a real second line>" [--brand <DESIGN.md> --mode <m>] --stills
node $SKILL_DIR/scripts/design.mjs pick --looks "$RUN/looks/looks.json" --id <letter> --decisions "$RUN/decisions.json"
```

Design directions, not color presets: each look is a visual style from the taxonomy made concrete (a palette by role from the style's signature colors, HyperFrames' 72 palettes or the color taxonomy; a type pairing from `taxonomy/looks/type-pairings.json`; radius, border, shadow, texture and a composition drawn from the style), rendered as a board with the user's own words, each with a ready `frame.md`. Picked visual styles are honored (several variants of one style); otherwise the styles come from `suggest`, one per family, never the generic default. With a brand: every look keeps the brand's colors and fonts and varies the art direction and which brand color is the ground. Push `look` with `page` (looks/index.html), `looks` and `recommended`; show `looks.png`. `choose <letter>` → `design.mjs pick` merges the look's terms into decisions.json and sets `look.frame` (recompile the direction). `more` → re-run with a new `--seed` and `--recent <the shown style ids>`; always pass `--recent` with the last 3 look picks (`memory.mjs recent --step look --n 3`). The frame presets (`pick.mjs look`) remain available when the user asks for them, and `music-to-video` requires one (its gate wants frame.md to be a verbatim preset copy); `pr-to-video` uses `code-editorial` (fixed by the workflow). Record: `memory.mjs record --step look --value <visual-style id> --mode confirmed|auto`.

## Step 8: Motion (one motion language for the whole film)

The motion language is a taxonomy term (`motion-language`: smooth, snappy, elastic, springy, precise, mechanical, luxurious/slow, cinematic, fluid, organic, stop-motion-like, glitchy, beat-synchronized…); each term carries a binding contract (eases, duration scale, stagger, hold, banned patterns). If Direction settled it, confirm it here by eye (alone, or next to 1–3 `suggest` alternatives); otherwise offer 4–6 candidates (`direction.mjs suggest --dimension motion-language --count 5`):

```bash
node $SKILL_DIR/scripts/tasting.mjs --scenes "<hook on-screen>::<sub> || <a middle scene> || <the close>" \
  --personalities lang-<term>,lang-<term>,… --frame "$RUN/looks/<letter>/frame.md" (or --preset <p>) --aspect <aspect> --out "$RUN/tasting" --stills
```

These are **swatches**: each cell plays three of the user's own lines in one motion language's eases and timings, so the language is judged by eye; the real animation is Claude's. Push `motion` with `tasting`, `cells` (tasting.json's `cells`), `adjectives` (the object `motion-md.mjs adjectives` prints) and `recommended`; show `tasting-enterMid.png`. Adjust (`adjust` action, value `{id: "lang-<term>", adjust: [...]}`): emit the variant with `motion-md.mjs write --language <term> --adjust a,b --out "$RUN/motion-draft.md" --emit-personality "$RUN/custom.json"`, re-run tasting with `--personalities lang-<term>,$RUN/custom.json --out "$RUN/tasting-adjusted"`, re-push, confirm. None fit (`more`): `direction.mjs suggest --dimension motion-language --exclude <shown terms> --count 5`. Lock:

```bash
node $SKILL_DIR/scripts/motion-md.mjs write --language <term> [--adjust a,b] --out "$RUN/motion.md" --mode confirmed|auto --reason "<why it fits this film>"
node $SKILL_DIR/scripts/memory.mjs record --step motion --value <term> --mode confirmed|auto
```

One motion language governs every scene; scenes differ only by `intensity` (set in Scenes). A cell id like `lang-snappy+slower` is an adjusted variant: `--language snappy --adjust slower`. Set `picks["motion-language"]` to `"<term>"` (and its `decided_by`) and `"motion": "$RUN/motion.md"` in decisions.json, then recompile the direction (its Avoid list gains the banned patterns).

## Step 9: Style frames (Claude designs the key frames)

Before anything moves, design **2–3 style frames**: stills of the video's key moments (the hook, a product or content beat, the close) at the video's aspect, in the chosen look and direction. They are how studios lock art direction before animation.

- Write each as a standalone HTML file in `$RUN/styleframes/NN-<name>.html` (root sized to the aspect with `data-width`/`data-height`, the look's colors and fonts from its `frame.md`, including its "Font loading" rules), composed exactly as `DIRECTION.md` says: its UI treatment, illustration, composition, typography, color proportions, shape, stroke, shadow, texture and depth. Real copy from the scenes. No animation needed.
- `node $SKILL_DIR/scripts/design.mjs stills --dir "$RUN/styleframes" --aspect <aspect>` → PNGs. Push `styleframes` with `images` and `captions`. `approve` → continue; a `note` → revise the frames (and, if it changes a decision, the direction) and re-push.
- The approved frames go to the build as references: list them in the decisions (`"styleframes": [...]`) and tell the frame workers (and reel card authors) to match them.

## Step 10: Transitions

```bash
node $SKILL_DIR/scripts/transition-menu.mjs --from "<scene 1 on-screen>" --to "<scene 2 on-screen>" --frame "$RUN/looks/<letter>/frame.md" (or --preset <p>) --aspect <aspect> --out "$RUN/transitions" --stills
```

It plays the user's first two scenes handing off through every transition the workflow can inject (hard cut plus the registry's types, run from the workflow's own templates). Push `transitions` with `menu`, `cells` (transitions.json's `cells`) and `recommended` (blur-crossfade when scene backgrounds differ, crossfade when they match; zoom-through at section changes). The `choose` value is the exact `transition_in` string. Record it (`memory.mjs record --step transitions --value "<value>" --mode confirmed|auto`) and set it as `transition_default` in scenes.json and re-run `scenes.mjs` (per-scene overrides live in the Scenes table). `music-to-video` uses hard cuts only; footage routes skip this step.

## Step 11: Voice (narrated videos)

```bash
node $SKILL_DIR/scripts/voice.mjs --run "$RUN" --line "<the hook voiceover line>" --tone "<2-3 words, e.g. warm,confident>" [--lang en]
```

Real samples of the hook line in 3 voices of different styles (HeyGen via media-use). Push `voice` with that JSON; `unavailable` → say so and let the workflow use its default. `choose <id>` → set `"voice": {"id","name","provider":"heygen"}` in scenes.json (re-run `scenes.mjs` so SCRIPT.md names it). `choose "none"` → no narration (re-run scenes.mjs with `"narration": false`). Record: `memory.mjs record --step voice --value <id|none> --mode confirmed|auto`.

## Step 12: Music

```bash
node $SKILL_DIR/scripts/music.mjs --run "$RUN" --intents "<mood one>|<mood two>|<mood three>"
```

Moods come from the story and the motion's feel. Push `music` (players; `unavailable` still offers "No music" / "Use my track"). A pick → `"music": {"path": "<file>", "title": "<title>"}` in the decisions (the exact track is locked into the build); `"none"` → `"music": "none"` and scenes.json `"music": null`; a mood-only choice → `"music": {"mood": "..."}` and scenes.json `"music": "<mood>"`. Record: `memory.mjs record --step music --value <id|none> --mode confirmed|auto`.

## Step 13: Storyboard and plan

1. Push `storyboard` with `timeline` (the contents of `$RUN/plan/timeline.json`) and `--status done`, so the user sees the whole film's timing, transitions, narration and music on one strip (it reopens for approval when the workflow draws its sketch sheet in Step 14).
2. Push `plan` with `shape` (route, length, scenes, look, motion, transitions, voice, music), `stated` (what the user chose) and `agent` (what you decided, each with its receipt). Continue on `approve`; fold in any `note` and re-push.
3. Write `$RUN/video-decisions.json` (format: `references/video.md`; `confirmed` lists only answers the user actually gave; `direction` = `$RUN/direction`; `look` = `{frame: <look's frame.md>, name}` (a picked design direction, brand-locked or not; it wins if `design_md` is also set) or `{design_md, mode}` (the brand's own frame.md) or `{preset}`; `brand`/`brand_mode` when there is one) and hand off:

```bash
node $SKILL_DIR/scripts/video.mjs write --project-dir videos/<name> --decisions "$RUN/video-decisions.json"
node $SKILL_DIR/scripts/console.mjs log --run "$RUN" --stage handoff --stage-status done --level ok --message "plan handed to <route>"
```

It writes `BRIEF.md` (canonical; the workflow asks nothing), `frame.md` (the chosen look or the converted brand reference, fonts staged with an `@font-face` section, then the **motion contract** and the **art direction** appended: the one file every frame worker reads), `DIRECTION.md`, `motion.md`, the approved `STORYBOARD.md` / `SCRIPT.md`, the music bed, `DISPATCH.md` (contract + direction for every subagent), and the confirmed preferences.

## Step 14: Build & render (the workflow runs; Rasa steers)

Read `~/.claude/skills/<route>/SKILL.md` and follow it on `videos/<name>` (install first if missing: `npx hyperframes skills update <route>`; `init` already refreshed skills this run, so don't re-ask). `BRIEF.md` exists, so it asks no brief questions, and its **Customizations** name every hook point. Keep these in force:

1. **Adopt the plan.** Don't regenerate STORYBOARD.md/SCRIPT.md or re-run `build-frame.mjs`; the plan gate is satisfied. Continue with the audio step and the visual-design step.
2. **Voice:** pass `--voice <id>` (and `--provider heygen` for product-launch-video) to the audio step.
3. **Sketch pass → console.** When the workflow draws `storyboard.html` (collaborative runs), push `storyboard` again with `sheet: "videos/<name>/storyboard.html"` plus the timeline, and relay the user's `approve` / `note` to the workflow's layout gate.
4. **After `frame-packets.mjs`:** `node $SKILL_DIR/scripts/video.mjs inject --project-dir videos/<name>` (the motion contract and the art direction go into every packet), then dispatch the frame workers with `DISPATCH.md` appended to each, plus the approved style frames as visual references.
5. **After `audio.mjs fetch-sfx`, before `assemble-index`** (when a music track was chosen): `node $SKILL_DIR/scripts/video.mjs audio-lock --project-dir videos/<name> --music videos/<name>/assets/music-bed.<ext>`.
6. **Stream progress:** `console.mjs log --run "$RUN" --stage <plan|design|build|verify|obey|render-gate> --stage-status working|done|failed --message "<one line>"` at each workflow step.
7. **Check the motion** after the workflow's verify step (transitions verify, lint, check, snapshots) and before its render question: `node $SKILL_DIR/scripts/obey.mjs --project videos/<name>` (it checks every frame; the assembled index.html and captions belong to the workflow). Exit 2 → re-dispatch the failing frames' workers with the obey `--json` findings + DISPATCH.md, then re-run the workflow's verify and obey (at most 2 passes); leftovers go to the render gate as fix-or-waive (`obey.mjs waive --project … --rule … --target …`). Exit 1 = could not run: report it, never call it clean.
8. **Render gate → console.** Push `render` with `images` (the contact sheet / snapshots), `studio` (the preview URL once running) and the question; `choose "preview"` → the workflow's preview; `choose "render"` → its render; a `note` → revise and re-verify. Deliver: push `render` with `videos` and `status: done`, log `render-gate` done, and give the workflow's render report plus one line: the style name, the motion language, obey status.

## Footage reels (route `reel`)

For a folder of raw clips the user wants cut together, with motion-graphics cards between clips and overlays or captions on top. Rasa's `reel.mjs` examines the footage, builds the cut as a HyperFrames composition (clip segments, cards and overlays drawn in the chosen look and motion, captions from the transcript, a music bed ducked under speech) and HyperFrames renders it. Formats: `references/reel.md`.

1. **Brief** as usual (where it plays → aspect; reels are 9:16; length). **Route** `reel`.
2. **Footage.** `node $SKILL_DIR/scripts/reel.mjs scan --footage "<folder>" --run "$RUN" [--lang <code>]`. It probes every clip (length, size after rotation, fps, sound), draws a contact sheet and poster per clip, finds shot changes and silences, and transcribes speech word by word with `hyperframes transcribe` (first run downloads the Whisper model; `--no-transcribe` skips it). **Look at every contact sheet** (Read the images) and read the transcripts before proposing anything. Push `footage` with `clips` (footage.json's `clips`); the user unticks clips to leave out (`submit` `{include:[ids]}`) or notes what matters.
3. **Story** (short): what the reel is for and its shape (hook → middle → payoff), 3 options, from what the footage actually contains. Skip if the user already said how to cut it.
4. **Direction**, **Look**, **Motion** and **Style frames** as usual (the tasting with the card and overlay words: `--scenes "<opening card> || <a lower third> || <closing card>"`). `reel.json` gets `"direction": "$RUN/direction"`, `"motion"` and `"look"` (`{frame}`, `{preset}` or `{design_md, mode}`). The motion governs every card, overlay and clip transition.
5. **Cut.** Draft `$RUN/reel.json` from the user's direction and the scan:
   - pick segments on **word boundaries** from the transcripts (in = a word's start − 0.1 s, out = its end + 0.15 s), drop silences and false starts, use shot changes as natural cut points; keep the hook in the first 2 s;
   - cards (`type: "card"`) between clips for titles, chapter beats, the closing call to action; overlays (`overlays`, seconds on the reel's timeline) for names, places and callouts on top of clips; `captions.on` for speech; `mute: true` on b-roll whose sound would fight the music;
   - `fit`: `cover` (default, crop with `focus`), `contain` (letterbox in the look's background) or `blur` (the clip over a blurred copy of itself, for 16:9 clips in a 9:16 reel); `rate` for speed changes; `transition_in`: `auto` (the motion's own handoff), `cut`, `dissolve`, `wipe`.
   Push `reel` with `timeline`, `overlays`, `captions`, `clips` (`[{name, duration}]`) and, after a build, `edl` (reel.edl.json) and `video` (the draft render). The user edits in/out points, order, cards, overlays and captions there (`submit` → write it back into reel.json) or says it in chat.
6. **Music** as usual (`reel.json` → `music: {path, volume, duck}`; it ducks under every clip that keeps its sound).
7. **Plan** → `approve`, then **Claude draws the cards and overlays**, then **build a draft**:
   ```bash
   node $SKILL_DIR/scripts/reel.mjs briefs --reel "$RUN/reel.json" --project-dir videos/<name>
   #   -> compositions/cards/<id>.brief.md for every card and overlay (text, size, duration, placement,
   #      the art direction, the motion contract, the fonts, HyperFrames' sub-composition rules, a scaffold)
   #   Read each brief and write the file it names: design and animate the card yourself, from the
   #   direction and the approved style frames (dispatch one subagent per card for several).
   node $SKILL_DIR/scripts/reel.mjs build --reel "$RUN/reel.json" --project-dir videos/<name> --render --quality draft
   ```
   `build` refuses while any card is missing or malformed and lists which. It stages each used segment (cropped to the reel's frame, constant fps, dense keyframes), mounts Claude's cards and overlays, writes `index.html` and the captions, runs `hyperframes lint` and `obey.mjs` (Claude's cards are checked too), renders, and prints warnings. `"by": "swatch"` on a card or overlay (or `"cards_by": "swatch"`) draws it with Rasa's preview engine instead: for a quick draft only. Read every warning to the user. lint or obey failing stops the render: fix reel.json (or waive in motion.md) and rebuild. Show the draft in `reel` (`video`) and `render`; iterate on notes by editing reel.json and rebuilding (unchanged segments are cached).
8. **Render gate**: on approval, rebuild with `--render --quality delivery` and deliver `videos/<name>/renders/<title>.mp4`.

A bespoke card (a product animation, a logo sting) can be built with `/motion-graphics` through **Single motion units** and dropped into the cut as `{"type": "card", "src": "videos/<unit>/compositions/index.html", "duration": N}` (copy any asset files it uses into the reel project at the same relative paths).

## Single motion units (route `motion-graphics`)

For one short unnarrated unit (title, sting, stat hit, lower third): Brief → Brand → Direction → Story (optional) → Look → Motion (tasting with `--content "<headline>" [--sub "<line>"]`) → Key poses (optional keyframe board: `board.mjs`, `references/board-format.md`) → Music (optional) → Style frames (optional) → Plan → `handoff.mjs --decisions "$RUN/decisions.json"` (format: `references/handoff.md`; `direction` and `look.frame` / `look.design_md` as for videos) → build through `/motion-graphics` with `DISPATCH.md` appended to every subagent, `obey.mjs` after verify, and the render gate in the console. Push the video-only steps (route, scenes, transitions, voice, storyboard) as `--status skipped`.

## Memory

`$RASA_DIRECTOR_HOME/history.jsonl` (default `~/.rasa-director/`), via `scripts/memory.mjs`, one row per pick with `mode`. **Confirmed** picks only pre-select the recommended option when the user is choosing. **Every** pick feeds rotation: "you decide" never applies a remembered preference; `direction.mjs suggest --recent <last picks>` and `design.mjs looks` rotate away from recent picks (`memory.mjs recent --step <look|motion|concept> --n 3`), and never pick the generic default. So skipping everything doesn't converge on a house style.

## Revise an existing video

Show the current plan (BRIEF.md, STORYBOARD.md, frame.md, motion.md) as pre-filled answers in the console and ask which steps to reopen. Rework those in a new `$RUN` (scenes.json can be rebuilt from STORYBOARD.md), then `video.mjs write --project-dir videos/<name> --decisions … --revise`: it moves the built frames, audio, packets and renders into `.superseded/<stamp>/` so the workflow rebuilds from the new plan, and rewrites the plan files. A different aspect needs a new project. Single motion units revise with `handoff.mjs --revise --reopen <steps>`.

## Failure handling

- A script exits non-zero → show its stderr, fix the input, re-run. Never hand-write an artifact a script owns.
- The console won't start → run `serve` again; still failing → show the error and fix it (a port in use: `--port 0`). Only if it cannot run at all (no browser on a remote machine), ask in chat, one question per message, in plain text, never through a question tool. `console.mjs url --run "$RUN"` reprints the URL; `stop` ends it.
- Offline: previews and the motion check use the vendored GSAP; fonts, capture, voice samples, music and the workflows' TTS need the network.
- A preview script exits 1 with "did not render" → the page hit a script error; open it in a browser and report the console error.

## References

| Need | Read |
|---|---|
| the taxonomy, decisions.json, DIRECTION.md, suggest/analyze/compare, design directions (looks) | `references/direction.md` |
| a project's DESIGN.md as the look: shapes read, roles, fonts, frame.md conversion | `references/brand.md` |
| per-route integration: what Rasa pre-writes, hook points, scenes.json and video-decisions.json formats, footage routes | `references/video.md` |
| footage reels: footage.json, reel.json, how cards/overlays/captions/music are built | `references/reel.md` |
| console payloads per step, action types, security | `references/console.md` |
| motion.md fields, tween classes, rules, banned patterns, adjectives, waivers | `references/motion-md-contract.md` |
| the motion-language terms and their contracts; the 10 calibrated preview swatches | `taxonomy/dimensions/motion-language.json`, `references/personalities.md` |
| single units: keyframe board format; decisions.json and handoff | `references/board-format.md`, `references/handoff.md` |
