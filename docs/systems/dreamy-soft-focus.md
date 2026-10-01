---
name: "Dreamy soft focus"
description: "A hazy lilac-to-peach field with grain, a glowing pearl orb, a light italic serif and slow blurred dissolves, like a half-remembered morning."
colors:
  canvas: "#f1e6f1"        # page ground
  ink: "#3a2c46"           # headlines and body text
  accent: "#cbb4e6"        # primary accent: the one thing that matters in each frame
  support: "#f5c6b4"       # supporting colour, used sparingly
  surface: "#fbf5fa"       # raised cards and panels
  muted: "#8f7f9c"         # muted captions
typography:
  display:
    fontFamily: Instrument Serif
    fontWeight: 400
  body:
    fontFamily: Figtree
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 40px
shadows:
  card: "0 0 24px #cbb4e6"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Dreamy soft focus

A motion-graphics design system from RasanAI's style library (Soft & tactile). Also known as ethereal pastel, soft haze, dreamcore light, hazy glow.

## Overview

A hazy lilac-to-peach field with grain, a glowing pearl orb, a light italic serif and slow blurred dissolves, like a half-remembered morning.

It feels ethereal, tender, nostalgic. Use it for music and album teasers, beauty and fragrance-lite brands, poetry and quote films, sleep and relaxation apps.

## Visual language

- **Type:** Instrument Serif (display, weight 400, tracking -0.01em) with Figtree for body text.
- **Surfaces:** flat fills, no gradients; corners 40px; outlines none.
- **Depth:** glow shadows (`0 0 24px #cbb4e6`).
- **Texture:** grain. **Icons:** emoji3d. **Decoration:** none.

## Motion

Motion language: **Weightless**. Zero-gravity motion: objects drift at constant slow velocity and keep rotating, with no floor, no settling and no rest point.
- Enter `power1.out`, exit `power1.in`, move `none`; durations 600 / 1000 / 1600 / 2400 / 3600 ms; stagger 120 ms; hold at least 1600 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Gradient-Heavy, Cinematic
- **Color treatment:** Pastel, Low Contrast
- **VFX / compositing treatment:** Bloom, Grain
- **Typography:** Editorial Serif
- **Composition / layout system:** Centered Hero Composition, Negative-Space Composition
- **Emotional / brand tone:** Soft, Nostalgic, Calm
- **Motion language:** Weightless
- **Transition language:** Blur Transition, Dissolve

## Do's and Don'ts

- Do keep the accent (#cbb4e6) for the single most important element in each frame.
- Do use Instrument Serif large and confident; one idea per frame.
- Do keep every shadow the same glow style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not pastel minimal: the air is hazy, grainy and glowing, with a serif voice and blur transitions, not crisp and white.

## References

- Search: "dreamy soft focus motion graphics"
- Search: "ethereal pastel typography video"
- Search: "hazy glow title animation"
