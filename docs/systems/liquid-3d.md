---
name: "Liquid 3D"
description: "Glossy fluid blobs pour and merge on electric cobalt, bright specular orbs, white type riding the flow with elastic springs."
colors:
  canvas: "#1234e6"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#8ff5ff"        # primary accent: the one thing that matters in each frame
  support: "#ff9de6"       # supporting colour, used sparingly
  surface: "#2a4dff"       # raised cards and panels
  muted: "#b8c6ff"         # muted captions
typography:
  display:
    fontFamily: Outfit
    fontWeight: 800
  body:
    fontFamily: Outfit
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 48px
shadows:
  card: "0 0 24px #8ff5ff"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Liquid 3D

A motion-graphics design system from RasanAI's style library (3D & materials). Also known as fluid simulation, liquid render, splash 3D, gooey liquid.

## Overview

Glossy fluid blobs pour and merge on electric cobalt, bright specular orbs, white type riding the flow with elastic springs.

It feels fluid, fresh, energetic. Use it for beverage and beauty, fintech and payments (flow), brand idents, motion backgrounds.

## Visual language

- **Type:** Outfit (display, weight 800, tracking -0.04em) with Outfit for body text.
- **Surfaces:** soft gradient washes from the surface toward the accent; corners 48px; outlines none.
- **Depth:** glow shadows (`0 0 24px #8ff5ff`).
- **Texture:** none; clean fills. **Icons:** emoji3d. **Decoration:** blobs.

## Motion

Motion language: **Liquid**. Graphics behave like a liquid material: they pour, pool, ripple, merge into blobs and drain away.
- Enter `power4.inOut`, exit `power4.inOut`, move `sine.inOut`; durations 300 / 500 / 800 / 1200 / 1800 ms; stagger 30 ms; hold at least 800 ms.
- Never: fade-up-slide, linear-entrance, bounce, blur-in.
- Preview entrance: spring.

## The terms that define it

- **Visual style / art direction:** Liquid, Glossy 3D
- **Material / surface language:** Liquid, Water
- **VFX / compositing treatment:** Liquid Simulation, Reflections
- **Shape language:** Blob-Like, Organic
- **Color treatment:** High Saturation, Cool Palette
- **Typography:** Geometric Sans
- **Production technique:** Physics Simulation
- **Motion language:** Liquid
- **Transition language:** Liquid Transition, Morph Transition

## Do's and Don'ts

- Do keep the accent (#8ff5ff) for the single most important element in each frame.
- Do use Outfit large and confident; one idea per frame.
- Do keep every shadow the same glow style.
- Don't mix surface treatments; everything is gradient.
- Don't confuse it: Not chrome liquid metal: this is colored fluid (water, paint, syrup), translucent and saturated, not a silver mirror.

## References

- Search: "liquid 3D simulation motion design"
- Search: "fluid render brand animation"
- Search: "gooey liquid logo reveal"
