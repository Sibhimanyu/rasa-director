---
name: "Op art"
description: "Black-and-white radiating stripes that vibrate, a stark white star and heavy geometric caps; the pattern itself moves the eye."
colors:
  canvas: "#0b0b0b"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#ffffff"        # primary accent: the one thing that matters in each frame
  support: "#ffffff"       # supporting colour, used sparingly
  surface: "#0b0b0b"       # raised cards and panels
  muted: "#9c9c9c"         # muted captions
typography:
  display:
    fontFamily: Rubik Mono One
    fontWeight: 400
  body:
    fontFamily: Manrope
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Op art

A motion-graphics design system from RasanAI's style library (Bold & graphic). Also known as optical art, Bridget Riley style, optical illusion graphics, hypnotic black and white.

## Overview

Black-and-white radiating stripes that vibrate, a stark white star and heavy geometric caps; the pattern itself moves the eye.

It feels hypnotic, dizzying, graphic, artful. Use it for music visuals, loops and idents, fashion, event openers.

## Visual language

- **Type:** Rubik Mono One (display, weight 400, uppercase, tracking 0em) with Manrope for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** rays.

## Motion

Motion language: **Rhythmic**. Motion organized on a regular meter so entrances, pulses and holds repeat at fixed musical intervals, with or without a soundtrack.
- Enter `power3.out`, exit `power3.in`, move `sine.inOut`; durations 125 / 250 / 500 / 1000 / 2000 ms; stagger 125 ms; hold at least 1000 ms.
- Never: fade-up-slide, blur-in, linear-entrance, bounce.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Abstract Geometric, Monochrome
- **Color treatment:** Black and White, High Contrast
- **Shape language:** Geometric
- **Typography:** Geometric Sans, Extended
- **Composition / layout system:** Radial Composition, Centered Hero Composition
- **Motion language:** Rhythmic
- **Transition language:** Shape Match, Zoom Transition

## Do's and Don'ts

- Do keep the accent (#ffffff) for the single most important element in each frame.
- Do use Rubik Mono One large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not psychedelic: op art is strict black-and-white geometry, no melting colour.

## References

- Search: "op art motion graphics"
- Search: "optical illusion animation loop"
- Search: "Bridget Riley animated"
