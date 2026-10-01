---
name: "Glassmorphism (light)"
description: "Milky translucent cards blurring pastel blue and pink colour blooms behind them, thin white edges, soft shadows."
colors:
  canvas: "#eef1fa"        # page ground
  ink: "#1d2342"           # headlines and body text
  accent: "#8ab4ff"        # primary accent: the one thing that matters in each frame
  support: "#ffb3d6"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#6f7896"         # muted captions
typography:
  display:
    fontFamily: Sora
    fontWeight: 700
  body:
    fontFamily: Sora
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 32px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Glassmorphism (light)

A motion-graphics design system from RasanAI's style library (Soft & tactile). Also known as frosted glass UI, glass cards, glassmorphic UI.

## Overview

Milky translucent cards blurring pastel blue and pink colour blooms behind them, thin white edges, soft shadows.

It feels airy, modern, clean. Use it for SaaS feature reveals, fintech and crypto dashboards, landing page heroes, weather and health widgets.

## Visual language

- **Type:** Sora (display, weight 700, tracking -0.03em) with Sora for body text.
- **Surfaces:** translucent frosted panels (backdrop blur) over colour; corners 32px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Floating**. Elements hover and bob gently around a rest point, as if suspended in water or air.
- Enter `sine.out`, exit `sine.in`, move `sine.inOut`; durations 500 / 800 / 1200 / 1800 / 2600 ms; stagger 70 ms; hold at least 1500 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Glass, Gradient-Heavy
- **Era / design-movement influence:** Glassmorphism
- **UI treatment:** Glassmorphic UI, Floating-Card UI
- **Material / surface language:** Frosted Glass
- **Color treatment:** Pastel, Gradient
- **Composition / layout system:** Floating Cards, Layered Depth
- **Shadow / depth cues:** Soft Diffuse Shadow
- **Motion language:** Floating
- **Transition language:** Blur Transition, Parallax Transition

## Do's and Don'ts

- Do keep the accent (#8ab4ff) for the single most important element in each frame.
- Do use Sora large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't mix surface treatments; everything is glass.
- Don't confuse it: Not liquid glass: flat frosted panes with a white edge, no refraction, bending or specular rim.

## References

- Search: "glassmorphism UI animation"
- Search: "frosted glass cards motion"
- Search: "glassmorphism dashboard promo"
