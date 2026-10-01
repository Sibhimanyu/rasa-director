---
name: "Spot-colour swatch book"
description: "A fanned deck of spot-colour chips: big solid ink panels on white stock, small mono ink numbers, coated and uncoated tags."
colors:
  canvas: "#e9e8e4"        # page ground
  ink: "#111111"           # headlines and body text
  accent: "#ff5a1f"        # primary accent: the one thing that matters in each frame
  support: "#0057b8"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#6d6d6a"         # muted captions
typography:
  display:
    fontFamily: Hanken Grotesk
    fontWeight: 800
  body:
    fontFamily: IBM Plex Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 8px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Spot-colour swatch book

A motion-graphics design system from RasanAI's style library (Print). Also known as swatch fan, colour chip book, spot colour guide, ink formula guide.

## Overview

A fanned deck of spot-colour chips: big solid ink panels on white stock, small mono ink numbers, coated and uncoated tags.

It feels precise, colourful, designerly. Use it for brand identity reveals, design tools and paint brands, product colourway launches, creative agency reels.

## Visual language

- **Type:** Hanken Grotesk (display, weight 800, tracking -0.03em) with IBM Plex Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 8px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Swiss / International Typographic Style, Clean Minimalism
- **Composition / layout system:** Stacked Cards, Centered Hero Composition
- **Color treatment:** Brand Palette, High Saturation
- **Typography:** Grotesk, Monospace
- **Material / surface language:** Paper
- **Texture:** Clean / No Texture
- **Motion language:** Smooth
- **Transition language:** Card Flip, Slide
- **Emotional / brand tone:** Professional, Confident

## Do's and Don'ts

- Do keep the accent (#ff5a1f) for the single most important element in each frame.
- Do use Hanken Grotesk large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not colour blocking: the colours are specimen chips in a fanned guide with ink numbers, not a layout split into fields.

## References

- Search: "swatch book fan animation"
- Search: "colour chip reveal motion graphics"
- Search: "spot colour guide design"
