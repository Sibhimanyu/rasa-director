---
name: "Mid-century modern"
description: "Flat teal, mustard and tomato shapes in a loose editorial grid, atomic starbursts, geometric sans and printed grain."
colors:
  canvas: "#efe6d2"        # page ground
  ink: "#1e2a2a"           # headlines and body text
  accent: "#d8572a"        # primary accent: the one thing that matters in each frame
  support: "#2f8c85"       # supporting colour, used sparingly
  surface: "#f7f0e0"       # raised cards and panels
  muted: "#7d7560"         # muted captions
typography:
  display:
    fontFamily: Josefin Sans
    fontWeight: 700
  body:
    fontFamily: Josefin Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Mid-century modern

A motion-graphics design system from Rasa Director's style library (Retro & eras). Also known as 60s modern, atomic age, Saul Bass era, MCM.

## Overview

Flat teal, mustard and tomato shapes in a loose editorial grid, atomic starbursts, geometric sans and printed grain.

It feels crafted, optimistic, tasteful. Use it for brand films, title sequences, architecture and furniture, travel.

## Visual language

- **Type:** Josefin Sans (display, weight 700, uppercase, tracking 0.04em) with Josefin Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** filled. **Decoration:** stars.

## Motion

Motion language: **Mechanical**. Motion driven as if by motors, gears and belts: constant velocity segments with abrupt, rigid starts and stops.
- Enter `none`, exit `none`, move `power1.inOut`; durations 150 / 250 / 400 / 600 / 900 ms; stagger 100 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Mid-Century Modern, Modernist
- **Era / design-movement influence:** Mid-Century Modern
- **Illustration style:** Geometric Vector, Grainy Vector
- **Color treatment:** Limited Palette, Earth Tones
- **Typography:** Geometric Sans
- **Texture:** Print Grain
- **Motion language:** Mechanical
- **Transition language:** Wipe, Graphic Match

## Do's and Don'ts

- Do keep the accent (#d8572a) for the single most important element in each frame.
- Do use Josefin Sans large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not 70s groovy: mid-century is flat, angular and restrained, with atomic stars instead of fat curves.

## References

- Search: "mid century modern animation"
- Search: "atomic age motion graphics"
- Search: "saul bass style title sequence"
