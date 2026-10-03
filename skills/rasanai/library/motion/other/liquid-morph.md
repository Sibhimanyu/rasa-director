---
id: "liquid-morph"
name: "Liquid motion and shape morphing (metaball goo, path morphs)"
space: "both"
family: "other"
references: ["Metaballs / blobby objects (Jim Blinn, early 1980s, Cosmos)", "SVG gooey filter (blur plus alpha threshold)", "GSAP MorphSVG path morphing", "'Jelly effect' in UI and motion design"]
timing: {"frame_rate":"30 or 60 fps","holds_ms":[400,1200],"durations_ms":{"blob_merge":[500,900],"neck_pinch_before_split":[150,300],"letter_morph":[700,1100],"settle_wobble":[500,900],"drop_fall":[350,600]},"note":"durations are derived; the sources specify filter parameters and technique, not timings"}
eases: {"key":"power3.in into a merge (surface tension pulls), expo.out out of a split (snap), sine.inOut for ambient wobble","notes":"liquids accelerate toward contact and relax with a damped oscillation; ambient wobble amplitude 4 to 8 percent of radius decaying over 500 to 900 ms (derived)"}
camera: {"lens_mm":[50,85],"moves":["locked-off 2D","slow 3 to 5 percent push","3D: 85 mm hero, shallow focus"],"rules":["the liquid is the subject; keep the camera calm","one merge or morph per beat","keep the silhouette readable at rest"]}
recipe_2d: "Two routes, both deterministic. (1) Goo filter: one SVG filter on a parent group: feGaussianBlur stdDeviation 9 then feColorMatrix values '1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -10' (alpha threshold about 0.45; the alternative pair 18 and -7 gives about 0.39), filter region x=-25% y=-25% width=150% height=150%; the filter values stay static and only transforms of the child circles animate; at most about 6 animated primitives. Merge: two circles approach on power3.in over 500-900 ms, overlap, then separate on expo.out; a settle wobble r*(1 + 0.08*exp(-6u)*cos(2*pi*3u)) over 700 ms. (2) Path morph: sample both outlines to 64 points with getPointAtLength, rotate the start index to the nearest match, lerp point by point with progress p (power3.inOut, 700-1100 ms), and draw the closed Catmull-Rom spline as a cubic path; or GSAP MorphSVG (premium plugin per its docs: check the licence) with shapeIndex tuned. Colours flat or 2-stop gradient; add a highlight blob (white, 30 percent) offset up-left for wetness."
recipe_3d: "Rasan3D: a raymarched metaball field. k.pass('goo', { at:'scene', depth:true, blend:'min-depth', uniforms:{ uP0: t => [..], uP1: t => [..], uP2: t => [..], uR: 0.38, uK: 0.35 }, frag }) with map(p) = r3SMin(r3SMin(r3SdSphere(p-uP0,uR), r3SdSphere(p-uP1,uR), uK), r3SdSphere(p-uP2,uR), uK); shading with r3Normal, r3Fresnel, an environment gradient for reflection (chrome/liquid-metal look), r3AO, r3SoftShadow; gl_FragDepth = r3Depth(p). Sphere centres are pure functions of t (k.at keys or sin). lens 85 mm, fstop 2.8, rig 'rim', environment 'studio' 1.0 for chrome. Cost: scene passes run per sample; R3_STEPS 64, 4 spheres, resolution as is."
pitfalls: ["blur radius too large: shapes lose identity and edges look soft (keep 8 to 12 px at 1080p; the source recommends 10 to 15 px at most for performance)", "animating the filter parameters: static coefficients, animate only transforms", "filter region clipping the blur at the edges: expand to -25% and 150%", "more than about 6 animated primitives under the filter: slow render", "applying goo to text that must be read", "linear easing on merges: liquid accelerates toward contact", "metaball colour banding: with the alpha-threshold filter the colours blend by blur, so keep the palette to one hue family", "morphing mismatched shapes without matching start points: inversions and twists (shapeIndex exists for that reason)", "the glossy 'jelly UI' cliche applied to everything"]
instruct: {"all":"Define the shapes (centres, radii, path data), the beat each merge or morph lands on, durations and eases, and the filter or SDF parameters in numbers. State that filter coefficients are static and only transforms animate.","claude":"Claude tends to animate the filter's stdDeviation to 'make it more liquid', which is slow and flickers, and to tween each blob with the same ease so nothing feels like surface tension. Give it the pinch-then-snap rule and the static filter values. For morphs it may rely on MorphSVG without noting the licence; offer the point-sampling route.","gpt":"GPT models often reach for CSS animations on border-radius ('blob' keyframes) and an SVG filter animated with SMIL or CSS, both outside the paused timeline. Require GSAP tweens only, no CSS keyframes, and a render-safe path morph from sampled points. They also over-blur; fix stdDeviation 9 to 10 with the 22/-10 matrix."}
sources: ["https://animationpatterns.art/animations/gooey-blob-metaball-filter/", "https://freefrontend.com/javascript-gooey/", "https://en.wikipedia.org/wiki/Metaballs", "https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/"]
---

## What it is

Two techniques give the look of liquid. The first is the metaball: Wikipedia defines metaballs as n-dimensional isosurfaces of a field function, objects that "merge together when positioned close to one another", all points above a threshold being inside; Jim Blinn invented the rendering technique in the early 1980s for atomic interactions in Carl Sagan's Cosmos, and in UI work it is called the jelly effect. The second is the path morph: one outline becomes another by interpolating matching points (MorphSVG does this for paths with different point counts and offers `shapeIndex`, `type: "rotational"`, `smooth` and `map` options).

On the web the metaball look is made with an SVG filter on a group: a Gaussian blur smears the alpha channel of overlapping shapes into one field, then a colour matrix multiplies the alpha and subtracts a threshold so the soft overlap snaps back to a hard edge. The pages fetched give the exact numbers.

## The defining traits (numbers)

Documented (animationpatterns, freefrontend):
- Blur: `feGaussianBlur stdDeviation="9"` (or 10).
- Threshold: `feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -10"` (or `18 -7`).
- Filter region: `x="-25%" y="-25%" width="150%" height="150%"`, up to -50% and 200% for large blur.
- The filter applies to the group, not to each circle, so alpha fields can merge.
- Keep coefficients static; animate transforms only; about 6 animated primitives for smooth playback.
- Performance: blur radius 10 to 15 px, `contain: paint`, move nodes with `translate3d`; remove the filter on low-power devices.
- GSAP MorphSVG: premium plugin requiring registration and licensing per the fetched docs page; `findShapeIndex()` helps find a good offset.

Derived:
- Alpha threshold of the 22/-10 matrix: 10/22 = 0.4545; for 18/-7: 0.389. Edge softness about 1/22 of alpha range.
- Merge timing 500 to 900 ms; neck pinch 150 to 300 ms before a split; wobble 4 to 8 percent amplitude decaying in 500 to 900 ms.
- Rest-state silhouettes should stay readable: the blob group must resolve into the logo or shape at the end of the shot.
- Palette: one hue family, 2 to 3 tonal steps, one white highlight.

## How to build it

### 2D (HyperFrames, GSAP, 1920x1080, 30 fps)

Goo filter:

```html
<svg width="0" height="0"><defs>
  <filter id="goo" x="-25%" y="-25%" width="150%" height="150%" color-interpolation-filters="sRGB">
    <feGaussianBlur in="SourceGraphic" stdDeviation="9" result="b"/>
    <feColorMatrix in="b" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -10"/>
  </filter></defs></svg>
<svg id="stage" viewBox="0 0 1920 1080"><g id="goo-g" filter="url(#goo)">
  <circle id="a" cx="760" cy="540" r="120" fill="#3b5bff"/><circle id="b" cx="1160" cy="540" r="120" fill="#3b5bff"/></g></svg>
```
```js
const tl = gsap.timeline({ paused: true });
window.__timelines["13-liquid"] = tl;
// approach: surface tension pulls them together (accelerating), they overlap, then a wobble settles
tl.to("#a", { x: 190, duration: 0.7, ease: "power3.in" }, 0.5).to("#b", { x: -190, duration: 0.7, ease: "power3.in" }, 0.5);
const w = { u: 0 };                                       // wobble driver: radius = r * (1 + 0.08*exp(-6u)*cos(2*pi*3u))
tl.to(w, { u: 1, duration: 0.8, ease: "none", onUpdate: () => {
  const k = 1 + 0.08 * Math.exp(-6 * w.u) * Math.cos(2 * Math.PI * 3 * w.u);
  gsap.set(["#a", "#b"], { attr: { r: 120 * k } }); } }, 1.2);
// split: neck pinch then snap
tl.to("#a", { x: -120, duration: 0.45, ease: "expo.out" }, 3.0).to("#b", { x: 120, duration: 0.45, ease: "expo.out" }, 3.0);
```

Path morph (no plugin), deterministic:

```js
function sample(pathEl, n = 64) { const L = pathEl.getTotalLength(); return Array.from({length:n}, (_, i) => { const p = pathEl.getPointAtLength(L*i/n); return [p.x, p.y]; }); }
function align(A, B) { let best = 0, bd = 1e18; for (let s = 0; s < B.length; s++) { let d = 0; for (let i = 0; i < A.length; i += 4) { const b = B[(i+s) % B.length]; d += (A[i][0]-b[0])**2 + (A[i][1]-b[1])**2; } if (d < bd) { bd = d; best = s; } } return B.map((_, i) => B[(i+best) % B.length]); }
function spline(P) { const n = P.length; let d = "M" + P[0]; for (let i = 0; i < n; i++) { const p0 = P[(i-1+n)%n], p1 = P[i], p2 = P[(i+1)%n], p3 = P[(i+2)%n];
  d += `C${p1[0]+(p2[0]-p0[0])/6},${p1[1]+(p2[1]-p0[1])/6} ${p2[0]-(p3[0]-p1[0])/6},${p2[1]-(p3[1]-p1[1])/6} ${p2[0]},${p2[1]}`; } return d + "Z"; }
const A = sample(document.querySelector("#shape-a")), B = align(A, sample(document.querySelector("#shape-b")));
const m = { p: 0 };
tl.to(m, { p: 1, duration: 0.9, ease: "power3.inOut", onUpdate: () => document.querySelector("#morph").setAttribute("d", spline(A.map((a, i) => [a[0] + (B[i][0]-a[0])*m.p, a[1] + (B[i][1]-a[1])*m.p]))) }, 4.2);
```

Rules:
1. The `d` attribute is a pure function of `m.p`; seeking is exact.
2. Both outlines must wind the same direction; reverse the sample array if the morph twists.
3. Ambient wobble, if wanted, uses a seeded radial function `r(1 + sum a_k sin(k*theta + phi_k + w*s))` with `mulberry32(seed)` for `a_k`, `phi_k`.
4. Heavy blur is costly: pre-render the goo layer at 1x, no stacked filters, keep the group under 6 animated children.
5. Add a static specular blob (white, 25 to 35 percent) and a darker lower edge for volume; they sit outside the filtered group so they stay crisp.

### 3D (Rasan3D)

```js
graph(k) {
  k.pass("goo", { at: "scene", depth: true, blend: "min-depth",
    uniforms: { uP0: t => [Math.cos(t*0.9)*0.6, 0.0, 0.0], uP1: t => [-Math.cos(t*0.9)*0.6, 0.0, 0.0], uP2: t => [0.0, 0.5*Math.sin(t*1.3), 0.0], uR: 0.38, uK: 0.35 },
    frag: `
      #include <r3/sdf>
      uniform vec3 uP0, uP1, uP2; uniform float uR, uK;
      float map(vec3 p) { float d = r3SdSphere(p - uP0, uR); d = r3SMin(d, r3SdSphere(p - uP1, uR), uK); return r3SMin(d, r3SdSphere(p - uP2, uR), uK); }
      #define R3_STEPS 64
      #include <r3/raymarch>
      void main() {
        vec3 rd = rayDir(vUv); R3March m = r3March(uCamPos, rd, uNear, uFar);
        if (!m.hit) discard;
        vec3 p = uCamPos + rd * m.t, n = r3Normal(p, 0.002), r = reflect(rd, n);
        vec3 env = mix(vec3(0.05, 0.06, 0.1), vec3(0.9, 0.95, 1.0), smoothstep(-0.2, 0.9, r.y));
        float f = r3Fresnel(n, -rd, 3.0);
        gl_FragColor = vec4(mix(vec3(0.1, 0.2, 0.9) * 0.4, env, 0.35 + 0.6 * f), 1.0);
        gl_FragDepth = r3Depth(p);
      }` });
},
camera: { pos:[[0,[0,0.2,5]]], target:[[0,[0,0,0]]], lens:[[0,85]], fstop: 2.8 }
```
Sphere centres are `(t) => [...]` pure functions. `uK` is the blend width: 0.2 tight, 0.5 very gooey. For a mesh-only alternative (no raymarch), use `k.material("gummy")` spheres that overlap, accepting that they will intersect rather than merge.

## What makes a cheap imitation

- A single wobbling CSS blob with `border-radius` keyframes.
- An over-blurred filter that turns everything into soft clouds.
- The same ease on every blob, so nothing seems to pull together.
- Goo applied to UI buttons and text for decoration.
- Rainbow gradients inside the goo.
- Path morphs between unrelated shapes with twisting artefacts.

## Sources

- https://animationpatterns.art/animations/gooey-blob-metaball-filter/ : stdDeviation 9 or 10, matrix 22/-10 or 18/-7, filter region, group-level filter, static coefficients, about 6 primitives.
- https://freefrontend.com/javascript-gooey/ : blur and contrast mechanism, 10 to 15 px blur, `contain: paint`, translate3d, fallback and accessibility notes.
- https://en.wikipedia.org/wiki/Metaballs : metaball definition, threshold isosurface, Jim Blinn early 1980s for Cosmos, UI "jelly effect".
- https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/ : morphing paths with different point counts; shapeIndex, type, smooth, map, origin; premium plugin.

Derived or unverified: all timings, wobble formula, thresholds (my arithmetic), the shader, the claim that gooey-filtered colours stay stable under blending beyond a single hue family.
