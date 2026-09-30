---
name: "Soviet space poster"
description: "Midnight-blue sky with orbit rings and a red launch path, gold stars, blocky Russo capitals, milestones marked like a mission chart."
colors:
  canvas: "#0e1a3d"        # page ground
  ink: "#f3efe4"           # headlines and body text
  accent: "#d8262c"        # primary accent: the one thing that matters in each frame
  support: "#f2c230"       # supporting colour, used sparingly
  surface: "#162859"       # raised cards and panels
  muted: "#9aa3bd"         # muted captions
typography:
  display:
    fontFamily: Russo One
    fontWeight: 400
  body:
    fontFamily: PT Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Soviet space poster

A motion-graphics design system from Rasa Director's style library (Heritage). Also known as Soviet cosmos poster, space race propaganda, cosmonaut poster, Soviet space age graphics.

## Overview

Midnight-blue sky with orbit rings and a red launch path, gold stars, blocky Russo capitals, milestones marked like a mission chart.

It feels heroic, optimistic, monumental. Use it for space and science brands, anniversaries and milestones, roadmaps, tech manifestos.

## Visual language

- **Type:** Russo One (display, weight 400, uppercase, tracking 0.02em) with PT Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 2px solid in ink.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** filled. **Decoration:** orbits.

## Motion

Motion language: **Cinematic**. Film-grammar motion: slow push-ins, focus pulls, long eased camera moves and breathing holds under which the frame never fully stops.
- Enter `power2.out`, exit `power2.inOut`, move `sine.inOut`; durations 400 / 700 / 1100 / 1600 / 2400 ms; stagger 160 ms; hold at least 1400 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Retro-Futurism, Constructivism
- **Era / design-movement influence:** Mid-Century Modern
- **Color treatment:** Limited Palette, High Contrast
- **Typography:** Display Typography, Extended
- **Composition / layout system:** Timeline, Orbit Composition
- **Shape language:** Geometric, Circular
- **Motion language:** Cinematic
- **Transition language:** Push, Line-Draw Transition

## Do's and Don'ts

- Do keep the accent (#d8262c) for the single most important element in each frame.
- Do use Russo One large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not space-age retro-futurism: this is Soviet state poster graphics, deep blue and red with heroic geometry, not cream Googie cartoons.

## References

- Search: "Soviet space poster animation"
- Search: "cosmonaut propaganda poster design"
- Search: "space race graphics motion"
