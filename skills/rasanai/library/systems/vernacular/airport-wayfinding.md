---
id: "airport-wayfinding"
name: "Airport and civic wayfinding (Aicher, Frutiger, Crouwel lineage)"
kind: "vernacular"
domain: "vernacular"
era: "1960s–1970s, Munich / Paris / Amsterdam; still the default language of public signs"
origin: ["Otl Aicher (Munich 1972 Olympics)", "Adrian Frutiger (Roissy / Charles de Gaulle signage)", "Benno Wissing and Total Design (Schiphol 1967)", "Bureau Mijksenaar (Schiphol 1990s, JFK, Newark)"]
tags: ["signage", "pictogram", "wayfinding", "public", "grid", "functional"]
palette: {"roles": {"canvas": "#e2edef", "ink": "#060707", "munich_blue": "#9cbae4", "munich_green": "#73ba93", "charcoal": "#37393d", "sign_yellow": "#ffd400"}, "logic": "one saturated field colour per zone or function, dark or white symbol on it; colour is a route code, never decoration", "evidence": "canvas, ink, blue, green, charcoal measured from Commons photos of Munich 1972 signage (Olympic station, ice rink), k-means 6, 2026-10-03; sign_yellow #ffd400 proposed (Newark photo measured a shadowed #b39a25)"}
type: {"display": {"family": "Frutiger / Univers lineage", "free_alternative": "Open Sans / Noto Sans / Public Sans", "weights": [400, 700], "case": "mixed (lowercase for destinations, as signs read by word shape)", "tracking": 0.01, "note": "Open Sans is the closest humanist stand-in for Frutiger; Public Sans or Inter Tight / Archivo for a Univers-like grotesk. All real Google Fonts families with a wght axis."}, "body": {"family": "same family, one weight step lighter", "free_alternative": "Open Sans", "weights": [400]}, "rules": ["one family for every sign", "wide apertures and open counters for reading at speed and angle", "destination first, arrow and distance second", "never all-caps paragraphs"]}
grid: {"columns":"modular tiles; symbol on a square grid","baseline_px":8,"margins":"generous, equal to symbol stroke x 2","rules":["pictograms built on a square grid","every element on 45 or 90 degrees (15-degree steps allowed)","identical stroke weight across the set","signs read left to right: symbol, destination, arrow"]}
shape: {"radius":"0 to 8px sign corners","stroke":"uniform heavy","shadow":"none","imagery":"pictograms only: head as a circle, body as straight bars and perfect arcs"}
texture: "none; matte enamel or backlit panel with a faint luminance gradient at the edges"
motion: {"language":"orderly, directional, sequential","timing_ms":[160,320,520],"eases":{"enter":"power2.out","move":"power2.inOut","exit":"power2.in"},"entrances":["panel slides in from the direction the arrow points","symbol draws on its grid then fills","row-by-row split-flap-free reveal (cut, not flip)"],"camera":"locked, or a slow lateral track along a corridor of signs","signature":"an arrow that moves the viewer: the arrow leads, the next sign is already waiting where it points"}
space: {"2d":"native","3d":"signs as real panels along a corridor (k.panel with the artwork as texture), long lens compressing a row of them; see Rasan3D reading"}
good_for: ["infrastructure, logistics, transit, maps and routes", "onboarding flows that are literally a path", "civic or institutional explainers", "anything that must read in one second"]
not_for: ["intimate emotional storytelling", "luxury", "anything that needs texture or romance"]
blends_with: ["transit-map-beck", "swiss-international", "newspaper-broadsheet", "museum-label-and-specimen", "data-journalism-isotype-neurath"]
clashes_with: ["bollywood-hand-painted", "vhs-analog", "y2k-chrome"]
cheap_tells: ["a random stick-figure icon set at mixed stroke weights", "arrows that point nowhere or contradict the camera move", "colour used for mood rather than route", "icons on 7-degree angles and wobbly curves", "pictograms with details (fingers, facial features)"]
verified: {"sources_fetched": 8, "non_wikipedia": 5, "colours": "measured", "colour_images": ["https://commons.wikimedia.org/wiki/File:Olympic_games_1972_pictogramms_olympic_station_0877.JPG", "https://commons.wikimedia.org/wiki/File:Olympic_parc_munich_pictogramms_ice_rink_0651.JPG", "https://commons.wikimedia.org/wiki/File:Newark_Airport_Wayfinding_Signage.jpg"], "grid": "sourced", "timings": "proposed", "recipes": "aligned", "edited": "2026-10-03"}
sources: ["https://www.smithsonianmag.com/innovation/this-graphic-artists-olympic-pictograms-changed-urban-design-forever-180978256/", "https://wp.nyu.edu/abudhabi-wayfinding_2022/2022/04/05/learning-from-the-olympic-pictograms/", "https://en.wikipedia.org/wiki/Frutiger_(typeface)", "https://wimcrouwelinstituut.nl/nl/research/designing-for-everyone", "https://en.wikipedia.org/wiki/Paul_Mijksenaar", "https://commons.wikimedia.org/wiki/File:Olympic_games_1972_pictogramms_olympic_station_0877.JPG", "https://commons.wikimedia.org/wiki/File:Olympic_parc_munich_pictogramms_ice_rink_0651.JPG", "https://commons.wikimedia.org/wiki/File:Newark_Airport_Wayfinding_Signage.jpg"]
---
## What it is
The visual language of airports, stations and hospitals: a pictogram on a flat colour field, a destination in one humanist sans, an arrow, repeated without exception. Three lineages meet. Schiphol (1967): interior architect Kho Liang Ie asked Benno Wissing (Total Design) for signs hung above head height, yellow for arrivals and departures and green for secondary services, "passengers first" (Wim Crouwel Institute). Munich 1972: Otl Aicher's 166 pictograms drawn "like an alphabet" on vertical and diagonal grid lines, with a palette of "light, fresh shades of blue, green, silver, orange and yellow" (Smithsonian), which fed the US DOT symbol set of 1974. Frutiger: the typeface grew from Roissy, drawn 1970-71 for Charles de Gaulle Airport directional signs and released by Stempel with Linotype in 1976 (Wikipedia). Bureau Mijksenaar (founded 1986) later reworked Schiphol with Frutiger and reintroduced pictograms, and also did JFK, LaGuardia and Newark.

## The rules that make it this and not something else
- Pictograms are drawn on a grid, same stroke weight across the set, no perspective (front or profile), 45 degree angles or 15 degree increments, straight segments and true arcs, centred in a boundary box, only the essential elements (NYU course notes). "Conciseness and specification are more important than artistry."
- Figures are non-heroic: "it could be you or it could be your kid" (Smithsonian).
- One typeface family for every sign, with wide apertures and open counters for reading at speed and angle (Frutiger: "total clarity" at distance; Schiphol originally used Akzidenz-Grotesk with no pictograms, then Frutiger plus pictograms for mixed-language travellers).
- Colour is a route code: yellow for primary directions and green for secondary services at Schiphol; never mood. Language priority is explicit (English first, Dutch below).
- Hierarchy is positional: symbol, name, arrow, always in this order; signs sit above eye line at right angles to travel.
- Sets are systems. A one-off icon in a different weight breaks the alphabet.

## Tokens decoded
- Measured from Commons photos of Munich 1972 signage (k-means 6): light blue `#9cbae4` (40% of the ice-rink panel), light green `#73ba93` (44% of the Olympic station sign), pale ground `#e2edef` / `#e5f1fa`, charcoal `#37393d`, black `#060707`. Newark airport signage photo gives sign grey `#9ea3a5`, black `#0c0f12` and a shadowed yellow `#b39a25`; a clean sign yellow `#ffd400` is proposed (the photographed yellow is dimmed by shade).
- Display type: Frutiger is a commercial Linotype face. Real Google Fonts stand-ins: Open Sans (wght 300-800, wdth axis; closest humanist aperture), Noto Sans (wght 100-900, wdth), Public Sans (wght 100-900, a Libre Franklin descendant: more Univers-like). Weight 700 for destinations, 400 secondary. Lowercase or title case; Aicher's own Lufthansa work used lowercase Helvetica Bold, so a Helvetica-like grotesk is also period-correct: Inter Tight or Archivo.
- Pictogram: icon box 96 px on a 12 x 12 module grid (8 px modules); stroke 8 percent of icon height (proposed); sign padding 2 strokes; sign radius 0 to 8 px; destination 64 px, secondary 36 px, arrow 1.4x destination cap height (proposed).

## Motion and camera
2D (vocabulary.md terms: wipe, cut, stagger, stroke draw): signs enter from the side their arrow points, `x` from 120 px, 320 ms `power2.out`; pictograms draw on their grid lines with `stroke-dashoffset` in 160 ms steps, `power2.inOut`; arrows nudge 24 px on a 520 ms loop only when they are the subject. Cuts, not fades. The camera is locked, or tracks laterally at constant speed along a row of signs; the next destination is already on screen where the arrow points. Timings are proposed; no source gives milliseconds.

3D (Rasan3D, a corridor of signs):
- Each sign `k.panel({ width: 1.2, height: .4, depth: .04, radius: .01, texture: k.image("sign-3.png"), bodyColor: "#37393d" })` (unlit face keeps colour exact) at x = 0, 3, 6, 9 m, y = 2.2, facing the camera; crisp live type via `k.pinDom(el, { at: panelMesh, width: 1.2, px: [1200, 400], offset: [0, 0, .021] })`.
- `k.rig("top-soft")`, `environment: { preset: "soft", intensity: .5 }`, `k.ground({ y: 0, color: "#d9d9d5", shadowOpacity: .25 })`.
- Camera: `lens: [[0, 135]]` tracking sideways so signs stack in compression; `pos` and `target` keys slide together with `"power1.inOut"`; `fstop: 4` so the farthest signs go soft; `focus` keyed sign to sign. Hold 600 ms on the sign the line is about.
- Optional: a floor guide line as `k.tube(points, { radius: .02 })` in the route colour that the camera follows.
- Avoid neon reflections, glossy floors, orbiting a single sign.

## How to instruct a model to build it
```
Airport wayfinding (Aicher / Frutiger / Schiphol). Flat colour fields, one per function, from #9cbae4, #73ba93, #ffd400 and charcoal #37393d on a #e2edef wall. One humanist sans (Open Sans 700 and 400), destinations in lowercase or title case, never tracked-out capitals. Every icon on a 12x12 grid, uniform 8% stroke, angles only 0/45/90 (15 deg steps allowed), true arcs, no detail, front or profile view. Layout order always icon, name, arrow. Signs slide in from the side their arrow points on power2.out 320ms; icons draw on in 160ms steps; no fades, no glows, no gradients. Camera locked or lateral track. One saturated colour per frame region.
```
Draw one SVG symbol sheet first and reuse it; models invent icons in mixed weights otherwise. Forbid drop shadows and rounded Material cards, which models add by default.

## Blending notes
- Carries: the 45/90 rule, colour-as-code, the arrow-leads-the-eye motion, one-family type. Breaks against textured vernaculars: the sign's authority depends on being flat.
- Pairs with transit-map-beck (same 45 degree logic), swiss-international, museum-label-and-specimen. Cross-reference: the ISOTYPE ancestry is in data-journalism-isotype-neurath.

## Sources
- https://www.smithsonianmag.com/innovation/this-graphic-artists-olympic-pictograms-changed-urban-design-forever-180978256/ — 166 pictograms, grid, "like an alphabet", palette, non-heroic figures, US DOT 1974 influence (fetched).
- https://wp.nyu.edu/abudhabi-wayfinding_2022/2022/04/05/learning-from-the-olympic-pictograms/ — grid, stroke, 45 and 15 degree rules, no perspective, essential elements (fetched).
- https://en.wikipedia.org/wiki/Frutiger_(typeface) — Roissy 1970-71, 1976 release, humanist traits (fetched).
- https://wimcrouwelinstituut.nl/nl/research/designing-for-everyone — Schiphol 1967 Wissing system, yellow and green, ISOTYPE legacy, Mijksenaar Frutiger redesign (fetched).
- https://en.wikipedia.org/wiki/Paul_Mijksenaar — Bureau Mijksenaar 1986, Schiphol, JFK, LaGuardia, Newark (fetched).
- https://commons.wikimedia.org/wiki/File:Olympic_games_1972_pictogramms_olympic_station_0877.JPG — measured green.
- https://commons.wikimedia.org/wiki/File:Olympic_parc_munich_pictogramms_ice_rink_0651.JPG — measured light blue and black.
- https://commons.wikimedia.org/wiki/File:Newark_Airport_Wayfinding_Signage.jpg — measured sign grey, black, shadowed yellow.
- Blocked: totaldesign.com Schiphol case study returned 403, so Total Design's own statement was not read.
