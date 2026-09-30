---
name: "Scrapbook collage"
description: "Tilted paper scraps held by washi tape, typewriter labels and stickers, pastel paper stock with fibre texture."
colors:
  canvas: "#efe7da"        # page ground
  ink: "#2e2a26"           # headlines and body text
  accent: "#e9a3a3"        # primary accent: the one thing that matters in each frame
  support: "#a9c6b9"       # supporting colour, used sparingly
  surface: "#fffdf7"       # raised cards and panels
  muted: "#8c8277"         # muted captions
typography:
  display:
    fontFamily: Special Elite
    fontWeight: 400
  body:
    fontFamily: Reenie Beanie
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 2px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Scrapbook collage

A motion-graphics design system from Rasa Director's style library (Handmade & printed). Also known as scrapbook, journal collage, washi-tape collage, memory book.

## Overview

Tilted paper scraps held by washi tape, typewriter labels and stickers, pastel paper stock with fibre texture.

It feels personal, nostalgic, cosy. Use it for recap and memory films, lifestyle brands, creator stories, event highlights.

## Visual language

- **Type:** Special Elite (display, weight 400, tracking 0em) with Reenie Beanie for body text.
- **Surfaces:** off-white paper with visible fibre; corners 2px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** paper. **Icons:** doodle. **Decoration:** stickers.

## Motion

Motion language: **Stop-Motion-Like**. Motion rendered at a reduced frame rate (12 fps, on twos) so objects jump between held poses like physical stop-motion or hand-drawn animation.
- Enter `steps(6)`, exit `steps(4)`, move `steps(12)`; durations 167 / 250 / 417 / 667 / 1000 ms; stagger 83 ms; hold at least 750 ms.
- Never: fade-up-slide, fade-slide, blur-in, opacity-only-entrance, bounce.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Scrapbook, Mixed-Media Collage
- **Composition / layout system:** Collage Composition
- **Illustration style:** Collage, Photo Collage
- **Material / surface language:** Paper
- **Texture:** Paper Grain, Fibers
- **Typography:** Slab Serif, Handwritten / Script
- **Motion language:** Stop-Motion-Like
- **Transition language:** Slide, Page Flip

## Do's and Don'ts

- Do keep the accent (#e9a3a3) for the single most important element in each frame.
- Do use Special Elite large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't mix surface treatments; everything is paper.
- Don't confuse it: Not punk zine: scrapbook is soft, pastel and affectionate; zines are black-and-white photocopy and loud.

## References

- Search: "scrapbook collage animation"
- Search: "washi tape collage motion graphics"
- Search: "journal style video"
