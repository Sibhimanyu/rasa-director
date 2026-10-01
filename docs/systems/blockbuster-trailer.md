---
name: "Blockbuster trailer"
description: "Tall condensed uppercase slamming onto teal-black, orange light rays behind, lens noise; each card hits on a boom and cuts."
colors:
  canvas: "#06141b"        # page ground
  ink: "#f4f1ea"           # headlines and body text
  accent: "#ff8a3d"        # primary accent: the one thing that matters in each frame
  support: "#1f6f78"       # supporting colour, used sparingly
  surface: "#0e232c"       # raised cards and panels
  muted: "#7fa1a8"         # muted captions
typography:
  display:
    fontFamily: Bebas Neue
    fontWeight: 400
  body:
    fontFamily: Barlow Condensed
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "0 0 24px #ff8a3d"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Blockbuster trailer

A motion-graphics design system from RasanAI's style library (Cinematic & atmospheric). Also known as movie trailer titles, trailer cards, teal and orange, epic trailer type.

## Overview

Tall condensed uppercase slamming onto teal-black, orange light rays behind, lens noise; each card hits on a boom and cuts.

It feels epic, urgent, massive. Use it for trailers and teasers, launch countdowns, game and film promos, event hype reels.

## Visual language

- **Type:** Bebas Neue (display, weight 400, uppercase, tracking 0.06em) with Barlow Condensed for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** glow shadows (`0 0 24px #ff8a3d`).
- **Texture:** noise. **Icons:** filled. **Decoration:** rays.

## Motion

Motion language: **Heavy**. Motion that communicates large mass: slow to start, accelerating under gravity, landing with impact and minimal rebound.
- Enter `power4.in`, exit `power3.in`, move `power3.inOut`; durations 120 / 250 / 450 / 800 / 1200 ms; stagger 120 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, blur-in, opacity-only-entrance.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Cinematic, Futuristic Tech
- **Format / purpose:** Trailer, Teaser
- **Typography:** Condensed, Display Typography
- **Color treatment:** Complementary, Dark UI
- **VFX / compositing treatment:** Light Streaks, Bloom, Noise
- **Composition / layout system:** Centered Hero Composition, Typography-Led Composition
- **Motion language:** Heavy
- **Pacing / rhythm:** Staccato
- **Transition language:** Flash Transition, Hard Cut
- **Sound + motion relationship:** Impacts, Risers

## Do's and Don'ts

- Do keep the accent (#ff8a3d) for the single most important element in each frame.
- Do use Bebas Neue large and confident; one idea per frame.
- Do keep every shadow the same glow style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a title sequence: loud, fast and percussive, built on hits and risers rather than holds.

## References

- Search: "movie trailer title animation"
- Search: "epic trailer text cards"
- Search: "teal orange trailer typography"
