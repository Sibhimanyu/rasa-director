---
name: "Berlin techno poster"
description: "Black-and-white club-night timetable: towering condensed industrial caps, photocopy noise, hairline rules and floor slots set in mono, no colour at all."
colors:
  canvas: "#0a0a0a"        # page ground
  ink: "#f2f2f2"           # headlines and body text
  accent: "#ffffff"        # primary accent: the one thing that matters in each frame
  support: "#6b6b6b"       # supporting colour, used sparingly
  surface: "#1a1a1a"       # raised cards and panels
  muted: "#8c8c8c"         # muted captions
typography:
  display:
    fontFamily: Big Shoulders Display
    fontWeight: 900
  body:
    fontFamily: Space Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Berlin techno poster

A motion-graphics design system from RasanAI's style library (Music & scene). Also known as club night poster, techno flyer, warehouse rave timetable, industrial club graphics.

## Overview

Black-and-white club-night timetable: towering condensed industrial caps, photocopy noise, hairline rules and floor slots set in mono, no colour at all.

It feels stark, nocturnal, uncompromising. Use it for club and festival line-ups, electronic music releases, fashion drops, late-night event promos.

## Visual language

- **Type:** Big Shoulders Display (display, weight 900, uppercase, tracking 0.01em) with Space Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** noise. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Mechanical**. Motion driven as if by motors, gears and belts: constant velocity segments with abrupt, rigid starts and stops.
- Enter `none`, exit `none`, move `power1.inOut`; durations 150 / 250 / 400 / 600 / 900 ms; stagger 100 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Monochrome, Photocopy / Xerox
- **Typography:** Condensed, Monospace
- **Color treatment:** Black and White, High Contrast
- **Texture:** Photocopy Noise
- **Composition / layout system:** Swiss Grid, Typography-Led Composition
- **Motion language:** Mechanical
- **Pacing / rhythm:** Beat-Driven
- **Transition language:** Hard Cut, Flash Transition
- **Shadow / depth cues:** No Shadow
- **Shape language:** Rectilinear
- **Sound + motion relationship:** Music-Led

## Do's and Don'ts

- Do keep the accent (#ffffff) for the single most important element in each frame.
- Do use Big Shoulders Display large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not the 90s rave flyer: no colour, smileys or chrome; austere industrial monochrome where the timetable is the design.

## References

- Search: "berlin techno poster design"
- Search: "techno club flyer typography"
- Search: "black and white rave poster animation"
