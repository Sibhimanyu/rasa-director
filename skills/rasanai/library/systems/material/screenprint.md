---
id: "screenprint"
name: "Screenprint (serigraph, gig poster, Warhol-style spot colour and halftone)"
kind: "material"
domain: "material"
era: "Commercial screen printing from 1911; serigraphy as an art term from the 1930s; Warhol 1962-1987; hand-pulled gig posters from the late 1990s on"
origin: ["Andy Warhol", "US and Mexican gig-poster printers and studios", "Chinese block-print and Japanese stencil lineage"]
palette: {"roles":{"canvas":"#efe8d8","ink":"#1f1c16","accent":"#c1795a","accent2":"#cfa57c","accent3":"#2857ab","accent_hot":"#e8402a"},"logic":"3 to 5 flat, opaque spot colours chosen as a set, one of them often the paper left bare; overlaps are either knocked out or deliberately overprinted to make a further colour. A period WPA silkscreen reads as earthy ochres plus a near-black and a blue, not neon; the hot vermilion is the modern gig-poster register","evidence":"measured, k-means 6, 2026-10-03, from Library of Congress WPA silkscreen posters on Commons: https://commons.wikimedia.org/wiki/Special:FilePath/The_national_parks_preserve_wild_life_LOC_6629876663.jpg?width=500 (J. Hirt, 1936-1939, silkscreen on board): #c1795a 25.0%, #cfa57c 21.8%, #6f706f 17.9%, #31343f 16.5%, #564e51 13.8%, #1f1c16 5.1% (ink, accent, accent2); https://commons.wikimedia.org/wiki/Special:FilePath/Don%27t_kill_our_wild_life_LOC_6629869437.jpg?width=500 gave blues #2857ab 19.0%, #143787 18.2%, #7790b2 33.4%, ink #201221 12.7% (accent3). The photographed prints show aged paper and reproduction noise. canvas #efe8d8 and accent_hot #e8402a are proposed"}
type: {"display":{"family":"Bebas Neue","free_alternative":"Bebas Neue / Anton / Alfa Slab One / Bowlby One / Rubik Mono One","weights":[400],"case":"upper","tracking":0.01,"note":"all OFL and all single-weight (400) on Google Fonts; Bowlby One and Rubik Mono One are the heavy gig-poster slabs"},"body":{"family":"Barlow Condensed","free_alternative":"Barlow Condensed / Oswald","weights":[500,600],"case":"upper","tracking":0.04,"note":"Barlow Condensed is static weights 100 to 900; Oswald is variable wght 200 to 700"},"rules":["lettering is part of the drawing, hand-cut or hand-drawn where possible","type takes one spot colour, sometimes knocked out of a solid","dense information stack (band, venue, date, door time) at the foot of a gig poster"]}
grid: {"columns":6,"baseline_px":10,"margins":"narrow, 40px at 1920 wide; image bleeds","rules":["a single dominant image fills 60-75% of the sheet","information set in one compact block","posters are vertical; a film frame needs the sheet shown as a vertical object on a wider stage or cropped to a horizontal detail"]}
shape: {"radius":0,"stroke":"hard keyline in the darkest ink","shadow":"none","imagery":"flat-colour illustration, halftone photo, repeated panel (Warhol grid), silhouette"}
texture: "a visible ink film with slight edge squash, ink build-up at the squeegee edge, paper fibres through thin passes, halftone dots showing, registration slips of 1-3 px"
motion: {"language":"pulled, slapped, layered","timing_ms":[100,200,400,800],"eases":{"enter":"power4.out","move":"power2.inOut","exit":"power2.in"},"entrances":["a colour slaps onto the sheet in a 100 ms wipe in the squeegee direction","panel repeats stamp in on successive beats, each a different colourway","knockout: a colour is removed to reveal the one underneath"],"camera":"locked on the sheet, or a hard 2x punch into a halftone detail on a downbeat","signature":"the same image reprinted in rotating colourways on the beat (Warhol grid), with a halftone dot in every one"}
space: {"2d":"native","3d":"possible: a poster as a physical sheet pinned to a wall, a stack of prints, ink layers a hair apart; opaque matte ink, never glossy"}
good_for: ["music, events, nightlife, culture", "bold, loud brand statements", "repetition and variation as a device (the same face in 6 colourways)"]
not_for: ["quiet luxury", "dense data or small text", "hyper-real product shots"]
blends_with: ["risograph-print", "paper-cut-and-papercraft", "bauhaus-in-3d", "engraving-etching"]
clashes_with: ["glass-product-cgi", "chrome-liquid-metal-cgi", "cyanotype"]
cheap_tells: ["gradients and soft shadows (screenprint is flat ink)", "more than about 6 colours without a reason (cost is per screen; gig posters usually stay at 3-5)", "halftone applied as a Photoshop filter on top of a finished image rather than as a per-colour separation", "perfect registration on every layer", "a poster-looking template with a lorem-ipsum band name"]
verified: {"sources_fetched":4,"non_wikipedia":2,"colours":"partial","colour_images":["https://commons.wikimedia.org/wiki/Special:FilePath/The_national_parks_preserve_wild_life_LOC_6629876663.jpg?width=500","https://commons.wikimedia.org/wiki/Special:FilePath/Don%27t_kill_our_wild_life_LOC_6629869437.jpg?width=500"],"grid":"proposed","timings":"proposed","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Screen_printing", "https://anatol.com/the-art-of-screen-printing-gig-posters/", "https://commons.wikimedia.org/wiki/File:The_national_parks_preserve_wild_life_LOC_6629876663.jpg", "https://commons.wikimedia.org/wiki/Special:FilePath/Don%27t_kill_our_wild_life_LOC_6629869437.jpg"]
tags: ["print", "screenprint", "serigraph", "poster", "spot-colour", "halftone", "pop-art", "gig-poster"]
---
## What it is
Screen printing pushes ink through a mesh stencil with a squeegee, one colour per screen. It descends from Chinese block printing via Japanese Ise katagami stencils and reached Western Europe in the late 18th century; the word serigraphy was coined in the 1930s by WPA artists (Max Arthur Cohn and Anthony Velonis) to separate artistic from industrial use, and Warhol popularised it as fine art with the 1962 Marilyn Diptych (Wikipedia). The 1911 date and the 1987 end date are carried from the earlier draft and were not on the fetched pages. The WPA Federal Art Project posters (1936 to 1939 in the LOC examples) are the best documented period silkscreens: J. Hirt's "The national parks preserve wild life" is silkscreen on board. Today the gig-poster tradition keeps it alive: small runs, hand-pulled, a few spot colours chosen for impact because each extra colour costs a screen. The look is flat, opaque, saturated colour with hard edges, visible halftone where a photograph is involved, and small registration slips.

## The rules that make it this and not something else
- **Spot colour, not process.** Spot colour prints one flat colour per screen, with no halftone and an opaque result. CMYK process uses halftones and stacks four screens; the posters worth copying mostly avoid it.
- **Fewer colours is the discipline.** The gig-poster source says it is easier and more affordable the fewer colours you use, and that overprinting layers colours to make new hues without another screen. Design to 3-5 inks.
- **Overprint is a design tool.** Yellow over blue gives green without a green screen. Use `mix-blend-mode: multiply` only if the ink is meant to be translucent; opaque inks knock out.
- **Halftone is a texture and a device.** Newsprint halftone is about 85 lpi; screenprint posters use coarser, more visible dots. Warhol's Marilyn works layered flat bold areas with a visible mechanical halftone and fragmented facial detail (per a retail description of the prints; treat as secondary).
- **Colourway repetition.** Warhol's grids reuse one image in several colour combinations; the same photo screen with different base colours.
- **Substrates matter.** Warhol worked on canvas, Lenox board, Arches Aquarelle and Rives BFK. A film can show the sheet as paper stock with deckle or a canvas weave.
- **Paper acclimatises.** Gig printers condition paper to the shop; a hint of cockle or curl is correct.

## Tokens decoded
- Canvas: a warm paper tone, proposed `#efe8d8`. Keep one colour as bare paper. Period WPA palette (measured): ochre `#c1795a` and `#cfa57c`, ink `#1f1c16`, slate `#31343f`, blue `#2857ab`; modern gig-poster vermilion `#e8402a` proposed.
- A 4-ink set (proposed): ink `#16130f`, vermilion `#e8402a`, yellow `#f2b705`, blue `#1d6fa5`. Overprint of yellow on blue (multiply) gives a green near `#1a6a3a`.
- Warhol-grid colourways: swap base colour per panel (hot pink, turquoise, orange, lime) while the keyline layer stays one dark ink (colour choices proposed).
- Type: Bebas Neue or Anton upper-case for information; Alfa Slab One or Bowlby One for the band name; Barlow Condensed 500-600 for the small print (all single-weight or static; no variable axes to tween).
- Halftone: dot pitch 6-12 px on a 1920 frame, at 45 degrees; one dot size per colour layer, rotate each layer 15 degrees (screen angles of 15, 75, 0, 45 are the CMYK convention from the halftone source).
- Mesh/ink feel: a 1-2 px edge darkening on solids; a 1-3 px registration slip.

## Motion and camera
2D:
- Slap: each colour layer `gsap.from(layer, {clipPath: 'inset(0 0 0 100%)', duration: 0.1, ease: 'power4.out'})`, staggered 120 ms on the beat.
- Grid reprint: 2 x 2 or 3 x 3 panels reveal in order, one per beat, each with its own colourway (cut-in, no fade), then hold 800-1200 ms.
- Knockout: animate a layer's `clip-path` away to expose the layer beneath (200-400 ms, `power2.inOut`).
- Halftone grow: animate a mask of circles by scaling radius 0 to 1 over 400 ms (`power3.out`) so tone builds dot by dot.
- Punch-in: `scale 1 -> 2.2` on a downbeat, 160 ms `expo.out`, into the dot field.
- Camera locked, T0/T1 only; no whip pans.

3D reading (Rasan3D): prints in a real room. Each screen is a thin opaque plane, unlit so the ink hex stays exact; the sheet is lit paper; the wall is concrete so the ink reads.
```js
Rasan3D.stage({ id, canvas, timeline: tl, duration: 6,
  background: "#8f8c85", environment: { preset: "soft", intensity: 0.3 }, toneMapping: "neutral",
  post: { grain: 0.02 },
  camera: { pos: [[0, [-0.55, 0.35, 1.5]], [4.5, [0.55, 0.35, 1.35], "sine.inOut"]], target: [[0, [0, 0.3, 0]]], lens: [[0, 70]], fstop: 4, focus: [[0, 1.5]] },   // a 20-degree lateral arc across three prints
  async build(k) {
    const T = k.THREE;
    k.rig("window", { dir: [-0.8, 0.5, 0.5], shadows: true, shadowSize: 2, shadowSoftness: 6 });
    const wall = new T.Mesh(new T.PlaneGeometry(4, 2.4), k.material("concrete", { color: "#8f8c85" })); wall.position.set(0, 0.6, -0.05); wall.receiveShadow = true; k.scene.add(wall);
    const prints = [];
    for (let i = 0; i < 3; i++) {
      const g = new T.Group(); g.position.set(-0.55 + i * 0.55, 0.3, 0);
      const sheet = new T.Mesh(new T.PlaneGeometry(0.45, 0.61), k.material("paper", { color: "#efe8d8" })); sheet.receiveShadow = sheet.castShadow = true; g.add(sheet);   // 18 x 24 in, proposed
      for (const [n, c] of ["ochre", "ink", "blue"].entries()) {                                                // three screens, an opaque flat plane each
        const tex = await k.image(`assets/screens/${c}-${i}.png`);                                              // one separation per file: opaque ink, hard edge, halftone baked in
        const m = new T.Mesh(new T.PlaneGeometry(0.45, 0.61), new T.MeshBasicMaterial({ map: tex, transparent: true, toneMapped: false, depthWrite: false }));
        m.position.set(0.0015 * (n % 2 ? 1 : -1), 0.001 * (1 - n % 2), 0.0008 * (n + 1)); g.add(m);          // 1 to 2 mm registration slip
      }
      g.rotation.z = (i - 1) * 0.012; k.scene.add(g); prints.push(g);
    }
    return { prints };
  },
  pose(t, k) { k.objects.prints.forEach((g, i) => { const u = k.prog(t, 0.4 + i * 0.5, 0.9 + i * 0.5, "power4.out"); g.position.y = 0.3 + (1 - u) * 0.9; g.visible = u > 0; }); } });   // each print is pulled and pinned on a beat
```
For the Warhol grid use one plane per panel with the same keyline texture and a different base-colour texture per panel; swap on the beat with hard cuts. Opaque ink means no `MultiplyBlending` unless the ink is meant to be translucent (that is the risograph entry). Lens 50 to 85 mm, f/4; never an orbit around a poster in a void. Bloom off.

## How to instruct a model to build it
Paste-ready (HyperFrames HTML/CSS/GSAP):

```html
<div id="poster" style="width:1080px;height:1440px;background:#efe8d8;position:relative">
  <div class="screen s1" style="background:#e8402a;mask:url(#shape1)"></div>
  <div class="screen s2" style="background:#f2b705;mask:url(#shape2);mix-blend-mode:multiply;transform:translate(2px,-1px)"></div>
  <div class="screen s3" style="background:#16130f;mask:url(#keyline)"></div>
  <h1 style="font:400 220px/0.9 'Bebas Neue';color:#16130f">BAND NAME</h1>
</div>
```
Each screen is a separate flat layer with its own mask; add a halftone via an SVG pattern of circles masked by a gradient (the gradient only drives the mask, never shows). GSAP: `tl.from('.s1',{clipPath:'inset(0 0 0 100%)',duration:.1,ease:'power4.out'}).from('.s2',{clipPath:'inset(0 0 0 100%)',duration:.1,ease:'power4.out'},'+=.12')`.

Claude vs GPT: both add soft shadows and gradient fills; ban them in the brief ("flat opaque ink, no gradients, no shadows, hard keyline"). Ask for per-colour layers explicitly, otherwise the model flattens everything into one illustration.

## Blending notes
Carries: flat inks, hard keylines, halftone, repetition in colourways. Pair with risograph-print for a more translucent, softer printed look, or newspaper-broadsheet for cheap-stock authenticity. Breaks: depth of field, glass, glow, photography without halftone.
Also blends with (not library entries): pop-art.

## Sources
- https://en.wikipedia.org/wiki/Screen_printing — Chinese block printing and Ise katagami lineage, "serigraphy" coined in the 1930s by WPA artists Cohn and Velonis, Warhol's 1962 Marilyn Diptych, polyester mesh, spot colour vs CMYK process halftones (fetched).
- https://anatol.com/the-art-of-screen-printing-gig-posters/ — fewer colours is cheaper and bolder; paper warps with humidity so acclimatise; air-dry inks not heat; vacuum pallet for registration (fetched; it does not discuss spot vs process or overprint, so those statements stand on Wikipedia and the earlier draft).
- https://commons.wikimedia.org/wiki/File:The_national_parks_preserve_wild_life_LOC_6629876663.jpg — J. Hirt, WPA poster 1936-1939, silkscreen colour print on board, Library of Congress (file page fetched; image sampled).
- https://commons.wikimedia.org/wiki/Special:FilePath/Don%27t_kill_our_wild_life_LOC_6629869437.jpg — a second LOC WPA poster, sampled for blues (image fetched).
- Not re-fetched: the Warhol silk-screening retail page and the Halftone Wikipedia page (halftone angle 15, 75, 0, 45 and 85 lpi newsprint figures are from the earlier draft).
