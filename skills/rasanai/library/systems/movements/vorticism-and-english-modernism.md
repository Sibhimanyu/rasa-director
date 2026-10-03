---
id: "vorticism-and-english-modernism"
name: "Vorticism and English modernism (BLAST, Johnston, the Underground)"
kind: "movement"
era: "1914-1920s, London"
origin: ["Wyndham Lewis", "Ezra Pound", "Edward Wadsworth", "Henri Gaudier-Brzeska", "Frederick Etchells", "Helen Saunders", "Edward Johnston and Frank Pick (London Underground)"]
palette: {"roles":{"canvas":"#f3ecd9","ink":"#0c0c0c","magenta":"#d9266b","red":"#c1272d","blue":"#1c3f94","green":"#2c6b4f"},"logic":"BLAST's magenta cover, then hard black, red, blue and flat greys in angular planes; hex values approximate, unverified"}
type: {"display":{"family":"heavy sans-serif grotesque in large sizes, set in blocks (BLAST); Johnston Sans for the London Underground","free_alternative":"Archivo Black, Anton (OFL) for BLAST-like weight; Gill-like humanist sans: Lato or Hanken Grotesk; Johnston-like: 'Johnston100' is proprietary, use Hanken Grotesk","weights":[400,900],"case":"caps, large","tracking":-0.01},"body":{"family":"grotesque","free_alternative":"Archivo","weights":[400,700]},"rules":["declaration set in massive grotesque, leaves of text blocks at diagonals","blast/bless lists in two registers","caps at several sizes in one block"]}
grid: {"columns":0,"baseline_px":0,"margins":"tight; folio pages","rules":["diagonal axes at 30-60 degrees","interlocking wedges, not curves","text blocks as shapes in the composition"]}
shape: {"radius":0,"stroke":"hard, thick black","shadow":"none","imagery":"hard-edged abstraction, machine forms, cities, angular figures"}
texture: "flat colour, woodcut-like black, rough newsprint; magenta cover board"
motion: {"language":"hard, angular, declarative","timing_ms":[120,240,480,900],"eases":{"enter":"power4.out","move":"power3.inOut","exit":"power4.in","hit":"expo.out"},"entrances":["wedges slice across the frame","blocks of type slam to position","lists reveal line by line (bless then blast)"],"camera":"locked, with 15 degree diagonal pans and hard cuts","signature":"BLAST then BLESS: two-register list where each line is struck in alternately"}
space: {"2d":"native","3d":"angular planes and slabs, direct-carving feel; flat unlit shading"}
good_for: ["manifestos, statements, brand declarations", "industrial and engineering subjects", "transit identity (Johnston) for clarity"]
not_for: ["soft consumer brands, wellness"]
blends_with: ["futurism-italian", "constructivism", "dada-photomontage", "international-typographic-corporate-identity"]
clashes_with: ["art-nouveau", "arts-and-crafts-morris", "vienna-secession"]
cheap_tells: ["generic 'angry punk' ransom lettering", "all-caps shouting with no structure: BLAST has a blast/bless logic", "a pink cover gradient rather than flat magenta", "soft, curved forms", "mixing Johnston's gentle humanist sans with BLAST's brutal slab as if they were one style"]
sources: ["https://en.wikipedia.org/wiki/Vorticism", "https://en.wikipedia.org/wiki/BLAST_(magazine)", "https://en.wikipedia.org/wiki/Edward_Johnston", "https://en.wikipedia.org/wiki/Futurism"]
---
## What it is
Vorticism was a London modernist movement started in 1914 by the writer and artist Wyndham Lewis, a hard-edged abstraction partly drawing on Cubism (Wikipedia). Its public launch was BLAST: The Review of the Great English Vortex (issue 1 on 2 July 1914, issue 2 on 15 July 1915, price 2/6) with contributions from Pound, Epstein and Gaudier-Brzeska. Pound defined the vortex as "that point in the cyclone where energy cuts into space". The first issue had a bright pink (Pound: "great MAGENTA") cover and used sans-serif grotesques in folio format, echoing Marinetti's typography (Wikipedia). Contemporary English design also includes Edward Johnston's sans typeface for the London Underground (commissioned 1913 by Frank Pick) and the redrawn roundel.

## The rules that make it this and not something else
- Hard-edged geometric abstraction; bold lines, harsh colours, dynamic composition (Wikipedia).
- The manifesto is a list: things to be Blasted and Blessed, in the same typographic block (BLAST).
- Typography: heavy grotesque, large, with shifts in size and weight; the opening 20 pages are manifesto.
- Energy at a point: composition spirals or wedges toward a vortex.
- Direct carving in sculpture: material intensity (Wikipedia).
- English difference from Futurism: machine and city themes, but angular and static rather than motion-blur multiplication.
- Parallel track: Johnston's Underground lettering, a calligraphic sans with disciplined proportions (Edward Johnston, Wikipedia) and the circle-and-bar roundel as a system.

## Tokens decoded
- Canvas `#f3ecd9`, cover magenta `#d9266b`, ink `#0c0c0c`, red `#c1272d`, blue `#1c3f94`. Approximate, unverified.
- Display: Archivo Black 400 caps; body Archivo 700; sizes in 3 steps (180px, 64px, 24px), no italics.
- Layout: text blocks as polygons; 2-4 diagonal axes 30-60 degrees; wedge shapes with 8-12px black outlines.
- Magenta field: flat colour only, no gradients; at least 55% of frame area one flat colour.
- Lists: BLAST column left in black on cream, BLESS column right in cream on black.

## Motion and camera
2D: wedges slide across in 240ms `power4.out` with a 6px overshoot-free stop; type blocks slam from 40px offset in 120ms `expo.out`; list lines strike alternately every 160ms, BLAST lines in black, BLESS lines inverted. Hold 900ms. Camera: locked; a diagonal pan 120px at 15 degrees over 480ms `power3.inOut` between sections; hard cuts on the beat.
3D: angular slabs as extruded polygons (`k.material('matte')`, unlit or flat shaded), a 35mm lens low angle, 20 degree dolly arc over 5s, hard single key light; a title block as a heavy extruded `k.text` plank; no soft shadows.

## How to instruct a model to build it
"Vorticist manifesto scene. Background flat #d9266b. Large diagonal wedge shapes in black and cream with 10px outlines slide across in 240ms `power4.out`. A two-column list: BLAST on the left (cream text on black), BLESS on the right (black on cream), Archivo Black caps at 64px; each line strikes in with 120ms `expo.out`, 160ms apart. Headline 180px Archivo Black set in a block rotated -12 degrees. Hold 900ms. No gradients, no curves, no glow." Claude: write the actual list entries (things the film blesses and blasts) from the subject's truth. GPT: forbid decorative flourishes and soft gradients.

## Blending notes
Carries: blast/bless structure, flat magenta, polygonal text blocks, angular wedges. Pairs with Futurism and constructivism, and with transit-clear lettering. Breaks with ornamental or softly curved systems.

## Sources
- https://en.wikipedia.org/wiki/Vorticism — Lewis, Pound's vortex, members
- https://en.wikipedia.org/wiki/BLAST_(magazine) — cover, typography, manifesto, dates, price
- https://en.wikipedia.org/wiki/Edward_Johnston — Johnston typeface commission and roundel
- https://en.wikipedia.org/wiki/Futurism — typographic relationship (cross-reference)
- Unverified: exact typeface identities used in BLAST (Wikipedia says only sans-serif grotesques); hex values.
