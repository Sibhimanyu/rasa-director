---
name: "Neo-noir neon"
description: "Wet night-black, a hot-pink neon-lit plate, cyan rim light, tracked uppercase sans and slow, humming drifts."
colors:
  canvas: "#0a0710"        # page ground
  ink: "#f7eaf3"           # headlines and body text
  accent: "#ff2e97"        # primary accent: the one thing that matters in each frame
  support: "#22d3ee"       # supporting colour, used sparingly
  surface: "#150f1f"       # raised cards and panels
  muted: "#9a86a6"         # muted captions
typography:
  display:
    fontFamily: Archivo
    fontWeight: 800
  body:
    fontFamily: Archivo
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "0 0 24px #ff2e97"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Neo-noir neon

A motion-graphics design system from RasanAI's style library (Cinematic & atmospheric). Also known as Drive style, neon noir, night-city cinema, pink neon titles.

## Overview

Wet night-black, a hot-pink neon-lit plate, cyan rim light, tracked uppercase sans and slow, humming drifts.

It feels moody, seductive, nocturnal. Use it for music videos, nightlife and fashion, game trailers, teasers.

## Visual language

- **Type:** Archivo (display, weight 800, uppercase, tracking 0.02em) with Archivo for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** glow shadows (`0 0 24px #ff2e97`).
- **Texture:** grain. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Floating**. Elements hover and bob gently around a rest point, as if suspended in water or air.
- Enter `sine.out`, exit `sine.in`, move `sine.inOut`; durations 500 / 800 / 1200 / 1800 / 2600 ms; stagger 70 ms; hold at least 1500 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Cinematic, Cyberpunk
- **Typography:** Grotesk
- **Color treatment:** Neon, Dark UI
- **Composition / layout system:** Asymmetric Composition, Negative-Space Composition
- **VFX / compositing treatment:** Glow, Bloom, Chromatic Aberration
- **Shadow / depth cues:** Glow Instead of Shadow
- **Motion language:** Floating
- **Pacing / rhythm:** Slow
- **Transition language:** Light Wipe, Crossfade
- **Emotional / brand tone:** Mysterious, Cinematic

## Do's and Don'ts

- Do keep the accent (#ff2e97) for the single most important element in each frame.
- Do use Archivo large and confident; one idea per frame.
- Do keep every shadow the same glow style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not cyberpunk: no grids, kanji or glitch; contemporary night-city light, sparse and slow.

## References

- Search: "neo noir neon title design"
- Search: "drive movie titles animation"
- Search: "neon noir motion graphics"
