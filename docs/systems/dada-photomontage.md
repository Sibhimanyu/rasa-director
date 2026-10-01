---
name: "Dada photomontage"
description: "Newsprint and halftone photo scraps pasted at odd angles, mismatched heavy grotesk and old serif, black, signal red and grey on yellowed paper."
colors:
  canvas: "#e6dec8"        # page ground
  ink: "#131313"           # headlines and body text
  accent: "#c4201c"        # primary accent: the one thing that matters in each frame
  support: "#8b8a82"       # supporting colour, used sparingly
  surface: "#f4f0e3"       # raised cards and panels
  muted: "#5f5c55"         # muted captions
typography:
  display:
    fontFamily: Chivo
    fontWeight: 900
  body:
    fontFamily: Libre Caslon Text
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Dada photomontage

A motion-graphics design system from RasanAI's style library (Heritage). Also known as Dada collage, Hannah Höch style, Berlin Dada, cut-up montage, anti-art collage.

## Overview

Newsprint and halftone photo scraps pasted at odd angles, mismatched heavy grotesk and old serif, black, signal red and grey on yellowed paper.

It feels absurd, subversive, sharp. Use it for art and culture, satire and commentary, music releases, manifesto films.

## Visual language

- **Type:** Chivo (display, weight 900, uppercase, tracking -0.02em) with Libre Caslon Text for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** halftone. **Icons:** glyph. **Decoration:** none.

## Motion

Motion language: **Stop-Motion-Like**. Motion rendered at a reduced frame rate (12 fps, on twos) so objects jump between held poses like physical stop-motion or hand-drawn animation.
- Enter `steps(6)`, exit `steps(4)`, move `steps(12)`; durations 167 / 250 / 417 / 667 / 1000 ms; stagger 83 ms; hold at least 750 ms.
- Never: fade-up-slide, fade-slide, blur-in, opacity-only-entrance, bounce.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Mixed-Media Collage, Photocopy / Xerox
- **Composition / layout system:** Collage Composition, Asymmetric Composition
- **Texture:** Halftone, Print Grain
- **Color treatment:** Limited Palette, High Contrast
- **Typography:** Grotesk, Editorial Serif
- **Photo / video integration:** Photo Cutout
- **Motion language:** Stop-Motion-Like
- **Transition language:** Hard Cut, Graphic Match

## Do's and Don'ts

- Do keep the accent (#c4201c) for the single most important element in each frame.
- Do use Chivo large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not scrapbook: Dada is anti-art, angular and political, newspaper and photo fragments, never tape-and-sticker keepsakes.

## References

- Search: "Dada photomontage animation"
- Search: "Hannah Hoch collage motion"
- Search: "Dada collage video"
