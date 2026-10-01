---
name: "Die-cut stickers"
description: "Every element is a glossy sticker with a thick white die-cut border and soft shadow, slapped onto a denim-blue board."
colors:
  canvas: "#3b5bdb"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#ff8a3d"        # primary accent: the one thing that matters in each frame
  support: "#ffd43b"       # supporting colour, used sparingly
  surface: "#1e2a78"       # raised cards and panels
  muted: "#c5d0ff"         # muted captions
typography:
  display:
    fontFamily: Chango
    fontWeight: 400
  body:
    fontFamily: Rubik
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 28px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "8px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Die-cut stickers

A motion-graphics design system from RasanAI's style library (Playful & pop). Also known as sticker style, sticker illustration, white-border stickers, peel-and-stick.

## Overview

Every element is a glossy sticker with a thick white die-cut border and soft shadow, slapped onto a denim-blue board.

It feels collectible, fun, casual, crafty. Use it for social teasers, community and creator brands, merch, app feature highlights.

## Visual language

- **Type:** Chango (display, weight 400, tracking 0em) with Rubik for body text.
- **Surfaces:** flat fills, no gradients; corners 28px; outlines 8px solid in #ffffff.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** duotone. **Decoration:** stickers.

## Motion

Motion language: **Bouncy**. Objects fall or travel to a boundary and rebound off it in decaying hops, never passing through the target.
- Enter `bounce.out`, exit `back.in(1.7)`, move `bounce.out`; durations 100 / 200 / 350 / 600 / 900 ms; stagger 60 ms; hold at least 700 ms.
- Never: fade-up-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: bounce.

## The terms that define it

- **Visual style / art direction:** Sticker Style
- **Illustration style:** Sticker Illustration, Flat Vector
- **Iconography:** Sticker Icons
- **Line / stroke language:** Chunky
- **Shadow / depth cues:** Soft Diffuse Shadow
- **Composition / layout system:** Collage Composition
- **Color treatment:** High Saturation
- **Motion language:** Bouncy
- **Transition language:** Scale Transition, Card Flip

## Do's and Don'ts

- Do keep the accent (#ff8a3d) for the single most important element in each frame.
- Do use Chango large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not sticker bomb: here each sticker is placed cleanly as a hero, not piled into chaos.

## References

- Search: "die cut sticker animation"
- Search: "sticker style motion graphics"
- Search: "white border sticker pop"
