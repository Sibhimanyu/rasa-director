---
id: "pablo-ferro"
name: "Pablo Ferro (hand lettering, multi-image split screen, quick-cut montage)"
kind: "title-design"
era: "1960s-2000s, New York then Los Angeles"
origin: ["Pablo Ferro (1935-2018, Cuban-born, self-taught)"]
palette: {"roles":{"canvas":"#282828","footage_grey_high":"#e3e3e3","footage_grey_mid":"#808080","tca_ink":"#1b1112","tca_warm":"#534e45","tca_blue":"#6e8290","tca_red":"#9f0006","ink":"#f4f1e8"},"logic":"the palette is the footage (monochrome for Strangelove, muted period colour for Thomas Crown); titles are white or near-white hand lettering over it. No brand colour","evidence":"measured from the Art of the Title title-sequence stills (verified.colour_images), k-means 6, 2026-10-03: Strangelove frame is pure greys #a6a6a6 26%, #808080 23%, #616161 19%, #282828 15%, #e3e3e3 3%; Thomas Crown frame #000000 46%, #534e45 19%, #6e8290 12%, #1b1112 11%, #9f0006 2%. Lettering white #f4f1e8 is proposed. One frame each, from thumbnails."}
type: {"display":{"family":"hand-drawn lettering: grease pencil on glass (Dr. Strangelove), squat, long and lean","free_alternative":"Caveat Brush / Permanent Marker","weights":[400],"case":"mixed","tracking":-0.03,"note":"Both are single-weight handwriting faces and only a fallback: Ferro's lettering is varied per glyph, which a font cannot do. Trace your own SVG paths and stroke-animate. Rock Salt and Gaegu (300/400/700) also exist on Google Fonts."},"body":{"family":"none","free_alternative":"n/a","weights":[],"case":"upper","tracking":0},"rules":["letters vary in width and height inside one word","lines overlap and run into each other; letters may touch","type is placed so both lettering and picture can be read at once","the slip is kept (misspellings survived in Strangelove)"]}
grid: {"columns":"none; multi-panel when in split-screen mode","baseline_px":0,"margins":"edge-to-edge","rules":["split-screen panels as mattes on a 35 mm frame, checkerboard and tiling variants","panel count escalates with action intensity (66 images on one frame in the Thomas Crown polo sequence)"]}
shape: {"radius":0,"stroke":"hand stroke","shadow":"none","imagery":"documentary and found footage; aircraft refuelling, polo match"}
texture: "grease-pencil line wobble over film grain; optical-printer edges"
motion: {"language":"montage-driven; rhythm comes from cutting and tiling, not from tweening","timing_ms":[80,170,330,1000],"eases":{"enter":"steps(1) cuts","move":"sine.inOut for the swaying footage","exit":"steps(1) cuts"},"entrances":["hand lettering drawn on","panel multiplies into a grid","panel slides into a tile and others reflow"],"camera":"whatever the footage does; the graphics layer is flat","signature":"many simultaneous images stating an action from several angles, or loose hand letters floating over a slow, balletic shot"}
space: {"2d":"native","3d":"not a natural fit; at most a screen-in-room (the multi-screen idea as several flat panels in a virtual room, each a texture)"}
good_for: ["montage-heavy sizzles and trailers", "sport, action, caper tone", "satire and comedy titles with a human hand", "turning dense footage into rhythm"]
not_for: ["precise data graphics", "luxury minimal product films"]
blends_with: ["saul-bass", "kyle-cooper-imaginary-forces", "punk-xerox-zine", "swiss-international"]
clashes_with: []
cheap_tells: ["a marker font instead of lettering that varies glyph by glyph", "split screens with equal, evenly gridded panels all moving in sync", "panels without a reason: the multi-image must show more than one cut could (3 to 4 minutes of multi-image ran as about 15 minutes of straight cut, per Jewison)", "perfectly clean type over the footage"]
verified: {"sources_fetched": 4, "non_wikipedia": 3, "colours": "partial", "colour_images": ["https://www.artofthetitle.com/assets/sm/upload/2i/lo/5i/z5/dr_strangelove_t.jpg", "https://www.artofthetitle.com/assets/sm/upload/0y/cu/by/zv/tca_t.jpg"], "grid": "proposed", "timings": "proposed", "recipes": "aligned", "edited": "2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Pablo_Ferro", "https://www.artofthetitle.com/designer/pablo-ferro/", "https://www.artofthetitle.com/title/dr-strangelove-or-how-i-learned-to-stop-worrying/", "https://www.artofthetitle.com/title/the-thomas-crown-affair/"]
---
## What it is
Pablo Ferro (January 15, 1935 to November 16, 2018) was a self-taught animator (he learned from a Preston Blair book, per Art of the Title) who made more than 100 title sequences over about 50 years and was a pioneer of quick-cut editing and multi-image screens (Wikipedia). Two moves define him: hand lettering that treats type as drawing, and montage that divides the frame to show many moments at once. Dr. Strangelove (1964) and The Thomas Crown Affair (1968) are the two reference works.

## The rules that make it this and not something else
- Lettering is drawn, not set. Dr. Strangelove: grease pencil on glass, letters "squat, long and lean," influenced by graffiti, so the aircraft footage shows through (Art of the Title).
- Read lettering and picture at once. Kubrick to Ferro: "I don't know whether to look at the lettering or look at the plane. We have to see both at the same time."
- Keep the accident. Spelling errors ("Ficticious", "Base on the novel Red Alert") survived because the temporary frames were approved.
- Let the music and the footage do the editing. The Strangelove cut uses stock footage (a 1956 Boeing KC-135/B-52 refuelling reel) against "Try a Little Tenderness" arranged by Laurie Johnson; Ferro says the sway of the song matched the planes without edit adjustment.
- Multi-image is for density. Thomas Crown: Ferro worked frame by frame on a Moviola, with mattes, an animation camera and an optical printer; the polo match uses 66 images on one 35 mm frame; checkerboards and moving panels emphasise key beats. Jewison: 3 to 4 minutes of multiple image time conveyed close to 15 minutes of straight cut.
- Score is part of the mood: Michel Legrand and "The Windmills of Your Mind" give the split-screen a melancholic glamour.

## Tokens decoded
- Canvas: the footage. Overlay white #f4f1e8 (proposed) at 100 percent, lettering stroke 6 to 10 px at 1080p.
- Lettering: animate SVG paths with stroke-dashoffset. Draw each word from a traced hand sample, vary x-height between letters by ±20 percent, baseline wobble ±6 px. Google alternatives are a fallback only: Caveat Brush, Permanent Marker (OFL).
- Split screen: panels are rectangles on a 12 x 6 or irregular modular grid with 0 to 4 px gutters. Black gutters (#000000).
- No shadow, no gradient, no glow.

## Motion and camera
Sourced facts: the 66 images on one 35 mm frame, the Moviola and optical-printer process, the sway of the song matching the planes. Frame counts and ms values are proposed for a modern render.

2D (HyperFrames, craft.md vocabulary):
- The cut is the animation. Panels arrive by hard cuts spaced 4 to 10 frames (at 30 fps, 0.13 to 0.33 s), escalating with the beat: 1 panel, 2, 4, 9, 20 across a sequence; hold the biggest count 8 to 16 frames, then reduce. Panels are `<div>`s with `overflow: hidden`, each running its own `<video>` or still crop of the same action from a different angle or moment, gutters 0 to 4 px of `#000`. Place the cuts with `gsap.set` at beat times, no tweens.
- Lettering draw-on: SVG paths traced from a hand sample, `stroke-dashoffset` to 0 over 0.4 to 0.9 s per word, `power1.out`, then hold while footage runs. Vary x-height by 20 percent between letters and baseline by 6 px; slight overlaps. Stroke 6 to 10 px, `#f4f1e8`, no shadow. Keep a deliberate slip if it adds charm (the sources note two).
- Footage layer: if static, a drift of 2 to 4 percent scale over 6 s `sine.inOut`; if it sways with the music, leave it unmodified. Grade: neutral, high-contrast monochrome for Strangelove-like; muted period colour for Crown-like. Sound: the music edits; cut to its sway, do not retime it.
3D (Rasan3D, 3d.md sections 3, 6): panels as flat video planes on a virtual wall.
- Build: a `k.pxPlane(group, { x, y, w, h, texture })` per panel (composition-pixel placement on the plane the camera sees), textures from `k.image(url)` stills or a `THREE.VideoTexture` created in `build`; unlit so footage keeps its exact tones.
- Camera: locked, `lens: [[0, 50]]`; the only move allowed is a stepped dolly `pos: [[0, [0, 0, 10]], [4, [0, 0, 9], "power2.inOut"]]` (about 10 percent) as the count escalates. `post: { grain: 0.03 }`. Never orbit. Panel count changes in `pose` by `k.at(t, keys)` toggling visibility on beat frames (integer-frame, seek-safe).

## How to instruct a model to build it
"Pablo Ferro language. Titles are hand drawn: build each word as an SVG stroke path traced from a hand sample with uneven letter widths and heights, overlapping slightly, drawn on over 0.4 to 0.9 s (stroke-dashoffset, power1.out), then held. Place the lettering so the footage underneath stays readable, no shadow. For action beats switch to multi-image: hard-cut into 2, 4, 9, 20 panels with 0 to 4 px black gutters, each panel a different angle or moment of the same action (not the same shot repeated), counts ramping on the beat (supply beat times). No eases between panel counts; use cuts." Models tend to clean the lettering up into a font: forbid that and demand variance per glyph. (Carried from the earlier pass.)

## Blending notes
Carries: the human hand, the legibility rule against busy footage, escalating panel counts, no brand colour (the footage is the colour). Pairs with `saul-bass` for a graphic cut-out and montage hybrid, `kyle-cooper-imaginary-forces` and `punk-xerox-zine` for rougher hands. Breaks against strict `swiss-international` grids unless the split screen is the grid itself.

## Sources
- https://www.artofthetitle.com/title/dr-strangelove-or-how-i-learned-to-stop-worrying/ — "squat, long, and lean", grease pencil on glass, stock footage, the two spelling errors, music (fetched).
- https://www.artofthetitle.com/title/the-thomas-crown-affair/ — "66 images on a 35mm film", Moviola, optical house, Jewison on mattes/animation camera/optical printer, Singer Pavilion as the origin of the request (fetched).
- https://www.artofthetitle.com/designer/pablo-ferro/ — 100+ titles, taught himself from Preston Blair's book, early New York animation work (fetched).
- https://en.wikipedia.org/wiki/Pablo_Ferro — quick-cut and multiple-screen pioneer, Singer Pavilion film at the 1964 World's Fair, hand-drawn lettering credits (fetched).
