---
name: "Cuban silkscreen poster"
description: "Two flat silkscreen inks split down the middle, hot pink against deep forest green, a bold condensed title printed across both."
colors:
  canvas: "#0f3b2c"        # page ground
  ink: "#ffe6ef"           # headlines and body text
  accent: "#ff3d8b"        # primary accent: the one thing that matters in each frame
  support: "#f7d23e"       # supporting colour, used sparingly
  surface: "#17513d"       # raised cards and panels
  muted: "#9cc5b4"         # muted captions
typography:
  display:
    fontFamily: Bebas Neue
    fontWeight: 400
  body:
    fontFamily: Work Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Cuban silkscreen poster

A motion-graphics design system from RasanAI's style library (Heritage). Also known as ICAIC film poster, Cuban poster art, Havana silkscreen, Cuban film poster.

## Overview

Two flat silkscreen inks split down the middle, hot pink against deep forest green, a bold condensed title printed across both.

It feels vivid, graphic, defiant. Use it for film and festival titles, music releases, before/after stories, campaign posters.

## Visual language

- **Type:** Bebas Neue (display, weight 400, uppercase, tracking 0.01em) with Work Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Screen Print, Pop Art
- **Color treatment:** Complementary, Color Blocking
- **Composition / layout system:** Split Screen, Typography-Led Composition
- **Typography:** Condensed, Display Typography
- **Texture:** Print Grain
- **Motion language:** Snappy
- **Transition language:** Split, Wipe

## Do's and Don'ts

- Do keep the accent (#ff3d8b) for the single most important element in each frame.
- Do use Bebas Neue large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not duotone photography: pure flat ink fields and bold condensed type, no photographic image.

## References

- Search: "Cuban film poster design"
- Search: "ICAIC poster animation"
- Search: "silkscreen two colour poster motion"
