---
name: "Activity book"
description: "A kids-magazine spread: marker-drawn headline, ruled columns, one big tomato panel, sketchy outlines and doodles on grid paper."
colors:
  canvas: "#fbfaf4"        # page ground
  ink: "#1f2a44"           # headlines and body text
  accent: "#ff6f59"        # primary accent: the one thing that matters in each frame
  support: "#43aa8b"       # supporting colour, used sparingly
  surface: "#ff6f59"       # raised cards and panels
  muted: "#8b93a6"         # muted captions
typography:
  display:
    fontFamily: Permanent Marker
    fontWeight: 400
  body:
    fontFamily: Patrick Hand
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 10px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Activity book

A motion-graphics design system from RasanAI's style library (Playful & pop). Also known as kids magazine, puzzle book style, activity page, children's magazine layout.

## Overview

A kids-magazine spread: marker-drawn headline, ruled columns, one big tomato panel, sketchy outlines and doodles on grid paper.

It feels curious, hands-on, cheerful, clever. Use it for educational series, museum and science, family brands, quiz and puzzle content.

## Visual language

- **Type:** Permanent Marker (display, weight 400, tracking 0em) with Patrick Hand for body text.
- **Surfaces:** flat fills, no gradients; corners 10px; outlines 3px sketch in ink.
- **Depth:** no shadows.
- **Texture:** grid. **Icons:** doodle. **Decoration:** squiggles.

## Motion

Motion language: **Handmade / Imperfect**. Deliberately imperfect motion with frame-to-frame jitter (line boil), uneven spacing and slightly irregular timing, as if drawn by hand.
- Enter `power2.out`, exit `power2.in`, move `steps(3)`; durations 160 / 280 / 450 / 700 / 1000 ms; stagger 90 ms; hold at least 800 ms.
- Never: fade-up-slide, blur-in, linear-entrance, opacity-only-entrance.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Childlike / Naive, Doodle
- **Composition / layout system:** Editorial Grid, Illustration-Led Composition
- **Typography:** Handwritten / Script, Rounded Sans
- **Illustration style:** Doodle, Hand-Drawn
- **Line / stroke language:** Marker, Hand-Drawn
- **Texture:** Pencil
- **Color treatment:** Primary Colors
- **Motion language:** Handmade / Imperfect
- **Transition language:** Page Flip, Line-Draw Transition

## Do's and Don'ts

- Do keep the accent (#ff6f59) for the single most important element in each frame.
- Do use Permanent Marker large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not editorial: the same magazine structure, but handwritten, doodled and made for kids.

## References

- Search: "kids magazine animation"
- Search: "activity book motion design"
- Search: "children's editorial layout animation"
