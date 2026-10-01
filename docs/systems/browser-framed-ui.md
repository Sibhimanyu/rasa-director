---
name: "Browser-framed UI"
description: "The product shown inside tidy browser windows with traffic-light chrome on a dotted neutral backdrop, cursor-led, soft realistic shadows."
colors:
  canvas: "#e9ebee"        # page ground
  ink: "#18181b"           # headlines and body text
  accent: "#0ea5e9"        # primary accent: the one thing that matters in each frame
  support: "#f43f5e"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#71717a"         # muted captions
typography:
  display:
    fontFamily: Instrument Sans
    fontWeight: 700
  body:
    fontFamily: Instrument Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 10px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Browser-framed UI

A motion-graphics design system from RasanAI's style library (Product & UI). Also known as browser mockup, web app in chrome, website walkthrough.

## Overview

The product shown inside tidy browser windows with traffic-light chrome on a dotted neutral backdrop, cursor-led, soft realistic shadows.

It feels clear, honest, practical. Use it for web app demos, tutorials, website tours.

## Visual language

- **Type:** Instrument Sans (display, weight 700, tracking -0.02em) with Instrument Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 10px; outlines 1px solid in #d4d4d8.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** dots. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Clean Minimalism
- **UI treatment:** Browser-Framed UI, Production-Faithful UI
- **Composition / layout system:** Browser Window
- **Product demonstration language:** Cursor-Driven Demo, Guided Walkthrough, Callout Annotation
- **UI interaction motion:** Cursor Movement, Click, Scroll
- **Camera language:** Push-In
- **Motion language:** Smooth
- **Transition language:** Push, Zoom Transition

## Do's and Don'ts

- Do keep the accent (#0ea5e9) for the single most important element in each frame.
- Do use Instrument Sans large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.

## References

- Search: "browser mockup animation"
- Search: "web app walkthrough video"
- Search: "cursor driven product demo"
