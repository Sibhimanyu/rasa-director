---
name: "Liquid glass"
description: "Clear lens-like glass controls on a vivid coral-to-cobalt wallpaper, bright rim light and glow, surfaces that ripple and morph."
colors:
  canvas: "#fff1ea"        # page ground
  ink: "#1a1633"           # headlines and body text
  accent: "#ff7a59"        # primary accent: the one thing that matters in each frame
  support: "#3d6bff"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#6e6784"         # muted captions
typography:
  display:
    fontFamily: Inter Tight
    fontWeight: 700
  body:
    fontFamily: Inter Tight
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 30px
shadows:
  card: "0 0 24px #ff7a59"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Liquid glass

A motion-graphics design system from Rasa Director's style library (Soft & tactile). Also known as iOS 26 glass, Apple liquid glass, refractive glass UI, lensing glass.

## Overview

Clear lens-like glass controls on a vivid coral-to-cobalt wallpaper, bright rim light and glow, surfaces that ripple and morph.

It feels fluid, premium, alive. Use it for mobile app launches, OS-style feature reveals, consumer hardware promos, widget showcases.

## Visual language

- **Type:** Inter Tight (display, weight 700, tracking -0.03em) with Inter Tight for body text.
- **Surfaces:** translucent frosted panels (backdrop blur) over colour; corners 30px; outlines none.
- **Depth:** glow shadows (`0 0 24px #ff7a59`).
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Fluid**. Uninterrupted flow in which every state change hands off into the next, with no visible stops or cuts between elements.
- Enter `power3.inOut`, exit `power3.inOut`, move `sine.inOut`; durations 300 / 500 / 800 / 1200 / 1800 ms; stagger 40 ms; hold at least 900 ms.
- Never: fade-up-slide, bounce, scale-pop, linear-entrance, opacity-only-entrance.
- Preview entrance: spring.

## The terms that define it

- **Visual style / art direction:** Glass, Liquid
- **UI treatment:** Glassmorphic UI, Device-Bound UI
- **Material / surface language:** Liquid Glass
- **VFX / compositing treatment:** Refraction, Glow
- **Composition / layout system:** Phone Composition, Layered Depth
- **Color treatment:** High Saturation, Gradient
- **Motion language:** Fluid
- **Transition language:** UI Morph, Liquid Transition

## Do's and Don'ts

- Do keep the accent (#ff7a59) for the single most important element in each frame.
- Do use Inter Tight large and confident; one idea per frame.
- Do keep every shadow the same glow style.
- Don't mix surface treatments; everything is glass.
- Don't confuse it: Not flat glassmorphism: the glass bends and lenses what is behind it, glints at the edge and morphs between shapes.

## References

- Search: "liquid glass UI animation"
- Search: "apple liquid glass motion"
- Search: "refractive glass interface video"
