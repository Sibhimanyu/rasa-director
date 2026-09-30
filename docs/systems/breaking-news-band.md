---
name: "Breaking-news band"
description: "Footage under a white lower-third slab with a red Breaking tab, navy crawl band, yellow Live chip and a channel bug."
colors:
  canvas: "#0b1630"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#d10a11"        # primary accent: the one thing that matters in each frame
  support: "#ffd100"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#9aa6bf"         # muted captions
typography:
  display:
    fontFamily: Archivo Narrow
    fontWeight: 700
  body:
    fontFamily: Archivo
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Breaking-news band

A motion-graphics design system from Rasa Director's style library (Broadcast). Also known as breaking news lower third, news ticker, rolling news, news crawl.

## Overview

Footage under a white lower-third slab with a red Breaking tab, navy crawl band, yellow Live chip and a channel bug.

It feels urgent, credible, immediate. Use it for announcements, news-style promos, PR and statements, live updates.

## Visual language

- **Type:** Archivo Narrow (display, weight 700, uppercase, tracking -0.01em) with Archivo for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** glyph. **Decoration:** none.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Editorial
- **Format / purpose:** News Graphics, Lower Thirds
- **Photo / video integration:** Full-Bleed Footage
- **Composition / layout system:** Full Bleed, Layered Depth
- **Typography:** Condensed, Neutral Sans Serif
- **Color treatment:** Accent-Color System, High Contrast
- **Motion language:** Precise
- **Pacing / rhythm:** Event-Driven
- **Transition language:** Wipe, Push
- **Emotional / brand tone:** Urgent, Serious

## Do's and Don'ts

- Do keep the accent (#d10a11) for the single most important element in each frame.
- Do use Archivo Narrow large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a news package: only the on-air overlay layer (tab, slab, crawl, bug) over footage, no studio panels or globes.

## References

- Search: "breaking news lower third animation"
- Search: "news ticker motion graphics"
- Search: "rolling news overlay"
