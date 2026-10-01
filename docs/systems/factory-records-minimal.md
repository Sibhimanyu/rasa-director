---
name: "Factory Records minimal"
description: "Peter Saville restraint: a near-black field, faint plotted contour lines, one quiet lower-case line of geometric type and nothing else."
colors:
  canvas: "#111111"        # page ground
  ink: "#e6e3dc"           # headlines and body text
  accent: "#9a9a94"        # primary accent: the one thing that matters in each frame
  support: "#d8412f"       # supporting colour, used sparingly
  surface: "#1b1b1b"       # raised cards and panels
  muted: "#8a8a84"         # muted captions
typography:
  display:
    fontFamily: Jost
    fontWeight: 300
  body:
    fontFamily: IBM Plex Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Factory Records minimal

A motion-graphics design system from RasanAI's style library (Music & scene). Also known as Peter Saville, post-punk sleeve, Manchester minimal, Unknown Pleasures lines.

## Overview

Peter Saville restraint: a near-black field, faint plotted contour lines, one quiet lower-case line of geometric type and nothing else.

It feels austere, enigmatic, cool. Use it for album and single announcements, gallery and museum idents, fashion teasers, music documentaries.

## Visual language

- **Type:** Jost (display, weight 300, lowercase, tracking 0.02em) with IBM Plex Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** none. **Decoration:** contours.

## Motion

Motion language: **Cinematic**. Film-grammar motion: slow push-ins, focus pulls, long eased camera moves and breathing holds under which the frame never fully stops.
- Enter `power2.out`, exit `power2.inOut`, move `sine.inOut`; durations 400 / 700 / 1100 / 1600 / 2400 ms; stagger 160 ms; hold at least 1400 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Extreme Minimalism
- **Era / design-movement influence:** 1980s
- **Typography:** Geometric Sans
- **Color treatment:** Monochrome, Low Contrast
- **Composition / layout system:** Negative-Space Composition, Centered Hero Composition
- **Motion language:** Cinematic
- **Pacing / rhythm:** Pause-Heavy
- **Transition language:** Fade, Hard Cut
- **Shadow / depth cues:** No Shadow
- **Shape language:** Geometric
- **Emotional / brand tone:** Mysterious, Intellectual

## Do's and Don'ts

- Do keep the accent (#9a9a94) for the single most important element in each frame.
- Do use Jost large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not extreme-minimal product design: the emptiness is moody and archival, cold black with plotted data lines, not clean white UI space.

## References

- Search: "peter saville factory records design"
- Search: "unknown pleasures style animation"
- Search: "post punk minimal album cover"
