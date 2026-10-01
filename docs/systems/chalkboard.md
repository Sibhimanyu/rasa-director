---
name: "Chalkboard"
description: "Dusty chalk-white lettering and hand-drawn charts on slate green, yellow and pink chalk accents, smudged texture."
colors:
  canvas: "#23352c"        # page ground
  ink: "#f2f0e6"           # headlines and body text
  accent: "#f5d76e"        # primary accent: the one thing that matters in each frame
  support: "#f0a6b8"       # supporting colour, used sparingly
  surface: "#2c4136"       # raised cards and panels
  muted: "#a9b8ad"         # muted captions
typography:
  display:
    fontFamily: Fredericka the Great
    fontWeight: 400
  body:
    fontFamily: Cabin Sketch
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 6px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px dashed {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Chalkboard

A motion-graphics design system from RasanAI's style library (Handmade & printed). Also known as blackboard chalk, classroom chalk, chalk art, chalk menu board.

## Overview

Dusty chalk-white lettering and hand-drawn charts on slate green, yellow and pink chalk accents, smudged texture.

It feels educational, warm, friendly. Use it for education and courses, data lessons, cafe and food menus, back-to-school.

## Visual language

- **Type:** Fredericka the Great (display, weight 400, tracking 0.01em) with Cabin Sketch for body text.
- **Surfaces:** flat fills, no gradients; corners 6px; outlines 3px dashed in ink.
- **Depth:** no shadows.
- **Texture:** noise. **Icons:** doodle. **Decoration:** none.

## Motion

Motion language: **Handmade / Imperfect**. Deliberately imperfect motion with frame-to-frame jitter (line boil), uneven spacing and slightly irregular timing, as if drawn by hand.
- Enter `power2.out`, exit `power2.in`, move `steps(3)`; durations 160 / 280 / 450 / 700 / 1000 ms; stagger 90 ms; hold at least 800 ms.
- Never: fade-up-slide, blur-in, linear-entrance, opacity-only-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Handmade / Craft, Doodle
- **Illustration style:** Hand-Drawn, Sketch
- **Texture:** Chalk, Dust
- **Line / stroke language:** Hand-Drawn, Rough
- **Typography:** Handwritten / Script
- **Information / data visualization:** Bar Chart, Line Graph
- **Motion language:** Handmade / Imperfect
- **Transition language:** Line-Draw Transition, Wipe

## Do's and Don'ts

- Do keep the accent (#f5d76e) for the single most important element in each frame.
- Do use Fredericka the Great large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not whiteboard animation: dark board, dusty chalk texture and pastel chalk colours, not clean marker on white.

## References

- Search: "chalkboard animation"
- Search: "chalk drawing motion graphics"
- Search: "blackboard explainer video"
