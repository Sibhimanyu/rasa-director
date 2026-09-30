---
name: "Hi-fi tuner dial"
description: "Silver-age stereo receiver: backlit blue-black dial glass, pale wide-cap scale numerals in MHz, an amber tuning needle resting on the station."
colors:
  canvas: "#0c1a26"        # page ground
  ink: "#dcecf2"           # headlines and body text
  accent: "#ffae1a"        # primary accent: the one thing that matters in each frame
  support: "#4fa6c4"       # supporting colour, used sparingly
  surface: "#13293a"       # raised cards and panels
  muted: "#7d98a8"         # muted captions
typography:
  display:
    fontFamily: Michroma
    fontWeight: 400
  body:
    fontFamily: Barlow
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 999px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Hi-fi tuner dial

A motion-graphics design system from Rasa Director's style library (Music & scene). Also known as 70s stereo receiver, FM tuning dial, silver-face receiver, analog radio scale.

## Overview

Silver-age stereo receiver: backlit blue-black dial glass, pale wide-cap scale numerals in MHz, an amber tuning needle resting on the station.

It feels warm, precise, nostalgic. Use it for radio and podcast promos, audio hardware launches, music-discovery apps, retro brand stories.

## Visual language

- **Type:** Michroma (display, weight 400, uppercase, tracking 0.02em) with Barlow for body text.
- **Surfaces:** flat fills, no gradients; corners fully rounded (pills); outlines 2px solid in ink.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Inertial**. Objects keep moving after the force that started them stops, gliding on a long decelerating tail until friction brings them to rest.
- Enter `expo.out`, exit `power3.in`, move `power3.out`; durations 300 / 500 / 800 / 1200 / 1700 ms; stagger 60 ms; hold at least 900 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, blur-in, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Retro-Futurism
- **Era / design-movement influence:** 1970s
- **Typography:** Extended
- **Material / surface language:** Glass, Brushed Metal
- **Lighting:** Screen Glow
- **Color treatment:** Dark UI, Warm Palette
- **Composition / layout system:** Timeline
- **Information / data visualization:** Timeline
- **Iconography:** Technical Icons
- **Motion language:** Inertial
- **Pacing / rhythm:** Continuous
- **Transition language:** Slide, Push
- **Shadow / depth cues:** Soft Diffuse Shadow
- **Shape language:** Technical, Circular
- **Sound + motion relationship:** Music-Led

## Do's and Don'ts

- Do keep the accent (#ffae1a) for the single most important element in each frame.
- Do use Michroma large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a roadmap timeline: the axis is a tuning scale in MHz with an amber needle on dark dial glass, not milestones on paper.

## References

- Search: "vintage stereo receiver dial"
- Search: "fm radio dial animation"
- Search: "70s hi-fi design motion graphics"
