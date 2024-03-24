module.exports.config = {
  name: "بروبنات",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "عمر",
  description: "بروفايل-بنات",
  commandCategory: "صور",
  usages: "ا",
  cooldowns: 0,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
  
  
  
"https://i.imgur.com/kUeoTeu.jpg",
"https://i.imgur.com/g4BAB9q.jpg",
"https://i.imgur.com/UNjpNA5.jpg",
"https://i.imgur.com/NTqSIJj.jpg",
"https://i.imgur.com/z3zYW1g.jpg",
"https://i.imgur.com/kA2QVJx.jpg",
"https://i.imgur.com/X7d8bCV.jpg",
"https://i.imgur.com/e2N3wr8.jpg",
"https://i.imgur.com/74E5iSv.jpg",
"https://i.imgur.com/rQHkPln.jpg",
"https://i.imgur.com/m7vnOZr.jpg",
"https://i.imgur.com/LNERj4V.jpg",
"https://i.imgur.com/5gMKry8.jpg",
"https://i.imgur.com/fKuLvw2.jpg",
"https://i.imgur.com/VXu3jqj.jpg",
"https://i.imgur.com/acPwDqn.jpg",
"https://i.imgur.com/MtYk8g4.jpg",
"https://i.imgur.com/JYEMSTz.jpg",
"https://i.imgur.com/Fi2hh5t.jpg",
"https://i.imgur.com/BrFM2Di.jpg",
"https://i.imgur.com/vr3Qzxm.jpg",
"https://i.imgur.com/kB6cohR.jpg",  
"https://i.imgur.com/k487hTh.jpg",
"https://i.imgur.com/tE9j2Qq.jpg",
"https://i.imgur.com/B2yZ4KW.jpg",
"https://i.imgur.com/93yz2in.jpg",
"https://i.imgur.com/3mCrhZB.jpg",
"https://i.imgur.com/pyrE9nI.jpg",
"https://i.imgur.com/sY74VWz.jpg",
"https://i.imgur.com/YXfRkeN.jpg",
"https://i.imgur.com/ebYSHCS.jpg",
"https://i.imgur.com/dblMQfn.jpg",
"https://i.imgur.com/kjXx8G9.jpg",
"https://i.imgur.com/MwNayU5.jpg",
"https://i.imgur.com/mnjpqox.jpg",
"https://i.imgur.com/q0BJ094.jpg",
"https://i.imgur.com/zZnWSPv.jpg",
"https://i.imgur.com/mNzyWYk.jpg",
"https://i.imgur.com/4U3NRaE.jpg",
"https://i.imgur.com/eg8eKyA.jpg",
"https://i.imgur.com/ZSdLeEE.jpg",
"https://i.imgur.com/5S1VEeX.jpg",
"https://i.imgur.com/N3DdHZE.jpg",
"https://i.imgur.com/j7UY341.jpg",
"https://i.imgur.com/8ACAMie.jpg",
"https://i.imgur.com/kJqdAra.jpg",
"https://i.imgur.com/4kAZ2ik.jpg",
"https://i.imgur.com/ySVGbDg.jpg",
"https://i.imgur.com/Cy7135a.jpg",
"https://i.imgur.com/zgXQa00.jpg",


  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 1) api.sendMessage("لازمك 500 دولار لتعرف شو بروفايلك 🐢",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 500})
   var callback = () => api.sendMessage({body:`تم خصم 500 دولار \n\n '•| هذا صور آلتي طلبتها|• شكرا لثقتك بنا𒁍🫀 '`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     }
   };