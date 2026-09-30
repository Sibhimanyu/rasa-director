---
name: "Preschool TV"
description: "Big simple shapes in sunshine yellow, tomato and grass, fat rounded cards in a chunky phone, no outlines, slow happy bounces."
colors:
  canvas: "#ffd23f"        # page ground
  ink: "#2a1a00"           # headlines and body text
  accent: "#ff5436"        # primary accent: the one thing that matters in each frame
  support: "#3bb273"       # supporting colour, used sparingly
  surface: "#fffaf0"       # raised cards and panels
  muted: "#7a5a00"         # muted captions
typography:
  display:
    fontFamily: Sniglet
    fontWeight: 800
  body:
    fontFamily: Varela Round
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 44px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Preschool TV

A motion-graphics design system from Rasa Director's style library (Playful & pop). Also known as preschool graphics, toddler TV style, nursery bright, kids channel ident.

## Overview

Big simple shapes in sunshine yellow, tomato and grass, fat rounded cards in a chunky phone, no outlines, slow happy bounces.

It feels simple, sunny, safe, joyful. Use it for kids channels and apps, family brands, toy promos, parent-facing explainers.

## Visual language

- **Type:** Sniglet (display, weight 800, lowercase, tracking 0em) with Varela Round for body text.
- **Surfaces:** flat fills, no gradients; corners 44px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** blobs.

## Motion

Motion language: **Bouncy**. Objects fall or travel to a boundary and rebound off it in decaying hops, never passing through the target.
- Enter `bounce.out`, exit `back.in(1.7)`, move `bounce.out`; durations 100 / 200 / 350 / 600 / 900 ms; stagger 60 ms; hold at least 700 ms.
- Never: fade-up-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: bounce.

## The terms that define it

- **Visual style / art direction:** Childlike / Naive, Corporate Flat
- **Illustration style:** Flat Vector, Geometric Vector
- **Shape language:** Rounded, Circular
- **Color treatment:** Primary Colors, Warm Palette
- **Line / stroke language:** No Outlines
- **Typography:** Rounded Sans
- **Photo / video integration:** Device Mockup
- **Motion language:** Bouncy
- **Transition language:** Scale Transition, Slide

## Do's and Don'ts

- Do keep the accent (#ff5436) for the single most important element in each frame.
- Do use Sniglet large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not kawaii: preschool is bold primary simplicity for toddlers; kawaii is pastel cuteness for teens and adults.

## References

- Search: "preschool TV motion graphics"
- Search: "kids channel ident animation"
- Search: "toddler app animation bright"
