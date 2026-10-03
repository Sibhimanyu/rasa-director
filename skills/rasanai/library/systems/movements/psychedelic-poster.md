---
id: "psychedelic-poster"
name: "San Francisco Psychedelic Poster"
kind: "movement"
era: "1966-1972, San Francisco (Fillmore, Avalon)"
origin: ["Wes Wilson", "Victor Moscoso", "Rick Griffin", "Stanley Mouse", "Alton Kelley"]
palette: {"roles": {"canvas": "#f4e9c8", "ink": "#1a0f2e", "vibrate_a": "#ff4b1f", "vibrate_b": "#00a99d", "hot": "#ff1e8e", "violet": "#5b1fa8", "sun": "#ffcf00"}, "logic": "adjacent complementary colours of equal value so edges vibrate; saturation maxed, value matched (the hex values are approximations chosen to reproduce the effect; unverified against specific posters)", "evidence": "all hexes proposed, none measured from an image this pass (earlier note in logic stands)"}
type: {"display": {"family": "hand-drawn melting lettering (the Wes Wilson style), Art Nouveau-derived custom alphabets", "free_alternative": "Chango / Fascinate / Monoton / Bungee Shade", "weights": [400], "case": "upper", "tracking": -0.04, "note": "Nearest OFL options, sparingly; all single-weight (400). For true Wilson distortion draw it in SVG or warp text with an SVG displacement filter."}, "body": {"family": "a condensed grotesque or typewriter for venue and date", "free_alternative": "Oswald / Special Elite", "weights": [400, 500], "case": "upper"}, "rules": ["letters fill the shape of the space (the letterform is bent to the layout, not the layout to the letter)", "letter gaps are almost zero; counters become shapes", "text is a pattern and is readable only slowly", "lettering sits on colour that vibrates against it"]}
grid: {"columns":0,"baseline_px":0,"margins":"edge-to-edge; the border frames the field","rules":["strong bilateral symmetry or radial symmetry","text blocks bent to a mandorla, banner or wave","a decorative frame around the whole sheet","figure and ground interlock (no empty background)"]}
shape: {"radius":"organic","stroke":"black or deep-violet contour 3-8px","shadow":"none; depth by overlap","imagery":"Victorian engravings, Art Nouveau women with flowing hair, eyes, skulls, roses, collaged photographs"}
texture: "offset lithograph: slight misregistration, rainbow-fill (split fountain) gradients, paper tooth"
motion: {"language":"fluid, looping, breathing","timing_ms":[600,1200,2400],"eases":{"enter":"sine.out","move":"sine.inOut","exit":"sine.in"},"entrances":["letters melt in with a wave","radial iris from centre","colour bands slide through the field"],"camera":"slow rotation or zoom into the centre; kaleidoscopic mirrored reflections","signature":"a colour field that vibrates because two complementary hues of equal value meet (animated by offsetting the edges 1-3px, 6-10 Hz)"}
space: {"2d":"native","3d":"possible as concentric extruded flat plates with matched-value colours and a slow roll; avoid glossy, avoid neon-glow sci-fi"}
good_for: ["music, festivals, wellness-with-an-edge, counter-culture or 1960s period pieces", "hero text that must be felt rather than read"]
not_for: ["data, finance, medical, anything with dense legible copy"]
blends_with: ["art-nouveau", "punk-xerox-zine", "risograph-culture"]
clashes_with: ["swiss-international", "ulm-braun-functionalism"]
cheap_tells: ["a rainbow gradient on a modern sans", "'groovy' flower-power clipart with a Comic Sans-like font", "tie-dye texture used as wallpaper", "colours that do not vibrate because values are unmatched", "kaleidoscope filter over a stock photo", "neon glow on black (that is synthwave, not psychedelic)"]
verified: {"sources_fetched": 4, "non_wikipedia": 1, "colours": "proposed", "colour_images": [], "grid": "proposed", "timings": "proposed", "recipes": "aligned", "edited": "2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Psychedelic_art", "https://en.wikipedia.org/wiki/Wes_Wilson", "https://en.wikipedia.org/wiki/Victor_Moscoso", "https://www.tate.org.uk/art/art-terms/p/psychedelic-art"]
---
## What it is
The psychedelic poster was a San Francisco concert-poster idiom of about 1966-1972. Wes Wilson, who designed posters for the Fillmore with promoters Bill Graham and Chet Helms, is credited with a lettering style from around 1966 "that made the letters look like they were moving or melting", drawing on Art Nouveau. Other leading hands were Rick Griffin, Victor Moscoso, Stanley Mouse and Alton Kelley. The sources describe saturated colour in glaring contrast, elaborately ornate lettering, and strongly symmetrical composition, mixing Art Nouveau, Victoriana, Dada and Pop Art. Moscoso, who studied with Josef Albers at Yale, brought complementary-colour vibration and photographic collage.

## The rules that make it this and not something else
- Lettering is image. Letters are drawn to fill a shape, swell and melt, with almost no spacing; the text becomes a pattern.
- Colour is the engine: two complementary hues of similar lightness side by side (orange against teal, magenta against green) so the edge buzzes. Equal value is the point; contrast of value would make it a normal poster.
- Symmetry and frame: a central mandorla or figure, a decorative border, mirrored halves.
- Figure and ground are the same loudness; nothing is left as quiet background.
- Source imagery is borrowed: Victorian engraving, Art Nouveau women, Egyptian or Mucha ornament, photographs cut into shapes.
- Information (band, venue, date) is present but subordinate and sometimes hard to read; that is accepted, not fixed.
- Printing artefacts count: rainbow fills, misregistration, paper grain.

## Tokens decoded
- Pairings (approximate; unverified against originals): `#ff4b1f` against `#00a99d`; `#ff1e8e` against `#7ad400`; `#5b1fa8` against `#ffcf00`. Ink `#1a0f2e` for the contour. Canvas `#f4e9c8` aged paper.
- Rule of thumb for the engine: pick the two hues, then adjust until their relative luminance differs by under 10% (check with a contrast calculator; ratio close to 1.0:1). If the colours read clearly different in greyscale, they will not vibrate.
- Type: for readable body use Oswald or Bebas Neue in upper case. For display, free faces only approximate the hand-drawn originals: Fascinate, Monoton, Chango, Bungee Shade (OFL). Better is custom: draw the headline as SVG paths or warp live text with an SVG displacement/`feDisplacementMap` on a 512-px noise.
- Border: 24-48 px frame, 4px ink contour, ornaments at the corners.
- Grid: none; use radial symmetry about the frame centre and 2 mirrored halves.

## Motion and camera
- Breathing and melting: letters scale 1.00-1.04 and shear +-3 degrees on `sine.inOut` with 1.2-2.4 s periods, phase offset per letter by 80-120 ms so a wave moves across the word.
- Vibration: duplicate the vibrating shape twice; offset the duplicates 1-3 px horizontally, alternate on 83 ms steps (about 6 Hz) so edges flicker. Keep amplitude low and cap at 3 flashes per second for safety (photosensitivity), and never put it full-frame.
- Colour bands: a repeating linear gradient with `background-position` animated 0 to 100% over 6-10 s linear, or an SVG `feColorMatrix` hue cycle limited to the accent shape.
- Transitions: radial iris (clip-path circle 0% to 150%, 900 ms `sine.inOut`), mirrored kaleidoscope wedge (6 or 8 segments) for the spectacle beat only.
- Camera 2D: slow scale 1.00 to 1.06 over 4-6 s toward the centre, or 360-degree rotation of a mandala element over 20 s linear. No shake.
- 3D reading: concentric extruded flat shapes (2-4 units apart) in matched-value colours, camera rolls slowly around the view axis 5-15 degrees, 35-50 mm lens, unlit/flat material with an ink outline pass. Keep it graphic; see references/3d.md for toon and outline options.

## How to instruct a model to build it
Paste-ready brief:
"Psychedelic poster, 1966 San Francisco. Symmetrical composition inside a 32px decorative border with a 4px #1a0f2e contour. Fill every area: no empty background. Use colour pairs of equal lightness: #ff4b1f against #00a99d, #ff1e8e against #7ad400, #5b1fa8 against #ffcf00, adjacent so the edges buzz. Headline lettering is melted and drawn to fill a mandorla shape (SVG paths or displacement-warped text, letters touching, never evenly spaced), body in Oswald uppercase. Add a Victorian-engraving or Art Nouveau figure as a flat cut-out. Motion: slow sine waves through the letters (sine.inOut, 1.6s period, 100ms phase offset per letter); vibration by two offset duplicates alternating every 83ms on one small shape only, never full-frame; a radial iris transition 900ms sine.inOut. Camera: slow 1.00 to 1.06 push to centre over 5s. No neon glow, no tie-dye texture, no flower clip-art."
Claude vs GPT: image-prompted models tend to add a rainbow gradient and bubbly sans; ask for matched-value complementary colour pairs and drawn letterforms by name. For code models, specify the pair values; they otherwise default to pastel gradients.

## Blending notes
Carries well: complementary vibration (use on a single accent), symmetry, drawn-letter headline, the frame. Art Nouveau is the root, so the pair is natural (sinuous line plus saturated colour). With punk zine, keep punk's flat ink and stepped motion and take psychedelic colour pairs. With Swiss or Ulm it breaks: matched-value colour fights hierarchy. Never blend with glassy chrome; the printing-ink flatness is what holds it.
Also blends with (not library entries): pop-art.


Finish: this look is hard-edged or stepped, so set `data-finish-blur="off"` on the scene's frame root; the film finish then renders the scene from the centre sub-frame instead of averaging sub-frames, which would smear the flat edges. Use `steps(n)` eases or hold frames for any stepped layer and never `power*` tweens on it.
## Sources
- https://www.tate.org.uk/art/art-terms/p/psychedelic-art — Tate defines psychedelic art as generally 1960s work associated with LSD (fetched)
- https://en.wikipedia.org/wiki/Psychedelic_art — attributes, artists, 1966-1972 timeline, Art Nouveau/Victoriana/Dada/Pop Art mix. (fetched)
- https://en.wikipedia.org/wiki/Wes_Wilson — melting/moving lettering around 1966, Fillmore posters, Bill Graham and Chet Helms. (fetched)
- https://en.wikipedia.org/wiki/Victor_Moscoso — complementary colour vibration, Josef Albers influence, photographic collage. (fetched)
