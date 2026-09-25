// Generates branded placeholder JPGs into public/images.
// Run: node scripts/generate-placeholders.mjs
// Replace any file with a real photo of the same name and aspect ratio.
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const out = new URL("../public/images/", import.meta.url);
mkdirSync(out, { recursive: true });

// Side-view vehicle silhouette. `len` is body length, `h` body height.
function vehicle(kind) {
  const spec = {
    van: { len: 520, h: 210, windows: 4, nose: 90 },
    coaster: { len: 700, h: 250, windows: 6, nose: 40 },
    coach: { len: 900, h: 290, windows: 8, nose: 24 },
  }[kind];
  const { len, h, windows, nose } = spec;
  const win = [];
  const gap = 14;
  const wStart = 40;
  const wArea = len - nose - wStart - 30;
  const ww = (wArea - gap * (windows - 1)) / windows;
  for (let i = 0; i < windows; i++) {
    win.push(
      `<rect x="${wStart + i * (ww + gap)}" y="34" width="${ww}" height="${h * 0.36}" rx="10" fill="#0B4F8F" opacity=".85"/>`
    );
  }
  const wheelR = h * 0.2;
  return `
  <g>
    <ellipse cx="${len / 2}" cy="${h + wheelR * 0.9}" rx="${len * 0.55}" ry="18" fill="#000" opacity=".25"/>
    <path d="M18 0 H${len - nose - 20} Q${len - 10} 6 ${len} ${h * 0.55} V${h - 18} Q${len} ${h} ${len - 18} ${h} H18 Q0 ${h} 0 ${h - 18} V18 Q0 0 18 0Z" fill="#F3F6FA"/>
    ${win.join("")}
    <path d="M${len - nose - 14} 34 H${len - nose + nose * 0.55} L${len - 12} ${h * 0.5} H${len - nose - 14}Z" fill="#0B4F8F" opacity=".85"/>
    <rect x="0" y="${h * 0.62}" width="${len}" height="12" fill="#2E8FD8"/>
    <rect x="0" y="${h * 0.62 + 18}" width="${len * 0.45}" height="5" fill="#F2A63B"/>
    <circle cx="${len * 0.2}" cy="${h}" r="${wheelR}" fill="#131820"/>
    <circle cx="${len * 0.2}" cy="${h}" r="${wheelR * 0.45}" fill="#4C5663"/>
    <circle cx="${len * 0.8}" cy="${h}" r="${wheelR}" fill="#131820"/>
    <circle cx="${len * 0.8}" cy="${h}" r="${wheelR * 0.45}" fill="#4C5663"/>
  </g>`;
}

function scene({ w, h, kind, hue = 0, sun = true }) {
  const v = { van: 520, coaster: 700, coach: 900 }[kind];
  const scale = Math.min((w * 0.62) / v, (h * 0.42) / 300);
  const vx = w - v * scale - w * 0.06;
  const vy = h * 0.8 - 300 * scale;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#072F57"/>
      <stop offset=".6" stop-color="#0B4F8F"/>
      <stop offset="1" stop-color="#2E8FD8"/>
    </linearGradient>
    <radialGradient id="glow" cx=".8" cy=".2" r=".6">
      <stop offset="0" stop-color="#F2A63B" stop-opacity=".45"/>
      <stop offset="1" stop-color="#F2A63B" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#sky)" style="filter:hue-rotate(${hue}deg)"/>
  ${sun ? `<rect width="100%" height="100%" fill="url(#glow)"/>` : ""}
  <g fill="#072F57" opacity=".55">
    <rect x="${w * 0.05}" y="${h * 0.38}" width="${w * 0.05}" height="${h * 0.42}"/>
    <rect x="${w * 0.12}" y="${h * 0.22}" width="${w * 0.035}" height="${h * 0.58}"/>
    <path d="M${w * 0.135} ${h * 0.22} L${w * 0.1375} ${h * 0.08} L${w * 0.14} ${h * 0.22}Z"/>
    <rect x="${w * 0.17}" y="${h * 0.46}" width="${w * 0.07}" height="${h * 0.34}"/>
    <rect x="${w * 0.26}" y="${h * 0.32}" width="${w * 0.04}" height="${h * 0.48}"/>
    <rect x="${w * 0.33}" y="${h * 0.52}" width="${w * 0.08}" height="${h * 0.28}"/>
  </g>
  <rect y="${h * 0.8}" width="100%" height="${h * 0.2}" fill="#131820" opacity=".55"/>
  <g stroke="#F3F6FA" stroke-opacity=".35" stroke-width="${Math.max(3, h * 0.006)}" stroke-dasharray="${w * 0.05} ${w * 0.04}">
    <line x1="0" y1="${h * 0.9}" x2="${w}" y2="${h * 0.9}"/>
  </g>
  <g transform="translate(${vx} ${vy}) scale(${scale})">${vehicle(kind)}</g>
</svg>`;
}

const images = [
  ["hero-coach.jpg", 1920, 1200, "coach", 0],
  ["why-us.jpg", 1200, 1400, "coaster", 8],
  ["about-karama.jpg", 1200, 1400, "van", -6],
  ["about-operations.jpg", 1400, 1000, "coach", 12],
  ["fleet-hiace-01.jpg", 1200, 900, "van", 0],
  ["fleet-hiace-02.jpg", 1200, 900, "van", 10],
  ["fleet-coaster-01.jpg", 1200, 900, "coaster", 0],
  ["fleet-coaster-02.jpg", 1200, 900, "coaster", 10],
  ["fleet-coach-01.jpg", 1200, 900, "coach", 0],
  ["service-staff.jpg", 1400, 1000, "coaster", 0],
  ["service-school.jpg", 1400, 1000, "coaster", -10],
  ["service-rental.jpg", 1400, 1000, "van", 0],
  ["service-airport.jpg", 1400, 1000, "van", 14],
  ["service-events.jpg", 1400, 1000, "coach", -8],
  ["service-intercity.jpg", 1400, 1000, "coach", 6],
];

for (const [name, w, h, kind, hue] of images) {
  await sharp(Buffer.from(scene({ w, h, kind, hue })))
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(new URL(name, out).pathname.replace(/^\/([A-Za-z]:)/, "$1"));
  console.log("wrote", name);
}
