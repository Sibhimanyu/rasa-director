---
name: "Material You"
description: "Tonal lavender and rose containers with big 28px corners, no shadows, filled icons, a wallpaper-derived palette and springy shape morphs."
colors:
  canvas: "#fef7ff"        # page ground
  ink: "#1d1b20"           # headlines and body text
  accent: "#6750a4"        # primary accent: the one thing that matters in each frame
  support: "#f2b8c6"       # supporting colour, used sparingly
  surface: "#e8def8"       # raised cards and panels
  muted: "#79747e"         # muted captions
typography:
  display:
    fontFamily: Roboto Flex
    fontWeight: 600
  body:
    fontFamily: Roboto Flex
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 28px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Material You

A motion-graphics design system from RasanAI's style library (Soft & tactile). Also known as Material 3, M3 expressive, tonal UI, dynamic color UI.

## Overview

Tonal lavender and rose containers with big 28px corners, no shadows, filled icons, a wallpaper-derived palette and springy shape morphs.

It feels friendly, personal, modern. Use it for Android app launches, Google-ecosystem feature reveals, widgets and settings demos, consumer productivity apps.

## Visual language

- **Type:** Roboto Flex (display, weight 600, tracking -0.02em) with Roboto Flex for body text.
- **Surfaces:** flat fills, no gradients; corners 28px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Springy**. Motion that behaves like a damped physical spring: fast attack, one visible overshoot, then a quick settle.
- Enter `back.out(1.7)`, exit `power3.in`, move `elastic.out(1,0.75)`; durations 180 / 300 / 480 / 720 / 1100 ms; stagger 40 ms; hold at least 650 ms.
- Never: fade-up-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: spring.

## The terms that define it

- **Visual style / art direction:** Clean Minimalism, Playful Tech
- **Era / design-movement influence:** Material Design
- **UI treatment:** Material-Style UI, Floating-Card UI
- **Shape language:** Rounded, Pill-Shaped
- **Color treatment:** Pastel, Brand Palette
- **Iconography:** Filled Icons
- **Shadow / depth cues:** No Shadow
- **Motion language:** Springy
- **Transition language:** UI Morph, Shape Match

## Do's and Don'ts

- Do keep the accent (#6750a4) for the single most important element in each frame.
- Do use Roboto Flex large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not claymorphism: surfaces are flat tonal fills with no highlights or drop shadows; the softness is colour and corner radius.

## References

- Search: "material you animation"
- Search: "material 3 expressive motion"
- Search: "android dynamic color UI promo"
