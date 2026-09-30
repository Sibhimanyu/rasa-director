---
name: "Teletext"
description: "Eight flat broadcast colours on black, blocky mosaic charts and bars, pixel headline bands, no curves anywhere."
colors:
  canvas: "#000000"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#00ffff"        # primary accent: the one thing that matters in each frame
  support: "#ff00ff"       # supporting colour, used sparingly
  surface: "#0000ff"       # raised cards and panels
  muted: "#ffff00"         # muted captions
typography:
  display:
    fontFamily: Silkscreen
    fontWeight: 400
  body:
    fontFamily: Silkscreen
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Teletext

A motion-graphics design system from Rasa Director's style library (Retro & eras). Also known as Ceefax, videotex, mosaic graphics, TV text pages.

## Overview

Eight flat broadcast colours on black, blocky mosaic charts and bars, pixel headline bands, no curves anywhere.

It feels informative, quirky, retro. Use it for news and data recaps, sports scores, retro stats films, election-style results.

## Visual language

- **Type:** Silkscreen (display, weight 400, uppercase, tracking 0.02em) with Silkscreen for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** grid. **Icons:** pixel. **Decoration:** none.

## Motion

Motion language: **Choppy / Stepped**. No interpolation as an aesthetic: elements jump between a few discrete positions or cut instantly.
- Enter `steps(4)`, exit `steps(3)`, move `steps(6)`; durations 100 / 160 / 250 / 400 / 600 ms; stagger 60 ms; hold at least 500 ms.
- Never: fade-up-slide, fade-slide, blur-in, bounce, overshoot, opacity-only-entrance.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Pixel Art, Technical Minimalism
- **Era / design-movement influence:** 1980s
- **Information / data visualization:** Bar Chart, Statistic Callout
- **Color treatment:** Primary Colors, Dark UI
- **Typography:** Pixel Type
- **Texture:** Pixelation
- **Motion language:** Choppy / Stepped
- **Transition language:** Hard Cut

## Do's and Don'ts

- Do keep the accent (#00ffff) for the single most important element in each frame.
- Do use Silkscreen large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not 8-bit game art: teletext is a flat information page in eight fixed colours, not sprites.

## References

- Search: "teletext style animation"
- Search: "ceefax graphics motion"
- Search: "teletext data visualisation"
