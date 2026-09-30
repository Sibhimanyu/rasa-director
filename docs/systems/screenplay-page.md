---
name: "Screenplay page"
description: "A shooting-script page: Courier Prime on cream bond, sluglines and dialogue typing out, red-pencil revisions and a soft page shadow."
colors:
  canvas: "#e6dfd0"        # page ground
  ink: "#1f1c18"           # headlines and body text
  accent: "#c0392b"        # primary accent: the one thing that matters in each frame
  support: "#8a7f6a"       # supporting colour, used sparingly
  surface: "#fbf8f0"       # raised cards and panels
  muted: "#857b6c"         # muted captions
typography:
  display:
    fontFamily: Courier Prime
    fontWeight: 700
  body:
    fontFamily: Courier Prime
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Screenplay page

A motion-graphics design system from Rasa Director's style library (Editorial & print). Also known as script format, typescript, Courier page, shooting script.

## Overview

A shooting-script page: Courier Prime on cream bond, sluglines and dialogue typing out, red-pencil revisions and a soft page shadow.

It feels personal, authentic, literary. Use it for film and TV promos, founder letters, storytelling brand films, dialogue-led teasers.

## Visual language

- **Type:** Courier Prime (display, weight 700, tracking -0.02em) with Courier Prime for body text.
- **Surfaces:** off-white paper with visible fibre; corners 0px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** paper. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Mechanical**. Motion driven as if by motors, gears and belts: constant velocity segments with abrupt, rigid starts and stops.
- Enter `none`, exit `none`, move `power1.inOut`; durations 150 / 250 / 400 / 600 / 900 ms; stagger 100 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: type.

## The terms that define it

- **Visual style / art direction:** Print-Editorial, Warm Minimalism
- **Typography:** Monospace
- **Composition / layout system:** Typography-Led Composition, Centered Hero Composition
- **Material / surface language:** Paper
- **Texture:** Paper Grain, Ink Bleed
- **UI interaction motion:** Typing
- **Color treatment:** Warm Palette, Limited Palette
- **Motion language:** Mechanical
- **Transition language:** Hard Cut, Fade
- **Emotional / brand tone:** Human, Nostalgic

## Do's and Don'ts

- Do keep the accent (#c0392b) for the single most important element in each frame.
- Do use Courier Prime large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't mix surface treatments; everything is paper.
- Don't confuse it: Not letterpress or monospace brutalism: script formatting on a lifted paper page, typed live, no deboss and no hard borders.

## References

- Search: "screenplay text animation"
- Search: "script page typewriter motion"
- Search: "courier screenplay title design"
