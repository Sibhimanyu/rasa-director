---
id: "vaporwave-and-anti-design-net-art"
name: "Vaporwave, net.art and early-web anti-design"
kind: "movement"
era: "mid-1990s net.art; 2010s vaporwave (Floral Shoppe, 9 Dec 2011)"
origin: ["Jodi", "Olia Lialina", "Vuk Cosic", "Alexei Shulgin", "Heath Bunting", "Macintosh Plus (Ramona Andra Langley)"]
palette: {"roles":{"canvas":"#0a0a14","pink":"#ff71ce","cyan":"#01cdfe","mint":"#05ffa1","violet":"#b967ff","yellow":"#fffb96","win95_grey":"#c0c0c0","win95_teal":"#008080"},"logic":"vaporwave: pink/cyan/violet pastels over a dark or gradient ground. Net.art: web-default colours, pure black on white, system blue links. The vaporwave hex set is the widely circulated community palette; unverified against a primary source."}
type: {"display":{"family":"Fullwidth Latin and Japanese characters; VT323/pixel faces; Times/Arial defaults for net.art; Windows 95 UI font (MS Sans Serif)","free_alternative":"VT323, Press Start 2P, DotGothic16, Noto Sans JP, Tinos/Arimo (OFL, Google Fonts); 'Silkscreen' for pixel UI","weights":[400],"case":"mixed or fullwidth caps","tracking":0.1},"body":{"family":"Times New Roman default (net.art) or monospace","free_alternative":"Tinos / Courier Prime","weights":[400]},"rules":["fullwidth text such as ＡＥＳＴＨＥＴＩＣ","browser-default blue underlined links in net.art","text is part of the interface fiction (dialog boxes, title bars)"]}
grid: {"columns":"none; floating windows","baseline_px":null,"margins":"windows overlap at arbitrary offsets","rules":["Windows 95 title-bar frames 2 px bevel","perspective checker grids receding to a horizon","frames and tables as layout (Lialina used HTML frames)"]}
shape: {"radius":0,"stroke":"2 px inset/outset bevel in UI; none elsewhere","shadow":"hard black drop shadow on windows 4 px","imagery":"Greco-Roman busts, palm trees, Memphis shapes, Windows 95 UI, anime stills, early 3D renders, VHS artifacts, Japanese text, mall and corporate-ad imagery"}
texture: "VHS noise, scanlines, JPEG artifacts, dithered GIFs, low-res upscale"
motion: {"language":"slow, looped, degraded; net.art: abrupt browser states, crashes, flicker","timing_ms":[200,900,4000],"eases":{"enter":"steps(6)","move":"sine.inOut","exit":"none"},"entrances":["window pops with title-bar drag","marquee scroll","GIF-like 8-12 fps frame loops","chroma-bleed RGB split on hit"],"camera":"slow drift through a checker grid; static and endless loops; sudden crashes and error dialogs","signature":"a slow-motion classical bust rotating on a pastel grid under scanlines, paired with a fake OS dialog"}
space: {"2d":"native","3d":"truly suited: low-poly busts, grid floor, sunset gradient, ortho or 24-35 mm; CRT and VHS pass in render graph"}
good_for: ["music, nostalgia, internet-culture and gaming stories", "ironic commentary on consumer tech", "net.art side: web-history or hacker narratives"]
not_for: ["serious B2B finance", "health", "anything that must feel contemporary and clean"]
blends_with: ["cassette-futurism", "vhs-analog", "y2k-chrome", "brutalist-web", "pixel-game-ui"]
clashes_with: ["swiss-international", "scandinavian-modern-design", "ukiyo-e-and-japonisme"]
cheap_tells: ["sunset gradient with a palm and nothing else", "mixing every 90s trope without an argument", "Japanese text that says nothing or is wrong", "neon outrun grid mistaken for vaporwave (a related but different look)", "using irony with no critique, which Wikipedia notes risks misrecognition"]
sources: ["https://en.wikipedia.org/wiki/Vaporwave", "https://en.wikipedia.org/wiki/Floral_Shoppe", "https://en.wikipedia.org/wiki/Net.art", "https://en.wikipedia.org/wiki/Olia_Lialina"]
---
## What it is
Net.art emerged in the mid-1990s using the internet as medium: Vuk Cosic, Jodi, Alexei Shulgin, Olia Lialina and Heath Bunting, organised through Nettime and Rhizome. Lialina's My Boyfriend Came Back from the War (1996) used black-and-white GIFs and HTML frames; Jodi explored errors and faux-code. Vaporwave grew out of 1980s-90s consumerism nostalgia; Macintosh Plus's Floral Shoppe (9 December 2011) set the blueprint with a Helios bust, pink tiles, Japanese text and the Twin Towers. Its imagery includes Greco-Roman statues, Windows 95 UI, VHS degradation, Memphis shapes, fullwidth type and palm trees (Wikipedia). Scholars read it as either sarcastic anti-capitalism or willing facilitation (Adam Harper).

## The rules that make it this and not something else
- Two sources fused: classical sculpture (permanence) and obsolete consumer-tech UI (ephemera).
- Palette is dusk: pink, cyan, violet, mint on dark or gradient ground.
- Interface as the fiction: title bars, dialogs, cursor, loading bars.
- Time is slowed or looped; sound-image mismatch is intentional.
- Net.art side: default HTML as material (frames, blue links, flicker), the browser as the canvas, errors as content.
- The aesthetic is about loss and a pre-9/11 corporate optimism (Wikipedia). Without a point of view it is only a skin.

## Tokens decoded
- Ground `#0a0a14`, pink `#ff71ce`, cyan `#01cdfe`, mint `#05ffa1`, violet `#b967ff`, cream `#fffb96`; Win95 grey `#c0c0c0` with 2 px bevels (white top-left, `#808080` bottom-right), teal desktop `#008080`.
- Fonts: VT323 (display/terminal), DotGothic16 for JP, Press Start 2P sparingly, Tinos for net.art default text. All OFL.
- Fullwidth: use Unicode fullwidth forms with letter-spacing 0.1em.
- Window: 4 px hard shadow `#000`, title bar 24 px tall gradient `#000080` to `#1084d0` (the classic Win95 look; unverified exact values).
- Grid floor: horizon at 55% height, 24 lines with perspective, line colour `#ff71ce` at 60%.

## Motion and camera
2D: windows pop in with `steps(6)` over 200 ms and settle; GIF-like loops at 10 fps (hold 100 ms); marquee scroll 80 px/s `none`; RGB split of 3-6 px on hits, 120 ms `power2.out`; scanline overlay as a repeating-linear-gradient moving 1 px/frame. Marble bust rotates 6-10 deg/s `none`. Camera: slow push 4% over 8 s `sine.inOut`; cut to an error dialog for 2 frames.
3D: Rasan3D scene with a low-poly bust (GLB via `GLTFLoader`) turning on a grid floor, camera 35 mm drifting along the floor, an emissive horizon sun (HDR `emissive`, only thing that blooms), a custom pass in the render graph for scanlines, chroma split and a 6-bit colour posterise; `unlit` materials, no realistic lighting.

## How to instruct a model to build it
"Vaporwave / early-web piece. Ground #0a0a14, accents #ff71ce, #01cdfe, #05ffa1, #b967ff. One classical bust or object as the hero, a perspective grid floor, 2-3 overlapping Windows 95 style windows (#c0c0c0 with 2 px bevels, 4 px hard shadow) carrying real text from the brief. Fullwidth type in VT323. Scanlines, 3-6 px RGB split on hits. Animate with steps(6) pops 200 ms, slow 6 deg/s rotation, hard cut to an error dialog. Needs a point of view: what is the nostalgia about? State it in one line." Claude over-polishes the windows; ask for roughness. GPT output tends to generic synthwave sunsets; say "not outrun, not neon red".

## Blending notes
- Carries: fake-OS dialogs, bust-on-grid, scanlines, steps eases.
- With brutalist web: strip the pastels, keep default HTML.
- With Swiss: only as a deliberate clash scene.
- Breaks: crisp contemporary UI, tight tracking, flat design.

## Sources
- https://en.wikipedia.org/wiki/Vaporwave: motifs, critical readings.
- https://en.wikipedia.org/wiki/Floral_Shoppe: 2011 release, cover imagery.
- https://en.wikipedia.org/wiki/Net.art: artists, characteristics, preservation.
- https://en.wikipedia.org/wiki/Olia_Lialina: 1996 work, GIF and frames, vernacular web.
- Unverified: palette hex (community values), Win95 gradient values, motion timings.
