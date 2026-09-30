# Craft: the decisions Claude makes without asking

The user decides taste: what the video is, the style, the story, the voice and music they hear, the key frames, and when to render. Everything below is **craft**, and Claude decides it, the way a senior motion designer would, without a question. Each decision still lands in the console ("Your film", with a one-line reason) so the user can change it by discussing it, but nobody should have to pick a transition from a menu.

Work from the chosen style (its `stack` and `recipe`), `DIRECTION.md`, `motion.md` and the story. When a rule here conflicts with the style's own character (a stop-motion style wants stepped cuts), the style wins; say so in the reason.

## Transitions

- **Default to the cut.** A clean hard cut on a strong frame is the professional baseline. Every other transition must earn its place by carrying meaning.
- **Match cuts and continuity first.** When two scenes share a shape, position or colour (a button that becomes the next scene's card, a number that stays put while the world changes around it), carry it across: a UI morph, a shared-element move or a match on action. This is the transition that makes a film feel designed.
- **One signature transition per film,** used at most two or three times, at the structural hinges: problem → solution, act changes, the reveal. Make it belong to the style: a mask wipe for editorial, a zoom-through for product depth, a glitch cut for acid or cyber styles, a paper tear for collage, a stepped cut for stop-motion, a colour-field push for Swiss or bold styles.
- **Pushes and slides follow reading direction and the story's direction** (forward in time or progress → left; going deeper → zoom in; stepping back → zoom out). Never alternate directions without a reason.
- **Crossfades and dissolves only for time passing or mood** (luxurious, cinematic, documentary styles), never as the generic default. Blur transitions only when the style is soft or photographic. Fade to black only at the very end, or a hard structural break.
- **Duration from the motion language:** snappy or precise 0.25–0.4 s; smooth 0.4–0.6 s; cinematic or luxurious 0.8–1.2 s. Cuts on music land on the beat, or 1–2 frames before it.
- **Obey `motion.md`:** its banned patterns (fades or blurs for mechanical styles, for example) are machine-checked; the transition choice must pass them.
- Set `transition_default` to the baseline (usually `cut`) and per-scene `transition_in` for the hinges.

## Pacing and timing

- **Hook in the first 1.5–2 seconds:** the most striking image or line first, no logo intro, no slow build.
- **Scene lengths by format:** launch film 3–5 s per scene; explainer 4–7 s (one idea each); social 1.5–3 s; title sequence or brand film 3–6 s; a stat or quote hit 2.5–4 s.
- **Reading time:** on-screen text holds at least 0.4 s per word + 1 s, and never less than 1.5 s for a line. Voiceover sets the floor for narrated scenes.
- **Vary rhythm:** don't give every scene the same length; group 2–3 quick beats, then let one breathe. The reveal gets the longest hold.
- **End with a hold:** the final lockup (logo, name, call to action) holds 2–3 s, still, after the last motion settles.

## Story structure

- One job per scene; if a scene needs two sentences to explain its job, split it.
- Launch films: hook (the problem or the wow) → the product in action (2–4 moments, the real UI) → the proof or payoff → the name and call to action. Explainers: the question → the idea in one image → how it works (2–4 steps) → what it means → the takeaway.
- Show the product doing the thing, not describing it: a real click, a real result. Zoom into the action rather than showing the whole interface small.
- Cut anything the viewer can't read, see or hear at speed.

## Typography in motion

- **One idea per frame, seven words or fewer** on screen at once (headline plus at most one short supporting line).
- Big: display type fills a third of the frame's width at least; body text is never smaller than 3.5% of the frame height (about 38 px at 1080p).
- Animate by meaning: reveal a line as a unit, words for emphasis, characters only for a signature moment. Keep the text still long enough to read after it lands.
- Keep type inside the title-safe area (5% in from each edge; 10% for social crops).

## Composition and colour

- One focal point per frame; everything else supports it or goes.
- **Ration the accent colour** to the one thing that matters in each frame (the button, the number, the word). If everything is the accent, nothing is.
- Keep the style's grid and margins consistent across scenes; things that move across scenes stay on the same lines.
- Leave space: a crowded frame reads as cheap. When in doubt, remove an element.

## Camera

- Camera moves need motivation: push in toward the thing that matters, pull back to reveal context, track to follow an action. No drifting for its own sake.
- One move per shot; move or hold, don't both wander and animate.
- UI close-ups beat full-screen interfaces: frame the part of the UI where the action happens.

## Motion

- Everything follows the one motion language in `motion.md` (its eases, duration scale, stagger and holds); scenes differ only in `intensity`.
- Stagger by reading order (top-left first) and by importance; the key element moves last and settles longest.
- Anticipation and overshoot only in playful, elastic or cartoon styles; precise, luxurious and editorial styles settle without bounce.
- Enter and exit differently: exits are faster than entrances (about 60–70% of the time).

## Sound

- Hit the cuts and the key reveals on the music's beats or accents.
- Sound effects are sparse and designed: a UI click on a real click, a whoosh only on a signature transition, silence before the reveal.
- The voiceover leads; the music ducks under it.

## Endings

- The last scene is the name, the product and one call to action (a URL or "available today"), in the style's calmest composition, held 2–3 s.
- No "thanks for watching", no end cards stacked with social icons unless the brief asks.

## Generic AI-video tells to avoid

Floating particles and bokeh with no reason; lens flares; gradient blobs drifting behind everything; every element fading up and sliding in on the same ease; spinning 3D logos; stock "futuristic" HUD over unrelated content; text that appears and disappears before it can be read; centred everything; a crossfade between every scene; a logo sting at the start; generic phrases ("revolutionize", "seamless", "next-level") on screen.

## Reporting a craft decision

Push each Claude-decided step `--status done` with a `decision` a person can read in one glance and a reason tied to this film, e.g. `"Hard cuts, with one mask wipe at the reveal (editorial style; the wipe mirrors the page turn in scene 4)"`. If the user asks to change it (a `note`), answer with `reply`, change it, and re-push.
