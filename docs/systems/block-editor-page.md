---
name: "Block-editor doc page"
description: "A calm white document with a big emoji page icon, bold warm-black sans title, grey drag handles, toggles and to-do checkboxes, wide margins."
colors:
  canvas: "#ffffff"        # page ground
  ink: "#37352f"           # headlines and body text
  accent: "#9ec5ea"        # primary accent: the one thing that matters in each frame
  support: "#dfab01"       # supporting colour, used sparingly
  surface: "#f7f6f3"       # raised cards and panels
  muted: "#787774"         # muted captions
typography:
  display:
    fontFamily: Public Sans
    fontWeight: 700
  body:
    fontFamily: Public Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 4px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Block-editor doc page

A motion-graphics design system from Rasa Director's style library (Interface). Also known as Notion-style page, doc canvas, block editor, wiki page look.

## Overview

A calm white document with a big emoji page icon, bold warm-black sans title, grey drag handles, toggles and to-do checkboxes, wide margins.

It feels calm, organised, approachable. Use it for productivity and docs tools, internal comms, how-to explainers.

## Visual language

- **Type:** Public Sans (display, weight 700, tracking -0.02em) with Public Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 4px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** emoji3d. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: type.

## The terms that define it

- **Visual style / art direction:** Clean Minimalism, Startup / SaaS Minimalism
- **Era / design-movement influence:** Modern SaaS Design
- **UI treatment:** Minimal UI, Editorial UI, Canvas / Node-Graph UI
- **Composition / layout system:** Negative-Space Composition, Typography-Led Composition
- **Color treatment:** Light UI, Muted
- **Typography:** Neutral Sans Serif
- **Iconography:** Emoji-Like Icons
- **Shadow / depth cues:** No Shadow
- **Motion language:** Smooth
- **Transition language:** Fade, Slide
- **UI interaction motion:** Typing, Checkbox, Drag

## Do's and Don'ts

- Do keep the accent (#9ec5ea) for the single most important element in each frame.
- Do use Public Sans large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not calm productivity: no phone frame or warm serif paper; a desktop document page in warm-black sans with emoji and block handles.

## References

- Search: "notion style animation"
- Search: "doc page UI motion graphic"
- Search: "block editor aesthetic video"
