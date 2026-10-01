---
name: "Mascot-led"
description: "A friendly brand character guides the frame: rounded cards on soft grass green, wobbly doodle icons, warm type, springy acting."
colors:
  canvas: "#e6f7d9"        # page ground
  ink: "#1e3320"           # headlines and body text
  accent: "#43c463"        # primary accent: the one thing that matters in each frame
  support: "#ffb13b"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#6a8a6e"         # muted captions
typography:
  display:
    fontFamily: Baloo 2
    fontWeight: 800
  body:
    fontFamily: Nunito
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 32px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Mascot-led

A motion-graphics design system from RasanAI's style library (Playful & pop). Also known as brand mascot style, character-led brand, Duolingo-style mascot, friendly mascot.

## Overview

A friendly brand character guides the frame: rounded cards on soft grass green, wobbly doodle icons, warm type, springy acting.

It feels warm, friendly, encouraging, memorable. Use it for onboarding, education and habit apps, brand films, customer-support explainers.

## Visual language

- **Type:** Baloo 2 (display, weight 800, tracking -0.01em) with Nunito for body text.
- **Surfaces:** flat fills, no gradients; corners 32px; outlines 3px sketch in ink.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** doodle. **Decoration:** blobs.

## Motion

Motion language: **Springy**. Motion that behaves like a damped physical spring: fast attack, one visible overshoot, then a quick settle.
- Enter `back.out(1.7)`, exit `power3.in`, move `elastic.out(1,0.75)`; durations 180 / 300 / 480 / 720 / 1100 ms; stagger 40 ms; hold at least 650 ms.
- Never: fade-up-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: spring.

## The terms that define it

- **Visual style / art direction:** Mascot-Led, Playful Tech
- **Character / mascot treatment:** Doodle Mascot
- **Illustration style:** Mascot Illustration, Character Illustration
- **UI treatment:** Floating-Card UI, Simplified UI
- **Shape language:** Rounded
- **Iconography:** Hand-Drawn Icons
- **Motion language:** Springy
- **Motion function:** Create Personality, Direct Attention
- **Transition language:** Push, Scale Transition

## Do's and Don'ts

- Do keep the accent (#43c463) for the single most important element in each frame.
- Do use Baloo 2 large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not cartoon: the mascot is the brand's host inside product UI, not a TV show world.

## References

- Search: "mascot led brand animation"
- Search: "friendly mascot explainer video"
- Search: "brand character onboarding animation"
