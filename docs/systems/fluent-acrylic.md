---
name: "Fluent acrylic"
description: "Grainy acrylic desktop windows over cool mint and lavender light, crisp rounded window chrome, soft layered depth like Windows 11."
colors:
  canvas: "#dfe7ea"        # page ground
  ink: "#1b2a30"           # headlines and body text
  accent: "#8fe0cc"        # primary accent: the one thing that matters in each frame
  support: "#b9a8ff"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#61747b"         # muted captions
typography:
  display:
    fontFamily: Figtree
    fontWeight: 700
  body:
    fontFamily: Figtree
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 18px
shadows:
  card: "0 40px 70px -16px rgba(0,0,0,0.3)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Fluent acrylic

A motion-graphics design system from Rasa Director's style library (Soft & tactile). Also known as Windows 11 Mica, Fluent Design, acrylic material, noise glass windows.

## Overview

Grainy acrylic desktop windows over cool mint and lavender light, crisp rounded window chrome, soft layered depth like Windows 11.

It feels crisp, calm, contemporary. Use it for desktop app launches, OS-style product tours, productivity tools, developer tools with a gentle tone.

## Visual language

- **Type:** Figtree (display, weight 700, tracking -0.02em) with Figtree for body text.
- **Surfaces:** translucent frosted panels (backdrop blur) over colour; corners 18px; outlines none.
- **Depth:** float shadows (`0 40px 70px -16px rgba(0,0,0,0.3)`).
- **Texture:** noise. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Glass, Clean Minimalism
- **UI treatment:** Glassmorphic UI, Windowed UI
- **Material / surface language:** Frosted Glass
- **Texture:** Digital Noise
- **Composition / layout system:** Desktop Workspace, Layered Depth
- **Color treatment:** Cool Palette
- **Motion language:** Smooth
- **Transition language:** Scale Transition, Blur Transition
- **Era / design-movement influence:** Modern SaaS Design

## Do's and Don'ts

- Do keep the accent (#8fe0cc) for the single most important element in each frame.
- Do use Figtree large and confident; one idea per frame.
- Do keep every shadow the same float style.
- Don't mix surface treatments; everything is glass.
- Don't confuse it: Not glassmorphism cards: the frost is noisy and matte like acrylic, and it lives in desktop windows with real chrome, not floating cards.

## References

- Search: "fluent design acrylic animation"
- Search: "windows 11 mica UI motion"
- Search: "acrylic window product tour"
