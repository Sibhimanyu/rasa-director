---
name: "Component spec close-up"
description: "One button, toggle or input magnified on a dark dot grid with crosshair registration marks, hairline outlines, measured motion."
colors:
  canvas: "#111113"        # page ground
  ink: "#f2f2f3"           # headlines and body text
  accent: "#a3e635"        # primary accent: the one thing that matters in each frame
  support: "#38bdf8"       # supporting colour, used sparingly
  surface: "#1b1b1f"       # raised cards and panels
  muted: "#8b8b93"         # muted captions
typography:
  display:
    fontFamily: Geist
    fontWeight: 600
  body:
    fontFamily: Geist
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 12px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Component spec close-up

A motion-graphics design system from RasanAI's style library (Product & UI). Also known as isolated-component UI, design-system reel, component macro.

## Overview

One button, toggle or input magnified on a dark dot grid with crosshair registration marks, hairline outlines, measured motion.

It feels precise, crafted, calm. Use it for design-system launches, component library reels, micro-interaction showcases.

## Visual language

- **Type:** Geist (display, weight 600, tracking -0.03em) with Geist for body text.
- **Surfaces:** flat fills, no gradients; corners 12px; outlines 1px solid in #3a3a40.
- **Depth:** no shadows.
- **Texture:** dots. **Icons:** line. **Decoration:** crosshair.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: spring.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism
- **UI treatment:** Isolated-Component UI, Micro-UI
- **UI interaction motion:** Toggle Switch, Hover, Click, Focus State
- **Camera language:** Macro
- **Composition / layout system:** Negative-Space Composition
- **Line / stroke language:** Hairline
- **Motion language:** Precise
- **Transition language:** Match Cut, UI Morph

## Do's and Don'ts

- Do keep the accent (#a3e635) for the single most important element in each frame.
- Do use Geist large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not oversized UI: a measured close-up with spec marks, not a poster-scale gag.

## References

- Search: "ui component animation showcase"
- Search: "design system motion reel"
- Search: "micro interaction close up"
