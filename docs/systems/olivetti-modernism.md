---
name: "Olivetti modernism"
description: "Playful giant numerals and flat fields of red, cobalt and sun yellow on white, lowercase geometric sans, a precise Milanese grid."
colors:
  canvas: "#f6f4ee"        # page ground
  ink: "#1a1a1a"           # headlines and body text
  accent: "#e2231a"        # primary accent: the one thing that matters in each frame
  support: "#1f4aa8"       # supporting colour, used sparingly
  surface: "#f8d21c"       # raised cards and panels
  muted: "#77746c"         # muted captions
typography:
  display:
    fontFamily: Jost
    fontWeight: 500
  body:
    fontFamily: Jost
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Olivetti modernism

A motion-graphics design system from Rasa Director's style library (Heritage). Also known as Italian corporate modernism, Pintori style, Olivetti poster, Milanese modernism.

## Overview

Playful giant numerals and flat fields of red, cobalt and sun yellow on white, lowercase geometric sans, a precise Milanese grid.

It feels witty, optimistic, intelligent. Use it for fintech and calculators, office and productivity tools, corporate brand films, annual reports.

## Visual language

- **Type:** Jost (display, weight 500, lowercase, tracking -0.03em) with Jost for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Playful**. Light, cheeky motion with small overshoots, tilts and secondary wiggles, playful in intent rather than in strict physics.
- Enter `back.out(1.7)`, exit `back.in(1.7)`, move `sine.inOut`; durations 160 / 280 / 450 / 700 / 1000 ms; stagger 40 ms; hold at least 600 ms.
- Never: fade-up-slide, linear-entrance, blur-in.
- Preview entrance: pop.

## The terms that define it

- **Visual style / art direction:** Modernist, Mid-Century Modern
- **Era / design-movement influence:** Mid-Century Modern
- **Color treatment:** Primary Colors, Color Blocking
- **Typography:** Geometric Sans, Display Typography
- **Composition / layout system:** Asymmetric Composition, Swiss Grid
- **Information / data visualization:** Number Counter, Statistic Callout
- **Motion language:** Playful
- **Transition language:** Slide, Scale Transition

## Do's and Don'ts

- Do keep the accent (#e2231a) for the single most important element in each frame.
- Do use Jost large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not American mid-century: Italian corporate design is lighter and wittier, abstract numbers and letters rather than atomic stars.

## References

- Search: "Giovanni Pintori Olivetti poster"
- Search: "Olivetti graphic design animation"
- Search: "Italian modernism motion graphics"
