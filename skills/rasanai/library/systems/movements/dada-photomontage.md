---
id: "dada-photomontage"
name: "Dada and Berlin photomontage"
kind: "movement"
era: "1916-1925, Zurich, Berlin, Cologne, Paris, New York"
origin: ["Hugo Ball", "Emmy Hennings", "Hannah Hoch", "Raoul Hausmann", "John Heartfield", "George Grosz", "Kurt Schwitters", "Johannes Baader"]
palette: {"roles":{"canvas":"#e8dfc9","ink":"#151515","accent":"#c4271c","paper2":"#cfc3a6","grey":"#7d7a72"},"logic":"newsprint cream and halftone black with one printer's red; collage pieces keep their own sepia and grey; hex values approximate, unverified"}
type: {"display":{"family":"jobbing wood and metal type, mixed sizes and faces, cut from print","free_alternative":"Alfa Slab One, Abril Fatface, Rozha One, Bevan (OFL)","weights":[400,900],"case":"mixed, caps","tracking":0},"body":{"family":"typewriter or newspaper serif","free_alternative":"Special Elite or Courier Prime (OFL), Playfair Display","weights":[400]},"rules":["letters clipped from newspapers like ransom notes","no alignment; baselines jump","type as image, often slashed or rotated"]}
grid: {"columns":0,"baseline_px":0,"margins":"none; all-over composition","rules":["overlap and crowding rather than space","scale shocks: giant head, tiny body","vertical and diagonal axes colliding"]}
shape: {"radius":0,"stroke":"scissor-cut edges, torn edges","shadow":"slight paper-lift shadow on cut pieces","imagery":"halftone newspaper photographs, machine parts, maps, politicians, sports stars, dancers, text fragments"}
texture: "newsprint halftone, glue stains, tape, torn paper, xerographic grain"
motion: {"language":"cut, stutter, jump, no tweening between states","timing_ms":[80,160,320,700],"eases":{"enter":"steps(1)","move":"power4.out","exit":"steps(1)","wobble":"rough({strength:1,points:10})"},"entrances":["pieces snap in on frame boundaries","scissor cuts reveal pieces","pieces drop in at random rotation with a thud"],"camera":"locked cutting-mat view, jolting jump-cuts, occasional rotation","signature":"stop-motion collage: shapes appear at 8-12 fps on twos with no easing"}
space: {"2d":"native","3d":"collage in real depth: flat photographic cards at different z-depths with paper shadow"}
good_for: ["protest, satire, political and cultural commentary", "anti-ad, music videos, punk-adjacent brands", "editorial films about disruption"]
not_for: ["luxury, healthcare, finance trust films", "anything clean or corporate"]
blends_with: ["punk-xerox-zine", "constructivism", "futurism-italian", "vorticism-and-english-modernism"]
clashes_with: ["swiss-international", "vienna-secession", "mid-century-modern"]
cheap_tells: ["a ransom-note font with perfectly clean edges and no scale shocks", "Photoshop 'torn paper' brush instead of cut pieces from real halftone images", "random chaos with no target: Berlin photomontage was political and targeted", "sepia filter on a modern photograph", "ignoring the printed-source look: halftone dot, misregistration"]
sources: ["https://en.wikipedia.org/wiki/Dada", "https://en.wikipedia.org/wiki/Photomontage", "https://en.wikipedia.org/wiki/Hannah_H%C3%B6ch", "https://en.wikipedia.org/wiki/Futurism"]
---
## What it is
Dada emerged in 1916 in neutral Zurich at the Cabaret Voltaire, founded by Hugo Ball and Emmy Hennings, as a protest against war, nationalism and cultural conformity using nonsense, chance and ridicule (Wikipedia). In Berlin it became political photomontage: John Heartfield and George Grosz are credited with inventing modern photomontage in 1916 (Grosz's recollection, Wikipedia), and Hannah Hoch began in 1918. Her Cut with the Kitchen Knife Dada through the Last Weimar Beer-Belly Cultural Epoch of Germany (1919) is 90 x 144 cm and mixes images of political leaders, sports stars, mechanised city images and Dada artists, shown at the 1920 First International Dada Fair.

## The rules that make it this and not something else
- Cut, don't paint: scissors and glue; the edge of each piece is visible.
- Source from the mass media: newspapers, magazines, advertisements. The image is argument by juxtaposition.
- Scale and category shocks: a head on a machine, a body from sport on a politician (Hoch).
- Chance and nonsense as method (Wikipedia); but political targets stay specific in Berlin.
- Typography is also clipped: mixed sizes, ransom-note composition, text as image.
- Related techniques in the same movement: assemblage, sound poetry, readymades (Duchamp).
- A kitchen-knife metaphor: the cut as critique (Hoch's reading, Wikipedia).

## Tokens decoded
- Canvas `#e8dfc9`, ink `#151515`, printer red `#c4271c` as a single accent, paper variants `#cfc3a6`. Approximate, unverified.
- Display: Alfa Slab One / Abril Fatface at mixed sizes in one headline; body Special Elite 400 as typewriter captions; sizes jump 6x.
- Imagery: halftone dot at 6-8px pitch, 45 degree angle, contrast raised; cut-out with 1-2px white paper edge.
- Layout: no grid; 12-20 pieces per scene; at least three pieces overlap.
- Shadow: 2px offset, 20% black, no blur beyond 3px.

## Motion and camera
2D: stepped, no easing. Pieces appear with `steps(1)` on every second frame (on twos at 12 fps on a 24 fps film, or hold every 80ms at 30 fps), each rotated by a seeded random -12 to 12 degrees. Each drop uses `power4.out` over 160ms with a 4px thud. Scissor cuts: a clip-path polygon reveals a piece in 120ms. Jitter: small `rough` ease for wobble, amplitude 2px at 12 fps. Hold 700ms between collage states. Camera: locked top-down on a cutting mat; one rotation of 8 degrees over 320ms on a beat.
3D: flat photographic cards (`k.panel` with printed halftone textures) at z offsets of 0.02-0.4 units; camera an orthographic-like 135mm slow dolly (4% over 5s); paper shadow on a catcher; no depth of field blur on the cards. Collage in space, never a smooth CGI scene.

## How to instruct a model to build it
"Build a Berlin Dada photomontage scene on #e8dfc9. 14 cut-out pieces from halftone photographs (6-8px dot, 45 degrees) with a 2px white cut edge and 2px 20% shadow: a giant head, a small body, a gear, a headline fragment. Pieces appear stepped on every 80ms (`steps(1)`), each rotated by a seeded value between -12 and 12 degrees, dropped with `power4.out` 160ms. One element in #c4271c. Headline built from cut-out letters in Alfa Slab One and Abril Fatface at five different sizes. Hold 700ms, then replace three pieces. No smooth fades, no gradient." Claude: seed the randomness (mulberry32 on frame index). GPT: ban the clean 'torn paper' effect and require halftone source images.

## Blending notes
Carries: stepped motion, scale shocks, halftone, targeted satire. Pairs with zine and constructivism. Break with refined or luxury systems.

## Sources
- https://en.wikipedia.org/wiki/Dada — Zurich origin, philosophy, techniques
- https://en.wikipedia.org/wiki/Photomontage — Heartfield, Grosz, Hoch, Rejlander
- https://en.wikipedia.org/wiki/Hannah_H%C3%B6ch — 1919 work, size, themes
- https://en.wikipedia.org/wiki/Futurism — related typography (cross-reference)
- Unverified: palette values; the 8-12 fps motion mapping is a proposed translation, not period practice.
