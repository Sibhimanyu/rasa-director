---
name: "Business-news ticker"
description: "Dusk skyline footage, a dark navy lower third in condensed sans, blue Markets tab, green movers chip and a monospaced price crawl."
colors:
  canvas: "#06121f"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#1f7ae0"        # primary accent: the one thing that matters in each frame
  support: "#00c774"       # supporting colour, used sparingly
  surface: "#0c2744"       # raised cards and panels
  muted: "#8fa6bf"         # muted captions
typography:
  display:
    fontFamily: IBM Plex Sans Condensed
    fontWeight: 600
  body:
    fontFamily: IBM Plex Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 2px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Business-news ticker

A motion-graphics design system from Rasa Director's style library (Broadcast). Also known as markets TV graphics, Bloomberg TV look, CNBC style, stock ticker lower third.

## Overview

Dusk skyline footage, a dark navy lower third in condensed sans, blue Markets tab, green movers chip and a monospaced price crawl.

It feels professional, fast-moving, credible. Use it for finance and fintech, earnings and results, investor updates, B2B announcements.

## Visual language

- **Type:** IBM Plex Sans Condensed (display, weight 600, tracking -0.01em) with IBM Plex Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 2px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Linear**. Constant-speed interpolation from start to end with no acceleration or deceleration.
- Enter `none`, exit `none`, move `none`; durations 200 / 400 / 700 / 1000 / 1600 ms; stagger 100 ms; hold at least 800 ms.
- Never: fade-up-slide, bounce, overshoot, blur-in, scale-pop.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism
- **Format / purpose:** News Graphics, Lower Thirds
- **Information / data visualization:** Number Counter, Status Indicator
- **Photo / video integration:** Full-Bleed Footage
- **Typography:** Condensed, Monospace
- **Color treatment:** Dark UI, Accent-Color System
- **Motion language:** Linear
- **Pacing / rhythm:** Continuous
- **Transition language:** Push, Slide
- **Emotional / brand tone:** Professional, Trustworthy

## Do's and Don'ts

- Do keep the accent (#1f7ae0) for the single most important element in each frame.
- Do use IBM Plex Sans Condensed large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a financial terminal: broadcast overlays over footage with a scrolling price crawl, not an amber screen of dense tables.

## References

- Search: "business news ticker graphics"
- Search: "stock market ticker lower third"
- Search: "financial news broadcast package"
