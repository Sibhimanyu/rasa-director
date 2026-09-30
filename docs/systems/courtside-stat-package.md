---
name: "Courtside stat package"
description: "One towering condensed stat in broadcast red on black, a white caption rule, a player trend chart, cuts on every beat."
colors:
  canvas: "#0f0f10"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#e4202a"        # primary accent: the one thing that matters in each frame
  support: "#f58426"       # supporting colour, used sparingly
  surface: "#1c1c1f"       # raised cards and panels
  muted: "#9a9aa0"         # muted captions
typography:
  display:
    fontFamily: Teko
    fontWeight: 600
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

# Courtside stat package

A motion-graphics design system from Rasa Director's style library (Broadcast). Also known as basketball broadcast graphics, NBA on ESPN look, player stat card, stat bug.

## Overview

One towering condensed stat in broadcast red on black, a white caption rule, a player trend chart, cuts on every beat.

It feels punchy, competitive, confident. Use it for sports highlights, athlete and creator stats, fitness milestones, recap reels.

## Visual language

- **Type:** Teko (display, weight 600, uppercase, tracking 0em) with Roboto Condensed for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Modernist
- **Format / purpose:** Sports Graphics, Statistics Animation
- **Typography:** Condensed, Display Typography
- **Information / data visualization:** Statistic Callout, Number Counter, Line Graph
- **Color treatment:** High Contrast, Limited Palette
- **Motion language:** Snappy
- **Pacing / rhythm:** Staccato
- **Transition language:** Hard Cut, Wipe
- **Emotional / brand tone:** Energetic, Bold

## Do's and Don'ts

- Do keep the accent (#e4202a) for the single most important element in each frame.
- Do use Teko large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a metric count-up: dark, red and sport-coded with a player's trend panel, not a neutral black-on-white KPI.

## References

- Search: "nba broadcast stat graphics"
- Search: "basketball player stat animation"
- Search: "espn stat card motion graphics"
