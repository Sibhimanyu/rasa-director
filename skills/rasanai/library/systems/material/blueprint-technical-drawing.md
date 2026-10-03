---
id: "blueprint-technical-drawing"
name: "Blueprint and technical drawing (cyanotype white-line, ISO drafting)"
kind: "material"
domain: "material"
era: "cyanotype 1842 (Herschel); blueprints dominant to the 1940s; ISO drafting conventions 20th century"
origin: ["Sir John Herschel (cyanotype, 1842)", "Anna Atkins (Photographs of British Algae, 1843-1861)", "ISO 128 / ISO 7200 / ASME Y14 drafting standards", "architectural and engineering reprography"]
palette: {"roles":{"canvas":"#0b3880","canvas_deep":"#152449","line":"#f4f8fb","line_dim":"rgba(244,248,251,.45)","grid":"rgba(244,248,251,.12)","accent":"#ffd84a"},"logic":"white or near-white line on a Prussian-blue ground; hierarchy by line weight and opacity, not by colour; one accent for the callout. Real cyanotype grounds are a medium blue (measured #0b3880 on an Atkins plate), not near-black: #003153 is the pigment colour and a deliberately dark CAD reading, kept as canvas_dark if the film wants the CAD register","canvas_dark":"#003153","evidence":"canvas and canvas_deep measured from the same cyanotype chemistry on Anna Atkins plates (https://commons.wikimedia.org/wiki/Special:FilePath/Anna_Atkins_algae_cyanotype.jpg?width=400, k-means 6, 2026-10-03: #0b3880 41.7%, #1d498f 17.5%, #152449 4.1%; see the cyanotype entry). No scan of an actual drafting blueprint was found in a usable colour (the Commons blueprint scans tried were grey or cream: a Samuel Hyde estate grading blueprint of 1910, Union Pacific and revolver sheets). #003153 is carried from the earlier draft (Wikipedia Prussian blue) and not re-fetched. line #f4f8fb, opacities and accent #ffd84a are proposed"}
type: {"display":{"family":"Share Tech Mono","free_alternative":"Share Tech Mono / IBM Plex Mono / Barlow Condensed / Saira Extra Condensed","weights":[400,500],"case":"ALL CAPS","tracking":0.06,"note":"ISO 3098 technical lettering has no official Google Fonts release, so the match is a judgement. Share Tech Mono is 400 only; IBM Plex Mono static 100 to 700; Barlow Condensed and Saira Extra Condensed static 100 to 900 for drafting-style caps; Roboto Mono has a wght axis 100 to 700 if a tweened weight is wanted"},"body":{"family":"IBM Plex Mono","free_alternative":"IBM Plex Mono","weights":[400]},"rules":["single-stroke caps, upright or 15 degree slanted","small fixed sizes: 2.5, 3.5, 5, 7 mm equivalent at sheet scale","text never rotates except along dimension lines","notes numbered and set in a block"]}
grid: {"columns":"sheet with a border frame (10 mm inset), a title block in the bottom-right corner","baseline_px":8,"margins":"20 mm left binding margin, 10 mm others (ISO common practice, proposed (not sourced) for this sheet layout)","rules":["title block at bottom right with title, creator and approver, owner, document type and number, sheet x/y, date (ISO 7200 eight fields, sourced)","zone references along the frame edges (A-F, 1-8)","views arranged in first- or third-angle projection (sourced both conventions exist)"]}
shape: {"radius":0,"stroke":"line hierarchy: thick for visible outlines (0.5-0.7 mm), thin for dimensions (0.25 mm), dashed hidden lines, chain lines for centres","shadow":"none","imagery":"orthographic views, sections with hatching, exploded assemblies, dimension strings with arrowheads"}
texture: "optional: faint paper fibres, uneven exposure, light halo around the edge, cyanotype stains; keep the clean CAD variant as the default"
motion: {"language":"drawn, measured, deliberate","timing_ms":[300,600,1400],"eases":{"enter":"power2.inOut","move":"power3.inOut","exit":"power2.in"},"entrances":["stroke-dashoffset line draws at 600-1400 ms","dimension lines extend, then arrowheads and text snap on","section hatching wipes in diagonally","title block builds row by row"],"camera":"orthographic, locked; pans along the sheet; zoom into a detail circle","signature":"lines drawn on in drafting order: centre lines, outlines, hidden lines, dimensions, notes"}
space: {"2d":"native","3d":"wireframe and edge-line passes: orthographic or long-lens (200 mm) views of the object as white edges on the blue; exploded views; the object appears as a solid and resolves to line"}
good_for: ["engineering, hardware, architecture, infrastructure", "how-it-works explainers, patents, specs", "process and system diagrams, 'built' narratives"]
not_for: ["warm lifestyle", "playful consumer", "photo-led emotional stories"]
blends_with: ["cyanotype", "engraving-etching", "concrete-brutalist-3d", "banknote-guilloche"]
clashes_with: ["y2k-chrome", "frutiger-aero", "vaporwave-and-web-nostalgia"]
cheap_tells: ["a blue gradient with a few random white lines and a grid, no title block or dimensions", "dimension lines with no arrowheads or with text not on the line", "uniform line weight everywhere", "fake gibberish labels instead of plausible measurements", "perspective drawing treated as technical drawing (orthographic projection is the convention)", "glowing neon lines (blueprint is matte)", "non-monospaced decorative fonts"]
verified: {"sources_fetched":3,"non_wikipedia":0,"colours":"partial","colour_images":["https://commons.wikimedia.org/wiki/Special:FilePath/Anna_Atkins_algae_cyanotype.jpg?width=400"],"grid":"sourced","timings":"proposed","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Blueprint", "https://en.wikipedia.org/wiki/Engineering_drawing", "https://commons.wikimedia.org/wiki/File:Samuel_Hyde_Estate_Blueprint_3.png"]
tags: ["blueprint", "cyanotype", "technical-drawing", "wireframe", "iso-128", "title-block", "dimension-lines", "engineering", "white-line", "schematic"]
---
## What it is
A blueprint is a reproduction of a technical drawing in white lines on a blue ground. Sir John Herschel introduced the process in 1842; it uses ammonium ferric citrate and potassium ferricyanide, which under ultraviolet light form ferric ferrocyanide (Prussian blue). The drawing, in India ink on tracing paper, blocks the light, so its lines remain white: a negative. Development takes only water. Blueprints dominated architectural reprography until the 1940s, when diazo "whiteprints" (blue lines on white) replaced them; large xerographic machines from about 1975 and CAD finished the job. Anna Atkins used the same chemistry for Photographs of British Algae (1843-1861), the first photographically illustrated books. The grammar of what is drawn comes from technical drawing standards (ISO 128 in the international world, ASME Y14 in the US).

## The rules that make it this and not something else
- White line on Prussian blue (`#003153` is the Prussian-blue pigment value; a measured cyanotype ground is the lighter `#0b3880`). Hierarchy is by line weight and opacity.
- Line types carry meaning: continuous thick for visible edges; short dashes for hidden edges; long-short chain for centre lines; thick-or-thin dashed for cutting planes; hatching for sectioned surfaces (Engineering drawing entry).
- Dimensions: extension lines, a dimension line with arrowheads, a value on or above the line; ordinate dimensions from a zero origin are the alternative.
- Orthographic views, arranged in first-angle or third-angle projection; sections for interiors; notes in a block.
- Title block at the bottom right with ISO 7200's fields: title, creator and approver, owner, document type and number, sheet number (e.g. 5/7), date of issue.
- Scale is stated (1:1, 1:2, 2:1), sheets are A-series (A4 is 210x297 mm, A3 297x420 mm; standard ISO sizes).
- Plausible numbers. A drawing that says nothing real is decoration.
- Matte and drawn; no glow.

## Tokens decoded
- Canvas `#0b3880` (measured on a cyanotype plate) or the darker CAD reading `#003153`, line `#f4f8fb`, secondary `rgba(244,248,251,.45)`, grid `rgba(244,248,251,.12)` at 8 px and 40 px (minor and major), accent `#ffd84a` for one callout (all but the canvas are proposed, not sourced).
- Paper-print feel: tween the ground from `#c9cf8a` sensitiser to `#0b3880` over 3 s (see cyanotype); use `#003153` for a clean CAD sheet.
- Line weights at 1080p: visible 3 px, dimensions 1.5 px, hidden 1.5 px with 12-6 dash, centre 1.5 px with 24-4-4-4 chain, grid 1 px.
- Dimension arrowheads: closed filled, 10 px long, 3.5 px half-width (ISO uses about 3:1 length to width).
- Type: Share Tech Mono 22 px caps for notes, 16 px for zone letters; IBM Plex Mono for body; titles in Barlow Condensed 600 at 56 px, tracking 0.06em.
- Title block: 880x180 px, 3 rows, hairline rules; fields labelled in 11 px caps, values in 20 px.
- Sheet frame: 40 px inset border at 2 px; zone ticks every 160 px.

## Motion and camera
2D: draw in drafting order. 1) frame and grid fade in 300 ms `power2.out`; 2) centre lines draw at 600 ms `power2.inOut` (stroke-dashoffset); 3) outlines draw over 1000-1400 ms `power3.inOut`, staggered 120 ms; 4) hidden lines 500 ms; 5) dimension extension lines 350 ms, dimension line 300 ms, arrowheads pop (scale 0 -> 1, 150 ms `back.out(2)`), values type in 25 chars/s; 6) hatching wipes in at 45 degrees, 500 ms; 7) title block rows build top to bottom, 120 ms each. Callout: a circle draws around a detail (700 ms `power2.inOut`), a leader line extends, and the view zooms (scale 1 -> 2.2, 900 ms `power3.inOut`) to a detail view. Holds: 800-1200 ms after dimensions land so the numbers can be read.

3D (Rasan3D reading): white edge lines on the blue ground, drawn with the three.js fat-line addons (`lines/LineSegments2.js`, `LineSegmentsGeometry.js`, `LineMaterial.js`: pixel-width lines that do not shimmer). The object is a solid in the ground colour that hides what is behind it, so only the edges show.
```js
Rasan3D.stage({ id, canvas, timeline: tl, duration: 7,
  background: "#0b3880", environment: "none", toneMapping: "none",
  post: { grain: 0.015, vignette: 0.15 },
  camera: { pos: [[0, [32, 22, 46]], [5, [26, 18, 52], "power3.inOut"]], target: [[0, [0, 0, 0]]], lens: [[0, 200]], fstop: [[0, 22]] },   // 200 mm from about 60 m: near-orthographic
  async build(k) {
    const T = k.THREE;
    const { LineSegments2 } = await k.addon("lines/LineSegments2.js");
    const { LineSegmentsGeometry } = await k.addon("lines/LineSegmentsGeometry.js");
    const { LineMaterial } = await k.addon("lines/LineMaterial.js");
    const parts = [];
    for (const [geo, x] of [[new T.BoxGeometry(6, 2, 4), 0], [new T.CylinderGeometry(1.2, 1.2, 4.4, 48), 0], [new T.BoxGeometry(2, 1, 2.2), 0]]) {   // bracket-like parts: stand-ins for the real product CAD
      const g = new T.Group();
      g.add(new T.Mesh(geo, new T.MeshBasicMaterial({ color: "#0b3880", polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 })));   // fill hides the far edges
      const eg = new T.EdgesGeometry(geo, 25), lg = new LineSegmentsGeometry().fromEdgesGeometry(eg);
      const lm = new LineMaterial({ color: 0xf4f8fb, linewidth: 2.2, resolution: new T.Vector2(1920, 1080), toneMapped: false });   // linewidth in px
      g.add(new LineSegments2(lg, lm)); k.scene.add(g); parts.push(g);
    }
    return { parts };
  },
  pose(t, k) { const [a, b, c] = k.objects.parts;
    const u = k.prog(t, 2.2, 3.4, "expo.out");                    // the solid reads as line first, then explodes along its axes
    a.position.y = -2.2 * u; b.position.y = 0; c.position.y = 2.6 * u; },
  onDraw(t, k) { /* pin crisp DOM dimension strings to 3D points: const p = k.toScreen(new k.THREE.Vector3(3, 1, 2)); el.style.transform = `translate(${p.x}px,${p.y}px)`; hide when !p.visible */ } });
```
Notes: `fstop` is high so nothing blurs; no environment, no bloom. Hidden lines: add a second `LineSegments2` per part with a dashed `LineMaterial` (`dashed: true, dashSize: 0.3, gapSize: 0.15`, `depthFunc: T.GreaterDepth`) so it only draws where the fill occludes it (check in a still; not verified in this runtime). The reveal: a solid that resolves to line is the fill colour matching the ground while the edges stay; explode on `expo.out`, staggered 120 ms, and pin the DOM dimension strings with `k.toScreen` in `onDraw`. Not this: a neon wireframe grid floor or a spinning wireframe sphere.

## How to instruct a model to build it
Paste-ready (2D, HyperFrames, SVG + GSAP):
```
Blueprint technical drawing. Canvas #003153; grid via two repeating-linear-gradients: 8px lines rgba(244,248,251,.06), 40px lines rgba(244,248,251,.12). Sheet frame: 2px #f4f8fb border inset 40px.
Centre an orthographic front view of a bracket (draw in SVG: outline stroke #f4f8fb 3px, hidden lines 1.5px dash 12 6, centre lines 1.5px dash 24 4 4 4, hatch section lines at 45deg 1px every 8px).
Add 3 dimensions: extension lines, a dimension line with filled arrowheads 10px long, values in Share Tech Mono 22px caps: '120', '⌀ 24', 'R 8'. Title block bottom right 880x180: TITLE / DRAWN / CHECKED / OWNER / DWG NO. / SHEET 1/1 / DATE / SCALE 1:2.
Line weights hierarchical, all text caps. No glow, no gradients except the grid.
GSAP paused timeline using stroke-dashoffset: frame+grid 300ms power2.out; centre lines 600ms power2.inOut; outline 1200ms power3.inOut; hidden 500ms; dimensions: lines 300ms, arrowheads scale 0->1 150ms back.out(2), values type 25 chars/s; hatching wipe 500ms; title block rows 120ms each. Hold 1s, then zoom to a detail circle: scale 1->2.2 over 900ms power3.inOut.
```
Rasan3D: matte solid in the ground colour plus white edge pass, `lens 200`, no environment, `post {grain:.015, vignette:.15}`, then explode on `expo.out` with pinned dimension DOM.
Model notes: Claude tends to draw nice lines but skip the line-type hierarchy and title block; require both. GPT-style models add a glowing neon blue; state matte, white, flat.

## Blending notes
- Carries: white-line on blue, line-type hierarchy, title block, dimension strings, the drafting-order draw-on.
- With cassette-futurism: blueprint sheets as wall content in the same room. With terminal-crt: schematic on one screen, log on another. With swiss-international: both are rule-bound grids; Swiss supplies the type and layout, blueprint the ground.
- Breaks: chrome, gloss, gradients, anything decorative.

## Sources
- https://en.wikipedia.org/wiki/Blueprint — "white lines on a blue background, a negative of the original"; ammonium ferric citrate paper; drawings traced in India ink on tracing paper; diazo whiteprints replacing blueprints from the 1940s and large-format xerography from about 1975 (fetched).
- https://en.wikipedia.org/wiki/Engineering_drawing — visible, hidden, centre, cutting-plane, section and phantom lines; ISO 7200 title block with eight fields, usually bottom right; extension, dimension and ordinate dimensions, diameter and radius symbols; ISO A-series sheets (fetched).
- https://commons.wikimedia.org/wiki/File:Samuel_Hyde_Estate_Blueprint_3.png — a 1910 grading blueprint (Olmsted Online); sampled and found cream-grey, so it was not used for the blue (fetched).
- Colour: the Anna Atkins cyanotype plates (see the cyanotype entry) for the ground. Carried from the earlier draft and not re-fetched: Cyanotype, Technical drawing and Prussian blue (color) Wikipedia pages, and the #003153 value. No non-Wikipedia authoritative source on ISO 128 line weights was fetched: the line weights in this entry are proposed.
