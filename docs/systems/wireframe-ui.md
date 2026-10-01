---
name: "Wireframe UI"
description: "Grey boxes, dashed outlines and placeholder bars on a faint grid: the product sketched as structure before pixels."
colors:
  canvas: "#f3f4f6"        # page ground
  ink: "#1f2937"           # headlines and body text
  accent: "#6b7280"        # primary accent: the one thing that matters in each frame
  support: "#3b82f6"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#9ca3af"         # muted captions
typography:
  display:
    fontFamily: Roboto Mono
    fontWeight: 600
  body:
    fontFamily: Inter
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 6px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px dashed {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Wireframe UI

A motion-graphics design system from RasanAI's style library (Product & UI). Also known as lo-fi wireframe, skeleton UI, grey-box mockup.

## Overview

Grey boxes, dashed outlines and placeholder bars on a faint grid: the product sketched as structure before pixels.

It feels honest, in-progress, structural. Use it for roadmap and beta films, design process stories, before/after reveals.

## Visual language

- **Type:** Roboto Mono (display, weight 600, tracking -0.03em) with Inter for body text.
- **Surfaces:** flat fills, no gradients; corners 6px; outlines 3px dashed in #6b7280.
- **Depth:** no shadows.
- **Texture:** grid. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Linear**. Constant-speed interpolation from start to end with no acceleration or deceleration.
- Enter `none`, exit `none`, move `none`; durations 200 / 400 / 700 / 1000 / 1600 ms; stagger 100 ms; hold at least 800 ms.
- Never: fade-up-slide, bounce, overshoot, blur-in, scale-pop.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism
- **UI treatment:** Wireframe UI, Skeleton UI
- **Line / stroke language:** Thin
- **Color treatment:** Grayscale
- **Composition / layout system:** Modular Grid
- **Product demonstration language:** Abstract Visualization to UI
- **Motion language:** Linear
- **Transition language:** Line-Draw Transition, UI Morph

## Do's and Don'ts

- Do keep the accent (#6b7280) for the single most important element in each frame.
- Do use Roboto Mono large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not blueprint schematic: neutral greys and UI placeholders, not white-on-blue technical drawing.

## References

- Search: "wireframe to ui animation"
- Search: "lo-fi wireframe motion"
- Search: "skeleton ui reveal"
