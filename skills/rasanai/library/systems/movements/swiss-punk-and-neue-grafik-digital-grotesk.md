---
id: "swiss-punk-and-neue-grafik-digital-grotesk"
name: "Swiss Punk to the 2020s digital grotesk: Weingart, Neue Grafik and anti-design web"
kind: "movement"
era: "1958 Neue Grafik; 1968-1970s Weingart Basel; 2010s-2020s web neo-grotesk and neubrutalism"
origin: ["Wolfgang Weingart", "Josef Muller-Brockmann, Hans Neuburg, Richard Paul Lohse, Carlo Vivarelli (Neue Grafik)", "April Greiman", "Dan Friedman", "Pascal Deville (brutalistwebsites.com, unverified attribution)"]
palette: {"roles":{"canvas":"#f1f1ee","ink":"#0b0b0b","signal":"#ff3b1f","second":"#2b3cff","highlight":"#d9ff3f"},"logic":"neutral ground, black type, one or two hard signal colours (red-orange, electric blue, acid lime), flat; contemporary versions flip to black ground with the same signals. Hex values are RasanAI proposals, unverified."}
type: {"display":{"family":"Helvetica / Neue Haas Grotesk, Akzidenz-Grotesk, Univers (1950s lineage); 2020s: Suisse Int'l, Neue Montreal, GT America, PP Neue Montreal","free_alternative":"Inter Tight, Schibsted Grotesk, Instrument Sans, Familjen Grotesk, Hanken Grotesk (OFL, Google Fonts)","weights":[400,500,800],"case":"mixed","tracking":-0.03},"body":{"family":"same grotesk, one size","free_alternative":"Inter / Hanken Grotesk","weights":[400]},"rules":["one family, size and weight do all the work","display size 8-20% of frame height, tight leading 0.9","Weingart breaks: varying weights inside a word, uneven letterspacing, type at non-right angles","contemporary: huge lowercase or all-caps wordmarks cropped by the viewport edge"]}
grid: {"columns":12,"baseline_px":8,"margins":"asymmetric, flush-left","rules":["Neue Grafik: strong modular grid, flush-left ragged-right","Swiss Punk: grid exists to be broken, stair-stepped lines, text blocks overlapping","2020s: visible 1 px rules and cell borders, tabular lists, giant numerals"]}
shape: {"radius":0,"stroke":"1 px hairline rules or heavy 3-4 px outlines (neubrutalism)","shadow":"none, or hard offset block shadow 6-8 px solid black (neubrutalism)","imagery":"photography cropped hard, halftones, screen grabs, scans of layered film"}
texture: "layered halftone and film (Weingart), or flat with no texture (digital); optional 4-8% grain"
motion: {"language":"mechanical, abrupt, typographic","timing_ms":[120,240,500],"eases":{"enter":"power4.out","move":"expo.out","exit":"power2.in"},"entrances":["line-by-line type slide from a mask (stair-step stagger 40 ms)","letter-weight swaps (variable font axis) on the beat","grid cell fills snapping on"],"camera":"static; fast scale or crop pushes of 10-20% in 300 ms","signature":"type that changes weight, size and rotation mid-word while a hairline grid stays fixed"}
space: {"2d":"native","3d":"extruded grotesk letters (k.extrudeText) in an orthographic camera on a flat ground, hard top light; no gloss"}
good_for: ["tech and design studios, editorial, cultural institutions, product launches wanting an anti-polish look", "type-led typography-first films"]
not_for: ["warm family brands, wellness", "heritage craft"]
blends_with: ["swiss-international", "punk-xerox-zine", "brutalist-web", "experimental-jetset"]
clashes_with: ["art-nouveau", "frutiger-aero"]
cheap_tells: ["Inter in grey on white with 'Swiss style' as the only idea", "randomly rotated text with no underlying grid", "neubrutalism as a repeatable template: pastel colour block, thick outline, hard shadow on every card", "hard shadows on cards that carry no hierarchy", "gimmicky glitch noise"]
sources: ["https://en.wikipedia.org/wiki/Wolfgang_Weingart", "https://en.wikipedia.org/wiki/New_Wave_(design)", "https://en.wikipedia.org/wiki/Neue_Grafik", "https://en.wikipedia.org/wiki/Neo-grotesque", "https://brutalistwebsites.com/"]
---
## What it is
Neue Grafik was a quarterly journal founded in Zurich on 15 February 1958 by Muller-Brockmann, Neuburg, Lohse and Vivarelli; eighteen issues appeared through 1965 and it spread the International Typographic Style, with photography as a central element. Weingart, who moved to Basel in 1964 and taught from 1968, took Swiss typography as a start "then blew it apart" (his own phrase per Wikipedia). The result, New Wave or Swiss Punk, used inconsistent letterspacing, mixed weights inside a word and type set at non-right angles. In the 2020s the digital descendants are oversized neo-grotesk web editorial and "neubrutalism", which brutalistwebsites.com frames as a younger generation's reaction to the lightness and optimism of mainstream web design.

## The rules that make it this and not something else
- A neo-grotesque (Helvetica, Univers, Folio all arrived in 1957, per Wikipedia) is the voice: neutral, even colour on the page, one family doing headings and body.
- The grid is present and visible, then violated on purpose: stair-stepped lines, mixed alignments, overlap.
- Scale is the main contrast; colour is signal.
- Photographs are cropped hard and treated as halftone or layered film (Weingart's method).
- The 2020s version adds explicit structure: heavy outlines, flat colour, hard offset shadows (neubrutalism sources via search; the term emerged around 2020-2022, search snippet, unverified in a fetched page).
- Rawness should look chosen: legible hierarchy remains underneath.

## Tokens decoded
- Canvas `#f1f1ee`, ink `#0b0b0b`, signal `#ff3b1f`, second `#2b3cff`, lime `#d9ff3f` (dark mode: ground `#0b0b0b`, type `#f1f1ee`).
- Fonts: Inter Tight (display 800, body 400), Schibsted Grotesk, Instrument Sans, Familjen Grotesk. All OFL. Commercial equivalents to name but not require: Suisse Int'l, Neue Montreal, Neue Haas Grotesk.
- Scale: 1 display (180-260 px at 1080 p), 1 sub (48 px), 1 caption (20 px). No size between.
- Grid: 12 columns, 8 px baseline, 48 px margins; rules 1 px `#0b0b0b`.
- Neubrutalism variant: 3 px border, 8 px 8 px 0 `#0b0b0b` shadow, radius 0.

## Motion and camera
2D: type enters line by line from masks, 240 ms `power4.out`, stagger 40-60 ms; a variable font weight axis animates 300 to 900 over 400 ms `expo.out` on the beat; size jumps are hard steps, not tweens. Rules draw across in 300 ms `power3.out`. Cuts are on beat, no crossfades; use a one-frame hold of the previous layout flipped to inverse colours as the transition. Slow zooms are banned; use 10-20% crop pushes in 300 ms.
3D: `k.extrudeText` with a grotesk TTF, depth 0.08 of cap height, no bevel; `top-soft` rig, matte `matte` material, ortho-style camera 85-135 mm; letters rotate on a hard 2-step cut, not a spin.

## How to instruct a model to build it
"Typographic film in a neo-grotesk (Inter Tight 800/400). 12-column grid at 8 px baseline, 1 px black rules visible. One huge headline per scene, 200+ px, leading 0.9, tracking -0.03em, flush-left, cropped by the frame edge on one side. Palette #f1f1ee, #0b0b0b, one signal #ff3b1f. At most one rule-breaking moment per scene: stair-step a line or mix weights inside one word. Animate: masked line slides 240 ms power4.out, weight swap 400 ms expo.out on the beat, hard cuts. No gradients, no glow, no rounded cards, no stock sans in grey." Claude tends to produce pleasing but safe layouts; ask it to break the grid once per scene. GPT-style output frequently adds pastel neubrutalist cards everywhere; say "no card boxes".

## Blending notes
- Carries: single-family hierarchy, visible grid, hard cuts, signal colour.
- With punk zine: lean into photocopy texture and layered halftone.
- With heritage or craft entries: only the type system should survive, not the shadows.
- Breaks: ornamental type, soft gradients.
Also clashes with (not library entries): soft gradient SaaS look.

## Sources
- https://en.wikipedia.org/wiki/Wolfgang_Weingart: 1964 Basel, 1968 teaching, 'blew it apart', awards.
- https://en.wikipedia.org/wiki/New_Wave_(design): Swiss Punk traits, Greiman, Friedman.
- https://en.wikipedia.org/wiki/Neue_Grafik: founders, dates, philosophy.
- https://en.wikipedia.org/wiki/Neo-grotesque: 1957 Helvetica/Univers/Folio, even colour.
- https://brutalistwebsites.com/: brutalist web framing.
- Unverified: all hex values, Deville attribution, neubrutalism 2020-22 timeline (search snippets), motion timings (RasanAI proposals). The Wikipedia Brutalist web design page returned 404.
