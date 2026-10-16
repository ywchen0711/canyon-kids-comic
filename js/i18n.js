// Chinese / English. ?lang=zh|en from the lobby wins, then the saved choice, then the browser.
const q = (typeof location !== 'undefined' && location.search.match(/[?&]lang=(zh|en)(?![a-z])/)) || null;
let lang = q ? q[1] : null;
try { if (lang) localStorage.setItem('ck_lang', lang); else lang = localStorage.getItem('ck_lang'); } catch (e) { /* ignore */ }
if (lang !== 'zh' && lang !== 'en') lang = typeof navigator !== 'undefined' && /^zh/i.test(navigator.language || '') ? 'zh' : 'en';
export const getLang = () => lang;
export function setLang(l) { lang = l; try { localStorage.setItem('ck_lang', l); } catch (e) { /* ignore */ } }
// story text is written as [zh, en]
export const T2 = (a) => (a == null ? '' : typeof a === 'string' ? a : Array.isArray(a) ? (lang === 'zh' ? a[0] : a[1] ?? a[0]) : a[lang] ?? a.en);
const S = {
  title: ['峽谷小英雄', 'Canyon Kids'], sub: ['Josh & Jasper 的加州日記', 'The Josh & Jasper Diaries'],
  start: ['開始閱讀', 'Start reading'], chapters: ['章節', 'Chapters'], lang: ['English', '中文'], back: ['返回', 'Back'],
  fiction: ['虛構故事：人物與情節都是想像出來的。', 'A work of fiction: the characters and events are made up.'],
  chapter: ['第 {n} 章', 'Chapter {n}'], read: ['開始', 'Read'], cont: ['繼續', 'Continue'], again: ['重看', 'Read again'], done: ['已讀完', 'Finished'],
  endings: ['結局 {a}/{b}', 'Endings {a}/{b}'], tapNext: ['點一下繼續', 'Tap to continue'], prev: ['上一頁', 'Previous page'],
  tone_warm: ['溫馨', 'Heartwarming'], tone_spooky: ['驚悚', 'Spooky'], tone_action: ['熱血', 'Action'], tone_adventure: ['冒險', 'Adventure'],
  choose: ['你會怎麼做？', 'What do you do?'], theEnd: ['第 {n} 章　完', 'End of Chapter {n}'], ending: ['結局：{t}', 'Ending: {t}'],
  nextCh: ['下一章 ▶', 'Next chapter ▶'], toList: ['回到章節', 'Back to chapters'], replay: ['換個選擇再讀一次', 'Read again with other choices'],
  found: ['找到了 {a}/{b}', 'Found {a}/{b}'], hint: ['提示', 'Hint'], ok: ['好了！', 'Done!'], pickN: ['選 {n} 樣（已選 {a}）', 'Pick {n} (chosen {a})'],
  wiresHelp: ['先點一條電線，再點它要接的地方。', 'Tap a wire, then the place it connects to.'], wrong: ['滋滋！不對…再想想', 'Bzzt! Not that one…'],
  flashHelp: ['移動手電筒（滑鼠移動或手指點一下）找東西，照到了再點它。', 'Move the flashlight (mouse, or tap with a finger) and tap what you find.'],
  findHelp: ['點點看可能藏在哪裡。', 'Tap where it might be hiding.'], locked: ['先讀完上一章', 'Finish the previous chapter first'],
  newCh: ['NEW', 'NEW'], resume: ['從頭開始', 'From the start'],
};
export const t = (k, v) => { let s = T2(S[k]) || k; if (v) for (const x in v) s = s.replace('{' + x + '}', v[x]); return s; };
