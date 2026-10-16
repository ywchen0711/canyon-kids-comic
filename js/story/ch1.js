// Chapter 1 · Day One (heartwarming): the first day of school, a lucky shoe, and a box of dumplings.
export default {
  id: 'ch1', no: 1, tone: 'warm',
  title: ['第一天', 'Day One'],
  blurb: ['開學第一天，Jasper 的幸運鞋不見了，午餐的水餃還被同學嫌臭。哥哥 Josh 會怎麼做？', "First day of school: Jasper's lucky shoe is missing, and a classmate says his dumplings stink. What will big brother Josh do?"],
  cover: { bg: 'school', c: [['josh', 40, 'grin', 'wave'], ['jasper', 58, 'worried', 'hold', { prop: 'lunchbox' }]] },
  start: 'p1',
  pages: {
    p1: { panels: [
      { bg: 'street', c: [['car', 78, 'normal', 'stand', { s: 0.7, y: 236 }]], cap: ['加州・聖地牙哥。八月底的早晨，陽光總是很準時。', 'San Diego, California. A late-August morning — the sun is always right on time.'] },
      { bg: 'bedroom', c: [['josh', 30, 'normal', 'hips'], ['jasper', 66, 'sad', 'sad']], s: [['josh', 'Jasper，起床了！今天開學耶！', "Jasper, wake up! It's the first day of school!"], ['jasper', '我不要去……二年級好可怕。', "I don't wanna go… second grade is scary."]] },
      { bg: 'kitchen', c: [['jeff', 45, 'grin', 'hold', { prop: 'pan' }]], s: [['jeff', '早餐好了！爸爸特製起司蛋餅！', "Breakfast! Dad's special cheese egg crepes!"]], sfx: ['滋滋～', 'SIZZLE', 66, 50, -6] },
    ], next: 'p2' },
    p2: { panels: [
      { bg: 'kitchen', c: [['erin', 28, 'normal', 'hold', { prop: 'cup' }], ['josh', 68, 'normal', 'shrug']], s: [['erin', 'Jasper 呢？還在房間？', 'Where is Jasper? Still in his room?'], ['josh', '他說「幸運鞋」不見了，找不到就不去上學。', "He says his 'lucky shoe' is missing, and he won't go without it."]] },
      { bg: 'kitchen', c: [['jeff', 30, 'think', 'think'], ['erin', 70, 'happy', 'stand']], s: [['jeff', '幸運鞋……是那雙鞋跟會發光的紅色球鞋嗎？', 'The lucky shoe… the red sneaker that lights up?'], { w: 'jasper', t: ['沒有幸運鞋，我一定會在新教室迷路啦！', "Without my lucky shoe I'll get lost in my new classroom!"], k: 'off', at: [50, 62] }] },
    ], next: 'find' },
    find: { mini: 'find', bg: 'living', c: [['thing', 42, '', '', { prop: 'shoe', y: 236, s: 0.75 }]],
      cap: ['幫 Jasper 找出他的紅色幸運鞋！', "Help Jasper find his red lucky shoe!"],
      spots: [
        { x: 27, y: 48, r: 7, t: ['沙發縫裡只有三顆爆米花，跟一枚 25 分硬幣。', 'Just three pieces of popcorn and a quarter in the couch.'] },
        { x: 60, y: 60, r: 6, t: ['盆栽後面……一隻壁虎嚇了一跳！', 'Behind the plant… a startled little lizard!'] },
        { x: 9, y: 77, r: 7, t: ['玩具箱裡有恐龍、樂高……還有爸爸的舊鍵盤？', "The toy box has dinosaurs, Lego… and Dad's old keyboard?"] },
        { x: 89, y: 66, r: 7, t: ['電視後面全是電線，沒有鞋子。', 'Behind the TV: only cables. No shoe.'] },
        { x: 80, y: 28, r: 8, t: ['窗外是峽谷。鞋子應該不會飛出去吧……', 'The canyon is out there. A shoe can\'t fly out the window… right?'] },
        { x: 42, y: 88, r: 6, win: true, t: ['找到了！紅色幸運鞋卡在茶几底下！', 'Found it! The red lucky shoe is stuck under the coffee table!'] },
      ], next: 'p3' },
    p3: { panels: [
      { bg: 'living', c: [['jasper', 50, 'grin', 'cheer']], s: [['jasper', '幸運鞋！今天一定會很順利！', "My lucky shoe! Today's gonna be great!"]], sfx: ['閃亮！', 'SPARKLE!', 66, 30, 8, '#ff7ab8'], fx: ['sparkle'] },
      { bg: 'street', c: [['jeff', 26, 'happy', 'stand'], ['jasper', 50, 'normal', 'stand', { prop: 'backpack' }], ['josh', 72, 'surprised', 'stand', { prop: 'backpack' }]], s: [['jeff', '你們知道嗎？爸爸剛來美國，第一天上班也超緊張的。', 'You know what? On my first day of work in America, I was super nervous too.'], ['josh', '真的假的？', 'No way!']] },
      { bg: 'flashback', filter: 'sepia', c: [['volunteer', 30, 'happy', 'hold', { prop: 'cup' }], ['youngjeff', 70, 'grin', 'stand']], cap: ['二十年前……', 'Twenty years ago…'], s: [['volunteer', 'More pizza, Jeff?\n（還要披薩嗎？）', 'More pizza, Jeff?'], ['youngjeff', 'No thanks, I\'m fool!\n（想說「吃飽了」，卻說成「我是傻瓜」）', 'No thanks, I\'m fool!']] },
    ], next: 'p4' },
    p4: { panels: [
      { bg: 'flashback', filter: 'sepia', c: [['volunteer', 50, 'grin', 'cheer']], s: [['volunteer', '哈哈哈！你是想說 full（吃飽）吧！', "Hahaha! You mean you're FULL!"]], sfx: ['哈哈哈', 'HA HA HA', 64, 22, 6] },
      { bg: 'street', c: [['jasper', 30, 'grin', 'cheer'], ['jeff', 62, 'smug', 'hips']], s: [['jasper', '哈哈哈！爸爸是傻瓜！', 'Hahaha! Daddy said he was a fool!'], ['jeff', '那個同事後來變成我最好的朋友。所以啊，出糗也沒關係。', "That coworker became my best friend. So, it's okay to mess up."]] },
      { bg: 'school', c: [['josh', 40, 'happy', 'wave', { prop: 'backpack' }], ['jasper', 60, 'worried', 'stand', { prop: 'backpack' }]], cap: ['Sage Canyon 小學。', 'Sage Canyon Elementary.'], s: [['josh', '放學在攀爬架那邊等我，好嗎？', 'Wait for me by the jungle gym after school, okay?'], ['jasper', '……好。', '…Okay.']] },
    ], next: 'p5' },
    p5: { panels: [
      { bg: 'classroom', c: [['rivera', 22, 'happy', 'wave'], ['maya', 58, 'happy', 'stand'], ['josh', 80, 'surprised', 'stand']], s: [['rivera', 'Welcome to fourth grade！我是 Rivera 老師。', "Welcome to fourth grade! I'm Ms. Rivera."], ['maya', '嗨，我是 Maya！你也住峽谷那邊嗎？', "Hi, I'm Maya! Do you live by the canyon too?"]] },
      { bg: 'lunch', fg: 'lunchTable', c: [['jasper', 30, 'happy', 'sit', { prop: 'dumplings' }], ['tyler', 64, 'angry', 'point', { f: true }], ['kid2', 84, 'surprised', 'sit']], cap: ['午餐時間。', 'Lunchtime.'], s: [['tyler', 'Ewww！那是什麼？好臭喔！', "Ewww! What's THAT? It stinks!"]], sfx: ['嫌～', 'EWW!', 70, 30, 10, '#9ad84a'] },
      { bg: 'lunch', c: [['jasper', 46, 'cry', 'hold', { s: 1.5, y: 330, prop: 'dumplings' }]], s: [['jasper', '……這是爸爸包的水餃……', "…Dad made these dumplings…", 'whisper']] },
      { bg: 'lunch', fg: 'lunchTable', c: [['maya', 30, 'normal', 'sit'], ['josh', 66, 'shock', 'sit']], cap: ['四年級的桌子，Josh 全都看到了。', 'From the fourth-grade table, Josh saw everything.'], s: [['josh', '（Jasper……）', '(Jasper…)', 'think']] },
    ], choice: { q: ['弟弟被笑了。Josh 該怎麼做？', "His little brother is being laughed at. What should Josh do?"], opts: [
      { t: ['走過去坐在 Jasper 旁邊，大口吃給大家看！', 'Go sit next to Jasper and eat a dumpling in front of everyone!'], go: 'p6a', set: 'brave' },
      { t: ['請 Tyler 吃一顆：「你吃過就知道了！」', "Offer Tyler one: 'Try it and you'll see!'"], go: 'p6b', set: 'kind' },
      { t: ['……假裝沒看到，跟新朋友繼續聊天。', "…Pretend you didn't see, and keep chatting with your new friend."], go: 'p6c', set: 'shy' },
    ] } },
    p6a: { panels: [
      { bg: 'lunch', fg: 'lunchTable', c: [['jasper', 30, 'surprised', 'sit'], ['josh', 62, 'eat', 'sit', { prop: 'chopsticks' }]], s: [['josh', '這是我爸包的水餃，全世界最好吃。', "My dad made these. Best dumplings in the world."]], sfx: ['啊嗚！', 'CHOMP!', 78, 20, -10] },
      { bg: 'lunch', fg: 'lunchTable', c: [['maya', 22, 'happy', 'sit'], ['kid1', 44, 'surprised', 'sit'], ['jasper', 70, 'grin', 'sit', { prop: 'dumplings' }]], s: [['maya', '看起來好好吃！可以給我一顆嗎？', 'They look so good! Can I have one?'], ['jasper', '可以！', 'Sure!']] },
    ], next: 'p7' },
    p6b: { panels: [
      { bg: 'lunch', fg: 'lunchTable', c: [['josh', 34, 'smug', 'hold', { prop: 'dumplings' }], ['tyler', 70, 'worried', 'sit']], s: [['josh', '你吃過就知道了。一顆就好，不好吃我幫你擦一個禮拜的白板。', "Try it. Just one. If it's bad, I'll wipe the whiteboard for you for a week."], ['tyler', '……好啦，一顆。', '…Fine. One.']] },
      { bg: 'lunch', fg: 'lunchTable', c: [['tyler', 34, 'love', 'sit', { prop: 'chopsticks' }], ['jasper', 70, 'grin', 'sit']], s: [['tyler', '……Whoa。可以再一顆嗎？', '…Whoa. Can I have another one?']], sfx: ['好吃！', 'YUM!', 58, 18, 8, '#ff7ab8'], fx: ['hearts'] },
    ], next: 'p7' },
    p6c: { panels: [
      { bg: 'lunch', fg: 'lunchTable', c: [['maya', 26, 'happy', 'sit'], ['josh', 52, 'worried', 'sit'], ['jasper', 84, 'cry', 'sit', { s: 0.85 }]], cap: ['Josh 轉過頭去……', 'Josh looked away…'], s: [['maya', '……然後我家的狗就把整個蛋糕吃掉了！', '…and then my dog ate the whole cake!']] },
      { bg: 'speed', bo: { c: '#e8f0ff' }, c: [['josh', 50, 'think', 'think', { s: 1.6, y: 360 }]], s: [['josh', '（爸爸說，出糗也沒關係……）\n（那我在怕什麼？）', "(Dad said it's okay to mess up…)\n(So what am I scared of?)", 'think']] },
      { bg: 'lunch', fx: ['speed'], c: [['josh', 50, 'determined', 'run']], s: [['josh', 'Jasper！我跟你一起吃！', "Jasper! I'm eating with you!", 'shout']], sfx: ['咚咚咚！', 'DASH!', 70, 24, -8] },
    ], next: 'p7' },
    p7: { panels: [
      { bg: 'school', c: [['jasper', 38, 'grin', 'cheer'], ['josh', 62, 'happy', 'wave', { prop: 'backpack' }]], cap: ['放學後，攀爬架旁。', 'After school, by the jungle gym.'], s: [['jasper', '哥！你真的有來！', 'You came!']] },
      { if: 'kind', bg: 'school', c: [['tyler', 40, 'happy', 'wave'], ['jasper', 66, 'surprised', 'stand']], s: [['tyler', '明天我帶我媽做的 taco 跟你換水餃，好不好？', "Tomorrow I'll bring my mom's tacos to trade for dumplings, deal?"], ['jasper', 'Deal！', 'Deal!']] },
      { bg: 'kitchen', fg: 'table', c: [['jeff', 20, 'happy', 'sit'], ['jasper', 42, 'grin', 'sit'], ['josh', 62, 'happy', 'sit'], ['erin', 83, 'happy', 'sit']], cap: ['晚餐時間。', 'Dinnertime.'], s: [['jasper', '明天我要帶更多水餃！要分給全班！', "Tomorrow I'm bringing MORE dumplings! For the whole class!"], ['erin', '那媽媽今晚要包一百顆了！', "Then Mom has to fold a hundred tonight!"]] },
      { bg: 'kitchen', fx: ['hearts'], c: [['jeff', 40, 'love', 'stand', { s: 1.1 }], ['erin', 62, 'love', 'stand', { s: 1.1 }]], cap: ['有時候，勇敢就是一盒水餃。', 'Sometimes, courage looks like a box of dumplings.'] },
    ], end: { id: 'A', title: ['水餃英雄', 'Dumpling Hero'], text: ['Josh 大大方方地坐到弟弟旁邊。那天起，整個二年級都知道：Jasper 家的水餃是全世界最好吃的。', 'Josh sat right down next to his brother. From that day on, all of second grade knew: Jasper\'s family makes the best dumplings in the world.'],
      alt: [
        { if: 'kind', id: 'B', title: ['一顆水餃的友誼', 'A Dumpling Friendship'], text: ['一顆水餃，讓 Tyler 從「嫌臭的人」變成了「交換午餐的好朋友」。有時候，分享比吵架更有力量。', 'One dumpling turned Tyler from "the kid who said it stinks" into a lunch-trading friend. Sometimes sharing is stronger than arguing.'] },
        { if: 'shy', id: 'C', title: ['遲到的勇氣', 'Late, but Brave'], text: ['Josh 一開始轉過頭去，但他沒有一直轉過去。勇氣有時候會遲到，重要的是它最後還是來了。', 'Josh looked away at first — but not for long. Sometimes courage arrives late. What matters is that it arrives.'] },
      ] } },
  },
};
