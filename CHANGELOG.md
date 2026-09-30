# Changelog

## 0.6.0 (2026-09-30)

- **Every question looks like the redesign, not just the page around it**: 0.5.0 replaced the console's frame, but the steps inside kept their old controls, so an updated console still asked the old way. Now the pick-one steps (direction, story, look, workflow, voice, music) are cards with Claude's pick already selected and marked, one "Use this …" button, and the question as the heading; every step ends with "Not sure? Let Claude decide this one". Phases read Brief · Direction · Look & motion · Style frames · Build, with "2 of 5" on each step.
- **Direction asks with three complete directions**: `direction.mjs directions` turns whole style combinations into cards (a name, why it fits, its defining terms, a board image in your brand), ranked against what you've already decided, no two with the same visual style, one unusual, never the generic default. "Show 3 more" never repeats one; Fine-tune changes the key terms (UI treatment, typography, motion language, transitions, pacing) as chips, and "Every dimension" still opens all 30. `pick-direction` writes the chosen one into decisions.json.
- Look cards use each board's still (`design.mjs looks --stills` now records it per look). Screenshots retaken.

## 0.5.0 (2026-09-30)

- **The console, redesigned**: it always shows what Claude is doing, and asks one thing at a time. A light, calm page with five phases across the top (Brief · Direction · Look & sound · Approve · Build) instead of a 19-step sidebar; a status line that says either what Claude is doing right now or what it's waiting on you for; a live "What Claude is doing" feed; only the current question in the middle, with one button to go with Claude's pick; and "Your film", every decision so far with a "change" link, plus "Tell Claude anything". The moment you answer, the page shows Claude working on it until the next question arrives. Every step panel and action is unchanged, so nothing Claude sends or receives changed.
- **`console.mjs activity`**: Claude narrates its work between questions ("Capturing tally.app", "Drawing style frame 2 of 3"); pushes, build logs and your own answers (by the option's name) land in the same feed.
- **Updates reach the page**: a console server started by an older version is stopped and replaced instead of reused, and setup picks the newest installed copy of the skill (skills folders and plugin cache), so an old copy can't shadow an update. The page shows a notice when a newer release is out.
- Site and README screenshots retaken from the new console.

## 0.4.3 (2026-09-30)

- **Works without Node installed**: setup is now one command, `bash scripts/setup.sh --open`, which needs only bash and curl. It finds Node ≥ 20 on the PATH or where nvm, fnm, Volta, asdf or Homebrew put it (Claude Code's shell often misses these); if there is none, it downloads a private copy of Node LTS from nodejs.org into `~/.rasa-director/node`, verified against the official checksum, with no sudo and nothing changed system-wide. Then it checks for updates, checks HyperFrames and the browser, makes the run folder and starts the console, printing a `PROBLEM:` line with the fix for anything that fails instead of stopping silently. When Node isn't on the PATH it prints a `PATH_PREFIX` that Claude puts in front of every later command. The one-line installer no longer stops when Node is missing. `RASA_DIRECTOR_NO_NODE_DOWNLOAD=1` turns the download off.

## 0.4.2 (2026-09-30)

- **Update check**: a run starts with `update.mjs check`, which compares this copy with the latest release (at most once a day, a 2-second limit, silent offline) and, when there's a newer one, says so in one line with what's new. Say "update" and `update.mjs apply` updates it the way it was installed (Claude Code plugin, one-line installer, git clone or skills CLI). `RASA_DIRECTOR_AUTO_UPDATE=1` updates without asking; `RASA_DIRECTOR_NO_UPDATE_CHECK=1` turns it off. The skill now carries its version in `VERSION`. Versions before 0.4.2 have no check; update them once by hand (README, "Updating").
- **Questions only in the console**: every question and its options go to the Director's Console in the browser, for every run. Chat gets one line pointing to it; no option lists in chat and no in-chat question tool. There is no chat-only mode; chat is the fallback only when the console cannot run at all.

## 0.4.1 (2026-09-30)

- **Logo**: a lowercase r whose shoulder is an ease-out curve, landing on an amber keyframe. Mark, symbol, wordmark, Rasa Director and bilingual (ரசனை) lockups, light and reverse, in `docs/assets/logo/` (SVG, wordmarks outlined from Anek Latin / Anek Tamil; PNG icons at 1024/512/180). Used for the site favicon, apple-touch icon and nav, the console header and favicon, and the README title.
- **Design directions**: variants of one visual style never repeat a type pairing, so six looks stay six distinct looks even without HyperFrames' palettes.
- **Console redesign mockup** (`docs/mockups/console.html`): always shows what Claude is doing (live status, activity feed, results appearing as they're made), five phases instead of 19 steps, one question at a time with Claude's pick preselected, "Claude decides the rest", and a "Your film" panel. For review before it replaces the console.

## 0.4.0 (2026-09-30)

**Direction in proper terms; Claude designs and animates.** Rasa Director no longer offers canned animations as the product: it gives the user the vocabulary of motion design, compiles their decisions into an art-direction brief, and Claude designs and animates every frame from it.

- **The taxonomy**: 30 dimensions and about 880 terms (format, UI treatment, product-demo language, UI interaction, data viz, photo/video, illustration, character, iconography, visual style, era, color, typography, composition, shape, stroke, shadow, material, texture, depth, motion language, motion function, transitions, camera, effects, pacing, narrative, sound, production, tone), each with a definition, looks, motion, uses, what it conveys, what it's confused with, search terms and a precise prompt; 35 style combinations; a schema and validator (`taxonomy.mjs`).
- **Direction** step and `direction.mjs`: pick per dimension or hand it to Claude (candidates coherent with the picks so far, never the generic default); reference analysis and comparison templates; `DIRECTION.md` with the style name, the style formula and a Do / not-to-be-confused-with instruction per decision. Its binding summary goes into frame.md, every frame packet, DISPATCH.md and every reel card brief.
- **DESIGN.md**: `brand.mjs` reads a project's brand reference in the common shapes (design.md spec frontmatter with oklch colors, impeccable, gstack, Stitch-style prose, CSS custom properties, token tables), assigns color roles, maps platform fonts, converts it to a HyperFrames frame.md (verified with HyperFrames' parser) or build-frame tokens, and renders a brand board. A Brand step offers it first.
- **Design directions**: `design.mjs looks` makes complete looks (visual style + palette by role + type pairing + shape, stroke, shadow, texture, composition) as boards with the user's words and a frame.md each; brand-locked when there is a DESIGN.md. Replaces choosing among frame presets.
- **Motion languages**: the motion step chooses a motion-language term whose contract becomes motion.md (`motion-md.mjs --language`); the 10 personalities are now preview swatches. Every language's swatch passes the checker against its own contract.
- **Style frames**: Claude designs the key frames as stills for approval before animation (`design.mjs stills`).
- **Reel cards by Claude**: `reel.mjs briefs` writes a brief per card and overlay; Claude writes each as a HyperFrames sub-composition; `build` mounts and checks them (`by: "swatch"` keeps the quick engine draft).
- Fonts are staged for every look (preset files, Google Fonts, Fontshare) with an `@font-face` section in frame.md; headless Chrome launches have a hard time limit.
- Console: Brand, Direction and Style frames panels; the Look panel shows design-direction boards.
- Website and README rewritten around the stack of decisions. Self-test: 52 checks.

## 0.3.0 (2026-09-30)

**Footage reels.** Point Rasa at a folder of raw clips and it cuts them into a reel or edit, with motion-graphics cards between clips and titles, lower thirds and captions on top.

- `reel.mjs scan` examines every clip: length, size after phone rotation, fps, sound, a contact sheet and poster, shot changes, silences, and a word-level transcript.
- `reel.mjs build` turns the cut (reel.json) into a HyperFrames composition: each used segment conformed to the reel's frame (cover with focus, letterbox, or blur-fill) at a constant frame rate, cards and overlays drawn in the chosen look and motion and sized to their requested length, clip transitions in the motion's own handoff (cut, dissolve, wipe), captions remapped through the cut, and a music bed that ducks under speech. It stages the look's fonts, runs `hyperframes lint` and `obey.mjs`, and renders.
- Console: **Footage** (the clips, their contact sheets and transcripts) and **Cut** (the editable edit: in/out points, order, cards, overlays, captions, a draft to watch).
- The landing page's tasting demos play three scenes; its copy covers whole videos and reels.
- Self-test: 39 checks (CI installs FFmpeg).

## 0.2.0 (2026-09-30)

**Entire videos.** Rasa Director now directs whole multi-scene films, not only single motion units: launch films, explainers, PR videos, brand reels and custom pieces, music videos, and footage with captions or overlay cards.

- New steps: **Route** (which HyperFrames workflow builds it), **Scenes** (the whole film as an editable scene table: on-screen text, voiceover, length, transition, intensity), **Transitions** (your scenes handing off through every transition), **Voice** (your hook line in three voices), **Storyboard** (timeline, then the workflow's sketch pass relayed to the console).
- The tasting menu plays several of your scenes in sequence (`tasting.mjs --scenes`), so one motion grammar is judged across the film.
- `scenes.mjs` writes STORYBOARD.md and SCRIPT.md in the workflows' exact format, checked with their own parser.
- `video.mjs` sets up the project, writes BRIEF.md (the workflow asks nothing), builds frame.md with the motion contract, injects the contract into every frame packet, locks the chosen music track into the mix, and moves an old build aside on revise.
- `obey.mjs` checks every built scene of a multi-scene project.
- Memory tracks route, transitions and voice picks. Self-test: 34 checks.

## 0.1.0 (2026-09-30)

First release as **Rasa Director** (developed as motion-director).

- Seven-step guided direction: brief, concept, look, motion, keyframes, music, build & render. Every step skippable with "you decide"; "you decide the rest" hands over everything after it.
- **Director's Console**: a local page (127.0.0.1, per-session token) where every step's options appear and every choice goes back to the agent: brief form, concept cards, live look presets, the live tasting menu with adjust controls, the keyframe board, music with players, the plan, build progress and renders.
- 10 motion personalities as data; the tasting menu previews your own content in up to six of them, at your real aspect, in your look.
- `motion.md`, a binding motion contract, handed to HyperFrames and appended to every build subagent (DISPATCH.md).
- `obey.mjs`, a headless-Chrome checker that the built composition obeys motion.md; `board.mjs` validates approved keyframes against the same rules before the build.
- Music candidates through HyperFrames media-use.
- Install as a Claude Code plugin, with the skills CLI, or with a one-line installer. `selftest.mjs` runs 27 checks; CI runs it on every push.
