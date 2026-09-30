---
name: "Timeline explainer"
description: "Milestone rows marching down a rail, green year dots, bold serif dates, each step sliding in as the story moves forward."
colors:
  canvas: "#f2efe6"        # page ground
  ink: "#1f1d1a"           # headlines and body text
  accent: "#2f6f4e"        # primary accent: the one thing that matters in each frame
  support: "#e0a526"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#7a756b"         # muted captions
typography:
  display:
    fontFamily: Fraunces
    fontWeight: 700
  body:
    fontFamily: Work Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 999px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Timeline explainer

A motion-graphics design system from Rasa Director's style library (Data & explainers). Also known as history timeline, roadmap animation, milestone sequence.

## Overview

Milestone rows marching down a rail, green year dots, bold serif dates, each step sliding in as the story moves forward.

It feels orderly, narrative, assured. Use it for company histories, product roadmaps, anniversary films.

## Visual language

- **Type:** Fraunces (display, weight 700, tracking -0.02em) with Work Sans for body text.
- **Surfaces:** flat fills, no gradients; corners fully rounded (pills); outlines 2px solid in ink.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** paper. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Rhythmic**. Motion organized on a regular meter so entrances, pulses and holds repeat at fixed musical intervals, with or without a soundtrack.
- Enter `power3.out`, exit `power3.in`, move `sine.inOut`; durations 125 / 250 / 500 / 1000 / 2000 ms; stagger 125 ms; hold at least 1000 ms.
- Never: fade-up-slide, blur-in, linear-entrance, bounce.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Editorial
- **Information / data visualization:** Timeline
- **Composition / layout system:** Timeline
- **Format / purpose:** Timeline
- **Narrative structure:** Timeline
- **Motion function:** Show Progress
- **Typography:** Editorial Serif
- **Motion language:** Rhythmic
- **Transition language:** Push, Slide

## Do's and Don'ts

- Do keep the accent (#2f6f4e) for the single most important element in each frame.
- Do use Fraunces large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.

## References

- Search: "timeline animation"
- Search: "history milestones motion graphics"
- Search: "roadmap explainer animated"
