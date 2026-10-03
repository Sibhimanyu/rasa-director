---
id: "fluid-smoke-curl-noise"
name: "Fluid and smoke from curl noise (divergence-free flow, volumetric and particle forms)"
space: "3d"
family: "simulation"
references: ["Bridson, Hourihan, Nordenstam: Curl-Noise for Procedural Fluid Flow (SIGGRAPH 2007)", "Jos Stam: Stable Fluids / Real-Time Fluid Dynamics for Games (GDC 2003)", "GPU Gems ch. 38: Fast Fluid Dynamics Simulation on the GPU", "Houdini Pyro (density and velocity fields; Curl Noise VOP)"]
timing: {"frame_rate":"30 fps comp; flow time scale 0.1-0.2 noise units per second","holds_ms":[800,2000],"durations_ms":[2400,4000,7000],"notes":"smoke is slow: if a feature of the plume lasts under 600 ms it reads as a splash, not smoke"}
eases: {"key":"sine.inOut","emit":"power2.out","notes":"eases drive emission amount, light, camera; the flow itself is the noise field, time-varying"}
camera: {"lens_mm":[50,100],"moves":["slow push past the plume","arc of 15-25 degrees around the source","rack focus from smoke edge to the lit subject"],"rules":["smoke needs a dark ground and one directional light (it is made visible by light and contrast)","low shutter streaks are free: keep the 180 degree shutter","depth: put the plume in front of and behind the subject"]}
recipe_2d: "SVG filter smoke: a blurred radial-gradient blob stack (6-10 elements, filter: blur(30-60px), mix-blend-mode: screen on a dark ground) rising with y tweens of 6-9 s ('sine.inOut'), each distorted by <feTurbulence baseFrequency='0.006 0.012' numOctaves='3'> -> <feDisplacementMap scale='80'> whose baseFrequency is tweened slowly. Deterministic (attribute tweens on the timeline), but it is smoke-like gradient art, not volume."
recipe_3d: "Rasan3D, two forms. (1) Volume: k.pass('smoke',{at:'scene',blend:'over',uniforms:{uLight:[...]},frag}) marching 40-56 steps through a bounded plume; density(p,t) = fbm of p warped by r3Curl3 at two scales with the coordinate offset p.y -= rise*t (closed form, no state, seek-safe); light march 4 steps toward uLight, Beer-Lambert extinction, Henyey-Greenstein forward phase; jitter with r3Ign(gl_FragCoord.xy + uFrame*5.588); stop at r3SceneT; damp the warp near a collider with Bridson's ramp. (2) Particles: k.gpuSimulate('smoke',{size:128,fields:['state'],dt:1/240,init,step}) where the step advects xyz by r3Curl3(p*s, uTime*0.15) and respawns by age from a hash of the texel and uStep; draw as small additive-free soft sprites with depth fade. Post {bloom:{strength:0.15,threshold:1.15},grain:0.025}; motionBlur samples 8."
pitfalls: ["a full Navier-Stokes solve expected from k.gpuSimulate: its step is one pass per field, a pressure solve needs 20-80 passes per step (Stam, GPU Gems 38), so it does not fit; use curl noise","curl noise (a procedural flow) that never interacts with the subject: Bridson's boundary ramp is what makes smoke wrap an object","random noise seeds changing per frame: boiling smoke; use time as a smooth coordinate","too many octaves or steps: frame-cost; render the volume at half resolution into a target","smoke lit by an ambient only: grey fog with no structure","white smoke on white: it needs contrast and a dark ground","particles as additive glowing dots: a nebula, not smoke"]
instruct: {"all":"Smoke is density advected by a divergence-free field. Define the flow as the curl of a noise potential (r3Curl3), time-varying through its t argument, at two scales with the finer one weaker. Derive density in closed form from (position, t) so there is no state, or advect particles in k.gpuSimulate with a fixed dt. One key light, dark ground, extinction coefficient and step count stated up front. Jitter the march start with an interleaved gradient noise seeded by uFrame, never by the clock.","claude":"You over-glow: do not add a bloom halo to smoke, and do not tint it with neon. Keep it grey-warm, give it a single rim from the key, and spell out density scale, extinction, step count, and noise octaves as named constants at the top of the shader. State what the plume must show at 1, 3 and 5 s.","gpt":"You tend to port a Shadertoy fluid with feedback buffers (iChannel0 reading the previous frame): that is state carried between frames and fails the seek check. Either use the closed-form warp here or put the state in k.gpuSimulate. Do not use Math.random, Date, or texture-based noise from a URL; r3Simplex3/r3Fbm3 are provided."}
sources: ["https://www.cs.ubc.ca/~rbridson/docs/bridson-siggraph2007-curlnoise.pdf", "http://www.dgp.toronto.edu/people/stam/reality/Research/pdf/GDC03.pdf", "https://developer.nvidia.com/gpugems/gpugems/part-vi-beyond-triangles/chapter-38-fast-fluid-dynamics-simulation-gpu", "https://www.sidefx.com/docs/houdini/nodes/dop/popforce.html", "https://thebookofshaders.com/13/", "local: skills/rasanai/stage3d/glsl.js (r3Curl3, r3Fbm3, r3Ign)"]
---
## What it is

Smoke, steam, ink in water, a cloud with direction. The look of fluid motion has a mathematical signature: the velocity field is incompressible (divergence-free), so there are no "gutters" where particles pile up and no sources where they vanish. Two ways to get that in a film that must be re-renderable in any order: advect particles through a curl-noise field, or evaluate a density field that is warped by the same curl in closed form. A true grid solver (Stam) is the third way and the one that does not fit the engine.

## The defining traits (numbers)

- **Curl of a potential** (Bridson et al. 2007): in 3D `v = curl(psi)` with psi a vector of three noise functions; in 2D `v = (d psi / dy, -d psi / dx)`. A curl is automatically divergence-free. Finite differences with a very small displacement (the paper uses 1e-4 of the domain) are fine in single precision. `r3Curl3(p, t)` implements it.
- **Scale and speed:** noise with length scale L gives vortices of diameter about L and speeds O(1/L); scale the potential to set speed. Several octaves with a power-law reduction for the smaller vortices has a sound physical basis (Kolmogorov); the field should vary in time, which time-varying noise does.
- **Boundaries:** modulate psi down to zero near a solid with `ramp(d / d0)`, `ramp(r) = 15/8 r - 10/8 r^3 + 3/8 r^5` for |r| < 1 (1 for r >= 1), d the distance to the boundary and d0 the width of the modulated region (set d0 = L); this keeps the flow tangent at the surface. In 3D the tangential component is damped, the normal component kept (equation 5 of the paper).
- **Stam stable fluids:** unconditionally stable for any dt; diffusion by Gauss-Seidel relaxation (the code runs 20 iterations); advect, diffuse, project (GDC03.pdf, read as text).
- **GPU Gems 38:** advection, viscous diffusion by Jacobi, force application, pressure projection; 20-80 Jacobi iterations, 40-80 recommended; optional vorticity confinement to restore small swirls.
- **Houdini:** Pyro tracks a scalar density field and a vector velocity field; the Curl Noise VOP supplies turbulence; a POP Force with curl noise swirls particles (sidefx).
- **Our constants (unverified, tune by eye):** flow time scale 0.1-0.2 noise units per second; warp amplitude 0.5 for the large scale and 0.25 for the second; 40-56 march steps; extinction 1.5-3 per world unit; Henyey-Greenstein g 0.4-0.6 toward the light.

## How to build it

### 3D, volumetric plume (closed form, no state)

```js
graph(k) {
  k.pass("smoke", { at: "scene", blend: "over",
    uniforms: { uLight: [-0.5, 0.8, 0.4], uRise: (t, k) => k.at(t, [[0, 0.2], [6, 0.6, "sine.inOut"]]), uAmt: (t, k) => k.at(t, [[0, 0], [1.2, 1, "power2.out"]]) },
    frag: `
      #include <r3/noise>
      #include <r3/color>
      uniform vec3 uLight; uniform float uRise, uAmt;
      const int STEPS = 48; const float SIGMA = 2.2;
      float ramp(float r){ r = clamp(r, -1.0, 1.0); return 15.0/8.0*r - 10.0/8.0*r*r*r + 3.0/8.0*r*r*r*r*r; }   // Bridson eq. 4
      float dens(vec3 p, float t){
        vec3 q = p; q.y -= t * uRise;                                          // the plume rises: a coordinate shift, closed form
        float near = ramp(clamp(length(p - vec3(0.0, 0.6, 0.0)) - 0.5, 0.0, 0.6) / 0.6);   // damp the warp near a 0.5 m collider
        q += 0.50 * near * r3Curl3(q * 0.9, t * 0.12);                          // large-scale flow
        q += 0.25 * near * r3Curl3(q * 2.1 + 7.0, t * 0.20);                    // second scale, weaker
        float w = 0.55 + 0.30 * max(p.y, 0.0);                                  // the plume widens with height
        float shape = 1.0 - smoothstep(0.0, w, length(p.xz));
        float d = (r3Fbm3(q * 1.6, 4) * 0.5 + 0.5) * shape;
        return max(d - 0.28, 0.0) * 3.0 * uAmt * smoothstep(0.0, 0.3, p.y) * (1.0 - smoothstep(3.2, 4.2, p.y));
      }
      void main(){
        vec3 ro = uCamPos, rd = rayDir(vUv);
        vec3 inv = 1.0 / rd, t0 = (vec3(-2.2, 0.0, -2.2) - ro) * inv, t1 = (vec3(2.2, 4.2, 2.2) - ro) * inv;   // slab test against the plume's bounding box
        vec3 tn = min(t0, t1), tf = max(t0, t1);
        float tin = max(max(tn.x, tn.y), tn.z), tout = min(min(tf.x, tf.y), tf.z);
        if (tout <= max(tin, 0.0)) discard;
        vec2 hit = vec2(max(tin, 0.0), tout);
        float tmax = min(hit.y, r3SceneT(vUv, rd));
        float dt = (tmax - hit.x) / float(STEPS);
        float t = hit.x + dt * r3Ign(gl_FragCoord.xy + uFrame * 5.588);         // jitter: seeded by the frame index, not the clock
        float T = 1.0; vec3 L = vec3(0.0); vec3 Ld = normalize(uLight);
        for (int i = 0; i < STEPS; i++) {
          vec3 p = ro + rd * t; float d = dens(p, uTime);
          if (d > 0.001) {
            float lt = 1.0, ls = 0.25;
            for (int j = 1; j <= 4; j++) lt *= exp(-SIGMA * dens(p + Ld * ls * float(j), uTime) * ls);   // light march
            float cosT = dot(rd, Ld), g = 0.5, ph = (1.0 - g * g) / pow(1.0 + g * g - 2.0 * g * cosT, 1.5) / 12.566;   // Henyey-Greenstein
            vec3 sc = vec3(1.0, 0.92, 0.82) * (ph * 6.0 + 0.12) * lt;
            float ex = exp(-SIGMA * d * dt);
            L += T * (1.0 - ex) * sc; T *= ex;
            if (T < 0.02) break;
          }
          t += dt;
        }
        gl_FragColor = vec4(L, 1.0 - T);                                       // premultiplied, composited 'over'
      }` });
},
```

Notes: `r3Curl3` costs several simplex evaluations; two curls plus fBm per density sample times 48 steps plus 4 light samples is heavy (we did not measure it here: read `frame_ms` from the gate). Mitigations in order: lower `STEPS` to 32; render the pass into `k.target("smoke", { scale: 0.5 })` and composite it with a second pass that samples `uTarget_smoke`; `motionBlur: { samples: 8 }`. The bounding box test above matters for cost: it skips empty space.

### 3D, particle advection through the same field

```js
const smoke = k.gpuSimulate("smoke", { size: 128, fields: ["state"], dt: 1 / 240, checkpointEvery: 0.5, seed: 5,
  init: `void main(){ vec2 uv = gl_FragCoord.xy / resolution.xy; gl_FragColor = vec4((r3Hash(uv) - 0.5) * 0.6, r3Hash(uv + 1.7) * 3.0, (r3Hash(uv + 4.1) - 0.5) * 0.6, r3Hash(uv + 9.3)); }`,   // w = age 0..1 (staggered)
  step: `#include <r3/noise>
    void main(){ vec2 uv = gl_FragCoord.xy / resolution.xy; vec4 s = texture2D(tState, uv); vec3 p = s.xyz; float a = s.w + uDt / 5.0;     // 5 s life
      p += (r3Curl3(p * 0.7, uTime * 0.12) * 0.55 + vec3(0.0, 0.35, 0.0)) * uDt;                                                    // curl flow plus buoyancy
      if (a >= 1.0) { float h = r3Hash(uv + floor(uStep / 1200.0)); p = vec3((h - 0.5) * 0.4, 0.0, (r3Hash(uv + h) - 0.5) * 0.4); a -= 1.0; }   // respawn at the source
      gl_FragColor = vec4(p, a); }` });
// pose: material.uniforms.tState.value = smoke.at(t).texture; draw 16,384 Points; size and alpha from age: grow with a, fade with smoothstep(0.7, 1.0, a)
```

Seeking back restores a stored texture checkpoint (documented in `makeGpuSim`); state is quantised to dt = 1/240, so reaching t = 6 s from zero is 1,440 passes of 128 x 128: cheap on a GPU.

### 2D fallback

```js
gsap.set(".puff", { y: 0, opacity: 0 });
tl.to(".puff", { y: -520, opacity: 0.8, duration: 6, ease: "sine.inOut", stagger: { each: 0.4, from: "start" } }, 0)
  .to("#smokeTurb", { attr: { baseFrequency: "0.008 0.016" }, duration: 6, ease: "sine.inOut" }, 0);
```
The puffs sit in a container with `filter: url(#smokeFilter)` (feTurbulence into feDisplacementMap) on a dark ground, `mix-blend-mode: screen`.

## What makes a cheap imitation

- A stack of semi-transparent noise PNGs scrolling upward: no volume, no light interaction.
- Additive glowing particles called smoke.
- Per-frame random noise: the plume boils instead of flowing.
- Constant-speed rise with no turbulence, or turbulence with sources and sinks (non-divergence-free: smoke piles into clumps).
- Smoke that ignores the subject: it should be pushed around the object (Bridson's boundary ramp) and lit by the same key.
- Grey on grey: no dark ground, no rim, no density contrast.

## Sources

- https://www.cs.ubc.ca/~rbridson/docs/bridson-siggraph2007-curlnoise.pdf (fetched, 3 pages read): curl formulas, noise potential, boundary ramp, multi-scale and time-varying advice.
- http://www.dgp.toronto.edu/people/stam/reality/Research/pdf/GDC03.pdf (fetched, text extracted): stable fluids, Gauss-Seidel with 20 iterations.
- https://developer.nvidia.com/gpugems/gpugems/part-vi-beyond-triangles/chapter-38-fast-fluid-dynamics-simulation-gpu (fetched): operator splitting, 20-80 Jacobi iterations, vorticity confinement.
- https://www.sidefx.com/docs/houdini/nodes/dop/popforce.html (fetched): POP Force with curl noise.
- https://thebookofshaders.com/13/ (fetched): fBm octaves, lacunarity, gain, domain warping.
- local: `skills/rasanai/stage3d/glsl.js` (`r3Curl3`, `r3Fbm3`, `r3Ign`, `r3SceneT` in the pass prelude of `rasan3d.js`).
- The Henyey-Greenstein factor, constants and loop structure are our own and unrun in this session (unverified).
