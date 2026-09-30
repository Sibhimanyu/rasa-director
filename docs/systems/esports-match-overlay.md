---
name: "Esports match overlay"
description: "A hard split between deep-navy blue side and signal-red red side, angular techno caps crossing the seam, instant snaps."
colors:
  canvas: "#0a1428"        # page ground
  ink: "#eef1f6"           # headlines and body text
  accent: "#ff4655"        # primary accent: the one thing that matters in each frame
  support: "#0bc4e3"       # supporting colour, used sparingly
  surface: "#13233f"       # raised cards and panels
  muted: "#8a9ab5"         # muted captions
typography:
  display:
    fontFamily: Tomorrow
    fontWeight: 700
  body:
    fontFamily: Barlow
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "4px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Esports match overlay

A motion-graphics design system from Rasa Director's style library (Broadcast). Also known as esports tournament graphics, versus screen, team vs team overlay, match intro.

## Overview

A hard split between deep-navy blue side and signal-red red side, angular techno caps crossing the seam, instant snaps.

It feels competitive, charged, sharp. Use it for esports and gaming, head-to-head comparisons, tournament promos, launch versus moments.

## Visual language

- **Type:** Tomorrow (display, weight 700, uppercase, tracking 0.01em) with Barlow for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 4px solid in ink.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Futuristic Tech, Abstract Geometric
- **Format / purpose:** Sports Graphics, Broadcast Package
- **Composition / layout system:** Split Screen
- **Typography:** Display Typography, Geometric Sans
- **Color treatment:** Dark UI, Complementary
- **Shape language:** Angular, Sharp
- **Narrative structure:** Comparison
- **Motion language:** Snappy
- **Pacing / rhythm:** Hyper-Fast
- **Transition language:** Wipe, Shape Match

## Do's and Don'ts

- Do keep the accent (#ff4655) for the single most important element in each frame.
- Do use Tomorrow large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a cyberpunk neon look: flat team colours and a hard versus split, no glow, rain or city lights.

## References

- Search: "esports match overlay graphics"
- Search: "versus screen animation"
- Search: "esports tournament broadcast package"
