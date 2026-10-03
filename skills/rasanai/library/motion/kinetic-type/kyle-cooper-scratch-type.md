---
id: "kyle-cooper-scratch-type"
name: "Kyle Cooper hand-scratched, found-artifact type"
space: "both"
family: "kinetic-type"
references: ["Kyle Cooper, Se7en main titles (1995, dir. David Fincher)", "Kyle Cooper, Imaginary Forces / Prologue Films title work", "Se7en end crawl (backlit, rolling downward)"]
timing: {"frame_rate":"jumpy cuts on ones to threes: type and imagery change every 1 to 3 frames (33 to 100 ms) in bursts, with 300 to 800 ms holds to let one frame be read (derived, not measured from the film)","holds_ms":[300,800],"durations_ms":{"flicker_burst":[200,500],"credit_hold":[1000,1800],"scratch_pass":[100,200]},"duration_total_s":"main titles about 2 min 30 s in the film (unverified)"}
eases: {"key":"none / steps(1): changes are cuts, not tweens","notes":"all motion is cut, jitter or hand-driven; the one smooth element is slow drift of the whole tabletop camera (sine.inOut, 3 to 5% over 4 s)."}
camera: {"lens_mm":[50,135],"moves":["macro tabletop locked-off","slow drift","hard cuts between inserts"],"rules":["shallow focus on needles, razor blades, handwriting","type is part of the object being photographed, never a clean overlay","everything looks shot on film and re-scratched"]}
recipe_2d: "GSAP paused timeline, 30 fps. Type as per-char spans (SplitText-style, hand-split for determinism). On every integer frame f, tl.set(span,{x,y,rotation,scaleX,opacity}) from mulberry32(seed + f*131 + charIndex): x +-3 to +-8 px, y +-3 to +-6 px, rotation +-1.5 deg, scale 0.98 to 1.02, 8 to 15 percent of chars drop to opacity 0 for 1 frame. Bursts of 6 to 15 frames of jitter, then a 300 to 800 ms hold with jitter reduced to +-1 px. Scratch layer: pre-baked 512 px tile of vertical and diagonal white scratches (not feTurbulence at full frame), blend screen, moved to a seeded offset each frame. Film grain 4 to 6 percent re-seeded per frame, gate weave +-2 px on the whole stage. Hand lettering: user-supplied scan, else 'Rock Salt' or 'Permanent Marker' (OFL) with a rough mask. Cuts, never fades. The jitter is a cut sequence on integer frames: set data-finish-blur=\"off\" on the scene frame root so the film finish does not average the cuts; the scene is then rendered from the centre sub-frame. Use set() on frames and steps(n) eases, never power* tweens on the stepped layer."
recipe_3d: "Rasan3D: a tabletop macro. lens 85-135 mm, fstop 2.0-2.8, rig 'low-key' (one hard key, deep shadow), k.material('matte'/'paper', dark) ground, razor/needle geometry from thin boxes and cylinders (not stock primitives), handwriting as k.text on a plane (not DOM). pose(t,k): frame = Math.floor(t*30); const r = k.rng(1995 + frame); jitter positions +-0.002 to +-0.006 m and plane rotation +-1.5 deg from r() each frame (pure of t). k.pass(name,{at:'post'}) with r3Grain(c, gl_FragCoord.xy, uFrame, 0.05) and a scratch mask from r3Hash on position plus uFrame; r3Chroma amount 0.003. Camera drift keys with 'sine.inOut'; whip cuts via target keys 'expo.inOut' 0.15-0.25 s."
pitfalls: ["clean sans type with a grain overlay: the type has to be damaged, handwritten or physically scratched, not just textured", "random jitter that is different on every render: seed from the integer frame index, never Math.random", "jitter on every frame forever: the sequence works because bursts alternate with readable holds", "a full-frame feTurbulence scratch layer: slow to render and looks like noise, not scratches; use a baked tile", "horror-movie cliches (blood red everything): Se7en's palette is desaturated tabletop photography, desaturated warm and black", "text that cannot be read: each credit gets at least one 300 ms clean frame", "fades between inserts: the style is cutting"]
instruct: {"all":"Describe the artifact first (whose notebook, what tools, what surface), then the cut rhythm in frames: burst length, hold length, jitter amplitude in px or metres. Name the seed rule explicitly (seed = base + frame index).","claude":"Claude over-polishes: it keeps the jitter evenly distributed and adds a clean eased reveal after each burst. Tell it 'bursts then holds, no eased reveals, never a fade', and give the hold lengths. It will also write Math.random for the jitter if the seed rule is not stated.","gpt":"GPT models tend to reach for a CSS glitch (clip-path slices, chromatic offset) and call it scratched. Say 'this is not a digital glitch: no RGB split, no scanline slices; the damage is physical (scratches, smear, grain, dust)', and forbid CSS animations and keyframes explicitly; require tl.set on integer frames."}
verified: {"sources_fetched":4,"non_wikipedia":4,"colours":"proposed","colour_images":[],"grid":"n/a","timings":"proposed","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://www.prologuefilms.com/se7en.html", "https://www.bu.edu/articles/2010/the-film-inside-the-film", "https://thefincheranalyst.com/2025/09/26/30-years-of-kyle-coopers-classic-title-sequence-for-se7en/", "https://www.artofthetitle.com/title/se7en/"]
---

## What it is

The main titles of Se7en (1995) were designed by Kyle Cooper. Prologue's page says the team physically scratched and distressed every frame, and built the end crawl by hand from razor blades, fishing hooks and hair; a Boston University piece says Cooper "hand-scratched the credits with a needle onto film stock for every single frame". The Fincher Analyst quotes Cooper: "People think there's computer graphics in there, but we assembled the majority of the sequence by hand." The sequence introduces the killer through his artifacts: journals, obsessive handwriting, razors, needles, twine, hair, shot as tabletop photography on film. Type is scrawled, smeared and distorted through the camera rather than set.

It is the root of a house style for thrillers and horror: found-artifact title design, where the credits look like something the antagonist made.

## The defining traits (numbers)

- Medium: real film, tabletop photography, handmade type. Digital imitation has to read as physical damage.
- Type: handwritten or scratched into emulsion; thin white strokes on dark, irregular, never aligned to a baseline.
- Rhythm: jittery cutting. Derived working numbers (not measured from the film): bursts of 6 to 15 frames in which something changes every 1 to 3 frames, then a 300 to 800 ms hold.
- Jitter amplitude (derived): position 3 to 8 px at 1080p, rotation up to 1.5 degrees, scale 2%.
- Image content: macro of needles, razor blades, handwriting, hair, with shallow focus; very low-key light, one hard source.
- Palette: near-black ground, bone white strokes, desaturated warm paper, a restrained red only as a pin-point. Hex values: unverified; derived values #0c0b0a, #e9e4d8, #7d6a54, #a3211c.
- End crawl: shot backlit on a light table, names cut and taped into a scroll, rolling downward instead of upward (Fincher's choice, per Prologue). Downward roll is a distinctive, copyable decision.
- Treated as story: the titles are the film's first scene and characterise John Doe before any dialogue.
- Type: Art of the Title quotes Cooper: "Fincher and I decided to use hand-drawn [type] mixed with Helvetica". The text was scratched into scratchboard and manipulated during film transfer, so the scratched lettering sits next to plain Helvetica, which matters for a blend: not all the type is damaged.
- Team and sound (Art of the Title): R/GA made the sequence; notebook props by Clive Piercy and John Sabel; staccato editing by Angus Wall; a Coil (Danny Hide) remix of a Trent Reznor track. Shot-over-two-days and five-weeks-to-cut claims from search results remain unverified.

## How to build it

### 2D (HyperFrames, GSAP, 1920x1080, 30 fps)

Every random value comes from the integer frame index so any seek renders identically.

```js
function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
const FPS = 30, tl = gsap.timeline({ paused: true });
window.__timelines["02-scratch-titles"] = tl;
const chars = gsap.utils.toArray(".title .ch");            // spans, split by hand: <span class="ch">S</span>…
const bursts = [[0.50, 0.95], [1.60, 2.00]];               // [start, end] seconds of jitter; holds between
for (let f = 0; f < 4*FPS; f++) {
  const t = f / FPS;
  const inBurst = bursts.some(([a,b]) => t >= a && t < b);
  const amp = inBurst ? 1 : 0.15;                          // holds keep a faint tremor
  chars.forEach((c, i) => {
    const r = mulberry32(1995 + f*131 + i*7);
    tl.set(c, {
      x: (r()-0.5)*16*amp, y: (r()-0.5)*12*amp, rotation: (r()-0.5)*3*amp,
      scale: 1 + (r()-0.5)*0.04*amp, opacity: inBurst && r() < 0.12 ? 0 : 1
    }, t);
  });
}
// scratch tile and grain are separate layers moved by the same frame loop
for (let f = 0; f < 4*FPS; f++) {
  const r = mulberry32(777 + f);
  tl.set(".scratch", { x: -Math.floor(r()*512), y: -Math.floor(r()*512) }, f / FPS);
  tl.set(".grain",   { x: -Math.floor(r()*256), y: -Math.floor(r()*256) }, f / FPS);
}
```

Checklist:
1. `tl.set` per frame: no tweens between jitter states. The 2D contract check wants every effect on the paused timeline; this does that.
2. Cost: set calls per frame x chars is fine up to about 40 chars x 120 frames; for more, apply jitter per word.
3. Scratch tile: 512 px PNG with 8 to 20 vertical and diagonal hairlines, blend `screen`, opacity 0.5 to 0.8. Grain tile 256 px, opacity 0.04 to 0.06 (matches the 4 to 6% grain in craft rules for film finish).
4. Hand lettering: user scan if provided. Fallbacks (OFL, Google Fonts): `Rock Salt`, `Permanent Marker`, `Special Elite` for typewriter notebook text.
5. Backlit crawl variant: white text on a lit rectangle, scroll `y` from -H to +H over the duration with `ease: "none"` (a constant crawl is the one place `none` is right; downward direction is part of the idea).

### 3D (Rasan3D)

Build the table in metres: needles 0.08 m, a razor 0.04 m, a notebook page 0.2 x 0.15 m.

```js
camera: { pos: [[0,[0.05,0.3,0.35]],[4,[0.02,0.28,0.33],"sine.inOut"]], target:[[0,[0,0,0]]], lens:[[0,100]], fstop: 2.2 },
rig: "low-key",
pose(t, k){
  const f = Math.floor(t*30), r = k.rng(1995 + f);
  k.objects.page.rotation.z = (r()-0.5) * 0.026;             // 1.5 deg
  k.objects.page.position.x = (r()-0.5) * 0.004;
}
// graph(k): k.pass("filmdamage", { at:"post", frag: `
//   #include <r3/post>
//   void main(){ vec3 c = r3Src(vUv).rgb; c = r3Chroma(uSrc, vUv, 0.003);
//   c = r3Grain(c, gl_FragCoord.xy, uFrame, 0.05);
//   float s = step(0.995, r3Hash12(vec2(floor(vUv.x*uRes.x*0.5), uFrame))) * 0.6;   // vertical scratch columns, frame-seeded
//   gl_FragColor = vec4(c + s, 1.0); }` })
```
Handwriting goes on `k.text` planes (never DOM, so it picks up depth of field). Keep motionBlur on for whip cuts only (`shutter: 0.25`); for the jitter bursts set `motionBlur: false` and `data-finish-blur="off"` on the frame root so cuts are not averaged into smears.

## What makes a cheap imitation

- A distress texture over a clean typeface. The source of the look is hand-made type photographed as an object.
- Uniform jitter forever: no rhythm, no readable hold.
- Glitch aesthetics (RGB split, slice displacement) substituted for scratches: those belong to the glitch entry, not this one.
- A fade in, fade out, or any eased reveal.
- Red blood splatter; the original is quiet and cold, not gory.
- Unseeded randomness that makes each render different and fails the determinism gate.

## Sources

- https://www.prologuefilms.com/se7en.html — Cooper designed the titles; hand-processed film and practical effects, every frame scratched and distressed; the sequence introduces John Doe through notebooks, obsessive handwriting, razor blades, needles (fetched 2026-10-03). The downward-rolling backlit crawl and fish hooks and hair are carried from the earlier read of this page; the fetch summary did not repeat them.
- https://www.bu.edu/articles/2010/the-film-inside-the-film — "he famously hand-scratched the credits with a needle onto film stock for every single frame"; the author's description, not a quote from Cooper (fetched 2026-10-03).
- https://thefincheranalyst.com/2025/09/26/30-years-of-kyle-coopers-classic-title-sequence-for-se7en/ — tabletop photography; type "scratched, smeared, and distorted" through the camera, analogue start to finish; fish hooks, razor blades, sewing needles, twine, hair; "people think there's computer graphics in there, but we assembled the majority of the sequence by hand" (fetched 2026-10-03).
- https://www.artofthetitle.com/title/se7en/ — R/GA team; scratchboard type manipulated in film transfer; "hand-drawn [type] mixed with Helvetica"; props by Clive Piercy and John Sabel; Angus Wall editing; Coil remix of Trent Reznor (fetched 2026-10-03).

Derived or unverified: every jitter amplitude, burst length, hex value, and the 2:30 duration.
