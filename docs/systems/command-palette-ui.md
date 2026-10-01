---
name: "Command-palette UI"
description: "A single floating search bar on a dim canvas, keystrokes typing in, results snapping into place beside key-cap glyphs."
colors:
  canvas: "#0b0b0d"        # page ground
  ink: "#ececef"           # headlines and body text
  accent: "#ff6363"        # primary accent: the one thing that matters in each frame
  support: "#f5a524"       # supporting colour, used sparingly
  surface: "#1c1c21"       # raised cards and panels
  muted: "#7a7a85"         # muted captions
typography:
  display:
    fontFamily: Inter
    fontWeight: 600
  body:
    fontFamily: Inter
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 16px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Command-palette UI

A motion-graphics design system from RasanAI's style library (Product & UI). Also known as ⌘K UI, Raycast style, spotlight search.

## Overview

A single floating search bar on a dim canvas, keystrokes typing in, results snapping into place beside key-cap glyphs.

It feels fast, expert, keyboard-first. Use it for productivity tools, developer tools, AI assistants.

## Visual language

- **Type:** Inter (display, weight 600, tracking -0.02em) with Inter for body text.
- **Surfaces:** flat fills, no gradients; corners 16px; outlines 1px solid in #34343c.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** glyph. **Decoration:** none.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: type.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism
- **UI treatment:** Command-Palette UI, Isolated-Component UI
- **UI interaction motion:** Command Palette, Keyboard Input, Keystroke Overlay, Search, Autocomplete
- **Product demonstration language:** Hands-Free Automated Demo
- **Typography:** Neo-Grotesk, Monospace
- **Color treatment:** Dark UI
- **Motion language:** Snappy
- **Transition language:** Hard Cut, Scale Transition

## Do's and Don'ts

- Do keep the accent (#ff6363) for the single most important element in each frame.
- Do use Inter large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.

## References

- Search: "command palette animation"
- Search: "raycast style launch video"
- Search: "cmd k ui motion"
