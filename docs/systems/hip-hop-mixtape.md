---
name: "Hip-hop mixtape cover"
description: "Late-90s Pen & Pixel mixtape art: a giant extruded gold volume number with a glint, oxblood-to-black background, chrome panel and loud caps."
colors:
  canvas: "#1a0606"        # page ground
  ink: "#fff4d6"           # headlines and body text
  accent: "#f5b82e"        # primary accent: the one thing that matters in each frame
  support: "#c1121f"       # supporting colour, used sparingly
  surface: "#3a0d0d"       # raised cards and panels
  muted: "#c9a36a"         # muted captions
typography:
  display:
    fontFamily: Titan One
    fontWeight: 400
  body:
    fontFamily: Archivo
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 6px
shadows:
  card: "10px 10px 0 #fff4d6"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px solid {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Hip-hop mixtape cover

A motion-graphics design system from RasanAI's style library (Music & scene). Also known as Pen & Pixel, No Limit era cover, bling mixtape, Dirty South CD art.

## Overview

Late-90s Pen & Pixel mixtape art: a giant extruded gold volume number with a glint, oxblood-to-black background, chrome panel and loud caps.

It feels flashy, loud, triumphant. Use it for hip-hop and rap releases, mixtape and single drops, nightlife promos, meme-literate social ads.

## Visual language

- **Type:** Titan One (display, weight 400, uppercase, tracking 0em) with Archivo for body text.
- **Surfaces:** brushed/chrome metallic gradients; corners 6px; outlines 3px solid in accent.
- **Depth:** hard shadows (`10px 10px 0 #fff4d6`).
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Heavy**. Motion that communicates large mass: slow to start, accelerating under gravity, landing with impact and minimal rebound.
- Enter `power4.in`, exit `power3.in`, move `power3.inOut`; durations 120 / 250 / 450 / 800 / 1200 ms; stagger 120 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, blur-in, opacity-only-entrance.
- Preview entrance: pop.

## The terms that define it

- **Visual style / art direction:** Metallic, Chrome
- **Era / design-movement influence:** 1990s
- **Typography:** Extruded 3D Type, Chrome Type
- **Material / surface language:** Chrome
- **Color treatment:** High Saturation, Warm Palette
- **Composition / layout system:** Single-Object Hero, Typography-Led Composition
- **Motion language:** Heavy
- **Pacing / rhythm:** Beat-Driven
- **Transition language:** Flash Transition, Zoom Transition
- **Shadow / depth cues:** Hard Shadow
- **Shape language:** Rounded
- **Sound + motion relationship:** Music-Led, Impacts

## Do's and Don'ts

- Do keep the accent (#f5b82e) for the single most important element in each frame.
- Do use Titan One large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't mix surface treatments; everything is metal.
- Don't confuse it: Not Y2K chrome: the metal is gold and gaudy around a volume number, pure bling, not cool silver sci-fi blobs.

## References

- Search: "pen and pixel mixtape cover"
- Search: "90s rap cd cover design"
- Search: "bling gold chrome text animation"
