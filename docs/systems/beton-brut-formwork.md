---
name: "Béton brut formwork"
description: "Board-marked grey concrete on a strict formwork grid, stencilled Big Shoulders capitals cast into the panels, one word on a darker pour."
colors:
  canvas: "#bdb9b1"        # page ground
  ink: "#191918"           # headlines and body text
  accent: "#7f7b74"        # primary accent: the one thing that matters in each frame
  support: "#e2dfd8"       # supporting colour, used sparingly
  surface: "#cfccc5"       # raised cards and panels
  muted: "#56534e"         # muted captions
typography:
  display:
    fontFamily: Big Shoulders Stencil Display
    fontWeight: 800
  body:
    fontFamily: IBM Plex Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Béton brut formwork

A motion-graphics design system from RasanAI's style library (Nature & material). Also known as board-formed concrete, béton brut, raw concrete poster, brutalist architecture type.

## Overview

Board-marked grey concrete on a strict formwork grid, stencilled Big Shoulders capitals cast into the panels, one word on a darker pour.

It feels monumental, honest, severe. Use it for architecture and civic films, fashion and streetwear drops, exhibition openers, manifestos.

## Visual language

- **Type:** Big Shoulders Stencil Display (display, weight 800, uppercase, tracking 0em) with IBM Plex Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** noise. **Icons:** none. **Decoration:** grid.

## Motion

Motion language: **Heavy**. Motion that communicates large mass: slow to start, accelerating under gravity, landing with impact and minimal rebound.
- Enter `power4.in`, exit `power3.in`, move `power3.inOut`; durations 120 / 250 / 450 / 800 / 1200 ms; stagger 120 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, blur-in, opacity-only-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Brutalism, Swiss / International Typographic Style
- **Typography:** Condensed, Display Typography
- **Composition / layout system:** Swiss Grid, Typography-Led Composition
- **Color treatment:** Grayscale, Low Contrast
- **Texture:** Print Grain
- **Shape language:** Rectilinear, Grid-Based
- **Motion language:** Heavy
- **Transition language:** Hard Cut, Wipe
- **Emotional / brand tone:** Bold, Serious

## Do's and Don'ts

- Do keep the accent (#7f7b74) for the single most important element in each frame.
- Do use Big Shoulders Stencil Display large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not concrete brutalist 3D: no floating slabs or depth; a flat poster grid where the type is stencil-cast into the wall.

## References

- Search: "brutalist concrete typography"
- Search: "stencil concrete poster animation"
- Search: "beton brut graphic design"
