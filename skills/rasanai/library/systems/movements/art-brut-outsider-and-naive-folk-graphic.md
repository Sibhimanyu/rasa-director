---
id: "art-brut-outsider-and-naive-folk-graphic"
name: "Art brut, outsider and naive folk graphic"
kind: "movement"
era: "1920s-1960s European roots (Prinzhorn 1922, Dubuffet 1940s-48); naive painting 1880s onward; Hlebine school c.1930"
origin: ["Jean Dubuffet (coined art brut, 1940s)", "Hans Prinzhorn (1922)", "Henri Rousseau", "Aloise Corbaz", "Augustin Lesage", "Alfred Wallis", "Niko Pirosmani", "Hlebine school"]
palette: {"roles":{"ground":"#f1e7cf","black":"#16130f","red":"#c9302c","blue":"#2548a8","white":"#fbf8ef","green":"#4c8a3a","yellow":"#f0c419"},"logic":"unmodulated saturated colour in flat patches; Dubuffet from 1962 limited himself to red, white, black and blue in many works. Hex values approximate and unverified."}
type: {"display":{"family":"Hand-lettered, uneven, mixed case with letters of varying size; childlike sign-painter caps","free_alternative":"Gaegu, Caveat Brush, Rock Salt, Gochi Hand, Special Elite (OFL, Google Fonts); 'Rubik Doodle Shadow' sparingly","weights":[400,700],"case":"mixed","tracking":0.02},"body":{"family":"Short labels only, handwritten","free_alternative":"Patrick Hand / Gaegu","weights":[400]},"rules":["lettering behaves like drawing: wobbly baselines, letters of different sizes","text may fill gaps in the image","never perfect kerning; avoid font-perfect type"]}
grid: {"columns":"none","baseline_px":null,"margins":"edge-to-edge filling; horror vacui","rules":["equal detail across the whole surface (naive art: no recession of background detail)","flat space, objects stacked rather than receding","scale by importance, not perspective"]}
shape: {"radius":"irregular","stroke":"uneven 3-8 px black or dark line, wobbling","shadow":"none","imagery":"figures, animals, houses, plants, patterned fields, jungle, village scenes, imagined cities"}
texture: "thick impasto (Dubuffet's Hautes Pates mixed oil paint with sand, tar, straw, cement, glass), crayon, biro, board or cardboard support, glass painting (Hlebine; unverified), stains"
motion: {"language":"hand-drawn, boiling, wonky","timing_ms":[83,166,500],"eases":{"enter":"steps(2)","move":"none","exit":"steps(1)"},"entrances":["drawn-on with hand-drawn wiggle (SVG turbulence displacement)","pop-ups on twos","shapes hand-coloured in patches"],"camera":"static, flat; slow lateral slide across an enormous drawing","signature":"line boil at 6-8 fps over flat colour fields, characters arriving as drawn cut-outs in sequence"}
space: {"2d":"native","3d":"flat card dioramas with deliberately wrong scale; clay or `matte` material with visible fingerprints; ortho 50 mm; avoid realistic light"}
good_for: ["children's, community, social-impact, mental-health, grassroots and artisanal brands", "stories about human authenticity against polish", "music and zine culture"]
not_for: ["enterprise SaaS", "luxury precision", "any subject where the maker's ethics depend on seriousness (be careful with mental-health framing)"]
blends_with: ["punk-xerox-zine", "mexican-loteria", "indian-truck-art", "scandinavian-modern-design", "paper-cut-and-papercraft"]
clashes_with: ["swiss-international", "y2k-chrome"]
cheap_tells: ["a random hand-drawn font on a clean vector layout", "'childlike' made by a competent illustrator with symmetric cuteness", "wobbly filter on everything", "romanticising the makers' hardship", "making the art brut look by AI imitation without a named maker or reference"]
sources: ["https://en.wikipedia.org/wiki/Art_brut", "https://en.wikipedia.org/wiki/Jean_Dubuffet", "https://en.wikipedia.org/wiki/Na%C3%AFve_art", "https://www.artbrut.ch/en_GB/art-brut"]
---
## What it is
Art brut ("raw art") is Jean Dubuffet's 1940s term for work made from solitude and pure creative impulse, outside competition, acclaim and cultural assimilation. Roger Cardinal coined the English "outsider art" in 1972; Hans Prinzhorn's 1922 book on psychiatric patients' art drew the avant-garde (including Dubuffet). Dubuffet founded the Compagnie de l'Art Brut in 1948; its collection now sits in Lausanne, with makers such as Aloise Corbaz, Augustin Lesage, Marguerite Sirvins and Auguste Walla. Naive art is a related but distinct category: art by people lacking or choosing not to use formal training, with flat rendering, equal detail throughout and vibrant unmodulated colour. Henri Rousseau (1844-1910) is the key figure; the Hlebine school in Croatia (c. 1930 on) is the folk branch.

## The rules that make it this and not something else
- The maker's own logic of space: flat, stacked, equally detailed, not in Renaissance perspective (Naive art article).
- Colour unmodulated and strong; black line unevenly drawn.
- Surface is physical: Dubuffet's Hautes Pates used sand, tar, straw, cement and glass in paint.
- Obsessive fill of the page; no empty margin hierarchy.
- Text and image mixed with no polish.
- Dubuffet's own palette discipline: red, white, black, blue from 1962 (Wikipedia).
- Important distinction: art brut is by outsiders; naive is trained-by-nobody but social; "faux-naive" by trained designers is a style exercise, not the thing.

## Tokens decoded
- Ground `#f1e7cf`, ink `#16130f`, red `#c9302c`, blue `#2548a8`, white `#fbf8ef`; greens and yellows only if the subject is nature.
- Fonts: Gaegu or Patrick Hand for labels, Rock Salt for big scrawl, Caveat Brush for marker display, Special Elite for typewriter fragments. All OFL.
- Line: 4-6 px, rendered with an SVG feTurbulence + feDisplacementMap (scale 4-8) so edges wobble; refresh the seed every 125 ms for a boil.
- Fill: colour patches with a 3-8 px gap or overlap against the outline.
- Texture: impasto via a normal-map-like emboss (SVG feDiffuseLighting) at 10-15%.

## Motion and camera
2D: everything moves on twos or threes (83-125 ms holds). Line boil: switch the displacement seed every 125 ms `steps(1)`. Items arrive by "pop" in 166 ms with `steps(2)`; colour patches fill in by a sloppy clip-path wipe 500 ms `none`. Camera is a flat horizontal slide at 30-50 px/s across an overfull picture; no zoom, no depth blur. Cuts on a drawn wipe (a scribble that covers frame, 8 frames).
3D: dioramas of clay-like objects with `clay` material, deliberately mismatched scale, a flat painted backdrop at 3-5 units, camera 50 mm, fixed; use a post pass to quantise colour and add 1-2 px edge wobble driven by a time-stepped (twos) uniform; no soft realistic shadows.

## How to instruct a model to build it
"Make it look like a self-taught maker's drawing, not an illustrator's. Cream ground #f1e7cf, black wobbly outline 5 px via feDisplacementMap (scale 6, seed refreshed every 125 ms), flat unmodulated colour patches (#c9302c, #2548a8, #f0c419, #fbf8ef). Fill the frame, equal detail everywhere, no perspective, objects scaled by importance. Handwritten text in Gaegu with uneven baselines, never kerned. Animate on twos and threes with steps eases, no smooth tweens. No gradients, no drop shadows, no symmetrical cute faces." Claude tends to make it tidy and symmetric; say "asymmetric, crowded, slightly wrong proportions". GPT-style generation tends to add decorative cuteness; ask for awkwardness.

## Blending notes
- Carries: flat colour, equal detail, hand wobble, on-twos motion.
- With Scandinavian: keep the folk pattern and warmth, drop the clutter.
- With punk zine: shared DIY ethos, add photocopy texture.
- Breaks: smooth easing, perfect geometry, glass or chrome.
- Ethics: credit and avoid pastiche of named, vulnerable makers; use "in the spirit of" and original drawings.
Also clashes with (not library entries): corporate minimal.

## Sources
- https://en.wikipedia.org/wiki/Art_brut: Dubuffet's definition, 1948, Prinzhorn, Cardinal 1972.
- https://en.wikipedia.org/wiki/Jean_Dubuffet: materials, Hautes Pates, 1962 palette.
- https://en.wikipedia.org/wiki/Na%C3%AFve_art: naive characteristics, Rousseau, Hlebine.
- https://www.artbrut.ch/en_GB/art-brut: Lausanne collection, makers.
- Unverified: glass-painting detail for Hlebine (the fetched Hlebine page was a 404), hex values, motion timings and filter settings (RasanAI proposals).
