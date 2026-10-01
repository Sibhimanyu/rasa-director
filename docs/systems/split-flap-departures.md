---
name: "Split-flap departure board"
description: "Black flap tiles with white mono characters, times and destinations in rows, amber highlight and status chips flicking over like a station board."
colors:
  canvas: "#111214"        # page ground
  ink: "#f2f2ee"           # headlines and body text
  accent: "#ffb000"        # primary accent: the one thing that matters in each frame
  support: "#3ec46d"       # supporting colour, used sparingly
  surface: "#1f2124"       # raised cards and panels
  muted: "#8a8d91"         # muted captions
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
  md: 4px
shadows:
  card: "inset 0 5px 12px rgba(0,0,0,0.22)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Split-flap departure board

A motion-graphics design system from RasanAI's style library (Place & wayfinding). Also known as Solari board, flip board, departure board, station board, flap display.

## Overview

Black flap tiles with white mono characters, times and destinations in rows, amber highlight and status chips flicking over like a station board.

It feels anticipatory, mechanical, travel-worn. Use it for launch countdowns, schedules and line-ups, travel and events, release notes.

## Visual language

- **Type:** Space Mono (display, weight 700, uppercase, tracking 0.02em) with Space Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 4px; outlines none.
- **Depth:** inset shadows (`inset 0 5px 12px rgba(0,0,0,0.22)`).
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Mechanical**. Motion driven as if by motors, gears and belts: constant velocity segments with abrupt, rigid starts and stops.
- Enter `none`, exit `none`, move `power1.inOut`; durations 150 / 250 / 400 / 600 / 900 ms; stagger 100 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Retro-Futurism, Technical Minimalism
- **Typography:** Monospace
- **Composition / layout system:** Modular Grid, Asymmetric Composition
- **Information / data visualization:** Table, Ranking List
- **Color treatment:** Dark UI, High Contrast
- **Shape language:** Rectilinear, Modular
- **Motion function:** Show State Change, Build Anticipation
- **Motion language:** Mechanical
- **Transition language:** Card Flip, Hard Cut
- **Sound + motion relationship:** Clicks
- **Emotional / brand tone:** Nostalgic, Energetic

## Do's and Don'ts

- Do keep the accent (#ffb000) for the single most important element in each frame.
- Do use Space Mono large and confident; one idea per frame.
- Do keep every shadow the same inset style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a financial terminal: rows of destinations and times on dark flap tiles, one amber row, the clack of a station board rather than a data screen.

## References

- Search: "split flap display animation"
- Search: "solari board motion graphics"
- Search: "departure board text effect"
