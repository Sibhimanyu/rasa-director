---
name: "Gummy gel"
description: "A phone full of translucent jelly-pink tiles glowing from within over bubblegum blobs; wet highlights, wobbly springs, squishy and edible."
colors:
  canvas: "#fff0f6"        # page ground
  ink: "#3a0d2a"           # headlines and body text
  accent: "#ff4fa3"        # primary accent: the one thing that matters in each frame
  support: "#43e0c2"       # supporting colour, used sparingly
  surface: "#ffc2dc"       # raised cards and panels
  muted: "#9a5a7a"         # muted captions
typography:
  display:
    fontFamily: Fredoka
    fontWeight: 700
  body:
    fontFamily: Nunito
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 30px
shadows:
  card: "0 0 24px #ff4fa3"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Gummy gel

A motion-graphics design system from RasanAI's style library (3D & materials). Also known as jelly 3D, gel UI, translucent candy, gummy bear material.

## Overview

A phone full of translucent jelly-pink tiles glowing from within over bubblegum blobs; wet highlights, wobbly springs, squishy and edible.

It feels squishy, sweet, playful. Use it for snack and beauty brands, kids products, social promos, sticker-style app ads.

## Visual language

- **Type:** Fredoka (display, weight 700, tracking -0.02em) with Nunito for body text.
- **Surfaces:** translucent frosted panels (backdrop blur) over colour; corners 30px; outlines none.
- **Depth:** glow shadows (`0 0 24px #ff4fa3`).
- **Texture:** none; clean fills. **Icons:** emoji3d. **Decoration:** blobs.

## Motion

Motion language: **Elastic**. Objects overshoot past their target and oscillate back and forth several times before settling, as if attached by a rubber band.
- Enter `elastic.out(1,0.4)`, exit `back.in(1.4)`, move `elastic.out(1,0.5)`; durations 200 / 350 / 550 / 850 / 1300 ms; stagger 45 ms; hold at least 700 ms.
- Never: fade-up-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: spring.

## The terms that define it

- **Visual style / art direction:** Gel / Jelly, Glossy 3D
- **Material / surface language:** Gel, Jelly
- **Shape language:** Pill-Shaped, Blob-Like
- **Color treatment:** Pastel, High Saturation
- **VFX / compositing treatment:** Refraction, Soft-Body Simulation
- **Typography:** Rounded Sans, Inflated Type
- **Motion language:** Elastic
- **Transition language:** Liquid Transition, Morph Transition
- **UI treatment:** Device-Bound UI, Stylized UI

## Do's and Don'ts

- Do keep the accent (#ff4fa3) for the single most important element in each frame.
- Do use Fredoka large and confident; one idea per frame.
- Do keep every shadow the same glow style.
- Don't mix surface treatments; everything is glass.
- Don't confuse it: Not glass: gel is soft, colored and wobbly with inner glow, not rigid clear refraction.

## References

- Search: "gummy jelly 3D animation"
- Search: "gel material motion design"
- Search: "translucent jelly UI"
