---
id: "new-wave-weingart"
name: "New Wave / Swiss Punk typography (Weingart, Basel)"
kind: "movement"
era: "late 1960s-1980s, Basel"
origin: ["Wolfgang Weingart (1941-2021)", "Basel School of Design (Allgemeine Gewerbeschule)", "April Greiman and Dan Friedman (American students)"]
palette: {"roles": {"canvas": "#f1eee6", "ink": "#0d0d0d", "accent": "#e5322d", "second": "#1f4ea1", "halftone": "#7a7a7a"}, "logic": "mostly black and a grey halftone on off-white, with flat primaries entering as overlapping film layers", "evidence": "proposed. No measurable Weingart image could be fetched (his work is in copyright; Commons holds only portraits and sketches; the Walker Art Center collection page lists 9 holdings but serves images lazily). Hex values are estimates from memory of print reproductions, not measured."}
type: {"display": {"family": "Univers (Weingart's stated favourite), Akzidenz-Grotesk", "free_alternative": "Archivo / Hanken Grotesk / Inter Tight", "weights": [300, 500, 700], "case": "lowercase or mixed", "tracking": 0.15, "note": "Archivo has wdth (62-125) and wght (100-900) axes: tween wdth and wght together for the tracked-open and weight-contrast moves. Hanken Grotesk and Inter Tight are variable wght 100-900. Univers and Akzidenz-Grotesk are commercial."}, "body": {"family": "Univers 55 / Akzidenz-Grotesk", "free_alternative": "Archivo / Instrument Sans", "weights": [400], "case": "mixed", "tracking": 0}, "rules": ["letterspacing pushed until words become shapes", "same type in several sizes and weights in one line", "rules, arrows, brackets and dots are typography", "scale jumps of 3-10x", "text on diagonals and in tilted blocks"]}
grid: {"columns":12,"baseline_px":8,"margins":"asymmetric, then deliberately broken","rules":["start with a Swiss grid, then violate it","stepped baselines: each line shifted by one letter-width","layers overlap with transparency","type blocks on 5-15 degree angles"]}
shape: {"radius":0,"stroke":"1-8pt rules, thick bars, hairlines","shadow":"none; depth comes from film layering","imagery":"coarse halftone photographs, enlarged dot screens, collage of stencil and film negatives"}
texture: "halftone screens, moire from superimposed dot screens, lith-film edges, sharp black solids"
motion: {"language":"layered, rhythmic, accumulating","timing_ms":[120,300,700],"eases":{"enter":"power2.out","move":"power3.inOut","exit":"power2.in"},"entrances":["letters spread from tight to wide tracking","layers stack with multiply blend","rule and bar draws","stepped baseline cascade"],"camera":"locked with slow 3-5% scale drifts or diagonal slides","signature":"a word tracks open until it stops being a word, then snaps back"}
space: {"2d":"native","3d":"planes of type stacked in z with slight parallax and multiply-like transparency; orthographic or long lens 85-135mm, no glossy materials"}
good_for: ["cultural institutions, music, design-school or editorial identities", "type-led film titles that want intellectual friction"]
not_for: ["tasks needing instant legibility, children, health or finance reassurance"]
blends_with: ["swiss-international", "punk-xerox-zine", "risograph-culture", "postmodern-emigre", "swiss-punk-and-neue-grafik-digital-grotesk", "dutch-total-design"]
clashes_with: ["brutalist-web", "art-deco"]
cheap_tells: ["random rotated text with no grid underneath", "glitch filters instead of film layering", "all letters at the same weight and size (no scale argument)", "illegible by accident rather than by tension"]
verified: {"non_wikipedia":2,"colours":"proposed","colour_images":[],"grid":"proposed","timings":"proposed","sources_fetched":3,"recipes":"aligned","edited":"2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Wolfgang_Weingart", "https://www.printmag.com/daily-heller/the-daily-heller-wolfgang-weingart-typographic-disruptor-and-pioneer/", "https://www.walkerart.org/collections/artists/wolfgang-weingart"]
---
## What it is
New Wave typography (also called Swiss Punk) grew out of Wolfgang Weingart's teaching at the Basel School of Design from 1968. He said "I took 'Swiss Typography' as my starting point, but then I blew it apart." Working from a letterpress apprenticeship, he moved to layered lithographic films, superimposed dot screens and letterspacing taken to the edge of legibility. The "Weingart style" was spread by his students, notably in the US, which he considered a misreading.

## The rules that make it this and not something else
- The Swiss grid exists first; the work is a deliberate rebellion against it, not ignorance of it.
- Letterspacing treated as a graphic variable ("analysis of letterspacing to experiment with the limits of readability").
- Layering of transparent films with dot screens, producing overprints and moire.
- Rules, bars, arrows and repeated single elements function as image.
- Diagonals, stepped baselines, tilted text blocks.
- Univers (21 coordinated variants, same baseline and x-height) as the instrument.
- Technique is chosen to solve the problem: hot metal, film, and, from 1984, Macintosh.

## Tokens decoded
Canvas #f1eee6, ink #0d0d0d, grey halftone #7a7a7a, accent #e5322d and #1f4ea1 used as overprint pairs (multiply). All proposed: no Weingart image was measurable. Display: Archivo (variable `wght`/`wdth`) 300 and 800 in the same line, tracking 0.15-0.4em on the spread word. Body Instrument Sans 400. Rules 2-12 px, bars up to 3% of height. Halftone: 6-14 px dot pitch, 45 degree screen angle; a second screen at 15 or 75 degrees for moire. 12 columns, 8 px baseline, then 6-10 degree rotations on selected blocks.

## Motion and camera
2D: one word per beat; tracking animates 0.02em to 0.6em over 700 ms `power3.inOut` then holds. Layers enter at 120 ms offsets with `mix-blend-mode: multiply`. Rules draw with scaleX 0 to 1 in 300 ms `power2.out`, transform-origin left. Stepped baseline: letters offset by `i * 8px` Y with 40 ms stagger. Halftone pitch scales 1.0 to 1.4 over a hold. Camera mostly locked; allowed 3-5% push over 2 s `power1.inOut` or one 8 degree rotation.
Finish: tracking and layer steps are discrete in this look; if any layer is stepped (cuts, `steps(n)`), set `data-finish-blur="off"` on that scene's frame root.
3D (Rasan3D; real API, parameters proposed): type planes stacked in z with multiplied transparency. Each layer a `k.text({text:"WORD",font:"Archivo",size:1.6,weight:800,color:"#0d0d0d",background:null,letterSpacing:0.2})` texture on a `PlaneGeometry` with `new k.THREE.MeshBasicMaterial({map:tex,transparent:true,blending:k.THREE.MultiplyBlending,premultipliedAlpha:true,depthWrite:false})` at z = 0, -0.4, -0.8; the second accent layer in `#e5322d` / `#1f4ea1`. `environment:"none"`, `toneMapping:"none"`, `background:"#f1eee6"`. Halftone as `k.pass("halftone",{at:"post",uniforms:{uPaper:"#f1eee6",uInk:"#0d0d0d"},frag:...})` with `#include <r3/post>`: `col = r3Halftone(r3Src(vUv).rgb, gl_FragCoord.xy, 10.0, uInk, uPaper)` (cell 10px, angle 30 degrees is built in) and a second pass offset for a moire at another angle through `r3HalftoneFW(gl_FragCoord.xy, tone, 10.0, 0.26)`. Camera: `lens:[[0,120]]` (85-135mm band), `pos` drifts 3-5% in 2s `power1.inOut` plus one `roll` of 8 degrees: `roll:[[0,0],[2,8,"power3.inOut"]]`; layers parallax by a small `pos.x` slide. No DoF, no bloom.

## How to instruct a model to build it
"Weingart New Wave. Off-white #f1eee6, black #0d0d0d, accents #e5322d and #1f4ea1 as multiplied layers only. Archivo, light and extra-bold together. First lay a 12-column, 8px grid, then break it: rotate selected blocks 6-10 degrees, step baselines, letterspace one key word from 0.02em to 0.5em. Overlay a coarse 10px 45-degree halftone at 40% opacity with mix-blend-mode multiply. Rules and arrows are part of the type. Motion: GSAP, power3.inOut 700ms tracking opens, layers stagger 120ms, hold 600ms, no bounce." Models usually rotate everything: tell them to rotate at most one in three blocks, and to keep one element perfectly orthodox as the foil.

## Blending notes
Carries: letterspacing as motion, multiply layering, halftone, a rigorous grid to break. Pairs with riso (shared overprint logic) and zine energy. Breaks when mixed with soft gradients or friendly rounded fonts.
Also clashes with (not library entries): corporate flat UI.

## Cheap tells
- Random rotated text with no grid underneath (the rebellion needs the orthodoxy it breaks).
- Glitch or RGB-split filters in place of film layering and dot screens.
- All letters at the same size and weight (no scale argument); illegibility by accident, not tension.
- A digital halftone at 100% opacity instead of a multiplied one with moire.

## Sources
- https://en.wikipedia.org/wiki/Wolfgang_Weingart — biography, Basel 1968, "blew it apart", AIGA Medal 2013 (fetched)
- https://www.printmag.com/daily-heller/the-daily-heller-wolfgang-weingart-typographic-disruptor-and-pioneer/ — Heller interview and Design Quarterly 130 (1985): 16 years teaching 1968-85, "classical Swiss dogma" to "playful" to rejecting it; Hofmann and Ruder visit 1963 (fetched)
- https://www.walkerart.org/collections/artists/wolfgang-weingart — Walker holds 9 works (Kunstkredit 1977-81, Das Schweizer Plakat 1983-84, Schreibkunst 1981, Didacta Eurodidac 1981): the poster titles to look up (fetched; no images served)
- Blocked: neugraphic.com Weingart text (503 through the proxy this session; claims from it, such as the Univers 21 variants and film layering, are therefore retained from the earlier pass but not re-verified), AIGA medalist page (403), Eye article (404). Proposed (not sourced): hexes, dot pitch, ms timings, 3D parameters.
