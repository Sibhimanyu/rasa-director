---
name: "AR overlay"
description: "Translucent white pill labels and thin reticles pinned onto a live camera view, tracking objects in space with soft springs."
colors:
  canvas: "#4d5a60"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#ffffff"        # primary accent: the one thing that matters in each frame
  support: "#ffd84a"       # supporting colour, used sparingly
  surface: "#6a787e"       # raised cards and panels
  muted: "#d6dde0"         # muted captions
typography:
  display:
    fontFamily: Outfit
    fontWeight: 600
  body:
    fontFamily: Outfit
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

# AR overlay

A motion-graphics design system from RasanAI's style library (Futuristic & tech). Also known as augmented reality UI, in-world labels, tracked callouts, camera-feed UI.

## Overview

Translucent white pill labels and thin reticles pinned onto a live camera view, tracking objects in space with soft springs.

It feels immediate, useful, futuristic. Use it for AR and camera apps, retail try-on and wayfinding, smart glasses, computer-vision products.

## Visual language

- **Type:** Outfit (display, weight 600, tracking -0.02em) with Outfit for body text.
- **Surfaces:** translucent frosted panels (backdrop blur) over colour; corners fully rounded (pills); outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** noise. **Icons:** line. **Decoration:** crosshair.

## Motion

Motion language: **Springy**. Motion that behaves like a damped physical spring: fast attack, one visible overshoot, then a quick settle.
- Enter `back.out(1.7)`, exit `power3.in`, move `elastic.out(1,0.75)`; durations 180 / 300 / 480 / 720 / 1100 ms; stagger 40 ms; hold at least 650 ms.
- Never: fade-up-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: spring.

## The terms that define it

- **Visual style / art direction:** Futuristic Tech, Clean Minimalism
- **UI treatment:** In-Context UI, Spatial UI, Glassmorphic UI
- **Photo / video integration:** Video + Tracked Graphics, Tracked UI
- **Depth / dimensionality:** Spatial Interface
- **Shape language:** Pill-Shaped, Circular
- **Material / surface language:** Frosted Glass
- **Camera language:** Handheld Simulation, Parallax Camera
- **Motion language:** Springy
- **Transition language:** Scale Transition, Blur Transition

## Do's and Don'ts

- Do keep the accent (#ffffff) for the single most important element in each frame.
- Do use Outfit large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't mix surface treatments; everything is glass.
- Don't confuse it: Not a sci-fi HUD: AR overlays are light, minimal labels anchored to the real world, not a cinematic instrument panel.

## References

- Search: "AR overlay UI animation"
- Search: "augmented reality labels motion graphics"
- Search: "tracked callout camera UI"
