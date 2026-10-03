---
id: "experimental-jetset"
name: "Experimental Jetset (Amsterdam, post-Crouwel Dutch modernism)"
kind: "movement"
era: "1997-present, Amsterdam"
origin: ["Danny van den Dungen", "Marieke Stolk", "Erwin Brinkers", "Gerrit Rietveld Academie"]
palette: {"roles":{"canvas":"#ffffff","ink":"#000000","red":"#e30613","blue":"#0057b8","paper":"#f2efe6"},"logic":"black on white by default ('the natural habitat of the archetypical sign'); the studio's wider work uses black, white, red, blue; exact reds and blues are estimated (unverified)."}
type: {"display":{"family":"Helvetica, Neue Haas Grotesk (Christian Schwartz redraw, used for the Whitney)","free_alternative":"Inter Tight, Arimo, Archivo (Neue Haas itself is commercial, Klim/Commercial Type)","weights":[400,700],"case":"ALL CAPS for the Whitney wordmark; lowercase elsewhere","tracking":-0.01},"body":{"family":"Helvetica","free_alternative":"Inter, Arimo","weights":[400],"case":"mixed","tracking":0},"rules":["one typeface, one or two weights","type is the identity, imagery is secondary","tight tracking on wordmarks, widened tracking for emphasis","flush left"]}
grid: {"columns":4,"baseline_px":8,"margins":"area divided into quarters; text locked top-left","rules":["Whitney rule: divide the area into four equal spaces, draw a diagonal in each, alternating direction","the one static element is the word locked in the upper-left corner","line geometry responds to the proportions of the surface"]}
shape: {"radius":0,"stroke":"thick uniform line at roughly one stem-weight","shadow":"none; sometimes three-dimensional extruded lettering","imagery":"the artwork itself; found material, flat colour"}
texture: "none or printed-matter flatness; screenprint, offset paper"
motion: {"language":"responsive, rule-based, flat","timing_ms":[200,400,700],"eases":{"enter":"power2.out","move":"power3.inOut","exit":"power2.in"},"entrances":["line unfolds from folded state (W as four rods)","word fixed while line re-proportions","hard cut between formats"],"camera":"locked, flat, frontal","signature":"a single diagonal line system that refolds to fit every frame ratio"}
space: {"2d":"native","3d":"flat extruded letters and rods in orthographic view, matte black on white, hard single light"}
good_for: ["museums, culture, music, publishers, brands that want one strong rule instead of decoration"]
not_for: ["glossy tech, luxury, anything needing warmth or texture"]
blends_with: ["dutch-total-design", "swiss-international", "punk-xerox-zine", "new-wave-weingart"]
clashes_with: ["art-nouveau", "memphis-milano", "frutiger-aero"]
cheap_tells: ["Helvetica and a coloured shape with no governing rule", "a zig-zag copied without the four-space construction", "added gradients or shadows", "centred wordmark"]
sources: ["https://en.wikipedia.org/wiki/Experimental_Jetset", "https://www.jetset.nl/archive/whitney-museum-identity", "https://www.monotype.com/resources/expertise/how-whitney-uses-type-build-identity-around-art"]
---
## What it is
Experimental Jetset is a three-person Amsterdam studio founded in 1997 by graduates of the Gerrit Rietveld Academie; the name comes from a 1994 Sonic Youth album. They are known for Helvetica, a restrained black, white, red and blue palette and an approach that draws on modernism and post-punk. Their best-known work is the 2013 Whitney Museum identity, the "responsive W". Their books include Statement and Counter-Statement (2015), Full Scale, False Scale (2019) and Superstructures (2021).

## The rules that make it this and not something else
- A single, explainable rule generates the identity: Whitney's line = divide the area into four spaces, diagonal in space one top-left to bottom-right, in space two bottom-left to top-right, repeat.
- "The sign = the word + the line": two elements, always together.
- One neutral sans (Neue Haas Grotesk, tightly tracked) carries everything; the word is capitals, one weight, locked upper-left.
- Black on white is the default state; colour enters from the art and from a coded system (tickets, calendars colour-coded by type).
- Flat printed-matter materiality, type before image.
- 81% of Whitney exhibitions adopted the system (Monotype), variety coming from tracking and three-dimensional lettering rather than new fonts.

## Tokens decoded
Canvas #ffffff, ink #000000, signal red #e30613, blue #0057b8 (estimated). Display Inter Tight 700 caps, tracking -0.01em; word at 4-6% of height top-left at 5% margin. Line thickness about one stem (8-12 px at 1080p), round caps off, mitred joins. Grid: quarter divisions of whatever rectangle is available; 8 px baseline.

## Motion and camera
2D: draw the W as a four-segment SVG path: each of four rods rotates from folded (stacked, scaleX 0.0) to unfolded in 400 ms `power3.inOut`, 60 ms stagger, using `drawSVG`-style stroke-dashoffset if the plugin is unavailable. When the frame ratio changes, re-solve the four quarters (segments retarget in 700 ms `power3.inOut`). The word never moves. Holds 800 ms. Hard cuts between colours.
3D: letters or rods extruded in matte black, orthographic camera frontal, rotate 90 degrees over 700 ms `power2.inOut` to reveal depth; no reflective materials.

## How to instruct a model to build it
"Experimental Jetset. White #fff, black #000, optional red #e30613 as a single flat field. One typeface: Inter Tight (stand-in for Neue Haas Grotesk), caps for the wordmark, tightly tracked. Build the identity from one geometric rule: divide the frame into 4 equal columns, draw the diagonal in each, alternating direction, forming a W. The word stays locked top-left and never animates. Line animates by unfolding 4 rods in 60ms stagger, 400ms power3.inOut. Flat, frontal, no shadows." Name the rule; models decorate otherwise.

## Blending notes
Carries: single governing rule, locked wordmark, one-sans discipline. Blends with Crouwel/Total Design (explicit lineage) and Swiss systems. Breaks if combined with ornament or textured, handmade systems unless the rule remains visible.

## Sources
- https://en.wikipedia.org/wiki/Experimental_Jetset (founding, members, Helvetica, books)
- https://www.jetset.nl/archive/whitney-museum-identity (four-space rule, Neue Haas Grotesk, black on white)
- https://www.monotype.com/resources/expertise/how-whitney-uses-type-build-identity-around-art (tight tracking, 81% adoption)
- https://whitney.org/about/new-identity (responsive W, colour-coded applications)
Unverified: red and blue hex values; motion timings are RasanAI proposals. experimentaljetset.nl did not load.
