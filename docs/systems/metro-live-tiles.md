---
name: "Metro live tiles"
description: "Flat square tiles in cobalt, teal and magenta on black, big lowercase Segoe-style type flush left, no shadows, gradients or rounded corners."
colors:
  canvas: "#0a0a0a"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#00aba9"        # primary accent: the one thing that matters in each frame
  support: "#d80073"       # supporting colour, used sparingly
  surface: "#0050ef"       # raised cards and panels
  muted: "#a6a6a6"         # muted captions
typography:
  display:
    fontFamily: Open Sans
    fontWeight: 300
  body:
    fontFamily: Open Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Metro live tiles

A motion-graphics design system from RasanAI's style library (Interface). Also known as Windows Phone Metro, Modern UI, Windows 8 Start screen, live tiles.

## Overview

Flat square tiles in cobalt, teal and magenta on black, big lowercase Segoe-style type flush left, no shadows, gradients or rounded corners.

It feels crisp, confident, modern. Use it for platform and OS launches, sports and media apps, early-2010s nostalgia.

## Visual language

- **Type:** Open Sans (display, weight 300, lowercase, tracking -0.03em) with Open Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Corporate Flat, Swiss / International Typographic Style
- **Era / design-movement influence:** Flat Design
- **UI treatment:** Flat UI, Bento UI, Full-Screen UI
- **Composition / layout system:** Modular Grid
- **Color treatment:** Color Blocking, Dark UI
- **Typography:** Humanist Sans
- **Shape language:** Rectilinear
- **Shadow / depth cues:** No Shadow
- **Motion language:** Snappy
- **Transition language:** Slide, Card Flip

## Do's and Don'ts

- Do keep the accent (#00aba9) for the single most important element in each frame.
- Do use Open Sans large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not Material You: hard square tiles in saturated solids with lowercase headlines, not rounded tonal containers.

## References

- Search: "metro UI live tiles animation"
- Search: "windows phone metro design motion"
- Search: "windows 8 start screen aesthetic"
