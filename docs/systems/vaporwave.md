---
name: "Vaporwave"
description: "Pastel pink-to-cyan collage of old OS windows and cut-out scraps, wide-spaced serif caps, scanlines and a perspective grid."
colors:
  canvas: "#ffc6e8"        # page ground
  ink: "#2a0f4d"           # headlines and body text
  accent: "#7ee8fa"        # primary accent: the one thing that matters in each frame
  support: "#b99cff"       # supporting colour, used sparingly
  surface: "#fff1fa"       # raised cards and panels
  muted: "#7a5a99"         # muted captions
typography:
  display:
    fontFamily: DM Serif Display
    fontWeight: 400
  body:
    fontFamily: Space Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "10px 10px 0 #2a0f4d"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Vaporwave

A motion-graphics design system from Rasa Director's style library (Retro & eras). Also known as A E S T H E T I C, vapor, mallsoft, Windows-95 pastel irony.

## Overview

Pastel pink-to-cyan collage of old OS windows and cut-out scraps, wide-spaced serif caps, scanlines and a perspective grid.

It feels dreamy, ironic, nostalgic. Use it for music visuals, streetwear drops, internet-culture brands, lo-fi loops.

## Visual language

- **Type:** DM Serif Display (display, weight 400, uppercase, tracking 0.2em) with Space Mono for body text.
- **Surfaces:** soft gradient washes from the surface toward the accent; corners 0px; outlines 3px solid in ink.
- **Depth:** hard shadows (`10px 10px 0 #2a0f4d`).
- **Texture:** scanlines. **Icons:** pixel. **Decoration:** grid.

## Motion

Motion language: **Floating**. Elements hover and bob gently around a rest point, as if suspended in water or air.
- Enter `sine.out`, exit `sine.in`, move `sine.inOut`; durations 500 / 800 / 1200 / 1800 / 2600 ms; stagger 70 ms; hold at least 1500 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Vaporwave, Mixed-Media Collage
- **Era / design-movement influence:** Vaporwave, 1990s
- **Composition / layout system:** Collage Composition
- **Color treatment:** Pastel, Gradient
- **Texture:** CRT Scanlines
- **Typography:** Editorial Serif
- **Motion language:** Floating
- **Transition language:** Glitch Transition, Dissolve

## Do's and Don'ts

- Do keep the accent (#7ee8fa) for the single most important element in each frame.
- Do use DM Serif Display large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't mix surface treatments; everything is gradient.
- Don't confuse it: Not synthwave: vaporwave is pastel, ironic and collaged; synthwave is dark, neon and sincere.

## References

- Search: "vaporwave aesthetic animation"
- Search: "vaporwave collage motion"
- Search: "aesthetic pastel grid video"
