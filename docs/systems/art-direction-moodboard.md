---
name: "Art-direction moodboard"
description: "Photos, swatches and a serif title card pinned edge to edge on a warm grey board, camel and olive tones, soft lifted shadows."
colors:
  canvas: "#e3ded5"        # page ground
  ink: "#23201c"           # headlines and body text
  accent: "#a3866a"        # primary accent: the one thing that matters in each frame
  support: "#56604c"       # supporting colour, used sparingly
  surface: "#faf7f1"       # raised cards and panels
  muted: "#7d766b"         # muted captions
typography:
  display:
    fontFamily: Instrument Serif
    fontWeight: 400
  body:
    fontFamily: Inter
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "0 40px 70px -16px rgba(0,0,0,0.3)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Art-direction moodboard

A motion-graphics design system from Rasa Director's style library (Editorial & print). Also known as mood board, inspiration board, creative direction board, lookbook board.

## Overview

Photos, swatches and a serif title card pinned edge to edge on a warm grey board, camel and olive tones, soft lifted shadows.

It feels curated, tasteful, exploratory. Use it for creative pitches, brand direction reveals, fashion and interiors, agency reels.

## Visual language

- **Type:** Instrument Serif (display, weight 400, tracking -0.02em) with Inter for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** float shadows (`0 40px 70px -16px rgba(0,0,0,0.3)`).
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Floating**. Elements hover and bob gently around a rest point, as if suspended in water or air.
- Enter `sine.out`, exit `sine.in`, move `sine.inOut`; durations 500 / 800 / 1200 / 1800 / 2600 ms; stagger 70 ms; hold at least 1500 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Editorial, Mixed-Media Collage
- **Composition / layout system:** Collage Composition, Layered Depth
- **Typography:** Editorial Serif, Neutral Sans Serif
- **Photo / video integration:** Photo Cutout, Masked Photography
- **Color treatment:** Earth Tones, Muted
- **Shadow / depth cues:** Floating Shadows
- **Motion language:** Floating
- **Camera language:** Top-Down, Parallax Camera
- **Transition language:** Slide, Crossfade
- **Emotional / brand tone:** Editorial, Premium

## Do's and Don'ts

- Do keep the accent (#a3866a) for the single most important element in each frame.
- Do use Instrument Serif large and confident; one idea per frame.
- Do keep every shadow the same float style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not scrapbook or zine: tidy, curated and photographic, with muted tones, no doodles or photocopy grit.

## References

- Search: "moodboard animation"
- Search: "creative direction board motion"
- Search: "fashion moodboard video"
