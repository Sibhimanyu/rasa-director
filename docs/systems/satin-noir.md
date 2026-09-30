---
name: "Satin noir"
description: "Dark pewter pills with a satin gradient sheen, big soft drop shadows, pearl-white thin serif, slow silky slides."
colors:
  canvas: "#1a1a1e"        # page ground
  ink: "#f4f0ea"           # headlines and body text
  accent: "#a7a2ad"        # primary accent: the one thing that matters in each frame
  support: "#d8cfc2"       # supporting colour, used sparingly
  surface: "#2c2b31"       # raised cards and panels
  muted: "#9a969e"         # muted captions
typography:
  display:
    fontFamily: Instrument Serif
    fontWeight: 400
  body:
    fontFamily: Manrope
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 999px
shadows:
  card: "0 40px 70px -16px rgba(0,0,0,0.3)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Satin noir

A motion-graphics design system from Rasa Director's style library (Luxury & restrained). Also known as silk luxe, satin sheen, dark skincare luxe, liquid silk.

## Overview

Dark pewter pills with a satin gradient sheen, big soft drop shadows, pearl-white thin serif, slow silky slides.

It feels silky, sensual, modern. Use it for premium skincare and haircare, luxury app UI, lingerie and sleepwear, high-end audio.

## Visual language

- **Type:** Instrument Serif (display, weight 400, tracking -0.01em) with Manrope for body text.
- **Surfaces:** soft gradient washes from the surface toward the accent; corners fully rounded (pills); outlines none.
- **Depth:** float shadows (`0 40px 70px -16px rgba(0,0,0,0.3)`).
- **Texture:** none; clean fills. **Icons:** duotone. **Decoration:** none.

## Motion

Motion language: **Fluid**. Uninterrupted flow in which every state change hands off into the next, with no visible stops or cuts between elements.
- Enter `power3.inOut`, exit `power3.inOut`, move `sine.inOut`; durations 300 / 500 / 800 / 1200 / 1800 ms; stagger 40 ms; hold at least 900 ms.
- Never: fade-up-slide, bounce, scale-pop, linear-entrance, opacity-only-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Luxury, Gradient-Heavy
- **Material / surface language:** Fabric, Glossy Product Surface
- **Shape language:** Pill-Shaped
- **Shadow / depth cues:** Floating Shadows
- **Typography:** Editorial Serif
- **Color treatment:** Dark UI, Monochrome
- **Motion language:** Fluid
- **Transition language:** Blur Transition, Slide

## Do's and Don'ts

- Do keep the accent (#a7a2ad) for the single most important element in each frame.
- Do use Instrument Serif large and confident; one idea per frame.
- Do keep every shadow the same float style.
- Don't mix surface treatments; everything is gradient.
- Don't confuse it: Not dark neumorphism: the sheen is a directional satin gradient that floats, not a matte panel pushed out of the canvas.

## References

- Search: "satin silk luxury motion graphics"
- Search: "dark premium skincare UI"
- Search: "silk sheen gradient animation"
