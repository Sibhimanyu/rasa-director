---
id: "data-reveal-gapminder-nyt"
name: "Animated data reveal (Gapminder bubbles, NYT-style annotated charts)"
space: "both"
family: "data-viz"
references: ["Gapminder Trendalyzer / Hans Rosling 'The best statistics you've ever seen' (TED 2006)", "New York Times graphics desk (Upshot, scrollytelling, annotated chart sequences)", "Gapminder Tools bubble chart"]
timing: {"frame_rate":"30 fps","holds_ms":[800,2500],"durations_ms":{"time_sweep_per_year":[150,300],"highlight_dim":[300,450],"annotation_in":[350,500],"axis_rescale":[600,900],"bar_grow":[500,800]},"note":"sweep speed and holds are derived; the sources describe encodings and workflow, not durations"}
eases: {"key":"none for the time sweep (the year is the clock), power3.inOut for camera/axis rescale, power3.out for annotation entrances","notes":"motion in the chart is the data's motion: positions follow interpolated values, never decorative bounce"}
camera: {"lens_mm":[35,50],"moves":["locked 2D chart","axis rescale as camera","3D: crane over a field of columns with a rack focus from old to new"],"rules":["one change of state per beat","annotation points to the cause, not the decoration","axes and units visible at all times"]}
recipe_2d: "GSAP paused timeline, 1920x1080. SVG chart area 1500x780 at (210,150). A single driver object {year} tweened with ease 'none' from year0 to year1 at 150-300 ms per year (50 years in 8 to 14 s); onUpdate runs render(year), a pure function that linearly interpolates each series between the two surrounding yearly records and sets cx, cy, r. Encodings as Gapminder: x and y by value (log scale option for income), r = k*sqrt(population) so area is proportional, fill by category (continent), trails as a polyline of past positions. Big ghosted year numeral behind the chart (opacity 0.08, 420 px, tabular). Highlight beat: all but 1-3 series to opacity 0.15 in 350 ms power3.out, selected series stroke 3 px, label in; annotation: text 28 px with a 2 px leader line growing 300 ms expo.out to the point. Holds 800-2500 ms after each state. Static fallbacks for any value change that is not time (bars: grow from baseline, scaleY 0 to 1, 600 ms power3.out, stagger 40 ms)."
recipe_3d: "Rasan3D: data as architecture. One InstancedMesh (or a loop of k.panel boxes) per series on a floor grid; heights from the interpolated value in pose(t,k) as a pure function of the year. Camera lens 35 mm, crane 'power3.inOut' 2.4 s, fstop 2.8, rack focus keys from the old value's column to the new one's. rig 'top-soft', k.material('matte'/'ceramic') in the category colours, one emissive accent for the highlighted column (bloom threshold 1.15). Axis labels and numbers stay DOM, pinned with k.pinDom/onDraw + k.toScreen. Never animate with state: year = k.prog(t, a, b, 'none') mapped to the dataset."
pitfalls: ["animating without data: the motion must be an interpolation of real records, and the source and unit must be on screen", "bounce or elastic on bubbles or bars: it implies the value overshot", "dual-axis charts or 3D pie charts for effect", "a time sweep with no pauses: the audience needs holds at inflection years with an annotation", "everything highlighted at once: highlighting works by dimming the rest", "bubble radius proportional to value rather than area", "legend or labels that update late: labels move with the elements", "an unreadable end state: finish on a stable frame for at least 1.2 s", "using a log axis without saying so"]
instruct: {"all":"Supply the dataset (rows by year and entity), the encoding (x, y, size, colour), scale types, the highlight sequence with years, and the annotation text verbatim. State units and source. Make the sweep a single driver tween and the render a pure function of year.","claude":"Claude tends to invent plausible numbers if data is missing and to animate each element with its own eased tween rather than one driver, which breaks the shared-clock feel. Give it the data file; require 'if a number is not in the dataset, stop and ask'. Ask for one driver and a render(year) function. Claude also over-annotates; limit to one annotation per beat.","gpt":"GPT models often produce a chart with decorative entrance animations (elastic bars, fade-ups) and fixed pixel positions instead of scale functions. Require d3-style scale functions (linear, log, sqrt for area) written in plain JS, no libraries unless vendored, and forbid easing on the time sweep. It may also use Math.random for placeholder data; forbid placeholders."}
sources: ["https://en.wikipedia.org/wiki/Trendalyzer", "https://www.gapminder.org/about/about-gapminder/history/", "https://visualign.org/2011/07/28/bubble-charts-and-gapminders-trendalyzer/", "https://www.storybench.org/scrollytelling-innovation-new-york-times-journalists-on-climate-change-visualization-and-intense-teamwork/", "https://datajournalism.com/read/handbook/two/working-with-data/experiencing-data/developments-in-the-field-of-news-graphics"]
---

## What it is

Two lineages, one technique: make the data's change over time (or across states) the motion, and tell the viewer what to look at.

Gapminder's Trendalyzer, built by Ola Rosling and used by Hans Rosling in "The best statistics you've ever seen" (TED 2006), animates a bubble chart: countries are bubbles, two axes carry numeric variables (wealth and health in the example), bubble size is a third variable such as population, colour groups countries by continent, and a time slider drives the animation. Wikipedia lists five variables at once and "brushing and linking" to show the value of a highlighted country; Visualign adds trails that show a trajectory over a 50-year span, linear and logarithmic scales, highlight-and-compare, and manual or autoplay time navigation. Gapminder was founded on 25 February 2005 and Google acquired Trendalyzer in 2007 (Gapminder history, Wikipedia).

The New York Times graphics desk contributes the editorial layer. In a Storybench interview, visual journalist Mira Rojanasakul describes "sketching with the data" and prototyping in R before production, using a proprietary tool that "walks you through a scrollytelling video format" with video, animation and annotation, plus Node scripts for animated maps; Raymond Zhong describes placing visuals next to the specific paragraphs they reinforce; about half the work is detail and editing so the piece avoids visual overload. The datajournalism.com handbook chapter describes scrollytelling as manipulating a visualization (zooming, filtering, transitioning between states) rather than showing a finished chart at once.

## The defining traits (numbers)

Documented:
- Encodings: x, y, size, colour, time (Trendalyzer). Log scale and linear scale selectable. Trails show trajectories.
- Interaction as story: highlight one entity, compare, then let time run.
- Editorial: visuals aligned with the paragraph they support; edit to avoid visual overload; sketch with the data first.
- Scrollytelling: one graphic that changes state while short commentary appears beside it.

Derived screen specification (1920x1080):
- Chart region 1500 x 780 px at (210, 150); title and source line outside it (28 px, 40 percent grey).
- Sweep speed: 150 to 300 ms per year (3 to 7 years per second); a 50-year sweep takes 8 to 14 s. Slow to 400 ms per year around the inflection the narration names.
- Bubble radius: `r = k * sqrt(value)` with k chosen so the largest bubble has a radius of about 70 px.
- Year numeral: 420 px, tabular, 8 percent opacity, behind the data (position at lower right of the chart).
- Highlight: non-selected series to 15 percent opacity in 350 ms; selected stroke 3 px; label 28 px.
- Annotation: 28 px text, 2 px leader line, entrance 350 to 500 ms, one annotation visible per beat.
- Hold: 800 to 2500 ms after each state; final stable frame at least 1.2 s.
- Palette (derived): categorical hues spaced 60 degrees at consistent lightness; the highlighted series at full saturation, the rest in grey-tinted versions.

## How to build it

### 2D (HyperFrames, GSAP, 1920x1080, 30 fps)

```js
const D = window.DATA;                                  // { years:[1970..2020], series:[{id,name,cat,x:[...],y:[...],pop:[...]}] }
const W = 1500, H = 780, X0 = 210, Y0 = 150;
const sx = v => X0 + W * (Math.log10(v) - Math.log10(300)) / (Math.log10(100000) - Math.log10(300));    // log income axis
const sy = v => Y0 + H * (1 - (v - 20) / (90 - 20));                                                  // life expectancy 20..90
const sr = p => 70 * Math.sqrt(p / D.maxPop);                                                          // area proportional
const at = (arr, yr) => { const i = Math.floor(yr - D.years[0]), f = yr - D.years[0] - i; return arr[i] + ((arr[Math.min(i+1, arr.length-1)] - arr[i]) * f); };
const els = D.series.map(s => ({ s, c: document.querySelector("#b-" + s.id), trail: document.querySelector("#t-" + s.id) }));
const clock = { year: D.years[0] };
function render(yr) {                                                                                  // pure function of year
  els.forEach(({ s, c, trail }) => {
    c.setAttribute("cx", sx(at(s.x, yr))); c.setAttribute("cy", sy(at(s.y, yr))); c.setAttribute("r", sr(at(s.pop, yr)));
    const pts = []; for (let k = D.years[0]; k <= yr; k += 1) pts.push(sx(at(s.x, k)) + "," + sy(at(s.y, k)));
    trail.setAttribute("points", pts.join(" "));
  });
  document.querySelector("#year").textContent = Math.round(yr);
}
const tl = gsap.timeline({ paused: true });
window.__timelines["11-gapminder"] = tl;
render(D.years[0]);
tl.to(clock, { year: 1990, duration: 6, ease: "none", onUpdate: () => render(clock.year) }, 0.5)       // 20 years at 300 ms
  .to(clock, { year: 2000, duration: 4, ease: "none", onUpdate: () => render(clock.year) }, 7.5)       // hold at 6.5-7.5 for the annotation
  .to(".dim", { opacity: 0.15, duration: 0.35, ease: "power3.out" }, 6.5)
  .from("#note-1 .leader", { scaleX: 0, transformOrigin: "0 50%", duration: 0.3, ease: "expo.out" }, 6.6)
  .from("#note-1 .text", { opacity: 0, y: 8, duration: 0.4, ease: "power3.out" }, 6.8);
```

Rules:
1. The only driver of motion is `clock.year`; no per-bubble tweens.
2. Source, unit and axis titles stay on screen from the first frame to the last.
3. Interpolate linearly between yearly records; if the data are sparse, say so in the footnote rather than inventing in-betweens.
4. Annotation text is verbatim from the script; leader lines end on the entity, not near it.
5. Use `textContent` and attributes only, no `requestAnimationFrame`; `render` is pure so seeking is exact.
6. For bar or line reveals outside time: bars `scaleY 0 to 1` from the baseline, lines revealed by stroke-dashoffset, both with `power3.out` 500 to 800 ms, stagger 40 ms; the chart is built to its final state at t = 0 and the tweens reveal it.

### 3D (Rasan3D)

```js
async build(k){
  const cols = D.series.map((s, i) => { const m = k.panel({ width:0.5, height:1, depth:0.5, radius:0.02, bodyColor: CAT[s.cat] });
    m.position.set((i % 12)*0.8 - 4.4, 0, Math.floor(i/12)*0.8 - 2); return m; });
  return { cols };
},
pose(t, k){
  const yr = D.years[0] + (D.years.at(-1) - D.years[0]) * k.prog(t, 0.5, 6.5, "none");
  k.objects.cols.forEach((m, i) => { const h = Math.max(0.01, at(D.series[i].y, yr) * 0.04); m.scale.y = h; m.position.y = h/2; });
},
camera: { pos:[[0,[7,6,9]],[2.4,[5,3.2,6],"power3.inOut"]], target:[[0,[0,1,0]]], lens:[[0,35]], fstop: 2.8,
          focus:[[0,5.6],[3.0,"target"]] }
```
`k.prog(..., "none")` for the year is declared: `declare.intent["linear-drift"] = "the year is the clock; the data must advance at constant speed"`. `m.scale.y` on a panel with radius and bevel distorts the corners; for exact bars use `k.addon("geometries/RoundedBoxGeometry.js")` with fixed corner geometry and move vertices, or a plain `BoxGeometry` if radius 0. Value labels as DOM via `onDraw` and `k.toScreen`.

## What makes a cheap imitation

- Random data or numbers from memory.
- Elastic or back eases on bars and bubbles.
- Dual axes, 3D pies, gradient fills, glow.
- A chart that moves but has no sentence beside it saying what to see.
- No units, no source.
- Every series coloured differently and equally bright.
- A sweep that never pauses.

## Sources

- https://en.wikipedia.org/wiki/Trendalyzer : bubble chart with five variables, time slider, Google acquisition in March 2007, brushing and linking.
- https://www.gapminder.org/about/about-gapminder/history/ : founding on 25 February 2005, TED 2006, Trendalyzer and Google.
- https://visualign.org/2011/07/28/bubble-charts-and-gapminders-trendalyzer/ : encodings, trails, scales, 50-year span, interaction.
- https://www.storybench.org/scrollytelling-innovation-new-york-times-journalists-on-climate-change-visualization-and-intense-teamwork/ : NYT process: sketch with data, R, scrollytelling tool, Node scripts, paragraph and visual coordination, editing.
- https://datajournalism.com/read/handbook/two/working-with-data/experiencing-data/developments-in-the-field-of-news-graphics : scrollytelling as manipulating a visualization across states.

Derived or unverified: sweep speed, region sizes, radius scale, opacity values, the large ghost year numeral (a common feature of Gapminder's tool, not stated in the pages fetched).
