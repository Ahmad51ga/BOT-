module.exports.config = {
  name: "أرسمي",
  version: "1.0.",
  hasPermssion: 0,
  credits: "عمر",
  description: "رسم صوره من نص استخدم اللغه الانجليزيه",
  commandCategory: "صور",
  usages: "اكتب انجلش",
  cooldowns: 2,
};
module.exports.run = async ({api, event, args }) => {
const axios = require('axios');
const fs = require('fs-extra');
 let { threadID, messageID } = event;
  let query = args.join(" ");
  if (!query) return api.sendMessage("اكتب شي بالانجليزي لرسم شكله", threadID, messageID);
let path = __dirname + `/cache/poli.png`;
  const poli = (await axios.get(`https://image.pollinations.ai/prompt/${query}`, {
    responseType: "arraybuffer",
  })).data;
  fs.writeFileSync(path, Buffer.from(poli, "utf-8"));
  api.sendMessage({
    body: "اتمنى ان تعجبك 😇✅",
    attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID);
};