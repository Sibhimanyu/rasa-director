---
id: "collins-studio"
name: "Collins: brand systems for entertainment and tech (Spotify era)"
kind: "studio"
era: "2010s to present, New York / San Francisco"
origin: ["Collins (Brian Collins, Leland Maschmeyer and team)", "Brett Renfer (Colorizer)"]
palette: {"roles":{"canvas":"#191414","ink":"#ffffff","accent":"#1ed760","duo_a":"#509bf5","duo_b":"#f037a5","collins_paper":"#f8f8f7","collins_ink":"#140700","collins_orange":"#ff7600"},"logic":"a dark or flat ground, a rested signature accent, and imagery pushed into two-colour duotone; colour pairs are deliberately high-contrast and vibrating (Collins). One pair per piece.","evidence":"Spotify developer design page (fetched 2026-10-03): Spotify Green #1ed760 (15 uses) is the resting colour and #191414 is Spotify black. Collins own site CSS (wearecollins.com/work/spotify): off-white #f8f8f7, off-black #140700, mid-white #d0d0c8, mid-black #5e5855, orange #ff7600. The Spotify case-study video poster frame measured k-means 6 as one flat yellow #e1dd38 (100%), which only shows that the Spotify campaign pairs include saturated yellow; it is a single frame, not a palette. duo_a #509bf5 and duo_b #f037a5 are proposed working pairs, not measured."}
type: {"display":{"family":"Circular (Laurenz Brunner, Lineto) was Spotify's face from about 2013; today Spotify uses Spotify Mix (not verified here)","free_alternative":"Figtree / Outfit / DM Sans","weights":[400,700,900],"case":"mixed","tracking":-0.01,"note":"Figtree (wght 300-900) or Outfit (geometric, round bowls) for the Circular feel; both OFL. Tween wght from 500 to 800 for a headline that swells on the beat."},"body":{"family":"Circular Book","free_alternative":"Figtree","weights":[400,500]},"rules":["geometric sans, big and friendly","type sits on duotone imagery, high contrast","short, emotional copy"]}
grid: {"columns":"flexible modular","baseline_px":8,"margins":"tight; imagery bleeds","rules":["imagery cropped tight to faces and objects","shapes act as masks and badges"]}
shape: {"radius":"mix of round and sharp","stroke":"none","shadow":"none","imagery":"duotone photography; bursting shapes loosely based on play, pause and record icons"}
texture: "flat duotone with slight grain optional"
motion: {"language":"energetic, music-led, shapes burst and pulse","timing_ms":[200,400,800],"eases":{"enter":"back.out(1.4)","move":"power2.inOut","exit":"power2.in"},"entrances":["burst shape scale from 0 with overshoot","duotone image wipes in","type slides on beat"],"camera":"locked, with fast push-ins on the beat","signature":"duotone photo plus a burst shape that scales on the downbeat"}
space: {"2d":"native","3d":"possible: duotone-lit environments with two coloured rim lights as the 3D reading of duotone"}
good_for: ["consumer entertainment and music products", "year-in-review and recap formats", "product brands that want an emotional, playful system"]
not_for: ["austere B2B", "heritage or luxury"]
blends_with: ["wolff-olins", "koto-studio", "dia-studio-kinetic-type", "mtv-80s-idents", "spotify-wrapped", "risograph-print", "screenprint"]
clashes_with: ["braun-dieter-rams-lineage", "muji"]
cheap_tells: ["a green-to-blue gradient instead of true two-colour duotone", "duotone made with an opacity overlay rather than a luminance map, which flattens contrast", "random shapes with no relation to the product's actions", "palette of 31 colours used at once; the system chooses one pair per piece"]
verified: {"sources_fetched":4,"non_wikipedia":4,"colours":"partial","colour_images":["https://image.mux.com/UCDy2jOgE7EgWlaHx3kxQJrwK01jVvPN026KbJ2mamyAM/thumbnail.webp?time=0&width=960&height=540"],"grid":"proposed","timings":"proposed","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://www.wearecollins.com/work/spotify/", "https://www.wearecollins.com", "https://developer.spotify.com/documentation/design", "https://www.commarts.com/exhibit/spotify-redesign"]
---
## What it is
Collins is a New York and San Francisco brand strategy and design agency. Its site names clients including Bose, Robinhood, Target brands, Arcane, San Francisco Symphony, Nike Run Club, Figma, Spotify, Equinox, ESPN, Twitch, Dropbox and Girl Scouts, and lists AdAge Agency of the Year awards (2019 to 2026) and a D&AD in 2021; its tagline is "Rewrite your worth". The Spotify rebrand (public in 2015) is its clearest motion-friendly system, and Collins' own case study now describes it as a repositioning from "access to music" to personalisation and culture. This entry is the Collins method seen through that system, not a general Collins style.

## The rules that make it this and not something else
- **Strategy drives the system.** The Collins case study frames the work against Apple/Beats and Google Play: when catalogues are identical, personalisation is the durable proposition. The identity then has to flex across genres "from bachata to black metal" without losing cohesion. So the system is a set of rules, not a fixed look.
- **Lens: duotone as a brand filter.** Collins calls it the "Lens" technique, drawn from the duotone screen-printing used throughout music history, applied to third-party artist photography so any image becomes recognisably Spotify. Communication Arts frames it as a homage to 1960s band posters.
- **Vibrating colour.** "Bold, high-contrast color pairs that most brands avoid", a mix that creates tension and energy (Collins). The pair is chosen per piece.
- **Resting colour.** Spotify's own guidelines: Spotify Green #1ed760 is the resting colour used whenever the voice must be recognisable, the green logo only on black or white or non-duotoned photography; fallback black #191414.
- **Bursting shapes** loosely based on play, pause and record icons (Communication Arts; for the "what happens when a song resonates with you" question).
- **Memory Marker and Flex Deck**: Collins' terms for a signature detail that anchors memory, and a logic layer that keeps applications coherent. For a film: pick one memory marker (the burst on the downbeat) and use it every scene.
- Impact claim on the case study: valuation from $6B to $19B (Collins, self-reported).

## Tokens decoded
| Token | Setting |
|---|---|
| canvas | #191414 (Spotify black) or #000; Collins' own site uses #f8f8f7 / #140700 |
| ink | #ffffff |
| resting accent | #1ed760 |
| duotone pairs (shadow to highlight) | #28005c to #e8115b; #003d2e to #1ed760; #1b0b4a to #ffd6e0 (proposed picks in the spirit of the vibrating rule) |
| display | Figtree 800 (stand-in for Circular), tracking -0.01em, 9 percent of short side |
| shapes | burst of 8 to 12 rounded points, radius 12 to 20 percent of the shape |
| imagery | luminance-mapped duotone, contrast +20 percent before mapping |
Collins' own site motion token is `cubic-bezier(.5,.3,0,1)` for view transitions (fetched); GSAP equivalent `CustomEase` or `expo.out`-like.

## Motion and camera
Timings are proposed. 2D (HyperFrames/GSAP): the duotone is a luminance map, never an overlay. In CSS: greyscale the image, then an SVG `feComponentTransfer` with `feFuncR/G/B type="table"` mapping shadow to highlight, or pre-render once and tween opacity between two pairs for a beat-synced swap (vocabulary.md section 8 texture, section 4 grade). Burst: `scale 0 -> 1.08 -> 1` in 420 ms `back.out(1.4)`, rotation 8 degrees on the beat; headline `y: 24, opacity: 0` in 360 ms `power3.out`; cuts on the downbeat; hold each frame 800 to 1200 ms. Cuts follow the music edit (sound.md).
3D (Rasan3D): the duotone is a post pass, which is the real 3D reading: `k.pass("duotone", { at: "post", uniforms: { uShadow: "#28005c", uHigh: "#e8115b" }, frag: "#include <r3/core>\nuniform vec3 uShadow; uniform vec3 uHigh; void main(){ vec4 s = r3Src(vUv); float l = r3Luma(s.rgb); gl_FragColor = vec4(mix(uShadow, uHigh, smoothstep(0.05, 0.95, l)) * s.a, s.a); }" })`. Because post passes run on the accumulated frame the blur and depth of field stay intact. Object: `k.material("matte", { color: "#888888" })` or `"clay"` lit by `k.rig("rim", { dir: [-0.5, 0.6, 0.6] })` so the luminance has a full range; the burst is a flat DOM or `k.svg` shape behind it scaling on the beat, with the 3D camera `lens` 50 mm and a push-in of 6 percent over 600 ms `power2.out`. Animate `uShadow`/`uHigh` as functions `(t) =>` to change pairs on a beat (pure of `t`).

## How to instruct a model to build it
Paste-ready brief: "Build an entertainment-brand recap card system in the manner of Collins' Spotify identity. Ground #191414, ink #ffffff, resting accent #1ed760. Photos converted to a two-colour duotone (shadow #28005c, highlight #e8115b) with a luminance map, not an opacity overlay and not a gradient. A burst shape, 10 rounded points, scales 0 to 1.08 to 1 over 420 ms back.out(1.4) on each beat as the one memory marker. Headline in Figtree 800, 9 percent of short side, tracking -0.01em, flush left over the duotone. One colour pair per scene, high contrast and slightly uncomfortable on purpose. Cut on beats. No gradients, no drop shadows, no sparkles." Claude tends to reach for a gradient where a duotone is wanted; say luminance map. GPT-style output over-decorates with sparkles; ban them.

## Blending notes
Carries: duotone lens, vibrating pairs, burst tied to a product action, one pair per scene, a single resting colour. Blends with Wolff Olins (system thinking), DIA (type in motion over duotone), MTV (colour change as identity), Spotify Wrapped, and screenprint or risograph for tactile versions of the lens. Clashes with restrained neutrals and with quiet luxury looks (braun-dieter-rams-lineage, muji).

## Sources
- https://www.wearecollins.com/work/spotify/ — case study: strategy, Lens duotone, vibrating colour, Memory Marker, Flex Deck, $6B to $19B, site CSS tokens (fetched)
- https://www.wearecollins.com — client list, awards, tagline (fetched)
- https://developer.spotify.com/documentation/design — Spotify Green #1ed760 as resting colour, #191414, logo colour rules (fetched)
- https://www.commarts.com/exhibit/spotify-redesign — legacy identity engineered for an app not for global communications, and the question 'what happens when a song resonates with you' (fetched)
- Blocked: Fast Company and Design Week pages (403 or JS-gated), so the "31 colours" and Colorizer details from the earlier draft are unverified and have been removed.
