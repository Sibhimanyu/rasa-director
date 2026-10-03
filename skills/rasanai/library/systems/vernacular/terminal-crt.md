---
id: "terminal-crt"
name: "CRT terminal (phosphor green and amber, VT100 lineage)"
kind: "vernacular"
domain: "vernacular"
era: "1970s-1980s; VT100 released 1978"
origin: ["DEC VT100 / VT220", "monochrome phosphor monitors", "ANSI X3.64 escape codes", "UNIX command-line culture"]
palette: {"roles":{"canvas":"#080907","phosphor_green":"#33ff66","phosphor_amber":"#ca8b02","amber_hot":"#ffb000","dim_green":"#1a7a33","dim_amber":"#84540b","ink":"#d6ffe0"},"logic":"one phosphor colour on near-black, a dim tint of the same hue for secondary text, no second hue. Canvas and the amber and dim amber are measured from a real amber monitor photo; the greens are proposed from the P1 wavelength.","evidence":"canvas #080907 (30%), amber #ca8b02 (24.5%) and dim amber #84540b (2.6%) measured from https://commons.wikimedia.org/wiki/Special:FilePath/ScreenBurn_amber.JPG (photo of an amber monitor), k-means 6, 2026-10-03. The VT220 screen photo https://commons.wikimedia.org/wiki/Special:FilePath/VT220_Irssi.jpg gave a camera-lifted black #131915 and green glow #354840 (not used). #33ff66, #1a7a33, #ffb000 and #d6ffe0 are proposed: P1 green is 525 nm and P3 amber 602 nm (Wikipedia Phosphor), and a wavelength is not a hex."}
type: {"display":{"family":"IBM Plex Mono","free_alternative":"IBM Plex Mono / VT323 / Share Tech Mono","weights":[400,500,700],"case":"mixed (commands lowercase, status UPPERCASE)","tracking":0,"note":"IBM Plex Mono (OFL, Google Fonts, weights 100-700 plus italics) is the readable modern terminal. VT323 (OFL, only 400) is the literal VT220 cell and needs 36 px or more at 1080p. Share Tech Mono (400 only) is the squarer instrument-panel cut."},"body":{"family":"IBM Plex Mono","free_alternative":"IBM Plex Mono / VT323","weights":[400]},"rules":["strict monospace cell, 80 columns by 24 rows (VT100 default, sourced); 132 columns is the dense mode","bold means brighter (SGR 1 is 'bold or increased intensity'): tween colour or opacity, not font-weight, unless the family has a wght axis","reverse video (SGR 7) = phosphor-filled block with canvas-coloured text, for selection and headers","underline (SGR 4) and blink (SGR 5) exist; double-width and double-height lines (DECDWL, DECDHL) are real VT100 attributes, good for one headline row"]}
grid: {"columns":"80 (or 132) character columns; 24 rows","baseline_px":"line height 1.2-1.3 em","margins":"1-2 character cells; screen has a curved bezel","rules":["every glyph on the character grid","tables drawn with box-drawing characters","prompt then output then prompt; no centered layouts"]}
shape: {"radius":"screen corners 24-48px curve, bezel black","stroke":"box-drawing characters; 1 char wide frames","shadow":"phosphor glow only","imagery":"text, ASCII art, block-element bars, no photographs"}
texture: "scanlines, phosphor bloom, slight screen curvature, flicker, persistence trails (P1 persistence 1-100 ms; P31 0.01-1 ms, sourced)"
motion: {"language":"character-by-character, rigid","timing_ms":[16,25,530],"eases":{"enter":"steps(1)","move":"none","exit":"steps(1)"},"entrances":["typewriter at 40-90 chars/s","line-by-line scroll","cursor blink 530ms","screen warm-up"],"camera":"locked; occasional slow 2-4% push into the screen","signature":"the blinking block cursor and a command's output arriving in bursts"}
space: {"2d":"native","3d":"a CRT as an object in a dark room: curved glass, bezel, phosphor emissive; or text planes in space for 'terminal in the world'"}
good_for: ["developer tools, security, infrastructure, AI-agent stories", "hacker and systems nostalgia", "CLI product demos"]
not_for: ["luxury, consumer lifestyle, healthcare", "warm human stories"]
blends_with: ["cassette-futurism", "vhs-analog", "pixel-game-ui", "blueprint-technical-drawing"]
clashes_with: ["frutiger-aero", "y2k-chrome"]
cheap_tells: ["Matrix-style falling green glyph rain as the default", "glow so heavy the text smears and becomes unreadable", "text appearing all at once instead of typing", "mixing three phosphor colours", "proportional font", "fake terminal output that is nonsense, not plausible commands", "scanlines at high contrast over small text"]
verified: {"sources_fetched":6,"non_wikipedia":4,"colours":"partial","colour_images":["https://commons.wikimedia.org/wiki/Special:FilePath/ScreenBurn_amber.JPG","https://commons.wikimedia.org/wiki/Special:FilePath/VT220_Irssi.jpg"],"grid":"sourced","timings":"proposed","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/VT100","https://vt100.net/docs/vt100-ug/chapter3.html","https://en.wikipedia.org/wiki/Phosphor","https://github.com/Swordfish90/cool-retro-term","https://github.com/IBM/plex","https://commons.wikimedia.org/wiki/Special:FilePath/ScreenBurn_amber.JPG"]
tags: ["terminal", "crt", "phosphor", "green-screen", "amber", "vt100", "monospace", "scanlines", "cli", "ascii"]
---
## What it is
The CRT terminal look is monospaced text on a monochrome phosphor screen. The DEC VT100 (August 1978) had a 12 in CRT, an 80x24 mode and a 132-column mode, ANSI escape codes for cursor control, and graphic renditions: blink, bold, reverse video, underline, double-size lines. It also introduced a box-drawing character set. Over six million terminals in the VT series were sold (Wikipedia VT100). The colour is the phosphor: P1 (willemite) green at 525 nm with 1-100 ms persistence, P3 amber at 602 nm with about 13 ms persistence, P31 yellowish-green with 0.01-1 ms persistence, P4 white for TV tubes (Wikipedia Phosphor). The DEC user guide defines the attribute set in full: SGR 0 off, 1 bold, 4 underscore, 5 blink, 7 negative (reverse) image, and nothing else (vt100.net chapter 3). That short list is the whole emphasis vocabulary of the look.

## The rules that make it this and not something else
- One phosphor colour: green or amber. A dimmer shade of the same hue for secondary text. There is no second hue.
- The character grid is the layout. 80x24 cells; tables and frames are box-drawing characters; nothing sits between cells.
- Output behaves like a stream: prompt, command, response, prompt. Text arrives in rows and scrolls by whole rows.
- The cursor is a solid block. The blink rate is not in any source fetched; 530 ms on / 530 ms off is proposed.
- Emphasis is brightness only: bold (brighter), reverse video, blink. No colour highlights, no italics, no drop shadows.
- The screen is an object: slight barrel curvature, vignette, scanlines, phosphor bloom, a black bezel, and persistence (a trail that outlives the character by P1's 1-100 ms).
- Content is plausible: real-looking commands, paths, exit codes, timestamps. Invented nonsense is the tell.

## Tokens decoded
- Canvas `#080907` (measured, amber monitor photo), amber `#ca8b02` text with `#ffb000` for bold, dim amber `#84540b` (measured). Green variant: `#33ff66`, dim `#1a7a33`, bright `#d6ffe0` (proposed). Pick one family per film.
- Type: IBM Plex Mono 400 at 30-32 px on a 1920x1080 canvas gives about 60 columns, enough for readable lines; for a literal 80 columns use 22 px and accept it is a texture, not copy. VT323 400 at 44 px reads as VT220. Mono weight tweening: IBM Plex Mono is static (no wght axis), so animate brightness, not weight.
- Glow: `text-shadow: 0 0 2px currentColor, 0 0 10px rgba(202,139,2,.45)`; keep the 2 px inner term so stems stay readable.
- Scanlines: `repeating-linear-gradient(0deg, rgba(0,0,0,.22) 0 1px, transparent 1px 3px)` multiply, 10-20% effect (vocabulary.md Scanlines / CRT); the 3 px pitch is proposed.
- Curvature: `border-radius: 28px` on the screen plus `box-shadow: inset 0 0 120px rgba(0,0,0,.65)`. cool-retro-term, an open-source terminal emulator built to mimic cathode-tube screens, ships its default looks as exactly three presets: Default Amber, IBM DOS and Default Green (its README), which supports treating amber and green as the two canonical variants.
- Cell: 0.6 em wide, line height 1.25 em; 2-cell left margin; prompt `$ ` or `> ` in the dim colour.

## Motion and camera
2D (vocabulary.md terms: Moving hold, Hold, Scanlines / CRT, Flicker): the camera is locked; a T1 push of 2-4% on `#world` over the whole hold is the only camera. Type commands at 40-60 chars/s with 0-25% seeded jitter, sampled on the integer frame index; set a text node's `textContent` slice from a timeline-driven integer (a GSAP tween on a plain object, `ease: "none"`, `onUpdate`). Output arrives in bursts of 3-8 lines in one frame, then a 120-400 ms pause. Cursor `steps(1)`, 530 ms period. Scroll by whole rows: `y -= lineHeight` on `steps(1)`. Warm-up: `scaleY 0.01 -> 1` 220 ms `power4.out` with brightness 2 -> 1 over 350 ms. A reverse-video wipe across a selected line: 120 ms `power2.out`. Hold the finished output 1.0-1.6 s. Per-frame flicker: seeded +-2% opacity on an overlay, `steps(1)`. All of these timings are proposed.

3D (Rasan3D, a CRT as an object or terminal text in the world):
- The live terminal must stay DOM so it can type: build the screen DOM element and place it on the glass with `k.pinDom(el, { at: screenMesh, width: 1.6, height: 1.2, face: "object", px: [1280, 960], offset: [0, 0, 0.01] })`. `k.text` is a static texture; use it only for an already-typed final frame on a distant monitor.
- Body: bezel as a `k.panel({ width: 2.0, height: 1.6, depth: 0.5, radius: 0.12, bodyColor: "#cfc8b4" })` (beige VT100-era plastic is proposed), screen as a second slightly bulged `SphereGeometry` patch of the `unlit` material if curvature must be real, otherwise the barrel distortion pass below.
- Barrel distortion and scanlines as a post pass: `k.pass("crt", { at: "post", frag })` reading `r3Src(uv)`, with `vec2 c = vUv*2.-1.; c *= 1. + 0.12*dot(c,c); uv = c*.5+.5;` then `r3Scanlines(col, gl_FragCoord.xy, 0.3, 3.0)` from the `post` chunk. Post passes touch only what the 3D layer draws, so the DOM terminal is bent only if it is under the pass: use it when the CRT fills frame.
- Light: rig `low-key`, key `dir [-1,.6,.4]`, intensity low; the screen is the main light: an `emissive` plane (`#ca8b02`, intensity 2) behind the glass and a `PointLight` of the same colour. `environment: "none"`; `background: "#050505"`.
- Camera: lens 50 mm on the object, `lens` key 50 -> 120 mm `power2.inOut` over 2.5 s while `pos` dollies 4%; `fstop: 2.8` with `focus: "target"` so the bezel falls out of focus as the glass fills frame. Post: `bloom {strength:.45, threshold:1.15}` (emissive only), `halation`, `grain .03`, `vignette .3`.
- Text in the world: `k.extrudeText` is wrong here (no depth on a screen). Use stacked `k.text` planes at 0.05 world-unit spacing, lens 35 mm, a slow truck.

## How to instruct a model to build it
```
CRT terminal, amber. Canvas #080907. Centred screen 1560x900, radius 28px, inset box-shadow 0 0 120px rgba(0,0,0,.65).
Text: IBM Plex Mono 400, 30px, line-height 1.25, colour #ca8b02, bold = #ffb000, dim = #84540b.
text-shadow 0 0 2px currentColor, 0 0 10px rgba(202,139,2,.45). Left padding 2 cells (36px).
Scanlines: repeating-linear-gradient(0deg, rgba(0,0,0,.22) 0 1px, transparent 1px 3px) over the screen.
Content (plausible, 12-14 lines): '$ ssh deploy@edge-04', 'Last login: Sat Oct  3 09:12:44', '$ ./release --target prod', progress lines ending [ok], one exit code.
GSAP paused timeline, no CSS animation, no rAF: screen scaleY .01->1 in 220ms power4.out; commands type at 55 chars/s via a timeline-driven integer;
output blocks of 3-6 lines appear in one frame (set), 200ms apart; cursor is a 0.6em x 1.2em block blinking 530ms steps(1);
one reverse-video line wipe at 3.2s (120ms power2.out); T1 push 3% across the hold; hold 1.2s at the end.
Forbidden: a second colour, glyph rain, cyan, proportional type, fading text in.
```
Claude writes plausible logs but tends to render every line at once and to fade; require typing and bursts in the prompt. GPT-style models drift to Matrix rain, cyan accents and heavy glow; forbid all three explicitly.

## Blending notes
- Carries into a blend: the grid, one phosphor colour, typing, the block cursor, scanlines.
- With cassette-futurism: the housing and knobs around the screen. With pixel-game-ui: a bitmap or VT323 terminal inside a game. With vhs-analog: CRT-in-room footage on tape (do the tape pass last). With blueprint-technical-drawing: the terminal draws the sheet.
- Breaks: proportional type, soft pastel palettes, photographs, gradient glass.

## Sources
- https://en.wikipedia.org/wiki/VT100 — 1978 release, 12 in CRT, 80x24 / 132 columns, ANSI codes, graphic renditions, box-drawing set, six million VT terminals (fetched).
- https://vt100.net/docs/vt100-ug/chapter3.html — DEC user guide: SGR parameters 0, 1, 4, 5, 7 and double-size line sequences (fetched).
- https://en.wikipedia.org/wiki/Phosphor — P1 525 nm 1-100 ms, P3 602 nm 13 ms amber, P31 0.01-1 ms (fetched).
- https://github.com/Swordfish90/cool-retro-term — a terminal emulator that mimics cathode-tube screens; its README shows the Default Amber, IBM DOS and Default Green presets (fetched).
- https://github.com/IBM/plex — IBM Plex is OFL, Sans/Serif/Mono/Condensed with italics, designed for UI (fetched).
- https://commons.wikimedia.org/wiki/Special:FilePath/ScreenBurn_amber.JPG — amber monitor photo, source of the measured canvas and amber (fetched, k-means).
