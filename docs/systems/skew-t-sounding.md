---
name: "Skew-T sounding"
description: "A meteorologist's sounding chart: fine grid on white, a red temperature trace and green dashed dewpoint, pressure in hPa, plain condensed labels."
colors:
  canvas: "#fcfcfa"        # page ground
  ink: "#1d232a"           # headlines and body text
  accent: "#d62728"        # primary accent: the one thing that matters in each frame
  support: "#2a9d3a"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#6b7580"         # muted captions
typography:
  display:
    fontFamily: Encode Sans Condensed
    fontWeight: 700
  body:
    fontFamily: Encode Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Skew-T sounding

A motion-graphics design system from Rasa Director's style library (Science). Also known as radiosonde plot, skew-T log-P, atmospheric sounding, weather balloon chart.

## Overview

A meteorologist's sounding chart: fine grid on white, a red temperature trace and green dashed dewpoint, pressure in hPa, plain condensed labels.

It feels analytical, trustworthy, airy. Use it for weather and climate, energy and forecasting, aviation, risk and data explainers.

## Visual language

- **Type:** Encode Sans Condensed (display, weight 700, tracking -0.02em) with Encode Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 1px solid in #9aa5b1.
- **Depth:** no shadows.
- **Texture:** grid. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism, Clean Minimalism
- **Information / data visualization:** Line Graph
- **Format / purpose:** Data Visualization, Technical Explainer
- **Color treatment:** Complementary, Light UI
- **Line / stroke language:** Thin, Technical
- **Typography:** Condensed
- **Texture:** Clean / No Texture
- **Motion language:** Precise
- **Transition language:** Line-Draw Transition, Wipe
- **Emotional / brand tone:** Technical, Trustworthy

## Do's and Don'ts

- Do keep the accent (#d62728) for the single most important element in each frame.
- Do use Encode Sans Condensed large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not data journalism: an instrument chart from meteorology, grid-led with red and green traces, no newsroom serif or furniture.

## References

- Search: "skew-T chart design"
- Search: "weather balloon data visualization"
- Search: "meteorology chart motion graphics"
