---
name: "Desert sandstone"
description: "A trail map carved in sandstone: canyon-red strata as contour lines on sand, sage-brush accent, dashed trail, Zilla Slab capitals."
colors:
  canvas: "#efd8b6"        # page ground
  ink: "#3a2414"           # headlines and body text
  accent: "#c0602e"        # primary accent: the one thing that matters in each frame
  support: "#7d9168"       # supporting colour, used sparingly
  surface: "#e2b485"       # raised cards and panels
  muted: "#8a6a4f"         # muted captions
typography:
  display:
    fontFamily: Zilla Slab
    fontWeight: 700
  body:
    fontFamily: Work Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 8px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px dashed {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Desert sandstone

A motion-graphics design system from RasanAI's style library (Nature & material). Also known as canyon country, red rock desert, southwest sandstone, desert modern.

## Overview

A trail map carved in sandstone: canyon-red strata as contour lines on sand, sage-brush accent, dashed trail, Zilla Slab capitals.

It feels vast, sun-baked, adventurous. Use it for outdoor gear and travel, national park and tourism, road-trip films, festival openers.

## Visual language

- **Type:** Zilla Slab (display, weight 700, uppercase, tracking 0em) with Work Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 8px; outlines 2px dashed in ink.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** grain. **Icons:** filled. **Decoration:** contours.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Warm Minimalism, Print-Editorial
- **Typography:** Slab Serif
- **Composition / layout system:** Full Bleed
- **Color treatment:** Earth Tones, Warm Palette
- **Texture:** Print Grain
- **Information / data visualization:** Map
- **Lighting:** Golden Hour
- **Motion language:** Smooth
- **Transition language:** Camera Move Transition, Line-Draw Transition
- **Emotional / brand tone:** Optimistic, Human

## Do's and Don'ts

- Do keep the accent (#c0602e) for the single most important element in each frame.
- Do use Zilla Slab large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not map explainer: a neutral information map; this is one warm landscape, strata and sand, with the map as a keepsake.

## References

- Search: "desert canyon map animation"
- Search: "sandstone aesthetic motion design"
- Search: "red rock trail map video"
