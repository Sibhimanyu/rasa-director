---
id: "op-art-kinetic"
name: "Op Art and kinetic art"
kind: "movement"
era: "1950s-1970s, Paris, London, New York, Caracas"
origin: ["Victor Vasarely", "Bridget Riley", "Jesus Rafael Soto", "Julio Le Parc and GRAV", "Carlos Cruz-Diez", "Alexander Calder", "Jean Tinguely"]
palette: {"roles":{"canvas":"#ffffff","ink":"#000000","accent_a":"#e63b2e","accent_b":"#1d5fd1","accent_c":"#f2c200"},"logic":"pure black and white for the pure op phase; when colour enters (Riley after 1965-67) use complementary pairs at equal luminance so edges vibrate; hex values approximate, unverified"}
type: {"display":{"family":"neutral grotesque of the 1960s (Univers, Helvetica)","free_alternative":"Archivo or Inter Tight (OFL)","weights":[400,700],"case":"lower or caps, small","tracking":0.02},"body":{"family":"grotesque","free_alternative":"Inter","weights":[400]},"rules":["type stays small and still; the pattern is the show","exhibition-poster layout: title in a corner, rest is the field"]}
grid: {"columns":0,"baseline_px":0,"margins":"edge to edge","rules":["regular repeat with a controlled disturbance (a bend, a shift, a frequency change)","units: stripes 4-40px, squares, hexagons, circles","distortion is geometric and measured, never random"]}
shape: {"radius":"curves for Riley; squares and rhombi for Vasarely","stroke":"none; fields are the shapes","shadow":"none","imagery":"pure geometry; plastic units (Vasarely's unites plastiques, patented 1959 per Wikipedia)"}
texture: "none; hard-edged flat paint, acrylic glass layers, moving motors in kinetic work"
motion: {"language":"periodic and hypnotic: phase shifts, moire, rotation","timing_ms":[600,1200,2400,4800],"eases":{"enter":"none","move":"sine.inOut","exit":"none","loop":"none"},"entrances":["stripes slide out of phase","concentric rings expand","a grid warps along a sine wave"],"camera":"locked and centred; slow rotation or zoom at constant speed","signature":"two identical line fields offset by a small, slowly changing phase to make moire"}
space: {"2d":"native, ideal for GSAP phase animation","3d":"strong: layered gratings in depth, parallax moire, kinetic sculptures"}
good_for: ["music, club visuals, optics, eyewear, perception and AI themes", "loops and ident bumpers", "intros that must hypnotise"]
not_for: ["long text or dense information", "warm, human, organic subjects", "photosensitive audiences (see warning)"]
blends_with: ["swiss-international", "mid-century-modern", "psychedelic-poster", "bauhaus"]
clashes_with: ["victorian-letterpress-wood-type", "arts-and-crafts-morris", "dada-photomontage"]
cheap_tells: ["a random swirl or spiral gradient labelled 'optical illusion'", "anti-aliased lines too soft to create vibration", "colour pairs of unequal luminance, so no flicker", "no controlled disturbance: pure repetition has no illusion", "fast strobing: unsafe, not Op Art"]
sources: ["https://en.wikipedia.org/wiki/Op_art", "https://en.wikipedia.org/wiki/Bridget_Riley", "https://en.wikipedia.org/wiki/Victor_Vasarely", "https://en.wikipedia.org/wiki/Kinetic_art"]
---
## What it is
Op art (optical art) uses distorted or manipulated geometric patterns to create optical illusions; the term was coined in 1964 (Wikipedia). Vasarely's Zebras (c.1937) is an early example; Bridget Riley made black-and-white works such as Movement in Squares (1961) and Current (1964) before moving to colour. The Responsive Eye (MoMA, 23 Feb-25 Apr 1965, curated by William C. Seitz) drew over 180,000 visitors. Kinetic art covers real or apparent movement; Le Mouvement (Galerie Denise Rene, Paris, 1955) was a landmark show with Calder, Tinguely and Soto, and GRAV formed in Paris in 1961.

## The rules that make it this and not something else
- Two methods: pattern and line, usually black and white; and colour contrast (Wikipedia).
- A controlled disturbance in a regular field produces the illusion: Riley's perpendicular curves in Current create "varying optical frequencies" and vertigo.
- Colour pairs chosen to afterimage and vibrate; Riley's first stripe painting is 1967 and her later "Egyptian palette" is a documented evolution (Wikipedia).
- Vasarely's system: forms cut from coloured squares in permutations (unites plastiques, patented 1959), later Vega and hexagon grids with volume illusions (Wikipedia).
- Serial production: Riley and Vasarely directed assistants from precise drawings (Wikipedia).
- Kinetic art distinguishes real motion (motors, wind, viewer movement) from apparent motion (op), though the two overlap (Wikipedia).
- Pure geometry only; no figure, no story.

## Tokens decoded
- Pure `#ffffff` and `#000000` for the base; optional colour pairs `#e63b2e` / `#1d5fd1` matched in luminance, `#f2c200`. Approximate, unverified.
- Stripe module: 12px stripes at 1920 wide, period 24px; disturbance amplitude 3-8px; phase drift 0.3-2px per second.
- Type: Inter Tight 700, 28px caps, tracking 0.02em, in a corner; no body copy.
- Edges: render without anti-aliasing blur; for large fields use SVG `shape-rendering="crispEdges"` or canvas on integer pixels.
- Safety: avoid flashes above 3 per second and large high-contrast areas flickering; keep drift slow.

## Motion and camera
2D: a stripe field (SVG pattern) with a second identical layer; animate `x` offset 0 -> 12px over 4800ms `sine.inOut` yoyo to produce moire. Warp: apply a sine displacement to line `y` positions as `y + A*sin(k*x + phase)`, phase advanced linearly by the timeline, A 6 -> 24px over 2400ms. Rings expand with `scale` 0 -> 3 in 2400ms linear and are re-seeded to repeat. Camera: locked and centred; rotate the world 0 -> 8 degrees over 6s `sine.inOut`.
3D: stacked line gratings (`k.material('unlit')`) at 0.05 unit spacing in z, camera drifts 0.1 units laterally over 6s; the parallax makes moire shift; orthographic-feeling 135mm lens, no depth of field, no lighting. Kinetic sculpture: rotating slat arrays on a motor-like constant angular velocity (`none` ease).

## How to instruct a model to build it
"Op Art scene, 1920x1080, white field with 12px black stripes (period 24px), edges crisp (no blur). A second identical stripe layer sits over it; animate its x offset 0 -> 12px over 4800ms `sine.inOut`, yoyo, so moire bands travel. Introduce one controlled disturbance: stripe y-positions follow y + A sin(0.004x + phase), A grows 6 -> 24px over 2400ms. A tiny label bottom-left in Inter Tight 700 caps 28px. Nothing else, no gradients, no strobing, no more than 3 luminance changes per second." Claude: render the pattern as SVG or canvas on integer pixels; GPT models often blur or add gradients, so repeat "hard-edged".

## Blending notes
Carries: moire phase, a single disturbance, black and white, equal-luminance colour pairs. Pairs with Swiss grids and psychedelic palettes. Breaks with text-heavy layouts and with painterly textures.

## Sources
- https://en.wikipedia.org/wiki/Op_art — definition, Responsive Eye numbers, methods
- https://en.wikipedia.org/wiki/Bridget_Riley — Movement in Squares, Current, colour shift, working method
- https://en.wikipedia.org/wiki/Victor_Vasarely — unites plastiques, Zebra, Vega
- https://en.wikipedia.org/wiki/Kinetic_art — Le Mouvement 1955, GRAV 1961
- Unverified: pixel module values and hex colours are proposed starting values, not measured from works.
