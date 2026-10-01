---
name: "Synthwave"
description: "Hot-pink and cyan neon tube type glowing over a dark purple night, a perspective laser grid and sunset rays."
colors:
  canvas: "#140630"        # page ground
  ink: "#ffe8fb"           # headlines and body text
  accent: "#ff2a8a"        # primary accent: the one thing that matters in each frame
  support: "#1fe5ff"       # supporting colour, used sparingly
  surface: "#24104f"       # raised cards and panels
  muted: "#a67bd9"         # muted captions
typography:
  display:
    fontFamily: Monoton
    fontWeight: 400
  body:
    fontFamily: Audiowide
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "0 0 24px #ff2a8a"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Synthwave

A motion-graphics design system from RasanAI's style library (Retro & eras). Also known as outrun, retrowave, 80s neon, Miami vice neon.

## Overview

Hot-pink and cyan neon tube type glowing over a dark purple night, a perspective laser grid and sunset rays.

It feels dramatic, nostalgic, energetic. Use it for music and event openers, gaming trailers, night-life and drinks brands.

## Visual language

- **Type:** Monoton (display, weight 400, uppercase, tracking 0.06em) with Audiowide for body text.
- **Surfaces:** dark panels with lit accent edges; corners 0px; outlines 2px solid in accent.
- **Depth:** glow shadows (`0 0 24px #ff2a8a`).
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** grid.

## Motion

Motion language: **Cinematic**. Film-grammar motion: slow push-ins, focus pulls, long eased camera moves and breathing holds under which the frame never fully stops.
- Enter `power2.out`, exit `power2.inOut`, move `sine.inOut`; durations 400 / 700 / 1100 / 1600 / 2400 ms; stagger 160 ms; hold at least 1400 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Synthwave / Outrun, Retro-Futurism
- **Era / design-movement influence:** 1980s
- **Color treatment:** Neon, Dark UI
- **VFX / compositing treatment:** Glow, Bloom
- **Typography:** Outlined Type
- **Shadow / depth cues:** Glow Instead of Shadow
- **Motion language:** Cinematic
- **Transition language:** Light Wipe, Zoom-Through

## Do's and Don'ts

- Do keep the accent (#ff2a8a) for the single most important element in each frame.
- Do use Monoton large and confident; one idea per frame.
- Do keep every shadow the same glow style.
- Don't mix surface treatments; everything is neon.
- Don't confuse it: Not cyberpunk: synthwave is 80s sunset nostalgia; cyberpunk is gritty, dystopian and data-heavy.

## References

- Search: "synthwave animation"
- Search: "outrun neon grid motion graphics"
- Search: "retrowave title sequence"
