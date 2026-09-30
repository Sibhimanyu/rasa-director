---
name: "Self-order kiosk"
description: "Oversized touch tiles in tomato red and mustard on warm white, one loud order button, heavy rounded type built to be read from a metre away."
colors:
  canvas: "#fbf6ee"        # page ground
  ink: "#1b1b1b"           # headlines and body text
  accent: "#e63323"        # primary accent: the one thing that matters in each frame
  support: "#ffc72c"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#6e6a64"         # muted captions
typography:
  display:
    fontFamily: Rubik
    fontWeight: 800
  body:
    fontFamily: Rubik
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 28px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Self-order kiosk

A motion-graphics design system from Rasa Director's style library (Interface). Also known as touchscreen kiosk UI, point-of-sale screen, self-checkout, ordering kiosk.

## Overview

Oversized touch tiles in tomato red and mustard on warm white, one loud order button, heavy rounded type built to be read from a metre away.

It feels direct, friendly, loud. Use it for retail and food-service films, payments launches, in-store screens.

## Visual language

- **Type:** Rubik (display, weight 800, tracking -0.02em) with Rubik for body text.
- **Surfaces:** flat fills, no gradients; corners 28px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: pop.

## The terms that define it

- **Visual style / art direction:** Corporate Flat, Clean Minimalism
- **Era / design-movement influence:** Flat Design
- **UI treatment:** Oversized UI, Flat UI, Form-Based UI
- **Color treatment:** High Saturation, Warm Palette
- **Typography:** Rounded Sans
- **Shape language:** Pill-Shaped, Rounded
- **Iconography:** Filled Icons
- **Shadow / depth cues:** Soft Diffuse Shadow
- **Motion language:** Snappy
- **Transition language:** Push, Scale Transition
- **UI interaction motion:** Click, Progress Indicator

## Do's and Don'ts

- Do keep the accent (#e63323) for the single most important element in each frame.
- Do use Rubik large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not gamified UI: no XP, streaks or confetti; big-target transactional controls with one loud call to action.

## References

- Search: "self order kiosk UI"
- Search: "touchscreen kiosk animation"
- Search: "point of sale interface motion"
