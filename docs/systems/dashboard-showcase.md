---
name: "Dashboard showcase"
description: "A clean light analytics view: one hero line chart in a white panel, a big KPI number, faint grid, calm blue-and-green series."
colors:
  canvas: "#f7f9fb"        # page ground
  ink: "#0f172a"           # headlines and body text
  accent: "#2563eb"        # primary accent: the one thing that matters in each frame
  support: "#10b981"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#64748b"         # muted captions
typography:
  display:
    fontFamily: Figtree
    fontWeight: 700
  body:
    fontFamily: Figtree
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 14px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Dashboard showcase

A motion-graphics design system from Rasa Director's style library (Product & UI). Also known as analytics hero, KPI dashboard reveal, reporting UI.

## Overview

A clean light analytics view: one hero line chart in a white panel, a big KPI number, faint grid, calm blue-and-green series.

It feels credible, clear, data-driven. Use it for analytics products, investor updates, reporting feature reveals.

## Visual language

- **Type:** Figtree (display, weight 700, tracking -0.03em) with Figtree for body text.
- **Surfaces:** flat fills, no gradients; corners 14px; outlines 1px solid in #e2e8f0.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** grid. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Clean Minimalism
- **UI treatment:** Dashboard UI, Simplified UI
- **Information / data visualization:** Line Graph, Number Counter, Dashboard
- **Composition / layout system:** UI-Led Composition
- **Color treatment:** Light UI, Cool Palette
- **Motion function:** Show Data Change
- **Motion language:** Smooth
- **Transition language:** Line-Draw Transition, Crossfade

## Do's and Don'ts

- Do keep the accent (#2563eb) for the single most important element in each frame.
- Do use Figtree large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not dark ops dashboard: bright product-marketing polish with one hero chart, not a dense wall of metrics.

## References

- Search: "saas dashboard animation"
- Search: "analytics ui motion"
- Search: "kpi dashboard reveal"
