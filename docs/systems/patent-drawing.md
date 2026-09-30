---
name: "Patent drawing"
description: "Black ink line art on bright white: a device drawn in isometric, grey-shaded faces, reference numerals and a lettered FIG. 1; no colour."
colors:
  canvas: "#fbfbf9"        # page ground
  ink: "#111111"           # headlines and body text
  accent: "#efefec"        # primary accent: the one thing that matters in each frame
  support: "#d6d6d2"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#6b6b6b"         # muted captions
typography:
  display:
    fontFamily: Old Standard TT
    fontWeight: 700
  body:
    fontFamily: Old Standard TT
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Patent drawing

A motion-graphics design system from Rasa Director's style library (Science). Also known as patent illustration, patent figure, USPTO drawing, technical line drawing.

## Overview

Black ink line art on bright white: a device drawn in isometric, grey-shaded faces, reference numerals and a lettered FIG. 1; no colour.

It feels exact, inventive, matter-of-fact. Use it for hardware and invention stories, how-it-works explainers, IP and deep-tech launches, maker brands.

## Visual language

- **Type:** Old Standard TT (display, weight 700, tracking 0em) with Old Standard TT for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 2px solid in ink.
- **Depth:** no shadows.
- **Texture:** hatching. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism, Monochrome
- **Illustration style:** Technical Diagram, Axonometric Illustration
- **Color treatment:** Black and White
- **Line / stroke language:** Thin, Technical
- **Texture:** Hatching
- **Depth / dimensionality:** Isometric
- **Typography:** Editorial Serif
- **Motion language:** Precise
- **Transition language:** Line-Draw Transition, Wipe
- **Emotional / brand tone:** Technical, Serious

## Do's and Don'ts

- Do keep the accent (#efefec) for the single most important element in each frame.
- Do use Old Standard TT large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a blueprint: black line on white with no grid or blue ground; parts are shaded grey and carry reference numerals.

## References

- Search: "patent drawing animation"
- Search: "patent illustration style motion"
- Search: "technical line drawing isometric animation"
