---
name: "E-ink reader"
description: "Matte warm-grey e-paper in a slim black bezel, bookish Literata serif, dithered greyscale, pages that flash black before settling."
colors:
  canvas: "#cfccc4"        # page ground
  ink: "#1c1c1c"           # headlines and body text
  accent: "#3c3c3a"        # primary accent: the one thing that matters in each frame
  support: "#8a8984"       # supporting colour, used sparingly
  surface: "#e8e6df"       # raised cards and panels
  muted: "#595955"         # muted captions
typography:
  display:
    fontFamily: Literata
    fontWeight: 600
  body:
    fontFamily: Literata
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 18px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# E-ink reader

A motion-graphics design system from RasanAI's style library (Interface). Also known as e-reader page, e-paper UI, Kindle-style screen, electronic paper.

## Overview

Matte warm-grey e-paper in a slim black bezel, bookish Literata serif, dithered greyscale, pages that flash black before settling.

It feels quiet, bookish, unhurried. Use it for publishing and reading apps, long-form storytelling, calm brand films.

## Visual language

- **Type:** Literata (display, weight 600, tracking -0.01em) with Literata for body text.
- **Surfaces:** off-white paper with visible fibre; corners 18px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** dots. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Choppy / Stepped**. No interpolation as an aesthetic: elements jump between a few discrete positions or cut instantly.
- Enter `steps(4)`, exit `steps(3)`, move `steps(6)`; durations 100 / 160 / 250 / 400 / 600 ms; stagger 60 ms; hold at least 500 ms.
- Never: fade-up-slide, fade-slide, blur-in, bounce, overshoot, opacity-only-entrance.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Monochrome, Extreme Minimalism
- **Era / design-movement influence:** Modern SaaS Design
- **UI treatment:** Device-Bound UI, Minimal UI
- **Composition / layout system:** Phone Composition, Negative-Space Composition
- **Color treatment:** Grayscale, Low Contrast
- **Typography:** Editorial Serif
- **Texture:** Stipple
- **Shadow / depth cues:** Soft Diffuse Shadow
- **Motion language:** Choppy / Stepped
- **Transition language:** Flash Transition, Page Flip

## Do's and Don'ts

- Do keep the accent (#3c3c3a) for the single most important element in each frame.
- Do use Literata large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't mix surface treatments; everything is paper.
- Don't confuse it: Not book typography: the page lives on a device screen in grey e-paper with dithering and a refresh flash, not on printed cream stock.

## References

- Search: "e-ink display animation"
- Search: "e-reader UI aesthetic"
- Search: "e-paper refresh motion"
