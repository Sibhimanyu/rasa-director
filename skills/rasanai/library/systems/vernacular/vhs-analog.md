---
id: "vhs-analog"
name: "VHS and camcorder analog video"
kind: "vernacular"
domain: "vernacular"
era: "1976 VHS; consumer camcorders from 1982 (VHS-C), Video8 1985, Hi8 1988; peak 1985-2000"
origin: ["JVC VHS format", "NTSC / PAL broadcast video", "consumer camcorders (VHS-C, Video8, Hi8)", "home-video and broadcast on-screen displays"]
palette: {"roles":{"canvas":"#101014","ink":"#f2f2f2","osd":"#ffffff","osd_date":"#ffd84a","red":"#ff2a2a","cyan":"#3ad7ff","magenta":"#ff3ad7","vcr_blue":"#0000c8"},"logic":"low-contrast, slightly desaturated picture with red and blue fringes; OSD white or yellow with a black edge; REC dot red; a VCR no-signal screen is flat blue.","evidence":"All hexes are proposed. No fetched image was a usable measured VHS frame (the one VHS-C still found on Commons, https://commons.wikimedia.org/wiki/File:Enderlin_EF5_Tornado_crossing_ND_46.png, is a night storm shot: measured blacks #060707 / #030302 / #0e0f0f, k-means 6, 2026-10-03, which only confirms crushed near-black, not a palette)."}
type: {"display":{"family":"VT323","free_alternative":"VT323 / Silkscreen / DotGothic16","weights":[400],"case":"ALL CAPS","tracking":0.04,"note":"Camcorder and VCR OSD fonts were blocky bitmap caps; VT323 (OFL, 400 only) is the closest Google family to the 5x7-cell look, Silkscreen (400, 700) is heavier and more game-like, DotGothic16 (400) is rounder."},"body":{"family":"VT323","free_alternative":"VT323","weights":[400]},"rules":["OSD text: PLAY, PAUSE, REC, SP/LP, a counter like 00:00:12, a date stamp like OCT 03 1996","chunky, one size, white with a 2 px black offset shadow","fixed corners with about a 5-7% inset"]}
grid: {"columns":"4:3 frame (pillarbox in a 16:9 composition)","baseline_px":8,"margins":"title-safe about 90% of width, 90% of height","rules":["OSD in corners: status top-left, timecode top-right or bottom, date bottom-left","centered full-frame cards for PLAY/PAUSE","tracking bar near the bottom"]}
shape: {"radius":0,"stroke":"none","shadow":"none","imagery":"home footage, soft focus, over-bright windows, blown skies"}
texture: "horizontal luma noise, chroma bleed, interlace combing, tape dropouts, head-switching band at the bottom (see numbers)"
motion: {"language":"degraded, jittery, mechanical","timing_ms":[33,200,1200],"eases":{"enter":"steps(1)","move":"none","exit":"steps(1)"},"entrances":["tracking roll from the bottom up in 400ms","PLAY triangle snaps on","horizontal line jitter per frame","REC dot blinks at 1 Hz"],"camera":"handheld sway, auto-focus hunt, zoom creeping 4-8%","signature":"tracking distortion band that rolls up when a scene changes (a tape change)"}
space: {"2d":"native: post-process on footage and graphics","3d":"possible as a final-pass look: render a 3D scene at 320x240 equivalent, then apply chroma bleed and scanlines; a CRT TV object with the video on its screen"}
good_for: ["nostalgia, home-movie memory, found-footage horror", "music videos, lyric pieces about the 80s-90s", "anything that wants to feel recorded rather than rendered"]
not_for: ["clean B2B product films", "luxury minimal", "medical or safety content"]
blends_with: ["terminal-crt", "vaporwave-and-web-nostalgia", "cassette-futurism"]
clashes_with: ["swiss-international", "frutiger-aero", "y2k-chrome"]
cheap_tells: ["a uniform white-noise overlay with no tracking, bleed or interlace", "RGB split applied as the only effect", "a perfectly sharp image with a VHS font on top", "glitch stutter every second (real VHS degrades continuously and drifts)", "OSD text in a modern font", "16:9 composition with no 4:3 reference", "effects at 100% on every frame with no rest"]
verified: {"sources_fetched":6,"non_wikipedia":3,"colours":"proposed","colour_images":[],"grid":"partial","timings":"proposed","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/VHS","https://en.wikipedia.org/wiki/NTSC","https://en.wikipedia.org/wiki/Camcorder","https://modulate.to/effects/vhs/","https://bavc.github.io/avaa/artifacts/head_switching_noise.html","https://commons.wikimedia.org/wiki/File:Enderlin_EF5_Tornado_crossing_ND_46.png"]
tags: ["vhs", "analog", "camcorder", "tracking", "chroma-bleed", "osd", "date-stamp", "ntsc", "240p", "found-footage", "lo-fi"]
---
## What it is
VHS is the home-video look of lost sharpness. The format records up to 3 MHz of baseband luma and only 300 kHz of baseband chroma, with the luma frequency-modulated and the chroma down-converted ("colour-under") (Wikipedia VHS). The result is a soft picture (roughly 240 lines of horizontal detail) whose colour smears sideways and arrives slightly late. Camcorders arrived in 1982 (JVC's VHS-C), with Video8 in 1985 and Hi8 after it (Wikipedia Camcorder), and added their own overlay graphics. The AV Artifact Atlas and the Modulate explainer agree on what the look really is: a mechanism failing slightly and continuously (tape speed wobble, head switching, tracking, dropouts), not a filter applied evenly.

## The rules that make it this and not something else
- Resolution first. NTSC is 525 lines (about 480 active) at 29.97 fps, 59.94 fields per second (Wikipedia NTSC). Chroma has a tenth of luma's bandwidth (300 kHz vs 3 MHz, Wikipedia VHS), so colour bleeds sideways about ten times wider than the detail it belongs to.
- Head-switching noise: a band of noise in the last few lines of the picture, created when the heads switch, just before vertical sync. It shows in underscan and full-raster captures, and a worse tape makes it bounce up into the picture (AVAA). Its height in lines is proposed: 8-12 lines at 480, so 18-27 px at 1080.
- Tracking error: the heads fail to follow the recorded tracks; visible as horizontal distortion and tearing, fixed in a real VCR by the tracking knob (AVAA tracking error; Modulate).
- Wobble: tape speed is never constant, so the image drifts horizontally line by line (Modulate).
- Dropouts: white streaks and sparkles where oxide flaked off (Modulate).
- Interlace: two fields per frame; fast motion shows combing.
- OSD graphics as camcorders and VCRs drew them: PLAY with a triangle, PAUSE, REC with a red dot, SP/LP, counter, date and time at top and bottom of frame.
- The 4:3 frame. In a 16:9 film, show the tape inside a 4:3 window or on a TV.

## Tokens decoded
- Working size: 640x480 effective (320x240 for a harsher look); scale up smooth, not pixelated.
- Luma: 0.6-0.9 px horizontal blur at source size, contrast 0.9, blacks lifted to `#101014`-`#16161a`, highlights clipped and a little warm (proposed).
- Chroma: shift the colour 2-4 source px right (6-12 px at 1080p) and blur it 3-5 px horizontally; fringes `#3ad7ff` / `#ff3ad7` at 20-35% only on high-contrast edges (proposed).
- Noise: 1-3 px tall horizontal streaks at 4-8%, static grain 6-10%, both re-seeded every frame.
- Scanlines: `repeating-linear-gradient(0deg, rgba(0,0,0,.18) 0 1px, transparent 1px 3px)`; for a true 480-line source at 1080p the pitch is 2.25 px.
- OSD: VT323 at 48 px, `#f2f2f2`, shadow `2px 2px 0 #000`, 6% inset; date `OCT 03 1996` and `12:41 AM` in `#ffd84a` (proposed).
- Tracking band: 40-90 px tall, +-30 px horizontal offset, +35% brightness with noise, rolling up at 120-220 px/s (all proposed).

## Motion and camera
2D (vocabulary.md: VHS, Scanlines / CRT, Flicker, Moving hold): the baseline degradation never switches off (3-5%), and events ride on top of it: a tracking event every 4-7 s lasting 300-600 ms with a `power2.out` decay, a dropout streak 1-3 frames long, a head-switch band that wobbles +-6 px. The REC dot blinks 500 ms on, 500 ms off on `steps(1)`. A camcorder zoom is scale 1 -> 1.06 over 900 ms `sine.inOut`, with focus hunting (blur 0 -> 3 px -> 0 in 400 ms `power2.inOut`). A scene change shows 2-4 frames of flat `#0000c8` or snow. Handheld: summed sines at 0.6 and 1.4 Hz, +-4 px plus +-0.3 degrees of roll, no random. Drive everything from the integer frame index so seeks agree.

3D (Rasan3D), two readings:
- As a finish on a 3D scene: a post pass `k.pass("vhs", { at: "post", uniforms: { uSeed: 7, uBand: (t) => ... }, frag })` that samples `r3Src` at a lowered resolution (snap `vUv` to a 640x480 grid), takes the red and blue taps with `r3Chroma(uSrc, uv, 0.004)`-style offsets and a horizontal blur on chroma only, applies `r3Scanlines(c, gl_FragCoord.xy, 0.25, 2.25)` and `r3Grain(c, gl_FragCoord.xy, uFrame, 0.06)` (both from the `post` chunk; uFrame makes the grain move deterministically), and displaces rows by `r3Value2(vec2(vUv.y*240., floor(uTime*30.)))*0.002` for wobble. A tracking event is a uniform that is a function of `t`. Add `post: { grain: .04, ca: 1.5, vignette: .3, bloom: { strength: .3, threshold: 1.0 } }`.
- Camera: `lens` 28-35 mm (camcorder wide), no `fstop`, handheld `pos` as a function of `t` built from two summed sines of 0.01-0.03 world units, slow zoom as a `lens` key 30 -> 42 over 3 s `sine.inOut`.
- In-world CRT TV: `k.panel({ width: 1.2, height: 0.9, depth: 0.5, texture })` with a `k.image` still or a `k.view("tv", { scene, camera, pose })` render target of another scene as the screen (a real portal), `low-key` rig, one lamp `window` key, `environment: "none"`, push to 100-135 mm until the scanlines fill frame.

## How to instruct a model to build it
```
VHS camcorder look, 4:3 window (1440x1080) centred in 1920x1080, black pillars.
Over the footage: (1) chroma offset: duplicate the clip, SVG feColorMatrix isolating red and blue, feOffset dx=8, 0.4 opacity, blur 4px horizontal;
(2) luma blur 0.8px, contrast .9, blacks #101014; (3) scanlines repeating-linear-gradient(0deg, rgba(0,0,0,.18) 0 1px, transparent 1px 3px);
(4) 6 noise streaks 1-3px tall, white 8%, positions from a seeded function of the frame index; (5) head-switch band: bottom 24px, noise, wobbling +-6px;
(6) tracking band 70px tall rolling up 160px/s for 450ms at t=3s and t=8s, power2.out; (7) OSD in VT323 48px #f2f2f2 shadow 2px 2px 0 #000: top-left 'PLAY' with a CSS triangle, bottom-left 'OCT 03 1996' in #ffd84a, top-right counter 00:00:12 from the timeline; REC dot #ff2a2a steps(1) 1Hz.
Base degradation 4% always on; events 4-7s apart; GSAP paused timeline only; every random value is a seeded function of the frame index.
```
Rasan3D: handheld camera, 28-35 mm, a `post` k.pass as above, `post {grain:.04, ca:1.5, vignette:.3}`.
Model notes: Claude overdoes the RGB split and forgets the 4:3 window, low chroma resolution and the OSD; GPT-style models add a random glitch every second. State the cadence (an event every 4-7 s) and the always-on baseline.

## Blending notes
- Carries: 4:3 frame, chroma softness, OSD, date stamp, the event cadence.
- With terminal-crt: both are CRT; share scanlines, keep their noise separate. With cassette-futurism: VHS for footage, the console for screens. With vaporwave-and-web-nostalgia: tape degradation is part of that world; keep it at 3-5% so the palette survives.
- Breaks: crisp small type. Put essential text on a clean layer or at OSD size (48 px or more).

## Sources
- https://en.wikipedia.org/wiki/VHS — 3 MHz luma, 300 kHz chroma, colour-under, FM luma (fetched).
- https://en.wikipedia.org/wiki/NTSC — 525 lines, 480 active, 29.97 fps, fields (fetched).
- https://en.wikipedia.org/wiki/Camcorder — VHS-C 1982, Video8 1985, Hi8, S-VHS (fetched).
- https://modulate.to/effects/vhs/ — the artifact list and its physical causes: wobble, head-switch band, tracking, chroma lag, dropouts; rental-tape / eaten-tape / camcorder signature looks (fetched; a commercial effect page, used for descriptions only).
- https://bavc.github.io/avaa/artifacts/head_switching_noise.html — AV Artifact Atlas (Bay Area Video Coalition): head switching noise at the bottom of the frame before vertical sync (fetched).
- https://commons.wikimedia.org/wiki/File:Enderlin_EF5_Tornado_crossing_ND_46.png — a real VHS-C screenshot (JVC GR-AX270), measured for black levels only (fetched).
