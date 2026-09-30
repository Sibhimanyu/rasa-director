---
name: "Bollywood hand-painted poster"
description: "Painted film hoarding: bevelled saffron-extruded title lettering on a hot magenta-to-marigold painted panel, deep teal night, glitter stars, darkened edges."
colors:
  canvas: "#11363d"        # page ground
  ink: "#fff3d1"           # headlines and body text
  accent: "#ff9f1c"        # primary accent: the one thing that matters in each frame
  support: "#e0218a"       # supporting colour, used sparingly
  surface: "#b0165e"       # raised cards and panels
  muted: "#f2c6a0"         # muted captions
typography:
  display:
    fontFamily: Rozha One
    fontWeight: 400
  body:
    fontFamily: Poppins
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 24px
shadows:
  card: "18px 18px 0 #fff3d1"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "4px solid {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Bollywood hand-painted poster

A motion-graphics design system from Rasa Director's style library (Music & scene). Also known as Bollywood poster art, hand-painted film hoarding, 70s Hindi film poster, filmi title art.

## Overview

Painted film hoarding: bevelled saffron-extruded title lettering on a hot magenta-to-marigold painted panel, deep teal night, glitter stars, darkened edges.

It feels dramatic, exuberant, nostalgic. Use it for film and music launches, Diwali and festival campaigns, South Asian brand spots, retro social ads.

## Visual language

- **Type:** Rozha One (display, weight 400, tracking 0em) with Poppins for body text.
- **Surfaces:** soft gradient washes from the surface toward the accent; corners 24px; outlines 4px solid in accent.
- **Depth:** long shadows (`18px 18px 0 #fff3d1`).
- **Texture:** grain. **Icons:** filled. **Decoration:** stars.

## Motion

Motion language: **Cinematic**. Film-grammar motion: slow push-ins, focus pulls, long eased camera moves and breathing holds under which the frame never fully stops.
- Enter `power2.out`, exit `power2.inOut`, move `sine.inOut`; durations 400 / 700 / 1100 / 1600 / 2400 ms; stagger 160 ms; hold at least 1400 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: pop.

## The terms that define it

- **Visual style / art direction:** Handmade / Craft, Pop Art
- **Illustration style:** Brush Illustration
- **Typography:** Extruded 3D Type, Display Typography
- **Color treatment:** High Saturation, Warm Palette
- **Texture:** Paint
- **Era / design-movement influence:** 1970s
- **Composition / layout system:** Centered Hero Composition, Poster Composition
- **Camera language:** Push-In
- **Motion language:** Cinematic
- **Pacing / rhythm:** Montage
- **Transition language:** Zoom Transition, Flash Transition
- **Shadow / depth cues:** Long Shadow
- **Shape language:** Soft
- **Emotional / brand tone:** Dramatic, Playful

## Do's and Don'ts

- Do keep the accent (#ff9f1c) for the single most important element in each frame.
- Do use Rozha One large and confident; one idea per frame.
- Do keep every shadow the same long style.
- Don't mix surface treatments; everything is gradient.
- Don't confuse it: Not seventies groovy: the lettering is bevelled and extruded like a painted hoarding, in magenta, saffron and teal, not brown and orange.

## References

- Search: "bollywood hand painted poster"
- Search: "vintage hindi film title design"
- Search: "bollywood retro title animation"
