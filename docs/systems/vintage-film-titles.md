---
name: "Vintage film titles"
description: "Ornate display serif inside double-ruled frames on sepia, cream lettering, flickering grain and slow dissolves like a 1940s picture."
colors:
  canvas: "#231710"        # page ground
  ink: "#f0dcae"           # headlines and body text
  accent: "#b3702d"        # primary accent: the one thing that matters in each frame
  support: "#5e4128"       # supporting colour, used sparingly
  surface: "#2f2016"       # raised cards and panels
  muted: "#a88c63"         # muted captions
typography:
  display:
    fontFamily: Abril Fatface
    fontWeight: 400
  body:
    fontFamily: Libre Caslon Text
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "4px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Vintage film titles

A motion-graphics design system from RasanAI's style library (Cinematic & atmospheric). Also known as golden-age titles, classic Hollywood credits, sepia title card, old movie titles.

## Overview

Ornate display serif inside double-ruled frames on sepia, cream lettering, flickering grain and slow dissolves like a 1940s picture.

It feels nostalgic, romantic, grand. Use it for heritage brands, anniversary films, period storytelling, event openers.

## Visual language

- **Type:** Abril Fatface (display, weight 400, tracking 0.01em) with Libre Caslon Text for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 4px double in ink.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** glyph. **Decoration:** none.

## Motion

Motion language: **Luxurious / Slow**. Very slow, circular deceleration, long holds and stillness, where restraint itself is the signal of value.
- Enter `circ.out`, exit `circ.in`, move `power1.inOut`; durations 600 / 900 / 1400 / 2000 / 2800 ms; stagger 200 ms; hold at least 1800 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, linear-entrance, blur-in.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Cinematic, Art Deco
- **Typography:** Display Typography, High-Contrast Serif
- **Composition / layout system:** Centered Hero Composition, Symmetrical Composition
- **Color treatment:** Warm Palette, Monochrome
- **Texture:** Film Grain, Scratches
- **VFX / compositing treatment:** Dust, Grain
- **Line / stroke language:** Double-Line
- **Motion language:** Luxurious / Slow
- **Transition language:** Dissolve, Fade
- **Emotional / brand tone:** Nostalgic

## Do's and Don'ts

- Do keep the accent (#b3702d) for the single most important element in each frame.
- Do use Abril Fatface large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not Art Deco: the frame is a simple double rule and the mood is sepia film, not geometric gold.

## References

- Search: "vintage film title card animation"
- Search: "old hollywood title sequence"
- Search: "sepia film credits motion"
