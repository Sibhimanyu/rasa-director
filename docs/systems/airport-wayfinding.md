---
name: "Airport wayfinding"
description: "Black-on-yellow sign panels over charcoal, a humanist Frutiger-like sans, bold gate codes and pictogram tiles read at a glance."
colors:
  canvas: "#1f2022"        # page ground
  ink: "#ffd100"           # headlines and body text
  accent: "#111214"        # primary accent: the one thing that matters in each frame
  support: "#00843d"       # supporting colour, used sparingly
  surface: "#ffd100"       # raised cards and panels
  muted: "#8d8f93"         # muted captions
typography:
  display:
    fontFamily: Hind
    fontWeight: 600
  body:
    fontFamily: Hind
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 6px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Airport wayfinding

A motion-graphics design system from RasanAI's style library (Place & wayfinding). Also known as airport signage, Schiphol-style signs, Frutiger signage, yellow sign system, terminal signage.

## Overview

Black-on-yellow sign panels over charcoal, a humanist Frutiger-like sans, bold gate codes and pictogram tiles read at a glance.

It feels clear, efficient, international. Use it for travel and mobility, logistics, feature tours, event and venue films.

## Visual language

- **Type:** Hind (display, weight 600, tracking -0.01em) with Hind for body text.
- **Surfaces:** flat fills, no gradients; corners 6px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** duotone. **Decoration:** none.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Modernist, Clean Minimalism
- **Iconography:** Pictograms
- **Typography:** Humanist Sans
- **Composition / layout system:** Modular Grid
- **Color treatment:** High Contrast, Limited Palette
- **Shape language:** Rectilinear
- **Motion function:** Direct Attention, Show Navigation
- **Motion language:** Precise
- **Transition language:** Slide, Wipe
- **Emotional / brand tone:** Professional, Trustworthy

## Do's and Don'ts

- Do keep the accent (#111214) for the single most important element in each frame.
- Do use Hind large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not hazard-industrial: the yellow is a calm information panel with humanist type and pictograms, no stencils, stripes or warnings.

## References

- Search: "airport signage motion graphics"
- Search: "wayfinding animation yellow black"
- Search: "airport sign style video"
