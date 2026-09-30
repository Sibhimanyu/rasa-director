---
name: "Glitch digital"
description: "Black panels torn by cyan and magenta RGB-split offsets, pixel icons and digital noise; frames stutter, slice and jump."
colors:
  canvas: "#000000"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#00ffea"        # primary accent: the one thing that matters in each frame
  support: "#ff00c8"       # supporting colour, used sparingly
  surface: "#111111"       # raised cards and panels
  muted: "#8a8a8a"         # muted captions
typography:
  display:
    fontFamily: Space Mono
    fontWeight: 700
  body:
    fontFamily: Space Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "7px 7px 0 #00ffea, 14px 14px 0 #ffffff"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Glitch digital

A motion-graphics design system from Rasa Director's style library (Futuristic & tech). Also known as glitch art, datamosh, RGB split, corrupted UI, error aesthetic.

## Overview

Black panels torn by cyan and magenta RGB-split offsets, pixel icons and digital noise; frames stutter, slice and jump.

It feels disruptive, edgy, raw. Use it for music and club promos, security and hacking stories, teasers, fashion drops.

## Visual language

- **Type:** Space Mono (display, weight 700, uppercase, tracking 0em) with Space Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 2px solid in ink.
- **Depth:** layered shadows (`7px 7px 0 #00ffea, 14px 14px 0 #ffffff`).
- **Texture:** noise. **Icons:** pixel. **Decoration:** none.

## Motion

Motion language: **Glitchy**. Motion that simulates digital failure: horizontal slice offsets, RGB channel splits, flicker and frame skips.
- Enter `steps(5)`, exit `steps(3)`, move `steps(8)`; durations 60 / 100 / 160 / 250 / 400 ms; stagger 30 ms; hold at least 600 ms.
- Never: fade-up-slide, fade-slide, blur-in, bounce, overshoot, scale-pop.
- Preview entrance: glitch.

## The terms that define it

- **Visual style / art direction:** Acid Graphics, Futuristic Tech
- **UI treatment:** Deconstructed UI, Floating-Card UI
- **Color treatment:** Black and White, High Contrast
- **VFX / compositing treatment:** Glitch, RGB Split, Noise
- **Texture:** Glitch Texture, Pixelation
- **Typography:** Monospace, Distorted Type
- **Motion language:** Glitchy
- **Transition language:** Glitch Transition, Pixel Dissolve, Hard Cut

## Do's and Don'ts

- Do keep the accent (#00ffea) for the single most important element in each frame.
- Do use Space Mono large and confident; one idea per frame.
- Do keep every shadow the same layered style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not VHS retro: glitch is digital corruption (pixels, RGB offsets), not analog tape wobble.

## References

- Search: "glitch transition motion graphics"
- Search: "RGB split glitch typography"
- Search: "datamosh UI animation"
