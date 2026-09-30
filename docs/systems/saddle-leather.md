---
name: "Saddle leather & stitch"
description: "Cognac saddle leather, dark tooled patches with cream saddle-stitched edges and burnished drop edges, pebbled grain, a sturdy Bitter slab."
colors:
  canvas: "#bb7b4b"        # page ground
  ink: "#1d120a"           # headlines and body text
  accent: "#f3e2c4"        # primary accent: the one thing that matters in each frame
  support: "#5a2f17"       # supporting colour, used sparingly
  surface: "#7a4526"       # raised cards and panels
  muted: "#4a2e1c"         # muted captions
typography:
  display:
    fontFamily: Bitter
    fontWeight: 800
  body:
    fontFamily: Karla
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 16px
shadows:
  card: "10px 10px 0 #1d120a"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px dashed {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Saddle leather & stitch

A motion-graphics design system from Rasa Director's style library (Nature & material). Also known as tooled leather, leathercraft, saddle stitch, heritage workshop.

## Overview

Cognac saddle leather, dark tooled patches with cream saddle-stitched edges and burnished drop edges, pebbled grain, a sturdy Bitter slab.

It feels rugged, crafted, dependable. Use it for leather goods and workwear, whisky and coffee, motorcycle and outdoor, craft workshop films.

## Visual language

- **Type:** Bitter (display, weight 800, tracking -0.02em) with Karla for body text.
- **Surfaces:** flat fills, no gradients; corners 16px; outlines 3px dashed in #f3dfb8.
- **Depth:** hard shadows (`10px 10px 0 #1d120a`).
- **Texture:** noise. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Heavy**. Motion that communicates large mass: slow to start, accelerating under gravity, landing with impact and minimal rebound.
- Enter `power4.in`, exit `power3.in`, move `power3.inOut`; durations 120 / 250 / 450 / 800 / 1200 ms; stagger 120 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, blur-in, opacity-only-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Handmade / Craft, Warm Minimalism
- **Typography:** Slab Serif
- **Composition / layout system:** Floating Cards, Asymmetric Composition
- **Color treatment:** Earth Tones, Warm Palette
- **Texture:** Print Grain
- **Material / surface language:** Fabric
- **Line / stroke language:** Medium
- **Motion language:** Heavy
- **Transition language:** Slide, Hard Cut
- **Emotional / brand tone:** Confident, Human

## Do's and Don'ts

- Do keep the accent (#f3e2c4) for the single most important element in each frame.
- Do use Bitter large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not felt and stitch: that is soft playful fabric; this is stiff, burnished leather with a workshop, heritage tone.

## References

- Search: "leather texture animation"
- Search: "stitched leather brand video"
- Search: "leathercraft motion graphics"
