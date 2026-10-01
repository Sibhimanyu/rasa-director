---
name: "Lotería cards"
description: "A fanned deck of numbered folk cards with thick black frames on rosa mexicano, marigold and turquoise, wood-type names, sun and moon glyphs."
colors:
  canvas: "#c8005f"        # page ground
  ink: "#fff5e3"           # headlines and body text
  accent: "#ffb000"        # primary accent: the one thing that matters in each frame
  support: "#00979a"       # supporting colour, used sparingly
  surface: "#fff5e3"       # raised cards and panels
  muted: "#ffd0e2"         # muted captions
typography:
  display:
    fontFamily: Sancreek
    fontWeight: 400
  body:
    fontFamily: Alegreya Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 4px
shadows:
  card: "10px 10px 0 #fff5e3"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "6px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Lotería cards

A motion-graphics design system from RasanAI's style library (Heritage). Also known as Mexican lotería, Mexican folk print, lotería mexicana, papel picado palette.

## Overview

A fanned deck of numbered folk cards with thick black frames on rosa mexicano, marigold and turquoise, wood-type names, sun and moon glyphs.

It feels festive, warm, folkloric. Use it for food and drink brands, festival and event promos, music releases, cultural campaigns.

## Visual language

- **Type:** Sancreek (display, weight 400, tracking 0.01em) with Alegreya Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 4px; outlines 6px solid in ink.
- **Depth:** hard shadows (`10px 10px 0 #fff5e3`).
- **Texture:** halftone. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Playful**. Light, cheeky motion with small overshoots, tilts and secondary wiggles, playful in intent rather than in strict physics.
- Enter `back.out(1.7)`, exit `back.in(1.7)`, move `sine.inOut`; durations 160 / 280 / 450 / 700 / 1000 ms; stagger 40 ms; hold at least 600 ms.
- Never: fade-up-slide, linear-entrance, blur-in.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Handmade / Craft, Screen Print
- **Color treatment:** High Saturation, Warm Palette
- **Typography:** Display Typography, Slab Serif
- **Illustration style:** Flat Vector, Iconographic Illustration
- **Line / stroke language:** Heavy
- **Shadow / depth cues:** Hard Shadow
- **Composition / layout system:** Stacked Cards
- **Motion language:** Playful
- **Transition language:** Card Flip, Slide

## Do's and Don'ts

- Do keep the accent (#ffb000) for the single most important element in each frame.
- Do use Sancreek large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not Memphis: the colour and framing come from Mexican printed folk cards and wood type, not 80s squiggles.

## References

- Search: "loteria card animation"
- Search: "Mexican folk art motion graphics"
- Search: "loteria style design"
