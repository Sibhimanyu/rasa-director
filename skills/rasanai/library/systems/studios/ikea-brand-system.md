---
id: "ikea-brand-system"
name: "IKEA brand system"
kind: "brand-system"
era: "1943-present, Almhult, Sweden; blue-yellow logo since 1983"
origin: ["Ingvar Kamprad", "IKEA Communications AB", "Gillis Lundgren (flat-pack, 1953)"]
palette: {"roles":{"canvas":"#ffffff","ink":"#111111","secondary_ink":"#484848","brand_blue":"#0058a3","brand_yellow":"#ffdb00","offer_red":"#cc0008","surface":"#f5f5f5"},"logic":"a deliberately quiet grey-black-white shop floor so that blue, yellow and the products stand out; blue is the action colour, yellow the brand moment, red only for price offers","evidence":"partial. Blue measured from the Wikimedia Commons logo file https://commons.wikimedia.org/wiki/Special:FilePath/Ikea_logo.svg (k-means 4, 2026-10-03): #0058aa 29%, #0459a1 20%, yellow cluster #f8d815 42% (anti-aliased edges pull it off the true value). Final hexes #0058a3, #ffdb00, #111111, #484848, #f5f5f5, #cc0008 are IKEA's web tokens as listed by the third-party site oh-my-design.kr (fetched), not read from IKEA directly; the measured blue agrees within 3 units, the measured yellow is a rendering artefact so the token is kept."}
type: {"display":{"family":"Noto IKEA (modified Noto Sans, 2019; not publicly distributed)","free_alternative":"Noto Sans","weights":[400,700],"case":"mixed","tracking":0,"note":"Noto Sans is OFL on Google Fonts and has wght and wdth axes (wght 100-900), so a 400 to 700 tween is possible. The IKEA cut is described as slimmer and cleaner than Verdana (Designboom); no other alterations were documented."},"body":{"family":"Noto IKEA","free_alternative":"Noto Sans","weights":[400]},"rules":["only two weights, 400 and 700 (per oh-my-design.kr tokens)","history: IKEA Sans (a Futura adaptation) for about 50 years, Verdana from 2009, Noto IKEA from 2019 (Designboom, Wikipedia)","product names are single Swedish-style words, not codes","plain sentences, no clever copy in labels"]}
grid: {"columns":12,"baseline_px":4,"margins":"generous; spacing steps 4, 8, 12, 16, 20, 24, 32 px (web tokens)","rules":["product on white with one clear label block","price and name stacked in a fixed order","spacing from a 4 px scale"]}
shape: {"radius":4,"stroke":"2px #111111 outline for focus; thin dividers","shadow":"rgba(0,0,0,0.1) 0 4px 16px, floating elements only; product cards have none","imagery":"room sets staged to look lived-in; in 2014 about 75 percent of catalogue product images were CGI"}
texture: "none on UI; in imagery: natural light, wood, textiles, a plant, a half-drunk cup"
motion: {"language":"calm, helpful, demonstrative","timing_ms":[200,350,600],"eases":{"enter":"power2.out","move":"power2.inOut","exit":"power2.in"},"entrances":["fade-slide 12 px","flat-pack part assembling in sequence","line draw"],"camera":"locked, eye-level room sets; overhead on assembly steps","signature":"the assembly diagram: parts arrive in order, each numbered, no words"}
space: {"2d":"native; wordless instruction diagrams, flat product cards","3d":"strong: the room set as a stage with a cutaway wall, soft daylight, product CGI, dollhouse cross-section camera"}
good_for: ["consumer, home, retail, mass-market utility", "explainers that must work without language", "friendly accessible B2C"]
not_for: ["luxury", "aggressive tech/dark UI", "ironic or cynical tone"]
blends_with: ["scandinavian-modern-design", "data-journalism-isotype-neurath", "teenage-engineering", "isometric-motion", "architectural-flythrough"]
clashes_with: ["mtv-80s-idents"]
cheap_tells: ["blue and yellow splashed across every surface: in the real system the shop UI is grey-black-white and the two colours are rare", "pure #0000ff-style blue instead of a calm 0058a3 blue", "perfectly clean showroom images: IKEA stages a lived-in room", "faces and expressions on assembly figures: the manuals carry the instruction in the drawing, not the character", "Verdana or Arial claimed as 'the IKEA font'", "bouncy overshoot on parts arriving"]
verified: {"sources_fetched":5,"non_wikipedia":3,"colours":"partial","colour_images":["https://commons.wikimedia.org/wiki/Special:FilePath/Ikea_logo.svg"],"grid":"partial","timings":"proposed","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Ikea", "https://en.wikipedia.org/wiki/IKEA_Catalogue", "https://oh-my-design.kr/design-systems/ikea", "https://www.designboom.com/design/ikea-typeface-noto-google-monotype-08-23-2019/", "https://instrktiv.com/en/ikea-manual/"]
---
## What it is
IKEA's identity is built on "democratic design" (Kamprad's term, Wikipedia): affordable, well-designed furniture for the many, flat-packed and assembled by the buyer. The visual signature is the pair of Swedish national colours, blue and yellow, which the stores carry on their facades. For decades the catalogue was the main image channel: debuted 1951 (68 pages, 285,000 copies), peak 2016 at 200 million copies in 69 versions and 32 languages, ended with the 2021 edition (Wikipedia, IKEA Catalogue). Products carry one-word, mostly Swedish names because founder Ingvar Kamprad was dyslexic (Wikipedia).

## The rules that make it this and not something else
- Blue and yellow are scarce. The documented web system keeps the interface grey, black and white so the colours and products stand out; blue is the emphasised action colour (oh-my-design.kr). Red #cc0008 is reserved for offers.
- Two type weights, 400 and 700, one family. The face history is IKEA Sans (a Futura adaptation, about 50 years), Verdana from 2009, Noto IKEA from 2019, announced as supporting 800+ languages (Designboom; Wikipedia gives the 2009 and 2019 dates). Sources disagree on who drew IKEA Sans; none fetched settles it.
- Imagery is staged rooms, and CGI is on-brand: computer-generated images were introduced in 2005 to 2006, 12 percent of catalogue imagery in 2013 and 75 percent of product images (35 percent of non-product) in 2014 (Wikipedia). A believable CGI room is IKEA; a glossy product on a void is not.
- Localisation: regional editions differ (the China edition showed a smaller kitchen than the US one), so specific, local-looking rooms beat a generic home.
- Assembly instructions are the system's most distinctive motion source. Practitioner analysis of IKEA manuals (instrktiv.com): consistent-perspective 3D technical drawings rather than photos, minimal text with words only for safety-critical steps, show the finished result first, colour-code parts that must stay distinguishable in black-and-white, and design the product so the instruction stays simple. Flat-pack began in 1953 when Gillis Lundgren took the legs off a table to fit it in a car; first knock-down product 1956 (search summary; not fetched).
- UI system "Skapa": focus is a white 4 px ring inside a 2 px #111111 outline; radius 4 px, icon buttons 64 px pills (oh-my-design.kr).

## Tokens decoded
- Canvas #ffffff; surface #f5f5f5; ink #111111; body #484848; blue #0058a3 (actions, brand, one hero word); yellow #ffdb00 (one badge, flag or full-bleed beat); red #cc0008 only on a price.
- Type: Noto Sans 400 and 700 (OFL). Tokens: heading-l 28, body-m 14, label-s 12 (unitless px on the web; scale up by frame width for video: 28 maps to about 3.5 percent of frame height).
- Spacing: 4, 8, 12, 16, 20, 24, 32 px. Radius 4 px; shadow only on floating layers.
- Line art: monoline, 2 px at 1080p, black on white; arrows with a plain head.

## Motion and camera
2D (HyperFrames, GSAP): assembly-diagram logic. Parts arrive one at a time in build order, each 350 ms `power2.out` with a 120 ms stagger, small numeral under each; arrows draw with `strokeDashoffset` 400 ms `power2.inOut`; hold 800 to 1200 ms per step. Text blocks fade and rise 12 px over 350 ms `power2.out`; no `back` or `elastic` eases. Layout transitions are `power2.inOut` 350 to 600 ms. Cuts are plain; room-to-room changes use a 600 ms dissolve or a wipe along a wall line. All timings are proposals; the sources give no motion spec.
3D (Rasan3D; references/3d.md sections 3, 5, 18):
- Cutaway room: build three walls and a floor as boxes with `k.material("matte", { color: "#f2efe9" })`; leave the fourth wall absent and put the camera there. Props use `clay` or `paper`; add one rumpled or tilted item and a plant for the lived-in imperfection.
- Light: `k.rig("window", { dir: [-0.8, 0.9, 0.5], shadows: true, shadowSoftness: 10 })` with `environment: "soft"` and `toneMapping: "neutral"` so the blue and yellow stay on brand; no bloom (nothing emissive).
- Camera: `lens: [[0, 28]]` at 1.2 m height, `fstop: 4`, a 0.5 m dolly over 6 s keyed `pos` with `"power2.inOut"`; for the dollhouse view lens 85 to 135 mm from high and back to flatten perspective.
- Assembly in 3D: each part is a mesh whose `pose(t, k)` interpolates `k.prog(t, a, b, "power2.out")` from an offset position, parts staggered 120 ms; step numerals are DOM via `k.pinDom(el, { at: part, face: "camera" })`.
- `k.ground({ y: 0, color: "#ffffff", shadowOpacity: 0.2 })` for a white sweep when the 2D page is the room.

## How to instruct a model to build it
"White canvas, near-black text (#111111), secondary text #484848, Noto Sans 400 and 700 only. Blue #0058a3 appears only on the primary action or the single hero word; yellow #ffdb00 only on one badge or one full-bleed beat per film; red only on a price. 4 px corner radius, spacing from 4/8/12/16/24/32. Product names as one Swedish-style word with a plain descriptor below. Animate assembly-diagram style: parts arrive one at a time with a numeral, 350 ms power2.out, 120 ms stagger, no bounce or overshoot, arrows drawn by stroke-dashoffset. Rooms are staged with one imperfection and soft daylight." Claude over-applies brand colours: say blue and yellow are rationed and name the count. GPT-style output tends toward a spotless showroom: ask for lived-in staging (observed tendency, not tested here).

## Blending notes
Carries: rationed colour, plain labels, step-by-step assembly motion, staged-room 3D. Combines with isotype pictograms, Scandinavian modern, isometric motion and architectural fly-throughs. Breaks against dark, high-contrast tech looks (the friendliness relies on daylight and white), when yellow becomes a gradient, and with sarcastic voice. Also clashes with (no library entry): cyberpunk-neon; baroque-ornament.

## Sources
- https://en.wikipedia.org/wiki/Ikea — founding, name, democratic design, dyslexia naming, blue and yellow stores (fetched).
- https://en.wikipedia.org/wiki/IKEA_Catalogue — 1951 start, 2016 peak, font changes, CGI share, regional versions, final edition (fetched).
- https://oh-my-design.kr/design-systems/ikea — web tokens: hexes, radius, shadow, spacing, type scale, focus (fetched; third-party summary of IKEA's CSS).
- https://www.designboom.com/design/ikea-typeface-noto-google-monotype-08-23-2019/ — Noto IKEA, IKEA Sans to Verdana to Noto, 800+ languages (fetched).
- https://instrktiv.com/en/ikea-manual/ — practitioner rules for IKEA-style instruction drawings (fetched; secondary).
Unverified: yellow exact value, all motion timings, Lundgren flat-pack anecdote (search summary only), IKEA's own brand guideline (not found).
