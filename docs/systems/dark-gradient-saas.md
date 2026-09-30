---
name: "Dark gradient SaaS"
description: "Near-black canvas, app windows lit by a violet gradient glow, hairline borders, tight grey-white type, fine noise."
colors:
  canvas: "#08090a"        # page ground
  ink: "#f7f8f8"           # headlines and body text
  accent: "#5e6ad2"        # primary accent: the one thing that matters in each frame
  support: "#8b5cf6"       # supporting colour, used sparingly
  surface: "#15161a"       # raised cards and panels
  muted: "#8a8f98"         # muted captions
typography:
  display:
    fontFamily: Inter
    fontWeight: 600
  body:
    fontFamily: Inter
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 12px
shadows:
  card: "0 0 24px #5e6ad2"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Dark gradient SaaS

A motion-graphics design system from Rasa Director's style library (Product & UI). Also known as Linear style, Linear-core, dark mode SaaS hero.

## Overview

Near-black canvas, app windows lit by a violet gradient glow, hairline borders, tight grey-white type, fine noise.

It feels focused, engineered, premium. Use it for developer tools, B2B SaaS launches, changelog films.

## Visual language

- **Type:** Inter (display, weight 600, tracking -0.035em) with Inter for body text.
- **Surfaces:** flat fills, no gradients; corners 12px; outlines 1px solid in #2a2c33.
- **Depth:** glow shadows (`0 0 24px #5e6ad2`).
- **Texture:** noise. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism, Gradient-Heavy
- **UI treatment:** Stylized UI, Windowed UI
- **Product demonstration language:** Feature Isolation, Zoomed Detail
- **Color treatment:** Dark UI, Gradient
- **Shadow / depth cues:** Glow Instead of Shadow
- **VFX / compositing treatment:** Glow, Grain
- **Typography:** Neo-Grotesk
- **Motion language:** Precise
- **Transition language:** Mask Reveal, Blur Transition

## Do's and Don'ts

- Do keep the accent (#5e6ad2) for the single most important element in each frame.
- Do use Inter large and confident; one idea per frame.
- Do keep every shadow the same glow style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not keynote hero: the light comes from gradient glows and hairlines inside the UI, not a spotlit object.

## References

- Search: "linear app style animation"
- Search: "dark gradient saas hero motion"
- Search: "linear launch video"
