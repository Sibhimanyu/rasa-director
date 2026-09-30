---
name: "Volcanic basalt"
description: "Charcoal basalt columns stepped in true isometric, a seam of molten lava orange, coarse rock grain and Space Grotesk labels."
colors:
  canvas: "#18181a"        # page ground
  ink: "#eeeae4"           # headlines and body text
  accent: "#e4571f"        # primary accent: the one thing that matters in each frame
  support: "#403e42"       # supporting colour, used sparingly
  surface: "#2a292c"       # raised cards and panels
  muted: "#8b8680"         # muted captions
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
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Volcanic basalt

A motion-graphics design system from Rasa Director's style library (Nature & material). Also known as basalt columns, lava rock, volcanic, Giant's Causeway.

## Overview

Charcoal basalt columns stepped in true isometric, a seam of molten lava orange, coarse rock grain and Space Grotesk labels.

It feels elemental, powerful, dark. Use it for energy and hardware launches, geology and science films, outdoor and adventure, game and esports teasers.

## Visual language

- **Type:** Space Grotesk (display, weight 700, tracking -0.03em) with Space Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 2px solid in #0b0b0c.
- **Depth:** no shadows.
- **Texture:** noise. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Heavy**. Motion that communicates large mass: slow to start, accelerating under gravity, landing with impact and minimal rebound.
- Enter `power4.in`, exit `power3.in`, move `power3.inOut`; durations 120 / 250 / 450 / 800 / 1200 ms; stagger 120 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, blur-in, opacity-only-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Isometric, Cinematic
- **Typography:** Grotesk, Monospace
- **Composition / layout system:** Isometric Scene
- **Color treatment:** Accent-Color System, Dark UI
- **Texture:** Digital Noise
- **Depth / dimensionality:** Isometric
- **Lighting:** Low-Key Lighting
- **Shape language:** Geometric, Angular
- **Motion language:** Heavy
- **Transition language:** Hard Cut, Push
- **Emotional / brand tone:** Bold, Dramatic

## Do's and Don'ts

- Do keep the accent (#e4571f) for the single most important element in each frame.
- Do use Space Grotesk large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not isometric 3D product worlds: no pastel toy blocks; heavy black rock and a single molten accent.

## References

- Search: "basalt columns animation"
- Search: "volcanic lava motion graphics"
- Search: "lava rock isometric design"
