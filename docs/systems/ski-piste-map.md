---
name: "Ski resort piste map"
description: "Snow-white slopes on glacier blue, red and blue piste markers, a lift route, faint mountain contours and tall condensed resort capitals."
colors:
  canvas: "#cfe0ee"        # page ground
  ink: "#10233a"           # headlines and body text
  accent: "#d7262b"        # primary accent: the one thing that matters in each frame
  support: "#1c5fb8"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#58708a"         # muted captions
typography:
  display:
    fontFamily: Antonio
    fontWeight: 700
  body:
    fontFamily: Barlow
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 6px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Ski resort piste map

A motion-graphics design system from RasanAI's style library (Place & wayfinding). Also known as piste map, trail map, ski resort map, mountain resort graphics.

## Overview

Snow-white slopes on glacier blue, red and blue piste markers, a lift route, faint mountain contours and tall condensed resort capitals.

It feels crisp, sporty, alpine. Use it for outdoor and sport, winter campaigns, travel, event and venue guides.

## Visual language

- **Type:** Antonio (display, weight 700, uppercase, tracking 0.01em) with Barlow for body text.
- **Surfaces:** flat fills, no gradients; corners 6px; outlines 2px solid in #10233a.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** contours.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Clean Minimalism, Modernist
- **Information / data visualization:** Map
- **Format / purpose:** Map Animation
- **Camera language:** Top-Down, Zoom
- **Typography:** Condensed
- **Color treatment:** Cool Palette, Light UI
- **Composition / layout system:** Full Bleed
- **Motion function:** Show Location
- **Motion language:** Snappy
- **Transition language:** Zoom Transition, Line-Draw Transition
- **Emotional / brand tone:** Energetic, Optimistic

## Do's and Don'ts

- Do keep the accent (#d7262b) for the single most important element in each frame.
- Do use Antonio large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not an illustrated campus map: cold blue and snow white, piste colours and alpine contours, tall condensed caps instead of friendly rounded type.

## References

- Search: "ski piste map design"
- Search: "ski resort map animation"
- Search: "alpine map motion graphics"
