---
name: "Industrial mecha UI"
description: "Warning-yellow blocks and hard offset shadows on gunmetal, condensed heavy caps, warning glyphs and stamped numerals that slam into place."
colors:
  canvas: "#1a1a1a"        # page ground
  ink: "#f5f5f0"           # headlines and body text
  accent: "#ffcc00"        # primary accent: the one thing that matters in each frame
  support: "#ff4d00"       # supporting colour, used sparingly
  surface: "#262626"       # raised cards and panels
  muted: "#9a9a92"         # muted captions
typography:
  display:
    fontFamily: Big Shoulders Display
    fontWeight: 900
  body:
    fontFamily: Barlow Condensed
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "10px 10px 0 #f5f5f0"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px solid {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Industrial mecha UI

A motion-graphics design system from RasanAI's style library (Futuristic & tech). Also known as mecha interface, Evangelion UI, hazard-stripe UI, industrial sci-fi.

## Overview

Warning-yellow blocks and hard offset shadows on gunmetal, condensed heavy caps, warning glyphs and stamped numerals that slam into place.

It feels heavy, urgent, mechanical. Use it for game trailers, robotics and industrial tech, sports and hype edits, anime-style openers.

## Visual language

- **Type:** Big Shoulders Display (display, weight 900, uppercase, tracking 0.02em) with Barlow Condensed for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 3px solid in accent.
- **Depth:** hard shadows (`10px 10px 0 #f5f5f0`).
- **Texture:** halftone. **Icons:** glyph. **Decoration:** rules.

## Motion

Motion language: **Heavy**. Motion that communicates large mass: slow to start, accelerating under gravity, landing with impact and minimal rebound.
- Enter `power4.in`, exit `power3.in`, move `power3.inOut`; durations 120 / 250 / 450 / 800 / 1200 ms; stagger 120 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, blur-in, opacity-only-entrance.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Sci-Fi / HUD, Brutalism
- **UI treatment:** Futuristic UI / FUI, Oversized UI
- **Color treatment:** High Contrast, Limited Palette
- **Shape language:** Angular, Rectilinear
- **Typography:** Condensed, Display Typography
- **Shadow / depth cues:** Hard Shadow
- **Motion language:** Heavy
- **Transition language:** Hard Cut, Flash Transition
- **Emotional / brand tone:** Bold, Urgent

## Do's and Don'ts

- Do keep the accent (#ffcc00) for the single most important element in each frame.
- Do use Big Shoulders Display large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not sci-fi HUD: this is heavy, blocky and industrial; no thin glowing lines.

## References

- Search: "Evangelion UI motion graphics"
- Search: "mecha interface design animation"
- Search: "hazard stripe HUD"
