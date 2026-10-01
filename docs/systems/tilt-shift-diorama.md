---
name: "Tilt-shift diorama"
description: "A tiny mint-green world of little rounded blocks, soft sunlit shadows and grain, like a model village shot with tilt-shift."
colors:
  canvas: "#bfe6cc"        # page ground
  ink: "#16302a"           # headlines and body text
  accent: "#ff7a59"        # primary accent: the one thing that matters in each frame
  support: "#ffd166"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#4f7a6a"         # muted captions
typography:
  display:
    fontFamily: Lexend
    fontWeight: 800
  body:
    fontFamily: Lexend
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 20px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Tilt-shift diorama

A motion-graphics design system from RasanAI's style library (3D & materials). Also known as miniature world, 3D diorama, tiny planet scene, miniature faking.

## Overview

A tiny mint-green world of little rounded blocks, soft sunlit shadows and grain, like a model village shot with tilt-shift.

It feels charming, curious, tidy. Use it for cities, travel and mobility, logistics and marketplaces, explainers of systems, brand worlds.

## Visual language

- **Type:** Lexend (display, weight 800, tracking -0.04em) with Lexend for body text.
- **Surfaces:** flat fills, no gradients; corners 20px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** grain. **Icons:** emoji3d. **Decoration:** none.

## Motion

Motion language: **Organic**. Motion that follows living, growing systems: soft sine curves, arcs rather than straight lines, uneven timing and growth from a source.
- Enter `sine.out`, exit `sine.in`, move `sine.inOut`; durations 400 / 650 / 1000 / 1500 / 2200 ms; stagger 90 ms; hold at least 1100 ms.
- Never: fade-up-slide, bounce, scale-pop, linear-entrance.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Soft 3D, Toy-Like 3D
- **Illustration style:** 3D Soft Forms, Isometric Illustration
- **Composition / layout system:** Isometric Scene, Multi-Object Choreography
- **VFX / compositing treatment:** Depth of Field, Ambient Shadows
- **Camera language:** Top-Down, Macro
- **Color treatment:** Pastel, Analogous
- **Material / surface language:** Matte Product Surface, Plastic
- **Motion language:** Organic
- **Transition language:** Camera Move Transition, Zoom-Through

## Do's and Don'ts

- Do keep the accent (#ff7a59) for the single most important element in each frame.
- Do use Lexend large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not isometric: dioramas use perspective and shallow focus to feel like a real miniature, not a flat 30-degree grid.

## References

- Search: "tilt shift diorama 3D animation"
- Search: "miniature world motion design"
- Search: "3D diorama explainer"
