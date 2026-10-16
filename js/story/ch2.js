// Chapter 2 · Lights in the Canyon (spooky): a blackout, a blinking blue light, and a coyote in the dark.
export default {
  id: 'ch2', no: 2, tone: 'spooky',
  title: ['峽谷的燈', 'Lights in the Canyon'],
  blurb: ['停電的夜晚，家後面的峽谷裡亮起一閃一閃的藍光。是鬼？還是別的東西？全家拿著手電筒出發了。', 'During a blackout, a blue light starts blinking in the canyon behind the house. A ghost? Or something else? The family heads out with flashlights.'],
  cover: { bg: 'canyonNight', c: [['ghostlight', 72, '', '', { y: 150, s: 1.2 }], ['josh', 32, 'scared', 'reach', { prop: 'flashlight', beam: true }], ['jasper', 52, 'scared', 'hold', { prop: 'bear' }]] },
  start: 'p1',
  pages: {
    p1: { panels: [
      { bg: 'classroom', c: [['maya', 34, 'worried', 'stand'], ['josh', 66, 'smug', 'hips']], cap: ['十月，萬聖節快到了。', 'October. Halloween is coming.'], s: [['maya', '聽說學校後面的峽谷，晚上會出現藍色的光……', 'They say a blue light shows up in the canyon behind school at night…', 'whisper'], ['josh', '那是傳說啦。', "That's just a legend."]] },
      { bg: 'speed', bo: { c: '#d8d0ff' }, c: [['maya', 50, 'scared', 'scared', { s: 1.6, y: 360 }]], s: [['maya', '我表哥說，那是五十年前在峽谷迷路的探險家……他還在找回家的路。', "My cousin says it's an explorer who got lost in the canyon fifty years ago… still looking for the way home.", 'scared']] },
      { bg: 'classroom', c: [['josh', 50, 'worried', 'stand', { s: 1.5, y: 330, sweat: true }]], s: [['josh', '（……傳說而已。對吧？）', '(…Just a legend. Right?)', 'think']] },
    ], next: 'p2' },
    p2: { panels: [
      { bg: 'living', c: [['josh', 30, 'smug', 'shrug'], ['jasper', 54, 'scared', 'hold', { prop: 'bear' }], ['erin', 80, 'normal', 'hips']], s: [['josh', '然後……藍光就「咻」一聲出現在窗外！', 'And then… WHOOSH — a blue light right outside the window!'], ['jasper', '哥你不要講了啦！', 'Stop it!!'], ['erin', '好了，故事時間結束，刷牙睡覺。', "Okay, story time's over. Teeth, then bed."]] },
      { bg: 'living', bo: { dark: true }, fx: ['dark'], shake: true, cap: ['突然，整條街停電了。', 'Suddenly, the whole street went dark.'], c: [['jasper', 50, 'shock', 'scared']], s: [['jasper', '哇啊啊啊！', 'WAAAAH!', 'shout']], sfx: ['啪！', 'CLICK!', 70, 30, -12, '#fff'] },
      { bg: 'living', bo: { dark: true }, c: [['jeff', 30, 'normal', 'wave', { prop: 'phone', lit: true }], ['josh', 62, 'shock', 'point'], ['ghostlight', 80, '', '', { y: 92, s: 0.5 }]], s: [['jeff', '只是停電，大家不要怕。', "It's just a blackout. Don't be scared."], ['josh', '爸……你看窗外……峽谷裡……', 'Dad… look out the window… in the canyon…', 'scared']] },
    ], next: 'p3' },
    p3: { panels: [
      { bg: 'canyonNight', c: [['ghostlight', 55, '', '', { y: 150, s: 1.3 }]], fx: ['glow'], gx: 220, gy: 110, cap: ['一閃。一閃。又一閃。', 'Blink. Blink. Blink again.'], sfx: ['閃…閃…', 'blink… blink…', 66, 60, -6, '#8ae8ff'] },
      { bg: 'living', bo: { dark: true }, c: [['jeff', 32, 'think', 'think'], ['erin', 70, 'worried', 'stand']], s: [['jeff', '藍光，而且很有規律地閃……這不像鬼，比較像某種訊號。', "A blue light, blinking in a steady pattern… That's not a ghost. It's more like a signal."], ['erin', '你不會想現在去看吧？', "You don't want to go look NOW, do you?"]] },
      { bg: 'living', bo: { dark: true }, c: [['jeff', 30, 'determined', 'hold', { prop: 'flashlight' }], ['jasper', 66, 'scared', 'hold', { prop: 'bear' }]], s: [['jeff', '全家一起去。帶手電筒、穿外套，誰都不能離開大家。', "We all go together. Flashlights, jackets, and nobody leaves the group."], ['jasper', '我、我要帶熊熊。', "I-I'm bringing my bear."]] },
    ], next: 'p4' },
    p4: { panels: [
      { bg: 'canyonNight', fg: 'bushes', c: [['jeff', 22, 'determined', 'reach', { prop: 'flashlight', beam: true }], ['erin', 40, 'worried', 'stand'], ['josh', 58, 'scared', 'reach', { prop: 'flashlight', beam: true }], ['jasper', 74, 'scared', 'hold', { prop: 'bear' }]], cap: ['峽谷步道。', 'The canyon trail.'], s: [['jeff', '跟緊，慢慢走。', 'Stay close. Slow and steady.']], sfx: ['沙沙……', 'rustle…', 80, 20, 6, '#9ad8a8'] },
      { bg: 'canyonNight', fg: 'bushes', c: [['josh', 50, 'scared', 'scared', { s: 1.5, y: 340, sweat: true }]], s: [['josh', '爸……剛剛草叢裡，有東西在動。', 'Dad… something just moved in the bushes.', 'whisper']] },
    ], choice: { q: ['步道在前面分成兩條。要往哪邊走？', 'The trail splits in two. Which way?'], opts: [
      { t: ['沿著乾掉的河床往下，直接走向藍光。', 'Down the dry creek bed, straight toward the blue light.'], go: 'p5a', set: 'creek' },
      { t: ['先爬上山脊，從高處看清楚再說。', 'Up the ridge first, to see everything from above.'], go: 'p5b', set: 'ridge' },
    ] } },
    p5a: { panels: [
      { bg: 'canyonNight', fg: 'bushes', shake: true, c: [['jasper', 40, 'cry', 'sad'], ['erin', 64, 'worried', 'hold']], s: [['erin', '小心石頭！有沒有受傷？', 'Watch the rocks! Are you hurt?'], ['jasper', '沒、沒事……', "I-I'm okay…"]], sfx: ['咚！', 'THUD!', 20, 30, -10, '#fff'] },
      { bg: 'black', c: [['coyote', 50, 'normal', 'stand', { glow: true, y: 200, s: 0.9 }]], fx: ['dark'], cap: ['草叢裡，有一雙眼睛在發亮。', 'In the bushes, two eyes were glowing.'] },
    ], next: 'flash' },
    p5b: { panels: [
      { bg: 'canyonNight', c: [['jeff', 30, 'think', 'reach', { prop: 'flashlight', beam: true }], ['josh', 56, 'surprised', 'point']], cap: ['從山脊上往下看——', 'From the ridge, looking down —'], s: [['josh', '藍光在那顆大石頭旁邊！', "The light's by that big rock!"]] },
      { bg: 'canyonNight', c: [['ghostlight', 30, '', '', { y: 220, s: 0.6 }], ['coyote', 70, 'normal', 'stand', { glow: true, s: 0.6, y: 230 }]], s: [{ w: 'jeff', t: ['有動物在靠近。大家放慢腳步，跟在我後面。', "There's an animal moving closer. Slow down, stay behind me."], k: 'off', at: [50, 6] }] },
    ], next: 'flash' },
    flash: { mini: 'flash', bg: 'canyon', c: [['rover', 28, 'normal', 'stand', { s: 0.9 }], ['thing', 54, '', '', { prop: 'hat', y: 246 }], ['coyote', 72, 'normal', 'stand', { s: 0.9, glow: true }]],
      cap: ['用手電筒照照看，黑暗裡到底有什麼？', 'Shine the flashlight around. What is out there in the dark?'],
      targets: [
        { x: 30, y: 82, r: 10, need: true, t: ['一台小小的機器……上面的藍燈一閃一閃！', 'A little machine… its blue light is blinking!'] },
        { x: 82, y: 76, r: 10, need: true, t: ['一雙發亮的眼睛……是郊狼！', 'Two glowing eyes… a coyote!'] },
        { x: 56, y: 90, r: 7, t: ['只是一頂被風吹來的棒球帽。', 'Just a baseball cap the wind blew here.'] },
        { x: 12, y: 80, r: 8, t: ['一叢鼠尾草，聞起來香香的。', 'A sage bush. It smells nice.'] },
      ], next: 'p6' },
    p6: { panels: [
      { bg: 'canyonNight', shake: true, c: [['coyote', 62, 'angry', 'stand', { glow: true, s: 1.4, y: 250 }]], fx: ['dark'], sfx: ['嗚嚕嚕……', 'GRRRR…', 14, 20, -6, '#ff8a5a'] },
      { bg: 'canyonNight', c: [['jasper', 34, 'cry', 'hold', { prop: 'bear' }], ['josh', 64, 'scared', 'scared', { sweat: true }]], s: [['jasper', '哥……', 'Josh…', 'scared'], ['josh', '（Rivera 老師說過，遇到郊狼要……）', '(Ms. Rivera said that if you meet a coyote…)', 'think']] },
    ], choice: { q: ['郊狼越靠越近！怎麼辦？', 'The coyote is getting closer! What do you do?'], opts: [
      { t: ['站好不動，把手舉高讓自己看起來很大，大聲喊！', 'Stand your ground, raise your arms to look big, and shout!'], go: 'p7a', set: 'calm' },
      { t: ['轉身拔腿就跑！', 'Turn around and RUN!'], go: 'p7b', set: 'ran' },
    ] } },
    p7a: { panels: [
      { bg: 'speed', bo: { c: '#2a2a50' }, c: [['jeff', 22, 'angry', 'cheer'], ['josh', 48, 'determined', 'cheer'], ['jasper', 72, 'angry', 'cheer']], s: [['josh', '走開！GO AWAY！', 'GO AWAY!', 'shout'], ['jasper', '走開！', 'SHOO!', 'shout']], sfx: ['喝！', 'HEY!', 82, 16, 10] },
      { bg: 'canyonNight', c: [['coyote', 70, 'normal', 'run', { f: true, s: 0.7, y: 220 }], ['jeff', 30, 'happy', 'hips']], cap: ['郊狼愣了一下，轉身跑進了黑暗裡。', 'The coyote froze — then turned and ran into the dark.'], s: [['jeff', '做得好！遇到郊狼不要跑，要讓自己看起來很大、很吵。', "Well done! Never run from a coyote. Make yourself big and loud."]] },
    ], next: 'p8' },
    p7b: { panels: [
      { bg: 'canyonNight', fx: ['speed'], c: [['josh', 40, 'shock', 'run'], ['jeff', 72, 'shock', 'reach', { f: true }]], s: [['jeff', 'Josh！不要跑！', "Josh! DON'T RUN!", 'shout']], sfx: ['快跑！', 'RUN!', 10, 18, -10] },
      { bg: 'speed', bo: { c: '#2a2a50' }, c: [['jeff', 26, 'angry', 'cheer'], ['erin', 50, 'angry', 'cheer'], ['josh', 74, 'scared', 'cheer']], s: [['jeff', '大家站好！手舉高！大聲喊！', 'Everyone stand still! Arms up! Shout!', 'shout']], sfx: ['走開！', 'GO AWAY!', 60, 74, 6] },
      { bg: 'canyonNight', c: [['jeff', 30, 'worried', 'hold'], ['josh', 62, 'sad', 'sad']], cap: ['郊狼停住、後退……然後消失了。', 'The coyote stopped, backed away… and was gone.'], s: [['jeff', '跑，會讓牠以為你是獵物。記住：站好、變大、大聲。', 'Running makes it think you are prey. Remember: stand still, look big, be loud.'], ['josh', '……對不起。我記住了。', "…Sorry. I'll remember."]] },
    ], next: 'p8' },
    p8: { panels: [
      { bg: 'canyonNight', fx: ['glow'], gx: 200, gy: 160, c: [['rover', 50, 'normal', 'stand', { s: 2.2, y: 250 }]], cap: ['藍光的真面目——', 'The blue light, up close —'], sfx: ['嗶…嗶…', 'beep… beep…', 70, 18, 6, '#8ae8ff'] },
      { bg: 'canyonNight', c: [['josh', 30, 'surprised', 'point'], ['jeff', 68, 'think', 'think']], s: [['josh', 'SCE-01……Sage Canyon Elementary！是我們學校的探測車！', "SCE-01… Sage Canyon Elementary! It's our school's rover!"], ['jeff', '太陽能板沾滿泥巴，電池快沒電了，所以一直發求救訊號。', "Its solar panel is covered in mud and the battery's almost dead — so it kept sending an SOS."]] },
      { bg: 'canyonNight', c: [['jasper', 32, 'grin', 'cheer'], ['erin', 66, 'happy', 'hold']], s: [['jasper', '所以不是鬼！', "So it's not a ghost!"], ['erin', '是一個迷路的小機器人。我們帶它回家吧。', "It's a lost little robot. Let's take it home."]] },
    ], next: 'p9' },
    p9: { panels: [
      { bg: 'canyonNight', c: [['jeff', 24, 'happy', 'carry', { s: 0.75, y: 240 }], ['erin', 38, 'happy', 'stand', { s: 0.75, y: 240 }], ['josh', 52, 'happy', 'reach', { s: 0.75, y: 240, prop: 'flashlight', beam: true }], ['jasper', 63, 'happy', 'hold', { s: 0.75, y: 240, prop: 'bear' }]], cap: ['回家的路上……', 'On the way home…'] },
      { bg: 'canyonNight', c: [['ghostlight', 78, '', '', { y: 120, s: 0.5 }], ['jasper', 36, 'shock', 'point', { s: 1.3, y: 300 }]], s: [['jasper', '爸……那、那個是什麼？', 'Dad… wh-what is THAT?', 'scared']] },
      { bg: 'canyonNight', c: [['jeff', 50, 'worried', 'stand', { s: 1.5, y: 340, sweat: true }]], s: [['jeff', '……我們先回家。', "…Let's go home first.", 'whisper']], cap: ['峽谷的燈，還沒有全部解開。', "Not all of the canyon's lights have been explained."] },
    ], end: { id: 'A', title: ['郊狼守則', 'The Coyote Rules'], text: ['全家沒有被嚇跑：站好、變大、大聲，郊狼自己離開了。迷路的探測車也找到了——但山坡上的第二道藍光是什麼呢？', "The family didn't run: they stood still, looked big, got loud, and the coyote left on its own. The lost rover was found — but what was that second blue light on the hill?"],
      alt: [{ if: 'ran', id: 'B', title: ['跑錯方向的晚上', 'The Night I Ran'], text: ['Josh 嚇得拔腿就跑，幸好爸爸及時喊住他。這一晚他學到：遇到郊狼，最勇敢的做法是站好不動。', 'Josh panicked and ran — luckily Dad stopped him in time. That night he learned that with coyotes, the bravest move is to stand your ground.'] }] } },
  },
};
