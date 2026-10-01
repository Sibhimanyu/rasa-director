---
name: "Media-player skin"
description: "Brushed gunmetal player chrome with a big green LCD readout, a green oscilloscope trace, bevelled transport buttons and scrolling pixel text."
colors:
  canvas: "#16161c"        # page ground
  ink: "#d8dce4"           # headlines and body text
  accent: "#22e022"        # primary accent: the one thing that matters in each frame
  support: "#f0b400"       # supporting colour, used sparingly
  surface: "#34363f"       # raised cards and panels
  muted: "#8b8f99"         # muted captions
typography:
  display:
    fontFamily: VT323
    fontWeight: 400
  body:
    fontFamily: Arimo
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 2px
shadows:
  card: "inset 0 5px 12px rgba(0,0,0,0.22)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Media-player skin

A motion-graphics design system from RasanAI's style library (Interface). Also known as Winamp-style skin, 2000s MP3 player, skinned player UI, oscilloscope visualiser.

## Overview

Brushed gunmetal player chrome with a big green LCD readout, a green oscilloscope trace, bevelled transport buttons and scrolling pixel text.

It feels nostalgic, tinkery, loud. Use it for music releases, audio app launches, early-2000s nostalgia.

## Visual language

- **Type:** VT323 (display, weight 400, uppercase, tracking 0.04em) with Arimo for body text.
- **Surfaces:** brushed/chrome metallic gradients; corners 2px; outlines 1px solid in #5a5d66.
- **Depth:** inset shadows (`inset 0 5px 12px rgba(0,0,0,0.22)`).
- **Texture:** noise. **Icons:** glyph. **Decoration:** none.

## Motion

Motion language: **Rhythmic**. Motion organized on a regular meter so entrances, pulses and holds repeat at fixed musical intervals, with or without a soundtrack.
- Enter `power3.out`, exit `power3.in`, move `sine.inOut`; durations 125 / 250 / 500 / 1000 / 2000 ms; stagger 125 ms; hold at least 1000 ms.
- Never: fade-up-slide, blur-in, linear-entrance, bounce.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Metallic, Y2K
- **Era / design-movement influence:** Y2K, Retro Operating Systems
- **UI treatment:** Skeuomorphic UI, Retro UI, Micro-UI
- **Material / surface language:** Brushed Metal
- **Color treatment:** Dark UI, Limited Palette
- **Typography:** Pixel Type
- **Information / data visualization:** Bar Chart
- **Shadow / depth cues:** Inner Shadow
- **Motion language:** Rhythmic
- **Transition language:** Hard Cut, Flash Transition

## Do's and Don'ts

- Do keep the accent (#22e022) for the single most important element in each frame.
- Do use VT323 large and confident; one idea per frame.
- Do keep every shadow the same inset style.
- Don't mix surface treatments; everything is metal.
- Don't confuse it: Not automotive HMI: small, dense, bevelled gunmetal chrome with a green LCD and pixel readouts, not calm cyan gauges.

## References

- Search: "winamp skin aesthetic"
- Search: "mp3 player UI animation"
- Search: "spectrum analyzer retro player"
