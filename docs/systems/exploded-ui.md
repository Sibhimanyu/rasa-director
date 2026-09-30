---
name: "Exploded UI"
description: "One app window separates into stacked offset layers, each edged in a bright accent, revealing its structure like an exploded technical view."
colors:
  canvas: "#f4f4f0"        # page ground
  ink: "#111111"           # headlines and body text
  accent: "#ff5a1f"        # primary accent: the one thing that matters in each frame
  support: "#2f6bff"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#6f6f6a"         # muted captions
typography:
  display:
    fontFamily: Space Grotesk
    fontWeight: 700
  body:
    fontFamily: Inter
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 6px
shadows:
  card: "7px 7px 0 #ff5a1f, 14px 14px 0 #111111"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Exploded UI

A motion-graphics design system from Rasa Director's style library (Product & UI). Also known as exploded view interface, layered UI breakdown, z-stack explode.

## Overview

One app window separates into stacked offset layers, each edged in a bright accent, revealing its structure like an exploded technical view.

It feels clever, technical, revealing. Use it for architecture explainers, design-system films, how-it's-built moments.

## Visual language

- **Type:** Space Grotesk (display, weight 700, tracking -0.03em) with Inter for body text.
- **Surfaces:** flat fills, no gradients; corners 6px; outlines 2px solid in ink.
- **Depth:** layered shadows (`7px 7px 0 #ff5a1f, 14px 14px 0 #111111`).
- **Texture:** grid. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Mechanical**. Motion driven as if by motors, gears and belts: constant velocity segments with abrupt, rigid starts and stops.
- Enter `none`, exit `none`, move `power1.inOut`; durations 150 / 250 / 400 / 600 / 900 ms; stagger 100 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism
- **UI treatment:** Exploded UI, Windowed UI
- **Product demonstration language:** Exploded-Interface Explanation
- **Depth / dimensionality:** Layered 2D
- **Composition / layout system:** Layered Depth
- **Shadow / depth cues:** Layered Shadows
- **Camera language:** Orbit
- **Motion language:** Mechanical
- **Transition language:** Scale Transition, UI Morph

## Do's and Don'ts

- Do keep the accent (#ff5a1f) for the single most important element in each frame.
- Do use Space Grotesk large and confident; one idea per frame.
- Do keep every shadow the same layered style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not deconstructed UI: layers stay aligned on one axis; nothing is scattered.

## References

- Search: "exploded ui layers animation"
- Search: "interface exploded view motion"
- Search: "ui layer breakdown 3d"
