---
name: "Bento showcase"
description: "Features packed into a tight grid of rounded white tiles on light grey, each tile one stat, icon or screenshot, revealed in sequence."
colors:
  canvas: "#f5f5f7"        # page ground
  ink: "#1d1d1f"           # headlines and body text
  accent: "#0071e3"        # primary accent: the one thing that matters in each frame
  support: "#ff9f0a"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#6e6e73"         # muted captions
typography:
  display:
    fontFamily: Inter Tight
    fontWeight: 700
  body:
    fontFamily: Inter
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 28px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Bento showcase

A motion-graphics design system from RasanAI's style library (Product & UI). Also known as bento grid, Apple bento, feature grid reveal.

## Overview

Features packed into a tight grid of rounded white tiles on light grey, each tile one stat, icon or screenshot, revealed in sequence.

It feels organized, premium, scannable. Use it for feature roundups, launch recaps, landing-page heroes.

## Visual language

- **Type:** Inter Tight (display, weight 700, tracking -0.04em) with Inter for body text.
- **Surfaces:** flat fills, no gradients; corners 28px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: pop.

## The terms that define it

- **Visual style / art direction:** Clean Minimalism
- **UI treatment:** Bento UI, Floating-Card UI
- **Composition / layout system:** Bento Grid, Modular Grid
- **Information / data visualization:** Statistic Callout
- **Shape language:** Rounded
- **Color treatment:** Light UI, Accent-Color System
- **Product demonstration language:** Feature Montage
- **Motion language:** Snappy
- **Transition language:** Scale Transition, UI Morph

## Do's and Don'ts

- Do keep the accent (#0071e3) for the single most important element in each frame.
- Do use Inter Tight large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not dashboard showcase: tiles are curated feature moments, not live metrics.

## References

- Search: "bento grid animation"
- Search: "apple bento feature reveal"
- Search: "bento ui motion design"
