---
name: "Blueprint technical"
description: "White dashed linework and monospaced labels on cobalt blueprint grid, red-pencil markups; boxes, dimension lines and connectors draw themselves on."
colors:
  canvas: "#0f3d8c"        # page ground
  ink: "#f2f7ff"           # headlines and body text
  accent: "#0a2a66"        # primary accent: the one thing that matters in each frame
  support: "#d9412b"       # supporting colour, used sparingly
  surface: "#134aa6"       # raised cards and panels
  muted: "#9db8e6"         # muted captions
typography:
  display:
    fontFamily: IBM Plex Mono
    fontWeight: 600
  body:
    fontFamily: IBM Plex Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px dashed {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Blueprint technical

A motion-graphics design system from RasanAI's style library (Futuristic & tech). Also known as blueprint, cyanotype drawing, engineering drawing, technical schematic.

## Overview

White dashed linework and monospaced labels on cobalt blueprint grid, red-pencil markups; boxes, dimension lines and connectors draw themselves on.

It feels technical, intelligent, methodical. Use it for technical explainers, hardware and engineering, architecture diagrams, how-it-works films.

## Visual language

- **Type:** IBM Plex Mono (display, weight 600, uppercase, tracking 0.04em) with IBM Plex Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 2px dashed in ink.
- **Depth:** no shadows.
- **Texture:** grid. **Icons:** line. **Decoration:** crosshair.

## Motion

Motion language: **Mechanical**. Motion driven as if by motors, gears and belts: constant velocity segments with abrupt, rigid starts and stops.
- Enter `none`, exit `none`, move `power1.inOut`; durations 150 / 250 / 400 / 600 / 900 ms; stagger 100 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism
- **UI treatment:** Blueprint / Technical UI, Wireframe UI
- **Illustration style:** Blueprint, Technical Diagram
- **Line / stroke language:** Technical, Animated Draw-On
- **Color treatment:** Monochrome, Cool Palette
- **Typography:** Monospace
- **Iconography:** Technical Icons
- **Motion language:** Mechanical
- **Transition language:** Line-Draw Transition, Wipe

## Do's and Don'ts

- Do keep the accent (#0a2a66) for the single most important element in each frame.
- Do use IBM Plex Mono large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not wireframe UI: blueprint is an engineering drawing, blue ground and white line, not a grey app mockup.

## References

- Search: "blueprint animation motion graphics"
- Search: "technical schematic explainer"
- Search: "engineering drawing line animation"
