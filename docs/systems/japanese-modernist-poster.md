---
name: "Japanese modernist poster"
description: "A huge red sun disc on off-white, heavy black gothic type broken across the grid, one indigo block, generous emptiness."
colors:
  canvas: "#f2eee4"        # page ground
  ink: "#141414"           # headlines and body text
  accent: "#1d2f5c"        # primary accent: the one thing that matters in each frame
  support: "#d42a20"       # supporting colour, used sparingly
  surface: "#f8f5ed"       # raised cards and panels
  muted: "#7b766b"         # muted captions
typography:
  display:
    fontFamily: Dela Gothic One
    fontWeight: 400
  body:
    fontFamily: Zen Kaku Gothic New
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Japanese modernist poster

A motion-graphics design system from Rasa Director's style library (Heritage). Also known as Tokyo 1964 style, Kamekura poster, Tanaka Ikko style, Japanese Swiss, Nihon modernism.

## Overview

A huge red sun disc on off-white, heavy black gothic type broken across the grid, one indigo block, generous emptiness.

It feels bold, serene, exact. Use it for sport and event openers, cultural festivals, design and architecture brands, national campaigns.

## Visual language

- **Type:** Dela Gothic One (display, weight 400, tracking -0.02em) with Zen Kaku Gothic New for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Modernist, Abstract Geometric
- **Era / design-movement influence:** Mid-Century Modern
- **Composition / layout system:** Asymmetric Composition, Negative-Space Composition, Typography-Led Composition
- **Shape language:** Circular, Geometric
- **Color treatment:** Limited Palette, High Contrast
- **Typography:** Display Typography, Grotesk
- **Motion language:** Precise
- **Transition language:** Shape Match, Wipe

## Do's and Don'ts

- Do keep the accent (#1d2f5c) for the single most important element in each frame.
- Do use Dela Gothic One large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not sumi-e or wabi-sabi: hard-edged 1960s geometric print design, a flat red circle and gothic type, not brushwork or texture.

## References

- Search: "Tokyo 1964 olympic poster style"
- Search: "Japanese modernist graphic design motion"
- Search: "Ikko Tanaka poster animation"
