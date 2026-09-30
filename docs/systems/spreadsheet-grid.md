---
name: "Spreadsheet grid"
description: "Hairline grey cell grid on white, lettered column headers and numbered rows, a green selection outline, Calibri-style figures in tidy right-aligned cells."
colors:
  canvas: "#ffffff"        # page ground
  ink: "#1f1f1f"           # headlines and body text
  accent: "#107c41"        # primary accent: the one thing that matters in each frame
  support: "#ffe699"       # supporting colour, used sparingly
  surface: "#f3f3f3"       # raised cards and panels
  muted: "#616161"         # muted captions
typography:
  display:
    fontFamily: Carlito
    fontWeight: 700
  body:
    fontFamily: Carlito
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Spreadsheet grid

A motion-graphics design system from Rasa Director's style library (Interface). Also known as Excel look, spreadsheet UI, cell grid, worksheet style.

## Overview

Hairline grey cell grid on white, lettered column headers and numbered rows, a green selection outline, Calibri-style figures in tidy right-aligned cells.

It feels orderly, plain, trustworthy. Use it for finance and ops explainers, productivity launches, data-story openers.

## Visual language

- **Type:** Carlito (display, weight 700, tracking 0em) with Carlito for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 1px solid in #d4d4d4.
- **Depth:** no shadows.
- **Texture:** grid. **Icons:** none. **Decoration:** grid.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Corporate Flat, Technical Minimalism
- **Era / design-movement influence:** Modern SaaS Design
- **UI treatment:** Production-Faithful UI, Flat UI
- **Composition / layout system:** Swiss Grid
- **Information / data visualization:** Table, Ranking List
- **Color treatment:** Light UI, Accent-Color System
- **Typography:** Humanist Sans
- **Line / stroke language:** Hairline
- **Shadow / depth cues:** No Shadow
- **Motion language:** Precise
- **Transition language:** Hard Cut, Wipe

## Do's and Don'ts

- Do keep the accent (#107c41) for the single most important element in each frame.
- Do use Carlito large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a data dashboard: no charts or KPI cards; the grid of cells, headers and selection is the whole look.

## References

- Search: "spreadsheet animation motion graphic"
- Search: "excel grid aesthetic video"
- Search: "spreadsheet UI explainer"
