---
name: "Cyanotype sun print"
description: "Prussian-blue sun-print plates with white botanical silhouettes, brushed chemistry edges and small Victorian captions in old-style serif."
colors:
  canvas: "#16396a"        # page ground
  ink: "#f3f6f4"           # headlines and body text
  accent: "#e4edf3"        # primary accent: the one thing that matters in each frame
  support: "#2e5c95"       # supporting colour, used sparingly
  surface: "#1d4780"       # raised cards and panels
  muted: "#a8bdd8"         # muted captions
typography:
  display:
    fontFamily: IM Fell English SC
    fontWeight: 400
  body:
    fontFamily: IM Fell English
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Cyanotype sun print

A motion-graphics design system from Rasa Director's style library (Print). Also known as cyanotype, sun print, photogram, Anna Atkins botanical, blueprint photogram.

## Overview

Prussian-blue sun-print plates with white botanical silhouettes, brushed chemistry edges and small Victorian captions in old-style serif.

It feels botanical, quiet, handmade, archival. Use it for nature and wellness brands, gardening and botany, museum and heritage films, slow-living and craft.

## Visual language

- **Type:** IM Fell English SC (display, weight 400, tracking 0.02em) with IM Fell English for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** paper. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Organic**. Motion that follows living, growing systems: soft sine curves, arcs rather than straight lines, uneven timing and growth from a source.
- Enter `sine.out`, exit `sine.in`, move `sine.inOut`; durations 400 / 650 / 1000 / 1500 / 2200 ms; stagger 90 ms; hold at least 1100 ms.
- Never: fade-up-slide, bounce, scale-pop, linear-entrance.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Monochrome, Handmade / Craft
- **Color treatment:** Monochrome, Cool Palette
- **Photo / video integration:** Masked Photography
- **Illustration style:** Cutout Character
- **Texture:** Paper Grain, Rough Edges
- **Material / surface language:** Paper
- **Color grade:** Tinted Monochrome
- **Motion language:** Organic
- **Transition language:** Dissolve, Light Wipe
- **Emotional / brand tone:** Calm, Nostalgic

## Do's and Don'ts

- Do keep the accent (#e4edf3) for the single most important element in each frame.
- Do use IM Fell English SC large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a blueprint: no engineering linework or grid; soft white leaf and flower shadows exposed onto deep blue paper.

## References

- Search: "cyanotype animation"
- Search: "sun print botanical motion graphics"
- Search: "photogram cyanotype title"
