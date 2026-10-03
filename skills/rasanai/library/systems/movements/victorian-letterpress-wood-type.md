---
id: "victorian-letterpress-wood-type"
name: "Victorian letterpress and wood type"
kind: "movement"
era: "c.1805-1910, Britain and the US"
origin: ["Robert Thorne, Vincent Figgins (fat face)", "Robert Besley and Benjamin Fox (Clarendon, 1845)", "Darius Wells and William Leavenworth (wood type tooling)", "Wells & Webb, Hamilton Manufacturing Co."]
palette: {"roles":{"paper":"#eadfc4","ink":"#1b1712","red":"#a8261d","blue":"#1f3b66","ochre":"#c58a2b"},"logic":"warm aged paper, black letterpress ink, one or two ink colours (barn red, prussian blue) per bill; hex values estimated from specimen scans (unverified)."}
type: {"display":{"family":"Fat face (Thorne/Figgins), Clarendon (1845), American Antique Tuscan, slab Egyptians, extreme condensed gothics","free_alternative":"Abril Fatface, Rozha One, Besley, Alfa Slab One, Rye (Tuscan-style), Bevan, Oswald (condensed gothic), Playfair Display 900","weights":[700,900],"case":"ALL CAPS and mixed in a single bill","tracking":0},"body":{"family":"old-style or Scotch roman","free_alternative":"Libre Caslon Text, Lora, EB Garamond","weights":[400],"case":"mixed","tracking":0},"rules":["every line a different face, size and width","centred stack with strong line-by-line rhythm","3-9 typefaces per sheet","borders of rules and ornament","condensed bold lines for emphasis, tiny roman for detail"]}
grid: {"columns":1,"baseline_px":0,"margins":"tight 4-6% with ornamental border","rules":["centred symmetrical axis, lines set to measure by size change","lines justified to the full width","rules and fleurons separate bands"]}
shape: {"radius":0,"stroke":"double rules, 2-6px with thin inner line","shadow":"drop and inline letter shadows are part of the type (shaded and outlined faces)","imagery":"woodcut vignettes, pointing hands, engraved cuts"}
texture: "ink squash at letter edges, uneven impression, wood grain and worn corners, paper fibre, foxing"
motion: {"language":"mechanical, set by hand, line by line","timing_ms":[150,350,900],"eases":{"enter":"back.out(1.4)","move":"power2.inOut","exit":"power2.in"},"entrances":["lines stamp in one at a time with a 2px press and rebound","slugs of type drop in rows","borders draw from corners"],"camera":"locked frontal; a slow 3% push on the finished bill","signature":"printing impression: each line lands with a short squash and ink-spread, 100-150 ms apart"}
space: {"2d":"native","3d":"wooden type blocks and bills as planes on a table, orthographic top-down, warm key light 40 degrees; raised letter faces with ink; keep matte"}
good_for: ["history, craft food and drink, circus or fair, western, theatre, stories with a period character, pubs"]
not_for: ["tech, minimal, science, anything futuristic"]
blends_with: ["engraving-etching", "newspaper-broadsheet", "punk-xerox-zine", "art-nouveau"]
clashes_with: ["swiss-international", "dutch-total-design", "frutiger-aero"]
cheap_tells: ["one decorative font in a brown parchment texture (that is a 'western' template)", "perfect clean vector edges with no ink squash", "single-size centred title", "tilted burnt-paper edges as the whole idea", "random 'Old West' fonts mixed with no hierarchy"]
sources: ["https://en.wikipedia.org/wiki/Wood_type", "https://en.wikipedia.org/wiki/Fat_face", "https://woodtype.org/blogs/news/91-antique-tuscans-in-america"]
---
## What it is
The Victorian poster aesthetic came from a 19th-century change in printing: fat face display type from London (c.1805-1810, Thorne, Figgins) and then wood type, cheap in large sizes and cut by router and pantograph (Darius Wells in the 1820s, Leavenworth's pantograph in 1834). Wood type was light, durable and under half the price of large metal type, producing bills where every line has a different face. Hamilton Manufacturing Company (founded 1880, Two Rivers, Wisconsin) dominated the American market by 1909.

## The rules that make it this and not something else
- Display typefaces are extreme: ultra-bold, ultra-condensed, expanded, shaded, inline, Tuscan.
- Clarendon (Fann Street Foundry, 1845, Besley and Fox): bracketed serifs, reduced contrast, big x-height; became the wanted-poster and circus face.
- American Antique Tuscan (Wells & Webb 1849): concave slab serifs with pointed, scalloped terminals; ubiquitous after 1850.
- One sheet mixes many faces, each line set to the full measure by changing size and width.
- Centred axis, ruled borders, ornament, woodcut cuts.
- Imperfect physical printing: ink squash, wood grain, wear.

## Tokens decoded
Paper #eadfc4, ink #1b1712, red #a8261d, blue #1f3b66. Display pairings: Abril Fatface for the main line, Alfa Slab One or Besley for slab lines, Oswald 700 condensed caps for secondary, Rye for a Tuscan accent, Libre Caslon Text for detail. Line sizes in a bill step roughly 2.5:1 (hero 18% of height, secondary 7%, tertiary 3%). Margins 5%, double rule 4 px + 1 px, 6 px gap.

## Motion and camera
2D: set each line as its own block; enters at 120 ms stagger with `scale 1.04 to 1` and `y -6 to 0` in 150 ms `power2.out`, then a 90 ms ink-spread (text-shadow 0 to 1 px at 0.4 alpha); `back.out(1.4)` for stamp rebound on hero lines only. Borders draw from corners in 600 ms `power2.inOut`. Paper grain tile, integer-frame seeded, static. Holds 900-1500 ms. Camera: 3% push over the whole bill, `power1.inOut`.
3D: a flat table plane, bills as thin boxes; wooden letter blocks with raised faces catching a 40 degree warm key light; shallow depth of field 85mm f/2.8; top-down orthographic for the type reveal.

## How to instruct a model to build it
"Victorian wood-type handbill. Paper #eadfc4, ink #1b1712, one second ink #a8261d. Centred stack of 5-7 lines, each a different face and size: Abril Fatface hero, Alfa Slab One, Oswald 700 caps condensed, Rye for one accent line, Libre Caslon for fine print. Lines justified to the full measure by changing size, not tracking. Double-rule border. Ink squash: text-shadow 0 0 1px at 40%, grain tile. Motion: lines stamp in at 120ms stagger, 150ms power2.out with a 1.04 to 1 scale; hero line only uses back.out(1.4). Hold 1200ms." Claude likes to reuse a single decorative font; require at least four faces and a size ratio of 2.5:1.

## Blending notes
Carries: line-by-line stamping, mixed-face hierarchy, ink squash, ruled borders. Pairs with newspaper/engraving. Breaks against Swiss or minimal systems; mixes only when one is the foil.

## Sources
- https://en.wikipedia.org/wiki/Wood_type (Wells router, Leavenworth pantograph, Hamilton)
- https://en.wikipedia.org/wiki/Fat_face (Thorne, Figgins, c.1805-1810, first display type)
- https://woodtype.org/blogs/news/91-antique-tuscans-in-america (Tuscan 1849, foundries)
- https://en.wikipedia.org/wiki/Clarendon_(typeface) (1845, Besley, open revivals)
- https://en.wikipedia.org/wiki/Hamilton_Wood_Type_and_Printing_Museum (1.5 million pieces, 1999)
Unverified: all hex values; the squash and stagger timings are RasanAI proposals; the "under half the price" claim is from a search snippet.
