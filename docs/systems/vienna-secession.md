---
name: "Vienna Secession"
description: "Ver Sacrum pages: black and gold on cream, square checkerboard grids, tall geometric Secession lettering, strict symmetrical blocks."
colors:
  canvas: "#efe8d6"        # page ground
  ink: "#16140f"           # headlines and body text
  accent: "#a8802a"        # primary accent: the one thing that matters in each frame
  support: "#16140f"       # supporting colour, used sparingly
  surface: "#f7f2e4"       # raised cards and panels
  muted: "#76694f"         # muted captions
typography:
  display:
    fontFamily: Federo
    fontWeight: 400
  body:
    fontFamily: Spectral
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px solid {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Vienna Secession

A motion-graphics design system from RasanAI's style library (Heritage). Also known as Secession style, Wiener Werkstätte, Ver Sacrum, Jugendstil Vienna, Klimt style.

## Overview

Ver Sacrum pages: black and gold on cream, square checkerboard grids, tall geometric Secession lettering, strict symmetrical blocks.

It feels stately, ornamental, disciplined, artful. Use it for museum and exhibition films, architecture and interiors, cultural institutions, premium book and wine brands.

## Visual language

- **Type:** Federo (display, weight 400, uppercase, tracking 0.06em) with Spectral for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 3px double in accent.
- **Depth:** no shadows.
- **Texture:** paper. **Icons:** glyph. **Decoration:** grid.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Print-Editorial, Abstract Geometric
- **Composition / layout system:** Symmetrical Composition, Editorial Grid
- **Color treatment:** Limited Palette, High Contrast
- **Shape language:** Rectilinear, Geometric
- **Line / stroke language:** Double-Line
- **Typography:** Display Typography, Condensed
- **Texture:** Paper Grain
- **Motion language:** Smooth
- **Transition language:** Mask Reveal, Wipe

## Do's and Don'ts

- Do keep the accent (#a8802a) for the single most important element in each frame.
- Do use Federo large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not art deco: Secession is 1900 Vienna, flat squares and checkerboards on cream paper; deco is 1920s sunbursts and streamlined glamour.

## References

- Search: "Vienna Secession poster animation"
- Search: "Ver Sacrum typography"
- Search: "Koloman Moser graphic design motion"
