---
name: "Italian Futurism"
description: "Words in freedom: heavy grotesque and Bodoni capitals crashing at angles across newsprint in black and red, one black disc, speed."
colors:
  canvas: "#ebe3d0"        # page ground
  ink: "#121110"           # headlines and body text
  accent: "#cc2019"        # primary accent: the one thing that matters in each frame
  support: "#121110"       # supporting colour, used sparingly
  surface: "#f4eee0"       # raised cards and panels
  muted: "#6c645a"         # muted captions
typography:
  display:
    fontFamily: Anton
    fontWeight: 400
  body:
    fontFamily: Bodoni Moda
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Italian Futurism

A motion-graphics design system from RasanAI's style library (Heritage). Also known as Futurist typography, parole in libertà, words in freedom, Depero style, Marinetti poster.

## Overview

Words in freedom: heavy grotesque and Bodoni capitals crashing at angles across newsprint in black and red, one black disc, speed.

It feels loud, fast, insurgent, mechanical. Use it for motorsport and speed, manifesto films, music and nightlife, art and culture openers.

## Visual language

- **Type:** Anton (display, weight 400, uppercase, tracking 0em) with Bodoni Moda for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** noise. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Mechanical**. Motion driven as if by motors, gears and belts: constant velocity segments with abrupt, rigid starts and stops.
- Enter `none`, exit `none`, move `power1.inOut`; durations 150 / 250 / 400 / 600 / 900 ms; stagger 100 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Print-Editorial, Mixed-Media Collage
- **Typography:** Condensed, High-Contrast Serif
- **Composition / layout system:** Asymmetric Composition, Typography-Led Composition, Collage Composition
- **Color treatment:** Limited Palette, High Contrast
- **Texture:** Print Grain
- **Motion language:** Mechanical
- **Transition language:** Push, Whip Transition

## Do's and Don'ts

- Do keep the accent (#cc2019) for the single most important element in each frame.
- Do use Anton large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not constructivism: Futurism is Italian, onomatopoeic and typographically chaotic, celebrating speed, not ordered agitprop geometry.

## References

- Search: "Italian futurism typography animation"
- Search: "parole in liberta motion"
- Search: "Depero poster animation"
