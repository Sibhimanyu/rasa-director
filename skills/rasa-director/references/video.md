# Entire videos: how Rasa Director plugs into each HyperFrames workflow

Rasa decides everything creative; the HyperFrames workflow builds. The workflows ask nothing when `BRIEF.md` exists (the state row in `/hyperframes`), so Rasa pre-writes the files each workflow reads and names the remaining hook points in BRIEF.md's **Customizations**. Scripts: `scenes.mjs` (scene list → STORYBOARD.md / SCRIPT.md), `video.mjs` (`init`, `capture`, `write`, `inject`, `audio-lock`), plus the preview scripts (`tasting.mjs --scenes`, `transition-menu.mjs`, `voice.mjs`, `music.mjs`) and `obey.mjs`.

## Route table

| Route | Rasa steps used | Rasa pre-writes (`video.mjs write`) | Hook points during the build |
|---|---|---|---|
| `product-launch-video` | all 11 | BRIEF.md, frame.md (build-frame + contract), motion.md, STORYBOARD.md, SCRIPT.md, music bed, DISPATCH.md | audio `--voice <id> --provider heygen` · sketch pass → console · `inject` after `frame-packets.mjs` · DISPATCH to frame workers · `audio-lock` after `fetch-sfx` · `obey` after verify · render gate |
| `faceless-explainer` | all 11 | same as above | same (audio `--voice <id>`) |
| `pr-to-video` | all 11; Look fixed to `code-editorial` | same; frame.md is always built from `code-editorial` | project folder from `scripts/project-dir.mjs --pr <ref>`; run its `fetch-pr.mjs` / `ingest.mjs` before Story; code scenes need `source_excerpt`; then as above |
| `general-video` | all 11 | same; frames go to `compositions/frames/NN-*.html` | as above |
| `music-to-video` | Brief, Route, Story, Look, Motion, Music (the track, required), Plan; Scenes/Transitions/Voice skipped (the workflow plans cuts from the beat grid; hard cuts) | BRIEF.md, frame.md (verbatim preset copy: its gate requires it), motion.md, DISPATCH.md, `assets/bgm.mp3` (converted with ffmpeg if needed) | DISPATCH to every frame worker (the contract lives there and in motion.md, not frame.md) · `obey` after verify · render gate |
| `talking-head-recut` | Brief, Route, Look (overlay card style), Motion (optional: described in the style fields), Music (optional), Plan | BRIEF.md with the style fields (`footage`) | the chosen motion's feel goes into the `footage` style fields (no DISPATCH or obey: the workflow owns its overlay code) · render gate |
| `reel` (Rasa's reel editor) | Brief, Route, Footage, Story, Look, Motion, Cut, Music, Plan | nothing: `reel.mjs build` writes the whole project (references/reel.md) | lint + obey + render run inside `reel.mjs build`; render gate in the console |
| `embedded-captions` | Brief, Route, Look (caption identity), Plan | BRIEF.md with the style fields (`footage`) | render gate |
| `motion-graphics` (single unit) | see SKILL.md "Single motion units" | `handoff.mjs` (references/handoff.md) | DISPATCH to every subagent · `obey` · render gate |

`scenes.mjs` accepts the four story routes. `video.mjs init` runs `npx hyperframes init --skill=<route>` for every route except the footage routes, where it only creates the folder (their workflows set the project up from the footage).

## scenes.json (input to scenes.mjs; also the Scenes panel's payload)

```json
{
  "title": "Tally: launch film",
  "message": "Tally turns receipts into books in one tap",
  "arc": "Before-After-Bridge",
  "audience": "freelancers who dread tax season",
  "aspect": "16:9",
  "music": "warm minimal pulse",
  "narration": true,
  "voice": { "id": "<heygen voice id>", "name": "Maya", "direction": "Warm, unhurried.", "provider": "heygen" },
  "transition_default": "blur-crossfade",
  "scenes": [
    {
      "title": "Shoebox",
      "on_screen": "Tax season. Again.",
      "visual": "A drift of paper receipts piles up and blurs the frame",
      "voiceover": "Every spring, the shoebox wins.",
      "duration": 4,
      "type": "hook",
      "persuasion": "pattern interrupt",
      "beat": "problem",
      "intensity": "high",
      "blueprint": "kinetic-type-beats",
      "asset_candidates": "none — pure typography beat"
    }
  ]
}
```

- Required: `message`, 2–24 scenes, each with a positive `duration` and `visual` or `on_screen`.
- `transition_in` (per scene, ignored on scene 1) falls back to `transition_default`, then `cut`. Valid values: `cut`, or a registry type from the workflow's `scripts/lib/transitions.json` (`crossfade`, `blur-crossfade`, `push-slide`, `zoom-through`, `squeeze`…) optionally followed by `LEFT|RIGHT|UP|DOWN` and a duration (`push-slide LEFT 0.5s`). It sits on the incoming frame.
- `type` (launch films): `hook`, `pain_point`, `product_intro`, `feature_showcase`, `benefit_highlight`, `social_proof`, `branding`, `cta`. `persuasion`/`beat` are free text read by the frame workers.
- `blueprint`: only ids that exist in `hyperframes-animation/blueprints/`; omit it to let the workflow choose.
- `intensity`: `low` · `medium` · `high` → `motion_intensity` in the frame block; the contract maps it to the scale's longer / middle / shorter durations with the same eases.
- `narration: false` (or no voiceover lines) → no SCRIPT.md. Voiced durations are re-timed to the real narration by the workflow's `sync-durations`.
- Optional per scene: `narrativeRole`, `keyMessage`, `notes`, `delivery` (SCRIPT.md), `code` + `source_excerpt` (pr-to-video: a fenced diff ≤ 12 lines).
- `music`: a mood string (the storyboard's `music:` field) or `null` for none. A chosen track is locked separately (`video-decisions.json` → `audio-lock`).

Everything a frame worker must honour is written **inside** its `## Frame N — Title` block (workers only see their packet and frame.md). The output is parsed with the workflow's own `parseStoryboard` before it's written.

## video-decisions.json (input to `video.mjs write`)

```json
{
  "route": "product-launch-video",
  "message": "Tally turns receipts into books in one tap",
  "content": "https://tally.example",
  "destination": "website",
  "aspect": "16:9",
  "language": "en",
  "audience": "freelancers who dread tax season",
  "angle": "Before-After-Bridge",
  "concept": { "title": "The Shoebox Wins", "text": "Paper chaos gives way to one calm tap." },
  "look": { "preset": "bold-poster" },
  "motion": ".rasa-director/<ts>/motion.md",
  "storyboard_dir": ".rasa-director/<ts>/plan",
  "voice": { "id": "<heygen voice id>", "name": "Maya", "provider": "heygen" },
  "music": { "path": ".rasa-director/<ts>/music/warm-pulse.mp3", "title": "Warm Pulse" },
  "mode": "collaborative",
  "confirmed": { "aspect": true, "look": true, "voice": true, "destination": false, "language": false },
  "receipts": { "stated": ["aspect 16:9 (from the request)"], "agent": ["Motion: editorial-mask over swiss-precise (the obvious pick)"] },
  "footage": null,
  "assets": [{ "path": "assets/logo.svg", "role": "logo" }]
}
```

- `look`: `{ "preset": "<id>" }` or `{ "frame": "<path to a frame.md-format spec>" }` (the user's brand spec).
- `music`: `{ "path", "title" }` (exact track, locked with `audio-lock`), `{ "mood": "..." }`, or `"none"`.
- `mode: "autonomous"` (after "you decide the rest") sets `storyboard: no`, so the workflow skips its sketch pass; otherwise the sketch pass and layout gate run and are relayed to the console.
- `confirmed`: only answers the user actually gave; those are recorded into HyperFrames' own preference store (media-use `prefs.mjs`). Agent decisions are never recorded as preferences.
- Footage routes: `motion` and `storyboard_dir` are optional; `footage` holds the style fields the workflow would otherwise ask (e.g. `{"caption_style": "bold pop, 2 words per line", "position": "lower third", "accent": "#FFB000"}`).
- `write` validates every input before writing anything. A project with built frames is refused unless `--revise`, which moves compositions, snapshots, renders, index.html, the audio metas, frame packets and storyboard.html into `.superseded/<stamp>/`.

## What `write` produces

- **BRIEF.md**: canonical frontmatter (`workflow`, `flow: automation`, `storyboard`, `message`, `aspect`, `language`, `length`, `style_preset`, `voice`…), Intent, Assets, **Customizations** (design step done, plan approved, voice flag, `audio-lock` and `inject` instructions, the obey check), Notes with receipts.
- **frame.md**: built by the workflow's `build-frame.mjs --preset <id> --hyperframes <dir>` (brand-remixed onto the capture), with the **motion contract** upserted at the end (idempotent; marker `<!-- rasa-director:motion-contract -->`). Not for music-to-video.
- **motion.md**, **STORYBOARD.md**, **SCRIPT.md** (narrated), the music bed, **DISPATCH.md** (the contract plus what's decided; appended to every frame worker and repair dispatch).

## Build-time commands

```bash
node $SKILL_DIR/scripts/video.mjs inject --project-dir videos/<name>                                  # after frame-packets.mjs
node $SKILL_DIR/scripts/video.mjs audio-lock --project-dir videos/<name> --music videos/<name>/assets/music-bed.<ext>   # after fetch-sfx
node $SKILL_DIR/scripts/obey.mjs --project videos/<name>                                              # after verify, before render
```

- `inject` upserts the contract into every `.hyperframes/frame-packets/NN.md` (not `_*`), refusing any packet that would pass the workflow's 48,000-byte cap. Re-running is safe.
- `audio-lock` copies the track to `assets/music-bed.<ext>` and points the `bgm` entry of `audio_meta.json` / `audio_engine_meta.json` at it (volume 0.12 under narration, 0.9 without), clearing `bgm_pending`.
- `obey` checks every file in `compositions/frames/`; the assembled `index.html` and `compositions/captions.html` are reported as `skipped` (the workflow owns them). Exit 0 clean · 2 violations · 1 could not run.

## Footage editing

- **A folder of clips to cut** (reels, recaps, b-roll edits, cut-ins, graphics between and on top of clips): the `reel` route, `references/reel.md`.
- **One continuous talking-head clip**: `embedded-captions` (plain captions) or `talking-head-recut` (designed overlay cards). Rasa directs their style (Look, Motion) and pre-answers their style questions in BRIEF.md.
