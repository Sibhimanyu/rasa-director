---
id: "limited-animation-upa-hanna-barbera"
name: "Limited animation (UPA stylisation, Hanna-Barbera economy)"
space: "both"
family: "traditional"
references: ["UPA (Gerald McBoing-Boing 1950, Mr. Magoo)", "Hanna-Barbera (Ruff and Reddy, Huckleberry Hound, Yogi Bear)", "The Dover Boys at Pimento University (1942)", "Peanuts TV specials (Bill Melendez)", "Jay Ward Productions"]
timing: {"frame_rate":"12 or 8 distinct drawings per second (each drawing exposed 2 or 3 frames on 24 fps)","holds_ms":[400,1500],"durations_ms":[125,250,500,1000],"mouth_change_ms":[125,167],"one_drawing_ms":{"24fps_twos":83,"24fps_threes":125,"30fps_3_frame_hold":100}}
eases: {"key":"stepped; pose-to-pose with held extremes","notes":"Poses must be funny or clear on their own because few drawings carry the gag. In-betweens are skipped, replaced by smear, speed lines or a cut. Moving holds use ease 'none' over 400-1500 ms."}
camera: {"lens_mm":[],"moves":["pan across a long painted background","background cycle behind a running character","hard cut or zip off screen with 2 smear frames"],"rules":["Flat staging, graphic backgrounds","Camera does the movement the character does not","Dialogue animated as head or mouth cel only"]}
recipe_2d: "GSAP: split the character into layers (body, head, mouth, optional eyes) and animate each at a different cadence on one paused timeline. Body = tl.set poses at integer frame times (held 12-45 frames). Head = separate element changing pose every 3 frames (100 ms at 30 fps) only when it acts. Mouth = 3-4 shapes swapped with tl.set at 3-frame minimum spacing (100-167 ms). Moving hold = tl.to(el,{x:'+=3',scale:1.012,ease:'none',duration:1.0}) on a body that is otherwise still. Background cycle: two identical 1920 px tiles, x steps by 160 px every 3 frames, wrapped with gsap.utils.wrap. Exit: 2 smear frames (scaleX 1.7, opacity 0.7, 3 trailing copies) then off. Palette flat, no gradients, shadow as a single flat shape. Seeded mulberry32 only for dust or speed-line placement."
recipe_3d: "Rasan3D: build the world as flat cards (k.pxPlane or k.panel with k.image textures, unlit) at real z offsets 0.1-1.2 m; pose(t,k) quantises t to 3-frame holds with const s = Math.floor(Math.round(t*30)/3)*3/30 and sets positions from poses at s, never in-betweens; head card and mouth card swap textures by index at the same hold. Camera: pos keys eased power2.inOut for the pan across a long background plane, lens 50 mm, no depth of field, motionBlur false. Flat colour via k.material('unlit'); shadow as a catcher with shadowOpacity 0.25 and hard edges (shadowSoftness 0-2)."
pitfalls: ["Treating it as 'low quality': UPA made reduction a graphic design choice with strong poses, not a budget apology", "Animating every part on every drawing: the economy is that most of the frame is still", "Interpolating between poses: the look is held extremes and a cut or smear, not smooth tweening", "Keeping all parts on the same 2-frame cadence instead of head and mouth cels at 3 frames while the body holds", "Gradients, soft shadows and realistic texture on characters and backgrounds", "No sound design: the style is paid for by writing, voice and effects (the fetched essay says quality is compensated by writing, gags and sound)", "Background cycle that visibly repeats a distinctive object every few seconds (the classic tell used badly)", "Mouth flapping at 24 per second instead of a deliberate 8 per second"]
instruct: {"all":"Say which parts move and which do not: 'the body holds a pose for 12-45 frames; only the head cel changes every 3 frames; the mouth swaps among 4 shapes with at least 3 frames between swaps'. Provide the pose list as extremes, and forbid in-between drawings.","claude":"Claude fills the lull with idle breathing and eased scale loops on every element, which is the opposite of the style. Say 'nothing moves unless listed; moving hold is 3 px over 1 s, ease none, one element only'. Ask it to list the cadence per layer in a table before writing code.","gpt":"GPT models tend to animate all layers with the same stagger and ease, and to use CSS keyframe loops for the background cycle. Forbid CSS keyframes. Provide the cycle as tl.set calls on a wrapped counter, and state mouth and head holds as integers of frames, not seconds."}
sources: ["https://en.wikipedia.org/wiki/Limited_animation", "https://www.illustrationhistory.org/essays/hanna-barbera-the-architects-of-saturday-morning", "https://en.wikipedia.org/wiki/United_Productions_of_America", "https://en.wikipedia.org/wiki/Smear_frame"]
---

## What it is

Limited animation (also called planned animation) reuses drawings and parts of drawings to cut the number of images per second. It started as a graphic choice at UPA in the late 1940s, which rejected Disney realism for "flat, stylized design" and a sparse drawing style (Gerald McBoing-Boing won the 1950 Academy Award; Mr. Magoo won two), and it became an economic system when William Hanna and Joseph Barbera left MGM in 1957 and moved to television. The fetched history gives the economics: television budgets of about $2,700 for an episode against about $45,000 for five minutes at MGM, with frame rates dropped from 24 to "twelve or eight different frames per second" by repeating each image two or three times. The Dover Boys at Pimento University (1942) is cited as the early example of extensive limited techniques including the smear frame.

## The defining traits (numbers)

| Trait | Value | Source / status |
|---|---|---|
| Distinct drawings per second | 12 or 8 | Hanna-Barbera essay |
| Repeat rule | each image held for 2 or 3 frames | same |
| Head cel separated from the body | yes; ties and collars were added so the head cut off with no seam line | Takamoto via essay |
| Other economies | cycled animation, mirror-image drawings, still characters, reused cels in new combinations, moving holds | limited-animation wiki |
| Background | identical background cels cycled and overlaid with new elements | essay |
| Reduced-detail design | even five o'clock shadows added so the face needs less animation | essay |
| UPA look | flat, stylised, sparse, modern-art influences; freedom with perspective and depth | UPA wiki |
| Smear frames | elongated in-betweens, multiples and trails stand in for in-between drawings | smear-frame wiki |
| Held pose | 400-1500 ms of a still or barely moving pose per beat | own working range |
| Mouth change | no faster than every 3 frames (100 ms at 30 fps, 125 ms at 24) | own derivation from the 8 drawings/s fact |
| Compensation | strong writing, funny poses, creative camera and sound effects carry the film | essay |

The consequence for a designer is that a scene is mostly stills with one or two parts doing the work. The poses have to be "extremely accomplished and funny in and of themselves" (Takamoto, quoted in the essay).

## How to build it

### 2D (HyperFrames, 1920x1080, 30 fps)

```js
const FPS = 30, f = n => n / FPS;                          // frame -> seconds
const tl = gsap.timeline({ paused: true }); window.__timelines["scene"] = tl;

// body: three extreme poses, held, no in-betweens
tl.set("#body", { attr: { href: "#pose-a" } }, f(0));
tl.set("#body", { attr: { href: "#pose-take" } }, f(36));  // the take at 1.2 s
tl.set("#body", { attr: { href: "#pose-b" } }, f(44));

// head: its own cel, only acts when the line lands, changes every 3 frames
[[36, "h-wide"], [39, "h-wide2"], [42, "h-normal"]].forEach(([fr, id]) => tl.set("#head", { attr: { href: "#" + id } }, f(fr)));

// mouth: 4 shapes, never closer than 3 frames
const mouth = ["m-closed", "m-A", "m-O", "m-E"];
let fr = 36; [1, 2, 1, 3, 0, 2, 1, 0].forEach((m, i) => { tl.set("#mouth", { attr: { href: "#" + mouth[m] } }, f(fr)); fr += 3 + (i % 3 === 2 ? 3 : 0); });

// moving hold: one element, linear, tiny
tl.to("#body", { x: "+=3", scale: 1.012, duration: 1.0, ease: "none" }, f(0));

// background cycle: 8 positions of 160 px, a step every 3 frames, wrapped (1920 px loop)
const wrap = gsap.utils.wrap(0, 1920);
for (let i = 0; i < 90; i++) tl.set("#bg", { x: -wrap(i * 160) }, f(i * 3));
```

- The camera does what the character does not: a 4-6 s pan across a long painted plate (3-4 screen widths) with `power1.inOut`, character barely moving over it.
- Exit by smear: on the frame before leaving, set scaleX 1.7 with 3 trailing copies at opacity 0.7, 0.45, 0.25 (spacing 120 px), then gone on the next 2 frames. Dover Boys-style multiples are the same trick.
- Add `steps(n)` or 'none' to the film's `motion.md` ease set; `tl.set` and plain-object tweens are classified exempt by `obey.mjs`, but a moving hold on an element is an ordinary tween and needs 'none' listed.
- Palette from the UPA side: 3-5 flat colours per scene, shapes that ignore perspective, a flat second-colour shadow shape; no gradients.

### 3D (Rasan3D)

```js
Rasan3D.stage({ id: "lim", canvas, timeline: tl, duration: 8, fps: 30, motionBlur: false,
  camera: { pos: [[0, [-3, 1.4, 6]], [6, [3, 1.4, 6], "power1.inOut"]], target: [[0, [-3, 1.2, 0]], [6, [3, 1.2, 0], "power1.inOut"]], lens: [[0, 50]] },
  async build(k) { const bg = k.pxPlane(k.layout({ at: 0, distance: 6 }), { x: 0, y: 0, w: 5760, h: 1080, texture: k.image("assets/bg.png") });
                   return { hero: k.panel({ width: 1.2, height: 1.8, depth: 0.01, texture: k.image("assets/hero.png") }) }; },
  pose(t, k) { const s = Math.floor(Math.round(t * 30) / 3) * 3 / 30;     // 3-frame holds
               k.objects.hero.position.y = s < 1.2 ? 0 : 0.35; } });         // held extremes only, no in-between
```

Planes in depth are only useful here for the camera pan; do not make the characters volumetric.

## What makes a cheap imitation

- Everything moves a little, all the time: breathing loops, floating, per-element easing. The style's rule is stillness with one thing moving.
- A smooth eased tween where a held pose and a cut or smear should be.
- Same cadence on every layer; the head and mouth cels exist because they can run at a different rate from the body.
- Gradient fills, glow and soft shadow: the graphic flatness is the UPA half of the style.
- A mouth that flaps with the audio envelope at full frame rate rather than 3-4 shapes on a 3-frame minimum.
- Background loops with one obvious landmark, or a pan without any parallax rule in a style that allowed only a flat plate.

## Sources

- https://en.wikipedia.org/wiki/Limited_animation (fetched) - definition, Dover Boys 1942, Hanna-Barbera 1957, techniques (cycles, mirror, still characters, moving holds), anime lineage, Spider-Verse revival.
- https://www.illustrationhistory.org/essays/hanna-barbera-the-architects-of-saturday-morning (fetched) - $2,700 vs $45,000 budgets, 12 or 8 drawings per second, head cel with tie or collar, background cycles, compensating through writing and sound.
- https://en.wikipedia.org/wiki/United_Productions_of_America (fetched) - flat stylised design, Gerald McBoing-Boing, Mr. Magoo, Bosustow, Hubley, Cannon, influence on Warner, MGM and others.
- https://en.wikipedia.org/wiki/Smear_frame (fetched) - elongated in-betweens, multiples, trails, 1912 origin, standardised in the 1930s-40s.
- Unverified: held-pose and mouth-change ranges are derived from the 8 drawings/s fact; the exact 3-4 flat colours per scene is an own recommendation; a separate Ruff and Reddy budget figure (about $3,000) seen in a search summary was not fetched and is not used.
