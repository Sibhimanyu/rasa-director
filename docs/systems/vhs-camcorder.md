---
name: "VHS camcorder"
description: "On-screen-display readouts like PLAY and a timestamp over dim tape footage, tracking scanlines, RGB split and glitch jumps."
colors:
  canvas: "#14171c"        # page ground
  ink: "#f4f4f0"           # headlines and body text
  accent: "#5cf2ff"        # primary accent: the one thing that matters in each frame
  support: "#ff4fa0"       # supporting colour, used sparingly
  surface: "#1f242b"       # raised cards and panels
  muted: "#9aa3ad"         # muted captions
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
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# VHS camcorder

A motion-graphics design system from RasanAI's style library (Retro & eras). Also known as VHS aesthetic, 90s home video, tape OSD, analog glitch.

## Overview

On-screen-display readouts like PLAY and a timestamp over dim tape footage, tracking scanlines, RGB split and glitch jumps.

It feels raw, nostalgic, intimate. Use it for music videos, recap and behind-the-scenes films, fashion, horror teasers.

## Visual language

- **Type:** VT323 (display, weight 400, uppercase, tracking 0.04em) with VT323 for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** scanlines. **Icons:** line. **Decoration:** crosshair.

## Motion

Motion language: **Glitchy**. Motion that simulates digital failure: horizontal slice offsets, RGB channel splits, flicker and frame skips.
- Enter `steps(5)`, exit `steps(3)`, move `steps(8)`; durations 60 / 100 / 160 / 250 / 400 ms; stagger 30 ms; hold at least 600 ms.
- Never: fade-up-slide, fade-slide, blur-in, bounce, overshoot, scale-pop.
- Preview entrance: glitch.

## The terms that define it

- **Visual style / art direction:** Documentary, Grunge
- **Era / design-movement influence:** 1990s, 1980s
- **Texture:** VHS, CRT Scanlines
- **VFX / compositing treatment:** VHS, RGB Split
- **Typography:** Monospace, Pixel Type
- **Photo / video integration:** Full-Bleed Footage
- **Motion language:** Glitchy
- **Transition language:** Glitch Transition, Hard Cut

## Do's and Don'ts

- Do keep the accent (#5cf2ff) for the single most important element in each frame.
- Do use VT323 large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not film grain cinema: this is consumer tape, with OSD text, colour bleed and tracking errors.

## References

- Search: "vhs camcorder overlay animation"
- Search: "vhs glitch motion graphics"
- Search: "90s home video effect"
