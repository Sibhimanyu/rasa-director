// RasanAI site: a hero tile as a whole mini film in one motion personality.
// Four scenes (title, a footage shot with a lower third and captions, a product
// shot with stats, an end card) joined by the personality's own transition, with
// a scene label and a timeline strip. Text is choreographed by engine.js (MD);
// everything else uses the same personality's eases and duration scale.
// Exposes window.FILM = { build(tl, cell, personality) -> phases }.
(function () {
  "use strict";
  function el(tag, cls, parent, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    if (parent) parent.appendChild(n);
    return n;
  }
  function textCell(parent, cls, content, sub) {
    var c = el("div", "fcell " + cls, parent);
    var b = el("div", "md-block", c);
    b.setAttribute("data-content", content);
    if (sub) b.setAttribute("data-sub", sub);
    return c;
  }
  // nearest value on the personality's duration scale
  function snap(p, ms) {
    var S = p.tempo.scale_ms;
    return S.reduce(function (a, b) { return Math.abs(b - ms) < Math.abs(a - ms) ? b : a; }, S[0]) / 1000;
  }
  function handoff(p) {
    var t = (p.transitions || []).join(" ");
    if (/wipe|mask|grid-shift|push/.test(t)) return "wipe";
    if (/dissolve|crossfade/.test(t) && (p.banned || []).indexOf("opacity-only-entrance") === -1) return "dissolve";
    return "cut";
  }

  function build(tl, cell, p) {
    var E = p.easing;
    var opening = cell.getAttribute("data-content") || "RasanAI";
    cell.innerHTML = "";
    var stage = el("div", "film-stage", cell);

    // scene 1: the opening title (the visitor's own line)
    var s1 = el("div", "fs fs-title", stage);
    var t1 = textCell(s1, "fc-full", opening);

    // scene 2: a footage shot, a lower third, captions
    var s2 = el("div", "fs fs-foot", stage);
    var shot = el("div", "shot", s2);
    for (var i = 0; i < 7; i++) el("i", "bokeh b" + i, shot);
    el("div", "shot-floor", shot);
    var lower = textCell(s2, "fc-lower", "Your footage", "cut, captioned");
    var caps = el("div", "caps", s2);
    var words = ["every", "scene,", "one", "grammar"].map(function (w) { return el("span", "cw", caps, w); });

    // scene 3: a product shot: a panel of bars and a claim
    var s3 = el("div", "fs fs-ui", stage);
    var panel = el("div", "ui-panel", s3);
    var bars = [0.42, 0.66, 0.54, 0.9].map(function (hgt) { var b = el("i", "bar", panel); b.style.height = hgt * 100 + "%"; return b; });
    var claim = textCell(s3, "fc-claim", "11 decisions", "made by eye");

    // scene 4: the end card
    var s4 = el("div", "fs fs-end", stage);
    var t4 = textCell(s4, "fc-full", "Your film, your rasa");

    var chips = ["1 · Title", "2 · Footage", "3 · Product", "4 · End card"].map(function (t) { return el("span", "fchip", cell, t); });
    var strip = el("div", "fstrip", cell);
    var head = el("i", "fhead", strip);

    var scenes = [s1, s2, s3, s4];
    var tr = handoff(p);
    var d = tr === "cut" ? 0 : snap(p, 500);
    var move = snap(p, 1400), enter = snap(p, 600), st = p.stagger.each_ms / 1000;
    var holdMin = p.holds.min_ms / 1000;

    // text scenes: the engine's own timelines (they include their exits)
    function mdSub(c) { var s = gsap.timeline(); window.MD.build(s, c, p); return s; }
    var starts = [], durs = [];
    var t = 0;
    var phases = { enterMid: 0, hold: 0, end: 0 };

    scenes.forEach(function (s) { tl.set(s, { autoAlpha: 0 }, 0); });

    function reveal(s, at) {
      tl.set(s, { autoAlpha: 1 }, at);
      if (at === 0 || tr === "cut") return;
      if (tr === "wipe") tl.fromTo(s, { clipPath: "inset(0% 100% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: d, ease: E.enter }, at);
      else tl.fromTo(s, { opacity: 0 }, { opacity: 1, duration: d, ease: E.enter }, at);
    }
    function hide(s, at) { tl.set(s, { autoAlpha: 0 }, at); }

    // 1
    var a = mdSub(t1);
    reveal(s1, 0);
    tl.add(a, 0);
    starts.push(0); durs.push(a.duration());
    t = a.duration() - d;

    // 2: shot pushes in; lower third and captions land on it
    var st2 = t;
    reveal(s2, st2);
    var lowerTl = mdSub(lower);
    var len2 = Math.max(lowerTl.duration() + 0.3, words.length * 0.42 + holdMin + 0.8);
    tl.fromTo(shot, { scale: 1 }, { scale: 1.1, duration: len2, ease: E.move }, st2);
    tl.add(lowerTl, st2 + 0.25);
    words.forEach(function (w, k) {
      tl.set(w, { autoAlpha: 0 }, 0);
      tl.set(w, { autoAlpha: 1, color: "var(--turmeric)" }, st2 + 0.5 + k * 0.42);
      tl.set(w, { color: "#fff" }, st2 + 0.5 + (k + 1) * 0.42);
    });
    phases.hold = st2 + Math.min(len2 * 0.55, 0.5 + words.length * 0.42);
    phases.enterMid = st2 + 0.4;
    hide(s1, st2 + d + 0.01);
    starts.push(st2); durs.push(len2);
    t = st2 + len2 - d;

    // 3: bars draw up, the claim enters
    var st3 = t;
    reveal(s3, st3);
    tl.fromTo(panel, { yPercent: 12 }, { yPercent: 0, duration: move, ease: E.move }, st3);
    tl.fromTo(bars, { scaleY: 0 }, { scaleY: 1, duration: enter, ease: E.enter, stagger: st }, st3 + 0.15);
    var claimTl = mdSub(claim);
    tl.add(claimTl, st3 + 0.2);
    var len3 = Math.max(claimTl.duration() + 0.3, enter + st * bars.length + holdMin + 0.4);
    hide(s2, st3 + d + 0.01);
    starts.push(st3); durs.push(len3);
    t = st3 + len3 - d;

    // 4
    var st4 = t;
    reveal(s4, st4);
    var endTl = mdSub(t4);
    tl.add(endTl, st4);
    hide(s3, st4 + d + 0.01);
    starts.push(st4); durs.push(endTl.duration());
    var total = st4 + endTl.duration();

    // scene label + timeline strip
    chips.forEach(function (c, k) {
      tl.set(c, { autoAlpha: 0 }, 0);
      tl.set(c, { autoAlpha: 1 }, starts[k]);
      if (k < chips.length - 1) tl.set(c, { autoAlpha: 0 }, starts[k + 1]);
    });
    starts.forEach(function (s0, k) {
      var seg = el("b", "fseg", strip);
      seg.style.left = (s0 / total) * 100 + "%";
      seg.style.width = (durs[k] / total) * 100 + "%";
      if (k && tr !== "cut") el("u", "fjoin", seg);
    });
    strip.appendChild(head);
    tl.fromTo(head, { left: "0%" }, { left: "100%", duration: total, ease: "none" }, 0);

    phases.end = total;
    return phases;
  }
  window.FILM = { build: build };
})();
