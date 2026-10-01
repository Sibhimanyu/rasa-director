---
name: "Dot-matrix printout"
description: "Nine-pin dot type chattering onto green-bar continuous paper with tractor holes, columns of figures, perforated page breaks."
colors:
  canvas: "#edf2e6"        # page ground
  ink: "#232323"           # headlines and body text
  accent: "#9bc69a"        # primary accent: the one thing that matters in each frame
  support: "#b9b9b3"       # supporting colour, used sparingly
  surface: "#f7f9f1"       # raised cards and panels
  muted: "#62685e"         # muted captions
typography:
  display:
    fontFamily: DotGothic16
    fontWeight: 400
  body:
    fontFamily: DotGothic16
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Dot-matrix printout

A motion-graphics design system from RasanAI's style library (Print). Also known as continuous feed paper, green bar paper, tractor feed printout, line printer, computer printout.

## Overview

Nine-pin dot type chattering onto green-bar continuous paper with tractor holes, columns of figures, perforated page breaks.

It feels mechanical, nerdy, nostalgic. Use it for data and analytics reports, fintech and accounting, developer tools, retro tech explainers.

## Visual language

- **Type:** DotGothic16 (display, weight 400, uppercase, tracking 0.04em) with DotGothic16 for body text.
- **Surfaces:** off-white paper with visible fibre; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** perforation. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Mechanical**. Motion driven as if by motors, gears and belts: constant velocity segments with abrupt, rigid starts and stops.
- Enter `none`, exit `none`, move `power1.inOut`; durations 150 / 250 / 400 / 600 / 900 ms; stagger 100 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: type.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism, Monochrome
- **Era / design-movement influence:** 1980s, Early Desktop Computing
- **Typography:** Pixel Type, Monospace
- **Material / surface language:** Paper
- **Texture:** Print Grain, Stipple
- **Color treatment:** Grayscale, Limited Palette
- **UI interaction motion:** Typing, Streaming Text
- **Motion language:** Mechanical
- **Transition language:** Push, Hard Cut
- **Emotional / brand tone:** Technical, Nostalgic

## Do's and Don'ts

- Do keep the accent (#9bc69a) for the single most important element in each frame.
- Do use DotGothic16 large and confident; one idea per frame.
- Don't add drop shadows.
- Don't mix surface treatments; everything is paper.
- Don't confuse it: Not a green-screen terminal: nothing glows; dotted black ink printed on striped paper, line by line.

## References

- Search: "dot matrix printer animation"
- Search: "green bar paper printout motion"
- Search: "continuous feed paper text effect"
