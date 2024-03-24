module.exports.config = {
  name: "لوكنت-شخصية-انمي",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "عمر",
  description: "لو كنت شخصيه انمي شو هتكون",
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
  
  
  
  "https://i.imgur.com/Ox66l9Z.jpg",
"https://i.imgur.com/aKdkyq7.jpg",
"https://i.imgur.com/jLznBn7.jpg",
"https://i.imgur.com/8JCQusT.jpg",
"https://i.imgur.com/DLdV3Fb.jpg",
"https://i.imgur.com/DIFdT8K.jpg",
"https://i.imgur.com/pGhX5jo.jpg",
"https://i.imgur.com/ncUXteE.jpg",
"https://i.imgur.com/eqcaaiy.jpg",
"https://i.imgur.com/C46Tdn4.jpg",
"https://i.imgur.com/cSzXezb.jpg",
"https://i.imgur.com/8AD3oyy.jpg",
"https://i.imgur.com/hubTOvL.jpg",
"https://i.imgur.com/QfM1I3I.jpg",
"https://i.imgur.com/jSAaqGf.jpg",
"https://i.imgur.com/oxueeTx.jpg",
"https://i.imgur.com/NMaJClx.jpg",
"https://i.imgur.com/fkt0nPO.jpg",
"https://i.imgur.com/sP0GroV.jpg",
"https://i.imgur.com/tplLDdk.jpg",
"https://i.imgur.com/CrXX1uA.jpg",
"https://i.imgur.com/pL8qLAY.jpg",
"https://i.imgur.com/8tGIhC0.jpg",
"https://i.imgur.com/yHvBGSw.jpg",
"https://i.imgur.com/xwH4gNR.jpg",
"https://i.imgur.com/9H7UkxG.jpg",
"https://i.imgur.com/gRqfcsa.jpg",
"https://i.imgur.com/Ik1YHat.jpg",
"https://i.imgur.com/IBCbuqf.jpg",
"https://i.imgur.com/G5DN13O.jpg",
"https://i.imgur.com/wvTiL8G.jpg",
"https://i.imgur.com/i8M18aS.jpg",
"https://i.imgur.com/cGsCa8T.jpg",
"https://i.imgur.com/JRVrHt0.jpg",
"https://i.imgur.com/vbjSKOR.jpg",
"https://i.imgur.com/ZqptQAr.jpg",
"https://i.imgur.com/9olny26.jpg",
"https://i.imgur.com/mHiUCVg.jpg",
"https://i.imgur.com/NE4wp3m.jpg",
"https://i.imgur.com/unFiJeJ.jpg",
"https://i.imgur.com/coHOKUN.jpg",
"https://i.imgur.com/n5zIdCm.jpg",
"https://i.imgur.com/SbLrbov.jpg",
"https://i.imgur.com/OxmkjAf.jpg",
"https://i.imgur.com/kwIewBK.jpg",
"https://i.imgur.com/ffFCUg0.jpg",
"https://i.imgur.com/5GZ7PNW.jpg",
"https://i.imgur.com/hIkQo3E.jpg",
"https://i.imgur.com/YDacJef.jpg",
"https://i.imgur.com/qjW8MsB.jpg",
"https://i.imgur.com/s38itmL.jpg",
"https://i.imgur.com/u4mawat.jpg",
"https://i.imgur.com/qQJoeB7.jpg",
"https://i.imgur.com/x5kg4jk.jpg",
"https://i.imgur.com/IvzLsP8.jpg",
"https://i.imgur.com/cdlStiG.jpg",
"https://i.imgur.com/4tSxtxv.jpg",
"https://i.imgur.com/YjJEsZE.jpg",
"https://i.imgur.com/EGOIJJv.jpg",
"https://i.imgur.com/ML1ATCb.jpg",
"https://i.imgur.com/nl0Sjbc.jpg",
"https://i.imgur.com/JewSGiI.jpg",
"https://i.imgur.com/MqKB2V9.jpg",
"https://i.imgur.com/RCklDGx.jpg",
"https://i.imgur.com/Up2uCPB.jpg",
"https://i.imgur.com/aTuzpWM.jpg",
"https://i.imgur.com/HgMzXA0.jpg",
"https://i.imgur.com/eElXBcc.jpg",
"https://i.imgur.com/Nkao3B4.jpg",
"https://i.imgur.com/AArPIsb.jpg",
"https://i.imgur.com/Gj9wcsm.jpg",
"https://i.imgur.com/tCd2Wfm.jpg",
"https://i.imgur.com/HTJq7vZ.jpg",
"https://i.imgur.com/RPtjTT0.jpg",
"https://i.imgur.com/NXRoXky.jpg",
"https://i.imgur.com/NemwzoS.jpg",
"https://i.imgur.com/kF2RoKS.jpg",
"https://i.imgur.com/m8eTVJB.jpg",



  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 1) api.sendMessage("لازمك 500 دولار لتعرف شو شخصيتك 🐢",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 500})
   var callback = () => api.sendMessage({body:`تم خصم 500 دولار \n\n لو كنت شخصية انمي هتكون 👇🏻`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     }
   };