---
id: "metabolism-architecture"
name: "Metabolism (Japanese megastructure architecture)"
kind: "movement"
era: "1959-1972 peak, Tokyo and Osaka; built legacy to 1970s"
origin: ["Kiyonori Kikutake", "Kisho Kurokawa", "Fumihiko Maki", "Noboru Kawazoe", "Kenzo Tange (mentor and Expo 70 master planner)"]
palette: {"roles":{"canvas":"#d9d6cf","ink":"#2b2a28","accent":"#d4421e","signal":"#f2f0ea","steel":"#9aa0a3"},"logic":"raw concrete grey and galvanized steel as a quiet ground; one hot orange-red or white capsule colour as the replaceable unit; hex values are approximate, picked from period photographs by eye, unverified against any archive"}
type: {"display":{"family":"Helvetica / Akzidenz-Grotesk era sans plus Japanese gothic","free_alternative":"Inter Tight (OFL) for Latin; Zen Kaku Gothic New (OFL) for kana and kanji","weights":[400,700],"case":"mixed","tracking":-0.01},"body":{"family":"Zen Kaku Gothic New","free_alternative":"IBM Plex Sans (OFL)","weights":[400]},"rules":["technical-drawing annotation: small caps labels with leader lines","numbers as data: unit counts, years, dimensions","no decorative type; the diagram carries the voice"]}
grid: {"columns":12,"baseline_px":8,"margins":"wide, drawing-sheet margins","rules":["structural core plus plug-in module: a few tall vertical shafts and many small repeated cells","modules sit on a regular lattice but are visibly offset, rotated or missing to show growth","annotate with dimension lines, not captions"]}
shape: {"radius":"capsule cells have a round porthole; towers are plain cylinders and slabs","stroke":"1-2px technical line","shadow":"hard, raking sun; none on diagrams","imagery":"photographs of concrete and steel, cutaway axonometrics, speculative city diagrams (Marine City, Helix City)"}
texture: "board-formed concrete, galvanized rib panel, blueprint paper; film grain from 1960s-70s architectural photography"
motion: {"language":"constructive and incremental: things are added, swapped, replaced; nothing dissolves","timing_ms":[240,480,900,1600],"eases":{"enter":"power3.out","move":"power2.inOut","exit":"power2.in","snap":"back.out(1.2)"},"entrances":["module plugs into core on a slide","stack grows one unit per beat","unit unbolts and lifts out for replacement"],"camera":"slow axonometric orbit or locked elevation; isometric reveals of the lattice","signature":"the replaceable cell: one capsule lifts out, a new one slides in, the city keeps standing"}
space: {"2d":"native as elevation and axonometric diagram","3d":"strong: instanced capsules on a core, orthographic or long-lens camera, hard sun"}
good_for: ["infrastructure, platforms, modular products, systems that grow by adding units", "urban, housing and real-estate explainers", "upgrade and replacement narratives"]
not_for: ["warm handmade consumer brands", "anything that must feel soft or organic-curvy"]
blends_with: ["swiss-international", "blueprint-technical-drawing", "brutalist-web", "soviet-space-age"]
clashes_with: ["art-nouveau", "victorian-letterpress-wood-type", "arts-and-crafts-morris"]
cheap_tells: ["a futuristic-city render with neon and no structural logic", "capsules all identical and perfectly aligned: no sign of growth, replacement or wear", "pastel colours; the real thing is concrete and steel", "generic sci-fi spaceship greebles instead of a core-plus-plug-in system", "no scale cues: no dimension lines, no human figure"]
sources: ["https://en.wikipedia.org/wiki/Metabolism_(architecture)", "https://en.wikipedia.org/wiki/Nakagin_Capsule_Tower", "https://en.wikipedia.org/wiki/Kiyonori_Kikutake", "https://en.wikipedia.org/wiki/Kisho_Kurokawa"]
---
## What it is
Metabolism was a Japanese architecture and urbanism movement of the 1960s, launched through the manifesto presented at the 1960 World Design Conference in Tokyo. Its members (Kikutake, Kurokawa, Maki, Kawazoe, with Tange as senior mentor) proposed cities and buildings that grow, renew and replace parts like living tissue, with permanent structural cores and short-lived plug-in units. The idea drew on the Ise Shrine's cycle of periodic rebuilding. Its best-known built object is the Nakagin Capsule Tower (1970-72, demolished from April 2022).

## The rules that make it this and not something else
- Two time scales in one object: a long-lived core (concrete shafts, space frames, cantilevers) and a short-lived, replaceable unit (the capsule, the pod, the cell).
- Growth metaphors: cities as organisms (Kikutake's Marine City 1958, Kurokawa's Helix City); diagrams show a tree, a spiral, a stack that can extend.
- Prefabrication made visible: identical cells with different positions, so repetition reads as a system rather than decoration.
- The Nakagin reference module is 2.5 m x 2.5 m x 4.0 m with one 1.3 m round window, fixed by four high-tension bolts so each can be removed alone; 140 capsules on two cores of 11 and 13 storeys (Wikipedia).
- Materials stay honest: board-formed concrete, galvanized rib-reinforced steel panels. Kurokawa himself stressed natural textures and no artificial colour (Wikipedia).
- Mega-scale composition: Tange's Expo 70 master plan and Kikutake's Expo Tower (Osaka 1970) show the space-frame and tower vocabulary.
- Mood is optimistic and technocratic; Kurokawa's capsule is explicitly a tea-room-sized dwelling.

## Tokens decoded
- Canvas `#d9d6cf` (concrete), ink `#2b2a28`, steel `#9aa0a3`, one accent `#d4421e` used only on the replaceable unit. Approximate, unverified.
- Display type: Inter Tight 700, sentence case, tracking -0.01em; labels Zen Kaku Gothic New 400 at 0.75rem with leader lines. Numbers set large when they are the point (140 capsules, 25 years).
- Grid: 12 columns, 8px baseline, drawing-sheet margins 6% of the short side; elevations centred on a vertical core.
- Lines: 1.5px technical strokes, dimension ticks 8px, round porthole drawn as a circle 52% of the capsule width (the real ratio is 1.3 m over 2.5 m, a 0.52 ratio).
- Imagery: cutaway axonometric, raking-sun concrete photography, no gradients.

## Motion and camera
2D:
- Core draws first: vertical lines wipe up 900ms `power2.inOut`.
- Units plug in with a 240ms slide on `power3.out`, stagger 70ms per unit from bottom to top; a tiny `back.out(1.2)` settle of 3px marks the bolt-on.
- Replacement beat: one unit translates out 180px over 480ms `power2.in`, a new unit enters 480ms `power3.out`; hold 600ms.
- Dimension lines and numbers appear by `scaleX` draw 360ms `expo.out` after the unit lands.
3D (Rasan3D, see references/3d.md): instance 140 capsule boxes (`k.material('brushed-metal')` with a rust-white or orange accent) on two concrete cylinder cores; hard key light low and raking at 25 degrees, `environment: "soft"` at low intensity. Camera: orthographic-feeling 135-200mm long lens, orbit 25 degrees over 6s `sine.inOut`, or a locked elevation. Seam: the 2D elevation diagram becomes the 3D lattice with `flat-to-depth`.

## How to instruct a model to build it
"Build a Metabolist-structure scene. A concrete core (two tall grey rectangles #d9d6cf with 1.5px #2b2a28 outlines) stands centred. 24 capsule modules, 2.5:1.6 rectangles with one round porthole at 52% width, plug in from the side one every 70ms, 240ms `power3.out`, offset in a staggered lattice, one unit in accent #d4421e. At 2.2s one capsule lifts out (180px, 480ms `power2.in`) and a new one slides in. Dimension lines and a single large number draw on after each landing (`scaleX` 360ms `expo.out`). Type: Inter Tight 700 and Zen Kaku Gothic New. No gradients, no neon, no glow. The camera is locked elevation or a slow 6s orthographic orbit." For Claude: give the unit grid as explicit coordinates; for GPT models, add "no futuristic city renders, no cyan glow".

## Blending notes
Carries well: the core-plus-replaceable-unit logic, dimension annotation, concrete and steel palette. Pairs with Swiss grids and blueprint drawing. Breaks if blended with ornamental or hand-drawn movements, or if the single accent colour is multiplied.

## Sources
- https://en.wikipedia.org/wiki/Metabolism_(architecture) — members, manifesto, Ise Shrine idea, built examples
- https://en.wikipedia.org/wiki/Nakagin_Capsule_Tower — capsule dimensions, bolting, materials, demolition date
- https://en.wikipedia.org/wiki/Kiyonori_Kikutake — Marine City, Expo Tower
- https://en.wikipedia.org/wiki/Kisho_Kurokawa — impermanence and materiality principles
- Unverified: exact hex values; Expo 70 master-plan details beyond Wikipedia summary.
