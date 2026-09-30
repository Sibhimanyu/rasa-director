---
name: "Video-editor timeline"
description: "Charcoal editing workspace with coloured clip blocks on stacked tracks, a playhead cutting through, waveform strips and a monospace timecode ruler."
colors:
  canvas: "#1e1e22"        # page ground
  ink: "#e8e8ea"           # headlines and body text
  accent: "#3fa9f5"        # primary accent: the one thing that matters in each frame
  support: "#3ecf6e"       # supporting colour, used sparingly
  surface: "#2a2a30"       # raised cards and panels
  muted: "#8a8a93"         # muted captions
typography:
  display:
    fontFamily: IBM Plex Sans Condensed
    fontWeight: 600
  body:
    fontFamily: IBM Plex Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 3px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Video-editor timeline

A motion-graphics design system from Rasa Director's style library (Interface). Also known as NLE timeline, editing timeline, editing suite UI, multitrack view.

## Overview

Charcoal editing workspace with coloured clip blocks on stacked tracks, a playhead cutting through, waveform strips and a monospace timecode ruler.

It feels focused, professional, crafty. Use it for creator-tool launches, making-of films, video and audio software.

## Visual language

- **Type:** IBM Plex Sans Condensed (display, weight 600, tracking -0.01em) with IBM Plex Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 3px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism, Startup / SaaS Minimalism
- **Era / design-movement influence:** Modern SaaS Design
- **UI treatment:** Production-Faithful UI, Dashboard UI
- **Composition / layout system:** Timeline, Temporal Composition
- **Color treatment:** Dark UI, Accent-Color System
- **Typography:** Condensed, Monospace
- **Shadow / depth cues:** No Shadow
- **Motion language:** Precise
- **Transition language:** Hard Cut, Wipe
- **UI interaction motion:** Drag, Scroll

## Do's and Don'ts

- Do keep the accent (#3fa9f5) for the single most important element in each frame.
- Do use IBM Plex Sans Condensed large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a timeline explainer: the editor's multitrack workspace in dark grey with clips and playhead, not an illustrated history axis.

## References

- Search: "video editing timeline animation"
- Search: "NLE interface motion graphic"
- Search: "editing suite UI aesthetic"
