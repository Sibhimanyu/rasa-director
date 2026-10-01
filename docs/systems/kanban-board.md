---
name: "Kanban board"
description: "White task cards with coloured label chips and checklists stacked in lanes on a saturated blue board, cards dragged from lane to lane."
colors:
  canvas: "#0067a3"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#61bd4f"        # primary accent: the one thing that matters in each frame
  support: "#f2d600"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#cfe3f2"         # muted captions
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontWeight: 800
  body:
    fontFamily: Plus Jakarta Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 8px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Kanban board

A motion-graphics design system from RasanAI's style library (Interface). Also known as task board, card wall, sprint board, Trello-style board.

## Overview

White task cards with coloured label chips and checklists stacked in lanes on a saturated blue board, cards dragged from lane to lane.

It feels organised, busy, collaborative. Use it for project-management launches, team workflow explainers, roadmap updates.

## Visual language

- **Type:** Plus Jakarta Sans (display, weight 800, tracking -0.02em) with Plus Jakarta Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 8px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Corporate Flat, Startup / SaaS Minimalism
- **Era / design-movement influence:** Modern SaaS Design
- **UI treatment:** Production-Faithful UI, Floating-Card UI
- **Composition / layout system:** Stacked Cards, Modular Grid
- **Information / data visualization:** Status Indicator
- **Color treatment:** High Saturation, Light UI
- **Typography:** Neutral Sans Serif
- **Shadow / depth cues:** Soft Diffuse Shadow
- **Motion language:** Snappy
- **Transition language:** Slide, Push
- **UI interaction motion:** Drag, Drop, Checkbox

## Do's and Don'ts

- Do keep the accent (#61bd4f) for the single most important element in each frame.
- Do use Plus Jakarta Sans large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not bento: cards are equal-width task tickets in lanes with label chips, not a modular grid of feature tiles.

## References

- Search: "kanban board animation"
- Search: "task board motion graphic"
- Search: "trello style cards animation"
