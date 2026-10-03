---
id: "rubber-hose"
name: "Rubber-hose animation (1920s-30s American cartoon)"
space: "2d"
family: "traditional"
references: ["Fleischer Studios (Betty Boop, Popeye, Koko)", "Bill Nolan's Felix the Cat", "Early Disney (Oswald, Mickey)", "Cuphead (2017) as a modern recreation"]
timing: {"frame_rate":"24 fps film; characters mostly on twos (12 drawings/s) with ones for the fastest takes (derived, not stated in fetched sources); Cuphead animation runs at 24 fps inside a 60 fps game","holds_ms":[160,500],"durations_ms":[250,500,1000],"bounce_period_ms":"60000/BPM; 500 at 120 BPM"}
eases: {"key":"stepped drawings with squash-and-stretch spacing","notes":"No joints, no stiffness: everything moves on curves with overlap. Beat-locked bounce on the music grid. Timing is drawn, so apply it as stepped spacing (see cel-on-twos), with sine.inOut shapes for the limb sway sampled at the held time."}
camera: {"lens_mm":[],"moves":["locked","occasional 3-4 frame shake on a hit","pan on ones"],"rules":["Flat staging, side or three-quarter view, stage-like","Background is painted and static; characters carry all the motion","Do not use real perspective"]}
recipe_2d: "GSAP: one paused timeline, a plain-object clock tween whose onUpdate samples held time q = Math.floor(Math.round(t*30)/2)*2/30. Each limb is one SVG path with stroke-width 26-34 px, stroke-linecap round and no elbow or knee: a quadratic Bezier from joint to hand whose control point is offset perpendicular to the chord by bend = len*0.22*sin(2*pi*(q*beatHz + phase)). The whole body bounces on the beat: y = -|sin(pi*q*beatHz)|*22 px, squash area-preserved scaleX = 1+a, scaleY = 1/(1+a), a = +0.10 on contact, -0.08 at apex, transform-origin 50% 100%. Tail, ears, hat brim and gloves lag the body by 2-4 drawings (67-133 ms). Seeded mulberry32(seed+drawingIndex) re-rolls 0.6-1.2 px line boil per drawing. Grade: sepia 0.25, contrast 1.1, grain 6-10 percent re-rolled per drawing, 1-2 px gate weave."
recipe_3d: "n/a: the style is drawn silhouette and continuous outline with no volume; the limbs have no bones to rig. If a scene needs depth, build the character in 2D and put it on a Rasan3D plane with k.pxPlane (texture from the rendered frame), or move the 2D layers in CSS 3D; a toon pass on a 3D model reads as modern cel-shading, not rubber hose."
pitfalls: ["Elbows and knees drawn as hinges: the defining feature is limbs as unarticulated curves", "Bounce without squash and stretch, or with bounce.out as the ease (flat, no deformation)", "Movement not locked to the music: in the source era motion is synchronised with the score", "Clean vector fills with no paper grain, no ink wobble, no off-white: reads as a flat-design icon, not a 1930s print", "Smooth 60 fps motion: the look needs drawn steps", "Modern flat pastel palette instead of a limited ink-and-paper palette", "Realistic anatomy, shading or gradients on the character (the style was dropped when realism arrived)"]
instruct: {"all":"Give the BPM and the beat frame list; every bounce lands on a beat; limbs are single curved strokes with no joint; squash and stretch preserves area; secondary parts lag 2-4 drawings. Ask for a table: beat index, frame, body y, scaleX, limb bend for the first 8 beats.","claude":"Claude will draw limbs as two-segment arms with a visible elbow because that is the default stick figure, and will ease the bounce smoothly. Say 'one path per limb, no joint, a control point offset gives the bend' and give the formula. It handles per-limb phase offsets well when told to list them.","gpt":"GPT models tend to reach for CSS keyframes and the bounce.out ease and to make the character a set of rotating rectangles. Forbid CSS animation and bounce.out; require stroked quadratic paths with a computed control point and a seeded wobble, all on the GSAP clock. Ask it to show the path-building function before using it."}
sources: ["https://en.wikipedia.org/wiki/Rubber_hose_animation", "https://en.wikipedia.org/wiki/Fleischer_Studios", "https://en.wikipedia.org/wiki/Cuphead", "https://en.wikipedia.org/wiki/Squash_and_stretch"]
---

## What it is

Rubber-hose is the dominant American cartoon drawing style of the 1920s and early 1930s: arms and legs "drawn as flowing curves, without articulation" (Wikipedia), so they bend like a garden hose and can stretch or tie in knots. Bill Nolan is credited with introducing it while animating Felix the Cat, with rounder shapes and flexible limbs that were faster to produce. It peaked in the early sound era, when movement was synchronised to the musical score, and Fleischer Studios kept it longest before the realism of Technicolor and Snow White (1937) pushed it out by about 1940. Cuphead (2017) is the modern reference for how it is built today: hand-drawn animation, watercolour backgrounds and a 24 fps look inside a 60 fps game, with deliberate imperfections.

## The defining traits (numbers)

| Trait | Value | Source / status |
|---|---|---|
| Limb construction | continuous curve, no elbow or knee, uniform thick stroke | rubber-hose wiki |
| Era | 1920s to about 1940; peak early sound years | rubber-hose wiki |
| Studio character | "loose, improvisatory", surreal, urban, the "New York Style" (Fleischer) | Fleischer wiki |
| Music | motion synchronised with the score; bouncing-ball sing-alongs are the Fleischer extreme | rubber-hose + Fleischer wiki |
| Film frame rate | 24 fps; Cuphead animation 24 fps, gameplay 60 | Cuphead wiki |
| Squash and stretch | volume (area in 2D) preserved while exaggerated | squash-and-stretch wiki |
| Stroke weight | 26-34 px at 1080p for a hero about 600 px tall (about 5% of height) | own working range |
| Bounce period | 60000/BPM ms; at 120 BPM 500 ms = 6 drawings on twos | derived |
| Squash amounts | +0.10 on contact, -0.08 at apex | own working range |
| Secondary lag | 2-4 drawings (67-133 ms at 30 fps on twos) | own working range |
| Gate weave, grain | 1-2 px; 6-10% | own range, consistent with vocabulary.md faded-vintage grade (grain 8-12%, vignette 25-30%) |

Everything that is not a face or a hand is a curve. The character stays a loop of readable shapes (head circle, body bean, tube limbs, gloved hands) so that any single drawing is a clean silhouette. The persistent gestures are: everything dances in time (heads, shoulders, knees, even buildings), and objects are alive with eyes and limbs. Design numbers beyond limbs (white gloves, pie-cut eyes) are commonly cited for the style but do not appear in the fetched pages: unverified.

## How to build it

### 2D (HyperFrames, 1920x1080, 30 fps)

```js
const FPS = 30, BPM = 120, beatHz = BPM / 60;           // 2 beats per second: a bounce every 500 ms
const q = t => Math.floor(Math.round(t * FPS) / 2) * 2 / FPS;        // on twos
const mulberry32 = a => () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a);
  t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };

function hose(p0, p1, bend, w) {                          // a limb: one stroked quadratic, no joint
  const mx = (p0[0] + p1[0]) / 2, my = (p0[1] + p1[1]) / 2, dx = p1[0] - p0[0], dy = p1[1] - p0[1];
  const len = Math.hypot(dx, dy), nx = -dy / len, ny = dx / len;
  return `M${p0[0]},${p0[1]} Q${mx + nx * bend},${my + ny * bend} ${p1[0]},${p1[1]}`;
}
tl.to(clock, { t: DUR, duration: DUR, ease: "none", onUpdate() {
  const s = q(clock.t), ph = s * beatHz, r = mulberry32(7000 + Math.round(s * FPS));
  const hop = Math.abs(Math.sin(Math.PI * ph));            // 0 on the beat (contact), 1 at the apex
  const a = hop < 0.15 ? 0.10 : -0.08 * hop;               // squash on contact, stretch at the top
  gsap.set("#body", { y: -22 * hop, scaleX: 1 + a, scaleY: 1 / (1 + a), transformOrigin: "50% 100%" });
  armL.setAttribute("d", hose([620, 520], [440 + 40 * Math.sin(2 * Math.PI * ph + 1), 640 - 60 * hop], 52 * Math.sin(2 * Math.PI * ph), 30));
  gsap.set("#glove-l", { x: (r() - .5) * 1.2, y: (r() - .5) * 1.2 });      // line boil, per drawing
} }, 0);
```

Build notes:
- Limb sway uses sine phases offset per limb (0, 0.25, 0.5, 0.75 of a beat) so nothing moves in unison; hat, tail and ears use the same sine delayed by 2-4 drawings: evaluate the phase at `q(clock.t - 0.1) * beatHz` (0.067-0.133 s of lag at 30 fps on twos).
- A knot or stretch gag: lengthen the chord by 1.6x over 4 drawings (133 ms), hold 6 drawings, return over 3 drawings with a 6% overshoot (cartoon exception to the craft.md overshoot rule: declare it in the decisions drawer).
- Backgrounds are static painted plates; add a 1-2 px weave on the whole frame per drawing (`x`,`y` ±1.5) and a 256 px grain tile re-offset per drawing at 8% multiply.
- Palette: ink black #14110f, paper #efe6d2, one or two spot colours; no gradients on the character.
- Choose BPM from the film's music analysis (`hyperframes beats`), not from taste. If the track is 100 BPM the bounce period is 600 ms = 7.2 drawings on twos at 24 fps; either retime the character to the nearest whole drawing or accept a half-drawing drift once per 4 bars.

### Choreography table (write this before code)

| Beat | Frame (30 fps, 120 BPM) | Body y (px) | scaleX / scaleY | Limb bend (px) | Note |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 1.10 / 0.91 | 0 | contact, squashed |
| 0.25 | 4 | -16 | 1.00 / 1.00 | +36 | rising |
| 0.5 | 8 (held 7-8 on twos) | -22 | 0.92 / 1.09 | +52 | apex, stretched |
| 0.75 | 12 | -16 | 1.00 / 1.00 | +36 | falling |
| 1 | 15 | 0 | 1.10 / 0.91 | 0 | contact on the beat |

At 120 BPM a beat is 15 frames at 30 fps (500 ms); on twos that is 7.5 drawings, so the contact lands on a drawing boundary every other beat. Either set the comp to 24 fps (12 frames per beat, exactly 6 drawings) or let the contact frame drift by one frame on alternate beats and accept it. Values in the table are own working numbers.

### 3D

Not applicable (see recipe_3d). The only honest 3D use is the character as a flat plane in a 3D room: lay the rendered 2D clip on `k.pxPlane`, light it with `rig: "window"`, and let the camera dolly 5-10% with `sine.inOut` so the world is real and the character stays a drawing; keep that scene on ones for the camera.

## What makes a cheap imitation

- Two-segment arms with elbows and a visible joint: the style is exactly the absence of that.
- bounce.out or elastic.out for the hop: those eases are the generic "playful" default and carry no squash, no stretch and no beat lock.
- Smooth 60 fps motion and perfectly clean vectors with a flat pastel palette: reads as a flat-design mascot.
- A fake "vintage filter" applied to a modern layout: sepia and grain without drawn steps, a limited palette or ink wobble.
- Motion detached from the music: the bounce has to sit on the grid or the whole style collapses into random wiggle.
- Rubber on everything including text: the film's type should stay legible; animate the character, not the body copy.

## Sources

- https://en.wikipedia.org/wiki/Rubber_hose_animation (fetched) - definition, Bill Nolan, era, no hinged joints, music synchronisation, decline.
- https://en.wikipedia.org/wiki/Fleischer_Studios (fetched) - loose improvisatory New York Style, bouncing-ball sing-alongs, Betty Boop, Popeye, 1929-1942.
- https://en.wikipedia.org/wiki/Cuphead (fetched) - modern recreation, hand-drawn at 24 fps, watercolour backgrounds, deliberate imperfection.
- https://en.wikipedia.org/wiki/Squash_and_stretch (fetched) - volume preserved while deforming; Disney exaggeration in the 1930s.
- Unverified: white gloves, pie-cut eyes and the 'objects come alive' trope as defining traits; stroke widths, squash values and lag counts are own working ranges.
