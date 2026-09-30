---
name: "Lab notebook"
description: "A bound lab-notebook page: faint quad grid, ballpoint-blue hand lettering, dated numbered entries ruled off, one red-pen correction."
colors:
  canvas: "#f3f5f0"        # page ground
  ink: "#1f2a5c"           # headlines and body text
  accent: "#c8322b"        # primary accent: the one thing that matters in each frame
  support: "#8fb1c9"       # supporting colour, used sparingly
  surface: "#fbfcf8"       # raised cards and panels
  muted: "#69728f"         # muted captions
typography:
  display:
    fontFamily: Kalam
    fontWeight: 700
  body:
    fontFamily: Kalam
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Lab notebook

A motion-graphics design system from Rasa Director's style library (Science). Also known as laboratory notebook, research notebook, engineer's notebook, graph-paper notes.

## Overview

A bound lab-notebook page: faint quad grid, ballpoint-blue hand lettering, dated numbered entries ruled off, one red-pen correction.

It feels methodical, candid, human. Use it for research and R&D stories, founder origin films, experiment explainers, engineering blogs.

## Visual language

- **Type:** Kalam (display, weight 700, tracking -0.01em) with Kalam for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 1px solid in ink.
- **Depth:** no shadows.
- **Texture:** grid. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Handmade / Imperfect**. Deliberately imperfect motion with frame-to-frame jitter (line boil), uneven spacing and slightly irregular timing, as if drawn by hand.
- Enter `power2.out`, exit `power2.in`, move `steps(3)`; durations 160 / 280 / 450 / 700 / 1000 ms; stagger 90 ms; hold at least 800 ms.
- Never: fade-up-slide, blur-in, linear-entrance, opacity-only-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Handmade / Craft, Technical Minimalism
- **Typography:** Handwritten / Script
- **Material / surface language:** Paper
- **Line / stroke language:** Hand-Drawn, Thin
- **Color treatment:** Limited Palette
- **Composition / layout system:** Typography-Led Composition
- **Format / purpose:** Educational Motion, Process Explainer
- **Motion language:** Handmade / Imperfect
- **Transition language:** Line-Draw Transition, Wipe
- **Emotional / brand tone:** Intellectual, Human

## Do's and Don'ts

- Do keep the accent (#c8322b) for the single most important element in each frame.
- Do use Kalam large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not doodle notebook or bullet journal: a working record, dated and numbered in ballpoint on quad grid, no doodles or stickers.

## References

- Search: "lab notebook animation"
- Search: "handwritten research notes motion graphics"
- Search: "graph paper notebook explainer"
