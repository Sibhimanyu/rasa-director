---
name: "Cassette J-card"
description: "A home-dubbed tape inlay: white card, felt-marker title, a typed track list on dashed write-in lines, durations in the margin, red and blue ink."
colors:
  canvas: "#f4f4f1"        # page ground
  ink: "#1d1d1f"           # headlines and body text
  accent: "#d7262e"        # primary accent: the one thing that matters in each frame
  support: "#1f5fae"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#6e6e73"         # muted captions
typography:
  display:
    fontFamily: Permanent Marker
    fontWeight: 400
  body:
    fontFamily: Courier Prime
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px dashed {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Cassette J-card

A motion-graphics design system from RasanAI's style library (Music & scene). Also known as mixtape J-card, tape inlay, cassette insert, home-dubbed mixtape.

## Overview

A home-dubbed tape inlay: white card, felt-marker title, a typed track list on dashed write-in lines, durations in the margin, red and blue ink.

It feels personal, nostalgic, handmade. Use it for playlists and podcast episodes, music releases, personal-story films, retro product teasers.

## Visual language

- **Type:** Permanent Marker (display, weight 400, tracking 0em) with Courier Prime for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 2px dashed in ink.
- **Depth:** no shadows.
- **Texture:** paper. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Handmade / Imperfect**. Deliberately imperfect motion with frame-to-frame jitter (line boil), uneven spacing and slightly irregular timing, as if drawn by hand.
- Enter `power2.out`, exit `power2.in`, move `steps(3)`; durations 160 / 280 / 450 / 700 / 1000 ms; stagger 90 ms; hold at least 800 ms.
- Never: fade-up-slide, blur-in, linear-entrance, opacity-only-entrance.
- Preview entrance: type.

## The terms that define it

- **Visual style / art direction:** Handmade / Craft
- **Typography:** Handwritten / Script, Monospace
- **Line / stroke language:** Marker
- **Material / surface language:** Paper
- **Era / design-movement influence:** 1980s
- **Color treatment:** Limited Palette, Light UI
- **Composition / layout system:** Asymmetric Composition, Typography-Led Composition
- **Information / data visualization:** Ranking List
- **Motion language:** Handmade / Imperfect
- **Pacing / rhythm:** Medium Explanatory
- **Transition language:** Slide, Wipe
- **Shadow / depth cues:** No Shadow
- **Shape language:** Rectilinear
- **Emotional / brand tone:** Human, Nostalgic

## Do's and Don'ts

- Do keep the accent (#d7262e) for the single most important element in each frame.
- Do use Permanent Marker large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not the bullet journal: the page is a cassette inlay, a track list with sides and durations, not a planner or a notebook.

## References

- Search: "cassette j card design"
- Search: "mixtape tracklist animation"
- Search: "cassette inlay handwritten"
