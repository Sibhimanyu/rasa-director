---
name: "Oversized UI"
description: "A single toggle, cursor or button blown up to poster scale on a saturated field, filling the frame like a graphic shape."
colors:
  canvas: "#2b4bff"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#d6ff3d"        # primary accent: the one thing that matters in each frame
  support: "#ff6bd6"       # supporting colour, used sparingly
  surface: "#0f1f8a"       # raised cards and panels
  muted: "#c7d0ff"         # muted captions
typography:
  display:
    fontFamily: Archivo
    fontWeight: 900
  body:
    fontFamily: Archivo
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 999px
shadows:
  card: "10px 10px 0 #ffffff"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Oversized UI

A motion-graphics design system from RasanAI's style library (Product & UI). Also known as giant UI, macro UI, big button graphics.

## Overview

A single toggle, cursor or button blown up to poster scale on a saturated field, filling the frame like a graphic shape.

It feels bold, witty, punchy. Use it for social ads, feature teasers, launch stings.

## Visual language

- **Type:** Archivo (display, weight 900, tracking -0.05em) with Archivo for body text.
- **Surfaces:** flat fills, no gradients; corners fully rounded (pills); outlines none.
- **Depth:** hard shadows (`10px 10px 0 #ffffff`).
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Bouncy**. Objects fall or travel to a boundary and rebound off it in decaying hops, never passing through the target.
- Enter `bounce.out`, exit `back.in(1.7)`, move `bounce.out`; durations 100 / 200 / 350 / 600 / 900 ms; stagger 60 ms; hold at least 700 ms.
- Never: fade-up-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: bounce.

## The terms that define it

- **Visual style / art direction:** Playful Tech
- **UI treatment:** Oversized UI, Isolated-Component UI
- **Composition / layout system:** Poster Composition, Single-Object Hero
- **Typography:** Display Typography
- **Color treatment:** Color Blocking, High Saturation
- **Shape language:** Pill-Shaped
- **UI interaction motion:** Toggle Switch, Click
- **Motion language:** Bouncy
- **Transition language:** Zoom Transition, Shape Match

## Do's and Don'ts

- Do keep the accent (#d6ff3d) for the single most important element in each frame.
- Do use Archivo large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not component spec close-up: scale is the joke here; the control becomes a poster graphic, not a measured detail.

## References

- Search: "oversized ui animation"
- Search: "giant button motion graphic"
- Search: "big ui elements social ad"
