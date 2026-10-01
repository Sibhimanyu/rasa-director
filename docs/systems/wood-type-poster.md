---
name: "Wood type poster"
description: "Mixed fat-face and slab wood type locked up in a strict grid, black and vermilion ink on buff stock, grain showing through."
colors:
  canvas: "#eee2c6"        # page ground
  ink: "#1b1611"           # headlines and body text
  accent: "#c3262d"        # primary accent: the one thing that matters in each frame
  support: "#23408e"       # supporting colour, used sparingly
  surface: "#e4d3ae"       # raised cards and panels
  muted: "#6d5f47"         # muted captions
typography:
  display:
    fontFamily: Ultra
    fontWeight: 400
  body:
    fontFamily: Old Standard TT
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Wood type poster

A motion-graphics design system from RasanAI's style library (Print). Also known as wood type, playbill poster, Hamilton wood type, circus poster type, letterpress poster.

## Overview

Mixed fat-face and slab wood type locked up in a strict grid, black and vermilion ink on buff stock, grain showing through.

It feels loud, honest, crafted, old-time. Use it for event and festival announcements, craft beer and food, heritage brands, music gig promos.

## Visual language

- **Type:** Ultra (display, weight 400, uppercase, tracking 0em) with Old Standard TT for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 2px solid in ink.
- **Depth:** no shadows.
- **Texture:** noise. **Icons:** glyph. **Decoration:** rules.

## Motion

Motion language: **Mechanical**. Motion driven as if by motors, gears and belts: constant velocity segments with abrupt, rigid starts and stops.
- Enter `none`, exit `none`, move `power1.inOut`; durations 150 / 250 / 400 / 600 / 900 ms; stagger 100 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Print-Editorial, Handmade / Craft
- **Typography:** Slab Serif, Condensed
- **Composition / layout system:** Poster Composition, Typography-Led Composition
- **Material / surface language:** Paper, Wood
- **Texture:** Ink Bleed, Print Grain
- **Color treatment:** Limited Palette, Warm Palette
- **Motion language:** Mechanical
- **Transition language:** Hard Cut, Slide
- **Era / design-movement influence:** Mid-Century Modern

## Do's and Don'ts

- Do keep the accent (#c3262d) for the single most important element in each frame.
- Do use Ultra large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not letterpress stationery: this is a shouting poster of stacked big wood letters, not typewriter text pressed into cotton card.

## References

- Search: "wood type poster animation"
- Search: "letterpress poster typography motion"
- Search: "Hamilton wood type poster"
