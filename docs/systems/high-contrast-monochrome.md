---
name: "High-contrast monochrome"
description: "Black and white with charcoal: white hairline boxes, bold grotesk, no colour at all, film grain for bite."
colors:
  canvas: "#000000"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#3a3a3a"        # primary accent: the one thing that matters in each frame
  support: "#1c1c1c"       # supporting colour, used sparingly
  surface: "#000000"       # raised cards and panels
  muted: "#9a9a9a"         # muted captions
typography:
  display:
    fontFamily: Space Grotesk
    fontWeight: 700
  body:
    fontFamily: Space Grotesk
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# High-contrast monochrome

A motion-graphics design system from RasanAI's style library (Bold & graphic). Also known as black and white graphic, stark mono, noir graphic, one-colour graphic.

## Overview

Black and white with charcoal: white hairline boxes, bold grotesk, no colour at all, film grain for bite.

It feels stark, serious, modern, precise. Use it for tech explainers, fashion, architecture, dramatic product teasers.

## Visual language

- **Type:** Space Grotesk (display, weight 700, tracking -0.03em) with Space Grotesk for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 2px solid in ink.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Monochrome, Technical Minimalism
- **Color treatment:** Black and White, High Contrast
- **Typography:** Grotesk
- **Line / stroke language:** Thin, Uniform Stroke
- **Composition / layout system:** Flowchart, Negative-Space Composition
- **Texture:** Film Grain
- **Shadow / depth cues:** No Shadow
- **Motion language:** Precise
- **Transition language:** Wipe, Line-Draw Transition

## Do's and Don'ts

- Do keep the accent (#3a3a3a) for the single most important element in each frame.
- Do use Space Grotesk large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not dark UI: there is no brand colour; contrast, charcoal and type do everything.

## References

- Search: "black and white motion graphics"
- Search: "monochrome kinetic design"
- Search: "high contrast mono explainer"
