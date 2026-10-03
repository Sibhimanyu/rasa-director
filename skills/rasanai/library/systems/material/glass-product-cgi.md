---
id: "glass-product-cgi"
name: "Glass and frosted glass (product CGI and UI glass)"
kind: "material"
domain: "material"
era: "Vista Aero 2006, Big Sur 2020, 'glassmorphism' coined 2020, Liquid Glass 2025"
origin: ["Microsoft Aero", "Michal Malewicz (term glassmorphism, 2020)", "Apple Liquid Glass (2025)", "product-CGI glass work in Houdini/Redshift (e.g. Egor Brodunov's perfume film)"]
tags: ["glass", "transmission", "refraction", "frosted", "translucent", "product", "3d"]
palette: {"roles":{"canvas":"#0e1116","glass_tint":"#dbe9f4","key_light":"#ffffff","accent":"#5cc8ff"},"logic":"glass has almost no colour of its own: it borrows from what sits behind and around it, so the palette is the backdrop plus one saturated accent. All four hexes proposed: no collection image of a glass object was measured, because the colour of glass is the colour of its surroundings and a sample would just record one photo's backdrop","evidence":"proposed; not measured. Brodunov's frame is described (abduzeedo) as warm amber key from one side, deep cool shadow from the other, soft warm label ground: use that warm-vs-cool split as the second palette option"}
type: {"display":{"family":"Inter Tight","free_alternative":"Inter Tight / Inter / Manrope / Figtree","weights":[500,600],"case":"mixed","tracking":-0.01,"note":"the SF-like grotesk Apple uses is not on Google Fonts; Inter is the closest free match. Inter has opsz and wght axes: tween wght 400 to 600 for a label that firms up as glass settles"},"body":{"family":"Inter","free_alternative":"Inter","weights":[400,500]},"rules":["type on glass is opaque, high contrast, never tinted glass-on-glass","labels stay DOM, crisp, above the 3D layer (k.pinDom if they must ride the object)"]}
grid: {"columns":12,"baseline_px":8,"margins":"wide, objects float with air around them","rules":["one hero glass object per frame","backdrop must have structure (colour field, gradient, shapes) or glass has nothing to refract"]}
shape: {"radius":"large, 24 to 40px (UI) or fully rounded solids (3D)","stroke":"1px specular edge highlight at 40 to 60 percent white","shadow":"soft, low, coloured by the backdrop","imagery":"abstract colour fields behind"}
texture: "frosted variant: roughness 0.25 to 0.5 scatters the backdrop into blur; clear variant: 0.0 to 0.05"
motion: {"language":"slow, weighty, liquid","timing_ms":[500,900,1400],"eases":{"enter":"power3.out","move":"sine.inOut","exit":"power2.in"},"entrances":["slab rises into place while its refraction settles (lensing strength eases in; no opacity fade)","edge highlight sweeps once across the rim"],"camera":"85mm to 135mm, short arcs 15 to 30 degrees, rack focus between glass and backdrop","signature":"the highlight travels across the glass as the camera arcs; the backdrop visibly bends behind the edge"}
space: {"2d":"CSS backdrop-filter blur 20 to 40px plus 1px inner border; honest but cheap","3d":"native: Rasan3D glass and frosted-glass, with an opaque background; see Rasan3D reading"}
good_for: ["OS, device and fintech product films", "clarity, transparency, trust, premium consumer tech", "logos and numerals as physical objects"]
not_for: ["gritty or analogue subjects", "anything printed or handmade in feel", "type-heavy explainers"]
blends_with: ["chrome-liquid-metal-cgi", "frutiger-aero", "y2k-chrome"]
clashes_with: ["risograph-print", "newspaper-broadsheet", "bollywood-hand-painted"]
cheap_tells: ["2D blur panel with a white 10 percent fill and called glass", "glass over a flat single-colour background so nothing refracts", "no specular edge, no thickness", "rainbow dispersion on everything", "glass in front of bare DOM (3D glass refracts only what the 3D layer draws)", "glass that fades in with opacity instead of its lensing arriving"]
verified: {"sources_fetched":7,"non_wikipedia":5,"colours":"proposed","colour_images":[],"grid":"proposed","timings":"partial","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Fresnel_equations", "https://en.wikipedia.org/wiki/Glassmorphism", "https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/", "https://developer.apple.com/videos/play/wwdc2025/219/", "https://abduzeedo.com/egor-brodunovs-perfume-cgi-treats-glass-study-light", "https://threejs.org/docs/pages/MeshPhysicalMaterial.html", "https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_volume/README.md"]
---
## What it is
Two things share the word. Glassmorphism is a 2D UI style: translucent blurred panels with thin borders over vibrant colour (term coined by Michal Malewicz in 2020; precursors Windows Vista/7 Aero and macOS Big Sur). Glass in product CGI is a physically based material: thickness, refraction, specular edges, absorption. Apple's 2025 Liquid Glass sits between them: "translucent and behaves like glass in the real world", colour "informed by surrounding content", real-time rendering with specular highlights that react to movement (Apple Newsroom). In the WWDC25 session Apple names the primary cue "lensing": the warping and bending of light by a transparent object communicates its presence, motion and form, and objects "materialize in and out by gradually modulating the light bending and lensing" instead of fading.

## The rules that make it this and not something else
- Glass reflects about 4 percent at normal incidence for IOR 1.5, rising toward mirror at grazing angles (Fresnel). Face-on it reads clear, at the rim it is bright: the rim is the look.
- It needs something to refract. A structured backdrop or nothing to see.
- Thickness is a real quantity. In glTF's volume model, thickness is the distance light travels beneath the surface and attenuation distance is the average distance before light interacts with the medium; a thin-walled object has thickness 0 (Khronos). Thick glass shows tint and bent backdrop, thin glass only the rim.
- Edge bevels catch the key as a thin bright line; a sharp razor edge looks like a render, a 1.5 to 3 percent bevel looks like glass.
- Dispersion (blue bends more than red) is a light touch: three.js documents the realistic range as 0 to 1 and only on transmissive materials. Use 0.1 to 0.4 on a hero, never rainbow.
- Frosted glass scatters, it does not bend: the backdrop is blurred, not displaced.
- Text and controls on glass stay opaque and high-contrast.
- Arrival is optical, not an opacity fade (Apple): ease the lensing in.

## Tokens decoded
- 2D: `background: rgba(255,255,255,0.10); backdrop-filter: blur(28px) saturate(140%); border: 1px solid rgba(255,255,255,0.35); border-radius: 28px; box-shadow: 0 24px 60px rgba(0,0,0,0.25)`. Proposed values.
- Type: Inter Tight 600 for display; labels fully opaque `#ffffff` on dark backdrops.
- Backdrop: soft two-colour gradient with 3 to 6 accent shapes at different depths; DoF blurs them, which makes the glass legible.
- Physical defaults in Rasan3D (`rasan3d.js` `material`): glass = roughness 0.04, transmission 1, thickness 0.6, ior 1.5, envMapIntensity 1.2, attenuationDistance 2.5; frosted-glass = roughness 0.42, transmission 1, thickness 0.8, ior 1.45. Thickness and attenuation are in world units (metres), so scale them to the object.

## Motion and camera
2D: panel scales 0.96 to 1 and fades in over 900 ms `power3.out`; the 1 px border gradient sweeps 120 degrees over 1400 ms `sine.inOut`; backdrop shapes drift 40 px over 6 s `sine.inOut` so refraction changes. Timings proposed.

Rasan3D reading. Any `MeshPhysicalMaterial` property can be passed as an override to `k.material` (it copies keys that exist on the material), including `dispersion`, `transmission`, `thickness`, `ior`, `attenuationColor`, `attenuationDistance`, `specularIntensity`, `iridescence`.
```js
Rasan3D.stage({ id, canvas, timeline: tl, duration: 6,
  background: "#0e1116",                        // opaque: transmission samples only what the 3D layer draws
  environment: { preset: "studio", intensity: 0.8 },
  toneMapping: "agx",                           // filmic roll-off keeps rim highlights from clipping
  post: { bloom: { strength: 0.2, threshold: 1.15 }, ca: 0.6, grain: 0.02 },
  camera: { pos: Rasan3D.orbit({ center: [0, 0, 0], radius: 4, height: 0.4, from: -12, to: 18, t0: 0.4, t1: 4.4, ease: "power3.inOut" }),
            target: [[0, [0, 0, 0]]], lens: [[0, 100]], fstop: 2.8,
            focus: [[0, 4], [2.2, 6.5, "power2.inOut"]] },   // rack from the glass (4 m) to the backdrop discs (about 6 m)
  async build(k) {
    k.rig("rim", { dir: [-0.6, 0.8, 0.5], key: "#fff4e6", rim: "#bfe4ff", shadows: true });
    k.ground({ y: -0.3, shadowOpacity: 0.3 });
    // backdrop: unlit accent discs at three depths, the thing to refract
    const T = k.THREE, r = k.rng(11), discs = [];
    for (let i = 0; i < 5; i++) { const d = new T.Mesh(new T.CircleGeometry(0.5 + r() * 0.6, 48), k.material("unlit", { color: ["#5cc8ff", "#7a5cff", "#ff7ab0"][i % 3] })); d.position.set(-3 + i * 1.5, r() * 1.4 - 0.3, -1.6 - r() * 2.2); d.userData.x0 = d.position.x; k.scene.add(d); discs.push(d); }
    const hero = new T.Mesh(new T.CapsuleGeometry(0.35, 0.9, 16, 48), k.material("glass", { color: "#dbe9f4", transmission: 1, ior: 1.5, thickness: 0.3, roughness: 0.03, attenuationColor: "#bfe4ff", attenuationDistance: 1.2, dispersion: 0.25, specularIntensity: 1 }));
    k.scene.add(hero); return { hero, discs };
  },
  pose(t, k) { const { hero, discs } = k.objects; hero.material.thickness = 0.3 * k.prog(t, 0, 1.2, "power3.out"); /* lensing arrives */
    discs.forEach((d, i) => { d.position.x = d.userData.x0 + 0.15 * Math.sin(t * 0.7 + i); }); } });
```
Notes on that sketch: `pose` sets thickness and disc positions from `t` alone (seek-safe) so the bend grows in rather than the object fading. The orbit is 30 degrees with 0.4 s holds at both ends (15 to 30 degrees is the range). Frosted variant: `k.material("frosted-glass", { roughness: 0.38, thickness: 0.6 })`, with `fstop` off so the frost is the blur. Logos: `k.svg(svg, { width: 3, depth: 0.12, bevel: 0.015, material: k.material("glass", { thickness: 0.12 }) })` so the bevel catches the key. Transmission is expensive (3d.md section 10): glass on the hero only, everything else opaque. The studio environment is a bright room, so keep intensity 0.6 to 0.9 or the glass washes out.

## How to instruct a model to build it
> Real glass, not a blur card. One hero glass object (`k.material("glass")`, ior 1.5, thickness scaled to the object, small dispersion 0.2) lit by `k.rig("rim")` with a soft cool rim, over an opaque stage `background` plus five unlit accent discs at different depths so there is something to refract. Camera 100 mm, f/2.8, one 20-degree `k.orbit` on `power3.inOut` with 400 ms holds at each end, a rack focus from the glass edge to the discs. The glass arrives by easing `thickness` from 0, not by fading. Type opaque white Inter Tight 600 in the DOM. In 2D fall back to backdrop-filter blur 28 px with a 1 px 35 percent white border and a soft shadow.
Claude handles the Rasan3D material and rig; GPT-family models tend to put glass over flat colour and call it done (observed tendency, not measured). Insist on the backdrop.

## Blending notes
Carries: rim-lit thickness, one hero object, slow arcs, lensing arrival. Pairs with chrome (same environment-driven look) and with Frutiger Aero (glass plus nature). Product-film register: see the apple-product-films and manvsmachine entries. Breaks with textured print vernaculars.

## Sources
- https://en.wikipedia.org/wiki/Fresnel_equations — about 4 percent reflectance for n = 1.5 at normal incidence; mirror-like at grazing (fetched).
- https://en.wikipedia.org/wiki/Glassmorphism — term coined by Michal Malewicz 2020; Big Sur and Aero precursors (fetched).
- https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/ — Liquid Glass: translucent, behaves like glass, colour informed by surroundings, real-time rendering, specular highlights react to movement (fetched).
- https://developer.apple.com/videos/play/wwdc2025/219/ — "Lensing" as the primary cue; objects materialize by modulating bending and lensing, not fading; motion designed with the visuals (fetched, transcript).
- https://abduzeedo.com/egor-brodunovs-perfume-cgi-treats-glass-study-light — Houdini plus Redshift glass film: warm amber key one side, cool shadow other side, macro, DoF keeping one corner of the glass sharp (fetched).
- https://threejs.org/docs/pages/MeshPhysicalMaterial.html — ior 1.0 to 2.333 default 1.5; dispersion typical 0 to 1, transmissive only; attenuationDistance/attenuationColor semantics (fetched).
- https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_volume/README.md — thickness, attenuationDistance, attenuationColor, thin-walled vs volumetric (fetched).
