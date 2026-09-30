---
name: "Collider event display"
description: "A detector cross-section on black: concentric grey barrel rings, curling yellow particle tracks, cyan energy deposits, run and event numbers."
colors:
  canvas: "#06080b"        # page ground
  ink: "#e9edf1"           # headlines and body text
  accent: "#f2c200"        # primary accent: the one thing that matters in each frame
  support: "#29b6d9"       # supporting colour, used sparingly
  surface: "#11161c"       # raised cards and panels
  muted: "#7d8793"         # muted captions
typography:
  display:
    fontFamily: Saira
    fontWeight: 600
  body:
    fontFamily: Saira
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Collider event display

A motion-graphics design system from Rasa Director's style library (Science). Also known as particle detector display, CERN-style event display, particle tracks, detector cross-section.

## Overview

A detector cross-section on black: concentric grey barrel rings, curling yellow particle tracks, cyan energy deposits, run and event numbers.

It feels rigorous, vast, electric. Use it for physics and research, deep-tech and compute, science documentaries, data-at-scale stories.

## Visual language

- **Type:** Saira (display, weight 600, tracking -0.01em) with Saira for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 1px solid in ink.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** orbits.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism, Futuristic Tech
- **Illustration style:** Technical Diagram
- **Composition / layout system:** Radial Composition, Negative-Space Composition
- **Color treatment:** Dark UI, Complementary
- **Line / stroke language:** Hairline
- **Typography:** Geometric Sans, Monospace
- **Motion language:** Precise
- **Transition language:** Zoom Transition, Flash Transition
- **Emotional / brand tone:** Intellectual, Futuristic

## Do's and Don'ts

- Do keep the accent (#f2c200) for the single most important element in each frame.
- Do use Saira large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a sci-fi HUD: a real detector read-out, rings and curling tracks on black with no glow, brackets or targeting.

## References

- Search: "particle physics event display animation"
- Search: "CERN detector graphics"
- Search: "particle tracks motion graphics"
