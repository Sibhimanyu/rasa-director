---
name: "Duotone"
description: "Exactly two inks: electric blue and bubblegum pink, every shape, card and letter in one or the other, no third colour."
colors:
  canvas: "#1f2bff"        # page ground
  ink: "#ffb8dd"           # headlines and body text
  accent: "#ffb8dd"        # primary accent: the one thing that matters in each frame
  support: "#ffb8dd"       # supporting colour, used sparingly
  surface: "#1219b8"       # raised cards and panels
  muted: "#9aa0ff"         # muted captions
typography:
  display:
    fontFamily: Syne
    fontWeight: 800
  body:
    fontFamily: Syne
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 12px
shadows:
  card: "18px 18px 0 #ffb8dd"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Duotone

A motion-graphics design system from RasanAI's style library (Bold & graphic). Also known as two-colour graphic, Spotify duotone, duotone punch, two-ink.

## Overview

Exactly two inks: electric blue and bubblegum pink, every shape, card and letter in one or the other, no third colour.

It feels punchy, graphic, modern, bold. Use it for music and streaming, campaign social, year-in-review recaps, brand content.

## Visual language

- **Type:** Syne (display, weight 800, tracking -0.03em) with Syne for body text.
- **Surfaces:** flat fills, no gradients; corners 12px; outlines none.
- **Depth:** long shadows (`18px 18px 0 #ffb8dd`).
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Duotone
- **Color treatment:** Duotone, High Saturation
- **Typography:** Geometric Sans, Display Typography
- **Composition / layout system:** Floating Cards, Asymmetric Composition
- **Line / stroke language:** No Outlines
- **Shadow / depth cues:** Long Shadow
- **Motion language:** Snappy
- **Transition language:** Color Match, Slide

## Do's and Don'ts

- Do keep the accent (#ffb8dd) for the single most important element in each frame.
- Do use Syne large and confident; one idea per frame.
- Do keep every shadow the same long style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not gradient-heavy: the two colours never blend; each shape is one flat ink.

## References

- Search: "duotone motion graphics"
- Search: "two colour animation"
- Search: "Spotify wrapped duotone style"
