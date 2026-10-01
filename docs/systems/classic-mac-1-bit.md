---
name: "Classic Mac 1-bit"
description: "Pure black-and-white 1-bit desktop: dithered grey pattern, square windows with hard black drop shadows, bitmap type."
colors:
  canvas: "#e6e6e6"        # page ground
  ink: "#000000"           # headlines and body text
  accent: "#ffffff"        # primary accent: the one thing that matters in each frame
  support: "#000000"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#555555"         # muted captions
typography:
  display:
    fontFamily: Silkscreen
    fontWeight: 700
  body:
    fontFamily: Pixelify Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 6px
shadows:
  card: "10px 10px 0 #000000"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Classic Mac 1-bit

A motion-graphics design system from RasanAI's style library (Retro & eras). Also known as System 1 Mac, 1984 Macintosh, black-and-white GUI, MacPaint style.

## Overview

Pure black-and-white 1-bit desktop: dithered grey pattern, square windows with hard black drop shadows, bitmap type.

It feels nostalgic, crafty, honest. Use it for indie software launches, writing and creative tools, retro brand stings.

## Visual language

- **Type:** Silkscreen (display, weight 700, tracking 0em) with Pixelify Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 6px; outlines 3px solid in ink.
- **Depth:** hard shadows (`10px 10px 0 #000000`).
- **Texture:** dots. **Icons:** pixel. **Decoration:** none.

## Motion

Motion language: **Choppy / Stepped**. No interpolation as an aesthetic: elements jump between a few discrete positions or cut instantly.
- Enter `steps(4)`, exit `steps(3)`, move `steps(6)`; durations 100 / 160 / 250 / 400 / 600 ms; stagger 60 ms; hold at least 500 ms.
- Never: fade-up-slide, fade-slide, blur-in, bounce, overshoot, opacity-only-entrance.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Pixel Art, Monochrome
- **Era / design-movement influence:** Early Desktop Computing, Retro Operating Systems
- **UI treatment:** Retro UI, Windowed UI
- **Color treatment:** Black and White
- **Texture:** Pixelation
- **Typography:** Pixel Type
- **Shadow / depth cues:** Hard Shadow
- **Motion language:** Choppy / Stepped
- **Transition language:** Hard Cut, Pixel Dissolve

## Do's and Don'ts

- Do keep the accent (#ffffff) for the single most important element in each frame.
- Do use Silkscreen large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not Windows 95: no colour and no bevels; every pixel is black or white and depth is a hard drop shadow.

## References

- Search: "classic macintosh 1 bit animation"
- Search: "system 1 mac UI motion"
- Search: "1-bit dithered interface"
