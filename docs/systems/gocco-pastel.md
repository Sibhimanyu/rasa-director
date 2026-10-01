---
name: "Print Gocco pastel"
description: "Tiny flat pastel inks from a Japanese Gocco press: salmon, mint and soft plum on warm white, slightly off-register, round gothic type."
colors:
  canvas: "#fbf3e8"        # page ground
  ink: "#3b3252"           # headlines and body text
  accent: "#f2a39c"        # primary accent: the one thing that matters in each frame
  support: "#8ac6bd"       # supporting colour, used sparingly
  surface: "#fff9f1"       # raised cards and panels
  muted: "#8a7f98"         # muted captions
typography:
  display:
    fontFamily: Zen Maru Gothic
    fontWeight: 700
  body:
    fontFamily: Zen Maru Gothic
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 10px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Print Gocco pastel

A motion-graphics design system from RasanAI's style library (Print). Also known as Print Gocco, gocco print, Japanese mini screen print, pastel block print.

## Overview

Tiny flat pastel inks from a Japanese Gocco press: salmon, mint and soft plum on warm white, slightly off-register, round gothic type.

It feels gentle, cute, handmade, cosy. Use it for greeting and stationery brands, kids and family, cafés and bakeries, craft and maker shops.

## Visual language

- **Type:** Zen Maru Gothic (display, weight 700, tracking -0.01em) with Zen Maru Gothic for body text.
- **Surfaces:** flat fills, no gradients; corners 10px; outlines none.
- **Depth:** no shadows.
- **Texture:** riso. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Stop-Motion-Like**. Motion rendered at a reduced frame rate (12 fps, on twos) so objects jump between held poses like physical stop-motion or hand-drawn animation.
- Enter `steps(6)`, exit `steps(4)`, move `steps(12)`; durations 167 / 250 / 417 / 667 / 1000 ms; stagger 83 ms; hold at least 750 ms.
- Never: fade-up-slide, fade-slide, blur-in, opacity-only-entrance, bounce.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Screen Print, Kawaii
- **Color treatment:** Pastel, Limited Palette
- **Illustration style:** Flat Vector, Grainy Vector
- **Material / surface language:** Screen Print, Paper
- **Texture:** Print Grain
- **Typography:** Rounded Sans
- **Shape language:** Rounded, Organic
- **Motion language:** Stop-Motion-Like
- **Transition language:** Hard Cut, Scale Transition
- **Emotional / brand tone:** Cute, Soft

## Do's and Don'ts

- Do keep the accent (#f2a39c) for the single most important element in each frame.
- Do use Zen Maru Gothic large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not risograph: no fluoro grain; small, soft, matte pastel stamps with rounded edges, cute rather than zine-like.

## References

- Search: "print gocco style illustration"
- Search: "pastel screen print animation"
- Search: "japanese gocco print design"
