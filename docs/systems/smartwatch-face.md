---
name: "Smartwatch face"
description: "True-black watch face with huge rounded digits, small circular complications and red, lime and cyan activity rings closing around the edge."
colors:
  canvas: "#000000"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#fa114f"        # primary accent: the one thing that matters in each frame
  support: "#a6ff00"       # supporting colour, used sparingly
  surface: "#1c1c1e"       # raised cards and panels
  muted: "#8e8e93"         # muted captions
typography:
  display:
    fontFamily: Outfit
    fontWeight: 700
  body:
    fontFamily: Outfit
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 36px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Smartwatch face

A motion-graphics design system from RasanAI's style library (Interface). Also known as watch complications, wearable UI, watch face design, OLED watch face.

## Overview

True-black watch face with huge rounded digits, small circular complications and red, lime and cyan activity rings closing around the edge.

It feels glanceable, sporty, personal. Use it for health and fitness apps, wearable launches, sports social.

## Visual language

- **Type:** Outfit (display, weight 700, tracking -0.03em) with Outfit for body text.
- **Surfaces:** flat fills, no gradients; corners 36px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** orbits.

## Motion

Motion language: **Springy**. Motion that behaves like a damped physical spring: fast attack, one visible overshoot, then a quick settle.
- Enter `back.out(1.7)`, exit `power3.in`, move `elastic.out(1,0.75)`; durations 180 / 300 / 480 / 720 / 1100 ms; stagger 40 ms; hold at least 650 ms.
- Never: fade-up-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: spring.

## The terms that define it

- **Visual style / art direction:** Clean Minimalism, Futuristic Tech
- **Era / design-movement influence:** Modern SaaS Design
- **UI treatment:** Micro-UI, Widget / Notification UI, Device-Bound UI
- **Information / data visualization:** Progress Ring, Number Counter
- **Color treatment:** Dark UI, High Saturation
- **Typography:** Rounded Sans
- **Shape language:** Circular
- **Shadow / depth cues:** No Shadow
- **Motion language:** Springy
- **Transition language:** Scale Transition, Zoom Transition

## Do's and Don'ts

- Do keep the accent (#fa114f) for the single most important element in each frame.
- Do use Outfit large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not calm biometric rings: a true-black OLED face with saturated rings and chunky digits, not misty sage cards.

## References

- Search: "smartwatch face animation"
- Search: "watch complications motion graphic"
- Search: "activity rings animation"
