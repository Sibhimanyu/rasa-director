---
name: "Point-cloud 3D"
description: "Forms built from thousands of glowing points on black: star-field dots, a dotted 3D scatter and numbers resolving out of the particles."
colors:
  canvas: "#04050a"        # page ground
  ink: "#eef2ff"           # headlines and body text
  accent: "#7df9ff"        # primary accent: the one thing that matters in each frame
  support: "#ff6ad5"       # supporting colour, used sparingly
  surface: "#0c1020"       # raised cards and panels
  muted: "#7e88a8"         # muted captions
typography:
  display:
    fontFamily: Space Grotesk
    fontWeight: 500
  body:
    fontFamily: IBM Plex Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "0 0 24px #7df9ff"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Point-cloud 3D

A motion-graphics design system from Rasa Director's style library (3D & materials). Also known as LiDAR scan look, particle sculpture, 3D scan visualization, dot-matrix 3D.

## Overview

Forms built from thousands of glowing points on black: star-field dots, a dotted 3D scatter and numbers resolving out of the particles.

It feels scientific, vast, precise. Use it for mapping and autonomy (LiDAR), data and AI platforms, science explainers, generative brand loops.

## Visual language

- **Type:** Space Grotesk (display, weight 500, tracking -0.02em) with IBM Plex Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 1px solid in #1f2a44.
- **Depth:** glow shadows (`0 0 24px #7df9ff`).
- **Texture:** dots. **Icons:** none. **Decoration:** stars.

## Motion

Motion language: **Generative**. Motion and form produced by a system of rules with seeded randomness, so the composition emerges rather than being hand-placed.
- Enter `power2.out`, exit `power2.in`, move `sine.inOut`; durations 300 / 500 / 800 / 1200 / 2000 ms; stagger 25 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, blur-in.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Particle-Based, Generative
- **Illustration style:** Photorealistic 3D
- **Information / data visualization:** Scatter Plot, Number Counter
- **VFX / compositing treatment:** Particles, Glow, Depth of Field
- **Color treatment:** Dark UI, Cool Palette
- **Depth / dimensionality:** Perspective 3D
- **Camera language:** Orbit, Dolly
- **Production technique:** Particle Simulation, Procedural Animation
- **Motion language:** Generative
- **Transition language:** Particle Transition, Noise Dissolve

## Do's and Don'ts

- Do keep the accent (#7df9ff) for the single most important element in each frame.
- Do use Space Grotesk large and confident; one idea per frame.
- Do keep every shadow the same glow style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a wireframe mesh: point clouds have no edges, only points; shapes read by density.

## References

- Search: "point cloud animation"
- Search: "LiDAR scan motion graphics"
- Search: "particle 3D data visualization"
