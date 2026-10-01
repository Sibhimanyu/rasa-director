---
name: "Election-night map"
description: "White districts on cool grey, red and blue regions filling in, hatched too-close-to-call areas, pinned results in a newsroom sans."
colors:
  canvas: "#e9ecf1"        # page ground
  ink: "#14171c"           # headlines and body text
  accent: "#d62839"        # primary accent: the one thing that matters in each frame
  support: "#2458c6"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#687080"         # muted captions
typography:
  display:
    fontFamily: Libre Franklin
    fontWeight: 800
  body:
    fontFamily: Libre Franklin
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 4px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Election-night map

A motion-graphics design system from RasanAI's style library (Broadcast). Also known as election results map, results night graphics, red and blue map, decision desk.

## Overview

White districts on cool grey, red and blue regions filling in, hatched too-close-to-call areas, pinned results in a newsroom sans.

It feels authoritative, suspenseful, clear. Use it for results and rollouts, regional reports, news and civic explainers, market-share maps.

## Visual language

- **Type:** Libre Franklin (display, weight 800, tracking -0.02em) with Libre Franklin for body text.
- **Surfaces:** flat fills, no gradients; corners 4px; outlines 2px solid in #aab2c0.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Editorial
- **Information / data visualization:** Map, Status Indicator, Statistic Callout
- **Format / purpose:** News Graphics, Map Animation
- **Color treatment:** Complementary, Light UI
- **Camera language:** Top-Down, Zoom
- **Motion function:** Show Location, Show Data Change
- **Motion language:** Precise
- **Transition language:** Wipe, Zoom Transition
- **Emotional / brand tone:** Serious, Trustworthy

## Do's and Don'ts

- Do keep the accent (#d62839) for the single most important element in each frame.
- Do use Libre Franklin large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a map explainer: a results map, two opposing colours filling regions and calls being made, not a route between places.

## References

- Search: "election night map graphics"
- Search: "election results map animation"
- Search: "red blue results map broadcast"
