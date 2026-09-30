---
name: "Financial terminal"
description: "Amber and green monospace figures on black, dense tables and ticker lines, faint scanlines, zero decoration."
colors:
  canvas: "#000000"        # page ground
  ink: "#ffb000"           # headlines and body text
  accent: "#33ff99"        # primary accent: the one thing that matters in each frame
  support: "#ff4d4d"       # supporting colour, used sparingly
  surface: "#140f02"       # raised cards and panels
  muted: "#a07000"         # muted captions
typography:
  display:
    fontFamily: IBM Plex Mono
    fontWeight: 600
  body:
    fontFamily: IBM Plex Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Financial terminal

A motion-graphics design system from Rasa Director's style library (Data & explainers). Also known as Bloomberg terminal look, ticker terminal, market data screen.

## Overview

Amber and green monospace figures on black, dense tables and ticker lines, faint scanlines, zero decoration.

It feels serious, dense, expert. Use it for markets and trading, finance news, crypto and data products.

## Visual language

- **Type:** IBM Plex Mono (display, weight 600, uppercase, tracking 0.02em) with IBM Plex Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 2px solid in #6b4a00.
- **Depth:** no shadows.
- **Texture:** crt. **Icons:** glyph. **Decoration:** none.

## Motion

Motion language: **Mechanical**. Motion driven as if by motors, gears and belts: constant velocity segments with abrupt, rigid starts and stops.
- Enter `none`, exit `none`, move `power1.inOut`; durations 150 / 250 / 400 / 600 / 900 ms; stagger 100 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Monochrome, Retro-Futurism
- **UI treatment:** Terminal / Code UI, Dashboard UI
- **Information / data visualization:** Table, Line Graph, Number Counter
- **Typography:** Monospace
- **Color treatment:** Dark UI, High Contrast
- **Texture:** CRT Scanlines
- **Format / purpose:** News Graphics, Data Visualization
- **Motion language:** Mechanical
- **Transition language:** Hard Cut

## Do's and Don'ts

- Do keep the accent (#33ff99) for the single most important element in each frame.
- Do use IBM Plex Mono large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not terminal product demo: dense amber market data, not a sparse modern CLI.

## References

- Search: "bloomberg terminal style animation"
- Search: "stock ticker motion graphics"
- Search: "financial data terminal"
