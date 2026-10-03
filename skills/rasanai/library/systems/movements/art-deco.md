---
id: "art-deco"
name: "Art Deco"
kind: "movement"
era: "1910s-1939 (named after Paris 1925); revived 1980s and in 2010s luxury branding"
origin: ["A. M. Cassandre", "Exposition internationale des arts decoratifs, Paris 1925", "William Van Alen (Chrysler Building)"]
palette: {"roles": {"canvas": "#0e1a2b", "ink": "#f3e7c9", "metal": "#ab6c2b", "metal_hi": "#ceb791", "metal_shade": "#552c14", "steel": "#a4a6a7", "steel_shade": "#293134", "accent": "#0f6e6a", "accent_2": "#a3262a"}, "logic": "deep ground, one metal (brass or stainless steel), one jewel colour; metal is always a 3-stop ramp (highlight, mid, shade), never one flat yellow", "evidence": "metal ramp measured from a photograph of the Chrysler Building door detail, brass/bronze (https://commons.wikimedia.org/wiki/Special:FilePath/Chrysler_building_door_detail_crown.jpg?width=400), k-means 6, 2026-10-03: #ab6c2b 21%, #552c14 17%, #ceb791 13%. Steel measured from Chrysler Building motifs detail (https://commons.wikimedia.org/wiki/Special:FilePath/Chrysler_Building_motifs_detail.jpg?width=400), k-means 6, 2026-10-03: #a4a6a7 28%, #293134 12%. Canvas, ivory, teal and red are proposed (Cassandre posters are in copyright and no measurable image was fetchable)."}
type: {"display": {"family": "Broadway, Bifur (Cassandre 1929), Peignot (Cassandre 1937), Futura-style geometric sans", "free_alternative": "Poiret One / Limelight / Federo / Josefin Sans / Gruppo / Monoton", "weights": [400], "case": "upper", "tracking": 0.08, "note": "Poiret One, Limelight, Federo, Gruppo, Monoton are single-weight 400 (OFL). Josefin Sans is variable wght 100-700: tween wght 200 to 600 on reveals. Bifur/Peignot/Broadway are commercial; Limelight is the closest high-contrast display, Poiret One the closest monoline."}, "body": {"family": "geometric sans or high-contrast serif", "free_alternative": "Josefin Sans / Cormorant Garamond", "weights": [400, 600], "case": "upper for labels, sentence for text"}, "rules": ["extreme stroke contrast or monoline geometry, no in-between", "wide tracking on small capitals", "letters built from circles, triangles and parallel lines", "a thin rule or double-line frame around titles", "centred or strictly symmetrical lock-ups"]}
grid: {"columns":12,"baseline_px":8,"margins":"symmetrical; central axis","rules":["strict bilateral symmetry","vertical emphasis: stepped, tapering upward","borders made of parallel 2-4px lines","ornament repeats on a regular module (chevron, zigzag, fan)"]}
shape: {"radius":"0 or full semicircle (fans and arches)","stroke":"thin parallel lines 1-3px in metal","shadow":"none; use highlight line along edges","imagery":"sunburst rays, chevrons, zigzags, stepped setbacks, stylized flora, speed lines, streamlined machines"}
texture: "metal sheen as vertical linear gradient, stone, lacquer; airbrushed gradients on Cassandre-style posters (no grain)"
motion: {"language":"ceremonial, precise, symmetric","timing_ms":[500,900,1500],"eases":{"enter":"power3.out","move":"power2.inOut","exit":"power2.in"},"entrances":["rays fan out from a centre point","stepped reveal from a centre line outward","gold line draws around a frame (stroke-dashoffset)"],"camera":"slow symmetrical push on a central axis; vertical tilt up a facade","signature":"mirrored symmetric build: two halves open from the centre like elevator doors"}
space: {"2d":"native","3d":"strong: stepped setback buildings, extruded geometric lettering, brushed-brass and black lacquer; symmetrical low-angle camera"}
good_for: ["luxury, hospitality, jewellery, cocktails, cinema, finance with heritage", "period pieces (1920s-30s), cities, travel, transport, architecture"]
not_for: ["warm indie or craft, kids, anything that needs a casual tone"]
blends_with: ["art-nouveau", "polish-poster-school", "mid-century-modern", "soviet-space-age"]
clashes_with: ["punk-xerox-zine", "brutalist-web"]
cheap_tells: ["gold-gradient text on black (every Gatsby template)", "Broadway typeface for body or whole paragraph", "unsymmetrical layout with deco ornament pasted on", "uniform confetti of triangles", "gold with no highlight line, flat mustard yellow"]
verified: {"non_wikipedia":1,"colours":"partial","colour_images":["https://commons.wikimedia.org/wiki/Special:FilePath/Chrysler_building_door_detail_crown.jpg","https://commons.wikimedia.org/wiki/Special:FilePath/Chrysler_Building_motifs_detail.jpg"],"grid":"proposed","timings":"proposed","sources_fetched":4,"recipes":"aligned","edited":"2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Art_Deco", "https://en.wikipedia.org/wiki/Chrysler_Building", "https://en.wikipedia.org/wiki/A._M._Cassandre", "https://commons.wikimedia.org/wiki/File:Chrysler_building_door_detail_crown.jpg"]
---
## What it is
Art Deco is a decorative and architectural style that took its name from the 1925 Paris Exposition internationale des arts decoratifs et industriels modernes (29 April to 8 November 1925, about 15,000 exhibitors from twenty countries). It joins geometric form (sunbursts, chevrons, zigzags, stepped profiles) with luxury materials such as ebony, ivory, chrome and stainless steel; sources trace its roots to Cubism, the Vienna Secession, Fauvism, the Ballets Russes and Egyptian motifs. In graphics, A. M. Cassandre's airbrushed travel posters (Normandie, 1935) and typefaces Bifur (1929) and Peignot (1937) set the idiom. The Chrysler Building (opened 27 May 1930) shows the three-dimensional version: a crown of seven radiating terraced arches in ribbed, riveted stainless steel in a sunburst pattern.

## The rules that make it this and not something else
- Symmetry is mandatory: a central axis, mirrored halves, centred title.
- Geometry as ornament: sunburst (radial rays), chevron, zigzag, stepped setback, fan, concentric arcs.
- Verticality: forms taper upward in steps.
- Materials declared: metal (gold, brass, steel) against a dark lacquer or stone ground; the lobby of the Chrysler Building pairs red granite, travertine, blue marble bands, amber onyx and stainless steel.
- Letters are geometric: monoline or extreme thick-thin; wide tracking in capitals.
- Streamlined machines (ships, trains, aeroplanes) as heroes, drawn with smooth airbrushed gradients and speed lines.
- Borders: parallel thin lines, double frames, corners cut or stepped.
- Restraint in colour: dark ground, one metal, one jewel tone.

## Tokens decoded
- Colour: ground `#0e1a2b` (midnight, proposed) or `#1d1d1d`; ink `#f3e7c9` (ivory, proposed). Metal measured from the Chrysler Building brass door detail: highlight `#ceb791`, mid `#ab6c2b`, shade `#552c14`; the building's steel cladding measured `#a4a6a7` / `#293134`. Jewel `#0f6e6a` (teal) or `#a3262a` (lacquer red) are proposed. Flat yellow-gold is a tell; always give metal the 3-stop vertical gradient above.
- Type: Poiret One (single weight 400) for light display, Limelight for high-contrast hits, Josefin Sans (variable wght) for geometric labels at +8% tracking, Cormorant Garamond for serif body (all Google Fonts, OFL). Bifur, Peignot and Broadway are commercial or licensed; mark as such and substitute.
- Grid: 12 columns, central axis, 8px baseline; the title's centre equals the frame's centre; frames of 3 parallel lines at 2px, 6px gap.
- Ornament module: 15-degree rays for sunburst (24 rays), chevron period 48px, step height 24px.
- Radius: 0, or exact semicircles; no soft rounded corners.

## Motion and camera
- Reveals are symmetrical: two halves slide out from the centre (clip-path inset from 50% to 0%, 900 ms `power3.out`), or rays fan from the centre (24 wedges, 40 ms stagger, scaleY 0 to 1, `power2.out`).
- Gold line draws: SVG stroke-dashoffset from full to 0 over 1200 ms `power2.inOut`; a 160 px highlight band (gradient) sweeps across metal elements once every 3-4 s, 900 ms `sine.inOut`, to read as polished metal.
- Type: tracked caps open from 0.25em to 0.08em tracking over 1500 ms `power2.out` while fading 0 to 1; no bounce.
- Hold times are long (1.2-2 s) for a ceremonial pace.
- Camera 2D: central push-in 1.00 to 1.05 over 5 s `power1.inOut`; a vertical tilt that follows a tapering tower (translateY from bottom to top over 3 s `power2.inOut`).
- 3D reading (Rasan3D; parameters proposed): stepped setback tower from stacked `BoxGeometry` blocks scaled 1.0, 0.8, 0.62, 0.46, topped by a crown of seven concentric arches (the Chrysler crown has seven terraced arches) as flattened `TorusGeometry` or `k.svg(...)` extrusions; lettering via `k.extrudeText("METROPOLIS",{font:"assets/fonts/Limelight.ttf",size:1,depth:0.2,bevel:0.02,material:k.material("brushed-metal",{color:"#ab6c2b"})})`. Ground `k.ground({y:0,color:"#0e1a2b"})`, `k.material("ceramic",{color:"#101010"})` for black lacquer, `environment:"studio"`. Light `k.rig("top-soft",{key:"#ffe9c7",fill:"#c9d6ff",intensity:1.1,shadows:true})` plus a `low-key` rim for edge highlights. Camera keys: `lens:[[0,35]]`, `pos` a straight vertical rise on the axis `[[0,[0,0.5,12]],[5,[0,6,12],"power2.inOut"]]`, `target` following to the crown, `roll:0` always (symmetry). Sunburst: 24 thin `emissive` planes fanned behind the subject with `post.bloom:{strength:0.5,threshold:1.15}`. Orbit only if slower than 8 degrees per second.

## How to instruct a model to build it
Paste-ready brief:
"Art Deco, 1925-1935. Strictly symmetrical, central axis. Ground #0e1a2b, ivory #f3e7c9, metal #ab6c2b with a three-stop vertical gradient (#ceb791, #ab6c2b, #552c14) so it reads as polished brass, one jewel accent #0f6e6a. Titles in Poiret One or Limelight uppercase with +8% tracking, labels in Josefin Sans 600. Frame every title with three parallel 2px metal lines. Ornament: 24-ray sunburst behind the title, chevron bands on a 48px period, stepped corners. Motion: the frame draws itself (stroke-dashoffset, 1200ms power2.inOut), then two halves open from the centre (clip-path, 900ms power3.out); one highlight sweep across the metal every 3.5s; type tracks from 0.25em to 0.08em in 1500ms power2.out. No bounce, no overshoot, no flat yellow gold. Camera: centred push 1.00 to 1.05 over 5s."
Claude vs GPT: both default to gold gradient text on black. Instruct the symmetry and the ornamental module numbers; ask for metal highlight edges, not glow.

## Blending notes
Carries well: symmetry, tracked caps, metallic line frames. With art nouveau, keep deco's geometry and nouveau's botanical motif as a single accent. With mid-century modern, take deco's materials but not its ornament density. Clashes with anything raw: punk or brutalist cannot hold a gold line. Warm and casual brands break the ceremonial pace; if the blend needs speed, shorten holds to 0.8 s but keep the symmetry.

## Sources
- https://en.wikipedia.org/wiki/Art_Deco — motifs (sunburst, chevron, zigzag, stepped), materials, 1925 origin, influences (fetched)
- https://en.wikipedia.org/wiki/Chrysler_Building — stainless-steel sunburst crown, lobby materials, opened 27 May 1930 (fetched)
- https://en.wikipedia.org/wiki/A._M._Cassandre — airbrush posters, Bifur 1929, Peignot 1937, Normandie 1935 (fetched)
- https://commons.wikimedia.org/wiki/File:Chrysler_building_door_detail_crown.jpg — photograph used to measure the brass ramp (fetched)
- Blocked/unavailable: Met Museum Art Deco essay (HTTP 429), V&A page (404), MoMA (403). Cassandre posters are in copyright, so no measured poster colour; ground and jewel hexes remain proposed. Timings and ornament module numbers are proposed.
