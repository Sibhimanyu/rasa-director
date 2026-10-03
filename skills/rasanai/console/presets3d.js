// RasaPresets3D: the 3D & materials styles drawn as real 3D by Rasan3D (stage3d/rasan3d.js), in the same
// 1600x900 specimen frame as RasaPresets.render. Plain browser JS, no build, no dependencies besides Rasan3D,
// which this file loads itself from RasaPresets3D.base.
//   RasaPresets3D.base = "/three/"                  // folder holding rasan3d.js (and three.js beside it)
//   RasaPresets3D.has(preset)                       // true for the 20 styles drawn here, and for any system whose recipe names one in three.base
//   RasaPresets3D.mount(stageEl, preset, { headline, sub, brand, pixelRatio }) -> { ready, play(), destroy() }
//   RasaPresets3D.whenAll()                         // every mounted specimen's ready (for stills)
// Everything is a pure function of time (seeded rng only); requestAnimationFrame is used only for hover playback.
// If WebGL or the runtime is unavailable, mount() leaves the CSS specimen where it is and resolves ready.
(function (root) {
  "use strict";
  var W = 1600, H = 900, DUR = 2.4;
  var IDS = ["soft-3d", "claymation-3d", "glossy-3d", "chrome-liquid-metal", "glass-3d", "low-poly", "isometric-3d", "tilt-shift-diorama", "concrete-brutalist-3d", "surreal-3d", "photoreal-product-cgi", "paper-cut-shadowbox", "gummy-gel", "liquid-3d", "voxel-3d", "wireframe-mesh-3d", "point-cloud-3d", "toon-shaded-3d", "exploded-view-3d", "prism-crystal"];
  var SCENES = {};

  // ------------------------------------------------------------------ colour and number helpers
  function hex(c) { c = String(c || "#000").replace("#", ""); if (c.length === 3) c = c.split("").map(function (x) { return x + x; }).join(""); var n = parseInt(c, 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; }
  function toHex(a) { return "#" + a.map(function (v) { return Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0"); }).join(""); }
  function mix(a, b, t) { var x = hex(a), y = hex(b); return toHex(x.map(function (v, i) { return v + (y[i] - v) * t; })); }
  function lighten(c, t) { return mix(c, "#ffffff", t); }
  function darken(c, t) { return mix(c, "#000000", t); }
  function lum(c) { var r = hex(c).map(function (v) { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }); return 0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]; }
  function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }
  function lerp(a, b, u) { return a + (b - a) * u; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  var D2R = Math.PI / 180;

  // ------------------------------------------------------------------ camera: an eased arc that lands
  // c: the point the camera orbits; w (world width visible at c) or r (distance), az (deg), el (deg), mm: [start, end]; cx, cy: where c lands on screen
  // (0..1, from the left / top) so the type has the left of the frame; the camera trucks sideways rather than
  // panning, so there is no keystone. fo: focus offset (world units) from c along the view axis.
  function cam(o) {
    var ease = o.ease || "power3.out", c = o.c || [0, 0, 0];
    var two = function (v) { return Array.isArray(v) ? v : [v, v]; };
    var wv = o.w ? two(o.w) : null, r = o.r ? two(o.r) : [0, 0], az = two(o.az || 0), el = two(o.el || 0), mm = two(o.mm || 50), cx = o.cx == null ? 0.5 : o.cx, cy = o.cy == null ? 0.5 : o.cy, lift = o.lift || 0;
    function state(t) {
      var u = root.Rasan3D.ease(ease)(clamp(t / (o.t1 || DUR), 0, 1));
      var M = lerp(mm[0], mm[1], u), R = wv ? (lerp(wv[0], wv[1], u) * M) / 36 : lerp(r[0], r[1], u), A = lerp(az[0], az[1], u) * D2R, E = lerp(el[0], el[1], u) * D2R;
      var dir = [Math.sin(A) * Math.cos(E), Math.sin(E), Math.cos(A) * Math.cos(E)];
      var right = [Math.cos(A), 0, -Math.sin(A)];
      var up = [-Math.sin(A) * Math.sin(E), Math.cos(E), -Math.cos(A) * Math.sin(E)];
      var width = (36 / M) * R, height = width * 9 / 16;
      var sx = -(cx - 0.5) * width, sy = (cy - 0.5) * height + lift;
      var s = [right[0] * sx + up[0] * sy, right[1] * sx + up[1] * sy, right[2] * sx + up[2] * sy];
      return { R: R, M: M, dir: dir, s: s };
    }
    return {
      pos: function (t) { var s = state(t); return [c[0] + s.dir[0] * s.R + s.s[0], c[1] + s.dir[1] * s.R + s.s[1], c[2] + s.dir[2] * s.R + s.s[2]]; },
      target: function (t) { var s = state(t); return [c[0] + s.s[0], c[1] + s.s[1], c[2] + s.s[2]]; },
      lens: function (t) { return state(t).M; },
      focus: function (t) { return state(t).R + (o.fo || 0); },
      fstop: o.fstop || 40, // 40 = effectively pinhole, but the 16 jittered samples give the still its anti-aliasing
    };
  }


  // ------------------------------------------------------------------ the scene kit: geometry the styles share
  function seededNoise(seed) {
    // smooth 2D value noise from a hash: pure, no state
    function h(x, y) { var n = Math.sin(x * 127.1 + y * 311.7 + seed * 74.7) * 43758.5453; return n - Math.floor(n); }
    return function (x, y) {
      var xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
      var u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
      return lerp(lerp(h(xi, yi), h(xi + 1, yi), u), lerp(h(xi, yi + 1), h(xi + 1, yi + 1), u), v);
    };
  }
  function fbm(noise, x, y, oct) { var s = 0, a = 0.5, f = 1, n = 0; for (var i = 0; i < (oct || 4); i++) { s += a * noise(x * f, y * f); n += a; a *= 0.5; f *= 2.03; } return s / n; }

  function makeKit(k) {
    var T = k.THREE;
    return k.addon("utils/BufferGeometryUtils.js").then(function (BGU) {
      var u = { T: T, k: k, BGU: BGU };
      u.col = function (c) { return new T.Color(c); };
      // a box whose edges are rounded with a radius per axis: thin slabs with fat corners, pills, blocks.
      // The surface is analytic (every normal exact), the vertices are clustered toward the corners.
      u.rbox = function (w, h, d, rx, ry, rz, seg) {
        seg = seg || [40, 28, 10];
        var g = new T.BoxGeometry(w, h, d, seg[0], seg[1], seg[2]);
        var p = g.attributes.position, n = g.attributes.normal;
        var hx = w / 2, hy = h / 2, hz = d / 2, cx = hx - rx, cy = hy - ry, cz = hz - rz, fa = 0.34;
        function warp(v, hh, c) { var s = v / hh, a = Math.abs(s), o = a <= 1 - fa ? (a / (1 - fa)) * c : c + ((a - (1 - fa)) / fa) * (hh - c); return (s < 0 ? -1 : 1) * o; }
        for (var i = 0; i < p.count; i++) {
          var x = warp(p.getX(i), hx, cx), y = warp(p.getY(i), hy, cy), z = warp(p.getZ(i), hz, cz);
          var ix = clamp(x, -cx, cx), iy = clamp(y, -cy, cy), iz = clamp(z, -cz, cz);
          var qx = rx > 1e-6 ? (x - ix) / rx : 0, qy = ry > 1e-6 ? (y - iy) / ry : 0, qz = rz > 1e-6 ? (z - iz) / rz : 0;
          var L = Math.sqrt(qx * qx + qy * qy + qz * qz);
          if (L < 1e-6) { p.setXYZ(i, x, y, z); continue; }
          qx /= L; qy /= L; qz /= L;
          p.setXYZ(i, ix + qx * rx, iy + qy * ry, iz + qz * rz);
          var nx = rx > 1e-6 ? qx / rx : 0, ny = ry > 1e-6 ? qy / ry : 0, nz = rz > 1e-6 ? qz / rz : 0, nl = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;
          n.setXYZ(i, nx / nl, ny / nl, nz / nl);
        }
        g.computeBoundingBox(); g.computeBoundingSphere();
        return g;
      };
      u.slab = function (w, h, d, r, rz) { return u.rbox(w, h, d, r, r, rz == null ? Math.min(d * 0.45, r) : rz, [Math.max(24, Math.round(w * 14)), Math.max(18, Math.round(h * 14)), 10]); };
      u.pill = function (len, rad) { return u.rbox(len, rad * 2, rad * 2, rad, rad, rad, [Math.max(24, Math.round(len * 16)), 20, 20]); };
      u.sphere = function (r, seg) { return new T.SphereGeometry(r, seg || 96, Math.round((seg || 96) * 0.66)); };
      // a smooth, seeded organic form: a sphere pushed in and out by a few sines of the direction
      u.blob = function (r, seed, amp, freq, seg) {
        var g = new T.SphereGeometry(1, seg || 160, Math.round((seg || 160) * 0.7));
        g.deleteAttribute("uv"); g.deleteAttribute("normal");
        g = BGU.mergeVertices(g, 1e-4);
        var rnd = k.rng(seed), terms = [];
        for (var i = 0; i < 6; i++) { var a = rnd() * 6.283, b = Math.acos(2 * rnd() - 1); terms.push({ d: [Math.sin(b) * Math.cos(a), Math.cos(b), Math.sin(b) * Math.sin(a)], f: (freq || 2) * (1 + i * 0.55) * (0.8 + rnd() * 0.4), ph: rnd() * 6.283, a: Math.pow(0.62, i) }); }
        var norm = terms.reduce(function (s, t) { return s + t.a; }, 0);
        var p = g.attributes.position;
        for (var j = 0; j < p.count; j++) {
          var x = p.getX(j), y = p.getY(j), z = p.getZ(j), s = 0;
          for (var q = 0; q < terms.length; q++) { var t = terms[q]; s += t.a * Math.sin((x * t.d[0] + y * t.d[1] + z * t.d[2]) * t.f + t.ph); }
          var rr = r * (1 + (amp || 0.2) * s / norm);
          p.setXYZ(j, x * rr, y * rr, z * rr);
        }
        g.computeVertexNormals();
        return g;
      };
      // a puffy extruded outline (stars, hearts): big round bevel, smooth normals
      u.puff = function (shape, depth, bevel, segs) {
        var g = new T.ExtrudeGeometry(shape, { depth: depth, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: segs || 14, curveSegments: 40 });
        g.deleteAttribute("uv"); g.deleteAttribute("normal");
        g = BGU.mergeVertices(g, 1e-4);
        g.computeVertexNormals();
        g.translate(0, 0, -depth / 2);
        return g;
      };
      u.rrShape = function (w, h, r) {
        var s = new T.Shape(), x = -w / 2, y = -h / 2;
        r = Math.min(r, w / 2, h / 2);
        s.moveTo(x + r, y); s.lineTo(x + w - r, y); s.absarc(x + w - r, y + r, r, -Math.PI / 2, 0, false); s.lineTo(x + w, y + h - r); s.absarc(x + w - r, y + h - r, r, 0, Math.PI / 2, false);
        s.lineTo(x + r, y + h); s.absarc(x + r, y + h - r, r, Math.PI / 2, Math.PI, false); s.lineTo(x, y + r); s.absarc(x + r, y + r, r, Math.PI, Math.PI * 1.5, false);
        return s;
      };
      // add a mesh (shadowed) to a parent at a position with a rotation
      u.add = function (parent, geo, mat, x, y, z, rx, ry, rz) {
        var m = new T.Mesh(geo, mat);
        m.position.set(x || 0, y || 0, z || 0);
        m.rotation.set(rx || 0, ry || 0, rz || 0);
        m.castShadow = true; m.receiveShadow = true;
        parent.add(m);
        return m;
      };
      u.group = function (parent, x, y, z) { var g = new T.Group(); g.position.set(x || 0, y || 0, z || 0); (parent || k.scene).add(g); return g; };

      // ---- art-directed reflections: a gradient room with softboxes, baked to a PMREM and set as the scene's environment
      // o: {top, mid, bottom (colours), boxes: [{p:[x,y,z], w, h, c, i}], intensity}
      u.env = function (o) {
        var sc = new T.Scene();
        var mat = new T.ShaderMaterial({
          side: T.BackSide, depthWrite: false,
          uniforms: { top: { value: new T.Color(o.top || "#ffffff") }, mid: { value: new T.Color(o.mid || "#888888") }, bot: { value: new T.Color(o.bottom || "#222222") }, flr: { value: new T.Color(o.floor || o.mid || "#888888") } },
          vertexShader: "varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",
          fragmentShader: "varying vec3 vP; uniform vec3 top; uniform vec3 mid; uniform vec3 bot; uniform vec3 flr; void main(){ float y = vP.y; vec3 c = y > 0.0 ? mix(mid, top, pow(y, 0.6)) : mix(flr, bot, pow(-y, 0.6)); gl_FragColor = vec4(c, 1.0); }",
        });
        sc.add(new T.Mesh(new T.SphereGeometry(40, 48, 24), mat));
        (o.boxes || []).forEach(function (b) {
          var m = new T.Mesh(new T.PlaneGeometry(b.w, b.h), new T.MeshBasicMaterial({ color: new T.Color(b.c || "#ffffff").multiplyScalar(b.i == null ? 4 : b.i), side: T.DoubleSide, toneMapped: false }));
          m.position.set(b.p[0], b.p[1], b.p[2]); m.lookAt(0, 0, 0);
          if (b.roll) m.rotateZ(b.roll);
          sc.add(m);
        });
        var pm = new T.PMREMGenerator(k.stage.S.renderer);
        var tex = pm.fromScene(sc, o.blur == null ? 0.0 : o.blur, 0.1, 100).texture;
        pm.dispose();
        k.scene.environment = tex;
        k.scene.environmentIntensity = o.intensity == null ? 1 : o.intensity;
        return tex;
      };
      u.canvasTex = function (w, h, draw) {
        var cv = document.createElement("canvas"); cv.width = w; cv.height = h;
        var x = cv.getContext("2d"); draw(x, w, h);
        var t = new T.CanvasTexture(cv); t.colorSpace = T.SRGBColorSpace; t.anisotropy = 8; return t;
      };
      // grey value noise for bump maps (seeded)
      u.noiseTex = function (seed, size, cells, contrast) {
        var nz = seededNoise(seed), cv = document.createElement("canvas"); cv.width = cv.height = size;
        var x = cv.getContext("2d"), img = x.createImageData(size, size);
        for (var py = 0; py < size; py++) for (var px = 0; px < size; px++) {
          var v = fbm(nz, (px / size) * cells, (py / size) * cells, 4), c = clamp(Math.round(128 + (v - 0.5) * 255 * (contrast || 1)), 0, 255), i = (py * size + px) * 4;
          img.data[i] = img.data[i + 1] = img.data[i + 2] = c; img.data[i + 3] = 255;
        }
        x.putImageData(img, 0, 0);
        var t = new T.CanvasTexture(cv); t.wrapS = t.wrapT = T.RepeatWrapping; t.colorSpace = T.NoColorSpace; return t;
      };
      u.starShape = function (n, ro, ri, smooth) {
        var pts = [];
        for (var i = 0; i < n * 2; i++) { var r = i % 2 ? ri : ro, a = (Math.PI * i) / n + Math.PI / 2; pts.push([Math.cos(a) * r, Math.sin(a) * r]); }
        for (var it = 0; it < (smooth == null ? 4 : smooth); it++) {
          var nx = [];
          for (var j = 0; j < pts.length; j++) { var a0 = pts[j], b0 = pts[(j + 1) % pts.length]; nx.push([a0[0] * 0.75 + b0[0] * 0.25, a0[1] * 0.75 + b0[1] * 0.25], [a0[0] * 0.25 + b0[0] * 0.75, a0[1] * 0.25 + b0[1] * 0.75]); }
          pts = nx;
        }
        var s = new T.Shape(); s.moveTo(pts[0][0], pts[0][1]); for (var q = 1; q < pts.length; q++) s.lineTo(pts[q][0], pts[q][1]); s.closePath();
        return s;
      };
      u.toonGrad = function (steps) {
        var d = new Uint8Array(steps * 4);
        for (var i = 0; i < steps; i++) { var v = Math.round(255 * (0.28 + 0.72 * (i / (steps - 1)))); d[i * 4] = d[i * 4 + 1] = d[i * 4 + 2] = v; d[i * 4 + 3] = 255; }
        var t = new T.DataTexture(d, steps, 1, T.RGBAFormat); t.minFilter = t.magFilter = T.NearestFilter; t.generateMipmaps = false; t.needsUpdate = true; return t;
      };
      // inverted-hull outline: a back-faced copy pushed out along its normals
      u.outline = function (mesh, thick, colour) {
        var m = new T.MeshBasicMaterial({ color: new T.Color(colour || "#000000"), side: T.BackSide, toneMapped: false });
        m.onBeforeCompile = function (sh) { sh.vertexShader = sh.vertexShader.replace("#include <begin_vertex>", "vec3 transformed = position + normal * " + Number(thick).toFixed(5) + ";"); };
        m.customProgramCacheKey = function () { return "r3outline" + thick; };
        var o = new T.Mesh(mesh.geometry, m); o.castShadow = false; o.receiveShadow = false;
        mesh.add(o);
        return o;
      };
      u.enter = function (t, delay, dur, e) { return k.prog(t, delay, delay + (dur || 1.2), e || "power3.out"); };
      return u;
    });
  }


  // ================================================================== the scenes
  // Each is (palette, context) -> the Rasan3D stage options plus a `type` placement. Hero in the right ~60%.

  // ---- soft-3d: pastel UI slabs floating in a stack; a Cinema 4D desk-toy still
  SCENES["soft-3d"] = function (P) {
    var O = {}, U;
    var blue = P.accent, pink = P.accent2;
    return {
      environment: "none", exposure: 1.08,
      camera: cam({ c: [0, 0, 0], w: [12.6, 11.4], az: [-30, -16], el: [20, 15], mm: 70, cx: 0.72, cy: 0.52, fstop: 5, fo: 0 }),
      post: { vignette: 0.08, grain: 0.012 },
      type: { v: "bottom" },
      build: function (k) {
        return makeKit(k).then(function (u) {
          U = u; var T = u.T;
          u.env({ top: "#ffffff", mid: "#dfe3f5", bottom: "#aeb4d6", intensity: 0.9, blur: 0.04, boxes: [{ p: [-6, 8, 6], w: 10, h: 8, c: "#ffffff", i: 2.4 }] });
          k.rig("top-soft", { key: "#fff3e8", fill: pink, shadowSize: 6, shadowSoftness: 14, intensity: 1.15 });
          k.ground({ y: -1.9, shadowOpacity: 0.2 });
          var G = O.G = u.group(k.scene, 0, 0, 0);
          var cer = function (c) { return k.material("ceramic", { color: c, roughness: 0.42, clearcoat: 0.5, clearcoatRoughness: 0.25 }); };
          var clay = function (c) { return k.material("clay", { color: c }); };
          // back slab (pink), middle (white, with a UI on it), front chip (blue)
          O.back = u.add(G, u.slab(3.5, 2.3, 0.2, 0.42), cer(pink), 0.75, 0.55, -1.15);
          O.mid = u.add(G, u.slab(3.4, 2.2, 0.22, 0.42), cer("#ffffff"), 0, 0, 0);
          // UI on the middle slab: avatar, lines, toggle, bars
          var ui = O.ui = u.group(O.mid, 0, 0, 0.12);
          u.add(ui, u.sphere(0.26, 48), cer(pink), -1.2, 0.68, 0.0).scale.z = 0.5;
          u.add(ui, u.pill(1.2, 0.07), clay(mix(P.muted, "#ffffff", 0.55)), -0.15, 0.78, 0);
          u.add(ui, u.pill(0.8, 0.055), clay(mix(P.muted, "#ffffff", 0.75)), -0.35, 0.58, 0);
          u.add(ui, u.pill(0.62, 0.17), cer(blue), 1.05, 0.68, 0.0);
          u.add(ui, u.sphere(0.13, 32), cer("#ffffff"), 1.18, 0.68, 0.1);
          [0.5, 0.82, 0.62, 1.1].forEach(function (hh, i) { var b = u.add(ui, u.rbox(0.34, hh, 0.14, 0.12, 0.12, 0.06), i === 3 ? cer(blue) : clay(mix(blue, "#ffffff", 0.7)), -1.1 + i * 0.55, -0.82 + hh / 2, 0.0); });
          u.add(ui, u.pill(1.1, 0.055), clay(mix(P.muted, "#ffffff", 0.75)), 0.85, -0.35, 0);
          u.add(ui, u.pill(0.8, 0.055), clay(mix(P.muted, "#ffffff", 0.75)), 0.7, -0.55, 0);
          O.chip = u.add(G, u.slab(1.7, 1.1, 0.2, 0.32), cer(blue), -1.35, -1.0, 1.15);
          var ck = u.group(O.chip, 0, 0, 0.12);
          u.add(ck, u.pill(0.46, 0.085), clay("#ffffff"), -0.15, -0.05, 0, 0, 0, -0.8);
          u.add(ck, u.pill(0.78, 0.085), clay("#ffffff"), 0.14, 0.04, 0, 0, 0, 0.8);
          O.orb = u.add(G, u.sphere(0.62, 96), cer(mix(pink, "#ffffff", 0.1)), 2.0, -1.1, 1.3);
          O.pillTop = u.add(G, u.pill(1.2, 0.2), cer(mix(blue, "#ffffff", 0.35)), 1.7, 1.75, 0.5, 0, 0, -0.35);
          G.rotation.set(0.04, -0.42, 0);
          return O;
        });
      },
      pose: function (t, k) {
        var e = function (d, dur) { return k.prog(t, d, d + (dur || 1.3), "power3.out"); };
        var a = e(0.0), b = e(0.12), c = e(0.26), d = e(0.4, 1.1), f = e(0.5, 1.1);
        O.back.position.set(lerp(0.2, 0.75, a), lerp(0.1, 0.55, a), lerp(-0.1, -1.15, a));
        O.mid.position.set(0, lerp(-0.2, 0, b), 0);
        O.chip.position.set(lerp(-0.4, -1.35, c), lerp(-0.3, -1.0, c), lerp(0.2, 1.15, c));
        O.orb.scale.setScalar(Math.max(0.001, d)); O.orb.position.y = lerp(-0.6, -1.1, d);
        O.pillTop.scale.setScalar(Math.max(0.001, f)); O.pillTop.position.y = lerp(1.0, 1.75, f);
        O.G.rotation.y = lerp(-0.2, -0.42, a);
      },
    };
  };


  // ---- claymation-3d: chunky hand-pressed clay under a warm window, thumbprints in the surface
  SCENES["claymation-3d"] = function (P) {
    var O = {}, U;
    return {
      environment: "none", exposure: 1.05,
      camera: cam({ c: [0, -0.2, 0], w: [12.2, 11.0], az: [-20, -9], el: [15, 12], mm: 60, cx: 0.72, cy: 0.54, fstop: 6, fo: 0 }),
      post: { vignette: 0.1, grain: 0.02, saturation: 1.05 },
      type: { v: "bottom" },
      build: function (k) {
        return makeKit(k).then(function (u) {
          U = u; var T = u.T;
          u.env({ top: "#fff2dc", mid: "#d9a860", bottom: "#7a4a1e", intensity: 0.55, blur: 0.04, boxes: [{ p: [-9, 6, 6], w: 9, h: 9, c: "#fff0d0", i: 3 }] });
          k.rig("window", { key: "#ffe0b0", fill: "#ffd9a8", shadowSize: 7, shadowSoftness: 12, intensity: 1.2 });
          k.ground({ y: -1.45, shadowOpacity: 0.3 });
          var bump = u.noiseTex(11, 256, 36, 1.0); bump.repeat.set(2, 2);
          var finger = u.canvasTex(512, 512, function (x, w, h) {
            x.fillStyle = "#808080"; x.fillRect(0, 0, w, h);
            for (var i = 0; i < 26; i++) { var g = 128 + (i % 2 ? 46 : -46); x.strokeStyle = "rgb(" + g + "," + g + "," + g + ")"; x.lineWidth = 7; x.beginPath(); x.ellipse(w * 0.5, h * 0.52, 18 + i * 8.5, 24 + i * 11, -0.25, Math.PI * 0.15, Math.PI * 1.95); x.stroke(); }
            var gr = x.createRadialGradient(w / 2, h / 2, 120, w / 2, h / 2, 260); gr.addColorStop(0, "rgba(128,128,128,0)"); gr.addColorStop(1, "rgba(128,128,128,1)"); x.fillStyle = gr; x.fillRect(0, 0, w, h);
          });
          finger.colorSpace = T.NoColorSpace;
          var clay = function (c, map) { return k.material("clay", { color: c, roughness: 0.78, bumpMap: map || bump, bumpScale: map ? 4 : 1.2, sheen: 0.5, sheenColor: new T.Color(lighten(c, 0.5)) }); };
          var G = O.G = u.group(k.scene);
          O.bean = u.add(G, u.pill(2.7, 0.78), clay(P.accent), 0.5, 0.1, -0.6, 0, 0, Math.PI / 2 - 0.16); // lying upright
          O.bean.userData.R = 1.35; 
          O.ball = u.add(G, u.sphere(0.92, 80), clay(P.accent2), -1.65, -0.55, 0.9);
          O.block = u.add(G, u.rbox(1.7, 1.25, 1.5, 0.42, 0.42, 0.42, [28, 28, 28]), clay(P.surface, finger), 2.0, -0.82, 0.7, 0, -0.55, 0.0);
          O.nub = u.add(G, u.sphere(0.4, 48), clay(P.accent), 1.55, 0.18, 0.4);
          O.pellet = u.add(G, u.pill(0.95, 0.3), clay(lighten(P.accent2, 0.35)), 0.35, -1.15, 1.7, 0, 0.2, 0.05);
          return O;
        });
      },
      pose: function (t, k) {
        function pop(m, y0, half, d, dur) {
          var u = k.prog(t, d, d + (dur || 0.9), "power3.out"), s = Math.sin(Math.PI * u) * (1 - u * 0.4);
          m.scale.set(Math.max(0.001, u * (1 - 0.14 * s)), Math.max(0.001, u * (1 + 0.2 * s)), Math.max(0.001, u * (1 - 0.14 * s)));
          m.position.y = y0 - half * (1 - m.scale.y);
        }
        pop(O.ball, -0.55, 0.92, 0.1); pop(O.block, -0.82, 0.62, 0.22); pop(O.nub, 0.18, 0.4, 0.5, 0.7); pop(O.pellet, -1.15, 0.3, 0.6, 0.7);
        var ub = k.prog(t, 0.0, 1.0, "power3.out"); O.bean.scale.set(Math.max(0.001, ub), Math.max(0.001, ub * (1 + 0.1 * Math.sin(Math.PI * ub))), Math.max(0.001, ub)); O.bean.position.y = 0.1 - 1.3 * (1 - ub);
        O.G.rotation.y = lerp(0.18, 0, k.prog(t, 0, 1.8, "power2.out"));
      },
    };
  };

  // ---- glossy-3d: candy-bright plastic with a clearcoat, punchy three-point studio
  SCENES["glossy-3d"] = function (P) {
    var O = {}, U;
    return {
      environment: "none", exposure: 1.0,
      camera: cam({ c: [0, 0, 0], w: [12.2, 11], az: [-24, -12], el: [12, 8], mm: 75, cx: 0.75, cy: 0.52, fstop: 4.5, fo: 0 }),
      post: { vignette: 0.06, grain: 0.012, bloom: { strength: 0.12, threshold: 1.0, radius: 0.5 } },
      type: { v: "bottom" },
      build: function (k) {
        return makeKit(k).then(function (u) {
          U = u; var T = u.T;
          u.env({ top: "#ffffff", mid: lighten(P.canvas, 0.2), bottom: darken(P.accent, 0.35), intensity: 1.0, blur: 0.02, boxes: [
            { p: [-8, 7, 7], w: 9, h: 7, c: "#ffffff", i: 5 }, { p: [10, 3, 2], w: 2.4, h: 14, c: P.accent2, i: 4 }, { p: [-11, 0, -4], w: 1.6, h: 12, c: "#ffffff", i: 5 }, { p: [0, 12, -3], w: 12, h: 3, c: "#ffffff", i: 3 }] });
          k.rig("three-point", { key: "#fff6f0", fill: lighten(P.accent, 0.6), rim: "#ffffff", dir: [-0.6, 0.9, 0.7], shadowSize: 6, shadowSoftness: 8, intensity: 1.0 });
          k.ground({ y: -1.5, shadowOpacity: 0.22 });
          var pl = function (c, o2) { return k.material("plastic", Object.assign({ color: c, roughness: 0.1, clearcoat: 1, clearcoatRoughness: 0.03, envMapIntensity: 1.0 }, o2 || {})); };
          var G = O.G = u.group(k.scene);
          O.star = u.add(G, u.puff(u.starShape(5, 1.35, 0.78, 4), 0.2, 0.34, 16), pl(P.accent), 0.0, 0.25, 0.0, 0, 0, 0.12);
          O.ball = u.add(G, u.sphere(0.78, 96), pl(P.accent2), -1.75, -0.72, 1.0);
          O.pill = u.add(G, u.pill(2.1, 0.42), pl(P.ink, { roughness: 0.08 }), 1.55, -1.02, 0.95, 0, -0.3, 0.24);
          O.ring = u.add(G, new T.TorusGeometry(0.62, 0.22, 48, 120), pl(lighten(P.accent, 0.55)), 2.0, 1.25, -0.4, 0.5, -0.5, 0);
          O.dot = u.add(G, u.sphere(0.28, 48), pl(P.accent), -1.25, 1.45, 0.2);
          return O;
        });
      },
      pose: function (t, k) {
        var e = function (d, dur) { return k.prog(t, d, d + (dur || 1.2), "power3.out"); };
        var a = e(0), b = e(0.15), c = e(0.3), d = e(0.42, 1), f = e(0.55, 0.9);
        O.star.scale.setScalar(Math.max(0.001, a)); O.star.rotation.y = lerp(-1.4, 0, a); O.star.rotation.z = lerp(-0.6, 0.12, a);
        O.ball.scale.setScalar(Math.max(0.001, b)); O.ball.position.y = lerp(-0.2, -0.72, b);
        O.pill.position.set(1.55, lerp(-0.3, -1.02, c), 0.95); O.pill.scale.setScalar(Math.max(0.001, c));
        O.ring.scale.setScalar(Math.max(0.001, d)); O.ring.rotation.y = lerp(-1.5, -0.5, d); O.ring.rotation.x = lerp(1.2, 0.5, d);
        O.dot.scale.setScalar(Math.max(0.001, f));
      },
    };
  };

  // ---- chrome-liquid-metal: mirror chrome in a studio of softboxes; a melted blob and capsules
  SCENES["chrome-liquid-metal"] = function (P) {
    var O = {}, U;
    return {
      environment: "none", exposure: 1.0, toneMapping: "neutral",
      camera: cam({ c: [0, 0, 0], w: [14, 13], az: [-22, -10], el: [8, 6], mm: 85, cx: 0.76, cy: 0.5, fstop: 5, fo: 0 }),
      post: { vignette: 0.08, grain: 0.014 },
      type: { v: "bottom" },
      build: function (k) {
        return makeKit(k).then(function (u) {
          U = u; var T = u.T;
          u.env({ top: "#f4f7fb", mid: "#aab2be", floor: "#4a505a", bottom: "#050607", intensity: 1.15, blur: 0.0, boxes: [
            { p: [-9, 6, 5], w: 12, h: 3, c: "#ffffff", i: 9 }, { p: [9, 3, 6], w: 2, h: 11, c: "#ffffff", i: 7 }, { p: [0, 10, -6], w: 14, h: 4, c: "#ffffff", i: 6 }, { p: [-3, -2, 10], w: 6, h: 1, c: P.accent2, i: 3 }, { p: [11, -1, -5], w: 1.2, h: 9, c: "#cfe0ff", i: 8 }] });
          k.rig("rim", { key: "#ffffff", rim: "#ffffff", dir: [-0.6, 0.8, 0.7], shadowSize: 6, shadowSoftness: 8, intensity: 0.5 });
          k.ground({ y: -1.6, shadowOpacity: 0.2 });
          var ch = function (c, o2) { return k.material("chrome", Object.assign({ color: c, roughness: 0.02, clearcoat: 0, envMapIntensity: 1.0 }, o2 || {})); };
          var G = O.G = u.group(k.scene);
          O.blob = u.add(G, u.blob(1.35, 21, 0.3, 1.5, 200), ch("#f2f5f9"), 0.0, 0.1, 0.0);
          O.cap1 = u.add(G, u.pill(2.6, 0.38), ch("#dfe4ec"), 1.9, -1.0, 0.9, 0.0, -0.2, 0.9);
          O.cap2 = u.add(G, u.pill(1.7, 0.3), ch(darken(P.accent, 0.05), { roughness: 0.06 }), -1.2, -1.05, 1.0, 0, 0.5, -0.35);
          O.drop = u.add(G, u.blob(0.5, 7, 0.22, 1.6, 120), ch("#f2f5f9"), -1.5, 1.45, 0.4);
          O.sph = u.add(G, u.sphere(0.34, 64), ch(P.accent2), 2.1, 1.2, 0.2);
          return O;
        });
      },
      pose: function (t, k) {
        var e = function (d, dur) { return k.prog(t, d, d + (dur || 1.3), "power3.out"); };
        var a = e(0), b = e(0.18), c = e(0.3), d = e(0.45, 1);
        O.blob.scale.setScalar(Math.max(0.001, a)); O.blob.rotation.y = lerp(1.2, 0.1, a); O.blob.rotation.x = lerp(0.6, 0, a);
        O.cap1.position.x = lerp(0.9, 1.9, b); O.cap1.scale.setScalar(Math.max(0.001, b));
        O.cap2.position.x = lerp(-0.4, -1.2, c); O.cap2.scale.setScalar(Math.max(0.001, c));
        O.drop.scale.setScalar(Math.max(0.001, d)); O.drop.position.y = lerp(0.5, 1.45, d);
        O.sph.scale.setScalar(Math.max(0.001, d));
      },
    };
  };

  // ---- glass-3d: clear and frosted glass slabs over saturated light, rim-lit on night blue
  SCENES["glass-3d"] = function (P) {
    var O = {}, U;
    return {
      environment: "none", exposure: 1.0,
      camera: cam({ c: [0, 0, 0], w: [11.4, 10.2], az: [-24, -12], el: [8, 6], mm: 60, cx: 0.7, cy: 0.5, fstop: 3.2, fo: 0 }),
      post: { bloom: { strength: 0.5, threshold: 1.0, radius: 0.6 }, vignette: 0.18, grain: 0.02 },
      type: { v: "bottom" },
      build: function (k) {
        return makeKit(k).then(function (u) {
          U = u; var T = u.T;
          u.env({ top: "#9fb4ff", mid: "#1a2548", bottom: "#05070f", intensity: 1.1, blur: 0.0, boxes: [
            { p: [-8, 4, 6], w: 1.4, h: 12, c: "#ffffff", i: 8 }, { p: [8, 2, 5], w: 1.4, h: 12, c: P.accent, i: 8 }, { p: [0, 9, 4], w: 10, h: 2, c: "#ffffff", i: 6 }, { p: [4, -3, 9], w: 6, h: 1, c: P.accent2, i: 5 }] });
          k.rig("rim", { key: "#cfe0ff", rim: P.accent, dir: [-0.6, 0.6, 0.8], shadows: false, intensity: 0.6 });
          var em = function (c, i) { return k.material("emissive", { color: c, intensity: i || 1.6 }); };
          var G = O.G = u.group(k.scene);
          // light behind the glass: the thing to refract
          O.sunA = u.add(G, u.sphere(1.45, 64), em(P.accent2, 1.5), -0.9, 0.5, -2.3); O.sunA.castShadow = false;
          O.barB = u.add(G, u.pill(4.2, 0.5), em(P.accent, 1.5), 1.0, -0.9, -2.0, 0, 0, 0.5); O.barB.castShadow = false;
          O.dotC = u.add(G, u.sphere(0.55, 48), em(lighten(P.accent2, 0.3), 1.6), 2.6, 1.3, -1.8); O.dotC.castShadow = false;
          O.dotD = u.add(G, u.sphere(0.4, 48), em(lighten(P.accent, 0.4), 1.5), -2.4, -1.2, -1.2); O.dotD.castShadow = false;
          var clear = k.material("glass", { color: "#ffffff", roughness: 0.02, thickness: 0.8, ior: 1.52, attenuationColor: new T.Color(lighten(P.accent, 0.5)), attenuationDistance: 3, envMapIntensity: 1.3 });
          var frost = k.material("frosted-glass", { color: "#ffffff", roughness: 0.38, thickness: 0.7, ior: 1.45, envMapIntensity: 1.0 });
          O.slabA = u.add(G, u.slab(3.4, 2.3, 0.34, 0.45), frost, 0.3, 0.1, 0.0); O.slabA.castShadow = false;
          O.slabB = u.add(G, u.slab(2.6, 1.8, 0.34, 0.45), clear, 1.35, -0.55, 0.9, 0, 0, -0.06); O.slabB.castShadow = false;
          O.slabC = u.add(G, u.slab(1.6, 1.0, 0.3, 0.3), clear, -1.15, 0.9, 1.0, 0, 0, 0.1); O.slabC.castShadow = false;
          return O;
        });
      },
      pose: function (t, k) {
        var e = function (d, dur) { return k.prog(t, d, d + (dur || 1.4), "power3.out"); };
        var a = e(0), b = e(0.2), c = e(0.35);
        O.slabA.position.set(0.3, 0.1, lerp(-1.2, 0, a)); O.slabA.rotation.y = lerp(0.5, 0, a);
        O.slabB.position.set(lerp(2.6, 1.35, b), -0.55, lerp(0.2, 0.9, b)); O.slabB.rotation.y = lerp(-0.6, 0, b);
        O.slabC.position.set(-1.15, lerp(0.2, 0.9, c), 1.0); O.slabC.scale.setScalar(Math.max(0.001, c));
        O.sunA.position.x = lerp(-0.2, -0.9, a); O.barB.position.x = lerp(0.2, 1.0, b);
      },
    };
  };


  // ---- low-poly: a faceted floating island and drifting rocks against a big dusk sun
  SCENES["low-poly"] = function (P) {
    var O = {}, U;
    return {
      environment: "none", exposure: 1.05,
      background: P.canvas,
      camera: cam({ c: [0, -1.0, 0], w: [19, 17], az: [-26, -12], el: [32, 27], mm: 55, cx: 0.75, cy: 0.52, fstop: 40 }),
      post: { vignette: 0.18, grain: 0.02, bloom: { strength: 0.35, threshold: 1.0, radius: 0.7 } },
      type: { v: "bottom" },
      build: function (k) {
        return makeKit(k).then(function (u) {
          U = u; var T = u.T;
          k.rig("three-point", { key: "#ffa868", fill: "#6a4bd6", rim: "#ffcf80", dir: [-0.8, 0.7, 0.8], shadowSize: 8, shadowSoftness: 3, intensity: 1.6 });
          k.scene.add(new T.HemisphereLight("#b58ae6", "#2b1e4a", 1.0));
          var rnd = k.rng(21), nz = seededNoise(4);
          var grass = mix(P.accent, P.accent2, 0.35), rock = mix(P.surface, "#ffffff", 0.5), rock2 = mix(P.surface, P.accent, 0.3);
          // an island: a faceted top, then a skirt that closes into a point below
          var NS = 34, TOP = 7, SK = 7, R0 = 4.3, rings = [];
          for (var r = 0; r <= TOP + SK; r++) {
            var row = [];
            for (var i = 0; i < NS; i++) {
              var a = (i / NS) * Math.PI * 2 + (rnd() - 0.5) * 0.11, rad, y;
              if (r <= TOP) { rad = (r / TOP) * R0 * (1 + (rnd() - 0.5) * (r === TOP ? 0.1 : 0.06)); y = (r === 0 ? 0.25 : 0) + 0.65 * (fbm(nz, Math.cos(a) * rad * 0.35 + 5, Math.sin(a) * rad * 0.35, 3) - 0.35) + (rnd() - 0.5) * 0.12 - 0.15 * (r / TOP) * (r / TOP); }
              else { var q = (r - TOP) / SK; rad = R0 * (1 - Math.pow(q, 1.3) * 0.97) * (1 + (rnd() - 0.5) * 0.18); y = -0.15 - q * 4.6 * (1 + (rnd() - 0.5) * 0.12) - Math.pow(q, 3) * 0.6; }
              row.push([Math.cos(a) * rad, y, Math.sin(a) * rad]);
            }
            rings.push(row);
          }
          var pos = [], cols = [];
          function tri(p, q2, w2, isTop) {
            var ux = q2[0] - p[0], uy = q2[1] - p[1], uz = q2[2] - p[2], vx = w2[0] - p[0], vy = w2[1] - p[1], vz = w2[2] - p[2];
            var nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nzz = ux * vy - uy * vx, L = Math.sqrt(nx * nx + ny * ny + nzz * nzz) || 1;
            var yy = (p[1] + q2[1] + w2[1]) / 3, base = isTop ? grass : mix(rock2, rock, clamp((yy + 4.2) / 4.2, 0, 1));
            var c = new T.Color(mix(base, rnd() < 0.5 ? "#ffffff" : "#000000", 0.03 + rnd() * 0.12));
            [p, q2, w2].forEach(function (v) { pos.push(v[0], v[1], v[2]); cols.push(c.r, c.g, c.b); });
          }
          for (var r2 = 0; r2 < TOP + SK; r2++) for (var i2 = 0; i2 < NS; i2++) {
            var i3 = (i2 + 1) % NS, A = rings[r2][i2], B = rings[r2][i3], C = rings[r2 + 1][i2], D = rings[r2 + 1][i3];
            var tp = r2 < TOP;
            if (r2 === 0) { tri(A, D, B, tp); } else { tri(A, C, B, tp); tri(B, C, D, tp); }
            if (r2 === 0) tri(A, C, D, tp);
          }
          var g = new T.BufferGeometry(); g.setAttribute("position", new T.Float32BufferAttribute(pos, 3)); g.setAttribute("color", new T.Float32BufferAttribute(cols, 3)); g.computeVertexNormals();
          var fm = new T.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.9, metalness: 0, side: T.DoubleSide });
          O.isle = new T.Group(); k.scene.add(O.isle);
          var body = new T.Mesh(g, fm); body.castShadow = body.receiveShadow = true; O.isle.add(body);
          // faceted pines and rocks
          var faceted = function (geo, c, jit) {
            var gg = geo.toNonIndexed(), p2 = gg.attributes.position; var seen = {};
            for (var q = 0; q < p2.count; q++) { var key = p2.getX(q).toFixed(3) + "," + p2.getY(q).toFixed(3) + "," + p2.getZ(q).toFixed(3); if (!seen[key]) seen[key] = [(rnd() - 0.5) * jit, (rnd() - 0.5) * jit, (rnd() - 0.5) * jit]; var j = seen[key]; p2.setXYZ(q, p2.getX(q) + j[0], p2.getY(q) + j[1], p2.getZ(q) + j[2]); }
            gg.computeVertexNormals();
            return new T.Mesh(gg, new T.MeshStandardMaterial({ color: new T.Color(c), flatShading: true, roughness: 0.9 }));
          };
          O.trees = [];
          [[-1.6, 1.2, 1.15], [-0.7, 2.0, 0.85], [1.3, -1.4, 1.0], [0.4, -2.3, 0.7], [2.0, 0.6, 0.8], [-2.4, -0.7, 0.75]].forEach(function (tr, i) {
            var gr = new T.Group(); gr.position.set(tr[0], 0.05, tr[1]);
            for (var l = 0; l < 3; l++) { var cone = faceted(new T.ConeGeometry(0.62 * tr[2] * (1 - l * 0.25), 0.9 * tr[2], 6), mix(P.surface, P.accent, i % 2 ? 0.5 : 0.35), 0.07); cone.position.y = 0.55 * tr[2] + l * 0.5 * tr[2]; cone.castShadow = true; gr.add(cone); }
            O.isle.add(gr); O.trees.push(gr);
          });
          O.rocks = [];
          [[-3.6, 2.0, 1.2, 0.5], [4.2, 2.9, 0.9, 0.35], [3.6, -2.6, -0.8, 0.4], [-1.0, -2.8, 3.0, 0.28]].forEach(function (rk, i) {
            var m = faceted(new T.IcosahedronGeometry(rk[3], 1), i % 2 ? rock : rock2, rk[3] * 0.5); m.position.set(rk[0], rk[1], rk[2]); m.castShadow = true; k.scene.add(m); O.rocks.push(m); m.userData.p = [rk[0], rk[1], rk[2]];
          });
          O.sun = u.add(k.scene, new T.CircleGeometry(4.3, 80), k.material("emissive", { color: P.accent2, intensity: 1.45 }), 3.6, 1.2, -14); O.sun.castShadow = false; O.sun.receiveShadow = false;
          O.halo = u.add(k.scene, new T.CircleGeometry(7.6, 80), new T.MeshBasicMaterial({ color: new T.Color(mix(P.canvas, P.accent, 0.5)), toneMapped: false, transparent: true, opacity: 0.38 }), 3.6, 1.2, -14.5); O.halo.castShadow = false; O.halo.receiveShadow = false;
          return O;
        });
      },
      pose: function (t, k) {
        var a = k.prog(t, 0, 1.6, "power3.out");
        O.isle.position.y = lerp(-3.2, 0, a); O.isle.rotation.y = lerp(-0.9, 0.35, a);
        O.trees.forEach(function (g, i) { g.scale.setScalar(Math.max(0.001, k.prog(t, 0.35 + i * 0.07, 1.2 + i * 0.07, "power3.out"))); });
        O.rocks.forEach(function (m, i) { var u2 = k.prog(t, 0.2 + i * 0.1, 1.8 + i * 0.1, "power3.out"); m.position.set(m.userData.p[0], lerp(m.userData.p[1] - 3, m.userData.p[1], u2), m.userData.p[2]); m.rotation.set(u2 * 0.9, u2 * 1.3, 0); });
        O.sun.position.y = lerp(-1.0, 1.2, k.prog(t, 0.1, 2.0, "power2.out")); O.halo.position.y = O.sun.position.y;
      },
    };
  };

  // ---- isometric-3d: a tiny block world seen down a long lens, hard sun
  SCENES["isometric-3d"] = function (P) {
    var O = {}, U;
    return {
      environment: "none", exposure: 1.02,
      camera: cam({ c: [0, 0.3, 0], w: [15.5, 14.0], az: [58, 45], el: [32, 35.26], mm: [190, 190], cx: 0.72, cy: 0.52, fstop: 40 }),
      post: { vignette: 0.05 },
      type: { v: "bottom" },
      build: function (k) {
        return makeKit(k).then(function (u) {
          U = u; var T = u.T;
          u.env({ top: "#ffffff", mid: "#cfe0f8", bottom: "#8fa6c8", intensity: 0.7, boxes: [{ p: [-8, 9, 6], w: 10, h: 10, c: "#ffffff", i: 2 }] });
          k.rig("window", { key: "#fff8ee", fill: "#c9dcff", dir: [-0.7, 1, 0.6], shadowSize: 8, shadowSoftness: 2.5, intensity: 1.15 });
          k.ground({ y: -0.9, shadowOpacity: 0.16 });
          var mt = function (c) { return k.material("matte", { color: c, roughness: 0.78 }); };
          var G = O.G = u.group(k.scene);
          var box = function (w, h, d, c, x, y, z, r) { var m = u.add(G, u.rbox(w, h, d, r == null ? 0.05 : r, r == null ? 0.05 : r, r == null ? 0.05 : r, [10, 10, 10]), mt(c), x, y + h / 2, z); return m; };
          O.base = box(5.6, 0.5, 5.6, "#ffffff", 0, -0.9, 0, 0.08);
          O.floor2 = box(3.4, 0.5, 3.4, P.accent2, -0.9, -0.4, -0.9, 0.06);
          O.steps = [];
          for (var i = 0; i < 5; i++) O.steps.push(box(0.8, 0.28 * (i + 1), 0.8, i % 2 ? "#ffffff" : mix("#ffffff", P.accent2, 0.35), 1.2 + i * 0.0, -0.4, 0.8 - i * 0.0 + 0, 0.04));
          O.steps.forEach(function (s, i) { s.position.set(2.0 - 0.0, -0.4 + 0.14 * (i + 1), 2.1 - i * 0.8); s.userData.y = s.position.y; });
          O.tower = box(1.3, 2.6, 1.3, P.accent, -1.5, 0.1, -1.5, 0.06);
          O.cap = box(1.5, 0.22, 1.5, "#ffffff", -1.5, 2.7, -1.5, 0.05);
          O.disc = u.add(G, new T.CylinderGeometry(0.85, 0.85, 0.3, 64), mt(P.ink), 0.7, 0.0, -0.4); O.disc.position.y = 0.0 + 0.15 - 0.4 + 0.4;
          O.cube = box(0.9, 0.9, 0.9, P.accent2, 0.9, 0.1, -0.5, 0.1); O.cube.position.y = 0.55 + 1.3;
          O.cube2 = box(0.55, 0.55, 0.55, P.accent, -0.1, 0.1, 1.2, 0.08);
          return O;
        });
      },
      pose: function (t, k) {
        var e = function (d, dur) { return k.prog(t, d, d + (dur || 0.9), "power3.out"); };
        O.base.scale.set(1, Math.max(0.001, e(0)), 1); 
        var f = e(0.1); O.floor2.position.y = lerp(3, -0.15, f) ; O.floor2.scale.setScalar(1);
        O.steps.forEach(function (s, i) { var u2 = e(0.25 + i * 0.07, 0.7); s.position.y = lerp(s.userData.y + 3, s.userData.y, u2); });
        O.tower.position.y = lerp(4, 1.4, e(0.3, 1.0)); O.cap.position.y = O.tower.position.y + 1.4; 
        O.cube.position.y = lerp(5, 1.85, e(0.55, 1.0)); O.cube2.position.y = lerp(4, 0.3, e(0.7, 0.9)); O.disc.position.y = lerp(3, 0.3, e(0.45, 1));
      },
    };
  };

  // ---- tilt-shift-diorama: a miniature town on a tray, shot from above with a razor-thin focus plane
  SCENES["tilt-shift-diorama"] = function (P) {
    var O = {}, U;
    return {
      environment: "none", exposure: 1.05,
      camera: (function () { var c = cam({ c: [0, 0, 0], w: [19.5, 17.5], az: [-30, -20], el: [44, 40], mm: 100, cx: 0.76, cy: 0.5 }); c.aperture = 0.8; c.fstop = 2; return c; })(),
      post: { saturation: 1.18, vignette: 0.1, grain: 0.012 },
      type: { v: "bottom" },
      build: function (k) {
        return makeKit(k).then(function (u) {
          U = u; var T = u.T;
          u.env({ top: "#ffffff", mid: "#e8f6ff", bottom: "#a8c8b0", intensity: 0.75, boxes: [{ p: [-8, 9, 5], w: 12, h: 12, c: "#fff6e0", i: 2.2 }] });
          k.rig("window", { key: "#fff1d6", fill: "#cfe8ff", dir: [-0.8, 1, 0.5], shadowSize: 8, shadowSoftness: 3, intensity: 1.2 });
          k.ground({ y: -0.62, shadowOpacity: 0.18 });
          var rnd = k.rng(33), mt = function (c, r) { return k.material("matte", { color: c, roughness: r || 0.8 }); };
          var G = O.G = u.group(k.scene);
          var grass = mix(P.canvas, "#6bc287", 0.65);
          u.add(G, u.rbox(8.4, 0.5, 6.0, 0.18, 0.12, 0.18, [24, 6, 18]), mt(grass), 0, -0.35, 0);
          u.add(G, u.rbox(8.6, 0.3, 6.2, 0.15, 0.1, 0.15, [24, 6, 18]), mt(P.ink, 0.9), 0, -0.6, 0);
          var road = mt("#6b7a80", 0.9);
          u.add(G, u.rbox(8.4, 0.04, 0.7, 0.01, 0.01, 0.01, [4, 1, 1]), road, 0, -0.095, 0.3).castShadow = false;
          u.add(G, u.rbox(0.7, 0.04, 6.0, 0.01, 0.01, 0.01, [1, 1, 4]), road, -1.2, -0.095, 0).castShadow = false;
          O.pond = u.add(G, new T.CylinderGeometry(1.0, 1.0, 0.05, 48), k.material("plastic", { color: "#6fc7ea", roughness: 0.1 }), 2.6, -0.09, -1.6);
          O.items = [];
          var cell = [[-3.2, -1.9], [-2.2, -1.9], [-0.1, -1.9], [0.9, -1.9], [-3.2, 1.5], [-2.0, 1.5], [0.2, 1.4], [1.3, 1.5], [2.5, 1.5], [3.3, 0.2], [-0.2, 0.9 - 2.8]];
          cell.forEach(function (c, i) {
            var w = 0.8 + rnd() * 0.4, h = 0.7 + rnd() * 1.0, d = 0.8 + rnd() * 0.3, wall = i % 3 === 0 ? "#fff6ea" : i % 3 === 1 ? lighten(P.accent2, 0.55) : "#ffffff";
            var b = u.group(G, c[0], -0.07, c[1]);
            u.add(b, u.rbox(w, h, d, 0.04, 0.04, 0.04, [6, 6, 6]), mt(wall), 0, h / 2, 0);
            var roof = u.add(b, new T.ConeGeometry(Math.max(w, d) * 0.78, 0.55, 4), mt(i % 2 ? P.accent : darken(P.accent, 0.15)), 0, h + 0.27, 0); roof.rotation.y = Math.PI / 4; roof.scale.set(1, 1, d / w);
            u.add(b, u.rbox(0.18, 0.28, 0.02, 0.01, 0.01, 0.01, [2, 2, 2]), mt(P.ink), 0, 0.14, d / 2 + 0.01).castShadow = false;
            O.items.push(b);
          });
          var tc = [[-3.6, 0.1], [-2.8, 0.5], [-0.8, -0.9], [0.1, 0.3], [1.5, -0.2], [3.5, -2.0], [3.6, 2.0], [2.2, 2.4], [-1.5, 2.3], [-3.7, 2.3], [-0.5, -2.6], [1.8, -2.6], [3.0, -0.8], [2.0, 0.6]];
          tc.forEach(function (c, i) {
            var b = u.group(G, c[0], -0.07, c[1]), s = 0.8 + rnd() * 0.5;
            u.add(b, new T.CylinderGeometry(0.06, 0.08, 0.35 * s, 8), mt("#7a5236"), 0, 0.17 * s, 0);
            var g2 = i % 4 === 0 ? "#3f9d5e" : i % 4 === 1 ? "#58b36f" : i % 4 === 2 ? "#4aa866" : "#6cc17c";
            if (i % 2) u.add(b, u.sphere(0.34 * s, 24), mt(g2), 0, 0.55 * s, 0); else { u.add(b, new T.ConeGeometry(0.34 * s, 0.7 * s, 8), mt(g2), 0, 0.62 * s, 0); u.add(b, new T.ConeGeometry(0.26 * s, 0.55 * s, 8), mt(g2), 0, 0.95 * s, 0); }
            O.items.push(b);
          });
          return O;
        });
      },
      pose: function (t, k) {
        O.items.forEach(function (b, i) { var u2 = k.prog(t, 0.1 + (i % 9) * 0.05 + (i > 10 ? 0.15 : 0), 0.9 + (i % 9) * 0.05 + (i > 10 ? 0.15 : 0), "power3.out"); b.scale.setScalar(Math.max(0.001, u2)); });
        O.G.rotation.y = lerp(0.12, 0, k.prog(t, 0, 2, "power2.out"));
      },
    };
  };

  // ---- concrete-brutalist-3d: monumental slabs, hard raking sun, one note of safety orange
  SCENES["concrete-brutalist-3d"] = function (P) {
    var O = {}, U;
    return {
      environment: "none", exposure: 1.0,
      background: P.canvas, fog: { color: P.canvas, near: 50, far: 170 },
      camera: cam({ c: [0.6, 5.0, 0], w: [27, 24.5], az: [-30, -20], el: [3, 4], mm: 85, cx: 0.7, cy: 0.5, fstop: 40 }),
      post: { vignette: 0.12, grain: 0.03 },
      type: { v: "bottom" },
      build: function (k) {
        return makeKit(k).then(function (u) {
          U = u; var T = u.T;
          u.env({ top: "#e8e6e0", mid: "#b8b5ae", bottom: "#6f6c66", intensity: 0.25, boxes: [{ p: [-8, 6, 5], w: 8, h: 8, c: "#fff7e8", i: 1.5 }] });
          k.rig("low-key", { key: "#fff0d8", fill: "#aab6c6", dir: [-1.0, 0.6, 0.5], shadowSize: 16, shadowSoftness: 1.5, intensity: 2.4 });
          var floorC = mix(P.canvas, "#6e6d69", 0.55);
          k.ground({ y: 0, color: floorC, size: 160, roughness: 0.95 });
          var board = u.canvasTex(512, 512, function (x, w, h) {
            x.fillStyle = "#c8c8c6"; x.fillRect(0, 0, w, h);
            var rr = k.rng(5);
            for (var by = 0; by < 8; by++) { var sh = 205 + Math.round(rr() * 35); x.fillStyle = "rgb(" + sh + "," + sh + "," + sh + ")"; x.fillRect(0, by * 64, w, 64); for (var g = 0; g < 70; g++) { x.fillStyle = "rgba(" + (rr() < 0.5 ? "255,255,255" : "40,40,40") + "," + (0.03 + rr() * 0.06) + ")"; x.fillRect(rr() * w, by * 64 + rr() * 64, 20 + rr() * 140, 1 + rr() * 2); } x.fillStyle = "rgba(30,30,28,0.55)"; x.fillRect(0, by * 64, w, 3); }
            for (var s2 = 0; s2 < 5200; s2++) { x.fillStyle = "rgba(" + (rr() < 0.5 ? "0,0,0" : "255,255,255") + "," + (0.04 + rr() * 0.08) + ")"; x.fillRect(rr() * w, rr() * h, 1 + rr() * 2, 1 + rr() * 2); }
            [128, 384].forEach(function (cx2) { [96, 288].forEach(function (cy2) { x.fillStyle = "rgba(25,25,24,0.8)"; x.beginPath(); x.arc(cx2, cy2, 7, 0, 6.3); x.fill(); }); });
          });
          board.wrapS = board.wrapT = T.RepeatWrapping;
          var conc = function (c, seed, w, h) {
            var m = board.clone(); m.needsUpdate = true; m.repeat.set(Math.max(1, Math.round(w / 2.8)), Math.max(1, Math.round(h / 2.8)));
            var mt = new T.MeshStandardMaterial({ color: new T.Color(c), map: m, roughness: 0.93, metalness: 0, bumpMap: m, bumpScale: 1.1 });
            return mt;
          };
          var G = O.G = u.group(k.scene);
          var slab = function (w, h, d, x, y, z, c, seed) { var m = u.add(G, u.rbox(w, h, d, 0.02, 0.02, 0.02, [4, 4, 4]), conc(c, seed, w, h), x, y + h / 2, z); return m; };
          O.plinth = slab(15, 0.6, 6, 0.6, 0, 0.2, "#7f7e7b", 3);
          O.pA = slab(2.8, 9.2, 2.8, -3.4, 0.6, -0.3, "#8e8d8a", 2);
          O.pB = slab(2.8, 7.2, 2.8, 1.0, 0.6, 0.5, "#97968f", 4);
          O.pC = slab(2.8, 4.9, 2.8, 5.0, 0.6, 1.2, "#8e8d8a", 8);
          O.cant = slab(11.5, 1.5, 3.8, 1.4, 9.8, 0.2, "#848380", 5);
          O.slitL = slab(0.5, 5.2, 0.5, -1.55, 0.6, 0.7, "#77766f", 9);
          O.orange = u.add(G, u.rbox(0.34, 4.6, 0.14, 0.01, 0.01, 0.01, [2, 2, 2]), k.material("matte", { color: P.accent2, roughness: 0.55 }), -0.55, 2.9, 0.2);
          O.piers = [O.pA, O.pB, O.pC];
          return O;
        });
      },
      pose: function (t, k) {
        var hs = [9.2, 7.2, 4.9];
        O.piers.forEach(function (c, i) { var u2 = k.prog(t, 0.05 + i * 0.12, 1.5 + i * 0.12, "power3.out"); c.scale.y = Math.max(0.001, u2); c.position.y = 0.6 + hs[i] / 2 * u2; });
        O.cant.position.y = lerp(14.5, 9.8 + 0.72, k.prog(t, 0.4, 1.9, "power3.out"));
        O.slitL.scale.y = Math.max(0.001, k.prog(t, 0.3, 1.5, "power3.out")); O.slitL.position.y = 0.6 + 2.6 * O.slitL.scale.y;
        O.orange.scale.y = Math.max(0.001, k.prog(t, 0.9, 1.7, "power3.out")); O.orange.position.y = 0.6 + 2.3 * O.orange.scale.y;
      },
    };
  };

  // ---- surreal-3d: a quiet impossible set: arch, plinth, a stair to nowhere
  SCENES["surreal-3d"] = function (P) {
    var O = {}, U;
    return {
      environment: "none", exposure: 1.03,
      camera: cam({ c: [0.6, 3.0, 0], w: [16.5, 15], az: [-26, -16], el: [9, 7], mm: 55, cx: 0.72, cy: 0.52, fstop: 6, fo: 0 }),
      post: { vignette: 0.1, grain: 0.02 },
      type: { v: "top" },
      build: function (k) {
        return makeKit(k).then(function (u) {
          U = u; var T = u.T;
          u.env({ top: "#fff3ea", mid: "#f3cdb8", bottom: "#c68f7a", intensity: 0.65, blur: 0.04, boxes: [{ p: [-9, 5, 6], w: 9, h: 9, c: "#fff0e0", i: 2.4 }] });
          k.rig("window", { key: "#fff0e0", fill: "#ffc8b0", dir: [-1, 0.65, 0.45], shadowSize: 10, shadowSoftness: 9, intensity: 1.15 });
          k.ground({ y: 0, shadowOpacity: 0.3 });
          var mt = function (c) { return k.material("matte", { color: c, roughness: 0.92 }); };
          var G = O.G = u.group(k.scene);
          // arch: a thick wall with a round-topped opening
          var s = new T.Shape(); s.moveTo(-2.4, 0); s.lineTo(2.4, 0); s.lineTo(2.4, 4.6); s.absarc(0, 4.6, 2.4, 0, Math.PI, false); s.lineTo(-2.4, 0);
          var hole = new T.Path(); hole.moveTo(-1.35, 0); hole.lineTo(1.35, 0); hole.lineTo(1.35, 3.8); hole.absarc(0, 3.8, 1.35, 0, Math.PI, false); hole.lineTo(-1.35, 0); s.holes.push(hole);
          var ag = new T.ExtrudeGeometry(s, { depth: 1.1, bevelEnabled: true, bevelSize: 0.06, bevelThickness: 0.06, bevelSegments: 3, curveSegments: 48 });
          O.arch = u.add(G, ag, mt(P.surface), 0, 0, -2.2);
          O.arch2 = u.add(G, ag, mt(mix(P.accent2, P.surface, 0.5)), 3.9, 0, -4.2); O.arch2.scale.set(0.72, 0.72, 0.72);
          // plinth and sphere
          O.plinth = u.add(G, new T.CylinderGeometry(0.95, 1.1, 1.5, 64), mt(lighten(P.surface, 0.3)), -0.3, 0.75, 0.5);
          O.sphere = u.add(G, u.sphere(0.95, 96), k.material("ceramic", { color: P.accent, roughness: 0.5, clearcoat: 0.6 }), -0.3, 2.45, 0.5);
          // stairs to nowhere
          O.stairs = [];
          for (var i = 0; i < 7; i++) { var st = u.add(G, u.rbox(1.6, 0.34, 0.8, 0.04, 0.04, 0.04, [4, 3, 3]), mt(i % 2 ? mix(P.accent2, "#ffffff", 0.2) : P.accent2), 3.0 + i * 0.0, 0.17 + i * 0.42, 1.6 - i * 0.72); O.stairs.push(st); st.userData.y = st.position.y; }
          O.ring = u.add(G, new T.TorusGeometry(0.42, 0.12, 32, 80), mt(P.accent), 4.7, 3.9, -1.8, 0.2, 0.4, 0); O.ring.position.y = 4.0;
          return O;
        });
      },
      pose: function (t, k) {
        var e = function (d, dur) { return k.prog(t, d, d + (dur || 1.3), "power3.out"); };
        O.arch.scale.y = Math.max(0.001, e(0)); O.arch2.scale.y = Math.max(0.001, 0.72 * e(0.2));
        O.plinth.scale.y = Math.max(0.001, e(0.15, 1)); O.plinth.position.y = 0.75 * O.plinth.scale.y;
        O.sphere.position.y = lerp(5.0, 2.45, e(0.4, 1.4));
        O.stairs.forEach(function (s, i) { s.position.y = lerp(s.userData.y - 2.5, s.userData.y, e(0.2 + i * 0.07, 0.9)); s.scale.setScalar(Math.max(0.001, e(0.2 + i * 0.07, 0.5))); });
        O.ring.position.y = lerp(2.0, 4.0, e(0.8, 1.2)); O.ring.rotation.y = lerp(0, 0.4, e(0.8, 1.4));
      },
    };
  };


  // ---- photoreal-product-cgi: a dark slab of glass and titanium on black, cut out by a blue rim
  SCENES["photoreal-product-cgi"] = function (P, X) {
    var O = {}, U;
    return {
      environment: "none", exposure: 1.0,
      camera: cam({ c: [0, 0, 0], w: [6.6, 6.0], az: [-30, -18], el: [7, 4], mm: 110, cx: 0.7, cy: 0.5, fstop: 3.2, fo: 0 }),
      post: { vignette: 0.3, grain: 0.03, bloom: { strength: 0.3, threshold: 0.9, radius: 0.6 } },
      type: { v: "bottom" },
      build: function (k) {
        return makeKit(k).then(function (u) {
          U = u; var T = u.T, F = X.R.fonts;
          var ENV = u.env({ top: "#0a0a0c", mid: "#050506", bottom: "#000000", intensity: 1.0, boxes: [
            { p: [-9, 2, -3], w: 1.6, h: 14, c: "#ffffff", i: 16 }, { p: [9, 1, -4], w: 1.4, h: 14, c: P.accent, i: 18 }, { p: [0, 10, -1], w: 16, h: 1.6, c: "#ffffff", i: 9 }, { p: [-6, -1, 9], w: 1.0, h: 9, c: "#cfe2ff", i: 7 }, { p: [3, 3, 9], w: 10, h: 0.6, c: "#ffffff", i: 5 }] });
          k.rig("rim", { key: "#dbe8ff", rim: P.accent, dir: [-0.5, 0.6, 0.8], shadows: false, intensity: 0.8 });
          var W0 = 1.15, H0 = 2.45, D0 = 0.13;
          var ti = k.material("brushed-metal", { color: "#9a9ea8", roughness: 0.28, envMapIntensity: 1.6 });
          var scr = u.canvasTex(720, 1530, function (x, w, h) {
            var g = x.createLinearGradient(0, 0, w, h); g.addColorStop(0, "#0b1a33"); g.addColorStop(0.55, "#06080f"); g.addColorStop(1, "#0a0a0a"); x.fillStyle = g; x.fillRect(0, 0, w, h);
            var rg = x.createRadialGradient(w * 0.7, h * 0.32, 10, w * 0.7, h * 0.32, w * 0.8); rg.addColorStop(0, P.accent + "cc"); rg.addColorStop(1, "rgba(0,0,0,0)"); x.fillStyle = rg; x.fillRect(0, 0, w, h);
            x.fillStyle = P.ink; x.font = (F.displayWeight || 600) + " 120px '" + F.display + "', sans-serif"; x.textBaseline = "alphabetic";
            x.letterSpacing = "-5px";
            var words = String(X.headline || "Your film starts here").split(" "), lines = [], cur = "";
            words.forEach(function (wd) { var tt = cur ? cur + " " + wd : wd; if (x.measureText(tt).width > w - 130 && cur) { lines.push(cur); cur = wd; } else cur = tt; }); lines.push(cur);
            var y0 = h * 0.58; lines.slice(0, 4).forEach(function (l, i) { x.fillText(l, 64, y0 + i * 124); });
            x.letterSpacing = "0px"; x.fillStyle = "rgba(245,245,247,0.6)"; x.font = "400 38px '" + F.body + "', sans-serif";
            var sw = String(X.sub || "").split(" "), sl = [], sc = ""; sw.forEach(function (wd) { var tt = sc ? sc + " " + wd : wd; if (x.measureText(tt).width > w - 130 && sc) { sl.push(sc); sc = wd; } else sc = tt; }); sl.push(sc);
            sl.slice(0, 4).forEach(function (l, i) { x.fillText(l, 64, y0 + lines.slice(0, 4).length * 124 + 20 + i * 52); });
            x.fillStyle = "rgba(255,255,255,0.85)"; x.fillRect(w / 2 - 80, h - 40, 160, 8);
          });
          var G = O.G = u.group(k.scene);
          var glow = u.canvasTex(512, 512, function (x, w, h) { var g = x.createRadialGradient(w / 2, h / 2, 10, w / 2, h / 2, w / 2); g.addColorStop(0, P.accent + "40"); g.addColorStop(0.4, P.accent + "10"); g.addColorStop(1, "rgba(0,0,0,0)"); x.fillStyle = g; x.fillRect(0, 0, w, h); });
          var bgp = u.add(G, new T.PlaneGeometry(11, 7), new T.MeshBasicMaterial({ map: glow, transparent: true, toneMapped: false, depthWrite: false }), 2.2, 0.3, -4.5); bgp.castShadow = false; bgp.receiveShadow = false;
          var frontMats = [ti, ti, ti, ti, new T.MeshBasicMaterial({ map: scr, toneMapped: false }), k.material("brushed-metal", { color: "#4a4d54", roughness: 0.45 })];
          // front phone: titanium body, screen on its +z face inset by a glass layer
          O.front = u.group(G, 0, 0, 0.0);
          u.add(O.front, u.rbox(W0, H0, D0, 0.2, 0.2, 0.06, [24, 48, 8]), ti, 0, 0, 0);
          var glass = u.rbox(W0 - 0.06, H0 - 0.06, 0.01, 0.17, 0.17, 0.005, [24, 48, 2]);
          var gm = new T.Mesh(glass, [new T.MeshBasicMaterial({ color: "#000" }), new T.MeshBasicMaterial({ color: "#000" }), new T.MeshBasicMaterial({ color: "#000" }), new T.MeshBasicMaterial({ color: "#000" }), new T.MeshBasicMaterial({ map: scr, toneMapped: false }), new T.MeshBasicMaterial({ color: "#000" })]);
          gm.position.z = D0 / 2 + 0.002; O.front.add(gm);
          // back phone: we see its back, with the lens cluster
          O.back = u.group(G, 1.55, 0.0, -1.2);
          var bk = k.material("brushed-metal", { color: "#555a64", roughness: 0.2, envMapIntensity: 1.7 });
          u.add(O.back, u.rbox(W0, H0, D0, 0.2, 0.2, 0.06, [24, 48, 8]), bk, 0, 0, 0);
          var bump = u.add(O.back, u.rbox(0.62, 0.62, 0.05, 0.16, 0.16, 0.02, [16, 16, 4]), k.material("glass", { color: "#222", roughness: 0.05, transmission: 0.0, metalness: 0.3, envMapIntensity: 1.5 }), -0.17, 0.84, -D0 / 2 - 0.025);
          [[-0.15, 0.15], [0.15, 0.15], [0, -0.15]].forEach(function (p) {
            var lens = u.add(O.back, new T.CylinderGeometry(0.11, 0.11, 0.04, 40), k.material("chrome", { color: "#0b0c10", roughness: 0.08 }), -0.17 + p[0], 0.84 + p[1], -D0 / 2 - 0.066); lens.rotation.x = Math.PI / 2;
          });
          O.back.rotation.y = Math.PI; // back faces us: rotate about y; position stays
          O.front.rotation.set(0.0, 0.0, 0.0);
          return O;
        });
      },
      pose: function (t, k) {
        var a = k.prog(t, 0, 1.8, "power3.out"), b = k.prog(t, 0.2, 2.0, "power3.out");
        O.front.rotation.y = lerp(0.9, 0.0, a); O.front.rotation.z = lerp(0.1, 0.05, a); O.front.position.y = lerp(-0.4, 0.0, a);
        O.back.rotation.y = Math.PI + lerp(-0.8, 0.0, b); O.back.position.set(1.7, lerp(-0.7, 0.0, b), -1.3); O.back.rotation.z = lerp(-0.1, -0.05, b);
      },
    };
  };

  // ---- paper-cut-shadowbox: cut paper in a deep box, every layer throwing a real shadow on the next
  SCENES["paper-cut-shadowbox"] = function (P) {
    var O = {}, U;
    return {
      environment: "none", exposure: 1.3,
      camera: cam({ c: [0, 0, 0], w: [14.4, 13.2], az: [14, 5], el: [4, 2], mm: 70, cx: 0.74, cy: 0.5, fstop: 40 }),
      post: { vignette: 0.14, grain: 0.03 },
      type: { v: "bottom" },
      build: function (k) {
        return makeKit(k).then(function (u) {
          U = u; var T = u.T;
          u.env({ top: "#ffffff", mid: "#cfd8e4", bottom: "#8a95a8", intensity: 0.7, boxes: [{ p: [-8, 6, 8], w: 12, h: 10, c: "#fff6ea", i: 1.6 }] });
          k.rig("window", { key: "#fff1dc", fill: "#bcd0ec", dir: [-0.9, 0.9, 1.0], shadowSize: 6, shadowSoftness: 3, intensity: 2.3 });
          var paper = function (c) { return k.material("paper", { color: c, bumpScale: 0.25 }); };
          var rnd = k.rng(14), G = O.G = u.group(k.scene);
          var BW = 6.0, BH = 4.4, thick = 0.04;
          var layer = function (shape, c, z) { var g = new T.ExtrudeGeometry(shape, { depth: thick, bevelEnabled: false, curveSegments: 40 }); return u.add(G, g, paper(c), 0, 0, z); };
          var rect = function (x0, y0, x1, y1) { var s = new T.Shape(); s.moveTo(x0, y0); s.lineTo(x1, y0); s.lineTo(x1, y1); s.lineTo(x0, y1); s.closePath(); return s; };
          var hills = function (base, amp, f, ph, top) { var s = new T.Shape(), n = 80; s.moveTo(-BW / 2, -BH / 2); for (var i = 0; i <= n; i++) { var x = -BW / 2 + (BW * i) / n; s.lineTo(x, base + amp * Math.sin(x * f + ph) + amp * 0.5 * Math.sin(x * f * 2.3 + ph * 1.7) + (top || 0) * Math.sin(x * 0.5)); } s.lineTo(BW / 2, -BH / 2); s.closePath(); return s; };
          O.layers = [];
          O.layers.push(layer(rect(-BW / 2, -BH / 2, BW / 2, BH / 2), mix(P.surface, "#ffffff", 0.18), -1.5));
          var sun = new T.Shape(); sun.absarc(0, 0, 0.95, 0, Math.PI * 2, false);
          O.sun = u.add(G, new T.ExtrudeGeometry(sun, { depth: thick, bevelEnabled: false, curveSegments: 64 }), paper(P.accent), 1.1, 0.7, -1.2);
          O.layers.push(O.sun);
          var cols = [mix(P.surface, P.accent2, 0.0), mix(P.surface, P.canvas, 0.3), P.canvas, darken(P.canvas, 0.35)];
          var cs = [mix(P.surface, "#9fc2e8", 0.5), mix(P.surface, P.canvas, 0.0), P.accent2, darken(P.canvas, 0.1)];
          [[-0.1, 0.5, 1.1, 0.4, -0.9], [-0.8, 0.45, 1.5, 1.7, -0.5], [-1.4, 0.4, 1.9, 3.1, -0.1], [-2.0, 0.28, 2.4, 0.8, 0.3]].forEach(function (h, i) { O.layers.push(layer(hills(h[0], h[1], h[2], h[3], 0.2), cs[i], h[4])); });
          // a frame: the box's walls
          var fr = new T.Shape(); fr.moveTo(-BW / 2 - 0.5, -BH / 2 - 0.5); fr.lineTo(BW / 2 + 0.5, -BH / 2 - 0.5); fr.lineTo(BW / 2 + 0.5, BH / 2 + 0.5); fr.lineTo(-BW / 2 - 0.5, BH / 2 + 0.5); fr.closePath();
          var hole = new T.Path(); hole.moveTo(-BW / 2, -BH / 2); hole.lineTo(-BW / 2, BH / 2); hole.lineTo(BW / 2, BH / 2); hole.lineTo(BW / 2, -BH / 2); hole.closePath(); fr.holes.push(hole);
          O.frame = u.add(G, new T.ExtrudeGeometry(fr, { depth: 1.9, bevelEnabled: false }), paper(mix(P.ink, "#e8dcc8", 0.15)), 0, 0, -1.5);
          O.frame.position.z = -1.55; O.frame.castShadow = true;
          return O;
        });
      },
      pose: function (t, k) {
        var zs = [-1.5, -1.2, -0.9, -0.5, -0.1, 0.3];
        O.layers.forEach(function (m, i) { var u2 = k.prog(t, 0.05 + i * 0.12, 1.2 + i * 0.12, "power3.out"); m.position.z = lerp(-1.6, zs[i], u2); });
        O.sun.position.y = lerp(0.0, 0.8, k.prog(t, 0.2, 2.0, "power2.out"));
      },
    };
  };

  // ---- gummy-gel: backlit translucent candy
  SCENES["gummy-gel"] = function (P) {
    var O = {}, U;
    return {
      environment: "none", exposure: 1.0,
      camera: cam({ c: [0, 0, 0], w: [11.6, 10.6], az: [-22, -10], el: [14, 10], mm: 70, cx: 0.73, cy: 0.52, fstop: 4.5, fo: 0 }),
      post: { vignette: 0.05, grain: 0.012 },
      type: { v: "bottom" },
      build: function (k) {
        return makeKit(k).then(function (u) {
          U = u; var T = u.T;
          u.env({ top: "#ffffff", mid: lighten(P.canvas, 0.1), bottom: P.surface, intensity: 1.1, blur: 0.02, boxes: [{ p: [-8, 6, 6], w: 8, h: 7, c: "#ffffff", i: 5 }, { p: [4, 5, -9], w: 12, h: 7, c: "#fff0f8", i: 7 }, { p: [10, 0, 3], w: 1.8, h: 10, c: "#ffffff", i: 4 }] });
          k.rig("three-point", { key: "#fff6f2", fill: P.surface, rim: "#ffffff", dir: [-0.6, 0.9, 0.7], shadowSize: 6, shadowSoftness: 8, intensity: 1.2 });
          k.ground({ y: -1.5, shadowOpacity: 0.16 });
          var gm = function (c) { return k.material("gummy", { color: c, transmission: 0.82, thickness: 1.6, roughness: 0.12, attenuationDistance: 1.1, attenuationColor: new T.Color(c), envMapIntensity: 1.2, ior: 1.42 }); };
          var G = O.G = u.group(k.scene);
          O.ring = u.add(G, new T.TorusGeometry(1.15, 0.52, 64, 120), gm(P.accent), 0.0, 0.2, 0.0, 0.55, -0.3, 0.2);
          O.pill = u.add(G, u.pill(2.3, 0.55), gm(P.accent2), 1.6, -0.95, 1.0, 0, -0.35, 0.5);
          O.blob = u.add(G, u.blob(0.85, 5, 0.18, 1.4, 120), gm(lighten(P.accent, 0.35)), -1.9, -0.7, 0.9);
          O.bean = u.add(G, u.pill(1.1, 0.34), gm(mix(P.accent2, "#ffe08a", 0.45)), -0.4, 1.9, -0.2, 0, 0.3, -0.6);
          O.ball = u.add(G, u.sphere(0.5, 64), gm(mix(P.accent, "#ffffff", 0.1)), 2.2, 1.35, 0.1);
          return O;
        });
      },
      pose: function (t, k) {
        var e = function (d, dur) { return k.prog(t, d, d + (dur || 1.2), "power3.out"); };
        var a = e(0), b = e(0.15), c = e(0.28), d = e(0.4), f = e(0.52, 0.9);
        var wob = function (m, u2, y0, y1, h) { var s = Math.sin(Math.PI * u2) * 0.18 * (1 - u2 * 0.3); m.scale.set(Math.max(0.001, u2 * (1 - s * 0.5)), Math.max(0.001, u2 * (1 + s)), Math.max(0.001, u2 * (1 - s * 0.5))); m.position.y = lerp(y0, y1, u2); };
        wob(O.ring, a, -0.6, 0.2); wob(O.pill, b, -1.2, -0.95); wob(O.blob, c, -1.2, -0.7); wob(O.bean, d, 0.8, 1.9); wob(O.ball, f, 0.4, 1.35);
        O.ring.rotation.x = lerp(1.4, 0.55, a); 
      },
    };
  };

  // ---- liquid-3d: a mercury-glossy blob and its droplet on electric blue
  SCENES["liquid-3d"] = function (P) {
    var O = {}, U;
    return {
      environment: "none", exposure: 1.0,
      camera: cam({ c: [0, 0, 0], w: [10.8, 9.8], az: [-20, -8], el: [10, 6], mm: 85, cx: 0.72, cy: 0.5, fstop: 4, fo: 0 }),
      post: { vignette: 0.14, grain: 0.02, bloom: { strength: 0.2, threshold: 1.0, radius: 0.5 } },
      type: { v: "bottom" },
      build: function (k) {
        return makeKit(k).then(function (u) {
          U = u; var T = u.T;
          u.env({ top: lighten(P.canvas, 0.55), mid: P.canvas, bottom: darken(P.canvas, 0.6), intensity: 1.0, boxes: [
            { p: [-8, 6, 6], w: 10, h: 4, c: "#ffffff", i: 8 }, { p: [10, 1, 4], w: 1.6, h: 10, c: P.accent, i: 9 }, { p: [-3, -5, 9], w: 6, h: 1.2, c: P.accent2, i: 7 }, { p: [2, 9, -7], w: 14, h: 5, c: lighten(P.accent, 0.4), i: 5 }] });
          k.rig("three-point", { key: "#e8f4ff", fill: P.accent, rim: P.accent2, dir: [-0.6, 0.9, 0.7], shadowSize: 6, shadowSoftness: 10, intensity: 0.9 });
          k.ground({ y: -1.6, shadowOpacity: 0.28 });
          var liq = function (c, o2) { return k.material("chrome", Object.assign({ color: c, roughness: 0.03, clearcoat: 1, clearcoatRoughness: 0.02, envMapIntensity: 1.05 }, o2 || {})); };
          var G = O.G = u.group(k.scene);
          O.blob = u.add(G, u.blob(1.5, 31, 0.34, 1.35, 220), liq(mix(P.accent, "#ffffff", 0.25)), 0, 0.1, 0);
          O.drop = u.add(G, u.blob(0.5, 8, 0.12, 1.5, 120), k.material("plastic", { color: P.accent2, roughness: 0.05, clearcoat: 1, clearcoatRoughness: 0.02, envMapIntensity: 1.4 }), 2.1, -0.95, 0.9);
          O.drop2 = u.add(G, u.sphere(0.26, 48), liq("#ffffff"), -1.9, 1.2, 0.9);
          return O;
        });
      },
      pose: function (t, k) {
        var a = k.prog(t, 0, 1.6, "power3.out"), b = k.prog(t, 0.25, 1.5, "power3.out"), c = k.prog(t, 0.45, 1.4, "power3.out");
        O.blob.scale.setScalar(Math.max(0.001, a)); O.blob.rotation.y = lerp(1.6, 0.2, a); O.blob.rotation.z = lerp(0.5, 0, a);
        O.drop.scale.setScalar(Math.max(0.001, b)); O.drop.position.y = lerp(0.8, -0.95, b);
        O.drop2.scale.setScalar(Math.max(0.001, c)); O.drop2.position.y = lerp(0.2, 1.2, c);
      },
    };
  };

  // ---- voxel-3d: a floating cube island, every block counted
  SCENES["voxel-3d"] = function (P) {
    var O = {}, U;
    return {
      environment: "none", exposure: 1.05,
      camera: cam({ c: [0, 1.2, 0], w: [30, 27], az: [-48, -34], el: [30, 26], mm: 70, cx: 0.77, cy: 0.5, fstop: 40 }),
      post: { vignette: 0.06, saturation: 1.1 },
      type: { v: "bottom" },
      build: function (k) {
        return makeKit(k).then(function (u) {
          U = u; var T = u.T;
          u.env({ top: "#ffffff", mid: lighten(P.canvas, 0.5), bottom: "#6a8a50", intensity: 0.8, boxes: [{ p: [-8, 9, 6], w: 12, h: 12, c: "#fff6dd", i: 2.2 }] });
          k.rig("window", { key: "#fff3d6", fill: "#bfe0ff", dir: [-0.8, 1, 0.6], shadowSize: 12, shadowSoftness: 1.5, intensity: 1.3 });
          var rnd = k.rng(77), nz = seededNoise(3), vox = [];
          var R = 7, grass = [P.accent, mix(P.accent, "#ffffff", 0.12), mix(P.accent, "#000000", 0.12)], dirt = [P.accent2, mix(P.accent2, "#000000", 0.18), mix(P.accent2, "#ffffff", 0.1)];
          for (var x = -R; x <= R; x++) for (var z = -R; z <= R; z++) {
            var d = Math.sqrt(x * x + z * z) + (nz(x * 0.4, z * 0.4) - 0.5) * 3; if (d > R - 0.4) continue;
            var top = 0 + Math.round((nz(x * 0.3 + 9, z * 0.3) - 0.5) * 2.2 * (1 - d / R) * 2) , depth = Math.round((R - d) * 0.85) + 1;
            vox.push([x, top, z, grass[Math.floor(rnd() * 3)]]);
            for (var y = 1; y <= depth; y++) vox.push([x, top - y, z, y === 1 ? dirt[0] : dirt[Math.floor(rnd() * 3)]]);
          }
          // tree
          for (var y2 = 1; y2 <= 4; y2++) vox.push([-2, y2, -1, "#7a4e2c"]);
          for (var dx = -2; dx <= 2; dx++) for (var dy = 0; dy <= 3; dy++) for (var dz = -2; dz <= 2; dz++) { var dd = Math.abs(dx) + Math.abs(dz) * 1 + Math.abs(dy - 1.2) * 1.4; if (dd < 3.6 && rnd() > 0.08) vox.push([-2 + dx, 5 + dy, -1 + dz, [mix(P.accent, "#000", 0.2), P.accent, mix(P.accent, "#fff", 0.15)][Math.floor(rnd() * 3)]]); }
          // little house
          for (var hx = 0; hx < 3; hx++) for (var hz = 0; hz < 3; hz++) for (var hy = 1; hy <= 2; hy++) vox.push([2 + hx, hy, 1 + hz, hy === 2 && hx === 1 && hz === 0 ? "#6cc6ff" : P.surface]);
          for (var rx = 0; rx < 4; rx++) for (var rz = 0; rz < 4; rz++) vox.push([1.5 + rx, 3, 0.5 + rz, P.ink === "#0e1c2a" ? "#d9534f" : "#d9534f"]);
          for (var rx2 = 0; rx2 < 2; rx2++) for (var rz2 = 0; rz2 < 2; rz2++) vox.push([2.5 + rx2, 4, 1.5 + rz2, "#d9534f"]);
          O.vox = vox;
          var im = O.im = new T.InstancedMesh(new T.BoxGeometry(0.97, 0.97, 0.97), new T.MeshStandardMaterial({ roughness: 0.85, metalness: 0 }), vox.length);
          im.castShadow = true; im.receiveShadow = true; k.scene.add(im);
          var c = new T.Color(); vox.forEach(function (v, i) { im.setColorAt(i, c.set(v[3])); }); im.instanceColor.needsUpdate = true;
          // clouds
          var cl = [[-9, 8, -4, 4, 1, 2], [9, 10, 4, 3, 1, 2], [-6, 12, 7, 3, 1, 1], [11, 5, -8, 4, 1, 2]], cv = [];
          cl.forEach(function (q) { for (var a = 0; a < q[3]; a++) for (var b = 0; b < q[5]; b++) cv.push([q[0] + a, q[1] + (a === 1 ? 1 : 0), q[2] + b]); });
          var cm = O.cm = new T.InstancedMesh(new T.BoxGeometry(0.97, 0.97, 0.97), new T.MeshStandardMaterial({ color: "#ffffff", roughness: 1 }), cv.length); cm.castShadow = true; cm.receiveShadow = true; O.cv = cv; k.scene.add(cm);
          O.m4 = new T.Matrix4();
          k.ground({ y: -12, shadowOpacity: 0.0 });
          return O;
        });
      },
      pose: function (t, k) {
        var m = O.m4, n = O.vox.length;
        for (var i = 0; i < n; i++) {
          var v = O.vox[i], dly = 0.0 + ((v[0] * 0.07 + v[2] * 0.05) + 1) * 0.28 + (v[1] > 0 ? 0.25 : 0) + (v[1] < -2 ? 0.0 : 0), u2 = k.prog(t, dly, dly + 0.9, "power3.out");
          m.makeScale(Math.max(0.001, u2), Math.max(0.001, u2), Math.max(0.001, u2)); m.setPosition(v[0], v[1] + (1 - u2) * 4, v[2]); O.im.setMatrixAt(i, m);
        }
        O.im.instanceMatrix.needsUpdate = true;
        var dr = k.prog(t, 0.4, 2.2, "power2.out");
        for (var j = 0; j < O.cv.length; j++) { m.makeTranslation(O.cv[j][0] + (1 - dr) * -5, O.cv[j][1], O.cv[j][2]); O.cm.setMatrixAt(j, m); }
        O.cm.instanceMatrix.needsUpdate = true;
      },
    };
  };


  // ---- wireframe-mesh-3d: a hidden-line terrain drawn in light, receding into black
  SCENES["wireframe-mesh-3d"] = function (P) {
    var O = {}, U;
    return {
      environment: "none", exposure: 1.0, toneMapping: "none",
      background: P.canvas, fog: { color: P.canvas, near: 14, far: 40 },
      camera: cam({ c: [2, 0, -2], w: [20, 17.5], az: [-18, -8], el: [20, 16], mm: 40, cx: 0.62, cy: 0.5, fstop: 40 }),
      post: { bloom: { strength: 0.55, threshold: 0.9, radius: 0.7 }, vignette: 0.2, grain: 0.02 },
      type: { v: "bottom" },
      build: function (k) {
        return makeKit(k).then(function (u) {
          U = u; var T = u.T;
          var nz = seededNoise(12), NX = 60, NZ = 44, SX = 0.5, SZ = 0.55;
          var H = function (i, j) {
            var x = i / NX, z = j / NZ;
            var ridge = 1 - Math.abs(2 * fbm(nz, i * 0.11, j * 0.13, 4) - 1);
            return ridge * ridge * 5.5 * (0.15 + 1.4 * Math.pow(x, 1.7)) * (0.35 + 0.9 * z) - 1.2;
          };
          var grid = [];
          for (var j = 0; j <= NZ; j++) { grid.push([]); for (var i = 0; i <= NX; i++) grid[j].push([(i - NX / 2) * SX, H(i, j), -j * SZ * 1.2]); }
          var acc = new T.Color(P.accent), hot = new T.Color(P.accent2);
          var pos = [], col = [], idx = 0;
          var rad = 0.016;
          function edge(a, b, ca, cb) {
            var ex = b[0] - a[0], ey = b[1] - a[1], ez = b[2] - a[2], L = Math.sqrt(ex * ex + ey * ey + ez * ez) || 1; ex /= L; ey /= L; ez /= L;
            var n1 = [-ez, 0, ex], nl = Math.sqrt(n1[0] * n1[0] + n1[2] * n1[2]) || 1; n1 = [n1[0] / nl, 0, n1[2] / nl];
            var n2 = [ey * n1[2] - ez * n1[1], ez * n1[0] - ex * n1[2], ex * n1[1] - ey * n1[0]];
            var q = [[n1[0] + n2[0], n1[1] + n2[1], n1[2] + n2[2]], [-n1[0] + n2[0], -n1[1] + n2[1], -n1[2] + n2[2]], [-n1[0] - n2[0], -n1[1] - n2[1], -n1[2] - n2[2]], [n1[0] - n2[0], n1[1] - n2[1], n1[2] - n2[2]]];
            var base = idx;
            [a, b].forEach(function (p, s) { var c = s ? cb : ca; q.forEach(function (o) { pos.push(p[0] + o[0] * rad, p[1] + o[1] * rad, p[2] + o[2] * rad); col.push(c[0], c[1], c[2]); idx++; }); });
            for (var f = 0; f < 4; f++) { var f2 = (f + 1) % 4; O.ind.push(base + f, base + f2, base + 4 + f, base + f2, base + 4 + f2, base + 4 + f); }
          }
          O.ind = [];
          var colorAt = function (p, x) {
            var h = clamp((p[1] + 1.2) / 5.5, 0, 1), c = acc.clone().lerp(hot, clamp((h - 0.55) * 2.2, 0, 1)), fade = 0.35 + 0.65 * clamp((p[0] + 7) / 14, 0, 1) * 0 + 0.0;
            var left = clamp((p[0] + 10) / 14, 0.18, 1);
            var br = (0.55 + h * 1.5) * left;
            return [c.r * br, c.g * br, c.b * br];
          };
          for (var jj = 0; jj <= NZ; jj++) for (var ii = 0; ii <= NX; ii++) {
            var a = grid[jj][ii];
            if (ii < NX) edge(a, grid[jj][ii + 1], colorAt(a), colorAt(grid[jj][ii + 1]));
            if (jj < NZ) edge(a, grid[jj + 1][ii], colorAt(a), colorAt(grid[jj + 1][ii]));
          }
          var g = new T.BufferGeometry();
          g.setAttribute("position", new T.Float32BufferAttribute(pos, 3)); g.setAttribute("color", new T.Float32BufferAttribute(col, 3)); g.setIndex(O.ind);
          O.lines = new T.Mesh(g, new T.MeshBasicMaterial({ vertexColors: true, toneMapped: false, fog: true }));
          k.scene.add(O.lines);
          // hidden-line fill: the same terrain in the canvas colour, a hair below the lines
          var fp = [], fi = [];
          for (var j2 = 0; j2 <= NZ; j2++) for (var i2 = 0; i2 <= NX; i2++) fp.push(grid[j2][i2][0], grid[j2][i2][1] - 0.03, grid[j2][i2][2]);
          for (var j3 = 0; j3 < NZ; j3++) for (var i3 = 0; i3 < NX; i3++) { var q0 = j3 * (NX + 1) + i3, q1 = q0 + 1, q2 = q0 + NX + 1, q3 = q2 + 1; fi.push(q0, q2, q1, q1, q2, q3); }
          var fg = new T.BufferGeometry(); fg.setAttribute("position", new T.Float32BufferAttribute(fp, 3)); fg.setIndex(fi);
          O.fill = new T.Mesh(fg, new T.MeshBasicMaterial({ color: new T.Color(P.canvas), fog: true, toneMapped: false })); k.scene.add(O.fill);
          // a wire moon in the second accent
          O.moon = new T.Group(); O.moon.position.set(8, 6.5, -24); k.scene.add(O.moon);
          var mm2 = new T.MeshBasicMaterial({ color: new T.Color(P.accent2).multiplyScalar(1.5), toneMapped: false, fog: false });
          for (var r = 0; r < 4; r++) { var rg = new T.Mesh(new T.TorusGeometry(2.4 * Math.sin(Math.PI * (r + 1) / 5) , 0.03, 6, 120), mm2); rg.position.y = 2.4 * Math.cos(Math.PI * (r + 1) / 5); rg.rotation.x = Math.PI / 2; O.moon.add(rg); }
          for (var m2 = 0; m2 < 6; m2++) { var mg = new T.Mesh(new T.TorusGeometry(2.4, 0.03, 6, 120), mm2); mg.rotation.y = (Math.PI * m2) / 6; O.moon.add(mg); }
          return O;
        });
      },
      pose: function (t, k) {
        var a = k.prog(t, 0, 1.8, "power3.out");
        O.lines.position.y = lerp(-6, 0, a); O.fill.position.y = O.lines.position.y;
        O.moon.position.y = lerp(1.0, 6.5, k.prog(t, 0.3, 2.2, "power2.out")); O.moon.rotation.y = lerp(0, 1.0, k.prog(t, 0, 2.4, "power2.out"));
      },
    };
  };

  // ---- point-cloud-3d: a scanned slab and landscape, resolved from dust
  SCENES["point-cloud-3d"] = function (P) {
    var O = {}, U;
    return {
      environment: "none", exposure: 1.0, toneMapping: "none",
      background: P.canvas, fog: { color: P.canvas, near: 12, far: 34 },
      camera: cam({ c: [0, 0.3, 0], w: [13, 11.6], az: [-30, -16], el: [14, 10], mm: 60, cx: 0.7, cy: 0.5, fstop: 40 }),
      post: { bloom: { strength: 0.35, threshold: 0.7, radius: 0.8 }, vignette: 0.25, grain: 0.02 },
      type: { v: "bottom" },
      build: function (k) {
        return makeKit(k).then(function (u) {
          U = u; var T = u.T;
          var rnd = k.rng(88), nz = seededNoise(6);
          // sources: a floating rounded slab (a card), a ground sheet that swells into dunes
          var slabGeo = u.slab(3.0, 4.0, 0.22, 0.4, 0.1), slab = new T.Mesh(slabGeo);
          slab.rotation.set(0, 0, 0); slab.updateMatrixWorld(true);
          return k.surfacePoints(slab, 200000, 5).then(function (sp0) {
            // a scanned receipt: keep the points that fall on the rim and on printed lines, a faint haze elsewhere
            var keep = [], rr0 = k.rng(4), rows = [-1.5, -1.15, -0.8, -0.45, -0.1, 0.25, 0.6, 0.95, 1.3, 1.65];
            for (var q0 = 0; q0 < 200000 && keep.length < 56000; q0++) {
              var px = sp0[q0 * 3], py = sp0[q0 * 3 + 1], pz = sp0[q0 * 3 + 2];
              var edge = Math.min(1.5 - Math.abs(px), 2.0 - Math.abs(py)) < 0.1 ? 1 : 0, band = 0;
              rows.forEach(function (ry, ri) { var len = ri % 3 === 2 ? 0.9 : 1.2; if (Math.abs(py - ry) < 0.035 && px > -1.2 && px < -1.2 + len * (ri % 2 ? 1.8 : 2.2)) band = 1; });
              var total = rr0() < (edge * 0.9 + band * 0.8 + 0.035);
              if (total) keep.push(px, py, pz);
            }
            var sp = new Float32Array(keep);
            var N1 = sp.length / 3, N2 = 26000, N = N1 + N2, tgt = new Float32Array(N * 3), from = new Float32Array(N * 3), col = new Float32Array(N * 3), dly = new Float32Array(N), sz = new Float32Array(N);
            var ca = new T.Color(P.accent), cb = new T.Color(P.accent2), cw = new T.Color("#ffffff");
            for (var i = 0; i < N1; i++) {
              var x = sp[i * 3], y = sp[i * 3 + 1], z = sp[i * 3 + 2];
              // the slab stands on edge, turned: rotate about y and lift
              var ang = -0.75, cx = Math.cos(ang), sx = Math.sin(ang);
              tgt[i * 3] = x * cx + z * sx + 0.1; tgt[i * 3 + 1] = y + 0.9; tgt[i * 3 + 2] = -x * sx + z * cx;
              var h = clamp((y + 2) / 4, 0, 1), c = ca.clone().lerp(cb, Math.pow(h, 1.4)).lerp(cw, rnd() < 0.04 ? 0.7 : 0);
              col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b; sz[i] = 0.7 + rnd() * 0.7;
            }
            for (var j = 0; j < N2; j++) {
              var gx = (rnd() - 0.5) * 18, gz = (rnd() - 0.5) * 14, gy = -1.55 + 0.9 * fbm(nz, gx * 0.22 + 4, gz * 0.22, 3) * (0.4 + Math.abs(gz) * 0.08);
              var o = N1 + j; tgt[o * 3] = gx; tgt[o * 3 + 1] = gy; tgt[o * 3 + 2] = gz - 1;
              var cc = ca.clone().lerp(cb, clamp((gy + 1.5) * 1.2, 0, 1)).multiplyScalar(0.45); col[o * 3] = cc.r; col[o * 3 + 1] = cc.g; col[o * 3 + 2] = cc.b; sz[o] = 0.6 + rnd() * 0.5;
            }
            for (var q = 0; q < N; q++) {
              var a1 = rnd() * 6.283, b1 = Math.acos(2 * rnd() - 1), rr = 5 + rnd() * 9;
              from[q * 3] = Math.sin(b1) * Math.cos(a1) * rr; from[q * 3 + 1] = Math.cos(b1) * rr * 0.6; from[q * 3 + 2] = Math.sin(b1) * Math.sin(a1) * rr;
              dly[q] = q < N1 ? clamp((tgt[q * 3 + 1] + 1.2) / 5, 0, 1) * 0.6 + rnd() * 0.3 : 0.2 + rnd() * 0.7;
            }
            var g = new T.BufferGeometry();
            g.setAttribute("position", new T.BufferAttribute(tgt, 3)); g.setAttribute("aFrom", new T.BufferAttribute(from, 3)); g.setAttribute("aCol", new T.BufferAttribute(col, 3)); g.setAttribute("aDly", new T.BufferAttribute(dly, 1)); g.setAttribute("aSz", new T.BufferAttribute(sz, 1));
            var fogc = new T.Color(P.canvas);
            var mat = O.mat = new T.ShaderMaterial({
              transparent: true, depthWrite: false, blending: T.AdditiveBlending, toneMapped: false,
              uniforms: { uT: { value: 0 }, uScale: { value: 500 }, uSize: { value: 0.028 }, uFog: { value: fogc }, uNear: { value: 12 }, uFar: { value: 34 } },
              vertexShader: "attribute vec3 aFrom; attribute vec3 aCol; attribute float aDly; attribute float aSz; uniform float uT; uniform float uScale; uniform float uSize; uniform float uNear; uniform float uFar; varying vec3 vC; varying float vF;" +
                "void main(){ float e = clamp((uT - aDly) / 0.9, 0.0, 1.0); e = 1.0 - pow(1.0 - e, 3.0); vec3 p = mix(aFrom, position, e); vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;" +
                " gl_PointSize = max(1.0, uSize * aSz * uScale / -mv.z); vF = clamp((-mv.z - uNear) / (uFar - uNear), 0.0, 1.0); vC = aCol * (0.75 + 0.25 * e); }",
              fragmentShader: "varying vec3 vC; varying float vF; void main(){ vec2 d = gl_PointCoord - 0.5; float r = length(d); if (r > 0.5) discard; float a = smoothstep(0.5, 0.1, r); gl_FragColor = vec4(vC * (1.0 - vF) * a * 0.38, a); }",
            });
            O.pts = new T.Points(g, mat); O.pts.frustumCulled = false; k.scene.add(O.pts);
            return O;
          });
        });
      },
      pose: function (t, k) {
        var st = k.stage, fov = st.camera.fov * Math.PI / 180;
        O.mat.uniforms.uScale.value = (st.height * st.dpr) / (2 * Math.tan(fov / 2));
        O.mat.uniforms.uT.value = t / 1.3 * 1.0;
        O.pts.rotation.y = lerp(0.35, 0, k.prog(t, 0, 2.4, "power2.out"));
      },
    };
  };

  // ---- toon-shaded-3d: three-band cel shading with a thick ink line
  SCENES["toon-shaded-3d"] = function (P) {
    var O = {}, U;
    return {
      environment: "none", exposure: 1.0,
      camera: cam({ c: [0, 0.4, 0], w: [13.8, 12.4], az: [-24, -12], el: [14, 10], mm: 60, cx: 0.75, cy: 0.5, fstop: 40 }),
      post: { saturation: 1.05 },
      type: { v: "bottom" },
      build: function (k) {
        return makeKit(k).then(function (u) {
          U = u; var T = u.T;
          k.rig("three-point", { key: "#ffffff", fill: "#cfe8ff", rim: "#ffffff", dir: [-0.6, 1.0, 0.8], shadowSize: 7, shadowSoftness: 2, intensity: 1.35 });
          k.scene.add(new T.HemisphereLight("#ffffff", "#9ec8e8", 0.5));
          var gr = u.toonGrad(3), ink = P.ink, th = 0.045;
          var toon = function (c) { return new T.MeshToonMaterial({ color: new T.Color(c), gradientMap: gr }); };
          var tm = function (parent, geo, c, x, y, z, rx, ry, rz, thick) { var m = u.add(parent, geo, toon(c), x, y, z, rx, ry, rz); u.outline(m, thick || th, ink); return m; };
          k.ground({ y: -1.3, shadowOpacity: 0.18 });
          var G = O.G = u.group(k.scene);
          O.isle = u.group(G, 0, 0, 0);
          tm(O.isle, new T.CylinderGeometry(2.9, 2.2, 0.8, 64), P.accent2, 0, -0.9, 0);
          tm(O.isle, new T.CylinderGeometry(2.9, 2.9, 0.18, 64), mix(P.accent2, "#ffffff", 0.45), 0, -0.41, 0);
          // house
          O.house = u.group(O.isle, -0.5, -0.3, -0.3);
          tm(O.house, u.rbox(1.7, 1.4, 1.5, 0.08, 0.08, 0.08, [8, 8, 8]), "#ffffff", 0, 0.7, 0);
          var roof = tm(O.house, new T.ConeGeometry(1.45, 1.0, 4), P.accent, 0, 1.9, 0); roof.rotation.y = Math.PI / 4; roof.scale.set(1, 1, 0.9);
          tm(O.house, u.rbox(0.38, 0.65, 0.06, 0.03, 0.03, 0.02, [4, 4, 4]), P.accent2, 0, 0.33, 0.76, 0, 0, 0, 0.02);
          tm(O.house, u.rbox(0.36, 0.36, 0.06, 0.03, 0.03, 0.02, [4, 4, 4]), "#bfe9ff", 0.55, 0.95, 0.76, 0, 0, 0, 0.02);
          tm(O.house, u.rbox(0.3, 0.7, 0.3, 0.04, 0.04, 0.04, [4, 4, 4]), P.accent, 0.55, 2.0, -0.3);
          // tree
          O.tree = u.group(O.isle, 1.6, -0.3, 0.7);
          tm(O.tree, new T.CylinderGeometry(0.1, 0.14, 0.9, 12), "#7a4a2a", 0, 0.45, 0);
          tm(O.tree, u.sphere(0.62, 32), P.accent2, 0, 1.25, 0);
          tm(O.tree, u.sphere(0.34, 24), P.accent, 0.2, 1.6, 0.35, 0, 0, 0, 0.03);
          // cloud
          O.cloud = u.group(G, -2.7, 2.2, -0.2);
          [[0, 0, 0.7], [0.8, 0.2, 0.55], [-0.75, -0.05, 0.5], [0.2, 0.4, 0.5]].forEach(function (c) { tm(O.cloud, u.sphere(c[2], 28), "#ffffff", c[0], c[1], 0); });
          O.cloud2 = u.group(G, 3.2, 1.5, -1.2);
          [[0, 0, 0.5], [0.55, 0.1, 0.4], [-0.5, -0.05, 0.38]].forEach(function (c) { tm(O.cloud2, u.sphere(c[2], 28), "#ffffff", c[0], c[1], 0); });
          return O;
        });
      },
      pose: function (t, k) {
        var e = function (d, dur) { return k.prog(t, d, d + (dur || 1.1), "power3.out"); };
        var a = e(0, 1.3), b = e(0.15), c = e(0.3), d = e(0.45, 1);
        O.isle.position.y = lerp(-3, 0, a); O.isle.rotation.y = lerp(-0.7, 0, a);
        O.house.scale.y = Math.max(0.001, b); O.house.scale.x = O.house.scale.z = Math.max(0.001, lerp(0.7, 1, b));
        O.tree.scale.setScalar(Math.max(0.001, c));
        O.cloud.position.x = lerp(-5, -2.7, d); O.cloud2.position.x = lerp(6, 3.2, d);
      },
    };
  };

  // ---- exploded-view-3d: a device pulled apart into its layers, leader lines and labels
  SCENES["exploded-view-3d"] = function (P, X) {
    var O = {}, U;
    return {
      environment: "none", exposure: 1.02,
      camera: cam({ c: [0, 0.2, 0], w: [14.2, 13], az: [-38, -26], el: [26, 22], mm: 60, cx: 0.7, cy: 0.5, fstop: 40 }),
      post: { vignette: 0.04 },
      type: { v: "bottom" },
      build: function (k) {
        return makeKit(k).then(function (u) {
          U = u; var T = u.T, F = X.R.fonts;
          u.env({ top: "#ffffff", mid: "#e9e6df", bottom: "#a9a69f", intensity: 0.8, boxes: [{ p: [-7, 9, 6], w: 10, h: 10, c: "#ffffff", i: 3 }] });
          k.rig("three-point", { key: "#fffaf0", fill: "#dfe8ff", rim: "#ffffff", dir: [-0.6, 1.0, 0.7], shadowSize: 7, shadowSoftness: 5, intensity: 1.1 });
          k.ground({ y: -2.7, shadowOpacity: 0.12 });
          var G = O.G = u.group(k.scene);
          var Wd = 3.7, Dd = 2.5;
          var ui = u.canvasTex(740, 500, function (x, w, h) {
            x.fillStyle = "#ffffff"; x.fillRect(0, 0, w, h);
            x.fillStyle = P.accent; x.fillRect(0, 0, w, 92);
            x.fillStyle = "#fff"; x.font = "700 40px '" + F.display + "', sans-serif"; x.fillText("Receipts", 36, 62);
            [0, 1, 2].forEach(function (i) { x.fillStyle = "#f1efea"; x.fillRect(36, 130 + i * 92, w - 72, 70); x.fillStyle = "#1a1a1a"; x.fillRect(58, 150 + i * 92, 220 - i * 30, 14); x.fillStyle = "#9aa4b0"; x.fillRect(58, 176 + i * 92, 140, 10); x.fillStyle = i === 1 ? P.accent : "#1a1a1a"; x.fillRect(w - 170, 156 + i * 92, 100, 18); });
          });
          O.layers = [];
          var mk = function (name, y, mat, geo, label) { var m = u.add(G, geo, mat, 0, y, 0); m.userData = { y: y, name: name, label: label }; O.layers.push(m); return m; };
          var rb = function (h, r) { return u.rbox(Wd, h, Dd, 0.22, r || 0.04, 0.22, [30, 4, 20]); };
          var gl = new T.MeshPhysicalMaterial({ color: "#ffffff", transmission: 0.0, transparent: true, opacity: 0.35, roughness: 0.05, metalness: 0, envMapIntensity: 1.4, clearcoat: 1 });
          mk("cover", 3.0, gl, rb(0.06), "Glass");
          var scrMats = [0, 1, 2, 3, 4, 5].map(function (i) { return i === 2 ? new T.MeshBasicMaterial({ map: ui, toneMapped: false }) : k.material("matte", { color: "#ffffff" }); });
          var scr = new T.Mesh(rb(0.1, 0.04), scrMats); scr.castShadow = true; scr.receiveShadow = true; scr.position.y = 1.9; scr.userData = { y: 1.9, name: "ui", label: "Interface" }; G.add(scr); O.layers.push(scr);
          mk("display", 0.9, k.material("ceramic", { color: "#e8e6e0", clearcoat: 0.3 }), rb(0.12), "Display");
          var board = mk("board", -0.4, k.material("matte", { color: "#2a2f36", roughness: 0.5 }), rb(0.1), "Logic");
          [[-1, 0.4, 0.8, 0.5], [0.4, -0.3, 0.7, 0.7], [1.1, 0.5, 0.5, 0.5]].forEach(function (c, i) { u.add(board, u.rbox(c[2], 0.12, c[3], 0.04, 0.03, 0.04, [4, 2, 4]), k.material("brushed-metal", { color: i === 1 ? P.accent : "#9aa4b0" }), c[0], 0.11, c[1]); });
          mk("frame", -1.7, k.material("brushed-metal", { color: "#aab2bd" }), u.rbox(Wd + 0.1, 0.22, Dd + 0.1, 0.26, 0.08, 0.26, [30, 6, 20]), "Frame");
          // leader lines (thin vertical rods at the corners) and labels
          var rod = k.material("unlit", { color: P.ink });
          O.rods = [];
          [[-1.85, -1.25], [1.85, -1.25], [1.85, 1.25]].forEach(function (c) { var r = u.add(G, new T.CylinderGeometry(0.008, 0.008, 1, 6), rod, c[0], 0, c[1]); r.castShadow = false; r.receiveShadow = false; O.rods.push(r); });
          O.labels = [];
          O.layers.forEach(function (m, i) {
            var tex = u.canvasTex(520, 100, function (x, w, h) { x.fillStyle = "rgba(255,255,255,0)"; x.clearRect(0, 0, w, h); x.fillStyle = P.accent; x.font = "700 40px '" + F.body + "', sans-serif"; x.fillText("0" + (i + 1), 8, 62); x.fillStyle = P.ink; x.font = "700 38px '" + F.display + "', sans-serif"; x.fillText(m.userData.label, 70, 64); });
            var pl = new T.Mesh(new T.PlaneGeometry(3.1, 0.6), new T.MeshBasicMaterial({ map: tex, transparent: true, toneMapped: false, depthWrite: false }));
            var dot = new T.Mesh(new T.SphereGeometry(0.05, 16, 12), new T.MeshBasicMaterial({ color: P.accent, toneMapped: false }));
            var ln = new T.Mesh(new T.CylinderGeometry(0.007, 0.007, 1, 6), new T.MeshBasicMaterial({ color: P.ink, toneMapped: false }));
            G.add(pl, dot, ln); O.labels.push({ pl: pl, dot: dot, ln: ln, m: m });
          });
          return O;
        });
      },
      pose: function (t, k) {
        var e = k.prog(t, 0.0, 1.5, "power3.out");
        O.layers.forEach(function (m, i) { var u2 = k.prog(t, i * 0.06, 1.4 + i * 0.06, "power3.out"); m.position.y = lerp(i * 0.0 + (O.layers.length - 1 - i) * 0.0 - 0.2 + i * -0.0, m.userData.y, u2) ; m.position.y = lerp(0.2 * (2 - i), m.userData.y, u2); });
        var top = O.layers[0].position.y, bot = O.layers[O.layers.length - 1].position.y;
        O.rods.forEach(function (r) { r.scale.y = Math.max(0.001, top - bot); r.position.y = (top + bot) / 2; r.visible = e > 0.05; });
        O.labels.forEach(function (L) {
          var y = L.m.position.y, x1 = 1.95, z1 = 1.3, x2 = 3.2, z2 = 1.3 - 0.0;
          L.dot.position.set(x1 - 0.1, y, z1 - 0.05);
          var len = 0.7; L.ln.rotation.z = Math.PI / 2; L.ln.scale.y = len * e; L.ln.position.set(x1 - 0.1 + (len * e) / 2, y, z1 - 0.05);
          L.pl.position.set(x1 - 0.1 + len + 1.6, y + 0.0, z1 - 0.05); L.pl.rotation.y = -0.45; L.pl.material.opacity = e; L.pl.visible = L.ln.visible = L.dot.visible = e > 0.2;
        });
      },
    };
  };

  // ---- prism-crystal: a white beam into a glass prism, split into two colours on the other side
  SCENES["prism-crystal"] = function (P) {
    var O = {}, U;
    return {
      environment: "none", exposure: 1.0,
      camera: cam({ c: [0, 0, 0], w: [12.4, 11.2], az: [-22, -9], el: [5, 3], mm: 85, cx: 0.72, cy: 0.5, fstop: 3.0, fo: 0 }),
      post: { bloom: { strength: 0.6, threshold: 0.9, radius: 0.75 }, vignette: 0.3, grain: 0.025 },
      type: { v: "bottom" },
      build: function (k) {
        return makeKit(k).then(function (u) {
          U = u; var T = u.T;
          var ENV = u.env({ top: "#1c1830", mid: "#0a0912", bottom: "#030208", intensity: 1.0, boxes: [
            { p: [-8, 2, 5], w: 1.2, h: 10, c: P.accent, i: 14 }, { p: [8, 1, 4], w: 1.2, h: 10, c: P.accent2, i: 14 }, { p: [0, 9, 1], w: 9, h: 1.0, c: "#ffffff", i: 8 }, { p: [-3, 0, -9], w: 7, h: 7, c: "#8f87ff", i: 3 }, { p: [4, -2, -9], w: 7, h: 5, c: "#ffffff", i: 2.5 }] });
          k.rig("rim", { key: "#c8c0ff", rim: "#ffffff", dir: [-0.5, 0.6, 0.8], shadows: false, intensity: 0.4 });
          var G = O.G = u.group(k.scene);
          var glow = u.canvasTex(512, 512, function (x, w, h) { x.fillStyle = P.canvas; x.fillRect(0, 0, w, h); var g = x.createRadialGradient(w / 2, h / 2, 5, w / 2, h / 2, w / 2); g.addColorStop(0, lighten(mix(P.accent, P.accent2, 0.5), 0.35) + "c0"); g.addColorStop(0.35, mix(P.accent, P.accent2, 0.5) + "60"); g.addColorStop(0.7, P.accent2 + "10"); g.addColorStop(1, "rgba(0,0,0,0)"); x.fillStyle = g; x.fillRect(0, 0, w, h); });
          var back = u.add(G, new T.PlaneGeometry(26, 15), new T.MeshBasicMaterial({ map: glow, toneMapped: false }), 0.6, 0.1, -3.2); back.castShadow = back.receiveShadow = false;
          var gl = function (c, o2) { return k.material("glass", Object.assign({ color: c, roughness: 0.0, thickness: 1.4, ior: 2.1, dispersion: 0.7, attenuationColor: new T.Color(c), attenuationDistance: 8, envMapIntensity: 1.8 }, o2 || {})); };
          // a beam: a soft-edged light strip, additive, HDR so it blooms
          var beam = function (len, wid, c, power, fadeDir) {
            var tex = u.canvasTex(256, 64, function (x, w, h) {
              var img = x.createImageData(w, h);
              for (var py = 0; py < h; py++) for (var px = 0; px < w; px++) { var along = fadeDir > 0 ? px / w : 1 - px / w, across = 1 - Math.abs((py + 0.5) / h * 2 - 1), a = Math.pow(across, 2.2) * Math.pow(along, 1.4), i = (py * w + px) * 4; img.data[i] = img.data[i + 1] = img.data[i + 2] = 255; img.data[i + 3] = Math.round(a * 255); }
              x.putImageData(img, 0, 0);
            });
            var m = new T.Mesh(new T.PlaneGeometry(len, wid), new T.MeshBasicMaterial({ map: tex, color: new T.Color(c).multiplyScalar(power), transparent: true, blending: T.AdditiveBlending, depthWrite: false, toneMapped: false, side: T.DoubleSide }));
            m.castShadow = m.receiveShadow = false; return m;
          };
          O.prismG = u.group(G, 0.2, -0.05, 0);
          var tri = u.add(O.prismG, new T.CylinderGeometry(1.45, 1.45, 1.5, 3), gl("#ffffff"), 0, 0, 0); tri.rotation.x = -Math.PI / 2; tri.castShadow = false; O.tri = tri;
          // the beams meet the prism's left face and leave its right face
          O.bw = beam(2.6, 0.2, "#ffffff", 3.0, 1); O.bw.position.set(-2.1, 0.02, 0.2); O.bw.rotation.z = -0.04; G.add(O.bw);
          O.outs = [];
          [[P.accent, 0.14, 3.0], [mix(P.accent, P.accent2, 0.5), 0.05, 2.6], [P.accent2, -0.06, 3.0]].forEach(function (c, i) {
            var b = beam(4.2, 0.17, c[0], c[2], -1); b.position.set(0.95 + 2.1 * Math.cos(c[1]), -0.1 + 2.1 * Math.sin(c[1]), 0.2); b.rotation.z = c[1]; G.add(b); O.outs.push(b);
          });
          O.cry = [];
          var crystal = function (x, z, h, r, tilt, c) { var g = u.group(G, x, -1.55, z); var a = u.add(g, new T.CylinderGeometry(r, r * 1.05, h, 6), gl(c), 0, h / 2, 0), b = u.add(g, new T.ConeGeometry(r, h * 0.38, 6), gl(c), 0, h + h * 0.19, 0); a.castShadow = b.castShadow = false; g.rotation.z = tilt; O.cry.push(g); return g; };
          crystal(2.5, 0.9, 1.5, 0.3, -0.12, P.accent); crystal(3.0, -0.6, 2.0, 0.36, 0.1, "#ffffff"); crystal(1.9, 1.5, 0.8, 0.2, 0.28, P.accent2); crystal(-2.4, 0.9, 1.1, 0.26, -0.25, P.accent2);
          return O;
        });
      },
      pose: function (t, k) {
        var a = k.prog(t, 0, 1.4, "power3.out"), b = k.prog(t, 0.45, 1.5, "power3.out");
        O.prismG.rotation.y = lerp(0.8, 0.38, a); O.prismG.position.y = lerp(-0.7, -0.05, a); O.prismG.scale.setScalar(Math.max(0.001, a));
        O.cry.forEach(function (g, i) { var u2 = k.prog(t, 0.2 + i * 0.1, 1.3 + i * 0.1, "power3.out"); g.scale.setScalar(Math.max(0.001, u2)); });
        O.bw.scale.x = Math.max(0.001, b); O.bw.position.x = -0.9 - 1.3 * b;
        O.outs.forEach(function (m, i) { m.scale.x = Math.max(0.001, b); });
      },
    };
  };


  // ------------------------------------------------------------------ loading the runtime, once
  var api = { base: "/three/", W: W, H: H, duration: DUR };
  var loading = null, seq = 0, handles = [], playing = 0, savedQuality;
  function baseUrl() { var b = String(api.base || "/three/"); return b.charAt(b.length - 1) === "/" ? b : b + "/"; }
  function webgl() { try { var c = document.createElement("canvas"); return !!(c.getContext("webgl2") || c.getContext("webgl")); } catch (e) { return false; } }
  function loadRuntime() {
    if (root.Rasan3D) return Promise.resolve(root.Rasan3D);
    if (loading) return loading;
    loading = new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = baseUrl() + "rasan3d.js";
      s.onload = function () { root.Rasan3D ? resolve(root.Rasan3D) : reject(new Error("Rasan3D did not load")); };
      s.onerror = function () { loading = null; reject(new Error("could not load " + s.src)); };
      document.head.appendChild(s);
    });
    return loading;
  }

  // ------------------------------------------------------------------ the console has no GSAP: a clock with just enough timeline
  function Clock(d) {
    var upd = null, cur = d;
    return {
      to: function (target, vars) { if (vars && vars.onUpdate) upd = vars.onUpdate; return this; },
      time: function () { return cur; },
      duration: function () { return d; },
      seek: function (t) { cur = t; if (upd) upd.call({ time: function () { return t; } }); return this; },
    };
  }

  // ------------------------------------------------------------------ the palette, with the brand overrides render() applies
  function paletteOf(preset, o) {
    var R = JSON.parse(JSON.stringify(preset.recipe || preset));
    var P = R.palette = R.palette || {};
    if (o.brand) {
      var b = o.brand;
      if (b.canvas) P.canvas = b.canvas; if (b.ink) P.ink = b.ink; if (b.accent) P.accent = b.accent; if (b.surface) P.surface = b.surface;
      if (b.display) R.fonts = Object.assign({}, R.fonts, { display: b.display }); if (b.body) R.fonts = Object.assign({}, R.fonts, { body: b.body });
    }
    P.canvas = P.canvas || "#f4f1ea"; P.ink = P.ink || "#16181d"; P.accent = P.accent || "#e2724f"; P.accent2 = P.accent2 || P.accent; P.surface = P.surface || P.canvas; P.muted = P.muted || mix(P.ink, P.canvas, 0.55);
    R.fonts = R.fonts || { display: "Inter", body: "Inter" };
    return R;
  }

  // ------------------------------------------------------------------ the type layer: DOM above the canvas, in the style's own fonts
  function headSize(t, base) { var n = String(t).length; return Math.round(base * (n > 64 ? 0.44 : n > 48 ? 0.52 : n > 34 ? 0.62 : n > 24 ? 0.78 : n > 16 ? 0.9 : 1)); }
  function typeLayer(R, P, o, spec) {
    var F = R.fonts, ty = spec.type || {};
    var el = document.createElement("div");
    el.className = "rp3d-type";
    var anchor = ty.v === "top" ? "flex-start" : ty.v === "mid" ? "center" : "flex-end";
    el.style.cssText = "position:absolute;left:0;top:0;width:" + W + "px;height:" + H + "px;z-index:3;display:flex;flex-direction:column;justify-content:" + anchor + ";padding:" + (ty.padTop == null ? 108 : ty.padTop) + "px 0 " + (ty.padBottom == null ? 112 : ty.padBottom) + "px " + (ty.x == null ? 112 : ty.x) + "px;pointer-events:none;box-sizing:border-box";
    var ink = ty.ink || P.ink;
    var hl = o.headline || "Your film starts here", sub = o.sub == null ? "One line that lands." : o.sub;
    var px = Math.round(headSize(hl, ty.size || 118));
    var caseCss = { upper: "uppercase", lower: "lowercase" }[F["case"]] || "none";
    var h = '<div class="rp-a" style="--i:0;width:' + (ty.w || 700) + "px;font-family:'" + esc(F.display) + "',sans-serif;font-weight:" + (F.displayWeight || 800) + (F.italic ? ";font-style:italic" : "") + ";letter-spacing:" + (F.tracking != null ? F.tracking : -0.02) + "em;text-transform:" + caseCss + ";line-height:0.98;font-size:" + px + "px;color:" + ink + ";text-wrap:balance;font-synthesis:none" + (ty.shadow ? ";text-shadow:" + ty.shadow : "") + '">' + esc(hl) + "</div>";
    var s = sub ? '<div class="rp-a rp-t" style="--i:1;margin-top:' + Math.round(px * 0.26) + "px;width:" + (ty.subW || 540) + "px;font-family:'" + esc(F.body) + "',sans-serif;font-weight:" + (F.bodyWeight || 400) + ";font-size:" + (ty.subSize || 31) + "px;line-height:1.35;color:" + (ty.subInk || ink) + ";opacity:.78;font-synthesis:none" + (ty.shadow ? ";text-shadow:" + ty.shadow : "") + '">' + esc(sub) + "</div>" : "";
    el.innerHTML = h + s;
    return el;
  }

  function fontsReady(R) {
    var F = R.fonts, jobs = [];
    // the stylesheet <link>s must have arrived before the faces exist; then load the faces we draw with
    var links = [].slice.call(document.querySelectorAll('link[rel="stylesheet"][href*="fonts.googleapis.com"]')).filter(function (l) { return !l.sheet; });
    var sheets = links.map(function (l) { return new Promise(function (r) { l.addEventListener("load", r); l.addEventListener("error", r); }); });
    return Promise.race([Promise.all(sheets).then(function () {
      var jobs = [];
      [[F.display, F.displayWeight || 800], [F.body, F.bodyWeight || 400], [F.body, 700]].forEach(function (p) { if (p[0]) jobs.push(document.fonts.load(p[1] + " 64px '" + p[0] + "'", "Tax season. Again.").catch(function () {})); });
      return Promise.all(jobs);
    }), new Promise(function (r) { setTimeout(r, 5000); })]);
  }

  // ------------------------------------------------------------------ mount
  // a bespoke system names its 3D family in preset.three.base (its own palette and fonts are applied to that family's scene)
  function keyOf(preset) { return preset && preset.three && preset.three.base ? preset.three.base : preset && preset.id; }
  api.has = function (preset) { return !!preset && IDS.indexOf(keyOf(preset)) >= 0; };

  api.mount = function (stageEl, preset, o) {
    o = o || {};
    var h = { ready: null, play: function () {}, destroy: function () {} };
    if (!stageEl || !api.has(preset) || !SCENES[keyOf(preset)]) { h.ready = Promise.resolve(); return h; }
    var n = ++seq, id = "rp3d-" + preset.id + "-" + n;
    var saved = { html: stageEl.innerHTML, bg: stageEl.style.background };
    var S = { dead: false, swapped: false, stage: null, clock: Clock(DUR), raf: 0, going: false };
    function restore() { if (S.swapped) { stageEl.innerHTML = saved.html; stageEl.style.background = saved.bg; S.swapped = false; } }
    function endPlay(final) {
      if (S.raf) { cancelAnimationFrame(S.raf); S.raf = 0; }
      if (S.going) { S.going = false; if (--playing === 0) root.__rasan3dQuality = savedQuality; }
      if (final && S.stage && !S.dead) S.stage.draw(DUR, true);
    }
    function fail(e) { try { console.warn("[RasaPresets3D] " + preset.id + ": " + ((e && e.message) || e)); } catch (x) {} S.dead = true; endPlay(false); restore(); }

    function run() {
      if (!webgl()) throw new Error("WebGL is not available");
      var R = paletteOf(preset, o), P = R.palette;
      if (root.RasaPresets && root.RasaPresets.loadFonts) { try { root.RasaPresets.loadFonts([{ recipe: R }]); } catch (e) {} }
      var box = stageEl.getBoundingClientRect();
      var pr = o.pixelRatio || clamp(((box.width || W) * (root.devicePixelRatio || 1)) / W, 0.3, 1);
      return Promise.all([loadRuntime(), fontsReady(R)]).then(function () {
        if (S.dead) return;
        var spec = SCENES[keyOf(preset)](P, { R: R, headline: o.headline, sub: o.sub });
        var canvas = document.createElement("canvas");
        canvas.style.cssText = "position:absolute;left:0;top:0;width:" + W + "px;height:" + H + "px;display:block;z-index:1";
        var opts = {
          id: id, canvas: canvas, timeline: S.clock, duration: DUR, width: W, height: H, fps: 30,
          camera: spec.camera, motionBlur: false, antialias: true, pixelRatio: pr,
          environment: spec.environment || "studio", background: spec.background || P.canvas, fog: spec.fog,
          toneMapping: spec.toneMapping || "neutral", exposure: spec.exposure || 1, post: spec.post || {},
          build: spec.build, pose: spec.pose,
        };
        S.stage = root.Rasan3D.stage(opts);
        S.canvas = canvas; S.spec = spec; S.R = R; S.P = P;
        return S.stage.readyPromise.then(function () {
          if (S.dead) return;
          if (S.stage.error) throw new Error(S.stage.error);
          var layer = typeLayer(R, P, o, spec);
          stageEl.innerHTML = "";
          stageEl.style.background = spec.background || P.canvas;
          stageEl.appendChild(canvas);
          stageEl.appendChild(layer);
          S.swapped = true;
        });
      });
    }

    h.ready = Promise.resolve().then(run).catch(fail);
    h.play = function () {
      if (S.dead || !S.stage || !S.swapped) return;
      endPlay(false);
      S.going = true;
      if (playing++ === 0) { savedQuality = root.__rasan3dQuality; root.__rasan3dQuality = "draft"; }
      var t0 = null;
      S.clock.seek(0);
      function step(ts) {
        if (S.dead || !S.going) return;
        if (t0 == null) t0 = ts;
        var t = (ts - t0) / 1000;
        if (S.stage.error) return fail(S.stage.error);
        if (t >= DUR) { endPlay(true); if (S.stage.error) fail(S.stage.error); return; }
        S.clock.seek(t);
        S.raf = requestAnimationFrame(step);
      }
      S.raf = requestAnimationFrame(step);
    };
    h.destroy = function () {
      S.dead = true; endPlay(false);
      var st = S.stage;
      if (st) {
        st.error = "destroyed";
        try { if (st.scene) st.scene.traverse(function (m) { if (m.geometry) m.geometry.dispose(); var ms = Array.isArray(m.material) ? m.material : m.material ? [m.material] : []; ms.forEach(function (x) { Object.keys(x).forEach(function (key) { var v = x[key]; if (v && v.isTexture) v.dispose(); }); x.dispose(); }); }); } catch (e) {}
        try { delete root.__rasan3d.stages[id]; } catch (e) {}
      }
      restore();
      var i = handles.indexOf(h); if (i >= 0) handles.splice(i, 1);
    };
    handles.push(h);
    return h;
  };

  api.whenAll = function () {
    var n = -1;
    function loop() {
      var list = handles.slice();
      if (list.length === n) return Promise.resolve();
      n = list.length;
      return Promise.all(list.map(function (x) { return x.ready; })).then(function () { return handles.length === n ? undefined : loop(); });
    }
    return loop();
  };
  api.ids = IDS.slice();

  root.RasaPresets3D = api;
  if (typeof module !== "undefined") module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
