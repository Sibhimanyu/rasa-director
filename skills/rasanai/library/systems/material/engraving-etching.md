---
id: "engraving-etching"
name: "Engraving and etching (burin line, cross-hatch, stipple)"
kind: "material"
domain: "material"
era: "Line engraving c.1470-1530 golden age (Durer); stipple from c.1505 (Campagnola); wood-engraved illustration at industrial scale in the 1860s-70s (Dore); still the vocabulary of banknotes, stamps and the illustrated treatise"
origin: ["Albrecht Durer", "Martin Schongauer", "Giulio Campagnola (stipple)", "Claude Mellan (swelling line)", "Gustave Dore and his block-cutters"]
palette: {"roles":{"canvas":"#e5d4b8","ink":"#2e2b29","accent":"#ff4d12","graphite":"#797167","bone_film":"#eee9df","ink_film":"#0a0a0b"},"logic":"one ink on one paper; tone is made only of line weight and spacing, so colour is a single accent used as a signal. Two registers: a period print (warm cream paper, warm near-black ink) and the pdoom treatise film (cooler bone, true black)","evidence":"period values measured, k-means 6, 2026-10-03, from Gustave Dore, London: A Pilgrimage (1872) plate scan https://commons.wikimedia.org/wiki/Special:FilePath/YCBA_London_a_Pilgrimage_10.jpg?width=500 (Yale Center for British Art): #e5d4b8 59.8%, #d4c3a8 15.0%, #524e48 12.4%, #2e2b29 5.2%, #797167 3.9%. Paper on Durer Melencolia I (Met 43.106.1) https://commons.wikimedia.org/wiki/Special:FilePath/Melencolia_I_MET_DT11879.jpg?width=500: #ddd8c8 6.8% lightest, #b3ad9d 14.1%; at 500 px the thousands of lines average to greys, so only the lightest cluster is paper. accent #ff4d12, bone_film #eee9df and ink_film #0a0a0b are the pdoom treatment palette (local file .context/pdoom-video/docs/TREATMENT.md), not measured from a print"}
type: {"display":{"family":"Cormorant Garamond","free_alternative":"Cormorant Garamond / IM Fell DW Pica / IM Fell English / EB Garamond","weights":[400,500],"case":"small caps and italic","tracking":0.02,"note":"all OFL on Google Fonts: Cormorant Garamond wght 300 to 700 with italics; IM Fell DW Pica and IM Fell English are single-weight (400) with italics, digitised from 17th-century Fell types, so they carry the period voice; EB Garamond wght 400 to 800"},"body":{"family":"EB Garamond","free_alternative":"EB Garamond","weights":[400],"case":"mixed","tracking":0},"rules":["plate captions in italic or small caps below the image","numbered figure labels, thin leader lines","long-s and ligatures only if the voice is truly 18th century; otherwise avoid"]}
grid: {"columns":2,"baseline_px":8,"margins":"plate mark: the image sits inside a thin rectangle with a wide blank margin and the caption below","rules":["an engraving is a plate: a ruled border, a caption, a number","hatch lines follow the form (contour hatching) and never run as a flat screen across a surface"]}
shape: {"radius":0,"stroke":"line weight 1-3 px at 1920 wide, swelling and tapering in one stroke","shadow":"none; shade is cross-hatching","imagery":"allegory, anatomy, machines, landscapes, creatures, all drawn as if cut into metal"}
texture: "clean cut lines with sharp ends (a burin leaves a steady, deliberate line with clean edges, per the source), paper tone and a faint plate mark; none of the soft vignette of a pencil drawing"
motion: {"language":"drawn, plotted, revealed line by line","timing_ms":[300,600,1200,2400],"eases":{"enter":"power2.inOut","move":"power2.inOut","exit":"power2.in"},"entrances":["the plate is drawn by a moving burin point that leaves a hatching behind it","tone builds: first outline, then single hatch, then cross-hatch in the shadows","a wipe revealing line density increasing over a flat bone sheet"],"camera":"locked, or a slow push in on the hatched surface so the line structure becomes the subject","signature":"a point of coloured light (the pdoom treatise uses a single orange 'spark') drawing the line; everything else is ink on bone"}
space: {"2d":"native","3d":"strong via non-photorealistic rendering: render the scene to a tone value, then replace shading with line engraving along surface parameters (see Rasan3D reading)"}
good_for: ["treatise, science, history, finance (banknote-adjacent), philosophy, long-form serious stories", "visual puns and metaphors drawn as plates", "anything that should feel authoritative and hand-made at once"]
not_for: ["bright consumer product", "kids", "fast UI demos"]
blends_with: ["banknote-guilloche", "cyanotype", "blueprint-technical-drawing", "concrete-brutalist-3d"]
clashes_with: ["glass-product-cgi", "risograph-print", "gummy-inflatable-and-plastic-toy-3d"]
cheap_tells: ["an Instagram or Photoshop 'engraving' filter laid over a photo: uniform lines that ignore the form", "hatch lines at a constant width and angle across the whole image (a screen, not a burin)", "no cross-hatching where the shadows are deepest", "lines that shimmer or alias when the camera moves (use pixel-stable line widths)", "faux-antique sepia plus a ripped-paper border as the whole concept", "mixed in a neon or glow accent bleeding across the ink"]
verified: {"sources_fetched":3,"non_wikipedia":2,"colours":"partial","colour_images":["https://commons.wikimedia.org/wiki/Special:FilePath/YCBA_London_a_Pilgrimage_10.jpg?width=500","https://commons.wikimedia.org/wiki/Special:FilePath/Melencolia_I_MET_DT11879.jpg?width=500"],"grid":"partial","timings":"proposed","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Engraving", "https://commons.wikimedia.org/wiki/File:Melencolia_I_MET_DT11879.jpg", "https://commons.wikimedia.org/wiki/Special:FilePath/YCBA_London_a_Pilgrimage_10.jpg"]
tags: ["print", "engraving", "etching", "hatching", "stipple", "intaglio", "treatise", "npr", "monochrome"]
---
## What it is
Line engraving cuts grooves into a metal plate (traditionally copper) with a hardened steel burin; the grooves hold ink and are printed under pressure (intaglio). The burin gives a steady, deliberate line with clean edges. Tone is built only from lines: parallel hatching, cross-hatching when a second set of lines crosses the first for greater density, and stippling, a dot-based method that emerged around 1505 with Giulio Campagnola. Claude Mellan used a swelling line of varying thickness to make subtle tone. Durer's work marks the golden age, roughly 1470-1530. Etching, which uses acid to corrode the plate, gradually displaced engraving because it is easier to learn. In the 19th century, wood engraving carried the look into mass illustration: Dore made more than 10,000 illustrations, and at peak output about 40 block-cutters cut his drawings into the blocks, with 241 illustrations for the Bible of Tours (1866) and 180 for London: A Pilgrimage (1872).

## The rules that make it this and not something else
- **Tone is line, not grey.** Denser, closer lines read darker and optically recede; lighter hatching reads nearer (hatching source). There is no wash, no gradient.
- **Three families of mark.** Linear hatching (parallel, following a plane), cross-hatching (layered at different angles for dark tone and texture), contour hatching (curved lines that describe form). Use contour hatching on rounded things.
- **Line weight swells and tapers.** A single stroke varies in width (the swelling line); lines end in sharp points, not round caps.
- **Cross-hatching means shadow.** Light areas get single hatch or bare paper; the deepest shadow gets two or three directions, and the darkest the blackest ink.
- **A plate has a frame.** Plate mark, ruled border, a numbered caption under the plate. Engravings are numbered figures.
- **Ink on paper, one colour.** Printed ink sits as thick deposits on paper in intaglio; the tactile quality is part of the look and is shown by rendering the ink as slightly raised (a faint highlight on line edges).
- **Nothing soft.** No blur, no glow, no vignette; the exceptions are deliberate signals (in the pdoom film, only the signal colour was allowed to glow).

## Tokens decoded
- Period print: paper `#e5d4b8`, ink `#2e2b29` (warm near-black), caption graphite `#797167`; measured from a Dore plate scan, see palette evidence. Film register (pdoom treatise): bone `#eee9df`, ink `#0a0a0b`, signal `#ff4d12` (from the treatment palette file, not a print). Pick one register: the period paper is noticeably yellower and the ink lighter than the film's.
- Line widths at 1920 px: 1.0 px light hatch, 1.6 px mid, 2.4 px shadow lines; cross-hatch angles 30 and 75 degrees from horizontal; spacing 4 to 9 px, tightening in shadow (all proposed).
- Type: Cormorant Garamond italic for captions, small caps for FIG. numbers; IM Fell DW Pica or IM Fell English for a period voice; EB Garamond for body.
- Stipple: dot radius 0.8 to 1.6 px, density by tone (proposed).
- Plate: a 2 px border, 24 to 48 px of blank margin, caption 22 to 28 px. A real plate (Durer, Melencolia I, Met 43.106.1) measures 24 x 18.5 cm: portrait, so a 16:9 film uses it as a framed plate on the ground, not full-bleed.

## Motion and camera
2D:
- Drawing-on: for each SVG path, `strokeDasharray` equals its length and `strokeDashoffset` tweens to 0, `duration: 0.6-1.2`, `ease: "power2.inOut"`; stagger outline first (0 s), then hatch layers every 0.3 s, then cross-hatch (0.6 s); the pen point is a 6 px signal-colour dot following the path (`motionPath` plugin or a computed position).
- Tone grows: a mask whose threshold rises across 1200 ms so line density increases (lines draw in but also thin to dots and back).
- Hold 800-1200 ms on the finished plate; a slow 3 percent push (`sine.inOut`, 5 s).
- Cuts: engravings cut on the beat as a plate swap (the border stays, the interior replaces over 120 ms), never a crossfade.

3D reading (Rasan3D): a real 3D scene can read as an engraving, as RasanAI's pdoom film did. The runtime has the chunks (`r3/npr` in `stage3d/glsl.js`): `r3CrossHatch(p, darkness, freq, angle)` (up to four line layers joining as it darkens, `p` in pixels so line width is pixel-stable), `r3Engrave(s, tone, lines)` (lines at integers of a surface parameter, ink from tone), `r3CrossEngraveFW(s1, fw1, s2, fw2, tone, lines1, lines2)`, `r3Stipple3FW(p, n, darkness, fw)` (dots glued to a surface) and `r3FootprintU` for raymarched surfaces.

Screen-space version (works on anything the 3D layer draws; line widths pixel-stable, lines do not follow form, so use it for background and mass):
```js
Rasan3D.stage({ id, canvas, timeline: tl, duration: 6,
  background: "#e5d4b8", environment: { preset: "soft", intensity: 0.2 }, toneMapping: "none",
  camera: { pos: [[0, [3.2, 1.4, 5]], [5, [2.2, 1.2, 4.2], "sine.inOut"]], target: [[0, [0, 0.7, 0]]], lens: [[0, 70]], fstop: 5.6 },
  async build(k) { k.rig("low-key", { key: "#ffffff", dir: [-0.7, 0.8, 0.6], intensity: 1.2, shadows: true }); /* plain matte geometry here, material k.material("matte", { color: "#ffffff" }) */ },
  graph(k) {
    k.pass("engrave", { at: "post", uniforms: { uPaper: "#e5d4b8", uInk: "#2e2b29" }, frag: `
      #include <r3/npr>
      uniform vec3 uPaper, uInk;
      void main() {
        vec4 s = r3Src(vUv);
        float tone = r3Luma(s.rgb);                                         // 1 = lit, 0 = shadow
        float ink = r3CrossHatch(gl_FragCoord.xy, 1.0 - tone, 1.0 / 6.0, 0.52);   // lines 6 px apart
        gl_FragColor = vec4(mix(uPaper, uInk, ink), 1.0);
      }` });
  } });
```
`r3Luma` and `r3Src` are in the prelude and `r3/core`; run the pass `at: "post"` so it costs once per frame, not per sample. Form-following version for hero forms: give the mesh a ShaderMaterial (cookbook in 3d.md section 18) whose fragment calls `r3Engrave(vUv.y, tone, 12.0)` on a `k.tube`, or `r3CrossEngraveFW` with two parameters, so lines follow the surface and swell into shadow. For a raymarched object use `r3Stipple3FW` with `r3FootprintU`. One accent: a single `emissive` sphere (`k.material("emissive", { color: "#ff4d12", intensity: 3 })`) with `post: { bloom: { strength: 0.6, threshold: 1.15 } }`: the engrave pass above replaces tone before bloom only if you run bloom through the stage `post`, so check the order in a still; no other glow. Hold 1 s before and after the move.

## How to instruct a model to build it
Paste-ready (2D, HyperFrames HTML/CSS/GSAP):

```html
<figure id="plate" style="width:1920px;height:1080px;background:#eee9df;position:relative;margin:0">
  <svg viewBox="0 0 1920 1080" style="position:absolute;inset:0">
    <g id="outline" fill="none" stroke="#0a0a0b" stroke-width="2" stroke-linecap="butt">...</g>
    <g id="hatch1"  fill="none" stroke="#0a0a0b" stroke-width="1.2">...</g>
    <g id="hatch2"  fill="none" stroke="#0a0a0b" stroke-width="1.2" transform="rotate(45 960 540)">...</g>
  </svg>
  <figcaption style="position:absolute;bottom:56px;left:96px;font:italic 400 26px 'Cormorant Garamond';color:#5e5b57">Fig. 3. The same object, examined.</figcaption>
</figure>
```
GSAP: set each path `strokeDasharray = len; strokeDashoffset = len`, then `tl.to('#outline path',{strokeDashoffset:0,duration:.9,ease:'power2.inOut',stagger:.05}).to('#hatch1 path',{strokeDashoffset:0,duration:.6,ease:'power2.inOut',stagger:.02},'-=.3')`. Hatch lines are generated in code per shape (a clip-path of the shape plus parallel lines), spacing proportional to tone, never a pattern image.

3D: "Rasan3D reading" above. Instruct the model to write the `npr` chunk calls by name (`r3CrossEngraveFW`, `r3Hatch`, `r3Stipple3FW`) and to set pixel-stable widths.

Claude vs GPT: both default to a soft grey-pencil look or an image filter. Say "vector lines only, 1-2.4 px, cross-hatch in the shadows, no grey fills, no gradient". A model that writes procedural hatching per shape beats a model that places an image.

## Blending notes
Carries: the single ink, hatch-as-tone, the framed plate and numbered caption. Pairs with banknote-guilloche (same intaglio family, adds the machined line), museum-label-and-specimen (the plate and label) and cyanotype (a photographic cousin). Breaks: colour fields, gradients, glow other than one signal point, any drop shadow.

## Sources
- https://en.wikipedia.org/wiki/Engraving — burin gives "a steady, deliberate appearance and clean edges", hatching, cross-hatching, stippling c.1505 (Campagnola), Mellan swelling line, golden age c.1470-1530, etching displacing engraving (fetched).
- https://commons.wikimedia.org/wiki/File:Melencolia_I_MET_DT11879.jpg — Durer, Melencolia I, 1514, engraving, plate 24 x 18.5 cm, Metropolitan Museum 43.106.1 (fetched file page; image sampled).
- https://commons.wikimedia.org/wiki/Special:FilePath/YCBA_London_a_Pilgrimage_10.jpg — Dore, London: A Pilgrimage, plate scan from the Yale Center for British Art (image fetched and sampled for colour).
- Carried from the earlier draft, not re-fetched this session: Hatching, Gustave Dore (about 40 block-cutters, 10,000+ illustrations) and Intaglio Wikipedia pages. Local: .context/pdoom-video/docs/TREATMENT.md for the film palette and the single-accent rule.
