---
name: "Newspaper broadsheet"
description: "Newsprint grey paper, bold condensed-serif headline, double-ruled borders, dense columns and a halftone photo; the press is running."
colors:
  canvas: "#ebe6da"        # page ground
  ink: "#1b1b1b"           # headlines and body text
  accent: "#5d5b56"        # primary accent: the one thing that matters in each frame
  support: "#a39e93"       # supporting colour, used sparingly
  surface: "#f4f0e6"       # raised cards and panels
  muted: "#6f6b63"         # muted captions
typography:
  display:
    fontFamily: Libre Caslon Text
    fontWeight: 700
  body:
    fontFamily: Source Serif 4
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "4px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Newspaper broadsheet

A motion-graphics design system from RasanAI's style library (Editorial & print). Also known as newsprint, front page, gazette style, headline press.

## Overview

Newsprint grey paper, bold condensed-serif headline, double-ruled borders, dense columns and a halftone photo; the press is running.

It feels urgent, credible, historic. Use it for announcements, news-style ads, historical explainers, PR videos.

## Visual language

- **Type:** Libre Caslon Text (display, weight 700, tracking -0.03em) with Source Serif 4 for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 4px double in ink.
- **Depth:** no shadows.
- **Texture:** halftone. **Icons:** glyph. **Decoration:** rules.

## Motion

Motion language: **Mechanical**. Motion driven as if by motors, gears and belts: constant velocity segments with abrupt, rigid starts and stops.
- Enter `none`, exit `none`, move `power1.inOut`; durations 150 / 250 / 400 / 600 / 900 ms; stagger 100 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Print-Editorial, Halftone
- **Typography:** Editorial Serif, Condensed
- **Composition / layout system:** Editorial Grid, Modular Grid
- **Color treatment:** Grayscale
- **Texture:** Halftone, Print Grain
- **Material / surface language:** Newsprint
- **Line / stroke language:** Double-Line
- **Motion language:** Mechanical
- **Transition language:** Push, Page Flip
- **Emotional / brand tone:** Serious, Urgent

## Do's and Don'ts

- Do keep the accent (#5d5b56) for the single most important element in each frame.
- Do use Libre Caslon Text large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not magazine serif: denser, greyer, ruled into boxes, and the photo is a halftone.

## References

- Search: "newspaper headline animation"
- Search: "front page motion graphics"
- Search: "newsprint halftone video"
