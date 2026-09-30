---
name: "Art deco"
description: "Gold double rules and sunburst fans on deep green-black, symmetrical centred layout, tall geometric display caps."
colors:
  canvas: "#0f1d1b"        # page ground
  ink: "#f3e3bd"           # headlines and body text
  accent: "#c9a24a"        # primary accent: the one thing that matters in each frame
  support: "#2e6b5e"       # supporting colour, used sparingly
  surface: "#162a27"       # raised cards and panels
  muted: "#a8966a"         # muted captions
typography:
  display:
    fontFamily: Limelight
    fontWeight: 400
  body:
    fontFamily: Poiret One
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "6px solid {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Art deco

A motion-graphics design system from Rasa Director's style library (Retro & eras). Also known as deco, Gatsby style, 1920s glamour, streamline deco.

## Overview

Gold double rules and sunburst fans on deep green-black, symmetrical centred layout, tall geometric display caps.

It feels glamorous, elegant, celebratory. Use it for galas and events, premium spirits, hotel and hospitality, anniversary films.

## Visual language

- **Type:** Limelight (display, weight 400, uppercase, tracking 0.12em) with Poiret One for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 6px double in accent.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** glyph. **Decoration:** rays.

## Motion

Motion language: **Luxurious / Slow**. Very slow, circular deceleration, long holds and stillness, where restraint itself is the signal of value.
- Enter `circ.out`, exit `circ.in`, move `power1.inOut`; durations 600 / 900 / 1400 / 2000 / 2800 ms; stagger 200 ms; hold at least 1800 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, linear-entrance, blur-in.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Art Deco, Luxury
- **Era / design-movement influence:** Art Deco
- **Composition / layout system:** Symmetrical Composition, Centered Hero Composition
- **Line / stroke language:** Double-Line
- **Material / surface language:** Metal
- **Typography:** Display Typography, Condensed
- **Motion language:** Luxurious / Slow
- **Transition language:** Mask Reveal, Line-Draw Transition

## Do's and Don'ts

- Do keep the accent (#c9a24a) for the single most important element in each frame.
- Do use Limelight large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not luxury minimal: deco is ornamental, symmetrical and gold-lined, not quiet whitespace.

## References

- Search: "art deco motion graphics"
- Search: "gatsby title sequence"
- Search: "art deco gold animation"
