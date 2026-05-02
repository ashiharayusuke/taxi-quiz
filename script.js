const quizData = [
  {
    question: "「あんこ」とは？",
    choices: ["乗客を乗せず移動中", "休憩中", "駅待機から出られない事", "長距離移動の乗客"],
    answer: 2,
    explanation: "駅待機のレーン等で前後に挟まれて出られない事。"
  },
  {
    question: "「行灯」とは？",
    choices: ["客を指定場所へ迎えに行くこと", "乗客の足元を照らす光", "休み明けの出勤", "社名入りの表示灯"],
    answer: 3,
    explanation: "タクシーのルーフに付いているタクシーのサイン。天井灯ともいう。タクシーは必ずこれを装着しなければならない。"
  },
  {
    question: "「わかめ」とは？",
    choices: ["回送中の車", "予約客専用待機", "洗車中", "若葉台-目黒間の走行"],
    answer: 0,
    explanation: "回送中の意味。わかめ→海藻→回送から。ゆらゆら揺れる酔っ払い客を指す場合もある。"
  },
  {
    question: "「赤信号」とは？",
    choices: ["休憩中", "取り締まり", "ノルマ未達成", "駅で乗客を待っている状態"],
    answer: 1,
    explanation: "警察による交通取締。"
  },
  {
    question: "「アサレン」とは？",
    choices: ["早朝の営業", "詰所の打ち合わせ", "深夜明けで営業から上がること", "乗務前に洗車の当番になること"],
    answer: 3,
    explanation: "乗務日の朝、乗務前に洗車の当番になること。"
  },
  {
    question: "「アヒル」とは？",
    choices: ["早朝の営業", "うるさい客", "一日の売り上げが２万円台", "雨天時の営業"],
    answer: 2,
    explanation: "一日の売り上げ高が２万円台で上がること。「２」という字面がアヒルの形に似ていることから。"
  },
  {
    question: "「コロ」とは？",
    choices: ["新規客の開拓", "近距離客", "ガソリン切れが近いこと", "古いタクシーの総称"],
    answer: 1,
    explanation: "近距離客のこと。「タイヤが少し転がるだけ」という意味から。"
  },
  {
    question: "「オバケ」とは？",
    choices: ["無灯走行を咎めること", "街中を走って客を探す営業", "長距離客", "二人乗りの客"],
    answer: 2,
    explanation: "長距離客のこと。長距離客はめったに出会えないものであり、おばけも同様であることから。"
  },
  {
    question: "「枝」とは？",
    choices: ["収入", "細い道・脇道", "病欠した際の交代要員", "客を取れず仕事にならないこと"],
    answer: 1,
    explanation: "幹線道路から外れた細い道・脇道。「枝に入る」＝裏道に入る。"
  },
  {
    question: "「小さな落し物」とは？",
    choices: ["携帯/スマホ", "小銭", "自損事故", "凶器"],
    answer: 1,
    explanation: "犯人が使用した凶器。"
  },
  {
    question: "「パンダさん」とは？",
    choices: ["長距離利用客", "交通取締", "子供連れ", "飲酒客"],
    answer: 1,
    explanation: "交通取締などで、その場所でやってることを無線で知らせるときに使う。"
  },
  {
    question: "「坊主」とは？",
    choices: ["空車が続いている状態", "営業終了", "休憩開始", "車体を擦ること"],
    answer: 0,
    explanation: "空車の状態で流し続けている状態、もしくは一度もお客さんを乗せられない状態のこと。坊主の容姿である「もう毛が無い」→「儲けがない」というダジャレから転じた言葉。"
  },
  {
    question: "「マグロ」とは？",
    choices: ["事故による通行止め", "営業所へ戻る", "流し専門のドライバー", "チップを出してくれる客"],
    answer: 2,
    explanation: "付待ちが苦手で常に走り回る流し専門のドライバー。マグロが常に泳いでいないと窒息してしまうことから流し専門のドライバーをマグロと呼んでいる。"
  },
  {
    question: "「げそ」とは？",
    choices: ["大儲け", "一日の収益が一万円以下", "回送", "足立ナンバーのタクシー"],
    answer: 3,
    explanation: "東京都を走る足立ナンバーのタクシーのこと。「足立」の足が由来とされている。"
  },
  {
    question: "「てんぷら」とは？",
    choices: ["休憩中", "4人客が短距離移動すること", "営業終了", "予約済み"],
    answer: 1,
    explanation: "東京のタクシーは4人まで乗車できるが、その4人お客様が乗って千円前後の場所に行くこと。由来は「お客さんが一気にあがるから」「商売あがったり」など諸説あり。"
  },
  {
    question: "「お茶」とは？",
    choices: ["ドタキャン", "整備依頼", "休憩申請", "高速申請"],
    answer: 0,
    explanation: "無線配車されて、迎えに行ってもキャンセルや利用者がいないこと。「お茶を飲んで休憩するしかない」ことから。"
  },
  {
    question: "「○珍良好」とは？",
    choices: ["短距離乗車", "暴走族", "相乗り", "芸能人の乗車"],
    answer: 1,
    explanation: "前方に進路妨害の車輌、つまり暴走族が現れた場合を指す。"
  },
  {
    question: "「お手上げ」とは？",
    choices: ["相乗り", "客を見つける", "客が全くいない状態", "渋滞"],
    answer: 1,
    explanation: "流しや空車で駅などに向かう途中にお客様を見つけること。手を挙げてタクシーを呼ぶことから。"
  },
  {
    question: "「エントツ」とは？",
    choices: ["運賃を着服する不正行為", "営業終了", "無賃客確認", "売上精算"],
    answer: 0,
    explanation: "タクシーメーターを正しく操作しないで、運賃をドライバーが着服する不正行為のこと。昔のメーター器は空車表示が旗のように上に立っていた。これを横に倒すと作動を開始する。旗が立ったままなのでエントツという。目的地に着くと「うっかりしてメーターを倒すのを忘れました、お客さんいつも幾らくらいで来ますか」などと詫びを云う。利用者もいつもの金額よりまけてもらったので問題としない。この行為は見つかれば窃盗罪となる。今はボタンを押す方式になって旗はなくなったのに、いまだに「エントツ」とか「メーター不倒」という言葉が使われている。"
  },
  {
    question: "「ハンドル」とは？",
    choices: ["料金メーター", "無線機", "売上帳", "運転そのもの"],
    answer: 3,
    explanation: "ハンドルは現場で運転業務そのものを指す言い回し。"
  },
  {
    question: "「赤チン」とは？",
    choices: ["赤信号", "赤字営業", "事故車", "高速道路"],
    answer: 1,
    explanation: "赤チンは売上が伸びず赤字気味の営業を指す俗称。"
  },
  {
    question: "「青タン」とは？",
    choices: ["早朝勤務", "深夜時間帯営業", "新人教育", "雨天営業"],
    answer: 1,
    explanation: "青タンは22時から5時までの深夜帯の割増営業時間でのメーターを指す俗称。深夜割増料金になると、メーターが青くなることから。"
  },
  {
    question: "「大事な忘れ物」とは？",
    choices: ["免許証", "車のキー", "事件に関した連絡", "財布"],
    answer: 2,
    explanation: "事件に関した連絡を指す隠語。"
  },
  {
    question: "「水溜り」とは？",
    choices: ["行き止まり", "自動車整備", "釣銭のストック",  "速度違反取締り"],
    answer: 3,
    explanation: "無線室で使われる「速度違反取締り」を示す言葉。"
  },
  {
    question: "「横持ち」とは？",
    choices: ["近距離輸送", "荷物運搬", "横断移動", "相乗り"],
    answer: 0,
    explanation: "横持ちは比較的短距離・近場の乗車を指す俗称。"
  },
  {
    question: "「まんしゅう」とは？",
    choices: ["長距離乗車", "大型車", "長時間休憩", "長時間待機"],
    answer: 0,
    explanation: "1万円以上の良い仕事、大当たり。"
  },
  {
    question: "「ワンメーター」とは？",
    choices: ["一人客", "単独勤務", "最低料金区間", "一台配車"],
    answer: 2,
    explanation: "ワンメーターは初乗り料金内で収まる短距離利用。"
  },
  {
    question: "「ゾンビ」とは？",
    choices: ["車検", "飲酒客", "ガソリン切れ", "大量の乗車待ち客"],
    answer: 3,
    explanation: "主に金曜や連休前、さらによくあるパターンとして12月などの忘年会・御用納めシーズンの深夜で、タクシーが捕まらないお客様があちらこちらで乗車しようと手を上げている状態から。"
  },
  {
    question: "「とぐろ巻く」とは？",
    choices: ["長距離乗車", "駅構内に入る為停車している状態", "エンスト状態", "タイヤがパンクした状態"],
    answer: 1,
    explanation: "駅構内等のタクシー乗り場でスペースに入りきれず構内に入る為停車している状態。○○駅はとぐろ巻いてる。"
  },
  {
    question: "「昆虫採集」とは？",
    choices: ["仮眠", "車両待機", "信号無視の取り締まり", "客待ち放置"],
    answer: 2,
    explanation: "信号無視などの取り締まりのこと。虫（無視）を集めるところから。"
  },
  {
    question: "「荷崩れ」とは？",
    choices: ["荷物の積み直し", "想定より早い下車", "釣銭不足", "忘れ物の散乱"],
    answer: 1,
    explanation: "利用者がはじめに言った目的地よりも、手前で下車すること。荷物（客）が目的地に到着する前に崩れるため。"
  },
  {
    question: "「20」とは？",
    choices: ["20分休憩", "事故発生", "トイレ休憩", "暴力団"],
    answer: 3,
    explanation: "暴力団のお客様…ヤクザ=893=8+9+3=20・・・です。"
  },
  {
    question: "「ネギ」とは？",
    choices: ["新人乗務員", "無賃乗車客", "客からの苦情", "深夜の酔客"],
    answer: 2,
    explanation: "お客さんよりの苦情のことを、京都の九条地域で作られている有名な九条ネギにかけていう言葉。"
  },
  {
    question: "「脳梗塞」とは？",
    choices: ["居眠り運転", "仕事の出来が悪い日", "無線故障", "泥酔客"],
    answer: 1,
    explanation: "高速に乗るようなイイ仕事がなかった日を言い、NO高速から。"
  },
  {
    question: "「ノコギリ」とは？",
    choices: ["蛇行運転", "客の取り合い", "違法改造車", "客を降ろして戻ること"],
    answer: 3,
    explanation: "お客様を降ろして、空車になった先で無線が入り、また自分の営業エリアに戻ること。"
  },
  {
    question: "「やっこ」とは？",
    choices: ["迷惑ドライバー", "無賃客", "警察官", "新人教育係"],
    answer: 0,
    explanation: "会社の規則・乗務員としての常識を無視して、やりたい放題の迷惑をかけてまで売上を揚げているドライバーのこと。"
  },
  {
    question: "「夜ガラス」とは？",
    choices: ["夜勤務を強いる人", "深夜の女性客", "夜だけ売上が良い車", "夜の繁華街専門客"],
    answer: 0,
    explanation: "夜勤務を強いる人のこと。"
  },
  {
    question: "「よっぱ」とは？",
    choices: ["酔っ払い客", "夜勤明け乗務員", "無線係", "長距離客"],
    answer: 0,
    explanation: "よっぱは酔っ払い客の略称です。深夜帯によく使われる現場用語。"
  },
  {
    question: "「弱い手」とは？",
    choices: ["運転が荒い", "売上になりにくい営業", "短距離客", "新人の接客"],
    answer: 1,
    explanation: "いつも営収の低い乗務員のこと。その逆は「強い手（こわいて）」と言う。"
  },
  {
    question: "「落下物に注意」とは？",
    choices: ["道路障害物注意", "ネズミとり注意", "荷物落下注意", "看板落下注意"],
    answer: 1,
    explanation: "無線の隠語でネズミとりをしているときなどを表す。"
  }
];

const QUIZ_LIMIT = 10;
const startBox = document.getElementById("start-box");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const backBtn = document.getElementById("back-btn");
const startBtn = document.getElementById("start-btn");
const allStartBtn = document.getElementById("all-start-btn");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const answerResultEl = document.getElementById("answer-result");
const explanationEl = document.getElementById("explanation");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");
const shareBtn = document.getElementById("share-btn");
const questionNumberEl = document.getElementById("question-number");

let shuffledQuiz = [];
let currentQuiz = 0;
let score = 0;
let quizLimit = QUIZ_LIMIT;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function backToStart() {
  quizBox.classList.add("hidden");
  resultBox.classList.add("hidden");
  startBox.classList.remove("hidden");
}

function startQuiz(allMode = false) {
  quizLimit = allMode ? quizData.length : QUIZ_LIMIT;
  shuffledQuiz = shuffle([...quizData]).slice(0, quizLimit);

  currentQuiz = 0;
  score = 0;

  startBox.classList.add("hidden");
  resultBox.classList.add("hidden");
  quizBox.classList.remove("hidden");

  loadQuiz();
}
function loadQuiz() {
　questionNumberEl.textContent = `第${currentQuiz + 1}問 / ${quizLimit}問`;
  nextBtn.disabled = true;
  answerResultEl.textContent = "";
  explanationEl.textContent = "";

  const quiz = shuffledQuiz[currentQuiz];
  questionEl.textContent = quiz.question;
  choicesEl.innerHTML = "";

  quiz.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.classList.add("choice-btn");
    btn.onclick = () => selectAnswer(btn, index, quiz.answer, quiz.explanation);
    choicesEl.appendChild(btn);
  });
}

function selectAnswer(button, selected, correct, explanation) {
  const buttons = document.querySelectorAll(".choice-btn");
  buttons.forEach(btn => btn.disabled = true);

  if (selected === correct) {
    button.classList.add("correct");
    answerResultEl.textContent = "正解！";
    score++;
  } else {
    button.classList.add("wrong");
    buttons[correct].classList.add("correct");
    answerResultEl.textContent = "不正解…";
  }

  explanationEl.textContent = explanation;
  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  currentQuiz++;
  if (currentQuiz < shuffledQuiz.length) {
    loadQuiz();
  } else {
    showResult();
  }
});

function showResult() {
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");
  scoreEl.textContent = `${quizLimit}問中 ${score}問正解！`;
}

function restartQuiz() {
  startBox.classList.remove("hidden");
  quizBox.classList.add("hidden");
  resultBox.classList.add("hidden");
}

shareBtn.addEventListener("click", () => {
  const text = `タクシー業界用語クイズで${shuffledQuiz.length}問中 ${score}問正解しました！%0Aあなたも挑戦！`;
  const url = encodeURIComponent(window.location.href);
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank");
});

startBtn.addEventListener("click", () => startQuiz(false));
allStartBtn.addEventListener("click", () => startQuiz(true));
backBtn.addEventListener("click", backToStart);
