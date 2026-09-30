---
name: "Sticker bomb"
description: "Die-cut stickers slapped at angles over an electric-blue field and a phone mockup, thick outlines, badges, stars and ratings."
colors:
  canvas: "#2d3bff"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#ff4d8d"        # primary accent: the one thing that matters in each frame
  support: "#d6ff3f"       # supporting colour, used sparingly
  surface: "#141414"       # raised cards and panels
  muted: "#c9ccff"         # muted captions
typography:
  display:
    fontFamily: Rubik
    fontWeight: 900
  body:
    fontFamily: Rubik
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 20px
shadows:
  card: "10px 10px 0 #ffffff"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "4px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Sticker bomb

A motion-graphics design system from Rasa Director's style library (Bold & graphic). Also known as sticker slap, sticker-bombed, laptop sticker aesthetic, slap-tag graphics.

## Overview

Die-cut stickers slapped at angles over an electric-blue field and a phone mockup, thick outlines, badges, stars and ratings.

It feels rowdy, fun, street, cheeky. Use it for app-store promos, creator and community brands, merch drops, social teasers.

## Visual language

- **Type:** Rubik (display, weight 900, tracking -0.03em) with Rubik for body text.
- **Surfaces:** flat fills, no gradients; corners 20px; outlines 4px solid in #141414.
- **Depth:** hard shadows (`10px 10px 0 #ffffff`).
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** stickers.

## Motion

Motion language: **Playful**. Light, cheeky motion with small overshoots, tilts and secondary wiggles, playful in intent rather than in strict physics.
- Enter `back.out(1.7)`, exit `back.in(1.7)`, move `sine.inOut`; durations 160 / 280 / 450 / 700 / 1000 ms; stagger 40 ms; hold at least 600 ms.
- Never: fade-up-slide, linear-entrance, blur-in.
- Preview entrance: pop.

## The terms that define it

- **Visual style / art direction:** Sticker Style, Graffiti / Street Art
- **Iconography:** Sticker Icons
- **Illustration style:** Sticker Illustration
- **Photo / video integration:** Device Mockup
- **Composition / layout system:** Phone Composition, Collage Composition
- **Line / stroke language:** Chunky
- **Color treatment:** High Saturation
- **Motion language:** Playful
- **Transition language:** Scale Transition, Hard Cut

## Do's and Don'ts

- Do keep the accent (#ff4d8d) for the single most important element in each frame.
- Do use Rubik large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not die-cut sticker illustration: a sticker bomb is about layered chaos of many stickers over the product.

## References

- Search: "sticker bomb motion graphics"
- Search: "sticker slap animation app promo"
- Search: "stickers popping on phone mockup"
