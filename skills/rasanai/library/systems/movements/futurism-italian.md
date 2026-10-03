---
id: "futurism-italian"
name: "Italian Futurism (parole in liberta and Depero)"
kind: "movement"
era: "1909-c.1944, Milan, Rome, Rovereto"
origin: ["Filippo Tommaso Marinetti", "Giacomo Balla", "Umberto Boccioni", "Carlo Carra", "Luigi Russolo", "Fortunato Depero"]
palette: {"roles":{"canvas":"#f1e9d6","ink":"#111111","red":"#d4281f","yellow":"#f2b705","blue":"#1b4fa0","green":"#2f7d4f"},"logic":"saturated primaries and black on cream newsprint, set at angles; hex values approximate, unverified"}
type: {"display":{"family":"mixed jobbing founts: heavy grotesques, Egyptians, Didones in one composition","free_alternative":"Anton, Bebas Neue, Alfa Slab One, Playfair Display Black (all OFL)","weights":[400,900],"case":"caps, mixed with lowercase","tracking":0},"body":{"family":"grotesque","free_alternative":"Archivo","weights":[400,700]},"rules":["up to twenty typefaces on one page (Marinetti, 1913)","words scattered, rotated, sized by sound or force","no punctuation, mathematical and musical signs allowed","onomatopoeia as imagery"]}
grid: {"columns":0,"baseline_px":0,"margins":"none; diagonals and radial bursts","rules":["axes at 20-45 degrees, not 0","words as vectors that point and collide","density in the centre, thinning at edges"]}
shape: {"radius":"none; wedges, arrows, zig-zags, concentric arcs","stroke":"thick black","shadow":"none","imagery":"force lines, repeated silhouettes for motion (Balla), machines, cities"}
texture: "newsprint paper, letterpress ink, tin or metal for Depero's objects"
motion: {"language":"speed, collision, simultaneity","timing_ms":[90,180,320,600],"eases":{"enter":"expo.out","move":"power4.inOut","exit":"power3.in","hit":"back.out(2.5)"},"entrances":["words fly in along the axis of their direction and overshoot","repeated ghost copies trail behind a moving shape","lines radiate on a beat"],"camera":"whip pans, rotating frame, zoom bursts","signature":"onomatopoeia words that slam in at angles on the beat, each with a trailing copy"}
space: {"2d":"native","3d":"possible as flat letter-planes at angles in a room, sans smooth lighting"}
good_for: ["music, sports, transport, energy, launches with raw velocity", "manifestos", "retro-futurist title sequences"]
not_for: ["calm wellness, finance with trust cues, heritage warmth", "projects that cannot take the political baggage (see below)"]
blends_with: ["constructivism", "vorticism-and-english-modernism", "dada-photomontage", "punk-xerox-zine"]
clashes_with: ["swiss-international", "vienna-secession", "japanese-modern-tanaka-kamekura"]
cheap_tells: ["random font salad with no force direction", "all text rotated the same angle", "retro-sepia filter instead of real saturated primaries", "using the manifesto's violent rhetoric uncritically", "using Depero's 1930s fascist propaganda as a style reference"]
sources: ["https://en.wikipedia.org/wiki/Futurism", "https://en.wikipedia.org/wiki/Fortunato_Depero", "https://www.sothebys.com/en/articles/free-verse-and-words-in-freedom-1", "https://www.moma.org/collection/works/31450"]
---
## What it is
Futurism began in Milan in 1909 with Marinetti's Manifesto of Futurism, celebrating dynamism, speed, technology, youth, violence, the car, the aeroplane and the industrial city (Wikipedia). Painters (Balla, Boccioni, Carra, Severini) used Divisionism and Cubist devices to render motion; Balla's Dynamism of a Dog on a Leash (1912) multiplies the limbs and lead. Writers practised parole in liberta (words in freedom): no syntax, no punctuation, scattered type. Russolo's Art of Noises (1913) extended it to sound. Many Futurists supported Fascism, which damaged the movement's reputation; Depero's 1930s-40s propaganda is controversial and is excluded from some galleries (Wikipedia).

## The rules that make it this and not something else
- Motion is shown by multiplication: repeated outlines, vibrating forms, force lines.
- Typography is released from harmony: Marinetti, 1913: "twenty different typefaces if necessary" on one page, against "the typographic harmony of the page" (Sotheby's quote via search).
- Parole in liberta: compound words, infinitive verbs, mathematical and musical signs, variable sizes alternating bold, italic, block and capitals (Sotheby's).
- Zang Tumb Tumb (published 1914, begun 1912 from the siege of Adrianople): the page is an acoustic and visual scene (MoMA).
- Colour: saturated, unmixed (approximate palette above, unverified).
- Depero's applied work: 1932 Campari Soda bottle still in production (Wikipedia); commercial design with bold colour and dynamic composition.
- Subject matter: machines, cities, noise, war; the movement's glorification of violence should be left out of any brief.

## Tokens decoded
- Canvas `#f1e9d6`, ink `#111111`, red `#d4281f`, yellow `#f2b705`, blue `#1b4fa0`. Approximate, unverified.
- Type: Anton 400 and Alfa Slab One 400 for impact words, Playfair Display 900 italic for contrast, Archivo 700 for connectors. Max 5 fonts per frame in practice; 20 is the manifesto, not a rule for screens.
- Sizing: impact word 40-70% of frame height; contrast ratio between largest and smallest word at least 8:1.
- Axes: place every word on a radial or 20-45 degree axis; avoid horizontal lines except as ground.
- Stroke: 6-10px black wedges and arrows.

## Motion and camera
2D: each word enters along its own axis from off-frame, 180ms `expo.out`, overshoot 4% via `back.out(2.5)`, then a trailing ghost copy at 40% opacity lags 90ms and fades in 320ms. Radial lines draw from a centre in 240ms `power4.inOut`. Hold only 320-600ms between hits; keep a beat grid at 120-140 bpm. Camera: a 6 degree rotating whip over 180ms `power4.inOut`, then a locked frame; zoom bursts 1.0 -> 1.15 in 120ms on the hit.
3D: flat letter-planes (`k.text`) at tilted angles around a camera on a fast 135mm push with motion blur from sub-frames; unlit materials; no soft lighting.

## How to instruct a model to build it
"Futurist sound-poem scene on #f1e9d6. Six words, each in a different font (Anton, Alfa Slab One, Playfair Display 900 italic, Archivo 700), placed on radial axes at 20, 35 and 45 degrees; largest 60% of frame height. Each flies in along its axis from off-frame in 180ms `expo.out` with `back.out(2.5)` overshoot, leaves a 40% ghost copy 90ms behind that fades in 320ms. 6-10px black wedges and arrows radiate from the centre on each hit. Palette: #d4281f, #f2b705, #1b4fa0 on cream, no gradients. Do not use war or violence imagery." Claude: specify angles and which words are heaviest. GPT: warn against a uniform grunge filter.

## Blending notes
Carries: force-line type, simultaneity, primary colour. Pairs with constructivism and Vorticism, both related in energy. Breaks with Swiss or Secession order, and needs a sober frame on content that suits it.

## Sources
- https://en.wikipedia.org/wiki/Futurism — origins, artists, politics
- https://en.wikipedia.org/wiki/Fortunato_Depero — Campari, propaganda controversy
- https://www.sothebys.com/en/articles/free-verse-and-words-in-freedom-1 — 1913 typographic principles (via web search)
- https://www.moma.org/collection/works/31450 — Zang Tumb Tumb, 1914 (via web search)
- Unverified: hex values; the Words_in_Freedom Wikipedia page did not exist (404).
