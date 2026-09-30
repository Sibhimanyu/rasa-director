---
name: "Confetti party"
description: "Confetti raining over deep party purple, a gold star, big rounded headline in shiny candy colours, popping entrances."
colors:
  canvas: "#3a1078"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#ffd23f"        # primary accent: the one thing that matters in each frame
  support: "#ff4fa3"       # supporting colour, used sparingly
  surface: "#4e1aa0"       # raised cards and panels
  muted: "#c8b5ff"         # muted captions
typography:
  display:
    fontFamily: Shrikhand
    fontWeight: 400
  body:
    fontFamily: Poppins
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 32px
shadows:
  card: "0 0 24px #ffd23f"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Confetti party

A motion-graphics design system from Rasa Director's style library (Playful & pop). Also known as celebration graphics, party pop, festive confetti, launch-day celebration.

## Overview

Confetti raining over deep party purple, a gold star, big rounded headline in shiny candy colours, popping entrances.

It feels celebratory, joyful, festive, exciting. Use it for milestone announcements, birthdays and anniversaries, launch-day posts, year-end recaps.

## Visual language

- **Type:** Shrikhand (display, weight 400, tracking 0em) with Poppins for body text.
- **Surfaces:** soft gradient washes from the surface toward the accent; corners 32px; outlines none.
- **Depth:** glow shadows (`0 0 24px #ffd23f`).
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** confetti.

## Motion

Motion language: **Playful**. Light, cheeky motion with small overshoots, tilts and secondary wiggles, playful in intent rather than in strict physics.
- Enter `back.out(1.7)`, exit `back.in(1.7)`, move `sine.inOut`; durations 160 / 280 / 450 / 700 / 1000 ms; stagger 40 ms; hold at least 600 ms.
- Never: fade-up-slide, linear-entrance, blur-in.
- Preview entrance: pop.

## The terms that define it

- **Visual style / art direction:** Pop Art, Gradient-Heavy
- **VFX / compositing treatment:** Particles
- **Color treatment:** High Saturation, Complementary
- **Typography:** Display Typography, Rounded Sans
- **Composition / layout system:** Centered Hero Composition
- **Format / purpose:** Announcement Animation, Brand Social Content
- **Motion language:** Playful
- **Transition language:** Scale Transition, Flash Transition

## Do's and Don'ts

- Do keep the accent (#ffd23f) for the single most important element in each frame.
- Do use Shrikhand large and confident; one idea per frame.
- Do keep every shadow the same glow style.
- Don't mix surface treatments; everything is gradient.
- Don't confuse it: Not gamified UI: confetti party is a one-off celebration card, not an app reward system.

## References

- Search: "confetti celebration motion graphics"
- Search: "party announcement animation"
- Search: "confetti burst title card"
