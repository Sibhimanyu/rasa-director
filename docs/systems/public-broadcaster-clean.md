---
name: "Public-broadcaster clean"
description: "Pure white with one sober news red, a plain grotesk headline, ruled margins, flat grey data cards and nothing decorative."
colors:
  canvas: "#ffffff"        # page ground
  ink: "#141414"           # headlines and body text
  accent: "#b80000"        # primary accent: the one thing that matters in each frame
  support: "#3f3f42"       # supporting colour, used sparingly
  surface: "#f1f1f1"       # raised cards and panels
  muted: "#5a5a5a"         # muted captions
typography:
  display:
    fontFamily: Public Sans
    fontWeight: 800
  body:
    fontFamily: Public Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Public-broadcaster clean

A motion-graphics design system from RasanAI's style library (Broadcast). Also known as BBC-style graphics, public service broadcast look, clean news explainer, reality check style.

## Overview

Pure white with one sober news red, a plain grotesk headline, ruled margins, flat grey data cards and nothing decorative.

It feels trustworthy, calm, impartial. Use it for explainers and fact-checks, public sector and NGOs, research findings, policy and health updates.

## Visual language

- **Type:** Public Sans (display, weight 800, tracking -0.02em) with Public Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** rules.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Swiss / International Typographic Style, Clean Minimalism
- **Format / purpose:** News Graphics, Concept Explainer
- **Typography:** Neo-Grotesk
- **Composition / layout system:** Swiss Grid, Negative-Space Composition
- **Information / data visualization:** Bar Chart, Statistic Callout
- **Color treatment:** Accent-Color System, Light UI
- **Motion language:** Precise
- **Transition language:** Push, Wipe
- **Emotional / brand tone:** Trustworthy, Serious

## Do's and Don'ts

- Do keep the accent (#b80000) for the single most important element in each frame.
- Do use Public Sans large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not Swiss poster type: a newsroom explainer system of cards and charts, restrained and legible rather than typographic art.

## References

- Search: "bbc news graphics style"
- Search: "public broadcaster explainer animation"
- Search: "clean news explainer motion graphics"
