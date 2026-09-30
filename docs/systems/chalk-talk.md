---
name: "Chalk talk"
description: "Dusty chalk lines and hand-lettering on green-black slate, sketchy boxes and doodled arrows, smudged grain everywhere."
colors:
  canvas: "#1f332a"        # page ground
  ink: "#f0eee4"           # headlines and body text
  accent: "#f6d365"        # primary accent: the one thing that matters in each frame
  support: "#8fd3f4"       # supporting colour, used sparingly
  surface: "#2a4236"       # raised cards and panels
  muted: "#a9b5a8"         # muted captions
typography:
  display:
    fontFamily: Cabin Sketch
    fontWeight: 700
  body:
    fontFamily: Patrick Hand
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 10px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Chalk talk

A motion-graphics design system from Rasa Director's style library (Data & explainers). Also known as chalkboard explainer, blackboard animation, lecture chalk.

## Overview

Dusty chalk lines and hand-lettering on green-black slate, sketchy boxes and doodled arrows, smudged grain everywhere.

It feels warm, teacherly, nostalgic. Use it for education, lectures and courses, math and science explainers.

## Visual language

- **Type:** Cabin Sketch (display, weight 700, tracking 0em) with Patrick Hand for body text.
- **Surfaces:** flat fills, no gradients; corners 10px; outlines 3px sketch in ink.
- **Depth:** no shadows.
- **Texture:** noise. **Icons:** doodle. **Decoration:** squiggles.

## Motion

Motion language: **Handmade / Imperfect**. Deliberately imperfect motion with frame-to-frame jitter (line boil), uneven spacing and slightly irregular timing, as if drawn by hand.
- Enter `power2.out`, exit `power2.in`, move `steps(3)`; durations 160 / 280 / 450 / 700 / 1000 ms; stagger 90 ms; hold at least 800 ms.
- Never: fade-up-slide, blur-in, linear-entrance, opacity-only-entrance.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Sketchbook, Handmade / Craft
- **Illustration style:** Sketch, Doodle
- **Texture:** Chalk
- **Typography:** Handwritten / Script
- **Line / stroke language:** Rough
- **Format / purpose:** Educational Motion
- **Motion language:** Handmade / Imperfect
- **Transition language:** Line-Draw Transition, Dissolve

## Do's and Don'ts

- Do keep the accent (#f6d365) for the single most important element in each frame.
- Do use Cabin Sketch large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.

## References

- Search: "chalkboard animation explainer"
- Search: "chalk talk motion graphics"
- Search: "blackboard drawing animation"
