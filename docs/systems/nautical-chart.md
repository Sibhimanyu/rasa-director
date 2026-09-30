---
name: "Nautical chart"
description: "A hydrographic chart: pale-blue water, buff land, a magenta course line and notes, graticule ticks and an upright serif title."
colors:
  canvas: "#d2e5ee"        # page ground
  ink: "#0f2a44"           # headlines and body text
  accent: "#b4177d"        # primary accent: the one thing that matters in each frame
  support: "#e0b43a"       # supporting colour, used sparingly
  surface: "#f2e6c2"       # raised cards and panels
  muted: "#5a7187"         # muted captions
typography:
  display:
    fontFamily: Spectral
    fontWeight: 700
  body:
    fontFamily: Spectral
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Nautical chart

A motion-graphics design system from Rasa Director's style library (Science). Also known as sea chart, hydrographic chart, navigation chart, admiralty chart.

## Overview

A hydrographic chart: pale-blue water, buff land, a magenta course line and notes, graticule ticks and an upright serif title.

It feels steady, adventurous, exact. Use it for maritime and logistics, travel and expedition films, ocean science, supply-route explainers.

## Visual language

- **Type:** Spectral (display, weight 700, uppercase, tracking 0.05em) with Spectral for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 2px solid in ink.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism, Print-Editorial
- **Information / data visualization:** Map
- **Format / purpose:** Map Animation
- **Camera language:** Top-Down
- **Color treatment:** Cool Palette, Limited Palette
- **Line / stroke language:** Thin, Technical
- **Typography:** Editorial Serif
- **Motion function:** Show Location
- **Motion language:** Smooth
- **Transition language:** Line-Draw Transition, Push
- **Emotional / brand tone:** Calm, Technical

## Do's and Don'ts

- Do keep the accent (#b4177d) for the single most important element in each frame.
- Do use Spectral large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a topographic survey: the sea is the subject, pale blue with magenta navigation notes; the land is left blank buff.

## References

- Search: "nautical chart animation"
- Search: "sea chart motion graphics"
- Search: "navigation chart route animation"
