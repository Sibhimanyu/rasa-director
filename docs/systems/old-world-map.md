---
name: "Old-world chart"
description: "Hand-inked coastlines on foxed parchment, a dotted voyage route in indigo, compass rose and engraved old-style lettering in iron-gall brown."
colors:
  canvas: "#e6d8b6"        # page ground
  ink: "#3b2a1a"           # headlines and body text
  accent: "#2e4a6b"        # primary accent: the one thing that matters in each frame
  support: "#6f8f5a"       # supporting colour, used sparingly
  surface: "#f1e6c9"       # raised cards and panels
  muted: "#7a6446"         # muted captions
typography:
  display:
    fontFamily: IM Fell English
    fontWeight: 400
  body:
    fontFamily: IM Fell English
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 2px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Old-world chart

A motion-graphics design system from Rasa Director's style library (Place & wayfinding). Also known as antique map, sea chart, portolan chart, treasure map, cartographic engraving.

## Overview

Hand-inked coastlines on foxed parchment, a dotted voyage route in indigo, compass rose and engraved old-style lettering in iron-gall brown.

It feels adventurous, storied, curious. Use it for history and heritage, travel and exploration, origin stories, games and fiction.

## Visual language

- **Type:** IM Fell English (display, weight 400, tracking 0em) with IM Fell English for body text.
- **Surfaces:** off-white paper with visible fibre; corners 2px; outlines 2px sketch in ink.
- **Depth:** no shadows.
- **Texture:** paper. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Organic**. Motion that follows living, growing systems: soft sine curves, arcs rather than straight lines, uneven timing and growth from a source.
- Enter `sine.out`, exit `sine.in`, move `sine.inOut`; durations 400 / 650 / 1000 / 1500 / 2200 ms; stagger 90 ms; hold at least 1100 ms.
- Never: fade-up-slide, bounce, scale-pop, linear-entrance.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Handmade / Craft, Editorial
- **Illustration style:** Ink Illustration, Hand-Drawn
- **Information / data visualization:** Map
- **Format / purpose:** Map Animation
- **Typography:** Editorial Serif
- **Color treatment:** Earth Tones, Muted
- **Texture:** Paper Grain, Ink Bleed
- **Material / surface language:** Paper
- **Camera language:** Top-Down, Pan
- **Motion language:** Organic
- **Transition language:** Line-Draw Transition, Dissolve
- **Emotional / brand tone:** Nostalgic, Mysterious

## Do's and Don'ts

- Do keep the accent (#2e4a6b) for the single most important element in each frame.
- Do use IM Fell English large and confident; one idea per frame.
- Don't add drop shadows.
- Don't mix surface treatments; everything is paper.
- Don't confuse it: Not a map explainer: an antique chart with parchment, hand-inked coasts and engraved lettering, not a clean newsroom map.

## References

- Search: "old map animation"
- Search: "antique map motion graphics"
- Search: "vintage sea chart style video"
