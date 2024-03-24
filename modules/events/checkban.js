module.exports.config = {
	name: 'checkban',
	eventType: ['log:subscribe'],
	version: '1.0.0',
	credits: 'DuyVuong',
	description: 'Listen events',
	dependencies: ''
};

module.exports.run = async function({ api, event, client }) {
	if (event.logMessageType == 'log:subscribe') {
		const fs = require('fs-extra');
		let { threadID, messageID } = event;

		if (!fs.existsSync(__dirname + `/../commands/cache/bans.json`)) return;

		var datawarn = JSON.parse(
			fs.readFileSync(__dirname + `/../commands/cache/bans.json`)
		);

		var listban = datawarn.banned[threadID];

		const allUserThread = (await api.getThreadInfo(event.threadID))
			.participantIDs;

		for (let info of allUserThread) {
			if (listban.includes(parseInt(info))) {
				api.removeUserFromGroup(parseInt(info), threadID, e => {
					if (e) return api.sendMessage(e, threadID);
					api.sendMessage(
						`◆━━━━━━━━━◆ BANNED ◆━━━━━━━━━◆\n\n[${info}] المجموعه محضوره كلمو حمزة سكوربيون عمي وعمكم يفكها 👀❤️`,
						threadID
					);
				});
			}
		}
	}
};