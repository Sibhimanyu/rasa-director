---
name: "De Stijl"
description: "Heavy black grid lines dividing white fields with a few solid blocks of red, blue and yellow; blocky capitals, only right angles."
colors:
  canvas: "#111111"        # page ground
  ink: "#f5f2ea"           # headlines and body text
  accent: "#d8231b"        # primary accent: the one thing that matters in each frame
  support: "#1c3f9e"       # supporting colour, used sparingly
  surface: "#f5f2ea"       # raised cards and panels
  muted: "#f1c40f"         # muted captions
typography:
  display:
    fontFamily: Archivo Black
    fontWeight: 400
  body:
    fontFamily: Archivo
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# De Stijl

A motion-graphics design system from Rasa Director's style library (Heritage). Also known as Neoplasticism, Mondrian style, Mondrian grid, Dutch modernism.

## Overview

Heavy black grid lines dividing white fields with a few solid blocks of red, blue and yellow; blocky capitals, only right angles.

It feels rigorous, pure, balanced, artful. Use it for museum and gallery films, architecture and furniture, design-school brands, idents.

## Visual language

- **Type:** Archivo Black (display, weight 400, uppercase, tracking -0.01em) with Archivo for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Abstract Geometric, Modernist
- **Color treatment:** Primary Colors, Color Blocking
- **Composition / layout system:** Modular Grid, Asymmetric Composition
- **Shape language:** Rectilinear, Grid-Based
- **Line / stroke language:** Heavy
- **Typography:** Display Typography, Grotesk
- **Motion language:** Precise
- **Transition language:** Wipe, Slide

## Do's and Don'ts

- Do keep the accent (#d8231b) for the single most important element in each frame.
- Do use Archivo Black large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not Bauhaus: De Stijl allows only horizontals, verticals and a black grid, never circles, triangles or diagonals.

## References

- Search: "Mondrian animation"
- Search: "De Stijl motion graphics"
- Search: "neoplasticism grid animation"
