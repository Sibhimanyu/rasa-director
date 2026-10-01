---
name: "Fintech trust"
description: "Brushed-metal card surfaces over warm stone, deep navy serif headlines, one money-green accent; calm, weighty, nothing flashy."
colors:
  canvas: "#f3f1ec"        # page ground
  ink: "#10213a"           # headlines and body text
  accent: "#0f7b5f"        # primary accent: the one thing that matters in each frame
  support: "#c8a45c"       # supporting colour, used sparingly
  surface: "#d9dde3"       # raised cards and panels
  muted: "#5d6675"         # muted captions
typography:
  display:
    fontFamily: Newsreader
    fontWeight: 500
  body:
    fontFamily: Inter
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 18px
shadows:
  card: "0 40px 70px -16px rgba(0,0,0,0.3)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Fintech trust

A motion-graphics design system from RasanAI's style library (Product & UI). Also known as neobank style, Mercury style, premium banking UI.

## Overview

Brushed-metal card surfaces over warm stone, deep navy serif headlines, one money-green accent; calm, weighty, nothing flashy.

It feels trustworthy, premium, calm. Use it for banking and payments, wealth apps, B2B finance launches.

## Visual language

- **Type:** Newsreader (display, weight 500, tracking -0.02em) with Inter for body text.
- **Surfaces:** brushed/chrome metallic gradients; corners 18px; outlines none.
- **Depth:** float shadows (`0 40px 70px -16px rgba(0,0,0,0.3)`).
- **Texture:** grain. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Luxurious / Slow**. Very slow, circular deceleration, long holds and stillness, where restraint itself is the signal of value.
- Enter `circ.out`, exit `circ.in`, move `power1.inOut`; durations 600 / 900 / 1400 / 2000 / 2800 ms; stagger 200 ms; hold at least 1800 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, linear-entrance, blur-in.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Clean Minimalism, Metallic
- **UI treatment:** Floating-Card UI, Simplified UI
- **Material / surface language:** Brushed Metal
- **Information / data visualization:** Number Counter, Progress Bar
- **Typography:** Editorial Serif, Neo-Grotesk
- **Color treatment:** Muted, Limited Palette
- **Emotional / brand tone:** Trustworthy, Premium
- **Motion language:** Luxurious / Slow
- **Transition language:** Crossfade, Card Flip

## Do's and Don'ts

- Do keep the accent (#0f7b5f) for the single most important element in each frame.
- Do use Newsreader large and confident; one idea per frame.
- Do keep every shadow the same float style.
- Don't mix surface treatments; everything is metal.
- Don't confuse it: Not luxury: it still shows real balances and cards; restraint serves trust, not status.

## References

- Search: "fintech app animation"
- Search: "neobank card reveal motion"
- Search: "premium banking ui video"
