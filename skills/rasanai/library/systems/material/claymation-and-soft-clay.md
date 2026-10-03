---
id: "claymation-and-soft-clay"
name: "Claymation and soft clay"
kind: "material"
domain: "material"
era: "Plasticine 1897 (Harbutt); Aardman from 1972; Laika 2000s; soft-clay 3D 2015+"
origin: ["William Harbutt (plasticine)", "Aardman Animations (Peter Lord, David Sproxton, Nick Park)", "Will Vinton (Claymation, Foamation)", "Laika (Coraline)"]
tags: ["clay", "plasticine", "stop-motion", "handmade", "soft", "tactile", "on-twos"]
palette: {"roles":{"canvas":"#efe6d8","clay_red":"#bc3339","clay_pink":"#d4409a","clay_yellow":"#c99d12","clay_cool":"#b3c0c6","ink":"#27231e"},"logic":"saturated but dusty plasticine colours, mixed by hand so they vary; a warm neutral table, one strongly coloured hero, the rest muted","evidence":"clay colours measured from a Commons photo of plasticine pieces https://commons.wikimedia.org/wiki/Special:FilePath/Plasticine_decoration._Cooking_game.jpg?width=400, k-means 8, 2026-10-03: #bc3339 17.8%, #b3c0c6 17.2%, #8b1425 16.0%, #a0928a 14.6%, #d4409a 11.9%, #27231e 11.6%, #705e58 8.0%, #c99d12 2.9%. It is a hobby photo under room light, not Aardman material: use it for how dusty and deep real plasticine is (red is 8b1425 in shade, yellow is mustard not lemon). canvas #efe6d8 is proposed"}
type: {"display":{"family":"Fredoka","free_alternative":"Fredoka / Baloo 2 / Chewy / Sniglet","weights":[600,700],"case":"mixed","tracking":0.01,"note":"Fredoka has wght 300 to 700 and wdth axes (Google metadata); Baloo 2 wght 400 to 800; Chewy has a single weight 400; Sniglet 400 and 800. Letters are meant to be modelled clay forms, so these supply soft corners to trace, not the finished look"},"body":{"family":"Nunito","free_alternative":"Nunito / Quicksand","weights":[500]},"rules":["letters as modelled clay forms with soft corners","never crisp vector edges on clay type; add 1 to 2px wobble re-rolled per drawing","text labels in DOM stay clean and small"]}
grid: {"columns":"none; handmade tableaux","baseline_px":8,"margins":"shot like a miniature set: a table, a backdrop, a practical light","rules":["diorama staging, objects on a surface","visible scale cues (set pieces at 1:6 to 1:12 reading)"]}
shape: {"radius":"large and uneven; no perfect geometry","stroke":"none","shadow":"soft, short, from a single practical lamp","imagery":"fingerprints, tool marks, seams, subtle surface dust"}
texture: "surface noise 2 to 6px with thumbprint swirls, small dents, lint specks; matte with slight waxy sheen"
motion: {"language":"stepped, 12 changes per second, tactile","timing_ms":[83,167,500],"eases":{"enter":"steps(1) held in twos","move":"power1.inOut sampled on twos","exit":"power1.in"},"entrances":["pop-up squash and recover in 4 to 6 frames","slide on twos with 1 to 2px jitter between poses"],"camera":"locked-off or small motion-control dolly; handheld never","signature":"every pose held 2 frames; micro-jitter between poses; boil in the surface texture"}
space: {"2d":"stepped GSAP with texture overlays","3d":"native: Rasan3D clay with step-time poses; see Rasan3D reading"}
good_for: ["warmth, humour, craft, kids, human-scale stories", "simple characters and objects with personality", "anti-corporate explainers"]
not_for: ["precision or speed", "luxury minimalism", "dense data"]
blends_with: ["paper-cut-and-papercraft", "gummy-inflatable-and-plastic-toy-3d"]
clashes_with: ["chrome-liquid-metal-cgi", "blueprint-technical-drawing", "concrete-brutalist-3d"]
cheap_tells: ["perfectly smooth clay with no fingerprint or dent", "smooth in-between motion (on ones, tweened) labelled stop-motion", "a soft shader with a plastic sheen", "identical symmetric faces", "no set, only a void"]
verified: {"sources_fetched":4,"non_wikipedia":3,"colours":"partial","colour_images":["https://commons.wikimedia.org/wiki/Special:FilePath/Plasticine_decoration._Cooking_game.jpg?width=400"],"grid":"proposed","timings":"partial","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Clay_animation", "https://www.awn.com/animationworld/plasticine-memories-bringing-wallace-gromit-big-screen", "https://gizmodo.com/aardman-animations-clay-supply-dwindling-1851034665", "https://commons.wikimedia.org/wiki/Special:FilePath/Plasticine_decoration._Cooking_game.jpg"]
---
## What it is
Claymation is stop-motion with malleable clay, usually plasticine, a non-hardening modelling clay William Harbutt developed in 1897 (Wikipedia). Film runs at 24 fps and claymation is typically shot on twos, 12 position changes per second, about 21,600 adjustments for 30 minutes (Wikipedia). Aardman's reference look depends on a specific material: Newplast plasticine, used since 1972, whose only remaining factory in Torquay closed in 2023 after Aardman bought the warehouse stock (Gizmodo). The look is handmade evidence. On Curse of the Were-Rabbit the cinematographer Dave Alex Riddett says "we revel in it. Unless it's distracting, we allow it to be there, as part of the look", deliberately keeping fingerprints and chunky surfaces rather than the smoother look of Chicken Run, and lighting it like a 1950s live-action film (AWN). Laika shot Coraline on ones with 3D-printed replacement faces (see the stop-motion-laika-replacement entry for that technique).

## The rules that make it this and not something else
- Handmade evidence is the look: fingerprints, tool marks, seams, lint. Perfectly smooth clay is Chicken Run, the version Aardman moved away from.
- Timing: on twos by default (83 ms per drawing at 24 fps, 12 changes per second); on ones for fluid action; holds are honest. Environmental drift (humidity deforms puppets and sets) is part of the surface boil.
- A diorama: a real set built at a physical scale, one or few practical lights, shallow depth. AWN notes sets split into main and smaller-scale sub-units of the same location.
- Lit like live action, motivated by the set (1950s lighting reference in AWN), not flat.
- Silhouettes are simple, features exaggerated (wide mouth, heavy brow) so replacement mouths read at small sizes.
- Pose-to-pose with subtle squash and stretch; clay deforms with weight.
- Real plasticine colour is dusty and deep (measured: red #bc3339 and #8b1425 in shade, mustard #c99d12, magenta #d4409a), not candy pastel. Candy pastel is the gummy look.

## Tokens decoded
- ground `#efe6d8` warm table (proposed); clay colours as in the palette (partial measurement from a hobby photo); ink `#27231e` for eyes.
- Display type: Fredoka 600/700 with a 2 px wobble, or Baloo 2; body Nunito 500. Tween Fredoka's `wght` only on twos (a step, not a smooth axis tween).
- Surface: 8 to 14 thumbprint decals per scene at opacity 0.08, tileable noise at 3 to 5 px (proposed).

## Motion and camera
2D (HyperFrames GSAP): every tween uses `steps(n)` so the layer moves on twos: `gsap.to(el, { x: 400, duration: 1, ease: "steps(12)" })` is 12 drawings per second. Per drawing jitter, seeded by step index and not random at runtime: `gsap.to(el, { rotation: (i) => ((i*7919)%13-6)/4, duration: 1, ease: "steps(12)", repeat: 0 })` or compute offsets from `Math.floor(t*12)`. Squash on contact: `scaleY: 0.96` held 2 drawings (167 ms), recover over 4 to 6 drawings. Surface boil: swap 3 noise tiles every 83 ms. Never `power*` tweens on the stepped layer. Set `data-finish-blur="off"` on the scene's frame root so the film finish does not average the steps; the scene is then rendered from the centre sub-frame (finish.md).

Rasan3D reading. The `clay` preset is a MeshPhysicalMaterial, roughness 0.82, sheen 0.35 (a waxy bloom at grazing angles). Fingerprints are a bump or normal texture; you can draw one on a canvas in `build` (concentric arcs with seeded wobble from `k.rng`).
```js
Rasan3D.stage({ id, canvas, timeline: tl, duration: 6, fps: 24,
  motionBlur: false,                       // stop-motion has none; pair with data-finish-blur="off" on the frame root
  background: "#efe6d8", environment: { preset: "soft", intensity: 0.4 }, toneMapping: "neutral",
  post: { grain: 0.02 },
  camera: { pos: [[0, [0.4, 0.9, 3.2]]], target: [[0, [0, 0.45, 0]]], lens: [[0, 40]], fstop: 5.6 },   // locked off; hold the one key
  async build(k) {
    const T = k.THREE, r = k.rng(31);
    k.rig("top-soft", { key: "#ffe9cf", shadows: true, shadowSoftness: 10 });             // soft practical lamp, short soft shadows
    k.ground({ y: 0, color: "#e3d6c3", roughness: 0.9, shadowOpacity: 0.5 });
    const cv = document.createElement("canvas"); cv.width = cv.height = 256; const g = cv.getContext("2d");
    g.fillStyle = "#808080"; g.fillRect(0, 0, 256, 256); g.strokeStyle = "#5a5a5a"; g.lineWidth = 1.6;
    for (let i = 0; i < 9; i++) { g.beginPath(); g.ellipse(128 + (r()-0.5)*6, 128 + (r()-0.5)*6, 14 + i*11, 10 + i*12, 0.3, 0, 6.283); g.stroke(); }  // a thumbprint
    const bump = new T.CanvasTexture(cv); bump.wrapS = bump.wrapT = T.RepeatWrapping; bump.repeat.set(3, 3);
    const body = new T.Mesh(new T.SphereGeometry(0.4, 64, 48), k.material("clay", { color: "#bc3339", bumpMap: bump, bumpScale: 0.6 }));
    body.position.y = 0.4; body.castShadow = true; k.scene.add(body);
    const base = body.geometry.attributes.position.array.slice();
    return { body, base };
  },
  pose(t, k) {
    const { body, base } = k.objects, d = Math.floor(t * 12), s = d / 12;                 // the drawing index; every pose is a function of d
    const hop = k.prog(s, 0.5, 1.4, "power2.inOut"), land = k.prog(s, 1.4, 1.75, "power3.out");
    body.position.y = 0.4 + 0.5 * Math.sin(Math.PI * Math.min(1, hop)) * (1 - land);
    body.scale.set(1 + 0.08 * (1 - land) * (hop > 0.98 ? 1 : 0), 1 - 0.08 * (1 - land) * (hop > 0.98 ? 1 : 0), 1);   // squash on contact
    const p = body.geometry.attributes.position;                                         // boil: per-drawing surface wobble, same for any seek order
    for (let i = 0; i < p.count; i++) { const h = k.hash(i + d * 4099, 9) - 0.5; p.setXYZ(i, base[i*3] * (1 + 0.012 * h), base[i*3+1] * (1 + 0.012 * h), base[i*3+2] * (1 + 0.012 * h)); }
    p.needsUpdate = true; body.geometry.computeVertexNormals();
  } });
```
The 3D `fps: 24` sets the stage shutter; the pose is quantised to 1/12 s, so each drawing holds 2 frames. Lens 35 to 50 mm; the camera is locked or a small motion-control dolly (3d.md tier T0 or T1); handheld never. Avoid glass-smooth clay, bloom, and a void with no set.

## How to instruct a model to build it
> Claymation in the Aardman register. Everything moves on twos: pose from `Math.floor(t*12)/12` in `pose`, `steps(12)` eases in 2D, no `power*` tweens on the stepped layer, `motionBlur: false`, `data-finish-blur="off"` on the scene frame root. Dusty plasticine colours (red `#bc3339`, mustard `#c99d12`) on a warm tabletop, a thumbprint bump texture, per-drawing vertex wobble of about 1 percent from `k.hash`. One soft practical light (`k.rig("top-soft")`, `shadowSoftness` 10), lens 40 mm, f/5.6, locked camera. Type in Fredoka 700 with 2 px wobble. A real set: a table edge, a backdrop, a scale cue.
Claude implements `steps()` correctly; GPT-family models often reach for smooth easing plus a blur filter, which reads as CSS, not clay (observed tendency, not measured).

## Blending notes
Carries: on-twos timing, dusty colour, imperfect surface, practical light. Combine with paper-cut-and-papercraft for a mixed-media craft set. Breaks against high-gloss digital looks and against gummy-inflatable (that is smooth and saturated, clay is chalky and marked).
Unverified: Aardman's frames-per-day output (not given in the fetched pages).

## Sources
- https://en.wikipedia.org/wiki/Clay_animation — Harbutt 1897, 12 changes per second on twos, 21,600 adjustments for 30 minutes, humidity and continuity (fetched).
- https://www.awn.com/animationworld/plasticine-memories-bringing-wallace-gromit-big-screen — Riddett on keeping fingerprints, 33 sets, 1950s lighting reference (fetched).
- https://gizmodo.com/aardman-animations-clay-supply-dwindling-1851034665 — Newplast used since 1972, factory closed 2023, stockpile (fetched).
- Colour: Commons plasticine photo, k-means (palette evidence). Not opened: Laika Coraline page (connection refused), Deadline Aardman tour (402).
