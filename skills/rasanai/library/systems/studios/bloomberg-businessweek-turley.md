---
id: "bloomberg-businessweek-turley"
name: "Bloomberg Businessweek under Richard Turley"
kind: "publication"
era: "2010-2014, New York (redesign 2010, Turley as creative director)"
origin: ["Richard Turley", "Josh Tyrangiel (editor)", "Christian Schwartz (Commercial Type)", "Berton Hasebe (Druk)"]
palette: {"roles":{"canvas":"#ffffff","ink":"#000000","accent":"fluorescent or saturated spot colour per issue","image":"hard-lit photography, clip-art, stock"},"logic":"strict black grotesque on a rigid grid with a layer of chaos on top; colour is a per-story shout (hot pink, yellow, red), not a fixed palette","evidence":"proposed: no source documents a palette and no cover image was sampled (Commons API rate-limited). Spot colours are chosen per story."}
type: {"display":{"family":"Druk (Berton Hasebe, Commercial Type) for headlines, plus Hasebe display-only condensed numerals","free_alternative":"Anton / Oswald","weights":[400],"case":"upper","tracking":0,"note":"Anton has a single weight (400) and is the closest free heavy condensed; Oswald (wght 200-700) gives a weight axis to tween. Neither is Druk: Druk Wide and Super weights have no OFL equal."},"body":{"family":"Neue Haas Grotesk (Schwartz revival of Miedinger, straight-legged alternate R) with Publico serif for text","free_alternative":"Inter Tight / Source Serif 4","weights":[400,500,700],"note":"Inter Tight is variable wght 100-900. Inter has no straight-legged R by default; leave it out and say so rather than faking it."},"rules":["Neue Haas Grotesk with the straight-legged alternate R throughout","chopped, stretched, overprinted type is allowed as illustration","very strict modular grid underneath (same type rules as Turley's Guardian work)"]}
grid: {"columns":"modular, rigid","baseline_px":8,"margins":"tight","rules":["structure first, then 'graffiti-ing the pages' on top","charts scaled to narrative merit, not to fit a hole","type can break the grid, the grid still exists"]}
shape: {"radius":0,"stroke":"none or heavy 6-12 px bars","shadow":"none","imagery":"provocative conceptual covers, stock and clip-art collisions, big single objects, absurd scale"}
texture: "glossy-print contrast, flat colour fields, occasional stencil (Neue Haas Grotesk Stencil)"
motion: {"language":"blunt, abrupt, comic","timing_ms":[80,160,400],"eases":{"enter":"steps(1) or power4.out","move":"power3.inOut","exit":"cut"},"entrances":["hard cut-in at full size","oversized numeral slams in","type scales up past the frame edge"],"camera":"locked, high-contrast; abrupt punch-ins","signature":"one absurd visual idea stated at full volume, with a deadpan headline"}
space: {"2d":"native","3d":"possible: oversized objects with glossy toy-like lighting for a cover-image joke; type as extruded slabs"}
good_for: ["financial or business stories that need a wink", "attention-grabbing editorial films, news-style explainers", "projects whose truth is serious but whose tone is irreverent"]
not_for: ["quiet luxury", "reassuring institutional communication", "children"]
blends_with: ["swiss-international", "the-economist-graphics", "postmodern-emigre"]
clashes_with: ["financial-times-graphics"]
cheap_tells: ["random chaos without the underlying grid", "Impact at 120 px instead of a proper condensed grotesque", "glitch filters and VHS noise dropped on as cheap 'edge'", "sexual jokes used as the whole idea (Wikipedia notes the controversy around some covers)", "no headline wit: the cover joke needs a precise, dry line"]
verified: {"sources_fetched": 4, "non_wikipedia": 3, "colours": "proposed", "colour_images": [], "grid": "proposed", "timings": "proposed", "recipes": "aligned", "edited": "2026-10-03"}
sources: ["https://commercialtype.com/custom/bloomberg_businessweek", "https://eyemagazine.com/feature/article/taking-care-of-business", "https://magculture.com/blogs/journal/at-work-with-richard-turley-bloomberg-businessweek", "https://en.wikipedia.org/wiki/Richard_Turley_(graphic_designer)"]
---
## What it is
After Bloomberg L.P. bought the magazine in late 2009, it was redesigned in 2010; Richard Turley, hired from The Guardian, led its creative direction (Wikipedia gives his Businessweek era as 2010-2014 and calls his look "boldly experimental"; George Lois is quoted calling the covers "the best consistent set of covers in 40 years"). The look is a disciplined grid with typographic and conceptual chaos layered on top: Turley described it as "graffiti-ing the pages" (Eye). It won a 2012 National Magazine Award for general excellence (Wikipedia, Bloomberg Businessweek).

## The rules that make it this and not something else
- Plain typeface, loud ideas. Turley chose Helvetica-like type "that didn't surprise anyone and was just a typeface" to avoid a branding exercise (Eye). The delivered face is Neue Haas Grotesk, a revival by Christian Schwartz of a design commissioned but not used by The Guardian in 2004, extended with lighter weights, italics, Stencil, Mono and Agate cuts (Commercial Type).
- Straight-legged alternate R: Commercial Type notes it "had a surprisingly big impact" on the look.
- Druk (Berton Hasebe) for display: grown from anonymous condensed sans serifs, four heavy weights, later Wide and condensed variants. Publico for text and for the Etc. section.
- Structure under the mess: modular grid, same type rules as Turley's Guardian work; infographics designed as journalism, with six designers and three information designers sitting beside editors (Eye).
- Covers range from 15 minutes to a month of work (magCulture); several options are produced and one is chosen.
- Provocation is the tone: covers were noted for sexual imagery and clip-art collisions, which drew debate (Wikipedia, Turley). Reproduce the wit, not the crudeness.

## Tokens decoded
- Canvas white or one full-bleed spot colour per issue; ink black; accent a single fluorescent or primary, applied as a whole field, not a gradient.
- Type: Inter Tight 500 for the grotesque, Anton for Druk-like numerals and heads, Source Serif 4 for text. Numerals oversized: 40 to 60 percent of the frame height.
- Heavy bars 8-12 px; zero radius; no shadows.
- Grid: 12 columns, 8 px baseline; elements may cross the grid but the text columns do not move.

## Motion and camera
No source gives motion values (it is a print magazine); everything below is proposed, derived from the "syncopated moments" idea in Eye.

2D (HyperFrames, craft.md vocabulary): staccato, cuts not glides.
- A numeral or one word cuts in at full size on a downbeat, no tween (`gsap.set` on the beat, or `steps(1)`); a second element cuts in 4 to 8 frames later at 30 fps (0.13 to 0.27 s). That gap is the syncopation.
- Key beat only: `scale` 1.0 to 1.06 in 0.12 s `power4.out`, then hold. Colour-field changes are hard cuts (`gsap.set` background), never fades.
- Hold 0.8 to 1.2 s per statement; the joke is read, not animated. A chart bar may occupy the whole frame (the chart is scaled to the story).
- Structure layer: a visible-by-implication 12-column grid, text columns never move; the "graffiti" layer (numeral, crop, stencil word) sits free of the grid and may bleed past the frame edge (`x` offset -4 to 8 percent).
- Camera: locked; punch-in is a hard cut to a 1.5x crop, not a zoom. Transitions: cut only. Grade: none; flat print colour. Sound: dry hit on each cut, no whoosh.
3D (Rasan3D, 3d.md sections 3, 5, 18): one oversized object lit hard from one side.
- `k.material("plastic", { color: "#ff2d8a" })` (a per-story spot colour) or `ceramic`, `k.rig("low-key", { dir: [-0.7, 0.6, 0.5], shadowSoftness: 2 })`, `k.ground({ color: "#ffffff" })` real floor so the shadow is a hard shape, `environment: "soft"`, `lens: [[0, 50]]`, `fstop: 11` (deep focus, catalogue look).
- Camera: locked; one fast push `pos: [[0, [0, 1.2, 9]], [1.4, [0, 1.2, 9]], [1.55, [0, 1.0, 5.5], "power4.out"]]` on the punchline.
- Type: `k.extrudeText("49", { font: <TTF path>, size: 3, depth: 0.6, bevel: 0.02, material })` slabs in a TTF (Anton ships as TTF on Google Fonts, not WOFF2) stacked and dropped with `k.simulate` for a 3-frame bounce, or keyed `pos` with `"bounce.out"`. Pin the dry headline as DOM with `k.pinDom` or leave it in the 2D layer.

## How to instruct a model to build it
"Rigid 12-column grid, 8 px baseline, with one deliberate act of disruption per frame. Inter Tight 500 for text, Anton for numerals up to 50 percent of frame height, Source Serif 4 for body, black on white or on one full-field saturated colour. The headline is a dry one-liner. Cuts on downbeats at full size; no easing on entrances except a single 0.12 s power4.out punch on the key beat. No glitch, no noise, no gradients, no fades." Claude tends to soften with fades and eased glides; GPT-style output tends to add VHS glitch as the edge (from the earlier pass, not re-tested). Forbid both and specify the cut.

## Blending notes
Carries: grid-plus-disruption (Eye: type structure as "bricks and mortar", graffiti on top), giant condensed numerals, deadpan headlines, hard cuts. Blends with `swiss-international` and `the-economist-graphics` for data with attitude, and with `postmodern-emigre`. Breaks with soft or lyrical looks and with `financial-times-graphics` restraint (they undo each other).

## Sources
- https://commercialtype.com/custom/bloomberg_businessweek — Schwartz's Neue Haas Grotesk revival, the straight-legged R "had a surprisingly big impact", Druk from anonymous condensed sans serifs, Publico for text and Etc, Hasebe's display numerals (fetched).
- https://eyemagazine.com/feature/article/taking-care-of-business — "graffiti-ing the pages", structure as bricks and mortar, Turley's Helvetica pitch ("just a typeface, rather than a branding exercise") (fetched).
- https://magculture.com/blogs/journal/at-work-with-richard-turley-bloomberg-businessweek — covers take "between about 15 minutes and a month"; make many, pick one (fetched).
- https://en.wikipedia.org/wiki/Richard_Turley_(graphic_designer) — George Lois "best consistent set of covers in 40 years", provocative covers and controversy (fetched).
- Dropped: the Bloomberg Businessweek Wikipedia page (not re-read this session).
