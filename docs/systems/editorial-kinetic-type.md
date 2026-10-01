---
name: "Editorial kinetic typography"
description: "Huge tight serif headlines slam across a saturated vermilion field, word by word; black type, no images, pure hierarchy."
colors:
  canvas: "#ff5a36"        # page ground
  ink: "#140c08"           # headlines and body text
  accent: "#140c08"        # primary accent: the one thing that matters in each frame
  support: "#ffd9c8"       # supporting colour, used sparingly
  surface: "#ff7a5c"       # raised cards and panels
  muted: "#6a2a18"         # muted captions
typography:
  display:
    fontFamily: Instrument Serif
    fontWeight: 400
  body:
    fontFamily: Inter Tight
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Editorial kinetic typography

A motion-graphics design system from RasanAI's style library (Editorial & print). Also known as big-type editorial, typographic statement, headline-led motion, type-only film.

## Overview

Huge tight serif headlines slam across a saturated vermilion field, word by word; black type, no images, pure hierarchy.

It feels bold, articulate, urgent. Use it for manifesto films, quote and statement ads, brand campaigns, event openers.

## Visual language

- **Type:** Instrument Serif (display, weight 400, tracking -0.04em) with Inter Tight for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Editorial, Extreme Minimalism
- **Typography:** Editorial Serif, Display Typography
- **Composition / layout system:** Typography-Led Composition, Full Bleed
- **Color treatment:** Color Blocking, High Contrast
- **Format / purpose:** Kinetic Typography, Manifesto Film
- **Motion language:** Snappy
- **Pacing / rhythm:** Beat-Driven
- **Transition language:** Push, Hard Cut
- **Emotional / brand tone:** Bold, Editorial

## Do's and Don'ts

- Do keep the accent (#140c08) for the single most important element in each frame.
- Do use Instrument Serif large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a type specimen: the words carry a message; the typeface is a voice, not the subject.

## References

- Search: "editorial kinetic typography"
- Search: "serif kinetic type manifesto"
- Search: "big type motion design"
