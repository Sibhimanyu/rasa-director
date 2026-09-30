---
name: "Hand-drawn wireframe"
description: "Sketchy black-outlined app windows and buttons on graph paper, handwritten labels, grey fills and one blue highlight."
colors:
  canvas: "#f7f7f2"        # page ground
  ink: "#222222"           # headlines and body text
  accent: "#3b7ddd"        # primary accent: the one thing that matters in each frame
  support: "#d9d9d4"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#8a8a8a"         # muted captions
typography:
  display:
    fontFamily: Architects Daughter
    fontWeight: 400
  body:
    fontFamily: Architects Daughter
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 6px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Hand-drawn wireframe

A motion-graphics design system from Rasa Director's style library (Handmade & printed). Also known as Balsamiq style, sketchy UI, napkin wireframe, lo-fi mockup.

## Overview

Sketchy black-outlined app windows and buttons on graph paper, handwritten labels, grey fills and one blue highlight.

It feels exploratory, honest, approachable. Use it for product roadmaps, design process films, early-stage pitches, before-after reveals.

## Visual language

- **Type:** Architects Daughter (display, weight 400, tracking 0em) with Architects Daughter for body text.
- **Surfaces:** flat fills, no gradients; corners 6px; outlines 3px sketch in ink.
- **Depth:** no shadows.
- **Texture:** grid. **Icons:** doodle. **Decoration:** none.

## Motion

Motion language: **Handmade / Imperfect**. Deliberately imperfect motion with frame-to-frame jitter (line boil), uneven spacing and slightly irregular timing, as if drawn by hand.
- Enter `power2.out`, exit `power2.in`, move `steps(3)`; durations 160 / 280 / 450 / 700 / 1000 ms; stagger 90 ms; hold at least 800 ms.
- Never: fade-up-slide, blur-in, linear-entrance, opacity-only-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Sketchbook, Doodle
- **UI treatment:** Hand-Drawn UI, Wireframe UI
- **Illustration style:** Sketch, Outline Illustration
- **Line / stroke language:** Hand-Drawn, Medium
- **Typography:** Handwritten / Script
- **Texture:** Pencil
- **Motion language:** Handmade / Imperfect
- **Transition language:** Line-Draw Transition, UI Morph

## Do's and Don'ts

- Do keep the accent (#3b7ddd) for the single most important element in each frame.
- Do use Architects Daughter large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a clean wireframe UI: lines wobble and labels are handwritten, like a marker sketch of an app.

## References

- Search: "hand drawn wireframe animation"
- Search: "sketchy UI motion graphics"
- Search: "balsamiq style explainer"
