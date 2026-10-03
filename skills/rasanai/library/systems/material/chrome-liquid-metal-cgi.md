---
id: "chrome-liquid-metal-cgi"
name: "Chrome and liquid metal CGI"
kind: "material"
domain: "material"
era: "1976 environment mapping; T-1000 1991; Y2K chrome type ~1998-2003; 2020s revival"
origin: ["James Blinn and Martin Newell (environment mapping, 1976)", "ILM / Dennis Muren (T-1000, Terminator 2, 1991)"]
tags: ["chrome", "metal", "reflection", "liquid", "mercury", "environment", "3d"]
palette: {"roles":{"canvas":"#05060a","chrome_high":"#f4f7ff","chrome_mid":"#8b8d8d","chrome_low":"#1a1b1b","reflected_sky":"#b3cbe1","accent":"#ff3d2e"},"logic":"chrome has no colour: it is the environment it reflects. The palette is a controlled studio: a near-white, a mid grey, a near-black, one cool sky-blue reflection, and one coloured light that lands in the reflections","evidence":"chrome_high (#f4f7ff), canvas (#05060a) and accent (#ff3d2e) proposed. chrome_mid, chrome_low and reflected_sky measured from https://commons.wikimedia.org/wiki/Special:FilePath/1954_Ford_Chrome_Bumper_Detail_(2638081050).jpg?width=400, k-means 6, 2026-10-03: #aeafac 27.7%, #8b8d8d 20.0%, #b3cbe1 16.3%, #696b6d 15.0%, #44474a 12.8%, #1a1b1b 8.1%. Real chrome in daylight is a grey ramp with one cool reflected-sky cluster, never a rainbow"}
type: {"display":{"family":"Unbounded","free_alternative":"Unbounded / Syne / Archivo Black","weights":[700,900],"case":"lowercase or uppercase, extended","tracking":-0.02,"note":"chrome type is a 3D object, not a font; these are the fat extended faces that hold reflections. Unbounded is a variable font with a wght axis 200 to 900 (Google metadata); Syne wght 400 to 800 (widest at 800); Archivo Black is a single weight 400"},"body":{"family":"Inter","free_alternative":"Inter","weights":[400,500]},"rules":["fat, extended letterforms hold reflections; thin type does not","set labels in DOM, extrude only the hero word"]}
grid: {"columns":6,"baseline_px":8,"margins":"large dark space around the subject","rules":["one subject","the surroundings are part of the design: what it reflects must be composed"]}
shape: {"radius":"inflated, rounded, blobby volumes with continuous curvature","stroke":"none","shadow":"dark contact shadow on a glossy or black floor","imagery":"studio strip lights, softboxes, a horizon line in the reflection"}
texture: "mirror (roughness 0.0 to 0.08); brushed metal is a separate preset"
motion: {"language":"slow, heavy, liquid","timing_ms":[700,1200,2000],"eases":{"enter":"expo.out","move":"sine.inOut","exit":"power2.in"},"entrances":["shape morphs from a sphere via noise displacement","drops merge and settle","surface goes from rough (sandblasted) to mirror as it resolves"],"camera":"100 to 135mm, short arc; the reflection sliding across the surface is the motion","signature":"strip-light reflections travel across the form as the camera arcs, with a single slow ripple"}
space: {"2d":"fake with layered gradients (poor)","3d":"native: Rasan3D chrome; see Motion and camera"}
good_for: ["precision, power, futurism, crypto/AI-as-metal (use sparingly), music and fashion", "logos and one-word title objects"]
not_for: ["warm, human, handmade subjects", "dense information"]
blends_with: ["glass-product-cgi", "bauhaus-in-3d"]
clashes_with: ["risograph-print", "paper-cut-and-papercraft", "claymation-and-soft-clay"]
cheap_tells: ["chrome with no environment (renders as grey plastic)", "a gradient-filled word called chrome", "constant-speed spin", "reflections of nothing: a black or empty environment", "ten chrome objects at once"]
verified: {"sources_fetched":3,"non_wikipedia":2,"colours":"partial","colour_images":["https://commons.wikimedia.org/wiki/Special:FilePath/1954_Ford_Chrome_Bumper_Detail_(2638081050).jpg?width=400"],"grid":"proposed","timings":"proposed","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Reflection_mapping", "https://vfxblog.com/2017/08/23/the-tech-of-terminator-2-an-oral-history/", "https://threejs.org/docs/pages/MeshStandardMaterial.html"]
---
## What it is
Chrome reads as a material only through what it reflects. Environment (reflection) mapping, developed by James Blinn and Martin Newell in 1976, stores the surroundings in a texture and looks it up by reflected direction; cube maps (six faces) replaced the distorted sphere map as the standard. The canonical moving example is the T-1000 in Terminator 2 (ILM, Dennis Muren). In the oral history on vfxblog, Steve Williams says the team reused the pseudopod data from The Abyss but "as opposed to refracting, the T-1000 was reflecting", and Mark Dippe describes the character as five stages, RP1 to RP5: an amorphous blob, a smooth humanoid "kinda like Silver Surfer", a soft sandblasted police figure, the sharp-detail liquid-metal figure, then live action. Control vertices were shared across stages so they could migrate in time. For design, that is a useful grammar: liquid metal is a surface that moves between rough and smooth, formless and formed.

## The rules that make it this and not something else
- The environment is the design. Control it: strip lights, a horizon, a dark floor, one coloured light. Three.js says it directly: for MeshStandardMaterial "you should always specify an environment map".
- Metal is metalness 1 with low roughness (three.js: roughness 0 is mirror-like, 1 fully diffuse). Roughness is the dial between chrome (0.03 to 0.08), satin (0.2 to 0.35) and sandblasted (0.5+). Animate it for the RP1 to RP4 feel.
- Continuous curvature: reflections need smooth normals; faceted or noisy surfaces break the illusion.
- Contrast in the environment is the contrast on the object: measured real chrome (a 1954 Ford bumper, daylight) spans #1a1b1b to #aeafac with one cool #b3cbe1 sky cluster at 16 percent of pixels. A studio with only white walls gives a flat grey object.
- Liquid metal is a topology change: drops, merges, ripples, a surface that rejoins itself.
- Chrome is nearly colourless; colour enters only through reflected lights.
- Hold: let reflections settle so the eye reads the shape.

## Tokens decoded
canvas `#05060a`; ramp `#f4f7ff` (proposed highlight), `#8b8d8d`, `#1a1b1b` (measured mid and low); one reflected cool `#b3cbe1`; accent `#ff3d2e` as one coloured light in the reflections or the only flat colour in frame (proposed). Display type: Unbounded 900 (or Syne 800, Archivo Black) for flat companion text; body Inter 400. Type behaviour: tween the variable `wght` of Unbounded 300 to 900 over 900 ms `power3.out` as the 3D word resolves, so the flat label thickens in step.

## Motion and camera
2D: not recommended. If forced, a `linear-gradient` highlight band (white 0 to 100 to 0 percent, 30 percent width, 20 degree skew) crossing a `background-clip: text` mask: `gsap.fromTo(el, {backgroundPosition: "150% 0"}, {backgroundPosition: "-50% 0", duration: 1.2, ease: "sine.inOut"})`. Timings proposed.

Rasan3D reading. The `chrome` preset in `rasan3d.js` is a MeshPhysicalMaterial: metalness 1, roughness 0.06, envMapIntensity 1.4, clearcoat 0.3; override with `k.material("chrome", { roughness: 0.03, color: "#ffffff" })`. Any key that exists on the material can be passed.
```js
Rasan3D.stage({ id, canvas, timeline: tl, duration: 6,
  background: "#05060a", environment: { preset: "studio", intensity: 1.0 },
  toneMapping: "agx",
  post: { bloom: { strength: 0.15, threshold: 1.15 }, grain: 0.02 },
  camera: { pos: Rasan3D.orbit({ center: [0,0,0], radius: 4.2, height: 0.5, from: -20, to: 16, t0: 0.5, t1: 4.2, ease: "sine.inOut" }),
            target: [[0,[0,0,0]]], lens: [[0, 110]], fstop: 4 },
  async build(k) {
    const T = k.THREE;
    k.rig("rim", { dir: [-0.5, 0.9, 0.4], key: "#ffffff", rim: "#b3cbe1", shadows: true });
    k.ground({ y: -0.9, color: "#05060a", roughness: 0.15 });          // glossy dark floor so the form has something under it
    // a controlled reflector card: emissive strips are what the chrome will actually show
    const strip = (x, z, ry) => { const m = new T.Mesh(new T.PlaneGeometry(0.25, 3), k.material("emissive", { color: "#ffffff", intensity: 1.6 })); m.position.set(x, 1, z); m.rotation.y = ry; k.scene.add(m); return m; };
    strip(-3, 1, 1.2); strip(3.2, -1, -1.2);
    const geo = new T.IcosahedronGeometry(1, 64);                       // high subdivision for smooth displaced normals (the gate flags stock icosahedron meshes used bare; this one is displaced)
    const base = geo.attributes.position.array.slice();
    const blob = new T.Mesh(geo, k.material("chrome", { roughness: 0.03 })); k.scene.add(blob);
    return { blob, base };
  },
  pose(t, k) {
    const { blob, base } = k.objects, p = blob.geometry.attributes.position;
    const amp = 0.28 * (1 - k.prog(t, 0.2, 2.6, "expo.out")) + 0.04;     // deformation settles to a calm ripple
    for (let i = 0; i < p.count; i++) { const x = base[i*3], y = base[i*3+1], z = base[i*3+2];
      const n = Math.sin(x*2.1 + t*0.9) * Math.sin(y*1.7 - t*0.7) * Math.sin(z*2.3 + t*0.5);   // pure function of t, no state
      const s = 1 + amp * n; p.setXYZ(i, x*s, y*s, z*s); }
    p.needsUpdate = true; blob.geometry.computeVertexNormals();
    blob.material.roughness = 0.03 + 0.5 * (1 - k.prog(t, 0, 1.6, "power2.out"));   // sandblasted to mirror, the RP3 to RP4 beat
  } });
```
For a hero word: `k.extrudeText(word, { font: "assets/fonts/Unbounded-Black.ttf", size: 1, depth: 0.3, bevel: 0.04, material: k.material("chrome") })` (TTF or OTF, not WOFF2; download the static or variable TTF from Google Fonts). Merging drops: use `k.simulate` to integrate a few spheres under attraction and rebuild a metaball surface with `k.addon("objects/MarchingCubes.js")`, or raymarch with `r3SMin(a, b, 0.4)` from `#include <r3/sdf>` in a `k.pass` and shade it with the environment (`r3Fresnel` from `r3/npr`; pass your lit colour through `r3Tone`). Only emissive strips bloom; chrome highlights stay below the 1.15 threshold.

## How to instruct a model to build it
> Liquid chrome in a controlled studio. `k.material("chrome")` at roughness 0.03, stage `environment` studio at 1.0, `k.rig("rim")`, a glossy near-black `k.ground`, two vertical emissive strip cards placed so they slide across the form, and one red accent light. Hero: an extruded heavy extended word (Unbounded 900 TTF) or a blob displaced by a pure function of t. Open sandblasted (roughness 0.5) and resolve to mirror over 1.6 s `power2.out`. 110 mm lens, f/4, one 36-degree `Rasan3D.orbit` over 3.7 s `sine.inOut` with 500 ms holds. No spin. Labels in the DOM, never chrome-filled.
Claude reasons well about the environment as the look; GPT-family output often forgets the environment and returns grey plastic (observed tendency, not measured).

## Blending notes
Carries: environment-driven contrast, one hero, slow arcs, rough-to-mirror arrival. Pairs with glass (same studio) and with Bauhaus-in-3D primitives as chrome solids. Breaks against every handmade or printed vernacular.

## Sources
- https://en.wikipedia.org/wiki/Reflection_mapping — Blinn and Newell 1976; sphere map distortion vs cube maps (fetched).
- https://vfxblog.com/2017/08/23/the-tech-of-terminator-2-an-oral-history/ — T-1000 reflecting not refracting; RP1 to RP5 stages blob to sharp detail; shared control vertices (fetched).
- https://threejs.org/docs/pages/MeshStandardMaterial.html — metalness and roughness semantics; always specify an environment map (fetched).
- Colour: Wikimedia Commons 1954 Ford chrome bumper detail image, sampled with k-means (see palette evidence).
