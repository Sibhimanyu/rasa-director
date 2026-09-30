---
name: "Letraset dry transfer"
description: "Rub-down alphabets on a pale blue backing sheet: tight condensed black capitals, cracked letters, spacing guides and a red sheet number."
colors:
  canvas: "#dde5ea"        # page ground
  ink: "#101112"           # headlines and body text
  accent: "#101112"        # primary accent: the one thing that matters in each frame
  support: "#d4372c"       # supporting colour, used sparingly
  surface: "#e9eef1"       # raised cards and panels
  muted: "#5b6770"         # muted captions
typography:
  display:
    fontFamily: Anton
    fontWeight: 400
  body:
    fontFamily: Archivo
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px dashed {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Letraset dry transfer

A motion-graphics design system from Rasa Director's style library (Print). Also known as Letraset, rub-down lettering, instant lettering, transfer type, dry transfer type.

## Overview

Rub-down alphabets on a pale blue backing sheet: tight condensed black capitals, cracked letters, spacing guides and a red sheet number.

It feels DIY, seventies, graphic, precise. Use it for type and design tools, album and poster promos, architecture and model-making, retro brand films.

## Visual language

- **Type:** Anton (display, weight 400, uppercase, tracking 0em) with Archivo for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 1px dashed in #8fa0ab.
- **Depth:** no shadows.
- **Texture:** noise. **Icons:** glyph. **Decoration:** none.

## Motion

Motion language: **Choppy / Stepped**. No interpolation as an aesthetic: elements jump between a few discrete positions or cut instantly.
- Enter `steps(4)`, exit `steps(3)`, move `steps(6)`; durations 100 / 160 / 250 / 400 / 600 ms; stagger 60 ms; hold at least 500 ms.
- Never: fade-up-slide, fade-slide, blur-in, bounce, overshoot, opacity-only-entrance.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Print-Editorial, Swiss / International Typographic Style
- **Era / design-movement influence:** 1970s
- **Typography:** Condensed, Neo-Grotesk
- **Composition / layout system:** Typography-Led Composition, Swiss Grid
- **Texture:** Distressed Edges, Print Grain
- **Color treatment:** Black and White, Accent-Color System
- **Motion language:** Choppy / Stepped
- **Transition language:** Hard Cut, Wipe
- **Emotional / brand tone:** Nostalgic, Editorial

## Do's and Don'ts

- Do keep the accent (#101112) for the single most important element in each frame.
- Do use Anton large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a type specimen: it is the sheet itself, rows of rub-down letters with nicks and cracks, not a clean foundry showing.

## References

- Search: "letraset animation"
- Search: "dry transfer lettering style"
- Search: "rub down letters typography motion"
