---
name: "Frutiger Aero"
description: "Glossy translucent glass tiles over sky blue and grass green, bubbles and light blooms, clean humanist sans."
colors:
  canvas: "#cfeeff"        # page ground
  ink: "#0a2d4d"           # headlines and body text
  accent: "#1fb4ff"        # primary accent: the one thing that matters in each frame
  support: "#6fd23a"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#4f7390"         # muted captions
typography:
  display:
    fontFamily: Hind
    fontWeight: 600
  body:
    fontFamily: Hind
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 22px
shadows:
  card: "0 40px 70px -16px rgba(0,0,0,0.3)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Frutiger Aero

A motion-graphics design system from RasanAI's style library (Retro & eras). Also known as Aero, Vista era, Windows 7 glass, eco-tech glossy.

## Overview

Glossy translucent glass tiles over sky blue and grass green, bubbles and light blooms, clean humanist sans.

It feels fresh, optimistic, clean. Use it for wellness and eco brands, nostalgic tech ads, calm product teasers.

## Visual language

- **Type:** Hind (display, weight 600, tracking -0.01em) with Hind for body text.
- **Surfaces:** translucent frosted panels (backdrop blur) over colour; corners 22px; outlines none.
- **Depth:** float shadows (`0 40px 70px -16px rgba(0,0,0,0.3)`).
- **Texture:** none; clean fills. **Icons:** duotone. **Decoration:** blobs.

## Motion

Motion language: **Floating**. Elements hover and bob gently around a rest point, as if suspended in water or air.
- Enter `sine.out`, exit `sine.in`, move `sine.inOut`; durations 500 / 800 / 1200 / 1800 / 2600 ms; stagger 70 ms; hold at least 1500 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Glass, Web 2.0
- **Era / design-movement influence:** Glassmorphism, Y2K
- **UI treatment:** Glassmorphic UI, Bento UI
- **Material / surface language:** Glass, Water
- **Color treatment:** Cool Palette, Gradient
- **Typography:** Humanist Sans
- **Motion language:** Floating
- **Transition language:** Dissolve, Blur Transition

## Do's and Don'ts

- Do keep the accent (#1fb4ff) for the single most important element in each frame.
- Do use Hind large and confident; one idea per frame.
- Do keep every shadow the same float style.
- Don't mix surface treatments; everything is glass.
- Don't confuse it: Not modern glassmorphism: Aero is saturated sky-and-grass, glossy highlights and bubbles, not muted frosted panels.

## References

- Search: "frutiger aero aesthetic animation"
- Search: "windows vista glass motion"
- Search: "aero bubbles glossy UI"
