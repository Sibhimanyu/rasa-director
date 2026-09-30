// Rasa Director site: live motion-language swatch films (engine.js + film.js),
// the opening-title input, pause motion, copy buttons. Vanilla, no build step.
(function () {
  "use strict";
  var P = window.RASA_PERSONALITIES || {};
  var ready = typeof window.gsap !== "undefined" && window.MD && window.FILM;
  var reduceQ = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : { matches: false };
  var paused = !!reduceQ.matches;
  var cells = [];

  function sync(c) {
    if (!c.tl) return;
    if (c.el.clientWidth && Math.abs(c.el.clientWidth - c.w) > 2) { build(c); return; }
    if (paused || !c.visible) {
      c.tl.pause();
      if (paused && c.phases) c.tl.seek(c.phases.hold);
    } else if (c.tl.paused()) c.tl.play();
  }
  function build(c) {
    var p = P[c.el.getAttribute("data-personality")];
    if (!p) return;
    if (c.tl) c.tl.kill();
    var tl = gsap.timeline({ paused: true });
    c.phases = window.FILM.build(tl, c.el, p);
    tl.repeat(-1).repeatDelay(0.7);
    c.tl = tl;
    c.w = c.el.clientWidth;
    sync(c);
  }
  function initCells() {
    var io = "IntersectionObserver" in window ? new IntersectionObserver(function (es) {
      es.forEach(function (e) { var c = e.target.__cell; if (c) { c.visible = e.isIntersecting; sync(c); } });
    }, { rootMargin: "120px 0px" }) : null;
    [].forEach.call(document.querySelectorAll(".md-cell[data-film]"), function (el) {
      var c = { el: el, visible: !io };
      el.__cell = c;
      cells.push(c);
      build(c);
      if (io) io.observe(el);
    });
    var t;
    window.addEventListener("resize", function () { clearTimeout(t); t = setTimeout(function () { cells.forEach(function (c) { if (Math.abs(c.el.clientWidth - c.w) > 2) build(c); }); }, 180); });
  }
  function initTry() {
    var input = document.getElementById("try-input");
    if (!input) return;
    var t;
    input.addEventListener("input", function () {
      clearTimeout(t);
      t = setTimeout(function () {
        var v = input.value.replace(/\s+/g, " ").trim() || "Rasa Director";
        cells.forEach(function (c) { if (c.el.hasAttribute("data-try")) { c.el.setAttribute("data-content", v); build(c); } });
      }, 220);
    });
  }
  function initToggle() {
    var b = document.querySelector("[data-motion-toggle]");
    if (!b) return;
    function label() { b.textContent = paused ? "Play motion" : "Pause motion"; b.setAttribute("aria-pressed", String(paused)); }
    label();
    b.addEventListener("click", function () { paused = !paused; label(); cells.forEach(sync); });
  }
  function initCopy() {
    [].forEach.call(document.querySelectorAll("[data-copy]"), function (btn) {
      btn.addEventListener("click", function () {
        var text = btn.getAttribute("data-copy");
        var done = function () { btn.classList.add("done"); setTimeout(function () { btn.classList.remove("done"); }, 1400); };
        if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, done); else done();
      });
    });
  }
  if (ready) { initCells(); initTry(); }
  initToggle();
  initCopy();
})();
