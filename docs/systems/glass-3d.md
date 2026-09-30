---
name: "Glass 3D"
description: "Translucent frosted-glass cards refract cyan and pink light behind them on deep navy; thin bright edges, big float shadows."
colors:
  canvas: "#0a1020"        # page ground
  ink: "#f4f8ff"           # headlines and body text
  accent: "#3fb8ff"        # primary accent: the one thing that matters in each frame
  support: "#ff5ccf"       # supporting colour, used sparingly
  surface: "#1b2540"       # raised cards and panels
  muted: "#9aa6c4"         # muted captions
typography:
  display:
    fontFamily: Outfit
    fontWeight: 700
  body:
    fontFamily: Outfit
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 32px
shadows:
  card: "0 40px 70px -16px rgba(0,0,0,0.3)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Glass 3D

A motion-graphics design system from Rasa Director's style library (3D & materials). Also known as 3D glass, refractive glass, frosted glass objects, crystal render.

## Overview

Translucent frosted-glass cards refract cyan and pink light behind them on deep navy; thin bright edges, big float shadows.

It feels premium, luminous, futuristic. Use it for fintech and crypto, AI and platform launches, premium hardware, keynote openers.

## Visual language

- **Type:** Outfit (display, weight 700, tracking -0.03em) with Outfit for body text.
- **Surfaces:** translucent frosted panels (backdrop blur) over colour; corners 32px; outlines none.
- **Depth:** float shadows (`0 40px 70px -16px rgba(0,0,0,0.3)`).
- **Texture:** none; clean fills. **Icons:** duotone. **Decoration:** orbits.

## Motion

Motion language: **Floating**. Elements hover and bob gently around a rest point, as if suspended in water or air.
- Enter `sine.out`, exit `sine.in`, move `sine.inOut`; durations 500 / 800 / 1200 / 1800 / 2600 ms; stagger 70 ms; hold at least 1500 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Glass, Glossy 3D
- **UI treatment:** Glassmorphic UI, Floating-Card UI
- **Material / surface language:** Glass, Frosted Glass
- **VFX / compositing treatment:** Refraction, Bloom, Depth of Field
- **Color treatment:** Dark UI, Gradient
- **Depth / dimensionality:** Perspective 3D
- **Motion language:** Floating
- **Transition language:** Blur Transition, Camera Move Transition

## Do's and Don'ts

- Do keep the accent (#3fb8ff) for the single most important element in each frame.
- Do use Outfit large and confident; one idea per frame.
- Do keep every shadow the same float style.
- Don't mix surface treatments; everything is glass.
- Don't confuse it: Not spatial UI: glass 3D is about the material (refraction, light) rather than windows placed in a room.

## References

- Search: "3D glass render motion design"
- Search: "refractive glass animation"
- Search: "frosted glass 3D brand video"
