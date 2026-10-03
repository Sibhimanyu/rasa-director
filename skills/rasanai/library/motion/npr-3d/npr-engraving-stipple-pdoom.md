---
id: "npr-engraving-stipple-pdoom"
name: "NPR engraving and stipple in 3D (the pdoom treatise look)"
space: "3d"
family: "npr-3d"
references: ["pdoom video (plates from an illustrated treatise; engraved paperclips, hatched shoggoth)", "copperplate engraving and pen-and-ink hatching", "Praun et al. real-time hatching (tonal art maps)", "Secord weighted Voronoi stippling"]
timing: {"frame_rate":"30-60 fps; hits on downbeats, hard cuts, no floaty drift","holds_ms":[300,900],"durations_ms":[260,600,1400,2600],"notes":"pdoom: strong eases (outExpo, inOutCubic, springs), holds, then snaps"}
eases: {"key":"power3.inOut","snap":"expo.out","drift":"sine.inOut","notes":"pdoom's inOutCubic = power3.inOut, outExpo = expo.out; every camera leg is eased and lands"}
camera: {"lens_mm":[29,36],"moves":["crane from overhead (90 degrees) down to a 10 degree low glide","slow lateral glide across an endless lattice","orbit around a hero tangle with a back rim"],"rules":["pdoom paperclips FOV 32 degrees vertical (about 35 mm on the 36 mm long side, our derivation); shoggoth 38 degrees (about 29 mm)","fog so deep that the lattice dissolves into the ink","one back rim light in the signal colour; the rest is bone line on ink or ink line on bone"]}
recipe_2d: "Canvas 2D / SVG: single-stroke hairlines (stroke-width 1-1.4 px, vector-effect: non-scaling-stroke) in bone on #0A0A0B or ink on #EEE9DF; hatch by an SVG <pattern> of parallel lines whose stroke-width is tweened by tone, rotated 45 degrees for cross-hatch; stipple by a seeded dot field (k.rng equivalent: a mulberry32 you write) whose count is gsap-tweened with tone. Motion: draw-on with stroke-dashoffset, 'expo.out', hits on beats."
recipe_3d: "Rasan3D: Rasan3D.tube for wires (uv.x along, uv.y around); ShaderMaterial = Rasan3D.glsl.npr + a fragment that computes tone = lit * ao and writes r3Hatch(vUv.y * 14.0, pow(tone,1.5)*1.15) as bone lines on ink (or r3InkFromTone(tone) as ink on paper); stipple with r3Stipple3FW(objPos * 24.0, nObj, 1.0 - tone, fw); a raymarched lattice in a k.pass at 'scene' with depth:true using r3RepRotY / r3SMin and r3March; whole-frame engraving as an at:'post' pass over uSrc using r3HatchFW and a depth-edge contour (open-kit sample g2-engrave); post {bloom:{strength:0.55,threshold:0.95},halation,ca:1.2,grain:0.04,vignette:0.35}; only the signal colour exceeds the threshold."
pitfalls: ["hatch coverage computed with a fixed smoothstep instead of the pixel footprint: lines shimmer or fatten at 4K (pdoom's pxLine/rampLine exist for this; r3HatchFW already box-filters)","lines in screen space on a moving object (the shower-door effect): anchor lines to the surface parameter or object space","stipple dots from a time-seeded hash: re-seeded every sub-frame, the dots boil under motion blur","every surface hatched the same way: lines must follow form (along the tube, around the eye, contour lines on folds)","glow and neon: pdoom bans purple-cyan neon, glowing brains, lens-flare soup; bloom only on the signal colour","too many hues: the style is two inks and one hazard accent","outlined or haloed type over the engraving"]
instruct: {"all":"Pick the ground first (ink with bone lines, or bone paper with ink lines) and give exactly one accent. Lines follow the form: along a tube (constant v), around an eye, contour on a surface. Use the pixel-footprint hatch (r3Hatch, r3HatchFW) and stipple (r3Stipple3FW), never raw smoothstep on sin(). Anchor stipple to object space. Never Math.random, the clock or a time-seeded hash in a shader.","claude":"You over-glow and you decorate: no bloom except on the accent, no extra hues, no particles. Spell out the tone function (key, AO, rim) and the line count N before writing the shader. Ask yourself what each line direction means and write it in a comment.","gpt":"You tend to write hatch as sin(p.y * k) > 0.0 or step(fract(...), x) with no footprint, which aliases at 1080p and breaks at 4K; use the r3 chunks. You also tend to hash with fract(sin(dot(...)) * 43758.5): use r3Hash12/r3Hash13 and seed from position or a uniform, never from uTime. Do not add a second WebGLRenderer for a post effect: use a k.pass at 'post'."}
verified: {"sources_fetched":11,"non_wikipedia":11,"colours":"n/a","colour_images":[],"grid":"n/a","timings":"partial","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://hhoppe.com/proj/hatching/", "https://www.cs.ubc.ca/labs/imager/tr/2002/secord2002b/secord.2002b.pdf", "https://iquilezles.org/articles/normalsSDF/", "https://iquilezles.org/articles/rmshadows/", "local: .context/pdoom-video/docs/TREATMENT.md", "local: .context/pdoom-video/docs/ENGINE.md", "local: .context/pdoom-video/app/src/engine/glsl/common.ts", "local: .context/pdoom-video/app/src/scenes/paperclips-glsl.ts", "local: .context/pdoom-video/app/src/scenes/paperclips.ts", "local: .context/pdoom-video/app/src/scenes/shoggoth-glsl.ts", "local: .context/open-kit/g/proj/compositions/frames/g2-engrave.html"]
---
## What it is

Surfaces drawn as if cut with a burin: no smooth shading, only lines (or dots) whose weight carries the tone, and whose direction carries the form. In pdoom the whole video is "plates from an illustrated treatise on the end of the world", with an engraving plate, an oscilloscope plate, a banknote plate and a raymarched 3D plate sharing one palette and grain. The 3D plates are a lattice of engraved steel paperclips under a low glide, and a shoggoth whose tentacles are hatched along their length. This entry is the technique, not the treatise's content.

Honesty note: the task brief called the shoggoth stippled. In the source it is hatched (`shoggoth-glsl.ts` uses `hatch()` along tube arc length and around the eyes; no stipple function is present). Stipple here is Rasan3D's own `r3Stipple*`, documented below as a sibling technique.

## The defining traits (numbers)

- **Palette (pdoom TREATMENT.md):** ink `#0A0A0B`, ink2 `#151517`, graphite `#5E5B57`, ash `#9C978F`, bone `#EEE9DF`, signal `#FF4D12`, ember `#FF8A3D`, blood `#C21D0B`; one rare accent (acid `#D8FF3C`). Only signal and ember exceed about 0.85 linear and therefore glow. Some plates invert to bone paper with ink lines; orange stays orange on both.
- **Wire shading (paperclips-glsl.ts):** tone = keyI x (0.02 + 0.98 x dif^1.6) x mix(0.35, 1.0, ao); 7 hairlines across the half-circumference of the wire (`u = theta / PI * 7 + 0.5`); line weight = tone^1.5 x 1.15 so lines swell where lit; a specular line `pow(NdotH, 60)` thresholded with smoothstep(0.3, 0.6); a signal rim `pow(1 - NdotV, 5)` gated by the back-light direction and by wire width on screen (`smoothstep(3, 12, wirePx)`), intensity 1.1.
- **Footprint-aware lines:** when the footprint `fw` of one pixel is large (0.3-0.75 lines per pixel) the line coverage blends to the flat mean ink, so lines thin out instead of aliasing. That is exactly what `r3HatchFW` does (min 0.85 px line, 1.15 px filter; `R3_MINPX`, `R3_AAPX`).
- **Camera (paperclips.ts):** FOV 32 degrees vertical; top-down at the start, then a crane: elevation lerps from pi/2 to 0.175 rad (10 degrees) with inOutCubic while the distance eases to 92 world units (cell 40), then a slow glide at 16 units/s after a 0.6 s ramp-in (inQuad). A ceiling then slams down on beats (outExpo, 180 ms) until the slot is one line. Shoggoth FOV is 38 degrees.
- **Post (pdoom defaults, post.ts):** exposure 1, bloom 0.55, threshold 0.85, knee 0.5, radius 0.75, halation 0.25, chromatic aberration 1.2 px, grain 0.055, vignette 0.35.
- **Literature numbers:** tonal art maps blend precomputed mip-mapped hatch levels so stroke density and size stay right at every scale and tone (Praun et al.); stipple density rises with darkness and dots are relaxed (Lloyd) into a uniform, non-random layout (Secord).

## How to build it

### 3D (Rasan3D)

Camera for the lattice glide (units are metres; pdoom's cell of 40 becomes 4, our scale choice):

```js
camera: {
  pos:    [[0, [0, 12, 0.5]], [2.6, [0, 1.6, 9.1], "power3.inOut"], [8, [0, 1.6, 2.0], "sine.inOut"]],
  target: [[0, [0, 0, 0]],    [2.6, [0, 1.0, -6], "power3.inOut"]],
  lens:   [[0, 35]], fstop: 5.6,                   // 35 mm = pdoom's 32 degree FOV, our derivation
},
fog: { color: "#0A0A0B", near: 6, far: 34 },
post: { bloom: { strength: 0.55, threshold: 0.95 }, halation: 0.25, ca: 1.2, grain: 0.04, vignette: 0.35 },
```

Engraved wire on a tube (bone line on ink; the lines run along the wire, which is constant `v`):

```js
const geo = k.tube(points, { radius: 0.06, segments: 240, radial: 14 });      // uv.x along (arc length), uv.y around
const mat = new THREE.ShaderMaterial({
  uniforms: { uKey: { value: new THREE.Vector3(-0.5, 0.8, 0.6).normalize() }, uRim: { value: new THREE.Vector3(0.6, 0.2, -0.8).normalize() } },
  vertexShader: `varying vec2 vUv; varying vec3 vN, vP;
    void main(){ vUv = uv; vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position,1.0); vP = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
  fragmentShader: Rasan3D.glsl.npr + `
    uniform vec3 uKey, uRim; varying vec2 vUv; varying vec3 vN, vP;
    void main(){
      vec3 N = normalize(vN), V = normalize(cameraPosition - vP);
      float dif = r3Lambert(N, uKey);
      float tone = (0.02 + 0.98 * pow(dif, 1.6));
      float cov = r3Hatch(vUv.y * 14.0, pow(tone, 1.5) * 1.15);              // 14 lines around = 7 per half, as pdoom
      float spec = pow(max(dot(N, normalize(uKey + V)), 0.0), 60.0);
      float rim = r3Fresnel(N, V, 5.0) * smoothstep(0.0, 0.7, dot(N, uRim));
      vec3 bone = vec3(0.855, 0.805, 0.739), signal = vec3(1.0, 0.075, 0.006) * 1.1;  // linear approximations: use r3Hex(...) for exact
      vec3 col = bone * 0.74 * cov + bone * 0.85 * smoothstep(0.3, 0.6, spec) + signal * rim;
      gl_FragColor = vec4(col, 1.0);
    }`,
});
```

Ink on paper instead: `float cov = r3Hatch(vUv.y * 14.0, r3InkFromTone(dif)); col = mix(paper, ink, cov);`. A second set crossing in the shadows: `r3CrossEngraveFW(s1, fw1, s2, fw2, tone, lines1, lines2)`.

Stipple glued to the object (dots stay put when the object turns, so they do not swim):

```glsl
varying vec3 vObj, vNObj;                                   // object-space position and normal from the vertex shader
float darkness = 1.0 - tone;
vec3 P = vObj * 24.0;                                       // 24 cells per world unit
float fw = length(fwidth(P)) * 0.5774;                      // cells per pixel
float st = r3Stipple3FW(P, normalize(vNObj), darkness, fw);
```

Raymarched lattice, depth-composited so meshes can stand in it (scene pass, runs inside the motion-blur loop):

```js
k.pass("lattice", { at: "scene", depth: true, blend: "min-depth", frag: `
  #include <r3/sdf>
  #include <r3/npr>
  const vec3 C = vec3(4.0, 1.4, 4.0);
  float map(vec3 p){
    vec3 id = clamp(floor(p / C + 0.5), vec3(-1e4, 0.0, -1e4), vec3(1e4, 2.0, 1e4));   // a floor of 3 layers
    vec3 q = p - C * id;
    q.xz = r3Rot2((r3Hash13(id) - 0.5) * 3.1416) * q.xz;                               // each clip turned
    float loop = r3SdTorus(q, vec2(0.9, 0.07));
    float bar  = r3SdCapsule(q, vec3(-0.9, 0.0, 0.0), vec3(0.9, 0.0, 0.0), 0.07);
    return min(loop, bar);                                                              // stand-in; draw the real clip from 3 capsules
  }
  #define R3_STEPS 120
  #define R3_CONE 0.00053                    // 36 / (35 mm * 1920 px): a pixel-sized epsilon
  #define R3_RELAX 0.8                       // rotated cells shrink the bound
  #include <r3/raymarch>
  void main(){
    vec3 ro = uCamPos, rd = rayDir(vUv);
    R3March m = r3March(ro, rd, 0.1, 60.0);
    if (!m.hit) discard;
    vec3 p = ro + rd * m.t, n = r3Normal(p, r3Footprint(m.t, r3PixelAngle(uProjInv, uRes), vec3(0,1,0), rd) * 0.5);
    float dif = r3Lambert(n, normalize(vec3(-0.5, 0.8, 0.6))) * r3SoftShadow(p + n * 0.01, normalize(vec3(-0.5, 0.8, 0.6)), 0.02, 12.0, 12.0);
    float ao = r3AO(p, n, 0.5);
    float u = atan(length(p.xz) - 0.9, p.y) * 14.0 / 6.2832;                            // tube angle (torus only: sketch)
    float cov = r3Hatch(u, pow((0.02 + 0.98 * pow(dif, 1.6)) * mix(0.35, 1.0, ao), 1.5) * 1.15);
    gl_FragColor = vec4(vec3(0.855, 0.805, 0.739) * 0.74 * cov * exp(-0.035 * m.t), 1.0);   // fog into the ink
    gl_FragDepth = r3FragDepth(p, uViewProj);
  }` });
```

The torus tube angle `u` above is a sketch for the torus term only; a real clip needs the angle around whichever capsule was hit (carry a `vec2 (distance, arcParam)` out of `map` as pdoom does, which returns `(distance, along, around, id)`). Whole-frame engraving of arbitrary meshes (no per-material shader) is the `at:'post'` pass in `.context/open-kit/g/proj/compositions/frames/g2-engrave.html`: tone from `luma(uSrc)`, lines bent by `uDepth`, a depth-jump contour for outlines, a plate mark in a second pass.

Checks: `crew.mjs strip` across a hit (a 0.26 s slam) to confirm lines do not shimmer; 4K still to confirm line weight is stable.

### 2D fallback

Hairline engraving is native in 2D: SVG `<path>` set with `vector-effect: non-scaling-stroke`, GSAP `strokeDashoffset` draw-on at `expo.out`, hits aligned to beats. Tone ramps by animating `stroke-width` 0.6 to 1.6 px, never opacity. Use the 3D version when form must be read as volume.

## What makes a cheap imitation

- A greyscale shader with a "sketch" filter on top: smooth gradients under lines read as a filter, not a plate.
- Parallel lines that ignore form (screen-space hatch on a rotating object).
- Aliased or boiling lines: no footprint, or hashes seeded from time.
- Neon on black, glowing everything, particle clouds: the pdoom brief names these as slop.
- Random-dot stipple (white noise): real stipple is evenly spaced (Secord's relaxation), which is what `r3Stipple` approximates with two jittered lattices.
- Missing the accent discipline: more than one hue ruins the plate.

## Sources

- https://hhoppe.com/proj/hatching/ (fetched): tonal art maps, mip-mapped hatch levels, direction field from curvature.
- https://www.cs.ubc.ca/labs/imager/tr/2002/secord2002b/secord.2002b.pdf (fetched): weighted centroidal Voronoi stippling, Lloyd relaxation, dot density from tone, precomputed stipple levels.
- https://iquilezles.org/articles/normalsSDF/ (fetched): tetrahedron normals, epsilon proportional to pixel footprint.
- https://iquilezles.org/articles/rmshadows/ (fetched): soft shadow, k as hardness.
- local (pdoom): `.context/pdoom-video/docs/TREATMENT.md` (palette, tone, motifs), `docs/ENGINE.md` (determinism, sub-frame sampling, 4K footprint rules), `app/src/engine/glsl/common.ts` (`hatch`, `engrave`, `pxLine`), `app/src/scenes/paperclips-glsl.ts` (`shadeWireL`), `paperclips.ts` (camera, FOV 32), `shoggoth-glsl.ts` (FOV 38 in `shoggoth.ts`; hatch parameters), `app/src/engine/post.ts` (defaults). The mm conversions are our own derivation (horizontal field = 2 atan(tan(v/2) x 16/9), then 18 / tan(half)).
- local: `.context/open-kit/g/proj/compositions/frames/g2-engrave.html` (post-pass engraving test scene).
- Unverified: the gate-compatibility of `gl_FragDepth` with `blend:'min-depth'` for this exact snippet (taken from the open-kit g1 test scene pattern, not re-run here).
