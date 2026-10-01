---
name: "Colour blocking"
description: "Big borderless blocks of flat saturated colour butting together: tangerine ground, cobalt and blush pills, chunky geometric sans."
colors:
  canvas: "#ff7a1a"        # page ground
  ink: "#101326"           # headlines and body text
  accent: "#2440d6"        # primary accent: the one thing that matters in each frame
  support: "#ffc4d6"       # supporting colour, used sparingly
  surface: "#ffc4d6"       # raised cards and panels
  muted: "#5a2a08"         # muted captions
typography:
  display:
    fontFamily: Outfit
    fontWeight: 800
  body:
    fontFamily: Outfit
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 999px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Colour blocking

A motion-graphics design system from RasanAI's style library (Bold & graphic). Also known as color block, flat colour fields, block colour UI, tonal blocking.

## Overview

Big borderless blocks of flat saturated colour butting together: tangerine ground, cobalt and blush pills, chunky geometric sans.

It feels bold, fresh, fashion-y, confident. Use it for retail and fashion, consumer app promos, brand social, feature walkthroughs.

## Visual language

- **Type:** Outfit (display, weight 800, tracking -0.03em) with Outfit for body text.
- **Surfaces:** flat fills, no gradients; corners fully rounded (pills); outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** blobs.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Abstract Geometric, Corporate Flat
- **Color treatment:** Color Blocking, High Saturation
- **UI treatment:** Flat UI, Oversized UI
- **Shape language:** Pill-Shaped, Rounded
- **Line / stroke language:** No Outlines
- **Shadow / depth cues:** No Shadow
- **Typography:** Geometric Sans
- **Motion language:** Smooth
- **Transition language:** Color Match, Push

## Do's and Don'ts

- Do keep the accent (#2440d6) for the single most important element in each frame.
- Do use Outfit large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not neo-brutalism: no outlines or shadows; colour fields do the separating.

## References

- Search: "colour blocking motion graphics"
- Search: "color block UI animation"
- Search: "flat colour fields brand video"
