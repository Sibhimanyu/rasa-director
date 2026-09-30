---
name: "Sketchbook"
description: "Graphite-grey pencil lines and notes on toothy off-white paper, thin sketchy frames, a single coloured-pencil accent."
colors:
  canvas: "#f2eee4"        # page ground
  ink: "#35353a"           # headlines and body text
  accent: "#cfd6da"        # primary accent: the one thing that matters in each frame
  support: "#c8553d"       # supporting colour, used sparingly
  surface: "#f8f5ee"       # raised cards and panels
  muted: "#8d8a82"         # muted captions
typography:
  display:
    fontFamily: Caveat
    fontWeight: 700
  body:
    fontFamily: Kalam
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 2px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Sketchbook

A motion-graphics design system from Rasa Director's style library (Handmade & printed). Also known as pencil sketch, graphite sketch, concept sketch, designer's sketchbook.

## Overview

Graphite-grey pencil lines and notes on toothy off-white paper, thin sketchy frames, a single coloured-pencil accent.

It feels thoughtful, creative, intimate. Use it for design and architecture stories, founder origin films, process reveals, product concept to real.

## Visual language

- **Type:** Caveat (display, weight 700, tracking 0em) with Kalam for body text.
- **Surfaces:** off-white paper with visible fibre; corners 2px; outlines 1px sketch in #6b6b70.
- **Depth:** no shadows.
- **Texture:** paper. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Organic**. Motion that follows living, growing systems: soft sine curves, arcs rather than straight lines, uneven timing and growth from a source.
- Enter `sine.out`, exit `sine.in`, move `sine.inOut`; durations 400 / 650 / 1000 / 1500 / 2200 ms; stagger 90 ms; hold at least 1100 ms.
- Never: fade-up-slide, bounce, scale-pop, linear-entrance.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Sketchbook, Handmade / Craft
- **Illustration style:** Sketch, Hand-Drawn
- **Texture:** Pencil, Paper Grain
- **Line / stroke language:** Thin, Hand-Drawn
- **Material / surface language:** Paper
- **Typography:** Handwritten / Script
- **Motion language:** Organic
- **Transition language:** Line-Draw Transition, Dissolve

## Do's and Don'ts

- Do keep the accent (#cfd6da) for the single most important element in each frame.
- Do use Caveat large and confident; one idea per frame.
- Don't add drop shadows.
- Don't mix surface treatments; everything is paper.
- Don't confuse it: Not doodle: sketchbook is observational and tonal in pencil, not bold cartoon doodles.

## References

- Search: "sketchbook animation style"
- Search: "pencil sketch motion graphics"
- Search: "sketch to reality product reveal"
