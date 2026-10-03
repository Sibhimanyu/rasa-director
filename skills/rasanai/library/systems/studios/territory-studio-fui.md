---
id: "territory-studio-fui"
name: "Territory Studio (fictional user interfaces and film screen graphics)"
kind: "studio"
era: "2010 to present, London (also San Francisco and New York)"
origin: ["David Sheldon-Hicks (founder)", "Nick Hill (designer)", "Territory Studio"]
palette: {"roles":{"canvas":"#061822","cold_cyan":"#127383","pale_signal":"#dbe6e7","deep_green":"#0d3b2f","oxblood":"#492524","market_mint":"#abd8b5"},"logic":"palette follows the in-world owner and status: elegant minimal monochrome for the powerful (Wallace in Blade Runner 2049), muted and burned-in for LAPD, vibrant mixed colour for market scenes (all per the Territory BR2049 page); 1980s game reds, oranges and blacks for Guardians Milano (Pond5). The measured colours are what the studio publishes for BR2049: deep teal and green on near-black, a pale cool white, one oxblood.","evidence":"measured from Territory Studio project-page images for Blade Runner 2049 (https://territorystudio.com/wp-content/uploads/2018/08/Films_BR2049_Th_002.jpg, TerritoryStudio_BR_B_00028.jpg, _LJO_00019a.jpg, _D_00036a.jpg, _M_00031.jpg, _DecAp_00072.jpg in the same folder), k-means 5-6, 2026-10-03. Mapping of file codes to factions is NOT stated by the source, so roles are named by colour, not by owner. Amber #e08a1e for degraded low-status screens and 1980s red #d8341a are proposed, not measured."}
type: {"display":{"family":"project-specific; technical sans, monospaced readouts, bespoke glyphs","free_alternative":"IBM Plex Mono / JetBrains Mono / Space Grotesk / Chakra Petch / Rajdhani","weights":[300,400,500],"note":"project-specific faces and bespoke glyph sets are the norm; these are OFL stand-ins on Google Fonts. JetBrains Mono and Space Grotesk have a wght axis: tween 300 to 500 for emphasis","case":"upper for labels","tracking":0.06},"body":{"family":"monospace","free_alternative":"IBM Plex Mono","weights":[400],"case":"upper","tracking":0.08},"rules":["type size reads at a glance on camera; hero screens carry one narrative point","labels small, numeric data tabular","modular components so screens can be varied quickly"]}
grid: {"columns":"modular, panel-based","baseline_px":4,"margins":"tight with generous empty zones for performance","rules":["ambient screens vs hero screens: hero screens communicate one narrative point in a brief moment","UI timing, position and hierarchy support the actor's performance","modular frameworks to meet production schedules"]}
shape: {"radius":0,"stroke":"1 to 2 px hairlines, dots, triangles, crosshairs","shadow":"none or glow","imagery":"grapefruit macro for neural scans, IKEA-manual blueprints for Ex Machina, volumetric holograms, microfiche and e-ink for BR2049"}
texture: "grubby but beautiful: layered textures, ghosting, warping, colour degradation on low-status tech; 'as soon as anything got too clean, or too fine, it was instantly going in the wrong direction' (production designer Andrew Popplestone, Engadget)"
motion: {"language":"state-machine: initial, action, loop","timing_ms":[120,300,800,2000],"eases":{"enter":"power2.out","move":"steps or power1.inOut","exit":"power2.in"},"entrances":["boot sequences","data reveal triggered by an actor's action","looping ambient state"],"camera":"screens are photographed live on set, camera is the film's","signature":"each screen has initial, action and loop states so cast or crew can trigger them on set"}
space: {"2d":"native","3d":"volumetric holograms and photogrammetry for later work (Age of Ultron, Ghost in the Shell)"}
good_for: ["sci-fi and near-future worlds", "data, security, command-and-control", "product explainers with a cinematic HUD", "making abstract systems look believable"]
not_for: ["warm consumer and lifestyle", "print-like editorial looks"]
blends_with: ["elastic-title-design", "manvsmachine", "terminal-crt", "cassette-futurism", "blueprint-technical-drawing"]
clashes_with: []
cheap_tells: ["random spinning circles and hex grids with no data logic", "cyan-on-black Tron default for every world", "screens that do not tell you a narrative point in 3 seconds", "every screen at the same cleanliness (status should show in degradation)", "text that is lorem ipsum visible on camera"]
verified: {"sources_fetched":5,"non_wikipedia":5,"colours":"partial","colour_images":["https://territorystudio.com/wp-content/uploads/2018/08/Films_BR2049_Th_002.jpg","https://territorystudio.com/wp-content/uploads/2018/08/TerritoryStudio_BR_B_00028.jpg","https://territorystudio.com/wp-content/uploads/2018/08/TerritoryStudio_BR_LJO_00019a.jpg","https://territorystudio.com/wp-content/uploads/2018/08/TerritoryStudio_BR_D_00036a.jpg","https://territorystudio.com/wp-content/uploads/2018/08/TerritoryStudio_BR_M_00031.jpg","https://territorystudio.com/wp-content/uploads/2018/08/TerritoryStudio_BR_DecAp_00072.jpg"],"grid":"proposed","timings":"proposed","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://territorystudio.com/","https://territorystudio.com/project/blade-runner-2049/","https://scifiinterfaces.com/2020/06/23/scifi-interfaces-qa-with-territory-studio/","https://www.hudsandguis.com/home/2018/blade-runner-2049","https://www.engadget.com/2017-10-20-designing-the-technology-of-blade-runner-2049.html"]
---
## What it is
Territory Studio is a London-founded design studio (2010) whose services, per its own site, span screen graphics, design and VFX, title design, creative advertising, gaming, experiential and digital products. Its fictional user interface (FUI) work builds screens that are story tools: shot live on set, readable by a lens, coded by the status of whoever owns them. On Blade Runner 2049 it joined the art department early, worked across 15 sets and delivered over 100 assets for on-set playback (Territory project page). Treat FUI as a design language for any film that must make a system look real and consequential.

## The rules that make it this and not something else
- Visual language first: "the visual language is the first thing we tackle and once approved, that sets the design aesthetic across an asset package" (Territory, SciFi Interfaces Q&A).
- Hero screens explain a plot point in about 3 seconds; ambient screens only need visual coherence (same Q&A).
- Modular frameworks ("plug and play" components), widgets automated for animation and transitions, then refined per story beat.
- Status shows in the interface. BR2049 (HUDS+GUIS, Engadget): Wallace is the most elegant and minimal (sparse dots and triangles); LAPD is "clunky and gritty", chunky blue-tinted monitors; K's Spinner is dilapidated. Market scenes use vibrant mixed-script colour (Territory page).
- Do not reference other sci-fi; reinvent. Territory's BR2049 constraint, as quoted by Popplestone in Engadget: "we don't have digital-based technology", so e-ink, microfiche, projector and lens distortion, microscope and macro imagery. "Grapes and grapefruits, eyeballs and bone were dissected, magnified, photographed and scanned to create organic abstraction" (Territory page).
- Each screen has three states, initial, action and loop, so cast and crew can trigger it on set (HUDS+GUIS).
- Design for the lens: "Does it have the detail for a close lens? And can you go wide, blur it out, and still read it?" (Popplestone, Engadget). A screen must survive both an ECU and a defocused wide.
- Tools named by HUDS+GUIS: Photoshop, Illustrator, After Effects, Cinema 4D, ZBrush.

## Tokens decoded
- Measured palette (Territory BR2049 images): near-black teal #061822 as canvas, cold cyan #127383 and deep teal #183f4f for UI fields, pale cool white #dbe6e7 for text and lines, deep green #0d3b2f for the green-world screens, oxblood #492524 as the one warm. Market-scene mint #abd8b5. Note these are teal-and-green, not Tron cyan on black.
- Proposed (not measured): amber #e08a1e for degraded low-status screens, #d8341a for 1980s game screens.
- Type: IBM Plex Mono 400 for readouts, 11 to 14 px at 1080p, `font-variant-numeric: tabular-nums`, uppercase labels at +0.06em; one display line in Space Grotesk 500, or Chakra Petch for a harder technical voice. Stand-ins: the studio draws bespoke glyphs.
- Lines: 1 px hairlines at 40 to 60 percent, 6 to 8 px dots, small triangles and crosshair ticks (proposed from the Wallace description).
- Degradation (low status): noise 6 to 12 percent, 2 px scanlines at 8 percent, RGB split 2 to 6 px, a rare 1-frame warp (vocabulary "scanlines / CRT", "RGB split"; values proposed).
- Grid: modular panels on a 4 px base (proposed); empty zones left for the actor.

## Motion and camera
2D (HyperFrames, paused GSAP timeline, no CSS animation):
- Initial: hairlines draw on with DrawSVG (`strokeDashoffset` length to 0) 0.3-0.6 s `power2.out`, labels typed with `steps(n)` at 12-18 chars/s.
- Action: one trigger, one change: a number counts to its value on `expo.out` under 1.5 s, a region's clip-path opens, a row highlights. Readouts update on `steps(6)`.
- Loop: seeded pulse 2-4 s `sine.inOut`, moving only data, never layout.
- Hero screen: one number or shape at 12 percent of frame height, landed at 1.0 s, held 1.5 s (proposed, from the 3-second rule).
- Camera: shoot the screen like a prop. Focus zoom 1.0 to 1.8x in 0.7 s `power3.inOut` onto the active region, rack focus (blur 0 to 8 px) between panels, handheld micro-shake 1-3 px on a screen-in-environment shot. Lens-distortion treatment: SVG `feDisplacementMap` radial map, scale 5-12.
- Sound: soft tonal ticks on state changes, a low hum bed; no whooshes (proposed).

3D (Rasan3D). A hologram or screen in space: build slices as an `InstancedMesh` of planes (raw three.js via `k.THREE`), `k.material("emissive", { color })` at low intensity so only the accent blooms (`post: { bloom: { strength: 0.6, threshold: 1.15 } }`), or points from `k.surfacePoints(mesh, 40000, seed)` as an `unlit` cloud that resolves onto the form. Camera `lens` 35-50 mm, `pos` keys with a 6-10 degree yaw over 4 s on `sine.inOut`, `fstop: 2.8` with `focus` keyed to move from the foreground UI to the screen. Hard text stays DOM: `k.pinDom(el, { at: slab, width, face: "object", px: [w, h], offset: [0, 0, 0.06] })` on a `k.panel` slab, so type is crisp and in perspective. Degrade in a post pass: `k.pass("fui-degrade", { at: "post", frag })` using `#include <r3/post>` (`r3Chroma`, `r3Scanlines`, `r3Grain` with `uFrame`), strength driven by a uniform function `(t, k) =>` so low-status screens are dirtier. Photogrammetry-like organic forms need a real mesh via `k.addon("loaders/GLTFLoader.js")`.

## How to instruct a model to build it
Paste-ready: "Territory-style FUI. First name the screen's owner and status and write the rule: powerful = minimal monochrome #dbe6e7 on #061822, sparse dots and triangles, no clutter; low status = muted teal #183f4f with ghosting, 2-6 px RGB split, noise 6-12 percent, scanlines. Each screen has three states on the paused timeline: initial (draw-on), action (one trigger, one change), loop (seeded, data only). Hero screens make one narrative point readable in 3 seconds: one number or shape at 12 percent of frame height. Type IBM Plex Mono 400 uppercase labels at 0.06em with tabular numerals, hairlines 1 px at 50 percent. Add one organic abstraction (macro texture or noise-driven shape) so it is not a hex grid. The screen must read both at ECU and defocused wide. Plausible labels and units only, never lorem ipsum." Claude writes plausible data and units well; GPT-family models default to cyan hex grids and spinning circles, so name the colour logic and ban them.

## Blending notes
Carries: status-coded degradation, three states, narrative hero screens, readability under defocus. Mix with `elastic-title-design` (title world plus interface), `terminal-crt`, `blueprint-technical-drawing`. Breaks with warm lifestyle unless used as one small HUD detail.

## Sources
- https://territorystudio.com/ — service categories (fetched; the homepage exposes no project text).
- https://territorystudio.com/project/blade-runner-2049/ — 15 sets, 100+ assets, organic abstraction, faction colour strategy; images measured for palette (fetched).
- https://scifiinterfaces.com/2020/06/23/scifi-interfaces-qa-with-territory-studio/ — visual language first, hero vs ambient, modular frameworks (fetched).
- https://www.hudsandguis.com/home/2018/blade-runner-2049 — Wallace/LAPD/Spinner tiers, three states, tools (fetched).
- https://www.engadget.com/2017-10-20-designing-the-technology-of-blade-runner-2049.html — no digital tech constraint, e-ink and microfiche, blue-tinted LAPD, lens question (fetched).
Gaps: Behance gallery blocked (403); Pond5 and Wikipedia claims from the earlier draft (IKEA manuals, Milano palette) are not re-verified and are kept only as labelled in the palette.
