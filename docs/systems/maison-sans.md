---
name: "Maison sans"
description: "A wide-tracked geometric sans wordmark in black on stark white, nothing else, snapping in with hard masked wipes like a runway card."
colors:
  canvas: "#ffffff"        # page ground
  ink: "#0a0a0a"           # headlines and body text
  accent: "#0a0a0a"        # primary accent: the one thing that matters in each frame
  support: "#c8c8c8"       # supporting colour, used sparingly
  surface: "#f2f2f2"       # raised cards and panels
  muted: "#8a8a8a"         # muted captions
typography:
  display:
    fontFamily: Jost
    fontWeight: 500
  body:
    fontFamily: Jost
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Maison sans

A motion-graphics design system from Rasa Director's style library (Luxury & restrained). Also known as luxury blanding, fashion house wordmark, Futura fashion, logo-type luxury.

## Overview

A wide-tracked geometric sans wordmark in black on stark white, nothing else, snapping in with hard masked wipes like a runway card.

It feels cool, modern, exclusive. Use it for fashion house campaigns, drop and collection announcements, beauty launches, logo stings.

## Visual language

- **Type:** Jost (display, weight 500, uppercase, tracking 0.2em) with Jost for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Fashion Editorial, Extreme Minimalism
- **Color treatment:** Black and White, High Contrast
- **Typography:** Geometric Sans, Extended
- **Composition / layout system:** Typography-Led Composition, Negative-Space Composition
- **Emotional / brand tone:** Premium, Confident
- **Motion language:** Precise
- **Transition language:** Mask Reveal, Hard Cut

## Do's and Don'ts

- Do keep the accent (#0a0a0a) for the single most important element in each frame.
- Do use Jost large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a Didone fashion editorial: the voice is a tracked geometric sans wordmark, the stripped 'blanded' look of modern luxury houses.

## References

- Search: "luxury fashion logo animation minimal"
- Search: "fashion house wordmark reveal"
- Search: "minimal sans fashion motion"
