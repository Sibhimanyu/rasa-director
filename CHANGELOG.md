# Changelog

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
