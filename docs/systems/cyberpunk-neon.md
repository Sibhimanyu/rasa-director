---
name: "Cyberpunk neon"
description: "Acid-yellow window chrome and red hard offsets on violet-black, angular Orbitron caps, scanlines and glitching cyber-deck panels."
colors:
  canvas: "#0a0a14"        # page ground
  ink: "#f7f7ff"           # headlines and body text
  accent: "#fcee0a"        # primary accent: the one thing that matters in each frame
  support: "#ff003c"       # supporting colour, used sparingly
  surface: "#16162a"       # raised cards and panels
  muted: "#8a8aa8"         # muted captions
typography:
  display:
    fontFamily: Orbitron
    fontWeight: 900
  body:
    fontFamily: Chakra Petch
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "10px 10px 0 #f7f7ff"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Cyberpunk neon

A motion-graphics design system from RasanAI's style library (Futuristic & tech). Also known as cyberpunk, Cyberpunk 2077 UI, cyber-deck, Night City, netrunner UI.

## Overview

Acid-yellow window chrome and red hard offsets on violet-black, angular Orbitron caps, scanlines and glitching cyber-deck panels.

It feels rebellious, electric, gritty. Use it for game and esports promos, music drops, crypto and fintech teasers, streetwear launches.

## Visual language

- **Type:** Orbitron (display, weight 900, uppercase, tracking 0.04em) with Chakra Petch for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 2px solid in accent.
- **Depth:** hard shadows (`10px 10px 0 #f7f7ff`).
- **Texture:** scanlines. **Icons:** glyph. **Decoration:** grid.

## Motion

Motion language: **Glitchy**. Motion that simulates digital failure: horizontal slice offsets, RGB channel splits, flicker and frame skips.
- Enter `steps(5)`, exit `steps(3)`, move `steps(8)`; durations 60 / 100 / 160 / 250 / 400 ms; stagger 30 ms; hold at least 600 ms.
- Never: fade-up-slide, fade-slide, blur-in, bounce, overshoot, scale-pop.
- Preview entrance: glitch.

## The terms that define it

- **Visual style / art direction:** Cyberpunk
- **UI treatment:** Stylized UI, Windowed UI
- **Color treatment:** Neon, Dark UI
- **Shape language:** Angular, Sharp
- **VFX / compositing treatment:** Glow, RGB Split, Noise
- **Typography:** Display Typography, Extended
- **Motion language:** Glitchy
- **Transition language:** Glitch Transition, Flash Transition
- **Emotional / brand tone:** Rebellious, Energetic
- **Shadow / depth cues:** Hard Shadow

## Do's and Don'ts

- Do keep the accent (#fcee0a) for the single most important element in each frame.
- Do use Orbitron large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not neo-noir neon: cyberpunk is acid yellow and red UI chrome, dense and aggressive, not moody pink glow in the rain.

## References

- Search: "cyberpunk UI motion graphics"
- Search: "neon cyberpunk title animation"
- Search: "Cyberpunk 2077 interface design"
