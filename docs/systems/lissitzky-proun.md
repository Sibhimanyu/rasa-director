---
name: "Lissitzky Proun"
description: "Weightless axonometric blocks and planes in red, black and warm grey floating on off-white, a wide geometric title, suprematist balance."
colors:
  canvas: "#eee9dd"        # page ground
  ink: "#151413"           # headlines and body text
  accent: "#c7231f"        # primary accent: the one thing that matters in each frame
  support: "#151413"       # supporting colour, used sparingly
  surface: "#d6d0c3"       # raised cards and panels
  muted: "#6e685c"         # muted captions
typography:
  display:
    fontFamily: Syncopate
    fontWeight: 700
  body:
    fontFamily: Archivo
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Lissitzky Proun

A motion-graphics design system from Rasa Director's style library (Heritage). Also known as Proun, El Lissitzky style, suprematist axonometric, Russian avant-garde architecture.

## Overview

Weightless axonometric blocks and planes in red, black and warm grey floating on off-white, a wide geometric title, suprematist balance.

It feels visionary, balanced, architectural. Use it for architecture and engineering, design and art institutions, product systems explainers, manifesto films.

## Visual language

- **Type:** Syncopate (display, weight 700, uppercase, tracking 0.02em) with Archivo for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 2px solid in ink.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Floating**. Elements hover and bob gently around a rest point, as if suspended in water or air.
- Enter `sine.out`, exit `sine.in`, move `sine.inOut`; durations 500 / 800 / 1200 / 1800 / 2600 ms; stagger 70 ms; hold at least 1500 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Constructivism, Abstract Geometric
- **Era / design-movement influence:** Constructivism
- **Depth / dimensionality:** Isometric
- **Composition / layout system:** Isometric Scene, Asymmetric Composition
- **Shape language:** Geometric, Rectilinear
- **Color treatment:** Limited Palette, High Contrast
- **Typography:** Extended, Geometric Sans
- **Motion language:** Floating
- **Transition language:** Camera Move Transition, Slide

## Do's and Don'ts

- Do keep the accent (#c7231f) for the single most important element in each frame.
- Do use Syncopate large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not constructivist posters: Prouns are spatial, floating axonometric constructions, not flat, shouting agitprop layouts.

## References

- Search: "El Lissitzky Proun animation"
- Search: "suprematist axonometric motion"
- Search: "Russian avant-garde 3D composition"
