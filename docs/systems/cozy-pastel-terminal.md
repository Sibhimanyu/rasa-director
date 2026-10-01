---
name: "Cozy pastel terminal"
description: "A rounded latte-toned terminal window with lavender and sage syntax colours, soft shadow, rounded mono type, typed line by line."
colors:
  canvas: "#dce0e8"        # page ground
  ink: "#4c4f69"           # headlines and body text
  accent: "#8839ef"        # primary accent: the one thing that matters in each frame
  support: "#40a02b"       # supporting colour, used sparingly
  surface: "#eff1f5"       # raised cards and panels
  muted: "#8c8fa1"         # muted captions
typography:
  display:
    fontFamily: Lexend
    fontWeight: 600
  body:
    fontFamily: Lexend
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 22px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Cozy pastel terminal

A motion-graphics design system from RasanAI's style library (Soft & tactile). Also known as Catppuccin style, soft dev tool, pastel code editor, cozy CLI.

## Overview

A rounded latte-toned terminal window with lavender and sage syntax colours, soft shadow, rounded mono type, typed line by line.

It feels cosy, friendly, nerdy. Use it for developer tool launches, CLI demos, open-source release videos, API walkthroughs.

## Visual language

- **Type:** Lexend (display, weight 600, tracking -0.02em) with Lexend for body text.
- **Surfaces:** flat fills, no gradients; corners 22px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: type.

## The terms that define it

- **Visual style / art direction:** Playful Tech, Clean Minimalism
- **UI treatment:** Terminal / Code UI, Windowed UI
- **Typography:** Monospace, Rounded Sans
- **Color treatment:** Pastel, Light UI
- **Shadow / depth cues:** Soft Diffuse Shadow
- **UI interaction motion:** Typing, Streaming Text
- **Motion language:** Precise
- **Transition language:** Slide, Crossfade

## Do's and Don'ts

- Do keep the accent (#8839ef) for the single most important element in each frame.
- Do use Lexend large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a hacker terminal: light, pastel and rounded, with no green-on-black, scanlines or glitch.

## References

- Search: "catppuccin terminal animation"
- Search: "pastel terminal CLI demo video"
- Search: "soft developer tool motion"
