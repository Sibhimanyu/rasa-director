---
name: "Lo-fi study beats"
description: "Dusky anime-still palette: indigo evening, warm desk-lamp amber and dusty rose, soft rounded lower-case type over a grainy window view."
colors:
  canvas: "#1d2140"        # page ground
  ink: "#f6e7d8"           # headlines and body text
  accent: "#f2a65a"        # primary accent: the one thing that matters in each frame
  support: "#c97b84"       # supporting colour, used sparingly
  surface: "#2a2f55"       # raised cards and panels
  muted: "#a8a3c2"         # muted captions
typography:
  display:
    fontFamily: M PLUS Rounded 1c
    fontWeight: 700
  body:
    fontFamily: Nunito
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 18px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Lo-fi study beats

A motion-graphics design system from Rasa Director's style library (Music & scene). Also known as lofi hip hop radio, chillhop, beats to relax to, study girl aesthetic.

## Overview

Dusky anime-still palette: indigo evening, warm desk-lamp amber and dusty rose, soft rounded lower-case type over a grainy window view.

It feels cozy, nostalgic, calm. Use it for music livestream loops, playlist and podcast covers, study and focus apps, ambient brand content.

## Visual language

- **Type:** M PLUS Rounded 1c (display, weight 700, lowercase, tracking -0.01em) with Nunito for body text.
- **Surfaces:** flat fills, no gradients; corners 18px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** grain. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Floating**. Elements hover and bob gently around a rest point, as if suspended in water or air.
- Enter `sine.out`, exit `sine.in`, move `sine.inOut`; durations 500 / 800 / 1200 / 1800 / 2600 ms; stagger 70 ms; hold at least 1500 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Anime / Cel-Shaded
- **Typography:** Rounded Sans
- **Color treatment:** Warm Palette, Muted
- **Texture:** Film Grain
- **Lighting:** Window Light, Blue Hour
- **Color grade:** Faded Warm Vintage
- **Composition / layout system:** Full Bleed, Negative-Space Composition
- **Format / purpose:** Loop, Music Visualizer
- **Motion language:** Floating
- **Pacing / rhythm:** Meditative
- **Transition language:** Crossfade, Dissolve
- **Shadow / depth cues:** Soft Diffuse Shadow
- **Shape language:** Rounded
- **Sound + motion relationship:** Music-Led, Ambient Sound

## Do's and Don'ts

- Do keep the accent (#f2a65a) for the single most important element in each frame.
- Do use M PLUS Rounded 1c large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not synthwave: no neon grid or chrome; the light is a warm lamp in a quiet room at dusk, grainy and soft.

## References

- Search: "lofi hip hop aesthetic animation"
- Search: "lofi study stream background"
- Search: "chillhop cover art style"
