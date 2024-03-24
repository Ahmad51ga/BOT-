module.exports.config = {
	name: "حذف",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "احمد",
	description: "يحذف رسائله فقط رد على الرسالة ✅",
	commandCategory: "مسؤولي المجموعات",
	usages: "حذف",
	cooldowns: 0
};

module.exports.languages = {
	"vi": {
		"returnCant": "Không thể gỡ tin nhắn của người khác.",
		"missingReply": "Hãy reply tin nhắn cần gỡ."
	},
	"en": {
		"returnCant": "لا يمكن حذف رسائل الآخرين 💔",
		"missingReply": "رد على الرسالة التي تريد حذفها ✅"
	}
}

module.exports.run = function({ api, event, getText }) {
	if (event.messageReply.senderID != api.getCurrentUserID()) return api.sendMessage(getText("returnCant"), event.threadID, event.messageID);
	if (event.type != "message_reply") return api.sendMessage(getText("missingReply"), event.threadID, event.messageID);
	return api.unsendMessage(event.messageReply.messageID);
}