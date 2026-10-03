---
id: "frutiger-aero"
name: "Frutiger Aero (Vista-era gloss, water, nature)"
kind: "vernacular"
domain: "vernacular"
era: "c. 2004-2013 (peak mid-2000s to early 2010s); name coined 2018"
origin: ["Windows Vista and Windows 7 Aero (2006/2009)", "Frutiger / Segoe UI humanist sans", "Nintendo Wii", "first-generation iPhone (2007)", "stock-photo corporate optimism"]
palette: {"roles": {"canvas": "#e9f4fb", "ink": "#16405e", "accent": "#10b1df", "accent2": "#60d657", "deep": "#12757a", "glass": "rgba(255,255,255,.35)"}, "logic": "sky blue, leaf green and sun yellow on pale aqua; glass panels with white edge light", "evidence": "canvas, accent, accent2, deep measured from Commons Frutiger Aero Composite / (2) / (3) images, k-means 6, 2026-10-03; ink #16405e and sun yellow #ffd84a proposed"}
type: {"display": {"family": "Segoe UI (Microsoft, proprietary; the Aero default face)", "free_alternative": "Open Sans / Source Sans 3 / Nunito Sans", "weights": [300, 400, 600], "case": "mixed", "tracking": 0, "note": "All three are real Google Fonts OFL families with a wght axis; Open Sans is closest to Segoe UI in width and aperture. Closeness is a judgement."}, "body": {"family": "Segoe UI", "free_alternative": "Open Sans / Source Sans 3", "weights": [400, 600]}, "rules": ["humanist sans, open apertures, high x-height (Frutiger traits, sourced)", "light weights for large type over glass, semibold for labels", "type gets a faint 1px white or dark glow to lift off glossy backgrounds, not a heavy outline"]}
grid: {"columns":12,"baseline_px":8,"margins":"comfortable, centred compositions, sidebar/gadget panels","rules":["glass panels with 10-16px radii","icon tiles 64-256px (Vista thumbnails up to 256x256, sourced)","soft stacked layers, not a flat grid"]}
shape: {"radius":"8-16px windows, pill buttons","stroke":"1px white inner highlight plus 1px translucent dark edge","shadow":"soft drop, 0 8px 24px rgba(22,64,94,.25)","imagery":"blue sky, grass, water droplets, bubbles, bokeh, lens flare, aurora, tropical fish (sourced list)"}
texture: "glass with blur behind it (Aero Glass blur and translucency, sourced), glossy bubbles, water, lens flare and bokeh"
motion: {"language":"smooth, airy, glassy","timing_ms":[300,500,800],"eases":{"enter":"power2.out","move":"sine.inOut","exit":"power2.in"},"entrances":["glass panel fades and scales 0.96->1","bubble rise with slight x drift","lens-flare sweep","window flip in depth (Flip 3D reference)"],"camera":"slow 50-85mm drift, bokeh foreground rack focus","signature":"live thumbnails and translucent windows sliding over a nature wallpaper"}
space: {"2d":"native: glass cards over photo or gradient wallpaper","3d":"strong: real glass with refraction over water or sky, bubbles; glass needs an opaque background or backdrop plane"}
good_for: ["nostalgia pieces about the 2000s internet and software", "consumer wellness, water, eco, telecom with a friendly tone", "UI-heavy openers with a warm optimistic read"]
not_for: ["serious editorial, security, finance", "dark brooding films", "minimal flat-design brands"]
blends_with: ["y2k-chrome", "vaporwave-and-web-nostalgia", "terminal-crt", "glass-product-cgi"]
clashes_with: ["blueprint-technical-drawing", "swiss-international", "vhs-analog"]
cheap_tells: ["blue gradient plus a single bubble PNG", "glass cards with no blur and no edge highlight (just 50% white)", "stock nature photo with no UI chrome, so it reads as a wellness ad", "every panel glossy, nothing matte", "lens flare on everything", "using Frutiger Aero as 'blue and green' without gloss or skeuomorphism"]
verified: {"sources_fetched": 8, "non_wikipedia": 5, "colours": "measured", "colour_images": ["https://commons.wikimedia.org/wiki/File:Frutiger_Aero_Composite.jpg", "https://commons.wikimedia.org/wiki/File:Frutiger_Aero_(3).jpg", "https://commons.wikimedia.org/wiki/File:Frutiger_Aero_(2).jpg"], "grid": "proposed", "timings": "proposed", "recipes": "aligned", "edited": "2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Frutiger_Aero", "https://en.wikipedia.org/wiki/Windows_Aero", "https://en.wikipedia.org/wiki/Frutiger_(typeface)", "https://www.aesdes.org/2025/01/23/post-01-2025-aesthetic-frutiger-aero/", "https://windowswallpaper.miraheze.org/wiki/Img24_(Windows_Vista)", "https://commons.wikimedia.org/wiki/File:Frutiger_Aero_Composite.jpg", "https://commons.wikimedia.org/wiki/File:Frutiger_Aero_(3).jpg", "https://commons.wikimedia.org/wiki/File:Frutiger_Aero_(2).jpg"]
tags: ["frutiger-aero", "aero", "vista", "glass", "water", "bokeh", "nature", "2000s", "skeuomorphic", "optimistic"]
---
## What it is
Frutiger Aero is the mid-2000s to early-2010s design mood of glass, water, sky, grass and gloss. It was named in 2018 by Sofi Xian of the Consumer Aesthetics Research Institute, after the Frutiger typeface and Windows Aero; it had no name when it was current, and "Web 2.0 gloss" is the older label (Wikipedia). Examples cited: Windows Vista (2006) and 7 (2009), the Wii, the first iPhone and Galaxy S, KDE Plasma 4. It sits after Y2K, is distinguished from it by higher-definition, more refined rendering (AESDES), and gave way to flat design in the early 2010s. Its register is calm optimism: "a utopia where efficiency and the environment coexist".

## The rules that make it this and not something else
- Glass is the UI: translucent panels with blur behind, a bright edge, and tint. Aero was a hardware-accelerated compositor (DWM) with user-adjustable glass transparency and colour tint, so translucency is a surface property, not a flat 50% white.
- Nature is the wallpaper: sky, grass, water, bubbles, aurora. Vista's default wallpaper "Aurora" was designed to be "peaceful, calm and open": blue-green light effects, an aurora over a green hill, with the "flare" as a repeated brand element.
- Skeuomorphism stays: objects have highlights, depth, reflections; icons are small glossy objects; Flip 3D cascades live windows in depth, Aero Peek previews on hover.
- Colour is sky blue, leaf green, sun yellow on pale aqua. Never a dark theme with neon.
- Humanist sans with open apertures: Segoe UI was the Aero default (8 to 9 pt in Vista), and it and Myriad resemble Frutiger.
- Optimism only. Irony, dread or emptiness turns it into vaporwave or liminal-space imagery.

## Tokens decoded
- Measured from Commons Frutiger Aero images (k-means 6): sky blues `#10b1df` (32%), `#58c2e8`, `#44b6f8`, `#0ea2f8`; pale canvas `#e9f4fb` / `#dff3f8`; leaf green `#60d657`; deep teal `#12757a`; glass-grey `#cadbea`. Sun yellow `#ffd84a` and ink `#16405e` are proposed (not measured).
- Canvas gradient (proposed from those clusters): `linear-gradient(180deg,#a1d1f2 0%,#e9f4fb 55%,#d9efc2 100%)`.
- Glass panel: `background: linear-gradient(180deg,rgba(255,255,255,.55),rgba(255,255,255,.18)); backdrop-filter: blur(18px) saturate(1.3); border:1px solid rgba(255,255,255,.7); box-shadow: 0 8px 24px rgba(22,64,94,.25), inset 0 1px 0 rgba(255,255,255,.9); border-radius:12px`. Blur radius, alpha and radius are proposed; the structure (blur plus edge highlight plus tint) is the sourced rule.
- Glossy button: top half `#58c2e8`, bottom half `#0ea2f8`, hard split at 50%, 1px `#12757a` border, white lens highlight on the top half.
- Type: Segoe UI and Frutiger are proprietary. Real Google Fonts stand-ins: Open Sans (wght 300-800, wdth axis; closest in width and aperture to Segoe), Source Sans 3 (wght axis 200-900, narrower), Nunito Sans (friendlier, opsz and wght axes). Open Sans Light 96 px for headlines on glass with `text-shadow:0 1px 8px rgba(255,255,255,.7)`, semibold 28 px labels. Tween `font-variation-settings:"wght" 300 -> 600` on an active label for a Vista-like emphasis.
- Bubbles: `radial-gradient(circle at 30% 30%,rgba(255,255,255,.9),rgba(255,255,255,.15) 40%,rgba(120,200,255,.25) 70%,rgba(255,255,255,.55) 100%)`. Bokeh: 8-16 blurred circles, 40-180 px, opacity .15-.4, blur 2-6 px.
- Icon tiles 64-256 px (Vista thumbnails to 256x256, from the earlier note; not re-fetched).

## Motion and camera
2D (vocabulary.md terms: lens flare, bokeh, parallax, glass):
- Panels fade in with scale .96 to 1 over 500 ms `power2.out`, staggered 90 ms. Bubbles rise 120-300 px over 2-4 s `sine.inOut` with +-20 px x drift on two parallax layers (0.3x, 0.6x). Light sweep across glass: 800 ms `power2.inOut`, an 18%-wide white band at 35% opacity.
- Flip 3D: parent `perspective: 1200px`; windows `rotationY -40`, z offset 60 px apart, 600 ms `power3.out`, `transformStyle: preserve-3d`.
- All proposed timings; Aero's sourced traits are animation, glass and translucency, not specific milliseconds.

3D (Rasan3D; the natural home of glass, with a catch: glass refracts only what the 3D layer draws):
- Stage `background: "#a1d1f2"` (opaque, mandatory under glass) or a backdrop plane carrying a sky-gradient `k.image` texture; ground `k.ground({ y: -1, color: "#d9efc2" })`.
- Tiles: `k.material("glass", { color: "#dff3f8" })` rounded slabs; put the UI on a `k.panel({ width, height, depth: .04, radius: .06, texture: k.image("ui.png") })` slightly proud of the glass. Bubbles: glass spheres with small `k.material("gummy", { color: "#58c2e8" })` droplets, seeded positions from `k.rng(7)` and `k.instanceField` for a drifting layer.
- Rig `k.rig("top-soft", { dir: [.3, 1, .4] })` plus a warm rim; `environment: { preset: "soft", intensity: .8 }`.
- Camera: `lens: [[0, 85]]`, `fstop: 2.8` for foreground bubble bokeh, 5.6 when a UI slab must stay sharp; `pos` 4% dolly over 3 s `sine.inOut`; `focus` keyed from a bubble to the slab.
- Post: `bloom: { strength: .25, threshold: 1.15 }` on a flare emissive only, low `halation`, `grain: .015`. Transmission on the hero only; everything else opaque.

## How to instruct a model to build it
Paste-ready (2D):
```
Frutiger Aero. Background: linear-gradient(180deg,#a1d1f2 0%,#e9f4fb 55%,#d9efc2 100%) with 10 blurred bokeh circles (filter blur 3px, opacity .15-.35).
One glass card 1040x560, radius 14px, backdrop-filter blur(18px) saturate(1.3), border 1px rgba(255,255,255,.7), inset 0 1px 0 rgba(255,255,255,.9), shadow 0 8px 24px rgba(22,64,94,.25).
Headline Open Sans 300, 104px, #16405e, text-shadow 0 1px 8px rgba(255,255,255,.7). Glossy pill button: gradient #58c2e8 0-50% / #0ea2f8 50-100%, white highlight lens on the top half.
GSAP paused timeline: card opacity 0->1, scale .96->1, 500ms power2.out; button +180ms; 6 bubbles rise on sine.inOut, finishing before the cut; one light sweep 800ms power2.inOut. Hold 900ms. No dark mode, no neon.
```
Rasan3D: opaque `background`, `k.material("glass")` tiles, rig `top-soft`, `lens` 85, `fstop` 2.8, `post { bloom: { strength: .25 }, grain: .015 }`.
Model notes: models tend to produce polished flat pastel and omit the edge highlight and blur; require `backdrop-filter` plus the inset highlight. They also oversaturate teal; keep blue, green, yellow in the measured proportions.

## Blending notes
- Carries: glass panels, nature wallpaper, humanist sans, bokeh.
- With y2k-chrome: Aero for UI and environment, Y2K candy for one hero object. With terminal-crt: a Vista window holding a green terminal is a real period collision, use once.
- Breaks: dark brutalism, grit, hairline Swiss, any irony. Opposite pole: cassette-futurism.

## Sources
- https://en.wikipedia.org/wiki/Frutiger_Aero — motifs, 2018 naming by Sofi Xian, examples, "Web 2.0 gloss", Gen Z revival (fetched).
- https://en.wikipedia.org/wiki/Windows_Aero — glass, DWM, user tint and transparency, Flip 3D, Aero Peek, Segoe UI 8 to 9 pt (fetched).
- https://en.wikipedia.org/wiki/Frutiger_(typeface) — Roissy airport signage origin 1970-71, 1976 release, humanist traits, resemblance to Segoe UI and Myriad (fetched).
- https://www.aesdes.org/2025/01/23/post-01-2025-aesthetic-frutiger-aero/ — traits (translucent surfaces, gradients, rounded corners, metallic highlights), distinction from Y2K (fetched).
- https://windowswallpaper.miraheze.org/wiki/Img24_(Windows_Vista) — Aurora wallpaper intent and the "flare" element (fetched).
- https://commons.wikimedia.org/wiki/File:Frutiger_Aero_Composite.jpg — measured palette.
- https://commons.wikimedia.org/wiki/File:Frutiger_Aero_(3).jpg — measured sky and glass-grey.
- https://commons.wikimedia.org/wiki/File:Frutiger_Aero_(2).jpg — measured sky blues.
