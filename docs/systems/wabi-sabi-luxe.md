---
name: "Wabi-sabi luxe"
description: "Plaster-coloured tiles on aged limewash, sumi-black Mincho type, one umber accent, raw grain and long, patient fades."
colors:
  canvas: "#e2dbcf"        # page ground
  ink: "#1d1a17"           # headlines and body text
  accent: "#6d5843"        # primary accent: the one thing that matters in each frame
  support: "#a99b86"       # supporting colour, used sparingly
  surface: "#ebe5da"       # raised cards and panels
  muted: "#857a6c"         # muted captions
typography:
  display:
    fontFamily: Shippori Mincho
    fontWeight: 500
  body:
    fontFamily: Zen Kaku Gothic New
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 4px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Wabi-sabi luxe

A motion-graphics design system from Rasa Director's style library (Luxury & restrained). Also known as Japandi luxury, Kinfolk minimal, imperfect luxury, plaster and ink.

## Overview

Plaster-coloured tiles on aged limewash, sumi-black Mincho type, one umber accent, raw grain and long, patient fades.

It feels contemplative, refined, humble. Use it for ryokan and retreat hotels, tea, sake and ceramics, slow fashion, architecture and craft studios.

## Visual language

- **Type:** Shippori Mincho (display, weight 500, tracking 0.02em) with Zen Kaku Gothic New for body text.
- **Surfaces:** flat fills, no gradients; corners 4px; outlines none.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Luxurious / Slow**. Very slow, circular deceleration, long holds and stillness, where restraint itself is the signal of value.
- Enter `circ.out`, exit `circ.in`, move `power1.inOut`; durations 600 / 900 / 1400 / 2000 / 2800 ms; stagger 200 ms; hold at least 1800 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, linear-entrance, blur-in.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Luxury, Warm Minimalism
- **Texture:** Film Grain, Paper Grain
- **Material / surface language:** Ceramic, Paper
- **Color treatment:** Earth Tones, Muted
- **Composition / layout system:** Asymmetric Composition, Negative-Space Composition
- **Typography:** Editorial Serif
- **Emotional / brand tone:** Calm, Premium
- **Motion language:** Luxurious / Slow
- **Transition language:** Dissolve, Fade

## Do's and Don'ts

- Do keep the accent (#6d5843) for the single most important element in each frame.
- Do use Shippori Mincho large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not quiet luxury: the restraint is Japanese and material, rough plaster and ink with asymmetry, not tonal beige status.

## References

- Search: "wabi sabi motion graphics"
- Search: "japandi luxury brand film"
- Search: "minimal japanese typography animation"
