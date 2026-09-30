---
name: "Architectural floor plan"
description: "A clean architect's plan: solid poché walls, door swings, glazing, a stair, rooms named in small caps, one room picked out in vermilion with the route to it."
colors:
  canvas: "#f4f2ec"        # page ground
  ink: "#1b1b1b"           # headlines and body text
  accent: "#d9502b"        # primary accent: the one thing that matters in each frame
  support: "#9fb4c7"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#77746c"         # muted captions
typography:
  display:
    fontFamily: Archivo Narrow
    fontWeight: 700
  body:
    fontFamily: Archivo
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Architectural floor plan

A motion-graphics design system from Rasa Director's style library (Place & wayfinding). Also known as floor plan, architectural plan, plan drawing, you-are-here plan, space plan.

## Overview

A clean architect's plan: solid poché walls, door swings, glazing, a stair, rooms named in small caps, one room picked out in vermilion with the route to it.

It feels precise, calm, spatial. Use it for architecture and interiors, property and venue films, office and campus moves, wayfinding explainers.

## Visual language

- **Type:** Archivo Narrow (display, weight 700, uppercase, tracking 0.04em) with Archivo for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism, Modernist
- **Illustration style:** Technical Diagram, Schematic
- **Line / stroke language:** Heavy, Technical
- **Composition / layout system:** Asymmetric Composition, Negative-Space Composition
- **Typography:** Condensed, Monospace
- **Information / data visualization:** Map
- **Camera language:** Top-Down, Orthographic
- **Color treatment:** Limited Palette, Light UI
- **Motion language:** Precise
- **Transition language:** Line-Draw Transition, Wipe

## Do's and Don'ts

- Do keep the accent (#d9502b) for the single most important element in each frame.
- Do use Archivo Narrow large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a blueprint: black walls on warm white paper with one accent room, not white lines on cyanotype blue.

## References

- Search: "architectural floor plan animation"
- Search: "floor plan motion graphics"
- Search: "animated plan drawing walkthrough"
