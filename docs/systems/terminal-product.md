---
name: "Terminal product demo"
description: "Pure-black stage, one crisp terminal window with a hairline border, monospace commands typing in, a single mint success glow."
colors:
  canvas: "#000000"        # page ground
  ink: "#ededed"           # headlines and body text
  accent: "#50e3c2"        # primary accent: the one thing that matters in each frame
  support: "#7928ca"       # supporting colour, used sparingly
  surface: "#0a0a0a"       # raised cards and panels
  muted: "#8f8f8f"         # muted captions
typography:
  display:
    fontFamily: Geist
    fontWeight: 700
  body:
    fontFamily: Geist Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 12px
shadows:
  card: "0 0 24px #50e3c2"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Terminal product demo

A motion-graphics design system from RasanAI's style library (Product & UI). Also known as CLI demo, Vercel style, Warp style dev tool.

## Overview

Pure-black stage, one crisp terminal window with a hairline border, monospace commands typing in, a single mint success glow.

It feels technical, fast, honest. Use it for CLI and SDK launches, developer platforms, infra changelogs.

## Visual language

- **Type:** Geist (display, weight 700, tracking -0.04em) with Geist Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 12px; outlines 1px solid in #333333.
- **Depth:** glow shadows (`0 0 24px #50e3c2`).
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: type.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism
- **UI treatment:** Terminal / Code UI, Windowed UI
- **UI interaction motion:** Typing, Keyboard Input, Success State, Streaming Text
- **Product demonstration language:** Input to Output
- **Typography:** Monospace, Neo-Grotesk
- **Color treatment:** Dark UI, Monochrome
- **Motion language:** Precise
- **Transition language:** Hard Cut, Mask Reveal

## Do's and Don'ts

- Do keep the accent (#50e3c2) for the single most important element in each frame.
- Do use Geist large and confident; one idea per frame.
- Do keep every shadow the same glow style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not financial terminal: sparse, modern and glowing, not a dense amber data screen.

## References

- Search: "terminal cli demo animation"
- Search: "vercel style launch video"
- Search: "developer tool typing animation"
