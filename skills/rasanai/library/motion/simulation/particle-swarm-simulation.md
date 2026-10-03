---
id: "particle-swarm-simulation"
name: "Particle swarm that obeys a rule (boids on k.simulate, curl swarms on k.gpuSimulate)"
space: "3d"
family: "simulation"
references: ["Craig Reynolds, boids (SIGGRAPH 1987), Batman Returns bats and penguins", "William Reeves particle systems (Star Trek II Genesis effect)", "Houdini POP solver with POP Force / curl noise"]
timing: {"frame_rate":"30 fps comp; CPU sim fixed dt 1/60, GPU sim dt 1/240","holds_ms":[500,1200],"durations_ms":[1600,2800,4500],"resolve_s":[1.2,2.0],"notes":"checkpoint every 0.5 s so any seek restarts from a stored state"}
eases: {"key":"expo.out","assemble":"expo.out","drift":"sine.inOut","notes":"the swarm's own motion comes from the rule, not from eases; eases govern when the rule's weights change and when particles lock to targets"}
camera: {"lens_mm":[35,85],"moves":["slow push through the flock","arc around a swarm that resolves into the product","rack focus from foreground particles to the logo as it forms"],"rules":["parallax is the proof of depth: keep particles between the camera and the subject","motion blur streaks speed; 180 degree shutter","a swarm with no hero reads as a screensaver: it needs a target, a leader, or an event"]}
recipe_2d: "GSAP: 60-200 absolutely positioned <i> dots; each gets a seeded start (a mulberry32 you write) and a tween along a precomputed path from the same rule evaluated in JS before the timeline is built (positions[t][i] baked into arrays, then gsap.to with keyframes), stagger {each: 0.004, from: 'center'}, ease 'expo.out' to the layout slot. Bake, do not simulate live."
recipe_3d: "Rasan3D: k.simulate('swarm',{init(s,k){...k.rng(seed)...},step(s,dt,t,k){separation/alignment/cohesion + seek},dt:1/60,checkpointEvery:0.5}) -> sim.at(t) in pose() writes an InstancedMesh (matrix from position + velocity quaternion); assembly into a logo = k.surfacePoints(mesh,N,seed) targets with pose-level blend pos = mix(swarm, target, k.prog(t,a,b,'expo.out')) staggered by distance; GPU variant: k.gpuSimulate('cloud',{size:128,fields:['pos','vel'],dt:1/240,step:{pos:glsl,vel:glsl},init:{...}}) with r3Curl3 in the velocity step and a Points ShaderMaterial reading sim.at(t).textures.pos; post {bloom:{strength:0.2,threshold:1.15}}; motionBlur default."
pitfalls: ["state carried in pose() or a free-running loop: not seek-safe, the gate errors","Math.random in init or in the step: only k.rng(seed) and position-hashes","O(N^2) boids with N in the thousands: seek cost from t=0 explodes (use a spatial hash or the GPU variant)","a swarm with no event: nothing to read, the nebula-of-particles cliche the 3D reference bans","every particle emissive: bloom soup; keep them lit meshes with one emissive leader","particles that never interact with the camera or the product","timestep too large: boids jitter or tunnel at speed; fixed dt only"]
instruct: {"all":"State the rule in one line per behaviour (separation, alignment, cohesion, seek) with its radius and weight, then implement it in k.simulate with a fixed dt. All randomness from k.rng(seed) inside init. pose() only reads sim.at(t) and writes instance matrices; it never integrates. Give the swarm one event: a leader path, a target to resolve into, an obstacle.","claude":"You are inclined to add emissive trails and a nebula look: do not. Make particles small lit shapes, give one particle (the leader) the accent, and describe in a comment what the swarm is doing at each second of the shot. Write the N and the neighbour search cost in a comment and keep N under 600 for the CPU version.","gpt":"You will mutate positions inside the animation callback (positions[i] += velocity[i]) and call Math.random; both break seeking. Put the integration in step(), the seed in k.rng(seed), and read the result from sim.at(t). Do not call requestAnimationFrame or create a THREE.Clock."}
verified: {"sources_fetched":6,"non_wikipedia":5,"colours":"n/a","colour_images":[],"grid":"n/a","timings":"partial","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://www.red3d.com/cwr/boids/", "https://en.wikipedia.org/wiki/Particle_system", "https://www.sidefx.com/docs/houdini/nodes/dop/popforce.html", "https://www.cs.ubc.ca/~rbridson/docs/bridson-siggraph2007-curlnoise.pdf", "local: .context/open-kit-spec.md (k.simulate and k.gpuSimulate contract)", "local: skills/rasanai/stage3d/rasan3d.js (makeSim, makeGpuSim)"]
---
## What it is

A flock, a swarm or a cloud whose motion is the output of a small rule set, not a path someone keyed. In a film it is the moment a mass of small things becomes legible: it follows a leader through a space, parts around the product, or resolves into a mark. Because Rasan3D renders sub-frames out of order, the simulation must be a pure function of time: `k.simulate` integrates at a fixed step from the nearest cached checkpoint, so any seek order gives the same swarm.

## The defining traits (numbers)

- **Reynolds' three rules** (red3d.com): separation (steer to avoid crowding local flockmates), alignment (steer towards the average heading), cohesion (steer towards the average position). A boid has a limited neighbourhood, defined by a distance and an angle from its heading. The 1987 paper "Flocks, Herds, and Schools" was shown at SIGGRAPH; the first significant film use was Batman Returns (1992) (red3d.com).
- **Particle systems** (Wikipedia): emission, simulation, rendering; Reeves defined moving points in 1983 (Genesis effect in Star Trek II, 1982). Modern forms add flocking and fluid dynamics.
- **Houdini equivalent:** a POP Solver updates particles from velocity and forces; a POP Force node with curl noise gives swirling, organic motion (sidefx).
- **Divergence-free noise:** velocity = curl of a noise potential; incompressible, no sinks where particles pile up ("gutters"), amplitude can be modulated in space (Bridson, Hourihan, Nordenstam, SIGGRAPH 2007). The 2D form is (d psi/dy, -d psi/dx); in 3D the potential is a vector of three noise functions. `r3Curl3(p, t)` is that.
- **Our starting weights (not from the sources, tune by eye):** separation radius about 0.35 of the flock spacing, weight 1.6; alignment and cohesion radius 1.2, weights 1.0 and 0.8; max speed 2.2 world units/s; max steering force 6. Perception radius 3-4 body lengths is a common choice; unverified.
- **Cost arithmetic (ours):** an all-pairs step with N = 480 is 230,400 pair tests; at dt = 1/60 a 6 s shot is 360 steps (about 83M tests) the first time a late frame is requested, then cached by checkpoints every 30 steps. The GPU variant at 128 x 128 = 16,384 particles and dt = 1/240 needs 1,440 passes to reach 6 s.

## How to build it

### 3D (Rasan3D), CPU boids

```js
async build(k) {
  const { THREE } = k;
  const N = 480;
  const sim = k.simulate("swarm", {
    dt: 1 / 60, checkpointEvery: 0.5,
    init(s, k) {
      const r = k.rng(7); s.p = new Float32Array(N * 3); s.v = new Float32Array(N * 3);
      for (let i = 0; i < N; i++) { for (let a = 0; a < 3; a++) { s.p[i * 3 + a] = (r() - 0.5) * 6; s.v[i * 3 + a] = (r() - 0.5) * 0.6; } }
    },
    step(s, dt, t) {
      const P = s.p, V = s.v, RS = 0.35, RP = 1.2, MAXV = 2.2, MAXF = 6;
      // leader path: a pure function of t, so the seek is exact
      const lx = Math.sin(t * 0.7) * 3, ly = Math.sin(t * 1.1) * 1.2, lz = Math.cos(t * 0.5) * 2;
      for (let i = 0; i < N; i++) {
        let sx = 0, sy = 0, sz = 0, ax = 0, ay = 0, az = 0, cx = 0, cy = 0, cz = 0, n = 0;
        for (let j = 0; j < N; j++) { if (j === i) continue;
          const dx = P[j * 3] - P[i * 3], dy = P[j * 3 + 1] - P[i * 3 + 1], dz = P[j * 3 + 2] - P[i * 3 + 2], d2 = dx * dx + dy * dy + dz * dz;
          if (d2 > RP * RP) continue; n++;
          ax += V[j * 3]; ay += V[j * 3 + 1]; az += V[j * 3 + 2]; cx += dx; cy += dy; cz += dz;
          if (d2 < RS * RS) { const w = 1 / (d2 + 1e-4); sx -= dx * w; sy -= dy * w; sz -= dz * w; } }
        let fx = sx * 1.6, fy = sy * 1.6, fz = sz * 1.6;
        if (n) { fx += (ax / n - V[i * 3]) * 1.0 + (cx / n) * 0.8; fy += (ay / n - V[i * 3 + 1]) * 1.0 + (cy / n) * 0.8; fz += (az / n - V[i * 3 + 2]) * 1.0 + (cz / n) * 0.8; }
        fx += (lx - P[i * 3]) * 0.35; fy += (ly - P[i * 3 + 1]) * 0.35; fz += (lz - P[i * 3 + 2]) * 0.35;      // seek the leader
        const fl = Math.hypot(fx, fy, fz) || 1, fs = Math.min(fl, MAXF) / fl;
        V[i * 3] += fx * fs * dt; V[i * 3 + 1] += fy * fs * dt; V[i * 3 + 2] += fz * fs * dt;
        const vl = Math.hypot(V[i * 3], V[i * 3 + 1], V[i * 3 + 2]) || 1, vs = Math.min(vl, MAXV) / vl;
        V[i * 3] *= vs; V[i * 3 + 1] *= vs; V[i * 3 + 2] *= vs;
      }
      for (let i = 0; i < N * 3; i++) P[i] += V[i] * dt;                    // positions after all velocities: order-independent
    },
  });
  const body = new THREE.InstancedMesh(new THREE.ConeGeometry(0.035, 0.14, 5), k.material("matte", { color: "#cfd2d8" }), N);
  body.frustumCulled = false; k.scene.add(body);
  return { sim, body, dummy: new THREE.Object3D(), up: new THREE.Vector3(0, 1, 0), v: new THREE.Vector3() };
},
pose(t, k) {
  const { sim, body, dummy, up, v } = k.objects, s = sim.at(t);
  for (let i = 0; i < body.count; i++) {
    dummy.position.set(s.p[i * 3], s.p[i * 3 + 1], s.p[i * 3 + 2]);
    v.set(s.v[i * 3], s.v[i * 3 + 1], s.v[i * 3 + 2]).normalize();
    dummy.quaternion.setFromUnitVectors(up, v); dummy.updateMatrix(); body.setMatrixAt(i, dummy.matrix);
  }
  body.instanceMatrix.needsUpdate = true;
},
```

Resolve into a mark (assembly, pose-level, still a pure function of t): `const tgt = await k.surfacePoints(logoMesh, N, 3)` (it is async and returns a Float32Array of xyz), then in `pose` blend each particle by `k.prog(t, 4.2 + 0.9 * dist01, 5.4 + 0.9 * dist01, "expo.out")` where `dist01` is the particle's normalised distance from the origin: the nearest lock first, outward last, the last one landing in the back half of the shot (3d.md section 8).

### 3D, GPU curl swarm (16,384 particles)

```js
const cloud = k.gpuSimulate("cloud", {
  size: 128, fields: ["pos", "vel"], dt: 1 / 240, checkpointEvery: 0.5, seed: 11,
  init: {
    pos: `void main(){ vec2 uv = gl_FragCoord.xy / resolution.xy; gl_FragColor = vec4((vec3(r3Hash(uv), r3Hash(uv + 3.1), r3Hash(uv + 7.7)) - 0.5) * 6.0, 1.0); }`,
    vel: `void main(){ gl_FragColor = vec4(0.0); }` },
  step: {
    vel: `#include <r3/noise>
      void main(){ vec2 uv = gl_FragCoord.xy / resolution.xy; vec3 p = texture2D(tPos, uv).xyz, v = texture2D(tVel, uv).xyz;
        vec3 f = r3Curl3(p * 0.35, uTime * 0.15) * 1.4 - p * 0.08;      // curl flow, plus a soft pull to the origin
        v = mix(v, f, 1.0 - exp(-3.0 * uDt)); gl_FragColor = vec4(v, 1.0); }`,
    pos: `void main(){ vec2 uv = gl_FragCoord.xy / resolution.xy; gl_FragColor = vec4(texture2D(tPos, uv).xyz + texture2D(tVel, uv).xyz * uDt, 1.0); }` },
});
// pose: pointsMaterial.uniforms.tPos.value = cloud.at(t).textures.pos;   draw as Points whose vertex shader reads tPos by the point's uv
```

Per the runtime comment, state is quantised to `dt`, seeking back restores a stored texture checkpoint, and `.at()` must be called from `pose()`, never from `build()`. Check `sim.stats` for restores and steps.

Camera: lens 50 mm, `fstop 4`, a `power3.inOut` push of 1.5 m over 2.8 s through the flock, a rack to the logo during the resolve. Post: bloom 0.2, threshold 1.15; one leader particle `emissive`.

### 2D fallback

Bake in JS before building the timeline (a pure function of the seed), then tween the baked frames:

```js
const frames = bakeBoids(seed, 60, 1 / 30);                    // your own deterministic function: frames[f][i] = [x, y]
dots.forEach((el, i) => {
  tl.to(el, { keyframes: frames.map((fr) => ({ x: fr[i][0], y: fr[i][1], duration: 1 / 30, ease: "power1.inOut" })) }, 0);
});
```
Smooth the baked data with `power1.inOut` (a set ease) rather than `none`; one tween per dot, 60-200 dots at most.

## What makes a cheap imitation

- A glowing particle nebula with additive blending: the 3D reference bans it explicitly.
- Random-walk jitter standing in for flocking: no cohesion, so the swarm is noise.
- Particles that pass through the product and each other with no response.
- A flock with a constant-speed orbit and no event.
- A simulation run live and recorded: not seek-safe, cannot be re-rendered.
- Uniform particle size, no depth variation, no motion blur: it reads as a 2D overlay.

## Sources

- https://www.red3d.com/cwr/boids/ (fetched): the three rules, neighbourhood by distance and angle, 1987 paper, Batman Returns.
- https://en.wikipedia.org/wiki/Particle_system (fetched): emission, simulation, rendering; Reeves 1983; flocking and fluids as later extensions.
- https://www.sidefx.com/docs/houdini/nodes/dop/popforce.html (fetched): POP Force node, curl noise example.
- https://www.cs.ubc.ca/~rbridson/docs/bridson-siggraph2007-curlnoise.pdf (fetched, 3 pages read): curl of a noise potential, incompressible, no sinks.
- local: `.context/open-kit-spec.md` and `skills/rasanai/stage3d/rasan3d.js` for the `k.simulate` / `k.gpuSimulate` signatures (the GLSL conventions `tPos`, `tVel`, `uDt`, `uTime`, `r3Hash(vec2)` come from `makeGpuSim`).
- Weights and radii above are our starting values, unverified against any production.
