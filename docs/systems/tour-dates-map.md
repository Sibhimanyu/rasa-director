---
name: "Tour-dates map"
description: "The tour announcement: a night-black atlas in charcoal and bone, a dotted red tour-bus route linking stamped city pins, a slab-caps title card with a red offset."
colors:
  canvas: "#1d1f24"        # page ground
  ink: "#f0ebe0"           # headlines and body text
  accent: "#e8412c"        # primary accent: the one thing that matters in each frame
  support: "#f2b134"       # supporting colour, used sparingly
  surface: "#2e3139"       # raised cards and panels
  muted: "#9a978f"         # muted captions
typography:
  display:
    fontFamily: Staatliches
    fontWeight: 400
  body:
    fontFamily: Archivo Narrow
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 4px
shadows:
  card: "10px 10px 0 #f0ebe0"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px dashed {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Tour-dates map

A motion-graphics design system from Rasa Director's style library (Music & scene). Also known as world tour poster, tour itinerary graphic, tour merch back print, band tour map.

## Overview

The tour announcement: a night-black atlas in charcoal and bone, a dotted red tour-bus route linking stamped city pins, a slab-caps title card with a red offset.

It feels adventurous, road-worn, anticipatory. Use it for tour and event announcements, travel stories, retail store openings, roadshow recaps.

## Visual language

- **Type:** Staatliches (display, weight 400, uppercase, tracking 0.01em) with Archivo Narrow for body text.
- **Surfaces:** flat fills, no gradients; corners 4px; outlines 2px dashed in ink.
- **Depth:** hard shadows (`10px 10px 0 #f0ebe0`).
- **Texture:** grain. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Screen Print
- **Format / purpose:** Map Animation, Announcement Animation
- **Information / data visualization:** Map
- **Composition / layout system:** Full Bleed, Layered Depth
- **Typography:** Condensed, Display Typography
- **Color treatment:** Dark UI, Limited Palette
- **Camera language:** Pan, Push-In
- **Motion language:** Smooth
- **Pacing / rhythm:** Medium Explanatory
- **Transition language:** Camera Move Transition, Line-Draw Transition
- **Shadow / depth cues:** Hard Shadow
- **Shape language:** Rectilinear

## Do's and Don'ts

- Do keep the accent (#e8412c) for the single most important element in each frame.
- Do use Staatliches large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a map explainer: the map is a tour poster, dark and merch-like, with a route and nights, not a neutral information graphic.

## References

- Search: "band tour poster map"
- Search: "tour dates announcement animation"
- Search: "world tour graphic design"
