---
name: "AI aurora gradient"
description: "Violet and cyan light blooms through a dark field behind a calm headline; grain, glowing edges and a slow breathing fade."
colors:
  canvas: "#07071a"        # page ground
  ink: "#f5f3ff"           # headlines and body text
  accent: "#8b5cf6"        # primary accent: the one thing that matters in each frame
  support: "#22d3ee"       # supporting colour, used sparingly
  surface: "#151432"       # raised cards and panels
  muted: "#a5a3c9"         # muted captions
typography:
  display:
    fontFamily: Sora
    fontWeight: 600
  body:
    fontFamily: Sora
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 28px
shadows:
  card: "0 0 24px #8b5cf6"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# AI aurora gradient

A motion-graphics design system from RasanAI's style library (Futuristic & tech). Also known as aurora UI, AI glow, gradient orb, mesh glow, Gemini gradient.

## Overview

Violet and cyan light blooms through a dark field behind a calm headline; grain, glowing edges and a slow breathing fade.

It feels intelligent, ethereal, optimistic. Use it for AI product launches, model and feature announcements, landing heroes, keynote openers.

## Visual language

- **Type:** Sora (display, weight 600, tracking -0.03em) with Sora for body text.
- **Surfaces:** soft gradient washes from the surface toward the accent; corners 28px; outlines none.
- **Depth:** glow shadows (`0 0 24px #8b5cf6`).
- **Texture:** grain. **Icons:** glyph. **Decoration:** blobs.

## Motion

Motion language: **Luxurious / Slow**. Very slow, circular deceleration, long holds and stillness, where restraint itself is the signal of value.
- Enter `circ.out`, exit `circ.in`, move `power1.inOut`; durations 600 / 900 / 1400 / 2000 / 2800 ms; stagger 200 ms; hold at least 1800 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, linear-entrance, blur-in.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Gradient-Heavy, Futuristic Tech
- **UI treatment:** Minimal UI, Abstracted UI
- **Color treatment:** Mesh Gradient, Dark UI
- **VFX / compositing treatment:** Bloom, Glow, Grain
- **Typography:** Geometric Sans
- **Composition / layout system:** Centered Hero Composition, Negative-Space Composition
- **Motion language:** Luxurious / Slow
- **Transition language:** Dissolve, Blur Transition
- **Emotional / brand tone:** Futuristic, Optimistic

## Do's and Don'ts

- Do keep the accent (#8b5cf6) for the single most important element in each frame.
- Do use Sora large and confident; one idea per frame.
- Do keep every shadow the same glow style.
- Don't mix surface treatments; everything is gradient.
- Don't confuse it: Not holographic: aurora is dark and luminous, soft blurred light, not a pearly foil surface.

## References

- Search: "AI aurora gradient animation"
- Search: "glowing gradient orb motion"
- Search: "AI product launch video gradient"
