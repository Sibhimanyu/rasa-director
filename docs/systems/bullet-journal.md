---
name: "Bullet journal"
description: "Dot-grid paper with neat handwritten boxes, dashed trackers, pastel highlighter tabs and tiny doodle icons."
colors:
  canvas: "#fcfaf5"        # page ground
  ink: "#2a2c33"           # headlines and body text
  accent: "#ffb3a7"        # primary accent: the one thing that matters in each frame
  support: "#b8e0d2"       # supporting colour, used sparingly
  surface: "#fffefb"       # raised cards and panels
  muted: "#8f8f96"         # muted captions
typography:
  display:
    fontFamily: Patrick Hand
    fontWeight: 400
  body:
    fontFamily: Patrick Hand
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 4px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px dashed {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Bullet journal

A motion-graphics design system from Rasa Director's style library (Handmade & printed). Also known as bujo, dot-grid planner, stationery aesthetic, planner doodles.

## Overview

Dot-grid paper with neat handwritten boxes, dashed trackers, pastel highlighter tabs and tiny doodle icons.

It feels organised, calm, personal. Use it for productivity apps, habit and health trackers, planning features, study content.

## Visual language

- **Type:** Patrick Hand (display, weight 400, tracking 0em) with Patrick Hand for body text.
- **Surfaces:** flat fills, no gradients; corners 4px; outlines 2px dashed in ink.
- **Depth:** no shadows.
- **Texture:** dots. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Handmade / Imperfect**. Deliberately imperfect motion with frame-to-frame jitter (line boil), uneven spacing and slightly irregular timing, as if drawn by hand.
- Enter `power2.out`, exit `power2.in`, move `steps(3)`; durations 160 / 280 / 450 / 700 / 1000 ms; stagger 90 ms; hold at least 800 ms.
- Never: fade-up-slide, blur-in, linear-entrance, opacity-only-entrance.
- Preview entrance: type.

## The terms that define it

- **Visual style / art direction:** Doodle, Warm Minimalism
- **UI treatment:** Hand-Drawn UI, Bento UI
- **Composition / layout system:** Modular Grid
- **Iconography:** Hand-Drawn Icons
- **Line / stroke language:** Thin, Hand-Drawn
- **Color treatment:** Pastel
- **Typography:** Handwritten / Script
- **Motion language:** Handmade / Imperfect
- **Transition language:** Line-Draw Transition, Wipe

## Do's and Don'ts

- Do keep the accent (#ffb3a7) for the single most important element in each frame.
- Do use Patrick Hand large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not sketchbook: tidy dot-grid planning with highlighter colour, not loose pencil sketches.

## References

- Search: "bullet journal animation"
- Search: "dot grid planner motion graphics"
- Search: "stationery aesthetic explainer"
