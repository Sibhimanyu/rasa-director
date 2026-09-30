---
name: "Chinese propaganda poster"
description: "Signal-red field with golden sunrays bursting from the centre, heavy blocky gold capitals, a cream star, flat print colour."
colors:
  canvas: "#b0141c"        # page ground
  ink: "#ffe9a8"           # headlines and body text
  accent: "#ffcb2e"        # primary accent: the one thing that matters in each frame
  support: "#fff4d6"       # supporting colour, used sparingly
  surface: "#8e0f15"       # raised cards and panels
  muted: "#f5b98d"         # muted captions
typography:
  display:
    fontFamily: ZCOOL QingKe HuangYou
    fontWeight: 400
  body:
    fontFamily: PT Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Chinese propaganda poster

A motion-graphics design system from Rasa Director's style library (Heritage). Also known as revolutionary poster, Maoist poster style, red sun poster, socialist poster.

## Overview

Signal-red field with golden sunrays bursting from the centre, heavy blocky gold capitals, a cream star, flat print colour.

It feels rousing, declarative, monumental. Use it for campaign launches, manifesto films, retro-ironic brand spots, event openers.

## Visual language

- **Type:** ZCOOL QingKe HuangYou (display, weight 400, uppercase, tracking 0.02em) with PT Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** filled. **Decoration:** rays.

## Motion

Motion language: **Heavy**. Motion that communicates large mass: slow to start, accelerating under gravity, landing with impact and minimal rebound.
- Enter `power4.in`, exit `power3.in`, move `power3.inOut`; durations 120 / 250 / 450 / 800 / 1200 ms; stagger 120 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, blur-in, opacity-only-entrance.
- Preview entrance: pop.

## The terms that define it

- **Visual style / art direction:** Pop Art, Screen Print
- **Color treatment:** Limited Palette, Warm Palette
- **Composition / layout system:** Radial Composition, Centered Hero Composition, Poster Composition
- **Typography:** Display Typography, Condensed
- **Texture:** Print Grain
- **Motion language:** Heavy
- **Transition language:** Zoom Transition, Wipe

## Do's and Don'ts

- Do keep the accent (#ffcb2e) for the single most important element in each frame.
- Do use ZCOOL QingKe HuangYou large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not constructivism: red ground and radiating gold sun, centred and ceremonial, not black diagonals on cream.

## References

- Search: "Chinese propaganda poster style"
- Search: "red sunburst poster animation"
- Search: "revolutionary poster motion graphics"
