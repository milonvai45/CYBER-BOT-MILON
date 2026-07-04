const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
name: "admin",
version: "1.0.0",
hasPermssion: 0,
credits: "ULLASH", //don't change my credit
description: "Show Owner Info",
commandCategory: "info",
usages: "",
cooldowns: 5
};

module.exports.run = async function({ api, event }) {
var time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

var callback = () => api.sendMessage({ body: `┏━━━━━━━━━━━━━━━━━━━━━┓
┃✡️ 𝐌𝐢𝐥𝐨𝐧 🌟 𝐀𝐝𝐦𝐢𝐧 𝐈𝐍𝐅𝐎 🌟
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 👤 𝐍𝐚𝐦𝐞 : 𝐌𝐃 𝐌𝐢𝐥𝐨𝐧 𝐒𝐚𝐫𝐤𝐚𝐫 ッ
┃ 🚹 𝐆𝐞𝐧𝐝𝐞𝐫 : 𝐌𝐚𝐥𝐞
┃ ❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧 : 𝐏𝐮𝐫𝐞 𝐒𝐢𝐧𝐠𝐥𝐞 🥲
┃ 🎂 𝐀𝐠𝐞 : 𝟐𝟑+
┃ 🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧 : 𝐈𝐬𝐥𝐚𝐦
┃ 🏫 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 : 𝐃𝐚𝐤𝐡𝐢𝐥 (𝐒𝐒𝐂 𝟐𝟎𝟐𝟎)
┃ 🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬 : 𝐊𝐮𝐫𝐢𝐠𝐫𝐚𝐦, 𝐁𝐚𝐧𝐠𝐥𝐚𝐝𝐞𝐬𝐡
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 💬 𝐌𝐞𝐬𝐬𝐞𝐧𝐠𝐞𝐫 :
┃ m.me/100081225144815
┃ 🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 :
┃ https://www.facebook.com/share/1L5yE6MrT6/
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🕒 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐓𝐢𝐦𝐞: ${time}
┗━━━━━━━━━━━━━━━━━━━━━┛`,
attachment: fs.createReadStream(__dirname + "/cache/1.png")
}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));

return request(encodeURI(`https://i.imgur.com/O9mM8gZ.jpeg`)) .pipe(fs.createWriteStream(__dirname + '/cache/1.png')) .on('close', () => callback()); 

};
