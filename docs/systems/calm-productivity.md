---
name: "Calm productivity"
description: "A phone app on warm paper, serif headline, soft neutral rows, one gentle ochre accent, slow unhurried dissolves."
colors:
  canvas: "#f4f0e8"        # page ground
  ink: "#2b2925"           # headlines and body text
  accent: "#c98a2b"        # primary accent: the one thing that matters in each frame
  support: "#7d9a82"       # supporting colour, used sparingly
  surface: "#fbf9f4"       # raised cards and panels
  muted: "#8b857a"         # muted captions
typography:
  display:
    fontFamily: Newsreader
    fontWeight: 500
  body:
    fontFamily: Inter
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 20px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Calm productivity

A motion-graphics design system from RasanAI's style library (Product & UI). Also known as Things style, warm minimal app, quiet software.

## Overview

A phone app on warm paper, serif headline, soft neutral rows, one gentle ochre accent, slow unhurried dissolves.

It feels calm, thoughtful, human. Use it for to-do and notes apps, wellbeing products, focus tools.

## Visual language

- **Type:** Newsreader (display, weight 500, tracking -0.02em) with Inter for body text.
- **Surfaces:** off-white paper with visible fibre; corners 20px; outlines 1px solid in #e3ddd1.
- **Depth:** no shadows.
- **Texture:** paper. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Luxurious / Slow**. Very slow, circular deceleration, long holds and stillness, where restraint itself is the signal of value.
- Enter `circ.out`, exit `circ.in`, move `power1.inOut`; durations 600 / 900 / 1400 / 2000 / 2800 ms; stagger 200 ms; hold at least 1800 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, linear-entrance, blur-in.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Warm Minimalism
- **UI treatment:** Device-Bound UI, Minimal UI
- **Typography:** Editorial Serif
- **Color treatment:** Muted, Warm Palette
- **Texture:** Paper Grain
- **UI interaction motion:** Checkbox, Drag
- **Pacing / rhythm:** Meditative
- **Motion language:** Luxurious / Slow
- **Transition language:** Dissolve, Crossfade

## Do's and Don'ts

- Do keep the accent (#c98a2b) for the single most important element in each frame.
- Do use Newsreader large and confident; one idea per frame.
- Don't add drop shadows.
- Don't mix surface treatments; everything is paper.

## References

- Search: "calm app promo animation"
- Search: "warm minimal ui motion"
- Search: "productivity app video serif"
