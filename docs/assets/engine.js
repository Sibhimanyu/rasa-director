// rasa-director choreography engine (browser). Turns a personality spec into
// GSAP tweens on a cell's content. Uses ONLY the personality's own eases and
// durations, so the preview obeys the same motion.md rules the build will.
// Exposes window.MD = { build(tl, cell, personality) -> phases }.
(function () {
  function ms(v) {
    return v / 1000;
  }

  // every duration the engine writes snaps to the personality's scale, so the
  // preview passes the same obey.mjs check the build must pass
  function snapper(scale) {
    return function (sec) {
      var v = sec * 1000;
      var best = scale.reduce(function (a, b) { return Math.abs(b - v) < Math.abs(a - v) ? b : a; });
      return best / 1000;
    };
  }

  // Deterministic line breaking (no layout measurement, so it is seek-safe and
  // synchronous as HyperFrames requires). "|" in the content forces a break.
  function breakLines(text, maxChars) {
    if (text.indexOf("|") > -1) return text.split("|").map(function (s) { return s.trim(); }).filter(Boolean);
    var words = text.trim().split(/\s+/);
    var lines = [];
    var cur = "";
    words.forEach(function (w) {
      if (!cur) cur = w;
      else if ((cur + " " + w).length <= maxChars) cur += " " + w;
      else {
        lines.push(cur);
        cur = w;
      }
    });
    if (cur) lines.push(cur);
    return lines;
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  // Builds DOM: .md-block > .md-line(mask) > .md-line-in > .md-word > .md-char
  // The optional secondary line (data-sub) is laid out as smaller lines after
  // the headline and animates with the same personality, so the user judges
  // how the whole lockup moves, not just the headline.
  var SUB_SCALE = 0.34;
  function layout(cell, p, block) {
    block = block || cell.querySelector(".md-block");
    // a block may carry its own scene text (multi-scene tasting); else the cell's
    var text = block.getAttribute("data-content") || cell.getAttribute("data-content") || "";
    var sub = block.hasAttribute("data-content") ? block.getAttribute("data-sub") || "" : cell.getAttribute("data-sub") || "";
    block.innerHTML = "";
    var w = cell.clientWidth || Number(cell.getAttribute("data-w")) || 600;
    var h = cell.clientHeight || Number(cell.getAttribute("data-h")) || 340;
    // ~22 chars per line at 16:9, narrowing gently for taller cells (4:5 ≈ 15, 9:16 ≈ 12)
    var maxChars = Math.max(8, Math.round(22 * Math.sqrt((w / h) / 1.78)));
    var lines = breakLines(text, maxChars);
    var subLines = sub ? breakLines(sub, Math.round(maxChars / SUB_SCALE)) : [];
    var longest = lines.reduce(function (a, l) { return Math.max(a, l.length); }, 1);
    var longestSub = subLines.reduce(function (a, l) { return Math.max(a, l.length); }, 0);
    var totalLines = lines.length * 1.08 + subLines.length * SUB_SCALE * 1.3 + (sub ? 0.4 : 0);
    // headline size ignores the secondary line's width (a long URL must not shrink the
    // headline); 0.78 of the width leaves a safe margin for tracking-based entrances
    var size = Math.min((w * 0.78) / (longest * 0.56), (h * 0.62) / totalLines, h * 0.26);
    block.style.fontSize = size.toFixed(1) + "px";
    // the secondary line gets its own size: SUB_SCALE of the headline, shrunk only if it would overflow
    var subPx = longestSub ? Math.min(size * SUB_SCALE, (w * 0.84) / (longestSub * 0.55)) : 0;
    var out = { lines: [], inners: [], words: [], chars: [] };
    function addLine(line, cls) {
      var mask = el("div", "md-line" + (cls ? " " + cls : ""));
      var inner = el("div", "md-line-in");
      line.split(" ").forEach(function (word, wi) {
        if (wi > 0) inner.appendChild(document.createTextNode(" "));
        var wEl = el("span", "md-word");
        word.split("").forEach(function (ch) {
          var c = el("span", "md-char", ch);
          wEl.appendChild(c);
          out.chars.push(c);
        });
        inner.appendChild(wEl);
        out.words.push(wEl);
      });
      mask.appendChild(inner);
      block.appendChild(mask);
      out.lines.push(mask);
      out.inners.push(inner);
    }
    lines.forEach(function (l) { addLine(l, ""); });
    var rule = el("div", "md-rule");
    block.appendChild(rule);
    out.rule = rule;
    subLines.forEach(function (l) {
      addLine(l, "md-subline");
      out.lines[out.lines.length - 1].style.fontSize = subPx.toFixed(1) + "px";
    });
    var cursor = null;
    if (p.demo.enter === "typewriter") {
      cursor = el("span", "md-cursor", "\u00a0");
      out.inners[out.inners.length - 1].appendChild(cursor);
    }
    out.cursor = cursor;
    out.block = block;
    return out;
  }

  function unitsFor(split, d) {
    if (split === "chars") return d.chars;
    if (split === "words") return d.words;
    return d.lines;
  }

  // One cell may hold several scenes (.md-block each, stacked in the same spot):
  // they play one after another with the same personality, so a style is judged
  // across a whole video (hook → middle → close), not one line.
  function build(tl, cell, p) {
    var blocks = [].slice.call(cell.querySelectorAll(".md-block"));
    if (blocks.length <= 1) return buildBlock(tl, cell, p, blocks[0]);
    var offset = 0, first = null;
    blocks.forEach(function (b, i) {
      var sub = gsap.timeline();
      var ph = buildBlock(sub, cell, p, b);
      if (i === 0) first = ph;
      tl.set(b, { visibility: "hidden" }, 0);
      tl.set(b, { visibility: "visible" }, offset);
      tl.add(sub, offset);
      offset += sub.duration() + 0.2;
      tl.set(b, { visibility: "hidden" }, offset - 0.2);
    });
    first.end = tl.duration();
    return first;
  }

  function buildBlock(tl, cell, p, block) {
    var d = layout(cell, p, block);
    var demo = p.demo;
    var E = p.easing;
    var S = p.tempo.scale_ms;
    var st = ms(p.stagger.each_ms);
    var units = unitsFor(demo.split, d);
    var n = units.length;
    var snap = snapper(S);
    var enterDur = snap(ms(demo.enter_ms));
    var moveDur = snap(ms(demo.move_ms));
    var exitDur = snap(ms(demo.exit_ms));
    var hold = ms(Math.max(demo.hold_ms, p.holds.min_ms));
    var t = 0;

    // --- enter -------------------------------------------------------------
    switch (demo.enter) {
      case "clip-rise":
        tl.fromTo(d.inners, { yPercent: 110 }, { yPercent: 0, duration: enterDur, ease: E.enter, stagger: st }, t);
        break;
      case "char-pop":
        tl.fromTo(d.chars, { scale: 0, rotation: -14 }, { scale: 1, rotation: 0, duration: enterDur, ease: E.enter, stagger: st }, t);
        break;
      case "blur-focus":
        tl.fromTo(units, { opacity: 0, filter: "blur(22px)", scale: 1.08 }, { opacity: 1, filter: "blur(0px)", scale: 1, duration: enterDur, ease: E.enter, stagger: st }, t);
        break;
      case "hard-cut":
        tl.set(units, { visibility: "hidden" }, 0);
        units.forEach(function (u, i) {
          tl.set(u, { visibility: "visible" }, t + i * st);
          tl.fromTo(u, { x: -36 }, { x: 0, duration: enterDur, ease: E.enter }, t + i * st);
        });
        break;
      case "mask-wipe":
        tl.fromTo(d.lines, { clipPath: "inset(0% 100% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: enterDur, ease: E.enter, stagger: st }, t);
        break;
      case "liquid-rise":
        tl.fromTo(d.chars, { scaleY: 0, skewX: 28, transformOrigin: "50% 100%" }, { scaleY: 1, skewX: 0, duration: enterDur, ease: E.enter, stagger: st }, t);
        break;
      case "word-slam":
        units.forEach(function (u, i) {
          tl.fromTo(u, { scale: 2.2, opacity: 0 }, { scale: 1, opacity: 1, duration: enterDur, ease: E.enter }, t + i * st);
        });
        break;
      case "drift-space":
        tl.fromTo(units, { letterSpacing: "0.5em", opacity: 0, rotation: -1.5 }, { letterSpacing: "0em", opacity: 1, rotation: 0, duration: enterDur, ease: E.enter, stagger: st }, t);
        break;
      case "typewriter":
        tl.set(d.chars, { display: "none" }, 0);
        d.chars.forEach(function (c, i) {
          tl.set(c, { display: "inline-block" }, t + (i + 1) * st);
        });
        break;
      case "center-reveal":
        tl.fromTo(units, { clipPath: "inset(0% 50% 0% 50%)", scale: 0.985 }, { clipPath: "inset(0% 0% 0% 0%)", scale: 1, duration: enterDur, ease: E.enter, stagger: st }, t);
        break;
    }
    var enterEnd = demo.enter === "typewriter" ? t + (d.chars.length + 1) * st : t + enterDur + st * Math.max(0, (demo.enter === "word-slam" || demo.enter === "hard-cut" ? units.length : n) - 1);

    // --- move (mid-hold emphasis) -------------------------------------------
    var tMove = enterEnd + hold * 0.4;
    switch (demo.move) {
      case "grid-shift":
        tl.to(d.block, { x: "6%", duration: moveDur, ease: E.move }, tMove);
        break;
      case "squash":
        tl.to(d.block, { scaleX: 1.1, scaleY: 0.9, duration: ms(S[0]), ease: E.move }, tMove);
        tl.to(d.block, { scaleX: 1, scaleY: 1, duration: moveDur, ease: E.move }, tMove + ms(S[0]));
        moveDur += ms(S[0]);
        break;
      case "slow-push":
        tl.to(d.block, { scale: 1.04, duration: moveDur, ease: E.move }, tMove);
        break;
      case "jitter":
        tl.to(d.block, { x: 14, duration: moveDur, ease: E.move }, tMove);
        tl.set(cell, { "--md-bg": "var(--md-ink-c)", "--md-ink": "var(--md-bg-c)" }, tMove + moveDur * 0.5);
        tl.set(cell, { "--md-bg": "var(--md-bg-c)", "--md-ink": "var(--md-ink-c)" }, tMove + moveDur * 0.5 + 0.1);
        tl.to(d.block, { x: 0, duration: ms(S[0]), ease: E.move }, tMove + moveDur);
        moveDur += ms(S[0]);
        break;
      case "underline-sweep":
        tl.fromTo(d.rule, { scaleX: 0, transformOrigin: "0% 50%" }, { scaleX: 1, duration: moveDur, ease: E.enter }, tMove); // the rule appearing is an entrance
        break;
      case "wave":
        var wv = snap(moveDur / 2);
        tl.to(d.chars, { yPercent: -14, duration: wv, ease: E.move, yoyo: true, repeat: 1, stagger: st }, tMove);
        moveDur = wv * 2 + st * (d.chars.length - 1);
        break;
      case "shake":
        tl.to(d.block, { keyframes: { x: [0, 16, -12, 7, 0] }, duration: moveDur, ease: E.move }, tMove);
        break;
      case "breathe":
        tl.to(d.block, { scale: 1.015, duration: snap(moveDur / 2), ease: E.move, yoyo: true, repeat: 1 }, tMove);
        moveDur = snap(moveDur / 2) * 2;
        break;
      case "cursor-blink":
        if (d.cursor) tl.to(d.cursor, { opacity: 0, duration: snap(moveDur / 4), ease: E.exit, yoyo: true, repeat: 3 }, tMove); // opacity 1->0 is checked as an exit
        moveDur = snap(moveDur / 4) * 4;
        break;
      case "hairline":
        tl.fromTo(d.rule, { scaleX: 0, transformOrigin: "50% 50%" }, { scaleX: 1, duration: moveDur, ease: E.enter }, tMove); // the rule appearing is an entrance
        break;
    }

    // --- exit ---------------------------------------------------------------
    var tExit = tMove + moveDur + hold; // full hold after the move: anything the move introduced (a rule) still holds >= min
    var exitUnits = units;
    switch (demo.exit) {
      case "clip-drop":
        tl.to(d.inners, { yPercent: -110, duration: exitDur, ease: E.exit, stagger: st }, tExit);
        break;
      case "char-shrink":
        tl.to(d.chars, { scale: 0, rotation: 14, duration: exitDur, ease: E.exit, stagger: st }, tExit);
        break;
      case "blur-out":
        tl.to(exitUnits, { opacity: 0, filter: "blur(16px)", duration: exitDur, ease: E.exit, stagger: st }, tExit);
        break;
      case "hard-cut-out":
        tl.to(exitUnits, { x: 30, duration: exitDur, ease: E.exit, stagger: st }, tExit);
        tl.set(exitUnits, { visibility: "hidden" }, tExit + exitDur + st * exitUnits.length);
        break;
      case "mask-wipe-out":
        tl.to(d.lines, { clipPath: "inset(0% 0% 0% 100%)", duration: exitDur, ease: E.exit, stagger: st }, tExit);
        tl.to(d.rule, { scaleX: 0, transformOrigin: "100% 50%", duration: exitDur, ease: E.exit }, tExit);
        break;
      case "liquid-drain":
        tl.to(d.chars, { scaleY: 0, skewX: -28, duration: exitDur, ease: E.exit, stagger: st }, tExit);
        break;
      case "punch-out":
        tl.to(exitUnits, { scale: 1.6, opacity: 0, duration: exitDur, ease: E.exit, stagger: st }, tExit);
        break;
      case "drift-away":
        tl.to(exitUnits, { letterSpacing: "0.3em", opacity: 0, duration: exitDur, ease: E.exit, stagger: st }, tExit);
        break;
      case "backspace":
        d.chars.slice().reverse().forEach(function (c, i) {
          tl.set(c, { display: "none" }, tExit + i * st);
        });
        if (d.cursor) tl.to(d.cursor, { opacity: 0, duration: exitDur, ease: E.exit }, tExit + d.chars.length * st);
        break;
      case "center-close":
        tl.to(exitUnits, { clipPath: "inset(0% 50% 0% 50%)", duration: exitDur, ease: E.exit, stagger: st }, tExit);
        tl.to(d.rule, { scaleX: 0, transformOrigin: "50% 50%", duration: exitDur, ease: E.exit }, tExit);
        break;
    }
    var end = tl.duration();
    // mid-entrance still: when the first unit's ease reaches 50% (expo.out is "landed"
    // by 45% of its time, so a fixed fraction would show a finished frame)
    var half = 0.5;
    try {
      var ef = gsap.parseEase(E.enter);
      for (var q = 0; q <= 1; q += 0.01) { if (ef(q) >= 0.5) { half = q; break; } }
    } catch (e) {}
    var enterMidT = demo.enter === "typewriter" ? enterEnd * 0.5 : enterDur * half + st * Math.max(0, (demo.enter === "word-slam" || demo.enter === "hard-cut" ? units.length : n) - 1) * 0.5;
    return {
      enterMid: Math.max(0.03, enterMidT),
      hold: enterEnd + hold * 0.2,
      move: tMove + moveDur * 0.5,
      exitMid: tExit + (end - tExit) * 0.45,
      end: end,
    };
  }

  window.MD = { build: build, breakLines: breakLines };
})();
