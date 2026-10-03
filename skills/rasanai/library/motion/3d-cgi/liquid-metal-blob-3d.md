---
id: "liquid-metal-blob-3d"
name: "Liquid metal blob (metaballs / smooth-min surface, reflection-driven chrome)"
space: "3d"
family: "3d-cgi"
references: ["Terminator 2 T-1000 (ILM, 1991): reflection-mapped chrome, model interpolation", "Jim Blinn blobby objects (Cosmos, early 1980s)", "Terminator Genisys (DNeg): fluid sims guided by sculpted blend shapes, 360 degree reflections"]
timing: {"frame_rate":"30 fps comp; motion blur 180 degrees","holds_ms":[600,1400],"durations_ms":[1200,1800,2600],"merge_ms":[900,1400],"wobble_hz":[2,4],"notes":"merge and split are eased legs; the settle after a merge is a damped oscillation, not an eased overshoot"}
eases: {"key":"power3.inOut","merge":"power3.inOut","pseudopod":"expo.out","retract":"power2.inOut","notes":"the surface wobble after impact is exp(-6 tau) sin(2 pi f tau): a function of time since the event"}
camera: {"lens_mm":[85,100],"moves":["slow 15-30 degree arc","push-in of 3-5 percent as two bodies merge","macro rack focus to the neck of a merging pair"],"rules":["metal is its reflections: give it a studio to reflect (large softbox, strip, dark flags) and a camera that moves enough to slide them","rim rig, environment 0.8-1.2 (3d.md section 5)","f/2.8, shallow, so the background does not compete"]}
recipe_2d: "SVG goo: two or more <circle>s tweened toward each other, filter: <feGaussianBlur stdDeviation='12'/> then <feColorMatrix values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -12'/> (the common 'gooey' alpha threshold; technique widely used, source not fetched: unverified); fill with a linear-gradient (white to #8a8f98 to #14161a) plus a thin white specular stroke; GSAP 'power3.inOut' for the merge, 'expo.out' for the pseudopod. Reads as a jelly effect (Wikipedia names this use of metaballs in motion design), not as metal."
recipe_3d: "Rasan3D, two builds. A (fast, uses the stage environment): const { MarchingCubes } = await k.addon('objects/MarchingCubes.js'); mc = new MarchingCubes(80, k.material('chrome',{color:'#e6e8ec'}), false, false, 40000); in pose(t): mc.reset(); mc.addBall(x,y,z,strength,subtract) for each ball with positions from keyed paths (k.at / k.prog with eases); mc.update(); rig 'rim', environment {preset:'studio',intensity:1.0}, a gradient softbox plane as an extra reflector. B (own shading, any resolution): k.pass('blob',{at:'scene',depth:true,blend:'min-depth',uniforms:{uB0..uB3: (t,k)=>[x,y,z,r]},frag}) with map = r3SMin chain (k 0.30-0.45), normal from r3Normal with a footprint epsilon, chrome = procedural studio env(reflect(rd,n)) x Fresnel (F0 about 0.9) plus 5-8 percent dark diffuse for mass, soft contact shadow on an analytic floor (r3SoftShadow). Post {bloom:{strength:0.2,threshold:1.15},grain:0.015}."
pitfalls: ["chrome with no environment: a dull grey blob (metal is its reflections)","an HDRI that is a uniform sky: reflections have no structure; add a large gradient box and a thin strip with dark flags between","metaball merge with a hard min: a visible crease instead of a neck","bounce with elastic overshoot on position: the metal looks like rubber; the wobble belongs on the surface after impact, small and damped","uniform glow and bloom: chrome highlights should be small and hot, only those above threshold","blobs drifting forever with sin(t): no event, no hold (never-rests)","resolution too low: faceting on the neck; 80-96 for the marching cubes build","time-varying state: all ball positions are keyed functions of t, no integration in pose()"]
instruct: {"all":"Chrome is reflection. Provide the reflected world: one large gradient softbox, one thin strip, dark flags, a floor. Blend bodies with a smooth union (smooth min, k about 0.35 of the ball radius) so a neck forms. Drive each ball by keyed paths with named eases; the merge is one eased leg, the settle is a damped oscillation computed from time since the event. Keep highlights small; only the strip and softbox may be HDR.","claude":"You over-glow chrome and add iridescent rainbow tints. Keep it monochrome silver or the film's single metal tint, with a 5-8 percent dark diffuse so it has weight (ILM's 'pewter' look). Name the three beats (approach, merge, settle) with their times before writing code, and state the ball radii and k.","gpt":"You tend to animate ball positions by accumulating velocity each frame and to add Math.random wobble. Write every ball position as a function of t (k.at / k.prog) and the wobble as exp(-6 * tau) * sin(...). Do not use MeshNormalMaterial (the rainbow normals) as a placeholder and do not load an HDRI from a URL: environment 'studio'."}
verified: {"sources_fetched":7,"non_wikipedia":6,"colours":"n/a","colour_images":[],"grid":"n/a","timings":"partial","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://vfxblog.com/2017/08/23/the-tech-of-terminator-2-an-oral-history/", "https://vfxblog.com/2017/02/17/terminator-2-t-1000-truck-scene-3d/", "https://www.fxguide.com/fxfeatured/terminator-new-makes-new-models-new-vfx/", "https://en.wikipedia.org/wiki/Metaballs", "https://iquilezles.org/articles/rmshadows/", "local: skills/rasanai/stage3d/addons/objects/MarchingCubes.js", "local: skills/rasanai/stage3d/glsl.js (r3SMin, r3Normal, r3SoftShadow)"]
---
## What it is

A body of mercury that merges, splits and reaches: the T-1000's look as a motion-design material. Two things make it read: a smooth blend between volumes (the neck as two bodies approach), and a mirror surface that reflects a believable world. The shot is about the transformation, so the camera stays close and slow, and the metal's reflections do the acting.

## The defining traits (numbers)

- **Metaballs** (Wikipedia): organic isosurfaces that meld when close; field summation with a threshold; Jim Blinn pioneered them in the early 1980s for Cosmos; rendered by raycasting or marching cubes; colloquially the "jelly effect" in motion design.
- **T-1000 reflection:** the chrome used a six-sided cubic reflection map (Steve Williams), not ray tracing; the team positioned reflection planes through the scene; careful diffuse shading made the "pewter look" that gives the figure mass (vfxblog). The environment maps were not perfectly synchronised with the photography, and the eye forgave it. For the truck scene: 375 frames of animation, 5 months, 30 frames of cross-dissolve over the flames (vfxblog).
- **Transformation by model interpolation, not a 2D morph:** five stages (RP1 amorphous blob to RP5 the live actor) with identical control-vertex counts so the vertices migrate (vfxblog). The take-away for us: blend bodies that share a parameterisation (balls in one field), do not cross-dissolve images.
- **Modern update** (fxguide, DNeg on Terminator Genisys): high-resolution 360 degree reflection capture; fluid sims needed artistic guidance, and sculpted blend shapes remained for some shots.
- **Smooth minimum:** `r3SMin(a, b, k)` is a polynomial smooth union with k the blend width; k about 0.3-0.45 of the ball radius gives a visible neck without swallowing the shapes (our tuning).
- **Three.js MarchingCubes (vendored r181):** `new MarchingCubes(resolution, material, enableUvs, enableColors, maxPolyCount)`; `addBall(x, y, z, strength, subtract)` with x, y, z in 0..1 across the cube; the ball radius satisfies `radius^2 = strength / subtract` (in the addon's own source comment); `isolation` defaults to 80; `reset()` then `addBall(...)` then `update()` each frame. The three.js example's constants (subtract 12, strength about 1.2 / ((sqrt(n) - 1) / 4 + 1)) are from memory: unverified.
- **Cost (ours):** resolution 80 is 512,000 cells polygonised each pose, around 10-30 ms in JS per sample; at 8-16 samples per frame budget 0.2-0.5 s per final frame. Resolution 64 for drafts.

## How to build it

### 3D, build A: marching cubes with the stage environment

```js
async build(k) {
  const { THREE } = k;
  const { MarchingCubes } = await k.addon("objects/MarchingCubes.js");
  const mc = new MarchingCubes(80, k.material("chrome", { color: "#e6e8ec", roughness: 0.04 }), false, false, 40000);
  mc.isolation = 80; mc.scale.setScalar(0.45); mc.position.y = 0.5; k.scene.add(mc);       // the cube spans +-0.45 m
  k.rig("rim", { dir: [-0.4, 0.6, 0.7], intensity: 0.8, shadows: false });
  k.ground({ y: 0, color: "#0d0e11", shadowOpacity: 0.0 });
  // the world the metal reflects: a big gradient box and a strip (HDR), dark flags are simply absent geometry
  const box = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1.6), new THREE.MeshBasicMaterial({ color: new THREE.Color(2.2, 2.2, 2.25), toneMapped: false, side: THREE.DoubleSide }));
  box.position.set(-1.4, 1.2, 1.2); box.lookAt(0, 0.5, 0); k.scene.add(box);
  return { mc };
},
pose(t, k) {
  const { mc } = k.objects, S = 12;                                                          // subtract
  const gap = k.at(t, [[0, 0.62], [1.2, 0.62], [2.4, 0.16, "power3.inOut"]]);   // ball B holds 1.2 s, then approaches A in a 1.2 s merge leg
  const tau = Math.max(t - 2.4, 0), wob = 0.05 * Math.exp(-6 * tau) * Math.sin(2 * Math.PI * 3 * tau);   // damped surface wobble after the merge
  const reach = k.at(t, [[0, 0], [3.4, 0], [3.9, 0.55, "expo.out"], [4.8, 0, "power2.inOut"]]);          // a pseudopod toward the camera and back
  mc.reset();
  const ball = (x, y, z, r) => mc.addBall(0.5 + x / 0.9, 0.5 + y / 0.9, 0.5 + z / 0.9, S * r * r, S);   // strength = subtract * radius^2 in field units
  ball(-gap / 2, 0, 0, 0.30); ball(gap / 2, wob, 0, 0.26 + wob);
  ball(0, 0.22, reach, 0.14 * Math.min(reach / 0.2, 1));
  mc.update();
},
```

The coordinate mapping above (divide metres by 0.9 because the cube spans 0.9 m at scale 0.45) and the exact radius-to-strength relation are our reading of the addon: verify with a still before building the shot around them (unverified).

### 3D, build B: a raymarched pass with its own chrome

```js
k.pass("blob", { at: "scene", depth: true, blend: "min-depth",
  uniforms: { uB0: (t, k) => [-0.18, 0.5, 0, 0.30], uB1: (t, k) => [ 0.18, 0.5, 0, 0.26], uB2: (t, k) => [0.0, 0.72, 0.3, 0.14] },   // replace with keyed paths
  frag: `
    #include <r3/sdf>
    #include <r3/color>
    uniform vec4 uB0, uB1, uB2;
    float map(vec3 p){ float d = r3SdSphere(p - uB0.xyz, uB0.w); d = r3SMin(d, r3SdSphere(p - uB1.xyz, uB1.w), 0.12); return r3SMin(d, r3SdSphere(p - uB2.xyz, uB2.w), 0.10); }
    #define R3_STEPS 80
    #define R3_CONE 0.00047
    #include <r3/raymarch>
    vec3 env(vec3 d){                                                     // the studio the metal reflects: tune by eye
      vec3 c = mix(vec3(0.015, 0.016, 0.02), vec3(0.09, 0.10, 0.12), smoothstep(-0.3, 1.0, d.y));
      c += vec3(2.2) * smoothstep(0.80, 0.86, dot(d, normalize(vec3(-0.6, 0.5, 0.6))));              // big softbox
      c += vec3(3.0) * smoothstep(0.985, 0.992, dot(normalize(vec2(d.x, d.z) + 1e-5), normalize(vec2(0.9, -0.4)))) * smoothstep(0.5, 0.0, abs(d.y - 0.15));  // strip
      return c; }
    void main(){
      vec3 ro = uCamPos, rd = rayDir(vUv);
      R3March m = r3March(ro, rd, 0.1, min(r3SceneT(vUv, rd), 40.0));
      if (!m.hit) discard;
      vec3 p = ro + rd * m.t, n = r3Normal(p, 0.5 * r3Footprint(m.t, r3PixelAngle(uProjInv, uRes), vec3(0.0, 1.0, 0.0), rd));
      float cosv = max(dot(n, -rd), 0.0);
      vec3 F = vec3(0.90) + (1.0 - vec3(0.90)) * pow(1.0 - cosv, 5.0);                              // F0 about 0.9: our choice for polished steel/chrome
      vec3 col = env(reflect(rd, n)) * F + vec3(0.06, 0.065, 0.07) * (0.3 + 0.7 * r3AO(p, n, 0.25));    // reflection plus a 6 percent dark diffuse ('pewter')
      gl_FragColor = vec4(col, 1.0);
      gl_FragDepth = r3FragDepth(p, uViewProj);
    }` });
```

Camera for both: `pos [[0,[0.9,0.7,2.4]],[2.4,[0.5,0.6,2.0],"power3.inOut"],[5,[0.5,0.6,2.0]]]`, `target [0,0.5,0]`, `lens 90`, `fstop 2.8`, a push of 3-5 percent into the merge. The shot rests (merge, wobble 1.2 s, pseudopod, rest), so no intent declaration is needed. Strip across the merge at 15 fps: the neck must thicken smoothly, with no pop.

### 2D fallback

```js
tl.to("#ballB", { attr: { cx: 420 }, duration: 1.2, ease: "power3.inOut" }, 1.2)
  .to("#ballC", { attr: { cy: 380 }, duration: 0.5, ease: "expo.out" }, 3.4)
  .to("#ballC", { attr: { cy: 520 }, duration: 0.9, ease: "power2.inOut" }, 3.9);
```
The balls sit in a group with `filter: url(#goo)`; add the gradient and a white specular stroke clipped to the alpha. Use it for a UI-scale liquid cue, not as a hero chrome shot.

## What makes a cheap imitation

- A smooth-shaded grey blob with no environment, or the rainbow-normals placeholder.
- Hard-union spheres with no neck; or a neck that appears in one frame (popping at the isolation threshold).
- Elastic overshoot on the position: it bounces like rubber, not like dense liquid.
- A bright cyan and magenta iridescent wash on chrome (the "AI chrome" tell).
- Uniform reflection of a flat sky: nothing slides when the camera moves.
- Cross-dissolving two renders instead of interpolating one field.

## Sources

- https://vfxblog.com/2017/08/23/the-tech-of-terminator-2-an-oral-history/ (fetched): reflection mapping, the pewter look, five-stage model interpolation, about 50 CG shots.
- https://vfxblog.com/2017/02/17/terminator-2-t-1000-truck-scene-3d/ (fetched): 375 frames, six-sided cubic reflection map, interpolation stages, 30-frame cross-dissolve.
- https://www.fxguide.com/fxfeatured/terminator-new-makes-new-models-new-vfx/ (fetched): DNeg's update: 360 degree reflections, sims guided by sculpting.
- https://en.wikipedia.org/wiki/Metaballs (fetched): definition, Blinn, jelly effect, marching cubes.
- https://iquilezles.org/articles/rmshadows/ (fetched): soft shadows for the contact shadow in build B. (The smooth-min article exists but returned 404 through the fetch tool: not cited.)
- local: `skills/rasanai/stage3d/addons/objects/MarchingCubes.js` (API and radius comment), `skills/rasanai/stage3d/glsl.js` (`r3SMin`, `r3Normal`, `r3SoftShadow`, `r3AO`).
- Not fetched: stanwinstonschool.com (page returned no body text), so no claim from it is used.
