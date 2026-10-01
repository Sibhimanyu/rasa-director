---
name: "Techno-thriller screen graphics"
description: "A terminal in a dark room: cold white monospace typing, one alarm-red prompt, faint noise and cuts timed like a heist."
colors:
  canvas: "#080a0b"        # page ground
  ink: "#e4e8e6"           # headlines and body text
  accent: "#e5383b"        # primary accent: the one thing that matters in each frame
  support: "#3ddc84"       # supporting colour, used sparingly
  surface: "#111617"       # raised cards and panels
  muted: "#6f7a76"         # muted captions
typography:
  display:
    fontFamily: JetBrains Mono
    fontWeight: 600
  body:
    fontFamily: JetBrains Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 6px
shadows:
  card: "0 40px 70px -16px rgba(0,0,0,0.3)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Techno-thriller screen graphics

A motion-graphics design system from RasanAI's style library (Cinematic & atmospheric). Also known as hacker film UI, Mr. Robot style, cyber-thriller terminal, screen graphics.

## Overview

A terminal in a dark room: cold white monospace typing, one alarm-red prompt, faint noise and cuts timed like a heist.

It feels tense, clandestine, precise. Use it for security and devtools, cyber products, thriller teasers, AI agent demos.

## Visual language

- **Type:** JetBrains Mono (display, weight 600, tracking -0.02em) with JetBrains Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 6px; outlines 1px solid in #26302e.
- **Depth:** float shadows (`0 40px 70px -16px rgba(0,0,0,0.3)`).
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Mechanical**. Motion driven as if by motors, gears and belts: constant velocity segments with abrupt, rigid starts and stops.
- Enter `none`, exit `none`, move `power1.inOut`; durations 150 / 250 / 400 / 600 / 900 ms; stagger 100 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: type.

## The terms that define it

- **Visual style / art direction:** Cinematic, Technical Minimalism
- **UI treatment:** Terminal / Code UI
- **Typography:** Monospace
- **UI interaction motion:** Typing, Streaming Text
- **Color treatment:** Dark UI, Accent-Color System
- **Texture:** Digital Noise
- **Motion language:** Mechanical
- **Pacing / rhythm:** Staccato
- **Transition language:** Hard Cut, Glitch Transition
- **Emotional / brand tone:** Mysterious, Technical

## Do's and Don'ts

- Do keep the accent (#e5383b) for the single most important element in each frame.
- Do use JetBrains Mono large and confident; one idea per frame.
- Do keep every shadow the same float style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not the green-screen hacker terminal: cold white type and a red alarm accent, no phosphor glow or CRT; shot like a film insert.

## References

- Search: "hacker movie screen graphics"
- Search: "mr robot terminal animation"
- Search: "techno thriller ui motion"
