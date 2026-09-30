---
name: "Holographic iridescent"
description: "Pearly lavender, mint and pink shifting across soft tiles like holographic foil, with grain and slow shimmering drifts."
colors:
  canvas: "#eceaf7"        # page ground
  ink: "#1b1633"           # headlines and body text
  accent: "#6fe3d6"        # primary accent: the one thing that matters in each frame
  support: "#f4a6ff"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#7a7396"         # muted captions
typography:
  display:
    fontFamily: Syne
    fontWeight: 800
  body:
    fontFamily: Manrope
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 32px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Holographic iridescent

A motion-graphics design system from Rasa Director's style library (Futuristic & tech). Also known as holo foil, iridescent gradient, pearlescent, oil-slick, hologram sticker.

## Overview

Pearly lavender, mint and pink shifting across soft tiles like holographic foil, with grain and slow shimmering drifts.

It feels dreamy, futuristic, fashionable. Use it for beauty and fashion tech, NFT and web3 drops, music artwork loops, Gen-Z app launches.

## Visual language

- **Type:** Syne (display, weight 800, tracking -0.03em) with Manrope for body text.
- **Surfaces:** soft gradient washes from the surface toward the accent; corners 32px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** grain. **Icons:** duotone. **Decoration:** blobs.

## Motion

Motion language: **Fluid**. Uninterrupted flow in which every state change hands off into the next, with no visible stops or cuts between elements.
- Enter `power3.inOut`, exit `power3.inOut`, move `sine.inOut`; durations 300 / 500 / 800 / 1200 / 1800 ms; stagger 40 ms; hold at least 900 ms.
- Never: fade-up-slide, bounce, scale-pop, linear-entrance, opacity-only-entrance.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Holographic / Iridescent, Gradient-Heavy
- **UI treatment:** Bento UI, Abstracted UI
- **Color treatment:** Iridescent, Pastel
- **Material / surface language:** Holographic Foil
- **VFX / compositing treatment:** Grain, Refraction
- **Typography:** Display Typography, Extended
- **Motion language:** Fluid
- **Transition language:** Color Match, Liquid Transition
- **Emotional / brand tone:** Futuristic, Youthful

## Do's and Don'ts

- Do keep the accent (#6fe3d6) for the single most important element in each frame.
- Do use Syne large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't mix surface treatments; everything is gradient.
- Don't confuse it: Not AI aurora: aurora is dark with glowing blurred light; holographic is light, pearly and foil-like.

## References

- Search: "holographic iridescent motion design"
- Search: "holo foil gradient animation"
- Search: "iridescent 3D brand loop"
