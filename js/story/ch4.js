// Chapter 4 · Santa Ana Wind (adventure): a wildfire warning, a ten-minute go-bag, a neighbor who needs help, and home.
export default {
  id: 'ch4', no: 4, tone: 'adventure',
  title: ['聖塔安娜風', 'Santa Ana Wind'],
  blurb: ['又乾又熱的聖塔安娜風吹來，峽谷附近起了野火。十分鐘內要收好緊急背包，還有隔壁的 Patterson 奶奶需要幫忙……', 'The hot, dry Santa Ana wind is blowing, and a wildfire starts near the canyon. Ten minutes to pack a go-bag — and Mrs. Patterson next door needs help…'],
  cover: { bg: 'smoke', fx: ['ash'], c: [['erin', 30, 'determined', 'stand', { mask: true }], ['josh', 52, 'determined', 'stand', { mask: true, prop: 'backpack' }], ['jasper', 70, 'worried', 'hold', { mask: true, prop: 'bear' }]] },
  start: 'p1',
  pages: {
    p1: { panels: [
      { bg: 'school', fx: ['smoke'], c: [['rivera', 50, 'worried', 'stand']], cap: ['十一月。聖塔安娜風從沙漠吹來，又乾又熱。', 'November. The Santa Ana wind blows in from the desert, hot and dry.'], s: [['rivera', '同學們，今天提早放學，家長已經在門口等了。', "Everyone, school is letting out early today. Your parents are waiting at the gate."]] },
      { bg: 'street', fx: ['smoke'], c: [['erin', 40, 'worried', 'wave', { prop: 'phone', lit: true }], ['jasper', 66, 'worried', 'stand', { prop: 'backpack' }]], s: [{ w: 'x', t: ['緊急通知：峽谷附近發生野火。請準備疏散。（EVACUATION WARNING）', 'Emergency alert: wildfire near the canyon. Prepare to evacuate. (EVACUATION WARNING)'], k: 'off', at: [50, 6] }], sfx: ['嗶！嗶！', 'BEEP! BEEP!', 70, 40, 8, '#ff5a3a'] },
      { bg: 'smoke', fx: ['ash'], c: [['josh', 50, 'scared', 'stand', { s: 1.2, y: 270 }]], s: [['josh', '那邊的天空……是橘色的。', 'The sky over there… it\'s orange.', 'whisper']] },
    ], next: 'p2' },
    p2: { panels: [
      { bg: 'living', fx: ['smoke'], c: [['erin', 30, 'determined', 'point'], ['jeff', 66, 'determined', 'hold', { prop: 'phone' }]], s: [['erin', '大家聽好：十分鐘，準備我們家的緊急背包。', 'Listen up: we have ten minutes to pack our family go-bag.'], ['jeff', '我去發動車子，車頭朝外，隨時可以走。', "I'll start the car and point it out of the driveway, ready to go."]] },
      { bg: 'living', fx: ['smoke'], c: [['jasper', 34, 'cry', 'sad'], ['erin', 66, 'happy', 'hug']], s: [['jasper', '那我的樂高怎麼辦？我的房間怎麼辦？', 'What about my Lego? What about my room?'], ['erin', '東西可以再買，你們最重要。但我們可以帶幾樣真的很重要的東西。', "Things can be replaced. You can't. But we can take a few really important things."]] },
    ], next: 'pack' },
    pack: { mini: 'pack', pick: 4, cap: ['緊急背包只放得下 4 樣東西。要帶哪些？', 'The go-bag only fits 4 things. What do you take?'],
      items: [
        { id: 'water', icon: '💧', t: ['水和零食', 'Water & snacks'] },
        { id: 'mask', icon: '😷', t: ['N95 口罩', 'N95 masks'] },
        { id: 'light', icon: '🔦', t: ['手電筒', 'Flashlight'] },
        { id: 'meds', icon: '💊', t: ['藥和急救包', 'Medicine & first aid'] },
        { id: 'charger', icon: '🔌', t: ['充電器', 'Phone chargers'] },
        { id: 'album', icon: '📔', t: ['家庭相簿', 'Family photo album'] },
        { id: 'console', icon: '🎮', t: ['遊戲機', 'Game console'] },
        { id: 'bear', icon: '🧸', t: ['Jasper 的熊熊', "Jasper's teddy bear"] },
      ], next: 'p3' },
    p3: { panels: [
      { bg: 'porch', fx: ['ash'], c: [['patterson', 34, 'cry', 'shrug'], ['josh', 70, 'surprised', 'stand', { prop: 'backpack' }]], cap: ['隔壁的 Patterson 奶奶家。', "Next door, at Mrs. Patterson's house."], s: [['patterson', '我的車發不動……我的狗 Biscuit 又跑不見了！', "My car won't start… and my dog Biscuit has run off!"]] },
      { bg: 'porch', fx: ['ash'], c: [['jeff', 30, 'worried', 'stand'], ['erin', 64, 'think', 'think']], s: [['jeff', '火離這裡還有幾公里，但風很大。', 'The fire is still a few miles away, but the wind is strong.'], ['erin', '時間不多了……', "We don't have much time…"]] },
    ], choice: { q: ['Patterson 奶奶需要幫忙，可是時間不多……', 'Mrs. Patterson needs help, but time is short…'], opts: [
      { t: ['我們幫她找 Biscuit，再載她一起走！', "We'll help find Biscuit and take her with us!"], go: 'p4a', set: 'help' },
      { t: ['先打 911 請消防隊來幫她，我們趕快離開。', 'Call 911 so firefighters can help her, and leave right away.'], go: 'p4b', set: 'call' },
    ] } },
    p4a: { panels: [
      { if: 'item_light', bg: 'porch', fx: ['ash'], c: [['jasper', 50, 'determined', 'reach', { prop: 'flashlight', beam: true }]], s: [['jasper', '幸好有帶手電筒！門廊底下照照看……', 'Good thing we packed the flashlight! Let me check under the porch…']] },
      { if: '!item_light', bg: 'porch', fx: ['ash'], c: [['jasper', 50, 'determined', 'reach', { prop: 'phone', lit: true }]], s: [['jasper', '門廊底下好暗……我用手機照照看。', "It's so dark under the porch… I'll use the phone light."]] },
      { bg: 'porch', fx: ['hearts'], c: [['biscuit', 34, 'happy', 'stand', { s: 1.1 }], ['jasper', 60, 'grin', 'hug'], ['patterson', 84, 'cry', 'stand', { s: 0.9 }]], s: [['jasper', '找到 Biscuit 了！牠躲在下面發抖。', 'Found Biscuit! He was hiding under there, shaking.'], ['patterson', '謝謝你，小勇士。', 'Thank you, little hero.']] },
    ], next: 'p5' },
    p4b: { panels: [
      { bg: 'porch', fx: ['ash'], c: [['erin', 40, 'determined', 'wave', { prop: 'phone', lit: true }]], s: [['erin', '911 嗎？我們的鄰居是一位長者，她的車壞了，沒辦法離開。', 'Hello, 911? Our neighbor is elderly, her car broke down, and she can\'t leave.'], { w: 'x', t: ['收到。消防隊員十分鐘內到。', 'Understood. Firefighters will be there in ten minutes.'], k: 'off', at: [70, 60] }] },
      { bg: 'porch', fx: ['ash'], c: [['firefighter', 30, 'determined', 'point'], ['patterson', 58, 'happy', 'stand', { s: 0.9 }], ['biscuit', 82, 'happy', 'stand', { s: 0.8 }]], s: [['firefighter', '我們會帶她和狗狗去避難中心。你們快走，路上小心！', "We'll take her and her dog to the shelter. Go now — drive safe!"]] },
    ], next: 'p5' },
    p5: { panels: [
      { bg: 'carInside', fg: 'seats', c: [['jasper', 20, 'scared', 'sit', { s: 0.95, mask: true }], ['josh', 80, 'worried', 'sit', { mask: true }]], cap: ['往南的高速公路，車子一台接一台。', 'The southbound freeway: cars, bumper to bumper.'], if: 'item_mask', s: [['josh', '幸好有帶口罩，外面的空氣好嗆。', "Good thing we brought masks. The air out there is awful."]] },
      { bg: 'carInside', fg: 'seats', c: [['jasper', 20, 'cry', 'sit', { s: 0.95 }], ['josh', 80, 'worried', 'sit']], cap: ['往南的高速公路，車子一台接一台。', 'The southbound freeway: cars, bumper to bumper.'], if: '!item_mask', s: [['jasper', '咳咳……煙好嗆……', '*cough cough*… the smoke…'], ['josh', '把衣服拉起來遮住鼻子！', 'Pull your shirt up over your nose!']] },
      { bg: 'carInside', fg: 'seats', c: [['jasper', 22, 'worried', 'sit', { s: 0.95 }], ['josh', 74, 'determined', 'sit']], s: [['josh', '記得峽谷那天晚上嗎？站好、變大、大聲。今天也一樣——我們會沒事的。', 'Remember that night in the canyon? Stand still, look big, be loud. Today is the same — we\'re going to be okay.'], ['jasper', '……嗯。', '…Okay.']] },
      { bg: 'carInside', fg: 'seats', c: [], s: [{ w: 'x', t: ['（爸爸）哥哥說得對。', '(Dad) Your big brother is right.'], k: 'off', at: [30, 12] }, { w: 'x', t: ['（媽媽）我們一家人都在一起。', "(Mom) We're all together. That's what matters."], k: 'off', at: [66, 34] }] },
    ], next: 'p6' },
    p6: { panels: [
      { bg: 'shelter', fg: 'cots', c: [['volunteer', 24, 'happy', 'wave'], ['erin', 50, 'happy', 'stand'], ['jasper', 70, 'sleepy', 'stand', { prop: 'bear', if: 'item_bear' }]], cap: ['晚上九點。避難中心。', '9 p.m. The evacuation center.'], s: [['volunteer', '這裡有毯子和熱湯，大家先休息吧。', "We've got blankets and hot soup. Get some rest."]] },
      { if: 'item_charger', bg: 'shelter', c: [['erin', 30, 'happy', 'hold', { prop: 'phone', lit: true }], ['kid1', 66, 'grin', 'cheer']], s: [['erin', '我們有帶充電器，大家輪流充電吧。', "We brought chargers — everyone can take turns."], ['kid1', '謝謝！我可以打電話給我奶奶了！', 'Thank you! Now I can call my grandma!']] },
      { if: ['!item_charger', 'item_water'], bg: 'shelter', c: [['josh', 30, 'happy', 'hold', { prop: 'cup' }], ['kid2', 66, 'happy', 'stand']], s: [['josh', '我們有帶水和零食，這個給你。', 'We brought water and snacks. Here, this is for you.'], ['kid2', '謝謝哥哥！', 'Thanks!']] },
      { if: ['!item_charger', '!item_water', 'item_console'], bg: 'shelter', c: [['josh', 50, 'sad', 'hold', { prop: 'tablet' }]], s: [['josh', '遊戲機……沒電了。下次應該帶充電器的。', 'The game console… is dead. Next time, I\'m packing a charger.']] },
      { if: ['!item_charger', '!item_water', '!item_console'], bg: 'shelter', c: [['jeff', 40, 'happy', 'hold', { prop: 'book' }], ['jasper', 66, 'happy', 'stand']], s: [['jeff', '我們有帶的東西都派上用場了。', 'Everything we packed came in handy.']] },
      { if: 'item_album', bg: 'shelter', fx: ['hearts'], c: [['jeff', 34, 'happy', 'hold', { prop: 'book' }], ['jasper', 64, 'love', 'stand']], s: [['jeff', '看，這是你們剛出生的時候。', 'Look — this is the day you were born.'], ['jasper', '我好小喔！', 'I was so tiny!']] },
      { bg: 'shelter', fg: 'cots', c: [['erin', 30, 'happy', 'sit'], ['jasper', 52, 'sleepy', 'sit'], ['josh', 72, 'happy', 'sit']], s: [['erin', '媽媽小時候在台灣，遇過一次很大的颱風。停電的晚上，外公點了蠟燭，全家擠在一起唱歌。', 'When I was little in Taiwan, we had a huge typhoon. The power went out, Grandpa lit candles, and the whole family sang together.'], ['jasper', '……那我們也唱歌。', '…Then let\'s sing too.']] },
    ], next: 'p7' },
    p7: { panels: [
      { bg: 'street', c: [['jeff', 30, 'happy', 'wave', { prop: 'phone', lit: true }], ['erin', 60, 'happy', 'stand']], cap: ['第二天早上。', 'The next morning.'], s: [{ w: 'x', t: ['好消息：風向轉了，消防隊在峽谷邊緣擋住了火勢。疏散令解除。', 'Good news: the wind shifted, and firefighters stopped the fire at the edge of the canyon. The evacuation order is lifted.'], k: 'off', at: [50, 18] }] },
      { if: 'help', bg: 'porch', c: [['patterson', 30, 'happy', 'stand'], ['biscuit', 54, 'happy', 'stand'], ['jasper', 76, 'grin', 'cheer']], s: [['patterson', '你們是我見過最勇敢的一家人。這盒餅乾，給我的小勇士。', "You are the bravest family I've ever met. These cookies are for my little hero."]] },
      { if: 'call', bg: 'porch', c: [['patterson', 34, 'happy', 'wave'], ['biscuit', 58, 'happy', 'stand'], ['josh', 80, 'happy', 'wave']], s: [['patterson', '消防員說，是你們打的那通電話救了我們。謝謝！', 'The firefighters said your phone call saved us. Thank you!']] },
      { bg: 'hill', bo: { burnt: true }, c: [['jeff', 28, 'happy', 'stand', { s: 0.8, y: 252 }], ['erin', 40, 'happy', 'stand', { s: 0.8, y: 252 }], ['josh', 56, 'happy', 'stand', { s: 0.8, y: 252 }], ['jasper', 67, 'worried', 'stand', { s: 0.8, y: 252 }]], s: [['jasper', '峽谷變黑了一半……', 'Half the canyon is black…'], ['jeff', '明年春天，鼠尾草會再長出來。這片峽谷，比我們想的還堅強。', 'By next spring, the sage will grow back. This canyon is tougher than we think.']] },
      { bg: 'hill', bo: { burnt: true }, fx: ['sparkle'], c: [['josh', 40, 'grin', 'fist', { s: 1.3, y: 300 }], ['jasper', 64, 'grin', 'cheer', { s: 1.3, y: 300 }]], s: [['josh', '就像我們一樣！', 'Just like us!', 'shout']] },
    ], end: { id: 'A', title: ['正確的那通電話', 'The Right Call'], text: ['有時候，最好的幫忙是找對的人來幫忙。一通 911 讓消防員安全地帶走 Patterson 奶奶和 Biscuit；房子還在，家人都在——那就是回家。', 'Sometimes the best way to help is to call the right people. One call to 911 got Mrs. Patterson and Biscuit to safety. The house was still standing and the family was together — and that is what home means.'],
      alt: [
        { if: ['item_water', 'item_mask', 'item_light', 'item_meds'], id: 'C', title: ['準備最充分的一家', 'The Best-Prepared Family'], text: ['水、口罩、手電筒、急救包——你們的緊急背包裡全是最需要的東西。下次火災季節來臨前，記得和家人一起檢查背包！', 'Water, masks, a flashlight, first aid — your go-bag had exactly what mattered most. Before the next fire season, check your go-bag together as a family!'] },
        { if: 'help', id: 'B', title: ['小勇士與 Biscuit', 'The Little Hero and Biscuit'], text: ['全家停下來幫忙，Jasper 在黑暗的門廊底下找到了 Biscuit。最害怕的那個人，有時候也是最勇敢的。', 'The family stopped to help, and Jasper found Biscuit under the dark porch. Sometimes the most scared person is also the bravest.'] },
      ] } },
  },
};
