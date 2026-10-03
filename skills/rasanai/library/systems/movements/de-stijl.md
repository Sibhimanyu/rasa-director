---
id: "de-stijl"
name: "De Stijl (Neoplasticism)"
kind: "movement"
era: "1917-1931, the Netherlands"
origin: ["Theo van Doesburg", "Piet Mondrian", "Gerrit Rietveld", "J.J.P. Oud", "Bart van der Leck"]
palette: {"roles": {"canvas": "#e7e7e6", "ink": "#2a2d2e", "red": "#da2a21", "yellow": "#ddba53", "blue": "#123b58", "grey": "#a2a5a1", "doesburg_blue": "#28356c"}, "logic": "three primaries plus black, white, grey; colour fields bounded by black lines; most cells stay white. Photographed canvases carry age and lighting, so measured values are muted next to a screen primary", "evidence": "measured from Commons photographs, k-means 7, 2026-10-03. Red #da2a21 (49%), white #e7e7e6 (25%), blue #123b58 (10%) from Mondrian Composition II in Red, Blue and Yellow 1930 (https://commons.wikimedia.org/wiki/Special:FilePath/Piet_Mondriaan,_1930_-_Mondrian_Composition_II_in_Red,_Blue,_and_Yellow.jpg?width=400). Yellow #ddba53 (11%), black #2a2d2e (20%), grey #a2a5a1 (7%) from Composition en rouge, jaune, bleu et noir 1921 (Commons). Doesburg blue #28356c from Contra-Composition XVI (Commons). A brighter screen yellow #f6c61a and a pure black #111111 are proposed variants."}
type: {"display": {"family": "van Doesburg's constructed 1919 alphabet (digitised as Architype Van Doesburg); blocky geometric caps", "free_alternative": "Rubik Mono One / Syne / Space Grotesk", "weights": [700], "case": "uppercase", "tracking": 0.04, "note": "Rubik Mono One is single weight 400; Syne and Space Grotesk are variable wght (Syne 400-800, Space Grotesk 300-700). None has the all-rectangle construction: for a hero word draw the letters from rectangles in SVG. Architype Van Doesburg is a commercial digitisation (not on Google Fonts)."}, "body": {"family": "plain sans", "free_alternative": "Work Sans", "weights": [400], "tracking": 0}, "rules": ["letters built from squares and rectangles", "only horizontal and vertical strokes", "no curves in display letters"]}
grid: {"columns":"asymmetric rectangular division","baseline_px":null,"margins":"none; fields touch the frame edge","rules":["horizontal and vertical lines only (Neoplasticism)","asymmetric balance, never symmetry","white and colour fields of unequal size","lines run off the edge"]}
shape: {"radius":0,"stroke":"black lines 8-16px (Mondrian from 1920-21 used thick black lines)","shadow":"none","imagery":"none; pure abstraction"}
texture: "flat colour; painted surface optional"
motion: {"language":"orthogonal, balancing, modular","timing_ms":[250,450,700],"eases":{"enter":"power3.out","move":"power2.inOut","exit":"power2.in"},"entrances":["line draws across the frame","colour block wipes in from one edge","rectangle splits into two"],"camera":"locked frontal; no rotation","signature":"the composition re-divides: a rectangle splits, colour shifts to a new cell, balance restored"}
space: {"2d":"native","3d":"strong: Rietveld Red Blue Chair lineage, planes as independent layers, orthographic; matte primaries, black frames"}
good_for: ["layout-driven explainers", "architecture, furniture, UI-structure stories", "modular systems, dashboards of blocks"]
not_for: ["organic, emotional storytelling", "photographic work", "warm consumer"]
blends_with: ["swiss-international", "bauhaus", "constructivism", "dutch-total-design"]
clashes_with: ["postmodern-emigre", "push-pin-studios"]
cheap_tells: ["random coloured rectangles with rounded corners", "mix of curves with Mondrian lines", "too many colour fields (Mondrian leaves most fields white)", "symmetrical split", "thin grey lines", "using it as wallpaper rather than a composition"]
verified: {"non_wikipedia":2,"colours":"measured","colour_images":["https://commons.wikimedia.org/wiki/Special:FilePath/Piet_Mondriaan,_1930_-_Mondrian_Composition_II_in_Red,_Blue,_and_Yellow.jpg","https://commons.wikimedia.org/wiki/Special:FilePath/Piet_Mondriaan,_1921_-_Composition_en_rouge,_jaune,_bleu_et_noir.jpg","https://commons.wikimedia.org/wiki/Special:FilePath/Theo_van_Doesburg_Contra-Composition_XVI.jpg"],"grid":"proposed","timings":"proposed","sources_fetched":5,"recipes":"aligned","edited":"2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/De_Stijl", "https://en.wikipedia.org/wiki/Piet_Mondrian", "https://en.wikipedia.org/wiki/Theo_van_Doesburg", "https://www.tate.org.uk/art/art-terms/d/de-stijl", "https://commons.wikimedia.org/wiki/File:Piet_Mondriaan,_1930_-_Mondrian_Composition_II_in_Red,_Blue,_and_Yellow.jpg"]
---
## What it is
A Dutch movement of 1917-1931, originally called Nieuwe Beelding (New Vision), that sought a universal visual language through the straight line and the clearly defined primary colour (Mondrian's phrasing). Its vocabulary is horizontal and vertical lines, rectangles, red, yellow and blue plus black, white and grey, and asymmetric balance rather than symmetry. Around 1924 van Doesburg introduced Elementarism with diagonals; Mondrian left over it.

## The rules that make it this and not something else
- Only horizontals and verticals in the strict phase; the diagonal is the Elementarist exception and breaks Mondrian's rule.
- Primary colours plus black, white, grey only.
- Balance by opposition, not symmetry.
- By 1920-21 Mondrian's lines are thick and black, forms fewer and larger, many left white.
- Three-dimensional elements placed as independent layers (Wikipedia).
- Letters can be constructed from rectangles (van Doesburg's 1919 alphabet).

## Tokens decoded
- Measured from Mondrian (1921, 1930) and van Doesburg: canvas #e7e7e6, black #2a2d2e, red #da2a21 (reaches 49% of Composition II: one large red plane is a real Mondrian move), yellow #ddba53, blue #123b58 (a dark blue; van Doesburg's is #28356c), grey #a2a5a1. For a screen the proposed brighter set is red #d2231e, yellow #f6c61a, blue #1c3f94, ground #f5f3ec, black #111111: say which set the film uses and keep it. Use each colour once or twice per frame; most cells stay white.
- Lines 12px at 1080p (Tate and Wikipedia say thick black lines from 1920-21; the pixel number is proposed). Cell sizes on a 1:2:3 or golden relation (working choice, unsourced).
- Type: Space Grotesk 700 uppercase in a white cell for headlines (variable `wght`), or SVG letters from rectangles for one hero word, as in van Doesburg's 1919 alphabet. Never mix with a curved display face.

## Motion and camera
2D (HyperFrames; timings proposed): lines draw across the frame, `gsap.from(line,{scaleX:0,transformOrigin:"0 50%",duration:.45,ease:"power3.out"})` (scaleY for verticals); cells fill with a `clip-path: inset()` wipe 350ms `power2.out` at 80ms stagger; at a transition one cell splits (scale 1 to 0.5, new neighbour appears) 500ms `power2.inOut`. Colour swaps are cuts on the beat. Holds 900-1400ms. Never rotate, never overshoot. Camera: locked frontal; at most a 1.00 to 1.04 push, `power1.inOut`, on an axis line. If a stepped cell-flip is used (cuts, no tween), set `data-finish-blur="off"` on that scene's frame root.

3D (Rasan3D; real API, parameters proposed): the Red Blue Chair lineage as independent planes. Slabs from `BoxGeometry` (depth 0.08) in `k.material("matte",{color:"#da2a21"})`, same for yellow and blue; thin black bars `BoxGeometry(0.06,…)` in `k.material("matte",{color:"#2a2d2e"})` overlapping like Rietveld's frame (sticks extend past joints, never mitred). `k.rig("top-soft",{key:"#ffffff",fill:"#e8eefc",intensity:1,shadows:true,shadowSoftness:2})`, `environment:"soft"`, `toneMapping:"neutral"` so primaries stay on-brand. Camera: `lens:[[0,85]]` (long, near-orthographic), `pos` keyed along one axis only (`[[0,[0,1,14]],[4,[6,1,14],"power2.inOut"]]`), `target` following on the same axis, `roll:0`. Planes slide on single axes only via `k.at(t,keys)` in `pose`. No DoF; `post` untouched.

## How to instruct a model to build it
Paste: "De Stijl composition (Mondrian 1921-30, van Doesburg). Ground #e7e7e6 (or #f5f3ec), 12px black #2a2d2e horizontal and vertical lines that run off the frame; asymmetric, no symmetric splits; one large cell may be flat red #da2a21, plus at most one yellow #ddba53 and one blue #123b58 or none; every other cell white. No curves, no rotation, no gradients, no shadows, radius 0, no diagonals (diagonals are van Doesburg's 1924 Elementarism, which Mondrian rejected). Lines draw across in 450ms power3.out, cells fill with a clip wipe in 350ms power2.out, cells re-divide on the beat. Type in Space Grotesk 700 uppercase inside white cells." GPT-family models tend to round corners and soften lines, and to fill every cell with a colour; repeat the radius 0 ban and the 'most cells white' budget.

## Cheap tells
- Random coloured rectangles on a regular grid (wallpaper); every cell coloured.
- Rounded corners, thin grey lines, drop shadows; a curve anywhere in display type.
- A symmetric split or a centred composition.
- Mondrian lines used as a frame around a photo with no composition behind them.

## Blending notes
Carries: orthogonal division, three-primary budget. A film using it as structure under Swiss type is the strongest blend. Using diagonals moves it to Elementarism and toward constructivism. Breaks when photography or illustration is added without cells to hold it.

## Sources
- https://en.wikipedia.org/wiki/De_Stijl — dates, figures, palette, rules, Elementarism split (fetched)
- https://en.wikipedia.org/wiki/Piet_Mondrian — Neoplasticism vocabulary, thick black lines by 1920-21 (fetched)
- https://en.wikipedia.org/wiki/Theo_van_Doesburg — 1919 constructed alphabet, diagonal split of 1924 (fetched)
- https://www.tate.org.uk/art/art-terms/d/de-stijl — strict horizontals and verticals, Mondrian withdrew in 1923 over diagonals, Rietveld and Oud in the circle (fetched)
- https://commons.wikimedia.org/wiki/File:Piet_Mondriaan,_1930_-_Mondrian_Composition_II_in_Red,_Blue,_and_Yellow.jpg — image used for colour measurement (fetched via FilePath)
- Blocked: MoMA terms page (403). Proposed (not sourced): 1:2:3 proportion, 12px line, ms timings, 3D parameters.
