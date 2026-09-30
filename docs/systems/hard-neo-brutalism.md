---
name: "Hard neo-brutalism"
description: "Square-cornered cards with thick black borders and big black offset shadows on a saturated yellow field, hot-pink and cyan accents."
colors:
  canvas: "#ffd93d"        # page ground
  ink: "#0d0d0d"           # headlines and body text
  accent: "#ff5ca8"        # primary accent: the one thing that matters in each frame
  support: "#38d9f5"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#4a4a4a"         # muted captions
typography:
  display:
    fontFamily: Archivo Black
    fontWeight: 400
  body:
    fontFamily: Space Grotesk
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "10px 10px 0 #0d0d0d"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "5px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Hard neo-brutalism

A motion-graphics design system from Rasa Director's style library (Bold & graphic). Also known as neubrutalism (square), brutalist cards, Figma neo-brutal, loud flat UI.

## Overview

Square-cornered cards with thick black borders and big black offset shadows on a saturated yellow field, hot-pink and cyan accents.

It feels loud, direct, irreverent, energetic. Use it for startup launch films, fintech for Gen Z, feature reveals, social ads.

## Visual language

- **Type:** Archivo Black (display, weight 400, uppercase, tracking -0.01em) with Space Grotesk for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 5px solid in ink.
- **Depth:** hard shadows (`10px 10px 0 #0d0d0d`).
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** stars.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Neo-Brutalism
- **UI treatment:** Neo-Brutalist UI, Floating-Card UI
- **Line / stroke language:** Heavy, Uniform Stroke
- **Shadow / depth cues:** Hard Shadow
- **Shape language:** Rectilinear, Sharp
- **Color treatment:** High Saturation, Color Blocking
- **Typography:** Grotesk, Display Typography
- **Motion language:** Snappy
- **Transition language:** Hard Cut, Push

## Do's and Don'ts

- Do keep the accent (#ff5ca8) for the single most important element in each frame.
- Do use Archivo Black large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not soft neo-brutalism: corners are square, colours are saturated, and nothing is hand-drawn.

## References

- Search: "neobrutalism square cards animation"
- Search: "hard shadow yellow UI motion"
- Search: "brutalist SaaS promo"
