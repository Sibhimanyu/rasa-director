---
id: "push-pin-studios"
name: "Push Pin Studios (the Push Pin Style)"
kind: "studio"
era: "1954-1970s, New York"
origin: ["Milton Glaser", "Seymour Chwast", "Edward Sorel", "Reynold Ruffins", "John Alcorn", "Paul Davis"]
palette: {"roles": {"canvas": "#f3e6c4", "paper_cool": "#e9ede6", "ink": "#602b1d", "ink_black": "#1d1a1a", "cyan": "#0ab3dd", "orange": "#db6f09", "green": "#14684c", "red": "#d93a2b", "blue": "#2a5db0", "violet": "#6a3d9a"}, "logic": "saturated, many hues in flat fields, often outlined; a hot cyan and orange pair is as Push Pin as red and blue. Echoes Victorian, Art Nouveau and Art Deco colours", "evidence": "partial. Measured from Milton Glaser's Zabriskie Point alternate poster (1970) as a scan (https://commons.wikimedia.org/wiki/Special:FilePath/Zabriskie_Point_(1970_Milton_Glaser_poster).jpg?width=400), k-means 7, 2026-10-03: cyan #0ab3dd 33% and #41bad8 19%, orange #db6f09 14%, paper #e9ede6 11%, green #14684c 7%, dark brown #602b1d 7%. Scan colour reflects the print and the retouch; cream #f3e6c4, red, blue and violet are proposed (Dylan 1966 and the I Love NY mark are in copyright and not measured)."}
type: {"display": {"family": "Glaser's Babyteeth (1966), Glaser Stencil (1970); Victorian and Art Nouveau display faces", "free_alternative": "Bungee / Rye / Fascinate / Bowlby One SC / Abril Fatface", "weights": [400], "case": "mixed", "tracking": 0, "note": "All five are single-weight 400 display faces (OFL); none is Babyteeth, so for the exact Glaser feel draw the key word as outlined SVG letters. Abril Fatface is the fat-face Victorian reference; Fascinate for Deco-ish; Rye for woodtype."}, "body": {"family": "classic serif", "free_alternative": "Libre Caslon Text", "weights": [400, 700], "tracking": 0}, "rules": ["lettering is drawn and part of the illustration", "historical forms revived and bent", "bulgy three-dimensional letters"]}
grid: {"columns":"loose","baseline_px":null,"margins":"illustration-led","rules":["image and type integrated","central subject with ornamental frame","varied scale"]}
shape: {"radius":"rounded, bulgy","stroke":"2-4px black outline","shadow":"flat offset only","imagery":"illustration, engraving influence, collage, historical pastiche"}
texture: "halftone, engraving hatching, flat print"
motion: {"language":"playful, eclectic, illustration-driven","timing_ms":[250,500,800],"eases":{"enter":"back.out(1.4)","move":"power2.inOut","exit":"power2.in"},"entrances":["pop-in with overshoot","drawn-on outline","layer slide with offset shadow"],"camera":"locked, or gentle push of 4%","signature":"a different historical style per scene, held together by outline and illustration"}
space: {"2d":"native","3d":"limited; inflated letters and puffy solids in toon shading"}
good_for: ["editorial, music, food, culture", "brands that want warmth and wit", "history-flavoured explainers"]
not_for: ["strict B2B data", "finance", "minimal luxury"]
blends_with: ["polish-poster-school", "memphis-milano", "postmodern-emigre", "psychedelic-poster"]
clashes_with: ["swiss-international", "de-stijl"]
cheap_tells: ["a single Art Nouveau frame clip-art", "retro filter on a vector stock illustration", "no idea behind the pastiche", "inconsistent outline weights", "digital gradients instead of flat print colour"]
verified: {"non_wikipedia":2,"colours":"partial","colour_images":["https://commons.wikimedia.org/wiki/Special:FilePath/Zabriskie_Point_(1970_Milton_Glaser_poster).jpg"],"grid":"n/a","timings":"proposed","sources_fetched":5,"recipes":"aligned","edited":"2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Push_Pin_Studios", "https://en.wikipedia.org/wiki/Milton_Glaser", "https://en.wikipedia.org/wiki/Seymour_Chwast", "https://www.miltonglaser.com/the-work/", "https://commons.wikimedia.org/wiki/File:Zabriskie_Point_(1970_Milton_Glaser_poster).jpg"]
---
## What it is
A New York design studio founded in 1954 by Glaser and Chwast with Sorel and later Ruffins, known for an illustration-led approach mixing historical styles (Victorian, Art Nouveau, Art Deco) with a contemporary outlook, in contrast to the dominant Swiss minimalism. Eye magazine described the style as celebrating eclectic and eccentric design; the "bulgy" three-dimensional treatment of historical forms is cited. It published The Push Pin Graphic from 1957; the "Push Pin Style" exhibition toured from 1970 to 1972, including the Louvre.

## The rules that make it this and not something else
- Illustration and lettering are one thing; type is drawn.
- Historical style is quoted deliberately, with one era per piece.
- Flat saturated colour with outlines; engraving hatching and halftone as texture.
- Wit: a visual idea underneath the pastiche.
- Typefaces by the principals: Babyteeth (1966), Glaser Stencil (1970).
- Glaser's Dylan poster (1966): silhouette plus flowing coloured hair, a "controlled blast of colour" (Wikipedia).

## Tokens decoded
- Measured from the Zabriskie Point poster: cyan #0ab3dd, orange #db6f09, green #14684c, dark brown #602b1d, paper #e9ede6. Proposed: cream ground #f3e6c4, ink #1d1a1a, red #d93a2b, blue #2a5db0. Use 4-5 flat hues; each element outlined 3px in ink (proposed width).
- Display: Abril Fatface (fat-face Victorian), Bungee or Fascinate, single weight 400; body Libre Caslon Text 400/700. All OFL. None is Babyteeth: for the hero word draw outlined letters in SVG.
- Flat offset shadow 6px in ink at 100% (no blur), the only shadow permitted.

## Motion and camera
2D: pop-ins with back.out(1.4) over 450ms, outline draws via stroke-dashoffset 600ms power2.inOut, layers slide with a 60ms stagger, halftone fills wipe 400ms. Scenes change historical style via a cut or a 500ms page-turn. Holds 900ms. Camera: 4% push-in over 3s sine.inOut.
3D (Rasan3D; real API, parameters proposed): inflated puffy solids with ink outlines. Letters or a sign as `k.extrudeText("PUSH",{font:"assets/fonts/AbrilFatface.ttf",size:1.4,depth:0.6,bevel:0.12,material:k.material("gummy",{color:"#0ab3dd"})})` (big bevel for the bulgy read); flat colour sets via `k.material("unlit",{color})` where no shading is wanted. Ink outline as a post pass: `k.pass("ink",{at:"post",frag:INK_GLSL})` where `INK_GLSL` samples `uDepth` at `vUv` and its four neighbours at 2px (`2.0/uRes`) and, where the depth difference exceeds a threshold, outputs `#1d1a1a` over `r3Src(vUv)`; toon steps by `r3Toon`/`r3ToonRamp` in the `npr` chunk (`#include <r3/npr>`) in a ShaderMaterial. Rig `k.rig("three-point",{key:"#ffffff",fill:"#ffffff",rim:"#ffffff",intensity:1,shadows:false})`, `environment:"none"`, `toneMapping:"none"` so flat colours stay exact. Camera `lens:[[0,35]]`, a 4% dolly in 3s `sine.inOut`, `roll` 0. Offset shadow: a duplicate mesh in `unlit` ink pushed 0.06 along -x,-y behind the subject.

## How to instruct a model to build it
Paste: "Push Pin Studios style, 1960s-70s New York illustration. Warm cream #f3e6c4 ground. Every shape flat colour with a 3px ink outline, halftone or hatching texture, flat offset shadow only. Lettering is drawn and bulgy (Bungee or Abril Fatface), integrated with the illustration, not set over it. Each scene quotes one historical style (Victorian poster, Art Nouveau, Art Deco). Motion: pop-ins with back.out(1.4) 450ms, outlines draw on in 600ms power2.inOut. No gradients, no glass, no blur." Models tend to produce generic flat-vector retro; require one witty visual idea per scene.

## Blending notes
Carries: outlined illustration, drawn type, historical quoting. Pairs with Polish posters (shared metaphor) and Memphis (more colour, less history). Clashes with Swiss structure.

## Cheap tells
- A single Art Nouveau frame as clip-art; a retro filter on a stock vector.
- Pastiche with no idea under it; Push Pin always had one visual joke or metaphor.
- Inconsistent outline weights; digital gradients in place of flat print colour.
- Using one historical style across every scene: the signature is a different era per piece.

## Sources
- https://en.wikipedia.org/wiki/Push_Pin_Studios — founding 1954, bulgy historical style, Baby Teeth, exhibition (fetched)
- https://en.wikipedia.org/wiki/Milton_Glaser — Dylan poster 1966, typefaces, I Love NY 1977 (fetched)
- https://en.wikipedia.org/wiki/Seymour_Chwast — Push Pin Graphic 1957, Louvre show 1970 (fetched)
- https://www.miltonglaser.com/the-work/ — Glaser's studio site: his body of work (posters, identity, books and magazines), used to confirm the scope (fetched)
- https://commons.wikimedia.org/wiki/File:Zabriskie_Point_(1970_Milton_Glaser_poster).jpg — poster scan, colour measurement (fetched)
- Blocked: Eye magazine article URL (404). Proposed (not sourced): outline widths, ms timings, 3D parameters.
