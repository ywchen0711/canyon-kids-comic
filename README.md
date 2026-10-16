# 峽谷小英雄：Josh & Jasper 的加州日記 · Canyon Kids

An interactive comic about a family in San Diego: **Josh** (4th grade) and **Jasper** (2nd grade), their dad **Jeff** — a
first-generation immigrant software engineer — and their mom **Erin**. Sometimes heartwarming, sometimes spooky, sometimes
an all-out adventure. Chinese and English. *A work of fiction — the characters and events are made up; the school appears
only as a setting.*

**Read it:** https://ywchen0711.github.io/canyon-kids-comic/

## Chapters
| # | Chapter | Tone | Interactive scene | Endings |
|---|---|---|---|---|
| 1 | 第一天 · Day One | heartwarming | find Jasper's lucky shoe in the living room | 3 |
| 2 | 峽谷的燈 · Lights in the Canyon | spooky | search the dark canyon with a flashlight (and what to do when you meet a coyote) | 2 |
| 3 | 機器人大賽 · Robot Rumble | action | rewire the burnt motor driver from Dad's notes | 2 |
| 4 | 聖塔安娜風 · Santa Ana Wind | adventure | pack a 4-item go-bag — what you packed shows up later | 3 |

Tap (or press Space / →) to reveal the next panel, ← to go back a page. Choices set flags that change later panels and the
ending; progress and the endings you found are saved in the browser and synced with the lobby's cloud save.

## How it's made
- `js/art.js` — all the art is SVG drawn in code: the cast (16 expressions × 16 poses), animals and robots, props,
  16 backgrounds, foregrounds and effects (speed lines, glow, ash, hearts…). No image files.
- `js/story/ch1–4.js` — each chapter is data: pages of panels (`bg`, cast `[who, x%, expression, pose, opts]`, speech
  bubbles `[who, zh, en, kind]`, captions, sound effects), choices with flags, mini scenes, and endings.
- `js/reader.js` — the reader: panel-by-panel reveal, speech bubbles that place themselves near the speaker while avoiding
  faces and each other, choices, the four mini scenes (`find`, `flash`, `wires`, `pack`), endings and saving.
- `npm test` (`tools/check.mjs`) — checks every link, character, background and both languages, and walks **every path**
  (every choice and every go-bag combination) to make sure each one reaches an ending.

To add a chapter: write `js/story/ch5.js` in the same format, add it to `CHAPTERS` in `js/reader.js` and `tools/check.mjs`,
and run `npm test`.
