---
name: "Editorial UI"
description: "Product windows typeset like a magazine: serif headings, hairline borders, cream canvas, square corners and one deep green accent."
colors:
  canvas: "#f3f0e8"        # page ground
  ink: "#1c1b18"           # headlines and body text
  accent: "#2f5d50"        # primary accent: the one thing that matters in each frame
  support: "#c9b98f"       # supporting colour, used sparingly
  surface: "#fbf9f3"       # raised cards and panels
  muted: "#8b867a"         # muted captions
typography:
  display:
    fontFamily: Instrument Serif
    fontWeight: 400
  body:
    fontFamily: Inter
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 2px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Editorial UI

A motion-graphics design system from Rasa Director's style library (Editorial & print). Also known as magazine interface, serif UI, print-inspired product design, editorial web.

## Overview

Product windows typeset like a magazine: serif headings, hairline borders, cream canvas, square corners and one deep green accent.

It feels refined, calm, intelligent. Use it for writing and note apps, AI research tools, fintech, product launch films.

## Visual language

- **Type:** Instrument Serif (display, weight 400, tracking -0.02em) with Inter for body text.
- **Surfaces:** flat fills, no gradients; corners 2px; outlines 1px solid in ink.
- **Depth:** no shadows.
- **Texture:** paper. **Icons:** line. **Decoration:** rules.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Editorial, Warm Minimalism
- **UI treatment:** Editorial UI, Windowed UI
- **Typography:** Editorial Serif, Neutral Sans Serif
- **Composition / layout system:** Editorial Grid, UI-Led Composition
- **Color treatment:** Muted, Light UI
- **Line / stroke language:** Hairline
- **Motion language:** Smooth
- **Transition language:** Mask Reveal, UI Morph
- **Format / purpose:** Product Launch Film, UI Showcase

## Do's and Don'ts

- Do keep the accent (#2f5d50) for the single most important element in each frame.
- Do use Instrument Serif large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not SaaS minimal: serif type, visible rules and paper tones replace grey cards and blue buttons.

## References

- Search: "editorial ui design animation"
- Search: "serif interface motion"
- Search: "magazine style app ui video"
