---
name: "Grime pirate TV"
description: "Early-2000s UK music-TV look: murky tower-block duotone, hi-vis orange tab, blocky condensed caps and a text-message shout-out ticker below."
colors:
  canvas: "#15171a"        # page ground
  ink: "#f4f4f0"           # headlines and body text
  accent: "#ff6a00"        # primary accent: the one thing that matters in each frame
  support: "#ffe600"       # supporting colour, used sparingly
  surface: "#f4f4f0"       # raised cards and panels
  muted: "#9a9a96"         # muted captions
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
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Grime pirate TV

A motion-graphics design system from Rasa Director's style library (Music & scene). Also known as Channel U look, pirate radio grime, UK grime DVD, SMS shout-out ticker.

## Overview

Early-2000s UK music-TV look: murky tower-block duotone, hi-vis orange tab, blocky condensed caps and a text-message shout-out ticker below.

It feels gritty, urgent, local. Use it for grime, drill and UK rap releases, youth culture docs, streetwear drops, radio and podcast promos.

## Visual language

- **Type:** Bebas Neue (display, weight 400, uppercase, tracking 0.01em) with Barlow Condensed for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** scanlines. **Icons:** glyph. **Decoration:** none.

## Motion

Motion language: **Glitchy**. Motion that simulates digital failure: horizontal slice offsets, RGB channel splits, flicker and frame skips.
- Enter `steps(5)`, exit `steps(3)`, move `steps(8)`; durations 60 / 100 / 160 / 250 / 400 ms; stagger 30 ms; hold at least 600 ms.
- Never: fade-up-slide, fade-slide, blur-in, bounce, overshoot, scale-pop.
- Preview entrance: glitch.

## The terms that define it

- **Visual style / art direction:** Grunge
- **Era / design-movement influence:** Y2K
- **Typography:** Condensed
- **Color treatment:** Dark UI, High Contrast
- **Texture:** VHS, Compression Artifacts
- **Color grade:** Video Tape Grade
- **VFX / compositing treatment:** RGB Split
- **Format / purpose:** Lower Thirds
- **Composition / layout system:** Full Bleed
- **Motion language:** Glitchy
- **Pacing / rhythm:** Rapid-Fire
- **Transition language:** Glitch Transition, Hard Cut
- **Shadow / depth cues:** No Shadow
- **Shape language:** Rectilinear
- **Sound + motion relationship:** Music-Led

## Do's and Don'ts

- Do keep the accent (#ff6a00) for the single most important element in each frame.
- Do use Bebas Neue large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a news broadcast: the TV is low-budget and pirate, with SMS shout-outs, signal noise and crew energy instead of polished headlines.

## References

- Search: "channel u grime aesthetic"
- Search: "pirate radio grime graphics"
- Search: "uk grime music video titles"
