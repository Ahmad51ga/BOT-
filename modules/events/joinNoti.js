module.exports.config = {
    name: "joinNoti",
    eventType: ["log:subscribe"],
    version: "1.0.4",
    credits: "Mirai Team",
    description: "Thông báo bot hoặc người vào nhóm",
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.run = async function({ api, event, Users, Threads }) {
   var fullYear = global.client.getTime("fullYear");
  	var getHours = await global.client.getTime("hours");
			var session = `${getHours < 3 ? "بعد منتصف الليل" : getHours < 8 ? "الصباح الباكر" : getHours < 11 ? "وقت الظهيرة" : getHours < 16 ? "قبل الظهر" : getHours < 23 ? "الليل" : "منتصف الليل"}`
    const { join } = global.nodemodule["path"];
    const { threadID } = event;
  const { PREFIX } = global.config;
    console.log(2)
    if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
        console.log(1)
        return api.sendMessage(" تمت الإضافة بنجاح ✅", threadID, async () => {
            let check = true;
            while (check) {
                setTimeout(() => check = false, 30 * 1000);
                const threadData = (await Threads.getInfo(threadID)) || {};
                if (threadData.hasOwnProperty("adminIDs")) {
                    check = false;
                    api.sendMessage("", threadID, (err, info) => {
                        global.client.handleReply.push({
                            name: "langChoose_0x01042022",
                            messageID: info.messageID,
                            adminIDs: threadData.adminIDs
                        });
                    });
                }
            }
            api.changeNickname(`[ . ] • ${(!global.config.BOTNAME) ? "Made by O M A R" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
          	api.sendMessage(`استخدم .الاوامر لعرض اوامر البوت او القائمة لإظهار الفئات المتاحة 

`, threadID);
		}); 
	}
    else {
        try {
            const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
            let { threadName, participantIDs } = await api.getThreadInfo(threadID);

            const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `hi2.jpg`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);

				if (!global.data.allUserID.includes(id)) {
					await Users.createData(id, { name: userName, data: {} });
					global.data.userName.set(id, userName);
					global.data.allUserID.push(id);
				}
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = " {name} :مرحبا\n في مجموعة  {threadName} \n{type} نتمنى أن تحظى بوقت ممتع معنا 🌹" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'các bạn' : '')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}
