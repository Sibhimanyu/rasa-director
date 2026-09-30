---
name: "Classical book typography"
description: "A clothbound classic: oxblood cover, centred old-style Garamond in cream, a gold fleuron, fine paper grain and unhurried fades."
colors:
  canvas: "#5a1f1c"        # page ground
  ink: "#f3e8d2"           # headlines and body text
  accent: "#c9a45c"        # primary accent: the one thing that matters in each frame
  support: "#8f3a33"       # supporting colour, used sparingly
  surface: "#6b2622"       # raised cards and panels
  muted: "#c7a998"         # muted captions
typography:
  display:
    fontFamily: EB Garamond
    fontWeight: 500
  body:
    fontFamily: EB Garamond
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Classical book typography

A motion-graphics design system from Rasa Director's style library (Editorial & print). Also known as literary, book design, Penguin classics, old-style serif.

## Overview

A clothbound classic: oxblood cover, centred old-style Garamond in cream, a gold fleuron, fine paper grain and unhurried fades.

It feels literary, warm, patient. Use it for publishing and book trailers, storytelling brand films, heritage brands, quote animations.

## Visual language

- **Type:** EB Garamond (display, weight 500, tracking 0em) with EB Garamond for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** paper. **Icons:** glyph. **Decoration:** none.

## Motion

Motion language: **Luxurious / Slow**. Very slow, circular deceleration, long holds and stillness, where restraint itself is the signal of value.
- Enter `circ.out`, exit `circ.in`, move `power1.inOut`; durations 600 / 900 / 1400 / 2000 / 2800 ms; stagger 200 ms; hold at least 1800 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, linear-entrance, blur-in.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Print-Editorial, Warm Minimalism
- **Typography:** Editorial Serif
- **Composition / layout system:** Centered Hero Composition, Symmetrical Composition
- **Color treatment:** Warm Palette, Limited Palette
- **Material / surface language:** Paper
- **Texture:** Paper Grain, Fibers
- **Motion language:** Luxurious / Slow
- **Transition language:** Page Flip, Dissolve
- **Emotional / brand tone:** Intellectual, Calm

## Do's and Don'ts

- Do keep the accent (#c9a45c) for the single most important element in each frame.
- Do use EB Garamond large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not magazine serif: a single centred book-cover composition in old-style type, no columns or headline drama.

## References

- Search: "book typography animation"
- Search: "literary title motion design"
- Search: "classic serif page animation"
