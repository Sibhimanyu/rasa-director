---
id: "squash-bounce-pop"
name: "Squash, bounce and pop (volume-preserving cartoon deformation)"
space: "both"
family: "traditional"
references: ["Disney's twelve principles: squash and stretch, anticipation, follow-through (Thomas and Johnston, The Illusion of Life, 1981)", "Emile Cohl, Fantasmagorie (1908)", "Fleischer and Looney Tunes deformation", "Playful UI and sticker-pop motion graphics"]
timing: {"frame_rate":"24 or 30 fps; pops land in 8-14 frames","holds_ms":[100,400],"durations_ms":[300,420,560],"contact_squash_ms":[67,100],"stages_ms":{"anticipation":[100,167],"stretch_launch":[67,100],"overshoot":[100,150],"settle":[150,250]}}
eases: {"key":"back.out(1.2-1.6) for the settle only; power2.in on the fall, power2.out on the rise","notes":"Never bounce.out or elastic.out as the whole animation; deformation is area- or volume-preserving; overshoot at most 8-12 percent and one settle. Playful-style exception to craft.md's overshoot rule: declare it in the decisions drawer."}
camera: {"lens_mm":[35,50],"moves":["locked","small 2-4% push on the landing"],"rules":["Locked camera so the deformation is the motion","Shadow shrinks and sharpens as the object rises, grows on contact"]}
recipe_2d: "GSAP: stage the pop as keyed poses with transform-origin '50% 100%' (the contact point). Helper sq(a) -> {scaleX:1+a, scaleY:1/(1+a)} keeps area. Entrance pop: 0) scale 0, opacity 1 at t0; 1) anticipation: scaleX 1.12, scaleY 0.88, 100 ms power2.out; 2) launch/stretch: scaleX 0.88, scaleY 1.14, y -24, 90 ms power2.in; 3) pop: scaleX 1.08, scaleY 0.93, y 0, 120 ms back.out(1.4); 4) settle: 1,1 in 180 ms power2.out. Bounce with decay: heights 100%, 50%, 25% (restitution about 0.7, own derivation h' = e^2*h), times 100%, 70%, 50% of the first fall; fall power2.in, rise power2.out; squash on each contact: a = +0.18, +0.10, +0.05 held 2 frames (67 ms); stretch just before contact: a = -0.10. Shadow: scale 1 -> 0.6, opacity 0.35 -> 0.18 at apex. Everything on the paused timeline; seeded mulberry32 only for small variation per bounce (+-3 percent)."
recipe_3d: "Rasan3D: analytic bounce in pose(t,k), no simulation: h(t) from the same height/time table; position.y = base + h; sy from the squash table; sx = sz = 1/Math.sqrt(sy) (volume preserved); set the mesh pivot at the contact point (geometry.translate(0,r,0)) so the squash grows from the floor. Material k.material('gummy') or 'clay', rig 'top-soft' with k.ground shadowOpacity 0.5 so the contact shadow tightens on landing, camera lens 50 mm pos key 'sine.inOut' 2-4 percent push, motionBlur default (180 degree) is correct here because the motion is smooth, fstop off."
pitfalls: ["bounce.out or elastic.out as the entire animation: no squash, no stretch, no anticipation, so it reads as a UI default", "Non-preserving deformation (scaleX up with scaleY unchanged, or both up): objects seem to inflate", "Squash at the wrong pivot (centre origin): the object sinks into the floor or floats; the origin is the contact point", "Large overshoot (20+ percent) and multiple settles on text or serious content", "Bounce applied to every element on the page: one bouncing hero per scene", "Equal bounce heights and equal times: real decay halves the height and shortens the interval", "No shadow response: contact shadow must change with height", "Stretch and squash used on rigid things (a phone, a laptop): the style needs soft or cartoon bodies"]
instruct: {"all":"Give a pose table (frame or ms, scaleX, scaleY, y, ease) for the first pop and the first two bounces, state that area (2D) or volume (3D) is preserved and that the transform origin is the contact point. State the overshoot cap (8-12 percent) and that it applies once.","claude":"Claude tends to chain back.out(3) or elastic.out(1,0.3) on a single scale tween with no squash, and to apply it to every card. Say 'keyed poses, not a single elastic ease' and give the table. It follows numeric tables well; ask it to compute sx from sy with sx = 1/sy (2D) and 1/sqrt(sy) (3D) in code, not by eye.","gpt":"GPT models tend to use CSS keyframes with cubic-bezier overshoot and to scale uniformly. Forbid CSS keyframes and uniform scaling; require explicit scaleX/scaleY from the area rule and transform-origin at the base. Ask for the pose table printed as a comment above the timeline."}
verified: {"sources_fetched":4,"non_wikipedia":2,"colours":"n/a","colour_images":[],"grid":"n/a","timings":"partial","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Squash_and_stretch", "https://en.wikipedia.org/wiki/Twelve_basic_principles_of_animation", "https://creativityschool.com/squash-and-stretch-bouncing-ball-animation/", "https://gsap.com/docs/v3/Eases/"]
---

## What it is

Squash and stretch is, in Wikipedia's words, "by far the most important" of Disney's twelve principles: non-rigid objects deform with inertia and elasticity but keep their volume, like a half-filled flour sack. The bouncing ball is the foundational exercise (the ball compresses on ground impact and extends on the way up). Emile Cohl is credited with the idea in Fantasmagorie (1908); Frank Thomas and Ollie Johnston documented it in The Illusion of Life (1981); in the 1930s Disney animators exaggerated the deformation while holding volume constant. "Pop" is the same idea applied as an entrance: anticipation, a stretch launch, a landing with a controlled overshoot, and a settle. It reads as playful, tactile and alive, and it is also the most overused and most badly done motion on screen.

## The defining traits (numbers)

| Trait | Value | Source / status |
|---|---|---|
| Rule | volume preserved while squashing or stretching | squash-and-stretch wiki |
| Squash on contact; stretch on approach and rise | contact squash, stretch in the fast parts | Creativity School; wiki |
| Anticipation | prepares the action | twelve-principles wiki |
| Slow in and out | more drawings near extremes | twelve-principles wiki |
| Follow-through | parts continue after the body stops | twelve-principles wiki |
| Arcs | arcs, flatter when faster | twelve-principles wiki |
| Tutorial bounce | 8 frames per one-direction half cycle with squash at contact and stretch in rise/fall | Creativity School (a drawn exercise, not a standard) |
| 2D area rule | scaleX = 1+a, scaleY = 1/(1+a) | derived |
| 3D volume rule | sy free; sx = sz = 1/sqrt(sy) | derived |
| Contact squash hold | 2 frames (67 ms at 30 fps) | own working value |
| Squash values | +0.18 (first contact), +0.10, +0.05; stretch -0.10 before contact | own working range |
| Bounce decay | each bounce height about 0.5x (restitution 0.7; h' = e^2 h), interval about 0.7x | derived from physics; a search result gave a different decay (1/4 to 1/5) that was not fetched: unverified |
| Overshoot | 8% at most, one settle (craft.md: allowed only in playful styles, back.out 1.2-1.6) | repo rule + own |
| Pop duration | 400-560 ms total; anticipation 100-167, stretch 67-100, overshoot 100-150, settle 150-250 | own working range |
| GSAP eases | `back`, `elastic`, `bounce` exist in core; `back` strength parameter range shown 0.2-2 in the docs; the GSAP default back.out value is 1.7 (from memory; not shown on the fetched page: unverified) | GSAP docs |

## How to build it

### 2D (HyperFrames, 1920x1080)

```js
const sq = a => ({ scaleX: 1 + a, scaleY: 1 / (1 + a) });          // area-preserving: a>0 squash (wider), a<0 stretch (taller)
const base = { transformOrigin: "50% 100%" };                        // the contact point

// the entrance pop (about 490 ms), keyed poses, one ease each; t0 = start time
tl.set("#hero", { opacity: 1, scale: 0, ...base }, t0)
  .to("#hero", { ...sq(0.12), y: 0, duration: 0.10, ease: "power2.out" }, t0)             // appears and anticipates (squash)
  .to("#hero", { ...sq(-0.14), y: -24, duration: 0.09, ease: "power2.in" }, ">")          // stretch launch
  .to("#hero", { ...sq(0.08), y: 0, duration: 0.12, ease: "back.out(1.4)" }, ">")         // lands past the target by under 8 percent
  .to("#hero", { scaleX: 1, scaleY: 1, duration: 0.18, ease: "power2.out" }, ">");        // settle

// a decaying bounce: heights 100/50/25 percent, times 1.0/0.7/0.5
const H0 = 320, T0 = 0.42, A = [0.18, 0.10, 0.05];
let t = t1;
[1, 0.5, 0.25].forEach((hk, i) => {
  const h = H0 * hk, T = T0 * [1, 0.7, 0.5][i];
  tl.to("#ball", { y: -h, ...sq(-0.10 * (1 - i * 0.3)), duration: T / 2, ease: "power2.out" }, t);   // rise slows toward the apex
  tl.to("#ball", { y: 0, duration: T / 2, ease: "power2.in" }, t + T / 2);                            // fall accelerates
  tl.to("#ball", { ...sq(A[i]), duration: 0.067, ease: "power1.out" }, t + T);                       // contact squash, 2 frames
  tl.to("#ball", { ...sq(0), duration: 0.067, ease: "power1.out" }, t + T + 0.067);
  t += T + 0.134;
});
tl.to("#shadow", { scaleX: 0.6, opacity: 0.18, duration: 0.21, ease: "power2.out", yoyo: true, repeat: 1 }, t1);   // shadow follows height
```

- All of this must sit on the paused timeline; add `back.out` and `power1.out` to the film's `motion.md` ease set and mark the style 'playful' so `obey.mjs` and the critics accept the overshoot. Without that declaration these tweens fail the ease and overshoot rules.
- Keyed poses beat a single `back.out(3)` tween: the single ease gives overshoot only, none of the squash, stretch or anticipation.
- Text never bounces: pop the container or the shape behind the text; text itself fades or rises with `power3.out`.
- One pop per scene, as the signature motion. Secondary items arrive 80-200 ms later and without deformation.
- Seeded variation: multiply each bounce's height by `1 + (mulberry32(seed+i)() - 0.5) * 0.06`.

### 3D (Rasan3D)

```js
Rasan3D.stage({ id: "pop", canvas, timeline: tl, duration: 3, fps: 30,       // default motion blur: the motion is smooth
  camera: { pos: [[0, [0, 0.9, 3.4]], [2.6, [0, 0.85, 3.1], "sine.inOut"]], target: [[0, [0, 0.35, 0]]], lens: [[0, 50]] },
  async build(k) {
    const R = 0.25, g = new k.THREE.SphereGeometry(R, 64, 48); g.translate(0, R, 0);          // pivot at the contact point
    const ball = new k.THREE.Mesh(g, k.material("gummy", { color: "#ff6b4a" }));
    k.rig("top-soft", { dir: [0.4, 1, 0.5], intensity: 1.0, shadows: true });
    k.ground({ y: 0, shadowOpacity: 0.5 });
    return { ball };
  },
  pose(t, k) {
    const b = k.objects.ball, st = bounce(t);
    b.position.y = st.y;
    const sxz = 1 / Math.sqrt(st.sy); b.scale.set(sxz, st.sy, sxz);                                 // volume preserved: sx*sy*sz = 1
  } });

// declare these above the Rasan3D.stage call (const is not hoisted). A pure function of t: three flights (heights 1, 0.5, 0.25; times 1, 0.7, 0.5) each followed by a 0.1 s contact squash
const T0 = 0.8, H0 = 1.1, HK = [1, 0.5, 0.25], TK = [1, 0.7, 0.5], C = 0.1, SQ = [0.18, 0.10, 0.05];
function bounce(t) {
  let u = t;
  for (let i = 0; i < 3; i++) {
    const T = T0 * TK[i];
    if (u < T) { const p = u / T, v = Math.abs(2 * p - 1);                                           // v = 1 at the floor, 0 at the apex
      return { y: H0 * HK[i] * 4 * p * (1 - p), sy: 1 + 0.14 * v * v * v }; }                      // parabola; stretched when fast
    u -= T;
    if (u < C) return { y: 0, sy: 1 - SQ[i] * Math.sin(Math.PI * u / C) };                         // contact: squash and recover over 3 frames
    u -= C;
  }
  return { y: 0, sy: 1 };
}
```

The contact squash window is part of the same table (height x0.82, x0.90, x0.95 for 3 frames at 30 fps); check it with `crew.mjs strip --fps 15` and verify the ball's base never leaves the floor on contact frames (the pivot rule makes it exact). In 3D the shadow catcher already tightens with height; do not add a fake.

## What makes a cheap imitation

- `bounce.out` on a scale or y tween: uniform, no deformation, wrong physics (the whole page bounces).
- Elastic overshoot of 20-40% with 3-5 wobbles, applied to text and cards.
- Non-uniform scale that does not preserve area (scaleX 1.2, scaleY 1.0).
- Center-origin squash; objects sink or hover.
- No anticipation: the pop starts at full size or starts from scale 0 with no preparation.
- A bounce on everything: no hero, so no focus.
- No sound or no shadow: the landing must have a tick and a contact shadow.

## Sources

- https://en.wikipedia.org/wiki/Squash_and_stretch (fetched) - importance, volume preservation, bouncing ball, Cohl 1908, Thomas and Johnston 1981.
- https://en.wikipedia.org/wiki/Twelve_basic_principles_of_animation (fetched) - anticipation, timing, slow in and out, follow-through, arcs.
- https://creativityschool.com/squash-and-stretch-bouncing-ball-animation/ (fetched) - squash at contact, stretch in motion, an 8-frame half-cycle exercise (the page gives no ratios).
- https://gsap.com/docs/v3/Eases/ (fetched) - core eases back, bounce, elastic, steps, and the ease visualiser parameter ranges.
- Unverified: bounce decay of 1/4-1/5 (search summary only); GSAP's default back overshoot of 1.7; all squash ratios and stage durations are own working numbers.
