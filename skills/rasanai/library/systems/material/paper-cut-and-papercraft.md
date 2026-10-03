---
id: "paper-cut-and-papercraft"
name: "Paper cut and papercraft (layered shadow boxes, jianzhi, kirigami, papel picado)"
kind: "material"
domain: "material"
era: "Paper cutting after paper's invention (oldest surviving cut-out: a 6th-century symmetrical circle from Xinjiang); Chinese jianzhi, Japanese kirie, Mexican papel picado, Polish wycinanki; the term kirigami popularised in the US by Florence Temko's 1962 book; the layered shadow box is a contemporary craft form"
origin: ["Chinese jianzhi (UNESCO-recognised 2009)", "Japanese kirigami and kirie", "Mexican papel picado", "Polish, Ukrainian and Belarusian wycinanki", "contemporary layered-paper and shadow-box artists (Nahoko Kojima and Giovanni Russo are named in the kirigami source)"]
palette: {"roles":{"layer_far":"#1f2a44","layer_mid":"#3b5b8c","layer_near":"#e8c07a","layer_front":"#f3ead8","accent":"#d94b3a","wycinanki_paper":"#fbf4d7","wycinanki_black":"#0d0c09","wycinanki_red":"#bf5764","wycinanki_indigo":"#4e477a"},"logic":"each paper layer is a flat, solid colour; for a depth film the colour steps from dark and cool at the back to light and warm at the front so depth reads before any shadow does, and one accent layer carries the story. The folk-tradition alternative (wycinanki) is a cream ground with black and two or three folk colours","evidence":"wycinanki_* measured from plates of Seweryn Udziela, Wycinanki ludu polskiego (1924, Biblioteka Narodowa via Polona) on Commons, k-means 7, 2026-10-03: https://commons.wikimedia.org/wiki/Special:FilePath/Wycinanki_ludu_polskiego_-_lowickie_i_kurpiowskie_1924_(74356400).jpg?width=400 gave #fbf4d7 55.4%, #f3e8cd 17.0%, #0d0c09 10.6%, #bf5764 5.3%, #be8580 4.2%; plate 74356383 gave #fcf8dd 49.4%, #cd4e64 9.0%, #4e477a 7.6%. These are printed, aged reproductions (colours muted by the scan). The far/mid/near/front depth ramp and accent #d94b3a are proposed: the sources define the technique, not a film palette"}
type: {"display":{"family":"Fredoka","free_alternative":"Fredoka / Baloo 2 / Stardos Stencil / Big Shoulders Stencil","weights":[600,700],"case":"upper or mixed","tracking":0.02,"note":"Stardos Stencil (400, 700) and Big Shoulders Stencil (wght 100 to 900, opsz axis) are the cut-from-one-sheet faces: stencil bridges keep the counters of O, A, B from falling out. Fredoka (wght 300 to 700, wdth axis) and Baloo 2 (400 to 800) are rounded display for cut shapes"},"body":{"family":"Nunito","free_alternative":"Nunito / DM Sans","weights":[400,500],"case":"mixed","tracking":0},"rules":["display letters must be cuttable: stencil bridges on O A B D P Q R, 8-12 px minimum bridge at 1920 wide","body text stays small, on a flat paper tag layer in the foreground, readable, not cut","type is a layer: it casts a shadow on the one beneath"]}
grid: {"columns":12,"baseline_px":8,"margins":"inside a frame (a shadow box, window or arch) 6-8% from the edge","rules":["composition built from 4-7 depth layers, never one","each layer overlaps the one behind it by 6-12% so the shadows read","negative shapes (the holes) tell the story: the cutout is the picture"]}
shape: {"radius":"cut corners round at 4-12 px, as a knife or punch would leave them; no sub-4 px details","stroke":"none; the shape is the edge","shadow":"soft, directional, offset down-right, widening with the gap between layers","imagery":"landscapes, skylines, forests, animals, mountains, flowers, silhouettes, scenes seen through windows"}
texture: "paper fibre and a faint grain; a thin white core line at the cut edge (the paper's cut edge shows lighter than the face); slight curl at corners; matte"
motion: {"language":"layered parallax, stop-motion on twos, assembled by hand","timing_ms":[160,320,640,1400],"eases":{"enter":"back.out(1.4)","move":"power2.inOut","exit":"power2.in"},"entrances":["layers slide in from the sides in depth order, back to front, 100-160 ms apart","a cut shape unfolds (kirigami): a flat sheet opens into relief over 640 ms","a figure is pulled across on a stick, with a 2-3 px wobble (stop-motion on twos)","paper flips: a layer rotates on a hinge at its edge"],"camera":"a slow lateral parallax truck or a dolly in; the layers move at different rates","signature":"depth you can see in the shadows: every layer casts a soft shadow on the next; the camera's parallax proves it"}
space: {"2d":"native: stacked divs with box-shadow/filter drop-shadow and differing parallax speed","3d":"strong: stacked planes with z offsets 0.02-0.1, k.material('paper'), k.rig('window') with soft shadows, a shallow depth of field"}
good_for: ["children, families, storybooks, craft, culture, nature", "festival and heritage stories (papel picado, jianzhi)", "explaining a layered system (layers of a stack, a map, the atmosphere) in a warm way", "any story where handmade warmth beats polish"]
not_for: ["tech precision, data-dense UIs", "dark, cinematic horror", "luxury minimalism"]
blends_with: ["risograph-print", "screenprint", "cyanotype", "claymation-and-soft-clay"]
clashes_with: ["glass-product-cgi", "chrome-liquid-metal-cgi", "banknote-guilloche"]
cheap_tells: ["layers with no shadows (flat vector collage) or with identical blurry shadows on everything", "layers evenly spaced and equally sized so there is no depth hierarchy", "every shape smooth vector, with no cut-edge white core, no corner rounding, no grain", "a glossy plastic look, a gradient in each layer, or a lens flare", "parallax at a constant, linear speed so it reads as a UI effect", "letters cut with no bridges", "a fake 'cut out' sticker outline instead of stacked layers"]
verified: {"sources_fetched":4,"non_wikipedia":3,"colours":"partial","colour_images":["https://commons.wikimedia.org/wiki/Special:FilePath/Wycinanki_ludu_polskiego_-_lowickie_i_kurpiowskie_1924_(74356400).jpg?width=400","https://commons.wikimedia.org/wiki/Special:FilePath/Wycinanki_ludu_polskiego_-_lowickie_i_kurpiowskie_1924_(74356383).jpg?width=400"],"grid":"proposed","timings":"proposed","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Papercutting", "https://artbubbles.com/blogs/how-to-make-a-3d-layered-paper-craft-shadow-box-design", "https://commons.wikimedia.org/wiki/File:Wycinanki_ludu_polskiego_-_lowickie_i_kurpiowskie_1924_(74356400).jpg", "https://commons.wikimedia.org/wiki/Special:FilePath/Wycinanki_ludu_polskiego_-_lowickie_i_kurpiowskie_1924_(74356383).jpg"]
tags: ["paper", "papercut", "kirigami", "shadow-box", "layered", "craft", "handmade", "parallax", "stop-motion"]
---
## What it is
Papercutting is the art of designs cut from a single sheet, as opposed to collage from several. It is old and widespread: the oldest surviving cut-out is a symmetrical circle from Xinjiang, from the 6th-century Six Dynasties period; Chinese jianzhi (UNESCO-recognised in 2009) often uses zodiac animals and red; Japanese kirigami and kirie rest on washi (the current Wikipedia text dates the Sekishu washi that became the standard cutting paper to about 800 AD; an earlier draft said 610 AD, which the page no longer supports); Mexican papel picado cuts tissue paper with scissors or chisels into banners; the Slavic wycinanki (Poland, Ukraine, Belarus) use roosters, flowers and holiday scenes (Belarus's tradition gained UNESCO recognition in 2024); Seweryn Udziela's 1924 plates of the Lowicz and Kurpie styles, held by the National Library of Poland, are the measured colour source here. Kirigami is origami plus cutting: the paper is cut as well as folded into a three-dimensional design, usually without glue (the term was popularised in the US by Florence Temko's 1962 book). The layered shadow box, a contemporary craft, stacks several cut sheets with foam spacers so light and shadow create depth; with LED backlight the light shines through the cut-outs. The film register is: flat coloured papers, cut shapes, real shadows between layers, and a camera that moves in parallax.

## The rules that make it this and not something else
- **Depth is layers.** 4-7 sheets, each a flat colour, front layer lightest and most prominent, background layers darker with supporting detail (the craft guidance says the front layer carries the most prominent elements while the back layers hold supporting detail, with cutouts letting light through).
- **Spacing makes the shadows.** Real builds separate layers with foam spacers of about 1/32 in to 1/8 in or more, and can mix spacer sizes for emphasis. In 3D, translate that to z offsets of 0.02-0.1 (m) between sheets in Rasan3D; use 0.02 for subtle, 0.06-0.1 for strong depth.
- **Medium-weight paper.** Cardstock around 65 lb is a recommendation from a craft guide; coloured-core stock avoids a white fray on intricate cuts. In a film: a faint lighter core line at every cut edge.
- **A frame.** The classic form sits in a shadow box (a 9 x 9 in frame at least 1.5 in deep is the craft-guide example); a window, an arch or a rounded frame sets the stage.
- **Cuttability is a constraint.** Every shape must be connected to its sheet: stencil bridges in letters, no floating islands. Round the corners.
- **Symmetry is traditional.** Folded-and-cut forms (snowflakes, jianzhi, papel picado) are symmetrical; use mirrored cuts for ornament, asymmetric cuts for landscapes.
- **Vellum and translucent layers** give glow when lit from behind or above (craft guide): use for fog, windows, lanterns.
- **Light, direction and shadow agree.** One key, one shadow direction (down-right is the usual); shadows lengthen with layer gap and soften with distance.

## Tokens decoded
- Layer colours (proposed): far `#1f2a44`, mid `#3b5b8c`, near `#e8c07a`, front `#f3ead8`, accent `#d94b3a`. Keep saturation low at the back and highest at one story layer.
- Shadow per layer: `filter: drop-shadow(0 6px 8px rgba(0,0,0,0.28))` for a near layer, `drop-shadow(0 14px 18px rgba(0,0,0,0.22))` for a far gap; the shadow offset equals the layer gap times 90 (proposed mapping from z gap to px at 1920).
- Cut edge: a 1 px inner stroke in `rgba(255,255,255,0.35)` for the fibre-core highlight, corner radius 6 px on shapes, tiny noise at 0.03 opacity for paper grain.
- Type: Fredoka 600 for cut rounded display (OFL); a stencil face with bridges for letters that must read as cut from one sheet; Nunito 400 for tag text.
- Parallax rates (camera truck of 200 px): far 0.2x, mid 0.45x, near 0.8x, front 1.2x (proposed).

## Motion and camera
2D:
- Build: each layer `gsap.from(layer, {x: i % 2 ? 120 : -120, opacity: 0, duration: 0.32, ease: 'back.out(1.4)'})`, staggered 140 ms from back to front; when the front layer lands, hold 600 ms.
- Parallax: `gsap.to(layers, {x: (i) => -200 * rate[i], duration: 4, ease: 'sine.inOut'})` with a rate array; the shadows stay offset (they move with their layers).
- Stop-motion feel: quantise a character's position with `ease: 'steps(12)'` (twos at 24 fps) and add 2-3 px jitter (seeded; no `Math.random` in scenes).
- Kirigami unfold: scaleY 0 -> 1 on a hinge (transform-origin bottom), 640 ms, `power3.out`, each fold part 80 ms apart.
- Flip: `rotateX` -90 -> 0 around the top edge, 320 ms `power2.out`, a shadow grows beneath.
- Camera: T1: a slow push of 4% or a lateral truck of 200 px over 4 s; avoid whips.

3D reading (Rasan3D): a natural 3D family. `k.svg(svgText, { width, depth, bevel, material })` extrudes each SVG path and honours holes. Note that `depth` and bevel values are in SVG units and the group is then scaled to `width` world metres: for a 1920-unit-wide SVG at `width: 6` the scale is 0.003, so `depth: 0.7` is about 2 mm and `bevel: false` keeps cut edges square. `k.material("paper", { color })` is a MeshStandardMaterial, roughness 1, a faint noise bump, double sided.
```js
Rasan3D.stage({ id, canvas, timeline: tl, duration: 6,
  background: "#14192b", environment: { preset: "soft", intensity: 0.35 }, toneMapping: "neutral",
  post: { grain: 0.02, vignette: 0.15 },
  camera: { pos: [[0, [-0.35, 0.05, 4.6]], [4.5, [0.35, 0.05, 4.2], "sine.inOut"]], target: [[0, [0, 0, 0]]], lens: [[0, 60]], fstop: 3.2, focus: [[0, 4.4]] },   // lateral move of 0.7 m plus a 0.4 m push: parallax proves the layers
  async build(k) {
    const layers = [], cols = ["#1f2a44", "#3b5b8c", "#e8c07a", "#f3ead8"], gaps = [-0.18, -0.12, -0.05, 0];
    k.rig("window", { dir: [-0.5, 0.7, 0.5], shadows: true, shadowSize: 4, shadowSoftness: 6 });
    for (let i = 0; i < cols.length; i++) {
      const svg = await (await fetch(`assets/cut/layer${i}.svg`)).text();   // path with holes (fill-rule: evenodd), corners rounded 6 px; project-root relative asset
      const g = await k.svg(svg, { width: 6, depth: 0.7, bevel: false, material: k.material("paper", { color: cols[i] }) });
      g.position.z = gaps[i]; k.scene.add(g); layers.push(g);
    }
    k.ground({ y: -5, shadowOpacity: 0 });
    return { layers };
  },
  pose(t, k) { k.objects.layers.forEach((g, i) => { g.position.x = (1 - k.prog(t, i * 0.14, i * 0.14 + 0.5, "power3.out")) * (i % 2 ? 0.8 : -0.8); }); }   // slide in back to front, 140 ms apart
});
```
Light and shadow: only the key (`window` rig, `shadows: true`) casts, so each sheet drops a soft shadow on the one behind; gaps of 0.05 to 0.07 m between neighbours read as subtle, 0.1 as strong (proposed mapping from the 1/32 to 1/8 in craft spacers, scaled up to a film frame). Glow behind vellum: an `emissive` plane at intensity 1.2 to 2 behind a translucent layer, one light only. Camera: 50 to 85 mm, f/2.8 to 4 so far layers go soft; lateral arc or a 0.2 m push, `sine.inOut` or `power3.inOut`, hold 1 s; not a spin. A layer can lift out of the stack (flat-to-depth seam): lay it out with `k.layout({ at: 0 })`. Cost: shadows on the key only; 5 to 7 planes are cheap. Stepped stop-motion variant: quantise `t` to 1/12 s in `pose`, `motionBlur: false`, `data-finish-blur="off"` on the frame root (see claymation-and-soft-clay).

## How to instruct a model to build it
Paste-ready (HyperFrames HTML/CSS/GSAP):

```html
<div id="box" style="width:1920px;height:1080px;background:#1f2a44;position:relative;overflow:hidden">
  <svg class="layer" data-rate="0.2" style="--c:#2a3a5c"></svg>  <!-- far hills -->
  <svg class="layer" data-rate="0.45" style="--c:#3b5b8c"></svg> <!-- mid trees -->
  <svg class="layer" data-rate="0.8" style="--c:#e8c07a"></svg>  <!-- near ridge -->
  <svg class="layer" data-rate="1.2" style="--c:#f3ead8"></svg>  <!-- front grass + tag -->
</div>
<style>.layer{position:absolute;inset:0;fill:var(--c);filter:drop-shadow(0 10px 12px rgba(0,0,0,.25))}</style>
```
GSAP: `layers.forEach((el,i)=>tl.from(el,{x:i%2?120:-120,opacity:0,duration:.32,ease:'back.out(1.4)'},i*.14)); tl.to(layers,{x:(i,el)=>-200*el.dataset.rate,duration:4,ease:'sine.inOut'},'>.6')`. Each SVG is a path with holes (`fill-rule: evenodd`), rounded corners, and 6-12% overlap with the layer behind.

Claude vs GPT: models tend to draw one flat illustration. Say "build 5 separate SVG layers with holes, each with its own drop-shadow, different parallax rates, no gradients". For 3D, ask for z offsets in metres and a single key light.

## Blending notes
Carries: stacked flat layers, soft directional shadows, handmade edges, parallax. Blends well with risograph-print and screenprint (flat colour logic; keep the shadows from the paper layer and the grain from the print layer), cyanotype (a blue cut-paper night scene) and museum-label-and-specimen (a shadow box is a vitrine). Breaks: glass, chrome, precision geometric rosettes, hyper-real lighting.

## Sources
- https://en.wikipedia.org/wiki/Papercutting — single sheet vs collage, oldest surviving cut-out (6th-century symmetrical circle, Xinjiang), jianzhi on UNESCO list 2009, papel picado from tissue with scissors or chisels, wycinanki roosters and flowers (Belarus 2024), Sekishu washi about 800 AD (fetched).
- https://artbubbles.com/blogs/how-to-make-a-3d-layered-paper-craft-shadow-box-design — 65 lb cardstock, coloured core against fraying, foam dots and tape for depth and light gaps, 9 x 9 in frame at least 1.5 in deep, vellum for backlight, LED strips (fetched). The 1/32 to 1/8 in spacer figure came from a search summary and was not on this page.
- https://commons.wikimedia.org/wiki/File:Wycinanki_ludu_polskiego_-_lowickie_i_kurpiowskie_1924_(74356400).jpg — Seweryn Udziela, Wycinanki ludu polskiego (1924), National Library of Poland via Polona; image used for colour sampling (fetched).
- https://commons.wikimedia.org/wiki/Special:FilePath/Wycinanki_ludu_polskiego_-_lowickie_i_kurpiowskie_1924_(74356383).jpg — a second plate from the same publication, sampled for colour (image fetched).
- Not re-fetched: the Kirigami Wikipedia page (Temko 1962 claim carried from the earlier draft, treat as unverified).
