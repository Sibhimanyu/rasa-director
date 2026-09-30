---
name: "Tactical HUD"
description: "Night-vision green reticles, range ladders and dashed bracket frames over near-black; blocky caps and numbers that snap between readings."
colors:
  canvas: "#040b06"        # page ground
  ink: "#dcffd6"           # headlines and body text
  accent: "#8cff66"        # primary accent: the one thing that matters in each frame
  support: "#ff5c38"       # supporting colour, used sparingly
  surface: "#0a1a0e"       # raised cards and panels
  muted: "#6f9a66"         # muted captions
typography:
  display:
    fontFamily: Rajdhani
    fontWeight: 700
  body:
    fontFamily: Rajdhani
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px dashed {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Tactical HUD

A motion-graphics design system from Rasa Director's style library (Futuristic & tech). Also known as military HUD, night-vision overlay, targeting HUD, drone feed UI, aviation HUD.

## Overview

Night-vision green reticles, range ladders and dashed bracket frames over near-black; blocky caps and numbers that snap between readings.

It feels tense, precise, operational. Use it for defense and drone tech, security and surveillance, game trailers, thriller openers.

## Visual language

- **Type:** Rajdhani (display, weight 700, uppercase, tracking 0.1em) with Rajdhani for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 1px dashed in accent.
- **Depth:** no shadows.
- **Texture:** noise. **Icons:** glyph. **Decoration:** grid.

## Motion

Motion language: **Robotic**. Sequenced, one-thing-at-a-time motion like a servo or robot arm: quick accelerate-decelerate moves separated by dead stops.
- Enter `power3.inOut`, exit `power3.in`, move `power3.inOut`; durations 120 / 200 / 300 / 450 / 700 ms; stagger 150 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Sci-Fi / HUD, Technical Minimalism
- **UI treatment:** Futuristic UI / FUI, In-Context UI
- **Color treatment:** Monochrome, Dark UI
- **Line / stroke language:** Technical, Hairline
- **VFX / compositing treatment:** Noise, Glow
- **Typography:** Condensed, Monospace
- **Iconography:** Technical Icons
- **Motion language:** Robotic
- **Transition language:** Hard Cut, Flash Transition
- **Emotional / brand tone:** Serious, Technical

## Do's and Don'ts

- Do keep the accent (#8cff66) for the single most important element in each frame.
- Do use Rajdhani large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not cinematic FUI: tactical HUDs are sparse, green and functional, built for a gunsight or drone feed, not a hero's glass screen.

## References

- Search: "tactical HUD overlay animation"
- Search: "night vision drone feed motion graphics"
- Search: "military targeting UI design"
