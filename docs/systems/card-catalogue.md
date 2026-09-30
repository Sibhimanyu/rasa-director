---
name: "Card catalogue"
description: "A typed library card lifted from an oak drawer: cream stock, call number, all-caps typewriter heading and indented entries."
colors:
  canvas: "#6b4a2f"        # page ground
  ink: "#f3ead6"           # headlines and body text
  accent: "#b8322a"        # primary accent: the one thing that matters in each frame
  support: "#d9c8a4"       # supporting colour, used sparingly
  surface: "#f7f1e1"       # raised cards and panels
  muted: "#cbb998"         # muted captions
typography:
  display:
    fontFamily: Cutive Mono
    fontWeight: 400
  body:
    fontFamily: Cutive Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 4px
shadows:
  card: "0 40px 70px -16px rgba(0,0,0,0.3)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Card catalogue

A motion-graphics design system from Rasa Director's style library (Science). Also known as library index card, catalog card, card index, archive file card.

## Overview

A typed library card lifted from an oak drawer: cream stock, call number, all-caps typewriter heading and indented entries.

It feels patient, nostalgic, orderly. Use it for libraries and archives, research and knowledge products, heritage brands, book and publishing.

## Visual language

- **Type:** Cutive Mono (display, weight 400, uppercase, tracking 0em) with Cutive Mono for body text.
- **Surfaces:** off-white paper with visible fibre; corners 4px; outlines none.
- **Depth:** float shadows (`0 40px 70px -16px rgba(0,0,0,0.3)`).
- **Texture:** grain. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Mechanical**. Motion driven as if by motors, gears and belts: constant velocity segments with abrupt, rigid starts and stops.
- Enter `none`, exit `none`, move `power1.inOut`; durations 150 / 250 / 400 / 600 / 900 ms; stagger 100 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: type.

## The terms that define it

- **Visual style / art direction:** Print-Editorial
- **Typography:** Monospace
- **Material / surface language:** Paper, Wood
- **Texture:** Paper Grain
- **Composition / layout system:** Centered Hero Composition
- **Color treatment:** Earth Tones
- **Shadow / depth cues:** Floating Shadows
- **UI interaction motion:** Typing
- **Motion language:** Mechanical
- **Transition language:** Slide, Card Flip
- **Emotional / brand tone:** Nostalgic, Intellectual

## Do's and Don'ts

- Do keep the accent (#b8322a) for the single most important element in each frame.
- Do use Cutive Mono large and confident; one idea per frame.
- Do keep every shadow the same float style.
- Don't mix surface treatments; everything is paper.
- Don't confuse it: Not a screenplay page: a small catalogue card on oak, call number and entries, not a script on a bare page.

## References

- Search: "library card catalog animation"
- Search: "index card typewriter motion graphics"
- Search: "archive card design video"
