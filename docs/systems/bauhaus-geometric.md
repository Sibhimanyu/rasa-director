---
name: "Bauhaus"
description: "Circles, squares and bars in red, yellow and blue on warm off-white, geometric lowercase type, black joins, everything balanced and flat."
colors:
  canvas: "#f2ead8"        # page ground
  ink: "#1b1b1b"           # headlines and body text
  accent: "#e1382b"        # primary accent: the one thing that matters in each frame
  support: "#1f4fa3"       # supporting colour, used sparingly
  surface: "#f5c518"       # raised cards and panels
  muted: "#8a8171"         # muted captions
typography:
  display:
    fontFamily: Josefin Sans
    fontWeight: 700
  body:
    fontFamily: Josefin Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Bauhaus

A motion-graphics design system from Rasa Director's style library (Bold & graphic). Also known as Bauhaus geometric, primary geometry, Bauhaus poster, modernist primaries.

## Overview

Circles, squares and bars in red, yellow and blue on warm off-white, geometric lowercase type, black joins, everything balanced and flat.

It feels structured, artful, optimistic, balanced. Use it for design-tool launches, museum and culture, brand identities, logo stings.

## Visual language

- **Type:** Josefin Sans (display, weight 700, lowercase, tracking -0.02em) with Josefin Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 3px solid in ink.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** filled. **Decoration:** orbits.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: spring.

## The terms that define it

- **Visual style / art direction:** Bauhaus, Abstract Geometric
- **Era / design-movement influence:** Bauhaus
- **Shape language:** Geometric, Circular
- **Color treatment:** Primary Colors, Color Blocking
- **Typography:** Geometric Sans
- **Illustration style:** Geometric Vector
- **Composition / layout system:** Flowchart, Symmetrical Composition
- **Motion language:** Precise
- **Transition language:** Shape Match, Scale Transition

## Do's and Don'ts

- Do keep the accent (#e1382b) for the single most important element in each frame.
- Do use Josefin Sans large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not Memphis: Bauhaus is disciplined and primary-coloured; Memphis is chaotic, pastel and patterned.

## References

- Search: "Bauhaus motion graphics"
- Search: "Bauhaus geometric animation"
- Search: "primary shapes kinetic poster"
