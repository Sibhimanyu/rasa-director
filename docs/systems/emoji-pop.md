---
name: "Emoji pop"
description: "Glossy 3D emoji-like balls bouncing over lilac pill controls, soft glows, rounded geometric type, reactions popping in."
colors:
  canvas: "#ece6ff"        # page ground
  ink: "#221a44"           # headlines and body text
  accent: "#ffc629"        # primary accent: the one thing that matters in each frame
  support: "#ff5c8a"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#8a80b0"         # muted captions
typography:
  display:
    fontFamily: Sora
    fontWeight: 800
  body:
    fontFamily: Sora
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 999px
shadows:
  card: "0 0 24px #ffc629"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Emoji pop

A motion-graphics design system from Rasa Director's style library (Playful & pop). Also known as 3D emoji style, emoji UI, glossy emoji, reaction pop.

## Overview

Glossy 3D emoji-like balls bouncing over lilac pill controls, soft glows, rounded geometric type, reactions popping in.

It feels expressive, social, light, fun. Use it for social and messaging apps, creator tools, reaction features, short-form promos.

## Visual language

- **Type:** Sora (display, weight 800, tracking -0.03em) with Sora for body text.
- **Surfaces:** flat fills, no gradients; corners fully rounded (pills); outlines none.
- **Depth:** glow shadows (`0 0 24px #ffc629`).
- **Texture:** none; clean fills. **Icons:** emoji3d. **Decoration:** none.

## Motion

Motion language: **Bouncy**. Objects fall or travel to a boundary and rebound off it in decaying hops, never passing through the target.
- Enter `bounce.out`, exit `back.in(1.7)`, move `bounce.out`; durations 100 / 200 / 350 / 600 / 900 ms; stagger 60 ms; hold at least 700 ms.
- Never: fade-up-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: bounce.

## The terms that define it

- **Visual style / art direction:** Glossy 3D, Playful Tech
- **Iconography:** Emoji-Like Icons
- **UI treatment:** Isolated-Component UI, Flat UI
- **Shape language:** Pill-Shaped
- **Shadow / depth cues:** Glow Instead of Shadow
- **Color treatment:** Pastel, High Saturation
- **Motion language:** Bouncy
- **UI interaction motion:** Click, Notification
- **Transition language:** Scale Transition

## Do's and Don'ts

- Do keep the accent (#ffc629) for the single most important element in each frame.
- Do use Sora large and confident; one idea per frame.
- Do keep every shadow the same glow style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not toy-like 3D: only the emoji are 3D; the UI stays flat and light.

## References

- Search: "3D emoji animation"
- Search: "emoji reactions motion graphics"
- Search: "glossy emoji pop UI"
