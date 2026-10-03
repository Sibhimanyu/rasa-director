---
id: "instanced-field-endless-floor"
name: "Instanced field, endless floor (a world that is always under the camera, seeded per cell)"
space: "3d"
family: "3d-cgi"
references: ["pdoom paperclips plate (infinite lattice, low glide, ceiling slams on beats)", "procedural generation by seed (Minecraft-style cell worlds)", "three.js InstancedMesh"]
timing: {"frame_rate":"30 fps comp, motion blur 180 degrees","holds_ms":[800,1500],"durations_ms":[2600,6000,9000],"glide_m_per_s":[0.9,1.6],"notes":"pdoom glides at 0.4 cells per second (16 units over a 40-unit cell): slow enough to be hypnotic; ceiling slams last 180 ms (outExpo) on the beat"}
eases: {"key":"sine.inOut","swing":"power3.inOut","slam":"expo.out","notes":"the glide is an eased leg (sine.inOut) or a declared intent if it is truly constant; slams on beats use expo.out"}
camera: {"lens_mm":[24,35],"moves":["crane from overhead (90 degrees) to a 10 degree low glide","long dolly across the floor at 1.2-1.6 m eye height","ceiling closing in: a second field above, height keyed on beats"],"rules":["low and wide so the repetition reads as space and parallax is strong","f/2.8-5.6 with focus 8-12 m: near cells blur, far cells fog","fog colour equals the ground; fog far is under half the field depth"]}
recipe_2d: "Parallax lanes, not a neon grid: 3 divs with repeating background-image tiles (shape, 120 px; 80 px; 40 px) scrolling at speeds proportional to 1/depth (e.g. 360, 180, 90 px per s) via gsap backgroundPositionX tweens on 'sine.inOut' over 6 s, scale and blur decreasing with depth, a gradient fade at the horizon. It conveys travel but not true perspective."
recipe_3d: "Rasan3D: const field = k.instanceField({ geometry, material, cell: 2.4, count: [31, 41], around: 'camera', seed: 9, place(cx, cz, rng, o){ read rng() in a fixed order: gaps o.visible, offsets o.x/o.z (-0.5..0.5 of a cell), o.yaw, o.scale [x,y,z], o.color } }); k.scene.add(field); camera.pos keys eased along -z at 1.5 m; fog {color: ground, near: 8, far: 44}; one shadow-casting directional light whose position follows the camera in pose(); optional beat pulse through material.onBeforeCompile with a position-hash (Rasan3D.glsl.core r3Hash12 of the cell index), not the instance id; ceiling = a second instanceField with mesh.position.y keyed (expo.out slams on beats); post {grain:0.03, vignette:0.3}; motionBlur default."
pitfalls: ["a constant-speed glide with no event: the gate warns linear-drift; ease it or declare the intent (reason 12+ characters)","uniform repetition: 'procedural oatmeal' (Wikipedia): vary scale, yaw, gaps, one rare hero cell, one accent colour","hashing the instance index instead of the world cell: the pattern changes as cells re-tile around the camera","Math.random or the clock in place(): the field must be the same under any seek order","fog far beyond half the field extent: the pop-in edge of the field becomes visible","shadows from one fixed light frustum: shadow disappears as the camera leaves it; move the light with the camera","a neon grid floor or glowing cubes: banned as a cliche (3d.md)","too many unique materials: one geometry, one material, instance colour"]
instruct: {"all":"Build the world as a function of the cell index and a seed: place(cx, cz, rng, o) reads rng() in a fixed order and fills offset, yaw, scale, colour and visibility. The field follows the camera; nothing depends on history. State cell size, instance count, field extent and fog distances (far under half the shorter extent). Vary the cells: gaps, scale spread, one hero, one accent. The camera is eased; if the glide is the shot, declare linear-drift with a reason.","claude":"You tend to make an endless sea of glowing tiles. Keep the cells matte and low contrast, the accent rare (one cell in about 35), the fog heavy, and the light low and warm. Write the instance count, extent and speed in cells per second in a comment and check the speed is under about 0.7 cells per second for a calm feel.","gpt":"You tend to build a big static grid of meshes (N x N, thousands of draw calls or one huge InstancedMesh moved by the camera each frame with +=) and to randomise with Math.random per cell. Use k.instanceField, which re-tiles around the camera deterministically, and per-cell randomness only from the rng passed to place(). Do not move the field with +=; the camera keys carry the motion."}
sources: ["https://threejs.org/docs/#api/en/objects/InstancedMesh", "https://en.wikipedia.org/wiki/Procedural_generation", "https://developer.nvidia.com/gpugems/gpugems2/part-i-geometric-complexity/chapter-3-inside-geometry-instancing", "local: .context/pdoom-video/app/src/scenes/paperclips.ts (camera, ceil)", "local: .context/pdoom-video/app/src/scenes/paperclips-glsl.ts (CELL, floor stack and descending ceiling stack)", "local: .context/pdoom-video/docs/TREATMENT.md (paperclips plate)", "local: skills/rasanai/stage3d/glsl.js (Rasan3DLib.instanceField, r3FieldCell)"]
---
## What it is

A floor, a wall or a ceiling made of thousands of things that is always there wherever the camera goes. The trick is that only a bounded grid of instances exists; each instance is re-assigned to whichever world cell is nearest the camera, and everything about a world cell (offset, yaw, scale, colour, whether it exists) is generated from a seed and the cell's coordinates, so the same cell looks identical on every pass and any seek order. In pdoom the paperclips plate is this idea raymarched: an infinite lattice of engraved clips, a camera that swings from overhead to a low glide, then a ceiling stack that slams down on the beats until the viewer is in a single slot.

## The defining traits (numbers)

- **Procedural, seeded** (Wikipedia): a short seed deterministically generates a large world (Minecraft's 64-bit seed space, 18 quintillion variations); the risk is "procedural oatmeal", technically diverse but perceptually repetitive content.
- **`Rasan3DLib.instanceField` (glsl.js header):** `cell` (default 2), `count` (a number for a square grid or `[nx, nz]`; the field spans `nx * cell` by `nz * cell` around the camera), `around` ("camera", an object, a position or a function), `wrap`, `plane` ("xz" ground or "xy" wall), `y`, `seed`, and `place(cellX, cellZ, rng, o)` with `o` fields `x`, `z` (offset within the cell, -0.5 to 0.5 of a cell), `y`, `yaw`, `scale` (number or `[x, y, z]`), `color` (needs a material that uses instance colour), `visible`. The mesh updates itself before every render and shadow pass; "nothing depends on history".
- **three.js InstancedMesh:** `new InstancedMesh(geometry, material, count)` renders many copies with per-instance matrices and optional colours, one draw call (GPU Gems 2 ch. 3: roughly 1,000-4,000 batches per 30 fps frame is the old CPU budget that instancing exists to avoid); set `instanceMatrix.needsUpdate` after changes; frustum culling applies to the whole mesh (three.js docs).
- **Our sizing arithmetic:** cell 2.4 m, count `[31, 41]` is 1,271 instances spanning 74.4 m by 98.4 m. Looking down -z with a 28 mm lens (horizontal field 2 atan(18 / 28) = 65.6 degrees) the visible width at 49 m ahead is 1.29 x 49 = 63 m, which is inside the 74 m field width, so the side edges never show before the fog hides the far edge. Fog far = 44 m (0.9 of the 49 m half-depth).
- **pdoom's camera (paperclips.ts):** FOV 32 degrees vertical (about 35 mm in our terms); a crane from elevation pi/2 to 0.175 rad (10 degrees) on inOutCubic while the target glides; glide 16 world units per second after a 0.6 s inQuad ramp-in; cell 40, so about 0.4 cells per second; roll of 0.04 rad easing out. The ceiling heights are keyed 32, 18, 10, 6 units (0.8, 0.45, 0.25, 0.15 of a cell) with 0.18 s outExpo slams on the beats, ending at 1.1 units.
- **Scaled to our units (ours):** at cell 2.4 m the same ceiling keys are about 1.9, 1.1, 0.6 and 0.36 m; the same glide is about 0.96 m/s.

## How to build it

### 3D (Rasan3D)

```js
const POS = [[0, [0, 11, 3]], [2.6, [0, 1.6, 0], "power3.inOut"], [11, [0, 1.6, -12.6], "sine.inOut"]];   // overhead to low, then a 9 s glide of 12.6 m (1.4 m/s mean, 2.2 peak)
Rasan3D.stage({
  id: "07-floor", canvas, timeline: tl, duration: 11, fps: 30,
  camera: { pos: POS, target: [[0, [0, 0, 0]], [2.6, [0, 1.0, -8], "power3.inOut"], [11, [0, 1.0, -20], "sine.inOut"]], lens: [[0, 28]], fstop: 4, focus: [[0, 10]] },
  fog: { color: "#0d0e12", near: 8, far: 44 },
  environment: "none", toneMapping: "neutral",
  post: { grain: 0.03, vignette: 0.3 },
  async build(k) {
    const { THREE } = k;
    const RB = (await k.addon("geometries/RoundedBoxGeometry.js")).RoundedBoxGeometry;
    const geo = new RB(0.5, 1, 0.5, 3, 0.04); geo.translate(0, 0.5, 0);                    // sits on the floor, scales up from its base
    const mat = k.material("ceramic", { color: "#ffffff", roughness: 0.6 });               // white: the instance colour tints it
    const field = k.instanceField({
      geometry: geo, material: mat, cell: 2.4, count: [31, 41], around: "camera", seed: 9, y: 0,
      place(cx, cz, rng, o) {
        const g = rng(), ox = rng(), oz = rng(), yaw = rng(), hv = rng();                  // fixed read order: never skip a draw
        o.visible = g > 0.16;                                                              // 16 percent gaps
        o.x = (ox - 0.5) * 0.4; o.z = (oz - 0.5) * 0.4; o.yaw = yaw * Math.PI * 2;
        const hero = hv > 0.972;                                                           // about 1 in 36
        o.scale = hero ? [1.3, 2.4 + 2 * g, 1.3] : [1, 0.25 + 2.0 * g * g, 1];
        o.color = hero ? "#e4572e" : g < 0.5 ? "#cfcabd" : "#a9a498";
      },
    });
    k.scene.add(field);
    const sun = new THREE.DirectionalLight("#ffd9b0", 3.0); sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048);
    Object.assign(sun.shadow.camera, { left: -14, right: 14, top: 14, bottom: -14, near: 1, far: 40 });
    k.scene.add(sun, sun.target, new THREE.HemisphereLight("#4a5578", "#0d0e12", 0.35));
    k.ground({ y: 0, color: "#0d0e12", shadowOpacity: 0.0 });
    return { field, sun };
  },
  pose(t, k) {
    const c = k.at(t, POS), { sun } = k.objects;                                           // the same keys the camera uses: pure of t
    sun.target.position.set(c[0], 0, c[2] - 6); sun.position.set(c[0] - 7, 9, c[2] + 2);    // the shadow frustum travels with the camera
  },
});
```

Beat pulse on heights, hashed by the world cell (not the instance index, which re-maps as the field re-tiles):

```js
mat.onBeforeCompile = (sh) => {
  sh.uniforms.uPulse = { value: 0 }; mat.userData.sh = sh;
  sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\n" + Rasan3D.glsl.core + "\nuniform float uPulse;")
    .replace("#include <begin_vertex>", "#include <begin_vertex>\n vec2 cid = floor(instanceMatrix[3].xz / 2.4 + 0.5); transformed.y *= 1.0 + uPulse * 0.25 * r3Hash12(cid);");
};
// pose: if (mat.userData.sh) mat.userData.sh.uniforms.uPulse.value = Math.exp(-6 * ((t % 0.5))) ;   // 120 bpm kick, a function of t
```

Ceiling slam: a second `instanceField` (same seed offset, `place` scaled downward via a negative `y` scale or a flipped geometry), `ceil.position.y = k.at(t, [[2.6, 12], [3.0, 1.9, "expo.out"], [3.5, 1.1, "expo.out"], [4.0, 0.6, "expo.out"]])` keyed on the beats, camera lowered to half the gap. Only add it if the story is claustrophobia.

If the glide is the shot, declare it instead of easing:

```js
declare: { intent: { "linear-drift": "the endless glide across the floor is the shot", "never-rests": "the film is one unbroken travel; resting would end it" } },
```

Checks: strip 0.2 s of the glide to confirm no popping at cell hand-offs; run `stage3d.mjs check` (determinism: the field must render identically at t = 5 before and after seeking to t = 8). A still at 4K: near cells' edge AA and fog.

### 2D fallback

```js
["#lane1", "#lane2", "#lane3"].forEach((l, i) => tl.to(l, { backgroundPositionX: -[360, 180, 90][i] * 6, duration: 6, ease: "sine.inOut" }, 0));
```
Each lane is a repeating `background-image` tile at decreasing size, opacity and blur toward the horizon.

### Checks before a final render

1. Seek test: render t = 6 s, seek to 2 s, return to 6 s: identical pixels (the gate's `not-seek-safe`).
2. Edge test: a still at the end of the glide looking back (`target` behind) to confirm no hole in the field and that fog hides the far edge.
3. Cell hand-off: strip 1 s of the glide at 30 fps; no instance may change colour, scale or yaw while on screen (that means the hash used the instance index, not the cell).
4. Rhythm: count heroes in the first frame; about 1-3 visible, never zero for more than 2 s of travel at 1.4 m/s (heroes 1 in 36 cells, cells 2.4 m apart gives one every 11-14 m along a lane on average, so it is a matter of the area visible: widen the hero rate if the shot feels empty).

## What makes a cheap imitation

- A neon grid floor with a sun on the horizon (the retrowave cliche).
- A regular lattice of identical cubes with a camera at constant speed; no gaps, no hero, no accent.
- Cells that change appearance as you pass them (hash of the instance index or of a re-seeded random).
- Hard pop-in at the edge of the field: fog too short or too far.
- Emissive everything with bloom; one accent only.
- A camera that is always overhead or always at the same height: no crane, no arrival.

## Sources

- https://threejs.org/docs/#api/en/objects/InstancedMesh (fetched, summarised): constructor, `setMatrixAt`, `setColorAt`, `instanceMatrix.needsUpdate`, frustum culling.
- https://en.wikipedia.org/wiki/Procedural_generation (fetched): seeds, Minecraft's seed space, "procedural oatmeal".
- https://developer.nvidia.com/gpugems/gpugems2/part-i-geometric-complexity/chapter-3-inside-geometry-instancing (fetched): why instancing exists: CPUs manage roughly 1,000-4,000 batches per 30 fps frame, so thousands of separate meshes are not viable and one instanced draw is.
- local (pdoom): `app/src/scenes/paperclips.ts` (`camera()`, `ceil()`, FOV 32), `app/src/scenes/paperclips-glsl.ts` (`CELL = 40`, a floor stack and a descending ceiling stack, fill wave), `docs/TREATMENT.md` (the plate's description).
- local: `skills/rasanai/stage3d/glsl.js` (`Rasan3DLib.instanceField` documentation block, `r3FieldCell`).
- Our own: sizes, fog, speeds and the pulse hash. The snippet is untested in this session (unverified); in particular `Rasan3D.glsl.core` inside `onBeforeCompile` and the exact instance-colour behaviour of `k.material("ceramic")` should be checked on a still.
