---
name: "Ulm functionalism"
description: "Braun-grey panels, rounded control pills, one orange signal dot and a green power light, a neutral lowercase grotesk, a fine dot grid."
colors:
  canvas: "#e4e3df"        # page ground
  ink: "#1c1c1a"           # headlines and body text
  accent: "#ec6a1f"        # primary accent: the one thing that matters in each frame
  support: "#3a8a4d"       # supporting colour, used sparingly
  surface: "#f4f4f1"       # raised cards and panels
  muted: "#84837d"         # muted captions
typography:
  display:
    fontFamily: Hanken Grotesk
    fontWeight: 500
  body:
    fontFamily: Hanken Grotesk
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 18px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Ulm functionalism

A motion-graphics design system from Rasa Director's style library (Heritage). Also known as Braun design, Dieter Rams style, HfG Ulm, less but better, German functionalism.

## Overview

Braun-grey panels, rounded control pills, one orange signal dot and a green power light, a neutral lowercase grotesk, a fine dot grid.

It feels quiet, precise, honest, useful. Use it for hardware and appliance launches, audio and consumer electronics, tool and utility apps, industrial design studios.

## Visual language

- **Type:** Hanken Grotesk (display, weight 500, lowercase, tracking -0.02em) with Hanken Grotesk for body text.
- **Surfaces:** flat fills, no gradients; corners 18px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** dots. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism, Modernist
- **UI treatment:** Minimal UI, Flat UI
- **Color treatment:** Muted, Accent-Color System
- **Shape language:** Rounded, Circular
- **Typography:** Neo-Grotesk
- **Material / surface language:** Matte Product Surface
- **Composition / layout system:** Negative-Space Composition, Modular Grid
- **Motion language:** Precise
- **Transition language:** Slide, Fade

## Do's and Don'ts

- Do keep the accent (#ec6a1f) for the single most important element in each frame.
- Do use Hanken Grotesk large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not Swiss poster style: Ulm is product design, with controls, dials and grids at rest, never expressive type.

## References

- Search: "Dieter Rams design animation"
- Search: "Braun product style motion"
- Search: "HfG Ulm functionalist design"
