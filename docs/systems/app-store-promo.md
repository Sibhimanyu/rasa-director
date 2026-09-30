---
name: "App Store promo"
description: "A phone floats on a warm peach field, glossy 3D icons and rating stickers pop around it, each screen springing into place."
colors:
  canvas: "#ffe9dc"        # page ground
  ink: "#2a1a14"           # headlines and body text
  accent: "#ff6b4a"        # primary accent: the one thing that matters in each frame
  support: "#8b5cf6"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#8a6b5f"         # muted captions
typography:
  display:
    fontFamily: Outfit
    fontWeight: 800
  body:
    fontFamily: Outfit
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 24px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# App Store promo

A motion-graphics design system from Rasa Director's style library (Product & UI). Also known as device-bound mobile, phone mockup promo, app preview video.

## Overview

A phone floats on a warm peach field, glossy 3D icons and rating stickers pop around it, each screen springing into place.

It feels friendly, upbeat, consumer. Use it for App Store previews, consumer app launches, social ads.

## Visual language

- **Type:** Outfit (display, weight 800, tracking -0.03em) with Outfit for body text.
- **Surfaces:** flat fills, no gradients; corners 24px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** emoji3d. **Decoration:** stickers.

## Motion

Motion language: **Springy**. Motion that behaves like a damped physical spring: fast attack, one visible overshoot, then a quick settle.
- Enter `back.out(1.7)`, exit `power3.in`, move `elastic.out(1,0.75)`; durations 180 / 300 / 480 / 720 / 1100 ms; stagger 40 ms; hold at least 650 ms.
- Never: fade-up-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: spring.

## The terms that define it

- **Visual style / art direction:** Playful Tech, Soft 3D
- **UI treatment:** Device-Bound UI, Simplified UI
- **Photo / video integration:** Device Mockup
- **Composition / layout system:** Phone Composition
- **Iconography:** 3D Icons
- **UI interaction motion:** Swipe, Toast
- **Format / purpose:** App-Store Promotional Animation
- **Motion language:** Springy
- **Transition language:** Slide, Scale Transition

## Do's and Don'ts

- Do keep the accent (#ff6b4a) for the single most important element in each frame.
- Do use Outfit large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not calm productivity: loud, sticker-happy and springy where that one is quiet and slow.

## References

- Search: "app store preview video style"
- Search: "phone mockup promo animation"
- Search: "mobile app promo motion"
