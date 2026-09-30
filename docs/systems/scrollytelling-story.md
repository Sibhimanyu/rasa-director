---
name: "Scrollytelling story"
description: "A vertical phone story on midnight navy: cream display-serif headline, one chart card per scroll step, a single hot-magenta highlight."
colors:
  canvas: "#14142b"        # page ground
  ink: "#f6f1e7"           # headlines and body text
  accent: "#ff3d9a"        # primary accent: the one thing that matters in each frame
  support: "#4f8bff"       # supporting colour, used sparingly
  surface: "#23234a"       # raised cards and panels
  muted: "#9a98b8"         # muted captions
typography:
  display:
    fontFamily: DM Serif Display
    fontWeight: 400
  body:
    fontFamily: DM Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 16px
shadows:
  card: "0 40px 70px -16px rgba(0,0,0,0.3)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Scrollytelling story

A motion-graphics design system from Rasa Director's style library (Data & explainers). Also known as vertical data story, Instagram explainer, mobile data narrative.

## Overview

A vertical phone story on midnight navy: cream display-serif headline, one chart card per scroll step, a single hot-magenta highlight.

It feels intimate, engaging, modern. Use it for social explainers, vertical data stories, newsletter promos.

## Visual language

- **Type:** DM Serif Display (display, weight 400, tracking -0.01em) with DM Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 16px; outlines none.
- **Depth:** float shadows (`0 40px 70px -16px rgba(0,0,0,0.3)`).
- **Texture:** grain. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Fluid**. Uninterrupted flow in which every state change hands off into the next, with no visible stops or cuts between elements.
- Enter `power3.inOut`, exit `power3.inOut`, move `sine.inOut`; durations 300 / 500 / 800 / 1200 / 1800 ms; stagger 40 ms; hold at least 900 ms.
- Never: fade-up-slide, bounce, scale-pop, linear-entrance, opacity-only-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Editorial
- **UI treatment:** Device-Bound UI
- **Information / data visualization:** Bar Chart, Statistic Callout, Comparison Cards
- **Format / purpose:** Animated Infographic, Brand Social Content
- **UI interaction motion:** Scroll
- **Composition / layout system:** Phone Composition, Stacked Cards
- **Narrative structure:** Progressive Reveal
- **Motion language:** Fluid
- **Transition language:** Push, Slide

## Do's and Don'ts

- Do keep the accent (#ff3d9a) for the single most important element in each frame.
- Do use DM Serif Display large and confident; one idea per frame.
- Do keep every shadow the same float style.
- Don't use gradients or glassy surfaces.

## References

- Search: "scrollytelling animation"
- Search: "vertical data story video"
- Search: "instagram explainer carousel motion"
