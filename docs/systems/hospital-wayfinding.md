---
name: "Hospital wayfinding"
description: "Clinical white directory panels with colour-coded blue and aqua zones, zone chips, big row numbers and a legibility-first sans."
colors:
  canvas: "#eef3f6"        # page ground
  ink: "#0b2a4a"           # headlines and body text
  accent: "#005eb8"        # primary accent: the one thing that matters in each frame
  support: "#00a499"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#5b7085"         # muted captions
typography:
  display:
    fontFamily: Atkinson Hyperlegible
    fontWeight: 700
  body:
    fontFamily: Atkinson Hyperlegible
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 14px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Hospital wayfinding

A motion-graphics design system from RasanAI's style library (Place & wayfinding). Also known as healthcare signage, clinical wayfinding, colour-coded zones, NHS-style signs.

## Overview

Clinical white directory panels with colour-coded blue and aqua zones, zone chips, big row numbers and a legibility-first sans.

It feels calm, reassuring, clear. Use it for health and care, public services, insurance and benefits explainers, patient onboarding.

## Visual language

- **Type:** Atkinson Hyperlegible (display, weight 700, tracking -0.01em) with Atkinson Hyperlegible for body text.
- **Surfaces:** flat fills, no gradients; corners 14px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Clean Minimalism, Corporate Flat
- **Iconography:** Pictograms
- **Typography:** Humanist Sans
- **Composition / layout system:** Stacked Cards, Asymmetric Composition
- **Color treatment:** Cool Palette, Accent-Color System
- **Shape language:** Pill-Shaped, Geometric
- **Motion function:** Show Navigation, Direct Attention
- **Motion language:** Smooth
- **Transition language:** Slide, Fade
- **Pacing / rhythm:** Medium Explanatory
- **Emotional / brand tone:** Calm, Trustworthy, Human
- **Information / data visualization:** Ranking List

## Do's and Don'ts

- Do keep the accent (#005eb8) for the single most important element in each frame.
- Do use Atkinson Hyperlegible large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not exhibition wayfinding: bright clinical white with colour-coded zones and a legibility-first face; reassuring, not curatorial.

## References

- Search: "hospital wayfinding design"
- Search: "healthcare signage animation"
- Search: "colour coded wayfinding motion"
