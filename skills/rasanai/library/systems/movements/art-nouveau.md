---
id: "art-nouveau"
name: "Art Nouveau"
kind: "movement"
era: "c. 1890-1910, Paris, Brussels, Vienna, Glasgow, Prague"
origin: ["Alphonse Mucha", "Aubrey Beardsley", "Hector Guimard", "Victor Horta", "Louis Comfort Tiffany"]
palette: {"roles": {"canvas": "#e8dcc1", "moss": "#7c7e6b", "ochre": "#a19670", "slate": "#4f5f65", "ink": "#2b2a1f", "rose": "#c97b6b", "verdigris": "#3d7a6a"}, "logic": "muted, naturalistic earth and floral tones on warm cream; gold as outline or halo; Beardsley variant is strict black and white (hex values are approximations; unverified against specific works)", "evidence": "canvas, moss, ochre, slate measured from Wikimedia Commons scan of Mucha's Gismonda poster (1894), k-means 6, 2026-10-03: #e8dcc1 29%, #7c7e6b 18%, #bfbca6 18%, #9fa293 16%, #a19670 15%, #4f5f65 4%. Scan is muted by age and reproduction. ink #2b2a1f, rose #c97b6b and verdigris #3d7a6a are proposed."}
type: {"display": {"family": "custom hand-drawn lettering that follows the ornament (Mucha, Guimard's Metropolitain lettering); Arnold Bocklin, Eckmann as typefaces", "free_alternative": "Fondamento / Cinzel Decorative / Almendra Display / Playfair Display", "weights": [400], "case": "mixed", "tracking": 0.02, "note": "Original lettering is custom and ornament-led (Mucha, Guimard Metropolitain); these are the nearest OFL fonts, Playfair Display for restraint. Draw hero titles as SVG for true whiplash letterforms."}, "body": {"family": "old-style serif", "free_alternative": "EB Garamond / Cormorant Garamond", "weights": [400, 500], "case": "sentence"}, "rules": ["letters bend to the ornament and the frame", "stroke contrast mild, terminals swell like stems", "the title is part of the illustration, not a label", "text sits in cartouches, banners or arches"]}
grid: {"columns":0,"baseline_px":0,"margins":"decorative border frames the sheet","rules":["vertical tall format (about 1:2 for Mucha panels)","asymmetric balance around a curved axis","a halo or arch behind the head concentrates attention","border ornament 8-12% of width on each side"]}
shape: {"radius":"organic","stroke":"continuous contour line 2-4px, varied width (Beardsley: flat black masses)","shadow":"none","imagery":"women with flowing hair, lilies, irises, vines, peacock feathers, insects, dragonflies, whiplash curve"}
texture: "lithograph flat colour with soft airbrushed edges; stained-glass leading; paper warm"
motion: {"language":"growing, flowing, organic","timing_ms":[800,1400,2400],"eases":{"enter":"sine.out","move":"sine.inOut","exit":"sine.in"},"entrances":["vines draw along a path","petals unfold radially","halo arch scales out from the head"],"camera":"slow vertical pan along a tall panel; subtle parallax between border, figure and background","signature":"the line that grows: contour draws on a bezier path, then flat colour floods in"}
space: {"2d":"native","3d":"possible as iron-and-glass: ribbed ironwork with translucent stained glass, soft warm back-light; or paper-layered tall panel with parallax"}
good_for: ["botanical, wellness, tea, perfume, patisserie, opera and theatre", "heritage, craft, fashion with romantic tone", "stories of growth and organic systems"]
not_for: ["technical, industrial, data-heavy, high-speed or aggressive tones"]
blends_with: ["psychedelic-poster", "art-deco", "victorian-letterpress-wood-type", "japanese-modern-tanaka-kamekura"]
clashes_with: ["swiss-international", "ulm-braun-functionalism", "brutalist-web"]
cheap_tells: ["a floral frame from a stock clip-art pack around a sans-serif title", "uniform line weight vectors with no swell", "pastel rainbow instead of muted naturalistic tones", "symmetrical ornaments (that is deco or Victorian)", "whiplash curves that are not continuous Beziers"]
verified: {"sources_fetched": 6, "non_wikipedia": 2, "colours": "partial", "colour_images": ["https://commons.wikimedia.org/wiki/Special:FilePath/Alphonse_Mucha_-_Poster_for_Victorien_Sardou%27s_Gismonda_starring_Sarah_Bernhardt.jpg?width=400"], "grid": "proposed", "timings": "proposed", "recipes": "aligned", "edited": "2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Art_Nouveau", "https://en.wikipedia.org/wiki/Alphonse_Mucha", "https://en.wikipedia.org/wiki/Hector_Guimard", "https://en.wikipedia.org/wiki/Aubrey_Beardsley", "https://www.mucha.cz/en", "https://www.tate.org.uk/art/art-terms/a/art-nouveau"]
---
## What it is
Art Nouveau is an international decorative movement of roughly 1890-1910, reaching its high point at the 1900 Paris Exposition and displaced by Art Deco in the 1920s. Its source is nature: sinuous plant curves and the asymmetrical "whiplash line", realised in iron, glass and ceramics. Alphonse Mucha defined its poster form after his 1895 theatrical posters for Sarah Bernhardt, with elegant female figures, ornamental borders, a refined palette and the arched "halo" behind the head. Hector Guimard preferred to call his work "Style Guimard": between 1900 and 1913, 167 Paris Metro entrances (88 surviving) in cast iron with green paint and his own Metropolitain lettering. Aubrey Beardsley (1872-1898) shows the monochrome extreme: large black masses against blank white, influenced by Japanese woodblock prints.

## The rules that make it this and not something else
- One continuous, flowing line; contour does the structural work. Beardsley variant: flat black against flat white, detail concentrated in a few areas.
- Nature without copying: plants and flowers abstracted into curves (Guimard avoided direct imitation of specific plants).
- Ornament and content merge: border, hair, drapery, lettering and stems share the same curve.
- A halo, arch or mandorla organises the head or the title.
- Muted naturalistic palette, gold used as outline; no pure spectral primaries.
- Tall vertical formats and asymmetrical balance on a curved axis.
- Lettering is drawn into the composition (Guimard even drew his own Metropolitain alphabet).
- Materials honest to the era: wrought and cast iron, stained glass, ceramic tile.

## Tokens decoded
- Colour (approximate; unverified): canvas `#efe3c6`, ink `#2b2a1f`, moss `#6b7a45`, ochre `#c58f2f`, rose `#c97b6b`, verdigris/Metro green `#3d7a6a`. Beardsley mode: `#0b0b0b` on `#fbfaf6`, no greys.
- Type: EB Garamond or Cormorant Garamond for text; Fondamento or Cinzel Decorative for display; for the real thing, draw lettering as SVG paths following the ornament (free fonts only approximate it). All named faces are OFL on Google Fonts.
- Format: 1:2 portrait panel (Mucha-like) inside a 1920x1080 frame as a centred tall panel with side field; or an arch crop (clip-path with a 50% top radius).
- Line: 3px contour with variable weight (SVG stroke with width profile or two offset strokes); curves with continuous tangents (cubic Beziers, no corners).
- Border: 80-120 px on each side with a repeating vine or lily motif; halo radius about 0.4 of panel width.

## Motion and camera
- The grow: stems and contours draw on with stroke-dashoffset (1400-2400 ms `sine.inOut`), leaves/petals then scale from 0 at their stem points (0.6 s each, 60-90 ms stagger, `back.out(1.4)` only in the petals, otherwise `sine.out`); flat colour then floods behind the line with a 600 ms opacity rise.
- Halo: a ring or arch expands from the figure's head, scale 0.7 to 1 over 900 ms `power2.out`, with gold stroke.
- Sway: after the grow, stems move 1-2 degrees with 3-4 s periods `sine.inOut`, phase offset per element (so it breathes, not wiggles). Keep it subtle: less than 6 px at the tip.
- Transitions: a vine grows across the frame and the next scene is revealed through its wipe path (SVG mask with a thick stroke, 1200 ms `power2.inOut`).
- Camera 2D: slow vertical pan down a tall panel (translateY about 25% over 6 s `sine.inOut`) with border at d=0.9, figure d=1, background d=0.3 for parallax.
- 3D reading: ironwork and glass. Model a Guimard-style cast-iron lattice with rounded organic extrusions (green patina, roughness 0.5, metalness 0.7), backlit stained-glass planes (transmission or emissive coloured planes with a soft warm key from behind), 35-50 mm lens, slow dolly at under 0.1 world units per second. See references/3d.md.

## How to instruct a model to build it
Paste-ready brief:
"Art Nouveau, Paris 1900. Tall portrait panel on warm cream #efe3c6 with a 100px botanical border. A figure with flowing hair inside a gold arch (halo) behind the head. Single continuous contour line, 3px, variable weight, Bezier curves with no corners; flat colour fills in muted moss #6b7a45, ochre #c58f2f, rose #c97b6b, verdigris #3d7a6a, ink #2b2a1f. Title in Fondamento or hand-drawn SVG letters that bend with the border; body in EB Garamond. Motion: contours draw on with stroke-dashoffset (sine.inOut, 1800ms), leaves then scale in with 70ms stagger, colour floods in after the line (600ms opacity), halo expands 0.7 to 1 in 900ms power2.out, then 1-2 degree stem sway on 3.5s sine.inOut loops with per-element phase. Camera: slow vertical pan of 25% over 6s with border/figure/background parallax 0.9/1/0.3. No pastel rainbow, no symmetric clip-art frame, no sans-serif title."
Claude vs GPT: ask explicitly for continuous Bezier contours; image-prompted models make symmetrical ornament by default, which is Victorian, not nouveau.

## Blending notes
Carries well: the grow-on line, halo, tall panel, muted palette. Natural partner of psychedelic poster (same ancestry, different saturation) and Japanese modern (flat colour and woodblock influence). With art deco, keep nouveau's one botanical accent inside deco's symmetry. With Swiss or Ulm, it breaks: curved axes and decorative border cancel the grid. If a blend needs modern copy, set text in a plain serif and keep ornament in the border only.

## Sources
- https://www.tate.org.uk/art/art-terms/a/art-nouveau — Tate: international style of the 1890s, sinuous lines and flowing organic plant forms; Beardsley 1894 frontispiece (fetched)
- https://www.mucha.cz/en — background read for this entry (fetched)
- https://commons.wikimedia.org/wiki/Special:FilePath/Alphonse_Mucha_-_Poster_for_Victorien_Sardou%27s_Gismonda_starring_Sarah_Bernhardt.jpg?width=400 — image sampled for colour (fetched)
- https://en.wikipedia.org/wiki/Art_Nouveau — whiplash line, organic forms, iron/glass/ceramics, 1890-1910, 1900 Paris Exposition. (fetched)
- https://en.wikipedia.org/wiki/Alphonse_Mucha — Bernhardt posters 1895, halo arch, ornamental borders, refined palette. (fetched)
- https://en.wikipedia.org/wiki/Hector_Guimard — Metro entrances 1900-1913, cast iron, green paint, own lettering, Style Guimard. (fetched)
- https://en.wikipedia.org/wiki/Aubrey_Beardsley — black-and-white masses, Japanese print influence, Salome, Yellow Book. (fetched)
