---
name: "Oversized type"
description: "Headline set enormous in condensed capitals on black, filling the frame edge to edge; one orange block and editorial rules."
colors:
  canvas: "#0d0d0d"        # page ground
  ink: "#f5f2ea"           # headlines and body text
  accent: "#ff4f00"        # primary accent: the one thing that matters in each frame
  support: "#f5f2ea"       # supporting colour, used sparingly
  surface: "#1c1c1c"       # raised cards and panels
  muted: "#8d8a83"         # muted captions
typography:
  display:
    fontFamily: Anton
    fontWeight: 400
  body:
    fontFamily: Inter
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Oversized type

A motion-graphics design system from Rasa Director's style library (Bold & graphic). Also known as big type, giant typography, type-as-image, billboard type.

## Overview

Headline set enormous in condensed capitals on black, filling the frame edge to edge; one orange block and editorial rules.

It feels commanding, dramatic, fashion-forward, loud. Use it for kinetic typography, brand manifestos, trailers, event openers.

## Visual language

- **Type:** Anton (display, weight 400, uppercase, tracking -0.01em) with Inter for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** none. **Decoration:** rules.

## Motion

Motion language: **Heavy**. Motion that communicates large mass: slow to start, accelerating under gravity, landing with impact and minimal rebound.
- Enter `power4.in`, exit `power3.in`, move `power3.inOut`; durations 120 / 250 / 450 / 800 / 1200 ms; stagger 120 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, blur-in, opacity-only-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Editorial, Monochrome
- **Typography:** Condensed, Display Typography
- **Composition / layout system:** Typography-Led Composition, Full Bleed
- **Color treatment:** High Contrast, Dark UI
- **Line / stroke language:** No Outlines
- **Motion language:** Heavy
- **Transition language:** Mask Reveal, Hard Cut
- **Format / purpose:** Kinetic Typography, Typographic Statement

## Do's and Don'ts

- Do keep the accent (#ff4f00) for the single most important element in each frame.
- Do use Anton large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not editorial layout: the type is the picture, not a headline over a story.

## References

- Search: "oversized typography motion"
- Search: "big bold kinetic type"
- Search: "condensed type poster animation"
