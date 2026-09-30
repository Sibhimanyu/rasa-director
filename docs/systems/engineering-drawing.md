---
name: "Engineering drawing"
description: "A drafting sheet: black linework on white film, a round part in front view with centre lines, dimension callouts, border frame and red markup."
colors:
  canvas: "#f6f6f2"        # page ground
  ink: "#141414"           # headlines and body text
  accent: "#1c1c1c"        # primary accent: the one thing that matters in each frame
  support: "#d7262e"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#707070"         # muted captions
typography:
  display:
    fontFamily: Sofia Sans Condensed
    fontWeight: 600
  body:
    fontFamily: Sofia Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Engineering drawing

A motion-graphics design system from Rasa Director's style library (Science). Also known as orthographic drawing, technical drawing, CAD drawing sheet, drafting sheet, ISO drawing.

## Overview

A drafting sheet: black linework on white film, a round part in front view with centre lines, dimension callouts, border frame and red markup.

It feels precise, engineered, calm. Use it for hardware and manufacturing, product engineering films, industrial design, spec reveals.

## Visual language

- **Type:** Sofia Sans Condensed (display, weight 600, uppercase, tracking 0.03em) with Sofia Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 1px solid in ink.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** crosshair.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism, Monochrome
- **Illustration style:** Technical Diagram, Schematic
- **Line / stroke language:** Hairline, Technical
- **Color treatment:** Black and White, Accent-Color System
- **Composition / layout system:** Negative-Space Composition, Asymmetric Composition
- **Camera language:** Orthographic
- **Typography:** Condensed, Monospace
- **Motion language:** Precise
- **Transition language:** Line-Draw Transition, Wipe
- **Emotional / brand tone:** Technical

## Do's and Don'ts

- Do keep the accent (#1c1c1c) for the single most important element in each frame.
- Do use Sofia Sans Condensed large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not blueprint: black line on white drafting film, not white on blue; dimensioned and framed like a real CAD sheet.

## References

- Search: "engineering drawing animation"
- Search: "orthographic technical drawing motion graphics"
- Search: "CAD drawing reveal"
