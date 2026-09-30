# Director's Console

`scripts/console.mjs` runs a local page with one panel per step. The agent pushes each step's payload into `<run>/session.json`; the user's clicks are appended to `<run>/actions.jsonl`; `wait` hands the next one to the agent. The page updates live (server-sent events), so pushes appear without a reload.

## The page

- **Top bar**: five phases (Brief · Direction · Look & motion · Style frames · Build) instead of the step list, a status line and "Claude decides the rest". The status says "Waiting for you: <step>" while the current step awaits an answer, otherwise what Claude is doing (`session.working`), with a moving bar.
- **What Claude is doing** (left): `session.activity`, newest first. Entries come from `activity`, `log`, every push ("Ready for you: the look", "Decided the look: …"), every answer the user sends ("You: picked the story: The shoebox wins"), Rasa's own scripts (`lib/report.mjs`: each script says what it starts and finishes, into the run named in `.rasa-director/current`; a script run by another stays quiet) and, in the plugin, a PreToolUse hook (`hooks/hooks.json` → `scripts/hook-activity.mjs`) that adds each command (by its description), write and edit while a run is active; console plumbing is left out. The working view shows how long Claude has been at it and how long since the last update.
- **The stage** (centre): only the current step, with its `question` as the heading. Pick-one steps (direction, concept, look, route, voice, music) are cards with the `recommended` one already selected and marked "Claude's pick", so one click on "Use this …" sends it; motion and transitions preselect the recommended letter the same way. Under every step: "Not sure? Let Claude decide this one". Once the user answers, or while Claude is between questions, the stage shows Claude working (the `working` message, the user's answer, the last few things done) until the next push.
- **Discuss with Claude** (under every step): the step's `thread` of messages; the user writes (a `note`), Claude answers with `reply`, the options stay on screen meanwhile with "Claude is replying…".
- **Your film** (right): every decided step's `decision`, each with "change" (opens that step again; a new answer is a correction), and "Tell Claude anything", which sends a `note` to the step on screen.
- The page shows a notice when the last update check found a newer version (`session.app`).

## Staying connected

- The console's address (port and token) is kept in `<run>/address.json`. A restart (`serve`, or the automatic one) reuses it, so the tab the user has open reconnects by itself; only `stop` forgets it.
- `push`, `activity`, `log` and `wait` restart a console that has stopped (sleep, a killed process); `wait` exits 3 only if that fails.
- The stream sends a heartbeat every 15 s; the page reconnects and reloads the state after 40 s of silence, when the tab becomes visible again, and when the network comes back.
- `setup.sh` records the run in `.rasa-director/current` and, run again, resumes an unfinished run (updated in the last 12 hours, not yet rendered) with its console instead of starting a second one.

## Security

- Bound to 127.0.0.1 only; requests whose `Host` isn't `127.0.0.1:<port>` / `localhost:<port>` are refused (blocks DNS rebinding).
- The URL carries a per-run token. Opening it sets an HttpOnly, SameSite=Strict session cookie; every other route (state, events, files) requires that cookie, and POSTs also require the token header.
- Files are served only from the workspace root, this skill, and installed skills (`~/.claude/skills`, `~/.agents/skills`), by real path (symlinks can't escape). The session's own `console.json`, `actions.jsonl` and `consumed.json` are never served. `serve` refuses to use your home directory or `/` as the root.
- Malformed requests (bad JSON, `null` bodies, unknown steps or types, bad ranges) get 4xx; the server doesn't crash on them.

## Commands

| Command | Does |
|---|---|
| `serve --run <dir> [--root <workspace>] [--port N] [--open]` | starts the server in the background (reuses a running one only if this same copy and version started it; a console from an older version is stopped and replaced, so an update always shows the new page), prints `{url}`; `--open` opens the browser. `--root` defaults to the current directory: only files under it, this skill, and installed skills (`~/.claude/skills`, `~/.agents/skills`) are served. |
| `push --run <dir> --step <id> --file <payload.json>` (or `--data '<json>'`) `[--status awaiting\|working\|done\|skipped] [--current] [--merge] [--title "..."]` | **replaces** that step's payload (clearing old options, issues and the "you sent" banner); `--merge` keeps the previous fields instead. `status` defaults to `awaiting` (`working` for build); an awaiting step becomes the current one and the page jumps to it. The page also drops any unsent selections made against the old payload. |
| `reply --run <dir> --step <id> --message "..."` | Claude's answer in that step's discussion thread (under the step on the page); clears the "Claude is replying" state. The thread survives re-pushes of the step. |
| `activity --run <dir> --message "..." [--level info\|ok\|warn] [--done]` | what Claude is doing now, between questions ("Capturing tally.app", "Drawing style frame 2 of 3"): a feed entry and the status line. `--done` records it without showing Claude as working. |
| `log --run <dir> --message "..." [--level info\|ok\|warn\|error] [--stage <id> --stage-status working\|done\|failed]` | appends a build log line and sets a stage chip (stages: handoff, plan, design, build, verify, obey, render-gate). It moves the page to Build only while the current step is plan or build (never away from the render gate); `--stage render-gate --stage-status done` marks Build done. |
| `wait --run <dir> [--step <id>] [--timeout <sec>]` | blocks until an unconsumed action arrives (for that step, or `*`), prints it, marks it consumed. Exit 2 on timeout; a stopped server is restarted on the same address; exit 3 (`console_down`) only if that fails. Run it in the background, one at a time. |
| `record --run <dir> --step <id> --type <type> [--value '<json>'] [--note "..."]` | logs an answer the user gave in chat (already consumed) so the session history is complete |
| `state`, `url`, `stop` | print the session, reprint the URL (errors if the server is gone), stop the server |

Paths in payloads are workspace-relative (or absolute). The page serves them at `/fs/rel/<path>` / `/fs/abs/<path>`.

## Common payload fields (any step)

| Field | Shown as |
|---|---|
| `question` | the step's question, large |
| `context` | a line of context under it |
| `recommended` | badge on the recommended option |
| `decision` | green "Decided:" line (set with `status: done`) |
| `status` | nav dot: awaiting (amber, pulsing ring) · working (spinner) · done (green) · skipped (grey) |

Every panel except Build has a note box, "Send note" and "You decide this step". The nav has "You decide the rest".

## Per-step payloads

| Step | Fields |
|---|---|
| `brief` | `fields: {content, sub, destination, aspect, length_s, narration}` (prefill; `narration` true/false), `aspects` (default 16:9, 9:16, 1:1, 4:5) |
| `brand` | `brand` (brand.mjs `read` summary: roles, fonts, modes, warnings), `board` (brand-board.html), `unavailable` → brand board, swatches, mode chips, three choices |
| `route` | `options: [{id, label, why}]` (HyperFrames workflow ids, or `reel`) |
| `direction` | `directions` (direction.mjs `directions`: `{id, name, why, terms, image, rare, picks}`), `recommended`, `dimensions` (direction.mjs `menu`) → three direction cards with Claude's pick selected, "Use this direction", "Show 3 more", and Fine-tune: the key dimensions (UI treatment, illustration, typography, motion language, transitions, pacing) as chips preset to the selected direction, plus "Every dimension", the full form (every dimension as a group of term cards, facet chips, "Claude decides" per dimension, notes, a live style formula). With `dimensions` only, the full form is shown. |
| `footage` | `clips` (footage.json's clips from `reel.mjs scan`) → a card per clip: contact sheet, facts, transcript, include checkbox |
| `concept` | `options: [{id, title, logline, frames: [3 PNGs], beats: [3 short captions], rare}]`, `recommended` → story cards, each a strip of three sketch frames with its captions, the title and the logline; Claude's pick selected, "Use this story". (Text-only `{title, world, hook}` still renders.) |
| `scenes` | `scenes: [{title, on_screen, visual, voiceover, duration, transition_in, intensity, …}]` (scenes.json's list; extra fields pass through), `target_s`, `transition_default`, `narrated` → editable table + timeline strip |
| `styleframes` | `images: [..]`, `captions: [..]` → the stills Claude designed, with Approve |
| `look` | design directions: `looks` (looks.json's looks; made with `--stills`, each has a `still`), `recommended` → look cards with Claude's pick selected, "Use this look", "Show 6 more"; without stills, `page` (design.mjs looks index.html) → the board grid and letter pickers; or the older preset form `options: [{id, showcase, description}]`, `note_brand` |
| `motion` | `tasting` (index.html from tasting.mjs), `cells` (tasting.json's `cells`: `{letter, id, name, oneLiner, parent?, adjust?}`), `adjectives` (the object `motion-md.mjs adjectives` prints, or a list of ids), `recommended` → one card per motion language, each a live tile playing the user's line (`index.html?cell=<letter>`, the swatch alone), its name and one line; Claude's pick selected, "Use this motion", "Show others", and "Adjust" (the adjective chips → `adjust`). |
| `reel` | `timeline`, `overlays`, `captions`, `clips: [{name, duration}]`, optional `edl` (reel.edl.json) and `video` (draft render) → the editable cut (references/reel.md) |
| `transitions` | `menu` (index.html from transition-menu.mjs), `cells` (transitions.json's `cells`: `{letter, id, label, energy, duration_s}`), `recommended` |
| `voice` | `options: [{id, title, mood, file, source}]` (output of voice.mjs), `recommended`, `unavailable` |
| `storyboard` | `timeline` (timeline.json from scenes.mjs) → the timing strip; `sheet` (the workflow's storyboard.html, optional `sheet_width`/`sheet_height`) → the sheet plus an Approve button |
| `keyframes` | none → "show poses / go straight to build" buttons; `board` (board.html) and `issues` (from board.json) → the live board with Approve (disabled while issues exist), `board_height` (optional, px) |
| `music` | `options: [{id, title, mood, duration, file, source}]` (output of music.mjs), `unavailable` (message when none could be fetched) |
| `plan` | `shape: {route, aspect, length, scenes, look, motion, transitions, voice, music}` (any keys; shown as a table), `stated: [..]`, `agent: [..]` |
| `build` | written by `log`: `log: [{t, level, msg}]`, `stages: {id: status}`; optional `obey` summary line (push) |
| `render` | `images: [..]` (snapshots, contact sheet), `videos: [..]` (renders), `studio` (Studio preview URL) |

## Actions (what `wait` returns)

`{"id", "ts", "step", "type", "value", "note", "source": "console"|"chat"}`

| type | step | value |
|---|---|---|
| `submit` | brief | `{content, sub, destination, aspect, length_s, narration}` |
| `submit` | scenes | `{scenes: [...]}`: the full edited list, in order |
| `submit` | footage | `{include: [clip ids]}` |
| `choose` | direction | a direction id (from `directions`) |
| `submit` | direction | Fine-tune: `{direction: id, picks: {dimension: [id]}, decided_by, notes}` (the direction plus the changed terms); full form: `{picks: {dimension: [term ids], "dim:facet": [id]}, decided_by: {dimension: "user"|"agent"}, notes: {dimension: text}}` |
| `choose` | brand | `{use: "direct"|"remix"|"none", mode}` |
| `submit` | reel | `{timeline, overlays, captions}`: the full edited cut |
| `choose` | route | workflow id |
| `choose` | transitions | the exact `transition_in` string (`cut`, `crossfade`, `push-slide LEFT`…) |
| `choose` | voice | voice id or `"none"` |
| `choose` | concept, look, motion | option id (a look letter; a motion cell id such as `lang-snappy`, or with `+` an adjusted variant: `lang-snappy+slower`) |
| `choose` | keyframes | `"poses"` or `"skip"` |
| `choose` | music | track id, `"none"`, or `{file}` |
| `choose` | render | `"preview"` or `"render"` |
| `adjust` | motion | `{id, adjust: [adjectives]}` |
| `more` | direction, motion, look | `{exclude: [ids]}` |
| `approve` | storyboard, styleframes, keyframes, plan | null |
| `decide` | any | null: "you decide" for that step |
| `decide-rest` | `*` | null: "you decide the rest" |
| `note` | any | null; the text is in `note`. It's also added to that step's discussion thread; answer with `reply`. |

A `note` can come with any action type too (e.g. `choose` + "but a bit slower").
