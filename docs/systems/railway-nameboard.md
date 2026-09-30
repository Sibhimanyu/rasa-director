---
name: "Heritage railway nameboard"
description: "A painted station nameboard: deep Brunswick green, cream serif capitals, ochre lining-out in a double rule and a small cast ornament."
colors:
  canvas: "#1f4d45"        # page ground
  ink: "#f3ecd9"           # headlines and body text
  accent: "#c9a24a"        # primary accent: the one thing that matters in each frame
  support: "#8a2f34"       # supporting colour, used sparingly
  surface: "#efe6cf"       # raised cards and panels
  muted: "#a9bfb6"         # muted captions
typography:
  display:
    fontFamily: Libre Caslon Text
    fontWeight: 700
  body:
    fontFamily: Libre Franklin
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "4px solid {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Heritage railway nameboard

A motion-graphics design system from Rasa Director's style library (Place & wayfinding). Also known as station nameboard, heritage railway signage, painted station sign, lined-out signwriting, green and cream railway livery.

## Overview

A painted station nameboard: deep Brunswick green, cream serif capitals, ochre lining-out in a double rule and a small cast ornament.

It feels civic, steadfast, nostalgic. Use it for heritage and anniversaries, place and travel brands, title and chapter cards, food, drink and craft brands.

## Visual language

- **Type:** Libre Caslon Text (display, weight 700, uppercase, tracking 0.06em) with Libre Franklin for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 4px double in accent.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Print-Editorial, Handmade / Craft
- **Era / design-movement influence:** Mid-Century Modern
- **Typography:** Editorial Serif, Display Typography
- **Composition / layout system:** Centered Hero Composition, Symmetrical Composition
- **Color treatment:** Limited Palette, Warm Palette
- **Material / surface language:** Wood
- **Line / stroke language:** Double-Line
- **Shape language:** Rectilinear
- **Motion language:** Smooth
- **Transition language:** Fade, Mask Reveal
- **Emotional / brand tone:** Nostalgic, Trustworthy

## Do's and Don'ts

- Do keep the accent (#c9a24a) for the single most important element in each frame.
- Do use Libre Caslon Text large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not art deco: a signwritten railway board, green and cream with lined-out borders, civic and hand-painted rather than gilded.

## References

- Search: "railway station sign design"
- Search: "heritage railway typography"
- Search: "station nameboard title animation"
