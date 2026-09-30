---
name: "Metro line diagram"
description: "A white field crossed by one thick coloured line, round station stops and interchange rings, neat grotesk station names and journey minutes."
colors:
  canvas: "#ffffff"        # page ground
  ink: "#1c1c1c"           # headlines and body text
  accent: "#dc241f"        # primary accent: the one thing that matters in each frame
  support: "#0019a8"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#6b6b6b"         # muted captions
typography:
  display:
    fontFamily: Hanken Grotesk
    fontWeight: 700
  body:
    fontFamily: Hanken Grotesk
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 999px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "7px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Metro line diagram

A motion-graphics design system from Rasa Director's style library (Place & wayfinding). Also known as transit diagram, Beck-style map, Vignelli subway diagram, in-car line strip, tube map style.

## Overview

A white field crossed by one thick coloured line, round station stops and interchange rings, neat grotesk station names and journey minutes.

It feels orderly, clear, civic. Use it for journey and roadmap films, onboarding steps, city and mobility brands, process explainers.

## Visual language

- **Type:** Hanken Grotesk (display, weight 700, tracking -0.02em) with Hanken Grotesk for body text.
- **Surfaces:** flat fills, no gradients; corners fully rounded (pills); outlines 7px solid in ink.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Swiss / International Typographic Style, Modernist
- **Composition / layout system:** Timeline, Negative-Space Composition
- **Information / data visualization:** Flow Diagram, Timeline
- **Typography:** Neo-Grotesk
- **Color treatment:** Limited Palette, High Contrast
- **Line / stroke language:** Heavy, Uniform Stroke
- **Shape language:** Circular, Rectilinear
- **Motion function:** Show Progress, Show Location
- **Motion language:** Precise
- **Transition language:** Line-Draw Transition, Wipe
- **Emotional / brand tone:** Trustworthy, Minimal

## Do's and Don'ts

- Do keep the accent (#dc241f) for the single most important element in each frame.
- Do use Hanken Grotesk large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a timeline explainer: the axis is a railway line with stops and a next-stop marker, coloured like a network, not a row of dates.

## References

- Search: "metro map animation"
- Search: "subway line diagram motion graphics"
- Search: "transit map style explainer"
