---
name: "Moroccan zellige"
description: "Glazed tile panels in cobalt, emerald and saffron set in white plaster grout, eight-point star ornaments, geometric Arabic-inspired lettering."
colors:
  canvas: "#f4efe4"        # page ground
  ink: "#10243f"           # headlines and body text
  accent: "#127a5a"        # primary accent: the one thing that matters in each frame
  support: "#e0a526"       # supporting colour, used sparingly
  surface: "#1f56a8"       # raised cards and panels
  muted: "#b5532f"         # muted captions
typography:
  display:
    fontFamily: El Messiri
    fontWeight: 700
  body:
    fontFamily: El Messiri
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 6px
shadows:
  card: "inset 0 5px 12px rgba(0,0,0,0.22)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Moroccan zellige

A motion-graphics design system from RasanAI's style library (Heritage). Also known as zellij, Moorish tilework, Islamic geometric tiles, Fez tile mosaic.

## Overview

Glazed tile panels in cobalt, emerald and saffron set in white plaster grout, eight-point star ornaments, geometric Arabic-inspired lettering.

It feels intricate, cool, timeless. Use it for hospitality and riads, ceramics and interiors, food and tea, travel films.

## Visual language

- **Type:** El Messiri (display, weight 700, tracking 0em) with El Messiri for body text.
- **Surfaces:** flat fills, no gradients; corners 6px; outlines none.
- **Depth:** inset shadows (`inset 0 5px 12px rgba(0,0,0,0.22)`).
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** tiles.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Abstract Geometric, Handmade / Craft
- **Material / surface language:** Ceramic
- **Color treatment:** High Saturation, Cool Palette
- **Shape language:** Geometric, Grid-Based
- **Composition / layout system:** Modular Grid, Symmetrical Composition
- **Iconography:** Geometric Icons
- **Motion language:** Precise
- **Transition language:** Shape Match, Wipe

## Do's and Don'ts

- Do keep the accent (#127a5a) for the single most important element in each frame.
- Do use El Messiri large and confident; one idea per frame.
- Do keep every shadow the same inset style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not azulejo: zellige is chipped, multi-coloured glazed mosaic built from star geometry; azulejo is painted blue-and-white tiles.

## References

- Search: "zellige pattern animation"
- Search: "Moroccan tile motion graphics"
- Search: "Islamic geometric pattern animation"
