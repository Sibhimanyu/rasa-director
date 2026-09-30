---
name: "Arts and Crafts"
description: "A Kelmscott contents page: blackletter title, ruled chapters with roman numerals in madder red, willow green, handmade paper."
colors:
  canvas: "#efe6d0"        # page ground
  ink: "#1b1814"           # headlines and body text
  accent: "#9c2f24"        # primary accent: the one thing that matters in each frame
  support: "#4e6b3a"       # supporting colour, used sparingly
  surface: "#f6efdd"       # raised cards and panels
  muted: "#6c604b"         # muted captions
typography:
  display:
    fontFamily: Grenze Gotisch
    fontWeight: 700
  body:
    fontFamily: Cormorant Garamond
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "5px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Arts and Crafts

A motion-graphics design system from Rasa Director's style library (Heritage). Also known as William Morris style, Kelmscott Press, Arts & Crafts movement, Morris & Co..

## Overview

A Kelmscott contents page: blackletter title, ruled chapters with roman numerals in madder red, willow green, handmade paper.

It feels crafted, earnest, rich. Use it for book and publishing, craft, textile and home, heritage and wellness brands, literary titles.

## Visual language

- **Type:** Grenze Gotisch (display, weight 700, tracking 0em) with Cormorant Garamond for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 5px solid in ink.
- **Depth:** no shadows.
- **Texture:** paper. **Icons:** line. **Decoration:** rules.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Print-Editorial, Handmade / Craft
- **Material / surface language:** Paper
- **Texture:** Paper Grain, Print Grain
- **Color treatment:** Earth Tones, Muted
- **Typography:** Display Typography, Editorial Serif
- **Composition / layout system:** Editorial Grid, Typography-Led Composition
- **Motion language:** Smooth
- **Transition language:** Page Flip, Wipe

## Do's and Don'ts

- Do keep the accent (#9c2f24) for the single most important element in each frame.
- Do use Grenze Gotisch large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not Art Nouveau: Arts and Crafts is medieval, dense and book-like, black-bordered pages, not flowing whiplash curves.

## References

- Search: "William Morris animation"
- Search: "Kelmscott Press typography"
- Search: "arts and crafts movement motion graphics"
