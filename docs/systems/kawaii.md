---
name: "Kawaii"
description: "Soft pink and mint pastels, round everything, thin cocoa outlines, blushing icons and sparkles, gentle bouncy entrances."
colors:
  canvas: "#fff0f4"        # page ground
  ink: "#5a3441"           # headlines and body text
  accent: "#ff9ebb"        # primary accent: the one thing that matters in each frame
  support: "#9fe3cf"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#b98b99"         # muted captions
typography:
  display:
    fontFamily: Mochiy Pop One
    fontWeight: 400
  body:
    fontFamily: M PLUS Rounded 1c
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 36px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Kawaii

A motion-graphics design system from RasanAI's style library (Playful & pop). Also known as cute Japanese style, kawaii UI, sanrio-style, cutesy pastel.

## Overview

Soft pink and mint pastels, round everything, thin cocoa outlines, blushing icons and sparkles, gentle bouncy entrances.

It feels cute, gentle, sweet, friendly. Use it for consumer apps for teens, stationery and snacks, wellness and journaling, character brands.

## Visual language

- **Type:** Mochiy Pop One (display, weight 400, tracking 0em) with M PLUS Rounded 1c for body text.
- **Surfaces:** flat fills, no gradients; corners 36px; outlines 3px solid in ink.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** stars.

## Motion

Motion language: **Bouncy**. Objects fall or travel to a boundary and rebound off it in decaying hops, never passing through the target.
- Enter `bounce.out`, exit `back.in(1.7)`, move `bounce.out`; durations 100 / 200 / 350 / 600 / 900 ms; stagger 60 ms; hold at least 700 ms.
- Never: fade-up-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: bounce.

## The terms that define it

- **Visual style / art direction:** Kawaii, Childlike / Naive
- **Color treatment:** Pastel
- **Shape language:** Rounded, Soft
- **Illustration style:** Cartoon, Character Illustration
- **Iconography:** Rounded Icons
- **Line / stroke language:** Thin
- **Typography:** Rounded Sans
- **Motion language:** Bouncy
- **Transition language:** Scale Transition, Fade
- **Character / mascot treatment:** Animal Mascot

## Do's and Don'ts

- Do keep the accent (#ff9ebb) for the single most important element in each frame.
- Do use Mochiy Pop One large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not generic pastel: kawaii is about cuteness cues (faces, blush, sparkles, tiny proportions), not just soft colour.

## References

- Search: "kawaii motion graphics"
- Search: "cute pastel app animation"
- Search: "kawaii UI animation"
