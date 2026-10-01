---
name: "Warm minimalism"
description: "Oat and linen neutrals, a soft serif headline, a terracotta block, fine grain, generous margins and slow sliding reveals."
colors:
  canvas: "#efe6da"        # page ground
  ink: "#2f2721"           # headlines and body text
  accent: "#c4704a"        # primary accent: the one thing that matters in each frame
  support: "#d8b898"       # supporting colour, used sparingly
  surface: "#f7f1e8"       # raised cards and panels
  muted: "#8e8173"         # muted captions
typography:
  display:
    fontFamily: Fraunces
    fontWeight: 500
  body:
    fontFamily: Manrope
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 4px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Warm minimalism

A motion-graphics design system from RasanAI's style library (Soft & tactile). Also known as japandi, earthy minimal, organic modern, terracotta minimal.

## Overview

Oat and linen neutrals, a soft serif headline, a terracotta block, fine grain, generous margins and slow sliding reveals.

It feels warm, honest, unhurried. Use it for lifestyle and home brands, hospitality, craft food and coffee, architecture studios.

## Visual language

- **Type:** Fraunces (display, weight 500, tracking -0.03em) with Manrope for body text.
- **Surfaces:** flat fills, no gradients; corners 4px; outlines none.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Warm Minimalism
- **Color treatment:** Earth Tones, Warm Palette
- **Typography:** Editorial Serif, Humanist Sans
- **Texture:** Film Grain
- **Composition / layout system:** Editorial Grid, Negative-Space Composition
- **Emotional / brand tone:** Calm, Human
- **Motion language:** Smooth
- **Transition language:** Slide, Crossfade

## Do's and Don'ts

- Do keep the accent (#c4704a) for the single most important element in each frame.
- Do use Fraunces large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not quiet luxury: warmer and more human, with a friendly soft serif and earth colour, not a status signal.

## References

- Search: "warm minimalism brand motion"
- Search: "japandi motion graphics"
- Search: "earthy minimal typography video"
