---
name: "Code diff view"
description: "A split code review: pale red removed lines on one side, pale green added lines on the other, gutter numbers, hairline rules and monospace text."
colors:
  canvas: "#ffebe9"        # page ground
  ink: "#1f2328"           # headlines and body text
  accent: "#1a7f37"        # primary accent: the one thing that matters in each frame
  support: "#cf222e"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#59636e"         # muted captions
typography:
  display:
    fontFamily: Source Code Pro
    fontWeight: 700
  body:
    fontFamily: Source Sans 3
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 6px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Code diff view

A motion-graphics design system from RasanAI's style library (Interface). Also known as side-by-side diff, pull request diff, git diff UI, code review view.

## Overview

A split code review: pale red removed lines on one side, pale green added lines on the other, gutter numbers, hairline rules and monospace text.

It feels candid, technical, exacting. Use it for developer tool launches, changelog films, refactor and migration stories.

## Visual language

- **Type:** Source Code Pro (display, weight 700, tracking -0.02em) with Source Sans 3 for body text.
- **Surfaces:** flat fills, no gradients; corners 6px; outlines 1px solid in #d1d9e0.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** glyph. **Decoration:** none.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism
- **Era / design-movement influence:** Modern SaaS Design
- **UI treatment:** Production-Faithful UI, Flat UI
- **Composition / layout system:** Split Screen
- **Narrative structure:** Before → After
- **Color treatment:** Light UI, Complementary
- **Typography:** Monospace
- **Line / stroke language:** Hairline
- **Shadow / depth cues:** No Shadow
- **Motion language:** Precise
- **Transition language:** Wipe, Split

## Do's and Don'ts

- Do keep the accent (#1a7f37) for the single most important element in each frame.
- Do use Source Code Pro large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a before/after product split: a line-by-line code diff in red and green tints with gutters and monospace.

## References

- Search: "code diff animation"
- Search: "pull request diff motion graphic"
- Search: "git diff UI aesthetic"
