---
id: "wolff-olins"
name: "Wolff Olins: strategy made visible"
kind: "studio"
era: "1965 to present, London / New York"
origin: ["Michael Wolff", "Wally Olins", "Marina Willer (Tate)"]
palette: {"roles":{"canvas":"#ffffff","ink":"#0a0a0a","accent":"#276ef1","signal":"#ff4d00"},"logic":"one saturated brand colour doing a named job (Uber's \"safety blue\", per Wolff Olins' case study, is the cited example), neutral surround","evidence":"all hexes proposed. #276ef1 is an approximation of a trust-blue; no Wolff Olins file states a hex. Two Uber case-study images were sampled (k-means 6, 2026-10-03) and gave only photographic greys and dark tones (#47505b, #646a80, #121211), so they do not confirm the safety blue and are not used as evidence."}
type: {"display":{"family":"project-specific; Tate original was a custom blurred wordmark","free_alternative":"Space Grotesk / Bricolage Grotesque","weights":[500,700],"case":"mixed","tracking":-0.02,"note":"Space Grotesk is wght 300-700; Bricolage Grotesque has opsz, wdth, wght axes (200-800). The blur is part of the mark, so it is applied as an effect, not by a font."},"body":{"family":"project-specific","free_alternative":"Inter / DM Sans","weights":[400,500]},"rules":["a custom or heavily customised wordmark per client","the identity is a system that flexes, not a fixed logo","type and logo are allowed to change state"]}
grid: {"columns":"project-specific","baseline_px":8,"margins":"generous","rules":["one idea carried across hundreds of touchpoints","system defined by a few rules, not a template library"]}
shape: {"radius":"varies","stroke":"none","shadow":"none","imagery":"photography plus graphic device; the logo itself is often treated as a canvas"}
texture: "none by default; Tate used photographic blur made from projected and re-shot wordmarks"
motion: {"language":"identity in transition: the mark moves between states and never settles on one","timing_ms":[300,600,1200],"eases":{"enter":"power2.out","move":"sine.inOut","exit":"power2.in"},"entrances":["focus pull from blur to sharp","mark morph between variants","colour block reveals the name"],"camera":"locked, with rack-focus style transitions","signature":"the wordmark pulls in and out of focus; the same mark never appears identical twice"}
space: {"2d":"native","3d":"possible: a blurred wordmark as extruded forms with depth of field at f/1.4 as the pull-focus device"}
good_for: ["brand reveals and rebrand films", "cultural institutions, platforms with many sub-brands", "stories about a company changing"]
not_for: ["pure data explainers", "retro or vernacular looks"]
blends_with: ["collins-studio", "koto-studio", "mtv-80s-idents", "pentagram-paula-scher-and-partners"]
clashes_with: ["muji", "braun-dieter-rams-lineage"]
cheap_tells: ["a plain gaussian blur on a logo with no rhythm: Tate's system is a family of marks that vary in intensity, each made on purpose", "a gradient swoosh standing in for a 'dynamic identity'", "one fixed lockup repeated, which defeats the idea of a flexible system", "a brand film that explains the strategy in words but shows one logo"]
verified: {"sources_fetched": 3, "non_wikipedia": 2, "colours": "proposed", "colour_images": [], "grid": "proposed", "timings": "proposed", "recipes": "aligned", "edited": "2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Wolff_Olins", "https://www.wolffolins.com/work/uber", "https://www.creativereview.co.uk/the-tate-logo/"]
---
## What it is
Wolff Olins was founded in 1965 in Camden Town, London by designer Michael Wolff and advertising executive Wally Olins. Wolff left in 1983, Olins in 2001 (he died in 2014); the firm joined Omnicom in 2001 and has studios in London, New York, Los Angeles and San Francisco (Wikipedia). Olins described the practice as "strategy made visible". The identity is derived from a stated position about what the organisation is for, then expressed as a system that can flex.

## The rules that make it this and not something else
- Start from a one-line idea, then make it visible. Tate's was "look again, think again" (Design Week / Creative Review coverage).
- The identity should not be fixed. Tate: "always changing, but is always Tate" and "something that wasn't fixed, but was very open, very fluid" (Marina Willer, via search summaries).
- Tate (2000): one system uniting Tate Modern, Britain, Liverpool and St Ives. Creative Review: "a family of different logos, which move in and out of focus." Marina Willer projected a different 'Tate' each day in a small room "like an installation", photographed the iterations, animated them and used screengrabs as the final marks. Later search coverage says the original included more than 3,000 dots (secondary source, unverified).
- Logo as receptacle for imagery or change, an idea Creative Review ties across MTV, London 2012 (Wolff Olins), and others.
- Uber (case study): a global audit with 200+ stakeholders across 11 functional teams and five territories; a "safety blue" as a central brand element; a "Go-Get" strategy that reframes the app as a mobility ecosystem (wolffolins.com).
- Cautionary: critics attacked the 2012 Olympic logo; the 2021 Abrdn rebrand was widely ridiculed (Wikipedia). A system that is loud with no rule behind it fails.

## Tokens decoded
| Token | Setting |
|---|---|
| canvas | #ffffff, or full-bleed single brand colour |
| ink | #0a0a0a |
| brand colour | a single saturated hue with a named job, e.g. #276ef1 for trust; keep to one |
| display | Bricolage Grotesque 700 or Space Grotesk 700 as stand-ins (OFL) |
| body | Inter 400/500 |
| rhythm | wordmark states: 5 to 9 variants of the same mark at different focus levels |

## Motion and camera
The Tate device was first a still system (a family of blurred logos); the motion below is proposed.

2D (HyperFrames, craft.md vocabulary): a family of states for the wordmark.
- Sharp (blur 0), soft (6 px), heavy (18 px): one `filter: blur()` tween per state on `power1.inOut` over 0.6 to 0.9 s, so the mark breathes in and out of focus with no steady state; hold sharp 0.5 s only on the end card. Keep radii under 40 px (craft.md render-cost rule); for a long piece pre-blur the states once as images and cross-fade.
- Vary opacity 0.85 to 1 slightly and shift a pixel offset so no two frames repeat; the Tate method was to project a different Tate each day, photograph, animate and use screengrabs (Creative Review via Willer), so give each state a slightly different focus and crop, not just a different blur radius.
- Camera: locked; the rack focus is the move. Grade: none. Sound: a soft breath-like swell per state.
3D (Rasan3D, 3d.md sections 3, 5, 12): real depth of field is the device.
- `k.extrudeText("TATE", { font: <TTF>, size: 2.4, depth: 0.4, bevel: 0.02, material: k.material("matte", { color: "#0a0a0a" }) })`, letters spread along z (e.g. 0.8 apart) so focus separates them; `k.rig("top-soft")`, `background: "#ffffff"`, `environment: "soft"`.
- Camera keys: `lens: [[0, 85]]`, `fstop: [[0, 1.8], [6, 1.8]]` wide aperture, `focus: [[0, 6], [1.6, 9, "power2.inOut"], [3.2, 12, "power2.inOut"], [4.8, "target"]]` (focus distances in world units, rack through the letters, ending on the target at the end card). Use the engine's depth of field, not CSS blur, so the blur is real optics.
- Order: letters stay still; only focus moves, which is exactly "the same mark never appears identical twice".

## How to instruct a model to build it
"Build a brand reveal in the manner of Wolff Olins' Tate identity. One flat colour field #ffffff, wordmark in #0a0a0a, Bricolage Grotesque 700, set large and centred. The wordmark is never static: tween a CSS blur from 0 to 18 px and back across 6 states over 5.4 s on power1.inOut, each state landing on a different intensity and a slightly different crop, ending sharp for 0.6 s. Add one named idea as a short line beneath at 3 percent of short side, Inter 400. No gradient, no glow, no particle. One accent colour only, used as a flat field on the end card." Claude tends to over-explain the strategy in on-screen text: cut to one line. GPT-style output often adds a lens flare or gradient swoosh: ban it. (Carried from the earlier pass.)

## Blending notes
Carries: the "mark in transition" device, one colour with a job, strategy as one line ("look again, think again"). Blends with `collins-studio` (system flexibility), `koto-studio` (contemporary warm accent), `mtv-80s-idents` (mutating logo lineage). Breaks with `muji` and `braun-dieter-rams-lineage` silence because the identity wants to move. Cautionary: a loud mark with no stated rule behind it fails (Wikipedia notes the criticism of the 2012 Olympic and 2021 Abrdn identities).

## Sources
- https://en.wikipedia.org/wiki/Wolff_Olins — founded 1965 in London by Michael Wolff and Wally Olins, owned by Omnicom, criticism of later work (fetched).
- https://www.wolffolins.com/work/uber — the "safety blue" colour as a central focus of the identity, Uber's shift from scale to service (fetched; Uber audit figures from the earlier pass not re-checked).
- https://www.creativereview.co.uk/the-tate-logo/ — Willer: "something to unite all the different Tates", the theme "look again, think again" (fetched).
- Not re-read: creativereview.co.uk/mtv-logo/ (dropped). The "3,000 dots" detail remains unverified.
