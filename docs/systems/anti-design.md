---
name: "Anti-design"
description: "Clashing lime and magenta, sketchy wobbling outlines, cheap pop-up windows, squiggles and a comic-ish face on purpose."
colors:
  canvas: "#b8ff2e"        # page ground
  ink: "#1a0033"           # headlines and body text
  accent: "#ff1fb4"        # primary accent: the one thing that matters in each frame
  support: "#3a1cff"       # supporting colour, used sparingly
  surface: "#fff45c"       # raised cards and panels
  muted: "#5b3a00"         # muted captions
typography:
  display:
    fontFamily: Bricolage Grotesque
    fontWeight: 800
  body:
    fontFamily: Comic Neue
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 4px
shadows:
  card: "7px 7px 0 #ff1fb4, 14px 14px 0 #1a0033"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "4px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Anti-design

A motion-graphics design system from RasanAI's style library (Bold & graphic). Also known as ugly design, maximalist anti-design, clashing web, deliberately bad design.

## Overview

Clashing lime and magenta, sketchy wobbling outlines, cheap pop-up windows, squiggles and a comic-ish face on purpose.

It feels chaotic, ironic, rebellious, funny. Use it for Gen Z social, meme-literate brands, music drops, provocative teasers.

## Visual language

- **Type:** Bricolage Grotesque (display, weight 800, tracking -0.04em) with Comic Neue for body text.
- **Surfaces:** flat fills, no gradients; corners 4px; outlines 4px sketch in ink.
- **Depth:** layered shadows (`7px 7px 0 #ff1fb4, 14px 14px 0 #1a0033`).
- **Texture:** noise. **Icons:** doodle. **Decoration:** squiggles.

## Motion

Motion language: **Chaotic**. Many elements moving at once in varied directions, speeds and scales, deliberately overwhelming before resolving.
- Enter `power4.out`, exit `power4.in`, move `expo.inOut`; durations 80 / 150 / 250 / 400 / 700 ms; stagger 20 ms; hold at least 350 ms.
- Never: fade-up-slide, opacity-only-entrance, blur-in.
- Preview entrance: glitch.

## The terms that define it

- **Visual style / art direction:** Brutalism, Punk / Zine
- **UI treatment:** Windowed UI, Stylized UI
- **Line / stroke language:** Rough, Hand-Drawn
- **Color treatment:** High Saturation, Complementary
- **Typography:** Display Typography, Distorted Type
- **Composition / layout system:** Collage Composition, Asymmetric Composition
- **Motion language:** Chaotic
- **Transition language:** Hard Cut, Glitch Transition

## Do's and Don'ts

- Do keep the accent (#ff1fb4) for the single most important element in each frame.
- Do use Bricolage Grotesque large and confident; one idea per frame.
- Do keep every shadow the same layered style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not raw brutalism: anti-design adds loud clashing colour and mess; raw brutalism is bare and colourless.

## References

- Search: "anti design graphic motion"
- Search: "ugly aesthetic animation"
- Search: "maximalist clashing web design"
