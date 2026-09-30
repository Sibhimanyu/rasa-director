---
name: "Technical minimalism"
description: "Warm grey panels with black outlines, one signal-orange accent, mono labels, crosshair registration marks and dot-matrix texture; tool-like and exact."
colors:
  canvas: "#e6e5df"        # page ground
  ink: "#111111"           # headlines and body text
  accent: "#ff5a1f"        # primary accent: the one thing that matters in each frame
  support: "#1f6fff"       # supporting colour, used sparingly
  surface: "#f5f4ef"       # raised cards and panels
  muted: "#6e6d68"         # muted captions
typography:
  display:
    fontFamily: Space Grotesk
    fontWeight: 700
  body:
    fontFamily: Space Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 8px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Technical minimalism

A motion-graphics design system from Rasa Director's style library (Futuristic & tech). Also known as Teenage Engineering style, industrial product UI, Braun-tech, instrument panel minimal.

## Overview

Warm grey panels with black outlines, one signal-orange accent, mono labels, crosshair registration marks and dot-matrix texture; tool-like and exact.

It feels exact, playful-serious, engineered. Use it for hardware and audio gear, design-led dev tools, product explainers, maker brands.

## Visual language

- **Type:** Space Grotesk (display, weight 700, tracking -0.03em) with Space Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 8px; outlines 2px solid in ink.
- **Depth:** no shadows.
- **Texture:** dots. **Icons:** glyph. **Decoration:** crosshair.

## Motion

Motion language: **Mechanical**. Motion driven as if by motors, gears and belts: constant velocity segments with abrupt, rigid starts and stops.
- Enter `none`, exit `none`, move `power1.inOut`; durations 150 / 250 / 400 / 600 / 900 ms; stagger 100 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism, Modernist
- **UI treatment:** Stylized UI, Isolated-Component UI
- **Color treatment:** Limited Palette, Light UI
- **Line / stroke language:** Medium, Technical
- **Typography:** Monospace, Grotesk
- **Iconography:** Technical Icons
- **Shape language:** Rectilinear, Circular
- **Motion language:** Mechanical
- **Transition language:** Hard Cut, Slide

## Do's and Don'ts

- Do keep the accent (#ff5a1f) for the single most important element in each frame.
- Do use Space Grotesk large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not Swiss minimal: it borrows instrument panels (labels, markings, knobs), not a typographic grid.

## References

- Search: "Teenage Engineering style animation"
- Search: "industrial design UI motion"
- Search: "technical minimal product video"
