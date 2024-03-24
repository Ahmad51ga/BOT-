const axios = require("axios");

module.exports.config = {
name: "بارد",
version: "1.0.0",
hasPermssion: 0,
credits: "احمد",
description: "سؤال ذكاء اصطناعي",
commandCategory: "خدمات",
usages: "[سؤال]",
cooldowns: 5,
};
module.exports.run = async function({ api, event, args }) {
let { threadID, messageID, body } = event;
const content = encodeURIComponent(args.join(" "));
if (!args[0]) return api.sendMessage("نعم تفضل اسأل ما تريد", threadID, messageID);
try {
const res = await axios.get(`https://bard-api.khyryslh2.repl.co/khir/${content}`);
const respond = res.data.answer;
if (res.data.error) {
api.sendMessage("خطأ: " + res.data.error, threadID, messageID);
} else {
api.sendMessage(respond, threadID, messageID);
}
} catch (error) {
console.error(error);
api.sendMessage("حصل خطأ في السيرفر أثناء معالجة الاستفسار ❌", threadID, messageID);
}
};
