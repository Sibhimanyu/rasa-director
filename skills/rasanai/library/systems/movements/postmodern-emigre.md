---
id: "postmodern-emigre"
name: "Postmodern digital typography (Emigre, Ray Gun)"
kind: "movement"
era: "1984-2005 (Emigre, Berkeley); 1992-1995 Carson years at Ray Gun, Santa Monica"
origin: ["Rudy VanderLans", "Zuzana Licko", "David Carson"]
palette: {"roles":{"canvas":"#f4f4cc","ink":"#2c2b22","accent":"#d14d20","second":"#034ca0","spot_yellow":"#fcf005","spot_pink":"#db4b73","spot_green":"#0c6344"},"logic":"Emigre had no house palette: each issue cover is one or two saturated spot colours on a flat ground with near-black type (sampled covers differ: yellow, cobalt blue, rust orange, olive, green and pink). So pick ONE spot ground per film and one counter-colour; black or near-black carries the type. Layers overprint; colour is never gradient.","evidence":"measured from Emigre magazine cover images #20 (canvas #f4f4cc 43%, accent #d14d20 18%), #33 (second #034ca0 58%), #42 (#fcf005 44%), #3 (#db4b73, #0c6344), #42 ink #2c2b22, https://www.emigre.com/assets/img/magazine/Emigre42Cover.png and siblings Emigre{3,20,33}Cover.png, k-means 6, 2026-10-03. Cover images are scans from emigre.com; the ink hex is the darkest cluster, not a specified ink."}
type: {"display":{"family":"Licko's bitmap faces (Oakland, Emperor, Emigre, renamed Lo-Res 9/12/21), Matrix, Mrs Eaves (Baskerville revival), Filosofia (Bodoni revival); Carson mixes found and experimental faces","free_alternative":"Pixelify Sans / Silkscreen / Jersey 10 / Tiny5","weights":[400,700],"case":"mixed","tracking":"varies wildly","note":"Lo-Res itself is commercial (Emigre Fonts); the Google families are pixel-grid stand-ins. Pixelify Sans has a wght axis (400-700) that can be tweened. Set pixel faces only at integer multiples of their design size so pixels stay square."},"body":{"family":"Mrs Eaves or Filosofia (commercial, Emigre Fonts)","free_alternative":"Baskervville / Libre Baskerville / Libre Bodoni","weights":[400],"tracking":0,"note":"Baskervville is the closest free match to Mrs Eaves in spirit: a Baskerville revival with low contrast and wide set; Libre Baskerville is sturdier on screen; Libre Bodoni stands in for Filosofia (Licko based Filosofia on Bodoni)."},"rules":["break the modernist grid on purpose","mix bitmap and revival faces in one spread","layer text over image and over itself","legibility is argued, not abandoned: something readable survives","the tool shows (Mac, bitmaps, coarse output)"]}
grid: {"columns":"fractured","baseline_px":null,"margins":"overrun","rules":["no fixed grid (Ray Gun: type crossing gutters, overlapping blocks)","text columns break, restart and rotate","scale clashes between headline and body","Emigre itself was calmer: ordered columns with a bitmap or revival face, then one violent page"]}
shape: {"radius":0,"stroke":"thin rules, boxes","shadow":"none","imagery":"layered photography, dirty and cropped, low-res bitmaps"}
texture: "bitmap pixels, photocopy-like grain, overprint, low-res halftone"
motion: {"language":"layered, glitchy, accumulating; proposed (the movement is print, no motion originals)","timing_ms":[100,250,500],"eases":{"enter":"steps(4)","move":"power1.inOut","exit":"none"},"entrances":["stepped pixel reveal","text block jumps position","layer stack-up with offset"],"camera":"locked with 1-2px jitter; scale jumps; crops","signature":"type overlaps and accumulates; legibility returns in the last frame"}
space: {"2d":"native","3d":"limited; layered bitmap-textured planes in z; shallow-depth camera through stacked layers"}
good_for: ["music, culture, magazines, creative tooling", "anti-corporate tone", "design-literate audiences"]
not_for: ["finance, healthcare, onboarding where clarity is the point", "kids"]
blends_with: ["memphis-milano", "constructivism", "vaporwave-and-anti-design-net-art", "swiss-punk-and-neue-grafik-digital-grotesk", "new-wave-weingart", "punk-xerox-zine"]
clashes_with: ["swiss-international", "de-stijl"]
cheap_tells: ["random font soup with no point", "glitch filter instead of layout decisions", "unreadable text with nothing hidden worth reading", "Photoshop grunge overlays", "a single pixel font for everything: Emigre pairs bitmap against a classical revival"]
verified: {"sources_fetched":5,"non_wikipedia":5,"colours":"partial","colour_images":["https://www.emigre.com/assets/img/magazine/Emigre42Cover.png","https://www.emigre.com/assets/img/magazine/Emigre20Cover.png","https://www.emigre.com/assets/img/magazine/Emigre33Cover.png","https://www.emigre.com/assets/img/magazine/Emigre3Cover.png"],"grid":"partial","timings":"proposed","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://www.emigre.com/Essays/ZuzanaLicko/Eye2002", "https://eyemagazine.com/review/article/who-cares-if-you-read", "https://www.emigre.com/Magazine/42", "https://www.emigre.com/Magazine/62", "https://www.thegraphicdesignschool.com/design-history/ray-gun/"]
---
## What it is
Emigre was a Berkeley design quarterly founded in 1984 by Rudy VanderLans, Marc Susan and Menno Meyjes (VanderLans alone from issue 6, 1986); it ran 69 issues to 2005. Zuzana Licko made its typefaces: her first bitmap fonts (Oakland, Emperor, Emigre, later the Lo-Res family, the number being pixels per em) were built in 1984 with public-domain software for a dot-matrix printer and typeset issue 3 entirely. Emigre Fonts followed in 1985. Her later "classical" faces, Mrs Eaves (after Baskerville) and Filosofia (after Bodoni), became the foundry's best sellers. David Carson's Ray Gun (1992-2000, Carson art director for roughly the first 30 issues) carried the attitude to a mass music audience: fractured grids, collided typefaces, rotated text blocks, and the 1994 Bryan Ferry interview set in Zapf Dingbats. Critics of the time called the result hard to read; Licko's own account is that establishment rejection of new forms and tools is expected.

## The rules that make it this and not something else
- The tool is visible. Coarse bitmaps, screen type and low-res images are the subject; they are not retouched away.
- Two typographic poles in one object: a bitmap or experimental face against a classical revival (Mrs Eaves, Filosofia). Emigre issues (e.g. #42, 1997, the catalogue issue; #62, 2002) alternate calm catalogue pages with disruption.
- Layering of type over image and type over type; text crosses gutters (Ray Gun).
- Legibility is negotiated: one reading path survives (a pull-quote, a clean caption), even when body text is obscured. Carson printed the Ferry text legibly elsewhere.
- Colour is a flat spot ground per issue, not a palette: the sampled covers range from cobalt blue (#034ca0) to yellow (#fcf005) to rust (#d14d20), always with dark type.
- Scale argument: headline and body differ by 5x or more; blocks run off the page.
- Content-led form: the layout mood follows the subject (Carson), not a template.

## Tokens decoded
- Pick ONE ground per film from the measured covers: yellow #fcf005, cobalt #034ca0, rust #d14d20, cream #f4f4cc, pink #db4b73, green #0c6344. Ink #2c2b22. Counter-colour only as an overprint block (multiply).
- Display: Pixelify Sans (wght 400-700) or Silkscreen at 16/24/32/48 px multiples (stay on integer scales) for the bitmap pole; Baskervville or Libre Bodoni at 28-40 px for the classical pole. Body Libre Baskerville 400, 22-26 px.
- Block rotation 90 degrees for some captions; one block at 5-12 degrees; the rest orthogonal. Roughly one in three blocks breaks the grid.
- Image treatment: threshold or 3-level posterise, coarse 6-10 px dot screen, cropped at 8-15%.
- Texture: 1-bit pixel edges (`image-rendering: pixelated`), no soft shadows, no blur.

## Motion and camera
Print has no motion originals; timings below are proposed.
2D (HyperFrames, GSAP): blocks reveal with `steps(4)` over 250 ms (a pixel-dissolve feel: clip-path `inset()` stepping, or a mask of 8 px squares toggled by seeded frame index). Blocks jump position with `ease:"none"` (a `tl.set` on the beat), no travel. Layers stack in with 40 ms stagger and 6-12 px offsets, `mix-blend-mode: multiply`. A caption rotates 90 degrees in 300 ms `power1.inOut`. Scale hit 1 -> 1.6 in one frame on the beat (`tl.set`), then hold. Every scene resolves: the last 1200 ms holds a clean, readable line in the classical face. Camera: locked, 1-2 px seeded jitter on the world (per integer frame), 8% crops as cuts. Typing a bitmap headline: per-character `steps(1)` at 60-80 ms each.
3D (Rasan3D): stack 4-6 `k.pxPlane` or `k.text` / `k.image` planes at z = 0, -0.3, -0.6, -0.9 (materials `unlit`, textures set to nearest filtering on the `k.THREE` texture, `minFilter = NearestFilter`), orthographic-feeling long lens (85 mm), camera keys sliding 0.6 world units sideways with `power1.inOut` so planes parallax; `k.pinDom` for the one readable line so it stays crisp DOM. A `k.pass("pixelate", { at:"post", frag })` using `r3Dither(c, gl_FragCoord.xy, 6.0)` posterises the 3D layer; `r3Halftone` for a dot screen. No glossy material; `motionBlur:false` keeps the stepped look.

## How to instruct a model to build it
Paste: "Emigre-era postmodern layout. One flat spot-colour ground (choose from #fcf005, #034ca0, #d14d20, #f4f4cc), near-black ink #2c2b22, one multiplied counter-colour. Pair a bitmap face (Pixelify Sans at integer-multiple sizes) with a classical revival serif (Baskervville) on the same screen. Text blocks overlap, cross margins, and one in three rotates (90 degrees or 5-12). Images thresholded, 8 px dot screen. Motion: `steps(4)` reveals over 250 ms, hard position jumps (`ease:none`), one-frame scale hits on the beat, 1-2 px seeded jitter on integer frame index. Every scene ends on one clean readable line held 1200 ms. No gradients, no blur, no glow, no grunge-overlay PNGs." Failure to watch: GPT-family and Claude both default to "random noise" and a single pixel font; require the two-pole pairing and the readable last frame, and ask for the break to be motivated by the content.

## Blending notes
Carries: the two-pole type pairing, layering, bitmap texture, last-frame legibility, one spot ground. Pairs with new-wave-weingart (shared multiply layering), punk-xerox-zine, memphis-milano (colour and play), constructivism (diagonals), vaporwave-and-anti-design-net-art (screen-native). Breaks inside a Swiss or Dutch film except as a controlled single-scene rupture. Not in the library, free text: soft gradients and glassmorphism cancel it.

## Sources
- https://www.emigre.com/Essays/ZuzanaLicko/Eye2002 — 1984 bitmap fonts Oakland/Emperor/Emigre (later Lo-Res 9/12/21), issue 3, legibility criticism, Mrs Eaves as best seller (fetched). The "You read best what you read most" quote did not appear on this page; it is dropped.
- https://eyemagazine.com/review/article/who-cares-if-you-read — Ray Gun 1992-c.2000, Carson, Ferry spread in Zapf Dingbats, Emigre as computer-led editorial design (fetched)
- https://www.emigre.com/Magazine/42 — issue #42, 1997: 80 pp, 8.375 x 10.875 in, 43,000 copies, Mrs Eaves/Filosofia/Matrix catalogue; cover image sampled (fetched)
- https://www.emigre.com/Magazine/62 — issue #62, 2002: DVD plus 64 pp booklet, 24,000 copies (fetched)
- https://www.thegraphicdesignschool.com/design-history/ray-gun/ — Ray Gun layout methods, GarageFonts 1993, Carson issues 1-c.30 (fetched; secondary)
- Not sourced: all ms timings and the rotation percentages are proposed. Blocked/not fetched: Letterform Archive and MoMA holdings.
