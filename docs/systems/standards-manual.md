---
name: "Graphic standards manual"
description: "A 1970s identity manual: neutral grotesk, strict grid lines, specimen cards, measured red and black, and spec labels in small caps."
colors:
  canvas: "#efeeea"        # page ground
  ink: "#121212"           # headlines and body text
  accent: "#e03c31"        # primary accent: the one thing that matters in each frame
  support: "#121212"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#8a8984"         # muted captions
typography:
  display:
    fontFamily: IBM Plex Sans
    fontWeight: 700
  body:
    fontFamily: IBM Plex Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Graphic standards manual

A motion-graphics design system from RasanAI's style library (Editorial & print). Also known as corporate identity manual, Vignelli style, NASA manual style, brand guidelines book.

## Overview

A 1970s identity manual: neutral grotesk, strict grid lines, specimen cards, measured red and black, and spec labels in small caps.

It feels systematic, authoritative, clean. Use it for brand identity reveals, design system launches, institutional films, logo reveals.

## Visual language

- **Type:** IBM Plex Sans (display, weight 700, tracking -0.03em) with IBM Plex Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 1px solid in ink.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** grid.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Modernist, Swiss / International Typographic Style
- **Era / design-movement influence:** Swiss / International Typographic Style, 1970s
- **Typography:** Neo-Grotesk
- **Composition / layout system:** Modular Grid, Swiss Grid
- **Color treatment:** Limited Palette, Light UI
- **Shape language:** Rectilinear, Grid-Based
- **Format / purpose:** Animated Identity, Motion Identity System
- **Motion language:** Precise
- **Transition language:** Wipe, Slide

## Do's and Don'ts

- Do keep the accent (#e03c31) for the single most important element in each frame.
- Do use IBM Plex Sans large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not Swiss poster style: the page is a rulebook, with specimens, grids and specs rather than a single expressive composition.

## References

- Search: "graphic standards manual animation"
- Search: "nasa graphics standards manual style"
- Search: "brand guidelines motion design"
