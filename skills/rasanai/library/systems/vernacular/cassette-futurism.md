---
id: "cassette-futurism"
name: "Cassette futurism (the 1970s-80s used future)"
kind: "vernacular"
domain: "vernacular"
era: "late 1970s-1980s hardware; named and revived 2010s-2020s"
origin: ["Alien (1979) Nostromo, Ron Cobb and Chris Foss", "Braun / Dieter Rams hardware lineage", "1970s-80s mainframe and terminal interfaces", "Kraftwerk-era 'nostalgia for the future'"]
palette: {"roles":{"canvas":"#0d0d0a","housing":"#ceccbf","housing_shade":"#bcb7a6","seam":"#a19d92","phosphor":"#cc8d01","phosphor_hot":"#ffb000","signal":"#e2431f"},"logic":"warm beige-grey plastic housings, near-black glass, one amber or green phosphor, one orange-red signal; colour on the housing is function, never decoration","evidence":"housing #ceccbf/#bcb7a6/#a19d92 and canvas #0d0d0a, amber #cc8d01 measured from Commons photos of a Schneider MM12 monochrome monitor and an amber screen-burn, k-means 6, 2026-10-03; phosphor_hot #ffb000 (the glow peak, brighter than a photographed screen) and signal #e2431f are proposed"}
type: {"display":{"family":"Share Tech Mono","free_alternative":"Share Tech Mono / B612 Mono / Chakra Petch","weights":[400],"case":"ALL CAPS","tracking":0.08,"note":"Share Tech Mono has only weight 400, so fake emphasis with colour or an inverse block, not bold. B612 Mono (400, 700) was drawn for aircraft cockpit displays and is the closest to instrument labelling; Chakra Petch is a squared sans for stencil-like panel captions."},"body":{"family":"IBM Plex Mono","free_alternative":"IBM Plex Mono / VT323","weights":[400,500],"note":"VT323 (400) imitates a DEC VT320 bitmap terminal; use it only for the screen, at 1:1 pixel multiples."},"rules":["monospace, uppercase, wide-tracked labels","two or three sizes only (10, 14, 32 px at 1080p; scale up as needed)","no italic, no rounded fonts","icons are simple pictograms in the Semiotic Standard manner, colour-coded"]}
grid: {"columns":"hardware panel grid: 12 col, 24px module","baseline_px":8,"margins":"tight; bezels and screws define edges","rules":["rectangular modules with labelled borders","screen inset in a bezel","switch banks aligned on a strict row"]}
shape: {"radius":"2-6px housings, circular dials and lamps","stroke":"1-2px dark seams, engraved lines","shadow":"hard, low, from a top-left key","imagery":"CRT readouts, rocker switches, punched labels, dymo tape, wire-frame vectors"}
texture: "worn beige plastic, scuffs, engraved lettering, phosphor glow and scanlines on the screen only, 'retrofitted old technology' (sourced from Alien production notes: large transistors, low-resolution computer screens)"
motion: {"language":"mechanical, discrete, steppy","timing_ms":[80,160,400],"eases":{"enter":"steps(6)","move":"power1.inOut","exit":"steps(4)"},"entrances":["row-by-row text print at 30-60 chars/s","switch flip 120ms","lamp snaps on with 2-frame flicker","screen warm-up from a horizontal line"],"camera":"locked, slow push of 3-5%; macro rack focus over panels","signature":"text that prints character by character, then a lamp or switch that answers it"}
space: {"2d":"native for screens and panels","3d":"strong as a lit console: beige housings (clay or matte), recessed emissive screens, rocker switches as small extrusions; low-key light"}
good_for: ["sci-fi worlds, games, hardware or infrastructure stories", "systems monitoring, space, industrial products", "nostalgia for the physical interface"]
not_for: ["soft consumer lifestyle", "luxury minimal", "anything that must feel contemporary and fluid"]
blends_with: ["terminal-crt", "vhs-analog", "blueprint-technical-drawing", "braun-dieter-rams-lineage", "territory-studio-fui"]
clashes_with: ["y2k-chrome", "frutiger-aero", "vaporwave-and-web-nostalgia"]
cheap_tells: ["neon cyan on black with a grid floor (that is synthwave, not cassette futurism)", "clean glossy sci-fi HUD with no hardware around it", "pristine plastic: no scuffs, labels or seams", "amber and green and cyan all at once", "text appears instantly instead of printing", "fonts that look like 'techno' display faces rather than monospaced terminal text"]
verified: {"sources_fetched":6,"non_wikipedia":4,"colours":"measured","colour_images":["https://commons.wikimedia.org/wiki/File:Schneider-MM12-Monochrome-Monitor-3.jpg","https://commons.wikimedia.org/wiki/File:ScreenBurn_amber_(cropped).JPG"],"grid":"proposed","timings":"proposed","recipes":"aligned","edited":"2026-10-03"}
sources: ["http://alienexplorations.blogspot.com/1979/05/ron-cobbs-design-philosophy.html","https://en.wikipedia.org/wiki/Alien_(film)","https://designbycurio.com/learn/cassette-futurism-1979","https://en.wikipedia.org/wiki/Phosphor","https://commons.wikimedia.org/wiki/File:Schneider-MM12-Monochrome-Monitor-3.jpg","https://commons.wikimedia.org/wiki/File:ScreenBurn_amber_(cropped).JPG"]
tags: ["cassette-futurism", "retro-futurism", "used-future", "alien", "braun", "crt", "amber", "rocker-switch", "hardware", "70s-80s"]
---
## What it is
Cassette futurism imagines the future as it looked from the late 1970s and 1980s: boxy hardware, CRT readouts, switches, tape, labelled panels. Alien (1979) is the canonical source. Ron Cobb designed the Nostromo's interiors and the Semiotic Standard, colour-coded industrial symbols that give the ship "a standardized, multi-lingual, industrial look" (Wikipedia, Alien). The team deliberately used "retrofitted old technology", large transistors and low-resolution screens, and art director Roger Christian built sets from scrap including decommissioned aircraft parts. Cobb's own stated method was to design the ship "as though it was absolutely real" and that "the more realism you put into it, the more original they look" (Alien Explorations). It is a reaction against the white corridors of 2001: a used, operated, industrial future. The style is a design-world label applied afterwards; the Wikipedia article formerly cited here no longer exists, so the definition below rests on Cobb, the Alien production record and a design guide.

## The rules that make it this and not something else
- Interfaces are physical. Every screen sits in a bezel, every action is a switch, dial or key with a printed label. Hybrid setups: rotary dials and switchboards next to a keyboard, joystick instead of a mouse, LCD readouts, indicator lamps with cryptic labels (designbycurio).
- The screen is limited: bitmap monospace letters on a pixel grid, uniform stroke, staircase curves, visible aliasing; one phosphor colour (amber or yellow-green) on warm near-black. A third colour breaks the terminal logic; warning red is reserved for alerts (designbycurio).
- Scanlines are a consequence of the display, not a decorative overlay: put them on the screen only.
- Industrial colour-coding painted on the housing: a red lamp means something. Dense information, not minimal; bordered, recessed components with visible mass.
- Wear: scuffs, tape labels, stencilled codes, screws. Realism over polish; nothing shines, nothing is decorative, every surface is built to be gripped.
- Housings are warm beige or grey, not white and not black; black is the glass. Measured housing plastic (a real monochrome monitor): `#ceccbf` / `#bcb7a6` / `#a19d92`, a 3-step yellowed grey.
- Corporate marks are bland and bureaucratic (Weyland-Yutani is a composite of British and Japanese corporate names), not startup cool.

## Tokens decoded
- Housing `#ceccbf`, shade `#bcb7a6`, seam `#a19d92`, glass `#0d0d0a` (all measured). Amber `#cc8d01` is what a photographed amber screen reads as; for glowing text use `#ffb000` (proposed) so bloom has headroom. Green alternative `#33ff66` (proposed). Signal `#e2431f` (proposed).
- Type: Share Tech Mono for labels (weight 400 only; emphasis by inverse block, not bold), IBM Plex Mono 400/500 for dense readouts, VT323 for true bitmap screen text. 14 px labels at 0.08em, all caps. Sizes in a 3-step scale: 1x, 2.2x, 4x.
- Grid (proposed): 24 px module on a 12-column panel; text cell 0.6em wide; screen margin 32 px; the label sits above or below the switch, never beside.
- Screen CSS: background `#0d0d0a`, text `#ffb000`, `text-shadow: 0 0 6px rgba(255,176,0,.55)`, scanlines `repeating-linear-gradient(0deg, rgba(0,0,0,.28) 0 1px, transparent 1px 3px)`.
- Rocker switch: 44x72 px body `#2a2822`, 38x34 px lever, 1 px highlight on the lit half, red dot `#e2431f` when on.
- Hazard blocks: 45 degree stripes, 10 px bands, `#e2431f` on `#0d0d0a`.

## Motion and camera
2D (vocabulary.md: Typewriter, scanlines, video-tape grade):
- Print text at 40 chars/s (proposed; vocabulary.md's typewriter default is slower at 12-18, use that for deliberate reads) with a block caret blinking at 530 ms via `steps(1)`; the counter is a tween on a proxy object with ease `none` that writes `textContent` by index, so it seeks deterministically. Lines scroll by whole rows only.
- Switch flip 120 ms `power2.out` plus a 2-frame screen flicker (opacity .85 to 1). Warm-up: `scaleY .01 -> 1` in 220 ms `power4.out`, brightness 1.8 to 1 over 400 ms. Lamps `steps(1)` on, no fade.
- Transitions: hard cut, or a vertical-hold roll (`y` +100% in 300 ms `power3.in`). Holds 600-1400 ms so printed text can be read. Camera: locked, slow push of 3-5% on the screen.

3D (Rasan3D; a lit console, never a floating HUD):
- Housings `k.material("matte", { color: "#ceccbf" })` (or `"clay"`); the screen is a `k.panel({ width, height, depth: .06, radius: .02, texture, bodyColor: "#bcb7a6", inset })` whose texture is a `k.text({ text, font: "Share Tech Mono", color: "#ffb000", background: "#0d0d0a", letterSpacing })` canvas, unlit so it stays exact. For text that types, put the screen as DOM in the scene's `ui` layer and attach it with `k.pinDom(el, { at: screenMesh, width, px: [880, 560], face: "object", offset: [0, 0, .031], backface: "hide" })`.
- Lamps and one or two screen glows: `k.material("emissive", { color: "#ffb000" })` at intensity 2-3; emissive is the only thing that blooms. Switches are small rounded extrusions.
- Light: `k.rig("low-key", { dir: [-.6, .8, .5], shadows: true, shadowSoftness: 2 })`, `environment: "none"` or `{ preset: "soft", intensity: .2 }`.
- Camera keys: `lens: [[0, 35]]` to be in the room; for the rack focus `lens: [[0, 100]]`, `fstop: 2`, `focus: [[0, 1.2], [2.4, .9, "power2.inOut"]]` (switch to screen distances in world units). Truck `pos` along the panel row over 3.2 s with `sine.inOut`, then a 4% push and a hold on the printed line.
- Post: `bloom: { strength: .4, threshold: 1.15 }`, `grain: .035`, `vignette: .25`, low `halation`. Scanlines and a touch of barrel can be one `k.pass("crt", { at: "post", frag })` sampling `r3Src(vUv)`: darken `mod(floor(vUv.y * uRes.y), 3.0) == 0.0` rows by 28%.
- Not this: neon grid floor, chrome, glossy hologram.

## How to instruct a model to build it
Paste-ready (2D):
```
Cassette futurism. Canvas #0d0d0a. A beige console panel (#ceccbf, radius 4px, inset seams #a19d92) 1500x860 centred; inside it a screen bezel 880x560 with background #0d0d0a.
Screen text: Share Tech Mono 28px uppercase, #ffb000, letter-spacing .08em, text-shadow 0 0 6px rgba(255,176,0,.55), scanlines overlay repeating-linear-gradient(0deg, rgba(0,0,0,.28) 0 1px, transparent 1px 3px) on the screen only.
Beside the screen: a column of 4 rocker switches with printed 12px caps labels and a red lamp #e2431f.
GSAP paused timeline: screen scaleY .01->1 220ms power4.out; text prints at 40 chars/s (proxy-object tween, ease none, sets textContent by index); switch 2 flips at +1.4s (120ms power2.out) and its lamp snaps on (set, no fade); hold 900ms; hard cut.
The housing must show wear: two tape label strips, four screws, a scuff gradient at one corner. No gradients on the housing, no glow outside the screen.
```
Model notes: models tend to draw a sleek HUD with no hardware; require the bezel, labels and wear. They also drift to neon cyan; name amber or green and forbid the third colour.

## Blending notes
- Carries: monospace caps, one phosphor colour, physical switches, printed text, wear.
- With terminal-crt: cassette futurism is the housing, terminal-crt is the screen content. With blueprint-technical-drawing: a wall of schematics beside the console. With vhs-analog: console footage on tape. With braun-dieter-rams-lineage: the clean pole of the same hardware (calm rounded-rectangle products, no wear). With territory-studio-fui: modern screen content inside this housing.
- Breaks: glossy chrome, candy colours, soft pastel UI, smooth easing everywhere.

## Sources
- http://alienexplorations.blogspot.com/1979/05/ron-cobbs-design-philosophy.html — Cobb's "as though it was absolutely real" method, "frustrated engineer", realism as originality (fetched).
- https://en.wikipedia.org/wiki/Alien_(film) — Cobb, Foss, Giger roles; Semiotic Standard; retrofitted old technology, large transistors, low-resolution screens; scrap-built sets (fetched).
- https://designbycurio.com/learn/cassette-futurism-1979 — warm-dark ground, single phosphor, reserved warning red, bitmap monospace, scanlines as display consequence, hybrid controls (fetched; replaces the dead Wikipedia "Cassette futurism" URL).
- https://en.wikipedia.org/wiki/Phosphor — CRT phosphors in general (fetched; it gives no P1/P3 wavelengths, so the earlier 525/602 nm figures are removed as unverified).
- https://commons.wikimedia.org/wiki/File:Schneider-MM12-Monochrome-Monitor-3.jpg — measured housing plastic colours.
- https://commons.wikimedia.org/wiki/File:ScreenBurn_amber_(cropped).JPG — measured amber `#cc8d01` and near-black glass.
