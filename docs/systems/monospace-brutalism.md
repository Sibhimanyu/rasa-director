---
name: "Monospace brutalism"
description: "Everything in monospace: white page, square black-bordered terminal, one safety-orange offset shadow, grid paper underneath."
colors:
  canvas: "#fafafa"        # page ground
  ink: "#0a0a0a"           # headlines and body text
  accent: "#ff5f00"        # primary accent: the one thing that matters in each frame
  support: "#0a0a0a"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#6f6f6f"         # muted captions
typography:
  display:
    fontFamily: IBM Plex Mono
    fontWeight: 700
  body:
    fontFamily: IBM Plex Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "10px 10px 0 #0a0a0a"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Monospace brutalism

A motion-graphics design system from Rasa Director's style library (Bold & graphic). Also known as terminal brutalism, dev brutalism, mono brutalist, hacker-zine UI.

## Overview

Everything in monospace: white page, square black-bordered terminal, one safety-orange offset shadow, grid paper underneath.

It feels technical, blunt, nerdy, honest. Use it for developer tools, CLI and API launches, open-source announcements, changelogs.

## Visual language

- **Type:** IBM Plex Mono (display, weight 700, tracking -0.02em) with IBM Plex Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 3px solid in ink.
- **Depth:** hard shadows (`10px 10px 0 #0a0a0a`).
- **Texture:** grid. **Icons:** glyph. **Decoration:** none.

## Motion

Motion language: **Mechanical**. Motion driven as if by motors, gears and belts: constant velocity segments with abrupt, rigid starts and stops.
- Enter `none`, exit `none`, move `power1.inOut`; durations 150 / 250 / 400 / 600 / 900 ms; stagger 100 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: type.

## The terms that define it

- **Visual style / art direction:** Brutalism, Technical Minimalism
- **UI treatment:** Terminal / Code UI, Neo-Brutalist UI
- **Typography:** Monospace
- **Line / stroke language:** Heavy
- **Shadow / depth cues:** Hard Shadow
- **Texture:** Clean / No Texture
- **Color treatment:** Limited Palette, Light UI
- **Motion language:** Mechanical
- **Transition language:** Hard Cut
- **UI interaction motion:** Typing, Streaming Text

## Do's and Don'ts

- Do keep the accent (#ff5f00) for the single most important element in each frame.
- Do use IBM Plex Mono large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not retro terminal: no green phosphor or CRT; it is a modern, stark print-like page in mono type.

## References

- Search: "monospace brutalist design"
- Search: "terminal brutalism animation"
- Search: "developer tool launch video mono"
