---
name: "Flat infographic"
description: "Bright flat colour tiles, bold filled pictograms, big numbers and simple bars; no gradients, no shadows, pure shape."
colors:
  canvas: "#fff8ec"        # page ground
  ink: "#1d2a3a"           # headlines and body text
  accent: "#ef476f"        # primary accent: the one thing that matters in each frame
  support: "#06d6a0"       # supporting colour, used sparingly
  surface: "#ffd166"       # raised cards and panels
  muted: "#5c6b7a"         # muted captions
typography:
  display:
    fontFamily: Poppins
    fontWeight: 800
  body:
    fontFamily: Poppins
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 12px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Flat infographic

A motion-graphics design system from Rasa Director's style library (Data & explainers). Also known as flat vector infographic, icon explainer, 2D infographic.

## Overview

Bright flat colour tiles, bold filled pictograms, big numbers and simple bars; no gradients, no shadows, pure shape.

It feels clear, friendly, upbeat. Use it for social explainers, report highlights, onboarding facts.

## Visual language

- **Type:** Poppins (display, weight 800, tracking -0.02em) with Poppins for body text.
- **Surfaces:** flat fills, no gradients; corners 12px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Playful**. Light, cheeky motion with small overshoots, tilts and secondary wiggles, playful in intent rather than in strict physics.
- Enter `back.out(1.7)`, exit `back.in(1.7)`, move `sine.inOut`; durations 160 / 280 / 450 / 700 / 1000 ms; stagger 40 ms; hold at least 600 ms.
- Never: fade-up-slide, linear-entrance, blur-in.
- Preview entrance: pop.

## The terms that define it

- **Visual style / art direction:** Corporate Flat
- **Illustration style:** Flat Vector, Pictogram
- **Iconography:** Filled Icons
- **Information / data visualization:** Statistic Callout, Bar Chart, Pie / Donut Chart
- **Depth / dimensionality:** Pure Flat 2D
- **Color treatment:** Limited Palette
- **Format / purpose:** Animated Infographic
- **Motion language:** Playful
- **Transition language:** Scale Transition, Shape Match

## Do's and Don'ts

- Do keep the accent (#ef476f) for the single most important element in each frame.
- Do use Poppins large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not data journalism: promotional and icon-led, not sourced charts with editorial type.

## References

- Search: "flat infographic animation"
- Search: "2d vector infographic motion"
- Search: "animated statistics icons"
