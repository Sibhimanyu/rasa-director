---
id: "raymarched-abstract-iq"
name: "Raymarched abstract worlds (Inigo Quilez / demoscene signed-distance fields)"
space: "3d"
family: "3d-cgi"
references: ["Inigo Quilez (iquilezles.org, Shadertoy)", "demoscene 4k/64k intros", "Perlin 'Hypertexture' (1989) as an early sphere-tracing example"]
timing: {"frame_rate":"30 fps, motion blur on; a pass costs real time, see frame-cost","holds_ms":[600,1500],"durations_ms":[2400,4000,7000],"morph_s":[4,8],"notes":"slow field morphs and a slow camera: the world is the performer, the camera only arrives"}
eases: {"key":"sine.inOut","morph":"power2.inOut","land":"expo.out","notes":"time-driven distance-field parameters get the same eases as camera keys; no raw sin(uTime) loops on the whole scene"}
camera: {"lens_mm":[20,35],"moves":["slow dolly inside a repeated lattice","arc around a smooth-blended core","push through a mirrored corridor"],"rules":["wide lens makes the domain repetition read as space","hit epsilon grows with distance (pixel footprint) or far geometry shimmers","a pass runs per sample: lower motionBlur samples (8) on long calm moves"]}
recipe_2d: "n/a: a distance-field world has no honest 2D equivalent. Closest: a full-screen 2D shader in a canvas is not allowed to run its own loop; pre-render stills and parallax them (see architectural-flythrough 2D) or use CSS conic/radial-gradients with GSAP-tweened custom properties for a flat abstract."
recipe_3d: "Rasan3D: k.pass('world',{at:'scene',depth:true,blend:'min-depth',uniforms:{uMorph:(t,k)=>k.at(t,[[0,0],[6,1,'power2.inOut']])},frag}) where frag includes r3/sdf, r3/noise, r3/color, defines R3_CONE (36 / (lens_mm x width_px)), R3_STEPS 96, R3_RELAX 0.8-0.9, then #include r3/raymarch; map(p) uses r3RepMirror or r3RepId, r3SMin(k), r3Twist, r3SdRoundBox/r3SdSphere/r3SdTorus; shade with r3Normal(p, e = r3Footprint*0.5), r3SoftShadow(k 8-16), r3AO(0.4-0.8), r3Palette(t, a,b,c,d) for colour; gl_FragDepth = r3FragDepth(p, uViewProj); camera keys with fstop optional; post {grain:0.02, vignette:0.2}."
pitfalls: ["a loop of 200 steps with no pixel-sized epsilon: shimmering silhouettes at distance","normals with a fixed epsilon (Quilez: causes severe aliasing in distant geometry)","over-relaxed steps on twisted or rotated fields: holes and banding (use R3_RELAX 0.7-0.8)","palette from the rainbow default: every Shadertoy looks the same; tune a,b,c,d to the design system","global sin(uTime) wobble on everything","using the shader clock: time must come from the pass's uTime (the sub-frame time) or from function uniforms of t, never from Date.now","a march without the scene depth: meshes and the field do not intersect","cost: a full-screen march at 4+ samples per frame is slow; check frame_ms in the gate"]
instruct: {"all":"Write map(p) first as pure distance functions with domain operators (repetition, mirroring, twist), blend with smooth min, then add the march, normal, soft shadow and AO from the r3 chunks. Set the hit epsilon from the lens: R3_CONE = 36 / (lens_mm x 1920). Colour with a cosine palette tuned to the film's palette, not the rainbow. Animate only through uniforms that are functions of t with named eases. Composite by depth.","claude":"You over-glow and add a bloom-heavy neon grid. Do not: keep the accent small, lights motivated, bloom threshold 1.15 with nothing above it except one emissive element. Describe in a comment what the viewer should read at 1.5 s, 4 s and 7 s, and make the morph slower than the camera.","gpt":"You will paste a Shadertoy: iTime, iResolution, mainImage, texture channels, a hash with fract(sin(...)). Convert: iTime to uTime or a function uniform, iResolution to uRes, mainImage to main() writing gl_FragColor, hashes to r3Hash12/r3Hash13. No loops over time, no Math.random, no external textures, no second renderer."}
verified: {"sources_fetched":8,"non_wikipedia":7,"colours":"n/a","colour_images":[],"grid":"n/a","timings":"partial","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://iquilezles.org/articles/rmshadows/", "https://iquilezles.org/articles/normalsSDF/", "https://iquilezles.org/articles/palettes/", "https://iquilezles.org/articles/raymarchingdf/", "https://en.wikipedia.org/wiki/Ray_marching", "https://thebookofshaders.com/13/", "local: .context/open-kit/g/proj/compositions/frames/g1-sdf.html", "local: .context/pdoom-video/app/src/scenes/paperclips-glsl.ts"]
---
## What it is

A scene with no mesh at all: every pixel marches a ray through a signed distance function and shades the hit, so a lattice, a mirrored cathedral or a smooth-blended organism costs a few dozen lines. Inigo Quilez's articles and Shadertoy entries set the grammar (primitives, smooth operators, repetition, soft shadow, ambient occlusion, cosine palettes). In a film it is one hero shot of an impossible space, not a background wash.

## The defining traits (numbers)

- **Sphere tracing:** step along the ray by the distance value; rendering unlimited primitives needs acceleration, but domain repetition and symmetry cut the cost (Quilez, ray marching article: a gears shader evaluated 4 pieces instead of 18). The technique predates the demoscene (Ken Perlin's 1989 hypertexture contains an early example, Wikipedia).
- **Normals:** the tetrahedron technique, 4 evaluations at (1,-1,-1), (-1,-1,1), (-1,1,-1), (1,1,1). Quilez: the epsilon must be proportional to the pixel footprint (distance times pixel angle); a constant epsilon causes severe aliasing in distant geometry and the fix has a "very dramatic" effect. In Rasan3D: `r3Normal(p, e)` with `e = 0.5 * r3Footprint(t, r3PixelAngle(uProjInv, uRes), n, rd)`.
- **Soft shadow:** penumbra from the closest miss over distance, hardness `k` (larger is sharper); Aaltonen's improved version removes banding by triangulating between consecutive steps; step clamps between 0.005 and 0.5 keep the march stable (Quilez). `r3SoftShadow(ro, rd, tmin, tmax, k)` with k 8 (soft) to 32 (crisp).
- **Palette:** `a + b cos(2 pi (c t + d))` (Quilez). Published sets include a=b=(0.5,0.5,0.5), c=(1,1,1), d=(0.00,0.33,0.67) (rainbow) and (0.8,0.5,0.4), (0.2,0.4,0.2), (2,1,1), (0,0.25,0.25) (warm). `r3Palette(t,a,b,c,d)`.
- **fBm:** octaves added at increasing frequency (lacunarity) and decreasing amplitude (gain); domain warping with fBm gives cloud-like structure (Book of Shaders). `r3Fbm3(p, oct)`, 3-5 octaves for geometry detail.
- **Rasan3D constants (ours):** `R3_CONE` = 36 / (lens_mm x width_px): 0.00078 for 24 mm, 0.00054 for 35 mm at 1920 px; 96-140 steps; `R3_RELAX` 0.9 for plain fields, 0.7-0.8 for twisted or rotated cells (glsl.js documents the rotated-cell bound shrink).

## How to build it

### 3D (Rasan3D)

```js
Rasan3D.stage({
  id: "05-world", canvas, timeline: tl, duration: 8, fps: 30,
  camera: {
    pos:    [[0, [0, 0.4, 8]], [3.2, [0.6, 0.5, 3.4], "power3.inOut"], [8, [1.4, 0.8, -1.5], "sine.inOut"]],
    target: [[0, [0, 0.3, 0]], [8, [0.3, 0.2, -6], "sine.inOut"]],
    lens:   [[0, 24]], fstop: 5.6,
  },
  motionBlur: { shutter: 0.5, samples: 8 },
  post: { grain: 0.02, vignette: 0.2 },
  graph(k) {
    k.pass("world", {
      at: "scene", depth: true, blend: "min-depth",
      uniforms: { uMorph: (t, k) => k.at(t, [[0, 0], [6, 1, "power2.inOut"]]), uTwist: (t, k) => k.at(t, [[0, 0.0], [8, 0.35, "sine.inOut"]]) },
      frag: `
        #include <r3/sdf>
        #include <r3/noise>
        #include <r3/color>
        uniform float uMorph, uTwist;
        float map(vec3 p){
          p = r3Twist(p, uTwist);
          vec3 q = r3RepMirror(p, vec3(2.0));                                   // seamless mirrored cells
          float core = r3SdRoundBox(q, vec3(0.45, 0.45 + 0.35 * uMorph, 0.45), 0.08);
          float orb  = r3SdSphere(q - vec3(0.0, 0.2, 0.0), 0.5 + 0.2 * uMorph);
          float d = r3SMin(core, orb, 0.35);                                    // smooth union, k = blend width
          return d - 0.015 * r3Fbm3(p * 4.0, 3) * uMorph;                       // surface detail only after the morph
        }
        #define R3_STEPS 110
        #define R3_RELAX 0.8
        #define R3_CONE 0.00078
        #include <r3/raymarch>
        void main(){
          vec3 ro = uCamPos, rd = rayDir(vUv);
          float tmax = min(r3SceneT(vUv, rd), 60.0);                            // stop at the rasterised scene
          R3March m = r3March(ro, rd, 0.1, tmax);
          if (!m.hit) discard;
          vec3 p = ro + rd * m.t;
          vec3 n = r3Normal(p, 0.5 * r3Footprint(m.t, r3PixelAngle(uProjInv, uRes), vec3(0.0, 1.0, 0.0), rd));
          vec3 L = normalize(vec3(-0.5, 0.8, 0.4));
          float sh = r3SoftShadow(p + n * 0.01, L, 0.02, 14.0, 12.0);
          float ao = r3AO(p, n, 0.6);
          vec3 base = r3Palette(0.55 + 0.25 * r3Hash13(floor(p / 2.0)), vec3(0.5), vec3(0.5), vec3(1.0), vec3(0.0, 0.33, 0.67));  // tune to the design system
          vec3 col = base * (r3Lambert(n, L) * sh * 1.1 + 0.18 * ao);
          col += r3Fresnel(n, -rd, 4.0) * 0.15 * ao;                  // faint rim
          col *= exp(-0.06 * m.t);                                              // depth fade
          gl_FragColor = vec4(col, 1.0);
          gl_FragDepth = r3FragDepth(p, uViewProj);
        }` });
  },
});
```

Notes:

- `uTime` is the sub-frame time in every pass, so any term written with it gets motion blur for free. Prefer eased function uniforms (above) over `sin(uTime)`: the gate reads the eases and a critic can see the intent.
- A mesh and the field intersect correctly because the pass writes `gl_FragDepth` and caps the march at `r3SceneT`. A hero mesh (the logo, `k.svg`) standing in the lattice is the strongest use.
- **Cost.** One full-screen march at 110 steps plus 40 shadow steps plus 5 AO taps, times 8 to 16 sub-frames. We have not measured frame time here: run `stage3d.mjs check` and read `frame_ms`; the gate errors above 20 s per final frame and warns above 2.5 s. Reduce steps first (`R3_STEPS`), then `motionBlur.samples`, then the shadow.
- Colour exactness: `r3Tone(vec3)` is available inside k.pass shaders (defined in the pass prelude of `rasan3d.js` with the stage's exposure and tone-map curve), so end the pass with `col = r3Tone(col)` to match the stage's tone mapping; without it the pass writes display values straight. Judge on a still.
- Stable repetition: use `r3RepId` (or `r3RepMirror`) so hashing per cell uses the cell index, not the world position.

### 2D fallback

n/a: see `recipe_2d`. Do not fake it with a looping canvas shader; the 2D layer must be a pure function of the GSAP timeline.

### Checks before a final render

1. A still at 1920 x 1080 and at 4K: silhouettes must not shimmer; if they do, raise `R3_CONE` slightly or lower `R3_RELAX`.
2. A strip across the morph at 15 fps: the neck widths change smoothly, no popping when `uMorph` crosses 0.5 (smooth min `k` constant).
3. `stage3d.mjs check`: seek-safe (no clock use), `frame-cost` under 2.5 s per frame or an explained warning.
4. A depth test: put one raster mesh (the logo) inside the lattice and confirm it is hidden behind the nearer cell and visible in the gap.
5. The accent: one cell in about thirty in the film's accent colour; everything else in the palette's neutrals.

## What makes a cheap imitation

- The default Shadertoy: a rainbow cosine palette, a bloom-heavy neon grid, and a camera that orbits at constant speed.
- Shimmering silhouettes (no pixel-sized epsilon) and noisy normals.
- No shadow and no AO: a field that looks like flat vertex colour.
- Everything the same scale: no hero, no empty space.
- The field is the shot, but nothing in the film motivates it: a "wow" shader inside a product story with no reason to be there.
- Time driven by raw `sin(uTime)` so nothing ever rests (`never-rests`).

## Sources

- https://iquilezles.org/articles/rmshadows/ (fetched): soft-shadow penumbra, k hardness, Aaltonen improvement, step clamps 0.005-0.5.
- https://iquilezles.org/articles/normalsSDF/ (fetched): tetrahedron normals, epsilon proportional to pixel footprint.
- https://iquilezles.org/articles/palettes/ (fetched): cosine palette formula and example parameter sets.
- https://iquilezles.org/articles/raymarchingdf/ (fetched): ray marching distance fields, acceleration via domain repetition and symmetry.
- https://en.wikipedia.org/wiki/Ray_marching (fetched): sphere tracing, Perlin 1989 hypertexture, demoscene and Shadertoy.
- https://thebookofshaders.com/13/ (fetched): fBm octaves, lacunarity, gain, domain warping.
- local: `.context/open-kit/g/proj/compositions/frames/g1-sdf.html` (a depth-composited capsule field, scene pass); `.context/pdoom-video/app/src/scenes/paperclips-glsl.ts` (a raymarched engraved lattice).
- Not fetched (404 through the fetch tool, though the pages exist per search): iquilezles.org/articles/distfunctions and /articles/smin. Their content is not cited here.
