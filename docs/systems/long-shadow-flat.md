---
name: "Long-shadow flat"
description: "Flat saturated tiles and white icons, each casting a long hard 45-degree shadow in a darker tone of the ground."
colors:
  canvas: "#0e7c66"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#f39c12"        # primary accent: the one thing that matters in each frame
  support: "#e74c3c"       # supporting colour, used sparingly
  surface: "#0a5e4d"       # raised cards and panels
  muted: "#bff0e4"         # muted captions
typography:
  display:
    fontFamily: Montserrat
    fontWeight: 800
  body:
    fontFamily: Montserrat
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 18px
shadows:
  card: "18px 18px 0 #ffffff"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Long-shadow flat

A motion-graphics design system from Rasa Director's style library (Bold & graphic). Also known as long shadow design, flat long shadow, 2013 flat design, diagonal shadow icons.

## Overview

Flat saturated tiles and white icons, each casting a long hard 45-degree shadow in a darker tone of the ground.

It feels bright, clean, cheerful, graphic. Use it for app explainers, icon-led feature lists, education, infographic intros.

## Visual language

- **Type:** Montserrat (display, weight 800, tracking -0.02em) with Montserrat for body text.
- **Surfaces:** flat fills, no gradients; corners 18px; outlines none.
- **Depth:** long shadows (`18px 18px 0 #ffffff`).
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: bounce.

## The terms that define it

- **Visual style / art direction:** Corporate Flat, Abstract Geometric
- **Era / design-movement influence:** Flat Design
- **Shadow / depth cues:** Long Shadow
- **Iconography:** Filled Icons
- **Illustration style:** Flat Vector
- **Color treatment:** High Saturation, Analogous
- **Line / stroke language:** No Outlines
- **Motion language:** Smooth
- **Transition language:** Slide, Scale Transition

## Do's and Don'ts

- Do keep the accent (#f39c12) for the single most important element in each frame.
- Do use Montserrat large and confident; one idea per frame.
- Do keep every shadow the same long style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not material design: the shadow is a flat diagonal band, not soft elevation.

## References

- Search: "long shadow flat animation"
- Search: "long shadow icons motion"
- Search: "flat design long shadow explainer"
