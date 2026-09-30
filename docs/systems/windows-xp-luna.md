---
name: "Windows XP Luna"
description: "Glossy royal-blue title bars and rounded window tops over a Bliss-sky gradient, cheerful green accents and soft drop shadows."
colors:
  canvas: "#bfe0fb"        # page ground
  ink: "#0b2a5b"           # headlines and body text
  accent: "#1f5fd6"        # primary accent: the one thing that matters in each frame
  support: "#3fae2a"       # supporting colour, used sparingly
  surface: "#ece9d8"       # raised cards and panels
  muted: "#5b6b80"         # muted captions
typography:
  display:
    fontFamily: Nunito Sans
    fontWeight: 800
  body:
    fontFamily: Nunito Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 10px
shadows:
  card: "0 40px 70px -16px rgba(0,0,0,0.3)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px solid {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Windows XP Luna

A motion-graphics design system from Rasa Director's style library (Retro & eras). Also known as Windows XP, Luna theme, Bliss era, 2000s desktop.

## Overview

Glossy royal-blue title bars and rounded window tops over a Bliss-sky gradient, cheerful green accents and soft drop shadows.

It feels friendly, nostalgic, optimistic. Use it for millennial-nostalgia ads, consumer app teasers, meme-driven social.

## Visual language

- **Type:** Nunito Sans (display, weight 800, tracking -0.01em) with Nunito Sans for body text.
- **Surfaces:** soft gradient washes from the surface toward the accent; corners 10px; outlines 3px solid in accent.
- **Depth:** float shadows (`0 40px 70px -16px rgba(0,0,0,0.3)`).
- **Texture:** none; clean fills. **Icons:** duotone. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Web 2.0, Y2K
- **Era / design-movement influence:** Y2K, Retro Operating Systems
- **UI treatment:** Retro UI, Windowed UI
- **Color treatment:** High Saturation, Gradient
- **Iconography:** Skeuomorphic Icons
- **Shadow / depth cues:** Floating Shadows
- **Motion language:** Smooth
- **Transition language:** Fade, Scale Transition

## Do's and Don'ts

- Do keep the accent (#1f5fd6) for the single most important element in each frame.
- Do use Nunito Sans large and confident; one idea per frame.
- Do keep every shadow the same float style.
- Don't mix surface treatments; everything is gradient.
- Don't confuse it: Not Windows 95: XP is colourful, glossy and rounded where 95 is grey and square.

## References

- Search: "windows xp UI animation"
- Search: "luna theme motion graphic"
- Search: "2000s desktop nostalgia video"
