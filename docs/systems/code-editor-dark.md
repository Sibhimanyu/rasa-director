---
name: "Code editor dark theme"
description: "A floating dark-theme code window with pink, green and violet syntax highlighting, ligature mono type and lines typing themselves out."
colors:
  canvas: "#15161e"        # page ground
  ink: "#f8f8f2"           # headlines and body text
  accent: "#ff79c6"        # primary accent: the one thing that matters in each frame
  support: "#50fa7b"       # supporting colour, used sparingly
  surface: "#282a36"       # raised cards and panels
  muted: "#8a8fb5"         # muted captions
typography:
  display:
    fontFamily: Fira Code
    fontWeight: 600
  body:
    fontFamily: Fira Code
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 14px
shadows:
  card: "0 40px 70px -16px rgba(0,0,0,0.3)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Code editor dark theme

A motion-graphics design system from RasanAI's style library (Futuristic & tech). Also known as IDE aesthetic, Dracula theme, syntax-highlighted code, dev-mode UI.

## Overview

A floating dark-theme code window with pink, green and violet syntax highlighting, ligature mono type and lines typing themselves out.

It feels nerdy, crafted, confident. Use it for developer tools and APIs, SDK and CLI launches, coding tutorials, hackathon promos.

## Visual language

- **Type:** Fira Code (display, weight 600, tracking -0.02em) with Fira Code for body text.
- **Surfaces:** flat fills, no gradients; corners 14px; outlines none.
- **Depth:** float shadows (`0 40px 70px -16px rgba(0,0,0,0.3)`).
- **Texture:** none; clean fills. **Icons:** glyph. **Decoration:** none.

## Motion

Motion language: **Linear**. Constant-speed interpolation from start to end with no acceleration or deceleration.
- Enter `none`, exit `none`, move `none`; durations 200 / 400 / 700 / 1000 / 1600 ms; stagger 100 ms; hold at least 800 ms.
- Never: fade-up-slide, bounce, overshoot, blur-in, scale-pop.
- Preview entrance: type.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism, Futuristic Tech
- **UI treatment:** Terminal / Code UI, Windowed UI
- **Color treatment:** Dark UI, High Saturation
- **Typography:** Monospace
- **Shadow / depth cues:** Floating Shadows
- **UI interaction motion:** Typing, Autocomplete
- **Product demonstration language:** Recreated Interface
- **Motion language:** Linear
- **Transition language:** Hard Cut, Zoom Transition

## Do's and Don'ts

- Do keep the accent (#ff79c6) for the single most important element in each frame.
- Do use Fira Code large and confident; one idea per frame.
- Do keep every shadow the same float style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a retro green-screen terminal: it is a modern editor theme, colorful syntax on soft dark, no CRT nostalgia.

## References

- Search: "code typing animation dark theme"
- Search: "syntax highlight motion graphics"
- Search: "developer tool launch video code"
