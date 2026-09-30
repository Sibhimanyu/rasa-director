---
name: "K-pop comeback teaser"
description: "The comeback scheduler: a clean white page counting D-7 to release, wide extended caps, one hot cherry accent, pale sky-blue details and mono credits."
colors:
  canvas: "#f7f7f5"        # page ground
  ink: "#111114"           # headlines and body text
  accent: "#e8173b"        # primary accent: the one thing that matters in each frame
  support: "#9fc3e6"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#8a8a92"         # muted captions
typography:
  display:
    fontFamily: Unbounded
    fontWeight: 700
  body:
    fontFamily: IBM Plex Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 999px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# K-pop comeback teaser

A motion-graphics design system from Rasa Director's style library (Music & scene). Also known as comeback scheduler, K-pop teaser poster, concept photo teaser, idol album rollout.

## Overview

The comeback scheduler: a clean white page counting D-7 to release, wide extended caps, one hot cherry accent, pale sky-blue details and mono credits.

It feels polished, anticipatory, youthful. Use it for release countdowns, album rollouts, fandom social, event schedules.

## Visual language

- **Type:** Unbounded (display, weight 700, uppercase, tracking -0.02em) with IBM Plex Mono for body text.
- **Surfaces:** flat fills, no gradients; corners fully rounded (pills); outlines 2px solid in ink.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** crosshair.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Fashion Editorial
- **Era / design-movement influence:** Y2K
- **Typography:** Extended, Monospace
- **Color treatment:** Accent-Color System, Light UI
- **Composition / layout system:** Timeline, Swiss Grid
- **Format / purpose:** Teaser, Announcement Animation
- **Narrative structure:** Setup → Anticipation → Payoff
- **Motion language:** Snappy
- **Pacing / rhythm:** Beat-Driven
- **Transition language:** Hard Cut, Flash Transition
- **Shadow / depth cues:** No Shadow
- **Shape language:** Circular, Geometric
- **Emotional / brand tone:** Youthful, Confident

## Do's and Don'ts

- Do keep the accent (#e8173b) for the single most important element in each frame.
- Do use Unbounded large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a plain roadmap timeline: it's a fan-facing release countdown with idol-album polish, wide type and a single signature colour.

## References

- Search: "kpop comeback schedule design"
- Search: "kpop teaser poster motion"
- Search: "album release countdown graphic"
