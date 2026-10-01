---
name: "Green-screen CRT terminal"
description: "Glowing phosphor-green monospace on black, curved-tube vignette, scanlines, a blinking block cursor typing line by line."
colors:
  canvas: "#030b04"        # page ground
  ink: "#39ff6a"           # headlines and body text
  accent: "#39ff6a"        # primary accent: the one thing that matters in each frame
  support: "#1a8f3a"       # supporting colour, used sparingly
  surface: "#061a0a"       # raised cards and panels
  muted: "#1f9c45"         # muted captions
typography:
  display:
    fontFamily: VT323
    fontWeight: 400
  body:
    fontFamily: VT323
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 18px
shadows:
  card: "0 0 24px #39ff6a"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Green-screen CRT terminal

A motion-graphics design system from RasanAI's style library (Retro & eras). Also known as phosphor terminal, hacker green, VT100, matrix terminal.

## Overview

Glowing phosphor-green monospace on black, curved-tube vignette, scanlines, a blinking block cursor typing line by line.

It feels technical, mysterious, nostalgic. Use it for developer tools and APIs, security products, hacker-themed teasers, AI agent demos.

## Visual language

- **Type:** VT323 (display, weight 400, uppercase, tracking 0.02em) with VT323 for body text.
- **Surfaces:** dark panels with lit accent edges; corners 18px; outlines 2px solid in accent.
- **Depth:** glow shadows (`0 0 24px #39ff6a`).
- **Texture:** crt. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Mechanical**. Motion driven as if by motors, gears and belts: constant velocity segments with abrupt, rigid starts and stops.
- Enter `none`, exit `none`, move `power1.inOut`; durations 150 / 250 / 400 / 600 / 900 ms; stagger 100 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: type.

## The terms that define it

- **Visual style / art direction:** Monochrome, Technical Minimalism
- **Era / design-movement influence:** Early Desktop Computing
- **UI treatment:** Terminal / Code UI, Retro UI
- **Typography:** Monospace
- **Texture:** CRT Scanlines
- **VFX / compositing treatment:** Glow, Scanlines
- **UI interaction motion:** Typing, Streaming Text
- **Motion language:** Mechanical
- **Transition language:** Hard Cut, Flash Transition

## Do's and Don'ts

- Do keep the accent (#39ff6a) for the single most important element in each frame.
- Do use VT323 large and confident; one idea per frame.
- Do keep every shadow the same glow style.
- Don't mix surface treatments; everything is neon.
- Don't confuse it: Not a modern terminal UI: the whole frame is the old tube, with glow, curvature and scanlines.

## References

- Search: "green crt terminal animation"
- Search: "phosphor terminal typing motion"
- Search: "retro hacker screen"
