---
name: "Offset press proof"
description: "An untrimmed press sheet: cyan, magenta, yellow and black plates slightly off register, crop marks, registration targets and colour bars."
colors:
  canvas: "#f8f8f6"        # page ground
  ink: "#111111"           # headlines and body text
  accent: "#00a0e3"        # primary accent: the one thing that matters in each frame
  support: "#e6007e"       # supporting colour, used sparingly
  surface: "#ffed00"       # raised cards and panels
  muted: "#6b6b6b"         # muted captions
typography:
  display:
    fontFamily: Archivo Black
    fontWeight: 400
  body:
    fontFamily: Archivo
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Offset press proof

A motion-graphics design system from Rasa Director's style library (Print). Also known as CMYK press sheet, registration marks, printer's proof, crop marks and colour bars, make-ready sheet.

## Overview

An untrimmed press sheet: cyan, magenta, yellow and black plates slightly off register, crop marks, registration targets and colour bars.

It feels technical, graphic, behind-the-scenes. Use it for design studios and agencies, print and packaging, brand system reveals, creative tool launches.

## Visual language

- **Type:** Archivo Black (display, weight 400, uppercase, tracking -0.02em) with Archivo for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 1px solid in ink.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** crosshair.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Swiss / International Typographic Style, Print-Editorial
- **Color treatment:** Primary Colors, High Contrast
- **Typography:** Grotesk, Condensed
- **Composition / layout system:** Swiss Grid, Typography-Led Composition
- **Texture:** Halftone
- **VFX / compositing treatment:** RGB Split
- **Line / stroke language:** Hairline, Technical
- **Motion language:** Precise
- **Transition language:** Hard Cut, Color Match
- **Emotional / brand tone:** Technical, Bold

## Do's and Don'ts

- Do keep the accent (#00a0e3) for the single most important element in each frame.
- Do use Archivo Black large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not risograph: sharp process CMYK on bright white with the printer's furniture showing, not grainy fluoro spot inks.

## References

- Search: "cmyk registration marks animation"
- Search: "press proof crop marks motion"
- Search: "cmyk misregistration typography"
