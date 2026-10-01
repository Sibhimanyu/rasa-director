---
name: "Light editorial SaaS"
description: "Crisp white page, deep navy type set like a magazine with rules and columns, one saturated gradient block, generous whitespace."
colors:
  canvas: "#ffffff"        # page ground
  ink: "#0a2540"           # headlines and body text
  accent: "#635bff"        # primary accent: the one thing that matters in each frame
  support: "#00d4ff"       # supporting colour, used sparingly
  surface: "#f6f9fc"       # raised cards and panels
  muted: "#425466"         # muted captions
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontWeight: 700
  body:
    fontFamily: Inter
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 8px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Light editorial SaaS

A motion-graphics design system from RasanAI's style library (Product & UI). Also known as Stripe style, editorial fintech, Stripe Press look.

## Overview

Crisp white page, deep navy type set like a magazine with rules and columns, one saturated gradient block, generous whitespace.

It feels intelligent, trustworthy, crafted. Use it for payments and infrastructure, annual letters, product pages as film.

## Visual language

- **Type:** Plus Jakarta Sans (display, weight 700, tracking -0.03em) with Inter for body text.
- **Surfaces:** soft gradient washes from the surface toward the accent; corners 8px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** rules.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Editorial, Clean Minimalism
- **UI treatment:** Editorial UI, Simplified UI
- **Composition / layout system:** Editorial Grid, Asymmetric Composition
- **Typography:** Neo-Grotesk
- **Color treatment:** Light UI, Mesh Gradient
- **Motion language:** Smooth
- **Transition language:** Mask Reveal, Slide

## Do's and Don'ts

- Do keep the accent (#635bff) for the single most important element in each frame.
- Do use Plus Jakarta Sans large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't mix surface treatments; everything is gradient.
- Don't confuse it: Not calm productivity: sharp, grid-led and gradient-accented, not warm paper and slow serif calm.

## References

- Search: "stripe website animation style"
- Search: "editorial saas motion design"
- Search: "stripe gradient hero"
