---
id: "data-journalism-isotype-neurath"
name: "Isotype and the historical statistical-graphics canon: Neurath, Arntz, Playfair, Minard, Nightingale"
kind: "movement"
era: "1786 Playfair; 1850s Nightingale; 1869 Minard; 1925-1934 Vienna Isotype"
origin: ["Otto Neurath", "Gerd Arntz", "Marie Reidemeister (Neurath)", "William Playfair", "Charles Joseph Minard", "Florence Nightingale"]
palette: {"roles":{"paper":"#f5f0e1","black":"#1a1a1a","blue":"#2a5db0","green":"#3e9b4f","yellow":"#f2c230","red":"#d62f26","brown":"#7a4b2a"},"logic":"Isotype used seven colours (white, blue, green, yellow, red, brown, black) with colour carrying meaning (green farming, red power and industry, blue and black cold); colour is information, not decoration. Hex are approximations and unverified."}
type: {"display":{"family":"Isotype used a plain geometric sans (Futura-like, unverified); Playfair and Minard used engraved roman/italic lettering","free_alternative":"Jost (Futura-like), Josefin Sans, Libre Caslon Text for the 18th-19th century voice (OFL)","weights":[400,700],"case":"mixed","tracking":0},"body":{"family":"Same sans, small labels beside rows","free_alternative":"Jost 400","weights":[400]},"rules":["labels sit directly on the row","title is plain and states the finding","numbers shown only where the pictogram count cannot say it"]}
grid: {"columns":"rows of equal height; unit grid","baseline_px":null,"margins":"generous; chart framed by a thin rule","rules":["one pictogram equals a fixed quantity, stated in a key","greater quantities are more icons, not bigger icons","icons never in perspective","fractions only in halves, rarely quarters"]}
shape: {"radius":0,"stroke":"none or 1 px engraved line (Playfair/Minard)","shadow":"none","imagery":"Arntz-style black-and-white woodcut-derived pictograms (about 4,000 designed from 1929), flow bands (Minard), polar wedges (Nightingale), line and bar (Playfair)"}
texture: "flat print ink; for the 18th-19th century voice, copperplate engraving lines with hand-tinted washes"
motion: {"language":"counting, accumulating, unit by unit","timing_ms":[80,200,600],"eases":{"enter":"back.out(1.4)","move":"power2.out","exit":"power1.in"},"entrances":["icons pop in row by row, 40-60 ms apart","Minard-style band narrows as it advances along the route","wedges grow radially from the centre"],"camera":"locked orthogonal; occasional pan along the time axis","signature":"pictograms filling a row one at a time while the count reads out, then the comparison row appearing underneath"}
space: {"2d":"native","3d":"flat icons as extruded matte tiles on a plane; Minard map as a ribbon over terrain; ortho or 50 mm camera, top-soft light"}
good_for: ["explainers, data journalism, public information, impact reports, science", "any film that needs numbers understood by anyone"]
not_for: ["emotional brand mood films with no numbers", "dense financial terminals"]
blends_with: ["swiss-international", "scandinavian-modern-design", "constructivism", "newspaper-broadsheet"]
clashes_with: ["vaporwave-and-anti-design-net-art"]
cheap_tells: ["icons scaled to show size instead of counted", "random clip-art icons from an icon pack in four styles", "3D bar charts, perspective pictograms", "colour with no meaning", "an Isotype 'look' with the wrong data type (no fixed unit)"]
sources: ["https://en.wikipedia.org/wiki/Isotype_(picture_language)", "https://en.wikipedia.org/wiki/Gerd_Arntz", "https://nightingaledvs.com/exploring-isotype-charts-our-two-democracies-at-work-lessons-of-isotype-part-3/", "https://en.wikipedia.org/wiki/Charles_Joseph_Minard", "https://en.wikipedia.org/wiki/William_Playfair", "https://en.wikipedia.org/wiki/Florence_Nightingale"]
---
## What it is
Isotype (International System of Typographic Picture Education) was developed by Otto Neurath at the Social and Economic Museum in Vienna (1925-1934). Gerd Arntz (1900-1988) supplied the simplified, black-and-white woodcut-derived pictograms from 1929 (about 4,000 designed); Marie Reidemeister, later Marie Neurath, was the main "transformer", turning source data into chart sketches. Neurath's catchphrase: "To remember simplified pictures is better than to forget accurate figures." The older canon sits beside it: Playfair's line and bar charts (1786) and pie chart (1801), Nightingale's polar area diagrams of 1850s mortality, and Minard's 1869 map of Napoleon's 1812 campaign, which encodes six variables with width and colour.

## The rules that make it this and not something else
- Greater quantity means more identical icons, not a bigger icon; viewers count rather than compare areas.
- No perspective; flat pictograms with consistent line weight.
- Colour is for information. Seven colours were used (white, blue, green, yellow, red, brown, black), with familiar meanings where possible (search-result detail, partly verified via Wikipedia and Nightingale DVS).
- Fractions are halves; avoid quarters.
- "A rule should not be broken unless there is a good reason" (Marie Neurath, quoted in the Nightingale DVS article).
- Playfair: charts beat tables; time series on a shared axis; 43 time-series plots in the 1786 Atlas.
- Minard: one picture holds troops, distance, temperature, geography, direction and date; band width equals quantity.
- Nightingale: charts built to persuade non-specialists (MPs) of a specific action; the diagram form was used earlier by Guerry (1829) and Lalanne (1830).
- A chart should state a finding in its title.

## Tokens decoded
- Paper `#f5f0e1`, black `#1a1a1a`, data blue `#2a5db0`, green `#3e9b4f`, yellow `#f2c230`, red `#d62f26`, brown `#7a4b2a`. Meaning-first mapping per film, stated in the DESIGN.md.
- Icon: 64-96 px square at 1080 p, 12 px gaps, one stroke weight (3 px) or solid black silhouettes (Arntz-like). Fraction icon cut at the half.
- Fonts: Jost 700 for titles, Jost 400 for labels; for the Playfair-era voice, Libre Caslon Text.
- Layout: rows 120-160 px high, label on the left at 28 px, icons running right, key icon at the foot stating the unit.
- Nightingale wedges: 12 months, radius = square root of value so area is honest (this is correct practice; the original area encoding is unverified in the fetched page).

## Motion and camera
2D: rows fill left to right, icons popping with `back.out(1.4)`, 200 ms each, stagger 40-60 ms, a counter in the label ticking in sync (GSAP snap on an object property). Hold the finished row 600 ms before the next row builds beneath it so the viewer compares by counting. Minard band: an SVG path with stroke width interpolated along the route, drawn with `stroke-dashoffset` over 3-6 s `none`, width narrowing as soldiers fall; temperature line below drawing in sync. Playfair lines draw with `power1.inOut` at 1.2 s, annotated by a single gap-shading fill appearing at 800 ms. Camera locked; pan along the time axis for long series at 60-120 px/s `none`.
3D: tiles as thin extruded matte boxes (`k.extrudeText` or `k.svg` for icons) in rows on a plane, ortho feel at 85 mm, the camera tilts 25 degrees to reveal height only when the data has a Z meaning; no 3D bars with decoration.

## How to instruct a model to build it
"Isotype-style information graphic. Paper #f5f0e1, black pictograms and four meaningful colours (#2a5db0, #3e9b4f, #f2c230, #d62f26). One icon equals a fixed unit stated in a key; show quantity only by repeating the same-size icon, halves allowed. No perspective, no gradients, no shadows. Rows 140 px high with the label left in Jost 400 28 px; title states the finding. Animate icons popping in row by row (back.out(1.4), 200 ms, stagger 50 ms) while a counter ticks; hold each row 600 ms. Use the same icon family throughout, designed on one 3 px stroke." Claude may choose mismatched icon sets; require one family drawn as inline SVG. GPT models like to scale icons; forbid it.

## Blending notes
- Carries: unit logic, flat icons, finding-first titles, counting as motion.
- With Swiss: ideal pair; Swiss grid frames Isotype rows.
- With Scandinavian: use warm paper and rounded icon forms.
- Breaks: ornamental effects, gloss, inconsistent icon styles.
Also clashes with (not library entries): glassmorphic UI.

## Sources
- https://en.wikipedia.org/wiki/Isotype_(picture_language): principles, Neurath, Arntz, Reidemeister, 1925-34.
- https://en.wikipedia.org/wiki/Gerd_Arntz: 4,000 pictograms from 1929, woodcut background.
- https://nightingaledvs.com/exploring-isotype-charts-our-two-democracies-at-work-lessons-of-isotype-part-3/: halves, colour logic, transformation, quote.
- https://en.wikipedia.org/wiki/Charles_Joseph_Minard: 1869 map, six variables, 51 maps.
- https://en.wikipedia.org/wiki/William_Playfair: 1786 line and bar, 1801 pie, 43 plots.
- https://en.wikipedia.org/wiki/Florence_Nightingale: polar area diagram, purpose, predecessors.
- Unverified: hex values, Isotype typeface (assumed Futura-like), seven-colour meanings beyond green/red/blue-black (search snippet), motion timings.
