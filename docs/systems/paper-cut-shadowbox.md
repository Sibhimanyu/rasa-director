---
name: "Paper-cut shadow box"
description: "Deep navy and ember cut-paper layers stacked in a shadow box, each casting a dark offset shadow; fibre texture and parallax planes."
colors:
  canvas: "#1c3654"        # page ground
  ink: "#fdf6ec"           # headlines and body text
  accent: "#f2a541"        # primary accent: the one thing that matters in each frame
  support: "#e4572e"       # supporting colour, used sparingly
  surface: "#2a4f78"       # raised cards and panels
  muted: "#a9bcd2"         # muted captions
typography:
  display:
    fontFamily: Bricolage Grotesque
    fontWeight: 800
  body:
    fontFamily: Manrope
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 24px
shadows:
  card: "7px 7px 0 #f2a541, 14px 14px 0 #fdf6ec"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Paper-cut shadow box

A motion-graphics design system from RasanAI's style library (3D & materials). Also known as layered paper-cut, shadow box art, papercraft diorama, cut-paper depth, 2.5D paper layers.

## Overview

Deep navy and ember cut-paper layers stacked in a shadow box, each casting a dark offset shadow; fibre texture and parallax planes.

It feels crafted, storybook, atmospheric. Use it for brand stories, nonprofits and heritage, holiday campaigns, narrative explainers.

## Visual language

- **Type:** Bricolage Grotesque (display, weight 800, tracking -0.03em) with Manrope for body text.
- **Surfaces:** off-white paper with visible fibre; corners 24px; outlines none.
- **Depth:** layered shadows (`7px 7px 0 #f2a541, 14px 14px 0 #fdf6ec`).
- **Texture:** paper. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Stop-Motion-Like**. Motion rendered at a reduced frame rate (12 fps, on twos) so objects jump between held poses like physical stop-motion or hand-drawn animation.
- Enter `steps(6)`, exit `steps(4)`, move `steps(12)`; durations 167 / 250 / 417 / 667 / 1000 ms; stagger 83 ms; hold at least 750 ms.
- Never: fade-up-slide, fade-slide, blur-in, opacity-only-entrance, bounce.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Paper Cutout, Handmade / Craft
- **Illustration style:** Paper Cut, 2.5D Layered Illustration
- **Depth / dimensionality:** Layered 2D
- **Material / surface language:** Paper, Cardboard
- **Shadow / depth cues:** Layered Shadows
- **Texture:** Paper Grain, Fibers
- **Camera language:** Parallax Camera, Push-In
- **Motion language:** Stop-Motion-Like
- **Transition language:** Parallax Transition, Foreground Wipe

## Do's and Don'ts

- Do keep the accent (#f2a541) for the single most important element in each frame.
- Do use Bricolage Grotesque large and confident; one idea per frame.
- Do keep every shadow the same layered style.
- Don't mix surface treatments; everything is paper.
- Don't confuse it: Not soft paper layers: shadow box is deep, dark and dramatic with many stacked planes, not pastel sheets taped down.

## References

- Search: "paper cut shadow box animation"
- Search: "layered paper 2.5D parallax"
- Search: "papercraft diorama motion"
