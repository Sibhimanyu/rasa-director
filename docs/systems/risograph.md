---
name: "Risograph"
description: "Fluoro pink and blue inks overprinting on cream stock, slightly misregistered, grainy dot texture, chunky grotesk."
colors:
  canvas: "#f5efe1"        # page ground
  ink: "#1d3a8a"           # headlines and body text
  accent: "#ff48b0"        # primary accent: the one thing that matters in each frame
  support: "#ffe800"       # supporting colour, used sparingly
  surface: "#fbf7ec"       # raised cards and panels
  muted: "#6c77a8"         # muted captions
typography:
  display:
    fontFamily: Space Grotesk
    fontWeight: 700
  body:
    fontFamily: Space Grotesk
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "10px 10px 0 #1d3a8a"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Risograph

A motion-graphics design system from RasanAI's style library (Handmade & printed). Also known as riso print, riso zine, two-colour riso, stencil duplicator print.

## Overview

Fluoro pink and blue inks overprinting on cream stock, slightly misregistered, grainy dot texture, chunky grotesk.

It feels indie, warm, artful. Use it for cultural and arts brands, indie publishers, event promos, studio reels.

## Visual language

- **Type:** Space Grotesk (display, weight 700, tracking -0.03em) with Space Grotesk for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** hard shadows (`10px 10px 0 #1d3a8a`).
- **Texture:** riso. **Icons:** duotone. **Decoration:** none.

## Motion

Motion language: **Handmade / Imperfect**. Deliberately imperfect motion with frame-to-frame jitter (line boil), uneven spacing and slightly irregular timing, as if drawn by hand.
- Enter `power2.out`, exit `power2.in`, move `steps(3)`; durations 160 / 280 / 450 / 700 / 1000 ms; stagger 90 ms; hold at least 800 ms.
- Never: fade-up-slide, blur-in, linear-entrance, opacity-only-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Risograph, Print-Editorial
- **Material / surface language:** Risograph Ink
- **Texture:** Risograph Texture, Print Grain
- **Color treatment:** Duotone, Fluorescent
- **Typography:** Grotesk
- **Composition / layout system:** Editorial Grid
- **Motion language:** Handmade / Imperfect
- **Transition language:** Wipe, Color Match

## Do's and Don'ts

- Do keep the accent (#ff48b0) for the single most important element in each frame.
- Do use Space Grotesk large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not screen print: riso is grainy, translucent and slightly off-register, not dense opaque layers.

## References

- Search: "risograph animation"
- Search: "riso print motion graphics"
- Search: "risograph texture typography"
