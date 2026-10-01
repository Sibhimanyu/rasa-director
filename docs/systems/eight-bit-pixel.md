---
name: "8-bit pixel art"
description: "Chunky pixel icons, blocky arcade type and hard square shadows on a flat sky-blue, tiled like a game menu."
colors:
  canvas: "#5c94fc"        # page ground
  ink: "#000000"           # headlines and body text
  accent: "#e45c10"        # primary accent: the one thing that matters in each frame
  support: "#fcbc3c"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#2a3a6a"         # muted captions
typography:
  display:
    fontFamily: Press Start 2P
    fontWeight: 400
  body:
    fontFamily: Press Start 2P
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "10px 10px 0 #000000"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "5px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# 8-bit pixel art

A motion-graphics design system from RasanAI's style library (Retro & eras). Also known as NES style, chiptune aesthetic, retro game, pixel game UI.

## Overview

Chunky pixel icons, blocky arcade type and hard square shadows on a flat sky-blue, tiled like a game menu.

It feels playful, nostalgic, gamey. Use it for game launches, gamified product features, kids' and edtech, achievement moments.

## Visual language

- **Type:** Press Start 2P (display, weight 400, uppercase, tracking 0em) with Press Start 2P for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 5px solid in ink.
- **Depth:** hard shadows (`10px 10px 0 #000000`).
- **Texture:** none; clean fills. **Icons:** pixel. **Decoration:** none.

## Motion

Motion language: **Choppy / Stepped**. No interpolation as an aesthetic: elements jump between a few discrete positions or cut instantly.
- Enter `steps(4)`, exit `steps(3)`, move `steps(6)`; durations 100 / 160 / 250 / 400 / 600 ms; stagger 60 ms; hold at least 500 ms.
- Never: fade-up-slide, fade-slide, blur-in, bounce, overshoot, opacity-only-entrance.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Pixel Art
- **Era / design-movement influence:** 1980s
- **Illustration style:** Pixel Art
- **Typography:** Pixel Type
- **Texture:** Pixelation
- **Color treatment:** Primary Colors
- **Production technique:** Frame-by-Frame Animation
- **Motion language:** Choppy / Stepped
- **Transition language:** Pixel Dissolve, Hard Cut

## Do's and Don'ts

- Do keep the accent (#e45c10) for the single most important element in each frame.
- Do use Press Start 2P large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not Game Boy: 8-bit is full NES colour; Game Boy is four shades of green.

## References

- Search: "8-bit pixel art animation"
- Search: "retro game UI motion graphics"
- Search: "NES style explainer"
