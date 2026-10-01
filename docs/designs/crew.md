# Design: RasanAI's crew

Status: built (unreleased) · Branch: motion-style-guide-skill · 2026-10-01

## The problem

The films were still not at the level they should be. The test that showed it: "make a launch video about ChatGPT." Tools like this get tested on products that already exist and are famous, which is the hardest case: everyone knows what the real thing looks like.

What that run did, read from its files (`~/test1/.rasanai/20261001-165654`):

- **Research was one capture of chatgpt.com, logged out.** The truth sheet's native words included "Plugins", a menu ChatGPT no longer has. Nothing was dated, and nothing came from the help center, the release notes, the brand pages or the product's real logged-in UI.
- **The product wasn't in the film.** The capture had no logged-in screens, so the frames rebuilt the UI as grey placeholder bars. The answers, the summary and the report were all wireframe lines. The type was Inter, not OpenAI's typeface. The UI floated small in a white field; craft.md asks for UI that fills 60% of the width.
- **One layout, four times.** Scenes 4 to 7 repeat the same composition (headline above an input above a card), which craft.md bans past 2 in a row. Each frame was built by a worker who saw only its own packet.
- **The motion was thin.** Each frame was 5 to 9 KB of HTML. A strip of scene 4 shows six seconds of text typing into a centred box and nothing else. No one owned the seams: the transitions were blur-crossfades between near-identical white screens, so soft that a cut detector reads the 45-second film as three shots.
- **The precedent was never looked at.** OpenAI has a public film history with a recognisable grammar. Nobody checked what ChatGPT's own launches look like, or what every AI launch video already does.

The rules in craft.md were right. What was missing was the work they assume someone does: real research, a single owner of the motion, enough attention per scene, and eyes on the result.

## What we chose

**A Director with a crew.** The main session stays the only one who talks to the user (the five calls, the console) and holds the decisions. Twelve roles, each with a brief in `skills/rasanai/agents/`, do the work. Three tests decide whether something becomes a role:

1. **Is it parallel?** (research tracks, three scripts, key frames, scenes)
2. **Does it need a whole context?** (reading a product's site, help center and code; animating one scene with its recipes)
3. **Does it need independence?** (critics; the script editor)

If none applies, it stays with the Director or in a script. Deterministic work stays in scripts: story checks, the music fit, obey, slop, and now `crew.mjs check`. **Continuity has one owner:** the research lead owns the truth, the Motion Director owns the motion, the Director owns the user.

### The roles, and why each exists

| Role | Exists because |
|---|---|
| product researcher | features, releases, numbers and UI words must come from today's pages, with dates and sources |
| brand researcher | colours from the CSS, the real type (and an honest substitute), the official logo, and the brand's motion signature (its easings and durations), written as a DESIGN.md |
| screens researcher | real screens and states, plus a **measured UI kit**, so rebuilt components look like the product instead of a wireframe |
| precedent researcher | how the brand has filmed itself (house grammar) and what the category always does (clichés), measured shot by shot from real films |
| local scout | the product is often on the user's machine: UI strings, tokens, unreleased work, earlier videos. Read only with permission |
| research lead | slices disagree; one truth sheet, one claims ledger, one brand verdict, one asset kit, one page for the Director |
| script writer ×3 | each script gets a full context; three devices are written at once |
| script editor | the writers can't judge their own scripts; a hostile reader with the claims ledger |
| Motion Director | parallel animators can't make one film on their own; someone must score every shot and every seam, and later check every cut |
| frame designer | key frames need the real product at full fidelity; parallel ranges |
| scene animator | one scene, full attention, its technique recipes inlined, its seams as contracts, its own motion seen in strips |
| critic | a maker can't see its work fresh; four lenses (frames, motion, grounding, film), default reject, exact fixes |

### How it plugs into HyperFrames

The workflows already run parallel frame workers from packets built from STORYBOARD.md. Their Step 4 (visual design) is the natural place for the score. `crew.mjs storyboard` writes the Motion Director's `score.json` into STORYBOARD.md in that step's own format (Video direction, shot sequences, blueprint, focal, roles, sfx, `handoff_in` / `handoff_out`, `transition_in`), checked with the workflow's own parser. `frame-packets.mjs` then carries each scene's part of one plan to its worker without any change to HyperFrames. The scene animator's prompt is the workflow's technical role plus the packet (how to build a composition that renders) with RasanAI's craft brief on top (how good it has to be).

### Seeing, not reading

Motion described in code can't be judged until it's rendered. `crew.mjs strip` renders a composition before assembly (seeking its GSAP timeline in headless Chrome), an assembled project (through HyperFrames' own snapshot) or a video, at chosen times or at 15 fps across a move, into a labelled sheet. Animators check their own spacing and landings; the Motion Director checks seams; critics judge from frames.

### Permission

The web needs none. The user's disk does: `research.mjs local-find` reads folder names, package names, git remotes and README titles to find candidates. The console asks once ("read", "read and run the app", "no"). Only approved folders reach the scout, which copies no secrets and changes nothing.

### Cost, and the lean crew

A 45-second, 8-scene launch film dispatches about 25 to 30 members. Gathering roles can run on a faster model; creative and judging roles keep the session's model. `--lean` (and any harness without delegation) runs the smallest crew, or the Director follows the same briefs itself in order: same files, same checks, only the parallelism lost.

## What we didn't do

- **No agent-to-user channel.** Members return `needs_from_user` and the Director asks in the console. Five calls stay five.
- **No new orchestration runtime.** Prompts are files, acceptance is a script exit code, state is a ledger in the run (`crew.mjs status` survives compaction). It works with the Agent tool today and degrades to serial.
- **No footage from reference films in the film.** They're downloaded for analysis only and deleted afterwards.

## Open

- A full end-to-end film through the crew on a public product (ChatGPT again) is the real test; the tools and checks are covered by the self-test, not yet by a shipped film.
- The console could show the crew as a panel (who's working, who's accepted). Today it shows each delegation and member activity in the live feed.
