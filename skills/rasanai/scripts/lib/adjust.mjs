// Motion adjustments ("slower", "calmer", "punchier"…): shared by motion-md.mjs and the
// motion-language resolver so an adjusted variant ("lang-snappy+slower") means the same everywhere.
import { die, parseEase } from "./common.mjs";

const SOFTER = { expo: "power2", power4: "power2", power3: "power2", back: "power2", elastic: "sine", circ: "sine", bounce: "sine" };
const SHARPER = { power1: "power4", power2: "power4", sine: "power3", circ: "expo" };
const STIFF = { back: "power3", elastic: "power3", bounce: "power3" };

function remapEase(e, table) {
  const { family, dir } = parseEase(e);
  if (!table[family]) return e;
  return `${table[family]}.${dir === "inout" ? "inOut" : dir}`;
}

const round10 = (v) => Math.max(10, Math.round(v / 10) * 10);

export const ADJUST = {
  slower: { doc: "durations x1.4, stagger x1.2, holds x1.3", fn: (p) => scaleTime(p, 1.4, 1.2, 1.3) },
  faster: { doc: "durations x0.7, stagger x0.8, holds x0.8", fn: (p) => scaleTime(p, 0.7, 0.8, 0.8) },
  calmer: {
    doc: "softer ease families (expo/power3-4/back -> power2; elastic/circ/bounce -> sine), durations x1.15, stagger x1.3, holds x1.15",
    fn: (p) => {
      for (const k of ["enter", "exit", "move"]) p.easing[k] = remapEase(p.easing[k], SOFTER);
      scaleTime(p, 1.15, 1.3, 1.15);
    },
  },
  punchier: {
    doc: "sharper ease families (power1-2 -> power4, sine -> power3, circ -> expo), durations x0.75, stagger x0.8, holds x0.9",
    fn: (p) => {
      for (const k of ["enter", "exit", "move"]) p.easing[k] = remapEase(p.easing[k], SHARPER);
      scaleTime(p, 0.75, 0.8, 0.9);
    },
  },
  bouncier: {
    doc: "enter becomes back.out(1.7), move back.inOut(1.4); allows overshoot",
    fn: (p) => {
      p.easing.enter = "back.out(1.7)";
      p.easing.move = "back.inOut(1.4)";
      p.banned = p.banned.filter((b) => b !== "overshoot");
    },
  },
  stiffer: {
    doc: "back/elastic/bounce -> power3; bans overshoot and bounce",
    fn: (p) => {
      for (const k of ["enter", "exit", "move"]) p.easing[k] = remapEase(p.easing[k], STIFF);
      for (const b of ["overshoot", "bounce"]) if (!p.banned.includes(b)) p.banned.push(b);
    },
  },
};

function scaleTime(p, t, s, h) {
  p.tempo.scale_ms = p.tempo.scale_ms.map((v) => round10(v * t));
  for (const k of ["enter_ms", "move_ms", "exit_ms"]) p.demo[k] = round10(p.demo[k] * t);
  p.demo.hold_ms = round10(p.demo.hold_ms * h);
  p.stagger.each_ms = round10(p.stagger.each_ms * s);
  p.holds.min_ms = round10(p.holds.min_ms * h);
}

// Adjustments apply left to right; a later one can override an earlier one
// (e.g. "bouncier,calmer" ends with softened eases, and still lifts the overshoot ban).
export function applyAdjustments(base, adjectives) {
  const p = JSON.parse(JSON.stringify(base));
  for (const a of adjectives) {
    if (!ADJUST[a]) die(`unknown adjustment "${a}". Supported: ${Object.keys(ADJUST).join(", ")}`);
    ADJUST[a].fn(p);
  }
  if (adjectives.length) {
    p.parent = base.id;
    p.adjustments = adjectives;
    p.id = `${base.id}+${adjectives.join("+")}`;
    p.name = `${base.name} (${adjectives.join(", ")})`;
  }
  return p;
}

