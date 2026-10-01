---
name: "Architectural minimal"
description: "Concrete grey ground ruled by a faint construction grid, sharp-cornered planes, a slim grotesk and a single stone-coloured block."
colors:
  canvas: "#dedbd6"        # page ground
  ink: "#1b1b1b"           # headlines and body text
  accent: "#8f857a"        # primary accent: the one thing that matters in each frame
  support: "#b9b2a8"       # supporting colour, used sparingly
  surface: "#ebe8e3"       # raised cards and panels
  muted: "#77736d"         # muted captions
typography:
  display:
    fontFamily: Inter Tight
    fontWeight: 500
  body:
    fontFamily: Inter Tight
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Architectural minimal

A motion-graphics design system from RasanAI's style library (Luxury & restrained). Also known as concrete minimal, brutalist-luxe, gallery architecture, Tadao Ando style.

## Overview

Concrete grey ground ruled by a faint construction grid, sharp-cornered planes, a slim grotesk and a single stone-coloured block.

It feels rigorous, cool, monumental. Use it for architecture and interiors studios, real estate developments, furniture brands, design exhibitions.

## Visual language

- **Type:** Inter Tight (display, weight 500, tracking -0.04em) with Inter Tight for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** grid.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Modernist, Extreme Minimalism
- **Composition / layout system:** Swiss Grid, Asymmetric Composition
- **Shape language:** Rectilinear, Sharp
- **Typography:** Grotesk
- **Color treatment:** Grayscale, Muted
- **Material / surface language:** Matte Product Surface
- **Line / stroke language:** Hairline
- **Motion language:** Precise
- **Transition language:** Slide, Wipe

## Do's and Don'ts

- Do keep the accent (#8f857a) for the single most important element in each frame.
- Do use Inter Tight large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not brutalism: no raw type or clashing colour; the grid, concrete and sharp planes are disciplined and quiet.

## References

- Search: "architectural minimal motion graphics"
- Search: "concrete minimal brand film"
- Search: "architecture studio title animation"
