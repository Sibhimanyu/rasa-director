---
name: "Windows Aero glass"
description: "Translucent sky-blue glass window frames with a white specular sweep over a deep Harmony-blue desktop, Segoe-style sans and glossy 3D icons."
colors:
  canvas: "#0d3563"        # page ground
  ink: "#f4f9ff"           # headlines and body text
  accent: "#6fc3ff"        # primary accent: the one thing that matters in each frame
  support: "#c42b1c"       # supporting colour, used sparingly
  surface: "#245f99"       # raised cards and panels
  muted: "#a8c6e4"         # muted captions
typography:
  display:
    fontFamily: Noto Sans
    fontWeight: 600
  body:
    fontFamily: Noto Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 8px
shadows:
  card: "0 40px 70px -16px rgba(0,0,0,0.3)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Windows Aero glass

A motion-graphics design system from RasanAI's style library (Interface). Also known as Windows 7 Aero, Aero Glass, Vista glass UI, Aero theme.

## Overview

Translucent sky-blue glass window frames with a white specular sweep over a deep Harmony-blue desktop, Segoe-style sans and glossy 3D icons.

It feels glossy, optimistic, nostalgic. Use it for late-2000s nostalgia ads, desktop software launches, retro tech explainers.

## Visual language

- **Type:** Noto Sans (display, weight 600, tracking -0.01em) with Noto Sans for body text.
- **Surfaces:** translucent frosted panels (backdrop blur) over colour; corners 8px; outlines 1px solid in #bfe3ff.
- **Depth:** float shadows (`0 40px 70px -16px rgba(0,0,0,0.3)`).
- **Texture:** none; clean fills. **Icons:** emoji3d. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Glass, Web 2.0
- **Era / design-movement influence:** Glassmorphism, Skeuomorphism
- **UI treatment:** Windowed UI, Glassmorphic UI, Retro UI
- **Material / surface language:** Frosted Glass
- **Color treatment:** Cool Palette, Gradient
- **Iconography:** Skeuomorphic Icons
- **Shadow / depth cues:** Floating Shadows
- **Motion language:** Smooth
- **Transition language:** Fade, Scale Transition

## Do's and Don'ts

- Do keep the accent (#6fc3ff) for the single most important element in each frame.
- Do use Noto Sans large and confident; one idea per frame.
- Do keep every shadow the same float style.
- Don't mix surface treatments; everything is glass.
- Don't confuse it: Not Frutiger Aero: no bubbles, grass or sky scenes; this is the window chrome itself, dark glass frames on a deep blue desktop.

## References

- Search: "windows 7 aero glass animation"
- Search: "aero glass UI motion"
- Search: "vista glass window nostalgia"
