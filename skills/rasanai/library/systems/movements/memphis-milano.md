---
id: "memphis-milano"
name: "Memphis (Memphis Milano)"
kind: "movement"
era: "1980-1988, Milan; pop-culture peak mid-1980s to mid-1990s"
origin: ["Ettore Sottsass", "Michele De Lucchi", "Nathalie Du Pasquier", "Peter Shire", "Martine Bedin", "Michael Graves"]
palette: {"roles": {"canvas": "#e0d9cd", "ink": "#22160b", "red": "#e42a25", "sage": "#8ba693", "wood": "#ab7f58", "pink": "#f26aa8", "teal": "#14b8a6", "yellow": "#ffd400", "blue": "#2b5fd9"}, "logic": "clashing saturated colours, terrazzo speckle, black-and-white pattern as ground; pick four hues plus black. Memphis hues in period photographs are muted by film and room light, so screen versions run more saturated", "evidence": "partial. From a room photograph of a Memphis-Milano collection (https://commons.wikimedia.org/wiki/Special:FilePath/Memphis-Milano_Design_Collection.jpg?width=400), k-means 7, 2026-10-03: red #e42a25 6%, sage green #8ba693 10%, wood #ab7f58 18%, near-black #22160b 12%, plaster #e0d9cd 22%. The Carlton bookcase photo (Commons, 1981) measured mostly ground and wood and added nothing usable. Pink #f26aa8, teal #14b8a6, yellow #ffd400, blue #2b5fd9 are proposed screen hues, not measured."}
type: {"display": {"family": "no single house type; chunky geometric and playful sans", "free_alternative": "Rubik / Bungee / Unbounded / Righteous", "weights": [700, 900], "case": "uppercase or mixed", "tracking": 0, "note": "Rubik (wght 300-900) and Unbounded (wght 200-900) are variable: tween wght 400 to 900 on the pop. Bungee and Righteous are single-weight 400 display faces (OFL)."}, "body": {"family": "plain sans", "free_alternative": "DM Sans", "weights": [400], "tracking": 0}, "rules": ["type is another shape", "mix alignments", "do not use refinement as the goal"]}
grid: {"columns":"none","baseline_px":null,"margins":"collage","rules":["asymmetry","shapes overlap","pattern fields next to plain fields","objects float"]}
shape: {"radius":"circles, arcs, triangles, squiggles, zigzags","stroke":"2-6px black or none","shadow":"none or hard offset","imagery":"geometric confetti, squiggles, terrazzo, stripes, grids, plastic laminate surfaces"}
texture: "plastic laminate, terrazzo speckle, black-and-white print patterns (Bacterio by Sottsass is cited)"
motion: {"language":"bouncy, collided, toy-like","timing_ms":[200,400,700],"eases":{"enter":"back.out(1.7)","move":"elastic.out(1,0.5)","exit":"power2.in"},"entrances":["shapes pop in out of order","pattern slides under a shape","squiggle draws on"],"camera":"slow drifts, tilts; no locked symmetry","signature":"stagger from random order, shapes rotate and settle on a tilt"}
space: {"2d":"native","3d":"good: furniture-like primitives, laminate and terrazzo textures, bright matte, hard shadows"}
good_for: ["youth brands, music, fashion, creative tools", "playful consumer launches", "retro-80s tone"]
not_for: ["finance, security, enterprise reliability", "serious documentary"]
blends_with: ["push-pin-studios", "postmodern-emigre", "gummy-inflatable-and-plastic-toy-3d"]
clashes_with: ["swiss-international", "de-stijl", "bauhaus", "constructivism"]
cheap_tells: ["random confetti triangles on pastel as a whole idea", "neon gradients (that is synthwave)", "no black pattern or terrazzo texture", "all pastel, no clash", "squiggles evenly spread like wallpaper"]
verified: {"non_wikipedia":2,"colours":"partial","colour_images":["https://commons.wikimedia.org/wiki/Special:FilePath/Memphis-Milano_Design_Collection.jpg"],"grid":"n/a","timings":"proposed","sources_fetched":5,"recipes":"aligned","edited":"2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Memphis_Group", "https://en.wikipedia.org/wiki/Ettore_Sottsass", "https://en.wikipedia.org/wiki/Nathalie_Du_Pasquier", "https://metropolismag.com/projects/qa-nathalie-dupasquier-queen-memphis/", "https://commons.wikimedia.org/wiki/File:Memphis-Milano_Design_Collection.jpg"]
---
## What it is
An Italian design collective founded by Ettore Sottsass in December 1980 that operated until 1987-88, making postmodern furniture and objects in bold colours, asymmetric shapes and unconventional materials such as plastic laminate and terrazzo. The name comes from a Bob Dylan song playing at the first meeting. It rejected the earth-toned minimalism of the 1970s; Sottsass called his approach "radical, funny and outrageous". Memphis patterns reached Miami Vice and Nickelodeon sets.

## The rules that make it this and not something else
- Clashing colour, not harmonious colour.
- Laminate and terrazzo textures plus black-and-white patterns (Sottsass's Bacterio).
- Geometry used playfully: forms stacked and tilted (Carlton bookcase, 1981).
- "Form follows fun" (Du Pasquier summary in Wikipedia).
- Pattern from non-Western sources (Du Pasquier cites African influences).
- Asymmetric, collage-like composition.

## Tokens decoded
- Measured (room photo of a Memphis-Milano collection): laminate red #e42a25, sage green #8ba693, wood #ab7f58, near-black #22160b on plaster #e0d9cd. Proposed screen hues for the clash: pink #f26aa8, teal #14b8a6, yellow #ffd400, blue #2b5fd9. Pick four hues, always including black; cream or plaster ground.
- Patterns: 8px black zigzag, 12px dot grid, terrazzo flecks 3-12px (all proposed sizes; Bacterio is the cited black-and-white reference).
- Display: Rubik 900 (variable `wght`) or Bungee; body DM Sans 400. All OFL on Google Fonts.
- Shapes: circles 120-360px, arcs, triangles, squiggle strokes 6px.

## Motion and camera
2D (HyperFrames; all timings proposed): shapes pop in with `back.out(1.7)` 400ms in random stagger (`stagger:{each:0.06,from:"random"}`); squiggle draws on via stroke-dashoffset 500ms `power2.out`; pattern fills slide 350ms `power3.out`; elements settle at 3-8 degree tilts; `elastic.out(1,0.5)` 700ms for the hero shape; holds 700ms; shapes rearrange on the cut. Camera drifts and rolls 2-4 degrees. Bounce is the toy-like register; keep one hero shape elastic and the rest `back.out`, so it reads as composed, not confetti.
3D (Rasan3D; real API, parameters proposed): furniture-like primitives as Carlton-style stacks, `BoxGeometry`, `CylinderGeometry`, `ConeGeometry`, `TorusGeometry` in `k.material("matte",{color})` or `k.material("plastic",{color,roughness:0.5})` (laminate). A terrazzo floor: a plane with a `CanvasTexture` of 3-12px flecks (raw three.js via `k.THREE`) under `k.ground({y:0,color:"#e0d9cd"})`, or a floor of floating primitives with `k.instanceField({geometry:new k.THREE.TorusGeometry(0.4,0.12,12,32),material:k.material("plastic",{color:"#e42a25"}),cell:[2.2,2.2],count:[9,9],plane:"xz",y:0.3,seed:7,place:(cx,cz,rng,o)=>{o.yaw=rng()*6.28;o.scale=0.6+rng()*0.8;o.color=["#e42a25","#ffd400","#2b5fd9","#14b8a6"][Math.floor(rng()*4)]}})`. Rig `k.rig("top-soft",{key:"#fff4e6",fill:"#dfe8ff",intensity:1.1,shadows:true,shadowSoftness:1})` for a hard-edged shadow; `environment:"soft"`; camera `lens:[[0,35]]`, orbit with `Rasan3D.orbit({center:[0,0.8,0],radius:7,height:3,from:20,to:60,t0:0,t1:5,ease:"power1.inOut"})` (about 8 degrees per second; hold at 6 for calm), `roll` 3 degrees.

## How to instruct a model to build it
Paste: "Memphis Milano 1981 (Sottsass, Du Pasquier). Plaster #e0d9cd ground; four clashing colours from red #e42a25, pink #f26aa8, teal #14b8a6, yellow #ffd400, blue #2b5fd9 plus black. Mix solid shapes (circles, arcs, triangles) with a black zigzag, a dot pattern and one terrazzo field. Asymmetric collage, shapes overlapping and tilted 3-8 degrees. Type in Rubik 900, treated as a shape. Motion: shapes pop in random order with back.out(1.7) in 400ms, 60ms stagger; hero shape elastic.out(1,0.5). No gradients, no glow." Models default to pastel confetti and neon gradients; demand black patterns, a terrazzo field and a real clash.

## Blending notes
Carries: clash colour, pattern textures, tilted geometry. Pairs with Push Pin (illustration) and Emigre-style type experiments. Breaks every grid-based system, so use only as an accent in a Swiss or Bauhaus film.

## Sources
- https://en.wikipedia.org/wiki/Memphis_Group — dates, founding, materials, pop-culture reach, members (fetched)
- https://en.wikipedia.org/wiki/Ettore_Sottsass — Carlton 1981, Valentine 1969, Bacterio pattern, philosophy (fetched)
- https://en.wikipedia.org/wiki/Nathalie_Du_Pasquier — "form follows fun", pattern work, African influences (fetched)
- https://metropolismag.com/projects/qa-nathalie-dupasquier-queen-memphis/ — Du Pasquier as youngest member, her pattern drawings 1981-1987 (fetched)
- https://commons.wikimedia.org/wiki/File:Memphis-Milano_Design_Collection.jpg — photograph used for colour measurement (fetched)
- Blocked: Vitra magazine (403) and Design Museum (500). Proposed (not sourced): screen hues pink/teal/yellow/blue, pattern sizes, ms timings, 3D parameters.
