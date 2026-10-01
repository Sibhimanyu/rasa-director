---
name: "3D wireframe mesh"
description: "Thin dashed mesh-green lines on black, unfilled nodes and topology like a 3D viewport; objects build edge by edge."
colors:
  canvas: "#0a0a0a"        # page ground
  ink: "#e8e8e8"           # headlines and body text
  accent: "#39ff88"        # primary accent: the one thing that matters in each frame
  support: "#ff9d3a"       # supporting colour, used sparingly
  surface: "#0a0a0a"       # raised cards and panels
  muted: "#7a7a7a"         # muted captions
typography:
  display:
    fontFamily: Martian Mono
    fontWeight: 600
  body:
    fontFamily: Martian Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px dashed {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# 3D wireframe mesh

A motion-graphics design system from RasanAI's style library (3D & materials). Also known as wireframe render, mesh view, polygon wireframe, viewport look.

## Overview

Thin dashed mesh-green lines on black, unfilled nodes and topology like a 3D viewport; objects build edge by edge.

It feels analytical, raw, technical. Use it for 3D and CAD software, engineering and simulation, game dev tools, technical teasers.

## Visual language

- **Type:** Martian Mono (display, weight 600, tracking -0.03em) with Martian Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 1px dashed in accent.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** grid.

## Motion

Motion language: **Procedural**. Motion computed from formulas and parameters (index, distance, sine, noise) rather than hand-set keyframes.
- Enter `power3.out`, exit `power3.in`, move `sine.inOut`; durations 250 / 400 / 600 / 900 / 1400 ms; stagger 30 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism, Abstract Geometric
- **UI treatment:** Wireframe UI
- **Illustration style:** Technical Diagram, Outline Illustration
- **Line / stroke language:** Hairline, Animated Draw-On
- **Depth / dimensionality:** Perspective 3D
- **Color treatment:** Monochrome, Dark UI
- **Typography:** Monospace
- **Motion language:** Procedural
- **Transition language:** Line-Draw Transition, Fragmentation

## Do's and Don'ts

- Do keep the accent (#39ff88) for the single most important element in each frame.
- Do use Martian Mono large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not neon grid: no glow or light-cycle drama; it is the honest viewport mesh before shading.

## References

- Search: "3D wireframe animation"
- Search: "mesh wireframe motion graphics"
- Search: "viewport wireframe render reveal"
