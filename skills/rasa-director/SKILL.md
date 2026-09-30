---
name: rasa-director
description: >
  Rasa Director: creative direction for entire videos made with Claude and HyperFrames (launch films,
  explainers, PR videos, brand reels, music videos, reels cut from a folder of raw footage with
  motion-graphics cards between clips and overlays/captions on top, captioned talking heads, and short
  motion graphics). Walks the user through every creative decision in order (brief, route, story, scene
  list and script, look, motion grammar, transitions, voice, music, storyboard), each by eye or ear on
  previews of their own content in a local Director's Console web page (or in chat); any step can be
  skipped with "you decide". Hands the approved plan to the matching HyperFrames workflow at its exact hook
  points, streams build progress and renders back to the console, and checks every built scene obeys the
  motion contract. Use when the user wants to make a video and choose how it looks, moves and sounds, has a
  folder of clips to cut into a reel or edit, says
  "/rasa-director", "direct my video", "guide me through the style", "show me options first", "tasting
  menu", "storyboard first", or complains that AI video looks generic. Builds with HyperFrames
  (/hyperframes and its workflows); does not replace them.
---

# Rasa Director

*Rasa* (रस): the feeling a work leaves in its audience; *rasanai* (ரசனை, Tamil): the taste to choose it. The user is the director, Rasa handles taste, HyperFrames shoots. Rasa Director **decides** everything creative about a video up front, by eye and ear, then hands the matching HyperFrames workflow an approved plan it executes without re-deciding.

Why it exists: left alone, every AI video tells the obvious story, in a default look, where everything fades up and slides on the same ease. Rasa puts each creative decision in front of the user as rendered options of *their* video, remembers their taste, and enforces the motion they chose across every scene.

Scripts are zero-dependency Node (≥ 20) in `<skill dir>/scripts/`. They print JSON; read it rather than reconstructing their work by hand. The integration details per workflow are in `references/video.md`.

## Hard rules

1. **One path, every step skippable.** Walk the steps in order. At every step the user may pick, say **"you decide"** (this step) or **"you decide the rest"** (every remaining step). Never ask who should do what; never split the flow into modes.
2. **Intent in the request counts.** Anything the request already settles is not asked again ("you decide the look" skips Look only; a pasted script answers the script; "no voiceover" skips Voice). Each such answer gets a line in the plan's receipts.
3. **Only the source is required:** what the video is about (a product URL, a topic, a script, a PR, a music track, footage). Everything else can be decided.
4. **Show, don't ask.** Decisions are made on rendered previews of the user's own video (their scenes in the tasting menu, their scenes in the transitions menu, their hook line in the voice samples). Every step's options go to the **Director's Console** and, briefly, into chat with stills inline. The user can answer in either place.
5. **"You decide" never means the default.** Story and Motion skips sample wide with a tail constraint; Look skips rotate; the rest use sensible defaults. Every agent decision gets a one-line receipt: what was picked and the obvious option passed over.
6. **One question per step**, recommended option first. "Go" or silence accepts the recommendation.
7. **Render is never skipped by "you decide".** The workflow's own "preview first, or render?" gate always runs.
8. **HyperFrames builds.** Rasa never hand-writes frames, audio or the assembly; it writes the plan files and runs the workflow at its hook points.

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

**Shell variables do not survive between tool calls.** Note the literal `SKILL_DIR` and `RUN` values and write them literally in every later command (below they appear as `$SKILL_DIR` / `$RUN`). Run everything from the workspace root.

- The last command starts the Director's Console and opens it; give the user its URL in your first message. If they'd rather stay in chat ("no console"), skip every console command below.
- No HyperFrames CLI → tell the user to install it (`npm i -g hyperframes`, or use `npx`); stop. Workflows install on demand with `npx hyperframes skills update <workflow>`.
- `browser ensure` fails → previews still open as HTML but there are no stills and the motion check can't run; say so, never claim a check passed.
- The user wants to change a video that already exists in `videos/` → **Revise** below.

Then show the step map once:

> Here's how we'll direct this, each step decided by eye (or ear) in the console at <URL> or right here. Say **"you decide"** on any step, or **"you decide the rest"**.
> 1 Brief · 2 Route · 3 Story · 4 Scenes · 5 Look · 6 Motion · 7 Transitions · 8 Voice · 9 Music · 10 Storyboard · 11 Build & render
>
> (A footage reel runs: Brief · Route · Footage · Story · Look · Motion · Cut · Music · Plan · Build & render.)

## The Director's Console

A local page (`console.mjs`, 127.0.0.1 only, token + session cookie) with one panel per step. Payload fields per step and every action type: `references/console.md`.

**For every step:**

1. **Push** the step's full payload (a push replaces the step): write it to a file, then `node $SKILL_DIR/scripts/console.mjs push --run "$RUN" --step <step> --file "$RUN/<step>.json"`. Paths inside payloads are workspace-relative.
2. **Say it in chat too:** the question in a line or two, the recommended option, stills inline.
3. **Wait** with `run_in_background: true` so the user can also reply in chat: `node $SKILL_DIR/scripts/console.mjs wait --run "$RUN" --timeout 3000`. You're notified with one JSON action `{step, type, value, note}`. A chat answer → `console.mjs record --run "$RUN" --step <step> --type choose --value '<json>' --note "<their words>"`. Exit 2 = timeout (wait again); exit 3 = the console died (`serve` again, re-push). A late action for a settled step is a correction if it differs.
4. **Act** on it (types: `submit`, `choose`, `adjust`, `more`, `approve`, `decide`, `decide-rest` on step `*`, `note`; see `references/console.md`).
5. **Close** the step: `console.mjs push --run "$RUN" --step <step> --status done --data '{"decision":"<what + receipt>"}'` (or `--status skipped` for steps this route doesn't use), then push the next.

## Step 1: Brief

Console: push `brief` with what the request already gives. The user fills: **what the video is** (source), an optional key line, where it plays (→ aspect: website/YouTube 16:9 · feed 1:1 · Reels/TikTok/Stories 9:16 · 4:5), length (launch films and explainers are strongest at 30–90 s), and **voiceover or not**. `memory.mjs recommend --step aspect` gives a remembered aspect to recommend. Record the aspect: `node $SKILL_DIR/scripts/memory.mjs record --step aspect --value <WxH> --mode confirmed|auto`.

## Step 2: Route

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

Push `route` with 2–3 plausible options (`id`, `label`, `why`), the best one recommended. Record it (`memory.mjs record --step route --value <route> --mode confirmed|auto`), then set up the project and intake:

```bash
node $SKILL_DIR/scripts/video.mjs init --route <route> --project <kebab-name> --aspect <aspect>
# product site:            node $SKILL_DIR/scripts/video.mjs capture --project-dir videos/<name> --url "<URL>"
# topic / script / no site: node $SKILL_DIR/scripts/video.mjs capture --project-dir videos/<name> --no-capture --title "<title>" --text-file "$RUN/brief.txt"
```

- A failed or blocked capture is a **hard stop**: report the reason and ask for screenshots or a brief; never build from a partial capture. Show a couple of capture screenshots in the Story panel's context.
- `pr-to-video`: resolve the project folder with that workflow's `scripts/project-dir.mjs --pr <ref>` and pass it as `--project-dir`; run its Step 1 fetch/ingest scripts (`fetch-pr.mjs`, `ingest.mjs`) before Story.
- `music-to-video`: the track is the spine; ask for it (run Step 9 now). The workflow plans its cuts from the beat grid with hard cuts, so skip Scenes, Transitions and Voice (push them `--status skipped`).
- `reel`: no `video.mjs init`/`capture`; go to **Footage reels** below.
- Footage routes (`embedded-captions`, `talking-head-recut`): skip Story, Scenes, Transitions and Voice (push them `--status skipped`); Look becomes the caption identity / overlay style (see `references/video.md`).

## Step 3: Story

Unless the request states a concept: ask what they're already picturing, then pitch **five stories**, 3 lines each (the idea · its world · its opening hook), with HyperFrames' pitch-round discipline (`~/.claude/skills/hyperframes/references/pitch-round.md`): one per path, **at least two a model would rarely produce** (`rare: true`), no two with the same silhouette. Use the route's story craft: for launch films the arcs in `~/.claude/skills/product-launch-video/references/story-design.md` (PAS, Future Pacing, Demo Loop, Before-After-Bridge, Feature-Benefit Cascade) and its hook strategies; for explainers `faceless-explainer`'s story references. Push `concept`; a mix arrives as a `note`. Record: `memory.mjs record --step concept --value "<story name>" --mode confirmed|auto` (before a "you decide", check `memory.mjs recent --step concept --n 3` and don't reuse those).

## Step 4: Scenes (the whole film, scene by scene)

Write `$RUN/scenes.json` (format: `references/video.md`): per scene the title, on-screen text, what we see, voiceover line, duration, `type`/`persuasion`/`beat` (launch films), optional `blueprint` (only ids that exist in `hyperframes-animation/blueprints/`), `intensity` (low/medium/high), and `transition_in` (default from Step 7). Plan to the brief's length; every scene has one job.

Push `scenes` with `{"scenes": [...], "target_s": <length>, "transition_default": "...", "narrated": true|false}`. The panel is an editable table with a timeline strip: the user edits text, voiceover, length, transition and intensity, reorders, adds, removes, then **approves** (`submit` with the full list: write it back into scenes.json). Then:

```bash
node $SKILL_DIR/scripts/scenes.mjs --scenes "$RUN/scenes.json" --route <route> --out "$RUN/plan" [--mode autonomous]
```

It writes `STORYBOARD.md` (+ `SCRIPT.md` when narrated) in the workflow's exact format, validated with the workflow's own parser, and `timeline.json`. Exit 1 lists every problem (bad transition, missing blueprint, non-positive duration…): fix scenes.json and re-run. Voiced scene lengths are re-timed to the real narration by the workflow's audio step; say so. Pass `--mode autonomous` only after "you decide the rest".

## Step 5: Look

```bash
node $SKILL_DIR/scripts/pick.mjs look --count 3 --feel "<feel words>" --seed "<source>"
```

Feel words come from `references/personalities.md` (`unmatched_feel` lists ones it didn't understand). A brand spec → `look.frame` (skip presets). Otherwise push `look` with the candidates' showcases so the user picks **by eye**; say plainly that the captured brand colors and fonts will be remixed onto the chosen preset (the pick is the layout bones), and that their real scenes in this look appear in Step 6. `pr-to-video` uses `code-editorial` (fixed by the workflow; skip). Record: `memory.mjs record --step look --value <preset> --mode confirmed|auto`.

## Step 6: Motion (one grammar for the whole film)

```bash
node $SKILL_DIR/scripts/pick.mjs motion --count 6 --feel "<feel words>" --seed "<source>"
node $SKILL_DIR/scripts/tasting.mjs --scenes "<hook on-screen>::<sub> || <a middle scene> || <the close>" \
  --personalities <candidate ids> --preset <look> (or --frame <path>) --aspect <aspect> --out "$RUN/tasting" --stills
```

Each tasting cell plays **three of the user's own scenes in order** in one personality, so a style is judged across the film, not on one line. Push `motion` with `tasting`, `cells` (tasting.json's `cells`), `adjectives` (the object `motion-md.mjs adjectives` prints) and `recommended`; show `tasting-enterMid.png`. Adjust (`adjust` action): emit the variant with `motion-md.mjs write --personality <id> --adjust a,b --out "$RUN/motion-draft.md" --emit-personality "$RUN/custom.json"`, re-run tasting with `--personalities <parent>,$RUN/custom.json --out "$RUN/tasting-adjusted"`, re-push, confirm. None fit (`more`): `pick.mjs motion --exclude <shown ids>`. Lock:

```bash
node $SKILL_DIR/scripts/motion-md.mjs write --personality <id> [--adjust a,b] --out "$RUN/motion.md" --mode confirmed|auto --reason "<why it fits this film>"
node $SKILL_DIR/scripts/memory.mjs record --step motion --value <id> --mode confirmed|auto
```

One grammar governs every scene; scenes differ only by `intensity` (set in Scenes). A motion id like `x+slower` is an adjusted variant: `--personality x --adjust slower`.

## Step 7: Transitions

```bash
node $SKILL_DIR/scripts/transition-menu.mjs --from "<scene 1 on-screen>" --to "<scene 2 on-screen>" --preset <look> --aspect <aspect> --out "$RUN/transitions" --stills
```

It plays the user's first two scenes handing off through every transition the workflow can inject (hard cut plus the registry's types, run from the workflow's own templates). Push `transitions` with `menu`, `cells` (transitions.json's `cells`) and `recommended` (blur-crossfade when scene backgrounds differ, crossfade when they match; zoom-through at section changes). The `choose` value is the exact `transition_in` string. Record it (`memory.mjs record --step transitions --value "<value>" --mode confirmed|auto`) and set it as `transition_default` in scenes.json and re-run `scenes.mjs` (per-scene overrides live in the Scenes table). `music-to-video` uses hard cuts only; footage routes skip this step.

## Step 8: Voice (narrated videos)

```bash
node $SKILL_DIR/scripts/voice.mjs --run "$RUN" --line "<the hook voiceover line>" --tone "<2-3 words, e.g. warm,confident>" [--lang en]
```

Real samples of the hook line in 3 voices of different styles (HeyGen via media-use). Push `voice` with that JSON; `unavailable` → say so and let the workflow use its default. `choose <id>` → set `"voice": {"id","name","provider":"heygen"}` in scenes.json (re-run `scenes.mjs` so SCRIPT.md names it). `choose "none"` → no narration (re-run scenes.mjs with `"narration": false`). Record: `memory.mjs record --step voice --value <id|none> --mode confirmed|auto`.

## Step 9: Music

```bash
node $SKILL_DIR/scripts/music.mjs --run "$RUN" --intents "<mood one>|<mood two>|<mood three>"
```

Moods come from the story and the motion's feel. Push `music` (players; `unavailable` still offers "No music" / "Use my track"). A pick → `"music": {"path": "<file>", "title": "<title>"}` in the decisions (the exact track is locked into the build); `"none"` → `"music": "none"` and scenes.json `"music": null`; a mood-only choice → `"music": {"mood": "..."}` and scenes.json `"music": "<mood>"`. Record: `memory.mjs record --step music --value <id|none> --mode confirmed|auto`.

## Step 10: Storyboard and plan

1. Push `storyboard` with `timeline` (the contents of `$RUN/plan/timeline.json`) and `--status done`, so the user sees the whole film's timing, transitions, narration and music on one strip (it reopens for approval when the workflow draws its sketch sheet in Step 11).
2. Push `plan` with `shape` (route, length, scenes, look, motion, transitions, voice, music), `stated` (what the user chose) and `agent` (what you decided, each with its receipt). Continue on `approve`; fold in any `note` and re-push.
3. Write `$RUN/video-decisions.json` (format: `references/video.md`; `confirmed` lists only answers the user actually gave) and hand off:

```bash
node $SKILL_DIR/scripts/video.mjs write --project-dir videos/<name> --decisions "$RUN/video-decisions.json"
node $SKILL_DIR/scripts/console.mjs log --run "$RUN" --stage handoff --stage-status done --level ok --message "plan handed to <route>"
```

It writes `BRIEF.md` (canonical; the workflow asks nothing), `frame.md` (built from the preset by the workflow's own `build-frame.mjs`, brand-remixed, with the **motion contract appended**, the one file every frame worker reads), `motion.md`, the approved `STORYBOARD.md` / `SCRIPT.md`, the music bed, `DISPATCH.md`, and the confirmed preferences.

## Step 11: Build & render (the workflow runs; Rasa steers)

Read `~/.claude/skills/<route>/SKILL.md` and follow it on `videos/<name>` (install first if missing: `npx hyperframes skills update <route>`; `init` already refreshed skills this run, so don't re-ask). `BRIEF.md` exists, so it asks no brief questions, and its **Customizations** name every hook point. Keep these in force:

1. **Adopt the plan.** Don't regenerate STORYBOARD.md/SCRIPT.md or re-run `build-frame.mjs`; the plan gate is satisfied. Continue with the audio step and the visual-design step.
2. **Voice:** pass `--voice <id>` (and `--provider heygen` for product-launch-video) to the audio step.
3. **Sketch pass → console.** When the workflow draws `storyboard.html` (collaborative runs), push `storyboard` again with `sheet: "videos/<name>/storyboard.html"` plus the timeline, and relay the user's `approve` / `note` to the workflow's layout gate.
4. **After `frame-packets.mjs`:** `node $SKILL_DIR/scripts/video.mjs inject --project-dir videos/<name>`, then dispatch the frame workers with `DISPATCH.md` appended to each.
5. **After `audio.mjs fetch-sfx`, before `assemble-index`** (when a music track was chosen): `node $SKILL_DIR/scripts/video.mjs audio-lock --project-dir videos/<name> --music videos/<name>/assets/music-bed.<ext>`.
6. **Stream progress:** `console.mjs log --run "$RUN" --stage <plan|design|build|verify|obey|render-gate> --stage-status working|done|failed --message "<one line>"` at each workflow step.
7. **Check the motion** after the workflow's verify step (transitions verify, lint, check, snapshots) and before its render question: `node $SKILL_DIR/scripts/obey.mjs --project videos/<name>` (it checks every frame; the assembled index.html and captions belong to the workflow). Exit 2 → re-dispatch the failing frames' workers with the obey `--json` findings + DISPATCH.md, then re-run the workflow's verify and obey (at most 2 passes); leftovers go to the render gate as fix-or-waive (`obey.mjs waive --project … --rule … --target …`). Exit 1 = could not run: report it, never call it clean.
8. **Render gate → console.** Push `render` with `images` (the contact sheet / snapshots), `studio` (the preview URL once running) and the question; `choose "preview"` → the workflow's preview; `choose "render"` → its render; a `note` → revise and re-verify. Deliver: push `render` with `videos` and `status: done`, log `render-gate` done, and give the workflow's render report plus one line: motion personality, obey status.

## Footage reels (route `reel`)

For a folder of raw clips the user wants cut together, with motion-graphics cards between clips and overlays or captions on top. Rasa's `reel.mjs` examines the footage, builds the cut as a HyperFrames composition (clip segments, cards and overlays drawn in the chosen look and motion, captions from the transcript, a music bed ducked under speech) and HyperFrames renders it. Formats: `references/reel.md`.

1. **Brief** as usual (where it plays → aspect; reels are 9:16; length). **Route** `reel`.
2. **Footage.** `node $SKILL_DIR/scripts/reel.mjs scan --footage "<folder>" --run "$RUN" [--lang <code>]`. It probes every clip (length, size after rotation, fps, sound), draws a contact sheet and poster per clip, finds shot changes and silences, and transcribes speech word by word with `hyperframes transcribe` (first run downloads the Whisper model; `--no-transcribe` skips it). **Look at every contact sheet** (Read the images) and read the transcripts before proposing anything. Push `footage` with `clips` (footage.json's `clips`); the user unticks clips to leave out (`submit` `{include:[ids]}`) or notes what matters.
3. **Story** (short): what the reel is for and its shape (hook → middle → payoff), 3 options, from what the footage actually contains. Skip if the user already said how to cut it.
4. **Look** and **Motion** as usual; run the tasting with the card and overlay words (`--scenes "<opening card> || <a lower third> || <closing card>"`). The motion governs every card, overlay and clip transition.
5. **Cut.** Draft `$RUN/reel.json` from the user's direction and the scan:
   - pick segments on **word boundaries** from the transcripts (in = a word's start − 0.1 s, out = its end + 0.15 s), drop silences and false starts, use shot changes as natural cut points; keep the hook in the first 2 s;
   - cards (`type: "card"`) between clips for titles, chapter beats, the closing call to action; overlays (`overlays`, seconds on the reel's timeline) for names, places and callouts on top of clips; `captions.on` for speech; `mute: true` on b-roll whose sound would fight the music;
   - `fit`: `cover` (default, crop with `focus`), `contain` (letterbox in the look's background) or `blur` (the clip over a blurred copy of itself, for 16:9 clips in a 9:16 reel); `rate` for speed changes; `transition_in`: `auto` (the motion's own handoff), `cut`, `dissolve`, `wipe`.
   Push `reel` with `timeline`, `overlays`, `captions`, `clips` (`[{name, duration}]`) and, after a build, `edl` (reel.edl.json) and `video` (the draft render). The user edits in/out points, order, cards, overlays and captions there (`submit` → write it back into reel.json) or says it in chat.
6. **Music** as usual (`reel.json` → `music: {path, volume, duck}`; it ducks under every clip that keeps its sound).
7. **Plan** → `approve`, then **build a draft**:
   ```bash
   node $SKILL_DIR/scripts/reel.mjs build --reel "$RUN/reel.json" --project-dir videos/<name> --render --quality draft
   ```
   It stages each used segment (cropped to the reel's frame, constant fps, dense keyframes), writes `index.html` + `compositions/reel-*.html`, stages the look's fonts, runs `hyperframes lint` and `obey.mjs`, renders, and prints warnings (a card too short for the motion's holds is lengthened to its minimum). Read every warning to the user. lint or obey failing stops the render: fix reel.json (or waive in motion.md) and rebuild. Show the draft in `reel` (`video`) and `render`; iterate on notes by editing reel.json and rebuilding (unchanged segments are cached).
8. **Render gate**: on approval, rebuild with `--render --quality delivery` and deliver `videos/<name>/renders/<title>.mp4`.

A bespoke card (a product animation, a logo sting) can be built with `/motion-graphics` through **Single motion units** and dropped into the cut as `{"type": "card", "src": "videos/<unit>/compositions/index.html", "duration": N}` (copy any asset files it uses into the reel project at the same relative paths).

## Single motion units (route `motion-graphics`)

For one short unnarrated unit (title, sting, stat hit, lower third): Brief → Story (optional) → Look → Motion (tasting with `--content "<headline>" [--sub "<line>"]`) → Key poses (optional keyframe board: `board.mjs`, `references/board-format.md`) → Music (optional) → Plan → `handoff.mjs --decisions "$RUN/decisions.json"` (format: `references/handoff.md`) → build through `/motion-graphics` with `DISPATCH.md` appended to every subagent, `obey.mjs` after verify, and the render gate in the console. Push the video-only steps (route, scenes, transitions, voice, storyboard) as `--status skipped`.

## Memory

`$RASA_DIRECTOR_HOME/history.jsonl` (default `~/.rasa-director/`), via `scripts/memory.mjs`, one row per pick with `mode`. **Confirmed** picks only pre-select the recommended option when the user is choosing. **Every** pick feeds rotation: "you decide" never applies a remembered preference; Motion and Look exclude the last 3 picks (`pick.mjs`), Story avoids the last 3 concepts, the rest use defaults. So skipping everything doesn't converge on a house style.

## Revise an existing video

Show the current plan (BRIEF.md, STORYBOARD.md, frame.md, motion.md) as pre-filled answers in the console and ask which steps to reopen. Rework those in a new `$RUN` (scenes.json can be rebuilt from STORYBOARD.md), then `video.mjs write --project-dir videos/<name> --decisions … --revise`: it moves the built frames, audio, packets and renders into `.superseded/<stamp>/` so the workflow rebuilds from the new plan, and rewrites the plan files. A different aspect needs a new project. Single motion units revise with `handoff.mjs --revise --reopen <steps>`.

## Failure handling

- A script exits non-zero → show its stderr, fix the input, re-run. Never hand-write an artifact a script owns.
- The console won't start → carry on in chat. `console.mjs url --run "$RUN"` reprints the URL; `stop` ends it.
- Offline: previews and the motion check use the vendored GSAP; fonts, capture, voice samples, music and the workflows' TTS need the network.
- A preview script exits 1 with "did not render" → the page hit a script error; open it in a browser and report the console error.

## References

| Need | Read |
|---|---|
| per-route integration: what Rasa pre-writes, hook points, scenes.json and video-decisions.json formats, footage routes | `references/video.md` |
| footage reels: footage.json, reel.json, how cards/overlays/captions/music are built | `references/reel.md` |
| console payloads per step, action types, security | `references/console.md` |
| motion.md fields, tween classes, rules, banned patterns, adjectives, waivers | `references/motion-md-contract.md` |
| the 10 personalities, feel vocabulary | `references/personalities.md` |
| single units: keyframe board format; decisions.json and handoff | `references/board-format.md`, `references/handoff.md` |
