---
id: "stop-motion-laika-replacement"
name: "Stop-motion with replacement faces (Laika)"
space: "both"
family: "stop-motion"
references: ["Laika: Coraline (2009), ParaNorman (2012), The Boxtrolls (2014), Kubo and the Two Strings (2016), Missing Link (2019)", "George Pal's 'Pal-Doll' replacement animation", "The Nightmare Before Christmas (replacement heads, rig removal limits)"]
timing: {"frame_rate":"24 fps, shot on ones (Coraline); rehearsal passes at 12 fps then final at 24 (ParaNorman)","holds_ms":[167,500],"durations_ms":[83,167,333,667],"output":"5-8 seconds of finished footage per animator per week (ParaNorman)","one_frame_ms":42}
eases: {"key":"none; discrete poses, each frame a physical re-pose","notes":"Camera moves from motion control are smooth eased paths; character motion is hand-posed and slightly irregular. Face changes are swaps of discrete parts, never morphs."}
camera: {"lens_mm":[28,35,50],"moves":["locked-off","slow motion-control push or arc","low camera at puppet eye level"],"rules":["Miniature scale: puppets about 9.5 inches (Coraline), so the camera sits close and depth of field is shallow","One hard motivated key plus practicals, shot with real lights","No motion blur on the character: each frame is a sharp still"]}
recipe_2d: "HyperFrames at 30 fps (or a 24 fps comp). Frame index f24 = Math.floor(t*24 + 1e-6) from the composition time, so holds fall 1,1,1,1,2 on a 30 fps comp. Faces are built from 2 independent part sets: brows (6-12 SVG or PNG variants) and mouths (10-16 visemes), swapped with tl.set at frame times: no cross-fade, no tween. Per frame, a seeded mulberry32(seed + f24) re-poses the whole puppet by +-0.6 px and +-0.25 deg (the physical re-pose), and light exposure flickers +-1.5 percent by the same seed. Seam: a 1 px #000 at 12 percent hairline across the brow line (kept on purpose, since real faces are two pieces). Shallow depth: background plate blur 8-12 px on a pre-blurred layer; key light hard, shadow offset 6-10 px at 35 percent. Textures: 256 px silicone or fabric noise at 6-10 percent overlay."
recipe_3d: "Rasan3D: pose(t,k){ const f=Math.floor(t*24+1e-6); build() makes the face as N pre-built meshes (mouths[]) and M brows[] sharing one head; each frame set exactly one visible: mouths.forEach((m,i)=>m.visible=(i===MOUTH_TRACK[f])). Body joints from a keyframe table sampled with k.prog(f/24, a, b, 'power2.inOut') plus per-frame re-pose jitter from k.rng(1000+f)() (new generator per frame, so seek-safe). Materials: k.material('clay' or 'matte') for silicone/skin with slight roughness 0.55-0.7, 'paper' for cloth; rig 'low-key' or 'three-point' with shadowSoftness 2-4 (hard). Camera: lens 35-50 mm on a miniature (world units in metres, puppet 0.24 m), fstop 2.8-4, focus on the eyes, pos eased power3.inOut over 3-5 s for motion-control moves; motionBlur false; add a post pass: exposure flicker uniform uExp:(t)=>1+0.015*(2*r3hash(Math.floor(t*24))-1)."
pitfalls: ["Cross-fading or morphing between mouth shapes: replacement animation is a hard swap of a discrete piece", "Perfect smoothness: a physical puppet is re-posed every frame, so there is 0.5-1 px of jitter and a hairline seam between face halves", "Motion blur on characters: each frame is a sharp exposure", "Digital-looking lighting: soft ambient fill everywhere; the look is hard practical light with shadows", "Face parts that change every frame: expressions hold for 4-12 frames; mouths change on syllables, not on every frame", "Expression library too small: Laika's counts (Coraline 207,336 combos, Norman 8,800 faces) exist to avoid repeating a mouth shape visibly", "Shooting dialogue on twos but body on ones without reason: Coraline is on ones", "Locked at 12 fps for the whole film: the fetched Laika material uses 12 fps only for rehearsal passes"]
instruct: {"all":"Give the face as two swap tables (brow variant per frame range, mouth viseme per frame range) with integers of frames at 24 fps, say 'no interpolation, no opacity change, visibility toggle only', and describe the re-pose jitter and light flicker as seeded per frame.","claude":"Claude tends to tween the mouth with scaleY and to put a soft vignette and depth blur over everything. Say 'mouth = swap of discrete shapes; the table is the animation'. Provide the 24-frame-per-second index formula and ask it to emit the viseme track as an array of [frame, shape] pairs first. It follows the array format reliably.","gpt":"GPT models tend to use CSS transitions between mouth states, add motion blur, and apply random jitter with Math.random. Forbid all three. Require visibility toggles on frame indices, jitter from mulberry32 seeded by frame index, and no easing on any character part. Ask it to include a check that prints the shape at frames 0-23."}
sources: ["https://3dprint.com/238607/brian-mclean-talks-3d-printed-faces-for-laika-stop-motion-animation/", "https://www.slashfilm.com/521162/laika-3d-color-printers-create-stopmotion-animated-movie-paranorman-50-learned-set/", "https://www.laikahiddenworlds.com/coraline", "https://en.wikipedia.org/wiki/Stop_motion"]
---

## What it is

Replacement animation swaps a piece of the puppet (a head, a mouth, a brow) for a different pre-made piece on each frame instead of bending one piece. The fetched Stop motion page credits George Pal ("Pal-Doll") with the method. Laika made it the studio's signature by 3D-printing the pieces: Coraline (2009) printed replacement faces, ParaNorman (2012) was "the first stop-motion movie to utilize a 3D Color Printer to create replacement faces", and Missing Link (2019) used a Stratasys J750 for over 106,000 faces. The look is a precise, plasticky acting performance on a physical miniature, where expressions are crisp and slightly mechanical at the swap, light is real and hard, and everything has a tiny handmade irregularity.

## The defining traits (numbers)

| Trait | Value | Source / status |
|---|---|---|
| Coraline face combinations | 207,336 for Coraline, 17,633 for the Mother | Laika Hidden Worlds |
| Coraline puppet | 28 puppets, hero about 9.5 inches tall | Laika Hidden Worlds |
| Coraline frame rate | 24 fps on ones | Laika Hidden Worlds |
| Coraline schedule | over 18 months shooting after 2 years pre-production; 130+ sets on 52 stages | Laika Hidden Worlds |
| ParaNorman faces | 31,000+ facial parts, Norman 8,800 faces, about 1.5 million expressions from brow and mouth pieces | SlashFilm |
| ParaNorman productivity | 5-8 seconds of finished footage per animator per week | SlashFilm |
| Rehearsal | rough at 12 fps, director feedback, then final at 24 fps | SlashFilm |
| Rig and seam removal | VFX digitally removes rigs and cleans the seam where two-piece face appliances meet | SlashFilm |
| Printing | about 1 hour per face on ParaNorman's ZPrinter 650; 150 faces in about 18 hours | SlashFilm |
| Missing Link | over 106,000 3D-printed faces; a row of unique faces prints in about 1 h 35 min; faces snap on with coded magnets; heads took 6-12 months to design | 3DPrint |
| Order of work | faces are designed and printed months before body animation, so animators act with pre-set expressions | 3DPrint |
| One frame at 24 fps | 42 ms | derived |
| Holds for an expression | 4-12 frames (167-500 ms) | own working range |
| Re-pose jitter, flicker | 0.5-1 px, +-1.5% exposure per frame | own working values; physical re-pose jitter and flicker are well-known artefacts but not stated in the fetched pages |

The creative consequence of the printing numbers is that the performance is assembled from a library: a viseme track picks a mouth shape for each frame. Real animators choose a shape for a syllable and hold it; rapid flapping is the mark of a mechanical lip-sync.

## How to build it

### 2D (HyperFrames)

```js
const FPS = 24, f24 = t => Math.floor(t * FPS + 1e-6);          // on a 30 fps comp the holds fall 1,1,1,1,2
const mulberry32 = a => () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a);
  t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };

const MOUTH = [[0, "closed"], [6, "O"], [9, "E"], [12, "A"], [15, "closed"], [21, "MBP"], [24, "A"]];   // [frame, viseme]
const BROW  = [[0, "neutral"], [10, "up"], [26, "worry"]];
MOUTH.forEach(([fr, id]) => tl.set("#mouth", { attr: { href: "#m-" + id } }, fr / FPS));    // a swap, never a tween
BROW.forEach(([fr, id]) => tl.set("#brow", { attr: { href: "#b-" + id } }, fr / FPS));

tl.to(clock, { t: DUR, duration: DUR, ease: "none", onUpdate() {
  const f = f24(clock.t), r = mulberry32(5000 + f);
  gsap.set("#puppet", { x: (r() - .5) * 1.2, y: (r() - .5) * 1.2, rotation: (r() - .5) * 0.5 });   // re-pose jitter, per frame
  gsap.set("#stage", { filter: `brightness(${(1 + (r() - .5) * 0.03).toFixed(4)})` });              // +-1.5 percent flicker
} }, 0);
```

- Body moves on ones: a keyframe table of poses every 3-8 frames, eased spacing sampled at the frame time (see cel-on-twos), so the arcs look animated rather than interpolated.
- A face is two parts: put a 1 px seam at the brow line at 10-15% opacity. Laika's VFX removes the seam in the film, so this is an homage detail that you keep only if the look is "visible craft".
- Miniature photography: pre-blur the background plate 8-12 px (static layer, blurred once); one hard key at 35-45 deg with a 6-10 px shadow offset at 35%; practical glows as flat radial gradients at 20-30%.
- Texture: 256 px noise tile (silicone pores, fabric weave) at 6-10% overlay; costume fabrics get a larger weave (20-40 px) with seeded fibre jitter that re-rolls every frame (fabric boil).
- Set `motion.md`: eases 'none' for the swaps, steps-free; a plain-object clock tween is classified exempt by `obey.mjs`.

### 3D (Rasan3D)

```js
const FPS = 24, f24 = t => Math.floor(t * FPS + 1e-6);
Rasan3D.stage({ id: "laika", canvas, timeline: tl, duration: 6, fps: 30, motionBlur: false, environment: "soft",
  camera: { pos: [[0, [0.05, 0.22, 0.9]], [4, [0.12, 0.22, 0.62], "power3.inOut"]], target: [[0, [0, 0.2, 0]]], lens: [[0, 40]], fstop: 3.2, focus: [[0, "target"]] },
  async build(k) {
    const head = new k.THREE.Group(), mouths = MOUTH_SHAPES.map(s => (s.visible = false, head.add(s), s));   // pre-built meshes sharing one head
    k.rig("low-key", { dir: [0.5, 0.8, 0.6], intensity: 1.1, shadows: true, shadowSoftness: 2 });
    return { head, mouths };
  },
  pose(t, k) {
    const f = f24(t), o = k.objects, r = k.rng(1000 + f);              // a fresh seeded generator per frame
    o.mouths.forEach((m, i) => m.visible = (i === MOUTH_TRACK[Math.min(f, MOUTH_TRACK.length - 1)]));
    o.head.position.x = (r() - .5) * 0.0006;                           // 0.6 mm re-pose jitter on a 0.24 m puppet
    o.head.rotation.z = (r() - .5) * 0.0087;                           // 0.5 deg
  } });
```

Units are metres; the puppet is about 0.24 m (9.5 in), so a lens of 35-50 mm at 0.6-0.9 m gives the miniature-scale, shallow depth of field. Use `fstop` 2.8-4. Skip the finish's blur for these scenes (a physical frame is sharp); if the delivery finish is used, pass `--shutter 0.1` or exclude the scene (unverified in a render). Add the flicker as a post-pass uniform `uExp: (t) => 1 + 0.03 * (rngHash(f24(t)) - 0.5)`.

## What makes a cheap imitation

- A mouth cross-fade or a scaleY lip-sync on a 2D face: nothing in the process is a morph.
- Perfectly clean, noiseless frames: no jitter, no flicker, no fabric boil.
- Soft global-illumination glow with bokeh everywhere: the look is a physical set with hard key and practicals.
- Mouth changing on every frame in sync with audio amplitude.
- A face library of 3 mouths: the audience reads the repetition immediately.
- Motion blur on a walk or a head turn; stop-motion is sharp and slightly staccato.
- Everything on twos: Coraline is on ones; the 12 fps source is for rehearsal.

## Sources

- https://3dprint.com/238607/brian-mclean-talks-3d-printed-faces-for-laika-stop-motion-animation/ (fetched) - J750, 106,000 faces, snap-on magnetic faces, face design time, order of work.
- https://www.slashfilm.com/521162/laika-3d-color-printers-create-stopmotion-animated-movie-paranorman-50-learned-set/ (fetched) - ParaNorman face counts, 12 fps rehearsal, 5-8 s/week, rig and seam removal.
- https://www.laikahiddenworlds.com/coraline (fetched) - 207,336 combinations, 28 puppets, 9.5 inch, 24 fps on ones, schedule and sets.
- https://en.wikipedia.org/wiki/Stop_motion (fetched) - replacement animation and Pal-Doll.
- Unverified: jitter and flicker magnitudes, expression hold lengths, the pre-blur and light angles (own); whether Laika flickers lights deliberately (not stated).
