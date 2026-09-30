---
name: "Ukiyo-e woodblock"
description: "A Hiroshige-style print: Prussian-blue bokashi sky graded to pale horizon, flat layered hills, a white sun, Mincho title set low."
colors:
  canvas: "#16336a"        # page ground
  ink: "#f6ecd6"           # headlines and body text
  accent: "#a8c6e4"        # primary accent: the one thing that matters in each frame
  support: "#1d4f9c"       # supporting colour, used sparingly
  surface: "#1d3d78"       # raised cards and panels
  muted: "#c9c0aa"         # muted captions
typography:
  display:
    fontFamily: Shippori Mincho B1
    fontWeight: 800
  body:
    fontFamily: Zen Old Mincho
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Ukiyo-e woodblock

A motion-graphics design system from Rasa Director's style library (Heritage). Also known as Japanese woodblock print, Hiroshige style, Hokusai style, floating world print, bokashi gradient.

## Overview

A Hiroshige-style print: Prussian-blue bokashi sky graded to pale horizon, flat layered hills, a white sun, Mincho title set low.

It feels poetic, tranquil, crafted. Use it for travel and hospitality, tea, sake and food, cultural documentaries, seasonal campaigns.

## Visual language

- **Type:** Shippori Mincho B1 (display, weight 800, tracking 0.02em) with Zen Old Mincho for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** paper. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Handmade / Craft, Print-Editorial
- **Illustration style:** Flat Vector, 2.5D Layered Illustration
- **Material / surface language:** Paper
- **Texture:** Paper Grain, Print Grain
- **Color treatment:** Complementary, Limited Palette
- **Composition / layout system:** Full Bleed, Asymmetric Composition
- **Depth / dimensionality:** Layered 2D
- **Motion language:** Smooth
- **Transition language:** Dissolve, Wipe

## Do's and Don'ts

- Do keep the accent (#a8c6e4) for the single most important element in each frame.
- Do use Shippori Mincho B1 large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not sumi-e: ukiyo-e is flat printed colour with graded skies and crisp layers, not black ink brushwork.

## References

- Search: "ukiyo-e animation"
- Search: "Hiroshige style motion graphics"
- Search: "Japanese woodblock print animated"
