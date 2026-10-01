---
name: "Horological precision"
description: "Gold dial rings, indices and a sweeping hand on deep navy, engraved serif caps, tiny numerals, a mechanically smooth second-hand glide."
colors:
  canvas: "#0e1624"        # page ground
  ink: "#ece4d2"           # headlines and body text
  accent: "#c8a867"        # primary accent: the one thing that matters in each frame
  support: "#e9d7a8"       # supporting colour, used sparingly
  surface: "#162236"       # raised cards and panels
  muted: "#8c93a0"         # muted captions
typography:
  display:
    fontFamily: Cormorant Garamond
    fontWeight: 500
  body:
    fontFamily: Tenor Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Horological precision

A motion-graphics design system from RasanAI's style library (Luxury & restrained). Also known as watch dial, chronograph UI, Swiss watch film, timepiece macro.

## Overview

Gold dial rings, indices and a sweeping hand on deep navy, engraved serif caps, tiny numerals, a mechanically smooth second-hand glide.

It feels precise, heritage, masterful. Use it for watch and timepiece launches, precision engineering brands, countdowns, anniversary films.

## Visual language

- **Type:** Cormorant Garamond (display, weight 500, uppercase, tracking 0.08em) with Tenor Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 1px solid in accent.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Mechanical**. Motion driven as if by motors, gears and belts: constant velocity segments with abrupt, rigid starts and stops.
- Enter `none`, exit `none`, move `power1.inOut`; durations 150 / 250 / 400 / 600 / 900 ms; stagger 100 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Luxury, Technical Minimalism
- **Composition / layout system:** Radial Composition, Symmetrical Composition
- **Camera language:** Macro, Orbit
- **Material / surface language:** Brushed Metal
- **Typography:** High-Contrast Serif
- **Line / stroke language:** Hairline
- **Color treatment:** Dark UI, Limited Palette
- **Motion language:** Mechanical
- **Transition language:** Camera Move Transition, Dissolve

## Do's and Don'ts

- Do keep the accent (#c8a867) for the single most important element in each frame.
- Do use Cormorant Garamond large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not sci-fi HUD: the rings are a watch face in gold on navy, calm and classical, not a neon targeting overlay.

## References

- Search: "luxury watch commercial motion graphics"
- Search: "chronograph dial animation"
- Search: "swiss watch title animation"
