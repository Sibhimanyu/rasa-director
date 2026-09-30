---
name: "National park poster"
description: "Layered ridges in flat pine teal and sunset orange on cream stock, captioned like a park series print, big Big Shoulders capitals."
colors:
  canvas: "#efe2c0"        # page ground
  ink: "#1e2d38"           # headlines and body text
  accent: "#f5d38a"        # primary accent: the one thing that matters in each frame
  support: "#2e5c60"       # supporting colour, used sparingly
  surface: "#f7eed6"       # raised cards and panels
  muted: "#7d7361"         # muted captions
typography:
  display:
    fontFamily: Big Shoulders Display
    fontWeight: 800
  body:
    fontFamily: Lato
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "4px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# National park poster

A motion-graphics design system from Rasa Director's style library (Nature & material). Also known as WPA poster, vintage park poster, screen-printed landscape, travel poster.

## Overview

Layered ridges in flat pine teal and sunset orange on cream stock, captioned like a park series print, big Big Shoulders capitals.

It feels adventurous, nostalgic, wholesome. Use it for outdoor brands and tourism, event and festival posters, conservation films, travel social.

## Visual language

- **Type:** Big Shoulders Display (display, weight 800, uppercase, tracking 0.01em) with Lato for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 4px solid in ink.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Screen Print, Mid-Century Modern
- **Typography:** Condensed, Display Typography
- **Composition / layout system:** Poster Composition, Layered Depth
- **Color treatment:** Limited Palette, Warm Palette
- **Texture:** Print Grain
- **Illustration style:** 2.5D Layered Illustration
- **Era / design-movement influence:** Mid-Century Modern
- **Motion language:** Smooth
- **Transition language:** Crossfade, Parallax Transition
- **Emotional / brand tone:** Optimistic, Nostalgic

## Do's and Don'ts

- Do keep the accent (#f5d38a) for the single most important element in each frame.
- Do use Big Shoulders Display large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not mid-century modern: landscape-led and screen-printed, ridges and sky in a few flat inks, not atomic shapes and furniture.

## References

- Search: "WPA national park poster animation"
- Search: "vintage travel poster motion"
- Search: "national park poster style video"
