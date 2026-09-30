---
name: "Illustrated campus map"
description: "A friendly visitor map: ivory grounds on lawn green, soft-shadowed building pins with rounded labels, a dotted walking route and a legend card."
colors:
  canvas: "#a9cf8f"        # page ground
  ink: "#1d2b1f"           # headlines and body text
  accent: "#d2452c"        # primary accent: the one thing that matters in each frame
  support: "#2f6fb0"       # supporting colour, used sparingly
  surface: "#fbf8f0"       # raised cards and panels
  muted: "#4f6451"         # muted captions
typography:
  display:
    fontFamily: Figtree
    fontWeight: 800
  body:
    fontFamily: Figtree
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 16px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Illustrated campus map

A motion-graphics design system from Rasa Director's style library (Place & wayfinding). Also known as campus map, visitor map, site map, park map, friendly illustrated map.

## Overview

A friendly visitor map: ivory grounds on lawn green, soft-shadowed building pins with rounded labels, a dotted walking route and a legend card.

It feels welcoming, helpful, sunny. Use it for education and campuses, events and festivals, local businesses, onboarding tours.

## Visual language

- **Type:** Figtree (display, weight 800, tracking -0.03em) with Figtree for body text.
- **Surfaces:** flat fills, no gradients; corners 16px; outlines 2px sketch in ink.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Bouncy**. Objects fall or travel to a boundary and rebound off it in decaying hops, never passing through the target.
- Enter `bounce.out`, exit `back.in(1.7)`, move `bounce.out`; durations 100 / 200 / 350 / 600 / 900 ms; stagger 60 ms; hold at least 700 ms.
- Never: fade-up-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: pop.

## The terms that define it

- **Visual style / art direction:** Corporate Flat, Clean Minimalism
- **Information / data visualization:** Map
- **Format / purpose:** Map Animation
- **Camera language:** Top-Down
- **Color treatment:** Analogous, Warm Palette
- **Shape language:** Rounded, Organic
- **Shadow / depth cues:** Soft Diffuse Shadow
- **Motion function:** Show Location, Show Navigation
- **Motion language:** Bouncy
- **Transition language:** Zoom Transition, Line-Draw Transition
- **Emotional / brand tone:** Friendly, Optimistic

## Do's and Don'ts

- Do keep the accent (#d2452c) for the single most important element in each frame.
- Do use Figtree large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a map explainer: a warm visitor map with a walking route and friendly labels, not a newsroom data map.

## References

- Search: "illustrated campus map animation"
- Search: "visitor map motion graphics"
- Search: "friendly map explainer"
