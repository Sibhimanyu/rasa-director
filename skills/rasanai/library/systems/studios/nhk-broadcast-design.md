---
id: "nhk-broadcast-design"
name: "NHK Educational design: Design Ah! and PythagoraSwitch"
kind: "title-design"
era: "2002 (PythagoraSwitch), 2011 onward (Design Ah!), Tokyo"
origin: ["Taku Satoh", "Cornelius (Keigo Oyamada)", "Yugo Nakamura", "Masahiko Sato", "Masumi Uchino"]
palette: {"roles":{"canvas":"#ffffff","ink":"#1a1a1a","red":"#e60012","blue":"#0068b7","yellow":"#fff100"},"logic":"clean white ground with flat primary-leaning accents chosen per segment; the object under study sets the colour","evidence":"all hexes proposed: the fetched sources describe no palette and the only image found (arun.is social card) is the blog's own green, not the programme. #e60012, #0068b7 and #fff100 are Japanese process-colour style primaries chosen as working values."}
type: {"display":{"family":"the hiragana character あ as a recurring motif; typeface not stated in the fetched sources","free_alternative":"Zen Maru Gothic / M PLUS Rounded 1c","weights":[400,700],"case":"n/a","tracking":0,"note":"Zen Maru Gothic has weights 300/400/500/700/900; M PLUS Rounded 1c 100-900; Kosugi Maru is single-weight. Noto Sans JP (wght 100-900, variable) for plain gothic."},"body":{"family":"plain gothic","free_alternative":"Noto Sans JP","weights":[400,500]},"rules":["very little text; sound and visuals carry the idea","one motif, the character あ, anchors the brand","the object is the star"]}
grid: {"columns":"free; layouts demonstrate alignment, whitespace and size relations","baseline_px":null,"margins":"airy","rules":["compositions teach design principles (alignment, spacing)","object centred or deliberately offset"]}
shape: {"radius":"mixed","stroke":"clean line animation","shadow":"none","imagery":"everyday objects (pencils, cake, staplers, card decks), line animation, stop motion"}
texture: "paper, clay, real objects; claymation and stop-motion segments in PythagoraSwitch"
motion: {"language":"playful, exact, causal: one thing triggers the next","timing_ms":[200,500,1000],"eases":{"enter":"steps(1)","move":"power1.inOut","exit":"power1.in"},"entrances":["object appears on a beat","line draws to outline the object","parts separate (deconstruction) then reassemble"],"camera":"locked top-down or front; the object moves","signature":"a Rube Goldberg chain of everyday objects ending in a sung title as punchline; a design lesson in 5 to 10 minutes"}
space: {"2d":"native, line animation","3d":"possible for object deconstruction: exploded view with a locked camera"}
good_for: ["explainers about objects, craft, design for curious audiences", "playful educational pieces, kids and adults", "chain-reaction or process films"]
not_for: ["brand hype", "brutal or dark styles"]
blends_with: ["braun-dieter-rams-lineage", "muji", "bbc-idents"]
clashes_with: ["mtv-80s-idents", "stefan-sagmeister-studio"]
cheap_tells: ["'kawaii' stickers and sparkles instead of observation", "explaining by narration; the original relies on music and picture alone", "a random chain reaction with no cause between steps", "objects with gradients and glossy 3D; the objects are plain and real"]
verified: {"sources_fetched": 4, "non_wikipedia": 3, "colours": "proposed", "colour_images": [], "grid": "proposed", "timings": "proposed", "recipes": "aligned", "edited": "2026-10-03"}
sources: ["https://spoon-tamago.com/nhks-new-designy-educational-tv-show-design-ah/", "https://arun.is/blog/design-ah/", "https://www.2121designsight.jp/en/program/design_ah/", "https://en.wikipedia.org/wiki/PythagoraSwitch"]
---
## What it is
NHK is Japan's public broadcaster; its Educational TV channel has served children since 1959 (Wikipedia). Two programmes define a design language for it. Design Ah! began in 2010 or 2011 on NHK E; Spoon & Tamago names Taku Satoh (graphic designer), Cornelius (musician) and Yugo Nakamura (interface designer) as creators of ten segments spanning observation, sound, deconstruction and vantage point. PythagoraSwitch started on 9 April 2002; "Pythagorean Devices" are Japan's equivalent of Rube Goldberg machines, supervised by Masahiko Sato and Masumi Uchino, in a 15-minute standard or a five-minute Mini format. This entry is the programme graphics and format, not NHK's corporate logo, which has changed in 1925, 1945, 1962, 1995 and 2020 (Wikipedia).

## The rules that make it this and not something else
- Observe, understand, then act: design as "observing, understanding and then acting to enhance our connection between objects and people" (Spoon & Tamago).
- Everyday objects are subjects: pencils, cake, staplers, card decks.
- Wordless: the theme song by Chocolat uses only the sound あ; segments often rely on music and visuals alone; episodes run 5 to 10 minutes, "just long enough to convey a message" (arun.is).
- Techniques: line animation, stop motion, clay and motion capture (PythagoraSwitch segments).
- Segment types: abstract demonstrations (alignment, whitespace and size), pattern extraction in the world, artisan showcases, designer interviews, deconstruction.
- Chain causality: each step triggers the next, and the title is sung as a punchline (PythagoraSwitch).
- Taku Satoh (graduated 1979, Dentsu, own office 1984) is also director at 21_21 Design Sight, and curated its 2013 "Design Ah!" exhibition (Wikipedia).

## Tokens decoded
| Token | Setting |
|---|---|
| ground | #ffffff, occasionally a pale flat tint |
| ink | #1a1a1a thin outline, 3 to 4 px at 1080p |
| accent | one flat colour per segment, from #e60012, #0068b7, #fff100 |
| object | photographed or drawn plainly, centred, 40 to 60% of frame |
| type | Zen Maru Gothic 700, one character or one word at a time |
| sound | a sound for every action; no voiceover needed |
| segment length | 20 to 45 s for a RasanAI-sized piece |

## Motion and camera
Timings are proposed; the sources describe techniques (line animation, stop motion, parts lining up into a grid when the camera zooms out) but give no numbers.

2D (HyperFrames, craft.md vocabulary):
- Line draw: SVG outline `stroke-dashoffset` to 0 over 0.7 s `power1.inOut`, stroke 3 to 4 px `#1a1a1a`; fill with the flat colour in 2 frames (`gsap.set` on two successive frame times, no fade).
- Deconstruction: parts translate apart 60 to 120 px over 0.5 s `power2.out`, hold 0.6 s, rejoin 0.5 s `power2.inOut`; then the camera "zooms out" by uniform scale 1 to 0.5 over 0.8 s `power3.inOut` as the parts snap into a grid (the arun.is description of devices coming apart and lining up as the camera zooms out).
- Chain causality: each element's end pose equals the next element's start pose; build as one timeline with exact offsets (`tl.add(next, "<+=0")` style labels, the next tween starting at the previous's end label).
- Stop-motion feel: snap time to 12 fps via `Math.floor(t * 12) / 12` in an `onUpdate` that writes transforms. Camera: locked top-down or front. Grade: none. Sound: a click or tone for every action on its frame, a sung or sounded punchline at the end; no narration.
3D (Rasan3D, 3d.md sections 5, 13, 18): a tabletop top-down.
- `k.rig("top-soft", { dir: [0, 1, 0.2], shadowSoftness: 8 })`, `k.ground({ color: "#ffffff", shadowOpacity: 0.3 })` as a real floor, `environment: "soft"`, `lens: [[0, 35]]` or a very long lens (135 mm) for orthographic feeling, `pos: [[0, [0, 10, 0.001]]]` looking straight down, `target: [[0, [0, 0, 0]]]`, no bloom.
- Objects from boxes, cylinders and `k.extrudeText` pieces with `k.material("matte")` and `ceramic`, each assigned a flat colour. Exploded view: in `pose`, `part.position.y = k.prog(t, 1.0, 1.5, "power2.out") * 0.3 * i`; a chain reaction by key times via `k.at(t, keys)`.
- For rigid-body "dominoes", use `k.simulate("chain", { dt: 1/120, checkpointEvery: 0.5, init(state, k) {...}, step(state, dt, t, k) {...} })` and read `sim.at(t)` in `pose`; authored keyframes are simpler and more exact for a 20 to 45 s segment.

## How to instruct a model to build it
"Build a 40 second wordless design-lesson film in the manner of NHK Design Ah!. White ground. One everyday object, drawn as a 3 px #1a1a1a outline that draws on over 0.7 s power1.inOut, then filled with one flat colour in 2 frames. Deconstruct it: parts separate 90 px over 0.5 s power2.out, hold 0.6 s, rejoin. One concept per scene (alignment, size, whitespace) shown by moving elements on a locked camera. A single word at a time in Zen Maru Gothic 700 at 8 percent of short side. Music and sound effects only: every movement has a click or tone on its frame. No gradients, no stickers, no narration. Every tween on the paused timeline." Claude tends to narrate and caption: remove them and make the picture teach. GPT-style output often adds cute mascots: keep the object as the only character. (Carried from the earlier pass.)

## Blending notes
Carries: the object as hero, wordless teaching, chain causality, line draw and deconstruction. Blends with `braun-dieter-rams-lineage` and `muji` for plain-object reverence and with `bbc-idents` for the playful resolve. Breaks with loud, gritty looks (`mtv-80s-idents`, `stefan-sagmeister-studio`).

## Sources
- https://spoon-tamago.com/nhks-new-designy-educational-tv-show-design-ah/ — Satoh, Cornelius and Nakamura create 10 segments from observation and sound to deconstruction and vantage point; design as "observing, understanding and then acting" (fetched).
- https://arun.is/blog/design-ah/ — wordless line animation, stop motion, devices coming apart and lining up as the camera zooms out; theme song uses only the sound あ; 200th broadcast February 2021, Design Ah! neo in 2022 (fetched).
- https://www.2121designsight.jp/en/program/design_ah/ — the 21_21 DESIGN SIGHT exhibition developed from the programme; "design mind" as the theme (fetched).
- https://en.wikipedia.org/wiki/PythagoraSwitch — the 2002 programme and Pythagorean devices (fetched; page flagged as needing expansion).
- Not used: the Taku Satoh and NHK Wikipedia pages (not re-read); nhk.or.jp not fetched.
