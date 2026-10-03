---
id: "ukiyo-e-and-japonisme"
name: "Ukiyo-e woodblock prints and Japonisme"
kind: "movement"
era: "1670s-1860s Edo (ukiyo-e); 1860s-1910 Western Japonisme"
origin: ["Hishikawa Moronobu", "Suzuki Harunobu", "Katsushika Hokusai", "Utagawa Hiroshige", "Philippe Burty (coined 'japonisme', 1872)"]
palette: {"roles":{"paper":"#efe3c8","keyblock_ink":"#1d1b19","prussian_blue":"#1c3b6b","pale_indigo":"#7f9db5","vermilion":"#c8412b","ochre":"#d9a441","moss":"#7b8a4a"},"logic":"cream paper as the lightest value, a black keyblock line, 4-8 flat transparent inks, one blue carrying the picture. All hex are approximate samples of scanned prints and unverified against any museum colour standard."}
type: {"display":{"family":"Hand-cut kanji/kana in cartouches (no Latin original)","free_alternative":"Shippori Mincho / Zen Antique (Google, OFL) for JP; for Latin use 'Cormorant Garamond' sparingly","weights":[500,700],"case":"mixed","tracking":0},"body":{"family":"Zen Kaku Gothic New or Noto Serif JP","free_alternative":"both OFL on Google Fonts","weights":[400]},"rules":["text lives in small framed cartouches (title cartouche, publisher seal) at an edge, never over the image","vertical setting for Japanese labels","red seal-style square for signature or brand mark"]}
grid: {"columns":"none; composition by diagonal and cropped silhouette","baseline_px":null,"margins":"title cartouche top-right or top-left, ~6-8% inset","rules":["asymmetric balance","strong diagonals and foreground cropping","large empty zones (mist, sky) as negative space","horizon high or very low, rarely centred"]}
shape: {"radius":0,"stroke":"continuous black-brown keyline 2-4 px at 1080p, calligraphic taper","shadow":"none; depth by overlapping planes and bokashi gradient","imagery":"waves, mountains, bridges, rain, kabuki faces, courtesans, birds and flowers"}
texture: "washi paper fibre, wood-grain visible in flat inks, slight mis-registration (1-2 px) between blocks, bokashi (hand-wiped gradient) at the sky and water"
motion: {"language":"paper-and-block: layered plates printed in sequence, then a slow lateral drift","timing_ms":[300,700,1400],"eases":{"enter":"power2.out","move":"sine.inOut","exit":"power1.in"},"entrances":["colour plates stamp in one after another (keyblock first, then each flat colour)","wipe-reveal as a hand-pulled sheet","mist layer slides across"],"camera":"slow horizontal pan across a long composition (scroll-painting logic); parallax of 3-5 flat planes","signature":"the print builds in printing order, line first then colours"}
space: {"2d":"native","3d":"flat planes in depth (paper theatre), orthographic or 50-85 mm; fog planes as translucent paper; no glossy materials, use k.material('paper') and unlit colour"}
good_for: ["travel, heritage, craft, tea, food", "stories about nature, weather, journeys, waves of change", "culture-led brand films"]
not_for: ["hard-tech or fintech UI explainers", "anything needing photo realism"]
blends_with: ["art-nouveau", "swiss-international", "scandinavian-modern-design", "japanese-sixties-graphic-yokoo-poster"]
clashes_with: ["y2k-chrome"]
cheap_tells: ["a Great Wave clone reused as wallpaper with no argument", "gradient fills and drop shadows that no woodblock could print", "fake Japanese text (lorem kanji) or mismatched Chinese glyphs", "a red rising-sun circle on everything", "all colours saturated; real prints use muted, transparent inks"]
sources: ["https://en.wikipedia.org/wiki/Ukiyo-e", "https://en.wikipedia.org/wiki/Japonisme", "https://en.wikipedia.org/wiki/Katsushika_Hokusai", "https://en.wikipedia.org/wiki/Tadanori_Yokoo"]
---
## What it is
Ukiyo-e ("pictures of the floating world") is the Edo-period woodblock print tradition. It was made collaboratively by designer, carver, printer and publisher. Full-colour printing became standard by the 1760s using ten or more blocks per print, after Moronobu's monochrome work in the 1670s. Landscape became the dominant subject in the 19th century with Hokusai and Hiroshige. After Japan opened to trade (1854/1858), Western artists (Degas, Monet, van Gogh, Whistler) took its flat planes, diagonals, cropping and negative space; Philippe Burty named this Japonisme in 1872.

## The rules that make it this and not something else
- A black keyblock outline defines every form; colour is applied flat in separate blocks, never blended except by bokashi gradation.
- Compositions are asymmetric with diagonals and bold foreground cropping; Degas used barriers set vertically, diagonally and horizontally to divide scenes after Hokusai (Japonisme article).
- Large empty zones carry the mood: sky, mist, snow, water.
- Perspective is flattened or deliberately mixed (Hokusai combined western linear perspective with flat planes; Wikipedia, Hokusai).
- Text is a small cartouche plus seal, not a headline over the image.
- Palette is limited: Prussian blue (Berlin blue, a 1830s import; unverified date detail) plus a few earth and vermilion inks.
- Subjects are about moments of weather and travel, not abstractions.

## Tokens decoded
- Canvas `#efe3c8` paper, ink `#1d1b19`, picture blue `#1c3b6b` with pale `#7f9db5`, accent vermilion `#c8412b`. Maximum 6 flat colours per frame.
- Fonts: Shippori Mincho for JP/display, Zen Kaku Gothic New for small labels (Google, OFL). For a Latin-only film use Cormorant Garamond at small sizes inside a cartouche.
- Cartouche: 1.5:1 vertical rectangle, 3 px keyline, text rotated vertical, red seal 56 px square at 1080p.
- Line: 3 px at 1080p, rounded caps, slight taper via SVG stroke-linecap round plus a varied-width path.
- Texture: SVG feTurbulence at baseFrequency 0.8 to make fibre, multiplied at 12-18% over the whole frame; blocks offset 1-2 px with mix-blend-mode multiply.

## Motion and camera
2D: build the frame in printing order. Keyblock first (stroke-dashoffset draw, 700 ms, `power2.out`), then each colour layer as a clip-path wipe left to right, 300 ms apart, `power2.out`, with a 1-2 px registration jitter that settles. Water and cloud bands drift horizontally at 20-40 px/s on `none` ease. Camera is a slow pan (8-12 s over 1.2-1.6x frame width), 3-5 planes parallaxing at ratios 0.3/0.6/1.0. Cuts are hard; transition by a mist plane sliding through (800-1000 ms, `sine.inOut`).
3D: stack cut-paper planes at z spacing 0.4-1.0 units, camera 50-85 mm, dolly 15% over 6 s `sine.inOut`. Materials: `unlit` with texture, or `paper` with `top-soft` rig; shadows soft and low (0.15) so planes read as layered paper. Never chrome or glass.

## How to instruct a model to build it
"Build as a woodblock print. Cream paper #efe3c8 ground, 3 px black-brown #1d1b19 keyline, at most 6 flat inks (#1c3b6b, #7f9db5, #c8412b, #d9a441, #7b8a4a). No gradients except one bokashi band in sky or water (linear-gradient hand-wipe, 40% max). Asymmetric diagonal composition, large negative space, one title cartouche with vertical type in Shippori Mincho and a red square seal. Animate in print order: keyline draw 700 ms power2.out, then colour plates wipe 300 ms apart. Register offset 1-2 px. No drop shadows, no glow, no lorem kanji: use real text supplied in the brief." Claude tends to over-add gradients and glow; say 'no gradients' explicitly. GPT models tend to produce centred layouts; state 'diagonal, off-centre horizon'.

## Blending notes
- Carries well: flat-ink limited palette, print-order animation, cartouche-and-seal text, negative space.
- With Swiss: keep the grid for data, use ukiyo-e only for hero scene plates.
- With Yokoo: adopt his collage of ukiyo-e waves into pop and day-glo, but only one of the two should own the palette.
- Breaks: photographs, UI glass, tight tracking, heavy shadow.
Also clashes with (not library entries): glass UI; neubrutalism hard shadows.

## Sources
- https://en.wikipedia.org/wiki/Ukiyo-e: dates, block counts, artists, Western impact.
- https://en.wikipedia.org/wiki/Japonisme: Burty 1872, Degas barrier composition, diagonals, negative space.
- https://en.wikipedia.org/wiki/Katsushika_Hokusai: Thirty-Six Views, mixed perspective.
- https://en.wikipedia.org/wiki/Tadanori_Yokoo: modern reinterpretation of ukiyo-e waves.
- Unverified: exact pigment hex values (approximate), Prussian blue import date, 1-2 px registration offset as a visual convention. The Met essay on the Great Wave returned HTTP 429 and was not read.
