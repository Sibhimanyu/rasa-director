---
id: "punk-xerox-zine"
name: "Punk / Xerox Zine (cut-and-paste, ransom-note)"
kind: "movement"
era: "1975-1980s, New York and London; reused by hardcore and riot grrrl zines into the 1990s"
origin: ["Jamie Reid", "Mark Perry (Sniffin' Glue)", "John Holmstrom (Punk magazine)", "Malcolm McLaren (context)"]
palette: {"roles": {"canvas": "#e9e6dc", "ink": "#0b0b0b", "accent": "#ff2d6f", "accent_2": "#f5e400", "paper_shadow": "#b9b5a8"}, "logic": "black photocopy ink on cheap paper; one or two fluorescent or Day-Glo accents as a second print pass (the hex values are approximations of photocopier black, newsprint and Day-Glo stock; unverified against specific originals)", "evidence": "all hexes proposed, none measured from an image this pass (earlier note in logic stands)"}
type: {"display": {"family": "mixed cut-out newsprint letters, felt-tip hand lettering, Letraset rub-downs", "free_alternative": "Special Elite / Permanent Marker / Rock Salt / Courier Prime / UnifrakturCook", "weights": [400], "case": "mixed; every letter a different size and face", "tracking": 0, "note": "Typewriter, felt-tip and blackletter stand-ins; all OFL. UnifrakturCook only at 700."}, "body": {"family": "typewriter or photocopied newsprint", "free_alternative": "Special Elite / Courier Prime", "weights": [400], "case": "sentence"}, "rules": ["each letter of a headline can come from a different source (face, size, colour, background box)", "baseline wobbles 2-6 degrees per letter", "handwriting and typewriter text allowed in the same line", "grammar and spelling mistakes left in", "masthead hand-drawn, not set"]}
grid: {"columns":0,"baseline_px":0,"margins":"none; edge-to-edge, content taped on at angles","rules":["no grid; collision is the layout","elements overlap by 10-30%","rotate every block -4 to +6 degrees","text boxes are strips cut with scissors, with visible tape and cut edges"]}
shape: {"radius":0,"stroke":"hand-drawn marker 3-6px, torn edges","shadow":"none or a 1-2px hard paper-edge shadow where a strip overlaps","imagery":"high-contrast halftoned photocopies of press photos, defaced portraits, newspaper clippings"}
texture: "photocopier noise: toner speckle, black edge borders from the platen, streaks, 1-bit threshold photos, creased paper, tape"
motion: {"language":"stop-frame, jittered, cut not eased","timing_ms":[83,125,250],"eases":{"enter":"steps(1)","move":"steps(2)","exit":"none"},"entrances":["slap-on cut","strip pasted at an angle","word-by-word flash"],"camera":"locked, occasional shake; a flatbed-scanner sweep as a transition","signature":"layers re-pasted on twos or threes (jittered position), never smoothly tweened"}
space: {"2d":"native","3d":"paper collage as real planes with 2-8px depth and hard flash shadow; never glossy"}
good_for: ["music, subculture, protest or activist films", "anti-corporate or anti-polish positioning", "short, loud, low-budget-feeling hooks that are actually controlled"]
not_for: ["luxury, healthcare, finance, anything requiring calm trust"]
blends_with: ["risograph-culture", "psychedelic-poster", "postmodern-emigre", "brutalist-web"]
clashes_with: ["swiss-international", "art-deco", "mid-century-modern"]
cheap_tells: ["a 'grunge' texture overlay on clean Helvetica", "ransom letters all the same size and rotation", "a rough font used for the whole line instead of mixed sources", "smooth ease-in-out on anything; punk motion is stepped", "neon gradient instead of flat fluorescent ink"]
verified: {"sources_fetched": 3, "non_wikipedia": 0, "colours": "proposed", "colour_images": [], "grid": "proposed", "timings": "proposed", "recipes": "aligned", "edited": "2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Punk_zine", "https://en.wikipedia.org/wiki/Jamie_Reid", "https://en.wikipedia.org/wiki/Sniffin%27_Glue"]
---
## What it is
Punk zine design is the visual output of a do-it-yourself production chain: a typewriter, scissors, glue, Letraset, felt-tip pens and a photocopier. The first punk zine, Punk, was founded in New York by John Holmstrom, Ged Dunn and Legs McNeil in late 1975 (first issue January 1976, Lou Reed on the cover); in London Mark Perry started Sniffin' Glue in 1976, "headlines usually just written in felt tip" with haphazard layouts, running from July 1976 to August 1977 and peaking at about 15,000 copies. Jamie Reid, who had arranged newspaper clippings like ransom notes for the radical magazine Suburban Press (founded 1970), carried the technique onto the Sex Pistols sleeves, including the defaced royal portrait of "God Save the Queen". The look is a constraint product: what the tools could do, shown without apology.

## The rules that make it this and not something else
- The method is visible. Cut edges, tape, glue wrinkles and photocopier artefacts are the ornament; they are not added afterwards as a filter.
- Mixed-source lettering: a headline letter comes from a newspaper, the next from a rub-down sheet, the next from felt tip. Sizes, weights and background boxes vary per letter.
- Collision layout: no grid, overlapping blocks, each rotated a few degrees.
- Photography is reduced to 1-bit or coarse halftone, then defaced (marker, torn, taped, a bar across the eyes).
- Colour is a second print pass: one fluorescent or primary on top of black-on-newsprint. Not a palette; one or two flat inks.
- Text voice is urgent, short and imperative; spelling errors are tolerated (Sniffin' Glue ignored grammar).
- Everything flat. No gradients, no soft shadows, no blur.
- Provocation targets an institution (monarchy, media, music industry); the style is positional, not decorative.

## Tokens decoded
- Canvas `#e9e6dc` newsprint; ink `#0b0b0b` (not pure black, copier toner reads slightly warm). Accent one of `#ff2d6f` (fluorescent pink) or `#f5e400` (Day-Glo yellow), used as flat boxes under or behind black type. Hex values are approximations (unverified against originals).
- Display: build headlines from several faces. Free kit: Special Elite (typewriter), Permanent Marker or Rock Salt (felt tip), UnifrakturCook (tabloid blackletter), Anton or Bebas Neue (condensed newspaper capitals), Courier Prime. All on Google Fonts, OFL.
- Per-letter variation tokens: size 0.7-1.4x of base, rotation -6 to +6 degrees, 3 faces in a line, background chip colours from canvas, ink, accent.
- Texture: a 256-512 px tileable toner-speckle noise at 6-12% opacity plus a threshold (1-bit) filter on photos; a 14-20 px black platen edge on one or two sides.
- Margins: none. Elements are allowed to run off the frame.

## Motion and camera
- Motion is stepped: animate on twos or threes. At 30 fps a "jitter" step is 67-100 ms. Eases are `steps(n)` or no ease; use `none` for linear snaps. Avoid `power*` eases on this look.
- Entrances: a strip is "pasted" with a 1-frame cut-in at an angle, plus a 2-frame overshoot to the final rotation (rotation = target + 3 degrees for 83 ms, then target). A headline builds letter by letter at 83-125 ms per letter, each letter arriving with a different rotation.
- Idle: jitter each pasted layer between two or three positions (offsets of 1-3 px, 1-2 degrees) on a hold every 125 ms, seeded by frame index so a seek is deterministic.
- Transitions: hard cut, or a flatbed-scanner bar (a 24-40 px bright bar sweeping the frame in 400 ms, `none`), or a photocopier "feed" where the frame shifts 4% and dark-edges for 3 frames.
- Camera: locked. At most a handheld shake of 6-10 px at 8 Hz for a 300 ms impact. No dolly, no parallax.
- 3D reading: collage planes in space with 2-8 px (about 0.02 world units) depth between them, hard shadow from a flash-like light (single directional, no soft shadows), orthographic or 50 mm lens, camera moves in whole-frame steps rather than smooth orbits. See references/3d.md; never glossy materials.

## How to instruct a model to build it
Paste-ready brief:
"Punk xerox zine. Canvas #e9e6dc, ink #0b0b0b, one accent (#ff2d6f) used only as flat blocks behind type. No gradients, no blur, no soft shadow. Headlines are built per letter from at least three faces (Anton, Special Elite, Permanent Marker, UnifrakturCook), each letter 0.7-1.4x size, rotated between -6 and +6 degrees, some on a flat accent or ink chip. Photos are 1-bit thresholded and defaced with a 4px marker stroke. Elements overlap and rotate; no grid. Add a 256px toner-noise tile at 8% opacity and a 16px black platen edge on the left and bottom. All motion on twos: GSAP with ease 'steps(1)' or none; letters arrive one per 100 ms with rotation = target + 3deg for one step then target; held layers jitter 2px every 125 ms using a seeded integer-frame function. Hard cuts only; one scanner-bar transition (30px bar, 400ms linear). Camera locked. No smooth fades."
Claude vs GPT: tell either model explicitly that the letters are different sizes and faces; the common failure is one distressed font for the whole line. Also ban 'grunge overlay' wording; ask for visible tape and cut edges as objects.

## Blending notes
Carries well: the mixed-lettering rule, 1-bit photography, stepped timing, flat fluorescent accent. Pairs with risograph culture (shared flat inks, misregistration) and psychedelic poster (clash colours). Breaks with anything that needs precision: a grid, a baseline or ease-in-out motion cancels it. If a blend needs legibility, keep body copy in typewriter at 40px or more and let only the headline be chaos.


Finish: this look is hard-edged or stepped, so set `data-finish-blur="off"` on the scene's frame root; the film finish then renders the scene from the centre sub-frame instead of averaging sub-frames, which would smear the flat edges. Use `steps(n)` eases or hold frames for any stepped layer and never `power*` tweens on it.
## Sources
- https://en.wikipedia.org/wiki/Punk_zine — origins of Punk (1975-76) and Sniffin' Glue, cut-and-paste and photocopy method, notable zines. (fetched)
- https://en.wikipedia.org/wiki/Jamie_Reid — ransom-note clipping technique from Suburban Press, God Save the Queen sleeve. (fetched)
- https://en.wikipedia.org/wiki/Sniffin%27_Glue — felt-tip headlines, haphazard layouts, July 1976 to August 1977, 15,000 peak run. (fetched)
