---
name: "Prism crystal"
description: "Sharp faceted panels on ink-violet split light into offset pink and cyan edges; hairline white rims and chromatic dispersion shimmer."
colors:
  canvas: "#0b0a14"        # page ground
  ink: "#f7f5ff"           # headlines and body text
  accent: "#ff4d8d"        # primary accent: the one thing that matters in each frame
  support: "#3ee0ff"       # supporting colour, used sparingly
  surface: "#1a1830"       # raised cards and panels
  muted: "#9a96b8"         # muted captions
typography:
  display:
    fontFamily: Unbounded
    fontWeight: 600
  body:
    fontFamily: Manrope
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "7px 7px 0 #ff4d8d, 14px 14px 0 #f7f5ff"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Prism crystal

A motion-graphics design system from RasanAI's style library (3D & materials). Also known as crystal render, prismatic glass, dispersion, faceted crystal, rainbow refraction.

## Overview

Sharp faceted panels on ink-violet split light into offset pink and cyan edges; hairline white rims and chromatic dispersion shimmer.

It feels brilliant, precise, premium. Use it for AI and platform launches, fintech and crypto, music and fashion drops, brand idents.

## Visual language

- **Type:** Unbounded (display, weight 600, uppercase, tracking 0.02em) with Manrope for body text.
- **Surfaces:** soft gradient washes from the surface toward the accent; corners 0px; outlines 1px solid in #ffffff.
- **Depth:** layered shadows (`7px 7px 0 #ff4d8d, 14px 14px 0 #f7f5ff`).
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** rays.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Glass, Abstract Geometric
- **Material / surface language:** Crystal, Glass
- **VFX / compositing treatment:** Refraction, Chromatic Aberration, Light Streaks
- **Shape language:** Sharp, Angular
- **Color treatment:** Dark UI, Iridescent
- **Shadow / depth cues:** Layered Shadows
- **Typography:** Extended
- **Motion language:** Precise
- **Transition language:** Light Wipe, Flash Transition

## Do's and Don'ts

- Do keep the accent (#ff4d8d) for the single most important element in each frame.
- Do use Unbounded large and confident; one idea per frame.
- Do keep every shadow the same layered style.
- Don't mix surface treatments; everything is gradient.
- Don't confuse it: Not glass 3D: prism is faceted and sharp, splitting light into color; glass 3D is smooth, frosted and soft.

## References

- Search: "prism crystal 3D animation"
- Search: "chromatic dispersion motion design"
- Search: "faceted crystal logo reveal"
