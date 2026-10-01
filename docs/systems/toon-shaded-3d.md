---
name: "Toon-shaded 3D"
description: "3D forms flattened into two-tone cel shading with thick ink outlines, sky-blue ground, sharp shadow blocks in a darker hue."
colors:
  canvas: "#7fd3ff"        # page ground
  ink: "#101020"           # headlines and body text
  accent: "#ff5a5f"        # primary accent: the one thing that matters in each frame
  support: "#ffd23f"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#2f5f80"         # muted captions
typography:
  display:
    fontFamily: Rubik
    fontWeight: 800
  body:
    fontFamily: Rubik
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 24px
shadows:
  card: "10px 10px 0 #101020"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "5px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Toon-shaded 3D

A motion-graphics design system from RasanAI's style library (3D & materials). Also known as cel-shaded 3D, toon shader, anime 3D, Borderlands style, Spider-Verse look.

## Overview

3D forms flattened into two-tone cel shading with thick ink outlines, sky-blue ground, sharp shadow blocks in a darker hue.

It feels punchy, animated, comic. Use it for game trailers, youth brands, animated explainers, social promos.

## Visual language

- **Type:** Rubik (display, weight 800, tracking -0.02em) with Rubik for body text.
- **Surfaces:** flat fills, no gradients; corners 24px; outlines 5px solid in ink.
- **Depth:** hard shadows (`10px 10px 0 #101020`).
- **Texture:** halftone. **Icons:** filled. **Decoration:** rays.

## Motion

Motion language: **Cartoonish**. Exaggerated classical-animation physics: big anticipation, squash and stretch, smear-like speed, overshoot and snappy holds.
- Enter `back.out(2.5)`, exit `back.in(2)`, move `elastic.out(1.2,0.4)`; durations 100 / 200 / 350 / 600 / 1000 ms; stagger 50 ms; hold at least 500 ms.
- Never: fade-up-slide, fade-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: pop.

## The terms that define it

- **Visual style / art direction:** Comic-Book Style, Toy-Like 3D
- **Illustration style:** 3D Cartoon, Thick-Outline Illustration
- **Line / stroke language:** Heavy, Ink
- **Depth / dimensionality:** 3D Objects + 2D UI
- **Shadow / depth cues:** Hard Shadow
- **Color treatment:** High Saturation, Complementary
- **Iconography:** Filled Icons
- **Motion language:** Cartoonish
- **Transition language:** Whip Transition, Flash Transition

## Do's and Don'ts

- Do keep the accent (#ff5a5f) for the single most important element in each frame.
- Do use Rubik large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not neo-brutalism: the shadow is a darker shade of the object (cel shading), not a black offset block.

## References

- Search: "cel shaded 3D animation"
- Search: "toon shader motion design"
- Search: "anime 3D style explainer"
