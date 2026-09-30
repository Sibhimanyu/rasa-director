---
name: "Metric count-up"
description: "One enormous condensed number ticking up beside a rising line, black on white, a single punchy orange for the delta."
colors:
  canvas: "#ffffff"        # page ground
  ink: "#0b0b0b"           # headlines and body text
  accent: "#ff3d00"        # primary accent: the one thing that matters in each frame
  support: "#111111"       # supporting colour, used sparingly
  surface: "#f2f2f2"       # raised cards and panels
  muted: "#6b6b6b"         # muted captions
typography:
  display:
    fontFamily: Anton
    fontWeight: 400
  body:
    fontFamily: Inter
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Metric count-up

A motion-graphics design system from Rasa Director's style library (Data & explainers). Also known as stat reveal, number ticker, big number.

## Overview

One enormous condensed number ticking up beside a rising line, black on white, a single punchy orange for the delta.

It feels decisive, impressive, punchy. Use it for milestone announcements, investor and earnings clips, social stat cards.

## Visual language

- **Type:** Anton (display, weight 400, uppercase, tracking -0.01em) with Inter for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Swiss / International Typographic Style
- **Information / data visualization:** Number Counter, Statistic Callout, Area Chart
- **Typography:** Grotesk, Condensed
- **Format / purpose:** Statistics Animation
- **Composition / layout system:** Typography-Led Composition
- **Motion function:** Show Data Change
- **Motion language:** Snappy
- **Transition language:** Hard Cut, Scale Transition

## Do's and Don'ts

- Do keep the accent (#ff3d00) for the single most important element in each frame.
- Do use Anton large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.

## References

- Search: "number count up animation"
- Search: "big stat motion graphic"
- Search: "kpi ticker animation"
