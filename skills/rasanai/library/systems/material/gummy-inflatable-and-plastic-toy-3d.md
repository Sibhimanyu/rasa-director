---
id: "gummy-inflatable-and-plastic-toy-3d"
name: "Gummy, inflatable and plastic toy 3D"
kind: "material"
domain: "material"
era: "Gummy candy 1920s; Memphis 1981-1987; Koons Balloon Dog 1994-2000; inflatable 3D type 2020s"
origin: ["Hans Riegel / Haribo (gummy bears)", "Ettore Sottsass and the Memphis Group", "Jeff Koons (Balloon Dog)"]
tags: ["gummy", "inflatable", "balloon", "plastic", "toy", "playful", "3d"]
palette: {"roles":{"canvas":"#fff1f5","pink":"#ff5fa2","yellow":"#ffd21f","blue":"#1a41f2","blue_deep":"#060fbe","mint":"#5fe3c0","ink":"#1a1a2e"},"logic":"high-chroma candy colours, one per object; a translucent gummy is brighter at its thin edge and deeper where light travels through more material (measured: blue #1a41f2 body vs #060fbe core); a pastel ground keeps contrast","evidence":"blue and blue_deep measured from a Commons photo of a blue gummy bear on white https://commons.wikimedia.org/wiki/Special:FilePath/Gummy-bear_2006-06-02.jpg?width=400, k-means 7, 2026-10-03: #fefefe 68.4% (background), #060fbe 11.1%, #1a41f2 10.2%, #eaf5fb 3.2%, #5875d0 3.1%. Canvas, pink, yellow, mint and ink are proposed"}
type: {"display":{"family":"Fredoka","free_alternative":"Fredoka / Baloo 2 / Rubik / Chango","weights":[700],"case":"lowercase","tracking":0.02,"note":"Fredoka has wght 300 to 700 and a wdth axis; Baloo 2 wght 400 to 800; Rubik wght 300 to 900; Chango is a single heavy weight 400. For an inflated 3D word use the heaviest rounded face and a big bevel in k.extrudeText (TTF, not WOFF2)"},"body":{"family":"Nunito","free_alternative":"Nunito","weights":[600]},"rules":["inflate the hero word: heavy, rounded, few letters","DOM labels stay small and flat"]}
grid: {"columns":6,"baseline_px":8,"margins":"loose, floating objects with space between","rules":["objects float or sit on a pastel floor","1 to 5 objects, big, never a crowd"]}
shape: {"radius":"everything rounded and swollen; bevel radius about 30 percent of thickness","stroke":"none","shadow":"soft coloured contact shadow","imagery":"balloon dog, gummy bear, injection-moulded toy parts"}
texture: "gummy: glossy translucent with subsurface-like glow; inflatable: tight gloss with soft creases; toy plastic: SPI-style gloss to matte finish with a visible parting line"
motion: {"language":"bouncy, soft, springy","timing_ms":[250,450,900],"eases":{"enter":"back.out(1.6)","move":"power2.out","exit":"power2.in"},"entrances":["squash and spring from the floor","inflate: scale 0.2 to 1.05 to 1"],"camera":"50 to 85mm, a slight low angle, small arcs","signature":"overshoot-and-settle on every landing; a wobble after contact"}
space: {"2d":"emulate with gradients and soft shadows (weak)","3d":"native: Rasan3D gummy and plastic; see Rasan3D reading"}
good_for: ["consumer, youth, fun, food, playful brands", "kids, games, social", "friendly tech"]
not_for: ["serious, financial, security, institutional", "luxury restraint"]
blends_with: ["claymation-and-soft-clay", "glass-product-cgi"]
clashes_with: ["concrete-brutalist-3d", "engraving-etching", "blueprint-technical-drawing"]
cheap_tells: ["flat 2D gradient blob called 3D", "matte plastic with no specular so nothing reads as inflated", "all objects glowing", "default three.js sphere (torus knots are flagged by the gate)", "pastel mush with no contrast between objects"]
verified: {"sources_fetched":3,"non_wikipedia":1,"colours":"partial","colour_images":["https://commons.wikimedia.org/wiki/Special:FilePath/Gummy-bear_2006-06-02.jpg?width=400"],"grid":"proposed","timings":"proposed","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Balloon_Dog", "https://www.thebroad.org/art/jeff-koons/balloon-dog-blue", "https://en.wikipedia.org/wiki/Injection_moulding"]
---
## What it is
A family of soft-looking, high-chroma, swollen objects with three real-world anchors. Koons's Balloon Dog (1994-2000, five colours: blue, magenta, yellow, orange, red; 307.3 x 363.2 x 114.3 cm) turns an inflated balloon into mirror-polished stainless steel with a transparent colour coating; the Broad's description is that standing close "reveals one's own warped image bending across its smooth curves" (the Broad, Wikipedia). Gummy candy is the translucent version: gelatin-based, light travels through it, so the colour deepens with thickness (measured below). Injection-moulded toy plastic is the opaque version, with manufacturing evidence: parting lines and ejector pin marks "result from minute misalignments, wear, gaseous vents" and are normally hidden by designers, plus draft angles for release (Wikipedia). Memphis (Sottsass, 1981 to 1987) supplies the playful colour-and-laminate lineage; see its own entry if present.

## The rules that make it this and not something else
- Swelling: every edge rounded, bevels large, no sharp corners. A balloon has no corners because internal pressure rounds it.
- One saturated colour per object. The gummy blue measured: a body at #1a41f2 with a deeper #060fbe where the material is thick; use two tones of one hue, not a gradient to a second hue.
- Specular is the proof: a gummy needs a bright window-shaped highlight and a lighter thin edge; an inflatable needs a tight, sharp reflection of a softbox (Koons's dog is a mirror of its room).
- Contact: soft coloured shadow, objects slightly squashed where they touch the floor.
- Toy plastic keeps tell-tale manufacturing details: a parting line along the silhouette, round ejector marks on the hidden side, draft on walls. These are what separate toy from blob.
- Motion has overshoot: back-ease landings, a wobble that decays.
- Few objects, close up.

## Tokens decoded
canvas `#fff1f5`; object colours `#ff5fa2`, `#ffd21f`, `#1a41f2` (measured on a gummy), `#5fe3c0`; ink `#1a1a2e` (all but the blue proposed). Type: Fredoka 700 lowercase for labels; the hero word is extruded in 3D with a bevel about 30 to 40 percent of its depth. Toy wall thickness 2 to 3 mm at real scale (proposed).

## Motion and camera
2D (HyperFrames GSAP): inflate = `gsap.fromTo(el, { scale: 0.2 }, { scale: 1, duration: 0.45, ease: "back.out(1.6)" })`; landing squash `scaleY 0.88, scaleX 1.1` then recover over 250 ms `power2.out`; wobble `rotation` plus and minus 4 degrees decaying over 900 ms (`elastic.out(1, 0.4)`). Timings proposed. These overshoot eases only validate if the film's motion.md allows them (its `bouncier` modifier sets enter to `back.out`; stiffer or default styles ban them).

Rasan3D reading. Presets in `rasan3d.js`: `gummy` is MeshPhysicalMaterial, transmission 0.75, thickness 1.4, ior 1.38, roughness 0.18, attenuationDistance 0.5, clearcoat 1; `plastic` is roughness 0.34, clearcoat 0.4. Gummy needs an opaque stage `background` because transmission samples only what the 3D layer draws (3d.md section 5).
```js
Rasan3D.stage({ id, canvas, timeline: tl, duration: 5,
  background: "#fff1f5", environment: { preset: "soft", intensity: 0.7 }, toneMapping: "neutral",
  post: { bloom: { strength: 0.06, threshold: 1.2 } },
  camera: { pos: Rasan3D.orbit({ center: [0, 0.5, 0], radius: 3.4, height: 0.7, from: -14, to: 8, t0: 0.4, t1: 4.2, ease: "power3.inOut" }),
            target: [[0, [0, 0.45, 0]]], lens: [[0, 70]], fstop: 2.8 },
  async build(k) {
    const T = k.THREE;
    k.rig("three-point", { key: "#fff6ee", rim: "#ffb36b", shadows: true, shadowSoftness: 9 });
    k.ground({ y: 0, color: "#ffd9e6", roughness: 0.5, shadowOpacity: 0.4 });
    const gum = new T.Mesh(new T.CapsuleGeometry(0.3, 0.45, 24, 48), k.material("gummy", { color: "#1a41f2", attenuationColor: new T.Color("#060fbe"), attenuationDistance: 0.4, thickness: 1.2 }));
    gum.position.set(-0.7, 0.55, 0); gum.castShadow = true; k.scene.add(gum);
    const word = await k.extrudeText("pop", { font: "assets/fonts/Fredoka-Bold.ttf", size: 0.9, depth: 0.45, bevel: 0.16, align: "center", material: k.material("plastic", { color: "#ff5fa2", roughness: 0.15, clearcoat: 1 }) });
    word.position.set(0.7, 0.15, 0); k.scene.add(word);
    return { gum, word };
  },
  pose(t, k) { const { gum, word } = k.objects;
    const drop = 1 - k.prog(t, 0.3, 0.95, "power2.in"), land = k.prog(t, 0.95, 1.35, "expo.out");
    gum.position.y = 0.55 + 1.2 * drop;                                          // falls, then lands
    const sq = (t > 0.95 ? 1 - land : 0) * 0.14;                                   // squash then recover
    gum.scale.set(1 + sq, 1 - sq, 1 + sq);
    word.scale.setScalar(0.2 + 0.8 * k.prog(t, 0.6, 1.3, "expo.out") * 1.0);       // inflate; add a 1.05 overshoot only if motion.md allows back.out
    word.rotation.z = 0.07 * Math.sin((t - 1.3) * 9) * Math.exp(-(t - 1.3) * 3.2) * (t > 1.3 ? 1 : 0);   // decaying wobble, pure function of t
  } });
```
Only the gummy gets transmission (3d.md section 10: transmission on the hero only); the word is opaque plastic with clearcoat 1 for the sharp softbox reflection. Parting line: a thin dark `T.TorusGeometry` or line mesh around the silhouette plane (opaque, 1 to 2 mm). Lens 50 to 85 mm, `fstop` 2.8. Bloom stays barely on: glow on everything is slop.

## How to instruct a model to build it
> Inflatable candy look. The hero word extruded in Fredoka Bold with a very large bevel (`bevel` 0.16 on depth 0.45), glossy saturated pink plastic (`clearcoat` 1, roughness 0.15), over a pastel floor with a soft coloured shadow. One or two `gummy` translucent objects (set `background` so they have something to refract) with a warm rim light, colour `#1a41f2` with attenuation `#060fbe`. Landings overshoot and wobble for 900 ms; inflate from scale 0.2. 70 mm, f/2.8, one 22-degree orbit on `power3.inOut`. Transmission only on the gummy hero.
Claude respects the render budget; GPT-family models may flatten to CSS gradients, so name the 3D materials explicitly (observed tendency, not measured).

## Blending notes
Carries: swollen forms, one saturated colour per object, overshoot motion, hidden seam details. Mix with claymation for a soft tactile set (but its colour is dusty, this one candy-bright) or with glass-product-cgi for a jelly-and-glass look. Never with brutalist or engraved looks.
Unverified: the translucency parameters are three.js physical defaults and presets, not measured from a candy.

## Sources
- https://en.wikipedia.org/wiki/Balloon_Dog — five colours, 1994-2000, stainless steel with coatings, 307.3 x 363.2 x 114.3 cm (fetched).
- https://www.thebroad.org/art/jeff-koons/balloon-dog-blue — mirror-polished stainless steel with transparent colour coating; warped reflections (fetched).
- https://en.wikipedia.org/wiki/Injection_moulding — parting line and ejector marks, draft angle, wall thickness (fetched).
- Colour: Commons blue gummy bear photo, k-means (palette evidence). Not fetched: Memphis Group and Gummy candy Wikipedia pages (cited in the earlier draft; Haribo and Riegel claims removed from this version).
