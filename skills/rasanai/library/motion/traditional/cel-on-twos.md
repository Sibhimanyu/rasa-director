---
id: "cel-on-twos"
name: "Hand-drawn cel animation on twos"
space: "both"
family: "traditional"
references: ["Disney-lineage full animation (ones for fast action, twos for most acting)", "Studio Ghibli (ones for selected quick shots, threes for dialogue and slow action)", "Spider-Verse (stepped animation revived for CG)"]
timing: {"frame_rate":"12 drawings/s on a 24 fps film (twos); on a 30 fps comp use a 2-frame hold = 15 drawings/s, or a 2/3 alternating hold for a true 12/s","holds_ms":[400,1200],"durations_ms":[250,400,600],"one_drawing_ms":{"24fps_twos":83,"30fps_two_frame_hold":67,"30fps_three_frame_hold":100}}
eases: {"key":"stepped in time, eased in spacing","notes":"The ease lives in how far apart consecutive drawings are, never in a tween between them. Sample a normal ease curve (power2.inOut) at the held times; do not tween the property and do not use steps() on a linear value if the move needs slow-in and slow-out."}
camera: {"lens_mm":[35,50],"moves":["locked","pan or truck on ones","slow push held at the end"],"rules":["Character on twos over a field that pans on ones is the usual pairing in the fetched practice; treat as a convention, unverified in sources","One move per shot, then hold","In 3D the camera keys stay smooth unless the whole frame is meant to step"]}
recipe_2d: "GSAP on one paused timeline at 30 fps: a plain-object clock tween {t:0}->{t:DUR}, ease 'none', whose onUpdate computes q = Math.floor(Math.round(t*30)/2)*2/30 (frame index first, then hold of 2) and writes every animated property from ease(prog(q,a,b)) with ease = gsap.parseEase('power2.inOut'). Hand-drawn characters are N <g> poses toggled by index Math.floor(q*12)%N. Seeded mulberry32(seed+drawingIndex) gives 0.8-1.4 px line wobble re-rolled only when the drawing changes. For simple moves tl.to(el,{x:..,ease:'steps(n)'}) is acceptable when the move needs no slow-in."
recipe_3d: "Rasan3D: pose(t,k){ const fi=Math.round(t*30); const tq=Math.floor(fi*12/30+1e-6)/12; ...drive every mesh from k.prog(tq,a,b,'power2.inOut') } so spacing is eased and time is stepped; set motionBlur:false; flat shading with a post pass using r3Toon(luma,3.0,0.02) from #include <r3/npr> plus an outline from depth; camera pos/target as keys (smooth) unless the camera itself should step, in which case pos is a function of t that samples the same tq."
pitfalls: ["Tweening the property with an ease and then adding steps(): double processing gives a staircase of uneven size instead of drawn spacing", "Holds of 2 frames everywhere: real twos work mixes in ones for fast actions and threes or longer holds for settled poses", "Easing between drawings (soft in-betweens) removes the whole point; each drawing must read as a clean pose", "12 drawings/s on a 30 fps comp is 2.5 frames per drawing and judders; pick a 2-frame hold or render at 24 fps", "Applying a finish motion blur over stepped motion cross-fades adjacent drawings into ghost frames", "Pure sine/linear spacing: drawn spacing clusters drawings near the extremes (slow in, slow out)", "Constant line wobble every frame instead of per drawing"]
instruct: {"all":"State the hold explicitly: 'each drawing is held for 2 frames at 30 fps (67 ms); fast actions on ones, settled poses held 6-12 frames'. Say that the move is eased in spacing by sampling the ease at the held time, never tweened between drawings. Give the clock-proxy pattern and forbid onUpdate from reading wall time. Set data-finish-blur=\"off\" on the scene's frame root so the film finish does not average the steps; the scene is then rendered from the centre sub-frame. Use steps(n) eases / hold frames on twos (e.g. 12 drawings/s) and never power* tweens on the stepped layer.","claude":"Claude tends to write a smooth GSAP tween and then put 'steps(12)' on it, or to ease every move with power3.out and call it hand-drawn. Spell out: frame index first (Math.round(t*30)), then hold, then ease sampled at that held time. Ask for a table of drawings per action (index, frame range, hold) before code. It follows a table of numbers reliably.","gpt":"GPT models tend to add CSS transition or keyframes with steps() and forget determinism, or to use Math.random for the wobble. Forbid CSS animation, require GSAP on the paused timeline and mulberry32 seeded by drawing index. State the integer hold and show the q(t) helper verbatim; ask it to print the first 12 frames of q to prove the hold pattern."}
verified: {"sources_fetched":5,"non_wikipedia":1,"colours":"n/a","colour_images":[],"grid":"n/a","timings":"partial","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Traditional_animation", "https://en.wikipedia.org/wiki/Twelve_basic_principles_of_animation", "https://en.wikipedia.org/wiki/Limited_animation", "https://animetudes.com/2021/03/06/the-kanada-style-in-context/", "https://en.wikipedia.org/wiki/Clay_animation"]
---

## What it is

Animating on twos means one drawing is exposed for two frames of film, so a 24 fps film carries 12 drawings per second. "On ones" is a new drawing every frame (24 per second) and is kept for quick movement. The Wikipedia page on traditional animation also records that Studio Ghibli mixes ones for selected quick shots with threes for dialogue and slower action, and that budget productions sometimes mean roughly 8 drawings per second ("on threes"). The look is the deliberate, slightly stepped rhythm of drawn acting: every pose is a designed drawing, and the eye fills the gap.

The reason it is worth building today is that stepping is now a recognised choice, not a limitation: CG films have revived it (see spider-verse-stepped-halftone) and the motion reads as handmade where tweened UI motion reads as software.

## The defining traits (numbers)

| Trait | Value | Source / status |
|---|---|---|
| Drawings per second, twos | 12 (24 fps film) | traditional-animation wiki |
| Drawings per second, ones | 24 | same |
| Drawings per second, threes | 8 | same |
| One drawing at 24 fps, twos | 83 ms | derived (2/24 s) |
| One drawing at 30 fps, 2-frame hold | 67 ms (15 drawings/s) | derived |
| True 12/s on a 30 fps comp | holds alternate 3,2,3,2 frames | derived (30/12 = 2.5) |
| Frames per second of film for clay doubles | 12 changes per second; about 21,600 adjustments for 30 minutes | clay-animation wiki (same arithmetic) |
| Spacing | more drawings near the extremes of an action (slow in, slow out), fewer in the middle | twelve-principles wiki |
| Arcs | natural action follows arcs; faster movement flattens the arc | twelve-principles wiki |
| Settled hold | 400-1200 ms (12-36 frames at 30 fps) between acting beats | own working range, not a sourced figure |
| Action beat | 250-600 ms from extreme to extreme | own working range |

Spacing is the craft. A move from A to B over 12 frames on twos is 6 drawings; the 6 positions are the eased curve sampled at 0, 2, 4, 6, 8, 10 frames. With power2.inOut the first and last steps are small and the middle steps large. Held poses between beats are not frozen: a moving hold (a 1-2 px drift or a 1-2% scale creep, ease 'none') keeps a pose alive for 400-1200 ms; see limited-animation-upa-hanna-barbera for the technique.

## How to build it

### 2D (HyperFrames, 1920x1080, 30 fps)

```js
const FPS = 30, HOLD = 2, DUR = 6;                 // 2-frame hold = 15 drawings/s; use HOLD 3 for threes
const mulberry32 = a => () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a);
  t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
const q = t => Math.floor(Math.round(t * FPS) / HOLD) * HOLD / FPS;     // frame index first, so seeks are exact
const prog = (t, a, b, e) => e(Math.min(1, Math.max(0, (t - a) / (b - a))));
const inOut = gsap.parseEase("power2.inOut"), out = gsap.parseEase("power3.out");

const tl = gsap.timeline({ paused: true });
window.__timelines["scene"] = tl;
const clock = { t: 0 };
tl.to(clock, { t: DUR, duration: DUR, ease: "none", onUpdate() {
  const s = q(clock.t);                                       // the held time: constant for 2 frames
  const rnd = mulberry32(1000 + Math.round(s * FPS));         // new wobble only when the drawing changes
  gsap.set("#hero", { x: 960 * prog(s, 0.5, 1.1, inOut) - 480, y: -140 * prog(s, 0.9, 1.3, out),
                      rotation: (rnd() - 0.5) * 1.2 });       // +-0.6 deg line-boil, own value
  document.querySelectorAll("#hero .d").forEach((g, i, all) =>
    g.style.display = i === Math.floor(s * 12) % all.length ? "" : "none");   // drawn-pose cycle
} }, 0);
```

Rules for the build:
- Everything stepped goes through the one clock tween (plain-object tween: `obey.mjs` classifies non-element tweens as exempt) or through zero-duration `tl.set` calls at frame times (also exempt). Real element tweens with an ease still have to be in the film's `motion.md` ease set; list 'none' and steps(n) there for a stepped film.
- Camera on ones: a pan or push on `#world` uses an ordinary `power2.inOut` tween, not the held time. The characters step; the field does not.
- A walk or run cycle is N drawings on 2s: 8 drawings is 16 frames = 0.53 s at 30 fps, a brisk walk (derived, a common cycle length, not sourced here).
- Fast actions drop to HOLD 1 for 3-6 frames (100-200 ms), then return to 2: write the hold per action, not per film.
- Line boil: re-roll the wobble per drawing, never per frame. At 30 fps with HOLD 2 it changes 15 times a second.

### 3D (Rasan3D)

```js
const FPS = 30, TWOS = (t) => Math.floor(Math.round(t * FPS) * 12 / FPS + 1e-6) / 12;   // 12 drawings/s, rounded to the frame first
Rasan3D.stage({ id: "cel", canvas, timeline: tl, duration: 5, fps: 30, motionBlur: false,
  camera: { pos: [[0, [0, 1.2, 6]], [2.4, [0.8, 1.3, 4.6], "sine.inOut"]], target: [[0, [0, 1, 0]]], lens: [[0, 35]] },
  declare: { intent: { "implicit-ease": "pose is sampled from eased curves at stepped times", "linear-drift": "held-time sampling is intentional" } },
  build(k) { /* character: grouped meshes, k.material('matte',{color}) */ },
  pose(t, k) {
    const s = TWOS(t);                                         // pure function of t
    const p = k.prog(s, 0.5, 1.1, "power2.inOut");             // eased spacing, stepped time
    k.objects.hero.position.x = -2 + 4 * p;
  },
  graph(k) { k.pass("toon", { at: "post", frag: `#include <r3/npr>
    out vec4 outColor; void main(){ vec4 s = r3Src(vUv); float l = r3Luma(s.rgb);
      outColor = vec4(s.rgb * (r3Toon(l, 3.0, 0.02) / max(l, 1e-3)), s.a); }` }); } });
```

Use `motionBlur: false`. The finish's blur (`finish.mjs`, shutter 0.5) would cross-fade neighbouring drawings; because TWOS rounds to the frame index first, every sub-frame inside one output frame's shutter resolves to the same drawing, so the finish does not ghost, but still prefer `--shutter 0.25` for stepped scenes (unverified on a render; check a strip with `crew.mjs strip --fps 15`).

## What makes a cheap imitation

- A smooth tween with `steps(12)` bolted on: the staircase has equal-size steps, so there is no drawn spacing and no slow-in.
- Easing between drawings or blending drawings with opacity: the look is crisp pose changes, not interpolation.
- The whole frame on twos including the camera, UI chrome and text: the field and anything the viewer must read stay smooth or at least on ones.
- Every beat held the same 2 frames: no ones for the fast move, no long holds for the settled pose.
- Uniform wobble applied per frame (it reads as a shaky filter) instead of per drawing.
- No overlap: the whole character moves on the same drawings; secondary parts (hair, hands) should lag by 1-3 drawings.

## Sources

- https://en.wikipedia.org/wiki/Traditional_animation (fetched) - twos = 12 drawings/s on 24 fps, ones = 24, Ghibli mixes ones and threes, budget threes about 8/s.
- https://en.wikipedia.org/wiki/Twelve_basic_principles_of_animation (fetched) - timing, slow in and slow out, arcs, overlapping action.
- https://en.wikipedia.org/wiki/Limited_animation (fetched) - held and reused drawings, moving holds.
- https://animetudes.com/2021/03/06/the-kanada-style-in-context/ (fetched) - ones and twos modulation in a drawn style.
- https://en.wikipedia.org/wiki/Clay_animation (fetched) - doubles = 12 changes per second, 21,600 adjustments in 30 minutes.
- Unverified: camera pans on ones under characters on twos (common convention, not stated in any fetched page); 8-drawing walk cycle length; the 400-1200 ms hold range.
