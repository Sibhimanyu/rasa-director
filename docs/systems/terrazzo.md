---
name: "Terrazzo"
description: "Terracotta, sage and charcoal chips scattered through warm off-white poured stone; rounded tiles and a sturdy Epilogue grotesk."
colors:
  canvas: "#f3eee6"        # page ground
  ink: "#262626"           # headlines and body text
  accent: "#d77a4f"        # primary accent: the one thing that matters in each frame
  support: "#789f93"       # supporting colour, used sparingly
  surface: "#fbf8f3"       # raised cards and panels
  muted: "#8a847a"         # muted captions
typography:
  display:
    fontFamily: Epilogue
    fontWeight: 800
  body:
    fontFamily: Epilogue
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 18px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Terrazzo

A motion-graphics design system from RasanAI's style library (Nature & material). Also known as terrazzo pattern, speckled stone, venetian terrazzo, chip aggregate.

## Overview

Terracotta, sage and charcoal chips scattered through warm off-white poured stone; rounded tiles and a sturdy Epilogue grotesk.

It feels crafted, sunny, grounded. Use it for interior and homeware brands, cafés and hospitality, architecture studios, lifestyle social.

## Visual language

- **Type:** Epilogue (display, weight 800, tracking -0.03em) with Epilogue for body text.
- **Surfaces:** flat fills, no gradients; corners 18px; outlines none.
- **Depth:** no shadows.
- **Texture:** terrazzo. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Warm Minimalism, Abstract Geometric
- **Typography:** Grotesk
- **Composition / layout system:** Bento Grid
- **Color treatment:** Earth Tones, Limited Palette
- **Material / surface language:** Ceramic
- **Shape language:** Rounded, Irregular
- **Motion language:** Smooth
- **Transition language:** Slide, Shape Match
- **Emotional / brand tone:** Friendly, Calm

## Do's and Don'ts

- Do keep the accent (#d77a4f) for the single most important element in each frame.
- Do use Epilogue large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not Memphis: the chips are stone aggregate in earthy tones, not squiggles and primaries; calm, not loud.

## References

- Search: "terrazzo pattern animation"
- Search: "terrazzo brand identity motion"
- Search: "speckled terrazzo background video"
