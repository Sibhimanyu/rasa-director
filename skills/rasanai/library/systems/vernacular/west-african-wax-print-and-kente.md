---
id: "west-african-wax-print-and-kente"
name: "West African textile pattern systems: Dutch wax print, kente and adinkra"
kind: "vernacular"
era: "Kente: Asante and Ewe weaving, at least 17th-18th century, Bonwire/Kumasi, Ghana. Adinkra cloth: oldest surviving piece 1817. Wax print: Vlisco, Helmond, from 1846, sold in West Africa from the 1850s-1880s onwards"
origin: ["Asante and Ewe weavers (Bonwire, Kumasi, Keta region)", "Adinkra cloth printers of Ntonso, near Kumasi", "Vlisco (Helmond, founded 1846; Woodin, Uniwax and GTP sister brands)", "West African market traders and wearers who name the patterns", "Pieter Fentener van Vlissingen (Vlisco founder)"]
palette: {"roles": {"gold": "#cf8335", "black_cloth": "#3b2e24", "canvas": "#c5a27f", "ink": "#1b1410", "green": "#1f7a3d", "red": "#b3261e", "blue": "#1f4aa8"}, "logic": "All hex values are proposed (not sourced). Sources give colour meanings for kente (gold royalty and wealth, green growth and renewal, blue peace and harmony, black spiritual intensity and ancestral connection, per Wikipedia) but not pigment values. Wax print is multi-colour, saturated, with a deliberate crackle line; adinkra is dark stamped pigment on cloth.", "evidence": "gold, black_cloth and canvas measured from Wikimedia Commons Kente Cloth.jpg (k-means 6: #cf8335 22%, #3b2e24 22%, #5e4d46 17%, #c5a27f 14%, #9e5b24 12%, #97745d 12%), 2026-10-03; a single photograph of a woven cloth, so it is a sample, not a standard. Green, red, blue and ink are proposed (not measured); the wax-print photo tried (GTP cloth) was a portrait and gave only muted browns, so no wax colours are measured."}
type: {"display": {"family": "Fraunces", "free_alternative": "Fraunces", "weights": [600, 800], "case": "mixed", "tracking": -0.01}, "body": {"family": "Bricolage Grotesque", "free_alternative": "Bricolage Grotesque / Space Grotesk", "weights": [400, 600], "case": "mixed", "tracking": 0, "note": "Bricolage Grotesque has opsz, wdth and wght axes: tween wght 400 to 700 on a reveal."}, "rules": ["pattern is the content: type is small, plain and placed on a quiet band, never over a busy motif", "name cloths and symbols as a catalogue caption: pattern name, meaning, maker or town", "do not set text in an 'African-style' typeface: no such single style exists"]}
grid: {"columns":6,"baseline_px":8,"margins":"pattern fills the frame; the strip is the unit","rules":["kente is built from narrow strips, roughly 4 in wide, sewn edge to edge (Wikipedia and Met); a full cloth is about twenty strips (Met text via search; confirm before quoting)","warp-face stripes run along the strip; weft-face geometric blocks alternate (Met via search)","wax print is a repeat: a large motif on a half-drop or block repeat, with a border and a selvage that carries the brand and design number","adinkra cloth is a grid of stamps, each with space around it"]}
shape: {"radius":0,"stroke":"none (weave edges, resist lines, stamped line)","shadow":"none","imagery":"kente: named geometric patterns; adinkra: stamped symbols with proverb-based meanings; wax print: motifs from birdcages, keys, fans, cars, letters and objects, with names given by wearers"}
texture: "woven thread structure with visible weft floats; wax print crackle (fine resin cracks, dye bleeding through), slightly uneven stamped adinkra ink"
motion: {"language":"rhythmic and structural: strips, rows, repeats","timing_ms":[200,400,800],"eases":{"enter":"power2.out","move":"none for steady weave, sine.inOut for reveals","exit":"power2.in"},"entrances":["strips slide in one by one with a 100 ms stagger","pattern repeats tile across the frame row by row","stamped symbols press in with a 2 frame settle"],"camera":"locked, close; or a slow lateral track along a strip at 120-160 px/s","signature":"weave builds the picture thread by thread; a motif is named and its meaning appears"}
space: {"2d":"native; pattern tiles and masks","3d":"cloth as a real draped plane (k.pxPlane with texture, subtle fold normal) hung against a quiet wall; or strips as bars with depth; no spinning fabric ball"}
good_for: ["stories about identity, trade, memory, family, craft", "fashion, textile or museum films", "pattern backgrounds that carry meaning", "pieces where a name and a proverb are the point"]
not_for: ["a decorative 'African' background for an unrelated product", "generic tribal-print wallpaper", "using adinkra or kente patterns that carry royal or funerary meaning as casual decoration"]
blends_with: ["engraving-etching", "screenprint", "mexican-loteria", "ukiyo-e-woodblock"]
clashes_with: ["glass-product-cgi", "brutalist-web"]
cheap_tells: ["a fake kente stripe pattern generated as a colourful background: kente has named patterns, and some are reserved for royalty (Met)", "adinkra symbols scattered as decoration without a name and a meaning: they encode proverbs and belong to the Akan", "calling Dutch wax 'traditional African fabric' without its history: it is an industrial print designed in the Netherlands from Javanese batik that West African wearers made their own", "no crackle line, no selvage, no repeat logic", "mixing kente, wax print and mud cloth as 'West African' in one flat pattern: they have different makers and different meanings", "flat colour gradients where weave or resist texture should be"]
verified: {"sources_fetched": 6, "non_wikipedia": 2, "colours": "partial", "colour_images": ["https://commons.wikimedia.org/wiki/Special:FilePath/Kente_Cloth.jpg?width=400"], "grid": "proposed", "timings": "proposed", "recipes": "aligned", "edited": "2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Kente_cloth", "https://en.wikipedia.org/wiki/Adinkra_symbols", "https://en.wikipedia.org/wiki/African_wax_prints", "https://en.wikipedia.org/wiki/Vlisco", "https://hyperallergic.com/how-dutch-wax-fabrics-became-a-mainstay-of-african-fashion/", "http://www.asiantextilestudies.com/wax.html"]
tags: ["textile", "pattern", "kente", "adinkra", "wax-print", "vlisco", "ghana", "west-africa", "symbol", "craft"]
domain: "vernacular"
---
## What it is

Three related but distinct systems, which this entry keeps apart.

Kente is a woven cloth of the Asante and Ewe peoples of Ghana. The word comes from the Asante kɛntɛn, "basket". Oral tradition places its origin in Bonwire, with one legend crediting weavers who sought to copy the patterns of Anansi the spider; Asantehene Opoku Ware I set up a production facility in the 18th century, and the Ewe have a documented tradition from at least 1718 in the Keta region (Wikipedia). Narrow strips about 4 in wide are woven on a loom and sewn together; each pattern has a name and a meaning, and some are reserved for royals. In December 2024 UNESCO inscribed kente as Intangible Cultural Heritage, and Ghana obtained Geographical Indication status in September 2025 (Wikipedia).

Adinkra is a system of symbols of the Akan people, "representing objects that encapsulate evocative messages conveying traditional wisdom". The traditional account credits the Bono of Gyaman and King Nana Kwadwo Agyemang Adinkra, but the oldest surviving adinkra cloth is dated 1817, and Thomas Bowdich documented its production in the Asante capital that year (Wikipedia). Cloth is stamped with carved calabash pieces, using a dark pigment from the bark and roots of the badie tree; the main production centre today is Ntonso, about 20 km northwest of Kumasi. It was worn for funerals and special occasions.

Dutch wax print is an industrial textile: Pieter Fentener van Vlissingen bought a factory in Helmond in 1846 to make imitation batik by roller printing (Hyperallergic; Wikipedia). It failed with its Indonesian buyers, but was received strongly in West Africa; about 3,000 Ghanaian soldiers served in the Royal Netherlands East Indies Army from 1855 to 1872 and carried bolts home (Hyperallergic). Wearers, particularly women traders, gave the patterns their names.

## The rules that make it this and not something else

Kente
- Strip is the unit; the cloth is a composed assembly of strips with alternating warp-face and weft-face blocks.
- Patterns are named, from proverbs, events or nature. Colours carry meanings per Wikipedia (gold royalty and wealth, green growth and renewal, blue peace and harmony, black spiritual intensity and ancestral connection); meanings vary by weaver and context, so state the source when you use them.
- Authentic kente is a protected designation (Bonwire and Sakora Wonoo among approved communities, per Wikipedia). Do not label machine prints as kente.

Adinkra
- Each symbol is a named idea. Two are sourced here: Gye Nyame, "Except God", and Sankofa, "Turn back and fetch it" (Wikipedia). Other symbols were not verified this session; look up each meaning before using it, and caption every symbol with its name and meaning.
- Stamped, not printed: a calabash stamp, uneven edge, dark ink, space around each symbol.
- Funerary and royal use: use the symbols in a context that fits their meaning.

Wax print
- Resin resist is applied to both sides of cotton by copper rollers; the cloth is dyed, the resin cracked and removed, leaving fine crackle lines where dye has leaked through; it is repeated per colour (Wikipedia: African wax prints; Asian Textile Studies). The crackle is a feature and is what distinguishes real wax from "fancy" prints.
- Vlisco says the cloth goes through 27 treatments over two weeks (Wikipedia: Vlisco) and, since 1963, has stamped "Guaranteed Dutch Wax Vlisco" against counterfeits.
- Patterns carry names given by wearers: "Si tu sors, je sors" ("You Fly, I Fly") with open birdcages, "Mama Benz", the 1920 Alphabet design, Michelle Obama's Handbag (2011) (sources: Wikipedia, Hyperallergic, Asian Textile Studies). The textile functions as "a type of nonverbal communication among African women" (Wikipedia).
- Brand and design number are printed on the selvage. A search summary also stated that Vlisco itself numbers its designs and that names arise locally; one detail from it, that a Piet Snel 1936 design is called Plaque-Plaque, Target or Nsu Bura in Ghana, was not confirmed on a fetched page.
- Artists such as Yinka Shonibare have used the cloth to explore identity and postcolonial material culture (Hyperallergic).

## Tokens decoded

- Kente: strip width 80-100 px at 1080p, 12-20 strips across a frame; gold #d9a21b, green #1f7a3d, red #b3261e, blue #1f4aa8, black #17120f (all proposed), with a 2 px lighter weft float line every 8 px.
- Adinkra: ink #17120f (proposed) on cloth #f2e6c8 or a dark cloth, stamp size 200-280 px, 80 px minimum margin, ink edge 2 px roughened.
- Wax print: 3-5 saturated flat colours plus the crackle (a 512 px tile of fine cracks, multiplied at 18-25 percent), a half-drop repeat, a printed selvage at one edge.
- Type: Fraunces for names and meanings, Bricolage Grotesque for captions. Caption format: pattern name, meaning, maker or town.

## Motion and camera

2D
- Kente weave: strips enter from alternating directions, 100 ms stagger, 400 ms `power2.out`; after the last strip, a weft-face block row slides across at 120 px/s for 1.2 s as if being woven.
- Adinkra: the symbol presses in with scale 1.06 to 1.0 in 160 ms `power2.out`, ink opacity 0.6 to 1, then its name and meaning appear below in 280 ms, hold 1400 ms. Use one symbol per beat and let the meaning be read.
- Wax print: motifs fill by row, 80 ms stagger; the crackle layer fades in 400 ms to feel like the resist cracking; after the hold a slow pan 120 px over 3 s `sine.inOut` shows the repeat.
- Do not loop-scroll a pattern as filler; a pattern moves only when the story names it.

3D reading. Cloth as an object: `k.pxPlane` with the weave texture and a gently displaced fold (a normal map, two broad folds), `k.material("matte")` or `paper` rather than silk; `k.rig("window")` with `dir` [-1, 0.4, 0.8], lens 85 mm, a slow 0.3 m dolly toward the cloth over 3.6 s `power3.inOut` with `fstop` 2.8 focusing on a stripe so the weave shows. A line of strips as separate bars at 0.02 m intervals can open like a fan on a beat. No spinning fabric.

## How to instruct a model to build it

> HyperFrames, 1920x1080, 30 fps, GSAP, one paused timeline. This scene is about one named cloth: state its name and meaning on screen. Choose one system: (a) kente, 12-20 vertical strips 90 px wide, each strip alternating warp stripes and weft blocks from [#d9a21b, #1f7a3d, #b3261e, #1f4aa8, #17120f] (proposed); (b) adinkra, a single stamped symbol on cloth, 240 px, ink edge roughened 2 px, with its name and meaning as a caption; (c) wax print, 3-5 flat saturated colours on a half-drop repeat with a 512 px crackle tile multiplied at 20 percent and a printed selvage. Motion: strips enter at 100 ms stagger on `power2.out`; a symbol presses in over 160 ms and its caption follows 280 ms later; hold 1400 ms. Type: Fraunces for names. Do not use pattern as a generic background; do not mix the three systems in one frame; do not use symbols whose meaning you cannot state. Claude: verify every symbol or pattern name from the sources listed and caption it. GPT: provide the symbol's meaning in the prompt or it invents one.

## Blending notes

- Carries: strip and repeat as structure, naming and meaning as copy, crackle texture, stamp press.
- With engraving or woodblock: both are made-by-hand repeated-impression systems; pair stamps with block prints for a print-lineage film.
- With Swiss: a single strip as an axis and the caption in grid type is respectful and effective.
- Breaks: gradients, glossy 3D, decorative scatter, speed.

## Sources
- https://commons.wikimedia.org/wiki/Special:FilePath/Kente_Cloth.jpg?width=400 — image sampled for colour (fetched)

- https://en.wikipedia.org/wiki/Kente_cloth — etymology, Bonwire and Anansi legend, Opoku Ware I, Ewe 1718, 4 in strips, colour meanings, UNESCO 2024 and GI 2025. (fetched)
- https://en.wikipedia.org/wiki/Adinkra_symbols — Akan origin, Gyaman account, 1817 cloth, Bowdich, calabash stamps, badie pigment, Ntonso, Gye Nyame and Sankofa. (fetched)
- https://en.wikipedia.org/wiki/African_wax_prints — wax print process, Belanda Hitam, naming, selvage, "nonverbal communication", market scale. (fetched)
- https://en.wikipedia.org/wiki/Vlisco — 1846 Helmond, 27 treatments, named design example, brands, 1963 stamp. (fetched)
- https://hyperallergic.com/how-dutch-wax-fabrics-became-a-mainstay-of-african-fashion/ — crackle, Ghanaian soldiers 1855-1872, "You Fly, I Fly", Mama Benz, 1927 name, Yinka Shonibare. (fetched)
- http://www.asiantextilestudies.com/wax.html — crackle formation, duplex roller process, 1920 Alphabet pattern, Michelle Obama's Handbag (2011). (fetched)

Not sourced this session: the Met Museum kente pages (fetches returned rate limits; the two-heddle loom and about twenty strips come from a search summary and are marked as such), Smarthistory (403), Vlisco's own archive site, meanings of adinkra beyond Gye Nyame and Sankofa, and the Vlisco design-numbering claim. All hex values are proposed.
