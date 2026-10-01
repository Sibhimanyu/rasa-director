---
name: "Broadcast news package"
description: "Deep navy studio gradients, breaking-news red bars, globe orbits, clean sans headlines and panels that slide in with authority."
colors:
  canvas: "#0c1a2b"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#d0021b"        # primary accent: the one thing that matters in each frame
  support: "#2d7fd3"       # supporting colour, used sparingly
  surface: "#15314f"       # raised cards and panels
  muted: "#9db1c7"         # muted captions
typography:
  display:
    fontFamily: Roboto Condensed
    fontWeight: 700
  body:
    fontFamily: Roboto
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 2px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Broadcast news package

A motion-graphics design system from RasanAI's style library (Cinematic & atmospheric). Also known as news graphics, breaking news, news lower thirds, 24-hour news look.

## Overview

Deep navy studio gradients, breaking-news red bars, globe orbits, clean sans headlines and panels that slide in with authority.

It feels authoritative, urgent, trustworthy. Use it for news graphics, announcements, PR videos, earnings and updates.

## Visual language

- **Type:** Roboto Condensed (display, weight 700, tracking -0.01em) with Roboto for body text.
- **Surfaces:** brushed/chrome metallic gradients; corners 2px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** orbits.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Corporate Flat, Cinematic
- **Format / purpose:** News Graphics, Broadcast Package
- **Typography:** Neutral Sans Serif, Condensed
- **Composition / layout system:** Floating Cards, Layered Depth
- **Color treatment:** Cool Palette, Accent-Color System
- **VFX / compositing treatment:** Light Streaks, Reflections
- **Motion language:** Precise
- **Transition language:** Push, Light Wipe
- **Emotional / brand tone:** Serious, Urgent

## Do's and Don'ts

- Do keep the accent (#d0021b) for the single most important element in each frame.
- Do use Roboto Condensed large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't mix surface treatments; everything is metal.
- Don't confuse it: Not documentary graphics: branded bars, tickers and gradients announce themselves; nothing is understated.

## References

- Search: "news broadcast graphics package"
- Search: "breaking news motion graphics"
- Search: "news lower third animation"
