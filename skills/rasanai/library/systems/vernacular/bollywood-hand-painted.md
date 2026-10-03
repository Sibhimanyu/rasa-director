---
id: "bollywood-hand-painted"
name: "Hand-painted Hindi cinema hoardings and posters"
kind: "vernacular"
era: "1930s-1990s peak, still practised in small studios; Mumbai (Bombay)"
origin: ["Gopal Balwant Kamble (G. Kamble, 1918-2002)", "Diwakar Karkare (Studio Diwakar, 1960s-1980s)", "Balkrishna Arts, Mumbai", "Ranjit Dahiya (Bollywood Art Project, 2012)", "painters of Lamington Road distributors and Mumbai hoarding workshops"]
palette: {"roles": {"canvas": "#c64d0d", "canvas_deep": "#a71c08", "shadow_red": "#811208", "skin_light": "#bf824b", "skin_shadow": "#895526", "ink": "#3d261c", "title_white": "#ecf2e9", "title_yellow": "#c6ba52", "poster_brown": "#9b582a", "unfinished_cream": "#e8ebb6"}, "logic": "one hot ground, a white or yellow title, faces modelled warm with a red-brown shadow side. Values are measured from V&A collection photographs of real hoardings and a poster; reproduction and photography shift them slightly", "evidence": "measured, k-means 7, 2026-10-03, from V&A images: Devdas hoarding 2002, Balkrishna Arts (https://framemark.vam.ac.uk/collections/2006AG5555/full/!400,/0/default.jpg): orange ground #c64d0d 30%, reds #811208 17% and #a71c08 16%, skin #bf824b 14% and #895526 12%, dark #3d261c 6%, cream #cdb499 6%. Deewaar poster 1975, Karkare (https://framemark.vam.ac.uk/collections/2006AL3930/full/!400,/0/default.jpg): white #ecf2e9 25%, yellow #c6ba52 21%, brown #9b582a 14%, black #0b0f13 12%. Pakeezah hoarding, unfinished (https://framemark.vam.ac.uk/collections/2006AG5554/full/!400,/0/default.jpg): unpainted cream #e8ebb6 32%, skin brown #836844. The earlier proposed #e4631c orange is replaced by the measured #c64d0d (a duller, redder orange)."}
type: {"display": {"family": "Rozha One", "free_alternative": "Rozha One / Yatra One / Teko / Anton / Bebas Neue", "weights": [400], "case": "title case Devanagari plus uppercase Latin", "tracking": 0, "note": "Rozha One, Yatra One, Anton and Bebas Neue are single weight 400; Teko is variable wght 300-700. Rozha One, Yatra One and Teko have Devanagari; Anton and Bebas Neue are Latin only. Real hoardings use hand-lettered title forms, not a font."}, "body": {"family": "Mukta", "free_alternative": "Mukta", "weights": [400, 700], "note": "credits and release line only, small, in a plain block at the foot"}, "rules": ["the title is the largest lettered thing and sits across the middle or bottom third", "white or yellow letters with a dark drop shadow and outline so they read over a busy painted ground", "Devanagari and Latin titles appear together on many posters", "credits in a narrow band, never competing with the faces", "availability: Rozha One, Yatra One, Teko, Mukta, Anton, Bebas Neue are Google Fonts (OFL); script coverage and licence as I know them, only the existence of the family pages was confirmed for Rozha One, Yatra One and Teko in this session"]}
grid: {"columns":"free; built on a scaling grid","baseline_px":0,"margins":"image bleeds to the edge","rules":["the design is drawn small, then scaled to the large canvas square by square (the grid method)","composition is a hero face large at one side with a smaller montage of other faces, scenes and action stacked or overlapped around it","the title crosses the image rather than waiting in a margin","hoarding format is wide landscape (V&A examples 2 m x 5.5 m); posters are portrait (the V&A Deewaar poster is 102 x 76.5 cm)"]}
shape: {"radius":0,"stroke":"loose painted dark contour on key faces, none elsewhere","shadow":"painted, hard-edged and warm; faces are modelled with a visible light side and a red-brown shadow side","imagery":"oil-painted faces from film stills, enlarged heads, guns, flames, doves, cityscape; Karkare used a palette knife to give surfaces a rugged textured look"}
texture: "oil on canvas for hoardings; palette-knife ridges and visible brush on faces; lithographic print dot on reproduced posters; slight canvas weave"
motion: {"language":"stacked reveal, painted not animated","timing_ms":[250,500,900],"eases":{"enter":"power3.out","move":"power2.inOut","exit":"power2.in"},"entrances":["wipe-in from a painter's grid revealing the face in squares","hero face scale-in with a 1.04 settle","montage plates slide in from behind the hero at staggered 120 ms"],"camera":"slow lateral truck along a hoarding, 2-4 percent push on the hero face","signature":"the grid made visible: faint chalk grid lines draw on, then the painting resolves cell by cell"}
space: {"2d":"native","3d":"flat painted planes at layered depth (k.pxPlane), hoarding on a building front in street light; no spinning objects"}
good_for: ["film, music and festival titles", "drama, nostalgia, tribute pieces", "bold single-hero announcements with a strong title"]
not_for: ["data-dense UI explainers", "quiet minimal brands", "any film that wants the look but not the people (it reads as costume)"]
blends_with: ["tamil-cinema-posters", "indian-truck-art", "south-asian-shop-signage-and-ghat-lettering", "indian-matchbox-and-calendar-art", "kalighat-and-indian-folk-painting-lines"]
clashes_with: ["swiss-international", "brutalist-web"]
cheap_tells: ["a Photoshop filter called oil paint over a stock photo: real hoardings show the grid method's slightly enlarged, simplified faces and visible brush logic", "random neon gradients instead of a ground tied to the film", "Comic Sans or a decorative Devanagari font in the title with no outline or shadow work", "no montage: one centred face on a flat colour", "using the genre as irony or kitsch rather than as skilled commercial painting", "stills of living actors' faces copied as a template"]
verified: {"non_wikipedia":5,"colours":"measured","colour_images":["https://framemark.vam.ac.uk/collections/2006AG5555/full/!400,/0/default.jpg","https://framemark.vam.ac.uk/collections/2006AL3930/full/!400,/0/default.jpg","https://framemark.vam.ac.uk/collections/2006AG5554/full/!400,/0/default.jpg"],"grid":"partial","timings":"proposed","sources_fetched":7,"recipes":"aligned","edited":"2026-10-03"}
sources: ["https://collections.vam.ac.uk/item/O72600/pakeezah-1971-indian-film-hoarding-balkrishna-arts/", "https://collections.vam.ac.uk/item/O72592", "https://collections.vam.ac.uk/item/O68655/deewaar-1975-film-poster-karkare-diwakar/", "https://www.tribuneindia.com/news/lifestyle/diwakar-karkare-creator-of-most-iconic-movie-posters-passed-away-on-january-5-196402", "https://en.wikipedia.org/wiki/G._Kamble", "https://en.wikipedia.org/wiki/Bollywood_Art_Project", "http://www.sahapedia.org/hand-painted-signs-forgotten-markers-city-space"]
tags: ["india","mumbai","bollywood","hoarding","oil-painting","grid-method","montage","hand-lettering","cinema"]
domain: "vernacular"
---
## What it is
Until digital printing took over, film advertising in Mumbai was painted by hand. The V&A holds two hoardings made by the family workshop Balkrishna Arts in 2002 (oil on canvas, 2 m high by 5.5 m wide), one an unfinished Pakeezah (1971) with Meena Kumari, one a Devdas (2002) with a vivid orange ground and bold white title. The museum describes how the work goes: rough sketches from film stills, client approval, then the design is scaled up to the large canvas with a grid, then painted; transfer to finished painting takes 1 to 2 days. These are working commercial painters; the V&A frames the form as a characteristic of Mumbai that was once a primary form of film advertising.

Named figures matter here. G. Kamble (1918-2002), self-taught, painted for Ranjit, Bombay Talkies, Gemini and Prabhat, including Mughal-e-Azam (1960) and a 350-foot banner for Do Aankhen Barah Haath (1957) at the Opera House. Diwakar Karkare (JJ School of Art; over 1,000 posters in the 1960s-1980s, Studio Diwakar) is credited with a palette-knife technique from Waqt (1965) and with the "angry young man" look of Amitabh Bachchan on Deewaar and others; in 1985 he is reported to have charged Rs 50,000 for Mard. Ranjit Dahiya (College of Art Chandigarh, NID Ahmedabad) continues hand-painted posters today and began the Bollywood Art Project in Bandra in 2012. Sahapedia notes that M.F. Husain is among the modernists whose careers began in sign painting, which places this craft inside the history of Indian art, not beside it.

## The rules that make it this and not something else
- **The grid method.** The enlargement is by squares. The look carries its method: faces are slightly simplified and pushed to emotional extremes, because the painter works from a small drawing and from film stills, not from a photograph on a screen.
- **Hero face plus montage.** One large star face at one side, smaller heads, scenes, weapons or a city around and behind it, overlapped rather than boxed. The V&A Deewaar poster has Bachchan large on the left with the angry eyes and lips "painted over", a black-and-white Shashi Kapoor portrait lower with a yellow overlay, and the title across the middle.
- **Title crosses the image.** Large distinctive lettering in the middle, white or yellow on a dark or saturated ground.
- **Painted emphasis.** Eyes, lips, the edge of a gun are repainted for emphasis over the photographic base; the finger of the painter is the retouching.
- **Texture is surface, not a filter.** Karkare's palette-knife scrapes read as rugged skin; the canvas hoardings carry brush direction.
- **Scale.** The hoarding is a building-sized object read from a street at 20 to 60 m: silhouettes, value blocks and the title must read in one second. Detail lives only in faces.
- **Not frames of a film.** The poster paints the idea of the film: a vow, a loss, a fight, a love, all compressed.

## Tokens decoded
- Canvas: one saturated ground (orange or warm red for drama, deep blue or black for crime, yellow for comedy) as flat colour, with painted gradients only inside the faces. Hexes in the frontmatter are measured from V&A photographs of the Devdas hoarding (orange `#c64d0d`, reds `#811208` / `#a71c08`, skin `#bf824b` / `#895526`) and the Deewaar poster (white `#ecf2e9`, yellow `#c6ba52`, black `#0b0f13`); the hoarding orange is a deep brick-orange, not a neon one.
- Type: titles as large lettered shapes. Use Rozha One or Yatra One for Devanagari at 190 to 280 px, with a 6 px dark outline and a 14 px offset shadow in a deep red-brown (CSS `-webkit-text-stroke` plus layered `text-shadow`). Hand-lettered originals vary letter by letter; if a build can afford it, set each glyph with a +/-1.5 degree rotation and +/-2 percent size jitter seeded from the frame index (mulberry32), never `Math.random()`.
- Grid: 16:9 for hoardings, with the hero face centred on the left third (x 560 px for 1920) and the montage on the right two thirds in overlapping plates. 8-column overlay used only for the opening grid-reveal.
- Shape: no rounded cards. Plates overlap with 1 to 3 px painted dark edges and an irregular edge (paper tear, brush edge) via SVG `feTurbulence` displacement, 256 px tile, scale 4.
- Faces: warm light on one side (`#bf824b` measured), red-brown shadow (`#895526` / `#811208` measured), strong highlight on eyes and lips.
- Imagery: never use real actors' faces as a template; use invented characters, painted in this construction.

## Motion and camera
2D:
- **Grid reveal (signature).** A chalk grid of 12 x 7 cells draws on in 600 ms (`power2.out`, stagger 12 ms by cell), then each cell fills with the painted image in a diagonal wave, 40 ms per cell step, so the face resolves as the painter's transfer would. Total 1.2 s.
- **Hero in.** Face scale 0.94 to 1.0 plus x -24 px to 0 over 700 ms `power3.out`; montage plates follow at +150, +270, +390 ms, each x 60 px to 0, 500 ms `power3.out`.
- **Title.** Lands on the downbeat from scale 1.12 to 1.0, 320 ms `expo.out`; its shadow follows 2 frames later.
- **Camera.** Hold 1.4 s, then a 3 percent push over 2 s `sine.inOut` on the hero layer (depth factor 1.0) with the montage at 1.4 and the ground at 0.6. A hoarding walk: lateral pan 5 percent over 3 s, `sine.inOut`.
- Exit: a single wipe in the direction of reading; no fades.

3D reading (Rasan3D): the hoarding is a flat painted canvas hung on a building, not a model.
- Build each layer as `k.pxPlane(group, { x, y, w, h, texture })` at three to five z offsets (ground 0, montage 0.15, hero 0.35, title 0.6, in world units where the group is laid out by `k.layout({ at: 0, distance: 6 })`).
- `k.material("paper", ...)` for a printed poster; `k.material("matte", ...)` for a painted canvas. Rig `k.rig("window",{key:"#ffe2b0",dir:[-0.6,0.5,0.6],intensity:1,shadows:true})`, one warm key; a `k.ground` shadow catcher below a street-front plane.
- Lens 35 to 50 mm, f/4, a 12 to 18 degree arc over 3.5 s (`power3.inOut`) so the layers show parallax; foreground blur from a rope or scaffold plane at z 1.2 at f/2.8 gives depth.
- The grid reveal stays 2D in the `ui` layer above; the camera does the rest. Camera keys: `lens:[[0,40]]`, `fstop:4`, `pos:Rasan3D.orbit({center:[0,1.2,0],radius:6,height:1.4,from:-12,to:6,t0:0,t1:3.5,ease:"power3.inOut"})`, `target:[[0,[0,1.2,0]]]`; a rope plane at z 1.2 is out of focus with `fstop:2.8` keyed in.

## How to instruct a model to build it
```
Style: hand-painted Hindi cinema hoarding, Mumbai workshop tradition (oil on canvas, grid-enlarged).
Canvas 1920x1080. Ground: flat brick-orange #c64d0d (measured from a V&A Devdas hoarding) filling the frame.
Hero: one large painted face on the left third, 78% of frame height, warm light from the left,
shadow side #811208, strong eye and lip highlights. Montage: 3 smaller overlapping plates right,
each rotated -3..3 deg, 2px dark painted edge. Title in the middle crossing the image:
Rozha One 240px, #ecf2e9, text-stroke 6px #1b1210, shadow offset 14px #811208.
Timeline (paused GSAP): 0.0 chalk grid 12x7 draws (0.6s power2.out); 0.4 cells fill diagonally (40ms steps);
1.2 hero settles 0.94->1 (0.7s power3.out); 1.35-1.6 montage plates (0.5s power3.out, +120ms stagger);
2.0 title slams 1.12->1 (0.32s expo.out); hold; 4.0 camera push 3% on #world (2s sine.inOut).
Negatives: no glow, no gradient mesh, no glass, no centred symmetric layout, no stock photo of a real actor.
```
Claude tends to follow the layering and timing but over-polishes the faces into vector smoothness: say "visible brush direction, simplified planes, slightly enlarged eyes". GPT models tend to add a drop shadow to everything; say "shadow only on the title".

## Blending notes
- Carries: the hero-plus-montage composition, the grid-scale reveal, white title with outline and offset shadow, one saturated ground.
- Pairs with: **tamil-cinema-posters** (same system, South Indian mass hero emphasis), **south-asian-shop-signage-and-ghat-lettering** (title lettering), **indian-matchbox-and-calendar-art** (framed god-poster palette).
- Breaks it: thin sans body, glass panels, neutral grey grounds, centred symmetry, clean vector gradients.
Also clashes with (not library entries): glass-ui.

## Sources
- https://collections.vam.ac.uk/item/O72600/pakeezah-1971-indian-film-hoarding-balkrishna-arts/ — Balkrishna Arts, 2002, oil on canvas, 2 m x 5.5 m; the grid method; 1-2 days; unfinished hoarding (fetched; image measured)
- https://collections.vam.ac.uk/item/O72592 — Devdas hoarding, 2002; sketch from stills, grid scaling; orange ground, bold white title (fetched; image measured)
- https://collections.vam.ac.uk/item/O68655/deewaar-1975-film-poster-karkare-diwakar/ — Karkare's Deewaar poster, lithograph; painted-over eyes and lips; large title across the middle; yellow overlay (fetched; image measured)
- https://www.tribuneindia.com/news/lifestyle/diwakar-karkare-creator-of-most-iconic-movie-posters-passed-away-on-january-5-196402 — Karkare's palette knife from Waqt (1965), over 1,000 posters, Rs 50,000 for Mard (1985) (fetched)
- https://en.wikipedia.org/wiki/G._Kamble — G. Kamble (1918-2002): studios, Mughal-e-Azam, the 350-foot banner (fetched)
- https://en.wikipedia.org/wiki/Bollywood_Art_Project — Ranjit Dahiya, 2012 Bandra project (fetched)
- http://www.sahapedia.org/hand-painted-signs-forgotten-markers-city-space — Husain among modernists with sign-painting origins; cinema title lettering's influence on signage (fetched)

Not sourced: Husain's specific early hoarding work (only the sign-painting origin is cited); exact grid proportions of any named painter; the 12 x 7 grid-reveal cell count, ms timings and 3D parameters are proposed. Lamington Road appeared only in search summaries.
