---
id: "concrete-brutalist-3d"
name: "Concrete and Brutalist architecture (béton brut)"
kind: "material"
domain: "material"
era: "1950s-early 1980s architecture; Ando 1970s onward; web and film revival 2010s"
origin: ["Le Corbusier (béton brut)", "Reyner Banham (1955 essay 'The New Brutalism')", "Marcel Breuer", "Tadao Ando"]
tags: ["concrete", "brutalism", "monumental", "architecture", "light", "shadow", "3d"]
palette: {"roles":{"canvas":"#7c7b7f","concrete_dark":"#383534","concrete_light":"#a7acb4","sky":"#dfe3e7","accent":"#d94a1e"},"logic":"monochrome grey; all drama from light direction and shadow. Weathered board-marked concrete is a mid grey (lightness about 50 percent) with a near-black cast-shadow cluster, not the pale beige of most renders. Accent is a single sign or object","evidence":"measured, k-means 6, 2026-10-03: board-marked concrete detail https://commons.wikimedia.org/wiki/Special:FilePath/Dingleton_Boiler_House_-_detail_of_board-marked_concrete.jpg?width=400 gave #7c7b7f 32.5%, #706e70 21.3%, #8a8a8f 19.7%, #1b1a17 12.8%, #605e5f 9.9%, #383534 3.8% (canvas, concrete_dark from here). Ando Church of the Light interior https://commons.wikimedia.org/wiki/Special:FilePath/Church_of_Light.JPG?width=400 gave #5f6365 27.8%, #404548 20.8%, #797e83 19.0%, #0f1315 13.7%, #a7acb4 11.1%, #dfe3e7 7.6% (concrete_light and sky from here: a cool, blue-grey register). Accent #d94a1e is proposed"}
type: {"display":{"family":"Archivo Black","free_alternative":"Archivo Black / Space Grotesk","weights":[400,700],"case":"uppercase for display","tracking":0.02,"note":"Archivo Black has one weight (400); Space Grotesk has wght 300 to 700 (Google metadata) for a lighter register"},"body":{"family":"IBM Plex Mono","free_alternative":"IBM Plex Mono / Space Mono","weights":[400],"note":"IBM Plex Mono is static weights 100 to 700 (no variable axis)"},"rules":["type is carved or stencilled, small and rare","one big word per frame at most"]}
grid: {"columns":"module from formwork panels","baseline_px":8,"margins":"asymmetric, heavy masses with voids","rules":["repeated modules: panel lines and tie holes on a regular grid","monumental scale; people tiny for scale"]}
shape: {"radius":0,"stroke":"none","shadow":"hard, long, directional","imagery":"fair-faced concrete, board-marked grain, tie-hole dots, cast slabs"}
texture: "board-formed grain or smooth cast, tie holes in a regular grid, small blowholes, water streaks, no paint"
motion: {"language":"slow, heavy, monumental","timing_ms":[900,1600,2600],"eases":{"enter":"power4.out","move":"sine.inOut","exit":"power2.in"},"entrances":["a slab slides in and stops dead","light slit opens as the sun moves"],"camera":"85 to 200mm, slow crane or lateral track","signature":"a shaft of hard light travelling across a wall, with long shadows lengthening"}
space: {"2d":"flat grey planes with texture and hard shadow shapes","3d":"native: Rasan3D concrete; see Rasan3D reading"}
good_for: ["infrastructure, strong institutions, security, solidity", "manifesto and architecture-minded brand films", "dramatic one-word reveals"]
not_for: ["warm consumer, kids", "playful tone", "colourful data viz"]
blends_with: ["bauhaus-in-3d", "blueprint-technical-drawing", "engraving-etching"]
clashes_with: ["gummy-inflatable-and-plastic-toy-3d", "chrome-liquid-metal-cgi", "claymation-and-soft-clay"]
cheap_tells: ["grey noise texture with no scale cue", "no hard directional light, flat ambient", "perfectly clean concrete with no tie holes or seams", "neon accents on concrete (cyberpunk, not brutalist)", "wide-angle distortion instead of monumental long lenses"]
verified: {"sources_fetched":4,"non_wikipedia":1,"colours":"partial","colour_images":["https://commons.wikimedia.org/wiki/Special:FilePath/Dingleton_Boiler_House_-_detail_of_board-marked_concrete.jpg?width=400","https://commons.wikimedia.org/wiki/Special:FilePath/Church_of_Light.JPG?width=400"],"grid":"proposed","timings":"proposed","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Brutalist_architecture", "https://en.wikipedia.org/wiki/Church_of_the_Light", "https://en.wikipedia.org/wiki/B%C3%A9ton_brut", "https://99percentinvisible.org/article/unite-dhabitation-le-corbusiers-proto-brutalist-urban-sky-villages/"]
---
## What it is
Béton brut ("raw concrete") is architectural concrete left as cast, showing the patterns, textures and seams of its formwork. Le Corbusier coined the term while building the Unité d'Habitation in Marseille (1952), answering board-marked concrete: the timber grain is imprinted on the wall as it sets (Wikipedia). Hans Asplund (1950), the Smithsons (1953) and Reyner Banham (1955) built "new brutalism" around it; the core traits are exposed concrete, board-marked formwork, monumental geometry, modular repetition and structural honesty. 99% Invisible describes the Unité's "wood patterns ingrained in the board-formed concrete" and its roof of ventilation towers shaped like ocean-liner funnels. Two registers matter. Corbusier-Breuer concrete is rough and board-marked. Tadao Ando's is smooth: Church of the Light (1989) is three cubes of 5.9 x 17.7 x 5.9 m, 38 cm walls, a 15-degree wall, a cruciform slit behind the altar, and a glass-like finish from a dense mix and thorough vibration, with a rational grid of formwork tie holes (Wikipedia; the tie-hole grid detail is from a design-guide page found by search and not opened).

## The rules that make it this and not something else
- One material, expressed honestly: board-marked or smooth cast concrete, with formwork joints and tie holes in a regular dot grid. Pick one register per film (rough Corbusier, smooth Ando).
- Light is the only decoration: a single slit, a hard sun, deep shadow. In the measured Church of the Light frame, a near-black cluster (#0f1315, 13.7 percent) and a near-white cluster (#dfe3e7, 7.6 percent) bracket a mid-grey wall; contrast is spatial, not tonal.
- Monumental scale with a tiny human figure or object for scale.
- Massing: heavy blocks, voids, cantilevers; no ornament, no paint.
- Colour is grey. Measured weathered board-marked concrete is a cool-neutral mid grey (#7c7b7f) near 50 percent lightness; pale beige reads as plaster.
- Imperfection is the proof: board seams, blowholes, water streaks, uneven panels. Even Ando's walls "contain imperfections and are uneven" (Wikipedia).
- Repetition: the same module (panel, window, bay) at regular intervals.

## Tokens decoded
canvas `#7c7b7f`, deep shade `#383534`, lit planes `#a7acb4`, sky `#dfe3e7` (all measured, see palette evidence), accent `#d94a1e` (proposed, one small object). Type: Archivo Black uppercase for the one word, IBM Plex Mono 400 for annotations, in the DOM. Tie-hole grid: dots at 600 mm on a 1.2 x 2.4 m panel module, hole radius about 8 mm (proposed; no panel size was found in the fetched sources).

## Motion and camera
2D: grey masses as `div`s with a grain overlay and an SVG `feTurbulence` roughness; a hard shadow polygon (`clip-path: polygon`) sweeps across the wall over 2600 ms `sine.inOut` as the sun moves; the one word slams in `power4.out` 900 ms and stays. Timings proposed.

Rasan3D reading. The `concrete` preset is a MeshStandardMaterial: roughness 0.96 with generated roughness and bump noise textures (`bumpScale` 0.6). Add the board and tie-hole pattern as your own canvas texture (a canvas made in `build` is deterministic if you draw from `k.rng`).
```js
Rasan3D.stage({ id, canvas, timeline: tl, duration: 7,
  background: "#cfd3d6", environment: { preset: "soft", intensity: 0.35 }, toneMapping: "agx",
  fog: { color: "#cfd3d6", near: 18, far: 60 },
  post: { grain: 0.03, vignette: 0.2 },
  camera: { pos: [[0, [-3.5, 1.2, 14]], [6, [-3.5, 2.8, 12.5], "sine.inOut"]], target: [[0, [0, 3, 0]]], lens: [[0, 100]], fstop: 8 },
  async build(k) {
    const T = k.THREE, r = k.rng(5);
    const light = k.rig("low-key", { key: "#fff3e2", dir: [-0.9, 0.35, 0.6], shadows: true, shadowSize: 14, shadowSoftness: 2 });
    k.ground({ y: 0, color: "#8a8a8f", roughness: 0.95 });
    // tie-hole grid + board seams as a canvas bump/roughness map (1.2 x 2.4 m panel module)
    const cv = document.createElement("canvas"); cv.width = 512; cv.height = 1024; const g = cv.getContext("2d");
    g.fillStyle = "#808080"; g.fillRect(0, 0, 512, 1024);
    for (let y = 0; y < 1024; y += 128) { g.fillStyle = "#6a6a6a"; g.fillRect(0, y, 512, 3); }                     // board seams
    for (const [x, y] of [[85,170],[427,170],[85,850],[427,850],[85,512],[427,512]]) { g.fillStyle = "#303030"; g.beginPath(); g.arc(x, y, 9, 0, 6.283); g.fill(); }   // tie holes
    for (let i = 0; i < 40; i++) { g.fillStyle = "#4a4a4a"; g.beginPath(); g.arc(r() * 512, r() * 1024, 1 + r() * 2.5, 0, 6.283); g.fill(); }              // blowholes
    const tex = new T.CanvasTexture(cv); tex.wrapS = tex.wrapT = T.RepeatWrapping; tex.repeat.set(5, 2.5);
    const mat = k.material("concrete", { color: "#7c7b7f", bumpMap: tex, bumpScale: 1.2 });
    const wall = new T.Mesh(new T.BoxGeometry(6, 6, 0.6), mat); wall.position.set(-3.2, 3, 0);                     // two slabs with a 0.4 m slit between them
    const wall2 = wall.clone(); wall2.position.x = 3.2;
    [wall, wall2].forEach((m) => { m.castShadow = m.receiveShadow = true; k.scene.add(m); });
    const person = new T.Mesh(new T.CapsuleGeometry(0.2, 1.3, 8, 16), k.material("matte", { color: "#d94a1e" })); person.position.set(0.4, 0.85, 3); k.scene.add(person);   // scale cue: 1.7 m
    return { key: light.children[0] };
  },
  pose(t, k) { const key = k.objects.key, a = -0.9 + 1.5 * k.prog(t, 0.5, 6.5, "sine.inOut");    // the sun moves: the slit's shadow crawls across the floor
    key.position.set(a * 10, 3.5, 6); } });
```
A `crane` leg: `pos.y` rises 1.6 m over 6 s `sine.inOut` (the keys above); fstop 8 keeps the grain sharp, the lens 100 mm is the monumental register (3d.md: 85 to 135 mm compresses; 200 mm+ stacks planes). For a one-word reveal use `k.extrudeText("ARCHIVE", { font: "assets/fonts/ArchivoBlack-Regular.ttf", size: 1.4, depth: 0.5, bevel: 0, material: mat })` standing on the ground as a monolith. Avoid wide-angle swoops, glossy clearcoat, bloom, and an environment brighter than 0.4 (it fills the shadows and kills the hard-light read).

## How to instruct a model to build it
> Brutalist concrete, Ando register (pick Corbusier board-marked instead if the film is rougher). Cool mid grey `#7c7b7f` slabs with a tie-hole grid and board seams in the bump map, one 0.4 m slit, one hard key (`k.rig("low-key")`, `shadows: true`, `shadowSize` 14) whose `position` is animated by a pure function of t over 6 s so the slit's shadow crawls across the floor. A 1.7 m figure for scale. 100 mm lens, f/8, a slow 1.6 m crane on `sine.inOut`, 500 ms holds. One uppercase Archivo Black word in the DOM, nothing else. Grain 3 percent, no colour except one small accent, no bloom.
Claude composes the light well; GPT-family models often add neon and gradient skies (observed tendency, not measured).

## Blending notes
Carries: hard single key, one register of concrete, monumental long lens, scale cue. Pairs with bauhaus-in-3d (same hard light, solid primitives), blueprint-technical-drawing (section lines over the mass) and engraving-etching. Breaks with playful, glossy or soft-clay materials.

## Sources
- https://en.wikipedia.org/wiki/Brutalist_architecture — term origins (Asplund 1950, Smithsons 1953, Banham 1955), board-marked formwork, monumental modular forms (fetched).
- https://en.wikipedia.org/wiki/Church_of_the_Light — dimensions, 38 cm wall, 15-degree wall, cruciform slit, glass-like finish, imperfections (fetched).
- https://en.wikipedia.org/wiki/B%C3%A9ton_brut — definition, Corbusier coined it at the Unité d'Habitation 1952, board marking (fetched).
- https://99percentinvisible.org/article/unite-dhabitation-le-corbusiers-proto-brutalist-urban-sky-villages/ — board-formed concrete wood patterns, 1,600 residents, roof ventilation towers like ship funnels (fetched).
- Not opened: Dezeen Unité d'Habitation (403). Colour: two Commons images, k-means (see palette evidence).
