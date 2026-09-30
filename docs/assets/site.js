// Rasa Director site: live tasting cells (real engine.js + personalities),
// console mock, reveals, copy buttons. Vanilla, no build step.
(function () {
  "use strict";
  var P = window.RASA_PERSONALITIES || {};
  var hasGsap = typeof window.gsap !== "undefined" && typeof window.MD !== "undefined";
  var reduceQ = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : { matches: false };
  var paused = !!reduceQ.matches;
  var root = document.documentElement;
  if (!reduceQ.matches) root.classList.add("js-motion");

  // ------------------------------------------------------------ cells
  var cells = [];

  function isActive(c) {
    if (!c.visible) return false;
    var panel = c.el.closest("[data-panel]");
    return !panel || panel.classList.contains("is-active");
  }

  function syncCell(c) {
    if (!c.tl) return;
    // a cell laid out while hidden (display:none panel) is rebuilt at its real size
    if (isActive(c) && c.el.clientWidth && Math.abs(c.el.clientWidth - c.w) > 2) { build(c); return; }
    if (paused || !isActive(c)) {
      c.tl.pause();
      if (paused && c.phases) c.tl.seek(c.phases.hold);
    } else if (c.tl.paused()) {
      if (c.group) {
        var lead = cells.filter(function (o) { return o !== c && o.group === c.group && o.tl && !o.tl.paused(); })[0];
        if (lead) c.tl.totalTime(lead.tl.totalTime() % (c.tl.totalDuration() || 1e9));
      }
      c.tl.play();
    }
  }
  function syncAll() { cells.forEach(syncCell); }

  // HyperFrames' default entrance, the one every AI video scene gets:
  // from({ y: 150, opacity: 0, ease: "power4.out" }), scaled to the cell.
  function buildDefault(tl, cell) {
    var text = cell.getAttribute("data-content") || "";
    var block = cell.querySelector(".md-block");
    block.innerHTML = "";
    var w = cell.clientWidth || 600, h = cell.clientHeight || 340;
    var maxChars = Math.max(8, Math.round(22 * Math.sqrt((w / h) / 1.78)));
    var lines = window.MD.breakLines(text, maxChars);
    var longest = lines.reduce(function (a, l) { return Math.max(a, l.length); }, 1);
    var size = Math.min((w * 0.78) / (longest * 0.56), (h * 0.62) / (lines.length * 1.08), h * 0.26);
    block.style.fontSize = size.toFixed(1) + "px";
    var els = lines.map(function (l) {
      var d = document.createElement("div");
      d.className = "md-line md-plain";
      d.textContent = l;
      block.appendChild(d);
      return d;
    });
    var t0 = 0.3, st = 0.1, enter = 0.8, hold = 1.4;
    tl.from(els, { y: h * 0.14, opacity: 0, duration: enter, ease: "power4.out", stagger: st }, t0);
    var tExit = t0 + enter + st * (els.length - 1) + hold;
    tl.to(els, { opacity: 0, duration: 0.45, ease: "power2.in" }, tExit);
    return { enterMid: t0 + 0.2, hold: t0 + enter + st * els.length + 0.2, end: tExit + 0.45 };
  }

  function build(c) {
    var el = c.el;
    if (c.tl) c.tl.kill();
    el.style.removeProperty("--md-bg");
    el.style.removeProperty("--md-ink");
    gsap.set(el.querySelectorAll(".md-block"), { clearProps: "all" });
    var tl = gsap.timeline({ paused: true });
    var mode = el.getAttribute("data-mode");
    if (mode === "default") c.phases = buildDefault(tl, el);
    else {
      var p = P[el.getAttribute("data-personality")];
      if (!p) return;
      c.phases = window.MD.build(tl, el, p);
    }
    tl.repeat(-1).repeatDelay(0.7);
    if (el.hasAttribute("data-cycle")) {
      // footer: the name re-tasted in every personality, one loop each
      tl.eventCallback("onRepeat", function () {
        setTimeout(function () {
          var ids = Object.keys(P);
          var next = ids[(ids.indexOf(el.getAttribute("data-personality")) + 1) % ids.length];
          el.setAttribute("data-personality", next);
          var lab = el.parentNode.querySelector("[data-cycle-name]");
          if (lab) lab.textContent = P[next].name;
          build(c);
        }, 0);
      });
    }
    c.tl = tl;
    c.w = el.clientWidth;
    syncCell(c);
  }

  function initCells() {
    var io = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var c = e.target.__cell;
        if (!c) return;
        c.visible = e.isIntersecting;
        syncCell(c);
      });
    }, { rootMargin: "120px 0px" }) : null;

    [].forEach.call(document.querySelectorAll(".md-cell"), function (el) {
      var c = { el: el, tl: null, phases: null, visible: !io, group: el.getAttribute("data-group") };
      el.__cell = c;
      cells.push(c);
      build(c);
      if (io) io.observe(el);
    });
    document.body.setAttribute("data-md-cells", String(cells.filter(function (c) { return c.tl; }).length));

    var rt;
    window.addEventListener("resize", function () {
      clearTimeout(rt);
      rt = setTimeout(function () {
        cells.forEach(function (c) { if (Math.abs(c.el.clientWidth - c.w) > 2) build(c); });
      }, 180);
    });
  }

  // hero: your own opening line, re-tasted live as scene 1 of a three-scene film
  function initTry() {
    var input = document.getElementById("try-input");
    if (!input) return;
    var t;
    input.addEventListener("input", function () {
      clearTimeout(t);
      t = setTimeout(function () {
        var v = input.value.replace(/\s+/g, " ").trim() || "Rasa Director";
        cells.forEach(function (c) {
          if (c.el.hasAttribute("data-try")) { c.el.querySelector(".md-block").setAttribute("data-content", v); build(c); }
        });
      }, 220);
    });
  }

  // problem: default vs personalities
  function initSwitch() {
    var sw = document.querySelector("[data-switch]");
    if (!sw) return;
    var btns = [].slice.call(sw.querySelectorAll("button"));
    var cap = document.querySelectorAll("[data-sw-cap]");
    btns.forEach(function (b) {
      b.addEventListener("click", function () {
        var rasa = b.getAttribute("data-val") === "rasa";
        btns.forEach(function (o) { o.setAttribute("aria-pressed", String(o === b)); });
        cells.forEach(function (c) {
          var alt = c.el.getAttribute("data-alt");
          if (!alt) return;
          if (rasa) { c.el.removeAttribute("data-mode"); c.el.setAttribute("data-personality", alt); }
          else { c.el.setAttribute("data-mode", "default"); c.el.removeAttribute("data-personality"); }
          build(c);
        });
        [].forEach.call(cap, function (n) { n.textContent = rasa ? n.getAttribute("data-rasa") : n.getAttribute("data-def"); });
      });
    });
  }

  // global pause
  function initToggle() {
    var btn = document.getElementById("motion-toggle");
    if (!btn) return;
    var lbl = btn.querySelector(".lbl");
    function render() {
      btn.setAttribute("aria-pressed", String(paused));
      if (lbl) lbl.textContent = paused ? "Play motion" : "Pause motion";
    }
    render();
    btn.addEventListener("click", function () { paused = !paused; render(); syncAll(); beadSync(); });
    if (reduceQ.addEventListener) reduceQ.addEventListener("change", function (e) { paused = e.matches; render(); syncAll(); beadSync(); });
  }

  // ------------------------------------------------------------ ease plots (curves on a pulli grid)
  function easeFn(name) {
    try { return gsap.parseEase(name) || function (x) { return x; }; } catch (e) { return function (x) { return x; }; }
  }
  function plotPath(name, x0, y0, w, h, n) {
    var f = easeFn(name), d = "";
    for (var i = 0; i <= n; i++) {
      var t = i / n, v = f(t);
      d += (i ? "L" : "M") + (x0 + t * w).toFixed(2) + " " + (y0 + h - v * h).toFixed(2);
    }
    return d;
  }
  function initPlots() {
    [].forEach.call(document.querySelectorAll("[data-ease-plot]"), function (svg) {
      var name = svg.getAttribute("data-ease-plot");
      var ns = "http://www.w3.org/2000/svg", g = "";
      for (var r = 0; r < 4; r++) for (var q = 0; q < 4; q++) g += '<circle cx="' + (8 + q * 16) + '" cy="' + (8 + r * 16) + '" r="1.4"/>';
      svg.innerHTML = g + '<path d="' + plotPath(name, 8, 8, 48, 48, 64) + '"/>';
      svg.setAttribute("viewBox", "0 0 64 64");
      svg.setAttribute("xmlns", ns);
    });
  }

  // meaning: expo.out drawn across a pulli grid, a bead riding it
  var bead = null;
  function initKolam() {
    var fig = document.getElementById("kolam-svg");
    if (!fig) return;
    var W = 720, H = 300, cols = 13, rows = 6, x0 = 20, y0 = 20, w = W - 40, h = H - 60;
    var dots = "";
    for (var r = 0; r < rows; r++) for (var q = 0; q < cols - (r % 2); q++) dots += '<circle class="dot" cx="' + (x0 + (q + (r % 2) * 0.5) * (w / (cols - 1))).toFixed(1) + '" cy="' + (y0 + r * (h / (rows - 1))).toFixed(1) + '" r="2.4"/>';
    var d = plotPath("expo.out", x0, y0, w, h, 160);
    fig.innerHTML = dots +
      '<path class="curve" d="' + d + '"/>' +
      '<circle class="bead" r="9" cx="' + x0 + '" cy="' + (y0 + h) + '"/>' +
      '<text class="axis" x="' + x0 + '" y="' + (H - 6) + '">time</text>' +
      '<text class="axis" x="' + (x0 + w) + '" y="' + (H - 6) + '" text-anchor="end">expo.out · 700 ms</text>';
    var path = fig.querySelector(".curve");
    try { path.style.setProperty("--len", Math.ceil(path.getTotalLength())); } catch (e) {}
    if (!window.gsap) return;
    var dot = fig.querySelector(".bead"), f = easeFn("expo.out"), proxy = { t: 0 };
    bead = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 0.9, delay: 1.2 });
    bead.to(proxy, {
      t: 1, duration: 2.1, ease: "none",
      onUpdate: function () {
        dot.setAttribute("cx", (x0 + proxy.t * w).toFixed(2));
        dot.setAttribute("cy", (y0 + h - f(proxy.t) * h).toFixed(2));
      },
    });
    bead.to({}, { duration: 0.6 });
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { bead.__vis = e.isIntersecting; beadSync(); }); });
    io.observe(fig);
  }
  function beadSync() {
    if (!bead) return;
    if (paused || !bead.__vis) bead.pause(); else bead.play();
  }

  // ------------------------------------------------------------ console mock
  var RECEIPTS = [
    "Brief: I kept 16:9 at 45 s, built as a launch film. Passed over: 1:1, since you said it plays on the website.",
    "Story: I picked <b>The Shoebox Wins</b> and wrote 9 scenes to 45 s. Passed over: the feature tour a launch film usually gets.",
    "Look: I picked <b>cobalt-grid</b>, rotating away from your last three looks.",
    "Motion: I picked <b>Liquid Morph</b> from the tail. Passed over: Swiss Precise, the obvious product-line pick.",
    "Transitions: I picked <b>blur-crossfade</b>, zoom-through into the close. Voice: <b>Maya</b>, warm over the usual announcer.",
    "Music: I picked <b>Felt piano</b>. Passed over: Brass pulse, the usual launch bed.",
    "Render is never skipped by “you decide”. Preview first, or render?",
  ];
  var DEFAULT_STATUS = "Every click goes straight back to Claude in your terminal.";
  var PRIMARY = ["Continue", "Approve scenes", "Use cobalt-grid", "Pick C", "Use these", "Use Felt piano", "Render"];

  function initConsole() {
    var consoleEl = document.getElementById("console");
    if (!consoleEl) return;
    var tabs = [].slice.call(consoleEl.querySelectorAll(".rail button"));
    var panels = [].slice.call(consoleEl.querySelectorAll("[data-panel]"));
    var steps = [].slice.call(document.querySelectorAll(".step"));
    var status = consoleEl.querySelector(".status");
    var pri = consoleEl.querySelector("[data-act=pri]");
    var yd = consoleEl.querySelector("[data-act=yd]");
    var cur = -1;
    var mq = window.matchMedia("(min-width: 1081px)");

    function setStep(i) {
      if (i === cur) return;
      cur = i;
      tabs.forEach(function (t, k) {
        t.setAttribute("aria-selected", String(k === i));
        t.tabIndex = k === i ? 0 : -1;
        t.classList.toggle("done", k < i);
      });
      panels.forEach(function (p, k) { p.classList.toggle("is-active", k === i); p.setAttribute("aria-hidden", String(k !== i)); });
      steps.forEach(function (s, k) { s.classList.toggle("is-active", k === i); });
      status.innerHTML = DEFAULT_STATUS;
      pri.textContent = PRIMARY[i];
      syncAll();
    }

    tabs.forEach(function (t, k) {
      t.addEventListener("click", function () { setStep(k); });
      t.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
          var n = (k + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length;
          setStep(n); tabs[n].focus(); e.preventDefault();
        }
      });
    });
    steps.forEach(function (s, k) {
      var b = s.querySelector("h3 button");
      if (b) b.addEventListener("click", function () {
        setStep(k);
        if (!mq.matches) consoleEl.scrollIntoView({ block: "start", behavior: paused ? "auto" : "smooth" });
      });
    });
    yd.addEventListener("click", function () { status.innerHTML = RECEIPTS[cur]; });
    pri.addEventListener("click", function () {
      if (cur < tabs.length - 1) setStep(cur + 1);
      else status.innerHTML = "Rendering <b>renders/tally-launch.mp4</b> through HyperFrames.";
    });

    // desktop: the console follows the step being read
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (es) {
        if (!mq.matches) return;
        es.forEach(function (e) { if (e.isIntersecting) setStep(steps.indexOf(e.target)); });
      }, { rootMargin: "-42% 0px -52% 0px" });
      steps.forEach(function (s) { io.observe(s); });
    }

    // music mock: play buttons animate the waveform (no audio on this page)
    [].forEach.call(consoleEl.querySelectorAll(".track"), function (tr) {
      var wave = tr.querySelector(".wave"), bars = "";
      var seed = Number(tr.getAttribute("data-seed")) || 1;
      for (var i = 0; i < 34; i++) {
        seed = (seed * 9301 + 49297) % 233280;
        var hgt = 5 + Math.round((seed / 233280) * 19 * (0.55 + 0.45 * Math.sin(i / 3)));
        bars += '<s style="height:' + Math.max(4, hgt) + 'px"></s>';
      }
      wave.innerHTML = bars;
      var btn = tr.querySelector(".play"), timer = null;
      btn.addEventListener("click", function () {
        var on = tr.classList.toggle("playing");
        btn.setAttribute("aria-pressed", String(on));
        var s = [].slice.call(wave.children), k = 0;
        clearInterval(timer);
        s.forEach(function (x) { x.classList.remove("p"); });
        if (on) timer = setInterval(function () {
          if (k >= s.length) { k = 0; s.forEach(function (x) { x.classList.remove("p"); }); }
          s[k++].classList.add("p");
        }, 140);
      });
    });

    setStep(0);
  }

  // ------------------------------------------------------------ reveals
  function initReveals() {
    var els = [].slice.call(document.querySelectorAll("[data-reveal], .kolam"));
    if (!root.classList.contains("js-motion") || !("IntersectionObserver" in window)) {
      els.forEach(function (e) { e.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (e) { io.observe(e); });
  }

  // ------------------------------------------------------------ copy buttons
  function initCopy() {
    [].forEach.call(document.querySelectorAll(".copy"), function (b) {
      b.addEventListener("click", function () {
        var text = b.getAttribute("data-copy");
        var lbl = b.querySelector(".lbl");
        function done() {
          b.classList.add("done");
          if (lbl) lbl.textContent = "Copied";
          b.setAttribute("aria-label", "Copied");
          setTimeout(function () { b.classList.remove("done"); if (lbl) lbl.textContent = "Copy"; b.setAttribute("aria-label", "Copy command"); }, 1600);
        }
        function fallback() {
          var ta = document.createElement("textarea");
          ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
          document.body.appendChild(ta); ta.select();
          try { document.execCommand("copy"); done(); } catch (e) {}
          document.body.removeChild(ta);
        }
        if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, fallback);
        else fallback();
      });
    });
  }

  // ------------------------------------------------------------ boot
  initReveals();
  initCopy();
  initConsole();
  if (hasGsap) {
    initCells();
    initPlots();
    initKolam();
    initTry();
    initSwitch();
    initToggle();
  }
})();
