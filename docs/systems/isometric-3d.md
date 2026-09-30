---
name: "Isometric 3D"
description: "Clean isometric blocks on a pale blue grid, long pale extrusion shadows, blue duotone icons, connectors sliding blocks into place."
colors:
  canvas: "#eaf3ff"        # page ground
  ink: "#10233f"           # headlines and body text
  accent: "#2f80ed"        # primary accent: the one thing that matters in each frame
  support: "#56ccf2"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#6f86a6"         # muted captions
typography:
  display:
    fontFamily: Lexend
    fontWeight: 700
  body:
    fontFamily: Lexend
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 12px
shadows:
  card: "18px 18px 0 #10233f"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Isometric 3D

A motion-graphics design system from Rasa Director's style library (3D & materials). Also known as isometric illustration, iso scene, axonometric, isometric tech.

## Overview

Clean isometric blocks on a pale blue grid, long pale extrusion shadows, blue duotone icons, connectors sliding blocks into place.

It feels organized, clear, systematic. Use it for platform and infra explainers, how-it-works films, cloud and data stories, B2B SaaS.

## Visual language

- **Type:** Lexend (display, weight 700, tracking -0.03em) with Lexend for body text.
- **Surfaces:** flat fills, no gradients; corners 12px; outlines none.
- **Depth:** long shadows (`18px 18px 0 #10233f`).
- **Texture:** none; clean fills. **Icons:** duotone. **Decoration:** grid.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Isometric, Corporate Flat
- **Illustration style:** Isometric Illustration, Axonometric Illustration
- **Depth / dimensionality:** Isometric
- **Camera language:** Isometric Camera, Orthographic
- **Composition / layout system:** Isometric Scene
- **Iconography:** Duotone Icons
- **Color treatment:** Cool Palette, Light UI
- **Motion language:** Precise
- **Transition language:** Slide, Push

## Do's and Don'ts

- Do keep the accent (#2f80ed) for the single most important element in each frame.
- Do use Lexend large and confident; one idea per frame.
- Do keep every shadow the same long style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not full 3D: isometric keeps a fixed orthographic angle with no perspective or camera moves.

## References

- Search: "isometric animation explainer"
- Search: "isometric 3D tech illustration motion"
- Search: "isometric infographic video"
