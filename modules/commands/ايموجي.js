module.exports.config = {
    name:  "ايموجي",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "احمد",
    description: "لعبة ايموجي ",
    usages: ["لعبة"],
    commandCategory: "الالعاب",
    cooldowns: 0
};

const questions = [
   //تنسخه مع الاقواس والكوما وتلسق تحته وتغير كلمه سؤال للسؤال العندك وكلمه جواب للجواب السؤال
  
 { question: "الذي يرسل ايموجي مبتسم اولاً يفوز", answer: "🙂" },


  { question: "الذي يرسل ايموجي بطيخ اولاً يفوز", answer: "🍉" },

  { question: "الذي يرسل ايموجي تفاح اخضر اولاً يفوز", answer: "🍏" },

  { question: "الذي يرسل ايموجي قطة تضحك اولاً يفوز",answer: "😹" },

  { question: "الذي يرسل ايموجي ثعبان اولاً يفوز", answer: "🐍" },

  { question: "الذي يرسل ايموجي وردة حمراء اولاً يقوز", answer: "🌹" },

  { question: "الذي يرسل ايموجي ندم أولاً يفوز", answer: "🥲" },

  { question: "الذي يرسل ايموجي البكاء اولاً يفوز", answer: "😭" },

  { question: "الذي يرسل ايموجي واو اولاً يفوز", answer: "😮" },

  { question: "الذي يرسل ايموجي عين معمضة مع لسان يفوز", answer: "😜" },

  { question: "الذي يرسل قلب ازرق يفوز", answer: "💙" },

  { question: "الذي يرسل قلب احمر يفوز", answer: "❤️" },

  { question: "الذي يرسل قلب اخضر يفوز", answer: "💚" },

  { question: "الذي يرسل قلب برتقالي يفوز", answer: "🧡" },

  { question: "الذي يرسل قلب بنفسجي يفوز", answer: "💜" },

  { question: "الذي يرسل قلب اسود يفوز", answer: "🖤" },

  { question: "الذي يرسل ايموجي مصاصة دماء يفوز", answer: "🧛🏻‍♀️" },

  { question: "الذي يرسل ايموجي مهرج اولاً يفوز", answer: "🤡" },

  { question: "الذي يرسل ايموجي مريض اولاً يفوز", answer: "🤒" },
];


module.exports.handleReply = async function ({ api, event, handleReply, Currencies }) {
    const userAnswer = event.body.trim().toLowerCase();
    const correctAnswer = handleReply.correctAnswer.toLowerCase();
    const userName = global.data.userName.get(event.senderID) || await Users.getNameUser(event.senderID);

    if (userAnswer === correctAnswer) {
        Currencies.increaseMoney(event.senderID, 20);
        api.sendMessage(`تهانينا ${userName} إجابتك صحيحة، لقد حصلت على 20  دولار`, event.threadID);
        api.unsendMessage(handleReply.messageID); 
    } else {
        api.sendMessage(`خطأ حاول مره اخرا`, event.threadID);
    }
};

module.exports.run = async function ({ api, event, args }) {
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    const correctAnswer = randomQuestion.answer;
    const question = randomQuestion.question;

    const message = `${question}`;

    api.sendMessage({ body: message }, event.threadID, (error, info) => {
        if (!error) {
            global.client.handleReply.push({
                name: this.config.name,
                messageID: info.messageID,
                correctAnswer: correctAnswer
            });
        }
    });
};