---
name: rasanai
description: >
  RasanAI: creative direction for entire videos made with Claude and HyperFrames (launch films,
  explainers, PR videos, brand films, music videos, reels cut from a folder of raw footage with
  motion-graphics cards between clips and overlays/captions on top, captioned talking heads, and short
  motion graphics). The user makes five calls in a local Director's Console: confirm the brief, pick one of
  three scripts (written by a dedicated script pass from the product's truth), pick one of three looks for that
  story (named styles from a library of 403 design systems, drawn live on its lines), leave notes on a timed
  animatic with the music, and review the final. Claude decides all the craft
  (story devices, scenes, pacing, motion, transitions, music edit, sound design) from a quantified playbook,
  shows every call in a decisions drawer, and runs a crew of agents (researchers on the web and, with
  permission, the local code; writers; a Motion Director; scene animators in parallel; critics). It gates
  the film against AI-slop tells, a motion contract and a sound check before anything ships. Use when the user wants to make a video and choose how it looks, moves
  and sounds, has a folder of clips to cut into a reel, says "/rasanai", "direct my video", "show me
  options first", "storyboard first", or complains that AI video looks generic, tells the same story,
  loops its music or overuses effects. Builds with HyperFrames (/hyperframes and its workflows); does not
  replace them. Videos only: never slide decks or presentations (for a talk it makes the video that plays
  in it, not the deck).
---

# RasanAI

*Rasa* (रस): the feeling a work leaves in its audience; *rasanai* (ரசனை, Tamil): the taste to choose it. The user is the director; **Claude designs and animates**; HyperFrames renders.

Why it exists: when thirty people make an AI video, they get thirty videos with different content and the same film: the obvious story (hook, problem, "Introducing X", three features, call to action), a default look, everything fading up on the same ease, a 30-second music loop under a 45-second film, a whoosh on every cut and glowing text. Viewers now name these tells on sight. RasanAI replaces every default with a decision: a real story device picked from the product's truth, a named design system, a motion contract, music edited to picture, sound only where something happens. Then it checks the build against all of it.

Scripts are zero-dependency Node (≥ 20) in `<skill dir>/scripts/`. They print JSON; read it rather than redoing their work by hand.

**You are the Director, and you have a crew** (`references/crew.md`, briefs in `agents/`). Researchers find the product's truth on the web and, with the user's permission, in its code on this computer. A research lead merges it into one truth sheet. Three writers each write one script, and an editor reads them like a hostile reader. A Motion Director scores how the whole film moves, every shot and every seam. Frame designers draw the key frames. One scene animator builds each scene, all at the same time. Critics with fresh eyes judge the result. You talk to the user, make the calls and accept each member's work only when `crew.mjs check` passes. The crew never talks to the user. **Push them to show off** (`references/crew.md`): Claude's unpushed default is competent and forgettable, so every creative prompt ends on that ask, the score names its showreel moments, and the critics fail work that plays it safe. When you do a member's job yourself, hold yourself to the same ask.

## The shape of a run: five calls

The user is interrupted **five times**, and each time sees their own film, never a form. The story and the look are separate calls on purpose: a script is judged as words, beats and timing first, and the look is then chosen to make *that* story strongest.

| # | The user sees | They do | Everything else Claude decides |
|---|---|---|---|
| 1 | **Brief**: one editable sentence ("A 45-second launch film for Tally, 16:9 for the website, with voiceover, in Tally's own colours and type") and what was captured | fix a word, press Start (or **Just make it**) | the route, the brand read, the capture |
| 2 | **Story**: three scripts (Sure · Bold · Wild), each a title, a logline and the full script as timed beats: what's on screen, what's said, what we see | pick one, or tell Claude what to change in a line; "three more stories" | story devices, the truth sheet, the writing, the script checks |
| 3 | **Look**: three design systems chosen for that story, each drawn live on its own lines | pick one; "more like these", an energy knob, "browse all styles" | the style match, motion language, transitions |
| 4 | **Animatic**: the whole film as timed key frames with the real music bed and the voice, scene strip, scrubber | play it; click any moment to leave a note; swap music or voice; **Looks right, build it** | the script, scenes, pacing, key frames, the music edit, sound design |
| 5 | **Final**: the rendered film with scene markers, versions and what changed | click a moment to note it, apply notes, **Render the final**, download | the build, every check, the fixes |

Between calls the console shows the work live (Build is part of the Animatic state: scene by scene turning from key frame to finished). Everything Claude decided is listed in the **Decisions** drawer with a one-line reason; the user can change any of it by saying so (⌘K "Tell Claude", or a note).

## Hard rules

1. **Five calls, and only five.** Ask only: the brief, the story, the look, notes on the animatic, the final. Never ask which transition, ease, scene length, motion language, route, cut, music edit, SFX or font: those are craft, decided by `references/craft.md`, pushed `--status done` with a one-line reason. If a question needs expertise to answer, it isn't a question.
2. **Claude's picks are the most ambitious ones.** Of the three stories, recommend the most ambitious one that still tells the truth clearly (usually **Bold**); **Sure** is the safe floor, never the pick by habit. Every decision gets a receipt: what was picked and the obvious option passed over. "You decide" never means the default.
3. **Everything goes through the Director's Console.** Every question, option and answer. Chat points to it in one line; never list options in chat, never use an in-chat question tool (AskUserQuestion). Questions that aren't one of the five calls (a failed capture, missing material, an ambiguity) use `console.mjs ask` (below). If the user types an answer in chat anyway, accept it.
4. **Intent in the request counts.** Anything the request settles is not asked ("no voiceover", a pasted script, "use the Swiss style", "just make it"). A request that says "you decide" / "just make it" skips to the Final, stopping only there.
5. **Only the source is required**: what the video is about (a URL, a topic, a script, a PR, a track, footage). **If the request doesn't give it, ask in the console, not in chat**: push `brief` right after setup with `fields.subject` empty (the page shows a "What's the video about?" box above the sentence), then `wait`. Never end a turn with a question in chat and nothing waiting in the console.
6. **No slop ships.** A film leaves only after `story.mjs check` (the story), `slop.mjs` (copy, look, motion, timing, sound tells), `obey.mjs` (the motion contract) and `sound.mjs check` (loudness, loops, SFX density) pass, or the user waives a finding at the Final. Never claim a check passed that didn't run.
7. **Claude designs and animates; HyperFrames renders.** Every frame of the real film is designed by Claude from the chosen design system, `DIRECTION.md`, `frame.md` and `motion.md`, through the matching HyperFrames workflow. The style specimens in the console exist to choose by eye; they are never the product.
8. **Proper terms.** Decisions and build prompts use the taxonomy's terms (`taxonomy/dimensions/*.json`) and the film vocabulary (`references/vocabulary.md`), never vague adjectives.
9. **Videos only.** Rendered video (MP4), nothing else. Never offer, ask about or build a slide deck, presentation, speaker notes or web page; never route to `slideshow`. For a talk or keynote, make the video that plays in or around it; the deck is source material.
10. **The project's brand wins.** A workspace DESIGN.md (`brand.mjs detect`) is used by default: films are drawn in its colours and type, and the brief sentence says so (the user can switch to "a new look").
11. **Show the work live.** Something new in the console feed at least every 30 seconds of work (below).
12. **The Final is never skipped.** "Just make it" still stops at the Final to render and deliver.
13. **Research before story; nothing from memory.** What a product does, says and looks like today comes from the research desk (sourced claims, real screens, the real brand), never from what Claude remembers: memory is out of date by definition. A film about a well-known product is the hardest test, not the easiest.
14. **The crew does the work it's built for.** Dispatch the members `crew.mjs plan` lists, in the background, from their prompt files, and accept them on `crew.mjs check`. Don't do a member's job inline (it crowds out the run). The exceptions: no delegation available, or the user asked for none; then follow the same role files yourself, in order (`--lean`). The user's own files are read only after they say yes in the console.

## Setup (once per run)

```bash
# SKILL_DIR = the base directory Claude Code printed when this skill loaded. Otherwise this finds every installed
# copy (skills folders and the plugin cache) and takes the newest version, so an old copy never shadows an update
SKILL_DIR=$(for d in ~/.claude/skills/rasanai ~/.agents/skills/rasanai .claude/skills/rasanai $(find ~/.claude/plugins/cache -maxdepth 6 -type d -path '*rasanai*/skills/rasanai' 2>/dev/null); do [ -f "$d/SKILL.md" ] && echo "$(cat "$d/VERSION" 2>/dev/null || echo 0) $(cd "$d" && pwd -P)"; done | sort -V | tail -1 | cut -d' ' -f2-)
bash "$SKILL_DIR/scripts/setup.sh" --open
```

`setup.sh` needs only bash and curl. It finds Node ≥ 20 (the PATH, then nvm, fnm, Volta, asdf, Homebrew; if there is none it downloads a private, checksum-verified copy of Node LTS into `~/.rasanai/node`; nothing system-wide changes), checks for updates, checks HyperFrames, ffmpeg and the browser, makes the run folder, adds `.rasanai/` to `.gitignore` and starts the Director's Console. It prints `SKILL_DIR=`, `RUN=`, `NODE=`, `UPDATE=`, `HYPERFRAMES=`, `BROWSER=`, `CONSOLE=` and ends with `READY` or `FAILED`; every `PROBLEM:` line says what broke and the fix. Tell the user each problem in plain words and fix what you can before going on.

**`PATH_PREFIX=` means Node isn't on the shell's PATH.** Put that prefix, literally, in front of every later command that runs `node` or `npx` (e.g. `PATH="/Users/me/.rasanai/node/bin:$PATH" node …/story.mjs …`), including the HyperFrames workflow's own commands.

**Shell variables do not survive between tool calls.** Note the literal `SKILL_DIR` and `RUN` values and write them literally in every later command (below they appear as `$SKILL_DIR` / `$RUN`). Run everything from the workspace root.

- Setup starts the console and opens it in the browser. Run setup again in the same video (a new session, after compaction) and it resumes the unfinished run and its console (`RESUMED=`); `--new` starts a fresh video. The console survives on its own: if it stops, the next `push`, `activity`, `log` or `wait` restarts it on the same address and the open tab reconnects by itself. Give the user its URL in your first message. If they can't find the page, run `serve --run "$RUN" --open` again.
- **Updates happen by themselves.** Setup checks for a newer release every time the skill loads (a 10-minute cache; 2 seconds at most; silent offline), installs it the way this copy was installed, then starts over from the new copy. **If setup prints `UPDATED=`, re-read `SKILL.md` in the `SKILL_DIR` it printed last before anything else** and follow that version; tell the user in one line ("Updated RasanAI from 1.1.0 to 1.2.0: <the `whats_new` highlights>"). `RENAMED=` means this install came from Rasa Director (RasanAI's name up to 1.0); say once: "Rasa Director is now RasanAI: same skill, new name. Use /rasanai from now on" (plus "restart Claude Code to see /rasanai" when it printed `PLUGIN=`). Picks, settings and an unfinished video carry over. `behind: true` without an update → one line saying a newer version is out; "update" runs `node $SKILL_DIR/scripts/update.mjs apply`. Never update during a build or render.
- `FAILED` with no Node → setup could not download one (offline, or `RASANAI_NO_NODE_DOWNLOAD=1`): tell the user to install Node ≥ 20 from https://nodejs.org and run setup again; stop.
- No HyperFrames CLI → tell the user to install it (`npm i -g hyperframes`, or use `npx`); stop. Workflows install on demand with `npx hyperframes skills update <workflow>`.
- `browser ensure` fails → no key-frame stills and no motion check; say so, never claim a check passed.
- The user wants to change a video that already exists in `videos/` → **Revise** below.

Then one line in chat: "Everything happens in the console at <URL>. I'll show you the brief, then three films to pick from, then the whole film rough with music before I animate it, then the final. I decide the craft and list every call in Decisions, so you can change anything."

## The Director's Console

A local page (`console.mjs`, 127.0.0.1 only, token + session cookie). Payload fields per step and every action: `references/console.md`.

**Every call:**

1. **Push** the step's payload (a push replaces the step): write it to a file, then `node $SKILL_DIR/scripts/console.mjs push --run "$RUN" --step <step> --file "$RUN/<step>.json"`. Paths inside payloads are workspace-relative.
2. **Point to it in chat**, one line: what's waiting and your pick ("Three films are in the console. My pick is the Bold one, *The last shoebox*.").
3. **Wait** with `run_in_background: true` so the user can also reply in chat: `node $SKILL_DIR/scripts/console.mjs wait --run "$RUN" --timeout 3000`. You're notified with one JSON action `{step, type, value, note}`. A chat answer → `console.mjs record --run "$RUN" --step <step> --type choose --value '<json>' --note "<their words>"`. Exit 2 = timeout (wait again); exit 3 = the console could not restart by itself (`serve --open`, then re-push the step).
4. **Act** on it, then **close** the step: `console.mjs push --run "$RUN" --step <step> --status done --data '{"decision":"<what + receipt>"}'` (a done push with only a decision keeps the step's payload), and push the next.

**Craft decisions** go straight to the drawer: `console.mjs push --run "$RUN" --step <research|route|motion|transitions|scenes|music|voice|look> --status done --data '{"decision":"<pick>: <why, one line>"}'`.

**Live work.** Before each piece of work longer than a few seconds: `node $SKILL_DIR/scripts/console.mjs activity --run "$RUN" --message "<what you're doing, plain words>"` ("Writing the truth sheet: what actually changes for Tally's users", "Drawing the key frame of scene 4 of 7", "Fitting the music so the reveal lands on a downbeat"). One line each, the user's language, no file paths. RasanAI's scripts and, in the plugin, your commands (from their descriptions) appear too, so write command descriptions for the user.

**Talking it through.** Any step can be discussed; it arrives as a `note`. Answer in the console: `node $SKILL_DIR/scripts/console.mjs reply --run "$RUN" --step <step> --message "<one to three sentences>"`. If they asked for a change, make it, re-push the step and say what changed.

**Other questions** (not one of the five calls): `node $SKILL_DIR/scripts/console.mjs ask --run "$RUN" --question "…" --context "…" --options '[{"id":"a","label":"…","detail":"…"},…]' --recommended <id>`, then `wait`; the answer is `{type: "answer", value: {choice, text}}`. Never re-open an earlier step to ask it.

**Notes** on the Animatic and Final arrive one by one as `comment` actions (`{scene, t, x, y, scope, quick}` + the text) and collect on the page; don't act on each. When the user presses Apply you get `apply {ids}`: make all of them in one pass, touching only what they point at, then `console.mjs resolve --run "$RUN" --ids <ids> --note "<what changed>"` and re-push the step with `changes`. `decide-rest` (step `*`, "Just make it") → decide every remaining call yourself and stop only at the Final.

## 1 · Brief

Push `brief` within the first minute, before any long work: a request with no source ("make me a video", "create a folder and start") gets `brief` pushed at once with `fields.subject` empty and the box asks for it; the answer arrives as `submit` with `value.source` (a URL, topic, script, PR link, or a path to a track or a footage folder). Read it, then fill in and re-push the brief (capture, route, brand) and wait again. A fresh console also shows that box on its own until the first push, and its answer arrives the same way. Otherwise read the request and the workspace, then push `brief` with what they already say: `fields` (`length_s`, `kind`, `subject`, `aspect`, `destination`, `narration`, and `brand_name` + `use_brand` when there's a brand), optional `choices` to narrow a field's menu, and `captures` (a few images of what you'll use). Work first, ask second:

```bash
node $SKILL_DIR/scripts/brand.mjs detect                         # DESIGN.md / design.md / BRAND.md / docs/DESIGN.md
node $SKILL_DIR/scripts/memory.mjs recommend --step aspect        # a remembered aspect to pre-fill
```

- **Route** (craft; push `route` done): the HyperFrames workflow that builds it, from HyperFrames' route table (`~/.claude/skills/hyperframes/SKILL.md` §2):

  | The video is… | Route |
  |---|---|
  | a product, app, company or site being launched / promoted / toured | `product-launch-video` |
  | a topic, article, notes or how-to told with invented visuals | `faceless-explainer` |
  | a GitHub pull request / code change | `pr-to-video` |
  | cut to a music track (lyric video, beat-synced promo) | `music-to-video` |
  | **a folder of raw clips** to cut together, with cards between clips and titles/captions on top | `reel` → **Footage reels** |
  | one continuous talking-head clip + plain captions | `embedded-captions` |
  | talking-head / interview footage + designed overlay cards | `talking-head-recut` |
  | anything else: brand film, montage, custom multi-scene piece; a video for a talk or keynote | `general-video` |
  | one short unnarrated unit (a title, sting, stat hit, under ~10 s) | `motion-graphics` → **Single units** |

  Only when two routes are genuinely both right for different films, `ask`. Then set up the project and capture (work you can start while the user reads the brief):

  ```bash
  node $SKILL_DIR/scripts/video.mjs init --route <route> --project <kebab-name> --aspect <aspect>
  # product site:             node $SKILL_DIR/scripts/video.mjs capture --project-dir videos/<name> --url "<URL>"
  # topic / script / no site: node $SKILL_DIR/scripts/video.mjs capture --project-dir videos/<name> --no-capture --title "<title>" --text-file "$RUN/brief.txt"
  ```

  A failed or blocked capture is a **hard stop**: `ask` for screenshots or a brief; never build from a partial capture. `pr-to-video`: resolve the project folder with the workflow's `scripts/project-dir.mjs --pr <ref>` and run its fetch/ingest scripts. `music-to-video`: the user's track is the spine (ask for it with `ask` if missing).
- **Research** (the crew; `references/crew.md`). Start it the moment the subject is known, right after pushing the brief, so it runs while the user reads:

  ```bash
  node $SKILL_DIR/scripts/research.mjs local-find --name "<product>" [--domain <site>]     # folder names only: is the product, or an earlier video of it, on this computer?
  # found something → console.mjs ask: may I read these folders (and run the app)? Only a yes goes to --local
  node $SKILL_DIR/scripts/crew.mjs plan --run "$RUN" --route <route> --subject "<name>" [--url <url>] [--public] [--local "<approved dirs>"] [--may-run] [--length <s>] [--project videos/<name>]
  node $SKILL_DIR/scripts/crew.mjs brief --run "$RUN" --role <role> [--key <k>]               # per research member: writes its prompt, prints the Agent call
  ```

  Dispatch every research member at once, in the background (`--public` for a product with a web presence and launch history: it adds the precedent researcher, who measures the brand's past launch films shot by shot). Accept each on `crew.mjs check`, then dispatch the **research lead**: it writes `$RUN/story/truth.md` (run `story.mjs truth` first for the template), the claims ledger, the brand's DESIGN.md verdict, the asset kit and `research/BRIEFING.md`. Read the briefing (one page), not the research. Its "Ask the user" items go to the console as `ask` (unreleased features, login-only screens), each with a recommended default. Push `research` done with one line ("Read 23 official pages, 9 real screens, ChatGPT's last 3 launch films; the brand is OpenAI Sans on white, accent only on actions"), and add the 3 to 5 most useful findings to the brief as `findings: [{text, source}]` (the page shows them under "What I found").
- **Brand**: a workspace DESIGN.md wins. Otherwise the research lead's verdict says whether `research/brand/DESIGN.md` (built from official sources) is the brand. Then `brand.mjs read --file <DESIGN.md>` for its roles, fonts and warnings; set `"brand": "<DESIGN.md>"` in `$RUN/decisions.json`. `use_brand: false` in the submitted brief → films are drawn in each style's own colours.
- Answers: `submit <fields>` → write them into decisions.json; record `memory.mjs record --step aspect --value <WxH> --mode confirmed|auto`. Close `brief` with the sentence as the decision.

## 2 · Story (three scripts, before any look)

The story is written by its own pass, in the **writers' room**, with its own brief: **`references/script.md`** (how a good video script goes: structures by length and format, hooks, beats, the turn, voiceover and on-screen lines, the end, a worked example, the self-check) on top of the story engine (`references/story.md`: the truth sheet, devices, the rubric). It is a dedicated step, not something done on the way to the look. Judge the scripts as words and timing.

```bash
node $SKILL_DIR/scripts/story.mjs truth --out "$RUN/story/truth.md" --product "<name>"      # the template; the research lead fills it from the research
node $SKILL_DIR/scripts/story.mjs pick --truth "$RUN/story/truth.md" --count 3 --recent <ids from memory.mjs recent --step concept --n 6> [--format launch|explainer|brand|social] > "$RUN/story/picks.json"
# three script-writers in parallel (crew.mjs brief --role script-writer --key Sure|Bold|Wild), one device each → story/pitch-<label>.json
node $SKILL_DIR/scripts/crew.mjs pitches --run "$RUN"                                        # → story/pitches.json
node $SKILL_DIR/scripts/story.mjs check --pitch "$RUN/story/pitches.json" --truth "$RUN/story/truth.md" --length <seconds> [--narrated] > "$RUN/story/check.json"   # exit 2 → that writer rewrites exactly what it names
# then the script-editor (crew.mjs brief --role script-editor): story/edit-notes.json, line edits with exact fixes; one rewrite round through the writers, check again
```

The truth sheet comes from the research, not from guessing: real product words, real numbers, the real before and after, every proof item in the claims ledger. The editor's recommendation is evidence for your pick, not the pick (rule 2 still holds). With `--lean` or no delegation, write the three scripts yourself from `references/script.md`. `check` runs the story gates (G1 distance from the cliché arc, G2 swap test, G3 clear by second 4, G4 honest demo, G5 buildable) and **G6 the script** (length, the hook beat, value by beat 2, reading time, voiceover pace and sentence length, on-screen lines that repeat the voice, stock copy, rhythm, the end hold). Nothing reaches the user until all three pass; two rewrites at most, then swap the device.

Push `story`: `stories: [{id, angle: "Sure"|"Bold"|"Wild", title, logline (≤ 12 words), device (its name), why (one line: why this story for this product), beats: [{name, duration_s, on_screen, vo, visual, turn?, value?}], last_line}]` and `recommended` (the most ambitious that works). The page shows the three as tabs and the selected one as a script table (time, on screen, voiceover, what we see), with the turn marked. No style yet: the story is judged on its own.

Answers:
- `choose <story id>` → write that pitch to `$RUN/story/chosen.json` (the Motion Director scores from it), record `memory.mjs record --step concept --value <device id> --mode confirmed`, close `story` with "<title> (<angle>): <logline>", and go to the Look.
- A `note` ("make the hook shorter", "lose the voiceover in beat 3", "the museum one, but warmer") → rewrite those lines, re-run `check`, `reply` with what changed, re-push. `more {near, exclude}` → three new scripts from the next devices (`pick --exclude <shown>`); re-push.

## 3 · Look (three design systems for that story)

**The library:** 403 named design systems in 20 families, each a taxonomy stack, a recipe the console draws live, a motion contract and an exportable DESIGN.md.

```bash
node $SKILL_DIR/scripts/presets.mjs suggest --decisions "$RUN/decisions.json" [--brand <DESIGN.md>] --count 8 --recent <memory.mjs recent --step style --n 6>
node $SKILL_DIR/scripts/presets.mjs list --q "<what the story evokes>"      # search by name, feel, family, use
node $SKILL_DIR/scripts/presets.mjs gallery --out "$RUN/styles" --headline "<the story's first on-screen line>" --sub "<its second line>" [--brand <DESIGN.md>] --recommended <id1>,<id2>,<id3>
```

**Be the art director, not the ranking.** With a brand, one of the three is the brand itself, drawn in its real colours and type (the research lead's brand verdict); the other two vary the art direction around it. The briefing's house grammar (how this brand has filmed itself before) is a reference to honour or to break knowingly, never by accident. Pick the three systems that make *this* story strongest, read from its device, its world and its lines (a museum-label story wants an exhibition-wall or specimen-label system; a countdown wants a broadcast one; a receipt story wants paper). Three different families; never the generic default (`passed_over`), never one of the user's recent styles, never the "Claude look" (cream, rust accent, italic serif) unless the brand is that.

Push `look`: `styles: [{preset, name, why (one line: why this look for this story), rare?}]`, `recommended`, `hook` (the story's first on-screen line; every style is drawn on it), `gallery` ("$RUN/styles/presets.json").

Answers:
- `choose <preset>` (a tile, or any style from Browse all) → `node $SKILL_DIR/scripts/presets.mjs pick --id <preset> --decisions "$RUN/decisions.json" [--brand <DESIGN.md>]` (merges the style's terms and sets the look), then `motion-md.mjs write --language <the style's motion-language> --out "$RUN/motion.md" --mode auto --reason "<why>"` and `direction.mjs compile --decisions "$RUN/decisions.json" --out "$RUN/direction"`. Push `motion` and `transitions` (baseline + signature, from craft.md) done with reasons, close `look`, and record `memory.mjs record --step style --value <preset> --mode confirmed`.
- `more {near, exclude}` → three other systems near the selected one; re-push. `knob {name: "energy", value: calmer|as is|punchier}` → shift the pick (calmer: slower motion language; punchier: snappier) and re-push.
- Footage routes (`embedded-captions`, `talking-head-recut`): the looks are three caption / overlay identities on the footage; `music-to-video`: the stories are three visual treatments of the track.

## 4 · Animatic (the whole film, rough, with sound)

The animatic is the film before animation: every scene's key frame at its real duration, with the real music bed and the voice, so pacing, story and sound are judged together. This is where the user shapes the film.

1. **Scenes from the chosen script** (craft, `references/craft.md`): build `$RUN/scenes.json` (format: `references/video.md`) from the picked story's beats: one scene per beat (split a long beat into shots if it needs them), its `on_screen`, `visual`, `vo` as the voiceover `line` and `duration_s`, keeping the approved words; only timing changes later (the music fit). Per scene `id`, `title`, on-screen text, `visual` (what we see), voiceover `line`, `duration`, `type`/`persuasion`/`beat` (launch films), `intensity`, `transition_in`. One job per scene; hook in the first 1.5–2 s in outcome language; text held at least 0.4 s per word + 0.6 s; no scene still for more than ~1 s; layouts vary; end card 1.5–3 s. Then `node $SKILL_DIR/scripts/scenes.mjs --scenes "$RUN/scenes.json" --route <route> --out "$RUN/plan"` (writes STORYBOARD.md, SCRIPT.md, timeline.json in the workflow's format; exit 1 lists problems: fix and re-run).
2. **Music** (`references/sound.md`): candidates long enough for the film, in the chosen film's feel, each analysed and fitted, then an edit that never loops audibly:

   ```bash
   node $SKILL_DIR/scripts/music.mjs --run "$RUN" --film <seconds> --style "<the style's words>" --story "<angle and tone>" --format launch|explainer|reel|kinetic|brand|premium [--narrated]
   node $SKILL_DIR/scripts/sound.mjs fit --track <picked file> --scenes "$RUN/scenes.json" [--reveal <s>] [--logo <s>] --out "$RUN/music/plan.json" --write-scenes "$RUN/scenes.json"
   node $SKILL_DIR/scripts/sound.mjs render --plan "$RUN/music/plan.json" --out "$RUN/bed.wav"
   ```

   `music.mjs` writes mood intents as genre, instruments, tempo and structure (cliché words like "uplifting corporate" are stripped), keeps only tracks at least the film + 4 s, and returns options with `preview` (the fitted edit), `bpm`, `ending`, `fit`, `license` and `attribution` (licences go to `$RUN/music/LICENSES.json`). Pick the one that best serves the film. The user's own track → `sound.mjs analyze` + `fit` on it. `fit` starts on a strong phrase, lands on the track's own ending (flexing the film ≤ ±1 s), snaps scene starts to bars, moves the reveal to a section start and the logo to the ending hit, and writes the new durations into scenes.json: re-run `scenes.mjs`. `needs_longer: true` → another candidate; never ship a loop. `render` masters the bed to −14 LUFS. Push `music` done ("<title>: one bar-line edit into its own ending, the reveal on the lift").
3. **Voice** (narrated films): `node $SKILL_DIR/scripts/voice.mjs --run "$RUN" --line "<the hook line>" --tone "<2-3 words>"` gives samples; pick the one that fits the film and push `voice` done. The voice is the most-criticised part of AI video: calm, human pacing, no hype words; when in doubt, fewer lines. `unavailable` → say so; the workflow uses its default.
4. **The motion score** (the Motion Director; `agents/motion-director.md`). Once scenes.json has its final durations (after the music fit), re-plan with the scene count (`crew.mjs plan … --scenes <N>`) and dispatch `motion-director` with key `score`. It writes `$RUN/motion/score.json` + `score.md`: the spine and the motif, the energy curve, every scene as a time-coded shot sequence (primary mover, entrances by the object's nature, camera tier, the product moving like the product), every seam as a designed pair with handoff numbers on both sides, the one signature, and the sound events. Accept it on `crew.mjs check --role motion-director --key score`. Push `transitions` and `motion` done from it ("Cuts and three shared-element seams, one push-through at the reveal (scene 6 → 7): the report opens out of the source chip").
5. **Key frames** (the frame designers, in parallel: `crew.mjs brief --role frame-designer --key <a>-<b>` for each range the plan lists). Each designs one still per scene: the scene's peak moment from the score, at the film's aspect, in the chosen design system (`$RUN/direction/DIRECTION.md`, the look's `frame.md` with its font loading), with the **real product** (the research's screens and measured UI kit, real content, never grey bars). Each is standalone HTML in `$RUN/frames/<n>.html` (root sized with `data-width`/`data-height`), rendered with `design.mjs stills`. Then the **frames critic** (`--role critic --key frames-1`); high findings go back to their designer once. Look at every PNG yourself before pushing.
6. **Gate the plan**: `node $SKILL_DIR/scripts/slop.mjs --project "$RUN/frames" --scenes "$RUN/scenes.json" --json` (copy, look and timing tells in the key frames and the scene timing); fix every error before the user sees it.
7. **Push `animatic`**: `scenes: [{id, title, line, visual, duration, thumb: "$RUN/frames/<id>.png"}]`, `music: {title, file: "$RUN/bed.wav", alternatives: [{id, title, mood, file: <its preview>}]}`, `voice: {name, alternatives: [{id, name}]}` (omit when silent).

Answers:
- `comment` → collect. `apply {ids}` → revise only the scenes the notes touch (script, timing, key frame, music fit), `resolve`, re-push with the same scene ids. A note with `scope: "film"` applies to the whole film.
- `swap {chip: "music"|"voice", id}` → refit / re-voice and re-push. `more {what: "angle"}` → a new pitch from the next device (`story.mjs pick --exclude <used>`), a new animatic.
- `approve` → close `animatic`, go to Build.

## 4b · Build (inside the Animatic state; the user watches)

Write `$RUN/video-decisions.json` (format: `references/video.md`; `direction` = `$RUN/direction`; `look` = `{frame, name}` from the picked style, or `{design_md, mode}` for the brand's own; `brand`/`brand_mode`; `music: {path: "$RUN/bed.wav", title}`; `keyframes: [{scene, image: "$RUN/frames/<id>.png"}]`, the approved key frames) and hand off:

```bash
node $SKILL_DIR/scripts/video.mjs write --project-dir videos/<name> --decisions "$RUN/video-decisions.json"
```

It writes `BRIEF.md` (the workflow asks nothing), `frame.md` (the look + the motion contract + the art direction), `DIRECTION.md`, `motion.md`, the approved `STORYBOARD.md` / `SCRIPT.md`, the music bed and `DISPATCH.md`. Read `~/.claude/skills/<route>/SKILL.md` and follow it on `videos/<name>` (install if missing: `npx hyperframes skills update <route>`), keeping these in force:

1. **Adopt the plan, and the score is the visual design.** Don't regenerate STORYBOARD.md/SCRIPT.md or re-run `build-frame.mjs`. Right after `video.mjs write`: `node $SKILL_DIR/scripts/crew.mjs storyboard --run "$RUN" --project videos/<name>` writes the Motion Director's score into STORYBOARD.md in the workflow's visual-design format (`## Video direction`; per frame the shot sequence, blueprint, focal, roles, sfx, handoffs, `transition_in`), checked with the workflow's own parser, and marks that step done in BRIEF.md. Continue with the audio step, then `stage-assets.mjs`; skip the workflow's own visual-design writing. Pass `--voice <id>` (and `--provider heygen` for product-launch-video) to the audio step. If the workflow draws `storyboard.html`, check it against the approved key frames yourself.
2. **After `frame-packets.mjs`:** `node $SKILL_DIR/scripts/video.mjs inject --project-dir videos/<name>`, then the **scene animators** replace the workflow's frame workers, one per scene, all in parallel: `crew.mjs brief --run "$RUN" --role scene-animator --key <n> --project videos/<name>` (the prompt carries the workflow's technical role and the scene's packet, DISPATCH.md, the key frame as the visual target, the scene's score and seams, and the vocabulary recipes for the techniques it names). Each looks at its own motion with `crew.mjs strip` before handing back; accept each on `crew.mjs check --role scene-animator --key <n>`, and mark the frame `animated` in STORYBOARD.md as the workflow does. Then assemble, and dispatch the **Motion Director's seam pass** (`--key seams`): every cut checked frame by frame, pops fixed, the signature transition built by one hand.
3. **Sound:** narrated films are re-timed to the real voiceover by the workflow's sync step: re-run `sound.mjs fit --track <file> --scenes <the synced timeline.json> --out "$RUN/music/plan.json"` and `sound.mjs render --plan "$RUN/music/plan.json" --out videos/<name>/assets/music-bed.wav` after it. After the workflow's `fetch-sfx`, replace its cue list: `node $SKILL_DIR/scripts/sound.mjs sfx-plan --scenes <the plan's timeline.json> --plan "$RUN/music/plan.json" --bed videos/<name>/assets/music-bed.wav --events <the "## Events" lines of $RUN/crew/animators/*.md, which are the built frames' events> --words videos/<name>/audio_meta.json --project videos/<name>` and put its `audio_meta_sfx` into `audio_meta.json` `sfx` (causal on-screen events only, within budget, varied, none where the music already hits, each placed by its measured sync point). Then `video.mjs audio-lock --project-dir videos/<name> --music videos/<name>/assets/music-bed.wav` (it detects the mastered bed and sets its level under the voice) before `assemble-index`.
4. **Show the build:** push `build` with `scenes` (each `{id, title, duration, thumb, state: todo|working|done, frame}`) `--status working` as each scene starts and finishes (`frame` = a still of the built scene), `latest` = the newest still; `activity` for each step ("Animating scene 3 of 7: the turn, about 2 min left").
5. **Gates** after the workflow's verify step, before its render: `node $SKILL_DIR/scripts/obey.mjs --project videos/<name>` (the motion contract, per frame) and `node $SKILL_DIR/scripts/slop.mjs --project videos/<name>` (the built compositions), then the **motion and grounding critics** (`--role critic --key motion-1` and `grounding-1`). Every finding goes to the animator of its scene (`SendMessage` to that animator while it's addressable, else a fresh dispatch with the finding), leading with the push ("competent isn't the bar: fix these, and show what you can actually do with this scene"), then re-verify. At most 2 rounds (`motion-2`, …); leftovers go to the Final as fix-or-waive (`obey.mjs waive …`). Exit 1 = could not run: report it, never call it clean.
6. **Draft render** at the workflow's draft quality, then `node $SKILL_DIR/scripts/sound.mjs check --video <draft.mp4> --film <seconds> --sfx videos/<name>/index.html` (loudness, true peak, silent or quiet openings, abrupt endings, audible loops, music under the voice, SFX density) and `slop.mjs --project videos/<name> --video <draft.mp4>` (dead air, black open): fix and re-render on exit 2; loudness alone → `sound.mjs master` (fixes the mix without touching the picture). Then the **film critic** (`--role critic --key film-1`) on the draft: its scores go in the Final's `context`, its findings are fixed (one round) or offered as fix-or-waive.

## 5 · Final

Push `render` with `video` (the draft), `poster`, `scenes: [{id, title, start, thumb}]` (markers), `version`, `versions: [{v, when}]`, and after a revision `changes` (plain lines). Unwaived gate findings go in `context`.

- `comment` → collect; `apply {ids}` → revise only those scenes (frames, timing, sound), re-verify, re-render, `resolve`, re-push with `version + 1` and `changes`. `version {restore: v}` → re-push that version's render.
- `choose "preview"` → the workflow's preview (studio URL in `studio`). `choose "render"` → the delivery render, then `sound.mjs check` on it.
- Deliver: push `render` with the final `video` and `--status done` (the page offers the download), `activity --done`, and in chat the path plus one line: the film, the style, the motion language, all gates clean (or which were waived).

## Footage reels (route `reel`)

Brief → **Footage** → Story → Look → **Cut** (the reel's Animatic) → Build → Final. RasanAI's `reel.mjs` examines the footage, builds the cut as a HyperFrames composition (segments, Claude's cards and overlays, captions from the transcript, the music bed ducked under speech) and HyperFrames renders it. Formats: `references/reel.md`.

1. **Footage**: `node $SKILL_DIR/scripts/reel.mjs scan --footage "<folder>" --run "$RUN" [--lang <code>]` probes every clip, draws contact sheets, finds shot changes and silences, and transcribes speech word by word. **Look at every contact sheet** and read the transcripts. Push `footage` with `clips`; the user unticks clips to leave out (`submit {include:[ids]}`).
2. **Story, then Look**: three cuts as scripts (what the reel is for, its shape from hook to payoff, the card and overlay lines), written from what the footage actually contains; then three card and overlay design systems for the picked cut.
3. **Cut**: draft `$RUN/reel.json`: segments on word boundaries (in = a word's start − 0.1 s, out = its end + 0.15 s), silences and false starts dropped, shot changes as cut points, the hook in the first 2 s; cards between clips; overlays for names and callouts; `captions.on` for speech; `mute: true` on b-roll that fights the music; `fit` cover/contain/blur; music fitted with `sound.mjs fit` as above. Push `reel` with `timeline`, `overlays`, `captions`, `clips`, `edl` and a draft `video`; the user edits in/out points and cards there (`submit` → write back) or leaves notes.
4. **Build**: `reel.mjs briefs --reel "$RUN/reel.json" --project-dir videos/<name>` writes a brief per card and overlay: design and animate each from the direction: one scene animator per card for several (`crew.mjs brief --role scene-animator`, with the card brief as its packet), each looking at its motion with `crew.mjs strip`. Then `reel.mjs build --reel "$RUN/reel.json" --project-dir videos/<name> --render --quality draft` (lint + obey; refuses while a card is missing). Read every warning to the user.
5. **Final**: as above; on approval rebuild with `--quality delivery`.

A bespoke card (a product animation, a logo sting) can be built through **Single units** and dropped into the cut as `{"type": "card", "src": "videos/<unit>/compositions/index.html", "duration": N}`.

## Single units (route `motion-graphics`)

One short unnarrated unit (title, sting, stat hit, lower third): Brief → Look (three styles on the headline; Story optional) → Animatic (the key poses, optional keyframe board: `board.mjs`, `references/board-format.md`) → `handoff.mjs --decisions "$RUN/decisions.json"` (`references/handoff.md`) → build through `/motion-graphics` with `DISPATCH.md` appended to every subagent, `obey.mjs` + `slop.mjs` after verify → Final. The crew is small here (`crew.mjs plan --route motion-graphics`): the brand researcher when there's a brand, the Motion Director's score for the one unit (its shots are the key poses), and the motion critic on the built unit.

## Design systems

Every style in the library is a complete design system: `node $SKILL_DIR/scripts/design-system.mjs export --id <style> --out <DESIGN.md>` writes it as a DESIGN.md (colours by role, typography, radii, shadows, components, the motion contract, do's and don'ts) that any agent or tool can build from; `export-all --out <dir>` writes all of them. When the user wants their film's look for the rest of their product, export the picked style.

## Memory

`$RASANAI_HOME/history.jsonl` (default `~/.rasanai/`), via `scripts/memory.mjs`, one row per pick with `mode`. Confirmed picks only pre-fill (the aspect, a brand). **Every** pick feeds rotation: `--recent` on `presets.mjs suggest` and `story.mjs pick` keeps styles and story devices from repeating across a user's films, so making ten films never converges on a house style.

## Revise an existing video

Push the current film to the Final (its render, markers from STORYBOARD.md) and take notes there. Notes that change the story or the style reopen the Story or the Look or Animatic in a new `$RUN` (scenes.json can be rebuilt from STORYBOARD.md), then `video.mjs write --project-dir videos/<name> --decisions … --revise` (it moves the built frames, audio and renders into `.superseded/<stamp>/` and rewrites the plan). A different aspect needs a new project. Single units revise with `handoff.mjs --revise --reopen <steps>`.

## Failure handling

- A script exits non-zero → show its stderr, fix the input, re-run. Never hand-write an artifact a script owns.
- The console won't start → `serve` again; still failing → show the error (a port in use: `--port 0`). Only if it cannot run at all (no browser on a remote machine), ask in chat, one question per message, in plain text.
- Offline: previews and the motion check use the vendored GSAP; fonts, capture, voice samples, music and the workflows' TTS need the network. No music source reachable → `ask` for the user's track or go without music (say so).
- A preview script exits 1 with "did not render" → the page hit a script error; open it in a browser and report the console error.

## References

| Need | Read |
|---|---|
| the crew: who does what, when, the dispatch protocol, permission for local files, the score in the build, seeing motion | `references/crew.md`, `agents/*.md` |
| the craft Claude decides without asking: timing, motion, transitions, composition, camera, lighting, sound, story, anti-slop, quality gates | `references/craft.md` |
| the working vocabulary: film, lens, lighting, grade, editing, animation and sound terms, each with an HTML/CSS/GSAP recipe | `references/vocabulary.md` |
| writing the script: structures by length, hooks, beats, the turn, voiceover and on-screen lines, the end, the self-check (the writer pass's brief) | `references/script.md` |
| the story engine: truth sheet, devices, Sure/Bold/Wild, the pitch rubric | `references/story.md`, `taxonomy/devices-SCHEMA.md` |
| music choice, the edit-to-picture algorithm, SFX rules, VO pacing, mix targets | `references/sound.md` |
| the style library: preset fields, recipes, layouts, the cookbook | `taxonomy/presets/SCHEMA.md` |
| the taxonomy, decisions.json, DIRECTION.md, suggest/analyze/compare | `references/direction.md` |
| a project's DESIGN.md as the look: shapes read, roles, fonts, frame.md conversion | `references/brand.md` |
| per-route integration: what RasanAI pre-writes, hook points, scenes.json and video-decisions.json formats | `references/video.md` |
| footage reels: footage.json, reel.json, cards, overlays, captions, music | `references/reel.md` |
| console payloads per step, action types, security | `references/console.md` |
| motion.md fields, tween classes, rules, banned patterns, waivers | `references/motion-md-contract.md` |
| the motion-language terms and their contracts | `taxonomy/dimensions/motion-language.json`, `references/personalities.md` |
| single units: keyframe board format; decisions.json and handoff | `references/board-format.md`, `references/handoff.md` |
