---
name: "Isometric process"
description: "Mint and coral blocks extruded with long flat diagonal shadows, a filled icon per step, a tidy stepwise process read left to right."
colors:
  canvas: "#e3f3ec"        # page ground
  ink: "#15302a"           # headlines and body text
  accent: "#2f9e8f"        # primary accent: the one thing that matters in each frame
  support: "#ff8a5b"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#5d7a72"         # muted captions
typography:
  display:
    fontFamily: Lexend
    fontWeight: 700
  body:
    fontFamily: Lexend
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 14px
shadows:
  card: "18px 18px 0 #15302a"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Isometric process

A motion-graphics design system from Rasa Director's style library (Data & explainers). Also known as isometric explainer, extruded infographic, 3D-ish flow.

## Overview

Mint and coral blocks extruded with long flat diagonal shadows, a filled icon per step, a tidy stepwise process read left to right.

It feels organized, friendly, systematic. Use it for process explainers, B2B how-it-works, onboarding flows.

## Visual language

- **Type:** Lexend (display, weight 700, tracking -0.02em) with Lexend for body text.
- **Surfaces:** flat fills, no gradients; corners 14px; outlines none.
- **Depth:** long shadows (`18px 18px 0 #15302a`).
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: pop.

## The terms that define it

- **Visual style / art direction:** Isometric, Corporate Flat
- **Illustration style:** Isometric Illustration, Flat Vector
- **Depth / dimensionality:** Isometric
- **Camera language:** Isometric Camera
- **Information / data visualization:** Process Diagram
- **Format / purpose:** Process Explainer
- **Shadow / depth cues:** Long Shadow
- **Motion language:** Precise
- **Transition language:** Slide, Camera Move Transition

## Do's and Don'ts

- Do keep the accent (#2f9e8f) for the single most important element in each frame.
- Do use Lexend large and confident; one idea per frame.
- Do keep every shadow the same long style.
- Don't use gradients or glassy surfaces.

## References

- Search: "isometric process animation"
- Search: "isometric infographic explainer"
- Search: "extruded flat design motion"
