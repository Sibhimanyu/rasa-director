---
name: "Cut-and-paste zine"
description: "Black-and-white photocopied scraps pasted crooked, ransom-note type, halftone dots and one hot-pink spot colour."
colors:
  canvas: "#e9e6df"        # page ground
  ink: "#0d0d0d"           # headlines and body text
  accent: "#ff2e88"        # primary accent: the one thing that matters in each frame
  support: "#1a1a1a"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#555555"         # muted captions
typography:
  display:
    fontFamily: Rubik Dirt
    fontWeight: 400
  body:
    fontFamily: Courier Prime
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "10px 10px 0 #0d0d0d"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Cut-and-paste zine

A motion-graphics design system from Rasa Director's style library (Handmade & printed). Also known as punk zine, DIY zine, ransom-note collage, xerox zine.

## Overview

Black-and-white photocopied scraps pasted crooked, ransom-note type, halftone dots and one hot-pink spot colour.

It feels rebellious, raw, loud. Use it for music and gig promos, streetwear, activist campaigns, counter-culture brands.

## Visual language

- **Type:** Rubik Dirt (display, weight 400, uppercase, tracking 0em) with Courier Prime for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 3px solid in ink.
- **Depth:** hard shadows (`10px 10px 0 #0d0d0d`).
- **Texture:** halftone. **Icons:** glyph. **Decoration:** none.

## Motion

Motion language: **Chaotic**. Many elements moving at once in varied directions, speeds and scales, deliberately overwhelming before resolving.
- Enter `power4.out`, exit `power4.in`, move `expo.inOut`; durations 80 / 150 / 250 / 400 / 700 ms; stagger 20 ms; hold at least 350 ms.
- Never: fade-up-slide, opacity-only-entrance, blur-in.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Punk / Zine, Photocopy / Xerox
- **Composition / layout system:** Collage Composition
- **Illustration style:** Photo Collage, Collage
- **Material / surface language:** Photocopy
- **Texture:** Photocopy Noise, Halftone
- **Color treatment:** Black and White, High Contrast
- **Motion language:** Chaotic
- **Transition language:** Hard Cut, Flash Transition

## Do's and Don'ts

- Do keep the accent (#ff2e88) for the single most important element in each frame.
- Do use Rubik Dirt large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not scrapbook: harsh xerox contrast and aggression, not pastel keepsakes.

## References

- Search: "punk zine collage animation"
- Search: "ransom note typography motion"
- Search: "xerox collage video"
