---
name: "Late-night talk show"
description: "A glowing city-at-dusk backdrop in midnight navy and marquee gold, a high-contrast display serif headline, curtain-red touches, warm studio glow."
colors:
  canvas: "#0a1433"        # page ground
  ink: "#fff4dc"           # headlines and body text
  accent: "#f5b631"        # primary accent: the one thing that matters in each frame
  support: "#b3202a"       # supporting colour, used sparingly
  surface: "#16224d"       # raised cards and panels
  muted: "#a9b0cc"         # muted captions
typography:
  display:
    fontFamily: Gloock
    fontWeight: 400
  body:
    fontFamily: Montserrat
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 8px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Late-night talk show

A motion-graphics design system from RasanAI's style library (Broadcast). Also known as late show graphics, talk show package, tonight show look, city skyline set.

## Overview

A glowing city-at-dusk backdrop in midnight navy and marquee gold, a high-contrast display serif headline, curtain-red touches, warm studio glow.

It feels witty, warm, showbiz. Use it for personality-led content, podcast and interview promos, entertainment brands, event hosts.

## Visual language

- **Type:** Gloock (display, weight 400, tracking -0.01em) with Montserrat for body text.
- **Surfaces:** flat fills, no gradients; corners 8px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Cinematic
- **Format / purpose:** Broadcast Package, Lower Thirds
- **Typography:** High-Contrast Serif, Geometric Sans
- **Photo / video integration:** Full-Bleed Footage
- **Lighting:** Blue Hour, Spotlight Pool
- **Color treatment:** Cool Palette, Accent-Color System
- **Motion language:** Smooth
- **Pacing / rhythm:** Medium Explanatory
- **Transition language:** Push, Light Wipe
- **Emotional / brand tone:** Friendly, Confident

## Do's and Don'ts

- Do keep the accent (#f5b631) for the single most important element in each frame.
- Do use Gloock large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a cinematic title: a studio set's skyline, marquee gold and warm glow, sized for chat and laughs rather than drama.

## References

- Search: "late night talk show graphics"
- Search: "talk show intro motion design"
- Search: "late night show package"
