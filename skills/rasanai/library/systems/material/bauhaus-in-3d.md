---
id: "bauhaus-in-3d"
name: "Bauhaus in 3D (primary solids, Schlemmer stage)"
kind: "material"
domain: "material"
era: "1919-1933, Weimar / Dessau; stage work 1922-1929"
origin: ["Oskar Schlemmer (Triadic Ballet, Bauhaus stage)", "Wassily Kandinsky (colour and form teaching)", "Johannes Itten", "László Moholy-Nagy", "Marcel Breuer", "Herbert Bayer"]
tags: ["bauhaus", "primary-colours", "geometry", "solids", "stage", "matte", "3d"]
palette: {"roles":{"canvas":"#f8efd2","red":"#d62718","yellow":"#f4c20d","blue":"#1b4f9c","ink":"#141414","faded_print_red":"#a76769"},"logic":"primary red, yellow, blue plus black on a warm paper ground; colour is structural, one primary dominates and the others are small. The Triadic Ballet itself ran three single-colour acts: yellow, pink, black (Wikipedia, Getty)","evidence":"canvas measured from the Bauhaus exhibition postcards on Commons (Schlemmer card https://commons.wikimedia.org/wiki/Special:FilePath/Postkarte_Bauhaus_Oskar_Schlemmer_Postkarte_f%C3%BCr_die_Bauhaus-Ausstellung.jpg?width=400: #f8efd2 52.8%, #f7eacb 22.7%, #a76769 8.7%; Kandinsky card, same naming: #f8f0d5 65.8%, #764542 8.1%), k-means 6, 2026-10-03. These are aged scans: the paper is real, the inks have faded to brick and brown, so red, yellow, blue and ink hexes are proposed saturated values for a clean render, not measurements"}
type: {"display":{"family":"Jost","free_alternative":"Jost / Outfit / Josefin Sans","weights":[400,700],"case":"lowercase for display","tracking":0,"note":"Jost is Owen Earl's open-source Futura revival (OFL, variable wght 100 to 900, Google metadata). Futura (Paul Renner, Bauer, 1927) was built from circle, square and triangle but appeared in only one or two late Bauhaus publications (Letterform Archive); the school's own lettering was Bayer's and Albers' constructed alphabets. Outfit is the closest geometric alternative with a single-storey a; Josefin Sans has the lower x-height and Art Deco-leaning proportions"},"body":{"family":"Jost","free_alternative":"Jost","weights":[400]},"rules":["lowercase headlines","text on diagonals and in bars","heavy rules and blocks as typographic elements","tween wght 300 to 700 on a letter-built word as it locks"]}
grid: {"columns":12,"baseline_px":8,"margins":"asymmetric, off-centre, dynamic","rules":["objects placed on diagonals","tension from asymmetry","bars, circles, triangles as the only graphics"]}
shape: {"radius":"0 or full circle","stroke":"thick uniform bars","shadow":"hard, graphic, one direction","imagery":"geometric primitives, figures as geometry (Schlemmer's figurines)"}
texture: "flat matte, slightly paper-textured"
motion: {"language":"mechanical, choreographed, geometric","timing_ms":[300,600,1000],"eases":{"enter":"power3.out","move":"power2.inOut","exit":"power3.in"},"entrances":["primitives slide in on axis and lock to grid","one shape rotates 90 degrees and stops"],"camera":"135mm+ near-orthographic, or locked frontal with slow diagonal track","signature":"solids assemble into a figure or letter, then dissolve back into primitives"}
space: {"2d":"native flat; strong","3d":"native: Rasan3D matte or plastic solids under top-soft; see Rasan3D reading"}
good_for: ["education, design, architecture, culture", "structured explainers", "assembling a system from parts"]
not_for: ["organic, handmade or luxurious subjects", "dark moody pieces"]
blends_with: ["concrete-brutalist-3d", "blueprint-technical-drawing", "screenprint"]
clashes_with: ["gummy-inflatable-and-plastic-toy-3d", "chrome-liquid-metal-cgi"]
cheap_tells: ["rounded friendly 'corporate Memphis' shapes presented as Bauhaus", "gradients and glows", "centred symmetrical layouts", "all three primaries at equal weight with no hierarchy", "random geometric confetti"]
verified: {"sources_fetched":3,"non_wikipedia":2,"colours":"partial","colour_images":["https://commons.wikimedia.org/wiki/Special:FilePath/Postkarte_Bauhaus_Oskar_Schlemmer_Postkarte_f%C3%BCr_die_Bauhaus-Ausstellung.jpg?width=400","https://commons.wikimedia.org/wiki/Special:FilePath/Postkarte_Bauhaus_Wassily_Kandinsky_Postkarte_f%C3%BCr_die_Bauhaus-Ausstellung.jpg?width=400"],"grid":"proposed","timings":"proposed","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Triadic_Ballet", "https://www.getty.edu/research/exhibitions_events/exhibitions/bauhaus/new_artist/body_spirit/theater/", "https://exhibitions.letterformarchive.org/bauhaus/walkthroughs/futura-type-specimen-no-1"]
---
## What it is
The Bauhaus taught a foundation course in elementary geometry and colour, and its stage workshop is the most three-dimensional thing it made. Oskar Schlemmer's Triadic Ballet (premiere 1922, Stuttgart) had three dancers in 18 costumes across 12 dances in three acts, each act tuned to a colour: lemon yellow for a burlesque mood, pink for a festive and solemn one, black for a mystical one (Wikipedia, Getty). The costumes were sculptural, "ambulant architectures" in foil, sheet steel, plywood, wire and rubber, turning a body into spheres, cones, cylinders and cubes; nine of the eighteen originals survive, seven at the Staatsgalerie Stuttgart (from a web-search summary of an Artnet article, whose page returned 403; treat as unconfirmed). After Lothar Schreyer left in 1923, Schlemmer led the Bauhaus stage workshop with a focus on "abstraction, mechanization, and mathematics" (Getty). This entry is that: primary solids and assembled figures under controlled light, not a flat Bauhaus poster pastiche.

## The rules that make it this and not something else
- Elementary forms only: sphere, cube, cone, cylinder, bar; circle, square, triangle in 2D.
- Colour is structural: red, yellow, blue, black on paper. One primary dominates a frame (about 60 percent of the coloured area), the others are small. The ballet's own acts were single-colour fields.
- Asymmetry and diagonals; type lowercase and geometric.
- Bodies and letters are built from primitives; the figure is architecture and every joint is a visible part.
- Function visible: construction lines, no ornament, no gradients.
- Repetition and module: the same primitive recurs at 1:2:4 scale (proposed).
- Mechanical motion: each part moves on one axis or one rotation, then stops. Schlemmer's costumes restricted movement severely; that restriction is the choreography.

## Tokens decoded
canvas `#f8efd2` (measured from the 1923 exhibition postcards, which are aged scans); red `#d62718`, yellow `#f4c20d`, blue `#1b4f9c`, ink `#141414` proposed. Type: Jost 700 lowercase display, Jost 400 body; letters can be assembled from bars and quarter circles. Bars 24 px on an 8 px baseline; solids at 1 m, 2 m, 4 m ratio for a 3D scene. Shapes are `border-radius: 0` or 50 percent, nothing between.

## Motion and camera
2D (HyperFrames GSAP): primitives slide on axis `power3.out` 600 ms and lock to the grid, one rotates exactly 90 degrees `power2.inOut` 600 ms. Assemble: 12 primitives stagger 60 ms (`stagger: { each: 0.06, from: "center" }`) into a letterform, hold 800 ms, disperse `power3.in` 600 ms. No overshoot (`back.out`) in this look; the machine does not bounce. Timings proposed.

Rasan3D reading. Matte solids: `k.material("matte", { color: "#d62718" })` (roughness 0.9) or `k.material("plastic", { roughness: 0.55, clearcoat: 0 })` for a slightly sheened variant. A Schlemmer figurine is a hierarchy of parented primitives (cylinder torso, sphere head, box limbs, cone skirt) so each joint is a pivot.
```js
Rasan3D.stage({ id, canvas, timeline: tl, duration: 6,
  background: "#f8efd2",
  environment: { preset: "soft", intensity: 0.5 }, toneMapping: "neutral",
  post: { grain: 0.015 },
  camera: { pos: [[0, [-2.4, 1.3, 14]], [5.2, [2.4, 1.3, 14], "sine.inOut"]], target: [[0, [0, 1.1, 0]]], lens: [[0, 160]], fstop: 8 },   // 160 mm, a 4.8 m lateral truck: near-orthographic
  async build(k) {
    const T = k.THREE, r = k.rng(22), red = k.material("matte", { color: "#d62718" }), yel = k.material("matte", { color: "#f4c20d" }), blu = k.material("matte", { color: "#1b4f9c" }), ink = k.material("matte", { color: "#141414" });
    k.rig("top-soft", { shadows: true, shadowSoftness: 1 });          // top-soft fixes its own key direction; low softness keeps the shadow hard
    k.ground({ y: 0, color: "#f8efd2", shadowOpacity: 0.35 });
    const fig = new T.Group(), parts = [];
    const add = (geo, mat, x, y, z) => { const m = new T.Mesh(geo, mat); m.castShadow = true; m.userData.home = new T.Vector3(x, y, z); m.userData.from = new T.Vector3((r() - 0.5) * 14, 2 + r() * 5, (r() - 0.5) * 6); m.userData.delay = 0; fig.add(m); parts.push(m); return m; };
    add(new T.CylinderGeometry(0.45, 0.45, 1.1, 40), red, 0, 1.3, 0);       // torso
    add(new T.SphereGeometry(0.4, 40, 24), yel, 0, 2.2, 0);                  // head
    add(new T.BoxGeometry(0.22, 1.0, 0.22), blu, -0.75, 1.3, 0);            // arm L
    add(new T.BoxGeometry(0.22, 1.0, 0.22), blu, 0.75, 1.3, 0);             // arm R
    add(new T.ConeGeometry(0.7, 0.9, 40), ink, 0, 0.45, 0);                 // skirt
    parts.forEach((m, i) => { m.userData.delay = i * 0.12 + 0.4 * r(); });
    k.scene.add(fig); return { fig, parts };
  },
  pose(t, k) { const { fig, parts } = k.objects;
    parts.forEach((m) => { const u = k.prog(t, 0.3 + m.userData.delay, 1.5 + m.userData.delay, "expo.out"); m.position.lerpVectors(m.userData.from, m.userData.home, u); });
    fig.rotation.y = 0.5 * k.prog(t, 3.0, 3.6, "power2.inOut") * Math.PI;      // one 90-degree turn after the figure has landed, then hold
  } });
```
Notes: the camera is the slow lateral truck (3d.md: 200 mm and over stacks layers graphically; 160 mm keeps a hint of parallax); assembly follows 3d.md section 8 (seeded start positions, staggered, `expo.out`, last piece lands in the back half). Avoid a torus knot or icosahedron (`stock-primitive` warning), glossy chrome, bloom, and a spinning figure. For a letter, build it from boxes and `T.RingGeometry`/`CylinderGeometry` quarter segments, or use `k.extrudeText(word, { font: "assets/fonts/Jost-Bold.ttf", size: 1, depth: 0.25, bevel: 0, material: red })` with `bevel: 0` so edges stay sharp.

## How to instruct a model to build it
> Bauhaus solids. Matte red, yellow, blue and black primitives on a `#f8efd2` paper ground, composed on diagonals; one primary dominant. Build one figure from a cylinder, sphere, boxes and a cone as in Schlemmer's Triadic Ballet, each part a separate mesh. 160 mm lens, f/8, `k.rig("top-soft")` with low `shadowSoftness` so the shadow stays hard, a paper-coloured `k.ground`. Pieces fly from seeded positions on `expo.out`, staggered 120 ms, hold 800 ms, then one 90-degree turn on `power2.inOut`. Lowercase Jost 700 in the DOM on a diagonal. No gradients, no glow, no rounded-corner cards, no `back.out`.
Claude respects primitives when told to avoid stock shapes; GPT-family models drift into soft rounded Memphis shapes (observed tendency, not measured). State "no rounded corners".

## Blending notes
Carries: primitives, one dominant primary, mechanical single-axis motion, assembly. Pairs with concrete-brutalist-3d (same hard light, monumental lens) and blueprint-technical-drawing (construction lines over the solids). Breaks with chrome and gummy looks.
Unverified: Kandinsky's colour-shape pairing (yellow triangle, red square, blue circle) is widely repeated but no primary source was fetched; do not state it as fact.

## Sources
- https://en.wikipedia.org/wiki/Triadic_Ballet — premiere 30 September 1922 Stuttgart Landestheater, music Hindemith, 3 acts, 3 dancers, 12 dances, 18 costumes, lemon yellow / pink / black acts (fetched).
- https://www.getty.edu/research/exhibitions_events/exhibitions/bauhaus/new_artist/body_spirit/theater/ — Schlemmer leads the stage workshop from 1923; abstraction, mechanization, mathematics (fetched).
- https://exhibitions.letterformarchive.org/bauhaus/walkthroughs/futura-type-specimen-no-1 — Futura by Renner, Bauer 1927, built from circles, squares, triangles; only one or two late Bauhaus publications (fetched).
- Not fetched: the Artnet article on the costumes (403) and the Google Fonts Jost specimen; Jost's Futura lineage and Owen Earl credit come from search-result summaries, its axes and OFL licence from gf.py metadata.
- Colour: Commons exhibition postcards (Schlemmer, Kandinsky), sampled by k-means.
