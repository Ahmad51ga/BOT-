module.exports.config = {
    name: "حزوره",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "عبدالرحمن",
    description: "لعبة احزر ",
    usages: ["لعبة"],
    commandCategory: "العاب",
    cooldowns: 0
};

const questions = [
   //تنسخه مع الاقواس والكوما وتلسق تحته وتغير كلمه سؤال للسؤال العندك وكلمه جواب للجواب السؤال
    { question: "•من هم أشد الناس عداوه للمسلمين؟", answer: "اليهود" },


  { question: "•ما هو الشيء الذي يتكون من المياه ولكن إذا وضعناه داخل المياه ينتهي ؟", answer: "الثلج" },

  { question: "•في أي مدينة صينية تقع ساحة تيانانمن المشهورة؟", answer: "بكين" },

  { question: "•من أول شخص أصدر أمر بجمع القرآن الكريم في كتاب واحد؟", answer: "ابو بكر" },

  { question: "•ما هو الشيء الذي يتحدث بجميع لغات العالم؟", answer: "الصدى" },

  { question: "•من هو الشخص الذي تكون ساقاه على الأرض ولكن رأسه تكون فوق النجوم ؟", answer: "شرطي" },

  { question: "•ما هي أقصر سورة في القران الكريم؟", answer: "الكوثر" },

  { question: "•ما هو لون دم الحيوان البحري الأخطبوط؟", answer: "الازرق" },

  { question: "•ما هو الشيء الذي تذبحه بالسكين ويجبرك أن تبكي عليه ؟", answer: "البصل" },

  { question: "•اذكر اسم الطائر الذي يضع أكبر أنواع البيض في العالم؟", answer: "النعامة" },

  { question: "•ما هو الشيء الذي يكون في الأرض لونه أخضر أما في السوق لونه أسود أما في البيت لونه أحمر ؟", answer: "الشاي" },

  { question: "•ما اسم الدولة التي تمتلك علم به نسر وصعبان؟", answer: "المكسيك" },

  { question: "•ما هو اليوم الذي خلق الله في سيدنا آدم عليه السلام ؟", answer: "يوم الجمعة" },

  { question: "•الي ماذا يشير مصطلح الذهب الاسود؟", answer: "البترول" },

  { question: "•ماهي عدد السور التي بدأت بسؤال في القرآن؟", answer: "6 سور" },

  { question: "•في أي مدينة يقع جامع الزيتون؟", answer: "تونس" },

  { question: "•ما الشيء الذي تحمله ويحملك ؟", answer: "الحذاء" },

  { question: "•ما هو أشهر نوع من أنواع الأسماك التي تعيش في البحر الميت ؟", answer: "لا يوجد سمك" },

  { question: "•ما هو اسم بيت الدجاج ؟", answer: "القن" },
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