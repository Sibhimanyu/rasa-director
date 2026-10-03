---
id: "pixel-game-ui"
name: "8-bit and 16-bit console game UI"
kind: "vernacular"
domain: "vernacular"
era: "1983-1996 (NES/Famicom, Game Boy, SNES, Mega Drive); revived in indie games"
origin: ["Nintendo NES and SNES", "Game Boy", "bitmap-font game menus", "tile-based sprite hardware"]
palette: {"roles": {"canvas": "#0f0f23", "panel": "#1d2b53", "ink": "#fff1e8", "accent": "#ff004d", "accent2": "#ffec27", "green": "#00e436", "gb_darkest": "#294139", "gb_dark": "#39594a", "gb_light": "#5a7942", "gb_lightest": "#7b8210"}, "logic": "a hard-limited palette of 4-16 colours, each used flat; dithering is the only blend. Sourced: NES palette is 64 entries (52-54 usable), 4 background plus 4 sprite palettes of 4 colours; SNES 15-bit colour (32,768) with up to 256 on screen; Game Boy 4 colours. The hex swatch above is proposed (not sourced), in the spirit of limited palettes.", "evidence": "partial. Game Boy ramp #294139 / #39594a / #5a7942 / #7b8210 (greenscale) and Pocket ramp #181818 / #4a5138 / #8c926b / #c5caa4 read from the swatch table on Wikipedia's List of video game console palettes (https://en.wikipedia.org/wiki/List_of_video_game_console_palettes), fetched 2026-10-03; these are the simulated screen colours listed there. The NES hardware palette is 64 entries (nesdev; that page returned 403 this session, so the count is from the earlier read). The 16-colour UI set in canvas/panel/ink/accent roles is a proposed swatch, not sourced."}
type: {"display": {"family": "Press Start 2P", "free_alternative": "Press Start 2P / Silkscreen / VT323 / Pixelify Sans", "weights": [400], "case": "ALL CAPS", "tracking": 0, "note": "Press Start 2P (400) is built on an 8px grid: set at 8, 16, 24, 32px only. Silkscreen has 400 and 700. VT323 is 400. Pixelify Sans is variable wght 400-700 but is a pixel-look font, not a true bitmap: do not tween wght on a stepped layer."}, "body": {"family": "Silkscreen or Press Start 2P at 8-16 px", "weights": [400, 700], "free_alternative": "Silkscreen / Press Start 2P"}, "rules": ["size in multiples of the native cell (8, 16, 24, 32 px); never fractional", "disable font smoothing: -webkit-font-smoothing:none; text-rendering:optimizeSpeed", "left-aligned dialog text with a 'typing' reveal and a blinking triangle prompt", "1-px or 2-px drop shadow in a darker palette colour, no blur"]}
grid: {"columns":"tile grid of 8x8 or 16x16 px; screen 256x224 (SNES) or 256x240 (NES) or 160x144 (Game Boy)","baseline_px":8,"margins":"8-16 px; UI boxes snap to tiles","rules":["everything lands on whole pixels at integer scale (3x, 4x on 1080p)","dialog box at the bottom, 3-4 lines","menus are vertical lists with a hand or triangle cursor","HUD in the top rows: hearts, score, timer"]}
shape: {"radius":"0; corners are cut by one pixel to suggest rounding","stroke":"1-2 px solid borders, double-line frames","shadow":"hard offset, 1-2 px","imagery":"sprites 8x8 to 32x32, tilemaps, parallax layers"}
texture: "dithering in checkerboard or Bayer patterns (sourced), flat colour areas, no anti-aliasing on edges"
motion: {"language":"stepped, frame-based","timing_ms":[67,133,250],"eases":{"enter":"steps(4)","move":"steps(8)","exit":"steps(3)"},"entrances":["menu boxes grow in 4 steps from centre","text types in at 30-45 chars/s","cursor bob 2 px at 4 Hz","screen wipe iris, 8 steps"],"camera":"locked 2D; scroll in whole pixels; shake in 2-4 px offsets","signature":"quantised motion: sprites move on 2-3 animation frames at 8-12 fps while the screen runs at 60"}
space: {"2d":"native","3d":"voxel or low-poly 3D rendered at 256x224 then nearest-neighbour upscaled; isometric tile worlds; Mode 7-style tilted plane (SNES, sourced)"}
good_for: ["games, dev tools with a playful voice, retro-themed launches", "indie music or lyric videos", "gamified data or progress stories"]
not_for: ["luxury, healthcare, serious finance", "photo-led stories", "anything needing soft gradients"]
blends_with: ["terminal-crt", "vhs-analog", "vaporwave-and-web-nostalgia", "cassette-futurism"]
clashes_with: ["frutiger-aero", "y2k-chrome", "swiss-international"]
cheap_tells: ["a pixel font at a non-integer size, or smoothed text", "vector shapes and soft shadows next to pixel text", "gradients and blur between pixel elements", "neon purple/cyan grid labelled 'retro gaming'", "mixed pixel scales (a 2x sprite next to a 3x font)", "full 24-bit palette with a pixel font on top", "smooth tweened movement for pixel sprites"]
verified: {"non_wikipedia":0,"colours":"partial","colour_images":[],"grid":"sourced","timings":"proposed","sources_fetched":5,"recipes":"aligned","edited":"2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Super_Nintendo_Entertainment_System", "https://en.wikipedia.org/wiki/Dither", "https://en.wikipedia.org/wiki/Pixel_art", "https://en.wikipedia.org/wiki/Bitmap_font", "https://en.wikipedia.org/wiki/List_of_video_game_console_palettes"]
tags: ["pixel-art", "8-bit", "16-bit", "nes", "snes", "game-ui", "bitmap-font", "dithering", "tile-grid", "press-start-2p", "silkscreen"]
---
## What it is
Console game UI of the 8- and 16-bit era is defined by hardware limits: a small palette, tile-based graphics, a fixed low resolution and bitmap fonts. The nesdev wiki documents the NES palette as 64 six-bit values (hue and brightness), of which 52-54 are usable depending on the PPU variant, arranged as four background palettes and four sprite palettes of four colours each, where entry 0 is transparent. The SNES offered 256 x 15-bit colour generator RAM entries (15-bit colour space of 32,768 colours), resolutions of 256x224, 512x224 and 512x448, and Mode 7 for simulated 3D perspective (Wikipedia). Pixel art as a practice is pixels as the only building block, with deliberate dithering, manual anti-aliasing and constrained palettes (Wikipedia).

## The rules that make it this and not something else
- One pixel size. Pick a native resolution (256x224 or 320x180 at 6x for 1080p) and scale by an integer. Everything, text included, snaps to that pixel.
- Palette limits are visible: 4 colours per sprite, 16 per scene is a good ceiling; flat fills only.
- Dithering (checkerboard or ordered Bayer, which gives the cross-hatch, sourced) is how gradients and shadows are made.
- Bitmap type at its native cell. Press Start 2P is built on an 8x8 grid; Silkscreen is smaller; both look right only at integer multiples. Bitmap fonts "look best at their native pixel size" and enlarge badly (Wikipedia).
- UI vocabulary: dialog box with a typing reveal, menu list with cursor, hearts or bars for health, coin and score counters, level title cards, a "PRESS START" blink.
- Motion is on a coarse grid: sprite cycles of 2-4 frames, cursors that step, boxes that grow in whole-pixel steps.
- Corners are cut, never rounded.

## Tokens decoded
- Native size: 320x180 scaled 6x to 1920x1080 (integer). Alternative 240x135 at 8x. For authentic 4:3 use 256x224 at 4x (1024x896) centred.
- Palette, Game Boy ramp from Wikipedia's console-palette table: `#294139 #39594a #5a7942 #7b8210` (Pocket: `#181818 #4a5138 #8c926b #c5caa4`); for a colour UI the following 16 colours are a proposed set (not sourced): `#0f0f23 #1d2b53 #7e2553 #008751 #ab5236 #5f574f #c2c3c7 #fff1e8 #ff004d #ffa300 #ffec27 #00e436 #29adff #83769c #ff77a8 #ffccaa`. Use at most 4 of these in one UI element.
- Type: Press Start 2P at 16, 24 or 32 px; Silkscreen at 16 px for labels; both from Google Fonts (OFL). Use `font-smooth: never; -webkit-font-smoothing: none; image-rendering: pixelated` on any scaled canvas.
- Dialog box: 8 px double border (outer `#fff1e8`, inner `#1d2b53`), fill `#1d2b53`, corner pixels removed; 3 lines of 24 px text with 8 px line gap; blinking triangle at 4 Hz.
- HUD: top row 32 px tall; hearts 16 px, 2 px gaps; score right-aligned with leading zeros (e.g. `001250`).
- Dither pattern: 2x2 checkerboard (50%) and 4x4 Bayer matrix levels (25%, 75%) for shadows and sky gradients.
- Shadow: hard 2 px offset in the darker palette colour, never blur.

## Motion and camera
2D: all tweens use `steps()` eases or quantised values. Menu box open: `scale` from 0 in 4 steps over 133 ms, `steps(4)`. Text typewriter at 30-45 chars per second (use a timeline-driven integer index, deterministic). Cursor: y offset 2 px, 250 ms period, `steps(1)`. Screen transition: iris wipe built from a stepped clip-path or a stack of 8 black bars closing in 8 steps over 267 ms. Sprites: 3-frame walk cycles at 8 fps, positions rounded to whole pixels (`Math.round(x/6)*6` at a 6x scale). Scrolling snaps to whole native pixels. Screen shake: 3 offsets (+4, -3, +2 px) at 60 ms each. Holds are generous: 1-2 s on dialog so it can be read. Set `data-finish-blur="off"` on this scene's frame root so the film finish does not average the steps (the scene is then rendered from the centre sub-frame); use `steps(n)` eases and whole-pixel hold frames, and never `power*` tweens on the stepped layer.

3D (Rasan3D reading): pixel look in 3D means rendering small and scaling up with nearest-neighbour, or isometric voxel worlds.
- Low-res render: in `graph(k)` call `k.target("lo",{w:320,h:180,filter:"nearest",type:"byte",depth:true})`; render the scene into it (a `k.view("world",{scene,camera,target:"lo"})` if the world is a separate scene) and upsample in a `k.pass("pix",{at:"post",uniforms:{uPal:[...]},frag:...})` that samples `uTarget_lo` at `floor(vUv*vec2(320.,180.))/vec2(320.,180.)` (declared for you by the target name). Quantise with `r3Dither(c, floor(gl_FragCoord.xy/6.0), 4.0)` (levels, 6px blocks at 6x) from `#include <r3/color>`, and snap to the nearest palette entry in the pass. Bayer pattern: `r3Bayer4(floor(gl_FragCoord.xy/6.0))`.
- World: voxel-like boxes with `k.material("matte",{color})` flat-coloured, `k.rig("top-soft",{key:"#ffffff",fill:"#ffffff",intensity:0.8,shadows:false})`, `environment:"none"`, `toneMapping:"none"`; isometric camera: `lens:[[0,200]]` from a long distance, `pos` at 45 degrees yaw and 30 degrees elevation (`Rasan3D.orbit({center:[0,0,0],radius:60,height:34,from:45,to:45,t0:0,t1:1})`), `fstop` unset, `motionBlur:false`.
- Mode 7 reading: a large ground plane tilted away with a horizon, `lens:[[0,35]]`, camera height 1.2, forward drift at constant speed declared with `declare:{intent:{"linear-drift":"mode 7 road scrolls at constant speed by design"}}`; parallax backdrop layers stay 2D.
- Pose camera on whole tile steps (quantised key times, `"none"` ease keys) for the stepped feel; no bloom, `grain` 0.

## How to instruct a model to build it
Paste-ready (2D, HyperFrames):
```
Pixel game UI. Draw into a 320x180 <canvas> (or a div of that size) scaled with CSS transform: scale(6) and image-rendering: pixelated; page background #0f0f23.
Palette strictly: #0f0f23 #1d2b53 #fff1e8 #ff004d #ffec27 #00e436 #83769c. Font: Press Start 2P, only at 8px (native) so it renders at 48px after scaling, -webkit-font-smoothing:none.
Elements: a dialog box 288x56 at y=116, double border (#fff1e8 outer, #1d2b53 inner, corner pixels cut), text 'THE CRAWLER IS FASTER NOW.' typed at 36 chars/s via a timeline-driven integer;
a blinking ▼ triangle at 4Hz (steps(1)); HUD top: three 8px hearts #ff004d and score 001250 right aligned.
GSAP paused timeline: box grows in 4 steps (ease 'steps(4)', 133ms); text types after +200ms; cursor blinks; screen shake offsets (+4,-3,+2)px at 60ms each on the hit at t=2.4s.
No blur, no gradients except 2x2 checker dithering, no rounded corners, every x/y a multiple of the native pixel.
```
Rasan3D: isometric voxel scene via nearest-neighbour downsample pass, `lens 200`, matte flat colours, palette quantiser, no bloom.
Model notes: Claude tends to put smooth CSS gradients and 1.5x pixel text next to pixel art; require integer scale and palette lock. GPT-style models drift to purple neon; give the palette.

## Blending notes
- Carries: integer pixel grid, limited palette, stepped easing, dialog and HUD patterns.
- With terminal-crt: pixel UI inside a CRT frame with scanlines is a natural pair. With vaporwave-and-web-nostalgia: pixel icons on a Windows 95 field. With vhs-analog: footage of a game on a TV.
- Breaks: smooth tweens, glossy materials, any photographic imagery without quantising.

## Sources
- https://en.wikipedia.org/wiki/Super_Nintendo_Entertainment_System — 256x224/512x224/512x448, 15-bit colour, 256 on-screen colours, Mode 7 (fetched)
- https://en.wikipedia.org/wiki/Dither — ordered dithering, Bayer cross-hatch, error diffusion in limited palettes (fetched)
- https://en.wikipedia.org/wiki/Pixel_art — palette restriction, dithering, manual anti-aliasing, resolutions, isometric 1:2 (fetched)
- https://en.wikipedia.org/wiki/Bitmap_font — fonts look best at native size; nearest-neighbour scaling is jagged (fetched)
- https://en.wikipedia.org/wiki/List_of_video_game_console_palettes — Game Boy and Game Boy Pocket 4-shade hex ramps, GBC 8+8 palettes, SNES 15-bit (fetched)
- Blocked this session: nesdev.org PPU_palettes (403; the 64-entry and 4+4 palette figures are from the earlier read). No non-Wikipedia source this pass; the entry is weaker on that front. Proposed (not sourced): the 16-colour UI set, tile sizes at 6x, ms timings, 3D parameters.
