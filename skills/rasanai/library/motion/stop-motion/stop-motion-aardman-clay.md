---
id: "stop-motion-aardman-clay"
name: "Aardman clay animation (plasticine, hand-made surface)"
space: "both"
family: "stop-motion"
references: ["Aardman Animations: Wallace & Gromit, Creature Comforts, Morph, Shaun the Sheep, Chicken Run", "Nick Park", "Will Vinton (Claymation trademark)", "MPC's CG effects matched to clay in The Curse of the Were-Rabbit"]
timing: {"frame_rate":"24 frames per second of film; about 30 frames per day per animator (Wallace & Gromit); on ones for performance, twos (12 changes/s, 'doubles') as the cheaper clay option","holds_ms":[167,667],"durations_ms":[83,167,333,500,1000],"one_frame_ms":42}
eases: {"key":"none; every move is a hand-nudged pose with drawn spacing","notes":"Anticipation and take are exaggerated; Gromit acts with brows and body only. Eases are spacing, not functions: sample power2.out or power3.inOut at the frame time. Camera moves, if any, are smooth motion-control paths."}
camera: {"lens_mm":[28,35,50],"moves":["locked-off at puppet eye level","slow push on a reaction","low angle for the villain"],"rules":["Miniature sets give shallow depth of field and close hard shadows","Warm domestic practical light, one key plus fill","CG smoke, fire and water are matched to clay (frame-stepped, matt) rather than looking smooth"]}
recipe_2d: "HyperFrames, 30 fps comp driven from f24 = Math.floor(t*24+1e-6). Shapes are rounded (stroke-linejoin round, border-radius 40-50 percent) with flat plasticine hues and a soft inner highlight dab. Boil: an SVG filter feTurbulence baseFrequency 0.02, numOctaves 2, seed = Math.floor(f24/2) (re-rolled per 2 frames) into feDisplacementMap scale 3-5 px, applied to the character group only. Thumbprint texture: a 256 px noise tile with 3-4 px wide ridges at 8 percent multiply. Performance on ones with a keyframe table every 3-6 frames and spacing sampled with power2.out/in at frame time. Gromit brow: 2 frames to rise 6-10 px, hold 8-14 frames. Mouth: big jaw drop, no morph, 2-3 jaw shapes for dialogue, swapped with tl.set. Lighting: key from 30-45 deg, hard shadow offset 8-14 px at 30 percent, background plate pre-blurred 6-10 px."
recipe_3d: "Rasan3D: pose(t,k){ const f=Math.floor(t*24+1e-6); const r=k.rng(2000+f); ... } with every part as rounded geometry (SphereGeometry/CapsuleGeometry, not stock torus knots) in k.material('clay',{color}) with roughness 0.6-0.8, and a thumbprint normal map generated procedurally in build via a CanvasTexture seeded by k.rng. Per frame jitter of each part: scale 1+-0.8 percent, position +-0.8 mm on a 0.2 m puppet, rotation +-0.4 deg, from k.rng(2000+f). Rig: 'top-soft' or 'three-point' with shadowSoftness 3-5, warm key #ffd9a8, environment 'soft'. Camera lens 35 mm, fstop 2.8-4, focus on the eyes; pos keys 'sine.inOut' for pushes; motionBlur false. Post: grain 0.02-0.03, vignette 0.2, no bloom."
pitfalls: ["Smooth glossy 3D 'clay' with no surface noise or per-frame variation: the surface changes slightly every frame in the physical process", "Perfect geometric primitives with no hand-modelled irregularity or pinch marks", "Soft plastic-toy shading: real plasticine is matte-satin with a few specular dabs", "Lip-sync that opens and closes with the audio envelope on every frame: Wallace's mouth is a few big shapes; Gromit has no mouth", "Squash and stretch that is not volume-preserving: clay keeps its volume", "Expressions that change instantly with no anticipation or hold; the humour comes from the take then a long beat", "CG effects (smoke, fire) rendered smooth: even Aardman's CG elements were studied against the set for months to match the clay look", "Treating 'on ones' as optional: Aardman's quoted rate is 24 frames per second of film"]
instruct: {"all":"Specify per-frame surface variation (seeded), the rate (24 per second, ones), and the performance primitives (anticipation 3-4 frames, take, hold 8-14 frames). Ask for the thumbprint texture and re-pose jitter explicitly.","claude":"Claude will make a clean matte-pastel 'claymorphism' look: rounded UI cards with soft shadows, no surface variation, no per-frame change. Say 'claymation, not claymorphism: the surface differs on every frame by 0.8 percent scale and 3-5 px displacement, seeded per frame'. It handles seeded per-frame variation well once told the integer frame index to use.","gpt":"GPT models tend to produce a glossy 3D toy render and smooth CSS transitions between expressions. Say 'matte plasticine with fingerprint ridges, no gloss', forbid transitions, and give the f24 formula and the displacement-filter seed formula. Ask for the keyframe table with frame numbers first."}
sources: ["https://en.wikipedia.org/wiki/Aardman_Animations", "https://en.wikipedia.org/wiki/Wallace_%26_Gromit", "https://en.wikipedia.org/wiki/Clay_animation", "https://www.animationartconservation.com/making-his-mark-in-clay,-an-interview-with-nick-park.html"]
---

## What it is

Aardman (founded 1972) is the British studio best known for plasticine character animation: Morph, Creature Comforts (its first Academy Award win, 1990), Wallace & Gromit and Shaun the Sheep. The fetched Clay animation page defines the method (plasticine, developed by William Harbutt in 1897, around a wire armature) and the cadence: standard film at 24 fps, or "doubles" at 12 changes per second, which for a 30-minute production means about 21,600 individual adjustments. The Wallace & Gromit page gives the production reality: "the filming rate at typically around 30 frames per day per animator", and Gromit, with no visible mouth, performs through brow and body, "compared to Buster Keaton". Nick Park says in the fetched interview that he wanted to keep "the hand-made quality" when the films became features rather than get "slicker or smooth". That hand-made surface is what to reproduce.

## The defining traits (numbers)

| Trait | Value | Source / status |
|---|---|---|
| Material | plasticine, Aard-mix (slightly more durable than ordinary plasticine) | Nick Park interview |
| Film rate | 24 frames per second of film | Wallace & Gromit wiki |
| Daily output | about 30 frames per day per animator (about 1.25 s of film per day) | Wallace & Gromit wiki |
| Doubles | 12 changes/s, 21,600 adjustments in 30 minutes | Clay animation wiki |
| Weekly target | about 5 s/week (search summary, not fetched in full) | unverified |
| Gromit | no mouth; brow, eyes, head and body carry the performance | Wallace & Gromit wiki |
| CG matching | for The Curse of the Were-Rabbit, MPC studied the set for three months to create clay-like CG fire, smoke and bunnies | Wallace & Gromit wiki |
| Park's stance | preserve the hand-made quality; do not smooth it | interview |
| Fragility | surface marks from dust, hair, fingerprints; humidity can deform puppets so scenes are shot in a day or less | Clay animation wiki |
| Lens, aperture, light | miniature set photography: shallow DOF, close hard shadows | own description of the craft; unverified |
| Fingerprint ridges and thumb marks as a visible charm | widely cited, but not in the fetched pages | unverified |
| Surface displacement per frame | 3-5 px at 1080p; scale jitter 0.8% | own working values |
| Brow action | rise in 2 frames (83 ms), hold 8-14 frames (333-583 ms) | own working range |

The performance rule: anticipation (3-4 frames), a fast take (2-3 frames), then a long held reaction (8-14 frames). The comedy is in the hold.

## How to build it

### 2D (HyperFrames)

```html
<svg width="0" height="0" style="position:absolute"><filter id="clay" x="-5%" y="-5%" width="110%" height="110%">
  <feTurbulence id="clayNoise" type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="1" result="n"/>
  <feDisplacementMap in="SourceGraphic" in2="n" scale="4" xChannelSelector="R" yChannelSelector="G"/>
</filter></svg>
<style>#puppet { filter: url(#clay); }</style>
```

```js
const FPS = 24, f24 = t => Math.floor(t * FPS + 1e-6);
const mulberry32 = a => () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a);
  t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
const sample = (f, a, b, ease) => gsap.parseEase(ease)(Math.min(1, Math.max(0, (f - a) / (b - a))));

tl.to(clock, { t: DUR, duration: DUR, ease: "none", onUpdate() {
  const f = f24(clock.t), r = mulberry32(900 + f);
  clayNoise.setAttribute("seed", String(Math.floor(f / 2)));                         // boil: new surface every 2 frames
  const dx = 640 * sample(f, 12, 60, "power2.inOut");                                // spacing drawn, time stepped (ones)
  const squash = f >= 60 && f < 64 ? 0.12 : 0;                                       // 4-frame landing squash
  gsap.set("#puppet", { x: dx + (r() - .5) * 1.5, y: (r() - .5) * 1.5, scaleX: 1 + squash, scaleY: 1 / (1 + squash),
                        rotation: (r() - .5) * 0.8, transformOrigin: "50% 100%" });
  gsap.set("#brow", { y: -8 * sample(f, 70, 72, "power1.out") * (f < 84 ? 1 : 0) });  // 2-frame rise, 12-frame hold
} }, 0);
```

- Apply the displacement filter to the character group only (a full-frame filter costs seconds per frame); keep the scale 3-5 px.
- Rounded forms: radius of 40-50% on shapes, no sharp corners; colours are flat plasticine hues (a handful of saturated mid-tones), plus a 6-10% fingerprint ridge tile in multiply and a small, hard-edged highlight dab at the upper left.
- The performance table comes first: write for each beat the frame of anticipation, take, and hold, then code. Eyes are on a head pivot; the head leads the body by 2-3 frames.
- Lip-sync for a talking character: 2-3 jaw shapes (closed, mid, wide) on syllables, not on amplitude.
- Light: key at 30-45 deg from the upper left in warm #ffd9a8; shadow 8-14 px offset, 30% black; background plate pre-blurred 6-10 px. Do not add global bloom.

### 3D (Rasan3D)

```js
const FPS = 24, f24 = t => Math.floor(t * FPS + 1e-6);
Rasan3D.stage({ id: "clay", canvas, timeline: tl, duration: 5, fps: 30, motionBlur: false, environment: "soft",
  post: { grain: 0.025, vignette: 0.2 },
  camera: { pos: [[0, [0.1, 0.16, 0.7]], [3, [0.04, 0.16, 0.52], "sine.inOut"]], target: [[0, [0, 0.14, 0]]], lens: [[0, 35]], fstop: 3.2 },
  async build(k) {
    const clay = k.material("clay", { color: "#d9a066", roughness: 0.7 });
    const body = new k.THREE.Mesh(new k.THREE.SphereGeometry(0.06, 48, 32), clay);       // modelled, then pinched in pose()
    k.rig("top-soft", { dir: [0.4, 0.9, 0.5], intensity: 1.0, shadows: true, shadowSoftness: 4 });
    k.ground({ y: 0, color: "#6b4f3a", shadowOpacity: 0.6 });                              // a real tabletop
    return { body };
  },
  pose(t, k) {
    const f = f24(t), r = k.rng(2000 + f), b = k.objects.body;
    const s = 1 + (r() - .5) * 0.016;                                                      // +-0.8 percent, new each frame
    const sy = (f >= 60 && f < 64 ? 0.88 : 1) * s;                                        // 4-frame landing squash on height
    const sxz = 1 / Math.sqrt(sy);                                                         // volume kept: sx * sy * sz = 1 (jitter folded into sy)
    b.scale.set(sxz, sy, sxz);
    b.position.x = 0.4 * k.prog(f / FPS, 0.5, 2.5, "power2.inOut") + (r() - .5) * 0.0008;
    b.rotation.z = (r() - .5) * 0.007;
  } });
```

Volume stays constant: sx = sz = 1/sqrt(sy), so sx*sy*sz = 1 for any squash. Clay surface detail: a procedural CanvasTexture of 3-4 px ridges generated in `build` from `k.rng`, applied as `bumpMap` at 0.4-0.6 scale; no loaded URL at render time.

## What makes a cheap imitation

- 'Claymorphism': smooth matte pastel UI cards with soft shadows. Claymation's surface is not clean and changes by the frame.
- A clean 3D render with a clay-coloured material and no per-frame variation.
- Eased, motion-blurred motion at 60 fps: Aardman's frames are discrete sharp stills.
- Expressions that blend (morph) instead of re-posing; the clay is re-sculpted between frames.
- No hold after the take: the reaction beat is half the joke.
- Volume not preserved in squash and stretch.
- Cinematic bokeh and bloom: the DOF is the shallow focus of a miniature, with hard-edged shadows.

## Sources

- https://en.wikipedia.org/wiki/Aardman_Animations (fetched) - studio background, plasticine, Nick Park, Creature Comforts, 2005 fire.
- https://en.wikipedia.org/wiki/Wallace_%26_Gromit (fetched) - 30 frames per day per animator, 24 frames per second, Gromit's silent performance, MPC's CG match.
- https://en.wikipedia.org/wiki/Clay_animation (fetched) - plasticine and armature, doubles, 21,600 adjustments, humidity and dust.
- https://www.animationartconservation.com/making-his-mark-in-clay,-an-interview-with-nick-park.html (fetched) - Aard-mix and the aim to keep the hand-made quality.
- Unverified: 5 seconds per week (not fetched in full); fingerprint ridges; all px, scale and frame-count numbers for surface variation and brow timing (own).
