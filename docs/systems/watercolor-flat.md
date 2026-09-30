---
name: "Watercolour wash"
description: "Soft bleeding watercolour blobs in pastel sage, peach and blue on cold-press paper, no outlines, gentle handwritten type."
colors:
  canvas: "#fbf7f0"        # page ground
  ink: "#2d3a3a"           # headlines and body text
  accent: "#f2a488"        # primary accent: the one thing that matters in each frame
  support: "#9cc3b5"       # supporting colour, used sparingly
  surface: "#fffdf8"       # raised cards and panels
  muted: "#8a9290"         # muted captions
typography:
  display:
    fontFamily: Kalam
    fontWeight: 700
  body:
    fontFamily: Kalam
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 34px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Watercolour wash

A motion-graphics design system from Rasa Director's style library (Handmade & printed). Also known as watercolor flat, soft watercolour illustration, painterly wash, gouache flat.

## Overview

Soft bleeding watercolour blobs in pastel sage, peach and blue on cold-press paper, no outlines, gentle handwritten type.

It feels gentle, warm, calm. Use it for wellness and health, children's education, weddings and gifting, non-profit stories.

## Visual language

- **Type:** Kalam (display, weight 700, tracking 0em) with Kalam for body text.
- **Surfaces:** off-white paper with visible fibre; corners 34px; outlines none.
- **Depth:** no shadows.
- **Texture:** paper. **Icons:** duotone. **Decoration:** blobs.

## Motion

Motion language: **Fluid**. Uninterrupted flow in which every state change hands off into the next, with no visible stops or cuts between elements.
- Enter `power3.inOut`, exit `power3.inOut`, move `sine.inOut`; durations 300 / 500 / 800 / 1200 / 1800 ms; stagger 40 ms; hold at least 900 ms.
- Never: fade-up-slide, bounce, scale-pop, linear-entrance, opacity-only-entrance.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Handmade / Craft, Warm Minimalism
- **Illustration style:** Watercolor, Brush Illustration
- **Texture:** Paint, Paper Grain
- **Color treatment:** Pastel, Analogous
- **Line / stroke language:** No Outlines
- **Shape language:** Organic
- **Motion language:** Fluid
- **Transition language:** Dissolve, Liquid Transition

## Do's and Don'ts

- Do keep the accent (#f2a488) for the single most important element in each frame.
- Do use Kalam large and confident; one idea per frame.
- Don't add drop shadows.
- Don't mix surface treatments; everything is paper.
- Don't confuse it: Not pastel flat vector: the colour pools and bleeds with paper grain; edges are soft, not crisp.

## References

- Search: "watercolor motion graphics"
- Search: "watercolour animation explainer"
- Search: "soft painterly animation"
