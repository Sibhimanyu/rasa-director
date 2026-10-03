// A small PNG reader (8-bit, non-interlaced, as Chrome writes them) and the two measures the specimen gate needs:
// how much of a picture is which colour, and how alike two pictures are in layout.
import fs from "node:fs";
import zlib from "node:zlib";

export function decodePng(buf) {
  if (!Buffer.isBuffer(buf)) buf = fs.readFileSync(buf);
  if (buf.readUInt32BE(0) !== 0x89504e47) throw new Error("not a PNG");
  let p = 8, W = 0, H = 0, bd = 8, ct = 6, il = 0, plte = null;
  const idat = [];
  while (p < buf.length) {
    const len = buf.readUInt32BE(p), type = buf.toString("latin1", p + 4, p + 8), d = buf.subarray(p + 8, p + 8 + len);
    if (type === "IHDR") { W = d.readUInt32BE(0); H = d.readUInt32BE(4); bd = d[8]; ct = d[9]; il = d[12]; }
    else if (type === "PLTE") plte = d;
    else if (type === "IDAT") idat.push(d);
    else if (type === "IEND") break;
    p += 12 + len;
  }
  if (bd !== 8 || il) throw new Error(`unsupported PNG (bit depth ${bd}, interlace ${il})`);
  const ch = { 0: 1, 2: 3, 3: 1, 4: 2, 6: 4 }[ct];
  if (!ch) throw new Error(`unsupported PNG colour type ${ct}`);
  const raw = zlib.inflateSync(Buffer.concat(idat)), stride = W * ch, out = Buffer.alloc(H * stride);
  for (let y = 0; y < H; y++) {
    const f = raw[y * (stride + 1)], s = y * (stride + 1) + 1, o = y * stride;
    for (let x = 0; x < stride; x++) {
      const a = x >= ch ? out[o + x - ch] : 0, b = y ? out[o - stride + x] : 0, c = x >= ch && y ? out[o - stride + x - ch] : 0;
      let v = raw[s + x];
      if (f === 1) v += a; else if (f === 2) v += b; else if (f === 3) v += (a + b) >> 1;
      else if (f === 4) { const pa = Math.abs(b - c), pb = Math.abs(a - c), pc = Math.abs(a + b - 2 * c); v += pa <= pb && pa <= pc ? a : pb <= pc ? b : c; }
      out[o + x] = v & 255;
    }
  }
  const rgb = new Uint8Array(W * H * 3);
  for (let i = 0; i < W * H; i++) {
    if (ct === 3) { const k = out[i] * 3; rgb[i * 3] = plte[k]; rgb[i * 3 + 1] = plte[k + 1]; rgb[i * 3 + 2] = plte[k + 2]; }
    else if (ch < 3) rgb[i * 3] = rgb[i * 3 + 1] = rgb[i * 3 + 2] = out[i * ch];
    else { rgb[i * 3] = out[i * ch]; rgb[i * 3 + 1] = out[i * ch + 1]; rgb[i * 3 + 2] = out[i * ch + 2]; }
  }
  return { width: W, height: H, rgb };
}

const hexRgb = (h) => [1, 3, 5].map((i) => parseInt(String(h).slice(i, i + 2), 16));

// Share of the picture near each named colour (RGB distance <= tol), nearest wins; `off` is the share near none of them.
export function colourShares(img, palette, { tol = 52, step = 2 } = {}) {
  const names = Object.keys(palette), cols = names.map((n) => hexRgb(palette[n]));
  const hit = Object.fromEntries(names.map((n) => [n, 0]));
  let off = 0, n = 0;
  for (let y = 0; y < img.height; y += step) for (let x = 0; x < img.width; x += step) {
    const i = (y * img.width + x) * 3, r = img.rgb[i], g = img.rgb[i + 1], b = img.rgb[i + 2];
    let best = -1, bd = 1e9;
    for (let k = 0; k < cols.length; k++) { const d = Math.hypot(r - cols[k][0], g - cols[k][1], b - cols[k][2]); if (d < bd) { bd = d; best = k; } }
    if (bd <= tol) hit[names[best]]++; else off++;
    n++;
  }
  return { share: Object.fromEntries(names.map((k) => [k, hit[k] / n])), off: off / n };
}

// luminance grid (gw x gh cells, area-averaged)
function grid(img, gw = 48, gh = 27) {
  const g = new Float64Array(gw * gh), c = new Float64Array(gw * gh);
  for (let y = 0; y < img.height; y += 2) for (let x = 0; x < img.width; x += 2) {
    const i = (y * img.width + x) * 3, k = Math.min(gh - 1, Math.floor((y * gh) / img.height)) * gw + Math.min(gw - 1, Math.floor((x * gw) / img.width));
    g[k] += 0.2126 * img.rgb[i] + 0.7152 * img.rgb[i + 1] + 0.0722 * img.rgb[i + 2]; c[k]++;
  }
  return g.map((v, i) => (c[i] ? v / c[i] : 0));
}
const pearson = (a, b) => {
  const n = a.length; let ma = 0, mb = 0; for (let i = 0; i < n; i++) { ma += a[i]; mb += b[i]; } ma /= n; mb /= n;
  let sa = 0, sb = 0, sab = 0; for (let i = 0; i < n; i++) { const x = a[i] - ma, y = b[i] - mb; sa += x * x; sb += y * y; sab += x * y; }
  return sa && sb ? sab / Math.sqrt(sa * sb) : 1;
};
// How alike two pictures are in LAYOUT, whatever their colours: |correlation| of the luminance grids (a recoloured, even
// inverted, copy of a layout scores near 1; a different composition scores low) and of their edge maps.
export function layoutSimilarity(a, b) {
  const ga = grid(a), gb = grid(b);
  const edge = (g) => g.map((v, i) => { const x = i % 48, y = Math.floor(i / 48); return Math.abs(v - (x < 47 ? g[i + 1] : v)) + Math.abs(v - (y < 26 ? g[i + 48] : v)); });
  return Math.max(Math.abs(pearson(ga, gb)), Math.abs(pearson(edge(ga), edge(gb))));
}
