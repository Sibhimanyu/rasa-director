---
name: "Type specimen"
description: "One typeface on show against black: a giant headline, glyph marks, crosshair registration and metric callouts in a single hot orange."
colors:
  canvas: "#141414"        # page ground
  ink: "#f2efe6"           # headlines and body text
  accent: "#ff5b2e"        # primary accent: the one thing that matters in each frame
  support: "#f2efe6"       # supporting colour, used sparingly
  surface: "#1f1f1f"       # raised cards and panels
  muted: "#8c8980"         # muted captions
typography:
  display:
    fontFamily: Fraunces
    fontWeight: 900
  body:
    fontFamily: IBM Plex Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Type specimen

A motion-graphics design system from RasanAI's style library (Editorial & print). Also known as font specimen, foundry specimen, glyph showcase, specimen poster.

## Overview

One typeface on show against black: a giant headline, glyph marks, crosshair registration and metric callouts in a single hot orange.

It feels crafted, nerdy, confident. Use it for font and brand identity launches, design tool promos, logo reveals, kinetic typography.

## Visual language

- **Type:** Fraunces (display, weight 900, tracking -0.04em) with IBM Plex Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** glyph. **Decoration:** crosshair.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: type.

## The terms that define it

- **Visual style / art direction:** Modernist, Technical Minimalism
- **Typography:** Variable Font, Display Typography
- **Composition / layout system:** Typography-Led Composition, Centered Hero Composition
- **Color treatment:** High Contrast, Accent-Color System
- **Line / stroke language:** Hairline, Technical
- **Motion language:** Precise
- **Transition language:** Morph Transition, Hard Cut
- **Format / purpose:** Kinetic Typography, Animated Identity

## Do's and Don'ts

- Do keep the accent (#ff5b2e) for the single most important element in each frame.
- Do use Fraunces large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not kinetic typography in general: the letterforms themselves are the subject, measured and annotated.

## References

- Search: "type specimen animation"
- Search: "font specimen motion design"
- Search: "typeface showcase video"
