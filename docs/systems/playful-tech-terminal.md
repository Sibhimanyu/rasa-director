---
name: "Playful tech"
description: "A rounded pastel terminal with thick violet outline and hard shadow, peach canvas, sparkles, friendly geometric mono type."
colors:
  canvas: "#ffe3d3"        # page ground
  ink: "#2a1650"           # headlines and body text
  accent: "#7b4dff"        # primary accent: the one thing that matters in each frame
  support: "#ff7eb6"       # supporting colour, used sparingly
  surface: "#fffaf5"       # raised cards and panels
  muted: "#8f7a9e"         # muted captions
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
  md: 28px
shadows:
  card: "10px 10px 0 #2a1650"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "4px solid {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Playful tech

A motion-graphics design system from Rasa Director's style library (Playful & pop). Also known as friendly dev tool, cute terminal, playful developer brand, candy CLI.

## Overview

A rounded pastel terminal with thick violet outline and hard shadow, peach canvas, sparkles, friendly geometric mono type.

It feels approachable, clever, nerdy-cute, light. Use it for developer tools with personality, API and CLI launches, AI agents, changelogs.

## Visual language

- **Type:** Space Mono (display, weight 700, tracking -0.02em) with Space Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 28px; outlines 4px solid in accent.
- **Depth:** hard shadows (`10px 10px 0 #2a1650`).
- **Texture:** none; clean fills. **Icons:** glyph. **Decoration:** stars.

## Motion

Motion language: **Playful**. Light, cheeky motion with small overshoots, tilts and secondary wiggles, playful in intent rather than in strict physics.
- Enter `back.out(1.7)`, exit `back.in(1.7)`, move `sine.inOut`; durations 160 / 280 / 450 / 700 / 1000 ms; stagger 40 ms; hold at least 600 ms.
- Never: fade-up-slide, linear-entrance, blur-in.
- Preview entrance: type.

## The terms that define it

- **Visual style / art direction:** Playful Tech, Neo-Brutalism
- **UI treatment:** Terminal / Code UI, Stylized UI
- **Typography:** Monospace, Rounded Sans
- **Line / stroke language:** Heavy
- **Shadow / depth cues:** Hard Shadow
- **Color treatment:** Pastel
- **Shape language:** Rounded
- **Motion language:** Playful
- **UI interaction motion:** Typing, Agent Step Sequence
- **Transition language:** Push, Scale Transition

## Do's and Don'ts

- Do keep the accent (#7b4dff) for the single most important element in each frame.
- Do use Space Mono large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not monospace brutalism: rounded, pastel and cheerful rather than stark and square.

## References

- Search: "playful developer tool animation"
- Search: "cute terminal motion design"
- Search: "friendly CLI launch video"
