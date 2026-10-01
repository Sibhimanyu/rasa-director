---
name: "Dark neo-brutalism"
description: "Charcoal ground, bento tiles with thick white outlines and hard lime offset shadows, violet highlights, heavy grotesk."
colors:
  canvas: "#17171c"        # page ground
  ink: "#f4f4f4"           # headlines and body text
  accent: "#b4ff39"        # primary accent: the one thing that matters in each frame
  support: "#8b5cff"       # supporting colour, used sparingly
  surface: "#26262e"       # raised cards and panels
  muted: "#9a9aa6"         # muted captions
typography:
  display:
    fontFamily: Space Grotesk
    fontWeight: 700
  body:
    fontFamily: Space Grotesk
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 14px
shadows:
  card: "10px 10px 0 #f4f4f4"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "4px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Dark neo-brutalism

A motion-graphics design system from RasanAI's style library (Bold & graphic). Also known as neon neubrutalism, dark mode neo-brutal, night brutalism.

## Overview

Charcoal ground, bento tiles with thick white outlines and hard lime offset shadows, violet highlights, heavy grotesk.

It feels edgy, confident, techy, loud. Use it for dev and AI tools, crypto and fintech, gaming launches, dark-mode feature reveals.

## Visual language

- **Type:** Space Grotesk (display, weight 700, tracking -0.03em) with Space Grotesk for body text.
- **Surfaces:** flat fills, no gradients; corners 14px; outlines 4px solid in ink.
- **Depth:** hard shadows (`10px 10px 0 #f4f4f4`).
- **Texture:** none; clean fills. **Icons:** duotone. **Decoration:** none.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Neo-Brutalism, Playful Tech
- **UI treatment:** Neo-Brutalist UI, Bento UI
- **Color treatment:** Dark UI, Fluorescent
- **Line / stroke language:** Chunky
- **Shadow / depth cues:** Hard Shadow
- **Composition / layout system:** Bento Grid
- **Typography:** Grotesk
- **Motion language:** Snappy
- **Transition language:** Push, Hard Cut

## Do's and Don'ts

- Do keep the accent (#b4ff39) for the single most important element in each frame.
- Do use Space Grotesk large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not cyberpunk: flat solid shadows and thick outlines, no glow, gradients or HUD chrome.

## References

- Search: "dark mode neobrutalism"
- Search: "neo brutalist bento dark animation"
- Search: "lime hard shadow UI"
