// Style preset renderer: draws any preset recipe (taxonomy/presets/SCHEMA.md) as a 1600x900 specimen on the
// user's own words, so hundreds of styles can be browsed by eye. Plain browser JS, no dependencies; used by the
// Director's Console gallery, the website and `presets.mjs stills`.
//   RasaPresets.render(preset, { headline, sub, brand }) -> HTML string (a .rp-stage, 1600x900)
//   RasaPresets.css -> the shared stylesheet (inject once);  RasaPresets.fontsHref(presets) -> Google Fonts URL
(function (root) {
  "use strict";
  var W = 1600, H = 900;

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

  // ---- icons (viewBox 0 0 100 100) ----------------------------------------------------------------
  var PATHS = {
    burst: "M50 12 L50 88 M17 30 L83 70 M17 70 L83 30 M30 15 L70 85 M70 15 L30 85 M12 50 L88 50",
    crown: "M16 72 L20 30 L38 52 L50 22 L62 52 L80 30 L84 72 Z M18 84 L82 84",
    star: "M50 10 L61 38 L91 39 L67 58 L76 88 L50 70 L24 88 L33 58 L9 39 L39 38 Z",
    bolt: "M56 8 L24 56 L47 56 L40 92 L76 42 L53 42 Z",
    heart: "M50 86 C20 64 10 46 18 30 C26 14 44 16 50 32 C56 16 74 14 82 30 C90 46 80 64 50 86 Z",
    knot: "M35 30 a18 18 0 1 1 30 0 a18 18 0 1 1 0 40 a18 18 0 1 1 -30 0 a18 18 0 1 1 0 -40 Z M42 42 a10 10 0 1 1 16 16 a10 10 0 1 1 -16 -16 Z",
    smile: "M50 12 a38 38 0 1 1 -0.1 0 Z M34 42 L34 46 M66 42 L66 46 M32 60 Q50 76 68 60",
    arrow: "M14 70 C30 30 60 24 82 34 M70 20 L84 34 L68 46",
  };
  var PIX = {
    heart: ["0110110", "1111111", "1111111", "0111110", "0011100", "0001000"],
    star: ["0001000", "0011100", "1111111", "0111110", "0110110", "1100011"],
    bolt: ["0001110", "0011100", "0111111", "0001110", "0011100", "0110000"],
  };
  function icon(name, R, P, size, k) {
    var style = R.icons || "line";
    var fill = k % 2 ? P.accent2 : P.accent;
    var s = size;
    if (style === "none") return "";
    if (style === "pixel") {
      var g = PIX[name] || PIX.star, cell = s / 8;
      return '<svg class="rp-a" style="--i:' + k + '" width="' + s + '" height="' + s + '" viewBox="0 0 ' + s + " " + s + '">' + g.map(function (row, y) { return row.split("").map(function (b, x) { return b === "1" ? '<rect x="' + (x * cell + cell / 2) + '" y="' + (y * cell + cell) + '" width="' + cell + '" height="' + cell + '" fill="' + fill + '"/>' : ""; }).join(""); }).join("") + "</svg>";
    }
    if (style === "glyph") return '<div class="rp-a" style="--i:' + k + ";font:700 " + s * 0.9 + "px/1 '" + esc((R.fonts || {}).display) + "',serif;color:" + fill + '">' + ({ burst: "✳", crown: "♛", star: "★", bolt: "⚡", heart: "♥", knot: "✺", smile: "☺", arrow: "↗" }[name] || "✳") + "</div>";
    if (style === "emoji3d") return '<div class="rp-a" style="--i:' + k + ";width:" + s + "px;height:" + s + "px;border-radius:50%;background:radial-gradient(circle at 32% 28%, #fff 0 8%, " + mix(fill, "#ffffff", 0.35) + " 22%, " + fill + " 55%, " + mix(fill, "#000000", 0.35) + ' 100%);box-shadow:0 18px 30px ' + rgba("#000000", 0.18) + '"></div>';
    var d = PATHS[name] || PATHS.star;
    var closed = /Z/.test(d) && name !== "knot";
    var sw = style === "doodle" ? 7 : style === "line" ? 4 : 3.5;
    var body;
    if (style === "doodle") {
      // hand-drawn: a thick coloured stroke with the ink outline knocked off-register behind it
      body = '<path d="' + d + '" transform="translate(4 4)" fill="' + (closed ? P.ink : "none") + '" stroke="' + P.ink + '" stroke-width="' + sw + '" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<path d="' + d + '" fill="' + (closed ? fill : "none") + '" stroke="' + (closed ? P.ink : fill) + '" stroke-width="' + (closed ? sw * 0.7 : sw) + '" stroke-linecap="round" stroke-linejoin="round"/>';
    } else if (style === "filled") body = '<path d="' + d + '" fill="' + (closed ? fill : "none") + '" stroke="' + (closed ? "none" : fill) + '" stroke-width="' + sw * 1.6 + '" stroke-linecap="round"/>';
    else if (style === "duotone") body = '<path d="' + d + '" fill="' + (closed ? rgba(fill, 0.55) : "none") + '" stroke="' + P.ink + '" stroke-width="' + sw + '" stroke-linecap="round" stroke-linejoin="round"/>';
    else body = '<path d="' + d + '" fill="none" stroke="' + P.ink + '" stroke-width="' + sw + '" stroke-linecap="round" stroke-linejoin="round"/>';
    return '<svg class="rp-a" style="--i:' + k + '" width="' + s + '" height="' + s + '" viewBox="-6 -6 112 112">' + body + "</svg>";
  }

  // ---- surfaces: every card, pill and panel goes through box() --------------------------------------
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
  function box(R, P, extra, opt) {
    opt = opt || {};
    var st = R.stroke || {}, sw = st.width || 0, sc = pick(st.color || "ink", P);
    var bg = opt.bg || P.surface;
    var css = "border-radius:" + (opt.radius != null ? opt.radius : R.radius) + "px;";
    var sf = R.surface || "flat";
    if (sf === "gradient") css += "background:linear-gradient(135deg," + bg + "," + mix(bg, P.accent, 0.38) + ");";
    else if (sf === "glass") css += "background:" + rgba(dark(P.canvas) ? "#ffffff" : bg, dark(P.canvas) ? 0.1 : 0.42) + ";backdrop-filter:blur(18px) saturate(1.4);-webkit-backdrop-filter:blur(18px) saturate(1.4);";
    else if (sf === "metal") css += "background:linear-gradient(180deg," + mix(bg, "#ffffff", 0.7) + " 0%," + mix(bg, "#9a9a9a", 0.5) + " 48%," + mix(bg, "#5a5a5a", 0.5) + " 52%," + mix(bg, "#ffffff", 0.5) + " 100%);";
    else if (sf === "neon") css += "background:" + rgba(P.canvas, 0.6) + ";";
    else css += "background:" + bg + ";";
    if (sw) {
      var bstyle = st.style === "dashed" ? "dashed" : st.style === "double" ? "double" : "solid";
      css += "border:" + (st.style === "double" ? Math.max(sw, 4) : sw) + "px " + bstyle + " " + sc + ";";
    } else if (sf === "glass") css += "border:1.5px solid " + rgba("#ffffff", dark(P.canvas) ? 0.22 : 0.65) + ";";
    else if (sf === "neon") css += "border:2px solid " + P.accent + ";";
    var sh = shadowCss(R, P, opt.shadowScale);
    if (sf === "clay") sh = (sh === "none" ? "" : sh + ",") + "inset -10px -12px 22px " + rgba("#000000", 0.13) + ",inset 10px 12px 22px " + rgba("#ffffff", 0.7);
    if (sf === "neon") sh = "0 0 18px " + rgba(P.accent, 0.7) + ",inset 0 0 14px " + rgba(P.accent, 0.35);
    if (st.style === "sketch" && sw) sh = (sh === "none" ? "" : sh + ",") + "2px 3px 0 -1px " + sc;
    if (sh && sh !== "none") css += "box-shadow:" + sh + ";";
    return css + (extra || "");
  }

  // ---- canvas: texture and motifs -------------------------------------------------------------------
  function texture(R, P, id) {
    var t = R.texture || "none", ink = P.ink;
    if (t === "grain" || t === "noise" || t === "paper") {
      var f = t === "paper" ? "0.035" : t === "noise" ? "1.4" : "0.85", op = t === "paper" ? 0.09 : t === "noise" ? 0.22 : 0.16;
      return '<svg class="rp-tex" viewBox="0 0 400 225" preserveAspectRatio="none"><filter id="t' + id + '"><feTurbulence type="' + (t === "paper" ? "turbulence" : "fractalNoise") + '" baseFrequency="' + f + '" numOctaves="3" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter><rect width="100%" height="100%" filter="url(#t' + id + ')" opacity="' + op + '"/></svg>';
    }
    if (t === "halftone") return '<div class="rp-tex" style="background-image:radial-gradient(' + rgba(ink, 0.2) + ' 26%, transparent 28%);background-size:14px 14px"></div>';
    if (t === "dots") return '<div class="rp-tex" style="background-image:radial-gradient(' + rgba(ink, 0.14) + ' 1.6px, transparent 2px);background-size:34px 34px"></div>';
    if (t === "grid") return '<div class="rp-tex" style="background-image:linear-gradient(' + rgba(ink, 0.08) + ' 1px,transparent 1px),linear-gradient(90deg,' + rgba(ink, 0.08) + ' 1px,transparent 1px);background-size:64px 64px"></div>';
    if (t === "scanlines" || t === "crt") return '<div class="rp-tex" style="background:linear-gradient(' + rgba("#000000", 0.28) + ' 50%, transparent 50%);background-size:100% 6px' + (t === "crt" ? ";box-shadow:inset 0 0 160px " + rgba("#000000", 0.7) : "") + '"></div>';
    if (t === "riso") return '<div class="rp-tex" style="background-image:radial-gradient(' + rgba(P.accent2 || P.accent, 0.22) + ' 30%, transparent 32%);background-size:10px 10px;mix-blend-mode:multiply"></div>';
    return "";
  }
  function motif(R, P) {
    var m = R.motif || "none", out = "", c = P.accent, c2 = P.accent2 || P.accent;
    var spots = [[90, 110], [1480, 140], [1380, 780], [150, 760], [820, 70], [1520, 470]];
    if (m === "stars") spots.forEach(function (p, i) { out += '<svg class="rp-m" style="left:' + p[0] + "px;top:" + p[1] + 'px" width="46" height="46" viewBox="0 0 10 10"><path d="M5 0 L6 4 L10 5 L6 6 L5 10 L4 6 L0 5 L4 4 Z" fill="' + (i % 2 ? c2 : c) + '"/></svg>'; });
    if (m === "squiggles") spots.slice(0, 4).forEach(function (p, i) { out += '<svg class="rp-m" style="left:' + p[0] + "px;top:" + p[1] + 'px" width="140" height="50" viewBox="0 0 140 50"><path d="M5 25 Q20 5 35 25 T65 25 T95 25 T125 25" fill="none" stroke="' + (i % 2 ? c2 : c) + '" stroke-width="6" stroke-linecap="round"/></svg>'; });
    if (m === "grid") out += '<div class="rp-m" style="inset:0;background-image:linear-gradient(' + rgba(P.ink, 0.1) + ' 1px,transparent 1px),linear-gradient(90deg,' + rgba(P.ink, 0.1) + ' 1px,transparent 1px);background-size:100px 100px"></div>';
    if (m === "crosshair") [[40, 40], [1520, 40], [40, 820], [1520, 820]].forEach(function (p) { out += '<svg class="rp-m" style="left:' + p[0] + "px;top:" + p[1] + 'px" width="40" height="40" viewBox="0 0 40 40"><path d="M20 0 V40 M0 20 H40" stroke="' + P.accent + '" stroke-width="2"/></svg>'; });
    if (m === "stickers") [["NEW", 1330, 90, 12], ["★ 4.9", 120, 740, -10], ["✓", 1420, 700, 8]].forEach(function (s, i) { out += '<div class="rp-m rp-a" style="--i:' + (6 + i) + ";left:" + s[1] + "px;top:" + s[2] + "px;transform:rotate(" + s[3] + "deg);padding:14px 24px;border-radius:999px;background:" + (i % 2 ? c2 : c) + ";color:" + readOn(i % 2 ? c2 : c, P) + ";font:800 30px/1 '" + esc(R.fonts.body) + "',sans-serif;border:4px solid " + P.ink + '">' + s[0] + "</div>"; });
    if (m === "blobs") out += '<svg class="rp-m" style="left:-120px;top:-140px" width="620" height="560" viewBox="0 0 200 180"><path d="M40 20 C90 -10 170 20 180 80 C190 140 120 180 70 160 C20 140 -10 60 40 20 Z" fill="' + rgba(c, 0.55) + '"/></svg><svg class="rp-m" style="right:-140px;bottom:-160px" width="640" height="560" viewBox="0 0 200 180"><path d="M40 20 C90 -10 170 20 180 80 C190 140 120 180 70 160 C20 140 -10 60 40 20 Z" fill="' + rgba(c2, 0.5) + '"/></svg>';
    if (m === "rays") out += '<div class="rp-m" style="left:50%;top:50%;width:2400px;height:2400px;margin:-1200px 0 0 -1200px;background:repeating-conic-gradient(' + rgba(c, 0.16) + ' 0 8deg, transparent 8deg 16deg)"></div>';
    if (m === "confetti") for (var i = 0; i < 26; i++) out += '<i class="rp-m" style="left:' + ((i * 137) % 1560) + "px;top:" + ((i * 89) % 860) + "px;width:" + (10 + (i % 3) * 6) + "px;height:" + (22 - (i % 3) * 4) + "px;background:" + [c, c2, P.ink][i % 3] + ";transform:rotate(" + ((i * 47) % 180) + 'deg)"></i>';
    if (m === "rules") out += '<div class="rp-m" style="left:80px;right:80px;top:70px;height:3px;background:' + P.ink + '"></div><div class="rp-m" style="left:80px;right:80px;bottom:70px;height:1px;background:' + P.ink + '"></div>';
    if (m === "circuit") out += '<svg class="rp-m" style="inset:0" width="1600" height="900"><path d="M0 700 H300 L360 640 H700 M1600 200 H1300 L1240 260 H980 M0 150 H200 L260 210 V380" fill="none" stroke="' + rgba(c, 0.5) + '" stroke-width="3"/><circle cx="700" cy="640" r="8" fill="' + c + '"/><circle cx="980" cy="260" r="8" fill="' + c + '"/><circle cx="260" cy="380" r="8" fill="' + c + '"/></svg>';
    if (m === "orbits") out += '<svg class="rp-m" style="inset:0" width="1600" height="900"><ellipse cx="1180" cy="450" rx="520" ry="200" fill="none" stroke="' + rgba(c, 0.45) + '" stroke-width="2"/><ellipse cx="1180" cy="450" rx="340" ry="340" fill="none" stroke="' + rgba(c2, 0.35) + '" stroke-width="2" stroke-dasharray="8 12"/><circle cx="700" cy="420" r="10" fill="' + c + '"/></svg>';
    return out;
  }

  // ---- layouts ----------------------------------------------------------------------------------------
  function headSize(t, base) { var n = String(t).length; return Math.round(base * (n > 34 ? 0.62 : n > 24 ? 0.78 : n > 16 ? 0.9 : 1)); }
  function layout(R, P, o) {
    var F = R.fonts || {}, hl = o.headline, sub = o.sub;
    var dispCss = "font-family:'" + esc(F.display) + "',sans-serif;font-weight:" + (F.displayWeight || 800) + ";letter-spacing:" + (F.tracking != null ? F.tracking : -0.02) + "em;text-transform:" + ({ upper: "uppercase", lower: "lowercase" }[F["case"]] || "none") + ";line-height:.98;color:" + P.ink;
    var bodyCss = "font-family:'" + esc(F.body) + "',sans-serif;color:" + P.ink;
    var mono = "font-family:'JetBrains Mono',ui-monospace,monospace";
    var onS = readOn(P.surface, P), onA = readOn(P.accent, P), onA2 = readOn(P.accent2, P);
    var H1 = function (size, extra) { return '<div class="rp-a" style="--i:0;' + dispCss + ";font-size:" + headSize(hl, size) + "px;" + (extra || "") + '">' + esc(hl) + "</div>"; };
    var SUB = function (size, extra) { return sub ? '<div class="rp-a" style="--i:1;' + bodyCss + ";opacity:.78;font-size:" + size + "px;line-height:1.35;" + (extra || "") + '">' + esc(sub) + "</div>" : ""; };
    var bars = function (h, n) { var v = [0.45, 0.72, 0.55, 0.95, 0.62, 0.8, 0.5]; return '<div style="display:flex;align-items:flex-end;gap:12px;height:' + h + 'px">' + v.slice(0, n || 5).map(function (x, i) { return '<b style="flex:1;height:' + x * 100 + "%;background:" + (i === 3 ? P.accent : onS) + ";opacity:" + (i === 3 ? 1 : 0.82) + ";border-radius:" + Math.min(R.radius, 8) + 'px"></b>'; }).join("") + "</div>"; };
    var icons = function (size, gap) { return '<div style="display:flex;align-items:center;gap:' + (gap || 60) + 'px">' + icon("burst", R, P, size, 2) + icon("crown", R, P, size * 0.9, 3) + icon("knot", R, P, size, 4) + "</div>"; };
    var pill = function (inner, i, extra) { return '<div class="rp-a" style="--i:' + i + ";" + box(R, P, "display:flex;align-items:center;gap:28px;padding:0 48px;height:118px;" + (extra || ""), { radius: Math.max(R.radius, 60) }) + '">' + inner + "</div>"; };
    var dot = function (c) { return '<i style="display:block;width:36px;height:36px;border-radius:50%;background:' + c + ";border:" + Math.max(3, (R.stroke || {}).width || 0) + "px solid " + P.ink + '"></i>'; };
    var L = R.layout || "cards";

    if (L === "pills") return '<div style="position:absolute;left:170px;right:170px;top:60px;bottom:60px;display:flex;flex-direction:column;justify-content:center;gap:34px">' +
      '<div style="display:flex;justify-content:center;margin-bottom:10px">' + icons(150, 90) + "</div>" +
      pill(dot(P.accent) + '<span style="' + dispCss + ";font-size:" + headSize(hl, 58) + 'px;letter-spacing:-.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:' + onS + '">' + esc(hl) + "</span>", 5) +
      pill('<div style="flex:1;height:10px;border-radius:5px;background:' + onS + ';position:relative"><i style="position:absolute;left:66%;top:50%;width:62px;height:62px;margin:-31px 0 0 -31px;border-radius:50%;background:' + P.surface + ";border:" + Math.max(4, (R.stroke || {}).width || 0) + "px solid " + P.ink + '"></i></div>', 6) +
      pill('<i style="display:block;width:48px;height:48px;border-radius:50%;border:5px solid ' + onS + '"></i><span style="' + bodyCss + ";font-size:46px;color:" + (P.muted || rgba(onS, 0.45)) + ';font-weight:600">' + esc(sub || "search…") + "</span>", 7) + "</div>";

    if (L === "cards") return '<div style="position:absolute;left:110px;top:0;bottom:0;width:640px;display:flex;flex-direction:column;justify-content:center;gap:28px">' + icon("burst", R, P, 90, 1) + H1(104) + SUB(34) + "</div>" +
      '<div class="rp-a" style="--i:3;position:absolute;left:840px;top:170px;width:560px;' + box(R, P, "padding:40px;color:" + onS) + '"><div style="' + bodyCss + ";color:" + onS + ';font-size:28px;font-weight:700;margin-bottom:26px;opacity:.8">This week</div>' + bars(260) + "</div>" +
      '<div class="rp-a" style="--i:4;position:absolute;left:1060px;top:560px;width:430px;' + box(R, P, "padding:30px 34px;display:flex;align-items:center;gap:22px", { bg: P.accent }) + '"><i style="width:96px;height:52px;border-radius:26px;background:' + P.ink + ';position:relative;display:block"><b style="position:absolute;right:6px;top:6px;width:40px;height:40px;border-radius:50%;background:' + P.surface + '"></b></i><span style="' + bodyCss + ";font-size:30px;font-weight:700;color:" + onA + '">Live</span></div>';

    if (L === "bento") {
      var t = function (x, y, w, h, inner, i, bg) { return '<div class="rp-a" style="--i:' + i + ";position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;" + box(R, P, "padding:34px;overflow:hidden;color:" + onS, { bg: bg }) + '">' + inner + "</div>"; };
      return t(80, 80, 820, 460, '<div style="' + dispCss + ";font-size:" + headSize(hl, 92) + "px;color:" + onS + '">' + esc(hl) + "</div>" + SUB(30, "margin-top:22px;color:" + onS), 0) +
        t(930, 80, 590, 220, '<div style="' + dispCss + ";font-size:110px;color:" + onA + '">+32%</div>', 1, P.accent) +
        t(930, 320, 280, 220, '<div style="display:grid;place-items:center;height:100%">' + icon("star", R, P, 120, 2) + "</div>", 2) +
        t(1240, 320, 280, 220, '<div style="display:grid;place-items:center;height:100%">' + icon("bolt", R, P, 120, 3) + "</div>", 3, P.accent2) +
        t(80, 570, 540, 250, bars(170, 7), 4) +
        t(650, 570, 870, 250, '<div style="display:flex;gap:18px;align-items:center;height:100%">' + [P.accent, P.accent2, P.ink, P.muted].map(function (c) { return '<i style="width:110px;height:110px;border-radius:50%;background:' + c + ";border:" + ((R.stroke || {}).width || 0) + "px solid " + P.ink + '"></i>'; }).join("") + '<span style="' + bodyCss + ";font-size:34px;font-weight:700;color:" + onS + '">4 collaborators</span></div>', 5);
    }

    if (L === "poster") return '<div style="position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:36px;padding:0 120px">' + icon("star", R, P, 150, 2) + H1(170) + SUB(40, "max-width:1000px") + "</div>";

    if (L === "hud") return '<div style="position:absolute;inset:60px;border:2px solid ' + rgba(P.accent, 0.6) + '"></div>' +
      '<svg class="rp-a" style="--i:2;position:absolute;left:980px;top:170px" width="560" height="560" viewBox="0 0 200 200"><circle cx="100" cy="100" r="90" fill="none" stroke="' + P.accent + '" stroke-width="1.2" stroke-dasharray="4 6"/><circle cx="100" cy="100" r="62" fill="none" stroke="' + P.accent + '" stroke-width="2"/><path d="M100 10 V40 M100 160 V190 M10 100 H40 M160 100 H190" stroke="' + P.accent + '" stroke-width="2"/><path d="M100 38 A62 62 0 0 1 162 100" fill="none" stroke="' + (P.accent2 || P.accent) + '" stroke-width="6"/></svg>' +
      '<div style="position:absolute;left:130px;top:0;bottom:0;width:820px;display:flex;flex-direction:column;justify-content:center;gap:26px"><div class="rp-a" style="--i:1;' + mono + ";color:" + P.accent + ';font-size:24px;letter-spacing:.3em">LIVE · 00:00:45</div>' + H1(96) + SUB(30) +
      '<div class="rp-a" style="--i:3;display:flex;gap:40px;' + mono + ";color:" + P.accent + ';font-size:44px">' + ["98.2", "0.04", "45"].map(function (x) { return '<span style="border-left:3px solid ' + P.accent + ';padding-left:14px">' + x + "</span>"; }).join("") + "</div></div>";

    if (L === "terminal") return '<div class="rp-a" style="--i:0;position:absolute;left:140px;top:110px;width:1320px;height:680px;' + box(R, P, "overflow:hidden", { bg: P.surface }) + '"><div style="height:62px;display:flex;align-items:center;gap:14px;padding:0 26px;border-bottom:2px solid ' + rgba(onS, 0.18) + '">' + ["#ff5f57", "#febc2e", "#28c840"].map(function (c) { return '<i style="width:20px;height:20px;border-radius:50%;background:' + c + '"></i>'; }).join("") + '<span style="' + mono + ";color:" + rgba(onS, 0.6) + ';font-size:22px;margin-left:16px">~/project — zsh</span></div>' +
      '<div style="padding:44px 50px;' + mono + ";font-size:36px;line-height:1.7;color:" + onS + '"><div style="color:' + rgba(onS, 0.5) + '"># ' + esc(hl) + '</div><div><span style="color:' + P.accent + '">❯</span> render --all</div><div style="color:' + rgba(onS, 0.72) + '">✓ 12 scenes checked</div><div style="color:' + rgba(onS, 0.72) + '">✓ done in 0.8s</div><div><span style="color:' + P.accent + '">❯</span> <i style="display:inline-block;width:20px;height:40px;vertical-align:middle;background:' + P.accent + '"></i></div></div></div>';

    if (L === "window") {
      var win = function (x, y, w, h, title, inner, i) { return '<div class="rp-a" style="--i:' + i + ";position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;" + box(R, P, "overflow:hidden", { radius: Math.min(R.radius, 10) }) + '"><div style="height:54px;display:flex;align-items:center;justify-content:space-between;padding:0 16px;background:' + P.accent + ";border-bottom:" + Math.max(2, (R.stroke || {}).width || 2) + "px solid " + P.ink + ";" + bodyCss + ";font-size:24px;font-weight:700;color:" + onA + '"><span>' + title + '</span><span style="display:flex;gap:8px">' + ["_", "□", "×"].map(function (c) { return '<b style="width:34px;height:34px;display:grid;place-items:center;background:' + P.surface + ";border:2px solid " + P.ink + ";color:" + P.ink + '">' + c + "</b>"; }).join("") + "</span></div>" + inner + "</div>"; };
      return win(760, 90, 740, 470, "preview", '<div style="padding:30px">' + bars(300) + "</div>", 2) +
        win(110, 240, 800, 520, "untitled", '<div style="padding:44px">' + H1(84, "color:" + onS) + SUB(30, "margin-top:20px;color:" + onS) + '<div style="margin-top:34px;display:inline-block;padding:14px 50px;' + box(R, P, "font:700 30px/1 '" + esc(F.body) + "',sans-serif;color:" + onS, { radius: Math.min(R.radius, 8) }) + '">OK</div></div>', 1);
    }

    if (L === "editorial") return '<div style="position:absolute;left:90px;right:90px;top:70px;display:flex;justify-content:space-between;' + bodyCss + ';font-size:22px;letter-spacing:.2em;text-transform:uppercase;border-bottom:3px solid ' + P.ink + ';padding-bottom:16px"><span>Issue 07</span><span>The Motion Issue</span><span>Autumn</span></div>' +
      '<div style="position:absolute;left:90px;top:150px;width:930px">' + H1(150, "line-height:.92") + '<div class="rp-a" style="--i:1;margin-top:36px;display:grid;grid-template-columns:1fr 1fr;gap:34px">' + [0, 1].map(function () { return '<div>' + [1, 0.94, 1, 0.88, 0.97, 0.6].map(function (w) { return '<i style="display:block;height:12px;margin:14px 0;width:' + w * 100 + "%;background:" + rgba(P.ink, 0.22) + '"></i>'; }).join("") + "</div>"; }).join("") + "</div></div>" +
      '<div class="rp-a" style="--i:2;position:absolute;left:1090px;top:160px;width:420px;height:560px;' + box(R, P, "", { bg: P.accent }) + '"></div><div class="rp-a" style="--i:3;position:absolute;left:1090px;top:740px;width:420px;' + bodyCss + ';font-style:italic;font-size:28px;line-height:1.3">' + esc(sub || "“It simply works.”") + "</div>";

    if (L === "device") return '<div style="position:absolute;left:110px;top:0;bottom:0;width:720px;display:flex;flex-direction:column;justify-content:center;gap:28px">' + H1(110) + SUB(34) + "</div>" +
      '<div class="rp-a" style="--i:2;position:absolute;left:980px;top:60px;width:420px;height:780px;border-radius:64px;background:' + P.ink + ';padding:18px;box-shadow:' + shadowCss(R, P) + '"><div style="width:100%;height:100%;border-radius:48px;background:' + P.canvas + ';padding:70px 26px 26px;display:flex;flex-direction:column;gap:18px;overflow:hidden">' +
      [0, 1, 2, 3].map(function (i) { return '<div style="' + box(R, P, "height:110px;display:flex;align-items:center;gap:18px;padding:0 20px", { radius: Math.min(R.radius, 24), shadowScale: 0.5, bg: i === 1 ? P.accent : P.surface }) + '"><i style="width:56px;height:56px;border-radius:14px;background:' + (i === 1 ? P.surface : P.accent2 || P.accent) + '"></i><div style="flex:1"><i style="display:block;height:12px;width:70%;background:' + rgba(i === 1 ? onA : onS, 0.7) + ';border-radius:6px"></i><i style="display:block;height:10px;width:40%;margin-top:12px;background:' + rgba(i === 1 ? onA : onS, 0.35) + ';border-radius:5px"></i></div></div>'; }).join("") + "</div></div>";

    if (L === "diagram") {
      var node = function (x, y, label, i, bg) { return '<div class="rp-a" style="--i:' + i + ";position:absolute;left:" + x + "px;top:" + y + "px;width:300px;height:120px;" + box(R, P, "display:grid;place-items:center;" + bodyCss + ";font-size:32px;font-weight:700;color:" + (bg ? readOn(bg, P) : onS), { bg: bg }) + '">' + label + "</div>"; };
      return '<div style="position:absolute;left:110px;top:80px;width:1380px">' + H1(84) + "</div>" +
        '<svg style="position:absolute;inset:0" width="1600" height="900"><path d="M410 520 H560 M860 520 H1010 M710 580 V700" fill="none" stroke="' + P.ink + '" stroke-width="4" stroke-dasharray="' + ((R.stroke || {}).style === "dashed" ? "12 10" : "0") + '"/><path d="M548 508 L562 520 L548 532 M998 508 L1012 520 L998 532" fill="none" stroke="' + P.ink + '" stroke-width="4"/></svg>' +
        node(110, 460, "Idea", 1) + node(560, 460, "Make", 2, P.accent) + node(1010, 460, "Ship", 3) + node(560, 700, "Share", 4, P.accent2);
    }

    if (L === "collage") return '<div class="rp-a" style="--i:2;position:absolute;left:880px;top:120px;width:560px;height:420px;transform:rotate(4deg);' + box(R, P, "", { bg: P.accent2 }) + '"></div>' +
      '<div class="rp-a" style="--i:3;position:absolute;left:1010px;top:470px;width:420px;height:300px;transform:rotate(-6deg);' + box(R, P, "", { bg: P.accent }) + '"></div>' +
      '<i class="rp-m" style="left:1100px;top:95px;width:180px;height:48px;background:' + rgba("#f4e7b0", 0.85) + ';transform:rotate(-8deg)"></i><i class="rp-m" style="left:1300px;top:450px;width:160px;height:44px;background:' + rgba("#f4e7b0", 0.85) + ';transform:rotate(12deg)"></i>' +
      '<div class="rp-a" style="--i:0;position:absolute;left:120px;top:200px;width:780px;transform:rotate(-2deg);' + box(R, P, "padding:40px 46px", { bg: P.surface }) + '"><div style="' + dispCss + ";font-size:" + headSize(hl, 96) + "px;color:" + onS + '">' + esc(hl) + "</div></div>" + SUB(34, "position:absolute;left:150px;top:620px;width:640px;transform:rotate(1deg)") +
      '<div style="position:absolute;left:180px;top:710px">' + icon("heart", R, P, 110, 4) + "</div>";

    // data
    return '<div style="position:absolute;left:110px;top:90px;width:1380px;display:flex;justify-content:space-between;align-items:flex-start">' + '<div style="width:760px">' + H1(80) + SUB(30, "margin-top:18px") + '</div><div class="rp-a" style="--i:2;' + dispCss + ";font-size:190px;color:" + P.accent + '">128</div></div>' +
      '<div class="rp-a" style="--i:3;position:absolute;left:110px;right:110px;bottom:90px;height:360px;' + box(R, P, "padding:40px") + '"><svg width="100%" height="100%" viewBox="0 0 1300 280" preserveAspectRatio="none"><path d="M0 230 C160 210 260 120 420 150 S700 60 860 90 S1120 30 1300 20" fill="none" stroke="' + P.accent + '" stroke-width="7"/><path d="M0 250 C200 240 360 200 520 210 S840 150 1040 160 S1200 120 1300 110" fill="none" stroke="' + (P.accent2 || P.ink) + '" stroke-width="5" stroke-dasharray="14 10"/></svg></div>';
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
    var id = String(preset.id || "p").replace(/[^a-z0-9]/gi, "");
    var bg = R.surface === "glass" && !dark(P.canvas) ? "radial-gradient(circle at 20% 20%," + rgba(P.accent, 0.55) + ",transparent 45%),radial-gradient(circle at 85% 80%," + rgba(P.accent2, 0.55) + ",transparent 45%)," + P.canvas
      : R.surface === "glass" ? "radial-gradient(circle at 25% 25%," + rgba(P.accent, 0.35) + ",transparent 45%),radial-gradient(circle at 80% 75%," + rgba(P.accent2, 0.35) + ",transparent 45%)," + P.canvas : P.canvas;
    return '<div class="rp-stage rp-m-' + (R.motion || "fade") + '" style="width:' + W + "px;height:" + H + "px;background:" + bg + '">' + motif(R, P) + layout(R, P, { headline: o.headline || "Your film starts here", sub: o.sub == null ? "One line that lands." : o.sub }) + texture(R, P, id) + "</div>";
  }

  var css = ".rp-stage{position:relative;overflow:hidden;transform-origin:0 0;font-synthesis:none}.rp-stage *{box-sizing:border-box}.rp-tex,.rp-m{position:absolute;pointer-events:none}.rp-tex{inset:0;width:100%;height:100%;z-index:5}" +
    // hover previews how the style moves: each motion keyword is an entrance, staggered by --i
    ".play .rp-a{animation-duration:.7s;animation-fill-mode:both;animation-delay:calc(var(--i,0) * 90ms)}" +
    ".play.rp-m-pop .rp-a{animation-name:rpPop;animation-timing-function:cubic-bezier(.34,1.56,.64,1)}.play.rp-m-snap .rp-a{animation-name:rpSnap;animation-duration:.32s;animation-timing-function:cubic-bezier(.2,.9,.1,1)}" +
    ".play.rp-m-slide .rp-a{animation-name:rpSlide;animation-timing-function:cubic-bezier(.22,1,.36,1)}.play.rp-m-mask .rp-a{animation-name:rpMask;animation-duration:.9s;animation-timing-function:cubic-bezier(.77,0,.18,1)}" +
    ".play.rp-m-type .rp-a{animation-name:rpType;animation-duration:1s;animation-timing-function:steps(18)}.play.rp-m-glitch .rp-a{animation-name:rpGlitch;animation-duration:.5s;animation-timing-function:steps(6)}" +
    ".play.rp-m-spring .rp-a{animation-name:rpSpring;animation-duration:1s}.play.rp-m-drift .rp-a{animation-name:rpDrift;animation-duration:1.8s;animation-timing-function:cubic-bezier(.16,1,.3,1)}" +
    ".play.rp-m-step .rp-a{animation-name:rpStep;animation-duration:.8s;animation-timing-function:steps(4)}.play.rp-m-fade .rp-a{animation-name:rpFade;animation-duration:1.6s;animation-timing-function:ease}.play.rp-m-bounce .rp-a{animation-name:rpBounce;animation-duration:.9s}" +
    "@keyframes rpPop{from{opacity:0;transform:scale(.6)}to{opacity:1;transform:none}}@keyframes rpSnap{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}" +
    "@keyframes rpSlide{from{opacity:0;transform:translateX(-60px)}to{opacity:1;transform:none}}@keyframes rpMask{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0 0 0 0)}}" +
    "@keyframes rpType{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0 0 0 0)}}@keyframes rpGlitch{0%{opacity:0;transform:translateX(-14px)}25%{opacity:1;transform:translateX(10px)}50%{transform:translateX(-6px)}75%{transform:translateX(4px)}to{transform:none}}" +
    "@keyframes rpSpring{0%{opacity:0;transform:scale(.3)}45%{opacity:1;transform:scale(1.12)}65%{transform:scale(.94)}82%{transform:scale(1.03)}to{transform:none}}@keyframes rpDrift{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:none}}" +
    "@keyframes rpStep{0%{opacity:0;transform:rotate(-6deg) scale(.8)}50%{opacity:1;transform:rotate(3deg)}to{transform:none}}@keyframes rpFade{from{opacity:0}to{opacity:1}}" +
    "@keyframes rpBounce{0%{opacity:0;transform:translateY(-80px)}55%{opacity:1;transform:translateY(0)}72%{transform:translateY(-22px)}86%{transform:translateY(0)}93%{transform:translateY(-6px)}to{transform:none}}" +
    "@media (prefers-reduced-motion:reduce){.play .rp-a{animation:none!important}}";

  // one stylesheet URL per family, asking only for the weights the styles use (a weight a family lacks makes
  // Google reject the whole request, so one family can never break the others)
  function fontsHrefs(list) {
    var fams = {};
    (list || []).forEach(function (p) { var f = (p.recipe || p).fonts || {}; if (f.display) (fams[f.display] = fams[f.display] || {})[f.displayWeight || 800] = 1; if (f.body) (fams[f.body] = fams[f.body] || {})[400] = 1; });
    fams["JetBrains Mono"] = { 400: 1, 600: 1 };
    return Object.keys(fams).map(function (n) { return "https://fonts.googleapis.com/css2?family=" + encodeURIComponent(n).replace(/%20/g, "+") + ":wght@" + Object.keys(fams[n]).sort().join(";") + "&display=swap"; });
  }
  function fontsHref(list) { return fontsHrefs(list)[0]; }
  // add the stylesheets to a document (once each)
  function loadFonts(list, doc) {
    doc = doc || document;
    fontsHrefs(list).forEach(function (u) { if (doc.querySelector('link[href="' + u + '"]')) return; var l = doc.createElement("link"); l.rel = "stylesheet"; l.href = u; doc.head.appendChild(l); });
  }

  root.RasaPresets = { render: render, css: css, fontsHref: fontsHref, fontsHrefs: fontsHrefs, loadFonts: loadFonts, W: W, H: H };
  if (typeof module !== "undefined") module.exports = root.RasaPresets;
})(typeof window !== "undefined" ? window : globalThis);
