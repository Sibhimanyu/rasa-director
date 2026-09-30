---
name: "Neon wireframe grid"
description: "Glowing cyan outlines on a black grid world; pill controls lit like light-cycles with orange sparks of accent."
colors:
  canvas: "#000814"        # page ground
  ink: "#e0fbff"           # headlines and body text
  accent: "#00e5ff"        # primary accent: the one thing that matters in each frame
  support: "#ff8a00"       # supporting colour, used sparingly
  surface: "#001a2c"       # raised cards and panels
  muted: "#5e8ca3"         # muted captions
typography:
  display:
    fontFamily: Tektur
    fontWeight: 800
  body:
    fontFamily: Tektur
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 999px
shadows:
  card: "0 0 24px #00e5ff"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Neon wireframe grid

A motion-graphics design system from Rasa Director's style library (Futuristic & tech). Also known as Tron style, light-cycle grid, neon grid, vector grid world.

## Overview

Glowing cyan outlines on a black grid world; pill controls lit like light-cycles with orange sparks of accent.

It feels kinetic, electric, gamey. Use it for gaming and esports, event openers, tech launch teasers, motion backgrounds.

## Visual language

- **Type:** Tektur (display, weight 800, uppercase, tracking 0.06em) with Tektur for body text.
- **Surfaces:** dark panels with lit accent edges; corners fully rounded (pills); outlines 2px solid in accent.
- **Depth:** glow shadows (`0 0 24px #00e5ff`).
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** grid.

## Motion

Motion language: **Inertial**. Objects keep moving after the force that started them stops, gliding on a long decelerating tail until friction brings them to rest.
- Enter `expo.out`, exit `power3.in`, move `power3.out`; durations 300 / 500 / 800 / 1200 / 1700 ms; stagger 60 ms; hold at least 900 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, blur-in, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Futuristic Tech, Sci-Fi / HUD
- **UI treatment:** Stylized UI
- **Color treatment:** Neon, Dark UI
- **Line / stroke language:** Medium, Uniform Stroke
- **VFX / compositing treatment:** Glow, Light Streaks, Trails
- **Typography:** Extended
- **Camera language:** Track, Push-In
- **Motion language:** Inertial
- **Transition language:** Light Wipe, Zoom-Through

## Do's and Don'ts

- Do keep the accent (#00e5ff) for the single most important element in each frame.
- Do use Tektur large and confident; one idea per frame.
- Do keep every shadow the same glow style.
- Don't mix surface treatments; everything is neon.
- Don't confuse it: Not synthwave: no sunset, palm trees or chrome; just lit vectors on a black grid.

## References

- Search: "Tron grid motion graphics"
- Search: "neon wireframe animation"
- Search: "glowing grid tech intro"
