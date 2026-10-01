---
name: "Polish poster school"
description: "Painterly, surreal flat shapes in hot red and ochre on bottle green, wobbly hand-painted lettering, grainy poster paper."
colors:
  canvas: "#27392f"        # page ground
  ink: "#f0e4c4"           # headlines and body text
  accent: "#e2432c"        # primary accent: the one thing that matters in each frame
  support: "#d6a23e"       # supporting colour, used sparingly
  surface: "#34493d"       # raised cards and panels
  muted: "#b6ab8e"         # muted captions
typography:
  display:
    fontFamily: Londrina Solid
    fontWeight: 900
  body:
    fontFamily: Karla
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Polish poster school

A motion-graphics design system from RasanAI's style library (Heritage). Also known as Polish film poster, Polska Szkoła Plakatu, Lenica style, Cieślewicz style.

## Overview

Painterly, surreal flat shapes in hot red and ochre on bottle green, wobbly hand-painted lettering, grainy poster paper.

It feels surreal, witty, melancholic, artful. Use it for film and theatre titles, festival posters, book and music releases, arthouse campaigns.

## Visual language

- **Type:** Londrina Solid (display, weight 900, uppercase, tracking 0.01em) with Karla for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** none. **Decoration:** blobs.

## Motion

Motion language: **Handmade / Imperfect**. Deliberately imperfect motion with frame-to-frame jitter (line boil), uneven spacing and slightly irregular timing, as if drawn by hand.
- Enter `power2.out`, exit `power2.in`, move `steps(3)`; durations 160 / 280 / 450 / 700 / 1000 ms; stagger 90 ms; hold at least 800 ms.
- Never: fade-up-slide, blur-in, linear-entrance, opacity-only-entrance.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Handmade / Craft, Print-Editorial
- **Illustration style:** Conceptual Illustration, Brush Illustration
- **Color treatment:** Muted, Accent-Color System
- **Typography:** Handwritten / Script, Display Typography
- **Texture:** Print Grain, Paint
- **Shape language:** Organic, Irregular
- **Composition / layout system:** Centered Hero Composition, Poster Composition
- **Motion language:** Handmade / Imperfect
- **Transition language:** Morph Transition, Dissolve

## Do's and Don'ts

- Do keep the accent (#e2432c) for the single most important element in each frame.
- Do use Londrina Solid large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not Swiss poster: the Polish school is painterly and hand-lettered with metaphor-led images, never grid-bound type.

## References

- Search: "Polish poster school animation"
- Search: "Polish film poster style"
- Search: "Lenica animation style"
