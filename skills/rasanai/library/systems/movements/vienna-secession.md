---
id: "vienna-secession"
name: "Vienna Secession and Wiener Werkstatte"
kind: "movement"
era: "1897-1914, Vienna (Secession founded 3 April 1897; Werkstatte 1903-1932)"
origin: ["Gustav Klimt", "Josef Hoffmann", "Koloman Moser", "Joseph Maria Olbrich"]
palette: {"roles":{"canvas":"#f4efe3","ink":"#111111","accent":"#c9a24a","white":"#ffffff","deep":"#2a2f45"},"logic":"white and black grids as the discipline, gold as the single ornament; hex values approximate, unverified against originals"}
type: {"display":{"family":"custom squared and stylised Secession lettering (Moser, Hoffmann, Olbrich)","free_alternative":"Jost (OFL, Futura-like geometry) for headings; Cormorant Garamond (OFL) for refined text; Syncopate is too wide, avoid","weights":[400,700],"case":"mostly caps for display, widely spaced","tracking":0.12},"body":{"family":"a light serif or the same lettering at small size","free_alternative":"Cormorant Garamond","weights":[400]},"rules":["hand-lettered, squared letterforms with narrow counters in the original (unverified in detail)","caps spaced very wide, set on a frame or in a cartouche","text becomes a pattern block, not just a message"]}
grid: {"columns":8,"baseline_px":8,"margins":"large; the Ver Sacrum pages used a square format (unverified: roughly 28 cm square)","rules":["square and checkerboard as the base unit","ornament confined to bands, frames and corners","strong symmetric axis, asymmetric detail"]}
shape: {"radius":0,"stroke":"thin double line or heavy black line","shadow":"none","imagery":"flat, stylised figures and plants; gold leaf; mosaic; geometric repeats"}
texture: "gold leaf, mosaic tesserae, paper; flat colour with fine line"
motion: {"language":"ceremonial and exact: grids that assemble, gold that arrives last","timing_ms":[300,600,1000,1800],"eases":{"enter":"power2.out","move":"power2.inOut","exit":"power2.in","gold":"sine.out"},"entrances":["squares tile in diagonally","frame draws then content inside","gold band sweeps once across a surface"],"camera":"locked, centred, symmetrical; slow push on a facade","signature":"checkerboard assembly then a single gold sweep"}
space: {"2d":"native","3d":"possible: white cube building with a gilded dome, a room as total artwork"}
good_for: ["luxury, culture, museums, jewellery, architecture", "heritage brands with a modern edge", "title cards that need a ceremonial feel"]
not_for: ["raw, anti-establishment punk content", "data dashboards"]
blends_with: ["art-nouveau", "art-deco", "japanese-modern-tanaka-kamekura", "bauhaus"]
clashes_with: ["punk-xerox-zine", "memphis-milano", "futurism-italian"]
cheap_tells: ["Klimt gold-and-swirl wallpaper filters on a modern stock photo", "gold gradient chrome instead of flat gold leaf", "centred script fonts; the real lettering is geometric and wide-spaced", "ornament sprinkled all over: Secession keeps ornament in bands and cartouches against large empty fields", "no square or grid structure under the decoration"]
sources: ["https://en.wikipedia.org/wiki/Vienna_Secession", "https://en.wikipedia.org/wiki/Wiener_Werkst%C3%A4tte", "https://en.wikipedia.org/wiki/Koloman_Moser", "https://www.britannica.com/topic/Vienna-Sezession"]
---
## What it is
The Vienna Secession was formed on 3 April 1897 by roughly fifty artists, with Gustav Klimt as first president, Josef Hoffmann, Koloman Moser and Joseph Maria Olbrich among the founders, breaking from the conservative Kunstlerhaus (Wikipedia). It built its own gallery (Olbrich, 1897-98) and published the magazine Ver Sacrum (1898-1903), designed largely by Moser. In 1903 Hoffmann and Moser with the patron Fritz Waerndorfer founded the Wiener Werkstatte, aiming for a total artwork (Gesamtkunstwerk) in which every object is coordinated; Klimt, Hoffmann and Moser left the Secession on 14 June 1905 over the status of the decorative arts.

## The rules that make it this and not something else
- The building is the manifesto: a white cubic block under a gilded dome of about 3000 laurel leaves, inscribed "To every age its art, to art its freedom" (Der Zeit ihre Kunst, der Kunst ihre Freiheit) (search results, Britannica and others).
- Geometry first: square, checkerboard, line; Moser's work is clean lines and repeating geometric patterns, set against Baroque ornament (Wikipedia).
- Hoffmann: "to give practical and appropriate forms to all objects" (Wikipedia); structured ornament plus geometric simplicity.
- Total design: the same language on poster, cup, chair, jewellery, building.
- Gold is a material, not a gradient: Klimt's Beethoven Frieze (1901) and the dome.
- Wide, deliberate white fields with ornament held in a band or frame.
- Applied arts equal to fine arts is the stated cause of the split.

## Tokens decoded
- Canvas `#f4efe3`, ink `#111111`, white `#ffffff`, gold `#c9a24a` (flat), deep `#2a2f45` for night fields. Approximate, unverified.
- Display: Jost 700 caps, tracking 0.12em, centred in a frame; body Cormorant Garamond 400 italic permitted for captions only.
- Grid: 8-column, square module 1/16 of width; checkerboard repeats at 1/16 and 1/32 of the frame.
- Lines: 1px hairline plus 3px black rule pairs; frames with 2:1 outer to inner spacing.
- Ornament budget: at most 20% of frame area.

## Motion and camera
2D: squares tile in along the diagonal, 300ms `power2.out`, stagger 28ms per cell. A frame draws (stroke-dash) over 600ms `power2.inOut`, then content fades 0 -> 1 in 300ms. Gold arrives last: a 40px-wide band sweeps across the gold area in 1000ms `sine.out`, once. Type letters enter by tracking tighten, 0.3em -> 0.12em in 900ms `power2.out`. Camera: locked, symmetrical; a 1.0 -> 1.05 push on the dome or frame over 6s `power1.inOut`.
3D: a white cube (`k.material('matte')`), gilded dome as `k.material('brushed-metal')` tinted `#c9a24a`, `environment: "soft"`, key light from upper left, 50mm lens, locked front elevation then 15 degrees of orbit over 6s. Avoid chrome.

## How to instruct a model to build it
"Secession-style title scene on #f4efe3. A centred square frame with a 3px black rule inside a 1px hairline. Inside, the word in Jost 700 caps tracked 0.12em, tightening from 0.3em over 900ms `power2.out`. A checkerboard band of 28px squares tiles along the diagonal at 28ms stagger, 300ms `power2.out`. At 2.4s a flat #c9a24a band sweeps once across a gold bar, 1000ms `sine.out`. No gradient gold, no swirls, no drop shadow; empty space is the point." Claude benefits from an explicit "ornament under 20% of area" rule; GPT models tend to add Klimt swirls, so name "geometric Hoffmann, not Klimt".

## Blending notes
Carries: square module, wide-tracked caps, flat gold, framed cartouche. Pairs with Art Deco (gold and symmetry) and Japanese modern. Breaks when mixed with chaotic or collage styles.

## Sources
- https://en.wikipedia.org/wiki/Vienna_Secession — founding, members, 1905 split
- https://en.wikipedia.org/wiki/Wiener_Werkst%C3%A4tte — workshop, Hoffmann quote, Stoclet Palace
- https://en.wikipedia.org/wiki/Koloman_Moser — Ver Sacrum lead designer, geometry, Die Quelle
- https://www.britannica.com/topic/Vienna-Sezession (and other building-focused results of a web search) — dome, motto, Beethoven Frieze
- Unverified: Ver Sacrum page size; the Wikipedia Ver Sacrum URL I tried resolved to the ancient-Italic ritual article, so no magazine facts were taken from it.
