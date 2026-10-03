---
id: "airbnb-brand-motion"
name: "Airbnb Belo, Cereal and Lottie-era product motion"
kind: "brand-system"
era: "Belo and Rausch rebrand July 2014 (DesignStudio); Lottie 2017; Cereal 2018"
origin: ["DesignStudio (London)", "Dalton Maag (Airbnb Cereal)", "Brandon Withrow, Gabriel Peal, Leland Richardson, Salih Abdul-Karim (Lottie at Airbnb)", "Hernan Torrisi (Bodymovin)"]
palette: {"roles":{"canvas":"#ffffff","ink":"#222222","accent":"#ff5a5f","secondary":"#767676","support":"Belo Blue (named in Hatchwise, hex not found)"},"logic":"white space, photographs of real homes and people, one warm coral accent (Rausch) used for the mark and primary action; generous whitespace and soft rounded forms","evidence":"Belo logo rendered from Wikimedia Commons Airbnb_Logo_Belo.svg at 400px, k-means 4, 2026-10-03: coral cluster #f9585d (17% of pixels, anti-aliased mean of the brand coral); the rest is transparent background and edge shades. The widely cited brand value #ff5a5f is consistent with it but was not read from an Airbnb page. #222222 and #767676 are proposed working values, not measured."}
type: {"display":{"family":"Airbnb Cereal (Dalton Maag, custom, launched 2018-05-15; Light, Book, Medium, Bold, Extra Bold, Black)","free_alternative":"Figtree / DM Sans","weights":[400,500,700],"case":"mixed","tracking":0,"note":"Cereal is described by AIGA Eye on Design as a transitional-style neutral sans whose virtue is adaptability, with stroke width and x-height adjusted by size. Figtree (geometric, friendly, wght axis 300-900) is the closest open match for the UI feel; DM Sans has an opsz axis, which mimics Cereal size-specific adjustments better for large display."},"body":{"family":"Airbnb Cereal Book","free_alternative":"Figtree / DM Sans","weights":[400,500],"note":"Airbnb found the Book weight (their common body weight) too thin in small UI, and Dalton Maag supplied platform-specific font hints (Saarinen)."},"rules":["friendly and clean with high legibility across platforms","sentence case, no all-caps shouting","large, soft headlines at generous leading","one typeface for brand and product (the 2018 brief: one font from billboards to UI)"]}
grid: {"columns":12,"baseline_px":8,"margins":"wide; card grids with generous gutters","rules":["photo-first cards","rounded containers","one primary action per view"]}
shape: {"radius":12,"stroke":"none or 1px light grey","shadow":"soft, low-contrast","imagery":"warm, candid photography of real homes, hosts and places; people looking at things, not at the camera"}
texture: "none; white surfaces, photographic warmth"
motion: {"language":"friendly, springy, illustrative; micro-interactions drawn in After Effects and exported as vector JSON","timing_ms":[200,350,600],"eases":{"enter":"back.out(1.4)","move":"power2.inOut","exit":"power2.in"},"entrances":["card rises with slight overshoot","icon draws on then fills","heart and Belo morph in a single stroke"],"camera":"locked UI; zoom into a card to open the listing; shared-element transitions","signature":"the Belo drawn as one continuous line: people, place, love, A"}
space: {"2d":"native; vector icon animation, shared-element UI","3d":"light: soft-lit miniature rooms; keep rounded, warm, not glossy"}
good_for: ["travel, hospitality, marketplace, community products", "onboarding and product micro-animation", "warm human B2C"]
not_for: ["austere technical", "dark security", "luxury minimalism"]
blends_with: ["ikea-brand-system", "mid-century-modern", "linear-style-ui-motion", "apple-ui-spring-motion", "squash-bounce-pop"]
clashes_with: ["brutalist-web"]
cheap_tells: ["coral applied to every element instead of the mark and primary action", "stock photography of staged smiling couples", "gradient or glassmorphism cards", "Lottie loops that bounce forever instead of playing once on an event", "the Belo redrawn as a generic heart pin: it must read as a single continuous stroke forming a person, a pin and a heart"]
verified: {"sources_fetched":5,"non_wikipedia":4,"colours":"partial","colour_images":["https://commons.wikimedia.org/wiki/Special:FilePath/Airbnb_Logo_B%C3%A9lo.svg?width=400"],"grid":"proposed","timings":"proposed","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://karrisaarinen.com/posts/developing-airbnb-cereal/", "https://www.itsnicethat.com/news/airbnb-cereal-typeface-font-dalton-maag-graphic-design-150518", "https://eyeondesign.aiga.org/airbnbs-new-typeface-is-a-case-study-in-unified-accessible-design/", "https://www.hatchwise.com/resources/the-history-of-airbnb-and-its-iconic-logo", "https://en.wikipedia.org/wiki/Lottie_(file_format)"]
---
## What it is
In July 2014 Airbnb introduced the Belo logo in a rebrand led by London agency DesignStudio with Airbnb's team: an abstract symbol of belonging that stands for people (raised arms), places (a location pin), love (a heart) and a lowercase-a shape for Airbnb (Hatchwise). The palette introduced Rausch, a coral-pink named after Rausch Street in San Francisco, with warm grays and a deep charcoal. On May 15, 2018 Airbnb launched Airbnb Cereal across product and brand, made with Dalton Maag and Airbnb's marketing and experience design teams (Saarinen; It's Nice That). The "Lottie era" is Airbnb engineers Brandon Withrow, Gabriel Peal, Leland Richardson and animator Salih Abdul-Karim building the first Lottie renderers in 2017 on Hernan Torrisi's Bodymovin plugin, so animations drawn in After Effects ship as small JSON (Wikipedia, Lottie).

## The rules that make it this and not something else
- One typeface from billboard to UI. The Cereal brief was a single font for website, apps and billboards; Airbnb tested about 30 iterations over six months, then six more months of refinement, 11,000+ screenshots across four platforms and an A/B test on 2 million+ users before launch (Saarinen). The look is neutral type with warmth carried by photography and colour, not by display-type tricks.
- Cereal weights: Light, Book, Medium, Bold, Extra Bold, Black (It's Nice That). Texture was tuned to be non-distracting; Book needed extra weight for small sizes.
- Belo is drawn with one continuous line; an animation of it should draw it, not fade it.
- Coral is rationed: the mark and the primary action; everything else white, warm gray, charcoal (Hatchwise).
- Photography does the emotional work: real places and people, candid, not staged.
- Motion is illustrative micro-interaction, vector-sharp at any resolution because Lottie stores shapes, not pixels (a lighter alternative to GIF/APNG, resolution independent: Wikipedia).
- Motion is event-driven: it plays when something happens (a tap, a save), then rests.

## Tokens decoded
- Canvas #ffffff; ink #222222 (proposed); coral #ff5a5f (cited; Belo measured #f9585d, anti-aliased); secondary #767676 (proposed, passes 4.5:1 on white).
- Type: Figtree 500 headlines (variable `wght`: tween 400 to 600 on hover/press for a subtle bloom), Figtree 400 body, sentence case; scale 16, 20, 25, 31, 39 (proposed 1.25 ratio).
- Radius 12 px on cards, 8 px buttons, pill chips (proposed from product appearance, not from a guideline); shadow `0 6px 16px rgba(0,0,0,.12)`.
- Icon strokes 2 px, round caps and joins, 24 px grid; fills only on the active state.

## Motion and camera
All timings below are proposed craft values in the spirit of the product, not numbers Airbnb published.
2D (HyperFrames/GSAP; vocabulary.md section 6 principles: anticipation, overshoot, follow-through, staging): save heart `scale 0.8 -> 1.15 -> 1` over 350 ms `back.out(1.7)`, stroke draws 200 ms (`strokeDashoffset` full to 0, `power2.out`) then fills coral 150 ms; card enter `y: 16, opacity: 0` to rest in 350 ms `power2.out`, 60 ms stagger; shared-element zoom card to listing 450 ms `power3.inOut` with the photo as the persistent element (hold the photo, scale and move its frame). The Belo draw: `strokeDashoffset` full to 0 over 900 ms `power2.inOut`, then rotate to upright over 250 ms. Play once; no idle loops. If a Lottie file is the asset, HyperFrames has a Lottie runtime adapter; seek it from the paused timeline rather than letting it autoplay.
3D (Rasan3D, references/3d.md section 5): a diorama room, rounded boxes via `k.THREE.RoundedBoxGeometry` (check the addon list in section 14) with `k.material("clay", { color })` or `"ceramic"`, `k.rig("window", { dir: [-0.6, 0.7, 0.5], shadowSoftness: 10 })`, `environment: "soft"`, `toneMapping: "neutral"`, an opaque `background` of #ffffff to #f7f7f7. Camera: `lens` 35 mm, a `pos` key drifting 10 degrees over 5 s `sine.inOut`, `fstop: 4` focus on the table. Coral appears once as a pin or door (`k.material("matte", { color: "#ff5a5f" })`); no bloom, no emissive. Labels as `k.pinDom` cards so type stays crisp DOM with the 12 px radius card style.

## How to instruct a model to build it
"White canvas, charcoal text, Figtree (sentence case). One coral (#ff5a5f) accent only on the mark and the primary action. Cards with 12 px radius and a soft shadow, photograph first. Animate by event: elements rise 16 px and fade in at 350 ms power2.out with 60 ms stagger; the save heart overshoots with back.out(1.7), then settles; the logo is drawn as one continuous stroke over 900 ms and then stops. Photography, if present, is warm and candid, never staged. No loops, no glass, no gradients." Claude tends to loop decorative motion; GPT-style output tends to add glass and gradients. State "plays once per event" and "flat surfaces".

## Blending notes
Carries: rationed coral, one-line draw-on, event-driven micro-motion, photo-first cards, one neutral typeface. Blends with IKEA's friendly utility, mid-century soft shapes, and spring-based UI motion (apple-ui-spring-motion) when overshoot is kept under 8 percent. Breaks with aggressive grunge, heavy type-led looks, and anything that wants coldness. Not library entries: cyberpunk-neon clashes.

## Sources
- https://karrisaarinen.com/posts/developing-airbnb-cereal/ — Cereal launch 2018-05-15, Dalton Maag, six-month test, 11,000 screenshots, 2M-user A/B, Book weight hinting (fetched)
- https://www.itsnicethat.com/news/airbnb-cereal-typeface-font-dalton-maag-graphic-design-150518 — six weights, brief (fetched)
- https://eyeondesign.aiga.org/airbnbs-new-typeface-is-a-case-study-in-unified-accessible-design/ — size-adjusted stroke and x-height, neutral character (fetched)
- https://www.hatchwise.com/resources/the-history-of-airbnb-and-its-iconic-logo — Belo July 2014, DesignStudio, four meanings, Rausch (fetched)
- https://en.wikipedia.org/wiki/Lottie_(file_format) — Lottie origin, Bodymovin 2015, Airbnb team 2017 (fetched)
- Blocked: airbnb.design, Dalton Maag and DesignStudio pages returned 404, Medium returned 403; the #ff5a5f value is not read from an Airbnb page.
