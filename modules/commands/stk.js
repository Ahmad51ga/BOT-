const fs = require("fs");
module.exports.config = {
	name: "stk",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Long LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "stk",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("stk")==0 || (event.body.indexOf("stk")==0)) {
		var msg = {
				body: "STK thì vô link fb này donate cho mình nha https://www.facebook.com/profile.php?id=100052097501614",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}