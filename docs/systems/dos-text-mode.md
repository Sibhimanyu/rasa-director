---
name: "DOS text mode"
description: "White and yellow monospace on electric DOS blue, boxy text-mode panels with double-line borders, square and flat."
colors:
  canvas: "#0000aa"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#ffff55"        # primary accent: the one thing that matters in each frame
  support: "#55ffff"       # supporting colour, used sparingly
  surface: "#0000aa"       # raised cards and panels
  muted: "#aaaaaa"         # muted captions
typography:
  display:
    fontFamily: IBM Plex Mono
    fontWeight: 700
  body:
    fontFamily: IBM Plex Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "10px 10px 0 #ffffff"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "6px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# DOS text mode

A motion-graphics design system from Rasa Director's style library (Retro & eras). Also known as BIOS blue screen, Norton Commander, MS-DOS UI, ANSI text mode.

## Overview

White and yellow monospace on electric DOS blue, boxy text-mode panels with double-line borders, square and flat.

It feels utilitarian, nerdy, retro. Use it for dev tools, infrastructure and ops, retro tech explainers, installer-style onboarding.

## Visual language

- **Type:** IBM Plex Mono (display, weight 700, uppercase, tracking 0em) with IBM Plex Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 6px double in #aaaaaa.
- **Depth:** hard shadows (`10px 10px 0 #ffffff`).
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Robotic**. Sequenced, one-thing-at-a-time motion like a servo or robot arm: quick accelerate-decelerate moves separated by dead stops.
- Enter `power3.inOut`, exit `power3.in`, move `power3.inOut`; durations 120 / 200 / 300 / 450 / 700 ms; stagger 150 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism, Web 1.0
- **Era / design-movement influence:** Early Desktop Computing, 1980s
- **UI treatment:** Terminal / Code UI, Retro UI
- **Typography:** Monospace
- **Line / stroke language:** Double-Line
- **Color treatment:** Limited Palette, High Contrast
- **Motion language:** Robotic
- **Transition language:** Hard Cut, Wipe

## Do's and Don'ts

- Do keep the accent (#ffff55) for the single most important element in each frame.
- Do use IBM Plex Mono large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not the green CRT: text mode is flat, blue and panel-based with no glow or tube curvature.

## References

- Search: "ms dos text mode animation"
- Search: "bios blue screen UI motion"
- Search: "norton commander aesthetic"
