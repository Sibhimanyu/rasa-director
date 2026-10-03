---
id: "volumetric-light-god-rays"
name: "Volumetric light and god rays (shafts through dust, radial post, froxel-style fog)"
space: "3d"
family: "3d-cgi"
references: ["Kenny Mitchell, GPU Gems 3 ch. 13: Volumetric Light Scattering as a Post-Process", "Bart Wronski, Volumetric Fog (SIGGRAPH 2014, Assassin's Creed 4)", "crepuscular rays in nature"]
timing: {"frame_rate":"30 fps comp; light and dust move slowly","holds_ms":[1000,2500],"durations_ms":[1200,2400,5000],"dust_drift_units_per_s":[0.02,0.05],"notes":"shafts arrive on a power2.out ease (light enters), then hold; they never pulse or flicker unless motivated (a cloud, a door)"}
eases: {"key":"power2.out","light_move":"sine.inOut","camera":"sine.inOut","notes":"intensity and direction are eased uniforms of t; the dust texture drifts linearly but slowly (a coordinate offset)"}
camera: {"lens_mm":[28,50],"moves":["slow dolly across the beams so they sweep over the subject","low angle looking along the shafts, away from the source (backlit dust)","push toward the light source with a bloom-free exposure drop"],"rules":["rays are nearly parallel in space and converge only by perspective (Wikipedia): moving the camera changes their apparent spread, which is the parallax","visible only against darkness or contrast: dark room, one bright aperture","looking straight into the source washes the shot; keep the source off axis by 20-40 degrees"]}
recipe_2d: "Layered gradient shafts: 5-8 absolutely positioned divs with linear-gradient(to bottom, rgba(255,230,180,0.55), transparent 85%), clip-path polygons skewed by -18 to -24 degrees, mix-blend-mode: screen, filter: blur(14px); a slow x tween of 40-90 px over 6 s ('sine.inOut') and an opacity breathing of 0.08 only if motivated; a vignette to darken the ground. Reads as stock overlay light unless it is occluded by the subject (add the subject above the shafts layer)."
recipe_3d: "Rasan3D, two methods. (1) Analytic shafts, scene pass, closed form: k.pass('shafts',{at:'scene',blend:'add',uniforms:{uL:(t,k)=>[...] eased direction,uInt:(t,k)=>k.at(t,[[0,0],[1.4,1,'power2.out']])},frag}) marching 32-48 steps through the room's bounding box; at each sample project back along the light direction to the window plane and test the aperture (openings, mullions, blinds via r3Hatch-style slats); dust density from r3Fbm3(p*0.8 + drift*uTime); Henyey-Greenstein phase g 0.5-0.7; jitter r3Ign(gl_FragCoord.xy + uFrame*5.588); cap at r3SceneT; the raster DirectionalLight with a shadow map and the same window geometry makes the floor patch agree. (2) Radial post blur (GPU Gems 3): k.pass('rays',{at:'post',uniforms:{uLightWorld,uDensity,uWeight,uDecay,uExposure},frag}) project the light with uViewProj, march N=48-64 samples from each pixel toward it, accumulate max(src - threshold, 0) with decay^i, add to uSrc. Post {bloom:{strength:0.12,threshold:1.2},grain:0.02}."
pitfalls: ["rays painted as a flat overlay that ignores the subject: nothing occludes them","rays that do not agree with the key light's direction or the shadow on the floor","constant full-frame haze: contrast gone, scene looks milky","pulsing or flickering shafts with no motivation (cloud, door, fan)","bloom and radial blur on every bright pixel: the shot turns to soup","jitter seeded from the clock or Math.random: boils under sub-frame sampling","marching the whole room in 4K with 100 steps: frame-cost error; cap steps, use the bounding box, half-res target","looking straight at the source: the post method fails when the light is behind the camera or off-screen (guard on w <= 0)"]
instruct: {"all":"Decide the one source and its direction first; make the raster light, the shadow patch on the floor and the shaft direction the same vector. Dust is a density field drifting slowly (0.02-0.05 units per second) from fbm of position, never from the clock. Use a forward-scattering phase function, a jittered march seeded by the frame index, and cap the march at the scene depth. Intensity is an eased uniform.","claude":"You over-glow: a god-ray shot gets bloom, lens flare and orange fog all at once. Pick one: shafts. Bloom threshold 1.2, no flare, exposure unchanged. State the light direction, the aperture geometry and the dust drift speed as constants, and check the raster shadow matches.","gpt":"You tend to port a radial-blur shader with a texture of the 'light' you draw yourself and a time-based flicker (sin(time * 20.0)); you also seed noise with Math.random or iTime. Use uFrame for jitter, r3Hash/r3Fbm3 for noise, depth from r3SceneT, and no flicker unless the score names a motivation. Do not add a second render pass with your own renderer."}
sources: ["https://developer.nvidia.com/gpugems/gpugems3/part-ii-light-and-shadows/chapter-13-volumetric-light-scattering-post-process", "https://bartwronski.com/wp-content/uploads/2014/03/ac4_gdc.pdf", "https://en.wikipedia.org/wiki/Crepuscular_rays", "local: skills/rasanai/references/3d.md section 4 (lenses)", "local: .context/open-kit/g/proj/compositions/frames/g1-sdf.html (haze pass over depth)"]
---
## What it is

Light made visible: shafts through a window, a spotlight cone, a beam in a dark hall. The air is full of particles that scatter light toward the camera, so the beam is the integral of "is this point lit" times "how much dust is here" along each view ray. In a film it is mood and depth in one: it separates foreground from background by parallax and gives the key light a body.

## The defining traits (numbers)

- **Physical** (Wikipedia, crepuscular rays): visible shafts of sunlight where light passes between occluders; they are nearly parallel and only appear to radiate by perspective, like rails converging; visible through contrast between lit and shadowed regions; low-sun colour comes from Rayleigh scattering (about 40 times more air at twilight than at midday, per the article).
- **Post-process method** (Mitchell, GPU Gems 3 ch. 13): render the occluders black against the light, then for each pixel step toward the light's screen position, summing samples with attenuation. Parameters: `NUM_SAMPLES` (loop count), `Density` (spacing of samples: higher means brighter shafts over a shorter range), `Weight` (intensity per sample), `Decay` in [0, 1] (exponential falloff along the ray, applied as an illumination-decay factor initialised to 1.0 and multiplied each step), `Exposure` (overall intensity). Blend the result additively over the normal render. The fetched page gives no numeric values; ours below are starting points.
- **Volumetric fog method** (Wronski, AC4, SIGGRAPH 2014): a frustum-aligned 3D texture of 16-bit float RGBA (RGB in-scattered light, A density), 160 x 90 x 64 or 160 x 90 x 128 froxels, light injected per froxel with a shadow map, one scattering integration along each ray, then a pass applying it to the frame; cost on Xbox One 1.1 ms total (0.163 shadow downsample, 0.177 blur, 0.43 lighting and densities, 0.116 scattering solve, 0.247 apply). The idea we borrow: the volume is stored per view ray, so every pixel gets proper in-scatter with no edge artefacts and a soft result.
- **Our constants (unverified):** 40 march steps, 4 light-march steps of 0.25 units, extinction 2.2 per unit, Henyey-Greenstein g 0.5-0.6 (forward), dust density 0.01 base plus up to 0.03 from fbm, drift 0.02-0.05 units/s, shaft intensity 0.8-1.2 linear (do not exceed the bloom threshold on more than the brightest core), post-method samples 48-64, decay 0.95-0.97, density 0.9, weight 0.3-0.4.

## How to build it

### 3D, method 1: analytic shafts through a window (seek-safe, closed form)

```js
graph(k) {
  k.pass("shafts", { at: "scene", blend: "add",
    uniforms: {
      uL:   (t, k) => k.at(t, [[0, [0.92, -0.32, 0.10]], [6, [0.88, -0.42, 0.28], "sine.inOut"]]),    // light travel direction, normalised in the shader: a slow cloud-shifted sun
      uInt: (t, k) => k.at(t, [[0, 0], [1.4, 1, "power2.out"]]) },
    frag: `
      #include <r3/noise>
      #include <r3/npr>
      uniform vec3 uL; uniform float uInt;
      const int STEPS = 40; const float WX = -3.0;                          // the window plane at x = -3
      float lit(vec3 p, vec3 L){
        float s = (p.x - WX) / L.x; if (s < 0.0) return 0.0;               // behind the window
        vec3 q = p - L * s;                                                // where this point's light entered
        float open = smoothstep(0.80, 0.85, q.y) * smoothstep(2.60, 2.55, q.y) * smoothstep(-1.5, -1.45, q.z) * smoothstep(1.5, 1.45, q.z);
        float bars = max(1.0 - smoothstep(0.035, 0.05, min(abs(q.z + 0.5), abs(q.z - 0.5))), 1.0 - smoothstep(0.035, 0.05, abs(q.y - 1.7)));
        return open * (1.0 - bars);
      }
      void main(){
        vec3 L = normalize(uL), ro = uCamPos, rd = rayDir(vUv);
        vec3 inv = 1.0 / rd, t0 = (vec3(-3.0, 0.0, -4.0) - ro) * inv, t1 = (vec3(5.0, 3.2, 4.0) - ro) * inv;   // the room's bounding box
        vec3 tn = min(t0, t1), tf = max(t0, t1);
        float tin = max(max(tn.x, tn.y), tn.z), tout = min(min(tf.x, tf.y), tf.z);
        if (tout <= max(tin, 0.0)) discard;
        tin = max(tin, 0.0); tout = min(tout, r3SceneT(vUv, rd));
        if (tout <= tin) discard;
        float dt = (tout - tin) / float(STEPS), t = tin + dt * r3Ign(gl_FragCoord.xy + uFrame * 5.588);
        float g = 0.55, cosT = dot(L, -rd), ph = (1.0 - g * g) / pow(1.0 + g * g - 2.0 * g * cosT, 1.5) / 12.566;   // Henyey-Greenstein, forward
        float acc = 0.0;
        for (int i = 0; i < STEPS; i++) {
          vec3 p = ro + rd * t;
          float dust = 0.01 + 0.03 * (0.5 + 0.5 * r3Fbm3(p * 0.8 + vec3(0.0, 0.04, 0.03) * uTime, 3));
          acc += lit(p, L) * dust * dt;
          t += dt;
        }
        gl_FragColor = vec4(vec3(1.0, 0.82, 0.60) * acc * ph * 38.0 * uInt, 0.0);   // 38.0 = exposure: tune on a still
      }` });
},
```

Build the raster scene to match: a wall at x = -3 with the same opening (a hole with the mullions as real boxes), one `DirectionalLight` along `uL` with a shadow map, `k.rig("low-key")` otherwise. The floor patch is then a true shadow of the same geometry, and the shafts agree with it. A fill from a `HemisphereLight` at 0.12 keeps the room readable but dark. Camera: `lens 32`, `pos [[0,[3.2,1.5,3.8]],[6,[2.2,1.55,2.6],"sine.inOut"]]`, `target [[0,[-1,1.6,-0.5]]]`, `fstop 4`; the camera moves across the shafts, so the parallax shows. Exposure: leave `toneMapping: "neutral"`, `post.bloom.threshold 1.2`.

### 3D, method 2: radial blur post pass (cheap, for a visible source)

```js
k.pass("rays", { at: "post", blend: "replace",
  uniforms: { uLightWorld: [-3.2, 2.2, 0.4], uDensity: 0.9, uWeight: 0.35, uDecay: 0.96, uExposure: (t, k) => k.at(t, [[0, 0], [1.2, 0.55, "power2.out"]]) },
  frag: `
    #include <r3/color>
    uniform vec3 uLightWorld; uniform float uDensity, uWeight, uDecay, uExposure;
    const int N = 56;
    void main(){
      vec4 s = texture(uSrc, vUv);
      vec4 lp = uViewProj * vec4(uLightWorld, 1.0);
      if (lp.w <= 0.0) { gl_FragColor = s; return; }                       // light behind the camera: no rays
      vec2 lUv = lp.xy / lp.w * 0.5 + 0.5;
      vec2 delta = (vUv - lUv) * uDensity / float(N);
      vec2 uv = vUv - delta * r3Ign(gl_FragCoord.xy + uFrame * 5.588);     // jitter against banding
      float illum = 1.0; vec3 acc = vec3(0.0);
      for (int i = 0; i < N; i++) {
        uv -= delta;
        vec3 c = texture(uSrc, uv).rgb;
        acc += max(c - 1.0, 0.0) * illum * uWeight;                         // only HDR (the emissive source) shines; occluders are whatever is darker
        illum *= uDecay;
      }
      gl_FragColor = vec4(s.rgb + acc * uExposure, max(s.a, clamp(dot(acc, vec3(0.3333)), 0.0, 1.0)));
    }` });
```

For this to work the source must be an HDR emissive object (`k.material("emissive", { intensity: 4 })`) or a bright sky patch, and the occluders (window frame, trees) must be in the 3D layer so they darken the samples. It cannot see through geometry the camera does not draw. It is a good cheat for a logo or a sun disc behind letters; method 1 is the one for rooms.

### 2D fallback

```js
gsap.set(".shaft", { transformOrigin: "50% 0%", rotation: -20 });
tl.fromTo(".shaft", { opacity: 0 }, { opacity: (i) => 0.35 + 0.1 * (i % 3), duration: 1.4, ease: "power2.out", stagger: 0.12 }, 0)
  .to(".shaft", { x: 70, duration: 6, ease: "sine.inOut", stagger: 0.05 }, 0);
```
Place the subject above the shafts layer so it occludes them and add a soft shadow patch where the shafts land.

## What makes a cheap imitation

- A full-frame orange gradient overlay called "light".
- Shafts in front of the subject instead of behind or around it; no occlusion.
- Rays that radiate from the source in a fan on every shot (a post blur applied to the whole frame, including areas that should be dark).
- Flicker with no motivation, or a pulse tied to music for a shot with no music reason.
- Everything bloomed and flared at once.
- Shafts that disagree with the shadows on the floor.

## Sources

- https://developer.nvidia.com/gpugems/gpugems3/part-ii-light-and-shadows/chapter-13-volumetric-light-scattering-post-process (fetched): occluders as black, radial sampling, Density, Weight, Decay, Exposure, additive blend; no numeric values given.
- https://bartwronski.com/wp-content/uploads/2014/03/ac4_gdc.pdf (fetched, text extracted from the saved PDF): froxel layout 160x90x64 and 160x90x128, RGBA16F, 1.1 ms cost breakdown.
- https://en.wikipedia.org/wiki/Crepuscular_rays (fetched): near-parallel rays and perspective, contrast, Rayleigh scattering.
- local: `.context/open-kit/g/proj/compositions/frames/g1-sdf.html` (a haze pass using the composited scene depth and `r3SceneZ`), `skills/rasanai/references/3d.md`.
- Unverified: all numeric constants not attributed above; the snippets were written against the documented pass prelude (`uProjInv`, `uViewProj`, `uCamPos`, `rayDir`, `r3SceneT`, `uSrc`) but not run here.
