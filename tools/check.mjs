// Checks every chapter: links, art names, text in both languages, flags, and that every path through the
// story (every choice and every bag combination) reaches an ending with something to show on every page.
import { CAST, BG, FG, FX } from '../js/art.js';
import ch1 from '../js/story/ch1.js';
import ch2 from '../js/story/ch2.js';
import ch3 from '../js/story/ch3.js';
import ch4 from '../js/story/ch4.js';

const CHAPTERS = [ch1, ch2, ch3, ch4];
const EXPR = new Set(['', 'normal', 'happy', 'grin', 'surprised', 'shock', 'scared', 'sad', 'cry', 'angry', 'determined', 'smug', 'worried', 'sleepy', 'love', 'think', 'eat', 'broken']);
const POSE = new Set(['', 'stand', 'wave', 'point', 'cheer', 'run', 'scared', 'hold', 'think', 'hips', 'fist', 'shrug', 'sad', 'reach', 'sit', 'hug', 'carry']);
const KINDS = new Set([undefined, 'say', 'shout', 'think', 'whisper', 'scared', 'off']);
let fail = 0; const problems = [];
const bad = (m) => { fail++; if (problems.length < 40) problems.push(m); };
const two = (a, where) => { if (!Array.isArray(a) || a.length !== 2 || !a[0] || !a[1]) bad(`${where}: needs [zh, en] text`); };
const cond = (c, f) => !c || [].concat(c).every((x) => (x[0] === '!' ? !f[x.slice(1)] : !!f[x]));

let panels = 0, words = 0, endings = 0, paths = 0;
for (const ch of CHAPTERS) {
  const P = ch.pages, W = (m) => `${ch.id}: ${m}`;
  two(ch.title, W('title')); two(ch.blurb, W('blurb'));
  if (!P[ch.start]) bad(W('start page missing'));
  const flagsSet = new Set();
  for (const p of Object.values(P)) {
    for (const o of p.choice?.opts || []) for (const f of [].concat(o.set || [])) flagsSet.add(f);
    if (p.mini === 'pack') for (const it of p.items) flagsSet.add('item_' + it.id);
  }
  const checkPanel = (pn, where) => {
    panels++;
    if (!BG[pn.bg]) bad(`${where}: unknown background ${pn.bg}`);
    if (pn.fg && !FG[pn.fg]) bad(`${where}: unknown foreground ${pn.fg}`);
    for (const f of pn.fx || []) if (!FX[f]) bad(`${where}: unknown effect ${f}`);
    for (const c of pn.c || []) {
      if (!CAST[c[0]]) bad(`${where}: unknown character ${c[0]}`);
      if (!EXPR.has(c[2] ?? '')) bad(`${where}: unknown expression ${c[2]}`);
      if (!POSE.has(c[3] ?? '')) bad(`${where}: unknown pose ${c[3]}`);
      if (c[1] < 0 || c[1] > 100) bad(`${where}: ${c[0]} off the panel`);
    }
    if (pn.cap) two(pn.cap, where + ' caption');
    if (pn.sfx) { if (!pn.sfx[0] || !pn.sfx[1]) bad(`${where}: sfx text`); }
    for (const b of pn.s || []) {
      const o = Array.isArray(b) ? { w: b[0], t: [b[1], b[2]], k: b[3], at: b[4] } : b;
      two(o.t, where + ' bubble'); words += (o.t[1] || '').split(/\s+/).length;
      if (!KINDS.has(o.k)) bad(`${where}: unknown bubble kind ${o.k}`);
      if (o.k !== 'off' && !o.at && !(pn.c || []).some((c) => c[0] === o.w)) bad(`${where}: ${o.w} speaks but is not in the panel`);
      for (const f of [].concat(o.if || [])) if (!flagsSet.has(f.replace('!', ''))) bad(`${where}: flag ${f} is never set`);
    }
    for (const f of [].concat(pn.if || [])) if (!flagsSet.has(f.replace('!', ''))) bad(`${where}: flag ${f} is never set`);
  };
  for (const [id, p] of Object.entries(P)) {
    const where = W(id);
    const links = [p.next, ...(p.choice?.opts || []).map((o) => o.go)].filter(Boolean);
    for (const l of links) if (!P[l]) bad(`${where}: links to missing page ${l}`);
    if (!p.next && !p.choice && !p.end) bad(`${where}: dead end`);
    if (p.mini) {
      if (p.cap) two(p.cap, where + ' caption');
      if (p.bg && !BG[p.bg]) bad(`${where}: unknown background ${p.bg}`);
      for (const c of p.c || []) if (!CAST[c[0]]) bad(`${where}: unknown character ${c[0]}`);
      if (p.mini === 'find') { if (!p.spots.some((x) => x.win)) bad(`${where}: nothing to find`); p.spots.forEach((x) => two(x.t, where + ' spot')); }
      if (p.mini === 'flash') { if (!p.targets.some((x) => x.need)) bad(`${where}: no targets`); p.targets.forEach((x) => two(x.t, where + ' target')); }
      if (p.mini === 'wires') { const ids = new Set(p.wires.map((w) => w.id)); for (const pt of p.ports) if (!ids.has(pt.want)) bad(`${where}: port ${pt.id} wants a missing wire`); two(p.clue, where + ' clue'); }
      if (p.mini === 'pack') { if (p.items.length < p.pick) bad(`${where}: not enough items`); p.items.forEach((x) => two(x.t, where + ' item')); }
    } else (p.panels || []).forEach((pn, i) => checkPanel(pn, `${where} panel ${i + 1}`));
    if (p.choice) { if (p.choice.q) two(p.choice.q, where + ' question'); p.choice.opts.forEach((o) => two(o.t, where + ' option')); }
    if (p.end) { endings += 1 + (p.end.alt || []).length; two(p.end.title, where + ' ending'); two(p.end.text, where + ' ending text'); for (const a of p.end.alt || []) { two(a.title, where + ' alt ending'); two(a.text, where + ' alt ending text'); } }
  }
  // every path: walk the story with every choice and every bag combination
  const reached = new Set(), endsSeen = new Set();
  const combos = (arr, k) => (k === 0 ? [[]] : arr.flatMap((x, i) => combos(arr.slice(i + 1), k - 1).map((r) => [x, ...r])));
  const walk = (id, flags, depth) => {
    if (depth > 80) { bad(W(`a path loops at ${id}`)); return; }
    reached.add(id);
    const p = P[id];
    if (!p.mini && !(p.panels || []).some((pn) => cond(pn.if, flags))) bad(W(`${id} shows no panels with flags ${Object.keys(flags).join(',')}`));
    if (p.mini === 'pack') { for (const pick of combos(p.items.map((x) => x.id), p.pick)) { const f = { ...flags }; for (const x of pick) f['item_' + x] = true; walk(p.next, f, depth + 1); } return; }
    if (p.choice) { for (const o of p.choice.opts.filter((x) => cond(x.if, flags))) { const f = { ...flags }; for (const s of [].concat(o.set || [])) f[s] = true; walk(o.go, f, depth + 1); } return; }
    if (p.next) return walk(p.next, flags, depth + 1);
    if (p.end) { paths++; endsSeen.add(((p.end.alt || []).find((v) => cond(v.if, flags)) || p.end).id); }
  };
  walk(ch.start, {}, 0);
  for (const id of Object.keys(P)) if (!reached.has(id)) bad(W(`page ${id} can never be reached`));
  const allEnds = new Set(Object.values(P).flatMap((p) => (p.end ? [p.end.id, ...(p.end.alt || []).map((a) => a.id)] : [])));
  for (const e of allEnds) if (!endsSeen.has(e)) bad(W(`ending ${e} can never be reached`));
  console.log(`ok   ${ch.id} ${ch.title[1]}: ${Object.keys(P).length} pages, ${allEnds.size} endings, all reachable`);
}
console.log(`     ${CHAPTERS.length} chapters, ${panels} panels, ~${words} English words in bubbles, ${endings} endings, ${paths} distinct paths checked`);
if (fail) { console.log(problems.join('\n')); console.log(`${fail} PROBLEMS`); process.exit(1); }
console.log('all passed');
