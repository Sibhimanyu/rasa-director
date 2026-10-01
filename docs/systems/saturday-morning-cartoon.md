---
name: "Saturday-morning cartoon"
description: "Sunburst rays, fat black outlines, squash-and-stretch type in a chunky cartoon face, bright orange and sky blue, springy overshoot."
colors:
  canvas: "#46b8ff"        # page ground
  ink: "#101010"           # headlines and body text
  accent: "#ff7a00"        # primary accent: the one thing that matters in each frame
  support: "#ffe135"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#0d3c66"         # muted captions
typography:
  display:
    fontFamily: Luckiest Guy
    fontWeight: 400
  body:
    fontFamily: Baloo 2
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 24px
shadows:
  card: "10px 10px 0 #101010"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "6px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Saturday-morning cartoon

A motion-graphics design system from RasanAI's style library (Playful & pop). Also known as cartoon style, cartoon network style, TV cartoon graphics, toon.

## Overview

Sunburst rays, fat black outlines, squash-and-stretch type in a chunky cartoon face, bright orange and sky blue, springy overshoot.

It feels goofy, energetic, nostalgic, loud. Use it for kids and family, snack and toy ads, YouTube intros, game trailers.

## Visual language

- **Type:** Luckiest Guy (display, weight 400, uppercase, tracking 0.02em) with Baloo 2 for body text.
- **Surfaces:** flat fills, no gradients; corners 24px; outlines 6px solid in ink.
- **Depth:** hard shadows (`10px 10px 0 #101010`).
- **Texture:** none; clean fills. **Icons:** doodle. **Decoration:** rays.

## Motion

Motion language: **Cartoonish**. Exaggerated classical-animation physics: big anticipation, squash and stretch, smear-like speed, overshoot and snappy holds.
- Enter `back.out(2.5)`, exit `back.in(2)`, move `elastic.out(1.2,0.4)`; durations 100 / 200 / 350 / 600 / 1000 ms; stagger 50 ms; hold at least 500 ms.
- Never: fade-up-slide, fade-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: spring.

## The terms that define it

- **Visual style / art direction:** Childlike / Naive, Comic-Book Style
- **Illustration style:** Cartoon, Thick-Outline Illustration
- **Line / stroke language:** Chunky
- **Typography:** Display Typography, Inflated Type
- **Color treatment:** High Saturation, Complementary
- **Composition / layout system:** Centered Hero Composition, Radial Composition
- **Motion language:** Cartoonish
- **Transition language:** Zoom Transition, Scale Transition
- **Emotional / brand tone:** Playful, Energetic

## Do's and Don'ts

- Do keep the accent (#ff7a00) for the single most important element in each frame.
- Do use Luckiest Guy large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not comic-book: cartoon is animated TV language (rays, squash and stretch), not printed panels and halftone.

## References

- Search: "cartoon motion graphics intro"
- Search: "saturday morning cartoon title animation"
- Search: "cartoon sunburst logo reveal"
