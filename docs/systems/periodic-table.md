---
name: "Periodic table"
description: "Square element cells on white, hairline black rules, big symbols with small numbers, category colours: metal yellow, gas blue."
colors:
  canvas: "#f4f4f0"        # page ground
  ink: "#161616"           # headlines and body text
  accent: "#f5c542"        # primary accent: the one thing that matters in each frame
  support: "#8cc6e8"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#737373"         # muted captions
typography:
  display:
    fontFamily: Work Sans
    fontWeight: 700
  body:
    fontFamily: Work Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Periodic table

A motion-graphics design system from Rasa Director's style library (Science). Also known as element tiles, periodic table grid, chemistry chart, element cell.

## Overview

Square element cells on white, hairline black rules, big symbols with small numbers, category colours: metal yellow, gas blue.

It feels orderly, clever, friendly. Use it for science education, materials and chemistry brands, systems and taxonomy explainers, listicle films.

## Visual language

- **Type:** Work Sans (display, weight 700, tracking -0.03em) with Work Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 2px solid in ink.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Swiss / International Typographic Style
- **Composition / layout system:** Modular Grid, Bento Grid
- **Color treatment:** Color Blocking
- **Shape language:** Rectilinear, Grid-Based
- **Line / stroke language:** Thin, Uniform Stroke
- **Typography:** Grotesk
- **Format / purpose:** Educational Motion, Animated Infographic
- **Information / data visualization:** Table
- **Motion language:** Snappy
- **Transition language:** Hard Cut, Scale Transition
- **Emotional / brand tone:** Intellectual, Friendly

## Do's and Don'ts

- Do keep the accent (#f5c542) for the single most important element in each frame.
- Do use Work Sans large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not bento showcase: a strict chart of equal square cells, ruled and colour-coded by category, not rounded product tiles.

## References

- Search: "periodic table animation"
- Search: "element tile motion graphics"
- Search: "periodic table style design"
