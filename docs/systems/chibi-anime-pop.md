---
name: "Chibi anime pop"
description: "Cel-flat anime pastels: lavender and hot pink tiles with crisp outlines, sparkle bursts, rounded Japanese-pop type, snappy pops."
colors:
  canvas: "#efe4ff"        # page ground
  ink: "#2b1745"           # headlines and body text
  accent: "#ff4fa0"        # primary accent: the one thing that matters in each frame
  support: "#7cc8ff"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#9a86b8"         # muted captions
typography:
  display:
    fontFamily: Dela Gothic One
    fontWeight: 400
  body:
    fontFamily: M PLUS Rounded 1c
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 20px
shadows:
  card: "7px 7px 0 #ff4fa0, 14px 14px 0 #2b1745"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Chibi anime pop

A motion-graphics design system from RasanAI's style library (Playful & pop). Also known as chibi style, anime pop, cel-shaded cute, idol pop graphics.

## Overview

Cel-flat anime pastels: lavender and hot pink tiles with crisp outlines, sparkle bursts, rounded Japanese-pop type, snappy pops.

It feels bubbly, expressive, fandom, sparkly. Use it for gaming and gacha, VTuber and streamer brands, music and idol promos, anime-adjacent products.

## Visual language

- **Type:** Dela Gothic One (display, weight 400, tracking 0em) with M PLUS Rounded 1c for body text.
- **Surfaces:** flat fills, no gradients; corners 20px; outlines 3px solid in ink.
- **Depth:** layered shadows (`7px 7px 0 #ff4fa0, 14px 14px 0 #2b1745`).
- **Texture:** none; clean fills. **Icons:** glyph. **Decoration:** stars.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Anime / Cel-Shaded, Kawaii
- **Illustration style:** Cartoon, Character Illustration
- **Character / mascot treatment:** Stylized Human
- **Color treatment:** High Saturation, Pastel
- **Line / stroke language:** Medium, Ink
- **Composition / layout system:** Bento Grid
- **Motion language:** Snappy
- **Transition language:** Flash Transition, Scale Transition
- **VFX / compositing treatment:** Glow

## Do's and Don'ts

- Do keep the accent (#ff4fa0) for the single most important element in each frame.
- Do use Dela Gothic One large and confident; one idea per frame.
- Do keep every shadow the same layered style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not kawaii: chibi anime is saturated, cel-shaded and dramatic, with sparkle and speed effects.

## References

- Search: "chibi anime motion graphics"
- Search: "anime pop UI animation"
- Search: "cel shaded cute title animation"
