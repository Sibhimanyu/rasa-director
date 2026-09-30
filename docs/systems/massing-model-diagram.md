---
name: "Architectural massing diagram"
description: "White massing volumes on a pale grey site, one orange volume singled out, hairline edges and soft ambient shadow, like a practice's concept diagram."
colors:
  canvas: "#e9e8e4"        # page ground
  ink: "#1d1d1d"           # headlines and body text
  accent: "#fbfaf8"        # primary accent: the one thing that matters in each frame
  support: "#ff5a1f"       # supporting colour, used sparingly
  surface: "#f6f5f2"       # raised cards and panels
  muted: "#7a7873"         # muted captions
typography:
  display:
    fontFamily: Albert Sans
    fontWeight: 700
  body:
    fontFamily: Albert Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Architectural massing diagram

A motion-graphics design system from Rasa Director's style library (Place & wayfinding). Also known as massing model, BIG-style diagram, architecture concept diagram, volumetric diagram, white model.

## Overview

White massing volumes on a pale grey site, one orange volume singled out, hairline edges and soft ambient shadow, like a practice's concept diagram.

It feels conceptual, clean, intelligent. Use it for architecture and property, strategy and structure explainers, product architecture, competition pitches.

## Visual language

- **Type:** Albert Sans (display, weight 700, tracking -0.03em) with Albert Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 1px solid in #3a3a3a.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Isometric, Extreme Minimalism
- **Illustration style:** Axonometric Illustration, Isometric Illustration
- **Depth / dimensionality:** Isometric
- **Camera language:** Isometric Camera, Orthographic
- **Composition / layout system:** Isometric Scene, Negative-Space Composition
- **Color treatment:** Grayscale, Accent-Color System
- **Shadow / depth cues:** Ambient Occlusion
- **Line / stroke language:** Hairline
- **Motion language:** Precise
- **Transition language:** Slide, Camera Move Transition
- **Emotional / brand tone:** Intellectual, Minimal

## Do's and Don'ts

- Do keep the accent (#fbfaf8) for the single most important element in each frame.
- Do use Albert Sans large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not an isometric city block: abstract white volumes with one highlighted mass, no materials, windows or streets.

## References

- Search: "architecture massing diagram animation"
- Search: "BIG architecture diagram style"
- Search: "white model concept diagram motion"
