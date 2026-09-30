---
name: "Phone messaging thread"
description: "Bright blue sent bubbles and light grey received bubbles on white, tailed corners, a slim header with avatar, delivery receipts and a typing indicator."
colors:
  canvas: "#ffffff"        # page ground
  ink: "#111111"           # headlines and body text
  accent: "#0a84ff"        # primary accent: the one thing that matters in each frame
  support: "#34c759"       # supporting colour, used sparingly
  surface: "#e9e9eb"       # raised cards and panels
  muted: "#8a8a8e"         # muted captions
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
  md: 22px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Phone messaging thread

A motion-graphics design system from Rasa Director's style library (Interface). Also known as text message UI, iMessage-style bubbles, SMS conversation, chat bubbles.

## Overview

Bright blue sent bubbles and light grey received bubbles on white, tailed corners, a slim header with avatar, delivery receipts and a typing indicator.

It feels personal, immediate, familiar. Use it for social ads, consumer app stories, dialogue-led explainers.

## Visual language

- **Type:** Figtree (display, weight 700, tracking -0.02em) with Figtree for body text.
- **Surfaces:** flat fills, no gradients; corners 22px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Springy**. Motion that behaves like a damped physical spring: fast attack, one visible overshoot, then a quick settle.
- Enter `back.out(1.7)`, exit `power3.in`, move `elastic.out(1,0.75)`; durations 180 / 300 / 480 / 720 / 1100 ms; stagger 40 ms; hold at least 650 ms.
- Never: fade-up-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: spring.

## The terms that define it

- **Visual style / art direction:** Clean Minimalism
- **Era / design-movement influence:** Modern SaaS Design
- **UI treatment:** Chat UI, Production-Faithful UI, Device-Bound UI
- **Composition / layout system:** Phone Composition
- **Color treatment:** Light UI, Accent-Color System
- **Typography:** Neutral Sans Serif
- **Shape language:** Rounded
- **Shadow / depth cues:** No Shadow
- **Motion language:** Springy
- **Transition language:** Push, Scale Transition
- **UI interaction motion:** Typing, Notification

## Do's and Don'ts

- Do keep the accent (#0a84ff) for the single most important element in each frame.
- Do use Figtree large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not AI chat product: no prompt bar or sparkles; a person-to-person thread in blue and grey bubbles.

## References

- Search: "text message animation"
- Search: "imessage bubble motion graphic"
- Search: "chat conversation video template"
