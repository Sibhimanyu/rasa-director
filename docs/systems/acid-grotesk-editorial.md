---
name: "Contemporary grotesk editorial"
description: "Heavy uppercase grotesk in rounded modular tiles, pale grey page, black and one acid-lime tile; today's design-studio layout."
colors:
  canvas: "#e6e6e1"        # page ground
  ink: "#0e0e0e"           # headlines and body text
  accent: "#c6f432"        # primary accent: the one thing that matters in each frame
  support: "#0e0e0e"       # supporting colour, used sparingly
  surface: "#f7f7f4"       # raised cards and panels
  muted: "#7e7e78"         # muted captions
typography:
  display:
    fontFamily: Inter Tight
    fontWeight: 800
  body:
    fontFamily: Inter Tight
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 28px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Contemporary grotesk editorial

A motion-graphics design system from Rasa Director's style library (Editorial & print). Also known as design-magazine style, new grotesk editorial, studio portfolio look, acid lime editorial.

## Overview

Heavy uppercase grotesk in rounded modular tiles, pale grey page, black and one acid-lime tile; today's design-studio layout.

It feels current, sharp, cool. Use it for agency and studio reels, creative-tool launches, event and conference promos, fashion-tech.

## Visual language

- **Type:** Inter Tight (display, weight 800, uppercase, tracking -0.03em) with Inter Tight for body text.
- **Surfaces:** flat fills, no gradients; corners 28px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: pop.

## The terms that define it

- **Visual style / art direction:** Editorial, Swiss / International Typographic Style
- **Typography:** Grotesk, Extended
- **Composition / layout system:** Bento Grid, Modular Grid, Typography-Led Composition
- **Color treatment:** Limited Palette, High Contrast
- **Shape language:** Rounded, Modular
- **Motion language:** Snappy
- **Transition language:** Scale Transition, Push
- **Pacing / rhythm:** Fast

## Do's and Don'ts

- Do keep the accent (#c6f432) for the single most important element in each frame.
- Do use Inter Tight large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not Swiss International Style: rounded tiles, heavier uppercase type and a fashionable acid accent instead of red.

## References

- Search: "contemporary editorial motion design"
- Search: "grotesk bento motion"
- Search: "design studio reel typography"
