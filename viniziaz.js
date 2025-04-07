const {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType
} = require("@whiskeysockets/baileys");
const fs = require("fs");
const path = require('path');
const util = require("util");
global.axios = require('axios').default;
const chalk = require("chalk");
const speed = require("performance-now");
const Genius = require("genius-lyrics");
const yts = require("yt-search");
const {
  DateTime
} = require('luxon');
const uploadtoimgur = require('./lib/imgur');
const advice = require("badadvice");
const {
  c,
  cpp,
  node,
  python,
  java
} = require('compile-run');
const acrcloud = require("acrcloud");
const ytdl = require("ytdl-core");
const Client = new Genius.Client("TUoAEhL79JJyU-MpOsBDkFhJFWFH28nv6dgVgPA-9R1YRwLNP_zicdX2omG2qKE8gYLJat5F5VSBNLfdnlpfJg"); // Scrapes if no key is provided
const {
  TelegraPh,
  UploadFileUgu,
  webp2mp4File,
  floNime
} = require('./lib/viniziazupload');
const {
  Configuration,
  OpenAI
} = require("openai");
const {
  menu,
  autoread,
  mode,
  antidel,
  antitag,
  appname,
  herokuapi,
  gptdm,
  botname,
  antibot,
  prefix,
  author,
  packname,
  mycode,
  admin,
  botAdmin,
  dev,
  group,
  bad,
  DevViniziaz,
  NotOwner,
  antilink,
  antilinkall,
  wapresence,
  badwordkick
} = require("./set.js");
const {
  smsg,
  runtime,
  fetchUrl,
  isUrl,
  processTime,
  formatp,
  tanggal,
  formatDate,
  getTime,
  sleep,
  generateProfilePicture,
  clockString,
  fetchJson,
  getBuffer,
  jsonformat,
  format,
  parseMention,
  getRandom
} = require('./lib/viniziazfunc');
const {
  exec,
  spawn,
  execSync
} = require("child_process");
module.exports = viniziaz = async (client, m, chatUpdate, store) => {
  try {
    var body = m.mtype === "conversation" ? m.message.conversation : m.mtype == "imageMessage" ? m.message.imageMessage.caption : m.mtype == "videoMessage" ? m.message.videoMessage.caption : m.mtype == "extendedTextMessage" ? m.message.extendedTextMessage.text : m.mtype == "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId : m.mtype == "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId : m.mtype == "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId : m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "";
    var budy = typeof m.text == "string" ? m.text : "";
    var msgR = m.message.extendedTextMessage?.contextInfo?.quotedMessage;
    //========================================================================================================================//
    //========================================================================================================================//	  
    const Heroku = require("heroku-client");
    const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const botNumber = await client.decodeJid(client.user.id);
    const itsMe = !!(m.sender == botNumber);
    let text = q = args.join(" ");
    m.isBaileys = m.id.startsWith("BAE5") && m.id.length === 16;
    const from = m.chat;
    const reply = m.reply;
    const sender = m.sender;
    const mek = chatUpdate.messages[0];
    const getGroupAdmins = participants => {
      let admins = [];
      for (let i of participants) {
        if (i.admin === "superadmin") {
          admins.push(i.id);
        } else if (i.admin === "admin") {
          admins.push(i.id);
        } else {
          "";
        }
      }
      return admins || [];
    };
    //========================================================================================================================//
    //========================================================================================================================//	  
    const nicki = m.quoted || m;
    const quoted = nicki.mtype == 'buttonsMessage' ? nicki[Object.keys(nicki)[1]] : nicki.mtype == 'templateMessage' ? nicki.hydratedTemplate[Object.keys(nicki.hydratedTemplate)[1]] : nicki.mtype == 'product' ? nicki[Object.keys(nicki)[0]] : m.quoted ? m.quoted : m;
    //========================================================================================================================//	  
    const mime = (quoted.msg || quoted).mimetype || "";
    const qmsg = quoted.msg || quoted;
    const cmd = body.startsWith(prefix);
    const badword = bad.split(",");
    const Owner = DevViniziaz.map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender);

    //========================================================================================================================//		      
    //========================================================================================================================//	      
    const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch(e => {}) : "";
    const groupName = m.isGroup && groupMetadata ? await groupMetadata.subject : "";
    const participants = m.isGroup && groupMetadata ? await groupMetadata.participants : "";
    const groupAdmin = m.isGroup ? await getGroupAdmins(participants) : "";
    const isBotAdmin = m.isGroup ? groupAdmin.includes(botNumber) : false;
    const isAdmin = m.isGroup ? groupAdmin.includes(m.sender) : false;
    const maindev2 = '254759925133'.split(",");
    const date = new Date();
    const timestamp = speed();
    const Rspeed = speed() - timestamp;
    //========================================================================================================================//
    //========================================================================================================================//

    if (!fs.existsSync('message_data')) {
      fs.mkdirSync('message_data');
    }
    function loadChatData(remoteJid, messageId) {
      const chatFilePath = path.join('message_data', remoteJid, `${messageId}.json`);
      try {
        const data = fs.readFileSync(chatFilePath, 'utf8');
        return JSON.parse(data) || [];
      } catch (error) {
        return [];
      }
    }
    function saveChatData(remoteJid, messageId, chatData) {
      const chatDir = path.join('message_data', remoteJid);
      if (!fs.existsSync(chatDir)) {
        fs.mkdirSync(chatDir, {
          recursive: true
        });
      }
      const chatFilePath = path.join(chatDir, `${messageId}.json`);
      try {
        fs.writeFileSync(chatFilePath, JSON.stringify(chatData, null, 2));
      } catch (error) {
        console.error('Error saving chat data:', error);
      }
    }
    function handleIncomingMessage(message) {
      const remoteJid = message.key.remoteJid;
      const messageId = message.key.id;
      const chatData = loadChatData(remoteJid, messageId);
      chatData.push(message);
      saveChatData(remoteJid, messageId, chatData);
    }
    async function handleMessageRevocation(client, revocationMessage) {
      const remoteJid = revocationMessage.key.remoteJid;
      const messageId = revocationMessage.message.protocolMessage.key.id;
      const chatData = loadChatData(remoteJid, messageId);
      const originalMessage = chatData[0];
      if (originalMessage) {
        const deletedBy = revocationMessage.participant || revocationMessage.key.participant || revocationMessage.key.remoteJid;
        const sentBy = originalMessage.key.participant || originalMessage.key.remoteJid;
        if (deletedBy.includes(client.user.id) || sentBy.includes(client.user.id)) {
          return;
        }
        let notificationText = `░𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭 𝗔𝗡𝗧𝗜𝗗𝗘𝗟𝗘𝗧𝗘 𝗥𝗘𝗣𝗢𝗥𝗧░\n\n` + ` 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗯𝘆: ${`@${deletedBy.split('@')[0]}`}\n\n`;
        if (originalMessage.message?.conversation) {
          // Text message
          const messageText = originalMessage.message.conversation;
          notificationText += ` 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗠𝗲𝘀𝘀𝗮𝗴𝗲: ${messageText}`;
          await client.sendMessage(client.user.id, {
            text: notificationText
          }, {
            quoted: m
          });
        } else if (originalMessage.message?.extendedTextMessage) {
          // Extended text message (quoted messages)
          const messageText = originalMessage.message.extendedTextMessage.text;
          notificationText += ` 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗖𝗼𝗻𝘁𝗲𝗻𝘁: ${messageText}`;
          await client.sendMessage(client.user.id, {
            text: notificationText
          }, {
            quoted: m
          });
        }
      }
    }
    //========================================================================================================================//
    //========================================================================================================================//	  
    // Push Message To Console
    let argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;

    //========================================================================================================================//
    const Grace = mek.key.remoteJid;
    if (wapresence === 'online') {
      client.sendPresenceUpdate('available', Grace);
    } else if (wapresence === 'typing') {
      client.sendPresenceUpdate('composing', Grace);
    } else if (wapresence === 'recording') {
      client.sendPresenceUpdate('recording', Grace);
    } else {
      client.sendPresenceUpdate('unavailable', Grace);
    }
    //========================================================================================================================//    
    if (cmd && mode === 'PRIVATE' && !itsMe && !Owner && m.sender !== dev) {
      return;
    }
    //========================================================================================================================//	  
    //========================================================================================================================//	  
    if (autoread === 'TRUE' && !m.isGroup) {
      client.readMessages([m.key]);
    }
    if (itsMe && mek.key.id.startsWith("BAE5") && mek.key.id.length === 16 && !m.isGroup) {
      return;
    }
    //========================================================================================================================//
    if (antidel === "TRUE") {
      if (mek.message?.protocolMessage?.key) {
        await handleMessageRevocation(client, mek);
      } else {
        handleIncomingMessage(mek);
      }
    }
    //========================================================================================================================//
    client.sendContact = async (_0x1b8d9c, _0x2f45f4, _0x484fce = '', _0x4ed280 = {}) => {
      let _0x46a6cb = [];
      for (let _0x5856a6 of _0x2f45f4) {
        _0x46a6cb.push({
          'displayName': "VINIZIAZ DEV",
          'vcard': "BEGIN:VCARD\nVERSION:3.0\nN: VINIZIAZ DEV\nFN:VINIZIAZ DEV\nitem1.TEL;waid=" + _0x5856a6 + ':' + _0x5856a6 + "\nitem1.X-ABLabel:Number\nitem2.EMAIL;type=INTERNET: clintoncheruiyotlangat@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://www.instagram.com/viniznimco?igsh=MTdmenBhMzJ3NXkwaw==\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Kenya;;;;\nitem4.X-ABLabel:Region\nEND:VCARD"
        });
      }
      client.sendMessage(_0x1b8d9c, {
        'contacts': {
          'displayName': "VINIZIAZ DEV",
          'contacts': _0x46a6cb
        },
        ..._0x4ed280
      }, {
        'quoted': _0x484fce
      });
    };
    if (antibot === "TRUE" && mek.key.id.startsWith("BAE5") && m.isGroup && !isAdmin && isBotAdmin && mek.key.id.length === 16) {
      kidts = m.sender;
      client.sendMessage(m.chat, {
        'text': "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 antibot:\n\n@" + kidts.split('@')[0] + " has been identified as a bot. Removed by VINIZIAZ to prevent unnecessary spam!",
        'contextInfo': {
          'mentionedJid': [kidts]
        }
      }, {
        'quoted': m
      });
      await client.groupParticipantsUpdate(m.chat, [kidts], "remove");
    }
    //========================================================================================================================//
    //========================================================================================================================//	  
    if (budy.startsWith('>')) {
      if (!Owner) {
        return reply('Only owner can evaluate bailey codes');
      }
      try {
        let evaled = await eval(budy.slice(2));
        if (typeof evaled !== 'string') {
          evaled = require('util').inspect(evaled);
        }
        await reply(evaled);
      } catch (err) {
        await reply(String(err));
      }
    }
    //========================================================================================================================// 
    async function mp3d() {}
    //========================================================================================================================// 
    if (gptdm === 'TRUE' && m.chat.endsWith("@s.whatsapp.net")) {
      try {
        const {
          default: Gemini
        } = await import('gemini-ai');
        const gemini = new Gemini("AIzaSyDJUtskTG-MvQdlT4tNE319zBqLMFei8nQ");
        const chat = gemini.createChat();
        const res = await chat.ask(text);
        await m.reply(res);
      } catch (e) {
        m.reply("I am unable to generate responses\n\n" + e);
      }
    }
    //========================================================================================================================//
    if (antitag === 'TRUE' && !Owner && isBotAdmin && !isAdmin && m.mentionedJid && m.mentionedJid.length > 10) {
      if (itsMe) {
        return;
      }
      const cate = m.sender;
      await client.sendMessage(m.chat, {
        text: `@${cate.split("@")[0]}, Antitag is Active🔨`,
        contextInfo: {
          mentionedJid: [cate]
        }
      }, {
        quoted: m
      });
      await client.sendMessage(m.chat, {
        delete: {
          remoteJid: m.chat,
          fromMe: false,
          id: m.key.id,
          participant: cate
        }
      });
      await client.groupParticipantsUpdate(m.chat, [cate], "remove");
    }
    //========================================================================================================================//
    //========================================================================================================================//	  
    async function loading() {
      var lod = ["🖤", "🤬", "❤", "✅", "𝗣𝗶𝗻𝗴𝗶𝗻𝗴 𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗲!"];
      let {
        key
      } = await client.sendMessage(from, {
        text: '𝗣𝗼𝗻𝗴'
      });
      for (let i = 0; i < lod.length; i++) {
        await client.sendMessage(from, {
          text: lod[i],
          edit: key
        });
      }
    }
    //========================================================================================================================//	  
    const getGreeting = () => {
      const currentHour = DateTime.now().setZone('Africa/Nairobi').hour;
      if (currentHour >= 5 && currentHour < 12) {
        return '𝗚𝗼𝗼𝗱 𝗠𝗼𝗿𝗻𝗶𝗻𝗴 🌅';
      } else if (currentHour >= 12 && currentHour < 16) {
        return '𝗚𝗼𝗼𝗱 𝗔𝗳𝘁𝗲𝗿𝗻𝗼𝗼𝗻 ☀️';
      } else if (currentHour >= 16 && currentHour < 20) {
        return '𝗚𝗼𝗼𝗱 𝗘𝘃𝗲𝗻𝗶𝗻𝗴 🌇';
      } else {
        return '𝗚𝗼𝗼𝗱 𝗡𝗶𝗴𝗵𝘁 😴';
      }
    };
    //========================================================================================================================//
    //========================================================================================================================//

    //========================================================================================================================//	
    if (badwordkick === 'TRUE' && isBotAdmin && !isAdmin && body && new RegExp("\\b" + badword.join("\\b|\\b") + "\\b").test(body.toLowerCase())) {
      reply("Hey niggah.\n\nMy owner hates usage of bad words in my presence!");
      client.groupParticipantsUpdate(from, [sender], 'remove');
    }
    //========================================================================================================================//	  
    if (antilink === 'TRUE' && body.includes('chat.whatsapp.com') && !Owner && isBotAdmin && !isAdmin && m.isGroup) {
      kid = m.sender;
      client.sendMessage(m.chat, {
        delete: {
          remoteJid: m.chat,
          fromMe: false,
          id: m.key.id,
          participant: kid
        }
      }).then(() => client.groupParticipantsUpdate(m.chat, [kid], 'remove'));
      client.sendMessage(m.chat, {
        text: `𝗛𝗲𝘆 @${kid.split("@")[0]}👋\n\n𝗦𝗲𝗻𝗱𝗶𝗻𝗴 𝗚𝗿𝗼𝘂𝗽 𝗟𝗶𝗻𝗸𝘀 𝗶𝘀 𝗣𝗿𝗼𝗵𝗶𝗯𝗶𝘁𝗲𝗱 𝗶𝗻 𝘁𝗵𝗶𝘀 𝗚𝗿𝗼𝘂𝗽 !`,
        contextInfo: {
          mentionedJid: [kid]
        }
      }, {
        quoted: m
      });
    }
    //========================================================================================================================//
    if (antilinkall === 'TRUE' && body.includes('https://') && !Owner && isBotAdmin && !isAdmin && m.isGroup) {
      ki = m.sender;
      client.sendMessage(m.chat, {
        delete: {
          remoteJid: m.chat,
          fromMe: false,
          id: m.key.id,
          participant: ki
        }
      }).then(() => client.groupParticipantsUpdate(m.chat, [ki], 'remove'));
      client.sendMessage(m.chat, {
        text: `𝗛𝗲𝘆 @${ki.split("@")[0]}👋\n\n𝗦𝗲𝗻𝗱𝗶𝗻𝗴 𝗟𝗶𝗻𝗸𝘀 𝗶𝘀 𝗣𝗿𝗼𝗵𝗶𝗯𝗶𝘁𝗲𝗱 𝗶𝗻 𝘁𝗵𝗶𝘀 𝗚𝗿𝗼𝘂𝗽 !`,
        contextInfo: {
          mentionedJid: [ki]
        }
      }, {
        quoted: m
      });
    }

    //========================================================================================================================//
    //========================================================================================================================//

    if (cmd && !m.isGroup) {
      console.log(chalk.black(chalk.bgWhite("[ VINIZIAZ-XMD ]")), chalk.keyword("turquoise")(argsLog), chalk.magenta("From"), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`));
    } else if (cmd && m.isGroup) {
      console.log(chalk.black(chalk.bgWhite("[ LOGS ]")), chalk.keyword("turquoise")(argsLog), chalk.magenta("From"), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`), chalk.blueBright("IN"), chalk.green(groupName));
    }

    //========================================================================================================================//
    //========================================================================================================================//

    if (cmd) {
      switch (command) {
        case "menu":
          await mp3d();
          if (menu === 'VIDEO') {
            client.sendMessage(m.chat, {
              video: fs.readFileSync('./Media/menu.mp4'),
              caption: `𝗛𝗲𝘆 𝘁𝗵𝗲𝗿𝗲😁, ${getGreeting()}\n\n╭═════〘 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭  𝗫𝗠𝗗 〙═════╮
┃✫╭═─────────────────═╮
┃✬│ 𝗨𝘀𝗲𝗿 : ${m.pushName}
┃✫│ 𝗣𝗿𝗲𝗳𝗶𝘅 : ${prefix}
┃✫│ 𝗠𝗼𝗱𝗲 : ${mode}
┃✯│ 𝗦𝗽𝗲𝗲𝗱 :   ${Rspeed.toFixed(4)} 𝗠𝘀
┃✬│ 𝗧𝗶𝗺𝗲 : ${DateTime.now().setZone('Africa/Nairobi').toLocaleString(DateTime.TIME_SIMPLE)} on ${date.toLocaleString('en-US', {
                weekday: 'long',
                timeZone: 'Africa/Nairobi'
              })}
┃✫│ 𝗔𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 𝗥𝗔𝗠 : 32𝗚𝗕 𝗼𝗳 64𝗚𝗕
┃✫│═════════════════════
┃✬│█▀██████▀█▀██▀███▄█▀█
┃✫│═════════════════════
╰══──────────────────══╯
●════ 〘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 〙═──═●
╭══───────◇───────══╮
┃✬│ 𝗩𝗶𝗱𝗲𝗼
┃✫│ 𝗣𝗹𝗮𝘆
┃✬│ 𝗣𝗹𝗮𝘆2
┃✫│ 𝗦𝗼𝗻𝗴
┃✫│ 𝗦𝗼𝗻𝗴2
┃✬│ 𝗙𝗯𝗱𝗹
┃✫│ 𝗧𝗶𝗸𝘁𝗼𝗸
┃✬│ 𝗧𝘄𝗶𝘁𝘁𝗲𝗿
┃✫│ 𝗶𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺
┃✫│ 𝗠𝗼𝘃𝗶𝗲
┃✬│ 𝗟𝘆𝗿𝗶𝗰𝘀
┃✫│ 𝗪𝗵𝗮𝘁𝘀𝗼𝗻𝗴
┃✬│ 𝗬𝘁𝘀
┃✫│ 𝗬𝘁𝗺𝗽3
┃✬│ 𝗬𝘁𝗺𝗽4
╰══───────◇───────══╯
●═════  〘 𝗘𝗗𝗜𝗧 〙══───═●
╭══───────◇───────══╮
┃✫│ 𝗦𝘁𝗶𝗰𝗸𝗲𝗿
┃✬│ 𝗦𝗺𝗲𝗺𝗲
┃✫│ 𝗣𝗵𝗼𝘁𝗼
┃✫│ 𝗠𝗽4
┃✬│ 𝗥𝗲𝘁𝗿𝗶𝗲𝘃𝗲
┃✫│ 𝗩𝘃
┃✫│ 𝗩𝘃2
┃✬│ 𝗦𝗰𝗿𝗲𝗲𝗻𝘀𝗵𝗼𝘁
┃✫│ 𝗠𝗶𝘅
┃✬│ 𝗧𝗮𝗸𝗲
┃✫│ 𝗧𝘄𝗲𝗲𝘁
┃✫│ 𝗤𝘂𝗼𝘁𝗲𝗹𝘆
╰══───────◇───────══╯
●═══〘 𝗖𝗢𝗡𝗙𝗜𝗚 𝗩𝗔𝗥𝗦 〙═───═●
╭══───────◇───────══╮
┃✯│ 𝗔𝗻𝘁𝗶𝗱𝗲𝗹𝗲𝘁𝗲
┃✫│ 𝗔𝗻𝘁𝗶𝗰𝗮𝗹𝗹
┃✯│ 𝗔𝗻𝘁𝗶𝗳𝗼𝗿𝗲𝗶𝗴𝗻
┃✫│ 𝗔𝗻𝘁𝗶𝘁𝗮𝗴
┃✯│ 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸
┃✯│ 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸_𝗮𝗹𝗹
┃✯│ 𝗚𝗽𝘁_𝗜𝗻𝗯𝗼𝘅
╰══───────◇───────══╯
●═════  〘 𝗚𝗣𝗧 〙═────═●
╭══───────◇───────══╮
┃✬│ 𝗔𝗶
┃✯│ 𝗔𝗶2
┃✫│ 𝗩𝗶𝘀𝗶𝗼𝗻
┃✫│ 𝗗𝗲𝗳𝗶𝗻𝗲
┃✯│ 𝗗𝗮𝗿𝗸𝗴𝗽𝘁
┃✫│ 𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇
┃✬│ 𝗚𝗲𝗺𝗶𝗻𝗶
┃✯│ 𝗚𝗼𝗼𝗴𝗹𝗲
┃✫│ 𝗚𝗽𝘁
┃✬│ 𝗚𝗽𝘁2
┃✫│ 𝗚𝗽𝘁3
╰══───────◇───────══╯
●════  〘 𝗚𝗥𝗢𝗨𝗣 〙═───═●
╭══───────◇───────══╮
┃✫│ 𝗔𝗽𝗽𝗿𝗼𝘃𝗲
┃✯│ 𝗥𝗲𝗷𝗲𝗰𝘁
┃✫│ 𝗣𝗿𝗼𝗺𝗼𝘁𝗲
┃✬│ 𝗗𝗲𝗺𝗼𝘁𝗲
┃✫│ 𝗗𝗲𝗹𝗲𝘁𝗲
┃✬│ 𝗥𝗲𝗺𝗼𝘃𝗲
┃✫│ 𝗙𝗮𝗸𝗲𝗿
┃✯│ 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀
┃✬│ 𝗖𝗹𝗼𝘀𝗲
┃✫│ 𝗢𝗽𝗲𝗻
┃✬│ 𝗖𝗹𝗼𝘀𝗲𝗧𝗶𝗺𝗲
┃✫│ 𝗢𝗽𝗲𝗻𝗧𝗶𝗺𝗲
┃✬│ 𝗗𝗶𝘀𝗽-𝗼𝗳𝗳
┃✫│ 𝗗𝗶𝘀𝗽-1
┃✬│ 𝗗𝗶𝘀𝗽-7
┃✫│ 𝗗𝗶𝘀𝗽-90
┃✬│ 𝗜𝗰𝗼𝗻
┃✯│ 𝗚𝗰𝗽𝗿𝗼𝗳𝗶𝗹𝗲
┃✫│ 𝗦𝘂𝗯𝗷𝗲𝗰𝘁
┃✬│ 𝗗𝗲𝘀𝗰
┃✫│ 𝗟𝗲𝗮𝘃𝗲
┃✯│ 𝗔𝗱𝗱
┃✫│ 𝗧𝗮𝗴𝗮𝗹𝗹
┃✬│ 𝗛𝗶𝗱𝗲𝘁𝗮𝗴
┃✫│ 𝗥𝗲𝘃𝗼𝗸𝗲
┃✬│ 𝗠𝘂𝘁𝗲
┃✫│ 𝗨𝗻𝗺𝘂𝘁𝗲
╰══───────◇───────══╯
●═══  〘 𝗖𝗢𝗗𝗜𝗡𝗚 〙 ═───═●
╭══───────◇───────══╮
┃✫│ 𝗖𝗮𝗿𝗯𝗼𝗻
┃✯│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗰
┃✫│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗰++
┃✯│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗷𝘀
┃✫│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗽𝘆
┃✫│ 𝗜𝗻𝘀𝗽𝗲𝗰𝘁
┃✯│ 𝗘𝗻𝗰𝗿𝘆𝗽𝘁𝗲
┃✫│ 𝗘𝘃𝗮𝗹
╰══───────◇───────══╯
●═══  〘 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 〙 ═───═●
╭══───────◇───────══╮
┃✬│ 𝗢𝘄𝗻𝗲𝗿
┃✬│ 𝗦𝗰𝗿𝗶𝗽𝘁
┃✫│ 𝗠𝗲𝗻𝘂
┃✬│ 𝗟𝗶𝘀𝘁
┃✫│ 𝗣𝗶𝗻𝗴
┃✯│ 𝗣𝗼𝗹𝗹
┃✬│ 𝗔𝗹𝗶𝘃𝗲
┃✫│ 𝗦𝗽𝗲𝗲𝗱
┃✬│ 𝗥𝗲𝗽𝗼
┃✫│ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲
┃✯│ 𝗨𝗽𝘁𝗶𝗺𝗲
┃✫│ 𝗗𝗽
┃✯│ 𝗗𝗹𝘁
┃✬│ 𝗠𝗮𝗶𝗹
┃✫│ 𝗜𝗻𝗯𝗼𝘅
┃✯│ 𝗡𝗲𝘄𝘀
┃✫│ 𝗔𝗻𝗶𝗺𝗲
╰══───────◇───────══╯
●═══   〘 𝗢𝗪𝗡𝗘𝗥  〙═───═●
╭══───────◇───────══╮
┃✬│ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁
┃✫│ 𝗔𝗱𝗺𝗶𝗻
┃✯│ 𝗖𝗮𝘀𝘁
┃✬│ 𝗕𝗿𝗼𝗮𝗱𝗰𝗮𝘀𝘁
┃✫│ 𝗝𝗼𝗶𝗻
┃✯│ 𝗚𝗲𝘁𝘃𝗮𝗿
┃✯│ 𝗥𝗲𝗱𝗲𝗽𝗹𝗼𝘆
┃✯│ 𝗨𝗽𝗱𝗮𝘁𝗲
┃✫│ 𝗦𝗲𝘁𝘃𝗮𝗿
┃✬│ 𝗕𝗼𝘁𝗽𝗽
┃✫│ 𝗙𝘂𝗹𝗹𝗽𝗽
┃✬│ 𝗕𝗹𝗼𝗰𝗸
┃✫│ 𝗨𝗻𝗯𝗼𝗰𝗸
┃✬│ 𝗞𝗶𝗹𝗹
┃✫│ 𝗞𝗶𝗹𝗹2
┃✫│ 𝗦𝗮𝘃𝗲
┃✬│ >
╰══───────◇───────══╯
●═══   〘 𝗣𝗥𝗔𝗡𝗞  〙 ═──═●
╭══───────◇───────══╮
┃✯│ 𝗛𝗮𝗰𝗸
╰══───────◇───────══╯
●═══   〘 𝗟𝗢𝗚𝗢𝗦  〙 ═──═●
╭══───────◇───────══╮
┃✯│ 𝗛𝗮𝗰𝗸𝗲𝗿
┃✫│ 𝗛𝗮𝗰𝗸𝗲𝗿2
┃✯│ 𝗚𝗿𝗮𝗳𝗳𝗶𝘁𝗶
┃✫│ 𝗖𝗮𝘁
┃✯│ 𝗦𝗮𝗻𝗱
┃✫│ 𝗚𝗼𝗹𝗱
┃✯│ 𝗔𝗿𝗲𝗻𝗮
┃✫│ 𝗗𝗿𝗮𝗴𝗼𝗻𝗯𝗮𝗹𝗹
┃✯│ 𝗡𝗮𝗿𝘂𝘁𝗼
┃✫│ 𝗖𝗵𝗶𝗹𝗱
┃✯│ 𝗟𝗲𝗮𝘃𝗲𝘀
┃✫│ 1917
┃✯│ 𝗧𝘆𝗽𝗼𝗴𝗿𝗮𝗽𝗵𝘆
╰══───────◇───────══╯
●═══ 〘  𝗧𝗘𝗫𝗧𝗠𝗔𝗞𝗘𝗥  〙═──═●
╭══───────◇───────══╮
┃✯│ 𝗣𝘂𝗿𝗽𝗹𝗲
┃✫│ 𝗡𝗲𝗼𝗻
┃✯│ 𝗡𝗼𝗲𝗹
┃✫│ 𝗠𝗲𝘁𝗮𝗹𝗹𝗶𝗰
┃✯│ 𝗗𝗲𝘃𝗶𝗹
┃✫│ 𝗜𝗺𝗽𝗿𝗲𝘀𝘀𝗶𝘃𝗲
┃✯│ 𝗦𝗻𝗼𝘄
┃✫│ 𝗪𝗮𝘁𝗲𝗿
┃✯│ 𝗧𝗵𝘂𝗻𝗱𝗲𝗿
┃✫│ 𝗜𝗰𝗲
┃✯│ 𝗠𝗮𝘁𝗿𝗶𝘅
┃✫│ 𝗦𝗶𝗹𝘃𝗲𝗿
┃✯│ 𝗟𝗶𝗴𝗵𝘁
╰══───────◇───────══╯
●═══   〘 𝗠𝗜𝗦𝗖  〙 ═──═●
╭══───────◇───────══╮
┃✫│ 𝗪𝗲𝗮𝘁𝗵𝗲𝗿
┃✯│ 𝗚𝗶𝘁𝗵𝘂𝗯
┃✫│ 𝗚𝗶𝘁𝗰𝗹𝗼𝗻𝗲
┃✯│ 𝗔𝗱𝘃𝗶𝗰𝗲
┃✫│ 𝗥𝗲𝗺𝗼𝘃𝗲𝗯𝗴
┃✯│ 𝗥𝗲𝗺𝗶𝗻𝗶
┃✯│ 𝗧𝘁𝘀
┃✯│ 𝗧𝗿𝘁
┃✫│ 𝗙𝗮𝗰𝘁
┃✯│ 𝗖𝗮𝘁𝗳𝗮𝗰𝘁
┃✫│ 𝗤𝘂𝗼𝘁𝗲𝘀
┃✯│ 𝗣𝗶𝗰𝗸𝘂𝗽𝗹𝗶𝗻𝗲
╰══───────◇───────══╯
●═══  〘 𝗢𝗧𝗛𝗘𝗥𝗦  〙 ═──═●
╭══───────◇───────══╮
┃✫│ 𝗖𝗿𝗲𝗱𝗶𝘁𝘀
┃✬│ 𝗨𝗽𝗹𝗼𝗮𝗱
┃✫│ 𝗔𝘁𝘁𝗽
┃✬│ 𝗨𝗿𝗹
┃✫│ 𝗜𝗺𝗮𝗴𝗲
┃✬│ 𝗦𝘆𝘀𝘁𝗲𝗺
┃✫╰═───────◇───────═╯
┃   𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇 !
╰══────────────────══╯`,
              gifPlayback: true
            }, {
              quoted: m
            });
          } else if (menu === 'TEXT') {
            client.sendMessage(from, {
              text: `𝗛𝗲𝘆 𝘁𝗵𝗲𝗿𝗲😁, ${getGreeting()}\n\n╭═════〘 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭  𝗫𝗠𝗗 〙═════╮
┃✫╭═─────────────────═╮
┃✬│ 𝗨𝘀𝗲𝗿 : ${m.pushName}
┃✫│ 𝗣𝗿𝗲𝗳𝗶𝘅 : ${prefix}
┃✫│ 𝗠𝗼𝗱𝗲 : ${mode}
┃✯│ 𝗦𝗽𝗲𝗲𝗱 :   ${Rspeed.toFixed(4)} 𝗠𝘀
┃✬│ 𝗧𝗶𝗺𝗲 : ${DateTime.now().setZone('Africa/Nairobi').toLocaleString(DateTime.TIME_SIMPLE)} on ${date.toLocaleString('en-US', {
                weekday: 'long',
                timeZone: 'Africa/Nairobi'
              })}
┃✫│ 𝗔𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 𝗥𝗔𝗠 : 32𝗚𝗕 𝗼𝗳 64𝗚𝗕
┃✫│═════════════════════
┃✬│█▀██████▀█▀██▀███▄█▀█
┃✫│═════════════════════
╰══──────────────────══╯
●════ 〘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 〙═──═●
╭══───────◇───────══╮
┃✬│ 𝗩𝗶𝗱𝗲𝗼
┃✫│ 𝗣𝗹𝗮𝘆
┃✬│ 𝗣𝗹𝗮𝘆2
┃✫│ 𝗦𝗼𝗻𝗴
┃✫│ 𝗦𝗼𝗻𝗴2
┃✬│ 𝗙𝗯𝗱𝗹
┃✫│ 𝗧𝗶𝗸𝘁𝗼𝗸
┃✬│ 𝗧𝘄𝗶𝘁𝘁𝗲𝗿
┃✫│ 𝗶𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺
┃✫│ 𝗠𝗼𝘃𝗶𝗲
┃✬│ 𝗟𝘆𝗿𝗶𝗰𝘀
┃✫│ 𝗪𝗵𝗮𝘁𝘀𝗼𝗻𝗴
┃✬│ 𝗬𝘁𝘀
┃✫│ 𝗬𝘁𝗺𝗽3
┃✬│ 𝗬𝘁𝗺𝗽4
╰══───────◇───────══╯
●═════  〘 𝗘𝗗𝗜𝗧 〙══───═●
╭══───────◇───────══╮
┃✫│ 𝗦𝘁𝗶𝗰𝗸𝗲𝗿
┃✬│ 𝗦𝗺𝗲𝗺𝗲
┃✫│ 𝗣𝗵𝗼𝘁𝗼
┃✫│ 𝗠𝗽4
┃✬│ 𝗥𝗲𝘁𝗿𝗶𝗲𝘃𝗲
┃✫│ 𝗩𝘃
┃✫│ 𝗩𝘃2
┃✬│ 𝗦𝗰𝗿𝗲𝗲𝗻𝘀𝗵𝗼𝘁
┃✫│ 𝗠𝗶𝘅
┃✬│ 𝗧𝗮𝗸𝗲
┃✫│ 𝗧𝘄𝗲𝗲𝘁
┃✫│ 𝗤𝘂𝗼𝘁𝗲𝗹𝘆
╰══───────◇───────══╯
●═══〘 𝗖𝗢𝗡𝗙𝗜𝗚 𝗩𝗔𝗥𝗦 〙═───═●
╭══───────◇───────══╮
┃✯│ 𝗔𝗻𝘁𝗶𝗱𝗲𝗹𝗲𝘁𝗲
┃✫│ 𝗔𝗻𝘁𝗶𝗰𝗮𝗹𝗹
┃✯│ 𝗔𝗻𝘁𝗶𝗳𝗼𝗿𝗲𝗶𝗴𝗻
┃✫│ 𝗔𝗻𝘁𝗶𝘁𝗮𝗴
┃✯│ 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸
┃✯│ 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸_𝗮𝗹𝗹
┃✯│ 𝗚𝗽𝘁_𝗜𝗻𝗯𝗼𝘅
╰══───────◇───────══╯
●═════  〘 𝗚𝗣𝗧 〙═────═●
╭══───────◇───────══╮
┃✬│ 𝗔𝗶
┃✯│ 𝗔𝗶2
┃✫│ 𝗩𝗶𝘀𝗶𝗼𝗻
┃✫│ 𝗗𝗲𝗳𝗶𝗻𝗲
┃✯│ 𝗗𝗮𝗿𝗸𝗴𝗽𝘁
┃✫│ 𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇
┃✬│ 𝗚𝗲𝗺𝗶𝗻𝗶
┃✯│ 𝗚𝗼𝗼𝗴𝗹𝗲
┃✫│ 𝗚𝗽𝘁
┃✬│ 𝗚𝗽𝘁2
┃✫│ 𝗚𝗽𝘁3
╰══───────◇───────══╯
●════  〘 𝗚𝗥𝗢𝗨𝗣 〙═───═●
╭══───────◇───────══╮
┃✫│ 𝗔𝗽𝗽𝗿𝗼𝘃𝗲
┃✯│ 𝗥𝗲𝗷𝗲𝗰𝘁
┃✫│ 𝗣𝗿𝗼𝗺𝗼𝘁𝗲
┃✬│ 𝗗𝗲𝗺𝗼𝘁𝗲
┃✫│ 𝗗𝗲𝗹𝗲𝘁𝗲
┃✬│ 𝗥𝗲𝗺𝗼𝘃𝗲
┃✫│ 𝗙𝗮𝗸𝗲𝗿
┃✯│ 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀
┃✬│ 𝗖𝗹𝗼𝘀𝗲
┃✫│ 𝗢𝗽𝗲𝗻
┃✬│ 𝗖𝗹𝗼𝘀𝗲𝗧𝗶𝗺𝗲
┃✫│ 𝗢𝗽𝗲𝗻𝗧𝗶𝗺𝗲
┃✬│ 𝗗𝗶𝘀𝗽-𝗼𝗳𝗳
┃✫│ 𝗗𝗶𝘀𝗽-1
┃✬│ 𝗗𝗶𝘀𝗽-7
┃✫│ 𝗗𝗶𝘀𝗽-90
┃✬│ 𝗜𝗰𝗼𝗻
┃✯│ 𝗚𝗰𝗽𝗿𝗼𝗳𝗶𝗹𝗲
┃✫│ 𝗦𝘂𝗯𝗷𝗲𝗰𝘁
┃✬│ 𝗗𝗲𝘀𝗰
┃✫│ 𝗟𝗲𝗮𝘃𝗲
┃✯│ 𝗔𝗱𝗱
┃✫│ 𝗧𝗮𝗴𝗮𝗹𝗹
┃✬│ 𝗛𝗶𝗱𝗲𝘁𝗮𝗴
┃✫│ 𝗥𝗲𝘃𝗼𝗸𝗲
┃✬│ 𝗠𝘂𝘁𝗲
┃✫│ 𝗨𝗻𝗺𝘂𝘁𝗲
╰══───────◇───────══╯
●═══  〘 𝗖𝗢𝗗𝗜𝗡𝗚 〙 ═───═●
╭══───────◇───────══╮
┃✫│ 𝗖𝗮𝗿𝗯𝗼𝗻
┃✯│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗰
┃✫│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗰++
┃✯│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗷𝘀
┃✫│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗽𝘆
┃✫│ 𝗜𝗻𝘀𝗽𝗲𝗰𝘁
┃✯│ 𝗘𝗻𝗰𝗿𝘆𝗽𝘁𝗲
┃✫│ 𝗘𝘃𝗮𝗹
╰══───────◇───────══╯
●═══  〘 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 〙 ═───═●
╭══───────◇───────══╮
┃✬│ 𝗢𝘄𝗻𝗲𝗿
┃✬│ 𝗦𝗰𝗿𝗶𝗽𝘁
┃✫│ 𝗠𝗲𝗻𝘂
┃✬│ 𝗟𝗶𝘀𝘁
┃✫│ 𝗣𝗶𝗻𝗴
┃✯│ 𝗣𝗼𝗹𝗹
┃✬│ 𝗔𝗹𝗶𝘃𝗲
┃✫│ 𝗦𝗽𝗲𝗲𝗱
┃✬│ 𝗥𝗲𝗽𝗼
┃✫│ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲
┃✯│ 𝗨𝗽𝘁𝗶𝗺𝗲
┃✫│ 𝗗𝗽
┃✯│ 𝗗𝗹𝘁
┃✬│ 𝗠𝗮𝗶𝗹
┃✫│ 𝗜𝗻𝗯𝗼𝘅
┃✯│ 𝗡𝗲𝘄𝘀
┃✫│ 𝗔𝗻𝗶𝗺𝗲
╰══───────◇───────══╯
●═══   〘 𝗢𝗪𝗡𝗘𝗥  〙═───═●
╭══───────◇───────══╮
┃✬│ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁
┃✫│ 𝗔𝗱𝗺𝗶𝗻
┃✯│ 𝗖𝗮𝘀𝘁
┃✬│ 𝗕𝗿𝗼𝗮𝗱𝗰𝗮𝘀𝘁
┃✫│ 𝗝𝗼𝗶𝗻
┃✯│ 𝗚𝗲𝘁𝘃𝗮𝗿
┃✯│ 𝗥𝗲𝗱𝗲𝗽𝗹𝗼𝘆
┃✯│ 𝗨𝗽𝗱𝗮𝘁𝗲
┃✫│ 𝗦𝗲𝘁𝘃𝗮𝗿
┃✬│ 𝗕𝗼𝘁𝗽𝗽
┃✫│ 𝗙𝘂𝗹𝗹𝗽𝗽
┃✬│ 𝗕𝗹𝗼𝗰𝗸
┃✫│ 𝗨𝗻𝗯𝗼𝗰𝗸
┃✬│ 𝗞𝗶𝗹𝗹
┃✫│ 𝗞𝗶𝗹𝗹2
┃✫│ 𝗦𝗮𝘃𝗲
┃✬│ >
╰══───────◇───────══╯
●═══   〘 𝗣𝗥𝗔𝗡𝗞  〙 ═──═●
╭══───────◇───────══╮
┃✯│ 𝗛𝗮𝗰𝗸
╰══───────◇───────══╯
●═══   〘 𝗟𝗢𝗚𝗢𝗦  〙 ═──═●
╭══───────◇───────══╮
┃✯│ 𝗛𝗮𝗰𝗸𝗲𝗿
┃✫│ 𝗛𝗮𝗰𝗸𝗲𝗿2
┃✯│ 𝗚𝗿𝗮𝗳𝗳𝗶𝘁𝗶
┃✫│ 𝗖𝗮𝘁
┃✯│ 𝗦𝗮𝗻𝗱
┃✫│ 𝗚𝗼𝗹𝗱
┃✯│ 𝗔𝗿𝗲𝗻𝗮
┃✫│ 𝗗𝗿𝗮𝗴𝗼𝗻𝗯𝗮𝗹𝗹
┃✯│ 𝗡𝗮𝗿𝘂𝘁𝗼
┃✫│ 𝗖𝗵𝗶𝗹𝗱
┃✯│ 𝗟𝗲𝗮𝘃𝗲𝘀
┃✫│ 1917
┃✯│ 𝗧𝘆𝗽𝗼𝗴𝗿𝗮𝗽𝗵𝘆
╰══───────◇───────══╯
●═══ 〘  𝗧𝗘𝗫𝗧𝗠𝗔𝗞𝗘𝗥  〙═──═●
╭══───────◇───────══╮
┃✯│ 𝗣𝘂𝗿𝗽𝗹𝗲
┃✫│ 𝗡𝗲𝗼𝗻
┃✯│ 𝗡𝗼𝗲𝗹
┃✫│ 𝗠𝗲𝘁𝗮𝗹𝗹𝗶𝗰
┃✯│ 𝗗𝗲𝘃𝗶𝗹
┃✫│ 𝗜𝗺𝗽𝗿𝗲𝘀𝘀𝗶𝘃𝗲
┃✯│ 𝗦𝗻𝗼𝘄
┃✫│ 𝗪𝗮𝘁𝗲𝗿
┃✯│ 𝗧𝗵𝘂𝗻𝗱𝗲𝗿
┃✫│ 𝗜𝗰𝗲
┃✯│ 𝗠𝗮𝘁𝗿𝗶𝘅
┃✫│ 𝗦𝗶𝗹𝘃𝗲𝗿
┃✯│ 𝗟𝗶𝗴𝗵𝘁
╰══───────◇───────══╯
●═══   〘 𝗠𝗜𝗦𝗖  〙 ═──═●
╭══───────◇───────══╮
┃✫│ 𝗪𝗲𝗮𝘁𝗵𝗲𝗿
┃✯│ 𝗚𝗶𝘁𝗵𝘂𝗯
┃✫│ 𝗚𝗶𝘁𝗰𝗹𝗼𝗻𝗲
┃✯│ 𝗔𝗱𝘃𝗶𝗰𝗲
┃✫│ 𝗥𝗲𝗺𝗼𝘃𝗲𝗯𝗴
┃✯│ 𝗥𝗲𝗺𝗶𝗻𝗶
┃✯│ 𝗧𝘁𝘀
┃✯│ 𝗧𝗿𝘁
┃✫│ 𝗙𝗮𝗰𝘁
┃✯│ 𝗖𝗮𝘁𝗳𝗮𝗰𝘁
┃✫│ 𝗤𝘂𝗼𝘁𝗲𝘀
┃✯│ 𝗣𝗶𝗰𝗸𝘂𝗽𝗹𝗶𝗻𝗲
╰══───────◇───────══╯
●═══  〘 𝗢𝗧𝗛𝗘𝗥𝗦  〙 ═──═●
╭══───────◇───────══╮
┃✫│ 𝗖𝗿𝗲𝗱𝗶𝘁𝘀
┃✬│ 𝗨𝗽𝗹𝗼𝗮𝗱
┃✫│ 𝗔𝘁𝘁𝗽
┃✬│ 𝗨𝗿𝗹
┃✫│ 𝗜𝗺𝗮𝗴𝗲
┃✬│ 𝗦𝘆𝘀𝘁𝗲𝗺
┃✫╰═───────◇───────═╯
┃   𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭 !
╰══────────────────══╯`
            }, {
              quoted: m
            });
          } else if (menu === 'IMAGE') {
            client.sendMessage(m.chat, {
              image: {
                url: 'https://i.imgur.com/HP6GyiD.jpeg'
              },
              caption: `𝗛𝗲𝘆 𝘁𝗵𝗲𝗿𝗲😁, ${getGreeting()}\n\n╭═════〘 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭  𝗫𝗠𝗗 〙═════╮
┃✫╭═─────────────────═╮
┃✬│ 𝗨𝘀𝗲𝗿 : ${m.pushName}
┃✫│ 𝗣𝗿𝗲𝗳𝗶𝘅 : ${prefix}
┃✫│ 𝗠𝗼𝗱𝗲 : ${mode}
┃✯│ 𝗦𝗽𝗲𝗲𝗱 :   ${Rspeed.toFixed(4)} 𝗠𝘀
┃✬│ 𝗧𝗶𝗺𝗲 : ${DateTime.now().setZone('Africa/Nairobi').toLocaleString(DateTime.TIME_SIMPLE)} on ${date.toLocaleString('en-US', {
                weekday: 'long',
                timeZone: 'Africa/Nairobi'
              })}
┃✫│ 𝗔𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 𝗥𝗔𝗠 : 32𝗚𝗕 𝗼𝗳 64𝗚𝗕
┃✫│═════════════════════
┃✬│█▀██████▀█▀██▀███▄█▀█
┃✫│═════════════════════
╰══──────────────────══╯
●════ 〘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 〙═──═●
╭══───────◇───────══╮
┃✬│ 𝗩𝗶𝗱𝗲𝗼
┃✫│ 𝗣𝗹𝗮𝘆
┃✬│ 𝗣𝗹𝗮𝘆2
┃✫│ 𝗦𝗼𝗻𝗴
┃✫│ 𝗦𝗼𝗻𝗴2
┃✬│ 𝗙𝗯𝗱𝗹
┃✫│ 𝗧𝗶𝗸𝘁𝗼𝗸
┃✬│ 𝗧𝘄𝗶𝘁𝘁𝗲𝗿
┃✫│ 𝗶𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺
┃✫│ 𝗠𝗼𝘃𝗶𝗲
┃✬│ 𝗟𝘆𝗿𝗶𝗰𝘀
┃✫│ 𝗪𝗵𝗮𝘁𝘀𝗼𝗻𝗴
┃✬│ 𝗬𝘁𝘀
┃✫│ 𝗬𝘁𝗺𝗽3
┃✬│ 𝗬𝘁𝗺𝗽4
╰══───────◇───────══╯
●═════  〘 𝗘𝗗𝗜𝗧 〙══───═●
╭══───────◇───────══╮
┃✫│ 𝗦𝘁𝗶𝗰𝗸𝗲𝗿
┃✬│ 𝗦𝗺𝗲𝗺𝗲
┃✫│ 𝗣𝗵𝗼𝘁𝗼
┃✫│ 𝗠𝗽4
┃✬│ 𝗥𝗲𝘁𝗿𝗶𝗲𝘃𝗲
┃✫│ 𝗩𝘃
┃✫│ 𝗩𝘃2
┃✬│ 𝗦𝗰𝗿𝗲𝗲𝗻𝘀𝗵𝗼𝘁
┃✫│ 𝗠𝗶𝘅
┃✬│ 𝗧𝗮𝗸𝗲
┃✫│ 𝗧𝘄𝗲𝗲𝘁
┃✫│ 𝗤𝘂𝗼𝘁𝗲𝗹𝘆
╰══───────◇───────══╯
●═══〘 𝗖𝗢𝗡𝗙𝗜𝗚 𝗩𝗔𝗥𝗦 〙═───═●
╭══───────◇───────══╮
┃✯│ 𝗔𝗻𝘁𝗶𝗱𝗲𝗹𝗲𝘁𝗲
┃✫│ 𝗔𝗻𝘁𝗶𝗰𝗮𝗹𝗹
┃✯│ 𝗔𝗻𝘁𝗶𝗳𝗼𝗿𝗲𝗶𝗴𝗻
┃✫│ 𝗔𝗻𝘁𝗶𝘁𝗮𝗴
┃✯│ 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸
┃✯│ 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸_𝗮𝗹𝗹
┃✯│ 𝗚𝗽𝘁_𝗜𝗻𝗯𝗼𝘅
╰══───────◇───────══╯
●═════  〘 𝗚𝗣𝗧 〙═────═●
╭══───────◇───────══╮
┃✬│ 𝗔𝗶
┃✯│ 𝗔𝗶2
┃✫│ 𝗩𝗶𝘀𝗶𝗼𝗻
┃✫│ 𝗗𝗲𝗳𝗶𝗻𝗲
┃✯│ 𝗗𝗮𝗿𝗸𝗴𝗽𝘁
┃✫│ 𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇
┃✬│ 𝗚𝗲𝗺𝗶𝗻𝗶
┃✯│ 𝗚𝗼𝗼𝗴𝗹𝗲
┃✫│ 𝗚𝗽𝘁
┃✬│ 𝗚𝗽𝘁2
┃✫│ 𝗚𝗽𝘁3
╰══───────◇───────══╯
●════  〘 𝗚𝗥𝗢𝗨𝗣 〙═───═●
╭══───────◇───────══╮
┃✫│ 𝗔𝗽𝗽𝗿𝗼𝘃𝗲
┃✯│ 𝗥𝗲𝗷𝗲𝗰𝘁
┃✫│ 𝗣𝗿𝗼𝗺𝗼𝘁𝗲
┃✬│ 𝗗𝗲𝗺𝗼𝘁𝗲
┃✫│ 𝗗𝗲𝗹𝗲𝘁𝗲
┃✬│ 𝗥𝗲𝗺𝗼𝘃𝗲
┃✫│ 𝗙𝗮𝗸𝗲𝗿
┃✯│ 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀
┃✬│ 𝗖𝗹𝗼𝘀𝗲
┃✫│ 𝗢𝗽𝗲𝗻
┃✬│ 𝗖𝗹𝗼𝘀𝗲𝗧𝗶𝗺𝗲
┃✫│ 𝗢𝗽𝗲𝗻𝗧𝗶𝗺𝗲
┃✬│ 𝗗𝗶𝘀𝗽-𝗼𝗳𝗳
┃✫│ 𝗗𝗶𝘀𝗽-1
┃✬│ 𝗗𝗶𝘀𝗽-7
┃✫│ 𝗗𝗶𝘀𝗽-90
┃✬│ 𝗜𝗰𝗼𝗻
┃✯│ 𝗚𝗰𝗽𝗿𝗼𝗳𝗶𝗹𝗲
┃✫│ 𝗦𝘂𝗯𝗷𝗲𝗰𝘁
┃✬│ 𝗗𝗲𝘀𝗰
┃✫│ 𝗟𝗲𝗮𝘃𝗲
┃✯│ 𝗔𝗱𝗱
┃✫│ 𝗧𝗮𝗴𝗮𝗹𝗹
┃✬│ 𝗛𝗶𝗱𝗲𝘁𝗮𝗴
┃✫│ 𝗥𝗲𝘃𝗼𝗸𝗲
┃✬│ 𝗠𝘂𝘁𝗲
┃✫│ 𝗨𝗻𝗺𝘂𝘁𝗲
╰══───────◇───────══╯
●═══  〘 𝗖𝗢𝗗𝗜𝗡𝗚 〙 ═───═●
╭══───────◇───────══╮
┃✫│ 𝗖𝗮𝗿𝗯𝗼𝗻
┃✯│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗰
┃✫│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗰++
┃✯│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗷𝘀
┃✫│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗽𝘆
┃✫│ 𝗜𝗻𝘀𝗽𝗲𝗰𝘁
┃✯│ 𝗘𝗻𝗰𝗿𝘆𝗽𝘁𝗲
┃✫│ 𝗘𝘃𝗮𝗹
╰══───────◇───────══╯
●═══  〘 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 〙 ═───═●
╭══───────◇───────══╮
┃✬│ 𝗢𝘄𝗻𝗲𝗿
┃✬│ 𝗦𝗰𝗿𝗶𝗽𝘁
┃✫│ 𝗠𝗲𝗻𝘂
┃✬│ 𝗟𝗶𝘀𝘁
┃✫│ 𝗣𝗶𝗻𝗴
┃✯│ 𝗣𝗼𝗹𝗹
┃✬│ 𝗔𝗹𝗶𝘃𝗲
┃✫│ 𝗦𝗽𝗲𝗲𝗱
┃✬│ 𝗥𝗲𝗽𝗼
┃✫│ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲
┃✯│ 𝗨𝗽𝘁𝗶𝗺𝗲
┃✫│ 𝗗𝗽
┃✯│ 𝗗𝗹𝘁
┃✬│ 𝗠𝗮𝗶𝗹
┃✫│ 𝗜𝗻𝗯𝗼𝘅
┃✯│ 𝗡𝗲𝘄𝘀
┃✫│ 𝗔𝗻𝗶𝗺𝗲
╰══───────◇───────══╯
●═══   〘 𝗢𝗪𝗡𝗘𝗥  〙═───═●
╭══───────◇───────══╮
┃✬│ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁
┃✫│ 𝗔𝗱𝗺𝗶𝗻
┃✯│ 𝗖𝗮𝘀𝘁
┃✬│ 𝗕𝗿𝗼𝗮𝗱𝗰𝗮𝘀𝘁
┃✫│ 𝗝𝗼𝗶𝗻
┃✯│ 𝗚𝗲𝘁𝘃𝗮𝗿
┃✯│ 𝗥𝗲𝗱𝗲𝗽𝗹𝗼𝘆
┃✯│ 𝗨𝗽𝗱𝗮𝘁𝗲
┃✫│ 𝗦𝗲𝘁𝘃𝗮𝗿
┃✬│ 𝗕𝗼𝘁𝗽𝗽
┃✫│ 𝗙𝘂𝗹𝗹𝗽𝗽
┃✬│ 𝗕𝗹𝗼𝗰𝗸
┃✫│ 𝗨𝗻𝗯𝗼𝗰𝗸
┃✬│ 𝗞𝗶𝗹𝗹
┃✫│ 𝗞𝗶𝗹𝗹2
┃✫│ 𝗦𝗮𝘃𝗲
┃✬│ >
╰══───────◇───────══╯
●═══   〘 𝗣𝗥𝗔𝗡𝗞  〙 ═──═●
╭══───────◇───────══╮
┃✯│ 𝗛𝗮𝗰𝗸
╰══───────◇───────══╯
●═══   〘 𝗟𝗢𝗚𝗢𝗦  〙 ═──═●
╭══───────◇───────══╮
┃✯│ 𝗛𝗮𝗰𝗸𝗲𝗿
┃✫│ 𝗛𝗮𝗰𝗸𝗲𝗿2
┃✯│ 𝗚𝗿𝗮𝗳𝗳𝗶𝘁𝗶
┃✫│ 𝗖𝗮𝘁
┃✯│ 𝗦𝗮𝗻𝗱
┃✫│ 𝗚𝗼𝗹𝗱
┃✯│ 𝗔𝗿𝗲𝗻𝗮
┃✫│ 𝗗𝗿𝗮𝗴𝗼𝗻𝗯𝗮𝗹𝗹
┃✯│ 𝗡𝗮𝗿𝘂𝘁𝗼
┃✫│ 𝗖𝗵𝗶𝗹𝗱
┃✯│ 𝗟𝗲𝗮𝘃𝗲𝘀
┃✫│ 1917
┃✯│ 𝗧𝘆𝗽𝗼𝗴𝗿𝗮𝗽𝗵𝘆
╰══───────◇───────══╯
●═══ 〘  𝗧𝗘𝗫𝗧𝗠𝗔𝗞𝗘𝗥  〙═──═●
╭══───────◇───────══╮
┃✯│ 𝗣𝘂𝗿𝗽𝗹𝗲
┃✫│ 𝗡𝗲𝗼𝗻
┃✯│ 𝗡𝗼𝗲𝗹
┃✫│ 𝗠𝗲𝘁𝗮𝗹𝗹𝗶𝗰
┃✯│ 𝗗𝗲𝘃𝗶𝗹
┃✫│ 𝗜𝗺𝗽𝗿𝗲𝘀𝘀𝗶𝘃𝗲
┃✯│ 𝗦𝗻𝗼𝘄
┃✫│ 𝗪𝗮𝘁𝗲𝗿
┃✯│ 𝗧𝗵𝘂𝗻𝗱𝗲𝗿
┃✫│ 𝗜𝗰𝗲
┃✯│ 𝗠𝗮𝘁𝗿𝗶𝘅
┃✫│ 𝗦𝗶𝗹𝘃𝗲𝗿
┃✯│ 𝗟𝗶𝗴𝗵𝘁
╰══───────◇───────══╯
●═══   〘 𝗠𝗜𝗦𝗖  〙 ═──═●
╭══───────◇───────══╮
┃✫│ 𝗪𝗲𝗮𝘁𝗵𝗲𝗿
┃✯│ 𝗚𝗶𝘁𝗵𝘂𝗯
┃✫│ 𝗚𝗶𝘁𝗰𝗹𝗼𝗻𝗲
┃✯│ 𝗔𝗱𝘃𝗶𝗰𝗲
┃✫│ 𝗥𝗲𝗺𝗼𝘃𝗲𝗯𝗴
┃✯│ 𝗥𝗲𝗺𝗶𝗻𝗶
┃✯│ 𝗧𝘁𝘀
┃✯│ 𝗧𝗿𝘁
┃✫│ 𝗙𝗮𝗰𝘁
┃✯│ 𝗖𝗮𝘁𝗳𝗮𝗰𝘁
┃✫│ 𝗤𝘂𝗼𝘁𝗲𝘀
┃✯│ 𝗣𝗶𝗰𝗸𝘂𝗽𝗹𝗶𝗻𝗲
╰══───────◇───────══╯
●═══  〘 𝗢𝗧𝗛𝗘𝗥𝗦  〙 ═──═●
╭══───────◇───────══╮
┃✫│ 𝗖𝗿𝗲𝗱𝗶𝘁𝘀
┃✬│ 𝗨𝗽𝗹𝗼𝗮𝗱
┃✫│ 𝗔𝘁𝘁𝗽
┃✬│ 𝗨𝗿𝗹
┃✫│ 𝗜𝗺𝗮𝗴𝗲
┃✬│ 𝗦𝘆𝘀𝘁𝗲𝗺
┃✫╰═───────◇───────═╯
┃   𝗔𝗹𝘄𝗮𝘆𝘀 𝗽𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝗖𝗛𝗥𝗜𝗦𝗧 !
╰══────────────────══╯`,
              fileLength: "9999999999"
            }, {
              quoted: m
            });
          } else if (menu === 'LINK') {
            client.sendMessage(m.chat, {
              text: `𝗛𝗲𝘆 𝘁𝗵𝗲𝗿𝗲😁, ${getGreeting()}\n\n╭═════〘 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭  𝗫𝗠𝗗 〙═════╮
┃✫╭═─────────────────═╮
┃✬│ 𝗨𝘀𝗲𝗿 : ${m.pushName}
┃✫│ 𝗣𝗿𝗲𝗳𝗶𝘅 : ${prefix}
┃✫│ 𝗠𝗼𝗱𝗲 : ${mode}
┃✯│ 𝗦𝗽𝗲𝗲𝗱 :   ${Rspeed.toFixed(4)} 𝗠𝘀
┃✬│ 𝗧𝗶𝗺𝗲 : ${DateTime.now().setZone('Africa/Nairobi').toLocaleString(DateTime.TIME_SIMPLE)} on ${date.toLocaleString('en-US', {
                weekday: 'long',
                timeZone: 'Africa/Nairobi'
              })}
┃✫│ 𝗔𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 𝗥𝗔𝗠 : 32𝗚𝗕 𝗼𝗳 64𝗚𝗕
┃✫│═════════════════════
┃✬│█▀██████▀█▀██▀███▄█▀█
┃✫│═════════════════════
╰══──────────────────══╯
●════ 〘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 〙═──═●
╭══───────◇───────══╮
┃✬│ 𝗩𝗶𝗱𝗲𝗼
┃✫│ 𝗣𝗹𝗮𝘆
┃✬│ 𝗣𝗹𝗮𝘆2
┃✫│ 𝗦𝗼𝗻𝗴
┃✫│ 𝗦𝗼𝗻𝗴2
┃✬│ 𝗙𝗯𝗱𝗹
┃✫│ 𝗧𝗶𝗸𝘁𝗼𝗸
┃✬│ 𝗧𝘄𝗶𝘁𝘁𝗲𝗿
┃✫│ 𝗶𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺
┃✫│ 𝗠𝗼𝘃𝗶𝗲
┃✬│ 𝗟𝘆𝗿𝗶𝗰𝘀
┃✫│ 𝗪𝗵𝗮𝘁𝘀𝗼𝗻𝗴
┃✬│ 𝗬𝘁𝘀
┃✫│ 𝗬𝘁𝗺𝗽3
┃✬│ 𝗬𝘁𝗺𝗽4
╰══───────◇───────══╯
●═════  〘 𝗘𝗗𝗜𝗧 〙══───═●
╭══───────◇───────══╮
┃✫│ 𝗦𝘁𝗶𝗰𝗸𝗲𝗿
┃✬│ 𝗦𝗺𝗲𝗺𝗲
┃✫│ 𝗣𝗵𝗼𝘁𝗼
┃✫│ 𝗠𝗽4
┃✬│ 𝗥𝗲𝘁𝗿𝗶𝗲𝘃𝗲
┃✫│ 𝗩𝘃
┃✫│ 𝗩𝘃2
┃✬│ 𝗦𝗰𝗿𝗲𝗲𝗻𝘀𝗵𝗼𝘁
┃✫│ 𝗠𝗶𝘅
┃✬│ 𝗧𝗮𝗸𝗲
┃✫│ 𝗧𝘄𝗲𝗲𝘁
┃✫│ 𝗤𝘂𝗼𝘁𝗲𝗹𝘆
╰══───────◇───────══╯
●═══〘 𝗖𝗢𝗡𝗙𝗜𝗚 𝗩𝗔𝗥𝗦 〙═───═●
╭══───────◇───────══╮
┃✯│ 𝗔𝗻𝘁𝗶𝗱𝗲𝗹𝗲𝘁𝗲
┃✫│ 𝗔𝗻𝘁𝗶𝗰𝗮𝗹𝗹
┃✯│ 𝗔𝗻𝘁𝗶𝗳𝗼𝗿𝗲𝗶𝗴𝗻
┃✫│ 𝗔𝗻𝘁𝗶𝘁𝗮𝗴
┃✯│ 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸
┃✯│ 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸_𝗮𝗹𝗹
┃✯│ 𝗚𝗽𝘁_𝗜𝗻𝗯𝗼𝘅
╰══───────◇───────══╯
●═════  〘 𝗚𝗣𝗧 〙═────═●
╭══───────◇───────══╮
┃✬│ 𝗔𝗶
┃✯│ 𝗔𝗶2
┃✫│ 𝗩𝗶𝘀𝗶𝗼𝗻
┃✫│ 𝗗𝗲𝗳𝗶𝗻𝗲
┃✯│ 𝗗𝗮𝗿𝗸𝗴𝗽𝘁
┃✫│ 𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇
┃✬│ 𝗚𝗲𝗺𝗶𝗻𝗶
┃✯│ 𝗚𝗼𝗼𝗴𝗹𝗲
┃✫│ 𝗚𝗽𝘁
┃✬│ 𝗚𝗽𝘁2
┃✫│ 𝗚𝗽𝘁3
╰══───────◇───────══╯
●════  〘 𝗚𝗥𝗢𝗨𝗣 〙═───═●
╭══───────◇───────══╮
┃✫│ 𝗔𝗽𝗽𝗿𝗼𝘃𝗲
┃✯│ 𝗥𝗲𝗷𝗲𝗰𝘁
┃✫│ 𝗣𝗿𝗼𝗺𝗼𝘁𝗲
┃✬│ 𝗗𝗲𝗺𝗼𝘁𝗲
┃✫│ 𝗗𝗲𝗹𝗲𝘁𝗲
┃✬│ 𝗥𝗲𝗺𝗼𝘃𝗲
┃✫│ 𝗙𝗮𝗸𝗲𝗿
┃✯│ 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀
┃✬│ 𝗖𝗹𝗼𝘀𝗲
┃✫│ 𝗢𝗽𝗲𝗻
┃✬│ 𝗖𝗹𝗼𝘀𝗲𝗧𝗶𝗺𝗲
┃✫│ 𝗢𝗽𝗲𝗻𝗧𝗶𝗺𝗲
┃✬│ 𝗗𝗶𝘀𝗽-𝗼𝗳𝗳
┃✫│ 𝗗𝗶𝘀𝗽-1
┃✬│ 𝗗𝗶𝘀𝗽-7
┃✫│ 𝗗𝗶𝘀𝗽-90
┃✬│ 𝗜𝗰𝗼𝗻
┃✯│ 𝗚𝗰𝗽𝗿𝗼𝗳𝗶𝗹𝗲
┃✫│ 𝗦𝘂𝗯𝗷𝗲𝗰𝘁
┃✬│ 𝗗𝗲𝘀𝗰
┃✫│ 𝗟𝗲𝗮𝘃𝗲
┃✯│ 𝗔𝗱𝗱
┃✫│ 𝗧𝗮𝗴𝗮𝗹𝗹
┃✬│ 𝗛𝗶𝗱𝗲𝘁𝗮𝗴
┃✫│ 𝗥𝗲𝘃𝗼𝗸𝗲
┃✬│ 𝗠𝘂𝘁𝗲
┃✫│ 𝗨𝗻𝗺𝘂𝘁𝗲
╰══───────◇───────══╯
●═══  〘 𝗖𝗢𝗗𝗜𝗡𝗚 〙 ═───═●
╭══───────◇───────══╮
┃✫│ 𝗖𝗮𝗿𝗯𝗼𝗻
┃✯│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗰
┃✫│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗰++
┃✯│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗷𝘀
┃✫│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗽𝘆
┃✫│ 𝗜𝗻𝘀𝗽𝗲𝗰𝘁
┃✯│ 𝗘𝗻𝗰𝗿𝘆𝗽𝘁𝗲
┃✫│ 𝗘𝘃𝗮𝗹
╰══───────◇───────══╯
●═══  〘 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 〙 ═───═●
╭══───────◇───────══╮
┃✬│ 𝗢𝘄𝗻𝗲𝗿
┃✬│ 𝗦𝗰𝗿𝗶𝗽𝘁
┃✫│ 𝗠𝗲𝗻𝘂
┃✬│ 𝗟𝗶𝘀𝘁
┃✫│ 𝗣𝗶𝗻𝗴
┃✯│ 𝗣𝗼𝗹𝗹
┃✬│ 𝗔𝗹𝗶𝘃𝗲
┃✫│ 𝗦𝗽𝗲𝗲𝗱
┃✬│ 𝗥𝗲𝗽𝗼
┃✫│ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲
┃✯│ 𝗨𝗽𝘁𝗶𝗺𝗲
┃✫│ 𝗗𝗽
┃✯│ 𝗗𝗹𝘁
┃✬│ 𝗠𝗮𝗶𝗹
┃✫│ 𝗜𝗻𝗯𝗼𝘅
┃✯│ 𝗡𝗲𝘄𝘀
┃✫│ 𝗔𝗻𝗶𝗺𝗲
╰══───────◇───────══╯
●═══   〘 𝗢𝗪𝗡𝗘𝗥  〙═───═●
╭══───────◇───────══╮
┃✬│ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁
┃✫│ 𝗔𝗱𝗺𝗶𝗻
┃✯│ 𝗖𝗮𝘀𝘁
┃✬│ 𝗕𝗿𝗼𝗮𝗱𝗰𝗮𝘀𝘁
┃✫│ 𝗝𝗼𝗶𝗻
┃✯│ 𝗚𝗲𝘁𝘃𝗮𝗿
┃✯│ 𝗥𝗲𝗱𝗲𝗽𝗹𝗼𝘆
┃✯│ 𝗨𝗽𝗱𝗮𝘁𝗲
┃✫│ 𝗦𝗲𝘁𝘃𝗮𝗿
┃✬│ 𝗕𝗼𝘁𝗽𝗽
┃✫│ 𝗙𝘂𝗹𝗹𝗽𝗽
┃✬│ 𝗕𝗹𝗼𝗰𝗸
┃✫│ 𝗨𝗻𝗯𝗼𝗰𝗸
┃✬│ 𝗞𝗶𝗹𝗹
┃✫│ 𝗞𝗶𝗹𝗹2
┃✫│ 𝗦𝗮𝘃𝗲
┃✬│ >
╰══───────◇───────══╯
●═══   〘 𝗣𝗥𝗔𝗡𝗞  〙 ═──═●
╭══───────◇───────══╮
┃✯│ 𝗛𝗮𝗰𝗸
╰══───────◇───────══╯
●═══   〘 𝗟𝗢𝗚𝗢𝗦  〙 ═──═●
╭══───────◇───────══╮
┃✯│ 𝗛𝗮𝗰𝗸𝗲𝗿
┃✫│ 𝗛𝗮𝗰𝗸𝗲𝗿2
┃✯│ 𝗚𝗿𝗮𝗳𝗳𝗶𝘁𝗶
┃✫│ 𝗖𝗮𝘁
┃✯│ 𝗦𝗮𝗻𝗱
┃✫│ 𝗚𝗼𝗹𝗱
┃✯│ 𝗔𝗿𝗲𝗻𝗮
┃✫│ 𝗗𝗿𝗮𝗴𝗼𝗻𝗯𝗮𝗹𝗹
┃✯│ 𝗡𝗮𝗿𝘂𝘁𝗼
┃✫│ 𝗖𝗵𝗶𝗹𝗱
┃✯│ 𝗟𝗲𝗮𝘃𝗲𝘀
┃✫│ 1917
┃✯│ 𝗧𝘆𝗽𝗼𝗴𝗿𝗮𝗽𝗵𝘆
╰══───────◇───────══╯
●═══ 〘  𝗧𝗘𝗫𝗧𝗠𝗔𝗞𝗘𝗥  〙═──═●
╭══───────◇───────══╮
┃✯│ 𝗣𝘂𝗿𝗽𝗹𝗲
┃✫│ 𝗡𝗲𝗼𝗻
┃✯│ 𝗡𝗼𝗲𝗹
┃✫│ 𝗠𝗲𝘁𝗮𝗹𝗹𝗶𝗰
┃✯│ 𝗗𝗲𝘃𝗶𝗹
┃✫│ 𝗜𝗺𝗽𝗿𝗲𝘀𝘀𝗶𝘃𝗲
┃✯│ 𝗦𝗻𝗼𝘄
┃✫│ 𝗪𝗮𝘁𝗲𝗿
┃✯│ 𝗧𝗵𝘂𝗻𝗱𝗲𝗿
┃✫│ 𝗜𝗰𝗲
┃✯│ 𝗠𝗮𝘁𝗿𝗶𝘅
┃✫│ 𝗦𝗶𝗹𝘃𝗲𝗿
┃✯│ 𝗟𝗶𝗴𝗵𝘁
╰══───────◇───────══╯
●═══   〘 𝗠𝗜𝗦𝗖  〙 ═──═●
╭══───────◇───────══╮
┃✫│ 𝗪𝗲𝗮𝘁𝗵𝗲𝗿
┃✯│ 𝗚𝗶𝘁𝗵𝘂𝗯
┃✫│ 𝗚𝗶𝘁𝗰𝗹𝗼𝗻𝗲
┃✯│ 𝗔𝗱𝘃𝗶𝗰𝗲
┃✫│ 𝗥𝗲𝗺𝗼𝘃𝗲𝗯𝗴
┃✯│ 𝗥𝗲𝗺𝗶𝗻𝗶
┃✯│ 𝗧𝘁𝘀
┃✯│ 𝗧𝗿𝘁
┃✫│ 𝗙𝗮𝗰𝘁
┃✯│ 𝗖𝗮𝘁𝗳𝗮𝗰𝘁
┃✫│ 𝗤𝘂𝗼𝘁𝗲𝘀
┃✯│ 𝗣𝗶𝗰𝗸𝘂𝗽𝗹𝗶𝗻𝗲
╰══───────◇───────══╯
●═══  〘 𝗢𝗧𝗛𝗘𝗥𝗦  〙 ═──═●
╭══───────◇───────══╮
┃✫│ 𝗖𝗿𝗲𝗱𝗶𝘁𝘀
┃✬│ 𝗨𝗽𝗹𝗼𝗮𝗱
┃✫│ 𝗔𝘁𝘁𝗽
┃✬│ 𝗨𝗿𝗹
┃✫│ 𝗜𝗺𝗮𝗴𝗲
┃✬│ 𝗦𝘆𝘀𝘁𝗲𝗺
┃✫╰═───────◇───────═╯
┃   𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇 !
╰══────────────────══╯`,
              contextInfo: {
                externalAdReply: {
                  showAdAttribution: true,
                  title: `𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗`,
                  body: `${runtime(process.uptime())}`,
                  thumbnail: fs.readFileSync('./Media/Viniziaz.jpg'),
                  sourceUrl: 'https://wa.me/254759925133?text=Hello👋+Nimco+Nihostie+Bot+Mkuu+😔',
                  mediaType: 1,
                  renderLargerThumbnail: true
                }
              }
            }, {
              quoted: m
            });
          }
          break;

        //========================================================================================================================//
        //========================================================================================================================//
        case "advice":
          reply(advice());
          console.log(advice());
          break;
        //========================================================================================================================//

        case "owner":
          client.sendContact(from, maindev2, m);
          break;

        //========================================================================================================================//
        case "lyrics2":
          try {
            if (!text) {
              return reply("Provide a song name!");
            }
            const searches = await Client.songs.search(text);
            const firstSong = searches[0];
            //await client.sendMessage(from, {text: firstSong}); 
            const lyrics = await firstSong.lyrics();
            await client.sendMessage(from, {
              text: lyrics
            }, {
              quoted: m
            });
          } catch (error) {
            reply(`I did not find any lyrics for ${text}. Try searching a different song.`);
            console.log(error);
          }
          break;

        //========================================================================================================================//	      
        case "play":
          {
            const yts = require("yt-search");
            try {
              if (!text) {
                return m.reply("What song do you want to download?");
              }
              const {
                videos
              } = await yts(text);
              if (!videos || videos.length === 0) {
                return m.reply("No songs found!");
              }
              const urlYt = videos[0].url;
              try {
                let data = await fetchJson(`https://api.dreaded.site/api/ytdl/audio?url=${urlYt}`);
                const {
                  title,
                  format,
                  url: audioUrl
                } = data.result;
                await client.sendMessage(m.chat, {
                  document: {
                    url: audioUrl
                  },
                  mimetype: "audio/mpeg",
                  caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗",
                  fileName: `${title}.mp3`
                }, {
                  quoted: m
                });
              } catch (error) {
                console.error("API request failed:", error.message);
                m.reply("Download failed: Unable to retrieve audio.");
              }
            } catch (error) {
              m.reply("Download failed\n" + error.message);
            }
          }
          ;
          break;

        //========================================================================================================================//
        case "song2":
          {
            const yts = require("yt-search");
            const fetch = require("node-fetch");
            try {
              if (!text) {
                return m.reply("What song you want to download.");
              }
              let search = await yts(text);
              if (!search.all.length) {
                return reply("No results found for your query.");
              }
              let link = search.all[0].url;
              let response = await fetch(`https://keith-api.vercel.app/download/dlmp3?url=${link}`);
              let data = await response.json();
              if (data.status && data.result) {
                const audioData = {
                  title: data.result.title,
                  downloadUrl: data.result.downloadUrl,
                  thumbnail: search.all[0].thumbnail,
                  format: data.result.format,
                  quality: data.result.quality
                };
                await client.sendMessage(m.chat, {
                  audio: {
                    url: audioData.downloadUrl
                  },
                  mimetype: "audio/mp4"
                }, {
                  quoted: m
                });
                return;
              } else {
                return reply("Unable to fetch the song. Please try again later.");
              }
            } catch (error) {
              return reply(`An error occurred: `);
            }
          }
          break;

        //========================================================================================================================//
        case 'video':
          {
            const yts = require("yt-search");
            const fetch = require("node-fetch");
            try {
              if (!text) {
                return reply("What video you want to download?");
              }
              let search = await yts(text);
              if (!search.all.length) {
                return reply(client, m, "No results found for your query.");
              }
              let link = search.all[0].url;
              let response = await fetch(`https://apis-keith.vercel.app/download/dlmp4?url=${link}`);
              let data = await response.json();
              if (data.status && data.result) {
                const videoData = {
                  title: data.result.title,
                  downloadUrl: data.result.downloadUrl,
                  thumbnail: search.all[0].thumbnail,
                  format: data.result.format,
                  quality: data.result.quality
                };
                await client.sendMessage(m.chat, {
                  video: {
                    url: videoData.downloadUrl
                  },
                  mimetype: "video/mp4",
                  caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
                }, {
                  quoted: m
                });
                return;
              } else {
                return reply("Unable to fetch the video. Please try again later.");
              }
            } catch (error) {
              return reply(`An error occurred: ${error.message}`);
            }
          }
          ;
          break;

        //========================================================================================================================//		      
        case "update":
        case "redeploy":
          {
            const axios = require('axios');
            if (!Owner) {
              throw NotOwner;
            }
            if (!appname || !herokuapi) {
              await m.reply("It looks like the Heroku app name or API key is not set. Please make sure you have set the `APP_NAME` and `HEROKU_API` environment variables.");
              return;
            }
            async function redeployApp() {
              try {
                const response = await axios.post(`https://api.heroku.com/apps/${appname}/builds`, {
                  source_blob: {
                    url: "https://github.com/Viniznimco/VINIZIAZ-XMD/tarball/main"
                  }
                }, {
                  headers: {
                    Authorization: `Bearer ${herokuapi}`,
                    Accept: "application/vnd.heroku+json; version=3"
                  }
                });
                await m.reply("Your bot is undergoing a ruthless upgrade, hold tight for the next 2 minutes as the redeploy executes! Once done, you’ll have the freshest version of *VINIZIAZ-XMD* unleashed upon you.");
                console.log("Build details:", response.data);
              } catch (error) {
                const errorMessage = error.response?.data || error.message;
                await m.reply(`Failed to update and redeploy. Please check if you have set the Heroku API key and Heroku app name correctly.`);
                console.error("Error triggering redeploy:", errorMessage);
              }
            }
            redeployApp();
          }
          break;

        //========================================================================================================================//		      
        case "credits":
          client.sendMessage(m.chat, {
            image: {
              url: 'https://i.imgur.com/HP6GyiD.jpeg'
            },
            caption: `We express sincere gratitude and acknowledgement to the following:\n\n -Dika Ardnt ➪ Indonesia\n - Writing the base code using case method\nhttps://github.com/DikaArdnt\n\n -Adiwajshing ➪ India\n - Writing and Coding the bot's library (baileys)\nhttps://github.com/WhiskeySockets/Baileys\n\n -WAWebSockets Discord Server community\n-Maintaining and reverse engineering the Web Sockets\nhttps://discord.gg/WeJM5FP9GG\n\n - Nick Hunter ➪ Kenya\n - Actively compiling and debugging parts of this bot script\nhttps://github.com/Viniznimco\n\n - Keithkeizzah (Ghost) ➪ Kenya\n - Compiling and debugging parts of this bot script\nhttps://github.com/Keithkeizzah\n\n - Fortunatus Mokaya ➪ Kenya\n - Founder of the bot Base\nhttps://github.com/Fortunatusmokaya\n\n𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗`
          }, {
            quoted: m
          });
          break;

        //========================================================================================================================//		      
        case 'poll':
          {
            let [poll, opt] = text.split("|");
            if (text.split("|") < 2) {
              return m.reply(`Wrong format::\nExample:- poll who is the best president|Putin, Ruto`);
            }
            let options = [];
            for (let i of opt.split(',')) {
              options.push(i);
            }
            await client.sendMessage(m.chat, {
              poll: {
                name: poll,
                values: options
              }
            });
          }
          break;

        //========================================================================================================================//		      
        case 'play2':
          {
            const axios = require('axios');
            const yts = require("yt-search");
            const ffmpeg = require("fluent-ffmpeg");
            const fs = require("fs");
            const path = require("path");
            try {
              if (!text) {
                return m.reply("What song do you want to download?");
              }
              let search = await yts(text);
              let link = search.all[0].url;
              const apis = [`https://xploader-api.vercel.app/ytmp3?url=${link}`, `https://apis.davidcyriltech.my.id/youtube/mp3?url=${link}`, `https://api.ryzendesu.vip/api/downloader/ytmp3?url=${link}`, `https://api.dreaded.site/api/ytdl/audio?url=${link}`];
              for (const api of apis) {
                try {
                  let data = await fetchJson(api);

                  // Checking if the API response is successful
                  if (data.status === 200 || data.success) {
                    let videoUrl = data.result?.downloadUrl || data.url;
                    let outputPath = path.join(__dirname, `${search.all[0].title.replace(/[^a-zA-Z0-9 ]/g, "")}.mp3`);
                    const response = await axios({
                      url: videoUrl,
                      method: "GET",
                      responseType: "stream"
                    });
                    if (response.status !== 200) {
                      m.reply("sorry but the API endpoint didn't respond correctly. Try again later.");
                      continue;
                    }
                    ffmpeg(response.data).toFormat("mp3").save(outputPath).on("end", async () => {
                      await client.sendMessage(m.chat, {
                        document: {
                          url: outputPath
                        },
                        mimetype: "audio/mp3",
                        caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗",
                        fileName: `${search.all[0].title.replace(/[^a-zA-Z0-9 ]/g, "")}.mp3`
                      }, {
                        quoted: m
                      });
                      fs.unlinkSync(outputPath);
                    }).on("error", err => {
                      m.reply("Download failed\n" + err.message);
                    });
                    return;
                  }
                } catch (e) {
                  // Continue to the next API if one fails
                  continue;
                }
              }
              m.reply("An error occurred. All APIs might be down or unable to process the request.");
            } catch (error) {
              m.reply("Download failed\n" + error.message);
            }
          }
          break;

        //========================================================================================================================//		      
        case "inspect":
          {
            const fetch = require('node-fetch');
            const cheerio = require('cheerio');
            if (!text) {
              return m.reply("Provide a valid web link to fetch! The bot will crawl the website and fetch its HTML, CSS, JavaScript, and any media embedded in it.");
            }
            if (!/^https?:\/\//i.test(text)) {
              return m.reply("Please provide a URL starting with http:// or https://");
            }
            try {
              const response = await fetch(text);
              const html = await response.text();
              const $ = cheerio.load(html);
              const mediaFiles = [];
              $('img[src], video[src], audio[src]').each((i, element) => {
                let src = $(element).attr('src');
                if (src) {
                  mediaFiles.push(src);
                }
              });
              const cssFiles = [];
              $("link[rel=\"stylesheet\"]").each((i, element) => {
                let href = $(element).attr('href');
                if (href) {
                  cssFiles.push(href);
                }
              });
              const jsFiles = [];
              $('script[src]').each((i, element) => {
                let src = $(element).attr('src');
                if (src) {
                  jsFiles.push(src);
                }
              });
              await m.reply(`**Full HTML Content**:\n\n${html}`);
              if (cssFiles.length > 0) {
                for (const cssFile of cssFiles) {
                  const cssResponse = await fetch(new URL(cssFile, text));
                  const cssContent = await cssResponse.text();
                  await m.reply(`**CSS File Content**:\n\n${cssContent}`);
                }
              } else {
                await m.reply("No external CSS files found.");
              }
              if (jsFiles.length > 0) {
                for (const jsFile of jsFiles) {
                  const jsResponse = await fetch(new URL(jsFile, text));
                  const jsContent = await jsResponse.text();
                  await m.reply(`**JavaScript File Content**:\n\n${jsContent}`);
                }
              } else {
                await m.reply("No external JavaScript files found.");
              }
              if (mediaFiles.length > 0) {
                await m.reply(`**Media Files Found**:\n${mediaFiles.join("\n")}`);
              } else {
                await m.reply("No media files (images, videos, audios) found.");
              }
            } catch (error) {
              console.error(error);
              return m.reply("An error occurred while fetching the website content.");
            }
          }
          break;

        //========================================================================================================================//		      
        case 'metallic':
          {
            var mumaker = require("mumaker");
            if (!text || text == "") {
              m.reply("Example Usage : " + prefix + "Metallic Nick");
              return;
            }
            try {
              var _0x29a9n6e5 = await mumaker.ephoto("https://en.ephoto360.com/impressive-decorative-3d-metal-text-effect-798.html", text);
              m.reply("*Wait a moment...*");
              await client.sendMessage(m.chat, {
                image: {
                  url: _0x29a9n6e5.image
                },
                caption: `GENERATED BY VINIZIAZ-XMD`
              });
            } catch (_0x180d0734) {
              m.reply(_0x180d0734);
            }
          }
          break;

        //========================================================================================================================//		      
        case 'ice':
          {
            var mumaker = require("mumaker");
            if (!text || text == "") {
              m.reply("Example Usage : " + prefix + "Ice Nick");
              return;
            }
            try {
              var _0x295 = await mumaker.ephoto("https://en.ephoto360.com/ice-text-effect-online-101.html", text);
              m.reply("*Wait a moment...*");
              await client.sendMessage(m.chat, {
                image: {
                  url: _0x295.image
                },
                caption: `GENERATED BY VINIZIAZ-XMD`
              });
            } catch (_0x180d) {
              m.reply(_0x180d);
            }
          }
          break;

        //========================================================================================================================//		      
        case 'snow':
          {
            var mumaker = require("mumaker");
            if (!text || text == "") {
              m.reply("Example Usage : " + prefix + "Snow Nick");
              return;
            }
            try {
              var _029a96e5 = await mumaker.ephoto("https://en.ephoto360.com/create-a-snow-3d-text-effect-free-online-621.html", text);
              m.reply("*Wait a moment...*");
              await client.sendMessage(m.chat, {
                image: {
                  url: _029a96e5.image
                },
                caption: `GENERATED BY VINIZIAZ-XMD`
              });
            } catch (_0180d034) {
              m.reply(_0180d034);
            }
          }
          break;

        //========================================================================================================================//		      
        case 'impressive':
          {
            var mumaker = require("mumaker");
            if (!text || text == "") {
              m.reply("Example Usage : " + prefix + "impressive Nick");
              return;
            }
            try {
              var _0x29a96em5 = await mumaker.ephoto("https://en.ephoto360.com/create-3d-colorful-paint-text-effect-online-801.html", text);
              m.reply("*Wait a moment...*");
              await client.sendMessage(m.chat, {
                image: {
                  url: _0x29a96em5.image
                },
                caption: `GENERATED BY VINIZIAZ-XMD`
              });
            } catch (_0x18d034) {
              m.reply(_0x18d034);
            }
          }
          break;

        //========================================================================================================================//		      
        case 'noel':
          {
            var mumaker = require("mumaker");
            if (!text || text == "") {
              m.reply("Example usage: " + prefix + "Noel myself");
              return;
            }
            try {
              var hunte = await mumaker.ephoto("https://en.ephoto360.com/noel-text-effect-online-99.html", text);
              m.reply("*Wait a moment...*");
              await client.sendMessage(m.chat, {
                image: {
                  url: hunte.image
                },
                caption: `GENERATED BY VINIZIAZ-XMD`
              }, {
                quoted: m
              });
            } catch (_0x29df9) {
              m.reply("💀💀" + _0x29df9);
            }
          }
          break;

        //========================================================================================================================//		      
        case 'water':
          {
            var mumaker = require("mumaker");
            if (!text || text == "") {
              m.reply("Example usage: " + prefix + "Water myself");
              return;
            }
            try {
              var hunterr = await mumaker.ephoto("https://en.ephoto360.com/create-water-effect-text-online-295.html", text);
              m.reply("*Wait a moment...*");
              await client.sendMessage(m.chat, {
                image: {
                  url: hunterr.image
                },
                caption: `GENERATED BY VINIZIAZ-XMD`
              }, {
                quoted: m
              });
            } catch (_0x9ddf9) {
              m.reply("💀💀" + _0x9ddf9);
            }
          }
          break;

        //========================================================================================================================//		
        case 'matrix':
          {
            var mumaker = require("mumaker");
            if (!text || text == "") {
              m.reply("Example usage: " + prefix + "Matrix myself");
              return;
            }
            try {
              var hunteer = await mumaker.ephoto("https://en.ephoto360.com/matrix-text-effect-154.html", text);
              m.reply("*Wait a moment...*");
              await client.sendMessage(m.chat, {
                image: {
                  url: hunteer.image
                },
                caption: `GENERATED BY VINIZIAZ-XMD`
              }, {
                quoted: m
              });
            } catch (_0x29ddf8) {
              m.reply("💀💀" + _0x29ddf8);
            }
          }
          break;
        //========================================================================================================================//		
        case 'light':
          {
            var mumaker = require("mumaker");
            if (!text || text == "") {
              m.reply("Example usage: " + prefix + "Light myself");
              return;
            }
            try {
              var hunteqr = await mumaker.ephoto("https://en.ephoto360.com/light-text-effect-futuristic-technology-style-648.html", text);
              m.reply("*Wait a moment...*");
              await client.sendMessage(m.chat, {
                image: {
                  url: hunteqr.image
                },
                caption: `GENERATED BY VINIZIAZ-XMD`
              }, {
                quoted: m
              });
            } catch (_0x29ddf4) {
              m.reply("💀💀" + _0x29ddf4);
            }
          }
          break;

        //========================================================================================================================//		      
        case 'neon':
          {
            var mumaker = require("mumaker");
            if (!text || text == "") {
              m.reply("Example Usage : " + prefix + "Neon Nick");
              return;
            }
            try {
              var _0x29a96e5 = await mumaker.ephoto("https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html", text);
              m.reply("*Wait a moment...*");
              await client.sendMessage(m.chat, {
                image: {
                  url: _0x29a96e5.image
                },
                caption: `GENERATED BY VINIZIAZ-XMD`
              });
            } catch (_0x180d034) {
              m.reply(_0x180d034);
            }
          }
          break;

        //========================================================================================================================//		      
        case 'silver':
        case 'silva':
          {
            var mumaker = require("mumaker");
            if (!text || text == " ") {
              m.reply("Example Usage : " + prefix + "Silva Nick");
              return;
            }
            try {
              var _0x2996e = await mumaker.ephoto("https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html", text);
              m.reply("*Wait a moment...*");
              await client.sendMessage(m.chat, {
                image: {
                  url: _0x2996e.image
                },
                caption: `GENERATED BY VINIZIAZ-XMD`
              });
            } catch (_0x180d3) {
              m.reply(_0x180d3);
            }
          }
          break;

        //========================================================================================================================//		      
        case 'devil':
          {
            var mumaker = require("mumaker");
            if (!text || text == "") {
              m.reply("Example Usage : " + prefix + "Devil Nick");
              return;
            }
            try {
              var _0x9a96e = await mumaker.ephoto("https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html", text);
              m.reply("*Wait a moment...*");
              await client.sendMessage(m.chat, {
                image: {
                  url: _0x9a96e.image
                },
                caption: `GENERATED BY VINIZIAZ-XMD`
              });
            } catch (_0x80d03) {
              m.reply(_0x80d03);
            }
          }
          break;

        //========================================================================================================================//		      
        case 'typography':
          {
            var mumaker = require("mumaker");
            if (!text || text == "") {
              m.reply("Example Usage : " + prefix + "Typography Nick");
              return;
            }
            try {
              var _0x29a996e = await mumaker.ephoto("https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html", text);
              m.reply("*Wait a moment...*");
              await client.sendMessage(m.chat, {
                image: {
                  url: _0x29a996e.image
                },
                caption: `GENERATED BY VINIZIAZ-XMD`
              });
            } catch (_0x180d063) {
              m.reply(_0x180d063);
            }
          }
          break;

        //========================================================================================================================//		      
        case 'purple':
          {
            var mumaker = require("mumaker");
            if (!text || text == "") {
              m.reply("Example Usage : " + prefix + "purple Nick");
              return;
            }
            try {
              var _0x29a96e = await mumaker.ephoto("https://en.ephoto360.com/purple-text-effect-online-100.html", text);
              m.reply("*Wait a moment...*");
              await client.sendMessage(m.chat, {
                image: {
                  url: _0x29a96e.image
                },
                caption: `GENERATED BY VINIZIAZ-XMD`
              });
            } catch (_0x180d03) {
              m.reply(_0x180d03);
            }
          }
          break;

        //========================================================================================================================//		      
        case 'thunder':
          {
            var mumaker = require("mumaker");
            if (!text || text == "") {
              m.reply("Example Usage : " + prefix + "Thunder Nick");
              return;
            }
            try {
              var _0x29a96 = await mumaker.ephoto("https://en.ephoto360.com/thunder-text-effect-online-97.html", text);
              m.reply("*Wait a moment...*");
              await client.sendMessage(m.chat, {
                image: {
                  url: _0x29a96.image
                },
                caption: `GENERATED BY VINIZIAZ-XMD`
              });
            } catch (_0x180d0) {
              m.reply(_0x180d0);
            }
          }
          break;

        //========================================================================================================================//		      
        case 'leaves':
          {
            var mumaker = require("mumaker");
            if (!text || text == "") {
              m.reply("Example Usage : " + prefix + "Leaves VINIZIAZ-XMD");
              return;
            }
            try {
              var _0x14192dl = await mumaker.ephoto("https://en.ephoto360.com/green-brush-text-effect-typography-maker-online-153.html", text);
              m.reply("Wait a moment...");
              await client.sendMessage(m.chat, {
                image: {
                  url: _0x14192dl.image
                },
                caption: `GENERATED BY VINIZIAZ-XMD`
              }, {
                quoted: m
              });
            } catch (_0x24de3) {
              m.reply(_0x24de3);
            }
          }
          break;

        //========================================================================================================================//		      
        case '1917':
          {
            var mumaker = require("mumaker");
            if (!text || text == "") {
              m.reply("Example Usage : " + prefix + "1917 Hunter");
              return;
            }
            try {
              var _0x14192 = await mumaker.ephoto("https://en.ephoto360.com/1917-style-text-effect-523.html", text);
              m.reply("Wait a moment...");
              await client.sendMessage(m.chat, {
                image: {
                  url: _0x14192.image
                },
                caption: `GENERATED BY VINIZIAZ-XMD`
              }, {
                quoted: m
              });
            } catch (_0x24de3dl) {
              m.reply(_0x24de3dl);
            }
          }
          break;

        //========================================================================================================================//		      
        case 'arena':
          {
            var mumaker = require("mumaker");
            if (!text || text == "") {
              m.reply("Example Usage : " + prefix + "arena VINIZIAZ-XMD");
              return;
            }
            try {
              var _0x14192d = await mumaker.ephoto("https://en.ephoto360.com/create-cover-arena-of-valor-by-mastering-360.html", text);
              m.reply("Wait a moment...");
              await client.sendMessage(m.chat, {
                image: {
                  url: _0x14192d.image
                },
                caption: `GENERATED BY VINIZIAZ-XMD`
              }, {
                quoted: m
              });
            } catch (_0x24de3d) {
              m.reply(_0x24de3d);
            }
          }
          break;

        //========================================================================================================================//		      
        case 'hacker':
          {
            var mumaker = require("mumaker");
            if (!text || text == "") {
              m.reply("Example usage :  " + prefix + "hacker Nick");
              return;
            }
            try {
              let _0x4086bb = await mumaker.ephoto("https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", text);
              m.reply("*Wait a moment...*");
              await client.sendMessage(m.chat, {
                image: {
                  url: _0x4086bb.image
                },
                caption: `GENERATED BY VINIZIAZ-XMD`
              }, {
                quoted: m
              });
            } catch (_0x503c5f) {
              m.reply("🥵🥵 " + _0x503c5f);
            }
          }
          break;

        //========================================================================================================================//		      
        case 'sand':
          {
            var mumaker = require("mumaker");
            if (!text || text == "") {
              m.reply("Example Usage : " + prefix + "sand Viniziaz");
              return;
            }
            try {
              let _0x4959e5 = await mumaker.ephoto("https://en.ephoto360.com/write-names-and-messages-on-the-sand-online-582.html", text);
              m.reply("*Wait a moment...*");
              await client.sendMessage(m.chat, {
                image: {
                  url: _0x4959e5.image
                },
                caption: `GENERATED BY VINIZIAZ-XMD`
              }, {
                quoted: m
              });
            } catch (_0x593c10) {
              m.reply("🚫🚫 " + _0x593c10);
            }
          }
          break;

        //========================================================================================================================//		      
        case 'dragonball':
          {
            var mumaker = require("mumaker");
            if (!text || text == "") {
              m.reply("Example usage :  " + prefix + "dragonball Nick");
              return;
            }
            try {
              const _0x26f3ed = await mumaker.ephoto("https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html", text);
              m.reply("*Wait a moment...*");
              await client.sendMessage(m.chat, {
                image: {
                  url: _0x26f3ed.image
                },
                caption: `GENERATED BY VINIZIAZ-XMD`
              }, {
                quoted: m
              });
            } catch (_0x553773) {
              m.reply("🥵🥵 " + _0x553773);
            }
          }
          break;

        //========================================================================================================================//		      
        case 'naruto':
          {
            var mumaker = require("mumaker");
            if (!text || text == "") {
              m.reply("Example usage : " + prefix + "naruto Hunter");
              return;
            }
            try {
              var _0x357389 = await mumaker.ephoto("https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html", text);
              m.reply("*Wait a moment...*");
              await client.sendMessage(m.chat, {
                image: {
                  url: _0x357389.image
                },
                caption: `GENERATED BY VINIZIAZ-XMD`
              }, {
                quoted: m
              });
            } catch (_0x564fe1) {
              m.reply("🥵🥵 " + _0x564fe1);
            }
          }
          break;

        //========================================================================================================================//		      
        case 'graffiti':
          {
            var mumaker = require("mumaker");
            if (!text || text == "") {
              m.reply("Example usage : " + prefix + "graffiti Nick");
              return;
            }
            try {
              let _0x57ef84 = await mumaker.ephoto("https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html", text);
              m.reply("*Wait a moment...*");
              await client.sendMessage(m.chat, {
                image: {
                  url: _0x57ef84.image
                },
                caption: `GENERATED BY VINIZIAZ-XMD`
              }, {
                quoted: m
              });
            } catch (_0x27e2e5) {
              m.reply("🥵🥵 " + _0x27e2e5);
            }
          }
          break;

        //========================================================================================================================//		      
        case 'cat':
          {
            var mumaker = require("mumaker");
            if (!text || text == "") {
              m.reply("Example usage : * " + prefix + "cat Nick");
              return;
            }
            try {
              let nick = await mumaker.ephoto("https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html", text);
              m.reply("*Wait a moment...*");
              await client.sendMessage(m.chat, {
                image: {
                  url: nick.image
                },
                caption: `GENERATED BY VINIZIAZ-XMD`
              }, {
                quoted: m
              });
            } catch (_0x27e2e5) {
              m.reply("🥵🥵 " + _0x27e2e5);
            }
          }
          break;

        //========================================================================================================================//		      
        case 'gold':
          {
            var mumaker = require("mumaker");
            if (!text || text == "") {
              m.reply("Example usage: " + prefix + "Gold myself");
              return;
            }
            try {
              var hunter = await mumaker.ephoto("https://en.ephoto360.com/modern-gold-4-213.html", text);
              m.reply("*Wait a moment...*");
              await client.sendMessage(m.chat, {
                image: {
                  url: hunter.image
                },
                caption: `GENERATED BY VINIZIAZ-XMD`
              }, {
                quoted: m
              });
            } catch (_0x29ddf9) {
              m.reply("💀💀" + _0x29ddf9);
            }
          }
          break;

        //========================================================================================================================//		      
        case 'child':
          {
            var mumaker = require("mumaker");
            if (!text || text == "") {
              m.reply("Example usage: " + prefix + "Child Viniziaz");
              return;
            }
            try {
              var tumba = await mumaker.ephoto("https://en.ephoto360.com/write-text-on-wet-glass-online-589.html", text);
              m.reply("*Wait a moment...*");
              await client.sendMessage(m.chat, {
                image: {
                  url: tumba.image
                },
                caption: `GENERATED BY VINIZIAZ-XMD`
              }, {
                quoted: m
              });
            } catch (_0x29ddf) {
              m.reply("💀💀" + _0x29ddf);
            }
          }
          break;

        //========================================================================================================================//
        case "viniziaz":
          {
            if (!text) {
              return reply(`Hello I'm VINIZIAZ AI. How can i help u?`);
            }
            let d = await fetchJson(`https://bk9.fun/ai/llama?q=${text}`);
            if (!d.BK9) {
              return reply("An error occurred while fetching the AI chatbot response. Please try again later.");
            } else {
              reply(d.BK9);
            }
          }
          break;

        //========================================================================================================================//		      
        case "gpt2":
          {
            if (!text) {
              return reply(`What's your question ?`);
            }
            let d = await fetchJson(`https://bk9.fun/ai/jeeves-chat?q=${text}`);
            if (!d.BK9) {
              return reply("An error occurred while fetching the AI chatbot response. Please try again later.");
            } else {
              reply(d.BK9);
            }
          }
          break;

        //========================================================================================================================//		      
        case 'trt':
        case 'translate':
          {
            try {
              // Ensure that there is a language code and text to translate
              const args = text.split(' ');
              if (args.length < 2) {
                return m.reply(" Please provide a language code and text to translate !");
              }

              // Extract the language code and the text to translate
              const targetLang = args[0]; // First part is the language code
              const textToTranslate = args.slice(1).join(' '); // Join the rest as the text to translate

              // Fetch data from the translation API
              const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(textToTranslate)}&langpair=en|${targetLang}`);

              // Check if the response is ok
              if (!response.ok) {
                return m.reply('Failed to fetch data. Please try again later.');
              }

              // Parse the response JSON
              const data = await response.json();

              // Check if the translation is available in the response
              if (!data.responseData || !data.responseData.translatedText) {
                return m.reply('No translation found for the provided text.');
              }

              // Extract the translated text
              const translatedText = data.responseData.translatedText;

              // Prepare the message to send

              // Send the translated message back to the user
              await client.sendMessage(m.chat, {
                text: ` ${translatedText}`
              }, {
                quoted: m
              });
            } catch (error) {
              console.error("Error occurred:", error);
              m.reply("An error occurred while fetching the data. Please try again later.\n" + error);
            }
          }
          break;

        //========================================================================================================================//		      
        case 'cast':
          {
            if (!Owner) {
              throw NotOwner;
            }
            if (!m.isGroup) {
              throw group;
            }
            if (!text) {
              return m.reply(`provide a text to cast !`);
            }
            let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
            m.reply(`Success in casting the message to contacts\n\nDo not allways use this Command to avoid WA-bans ! `);
            for (let pler of mem) {
              client.sendMessage(pler, {
                text: q
              });
            }
            m.reply(`Casting completed successfully😁`);
          }
          break;

        //========================================================================================================================//		      
        case "img":
        case "ai-img":
        case "image":
        case "images":
          {
            var gis = require('g-i-s');
            if (!text) {
              return m.reply("Provide a text");
            }
            try {
              // Use the 'text' as the search term for images
              gis(text, async (error, results) => {
                if (error) {
                  return m.reply("An error occurred while searching for images.\n" + error);
                }

                // Check if results are found
                if (results.length === 0) {
                  return m.reply("No images found.");
                }

                // Limit the number of images to send (e.g., 5)
                const numberOfImages = Math.min(results.length, 5);
                const imageUrls = results.slice(0, numberOfImages).map(result => result.url);

                // Send the images
                const messages = imageUrls.map(url => ({
                  image: {
                    url
                  },
                  caption: `Downloaded by ${botname}`
                }));
                for (const message of messages) {
                  await client.sendMessage(m.chat, message, {
                    quoted: m
                  });
                }
              });
            } catch (e) {
              m.reply("An error occurred.\n" + e);
            }
          }
          break;

        //========================================================================================================================//		      
        case "foreigners":
          {
            if (!m.isGroup) {
              throw group;
            }
            if (!isAdmin) {
              throw admin;
            }
            if (!isBotAdmin) {
              throw botAdmin;
            }
            let _0x2f8982 = participants.filter(_0x3c9d8b => !_0x3c9d8b.admin).map(_0x1db3fb => _0x1db3fb.id).filter(_0x475052 => !_0x475052.startsWith(mycode) && _0x475052 != client.decodeJid(client.user.id));
            if (!args || !args[0]) {
              if (_0x2f8982.length == 0) {
                return m.reply("No foreigners detected.");
              }
              let _0x2d7d67 = `𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀 𝗮𝗿𝗲 𝗺𝗲𝗺𝗯𝗲𝗿𝘀 𝘄𝗵𝗼𝘀𝗲 𝗰𝗼𝘂𝗻𝘁𝗿𝘆 𝗰𝗼𝗱𝗲 𝗶𝘀 𝗻𝗼𝘁 ${mycode}. 𝗧𝗵𝗲 𝗳𝗼𝗹𝗹𝗼𝘄𝗶𝗻𝗴  ${_0x2f8982.length} 𝗳𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀 𝘄𝗲𝗿𝗲 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱:- \n`;
              for (let _0x28761c of _0x2f8982) {
                _0x2d7d67 += `𓅂 @${_0x28761c.split("@")[0]}\n`;
              }
              _0x2d7d67 += `\n𝗧𝗼 𝗿𝗲𝗺𝗼𝘃𝗲 𝘁𝗵𝗲𝗺 𝘀𝗲𝗻𝗱 foreigners -x`;
              client.sendMessage(m.chat, {
                text: _0x2d7d67,
                mentions: _0x2f8982
              }, {
                quoted: m
              });
            } else if (args[0] == "-x") {
              setTimeout(() => {
                client.sendMessage(m.chat, {
                  text: `𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇 𝘄𝗶𝗹𝗹 𝗻𝗼𝘄 𝗿𝗲𝗺𝗼𝘃𝗲 𝗮𝗹𝗹 ${_0x2f8982.length} 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀 𝗳𝗿𝗼𝗺 𝘁𝗵𝗶𝘀 𝗴𝗿𝗼𝘂𝗽 𝗰𝗵𝗮𝘁 𝗶𝗻 𝘁𝗵𝗲 𝗻𝗲𝘅𝘁 𝘀𝗲𝗰𝗼𝗻𝗱.\n\n𝗚𝗼𝗼𝗱 𝗯𝘆𝗲 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀. 𝗧𝗵𝗶𝘀 𝗽𝗿𝗼𝗰𝗲𝘀𝘀 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗲 𝘁𝗲𝗿𝗺𝗶𝗻𝗮𝘁𝗲𝗱⚠️`
                }, {
                  quoted: m
                });
                setTimeout(() => {
                  client.groupParticipantsUpdate(m.chat, _0x2f8982, "remove");
                  setTimeout(() => {
                    m.reply("𝗔𝗻𝘆 𝗿𝗲𝗺𝗮𝗶𝗻𝗶𝗻𝗴 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿 ?🌚.");
                  }, 1000);
                }, 1000);
              }, 1000);
            }
          }
          break;

        //========================================================================================================================//
        case 'dalle':
        case 'createimage':
          {
            if (!text) {
              return m.reply(`*This command generates images from text prompts*\n\n*𝙴xample usage*\n*${prefix + command} Beautiful anime girl*\n*${prefix + command} girl in pink dress*`);
            }
            try {
              m.reply('Please wait, i am generating your image...');
              const response = await fetch(`https://www.arch2devs.ct.ws/api/fluxaws?query=${encodeURIComponent(text)}`);
              if (response.ok) {
                const imageBuffer = await response.buffer();
                await client.sendMessage(m.chat, {
                  image: imageBuffer
                }, {
                  quoted: m
                });
              } else {
                throw '*Aarrhhhg Image generation failed*';
              }
            } catch {
              m.reply('Oops! Something went wrong while generating your image. Please try again later.');
            }
          }
          break;

        //========================================================================================================================//		      
        case "ai":
          {
            const {
              GoogleGenerativeAI: _0x817910
            } = require("@google/generative-ai");
            const _0xc0423b = require("axios");
            try {
              if (!m.quoted) {
                return m.reply("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵!");
              }
              if (!text) {
                return m.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝘀𝗼𝗺𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵! 𝗧𝗵𝗶𝘀 𝗶𝘀 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭 𝗔𝗶, 𝘂𝘀𝗶𝗻𝗴 𝗴𝗲𝗺𝗶𝗻𝗶-𝗽𝗿𝗼-𝘃𝗶𝘀𝗶𝗼𝗻 𝘁𝗼 𝗮𝗻𝗮𝗹𝘆𝘀𝗲 𝗶𝗺𝗮𝗴𝗲𝘀.");
              }
              if (!/image/.test(mime)) {
                return m.reply("𝗛𝘂𝗵 𝘁𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲! 𝗣𝗹𝗲𝗮𝘀𝗲 𝗧𝗮𝗴 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵 !");
              }
              let _0x3439a2 = await client.downloadAndSaveMediaMessage(m.quoted);
              let _0x3dfb7c = await uploadtoimgur(_0x3439a2);
              m.reply("𝗔 𝗺𝗼𝗺𝗲𝘁, 𝗹𝗲𝗺𝗺𝗲 𝗮𝗻𝗮𝗹𝘆𝘀𝗲 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝗼𝗳 𝘁𝗵𝗲 𝗜𝗺𝗮𝗴𝗲...");
              const _0x4e9e6a = new _0x817910("AIzaSyDJUtskTG-MvQdlT4tNE319zBqLMFei8nQ");
              async function _0x309a3c(_0x1400ed, _0x1a081e) {
                const _0x53e4b2 = {
                  responseType: "arraybuffer"
                };
                const _0x1175d9 = await _0xc0423b.get(_0x1400ed, _0x53e4b2);
                const _0x2a4862 = Buffer.from(_0x1175d9.data).toString("base64");
                const _0x2f6e31 = {
                  data: _0x2a4862,
                  mimeType: _0x1a081e
                };
                const _0x14b65d = {
                  inlineData: _0x2f6e31
                };
                return _0x14b65d;
              }
              const _0x22a6bb = {
                model: "gemini-1.5-flash"
              };
              const _0x42849d = _0x4e9e6a.getGenerativeModel(_0x22a6bb);
              const _0x2c743f = [await _0x309a3c(_0x3dfb7c, "image/jpeg")];
              const _0xcf53e3 = await _0x42849d.generateContent([text, ..._0x2c743f]);
              const _0x195f9c = await _0xcf53e3.response;
              const _0x3db5a3 = _0x195f9c.text();
              await m.reply(_0x3db5a3);
            } catch (_0x4b3921) {
              m.reply("I am unable to analyze images at the moment\n" + _0x4b3921);
            }
          }
          break;

        //========================================================================================================================//		      
        case "ai2":
          {
            try {
              if (!m.quoted) {
                return m.reply("Send the image then tag it with the instruction.");
              }
              if (!text) {
                return m.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝘀𝗼𝗺𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵! 𝗧𝗵𝗶𝘀 Viniziaz AI 𝗨𝘀𝗲 𝗚𝗲𝗺𝗶𝗻𝗶-𝗽𝗿𝗼-𝘃𝗶𝘀𝗶𝗼𝗻 𝘁𝗼 𝗮𝗻𝗮𝗹𝘆𝘀𝗲 𝗶𝗺𝗮𝗴𝗲𝘀.");
              }
              if (!/image/.test(mime)) {
                return m.reply("That is not an image, try again while quoting an actual image.");
              }
              let fdr = await client.downloadAndSaveMediaMessage(m.quoted);
              let fta = await uploadtoimgur(fdr);
              m.reply("𝗔 𝗠𝗼𝗺𝗲𝗻𝘁, 𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇[𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗔𝗜] 𝗶𝘀 𝗮𝗻𝗮𝗹𝘆𝘇𝗶𝗻𝗴 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝗼𝗳 𝘁𝗵𝗲 𝗶𝗺𝗮𝗴𝗲. . .");
              const data = await fetchJson(`https://api.dreaded.site/api/gemini-vision?url=${fta}&instruction=${text}`);
              let res = data.result;
              await m.reply(res);
            } catch (e) {
              m.reply("I am unable to analyze images at the moment\n" + e);
            }
          }
          break;

        //========================================================================================================================//		      
        case "vision":
          {
            if (!msgR || !text) {
              m.reply("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝗮𝗻𝗱 𝗴𝗶𝘃𝗲 𝘀𝗼𝗺𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵. 𝗜'𝗺 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭 𝗔𝗶, 𝗶 𝘂𝘀𝗲 𝗕𝗮𝗿𝗱 𝘁𝗼 𝗮𝗻𝗮𝗹𝘆𝘇𝗲 𝗶𝗺𝗮𝗴𝗲𝘀.");
              return;
            }
            ;
            let _0x44b3e0;
            if (msgR.imageMessage) {
              _0x44b3e0 = msgR.imageMessage;
            } else {
              m.reply("𝗛𝘂𝗵, 𝗧𝗵𝗮𝘁'𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲, 𝗦𝗲𝗻𝗱 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘁𝗵𝗲𝗻 𝘁𝗮𝗴 𝗶𝘁 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 !");
              return;
            }
            ;
            try {
              let _0x11f50e = await client.downloadAndSaveMediaMessage(_0x44b3e0);
              let _0x45392d = await uploadtoimgur(_0x11f50e);
              m.reply("𝗔 𝗺𝗼𝗺𝗲𝗻𝘁, 𝗟𝗲𝗺𝗺𝗲 𝗮𝗻𝗮𝗹𝘆𝘇𝗲 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝗼𝗳 𝘁𝗵𝗲 𝗶𝗺𝗮𝗴𝗲. . .");
              let _0x4f137e = await (await fetch("https://bk9.fun/ai/geminiimg?url=" + _0x45392d + "&q=" + text)).json();
              const _0x4bfd63 = {
                text: _0x4f137e.BK9
              };
              await client.sendMessage(m.chat, _0x4bfd63, {
                quoted: m
              });
            } catch (_0x1be711) {
              m.reply("An error occured\n" + _0x1be711);
            }
          }
          break;

        //========================================================================================================================//		      
        case 'remini':
          {
            if (!quoted) {
              return reply(`𝗪𝗵𝗲𝗿𝗲 𝗶𝘀 𝘁𝗵𝗲 𝗶𝗺𝗮𝗴𝗲 ?`);
            }
            if (!/image/.test(mime)) {
              return reply(`𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝗰𝗮𝗽𝘁𝗶𝗼𝗻𝘀 ${prefix + command}`);
            }
            const {
              remini
            } = require('./lib/remini');
            let media = await quoted.download();
            let proses = await remini(media, "enhance");
            client.sendMessage(m.chat, {
              image: proses,
              caption: '𝗚𝗲𝗻𝗲𝗿𝗮𝘁𝗲𝗱 𝗯𝘆 𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇-𝗫𝗺𝗱'
            }, {
              quoted: m
            });
          }
          break;

        //========================================================================================================================//		      
        case "kill2":
        case "kickall2":
          {
            if (!Owner) {
              throw NotOwner;
            }
            if (!text) {
              return m.reply("Provide a valid group link. Ensure the bot is in that group with admin privileges !");
            }
            let groupId;
            let groupName;
            try {
              let inviteCode = args[0].split("https://chat.whatsapp.com/")[1];
              const groupInfo = await client.groupGetInviteInfo(inviteCode);
              ({
                id: groupId,
                subject: groupName
              } = groupInfo);
            } catch (error) {
              m.reply("Why are you giving me an invalid group link?");
              return;
            }
            try {
              const groupMetadata = await client.groupMetadata(groupId);
              const participants = await groupMetadata.participants;
              let participantIds = participants.filter(participant => participant.id !== client.decodeJid(client.user.id)).map(participant => participant.id);
              await m.reply("☠️Initializing and Preparing to kill☠️ " + groupName);
              await client.groupSettingUpdate(groupId, "announcement");
              await client.removeProfilePicture(groupId);
              await client.groupUpdateSubject(groupId, "𝗧𝗵𝗶𝘀 𝗴𝗿𝗼𝘂𝗽 𝗶𝘀 𝗻𝗼 𝗹𝗼𝗻𝗴𝗲𝗿 𝗮𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 🚫");
              await client.groupUpdateDescription(groupId, "//𝗕𝘆 𝘁𝗵𝗲 𝗼𝗿𝗱𝗲𝗿 𝗼𝗳 𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇 𝗗𝗲𝘃 !");
              await client.groupRevokeInvite(groupId);
              await client.sendMessage(groupId, {
                text: `At this time, My owner has initiated kill command remotely.\nThis has triggered me to remove all ${participantIds.length} group participants in the next second.\n\nGoodbye Everyone! 👋\n\n⚠️THIS PROCESS CANNOT BE TERMINATED⚠️`,
                mentions: participants.map(participant => participant.id)
              });
              await client.groupParticipantsUpdate(groupId, participantIds, "remove");
              const goodbyeMessage = {
                text: "Goodbye Group owner👋\nIt's too cold in Here🥶"
              };
              await client.sendMessage(groupId, goodbyeMessage);
              await client.groupLeave(groupId);
              await m.reply("```Successfully Killed💀```");
            } catch (error) {
              m.reply("```Kill command failed, bot is either not in that group, or not an admin```.");
            }
          }
          break;

        //========================================================================================================================//		      
        case 'carbon':
          {
            const fetch = require('node-fetch');
            if (m.quoted && m.quoted.text) {
              const forq = m.quoted.text;
              try {
                let response = await fetch('https://carbonara.solopov.dev/api/cook', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    code: forq,
                    backgroundColor: '#1F816D'
                  })
                });
                if (!response.ok) {
                  return m.reply('API failed to fetch a valid response.');
                }
                let per = await response.buffer();
                await client.sendMessage(m.chat, {
                  image: per,
                  caption: `𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗗 𝗕𝗬 ${botname}`
                }, {
                  quoted: m
                });
              } catch (error) {
                m.reply("An error occured\n" + error);
              }
            } else {
              m.reply('Quote a code message');
            }
          }
          break;

        //========================================================================================================================//		      
        case 'define':
          {
            try {
              if (!text) {
                return m.reply('Please provide a word.');
              }
              const word = encodeURIComponent(text);
              const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
              if (!response.ok) {
                return m.reply('Failed to fetch data. Please try again later.');
              }
              const data = await response.json();
              if (!data || !data[0] || !data[0].meanings || data[0].meanings.length === 0) {
                return m.reply('No definitions found for the provided word.');
              }
              const definitionData = data[0];
              const definition = definitionData.meanings[0].definitions[0].definition;
              await client.sendMessage(m.chat, {
                text: `${definition}`
              }, {
                quoted: m
              });
            } catch (error) {
              console.error("Error occurred:", error);
              m.reply("An error occurred while fetching the data. Please try again later.\n" + error);
            }
          }
          break;

        //========================================================================================================================//		      
        case "tweet":
          {
            if (!text) {
              return m.reply("provide some text for the tweet");
            }
            const username = m.sender.split('@')[0];
            const avatar = await client.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.imgur.com/vuxJCTB.jpeg');
            await client.sendMessage(m.chat, {
              image: {
                url: `https://some-random-api.com/canvas/misc/tweet?displayname=${encodeURIComponent(pushname)}&username=${encodeURIComponent(username)}&avatar=${encodeURIComponent(avatar)}&comment=${encodeURIComponent(text)}&replies=${encodeURIComponent("246")}&retweets=${encodeURIComponent("125")}&theme=${encodeURIComponent("dark")}`
              },
              caption: `𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗲𝗱 𝗯𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗`
            }, {
              quoted: m
            });
          }
          break;

        //========================================================================================================================//		      
        case "pickupline":
          {
            try {
              const response = await fetch('https://api.popcat.xyz/pickuplines');
              if (!response.ok) {
                throw new Error('Failed to fetch data');
              }
              const {
                pickupline
              } = await response.json();
              await client.sendMessage(m.chat, {
                text: `${pickupline}`
              }, {
                quoted: m
              });
            } catch (error) {
              console.error('Error fetching data:', error);
              await client.sendMessage(m.chat, {
                text: 'An error occurred while fetching the fact.'
              }, {
                quoted: m
              });
            }
          }
          break;

        //========================================================================================================================//		      
        case "quotes":
          {
            try {
              const response = await fetch('https://favqs.com/api/qotd');
              if (!response.ok) {
                throw new Error('Failed to fetch data');
              }
              const {
                quote
              } = await response.json();
              await client.sendMessage(m.chat, {
                text: `${quote.body} \n\n𝗤𝘂𝗼𝘁𝗲 𝗕𝘆 ${quote.author}`
              }, {
                quoted: m
              });
            } catch (error) {
              console.error('Error fetching data:', error);
              await client.sendMessage(m.chat, {
                text: 'An error occurred while fetching the fact.'
              }, {
                quoted: m
              });
            }
          }
          break;

        //========================================================================================================================//		      
        case "google":
          {
            const axios = require("axios");
            if (!text) {
              m.reply("Provide a search term!\nEg: .Google What is treason");
              return;
            }
            let {
              data
            } = await axios.get(`https://www.googleapis.com/customsearch/v1?q=${text}&key=AIzaSyDMbI3nvmQUrfjoCJYLS69Lej1hSXQjnWI&cx=baf9bdb0c631236e5`);
            if (data.items.length == 0) {
              m.reply("❌ Unable to find a result");
              return;
            }
            let tex = `SEARCH FROM GOOGLE\n🔍 Term:- ${text}\n\n`;
            for (let i = 0; i < data.items.length; i++) {
              tex += `🪧 Title:- ${data.items[i].title}\n🖥 Description:- ${data.items[i].snippet}\n🌐 Link:- ${data.items[i].link}\n\n`;
            }
            m.reply(tex);
          }
          break;

        //========================================================================================================================//		      
        case "hack":
          {
            if (!Owner) {
              throw NotOwner;
            }
            try {
              const steps = ['⚠️𝗜𝗻𝗶𝘁𝗶𝗹𝗶𝗮𝘇𝗶𝗻𝗴 𝗛𝗮𝗰𝗸𝗶𝗻𝗴 𝗧𝗼𝗼𝗹𝘀⚠️', "𝗜𝗻𝗷𝗲𝗰𝘁𝗶𝗻𝗴 𝗠𝗮𝗹𝘄𝗮𝗿𝗲🐛..\n𝗟𝗼𝗮𝗱𝗶𝗻𝗴 𝗗𝗲𝘃𝗶𝗰𝗲 𝗚𝗮𝗹𝗹𝗲𝗿𝘆 𝗙𝗶𝗹𝗲𝘀⚠️", '```██ 10%``` ⏳', '```████ 20%``` ⏳', '```██████ 30%``` ⏳', '```████████ 40%``` ⏳', '```██████████ 50%``` ⏳', '```████████████ 60%``` ⏳', '```██████████████ 70%``` ⏳', '```████████████████ 80%``` ⏳', '```██████████████████ 90%``` ⏳', '```████████████████████ 100%``` ✅', "```𝗦𝘆𝘀𝘁𝗲𝗺 𝗛𝘆𝗷𝗮𝗰𝗸𝗶𝗻𝗴 𝗼𝗻 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...```\n```𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗶𝗻𝗴 𝘁𝗼 𝘁𝗵𝗲 𝗦𝗲𝗿𝘃𝗲𝗿 𝘁𝗼 𝗙𝗶𝗻𝗱 𝗘𝗿𝗿𝗼𝗿 404```", "```𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 𝘁𝗼 𝗗𝗲𝘃𝗶𝗰𝗲...\n𝗥𝗲𝗰𝗲𝗶𝘃𝗶𝗻𝗴 𝗗𝗮𝘁𝗮/𝗦𝗲𝗰𝗿𝗲𝘁 𝗣𝗮𝘀𝘀𝘄𝗼𝗿𝗱𝘀...```", "```𝗗𝗮𝘁𝗮 𝗧𝗿𝗮𝗻𝘀𝗳𝗲𝗿𝗲𝗱 𝗙𝗿𝗼𝗺 𝗱𝗲𝘃𝗶𝗰𝗲 100% 𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗲𝗱\n𝗘𝗿𝗮𝘀𝗶𝗻𝗴 𝗮𝗹𝗹 𝗘𝘃𝗶𝗱𝗲𝗻𝗰𝗲, 𝗞𝗶𝗹𝗹𝗶𝗻𝗴 𝗮𝗹𝗹 𝗠𝗮𝗹𝘄𝗮𝗿𝗲𝘀🐛...```", "```𝗦𝗘𝗡𝗗𝗜𝗡𝗗 𝗟𝗢𝗚 𝗗𝗢𝗖𝗨𝗠𝗘𝗡𝗧𝗦...```", "```𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗦𝗲𝗻𝘁 𝗗𝗮𝘁𝗮 𝗔𝗻𝗱 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗶𝗼𝗻 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗗𝗶𝘀𝗰𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱```", "```𝗔𝗹𝗹 𝗕𝗮𝗰𝗸𝗹𝗼𝗴𝘀 𝗖𝗹𝗲𝗮𝗿𝗲𝗱 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆💣\n𝗬𝗼𝘂𝗿 𝗦𝘆𝘀𝘁𝗲𝗺 𝗪𝗶𝗹𝗹 𝗕𝗲 𝗗𝗼𝘄𝗻 𝗜𝗻 𝗧𝗵𝗲 𝗡𝗲𝘅𝘁 𝗠𝗶𝗻𝘂𝘁𝗲⚠️```"];
              for (const line of steps) {
                await client.sendMessage(m.chat, {
                  text: line
                }, {
                  quoted: m
                });
                await new Promise(resolve => setTimeout(resolve, 1000));
              }
            } catch (error) {
              console.error('Error during prank:', error);
              client.sendMessage(m.chat, {
                text: `❌ *Error!* Something went wrong. Reason: ${error.message}. Please try again later.`
              });
            }
          }
          break;

        //========================================================================================================================//		      
        case "compile-py":
          if (!text && !m.quoted) {
            throw 'Quote/tag a python code to compile.';
          }
          const sourcecode = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text;
          let resultPromise = python.runSource(sourcecode);
          resultPromise.then(resultt => {
            console.log(resultt);
            reply(resultt.stdout);
            reply(resultt.stderr);
          }).catch(err => {
            console.log(resultt.stderr);
            reply(resultt.stderr);
          });
          break;

        //========================================================================================================================//		      
        case 'save':
          {
            const textL = m.text.toLowerCase();
            const quotedMessage = m.msg?.contextInfo?.quotedMessage;
            if (quotedMessage && textL.startsWith(prefix + "save") && !m.quoted.chat.includes("status@broadcast")) {
              return m.reply("You did not tag a status media to save.");
            }
            if (Owner && quotedMessage && textL.startsWith(prefix + "save") && m.quoted.chat.includes("status@broadcast")) {
              if (quotedMessage.imageMessage) {
                let imageCaption = quotedMessage.imageMessage.caption;
                let imageUrl = await client.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
                client.sendMessage(m.chat, {
                  image: {
                    url: imageUrl
                  },
                  caption: imageCaption
                });
              }
              if (quotedMessage.videoMessage) {
                let videoCaption = quotedMessage.videoMessage.caption;
                let videoUrl = await client.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
                client.sendMessage(m.chat, {
                  video: {
                    url: videoUrl
                  },
                  caption: videoCaption
                });
              }
            }
          }
          break;

        //========================================================================================================================//		      
        case 'gitclone':
          {
            if (!text) {
              return m.reply(`Where is the link?`);
            }
            if (!text.includes('github.com')) {
              return m.reply(`Is that a GitHub repo link ?!`);
            }
            let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
            let [, user3, repo] = text.match(regex1) || [];
            repo = repo.replace(/.git$/, '');
            let filename = (await fetch(`https://api.github.com/repos/${user3}/${repo}/zipball`, {
              method: 'HEAD'
            })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1];
            await client.sendMessage(m.chat, {
              document: {
                url: `https://api.github.com/repos/${user3}/${repo}/zipball`
              },
              fileName: filename + '.zip',
              mimetype: 'application/zip'
            }, {
              quoted: m
            }).catch(err => m.reply("error"));
          }
          break;

        //========================================================================================================================//		      
        case 'darkgpt':
          {
            if (!text) {
              return m.reply("Hey there Fuckface😈, I'm Darkgpt, I respond to anything be it harmful, I'm a pure Evil👿, What sort of dark and delightful nonsense do you want to dive into Today😈 ?");
            }
            try {
              const data = await fetchJson(`https://api.dreaded.site/api/makgpt?text=${text}`);
              if (data && data.result) {
                const res = data.result;
                await m.reply(res);
              } else {
                m.reply("Huh, the silence is deafening, no response whatsoever💀.The API seems to have vanished into the abyss...😔");
              }
            } catch (error) {
              reply("An error occured while communicating with the APIs\n" + error);
            }
          }
          break;

        //========================================================================================================================//		      
        case 'github':
          {
            if (!text) {
              return m.reply('Provide a github username to stalk');
            }
            try {
              const response = await fetch(`https://itzpire.com/stalk/github-user?username=${text}`);
              const data = await response.json();
              const username = data.data.username;
              const nickname = data.data.nickname;
              const bio = data.data.bio;
              const profilePic = data.data.profile_pic;
              const url = data.data.url;
              const location = data.data.location;
              const publicRepos = data.data.public_repo;
              const followers = data.data.followers;
              const following = data.data.following;
              const createdAt = data.data.ceated_at;
              await client.sendMessage(m.chat, {
                image: {
                  url: profilePic
                },
                caption: `Username:- ${username}\n\nNickname:- ${nickname}\n\nBio:- ${bio}\n\nLink:- ${url}\n\nLocation:- ${location}\n\nFollowers:- ${followers}\n\nFollowing:- ${following}\n\nRepos:- ${publicRepos}\n\nCreated:- ${createdAt}`
              }, {
                quoted: m
              });
            } catch (error) {
              m.reply("Unable to fetch data\n" + error);
            }
          }
          break;

        //========================================================================================================================//		      
        case "screenshot":
        case "ss":
          {
            try {
              if (!text) {
                return m.reply("Provide a website link to screenshot.");
              }
              await client.sendMessage(m.chat, {
                image: {
                  url: `https://image.thum.io/get/fullpage/${text}`
                },
                caption: `𝗦𝗰𝗿𝗲𝗲𝗻𝘀𝗵𝗼𝘁 𝗯𝘆 ${botname}`
              }, {
                quoted: m
              });
            } catch (error) {
              m.reply("An error occured.");
            }
          }
          break;

        //========================================================================================================================//		      
        case "alive":
        case "test":
          {
            const dooc = {
              audio: {
                url: "./Media/alive.mp3"
              },
              mimetype: 'audio/mp4',
              ptt: true,
              waveform: [100, 0, 100, 0, 100, 0, 100],
              fileName: "𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇",
              contextInfo: {
                mentionedJid: [m.sender],
                externalAdReply: {
                  title: "𝗪𝗵𝗼𝘀𝗮𝗽 𝗻𝗶𝗴𝗴𝗮😂, 𝗜 𝗮𝗺 𝗔𝗰𝘁𝗶𝘃𝗲 𝗮𝗻𝗱 𝗔𝗹𝗶𝘃𝗲 𝗢𝗳𝗰𝗼𝘇",
                  body: "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭 𝗫𝗠𝗗",
                  thumbnailUrl: "https://files.catbox.moe/7f98vp.jpg",
                  sourceUrl: '',
                  mediaType: 1,
                  renderLargerThumbnail: true
                }
              }
            };
            await client.sendMessage(m.chat, dooc, {
              quoted: m
            });
          }
          break;

        //========================================================================================================================//		      
        case "removebg":
          {
            try {
              if (!m.quoted) {
                return m.reply("Send the image then tag it with the command.");
              }
              if (!/image/.test(mime)) {
                return m.reply("That is not an image, try again while quoting an actual image.");
              }
              let fdr = await client.downloadAndSaveMediaMessage(m.quoted);
              let fta = await uploadtoimgur(fdr);
              m.reply("𝗔 𝗺𝗼𝗺𝗲𝗻𝘁, 𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇 𝗶𝘀 𝗲𝗿𝗮𝘀𝗶𝗻𝗴 𝘁𝗵𝗲 𝗯𝗮𝗰𝗸𝗴𝗿𝗼𝘂𝗻𝗱. . .");
              await client.sendMessage(m.chat, {
                image: {
                  url: `https://api.dreaded.site/api/removebg?imageurl=${fta}`
                },
                caption: "𝗘𝗱𝗶𝘁𝗲𝗱 𝗯𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                quoted: m
              });
            } catch (error) {
              m.reply("An error occured...");
            }
          }
          break;

        //========================================================================================================================//		      
        case 'fact':
          {
            try {
              const data = await fetchJson('https://api.dreaded.site/api/fact');
              const fact = data.fact;
              await m.reply(fact);
            } catch (error) {
              m.reply('Something is wrong.');
            }
          }
          break;

        //========================================================================================================================//		      
        case 'catfact':
          {
            try {
              const data = await fetchJson('https://api.dreaded.site/api/catfact');
              const fact = data.fact;
              await m.reply(fact);
            } catch (error) {
              m.reply('Something is wrong.');
            }
          }
          break;

        //========================================================================================================================//		      
        case 'tts':
        case 'say':
          {
            const googleTTS = require('google-tts-api');
            if (!text) {
              return m.reply("Povide a text for conversion !");
            }
            const url = googleTTS.getAudioUrl(text, {
              lang: 'hi-IN',
              slow: false,
              host: 'https://translate.google.com'
            });
            client.sendMessage(m.chat, {
              audio: {
                url: url
              },
              mimetype: 'audio/mp4',
              ptt: true
            }, {
              quoted: m
            });
          }
          break;

        //========================================================================================================================//		      
        case "gpt":
          {
            if (!text) {
              return reply(`Hello there, what's your question?`);
            }
            let d = await fetchJson(`https://bk9.fun/ai/jeeves-chat2?q=${text}`);
            if (!d.BK9) {
              return reply("An error occurred while fetching the AI chatbot response. Please try again later.");
            } else {
              reply(d.BK9);
            }
          }
          break;

        //========================================================================================================================//		      
        case 'weather':
          {
            try {
              if (!text) {
                return m.reply("provide a city/town name");
              }
              const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=1ad47ec6172f19dfaf89eb3307f74785`);
              const data = await response.json();
              console.log("Weather data:", data);
              const cityName = data.name;
              const temperature = data.main.temp;
              const description = data.weather[0].description;
              const humidity = data.main.humidity;
              const windSpeed = data.wind.speed;
              const rainVolume = data.rain ? data.rain['1h'] : 0;
              const cloudiness = data.clouds.all;
              const sunrise = new Date(data.sys.sunrise * 1000);
              const sunset = new Date(data.sys.sunset * 1000);
              await m.reply(`❄️ Weather in ${cityName}

🌡️ Temperature: ${temperature}°C
📝 Description: ${description}
❄️ Humidity: ${humidity}%
🌀 Wind Speed: ${windSpeed} m/s
🌧️ Rain Volume (last hour): ${rainVolume} mm
☁️ Cloudiness: ${cloudiness}%
🌄 Sunrise: ${sunrise.toLocaleTimeString()}
🌅 Sunset: ${sunset.toLocaleTimeString()}`);
            } catch (e) {
              m.reply("Unable to find that location.");
            }
          }
          break;

        //========================================================================================================================//		      
        case "compile-js":
          if (!text && !m.quoted) {
            throw 'Quote/tag a Js code to compile.';
          }
          const sourcecode1 = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text;
          let resultPromise1 = node.runSource(sourcecode1);
          resultPromise1.then(resultt1 => {
            console.log(resultt1);
            reply(resultt1.stdout);
            reply(resultt1.stderr);
          }).catch(err => {
            console.log(resultt1.stderr);
            reply(resultt1.stderr);
          });
          break;

        //========================================================================================================================//		      
        case 'quotely':
          {
            try {
              if (!m.quoted.text) {
                throw 'qoute a text';
              }
              let xf = m.quoted.text;
              const {
                quote
              } = require('./lib/viniziazquotely.js');
              let pppuser = await client.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/75272825615a4dcb69526.png');
              const rel = await quote(xf, pushname, pppuser);
              client.sendImageAsSticker(m.chat, rel.result, m, {
                packname: pushname,
                author: `ViniziazBot`
              });
            } catch (errr) {
              await reply("Qoute some text for quotely");
            }
          }
          break;

        //========================================================================================================================//		      
        case "fullpp":
          {
            if (!Owner) {
              throw NotOwner;
            }
            const {
              S_WHATSAPP_NET
            } = require('@whiskeysockets/baileys');
            try {
              const fs = require("fs");
              if (!msgR) {
                m.reply('𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲...');
                return;
              }
              ;
              let media;
              if (msgR.imageMessage) {
                media = msgR.imageMessage;
              } else {
                m.reply('𝗛𝘂𝗵 𝘁𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲...');
                return;
              }
              ;
              var medis = await client.downloadAndSaveMediaMessage(media);
              var {
                img
              } = await generateProfilePicture(medis);
              client.query({
                tag: 'iq',
                attrs: {
                  target: undefined,
                  to: S_WHATSAPP_NET,
                  type: 'set',
                  xmlns: 'w:profile:picture'
                },
                content: [{
                  tag: 'picture',
                  attrs: {
                    type: 'image'
                  },
                  content: img
                }]
              });
              fs.unlinkSync(medis);
              m.reply("𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗽𝗶𝗰𝘁𝘂𝗿𝗲 𝘂𝗽𝗱𝗮𝘁𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆✅");
            } catch (error) {
              m.reply("An error occured while updating profile photo\n" + error);
            }
          }
          break;

        //========================================================================================================================//		      
        case "upload":
        case "url":
          {
            let q = m.quoted ? m.quoted : m;
            let mime = (q.msg || q).mimetype || '';
            if (!mime) {
              return m.reply('Quote an image or video');
            }
            let mediaBuffer = await q.download();
            if (mediaBuffer.length > 10485760) {
              return m.reply('Media is too large.');
            }
            let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
            if (isTele) {
              let fta2 = await client.downloadAndSaveMediaMessage(q);
              let link = await uploadtoimgur(fta2);
              m.reply(`Media Link:-\n\n${link}`);
            } else {
              m.reply(`Error occured...`);
            }
          }
          break;

        //========================================================================================================================//		      
        case 'attp':
          if (!q) {
            return reply('I need text;');
          }
          client.sendMessage(m.chat, {
            sticker: {
              url: `https://api.lolhuman.xyz/api/attp?apikey=cde5404984da80591a2692b6&text=${q}`
            }
          }, {
            quoted: m
          });
          break;

        //========================================================================================================================//		      
        case 'smeme':
          {
            if (!/image/.test(mime)) {
              return reply(`Quote an image or sticker with the 2 texts separated with |`);
            }
            if (!text) {
              return reply(`Quote an image or sticker with the 2 texts separated with |`);
            }
            atas = text.split('|')[0] ? text.split('|')[0] : '-';
            bawah = text.split('|')[1] ? text.split('|')[1] : '-';
            let dwnld = await client.downloadAndSaveMediaMessage(qmsg);
            let fatGans = await uploadtoimgur(dwnld);
            let pop = await client.sendImageAsSticker(m.chat, `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`, m, {
              packname: packname
            });
            fs.unlinkSync(pop);
          }
          break;

        //========================================================================================================================//		      
        case "compile-c":
          if (!text && !m.quoted) {
            throw 'Quote/tag a C code to compile';
          }
          const sourcecode3 = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text;
          let resultPromise3 = c.runSource(sourcecode3);
          resultPromise3.then(resultt3 => {
            console.log(resultt3);
            reply(resultt3.stdout);
            reply(resultt3.stderr);
          }).catch(err => {
            console.log(resultt3.stderr);
            reply(resultt3.stderr);
          });
          break;

        //========================================================================================================================//		      
        case "compile-c++":
          if (!text && !m.quoted) {
            throw 'Quote/tag a C++ code to compile';
          }
          const sourcecode4 = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text;
          let resultPromise4 = cpp.runSource(sourcecode4);
          resultPromise4.then(resultt4 => {
            console.log(resultt4);
            reply(resultt4.stdout);
            reply(resultt4.stderr);
          }).catch(err => {
            console.log(resultt4.stderr);
            reply(resultt4.stderr);
          });
          break;

        //========================================================================================================================//		      
        case "eval":
          {
            if (!Owner) {
              throw NotOwner;
            }
            if (!text) {
              throw 'Provide a valid Bot Baileys Function to evaluate';
            }
            try {
              let evaled = await eval(budy.slice(2));
              if (typeof evaled !== 'string') {
                evaled = require('util').inspect(evaled);
              }
              await reply(evaled);
            } catch (err) {
              await reply(String(err));
            }
          }
          break;

        //========================================================================================================================//		      
        case 'add':
          if (!text) {
            return reply("provide a number to be added in this format. \n\n add 254759925133");
          }
          if (!m.isGroup) {
            throw group;
          }
          if (!isAdmin) {
            throw admin;
          }
          if (!isBotAdmin) {
            throw botAdmin;
          }
          await client.groupParticipantsUpdate(m.chat, [text], 'add');
          reply(`succesfully added`);
          break;

        //========================================================================================================================//		      
        case "kill":
        case "kickall":
          if (!m.isGroup) {
            throw group;
          }
          if (!isBotAdmin) {
            throw "I need admin previlleges to execute this command.";
          }
          if (!Owner) {
            throw 'Only Viniziaz owner can use this command😲!';
          }
          let mokaya2 = participants.filter(_0x5202af => _0x5202af.id != client.decodeJid(client.user.id)).map(_0x3c0c18 => _0x3c0c18.id);
          m.reply("⚠️ Initializing Kick-all command💀...");
          setTimeout(() => {
            client.sendMessage(m.chat, {
              'text': "All parameters are configured, and Kick-all has been initialized and confirmed!. Now, Viniziaz will remove all " + mokaya2.length + " group participants in the next second.\n\nGoodbye Everyone! 👋\n\nTHIS PROCESS CANNOT BE TERMINATED💀!"
            }, {
              'quoted': m
            });
            setTimeout(() => {
              client.groupParticipantsUpdate(m.chat, mokaya2, "remove");
              setTimeout(() => {
                m.reply("Done✅. All group participants have been removed. Do not always use this command to avoid Wa bans!");
              }, 0x3e8);
            }, 0x3e8);
          }, 0x3e8);
          break;

        //========================================================================================================================//		      
        case "system":
          client.sendMessage(m.chat, {
            image: {
              url: 'https://i.imgur.com/YpHG3eT.jpeg'
            },
            caption: `*𝐁𝐎𝐓 𝐍𝐀𝐌𝐄: 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗*\n\n*𝐒𝐏𝐄𝐄𝐃: ${Rspeed.toFixed(4)} 𝐌𝐒*\n\n*𝐑𝐔𝐍𝐓𝐈𝐌𝐄: ${runtime(process.uptime())}*\n\n*𝐏𝐋𝐀𝐓𝐅𝐎𝐑𝐌: 𝗛𝗲𝗿𝗼𝗸𝘂*\n\n*𝐇𝐎𝐒𝐓𝐍𝐀𝐌𝐄: 𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇*\n\n*𝐋𝐈𝐁𝐑𝐀𝐑𝐘: Baileys*\n\n𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑: 𝗡𝗶𝗰𝗸༆`
          });
          break;

        //========================================================================================================================//		      
        case "vcf":
        case "group-vcf":
          {
            if (!m.isGroup) {
              return m.reply("Command meant for groups");
            }
            const fs = require("fs");
            let gcdata = await client.groupMetadata(m.chat);
            let vcard = '';
            let noPort = 0;
            for (let a of gcdata.participants) {
              vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`;
            }
            await m.reply('𝗔 𝗺𝗼𝗺𝗲𝗻𝘁, 𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇 𝗶𝘀 𝗖𝗼𝗺𝗽𝗶𝗹𝗶𝗻𝗴 ' + gcdata.participants.length + ' 𝗖𝗼𝗻𝘁𝗮𝗰𝘁𝘀 𝗶𝗻𝘁𝗼 𝗮 𝗩𝗰𝗳...');
            await fs.writeFileSync('./contacts.vcf', vcard.trim());
            await client.sendMessage(m.chat, {
              document: fs.readFileSync('./contacts.vcf'),
              mimetype: 'text/vcard',
              fileName: 'Group contacts.vcf',
              caption: 'VCF for ' + gcdata.subject + "\n" + gcdata.participants.length + ' contacts'
            }, {
              ephemeralExpiration: 86400,
              quoted: m
            });
            fs.unlinkSync('./contacts.vcf');
          }
          break;

        //========================================================================================================================//		      
        case "faker":
          if (!m.isGroup) {
            throw group;
          }
          if (!isBotAdmin) {
            throw botAdmin;
          }
          if (!isAdmin) {
            throw admin;
          }
          let fake = participants.filter(_0x227b89 => !_0x227b89.admin).map(_0x145b19 => _0x145b19.id).filter(_0x47fe0a => _0x47fe0a.startsWith('1') && _0x47fe0a != client.decodeJid(client.user.id));
          if (!args || !args[0]) {
            if (fake.length == 0) {
              return reply("No virtual numbers detected!");
            }
            m.reply("Viniziaz has detected " + fake.length + " members using +1 fake virtual WhatsApp accounts.  To remove them send faker -x");
          } else if (args[0] == '-x') {
            await client.groupParticipantsUpdate(m.chat, [fake], "remove");
            await m.reply(fake.length + " +1 fake accounts successfully removed!");
          }
          break;

        //========================================================================================================================//		      
        case "mail":
          {
            const {
              TempMail
            } = require("tempmail.lol");
            const tempmail = new TempMail();
            const inbox = await tempmail.createInbox();
            await m.reply(`${inbox.address}`);
            const mas = await client.sendMessage(m.chat, {
              text: `${inbox.token}`
            });
            await client.sendMessage(m.chat, {
              text: `Quoted text is your token. To fetch messages in your email use <.inbox your-token>`
            }, {
              quoted: mas
            });
          }
          break;

        //========================================================================================================================//		      
        case "hacker2":
          {
            if (!/image/.test(mime)) {
              return m.reply("Hello hacker 👋, quote an image, probably a clear image of yourself or a person.");
            }
            let fdr = await client.downloadAndSaveMediaMessage(qmsg);
            const fta = await uploadtoimgur(fdr);
            await UploadFileUgu();
            await client.sendMessage(m.chat, {
              image: {
                url: `https://aemt.me/hacker2?link=${fta}`
              },
              caption: "Converted by Viniziaz! 🦄"
            }, {
              quoted: m
            });
          }
          break;

        //========================================================================================================================//		      
        case "inbox":
          {
            if (!text) {
              return m.reply("To fetch messages from your mail, provide the email address which was issued.");
            }
            const mail = encodeURIComponent(text);
            try {
              const response = await fetch(`https://tempmail.apinepdev.workers.dev/api/getmessage?email=${mail}`);
              if (!response.ok) {
                return m.reply(`${response.status} error occurred while communicating with API.`);
              }
              const data = await response.json();
              if (!data || !data.messages) {
                return m.reply('I am unable to fetch messages from your mail, your inbox might be empty or some other error occurred.');
              }
              const messages = data.messages;
              for (const message of messages) {
                const sender = message.sender;
                const subject = message.subject;
                const date = new Date(JSON.parse(message.message).date).toLocaleString();
                const messageBody = JSON.parse(message.message).body;
                await m.reply(`👥 Sender: ${sender}\n📝 Subject: ${subject}\n🕜 Date: ${date}\n📩 Message: ${messageBody}`);
              }
            } catch (error) {
              console.error('𝗢𝗼𝗽𝘀 𝗘𝗿𝗿𝗼𝗿!');
              return m.reply('𝗦𝗼𝗺𝗲𝘁𝗵𝗶𝗻𝗴 𝗶𝘀 𝘄𝗿𝗼𝗻𝗴!');
            }
          }
          break;

        //========================================================================================================================//		      
        case "anime":
        case "random-anime":
          {
            const axios = require("axios");
            try {
              const response = await axios.get("https://api.jikan.moe/v4/random/anime");
              const data = response.data.data;
              const title = data.title;
              const synopsis = data.synopsis;
              const imageUrl = data.images.jpg.image_url;
              const episodes = data.episodes;
              const status = data.status;
              await client.sendMessage(m.chat, {
                image: {
                  url: imageUrl
                },
                caption: `📺 Title: ${title}\n🎬 Épisodes: ${episodes}\n📡 Status: ${status}\n📝 Synopsis: ${synopsis}\n🔗 URL: ${data.url}`
              }, {
                quoted: m
              });
            } catch (error) {
              m.reply('𝗢𝗼𝗽𝘀 𝗘𝗿𝗿𝗼𝗿!');
            }
          }
          break;

        //========================================================================================================================//		      
        case "news":
          {
            const response = await fetch('https://fantox001-scrappy-api.vercel.app/technews/random');
            const data = await response.json();
            const {
              thumbnail,
              news
            } = data;
            await client.sendMessage(m.chat, {
              image: {
                url: thumbnail
              },
              caption: news
            }, {
              quoted: m
            });
          }
          break;

        //========================================================================================================================//		      
        case 'approve':
        case 'approve-all':
          {
            if (!m.isGroup) {
              throw group;
            }
            if (!isAdmin) {
              throw admin;
            }
            if (!isBotAdmin) {
              throw botAdmin;
            }
            const responseList = await client.groupRequestParticipantsList(m.chat);
            if (responseList.length === 0) {
              return m.reply("𝗛𝘂𝗵, 𝗡𝗼 𝗣𝗲𝗻𝗱𝗶𝗻𝗴 𝗷𝗼𝗶𝗻 𝗿𝗲𝗾𝘂𝗲𝘀𝘁𝘀 𝘁𝗵𝗶𝘀 𝘁𝗶𝗺𝗲!");
            }
            for (const participan of responseList) {
              const response = await client.groupRequestParticipantsUpdate(m.chat, [participan.jid],
              // Approve/reject each participant individually
              "approve" // or "reject"
              );
              console.log(response);
            }
            m.reply("𝗣𝗲𝗻𝗱𝗶𝗻𝗴 𝗣𝗮𝗿𝘁𝗶𝗰𝗶𝗽𝗮𝗻𝘁𝘀 𝗵𝗮𝘃𝗲 𝗯𝗲𝗲𝗻 𝗮𝗽𝗽𝗿𝗼𝘃𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆✅");
          }
          break;

        //========================================================================================================================//		      
        case 'reject':
        case 'reject-all':
          {
            if (!m.isGroup) {
              throw group;
            }
            if (!isAdmin) {
              throw admin;
            }
            if (!isBotAdmin) {
              throw botAdmin;
            }
            const responseList = await client.groupRequestParticipantsList(m.chat);
            if (responseList.length === 0) {
              return m.reply("𝗛𝘂𝗵, 𝗡𝗼 𝗽𝗲𝗻𝗱𝗶𝗻𝗴 𝗷𝗼𝗶𝗻 𝗿𝗲𝗾𝘂𝗲𝘀𝘁𝘀 𝘁𝗵𝗶𝘀 𝘁𝗶𝗺𝗲");
            }
            for (const participan of responseList) {
              const response = await client.groupRequestParticipantsUpdate(m.chat, [participan.jid],
              // Approve/reject each participant individually
              "reject" // or "reject"
              );
              console.log(response);
            }
            m.reply("𝗣𝗲𝗻𝗱𝗶𝗻𝗴 𝗣𝗮𝗿𝘁𝗶𝗰𝗶𝗽𝗮𝗻𝘁𝘀 𝗵𝗮𝘃𝗲 𝗯𝗲𝗲𝗻 𝗿𝗲𝗷𝗲𝗰𝘁𝗲𝗱!");
          }
          break;

        //========================================================================================================================//		      
        case "admin":
          {
            if (!m.isGroup) {
              throw group;
            }
            if (!isBotAdmin) {
              throw botAdmin;
            }
            if (!Owner) {
              throw NotOwner;
            }
            await client.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
            m.reply('Promoted To Admin<🥇');
          }
          break;

        //========================================================================================================================//		      
        case "getvar":
          if (!Owner) {
            throw NotOwner;
          }
          const heroku = new Heroku({
            token: herokuapi // Replace 'heroku' with your actual Heroku token 
          });
          let baseUR = "/apps/" + appname;
          let h9 = await heroku.get(baseUR + '/config-vars');
          let stoy = "*𝗕𝗲𝗹𝗼𝘄 𝗔𝗿𝗲 𝗛𝗲𝗿𝗼𝗸𝘂 𝗩𝗮𝗿𝗶𝗮𝗯𝗹𝗲𝘀 𝗙𝗼𝗿 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗠𝗗:*\n\n";
          for (vrt in h9) {
            // Added 'const' to declare 'vr' 
            stoy += vrt + '=' + h9[vrt] + "\n\n"; // Fixed variable name 'str' to 'sto' 
          }
          reply(stoy);
          break;

        //========================================================================================================================//		      
        case 'restart':
          if (!Owner) {
            throw NotOwner;
          }
          reply(`Restarting. . .`);
          await sleep(3000);
          process.exit();
          break;

        //========================================================================================================================//		      
        case "remove":
        case "kick":
          {
            if (!m.isGroup) {
              throw group;
            }
            if (!isBotAdmin) {
              throw botAdmin;
            }
            if (!isAdmin) {
              throw admin;
            }
            if (!m.quoted && (!m.mentionedJid || m.mentionedJid.length === 0)) {
              return m.reply("Who should i remove !?");
            }
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : null;
            const parts = users.split('@')[0];
            if (users == "254759925133@s.whatsapp.net") {
              return m.reply("It's an Owner Number! 😡");
            }
            if (users == client.decodeJid(client.user.id)) {
              throw 'I cannot remove Myself 😡';
            }
            m.reply(`@${parts} Goodbye🤧`);
            await client.groupParticipantsUpdate(m.chat, [users], 'remove');
          }
          break;

        //========================================================================================================================//		      
        case "instagram":
        case "igdl":
        case "ig":
          {
            const {
              igdl
            } = require("ruhend-scraper");
            if (!text) {
              return m.reply("Please provide an Instagram link for the video.");
            }
            if (!text.includes('https://www.instagram.com/')) {
              return m.reply("That is not a valid Instagram link.");
            }
            try {
              const downloadData = await igdl(text);
              if (!downloadData || !downloadData.data || downloadData.data.length === 0) {
                return m.reply("No video found at the provided link.");
              }
              const videoData = downloadData.data;
              for (let i = 0; i < Math.min(20, videoData.length); i++) {
                const video = videoData[i];
                const videoUrl = video.url;
                await client.sendMessage(m.chat, {
                  video: {
                    url: videoUrl
                  },
                  mimetype: "video/mp4",
                  caption: `DOWNLOADED BY ${botname}`
                }, {
                  quoted: m
                });
              }
            } catch (error) {
              console.error(error);
              return m.reply("An error occurred while processing the request.");
            }
          }
          break;

        //========================================================================================================================//
        case "twitter":
        case "twtdl":
          {
            if (!text) {
              return m.reply("𝗽𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝘁𝘄𝗶𝘁𝘁𝗲𝗿 𝗹𝗶𝗻𝗸 !");
            }
            try {
              const data = await fetchJson(`https://api.dreaded.site/api/alldl?url=${text}`);
              if (!data || data.status !== 200 || !data.data || !data.data.videoUrl) {
                return m.reply("𝗦𝗼𝗿𝗿𝘆 𝘁𝗵𝗲 𝗔𝗣𝗜 𝗱𝗶𝗱𝗻'𝘁 𝗿𝗲𝘀𝗽𝗼𝗻𝗱 𝗰𝗼𝗿𝗿𝗲𝗰𝘁𝗹𝘆. 𝗣𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗔𝗴𝗮𝗶𝗻 𝗹𝗮𝘁𝗲𝗿!");
              }
              const twtvid = data.data.videoUrl;
              await client.sendMessage(m.chat, {
                video: {
                  url: twtvid
                },
                caption: `𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗`,
                gifPlayback: false
              }, {
                quoted: m
              });
            } catch (e) {
              m.reply("An error occured. API might be down\n" + e);
            }
          }
          break;

        //========================================================================================================================//		      
        case "facebook":
        case "fb":
        case "fbdl":
          {
            if (!text) {
              return m.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗹𝗶𝗻𝗸 !");
            }
            if (!text.includes("facebook.com")) {
              return m.reply("That is not a facebook link.");
            }
            try {
              let data = await fetchJson(`https://api.dreaded.site/api/facebook?url=${text}`);
              if (!data || data.status !== 200 || !data.facebook || !data.facebook.sdVideo) {
                return m.reply("𝗦𝗼𝗿𝗿𝘆 𝘁𝗵𝗲 𝗔𝗣𝗜 𝗱𝗶𝗱𝗻'𝘁 𝗿𝗲𝘀𝗽𝗼𝗻𝗱 𝗰𝗼𝗿𝗿𝗲𝗰𝘁𝗹𝘆. 𝗣𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗔𝗴𝗮𝗶𝗻 𝗹𝗮𝘁𝗲𝗿!");
              }
              const fbvid = data.facebook.sdVideo;
              if (!fbvid) {
                return m.reply("Wrong facebook data. Please ensure the video exists.");
              }
              await client.sendMessage(m.chat, {
                video: {
                  url: fbvid
                },
                caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗",
                gifPlayback: false
              }, {
                quoted: m
              });
            } catch (e) {
              console.error("Error occurred:", e);
              m.reply("An error occurred. API might be down. Error: " + e.message);
            }
          }
          break;

        //========================================================================================================================//		      
        case "tiktok":
        case "tikdl":
          {
            if (!text) {
              return m.reply('Please provide a TikTok video link.');
            }
            try {
              const response = await axios.get(`https://bk9.fun/download/tiktok?url=${encodeURIComponent(text)}`);
              if (response.data.status && response.data.BK9) {
                const videoUrl = response.data.BK9.BK9;
                await client.sendMessage(m.chat, {
                  text: `Data fetched successfully✅ wait a moment. . .`
                }, {
                  quoted: m
                });
                await client.sendMessage(m.chat, {
                  video: {
                    url: videoUrl
                  },
                  caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗",
                  gifPlayback: false
                }, {
                  quoted: m
                });
              } else {
                reply('Failed to retrieve video from the provided link.');
              }
            } catch (e) {
              reply(`An error occurred during download: ${e.message}`);
            }
          }
          break;

        //========================================================================================================================//		      
        case "song":
          {
            const yts = require("yt-search");
            try {
              if (!text) {
                return m.reply("What song do you want to download?");
              }
              const {
                videos
              } = await yts(text);
              if (!videos || videos.length === 0) {
                return m.reply("No songs found!");
              }
              await m.reply(`_Please wait your download is in progress_`);
              const urlYt = videos[0].url;
              let data = await fetchJson(`https://api.dreaded.site/api/ytdl/audio?url=${urlYt}`);
              if (!data || !data.result || !data.result.url) {
                return m.reply("Failed to fetch audio from the API.");
              }
              const audioUrl = data.result.url;
              const title = data.result.title;
              await client.sendMessage(m.chat, {
                audio: {
                  url: audioUrl
                },
                mimetype: "audio/mpeg",
                fileName: `${title}.mp3`
              }, {
                quoted: m
              });
            } catch (error) {
              m.reply("Download failed\n" + error.message);
            }
          }
          break;

        //========================================================================================================================//		      
        case 'sc':
        case 'script':
        case 'repo':
          client.sendMessage(m.chat, {
            image: {
              url: `https://telegra.ph/file/416c3ae0cfe59be8db011.jpg`
            },
            caption: ` Hello👋 *${pushname}*,You can deploy 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 using the GitHub link below 𓅂\n\nFork and give us a star✨.\n\n https://github.com/Viniznimco/VINIZIAZ-XMD\n\nLink with your whatsapp using pairing link below\n\nhttps://christ-bot.onrender.com\n\nCopy the session_id and Fill in the required Variables before Deploy\n\nEnjoy and have fun with ░𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭 𝗫𝗠𝗗░\n\n𝗠𝗮𝗱𝗲 𝗼𝗻 𝗲𝗮𝗿𝘁𝗵 𝗯𝘆 𝗛𝘂𝗺𝗮𝗻𝘀!`
          }, {
            quoted: m
          });
          break;

        //========================================================================================================================//
        case 'closetime':
          if (!m.isGroup) {
            throw group;
          }
          if (!isAdmin) {
            throw admin;
          }
          if (!isBotAdmin) {
            throw botAdmin;
          }
          if (args[1] == 'second') {
            var timer = args[0] * `1000`;
          } else if (args[1] == 'minute') {
            var timer = args[0] * `60000`;
          } else if (args[1] == 'hour') {
            var timer = args[0] * `3600000`;
          } else if (args[1] == 'day') {
            var timer = args[0] * `86400000`;
          } else {
            return reply("*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second");
          }
          reply(`Countdown of  ${q} starting from now to close the group`);
          setTimeout(() => {
            client.groupSettingUpdate(m.chat, 'announcement');
            reply(`𝗚𝗿𝗼𝘂𝗽 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗰𝗹𝗼𝘀𝗲𝗱`);
          }, timer);
          break;

        //========================================================================================================================//		      
        case 'opentime':
          if (!m.isGroup) {
            throw group;
          }
          if (!isAdmin) {
            throw admin;
          }
          if (!isBotAdmin) {
            throw botAdmin;
          }
          if (args[1] == 'second') {
            var timer = args[0] * `1000`;
          } else if (args[1] == 'minute') {
            var timer = args[0] * `60000`;
          } else if (args[1] == 'hour') {
            var timer = args[0] * `3600000`;
          } else if (args[1] == 'day') {
            var timer = args[0] * `86400000`;
          } else {
            return reply("*select:*\nsecond\nminute\nhour\n\n*example*\n10 second");
          }
          reply(`Countdown of ${q} starting from now to open the group`);
          setTimeout(() => {
            client.groupSettingUpdate(m.chat, 'not_announcement');
            reply(`𝗚𝗿𝗼𝘂𝗽 𝗼𝗽𝗲𝗻𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆`);
          }, timer);
          break;

        //========================================================================================================================//		      
        case "close":
        case "mute":
          {
            if (!m.isGroup) {
              throw group;
            }
            if (!isBotAdmin) {
              throw botAdmin;
            }
            if (!isAdmin) {
              throw admin;
            }
            await client.groupSettingUpdate(m.chat, 'announcement');
            m.reply('Group successfully locked!');
          }
          break;

        //========================================================================================================================//		      
        case "open":
        case "unmute":
          {
            if (!m.isGroup) {
              throw group;
            }
            if (!isBotAdmin) {
              throw botAdmin;
            }
            if (!isAdmin) {
              throw admin;
            }
            await client.groupSettingUpdate(m.chat, 'not_announcement');
            m.reply('Group successfully unlocked!');
          }
          break;

        //========================================================================================================================//		      
        case "disp-1":
          {
            if (!m.isGroup) {
              throw group;
            }
            if (!isBotAdmin) {
              throw botAdmin;
            }
            if (!isAdmin) {
              throw admin;
            }
            await client.groupToggleEphemeral(m.chat, 86400);
            m.reply('Dissapearing messages successfully turned on for 24hrs!');
          }
          break;

        //========================================================================================================================//		      
        case "promote":
          {
            if (!m.isGroup) {
              throw group;
            }
            if (!isBotAdmin) {
              throw botAdmin;
            }
            if (!isAdmin) {
              throw admin;
            }
            if (!m.quoted) {
              throw `Ttag someone with the command!`;
            }
            let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'];
            await client.groupParticipantsUpdate(m.chat, users, 'promote');
            m.reply('Successfully promoted! 🦄');
          }
          break;

        //========================================================================================================================//		      
        case "demote":
          {
            if (!m.isGroup) {
              throw group;
            }
            if (!isBotAdmin) {
              throw botAdmin;
            }
            if (!isAdmin) {
              throw admin;
            }
            if (!m.quoted) {
              throw `Ttag someone with the command!`;
            }
            let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'];
            await client.groupParticipantsUpdate(m.chat, users, 'demote');
            m.reply('Successfully demoted! 😲');
          }
          break;

        //========================================================================================================================//		      
        case "disp-7":
          {
            if (!m.isGroup) {
              throw group;
            }
            if (!isBotAdmin) {
              throw botAdmin;
            }
            if (!isAdmin) {
              throw admin;
            }
            await client.groupToggleEphemeral(m.chat, 604800);
            m.reply('Dissapearing messages successfully turned on for 7 days!');
          }
          break;

        //========================================================================================================================//		      
        case "disp-90":
          {
            if (!m.isGroup) {
              throw group;
            }
            if (!isBotAdmin) {
              throw botAdmin;
            }
            if (!isAdmin) {
              throw admin;
            }
            await client.groupToggleEphemeral(m.chat, 7776000);
            m.reply('Dissapearing messages successfully turned on for 90 days!');
          }
          break;

        //========================================================================================================================//		      
        case "disp-off":
          {
            if (!m.isGroup) {
              throw group;
            }
            if (!isBotAdmin) {
              throw botAdmin;
            }
            if (!isAdmin) {
              throw admin;
            }
            await client.groupToggleEphemeral(m.chat, 0);
            m.reply('Dissapearing messages successfully turned off!');
          }
          break;

        //========================================================================================================================//		      
        case "icon":
          {
            if (!m.isGroup) {
              throw group;
            }
            if (!isAdmin) {
              throw admin;
            }
            if (!isBotAdmin) {
              throw botAdmin;
            }
            if (!quoted) {
              throw `Send or tag an image with the caption ${prefix + command}`;
            }
            if (!/image/.test(mime)) {
              throw `Send or tag an image with the caption ${prefix + command}`;
            }
            if (/webp/.test(mime)) {
              throw `Send or tag an image with the caption ${prefix + command}`;
            }
            let media = await client.downloadAndSaveMediaMessage(quoted);
            await client.updateProfilePicture(m.chat, {
              url: media
            }).catch(err => fs.unlinkSync(media));
            reply('Group icon updated');
          }
          break;

        //========================================================================================================================//		      
        case "revoke":
        case "newlink":
        case "reset":
          {
            if (!m.isGroup) {
              throw group;
            } // add "new Error" to create a new Error object 
            if (!isAdmin) {
              throw admin;
            } // add "new Error" to create a new Error object 
            if (!isBotAdmin) {
              throw botAdmin;
            } // add "new Error" to create a new Error object 
            await client.groupRevokeInvite(m.chat);
            await client.sendText(m.chat, 'Group link revoked!', m); // use "client.sendText" instead of "m.reply" to ensure message is sent 
            let response = await client.groupInviteCode(m.chat);
            client.sendText(m.sender, `https://chat.whatsapp.com/${response}\n\nHere is the new group link for ${groupMetadata.subject}`, m, {
              detectLink: true
            });
            client.sendText(m.chat, `Sent you the new group link in your inbox!`, m);
            // use "client.sendTextWithMentions" instead of "client.sendText" to include group name in message 
          }
          break;

        //========================================================================================================================//		      
        case "delete":
        case "del":
          {
            if (!m.isGroup) {
              throw group;
            }
            if (!isBotAdmin) {
              throw botAdmin;
            }
            if (!isAdmin) {
              throw admin;
            }
            if (!m.quoted) {
              throw `No message quoted for deletion`;
            }
            let {
              chat,
              fromMe,
              id,
              isBaileys
            } = m.quoted;
            if (isBaileys) {
              throw `I cannot delete. Quoted message is my message or another bot message.`;
            }
            client.sendMessage(m.chat, {
              delete: {
                remoteJid: m.chat,
                fromMe: false,
                id: m.quoted.id,
                participant: m.quoted.sender
              }
            });
          }
          break;

        //========================================================================================================================//		      
        case "leave":
          {
            if (!Owner) {
              throw NotOwner;
            }
            if (!m.isGroup) {
              throw group;
            }
            await client.sendMessage(m.chat, {
              text: '𝗚𝗼𝗼𝗱𝗯𝘆𝗲 𝗲𝘃𝗲𝗿𝘆𝗼𝗻𝗲👋. 𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇-𝗔𝗶 𝗶𝘀 𝗟𝗲𝗮𝘃𝗶𝗻𝗴 𝘁𝗵𝗲 𝗚𝗿𝗼𝘂𝗽 𝗻𝗼𝘄...',
              mentions: participants.map(a => a.id)
            }, {
              quoted: m
            });
            await client.groupLeave(m.chat);
          }
          break;

        //========================================================================================================================//		      
        case "subject":
        case "changesubject":
          {
            if (!m.isGroup) {
              throw group;
            }
            if (!isBotAdmin) {
              throw botAdmin;
            }
            if (!isAdmin) {
              throw admin;
            }
            if (!text) {
              throw 'Provide the text for the group subject.';
            }
            await client.groupUpdateSubject(m.chat, text);
            m.reply('Group name successfully updated! 💀');
          }
          break;

        //========================================================================================================================//		      
        case "desc":
        case "setdesc":
          {
            if (!m.isGroup) {
              throw group;
            }
            if (!isBotAdmin) {
              throw botAdmin;
            }
            if (!isAdmin) {
              throw admin;
            }
            if (!text) {
              throw 'Provide the text for the group description';
            }
            await client.groupUpdateDescription(m.chat, text);
            m.reply('Group description successfully updated! 🥶');
          }
          break;

        //========================================================================================================================//		      
        case "hidetag":
        case "tag":
          {
            if (!m.isGroup) {
              throw group;
            }
            if (!isBotAdmin) {
              throw botAdmin;
            }
            if (!isAdmin) {
              throw admin;
            }
            client.sendMessage(m.chat, {
              text: q ? q : '😅𝗕𝗹𝗶𝗻𝗱 𝗧𝗮𝗴𝘀😅',
              mentions: participants.map(a => a.id)
            }, {
              quoted: m
            });
          }
          break;

        //========================================================================================================================//		      
        case "tagall":
          {
            if (!m.isGroup) {
              throw group;
            }
            if (!isBotAdmin) {
              throw botAdmin;
            }
            if (!isAdmin) {
              throw admin;
            }
            let teks = `𝗢𝗻𝗹𝘆 𝗳𝗼𝗼𝗹𝘀 𝗮𝗿𝗲 𝘁𝗮𝗴𝗴𝗲𝗱 𝗵𝗲𝗿𝗲😅: 
   
  Message ${q ? q : ''}*\n\n`;
            for (let mem of participants) {
              teks += `𓅂 @${mem.id.split('@')[0]}\n`;
            }
            client.sendMessage(m.chat, {
              text: teks,
              mentions: participants.map(a => a.id)
            }, {
              quoted: m
            });
          }
          break;

        //========================================================================================================================//		      
        case "whatsong":
        case "shazam":
          let acr = new acrcloud({
            'host': "identify-eu-west-1.acrcloud.com",
            'access_key': '2631ab98e77b49509e3edcf493757300',
            'access_secret': "KKbVWlTNCL3JjxjrWnywMdvQGanyhKRN0fpQxyUo"
          });
          if (!m.quoted) {
            throw "Tag a short video or audio";
          }
          let d = m.quoted ? m.quoted : m;
          let mimes = (d.msg || d).mimetype || d.mediaType || '';
          if (/video|audio/.test(mimes)) {
            let buffer = await d.download();
            await reply("Analyzing the media...");
            let {
              status,
              metadata
            } = await acr.identify(buffer);
            if (status.code !== 0x0) {
              throw status.msg;
            }
            let {
              title,
              artists,
              album,
              genres,
              release_date
            } = metadata.music[0x0];
            let txt = "*• Title:* " + title + (artists ? "\n*• Artists:* " + artists.map(_0x4f5d59 => _0x4f5d59.name).join(", ") : '');
            txt += '' + (album ? "\n*• Album:* " + album.name : '') + (genres ? "\n*• Genres:* " + genres.map(_0xf7bf2e => _0xf7bf2e.name).join(", ") : '') + "\n";
            txt += "*• Release Date:* " + release_date;
            await client.sendMessage(m.chat, {
              'text': txt.trim()
            }, {
              'quoted': m
            });
            const {
              videos
            } = await yts(title);
            if (!videos || videos.length <= 0x0) {
              reply("No Matching videos found for : *" + args[0x0] + "*!!");
              return;
            }
            let urlYt1 = videos[0x0].url;
            let infoYt1 = await ytdl.getInfo(urlYt1);
            if (infoYt1.videoDetails.lengthSeconds >= 0x708) {
              reply("Too big!");
              return;
            }
            let titleYt1 = infoYt1.videoDetails.title;
            let randomNam = '' + Math.floor(Math.random() * 0x2710) + '.mp3';
            const stream = ytdl(urlYt1, {
              'filter': _0x5ac95f => _0x5ac95f.audioBitrate == 0xa0 || _0x5ac95f.audioBitrate == 0x80
            }).pipe(fs.createWriteStream('./' + randomNam));
            console.log("Audio downloading ->", urlYt1);
            await new Promise((_0x1cc1a5, _0x4efba3) => {
              stream.on("error", _0x4efba3);
              stream.on("finish", _0x1cc1a5);
            });
            let stats = fs.statSync('./' + randomNam);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / 1048576;
            console.log("Audio downloaded ! \n Size: " + fileSizeInMegabytes);
            if (fileSizeInMegabytes <= 0x28) {
              await client.sendMessage(from, {
                'document': fs.readFileSync('./' + randomNam),
                'mimetype': "audio/mpeg",
                'fileName': titleYt1 + ".mp3"
              }, {
                'quoted': m
              });
            } else {
              reply("File size bigger.");
            }
            fs.unlinkSync('./' + randomNam);
          }
          break;

        //========================================================================================================================//
        case "s":
        case "sticker":
          {
            const {
              Sticker,
              createSticker,
              StickerTypes
            } = require('wa-sticker-formatter');
            if (!msgR) {
              m.reply('Quote an image or a short video.');
              return;
            }
            ;
            let media;
            if (msgR.imageMessage) {
              media = msgR.imageMessage;
            } else if (msgR.videoMessage) {
              media = msgR.videoMessage;
            } else {
              m.reply('That is neither an image nor a short video! ');
              return;
            }
            ;
            var result = await client.downloadAndSaveMediaMessage(media);
            let stickerResult = new Sticker(result, {
              pack: packname,
              author: author,
              type: StickerTypes.FULL,
              categories: ["🤩", "🎉"],
              id: "12345",
              quality: 70,
              background: "transparent"
            });
            const Buffer = await stickerResult.toBuffer();
            client.sendMessage(m.chat, {
              sticker: Buffer
            }, {
              quoted: m
            });
          }
          break;

        //========================================================================================================================//		      
        case "dp":
          {
            try {
              ha = m.quoted.sender;
              qd = await client.getName(ha);
              pp2 = await client.profilePictureUrl(ha, 'image');
            } catch {
              pp2 = 'https://tinyurl.com/yx93l6da';
            }
            if (!m.quoted) {
              throw `Tag a user!`;
            }
            bar = `Profile Picture of ${qd}`;
            client.sendMessage(m.chat, {
              image: {
                url: pp2
              },
              caption: bar,
              fileLength: "999999999999"
            }, {
              quoted: m
            });
          }
          break;

        //========================================================================================================================//		      
        case "list":
        case "vars":
        case "help":
          reply(`𝟏 Owner➣ 𝐆𝐞𝐭 𝐍𝐢𝐜𝐤_𝐇𝐮𝐧𝐭𝐞𝐫  𝐜𝐨𝐧𝐭𝐚𝐜𝐭\n\n𝟐 𝐁𝐫𝐨𝐚𝐝𝐜𝐚𝐬𝐭➣ 𝐒𝐞𝐧𝐝𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐭𝐨 𝐚𝐥𝐥 𝐠𝐫𝐨𝐮𝐩𝐬\n\n𝟑 𝐉𝐨𝐢𝐧➣ 𝐭𝐚𝐠 𝐠𝐫𝐨𝐮𝐩 𝐥𝐢𝐧𝐤 𝐰𝐢𝐭𝐡 𝐣𝐨𝐢𝐧\n\n𝟒 𝐛𝐨𝐭𝐩𝐩➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐛𝐨𝐭𝐬 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐝𝐩\n\n𝟓 𝐁𝐥𝐨𝐜𝐤➣ 𝐁𝐥𝐨𝐜𝐤 𝐭𝐡𝐞𝐦 𝐟𝐚𝐤𝐞 𝐟𝐫𝐢𝐞𝐧𝐝𝐬\n\n𝟔 𝐊𝐢𝐥𝐥➣ 𝐊𝐢𝐥𝐥𝐬 𝐠𝐫𝐨𝐮𝐩 𝐢𝐧 𝐬𝐞𝐜𝐨𝐧𝐝𝐬\n\n𝟕 𝐔𝐧𝐛𝐥𝐨𝐜𝐤➣ 𝐆𝐢𝐯𝐞 𝐭𝐡𝐞𝐦 𝐟𝐚𝐤𝐞 𝐟𝐫𝐢𝐞𝐧𝐝𝐬 𝐚 𝐬𝐞𝐜𝐨𝐧𝐝 𝐜𝐡𝐚𝐧𝐜𝐞\n\n𝟖 𝐒𝐞𝐭𝐯𝐚𝐫➣ 𝐒𝐞𝐭 𝐯𝐚𝐫𝐬 𝐢𝐧 𝐡𝐞𝐫𝐨𝐤𝐮\n\n𝟗 𝐒𝐭𝐢𝐜𝐤𝐞𝐫➣ 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐚 𝐩𝐡𝐨𝐭𝐨 𝐨𝐫 𝐚 𝐬𝐡𝐨𝐫𝐭 𝐯𝐢𝐝𝐞𝐨 𝐭𝐨 𝐚 𝐬𝐭𝐢𝐜𝐤𝐞𝐫\n\n𝟏𝟎 𝐓𝐨𝐢𝐦𝐠➣ 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐚 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐭𝐨 𝐚 𝐩𝐡𝐨𝐭𝐨\n\n𝟏𝟏 𝐏𝐥𝐚𝐲➣ 𝐆𝐞𝐭 𝐲𝐨𝐮𝐫 𝐟𝐚𝐯𝐨𝐫𝐢𝐭𝐞 𝐬𝐨𝐧𝐠\n\n𝟏𝟐 𝐖𝐡𝐚𝐭𝐬𝐨𝐧𝐠➣ 𝐠𝐞𝐭 𝐭𝐡𝐞 𝐭𝐢𝐭𝐥𝐞 𝐨𝐟 𝐭𝐡𝐞 𝐬𝐨𝐧𝐠\n\n𝟏𝟑 𝐘𝐭𝐬 ➣ 𝐆𝐞𝐭 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐯𝐢𝐝𝐞𝐨𝐬\n\n𝟏𝟒 𝐌𝐨𝐯𝐢𝐞➣ 𝐆𝐞𝐭 𝐲𝐨𝐮𝐫 𝐟𝐚𝐯𝐨𝐫𝐢𝐭𝐞 𝐦𝐨𝐯𝐢𝐞 𝐝𝐞𝐭𝐚𝐢𝐥𝐬\n\n𝟏𝟓 𝐌𝐢𝐱➣ 𝐂𝐨𝐦𝐛𝐢𝐧𝐞𝐬 +𝟐𝐞𝐦𝐨𝐣𝐢𝐬\n\n𝟏𝟔 𝐀𝐢-𝐢𝐦𝐠➣ 𝐆𝐞𝐭 𝐚𝐧 𝐀𝐢 𝐩𝐡𝐨𝐭𝐨\n\n𝟏𝟕 𝐆𝐩𝐭 ➣ 𝐇𝐞𝐫𝐞 𝐭𝐨 𝐚𝐧𝐬𝐰𝐞𝐫 𝐲𝐨𝐮𝐫 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧𝐬\n\n𝟏𝟖 𝐃𝐩➣ 𝐆𝐞𝐭𝐬 𝐚 𝐩𝐞𝐫𝐬𝐨𝐧 𝐝𝐩\n\n𝟏𝟗 𝐒𝐩𝐞𝐞𝐝 ➣ 𝐂𝐡𝐞𝐜𝐤𝐬 𝐛𝐨𝐭𝐬 𝐬𝐩𝐞𝐞𝐝\n\n𝟐𝟎 𝐀𝐥𝐢𝐯𝐞➣ 𝐂𝐡𝐞𝐜𝐤 𝐰𝐡𝐞𝐭𝐡𝐞𝐫 𝐭𝐡𝐞 𝐛𝐨𝐭 𝐢𝐬 𝐬𝐭𝐢𝐥𝐥 𝐤𝐢𝐜𝐤𝐢𝐧𝐠\n\n𝟐𝟏 𝐑𝐮𝐧𝐭𝐢𝐦𝐞➣ 𝐖𝐡𝐞𝐧 𝐝𝐢𝐝 𝐛𝐨𝐭 𝐬𝐭𝐚𝐫𝐭𝐞𝐝 𝐨𝐩𝐞𝐫𝐚𝐭𝐢𝐧𝐠\n\n𝟐𝟐 𝐒𝐜𝐫𝐢𝐩𝐭➣ 𝐆𝐞𝐭 𝐛𝐨𝐭 𝐬𝐜𝐫𝐢𝐩𝐭\n\n𝟐𝟑 𝐎𝐰𝐧𝐞𝐫  ➣ 𝐆𝐞𝐭 𝐨𝐰𝐧𝐞𝐫(𝐬) 𝐜𝐨𝐧𝐭𝐚𝐜𝐭\n\n𝟐𝟒 𝐕𝐚𝐫𝐬 ➣ 𝐒𝐞𝐞 𝐚𝐥𝐥 𝐯𝐚𝐫𝐢𝐚𝐛𝐥𝐞𝐬\n\n𝟐𝟓 𝐏𝐫𝐨𝐦𝐨𝐭𝐞➣ 𝐆𝐢𝐯𝐞𝐬 𝐨𝐧𝐞 𝐚𝐝𝐦𝐢𝐧 𝐫𝐨𝐥𝐞\n\n𝟐𝟔 𝐃𝐞𝐦𝐨𝐭𝐞➣ 𝐃𝐞𝐦𝐨𝐭𝐞𝐬 𝐟𝐫𝐨𝐦 𝐠𝐫𝐨𝐮𝐩 𝐚𝐝𝐦𝐢𝐧 𝐭𝐨 𝐚 𝐦𝐞𝐦𝐛𝐞𝐫\n\n𝟐𝟕 𝐃𝐞𝐥𝐞𝐭𝐞➣ 𝐃𝐞𝐥𝐞𝐭𝐞 𝐚 𝐦𝐞𝐬𝐬𝐚𝐠𝐞\n\n𝟐𝟖 𝐑𝐞𝐦𝐨𝐯𝐞/𝐤𝐢𝐜𝐤➣ 𝐊𝐢𝐜𝐤 𝐭𝐡𝐚𝐭 𝐭𝐞𝐫𝐫𝐨𝐫𝐢𝐬𝐭 𝐟𝐫𝐨𝐦 𝐚 𝐠𝐫𝐨𝐮𝐩\n\n𝟐𝟗 𝐅𝐨𝐫𝐞𝐢𝐠𝐧𝐞𝐫𝐬➣ 𝐆𝐞𝐭 𝐟𝐨𝐫𝐞𝐢𝐠𝐧 𝐧𝐮𝐦𝐛𝐞𝐫𝐬\n\n𝟑𝟎 𝐂𝐥𝐨𝐬𝐞➣ 𝐓𝐢𝐦𝐞 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞𝐦𝐛𝐞𝐫𝐬 𝐭𝐨 𝐭𝐚𝐤𝐞 𝐚 𝐛𝐫𝐞𝐚𝐤 𝐨𝐧𝐥𝐲 𝐚𝐝𝐦𝐢𝐧𝐬 𝐜𝐚𝐧 𝐜𝐡𝐚𝐭\n\n𝟑𝟏 𝐎𝐩𝐞𝐧 ➣ 𝐄𝐯𝐞𝐫𝐲𝐨𝐧𝐞 𝐜𝐚𝐧 𝐜𝐡𝐚𝐭 𝐢𝐧 𝐚 𝐠𝐫𝐨𝐮𝐩\n\n𝟑𝟐 𝐈𝐜𝐨𝐧➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐢𝐜𝐨𝐧\n\n𝟑𝟑 𝐒𝐮𝐛𝐣𝐞𝐜𝐭➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐬𝐮𝐛𝐣𝐞𝐜𝐭\n\n𝟑𝟒 𝐃𝐞𝐬𝐜➣ 𝐆𝐞𝐭 𝐠𝐫𝐨𝐮𝐩 𝐝𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧\n\n𝟑𝟓 𝐋𝐞𝐚𝐯𝐞➣ 𝐓𝐡𝐞 𝐠𝐫𝐨𝐮𝐩 𝐢𝐬 𝐛𝐨𝐫𝐢𝐧𝐠 ,𝐭𝐢𝐦𝐞 𝐟𝐨𝐫 𝐛𝐨𝐭 𝐭𝐨 𝐥𝐞𝐚𝐯𝐞\n\n𝟑𝟔 𝐓𝐚𝐠𝐚𝐥𝐥 ➣ 𝐓𝐚𝐠 𝐞𝐯𝐞𝐫𝐲𝐨𝐧𝐞 𝐢𝐧 𝐚 𝐠𝐫𝐨𝐮𝐩 𝐜𝐡𝐚𝐭\n\n𝟑𝟕 𝐇𝐢𝐝𝐞𝐭𝐚𝐠➣ 𝐀𝐭𝐭𝐞𝐧𝐭𝐢𝐨𝐧! 𝐀𝐭𝐭𝐞𝐧𝐭𝐢𝐨𝐧! 𝐬𝐨𝐦𝐞𝐨𝐧𝐞 𝐡𝐚𝐬 𝐬𝐨𝐦𝐞𝐭𝐡𝐢𝐧𝐠 𝐭𝐨 𝐬𝐚𝐲\n\n𝟑𝟖 𝐑𝐞𝐯𝐨𝐤𝐞 ➣ 𝐑𝐞𝐬𝐞𝐭 𝐠𝐫𝐨𝐮𝐩 𝐥𝐢𝐧𝐤`);
          break;

        //========================================================================================================================//		      
        case "vv":
        case "retrieve":
          {
            if (!m.quoted) {
              return m.reply("quote a viewonce message eh");
            }
            const quotedMessage = m.msg?.contextInfo?.quotedMessage;
            if (quotedMessage.imageMessage) {
              let imageCaption = quotedMessage.imageMessage.caption;
              let imageUrl = await client.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
              client.sendMessage(m.chat, {
                image: {
                  url: imageUrl
                },
                caption: `Retrieved by Viniziaz!\n${imageCaption}`
              }, {
                quoted: m
              });
            }
            if (quotedMessage.videoMessage) {
              let videoCaption = quotedMessage.videoMessage.caption;
              let videoUrl = await client.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
              client.sendMessage(m.chat, {
                video: {
                  url: videoUrl
                },
                caption: `Retrieved by Viniziaz!\n${videoCaption}`
              }, {
                quoted: m
              });
            }
          }
          break;

        //========================================================================================================================//		      
        case "vv2":
        case "mmmh":
          {
            if (!m.quoted) {
              return m.reply("quote a viewonce message eh");
            }
            const quotedMessage = m.msg?.contextInfo?.quotedMessage;
            if (quotedMessage.imageMessage) {
              let imageCaption = quotedMessage.imageMessage.caption;
              let imageUrl = await client.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
              client.sendMessage(client.user.id, {
                image: {
                  url: imageUrl
                },
                caption: `Retrieved by Viniziaz!\n${imageCaption}`
              }, {
                quoted: m
              });
            }
            if (quotedMessage.videoMessage) {
              let videoCaption = quotedMessage.videoMessage.caption;
              let videoUrl = await client.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
              client.sendMessage(client.user.id, {
                video: {
                  url: videoUrl
                },
                caption: `Retrieved by Viniziaz!\n${videoCaption}`
              }, {
                quoted: m
              });
            }
          }
          break;

        //========================================================================================================================//		      
        case 'take':
          {
            const {
              Sticker,
              createSticker,
              StickerTypes
            } = require('wa-sticker-formatter');
            if (!msgR) {
              m.reply('Quote an image, a short video or a sticker to change watermark.');
              return;
            }
            ;
            let media;
            if (msgR.imageMessage) {
              media = msgR.imageMessage;
            } else if (msgR.videoMessage) {
              media = msgR.videoMessage;
            } else if (msgR.stickerMessage) {
              media = msgR.stickerMessage;
            } else {
              m.reply('This is neither a sticker, image nor a video...');
              return;
            }
            ;
            var result = await client.downloadAndSaveMediaMessage(media);
            let stickerResult = new Sticker(result, {
              pack: pushname,
              author: pushname,
              type: StickerTypes.FULL,
              categories: ["🤩", "🎉"],
              id: "12345",
              quality: 70,
              background: "transparent"
            });
            const Buffer = await stickerResult.toBuffer();
            client.sendMessage(m.chat, {
              sticker: Buffer
            }, {
              quoted: m
            });
          }
          break;

        //========================================================================================================================//	  
        case 'ytsearch':
        case 'yts':
          {
            if (!text) {
              reply("Provide a search term!E.g: Alan walker alone");
              return;
            }
            const {
              videos
            } = await yts(text);
            if (!videos || videos.length <= 0) {
              reply(`No Matching videos found for : *${text}*!!`);
              return;
            }
            const length = videos.length < 10 ? videos.length : 10;
            let tex = `YouTube Search\n🔍 Query ~> ${text}\n\n`;
            for (let i = 0; i < length; i++) {
              tex += `Link ~> ${videos[i].url}\nChannel ~> ${videos[i].author.name}\nTitle ~> ${videos[i].title}\n\n`;
            }
            reply(tex);
            return;
          }
          break;

        //========================================================================================================================//		      
        case "ytmp3":
        case "yta":
          {
            try {
              if (!text) {
                return m.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗹𝗶𝗻𝗸!");
              }
              let urls = text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
              if (!urls) {
                return m.reply('𝗧𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗟𝗶𝗻𝗸');
              }
              let urlIndex = parseInt(text) - 1;
              if (urlIndex < 0 || urlIndex >= urls.length) {
                return m.reply('𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗟𝗶𝗻𝗸.');
              }
              const {
                videos
              } = await yts(text);
              if (!videos || videos.length === 0) {
                return m.reply("No songs found!");
              }
              const urlYt = videos[0].url;
              let data = await fetchJson(`https://api.dreaded.site/api/ytdl/audio?url=${urlYt}`);
              if (!data || !data.result || !data.result.url) {
                return m.reply("Failed to fetch audio from the API.");
              }
              const audioUrl = data.result.url;
              const title = data.result.title;
              await client.sendMessage(m.chat, {
                audio: {
                  url: audioUrl
                },
                mimetype: "audio/mpeg",
                fileName: `${title}.mp3`
              }, {
                quoted: m
              });
            } catch (error) {
              m.reply("Download failed\n" + error.message);
            }
          }
          break;

        //========================================================================================================================//		      
        case 'ytmp4':
        case "ytv":
          {
            try {
              if (!text) {
                return m.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 𝗹𝗶𝗻𝗸!");
              }
              let urls = text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
              if (!urls) {
                return m.reply('𝗧𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 𝗹𝗶𝗻𝗸');
              }
              let urlIndex = parseInt(text) - 1;
              if (urlIndex < 0 || urlIndex >= urls.length) {
                return m.reply('𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗹𝗶𝗻𝗸.');
              }
              const {
                videos
              } = await yts(text);
              if (!videos || videos.length === 0) {
                return m.reply("No songs found!");
              }
              const urlYt = videos[0].url;
              let data = await fetchJson(`https://api.dreaded.site/api/ytdl/video?url=${urlYt}`);
              if (!data || !data.result || !data.result.url) {
                return m.reply("Failed to fetch video from the API.");
              }
              const audioUrl = data.result.url;
              const title = data.result.title;
              await client.sendMessage(m.chat, {
                video: {
                  url: audioUrl
                },
                mimetype: "video/mpeg",
                fileName: `${title}.mp4`
              }, {
                quoted: m
              });
            } catch (error) {
              m.reply("Download failed\n" + error.message);
            }
          }
          break;

        //========================================================================================================================//		      
        case "ping":
        case "speed":
          {
            await loading();
            m.reply(`𝗣𝗼𝗻𝗴\n ${Rspeed.toFixed(4)} 𝗠𝘀`);
          }
          break;

        //========================================================================================================================//		      
        case "uptime":
          {
            m.reply(`${runtime(process.uptime())}`);
          }
          break;

        //========================================================================================================================//		      
        case 'runtime':
          client.sendMessage(m.chat, {
            text: `𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗿𝘂𝗻𝗻𝗶𝗻𝗴 𝘀𝗶𝗻𝗰𝗲 ${runtime(process.uptime())}`,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: '𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗',
                body: 'https://chat.whatsapp.com/FRDtAailExp6hKbQgbLBnP',
                thumbnailUrl: 'https://i.imgur.com/YpHG3eT.jpeg',
                sourceUrl: 'https://chat.whatsapp.com/FRDtAailExp6hKbQgbLBnP',
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
          }, {
            quoted: m
          });
          break;

        //========================================================================================================================//		      
        case "apk":
        case "app":
          {
            if (!text) {
              return reply("Where is the app name?");
            }
            let kyuu = await fetchJson(`https://bk9.fun/search/apk?q=${text}`);
            let tylor = await fetchJson(`https://bk9.fun/download/apk?id=${kyuu.BK9[0].id}`);
            await client.sendMessage(m.chat, {
              document: {
                url: tylor.BK9.dllink
              },
              fileName: tylor.BK9.name,
              mimetype: "application/vnd.android.package-archive",
              contextInfo: {
                externalAdReply: {
                  title: `VINIZIAZ-XMD`,
                  body: `${tylor.BK9.name}`,
                  thumbnailUrl: `${tylor.BK9.icon}`,
                  sourceUrl: `${tylor.BK9.dllink}`,
                  mediaType: 2,
                  showAdAttribution: true,
                  renderLargerThumbnail: false
                }
              }
            }, {
              quoted: m
            });
          }
          break;

        //========================================================================================================================//		      
        case "mix":
          {
            const {
              Sticker,
              createSticker,
              StickerTypes
            } = require('wa-sticker-formatter');
            if (!text) {
              return m.reply("No emojis provided ? ");
            }
            const emojis = text.split('+');
            if (emojis.length !== 2) {
              m.reply("Specify the emojis and separate with '+'");
              return;
            }
            const emoji1 = emojis[0].trim();
            const emoji2 = emojis[1].trim();
            try {
              const axios = require('axios');
              const response = await axios.get(`https://levanter.onrender.com/emix?q=${emoji1}${emoji2}`);
              if (response.data.status === true) {
                let stickerMess = new Sticker(response.data.result, {
                  pack: botname,
                  type: StickerTypes.CROPPED,
                  categories: ["🤩", "🎉"],
                  id: "12345",
                  quality: 70,
                  background: "transparent"
                });
                const stickerBuffer2 = await stickerMess.toBuffer();
                client.sendMessage(m.chat, {
                  sticker: stickerBuffer2
                }, {
                  quoted: m
                });
              } else {
                m.reply("Unable to create emoji mix.");
              }
            } catch (error) {
              m.reply("An error occurred while creating the emoji mix." + error);
            }
          }
          break;

        //========================================================================================================================//		      
        case "lyrics":
          {
            const fetch = require('node-fetch');
            try {
              if (!text) {
                return m.reply("Provide a song name!");
              }
              const data = await fetchJson(`https://api.dreaded.site/api/lyrics?title=${encodeURIComponent(text)}`);
              if (!data.success || !data.result || !data.result.lyrics) {
                return m.reply(`Sorry, I couldn't find any lyrics for "${text}".`);
              }
              const {
                title,
                artist,
                link,
                thumb,
                lyrics
              } = data.result;
              const imageUrl = thumb || "https://i.imgur.com/Cgte666.jpeg";
              const imageBuffer = await fetch(imageUrl).then(res => res.buffer()).catch(err => {
                console.error('Error fetching image:', err);
                return null;
              });
              if (!imageBuffer) {
                return m.reply("An error occurred while fetching the image.");
              }
              await client.sendMessage(m.chat, {
                image: imageBuffer,
                caption: `**Title**: ${title}\n**Artist**: ${artist}\n\n${lyrics}`
              }, {
                quoted: m
              });
            } catch (error) {
              console.error(error);
              m.reply(`An error occurred while fetching the lyrics for "${text}".`);
            }
          }
          break;

        //========================================================================================================================//		      
        case "toimage":
        case "photo":
          {
            if (!quoted) {
              throw 'Tag a static video with the command!';
            }
            if (!/webp/.test(mime)) {
              throw `Tag a sticker with ${prefix + command}`;
            }
            let media = await client.downloadAndSaveMediaMessage(quoted);
            let mokaya = await getRandom('.png');
            exec(`ffmpeg -i ${media} ${mokaya}`, err => {
              fs.unlinkSync(media);
              if (err) {
                throw err;
              }
              let buffer = fs.readFileSync(mokaya);
              client.sendMessage(m.chat, {
                image: buffer,
                caption: `𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗲𝗱 𝗯𝘆 𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇-𝗫𝗺𝗱`
              }, {
                quoted: m
              });
              fs.unlinkSync(mokaya);
            });
          }
          break;

        //========================================================================================================================//		      
        case "movie":
          if (!text) {
            return reply(`Provide a series or movie name.`);
          }
          let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`);
          let imdbt = "";
          console.log(fids.data);
          imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n ``` IMDB MOVIE SEARCH```\n⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";
          imdbt += "🎬Title      : " + fids.data.Title + "\n";
          imdbt += "📅Year       : " + fids.data.Year + "\n";
          imdbt += "⭐Rated      : " + fids.data.Rated + "\n";
          imdbt += "📆Released   : " + fids.data.Released + "\n";
          imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n";
          imdbt += "🌀Genre      : " + fids.data.Genre + "\n";
          imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n";
          imdbt += "✍Writer     : " + fids.data.Writer + "\n";
          imdbt += "👨Actors     : " + fids.data.Actors + "\n";
          imdbt += "📃Plot       : " + fids.data.Plot + "\n";
          imdbt += "🌐Language   : " + fids.data.Language + "\n";
          imdbt += "🌍Country    : " + fids.data.Country + "\n";
          imdbt += "🎖️Awards     : " + fids.data.Awards + "\n";
          imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n";
          imdbt += "🏙️Production : " + fids.data.Production + "\n";
          imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n";
          imdbt += "❎imdbVotes  : " + fids.data.imdbVotes + "";
          client.sendMessage(from, {
            image: {
              url: fids.data.Poster
            },
            caption: imdbt
          }, {
            quoted: m
          });
          break;

        //========================================================================================================================//                                   
        case "linkgroup":
        case "link":
          {
            if (!m.isGroup) {
              throw group;
            }
            if (!isBotAdmin) {
              throw botAdmin;
            }
            let response = await client.groupInviteCode(m.chat);
            client.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup link for  ${groupMetadata.subject}`, m, {
              detectLink: true
            });
          }
          break;

        //========================================================================================================================//
        case 'botpp':
          {
            if (!Owner) {
              throw NotOwner;
            }
            if (!quoted) {
              throw `Tag an image you want to be the bot's profile picture with ${prefix + command}`;
            }
            if (!/image/.test(mime)) {
              throw `Tag an image you want to be the bot's profile picture with ${prefix + command}`;
            }
            if (/webp/.test(mime)) {
              throw `Tag an image you want to be the bot's profile picture with ${prefix + command}`;
            }
            let media = await client.downloadAndSaveMediaMessage(quoted);
            await client.updateProfilePicture(botNumber, {
              url: media
            }).catch(err => fs.unlinkSync(media));
            reply`Bot's profile picture has been successfully updated!`;
          }
          break;

        //========================================================================================================================//		      
        case 'broadcast':
          {
            if (!Owner) {
              throw NotOwner;
              return;
            }
            if (!text) {
              reply("❌ No broadcast message provided!");
              return;
            }
            let getGroups = await client.groupFetchAllParticipating();
            let groups = Object.entries(getGroups).slice(0).map(entry => entry[1]);
            let res = groups.map(v => v.id);
            reply(` Broadcasting in ${res.length} Group Chat, in ${res.length * 1.5} seconds`);
            for (let i of res) {
              await client.sendMessage(i, {
                image: {
                  url: "https://telegra.ph/file/416c3ae0cfe59be8db011.jpg"
                },
                caption: `${`𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗕𝗥𝗢𝗔𝗗𝗖𝗔𝗦𝗧 >\n\n🀄 Message: ${text}\n\nAuthor: ${pushname}`}`
              });
            }
            reply(`Broadcasted to ${res.length} Groups.`);
          }
          break;

        //========================================================================================================================//		      
        case "gemini":
          {
            try {
              if (!text) {
                return m.reply("This is Viniziaz, an AI using Gemini APIs to process text, provide yr query");
              }
              const {
                default: Gemini
              } = await import('gemini-ai');
              const gemini = new Gemini("AIzaSyDJUtskTG-MvQdlT4tNE319zBqLMFei8nQ");
              const chat = gemini.createChat();
              const res = await chat.ask(text);
              await m.reply(res);
            } catch (e) {
              m.reply("I am unable to generate responses\n\n" + e);
            }
          }
          break;

        //========================================================================================================================//		      
        case "setvar":
          if (!Owner) {
            throw NotOwner;
          }
          if (!text.split('=')[1]) {
            return reply("Incorrect Usage:\nProvide the key and value correctly\nExample: setvar AUTOVIEW_STATUS=TRUE");
          }
          const herok = new Heroku({
            token: herokuapi
          });
          let baseURI = "/apps/" + appname;
          await herok.patch(baseURI + "/config-vars", {
            body: {
              [text.split('=')[0]]: text.split('=')[1]
            }
          });
          await reply(`✅ The variable ${text.split('=')[0]} = ${text.split('=')[1]} has been set Successfuly.\nWait 20s for changes to effect!`);
          break;

        //========================================================================================================================//	
        case "dlt":
        case "dil":
          {
            if (!m.quoted) {
              throw `No message quoted for deletion`;
            }
            let {
              chat,
              fromMe,
              id,
              isBaileys
            } = m.quoted;
            if (isBaileys) {
              throw `I cannot delete. Quoted message is my message or another bot message.`;
            }
            client.sendMessage(m.chat, {
              delete: {
                remoteJid: m.chat,
                fromMe: true,
                id: m.quoted.id,
                participant: m.quoted.sender
              }
            });
          }
          break;

        //========================================================================================================================//
        case "block":
          {
            if (!Owner) {
              throw NotOwner;
            }
            if (!m.quoted) {
              throw `𝗧𝗮𝗴 𝘀𝗼𝗺𝗲𝗼𝗻𝗲!`;
            }
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
            if (users == "254759925133@s.whatsapp.net") {
              return m.reply("𝗜 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗹𝗼𝗰𝗸 𝗺𝘆 𝗢𝘄𝗻𝗲𝗿 😡");
            }
            if (users == client.decodeJid(client.user.id)) {
              throw '𝗜 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗹𝗼𝗰𝗸 𝗺𝘆𝘀𝗲𝗹𝗳 𝗶𝗱𝗶𝗼𝘁 😡';
            }
            await client.updateBlockStatus(users, 'block');
            m.reply(`𝗕𝗹𝗼𝗰𝗸𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆!`);
          }
          break;

        //========================================================================================================================//		      
        case "unblock":
          {
            if (!Owner) {
              throw NotOwner;
            }
            if (!m.quoted) {
              throw `𝗧𝗮𝗴 𝘀𝗼𝗺𝗲𝗼𝗻𝗲!`;
            }
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
            await client.updateBlockStatus(users, 'unblock');
            m.reply(`𝗨𝗻𝗯𝗹𝗼𝗰𝗸𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆✅!`);
          }
          break;

        //========================================================================================================================//		      
        case 'join':
          {
            if (!Owner) {
              throw NotOwner;
            }
            if (!text) {
              return reply("provide a valid group link");
            }
            let result = args[0].split('https://chat.whatsapp.com/')[1];
            await client.groupAcceptInvite(result).then(res => reply(jsonformat(res))).catch(err => reply(`Link has problem.`));
          }
          break;

        //========================================================================================================================//		      
        case "enc":
        case "encrypte":
          {
            const Obf = require("javascript-obfuscator");

            // Check if the quoted message has text
            if (m.quoted && m.quoted.text) {
              const forq = m.quoted.text;

              // Obfuscate the JavaScript code
              const obfuscationResult = Obf.obfuscate(forq, {
                compact: true,
                controlFlowFlattening: true,
                controlFlowFlatteningThreshold: 1,
                numbersToExpressions: true,
                simplify: true,
                stringArrayShuffle: true,
                splitStrings: true,
                stringArrayThreshold: 1
              });
              console.log("Successfully encrypted the code");
              m.reply(obfuscationResult.getObfuscatedCode());
            } else {
              m.reply("Quote/Tag a valid JavaScript code to encrypt!");
            }
          }
          break;

        //========================================================================================================================//		      
        case 'gpt3':
          {
            if (!text) {
              return reply(`Hello there, How can i help you?`);
            }
            let d = await fetchJson(`https://bk9.fun/ai/blackbox?q=${text}`);
            if (!d.BK9) {
              return reply("An error occurred while fetching the AI chatbot response. Please try again later.");
            } else {
              reply(d.BK9);
            }
          }
          break;

        //========================================================================================================================//		      
        case 'gcprofile':
          {
            function convertTimestamp(timestamp) {
              const d = new Date(timestamp * 1000);
              const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
              return {
                date: d.getDate(),
                month: new Intl.DateTimeFormat('en-US', {
                  month: 'long'
                }).format(d),
                year: d.getFullYear(),
                day: daysOfWeek[d.getUTCDay()],
                time: `${d.getUTCHours()}:${d.getUTCMinutes()}:${d.getUTCSeconds()}`
              };
            }
            if (!m.isGroup) {
              return m.reply("This command is meant for groups");
            }
            let info = await client.groupMetadata(m.chat);
            let ts = await convertTimestamp(info.creation);
            try {
              pp = await client.profilePictureUrl(chat, 'image');
            } catch {
              pp = 'https://i.imgur.com/l6rYr1f.jpeg';
            }
            await client.sendMessage(m.chat, {
              image: {
                url: pp
              },
              caption: `_Name_ : *${info.subject}*\n\n_ID_ : *${info.id}*\n\n_Group owner_ : ${'@' + info.owner.split('@')[0]} || 'No Creator'\n\n_Group created_ : *${ts.day}, ${ts.date} ${ts.month} ${ts.year}, ${ts.time}*\n\n_Participants_ : *${info.size}*\n_Members_ : *${info.participants.filter(p => p.admin == null).length}*\n\n_Admins_ : *${Number(info.participants.length - info.participants.filter(p => p.admin == null).length)}*\n\n_Who can send message_ : *${info.announce == true ? 'Admins' : 'Everyone'}*\n\n_Who can edit group info_ : *${info.restrict == true ? 'Admins' : 'Everyone'}*\n\n_Who can add participants_ : *${info.memberAddMode == true ? 'Everyone' : 'Admins'}*`
            }, {
              quoted: m
            });
          }
          break;

        //========================================================================================================================//		      
        case 'tovideo':
        case 'mp4':
        case 'tovid':
          {
            if (!quoted) {
              return reply('Reply to Sticker');
            }
            if (!/webp/.test(mime)) {
              return reply(`reply sticker with caption *${prefix + command}*`);
            }
            let webp2mp4File = await fetch(`https://bk9.fun/converter/webpToMp4?url=${quoted}`);
            let media = await client.downloadAndSaveMediaMessage(quoted);
            let webpToMp4 = await webp2mp4File(media);
            await client.sendMessage(m.chat, {
              video: {
                url: webpToMp4.result,
                caption: 'Convert Webp To Video'
              }
            }, {
              quoted: m
            });
            await fs.unlinkSync(media);
          }
          break;
        //========================================================================================================================//
        //========================================================================================================================//        
        default:
          {
            if (cmd && budy.toLowerCase() != undefined) {
              if (m.chat.endsWith("broadcast")) {
                return;
              }
              if (m.isBaileys) {
                return;
              }
              if (!budy.toLowerCase()) {
                return;
              }
              if (argsLog || cmd && !m.isGroup) {
                // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
                console.log(chalk.black(chalk.bgRed("[ ERROR ]")), chalk.keyword("turquoise")("command"), chalk.keyword("turquoise")(`${prefix}${command}`), chalk.keyword("turquoise")("Viniziaz"));
              } else if (argsLog || cmd && m.isGroup) {
                // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
                console.log(chalk.black(chalk.bgRed("[ ERROR ]")), chalk.keyword("turquoise")("command"), chalk.keyword("turquoise")(`${prefix}${command}`), chalk.keyword("turquoise")("Viniziaz"));
              }
            }
          }
      }
    }
  } catch (err) {
    m.reply(util.format(err));
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
