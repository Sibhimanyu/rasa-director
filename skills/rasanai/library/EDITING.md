# Library editing status (edit pass, 2026-10-03)

Generated from each entry's frontmatter (`verified` key, `sources`, `type.free_alternative`) plus Google Fonts' own metadata. "not aligned" = the entry has NOT had the edit pass: original sourcing, unchecked numbers, generic recipes.

## Totals
- 157 entries (108 systems, 49 motion). Edit pass done on 116; not yet edited: 41.
- Colours: measured 15 entries, partial 60 (some roles measured or sourced, the rest labelled proposed), the remainder proposed. Grids and timings are proposed almost everywhere unless an entry says sourced/partial.
- Fonts: in every edited entry each `free_alternative` is an exact Google Fonts family (checked against Google's metadata); one invalid name replaced (Inter Display), weight lists corrected (single-weight display faces are [400]).
- Recipes: edited systems carry Rasan3D recipes written against the real API (k.rig key/fill/rim are colours, intensity is the one number; k.pass, k.simulate, k.pinDom, k.extrudeText, camera focus/fstop). None was rendered. Edited motion entries (29): sources re-fetched and Rasan3D calls grepped against rasan3d.js; prose not deepened. Library notes applied: r3Tone in k.pass (raymarched-abstract-iq), camera.shift (architectural-flythrough).
- Cross-references: blends_with / clashes_with now hold only existing ids; free-text clashes moved into Blending notes.
- Merged or cut: none (risograph-culture / risograph-print and ukiyo-e-and-japonisme / ukiyo-e-woodblock overlap and cross-reference).

## Biggest remaining gaps
- Not yet edited (41): instanced-field-endless-floor, mixed-2d-3d-flat-to-depth-seam, volumetric-light-god-rays, michael-bay-orbit, spielberg-oner-reveal, cutout-collage-gilliam, paper-cutout-parallax-2-5d, data-reveal-gapminder-nyt, glitch-datamosh, isometric-motion, liquid-morph, cloth-simulation, fluid-smoke-curl-noise, generative-procedural-growth, stop-motion-aardman-clay, stop-motion-laika-replacement, anime-timing-kanada-smear, limited-animation-upa-hanna-barbera, rotoscope, rubber-hose, art-brut-outsider-and-naive-folk-graphic, arts-and-crafts-morris, cuban-ospaal-poster, dada-photomontage, data-journalism-isotype-neurath, dutch-total-design, experimental-jetset, futurism-italian, metabolism-architecture, op-art-kinetic, soviet-space-age, swiss-punk-and-neue-grafik-digital-grotesk, ukiyo-e-and-japonisme, vaporwave-and-anti-design-net-art, victorian-letterpress-wood-type, vienna-secession, vorticism-and-english-modernism, cuban-silkscreen-film-posters, ghanaian-film-posters, mexican-rotulista-and-latin-sign-painting, mughal-miniature-and-rajput-painting
- Blocked sources (403/429 to every fetcher): Met, British Museum, MoMA, Britannica, Artnet, Dezeen, Laika; pentagram.com and dia.studio did not respond. blueprint-technical-drawing and pixel-game-ui have no non-Wikipedia source; ukiyo-e-woodblock, psychedelic-poster, punk-xerox-zine lean on Wikipedia/Tate.
- Copyrighted works (Cassandre, Glaser, Aicher, Pedro Bell, Weingart) could not be colour-measured; hexes are proposed.
- Entries run 55-90 lines vs the 80-160 target; the studios batch is thinnest (59-71).
- Claims flagged unverified in text: Fincher "252 shots", Sagmeister banana-wall figures, Wolff Olins Tate dot count, Braun typefaces, Weingart film-layering, ISO 11798 in museum-label.
- Claude-vs-GPT build notes are carried over from the researchers, not re-tested.
- Index: library/index/N.json (motion fragment) did not exist when this pass ended; only M.json.

## systems

| entry | lines | src | non-wiki | colours | grid | timings | fonts (GF-checked) | recipes |
|---|---|---|---|---|---|---|---|---|
| banknote-guilloche | 114 | 4 | yes (1) | partial | proposed | proposed | ok: Cormorant Garamond, Playfair Display, Pinyon Script, IBM Plex Mono, Share Tech Mono | aligned |
| bauhaus-in-3d | 83 | 3 | yes (2) | partial | proposed | proposed | ok: Jost, Outfit, Josefin Sans, Jost | aligned |
| blueprint-technical-drawing | 98 | 3 | NO | partial | sourced | proposed | ok: Share Tech Mono, IBM Plex Mono, Barlow Condensed, Saira Extra Condensed, IBM Plex Mono | aligned |
| chrome-liquid-metal-cgi | 85 | 3 | yes (2) | partial | proposed | proposed | ok: Unbounded, Syne, Archivo Black, Inter | aligned |
| claymation-and-soft-clay | 88 | 4 | yes (2) | partial | proposed | partial | ok: Fredoka, Baloo 2, Chewy, Sniglet, Nunito, Quicksand | aligned |
| concrete-brutalist-3d | 84 | 4 | yes (1) | partial | proposed | proposed | ok: Archivo Black, Space Grotesk, IBM Plex Mono, Space Mono | aligned |
| cyanotype | 99 | 3 | yes (1) | measured | partial | partial | ok: Cormorant Garamond, EB Garamond, EB Garamond | aligned |
| engraving-etching | 98 | 3 | NO | partial | partial | proposed | ok: Cormorant Garamond, IM Fell DW Pica, IM Fell English, EB Garamond, EB Garamond | aligned |
| glass-product-cgi | 84 | 7 | yes (5) | proposed | proposed | partial | ok: Inter Tight, Inter, Manrope, Figtree, Inter | aligned |
| gummy-inflatable-and-plastic-toy-3d | 82 | 3 | yes (1) | partial | proposed | proposed | ok: Fredoka, Baloo 2, Rubik, Chango, Nunito | aligned |
| paper-cut-and-papercraft | 99 | 4 | yes (1) | partial | proposed | proposed | ok: Fredoka, Baloo 2, Stardos Stencil, Big Shoulders Stencil, Nunito, DM Sans | aligned |
| risograph-print | 97 | 3 | yes (2) | partial | proposed | proposed | ok: Archivo, Anton, Archivo Black, Bricolage Grotesque, Space Grotesk, IBM Plex Mono | aligned |
| screenprint | 104 | 4 | yes (1) | partial | proposed | proposed | ok: Bebas Neue, Anton, Alfa Slab One, Bowlby One, Rubik Mono One, Barlow Condensed, Oswald | aligned |
| art-brut-outsider-and-naive-folk-graphic | 60 | 4 | yes (1) | - | - | - | ok: Gaegu, Caveat Brush, Rock Salt, Gochi Hand, Patrick Hand, Gaegu | NOT ON GF: Special Elite (OFL, Google Fonts); 'Rubik Doodle Shadow' sparingly | not aligned |
| art-deco | 63 | 4 | NO | partial | proposed | proposed | ok: Poiret One, Limelight, Federo, Josefin Sans, Gruppo, Monoton, Josefin Sans, Cormorant Garamond | aligned |
| art-nouveau | 65 | 6 | yes (2) | partial | proposed | proposed | ok: Fondamento, Cinzel Decorative, Almendra Display, Playfair Display, EB Garamond, Cormorant Garamond | aligned |
| arts-and-crafts-morris | 55 | 4 | NO | - | - | - | ok: Cardo, EB Garamond | NOT ON GF: EB Garamond (OFL) for the Jenson-style roman; IM Fell DW Pica (OFL) for a rougher Troy-like page | not aligned |
| bauhaus | 62 | 6 | yes (4) | partial | proposed | proposed | ok: Jost, League Spartan, Josefin Sans, Jost | aligned |
| brutalist-web | 57 | 5 | yes (3) | partial | proposed | proposed | ok: Arimo, Inter, Archivo, Space Mono, IBM Plex Mono, Tinos, Courier Prime, Lora | aligned |
| constructivism | 69 | 5 | yes (1) | measured | proposed | proposed | ok: Anton, Oswald, Archivo Black, Bebas Neue, Archivo | aligned |
| cuban-ospaal-poster | 58 | 3 | yes (2) | - | - | - | ok: Bowlby One, Rubik Mono One, Alfa Slab One, Archivo | NOT ON GF: Jost (all OFL on Google Fonts), Inter Tight (OFL) | not aligned |
| dada-photomontage | 55 | 4 | NO | - | - | - | ok: Alfa Slab One, Abril Fatface, Rozha One, Special Elite, Playfair Display | NOT ON GF: Bevan (OFL), Courier Prime (OFL) | not aligned |
| data-journalism-isotype-neurath | 63 | 6 | yes (1) | - | - | - | ok: Josefin Sans | NOT ON GF: Jost (Futura-like), Libre Caslon Text for the 18th-19th century voice (OFL), Jost 400 | not aligned |
| de-stijl | 61 | 5 | yes (1) | measured | proposed | proposed | ok: Rubik Mono One, Syne, Space Grotesk, Work Sans | aligned |
| dutch-total-design | 50 | 3 | yes (2) | - | - | - | ok: Inter Tight, Archivo, Chakra Petch, Archivo, Instrument Sans | NOT ON GF: Hanken Grotesk; for the gridded modular look: Share Tech Mono, Orbitron (approximations only) | not aligned |
| experimental-jetset | 50 | 3 | yes (2) | - | - | - | ok: Inter Tight, Arimo, Inter, Arimo | NOT ON GF: Archivo (Neue Haas itself is commercial, Klim, Commercial Type) | not aligned |
| futurism-italian | 55 | 4 | yes (2) | - | - | - | ok: Anton, Bebas Neue, Alfa Slab One, Archivo | NOT ON GF: Playfair Display Black (all OFL) | not aligned |
| international-typographic-corporate-identity | 58 | 6 | yes (1) | partial | partial | proposed | ok: Inter Tight, Schibsted Grotesk, Archivo, Roboto Slab, Zilla Slab, Inter | aligned |
| japanese-modern-tanaka-kamekura | 69 | 4 | NO | partial | proposed | proposed | ok: Inter Tight, Jost, Noto Sans JP, Zen Kaku Gothic New, Noto Serif JP, Shippori Mincho, Zen Antique, Noto Sans JP, Noto Serif JP | aligned |
| japanese-sixties-graphic-yokoo-poster | 66 | 6 | yes (5) | partial | partial | proposed | ok: Archivo Black, Rubik Mono One, Dela Gothic One, Rampart One, Zen Kaku Gothic New | aligned |
| memphis-milano | 55 | 5 | yes (1) | partial | n/a | proposed | ok: Rubik, Bungee, Unbounded, Righteous, DM Sans | aligned |
| metabolism-architecture | 59 | 4 | NO | - | - | - | n/a | NOT ON GF: Inter Tight (OFL) for Latin; Zen Kaku Gothic New (OFL) for kana and kanji, IBM Plex Sans (OFL) | not aligned |
| mid-century-modern | 65 | 5 | yes (2) | partial | proposed | proposed | ok: Jost, Josefin Sans, Outfit, DM Serif Display, Inter Tight, Work Sans, Source Serif 4 | aligned |
| new-wave-weingart | 59 | 3 | yes (2) | proposed | proposed | proposed | ok: Archivo, Hanken Grotesk, Inter Tight, Archivo, Instrument Sans | aligned |
| op-art-kinetic | 55 | 4 | NO | - | - | - | ok: Archivo, Inter | NOT ON GF: Inter Tight (OFL) | not aligned |
| polish-poster-school | 66 | 6 | yes (2) | partial | proposed | proposed | ok: Caveat Brush, Permanent Marker, Amatic SC, Work Sans | aligned |
| postmodern-emigre | 58 | 5 | yes (5) | partial | partial | proposed | ok: Pixelify Sans, Silkscreen, Jersey 10, Tiny5, Baskervville, Libre Baskerville, Libre Bodoni | aligned |
| psychedelic-poster | 64 | 4 | yes (1) | proposed | proposed | proposed | ok: Chango, Fascinate, Monoton, Bungee Shade, Oswald, Special Elite | aligned |
| punk-xerox-zine | 63 | 3 | NO | proposed | proposed | proposed | ok: Special Elite, Permanent Marker, Rock Salt, Courier Prime, UnifrakturCook, Special Elite, Courier Prime | aligned |
| push-pin-studios | 60 | 5 | yes (1) | partial | n/a | proposed | ok: Bungee, Rye, Fascinate, Bowlby One SC, Abril Fatface, Libre Caslon Text | aligned |
| risograph-culture | 57 | 4 | yes (2) | partial | proposed | proposed | ok: Bricolage Grotesque, Space Grotesk, Rubik, DM Sans, DM Mono, Space Mono, Instrument Sans | aligned |
| scandinavian-modern-design | 60 | 7 | yes (2) | partial | proposed | proposed | ok: Jost, Outfit, DM Sans, Figtree, DM Sans, Albert Sans, Nunito Sans | aligned |
| soviet-space-age | 51 | 3 | yes (2) | - | - | - | ok: PT Sans, Roboto | NOT ON GF: Oswald (Cyrillic), Russo One (Cyrillic), Bebas Neue (Cyrillic), Roboto Condensed (Cyrillic), Play (Cyrillic), Ubuntu (all Cyrillic) | not aligned |
| swiss-international | 59 | 7 | yes (2) | measured | partial | proposed | ok: Inter Tight, Schibsted Grotesk, Hanken Grotesk, Archivo, Inter, Hanken Grotesk | aligned |
| swiss-punk-and-neue-grafik-digital-grotesk | 59 | 5 | yes (1) | - | - | - | ok: Inter Tight, Schibsted Grotesk, Instrument Sans, Familjen Grotesk, Inter, Hanken Grotesk | NOT ON GF: Hanken Grotesk (OFL, Google Fonts) | not aligned |
| ukiyo-e-and-japonisme | 59 | 4 | NO | - | - | - | ok: Shippori Mincho | NOT ON GF: Zen Antique (Google, OFL) for JP; for Latin use 'Cormorant Garamond' sparingly, both OFL on Google Fonts | not aligned |
| ulm-braun-functionalism | 68 | 7 | yes (2) | partial | proposed | proposed | ok: Inter Tight, Schibsted Grotesk, Archivo, Hanken Grotesk, Instrument Sans, Hanken Grotesk | aligned |
| vaporwave-and-anti-design-net-art | 57 | 4 | NO | - | - | - | ok: VT323, Press Start 2P, DotGothic16, Noto Sans JP, Tinos, Tinos, Courier Prime | NOT ON GF: Arimo (OFL, Google Fonts); 'Silkscreen' for pixel UI | not aligned |
| victorian-letterpress-wood-type | 51 | 3 | yes (1) | - | - | - | ok: Abril Fatface, Rozha One, Besley, Alfa Slab One, Bevan, Libre Caslon Text, Lora, EB Garamond | NOT ON GF: Rye (Tuscan-style), Oswald (condensed gothic), Playfair Display 900 | not aligned |
| vienna-secession | 55 | 4 | yes (1) | - | - | - | ok: Cormorant Garamond | NOT ON GF: Jost (OFL, Futura-like geometry) for headings; Cormorant Garamond (OFL) for refined text; Syncopate is too wide, avoid | not aligned |
| vorticism-and-english-modernism | 55 | 4 | NO | - | - | - | ok: Archivo Black, Archivo | NOT ON GF: Anton (OFL) for BLAST-like weight; Gill-like humanist sans: Lato, Hanken Grotesk; Johnston-like: 'Johnston100' is proprietary, use Hanken Grotesk | not aligned |
| airbnb-brand-motion | 57 | 5 | yes (4) | partial | proposed | proposed | ok: Figtree, DM Sans, Figtree, DM Sans | aligned |
| apple-product-films | 56 | 5 | yes (4) | measured | proposed | partial | ok: Inter, Inter Tight, Geist, Inter | aligned |
| bbc-idents | 64 | 5 | yes (3) | partial | proposed | proposed | ok: Cabin, Figtree, Cabin | aligned |
| bloomberg-businessweek-turley | 64 | 4 | yes (3) | proposed | proposed | proposed | ok: Anton, Oswald, Inter Tight, Source Serif 4 | aligned |
| braun-dieter-rams-lineage | 67 | 5 | yes (4) | partial | proposed | proposed | ok: Inter Tight, Archivo, Schibsted Grotesk, Inter | aligned |
| buck-studio | 55 | 5 | yes (4) | partial | proposed | proposed | ok: Schibsted Grotesk, Familjen Grotesk, Hanken Grotesk, Schibsted Grotesk, Hanken Grotesk | aligned |
| collins-studio | 61 | 4 | yes (4) | partial | proposed | proposed | ok: Figtree, Outfit, DM Sans, Figtree | aligned |
| dia-studio-kinetic-type | 64 | 3 | yes (3) | partial | proposed | proposed | ok: Archivo, Inter Tight, Inter | aligned |
| elastic-title-design | 64 | 4 | yes (4) | measured | proposed | proposed | ok: Cinzel, Cormorant Garamond, Inter Tight | aligned |
| financial-times-graphics | 66 | 5 | yes (4) | partial | proposed | proposed | ok: Newsreader, Libre Caslon Display, Source Serif 4, Hanken Grotesk | aligned |
| fincher-title-design-angus-wall | 63 | 4 | yes (3) | partial | proposed | proposed | ok: Inter Tight, Rock Salt | aligned |
| ikea-brand-system | 60 | 5 | yes (3) | partial | partial | proposed | ok: Noto Sans, Noto Sans | aligned |
| koto-studio | 65 | 8 | yes (8) | partial | partial | proposed | ok: Bricolage Grotesque, Familjen Grotesk, Sora, Inter, DM Sans | aligned |
| kyle-cooper-imaginary-forces | 56 | 5 | yes (5) | measured | proposed | proposed | ok: Rock Salt, Reenie Beanie, Special Elite, Inter Tight, Archivo | aligned |
| linear-vercel-stripe-brand-systems | 68 | 8 | yes (8) | measured | partial | partial | ok: Inter, Geist, Inter Tight, Inter, Geist, Geist Mono, JetBrains Mono | aligned |
| manvsmachine | 78 | 6 | yes (6) | partial | proposed | proposed | ok: Inter Tight, Schibsted Grotesk, Inter | aligned |
| maurice-binder-and-bond-titles | 56 | 5 | yes (4) | measured | proposed | proposed | ok: Jost, Josefin Sans, Jost | aligned |
| mtv-80s-idents | 67 | 4 | yes (2) | proposed | proposed | proposed | ok: Rubik Mono One, Bowlby One, Archivo Narrow | aligned |
| muji | 64 | 5 | yes (3) | partial | partial | proposed | ok: Noto Sans JP, Shippori Mincho, Inter, Noto Sans JP | aligned |
| national-geographic | 63 | 4 | yes (3) | partial | proposed | proposed | ok: Libre Caslon Text, Source Serif 4, Source Serif 4, Source Sans 3 | aligned |
| nhk-broadcast-design | 69 | 4 | yes (3) | proposed | proposed | proposed | ok: Zen Maru Gothic, M PLUS Rounded 1c, Noto Sans JP | aligned |
| nike-brand-motion | 66 | 7 | yes (4) | proposed | proposed | proposed | ok: Barlow Condensed, Oswald, League Gothic, Jost, Inter, Libre Franklin | aligned |
| nyt-graphics-and-upshot | 61 | 4 | yes (2) | proposed | proposed | proposed | ok: Libre Baskerville, Gelasio, Gelasio, Libre Franklin | aligned |
| pablo-ferro | 60 | 4 | yes (3) | partial | proposed | proposed | ok: Caveat Brush, Permanent Marker | aligned |
| pentagram-paula-scher-and-partners | 72 | 4 | yes (2) | partial | proposed | proposed | ok: Anton, Oswald, Alfa Slab One, Schibsted Grotesk, Inter Tight | aligned |
| saul-bass | 64 | 6 | yes (5) | partial | proposed | proposed | ok: Archivo Black, Anton, Work Sans, Archivo | aligned |
| spotify-wrapped | 62 | 4 | yes (3) | measured | proposed | proposed | ok: Bricolage Grotesque, Archivo, Inter | aligned |
| stefan-sagmeister-studio | 64 | 4 | yes (3) | partial | proposed | proposed | ok: Archivo Black, Rubik, Inter | aligned |
| teenage-engineering | 63 | 4 | yes (2) | partial | proposed | proposed | ok: Space Mono, JetBrains Mono, Silkscreen, IBM Plex Mono | aligned |
| territory-studio-fui | 66 | 5 | yes (5) | partial | proposed | proposed | ok: IBM Plex Mono, JetBrains Mono, Space Grotesk, Chakra Petch, Rajdhani, IBM Plex Mono | aligned |
| the-economist-graphics | 62 | 3 | yes (2) | partial | proposed | proposed | ok: Roboto Condensed, Archivo Narrow, Roboto Condensed | aligned |
| wolff-olins | 65 | 3 | yes (2) | proposed | proposed | proposed | ok: Space Grotesk, Bricolage Grotesque, Inter, DM Sans | aligned |
| afrofuturism | 83 | 8 | yes (1) | partial | proposed | proposed | ok: Syne, Space Grotesk, Bricolage Grotesque, Space Grotesk | aligned |
| airport-wayfinding | 69 | 8 | yes (3) | measured | sourced | proposed | ok: Open Sans, Noto Sans, Public Sans, Open Sans | aligned |
| bollywood-hand-painted | 90 | 7 | yes (5) | measured | partial | proposed | ok: Rozha One, Yatra One, Teko, Anton, Bebas Neue, Mukta | aligned |
| cassette-futurism | 80 | 6 | yes (2) | measured | proposed | proposed | ok: Share Tech Mono, B612 Mono, Chakra Petch, IBM Plex Mono, VT323 | aligned |
| cuban-silkscreen-film-posters | 77 | 5 | yes (3) | - | - | - | ok: Oswald | NOT ON GF: Archivo Narrow bold for a neutral condensed (both Google Fonts families, confirmed by page title this session) | not aligned |
| frutiger-aero | 81 | 8 | yes (2) | measured | proposed | proposed | ok: Open Sans, Source Sans 3, Nunito Sans, Open Sans, Source Sans 3 | aligned |
| ghanaian-film-posters | 77 | 5 | yes (4) | - | - | - | ok: Oswald | NOT ON GF: Anton for tall condensed titles | not aligned |
| indian-matchbox-and-calendar-art | 91 | 6 | yes (4) | partial | proposed | proposed | ok: Rozha One, Yatra One, Tiro Tamil, Limelight | aligned |
| indian-truck-art | 89 | 7 | yes (3) | partial | proposed | proposed | ok: Rozha One, Yatra One, Teko, Teko | aligned |
| kalighat-and-indian-folk-painting-lines | 91 | 7 | yes (3) | partial | partial | proposed | ok: Tiro Bangla, Noto Serif Bengali, Hind Siliguri, Baloo Da 2 | aligned |
| mexican-loteria | 77 | 4 | yes (2) | proposed | proposed | proposed | ok: Libre Caslon Text, Alfa Slab One, Libre Caslon Text | aligned |
| mexican-rotulista-and-latin-sign-painting | 79 | 5 | yes (4) | - | - | - | ok: Archivo Narrow | NOT ON GF: UnifrakturCook for the old-English style, Oswald for the 'gothic' block style (all Google Fonts families, confirmed by page title this session) | not aligned |
| mughal-miniature-and-rajput-painting | 84 | 5 | yes (2) | - | - | - | n/a | NOT ON GF: Noto Nastaliq Urdu for Nasta'liq captions; Cormorant Garamond for Latin; Tiro Devanagari Hindi for Hindi titles | not aligned |
| museum-label-and-specimen | 92 | 5 | yes (3) | partial | proposed | proposed | ok: Cormorant Garamond, Libre Caslon Display, EB Garamond, IBM Plex Mono | aligned |
| newspaper-broadsheet | 86 | 6 | yes (1) | partial | partial | proposed | ok: Playfair Display, Old Standard TT, UnifrakturCook, Pirata One, Libre Caslon Text | aligned |
| pixel-game-ui | 78 | 5 | NO | partial | sourced | proposed | ok: Press Start 2P, Silkscreen, VT323, Pixelify Sans, Silkscreen, Press Start 2P | aligned |
| south-asian-shop-signage-and-ghat-lettering | 86 | 5 | yes (5) | proposed | proposed | proposed | ok: Yatra One, Rozha One, Teko, Khand, Tiro Tamil, Baloo Thambi 2, Noto Nastaliq Urdu, Alfa Slab One | aligned |
| tamil-cinema-posters | 87 | 6 | yes (4) | proposed | proposed | proposed | ok: Tiro Tamil, Baloo Thambi 2 | aligned |
| terminal-crt | 80 | 6 | yes (3) | partial | sourced | proposed | ok: IBM Plex Mono, VT323, Share Tech Mono, IBM Plex Mono, VT323 | aligned |
| transit-map-beck | 59 | 5 | yes (2) | partial | partial | proposed | ok: Jost, Questrial, Lato, Jost | aligned |
| ukiyo-e-woodblock | 80 | 4 | NO | measured | proposed | proposed | ok: Shippori Mincho, Zen Antique, Shippori Mincho, Libre Caslon Text | aligned |
| vaporwave-and-web-nostalgia | 75 | 5 | NO | partial | proposed | proposed | ok: Press Start 2P, VT323, Noto Sans JP, Archivo Black, Anton, Pixelify Sans, Silkscreen | aligned |
| vhs-analog | 77 | 6 | yes (2) | proposed | partial | proposed | ok: VT323, Silkscreen, DotGothic16, VT323 | aligned |
| west-african-wax-print-and-kente | 91 | 6 | yes (2) | partial | proposed | proposed | ok: Fraunces, Bricolage Grotesque, Space Grotesk | aligned |
| y2k-chrome | 81 | 4 | NO | partial | n/a | proposed | ok: Michroma, Audiowide, Syncopate, Fredoka, Quicksand, Nunito Sans, Open Sans | aligned |

## motion

| entry | lines | src | non-wiki | colours | grid | timings | fonts (GF-checked) | recipes |
|---|---|---|---|---|---|---|---|---|
| architectural-flythrough | 105 | 4 | yes (3) | n/a | n/a | partial | n/a | aligned |
| instanced-field-endless-floor | 122 | 7 | yes (6) | - | - | - | n/a | not aligned |
| liquid-metal-blob-3d | 122 | 7 | yes (6) | n/a | n/a | partial | n/a | aligned |
| mixed-2d-3d-flat-to-depth-seam | 117 | 8 | yes (8) | - | - | - | n/a | not aligned |
| product-turntable-cgi | 114 | 4 | yes (4) | n/a | n/a | proposed | n/a | aligned |
| raymarched-abstract-iq | 124 | 8 | yes (7) | n/a | n/a | partial | n/a | aligned |
| volumetric-light-god-rays | 126 | 5 | yes (4) | - | - | - | n/a | not aligned |
| dolly-zoom-vertigo | 63 | 3 | yes (2) | n/a | n/a | partial | n/a | aligned |
| fincher-locked-precision | 59 | 3 | yes (2) | n/a | n/a | partial | n/a | aligned |
| handheld-documentary | 56 | 5 | yes (4) | n/a | n/a | partial | n/a | aligned |
| kubrick-one-point-symmetry | 62 | 3 | yes (3) | n/a | n/a | partial | n/a | aligned |
| macro-product-closeup | 63 | 4 | yes (4) | n/a | n/a | proposed | n/a | aligned |
| michael-bay-orbit | 62 | 4 | yes (4) | - | - | - | n/a | not aligned |
| one-take-through-scenes | 62 | 4 | yes (1) | n/a | n/a | partial | n/a | aligned |
| spielberg-oner-reveal | 50 | 4 | yes (4) | - | - | - | n/a | not aligned |
| tilt-shift-miniature | 68 | 3 | yes (2) | n/a | n/a | partial | n/a | aligned |
| wes-anderson-planimetric | 61 | 4 | yes (3) | n/a | n/a | partial | n/a | aligned |
| whip-pan-match-cut | 66 | 4 | yes (3) | n/a | n/a | partial | n/a | aligned |
| cutout-collage-gilliam | 124 | 7 | yes (4) | - | - | - | n/a | not aligned |
| paper-cutout-parallax-2-5d | 110 | 4 | yes (1) | - | - | - | n/a | not aligned |
| data-in-space | 115 | 5 | yes (5) | n/a | n/a | partial | n/a | aligned |
| data-reveal-gapminder-nyt | 117 | 5 | yes (4) | - | - | - | n/a | not aligned |
| glitch-datamosh | 123 | 4 | yes (3) | - | - | - | n/a | not aligned |
| apple-keynote-type-reveal | 87 | 3 | yes (2) | n/a | proposed | proposed | n/a | aligned |
| dia-modular-kinetic-type | 113 | 3 | yes (3) | n/a | n/a | partial | n/a | aligned |
| kyle-cooper-scratch-type | 113 | 4 | yes (4) | proposed | n/a | proposed | n/a | aligned |
| saul-bass-cutout-type | 103 | 3 | yes (2) | partial | n/a | proposed | n/a | aligned |
| npr-engraving-stipple-pdoom | 142 | 11 | yes (11) | n/a | n/a | partial | n/a | aligned |
| toon-shaded-3d-arcane | 125 | 7 | yes (6) | n/a | n/a | partial | n/a | aligned |
| isometric-motion | 106 | 4 | yes (1) | - | - | - | n/a | not aligned |
| liquid-morph | 129 | 4 | yes (3) | - | - | - | n/a | not aligned |
| swiss-precise-motion | 106 | 3 | yes (2) | n/a | n/a | partial | n/a | aligned |
| cloth-simulation | 133 | 5 | yes (5) | - | - | - | n/a | not aligned |
| fluid-smoke-curl-noise | 126 | 6 | yes (6) | - | - | - | n/a | not aligned |
| generative-procedural-growth | 124 | 5 | yes (3) | - | - | - | n/a | not aligned |
| particle-swarm-simulation | 133 | 6 | yes (5) | n/a | n/a | partial | n/a | aligned |
| stop-motion-aardman-clay | 119 | 4 | yes (1) | - | - | - | n/a | not aligned |
| stop-motion-laika-replacement | 106 | 4 | yes (3) | - | - | - | n/a | not aligned |
| anime-timing-kanada-smear | 109 | 5 | yes (2) | - | - | - | n/a | not aligned |
| cel-on-twos | 110 | 5 | yes (1) | n/a | n/a | partial | n/a | aligned |
| limited-animation-upa-hanna-barbera | 100 | 4 | yes (1) | - | - | - | n/a | not aligned |
| rotoscope | 123 | 5 | NO | - | - | - | n/a | not aligned |
| rubber-hose | 102 | 4 | NO | - | - | - | n/a | not aligned |
| spider-verse-stepped-halftone | 129 | 4 | yes (3) | n/a | n/a | partial | n/a | aligned |
| squash-bounce-pop | 129 | 4 | yes (2) | n/a | n/a | partial | n/a | aligned |
| apple-ui-spring-motion | 101 | 3 | yes (3) | n/a | n/a | partial | n/a | aligned |
| linear-style-ui-motion | 109 | 4 | yes (4) | partial | sourced | proposed | n/a | aligned |
| material-motion-easing | 112 | 4 | yes (4) | n/a | n/a | partial | n/a | aligned |
| screen-studio-cursor-zoom | 115 | 4 | yes (4) | n/a | n/a | partial | n/a | aligned |
