---
name: "Symmetrical pastel"
description: "Dead-centred symmetrical framing, candy pink and mustard pastels, uppercase geometric sans, flat whip pans and a storybook stillness."
colors:
  canvas: "#f2c4c0"        # page ground
  ink: "#3b2320"           # headlines and body text
  accent: "#e1a93b"        # primary accent: the one thing that matters in each frame
  support: "#9c4f5a"       # supporting colour, used sparingly
  surface: "#f8dcd6"       # raised cards and panels
  muted: "#8f5d58"         # muted captions
typography:
  display:
    fontFamily: Jost
    fontWeight: 600
  body:
    fontFamily: Jost
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Symmetrical pastel

A motion-graphics design system from RasanAI's style library (Cinematic & atmospheric). Also known as Wes Anderson style, storybook symmetry, pastel cinema, dollhouse framing.

## Overview

Dead-centred symmetrical framing, candy pink and mustard pastels, uppercase geometric sans, flat whip pans and a storybook stillness.

It feels whimsical, precise, nostalgic. Use it for hospitality and travel, brand films, food and retail, chapter cards.

## Visual language

- **Type:** Jost (display, weight 600, uppercase, tracking 0.12em) with Jost for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Cinematic, Mid-Century Modern
- **Composition / layout system:** Symmetrical Composition, Centered Hero Composition
- **Typography:** Geometric Sans
- **Color treatment:** Pastel, Warm Palette
- **Texture:** Film Grain
- **Camera language:** Whip Pan, Locked Camera
- **Motion language:** Precise
- **Transition language:** Whip Transition, Hard Cut
- **Emotional / brand tone:** Quirky, Nostalgic

## Do's and Don'ts

- Do keep the accent (#e1a93b) for the single most important element in each frame.
- Do use Jost large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not kawaii pastel: adult, deadpan and rigorously symmetrical, with film grain rather than cute characters.

## References

- Search: "wes anderson style motion graphics"
- Search: "symmetrical pastel title cards"
- Search: "wes anderson typography animation"
