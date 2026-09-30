---
name: "Morning-show sunshine"
description: "Sky-blue set with soft sunny blobs, rounded white cards stacked as the rundown, yellow and coral icons, a chunky friendly sans."
colors:
  canvas: "#dff0ff"        # page ground
  ink: "#13294b"           # headlines and body text
  accent: "#ffb000"        # primary accent: the one thing that matters in each frame
  support: "#ff6f59"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#5d7290"         # muted captions
typography:
  display:
    fontFamily: Gabarito
    fontWeight: 800
  body:
    fontFamily: Figtree
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 28px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Morning-show sunshine

A motion-graphics design system from Rasa Director's style library (Broadcast). Also known as breakfast TV graphics, morning show package, daytime TV look, coming up rundown.

## Overview

Sky-blue set with soft sunny blobs, rounded white cards stacked as the rundown, yellow and coral icons, a chunky friendly sans.

It feels cheerful, warm, approachable. Use it for lifestyle and wellness, daily updates and roundups, consumer apps, community news.

## Visual language

- **Type:** Gabarito (display, weight 800, tracking -0.02em) with Figtree for body text.
- **Surfaces:** flat fills, no gradients; corners 28px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** blobs.

## Motion

Motion language: **Springy**. Motion that behaves like a damped physical spring: fast attack, one visible overshoot, then a quick settle.
- Enter `back.out(1.7)`, exit `power3.in`, move `elastic.out(1,0.75)`; durations 180 / 300 / 480 / 720 / 1100 ms; stagger 40 ms; hold at least 650 ms.
- Never: fade-up-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: pop.

## The terms that define it

- **Visual style / art direction:** Warm Minimalism
- **Format / purpose:** Broadcast Package, Lower Thirds
- **Composition / layout system:** Stacked Cards
- **Color treatment:** Pastel, Warm Palette
- **Shape language:** Rounded
- **Shadow / depth cues:** Soft Diffuse Shadow
- **Motion language:** Springy
- **Transition language:** Slide, Scale Transition
- **Emotional / brand tone:** Friendly, Optimistic

## Do's and Don'ts

- Do keep the accent (#ffb000) for the single most important element in each frame.
- Do use Gabarito large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not pastel minimal: a busy, sunny daytime-TV rundown of cards and icons, not sparse calm pastel space.

## References

- Search: "morning show graphics package"
- Search: "breakfast tv motion graphics"
- Search: "daytime tv lower third"
