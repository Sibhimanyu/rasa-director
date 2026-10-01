---
name: "Comic book"
description: "Panels with inked outlines on halftone, starburst accents, red and cyan, punchy all-caps lettering like a Sunday comic."
colors:
  canvas: "#fff4d6"        # page ground
  ink: "#111111"           # headlines and body text
  accent: "#e8262b"        # primary accent: the one thing that matters in each frame
  support: "#1aa7e0"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#6e5a33"         # muted captions
typography:
  display:
    fontFamily: Bangers
    fontWeight: 400
  body:
    fontFamily: Comic Neue
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 4px
shadows:
  card: "10px 10px 0 #111111"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "5px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Comic book

A motion-graphics design system from RasanAI's style library (Playful & pop). Also known as comic style, graphic novel, superhero comic, speech-bubble style.

## Overview

Panels with inked outlines on halftone, starburst accents, red and cyan, punchy all-caps lettering like a Sunday comic.

It feels dramatic, fun, action-packed, narrative. Use it for story-led explainers, gaming, launch trailers, entertainment promos.

## Visual language

- **Type:** Bangers (display, weight 400, uppercase, tracking 0.03em) with Comic Neue for body text.
- **Surfaces:** flat fills, no gradients; corners 4px; outlines 5px solid in ink.
- **Depth:** hard shadows (`10px 10px 0 #111111`).
- **Texture:** halftone. **Icons:** filled. **Decoration:** stars.

## Motion

Motion language: **Cartoonish**. Exaggerated classical-animation physics: big anticipation, squash and stretch, smear-like speed, overshoot and snappy holds.
- Enter `back.out(2.5)`, exit `back.in(2)`, move `elastic.out(1.2,0.4)`; durations 100 / 200 / 350 / 600 / 1000 ms; stagger 50 ms; hold at least 500 ms.
- Never: fade-up-slide, fade-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Comic-Book Style, Halftone
- **Illustration style:** Ink Illustration, Cartoon
- **Texture:** Halftone
- **Line / stroke language:** Ink, Heavy
- **Typography:** Display Typography, Handwritten / Script
- **Composition / layout system:** Floating Cards, Asymmetric Composition
- **Color treatment:** Primary Colors
- **Motion language:** Cartoonish
- **Transition language:** Hard Cut, Flash Transition
- **Narrative structure:** Setup → Anticipation → Payoff

## Do's and Don'ts

- Do keep the accent (#e8262b) for the single most important element in each frame.
- Do use Bangers large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not pop art: comic book tells a story in panels with lettering and action; pop art is a single ironic image.

## References

- Search: "comic book motion graphics"
- Search: "comic panel animation"
- Search: "comic style explainer video"
