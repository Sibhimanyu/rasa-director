---
name: "Biotech clean"
description: "Clinical off-white, teal and aqua pill nodes linked like molecules, soft shadows and orbital rings; calm, sterile, trustworthy."
colors:
  canvas: "#f3f8f7"        # page ground
  ink: "#0e2a2a"           # headlines and body text
  accent: "#19b394"        # primary accent: the one thing that matters in each frame
  support: "#7fd1e8"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#6a8a88"         # muted captions
typography:
  display:
    fontFamily: Manrope
    fontWeight: 700
  body:
    fontFamily: Manrope
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 999px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Biotech clean

A motion-graphics design system from RasanAI's style library (Futuristic & tech). Also known as lab clean, medtech minimal, life-science UI, molecular clean.

## Overview

Clinical off-white, teal and aqua pill nodes linked like molecules, soft shadows and orbital rings; calm, sterile, trustworthy.

It feels trustworthy, clinical, hopeful. Use it for biotech and pharma, healthtech launches, science explainers, research reports.

## Visual language

- **Type:** Manrope (display, weight 700, tracking -0.03em) with Manrope for body text.
- **Surfaces:** flat fills, no gradients; corners fully rounded (pills); outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** orbits.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Clean Minimalism, Futuristic Tech
- **UI treatment:** Abstracted UI, Minimal UI
- **Information / data visualization:** Node Network, Process Diagram
- **Color treatment:** Light UI, Cool Palette
- **Shape language:** Pill-Shaped, Circular
- **Typography:** Geometric Sans
- **Shadow / depth cues:** Soft Diffuse Shadow
- **Motion language:** Smooth
- **Transition language:** Crossfade, Shape Match

## Do's and Don'ts

- Do keep the accent (#19b394) for the single most important element in each frame.
- Do use Manrope large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not generic SaaS minimal: the molecular nodes, orbits and clinical teal make it read as the lab.

## References

- Search: "biotech motion graphics clean"
- Search: "molecular animation minimal"
- Search: "healthtech explainer video style"
