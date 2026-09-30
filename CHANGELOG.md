# Changelog

## 0.1.0 (2026-09-30)

First release as **Rasa Director** (developed as motion-director).

- Seven-step guided direction: brief, concept, look, motion, keyframes, music, build & render. Every step skippable with "you decide"; "you decide the rest" hands over everything after it.
- **Director's Console**: a local page (127.0.0.1, per-session token) where every step's options appear and every choice goes back to the agent: brief form, concept cards, live look presets, the live tasting menu with adjust controls, the keyframe board, music with players, the plan, build progress and renders.
- 10 motion personalities as data; the tasting menu previews your own content in up to six of them, at your real aspect, in your look.
- `motion.md`, a binding motion contract, handed to HyperFrames and appended to every build subagent (DISPATCH.md).
- `obey.mjs`, a headless-Chrome checker that the built composition obeys motion.md; `board.mjs` validates approved keyframes against the same rules before the build.
- Music candidates through HyperFrames media-use.
- Install as a Claude Code plugin, with the skills CLI, or with a one-line installer. `selftest.mjs` runs 27 checks; CI runs it on every push.
