---
name: "Web3 crypto dark"
description: "A glowing phone wallet on ink-black, acid-lime accents on gradient cards, confident geometric type and quick springy counters."
colors:
  canvas: "#0b0b14"        # page ground
  ink: "#f4f4fa"           # headlines and body text
  accent: "#c6ff00"        # primary accent: the one thing that matters in each frame
  support: "#7b61ff"       # supporting colour, used sparingly
  surface: "#1a1a2e"       # raised cards and panels
  muted: "#8888a8"         # muted captions
typography:
  display:
    fontFamily: Unbounded
    fontWeight: 700
  body:
    fontFamily: Outfit
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 22px
shadows:
  card: "0 0 24px #c6ff00"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Web3 crypto dark

A motion-graphics design system from RasanAI's style library (Futuristic & tech). Also known as crypto UI, DeFi aesthetic, web3 neon, wallet app style.

## Overview

A glowing phone wallet on ink-black, acid-lime accents on gradient cards, confident geometric type and quick springy counters.

It feels bold, fast, speculative. Use it for crypto and fintech apps, wallet launches, trading features, app-store promos.

## Visual language

- **Type:** Unbounded (display, weight 700, tracking -0.03em) with Outfit for body text.
- **Surfaces:** soft gradient washes from the surface toward the accent; corners 22px; outlines none.
- **Depth:** glow shadows (`0 0 24px #c6ff00`).
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Springy**. Motion that behaves like a damped physical spring: fast attack, one visible overshoot, then a quick settle.
- Enter `back.out(1.7)`, exit `power3.in`, move `elastic.out(1,0.75)`; durations 180 / 300 / 480 / 720 / 1100 ms; stagger 40 ms; hold at least 650 ms.
- Never: fade-up-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: spring.

## The terms that define it

- **Visual style / art direction:** Futuristic Tech, Gradient-Heavy
- **UI treatment:** Device-Bound UI, Stylized UI
- **Photo / video integration:** Device Mockup
- **Color treatment:** Dark UI, Neon
- **Typography:** Geometric Sans
- **VFX / compositing treatment:** Glow
- **Information / data visualization:** Number Counter, Line Graph
- **Motion language:** Springy
- **Transition language:** Scale Transition, UI Morph

## Do's and Don'ts

- Do keep the accent (#c6ff00) for the single most important element in each frame.
- Do use Unbounded large and confident; one idea per frame.
- Do keep every shadow the same glow style.
- Don't mix surface treatments; everything is gradient.
- Don't confuse it: Not cyberpunk: cleaner, app-first and optimistic; neon is an accent on product UI, not an atmosphere.

## References

- Search: "crypto app promo animation"
- Search: "web3 wallet UI motion"
- Search: "dark fintech app video neon"
