---
name: "Sports broadcast"
description: "Heavy condensed uppercase on stadium navy, stat tiles slamming in, taxi-yellow and red hits, hard shadows and hyper-fast wipes."
colors:
  canvas: "#0a1a3a"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#ffcc00"        # primary accent: the one thing that matters in each frame
  support: "#e4002b"       # supporting colour, used sparingly
  surface: "#132a5c"       # raised cards and panels
  muted: "#8ea0c6"         # muted captions
typography:
  display:
    fontFamily: Big Shoulders Display
    fontWeight: 900
  body:
    fontFamily: Barlow Condensed
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "10px 10px 0 #ffffff"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Sports broadcast

A motion-graphics design system from Rasa Director's style library (Cinematic & atmospheric). Also known as sports graphics package, matchday graphics, scorebug style, ESPN look.

## Overview

Heavy condensed uppercase on stadium navy, stat tiles slamming in, taxi-yellow and red hits, hard shadows and hyper-fast wipes.

It feels energetic, competitive, loud. Use it for sports graphics, fitness launches, esports and leagues, recap highlights.

## Visual language

- **Type:** Big Shoulders Display (display, weight 900, uppercase, tracking 0em) with Barlow Condensed for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** hard shadows (`10px 10px 0 #ffffff`).
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Cinematic, Brutalism
- **Format / purpose:** Sports Graphics, Broadcast Package
- **Typography:** Condensed, Display Typography
- **Composition / layout system:** Bento Grid, Modular Grid
- **Information / data visualization:** Statistic Callout, Number Counter, Comparison Cards
- **Color treatment:** High Saturation, High Contrast
- **Shape language:** Angular
- **Motion language:** Snappy
- **Pacing / rhythm:** Hyper-Fast
- **Transition language:** Wipe, Light Wipe

## Do's and Don'ts

- Do keep the accent (#ffcc00) for the single most important element in each frame.
- Do use Big Shoulders Display large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a news package: louder, italic-energy type and stat tiles; everything wipes on the beat.

## References

- Search: "sports broadcast graphics package"
- Search: "matchday motion graphics"
- Search: "sports stats animation"
