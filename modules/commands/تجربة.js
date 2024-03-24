module.exports.config = {
    name: "الاسرع",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "عمر",
    description: "لعبة",
    usages: ["لعبة"],
    commandCategory: "العاب",
    cooldowns: 0
};

const fs = require('fs');
const axios = require('axios');
const tempImageFilePath = __dirname + "/cache/tempImage.jpg";

module.exports.handleReply = async function ({ api, event, handleReply, Currencies }) {
    const userAnswer = event.body.trim().toLowerCase();
    const correctAnswer = handleReply.correctAnswer.toLowerCase();
    const userName = global.data.userName.get(event.senderID) || await Users.getNameUser(event.senderID);

    if (userAnswer === correctAnswer) {
        Currencies.increaseMoney(event.senderID, 50);
        api.sendMessage(`تهانينا ${userName} إجابتك صحيحة، لقد حصلت على 50 دولار`, event.threadID);

        api.unsendMessage(handleReply.messageID);
    } else {
        api.sendMessage(`خطأ، حاول مرة أخرى`, event.threadID);
    }

    fs.unlinkSync(tempImageFilePath);
};

module.exports.run = async function ({ api, event, args }) {
    const questions = [
        { image: "https://i.imgur.com/k2QCZGd.jpg", answer: "🔝" },

{ image: "https://i.imgur.com/z1xvef6.jpg", answer: "🦑" },

{ image: "https://i.imgur.com/UGCuNYG.jpg", answer: "😤" },

{ image: "https://i.imgur.com/oDT8X3A.jpg", answer: "🤎" },

{ image: "https://i.imgur.com/ui3pmLX.jpg", answer: "🚸" },

{ image: "https://i.imgur.com/SU6qShZ.jpg", answer: "👛" },

{ image: "https://i.imgur.com/ZotUR4e.jpg", answer: "👒" },

{ image: "https://i.imgur.com/5bdEyon.jpg", answer: "🪢" },

{ image: "https://i.imgur.com/QmmtVYJ.jpg", answer: "👇" },

{ image: "https://i.imgur.com/dBbz8L1.jpg", answer: "📈" },

{ image: "https://i.imgur.com/ugUt3eE.jpg", answer: "🍕" },

{ image: "https://i.imgur.com/n9iWEPX.jpg", answer: "🍯" },

{ image: "https://i.imgur.com/m1wyTYn.jpg", answer: "💷" },


{ image: "https://i.imgur.com/bKuMwB9.jpg", answer: "🔎" },


{ image: "https://i.imgur.com/ndMcpg0.jpg", answer: "👑" },


{ image: "https://i.imgur.com/7TwJFzx.jpg", answer: "🐾" },


{ image: "https://i.imgur.com/1fc6Y30.jpg", answer: "🦉" },


{ image: "https://i.imgur.com/ti2ctgy.jpg", answer: "🧖" },


{ image: "https://i.imgur.com/HaubHcA.jpg", answer: "🧑" },


{ image: "https://i.imgur.com/URCrD5a.jpg", answer: "😺" },


{ image: "https://i.imgur.com/pjtR944.jpg", answer: "🪞" },

{ image: "https://i.imgur.com/gW5wvmQ.jpg", answer: "🎣" },


{ image: "https://i.imgur.com/GfS9hyq.jpg", answer: "🛸" },

{ image: "https://i.imgur.com/1SFNM7Z.jpg", answer: "🚔" },

{ image: "https://i.imgur.com/5ygkDKf.jpg", answer: "💃" },
      
        

     


    ];

    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    const correctAnswer = randomQuestion.answer;

    const imageResponse = await axios.get(randomQuestion.image, { responseType: "arraybuffer" });
    fs.writeFileSync(tempImageFilePath, Buffer.from(imageResponse.data, "binary"));

    const attachment = [fs.createReadStream(tempImageFilePath)];
    const message = `الذي يرسل هذا أولاً يفوز`;

    api.sendMessage({ body: message, attachment }, event.threadID, (error, info) => {
        if (!error) {
            global.client.handleReply.push({
                name: this.config.name,
                messageID: info.messageID,
                correctAnswer: correctAnswer
            });
        }
    });
};