---
name: "Smart-city dashboard"
description: "A calm city operations screen: deep harbour-navy frame, a teal district ring, amber live readouts for air, transit and energy in a mono face."
colors:
  canvas: "#0e1b25"        # page ground
  ink: "#e6edf1"           # headlines and body text
  accent: "#3fbfae"        # primary accent: the one thing that matters in each frame
  support: "#f2a93b"       # supporting colour, used sparingly
  surface: "#152634"       # raised cards and panels
  muted: "#7d93a3"         # muted captions
typography:
  display:
    fontFamily: Chivo
    fontWeight: 700
  body:
    fontFamily: Chivo Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Smart-city dashboard

A motion-graphics design system from Rasa Director's style library (Place & wayfinding). Also known as urban data dashboard, city operations centre, digital twin UI, urban analytics display.

## Overview

A calm city operations screen: deep harbour-navy frame, a teal district ring, amber live readouts for air, transit and energy in a mono face.

It feels civic, informed, steady. Use it for govtech and infrastructure, mobility and energy, sustainability reports, data-led city stories.

## Visual language

- **Type:** Chivo (display, weight 700, tracking -0.02em) with Chivo Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 1px solid in #2a4150.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** contours.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism, Futuristic Tech
- **UI treatment:** Dashboard UI, Futuristic UI / FUI
- **Information / data visualization:** Dashboard, Status Indicator, Number Counter
- **Color treatment:** Dark UI, Cool Palette
- **Typography:** Monospace, Geometric Sans
- **Format / purpose:** Dashboard Animation, Data Visualization
- **Motion function:** Show Data Change, Show State Change
- **Motion language:** Precise
- **Transition language:** Wipe, Line-Draw Transition
- **Emotional / brand tone:** Trustworthy, Technical, Calm

## Do's and Don'ts

- Do keep the accent (#3fbfae) for the single most important element in each frame.
- Do use Chivo large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a tactical HUD: civic data like air quality, transit and energy in quiet teal and amber, with no targeting, glow or sci-fi chrome.

## References

- Search: "smart city dashboard animation"
- Search: "urban data visualisation motion graphics"
- Search: "city operations centre UI"
