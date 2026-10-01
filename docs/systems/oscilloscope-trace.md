---
name: "Oscilloscope trace"
description: "A bench-scope screen: graticule grid on near-black, phosphor-green and yellow channel traces, centre cross and readouts in plain mono."
colors:
  canvas: "#08120d"        # page ground
  ink: "#d7efdc"           # headlines and body text
  accent: "#8ff0a8"        # primary accent: the one thing that matters in each frame
  support: "#f2d024"       # supporting colour, used sparingly
  surface: "#0e1a13"       # raised cards and panels
  muted: "#6f8a78"         # muted captions
typography:
  display:
    fontFamily: Share Tech Mono
    fontWeight: 400
  body:
    fontFamily: Share Tech Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 4px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Oscilloscope trace

A motion-graphics design system from RasanAI's style library (Science). Also known as scope trace, phosphor oscilloscope, waveform display, bench scope.

## Overview

A bench-scope screen: graticule grid on near-black, phosphor-green and yellow channel traces, centre cross and readouts in plain mono.

It feels technical, analog, focused. Use it for audio and hardware, signal and sensor tech, engineering explainers, music-tech launches.

## Visual language

- **Type:** Share Tech Mono (display, weight 400, tracking 0em) with Share Tech Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 4px; outlines 1px solid in #2c4a38.
- **Depth:** no shadows.
- **Texture:** grid. **Icons:** none. **Decoration:** crosshair.

## Motion

Motion language: **Linear**. Constant-speed interpolation from start to end with no acceleration or deceleration.
- Enter `none`, exit `none`, move `none`; durations 200 / 400 / 700 / 1000 / 1600 ms; stagger 100 ms; hold at least 800 ms.
- Never: fade-up-slide, bounce, overshoot, blur-in, scale-pop.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism, Monochrome
- **Information / data visualization:** Line Graph
- **UI treatment:** Retro UI
- **Color treatment:** Dark UI, Limited Palette
- **Typography:** Monospace
- **Lighting:** Screen Glow
- **Motion language:** Linear
- **Transition language:** Line-Draw Transition, Wipe
- **Emotional / brand tone:** Technical

## Do's and Don'ts

- Do keep the accent (#8ff0a8) for the single most important element in each frame.
- Do use Share Tech Mono large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a green-screen terminal: a measuring instrument with a graticule and two coloured waveforms, not lines of text.

## References

- Search: "oscilloscope animation"
- Search: "waveform motion graphics"
- Search: "scope trace style video"
