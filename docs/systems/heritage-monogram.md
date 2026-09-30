---
name: "Heritage monogram"
description: "Tobacco-brown panels on a repeating monogram dot pattern, cream glyph emblems, stitched-leather edges, a stately serif."
colors:
  canvas: "#3b2a1e"        # page ground
  ink: "#f1e3c8"           # headlines and body text
  accent: "#d9b27a"        # primary accent: the one thing that matters in each frame
  support: "#8a5a36"       # supporting colour, used sparingly
  surface: "#4d3625"       # raised cards and panels
  muted: "#b39d80"         # muted captions
typography:
  display:
    fontFamily: Libre Caslon Display
    fontWeight: 400
  body:
    fontFamily: Tenor Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 10px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px dashed {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Heritage monogram

A motion-graphics design system from Rasa Director's style library (Luxury & restrained). Also known as trunk-maker luxury, monogram canvas, maison heritage, logo-pattern luxury.

## Overview

Tobacco-brown panels on a repeating monogram dot pattern, cream glyph emblems, stitched-leather edges, a stately serif.

It feels storied, crafted, prestigious. Use it for leather goods and luggage, heritage fashion houses, anniversary films, premium packaging reveals.

## Visual language

- **Type:** Libre Caslon Display (display, weight 400, tracking 0em) with Tenor Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 10px; outlines 2px dashed in accent.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** dots. **Icons:** glyph. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Luxury
- **Material / surface language:** Fabric
- **Iconography:** Custom Brand Icons
- **Line / stroke language:** Offset-Line
- **Typography:** Editorial Serif
- **Color treatment:** Earth Tones, Warm Palette
- **Shadow / depth cues:** Soft Diffuse Shadow
- **Motion language:** Smooth
- **Transition language:** Card Flip, Crossfade

## Do's and Don'ts

- Do keep the accent (#d9b27a) for the single most important element in each frame.
- Do use Libre Caslon Display large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not quiet luxury: loud about its lineage, with a repeating monogram, emblems and leather, rather than logo-free beige.

## References

- Search: "luxury monogram pattern animation"
- Search: "heritage fashion house brand film"
- Search: "leather luxury motion graphics"
