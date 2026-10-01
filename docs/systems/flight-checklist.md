---
name: "Flight checklist"
description: "A sixties space-program procedures card: off-white stock, black geometric caps, numbered steps with boxed crew codes and a safety-orange mark."
colors:
  canvas: "#eeebe1"        # page ground
  ink: "#151515"           # headlines and body text
  accent: "#e0561a"        # primary accent: the one thing that matters in each frame
  support: "#2c5aa0"       # supporting colour, used sparingly
  surface: "#f8f6ef"       # raised cards and panels
  muted: "#6b675e"         # muted captions
typography:
  display:
    fontFamily: League Spartan
    fontWeight: 700
  body:
    fontFamily: Jost
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Flight checklist

A motion-graphics design system from RasanAI's style library (Science). Also known as flight data file, Apollo checklist, mission procedures, space program manual, procedure card.

## Overview

A sixties space-program procedures card: off-white stock, black geometric caps, numbered steps with boxed crew codes and a safety-orange mark.

It feels disciplined, heroic, clear. Use it for launches and countdowns, onboarding and how-to films, aerospace and deep tech, process explainers.

## Visual language

- **Type:** League Spartan (display, weight 700, uppercase, tracking 0.02em) with Jost for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 2px solid in ink.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** none. **Decoration:** rules.

## Motion

Motion language: **Mechanical**. Motion driven as if by motors, gears and belts: constant velocity segments with abrupt, rigid starts and stops.
- Enter `none`, exit `none`, move `power1.inOut`; durations 150 / 250 / 400 / 600 / 900 ms; stagger 100 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Modernist, Technical Minimalism
- **Era / design-movement influence:** Mid-Century Modern
- **Typography:** Geometric Sans
- **Composition / layout system:** Typography-Led Composition
- **Information / data visualization:** Ranking List
- **Color treatment:** Limited Palette, Accent-Color System
- **Material / surface language:** Paper
- **Motion language:** Mechanical
- **Transition language:** Hard Cut, Wipe
- **Emotional / brand tone:** Technical, Confident

## Do's and Don'ts

- Do keep the accent (#e0561a) for the single most important element in each frame.
- Do use League Spartan large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not mission control: the printed card the crew holds, black caps on paper and a checklist, not glowing screens.

## References

- Search: "Apollo checklist design animation"
- Search: "NASA manual style motion graphics"
- Search: "checklist countdown video"
