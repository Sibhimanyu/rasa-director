---
name: "Floating-card UI"
description: "The interface broken into independent white cards hovering over a pale tinted field, deep soft drop shadows, cards drifting at different depths."
colors:
  canvas: "#eef2ff"        # page ground
  ink: "#1e1b4b"           # headlines and body text
  accent: "#6366f1"        # primary accent: the one thing that matters in each frame
  support: "#f472b6"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#6b7280"         # muted captions
typography:
  display:
    fontFamily: Manrope
    fontWeight: 800
  body:
    fontFamily: Manrope
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 22px
shadows:
  card: "0 40px 70px -16px rgba(0,0,0,0.3)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Floating-card UI

A motion-graphics design system from RasanAI's style library (Product & UI). Also known as deviceless UI, UI fragments, card stack.

## Overview

The interface broken into independent white cards hovering over a pale tinted field, deep soft drop shadows, cards drifting at different depths.

It feels light, modern, airy. Use it for feature reveals, onboarding, app landing films.

## Visual language

- **Type:** Manrope (display, weight 800, tracking -0.035em) with Manrope for body text.
- **Surfaces:** flat fills, no gradients; corners 22px; outlines none.
- **Depth:** float shadows (`0 40px 70px -16px rgba(0,0,0,0.3)`).
- **Texture:** none; clean fills. **Icons:** duotone. **Decoration:** none.

## Motion

Motion language: **Floating**. Elements hover and bob gently around a rest point, as if suspended in water or air.
- Enter `sine.out`, exit `sine.in`, move `sine.inOut`; durations 500 / 800 / 1200 / 1800 / 2600 ms; stagger 70 ms; hold at least 1500 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Clean Minimalism
- **UI treatment:** Floating-Card UI, Deviceless UI
- **Composition / layout system:** Floating Cards, Layered Depth
- **Depth / dimensionality:** Parallax
- **Shadow / depth cues:** Floating Shadows
- **Camera language:** Parallax Camera
- **Motion language:** Floating
- **Transition language:** Parallax Transition, Slide

## Do's and Don'ts

- Do keep the accent (#6366f1) for the single most important element in each frame.
- Do use Manrope large and confident; one idea per frame.
- Do keep every shadow the same float style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not bento: cards float freely at depth with parallax, not locked into a grid.

## References

- Search: "floating ui cards animation"
- Search: "deviceless ui motion"
- Search: "ui fragments parallax"
