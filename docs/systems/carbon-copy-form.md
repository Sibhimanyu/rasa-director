---
name: "Carbon-copy form"
description: "White, yellow and pink triplicate sheets fanned out, carbon-blue typed entries in ruled boxes and a red rubber DUPLICATE stamp."
colors:
  canvas: "#f1dde2"        # page ground
  ink: "#1f2c7a"           # headlines and body text
  accent: "#c8323b"        # primary accent: the one thing that matters in each frame
  support: "#f4e8a4"       # supporting colour, used sparingly
  surface: "#fffdf5"       # raised cards and panels
  muted: "#5b6297"         # muted captions
typography:
  display:
    fontFamily: Courier Prime
    fontWeight: 700
  body:
    fontFamily: Archivo Narrow
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Carbon-copy form

A motion-graphics design system from Rasa Director's style library (Print). Also known as carbonless triplicate, NCR form, duplicate book, invoice pad, triplicate form.

## Overview

White, yellow and pink triplicate sheets fanned out, carbon-blue typed entries in ruled boxes and a red rubber DUPLICATE stamp.

It feels bureaucratic, dry, funny, official. Use it for fintech and invoicing tools, legal and admin products, government and civic explainers, office humour spots.

## Visual language

- **Type:** Courier Prime (display, weight 700, tracking -0.01em) with Archivo Narrow for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 1px solid in ink.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** grain. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Mechanical**. Motion driven as if by motors, gears and belts: constant velocity segments with abrupt, rigid starts and stops.
- Enter `none`, exit `none`, move `power1.inOut`; durations 150 / 250 / 400 / 600 / 900 ms; stagger 100 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Print-Editorial, Technical Minimalism
- **Composition / layout system:** Stacked Cards, Modular Grid
- **Material / surface language:** Paper
- **Typography:** Monospace, Condensed
- **Line / stroke language:** Hairline
- **Color treatment:** Limited Palette, Pastel
- **Texture:** Ink Bleed
- **UI treatment:** Form-Based UI
- **Motion language:** Mechanical
- **Transition language:** Slide, Card Flip
- **Emotional / brand tone:** Quirky, Professional

## Do's and Don'ts

- Do keep the accent (#c8323b) for the single most important element in each frame.
- Do use Courier Prime large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not the evidence board: no cork or string; tidy stacked office forms in carbon blue with a stamp, bureaucracy not mystery.

## References

- Search: "carbon copy form animation"
- Search: "triplicate invoice motion graphics"
- Search: "office paperwork stamp animation"
