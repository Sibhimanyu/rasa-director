---
name: "Space-age retro-futurism"
description: "Rounded cream cards orbited by elliptical atom rings, boomerang-orange and teal, bouncy rounded display type."
colors:
  canvas: "#f3e7cf"        # page ground
  ink: "#1c2b3a"           # headlines and body text
  accent: "#e8553b"        # primary accent: the one thing that matters in each frame
  support: "#2a9d8f"       # supporting colour, used sparingly
  surface: "#fff7e8"       # raised cards and panels
  muted: "#7c7462"         # muted captions
typography:
  display:
    fontFamily: Righteous
    fontWeight: 400
  body:
    fontFamily: Quicksand
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 40px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Space-age retro-futurism

A motion-graphics design system from Rasa Director's style library (Retro & eras). Also known as atompunk, Googie, Jetsons style, 50s tomorrowland.

## Overview

Rounded cream cards orbited by elliptical atom rings, boomerang-orange and teal, bouncy rounded display type.

It feels optimistic, whimsical, retro. Use it for future-of-X explainers, space and science brands, toy and family products.

## Visual language

- **Type:** Righteous (display, weight 400, tracking 0em) with Quicksand for body text.
- **Surfaces:** flat fills, no gradients; corners 40px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** grain. **Icons:** filled. **Decoration:** orbits.

## Motion

Motion language: **Floating**. Elements hover and bob gently around a rest point, as if suspended in water or air.
- Enter `sine.out`, exit `sine.in`, move `sine.inOut`; durations 500 / 800 / 1200 / 1800 / 2600 ms; stagger 70 ms; hold at least 1500 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Retro-Futurism, Mid-Century Modern
- **Era / design-movement influence:** Mid-Century Modern
- **Composition / layout system:** Orbit Composition, Floating Cards
- **Shape language:** Rounded, Circular
- **Color treatment:** Warm Palette, Complementary
- **Typography:** Display Typography, Rounded Sans
- **Motion language:** Floating
- **Transition language:** Scale Transition, Morph Transition

## Do's and Don'ts

- Do keep the accent (#e8553b) for the single most important element in each frame.
- Do use Righteous large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not synthwave: this is the 1950s imagining tomorrow, cream daylight and atoms, not 80s neon night.

## References

- Search: "atomic age retro futurism animation"
- Search: "googie style motion graphics"
- Search: "jetsons style explainer"
