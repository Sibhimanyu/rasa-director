---
id: "fincher-title-design-angus-wall"
name: "Fincher titles: Se7en (Kyle Cooper) and Dragon Tattoo (Blur), edited by Angus Wall"
kind: "title-design"
era: "1995 (Se7en) and 2011 (The Girl with the Dragon Tattoo)"
origin: ["Kyle Cooper (R/GA)", "Angus Wall (editor of the Se7en titles; later Rock Paper Scissors)", "Tim Miller (Blur Studio)", "David Fincher", "Wayne Coe (storyboards)", "Jenny Shainin (graphic design)"]
palette: {"roles":{"ground":"#000000","ink_scratch":"#f4f5f6","mid_grey":"#58595e","cold_tint":"#19262d","paper":"#d9d2c0"},"logic":"darkness, grime and a single rough white scratch; Se7en is tactile analogue, Dragon Tattoo is black-on-black CG with fluids","evidence":"measured from the Art of the Title title-card images (see verified.colour_images), k-means 6, 2026-10-03: Se7en card #000000 80%, #f4f5f6 8%, #232224 4%, #58595e 4%; Dragon Tattoo card #000000 91%, #19262d 9%. These are title cards, so they confirm pure-black ground and off-white scratch type only. Paper #d9d2c0 and any sepia are proposed (no sampled frame)."}
type: {"display":{"family":"hand-etched lettering on scratchboard mixed with Helvetica, smeared in film transfer (Art of the Title)","free_alternative":"Inter Tight / Rock Salt","weights":[400,700],"case":"upper","tracking":0.02,"note":"Inter Tight (wght 100-900) fills the Helvetica role; Rock Salt (single weight 400) is a stand-in for hand marks, but a drawn SVG scratch layer is better. Permanent Marker and Special Elite also exist on Google Fonts."},"body":{"family":"none","free_alternative":"n/a","weights":[]},"rules":["credits jitter, tear and flash","pairing of rough hand marks with cold neutral Helvetica","the typography is hand-etched and then degraded in transfer, not a font"]}
grid: {"columns":"free","baseline_px":8,"margins":"credits placed off-centre, often overprinted on the image","rules":["macro tabletop photography filling the frame","cuts on audio hits","no clean card layouts"]}
shape: {"radius":0,"stroke":"scratch lines","shadow":"deep, hard","imagery":"macro close-ups of notebooks, razor-cut photographs, fingers, ink; in Dragon Tattoo, black fluid, wires, keyboards, tattoos, flowers on fire"}
texture: "film grain, scratched emulsion, optical printer artifacts, jittering transfer (Se7en); glossy oil-black fluids (Dragon Tattoo)"
motion: {"language":"agitated, fragmented, dread","timing_ms":[40,160,500],"eases":{"enter":"steps(1) cuts","move":"linear jitter","exit":"cut"},"entrances":["hard cuts every 4-12 frames","type tears in with a scratch wipe","fluid engulfs the frame"],"camera":"macro locked or slow creep; handheld jitter simulated by transfer","signature":"Se7en: hands writing in a journal with scratched type; Dragon Tattoo: a nightmare montage unified by black ooze"}
space: {"2d":"native for Se7en (macro photography, scanned paper, scratch layers)","3d":"native for Dragon Tattoo (RealFlow-style fluid, V-Ray lighting); Rasan3D approximates with SDF or particle ooze and dark glossy materials"}
good_for: ["thrillers, crime, true-crime podcasts, security or dark-tech reveals", "music-driven title sequences", "intros whose menace comes from texture"]
not_for: ["friendly consumer", "wellness", "any copy with a lot of explanatory text"]
blends_with: ["maurice-binder-and-bond-titles", "punk-xerox-zine"]
clashes_with: ["swiss-international"]
cheap_tells: ["digital 'grunge' overlay packs instead of real scratched, photographed material", "shaking text via a generic wiggle expression", "every cut at the same length", "heavy teal-orange grade", "cheap CG black goo without reflections or surface tension", "title font set in a horror display face: Se7en's type is Helvetica plus real hand marks"]
verified: {"sources_fetched": 4, "non_wikipedia": 3, "colours": "partial", "colour_images": ["https://www.artofthetitle.com/assets/sm/upload/kv/vg/9u/1d/seven_t.jpg", "https://www.artofthetitle.com/assets/sm/upload/ta/ev/hw/c2/dragontattoo-titlecard.jpg"], "grid": "proposed", "timings": "proposed", "recipes": "aligned", "edited": "2026-10-03"}
sources: ["https://www.artofthetitle.com/title/se7en/", "https://www.artofthetitle.com/title/the-girl-with-the-dragon-tattoo/", "https://gizmodo.com/an-exclusive-look-at-the-making-of-dragon-tattoos-stunn-5873372", "https://en.wikipedia.org/wiki/Angus_Wall"]
---
## What it is
Two David Fincher title sequences set the grammar for dark, texture-first title design. Se7en (1995) was directed by Kyle Cooper at R/GA, with Angus Wall as editor, Wayne Coe on storyboards, Jenny Shainin on graphic design and opticals by Pacific Title (Art of the Title). It follows an unseen killer's hands making journal entries among self-developed photographs and found objects, using analogue methods (film opticals, tabletop photography, live action) despite digital editing being available, with hand-etched lettering mixed with Helvetica; Cooper cites Joel-Peter Witkin and Stan Brakhage as influences (Art of the Title). The Girl with the Dragon Tattoo (2011) titles were made by Blur Studio under creative director Tim Miller as an entirely CG sequence set to Led Zeppelin's "Immigrant Song" (Art of the Title; Gizmodo). Angus Wall, who co-founded the editorial house Rock Paper Scissors in 1992, has a Fincher collaboration beginning in 1988, edited The Social Network and The Girl with the Dragon Tattoo with Kirk Baxter (both Oscar wins), and has Emmy-winning title work for Carnivale and Game of Thrones (Wikipedia).

## The rules that make it this and not something else
- Se7en: tactile reality. Text is scratched into a blackboard, then manipulated and jittered during film transfer and reassembled in post (Art of the Title). The music is the Coil remix of Nine Inch Nails' "Closer" (Art of the Title spelled the artist Trent Reznor's track and Coil/Danny Hide remix).
- Se7en: the page says type was scratched into the emulsion and degraded in transfer; the one-frame subliminal words claim was not found in the fetched text (flagged unverified).
- Se7en: Helvetica next to hand marks. Cold neutral face plus human obsession.
- Dragon Tattoo: "black-on-black look with lots of fluids" as Lisbeth's nightmare; liquid in every vignette as "primordial dream ooze" (Art of the Title; Gizmodo).
- Dragon Tattoo: music locked first and drives the edit (Miller in Gizmodo). Shot density is extreme; a figure of 252 shots in about two and a half minutes circulates but was not found in the fetched pages (unverified).
- Dragon Tattoo: Fincher's note on the junk-heap computer head was "Less Cyberdyne, more Tandy", so cheap 1980s electronics rather than sleek sci-fi (Art of the Title).
- Fluids interact with everything, so models and animation are done first, then the fluid sim (Miller via Art of the Title). The production took about 9 to 12 weeks using 3ds Max, Softimage, RealFlow, V-Ray, After Effects, Fume and RayFire (Art of the Title).

## Tokens decoded
- Se7en: ground #050505, paper #d9d2c0, scratch white #e8e8e8; sepia-to-neutral grade; grain 12 to 18 percent; one frame at 100 percent contrast per second.
- Dragon Tattoo: pure #000 with specular highlights as the only value shift; wet black material (roughness 0.08, clearcoat 1); no colour except an ember-orange fire flash.
- Type: Inter Tight 700 plus a scratched overlay; sizes 5 to 8 percent of frame height; credits one line at a time, 4 to 8 frames on screen for the one-frame flashes and 12 frames for the readable ones.

## Motion and camera
Only the process facts come from sources; numbers are proposed unless marked.

2D (Se7en-like, HyperFrames, craft.md vocabulary):
- Macro stills or video, locked or creeping (`scale` 1 to 1.02 per second, `ease: "none"`); hard cuts 4 to 12 frames at 30 fps (0.13 to 0.4 s) in clusters of 2 to 3, then a 20-frame hold; never a regular rhythm.
- Credits tear in with a scratch wipe: a white SVG path drawn over 3 frames, text revealed through it with `clip-path`; jitter by seeded integer-frame offsets (x, y of plus or minus 3 px, `gsap.set` per frame, no easing). Cut to white for one frame on a beat.
- Texture: scanned scratchboard/emulsion scratches as an overlay (`mix-blend-mode: screen`, 40 to 60 percent), grain 12 to 18 percent changing per frame, a sepia-to-neutral grade (lift 5 percent, warm 4 percent). Sound: cuts land on the transients of the track; the Coil remix is a nail-on-chalkboard texture, so use scrape and tape-hiss hits rather than whooshes.
3D (Dragon Tattoo-like, Rasan3D, 3d.md sections 5, 12, 13, 18):
- Wet black: `k.material("plastic", { color: "#050505", roughness: 0.08 })` or `chrome` tinted near black; `k.rig("rim", { dir: [0.8, 0.5, -0.6], intensity: 1.4 })` so only edges and specular highlights show; `background: "#000000"`, `environment: "studio"` at intensity 0.3 so reflections exist; fog `{ color: "#000000", near: 5, far: 30 }`.
- Ooze: a `k.pass("ooze", { at: "scene", depth: true, blend: "min-depth", frag })` raymarcher using `#include <r3/sdf>`, `#include <r3/raymarch>` with `r3SMin(a, b, 0.35)` over 20 to 40 spheres whose centres come from `k.simulate`-driven positions (viscous drag), `r3Normal`, a fresnel-heavy shading, output through `r3Tone`. Cost: 24 march steps, check the gate.
- Camera: `lens: [[0, 90]]`, `fstop: 2.0`, slow `pos` creep through instanced keys (`k.instanceField({ geometry: box, cell: [0.5, 0.5], count: [24, 24] })` as a keyboard city), `focus` keyed from near to far. Cuts every 10 to 20 frames on transients; each vignette begins and ends with ooze covering the frame (match-cut device, per Miller: fluids in every vignette).
- Order of work (Miller via Art of the Title): models and animation first, fluid second; in Rasan3D that means fix `pose` motion, then add the pass.

## How to instruct a model to build it
"Black frame (#000), hard-lit macro images, film grain, hand-scratched white marks. Credits in Inter Tight 700 plus a scratched overlay that tears in over 3 frames, jittering with seeded integer-frame offsets of plus or minus 3 px; no easing. Cuts of 4 to 12 frames in clusters, with a 20-frame hold after every third cluster; cuts land on the audio transients. One 1-frame flash per 2 s. For the CG variant: an all-black glossy world, a viscous black fluid that wipes between vignettes, no colour but a single ember flash." Claude tends toward smooth fades, clean typography and even cut lengths: insist on variance (coefficient of variation of shot lengths above 0.5). GPT-style output often reaches for horror fonts: ban them. (Tendencies carried from the earlier pass, not re-tested.)

## Blending notes
Carries: macro texture, scratched type next to a cold Helvetica, cluster cutting on audio hits, ooze as match-cut. Blends with `maurice-binder-and-bond-titles` for hard graphic cutting, `punk-xerox-zine`, and `elastic-title-design` (Wall). Breaks with bright or soft palettes and with `swiss-international` order. Add the jitter to the credits, not the camera: Fincher's films favour controlled cameras (a design judgement, not a sourced rule).

## Sources
- https://www.artofthetitle.com/title/se7en/ — Cooper at R/GA, Wall's staccato edit, type "hand-etched into black-surface scratchboard" then smeared in transfer, hand-drawn mixed with Helvetica, Coil/Danny Hide remix of "Closer" (fetched).
- https://www.artofthetitle.com/title/the-girl-with-the-dragon-tattoo/ — Miller interview: black automobile lacquer, "Less Cyberdyne, more Tandy", RealFlow fluids, tsunami-engulfed keyboard (fetched).
- https://gizmodo.com/an-exclusive-look-at-the-making-of-dragon-tattoos-stunn-5873372 — keyboard as a city, music in place from day one drives the edit (fetched).
- https://en.wikipedia.org/wiki/Angus_Wall — career, Fincher collaboration, Oscars, Emmys (fetched in the earlier pass; retained).
- Unverified claims removed or flagged: the "252 shots in 2.5 minutes" figure and one-frame subliminal words were not found in the fetched pages; treat as folklore.
