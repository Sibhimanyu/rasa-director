---
name: "Letterpress & typewriter"
description: "Typewriter and wood type pressed into thick cotton paper, debossed inset panels, a single red ink and hairline rules."
colors:
  canvas: "#f1ebe0"        # page ground
  ink: "#23201c"           # headlines and body text
  accent: "#b5352a"        # primary accent: the one thing that matters in each frame
  support: "#3c4a5c"       # supporting colour, used sparingly
  surface: "#ece4d6"       # raised cards and panels
  muted: "#7f766a"         # muted captions
typography:
  display:
    fontFamily: Special Elite
    fontWeight: 400
  body:
    fontFamily: Courier Prime
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 2px
shadows:
  card: "inset 0 5px 12px rgba(0,0,0,0.22)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Letterpress & typewriter

A motion-graphics design system from Rasa Director's style library (Handmade & printed). Also known as letterpress print, debossed type, typewriter aesthetic, old print shop.

## Overview

Typewriter and wood type pressed into thick cotton paper, debossed inset panels, a single red ink and hairline rules.

It feels authentic, considered, timeless. Use it for writing and publishing tools, heritage and craft brands, documentary titles, invitations.

## Visual language

- **Type:** Special Elite (display, weight 400, tracking 0em) with Courier Prime for body text.
- **Surfaces:** off-white paper with visible fibre; corners 2px; outlines 1px solid in #b9ae9c.
- **Depth:** inset shadows (`inset 0 5px 12px rgba(0,0,0,0.22)`).
- **Texture:** grain. **Icons:** glyph. **Decoration:** rules.

## Motion

Motion language: **Mechanical**. Motion driven as if by motors, gears and belts: constant velocity segments with abrupt, rigid starts and stops.
- Enter `none`, exit `none`, move `power1.inOut`; durations 150 / 250 / 400 / 600 / 900 ms; stagger 100 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: type.

## The terms that define it

- **Visual style / art direction:** Print-Editorial, Handmade / Craft
- **Material / surface language:** Paper
- **Typography:** Slab Serif, Monospace
- **Texture:** Paper Grain, Ink Bleed
- **Shadow / depth cues:** Inner Shadow
- **UI interaction motion:** Typing
- **Motion language:** Mechanical
- **Transition language:** Hard Cut, Fade

## Do's and Don'ts

- Do keep the accent (#b5352a) for the single most important element in each frame.
- Do use Special Elite large and confident; one idea per frame.
- Do keep every shadow the same inset style.
- Don't mix surface treatments; everything is paper.
- Don't confuse it: Not editorial print: the ink bites into the paper; depth is an impression, not a layout grid.

## References

- Search: "letterpress animation"
- Search: "typewriter text motion graphics"
- Search: "debossed paper type"
