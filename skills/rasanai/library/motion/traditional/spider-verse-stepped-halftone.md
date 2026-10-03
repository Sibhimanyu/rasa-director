---
id: "spider-verse-stepped-halftone"
name: "Spider-Verse: stepped CG, halftone dots, print misregistration, ink lines"
space: "both"
family: "traditional"
references: ["Spider-Man: Into the Spider-Verse (2018), Sony Pictures Imageworks", "Vintage four-colour comic printing (Ben-Day dots, offset misregistration)", "Looney Tunes smear frames (1942), cited by the team", "Puss in Boots: The Last Wish, The Bad Guys (descendants)"]
timing: {"frame_rate":"12 images/s (on twos) for most animation, 24 (ones) for fast or skilled motion, some threes for snap; the film is 24 fps","holds_ms":[83,167,250],"durations_ms":[83,167,333,500],"character_cadence":{"Miles (early)":"12 fps, to show inexperience","Peter B. Parker":"24 fps, smoother"}}
eases: {"key":"stepped, with eased spacing sampled at held time","notes":"Held frames are the look: 1, 2 or 3 frames. Motion blur is replaced by smears, streak lines and print-style offsets, not by a shutter."}
camera: {"lens_mm":[24,35,50],"moves":["handheld-feeling pushes","dutch tilts","whip on a held frame"],"rules":["No physical depth of field: out of focus is shown as colour misregistration and halftone, not blur","Panel logic: composition reads as a comic panel when frozen","Camera cut on a held frame, not mid-interpolation (cadence inherited from the character animation; unverified for camera)"]}
recipe_2d: "GSAP, 30 fps comp. Stepping: clock tween onUpdate with q = Math.floor(Math.round(t*30)/2)*2/30 (66.7 ms drawings) and eased spacing sampled at q; fast hero beats HOLD 1 for 4-8 frames. Misregistration: per-drawing, seeded mulberry32(seed+drawingIndex), offset the cyan-like and magenta-like copies of the artwork by dx,dy in +-2..5 px using an SVG filter (feColorMatrix isolating R, G, B; feOffset per channel; feBlend screen) with the attributes set by tl.set at drawing changes. Halftone: a dot screen layer (radial-gradient circle on an 8-10 px cell, rotated 15 deg for the magenta-like screen and 45 deg for the black-like screen, background-size 9px 9px) clipped by a shadow mask via mask-image, dot radius 18/30/44 percent in three tone zones, mix-blend-mode multiply. Ink: 3-5 px rough accent lines (stroked paths) re-drawn per drawing with 1-2 px seeded jitter. Smear: 1-2 frames of 1.6x stretch with 2 trailing copies. Onomatopoeia as a held word (2 frames in, 12 held, 1 out) in a hand-lettered face, 6-12 deg rotation. No blur filter on motion. Set data-finish-blur=\"off\" on the scene frame root so the film finish does not average the steps; the scene is then rendered from the centre sub-frame. Use steps(n) eases and hold frames on twos (12 drawings/s), never power* tweens on the stepped layer."
recipe_3d: "Rasan3D: pose(t,k) with const s = Math.floor(Math.round(t*30)*12/30 + 1e-6)/12 for twos, 24/s on hero beats; motionBlur false; no fstop (no depth of field). graph(k): (1) scene or post pass that draws ink lines from depth/normal discontinuity of uDepth/uSrc with width 2-4 px; (2) post pass with #include <r3/post> that computes tone = r3Luma(src.rgb), three screens via r3HalftoneFW(gl_FragCoord.xy, tone, cellPx 7.0, angle) at angles 0.2618 (15 deg), 1.309 (75 deg), 0.7854 (45 deg) for the CMYK-like mix, darken by multiply with ink #1b1630; (3) misregistration: sample uSrc with per-channel uv offsets of 2-5 px (r3Chroma-style but non-radial, direction from the uniform uMis:(t)=>hashed from the held frame), amount larger where depth is far from the focus plane. Camera lens 24-35 mm, pos keys with power2.inOut or a function of the held frame. Set data-finish-blur=\"off\" on the scene frame root so the film finish does not average the steps; the scene is then rendered from the centre sub-frame. Use steps(n) eases and hold frames on twos (12 drawings/s), never power* tweens on the stepped layer."
pitfalls: ["Halftone applied as a flat overlay texture with constant dot size: in the film dots scale with the light and the shot", "Misregistration on faces and text: the fetched tutorial says it works best on backgrounds and fast-moving elements", "Adding depth of field blur and motion blur on top: the film removes them and replaces them with offset, lines and smears", "Stepping the whole frame including type and UI", "Ben-Day dots at photographic density: cell size so small it looks like a texture, not a printed dot", "Uniform line weight: the lines are authored per shot and change thickness for emotion", "Random jitter per frame instead of per drawing (the offset must hold with the drawing)", "A single hue of halftone for everything, ignoring print screen angles (a mix of 15, 75, 0 and 45 degrees is the press convention, unverified for this film)"]
instruct: {"all":"Specify four systems separately: stepped timing (hold in frames, fast beats on ones), line work (px weight, jitter per drawing), halftone (cell px, angles, where it applies by tone) and misregistration (px offsets, where it applies). State that blur and depth of field are off and replaced by offset and smear.","claude":"Claude tends to produce one 'comic filter' (a dotted overlay with a drop shadow) and keep smooth motion. Split the brief into the four systems, ask for the hold table first, and require the offsets to be seeded per drawing. It handles per-layer instructions precisely if each is numbered.","gpt":"GPT models tend to use CSS keyframes with steps(2) and a static halftone PNG, and to add blur for depth. Forbid blur on motion and focus. Require the clock-proxy stepping, per-drawing seeded offsets and halftone dots that scale with a tone mask. Ask it to show the offset schedule for the first 8 drawings before the full build."}
verified: {"sources_fetched":4,"non_wikipedia":3,"colours":"n/a","colour_images":[],"grid":"n/a","timings":"partial","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Spider-Man:_Into_the_Spider-Verse", "https://www.fxguide.com/fxfeatured/why-spider-verse-has-the-most-inventive-visuals-youll-see-this-year/", "https://www.foundry.com/insights/film-tv/graphic-look-in-comp-spiderman", "https://prolificstudio.co/blog/spiderman-into-the-spiderverse/"]
---

## What it is

Into the Spider-Verse (Sony Pictures Imageworks, 2018) made CG look like a moving comic page by changing four things at once: animation timing (stepped on twos, with ones where the character is skilled), line work (hand-authored ink lines on the CG surface), tone (halftone Ben-Day dots and ink hatching instead of smooth shading) and focus (colour misregistration instead of depth-of-field blur). The fetched Wikipedia page records that the film varied between 24 images per second (ones) and 12 (twos), with held frames of one, two or three, that Miles was animated at 12 fps early on to show inexperience while Peter B. Parker used 24 fps, and that the team used smears instead of motion blur, citing 1942 Looney Tunes. The Limited-animation page credits the film with reviving "choppy" animation and influencing Puss in Boots: The Last Wish and The Bad Guys.

## The defining traits (numbers)

| Trait | Value | Source / status |
|---|---|---|
| Image rate | 12/s on twos, 24/s on ones, threes for snap | Wikipedia, fxguide |
| Cadence as character | Miles 12 fps (inexperienced), Peter 24 fps | Wikipedia |
| Output rate (production) | about 1 second of film per week per animator, against about 4 usual | fxguide |
| Motion blur and depth of field | eliminated; lines and rolling-shutter-style effects and offsets imply motion and distance | fxguide |
| Halftone | Ben-Day dots made mainly in compositing; the Hatcher and Thresher tools were the most used, dialled thick or thin from lighting | Foundry |
| Dots scale with light | lens flares carried halftones that scaled with the light | Foundry |
| Misregistration | a ChromaShifter tool (originally for DOF), also used with motion vectors swapped for depth for trail effects | Foundry |
| Colour offset meaning | misaligned plates read as out of focus | fxguide |
| Line work | accent ink lines, outlining, smearing, brushing, streaking; over 25 tools and about 25 templates | Foundry |
| Line behaviour | thickness, breaks and jitter respond to performance and emotion | Prolific |
| Comic grammar | hatching, Kirby Krackle, motion lines, onomatopoeia on screen | Wikipedia |
| Each shot is hand-dialled | "pretty much the entire movie was done with the artist dialing shots individually using Nuke" | Foundry |
| Crew | about 150+ animators (Wikipedia: 60 to 177) | Wikipedia, search summary |
| Dot cell size, print screen angles, offset px | not given in any fetched page | unverified; the numbers below are own |

Own working numbers at 1920x1080: halftone cell 7-10 px; dot radius as a share of the cell 18% (light), 30% (mid), 44% (dark), in three zones; screens at 15 deg, 75 deg, 0 deg and 45 deg (standard press angles); misregistration 2-5 px, re-rolled per drawing; ink accent lines 3-5 px; smear stretch 1.6x for 1-2 frames.

## How to build it

### 2D (HyperFrames)

```js
const FPS = 30, q = (t, h = 2) => Math.floor(Math.round(t * FPS) / h) * h / FPS;   // h=1 on hero beats
const mulberry32 = a => () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a);
  t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
const easeP = (s, a, b) => gsap.parseEase("power2.inOut")(Math.min(1, Math.max(0, (s - a) / (b - a))));
// SVG filter: three channel copies offset independently, screen-blended back
// <filter id="mis" color-interpolation-filters="sRGB">
//   <feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="R"/>
//   <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="G"/>
//   <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="B"/>
//   <feOffset in="R" id="oR" dx="0" dy="0" result="R2"/><feOffset in="B" id="oB" dx="0" dy="0" result="B2"/>
//   <feBlend in="R2" in2="G" mode="screen" result="RG"/><feBlend in="RG" in2="B2" mode="screen"/></filter>
tl.to(clock, { t: DUR, duration: DUR, ease: "none", onUpdate() {
  const s = q(clock.t), d = Math.round(s * FPS), r = mulberry32(31 + d);
  // pose from eased spacing sampled at the held time (see cel-on-twos)
  gsap.set("#hero", { x: -300 + 900 * easeP(s, 0.4, 1.2), y: 640 - 200 * easeP(s, 0.4, 1.2) });
  oR.setAttribute("dx", ((r() - .5) * 8).toFixed(2)); oR.setAttribute("dy", ((r() - .5) * 5).toFixed(2));   // +-4 px, +-2.5 px, per drawing
  oB.setAttribute("dx", ((r() - .5) * -8).toFixed(2)); oB.setAttribute("dy", ((r() - .5) * 5).toFixed(2));
} }, 0);
```

```css
/* halftone: one dot screen, clipped by a tone mask; two screens at different angles for colour */
.dots   { position:absolute; inset:0; mix-blend-mode:multiply; pointer-events:none;
          background: radial-gradient(circle at 50% 50%, #1b1630 0 var(--r,30%), transparent calc(var(--r,30%) + 1px)) 0 0 / 9px 9px;
          transform: rotate(45deg) scale(1.5);          /* oversized so the rotated screen covers the frame */
          -webkit-mask-image: linear-gradient(115deg, #000 0 35%, transparent 62%); }
.dots.m { --r: 22%; transform: rotate(15deg) scale(1.5); filter: hue-rotate(300deg); }
```

- Bind the shadow mask to the key light: where the lit side fades to shadow, the dots grow; build three zones with `--r` 18%, 30%, 44% rather than one gradient so dots grow in steps like a printed screen.
- Keep text and logos off the stepped, offset layers; put them above in a smooth `ui` layer or give type only a 2-3 px offset.
- Onomatopoeia: a word on screen for 2 frames in (scale 0.7 to 1.1 to 1.0 stepped), 12 frames held, 1 out; 6-12 deg rotation, a flat ink outline and a flat colour.
- Smear before a hard hit: 1 frame at 1.6x stretch along the path with 2 trailing copies at 0.5 and 0.25 opacity, then the landed pose on twos.

### 3D (Rasan3D)

```js
const FPS = 30, twos = t => Math.floor(Math.round(t * FPS) * 12 / FPS + 1e-6) / 12;   // 24/s: Math.round(t*FPS)*24/FPS
Rasan3D.stage({ id: "sv", canvas, timeline: tl, duration: 6, fps: 30, motionBlur: false,
  camera: { pos: [[0, [0, 1.6, 7]], [2.5, [1.2, 1.4, 4.8], "power3.inOut"]], target: [[0, [0, 1.2, 0]]], lens: [[0, 28]] },   // no fstop: depth of field off
  declare: { intent: { "fast-without-blur": "blur is replaced by offsets, lines and smears" } },
  pose(t, k) { const s = twos(t); /* every character joint from k.prog(s, a, b, 'power2.inOut') */ },
  graph(k) {
    k.pass("sv-print", { at: "post", uniforms: { uMis: (t) => { const d = Math.round(t * 30 / 2); return [Math.sin(d * 12.9898) * 3.0, Math.sin(d * 78.233) * 2.0]; } },
      frag: `#include <r3/post>
        out vec4 outColor; uniform vec2 uMis;
        void main() {
          vec2 px = 1.0 / uRes;
          vec4 s = r3Src(vUv);
          vec3 c = vec3(r3Src(vUv + uMis * px).r, s.g, r3Src(vUv - uMis * px).b);       // plate offset, 2-5 px
          float tone = r3Luma(c);
          float cyan   = r3HalftoneFW(gl_FragCoord.xy, tone, 8.0, 1.309);                // 75 deg
          float magent = r3HalftoneFW(gl_FragCoord.xy, tone, 8.0, 0.2618);               // 15 deg
          float black  = r3HalftoneFW(gl_FragCoord.xy, tone * 0.9, 8.0, 0.7854);         // 45 deg
          float shadow = smoothstep(0.55, 0.25, tone);                                   // dots only in shadow
          vec3 ink = mix(c, c * vec3(0.55, 0.50, 0.75), (cyan + magent) * 0.5 * shadow);
          ink = mix(ink, vec3(0.105, 0.086, 0.188), black * shadow * 0.6);
          outColor = vec4(ink, s.a);
        }` });
  } });
```

Ink line: add a second post pass that Sobel-filters `uDepth` and `r3Luma(r3Src())` and darkens pixels over a 2-4 px band (see the `#include <r3/npr>` helpers for engraving widths); keep the line weight a uniform driven by a held-frame hash so it changes per drawing. In 3D keep type in the DOM `ui` layer above the pass, unstepped. Check with `crew.mjs strip --fps 15`: every second frame should be identical, the offset should re-roll only at those boundaries.

## What makes a cheap imitation

- A halftone overlay PNG at constant size and opacity on every pixel: the dots were tone and light driven and shot-dialled.
- 12 fps stepping with no ones for hero action: Peter is at 24 and Miles starts at 12 on purpose, so cadence carries character.
- Motion blur and DOF still on: the look removes both.
- Chromatic aberration as a radial lens fringe (a 'glitch' look) instead of print plates offset in one direction per drawing.
- Misregistration, dots and ink applied to type and UI.
- Smooth, constant-thickness outlines from a single filter: the lines vary by emotion and form.
- One look for the entire film with no change in dot intensity for intimate versus punchy shots.

## Sources

- https://en.wikipedia.org/wiki/Spider-Man:_Into_the_Spider-Verse — Miles animated at 12 frames per second to convey inexperience, Peter B. Parker at 24; Ben-Day dots and halftones, chromatic aberration as misprinting, hatching and cross-hatching, Kirby Krackle, motion lines, onomatopoeia; motion smearing referencing the 1942 Looney Tunes The Dover Boys; stepped, intentionally jerky animation (fetched 2026-10-03).
- https://www.fxguide.com/fxfeatured/why-spider-verse-has-the-most-inventive-visuals-youll-see-this-year/ — on twos (12 images per second), about 1 second of animation per week against a typical 4; defocus replaced by images "splintered and offset... similar to a misprinted comic book page" (Danny Dimian); no standard motion blur, lines over the train and a rolling-shutter effect instead; screentones and hatchings (fetched 2026-10-03).
- https://www.foundry.com/insights/film-tv/graphic-look-in-comp-spiderman — over 25 compositing tools plus as many templates; Hatcher and Thresher make the halftone dots and hatch lines; ChromaShifter repurposed for motion trails; halftone thickness dialled per shot by lighting and tracking decisions: "pretty much the entire movie was done with the artist dialing shots on an individual basis" (fetched 2026-10-03).
- https://prolificstudio.co/blog/spiderman-into-the-spiderverse/ — on twos echoing hand-drawn timing; ink line tool responding to expression and camera; ink hatching as lighting language, Ben-Day dots carrying light and mood; smear frames and streaks instead of blur; RGB splits and misregistration for depth separation; "a rulebook you enforce shot by shot" (fetched 2026-10-03).

Unverified: the press screen angles (15/75/0/45) and cell size and offset pixel values (own proposals); that the camera also steps; the 150 vs 177 animator count (sources differ). The Limited animation Wikipedia page cited in the earlier draft was not re-fetched.
