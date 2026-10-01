---
name: "Concrete brutalist 3D"
description: "Raw grey concrete slabs and monoliths with heavy float shadows, pitted noise texture, one safety-orange accent and huge tight type."
colors:
  canvas: "#c9c6bf"        # page ground
  ink: "#121212"           # headlines and body text
  accent: "#8f8b83"        # primary accent: the one thing that matters in each frame
  support: "#ff4d1a"       # supporting colour, used sparingly
  surface: "#dedbd4"       # raised cards and panels
  muted: "#5f5c57"         # muted captions
typography:
  display:
    fontFamily: Archivo
    fontWeight: 900
  body:
    fontFamily: Archivo
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "0 40px 70px -16px rgba(0,0,0,0.3)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Concrete brutalist 3D

A motion-graphics design system from RasanAI's style library (3D & materials). Also known as concrete render, brutalist architecture 3D, raw concrete, monolith render.

## Overview

Raw grey concrete slabs and monoliths with heavy float shadows, pitted noise texture, one safety-orange accent and huge tight type.

It feels monumental, serious, architectural. Use it for architecture and real estate, fashion and streetwear, art and exhibitions, infrastructure brands.

## Visual language

- **Type:** Archivo (display, weight 900, uppercase, tracking -0.04em) with Archivo for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** float shadows (`0 40px 70px -16px rgba(0,0,0,0.3)`).
- **Texture:** noise. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Heavy**. Motion that communicates large mass: slow to start, accelerating under gravity, landing with impact and minimal rebound.
- Enter `power4.in`, exit `power3.in`, move `power3.inOut`; durations 120 / 250 / 450 / 800 / 1200 ms; stagger 120 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, blur-in, opacity-only-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Brutalism, Photoreal CGI
- **Material / surface language:** Matte Product Surface
- **Depth / dimensionality:** Perspective 3D
- **Shape language:** Rectilinear, Geometric
- **Color treatment:** Grayscale, Accent-Color System
- **Texture:** Digital Noise
- **Shadow / depth cues:** Floating Shadows
- **Typography:** Grotesk, Condensed
- **Motion language:** Heavy
- **Transition language:** Push, Camera Move Transition

## Do's and Don'ts

- Do keep the accent (#8f8b83) for the single most important element in each frame.
- Do use Archivo large and confident; one idea per frame.
- Do keep every shadow the same float style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not web brutalism: this is the material (poured concrete in 3D light), not raw HTML layouts.

## References

- Search: "concrete brutalist 3D animation"
- Search: "monolith render motion design"
- Search: "brutalist architecture motion graphics"
