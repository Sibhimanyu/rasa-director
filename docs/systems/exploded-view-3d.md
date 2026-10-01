---
name: "Exploded view 3D"
description: "Product parts separated along axes on warm white, float shadows under each layer, crisp labels and leader lines."
colors:
  canvas: "#f5f3ee"        # page ground
  ink: "#1a1a1a"           # headlines and body text
  accent: "#ff6a13"        # primary accent: the one thing that matters in each frame
  support: "#9aa4b0"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#7a7870"         # muted captions
typography:
  display:
    fontFamily: Archivo
    fontWeight: 800
  body:
    fontFamily: Archivo
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 14px
shadows:
  card: "0 40px 70px -16px rgba(0,0,0,0.3)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Exploded view 3D

A motion-graphics design system from RasanAI's style library (3D & materials). Also known as exploded axonometric, exploded product view, teardown view, exploded interface.

## Overview

Product parts separated along axes on warm white, float shadows under each layer, crisp labels and leader lines.

It feels engineered, revealing, clear. Use it for hardware and product explainers, feature breakdowns, architecture of a platform, launch films.

## Visual language

- **Type:** Archivo (display, weight 800, tracking -0.03em) with Archivo for body text.
- **Surfaces:** flat fills, no gradients; corners 14px; outlines 1px solid in #d6d2c8.
- **Depth:** float shadows (`0 40px 70px -16px rgba(0,0,0,0.3)`).
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** crosshair.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Photoreal CGI, Technical Minimalism
- **UI treatment:** Exploded UI, Perspective-Tilted UI
- **Illustration style:** Axonometric Illustration
- **Depth / dimensionality:** Perspective 3D
- **Product demonstration language:** Exploded-Interface Explanation, Callout Annotation
- **Shadow / depth cues:** Floating Shadows
- **Camera language:** Orbit, Arc
- **Motion language:** Precise
- **Transition language:** Split, Camera Move Transition

## Do's and Don'ts

- Do keep the accent (#ff6a13) for the single most important element in each frame.
- Do use Archivo large and confident; one idea per frame.
- Do keep every shadow the same float style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not isometric: exploded views pull one object apart to show structure, usually with perspective and float.

## References

- Search: "exploded view animation product"
- Search: "exploded axonometric motion"
- Search: "exploded UI layers animation"
