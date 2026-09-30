---
name: "Grainy pastel gradient"
description: "Cards washed in a lavender-to-peach gradient over grainy colour blooms, soft glow, a wide rounded sans, colour doing the talking."
colors:
  canvas: "#f4efff"        # page ground
  ink: "#2a1f4a"           # headlines and body text
  accent: "#b79cff"        # primary accent: the one thing that matters in each frame
  support: "#ffc2a8"       # supporting colour, used sparingly
  surface: "#fdf8ff"       # raised cards and panels
  muted: "#8a7fae"         # muted captions
typography:
  display:
    fontFamily: Urbanist
    fontWeight: 800
  body:
    fontFamily: Urbanist
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 30px
shadows:
  card: "0 0 24px #b79cff"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Grainy pastel gradient

A motion-graphics design system from Rasa Director's style library (Soft & tactile). Also known as noise gradient, grainy mesh gradient, gradient grain, soft mesh.

## Overview

Cards washed in a lavender-to-peach gradient over grainy colour blooms, soft glow, a wide rounded sans, colour doing the talking.

It feels dreamy, modern, optimistic. Use it for AI product launches, brand refreshes, event openers, music and podcast art.

## Visual language

- **Type:** Urbanist (display, weight 800, tracking -0.03em) with Urbanist for body text.
- **Surfaces:** soft gradient washes from the surface toward the accent; corners 30px; outlines none.
- **Depth:** glow shadows (`0 0 24px #b79cff`).
- **Texture:** grain. **Icons:** duotone. **Decoration:** blobs.

## Motion

Motion language: **Fluid**. Uninterrupted flow in which every state change hands off into the next, with no visible stops or cuts between elements.
- Enter `power3.inOut`, exit `power3.inOut`, move `sine.inOut`; durations 300 / 500 / 800 / 1200 / 1800 ms; stagger 40 ms; hold at least 900 ms.
- Never: fade-up-slide, bounce, scale-pop, linear-entrance, opacity-only-entrance.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Gradient-Heavy
- **Color treatment:** Mesh Gradient, Pastel
- **Texture:** Film Grain
- **UI treatment:** Floating-Card UI, Abstracted UI
- **Shadow / depth cues:** Glow Instead of Shadow
- **Composition / layout system:** Floating Cards
- **Motion language:** Fluid
- **Transition language:** Color Match, Blur Transition

## Do's and Don'ts

- Do keep the accent (#b79cff) for the single most important element in each frame.
- Do use Urbanist large and confident; one idea per frame.
- Do keep every shadow the same glow style.
- Don't mix surface treatments; everything is gradient.
- Don't confuse it: Not glassmorphism: the cards are opaque gradient fills with grain, not see-through frosted panes.

## References

- Search: "aurora gradient motion graphics"
- Search: "grainy mesh gradient animation"
- Search: "soft gradient UI promo"
