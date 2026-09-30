---
name: "Toy-like 3D"
description: "Chunky inflated plastic tiles with inner highlights, glossy 3D icon blobs, big soft drop shadows, candy primaries on sky blue."
colors:
  canvas: "#bfe3ff"        # page ground
  ink: "#12213a"           # headlines and body text
  accent: "#ff5a4e"        # primary accent: the one thing that matters in each frame
  support: "#ffc82e"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#5b7394"         # muted captions
typography:
  display:
    fontFamily: Titan One
    fontWeight: 400
  body:
    fontFamily: Nunito
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 40px
shadows:
  card: "0 40px 70px -16px rgba(0,0,0,0.3)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Toy-like 3D

A motion-graphics design system from Rasa Director's style library (Playful & pop). Also known as toy 3D, plastic toy style, vinyl toy 3D, chunky 3D UI.

## Overview

Chunky inflated plastic tiles with inner highlights, glossy 3D icon blobs, big soft drop shadows, candy primaries on sky blue.

It feels tactile, fun, friendly, premium-playful. Use it for consumer app launches, fintech for young users, gaming, feature montages.

## Visual language

- **Type:** Titan One (display, weight 400, tracking 0em) with Nunito for body text.
- **Surfaces:** inflated, soft-lit clay surfaces with inner highlights; corners 40px; outlines none.
- **Depth:** float shadows (`0 40px 70px -16px rgba(0,0,0,0.3)`).
- **Texture:** none; clean fills. **Icons:** emoji3d. **Decoration:** none.

## Motion

Motion language: **Springy**. Motion that behaves like a damped physical spring: fast attack, one visible overshoot, then a quick settle.
- Enter `back.out(1.7)`, exit `power3.in`, move `elastic.out(1,0.75)`; durations 180 / 300 / 480 / 720 / 1100 ms; stagger 40 ms; hold at least 650 ms.
- Never: fade-up-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: spring.

## The terms that define it

- **Visual style / art direction:** Toy-Like 3D, Glossy 3D
- **Material / surface language:** Plastic, Glossy Product Surface
- **Iconography:** 3D Icons
- **Shape language:** Inflated, Rounded
- **Shadow / depth cues:** Floating Shadows
- **Depth / dimensionality:** 3D Objects + 2D UI
- **Color treatment:** Primary Colors, High Saturation
- **Motion language:** Springy
- **Transition language:** Scale Transition, Object Morph

## Do's and Don'ts

- Do keep the accent (#ff5a4e) for the single most important element in each frame.
- Do use Titan One large and confident; one idea per frame.
- Do keep every shadow the same float style.
- Don't mix surface treatments; everything is clay.
- Don't confuse it: Not claymorphism: toy 3D is shiny, saturated plastic; clay is matte, pastel and soft.

## References

- Search: "toy 3D motion design"
- Search: "plastic toy UI animation"
- Search: "chunky 3D app promo"
