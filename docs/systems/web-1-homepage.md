---
name: "Web 1.0 homepage"
description: "Times headings and bright yellow text on a starry navy tile, beveled table borders, hit-counter energy and pixel GIF icons."
colors:
  canvas: "#0b0b3b"        # page ground
  ink: "#ffff66"           # headlines and body text
  accent: "#33ff33"        # primary accent: the one thing that matters in each frame
  support: "#ff66ff"       # supporting colour, used sparingly
  surface: "#000080"       # raised cards and panels
  muted: "#9ad0ff"         # muted captions
typography:
  display:
    fontFamily: Tinos
    fontWeight: 700
  body:
    fontFamily: Tinos
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "5px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Web 1.0 homepage

A motion-graphics design system from Rasa Director's style library (Retro & eras). Also known as GeoCities, 90s personal homepage, under construction web, old internet.

## Overview

Times headings and bright yellow text on a starry navy tile, beveled table borders, hit-counter energy and pixel GIF icons.

It feels naive, funny, nostalgic. Use it for meme-literate brand content, internet-culture films, retro landing-page teasers.

## Visual language

- **Type:** Tinos (display, weight 700, tracking 0em) with Tinos for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 5px double in #c0c0c0.
- **Depth:** no shadows.
- **Texture:** dots. **Icons:** pixel. **Decoration:** stars.

## Motion

Motion language: **Choppy / Stepped**. No interpolation as an aesthetic: elements jump between a few discrete positions or cut instantly.
- Enter `steps(4)`, exit `steps(3)`, move `steps(6)`; durations 100 / 160 / 250 / 400 / 600 ms; stagger 60 ms; hold at least 500 ms.
- Never: fade-up-slide, fade-slide, blur-in, bounce, overshoot, opacity-only-entrance.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Web 1.0
- **Era / design-movement influence:** Web 1.0, 1990s
- **UI treatment:** Retro UI, Browser-Framed UI
- **Line / stroke language:** Double-Line
- **Typography:** Editorial Serif
- **Color treatment:** High Saturation, Dark UI
- **Motion language:** Choppy / Stepped
- **Transition language:** Hard Cut, Wipe

## Do's and Don'ts

- Do keep the accent (#33ff33) for the single most important element in each frame.
- Do use Tinos large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not vaporwave: Web 1.0 is sincere amateur HTML, not a pastel ironic collage.

## References

- Search: "geocities aesthetic animation"
- Search: "web 1.0 motion graphics"
- Search: "90s homepage style video"
