---
name: "Crayon childlike"
description: "Waxy primary-colour crayon scribbles on white paper, lopsided stars, uneven kid lettering and thick wobbly outlines."
colors:
  canvas: "#ffffff"        # page ground
  ink: "#1f2a6b"           # headlines and body text
  accent: "#e8322b"        # primary accent: the one thing that matters in each frame
  support: "#ffd21f"       # supporting colour, used sparingly
  surface: "#fffdf5"       # raised cards and panels
  muted: "#6a6f99"         # muted captions
typography:
  display:
    fontFamily: Short Stack
    fontWeight: 400
  body:
    fontFamily: Schoolbell
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 14px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "6px solid {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Crayon childlike

A motion-graphics design system from RasanAI's style library (Handmade & printed). Also known as kid's drawing, crayon drawing, naive art, fridge drawing.

## Overview

Waxy primary-colour crayon scribbles on white paper, lopsided stars, uneven kid lettering and thick wobbly outlines.

It feels innocent, joyful, sincere. Use it for family and kids' products, charity appeals, education, heartfelt brand spots.

## Visual language

- **Type:** Short Stack (display, weight 400, tracking 0em) with Schoolbell for body text.
- **Surfaces:** flat fills, no gradients; corners 14px; outlines 6px sketch in accent.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** doodle. **Decoration:** stars.

## Motion

Motion language: **Cartoonish**. Exaggerated classical-animation physics: big anticipation, squash and stretch, smear-like speed, overshoot and snappy holds.
- Enter `back.out(2.5)`, exit `back.in(2)`, move `elastic.out(1.2,0.4)`; durations 100 / 200 / 350 / 600 / 1000 ms; stagger 50 ms; hold at least 500 ms.
- Never: fade-up-slide, fade-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: bounce.

## The terms that define it

- **Visual style / art direction:** Childlike / Naive, Handmade / Craft
- **Illustration style:** Scribble, Hand-Drawn
- **Texture:** Crayon, Paper Grain
- **Line / stroke language:** Rough, Chunky
- **Color treatment:** Primary Colors
- **Typography:** Handwritten / Script
- **Motion language:** Cartoonish
- **Transition language:** Hard Cut, Line-Draw Transition

## Do's and Don'ts

- Do keep the accent (#e8322b) for the single most important element in each frame.
- Do use Short Stack large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not doodle: crayon is waxy, filled-in and naive, drawn like a child rather than a designer.

## References

- Search: "crayon drawing animation"
- Search: "childlike drawing motion graphics"
- Search: "kids drawing style ad"
