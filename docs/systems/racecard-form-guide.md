---
name: "Racecard form guide"
description: "Turf-green card with cream slab-serif runners, gold odds chips and thin newsprint rules, like a racecard read trackside."
colors:
  canvas: "#0e3b2c"        # page ground
  ink: "#f6f1e1"           # headlines and body text
  accent: "#e8b93a"        # primary accent: the one thing that matters in each frame
  support: "#c8102e"       # supporting colour, used sparingly
  surface: "#154a38"       # raised cards and panels
  muted: "#a9bfae"         # muted captions
typography:
  display:
    fontFamily: Zilla Slab
    fontWeight: 700
  body:
    fontFamily: Roboto Condensed
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Racecard form guide

A motion-graphics design system from RasanAI's style library (Broadcast). Also known as horse racing graphics, form guide, runners and riders, racing post style.

## Overview

Turf-green card with cream slab-serif runners, gold odds chips and thin newsprint rules, like a racecard read trackside.

It feels traditional, informed, sporting. Use it for racing and betting, heritage sport, rankings and shortlists, event line-ups.

## Visual language

- **Type:** Zilla Slab (display, weight 700, tracking -0.01em) with Roboto Condensed for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** none. **Decoration:** rules.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Print-Editorial
- **Format / purpose:** Sports Graphics
- **Typography:** Slab Serif, Condensed
- **Information / data visualization:** Table, Ranking List
- **Color treatment:** Earth Tones, Limited Palette
- **Material / surface language:** Newsprint
- **Texture:** Print Grain
- **Motion language:** Precise
- **Transition language:** Slide, Wipe
- **Emotional / brand tone:** Professional, Nostalgic

## Do's and Don'ts

- Do keep the accent (#e8b93a) for the single most important element in each frame.
- Do use Zilla Slab large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a league table package: a printed racecard's slab serif, rules and odds, calm and traditional rather than loud and slabbed.

## References

- Search: "horse racing broadcast graphics"
- Search: "racecard form guide design"
- Search: "runners and riders graphic"
