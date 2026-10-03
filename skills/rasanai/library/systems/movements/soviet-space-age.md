---
id: "soviet-space-age"
name: "Soviet space-age graphics"
kind: "movement"
era: "1957-1970s, USSR"
origin: ["state poster artists, many anonymous (Konstantin Ivanov, Boris Berezovsky named in one source)", "Constructivist lineage", "Tekhnika Molodezhi magazine", "Russian Cosmism (thematic)"]
palette: {"roles":{"red":"#d52b1e","midnight":"#0b1f4b","gold":"#e8b923","white":"#f5f1e6","sky":"#2f6fb5","steel":"#8a9099"},"logic":"signal red and deep blue with gold or yellow; whites for text; flat poster colour; hex values estimated from poster reproductions (unverified), colour description matches multiple secondary sources."}
type: {"display":{"family":"heavy Cyrillic grotesque and constructed slab/gothic; hand-lettered slogans","free_alternative":"Oswald (Cyrillic), Russo One (Cyrillic), Bebas Neue (Cyrillic), Roboto Condensed (Cyrillic), Play (Cyrillic)","weights":[700,900],"case":"ALL CAPS","tracking":0.02},"body":{"family":"plain grotesque","free_alternative":"PT Sans, Roboto, Ubuntu (all Cyrillic)","weights":[400,700],"case":"mixed","tracking":0},"rules":["slogan in large caps, white or yellow on solid ground","text follows the diagonal of the composition","figures heroic, monumental, looking up","Cyrillic only if the film is in Russian; otherwise keep Latin letterforms with the same proportions"]}
grid: {"columns":6,"baseline_px":8,"margins":"4-5%","rules":["upward diagonals 20-45 degrees","earth band at the bottom, cosmos above","rocket as central vertical axis","scale contrast: tiny crowd, huge rocket"]}
shape: {"radius":0,"stroke":"solid flat shapes, no outlines or thin dark ones","shadow":"none; flat rays and orbit lines","imagery":"rockets, cosmonauts, satellite with antennas, orbits as ellipses, stars, workers and engineers looking up"}
texture: "offset print, slight paper grain, flat gouache feel"
motion: {"language":"heroic ascent, declarative","timing_ms":[300,600,1200],"eases":{"enter":"power3.out","move":"power2.inOut","exit":"power2.in"},"entrances":["rocket rises from the lower edge","slogan block wipes on the diagonal","orbit ellipse draws in 1200 ms","stars pop in stepped"],"camera":"low angle upward tilt; slow upward drift; locked for slogans","signature":"everything resolves upward along a diagonal; one vertical thrust and a counter-diagonal text block"}
space: {"2d":"native","3d":"low-angle orthographic or 35mm shot of a flat-shaded rocket, deep blue to black gradient, hard sun rim light; no photoreal metal, or chrome only as matte steel"}
good_for: ["science, engineering, aerospace, history, optimistic collective-achievement stories, retro-futurist trailers"]
not_for: ["individualist luxury, intimate drama; avoid using for real political promotion without care"]
blends_with: ["constructivism", "swiss-international", "cassette-futurism", "risograph-culture"]
clashes_with: []
cheap_tells: ["hammer-and-sickle used as ornament, with fake Cyrillic (Latin letters mirrored)", "photoreal rocket with a red filter", "NASA-style blue gradient with Russian font", "grunge distressing masking weak composition"]
sources: ["https://flashbak.com/61-sensational-soviet-space-posters-398905/", "https://www.dailyartmagazine.com/soviet-space-posters/", "https://en.wikipedia.org/wiki/Soviet_space_program"]
---
## What it is
Soviet space-age graphics are the posters, magazine illustrations and stamps that followed Sputnik (October 1957) and Gagarin's flight on Vostok 1 (12 April 1961). They draw on Constructivist strong lines, bold type and saturated colour and on Socialist Realist idealised figures. The mood is utopian and collective: slogans like "Space will be ours!" credit the nation rather than the individual. Most posters are anonymous or lightly attributed.

## The rules that make it this and not something else
- Upward diagonals and a central rocket thrust create ascent.
- Palette of bold reds, deep blues and bright yellows (Flashbak), white text on solid fields.
- Large assertive sans-serif slogans (Flashbak); bold geometric forms and simplified silhouettes.
- Idealised, monumental figures; workers and citizens gazing skyward.
- Space divided between earthly foundations and celestial destinations.
- Symbols (stars, flags, orbit lines) are flat graphic marks, not rendered objects.

## Tokens decoded
Red #d52b1e, midnight #0b1f4b, gold #e8b923, white #f5f1e6, sky #2f6fb5. Display Oswald 700 caps (Cyrillic available), slogan at 9-12% of height, rotated 0 or -12 degrees. Rocket in 2-3 flat tones with a single hard highlight. Orbits: 3 px gold ellipses at 18-25 degree tilt. Margins 4.5%. Stars: 6-14 px 4-point sparks, 40-70 pieces, seeded.

## Motion and camera
2D: rocket enters from y +110% to the composition axis in 1200 ms `power3.out`; slogan wipes along the diagonal (clip-path polygon, 600 ms `power3.out`); orbit ellipse draws via stroke-dashoffset in 1200 ms `power2.inOut`; stars pop with `steps(3)` 300 ms at 30 ms stagger. Camera: slow upward drift (y -3% over 4 s, `power1.inOut`) or tilt-up reveal. Hold slogan 1200 ms.
3D: low-angle camera, 28-35 mm lens, rocket as flat-shaded cylinders and cones on a diagonal path, deep blue to near black backdrop, single hard sun key from upper right with rim, orbit rings as thin emissive tori; no bloom beyond subtle.

## How to instruct a model to build it
"Soviet space-age poster, 1958-63. Flat colours: red #d52b1e, midnight blue #0b1f4b, gold #e8b923, white #f5f1e6. Composition: central rocket on a vertical axis, a 25 degree diagonal slogan block in Oswald 700 caps, earth band at the bottom, tiny figures looking up, orbit ellipse in gold. All shapes flat, no gradients except the sky, no shadows. Motion: rocket rises 1200ms power3.out, slogan wipes in along the diagonal 600ms, orbit draws 1200ms power2.inOut, stars step in. Camera drifts upward 3%." Warn models not to fake Cyrillic: either real Russian text or Latin set in a Cyrillic-proportioned face.

## Blending notes
Carries: upward diagonal, flat red/blue/gold, big caps slogans, orbit lines. Pairs with Constructivism and risograph (flat inks). Breaks against ironic grunge or glossy sci-fi; its sincerity is the point, so mixing with cynicism needs a deliberate frame.
Also clashes with (not library entries): glass/aero; dark-tech neon; Y2K chrome.

## Sources
- https://flashbak.com/61-sensational-soviet-space-posters-398905/ (colours, large sans, diagonals, earth/cosmos split)
- https://www.dailyartmagazine.com/soviet-space-posters/ (anonymity, slogans, themes, Cosmism)
- https://en.wikipedia.org/wiki/Soviet_space_program (Sputnik 1957, Gagarin 12 April 1961, Tereshkova 1963)
- Search snippet only: 1958-1963 as the "golden age" and V. Viktorov's Gagarin poster (not verified on a fetched page)
Unverified: all hex values and sizes; the dailyartmagazine page gave no colour or type specifics, so palette relies on Flashbak.
