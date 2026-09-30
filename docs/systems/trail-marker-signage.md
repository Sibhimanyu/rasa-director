---
name: "National park trail signage"
description: "Routed brown timber with cream slab-serif lettering, painted diamond trail blazes and distances marked along a winding path."
colors:
  canvas: "#4a3526"        # page ground
  ink: "#f0e4c8"           # headlines and body text
  accent: "#f2b233"        # primary accent: the one thing that matters in each frame
  support: "#8fb36a"       # supporting colour, used sparingly
  surface: "#5c4331"       # raised cards and panels
  muted: "#bba98b"         # muted captions
typography:
  display:
    fontFamily: Bitter
    fontWeight: 700
  body:
    fontFamily: Bitter
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "10px 10px 0 #f0e4c8"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "4px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# National park trail signage

A motion-graphics design system from Rasa Director's style library (Place & wayfinding). Also known as trail signs, park trail markers, routed wood signs, trail blazes, hiking signage.

## Overview

Routed brown timber with cream slab-serif lettering, painted diamond trail blazes and distances marked along a winding path.

It feels outdoorsy, sturdy, welcoming. Use it for outdoor and travel, journeys and roadmaps, sustainability films, step-by-step guides.

## Visual language

- **Type:** Bitter (display, weight 700, tracking -0.01em) with Bitter for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 4px solid in ink.
- **Depth:** hard shadows (`10px 10px 0 #f0e4c8`).
- **Texture:** grain. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Organic**. Motion that follows living, growing systems: soft sine curves, arcs rather than straight lines, uneven timing and growth from a source.
- Enter `sine.out`, exit `sine.in`, move `sine.inOut`; durations 400 / 650 / 1000 / 1500 / 2200 ms; stagger 90 ms; hold at least 1100 ms.
- Never: fade-up-slide, bounce, scale-pop, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Handmade / Craft, Mid-Century Modern
- **Typography:** Slab Serif
- **Composition / layout system:** Timeline, Asymmetric Composition
- **Information / data visualization:** Timeline
- **Color treatment:** Earth Tones, Warm Palette
- **Material / surface language:** Wood
- **Texture:** Film Grain
- **Motion function:** Show Progress, Show Location
- **Motion language:** Organic
- **Transition language:** Slide, Line-Draw Transition
- **Emotional / brand tone:** Friendly, Human

## Do's and Don'ts

- Do keep the accent (#f2b233) for the single most important element in each frame.
- Do use Bitter large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a WPA park poster: the trail sign itself, routed timber, blazes and distances, not a screen-printed landscape.

## References

- Search: "national park sign style"
- Search: "trail sign animation"
- Search: "hiking trail marker motion graphics"
