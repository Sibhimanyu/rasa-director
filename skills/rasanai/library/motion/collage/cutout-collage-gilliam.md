---
id: "cutout-collage-gilliam"
name: "Cut-out collage animation (Terry Gilliam, Monty Python)"
space: "both"
family: "collage"
references: ["Terry Gilliam, Monty Python's Flying Circus (1969-1974)", "Karel Zeman, Baron Prasil (multi-plane cut-outs, cited by Gilliam)", "South Park pilot (1997) and its digital descendant", "Lotte Reiniger (silhouette cut-outs, backlit)"]
timing: {"frame_rate":"stop-motion cut-outs moved 'a few millimetres' per frame; shot on ones or twos (12-24 images/s, unverified for Gilliam's rate)","holds_ms":[83,500],"durations_ms":[83,167,333,1000,2000],"one_frame_ms":{"24fps":42,"30fps":33}}
eases: {"key":"none; incremental nudges, mechanical or deliberately jerky","notes":"Joints are pivots, so limbs rotate about a point; pops and slides are small repeated steps. Jerky motion is part of the humour (South Park keeps it digitally)."}
camera: {"lens_mm":[85,135],"moves":["locked rostrum top-down","slow pan or zoom over a collage","multi-plane parallax over layers"],"rules":["Flat table photography: light from above (cut-out wiki: Gilliam lit from above, Reiniger from below)","Edges of pieces darkened so they separate from the background","Glass or perspex sheet holds the pieces flat"]}
recipe_2d: "HyperFrames at 30 fps. Every figure is cut into pieces (head, jaw, torso, upper arm, forearm, hand, thigh, shin, foot) as separate elements with transform-origin at the joint in px. Motion: tl.set at integer frame times from a table, held 2 frames (on twos: Math.floor(Math.round(t*30)/2)*2/30), angles in 4-6 deg steps (a few millimetres per step), positions in 6-14 px steps. Jaw: a separate piece rotating 0 / 8 / 14 deg on syllables. Edge: filter drop-shadow(1px 0 0 #1a1612) drop-shadow(-1px 0 0 #1a1612) drop-shadow(0 1px 0 #1a1612) drop-shadow(0 -1px 0 #1a1612) for the darkened edge, plus a cast shadow drop-shadow(2px 3px 2px rgba(0,0,0,.35)). Source images: engraving/photo cut-outs treated grayscale(1) sepia(.35) contrast(1.15). Paper: 256 px grain tile at 6 percent multiply; per drawing seeded jitter of the whole collage +-1 px (mulberry32(seed+drawing)). Backgrounds: a collage plate panned in 6-14 px steps on twos."
recipe_3d: "Rasan3D: figure = Object3D hierarchy with pivots at joints; each piece a thin plane or 2 mm extrusion with k.image textures (alpha cut-out PNG) and k.material('paper'); z spacing 0.004 m between pieces so they stack; pose(t,k){ const s=Math.floor(Math.round(t*30)/2)*2/30; set each pivot's rotation.z from a table sampled at s in 5 deg steps }. Camera: top-down or near-front rostrum, lens 85-135 mm at 2-4 m, locked or pos key sine.inOut over 4-6 s; rig 'top-soft' with dir [0.1,1,0.2] (light from above), shadowSoftness 1-2 (hard small shadows on the backplate); ground = the collage backplate plane; fstop off; motionBlur false."
pitfalls: ["Smooth rotation and eased paths: the charm is that pieces jump a few millimetres per frame", "Clean vector shapes instead of cut photographs and engravings with visible edge texture", "No joint logic: whole bodies sliding as one rigid image; the figure must be cut at neck, shoulder, elbow, wrist, groin, knee, ankle", "A mouth that is just a scale change; it must be a separate lower jaw piece that opens and closes", "No darkened edge or tiny cast shadow so pieces float on the background", "Modern flat colour: the originals are monochrome Victorian engraving and antique photographs mixed with soft-gradient hand-painted shapes", "Polished drop shadows (blur 20+ px): the shadow is a paper-thickness 1-3 px", "Everything moves at once; a cut-out gag has one moving piece and a clear silhouette"]
instruct: {"all":"List the pieces for each figure and where each pivot is in px; state step sizes ('rotate in 5 degree steps, move 8 px per frame, hold 2 frames'); keep every move a tl.set, no tweens; define the edge and cast-shadow filters verbatim.","claude":"Claude will build a smooth parallax collage with eased rotations and soft shadows ('digital paper'). Say 'it is stop-motion: each piece jumps a few millimetres per frame, held 2 frames, no ease'. It handles a joint table (piece, parent, pivot px, step size) accurately; ask for that table first.","gpt":"GPT models tend to use CSS transitions or GSAP rotation tweens with an ease and to use SVG vector art. Forbid easing and CSS transitions; require raster cut-outs with alpha and tl.set at frame times, and provide the drop-shadow chain as a literal string."}
sources: ["https://en.wikipedia.org/wiki/Cutout_animation", "https://en.wikipedia.org/wiki/Terry_Gilliam", "https://blog.animationstudies.org/?p=4032", "http://kinographics.blogspot.com/2011/10/terry-gilliam.html", "https://www.pixartprinting.co.uk/blog/terry-gilliams-unusual-animated-collages/", "https://geekmom.com/2018/05/make-entirely-too-silly-terry-gilliam-style-diy-cutouts/", "https://en.wikipedia.org/wiki/South_Park"]
---

## What it is

Cut-out animation is stop-motion with flat characters and props cut from paper, card, fabric or photographs. Wikipedia's Cutout animation page notes the joints are mechanical (rivets, pins or, digitally, anchors), that Lotte Reiniger used it backlit in The Adventures of Prince Achmed (1926, the earliest surviving animated feature), and that Terry Gilliam used a collage and photomontage style for Monty Python's Flying Circus (1969), with light from above rather than below. Gilliam mixed his own art ("soft gradients and odd, bulbous shapes") with backgrounds and moving cut-outs from antique photographs, mostly Victorian, to link the sketches. The result is a monochrome, engraved, absurd world of figures jointed like marionettes that jerk, pop and slide.

## The defining traits (numbers)

| Trait | Value | Source / status |
|---|---|---|
| Technique | pieces repositioned a few millimetres and photographed each time | Pixartprinting, via cutout wiki |
| Joints | cut at neck, shoulder, groin, knee and elbow, ankle and wrist | GeekMom guide |
| Mouth | the lower jaw is a separate piece (cut along the mouth and down both sides of the chin), moved up and down | Pixartprinting, GeekMom |
| Edges | darken the edges of each piece so it separates from the background | Pixartprinting |
| Positioning | a sheet of glass or perspex holds the pieces flat | Pixartprinting |
| Light | from above (Gilliam), from below for Reiniger's silhouettes | cutout wiki |
| Source material | magazines, newspapers, illustrations, photographs, postcards; Victorian-era photographs and engravings | Pixartprinting, Terry Gilliam wiki |
| Multi-plane | Gilliam cites Zeman's Baron Prasil: cut-outs built into multi-plane shots; later 'two-dimensional things in a 3D space' (Doctor Parnassus) | Animation Studies |
| Digital descendant | South Park pilot: construction-paper cut-outs, 3 months for one episode; then CorelDRAW/PowerAnimator, later Maya, with deliberately simplified shapes and jerky movement | South Park wiki |
| Rate | 'a few millimetres' per frame; rate not stated | unverified: on twos is own recommendation |
| Step sizes | 4-6 deg rotation, 6-14 px translation per drawing at 1080p | own working range |
| Shadow | 1-3 px offset, 35% black, blur 2 px | own working range (paper thickness) |

Gilliam: "The technique itself doesn't really matter. Whatever works is the thing to use. That's why I use cutout. It's the easiest form of animation I know." (GeekMom guide, quoting him.)

## How to build it

### 2D (HyperFrames, 1920x1080, 30 fps)

```js
const FPS = 30, f = n => n / FPS;
// piece table: id, parent, pivot (px in the piece's own box)
//   torso(root) | head (neck 80,200) | jaw (chin hinge 60,120, child of head) | armL (shoulder 40,30) | forearmL (elbow 30,150, child of armL) | legL | shinL ...
// motion table: one row per drawing; every move is a tl.set at an integer frame, held 2 frames
const M = [
  // frame, piece, props
  [0,  "#armL",     { rotation: 0 }],
  [2,  "#armL",     { rotation: 5 }],      // 5 degree steps
  [4,  "#armL",     { rotation: 10 }],
  [6,  "#armL",     { rotation: 15 }],
  [0,  "#jaw",      { rotation: 0 }],
  [8,  "#jaw",      { rotation: 12 }],     // jaw opens on the syllable
  [10, "#jaw",      { rotation: 0 }],
  [12, "#giantFoot",{ y: -900 }],          // a gag drops in with 2 big steps, not an ease
  [14, "#giantFoot",{ y: -420 }],
  [16, "#giantFoot",{ y: 0 }],
];
M.forEach(([fr, el, p]) => tl.set(el, p, f(fr)));
// whole-collage registration jitter, per drawing (paper handled between exposures)
const mulberry32 = a => () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a);
  t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
for (let d = 0; d < DUR * 15; d++) { const r = mulberry32(77 + d); tl.set("#collage", { x: (r() - .5) * 2, y: (r() - .5) * 2 }, f(d * 2)); }
```

```css
.piece { filter: drop-shadow(1px 0 0 #1a1612) drop-shadow(-1px 0 0 #1a1612) drop-shadow(0 1px 0 #1a1612) drop-shadow(0 -1px 0 #1a1612)
                  drop-shadow(2px 3px 2px rgba(0,0,0,.35)); }       /* darkened edge, then a paper-thin cast shadow */
.engraved { filter: grayscale(1) sepia(.35) contrast(1.15); }       /* Victorian source treatment on the photo layers */
#collage::after { content:""; position:absolute; inset:0; background:url(assets/paper-256.png); mix-blend-mode:multiply; opacity:.06; }
```

- Assets: use raster cut-outs with alpha (from the engraving, photograph or an image the brief provides), cut at the joints listed above; never trace a redrawn vector. Keep each piece's source texture so the cut edge is visible.
- Layering: pieces stack in z-order exactly as a paper pile would; no true perspective. Moves hold 2 frames (on twos); hero actions (a head pop, a smash) use 2-3 big steps.
- Camera: a rostrum pan or push over the whole collage in steps (6-14 px on twos), or a smooth `power1.inOut` for the field if the plate is meant to be a moving background; do not mix both on the same layer.
- A sketch transition: the collage background slides out in 3-4 steps with the figure staying on its layer.
- If a Gilliam-like film also contains modern UI, keep the UI smooth and flat on its own layer and let only the collage layer step.

### 3D (Rasan3D)

```js
Rasan3D.stage({ id: "gilliam", canvas, timeline: tl, duration: 6, fps: 30, motionBlur: false, environment: "soft",
  camera: { pos: [[0, [0, 0, 3.2]], [5, [0.1, 0.05, 2.8], "sine.inOut"]], target: [[0, [0, 0, 0]]], lens: [[0, 100]] },
  async build(k) {
    const mat = (url) => k.material("paper", { map: k.image(url), transparent: true, alphaTest: 0.5 });
    const torso = new k.THREE.Mesh(new k.THREE.PlaneGeometry(0.5, 0.8), mat("assets/torso.png"));
    const armPivot = new k.THREE.Group(); armPivot.position.set(0.18, 0.3, 0.004); torso.add(armPivot);       // pivot at the shoulder
    const arm = new k.THREE.Mesh(new k.THREE.PlaneGeometry(0.12, 0.4), mat("assets/arm.png")); arm.position.y = -0.2; armPivot.add(arm);
    k.rig("top-soft", { dir: [0.1, 1, 0.2], intensity: 1.0, shadows: true, shadowSoftness: 1.5 });         // light from above, small hard shadows
    k.ground({ y: -0.0, color: "#cbbf9f", shadowOpacity: 0.5 });                                           // the backplate collage
    return { torso, armPivot };
  },
  pose(t, k) {
    const s = Math.floor(Math.round(t * 30) / 2) * 2 / 30;                     // on twos
    const deg = 5 * Math.round(60 / 5 * k.prog(s, 0.5, 1.4, "none"));              // raise the arm 0 to 60 deg in 5 degree steps
    k.objects.armPivot.rotation.z = -deg * Math.PI / 180;
  } });
```

The rostrum look is a long lens (85-135 mm) at 2-4 m looking square at the backplate; light from above with a short hard shadow; z spacing 0.002-0.006 m between pieces so shadows read as paper thickness. Parallax over layers is the multi-plane variant: see paper-cutout-parallax-2-5d.

## What makes a cheap imitation

- Smooth, eased, motion-blurred 'paper' with big blurry drop shadows.
- Vector flat-colour shapes instead of cut photographs and engravings.
- A mouth made from a scaleY on a single head.
- Characters that translate rigidly and rotate as a single plane with no joints.
- No darkened edges or contact shadows, so pieces float.
- Everything is sepia: the originals combine monochrome engraving material with bright hand-painted shapes and soft gradients.
- Perfect alignment between frames: the table was handled between exposures.

## Sources

- https://en.wikipedia.org/wiki/Cutout_animation (fetched) - materials, joints, Reiniger, Gilliam from above, South Park, history.
- https://en.wikipedia.org/wiki/Terry_Gilliam (fetched) - Victorian photographs, soft gradients and bulbous shapes, linking sketches.
- https://blog.animationstudies.org/?p=4032 (fetched) - Zeman's multi-plane cut-outs as Gilliam's model; Doctor Parnassus.
- http://kinographics.blogspot.com/2011/10/terry-gilliam.html (fetched) - photographing each repositioned stage, Victorian backgrounds.
- https://www.pixartprinting.co.uk/blog/terry-gilliams-unusual-animated-collages/ (fetched) - separate lower jaw, dark edges, glass sheet, a few millimetres per frame.
- https://geekmom.com/2018/05/make-entirely-too-silly-terry-gilliam-style-diy-cutouts/ (fetched) - joint cutting list, mouth mechanism, the 'easiest form of animation' quote.
- https://en.wikipedia.org/wiki/South_Park (fetched) - construction-paper pilot, digital continuation, jerky movement.
- Unverified: exact frame rate used by Gilliam; px, deg and shadow values are own.
