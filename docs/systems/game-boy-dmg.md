---
name: "Game Boy green"
description: "Four shades of pea-soup green only, a handheld screen frame, pixel type and an LCD dot grid."
colors:
  canvas: "#9bbc0f"        # page ground
  ink: "#0f380f"           # headlines and body text
  accent: "#306230"        # primary accent: the one thing that matters in each frame
  support: "#8bac0f"       # supporting colour, used sparingly
  surface: "#c4d86a"       # raised cards and panels
  muted: "#306230"         # muted captions
typography:
  display:
    fontFamily: Silkscreen
    fontWeight: 700
  body:
    fontFamily: VT323
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "4px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Game Boy green

A motion-graphics design system from RasanAI's style library (Retro & eras). Also known as DMG palette, 4-shade green, handheld pixel, pea-soup LCD.

## Overview

Four shades of pea-soup green only, a handheld screen frame, pixel type and an LCD dot grid.

It feels nostalgic, cosy, lo-fi. Use it for mobile game teasers, indie app launches, retro merch drops.

## Visual language

- **Type:** Silkscreen (display, weight 700, uppercase, tracking 0.02em) with VT323 for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 4px solid in ink.
- **Depth:** no shadows.
- **Texture:** grid. **Icons:** pixel. **Decoration:** none.

## Motion

Motion language: **Choppy / Stepped**. No interpolation as an aesthetic: elements jump between a few discrete positions or cut instantly.
- Enter `steps(4)`, exit `steps(3)`, move `steps(6)`; durations 100 / 160 / 250 / 400 / 600 ms; stagger 60 ms; hold at least 500 ms.
- Never: fade-up-slide, fade-slide, blur-in, bounce, overshoot, opacity-only-entrance.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Pixel Art, Monochrome
- **Era / design-movement influence:** 1990s
- **UI treatment:** Retro UI, Device-Bound UI
- **Color treatment:** Limited Palette, Monochrome
- **Typography:** Pixel Type
- **Texture:** Pixelation
- **Motion language:** Choppy / Stepped
- **Transition language:** Hard Cut, Pixel Dissolve

## Do's and Don'ts

- Do keep the accent (#306230) for the single most important element in each frame.
- Do use Silkscreen large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not 8-bit pixel art: strictly four greens, like the original LCD, no full colour.

## References

- Search: "game boy palette animation"
- Search: "dmg green pixel motion"
- Search: "gameboy style UI"
