---
name: "Architectural monograph"
description: "Concrete-grey pages, an oversized light-weight grotesk, plan crosshairs, captioned plates and captions set small; built like an architecture book."
colors:
  canvas: "#d3d0ca"        # page ground
  ink: "#151515"           # headlines and body text
  accent: "#8a857d"        # primary accent: the one thing that matters in each frame
  support: "#b5b0a7"       # supporting colour, used sparingly
  surface: "#e2dfda"       # raised cards and panels
  muted: "#5f5c57"         # muted captions
typography:
  display:
    fontFamily: Inter Tight
    fontWeight: 300
  body:
    fontFamily: Inter Tight
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Architectural monograph

A motion-graphics design system from RasanAI's style library (Editorial & print). Also known as architecture book, monograph layout, El Croquis style, concrete editorial.

## Overview

Concrete-grey pages, an oversized light-weight grotesk, plan crosshairs, captioned plates and captions set small; built like an architecture book.

It feels austere, spatial, intellectual. Use it for architecture and real estate, furniture and interiors, design studios, hardware brand films.

## Visual language

- **Type:** Inter Tight (display, weight 300, tracking -0.05em) with Inter Tight for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** crosshair.

## Motion

Motion language: **Luxurious / Slow**. Very slow, circular deceleration, long holds and stillness, where restraint itself is the signal of value.
- Enter `circ.out`, exit `circ.in`, move `power1.inOut`; durations 600 / 900 / 1400 / 2000 / 2800 ms; stagger 200 ms; hold at least 1800 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, linear-entrance, blur-in.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Editorial, Modernist
- **Typography:** Grotesk
- **Composition / layout system:** Editorial Grid, Negative-Space Composition
- **Color treatment:** Grayscale, Low Contrast
- **Photo / video integration:** Masked Photography, Ken Burns Effect
- **Line / stroke language:** Hairline
- **Motion language:** Luxurious / Slow
- **Camera language:** Pan
- **Transition language:** Wipe, Dissolve
- **Emotional / brand tone:** Minimal, Intellectual

## Do's and Don'ts

- Do keep the accent (#8a857d) for the single most important element in each frame.
- Do use Inter Tight large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not Swiss poster style: light weights, grey stone tones and photographic plates; quiet rather than assertive.

## References

- Search: "architecture monograph layout animation"
- Search: "architectural editorial motion design"
- Search: "minimal architecture typography video"
