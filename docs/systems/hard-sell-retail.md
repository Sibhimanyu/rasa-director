---
name: "Hard-sell retail"
description: "Fire-engine red and sale yellow, huge condensed prices and percentages, starburst stickers and hard shadows like a weekend sale flyer."
colors:
  canvas: "#d90a0a"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#ffe600"        # primary accent: the one thing that matters in each frame
  support: "#ffffff"       # supporting colour, used sparingly
  surface: "#b00000"       # raised cards and panels
  muted: "#ffc2c2"         # muted captions
typography:
  display:
    fontFamily: Passion One
    fontWeight: 700
  body:
    fontFamily: Barlow Condensed
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 8px
shadows:
  card: "10px 10px 0 #ffffff"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Hard-sell retail

A motion-graphics design system from Rasa Director's style library (Bold & graphic). Also known as sale flyer, bargain tabloid, supermarket promo, price-shout graphics.

## Overview

Fire-engine red and sale yellow, huge condensed prices and percentages, starburst stickers and hard shadows like a weekend sale flyer.

It feels urgent, loud, value-driven, unpretentious. Use it for sales and promotions, e-commerce ads, Black Friday campaigns, pricing announcements.

## Visual language

- **Type:** Passion One (display, weight 700, uppercase, tracking 0.01em) with Barlow Condensed for body text.
- **Surfaces:** flat fills, no gradients; corners 8px; outlines none.
- **Depth:** hard shadows (`10px 10px 0 #ffffff`).
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** rays.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Pop Art, Screen Print
- **Color treatment:** High Saturation, Warm Palette
- **Typography:** Condensed, Display Typography
- **Information / data visualization:** Number Counter, Statistic Callout
- **Shadow / depth cues:** Hard Shadow
- **Composition / layout system:** Typography-Led Composition, Centered Hero Composition
- **Format / purpose:** Social Advertisement, Announcement Animation
- **Motion language:** Snappy
- **Transition language:** Flash Transition, Zoom Transition

## Do's and Don'ts

- Do keep the accent (#ffe600) for the single most important element in each frame.
- Do use Passion One large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not pop art: nothing is ironic or gallery-like; it is pure promotional urgency built around the number.

## References

- Search: "sale promo motion graphics"
- Search: "price drop animation retail"
- Search: "Black Friday ad animation bold"
