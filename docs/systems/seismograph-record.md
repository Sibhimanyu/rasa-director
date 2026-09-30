---
name: "Seismograph record"
description: "A drum-recorder sheet: black trace on white graph paper, red time marks, one magnitude set huge and a station code in mono."
colors:
  canvas: "#fafaf7"        # page ground
  ink: "#111111"           # headlines and body text
  accent: "#d7261e"        # primary accent: the one thing that matters in each frame
  support: "#9a9a9a"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#6d6d6d"         # muted captions
typography:
  display:
    fontFamily: IBM Plex Sans Condensed
    fontWeight: 700
  body:
    fontFamily: IBM Plex Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Seismograph record

A motion-graphics design system from Rasa Director's style library (Science). Also known as seismogram, helicorder, drum recorder, earthquake trace.

## Overview

A drum-recorder sheet: black trace on white graph paper, red time marks, one magnitude set huge and a station code in mono.

It feels urgent, factual, tense. Use it for disaster and resilience stories, science news, risk and insurance films, impact reports.

## Visual language

- **Type:** IBM Plex Sans Condensed (display, weight 700, tracking -0.02em) with IBM Plex Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 1px solid in ink.
- **Depth:** no shadows.
- **Texture:** grid. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Mechanical**. Motion driven as if by motors, gears and belts: constant velocity segments with abrupt, rigid starts and stops.
- Enter `none`, exit `none`, move `power1.inOut`; durations 150 / 250 / 400 / 600 / 900 ms; stagger 100 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism, Monochrome
- **Information / data visualization:** Line Graph, Statistic Callout
- **Format / purpose:** Data Visualization, Statistics Animation
- **Color treatment:** Black and White, Accent-Color System
- **Line / stroke language:** Hairline, Technical
- **Typography:** Condensed, Monospace
- **Composition / layout system:** Asymmetric Composition, Negative-Space Composition
- **Motion language:** Mechanical
- **Transition language:** Wipe, Line-Draw Transition
- **Emotional / brand tone:** Urgent, Technical

## Do's and Don'ts

- Do keep the accent (#d7261e) for the single most important element in each frame.
- Do use IBM Plex Sans Condensed large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not metric count-up: a paper instrument record, black on grid with red time marks, not a bold marketing number.

## References

- Search: "seismograph animation"
- Search: "earthquake data motion graphics"
- Search: "seismogram style infographic"
