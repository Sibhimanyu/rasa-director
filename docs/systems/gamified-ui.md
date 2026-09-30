---
name: "Gamified UI"
description: "Chunky raised buttons, XP counters and streak charts in owl green and flame orange, heavy rounded type, celebratory confetti."
colors:
  canvas: "#ffffff"        # page ground
  ink: "#2b2b3a"           # headlines and body text
  accent: "#58cc02"        # primary accent: the one thing that matters in each frame
  support: "#ff9600"       # supporting colour, used sparingly
  surface: "#f4f6ff"       # raised cards and panels
  muted: "#8b8fa3"         # muted captions
typography:
  display:
    fontFamily: Nunito
    fontWeight: 900
  body:
    fontFamily: Nunito
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 22px
shadows:
  card: "10px 10px 0 #2b2b3a"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Gamified UI

A motion-graphics design system from Rasa Director's style library (Playful & pop). Also known as gamification style, Duolingo UI, streaks and XP, reward UI.

## Overview

Chunky raised buttons, XP counters and streak charts in owl green and flame orange, heavy rounded type, celebratory confetti.

It feels rewarding, motivating, upbeat, competitive. Use it for habit and learning apps, fitness, product milestones, year-in-review recaps.

## Visual language

- **Type:** Nunito (display, weight 900, tracking -0.02em) with Nunito for body text.
- **Surfaces:** flat fills, no gradients; corners 22px; outlines 3px solid in #d8dcef.
- **Depth:** hard shadows (`10px 10px 0 #2b2b3a`).
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** confetti.

## Motion

Motion language: **Bouncy**. Objects fall or travel to a boundary and rebound off it in decaying hops, never passing through the target.
- Enter `bounce.out`, exit `back.in(1.7)`, move `bounce.out`; durations 100 / 200 / 350 / 600 / 900 ms; stagger 60 ms; hold at least 700 ms.
- Never: fade-up-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: pop.

## The terms that define it

- **Visual style / art direction:** Playful Tech, Mascot-Led
- **UI treatment:** Stylized UI, Widget / Notification UI
- **Information / data visualization:** Number Counter, Progress Bar, Statistic Callout
- **Motion function:** Show Success, Show Progress, Provide Feedback
- **Typography:** Rounded Sans, Display Typography
- **Shadow / depth cues:** Offset Shadow
- **Color treatment:** High Saturation
- **Motion language:** Bouncy
- **Transition language:** Scale Transition, Push

## Do's and Don'ts

- Do keep the accent (#58cc02) for the single most important element in each frame.
- Do use Nunito large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not arcade pixel style: gamified UI is a modern app with game rewards, not a retro game screen.

## References

- Search: "gamified app animation"
- Search: "streak XP progress animation"
- Search: "Duolingo style motion"
