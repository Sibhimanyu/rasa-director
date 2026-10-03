---
id: "cloth-simulation"
name: "Cloth simulation (XPBD: inextensible, bends only, driven by pins and wind)"
space: "3d"
family: "simulation"
references: ["Matthias Mueller, Ten Minute Physics (XPBD, cloth)", "Position Based Dynamics (Mueller et al. 2007), Jakobsen 2001", "Houdini Vellum cloth (stretch and bend constraints, substeps)"]
timing: {"frame_rate":"30 fps comp; sim dt 1/120 with 4 substeps (h = 1/480 s)","holds_ms":[400,1000],"durations_ms":[1600,2600,4000],"reveal_pull_s":[1.4,2.4],"notes":"the camera shows the cloth after the pull: the settle (0.8-1.5 s) is the readable part"}
eases: {"key":"power3.inOut","pin_path":"power3.inOut","settle":"physical (damped), never eased","notes":"drive pins with eased paths that are functions of t; everything else is the solver"}
camera: {"lens_mm":[85,135],"moves":["slow arc of 15-30 degrees during the pull","push-in of 2-5 percent on the settle","rack focus from the edge to the revealed object"],"rules":["raking side light (rig 'window' or 'low-key') makes folds read as form","DoF f/2.8-4 so the fabric edge blurs and the fold peaks stay sharp","cloth needs scale: block it in metres (a 1.2 x 0.9 m sheet)"]}
recipe_2d: "SVG: a flat banner with <feTurbulence type='fractalNoise' baseFrequency='0.008 0.02' numOctaves='2'> into <feDisplacementMap scale='28'> with scale tweened 0 -> 28 -> 10 over 1.6 s ('sine.inOut') and baseFrequency tweened a little for flutter; a linear-gradient overlay (mix-blend-mode: multiply) shifts with the same tween to fake fold shading. Reads as a flag, not as cloth on an object: use for flags and banners only."
recipe_3d: "Rasan3D: k.simulate('cloth',{dt:1/120,checkpointEvery:0.5,init(s,k){grid positions Float32Array p, prev, v, inverse mass w; top-corner pins},step(s,dt,t,k){4 substeps: v += g*h + wind(t,x); p += v*h; distance constraints on grid edges and diagonals with zero compliance (Mueller: infinitely stiff stretch), bend as extra distance constraints two apart with small compliance; sphere/ground collision; v = (p - prev)/h}}); build: PlaneGeometry(1.2,0.9,40,28) with MeshPhysicalMaterial sheen, DoubleSide; pose(t): const s = sim.at(t); copy s.p into the position attribute; computeVertexNormals(); camera keys lens 85-135, fstop 2.8; k.rig('window',{dir:[-1,0.35,0.4],shadowSoftness:6}); post {grain:0.015}."
pitfalls: ["force-based springs with high stiffness: explode (Mueller: force based methods explode); use position-based constraints","iterations instead of substeps for the time budget (Mueller: substeps are much more effective)","cloth that stretches visibly: real cloth stretches 0-5 percent at most","wind from Math.random or a per-frame random: flickers and is not seek-safe; use a smooth function of (t, position)","a mesh too coarse to show folds (under about 30 x 20 for a sheet filling the frame) or too dense to simulate in the checkpoint budget","flat matte colour with a front light: no folds visible; fabric needs raking light and sheen","pins that teleport: drive them along eased paths"]
instruct: {"all":"Write the solver as position-based dynamics: predict, project distance constraints (stretch compliance 0, bend a small compliance), update velocity from the position change. Use substeps, not more iterations. Everything that moves the cloth (pins, wind, a collider) is a function of the step's t. State is typed arrays inside k.simulate's state object. pose() copies sim.at(t) into the geometry and recomputes normals; it never integrates.","claude":"You will want to make it silky and slow with extra bloom and a soft gradient. Keep the light raking and hard enough that the folds read, set shadowSoftness 5-6, and state the sheet's real size, mesh resolution, dt, substeps and an estimated cost in a comment before the code.","gpt":"You tend to write mass-spring forces (F = -k x) with explicit Euler and then lower dt until it stops exploding; do not. Use the XPBD loop given here. You also tend to keep cloth state in a class field mutated by the draw callback: all state must live in k.simulate's init/step, and wind must be sin/cos of (t, x, y), never Math.random."}
sources: ["https://matthias-research.github.io/pages/tenMinutePhysics/14-cloth.pdf", "https://matthias-research.github.io/pages/tenMinutePhysics/09-xpbd.pdf", "https://www.sidefx.com/docs/houdini/vellum/overview.html", "local: skills/rasanai/stage3d/rasan3d.js (makeSim)", "local: .context/open-kit-spec.md"]
---
## What it is

A sheet that behaves like fabric: it hangs from pins, is pulled off an object, flutters in a wind and settles, folding only where it bends. In motion design the cloth is almost always a reveal (a cover pulled off the product), a flag or banner, or a transition (a sheet sweeping across the frame). It is the hardest thing in the library to fake with keyframes and one of the cheapest to simulate if you use position-based dynamics.

## The defining traits (numbers)

From Matthias Mueller's Ten Minute Physics cloth slides:

- "Cloth only bends": cloth is stretchable only between 0 and 5 percent with a very strong stretch limit; too much stretching is a bad visual artifact; gravity is rarely strong enough to cause noticeable stretching. So simulate an infinitely stiff material.
- Force-based methods explode on stiff constraints; use **zero-compliance distance constraints on the cloth mesh edges with XPBD**, "no parameters to tune".
- The only remaining effect is bending resistance, one parameter, handled as a constraint between two neighbouring triangles: either an extra compliant distance constraint (simple, weak in the flat state) or an angle constraint (strong in the flat state, more expensive).

From the XPBD slides:

- PBD predicts positions, projects constraints, then sets velocity from the position change: `v = (x - p) / dt`. Position-based simulation is unconditionally stable and has no drift.
- "Spending fixed time budget with sub-steps is much more effective than with iterations"; XPBD needs no lambda tracking when used with one iteration per substep.

From Houdini's Vellum overview (sidefx): Vellum is a Position Based Dynamics framework for cloth, hair, softbodies, balloons and grains; cloth has stretch and bend constraints; the solver exposes substeps and constraint iterations; forces include gravity, wind, wind drag and friction.

Our own starting values (derived, unverified against production): dt 1/120 with 4 substeps (h = 1/480 s); grid 41 x 29 particles for a 1.2 x 0.9 m sheet (about 3 cm spacing); bend compliance 2e-4 on two-apart constraints; velocity damping 0.2 per second; wind acceleration 0.6-1.2 m/s^2 modulated by sin(1.3 t + 0.8 x); sphere collider with 5 mm skin.

Cost (our arithmetic): 41 x 29 = 1,189 particles; about 2,300 structural, 2,200 diagonal and 2,100 bend constraints, 6,600 solves per substep, 26,400 per step, 3.2M per second of sim time: a 6 s shot is about 19M constraint projections the first time a late frame is requested, then checkpointed every 0.5 s.

## How to build it

### 3D (Rasan3D)

```js
async build(k) {
  const { THREE } = k;
  const NX = 41, NY = 29, W = 1.2, H = 0.9, ez = k.ease("power3.inOut");
  const idx = (i, j) => j * NX + i;
  const rest = []; // [a, b, length, compliance]
  const addC = (a, b, c, p) => rest.push([a, b, Math.hypot(p[a * 3] - p[b * 3], p[a * 3 + 1] - p[b * 3 + 1], p[a * 3 + 2] - p[b * 3 + 2]), c]);
  const sim = k.simulate("cloth", {
    dt: 1 / 120, checkpointEvery: 0.5,
    init(s) {
      s.p = new Float32Array(NX * NY * 3); s.q = new Float32Array(NX * NY * 3); s.v = new Float32Array(NX * NY * 3);
      for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) { const a = idx(i, j) * 3;     // a sheet standing in the xy plane, top row at y = 1.5
        s.p[a] = (i / (NX - 1) - 0.5) * W; s.p[a + 1] = 1.5 - (j / (NY - 1)) * H; s.p[a + 2] = 0; }
      rest.length = 0;
      for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) {
        if (i + 1 < NX) addC(idx(i, j), idx(i + 1, j), 0, s.p); if (j + 1 < NY) addC(idx(i, j), idx(i, j + 1), 0, s.p);
        if (i + 1 < NX && j + 1 < NY) { addC(idx(i, j), idx(i + 1, j + 1), 0, s.p); addC(idx(i + 1, j), idx(i, j + 1), 0, s.p); }   // shear: zero compliance
        if (i + 2 < NX) addC(idx(i, j), idx(i + 2, j), 2e-4, s.p); if (j + 2 < NY) addC(idx(i, j), idx(i, j + 2), 2e-4, s.p);          // bend
      }
    },
    step(s, dt, t) {
      const SUB = 4, h = dt / SUB, g = -9.81, P = s.p, Q = s.q, V = s.v, n = NX * NY;
      for (let ss = 0; ss < SUB; ss++) {
        for (let m = 0; m < n; m++) {
          const a = m * 3, i = m % NX, j = (m / NX) | 0, pinned = j === 0 && (i === 0 || i === NX - 1);
          if (pinned) { const u = ez(Math.min(Math.max((t - 1.0) / 1.6, 0), 1)); Q[a] = P[a]; Q[a + 1] = P[a + 1]; Q[a + 2] = P[a + 2];
            P[a] = (i / (NX - 1) - 0.5) * W + 1.1 * u; P[a + 1] = 1.5 + 0.5 * u; P[a + 2] = 0.2 * u; V[a] = V[a + 1] = V[a + 2] = 0; continue; }   // pull off along an eased path
          const wind = (0.9 + 0.3 * Math.sin(1.3 * t + 0.8 * P[a])) * (t > 1.0 ? 1 : 0);
          V[a] += 0.5 * wind * h; V[a + 1] += g * h; V[a + 2] += wind * h; V[a] *= 0.9997; V[a + 1] *= 0.9997; V[a + 2] *= 0.9997;
          Q[a] = P[a]; Q[a + 1] = P[a + 1]; Q[a + 2] = P[a + 2]; P[a] += V[a] * h; P[a + 1] += V[a + 1] * h; P[a + 2] += V[a + 2] * h;
        }
        for (const [A, B, L, comp] of rest) {                                     // XPBD distance constraint, one iteration per substep
          const a = A * 3, b = B * 3, wa = isPinned(A) ? 0 : 1, wb = isPinned(B) ? 0 : 1;
          const dx = P[a] - P[b], dy = P[a + 1] - P[b + 1], dz = P[a + 2] - P[b + 2], len = Math.hypot(dx, dy, dz) || 1e-9;
          const dl = -(len - L) / (wa + wb + comp / (h * h)); if (wa + wb === 0) continue;
          const nx = dx / len, ny = dy / len, nz = dz / len;
          P[a] += wa * dl * nx; P[a + 1] += wa * dl * ny; P[a + 2] += wa * dl * nz; P[b] -= wb * dl * nx; P[b + 1] -= wb * dl * ny; P[b + 2] -= wb * dl * nz;
        }
        for (let m = 0; m < n; m++) { const a = m * 3; if (P[a + 1] < 0.0) P[a + 1] = 0.0;   // ground; add a sphere collider here for the product
          V[a] = (P[a] - Q[a]) / h; V[a + 1] = (P[a + 1] - Q[a + 1]) / h; V[a + 2] = (P[a + 2] - Q[a + 2]) / h; }
      }
    },
  });
  function isPinned(m) { const i = m % NX, j = (m / NX) | 0; return j === 0 && (i === 0 || i === NX - 1); }
  const geo = new THREE.PlaneGeometry(W, H, NX - 1, NY - 1);
  const mesh = new THREE.Mesh(geo, new THREE.MeshPhysicalMaterial({ color: "#d9d4c7", roughness: 0.9, sheen: 1, sheenRoughness: 0.5, sheenColor: new THREE.Color("#ffffff"), side: THREE.DoubleSide }));
  mesh.frustumCulled = false; mesh.castShadow = mesh.receiveShadow = true; k.scene.add(mesh);
  k.rig("window", { dir: [-1, 0.35, 0.4], intensity: 1.1, shadows: true, shadowSoftness: 6 });
  k.ground({ y: 0, shadowOpacity: 0.3 });
  return { sim, geo, mesh };
},
pose(t, k) {
  const { sim, geo } = k.objects, s = sim.at(t), pos = geo.attributes.position;
  for (let m = 0; m < pos.count; m++) pos.setXYZ(m, s.p[m * 3], s.p[m * 3 + 1], s.p[m * 3 + 2]);   // vertex order of PlaneGeometry is row-major from the top-left: matches idx(i, j)
  pos.needsUpdate = true; geo.computeVertexNormals();
},
```

Notes:

- Camera: `lens` 100 mm, `fstop 2.8`, pos arc of 20 degrees over the pull with `power3.inOut`, a 4 percent push during the settle. The cloth's physics is in `step`; the camera keys are separate and carry the film's eases.
- The code is a compact sketch of the loop, not a library: `isPinned` is hoisted, constraints are an array of tuples. For 1,000+ particles switch to typed arrays of constraint indices (a loop over `rest` of 6,600 tuples with destructuring is slow in V8). Keep the structure; optimise the data layout.
- `sim.at(t)` returns a read-only state (the runtime clones for the partial step). Do not mutate it.
- The `t` handed to `step` is `N * dt` of the fixed step, so pin paths and wind that use it are identical on every seek.
- Verify: `stage3d.mjs check` for seek-safety; then strip frames 1.2-3.0 s at 15 fps and look for popping at checkpoint boundaries (there should be none: checkpoints are exact clones).

### 2D fallback

```js
tl.fromTo("#turb", { attr: { baseFrequency: "0.008 0.02" } }, { attr: { baseFrequency: "0.012 0.026" }, duration: 1.6, ease: "sine.inOut" }, 0)
  .fromTo("#disp", { attr: { scale: 0 } }, { attr: { scale: 28 }, duration: 1.6, ease: "sine.inOut" }, 0)
  .to("#disp", { attr: { scale: 10 }, duration: 1.0, ease: "power2.out" }, 1.6);
```
It animates a displacement, not a fold: only for banners and flags.

## What makes a cheap imitation

- A plane with a sine-wave vertex shader: it ripples like water and never folds or hangs.
- Cloth that stretches and snaps back (springs), or a rubber sheet that bounces.
- No collision with the object it is revealing: it passes through the product.
- Light from the front, flat fabric colour: no folds read.
- A perfect symmetric drop with no wind or asymmetry (pull from two corners at the same time).
- Mesh with visible quad edges: too coarse, or flat shading.

## Sources

- https://matthias-research.github.io/pages/tenMinutePhysics/14-cloth.pdf (fetched, text extracted): cloth only bends, 0-5 percent stretch, zero-compliance distance constraints, bending as two options.
- https://matthias-research.github.io/pages/tenMinutePhysics/09-xpbd.pdf (fetched, text extracted): PBD loop, sub-steps vs iterations, XPBD without lambda tracking.
- https://www.sidefx.com/docs/houdini/vellum/overview.html (fetched): Vellum constraints, substeps, forces.
- local: `skills/rasanai/stage3d/rasan3d.js` (`makeSim`: fixed-step integration from cached checkpoints, `at(t)` with a partial step on a clone).
- Our own: grid size, compliance, damping, wind, cost arithmetic; the sketch code has not been run in this session (unverified).
