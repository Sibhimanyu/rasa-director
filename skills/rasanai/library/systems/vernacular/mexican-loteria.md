---
id: "mexican-loteria"
name: "Mexican Lotería cards (Clemente Jacques / Don Clemente Gallo lineage)"
kind: "vernacular"
era: "Game in New Spain from c. 1769; standard 54-card deck published from 1887; printed and painted tablas through the 20th century to now, Mexico"
origin: ["Clemente Jacques (Don Clemente company, 1887)", "Don Clemente Gallo Pasatiempos (later publisher of the deck)", "José Guadalupe Posada (engraver; cited as also making lotería sets)", "anonymous popular painters of tin and paper tablas", "Teresa Villegas (Nueva Versión, 2001-2008, with Pasatiempos)"]
palette: {"roles": {"canvas": "#efe3c4", "ink": "#1d1a17", "accent": "#c8301f", "second": "#1f5c9e", "third": "#e9b52b", "fourth": "#2f7a4a"}, "logic": "All hex values are proposed (not sourced). The sources call the style direct, flat and highly chromatic: few flat hues per card, a cream paper ground, a dark outline, one red or blue dominant, no gradients. The card is a small coloured emblem, not an illustration of a scene.", "evidence": "all hexes proposed, none measured from an image this pass (earlier note in logic stands)"}
type: {"display": {"family": "Libre Caslon Text", "free_alternative": "Libre Caslon Text / Alfa Slab One", "weights": [400, 700], "case": "upper", "tracking": 0.04, "note": "Alfa Slab One (400) if a heavier slab caption is wanted."}, "body": {"family": "Libre Caslon Text", "free_alternative": "Libre Caslon Text", "weights": [400], "case": "mixed", "tracking": 0, "note": "Use the italic for the cantor's rhyme."}, "rules": ["caption (EL GALLO, LA SIRENA) in capitals at the bottom of the card, centred", "number at the top, small, in a plain numeral", "verse or rhyming riddle, if shown, set small in italic, never as the display line", "do not use a distressed 'Mexican' display font: the lettering on cards is plain and sturdy"]}
grid: {"columns":1,"baseline_px":0,"margins":"card inset 6-8 percent; caption band at the bottom 12-14 percent; number at top 8 percent","rules":["a card is one centred emblem on a cream ground with a number and a caption","a tabla is a 4 x 4 grid of 16 cards, the deck has 54","card proportion about 2:3 portrait (the Don Clemente Giant Deck is listed as 10 x 15 cm in a retailer listing, not a fetched source)","one image, no background scene, a ground line or small flat shadow only"]}
shape: {"radius":4,"stroke":"dark outline around each figure, 2-3 px at 1080p","shadow":"none; at most a flat ground shape","imagery":"emblems of Mexican daily life, nature, trades and moral archetypes: El Gallo, La Sirena, La Calavera, La Rana, El Valiente, El Borracho, El Catrin, La Dama among the 54"}
texture: "paper only; mild print misregistration and a 1-2 px colour offset are faithful, not an effect to add everywhere"
motion: {"language":"game-like, turn-based, deadpan with a flip and a caller's rhythm","timing_ms":[180,320,700],"eases":{"enter":"power2.out","move":"power2.inOut","exit":"power2.in"},"entrances":["card flip around Y over 320 ms","card slides from the deck and lands with a 2 px settle","caption fades up under the card 120 ms after landing"],"camera":"top-down locked, a slow 3 percent push on the drawn card; the tabla as a fixed grid","signature":"the cantor draws a card, it turns over, the rhyme is read; the matching square on the tabla is marked with a bean or bottle cap"}
space: {"2d":"native","3d":"real cards as paper planes on a table, top-down or 30 degrees, with a single warm key; flip is a real rotation, not a spin"}
good_for: ["games, chance, community, luck, a card-per-idea structure", "lists of 54 or 16 things, one image per idea", "Latin American or Mexican-American cultural stories told by the community itself", "explainers where each idea gets a named emblem"]
not_for: ["dense data", "premium minimal tech unless used as a playful interlude", "anything solemn"]
blends_with: ["engraving-etching", "screenprint", "newspaper-broadsheet", "paper-cut-and-papercraft"]
clashes_with: ["frutiger-aero", "glass-product-cgi"]
cheap_tells: ["using the cards as a 'Mexico' wallpaper: the cards are a game with names, numbers and rhymes, each image carries a caller's joke or proverb; a pile of random cards with no role says nothing", "typing the caption in a fake 'Mexican' display font or a mariachi-style script", "adding skulls and marigolds because Day of the Dead is the stock association: La Calavera is one card of 54", "gradients, glow or 3D rendered emblems: the deck is flat colour", "ignoring that the number and the name are part of the card", "mistaking the 1887 Don Clemente deck for the whole tradition: there were earlier hand-painted regional sets and a long run of artist-made decks"]
verified: {"sources_fetched": 4, "non_wikipedia": 2, "colours": "proposed", "colour_images": [], "grid": "proposed", "timings": "proposed", "recipes": "aligned", "edited": "2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Loter%C3%ADa", "https://teresavillegas.com/history-of-la-loteria/", "https://yucatanmagazine.com/legacy-of-mexican-loteria/", "https://en.wikipedia.org/wiki/Jos%C3%A9_Guadalupe_Posada"]
tags: ["card-game", "mexico", "flat-colour", "emblem", "folk-print", "tabla", "caption", "popular-art"]
domain: "vernacular"
---
## What it is

Lotería is a Mexican game of chance in which a caller (cantor) draws one of 54 picture cards, names it, often with a rhyme or joke, and players mark a matching image on a tabla, a 4 x 4 grid of 16 pictures, with beans, coins or bottle caps. The first to fill a row, diagonal, four corners, the square or the whole board calls "Lotería". It reached Mexico from Italy by way of Spain (Wikipedia and Villegas date arrival in New Spain to about 1769), was a pastime of elites, and became a fixture of fairs. The version most people know was published by the French businessman Clemente Jacques from 1887, whose firm is said to have packed it into soldiers' rations (Villegas; Wikipedia). It is later associated with Don Clemente Gallo Pasatiempos. The pictures are the working vocabulary of a whole visual culture, and they belong to the people who play with them.

## The rules that make it this and not something else

- One emblem per card, centred, on a plain ground; no background scene.
- Each card has a number at the top and a name at the bottom (Villegas). The caption is part of the image.
- The deck is 54 cards; a tabla shows 16. Structure is a fixed grid and a draw.
- Colour is flat and chromatic: the Yucatán Magazine text calls the style "direct, flat, and highly chromatic, with little pretense to fine art". Treat that as the colour rule: three to five hues, black outline, no gradient.
- Subjects are everyday and archetypal: animals, trades, objects, social types. Cards named in the fetched pages: El Gallo, La Sirena, La Calavera, La Rana, El Valiente, El Borracho. Others such as El Catrin and La Dama are standard in the deck; the full card list was not verified item by item from a fetched page.
- The images carry spoken verses. Motion should include the voice of a caller, not only the picture.
- Before the Jacques standard, cards and tablas were "often painted by hand by individual artists to many regional variations" (Yucatán Magazine); Villegas mentions vintage tablas painted on tin and watercolours on paper from about 1920. José Guadalupe Posada, the Mexico City engraver working with Antonio Vanegas Arroyo, is cited by Yucatán Magazine as having made lotería sets; his relief-engraved broadsides (lead, zinc) are the nearest print lineage, which is why engraving line plus flat colour sits naturally with this system. The fetched sources do not state what printing method the 1887 deck used; do not assert one.

## Tokens decoded

- Ground: a warm paper cream, proposed #efe3c4 (not sourced).
- Palette (proposed): ink #1d1a17, red #c8301f, blue #1f5c9e, yellow #e9b52b, green #2f7a4a. Pick one dominant, never more than five hues per card.
- Type: Libre Caslon Text capitals for the caption (Google Fonts family, confirmed by page title this session), numerals in the same face; Alfa Slab One for a heavier caption.
- Layout per card: 8 percent top for the number, emblem 60-66 percent of height, caption band 12-14 percent.
- Stroke: 2-3 px at 1080p, a single weight everywhere.
- Tabla: 4 x 4 with 16-24 px gutters; a dark frame; cards slightly misregistered 1 px for authenticity (optional).

## Motion and camera

- A card is drawn: it enters from the top-right on `power2.out`, 320 ms, rotating about Y from 90 to 0 degrees (front face reveal), settles 2 px with `power2.inOut` 140 ms.
- The caption slides up 6 px and fades in 120 ms after the card lands; hold 900-1400 ms so the verse can be read or heard.
- The matching tabla square gets a marker: a flat circle scales 0 to 1 in 160 ms with `back.out(2)`, never a sparkle.
- Cuts between cards on the beat; the tabla is a persistent 2D base.
- Camera: top-down locked; a 3 percent push on the drawn card over its hold (`sine.inOut`); a slow pull-back to reveal the filled tabla at the end.

3D reading. Real cards as paper: `k.pxPlane` for each card at 4-8 mm thickness, `k.material("paper", {color})` for faces, a darker paper edge; `k.rig("top-soft")` with `dir` [0.4, 1, 0.3] to give a table lamp; lens 70-85 mm top-down at 1.2 m so cards do not distort; the draw is a lift of 0.04 m and a turn, 600 ms `power3.inOut`, then a soft landing with a shadow settling one frame later (use `k.ground` as a shadow catcher). Never a spinning card in a void.

## How to instruct a model to build it

> HyperFrames, 1920x1080, 30 fps, GSAP, one paused timeline. Build a Mexican Lotería card system. Each card is a 2:3 portrait div on a cream ground (#efe3c4, proposed): number at the top in Libre Caslon Text 700, one centred flat-colour emblem (inline SVG, black 2.5 px outline, at most five fills from [#c8301f, #1f5c9e, #e9b52b, #2f7a4a]) 62 percent of card height, caption in capitals at the bottom, tracked 0.04 em. No gradients, glow, blur or 3D rendering. The sequence per card: enter 320 ms `power2.out` with a Y rotation 90 to 0, settle 140 ms `power2.inOut`, caption fade-up 120 ms later, hold 1100 ms. A 4 x 4 tabla persists behind; when a card is drawn, a flat circle marker scales 0 to 1 in 160 ms on `back.out(2)` on the matching square. Subtle 1 px colour misregistration is allowed on outlines. Do not add skulls or marigolds unless the story calls for them, and do not use faux-Mexican display fonts. Claude: use the verse as the voiceover rhythm, one card per beat. GPT: give each card a name and a one-line subject, or it repeats the same emblem.

## Blending notes

- Carries: one emblem per idea, the number and name, the draw-and-turn rhythm, flat colour with an outline.
- With engraving or broadside styles (Posada lineage): thin hatching inside the flat fills.
- With Swiss or data styles: use the tabla as a structure for a 4 x 4 grid of facts, keeping the cards' caption discipline.
- Breaks: photography, gradient lighting, thin sans-serif only.


Finish: this look is hard-edged or stepped, so set `data-finish-blur="off"` on the scene's frame root; the film finish then renders the scene from the centre sub-frame instead of averaging sub-frames, which would smear the flat edges. Use `steps(n)` eases or hold frames for any stepped layer and never `power*` tweens on it.
## Sources

- https://en.wikipedia.org/wiki/Loter%C3%ADa — Italian origin, arrival in New Spain about 1769, 54 cards with names and numbers, 4 x 4 tabla, cantor, winning patterns, Jacques 1887, soldiers' supplies. (fetched)
- https://teresavillegas.com/history-of-la-loteria/ — Spain to Mexico, Clemente Jacques's printing division, caption at bottom and number at top, tablas painted on tin and paper, the Nueva Versión (2001-2008) with Don Clemente Gallo Pasatiempos. (fetched)
- https://yucatanmagazine.com/legacy-of-mexican-loteria/ — "direct, flat, and highly chromatic", pre-1887 hand-painted regional variations, Posada sets, named cards, cultural spread. (fetched)
- https://en.wikipedia.org/wiki/Jos%C3%A9_Guadalupe_Posada — relief printing, lead and zinc engraving, Vanegas Arroyo, broadsheets and chapbooks, over 20,000 images: the print lineage context. (fetched)

Not sourced this session: the printing method of the 1887 deck, exact historic colours, the full card list with numbers, and the Pasatiempos ownership chronology. All hex values are proposed. The 10 x 15 cm size comes from a retail listing seen only in a search result.
