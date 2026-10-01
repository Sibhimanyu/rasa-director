---
name: "Geologic time scale"
description: "The stratigraphic chart: period names on an axis in millions of years, stone-white ground, strata-green progress and plain sans."
colors:
  canvas: "#eef0ea"        # page ground
  ink: "#26241f"           # headlines and body text
  accent: "#5f8a3a"        # primary accent: the one thing that matters in each frame
  support: "#d9542c"       # supporting colour, used sparingly
  surface: "#f8f8f4"       # raised cards and panels
  muted: "#77736a"         # muted captions
typography:
  display:
    fontFamily: Karla
    fontWeight: 800
  body:
    fontFamily: Karla
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Geologic time scale

A motion-graphics design system from RasanAI's style library (Science). Also known as stratigraphic chart, deep time chart, geological timeline, strata column.

## Overview

The stratigraphic chart: period names on an axis in millions of years, stone-white ground, strata-green progress and plain sans.

It feels vast, patient, grounded. Use it for history and heritage films, climate and earth science, company anniversaries, long-view manifestos.

## Visual language

- **Type:** Karla (display, weight 800, tracking -0.03em) with Karla for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 3px solid in ink.
- **Depth:** no shadows.
- **Texture:** noise. **Icons:** line. **Decoration:** rules.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Editorial, Clean Minimalism
- **Format / purpose:** Timeline, Educational Motion
- **Information / data visualization:** Timeline
- **Composition / layout system:** Timeline
- **Color treatment:** Earth Tones, Analogous
- **Typography:** Grotesk
- **Line / stroke language:** Medium
- **Narrative structure:** Timeline
- **Motion language:** Smooth
- **Transition language:** Push, Wipe
- **Emotional / brand tone:** Intellectual, Calm

## Do's and Don'ts

- Do keep the accent (#5f8a3a) for the single most important element in each frame.
- Do use Karla large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a timeline explainer: deep time in millions of years with named periods and stratigraphic colour, no product milestones.

## References

- Search: "geologic time scale animation"
- Search: "deep time timeline motion graphics"
- Search: "stratigraphy explainer video"
