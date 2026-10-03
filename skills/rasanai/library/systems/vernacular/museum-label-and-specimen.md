---
id: "museum-label-and-specimen"
name: "Museum label and specimen plate (accession numbers, vitrine lighting, the illustrated treatise)"
kind: "vernacular"
domain: "vernacular"
era: "Museum labels trace to c.530 BCE (Ennigaldi-Nanna's collection in Babylon); catalogue and accession practice from the 19th-century natural history museum; BHL-era plate books (stipple, lithograph, hand-colour)"
origin: ["natural history museums and herbaria", "accession and catalogue-number practice (SPNHC)", "illustrated treatises and plate books"]
palette: {"roles": {"canvas": "#efeadc", "ink": "#1a1916", "label": "#f6f2e6", "accent": "#7d2a24", "case": "#1b1d1f", "plate_blue": "#57639a", "plate_blue_light": "#a8b6d2", "plate_sepia_ink": "#453413"}, "logic": "warm cream card and rag paper for labels and plates, near-black for the case interior, one restrained accent (oxblood or an archival red) for catalogue numbers and rules. Label, accent and case hexes are proposed; plate colours are measured (see evidence); real labels use carbon-pigment ink on 100% cellulose paper (cited), so the label is black on cream", "pdoom_reading": "bone #eee9df paper, ink #0a0a0b, signal #ff4d12 (from .context/pdoom-video/docs/TREATMENT.md)", "evidence": "partial. Specimen-plate colours measured, k-means 6, 2026-10-03: Anna Atkins Polysiphonia violacea cyanotype (https://commons.wikimedia.org/wiki/Special:FilePath/Anna_Atkins_Polysiphonia_violacea.jpg?width=400) #57639a 33%, #6776aa 25%, #a8b6d2 11%; Audubon Birds of America plate 76 (https://commons.wikimedia.org/wiki/Special:FilePath/John_James_Audubons_Plate_76_-_Birds_of_America_(Virginian_Partridge).jpg?width=400) sepia ink #453413 16%, #6f5a36 16% (the scan's paper reads white #fdfdfd and was not used). A museum specimen label photograph measured grey from room light and was discarded. Label card, accent oxblood, and case black are proposed."}
type: {"display": {"family": "Cormorant Garamond / Libre Caslon Display for titles, small caps for institution", "free_alternative": "Cormorant Garamond / Libre Caslon Display", "weights": [500, 600], "case": "italic for scientific names, small caps for headings", "tracking": 0.04, "note": "Cormorant Garamond is variable wght 300-700 (use 500-600); Libre Caslon Display is single weight 400. Small caps via font-variant-caps."}, "body": {"family": "EB Garamond for labels, IBM Plex Mono for catalogue numbers", "free_alternative": "EB Garamond / IBM Plex Mono", "weights": [400, 500], "case": "mixed", "tracking": 0.0}, "rules": ["scientific binomial in italic, genus capitalised, species lowercase (Polysiphonia violacea)", "institution code plus catalogue number in mono and always together (UCM 12341, MCZ 3439, AMNH 32076 are cited examples)", "label hierarchy: title, creator, date, place, materials, then a short didactic paragraph"]}
grid: {"columns":4,"baseline_px":8,"margins":"labels are small (a 3:2 or 4:3 card) in a wide pale mount; plates are portrait with a ruled border and caption","rules":["one object, one label, no clutter","labels sit low and to one side of the object, never covering it","plates: Fig. numbers with leader lines and a scale bar"]}
shape: {"radius":0,"stroke":"hairline 1 px rules, plate mark","shadow":"soft shadow under objects in a case, none on labels","imagery":"specimens on pins, in jars, on mounts, as engraved or lithographed plates, with a ruler"}
texture: "card tooth, a faint foxing speckle, typewriter or letterpress ink on labels, glass reflections in a vitrine, a green felt or linen mount"
motion: {"language":"curatorial, slow, measured","timing_ms":[400,800,1600,3200],"eases":{"enter":"sine.out","move":"sine.inOut","exit":"sine.in"},"entrances":["a vitrine light comes up (a pool of light, edges falling to dark)","the label types or sets in line by line under the object","a leader line draws from a figure to its caption","the plate's engraved hatch fills in (see engraving-etching)"],"camera":"slow lateral track along a case; a push into one specimen; macro on a number","signature":"the accession number as a recurring graphic: each new scene is catalogued with the next number in the sequence"}
space: {"2d":"native","3d":"strong: a glass case, a specimen on a mount, spot light from above, a label card; real glass reflections, shallow depth of field"}
good_for: ["science, nature, history, archives, culture, the 'an idea as an artefact' device", "explaining a taxonomy or a collection of items", "calm, authoritative, a bit wry"]
not_for: ["fast, loud, commercial promos", "UI walkthroughs"]
blends_with: ["engraving-etching", "cyanotype", "newspaper-broadsheet", "paper-cut-and-papercraft", "banknote-guilloche", "glass-product-cgi"]
clashes_with: ["risograph-print", "screenprint", "y2k-chrome"]
cheap_tells: ["a vintage-paper texture with random Latin text and no real label structure", "scientific names in roman not italic, or both parts capitalised", "accession numbers that are random, non-sequential or without an institution code", "a vitrine lit by a flat even light so nothing has a pool or falloff", "a glass reflection that is a white gradient overlay", "every object centred at the same size with no scale reference"]
verified: {"non_wikipedia":4,"colours":"partial","colour_images":["https://commons.wikimedia.org/wiki/Special:FilePath/Anna_Atkins_Polysiphonia_violacea.jpg","https://commons.wikimedia.org/wiki/Special:FilePath/John_James_Audubons_Plate_76_-_Birds_of_America_(Virginian_Partridge).jpg"],"grid":"proposed","timings":"proposed","sources_fetched":5,"recipes":"aligned","edited":"2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Museum_label", "https://spnhc.org/labeling-natural-history-collections/", "https://spnhc.org/numbering-natural-history-collections/", "https://ccaha.org/resources/light-exposure-artifacts-exhibition", "https://commons.wikimedia.org/wiki/File:Anna_Atkins_Polysiphonia_violacea.jpg"]
tags: ["museum", "label", "specimen", "natural-history", "accession", "vitrine", "plate", "treatise", "archive"]
---
## What it is
The register of a museum or natural-history collection: an object in a case under a controlled light, a small label with its facts, a catalogue number that ties it to a record, and, in the book form, a numbered plate with a caption and scale. A museum label typically identifies the creator, title, date, location and materials, and may add a didactic paragraph on history, culture or interpretation; the earliest known labels are from Ennigaldi-Nanna's collection in Babylon around 530 BCE. In natural-history collections the label is the specimen's data: if it detaches and cannot be re-associated, the specimen has lost almost all its value, which is why catalogue numbers are on the object and on the label. The film register is the illustrated treatise: an idea presented as a catalogued thing, with dry, deadpan captions (the pdoom treatment does this on purpose).

## The rules that make it this and not something else
- **A label has fields, in order.** Title, creator or collector, date, place, materials or method, accession or catalogue number, then a short didactic line. Keep it to 40-70 words (proposed; no source figure).
- **The number is the structure.** Catalogue numbers should be unique, sequential and avoid prefixes and suffixes where possible (cited); the institution code (3-4 characters, for example UCM, MCZ, AMNH) must appear with the number in any citation. Accession numbers are the next number in the museum's sequence and are physically attached to the object. Use this for scene catalogue numbers: AMNH-style `FILM 0001, FILM 0002...`, with an invented code.
- **Permanent media.** Labels use 100% cellulose cotton or linen (rag) paper as the first choice, or buffered wood-pulp paper with a 2% calcium carbonate reserve and lignin under 1% (ISO 11108:1996, read on the SPNHC page); carbon-pigment ink (ISO 11798, from the earlier pass, not re-verified on this read); dye-based inks fade. So: black ink on cream card, no coloured type.
- **Light is a conservation decision.** Light-sensitive materials (prints, drawings, textiles, feathers, manuscripts) are shown at 50 lux maximum (50-100 lux is the standard range), with UV below 75 microwatts per lumen (0-10 is achievable). Damage is cumulative: lux times hours. The visual consequence is dim, directional light: a low ambient and a precise pool. In a film, set the case at 50-100 lux feel (dark surround) with a spot on the object, edge falloff, glass reflection.
- **Fibre-optic and LED spots** are the conventional vitrine solution because they filter UV and IR (a search summary; not in a fetched page, so treat as secondary).
- **Plates are numbered figures.** Fig. numbers, scale bars, leader lines, Latin captions (the Atkins and engraving conventions apply). Use stipple and hatching for the specimen (see engraving-etching).
- **Dry voice.** The text is factual and slightly understated; a joke is delivered as a footnote, never a punchline.

## Tokens decoded
- Label card `#f6f2e6`, ink `#1a1916`, accent `#7d2a24` for the catalogue number, mount `#2b3a33` (green felt) or `#1b1d1f` (black case): proposed. Measured plate looks: cyanotype blue `#57639a` / `#a8b6d2` (Atkins), Audubon sepia ink `#453413` / `#6f5a36`; if the plate is the hero, take these instead of the label accent.
- Label type: EB Garamond 400 at 22-26 px for body; title 34 px Cormorant Garamond 600; institution small caps 14 px with 0.14em tracking; catalogue number IBM Plex Mono 500 at 16 px in the accent.
- Scientific names: italic, e.g. `Polysiphonia violacea`; common name in roman above.
- Plate: a 2 px ruled border with a 28 px margin; `Fig. 7` in italic with a leader line (1 px) ending in a 6 px dot; scale bar 1 cm with ticks every 1 mm.
- Spot: a radial pool, centre at 100%, falling to about 12% at the label edge; case interior `#0d0e0f`.

## Motion and camera
2D:
- Light up: a radial-gradient mask grows from 0 to 70% over 1600 ms with `sine.out` as the vitrine's spot comes on; the specimen emerges from darkness.
- Label set: lines of the label appear in order with a 120 ms stagger, `power2.out`, `y: 8 -> 0`; the catalogue number lands last in the accent colour.
- Leader line: `strokeDashoffset` to 0, 400 ms `power2.inOut`; the figure number fades in at the end.
- Catalogue stamp: the next accession number increments between scenes with a 300 ms vertical roll (`power3.inOut`) in mono.
- Track: a lateral dolly along a case as `x` of the case row, 4 s `sine.inOut`; one specimen stops centre for 1.2 s. Push into the specimen 4% over 3 s.
- Camera tiers: T0/T1; no whips.

3D reading (Rasan3D): a case, a pin, a mount.
- Case: glass box with `k.material('glass')` on the front and top (transmission only on the hero; give the layer an opaque `background` `#0d0e0f` or a backdrop plane so glass has something to refract), back panel `k.material('matte', {color: '#1b1d1f'})`, floor `k.material('paper')` with a label card plane (`k.text`) at 0.07 x 0.04 m leaning against the base.
- Specimen: GLB from `assets/models/` (e.g. a shell, a beetle, a skull) with `k.material('ceramic')` or its own textures; or an extruded plate (`k.panel`) with an engraved texture.
- Light: `k.rig('top-soft',{intensity:0.5,shadows:true,shadowSize:3,shadowSoftness:4})` plus a narrow key from `k.rig('low-key',{dir:[-0.6,1,0.7],key:'#fff0d6',intensity:1.2})` at 35 degrees, `low-key` feel; `environment: 'soft'` at intensity 0.2 so the glass has something to reflect.
- Camera keys: `lens:[[0,85]]`, `fstop:2.8`, `focus:[[0,3.1],[2,2.6,"power2.inOut"]]` (a rack focus from the label's distance to the specimen's over 0.8 s, values are world distances, proposed) then a slow 15-degree arc around the case over 4 s `sine.inOut`; hold 1 s. Never a spinning specimen.
- post: `bloom` off; `grain: 0.015`; `vignette: 0.25` to match the pool of light; `lift` toward warm in the darks (proposed).
- Label stays DOM at 28 px or larger; no label text in 3D below 48 px on screen.

## How to instruct a model to build it
Paste-ready (HyperFrames HTML/CSS/GSAP):

```html
<section id="case" style="width:1920px;height:1080px;background:#0d0e0f;position:relative;overflow:hidden">
  <div id="spot" style="position:absolute;inset:0;background:radial-gradient(ellipse 38% 46% at 42% 48%, rgba(255,244,220,.95) 0%, rgba(255,244,220,.12) 100%);mix-blend-mode:screen"></div>
  <img id="obj" src="assets/specimen.png" style="position:absolute;left:30%;top:22%;width:26%">
  <aside id="label" style="position:absolute;left:62%;top:62%;width:420px;padding:22px 26px;background:#f6f2e6;color:#1a1916;font:400 22px/1.35 'EB Garamond'">
    <small style="font:500 14px 'IBM Plex Mono';letter-spacing:.14em;color:#7d2a24">XYZ 0042</small>
    <h3 style="font:600 34px 'Cormorant Garamond';margin:6px 0"><i>Polysiphonia violacea</i></h3>
    <p>Red alga. English coast, 1843. Cyanotype impression on paper.</p>
  </aside>
</section>
```
GSAP: `tl.from('#spot',{opacity:0,duration:1.6,ease:'sine.out'}).from('#obj',{opacity:0,y:12,duration:.8,ease:'sine.out'},'<.4').from('#label > *',{opacity:0,y:8,stagger:.12,duration:.4,ease:'power2.out'})`. Set the label on a catalogue number that increases per scene and carry an invented institution code.

Claude vs GPT: ask for real label fields and a catalogue sequence, and for italic binomials; models default to a decorative scroll banner and random Latin.

## Blending notes
Carries: the label format, numbered figures, pools of light, dry captions, a catalogued narrative structure. Pairs with engraving-etching (the plate), cyanotype (a specimen plate in blue), newspaper-broadsheet (the record). Breaks: bright flat lighting, neon, kinetic type, saturated colour.

## Cheap tells
- Vintage-paper texture with random Latin and no label fields; roman binomials or both parts capitalised.
- Accession numbers that are random or have no institution code; a vitrine lit by flat, even light.
- Glass faked as a white gradient overlay; every object centred at the same size with no scale reference.

## Sources
- https://en.wikipedia.org/wiki/Museum_label — what a label includes and the earliest known labels (c.530 BCE, Ennigaldi-Nanna) (fetched)
- https://spnhc.org/labeling-natural-history-collections/ — archival paper: 100% cellulose rag first choice, ISO 11108:1996, 2% calcium carbonate reserve for wood pulp; why labels are fundamental (fetched)
- https://spnhc.org/numbering-natural-history-collections/ — catalogue numbers unique, sequential, avoid prefixes/suffixes where possible (fetched)
- https://ccaha.org/resources/light-exposure-artifacts-exhibition — 50 lux maximum for sensitive objects, UV 75 microwatts per lumen maximum (0-10 achievable), lux hours accumulate (fetched)
- https://commons.wikimedia.org/wiki/File:Anna_Atkins_Polysiphonia_violacea.jpg — cyanotype plate, colour measurement (fetched via FilePath)
- Local (not a URL): .context/pdoom-video/docs/TREATMENT.md — the illustrated-treatise register. Proposed (not sourced): 40-70 word label length, ms timings, 3D parameters, institution code examples beyond those named on the SPNHC page.
