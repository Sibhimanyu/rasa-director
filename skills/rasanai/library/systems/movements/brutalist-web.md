---
id: "brutalist-web"
name: "Brutalist web design"
kind: "movement"
era: "c.2014-present; borrowed from 1950s British architectural brutalism"
origin: ["Pascal Deville (brutalistwebsites.com curation, unverified attribution)", "David Copeland (brutalist-web.design guidelines)", "Le Corbusier's beton brut via Reyner Banham (architectural root)"]
palette: {"roles": {"canvas": "#ffffff", "ink": "#000000", "link": "#0000ee", "visited": "#551a8b", "accent": "#ff0000", "mid": "#c0c0c0", "concrete": "#83837e", "concrete_light": "#bfb9ad", "concrete_dark": "#413d36"}, "logic": "browser-default black on white plus one raw primary (pure red, blue or yellow) used flat; no gradients, no tints. Link blue and visited purple are the browser defaults of unstyled HTML. Concrete greys are for the 3D or photographic reading.", "evidence": "link #0000EE and visited #551A8B read from the HTML Standard rendering section (https://html.spec.whatwg.org/multipage/rendering.html), 2026-10-03. Concrete greys measured from a photograph of Le Corbusier's Unite d'Habitation, Marseille (https://commons.wikimedia.org/wiki/Special:FilePath/Unit%C3%A9_d%27Habitation_de_Marseille_4.JPG?width=400), k-means 6, 2026-10-03: #83837e 21%, #bfb9ad 20%, #413d36 15% (the blue clusters are sky). Accent red/yellow and #c0c0c0 are proposed."}
type: {"display": {"family": "Helvetica / Arial / system sans, or raw monospace", "free_alternative": "Arimo / Inter / Archivo / Space Mono / IBM Plex Mono", "weights": [400, 700], "case": "mixed or ALL CAPS", "tracking": 0, "note": "Arimo is the Arial-metric OFL family (wght 400-700). Archivo has wdth+wght axes: 800 weight and wdth 125 gives a raw slab of a headline. Mono labels: Space Mono (400, 700) or IBM Plex Mono."}, "body": {"family": "Times / Georgia / Courier default stack", "free_alternative": "Tinos / Courier Prime / Lora", "weights": [400], "case": "mixed", "tracking": 0}, "rules": ["system or default fonts, never a custom brand face", "sizes arbitrary and large next to small; hierarchy by size jump or none at all", "underlined links, always", "long unbroken text lines are acceptable"]}
grid: {"columns":1,"baseline_px":0,"margins":"none or hard 0; content may touch the viewport edge","rules":["document flow, not a grid","boxes visibly outlined with 1-3px black borders","elements may overlap or collide on purpose","tables for layout are legitimate"]}
shape: {"radius":0,"stroke":"2-4px solid black or the accent","shadow":"hard offset 6-8px solid black, never blurred","imagery":"raw screenshots, low-res or unprocessed photos, concrete, scans; no stock"}
texture: "none; the texture is the unstyled browser default"
motion: {"language":"abrupt, mechanical, honest","timing_ms":[0,100,200],"eases":{"enter":"none","move":"steps(1)","exit":"none"},"entrances":["hard cut","text typed or printed line by line","hover swaps to inverted colours instantly"],"camera":"locked, native scroll only; no smooth-scroll, no parallax","signature":"state changes with zero interpolation: colours invert, boxes jump a grid step on the beat"}
space: {"2d":"native","3d":"possible as untextured grey boxes, flat shading, orthographic, concrete-slab monoliths; never glossy, never soft-lit"}
good_for: ["developer tools, indie labels, art and fashion drops, zines", "anything whose message is that it refuses polish"]
not_for: ["wellness, kids, luxury, anything that needs to feel reassuring"]
blends_with: ["punk-xerox-zine", "terminal-crt", "swiss-international", "new-wave-weingart", "concrete-brutalist-3d"]
clashes_with: ["frutiger-aero", "y2k-chrome"]
cheap_tells: ["rounded corners or soft shadows on a 'brutalist' card", "pastel palette", "Inter at 400 on #fafafa labelled brutalist: that is minimalism", "smooth eased animation", "neo-brutalist card UI with pink drop shadows treated as the whole movement"]
verified: {"non_wikipedia":4,"colours":"partial","colour_images":["https://commons.wikimedia.org/wiki/Special:FilePath/Unit%C3%A9_d%27Habitation_de_Marseille_4.JPG"],"grid":"proposed","timings":"proposed","sources_fetched":5,"recipes":"aligned","edited":"2026-10-03"}
sources: ["https://brutalist-web.design/", "https://brutalistwebsites.com/", "https://en.wikipedia.org/wiki/Brutalist_architecture", "https://html.spec.whatwg.org/multipage/rendering.html", "https://commons.wikimedia.org/wiki/File:Unit%C3%A9_d%27Habitation_de_Marseille_4.JPG"]
---
## What it is
Brutalist web design takes its name from the architectural movement that exposed raw concrete, services and structure. Online it means the page shows its construction: default fonts, visible borders, plain links and no mediating polish. brutalistwebsites.com defines it as a reaction to the web's "lightness, optimism, and frivolity", valuing "ruggedness and lack of concern to look comfortable or easy". There are two branches: the confrontational one (collisions, clashing type, raw colour) and the austere one (Copeland's guidelines: left-aligned black text on white, styling only to solve a problem).

## The rules that make it this and not something else
- Structure is visible: borders, tables, raw HTML, monospace, default link styling.
- Palette is black, white, grey, with at most one primary used flat.
- No decorative gradients, no blur, no glass, no soft shadow.
- Hierarchy is minimal or crude; dense text is allowed.
- Interaction is honest: only links and buttons respond; links underlined, buttons look like buttons (Copeland principles 2 and 3).
- Performance and plain scrolling are features; the page is fast because there is nothing on it.
- Pairing a default serif body with a Helvetica heading is the canonical austere stack (brutalist-web.design uses Helvetica headings and Calisto body).

## Tokens decoded
- Canvas #ffffff, ink #000000, one accent from {#ff0000, #0000ee, #ffe800}; grey #c0c0c0 for rules. Dark variant: #000000 canvas, #ffffff ink. Link blue #0000EE and visited #551A8B are the HTML Standard defaults and are worth keeping on any link in the film. Copeland's guidelines (brutalist-web.design) also say a button should look like a button (OS-native), the back button must work and content is read by scrolling: in a film, show a real scroll or a hard jump, not a faux-slick carousel.
- Display: Arimo Bold or Archivo 800 at 8-14% of short side; ALL CAPS optional. Body: Tinos or Courier Prime at 3-3.5% of short side. Mono for labels: Space Mono.
- Borders 3px solid #000. Shadow 8px 8px 0 #000. Radius 0.
- Layout: left-aligned, one text column up to 70ch, or full-bleed boxes butting edge to edge with 0 gutter.

## Motion and camera
2D: everything is a cut or a step. Entrances are `steps(1)` or `ease: "none"`; text appears line by line at 80-120 ms per line, or typed at 1 char per frame at 30 fps. Hover/beat states invert colours in 0 ms. Holds 400-900 ms. Camera is locked; allowed moves are a hard jump to a new scroll offset (0 ms) or a 200 ms `power4.out` slide only when a scroll must be shown. No parallax, no overshoot, no blur.
3D (Rasan3D; parameters proposed): slabs as `BoxGeometry` with `k.material("concrete",{color:"#83837e"})` (measured concrete mid) or `k.material("unlit",{color:"#bfb9ad"})` for diagrammatic flatness; `k.rig("low-key",{dir:[-1,1.4,0.6],shadows:true,shadowSoftness:0})` for one hard light; `environment:"none"`; `post:{grain:0}`; no bloom, no DoF. Camera: `lens:[[0,50]]` held, `fstop` unset, `pos` keyed with hard 0ms jumps (two keys at the same time, `"none"` ease) to the next elevation; 90 degree cuts, not tweens. Type on a slab through `k.pinDom(el,{at:slab,width:3,px:[960,540],face:"object",offset:[0,0,0.06]})` so it stays a crisp underlined DOM link. See also the library entry concrete-brutalist-3d.

## How to instruct a model to build it
"Build in brutalist web style. Canvas #fff, ink #000, one accent #ff0000 flat. Fonts: Arimo Bold for headings, Tinos for body, Space Mono for labels; no web-font flourishes. Every container gets a 3px solid #000 border, radius 0, optional 8px 8px 0 #000 shadow. Layout is flush-left, content colliding with the frame edge; no centring, no gradients, no blur, no glass. All motion on GSAP with ease 'none' or steps(1): text appears line by line every 0.1s, colours invert instantly on the beat, nothing eases or overshoots. Links underlined. Camera locked." Claude tends to add soft shadows and 12px radii unprompted: forbid them by name. GPT-style output tends to default to neo-brutalist pink/yellow cards: specify "black and white only".

## Blending notes
Carries: hard borders, step motion, default-font honesty, the single flat accent. Pairs with Swiss grids if the disorder is controlled (discipline vs rawness). Breaks with any polish layer: glass, gradient, eased camera moves, premium photography. Mixed with warm or luxury systems it reads as parody unless intentional.
Also clashes with (not library entries): soft-gradient SaaS.

## Sources
- https://brutalist-web.design/ — Copeland's guidelines: raw means truth to materials, underlined links, native buttons, back button, scrolling (fetched)
- https://brutalistwebsites.com/ — definition quoted above, curated examples are monochrome and visibly structured (fetched)
- https://en.wikipedia.org/wiki/Brutalist_architecture — beton brut, honest materials, exposed services (fetched)
- https://html.spec.whatwg.org/multipage/rendering.html — #0000EE link and #551A8B visited defaults (fetched)
- https://commons.wikimedia.org/wiki/File:Unit%C3%A9_d%27Habitation_de_Marseille_4.JPG — concrete colour measurement (fetched)
Unverified: Pascal Deville as curator of brutalistwebsites.com (not on the fetched page); motion timings, accent choice and the 3D parameters are RasanAI proposals, not sourced.
