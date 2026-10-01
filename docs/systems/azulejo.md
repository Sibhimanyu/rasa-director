---
name: "Azulejo"
description: "Portuguese tin-glazed tiles: cobalt stars and crosses painted on white, a solid cobalt half, italic high-contrast serif crossing the seam."
colors:
  canvas: "#f5f3ee"        # page ground
  ink: "#132a6b"           # headlines and body text
  accent: "#1f4fa8"        # primary accent: the one thing that matters in each frame
  support: "#6f8fcf"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#4a5a86"         # muted captions
typography:
  display:
    fontFamily: Playfair Display
    fontWeight: 700
  body:
    fontFamily: Lora
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 4px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px solid {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Azulejo

A motion-graphics design system from RasanAI's style library (Heritage). Also known as azulejos, Portuguese tiles, Lisbon tiles, blue and white tiles, tin-glazed tilework.

## Overview

Portuguese tin-glazed tiles: cobalt stars and crosses painted on white, a solid cobalt half, italic high-contrast serif crossing the seam.

It feels cool, crafted, sunlit. Use it for travel and city films, hospitality and food, ceramics and interiors, cultural programmes.

## Visual language

- **Type:** Playfair Display (display, weight 700, tracking 0em) with Lora for body text.
- **Surfaces:** flat fills, no gradients; corners 4px; outlines 3px solid in accent.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** tiles.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Handmade / Craft, Abstract Geometric
- **Material / surface language:** Ceramic
- **Color treatment:** Limited Palette, Cool Palette
- **Shape language:** Geometric, Grid-Based
- **Composition / layout system:** Split Screen, Symmetrical Composition
- **Typography:** High-Contrast Serif
- **Iconography:** Geometric Icons
- **Motion language:** Smooth
- **Transition language:** Wipe, Fade
- **Emotional / brand tone:** Calm, Editorial

## Do's and Don'ts

- Do keep the accent (#1f4fa8) for the single most important element in each frame.
- Do use Playfair Display large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not Moroccan zellige: azulejo is painted, glazed square tiles in blue on white; zellige is chipped multi-coloured mosaic.

## References

- Search: "azulejo tile pattern animation"
- Search: "portuguese tiles motion graphics"
- Search: "lisbon blue tile design"
