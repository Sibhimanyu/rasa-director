---
name: "Calm wellness"
description: "A sage phone app with floating soft cards, faint breathing orbit rings, thin line icons and slow, weightless easing."
colors:
  canvas: "#e9eee6"        # page ground
  ink: "#28352e"           # headlines and body text
  accent: "#8fb59c"        # primary accent: the one thing that matters in each frame
  support: "#f0d5bf"       # supporting colour, used sparingly
  surface: "#fbfcf9"       # raised cards and panels
  muted: "#7c8a80"         # muted captions
typography:
  display:
    fontFamily: Figtree
    fontWeight: 600
  body:
    fontFamily: Figtree
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 36px
shadows:
  card: "0 40px 70px -16px rgba(0,0,0,0.3)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Calm wellness

A motion-graphics design system from RasanAI's style library (Soft & tactile). Also known as meditation app style, mindful UI, breathwork aesthetic, spa minimal.

## Overview

A sage phone app with floating soft cards, faint breathing orbit rings, thin line icons and slow, weightless easing.

It feels serene, reassuring, slow. Use it for meditation and sleep apps, mental health services, health insurance explainers, spa and retreat brands.

## Visual language

- **Type:** Figtree (display, weight 600, tracking -0.02em) with Figtree for body text.
- **Surfaces:** flat fills, no gradients; corners 36px; outlines none.
- **Depth:** float shadows (`0 40px 70px -16px rgba(0,0,0,0.3)`).
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** orbits.

## Motion

Motion language: **Weightless**. Zero-gravity motion: objects drift at constant slow velocity and keep rotating, with no floor, no settling and no rest point.
- Enter `power1.out`, exit `power1.in`, move `none`; durations 600 / 1000 / 1600 / 2400 / 3600 ms; stagger 120 ms; hold at least 1600 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Warm Minimalism, Organic / Biomorphic
- **UI treatment:** Device-Bound UI, Minimal UI
- **Composition / layout system:** Phone Composition, Orbit Composition
- **Color treatment:** Muted, Light UI
- **Iconography:** Rounded Icons
- **Shadow / depth cues:** Floating Shadows
- **Emotional / brand tone:** Calm, Soft, Trustworthy
- **Motion language:** Weightless
- **Transition language:** Fade, Dissolve

## Do's and Don'ts

- Do keep the accent (#8fb59c) for the single most important element in each frame.
- Do use Figtree large and confident; one idea per frame.
- Do keep every shadow the same float style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not pastel minimal: greener, quieter and built around a slow breath rhythm and app UI, not a single type moment.

## References

- Search: "meditation app promo animation"
- Search: "calm wellness motion design"
- Search: "mindfulness app UI video"
