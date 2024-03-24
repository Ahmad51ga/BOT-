module.exports.config = {
	name: "الوقت",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "احمد",
	description: "معرفة الوقت بتوقيت العراق",
	commandCategory: "خدمات", 
	usages: "الوقت", 
	cooldowns: 0,
	dependencies: {}
};

module.exports.run = async function({ api, event, args, Currencies, utils, Users }) {
	const moment = require("moment");
	var time = moment.tz("Asia/Baghdad").format("HH:MM:ss L");
	let data = await api.getUserInfo(event.senderID);
    let name = await data[event.senderID].name
    return api.sendMessage(`الوقت الان هو: ${time}\nبتوقيت العراق/بغداد`, event.threadID, event.messageID)
}