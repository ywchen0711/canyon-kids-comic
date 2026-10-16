// Canyon Kids: the comic's art, drawn as SVG — the family and friends (with expressions and poses), animals and
// robots, props, backgrounds, foregrounds and effects. Every panel is a 400×260 scene; characters stand on y≈248.
export const W = 400, H = 260;
const INK = '#141218', SW = 3, SKIN = '#f6cfa8';
const f2 = (n) => Math.round(n * 10) / 10;
const ln = (pts, stroke, w, extra = '') => `<path d="M${pts.map((p) => f2(p[0]) + ' ' + f2(p[1])).join(' L')}" fill="none" stroke="${stroke}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" ${extra}/>`;
const circ = (x, y, r, fill, stroke = INK, w = SW, extra = '') => `<circle cx="${f2(x)}" cy="${f2(y)}" r="${f2(r)}" fill="${fill}" stroke="${stroke}" stroke-width="${w}" ${extra}/>`;
const ell = (x, y, rx, ry, fill, stroke = INK, w = SW, extra = '') => `<ellipse cx="${f2(x)}" cy="${f2(y)}" rx="${f2(rx)}" ry="${f2(ry)}" fill="${fill}" stroke="${stroke}" stroke-width="${w}" ${extra}/>`;
const rect = (x, y, w, h, fill, rx = 0, stroke = INK, sw = SW, extra = '') => `<rect x="${f2(x)}" y="${f2(y)}" width="${f2(w)}" height="${f2(h)}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" ${extra}/>`;
const path = (d, fill, stroke = INK, w = SW, extra = '') => `<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="${w}" stroke-linejoin="round" ${extra}/>`;

// ------------------------------------------------------------------ the cast
export const CAST = {
  jeff: { H: 174, r: 23, shirt: '#2f5597', pants: '#3a3a48', shoes: '#26262e', hair: '#1b1b22', style: 'jeff', adult: true, hood: true },
  youngjeff: { H: 170, r: 23, shirt: '#eef0f6', pants: '#3a3a48', shoes: '#26262e', hair: '#1b1b22', style: 'jeff', adult: true, tie: '#c83a3a' },
  erin: { H: 162, r: 22, shirt: '#e8607a', pants: '#4a4a6a', shoes: '#8a3a4a', hair: '#2a1a18', style: 'erin', adult: true, earrings: true, sunnies: true },
  younggirl: { H: 120, r: 24, shirt: '#ffd0e0', pants: '#5a7ac8', shoes: '#c83a5a', hair: '#2a1a18', style: 'pigtails' },
  josh: { H: 134, r: 25, shirt: '#36a35a', pants: '#2e4a7a', shoes: '#f2f2f2', hair: '#15151c', style: 'josh', logo: 'SC' },
  jasper: { H: 110, r: 24, shirt: '#f4a11c', pants: '#3a5a9a', shoes: '#e85a3a', hair: '#241a14', style: 'jasper', star: true },
  maya: { H: 128, r: 24, skin: '#c48a5e', shirt: '#8a4ad0', pants: '#2a2a4a', shoes: '#ffffff', hair: '#2a1810', style: 'pony' },
  tyler: { H: 132, r: 24, skin: '#f8dcc4', shirt: '#d83a3a', pants: '#4a4a52', shoes: '#333', hair: '#e8c050', style: 'short', freckles: true },
  kevin: { H: 146, r: 24, skin: '#f0c8a8', shirt: '#2a2a32', pants: '#3a3a4a', shoes: '#c83a3a', hair: '#6a4020', style: 'spiky', logo: 'T' },
  rivera: { H: 164, r: 22, skin: '#d9a37a', shirt: '#1a8a8a', pants: '#2a2a3a', shoes: '#222', hair: '#3a2418', style: 'curly', adult: true, earrings: true },
  patterson: { H: 150, r: 22, skin: '#f8e0cc', shirt: '#9a7ac8', pants: '#6a6a7a', shoes: '#555', hair: '#dcdce4', style: 'bun', glasses: true, adult: true },
  kid1: { H: 124, r: 23, skin: '#8a5a3a', shirt: '#2a8ae8', pants: '#3a3a4a', shoes: '#fff', hair: '#1a1210', style: 'short' },
  kid2: { H: 120, r: 23, skin: '#f0c8a0', shirt: '#f0c020', pants: '#5a4a8a', shoes: '#fff', hair: '#8a4a20', style: 'pony' },
  firefighter: { H: 176, r: 23, skin: '#d8a880', shirt: '#e8b020', pants: '#e8b020', shoes: '#222', hair: '#3a2a1a', style: 'helmet', adult: true },
  volunteer: { H: 166, r: 22, skin: '#b07850', shirt: '#e85a3a', pants: '#3a3a4a', shoes: '#222', hair: '#1a1210', style: 'short', adult: true },
  coyote: { draw: coyote }, rover: { draw: rover }, biscuit: { draw: dog }, robot: { draw: robot1 }, titan: { draw: titan }, car: { draw: car }, ghostlight: { draw: ghostlight }, thing: { draw: (o) => prop(o.prop, 0, -6, o) },
};

// ------------------------------------------------------------------ faces
function face(e, r, hy, k) {
  const ex = r * 0.38, ey = hy + r * 0.08, my = hy + r * 0.5, D = '#231c2a';
  let s = '';
  const blush = () => ell(-r * 0.6, hy + r * 0.38, r * 0.17, r * 0.1, '#ff9a9a', 'none', 0, 'opacity=".7"') + ell(r * 0.6, hy + r * 0.38, r * 0.17, r * 0.1, '#ff9a9a', 'none', 0, 'opacity=".7"');
  const dots = (sz = 1) => [-1, 1].map((sd) => ell(sd * ex, ey, 4.2 * sz, 5.2 * sz, '#fff', D, 1.7) + circ(sd * ex + 0.8, ey + 0.8, 2.1 * sz, D, 'none', 0)).join('');
  // brows: how high the inner and outer ends sit
  const browLine = (inner, outer) => [-1, 1].map((sd) => ln([[sd * (ex - 5), ey - 8 - inner], [sd * (ex + 5), ey - 8 - outer]], D, 2.2)).join('');
  switch (e) {
    case 'happy': s += [-1, 1].map((sd) => ln([[sd * ex - 4, ey + 1], [sd * ex, ey - 3], [sd * ex + 4, ey + 1]], D, 2.4)).join('') + path(`M${-r * 0.22} ${my - 2} Q0 ${my + 7} ${r * 0.22} ${my - 2} Z`, '#c8384a', D, 1.8) + blush(); break;
    case 'grin': s += [-1, 1].map((sd) => ln([[sd * ex - 4, ey + 1], [sd * ex, ey - 3], [sd * ex + 4, ey + 1]], D, 2.4)).join('') + path(`M${-r * 0.32} ${my - 4} L${r * 0.32} ${my - 4} Q${r * 0.3} ${my + 8} 0 ${my + 8} Q${-r * 0.3} ${my + 8} ${-r * 0.32} ${my - 4} Z`, '#c8384a', D, 1.8) + rect(-r * 0.28, my - 4, r * 0.56, 3.5, '#fff', 1, 'none', 0) + blush(); break;
    case 'surprised': s += [-1, 1].map((sd) => circ(sd * ex, ey, 4.6, '#fff', D, 1.6) + circ(sd * ex, ey, 2.2, D, 'none', 0)).join('') + browLine(-3, -3) + ell(0, my + 1, 3.2, 4.2, '#7a2030', D, 1.6); break;
    case 'shock': s += [-1, 1].map((sd) => circ(sd * ex, ey, 5, '#fff', D, 1.8)).join('') + browLine(-5, -4) + ell(0, my + 2, 4.5, 6, '#5a1828', D, 1.8) + ln([[-r * 0.85, hy - r * 0.6], [-r * 0.85, hy - r * 0.1]], '#5a6ad8', 1.6) + ln([[-r * 0.72, hy - r * 0.62], [-r * 0.72, hy - r * 0.22]], '#5a6ad8', 1.6); break;
    case 'scared': s += dots(0.75) + browLine(-5, 0) + path(`M${-r * 0.25} ${my + 1} q${r * 0.08} -3 ${r * 0.16} 0 t${r * 0.16} 0 t${r * 0.17} 0`, 'none', D, 1.8) + path(`M${r * 0.8} ${hy - r * 0.2} q3 6 0 8 q-3 -2 0 -8 Z`, '#9ad0ff', '#4a8ad8', 1.2) + ln([[-r * 0.5, hy - r * 0.62], [-r * 0.5, hy - r * 0.32]], '#5a6ad8', 1.4) + ln([[-r * 0.3, hy - r * 0.68], [-r * 0.3, hy - r * 0.38]], '#5a6ad8', 1.4); break;
    case 'sad': s += dots(0.85) + browLine(-4, 1) + path(`M${-r * 0.2} ${my + 3} Q0 ${my - 3} ${r * 0.2} ${my + 3}`, 'none', D, 2) + path(`M${ex + 1} ${ey + 5} q-2.5 5 0 7 q2.5 -2 0 -7 Z`, '#9ad0ff', '#4a8ad8', 1.1); break;
    case 'cry': s += [-1, 1].map((sd) => ln([[sd * ex - 4, ey - 1], [sd * ex, ey + 2], [sd * ex + 4, ey - 1]], D, 2.2)).join('') + browLine(-4, 1) + ell(0, my + 2, 5, 4, '#7a2030', D, 1.6) + [-1, 1].map((sd) => path(`M${sd * ex} ${ey + 3} q${sd * 2} 10 ${sd * 1} 18`, 'none', '#6ab8ff', 3)).join(''); break;
    case 'angry': s += dots(0.85) + [-1, 1].map((sd) => ln([[sd * (ex - 5), ey - 5], [sd * (ex + 5), ey - 10]], D, 2.4)).join('') + path(`M${-r * 0.22} ${my + 3} Q0 ${my - 3} ${r * 0.22} ${my + 3}`, 'none', D, 2.2) + path(`M${r * 0.55} ${hy - r * 0.75} l4 -4 m-4 0 l4 4 m2 -2 l-8 0 m4 -4 l0 8`, 'none', '#d83a3a', 1.8); break;
    case 'determined': s += dots(0.9) + [-1, 1].map((sd) => ln([[sd * (ex - 5), ey - 6], [sd * (ex + 5), ey - 10]], D, 2.6)).join('') + path(`M${-r * 0.22} ${my} L${r * 0.22} ${my - 2}`, 'none', D, 2.2); break;
    case 'smug': s += [-1, 1].map((sd) => ln([[sd * ex - 4, ey], [sd * ex + 4, ey]], D, 2.4)).join('') + [-1, 1].map((sd) => ln([[sd * (ex - 5), ey - 7], [sd * (ex + 5), ey - 9]], D, 2)).join('') + path(`M${-r * 0.22} ${my} Q${r * 0.05} ${my + 4} ${r * 0.26} ${my - 3}`, 'none', D, 2); break;
    case 'worried': s += dots(0.85) + browLine(-5, -1) + path(`M${-r * 0.18} ${my + 2} Q0 ${my - 1} ${r * 0.18} ${my + 2}`, 'none', D, 1.8); break;
    case 'sleepy': s += [-1, 1].map((sd) => ln([[sd * ex - 4, ey], [sd * ex + 4, ey + 1]], D, 2.2)).join('') + ell(0, my + 1, 2.5, 2, '#7a2030', D, 1.4); break;
    case 'love': s += [-1, 1].map((sd) => path(`M${sd * ex} ${ey + 3} l-4 -4 a2.4 2.4 0 0 1 4 -2.6 a2.4 2.4 0 0 1 4 2.6 Z`, '#ff4a6a', D, 1.2)).join('') + path(`M${-r * 0.22} ${my - 2} Q0 ${my + 7} ${r * 0.22} ${my - 2} Z`, '#c8384a', D, 1.8) + blush(); break;
    case 'think': s += dots(0.85) + browLine(-1, -4) + path(`M${-r * 0.12} ${my + 1} L${r * 0.18} ${my}`, 'none', D, 2); break;
    case 'eat': s += [-1, 1].map((sd) => ln([[sd * ex - 4, ey + 1], [sd * ex, ey - 3], [sd * ex + 4, ey + 1]], D, 2.4)).join('') + ell(0, my + 1, 5, 5, '#f8e8c8', D, 1.6) + blush(); break;
    default: s += dots() + path(`M${-r * 0.16} ${my} Q0 ${my + 4} ${r * 0.16} ${my}`, 'none', D, 2);
  }
  if (k.freckles) s += [-1, 1].map((sd) => [0, 1, 2].map((i) => circ(sd * (r * 0.5 + i * 2.5), hy + r * 0.3 + (i % 2) * 2, 0.8, '#c8784a', 'none', 0)).join('')).join('');
  return s;
}

// ------------------------------------------------------------------ hair
function hairBack(st, r, hy, c) {
  if (st === 'erin') return path(`M${-r * 1.08} ${hy - r * 0.2} Q${-r * 1.2} ${hy + r * 1.5} ${-r * 0.7} ${hy + r * 1.75} L${r * 0.7} ${hy + r * 1.75} Q${r * 1.2} ${hy + r * 1.5} ${r * 1.08} ${hy - r * 0.2} Z`, c);
  if (st === 'pony') return path(`M${r * 0.75} ${hy - r * 0.55} Q${r * 1.7} ${hy - r * 0.3} ${r * 1.35} ${hy + r * 1.1} Q${r * 1.05} ${hy + r * 0.3} ${r * 0.55} ${hy - r * 0.2} Z`, c);
  if (st === 'bun') return circ(0, hy - r * 1.02, r * 0.42, c);
  if (st === 'pigtails') return [-1, 1].map((s) => ell(s * r * 1.12, hy + r * 0.05, r * 0.3, r * 0.5, c)).join('');
  if (st === 'curly') return [-1, 1].map((s) => [0, 1, 2].map((i) => circ(s * r * (0.95 + i * 0.05), hy - r * 0.3 + i * r * 0.45, r * 0.34, c)).join('')).join('');
  return '';
}
function hairFront(st, r, hy, c) {
  const top = hy - r;
  switch (st) {
    case 'josh': return path(`M${-r * 1.02} ${hy - r * 0.05} Q${-r * 1.05} ${top - r * 0.15} ${-r * 0.5} ${top - r * 0.05} L${-r * 0.55} ${top - r * 0.45} L${-r * 0.15} ${top - r * 0.12} L${r * 0.05} ${top - r * 0.55} L${r * 0.3} ${top - r * 0.1} L${r * 0.7} ${top - r * 0.4} L${r * 0.68} ${top + r * 0.05} Q${r * 1.08} ${top + r * 0.25} ${r * 1.02} ${hy - r * 0.05} Q${r * 0.6} ${hy - r * 0.55} ${r * 0.1} ${hy - r * 0.45} L${-r * 0.1} ${hy - r * 0.62} L${-r * 0.35} ${hy - r * 0.42} Q${-r * 0.8} ${hy - r * 0.4} ${-r * 1.02} ${hy - r * 0.05} Z`, c);
    case 'jasper': return path(`M${-r * 1.06} ${hy + r * 0.05} Q${-r * 1.12} ${top - r * 0.12} 0 ${top - r * 0.14} Q${r * 1.12} ${top - r * 0.12} ${r * 1.06} ${hy + r * 0.05} L${r * 0.9} ${hy - r * 0.28} L${-r * 0.9} ${hy - r * 0.28} Z`, c) + ln([[-r * 0.55, hy - r * 0.3], [-r * 0.5, hy - r * 0.5]], '#4a3a30', 1.2) + ln([[r * 0.1, hy - r * 0.3], [r * 0.12, hy - r * 0.52]], '#4a3a30', 1.2);
    case 'jeff': return path(`M${-r * 1.0} ${hy - r * 0.1} Q${-r * 1.05} ${top - r * 0.08} ${-r * 0.2} ${top - r * 0.12} Q${r * 0.9} ${top - r * 0.1} ${r * 1.02} ${hy - r * 0.2} Q${r * 0.6} ${hy - r * 0.62} ${-r * 0.25} ${hy - r * 0.58} Q${-r * 0.7} ${hy - r * 0.5} ${-r * 1.0} ${hy - r * 0.1} Z`, c);
    case 'erin': return path(`M${-r * 1.05} ${hy + r * 0.2} Q${-r * 1.15} ${top - r * 0.1} 0 ${top - r * 0.12} Q${r * 1.15} ${top - r * 0.1} ${r * 1.05} ${hy + r * 0.2} Q${r * 0.85} ${hy - r * 0.45} ${r * 0.1} ${hy - r * 0.55} Q${-r * 0.4} ${hy - r * 0.2} ${-r * 0.85} ${hy - r * 0.05} Z`, c);
    case 'pony': case 'pigtails': return path(`M${-r * 1.02} ${hy - r * 0.05} Q${-r * 1.05} ${top - r * 0.1} 0 ${top - r * 0.12} Q${r * 1.05} ${top - r * 0.1} ${r * 1.02} ${hy - r * 0.05} Q${r * 0.5} ${hy - r * 0.6} ${-r * 0.1} ${hy - r * 0.5} Q${-r * 0.6} ${hy - r * 0.45} ${-r * 1.02} ${hy - r * 0.05} Z`, c);
    case 'short': return path(`M${-r * 1.0} ${hy - r * 0.15} Q${-r * 1.0} ${top - r * 0.12} ${r * 0.1} ${top - r * 0.12} Q${r * 1.0} ${top - r * 0.05} ${r * 1.0} ${hy - r * 0.15} Q${r * 0.5} ${hy - r * 0.55} ${-r * 0.2} ${hy - r * 0.6} Q${-r * 0.7} ${hy - r * 0.5} ${-r * 1.0} ${hy - r * 0.15} Z`, c);
    case 'spiky': return path(`M${-r * 1.0} ${hy - r * 0.1} L${-r * 1.15} ${top + r * 0.1} L${-r * 0.7} ${top} L${-r * 0.75} ${top - r * 0.45} L${-r * 0.25} ${top - r * 0.15} L${r * 0.05} ${top - r * 0.6} L${r * 0.3} ${top - r * 0.15} L${r * 0.85} ${top - r * 0.35} L${r * 0.7} ${top + r * 0.1} L${r * 1.15} ${top + r * 0.15} L${r * 1.0} ${hy - r * 0.1} Q${r * 0.4} ${hy - r * 0.55} ${-r * 0.3} ${hy - r * 0.5} Z`, c);
    case 'curly': return [-0.7, -0.25, 0.2, 0.65].map((x, i) => circ(x * r, top + r * 0.12 + (i % 2) * r * 0.08, r * 0.42, c)).join('');
    case 'bun': return path(`M${-r * 1.0} ${hy - r * 0.05} Q${-r * 1.0} ${top - r * 0.1} 0 ${top - r * 0.12} Q${r * 1.0} ${top - r * 0.1} ${r * 1.0} ${hy - r * 0.05} Q${r * 0.6} ${hy - r * 0.6} 0 ${hy - r * 0.58} Q${-r * 0.6} ${hy - r * 0.6} ${-r * 1.0} ${hy - r * 0.05} Z`, c);
    case 'helmet': return path(`M${-r * 1.25} ${hy - r * 0.3} Q${-r * 1.1} ${top - r * 0.35} 0 ${top - r * 0.4} Q${r * 1.1} ${top - r * 0.35} ${r * 1.25} ${hy - r * 0.3} L${r * 1.45} ${hy - r * 0.15} L${-r * 1.45} ${hy - r * 0.15} Z`, '#d8302a') + rect(-r * 0.25, top - r * 0.25, r * 0.5, r * 0.5, '#f0c020', 3, INK, 1.6);
  }
  return '';
}

// ------------------------------------------------------------------ bodies and poses
// arm: [upper-arm angle, elbow bend] in degrees; 0 = straight down, + = away from the body
const POSES = {
  stand: [[10, -6], [10, -6]], wave: [[10, -6], [145, 25]], point: [[10, -6], [92, -4]], cheer: [[150, 15], [150, 15]],
  run: [[45, 65], [-20, -40]], scared: [[30, 118], [30, 118]], hold: [[5, -68], [5, -68]], think: [[10, -6], [15, -150]],
  hips: [[38, -100], [38, -100]], fist: [[10, -6], [25, 140]], shrug: [[55, 70], [55, 70]], sad: [[3, 0], [3, 0]],
  reach: [[10, -6], [125, 0]], sit: [[15, -50], [15, -50]], hug: [[60, -95], [60, -95]], carry: [[20, -90], [20, -90]],
};
function legs(pose, L, tw, k) {
  const lw = tw * 0.34, x = tw * 0.25, hip = -L;
  const leg = (sx, ang) => `<g transform="rotate(${ang} ${sx} ${hip})">${rect(sx - lw / 2, hip - 2, lw, L - 3, k.pants, lw * 0.3)}${ell(sx + 2, -3, lw * 0.78, 4.6, k.shoes)}</g>`;
  if (pose === 'run') return leg(-x, 28) + leg(x, -22);
  if (pose === 'cheer') return leg(-x, 8) + leg(x, -8);
  return leg(-x, 0) + leg(x, 0);
}
function prop(name, x, y, o) {
  switch (name) {
    case 'flashlight': return (o.beam ? `<path d="M${x + 6} ${y - 4} L${x + 130} ${y - 50} L${x + 140} ${y + 30} Z" fill="url(#beam)" opacity=".85"/>` : '') + `<g transform="rotate(-18 ${x} ${y})">${rect(x - 4, y - 5, 16, 9, '#3a3a48', 2)}${rect(x + 10, y - 7, 5, 13, '#f0d040', 1.5)}</g>`;
    case 'phone': return rect(x - 5, y - 9, 10, 17, '#22222c', 2) + rect(x - 3.5, y - 7, 7, 12, o.lit ? '#bfe8ff' : '#4a5a7a', 1, 'none', 0);
    case 'pan': return ln([[x, y], [x + 16, y - 6]], '#3a3a3a', 4) + ell(x + 30, y - 10, 16, 6, '#3a3a40') + ell(x + 30, y - 12, 10, 3.5, '#f8e070', 'none', 0);
    case 'lunchbox': return rect(x - 13, y - 10, 26, 18, '#4ab8e8', 4) + rect(x - 13, y - 10, 26, 6, '#2a88c8', 3) + rect(x - 4, y - 13, 8, 4, '#2a88c8', 1);
    case 'dumplings': return rect(x - 16, y - 6, 32, 12, '#4ab8e8', 4) + [-9, 0, 9].map((d) => path(`M${x + d - 5} ${y - 5} Q${x + d} ${y - 13} ${x + d + 5} ${y - 5} Z`, '#fbf3dc', INK, 1.4)).join('');
    case 'chopsticks': return ln([[x - 2, y + 4], [x + 18, y - 16]], '#a86a3a', 2) + ln([[x + 2, y + 4], [x + 21, y - 13]], '#a86a3a', 2) + path(`M${x + 14} ${y - 12} Q${x + 19} ${y - 22} ${x + 24} ${y - 12} Z`, '#fbf3dc', INK, 1.4);
    case 'wrench': return `<g transform="rotate(-35 ${x} ${y})">${rect(x - 2.5, y - 18, 5, 22, '#9aa2b0', 2)}${path(`M${x - 7} ${y - 26} a7 7 0 1 1 14 0 l-4 0 l0 5 l-6 0 l0 -5 Z`, '#9aa2b0', INK, 1.6)}</g>`;
    case 'bear': return circ(x, y - 6, 9, '#b07840') + circ(x - 7, y - 14, 3.5, '#b07840') + circ(x + 7, y - 14, 3.5, '#b07840') + circ(x - 3, y - 7, 1.2, INK, 'none', 0) + circ(x + 3, y - 7, 1.2, INK, 'none', 0) + ell(x, y - 3, 3, 2, '#e8c898', 'none', 0);
    case 'shoe': return path(`M${x - 12} ${y + 2} L${x - 11} ${y - 8} L${x - 2} ${y - 8} Q${x + 2} ${y - 3} ${x + 12} ${y - 2} L${x + 12} ${y + 3} Z`, '#e85a3a', INK, 1.8) + ln([[x - 12, y + 1], [x + 12, y + 1]], '#fff', 2) + path(`M${x - 6} ${y - 6} l3 3 l3 -4`, 'none', '#ffe040', 1.6);
    case 'remote': return rect(x - 11, y - 7, 22, 13, '#3a3a48', 5) + circ(x - 5, y - 1, 2.5, '#e84a4a', 'none', 0) + circ(x + 5, y - 1, 2.5, '#4ad84a', 'none', 0);
    case 'trophy': return path(`M${x - 11} ${y - 26} L${x + 11} ${y - 26} Q${x + 11} ${y - 8} ${x} ${y - 6} Q${x - 11} ${y - 8} ${x - 11} ${y - 26} Z`, '#ffc830', INK, 1.8) + rect(x - 3, y - 7, 6, 6, '#ffc830', 1, INK, 1.4) + rect(x - 8, y - 2, 16, 5, '#a86a2a', 1, INK, 1.4);
    case 'bag': return rect(x - 11, y - 4, 22, 20, '#d85a3a', 5) + rect(x - 8, y + 4, 16, 6, '#b8482a', 2, INK, 1.2);
    case 'hat': return path(`M${x - 13} ${y} Q${x - 12} ${y - 14} ${x} ${y - 14} Q${x + 12} ${y - 14} ${x + 12} ${y} Z`, '#2a6ad8', INK, 1.8) + path(`M${x + 8} ${y} L${x + 24} ${y + 2} L${x + 10} ${y - 3} Z`, '#2a6ad8', INK, 1.6);
    case 'book': return rect(x - 12, y - 9, 24, 17, '#8a3ab0', 2) + ln([[x, y - 9], [x, y + 8]], INK, 1.6);
    case 'cup': return rect(x - 6, y - 10, 12, 13, '#fff', 3) + path(`M${x + 6} ${y - 7} q6 1 0 7`, 'none', INK, 1.6) + path(`M${x - 2} ${y - 13} q2 -4 0 -7 M${x + 2} ${y - 13} q2 -4 0 -7`, 'none', '#aaa', 1.2);
    case 'map': return rect(x - 14, y - 10, 28, 18, '#f4e4b0', 1) + path(`M${x - 8} ${y - 4} l6 4 l6 -6 l6 3`, 'none', '#d83a3a', 1.4);
    case 'tablet': return rect(x - 13, y - 10, 26, 18, '#22222c', 3) + rect(x - 11, y - 8, 22, 14, '#9ad8ff', 1, 'none', 0);
  }
  return '';
}

function human(k, o) {
  const { H: Hh, r } = k, skin = k.skin || SKIN, e = o.e || 'normal', pose = o.p || 'stand';
  const avail = Hh - 1.95 * r, L = avail * 0.46, T = avail * 0.54;
  const tw = r * (k.adult ? 1.55 : 1.3), sit = pose === 'sit';
  const hip = -L, sh = hip - T, hy = sh - r * 0.9;
  let s = '';
  if (o.prop === 'backpack') s += rect(-tw * 0.62, sh + 4, tw * 1.24, T * 0.85, '#d85a3a', 8);
  s += hairBack(k.style, r, hy, k.hair);
  if (!sit) s += legs(pose, L, tw, k);
  // torso
  s += path(`M${-tw / 2} ${sh + 6} Q${-tw / 2} ${sh} ${-tw / 2 + 7} ${sh} L${tw / 2 - 7} ${sh} Q${tw / 2} ${sh} ${tw / 2} ${sh + 6} L${tw * 0.47} ${hip + 1} L${-tw * 0.47} ${hip + 1} Z`, k.shirt);
  if (k.hood) s += path(`M${-tw * 0.32} ${sh + 1} Q0 ${sh + 12} ${tw * 0.32} ${sh + 1}`, 'none', 'rgba(0,0,0,.35)', 2.2) + ln([[-3, sh + 8], [-3, sh + 20]], '#e8e8f0', 1.4) + ln([[3, sh + 8], [3, sh + 20]], '#e8e8f0', 1.4);
  if (k.tie) s += path(`M-3 ${sh + 2} L3 ${sh + 2} L4 ${sh + T * 0.6} L0 ${sh + T * 0.72} L-4 ${sh + T * 0.6} Z`, k.tie, INK, 1.4);
  if (k.logo) s += `<text x="0" y="${f2(sh + T * 0.58)}" text-anchor="middle" font-family="Bangers, Impact, sans-serif" font-size="${f2(T * 0.42)}" fill="#fff" stroke="${INK}" stroke-width=".8">${k.logo}</text>`;
  if (k.star) s += path(starPath(0, sh + T * 0.5, T * 0.22, T * 0.1), '#fff6a0', INK, 1.3);
  if (k.style === 'helmet') s += rect(-tw / 2, sh + T * 0.55, tw, 5, '#c8c8c8', 0, INK, 1.2);
  // arms
  const aw = tw * 0.27, A = T * 1.0;
  const hands = [];
  POSES[pose].forEach(([a1, b], i) => {
    const sd = i ? 1 : -1, sx = sd * (tw / 2 - aw * 0.35), sy = sh + aw * 0.55;
    const r1 = (a1 * Math.PI) / 180, r2 = ((a1 + b) * Math.PI) / 180;
    const ex = sx + sd * Math.sin(r1) * A * 0.5, ey = sy + Math.cos(r1) * A * 0.5;
    const hx = ex + sd * Math.sin(r2) * A * 0.5, hyy = ey + Math.cos(r2) * A * 0.5;
    s += ln([[sx, sy], [ex, ey], [hx, hyy]], INK, aw + SW * 2) + ln([[sx, sy], [ex, ey], [hx, hyy]], k.shirt, aw);
    hands.push([hx, hyy]);
  });
  // head
  s += rect(-r * 0.22, sh - r * 0.25, r * 0.44, r * 0.4, skin, 2, 'none', 0);
  s += circ(-r * 0.98, hy + r * 0.12, r * 0.18, skin) + circ(r * 0.98, hy + r * 0.12, r * 0.18, skin);
  s += circ(0, hy, r, skin);
  if (k.earrings) s += circ(-r * 0.98, hy + r * 0.38, 2, '#ffd040', INK, 1) + circ(r * 0.98, hy + r * 0.38, 2, '#ffd040', INK, 1);
  s += face(e, r, hy, k);
  s += hairFront(k.style, r, hy, k.hair);
  if (k.sunnies) s += `<g transform="rotate(-6 0 ${f2(hy - r * 0.78)})">` + [-1, 1].map((sd) => path(`M${f2(sd * r * 0.42 - 8)} ${f2(hy - r * 0.86)} L${f2(sd * r * 0.42 + 8)} ${f2(hy - r * 0.86)} Q${f2(sd * r * 0.42 + 8)} ${f2(hy - r * 0.5)} ${f2(sd * r * 0.42)} ${f2(hy - r * 0.5)} Q${f2(sd * r * 0.42 - 8)} ${f2(hy - r * 0.5)} ${f2(sd * r * 0.42 - 8)} ${f2(hy - r * 0.86)} Z`, '#2a2a3a', INK, 2) + ln([[sd * r * 0.42 - 4, hy - r * 0.8], [sd * r * 0.42 - 1, hy - r * 0.64]], '#9ad8ff', 1.6)).join('') + ln([[-r * 0.42 + 8, hy - r * 0.84], [r * 0.42 - 8, hy - r * 0.84]], INK, 2.2) + '</g>';
  if (k.glasses) s += [-1, 1].map((sd) => rect(sd * r * 0.38 - 6.5, hy + r * 0.08 - 5, 13, 10, 'rgba(200,230,255,.25)', 3, INK, 1.8)).join('') + ln([[-r * 0.38 + 6.5, hy + r * 0.05], [r * 0.38 - 6.5, hy + r * 0.05]], INK, 1.6);
  if (o.mask) s += path(`M${-r * 0.62} ${hy + r * 0.2} Q0 ${hy + r * 0.1} ${r * 0.62} ${hy + r * 0.2} L${r * 0.5} ${hy + r * 0.78} Q0 ${hy + r * 0.95} ${-r * 0.5} ${hy + r * 0.78} Z`, '#f4f4f8', INK, 1.6);
  if (o.sweat) s += path(`M${r * 0.95} ${hy - r * 0.55} q4 7 0 10 q-4 -3 0 -10 Z`, '#9ad0ff', '#4a8ad8', 1.2);
  // hands and props
  hands.forEach(([x, y]) => { s += circ(x, y, aw * 0.58, skin); });
  if (o.prop && o.prop !== 'backpack') s += prop(o.prop, hands[1][0], hands[1][1], o);
  if (o.prop2) s += prop(o.prop2, hands[0][0], hands[0][1], o);
  return sit ? `<g transform="translate(0 ${f2(L * 0.45)})">${s}</g>` : s;
}
const starPath = (cx, cy, R, r) => { let d = ''; for (let i = 0; i < 10; i++) { const a = (Math.PI / 5) * i - Math.PI / 2, rr = i % 2 ? r : R; d += (i ? 'L' : 'M') + f2(cx + Math.cos(a) * rr) + ' ' + f2(cy + Math.sin(a) * rr); } return d + 'Z'; };

// ------------------------------------------------------------------ animals and machines (origin at the ground)
function coyote(o) {
  const c = '#a8845a', d = '#7a5a3a';
  return path('M-46 -38 Q-60 -44 -66 -30 Q-58 -34 -48 -28 Z', c) +
    rect(-36, -24, 6, 24, d, 2) + rect(-22, -24, 6, 24, c, 2) + rect(14, -24, 6, 24, d, 2) + rect(26, -24, 6, 24, c, 2) +
    path('M-46 -44 Q-40 -58 -6 -56 Q24 -58 34 -46 Q38 -26 30 -22 L-40 -22 Q-50 -28 -46 -44 Z', c) +
    path('M24 -50 L34 -78 L42 -60 L50 -78 L56 -50 Q66 -46 74 -40 Q70 -32 54 -34 Q40 -30 30 -38 Z', c) +
    path('M58 -40 Q66 -40 74 -40 Q68 -34 58 -36 Z', '#e8d8c0', INK, 1.4) + circ(73, -40, 2.2, INK, 'none', 0) +
    (o.glow ? circ(46, -50, 4, '#ffff60', '#ffcc00', 1.5, 'filter="url(#glow)"') + circ(56, -50, 4, '#ffff60', '#ffcc00', 1.5, 'filter="url(#glow)"') : ell(48, -50, 2.4, 2.4, INK, 'none', 0)) +
    (o.e === 'angry' ? path('M62 -34 l2 4 l2 -4 l2 4', 'none', '#fff', 1.4) : '');
}
function rover(o) {
  return rect(-26, -26, 52, 18, '#d8dce4', 4) + rect(-30, -34, 60, 6, '#2a4a8a', 1) + ln([[-26, -31], [26, -31]], '#6a8ad8', 1) +
    [-18, 0, 18].map((x) => circ(x, -6, 7, '#3a3a44') + circ(x, -6, 2.5, '#9a9aa4', 'none', 0)).join('') +
    ln([[14, -34], [14, -52]], INK, 2) + circ(14, -55, 5, o.off ? '#5a6a8a' : '#6ad8ff', INK, 1.6, o.off ? '' : 'filter="url(#glow)"') +
    `<text x="0" y="-13" text-anchor="middle" font-size="7" font-family="sans-serif" font-weight="700" fill="${INK}">SCE-01</text>`;
}
function dog(o) {
  const c = '#e0a850';
  return rect(-20, -18, 6, 18, c, 2) + rect(-8, -18, 6, 18, c, 2) + rect(8, -18, 6, 18, c, 2) + rect(18, -18, 6, 18, c, 2) +
    path('M-30 -30 Q-36 -40 -28 -42', 'none', INK, 5) + path('M-30 -30 Q-36 -40 -28 -42', 'none', c, 3) +
    ell(0, -26, 28, 13, c) + circ(28, -40, 14, c) + ell(19, -44, 6, 10, '#b07830', INK, SW, 'transform="rotate(20 19 -44)"') +
    ell(38, -36, 6, 4.5, '#f0d0a0', INK, 1.4) + circ(42, -37, 2.2, INK, 'none', 0) + circ(30, -43, 2, INK, 'none', 0) +
    (o.e === 'happy' ? path('M34 -30 q3 6 6 0', '#ff7a8a', INK, 1.2) : '') + rect(16, -32, 16, 4, '#d83a3a', 1, INK, 1.2);
}
function robot1(o) {
  const broke = o.e === 'broken';
  return rect(-34, -18, 68, 18, '#3a3a44', 9) + [-22, -8, 6, 20].map((x) => circ(x, -9, 5, '#6a6a74', INK, 1.4)).join('') +
    rect(-28, -50, 56, 34, '#e8e8f0', 6) + path('M-24 -24 Q-14 -40 -6 -26 Q2 -42 10 -24 Z', '#ff6a2a', INK, 1.4) +
    rect(-14, -70, 28, 20, '#cfd6e2', 5) + circ(-6, -60, 4, broke ? '#555' : '#4ae8ff', INK, 1.4, broke ? '' : 'filter="url(#glow)"') + circ(6, -60, 4, broke ? '#555' : '#4ae8ff', INK, 1.4, broke ? '' : 'filter="url(#glow)"') +
    ln([[28, -40], [46, -52], [54, -40]], INK, 7) + ln([[28, -40], [46, -52], [54, -40]], '#cfd6e2', 4) + path('M52 -44 l8 -2 l-2 8 Z', '#9aa2b0', INK, 1.4) +
    `<text x="0" y="-31" text-anchor="middle" font-family="Bangers, Impact" font-size="9" fill="${INK}">COYOTE-1</text>` +
    (broke ? path('M-4 -76 q-6 -10 2 -16 q-4 -8 6 -12', 'none', '#888', 3, 'opacity=".8"') + path('M10 -40 l6 -8 l-2 6 l6 -4', 'none', '#ffd030', 2) : '');
}
function titan() {
  return rect(-44, -20, 88, 20, '#2a2a30', 10) + [-30, -12, 6, 24].map((x) => circ(x, -10, 6, '#555', INK, 1.4)).join('') +
    path('M-40 -20 L-34 -66 L34 -66 L40 -20 Z', '#9aa6b8') + [-30, -12, 6, 24].map((x) => path(`M${x} -66 l6 -12 l6 12 Z`, '#d8dce4', INK, 1.4)).join('') +
    rect(-20, -58, 40, 14, '#2a2a30', 3) + rect(-16, -55, 12, 8, '#ff3a3a', 2, 'none', 0, 'filter="url(#glow)"') + rect(4, -55, 12, 8, '#ff3a3a', 2, 'none', 0, 'filter="url(#glow)"') +
    `<text x="0" y="-28" text-anchor="middle" font-family="Bangers, Impact" font-size="11" fill="${INK}">TITAN-X</text>`;
}
function car(o) {
  const c = o.color || '#c8d0dc';
  return path('M-90 -18 L-88 -46 Q-80 -70 -50 -72 L40 -72 Q66 -70 80 -46 L92 -40 Q98 -30 94 -18 Z', c) +
    path('M-74 -48 Q-68 -64 -48 -64 L-12 -64 L-12 -48 Z', '#a8d8f0', INK, 1.8) + path('M-4 -64 L36 -64 Q56 -62 66 -48 L-4 -48 Z', '#a8d8f0', INK, 1.8) +
    [-58, 60].map((x) => circ(x, -16, 16, '#2a2a32') + circ(x, -16, 7, '#9a9aa4')).join('') + rect(84, -38, 10, 6, '#ffe070', 2, INK, 1.4);
}
function ghostlight(o) {
  return circ(0, -40, 10, '#7ae0ff', 'none', 0, 'filter="url(#glow)" opacity=".9"') + circ(0, -40, 4, '#fff', 'none', 0);
}

// ------------------------------------------------------------------ backgrounds (400×260)
const sky = (a, b) => { const id = 'sk' + (a + b).replace(/[^0-9a-f]/gi, ''); return `<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="400" height="260" fill="url(#${id})"/>`; };
const palm = (x, y, s = 1, c = '#3a7a3a') => `<g transform="translate(${x} ${y}) scale(${s})">${path('M-3 0 Q-6 -60 4 -120 L9 -120 Q2 -60 4 0 Z', '#8a6a4a', INK, 1.6)}${[-60, -25, 15, 50, 85].map((a) => `<path d="M6 -120 q${f2(Math.cos((a * Math.PI) / 180) * 30)} -20 ${f2(Math.cos((a * Math.PI) / 180) * 55)} ${f2(-Math.sin((a * Math.PI) / 180) * 10 + 15)}" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"/>`).join('')}</g>`;
const house = (x, y, w, wall = '#f4e2c4', roof = '#c8603a') => rect(x, y - 50, w, 50, wall, 0) + path(`M${x - 8} ${y - 48} L${x + w / 2} ${y - 82} L${x + w + 8} ${y - 48} Z`, roof) + rect(x + w * 0.15, y - 36, w * 0.22, 18, '#a8d8f0', 1, INK, 1.6) + rect(x + w * 0.62, y - 34, w * 0.2, 34, '#8a5a3a', 1, INK, 1.6);
const bush = (x, y, s = 1, c = '#7a9a6a') => [0, 1, 2].map((i) => circ(x + (i - 1) * 14 * s, y - 8 * s - (i === 1 ? 6 * s : 0), 13 * s, c, INK, 1.6)).join('');
const stars = (n, seed = 3) => { let s = '', x = seed; for (let i = 0; i < n; i++) { x = (x * 9301 + 49297) % 233280; const px = (x / 233280) * 400; x = (x * 9301 + 49297) % 233280; const py = (x / 233280) * 130; s += circ(px, py, i % 5 ? 0.9 : 1.6, '#fff', 'none', 0, `opacity="${i % 3 ? 0.6 : 1}"`); } return s; };
const floorTiles = (y, c1, c2) => rect(0, y, 400, 260 - y, c1, 0, 'none', 0) + Array.from({ length: 9 }, (_, i) => ln([[i * 50, y], [i * 50 - 40, 260]], c2, 1.5)).join('');
const kids = (y) => [[60, '#2a8ae8'], [90, '#f0c020'], [330, '#d83a3a'], [360, '#8a4ad0']].map(([x, c]) => rect(x - 7, y - 22, 14, 18, c, 4, INK, 1.4) + circ(x, y - 30, 8, '#e8c0a0', INK, 1.4)).join('');

export const BG = {
  white: () => '<rect width="400" height="260" fill="#fffdf6"/>',
  black: () => '<rect width="400" height="260" fill="#0e0c14"/>',
  speed: (o) => `<rect width="400" height="260" fill="${o.c || '#fff6d8'}"/>` + speedLines(200, 130, '#1d1a24', 0.5),
  street: () => sky('#7ac8ff', '#d8f0ff') + circ(340, 40, 22, '#fff2a0', '#ffd040', 3) + rect(0, 200, 400, 60, '#c8c0b0', 0, 'none', 0) + rect(0, 214, 400, 46, '#8a8a92', 0, 'none', 0) + ln([[0, 236], [400, 236]], '#f4f4f4', 2, 'stroke-dasharray="18 14"') +
    house(20, 200, 110) + house(170, 200, 90, '#f8ead8', '#b8502a') + house(290, 200, 100, '#efe0c8') + palm(150, 202, 1) + palm(285, 204, 0.85) + bush(70, 202, 0.8) + bush(250, 202, 0.7),
  bedroom: (o) => rect(0, 0, 400, 260, o.night ? '#2a3a6a' : '#cfe4f8', 0, 'none', 0) + floorTiles(205, o.night ? '#3a3050' : '#c8a07a', o.night ? '#2a2440' : '#a8805a') +
    rect(250, 40, 90, 70, o.night ? '#0e1430' : '#bfe8ff', 2) + (o.night ? circ(310, 64, 12, '#fff8c0', 'none', 0) + stars(10, 7).replace(/<circle/g, '<circle transform="translate(250 40) scale(.22)"') : circ(320, 60, 10, '#fff2a0', 'none', 0)) + ln([[295, 40], [295, 110]], INK, 2) + ln([[250, 75], [340, 75]], INK, 2) +
    rect(20, 70, 150, 12, '#8a5a3a', 2) + rect(20, 140, 150, 12, '#8a5a3a', 2) + rect(20, 62, 10, 150, '#8a5a3a', 2) + rect(160, 62, 10, 150, '#8a5a3a', 2) + rect(30, 120, 130, 20, o.night ? '#5a5aa8' : '#7aa8f0', 6) + rect(30, 190, 130, 20, o.night ? '#a85a5a' : '#f08a6a', 6) +
    rect(200, 50, 32, 42, '#ffd84a', 2) + path(starPath(216, 71, 10, 4), '#fff', INK, 1.2) + (o.night ? circ(372, 196, 8, '#ffe8a0', 'none', 0, 'filter="url(#glow)"') : ''),
  kitchen: () => rect(0, 0, 400, 260, '#fbe8c0', 0, 'none', 0) + floorTiles(200, '#e8d4b4', '#c8b494') + rect(150, 30, 100, 75, '#bfe8ff', 3) + circ(225, 50, 12, '#fff2a0', 'none', 0) + ln([[200, 30], [200, 105]], INK, 2) +
    rect(10, 20, 120, 50, '#f4f4f4', 3) + ln([[70, 20], [70, 70]], INK, 1.6) + rect(270, 20, 120, 50, '#f4f4f4', 3) + ln([[330, 20], [330, 70]], INK, 1.6) +
    rect(10, 130, 150, 75, '#f4f4f4', 3) + rect(10, 124, 150, 8, '#8a8a92', 1) + rect(40, 108, 50, 16, '#3a3a40', 3) + rect(300, 90, 80, 115, '#e8eef4', 6) + ln([[300, 140], [380, 140]], INK, 1.8) + rect(366, 104, 4, 26, '#9aa', 1, INK, 1) + rect(220, 140, 70, 65, '#f4f4f4', 3),
  living: (o) => rect(0, 0, 400, 260, o.dark ? '#1a2240' : '#f4e8d8', 0, 'none', 0) + floorTiles(196, o.dark ? '#141830' : '#b8946a', o.dark ? '#0e1226' : '#9a7a54') +
    rect(260, 30, 120, 90, o.dark ? '#070a18' : '#bfe8ff', 3) + (o.dark ? `<g transform="translate(260 30)">${stars(14, 11).replace(/<circle /g, '<circle transform="scale(.3)" ')}</g>` + path('M260 96 Q300 76 340 92 Q360 86 380 96 L380 120 L260 120 Z', '#0e1426', 'none', 0) : path('M260 100 Q300 80 340 96 Q360 90 380 98 L380 120 L260 120 Z', '#9ab87a', 'none', 0)) + ln([[320, 30], [320, 120]], INK, 2) +
    rect(30, 120, 170, 60, o.dark ? '#3a3a6a' : '#d86a4a', 12) + rect(22, 104, 30, 76, o.dark ? '#33335e' : '#c85a3a', 10) + rect(178, 104, 30, 76, o.dark ? '#33335e' : '#c85a3a', 10) + rect(60, 112, 50, 30, o.dark ? '#4a4a7a' : '#f0a07a', 8) + rect(116, 112, 50, 30, o.dark ? '#4a4a7a' : '#f0a07a', 8) +
    rect(110, 200, 120, 14, o.dark ? '#3a2a20' : '#8a5a3a', 3) + rect(118, 212, 8, 26, o.dark ? '#3a2a20' : '#8a5a3a', 1) + rect(214, 212, 8, 26, o.dark ? '#3a2a20' : '#8a5a3a', 1) +
    rect(232, 150, 16, 46, o.dark ? '#3a3020' : '#c86a3a', 3) + bush(240, 150, 0.9, o.dark ? '#2a3a2a' : '#4a9a4a') + rect(330, 150, 56, 46, o.dark ? '#22222c' : '#3a3a44', 3) + rect(334, 154, 48, 30, o.dark ? '#111' : '#6a7a9a', 1, 'none', 0) + rect(10, 186, 50, 30, o.dark ? '#3a3050' : '#f0c040', 4),
  school: () => sky('#8ad0ff', '#e8f6ff') + path('M0 150 Q80 120 160 140 Q260 110 400 140 L400 200 L0 200 Z', '#c8b888', INK, 1.6) + rect(0, 200, 400, 60, '#c8c0b0', 0, 'none', 0) +
    rect(30, 110, 300, 92, '#f4e2c0', 0) + path('M20 112 L340 112 L330 96 L30 96 Z', '#c8603a') + [50, 110, 230, 290].map((x) => rect(x, 130, 34, 26, '#a8d8f0', 2, INK, 1.6)).join('') + rect(160, 140, 46, 62, '#3a6aa8', 3) +
    rect(84, 64, 192, 30, '#1a5a3a', 4) + `<text x="180" y="85" text-anchor="middle" font-family="Bangers, Impact, sans-serif" font-size="17" letter-spacing="1" fill="#fff">SAGE CANYON ELEMENTARY</text>` +
    rect(356, 60, 4, 142, '#bbb', 1, INK, 1.2) + path('M360 62 L392 62 L392 84 L360 84 Z', '#fff', INK, 1.4) + rect(360, 62, 14, 11, '#3a5aa8', 0, 'none', 0) + [0, 1, 2].map((i) => ln([[374, 65 + i * 6], [392, 65 + i * 6]], '#d83a3a', 2)).join('') + palm(372, 204, 0.9) + kids(214),
  classroom: () => rect(0, 0, 400, 260, '#eaf2e4', 0, 'none', 0) + floorTiles(200, '#d8c8a8', '#b8a888') + rect(40, 30, 200, 90, '#fff', 3) + `<text x="140" y="70" text-anchor="middle" font-family="'Comic Neue', 'Huninn', sans-serif" font-size="16" fill="#2a6ad8">Welcome, 4th Grade!</text>` + path('M60 92 q20 -10 40 0 t40 0 t40 0', 'none', '#e85a5a', 2) +
    rect(270, 30, 110, 80, '#bfe8ff', 3) + ln([[325, 30], [325, 110]], INK, 2) + rect(10, 120, 14, 80, '#c8a07a', 1) + [0, 1, 2].map((i) => rect(250 + i * 40, 150, 34, 8, '#f0c060', 1, INK, 1.4) + rect(254 + i * 40, 158, 4, 30, '#888', 0, INK, 1)).join(''),
  lunch: () => sky('#8ad0ff', '#e8f6ff') + path('M0 130 Q100 100 200 125 Q300 95 400 125 L400 200 L0 200 Z', '#b8a878', INK, 1.6) + rect(0, 190, 400, 70, '#d8d0c0', 0, 'none', 0) +
    path('M10 60 L390 60 L370 90 L30 90 Z', '#2a7ad8') + [30, 200, 370].map((x) => rect(x - 3, 88, 6, 104, '#ddd', 1, INK, 1.2)).join('') + palm(390, 192, 0.7),
  office: () => rect(0, 0, 400, 260, '#dcdcd8', 0, 'none', 0) + floorTiles(200, '#b8b8b0', '#9a9a92') + [20, 150, 280].map((x) => rect(x, 120, 100, 60, '#c8c8c0', 2) + rect(x + 30, 92, 40, 30, '#3a3a44', 2) + rect(x + 34, 96, 32, 22, '#9ac8e8', 1, 'none', 0)).join('') + rect(0, 30, 400, 20, '#efefea', 0, INK, 1.4),
  canyon: () => sky('#7ac0f0', '#f8f0d8') + path('M0 120 Q60 70 130 100 Q200 60 270 95 Q340 70 400 100 L400 200 L0 200 Z', '#c8a878', INK, 1.8) + path('M0 160 Q100 130 200 155 Q300 130 400 150 L400 260 L0 260 Z', '#d8c08a', INK, 1.8) +
    path('M150 260 Q190 200 230 180 Q260 170 300 168', 'none', '#e8d8a8', 14) + bush(40, 200) + bush(120, 230, 1.2) + bush(330, 215) + bush(380, 245, 1.1) + bush(250, 175, 0.7),
  canyonNight: () => sky('#0a1030', '#1e2a5a') + stars(40) + circ(330, 46, 18, '#fff6c8', 'none', 0, 'filter="url(#glow)"') + path('M0 120 Q60 70 130 100 Q200 60 270 95 Q340 70 400 100 L400 200 L0 200 Z', '#1a2040', '#0a0c18', 1.8) +
    path('M0 160 Q100 130 200 155 Q300 130 400 150 L400 260 L0 260 Z', '#222a48', '#0a0c18', 1.8) + bush(40, 200, 1, '#141a30') + bush(120, 232, 1.2, '#141a30') + bush(330, 215, 1, '#141a30') + bush(380, 248, 1.1, '#141a30'),
  garage: () => rect(0, 0, 400, 260, '#9aa2ac', 0, 'none', 0) + floorTiles(200, '#7a8088', '#5a6068') + rect(30, 30, 200, 80, '#c8a070', 2) + Array.from({ length: 30 }, (_, i) => circ(40 + (i % 10) * 19, 40 + Math.floor(i / 10) * 25, 1.5, '#7a5a3a', 'none', 0)).join('') +
    prop('wrench', 70, 90, {}) + rect(110, 50, 6, 40, '#c83a3a', 1, INK, 1.2) + circ(160, 70, 12, 'none', '#3a3a3a', 3) + rect(260, 0, 2, 40, INK, 0) + circ(261, 46, 8, '#fff8b0', INK, 1.6, 'filter="url(#glow)"') + rect(290, 110, 100, 90, '#5a6a8a', 3) + ln([[290, 140], [390, 140]], INK, 1.6) + ln([[290, 170], [390, 170]], INK, 1.6),
  gym: () => rect(0, 0, 400, 260, '#e8dcc0', 0, 'none', 0) + rect(0, 170, 400, 90, '#d8a868', 0, 'none', 0) + Array.from({ length: 12 }, (_, i) => ln([[i * 36, 170], [i * 36 - 30, 260]], '#b8884a', 1.4)).join('') +
    rect(60, 20, 280, 34, '#d83a3a', 3) + `<text x="200" y="45" text-anchor="middle" font-family="Bangers, Impact" font-size="22" letter-spacing="2" fill="#fff">SAN DIEGO JUNIOR ROBOT CUP</text>` +
    Array.from({ length: 22 }, (_, i) => circ(12 + i * 18, 100 + (i % 3) * 6, 9, ['#e85a5a', '#4a8ae8', '#f0c040', '#5ac85a', '#a85ad8'][i % 5], INK, 1.2) + circ(12 + i * 18, 84 + (i % 3) * 6, 6, '#e8c0a0', INK, 1.2)).join('') + rect(0, 112, 400, 24, '#8a6a4a', 0, INK, 1.6),
  arena: () => rect(0, 0, 400, 260, '#2a2a3a', 0, 'none', 0) + [0, 1, 2, 3].map((i) => circ(60 + i * 95, 0, 60, 'rgba(255,240,180,.12)', 'none', 0)).join('') + path('M20 150 L380 150 L400 260 L0 260 Z', '#4a5a6a', INK, 2) + path('M120 200 L190 170 L210 170 L280 200 Z', '#c8a040', INK, 2) + ln([[20, 150], [380, 150]], '#ffd040', 3),
  smoke: () => sky('#c85a2a', '#f0b060') + circ(300, 60, 26, '#ff7a3a', 'none', 0, 'opacity=".9"') + path('M0 130 Q120 90 220 120 Q320 90 400 120 L400 200 L0 200 Z', '#6a3a2a', INK, 1.6) + rect(0, 200, 400, 60, '#8a7a6a', 0, 'none', 0) +
    house(30, 200, 100, '#d8b890', '#8a3a2a') + house(260, 200, 110, '#d8b890', '#8a3a2a') + palm(180, 202, 1, '#3a3a2a') + path('M0 40 Q100 20 200 50 Q300 20 400 40 L400 0 L0 0 Z', 'rgba(60,30,20,.45)', 'none', 0),
  porch: () => rect(0, 0, 400, 260, '#e8c8a0', 0, 'none', 0) + rect(0, 0, 400, 260, 'rgba(200,90,30,.25)', 0, 'none', 0) + rect(40, 30, 160, 170, '#f4e2c4', 0) + rect(90, 80, 56, 120, '#6a3a2a', 3) + circ(136, 140, 3, '#ffd040', INK, 1) +
    rect(0, 196, 400, 18, '#a87a4a', 0) + rect(20, 214, 360, 46, '#3a2a20', 0) + [60, 140, 220, 300].map((x) => rect(x, 214, 8, 46, '#a87a4a', 0, INK, 1.4)).join('') + rect(240, 120, 30, 76, '#c86a3a', 3) + bush(255, 120, 1, '#5a8a4a') + rect(300, 60, 70, 60, '#a8d8f0', 2),
  carInside: () => sky('#a85a3a', '#e8a060') + path('M0 150 Q200 120 400 150 L400 260 L0 260 Z', '#5a4a40', 'none', 0) + path('M150 260 L190 150 L210 150 L250 260 Z', '#3a3a40', 'none', 0) + path('M0 0 L400 0 L400 40 Q200 20 0 40 Z', '#1a1a22', 'none', 0) +
    rect(0, 200, 400, 60, '#2a2a32', 0) + path('M0 200 Q200 180 400 200', 'none', INK, 3) + [80, 320].map((x) => ell(x, 140, 10, 5, '#ff3a3a', 'none', 0, 'filter="url(#glow)" opacity=".8"')).join(''),
  shelter: () => rect(0, 0, 400, 260, '#e0d8c8', 0, 'none', 0) + rect(0, 170, 400, 90, '#c89a5a', 0, 'none', 0) + rect(80, 20, 240, 30, '#2a6ad8', 3) + `<text x="200" y="42" text-anchor="middle" font-family="Bangers, Impact" font-size="18" letter-spacing="1" fill="#fff">EVACUATION CENTER · 避難中心</text>` +
    [[30, 190], [150, 200], [270, 190]].map(([x, y]) => rect(x, y, 100, 18, '#4a7a4a', 4) + rect(x + 6, y + 18, 4, 14, '#888', 0, INK, 1) + rect(x + 90, y + 18, 4, 14, '#888', 0, INK, 1)).join('') + rect(300, 120, 90, 40, '#f4f4f4', 2) + rect(312, 108, 20, 14, '#e8b040', 2, INK, 1.2) + rect(342, 104, 14, 18, '#4ab8e8', 2, INK, 1.2),
  hill: (o) => sky(o.burnt ? '#ff9a6a' : '#ff9a6a', '#ffe0a0') + circ(200, 150, 40, '#fff0b0', 'none', 0, 'filter="url(#glow)"') + path('M0 160 Q100 110 200 140 Q300 110 400 150 L400 260 L0 260 Z', o.burnt ? '#6a5a4a' : '#9a8a5a', INK, 1.8) +
    (o.burnt ? path('M220 140 Q300 112 400 150 L400 200 Q320 170 240 180 Z', '#2a2420', 'none', 0, 'opacity=".75"') : '') + path('M0 210 Q200 190 400 210 L400 260 L0 260 Z', '#b8a070', INK, 1.8) +
    [[20, 200, 50], [90, 196, 40], [300, 200, 46]].map(([x, y, w]) => house(x, y, w, '#f4e2c4', '#c8603a')).join(''),
  flashback: () => rect(0, 0, 400, 260, '#f0e4c8', 0, 'none', 0) + floorTiles(200, '#d8c8a8', '#c0b090') + [20, 150, 280].map((x) => rect(x, 120, 100, 60, '#c8c0b0', 2) + rect(x + 30, 92, 40, 30, '#5a5048', 2)).join(''),
};
export function speedLines(cx, cy, c = INK, op = 0.55) {
  let s = '';
  for (let i = 0; i < 64; i++) {
    const a = (i / 64) * Math.PI * 2 + (i % 3) * 0.02, r1 = 70 + (i % 5) * 18, r2 = 320;
    const w = 1.2 + (i % 4);
    s += `<path d="M${f2(cx + Math.cos(a) * r1)} ${f2(cy + Math.sin(a) * r1)} L${f2(cx + Math.cos(a + 0.012 * w) * r2)} ${f2(cy + Math.sin(a + 0.012 * w) * r2)} L${f2(cx + Math.cos(a - 0.012 * w) * r2)} ${f2(cy + Math.sin(a - 0.012 * w) * r2)} Z" fill="${c}" opacity="${op}"/>`;
  }
  return s;
}
// foregrounds drawn over the characters
export const FG = {
  table: () => rect(-10, 222, 420, 16, '#c8884a', 4) + rect(-10, 238, 420, 30, '#a86a3a', 0),
  lunchTable: () => rect(-10, 224, 420, 12, '#4a8ac8', 3) + rect(-10, 242, 420, 8, '#4a8ac8', 2) + rect(-10, 250, 420, 20, '#d8d0c0', 0, 'none', 0),
  bench: () => rect(-10, 220, 420, 14, '#c8884a', 3) + rect(-10, 234, 420, 30, '#c89a5a', 0, 'none', 0),
  bushes: () => bush(30, 262, 1.6, '#141a30') + bush(380, 262, 1.8, '#141a30') + bush(200, 275, 1.2, '#1a2238'),
  workbench: () => rect(-10, 200, 420, 16, '#8a5a3a', 3) + rect(-10, 216, 420, 50, '#6a4a2a', 0),
  seats: () => path('M-10 260 L-10 222 Q60 206 130 222 L130 260 Z', '#3a3a48', INK, 2) + path('M270 260 L270 222 Q340 206 410 222 L410 260 Z', '#3a3a48', INK, 2),
  cots: () => rect(-10, 222, 420, 16, '#4a7a4a', 4) + rect(-10, 238, 420, 30, '#c89a5a', 0, 'none', 0),
};
// effects over the whole panel
export const FX = {
  speed: () => speedLines(200, 130, INK, 0.35),
  dark: () => '<rect width="400" height="260" fill="url(#vig)"/>',
  night: () => '<rect width="400" height="260" fill="#0a1440" opacity=".35"/>',
  ash: () => Array.from({ length: 40 }, (_, i) => circ((i * 97) % 400, (i * 53) % 260, 1 + (i % 3), i % 2 ? '#fff' : '#ccc', 'none', 0, 'opacity=".75" class="ash"')).join(''),
  smoke: () => '<rect width="400" height="260" fill="#a85a2a" opacity=".22"/>',
  glow: (o) => circ(o.gx ?? 200, o.gy ?? 120, 70, 'url(#rg)', 'none', 0),
  hearts: () => [[60, 50], [340, 40], [300, 90], [90, 100]].map(([x, y]) => path(`M${x} ${y + 8} l-8 -8 a5 5 0 0 1 8 -6 a5 5 0 0 1 8 6 Z`, '#ff6a8a', INK, 1.4)).join(''),
  sparkle: () => [[50, 40], [350, 50], [320, 120], [80, 110], [200, 30]].map(([x, y]) => path(starPath(x, y, 9, 3), '#fff6a0', INK, 1.2)).join(''),
  lightning: () => path('M300 0 L270 70 L292 70 L250 150 L300 60 L278 60 L310 0 Z', '#fff6a0', INK, 1.6),
  sweat: () => '',
};
export const DEFS = `<defs>
  <filter id="glow" x="-1" y="-1" width="3" height="3"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <radialGradient id="vig" cx=".5" cy=".5" r=".7"><stop offset=".45" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".85"/></radialGradient>
  <radialGradient id="rg"><stop offset="0" stop-color="#bff4ff" stop-opacity=".95"/><stop offset="1" stop-color="#4ac8ff" stop-opacity="0"/></radialGradient>
  <linearGradient id="beam" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff8c0" stop-opacity=".9"/><stop offset="1" stop-color="#fff8c0" stop-opacity="0"/></linearGradient>
  <filter id="hand" x="-2%" y="-2%" width="104%" height="104%"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="7" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="3.4" xChannelSelector="R" yChannelSelector="G"/></filter>
  <filter id="grain" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="3" stitchTiles="stitch"/><feColorMatrix type="matrix" values="0 0 0 0 0.35  0 0 0 0 0.3  0 0 0 0 0.25  0 0 0 -1.6 1.05"/></filter>
</defs>`;

// a character placed in the scene: [who, x%, expression, pose, {s, y, f, prop, ...}]
export function placeChar([who, x, e, p, o = {}]) {
  const k = CAST[who]; if (!k) return '';
  const opts = { ...o, e, p };
  const inner = k.draw ? k.draw(opts) : human(k, opts);
  const s = o.s || 1, y = o.y ?? 248, flip = o.f ? -1 : 1;
  return `<g transform="translate(${f2(x * 4)} ${y}) scale(${f2(s * flip)} ${f2(s)})">${inner}</g>`;
}
export function scene(panel) {
  const bgFn = BG[panel.bg] || BG.white;
  let s = bgFn(panel.bo || {});
  for (const c of panel.c || []) s += placeChar(c);
  if (panel.fg) s += (FG[panel.fg] || (() => ''))();
  for (const f of panel.fx || []) s += (FX[f] || (() => ''))(panel);
  // Dog Man style: wobbly marker lines, then a coloured-pencil grain on top
  return DEFS + `<g filter="url(#hand)">${s}</g><rect width="400" height="260" filter="url(#grain)" opacity=".55" style="mix-blend-mode:multiply" pointer-events="none"/>`;
}
export const knownBg = (b) => b in BG;
export const knownChar = (c) => c in CAST;
