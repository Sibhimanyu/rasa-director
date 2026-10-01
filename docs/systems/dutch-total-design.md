---
name: "Dutch Total Design"
description: "A visible square grid on white, modular square-cornered capitals set strictly to it, one red block, a grey square, radical order."
colors:
  canvas: "#f3f3ef"        # page ground
  ink: "#111111"           # headlines and body text
  accent: "#e1261c"        # primary accent: the one thing that matters in each frame
  support: "#c4c4bd"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#7c7c77"         # muted captions
typography:
  display:
    fontFamily: Tektur
    fontWeight: 700
  body:
    fontFamily: Work Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Dutch Total Design

A motion-graphics design system from RasanAI's style library (Heritage). Also known as Wim Crouwel style, Stedelijk poster, gridnik, Dutch grid modernism.

## Overview

A visible square grid on white, modular square-cornered capitals set strictly to it, one red block, a grey square, radical order.

It feels radical, systematic, cool. Use it for museum and exhibition identities, tech and engineering brands, type-led titles, design conferences.

## Visual language

- **Type:** Tektur (display, weight 700, lowercase, tracking 0em) with Work Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** grid. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Robotic**. Sequenced, one-thing-at-a-time motion like a servo or robot arm: quick accelerate-decelerate moves separated by dead stops.
- Enter `power3.inOut`, exit `power3.in`, move `power3.inOut`; durations 120 / 200 / 300 / 450 / 700 ms; stagger 150 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Swiss / International Typographic Style, Technical Minimalism
- **Era / design-movement influence:** Swiss / International Typographic Style
- **Composition / layout system:** Swiss Grid, Typography-Led Composition
- **Shape language:** Grid-Based, Rectilinear
- **Typography:** Display Typography, Extended
- **Color treatment:** Limited Palette, Light UI
- **Motion language:** Robotic
- **Transition language:** Wipe, Hard Cut

## Do's and Don'ts

- Do keep the accent (#e1261c) for the single most important element in each frame.
- Do use Tektur large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not Swiss International: the grid is shown, not hidden, and the letters themselves are built from it, square and modular.

## References

- Search: "Wim Crouwel poster animation"
- Search: "Stedelijk museum poster style"
- Search: "grid typography motion design"
