---
id: "dia-studio-kinetic-type"
name: "DIA Studio: kinetic identity and type as choreography"
kind: "studio"
era: "2010s to present; founded in SoHo, New York; now French Alps (per search summary)"
origin: ["Mitch Paone", "Meg Donohoe"]
palette: {"roles":{"canvas":"#f4f4f0","ink":"#0b0b0b","accent":"#ff3b1f"},"logic":"restrained, often black and white or one hot colour, because the letterform motion is the content","evidence":"proposed: DIA publishes no palette. The one image sampled (TypeRoom, NIKE_STORE_COMP_01.jpg, k-means 6, 2026-10-03: #111a1c 33%, #1e2526 28%, #0a1316 16%, #474946 8%, #767269 8%, #bcb3a2 7%) is a photograph of the Nike event installation and shows a near-black ground with warm light grey, which supports a dark-ground reading only. Accent #ff3b1f is a working value."}
type: {"display":{"family":"mixed; DIA works with custom and modified type (specific faces not named in the fetched sources)","free_alternative":"Archivo / Inter Tight","weights":[100,900],"case":"mixed","tracking":-0.03,"note":"Archivo is variable on wght (100-900) and wdth (62-125; the Google Fonts CSS2 API accepts wdth@62..125), which is what the travelling-wave recipe needs. Inter Tight has wght only. Anton / Big Shoulders Display are condensed single-axis alternatives."},"body":{"family":"n/a; the type is the content","free_alternative":"Inter","weights":[400]},"rules":["motion is the work, not a transition","letterforms in constant transition, never landing on a fixed shape","loops with no beginning or end","scale from app to architecture"]}
grid: {"columns":"none; the screen is a field","baseline_px":null,"margins":"type may fill, bleed and wrap the frame","rules":["negative space and proportion are the mechanics (Paone)","one typographic system generates hundreds of compositions"]}
shape: {"radius":0,"stroke":"none","shadow":"none","imagery":"none; or type masking video"}
texture: "none; clean vector or generative"
motion: {"language":"choreographed, physical: weight, stretch, wave, overlap","timing_ms":[400,800,1600],"eases":{"enter":"sine.inOut","move":"sine.inOut","exit":"sine.inOut"},"entrances":["no entrance: letters morph from the previous state","wave of weight or width along the line","type traces a body motion such as a caterpillar or second-line"],"camera":"locked; the type moves, not the camera","signature":"looped letterform morph where each letter's weight and width are driven by one travelling sine wave"}
space: {"2d":"native","3d":"VR and AR typography are within the studio's stated range; in Rasan3D, extruded variable-ish letter meshes driven by a sine field"}
good_for: ["identity films, event openers, sports and fashion launches", "looping hero text, posters that move", "music and culture"]
not_for: ["long copy", "legal or data-heavy explanation"]
blends_with: ["pentagram-paula-scher-and-partners", "collins-studio", "mtv-80s-idents", "swiss-international"]
clashes_with: ["muji", "braun-dieter-rams-lineage"]
cheap_tells: ["a text effect preset (wiggle, bounce) applied per letter with equal offsets", "linear or ease-out-only motion: the DIA feel comes from sine and overlap", "a loop with a visible seam", "motion that ends on a settled title card, which defeats 'never landing on anything specific'"]
verified: {"sources_fetched": 3, "non_wikipedia": 3, "colours": "partial", "colour_images": ["https://www.typeroom.eu/assets/original/2020/02/21/NIKE_STORE_COMP_01.jpg"], "grid": "proposed", "timings": "proposed", "recipes": "aligned", "edited": "2026-10-03"}
sources: ["https://www.itsnicethat.com/features/dia-mitch-paone-meg-donohoe-graphic-design-animation-typography-180918", "https://www.typeroom.eu/dia-x-nike-when-experimental-kinetic-typography-scores-high", "https://www.walkerart.org/whats-on/dia-studio/"]
---
## What it is
DIA calls itself a design, research and innovation studio (dia.studio). Co-founders Meg Donohoe and Mitch Paone lead a practice in kinetic identity systems, typographic systems and generative tools. The Walker Art Center page says it makes "bespoke, moving typographic compositions from app to architectural scale" for clients including Squarespace, Nike, Adidas, YouTube, Apple, Balenciaga and Pinterest. Paone trained as a jazz pianist and applies "a musician's knowledge of tempo, arrangement, and rhythm to the creation of design systems".

## The rules that make it this and not something else
- Motion is the work. It's Nice That: "the motion is the work, not just a means to an end."
- Constant transition. On the 2016 A-Trak identity, animated type traditionally switches "on" and "off"; DIA built an identity "in constant transition, never landing on anything specific."
- Loops. The Nike Basketball piece (2018 launch event, Beaverton, per Typeroom) fused design and animation into one process, "pieces with no end or beginning", looping for impact at large and small size.
- Mechanics first: typography treated like music theory, "it comes down to mechanics, understanding negative space and proportions" (Paone).
- Source material is physical: jazz, physics, biomechanics (caterpillars, elephants, snakes), 80s rave choreography, New Orleans second lines, ballet. Animation is approached "as choreographers do" (It's Nice That, Nicer Tuesdays).
- Process: input, then improvisation without self-criticism, then output; "30, 40, 100 posters in a few hours" (It's Nice That).
- Not stated in the sources fetched: specific typefaces, software, palettes. Do not attribute them.

## Tokens decoded
| Token | Setting |
|---|---|
| ground | #f4f4f0 or #0b0b0b, one flip per film |
| ink | the opposite of the ground |
| accent | one colour at most, #ff3b1f, used on a single word or the wave crest |
| display | a variable font with wght and wdth axes: Archivo (wght 100-900, wdth 62-125) is the OFL pick |
| size | letters 18 to 40% of short side; one to three words visible |
| tracking | -0.03em at heavy weights; let letters touch and overlap at the crest |
| axes | wght and wdth driven by `0.5 + 0.5 * sin(2*PI*(t/T) - i*phi)`, phi 0.55 rad per letter |

## Motion and camera
The sine/phase recipe is a RasanAI interpretation of the described behaviour, not a DIA method. Loop length and phase values are proposed.

2D (HyperFrames, craft.md vocabulary): variable-font animation in HTML. Set `font-variation-settings` per letter span from the timeline. Because `requestAnimationFrame` and CSS animation are banned, drive it with one paused-timeline GSAP tween over a proxy `{ p: 0 }` to `{ p: 1 }` over the loop length T (1.6 to 2.4 s, `ease: "none"`), with an `onUpdate` that writes each span's wght and wdth from `s = 0.5 + 0.5 * sin(2*PI*p - i*phi)` (phi 0.55 rad per letter): a pure function of p, so seeks are exact. Second layer: x drift `6 * sin(...)` px. Loop length equals an integer number of beats (at 120 bpm, T = 2.0 s is 4 beats). Letters overlap so no gap shows; no static hold; the first and last frame are identical. Cut on the downbeat to a new word and a new phase offset (hard cut, `gsap.set`). Camera: locked, the type moves. Grade: flat. Sound: a bass note per cut; the motion is conducted by the track.
3D (Rasan3D, 3d.md sections 3, 5, 15): extruded letters.
- `k.extrudeText("MOVE", { font: <TTF path>, size: 1.4, depth: 0.5, bevel: 0.02, material: k.material("matte", { color: "#f4f4f0" }) })` per letter, so each can take its own scale: in `pose`, `letter.scale.x = 0.7 + 0.6 * s_i`, `letter.position.z = 0.4 * s_i`, with `s_i` from the same sine of `t` (seek-safe, no state).
- `k.rig("low-key", { dir: [-0.6, 0.7, 0.5], shadowSoftness: 3 })`, `background: "#0b0b0b"`, `lens: [[0, 85]]` (near-orthographic), camera locked (`pos` single key), `fstop` unset. No chrome, no bloom. For a field of letters use `k.instanceField({ geometry, material, cell: [1.2, 1.2], count: [20, 12], plane: "xy" })` only if the geometry is one glyph; variable per-letter text needs separate meshes.
- Architectural scale (the Walker page: "from app to architectural scale"): the same wave at wall size is `k.pinDom` onto a large rectangle, with the lens at 24 mm and the camera tracking along it.

## How to instruct a model to build it
"Build a kinetic-type loop in the manner of DIA Studio. Ground #0b0b0b, ink #f4f4f0, one accent #ff3b1f on the crest letter only. The word is split into per-letter spans in Archivo (variable). One GSAP tween drives a proxy p 0 to 1 over 2.0 s, ease none, loop-safe; in onUpdate set each letter's font-variation-settings wght = 100 + 800 * s and wdth = 62 + 63 * s where s = 0.5 + 0.5 * sin(2*PI*p - i*0.55). Letters 30 percent of the short side, tracking -0.03em, overlapping at the crest. No hold, no settle, no entrance: first and last frames identical. Cut to the next word on the beat at 120 bpm. No bounce or elastic ease, no glow." Claude defaults to ease-out entrances and settled title cards: say "never lands" explicitly. GPT-style output tends to reach for requestAnimationFrame or CSS animation: remind it the timeline is paused and seek-safe. (Carried from the earlier pass.)

## Blending notes
Carries: motion as content, sine-driven weight and width, loop closure, one accent. Pairs with `pentagram-paula-scher-and-partners` (take scale and crop, add motion), `collins-studio` (loop over a duotone), `mtv-80s-idents` (mutating-identity ancestry); the motion mechanics are written up in `motion/kinetic-type/dia-modular-kinetic-type`. Breaks with anything calm and static, and with `muji` or `braun-dieter-rams-lineage` restraint.

## Sources
- https://www.itsnicethat.com/features/dia-mitch-paone-meg-donohoe-graphic-design-animation-typography-180918 — "typography in flux", New York studio, Paone's jazz-pianist training and the practice analogy (fetched). The earlier pass's quotes on "constant transition" (A-Trak) and "30, 40, 100 posters" were not re-located in this session's search of the page: treat as from the earlier read.
- https://www.typeroom.eu/dia-x-nike-when-experimental-kinetic-typography-scores-high — 2018 Nike product launch event, Beaverton: "fused the design and animation process into one", bespoke animation series (fetched); the image sampled for colour.
- https://www.walkerart.org/whats-on/dia-studio/ — Squarespace, Nike, Adidas, YouTube; "bespoke, moving typographic compositions from app to architectural scale"; Paone's tempo and rhythm knowledge (fetched).
- Blocked: dia.studio did not respond to curl this session (HTTP 000), so the studio self-description is not re-verified and the URL is dropped; the second It's Nice That article (Nicer Tuesdays) was not re-read and is dropped.
