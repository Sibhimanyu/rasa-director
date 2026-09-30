---
name: "Keynote hero"
description: "One oversized device floats on a pure-black stage under soft light, huge tight white headline, a single blue accent, nothing else."
colors:
  canvas: "#000000"        # page ground
  ink: "#f5f5f7"           # headlines and body text
  accent: "#2997ff"        # primary accent: the one thing that matters in each frame
  support: "#bf5af2"       # supporting colour, used sparingly
  surface: "#1d1d1f"       # raised cards and panels
  muted: "#86868b"         # muted captions
typography:
  display:
    fontFamily: Inter Tight
    fontWeight: 700
  body:
    fontFamily: Inter
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 28px
shadows:
  card: "0 40px 70px -16px rgba(0,0,0,0.3)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Keynote hero

A motion-graphics design system from Rasa Director's style library (Product & UI). Also known as Apple keynote style, dark stage product reveal, hero device shot.

## Overview

One oversized device floats on a pure-black stage under soft light, huge tight white headline, a single blue accent, nothing else.

It feels premium, confident, cinematic. Use it for hardware and app launches, keynote segments, landing-page hero loops.

## Visual language

- **Type:** Inter Tight (display, weight 700, tracking -0.045em) with Inter for body text.
- **Surfaces:** flat fills, no gradients; corners 28px; outlines none.
- **Depth:** float shadows (`0 40px 70px -16px rgba(0,0,0,0.3)`).
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Luxurious / Slow**. Very slow, circular deceleration, long holds and stillness, where restraint itself is the signal of value.
- Enter `circ.out`, exit `circ.in`, move `power1.inOut`; durations 600 / 900 / 1400 / 2000 / 2800 ms; stagger 200 ms; hold at least 1800 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, linear-entrance, blur-in.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Clean Minimalism, Cinematic
- **UI treatment:** Device-Bound UI, Production-Faithful UI
- **Product demonstration language:** Looping Hero Demo, Zoomed Detail
- **Composition / layout system:** Single-Object Hero, Negative-Space Composition
- **Typography:** Neo-Grotesk
- **Color treatment:** Dark UI, Accent-Color System
- **Shadow / depth cues:** Floating Shadows
- **Camera language:** Push-In, Orbit
- **Motion language:** Luxurious / Slow
- **Transition language:** Fade, Zoom Transition

## Do's and Don'ts

- Do keep the accent (#2997ff) for the single most important element in each frame.
- Do use Inter Tight large and confident; one idea per frame.
- Do keep every shadow the same float style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not dark gradient SaaS: no glow or colour wash; the product sits alone on true black, lit like a physical object.

## References

- Search: "apple keynote product reveal animation"
- Search: "dark stage device hero motion"
- Search: "iphone reveal style frame"
