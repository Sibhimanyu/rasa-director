---
name: "Festival line-up poster"
description: "Summer festival bill: tall grotesque caps broken across a sunset-orange field, a sun-yellow disc, one rotated word, one act on a hot-pink block."
colors:
  canvas: "#ff7a1a"        # page ground
  ink: "#1b0f2e"           # headlines and body text
  accent: "#ff4fa3"        # primary accent: the one thing that matters in each frame
  support: "#ffd23f"       # supporting colour, used sparingly
  surface: "#ffe9c7"       # raised cards and panels
  muted: "#6b2f10"         # muted captions
typography:
  display:
    fontFamily: Bricolage Grotesque
    fontWeight: 800
  body:
    fontFamily: Archivo
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Festival line-up poster

A motion-graphics design system from Rasa Director's style library (Music & scene). Also known as festival bill, line-up poster, summer festival key art, music festival poster.

## Overview

Summer festival bill: tall grotesque caps broken across a sunset-orange field, a sun-yellow disc, one rotated word, one act on a hot-pink block.

It feels festive, sun-drenched, energetic. Use it for festival and event announcements, line-up reveals, ticket on-sale ads, summer campaigns.

## Visual language

- **Type:** Bricolage Grotesque (display, weight 800, uppercase, tracking -0.03em) with Archivo for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Rhythmic**. Motion organized on a regular meter so entrances, pulses and holds repeat at fixed musical intervals, with or without a soundtrack.
- Enter `power3.out`, exit `power3.in`, move `sine.inOut`; durations 125 / 250 / 500 / 1000 / 2000 ms; stagger 125 ms; hold at least 1000 ms.
- Never: fade-up-slide, blur-in, linear-entrance, bounce.
- Preview entrance: pop.

## The terms that define it

- **Visual style / art direction:** Abstract Geometric
- **Typography:** Grotesk, Condensed
- **Color treatment:** Warm Palette, High Saturation
- **Composition / layout system:** Poster Composition, Typography-Led Composition
- **Format / purpose:** Announcement Animation, Event Opener
- **Motion language:** Rhythmic
- **Pacing / rhythm:** Beat-Driven
- **Transition language:** Push, Scale Transition
- **Shadow / depth cues:** No Shadow
- **Shape language:** Circular, Geometric
- **Emotional / brand tone:** Energetic, Optimistic

## Do's and Don'ts

- Do keep the accent (#ff4fa3) for the single most important element in each frame.
- Do use Bricolage Grotesque large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not the Swiss poster: tilted, crowded and warm with on-sale energy, where Swiss is strict, cool and gridded.

## References

- Search: "music festival lineup poster design"
- Search: "festival poster typography animation"
- Search: "summer festival key art"
