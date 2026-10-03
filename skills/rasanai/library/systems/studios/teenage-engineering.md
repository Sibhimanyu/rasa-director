---
id: "teenage-engineering"
name: "Teenage Engineering"
kind: "studio"
era: "2005-present, Stockholm"
origin: ["Jesper Kouthoofd", "David Eriksson", "Jens Rudberg", "David Moellerstedt"]
palette: {"roles":{"canvas":"#ffffff","ink":"#000000","accent":"#ff6600","metal":"#d4d4d4","screen":"#00ff66","product_grey":"#b6b6b6","product_light":"#e3e3e3","product_warm":"#d7d2c9","product_red":"#b50d0a"},"logic":"white or raw-metal object, one signal orange, true black type; colour lives on the hardware and in single-hue screens, never in gradients","evidence":"#ff6600, #d4d4d4, #00ff66 are from the third-party CSS at blakecrosley.com (not an official TE guideline). Sampled product images from teenage.engineering (verified.colour_images, k-means, 2026-10-03; the images appear to have transparent or black backgrounds, so the black cluster is ignored): hardware greys #b6b6b6, #e3e3e3, #afafaf, #d7d2c9 (warm), and one saturated red #b50d0a on a product. The orange was not found in these samples."}
type: {"display":{"family":"monospace / pixel-grotesk, uppercase labels (TE-Regular is not distributed)","free_alternative":"Space Mono / JetBrains Mono / Silkscreen","weights":[400,700],"case":"upper","tracking":0.12,"note":"JetBrains Mono has a wght axis (100-800): tween it for emphasis. Space Mono is 400/700 only. Silkscreen (400, 700) or Pixelify Sans (wght 400-700) for pixel-screen type; DotGothic16 is single weight."},"body":{"family":"same mono, small","free_alternative":"IBM Plex Mono","weights":[400,500]},"rules":["all-caps component labels at 9-11 px with about 0.12em tracking","tabular numerals so specs align","product names as part-number codes (OP-1, PO-33, EP-133, TX-6) not words","no italics, no serif"]}
grid: {"columns":"cell grid","baseline_px":8,"margins":"tight; 1px black gaps between cells (third-party)","rules":["modular cells like a device faceplate","labels sit directly beside the control they name","product shot dominates with large white space around it"]}
shape: {"radius":0,"stroke":"1px black","shadow":"none or a single soft contact shadow under the object","imagery":"studio product renders on white; macro hardware photography; hand-drawn or pixel icon art on the devices"}
texture: "anodised aluminium, matte ABS, rubber keys, visible screws; on screen: segmented LCD or a small AMOLED with flat colour animation"
motion: {"language":"playful but mechanical; the device's own UI animates (waveforms, tape reels, bouncing level meters)","timing_ms":[100,200,400],"eases":{"enter":"steps(6) or power2.out","move":"power2.inOut","exit":"power2.in"},"entrances":["cut-in","pixel-step","slide on a rail"],"camera":"locked product shots; slow orthographic turn; macro dollies over keys","signature":"a control is pressed, a screen element answers in the same frame"}
space: {"2d":"native; faceplate UI, labelled diagrams","3d":"strong: product turntable on a seamless white sweep, orthographic-feeling long lens, rubber and aluminium materials"}
good_for: ["audio, hardware, creative-tool launches", "anything that should feel like a well-made instrument", "playful-but-precise B2C devices"]
not_for: ["warm lifestyle storytelling", "financial or institutional trust", "dense editorial explainers"]
blends_with: ["swiss-international", "ulm-braun-functionalism", "pixel-game-ui"]
clashes_with: []
cheap_tells: ["orange used as a gradient or glow instead of a flat RAL-like orange", "rounded corners on the UI cells", "sans-serif lowercase body in place of mono caps", "stock synth knobs rendered glossy", "neon-green-on-black hacker look: the TE screen is a small flat accent, not the whole canvas"]
verified: {"sources_fetched": 4, "non_wikipedia": 2, "colours": "partial", "colour_images": ["https://assets.teenage.engineering/_img/64e4bae0f6978f8fbc213275_512.webp", "https://assets.teenage.engineering/_img/654e3948255502e470bf2649_512.webp", "https://assets.teenage.engineering/_img/655f76b353ef663eb648bfd9_512.webp", "https://assets.teenage.engineering/_img/6909f5eece0edc6c5aa5ad94_512.webp"], "grid": "proposed", "timings": "proposed", "recipes": "aligned", "edited": "2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Teenage_Engineering", "https://en.wikipedia.org/wiki/Pocket_Operators", "https://blakecrosley.com/guides/design/teenage-engineering", "https://teenage.engineering/"]
---
## What it is
Teenage Engineering (TE) is a Stockholm consumer-electronics and design company founded in 2005 by Jesper Kouthoofd, David Eriksson, Jens Rudberg and David Moellerstedt. It makes synthesizers, samplers, speakers and recorders (OP-1, Pocket Operators, OP-Z, TX-6, TP-7) and collaborates with brands such as IKEA (Frekvens), Nothing, Panic (Playdate) and Capcom. Its visual identity is the product: a small number of geometric shapes, saturated flat colour, exposed construction, and screens that treat limitation as the aesthetic. The Swedish Design S jury praised the OP-1 for "a clever colour scheme and fantastic graphics" that make it "intuitive, easily accessible and incredibly inviting" (via Wikipedia).

## The rules that make it this and not something else
- A device is described as hardware first: the Pocket Operator range is literally "a bare PCB with a stand, 23 buttons, 2 dials and a screen" (Wikipedia). Show the construction, not a skin over it.
- Each model has a thematic joke or metaphor in its artwork (PO-12 Rhythm as a sewing machine, PO-14 Sub as a submarine, PO-16 Factory as a construction site: Wikipedia). One idea per device, drawn in a few flat colours.
- Names are codes plus a short descriptor; the PO-32 Tonic artwork was drawn by Kouthoofd's nine-year-old daughter, so imperfect, childlike marks are allowed on a precise object.
- Screens are tiny and single-purpose: segmented LCD on the Pocket Operators, a 2.4 in AMOLED on the OP-1 (per the third-party guide), animated with sprite-like feedback (waveforms, tape reels, bouncing levels).
- Third-party analysis reports a five-colour system (orange #ff6600, black, white, aluminium grey, OLED green) with 0 px radius. Kouthoofd is reported to use simple geometric forms and RAL colours (search summary; unverified at source).
- Product sits alone on white with generous empty space; the site is a modular card grid with thumbnails and part-number names.

## Tokens decoded
- Canvas #ffffff or aluminium #d4d4d4; ink #000000; accent #ff6600 used flat and sparingly (one object or one rule per frame); screen accent #00ff66 only inside a device screen.
- Type: an all-caps monospace at tiny sizes. Third-party scale: 9 / 11 / 13 / 16 / 22 / 48 px, hero statement at 48 px. Labels 0.12em tracked. Use Space Mono or JetBrains Mono (OFL).
- Radius 0; 1 px black cell dividers; no drop shadow beyond a contact shadow.
- Icons: 1-bit or 8-colour pixel art, 16 or 24 px grid, never smooth vector gradients.

## Motion and camera
Timings are proposed; the 100 ms hover transition is from the third-party CSS, the rest is derived from how the devices behave.

2D (HyperFrames, craft.md vocabulary): the screen answers the hand.
- Press: the control scales 1 to 0.97 in 0.06 s `power2.in` and back in 0.08 s; on the same frame a segment lights or a bar steps up (`gsap.set` at the press time, no tween). Zero latency is the character.
- Discrete movement: `steps(6)` over 0.2 s instead of a glide; a playhead steps one cell per beat with `ease: "steps(1)"` on a 16-cell row (16-step sequencer, per Wikipedia, 16 pattern slots).
- Bars and waveforms are driven by a seeded integer-frame generator (`mulberry32(frame)`), never per-frame random; sample on the frame index so seeks match.
- Hold each label 1.2 s minimum. Transitions: hard cut or a 1 px black rail slide 0.2 s `power2.out`. Camera: locked; one slow orthographic-style push of 3 percent over 6 s at most. Grade: none; the white object does the work. Sound: tiny synthesised ticks pitched to the key.
3D (Rasan3D, 3d.md sections 3, 5, 18): a device on a seamless white sweep.
- Build the body from rounded boxes via `k.panel({ width: 3.2, height: 1.2, depth: 0.25, radius: 0.04, texture: k.image(<screen png>) })` for the face and `k.THREE` `CylinderGeometry` knobs with `k.material("matte", { color: "#ff6600" })`; keys `k.material("plastic", { color: "#e3e3e3", roughness: 0.8 })`; body `k.material("brushed-metal", { color: "#d4d4d4" })`. `k.rig("top-soft", { dir: [-0.5, 0.9, 0.4], shadowSoftness: 8 })`, `k.ground({ shadowOpacity: 0.3 })` over the 2D white ground, `environment: "studio"`.
- Camera keys: `lens: [[0, 100]]` (long lens, near-ortho), `pos: [[0, [3, 2, 7]], [5, [-2, 1.6, 7], "power2.inOut"]]` for the 20 to 30 degree turn, then a macro dolly across keys `lens: [[5, 100], [7, 135, "power2.inOut"]]` with `fstop: 2.8` and `focus` keyed to the key row.
- Labels: DOM mono caps pinned with `k.pinDom(el, { at: <control mesh>, width: 0.6, height: 0.15, px, face: "object" })` and a 1 px leader drawn in 2D. Keep the screen texture unlit so its pixels stay exact (that is what `k.panel` does).

## How to instruct a model to build it
"Flat white canvas (#ffffff) with an aluminium (#d4d4d4) panel. All type in Space Mono, uppercase, 11 px at 0.12em tracking for labels, one 48 px hero line. Exactly one accent, flat orange #ff6600, on one object per frame. Corners square, 1 px black dividers, no gradients, no blur, no glow. Controls are labelled with part-number codes beside them. Animation is stepped (steps(6)) at 100 to 200 ms; every UI change answers a press on the same frame; bars and waveforms use a seeded integer-frame generator. Hold each label still 1.2 s minimum." Claude tends to add soft shadows and eased glides: forbid both. GPT-style prompts tend toward neon-green hacker UI: pin green to a single device-screen element. (Carried from the earlier pass.)

## Blending notes
Carries well: flat colour objects, mono caps labelling, part-number naming, stepped motion, one orange per frame. Pairs with `ulm-braun-functionalism` and `braun-dieter-rams-lineage` (same sober ancestry, TE adds playfulness) and `swiss-international`. Breaks with soft glass, large rounded cards, or serif editorial type; the single-orange rule breaks if blended with a multi-accent palette. The pixel-screen layer needs 1-bit art on a 16 or 24 px grid, not smooth vector.

## Sources
- https://en.wikipedia.org/wiki/Teenage_Engineering — founders, 2005, Cheap Monday and Pocket Operators, products (fetched).
- https://en.wikipedia.org/wiki/Pocket_Operators — "a bare PCB with a stand, 23 buttons, 2 dials and a screen", 16-step sequencer and 16 pattern slots (fetched).
- https://blakecrosley.com/guides/design/teenage-engineering — five-colour CSS (#ff6600, #d4d4d4, #00ff66), zero radius, 1 px gaps, 100 ms transitions (fetched; third-party interpretation).
- https://teenage.engineering/ — product list and the product images sampled for colour (fetched). The page states no colours or fonts.
- Dropped: therevolverclub.com guide (not re-read this session).
