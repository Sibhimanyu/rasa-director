---
name: "Thermal receipt"
description: "A narrow curling till receipt: faded grey-black mono type, dashed tear rules, dotted leaders to prices, a big TOTAL and a barcode."
colors:
  canvas: "#f7f6f1"        # page ground
  ink: "#2a2a2a"           # headlines and body text
  accent: "#1b1b1b"        # primary accent: the one thing that matters in each frame
  support: "#a3a29c"       # supporting colour, used sparingly
  surface: "#fbfaf6"       # raised cards and panels
  muted: "#6c6b66"         # muted captions
typography:
  display:
    fontFamily: JetBrains Mono
    fontWeight: 800
  body:
    fontFamily: JetBrains Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px dashed {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Thermal receipt

A motion-graphics design system from RasanAI's style library (Print). Also known as till receipt, POS receipt, receipt printer, thermal paper slip.

## Overview

A narrow curling till receipt: faded grey-black mono type, dashed tear rules, dotted leaders to prices, a big TOTAL and a barcode.

It feels everyday, wry, honest. Use it for retail and e-commerce, fintech and budgeting apps, year-in-review recaps, food delivery.

## Visual language

- **Type:** JetBrains Mono (display, weight 800, uppercase, tracking 0em) with JetBrains Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 2px dashed in ink.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Mechanical**. Motion driven as if by motors, gears and belts: constant velocity segments with abrupt, rigid starts and stops.
- Enter `none`, exit `none`, move `power1.inOut`; durations 150 / 250 / 400 / 600 / 900 ms; stagger 100 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: type.

## The terms that define it

- **Visual style / art direction:** Extreme Minimalism, Monochrome
- **Typography:** Monospace
- **Composition / layout system:** Typography-Led Composition, Centered Hero Composition
- **Material / surface language:** Paper
- **Texture:** Print Grain
- **Color treatment:** Grayscale
- **Information / data visualization:** Ranking List
- **Motion language:** Mechanical
- **Transition language:** Push, Hard Cut
- **Emotional / brand tone:** Quirky, Minimal

## Do's and Don'ts

- Do keep the accent (#1b1b1b) for the single most important element in each frame.
- Do use JetBrains Mono large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a dot-matrix printout: no green bars or tractor holes; a small white thermal slip with dotted leaders and a total.

## References

- Search: "receipt animation"
- Search: "thermal receipt printing motion graphics"
- Search: "receipt list typography video"
