---
name: "Home-shopping channel"
description: "A giant red price on white with a sunburst behind, navy caption rule, yellow offset panels and everything popping in with a bounce."
colors:
  canvas: "#ffffff"        # page ground
  ink: "#0d1b4c"           # headlines and body text
  accent: "#e3001b"        # primary accent: the one thing that matters in each frame
  support: "#ffd400"       # supporting colour, used sparingly
  surface: "#eef3ff"       # raised cards and panels
  muted: "#51607f"         # muted captions
typography:
  display:
    fontFamily: Fjalla One
    fontWeight: 400
  body:
    fontFamily: Barlow
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 12px
shadows:
  card: "10px 10px 0 #0d1b4c"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Home-shopping channel

A motion-graphics design system from Rasa Director's style library (Broadcast). Also known as shopping TV graphics, teleshopping, QVC style, call now price graphic.

## Overview

A giant red price on white with a sunburst behind, navy caption rule, yellow offset panels and everything popping in with a bounce.

It feels eager, urgent, cheerful. Use it for sales and offers, e-commerce drops, retail promos, limited-time announcements.

## Visual language

- **Type:** Fjalla One (display, weight 400, uppercase, tracking -0.01em) with Barlow for body text.
- **Surfaces:** flat fills, no gradients; corners 12px; outlines 3px solid in ink.
- **Depth:** hard shadows (`10px 10px 0 #0d1b4c`).
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** rays.

## Motion

Motion language: **Bouncy**. Objects fall or travel to a boundary and rebound off it in decaying hops, never passing through the target.
- Enter `bounce.out`, exit `back.in(1.7)`, move `bounce.out`; durations 100 / 200 / 350 / 600 / 900 ms; stagger 60 ms; hold at least 700 ms.
- Never: fade-up-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: bounce.

## The terms that define it

- **Visual style / art direction:** Pop Art
- **Format / purpose:** Broadcast Package, Social Advertisement
- **Information / data visualization:** Number Counter, Statistic Callout
- **Typography:** Condensed, Display Typography
- **Color treatment:** Primary Colors, High Saturation
- **Motion function:** Direct Attention, Emphasize
- **Motion language:** Bouncy
- **Pacing / rhythm:** Fast
- **Transition language:** Scale Transition, Flash Transition
- **Emotional / brand tone:** Energetic, Urgent

## Do's and Don'ts

- Do keep the accent (#e3001b) for the single most important element in each frame.
- Do use Fjalla One large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not hard-sell retail: a clean white TV set with one giant price and a sales trend, not a red sale flyer covered in stickers.

## References

- Search: "home shopping channel graphics"
- Search: "teleshopping price animation"
- Search: "call now price reveal motion"
