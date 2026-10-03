---
id: "saul-bass-cutout-type"
name: "Saul Bass cut-out kinetic type"
space: "both"
family: "kinetic-type"
references: ["Saul Bass, Anatomy of a Murder (1959)", "Saul Bass, The Man with the Golden Arm (1955)", "Saul Bass with John Whitney, North by Northwest (1959)", "Saul Bass, Psycho (1960)"]
timing: {"frame_rate":"pieces move on twos (15 positions/s on a 30 fps film); this is a derived choice, the sources do not state the original frame rate","holds_ms":[400,1500],"durations_ms":{"piece_snap":[133,267],"name_card_hold":[900,1500],"assembly":[1200,2400]},"beat":"cuts and snaps land on the music's accents; Anatomy of a Murder is scored by Duke Ellington"}
eases: {"key":"steps(4) to steps(8) for piece travel; none/linear for slides; power4.out only for a landing that has to stick","notes":"cut paper has no ease. Motion reads as placed, not tweened: few positions, hard stops. Never back.out or elastic."}
camera: {"lens_mm":[200,400],"moves":["locked-off","orthographic flat plane","occasional straight push of 4-6% over the whole sequence"],"rules":["the frame is a table seen from above: no perspective, no parallax","type and shapes share one flat plane","no handheld, no whip"]}
recipe_2d: "GSAP paused timeline. 1920x1080, flat ground (grey #8a8a86 or black #000 as the film dictates). Shapes are SVG polygons (flat fill, zero shadow, zero blur, 90-degree and 45-degree rotations only). Each piece travels 240-520 px in 133-267 ms with ease 'steps(4)' to 'steps(8)', or snaps in one frame; names are bold grotesk set in 2-3 sizes (96, 48, 28 px), cut in on the beat with ease 'none' and 1-frame (33 ms) hold. Assembly: pieces from seeded mulberry32 start positions slide on-axis (x or y only, never diagonal) to a rectilinear layout, 80 ms stagger. Exit by a hard cut or a 1-frame wipe by a shape of the same flat colour. Set data-finish-blur=\"off\" on the scene frame root so the film finish does not average the steps; the scene is then rendered from the centre sub-frame. Use steps(n) eases and hold frames on twos (12 to 15 drawings/s), never power* tweens on the stepped layer."
recipe_3d: "Rasan3D: orthographic feel via lens 200-300 mm, camera.pos straight on +z, no roll. Shapes are k.panel/pxPlane-like planes with k.material('unlit') or 'matte', depth under 0.02 m; names with k.extrudeText depth 0.01-0.02, bevel 0. pose(t,k) places each piece from k.at(t, keys) with stepped eases ('steps(6)' declared via declare.intent['ease-outside-set']). rig 'top-soft' only if shadows are wanted (shadowSoftness 0 for a hard cut-paper shadow offset 0.01 m); otherwise unlit. No bloom, no DoF (fstop off)."
pitfalls: ["tweening paper pieces with power2.inOut: it reads as After Effects, not cut paper", "diagonal travel: Bass pieces move on the grid axes and snap into place", "drop shadows and gradients on the shapes: the flat colour is the style", "using Bass only as 'orange and black retro poster': the sources describe paper cut-outs on a uniform grey ground for Anatomy of a Murder; the orange/black palette belongs to other title and poster work (unverified for exact hex)", "type that fades in: names are cut in", "using it for long copy: it carries names and a headline, not paragraphs"]
instruct: {"all":"Specify every piece as a named polygon with an exact start position, end position, frame count (4 to 8 frames at 30 fps) and stepped ease; state the one concept (a literal visual pun, as in the body cut into pieces for Anatomy of a Murder) before any motion; cut on the music.","claude":"Claude tends to add secondary motion (a settle, a slight overshoot, a stagger with easing) because it treats polish as default. Say 'no easing curves except steps(n) and none, no overshoot, no secondary motion, every piece moves on one axis' and give a negatives line. Give it the concept (the pun) first or it assembles abstract rectangles.","gpt":"GPT models tend to default to smooth power2.inOut tweens, add drop shadows and gradient fills, and write the concept as decoration. Say 'flat fills only, no box-shadow, no gradients, ease must be steps(6) or none', and ask it to list every tween's ease before it writes code. It also drifts to diagonal slides; require x-only or y-only."}
verified: {"sources_fetched":3,"non_wikipedia":2,"colours":"partial","colour_images":["https://commons.wikimedia.org/wiki/Special:FilePath/AnatomyMurder2.jpg?width=400","https://commons.wikimedia.org/wiki/Special:FilePath/The-man-with-the-golden-arm-poster-2.jpg?width=400","https://commons.wikimedia.org/wiki/Special:FilePath/The_Man_with_the_Golden_Arm_poster.jpg?width=400"],"grid":"n/a","timings":"proposed","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://www.artofthetitle.com/title/anatomy-of-a-murder/", "https://en.wikipedia.org/wiki/Saul_Bass", "https://coolhunting.com/design/saul-bass-anatomy-of-a-murder/"]
---

## What it is

Saul Bass turned film credits from a static card into the film's first scene. For Anatomy of a Murder (1959) Art of the Title describes "simple elements like cutouts of paper on a uniform grey background": a body is taken apart into pieces and the cast and crew names sit beside or over the parts (Wikipedia counts seven pieces for the corpse silhouette on the film's poster; the title sequence shows legs, arms and torso per Cool Hunting), a pun on the title. Otto Preminger is introduced over the whole body, then the pieces are disassembled like a puzzle. Duke Ellington scored it. In The Man with the Golden Arm (1955) a paper cut-out arm on black stands for addiction; in North by Northwest (1959) credits race across a grid that becomes the face of a skyscraper (with animator John Whitney); in Psycho (1960) text bars split and slide together and apart. Bass described the aim as "a simple, visual phrase that tells you what the picture is all about" (as quoted on Wikipedia).

The kinetic-type school it founds: one literal idea, a few flat shapes, type that is part of the graphic, motion that is placed rather than tweened.

## The defining traits (numbers)

- Ground: one flat colour. Anatomy of a Murder titles are a uniform grey per Art of the Title; Golden Arm is black. Exact title-sequence hex values: unverified (working values, derived: grey #8c8c88, black #0b0b0b, paper white #f2f0ea). Measured from the posters (not the titles), k-means 6, 2026-10-03: Anatomy of a Murder poster https://commons.wikimedia.org/wiki/Special:FilePath/AnatomyMurder2.jpg?width=400 gave ochre #eba606 34.1%, red-orange #bb3e21 33.7%, off-white #f2f1ed 21.9%; Golden Arm posters gave near-black #221d1f / #2a2626 (25%), deep violet #341f47 / #383452 (20%), off-white #f9f6f1 / #f5f2e4 (28 to 32%), a teal accent #1c799b / #456873 (4 to 7%). So the orange-and-black look belongs to the posters; the grey ground belongs to the Anatomy titles.
- Palette: 2 to 3 colours total. One of them is the ground. No gradients, no shadows.
- Shape language: rectilinear and angular polygons, cut with a blade. Rotations in 45 or 90 degree steps. No curves except where the concept needs them (a hand, a circle).
- Type: hand-cut or heavy grotesque, angular. Two sizes carry the hierarchy (about 9% and 4.5% of frame height: 96 px and 48 px at 1080). Names set to one edge of a shape, not centred in empty space.
- Motion: a piece moves along one axis, in few steps, and stops hard. Derived timing: 4 to 8 frames per move at 30 fps (133 to 267 ms), 0 to 3 frames of anticipation, holds of 400 to 1500 ms for reading names (name holds should be 900 ms minimum for a three-word name; derived from reading speed, not from the sources).
- Sync: moves land on the music's accents. Stop motion on twos is the working assumption for the original frame rate (unverified).
- Camera: a locked top-down plane. North by Northwest is the exception: the grid is the camera move, and type races along it.
- One concept: the sequence says what the film is about with one image system (body parts, an arm, a grid).

## How to build it

### 2D (HyperFrames, GSAP, 1920x1080, 30 fps)

Build the pieces as inline SVG polygons so they stay crisp and the colour is exact. Everything lives on one paused timeline registered at `window.__timelines["<id>"]`. Randomness only from `mulberry32(seed)`.

```js
function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
const rnd = mulberry32(1959), tl = gsap.timeline({ paused: true });
window.__timelines["04-bass-titles"] = tl;
const F = 1/30;                                   // one frame, seconds
const pieces = gsap.utils.toArray(".piece");      // each has data-x, data-y (final) and data-axis="x|y"
pieces.forEach((p, i) => {
  const axis = p.dataset.axis, far = 520 + Math.floor(rnd()*3)*120;   // 520, 640 or 760 px off the final spot
  const dir = rnd() < 0.5 ? -1 : 1;
  const t0 = 0.4 + i * 0.12;                                          // 120 ms stagger, on the beat grid of the cue
  tl.set(p, { [axis]: dir * far, opacity: 1 }, 0)
    .to(p, { [axis]: 0, duration: 6 * F, ease: "steps(6)" }, t0);       // 6 frames = 200 ms
});
// A name card is cut in, never faded:
tl.set(".name-1", { visibility: "visible" }, 2.0).set(".name-1", { visibility: "hidden" }, 3.1);
```

Rules for the build:
1. `ease` is only `steps(n)` (n = 4 to 8) or `none`. Declare both in `motion.md`'s ease set or the 2D obey check will flag them.
2. No `box-shadow`, no `filter`, no `opacity` fades on pieces. Use `visibility` or `set` for cuts.
3. Pieces move on one axis at a time. A piece that must go diagonal moves x first, then y, as two stepped tweens 2 frames apart.
4. Type: `Archivo Black` or `Anton` (both OFL, Google Fonts), tracking -0.01em, set flush to a piece edge. For a hand-cut look, use real hand-cut lettering supplied by the user; do not fake it with a distort filter.
5. Cut to the next scene on the music's strongest accent, with a 1-frame (33 ms) flash of the ground colour as the only transition.

### 3D (Rasan3D)

Use only when the flat plane has to become an object (a flat-to-depth seam). Block the world as a table: camera top-down or straight-on at 200 to 300 mm so perspective is almost gone.

```js
camera: { pos: [[0,[0,0,14]]], target: [[0,[0,0,0]]], lens: [[0,250]] },   // no move; hold is the shot
async build(k){
  const mat = k.material("matte", { color: "#0b0b0b" });
  // one k.panel per piece, depth 0.015, built from the 2D polygon rects through k.layout
  const g = k.layout({ at: 0, distance: 14 });
  /* pieces[i] = k.panel({ width, height, depth: 0.015, radius: 0, bodyColor: "#0b0b0b" }) added to g */
  return { g, pieces };
},
pose(t, k){
  k.objects.pieces.forEach((p, i) => {
    const s = k.prog(t, 0.4 + i*0.12, 0.6 + i*0.12, "steps(6)");
    p.position.x = p.userData.x0 * (1 - s);
  });
}
```
Use `declare: { intent: { "ease-outside-set": "stepped cut-paper movement is the style", "never-rests": "..." } }` only where true. No bloom, no f-stop, motionBlur false (stepped motion with blur reads as smeared).

## What makes a cheap imitation

- Easing: every piece on `power2.inOut`. Cut paper has no inertia.
- A retro orange/black poster filter laid over generic shapes with no pun and no concept. The Bass method is the idea first.
- Drop shadows to fake paper thickness. If thickness is wanted, use a hard 8 px offset shadow of the same flat colour, once, consistently.
- Centred, symmetric layouts. Bass sets type against the edges of the shapes.
- Overly many pieces. Anatomy of a Murder works with seven.
- Smooth camera push or parallax added "for production value".

## Sources

- https://www.artofthetitle.com/title/anatomy-of-a-murder/ — literal pun, crew names beside disassembled body parts as puzzle pieces on a uniform grey ground in paper cutouts, begins with the whole body for Preminger then disassembles, Duke Ellington score, "a graphic designer could think of a simple idea" (fetched 2026-10-03).
- https://en.wikipedia.org/wiki/Saul_Bass — Golden Arm (1955) animated arm; Hitchcock titles (Vertigo, North by Northwest, Psycho); "try to reach for a simple, visual phrase that tells you what the picture is about"; the Anatomy poster's corpse silhouette dissected into seven pieces (fetched 2026-10-03). The fetched text did not mention John Whitney or the Psycho bars; those are carried from the earlier draft.
- https://coolhunting.com/design/saul-bass-anatomy-of-a-murder/ — cut-out animation with actor names over legs, arms and torso; stark black and white mood (fetched 2026-10-03).
- Colour: Commons poster images for Anatomy of a Murder and The Man with the Golden Arm, sampled by k-means.

Derived or unverified in this entry: the 15 positions per second stepping, title hex values, 133 to 267 ms move lengths, the 96/48 px type sizes.
