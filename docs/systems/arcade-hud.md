---
name: "Arcade game"
description: "Pixel-font score readouts and pixel hearts on a dark cabinet screen, magenta and lime HUD rings, scanlines and stepped motion."
colors:
  canvas: "#140c2e"        # page ground
  ink: "#f4f0ff"           # headlines and body text
  accent: "#ff3fd1"        # primary accent: the one thing that matters in each frame
  support: "#7dff5a"       # supporting colour, used sparingly
  surface: "#231748"       # raised cards and panels
  muted: "#9d8fd1"         # muted captions
typography:
  display:
    fontFamily: Press Start 2P
    fontWeight: 400
  body:
    fontFamily: VT323
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "4px solid {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Arcade game

A motion-graphics design system from RasanAI's style library (Playful & pop). Also known as 8-bit arcade, game HUD, retro game UI, pixel arcade.

## Overview

Pixel-font score readouts and pixel hearts on a dark cabinet screen, magenta and lime HUD rings, scanlines and stepped motion.

It feels competitive, nostalgic, punchy, gamey. Use it for game trailers, esports and streaming, gamified launches, leaderboard recaps.

## Visual language

- **Type:** Press Start 2P (display, weight 400, uppercase, tracking 0em) with VT323 for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 4px solid in accent.
- **Depth:** no shadows.
- **Texture:** scanlines. **Icons:** pixel. **Decoration:** none.

## Motion

Motion language: **Choppy / Stepped**. No interpolation as an aesthetic: elements jump between a few discrete positions or cut instantly.
- Enter `steps(4)`, exit `steps(3)`, move `steps(6)`; durations 100 / 160 / 250 / 400 / 600 ms; stagger 60 ms; hold at least 500 ms.
- Never: fade-up-slide, fade-slide, blur-in, bounce, overshoot, opacity-only-entrance.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Pixel Art, Playful Tech
- **Typography:** Pixel Type
- **Iconography:** Pictograms
- **Illustration style:** Pixel Art
- **Texture:** CRT Scanlines, Pixelation
- **Color treatment:** Neon, Dark UI
- **Motion language:** Choppy / Stepped
- **Transition language:** Pixel Dissolve, Hard Cut
- **Production technique:** Frame-by-Frame Animation

## Do's and Don'ts

- Do keep the accent (#ff3fd1) for the single most important element in each frame.
- Do use Press Start 2P large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not gamified UI: this is the look of the game screen itself, pixels and scanlines, not a modern app.

## References

- Search: "arcade HUD motion graphics"
- Search: "8-bit game UI animation"
- Search: "pixel score counter animation"
