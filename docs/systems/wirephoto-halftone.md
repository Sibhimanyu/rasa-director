---
name: "Wirephoto halftone"
description: "One coarse-screen halftone press photo in black on grey newsprint, a typed wire caption strip and a bold grotesk slug above it."
colors:
  canvas: "#e6e2d8"        # page ground
  ink: "#141414"           # headlines and body text
  accent: "#2b2b2b"        # primary accent: the one thing that matters in each frame
  support: "#8d8a83"       # supporting colour, used sparingly
  surface: "#f1eee6"       # raised cards and panels
  muted: "#5f5c56"         # muted captions
typography:
  display:
    fontFamily: Libre Franklin
    fontWeight: 900
  body:
    fontFamily: Courier Prime
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Wirephoto halftone

A motion-graphics design system from Rasa Director's style library (Print). Also known as wirephoto, newspaper halftone photo, coarse halftone, photo engraving, press photo.

## Overview

One coarse-screen halftone press photo in black on grey newsprint, a typed wire caption strip and a bold grotesk slug above it.

It feels documentary, urgent, stark. Use it for documentary and history films, journalism and podcasts, anniversary and archive stories, PR announcements.

## Visual language

- **Type:** Libre Franklin (display, weight 900, tracking -0.03em) with Courier Prime for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 1px solid in ink.
- **Depth:** no shadows.
- **Texture:** halftone. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Mechanical**. Motion driven as if by motors, gears and belts: constant velocity segments with abrupt, rigid starts and stops.
- Enter `none`, exit `none`, move `power1.inOut`; durations 150 / 250 / 400 / 600 / 900 ms; stagger 100 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Halftone, Documentary
- **Color treatment:** Grayscale, High Contrast
- **Photo / video integration:** Documentary Footage, Ken Burns Effect
- **Material / surface language:** Newsprint
- **Texture:** Halftone, Print Grain
- **Typography:** Grotesk, Monospace
- **Color grade:** High-Contrast Black and White
- **Motion language:** Mechanical
- **Transition language:** Hard Cut, Push
- **Emotional / brand tone:** Serious, Editorial

## Do's and Don'ts

- Do keep the accent (#2b2b2b) for the single most important element in each frame.
- Do use Libre Franklin large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not the newspaper broadsheet: no columns or masthead; one big dotted photograph and its wire caption carry the frame.

## References

- Search: "halftone photo animation"
- Search: "wirephoto newspaper motion graphics"
- Search: "coarse halftone dot photo effect"
