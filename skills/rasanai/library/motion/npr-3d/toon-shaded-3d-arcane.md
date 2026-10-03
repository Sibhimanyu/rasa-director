---
id: "toon-shaded-3d-arcane"
name: "Toon-shaded 3D that reads as drawn (Guilty Gear Xrd cel logic, Arcane painted-3D hybrid)"
space: "3d"
family: "npr-3d"
references: ["Arcane (Fortiche): painted textures on 3D, 2D effects layered at 12 fps", "Guilty Gear Xrd (Arc System Works): limited animation in 3D, artist-controlled cel shading", "Spider-Man: Into the Spider-Verse (3D with 2D finish, Hatcher/Thresher)"]
timing: {"frame_rate":"two modes: (A) Arcane-like: characters smooth at 24 fps, drawn FX at 12 fps; (B) Xrd-like: poses held, no interpolation between keys (stepped), camera free","holds_ms":[83,125],"durations_ms":[83,167,333],"notes":"12 drawings/s means holds of 83 ms; poses change every 2 frames at 24 fps"}
eases: {"key":"stepped","camera":"power3.inOut","notes":"character poses stepped (no interpolation), camera and FX timing eased; Xrd tried full animation early and rejected it: interpolation makes it look more 3D"}
camera: {"lens_mm":[35,85],"moves":["dramatic swing around a held pose (Xrd special-attack camera)","painted-background push-in","whip with a drawn smear on the FX layer"],"rules":["the camera is free even though the shading is flat (Motomura)","per-character light vector instead of global lighting","camera moves smooth while the character is stepped: the contrast sells the drawing"]}
recipe_2d: "GSAP fallback: steps(n) eases for held drawings (ease: 'steps(12)' on a sprite-strip background-position, 83 ms per drawing); painted 2D look from layered PNG paint textures with mix-blend-mode: multiply for the shade layer; outline via an SVG feMorphology dilate on a flat-colour silhouette copy placed behind. Use only when no 3D model exists."
recipe_3d: "Rasan3D: character GLB via k.addon('loaders/GLTFLoader.js') or primitives; a ShaderMaterial = Rasan3D.glsl.npr + color: base colour x tint ramp (r3ToonRamp or r3Toon with 2-3 bands, soft 0.01-0.02), threshold offset from a vertex colour channel, a per-object light vector uniform (not scene lights), normals authored (smooth or edited) not computed; outline = a second mesh, BackSide, vertices pushed along the normal by width x vertex-colour; paint grain = r3Fbm3 on object-space position as a low-amplitude multiplier (0.04-0.08); pose(t,k): const tq = Math.floor(t * 12 + 1e-6) / 12 and drive the rig from tq; motionBlur:false on the character stage; a 12 fps FX layer = k.pass(at:'post') with uTime quantised through a function uniform ((t)=>Math.floor(t*12)/12); post {bloom: weak, grain 0.02}."
pitfalls: ["MeshToonMaterial straight out of the box with a 3-step gradient and default normals: speckled terminator and plastic look (Motomura: every little noise on the surface becomes a distracting blotch)","computed normals left as they are on faces","global scene lights: the shadow shape wobbles with the camera or pose","interpolated animation on every limb: reads as a smooth 3D puppet","photographic motion blur on a stepped character: smears the held drawing","lines of a single constant width: no variable-width outline, no erased lines on small features","speculars and glossy PBR: Fortiche reduced realistic CG effects such as specular highlights","adding a 'comic' filter on top of ordinary PBR: it never reads as drawn"]
instruct: {"all":"Decide the mode first: smooth characters with a drawn FX layer at 12 fps, or stepped characters. Shade with a step function (2-3 bands) against a per-object light vector plus a per-vertex threshold offset, then colour with a lit colour and a separately chosen shade tint (not lit colour times grey). Outline with an inverted hull. Pose from a quantised time that is a pure function of t. No PBR speculars. Randomness only from k.rng or hashes of position.","claude":"You will smooth everything and add rim glow. Do the opposite: write the quantised time first (tq), state the drawings-per-second in a comment, and keep every highlight a flat shape. Give one accent colour to the FX layer. When a rule from the source says 'author the normals', make a note of which normals you would edit and use the model's smooth normals as a documented compromise.","gpt":"You tend to use MeshToonMaterial with default settings, requestAnimationFrame-style accumulation (pose += speed) and Math.random for FX jitter. Replace them: ShaderMaterial with the r3 toon helpers, pose from Math.floor(t * 12 + 1e-6) / 12, and per-drawing jitter from r3Hash12(vec2(floor(uTime * 12.0), id)). Never accumulate state between poses."}
verified: {"sources_fetched":7,"non_wikipedia":6,"colours":"n/a","colour_images":[],"grid":"n/a","timings":"partial","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://www.ggxrd.com/Motomura_Junya_GuiltyGearXrd.pdf", "https://www.redsharknews.com/why-netflixs-arcane-looks-so-good-how-fortiche-ramped-up-the-animation-pipeline", "https://blog.syncsketch.com/creator-stories/arcane-fortiche/", "https://en.wikipedia.org/wiki/Cel_shading", "https://www.awn.com/animationworld/rewriting-visual-rule-book-spider-man-spider-verse", "https://www.sidefx.com/community/spider-man-into-the-spider-verse/", "https://www.gamedeveloper.com/art/see-i-guilty-gear-xrd-i-s-striking-2d-3d-art-deconstructed-at-gdc-2015"]
---
## What it is

3D geometry rendered so that a viewer reads it as drawn or painted. Two proven routes sit under one id. **Guilty Gear Xrd** (Arc System Works) is the strictest: custom cel shaders, hand-controlled normals, vertex-colour thresholds, inverted-hull outlines and limited animation, so a 3D fighter looks like the old sprites. **Arcane** (Fortiche) is the painterly route: stylised 3D animation, hand-painted textures and backgrounds, drawn 2D effects layered in post, composited in Nuke. **Spider-Verse** adds a third finish (halftone and hatching in compositing).

## The defining traits (numbers)

From Motomura's GDC 2015 slides (full text read via the PDF):

- **Principle:** "Kill everything 3D": if something looks 3D, find a way to avoid it. The shader's math is "correct", which is not good enough: every element on screen must be an intentional choice.
- **Shading is a step:** lit if the normal faces the light, unlit if it is more than 90 degrees away (the threshold could be any value). Control three inputs: the threshold, the light vector, the normal.
- **Threshold offset from a vertex-colour channel**: artists paint areas that go dark more easily (occlusion) or are always shaded (value 0). Vertex properties are resolution independent, textures are not.
- **Light:** no global lighting on characters; each character has its own dedicated light vector that lights its idle pose best; in cut scenes it animates with the character.
- **Normals:** edited by intention on every major feature, faces especially.
- **Colour:** lit colour from a base texture, shade colour from base multiplied by a tint texture (skin shades take a red tint; less solid materials get lighter shades). Both textures were just flat squares used as lookups.
- **Outline:** inverted hull, a second set of darker polygons expanded along the normals in the vertex shader; width varied and erased through vertex colour. Inner lines: axis-aligned beams on a texture with specially assigned UVs so lines stay clean at extreme close-ups.
- **Budget:** about 40,000 triangles per character on average, for close-ups; no normal maps.
- **Animation:** "limited animation": no interpolation between key poses, every frame a key, like stop-motion; around 500 bones per character; no simulation; scale animation used heavily; each key deformed to add imperfection (a perfectly rigid perspective reads as 3D). Expressiveness over accuracy.

From Fortiche (secondary sources, fetched):

- Maya for modelling, rigging, animation and camera; Photoshop for texture painting and hand-drawn effects; Nuke and After Effects for compositing (redsharknews).
- **12 fps** for hand-drawn effects (smoke, explosions, Jinx's scribbles) against **24 fps** for characters and environments (redsharknews).
- Keyframe animation only, no motion capture; 80 animators; 2D effects (scratches, textures) layered over 3D in post; everything in backgrounds painted (syncsketch).
- Custom shaders to merge hand-painted textures with the 3D (redsharknews); the same claim that Fortiche reduced specular highlights comes from search-result summaries only: unverified.

From Spider-Verse: over 25 custom Nuke tools; the Hatcher and Thresher tools made halftone dots and hatch lines; "Gwen's world" got streakier, more painterly effects (awn). Houdini drove line-work placement and FX (sidefx).

## How to build it

### 3D (Rasan3D)

```js
async build(k) {
  const { THREE } = k;
  const { GLTFLoader } = await k.addon("loaders/GLTFLoader.js");
  const g = (await new GLTFLoader().loadAsync("assets/models/hero.glb")).scene;
  const toon = (shade) => new THREE.ShaderMaterial({
    uniforms: { uLight: { value: new THREE.Vector3(-0.4, 0.7, 0.6).normalize() }, uLit: { value: new THREE.Color("#e8c9a0") }, uTint: { value: new THREE.Color(shade || "#b07a78") } },
    vertexShader: `varying vec3 vN, vObj; varying float vThr;
      void main(){ vN = normalize(mat3(modelMatrix) * normal); vObj = position; vThr = color.r;   // vertex colour R = threshold offset 0..1
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: Rasan3D.glsl.npr + Rasan3D.glsl.noise + `
      uniform vec3 uLight, uLit, uTint; varying vec3 vN, vObj; varying float vThr;
      void main(){
        float l = dot(normalize(vN), uLight) * 0.5 + 0.5;                       // 0..1, 0.5 is the 90 degree threshold
        float lit = step(0.5 - 0.22 * (1.0 - vThr), l);                         // artist-offset threshold; or r3Toon(l, 2.0, 0.015)
        vec3 shade = uLit * uTint;                                              // shade colour = base x tint (Motomura)
        float grain = 1.0 + 0.06 * r3Fbm3(vObj * 9.0, 3);                       // painted grain, low amplitude (Fortiche route)
        gl_FragColor = vec4(mix(shade, uLit, lit) * grain, 1.0);
      }`,
    vertexColors: true,
  });
  // inverted hull: same geometry, BackSide, pushed out along the normal; width from vertex colour G
  const hull = (w) => new THREE.ShaderMaterial({ side: THREE.BackSide,
    vertexShader: `void main(){ float wid = ${w.toFixed(4)} * color.g; gl_Position = projectionMatrix * modelViewMatrix * vec4(position + normal * wid, 1.0); }`,
    fragmentShader: `void main(){ gl_FragColor = vec4(0.05, 0.03, 0.04, 1.0); }`, vertexColors: true });
  g.traverse((o) => { if (o.isMesh) { o.material = toon(); const h = new THREE.Mesh(o.geometry, hull(0.012)); o.add(h); } });
  k.scene.add(g);
  return { g, mixer: /* AnimationMixer for the clip */ null };
},
pose(t, k) {
  const tq = Math.floor(t * 12 + 1e-6) / 12;       // 12 drawings per second: mode B. For mode A use t directly on the character.
  // mixer.setTime(tq); the rig is sampled at held times: poses do not interpolate between drawings
},
```

Mode A, the Arcane FX layer: a post pass that draws smear or scribble shapes whose time is quantised to 12 fps:

```js
k.pass("fx12", { at: "post", blend: "over", uniforms: { uT12: (t) => Math.floor(t * 12 + 1e-6) / 12 }, frag: `
  #include <r3/noise>
  uniform float uT12;
  void main(){
    vec2 p = vUv * vec2(uRes.x / uRes.y, 1.0);
    float n = r3Fbm2(p * 3.0 + vec2(uT12 * 7.3, 0.0), 3);        // new drawing every 83 ms, hash-free
    float ink = smoothstep(0.35, 0.37, n) * (1.0 - smoothstep(0.37, 0.39, n));   // a drawn contour of the noise
    gl_FragColor = vec4(vec3(0.05, 0.9, 0.85) * ink, ink);       // one accent, flat colour
  }` });
```

Motion blur: set `motionBlur: false` on a stepped character stage; the camera can still be smooth, and `finish.mjs` supplies the delivery blur if the film uses it (3d.md section 4). Light: no rig. The light vector lives in the material. If the scene needs shadows on a ground, `k.ground({ shadowOpacity: 0.25 })` with a hard `shadowSoftness: 1`.

### 2D fallback

```js
tl.to("#sprite", { backgroundPosition: "-12000px 0", ease: "steps(24)", duration: 2 }, 0);   // 24 drawings over 2 s = 12 per second
```
Shade layer: the same silhouette in `mix-blend-mode: multiply` with a tint colour; outline: SVG `feMorphology operator="dilate" radius="2"` on a flat-fill copy behind the character.

## What makes a cheap imitation

- Default MeshToonMaterial and computed normals: noisy terminators, a plastic look.
- Smooth in-betweens everywhere, then a filter: it reads as 3D with an outline.
- No imperfection per key: the model rotates like a rigid object.
- Constant-width black outline: no taper, no erasing.
- Photographic effects (bloom, DoF, blur) layered on a toon character.
- PBR gloss with a toon ramp: the specular belongs to a different style.
- Colour chosen by multiplying the lit colour by grey: Motomura argues the shade colour is a design decision.

## Sources

- https://www.ggxrd.com/Motomura_Junya_GuiltyGearXrd.pdf (fetched, text extracted with pdftotext): the shading, vertex-colour, normals, outline, limited-animation and bone-count details above.
- https://www.redsharknews.com/why-netflixs-arcane-looks-so-good-how-fortiche-ramped-up-the-animation-pipeline (fetched): 12 fps effects, 24 fps characters, software stack, 300+ artists.
- https://blog.syncsketch.com/creator-stories/arcane-fortiche/ (fetched): keyframe only, 80 animators, 2D effects over 3D, painted backgrounds.
- https://en.wikipedia.org/wiki/Cel_shading (fetched): quantised lighting; wireframe (back-face) and edge-detection outline methods.
- https://www.awn.com/animationworld/rewriting-visual-rule-book-spider-man-spider-verse (fetched): 25+ Nuke tools, Hatcher and Thresher.
- https://www.sidefx.com/community/spider-man-into-the-spider-verse/ (fetched): Houdini for line work (Inklines), FX and stylised effects.
- https://www.gamedeveloper.com/art/see-i-guilty-gear-xrd-i-s-striking-2d-3d-art-deconstructed-at-gdc-2015 (fetched): announcement only; no extra techniques.
- Not sourced: Arcane's lighting colour palette, exact brush workflow, and whether Fortiche used any shader beyond "custom shaders" (unverified). The vertex-colour channel assignment and 0.22 threshold range in the code are our own choices.
