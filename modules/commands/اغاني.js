module.exports.config = {
    name: "اغاني",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "عمر",
    description: "شرح",
    usages: "ا",
    commandCategory: "العاب",
    cooldowns: 0
};

const fs = require('fs');
const axios = require('axios');
const tempImageFilePath = __dirname + "/cache/musci.mp3";

module.exports.handleReply = async function ({ api, event, handleReply, Currencies }) {
    const userAnswer = event.body.trim().toLowerCase();
    const correctAnswer = handleReply.correctAnswer.toLowerCase();
    const userName = global.data.userName.get(event.senderID) || await Users.getNameUser(event.senderID);

    if (userAnswer === correctAnswer) {
        Currencies.increaseMoney(event.senderID, 100);
        api.sendMessage(`تهانينا ${userName} لقد غرفت الاغنيه وحصلت على 100 دولار`, event.threadID);

        api.unsendMessage(handleReply.messageID);
    } else {
        api.sendMessage(`خطأ، حاول مرة أخرى`, event.threadID);
    }

    fs.unlinkSync(tempImageFilePath);
};

module.exports.run = async function ({ api, event, args }) {
    const questions = [
      
      
      { music: "https://audio.jukehost.co.uk/SjcbNla60Vh8AjmXgfCVV6gAl3868xs2", answer: "سحلية" },
     

    


    ];

    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    const correctAnswer = randomQuestion.answer;

    const imageResponse = await axios.get(randomQuestion.music, { responseType: "arraybuffer" });
    fs.writeFileSync(tempImageFilePath, Buffer.from(imageResponse.data, "binary"));

    const attachment = [fs.createReadStream(tempImageFilePath)];
    const message = `ما اسم الاغنيه؟`;

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