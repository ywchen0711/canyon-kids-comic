// Canyon Kids: the reader — title, chapter list, panel-by-panel reading, speech bubbles, choices and flags,
// the interactive mini scenes (find, flashlight, wires, pack), endings, and saving progress.
import { scene, CAST } from './art.js?v=2';
import { t, T2, getLang, setLang } from './i18n.js?v=1';
import ch1 from './story/ch1.js?v=1';
import ch2 from './story/ch2.js?v=1';
import ch3 from './story/ch3.js?v=1';
import ch4 from './story/ch4.js?v=1';

export const CHAPTERS = [ch1, ch2, ch3, ch4];
const $ = (s, el = document) => el.querySelector(s);
const app = $('#app');
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const btn = (label, fn, cls = '') => { const b = el('button', 'btn ' + cls, label); b.onclick = (e) => { e.stopPropagation(); fn(e); }; return b; };
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const hubBtn = (show) => { const h = document.getElementById('hub-back'); if (h) h.style.display = show ? '' : 'none'; };
const svgOf = (panel, fit = 'xMidYMid slice') => `<svg viewBox="0 0 400 260" preserveAspectRatio="${fit}" aria-hidden="true">${scene(panel)}</svg>`;

// ------------------------------------------------------------------ saving
const SAVE = 'ck.save.v1';
let S = load(), cloud = null;
function load() { try { const s = JSON.parse(localStorage.getItem(SAVE)); return s && s.ch ? s : { ch: {} }; } catch (e) { return { ch: {} }; } }
function save() { try { localStorage.setItem(SAVE, JSON.stringify(S)); } catch (e) { /* private mode */ } if (cloud) cloud.touch('canyon-kids', SAVE); }
import('/save.js').then(async (m) => { cloud = m; if (await m.pull('canyon-kids', SAVE)) { S = load(); if (!R) list(); } }).catch(() => {});
const st = (id) => (S.ch[id] ||= { page: null, flags: {}, hist: [], done: false, endings: [] });

// ------------------------------------------------------------------ conditions
function cond(c, flags) {
  if (!c) return true;
  return [].concat(c).every((x) => (x[0] === '!' ? !flags[x.slice(1)] : !!flags[x]));
}
const setFlags = (flags, s) => { for (const x of [].concat(s || [])) flags[x] = true; };

// ------------------------------------------------------------------ title and chapter list
function title() {
  R = null; hubBtn(true);
  const box = el('div', 'title');
  const hero = { bg: 'street', c: [['jeff', 30, 'happy', 'wave'], ['erin', 44, 'happy', 'stand'], ['josh', 60, 'grin', 'cheer'], ['jasper', 73, 'grin', 'wave'], ['car', 92, 'normal', 'stand', { s: 0.8, f: true }]] };
  box.innerHTML = `<div class="tart">${svgOf(hero)}</div><h1><span>${t('title')}</span><small>${t('sub')}</small></h1>`;
  const row = el('div', 'row');
  row.appendChild(btn('📖 ' + t('start'), list, 'big a'));
  row.appendChild(btn('🌐 ' + t('lang'), () => { setLang(getLang() === 'zh' ? 'en' : 'zh'); applyLang(); title(); }, 'ghost'));
  box.appendChild(row);
  box.appendChild(el('p', 'fine', t('fiction')));
  app.replaceChildren(box);
}
function list() {
  R = null; hubBtn(true);
  const box = el('div', 'list');
  const top = el('div', 'listtop');
  top.appendChild(btn('‹ ' + t('back'), title, 'ghost'));
  top.appendChild(el('h2', '', `${t('title')} · ${t('chapters')}`));
  top.appendChild(btn('🌐 ' + t('lang'), () => { setLang(getLang() === 'zh' ? 'en' : 'zh'); applyLang(); list(); }, 'ghost'));
  box.appendChild(top);
  const grid = el('div', 'chgrid');
  CHAPTERS.forEach((ch, i) => {
    const s = st(ch.id), allEnds = endingIds(ch);
    const card = el('div', `chcard tone-${ch.tone}`);
    card.innerHTML = `<div class="cover">${svgOf(ch.cover)}<span class="tone">${t('tone_' + ch.tone)}</span>${s.done ? `<span class="stamp">✓ ${t('done')}</span>` : ''}</div>
      <div class="chinfo"><small>${t('chapter', { n: ch.no })}</small><h3>${esc(T2(ch.title))}</h3><p>${esc(T2(ch.blurb))}</p>
      <small class="ends">${t('endings', { a: s.endings.length, b: allEnds.length })}</small></div>`;
    const row = el('div', 'row');
    if (s.page && !s.done) { row.appendChild(btn('▶ ' + t('cont'), () => openChapter(ch, false), 'a')); row.appendChild(btn(t('resume'), () => openChapter(ch, true), 'ghost')); }
    else row.appendChild(btn(s.done ? '↺ ' + t('again') : '▶ ' + t('read'), () => openChapter(ch, true), s.done ? 'b' : 'a'));
    card.appendChild(row);
    card.onclick = () => openChapter(ch, !(s.page && !s.done));
    grid.appendChild(card);
  });
  box.appendChild(grid);
  box.appendChild(el('p', 'fine', t('fiction')));
  app.replaceChildren(box);
}
function endingIds(ch) {
  const ids = new Set();
  for (const p of Object.values(ch.pages)) if (p.end) { ids.add(p.end.id); for (const v of p.end.alt || []) ids.add(v.id); }
  return [...ids];
}

// ------------------------------------------------------------------ reading
let R = null;   // { ch, s, page, shown, panels }
function openChapter(ch, fresh) {
  const s = st(ch.id);
  if (fresh || !s.page || !ch.pages[s.page]) { s.page = ch.start; s.flags = {}; s.hist = []; }
  R = { ch, s }; hubBtn(false); save(); showPage(false);
}
function go(id) {
  R.s.hist.push({ page: R.s.page, flags: { ...R.s.flags } });
  if (R.s.hist.length > 60) R.s.hist.shift();
  R.s.page = id; save(); showPage(false);
}
function back() {
  const h = R.s.hist.pop(); if (!h) { list(); return; }
  R.s.page = h.page; R.s.flags = h.flags; save(); showPage(true);
}
function showPage(allShown) {
  const { ch, s } = R, page = ch.pages[s.page];
  const box = el('div', 'reader tone-' + ch.tone);
  const bar = el('div', 'rbar');
  bar.appendChild(btn('☰', list, 'ghost sm'));
  bar.appendChild(btn('‹', back, 'ghost sm'));
  bar.appendChild(el('div', 'rtitle', `${t('chapter', { n: ch.no })} · ${esc(T2(ch.title))}`));
  bar.appendChild(btn('🌐', () => { setLang(getLang() === 'zh' ? 'en' : 'zh'); applyLang(); showPage(true); }, 'ghost sm'));
  box.appendChild(bar);
  const sheet = el('div', 'sheet');
  box.appendChild(sheet);
  app.replaceChildren(box);
  window.scrollTo(0, 0);
  if (page.mini) { MINI[page.mini](sheet, page); return; }
  const panels = (page.panels || []).filter((p) => cond(p.if, s.flags));
  const grid = el('div', 'page n' + panels.length);
  panels.forEach((p, i) => grid.appendChild(panelEl(p, i, panels.length)));
  sheet.appendChild(grid);
  const after = el('div', 'after');
  sheet.appendChild(after);
  R.panels = [...grid.children]; R.shown = 0; R.after = after; R.pageObj = page; R.ended = false; R.choosing = false;
  const token = R.token = {};
  const relayout = () => { if (R && R.token === token) R.panels.forEach(layoutBubbles); };
  relayout(); requestAnimationFrame(relayout); if (document.fonts) document.fonts.ready.then(relayout);
  if (allShown) { while (R.shown < R.panels.length) reveal(); finishPage(); }
  else { reveal(); if (R.shown === R.panels.length) finishPage(); }
  box.onclick = (e) => { if (e.target.closest('button, .choice')) return; advance(); };
}
function panelEl(p, i, n) {
  const wide = p.w != null ? !!p.w : n === 1 || (n % 2 === 1 && i === 0);
  const d = el('div', `panel pending${wide ? ' wide' : ''}${p.filter ? ' f-' + p.filter : ''}${p.shake ? ' shake' : ''}`);
  const cast = (p.c || []).filter((c) => cond(c[4]?.if, R.s.flags));
  d.innerHTML = svgOf({ ...p, c: cast });
  d.dataset.heads = JSON.stringify(cast.map(headOf));
  if (p.cap) d.appendChild(el('div', 'cap', esc(T2(p.cap))));
  for (const b of p.s || []) {
    const o = Array.isArray(b) ? { w: b[0], t: [b[1], b[2]], k: b[3], at: b[4] } : b;
    if (!cond(o.if, R.s.flags)) continue;
    const who = cast.findIndex((c) => c[0] === o.w);
    const bub = el('div', `bub k-${o.k || 'say'}`, esc(T2(o.t)).replace(/\n/g, '<br>'));
    if (who >= 0 && o.k !== 'off') { bub.dataset.sx = Math.max(3, Math.min(97, cast[who][1])); bub.dataset.who = who; }
    if (o.at) { bub.dataset.ax = o.at[0]; bub.dataset.ay = o.at[1]; }
    d.appendChild(bub);
  }
  if (p.sfx) { const [z, e, x = 70, y = 20, r = -8, c = '#ffd030'] = p.sfx; const f = el('div', 'sfx', esc(getLang() === 'zh' ? z : e)); f.style.cssText = `left:${x}%;top:${y}%;--r:${r}deg;--c:${c}`; d.appendChild(f); }
  return d;
}
// where a character's head is, in scene units (speech bubbles try not to cover faces); null for animals and machines
function headOf(c) {
  const k = CAST[c[0]], o = c[4] || {}, s = o.s || 1, y = o.y ?? 248;
  if (!k || k.draw) return null;
  const avail = k.H - 1.95 * k.r, L = avail * 0.46, T = avail * 0.54;
  const hy = -L - T - 0.9 * k.r + (c[3] === 'sit' ? L * 0.45 : 0);
  return { x: c[1] * 4, y: y + hy * s, r: k.r * s * 1.25 };
}
// place each bubble near its speaker: above the head, at the top of the panel, or beside the head — whichever
// covers the fewest faces and other bubbles
function layoutBubbles(panel) {
  const pw = panel.clientWidth, ph = panel.clientHeight; if (!pw) return;
  const sc = Math.max(pw / 400, ph / 260), ox = (pw - 400 * sc) / 2, oy = (ph - 260 * sc) / 2;   // 'xMidYMid slice'
  const heads = JSON.parse(panel.dataset.heads || '[]').map((h) => (h ? { x: ox + h.x * sc, y: oy + h.y * sc, r: h.r * sc } : null));
  const faces = heads.filter(Boolean).map((h) => ({ l: h.x - h.r * 0.8, r: h.x + h.r * 0.8, t: h.y - h.r * 0.7, b: h.y + h.r * 0.8 }));
  const cap = $('.cap', panel), placed = [];
  let base = 6;
  if (cap) { base = cap.offsetHeight + 6; placed.push({ l: 0, r: cap.offsetWidth, t: 0, b: cap.offsetHeight }); }
  const over = (a, q) => Math.max(0, Math.min(a.r, q.r) - Math.max(a.l, q.l)) * Math.max(0, Math.min(a.b, q.b) - Math.max(a.t, q.t));
  for (const b of panel.querySelectorAll('.bub')) {
    b.style.left = '0px'; b.style.top = '0px';
    const w = b.offsetWidth, h = b.offsetHeight;
    const box = (l, t) => { l = Math.max(4, Math.min(pw - w - 4, l)); t = Math.max(base, Math.min(ph - h - 4, t)); return { l, t, r: l + w, b: t + h }; };
    let best;
    if (b.dataset.ax) best = box((pw * b.dataset.ax) / 100 - w / 2, (ph * b.dataset.ay) / 100);
    else {
      const hd = (b.dataset.who && heads[b.dataset.who]) || { x: b.dataset.sx ? (pw * b.dataset.sx) / 100 : pw / 2, y: ph * 0.55, r: 0 };
      const cands = [box(hd.x - w / 2, hd.y - hd.r - 14 - h)];
      for (let dy = 0; dy < ph; dy += 8) cands.push(box(hd.x - w / 2, base + dy));
      cands.push(box(hd.x - hd.r - 10 - w, hd.y - hd.r - h * 0.4), box(hd.x + hd.r + 10, hd.y - hd.r - h * 0.4), box(hd.x - w * 0.85, base), box(hd.x - w * 0.15, base));
      let bestScore = Infinity;
      cands.forEach((c, i) => {
        const score = placed.reduce((a, q) => a + over(c, q) * 4, 0) + faces.reduce((a, q) => a + over(c, q) * 3, 0) + Math.abs(c.l + w / 2 - hd.x) * 0.6 + Math.max(0, c.t - (hd.y - hd.r)) * 1.5 + i * 0.5;
        if (score < bestScore) { bestScore = score; best = c; }
      });
    }
    b.style.left = best.l + 'px'; b.style.top = best.t + 'px';
    placed.push(best);
    if (b.dataset.sx) {
      const hx = b.dataset.who && heads[b.dataset.who] ? heads[b.dataset.who].x : (pw * b.dataset.sx) / 100;
      b.style.setProperty('--tx', Math.max(14, Math.min(w - 14, hx - best.l)) + 'px');
      b.classList.toggle('notail', hx < best.l - 6 || hx > best.r + 6);
    } else b.classList.add('notail');
  }
}
function reveal() {
  const p = R.panels[R.shown++]; if (!p) return;
  p.classList.remove('pending'); p.classList.add('shown');
  if (R.shown > 1 && window.innerWidth < 700) p.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
function advance() {
  if (!R || R.choosing) return;
  if (R.shown < R.panels.length) { reveal(); if (R.shown === R.panels.length) finishPage(); return; }
  const page = R.pageObj;
  if (page.next) return go(page.next);
  if (page.end && !R.ended) return endCard(page.end);
}
function finishPage() {
  const page = R.pageObj, a = R.after; a.innerHTML = '';
  if (page.choice) {
    R.choosing = true;
    const c = el('div', 'choice');
    c.appendChild(el('div', 'q', esc(T2(page.choice.q) || t('choose'))));
    for (const o of page.choice.opts.filter((x) => cond(x.if, R.s.flags))) c.appendChild(btn(esc(T2(o.t)), () => { R.choosing = false; setFlags(R.s.flags, o.set); go(o.go); }, 'opt'));
    a.appendChild(c);
    setTimeout(() => c.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 80);
  } else a.appendChild(el('div', 'tap', `${t('tapNext')} ▶`));
}
function endCard(end) {
  R.ended = true;
  const pick = (end.alt || []).find((v) => cond(v.if, R.s.flags)) || end;
  const s = R.s; s.done = true; if (!s.endings.includes(pick.id)) s.endings.push(pick.id); save();
  const ch = R.ch, idx = CHAPTERS.indexOf(ch), nextCh = CHAPTERS[idx + 1];
  const card = el('div', 'endcard');
  card.innerHTML = `<div class="theend">${t('theEnd', { n: ch.no })}</div><h3>${t('ending', { t: esc(T2(pick.title)) })}</h3><p>${esc(T2(pick.text))}</p>
    <small>${t('endings', { a: s.endings.length, b: endingIds(ch).length })}</small>`;
  const row = el('div', 'row');
  if (nextCh) row.appendChild(btn(t('nextCh'), () => openChapter(nextCh, !(st(nextCh.id).page && !st(nextCh.id).done)), 'a big'));
  row.appendChild(btn(t('replay'), () => openChapter(ch, true), 'b'));
  row.appendChild(btn(t('toList'), list, 'ghost'));
  card.appendChild(row);
  R.after.innerHTML = ''; R.after.appendChild(card);
  setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'center' }), 80);
}

// ------------------------------------------------------------------ interactive scenes
function miniFrame(sheet, page, help) {
  const wrap = el('div', 'mini');
  if (page.cap || help) wrap.appendChild(el('div', 'minicap', esc(T2(page.cap)) + (help ? `<small>${help}</small>` : '')));
  const stage = el('div', 'stage');
  stage.innerHTML = `<svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid meet" aria-hidden="true">${scene(page)}</svg>`;
  wrap.appendChild(stage);
  const foot = el('div', 'minifoot'); wrap.appendChild(foot);
  sheet.appendChild(wrap);
  return { stage, foot };
}
function popAt(stage, x, y, text, good) {
  stage.querySelectorAll('.pop').forEach((p) => p.remove());
  const p = el('div', 'pop' + (good ? ' good' : ''), esc(text));
  p.style.left = Math.max(4, Math.min(62, x - 17)) + '%'; p.style.top = Math.max(2, y - 26) + '%';
  stage.appendChild(p);
}
const MINI = {
  // tap around the scene to find something
  find(sheet, page) {
    const { stage, foot } = miniFrame(sheet, page, t('findHelp'));
    let miss = 0, done = false;
    for (const sp of page.spots) {
      const b = el('button', 'spot' + (sp.win ? ' win' : ''));
      b.style.cssText = `left:${sp.x - sp.r}%;top:${sp.y - sp.r * 1.54}%;width:${sp.r * 2}%;height:${sp.r * 3.08}%`;
      b.onclick = (e) => {
        e.stopPropagation(); if (done) return;
        popAt(stage, sp.x, sp.y, T2(sp.t), sp.win);
        if (sp.win) { done = true; b.classList.add('found'); foot.replaceChildren(btn(t('ok') + ' ▶', () => go(page.next), 'a big')); }
        else if (++miss >= 3) stage.classList.add('hinting');
      };
      stage.appendChild(b);
    }
    foot.appendChild(btn('💡 ' + t('hint'), () => stage.classList.add('hinting'), 'ghost sm'));
  },
  // a dark scene and a flashlight that follows the pointer
  flash(sheet, page) {
    const { stage, foot } = miniFrame(sheet, page, t('flashHelp'));
    stage.classList.add('flashlight');
    const dark = el('div', 'darkness'); stage.appendChild(dark);
    const need = page.targets.filter((x) => x.need).length; let got = 0;
    const count = el('div', 'count', t('found', { a: 0, b: need })); foot.appendChild(count);
    const move = (e) => { const r = stage.getBoundingClientRect(); stage.style.setProperty('--mx', e.clientX - r.left + 'px'); stage.style.setProperty('--my', e.clientY - r.top + 'px'); return r; };
    stage.style.setProperty('--mx', '20%'); stage.style.setProperty('--my', '60%');
    stage.addEventListener('pointermove', move);
    stage.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      const r = move(e), px = ((e.clientX - r.left) / r.width) * 100, py = ((e.clientY - r.top) / r.height) * 100;
      const hit = page.targets.find((x) => Math.hypot((px - x.x) * 1, (py - x.y) * 0.65) < (x.r || 8));
      if (!hit) return;
      popAt(stage, hit.x, hit.y, T2(hit.t), hit.need);
      if (hit.need && !hit.got) { hit.got = true; got++; count.textContent = t('found', { a: got, b: need }); }
      if (got >= need && !foot.querySelector('.a')) foot.appendChild(btn(t('ok') + ' ▶', () => { page.targets.forEach((x) => delete x.got); go(page.next); }, 'a big'));
    });
  },
  // connect wires to the right places
  wires(sheet, page) {
    const wrap = el('div', 'mini wiresbox');
    wrap.appendChild(el('div', 'minicap', esc(T2(page.cap)) + `<small>${t('wiresHelp')}</small>`));
    if (page.clue) wrap.appendChild(el('div', 'clue', esc(T2(page.clue)).replace(/\n/g, '<br>')));
    const board = el('div', 'board'), left = el('div', 'col'), right = el('div', 'col');
    let pick = null, done = 0;
    const msg = el('div', 'wmsg');
    for (const w of page.wires) {
      const b = el('button', 'wire', `<i style="background:${w.c}"></i>${esc(T2(w.t))}`);
      b.onclick = (e) => { e.stopPropagation(); if (b.classList.contains('ok')) return; left.querySelectorAll('.wire').forEach((x) => x.classList.remove('sel')); b.classList.add('sel'); pick = w; };
      left.appendChild(b);
      w.el = b;
    }
    for (const p of page.ports) {
      const b = el('button', 'port', `<b>${esc(p.id)}</b>${esc(T2(p.t))}`);
      b.onclick = (e) => {
        e.stopPropagation(); if (!pick || b.classList.contains('ok')) return;
        if (p.want === pick.id) {
          b.classList.add('ok'); b.style.setProperty('--c', pick.c); pick.el.classList.add('ok'); pick.el.classList.remove('sel'); pick = null; done++;
          msg.textContent = '✓'; if (done === page.ports.length) { msg.textContent = ''; wrap.querySelector('.minifoot').appendChild(btn(t('ok') + ' ▶', () => go(page.next), 'a big')); }
        } else { msg.textContent = t('wrong'); board.classList.remove('zap'); void board.offsetWidth; board.classList.add('zap'); }
      };
      right.appendChild(b);
    }
    board.appendChild(left); board.appendChild(el('div', 'chip', '⚙️<small>MOTOR<br>DRIVER</small>')); board.appendChild(right);
    wrap.appendChild(board); wrap.appendChild(msg);
    wrap.appendChild(el('div', 'minifoot'));
    sheet.appendChild(wrap);
  },
  // choose what goes in the bag
  pack(sheet, page) {
    const wrap = el('div', 'mini packbox');
    wrap.appendChild(el('div', 'minicap', esc(T2(page.cap))));
    const grid = el('div', 'items'), chosen = new Set();
    const foot = el('div', 'minifoot'), info = el('div', 'count');
    const upd = () => {
      info.textContent = t('pickN', { n: page.pick, a: chosen.size });
      foot.querySelector('.a')?.remove();
      if (chosen.size === page.pick) foot.appendChild(btn(t('ok') + ' ▶', () => { for (const id of chosen) R.s.flags['item_' + id] = true; go(page.next); }, 'a big'));
    };
    for (const it of page.items) {
      const b = el('button', 'item', `<span>${it.icon}</span>${esc(T2(it.t))}`);
      b.onclick = (e) => { e.stopPropagation(); if (chosen.has(it.id)) chosen.delete(it.id); else if (chosen.size < page.pick) chosen.add(it.id); b.classList.toggle('on', chosen.has(it.id)); upd(); };
      grid.appendChild(b);
    }
    foot.appendChild(info);
    wrap.appendChild(grid); wrap.appendChild(foot);
    sheet.appendChild(wrap); upd();
  },
};

// ------------------------------------------------------------------ start
function applyLang() { document.documentElement.lang = getLang() === 'zh' ? 'zh-Hant' : 'en'; document.title = `${t('title')} · ${t('sub')}`; }
addEventListener('keydown', (e) => {
  if (!R) return;
  if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowRight') { e.preventDefault(); advance(); }
  if (e.key === 'ArrowLeft') back();
  if (e.key === 'Escape') list();
});
addEventListener('resize', () => { if (R && R.panels) R.panels.forEach(layoutBubbles); });
applyLang();
title();
window.__ck = { CHAPTERS, get R() { return R; }, get S() { return S; }, openChapter, go, advance, back, list, title };
