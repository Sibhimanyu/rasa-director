---
name: "Isotype"
description: "Otto Neurath's picture statistics: flat red, blue and black pictograms counted in rows, one figure standing for a fixed quantity, Futura-style caps on buff paper."
colors:
  canvas: "#f1ebdd"        # page ground
  ink: "#1c1c1c"           # headlines and body text
  accent: "#c8372d"        # primary accent: the one thing that matters in each frame
  support: "#2e5f8a"       # supporting colour, used sparingly
  surface: "#e6dcc6"       # raised cards and panels
  muted: "#6b6457"         # muted captions
typography:
  display:
    fontFamily: Jost
    fontWeight: 700
  body:
    fontFamily: Jost
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Isotype

A motion-graphics design system from RasanAI's style library (Data & explainers). Also known as Vienna method, Neurath pictograms, picture statistics, pictorial statistics, ISOTYPE chart.

## Overview

Otto Neurath's picture statistics: flat red, blue and black pictograms counted in rows, one figure standing for a fixed quantity, Futura-style caps on buff paper.

It feels clear, civic, matter-of-fact. Use it for public-information explainers, population and census stories, social-impact reports, museum and education films.

## Visual language

- **Type:** Jost (display, weight 700, uppercase, tracking 0.04em) with Jost for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** paper. **Icons:** filled. **Decoration:** pictograms.

## Motion

Motion language: **Mechanical**. Motion driven as if by motors, gears and belts: constant velocity segments with abrupt, rigid starts and stops.
- Enter `none`, exit `none`, move `power1.inOut`; durations 150 / 250 / 400 / 600 / 900 ms; stagger 100 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Modernist, Abstract Geometric
- **Era / design-movement influence:** Bauhaus
- **Illustration style:** Pictogram
- **Iconography:** Pictograms
- **Information / data visualization:** Statistic Callout, Comparison Cards
- **Format / purpose:** Animated Infographic, Statistics Animation
- **Color treatment:** Limited Palette, Primary Colors
- **Typography:** Geometric Sans
- **Composition / layout system:** Modular Grid
- **Motion language:** Mechanical
- **Transition language:** Hard Cut, Wipe

## Do's and Don'ts

- Do keep the accent (#c8372d) for the single most important element in each frame.
- Do use Jost large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a modern flat infographic: every figure is the same size and counts a fixed number, repeated in rows rather than scaled into a chart.

## References

- Search: "isotype pictogram animation"
- Search: "otto neurath picture statistics"
- Search: "pictogram counting infographic motion"
