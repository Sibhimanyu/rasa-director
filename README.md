# Rasa Director

**Creative direction for video made with Claude.** Pick how your piece looks and moves, by eye, before anything is built. You're the director, Rasa handles taste, [HyperFrames](https://hyperframes.heygen.com) shoots.

Today: motion graphics (titles, stings, kinetic type, stats). Next: footage edits, reel captions and overlays.

*Rasa* (ரசம் · रस) is the essence a work makes its audience feel. Every AI motion graphic has the same one: text fades up and slides into place on an ease-out curve. Rasa Director is a Claude Code skill that lets you choose a different one, then makes sure the build actually uses it.

![The tasting menu: one headline in six motion personalities](docs/img/tasting-enterMid.png)

**Website:** https://sibhimanyu.github.io/rasa-director/

## What it does

You say `/rasa-director make a launch sting for "Ship it in an afternoon"`. Rasa Director opens a **Director's Console** in your browser and walks you through seven decisions, each made on a preview of your own content:

| Step | You see | You decide |
|---|---|---|
| 1 Brief | a form | the words, where it plays (16:9, 9:16, 1:1, 4:5), length |
| 2 Concept | five pitches, at least two a model wouldn't usually produce | the idea |
| 3 Look | HyperFrames frame presets, live | palette, type, layout (or your brand spec) |
| 4 Motion | the **tasting menu**: your headline looping in six motion personalities side by side | how it moves; adjust with "slower", "calmer", "punchier"… |
| 5 Keyframes | a board of key poses, the easing curve and stagger between each, a live scrubber | approve, or "hold longer on the tagline" |
| 6 Music | two or three tracks with players | a bed, your own track, or silence |
| 7 Build & render | the plan, live build progress, proof snapshots, the final video | "build it", "preview first", "render" |

Any step can be handed back with **"you decide"**, or everything after it with **"you decide the rest"**. That never means the generic default: the agent samples unusual options, rotates away from what it picked last time, and gives a one-line receipt for every choice. Answer in the console or in chat, whichever you like.

![Director's Console: the motion step](docs/img/console-motion.png)

Then it hands a finished brief to [HyperFrames](https://hyperframes.heygen.com) to build. Your motion choice is locked in a binding `motion.md` (durations, eases, stagger, holds, banned patterns), appended to every subagent that plans, designs, builds or repairs the piece, and checked on the built composition in headless Chrome before the render question.

| Keyframe board | Music | Build |
|---|---|---|
| ![](docs/img/console-keyframes.png) | ![](docs/img/console-music.png) | ![](docs/img/console-build.png) |

## Install

Requirements: [Claude Code](https://claude.com/claude-code), Node.js ≥ 20, and the HyperFrames skills (`npx hyperframes skills update`). Chrome for previews and checks comes from `npx hyperframes browser ensure`. Music uses HyperFrames' media catalog (the `heygen` CLI, signed in); without it you can still use your own track or none.

**Claude Code plugin** (recommended)

```
/plugin marketplace add Sibhimanyu/rasa-director
/plugin install rasa-director@rasa-director
```

**skills CLI**

```bash
npx skills add Sibhimanyu/rasa-director --skill rasa-director
```

**One-line installer** (links `~/.claude/skills/rasa-director` to a checkout in `~/.rasa-director/src`; run again to update, `--uninstall` to remove)

```bash
curl -fsSL https://raw.githubusercontent.com/Sibhimanyu/rasa-director/master/install.sh | bash
```

**By hand**

```bash
git clone https://github.com/Sibhimanyu/rasa-director.git
ln -s "$PWD/rasa-director/skills/rasa-director" ~/.claude/skills/rasa-director
```

Check the install: `node ~/.claude/skills/rasa-director/scripts/selftest.mjs` (27 checks, about a minute, no network needed). With the plugin install the skill lives under `~/.claude/plugins/cache/rasa-director/`; run the same script from there.

With the plugin install Claude Code namespaces the skill: invoke it as `/rasa-director:rasa-director` (or just describe what you want; it triggers on motion-graphic requests).

## Use

```
/rasa-director make a launch sting for "Ship it in an afternoon"
/rasa-director 6s vertical reel intro for our coffee brand "Slow Pour", tagline "Brewed like it matters". You decide the look, show me keyframes.
/rasa-director revise videos/ship-it-sting: calmer motion
```

## How it works

```
skills/rasa-director/
  SKILL.md                    the step machine the agent follows
  console/index.html          the Director's Console page
  personalities/*.json        10 motion personalities: eases, duration scale, stagger, holds, bans, demo
  scripts/
    console.mjs               the console server + push / wait / log / record (127.0.0.1, token-protected)
    tasting.mjs               the tasting menu: a looping page that is also a valid HyperFrames composition
    pick.mjs                  candidates and "you decide" picks (feel vocabulary, tail sampling, rotation)
    motion-md.mjs             writes motion.md; adjectives (slower, faster, calmer, punchier, bouncier, stiffer)
    board.mjs                 the keyframe board, validated against motion.md (scale, stagger, holds, bans)
    music.mjs                 music candidates through HyperFrames media-use
    handoff.mjs               creates the HyperFrames project: BRIEF.md, frame.md, motion.md, DISPATCH.md,
                              host root, assets, confirmed preferences; revise mode
    obey.mjs                  checks the built composition obeys motion.md; waive
    memory.mjs                remembered picks (recommend) vs pick history (rotation)
    selftest.mjs              the checks CI runs
    lib/                      shared helpers, the choreography engine, banned-pattern signatures
    vendor/gsap.min.js        GSAP 3.14.2
  references/                 console payloads, motion.md contract, board format, handoff, personalities
```

- **The personalities** are data, not prose: each one's own preview passes the same checker the build must pass, so what you pick in the tasting menu is what gets enforced.
- **The checker** (`obey.mjs`) loads each composition in headless Chrome with GSAP, walks every tween, samples its real start and end values, and flags off-scale durations, eases outside the set, implicit default eases, banned patterns (fade-up-slide in all its forms, bounce, overshoot, blur-in, scale-pop…), non-GSAP motion and short holds. "Could not run" is never reported as clean.
- **Local only.** The console binds to 127.0.0.1, refuses foreign Host headers, and requires a per-session token (then an HttpOnly cookie) for every route; it serves files only from your workspace and installed skills, never its own token file, and refuses to run with your home directory as the root. Music is fetched through HyperFrames' own media tools; nothing else leaves your machine.

Details: [SKILL.md](skills/rasa-director/SKILL.md) · [console](skills/rasa-director/references/console.md) · [motion.md contract](skills/rasa-director/references/motion-md-contract.md) · [keyframe board](skills/rasa-director/references/board-format.md) · [handoff](skills/rasa-director/references/handoff.md) · [personalities](skills/rasa-director/references/personalities.md) · [design doc](docs/designs/motion-director.md)

## Publishing notes (for the maintainer)

- The repo is public. The install commands work as soon as `skills/`, `.claude-plugin/` and `install.sh` are pushed to `master`.
- The website deploys from `docs/` via `.github/workflows/pages.yml`: in the repo settings set Pages → Source to **GitHub Actions**, then run the workflow once (Actions → pages → Run workflow); later pushes to `docs/` redeploy.
- CI (`.github/workflows/ci.yml`) runs the self-test on every push.

## Known limits

- Previews are text-only: a logo sting or data piece is previewed with its words; the real logo or data enters at build.
- HyperFrames' frame presets are designed at 16:9. At other aspects the look is judged again in the tasting cells, at the real aspect.
- Previews use Google Fonts; offline they fall back to system fonts.
- The checker verifies GSAP motion (motion.md requires GSAP builds).
- A full `/motion-graphics` run including its Director hasn't been exercised end to end yet; the Builder has, with DISPATCH.md, and passed lint and the checker.

## License

MIT. `skills/rasa-director/scripts/vendor/gsap.min.js` is GSAP 3.14.2 under the [GSAP Standard License](https://gsap.com/standard-license).

Built on [HyperFrames](https://hyperframes.heygen.com) and [Claude Code](https://claude.com/claude-code).
