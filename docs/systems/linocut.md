---
name: "Linocut"
description: "Rough carved black shapes with gouged edges and one red ink on warm off-white, woodtype caps and uneven ink texture."
colors:
  canvas: "#efe6d5"        # page ground
  ink: "#16130f"           # headlines and body text
  accent: "#b3261e"        # primary accent: the one thing that matters in each frame
  support: "#16130f"       # supporting colour, used sparingly
  surface: "#f7f0e2"       # raised cards and panels
  muted: "#6b6254"         # muted captions
typography:
  display:
    fontFamily: Rye
    fontWeight: 400
  body:
    fontFamily: Crimson Pro
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "7px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Linocut

A motion-graphics design system from RasanAI's style library (Handmade & printed). Also known as woodcut, block print, relief print, carved print.

## Overview

Rough carved black shapes with gouged edges and one red ink on warm off-white, woodtype caps and uneven ink texture.

It feels earthy, authentic, strong. Use it for food, farm and craft brands, folk and heritage stories, book and music releases.

## Visual language

- **Type:** Rye (display, weight 400, uppercase, tracking 0.02em) with Crimson Pro for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 7px sketch in ink.
- **Depth:** no shadows.
- **Texture:** noise. **Icons:** glyph. **Decoration:** none.

## Motion

Motion language: **Stop-Motion-Like**. Motion rendered at a reduced frame rate (12 fps, on twos) so objects jump between held poses like physical stop-motion or hand-drawn animation.
- Enter `steps(6)`, exit `steps(4)`, move `steps(12)`; durations 167 / 250 / 417 / 667 / 1000 ms; stagger 83 ms; hold at least 750 ms.
- Never: fade-up-slide, fade-slide, blur-in, opacity-only-entrance, bounce.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Handmade / Craft, Screen Print
- **Illustration style:** Ink Illustration, Textured Vector
- **Texture:** Rough Edges, Print Grain
- **Line / stroke language:** Heavy, Rough
- **Color treatment:** Black and White, Limited Palette
- **Typography:** Slab Serif
- **Motion language:** Stop-Motion-Like
- **Transition language:** Hard Cut, Wipe

## Do's and Don'ts

- Do keep the accent (#b3261e) for the single most important element in each frame.
- Do use Rye large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not screen print: marks are carved and chiselled with rough edges, not flat halftone layers.

## References

- Search: "linocut animation"
- Search: "woodcut style motion graphics"
- Search: "block print illustration video"
