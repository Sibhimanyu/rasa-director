---
id: "cyanotype"
name: "Cyanotype (Prussian blue sun prints, Atkins botanical photograms)"
kind: "material"
domain: "material"
era: "Invented by Sir John Herschel, 1842; Anna Atkins, Photographs of British Algae, 1843-1853; later the engineer's blueprint"
origin: ["Sir John Herschel", "Anna Atkins", "botanical and engineering documentation"]
palette: {"roles":{"canvas":"#0b3880","canvas_muted":"#59659b","ink":"#cdd9e8","accent":"#99bfe9","deep":"#152449"},"logic":"two values: a blue ground and the pale of the paper where light was blocked, with blue-on-blue tones between. Measured scans of Atkins plates are a medium blue (about 45 percent lightness), not near-black Prussian: the deep blue only appears in shadow areas. Real plates range from violet-leaning #59659b to saturated #0b3880 depending on exposure, wash and scan","evidence":"measured, k-means 6, 2026-10-03, from Anna Atkins plates on Commons: https://commons.wikimedia.org/wiki/Special:FilePath/Anna_Atkins_algae_cyanotype.jpg?width=400 gave #0b3880 41.7%, #1d498f 17.5%, #6792c9 13.2%, #99bfe9 11.8%, #3f6bab 11.7%, #152449 4.1% (canvas, accent, deep); https://commons.wikimedia.org/wiki/Special:FilePath/Anna_Atkins_Saccharina_latissima.jpg?width=400 gave #59659b 47.8%, #cdd9e8 17.4%, #4f5b8d 16.8%, #434e7d 10.0% (canvas_muted, ink); the Polysiphonia violacea plate gave #57639a 32.6%, #6776aa 24.8%, #7f91ba 18.5%. Scans differ in white balance, so give a film one of the two families, not both. The specimen white is a blue-tinted pale (#cdd9e8), not pure white"}
type: {"display":{"family":"Cormorant Garamond","free_alternative":"Cormorant Garamond / EB Garamond","weights":[400,500],"case":"mixed, italic for Latin names","tracking":0.01,"note":"both OFL; Cormorant Garamond wght 300 to 700 with italics, EB Garamond wght 400 to 800 with italics (Google metadata). Hand lettering for the caption line: Homemade Apple (400) or Caveat (wght 400 to 700), sparingly"},"body":{"family":"Cormorant Garamond","free_alternative":"EB Garamond","weights":[400],"case":"mixed","tracking":0.02},"rules":["pale type on blue as if it were a second photogram (handwriting reproduced by cyanotype is cited in the Atkins book)","Latin binomials in italic; handwritten caption style at the foot of a plate","no bold; no sans serif unless it is an engineer blueprint reading"]}
grid: {"columns":1,"baseline_px":8,"margins":"wide, 8-10% of the sheet; a single specimen centred or flowing across the sheet","rules":["one specimen per plate, laid to fill the sheet","caption bottom-left in a thin hand or small caps","plate size follows Atkins' volumes: the Science Museum copy of part 1 measures 257 x 204 mm, portrait"]}
shape: {"radius":0,"stroke":"none; the edge is the shadow of the object","shadow":"none","imagery":"photograms: ferns, algae, feathers, lace, tools, hands placed on the sheet"}
texture: "paper fibre under a uniform blue wash, uneven brush edges at the sheet margin (where the sensitiser was brushed on), soft translucent fall-off where a specimen was lifted off the paper, bleached white where the object was flat on it"
motion: {"language":"exposure and wash","timing_ms":[600,1200,2400,4000],"eases":{"enter":"sine.out","move":"sine.inOut","exit":"sine.in"},"entrances":["the sheet starts pale yellow-green and darkens to blue as the exposure runs","the specimen is laid on the paper (a 400 ms drop), light sweeps across, the object lifts and leaves its white shadow","a wash: blue deepens from the edges inward over 3 s"],"camera":"top-down, locked or a slow 3% push; the sheet is a window in the sun","signature":"development: pale to blue, with the white silhouette emerging as the object is removed"}
space: {"2d":"native","3d":"possible and strong: a paper sheet on a sunlit table, objects laid on it casting real shadows, the exposure as a moving light angle; matte, never glossy"}
good_for: ["nature, science, climate, archives, craft, slow stories", "blueprint and technical-drawing blends", "a quiet, handmade, sun-lit register for a single idea"]
not_for: ["fast tech, fintech, neon, party", "multi-colour brand systems (the medium has one colour)"]
blends_with: ["engraving-etching", "blueprint-technical-drawing", "paper-cut-and-papercraft"]
clashes_with: ["screenprint", "risograph-print"]
cheap_tells: ["flat digital blue with a white vector silhouette (a real photogram has soft edges where the object stood off the paper and hairline detail where it touched)", "a gradient background in two blues instead of a wash with brush edges and fibre", "cyan #00ffff or electric blue instead of Prussian blue", "specimens that are 3D-rendered or stock icons", "a sans-serif title and a drop shadow"]
verified: {"sources_fetched":3,"non_wikipedia":1,"colours":"measured","colour_images":["https://commons.wikimedia.org/wiki/Special:FilePath/Anna_Atkins_algae_cyanotype.jpg?width=400","https://commons.wikimedia.org/wiki/Special:FilePath/Anna_Atkins_Saccharina_latissima.jpg?width=400","https://commons.wikimedia.org/wiki/Special:FilePath/Anna_Atkins_Polysiphonia_violacea.jpg?width=400"],"grid":"partial","timings":"partial","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Cyanotype", "https://collection.sciencemuseumgroup.org.uk/objects/co17028/booklet-of-photographs-of-british-algae-cyanotype-impressions-by-anna-atkins-booklet-cyanotype", "https://commons.wikimedia.org/wiki/Special:FilePath/Anna_Atkins_algae_cyanotype.jpg"]
tags: ["photographic", "cyanotype", "prussian-blue", "botanical", "photogram", "handmade", "blueprint", "monochrome"]
---
## What it is
Cyanotype is a contact-print photographic process: paper brushed with ferric ammonium citrate (or oxalate) and potassium ferricyanide is exposed to ultraviolet light, the ferric salt is reduced and combines with the ferricyanide to form ferric ferrocyanide, Prussian blue. Washing in cold water removes the unexposed, soluble salts, leaving an insoluble blue image. Herschel discovered and named it in 1842. Anna Atkins put it to use within about a year: she laid dried algae directly on the sensitised paper to make photograms, issuing Photographs of British Algae: Cyanotype Impressions from October 1843, the first book illustrated with photographic images. The look is white specimens on a blue ground, sometimes with handwritten Latin captions printed in the same blue.

## The rules that make it this and not something else
- **A single colour.** Blue ground, white light-blocked areas, intermediate blues where the object was thinner or off the paper. Toning (tea, coffee, tannic acid) can push it to brown or black, but a cyanotype that is not blue should be said to be toned.
- **The image is a shadow, not a drawing.** Edges are determined by contact: crisp where the specimen touched the paper, soft where it stood off.
- **Exposure is physical.** From a few seconds in strong direct sun to 10-20 minutes on a dull day (cited). This is the time model for a film: an exposure is a seconds-long sweep, not a fade.
- **Contact-printed at specimen scale.** Atkins' plates are 1:1 impressions of the specimen. Compose a plate with one specimen at real size, arranged to fill the sheet, not an icon centred in space.
- **Captions are handwritten and part of the print.** Atkins' book had handwritten text and many captions reproduced by cyanotype that give plants by Latin name.
- **Plate format.** The Science Museum copy of Part 1 is 257 x 204 mm (portrait), sewn in a blue wrapper, dated 1843-1853, with twelve algae in that part.
- **Edition scarcity.** Only 17 copies of Atkins' book are known; one Royal Society copy has 403 pages and 389 plates. Use as colophon material only if the film's subject is the book.

## Tokens decoded
- Ground `#0b3880` (saturated scan) or `#59659b` (violet-leaning scan), tint `#99bfe9`, specimen pale `#cdd9e8`, shadow `#152449`: all measured from Atkins plates (see palette evidence). Do not paint the whole ground as near-black Prussian `#003153`; that is the pigment, while a printed plate is a medium blue.
- Underlit stage of exposure (proposed): a yellow-green sensitiser `#c9cf8a` that darkens through `#5d9a9e` to the blue; real sensitiser looks pale yellow-green before exposure.
- Type: Cormorant Garamond 400/500 for captions, italic for Latin names; hand lettering with Homemade Apple or Caveat for the caption line, sparingly.
- Margins: leave a 6-9 percent unprinted pale border where the sheet was brushed unevenly; keep the brush edge slightly ragged (a mask with 4-8 px of noise displacement).
- Grain: paper fibre at 0.03 opacity, plus a faint vertical drying mark.

## Motion and camera
2D:
- Exposure: animate the sheet colour from sensitiser (pale yellow-green) to Prussian blue over 2400-4000 ms with `sine.inOut`, while the specimen sits in place; then remove the specimen layer (white silhouette stays) with a 600 ms `power2.out` lift (translate -12px, scale 1.02, opacity to 0) leaving its shadow behind.
- Sweep: a light sweep (a 24% wide mask passing left to right over 1200 ms) darkens the exposed area.
- Wash: edges deepen first, centre last (radial mask, 3 s, `sine.inOut`).
- Caption: the Latin name writes on by clip-path reveal at 500 ms `power2.out`, delayed 1 s after the plate resolves.
- Camera: top-down locked or `scale 1 -> 1.04` over 6 s. No tilts.

3D reading (Rasan3D): the exposure is the shot; the sheet is on a table, the specimen is an alpha-cut plane, the sun is the key.
```js
Rasan3D.stage({ id, canvas, timeline: tl, duration: 7,
  background: "#6b5a48", environment: { preset: "soft", intensity: 0.3 }, toneMapping: "neutral",
  post: { grain: 0.02 },
  camera: { pos: [[0, [0, 0.6, 0.12]], [5, [0, 0.9, 0.12], "sine.inOut"]], target: [[0, [0, 0, 0]]], lens: [[0, 85]], fstop: 4 },   // near top-down crane from 0.6 m to 0.9 m
  async build(k) {
    const T = k.THREE, sun = k.rig("window", { dir: [-0.4, 1, 0.3], key: "#fff4dc", shadows: true, shadowSize: 0.5, shadowSoftness: 2 });
    const table = new T.Mesh(new T.PlaneGeometry(3, 3), k.material("matte", { color: "#6b5a48" })); table.rotation.x = -Math.PI / 2; table.position.y = -0.002; table.receiveShadow = true; k.scene.add(table);
    const sheet = new T.Mesh(new T.PlaneGeometry(0.257, 0.204), k.material("paper", { color: "#d9dca0" }));   // sensitised paper, pale yellow-green, at the Science Museum plate size
    sheet.rotation.x = -Math.PI / 2; sheet.receiveShadow = true; k.scene.add(sheet);
    const sil = await k.image("assets/specimen-silhouette.png");       // silhouette, opaque where the specimen is (project asset)
    const lit = await k.image("assets/specimen-inverse.png");          // the inverse: opaque everywhere light reaches the paper
    const print = new T.Mesh(new T.PlaneGeometry(0.257, 0.204), new T.MeshBasicMaterial({ color: "#0b3880", alphaMap: lit, transparent: true, opacity: 0, toneMapped: false }));   // alphaMap reads the green channel
    print.rotation.x = -Math.PI / 2; print.position.y = 0.0004; k.scene.add(print);
    const spec = new T.Mesh(new T.PlaneGeometry(0.2, 0.15), new T.MeshStandardMaterial({ map: sil, alphaTest: 0.5, roughness: 1, side: T.DoubleSide }));
    spec.rotation.x = -Math.PI / 2; spec.position.y = 0.004; spec.castShadow = true; k.scene.add(spec);
    return { print, spec, sun: sun.children[0] };
  },
  pose(t, k) { const { print, spec, sun } = k.objects;
    print.material.opacity = k.prog(t, 1, 4.5, "sine.inOut");                               // exposure: the blue arrives where light reached
    sun.position.x = -4 + 3 * k.prog(t, 1, 4.5, "sine.inOut"); sun.position.y = 10;          // the sun crosses, the specimen shadow swings
    spec.position.y = 0.004 + 0.12 * k.prog(t, 5, 6, "power2.out");                          // lift: the white silhouette is left behind
    spec.rotation.z = 0.2 * k.prog(t, 5, 6, "power2.out"); } });
```
Notes: the second PNG is needed because `alphaMap` reads one channel. Hold 1 s as the specimen lifts, then the Latin caption writes on in the DOM. No bloom, no halation, no gloss. Cost: one shadow light, three planes.

## How to instruct a model to build it
Paste-ready (HyperFrames HTML/CSS/GSAP):

```html
<div id="plate" style="width:1920px;height:1080px;background:#f3f1ea;position:relative;overflow:hidden">
  <div id="blue" style="position:absolute;inset:6% 12%;background:#003153;filter:url(#brush)"></div>
  <img id="specimen" src="assets/fern-white.png" style="position:absolute;mix-blend-mode:screen;opacity:.95">
  <p id="cap" style="position:absolute;bottom:7%;left:14%;font:italic 500 28px 'Cormorant Garamond';color:#f3f1ea">Polysiphonia violacea.</p>
</div>
```
SVG `#brush`: feTurbulence baseFrequency 0.02 plus feDisplacementMap scale 14 for the ragged brush edge. GSAP: `tl.fromTo('#blue',{backgroundColor:'#c9cf8a'},{backgroundColor:'#003153',duration:3,ease:'sine.inOut'}).to('#specimen',{y:-12,scale:1.02,opacity:0,duration:.6,ease:'power2.out'},'>')`.

Claude vs GPT: ask for the specimen as a real image asset (photographed or drawn silhouette), not an emoji or SVG icon; models default to a flat vector leaf. Specify "no gradient fill; a wash with fibre texture".

## Blending notes
Carries: the single blue, the specimen at real scale, exposure as time, Latin captions. Blend with museum-label-and-specimen (the plate format) and engraving-etching (a second print voice). It breaks with any saturated second colour; a single accent would have to be a toned (brown) variant, not a new hue.

## Sources
- https://en.wikipedia.org/wiki/Cyanotype — ferric ammonium citrate and potassium ferricyanide, Herschel 1842, a few seconds in strong sun to 10-20 minutes on a dull day, cold running-water wash, toning with tea, coffee, tannic acid, commercial blueprint use 1872 to the 1940s (fetched).
- https://collection.sciencemuseumgroup.org.uk/objects/co17028/booklet-of-photographs-of-british-algae-cyanotype-impressions-by-anna-atkins-booklet-cyanotype — 257 x 204 mm, 1843-1853, Talbot copy with original blue wrapper, "white shadow" impressions (fetched).
- https://commons.wikimedia.org/wiki/Special:FilePath/Anna_Atkins_algae_cyanotype.jpg — plate image sampled for colour, with two more Atkins plates (Saccharina latissima, Polysiphonia violacea) (images fetched).
- Carried from the earlier draft and not re-fetched: Anna Atkins Wikipedia (17 copies known, Royal Society copy 403 pages and 389 plates) and the #003153 pigment value.
