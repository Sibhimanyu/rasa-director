---
id: "risograph-print"
name: "Risograph print (drum duplicator, soy ink, overprint)"
kind: "material"
domain: "material"
era: "Riso Kagaku digital duplicators from 1980 (Japan); zine, poster and small-press culture from the 2000s on"
origin: ["Riso Kagaku Corporation", "zine and small-press studios", "community print labs (university and library knowledge labs)"]
palette: {"roles":{"canvas":"#f4efe4","ink":"#3d5588","accent":"#ff48b0","accent2":"#ffe800","overprint":"#0078bf"},"logic":"each colour is one drum and one pass; translucent inks mix where they overlap, so the palette is a short list of inks plus what they make together. Ink hexes are the screen approximations from studio-ity (fetched this session); canvas is proposed","inks_cited":{"Black":"#000000","Red":"#FF665E","Blue":"#3D5588","Green":"#3D6730","Yellow":"#FFB511","Purple":"#3F2B6C","Violet":"#5E2D90","Brown":"#A89F94","Medium Blue":"#6F8DCE","Federal Blue":"#0078BF","Burgundy":"#765B6A","Teal":"#3D8E84","Hunter Green":"#407060","Sun Yellow":"#FFE800","Fluorescent Pink":"#FF48B0","Fluorescent Red":"#FF7477","Fluorescent Orange":"#FF6E40","Fluorescent Green":"#A4DC30"},"conflict":"naming of #0078BF and #3D5588 differs between ink-library sites (studio-ity, fetched 2026-10-03: Blue #3D5588, Federal Blue #0078BF; an earlier draft had them swapped from another site). Check a physical swatch before naming an ink in on-screen copy","evidence":"ink hexes are published screen approximations, not measured. A photograph of a real two-colour riso print (https://commons.wikimedia.org/wiki/Special:FilePath/Impress%C3%A3o_em_risografia_em_dua_cores%2C_2014.jpg?width=500, k-means 7, 2026-10-03) gave paper #e9e5e9 45.0%, pale ink wash #e4cbd5 19.1%, red #e15065 2.4%: on paper and under a camera the inks sit duller and lighter than the swatch hex, and the stock reads cool-grey rather than warm. canvas #f4efe4 stays proposed"}
type: {"display":{"family":"Archivo","free_alternative":"Archivo / Anton / Archivo Black / Bricolage Grotesque","weights":[800,900],"case":"upper or mixed","tracking":-0.02,"note":"Archivo is variable with wdth 62 to 125 and wght 100 to 900 (Google metadata): tween wdth for a stretched hit. Anton and Archivo Black are single-weight 400 blunt posters. Bricolage Grotesque has opsz, wdth and wght axes (wght 200 to 800)"},"body":{"family":"Space Grotesk","free_alternative":"Space Grotesk / IBM Plex Mono","weights":[400,500],"case":"mixed","tracking":0,"note":"Space Grotesk wght 300 to 700; IBM Plex Mono static weights 100 to 700"},"rules":["type is one ink, never a gradient","big blunt grotesk or hand-drawn lettering, set to the same drum as an image so it overprints","small mono colophon: ink names, paper stock, edition count"]}
grid: {"columns":12,"baseline_px":8,"margins":"generous, 64px at 1920 wide; the sheet is larger than the live area so crop and misregistration show at the edge","rules":["registration marks and ink swatches may sit in the outer margin","off-centre composition; shapes bleed off the sheet"]}
shape: {"radius":0,"stroke":"none or a single 2-4px drum line","shadow":"none","imagery":"flat blobs, cut shapes, halftone or grain-dithered photographs, one to three inks"}
texture: "uncoated paper tooth, ink grain from the stencil, speckle and dropout in solids, 1-3px misregistration between drums, slight ink density variation across the sheet"
motion: {"language":"printed, mechanical, stepped","timing_ms":[120,240,480,900],"eases":{"enter":"steps(4)","move":"power2.out","exit":"power2.in"},"entrances":["a drum layer slides in 6-10px off register and snaps to its final offset","a layer prints on as a wipe left to right, the way the drum rotates","cut-in on a beat, no fades"],"camera":"locked flat on the sheet; at most a slow 3-5% scale push","signature":"one ink at a time: the film builds a page pass by pass, then the overprint colour appears where two layers meet"}
space: {"2d":"native","3d":"possible: the sheet as a real paper plane, each drum a thin layer a hair above the last, seen in raking window light; never glossy, never a floating hero"}
good_for: ["zines, culture, indie music, events, small brands", "explainers that want a human, handmade, risograph-lab voice", "anything with two or three brand colours that can overprint"]
not_for: ["luxury, finance, precision engineering", "photographic realism", "dense UI walkthroughs"]
blends_with: ["screenprint", "paper-cut-and-papercraft", "cyanotype"]
clashes_with: ["glass-product-cgi", "chrome-liquid-metal-cgi", "engraving-etching"]
cheap_tells: ["a gradient fill anywhere (a riso drum has no gradient; tone is grain or halftone)", "overprint faked with opacity 50% normal blending instead of multiply, so overlaps go muddy not mixed", "misregistration so large it reads as a glitch (keep 1-3px, up to 6px on a hero)", "perfect vector edges with no grain", "more than 3-4 inks (a real job rarely exceeds four drums)", "a drop shadow"]
verified: {"sources_fetched":3,"non_wikipedia":2,"colours":"partial","colour_images":["https://commons.wikimedia.org/wiki/Special:FilePath/Impress%C3%A3o_em_risografia_em_dua_cores%2C_2014.jpg?width=500"],"grid":"proposed","timings":"proposed","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://studio-ity.com/riso/colors/", "https://guides.lib.purdue.edu/c.php?g=1478280&p=11039634", "https://en.wikipedia.org/wiki/Risograph"]
tags: ["print", "riso", "overprint", "grain", "zine", "flat-colour", "handmade"]
---
## What it is
Risograph is a digital duplicator made by Riso Kagaku and introduced in Japan in 1980. A thermal head burns microscopic holes in a master, the master wraps a drum, and soy-based ink is forced through the holes onto paper as the sheet passes. One drum is one ink, so a multi-colour print is several passes, and because the inks are translucent the overlaps mix on the page. That mechanism, not a filter, is the look: a short list of saturated inks, visible grain, small registration errors, and colours that exist only where two layers cross.

## The rules that make it this and not something else
- **One drum, one colour, one pass.** Build a page as separations, not as a full-colour image. Typical jobs use one to three inks; the Purdue lab caps jobs at four layers.
- **Translucent ink, so overprint is the colour mixing.** Use `mix-blend-mode: multiply`. Pink over yellow gives an orange the palette does not contain; blue over pink gives violet.
- **Misregistration is normal.** The lab guidance says more layers means a higher chance of registration trouble and that some misregistration "is a normal aspect" of the process. Offset each layer by 1-3 px on a 1920 wide frame (proposed; the source gives no figure).
- **Uncoated paper only.** The ink dries by absorption, so the sheet has tooth and no gloss. A coated, glossy surface is wrong.
- **Fluorescent inks are the signature.** Fluorescent Pink, Orange, Red and Green are vivid on paper and do not reproduce in CMYK; on screen they read brighter than any RGB hex, so push saturation and avoid dimming them.
- **Tone comes from grain or halftone, not gradient.** Grain-dither a photograph into each ink separately.
- **Speed and edition feel.** The machine runs about 150 pages per minute and pays off past roughly 100 copies, which is why the work looks like a small-run edition: the colophon (edition of 200, stock, inks) belongs on the sheet.

## Tokens decoded
- Canvas: warm uncoated stock, proposed `#f4efe4` (not sourced). Ink black `#000000` is the cited Black, but a riso black on screen is better set at `#1c1b1a` so it sits in the stock (proposed).
- Two-ink starter: Fluorescent Pink `#ff48b0` plus Federal Blue `#0078bf` (names per studio-ity). Overprint (multiply) of the two is a deep violet near `#7a3a9f` (computed by multiply, proposed).
- Three-ink starter: Fluorescent Pink, Sun Yellow `#ffe800`, Teal `#3d8e84`.
- Type: Archivo 800-900 for display (variable wdth axis 62 to 125), IBM Plex Mono 400 for the colophon. Anton or Archivo Black for blunt posters.
- Grain: SVG feTurbulence, baseFrequency 0.8-1.1, 2-3 octaves, thresholded into the solids so about 4-8% of a solid area drops out.
- Registration offset per layer: pink 0, blue +2px/+1px, yellow -2px/+2px (proposed).

## Motion and camera
2D: the page is printed on screen. Each ink is its own layer in a stack with `mix-blend-mode: multiply`.
- Layer enters: `gsap.from(layer, {x: -8, y: 3, opacity: 0, duration: 0.24, ease: "power2.out"})` then the layer rests at its final misregistered offset (it never lands at 0,0).
- Wipe print: animate `clip-path: inset(0 100% 0 0)` to `inset(0 0 0 0)` over 480 ms, `power2.inOut`, one ink after another, staggered 160 ms.
- Stepped grain: change the feTurbulence `seed` on twos (every other frame at 24 fps, so about 12 changes per second) so the grain boils slightly; or hold it static for a more honest print. Do not animate baseFrequency.
- Hits land on the beat as a snap of 6-10px offset closing to the resting 2px, `expo.out`, 140 ms. Holds of 600-1200 ms so type can be read.
- Camera: locked, or a 3-5% push over 4 s with `sine.inOut`. No rotation, no parallax tilt.

3D reading (Rasan3D). The sheet is a real piece of paper in a room; no spinning object, no void. Each ink is a thin plane multiplied over the paper, so overlaps mix as on a real drum.
```js
Rasan3D.stage({ id, canvas, timeline: tl, duration: 6,
  background: "#cfc8bb", environment: { preset: "soft", intensity: 0.3 }, toneMapping: "neutral",
  post: { grain: 0.03 },
  camera: { pos: [[0, [0.09, 0.05, 0.16]], [4, [0, 0.1, 0.62], "power3.inOut"]], target: [[0, [0.09, 0, 0.06]], [4, [0, 0, 0], "power3.inOut"]], lens: [[0, 85]], fstop: 4 },   // from a close misregistered edge out to the whole A3 sheet
  async build(k) {
    const T = k.THREE;
    k.rig("window", { key: "#fff4e4", dir: [-0.9, 0.35, 0.3], shadows: true, shadowSize: 0.6, shadowSoftness: 8 });   // raking light makes the paper tooth read
    const sheet = new T.Mesh(new T.PlaneGeometry(0.297, 0.42), k.material("paper", { color: "#f4efe4", bumpScale: 0.5 }));
    sheet.rotation.x = -Math.PI / 2; sheet.receiveShadow = true; k.scene.add(sheet);
    const inks = [];
    for (const [file, off] of [["pink", [0, 0]], ["blue", [0.002, -0.001]], ["yellow", [-0.002, 0.002]]]) {   // 1 to 2 mm misregistration, as on a real drum
      const tex = await k.image(`assets/riso/${file}.png`);          // one separation: opaque ink on transparent, grain-dithered, no gradients
      const m = new T.Mesh(new T.PlaneGeometry(0.297, 0.42), new T.MeshBasicMaterial({ map: tex, transparent: true, blending: T.MultiplyBlending, premultipliedAlpha: true, depthWrite: false, toneMapped: false }));
      m.rotation.x = -Math.PI / 2; m.position.set(off[0], 0.0005 * (inks.length + 1), off[1]); k.scene.add(m); inks.push(m);
    }
    return { sheet, inks };
  },
  pose(t, k) { k.objects.inks.forEach((m, i) => { m.visible = t > 0.4 + i * 0.5; }); } });   // one ink at a time: each drum pass lands on its beat
```
`MultiplyBlending` needs `premultipliedAlpha: true` in three.js; unlit (`MeshBasicMaterial`, `toneMapped: false`) keeps the ink hex exact. Cut-ins are hard (no fade): a drum landing is a cut. For a sheet lifting off a stack (flat-to-depth seam) tilt it 15 to 25 degrees, land, hold. Bloom off (nothing is HDR); keep fluorescent pink flat, do not make it glow. Cost: a handful of planes and one shadow light.

## How to instruct a model to build it
Paste-ready brief (HyperFrames HTML/CSS/GSAP):

```html
<div id="sheet" style="position:relative;width:1920px;height:1080px;background:#f4efe4;overflow:hidden">
  <svg width="0" height="0"><filter id="g"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3"/><feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -9 5"/><feComposite in2="SourceGraphic" operator="in"/></filter></svg>
  <section class="ink pink"  style="mix-blend-mode:multiply;color:#ff48b0">...shapes...</section>
  <section class="ink blue"  style="mix-blend-mode:multiply;color:#0078bf;transform:translate(2px,1px)">...shapes...</section>
  <footer style="font:400 14px 'IBM Plex Mono'">EDITION OF 200 / FLUORESCENT PINK + BLUE / UNCOATED 100gsm</footer>
</div>
```
GSAP: `tl.from('.pink', {clipPath:'inset(0 100% 0 0)', duration:.48, ease:'power2.inOut'}).from('.blue', {clipPath:'inset(0 100% 0 0)', duration:.48, ease:'power2.inOut'}, '<.16')`. Use ink colours as flat fills; no gradients, no shadows.

Claude vs GPT notes: both tend to add a drop shadow and a gradient fill by reflex, and to use `opacity:.5` instead of multiply. State "multiply, no gradients, no shadows, grain via feTurbulence" explicitly. In a blend, give each ink a role (one carries type, one carries image).

## Blending notes
Carries well: the ink-as-layer logic, grain, a hard two-ink palette, misregistration at 1-3 px. Pair with screenprint (bolder, opaque ink) or newspaper-broadsheet (halftone) for a printed-matter film. Breaks: anything with realistic depth, gloss, glow, or more than about four colours.

## Sources
- https://studio-ity.com/riso/colors/ — ink names and hex (Black, Red #FF665E, Blue #3D5588, Federal Blue #0078BF, Teal #3D8E84, Sun Yellow #FFE800, Fluorescent Pink #FF48B0 and others); "Riso inks are translucent: overlapping colors mix on the page" (fetched).
- https://guides.lib.purdue.edu/c.php?g=1478280&p=11039634 — prints cannot be more than four layers; misregistration is normal and increases with layers; wait one hour to a day between layers; at least 70 lb text or cardstock for multilayer; the lab's nine inks (fetched).
- https://en.wikipedia.org/wiki/Risograph — Riso Kagaku, 1980, thermal master and drum, soy-based ink, uncoated stock, about 150 ppm, economical past about 100 copies and below about 10,000 (fetched).
- Colour check: a Commons photograph of a two-colour riso print, sampled by k-means (palette evidence). Not re-fetched: stencil.wiki ink category (cited earlier for #0078BF and #FF48B0).
