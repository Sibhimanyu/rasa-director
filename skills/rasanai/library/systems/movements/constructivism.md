---
id: "constructivism"
name: "Russian Constructivism"
kind: "movement"
era: "1915-1934, Russia and early USSR"
origin: ["Vladimir Tatlin", "Alexander Rodchenko", "El Lissitzky", "Gustav Klutsis", "Varvara Stepanova"]
palette: {"roles":{"canvas":"#e1dbca","ink":"#272322","red":"#d20e0c","paper_shadow":"#d0c4b6","mid":"#73645a","cold_alt":"#467c81","ochre_alt":"#cf8625"},"logic":"red, black and aged paper; red is political and structural, never decoration. A cold teal and one ochre appear in Klutsis photomontage as the single secondary colour","evidence":"canvas/ink/red measured from El Lissitzky Beat the Whites with the Red Wedge (https://commons.wikimedia.org/wiki/Special:FilePath/Beat_the_Whites_with_the_Red_Wedge.jpg?width=400), k-means 6, 2026-10-03: #e1dbca 46%, #272322 22%, #d20e0c 9%, #73645a 6%. teal and ochre measured from Klutsis Soviet Power plus electrification 1929 (Commons), k-means 6, 2026-10-03: #467c81 28%, #cf8625 10%. The scanned paper is yellowed: treat canvas as aged stock, a clean #f4f1ea is a proposed brighter variant."}
type: {"display":{"family":"heavy grotesque and slab, constructed hand-lettering","free_alternative":"Anton / Oswald / Archivo Black / Bebas Neue","weights":[400,700],"case":"uppercase","tracking":0,"note":"Anton and Bebas Neue and Archivo Black ship one weight (400); Oswald is variable wght 200-700, so tween wght 400 to 700 for a punch. Archivo has wdth and wght axes (wdth 62-125) for condensed-to-wide slams."},"body":{"family":"grotesque","free_alternative":"Archivo","weights":[500],"tracking":0},"rules":["type rotated 90 or 45 degrees","bold rules and blocks as typographic elements","words set on diagonals","uppercase for slogans"]}
grid: {"columns":"none; diagonal axes","baseline_px":null,"margins":"bleeds, cropped elements","rules":["diagonal composition dominates","asymmetric tension","type and image interlock","photomontage layers overlap"]}
shape: {"radius":0,"stroke":"thick bars, wedges, circles","shadow":"none","imagery":"photomontage, cropped faces, extreme angles (low or high), hands, megaphones, machinery"}
texture: "halftone photo, flat spot colour, rough print edge"
motion: {"language":"urgent, diagonal, mechanical","timing_ms":[150,300,500],"eases":{"enter":"power4.out","move":"power3.inOut","exit":"power2.in"},"entrances":["wedge slams in on a diagonal","type slides on a 45 degree axis","cut-in with 2-frame hold"],"camera":"tilted 10-30 degree Dutch angle, push-ins on a diagonal","signature":"a red wedge or bar cuts the frame; type rotates 90 degrees to run vertically"}
space: {"2d":"native","3d":"possible as stacked tilted planes and scaffolding (Tatlin's tower lineage); flat unlit, high contrast"}
good_for: ["manifestos, campaigns, calls to action", "sports, labour, protest, launches with an enemy to beat", "music with aggressive tempo"]
not_for: ["calm wellness", "luxury", "children"]
blends_with: ["bauhaus", "polish-poster-school", "de-stijl", "soviet-space-age"]
clashes_with: ["memphis-milano", "push-pin-studios"]
cheap_tells: ["red and black plus Cyrillic-looking fake letters (backwards R) as the whole idea", "centred headline over a red circle", "diagonals with no underlying structure", "propaganda cliches without a message", "clean flat vector faces with no photomontage"]
verified: {"sources_fetched":5,"non_wikipedia":2,"colours":"measured","colour_images":["https://commons.wikimedia.org/wiki/Special:FilePath/Beat_the_Whites_with_the_Red_Wedge.jpg","https://commons.wikimedia.org/wiki/Special:FilePath/Klutsis_(1929)_Soviet_Power_plus_electrification.png"],"grid":"proposed","timings":"proposed","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Constructivism_(art)", "https://en.wikipedia.org/wiki/Aleksandr_Rodchenko", "https://en.wikipedia.org/wiki/El_Lissitzky", "https://www.tate.org.uk/art/art-terms/c/constructivism", "https://commons.wikimedia.org/wiki/File:Beat_the_Whites_with_the_Red_Wedge.jpg"]
---
## What it is
An austere branch of abstract art founded around 1915 by Tatlin and Rodchenko in Russia. Tate quotes the 1923 Lef manifesto: the object is treated as a whole, of no discernible style, "a product of an industrial order"; constructivism is "a purely technical mastery and organisation of materials". In graphic work that becomes bold lettering, saturated flat colour, angular compositions and photomontage, put to work for propaganda and social task. Wikipedia dates the movement 1915-1934 and Rodchenko's diagonal compositions and unusual camera angles are its photographic signature.

## The rules that make it this and not something else
- Diagonals carry the structure. Rodchenko's compositions emphasise them and cut superfluous detail; Lissitzky's Red Wedge drives into white forms along one.
- Geometry is the message, not a decoration: in Beat the Whites with the Red Wedge (1919) the red wedge is the victorious force. One dominant red shape per frame.
- Camera angles from above or below to delay recognition (Rodchenko's method: several shots of one subject from different viewpoints).
- Type is a structural part of the image: rotated 90 degrees, set on diagonals, cut by bars and rules, never a caption laid under a picture.
- Photomontage: cropped photographic fragments (face, hand, megaphone, machine) combined with flat colour fields.
- Every composition has an addressee and a verb (beat, build, vote, read). No ornament that does not serve it.

## Tokens decoded
- Colour measured (k-means 6) from the 1919 Lissitzky poster: canvas #e1dbca (46%, aged paper), ink #272322 (22%), red #d20e0c (9%), mid brown-grey #73645a (6%). From Klutsis 1929 photomontage: teal #467c81 and ochre #cf8625 appear as a single secondary colour. Rule: paper + ink + red, optionally one of teal/ochre; never both.
- Red area share about 9% in the original: it is a small shape that wins by contrast, not a red background. A red full-bleed field is a different (later, Soviet-propaganda) register.
- Display: Anton (weight 400 only) or Oswald 700, uppercase, tracking 0 to +0.02em; for slam animations Oswald variable `wght` 400 to 700 over 300ms. Archivo `wdth` axis (62-125) can run a condensed word wider on the beat. All are OFL on Google Fonts; the original lettering was hand-constructed, so a stock face is an approximation (said honestly in the brief).
- Layout: no column grid. Set one working axis at 30 degrees (proposed; the sources show diagonals, not a number) and align shapes, rules and type baselines to it or to its perpendicular. Bars and rules 24-60px at 1920 wide (proposed).

## Motion and camera
2D (HyperFrames, GSAP; all timings proposed):
- Wedge or bar enters along its own diagonal: `gsap.from(wedge,{x:-900,y:300,duration:.3,ease:"power4.out"})` then a 2-frame hold (66ms at 30fps) before the next element.
- Type slides along the 45 or 30 degree axis in 350ms `power3.out`; a headline rotates -90 to 0 over 400ms `power3.inOut`; stagger words 50-70ms.
- Hard cuts on the beat, 150-250ms per key word; no cross-dissolves. Beat accent: scale 1.04 in 120ms `power2.out`, back in 200ms.
- Halftone photo layers wipe in with a `clip-path: polygon()` whose edge runs on the diagonal.
- Camera: a tilt/Dutch roll of 10-30 degrees held through the shot (`rotation` on the world container), push-ins along the diagonal, never a centred zoom.
- Finish: this register is flat; if a layer is stepped or cut hard, set `data-finish-blur="off"` on that scene frame root so the film finish does not smear the cuts.

3D (Rasan3D; real API, parameters proposed): flat extruded slabs and a wedge as `k.svg(svgText,{depth:0.15,bevel:0})` or box meshes with `k.material("unlit",{color:"#d20e0c"})` on `k.material("matte",{color:"#272322"})` slabs, tilted 15-30 degrees and stacked on z, a single hard `k.rig("low-key",{dir:[-1,1.2,1],shadows:true})` for long cast shadows. Camera keys: `lens: [[0,24]]` (24-35mm, wide), `pos` rising along a diagonal over 2.5s `power2.inOut`, `roll: [[0,0],[2.5,-12,"power2.inOut"]]`, `shift` not used (verticals are meant to lean). Type on slabs through `k.text` or `k.pinDom` with `face:"object"`. `environment:"none"`, grain 0.03 in `post`. Tatlin-tower scaffold: `k.tube` with `radius:0.03` for a spiral, matte black.

## How to instruct a model to build it
Paste: "Constructivist poster language, 1919-1929 (Lissitzky, Rodchenko, Klutsis). Ground aged paper #e1dbca, ink #272322, ONE red #d20e0c shape, a wedge or bar, covering roughly 10% of the frame and entering along a 30 degree diagonal. No centred layouts. Headline in Anton or Oswald 700 uppercase, one line rotated 90 degrees, one line on the diagonal. Imagery as cropped halftone photo cut-outs (hand, face, megaphone) at a low or high angle, never full-colour. Motion: wedge slams in 300ms power4.out with a 2-frame hold, type slides on the axis 350ms power3.out, hard cuts on the beat, world container held at 12 degrees roll. No gradients, shadows, rounded corners or glows." Both Claude and GPT-class models default to a red circle behind centred text; ban it by name. Image models drift to Cyrillic-faked letters; use real words.

## Cheap tells
- Red and black plus backwards-R fake Cyrillic as the whole idea.
- Centred headline on a red circle; diagonals with no underlying axis; red as a full background.
- Clean vector faces with no photomontage or halftone; gradients, soft shadows, rounded corners.
- Propaganda cliches with no addressee and no verb.

## Blending notes
Carries well: the diagonal axis, red-as-one-shape, rotated type, montage. With Bauhaus it becomes cleaner and colder; with Polish posters it gains painterly image treatments; with de-stijl it loses the diagonal (de-stijl is orthogonal) so choose one. Avoid ornamental layers (Memphis, Push Pin). Hex values apply to the measured scan: for a film, keep canvas lighter only if the brief needs it, and say so.

## Sources
- https://en.wikipedia.org/wiki/Constructivism_(art) — dates 1915-1934, founders, principles, photomontage, expressive typography (fetched)
- https://en.wikipedia.org/wiki/Aleksandr_Rodchenko — diagonals, camera angles, photomontage method (fetched)
- https://en.wikipedia.org/wiki/El_Lissitzky — Red Wedge 1919, Proun (fetched)
- https://www.tate.org.uk/art/art-terms/c/constructivism — Lef 1923 manifesto wording, Tatlin/Rodchenko, suppression (fetched)
- https://commons.wikimedia.org/wiki/File:Beat_the_Whites_with_the_Red_Wedge.jpg — the 1919 image used for the colour measurement (fetched)
- Colour also measured from Klutsis (1929) Soviet Power plus electrification on Commons.
- Proposed (not sourced): the 30 degree axis, bar widths, every ms timing, 3D parameters.
