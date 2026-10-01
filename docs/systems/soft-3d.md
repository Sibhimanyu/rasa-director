---
name: "Soft 3D"
description: "Periwinkle and blush 3D orbs float beside rounded cards with big diffuse shadows and gradient-lit surfaces; springy, friendly, clean."
colors:
  canvas: "#eef0f8"        # page ground
  ink: "#1d2140"           # headlines and body text
  accent: "#6c7bff"        # primary accent: the one thing that matters in each frame
  support: "#ffa8c2"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#7c80a0"         # muted captions
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontWeight: 800
  body:
    fontFamily: Plus Jakarta Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 40px
shadows:
  card: "0 40px 70px -16px rgba(0,0,0,0.3)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Soft 3D

A motion-graphics design system from RasanAI's style library (3D & materials). Also known as soft 3D UI, C4D pastel, Blender soft render, 3D objects + 2D UI.

## Overview

Periwinkle and blush 3D orbs float beside rounded cards with big diffuse shadows and gradient-lit surfaces; springy, friendly, clean.

It feels friendly, modern, optimistic. Use it for SaaS and fintech launches, onboarding films, landing heroes, app-store promos.

## Visual language

- **Type:** Plus Jakarta Sans (display, weight 800, tracking -0.035em) with Plus Jakarta Sans for body text.
- **Surfaces:** soft gradient washes from the surface toward the accent; corners 40px; outlines none.
- **Depth:** float shadows (`0 40px 70px -16px rgba(0,0,0,0.3)`).
- **Texture:** none; clean fills. **Icons:** emoji3d. **Decoration:** blobs.

## Motion

Motion language: **Springy**. Motion that behaves like a damped physical spring: fast attack, one visible overshoot, then a quick settle.
- Enter `back.out(1.7)`, exit `power3.in`, move `elastic.out(1,0.75)`; durations 180 / 300 / 480 / 720 / 1100 ms; stagger 40 ms; hold at least 650 ms.
- Never: fade-up-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: spring.

## The terms that define it

- **Visual style / art direction:** Soft 3D, Startup / SaaS Minimalism
- **UI treatment:** Floating-Card UI, Simplified UI
- **Depth / dimensionality:** 3D Objects + 2D UI
- **Illustration style:** 3D Soft Forms
- **Iconography:** 3D Icons
- **Shadow / depth cues:** Floating Shadows
- **Color treatment:** Pastel, Gradient
- **Motion language:** Springy
- **Transition language:** Scale Transition, Object Morph

## Do's and Don'ts

- Do keep the accent (#6c7bff) for the single most important element in each frame.
- Do use Plus Jakarta Sans large and confident; one idea per frame.
- Do keep every shadow the same float style.
- Don't mix surface treatments; everything is gradient.
- Don't confuse it: Not clay: soft 3D is smooth and clean-lit; claymorphism is inflated, matte and puffy with inner highlights.

## References

- Search: "soft 3D UI animation"
- Search: "3D objects floating UI motion"
- Search: "pastel Cinema 4D product explainer"
