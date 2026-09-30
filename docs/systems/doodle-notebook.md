---
name: "Doodle"
description: "Wobbly hand-drawn outlines, offset doodle icons and squiggles on white cards, loose marker handwriting."
colors:
  canvas: "#fbfaf6"        # page ground
  ink: "#1b1b1f"           # headlines and body text
  accent: "#ff6b4a"        # primary accent: the one thing that matters in each frame
  support: "#4a9dff"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#8a8a90"         # muted captions
typography:
  display:
    fontFamily: Gloria Hallelujah
    fontWeight: 400
  body:
    fontFamily: Patrick Hand
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 22px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "4px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Doodle

A motion-graphics design system from Rasa Director's style library (Handmade & printed). Also known as doodle style, hand-drawn doodles, notebook doodles, scribble illustration.

## Overview

Wobbly hand-drawn outlines, offset doodle icons and squiggles on white cards, loose marker handwriting.

It feels friendly, casual, human. Use it for app explainers, onboarding, creator and education brands, social tips.

## Visual language

- **Type:** Gloria Hallelujah (display, weight 400, tracking 0em) with Patrick Hand for body text.
- **Surfaces:** flat fills, no gradients; corners 22px; outlines 4px sketch in ink.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** doodle. **Decoration:** squiggles.

## Motion

Motion language: **Handmade / Imperfect**. Deliberately imperfect motion with frame-to-frame jitter (line boil), uneven spacing and slightly irregular timing, as if drawn by hand.
- Enter `power2.out`, exit `power2.in`, move `steps(3)`; durations 160 / 280 / 450 / 700 / 1000 ms; stagger 90 ms; hold at least 800 ms.
- Never: fade-up-slide, blur-in, linear-entrance, opacity-only-entrance.
- Preview entrance: spring.

## The terms that define it

- **Visual style / art direction:** Doodle, Handmade / Craft
- **Illustration style:** Doodle, Hand-Drawn
- **Iconography:** Hand-Drawn Icons
- **Line / stroke language:** Hand-Drawn, Rough
- **Typography:** Handwritten / Script
- **Character / mascot treatment:** Doodle Mascot
- **Motion language:** Handmade / Imperfect
- **Transition language:** Line-Draw Transition, Hard Cut

## Do's and Don'ts

- Do keep the accent (#ff6b4a) for the single most important element in each frame.
- Do use Gloria Hallelujah large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not neo-brutalism: no hard block shadows or heavy frames; the lines themselves wobble and wiggle.

## References

- Search: "doodle animation explainer"
- Search: "hand drawn doodle motion graphics"
- Search: "doodle UI animation"
