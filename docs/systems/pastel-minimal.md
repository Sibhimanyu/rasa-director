---
name: "Pastel minimal"
description: "One centred line of type on a milk-white field, a two-tone blush and powder-blue icon, tiny sparkles, lots of air."
colors:
  canvas: "#fcf8f3"        # page ground
  ink: "#3a3348"           # headlines and body text
  accent: "#f5b3c4"        # primary accent: the one thing that matters in each frame
  support: "#aed4f0"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#9d95a8"         # muted captions
typography:
  display:
    fontFamily: Quicksand
    fontWeight: 700
  body:
    fontFamily: Quicksand
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 28px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Pastel minimal

A motion-graphics design system from RasanAI's style library (Soft & tactile). Also known as soft pastel minimalism, sorbet minimal, baby pastel.

## Overview

One centred line of type on a milk-white field, a two-tone blush and powder-blue icon, tiny sparkles, lots of air.

It feels gentle, light, optimistic. Use it for beauty and self-care brands, announcements, app store promos, quote cards.

## Visual language

- **Type:** Quicksand (display, weight 700, tracking -0.02em) with Quicksand for body text.
- **Surfaces:** flat fills, no gradients; corners 28px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** duotone. **Decoration:** stars.

## Motion

Motion language: **Floating**. Elements hover and bob gently around a rest point, as if suspended in water or air.
- Enter `sine.out`, exit `sine.in`, move `sine.inOut`; durations 500 / 800 / 1200 / 1800 / 2600 ms; stagger 70 ms; hold at least 1500 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Clean Minimalism
- **Color treatment:** Pastel, Light UI
- **Composition / layout system:** Centered Hero Composition, Negative-Space Composition
- **Typography:** Geometric Sans
- **Iconography:** Duotone Icons
- **Emotional / brand tone:** Soft, Calm, Optimistic
- **Motion language:** Floating
- **Transition language:** Fade, Blur Transition

## Do's and Don'ts

- Do keep the accent (#f5b3c4) for the single most important element in each frame.
- Do use Quicksand large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not kawaii: no faces or mascots; the softness is colour and space, not character.

## References

- Search: "pastel minimal motion graphics"
- Search: "soft pastel typography animation"
- Search: "sorbet palette brand video"
