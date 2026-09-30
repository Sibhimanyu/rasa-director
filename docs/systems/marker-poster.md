---
name: "Ink & marker"
description: "Fat black marker strokes and all-caps marker lettering on white, one red highlight, loose scribbled emphasis."
colors:
  canvas: "#ffffff"        # page ground
  ink: "#111111"           # headlines and body text
  accent: "#e63022"        # primary accent: the one thing that matters in each frame
  support: "#111111"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#6a6a6a"         # muted captions
typography:
  display:
    fontFamily: Permanent Marker
    fontWeight: 400
  body:
    fontFamily: Covered By Your Grace
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 8px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "6px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Ink & marker

A motion-graphics design system from Rasa Director's style library (Handmade & printed). Also known as Sharpie style, marker drawing, felt-tip lettering, bold ink.

## Overview

Fat black marker strokes and all-caps marker lettering on white, one red highlight, loose scribbled emphasis.

It feels urgent, honest, punchy. Use it for manifesto films, announcements, activism and non-profits, founder statements.

## Visual language

- **Type:** Permanent Marker (display, weight 400, uppercase, tracking 0em) with Covered By Your Grace for body text.
- **Surfaces:** flat fills, no gradients; corners 8px; outlines 6px sketch in ink.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** doodle. **Decoration:** squiggles.

## Motion

Motion language: **Gestural**. Motion that traces the energy of a hand gesture: sweeping arcs, a fast attack and a dragging finish, like a brush or a flick of the wrist.
- Enter `power3.out`, exit `power2.in`, move `power3.inOut`; durations 150 / 300 / 500 / 800 / 1200 ms; stagger 70 ms; hold at least 800 ms.
- Never: fade-up-slide, fade-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Ink / Marker, Handmade / Craft
- **Illustration style:** Ink Illustration, Scribble
- **Line / stroke language:** Marker, Heavy
- **Texture:** Marker
- **Typography:** Handwritten / Script
- **Color treatment:** Black and White, Accent-Color System
- **Motion language:** Gestural
- **Transition language:** Line-Draw Transition, Hard Cut

## Do's and Don'ts

- Do keep the accent (#e63022) for the single most important element in each frame.
- Do use Permanent Marker large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not brush lettering: the stroke is an even, round felt-tip line, not a tapered brush.

## References

- Search: "marker hand lettering animation"
- Search: "sharpie style motion graphics"
- Search: "ink marker kinetic type"
