---
id: "data-in-space"
name: "Data in space (numbers as architecture under one light, read with a long lens)"
space: "3d"
family: "data-viz"
references: ["3D data sculptures (physical data forms)", "data journalism 3D terrain and column fields", "Tufte's critique of chartjunk and 3D chart effects"]
timing: {"frame_rate":"30 fps comp","holds_ms":[800,1800],"durations_ms":[900,1400,2600],"bar_rise_ms":900,"stagger_ms":30,"notes":"rise in rank order, then hold long enough to read the labelled bars; the camera moves only after the values have landed"}
eases: {"key":"power3.out","rise":"power3.out","camera":"power3.inOut","rack":"power3.inOut","notes":"bars rise on power3.out (decelerating, readable end state); camera and focus legs on power3.inOut"}
camera: {"lens_mm":[135,200],"moves":["crane to 25-30 degrees elevation","a 15 degree arc to separate occluded bars","rack focus from the old value to the new"],"rules":["a long lens flattens perspective distortion: Highcharts names perspective distortion and occlusion as the two killers of 3D charts","interactivity does not exist in a video: the camera arc replaces rotating the plot","a reference grid and exact labels are mandatory (Highcharts): labels are DOM, pinned to bar tops","baseline at zero, height linear in value"]}
recipe_2d: "A normal chart, not a fake 3D one: GSAP bars with scaleY from 0 (transform-origin bottom), stagger {each: 0.03, from: 'start'}, 'power3.out', 0.9 s each; counters via a tween on a plain object updating textContent. Recommended when the values must be read precisely or when the chart is dense: 2D is the honest default for data."
recipe_3d: "Rasan3D: InstancedMesh of unit boxes (geometry translated so y = 0 is the base) driven in pose(t): h_i = value_i * scale * k.prog(t, t0 + i*0.03, t0 + i*0.03 + 0.9, 'power3.out'); per-instance colour (muted ground colour, one accent bar via setColorAt); k.rig('top-soft', {shadows:true, shadowSoftness:8}); k.ground floor; a hatched reference grid shader on the floor (r3Hatch on world xz); camera at lens 135 mm, elevation 28 degrees, distance = grid_width * lens / 36; focus keys [[0,d],[3.0,d2,'power3.inOut']] with fstop 5.6; labels are DOM elements pinned with k.pinDom(el,{at: anchorObject3D, width:1.4, face:'camera', px:[224,64], offset:[0,0.5,0]}); counters are GSAP on the ui layer; values come from a JSON file in the project, never invented."
pitfalls: ["3D used for flat data: Tufte's data-ink argument; if the data is not spatial, 2D is more truthful","perspective distortion at a short lens: far bars look smaller than they are (Highcharts)","occlusion: tall bars hide short ones behind them; arc the camera or sort the layout","no reference grid and no exact labels (Highcharts recommends both)","truncated baseline or a bar whose height is not linear in value (volume or area encoding hides the numbers)","bars that overshoot (back.out) or bounce: the final height must be exact when it stops","a neon grid floor and glow on every bar: decoration","invented numbers: placeholder values presented as data"]
instruct: {"all":"Load the real values from a file in the project and encode each as bar height with a stated scale (metres per unit). Use a long lens (135 mm or more), 25-30 degree elevation, one top-soft key. Label the bars that matter with DOM text pinned in 3D, exact values, from the same file. Bars rise in rank order, power3.out, and come to rest; the camera moves after they land. Never invent data: if a number is missing, say so in the score.","claude":"You like to embellish with glow, particles and a gradient background. Do not: ground colour neutral, bars one muted colour, one accent bar for the story. Put the scale and the data file name in a comment and state what the viewer should conclude at each hold.","gpt":"You tend to generate plausible random data (Math.random) to fill a chart, and to animate heights with a looping sine. Use only the values from the supplied file; heights come from k.prog(t, a, b, ease) with a clear start and end; no random, no loop. Do not draw the labels in the canvas texture: use DOM pinned with k.pinDom so type stays crisp."}
verified: {"sources_fetched":5,"non_wikipedia":5,"colours":"n/a","colour_images":[],"grid":"n/a","timings":"partial","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://www.highcharts.com/blog/best-practices/3d-graph-useful-visualization-or-misleading-illusion/", "https://www.kdnuggets.com/2015/08/3d-data-sculptures-visualize-data.html", "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d", "local: skills/rasanai/references/3d.md sections 8 and 11 (data in space, rack focus)", "local: skills/rasanai/stage3d/rasan3d.js (pinDom)"]
---
## What it is

A set of numbers made into a physical field: columns on a floor, a terrain, a city of bars, lit by one key and read with a long lens. Done well it makes magnitude felt (a column taller than the frame, the old value shrunk beside the new). Done badly it is a 3D bar chart from a spreadsheet's default style. The rule that decides it: use space only where the data has a reason to be spatial or where scale itself is the message, and let the camera, not the viewer's mouse, resolve occlusion.

## The defining traits (numbers)

- **When 3D works** (Highcharts): inherently three-dimensional data (spatial coordinates, topography), complex multi-variable relationships, interactive exploration, improved retention through distinctiveness. **When it misleads:** perspective distortion (farther elements look smaller, comparisons skew), occlusion, higher cognitive load. Fixes they name: interactivity, reference grids and skewed labels, angles that minimise occlusion, tooltips with exact values. In a video interactivity becomes camera motion; tooltips become pinned labels.
- **Data sculptures** (KDnuggets): physical data forms improve retention ("digital data is made to forget, analogue is made to remember"), engage more senses, and carry narrative (comparing economic rankings to climbing mountains). That is the register: sculptural, concrete, one story.
- **Lens and distance (our derivation from the 36 mm sensor):** a lens of 135 mm sees 12 m of scene at 45 m distance (12 = 45 x 36 / 135), so a 12 m wide grid needs about 45 m; at 200 mm it needs 67 m and is flatter still. A short lens (35 mm) would sit 12 m from the same grid and turn the back row into a minor detail.
- **Pixel size of a label at that framing:** 1920 px across 12 m is 160 px per metre, so a 1.4 m label is 224 px wide.
- **Timing (ours):** 0.9 s per bar, 30 ms stagger in rank order, so 12 bars finish in 0.9 + 11 x 0.03 = 1.23 s; hold 800-1800 ms before the camera moves; rack focus 1.0-1.4 s.
- **Depth of field:** at 135 mm and f/5.6 the aperture radius is 0.135 / (2 x 5.6) = 0.012 m, shallow enough to separate near and far rows (3d.md section 4 puts f/4-5.6 for a readable subject).

## How to build it

### 3D (Rasan3D)

```js
Rasan3D.stage({
  id: "06-columns", canvas, timeline: tl, duration: 7, fps: 30,
  camera: {
    pos:    [[0, [-22.8, 22.6, 32.5]], [4.2, [-13.6, 22.6, 37.3], "power3.inOut"]],     // az -35 -> -20 degrees, el 28, distance 45
    target: [[0, [0, 1.5, 0]]],
    lens:   [[0, 135]], focus: [[0, 45], [3.0, 38, "power3.inOut"]], fstop: 5.6,          // rack from the front row toward the highlighted bar
  },
  environment: { preset: "soft", intensity: 0.5 }, toneMapping: "neutral",
  post: { grain: 0.015, vignette: 0.1 },
  async build(k) {
    const { THREE } = k;
    const data = await fetch("assets/data/values.json").then((r) => r.json());            // project asset, loaded in build (offline)
    const N = data.length, cols = 12, SP = 1.0, SCALE = 0.12;                              // 0.12 m per unit: state it
    const g = new THREE.BoxGeometry(0.8, 1, 0.8); g.translate(0, 0.5, 0);
    const mesh = new THREE.InstancedMesh(g, k.material("ceramic", { color: "#ffffff" }), N);
    const order = data.map((d, i) => i).sort((a, b) => data[b].v - data[a].v);              // rank order for the stagger
    const c = new THREE.Color();
    for (let i = 0; i < N; i++) mesh.setColorAt(i, c.set(i === data.findIndex((d) => d.hero) ? "#e4572e" : "#9aa3ad"));   // muted ground, one accent
    mesh.castShadow = mesh.receiveShadow = true; mesh.frustumCulled = false; k.scene.add(mesh);
    k.rig("top-soft", { dir: [-0.4, 1, 0.5], intensity: 1.0, shadows: true, shadowSoftness: 8, shadowSize: 30 });
    k.ground({ y: 0, color: "#e9e6df", shadowOpacity: 0.3, size: 80 });
    const anchor = new THREE.Object3D(); k.scene.add(anchor);
    k.pinDom(document.getElementById("r3-06-columns-label"), { at: anchor, width: 1.4, face: "camera", px: [224, 64], offset: [0, 0.5, 0] });
    return { data, mesh, order, anchor, cols, SP, SCALE, dummy: new THREE.Object3D() };
  },
  pose(t, k) {
    const { data, mesh, order, anchor, cols, SP, SCALE, dummy } = k.objects;
    order.forEach((i, rank) => {
      const u = k.prog(t, 0.4 + rank * 0.03, 1.3 + rank * 0.03, "power3.out");              // one ease for all; rank-staggered
      const x = (i % cols - (cols - 1) / 2) * SP, z = (Math.floor(i / cols) - 3.5) * SP, h = Math.max(data[i].v * SCALE * u, 0.001);
      dummy.position.set(x, 0, z); dummy.scale.set(1, h, 1); dummy.updateMatrix(); mesh.setMatrixAt(i, dummy.matrix);
      if (data[i].hero) anchor.position.set(x, h, z);                                         // the label rides the bar top
    });
    mesh.instanceMatrix.needsUpdate = true;
  },
});
```

Notes:

- **Labels are DOM.** `k.pinDom` sets a `matrix3d` on the element each draw (MDN: a 4x4 column-major matrix) so crisp type sits on the 3D point, occluded only by being behind the camera. Pin at most 4-6 labels; the rest of the values live in the data file and the end card. The count-up is a GSAP tween on a plain object updating `textContent`, in the ui layer, timed to the bar's landing.
- **Reference grid:** a floor `ShaderMaterial` using `Rasan3D.glsl.npr`: `float g = max(r3Hatch(vWorld.x / 1.0, 0.04), r3Hatch(vWorld.z / 1.0, 0.04));` gives 1 m lines of stable pixel width. A baseline at zero is the floor itself.
- **Old to new:** for a before/after story, build two rows of bars (the earlier value ghosted, 35 percent opacity or a lighter colour) and rack focus from the old row to the new on the camera key above.
- **Occlusion:** the 15 degree arc (`pos` keys) reveals the bars hidden behind tall ones; if a story bar is still hidden, reorder the layout (sort by rank) rather than raising the camera further.
- **Honesty:** if the data has a baseline other than zero (an index, a delta), say so in a label. Never truncate silently.

### 2D fallback

```js
tl.fromTo(".bar", { scaleY: 0 }, { scaleY: 1, transformOrigin: "50% 100%", duration: 0.9, ease: "power3.out", stagger: { each: 0.03, from: "start" } }, 0.4);
tl.to({ n: 0 }, { n: 1840, duration: 1.2, ease: "power3.out", onUpdate() { document.getElementById("val").textContent = Math.round(this.targets()[0].n).toLocaleString(); } }, 1.1);
```
Use this by default; promote to 3D only when the camera adds a fact (scale, rank, before and after).

### Reading order of a data shot (the 7 s timeline above, in words)

1. 0.0-0.4 s: empty floor with the grid (the baseline is visible before any value arrives).
2. 0.4-1.7 s: the bars rise in rank order, tallest first, 30 ms apart; the viewer sees the ranking form.
3. 1.7-3.0 s: hold; the count-up lands on the hero bar (DOM label pinned to its top, `power3.out`, 1.2 s).
4. 3.0-4.2 s: rack focus from the front row (45 m) to the hero (38 m) while the camera starts its 15 degree arc (`power3.inOut`).
5. 4.2-7.0 s: rest with the hero lit; the end card or the next scene's line arrives over it in DOM.

Checks: every label's value equals the file's value; the hero's height divided by the second's height equals the data ratio (print both in a comment: height is linear in value, never in area); no bar is occluded at the hold (strip at 3.0 s); the accent colour appears on one bar only.

## What makes a cheap imitation

- The spreadsheet 3D column chart: perspective, gradient fills, a rotated axis label, a drop shadow.
- A short lens or a steep isometric: the back row is a rumour.
- Bars that wobble, overshoot or loop; the value must settle exactly.
- Glow, particles and a dark starfield behind the data: the story is the number.
- Random or "dummy" values dressed as data.
- No reference grid, no exact labels, no baseline: the viewer cannot read a single value.
- A camera that spins at constant speed round the field: occlusion is resolved by one purposeful arc, then a hold.

## Sources

- https://www.highcharts.com/blog/best-practices/3d-graph-useful-visualization-or-misleading-illusion/ (fetched): perspective distortion, occlusion, cognitive load; when 3D works; recommendations.
- https://www.kdnuggets.com/2015/08/3d-data-sculptures-visualize-data.html (fetched): what data sculptures are, four advantages, examples.
- https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d (fetched): the 16-value column-major matrix that `k.pinDom` uses.
- local: `skills/rasanai/references/3d.md` (data in space, lens table, DoF) and `skills/rasanai/stage3d/rasan3d.js` (`pinDom` signature: at, width, height, face, px, offset, backface).
- Not fetched, cited as background only: Tufte's data-ink and chartjunk argument (appears in search results, not read this session): unverified here.
