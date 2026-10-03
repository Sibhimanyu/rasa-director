---
id: "risograph-culture"
name: "Risograph culture"
kind: "movement"
era: "machine 1980 (Japan); art-zine revival 2010s"
origin: ["Riso Kagaku Corporation", "independent zine, comics and poster makers", "print studios and university labs"]
palette: {"roles": {"fluo_pink": "#ff48b0", "federal_blue": "#0078bf", "sun_yellow": "#ffe800", "teal": "#3d8e84", "orange": "#ff6e40", "green": "#a4dc30", "hunter_green": "#407060", "black": "#000000", "paper": "#f4efe3"}, "logic": "2-3 translucent spot inks on uncoated cream paper; overlaps make a third colour (multiply). Ink hexes are a published ink library, not measured from a photograph; fluorescents do not fully reproduce on screen", "evidence": "ink hexes read from the STUDIO-ITY ink library table (https://studio-ity.com/riso/colors/), 2026-10-03 (e.g. Fluorescent Pink #FF48B0, Federal Blue #0078BF, Sun Yellow #FFE800, Hunter Green #407060); the page itself warns fluorescents photograph and display poorly. Paper #f4efe3 is proposed. A printed Riso photograph on Commons (Garden Party, close) was measured but its colour is dominated by lighting (#9b4557, #6d5266 ...) and was not used."}
type: {"display": {"family": "chunky grotesque or hand-drawn lettering", "free_alternative": "Bricolage Grotesque / Space Grotesk / Rubik / DM Sans", "weights": [500, 800], "case": "mixed", "tracking": -0.02, "note": "Bricolage Grotesque is variable (opsz, wdth, wght 200-800): tween wght 500 to 800 and wdth for a print-press squeeze; Rubik wght 300-900; Space Grotesk 300-700."}, "body": {"family": "mono or neutral grotesque", "free_alternative": "DM Mono / Space Mono / Instrument Sans", "weights": [400], "case": "mixed", "tracking": 0}, "rules": ["type may be printed in a single ink layer", "big blocky shapes, fine text only in black", "type overprints on image"]}
grid: {"columns":6,"baseline_px":8,"margins":"generous, 5-6% (printer unprintable edges)","rules":["loose, zine-like","elements placed on one ink layer each","slight deliberate offsets between layers"]}
shape: {"radius":"0-8","stroke":"uneven ink-edge, 2-4px","shadow":"none; overprint replaces shadow","imagery":"flat illustration, halftone or grain-dithered photographs, geometric blobs"}
texture: "grain, halftone dots or diffusion dither, visible paper fibre, ink density variation, specks"
motion: {"language":"stepped, layered, slightly off-register","timing_ms":[100,250,600],"eases":{"enter":"steps(3)","move":"power2.out","exit":"power1.in"},"entrances":["layers slide into register one ink at a time","grain flickers at 8-12 fps","blob shapes pop with 3-frame stepped scale"],"camera":"locked, tiny jitter of 1-3 px per layer","signature":"each ink is its own layer that lands separately and settles near, not exactly on, register"}
space: {"2d":"native","3d":"flat cut-paper planes with layer offsets; or a post-process that separates the render into 2-3 ink layers with halftone"}
good_for: ["indie culture, publishing, community, education, food, zines, event films", "friendly, handmade-but-graphic identities"]
not_for: ["corporate security, premium tech, medical precision"]
blends_with: ["punk-xerox-zine", "new-wave-weingart", "screenprint", "paper-cut-and-papercraft", "risograph-print"]
clashes_with: ["cassette-futurism"]
cheap_tells: ["full-colour gradient with a noise overlay", "more than 4 colours", "misregistration that is uniform instead of per-layer", "grain as a flat PNG overlay with no halftone logic", "pure white background"]
verified: {"non_wikipedia":3,"colours":"partial","colour_images":[],"grid":"proposed","timings":"proposed","sources_fetched":4,"recipes":"aligned","edited":"2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Risograph", "https://studio-ity.com/riso/colors/", "https://guides.lib.purdue.edu/c.php?g=1478280&p=11039634", "https://commons.wikimedia.org/wiki/File:Garden_Party,_close.jpg"]
---
## What it is
Risograph is a digital duplicator made by Riso Kagaku Corporation (introduced in Japan in 1980). A thermal head cuts a master wrapped around a drum; soy-based ink is pushed through it onto paper at about 150 pages per minute. Artists adopted it in the 2010s for zines and comics because it sits between photocopier and offset: cheap in runs above 100, with spot colour, grain and misregistration.

## The rules that make it this and not something else
- One ink per drum pass; each colour is a separate run, so layers misregister and drift: the Purdue guide says "some level of misregistration is a normal aspect of the risograph printing process" and gets worse with more layers. (The oft-quoted "up to 3 mm" is not in a source I read; use 1-3 px at 1080p as a proposed screen value.)
- Inks are translucent: overlapping colours mix (multiply), and the paper colour shows through.
- Practical limit about four layers (Purdue Knowledge Lab guide: "Prints can't be more than four layers"); files are grayscale per layer.
- Continuous tone does not exist: photographs and gradients become halftone or grain dither.
- Uncoated paper is required; ink is absorbed, never fully dries.
- Fluorescent pink and orange are signature colours, unreachable by CMYK.

## Tokens decoded
Inks (STUDIO-ITY ink library table, fetched; standard inks Red #FF665E, Blue #3D5588, Green #3D6730, Yellow #FFB511, Purple #3F2B6C, Violet #5E2D90, Brown #A89F94, Medium Blue #6F8DCE, Hunter Green #407060 too): Fluorescent Pink #ff48b0, Federal Blue #0078bf, Sun Yellow #ffe800, Teal #3d8e84, Fluorescent Orange #ff6e40, Fluorescent Green #a4dc30, Blue #3d5588, Green #3d6730, Burgundy #765b6a, Black #000000, Red #ff665e. Paper #f4efe3. Rule: choose 2-3 inks. Halftone 55-85 lpi equivalent; at 1080p use 6-10 px dots at 45 degrees, or error-diffusion grain. Display: Bricolage Grotesque 800. Margins 5.5% (proposed). Studio-ity's classic pairings: Fluorescent Pink + Federal Blue (the iconic look), Black + Fluorescent Pink, Hunter Green + Fluorescent Orange, Red + Blue, Yellow + Black; three-ink Pink + Yellow + Blue approximates full colour. Display: Bricolage Grotesque 800 (variable `wght`/`wdth`), mono labels DM Mono 400.

## Motion and camera
2D: build each ink as its own full-frame layer with `mix-blend-mode: multiply`. Each layer enters at a 120 ms offset with a 4-8 px x/y jitter seeded per layer, settling to a fixed 1-3 px residual offset (never exactly zero). Stepped entrances: `steps(3)` over 250 ms. Grain: 256 px tile redrawn every 3 frames (8-10 fps), integer-frame seeded. Camera locked, hold 600-1200 ms; transitions: layer-by-layer wipe, each ink 100 ms apart.
Finish: this look is stepped, so set `data-finish-blur="off"` on the scene's frame root so the film finish does not average the steps; use `steps(n)` eases and hold frames on the layer jitter and never `power*` tweens on the stepped layer.
3D (Rasan3D; real API, parameters proposed): render flat, then print it. Scene in `k.material("unlit",{color:"#ffffff"})` or `k.material("matte")` cut-paper planes at z offsets of 0.02-0.05, `environment:"none"`, `toneMapping:"none"`, `post:{}` empty. Separation as a post pass: `k.pass("riso",{at:"post",uniforms:{uPink:"#ff48b0",uBlue:"#0078bf",uPaper:"#f4efe3",uOff:(t)=>[Math.sin(t*3)*2,Math.cos(t*2)*2]},frag:RISO_GLSL})` with `#include <r3/post>` and `#include <r3/color>`: sample `r3Src(vUv)`, take `r3Luma` as tone, ink coverage `r3HalftoneFW(gl_FragCoord.xy+uOff, tone, 7.0, 0.7854)` for blue and `r3HalftoneFW(gl_FragCoord.xy, 1.0-tone, 7.0, 0.2618)` for pink, composite by multiply over `uPaper`: `col = uPaper * mix(vec3(1), uBlue, covB) * mix(vec3(1), uPink, covP)`. Grain via `r3Grain(col, gl_FragCoord.xy, floor(uFrame/3.0)*3.0, 0.03)` (held for 3 frames so it flickers at ~10 fps). Camera: `lens:[[0,50]]`, locked, `fstop` unset (no depth of field: it blurs the ink look).
## How to instruct a model to build it
"Risograph print look. Paper #f4efe3. Exactly three inks: fluorescent pink #ff48b0, federal blue #0078bf, sun yellow #ffe800. Draw each ink as a separate layer with mix-blend-mode multiply, 1-3px residual misregistration per layer, flat shapes plus 8px 45-degree halftone on photos. Add grain from a 256px tile changing every 3 frames. Type: Bricolage Grotesque 800. Motion: layers land one at a time, 120ms apart, steps(3), settle off-register. No gradients, no shadows, no glow." Models tend to add smooth gradients and white backgrounds; ban both explicitly.

## Blending notes
Carries: 2-3 translucent inks, off-register layers, halftone grain, paper tint. Blends strongly with zine and Weingart (layer logic) and papercut. Breaks when polish (glass, gloss, motion blur, depth of field) is layered on top.
Also clashes with (not library entries): glass; chrome; photoreal CGI.

## Cheap tells
- A smooth gradient with a noise overlay; more than 4 inks; a pure white background.
- Misregistration that is uniform across all layers instead of independent per ink.
- Grain as a static PNG overlay with no halftone logic; screen primaries instead of translucent multiplied inks.

## Sources
- https://en.wikipedia.org/wiki/Risograph — introduced in Japan 1980, 150 pages per minute, soy ink, uncoated paper (fetched)
- https://studio-ity.com/riso/colors/ — ink names, hex values, classic pairings, "fluorescents don't fully reproduce on screen" (fetched)
- https://guides.lib.purdue.edu/c.php?g=1478280&p=11039634 — translucent ink, layering, four-layer limit, misregistration is normal, paper weight (fetched)
- https://commons.wikimedia.org/wiki/File:Garden_Party,_close.jpg — a Riso print photograph, measured and not used (fetched via FilePath)
- Note: library/systems/material/risograph-print.md covers the same process; this entry is the culture/aesthetic, that one the material. Not merged. Proposed (not sourced): lpi mapping, jitter px, ms timings, 3D parameters.
