module.exports.config = {
name: "ارسمي",
version: "80.6.2", 
hasPermssion: 0,
credits: "عمر",
description: "رسم صورة من نص يجب ان تضمن رقم في البدايه مثال ارسمي 2 قطه", 
commandCategory: "صور",
usages: "ارسمي [الرقم] [النص]",
cooldowns: 2,
};
module.exports.run = async ({ api, event, args }) => {
const axios = require('axios');
const fs = require('fs-extra');
let { threadID, messageID } = event;
if (args.length < 2) {
return api.sendMessage("استخدم الأمر بشكل صحيح. على سبيل المثال: رسم 1 قطه \n حيث ان 1 هو رقم الاستايل الرسم ", threadID, messageID);
}
const number = parseInt(args[0]);
if (isNaN(number)) {
return api.sendMessage("الرقم غير صحيح. يجب أن يكون الرقم هو الجزء الأول من النص يوجد 30 ستايل للرسم.", threadID, messageID);
}
const keySearch = args.slice(1).join(" ");
const translationResponse = await axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURIComponent(keySearch)}`);
const translation = translationResponse.data[0][0][0];
const path = __dirname + `/cache/pol7i.png`;
const poli = (await axios.get(`https://aliestercrowley.com/api/crowgen.php?model=${number}&prompt=${translation}`, {
responseType: "arraybuffer",
})).data;
fs.writeFileSync(path, Buffer.from(poli, "binary"));
api.sendMessage({
body: "اتمنى أن تعجبك 😇✅",
attachment: fs.createReadStream(path)
}, threadID, () => fs.unlinkSync(path), messageID);
};
