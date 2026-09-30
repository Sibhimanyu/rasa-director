---
name: "Diazo whiteprint"
description: "Blue-violet architect's linework on faintly tinted white diazo paper: site plan, dashed boundaries, lettered labels and a north arrow."
colors:
  canvas: "#eceee7"        # page ground
  ink: "#2c3a8a"           # headlines and body text
  accent: "#5a3f9e"        # primary accent: the one thing that matters in each frame
  support: "#a3acd8"       # supporting colour, used sparingly
  surface: "#f5f6f0"       # raised cards and panels
  muted: "#6a72a6"         # muted captions
typography:
  display:
    fontFamily: Architects Daughter
    fontWeight: 400
  body:
    fontFamily: B612 Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px dashed {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Diazo whiteprint

A motion-graphics design system from Rasa Director's style library (Print). Also known as whiteprint, diazo print, bluelines, ammonia print, architect's print.

## Overview

Blue-violet architect's linework on faintly tinted white diazo paper: site plan, dashed boundaries, lettered labels and a north arrow.

It feels architectural, drafted, calm, precise. Use it for architecture and real estate, urban planning and civic projects, construction and property tech, place-based stories.

## Visual language

- **Type:** Architects Daughter (display, weight 400, uppercase, tracking 0.03em) with B612 Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 1px dashed in ink.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** line. **Decoration:** contours.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism
- **Illustration style:** Technical Diagram, Blueprint
- **Information / data visualization:** Map
- **Line / stroke language:** Technical, Animated Draw-On
- **Typography:** Handwritten / Script, Monospace
- **Color treatment:** Monochrome, Cool Palette
- **Texture:** Paper Grain
- **Motion language:** Precise
- **Transition language:** Line-Draw Transition, Wipe
- **Emotional / brand tone:** Technical, Calm

## Do's and Don'ts

- Do keep the accent (#5a3f9e) for the single most important element in each frame.
- Do use Architects Daughter large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a blueprint: the ground is white and the lines blue-violet, the reverse of white-on-Prussian-blue engineering drawings.

## References

- Search: "whiteprint site plan animation"
- Search: "diazo architectural drawing motion"
- Search: "architect plan line animation"
