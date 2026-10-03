---
id: "transit-map-beck"
name: "Transit diagram (Beck's Tube map)"
kind: "vernacular"
domain: "vernacular"
era: "1931–1933 onward, London; copied by almost every metro"
origin: ["Harry Beck", "Edward Johnston (typeface for the Underground)", "Frank Pick (client)"]
tags: ["diagram", "map", "routes", "network", "lines", "schematic"]
palette: {"roles": {"canvas": "#f7f3f1", "ink": "#1c1c1c", "line_a": "#e32017", "line_b": "#0019a8", "line_c": "#00782a", "line_d": "#ffd300", "river": "#9bd5f0", "scan_blue": "#1f2078"}, "logic": "one colour per route on a pale ground; the river is the only geography left. Route hexes are proposed (modern TfL-like)", "evidence": "partial. Paper #f7f3f1 (47%) and a deep blue #1f2078 (5%) measured from a 1024px scan of the 1933 Beck map (https://commons.wikimedia.org/wiki/Special:FilePath/Beckmap1.jpg?width=500), k-means 8, 2026-10-03; the other route colours are too thin at this resolution to separate (clusters merge into greys and mauves), so line hexes remain proposed (modern TfL-like) and not claimed as Beck's originals."}
type: {"display": {"family": "Johnston / New Johnston", "free_alternative": "Jost / Questrial / Lato", "weights": [400, 500], "case": "mixed or small caps for stations", "tracking": 0.02, "note": "Jost is variable wght 100-900 and the closest free geometric match to Johnston; Questrial is single weight 400; Lato (100/300/400/700/900) is humanist and not Johnston, a fallback only. Johnston itself and New Johnston are commercial."}, "body": {"family": "same", "free_alternative": "Jost", "weights": [400]}, "rules": ["station names horizontal only, or on the same 45-degree axis as the line", "names never cross a line", "interchanges carry a larger marker"]}
grid: {"columns":"implicit rectilinear grid","baseline_px":24,"margins":"map fills the sheet, title top-left","rules":["lines run only horizontal, vertical or 45 degrees","stations equally spaced along a line regardless of true distance","tight radius bends joining straight runs (electrical circuit diagram)","central area enlarged, outskirts compressed"]}
shape: {"radius":"bend radius about 2x the line width","stroke":"line width 6 to 8 px at 1080p; stations are ticks perpendicular to the line","shadow":"none","imagery":"none; only the river as geography"}
texture: "none; optionally a printed-paper ground at 3 percent noise"
motion: {"language":"drawn, logical, sequential","timing_ms":[250,500,900],"eases":{"enter":"power2.inOut","move":"power2.inOut","exit":"power2.in"},"entrances":["lines draw station to station with stagger 60ms","interchange rings pop in as the lines cross","labels fade up after their line completes"],"camera":"top-down locked; pan and zoom into a region by scaling the whole diagram","signature":"a single route lights while every other line drops to 20 percent opacity"}
space: {"2d":"native","3d":"lines as flat extruded ribbons on a plane under a straight-down camera; see Rasan3D reading"}
good_for: ["networks, pipelines, workflows, dependencies, org charts", "'how X connects to Y' explainers", "journey and process films"]
not_for: ["emotional portraiture", "geographic truth where distance matters"]
blends_with: ["airport-wayfinding", "swiss-international", "blueprint-technical-drawing", "international-typographic-corporate-identity"]
clashes_with: ["frutiger-aero", "vhs-analog"]
cheap_tells: ["curvy diagonals at arbitrary angles", "stations unevenly spaced", "labels at random rotations", "a gradient or glow on the lines", "no interchange hierarchy, so every dot looks the same"]
verified: {"non_wikipedia":3,"colours":"partial","colour_images":["https://commons.wikimedia.org/wiki/Special:FilePath/Beckmap1.jpg"],"grid":"partial","timings":"proposed","sources_fetched":5,"recipes":"aligned","edited":"2026-10-03"}
sources: ["https://www.londonmuseum.org.uk/collections/london-stories/harry-beck-revolutionised-tube-map/", "https://en.wikipedia.org/wiki/Harry_Beck", "https://www.openculture.com/2018/04/the-genius-of-harry-becks-1933-london-tube-map.html", "https://en.wikipedia.org/wiki/Johnston_(typeface)", "https://commons.wikimedia.org/wiki/File:Beckmap1.jpg"]
---
## What it is
Beck, a junior draughtsman who joined London Underground in 1925, completed his redesigned diagram in 1931 and it was first trialled in 1932 (500 copies) and published in January 1933 (700,000 copies, reprinted within a month). He dropped geographic accuracy for the logic of an electrical circuit diagram: horizontal, vertical and 45-degree lines, equally spaced stations, colour-coded routes, and the Thames as the only surviving geography (London Museum, Wikipedia, Open Culture).

## The rules that make it this and not something else
- Three directions only: 0, 90, 45 degrees. Corners are tight curves.
- Station spacing is uniform on a line. Scale is discarded; the centre is enlarged, the edges compressed.
- Each route has one colour. Interchanges get a distinct marker, which carries the idea of "where to change".
- Remove everything that is not the network, except one orientation anchor (the river).
- Typeface: Edward Johnston's 1913 sans for the Underground, with capitals from Roman square capitals, a near-circular O, and diamond tittles on i and j (Wikipedia). New Johnston (1979) and Johnston 100 (2016) are its modern revivals; ITC Johnston and P22 Underground are commercial.
- After Beck, an angular redesign (1960) was unpopular and a 1964 realignment restored his principles: the 45-degree discipline is the identity, not the colours.

## Tokens decoded
- ground `#f7f3f1` (measured from the 1933 map scan; `#f6f3ea` is a warmer proposed alternative), ink `#1c1c1c`, river `#9bd5f0`, route colours from a fixed set of five to eight saturated flats (proposed, not sourced; the scan showed one deep blue `#1f2078`).
- Line width 7 px, station tick 14 px long, interchange ring r = 10 px with a 3 px ink stroke and white fill.
- Type: Jost 500 at 22 px for station names (Jost is Futura-like and OFL; Johnston's exact shapes are not available free). Names sit right of vertical lines, above horizontal lines, and along 45 degrees on diagonals.
- Grid: 40 px module, all vertices on grid points.

## Motion and camera
2D: draw each line with `stroke-dasharray` / `drawSVG`-equivalent over 900 ms `power2.inOut`, stations popping every 60 ms along the stroke (`back.out(2)` scale 0 to 1 over 250 ms, only for dots), labels `autoAlpha` after their line finishes. To highlight a route: set all others to opacity 0.2 over 350 ms, then run a 12 px-wide pulse along the chosen one. Zoom by scaling the whole SVG group `scale: 2.4` over 900 ms `power3.inOut` toward a centre of interest.
Rasan3D reading (real API; values proposed): lines as extruded ribbons on a plane. Build each route with `k.svg(svgText, { width: 16, depth: 0.04, bevel: 0.004, material })` (one SVG per route so each can be keyed in `pose`: `route.scale.z = k.prog(t, a, b, "power2.inOut")` or move `position.y` for the raised route); material `k.material('matte', { color })`; ground `k.ground({ y: -0.05, color: "#f7f3f1" })`; `k.rig('top-soft',{key:'#ffffff',fill:'#f2f6ff',intensity:1,shadows:true,shadowSoftness:6})`; `environment:'soft'`; camera `pos:[[0,[0,9,0.001]],[3,[1.6,6.8,0.001],"power3.inOut"]]` (straight down; the 0.001 avoids a degenerate up-vector), `target:[[0,[0,0,0]],[3,[1.6,0,0]]]`, `lens:[[0,85]]`, `roll:0`; a 25 percent push toward the focal interchange, then a hold of 600 ms. Station labels as DOM via `k.pinDom(el,{at:[x,0.02,z],width:0.9,px:[220,44],face:'camera'})` so type stays crisp. Optionally raise one route to y = 0.15 (a stepped lift looks like an Underground sign; `power2.inOut` looks like a menu) and put the others at 0 to make "the one that matters" physical. No tilt-shifted glossy miniature look unless intended; that is a different entry.

## How to instruct a model to build it
> Draw a transit diagram in the style of Harry Beck. SVG on a 40 px grid; lines only at 0, 45, 90 degrees joined with tight 16 px radius curves; stations equally spaced along every line; interchanges as 10 px rings. Five flat route colours on `#f6f3ea`, 7 px lines, no gradients, no shadows. Names in Jost 500 22 px, horizontal or on the line's 45-degree axis, never crossing a line. Animate: lines draw in 900 ms `power2.inOut`, stations pop every 60 ms, labels fade after. Highlight by dimming others to 0.2.
Models routinely let diagonals drift off 45 degrees and space stations by content width; demand a validation pass that checks every segment angle.

## Blending notes
The 45-degree logic transfers to any diagram, product architecture or data flow. It breaks under textures and organic shapes. It pairs well with `airport-wayfinding` and `blueprint-technical-drawing` (swap the paper for blue ground).
Unverified: exact modern TfL colour hexes and Beck's exact original line colours.

## Sources
- https://www.londonmuseum.org.uk/collections/london-stories/harry-beck-revolutionised-tube-map/ — 1925, 1931, 1932, 1933 dates; 0/90/45 rule; later redesigns of 1960 and 1964 (fetched)
- https://en.wikipedia.org/wiki/Harry_Beck — 500-copy trial, 700,000 first run, equal spacing, grid with relaxed rhythm (fetched)
- https://www.openculture.com/2018/04/the-genius-of-harry-becks-1933-london-tube-map.html — Thames the only geography, influence on global subway maps (fetched)
- https://en.wikipedia.org/wiki/Johnston_(typeface) — Johnston 1913, near-perfect circle O, diamond tittles, revivals (fetched)
- https://commons.wikimedia.org/wiki/File:Beckmap1.jpg — 1933 map scan, colour measurement (fetched via FilePath)
- Proposed (not sourced): route hexes, line width, station tick sizes, ms timings, 3D parameters.
