---
name: "Blueprint schematic"
description: "White hairlines and dimension rings on Prussian-blue grid paper, stencil-mono labels, parts measured and annotated as they draw on."
colors:
  canvas: "#123f7a"        # page ground
  ink: "#f1f6ff"           # headlines and body text
  accent: "#ffffff"        # primary accent: the one thing that matters in each frame
  support: "#9cc3ff"       # supporting colour, used sparingly
  surface: "#1a4d8f"       # raised cards and panels
  muted: "#9db4d6"         # muted captions
typography:
  display:
    fontFamily: Space Mono
    fontWeight: 700
  body:
    fontFamily: Space Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Blueprint schematic

A motion-graphics design system from Rasa Director's style library (Data & explainers). Also known as blueprint explainer, engineering drawing, cyanotype technical.

## Overview

White hairlines and dimension rings on Prussian-blue grid paper, stencil-mono labels, parts measured and annotated as they draw on.

It feels engineered, meticulous, classic. Use it for hardware and engineering, architecture, how-it's-made explainers.

## Visual language

- **Type:** Space Mono (display, weight 700, uppercase, tracking 0.04em) with Space Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 1px solid in #9cc3ff.
- **Depth:** no shadows.
- **Texture:** grid. **Icons:** line. **Decoration:** crosshair.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism
- **Illustration style:** Blueprint, Schematic
- **UI treatment:** Blueprint / Technical UI
- **Line / stroke language:** Hairline, Technical
- **Color treatment:** Monochrome
- **Composition / layout system:** Negative-Space Composition
- **Motion language:** Precise
- **Transition language:** Line-Draw Transition, Wipe

## Do's and Don'ts

- Do keep the accent (#ffffff) for the single most important element in each frame.
- Do use Space Mono large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.

## References

- Search: "blueprint animation explainer"
- Search: "engineering drawing motion graphics"
- Search: "technical blueprint reveal"
