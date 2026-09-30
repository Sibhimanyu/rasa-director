---
name: "Lock-screen notifications"
description: "Frosted slate notification cards fanned over a dusky wallpaper, bold app titles, grey timestamps, a big clock above, cards sliding up one by one."
colors:
  canvas: "#243148"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#ff9f6b"        # primary accent: the one thing that matters in each frame
  support: "#7fb3d5"       # supporting colour, used sparingly
  surface: "#46526b"       # raised cards and panels
  muted: "#b9c2d3"         # muted captions
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontWeight: 700
  body:
    fontFamily: Plus Jakarta Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 20px
shadows:
  card: "0 40px 70px -16px rgba(0,0,0,0.3)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Lock-screen notifications

A motion-graphics design system from Rasa Director's style library (Interface). Also known as notification stack, push notifications, phone lock screen, toast stack.

## Overview

Frosted slate notification cards fanned over a dusky wallpaper, bold app titles, grey timestamps, a big clock above, cards sliding up one by one.

It feels intimate, timely, calm. Use it for app launches, social ads, story openers about everyday life.

## Visual language

- **Type:** Plus Jakarta Sans (display, weight 700, tracking -0.02em) with Plus Jakarta Sans for body text.
- **Surfaces:** translucent frosted panels (backdrop blur) over colour; corners 20px; outlines none.
- **Depth:** float shadows (`0 40px 70px -16px rgba(0,0,0,0.3)`).
- **Texture:** grain. **Icons:** emoji3d. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Glass, Clean Minimalism
- **Era / design-movement influence:** Glassmorphism
- **UI treatment:** Glassmorphic UI, Production-Faithful UI, Device-Bound UI
- **Composition / layout system:** Stacked Cards, Phone Composition
- **Color treatment:** Dark UI, Cool Palette
- **Typography:** Neutral Sans Serif
- **Material / surface language:** Frosted Glass
- **Shadow / depth cues:** Floating Shadows
- **Motion language:** Smooth
- **Transition language:** Slide, Blur Transition
- **UI interaction motion:** Notification, Swipe

## Do's and Don'ts

- Do keep the accent (#ff9f6b) for the single most important element in each frame.
- Do use Plus Jakarta Sans large and confident; one idea per frame.
- Do keep every shadow the same float style.
- Don't mix surface treatments; everything is glass.
- Don't confuse it: Not spatial glass: flat phone-sized notification cards stacked over a wallpaper, not floating 3D panels in space.

## References

- Search: "lock screen notification animation"
- Search: "push notification motion graphic"
- Search: "notification stack video"
