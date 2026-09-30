---
name: "Circuit board (PCB)"
description: "Gold traces and solder pads run across solder-mask green; square chips with copper outlines, stencil-mono labels, stepped signal pulses."
colors:
  canvas: "#06281c"        # page ground
  ink: "#e8fff0"           # headlines and body text
  accent: "#d9b44a"        # primary accent: the one thing that matters in each frame
  support: "#37e28f"       # supporting colour, used sparingly
  surface: "#0b3d2a"       # raised cards and panels
  muted: "#7fb59a"         # muted captions
typography:
  display:
    fontFamily: Oxanium
    fontWeight: 700
  body:
    fontFamily: Oxanium
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 4px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px solid {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Circuit board (PCB)

A motion-graphics design system from Rasa Director's style library (Futuristic & tech). Also known as PCB aesthetic, electronic circuit, motherboard style, silicon traces.

## Overview

Gold traces and solder pads run across solder-mask green; square chips with copper outlines, stencil-mono labels, stepped signal pulses.

It feels technical, engineered, electric. Use it for hardware and chip launches, IoT products, semiconductor explainers, maker brands.

## Visual language

- **Type:** Oxanium (display, weight 700, uppercase, tracking 0.06em) with Oxanium for body text.
- **Surfaces:** flat fills, no gradients; corners 4px; outlines 3px solid in accent.
- **Depth:** no shadows.
- **Texture:** dots. **Icons:** filled. **Decoration:** circuit.

## Motion

Motion language: **Procedural**. Motion computed from formulas and parameters (index, distance, sine, noise) rather than hand-set keyframes.
- Enter `power3.out`, exit `power3.in`, move `sine.inOut`; durations 250 / 400 / 600 / 900 / 1400 ms; stagger 30 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Futuristic Tech, Abstract Geometric
- **UI treatment:** Metaphorical / Faux UI, Stylized UI
- **Illustration style:** Schematic
- **Shape language:** Technical, Rectilinear
- **Line / stroke language:** Technical, Animated Draw-On
- **Color treatment:** Limited Palette, Dark UI
- **Typography:** Extended
- **Motion language:** Procedural
- **Transition language:** Line-Draw Transition, Light Wipe

## Do's and Don'ts

- Do keep the accent (#d9b44a) for the single most important element in each frame.
- Do use Oxanium large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not blueprint: PCB is a physical board, green mask and gold copper, not a white-line drawing.

## References

- Search: "circuit board motion graphics"
- Search: "PCB trace animation"
- Search: "electronic circuit tech intro"
