// Style preset renderer: draws any preset recipe (taxonomy/presets/SCHEMA.md) as a 1600x900 specimen on the
// user's own words, so hundreds of styles can be browsed by eye. Plain browser JS, no dependencies; used by the
// Director's Console gallery, the website and `presets.mjs stills`.
//   RasaPresets.render(preset, { headline, sub, brand }) -> HTML string (a .rp-stage, 1600x900)
//   RasaPresets.css -> the shared stylesheet (inject once);  RasaPresets.fontsHref(presets) -> Google Fonts URL
// Every element that should move on hover carries class rp-a and a stagger index --i.
(function (root) {
  "use strict";
  var W = 1600, H = 900, SEQ = 0;

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function hex(c) { c = String(c || "#000").replace("#", ""); if (c.length === 3) c = c.split("").map(function (x) { return x + x; }).join(""); var n = parseInt(c, 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; }
  function rgba(c, a) { var r = hex(c); return "rgba(" + r[0] + "," + r[1] + "," + r[2] + "," + a + ")"; }
  function mix(a, b, t) { var x = hex(a), y = hex(b); return "#" + x.map(function (v, i) { return Math.round(v + (y[i] - v) * t).toString(16).padStart(2, "0"); }).join(""); }
  function lum(c) { var r = hex(c).map(function (v) { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }); return 0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]; }
  function dark(c) { return lum(c) < 0.25; }
  function contrast(a, b) { var x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); }
  // the most readable of the palette's ink, canvas, white and near-black on a given background
  function readOn(bg, P) { var best = P.ink, bc = 0; [P.ink, P.canvas, "#ffffff", "#16181d"].forEach(function (c) { var k = contrast(c, bg); if (k > bc + 0.01) { bc = k; best = c; } }); return contrast(P.ink, bg) >= 4.5 ? P.ink : best; }
  function pick(v, P) { return v === "ink" ? P.ink : v === "accent" ? P.accent : v === "accent2" ? P.accent2 : v === "canvas" ? P.canvas : v || P.ink; }
  function f1(n) { return Math.round(n * 10) / 10; }
  function hash(s) { var h = 2166136261; s = String(s); for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function rng(seed) { var s = seed >>> 0 || 1; return function () { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s / 4294967296; }; }
  function has(list, v) { return (list || []).indexOf(v) >= 0; }
  // contrast-aware colour: keep a colour where it shows on bg, otherwise the palette colour that shows most
  // (then white or near-black if no palette colour does)
  function best(bg, list) { var b = list[0], bc = -1; list.forEach(function (x) { if (!x) return; var k = contrast(x, bg); if (k > bc + 0.01) { bc = k; b = x; } }); return b; }
  // a saturated colour can stand out by hue at low luminance contrast (lime on white), so colour distance counts too
  function shows(col, bg, min) { var a = hex(col), b = hex(bg); return contrast(col, bg) >= min || Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]) > 80; }
  function vis(col, bg, P, min) {
    min = min || 1.6;
    if (shows(col, bg, min)) return col;
    var b = best(bg, [P.accent, P.accent2, P.ink, P.canvas, P.surface]);
    return contrast(b, bg) >= min ? b : best(bg, [b, "#ffffff", "#16181d"]);
  }
  // the palette as seen on a background: accents and ink swapped for ones that show on it
  function onBg(P, bg) { return Object.assign({}, P, { accent: vis(P.accent, bg, P), accent2: vis(P.accent2, bg, P), ink: vis(P.ink, bg, P, 3) }); }
  function rgb2hsl(c) { var r = hex(c).map(function (v) { return v / 255; }), mx = Math.max.apply(0, r), mn = Math.min.apply(0, r), l = (mx + mn) / 2, h = 0, s = 0, d = mx - mn; if (d) { s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn); h = mx === r[0] ? (r[1] - r[2]) / d + (r[1] < r[2] ? 6 : 0) : mx === r[1] ? (r[2] - r[0]) / d + 2 : (r[0] - r[1]) / d + 4; h *= 60; } return [h, s, l]; }
  function hsl2hex(h, s, l) { var f = function (n) { var k = (n + h / 30) % 12, a = s * Math.min(l, 1 - l); return Math.round(255 * (l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1)))).toString(16).padStart(2, "0"); }; return "#" + f(0) + f(8) + f(4); }

  // ---- icon sets (viewBox 0 0 100 100); every set fills the same eight slots the layouts ask for ------------
  function circ(cx, cy, r) { return "M" + (cx - r) + " " + cy + " a" + r + " " + r + " 0 1 0 " + 2 * r + " 0 a" + r + " " + r + " 0 1 0 " + -2 * r + " 0 Z"; }
  function starPath(n, r1, r2) { var d = ""; for (var i = 0; i < n * 2; i++) { var r = i % 2 ? r2 : r1, a = (Math.PI * i) / n - Math.PI / 2; d += (i ? " L" : "M") + f1(50 + r * Math.cos(a)) + " " + f1(50 + r * Math.sin(a)); } return d + " Z"; }
  function gearPath(n) { var d = "", k = n * 4; for (var i = 0; i < k; i++) { var r = i % 4 < 2 ? 42 : 31, a = (2 * Math.PI * (i + 0.5)) / k; d += (i ? " L" : "M") + f1(50 + r * Math.cos(a)) + " " + f1(50 + r * Math.sin(a)); } return d + " Z " + circ(50, 50, 12); }
  function petalPath(n, r) { var d = ""; for (var i = 0; i < n; i++) { var a = (2 * Math.PI * i) / n - Math.PI / 2, w = Math.PI / n * 0.95, c = r * 0.85; d += "M50 50 Q" + f1(50 + c * Math.cos(a - w)) + " " + f1(50 + c * Math.sin(a - w)) + " " + f1(50 + r * Math.cos(a)) + " " + f1(50 + r * Math.sin(a)) + " Q" + f1(50 + c * Math.cos(a + w)) + " " + f1(50 + c * Math.sin(a + w)) + " 50 50 Z "; } return d + circ(50, 50, 9); }
  function raysPath(n, r1, r2) { var d = ""; for (var i = 0; i < n; i++) { var a = (2 * Math.PI * i) / n; d += " M" + f1(50 + r1 * Math.cos(a)) + " " + f1(50 + r1 * Math.sin(a)) + " L" + f1(50 + r2 * Math.cos(a)) + " " + f1(50 + r2 * Math.sin(a)); } return d; }
  var ICONS = {
    "default": {
      paths: {
        burst: "M50 12 L50 88 M17 30 L83 70 M17 70 L83 30 M30 15 L70 85 M70 15 L30 85 M12 50 L88 50",
        crown: "M16 72 L20 30 L38 52 L50 22 L62 52 L80 30 L84 72 Z M18 84 L82 84",
        star: "M50 10 L61 38 L91 39 L67 58 L76 88 L50 70 L24 88 L33 58 L9 39 L39 38 Z",
        bolt: "M56 8 L24 56 L47 56 L40 92 L76 42 L53 42 Z",
        heart: "M50 86 C20 64 10 46 18 30 C26 14 44 16 50 32 C56 16 74 14 82 30 C90 46 80 64 50 86 Z",
        knot: "M35 30 a18 18 0 1 1 30 0 a18 18 0 1 1 0 40 a18 18 0 1 1 -30 0 a18 18 0 1 1 0 -40 Z M42 42 a10 10 0 1 1 16 16 a10 10 0 1 1 -16 -16 Z",
        smile: "M50 12 a38 38 0 1 1 -0.1 0 Z M34 42 L34 46 M66 42 L66 46 M32 60 Q50 76 68 60",
        arrow: "M14 70 C30 30 60 24 82 34 M70 20 L84 34 L68 46",
      },
      open: ["knot"],
      glyphs: { burst: "✳", crown: "♛", star: "★", bolt: "ϟ", heart: "♥", knot: "✺", smile: "☺", arrow: "↗" },
      pix: {
        heart: ["0110110", "1111111", "1111111", "0111110", "0011100", "0001000"],
        star: ["0001000", "0011100", "1111111", "0111110", "0110110", "1100011"],
        bolt: ["0001110", "0011100", "0111111", "0001110", "0011100", "0110000"],
        burst: ["1001001", "0101010", "0011100", "1111111", "0011100", "0101010", "1001001"],
        crown: ["1001001", "1011101", "1111111", "1111111", "0000000", "1111111"],
        knot: ["0111110", "1100011", "1011101", "1010101", "1011101", "1100011", "0111110"],
      },
    },
    geometric: {
      paths: { burst: circ(50, 50, 38), crown: "M50 12 L90 84 L10 84 Z", star: "M50 8 L92 50 L50 92 L8 50 Z", bolt: "M16 16 H84 V84 H16 Z", heart: "M50 8 L87 29 L87 71 L50 92 L13 71 L13 29 Z", knot: circ(50, 50, 40) + " " + circ(50, 50, 22) + " " + circ(50, 50, 8), smile: "M10 62 A40 40 0 0 1 90 62 Z M10 78 H90", arrow: "M39 10 H61 V39 H90 V61 H61 V90 H39 V61 H10 V39 H39 Z" },
      open: [],
      glyphs: { burst: "●", crown: "▲", star: "◆", bolt: "■", heart: "⬢", knot: "◎", smile: "◐", arrow: "✚" },
      pix: { burst: ["0011100", "0111110", "1111111", "1111111", "1111111", "0111110", "0011100"], crown: ["0001000", "0011100", "0011100", "0111110", "0111110", "1111111"], star: ["0001000", "0011100", "0111110", "1111111", "0111110", "0011100", "0001000"] },
    },
    nature: {
      paths: { burst: circ(50, 50, 18) + raysPath(8, 28, 44), crown: "M18 82 C18 40 44 16 86 14 C86 58 60 82 18 82 Z M18 82 L62 38", star: petalPath(5, 42), bolt: "M50 8 C50 8 82 46 82 64 A32 32 0 0 1 18 64 C18 46 50 8 50 8 Z", heart: "M64 10 A40 40 0 1 0 90 66 A31 31 0 1 1 64 10 Z", knot: "M6 86 L38 30 L54 56 L68 40 L94 86 Z", smile: "M8 40 Q22 24 36 40 T64 40 T92 40 M8 64 Q22 48 36 64 T64 64 T92 64", arrow: "M50 92 V48 M50 60 C30 60 18 46 18 30 C38 30 50 42 50 60 M50 50 C50 32 62 20 84 20 C84 40 70 50 50 50" },
      open: ["arrow"],
      glyphs: { burst: "☀", crown: "❧", star: "✿", bolt: "☁", heart: "☾", knot: "❀", smile: "≈", arrow: "☘" },
      pix: { burst: ["1001001", "0111110", "1111111", "1111111", "1111111", "0111110", "1001001"], crown: ["0000011", "0001111", "0111110", "0111100", "1111000", "1000000"], star: ["0001000", "0011100", "0011100", "0111110", "1111111", "0111110", "0011100"] },
    },
    tech: {
      paths: { burst: "M28 28 H72 V72 H28 Z M41 41 H59 V59 H41 Z M37 28 V12 M50 28 V12 M63 28 V12 M37 72 V88 M50 72 V88 M63 72 V88 M28 37 H12 M28 50 H12 M28 63 H12 M72 37 H88 M72 50 H88 M72 63 H88", crown: "M34 24 L10 50 L34 76 M66 24 L90 50 L66 76 M57 16 L43 84", star: "M24 10 L24 82 L41 66 L53 92 L65 86 L53 61 L76 61 Z", bolt: "M12 42 C36 18 64 18 88 42 M25 56 C40 41 60 41 75 56 M38 70 C46 62 54 62 62 70 " + circ(50, 82, 5), heart: gearPath(8), knot: circ(24, 26, 11) + " " + circ(76, 30, 11) + " " + circ(50, 78, 11) + " M35 27 L65 29 M29 36 L44 68 M71 40 L56 68", smile: "M10 18 H90 V82 H10 Z M24 38 L40 50 L24 62 M48 64 H72", arrow: "M50 10 V46 M29 24 A34 34 0 1 0 71 24" },
      open: ["crown", "arrow"],
      glyphs: { burst: "⌘", crown: "</>", star: "⌥", bolt: "⏻", heart: "⚙", knot: "⌬", smile: "❯_", arrow: "⇥" },
      pix: { burst: ["1010101", "0111110", "1100011", "0101010", "1100011", "0111110", "1010101"], crown: ["0010100", "0100010", "1000001", "0100010", "0010100"], star: ["1000000", "1100000", "1110000", "1111000", "1111100", "1101000", "0000100"] },
    },
    hand: {
      paths: { burst: "M50 50 C54 46 58 52 54 57 C48 63 40 56 42 48 C44 38 58 34 65 42 C74 52 68 68 55 72 C40 76 28 64 28 50 C28 32 44 22 60 24 C78 26 88 42 86 58", crown: "M49 12 L61 39 L90 43 L66 60 L75 88 L50 71 L23 86 L33 59 L11 41 L40 38 Z", star: "M12 78 C28 62 26 38 44 36 C60 34 58 58 44 56 C30 54 40 24 66 22 L86 24 M73 12 L86 24 L74 37", bolt: "M60 8 C52 28 38 40 30 52 C44 50 52 50 60 52 C50 66 44 80 38 92", heart: "M50 84 C28 70 12 55 16 36 C19 21 40 18 49 34 C56 18 78 16 84 32 C90 50 72 70 50 84 Z", knot: "M26 72 C12 72 9 51 23 48 C21 32 42 25 50 38 C56 24 81 28 78 46 C93 46 92 72 76 72 Z", smile: "M50 13 C72 11 88 30 86 52 C84 74 68 88 48 86 C26 84 12 68 14 48 C16 28 30 15 50 13 Z M36 39 L37 47 M63 39 L63 47 M31 60 C42 73 60 72 69 57", arrow: "M14 54 C22 62 31 71 40 79 C54 57 68 37 88 17" },
      open: [],
      glyphs: { burst: "✎", crown: "✌", star: "☞", bolt: "✍", heart: "♡", knot: "☁", smile: "☺", arrow: "✓" },
      pix: null,
    },
    ornament: {
      paths: { burst: starPath(8, 44, 14), crown: "M50 88 C36 72 13 62 15 41 C17 24 38 20 50 37 C62 20 83 24 85 41 C87 62 64 72 50 88 Z M50 37 C48 22 56 12 68 8", star: "M50 12 C64 12 70 25 68 32 C75 30 88 36 88 50 C88 64 75 70 68 68 C70 75 64 88 50 88 C36 88 30 75 32 68 C25 70 12 64 12 50 C12 36 25 30 32 32 C30 25 36 12 50 12 Z " + circ(50, 50, 10), bolt: "M50 16 L74 50 L50 84 L26 50 Z " + circ(50, 6, 4) + " " + circ(50, 94, 4) + " " + circ(12, 50, 4) + " " + circ(88, 50, 4), heart: "M50 92 C50 62 42 38 26 18 M44 66 C32 66 23 59 19 48 C30 48 40 54 44 66 Z M37 47 C27 45 21 37 19 26 C29 28 35 36 37 47 Z M52 72 C62 65 71 65 80 67 C73 75 62 77 52 72 Z M50 54 C58 46 66 44 76 45 C70 54 60 57 50 54 Z", knot: circ(38, 50, 24) + " " + circ(62, 50, 24), smile: starPath(12, 44, 34) + " " + circ(50, 50, 16), arrow: "M8 62 C22 30 44 30 50 50 C56 70 78 70 92 38 " + circ(22, 70, 6) + " " + circ(78, 30, 6) },
      open: ["heart", "knot", "arrow"],
      glyphs: { burst: "✦", crown: "❦", star: "❖", bolt: "✧", heart: "❧", knot: "✤", smile: "⁂", arrow: "§" },
      pix: { burst: ["0001000", "0001000", "0011100", "1111111", "0011100", "0001000", "0001000"], crown: ["0001000", "0010100", "0100010", "1000001", "0100010", "0010100", "0001000"], star: ["1000001", "0100010", "0011100", "0011100", "0011100", "0100010", "1000001"] },
    },
  };
  // Isotype-style pictograms: solid, frontal, countable figures and things
  var MAN = circ(50, 17, 11) + " M35 32 H65 L68 64 H59 V94 H41 V64 H32 Z", WOMAN = circ(50, 17, 11) + " M39 32 H61 L73 72 H59 V94 H41 V72 H27 Z";
  ICONS.pictogram = {
    paths: {
      burst: MAN, heart: WOMAN,
      crown: circ(30, 22, 9) + " M18 35 H42 L44 62 H37 V92 H23 V62 H16 Z " + circ(70, 22, 9) + " M58 35 H82 L84 62 H77 V92 H63 V62 H56 Z",
      star: "M50 10 L92 46 H82 V90 H58 V64 H42 V90 H18 V46 H8 Z",
      bolt: "M8 90 V46 L30 58 V46 L52 58 V46 L70 58 V14 H84 V90 Z",
      knot: "M50 6 L78 48 H62 L84 78 H57 V94 H43 V78 H16 L38 48 H22 Z",
      smile: "M8 72 V56 L24 52 L34 34 H68 L80 52 L92 56 V72 Z " + circ(28, 74, 9) + " " + circ(72, 74, 9),
      arrow: "M6 60 H94 L80 84 H20 Z M28 60 V40 H58 V60 Z M38 40 V24 H48 V40 Z",
    },
    open: [],
    glyphs: { burst: "♂", crown: "⚇", star: "⌂", bolt: "⚒", heart: "♀", knot: "♣", smile: "⛟", arrow: "⚓" },
    pix: { burst: ["0011100", "0011100", "0111110", "1111111", "0111110", "0110110", "0110110"], heart: ["0011100", "0011100", "0111110", "0111110", "1111111", "0010100", "0010100"], star: ["0001000", "0011100", "0111110", "1111111", "0110110", "0110110"] },
  };
  ICONS.hand.pix = ICONS["default"].pix;
  var SLOTS = ["burst", "crown", "star", "bolt", "heart", "knot", "smile", "arrow"];

  function icon(name, R, P, size, k, bg) {
    // shaded 3D icons read on any colour by their own highlights; the rest swap colours that vanish on bg
    if (bg && R.icons !== "emoji3d") P = onBg(P, bg);
    var style = R.icons || "line", set = ICONS[R.iconSet] || ICONS["default"], isDefault = set === ICONS["default"];
    var fill = k % 2 ? P.accent2 : P.accent;
    var s = size;
    if (style === "none") return "";
    if (style === "pixel") {
      var keys = Object.keys(set.pix), g = set.pix[name] || set.pix[keys[(SLOTS.indexOf(name) + keys.length) % keys.length]] || ICONS["default"].pix.star;
      var cols = g[0].length, cell = s / (cols + 1), oy = (s - g.length * cell) / 2;
      return '<svg class="rp-a" style="--i:' + k + '" width="' + s + '" height="' + s + '" viewBox="0 0 ' + s + " " + s + '">' + g.map(function (row, y) { return row.split("").map(function (b, x) { return b === "1" ? '<rect x="' + f1(x * cell + cell / 2) + '" y="' + f1(y * cell + oy) + '" width="' + f1(cell + 0.5) + '" height="' + f1(cell + 0.5) + '" fill="' + fill + '"/>' : ""; }).join(""); }).join("") + "</svg>";
    }
    if (style === "glyph") {
      var ch = set.glyphs[name] || set.glyphs.burst, n = Array.from(ch).length;
      return '<div class="rp-a" style="--i:' + k + ";font:700 " + f1((s * 0.9) / Math.max(1, n * 0.62)) + "px/1 '" + esc((R.fonts || {}).display) + "',serif;color:" + fill + ";white-space:nowrap" + '">' + esc(ch) + (n === 1 ? "︎" : "") + "</div>";
    }
    if (style === "emoji3d" && isDefault) return '<div class="rp-a" style="--i:' + k + ";width:" + s + "px;height:" + s + "px;border-radius:50%;background:radial-gradient(circle at 32% 28%, #fff 0 8%, " + mix(fill, "#ffffff", 0.35) + " 22%, " + fill + " 55%, " + mix(fill, "#000000", 0.35) + ' 100%);box-shadow:0 18px 30px ' + rgba("#000000", 0.18) + '"></div>';
    var d = set.paths[name] || set.paths.star;
    var closed = /Z/.test(d) && !has(set.open, name);
    var sw = style === "doodle" ? 7 : style === "line" ? 4 : 3.5;
    var body, lc = ' stroke-linecap="round" stroke-linejoin="round" fill-rule="evenodd"';
    if (style === "emoji3d") {
      var gid = "rpg" + ++SEQ;
      body = '<defs><radialGradient id="' + gid + '" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="' + mix(fill, "#ffffff", 0.6) + '"/><stop offset=".5" stop-color="' + fill + '"/><stop offset="1" stop-color="' + mix(fill, "#000000", 0.4) + '"/></radialGradient></defs>' +
        '<path d="' + d + '" fill="' + (closed ? "url(#" + gid + ")" : "none") + '" stroke="url(#' + gid + ')" stroke-width="' + (closed ? 4 : 11) + '"' + lc + "/>" +
        '<ellipse cx="36" cy="28" rx="13" ry="6" fill="#fff" opacity=".6" transform="rotate(-28 36 28)"/>';
      return '<svg class="rp-a" style="--i:' + k + ";filter:drop-shadow(0 12px 14px " + rgba("#000000", 0.22) + ')" width="' + s + '" height="' + s + '" viewBox="-6 -6 112 112">' + body + "</svg>";
    }
    if (style === "doodle") {
      // hand-drawn: a thick coloured stroke with the ink outline knocked off-register behind it
      body = '<path d="' + d + '" transform="translate(4 4)" fill="' + (closed ? P.ink : "none") + '" stroke="' + P.ink + '" stroke-width="' + sw + '"' + lc + "/>" +
        '<path d="' + d + '" fill="' + (closed ? fill : "none") + '" stroke="' + (closed ? P.ink : fill) + '" stroke-width="' + (closed ? sw * 0.7 : sw) + '"' + lc + "/>";
    } else if (style === "filled") body = '<path d="' + d + '" fill="' + (closed ? fill : "none") + '" stroke="' + fill + '" stroke-width="' + (closed ? 1.5 : sw * 1.6) + '"' + lc + "/>";
    else if (style === "duotone") body = '<path d="' + d + '" fill="' + (closed ? rgba(fill, 0.55) : "none") + '" stroke="' + P.ink + '" stroke-width="' + sw + '"' + lc + "/>";
    else body = '<path d="' + d + '" fill="none" stroke="' + P.ink + '" stroke-width="' + sw + '"' + lc + "/>";
    return '<svg class="rp-a" style="--i:' + k + '" width="' + s + '" height="' + s + '" viewBox="-6 -6 112 112">' + body + "</svg>";
  }

  // ---- surfaces: every card, pill and panel goes through box() --------------------------------------
  var PAPER = "url('data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240"><filter id="f"><feTurbulence type="fractalNoise" baseFrequency=".75" numOctaves="3" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 .35  0 0 0 0 .3  0 0 0 0 .22  0 0 0 .16 0"/></filter><rect width="100%" height="100%" filter="url(#f)"/></svg>') + "')";
  function shadowCss(R, P, scale) {
    var c = pick(R.shadowColor || "ink", P), k = scale || 1, o = Math.round(10 * k);
    switch (R.shadow) {
      case "hard": return o + "px " + o + "px 0 " + c;
      case "soft": return "0 " + 18 * k + "px " + 44 * k + "px " + rgba(dark(P.canvas) ? "#000000" : c, dark(P.canvas) ? 0.5 : 0.16);
      case "float": return "0 " + 40 * k + "px " + 70 * k + "px -" + 16 * k + "px " + rgba("#000000", dark(P.canvas) ? 0.6 : 0.3);
      case "long": var a = []; for (var i = 1; i <= 22; i++) a.push(i * k + "px " + i * k + "px 0 " + rgba(c, 0.9)); return a.join(",");
      case "inset": return "inset 0 " + 5 * k + "px " + 12 * k + "px " + rgba("#000000", 0.22);
      case "neu": return 12 * k + "px " + 12 * k + "px " + 26 * k + "px " + mix(P.canvas, "#000000", dark(P.canvas) ? 0.45 : 0.16) + ", -" + 12 * k + "px -" + 12 * k + "px " + 26 * k + "px " + mix(P.canvas, "#ffffff", dark(P.canvas) ? 0.08 : 0.7);
      case "glow": return "0 0 " + 24 * k + "px " + rgba(P.accent, 0.8) + ", 0 0 " + 70 * k + "px " + rgba(P.accent, 0.45);
      case "layered": return 7 * k + "px " + 7 * k + "px 0 " + P.accent + ", " + 14 * k + "px " + 14 * k + "px 0 " + c;
      default: return "none";
    }
  }
  // a double rule reads at thumbnail size only when both lines and the gap are a few pixels each
  function doubleW(sw) { return Math.round(Math.max(sw * 2.5, 9)); }
  function box(R, P, extra, opt) {
    opt = opt || {};
    var st = R.stroke || {}, sw = opt.stroke != null ? opt.stroke : st.width || 0, sc = pick(st.color || "ink", P);
    var bg = opt.bg || P.surface;
    var rad = opt.radius != null ? opt.radius : R.radius;
    var css = "border-radius:" + (typeof rad === "number" ? rad + "px" : rad) + ";";
    var sf = R.surface || "flat";
    if (sf === "gradient") css += "background:linear-gradient(135deg," + bg + "," + mix(bg, P.accent, 0.38) + ");";
    else if (sf === "glass") css += "background:" + rgba(dark(P.canvas) ? "#ffffff" : bg, dark(P.canvas) ? 0.1 : 0.42) + ";backdrop-filter:blur(18px) saturate(1.4);-webkit-backdrop-filter:blur(18px) saturate(1.4);";
    else if (sf === "metal") css += "background:linear-gradient(180deg," + mix(bg, "#ffffff", 0.7) + " 0%," + mix(bg, "#9a9a9a", 0.5) + " 48%," + mix(bg, "#5a5a5a", 0.5) + " 52%," + mix(bg, "#ffffff", 0.5) + " 100%);";
    else if (sf === "neon") css += "background:" + rgba(P.canvas, 0.6) + ";";
    else if (sf === "paper") css += "background:" + PAPER + ",linear-gradient(170deg," + mix(bg, "#ffffff", 0.35) + "," + mix(bg, "#000000", 0.04) + ")," + bg + ";";
    else css += "background:" + bg + ";";
    if (sw) {
      var bstyle = st.style === "dashed" ? "dashed" : st.style === "double" ? "double" : "solid";
      css += "border:" + (st.style === "double" ? doubleW(sw) : sw) + "px " + bstyle + " " + sc + ";";
    } else if (sf === "glass") css += "border:1.5px solid " + rgba("#ffffff", dark(P.canvas) ? 0.22 : 0.65) + ";";
    else if (sf === "neon") css += "border:2px solid " + P.accent + ";";
    var sh = opt.shadow === false ? "none" : shadowCss(R, P, opt.shadowScale);
    if (sf === "clay") sh = (sh === "none" ? "" : sh + ",") + "inset -10px -12px 22px " + rgba("#000000", 0.13) + ",inset 10px 12px 22px " + rgba("#ffffff", 0.7);
    if (sf === "neon") sh = "0 0 18px " + rgba(P.accent, 0.7) + ",inset 0 0 14px " + rgba(P.accent, 0.35);
    if (st.style === "sketch" && sw) sh = (sh === "none" ? "" : sh + ",") + "2px 3px 0 -1px " + sc;
    if (sh && sh !== "none") css += "box-shadow:" + sh + ";";
    return css + (extra || "");
  }

  // ---- canvas: texture and motifs -------------------------------------------------------------------
  // textures on top of everything (film grain, print screens, scan lines, sprocket holes)
  function texture(R, P, id) {
    var t = R.texture || "none", ink = P.ink, dk = dark(P.canvas);
    if (t === "grain" || t === "noise" || t === "paper") {
      // paper fibre is grey noise: on a dark canvas it needs more strength to read at all
      var f = t === "paper" ? "0.035" : t === "noise" ? "1.4" : "0.85", op = t === "paper" ? (dk ? 0.2 : 0.09) : t === "noise" ? 0.22 : 0.16;
      return '<svg class="rp-tex" viewBox="0 0 400 225" preserveAspectRatio="none"><filter id="t' + id + '"><feTurbulence type="' + (t === "paper" ? "turbulence" : "fractalNoise") + '" baseFrequency="' + f + '" numOctaves="3" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter><rect width="100%" height="100%" filter="url(#t' + id + ')" opacity="' + op + '"/></svg>';
    }
    if (t === "halftone") return '<div class="rp-tex" style="background-image:radial-gradient(' + rgba(ink, 0.2) + ' 26%, transparent 28%);background-size:14px 14px"></div>';
    // a dot with a halo in the opposite tone reads on light and dark areas alike
    if (t === "dots") { var halo = best(ink, [P.canvas, "#ffffff", "#16181d"]); return '<div class="rp-tex" style="background-image:radial-gradient(' + rgba(ink, 0.2) + " 2px," + rgba(halo, 0.16) + " 2.6px," + rgba(halo, 0.16) + ' 4px,transparent 4.6px);background-size:34px 34px"></div>'; }
    // dark screens get black lines; light ones take the palette colour that shows (green-bar paper, pinstripes)
    if (t === "scanlines" || t === "crt") return '<div class="rp-tex" style="background:linear-gradient(' + (dk ? rgba("#000000", 0.28) : (function (sc) { sc = mix(sc, P.ink, 0.3); return rgba(sc, contrast(sc, P.canvas) < 1.6 ? 0.55 : 0.34); })(best(P.canvas, [P.accent, P.accent2]))) + ' 50%, transparent 50%);background-size:100% 6px' + (t === "crt" ? ";box-shadow:inset 0 0 160px " + rgba("#000000", 0.7) : "") + '"></div>';
    if (t === "riso") return '<div class="rp-tex" style="background-image:radial-gradient(' + rgba(P.accent2 || P.accent, 0.22) + ' 30%, transparent 32%);background-size:10px 10px;mix-blend-mode:multiply"></div>';
    if (t === "hatching") return '<div class="rp-tex" style="background-image:repeating-linear-gradient(45deg,' + rgba(ink, dk ? 0.16 : 0.13) + ' 0 2px,transparent 2px 11px)"></div>';
    if (t === "perforation") {
      // continuous stationery: tractor-feed holes down both margins and a perforated tear line
      var hole = dk ? "#000000" : mix(P.canvas, "#000000", 0.62), holes = "";
      for (var y = 25; y < 900; y += 50) holes += '<circle cx="40" cy="' + y + '" r="11"/><circle cx="1560" cy="' + y + '" r="11"/>';
      return '<svg class="rp-tex" width="1600" height="900" viewBox="0 0 1600 900"><g fill="' + hole + '">' + holes + '</g><path d="M84 0 V900 M1516 0 V900" stroke="' + rgba(ink, 0.4) + '" stroke-width="2" stroke-dasharray="7 7"/></svg>';
    }
    return "";
  }
  // material textures that sit on the canvas, behind everything (so text stays crisp on top)
  function textureBack(R, P, id) {
    var t = R.texture || "none", ink = P.ink, dk = dark(P.canvas), lift = dk ? "#ffffff" : ink;
    var noise = function (freq, oct, table, col, op, seed, type) {
      var fid = "tb" + id + (++SEQ);
      return '<svg class="rp-m" style="inset:0" width="1600" height="900"><filter id="' + fid + '" x="0" y="0" width="1" height="1"><feTurbulence type="' + (type || "fractalNoise") + '" baseFrequency="' + freq + '" numOctaves="' + oct + '" seed="' + (seed || 3) + '"/><feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  1 0 0 0 0"/><feComponentTransfer result="b"><feFuncA type="discrete" tableValues="' + table + '"/></feComponentTransfer><feFlood flood-color="' + col + '"/><feComposite in2="b" operator="in"/></filter><rect width="1600" height="900" filter="url(#' + fid + ')" opacity="' + op + '"/></svg>';
    };
    var band = function (n, on) { var a = []; for (var i = 0; i < n; i++) a.push(on.indexOf(i) >= 0 ? 1 : 0); return a.join(" "); };
    // a drawing grid on the canvas, behind the content: 2px minor lines and a heavier major line every fourth cell
    if (t === "grid") { var ga = dk ? 0.13 : 0.1, gm = dk ? 0.2 : 0.16; return '<div class="rp-m" style="inset:0;background-image:linear-gradient(' + rgba(ink, gm) + " 3px,transparent 3px),linear-gradient(90deg," + rgba(ink, gm) + " 3px,transparent 3px),linear-gradient(" + rgba(ink, ga) + " 2px,transparent 2px),linear-gradient(90deg," + rgba(ink, ga) + ' 2px,transparent 2px);background-size:256px 256px,256px 256px,64px 64px,64px 64px"></div>'; }
    if (t === "checker") return '<div class="rp-m" style="inset:0;background-image:conic-gradient(' + rgba(lift, dk ? 0.1 : 0.08) + " 25%,transparent 0 50%," + rgba(lift, dk ? 0.1 : 0.08) + ' 0 75%,transparent 0);background-size:120px 120px"></div>';
    if (t === "weave") return '<div class="rp-m" style="inset:0;background-image:repeating-linear-gradient(0deg,' + rgba(lift, 0.07) + " 0 3px,transparent 3px 7px),repeating-linear-gradient(90deg," + rgba(lift, 0.07) + " 0 3px,transparent 3px 7px),conic-gradient(" + rgba(lift, 0.05) + " 25%,transparent 0 50%," + rgba(lift, 0.05) + ' 0 75%,transparent 0);background-size:auto,auto,28px 28px"></div>';
    // wood: noise stretched along the grain, cut into thin growth lines
    if (t === "woodgrain") return noise("0.0009 0.014", 2, band(40, [8, 12, 16, 20, 24, 28, 32]), mix(ink, P.accent2, 0.25), dk ? 0.24 : 0.2, 7);
    // stone: a few long wandering veins with branches (a soft blurred copy under each), over a faint cloud
    if (t === "veining") {
      var vr = rng(hash(id + "vn")), vp = "", vb = "", vid = "vb" + id + (++SEQ);
      var walk = function (x, y, ang, len, w) { var d = "M" + f1(x) + " " + f1(y); for (var i = 0; i < len; i++) { ang += (vr() - 0.5) * 0.45; x += Math.cos(ang) * 26; y += Math.sin(ang) * 26; d += " L" + f1(x) + " " + f1(y); if (w > 1.6 && vr() < 0.07) walk(x, y, ang + (vr() < 0.5 ? -0.9 : 0.9), 6 + Math.floor(vr() * 12), w * 0.5); } vp += '<path d="' + d + '" stroke-width="' + f1(w) + '"/>'; vb += '<path d="' + d + '" stroke-width="' + f1(w * 5) + '"/>'; };
      for (var v = 0; v < 5; v++) walk(-40 + vr() * 500, -40 + vr() * 400 + v * 150, 0.35 + vr() * 0.3, 70, 2 + vr() * 2.5);
      return noise("0.0025", 3, band(8, [4, 5, 6]), lift, 0.035, 5) + '<svg class="rp-m" style="inset:0" width="1600" height="900"><filter id="' + vid + '"><feGaussianBlur stdDeviation="6"/></filter><g fill="none" stroke="' + ink + '" stroke-linejoin="round" opacity="' + (dk ? 0.14 : 0.1) + '" filter="url(#' + vid + ')">' + vb + '</g><g fill="none" stroke="' + ink + '" stroke-linejoin="round" opacity="' + (dk ? 0.42 : 0.32) + '">' + vp + "</g></svg>";
    }
    if (t === "terrazzo") {
      var r = rng(hash(id + "tz")), chips = "", cols = [P.accent, P.accent2, ink, P.muted];
      for (var i = 0; i < 150; i++) { var x = r() * 1600, y = r() * 900, s = 5 + Math.pow(r(), 2) * 22, a = r() * 6.28, d = ""; for (var k = 0; k < 5; k++) { var q = a + k * 1.256 + r() * 0.6, rr = s * (0.6 + r() * 0.5); d += (k ? " L" : "M") + f1(x + rr * Math.cos(q)) + " " + f1(y + rr * Math.sin(q)); } chips += '<path d="' + d + ' Z" fill="' + cols[i % 4] + '" opacity="' + f1(0.3 + r() * 0.25) + '"/>'; }
      return '<svg class="rp-m" style="inset:0" width="1600" height="900">' + chips + "</svg>";
    }
    // continuous stationery: alternating bars in the palette colour that shows (green-bar paper)
    if (t === "perforation") return '<div class="rp-m" style="left:84px;right:84px;top:0;bottom:0;background:linear-gradient(' + rgba(best(P.canvas, [P.accent, P.accent2]), dk ? 0.18 : 0.2) + ' 50%,transparent 50%);background-size:100% 120px"></div>';
    return "";
  }

  // rays become a full-strength optical pattern when the palette is black-and-white-level contrast and nothing
  // softens it (op-art); otherwise they stay a background wash
  function opArt(R, P) { return R.motif === "rays" && (R.texture || "none") === "none" && contrast(P.accent, P.canvas) >= 10; }
  function motif(R, P, id) {
    var m = R.motif || "none", out = "", c = P.accent, c2 = P.accent2 || P.accent;
    var spots = [[90, 110], [1480, 140], [1380, 780], [150, 760], [820, 70], [1520, 470]];
    if (m === "stars") spots.forEach(function (p, i) { out += '<svg class="rp-m" style="left:' + p[0] + "px;top:" + p[1] + 'px" width="46" height="46" viewBox="0 0 10 10"><path d="M5 0 L6 4 L10 5 L6 6 L5 10 L4 6 L0 5 L4 4 Z" fill="' + (i % 2 ? c2 : c) + '"/></svg>'; });
    if (m === "squiggles") spots.slice(0, 4).forEach(function (p, i) { out += '<svg class="rp-m" style="left:' + p[0] + "px;top:" + p[1] + 'px" width="140" height="50" viewBox="0 0 140 50"><path d="M5 25 Q20 5 35 25 T65 25 T95 25 T125 25" fill="none" stroke="' + (i % 2 ? c2 : c) + '" stroke-width="6" stroke-linecap="round"/></svg>'; });
    if (m === "grid") { var ga = dark(P.canvas) ? 0.15 : 0.12; out += '<div class="rp-m" style="inset:0;background-image:linear-gradient(' + rgba(P.ink, ga) + ' 2px,transparent 2px),linear-gradient(90deg,' + rgba(P.ink, ga) + ' 2px,transparent 2px);background-size:100px 100px"></div>'; }
    if (m === "crosshair") [[40, 40], [1520, 40], [40, 820], [1520, 820]].forEach(function (p) { out += '<svg class="rp-m" style="left:' + p[0] + "px;top:" + p[1] + 'px" width="40" height="40" viewBox="0 0 40 40"><path d="M20 0 V40 M0 20 H40" stroke="' + P.accent + '" stroke-width="2"/></svg>'; });
    if (m === "stickers") [["NEW", 1330, 90, 12], ["★ 4.9", 120, 740, -10], ["✓", 1420, 700, 8]].forEach(function (s, i) { out += '<div class="rp-m rp-a" style="--i:' + (6 + i) + ";left:" + s[1] + "px;top:" + s[2] + "px;rotate:" + s[3] + "deg;padding:14px 24px;border-radius:999px;background:" + (i % 2 ? c2 : c) + ";color:" + readOn(i % 2 ? c2 : c, P) + ";font:800 30px/1 '" + esc(R.fonts.body) + "',sans-serif;border:4px solid " + P.ink + '">' + s[0] + "</div>"; });
    if (m === "blobs") out += '<svg class="rp-m" style="left:-120px;top:-140px" width="620" height="560" viewBox="0 0 200 180"><path d="M40 20 C90 -10 170 20 180 80 C190 140 120 180 70 160 C20 140 -10 60 40 20 Z" fill="' + rgba(c, 0.55) + '"/></svg><svg class="rp-m" style="right:-140px;bottom:-160px" width="640" height="560" viewBox="0 0 200 180"><path d="M40 20 C90 -10 170 20 180 80 C190 140 120 180 70 160 C20 140 -10 60 40 20 Z" fill="' + rgba(c2, 0.5) + '"/></svg>';
    if (m === "rays") {
      if (opArt(R, P)) {
        // polar checkerboard: rays crossed with rings, inverted where they meet
        var mono = (lum(P.canvas) < 0.02 || lum(P.canvas) > 0.8) && (lum(c) < 0.02 || lum(c) > 0.8);
        out += '<div class="rp-m" style="left:50%;top:50%;width:2400px;height:2400px;margin:-1200px 0 0 -1200px;background:repeating-conic-gradient(' + c + ' 0 6deg, ' + P.canvas + ' 6deg 12deg)"></div>';
        if (mono) out += '<div class="rp-m" style="left:50%;top:50%;width:2400px;height:2400px;margin:-1200px 0 0 -1200px;border-radius:50%;background:repeating-radial-gradient(circle,#ffffff 0 60px,transparent 60px 120px);mix-blend-mode:difference"></div>';
      } else out += '<div class="rp-m" style="left:50%;top:50%;width:2400px;height:2400px;margin:-1200px 0 0 -1200px;background:repeating-conic-gradient(' + rgba(c, (R.texture || "none") === "none" ? 0.24 : 0.2) + ' 0 8deg, transparent 8deg 16deg)"></div>';
    }
    if (m === "confetti") for (var i = 0; i < 26; i++) out += '<i class="rp-m" style="left:' + ((i * 137) % 1560) + "px;top:" + ((i * 89) % 860) + "px;width:" + (10 + (i % 3) * 6) + "px;height:" + (22 - (i % 3) * 4) + "px;background:" + [c, c2, P.ink][i % 3] + ";transform:rotate(" + ((i * 47) % 180) + 'deg)"></i>';
    if (m === "rules") out += '<div class="rp-m" style="left:80px;right:80px;top:70px;height:3px;background:' + P.ink + '"></div><div class="rp-m" style="left:80px;right:80px;bottom:70px;height:1px;background:' + P.ink + '"></div>';
    if (m === "circuit") out += '<svg class="rp-m" style="inset:0" width="1600" height="900"><path d="M0 700 H300 L360 640 H700 M1600 200 H1300 L1240 260 H980 M0 150 H200 L260 210 V380" fill="none" stroke="' + rgba(c, 0.5) + '" stroke-width="3"/><circle cx="700" cy="640" r="8" fill="' + c + '"/><circle cx="980" cy="260" r="8" fill="' + c + '"/><circle cx="260" cy="380" r="8" fill="' + c + '"/></svg>';
    if (m === "orbits") out += '<svg class="rp-m" style="inset:0" width="1600" height="900"><ellipse cx="1180" cy="450" rx="520" ry="200" fill="none" stroke="' + rgba(c, 0.45) + '" stroke-width="2"/><ellipse cx="1180" cy="450" rx="340" ry="340" fill="none" stroke="' + rgba(c2, 0.35) + '" stroke-width="2" stroke-dasharray="8 12"/><circle cx="700" cy="420" r="10" fill="' + c + '"/></svg>';
    if (m === "particles") {
      // a point field with depth: many small faint points, a few large bright ones
      var rp = rng(hash(id + "pt")), dots = "";
      for (var j = 0; j < 150; j++) { var z = Math.pow(rp(), 2.2), r = 1.2 + z * 6, col = [P.ink, c, c2][j % 3]; dots += '<circle cx="' + f1(rp() * 1600) + '" cy="' + f1(rp() * 900) + '" r="' + f1(r) + '" fill="' + col + '" opacity="' + f1(0.18 + z * 0.7) + '"' + (z > 0.55 ? ' filter="url(#pg' + id + ')"' : "") + "/>"; }
      out += '<svg class="rp-m" style="inset:0" width="1600" height="900"><filter id="pg' + id + '" x="-2" y="-2" width="5" height="5"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>' + dots + "</svg>";
    }
    if (m === "refraction") {
      // prismatic beams: split light fanned across the frame
      var spec = "transparent, rgba(255,40,90,.30), rgba(255,190,0,.30), rgba(40,230,140,.30), rgba(30,140,255,.30), rgba(160,60,255,.30), transparent";
      var blend = dark(P.canvas) ? "screen" : "multiply";
      [[-14, 180, 160], [-20, 700, 90], [-9, 1150, 220]].forEach(function (b, k) { out += '<div class="rp-m" style="left:' + b[1] + "px;top:-300px;width:" + b[2] + "px;height:1500px;transform:rotate(" + b[0] + "deg);background:linear-gradient(90deg," + spec + ");mix-blend-mode:" + blend + ";filter:blur(" + (k === 1 ? 1 : 3) + 'px);opacity:.9"></div>'; });
      out += '<svg class="rp-m" style="left:1180px;top:70px" width="260" height="230" viewBox="0 0 260 230"><path d="M130 10 L250 220 H10 Z" fill="' + rgba(P.ink, 0.04) + '" stroke="' + rgba(P.ink, 0.35) + '" stroke-width="2"/></svg>';
    }
    if (m === "contours") {
      // topographic lines around two summits
      var rc = rng(hash(id + "ct")), paths = "";
      [[1180, 300, 11], [260, 760, 8]].forEach(function (s) {
        var ph = rc() * 6;
        for (var k = 1; k <= s[2]; k++) {
          var d = "", rr = k * 34;
          for (var a = 0; a <= 48; a++) { var t = (a / 48) * Math.PI * 2, q = rr * (1 + 0.16 * Math.sin(3 * t + ph) + 0.08 * Math.sin(5 * t + ph * 2 + k * 0.3)); d += (a ? " L" : "M") + f1(s[0] + q * Math.cos(t) * 1.25) + " " + f1(s[1] + q * Math.sin(t)); }
          paths += '<path d="' + d + ' Z" fill="none" stroke="' + rgba(P.ink, k % 5 === 0 ? 0.2 : 0.11) + '" stroke-width="' + (k % 5 === 0 ? 2.2 : 1.4) + '"/>';
        }
      });
      out += '<svg class="rp-m" style="inset:0" width="1600" height="900">' + paths + "</svg>";
    }
    if (m === "tiles") {
      // zellige / azulejo: an eight-point star and cross repeat, glazed in the two accents, grouted in ink
      var tid = "tl" + id + (++SEQ), st8 = "", k8;
      for (k8 = 0; k8 < 16; k8++) { var a8 = (Math.PI * k8) / 8 - Math.PI / 2, r8 = k8 % 2 ? 26 : 44; st8 += (k8 ? " L" : "M") + f1(60 + r8 * Math.cos(a8)) + " " + f1(60 + r8 * Math.sin(a8)); }
      out += '<svg class="rp-m" style="inset:0" width="1600" height="900"><defs><pattern id="' + tid + '" width="120" height="120" patternUnits="userSpaceOnUse"><path d="' + st8 + ' Z" fill="' + rgba(c, 0.34) + '" stroke="' + rgba(P.ink, 0.22) + '" stroke-width="2"/>' +
        '<path d="M0 44 L16 60 L0 76 M120 44 L104 60 L120 76 M44 0 L60 16 L76 0 M44 120 L60 104 L76 120" fill="' + rgba(c2, 0.34) + '" stroke="' + rgba(P.ink, 0.22) + '" stroke-width="2"/>' + '<circle cx="60" cy="60" r="10" fill="' + rgba(c2, 0.4) + '"/><path d="M0 0 H120 V120 H0 Z" fill="none" stroke="' + rgba(P.ink, 0.14) + '" stroke-width="2"/></pattern></defs><rect width="1600" height="900" fill="url(#' + tid + ')"/></svg>';
    }
    if (m === "stripes") {
      // woven strips (kente): narrow bands down both edges, warp stripes alternating with weft blocks
      var strip = function (x) {
        var g = "", cols = [c, c2, P.ink];
        for (var y = 0, n = 0; y < 900; y += 90, n++) {
          if (n % 2) g += '<rect x="' + x + '" y="' + y + '" width="72" height="90" fill="' + cols[n % 3] + '"/><path d="M' + x + " " + (y + 45) + " l18 -18 l18 18 l18 -18 l18 18" + '" fill="none" stroke="' + P.canvas + '" stroke-width="5"/>';
          else for (var k = 0; k < 6; k++) g += '<rect x="' + (x + k * 12) + '" y="' + y + '" width="12" height="90" fill="' + [c, P.ink, c2, P.canvas, c, P.ink][k] + '"/>';
        }
        return g;
      };
      out += '<svg class="rp-m" style="inset:0" width="1600" height="900">' + strip(0) + strip(1528) + "</svg>";
    }
    if (m === "repeat") {
      // a Morris-style repeat: a meandering vine, leaves and a flower, half-dropped across the canvas
      var rid = "rp" + id + (++SEQ), leaf = function (x, y, rot, col) { return '<path d="M0 0 C10 -16 34 -18 44 0 C34 18 10 16 0 0 Z M2 0 H40" transform="translate(' + x + " " + y + ") rotate(" + rot + ')" fill="' + col + '" stroke="' + rgba(P.ink, 0.18) + '" stroke-width="1.5"/>'; };
      var cell = '<path d="M0 100 C50 40 90 160 140 100 S200 60 200 60" fill="none" stroke="' + rgba(P.ink, 0.2) + '" stroke-width="4"/>' + leaf(24, 78, -60, rgba(c2, 0.34)) + leaf(70, 118, 30, rgba(c2, 0.3)) + leaf(118, 112, -40, rgba(c2, 0.34)) + leaf(160, 84, 20, rgba(c2, 0.3)) +
        '<g transform="translate(50 -10)"><path d="' + petalPath(6, 30) + '" fill="' + rgba(c, 0.38) + '" stroke="' + rgba(P.ink, 0.2) + '" stroke-width="1.5"/></g>';
      out += '<svg class="rp-m" style="inset:0" width="1600" height="900"><defs><pattern id="' + rid + '" width="200" height="200" patternUnits="userSpaceOnUse">' + cell + '<g transform="translate(100 100)">' + cell.replace("translate(50 -10)", "translate(-50 -10)") + "</g></pattern></defs><rect width=\"1600\" height=\"900\" fill=\"url(#" + rid + ')"/></svg>';
    }
    if (m === "pictograms") {
      // Isotype: a counting row of identical figures along the foot of the frame, a few picked out
      var man = ICONS.pictogram.paths.burst, row = "", pc = mix(P.canvas, P.ink, 0.3);
      for (var q = 0; q < 20; q++) row += '<path d="' + man + '" transform="translate(' + (60 + q * 76) + ' 800) scale(.7)" fill="' + (q % 7 === 3 ? c : pc) + '"/>';
      out += '<svg class="rp-m" style="inset:0" width="1600" height="900">' + row + "</svg>";
    }
    return out;
  }

  // ---- effects: optional finishing passes on top of everything --------------------------------------
  function effects(R, P, id) {
    var fx = R.effects || [], out = "", dk = dark(P.canvas);
    if (has(fx, "light-leak")) out += '<div class="rp-fx" style="inset:0;background:radial-gradient(ellipse 45% 70% at 0% 30%,' + rgba("#ff6a1a", dk ? 0.55 : 0.32) + ',transparent 70%),radial-gradient(ellipse 30% 45% at 100% 0%,' + rgba("#ff2d55", dk ? 0.45 : 0.22) + ',transparent 70%),radial-gradient(ellipse 25% 35% at 96% 100%,' + rgba("#ffc14d", dk ? 0.35 : 0.2) + ',transparent 70%);mix-blend-mode:' + (dk ? "screen" : "multiply") + '"></div>';
    if (has(fx, "halation")) out += '<div class="rp-fx" style="inset:0;background:radial-gradient(ellipse 60% 55% at 50% 45%,' + rgba("#ff4b2b", dk ? 0.14 : 0.06) + ',transparent 70%);mix-blend-mode:' + (dk ? "screen" : "multiply") + '"></div>';
    if (has(fx, "glint")) out += '<div class="rp-fx rp-glint" style="inset:0;background:linear-gradient(115deg,transparent 36%,' + rgba("#ffffff", 0.0) + " 40%," + rgba("#ffffff", dk ? 0.22 : 0.45) + " 46%," + rgba("#ffffff", dk ? 0.06 : 0.12) + ' 49%,transparent 56%);mix-blend-mode:' + (dk ? "screen" : "soft-light") + '"></div>' +
      [[930, 170, 70], [690, 680, 44], [1250, 330, 30]].map(function (s, k) { return '<svg class="rp-fx rp-a" style="--i:' + (8 + k) + ";left:" + (s[0] - s[2] / 2) + "px;top:" + (s[1] - s[2] / 2) + "px;filter:drop-shadow(0 0 8px " + rgba("#ffffff", 0.9) + ')" width="' + s[2] + '" height="' + s[2] + '" viewBox="0 0 10 10"><path d="M5 0 C5.4 3.6 6.4 4.6 10 5 C6.4 5.4 5.4 6.4 5 10 C4.6 6.4 3.6 5.4 0 5 C3.6 4.6 4.6 3.6 5 0 Z" fill="#ffffff"/></svg>'; }).join("");
    if (has(fx, "noise-bars")) {
      // a signal dropping out: thin displaced lines in the palette and two bands of static
      var r = rng(hash(id + "nb")), bars = "", sid = "nb" + id + (++SEQ);
      bars += '<svg style="position:absolute;inset:0" width="1600" height="900"><filter id="' + sid + '" x="0" y="0" width="1" height="1"><feTurbulence type="fractalNoise" baseFrequency="1.6 .06" numOctaves="1" seed="' + (hash(id) % 97) + '"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="discrete" tableValues="0 .9 0 .7 0"/></feComponentTransfer></filter>';
      [[Math.round(180 + r() * 200), 26 + Math.round(r() * 18)], [Math.round(560 + r() * 220), 14 + Math.round(r() * 14)]].forEach(function (b) { bars += '<rect x="0" y="' + b[0] + '" width="1600" height="' + b[1] + '" filter="url(#' + sid + ')" opacity=".75"/>'; });
      bars += "</svg>";
      for (var i = 0; i < 6; i++) {
        var y = Math.round(90 + r() * 720), h = Math.round(2 + r() * (i % 2 ? 5 : 12)), x = Math.round(-100 + r() * 700), w = Math.round(500 + r() * 1100), col = [P.accent, "#ffffff", P.accent2][i % 3];
        bars += '<i style="position:absolute;left:' + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;background:" + rgba(col, 0.7 + r() * 0.25) + ";mix-blend-mode:" + (dk ? "difference" : "multiply") + '"></i>';
      }
      out += '<div class="rp-fx rp-bars" style="inset:0">' + bars + "</div>";
    }
    if (has(fx, "scanline-heavy")) out += '<div class="rp-fx" style="inset:0;background:linear-gradient(' + rgba("#000000", 0.42) + ' 50%,transparent 50%),repeating-linear-gradient(90deg,' + rgba("#ff0040", 0.06) + ' 0 2px,' + rgba("#00ff80", 0.06) + ' 2px 4px,' + rgba("#0060ff", 0.06) + ' 4px 6px);background-size:100% 8px,auto;box-shadow:inset 0 0 200px ' + rgba("#000000", 0.55) + '"></div>';
    if (has(fx, "grain-heavy")) out += '<svg class="rp-fx" style="inset:0;width:100%;height:100%;mix-blend-mode:' + (dk ? "screen" : "multiply") + '" viewBox="0 0 800 450" preserveAspectRatio="none"><filter id="gh' + id + '"><feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncR type="linear" slope="1.8" intercept="-.4"/><feFuncG type="linear" slope="1.8" intercept="-.4"/><feFuncB type="linear" slope="1.8" intercept="-.4"/></feComponentTransfer></filter><rect width="100%" height="100%" filter="url(#gh' + id + ')" opacity="' + (dk ? 0.3 : 0.42) + '"/></svg>';
    if (has(fx, "vignette")) out += '<div class="rp-fx" style="inset:0;background:radial-gradient(ellipse 75% 75% at 50% 50%,transparent 55%,' + rgba(dk ? "#000000" : mix(P.ink, "#000000", 0.4), dk ? 0.7 : 0.32) + ' 100%)"></div>';
    return out;
  }
  // per-element passes (drop-shadow filters) scoped to this stage
  function fxStyle(R, P, cls) {
    var fx = R.effects || [], f = [], dk = dark(P.canvas);
    if (has(fx, "rgb-split")) f.push("drop-shadow(-4px 0 0 " + rgba("#ff1f4b", 0.75) + ")", "drop-shadow(4px 0 0 " + rgba("#00e0ff", 0.75) + ")");
    if (has(fx, "misregister")) f.push("drop-shadow(6px 5px 0 " + rgba(P.accent2 === P.accent ? mix(P.accent, "#3060ff", 0.6) : P.accent2, 0.6) + ")");
    if (has(fx, "halation") && dk) f.push("drop-shadow(0 0 7px " + rgba("#ff4b2b", 0.55) + ")");
    var depth = has(fx, "blur-depth"), css = "";
    if (f.length) css += "." + cls + " .rp-a:not(.rp-t){filter:" + f.join(" ") + "}";
    if (depth) css += "." + cls + " .rp-back{filter:" + (f.length ? f.join(" ") + " " : "") + "blur(5px)}";
    return css ? "<style>" + css + "</style>" : "";
  }
  function extrudeShadow(P) {
    var ex = contrast(P.accent, P.ink) > 1.6 ? P.accent : P.accent2, a = [];
    for (var i = 1; i <= 12; i++) a.push(f1(i * 0.9) / 100 + "em " + f1(i * 0.9) / 100 + "em 0 " + mix(ex, "#000000", i < 11 ? 0.12 : 0.45));
    a.push("0.14em 0.16em 0.12em " + rgba("#000000", 0.28));
    return a.join(",");
  }

  // ---- layouts ----------------------------------------------------------------------------------------
  function headSize(t, base) { var n = String(t).length; return Math.round(base * (n > 64 ? 0.44 : n > 48 ? 0.52 : n > 34 ? 0.62 : n > 24 ? 0.78 : n > 16 ? 0.9 : 1)); }
  // rough advance width of the display face, per em per character, to fit single words to a width
  function charW(F) {
    var n = String(F.display || ""), w = F["case"] === "upper" ? 0.68 : 0.57;
    if (/Mono One|Monoton|Syncopate|Unbounded|Dela Gothic|Bungee|Press Start|Orbitron|Michroma|Krona|Zen Dots|Syne|Rubik Mono|Lexend Zetta|Shrikhand|Luckiest|Bowlby|Chango|Rampart/i.test(n)) w += 0.2;
    if (/Bebas|Condensed|Compressed|Oswald|Anton|Big Shoulders|League Gothic|Six Caps|Saira Extra|Fjalla|Teko|Antonio|Pathway|Barlow Semi/i.test(n)) w -= 0.15;
    return w + (F.tracking || 0);
  }
  function chromeOf(R) {
    if (R.chrome && R.chrome !== "auto") return R.chrome;
    if (R.surface === "paper" || R.texture === "paper") return "none";
    if (has(["scanlines", "crt"], R.texture) || R.icons === "pixel" || (R.stroke || {}).style === "double" || R.radius <= 2) return "classic";
    return "mac";
  }

  function ctx(R, P, o) {
    var F = R.fonts || {}, fx = R.effects || [], LB = R.labels || {};
    var dens = { airy: 0, balanced: 1, dense: 2 }[R.density]; if (dens == null) dens = 1;
    var ts = [];
    if (has(fx, "extrude")) ts.push(extrudeShadow(P));
    if (has(fx, "halation")) ts.push("0 0 .06em " + rgba("#ff5a36", dark(P.canvas) ? 0.6 : 0.3), "0 0 .28em " + rgba("#ff3b1f", dark(P.canvas) ? 0.32 : 0.14));
    var c = { R: R, P: P, F: F, hl: o.headline, sub: o.sub, dens: dens, st: R.stroke || {} };
    // extrusion is for hero-size type; smaller display text keeps only the glow passes
    c.small = ts.length ? ";text-shadow:" + (ts.slice(has(fx, "extrude") ? 1 : 0).join(",") || "none") : "";
    c.sw = c.st.width || 0; c.sc = pick(c.st.color || "ink", P);
    c.disp = "font-family:'" + esc(F.display) + "',sans-serif;font-weight:" + (F.displayWeight || 800) + (F.italic ? ";font-style:italic" : "") + ";letter-spacing:" + (F.tracking != null ? F.tracking : -0.02) + "em;text-transform:" + ({ upper: "uppercase", lower: "lowercase" }[F["case"]] || "none") + ";line-height:" + (/Press Start|Silkscreen|Pixelify|Jersey|Tiny5|Micro 5|DotGothic/i.test(F.display || "") ? 1.25 : 0.98) + ";color:" + P.ink + (ts.length ? ";text-shadow:" + ts.join(",") : "");
    c.body = "font-family:'" + esc(F.body) + "',sans-serif;color:" + P.ink + (F.bodyWeight && F.bodyWeight !== 400 ? ";font-weight:" + F.bodyWeight : "");
    // small print (captions, readouts, labels) uses the style's mono face when it names one, else its body face;
    // only a terminal falls back to a real monospace
    c.monoFam = F.mono || F.body;
    c.mono = "font-family:'" + esc(c.monoFam) + "',ui-monospace,monospace";
    c.code = "font-family:'" + esc(F.mono || "JetBrains Mono") + "',ui-monospace,monospace";
    c.onS = readOn(P.surface, P); c.onA = readOn(P.accent, P); c.onA2 = readOn(P.accent2, P);
    // the accent where it has to read on the canvas by itself
    c.acc = contrast(P.accent, P.canvas) >= 2.2 ? P.accent : contrast(P.accent2, P.canvas) >= 2.2 ? P.accent2 : P.ink;
    // a label the style leaves out gets the layout's neutral default; an empty string hides the element
    c.lab = function (k, d) { var v = LB[k]; if (v == null) return d == null ? "" : d; if (v === "" || (Array.isArray(v) && !v.length)) return ""; return Array.isArray(v) ? v.join(" · ") : String(v); };
    c.labs = function (k, d) { var v = LB[k]; if (v == null) return d; if (v === "" || (Array.isArray(v) && !v.length)) return []; return Array.isArray(v) ? v.map(String) : String(v).split(/\s*[·|]\s*/).filter(Boolean); };
    c.hidden = function (k) { var v = LB[k]; return v === "" || (Array.isArray(v) && !v.length); };
    // chart furniture: the style's choice, or the layout's own
    c.chartKind = function (def) { return R.chart && R.chart !== "auto" ? R.chart : def; };
    c.chart = function (kind, h, bg, opt) { return chart(kind, h, bg || P.surface, c, opt); };
    c.box = function (extra, opt) { return box(R, P, extra, opt); };
    var hScale = dens === 0 ? 0.9 : 1;
    c.H1 = function (size, extra) { var px = Math.round(headSize(c.hl, size) * hScale); return '<div class="rp-a" style="--i:0;' + c.disp + (px < 90 ? c.small : "") + ";font-size:" + px + "px;" + (extra || "") + '">' + esc(c.hl) + "</div>"; };
    c.SUB = function (size, extra) { return c.sub ? '<div class="rp-a rp-t" style="--i:1;' + c.body + ";opacity:.78;font-size:" + size + "px;line-height:1.35;" + (extra || "") + '">' + esc(c.sub) + "</div>" : ""; };
    c.kick = function (text, i, extra) { return text ? '<div class="rp-a rp-t" style="--i:' + (i || 0) + ";" + c.body + ";font-size:22px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:" + c.acc + ";" + (extra || "") + '">' + esc(text) + "</div>" : ""; };
    c.bars = function (h, n, col) { var v = [0.45, 0.72, 0.55, 0.95, 0.62, 0.8, 0.5, 0.68, 0.84]; n = n || 5; return '<div style="display:flex;align-items:flex-end;gap:' + (n > 6 ? 9 : 12) + "px;height:" + h + 'px">' + v.slice(0, n).map(function (x, i) { return '<b style="flex:1;height:' + x * 100 + "%;background:" + (i === 3 ? vis(P.accent, P.surface, P, 1.25) : col || c.onS) + ";opacity:" + (i === 3 ? 1 : 0.82) + ";border-radius:" + Math.min(R.radius, 8) + 'px"></b>'; }).join("") + "</div>"; };
    c.icon = function (name, size, k, bg) { return icon(name, R, P, size, k, bg || P.canvas); };
    c.icons = function (size, gap) { return '<div style="display:flex;align-items:center;gap:' + (gap || 60) + 'px">' + icon("burst", R, P, size, 2, P.canvas) + icon("crown", R, P, size * 0.9, 3, P.canvas) + icon("knot", R, P, size, 4, P.canvas) + "</div>"; };
    // pills are pills, unless the style asks for square panels (radius under 12: sign panels, label tape)
    c.pillR = R.radius < 12 ? R.radius : Math.max(R.radius, 60);
    c.pill = function (inner, i, extra) { return '<div class="rp-a" style="--i:' + i + ";" + box(R, P, "display:flex;align-items:center;gap:28px;padding:0 48px;height:118px;" + (extra || ""), { radius: c.pillR }) + '">' + inner + "</div>"; };
    c.dot = function (col) { return '<i style="display:block;width:36px;height:36px;border-radius:50%;background:' + col + ";border:" + Math.max(3, c.sw) + "px solid " + P.ink + '"></i>'; };
    // a page frame: the double rule of posters, certificates and broadsheets
    c.frame = function (inset) { return c.st.style === "double" ? '<div class="rp-m" style="inset:' + (inset || 34) + "px;border:" + doubleW(Math.max(c.sw, 2)) + "px double " + c.sc + ";border-radius:" + Math.min(R.radius, 24) + 'px"></div>' : ""; };
    // the emblem over a headline: an icon slot by name, a typographic mark, or "" for none (default: the star slot)
    c.emblem = function (size, k, bg) {
      var e = LB.emblem;
      if (e === "") return "";
      if (e == null || SLOTS.indexOf(e) >= 0) return icon(e || "star", R, P, size, k, bg);
      return '<div class="rp-a" style="--i:' + k + ";" + c.disp + ";font-size:" + Math.round(size * (Array.from(String(e)).length > 2 ? 0.42 : 0.8)) + "px;line-height:1;color:" + vis(P.accent, bg, P, 2) + ";text-shadow:none;white-space:nowrap" + '">' + esc(e) + (Array.from(String(e)).length === 1 ? "︎" : "") + "</div>";
    };
    c.cw = charW(F);
    c.fit = function (text, width, max) { return Math.round(Math.min(max, width / Math.max(1, String(text).length * c.cw))); };
    return c;
  }

  // ---- charts: one vocabulary for every layout that carries a chart (recipe.chart) ---------------------
  function chart(kind, h, bg, c, opt) {
    opt = opt || {};
    if (!kind || kind === "none") return "";
    var P = c.P, w = opt.w || 600, on = readOn(bg, P), acc = vis(P.accent, bg, P), acc2 = vis(P.accent2, bg, P);
    if (kind === "bars") return c.bars(h, opt.n || 5);
    if (kind === "line" && opt.line) return opt.line;
    var ns = ' vector-effect="non-scaling-stroke"', r = rng(hash((c.R.palette || {}).accent + kind)), k, pts = [], out = "";
    var svg = function (inner) { return '<svg width="100%" height="' + h + '" viewBox="0 0 ' + w + " " + h + '" preserveAspectRatio="none" style="display:block">' + inner + "</svg>"; };
    var path = function (p) { return p.map(function (q, i) { return (i ? "L" : "M") + f1(q[0]) + " " + f1(q[1]); }).join(" "); };
    var axis = '<path d="M0 ' + (h - 1) + " H" + w + '" stroke="' + rgba(on, 0.3) + '" stroke-width="2"' + ns + "/>";
    if (kind === "line") {
      // a smooth rising trend with a soft area under it
      for (k = 0; k <= 24; k++) { var x = (w * k) / 24, t = k / 24; pts.push([x, h * (0.86 - 0.7 * t) + h * 0.1 * Math.sin(t * 9 + 1) * (1 - t * 0.5)]); }
      return svg('<path d="' + path(pts) + " V" + h + ' H0 Z" fill="' + rgba(acc, 0.18) + '"/><path d="' + path(pts) + '" fill="none" stroke="' + acc + '" stroke-width="5" stroke-linejoin="round"' + ns + "/>" + axis);
    }
    if (kind === "wave") {
      // periodic signals: a sine and its harmonic
      var p2 = [];
      for (k = 0; k <= 150; k++) { var xx = (w * k) / 150; pts.push([xx, h / 2 - h * 0.36 * Math.sin((k / 150) * Math.PI * 6)]); p2.push([xx, h / 2 - h * 0.2 * Math.sin((k / 150) * Math.PI * 12 + 1.2)]); }
      return svg('<path d="M0 ' + h / 2 + " H" + w + '" stroke="' + rgba(on, 0.25) + '" stroke-width="2"' + ns + '/><path d="' + path(p2) + '" fill="none" stroke="' + acc2 + '" stroke-width="3" stroke-dasharray="10 8"' + ns + '/><path d="' + path(pts) + '" fill="none" stroke="' + acc + '" stroke-width="5"' + ns + "/>");
    }
    if (kind === "jagged") {
      // a seismograph trace: quiet, a burst, the tail
      for (k = 0; k <= 220; k++) { var f = k / 220, env = 0.06 + 0.9 * Math.exp(-Math.pow((f - 0.58) / 0.09, 2)) + 0.25 * Math.exp(-Math.pow((f - 0.3) / 0.04, 2)); pts.push([(w * k) / 220, h / 2 + (r() * 2 - 1) * h * 0.46 * env]); }
      return svg('<path d="M0 ' + h / 2 + " H" + w + '" stroke="' + rgba(on, 0.25) + '" stroke-width="2"' + ns + '/><path d="' + path(pts) + '" fill="none" stroke="' + acc + '" stroke-width="2.5" stroke-linejoin="miter"' + ns + "/>");
    }
    if (kind === "spectrum") {
      // an audio spectrum: many thin bars, loud lows, falling highs, the peaks lit
      var nb = 48, bw = w / nb;
      for (k = 0; k < nb; k++) { var v = (0.22 + 0.78 * Math.exp(-(k / nb) * 2.4)) * (0.5 + 0.5 * r()), bh = v * h; out += '<rect x="' + f1(k * bw + bw * 0.18) + '" y="' + f1(h - bh) + '" width="' + f1(bw * 0.64) + '" height="' + f1(bh) + '" fill="' + (v > 0.62 ? acc : rgba(on, 0.72)) + '"/>'; }
      return svg(out + axis);
    }
    if (kind === "steps") {
      var vals = [0.2, 0.2, 0.45, 0.38, 0.62, 0.55, 0.8, 0.74, 0.92], sw = w / vals.length, y0 = h;
      vals.forEach(function (v, i) { var y = h - v * h * 0.9; pts.push([i * sw, i ? y0 : y], [i * sw, y], [(i + 1) * sw, y]); y0 = y; });
      return svg('<path d="' + path(pts) + " V" + h + ' H0 Z" fill="' + rgba(acc, 0.16) + '"/><path d="' + path(pts) + '" fill="none" stroke="' + acc + '" stroke-width="5"' + ns + "/>" + axis);
    }
    if (kind === "scatter") {
      for (k = 0; k < 42; k++) { var sx = r(), sy = Math.min(0.95, Math.max(0.05, sx * 0.75 + 0.12 + (r() - 0.5) * 0.35)); out += '<circle cx="' + f1(sx * w) + '" cy="' + f1(h - sy * h) + '" r="' + (k % 9 ? 6 : 9) + '" fill="' + (k % 9 ? rgba(on, 0.55) : acc) + '"/>'; }
      return svg(out + '<path d="M0 ' + f1(h * 0.83) + " L" + w + " " + f1(h * 0.1) + '" stroke="' + acc + '" stroke-width="3" stroke-dasharray="10 8"' + ns + "/>" + axis);
    }
    if (kind === "donut") {
      var rr = h * 0.38, cx = rr + h * 0.1, cy = h / 2, sw2 = h * 0.16, a0 = -Math.PI / 2, segs = [[0.46, acc], [0.32, acc2 === acc ? rgba(on, 0.6) : acc2], [0.22, rgba(on, 0.28)]];
      segs.forEach(function (sg, i) { var a1 = a0 + sg[0] * Math.PI * 2 - 0.05; out += '<path d="M' + f1(cx + rr * Math.cos(a0)) + " " + f1(cy + rr * Math.sin(a0)) + " A" + f1(rr) + " " + f1(rr) + " 0 " + (sg[0] > 0.5 ? 1 : 0) + " 1 " + f1(cx + rr * Math.cos(a1)) + " " + f1(cy + rr * Math.sin(a1)) + '" fill="none" stroke="' + sg[1] + '" stroke-width="' + f1(sw2) + '"/>'; out += '<rect x="' + f1(cx + rr + h * 0.3) + '" y="' + f1(h * 0.22 + i * h * 0.22) + '" width="' + f1(h * 0.12) + '" height="' + f1(h * 0.12) + '" fill="' + sg[1] + '"/><rect x="' + f1(cx + rr + h * 0.5) + '" y="' + f1(h * 0.25 + i * h * 0.22) + '" width="' + f1(Math.max(40, w - cx - rr - h * 0.7) * [0.8, 0.6, 0.45][i]) + '" height="' + f1(h * 0.06) + '" fill="' + rgba(on, 0.35) + '"/>'; a0 = a1 + 0.05; });
      return svg(out);
    }
    return c.bars(h, opt.n || 5);
  }

  var LAYOUTS = {};
  LAYOUTS.pills = function (c) {
    var P = c.P, hl = c.hl;
    return '<div style="position:absolute;left:170px;right:170px;top:60px;bottom:60px;display:flex;flex-direction:column;justify-content:center;gap:34px">' +
      '<div style="display:flex;justify-content:center;margin-bottom:10px">' + c.icons(150, 90) + "</div>" +
      (function () {
        var px = Math.max(34, Math.min(headSize(hl, 58), Math.floor(1080 / Math.max(1, String(hl).length * (c.cw - 0.02))))), wrap = String(hl).length * c.cw * px > 1100;
        return c.pill(c.dot(P.accent) + '<span style="' + c.disp + c.small + ";font-size:" + px + "px;letter-spacing:-.01em;line-height:1.05;" + (wrap ? "" : "white-space:nowrap;") + "color:" + c.onS + '">' + esc(hl) + "</span>", 5, wrap ? "height:auto;min-height:118px;padding-top:18px;padding-bottom:18px" : "");
      })() +
      (c.chartKind("auto") === "none" ? "" : c.pill('<div style="flex:1;height:10px;border-radius:5px;background:' + c.onS + ';position:relative"><i style="position:absolute;left:66%;top:50%;width:62px;height:62px;margin:-31px 0 0 -31px;border-radius:' + (c.pillR < 12 ? c.pillR + "px" : "50%") + ";background:" + P.surface + ";border:" + Math.max(4, c.sw) + "px solid " + P.ink + '"></i></div>', 6)) +
      c.pill('<i style="display:block;width:48px;height:48px;border-radius:' + (c.pillR < 12 ? c.pillR + "px" : "50%") + ";border:5px solid " + c.onS + '"></i><span style="' + c.body + ";font-size:46px;color:" + (P.muted || rgba(c.onS, 0.45)) + ';font-weight:600">' + esc(c.sub || c.lab("hint", "search…")) + "</span>", 7) + "</div>";
  };
  LAYOUTS.cards = function (c) {
    var P = c.P, kind = c.chartKind("bars"), title = c.lab("title", "This week");
    return '<div style="position:absolute;left:110px;top:0;bottom:0;width:640px;display:flex;flex-direction:column;justify-content:center;gap:28px">' + c.icon("burst", 90, 1) + c.H1(104) + c.SUB(34) + "</div>" +
      (kind === "none" ? "" : '<div class="rp-a" style="--i:3;position:absolute;left:840px;top:170px;width:560px;' + c.box("padding:40px;color:" + c.onS) + '">' + (title ? '<div style="' + c.body + ";color:" + c.onS + ';font-size:28px;font-weight:700;margin-bottom:26px;opacity:.8">' + esc(title) + "</div>" : "") + c.chart(kind, 260, P.surface, { n: [4, 5, 7][c.dens], w: 480 }) + "</div>") +
      '<div class="rp-a" style="--i:4;position:absolute;left:1060px;top:560px;width:430px;' + c.box("padding:30px 34px;display:flex;align-items:center;gap:22px", { bg: P.accent }) + '"><i style="width:96px;height:52px;border-radius:26px;background:' + P.ink + ';position:relative;display:block"><b style="position:absolute;right:6px;top:6px;width:40px;height:40px;border-radius:50%;background:' + P.surface + '"></b></i><span style="' + c.body + ";font-size:30px;font-weight:700;color:" + c.onA + '">' + esc(c.lab("badge", "Live")) + "</span></div>";
  };
  LAYOUTS.bento = function (c) {
    var P = c.P, R = c.R, hl = c.hl, onS = c.onS, kind = c.chartKind("bars"), people = c.lab("people", "4 collaborators");
    var t = function (x, y, w, h, inner, i, bg) { return '<div class="rp-a" style="--i:' + i + ";position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;" + c.box("padding:34px;overflow:hidden;color:" + (bg ? readOn(bg, P) : onS), { bg: bg }) + '">' + inner + "</div>"; };
    // swatches that would vanish into the tile get a ring in the tile's reading colour
    var swatch = function (col) { var ring = c.sw ? c.sw + "px solid " + P.ink : contrast(col, P.surface) < 1.35 ? "4px solid " + onS : "0"; return '<i style="width:110px;height:110px;border-radius:50%;background:' + col + ";border:" + ring + '"></i>'; };
    var fx = kind === "none" ? 80 : 650;
    return t(80, 80, 820, 460, '<div style="' + c.disp + ";font-size:" + headSize(hl, 92) + "px;color:" + onS + '">' + esc(hl) + "</div>" + c.SUB(30, "margin-top:22px;color:" + onS), 0) +
      t(930, 80, 590, 220, '<div style="' + c.disp + ";font-size:110px;color:" + c.onA + '">' + esc(c.lab("stat", "+32%")) + "</div>", 1, P.accent) +
      t(930, 320, 280, 220, '<div style="display:grid;place-items:center;height:100%">' + c.icon("star", 120, 2, P.surface) + "</div>", 2) +
      t(1240, 320, 280, 220, '<div style="display:grid;place-items:center;height:100%">' + c.icon("bolt", 120, 3, P.accent2) + "</div>", 3, P.accent2) +
      (kind === "none" ? "" : t(80, 570, 540, 250, c.chart(kind, 170, P.surface, { n: [5, 7, 9][c.dens], w: 470 }), 4)) +
      // chart "none" means no UI furniture at all: the footer is a plain field (the palette swatches were furniture too)
      t(fx, 570, 1520 - fx, 250, '<div style="display:flex;gap:18px;align-items:center;height:100%">' + (kind === "none" ? "" : [P.accent, P.accent2, P.ink, P.muted].map(swatch).join("")) + (kind === "none" ? (people = c.lab("people", ""), "") : "") + (people ? '<span style="' + c.body + ";font-size:34px;font-weight:700;color:" + onS + '">' + esc(people) + "</span>" : "") + "</div>", 5);
  };
  LAYOUTS.poster = function (c) {
    var P = c.P, R = c.R, strong = opArt(R, P), panel = !strong && (R.surface || "flat") !== "flat";
    var ink = panel ? c.onS : P.ink;
    var inner = (strong ? "" : c.emblem(150, 2, panel ? P.surface : P.canvas)) + c.H1(strong ? 118 : 170, panel ? "color:" + ink : "") + c.SUB(strong ? 32 : 40, "max-width:1000px" + (panel ? ";color:" + ink : ""));
    if (strong) inner = '<div class="rp-a" style="--i:0;display:flex;flex-direction:column;align-items:center;gap:24px;padding:44px 64px;background:' + P.canvas + ";border:8px solid " + P.accent + '">' + inner + "</div>";
    else if (panel) inner = '<div class="rp-a" style="--i:0;display:flex;flex-direction:column;align-items:center;gap:30px;padding:64px 96px;max-width:1340px;' + c.box("", { radius: Math.min(R.radius, 48) }) + '">' + inner + "</div>";
    return c.frame() + '<div style="position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:36px;padding:0 120px">' + inner + "</div>";
  };
  LAYOUTS.hud = function (c) {
    var P = c.P, mono = c.mono, a2 = P.accent2 || P.accent;
    var label = c.lab("hud", c.lab("kicker", "")), reads = c.labs("readouts", null);
    // readouts only when the style names them; by default three quiet meters
    var meters = reads && !reads.length ? "" : reads ? reads.slice(0, 4).map(function (x) { return '<span style="border-left:3px solid ' + P.accent + ';padding-left:14px">' + esc(x) + "</span>"; }).join("")
      : [0.72, 0.4, 0.88].map(function (v, i) { return '<span style="display:flex;flex-direction:column;gap:10px;width:150px"><i style="display:block;height:6px;background:' + rgba(P.accent, 0.22) + '"><b style="display:block;height:100%;width:' + v * 100 + "%;background:" + (i === 1 ? a2 : P.accent) + '"></b></i><i style="display:block;height:4px;width:' + (40 + i * 18) + "%;background:" + rgba(P.ink, 0.25) + '"></i></span>'; }).join("");
    return '<div style="position:absolute;inset:60px;border:2px solid ' + rgba(P.accent, 0.6) + '"></div>' +
      '<svg class="rp-a" style="--i:2;position:absolute;left:980px;top:170px" width="560" height="560" viewBox="0 0 200 200"><circle cx="100" cy="100" r="90" fill="none" stroke="' + P.accent + '" stroke-width="1.2" stroke-dasharray="4 6"/><circle cx="100" cy="100" r="62" fill="none" stroke="' + P.accent + '" stroke-width="2"/><path d="M100 10 V40 M100 160 V190 M10 100 H40 M160 100 H190" stroke="' + P.accent + '" stroke-width="2"/><path d="M100 38 A62 62 0 0 1 162 100" fill="none" stroke="' + a2 + '" stroke-width="6"/></svg>' +
      '<div style="position:absolute;left:130px;top:0;bottom:0;width:820px;display:flex;flex-direction:column;justify-content:center;gap:26px">' + (label ? '<div class="rp-a" style="--i:1;' + mono + ";color:" + P.accent + ';font-size:24px;letter-spacing:.3em">' + esc(label) + "</div>" : "") + c.H1(96) + c.SUB(30) +
      '<div class="rp-a" style="--i:3;display:flex;gap:' + (reads ? 40 : 30) + "px;" + mono + ";color:" + P.accent + ";font-size:" + (reads ? 34 : 30) + 'px;margin-top:8px">' + meters + "</div></div>";
  };
  LAYOUTS.terminal = function (c) {
    // a console needs a real monospace; a bare typed page (screenplay, typewriter) uses the style's mono or body face
    var P = c.P, R = c.R, onS = c.onS, ch = chromeOf(R), paper = ch === "none", mono = paper ? c.mono : c.code;
    var title = c.lab("window", paper ? "" : "~/project — zsh");
    var lines = c.labs("lines", ["render --all", "✓ 12 scenes checked", "✓ done in 0.8s"]);
    var bar = "";
    if (ch === "mac") bar = '<div style="height:62px;display:flex;align-items:center;gap:14px;padding:0 26px;border-bottom:2px solid ' + rgba(onS, 0.18) + '">' + ["#ff5f57", "#febc2e", "#28c840"].map(function (col) { return '<i style="width:20px;height:20px;border-radius:50%;background:' + col + '"></i>'; }).join("") + '<span style="' + mono + ";color:" + rgba(onS, 0.6) + ';font-size:22px;margin-left:16px">' + esc(title) + "</span></div>";
    else if (ch === "classic") bar = '<div style="height:58px;position:relative;display:flex;align-items:center;padding:0 22px;border-bottom:' + Math.max(2, c.sw) + "px solid " + onS + ";background:repeating-linear-gradient(" + onS + " 0 2px,transparent 2px 7px) 0 14px/100% 30px no-repeat" + '"><i style="width:30px;height:30px;background:' + P.surface + ";border:3px solid " + onS + ';display:block"></i><span style="position:absolute;left:50%;transform:translateX(-50%);padding:0 22px;background:' + P.surface + ";" + mono + ";font-weight:600;color:" + onS + ';font-size:24px">' + esc(title || "untitled") + "</span></div>";
    else if (ch === "tabs") bar = '<div style="height:62px;display:flex;align-items:flex-end;gap:6px;padding:0 20px;background:' + mix(P.surface, onS, 0.08) + '"><span style="padding:12px 30px;border-radius:' + Math.min(R.radius, 12) + "px " + Math.min(R.radius, 12) + "px 0 0;background:" + P.surface + ";" + mono + ";color:" + onS + ';font-size:22px">' + esc(title || "untitled") + '</span><span style="padding:12px 30px;' + mono + ";color:" + rgba(onS, 0.5) + ';font-size:22px">+</span></div>';
    var pr = paper ? "" : '<span style="color:' + P.accent + '">❯</span> ';
    var body = paper
      ? '<div style="position:absolute;right:60px;top:40px;' + mono + ";font-size:26px;color:" + rgba(onS, 0.6) + '">1.</div><div style="padding:84px 120px;' + mono + ";font-size:34px;line-height:1.75;color:" + onS + '"><div style="text-transform:uppercase;font-weight:600">' + esc(c.hl) + "</div>" + (title ? '<div style="color:' + rgba(onS, 0.6) + '">' + esc(title) + "</div>" : "") + lines.map(function (l) { return "<div>" + esc(l.replace(/^[✓❯>$#]\s*/, "")) + "</div>"; }).join("") + '<div><i style="display:inline-block;width:18px;height:38px;vertical-align:middle;background:' + P.accent + '"></i></div></div>'
      : '<div style="padding:44px 50px;' + mono + ";font-size:36px;line-height:1.7;color:" + onS + '"><div style="color:' + rgba(onS, 0.5) + '"># ' + esc(c.hl) + "</div>" + lines.map(function (l, i) { return i === 0 ? "<div>" + pr + esc(l) + "</div>" : '<div style="color:' + rgba(onS, 0.72) + '">' + esc(l) + "</div>"; }).join("") + "<div>" + pr + '<i style="display:inline-block;width:20px;height:40px;vertical-align:middle;background:' + P.accent + '"></i></div></div>';
    return '<div class="rp-a" style="--i:0;position:absolute;left:140px;top:110px;width:1320px;height:680px;' + c.box("overflow:hidden;position:absolute", { bg: P.surface }) + '">' + bar + body + "</div>";
  };
  LAYOUTS.window = function (c) {
    var P = c.P, R = c.R, onS = c.onS, onA = c.onA, ch = has(["mac", "tabs", "none"], R.chrome) ? R.chrome : "classic", kind = c.chartKind("bars");
    var win = function (x, y, w, h, title, inner, i, back) {
      var bar = ch === "mac"
        ? '<div style="height:54px;display:flex;align-items:center;gap:12px;padding:0 20px;background:' + mix(P.surface, onS, 0.06) + ";border-bottom:" + Math.max(1, c.sw) + "px solid " + rgba(onS, 0.2) + ";" + c.body + ";font-size:22px;font-weight:600;color:" + rgba(onS, 0.7) + '">' + ["#ff5f57", "#febc2e", "#28c840"].map(function (col) { return '<i style="width:18px;height:18px;border-radius:50%;background:' + col + '"></i>'; }).join("") + '<span style="margin-left:10px">' + esc(title) + "</span></div>"
        : ch === "classic" ? '<div style="height:54px;display:flex;align-items:center;justify-content:space-between;padding:0 16px;background:' + P.accent + ";border-bottom:" + Math.max(2, c.sw || 2) + "px solid " + P.ink + ";" + c.body + ";font-size:24px;font-weight:700;color:" + onA + '"><span>' + esc(title) + '</span><span style="display:flex;gap:8px">' + ["_", "□", "×"].map(function (g) { return '<b style="width:34px;height:34px;display:grid;place-items:center;background:' + P.surface + ";border:2px solid " + P.ink + ";color:" + P.ink + '">' + g + "</b>"; }).join("") + "</span></div>" : "";
      // BeOS-style: a small title tab sitting on the window's top edge, not a full-width bar
      var tab = ch === "tabs" ? '<div class="rp-a' + (back ? " rp-back" : "") + '" style="--i:' + i + ";position:absolute;left:" + x + "px;top:" + (y - 50) + "px;height:52px;display:flex;align-items:center;gap:14px;padding:0 22px 0 14px;background:" + P.accent + ";border:" + Math.max(2, c.sw) + "px solid " + P.ink + ";border-bottom:0;border-radius:" + Math.min(R.radius, 8) + "px " + Math.min(R.radius, 8) + "px 0 0;" + c.body + ";font-size:22px;font-weight:700;color:" + onA + ";white-space:nowrap" + '"><i style="width:22px;height:22px;display:block;border:2px solid ' + onA + '"></i>' + esc(title) + "</div>" : "";
      return tab + '<div class="rp-a' + (back ? " rp-back" : "") + '" style="--i:' + i + ";position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;" + c.box("overflow:hidden", { radius: ch === "tabs" ? 0 : Math.min(R.radius, 10) }) + '">' + bar + inner + "</div>";
    };
    var lines = function () { return [0.9, 0.96, 0.82, 0.94, 0.6, 0, 0.88, 0.92, 0.7].map(function (v) { return v ? '<i style="display:block;height:14px;margin:0 0 20px;width:' + v * 100 + "%;border-radius:4px;background:" + rgba(onS, 0.22) + '"></i>' : '<i style="display:block;height:18px"></i>'; }).join(""); };
    var pane = kind === "none" ? '<div style="padding:40px 44px">' + lines() + "</div>" : '<div style="padding:30px">' + c.chart(kind, 300, P.surface, { n: [4, 5, 7][c.dens], w: 680 }) + "</div>";
    var cta = c.lab("cta", "OK");
    return win(760, ch === "tabs" ? 120 : 90, 740, 470, c.lab("title", "preview"), pane, 2, true) +
      win(110, 240, 800, 520, c.lab("window", "untitled"), '<div style="padding:44px">' + c.H1(84, "color:" + onS) + c.SUB(30, "margin-top:20px;color:" + onS) + (cta ? '<div style="margin-top:34px;display:inline-block;padding:14px 50px;' + c.box("font:700 30px/1 '" + esc(c.F.body) + "',sans-serif;color:" + onS, { radius: Math.min(R.radius, 8) }) + '">' + esc(cta) + "</div>" : "") + "</div>", 1);
  };
  LAYOUTS.editorial = function (c) {
    var P = c.P, R = c.R, dbl = c.st.style === "double", well = R.photo || "block";
    var cols = [1, 2, 3][c.dens] + (well === "none" ? 1 : 0), quote = c.sub || c.lab("quote", "“It simply works.”");
    var top = dbl ? 180 : 160, wh = dbl ? 530 : 560;
    // the photo well: a solid colour block (default), a photographic plate, or none (the text takes the width)
    var wellHtml = well === "none" ? "" : '<div class="rp-a" style="--i:2;position:absolute;left:1090px;top:' + top + "px;width:420px;height:" + wh + "px;" + c.box(well === "plate" ? "overflow:hidden" : "", { bg: P.accent }) + '">' + (well === "plate" ? scene(P, "ed", { fx: 300 }, R) : "") + "</div>";
    var quoteHtml = quote ? '<div class="rp-a" style="--i:3;position:absolute;' + (well === "none" ? "left:90px;width:930px;top:" + (dbl ? 740 : 750) : "left:1090px;width:420px;top:" + (dbl ? 730 : 740)) + "px;" + c.body + ";font-style:" + (c.F.italic ? "italic" : "normal") + ';font-size:28px;line-height:1.3">' + esc(quote) + "</div>" : "";
    return c.frame(28) + '<div style="position:absolute;left:90px;right:90px;top:70px;display:flex;justify-content:space-between;' + c.body + ";font-size:22px;letter-spacing:.2em;text-transform:uppercase;border-bottom:" + (dbl ? doubleW(Math.max(c.sw, 2)) + "px double " : "3px solid ") + P.ink + ';padding-bottom:16px;min-height:44px"><span>' + esc(c.lab("kicker", "Issue 07")) + "</span><span>" + esc(c.lab("section", "")) + "</span><span>" + esc(c.lab("date", "Autumn")) + "</span></div>" +
      '<div style="position:absolute;left:90px;top:' + (dbl ? 170 : 150) + "px;width:" + (well === "none" ? 1420 : 930) + 'px">' + c.H1(well === "none" ? 170 : 150, "line-height:.92") + '<div class="rp-a" style="--i:1;margin-top:36px;display:grid;grid-template-columns:repeat(' + cols + ',1fr);gap:34px">' + Array.apply(null, Array(cols)).map(function () { return "<div>" + [1, 0.94, 1, 0.88, 0.97, 0.6].map(function (w) { return '<i style="display:block;height:12px;margin:14px 0;width:' + w * 100 + "%;background:" + rgba(P.ink, 0.22) + '"></i>'; }).join("") + "</div>"; }).join("") + "</div></div>" +
      wellHtml + quoteHtml;
  };
  LAYOUTS.device = function (c) {
    var P = c.P, R = c.R, onS = c.onS, onA = c.onA;
    return '<div style="position:absolute;left:110px;top:0;bottom:0;width:720px;display:flex;flex-direction:column;justify-content:center;gap:28px">' + c.H1(110) + c.SUB(34) + "</div>" +
      '<div class="rp-a" style="--i:2;position:absolute;left:980px;top:60px;width:420px;height:780px;border-radius:64px;background:' + P.ink + ';padding:18px;box-shadow:' + shadowCss(R, P) + '"><div style="width:100%;height:100%;border-radius:48px;background:' + P.canvas + ';padding:70px 26px 26px;display:flex;flex-direction:column;gap:18px;overflow:hidden">' +
      [0, 1, 2, 3].map(function (i) { return '<div style="' + c.box("height:110px;display:flex;align-items:center;gap:18px;padding:0 20px", { radius: Math.min(R.radius, 24), shadowScale: 0.5, bg: i === 1 ? P.accent : P.surface }) + '"><i style="width:56px;height:56px;border-radius:14px;background:' + (i === 1 ? P.surface : P.accent2 || P.accent) + '"></i><div style="flex:1"><i style="display:block;height:12px;width:70%;background:' + rgba(i === 1 ? onA : onS, 0.7) + ';border-radius:6px"></i><i style="display:block;height:10px;width:40%;margin-top:12px;background:' + rgba(i === 1 ? onA : onS, 0.35) + ';border-radius:5px"></i></div></div>'; }).join("") + "</div></div>";
  };
  LAYOUTS.diagram = function (c) {
    var P = c.P, R = c.R, kind = R.diagram || "flow", s = c.labs("steps", ["Idea", "Make", "Ship", "Share", "Test", "Learn"]);
    var ec = vis(pick(R.edgeColor || "ink", P), P.canvas, P, 1.6), arrows = (R.edges || (kind === "flow" ? "arrow" : "line")) === "arrow";
    var dash = c.st.style === "dashed" ? "12 10" : "0", ew = Math.max(3, Math.min(c.sw || 4, 6));
    var node = function (x, y, label, i, bg, w, h, round) { w = w || 300; h = h || 120; return '<div class="rp-a" style="--i:' + i + ";position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;" + c.box("display:grid;place-items:center;text-align:center;padding:0 16px;" + c.body + ";font-size:" + (String(label).length > 12 ? 26 : 32) + "px;font-weight:700;color:" + (bg ? readOn(bg, P) : c.onS), { bg: bg, radius: round ? "50%" : null }) + '">' + esc(label) + "</div>"; };
    var head = '<div style="position:absolute;left:110px;top:80px;width:1380px">' + c.H1(84) + "</div>";
    var arrow = function (x, y, dir) { var d = dir === "down" ? "M" + (x - 12) + " " + (y - 14) + " L" + x + " " + y + " L" + (x + 12) + " " + (y - 14) : "M" + (x - 14) + " " + (y - 12) + " L" + x + " " + y + " L" + (x - 14) + " " + (y + 12); return '<path d="' + d + '" fill="none" stroke="' + ec + '" stroke-width="' + ew + '"/>'; };
    if (kind === "tree") {
      // a hierarchy: one root, three children, elbow connectors
      var kids = [[170, 640], [650, 640], [1130, 640]], lines = "M800 440 V540 M320 540 H1280 " + kids.map(function (k) { return "M" + (k[0] + 150) + " 540 V" + (k[1] - (arrows ? 4 : 0)); }).join(" ");
      return head + '<svg style="position:absolute;inset:0" width="1600" height="900"><path d="' + lines + '" fill="none" stroke="' + ec + '" stroke-width="' + ew + '" stroke-dasharray="' + dash + '"/>' + (arrows ? kids.map(function (k) { return arrow(k[0] + 150, k[1] - 2, "down"); }).join("") : "") + "</svg>" +
        node(650, 320, s[0] || "", 1, P.accent) + kids.map(function (k, i) { return node(k[0], k[1], s[i + 1] || "", 2 + i, i === 1 ? P.accent2 : null); }).join("");
    }
    if (kind === "network") {
      // an undirected graph / molecule: round nodes, straight bonds, one hub
      var N = [[800, 560, 150], [420, 420, 110], [1180, 400, 110], [360, 740, 96], [1240, 740, 96], [800, 330, 80]].slice(0, [4, 6, 6][c.dens]);
      var E = [[0, 1], [0, 2], [0, 3], [0, 4], [1, 3], [2, 4], [0, 5], [1, 5], [2, 5]].filter(function (e) { return e[0] < N.length && e[1] < N.length; });
      return head + '<svg style="position:absolute;inset:0" width="1600" height="900">' + E.map(function (e) { var a = N[e[0]], b = N[e[1]]; return '<path d="M' + a[0] + " " + a[1] + " L" + b[0] + " " + b[1] + '" stroke="' + ec + '" stroke-width="' + ew + '" stroke-dasharray="' + dash + '"/>'; }).join("") + "</svg>" +
        N.map(function (n, i) { return node(n[0] - n[2] / 2 - (i ? 0 : 0), n[1] - n[2] / 2, i < s.length ? s[i] : "", 1 + i, i === 0 ? P.accent : i === 2 ? P.accent2 : null, n[2], n[2], true); }).join("").replace(/font-size:(26|32)px/g, function (m, z) { return "font-size:" + Math.round(z * 0.8) + "px"; });
    }
    return head + '<svg style="position:absolute;inset:0" width="1600" height="900"><path d="M410 520 H560 M860 520 H1010 M710 580 V700" fill="none" stroke="' + ec + '" stroke-width="4" stroke-dasharray="' + dash + '"/>' + (arrows ? '<path d="M548 508 L562 520 L548 532 M998 508 L1012 520 L998 532" fill="none" stroke="' + ec + '" stroke-width="4"/>' : "") + "</svg>" +
      node(110, 460, s[0] || "", 1) + node(560, 460, s[1] || "", 2, P.accent) + node(1010, 460, s[2] || "", 3) + node(560, 700, s[3] || "", 4, P.accent2);
  };
  LAYOUTS.collage = function (c) {
    var P = c.P, hl = c.hl;
    return '<div class="rp-a rp-back" style="--i:2;position:absolute;left:880px;top:120px;width:560px;height:420px;rotate:4deg;' + c.box("", { bg: P.accent2 }) + '"></div>' +
      '<div class="rp-a" style="--i:3;position:absolute;left:1010px;top:470px;width:420px;height:300px;rotate:-6deg;' + c.box("", { bg: P.accent }) + '"></div>' +
      '<i class="rp-m" style="left:1100px;top:95px;width:180px;height:48px;background:' + rgba("#f4e7b0", 0.85) + ';transform:rotate(-8deg)"></i><i class="rp-m" style="left:1300px;top:450px;width:160px;height:44px;background:' + rgba("#f4e7b0", 0.85) + ';transform:rotate(12deg)"></i>' +
      '<div class="rp-a" style="--i:0;position:absolute;left:120px;top:200px;width:780px;rotate:-2deg;' + c.box("padding:40px 46px", { bg: P.surface }) + '"><div style="' + c.disp + ";font-size:" + headSize(hl, 96) + "px;color:" + c.onS + '">' + esc(hl) + "</div></div>" + c.SUB(34, "position:absolute;left:150px;top:620px;width:640px;rotate:1deg") +
      '<div style="position:absolute;left:180px;top:710px">' + c.icon("heart", 110, 4) + "</div>";
  };
  LAYOUTS.data = function (c) {
    var P = c.P, kind = c.chartKind("line"), stat = c.lab("stat", "128"), ss = c.fit(stat, 560, 190);
    var line = '<svg width="100%" height="100%" viewBox="0 0 1300 280" preserveAspectRatio="none"><path d="M0 230 C160 210 260 120 420 150 S700 60 860 90 S1120 30 1300 20" fill="none" stroke="' + P.accent + '" stroke-width="7"/><path d="M0 250 C200 240 360 200 520 210 S840 150 1040 160 S1200 120 1300 110" fill="none" stroke="' + (P.accent2 || P.ink) + '" stroke-width="5" stroke-dasharray="14 10"/></svg>';
    return '<div style="position:absolute;left:110px;top:' + (kind === "none" ? 0 : 90) + "px;" + (kind === "none" ? "bottom:0;align-items:center;" : "align-items:flex-start;") + 'width:1380px;display:flex;justify-content:space-between;gap:40px">' + '<div style="width:760px">' + c.H1(kind === "none" ? 110 : 80) + c.SUB(30, "margin-top:18px") + "</div>" + (stat ? '<div class="rp-a" style="--i:2;' + c.disp + ";font-size:" + (kind === "none" ? Math.round(c.fit(stat, 560, 300)) : ss) + "px;color:" + P.accent + ';white-space:nowrap">' + esc(stat) + "</div>" : "") + "</div>" +
      (kind === "none" ? "" : '<div class="rp-a" style="--i:3;position:absolute;left:110px;right:110px;bottom:90px;height:360px;' + c.box("padding:40px") + '">' + c.chart(kind, 280, P.surface, { line: line, n: [5, 7, 9][c.dens], w: 1300 }) + "</div>");
  };

  // ---- new compositions ---------------------------------------------------------------------------------
  // ---- photographic plates: a subject (recipe.scene) painted in a tonal ramp (recipe.photoColors) ------------
  function isHex(x) { return /^#[0-9a-f]{6}$/i.test(String(x)); }
  // the ramp runs from the plate's shadows (0) to its highlights (1)
  function photoRamp(P, R) {
    var stops = [].concat(R.photoColors || []).filter(isHex), flat = R.photoTone === "flat", t;
    if (stops.length >= 2) {
      t = function (x) { x = Math.max(0, Math.min(1, x)); if (flat) return stops[Math.min(stops.length - 1, Math.floor(x * stops.length))]; var f = x * (stops.length - 1), i = Math.min(stops.length - 2, Math.floor(f)); return mix(stops[i], stops[i + 1], f - i); };
      return { t: t, dk: stops[0], lt: stops[stops.length - 1], flat: flat };
    }
    var base = lum(P.ink) < lum(P.canvas) ? P.ink : P.canvas, dk = mix(base, P.accent2, 0.22), la = P.accent, h = rgb2hsl(la);
    // a red accent lightened with white turns pink: its highlights go to a warm amber instead (a sunset, not candy)
    if (h[1] > 0.35 && (h[0] >= 345 || h[0] < 15)) la = hsl2hex(32, Math.min(0.9, h[1]), Math.max(0.5, h[2]));
    var lt = mix(la, "#ffffff", 0.3);
    if (lum(lt) < lum(dk) + 0.2) lt = mix(lt, "#ffffff", 0.55);
    t = function (x) { x = Math.max(0, Math.min(1, x)); return mix(dk, lt, flat ? Math.round(x * 3) / 3 : x); };
    return { t: t, dk: dk, lt: lt, flat: flat };
  }
  function scene(P, id, opt, R) {
    opt = opt || {}; R = R || {};
    var ramp = photoRamp(P, R), t = ramp.t, dk = ramp.dk, lt = ramp.lt, flat = ramp.flat, g = "sc" + id + (++SEQ), kind = R.scene || "landscape", fx = opt.fx || 880;
    var sky = [].concat(R.sky || []).filter(isHex), ss = sky.length >= 2 ? sky.map(function (col, i) { return [i / (sky.length - 1), col]; }) : [[0, t(0.3)], [0.6, t(0.96)], [1, t(0.7)]];
    var r = rng(hash(kind + "scene")), out = "", k;
    var defs = '<linearGradient id="' + g + 's" x1="0" y1="0" x2="0" y2="1">' + ss.map(function (x) { return '<stop offset="' + x[0] + '" stop-color="' + x[1] + '"/>'; }).join("") + "</linearGradient>" +
      '<radialGradient id="' + g + 'b"><stop offset="0" stop-color="#ffffff" stop-opacity=".85"/><stop offset=".22" stop-color="' + lt + '" stop-opacity=".55"/><stop offset="1" stop-color="' + lt + '" stop-opacity="0"/></radialGradient>' +
      '<linearGradient id="' + g + 'h" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff" stop-opacity="0"/><stop offset=".5" stop-color="#ffffff" stop-opacity=".22"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></linearGradient>';
    // a flat (screenprint) plate has no gradients: the sky is bands of solid ink
    var skyRect = function (y1) { y1 = y1 || 900; if (!flat) return '<rect width="1600" height="' + y1 + '" fill="url(#' + g + 's)"/>'; var n = ss.length, o = ""; ss.forEach(function (x, i) { o += '<rect y="' + Math.round((y1 * i) / n) + '" width="1600" height="' + Math.ceil(y1 / n + 1) + '" fill="' + x[1] + '"/>'; }); return o; };
    var sun = function (cx, cy, rr, glow) { return (flat ? "" : '<circle cx="' + cx + '" cy="' + cy + '" r="' + (glow || rr * 4.3) + '" fill="url(#' + g + 'b)"/>') + '<circle cx="' + cx + '" cy="' + cy + '" r="' + rr + '" fill="' + (flat ? t(1) : mix(lt, "#ffffff", 0.65)) + '"/>'; };
    var haze = function (y, hh) { return flat ? "" : '<rect y="' + y + '" width="1600" height="' + hh + '" fill="url(#' + g + 'h)"/>'; };
    var light = function (d, a) { return flat ? "" : '<path d="' + d + '" fill="#ffffff" opacity="' + a + '"/>'; };
    var shade = function (d, a) { return '<path d="' + d + '" fill="' + (flat ? t(0.2) : "#000000") + '" opacity="' + (flat ? 1 : a) + '"/>'; };
    if (kind === "city") {
      out += skyRect() + sun(1180, 300, 64);
      for (var x = -30; x < 1620;) { var w = 70 + r() * 90, h = 200 + r() * 260; out += '<rect x="' + f1(x) + '" y="' + f1(700 - h) + '" width="' + f1(w) + '" height="' + f1(h + 10) + '" fill="' + t(0.62) + '"/>'; if (r() > 0.8) out += '<rect x="' + f1(x + w / 2 - 3) + '" y="' + f1(700 - h - 70) + '" width="6" height="70" fill="' + t(0.62) + '"/>'; x += w + 6; }
      out += haze(520, 200);
      for (x = -40; x < 1620;) {
        var w2 = 100 + r() * 110, h2 = 140 + r() * 250, y2 = 770 - h2;
        out += '<rect x="' + f1(x) + '" y="' + f1(y2) + '" width="' + f1(w2) + '" height="' + f1(h2 + 10) + '" fill="' + t(0.3) + '"/>';
        for (var wy = y2 + 24; wy < 740; wy += 34) for (var wx = x + 16; wx < x + w2 - 22; wx += 28) if (r() > 0.55) out += '<rect x="' + f1(wx) + '" y="' + f1(wy) + '" width="12" height="16" fill="' + t(0.96) + '" opacity=".8"/>';
        x += w2 + 10;
      }
      out += '<rect y="770" width="1600" height="130" fill="' + dk + '"/><path d="M0 836 H1600" stroke="' + t(0.5) + '" stroke-width="4" stroke-dasharray="60 40"/>';
    } else if (kind === "botanical") {
      out += '<rect width="1600" height="900" fill="' + t(0.92) + '"/>' + (flat ? "" : '<rect width="1600" height="900" fill="url(#' + g + 's)" opacity=".25"/>');
      // a fern frond: a curving rachis with leaflets shrinking to the tip
      var fern = function (x0, y0, x1, y1, bend, n, col, size) {
        var o = '<path d="M' + x0 + " " + y0 + " Q" + bend + " " + x1 + " " + y1 + '" fill="none" stroke="' + col + '" stroke-width="6"/>', bx = bend.split(" ").map(Number);
        for (var i = 1; i < n; i++) { var u = i / n, px = (1 - u) * (1 - u) * x0 + 2 * u * (1 - u) * bx[0] + u * u * x1, py = (1 - u) * (1 - u) * y0 + 2 * u * (1 - u) * bx[1] + u * u * y1, dx = 2 * (1 - u) * (bx[0] - x0) + 2 * u * (x1 - bx[0]), dy = 2 * (1 - u) * (bx[1] - y0) + 2 * u * (y1 - bx[1]), a = (Math.atan2(dy, dx) * 180) / Math.PI, L = size * (1 - u * 0.75);
          [-1, 1].forEach(function (sd) { o += '<path d="M0 0 C' + f1(L * 0.3) + " " + f1(-L * 0.28) + " " + f1(L * 0.8) + " " + f1(-L * 0.2) + " " + f1(L) + " 0 C" + f1(L * 0.8) + " " + f1(L * 0.2) + " " + f1(L * 0.3) + " " + f1(L * 0.28) + ' 0 0 Z" transform="translate(' + f1(px) + " " + f1(py) + ") rotate(" + f1(a + sd * 62) + ')" fill="' + col + '"/>'; }); }
        return o;
      };
      out += fern(520, 920, 760, 110, "420 480", 20, t(0.12), 150) + fern(260, 920, 120, 380, "300 600", 14, t(0.34), 100);
      // broad leaves with pale veins, a flower head
      [[1180, 620, -30, 1], [1400, 460, 25, 0.8], [1060, 380, -60, 0.7]].forEach(function (L) { out += '<g transform="translate(' + L[0] + " " + L[1] + ") rotate(" + L[2] + ") scale(" + L[3] + ')"><path d="M0 260 C-190 140 -170 -120 0 -240 C170 -120 190 140 0 260 Z" fill="' + t(0.24) + '"/><path d="M0 250 V-220 M0 120 L-90 30 M0 120 L90 30 M0 20 L-90 -70 M0 20 L90 -70 M0 -80 L-60 -150 M0 -80 L60 -150" stroke="' + t(0.8) + '" stroke-width="5" fill="none"/><path d="M0 260 V420" stroke="' + t(0.24) + '" stroke-width="10"/></g>'; });
      out += '<g transform="translate(1250 110) scale(2.6)"><path d="' + petalPath(8, 44) + '" fill="' + t(0.55) + '"/>' + '<circle cx="50" cy="50" r="12" fill="' + t(0.1) + '"/></g>';
    } else if (kind === "interior") {
      out += '<rect width="1600" height="640" fill="' + t(0.78) + '"/><path d="M0 640 H1600 V900 H0 Z" fill="' + t(0.46) + '"/><rect y="628" width="1600" height="14" fill="' + t(0.62) + '"/>';
      out += '<rect x="980" y="110" width="420" height="420" fill="' + (flat ? t(0.97) : "url(#" + g + "s)") + '"/>' + (flat ? "" : '<circle cx="1260" cy="250" r="260" fill="url(#' + g + 'b)" opacity=".7"/>') + '<path d="M980 110 H1400 V530 H980 Z M1190 110 V530 M980 320 H1400" fill="none" stroke="' + t(0.32) + '" stroke-width="16"/>';
      out += light("M980 530 H1400 L1300 900 H640 Z", 0.13);
      out += '<rect x="250" y="160" width="300" height="200" fill="' + t(0.9) + '" stroke="' + t(0.3) + '" stroke-width="10"/><path d="M270 330 L360 250 L420 300 L470 260 L530 330 Z" fill="' + t(0.55) + '"/>';
      // a lounge chair and a pendant lamp
      out += '<g fill="' + t(0.2) + '"><rect x="230" y="470" width="420" height="190" rx="34"/><rect x="200" y="590" width="480" height="110" rx="30"/><rect x="170" y="560" width="70" height="160" rx="24"/><rect x="640" y="560" width="70" height="160" rx="24"/><rect x="230" y="700" width="16" height="60"/><rect x="630" y="700" width="16" height="60"/></g>';
      out += shade("M190 760 H720 L760 790 H150 Z", 0.18);
      out += '<path d="M780 0 V250" stroke="' + t(0.15) + '" stroke-width="4"/><path d="M700 330 L730 250 H830 L860 330 Z" fill="' + t(0.15) + '"/>' + (flat ? "" : '<circle cx="780" cy="340" r="90" fill="url(#' + g + 'b)" opacity=".8"/>');
      out += '<path d="M1440 760 L1460 640 H1560 L1580 760 Z" fill="' + t(0.3) + '"/>' + [[-40, 0], [-10, -30], [25, -10], [50, 20], [-60, 30]].map(function (q, i) { return '<ellipse cx="' + (1510 + q[0]) + '" cy="' + (560 + q[1]) + '" rx="26" ry="70" transform="rotate(' + (q[0] * 0.9) + " " + (1510 + q[0]) + " " + (560 + q[1]) + ')" fill="' + t(0.18) + '"/>'; }).join("");
    } else if (kind === "poolside") {
      out += skyRect(640) + sun(1290, 170, 58);
      out += '<rect x="820" y="300" width="780" height="340" fill="' + t(0.94) + '"/><rect x="790" y="286" width="810" height="26" fill="' + t(0.98) + '"/><rect x="820" y="312" width="780" height="40" fill="' + t(0.72) + '"/>' + [0, 1, 2, 3].map(function (i) { return '<rect x="' + (880 + i * 180) + '" y="400" width="120" height="240" fill="' + t(0.38) + '"/>'; }).join("");
      out += '<rect y="620" width="1600" height="50" fill="' + t(0.97) + '"/><rect y="668" width="1600" height="232" fill="' + (flat ? t(0.66) : "url(#" + g + "p)") + '"/>';
      defs += '<linearGradient id="' + g + 'p" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + t(0.58) + '"/><stop offset="1" stop-color="' + t(0.8) + '"/></linearGradient>';
      for (k = 0; k < 9; k++) { var yy = 700 + k * 22 + (k % 2) * 4, x0 = (k * 173) % 900; out += '<path d="M' + x0 + " " + yy + " q30 -8 60 0 t60 0 t60 0 M" + (x0 + 520) + " " + (yy + 8) + ' q30 -8 60 0 t60 0" fill="none" stroke="' + (flat ? t(0.95) : "#ffffff") + '" stroke-width="3" opacity="' + (flat ? 1 : 0.55) + '"/>'; }
      out += '<rect x="1000" y="640" width="260" height="16" fill="' + t(0.9) + '"/>';
      // palms: a leaning trunk and a crown of fronds
      var palm = function (bx, by, tx, ty, sc) {
        var col = t(0.12), o = '<path d="M' + bx + " " + by + " Q" + (bx + (tx - bx) * 0.2) + " " + (by + (ty - by) * 0.6) + " " + tx + " " + ty + '" fill="none" stroke="' + col + '" stroke-width="' + 22 * sc + '" stroke-linecap="round"/>';
        [-160, -120, -75, -30, 15, 60, 105, 150].forEach(function (a) { o += '<path d="M0 0 C60 -40 150 -30 210 30 C140 0 70 0 0 12 Z" transform="translate(' + tx + " " + ty + ") rotate(" + a + ") scale(" + sc + ')" fill="' + col + '"/>'; });
        return o;
      };
      out += palm(330, 680, 400, 170, 1.1) + palm(620, 680, 560, 330, 0.8);
    } else if (kind === "portrait") {
      var hx = Math.max(600, Math.min(fx, 1150));
      defs += '<radialGradient id="' + g + 'q" cx="' + hx / 16 + '%" cy="40%" r="70%"><stop offset="0" stop-color="' + t(0.82) + '"/><stop offset="1" stop-color="' + t(0.32) + '"/></radialGradient>';
      out += '<rect width="1600" height="900" fill="' + (flat ? t(0.66) : "url(#" + g + "q)") + '"/>';
      var fig = function (dx, col) { return '<g transform="translate(' + (hx + dx) + ' 0)" fill="' + col + '"><ellipse cx="0" cy="330" rx="118" ry="148"/><path d="M-58 440 L-50 560 L50 560 L58 440 Z"/><path d="M-360 900 C-350 700 -250 610 -60 560 H60 C250 610 350 700 360 900 Z"/></g>'; };
      out += fig(-10, flat ? t(1) : mix(lt, "#ffffff", 0.4)) + fig(0, t(0.1));
    } else if (kind === "still-life") {
      out += '<rect width="1600" height="580" fill="' + t(0.72) + '"/>' + light("M0 0 H520 L980 580 H260 Z", 0.12) + '<rect y="580" width="1600" height="320" fill="' + t(0.42) + '"/><rect y="820" width="1600" height="80" fill="' + t(0.26) + '"/>';
      out += shade("M560 575 C620 560 900 560 1000 578 C900 600 620 600 560 575 Z", 0.2) + shade("M960 578 C1040 566 1240 566 1300 580 C1220 598 1030 598 960 578 Z", 0.2);
      out += '<path d="M640 580 C600 520 600 420 660 370 C680 350 690 330 685 290 H735 C730 330 740 350 760 370 C820 420 820 520 780 580 Z" fill="' + t(0.2) + '"/>' + (flat ? "" : '<path d="M650 520 C640 460 650 420 675 395" fill="none" stroke="#ffffff" stroke-width="10" stroke-linecap="round" opacity=".35"/>');
      out += '<path d="M860 580 V400 C860 370 890 360 895 330 V250 H925 V330 C930 360 960 370 960 400 V580 Z" fill="' + t(0.32) + '"/>';
      out += '<circle cx="1080" cy="522" r="58" fill="' + t(0.58) + '"/><circle cx="1190" cy="540" r="42" fill="' + t(0.68) + '"/><circle cx="1135" cy="470" r="40" fill="' + t(0.5) + '"/>' + (flat ? "" : '<circle cx="1060" cy="500" r="16" fill="#ffffff" opacity=".35"/>');
    } else if (kind === "abstract") {
      out += '<rect width="1600" height="900" fill="' + t(0.86) + '"/><circle cx="1150" cy="380" r="290" fill="' + t(0.55) + '"/><path d="M300 900 V460 A160 160 0 0 1 620 460 V900 Z" fill="' + t(0.2) + '"/><rect y="630" width="1600" height="80" fill="' + t(0.38) + '"/><circle cx="820" cy="240" r="62" fill="' + t(0.05) + '"/><path d="M1600 900 H1240 A360 360 0 0 1 1600 540 Z" fill="' + t(0.7) + '"/><path d="M0 0 H260 L0 260 Z" fill="' + t(0.45) + '"/>';
    } else if (kind === "night-sky") {
      var ns = sky.length >= 2 ? null : [t(0.02), t(0.14), t(0.3)];
      if (ns) defs = defs.replace(/<linearGradient id="[^"]+s"[\s\S]*?<\/linearGradient>/, '<linearGradient id="' + g + 's" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + ns[0] + '"/><stop offset=".7" stop-color="' + ns[1] + '"/><stop offset="1" stop-color="' + ns[2] + '"/></linearGradient>');
      if (ns) ss = [[0, ns[0]], [0.5, ns[1]], [1, ns[2]]];
      out += skyRect() + (flat ? "" : '<ellipse cx="760" cy="330" rx="900" ry="110" transform="rotate(-18 760 330)" fill="' + t(0.6) + '" opacity=".22" filter="url(#' + g + 'f)"/>');
      defs += '<filter id="' + g + 'f" x="-20%" y="-50%" width="140%" height="200%"><feGaussianBlur stdDeviation="40"/></filter>';
      for (k = 0; k < 170; k++) { var z = Math.pow(r(), 3); out += '<circle cx="' + f1(r() * 1600) + '" cy="' + f1(r() * 660) + '" r="' + f1(1.2 + z * 3.4) + '" fill="' + (flat ? t(1) : "#ffffff") + '" opacity="' + f1(flat ? 1 : 0.35 + z * 0.65) + '"/>'; }
      out += '<circle cx="1250" cy="190" r="70" fill="' + (flat ? t(1) : mix(lt, "#ffffff", 0.6)) + '"/><circle cx="1280" cy="170" r="62" fill="' + (flat ? ss[0][1] : t(0.06)) + '"/>';
      out += '<path d="M0 700 C200 660 380 690 560 650 C760 610 900 680 1100 660 C1300 640 1450 680 1600 660 V900 H0 Z" fill="' + t(0.14) + '"/>';
      for (k = 0; k < 14; k++) { var px = 60 + k * 115 + (k % 3) * 20, ph = 90 + (k % 4) * 30; out += '<path d="M' + px + " " + (770 - ph) + " L" + (px + 34) + " 780 L" + (px - 34) + ' 780 Z" fill="' + dk + '"/>'; }
      out += '<path d="M0 760 C300 740 600 770 900 750 C1200 730 1400 760 1600 750 V900 H0 Z" fill="' + dk + '"/>';
    } else {
      // landscape: sky, sun, ridges in atmospheric perspective, a figure
      out += skyRect() + sun(1060, 480, 84, 360) +
        '<path d="M600 300 q9 -9 18 0 q9 -9 18 0 M668 268 q6 -6 12 0 q6 -6 12 0" fill="none" stroke="' + t(0.25) + '" stroke-width="3" stroke-linecap="round"/>' +
        '<path d="M0 560 L140 500 L260 530 L420 450 L560 520 L700 470 L860 540 L1000 490 L1160 532 L1300 462 L1460 520 L1600 490 V900 H0 Z" fill="' + t(0.74) + '"/>' + haze(470, 200) +
        '<path d="M0 622 C120 582 220 602 340 562 C480 522 560 602 700 592 C860 582 920 542 1060 562 C1200 582 1300 622 1440 592 C1520 577 1570 592 1600 602 V900 H0 Z" fill="' + t(0.52) + '"/>' +
        '<path d="M0 722 C200 692 360 702 520 662 C640 632 760 652 900 692 C1080 742 1260 702 1400 682 C1500 670 1560 674 1600 678 V900 H0 Z" fill="' + t(0.27) + '"/>' +
        '<g fill="' + t(0.1) + '"><circle cx="' + fx + '" cy="626" r="8"/><path d="M' + (fx - 8) + " 638 L" + (fx + 8) + " 638 L" + (fx + 11) + " 684 L" + (fx - 11) + ' 684 Z"/></g>' +
        '<path d="M0 822 C240 792 420 802 640 772 C700 764 760 766 820 774 L1600 842 V900 H0 Z" fill="' + dk + '"/>';
    }
    return '<svg width="100%" height="100%" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" style="display:block"><defs>' + defs + "</defs>" + out + "</svg>";
  }

  LAYOUTS.map = function (c) {
    var P = c.P, R = c.R;
    var land = contrast(P.surface, P.canvas) > 1.12 ? P.surface : mix(P.canvas, P.ink, dark(P.canvas) ? 0.14 : 0.08);
    var coast = c.sw ? c.sc : mix(land, P.ink, 0.35), cw = c.sw ? Math.min(c.sw, 4) : 1.6;
    var road = mix(land, P.ink, 0.22), dashed = c.st.style === "dashed" || c.st.style === "sketch";
    var places = c.labs("places", ["Harbour", "Old Town", "Ridge", "Lookout", "Mill", "Bay"]);
    var pins = [[640, 560], [900, 380], [1180, 470], [1360, 300]];
    var npins = [2, 4, 4][c.dens];
    var s = '<svg class="rp-back" style="position:absolute;inset:0" width="1600" height="900">';
    for (var k = 1; k < 16; k++) s += '<path d="M' + k * 100 + ' 0 V900" stroke="' + rgba(P.ink, 0.05) + '" stroke-width="1"/>';
    for (k = 1; k < 9; k++) s += '<path d="M0 ' + k * 100 + ' H1600" stroke="' + rgba(P.ink, 0.05) + '" stroke-width="1"/>';
    var shapes = ["M520 120 C640 60 820 90 900 150 C980 210 1080 170 1180 200 C1300 236 1420 210 1500 290 C1570 360 1540 470 1470 520 C1400 570 1420 660 1340 720 C1250 790 1120 760 1040 800 C940 850 820 820 760 750 C700 680 610 700 560 630 C500 550 560 470 520 400 C480 330 420 200 520 120 Z",
      "M140 640 C200 590 300 600 340 650 C380 700 350 780 280 800 C210 820 120 790 110 730 C100 690 110 660 140 640 Z",
      "M1380 60 C1420 40 1480 50 1490 80 C1500 110 1460 130 1420 120 C1380 110 1350 80 1380 60 Z"];
    // water lines echo the coast
    s += shapes.map(function (d) { return '<path d="' + d + '" fill="none" stroke="' + rgba(P.ink, 0.07) + '" stroke-width="22"/><path d="' + d + '" fill="none" stroke="' + rgba(P.ink, 0.05) + '" stroke-width="48"/>'; }).join("");
    s += shapes.map(function (d) { return '<path d="' + d + '" fill="' + land + '" stroke="' + coast + '" stroke-width="' + cw + '" stroke-linejoin="round"/>'; }).join("");
    s += '<defs><pattern id="mh' + (++SEQ) + '" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="14" fill="' + rgba(P.accent, 0.35) + '"/></pattern></defs>';
    s += '<path d="M690 210 L850 190 L880 300 L760 340 L680 290 Z" fill="url(#mh' + SEQ + ')" stroke="' + P.accent + '" stroke-width="3" stroke-dasharray="10 8"/>';
    s += '<path d="M980 600 L1150 580 L1230 660 L1160 740 L1010 720 Z" fill="' + rgba(P.accent2, 0.35) + '" stroke="' + P.accent2 + '" stroke-width="3"/>';
    if (c.dens) s += ["M560 300 C700 330 780 260 900 280 S1100 330 1300 300", "M800 780 C860 640 960 560 1100 520", "M1050 180 C1030 300 1060 420 1000 560", "M1300 300 C1380 380 1420 440 1470 500"].map(function (d, i) { return '<path d="' + d + '" fill="none" stroke="' + road + '" stroke-width="' + (i ? 3 : 6) + '" stroke-linecap="round"/>'; }).join("");
    // dense maps get more of the map itself: a second tier of lanes and a denser graticule, never coordinate print
    if (c.dens === 2) { s += ["M620 560 C700 620 760 700 820 760", "M1180 470 C1250 420 1300 360 1360 300", "M900 380 C960 440 1020 500 1100 520"].map(function (d) { return '<path d="' + d + '" fill="none" stroke="' + road + '" stroke-width="2" stroke-dasharray="6 6"/>'; }).join(""); for (k = 0; k < 16; k++) s += '<path d="M' + (k * 100 + 50) + ' 0 V900" stroke="' + rgba(P.ink, 0.03) + '" stroke-width="1"/>'; }
    s += "</svg>";
    var route = pins.slice(0, npins), rd = "M" + route[0][0] + " " + route[0][1];
    for (k = 1; k < route.length; k++) { var a = route[k - 1], b = route[k]; rd += " C" + (a[0] + (b[0] - a[0]) * 0.5) + " " + (a[1] + 60 * (k % 2 ? -1 : 1)) + " " + (b[0] - (b[0] - a[0]) * 0.4) + " " + b[1] + " " + b[0] + " " + b[1]; }
    var routeSvg = '<svg class="rp-a" style="--i:2;position:absolute;inset:0" width="1600" height="900"><path d="' + rd + '" fill="none" stroke="' + P.canvas + '" stroke-width="16" stroke-linecap="round"/><path d="' + rd + '" fill="none" stroke="' + P.accent + '" stroke-width="8" stroke-linecap="round"' + (dashed ? ' stroke-dasharray="2 16"' : "") + "/></svg>";
    var pinHtml = route.map(function (p, i) {
      var col = i === 0 || i === route.length - 1 ? P.accent : P.accent2, on = readOn(P.surface, P);
      return '<div class="rp-a" style="--i:' + (3 + i) + ";position:absolute;left:" + (p[0] - 26) + "px;top:" + (p[1] - 72) + 'px;display:flex;align-items:flex-start;gap:12px"><svg width="52" height="72" viewBox="0 0 52 72" style="filter:drop-shadow(0 6px 6px ' + rgba("#000000", 0.25) + ')"><path d="M26 70 C26 70 3 40 3 25 A23 23 0 0 1 49 25 C49 40 26 70 26 70 Z" fill="' + col + '" stroke="' + P.ink + '" stroke-width="' + Math.max(2, Math.min(c.sw, 4)) + '"/><circle cx="26" cy="25" r="8" fill="' + P.canvas + '"/></svg>' +
        '<span style="margin-top:6px;padding:8px 16px;white-space:nowrap;' + c.box(c.body + ";font-size:22px;font-weight:700;color:" + on, { radius: Math.min(R.radius, 10), shadowScale: 0.4, stroke: Math.min(c.sw, 2) }) + '">' + esc(places[i] || "") + "</span></div>";
    }).join("");
    var compass = '<svg class="rp-a" style="--i:8;position:absolute;right:90px;bottom:80px" width="96" height="96" viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" fill="none" stroke="' + rgba(P.ink, 0.5) + '" stroke-width="2"/><path d="M50 10 L60 50 L50 44 L40 50 Z" fill="' + P.ink + '"/><path d="M50 90 L60 50 L50 56 L40 50 Z" fill="none" stroke="' + P.ink + '" stroke-width="2"/><text x="50" y="8" text-anchor="middle" font-family="' + esc(c.monoFam) + ',monospace" font-size="12" font-weight="700" fill="' + P.ink + '">N</text></svg>';
    var sl = c.lab("scale", "2 km"), scale = c.hidden("scale") ? "" : '<div class="rp-a" style="--i:9;position:absolute;left:470px;bottom:70px;display:flex;align-items:center;gap:14px;' + c.mono + ";font-size:18px;color:" + rgba(P.ink, 0.7) + '"><i style="display:block;width:180px;height:10px;border:2px solid ' + P.ink + ";background:linear-gradient(90deg," + P.ink + " 50%,transparent 50%)" + '"></i>' + esc(sl) + "</div>";
    var card = '<div class="rp-a" style="--i:0;position:absolute;left:90px;top:80px;width:600px;' + c.box("padding:40px 44px;display:flex;flex-direction:column;gap:18px") + '">' + c.kick(c.lab("kicker", ""), 1, "color:" + (contrast(P.accent, P.surface) >= 2.2 ? P.accent : c.onS)) + '<div style="' + c.disp + c.small + ";font-size:" + headSize(c.hl, 76) + "px;color:" + c.onS + '">' + esc(c.hl) + "</div>" + (c.sub ? '<div style="' + c.body + ";font-size:28px;line-height:1.35;opacity:.78;color:" + c.onS + '">' + esc(c.sub) + "</div>" : "") + "</div>";
    return s + routeSvg + pinHtml + compass + scale + card;
  };

  LAYOUTS.split = function (c) {
    var P = c.P, R = c.R, right = R.surface === "gradient" ? "linear-gradient(135deg," + P.accent + "," + mix(P.accent, P.accent2, 0.6) + ")" : P.accent;
    var onL = P.ink, onR = c.onA, seam = Math.max(3, c.sw), kind = c.chartKind("bars"), bare = kind === "none";
    // the headline must end above the panels (and the knob on the seam): size it to at most two lines there,
    // or, with no panels (two poster halves), centre it on the frame
    var len = String(c.hl).length, px = headSize(c.hl, bare ? 170 : 150), room = bare ? 560 : c.sub ? 270 : 330, lines = function (z) { return Math.ceil((len * c.cw * z) / 1340); };
    while (px > 56 && (lines(px) * px * 1.0 > room || lines(px) > (bare ? 3 : 2))) px -= 4;
    var copy = function (clip, col) {
      return '<div style="position:absolute;inset:0;clip-path:' + clip + ";display:flex;flex-direction:column;align-items:center;" + (bare ? "justify-content:center;padding:0 130px;" : "padding:150px 130px 0;") + 'gap:26px;text-align:center">' +
        '<div style="' + c.disp + ";font-size:" + px + "px;color:" + col + '">' + esc(c.hl) + "</div>" + (c.sub ? '<div style="' + c.body + ";font-size:32px;opacity:.85;color:" + col + '">' + esc(c.sub) + "</div>" : "") + "</div>";
    };
    var chip = function (text, x, bg, fg, i) { return text ? '<div class="rp-a" style="--i:' + i + ";position:absolute;left:" + x + "px;top:70px;padding:10px 22px;border:2px solid " + fg + ";border-radius:" + Math.min(R.radius, 999) + "px;" + c.body + ";font-size:22px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:" + fg + ";background:" + bg + '">' + esc(text) + "</div>" : ""; };
    var v = [0.45, 0.8, 0.3, 0.65, 0.5], messy = v.map(function (w, i) { return '<i style="display:block;height:18px;margin:0 0 20px ' + [0, 40, 12, 64, 20][i] + "px;width:" + w * 100 + "%;background:" + rgba(P.ink, 0.28) + ";transform:rotate(" + [-3, 2, -1, 4, -2][i] + 'deg)"></i>'; }).join("");
    var before = bare ? "" : '<div class="rp-a rp-back" style="--i:3;position:absolute;left:150px;top:520px;width:500px;height:270px;rotate:-2deg;' + c.box("padding:40px;filter:grayscale(1);opacity:.75", { bg: mix(P.surface, P.canvas, 0.3) }) + '">' + messy + "</div>";
    var after = bare ? "" : '<div class="rp-a" style="--i:4;position:absolute;left:950px;top:520px;width:500px;height:270px;' + c.box("padding:36px 40px;display:flex;flex-direction:column;justify-content:flex-end") + '">' + c.chart(kind, 190, P.surface, { n: [4, 5, 7][c.dens], w: 420 }) + "</div>";
    var knob = bare ? "" : '<div class="rp-a" style="--i:5;position:absolute;left:752px;top:608px;width:96px;height:96px;border-radius:50%;display:grid;place-items:center;' + "background:" + P.surface + ";border:" + seam + "px solid " + P.ink + ";box-shadow:" + (shadowCss(R, P, 0.6) === "none" ? "0 10px 24px " + rgba("#000000", 0.2) : shadowCss(R, P, 0.6)) + '"><svg width="54" height="30" viewBox="0 0 54 30"><path d="M16 4 L4 15 L16 26 M38 4 L50 15 L38 26" fill="none" stroke="' + c.onS + '" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>';
    return '<div class="rp-m" style="left:800px;top:0;width:800px;height:900px;background:' + right + '"></div><div class="rp-m" style="left:' + (800 - seam / 2) + "px;top:0;width:" + seam + "px;height:900px;background:" + P.ink + '"></div>' +
      chip(c.lab("before", bare ? "" : "Before"), 80, "transparent", onL, 1) + chip(c.lab("after", bare ? "" : "After"), 880, "transparent", onR, 2) +
      '<div class="rp-a" style="--i:0;position:absolute;inset:0">' + copy("inset(0 50% 0 0)", onL) + copy("inset(0 0 0 50%)", onR) + "</div>" + before + after + knob;
  };

  LAYOUTS.bignumber = function (c) {
    var P = c.P, R = c.R, stat = c.lab("stat", "87%"), size = c.fit(stat, 820, 440), col = contrast(P.accent, P.canvas) >= 2 ? P.accent : P.ink;
    var cap = c.lab("caption", "vs. last year"), kind = c.chartKind("line"), ctitle = c.lab("title", "Trend");
    var line = '<svg width="100%" height="150" viewBox="0 0 460 150" preserveAspectRatio="none"><path d="M0 130 C60 120 90 96 140 100 S220 60 280 70 S380 24 460 14 V150 H0 Z" fill="' + rgba(P.accent, 0.18) + '"/><path d="M0 130 C60 120 90 96 140 100 S220 60 280 70 S380 24 460 14" fill="none" stroke="' + P.accent + '" stroke-width="5" vector-effect="non-scaling-stroke"/><path d="M0 149 H460" stroke="' + rgba(c.onS, 0.3) + '" stroke-width="2" vector-effect="non-scaling-stroke"/></svg>';
    var chart = kind === "none" ? "" : '<div class="rp-a" style="--i:4;margin-top:34px;height:250px;' + c.box("padding:30px 34px;display:flex;flex-direction:column;gap:16px") + '">' + (ctitle || stat ? '<div style="display:flex;justify-content:space-between;' + c.mono + ";font-size:18px;color:" + rgba(c.onS, 0.6) + '"><span>' + esc(ctitle) + "</span><span>" + esc(stat) + "</span></div>" : "") + c.chart(kind, 150, P.surface, { line: line, n: 7, w: 450 }) + "</div>";
    // dense: a row of supporting figures; their captions only when the style names them (labels.metrics)
    var reads = c.labs("readouts", ["12k", "4.8", "31%"]), mets = c.labs("metrics", []);
    var minis = c.dens === 2 && reads.length ? '<div class="rp-a" style="--i:3;position:absolute;left:100px;top:720px;display:flex;gap:60px">' + reads.slice(0, 3).map(function (x, i) { return '<div style="border-top:3px solid ' + (i ? rgba(P.ink, 0.4) : col) + ';padding-top:12px;min-width:170px"><div style="' + c.disp + c.small + ';font-size:54px">' + esc(x) + "</div>" + (mets[i] ? '<div style="' + c.mono + ";font-size:16px;opacity:.6;margin-top:6px" + '">' + esc(mets[i]) + "</div>" : "") + "</div>"; }).join("") + "</div>" : "";
    var y0 = c.dens === 2 ? 110 : 170;
    return (stat ? '<div class="rp-a" style="--i:1;position:absolute;left:90px;top:' + y0 + "px;" + c.disp + ";font-size:" + size + "px;line-height:.82;letter-spacing:-.04em;color:" + col + ';white-space:nowrap">' + esc(stat) + "</div>" : "") +
      '<div class="rp-a" style="--i:2;position:absolute;left:100px;top:' + (y0 + size * 0.86 + 26) + "px;width:760px;border-top:3px solid " + P.ink + ";padding-top:18px;" + c.mono + ";font-size:22px;letter-spacing:.08em;text-transform:uppercase;color:" + rgba(P.ink, 0.75) + '">' + esc(cap) + "</div>" + minis +
      '<div style="position:absolute;left:990px;top:0;bottom:0;width:520px;display:flex;flex-direction:column;justify-content:center;gap:22px">' + c.kick(c.lab("kicker", ""), 0) + c.H1(76) + c.SUB(28) + chart + "</div>";
  };

  LAYOUTS.typegrid = function (c) {
    var P = c.P, R = c.R, dk = dark(P.canvas), strict = has(["rules", "grid", "crosshair"], R.motif) || R.texture === "grid";
    var w = String(c.hl).trim().split(/\s+/);
    if (w.length === 1) { var m = Math.ceil(w[0].length / 2); w = [w[0].slice(0, m), w[0].slice(m)]; }
    var f = { big: w[0], vert: w[1], outline: w.length === 2 ? w[0] : w[2], block: w[3] || null, small: w.length > 4 ? w.slice(4).join(" ") : null };
    var out = "", blend = dk ? "screen" : "multiply", tilt = strict ? 0 : -4;
    if (c.dens) { for (var k = 0; k <= 12; k++) out += '<i class="rp-m" style="left:' + f1(60 + k * 123.33) + "px;top:0;width:1px;height:900px;background:" + rgba(P.ink, c.dens === 2 ? 0.16 : 0.1) + '"></i>'; for (k = 1; k < 6; k++) out += '<i class="rp-m" style="left:0;top:' + k * 150 + "px;width:1600px;height:1px;background:" + rgba(P.ink, c.dens === 2 ? 0.16 : 0.1) + '"></i>'; }
    out += '<div class="rp-a rp-back" style="--i:5;position:absolute;left:' + (strict ? 900 : 930) + "px;top:" + (strict ? 300 : 340) + "px;width:400px;height:400px;border-radius:" + (strict ? 0 : 50) + (strict ? "px" : "%") + ";background:" + P.accent2 + ";opacity:.95" + '"></div>';
    var s0 = c.fit(f.big, 1180, 300), s1 = c.fit(f.vert, 780, 230), s2 = c.fit(f.outline, 1000, 250);
    var y2 = 60 + s0 * 0.76;
    var frag = function (text, css, i) { return '<div class="rp-a" style="--i:' + i + ";position:absolute;white-space:nowrap;" + c.disp + ";line-height:.86;" + css + '">' + esc(text) + "</div>"; };
    out += frag(f.big, "left:56px;top:60px;font-size:" + s0 + "px", 0);
    out += frag(f.outline, "left:" + (strict ? 56 + 123 * 2 : 240) + "px;top:" + f1(y2) + "px;font-size:" + s2 + "px;color:transparent;-webkit-text-stroke:" + Math.max(2, Math.round(s2 / 70)) + "px " + P.ink + ";text-shadow:none", 1);
    out += '<div class="rp-a" style="--i:2;position:absolute;left:1544px;top:60px;width:' + Math.round(s1 * f.vert.length * c.cw + 20) + "px;rotate:90deg;transform-origin:0 0;white-space:nowrap;" + c.disp + ";line-height:.86;font-size:" + s1 + "px;color:" + c.acc + ";mix-blend-mode:" + blend + '">' + esc(f.vert) + "</div>";
    var y3 = Math.max(560, y2 + s2 * 0.95), bt = f.block || c.lab("kicker", "No. 07") || "", s3 = f.block ? c.fit(bt, 620, 150) : 64;
    if (bt) out += '<div class="rp-a" style="--i:3;position:absolute;left:' + (strict ? 56 + 123 * 5 : 640) + "px;top:" + f1(y3) + "px;padding:16px 30px 12px;background:" + P.accent + ";rotate:" + tilt + "deg;white-space:nowrap;" + c.disp + ";line-height:.9;font-size:" + s3 + "px;color:" + c.onA + ";text-shadow:none" + '">' + esc(bt) + "</div>";
    if (f.small) out += frag(f.small, "left:56px;top:" + (790 - c.fit(f.small, 520, 80)) + "px;font-size:" + c.fit(f.small, 520, 80) + "px", 4);
    if (c.sub) out += '<div class="rp-a rp-t" style="--i:4;position:absolute;left:56px;top:' + Math.min(640, Math.round(y2 + s2 * 0.95 + 36)) + "px;width:" + (f.small ? 460 : 520) + "px;" + c.body + ";font-size:26px;line-height:1.3;" + (f.small ? "display:none" : "") + '">' + esc(c.sub) + "</div>";
    out += '<div class="rp-a rp-t" style="--i:6;position:absolute;left:56px;right:' + (70 + Math.round(s1 * 0.9)) + "px;top:836px;border-top:2px solid " + P.ink + ";padding-top:10px;display:flex;justify-content:space-between;" + c.mono + ";font-size:17px;letter-spacing:.12em;text-transform:uppercase;color:" + P.ink + '"><span>' + esc(c.lab("kicker", "No. 07")) + "</span><span>" + esc(c.lab("section", "")) + "</span><span>" + esc(c.lab("date", "")) + "</span></div>";
    return out;
  };

  LAYOUTS.timeline = function (c) {
    var P = c.P, R = c.R, n = [3, 5, 7][c.dens], cur = Math.floor((n - 1) / 2);
    var steps = c.labs("steps", ["Idea", "Draft", "Build", "Launch", "Grow", "Scale", "Next"]), dates = c.labs("dates", ["2019", "2020", "2021", "2022", "2023", "2024", "2025"]);
    var x0 = 170, x1 = 1430, y = 580, xs = []; for (var i = 0; i < n; i++) xs.push(x0 + ((x1 - x0) * i) / (n - 1));
    var lw = Math.max(3, c.sw);
    var out = '<div style="position:absolute;left:110px;top:80px;width:1100px;display:flex;flex-direction:column;gap:18px">' + c.kick(c.lab("kicker", ""), 0) + c.H1(92) + c.SUB(30) + "</div>";
    out += '<svg class="rp-a" style="--i:2;position:absolute;inset:0" width="1600" height="900"><path d="M' + (x0 - 40) + " " + y + " H" + (x1 + 40) + '" stroke="' + rgba(P.ink, 0.35) + '" stroke-width="' + lw + '" stroke-dasharray="' + (c.st.style === "solid" || !c.st.style ? "10 10" : "4 10") + '"/><path d="M' + (x0 - 40) + " " + y + " H" + xs[cur] + '" stroke="' + P.accent + '" stroke-width="' + (lw + 4) + '" stroke-linecap="round"/></svg>';
    xs.forEach(function (x, i) {
      var isCur = i === cur, done = i < cur, sz = isCur ? 58 : 34;
      var fill = isCur ? P.accent : done ? P.ink : P.canvas;
      // marker: circle, diamond, square, rect (a tall trail blaze) or ring; auto = diamond for sharp outlined styles
      var mk = R.marker && R.marker !== "auto" ? R.marker : R.radius === 0 && c.sw ? "diamond" : "circle";
      var shape = mk === "diamond" ? "border-radius:0;transform:rotate(45deg)" : mk === "square" ? "border-radius:0" : mk === "rect" ? "border-radius:0;width:" + Math.round(sz * 0.55) + "px;height:" + Math.round(sz * 1.25) + "px" : mk === "ring" ? "border-radius:50%;background:" + P.canvas + ";border-width:" + Math.max(lw, Math.round(sz / 4)) + "px;border-color:" + (isCur ? P.accent : done ? P.ink : rgba(P.ink, 0.5)) : "border-radius:50%";
      out += '<div class="rp-a" style="--i:' + (3 + i) + ";position:absolute;left:" + (x - 110) + "px;top:" + (y - 90) + 'px;width:220px;height:230px;display:flex;flex-direction:column;align-items:center;text-align:center">' +
        '<div style="' + c.mono + ";font-size:24px;letter-spacing:.08em;color:" + (isCur ? c.acc : rgba(P.ink, 0.6)) + ';height:50px">' + esc(dates[i] || "") + "</div>" +
        '<div style="height:80px;display:grid;place-items:center"><i style="display:block;width:' + sz + "px;height:" + sz + "px;background:" + fill + ";border:" + lw + "px solid " + (isCur ? P.ink : P.ink) + ";" + shape + ";" + (isCur ? "box-shadow:0 0 0 12px " + rgba(P.accent, 0.22) + (shadowCss(R, P, 0.4) !== "none" ? "," + shadowCss(R, P, 0.4) : "") : "") + '"></i></div>' +
        '<div style="' + c.body + ";font-size:" + (isCur ? 38 : 30) + "px;font-weight:" + (isCur ? 800 : 600) + ";opacity:" + (i > cur ? 0.6 : 1) + ';margin-top:10px">' + esc(steps[i] || "") + "</div></div>";
    });
    var cx = xs[cur];
    if (!c.hidden("badge")) out += '<div class="rp-a" style="--i:' + (4 + n) + ";position:absolute;left:" + (cx - 170) + "px;top:" + (y + 170) + "px;width:340px;" + c.box("padding:18px 24px;display:flex;align-items:center;gap:18px", { radius: Math.min(R.radius, 18), shadowScale: 0.6 }) + '">' + c.icon("arrow", 44, 1).replace('class="rp-a"', 'class=""') + '<span style="' + c.body + ";font-size:24px;font-weight:700;color:" + c.onS + '">' + esc(c.lab("badge", "We are here")) + "</span></div>";
    return out;
  };

  LAYOUTS.photo = function (c) {
    var P = c.P, R = c.R, id = "ph", dk = dark(P.canvas), cap = c.lab("caption", ""), fig = c.lab("date", "");
    if (dk) {
      // cinematic: full bleed, letterboxed, the title over a scrim
      return '<div class="rp-a rp-back" style="--i:0;position:absolute;inset:0">' + scene(P, id, { fx: 1300 }, R) + "</div>" +
        '<div class="rp-m" style="left:0;right:0;bottom:0;height:520px;background:linear-gradient(0deg,' + rgba(P.canvas, 0.92) + "," + rgba(P.canvas, 0.55) + " 45%,transparent)" + '"></div>' +
        '<div class="rp-m" style="left:0;right:0;top:0;height:' + (c.dens ? 70 : 0) + "px;background:" + mix(P.canvas, "#000000", 0.5) + '"></div><div class="rp-m" style="left:0;right:0;bottom:0;height:' + (c.dens ? 70 : 0) + "px;background:" + mix(P.canvas, "#000000", 0.5) + '"></div>' +
        (cap ? '<div class="rp-a" style="--i:3;position:absolute;left:110px;top:' + (c.dens ? 106 : 60) + "px;" + c.mono + ";font-size:18px;letter-spacing:.24em;text-transform:uppercase;color:" + rgba(P.ink, 0.75) + '">' + esc(cap) + "</div>" : "") +
        '<div style="position:absolute;left:110px;right:300px;bottom:' + (c.dens ? 130 : 90) + 'px;display:flex;flex-direction:column;gap:22px">' + c.kick(c.lab("kicker", ""), 2) + c.H1(120) + c.SUB(32, "max-width:900px") + "</div>";
    }
    // editorial: the plate on the right, captioned, the story on the left
    return c.frame(28) + '<div style="position:absolute;left:100px;top:0;bottom:0;width:620px;display:flex;flex-direction:column;justify-content:center;gap:24px">' + c.kick(c.lab("kicker", ""), 0) + c.H1(104) + c.SUB(30) +
      '<div class="rp-a" style="--i:3;margin-top:12px;width:120px;border-top:3px solid ' + P.ink + '"></div></div>' +
      '<div class="rp-a" style="--i:2;position:absolute;left:800px;top:90px;width:700px;height:620px;' + c.box("overflow:hidden") + '">' + scene(P, id, { fx: 700 }, R) + "</div>" +
      (cap || fig ? '<div class="rp-a" style="--i:4;position:absolute;left:800px;top:732px;width:700px;display:flex;justify-content:space-between;' + c.body + ";font-size:22px;font-style:italic;color:" + rgba(P.ink, 0.75) + '"><span>' + esc(cap) + '</span><span style="font-style:normal;' + c.mono + ';font-size:16px;letter-spacing:.12em">' + esc(fig) + "</span></div>" : "");
  };

  LAYOUTS.stack = function (c) {
    var P = c.P, R = c.R, n = [3, 4, 5][c.dens];
    var items = c.labs("items", ["Draft saved", "New comment", "Update ready", "Reminder", "Shared with you"]), times = c.labs("times", []);
    var out = '<div style="position:absolute;left:110px;top:0;bottom:0;width:650px;display:flex;flex-direction:column;justify-content:center;gap:26px">' + c.kick(c.lab("kicker", ""), 0) + c.H1(104) + c.SUB(32) + "</div>";
    for (var k = n - 1; k >= 0; k--) {
      var front = k === 0, rot = front ? 0 : (k % 2 ? -1 : 1) * (1.5 + k * 1.4), sc = 1 - k * 0.05, ty = -k * 78;
      var ib = k % 2 ? P.accent2 : P.accent;
      out += '<div class="rp-a' + (front ? "" : " rp-back") + '" style="--i:' + (1 + n - k) + ";position:absolute;left:850px;top:" + (390 + (n - 1) * 39) + "px;width:660px;height:180px;translate:0 " + ty + "px;rotate:" + f1(rot) + "deg;scale:" + f1(sc * 100) / 100 + ";transform-origin:50% 100%;" + c.box("display:flex;gap:26px;" + (front ? "align-items:center;padding:0 32px" : "align-items:flex-start;padding:18px 32px 0"), { radius: Math.min(R.radius, 32), shadowScale: front ? 1 : 0.5 }) + '">' +
        '<div style="width:84px;height:84px;flex:none;border-radius:' + Math.min(R.radius, 22) + "px;background:" + ib + ';display:grid;place-items:center">' + (R.icons === "none" ? "" : icon(["bolt", "heart", "star", "burst", "smile"][k], R, Object.assign({}, P, { ink: readOn(ib, P), accent: readOn(ib, P), accent2: readOn(ib, P) }), 50, 0).replace('class="rp-a"', 'class=""')) + "</div>" +
        '<div style="flex:1;min-width:0"><div style="display:flex;justify-content:space-between;align-items:baseline;' + c.body + ";color:" + c.onS + '"><b style="font-size:30px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + esc(items[k] || "") + "</b>" + (times[k] ? '<span style="' + c.mono + ";font-size:18px;opacity:.55;flex:none;margin-left:16px" + '">' + esc(times[k]) + "</span>" : "") + "</div>" +
        '<i style="display:block;height:12px;width:' + [78, 64, 70, 58, 66][k] + "%;margin-top:16px;border-radius:6px;background:" + rgba(c.onS, 0.28) + '"></i><i style="display:block;height:12px;width:' + [46, 38, 52, 30, 44][k] + "%;margin-top:12px;border-radius:6px;background:" + rgba(c.onS, 0.16) + '"></i></div></div>';
    }
    return out;
  };

  LAYOUTS.list = function (c) {
    var P = c.P, R = c.R, n = [3, 5, 6][c.dens];
    var items = c.labs("items", ["Faster first frame", "Cleaner type", "New colour system", "Smoother motion", "Fewer clicks", "Better exports"]);
    var tags = c.labs("tags", ["New", "Improved", "New", "Fixed", "Improved", "New"]);
    var boxed = (R.surface || "flat") !== "flat" || (R.shadow || "none") !== "none";
    var rowH = Math.min(116, Math.floor((640 - (boxed ? (n - 1) * 16 : 0)) / n));
    var out = '<div style="position:absolute;left:100px;top:0;bottom:0;width:620px;display:flex;flex-direction:column;justify-content:center;gap:24px">' + c.kick(c.lab("kicker", ""), 0) + c.H1(100) + c.SUB(30) + "</div>";
    out += '<div style="position:absolute;left:800px;right:100px;top:0;bottom:0;display:flex;flex-direction:column;justify-content:center;gap:' + (boxed ? 16 : 0) + 'px">';
    out += '<div class="rp-a" style="--i:1;display:flex;justify-content:space-between;' + c.mono + ";font-size:18px;letter-spacing:.14em;text-transform:uppercase;color:" + rgba(P.ink, 0.6) + ";padding:0 8px 14px;" + (boxed ? "" : "border-bottom:3px solid " + P.ink) + '"><span>' + esc(c.lab("title", "Top " + n)) + "</span><span>" + esc(c.lab("date", "")) + "</span></div>";
    for (var i = 0; i < n; i++) {
      var hi = i === 0, bg = hi && boxed ? P.accent : P.surface, fg = boxed ? readOn(bg, P) : P.ink;
      var row = "display:flex;align-items:center;gap:28px;height:" + rowH + "px;padding:0 " + (boxed ? 30 : 8) + "px;";
      out += '<div class="rp-a" style="--i:' + (2 + i) + ";" + (boxed ? c.box(row, { bg: bg, radius: Math.min(R.radius, 24), shadowScale: 0.5 }) : row + "border-bottom:" + (c.st.style === "dashed" ? "2px dashed " : "1.5px solid ") + rgba(P.ink, 0.3)) + '">' +
        '<span style="' + c.disp + c.small + ";font-size:" + Math.round(rowH * 0.5) + "px;width:" + Math.round(rowH * 0.9) + "px;color:" + (hi && !boxed ? c.acc : fg) + ";opacity:" + (hi ? 1 : 0.55) + '">' + String(i + 1).padStart(2, "0") + "</span>" +
        '<span style="flex:1;' + c.body + ";font-size:" + Math.round(Math.min(34, rowH * 0.3)) + "px;font-weight:700;color:" + fg + ';white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + esc(items[i] || "") + "</span>" +
        (tags[i] ? '<span style="padding:6px 14px;border:2px solid ' + (hi && boxed ? fg : c.acc) + ";border-radius:" + Math.min(R.radius, 999) + "px;" + c.mono + ";font-size:16px;letter-spacing:.08em;text-transform:uppercase;color:" + (hi && boxed ? fg : c.acc) + '">' + esc(tags[i]) + "</span>" : "") + "</div>";
    }
    return out + "</div>";
  };

  LAYOUTS.isometric = function (c) {
    var P = c.P, R = c.R, C30 = 0.8660254, S30 = 0.5, s = 74, ox = 1060, oy = 345;
    var iso = function (x, y, z) { return [ox + (x - y) * s * C30, oy + (x + y) * s * S30 - z * s]; };
    var ew = c.sw ? Math.min(Math.max(c.sw, 1.5), 3) : 0, ec = c.sw ? c.sc : "none";
    var shade = function (col, t) { return t > 0 ? mix(col, "#ffffff", t) : mix(col, "#000000", -t); };
    var floorC = contrast(P.surface, P.canvas) > 1.1 ? P.surface : mix(P.canvas, dark(P.canvas) ? "#ffffff" : P.ink, 0.07);
    var el = function (polys, i, back, extra) {
      var xs = [], ys = [];
      polys.forEach(function (p) { p.pts.forEach(function (q) { xs.push(q[0]); ys.push(q[1]); }); });
      var x0 = Math.floor(Math.min.apply(0, xs)) - 6, y0 = Math.floor(Math.min.apply(0, ys)) - 6, w = Math.ceil(Math.max.apply(0, xs)) - x0 + 12, h = Math.ceil(Math.max.apply(0, ys)) - y0 + 12;
      return '<svg class="' + (i == null ? "" : "rp-a") + (back ? " rp-back" : "") + '" style="--i:' + (i || 0) + ";position:absolute;left:" + x0 + "px;top:" + y0 + 'px;overflow:visible" width="' + w + '" height="' + h + '" viewBox="' + x0 + " " + y0 + " " + w + " " + h + '">' +
        polys.map(function (p) { return '<polygon points="' + p.pts.map(function (q) { return f1(q[0]) + "," + f1(q[1]); }).join(" ") + '" fill="' + p.fill + '" stroke="' + (p.stroke || ec) + '" stroke-width="' + (p.sw != null ? p.sw : ew) + '" stroke-linejoin="round"/>'; }).join("") + (extra || "") + "</svg>";
    };
    var cube = function (b) {
      var x = b.x, y = b.y, z = b.z || 0, w = b.w, d = b.d, h = b.h, col = b.col, lift = dark(col) ? 0.35 : 0.3;
      return [
        { pts: [iso(x, y + d, z), iso(x + w, y + d, z), iso(x + w, y + d, z + h), iso(x, y + d, z + h)], fill: col },
        { pts: [iso(x + w, y, z), iso(x + w, y + d, z), iso(x + w, y + d, z + h), iso(x + w, y, z + h)], fill: shade(col, -0.25) },
        { pts: [iso(x, y, z + h), iso(x + w, y, z + h), iso(x + w, y + d, z + h), iso(x, y + d, z + h)], fill: shade(col, lift) },
      ];
    };
    var out = '<div style="position:absolute;left:100px;top:0;bottom:0;width:600px;display:flex;flex-direction:column;justify-content:center;gap:24px">' + c.kick(c.lab("kicker", ""), 0) + c.H1(96) + c.SUB(30) + "</div>";
    // the floor slab and its tile grid
    var fw = 7, fd = 5, grid = "";
    for (var gx = 1; gx < fw; gx++) { var a = iso(gx, 0, 0), b = iso(gx, fd, 0); grid += '<path d="M' + f1(a[0]) + " " + f1(a[1]) + " L" + f1(b[0]) + " " + f1(b[1]) + '" stroke="' + rgba(readOn(floorC, P), 0.14) + '" stroke-width="1.5"/>'; }
    for (var gy = 1; gy < fd; gy++) { a = iso(0, gy, 0); b = iso(fw, gy, 0); grid += '<path d="M' + f1(a[0]) + " " + f1(a[1]) + " L" + f1(b[0]) + " " + f1(b[1]) + '" stroke="' + rgba(readOn(floorC, P), 0.14) + '" stroke-width="1.5"/>'; }
    out += el(cube({ x: 0, y: 0, z: -0.4, w: fw, d: fd, h: 0.4, col: floorC }), 1, false, c.dens ? grid : "");
    var blocks = [
      { x: 1, y: 0.8, w: 1.6, d: 1.6, h: 3.6, col: P.accent },
      { x: 3.8, y: 0.5, w: 1.8, d: 1.4, h: 2.1, col: P.accent2 },
      { x: 4.3, y: 2.9, w: 1.3, d: 1.3, h: 1.1, col: P.surface },
      { x: 1.2, y: 3.3, w: 2.4, d: 1.1, h: 0.55, col: P.ink },
    ];
    if (c.dens === 0) blocks = blocks.slice(0, 2);
    if (c.dens === 2) blocks.push({ x: 6, y: 3.6, w: 0.7, d: 0.7, h: 0.7, col: P.accent }, { x: 0.3, y: 0.2, w: 0.5, d: 0.5, h: 0.5, col: P.accent2 }, { x: 5.9, y: 0.3, w: 0.6, d: 0.6, h: 1.4, col: P.surface });
    blocks.sort(function (p, q) { return p.x + p.w / 2 + p.y + p.d / 2 - (q.x + q.w / 2 + q.y + q.d / 2); });
    var shadowOn = (R.shadow || "none") !== "none";
    blocks.forEach(function (b, i) {
      out += (shadowOn ? el([{ pts: [iso(b.x + b.w, b.y, 0), iso(b.x + b.w + b.h * 0.55, b.y - b.h * 0.165, 0), iso(b.x + b.w + b.h * 0.55, b.y + b.d - b.h * 0.165, 0), iso(b.x + b.w, b.y + b.d, 0)], fill: rgba("#000000", dark(P.canvas) ? 0.3 : 0.12), stroke: "none", sw: 0 }], null) : "") + el(cube(b), 2 + i, b.h < 0.8 && c.dens === 2);
    });
    // a cylinder: circles on the ground plane project to 1.22 : 0.71 ellipses
    if (c.dens) {
      var cx = 6.1, cy = 1.4, r = 0.5, hh = 1.5, top = iso(cx, cy, hh), bot = iso(cx, cy, 0), rx = r * s * 1.2247, ry = r * s * 0.7071, col = P.surface === P.canvas ? P.accent2 : mix(P.accent, P.surface, 0.5);
      out += '<svg class="rp-a" style="--i:7;position:absolute;left:' + f1(top[0] - rx - 6) + "px;top:" + f1(top[1] - ry - 6) + 'px;overflow:visible" width="' + f1(rx * 2 + 12) + '" height="' + f1(bot[1] - top[1] + ry * 2 + 12) + '"><g transform="translate(' + f1(rx + 6) + " " + f1(ry + 6) + ')"><path d="M' + f1(-rx) + " 0 V" + f1(bot[1] - top[1]) + " A" + f1(rx) + " " + f1(ry) + " 0 0 0 " + f1(rx) + " " + f1(bot[1] - top[1]) + " V0 Z" + '" fill="' + shade(col, -0.18) + '" stroke="' + ec + '" stroke-width="' + ew + '"/><ellipse cx="0" cy="0" rx="' + f1(rx) + '" ry="' + f1(ry) + '" fill="' + shade(col, 0.3) + '" stroke="' + ec + '" stroke-width="' + ew + '"/></g></svg>';
    }
    return out;
  };

  LAYOUTS.chat = function (c) {
    var P = c.P, R = c.R, rad = Math.min(R.radius, 36), tail = Math.min(rad, 6);
    var m = c.labs("messages", ["Have you seen this?", "Wait, really?", "Sending it now.", "Perfect."]);
    var inBg = contrast(P.surface, P.canvas) > 1.08 ? P.surface : mix(P.canvas, P.ink, 0.08);
    var seq = [["in", m[0]], ["out", c.hl, true]];
    if (c.dens >= 1) seq.push(["in", c.sub || m[1]]);
    if (c.dens === 2) seq.push(["out", m[2]], ["in", m[3]]);
    seq.push(["typing"]);
    var avatar = function (col, t) { return '<div style="width:72px;height:72px;flex:none;border-radius:' + (rad >= 12 ? "50%" : "0") + ";background:" + col + ";display:grid;place-items:center;" + c.body + ";font-size:30px;font-weight:800;color:" + readOn(col, P) + ";border:" + Math.min(c.sw, 3) + "px solid " + P.ink + '">' + t + "</div>"; };
    var out = '<div class="rp-a" style="--i:0;position:absolute;left:220px;right:220px;top:' + (c.dens === 2 ? 34 : 56) + "px;display:flex;align-items:center;gap:18px;padding-bottom:22px;border-bottom:2px solid " + rgba(P.ink, 0.15) + '">' + avatar(P.accent2, "S") + '<div style="' + c.body + '"><div style="font-size:32px;font-weight:800">' + esc(c.lab("title", "Studio")) + '</div><div style="font-size:22px;opacity:.6">' + esc(c.lab("badge", "3 people")) + "</div></div></div>";
    out += '<div style="position:absolute;left:220px;right:220px;top:' + (c.dens === 2 ? 150 : 180) + 'px;bottom:40px;display:flex;flex-direction:column;justify-content:center;gap:' + (c.dens === 2 ? 18 : 30) + 'px">';
    seq.forEach(function (s, i) {
      var io = s[0] === "in" || s[0] === "typing", big = s[2];
      var radius = io ? rad + "px " + rad + "px " + rad + "px " + tail + "px" : rad + "px " + rad + "px " + tail + "px " + rad + "px";
      var bg = io ? inBg : P.accent, fg = readOn(bg, P);
      var inner = s[0] === "typing" ? '<span style="display:flex;gap:10px;padding:6px 0">' + [0.9, 0.6, 0.35].map(function (o) { return '<i style="width:18px;height:18px;border-radius:50%;background:' + rgba(fg, o) + '"></i>'; }).join("") + "</span>"
        : big ? '<div style="' + c.disp + c.small + ";font-size:" + headSize(c.hl, 92) + "px;color:" + fg + '">' + esc(s[1]) + "</div>" : '<span style="' + c.body + ";font-size:" + (c.dens === 2 ? 32 : 40) + "px;color:" + fg + '">' + esc(s[1]) + "</span>";
      out += '<div class="rp-a" style="--i:' + (1 + i) + ";display:flex;align-items:flex-end;gap:16px;" + (io ? "" : "flex-direction:row-reverse;") + '">' + (io ? avatar(P.accent2, "S") : avatar(P.ink, "Y")) +
        '<div style="position:relative;max-width:' + (big ? 1000 : 760) + "px;" + c.box("padding:" + (big ? "34px 46px" : "22px 34px") + ";border-radius:" + radius, { bg: bg, shadowScale: 0.5, stroke: Math.min(c.sw, 3) }) + '">' + inner +
        (big ? '<span style="position:absolute;left:-18px;bottom:-22px;padding:6px 14px;border-radius:999px;background:' + P.surface + ";border:2px solid " + rgba(P.ink, 0.2) + ";" + c.body + ";font-size:20px;font-weight:700;color:" + c.onS + '">♥ 12</span>' : "") + "</div></div>";
    });
    return out + "</div>";
  };

  LAYOUTS.ticker = function (c) {
    var P = c.P, R = c.R, rad = Math.min(R.radius, 12);
    var items = c.labs("ticker", ["Top of the hour", "Full report at nine", "Clear skies this evening", "Tomorrow: the follow-up"]);
    var sep = (R.icons === "glyph" ? (ICONS[R.iconSet] || ICONS["default"]).glyphs.star : "◆");
    var band = dark(P.canvas) ? mix(P.canvas, "#000000", 0.2) : P.ink, onB = readOn(band, P);
    var out = '<div class="rp-a rp-back" style="--i:0;position:absolute;inset:0">' + scene(P, "tk", { fx: 1240 }, R) + '</div><div class="rp-m" style="inset:0;background:linear-gradient(0deg,' + rgba("#000000", 0.45) + ",transparent 55%)" + '"></div>';
    if (!c.hidden("bug")) out += '<div class="rp-a" style="--i:6;position:absolute;right:70px;top:56px;padding:12px 22px;' + c.box(c.disp + ";font-size:30px;color:" + c.onS + ";text-shadow:none", { radius: rad, shadowScale: 0.4 }) + '">' + esc(c.lab("bug", "ONE")) + "</div>";
    out += '<div style="position:absolute;left:90px;bottom:150px;max-width:1260px;display:flex;flex-direction:column;align-items:flex-start">' +
      (c.hidden("kicker") ? "" : '<div class="rp-a" style="--i:1;padding:10px 22px;background:' + P.accent + ";color:" + c.onA + ";" + c.body + ";font-size:24px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;border-radius:" + rad + "px " + rad + 'px 0 0">' + esc(c.lab("kicker", "Top story")) + "</div>") +
      '<div class="rp-a" style="--i:2;' + c.box("padding:22px 36px", { radius: "0 " + rad + "px " + rad + "px " + rad + "px" }) + '"><div style="' + c.disp + c.small + ";font-size:" + headSize(c.hl, 80) + "px;color:" + c.onS + '">' + esc(c.hl) + "</div></div>" +
      (c.sub ? '<div class="rp-a" style="--i:3;padding:12px 36px;background:' + band + ";color:" + onB + ";" + c.body + ';font-size:28px">' + esc(c.sub) + "</div>" : "") + "</div>";
    out += '<div class="rp-a" style="--i:4;position:absolute;left:0;right:0;bottom:0;height:78px;background:' + band + ';display:flex;align-items:center;overflow:hidden">' +
      (c.hidden("badge") ? "" : '<div style="flex:none;height:100%;display:flex;align-items:center;padding:0 30px;background:' + P.accent2 + ";color:" + c.onA2 + ";" + c.body + ';font-size:24px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;z-index:1">' + esc(c.lab("badge", "Latest")) + "</div>") +
      '<div class="rp-tick" style="flex:1;white-space:nowrap;padding-left:30px;' + c.body + ";font-size:28px;font-weight:600;color:" + onB + '">' + items.concat(items).map(esc).join('<span style="color:' + P.accent + ';margin:0 26px">' + sep + "</span>") + "</div>" +
      (c.hidden("date") ? "" : '<div style="flex:none;height:100%;display:flex;align-items:center;padding:0 28px;background:' + band + ";border-left:2px solid " + rgba(onB, 0.25) + ";" + c.mono + ";font-size:26px;font-weight:600;color:" + onB + ';z-index:1">' + esc(c.lab("date", "10:24")) + "</div>") + "</div>";
    return out;
  };

  LAYOUTS.floorplan = function (c) {
    // an architectural plan: poché walls, door swings, glazing, a stair, rooms named from labels.places,
    // one room picked out and the route to it (wayfinding)
    var P = c.P, R = c.R, ink = P.ink, T = 22, t = 12;
    var floor = contrast(P.surface, P.canvas) > 1.1 ? P.surface : mix(P.canvas, ink, dark(P.canvas) ? 0.1 : 0.05);
    var rooms = c.labs("places", ["Studio", "Study", "Bath", "Stair", "Hall"]);
    var hi = vis(P.accent, floor, P, 1.8), thin = rgba(ink, 0.8);
    var o = '<svg class="rp-a rp-back" style="--i:1;position:absolute;inset:0" width="1600" height="900">';
    o += '<rect x="720" y="110" width="780" height="680" fill="' + floor + '"/>';
    o += '<rect x="731" y="121" width="318" height="388" fill="' + rgba(P.accent, 0.2) + '"/>';
    // walls as solid poché, openings left as gaps
    var W = [[709, 99, 802, T], [709, 779, 240, T], [1080, 779, 431, T], [709, 99, T, 702], [1489, 99, T, 702],
      [1054, 110, t, 280], [1054, 470, t, 56], [720, 514, 130, t], [950, 514, 316, t], [1254, 330, t, 260], [1254, 680, t, 110], [1060, 324, 270, t], [1430, 324, 70, t]];
    o += W.map(function (w) { return '<rect x="' + w[0] + '" y="' + w[1] + '" width="' + w[2] + '" height="' + w[3] + '" fill="' + ink + '"/>'; }).join("");
    // glazing in the outer wall: a break in the poché with two thin panes
    [[790, 99, 190, T, 0], [1150, 99, 250, T, 0], [1489, 400, T, 160, 1]].forEach(function (g) { o += '<rect x="' + g[0] + '" y="' + g[1] + '" width="' + g[2] + '" height="' + g[3] + '" fill="' + P.canvas + '" stroke="' + ink + '" stroke-width="2"/>' + (g[4] ? '<path d="M' + (g[0] + T / 2) + " " + g[1] + " V" + (g[1] + g[3]) + '" stroke="' + ink + '" stroke-width="2"/>' : '<path d="M' + g[0] + " " + (g[1] + T / 2) + " H" + (g[0] + g[2]) + '" stroke="' + ink + '" stroke-width="2"/>'); });
    // doors: the leaf and its quarter-circle swing
    var door = function (hx, hy, lx, ly, ax, ay, sweep) { var rr = Math.hypot(lx - hx, ly - hy); return '<path d="M' + hx + " " + hy + " L" + lx + " " + ly + '" stroke="' + ink + '" stroke-width="4"/><path d="M' + lx + " " + ly + " A" + rr + " " + rr + " 0 0 " + sweep + " " + ax + " " + ay + '" fill="none" stroke="' + thin + '" stroke-width="2" stroke-dasharray="' + (c.st.style === "dashed" ? "6 5" : "0") + '"/>'; };
    o += door(1060, 390, 980, 390, 1060, 470, 0) + door(850, 520, 850, 600, 950, 520, 0) + door(1260, 590, 1340, 590, 1260, 680, 1) + door(1330, 330, 1330, 410, 1430, 330, 1) + door(1080, 790, 1080, 700, 949, 790, 0);
    // a stair: treads and the direction of travel
    for (var k = 0; k < 9; k++) o += '<path d="M1290 ' + (420 + k * 38) + ' H1470" stroke="' + thin + '" stroke-width="2"/>';
    o += '<path d="M1380 740 V440 M1366 460 L1380 440 L1394 460" fill="none" stroke="' + ink + '" stroke-width="3"/>';
    if (c.dens) {
      // furniture at plan scale
      o += '<circle cx="890" cy="300" r="56" fill="none" stroke="' + thin + '" stroke-width="2"/>' + [[890, 222], [890, 378], [812, 300], [968, 300]].map(function (q) { return '<rect x="' + (q[0] - 16) + '" y="' + (q[1] - 16) + '" width="32" height="32" rx="6" fill="none" stroke="' + thin + '" stroke-width="2"/>'; }).join("");
      o += '<rect x="1090" y="140" width="220" height="150" rx="6" fill="none" stroke="' + thin + '" stroke-width="2"/><rect x="1090" y="140" width="220" height="40" fill="none" stroke="' + thin + '" stroke-width="2"/>';
      o += '<rect x="1080" y="360" width="150" height="80" rx="30" fill="none" stroke="' + thin + '" stroke-width="2"/><rect x="760" y="700" width="240" height="60" rx="10" fill="none" stroke="' + thin + '" stroke-width="2"/>';
    }
    o += "</svg>";
    // the route from the entrance to the highlighted room
    var route = '<svg class="rp-a" style="--i:3;position:absolute;inset:0" width="1600" height="900"><path d="M1015 840 C1015 700 900 640 900 520 S890 380 890 330" fill="none" stroke="' + hi + '" stroke-width="7" stroke-linecap="round" stroke-dasharray="2 16"/><circle cx="1015" cy="840" r="14" fill="' + vis(P.accent2, P.canvas, P, 1.8) + '" stroke="' + ink + '" stroke-width="3"/><circle cx="890" cy="318" r="18" fill="' + hi + '" stroke="' + ink + '" stroke-width="3"/></svg>';
    var lab = function (text, x, y, i, on) { return text ? '<div class="rp-a rp-t" style="--i:' + (4 + i) + ";position:absolute;left:" + (x - 150) + "px;top:" + (y - 14) + "px;width:300px;text-align:center;" + c.body + ";font-size:" + (on ? 24 : 20) + "px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:" + (on ? readOn(mix(floor, P.accent, 0.2), P) : rgba(readOn(floor, P), 0.75)) + '">' + esc(text) + "</div>" : ""; };
    var labels = lab(rooms[0], 890, 440, 0, true) + lab(rooms[1], 1180, 222 + (c.dens ? 90 : 0), 1) + lab(rooms[2], 1157, 480, 2) + lab(rooms[3], 1380, 390, 3) + lab(rooms[4], 1080, 640, 4);
    var north = '<svg class="rp-a" style="--i:9;position:absolute;left:600px;top:720px" width="70" height="90" viewBox="0 0 70 90"><path d="M35 8 L52 70 L35 58 L18 70 Z" fill="' + ink + '"/><text x="35" y="88" text-anchor="middle" font-family="' + esc(c.monoFam) + ',monospace" font-size="16" font-weight="700" fill="' + ink + '">N</text></svg>';
    var sl = c.lab("scale", ""), scale = sl ? '<div class="rp-a" style="--i:10;position:absolute;left:90px;bottom:80px;display:flex;align-items:center;gap:14px;' + c.mono + ";font-size:18px;color:" + rgba(ink, 0.7) + '"><i style="display:block;width:160px;height:10px;border:2px solid ' + ink + ";background:linear-gradient(90deg," + ink + " 50%,transparent 50%)" + '"></i>' + esc(sl) + "</div>" : "";
    var text = '<div style="position:absolute;left:90px;top:0;bottom:0;width:520px;display:flex;flex-direction:column;justify-content:center;gap:24px">' + c.kick(c.lab("kicker", ""), 2) + c.H1(88) + c.SUB(28) + "</div>";
    return o + route + labels + north + scale + text;
  };

  LAYOUTS.record = function (c) {
    // a record sleeve with the headline on it and the disc sliding out: grooves, sheen, a centre label
    var P = c.P, R = c.R, dk = dark(P.canvas), vinyl = dk ? mix(P.canvas, "#000000", 0.55) : "#121212";
    var lb = P.accent2 !== P.accent ? P.accent2 : P.surface, onL = readOn(lb, P), title = c.lab("title", ""), side = c.lab("badge", "");
    var disc = '<div class="rp-a rp-back" style="--i:2;position:absolute;left:600px;top:150px;width:600px;height:600px;border-radius:50%;background:conic-gradient(from 20deg,transparent 0 6%,' + rgba("#ffffff", 0.13) + " 11%,transparent 17% 50%," + rgba("#ffffff", 0.1) + ' 61%,transparent 67%),repeating-radial-gradient(circle,' + mix(vinyl, "#ffffff", 0.07) + " 0 2px," + vinyl + " 2px 5px);box-shadow:0 0 0 2px " + (dk ? rgba(P.ink, 0.25) : rgba("#000000", 0.5)) + "," + (shadowCss(R, P) === "none" ? "0 20px 40px " + rgba("#000000", 0.25) : shadowCss(R, P, 0.6)) + '">' +
      '<div style="position:absolute;left:190px;top:190px;width:220px;height:220px;border-radius:50%;background:' + lb + ";box-shadow:0 0 0 10px " + mix(vinyl, "#000000", 0.3) + ';display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center;padding:0 26px">' +
      (title ? '<div style="' + c.body + ";font-size:20px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:" + onL + ';margin-bottom:34px">' + esc(title) + "</div>" : "") +
      '<i style="display:block;width:18px;height:18px;border-radius:50%;background:' + P.canvas + '"></i>' + (side ? '<div style="' + c.body + ";font-size:18px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:" + onL + ';margin-top:30px">' + esc(side) + "</div>" : "") + "</div></div>";
    var sleeve = '<div class="rp-a" style="--i:0;position:absolute;left:110px;top:150px;width:600px;height:600px;' + c.box("display:flex;flex-direction:column;justify-content:space-between;padding:48px;overflow:hidden", { bg: P.accent, radius: Math.min(R.radius, 12) }) + '">' +
      '<div style="display:flex;justify-content:space-between;align-items:flex-start">' + c.kick(c.lab("kicker", ""), 1, "color:" + c.onA) + c.emblem(90, 3, P.accent) + "</div>" +
      '<div style="' + c.disp + (headSize(c.hl, 104) < 90 ? c.small : "") + ";font-size:" + headSize(c.hl, 104) + "px;color:" + c.onA + '">' + esc(c.hl) + "</div></div>";
    var tracks = c.labs("items", []), side2 = '<div style="position:absolute;left:1270px;right:90px;top:0;bottom:0;display:flex;flex-direction:column;justify-content:center;gap:18px">' + c.SUB(28) +
      (tracks.length ? '<div class="rp-a rp-t" style="--i:4;display:flex;flex-direction:column;gap:10px;margin-top:10px;' + c.body + ';font-size:22px">' + tracks.slice(0, 6).map(function (x, i) { return '<div style="display:flex;gap:14px;border-top:1.5px solid ' + rgba(P.ink, 0.25) + ';padding-top:8px"><span style="' + c.mono + ';opacity:.6">' + String(i + 1).padStart(2, "0") + "</span><span>" + esc(x) + "</span></div>"; }).join("") + "</div>" : "") + "</div>";
    return disc + sleeve + side2;
  };

  // corner print only when the style writes it (labels.corner: up to four entries, clockwise from top left);
  // nothing is invented: made-up coordinates, folios and figure numbers read as filler
  function corners(c) {
    var v = c.labs("corner", []);
    if (!v.length) return "";
    var P = c.P, s = "position:absolute;" + c.mono + ";font-size:17px;letter-spacing:.12em;text-transform:uppercase;color:" + rgba(P.ink, 0.62) + ";z-index:4;white-space:nowrap";
    return v.slice(0, 4).map(function (t, i) { return '<div class="rp-a rp-t" style="--i:' + (8 + i) + ";" + s + ";" + ["left:30px;top:24px", "right:30px;top:24px", "right:30px;bottom:22px", "left:30px;bottom:22px"][i] + '">' + esc(t) + "</div>"; }).join("");
  }

  function render(preset, o) {
    o = o || {};
    var R = JSON.parse(JSON.stringify(preset.recipe || preset));
    var P = R.palette = R.palette || {};
    // "in your brand": keep the style, take the brand's colours and type
    if (o.brand) {
      var b = o.brand;
      if (b.canvas) P.canvas = b.canvas; if (b.ink) P.ink = b.ink; if (b.accent) P.accent = b.accent; if (b.surface) P.surface = b.surface;
      if (b.display) R.fonts = Object.assign({}, R.fonts, { display: b.display }); if (b.body) R.fonts = Object.assign({}, R.fonts, { body: b.body });
    }
    P.canvas = P.canvas || "#f4f1ea"; P.ink = P.ink || "#16181d"; P.accent = P.accent || "#e2724f"; P.accent2 = P.accent2 || P.accent; P.surface = P.surface || P.canvas; P.muted = P.muted || rgba(P.ink, 0.45);
    R.fonts = R.fonts || { display: "Inter", body: "Inter" };
    R.radius = R.radius == null ? 16 : R.radius;
    R.effects = [].concat(R.effects || []);
    var id = String(preset.id || "p").replace(/[^a-z0-9]/gi, "");
    var cls = "rpx" + id + ++SEQ;
    var bg = R.surface === "glass" && !dark(P.canvas) ? "radial-gradient(circle at 20% 20%," + rgba(P.accent, 0.55) + ",transparent 45%),radial-gradient(circle at 85% 80%," + rgba(P.accent2, 0.55) + ",transparent 45%)," + P.canvas
      : R.surface === "glass" ? "radial-gradient(circle at 25% 25%," + rgba(P.accent, 0.35) + ",transparent 45%),radial-gradient(circle at 80% 75%," + rgba(P.accent2, 0.35) + ",transparent 45%)," + P.canvas : P.canvas;
    var c = ctx(R, P, { headline: o.headline || "Your film starts here", sub: o.sub == null ? "One line that lands." : o.sub });
    var L = LAYOUTS[R.layout] ? R.layout : "data";
    var mot = motif(R, P, id);
    if (has(R.effects, "blur-depth")) {
      // depth of field: the decoration goes soft and a few out-of-focus lights sit behind everything
      var br = rng(hash(id + "bk")), bok = "";
      // on dark canvases lights glow in the accents; on light ones they are pale highlights, not coloured blobs
      var dkc = dark(P.canvas);
      for (var k = 0; k < 7; k++) { var r = 40 + br() * 110, bc = k % 2 ? P.accent2 : P.accent, bx = Math.round(br() * 1500), by = Math.round(br() * 800), a = 0.22 + br() * 0.2; bok += '<i style="position:absolute;left:' + bx + "px;top:" + by + "px;width:" + Math.round(r) + "px;height:" + Math.round(r) + "px;border-radius:50%;background:" + (dkc ? rgba(bc, a) : rgba(mix(bc, "#ffffff", 0.7), a + 0.15)) + ";border:2px solid " + (dkc ? rgba(bc, 0.3) : rgba("#ffffff", 0.5)) + '"></i>'; }
      mot = '<div class="rp-m" style="inset:0;filter:blur(9px)">' + bok + mot + "</div>";
    }
    return '<div class="rp-stage rp-m-' + (R.motion || "fade") + " " + cls + '" style="width:' + W + "px;height:" + H + "px;background:" + bg + '">' + fxStyle(R, P, cls) + textureBack(R, P, id) + mot + LAYOUTS[L](c) + corners(c) + texture(R, P, id) + effects(R, P, id) + "</div>";
  }

  var css = ".rp-stage{position:relative;overflow:hidden;transform-origin:0 0;font-synthesis:none}.rp-stage *{box-sizing:border-box}.rp-tex,.rp-m,.rp-fx{position:absolute;pointer-events:none}.rp-tex{inset:0;width:100%;height:100%;z-index:5}.rp-fx{z-index:6}.rp-stage svg .rp-a,.rp-stage svg.rp-a{transform-box:fill-box;transform-origin:center}" +
    // hover previews how the style moves: each motion keyword is an entrance, staggered by --i
    ".play .rp-a{animation-duration:.7s;animation-fill-mode:both;animation-delay:calc(var(--i,0) * 90ms)}" +
    ".play.rp-m-pop .rp-a{animation-name:rpPop;animation-timing-function:cubic-bezier(.34,1.56,.64,1)}.play.rp-m-snap .rp-a{animation-name:rpSnap;animation-duration:.32s;animation-timing-function:cubic-bezier(.2,.9,.1,1)}" +
    ".play.rp-m-slide .rp-a{animation-name:rpSlide;animation-timing-function:cubic-bezier(.22,1,.36,1)}.play.rp-m-mask .rp-a{animation-name:rpMask;animation-duration:.9s;animation-timing-function:cubic-bezier(.77,0,.18,1)}" +
    ".play.rp-m-type .rp-a{animation-name:rpType;animation-duration:1s;animation-timing-function:steps(18)}.play.rp-m-glitch .rp-a{animation-name:rpGlitch;animation-duration:.5s;animation-timing-function:steps(6)}" +
    ".play.rp-m-spring .rp-a{animation-name:rpSpring;animation-duration:1s}.play.rp-m-drift .rp-a{animation-name:rpDrift;animation-duration:1.8s;animation-timing-function:cubic-bezier(.16,1,.3,1)}" +
    ".play.rp-m-step .rp-a{animation-name:rpStep;animation-duration:.8s;animation-timing-function:steps(4)}.play.rp-m-fade .rp-a{animation-name:rpFade;animation-duration:1.6s;animation-timing-function:ease}.play.rp-m-bounce .rp-a{animation-name:rpBounce;animation-duration:.9s}" +
    // effects and tickers move too
    ".play .rp-glint{animation:rpGlint 1.6s cubic-bezier(.4,0,.2,1) both}.play .rp-bars{animation:rpBars .6s steps(5) both}.play .rp-tick{animation:rpTick 7s linear both}" +
    "@keyframes rpPop{from{opacity:0;transform:scale(.6)}to{opacity:1;transform:none}}@keyframes rpSnap{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}" +
    "@keyframes rpSlide{from{opacity:0;transform:translateX(-60px)}to{opacity:1;transform:none}}@keyframes rpMask{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0 0 0 0)}}" +
    "@keyframes rpType{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0 0 0 0)}}@keyframes rpGlitch{0%{opacity:0;transform:translateX(-14px)}25%{opacity:1;transform:translateX(10px)}50%{transform:translateX(-6px)}75%{transform:translateX(4px)}to{transform:none}}" +
    "@keyframes rpSpring{0%{opacity:0;transform:scale(.3)}45%{opacity:1;transform:scale(1.12)}65%{transform:scale(.94)}82%{transform:scale(1.03)}to{transform:none}}@keyframes rpDrift{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:none}}" +
    "@keyframes rpStep{0%{opacity:0;transform:rotate(-6deg) scale(.8)}50%{opacity:1;transform:rotate(3deg)}to{transform:none}}@keyframes rpFade{from{opacity:0}to{opacity:1}}" +
    "@keyframes rpBounce{0%{opacity:0;transform:translateY(-80px)}55%{opacity:1;transform:translateY(0)}72%{transform:translateY(-22px)}86%{transform:translateY(0)}93%{transform:translateY(-6px)}to{transform:none}}" +
    "@keyframes rpGlint{from{transform:translateX(-70%)}to{transform:none}}@keyframes rpBars{0%{transform:translateX(-40px);opacity:0}40%{transform:translateX(30px);opacity:1}70%{transform:translateX(-12px)}to{transform:none}}@keyframes rpTick{from{transform:none}to{transform:translateX(-40%)}}" +
    "@media (prefers-reduced-motion:reduce){.play .rp-a,.play .rp-glint,.play .rp-bars,.play .rp-tick{animation:none!important}}";

  // Google Fonts stylesheets for the weights the styles actually draw with. Each (family, weight) is its own
  // request: a weight a family lacks makes Google reject the whole request, so a missing bold can never cost a
  // family its regular. Body text is drawn at 400 and at 600-800 (labels, chips, rows); with font-synthesis off,
  // loading the 700 face makes every bold request render bold instead of falling back to regular.
  function fontsHrefs(list) {
    var urls = [], seen = {};
    var add = function (fam, spec) { if (!fam) return; var u = "https://fonts.googleapis.com/css2?family=" + encodeURIComponent(fam).replace(/%20/g, "+") + ":" + spec + "&display=swap"; if (!seen[u]) { seen[u] = 1; urls.push(u); } };
    (list || []).forEach(function (p) {
      var f = (p.recipe || p).fonts || {}, dw = f.displayWeight || 800, bw = f.bodyWeight || 400;
      add(f.display, f.italic ? "ital,wght@1," + dw : "wght@" + dw);
      add(f.body, "wght@" + bw); add(f.body, "wght@700");
      if (f.italic) add(f.body, "ital,wght@1," + bw);
      if (f.mono) { add(f.mono, "wght@400"); add(f.mono, "wght@700"); }
    });
    add("JetBrains Mono", "wght@400;600");
    return urls;
  }
  function fontsHref(list) { return fontsHrefs(list)[0]; }
  // add the stylesheets to a document (once each)
  function loadFonts(list, doc) {
    doc = doc || document;
    fontsHrefs(list).forEach(function (u) { if (doc.querySelector('link[href="' + u + '"]')) return; var l = doc.createElement("link"); l.rel = "stylesheet"; l.href = u; doc.head.appendChild(l); });
  }

  root.RasaPresets = { render: render, css: css, fontsHref: fontsHref, fontsHrefs: fontsHrefs, loadFonts: loadFonts, layouts: Object.keys(LAYOUTS), W: W, H: H };
  if (typeof module !== "undefined") module.exports = root.RasaPresets;
})(typeof window !== "undefined" ? window : globalThis);
