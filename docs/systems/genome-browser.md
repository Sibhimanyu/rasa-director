---
name: "Genome browser"
description: "Stacked sequencing tracks on white: a coordinate header, numbered track rows, file-type chips in genome-browser blue and dense mono labels."
colors:
  canvas: "#ffffff"        # page ground
  ink: "#1b1f24"           # headlines and body text
  accent: "#1f4fa8"        # primary accent: the one thing that matters in each frame
  support: "#c8102e"       # supporting colour, used sparingly
  surface: "#f4f6f9"       # raised cards and panels
  muted: "#6a737d"         # muted captions
typography:
  display:
    fontFamily: Source Code Pro
    fontWeight: 700
  body:
    fontFamily: Source Sans 3
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 2px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Genome browser

A motion-graphics design system from RasanAI's style library (Science). Also known as genome track view, sequencing tracks, genomics viewer, DNA sequence browser.

## Overview

Stacked sequencing tracks on white: a coordinate header, numbered track rows, file-type chips in genome-browser blue and dense mono labels.

It feels precise, dense, modern. Use it for genomics and biotech, health data platforms, research tools, AI-for-science launches.

## Visual language

- **Type:** Source Code Pro (display, weight 700, tracking -0.03em) with Source Sans 3 for body text.
- **Surfaces:** flat fills, no gradients; corners 2px; outlines 1px solid in ink.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** grid.

## Motion

Motion language: **Linear**. Constant-speed interpolation from start to end with no acceleration or deceleration.
- Enter `none`, exit `none`, move `none`; durations 200 / 400 / 700 / 1000 / 1600 ms; stagger 100 ms; hold at least 800 ms.
- Never: fade-up-slide, bounce, overshoot, blur-in, scale-pop.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism, Clean Minimalism
- **Information / data visualization:** Table
- **UI treatment:** Dashboard UI, Simplified UI
- **Typography:** Monospace, Neo-Grotesk
- **Color treatment:** Light UI, Accent-Color System
- **Composition / layout system:** Modular Grid
- **Motion language:** Linear
- **Transition language:** Push, Wipe
- **Emotional / brand tone:** Technical, Intellectual

## Do's and Don'ts

- Do keep the accent (#1f4fa8) for the single most important element in each frame.
- Do use Source Code Pro large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not developer docs: horizontal data tracks on a genomic coordinate, ruled and labelled, not prose and code.

## References

- Search: "genome browser visualization"
- Search: "DNA sequencing motion graphics"
- Search: "genomics data UI animation"
