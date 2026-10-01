---
name: "Corten steel"
description: "A deep oxide-brown steel wall, laser-cut Antonio capitals, a ruled weathering timeline from mill-scale grey to bright rust orange."
colors:
  canvas: "#3a1f14"        # page ground
  ink: "#f0e6db"           # headlines and body text
  accent: "#d4692c"        # primary accent: the one thing that matters in each frame
  support: "#8a8680"       # supporting colour, used sparingly
  surface: "#4a2a1c"       # raised cards and panels
  muted: "#c3a591"         # muted captions
typography:
  display:
    fontFamily: Antonio
    fontWeight: 700
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

# Corten steel

A motion-graphics design system from RasanAI's style library (Nature & material). Also known as weathering steel, rusted steel, corten, patina steel.

## Overview

A deep oxide-brown steel wall, laser-cut Antonio capitals, a ruled weathering timeline from mill-scale grey to bright rust orange.

It feels industrial, enduring, architectural. Use it for architecture and landscape, memorials and civic, outdoor furniture and signage, wine and spirits.

## Visual language

- **Type:** Antonio (display, weight 700, uppercase, tracking 0.02em) with Archivo for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** noise. **Icons:** none. **Decoration:** rules.

## Motion

Motion language: **Heavy**. Motion that communicates large mass: slow to start, accelerating under gravity, landing with impact and minimal rebound.
- Enter `power4.in`, exit `power3.in`, move `power3.inOut`; durations 120 / 250 / 450 / 800 / 1200 ms; stagger 120 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, blur-in, opacity-only-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Brutalism, Metallic
- **Typography:** Condensed
- **Composition / layout system:** Timeline, Negative-Space Composition
- **Color treatment:** Earth Tones, Accent-Color System
- **Texture:** Distressed Edges
- **Material / surface language:** Metal
- **Shape language:** Rectilinear, Sharp
- **Motion language:** Heavy
- **Transition language:** Wipe, Hard Cut
- **Emotional / brand tone:** Serious, Confident

## Do's and Don'ts

- Do keep the accent (#d4692c) for the single most important element in each frame.
- Do use Antonio large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not hazard industrial: no warning stripes or yellow; one oxidised orange on grey, calm and architectural.

## References

- Search: "corten steel aesthetic"
- Search: "rusted steel typography animation"
- Search: "weathering steel brand design"
