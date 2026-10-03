---
id: "ukiyo-e-woodblock"
name: "Ukiyo-e woodblock prints (key block, flat colour blocks, bokashi)"
kind: "vernacular"
era: "17th-19th century, Edo (Tokyo); nishiki-e full-colour from the 1760s; Hokusai Great Wave 1831; Hiroshige Tokaido 1833-34 and Edo views 1856-58; decline after 1868"
origin: ["Katsushika Hokusai", "Utagawa Hiroshige (1797-1858)", "Utamaro, Sharaku, Kiyonaga (1760s-1790s nishiki-e masters)", "Nishimuraya Yohachi (publisher of the Great Wave)", "anonymous carvers and printers"]
palette: {"roles": {"paper": "#e7d8b5", "key": "#22262b", "prussian_blue": "#516c81", "indigo": "#2c3e4f", "sky_bokashi": "#d4d4b6", "ochre": "#9b8d73", "wave_green": "#7c9285", "red": "#c94a38"}, "logic": "All hex values are proposed (not sourced); museum photography of aged prints varies widely. Sources establish the structure: a limited set of water-based colours on handmade paper, each printed from its own block, a dark key-block outline, indigo and (from the 1820s) Prussian blue, and bokashi gradation printed on the block.", "evidence": "measured from Wikimedia Commons scans, k-means 6, 2026-10-03: Hiroshige Sudden shower over Shin-Ohashi bridge and Atake, 1857 (#516c81 26%, #b8bdaa 23%, #22262b 16%, #9b8d73 13%, #e7d8b5 13%, #5b483f 9%) and Great Wave off Kanagawa2.jpg (#c0bca0 41%, #7c9285 14%, #99aa99 13%, #d4d4b6 11%, #2c3e4f 11%, #51646a 10%). These are aged, web-colour-managed scans (faded blues), so treat them as the surviving look, not the fresh print; the red #c94a38 is proposed and unmeasured."}
type: {"display": {"family": "Shippori Mincho", "free_alternative": "Shippori Mincho / Zen Antique", "weights": [500, 800], "case": "mixed", "tracking": 0.02, "note": "Zen Antique (400) is the heavier calligraphic title; Shippori Mincho carries 500-800. Both carry Japanese, OFL."}, "body": {"family": "Shippori Mincho", "free_alternative": "Shippori Mincho / Libre Caslon Text", "weights": [400, 500], "case": "mixed", "tracking": 0.02}, "rules": ["titles sit in a cartouche, a flat rectangle or a shaped tag in the corner of the image, vertical for Japanese", "publisher mark and artist signature are small seals, placed outside the main picture", "never overlay a modern sans over the picture", "leave empty paper where the print leaves it"]}
grid: {"columns":1,"baseline_px":0,"margins":"4-6 percent paper margin; oban landscape about 3:2 (the Great Wave measures 24.6 x 36.5 cm per Wikipedia), vertical formats from Hiroshige's landscapes","rules":["a large cropped object in the foreground against a distant view creates depth (Hiroshige, per Wikipedia)","diagonals and arcs; the main figure often off-centre","flat planes of colour, each bounded by the key line","horizon high, sky given a bokashi band"]}
shape: {"radius":0,"stroke":"a continuous key-block line of varying width, brush-like","shadow":"no cast shadows; shape and tone come from separate colour blocks","imagery":"landscapes, courtesans, actors, birds and flowers, travel; waves, mist, snow, rain as patterns"}
texture: "washi paper fibres, a slight emboss where the baren pressed, coloured areas with soft grain, small registration slips (kento)"
motion: {"language":"printed in sequence: the picture is made by blocks","timing_ms":[240,520,900],"eases":{"enter":"power2.out","move":"sine.inOut","exit":"power2.in"},"entrances":["each colour block fades and settles in with a 3 percent multiply, one after the other","bokashi bands sweep as a soft edge across the sky","the key block arrives last or first, as a hard line"],"camera":"locked flat to the paper or a slow lateral pan with layered parallax (planes at depth factors 0.3, 1, 2.5)","signature":"the print builds from blocks, then a single element (a wave, a cloud) moves while the rest holds"}
space: {"2d":"native; stacked flat planes","3d":"layered planes: foreground, mid, far, sky each a k.pxPlane with its own texture, 0.5-8 m apart, lens 85-135 mm so the planes stay graphic; a true paper-theatre depth"}
good_for: ["landscape, travel, weather, journey stories", "calm, graphic, seasonal or poetic films", "anything where flat planes and one decisive diagonal tell the story", "culture, craft, process films about print"]
not_for: ["tech product interfaces", "dense data", "using a 'Japan' look as a generic costume"]
blends_with: ["engraving-etching", "screenprint", "risograph-print", "paper-cut-and-papercraft", "west-african-wax-print-and-kente"]
clashes_with: ["glass-product-cgi", "brutalist-web", "frutiger-aero"]
cheap_tells: ["a Great Wave pastiche or red rising-sun circle as shorthand for 'Japan': it is a specific 1831 print, not a texture", "a digital 'watercolour' filter on a photo: ukiyo-e is flat colour blocks bounded by a key line, with gradation only where it was printed (bokashi)", "gradient meshes: the bokashi is a band with a controlled edge, usually sky, water or a robe", "no cartouche, no seal, no paper margin", "a perspective that behaves like photography: depth comes from overlap and cropping, not vanishing-point shading", "Prussian blue as a generic 'Japan blue': Hokusai's printers mixed it with traditional indigo, and the two together make the outline (per Wikipedia)"]
verified: {"sources_fetched": 4, "non_wikipedia": 0, "colours": "measured", "colour_images": ["https://commons.wikimedia.org/wiki/Special:FilePath/Hiroshige%2C_Sudden_shower_over_Shin-%C5%8Chashi_bridge_and_Atake%2C_1857.jpg?width=400", "https://commons.wikimedia.org/wiki/Special:FilePath/Great_Wave_off_Kanagawa2.jpg?width=400"], "grid": "proposed", "timings": "proposed", "recipes": "aligned", "edited": "2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Ukiyo-e", "https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa", "https://en.wikipedia.org/wiki/Hiroshige", "https://en.wikipedia.org/wiki/Woodblock_printing_in_Japan"]
tags: ["woodblock", "japan", "ukiyo-e", "print", "landscape", "flat-colour", "bokashi", "hokusai", "hiroshige", "edo"]
domain: "vernacular"
---
## What it is

Ukiyo-e, "pictures of the floating world", flourished from the 17th to the 19th century and showed courtesans, kabuki actors, landscapes and nature. A print was the work of four trades: the artist who designed it, the carver who cut the blocks, the printer who inked and pressed them onto handmade paper, and the publisher who financed and distributed it (Wikipedia: Ukiyo-e). Full-colour prints (nishiki-e, "brocade pictures") using ten or more blocks became standard after the 1760s, in the era of Utamaro, Sharaku and Kiyonaga. Hokusai's Great Wave off Kanagawa (late 1831 or early 1832; publisher Nishimuraya Yohachi) and Hiroshige's Fifty-three Stations of the Tokaido (1833-34) and One Hundred Famous Views of Edo (1856-58) made landscape the genre the world knows. Traditional ukiyo-e declined after the 1868 Meiji Restoration with Westernisation and photography; shin-hanga and sosaku-hanga revived printmaking in the 20th century.

## The rules that make it this and not something else

- Process creates the look. A drawing is glued face down on a close-grained block, usually cherry; lines are carved; each colour gets its own block; pigment is applied with a brush and pressed by a hand baren; registration marks (kento) keep the blocks aligned; inks are water-based, giving vivid colour, glazes and transparency (Wikipedia: Woodblock printing in Japan).
- Key block plus colour blocks: a dark line holds the drawing; colours are flat and stack in order. The Great Wave measures 24.6 x 36.5 cm in oban landscape format; about 1,000 initial copies, an estimated 8,000 eventually (Wikipedia).
- Bokashi is colour gradation printed on the block, and hand printing allowed gradations machines could not. In the Great Wave the sky's bokashi uses a separate block for the dark grey areas (search summary of Wikipedia; treat the block count as unverified).
- Blue is a key colour. Prussian blue was imported from Holland from 1820 (called Berlin ai) and came into ukiyo-e in the 1820s; it resisted fading better than indigo. In the Great Wave the printers did not simply replace indigo; they mixed the two for the outline and overprinted one on the other (Wikipedia, with a search summary). The look called 'Hokusai blue' is this.
- Composition: Hiroshige used bokashi, introduced the vertical format in landscapes, and put large cropped objects in the foreground against a distant scene, a technique he borrowed from Western art (Wikipedia: Hiroshige). Hokusai's Great Wave sets a wave spiral against a small, calm Mount Fuji and three oshiokuri-bune barges.
- Edges are crisp; shapes are simplified; text sits in cartouches.
- Prints are commercial and collaborative objects, and also a source for Western artists: Van Gogh collected and copied Hiroshige, and Monet and the Impressionists studied the compositions (Wikipedia).

## Tokens decoded

- Paper: #ece1c8 (proposed), with a faint fibre texture 4 percent.
- Colours (proposed): key #1b1a1f, Prussian blue #1c3d6e, indigo #2b3f73, bokashi sky #cfd8d6 to #e6ddc6, red #c94a38, ochre #d6a647. Keep six hues and a paper tone at most.
- Key line: 2-4 px at 1080p with a slight width variation along curves; no uniform vector stroke.
- Bokashi: a 160-300 px soft band, a linear gradient with a hand-printed wobble (displacement 3 px) on one axis only.
- Type: Shippori Mincho (vertical where the language allows), in a cartouche of 6 percent of frame width.
- Registration: 1 px offset between a colour block and the key line, optional.

## Motion and camera

2D
- Print in sequence: paper at t = 0; colour blocks fade in one by one at 240 ms each, 120 ms apart, opacity 0 to 1 with a multiply blend, `power2.out`; the key line last, 520 ms, as a mask wipe from the lower left; hold 900 ms.
- Bokashi sweeps the sky: a gradient mask moves 160 px over 900 ms on `sine.inOut`.
- One mover: only one element (a wave, a cloud, a bird, rain) moves after the print completes. The rest holds. Rain is a repeated stroke pattern moving 40 px diagonally per 500 ms, not particles.
- Camera: lateral pan 120-200 px over 4 s `sine.inOut` with plane depth factors 0.3 (sky), 1 (mid), 2.5 (foreground cropped object).
- Cuts: hard cuts to the next print; or a block-by-block peel back.

3D reading. Paper theatre: four to six `k.pxPlane` layers (sky, far land, water or mid, foreground cut-out) at z = 8, 4, 1.5, 0 m, each a flat-colour texture on `k.material("paper")` with transparent cut-outs; a single low `k.rig("window")` key, `dir` [-0.6, 0.5, 1]; lens 100 mm so layers stay flat and parallax is gentle; the camera trucks 0.6 m over 4 s `sine.inOut` with a 0.4 s hold. `environment: "soft"`, no bloom, no glossy materials, no real water simulation unless the film is about water, in which case a displaced plane with flat banded colour is allowed. Never an orbiting 3D wave.

## How to instruct a model to build it

> HyperFrames, 1920x1080, 30 fps, GSAP, one paused timeline. Build an ukiyo-e print scene. Paper #ece1c8 (proposed) with a 4 percent fibre texture and a 5 percent margin. Shapes are flat colour planes from [#1c3d6e, #2b3f73, #c94a38, #d6a647, #cfd8d6], each separately layered, with no gradients except one bokashi band in the sky (a 200 px linear gradient with a 3 px displacement wobble on the edge). A dark key line (#1b1a1f, 2-4 px, variable width) over the shapes. Large cropped foreground object, small distant subject. Titles in a rectangular cartouche in Shippori Mincho with a red seal. Sequence: colour blocks fade in at 240 ms each, 120 ms apart, multiply blend, `power2.out`; the key line wipes in 520 ms; the sky bokashi moves 160 px over 900 ms `sine.inOut`; hold 900 ms; then only one element moves. Lateral pan 160 px over 4 s `sine.inOut` with depth factors 0.3, 1, 2.5. No digital watercolour, no mesh gradients, no photograph, no wave pastiche. Claude: list the blocks (colour and order) before building. GPT: specify that each colour is a separate flat layer or it paints a smooth gradient picture.

## Blending notes

- Carries: block-by-block build, key line over flat colour, bokashi as the only gradient, cartouche, one mover.
- With engraving: a good fit through line; with risograph or screenprint: close in layered flat ink.
- With wax print: both are repeated-impression colour systems; keep each in its own frame.
- Breaks: photography, glow, glossy 3D, anything that needs soft light.


Finish: this look is hard-edged or stepped, so set `data-finish-blur="off"` on the scene's frame root; the film finish then renders the scene from the centre sub-frame instead of averaging sub-frames, which would smear the flat edges. Use `steps(n)` eases or hold frames for any stepped layer and never `power*` tweens on it.
## Sources
- https://commons.wikimedia.org/wiki/Special:FilePath/Hiroshige%2C_Sudden_shower_over_Shin-%C5%8Chashi_bridge_and_Atake%2C_1857.jpg?width=400 — image sampled for colour (fetched)
- https://commons.wikimedia.org/wiki/Special:FilePath/Great_Wave_off_Kanagawa2.jpg?width=400 — image sampled for colour (fetched)

- https://en.wikipedia.org/wiki/Ukiyo-e — genre, four trades, nishiki-e from the 1760s, Prussian blue in the 1820s, bokashi, decline and revival. (fetched)
- https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa — 1831 date, publisher, oban 24.6 x 36.5 cm, Prussian blue (Berlin ai) with indigo, print numbers, composition. (fetched)
- https://en.wikipedia.org/wiki/Hiroshige — dates, Tokaido and Edo series, vertical format, foreground cropping, Van Gogh and Monet. (fetched)
- https://en.wikipedia.org/wiki/Woodblock_printing_in_Japan — cherry block, carving, baren, kento, water-based inks, sumizuri-e, kappazuri-e and nishiki-e. (fetched)

Not sourced this session: the Met and British Museum pages (the Met essay returned a rate limit twice; the British Museum conservation PDF could not be parsed), so pigment analysis and exact block counts rely on Wikipedia and search summaries; Hokusai's own biography; all hex values (proposed).
