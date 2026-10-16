// Chapter 3 · Robot Rumble (action): a robot built in the garage, a burnt motor the night before, and the final match.
export default {
  id: 'ch3', no: 3, tone: 'action',
  title: ['機器人大賽', 'Robot Rumble'],
  blurb: ['Josh 加入機器人社，和工程師爸爸在車庫打造「郊狼一號」。比賽前一晚，馬達竟然燒掉了！', 'Josh joins the robotics club and builds "Coyote-1" in the garage with his engineer dad. Then, the night before the big match, the motor burns out!'],
  cover: { bg: 'arena', c: [['robot', 34, 'normal', 'stand', { s: 1.1 }], ['titan', 74, 'normal', 'stand', { s: 0.9, f: true }]], fx: ['speed'] },
  start: 'p1',
  pages: {
    p1: { panels: [
      { bg: 'classroom', c: [['rivera', 26, 'happy', 'hold'], ['rover', 52, 'normal', 'stand', { s: 0.8, y: 210 }], ['josh', 78, 'grin', 'stand']], s: [['rivera', '謝謝你們找回 SCE-01！它在峽谷測試時失聯了整整一個禮拜。', 'Thank you for finding SCE-01! It went missing in the canyon for a whole week during a test.']] },
      { bg: 'classroom', c: [['rivera', 30, 'happy', 'point'], ['josh', 70, 'surprised', 'stand']], s: [['rivera', 'Josh，兩週後有「聖地牙哥少年機器人盃」。你願意加入機器人社嗎？', 'Josh, the San Diego Junior Robot Cup is in two weeks. Would you like to join the robotics club?'], ['josh', '我？！', 'ME?!', 'shout']] },
      { bg: 'school', c: [['kevin', 30, 'smug', 'hips'], ['tyler', 52, 'smug', 'point'], ['josh', 80, 'determined', 'fist', { f: true }]], s: [['kevin', '機器人盃？冠軍一定是我們 Torrey Titans 的 TITAN-X。', 'The Robot Cup? The trophy belongs to the Torrey Titans and TITAN-X.'], ['tyler', '我表哥六年級，超強的！', "My cousin's in sixth grade. He's awesome!"], ['josh', '……走著瞧。', '…We\'ll see.']] },
    ], next: 'p2' },
    p2: { panels: [
      { bg: 'garage', fg: 'workbench', c: [['jeff', 30, 'happy', 'point'], ['robot', 56, 'normal', 'stand', { s: 0.75, y: 206 }], ['josh', 80, 'determined', 'hold', { prop: 'wrench' }]], cap: ['接下來的兩個禮拜——', 'For the next two weeks —'], s: [['jeff', '先畫設計圖，再動手。這是工程師的第一守則。', "Design first, then build. Engineer's rule number one."]] },
      { bg: 'garage', c: [['jasper', 40, 'grin', 'hold', { prop: 'book' }], ['robot', 70, 'normal', 'stand', { s: 0.9 }]], s: [['jasper', '我幫它畫火焰！它叫「郊狼一號」！', 'I painted flames on it! Its name is Coyote-1!']], sfx: ['刷刷！', 'SWISH!', 64, 20, 8, '#ff7a3a'] },
      { bg: 'garage', fx: ['night'], c: [['erin', 24, 'happy', 'hold', { prop: 'cup' }], ['josh', 52, 'sleepy', 'stand'], ['jeff', 78, 'happy', 'stand']], s: [['erin', '工程師們，宵夜時間到了。', 'Engineers, midnight snack time.'], ['josh', '再一下下……馬達的程式還沒寫完……', 'Just a little more… the motor code isn\'t done…']] },
    ], next: 'p3' },
    p3: { panels: [
      { bg: 'garage', fx: ['night', 'speed'], shake: true, c: [['robot', 50, 'broken', 'stand', { s: 1.4 }]], cap: ['比賽前一晚。', 'The night before the competition.'], sfx: ['啪滋！', 'ZZAP!', 64, 26, -10, '#ffe040'] },
      { bg: 'garage', fx: ['night'], c: [['josh', 50, 'cry', 'sad', { s: 1.4, y: 320 }]], s: [['josh', '馬達燒掉了……兩個禮拜的努力……都完了……', 'The motor burned out… two weeks of work… it\'s all over…']] },
      { bg: 'garage', fx: ['night'], c: [['josh', 30, 'sad', 'sad'], ['jeff', 66, 'determined', 'hips']], s: [['jeff', '工程師厲害的地方，不是做的東西永遠不會壞。', "What makes an engineer great isn't building things that never break."], ['jeff', '而是壞掉以後，知道怎麼修。來，我們一起修。', 'It\'s knowing how to fix them when they do. Come on — let\'s fix it together.']] },
    ], next: 'wires' },
    wires: { mini: 'wires', cap: ['重新接好馬達驅動板！照著爸爸的筆記接線。', "Rewire the motor driver board! Follow Dad's notes."],
      clue: ['爸爸的筆記：\n🔴 紅色 → 電源（+）\n⚫ 黑色 → 接地（−）\n🟡 黃色 → 左輪馬達\n🔵 藍色 → 右輪馬達', "Dad's notes:\n🔴 red → power (+)\n⚫ black → ground (−)\n🟡 yellow → left wheel motor\n🔵 blue → right wheel motor"],
      wires: [{ id: 'red', c: '#e83a3a', t: ['紅線', 'Red wire'] }, { id: 'black', c: '#222', t: ['黑線', 'Black wire'] }, { id: 'yellow', c: '#f0c020', t: ['黃線', 'Yellow wire'] }, { id: 'blue', c: '#2a6ad8', t: ['藍線', 'Blue wire'] }],
      ports: [{ id: 'A', want: 'blue', t: ['右輪馬達', 'Right wheel motor'] }, { id: 'B', want: 'red', t: ['電源 +', 'Power +'] }, { id: 'C', want: 'yellow', t: ['左輪馬達', 'Left wheel motor'] }, { id: 'D', want: 'black', t: ['接地 −', 'Ground −'] }],
      next: 'p4' },
    p4: { panels: [
      { bg: 'garage', fx: ['night', 'sparkle'], c: [['robot', 34, 'normal', 'stand', { s: 1.1 }], ['josh', 72, 'grin', 'cheer']], s: [['josh', '它動了！！', "IT'S MOVING!!", 'shout']], sfx: ['嗡——！', 'VRRRM!', 18, 18, -8] },
      { bg: 'garage', fx: ['night'], c: [['jeff', 34, 'happy', 'stand'], ['josh', 66, 'happy', 'fist']], s: [['jeff', '試跑沒問題。去睡吧，明天見真章。', 'Test run passed. Get some sleep — tomorrow is the real thing.'], ['josh', '爸，謝謝你。', 'Thanks, Dad.']] },
    ], next: 'p5' },
    p5: { panels: [
      { bg: 'gym', c: [['josh', 30, 'determined', 'hold', { prop: 'remote' }], ['jasper', 50, 'grin', 'cheer'], ['kevin', 78, 'smug', 'hold', { prop: 'remote', f: true }]], cap: ['聖地牙哥少年機器人盃・決賽。', 'San Diego Junior Robot Cup — the final.'], s: [{ w: 'x', t: ['決賽！Sage Canyon 的 COYOTE-1，對上 Torrey 的 TITAN-X！', 'The final! Sage Canyon\'s COYOTE-1 versus Torrey\'s TITAN-X!'], k: 'off', at: [50, 28] }] },
      { bg: 'arena', fx: ['speed'], c: [['robot', 28, 'normal', 'stand'], ['titan', 72, 'normal', 'stand', { f: true }]], sfx: ['開始！', 'GO!', 40, 14, -6, '#ffd030'] },
      { bg: 'arena', shake: true, c: [['robot', 46, 'normal', 'stand', { y: 205 }], ['titan', 78, 'normal', 'stand', { f: true }]], s: [{ w: 'josh', t: ['輪子卡在坡道上了！', 'The wheels are stuck on the ramp!'], k: 'shout', at: [30, 6] }], sfx: ['卡！', 'CLUNK!', 52, 46, 8, '#fff'] },
      { bg: 'gym', c: [['jasper', 50, 'determined', 'point', { s: 1.4, y: 320 }]], s: [['jasper', '哥！用我們在客廳練的「倒退轉圈」！', 'Josh! Do the backwards spin we practiced in the living room!', 'shout']] },
    ], choice: { q: ['剩下 30 秒！Josh 要怎麼操作？', '30 seconds left! What does Josh do?'], opts: [
      { t: ['全速往前衝！用蠻力硬上坡！', 'Full speed ahead! Power straight up the ramp!'], go: 'p6a', set: 'rush' },
      { t: ['用 Jasper 說的「倒退轉圈」繞過去！', "Use Jasper's backwards spin to get around it!"], go: 'p6b', set: 'spin' },
    ] } },
    p6a: { panels: [
      { bg: 'arena', fx: ['speed'], c: [['robot', 50, 'normal', 'stand', { s: 1.2 }]], s: [{ w: 'josh', t: ['衝啊啊啊！', 'GO GO GO!'], k: 'shout', at: [50, 6] }], sfx: ['轟！', 'VROOM!', 14, 40, -8] },
      { bg: 'arena', shake: true, c: [['robot', 34, 'broken', 'stand', { y: 230 }], ['titan', 70, 'normal', 'stand', { f: true }]], cap: ['郊狼一號翻倒了。TITAN-X 衝過終點！', 'Coyote-1 tipped over. TITAN-X crossed the finish line!'], sfx: ['哐噹！', 'CLANG!', 44, 24, 10] },
      { bg: 'gym', c: [['rivera', 30, 'happy', 'hold', { prop: 'trophy' }], ['josh', 62, 'surprised', 'stand'], ['jeff', 84, 'happy', 'stand']], s: [['rivera', '「最佳毅力獎」頒給 COYOTE-1！前一晚修好機器人上場的隊伍，只有你們。', 'The Never-Give-Up Award goes to COYOTE-1! You\'re the only team that fixed its robot the night before.']] },
    ], next: 'p7' },
    p6b: { panels: [
      { bg: 'arena', fx: ['speed'], c: [['robot', 50, 'normal', 'stand', { s: 1.2 }]], s: [{ w: 'josh', t: ['倒退……轉圈！', 'Backwards… SPIN!'], k: 'shout', at: [50, 6] }], sfx: ['轉！', 'SPIN!', 16, 40, -8, '#4ae8ff'] },
      { bg: 'arena', shake: true, c: [['robot', 70, 'normal', 'stand'], ['titan', 30, 'normal', 'stand', { y: 232 }]], cap: ['郊狼一號繞過坡道，TITAN-X 一頭撞上了牆！', 'Coyote-1 spun around the ramp — and TITAN-X crashed into the wall!'], sfx: ['砰！', 'CRASH!', 20, 30, 10] },
      { bg: 'gym', fx: ['sparkle'], c: [['jeff', 22, 'grin', 'cheer'], ['josh', 48, 'grin', 'cheer', { prop: 'trophy' }], ['jasper', 72, 'grin', 'cheer']], s: [{ w: 'x', t: ['冠軍是——COYOTE-1！', 'And the champion is… COYOTE-1!'], k: 'off', at: [50, 6] }] },
    ], next: 'p7' },
    p7: { panels: [
      { bg: 'gym', c: [['kevin', 34, 'normal', 'reach'], ['josh', 64, 'happy', 'reach', { f: true }]], s: [{ w: 'kevin', if: 'spin', t: ['……你們的倒退轉圈很聰明。下次再比一場。', '…That backwards spin was smart. Rematch next time.'] }, { w: 'kevin', if: 'rush', t: ['你們的機器人昨晚還是壞的？太扯了。你們很強。', 'Your robot was broken LAST NIGHT? That\'s crazy. You guys are good.'] }, ['josh', '一言為定！', "It's a deal!"]] },
      { bg: 'classroom', c: [['rivera', 30, 'worried', 'hold', { prop: 'tablet' }], ['josh', 70, 'surprised', 'stand']], s: [['rivera', '對了，Josh……SCE-01 的記錄檔很奇怪。', 'Oh, Josh… something is strange in SCE-01\'s log.'], ['rivera', '它失聯的那天晚上，峽谷裡有另一個訊號一直在回應它。', 'The night it went missing, another signal in the canyon kept answering it.']] },
    ], end: { id: 'A', title: ['倒退轉圈的冠軍', 'The Backwards-Spin Champions'], text: ['一個燒掉的馬達、一個熬夜的爸爸、一個在客廳想出妙招的弟弟——郊狼一號拿下了冠軍。全家一起，才是最強的隊伍。', 'One burnt motor, one dad up all night, and a little brother with a living-room trick — Coyote-1 won the cup. Together, they were the strongest team.'],
      alt: [{ if: 'rush', id: 'B', title: ['最佳毅力獎', 'The Never-Give-Up Award'], text: ['郊狼一號在最後一刻翻倒了，但前一晚修好它的那份堅持，讓 Josh 得到比冠軍更特別的獎。', 'Coyote-1 tipped over at the last second — but the grit it took to fix it the night before earned Josh an award even more special than first place.'] }] } },
  },
};
