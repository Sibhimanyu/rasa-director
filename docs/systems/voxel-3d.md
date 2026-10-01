---
name: "Voxel 3D"
description: "Chunky cube-built tiles in grass green and wood brown under a sky blue, hard block shadows, pixel icons, stop-motion steps."
colors:
  canvas: "#8ccbff"        # page ground
  ink: "#0e1c2a"           # headlines and body text
  accent: "#4fae34"        # primary accent: the one thing that matters in each frame
  support: "#b07a4a"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#3a5f80"         # muted captions
typography:
  display:
    fontFamily: Silkscreen
    fontWeight: 700
  body:
    fontFamily: Rubik
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "10px 10px 0 #0e1c2a"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Voxel 3D

A motion-graphics design system from RasanAI's style library (3D & materials). Also known as voxel art, MagicaVoxel style, blocky 3D, Minecraft style, cube world.

## Overview

Chunky cube-built tiles in grass green and wood brown under a sky blue, hard block shadows, pixel icons, stop-motion steps.

It feels playful, nostalgic, buildable. Use it for games and gaming creators, kids and edtech, web3 worlds, maker brands.

## Visual language

- **Type:** Silkscreen (display, weight 700, uppercase, tracking 0em) with Rubik for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** hard shadows (`10px 10px 0 #0e1c2a`).
- **Texture:** none; clean fills. **Icons:** pixel. **Decoration:** none.

## Motion

Motion language: **Choppy / Stepped**. No interpolation as an aesthetic: elements jump between a few discrete positions or cut instantly.
- Enter `steps(4)`, exit `steps(3)`, move `steps(6)`; durations 100 / 160 / 250 / 400 / 600 ms; stagger 60 ms; hold at least 500 ms.
- Never: fade-up-slide, fade-slide, blur-in, bounce, overshoot, opacity-only-entrance.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Toy-Like 3D, Pixel Art
- **Illustration style:** Pixel Art, 3D Cartoon
- **Depth / dimensionality:** Orthographic 3D
- **Shape language:** Modular, Grid-Based
- **Color treatment:** High Saturation, Earth Tones
- **Typography:** Pixel Type
- **Iconography:** Geometric Icons
- **Motion language:** Choppy / Stepped
- **Transition language:** Pixel Dissolve, Hard Cut

## Do's and Don'ts

- Do keep the accent (#4fae34) for the single most important element in each frame.
- Do use Silkscreen large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not pixel art: voxels are true 3D cubes with depth and shading, not flat 2D pixels.

## References

- Search: "voxel animation motion graphics"
- Search: "MagicaVoxel scene animation"
- Search: "blocky 3D world loop"
