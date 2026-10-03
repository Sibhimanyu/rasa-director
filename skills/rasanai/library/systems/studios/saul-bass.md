---
id: "saul-bass"
name: "Saul Bass (cut-paper title design and corporate identity)"
kind: "title-design"
era: "1955-1996, Los Angeles; titles for Preminger, Hitchcock, Scorsese; identities for Bell, United Airlines, AT&T"
origin: ["Saul Bass", "Elaine Bass", "Harold Adler (lettering, Golden Arm)", "John Whitney (spirals, Vertigo)"]
palette: {"roles":{"canvas":"#eba606","ink":"#0e0e0e","accent":"#bb3e21","paper":"#f2f1ed","ground_grey":"#8b8b8b"},"logic":"two to three flat colours per sequence, never a gradient; black and white for tension (Golden Arm, Psycho), one flat uniform grey ground for neutrality (Anatomy of a Murder titles), a poster-orange plus brick-red pair for the print campaign. Hot accent on the symbol only.","evidence":"canvas/accent/paper measured from the 1959 Anatomy of a Murder poster (Commons AnatomyMurder2.jpg, https://commons.wikimedia.org/wiki/Special:FilePath/AnatomyMurder2.jpg?width=400): k-means 6 gave #eba606 34%, #bb3e21 34%, #f2f1ed 22%, 2026-10-03. ink and ground_grey measured from a second Commons image of the same film (Anatomy_of_a_Murder_2.jpg, k-means 6: #0e0e0e 24%, #8b8b8b 13%, #313131, #5a5a5a, #bababa, #ededed); that file is a greyscale scan, so the grey is a stand-in for the uniform grey of the titles, not a measurement of the film frame. No film-frame colours were sampled (no frame source available); Psycho and Golden Arm are black and white per Art of the Title."}
type: {"display":{"family":"hand-cut and hand-drawn letters (Golden Arm lettering credited to Harold Adler), plain sans-serif credits (Psycho)","free_alternative":"Archivo Black / Anton","weights":[400],"case":"upper","tracking":0.02,"note":"Archivo Black and Anton ship in one weight (400) on Google Fonts. Neither is a cut-paper face; they give the blunt silhouette. For the credit sans use Work Sans 500 or Archivo (axes wdth, wght). Roughness comes from the shape layer (path jitter), never from a distressed font."},"body":{"family":"none: credits only","free_alternative":"Work Sans / Archivo","weights":[500],"case":"upper","tracking":0.06},"rules":["type is part of the image and moves with it, never laid over it","sans-serif credits enter and leave along straight rails (Psycho: bars bring titles in and take them out)","letters may be cut, rough, asymmetric; legibility comes from contrast, not polish","no drop shadows, no outlines, no glow"]}
grid: {"columns":"none; asymmetric field with one dominant diagonal or vertical axis","baseline_px":0,"margins":"loose; the graphic form sits off-centre and bleeds off-frame","rules":["one idea per frame","motion along strict axes: left, right, up, down, on, off (Psycho, per Art of the Title)","shapes assemble into a symbol that is the film's poster mark"]}
shape: {"radius":0,"stroke":"none or hand-cut edge","shadow":"none","imagery":"flat cut-paper silhouettes, rectangles, bars; arm, body, spiral, falling figure"}
texture: "cut-paper edges, slight stand-camera jitter; flat colour, no grain beyond film stock"
motion: {"language":"percussive, beat-locked, graphic","timing_ms":[160,330,660,1320],"eases":{"enter":"steps(1) cut or power4.out","move":"none (linear travel on a rail) or power2.inOut","exit":"power2.in"},"entrances":["bars slide on rails","cut-out pieces slide in and lock","shape morphs into the next shape","hard cut on the music count"],"camera":"locked-off animation stand; no perspective moves","signature":"a single graphic metaphor (arm, body fragments, bars, spiral) built and broken on the score's counts"}
space: {"2d":"native","3d":"only as flat unlit planes seen through a very long lens; a 2D look placed in 3D, never glossy"}
good_for: ["film or documentary titles with one strong metaphor", "psychological, thriller, noir tone", "brand lockups and logo stings that must read in one second", "explainers that need a single symbolic image per beat"]
not_for: ["warm consumer lifestyle", "data-dense dashboards", "anything needing photoreal depth"]
blends_with: ["swiss-international", "polish-poster-school", "kyle-cooper-imaginary-forces", "saul-bass-cutout-type", "paper-cut-and-papercraft"]
clashes_with: ["frutiger-aero", "y2k-chrome"]
cheap_tells: ["a retro filter on a normal layout and no single metaphor", "soft shadows or bevels on the cut-paper shapes", "type fading in on a centred slide", "motion on eased curves with no relationship to a musical count", "five ideas per frame instead of one", "paper texture overlay used to fake 'handmade' without the shapes being actually cut"]
verified: {"sources_fetched":6,"non_wikipedia":5,"colours":"partial","colour_images":["https://commons.wikimedia.org/wiki/Special:FilePath/AnatomyMurder2.jpg?width=400","https://commons.wikimedia.org/wiki/Special:FilePath/Anatomy_of_a_Murder_2.jpg?width=400"],"grid":"proposed","timings":"proposed","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://www.artofthetitle.com/designer/saul-bass/", "https://www.artofthetitle.com/title/anatomy-of-a-murder/", "https://www.artofthetitle.com/title/the-man-with-the-golden-arm/", "https://www.artofthetitle.com/title/vertigo/", "https://www.artofthetitle.com/title/psycho/", "https://commons.wikimedia.org/wiki/File:AnatomyMurder2.jpg"]
---
## What it is
Saul Bass (1920-1996) turned film credits from static cards into a short film that states what the picture is about. Art of the Title credits him with pioneering kinetic typography in title sequences and fusing graphic design with filmmaking. His sequences were made on an animation stand with cut paper, hand-drawn graphics and (for Vertigo) cel animation and live-action photography. The corporate identities of his later career (AT&T bell 1969 and globe 1983, per Art of the Title) use the same reduction: one form that reads in one second. Bass's own line on the work: "Elaine and I feel we are there to serve the film" (Art of the Title).

## The rules that make it this and not something else
- One graphic metaphor per sequence: a distorted, disjointed arm (The Man with the Golden Arm, 1955: bars coalesce into the arm, meant to convey "the distortion and jaggedness, the disconnectedness and disjointedness of the addict's life"), a body cut into puzzle pieces (Anatomy of a Murder, 1959), Whitney's Lissajous spirals (Vertigo, 1958), bars and sans-serif type (Psycho, 1960).
- Severe constraint. Psycho: black, white, bars that never intersect, and Bass's own vocabulary "on, off, left, right, up, down, black, white"; budget $21,000 (Art of the Title).
- Built to the score. Elmer Bernstein supplied "the counts" for Golden Arm; Herrmann's strings drive Psycho and Vertigo; Ellington scores Anatomy.
- Flat cut-paper on a uniform ground: Anatomy is cut-outs on a uniform grey, the body disassembled "like it is part of a puzzle". The idea is simple; "no high technology was needed" (Art of the Title).
- Mood and meaning, not decoration: Golden Arm was to be "spare, gaunt, with a driving intensity" (Bass, quoted there).
- Title and image are one object: letters drawn or cut in the same hand as the shapes.

## Tokens decoded
- Canvas: one flat ground per sequence. Black for tension (#0e0e0e measured from the Anatomy scan; use #000 for Psycho/Golden Arm), uniform mid grey for neutrality (proposed #8b8b8b; the Anatomy ground is grey per the source, hex unmeasured), or the print-campaign orange #eba606 with brick red #bb3e21 and paper #f2f1ed (measured on the 1959 Anatomy poster, which is a poster palette, not the title-sequence palette).
- Accent: one saturated flat on the symbol only (#bb3e21).
- Display type: Archivo Black or Anton (OFL, both single-weight 400), uppercase, tracking +0.02em. Credits: Work Sans 500, uppercase, +0.06em.
- Shapes: rectangles, bars, tapered limbs, circles; corner radius 0; edges slightly irregular if cut paper is claimed: an SVG path with 1 to 2 px of seeded jitter on each vertex.
- No shadow, gradient, blur, glow, bevel.

## Motion and camera
2D (HyperFrames, one paused GSAP timeline; beat times from `hyperframes beats`):
- Rail moves: bars cross 1920 px in 400-700 ms on `none`, enter on one edge and leave on the same rail; never cross each other.
- Cut-out pieces: `x`/`y` from off-frame, 160-330 ms `power4.out`, then hold still 330-660 ms; assembly of the whole figure 1.0-1.5 s. Land each settle on a beat (vocabulary: "hit point": align the tween's end to the beat).
- Exits: hard cut, or the same rail out. Cut, do not dissolve. Emphasis by a stepped 3-frame scale jump on the symbol (`steps(3)`), not a camera push.
- Camera: locked-off (vocabulary "locked-off": no world transform at any time). Shot size: ECU on the symbol for 0.6-1.5 s inserts, hard cuts.
- Sound: a percussive hit per cut, no whooshes; strings or brass with the counts (proposed).
All timings are proposed for a modern render; Art of the Title gives no frame counts.

3D reading (Rasan3D, honest: this is a flat look placed in 3D). The stage has no orthographic camera key, so flatten with a long lens: `camera: { pos: [[0,[0,0,60]]], target: [[0,[0,0,0]]], lens: [[0,200]] }`, no `fstop`, `motionBlur: false` for the stepped feel, `environment: "none"`, `post: {}` (no bloom, no grain). Build the figure from `k.svg(svgText, { width, depth: 0.02, bevel: 0, material: (c) => k.material("unlit", { color: c }) })` pieces on one plane; type via `k.extrudeText` or kept as DOM with `k.pinDom`. The Vertigo spiral: `k.tube((u) => [r(u) * Math.sin(a*u*TAU + ph), r(u) * Math.sin(b*u*TAU), 0], { radius: 0.03, segments: 800 })` with an `unlit` material, rotating in `pose` with `k.at`/`k.prog` (a Lissajous with integer a:b, which is Whitney's imagery as described by Art of the Title). No lights, no rig, no `emissive`: bloom would break the look.

## How to instruct a model to build it
Paste-ready: "Saul Bass title language. Name the single metaphor first (e.g. a body broken into seven flat pieces). One flat ground: black, uniform mid grey, or paper #f2f1ed; at most one accent #bb3e21 on the symbol. Shapes are flat vector cut-paper silhouettes, radius 0, 1-2 px path jitter, no shadow, gradient, blur, glow or texture overlay. Type is heavy uppercase Archivo Black, part of the composition, asymmetric, bleeding off an edge; credits in Work Sans 500 uppercase 0.06em, entering and leaving on straight rails (left/right/up/down) in 400-700 ms with ease `none`. Every move's settle lands on a beat (beat times in ms: ...). The camera never moves. Cut, never dissolve. One idea per frame." Claude tends to add soft eases and staggers: tell it `none`, `steps()` and no stagger on rails. GPT-family models tend to add paper texture and drop shadows: forbid both by name.

## Blending notes
Carries: single-metaphor discipline, flat colour, axis-locked motion, beat-locked cuts. Pairs with Swiss grids (credit sans), Polish poster school (symbolic flat imagery) and Kyle Cooper (same ancestry, inverted: Cooper roughens, Bass cleans). See `saul-bass-cutout-type` for the type motion. Breaks with glossy materials, depth of field or any light that implies a real camera.

## Sources
- https://www.artofthetitle.com/designer/saul-bass/ — kinetic typography claim, "there to serve the film" quote, filmography with years, AT&T logos (fetched).
- https://www.artofthetitle.com/title/anatomy-of-a-murder/ — paper cut-outs on uniform grey, puzzle body, Ellington (fetched).
- https://www.artofthetitle.com/title/the-man-with-the-golden-arm/ — animation stand, white bars on black, Bernstein's counts, Adler lettering, Bass's intent quote (fetched).
- https://www.artofthetitle.com/title/vertigo/ — Whitney Lissajous imagery, mixed media on an animation stand, Herrmann (fetched).
- https://www.artofthetitle.com/title/psycho/ — bars, "on, off, left, right, up, down", $21,000, Herrmann (fetched).
- https://commons.wikimedia.org/wiki/File:AnatomyMurder2.jpg — 1959 poster with Bass artwork, public domain; colours measured from it (fetched).
Gaps: no film-frame colour samples, no frame-count timings; not fetched: MoMA/Academy Bass archive.
