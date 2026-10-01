---
name: "Spectroscopy"
description: "White light split by a prism across a black bench: fine spectral beams, one sodium-yellow line measured huge in nanometres, mono read-outs."
colors:
  canvas: "#0a0a0d"        # page ground
  ink: "#f1f1f3"           # headlines and body text
  accent: "#ffd23a"        # primary accent: the one thing that matters in each frame
  support: "#8a93a6"       # supporting colour, used sparingly
  surface: "#14141a"       # raised cards and panels
  muted: "#8a8a96"         # muted captions
typography:
  display:
    fontFamily: DM Mono
    fontWeight: 500
  body:
    fontFamily: DM Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Spectroscopy

A motion-graphics design system from RasanAI's style library (Science). Also known as prism spectrum, spectral lines, light dispersion, spectrograph, optics bench.

## Overview

White light split by a prism across a black bench: fine spectral beams, one sodium-yellow line measured huge in nanometres, mono read-outs.

It feels luminous, precise, curious. Use it for optics and photonics, lighting and display tech, physics explainers, brand films about light.

## Visual language

- **Type:** DM Mono (display, weight 500, tracking -0.02em) with DM Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 1px solid in #2a2a33.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** refraction.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism
- **VFX / compositing treatment:** Refraction, Light Streaks
- **Color treatment:** Dark UI, Accent-Color System
- **Typography:** Monospace, Neo-Grotesk
- **Information / data visualization:** Statistic Callout, Line Graph
- **Composition / layout system:** Asymmetric Composition, Negative-Space Composition
- **Motion language:** Precise
- **Transition language:** Light Wipe, Fade
- **Emotional / brand tone:** Intellectual, Cinematic

## Do's and Don'ts

- Do keep the accent (#ffd23a) for the single most important element in each frame.
- Do use DM Mono large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not holographic iridescent: a physics bench with a prism and one measured spectral line on black, not a shimmering foil surface.

## References

- Search: "prism spectrum animation"
- Search: "light dispersion motion graphics"
- Search: "spectroscopy explainer visuals"
