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
const path = require("path");
const util = require("util");
global.axios = require("axios")["default"];
const chalk = require("chalk");
const speed = require("performance-now");
const Genius = require("genius-lyrics");
const yts = require("yt-search");
const {
  DateTime
} = require("luxon");
const uploadtoimgur = require("./lib/imgur");
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
} = require("./lib/viniziazfunc");
const {
  exec,
  spawn,
  execSync
} = require("child_process");
module.exports = viniziaz = async (_0x318ec6, _0x1d8ddf, _0x6b72d5, _0x20e1cd) => {
  try {
    var _0x435c84 = _0x1d8ddf.mtype === "conversation" ? _0x1d8ddf.message.conversation : _0x1d8ddf.mtype == "imageMessage" ? _0x1d8ddf.message.imageMessage.caption : _0x1d8ddf.mtype == "videoMessage" ? _0x1d8ddf.message.videoMessage.caption : _0x1d8ddf.mtype == 'extendedTextMessage' ? _0x1d8ddf.message.extendedTextMessage.text : _0x1d8ddf.mtype == 'buttonsResponseMessage' ? _0x1d8ddf.message.buttonsResponseMessage.selectedButtonId : _0x1d8ddf.mtype == "listResponseMessage" ? _0x1d8ddf.message.listResponseMessage.singleSelectReply.selectedRowId : _0x1d8ddf.mtype == 'templateButtonReplyMessage' ? _0x1d8ddf.message.templateButtonReplyMessage.selectedId : _0x1d8ddf.mtype === "messageContextInfo" ? _0x1d8ddf.message.buttonsResponseMessage?.["selectedButtonId"] || _0x1d8ddf.message.listResponseMessage?.["singleSelectReply"]["selectedRowId"] || _0x1d8ddf.text : '';
    var _0x51c6c4 = typeof _0x1d8ddf.text == 'string' ? _0x1d8ddf.text : '';
    var _0x3c8de7 = _0x1d8ddf.message.extendedTextMessage?.["contextInfo"]?.["quotedMessage"];
    const _0x2167f9 = require("heroku-client");
    const _0x2b2e26 = _0x435c84.replace(prefix, '').trim().split(/ +/).shift().toLowerCase();
    const _0xacd495 = _0x435c84.trim().split(/ +/).slice(0x1);
    const _0x215155 = _0x1d8ddf.pushName || "No Name";
    const _0x320154 = await _0x318ec6.decodeJid(_0x318ec6.user.id);
    const _0x1eb885 = !!(_0x1d8ddf.sender == _0x320154);
    let _0x5280ae = q = _0xacd495.join(" ");
    _0x1d8ddf.isBaileys = _0x1d8ddf.id.startsWith('BAE5') && _0x1d8ddf.id.length === 0x10;
    const _0x4cef7b = _0x1d8ddf.chat;
    const _0x87f3c4 = _0x1d8ddf.reply;
    const _0x1bf0e2 = _0x1d8ddf.sender;
    const _0xc0f863 = _0x6b72d5.messages[0x0];
    const _0xcce3f7 = _0x4cc224 => {
      let _0x3927d0 = [];
      for (let _0xdedb05 of _0x4cc224) {
        if (_0xdedb05.admin === "superadmin") {
          _0x3927d0.push(_0xdedb05.id);
        } else if (_0xdedb05.admin === "admin") {
          _0x3927d0.push(_0xdedb05.id);
        } else {
          '';
        }
      }
      return _0x3927d0 || [];
    };
    const _0x22b8b7 = _0x1d8ddf.quoted || _0x1d8ddf;
    const _0x58ce36 = _0x22b8b7.mtype == "buttonsMessage" ? _0x22b8b7[Object.keys(_0x22b8b7)[0x1]] : _0x22b8b7.mtype == 'templateMessage' ? _0x22b8b7.hydratedTemplate[Object.keys(_0x22b8b7.hydratedTemplate)[0x1]] : _0x22b8b7.mtype == "product" ? _0x22b8b7[Object.keys(_0x22b8b7)[0x0]] : _0x1d8ddf.quoted ? _0x1d8ddf.quoted : _0x1d8ddf;
    const _0x1dad43 = (_0x58ce36.msg || _0x58ce36).mimetype || '';
    const _0x3bea32 = _0x58ce36.msg || _0x58ce36;
    const _0x1494bd = _0x435c84.startsWith(prefix);
    const _0x19fc94 = bad.split(',');
    const _0x3cd2e7 = DevViniziaz.map(_0x5e57c3 => _0x5e57c3.replace(/[^0-9]/g, '') + "@s.whatsapp.net").includes(_0x1d8ddf.sender);
    const _0x537f06 = _0x1d8ddf.isGroup ? await _0x318ec6.groupMetadata(_0x1d8ddf.chat)["catch"](_0x574321 => {}) : '';
    const _0x1ead2a = _0x1d8ddf.isGroup && _0x537f06 ? await _0x537f06.subject : '';
    const _0x211808 = _0x1d8ddf.isGroup && _0x537f06 ? await _0x537f06.participants : '';
    const _0x3a8583 = _0x1d8ddf.isGroup ? await _0xcce3f7(_0x211808) : '';
    const _0x1b0633 = _0x1d8ddf.isGroup ? _0x3a8583.includes(_0x320154) : false;
    const _0x5a0801 = _0x1d8ddf.isGroup ? _0x3a8583.includes(_0x1d8ddf.sender) : false;
    const _0x263eb1 = "254704009677".split(',');
    const _0x51c21c = new Date();
    const _0x5d9258 = speed();
    const _0x146cfe = speed() - _0x5d9258;
    if (!fs.existsSync('message_data')) {
      fs.mkdirSync('message_data');
    }
    function _0xfe6f17(_0x143355, _0x36dbe7) {
      const _0x1d7a51 = path.join('message_data', _0x143355, _0x36dbe7 + '.json');
      try {
        const _0xf1133d = fs.readFileSync(_0x1d7a51, "utf8");
        return JSON.parse(_0xf1133d) || [];
      } catch (_0xeb7584) {
        return [];
      }
    }
    function _0x1b1b3a(_0xe4ed9d, _0x191c9a, _0x54fc41) {
      const _0xd466b1 = path.join('message_data', _0xe4ed9d);
      if (!fs.existsSync(_0xd466b1)) {
        fs.mkdirSync(_0xd466b1, {
          'recursive': true
        });
      }
      const _0x366b9d = path.join(_0xd466b1, _0x191c9a + ".json");
      try {
        fs.writeFileSync(_0x366b9d, JSON.stringify(_0x54fc41, null, 0x2));
      } catch (_0x54cb0d) {
        console.error("Error saving chat data:", _0x54cb0d);
      }
    }
    function _0x4fc5bd(_0x5a1e36) {
      const _0x53c033 = _0x5a1e36.key.remoteJid;
      const _0x91fcce = _0x5a1e36.key.id;
      const _0x446e7b = _0xfe6f17(_0x53c033, _0x91fcce);
      _0x446e7b.push(_0x5a1e36);
      _0x1b1b3a(_0x53c033, _0x91fcce, _0x446e7b);
    }
    async function _0x5dbe8c(_0x5827a7, _0x30df5e) {
      const _0x113029 = _0x30df5e.key.remoteJid;
      const _0x4d7320 = _0x30df5e.message.protocolMessage.key.id;
      const _0x18b9da = _0xfe6f17(_0x113029, _0x4d7320);
      const _0x3820b9 = _0x18b9da[0x0];
      if (_0x3820b9) {
        const _0x40fc2b = _0x30df5e.participant || _0x30df5e.key.participant || _0x30df5e.key.remoteJid;
        const _0x58c1fa = _0x3820b9.key.participant || _0x3820b9.key.remoteJid;
        const _0x2f4207 = '@' + _0x40fc2b.split('@')[0x0];
        if (_0x40fc2b.includes(_0x5827a7.user.id) || _0x58c1fa.includes(_0x5827a7.user.id)) {
          return;
        }
        let _0x28717e = "░𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗔𝗡𝗧𝗜𝗗𝗘𝗟𝗘𝗧𝗘 𝗥𝗘𝗣𝗢𝗥𝗧░\n\n" + (" 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗯𝘆: " + _0x2f4207 + "\n\n");
        if (_0x3820b9.message?.["conversation"]) {
          const _0x4c1122 = _0x3820b9.message.conversation;
          _0x28717e += " 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗠𝗲𝘀𝘀𝗮𝗴𝗲: " + _0x4c1122;
          await _0x5827a7.sendMessage(_0x5827a7.user.id, {
            'text': _0x28717e
          }, {
            'quoted': _0x1d8ddf
          });
        } else {
          if (_0x3820b9.message?.["extendedTextMessage"]) {
            const _0xfee04 = _0x3820b9.message.extendedTextMessage.text;
            _0x28717e += " 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗖𝗼𝗻𝘁𝗲𝗻𝘁: " + _0xfee04;
            await _0x5827a7.sendMessage(_0x5827a7.user.id, {
              'text': _0x28717e
            }, {
              'quoted': _0x1d8ddf
            });
          }
        }
      }
    }
    let _0x3573be = _0x51c6c4.length > 0x1e ? q.substring(0x0, 0x1e) + "..." : _0x51c6c4;
    const _0x273487 = _0xc0f863.key.remoteJid;
    if (wapresence === 'online') {
      _0x318ec6.sendPresenceUpdate('available', _0x273487);
    } else {
      if (wapresence === 'typing') {
        _0x318ec6.sendPresenceUpdate("composing", _0x273487);
      } else if (wapresence === "recording") {
        _0x318ec6.sendPresenceUpdate('recording', _0x273487);
      } else {
        _0x318ec6.sendPresenceUpdate("unavailable", _0x273487);
      }
    }
    if (_0x1494bd && mode === 'PRIVATE' && !_0x1eb885 && !_0x3cd2e7 && _0x1d8ddf.sender !== dev) {
      return;
    }
    if (autoread === "TRUE" && !_0x1d8ddf.isGroup) {
      _0x318ec6.readMessages([_0x1d8ddf.key]);
    }
    if (_0x1eb885 && _0xc0f863.key.id.startsWith("BAE5") && _0xc0f863.key.id.length === 0x10 && !_0x1d8ddf.isGroup) {
      return;
    }
    if (antidel === "TRUE") {
      if (_0xc0f863.message?.["protocolMessage"]?.['key']) {
        await _0x5dbe8c(_0x318ec6, _0xc0f863);
      } else {
        _0x4fc5bd(_0xc0f863);
      }
    }
    _0x318ec6.sendContact = async (_0x1ddf76, _0xba63f8, _0x3f1f9e = '', _0x512b31 = {}) => {
      let _0x528205 = [];
      for (let _0x24315e of _0xba63f8) {
        _0x528205.push({
          'displayName': "VINIZIAZ DEV",
          'vcard': "BEGIN:VCARD\nVERSION:3.0\nN: RAVINIZIAZ DEV\nFN:VINIZIAZ DEV\nitem1.TEL;waid=" + _0x24315e + ':' + _0x24315e + "\nitem1.X-ABLabel:Number\nitem2.EMAIL;type=INTERNET:dicksonnicky50@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/nick_hunter9\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Kenya;;;;\nitem4.X-ABLabel:Region\nEND:VCARD"
        });
      }
      _0x318ec6.sendMessage(_0x1ddf76, {
        'contacts': {
          'displayName': "VINIZIAZ DEV",
          'contacts': _0x528205
        },
        ..._0x512b31
      }, {
        'quoted': _0x3f1f9e
      });
    };
    if (antibot === "TRUE" && _0xc0f863.key.id.startsWith("BAE5") && _0x1d8ddf.isGroup && !_0x5a0801 && _0x1b0633 && _0xc0f863.key.id.length === 16) {
      kidts = _0x1d8ddf.sender;
      _0x318ec6.sendMessage(_0x1d8ddf.chat, {
        'text': "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 antibot:\n\n@" + kidts.split('@')[0] + " has been identified as a bot. Removed by RAVEN to prevent unnecessary spam!",
        'contextInfo': {
          'mentionedJid': [kidts]
        }
      }, {
        'quoted': _0x1d8ddf
      });
      await _0x318ec6.groupParticipantsUpdate(_0x1d8ddf.chat, [kidts], "remove");
    }
    if (_0x51c6c4.startsWith('>')) {
      if (!_0x3cd2e7) {
        return _0x87f3c4("Only owner can evaluate bailey codes");
      }
      try {
        let _0x124234 = await eval(_0x51c6c4.slice(0x2));
        if (typeof _0x124234 !== "string") {
          _0x124234 = require('util').inspect(_0x124234);
        }
        await _0x87f3c4(_0x124234);
      } catch (_0x1cf2a6) {
        await _0x87f3c4(String(_0x1cf2a6));
      }
    }
    async function _0x5f3f83() {}
    if (gptdm === 'TRUE' && _0x1d8ddf.chat.endsWith("@s.whatsapp.net")) {
      let _0x2aee81 = await fetchJson("https://bk9.fun/ai/llama?q=" + _0x5280ae);
      if (!_0x2aee81.BK9) {
        return _0x87f3c4("An error occurred while fetching the AI chatbot response. Please try again later.");
      } else {
        _0x87f3c4(_0x2aee81.BK9);
      }
    }
    if (antitag === "TRUE" && !_0x3cd2e7 && _0x1b0633 && !_0x5a0801 && _0x1d8ddf.mentionedJid && _0x1d8ddf.mentionedJid.length > 0xa) {
      if (_0x1eb885) {
        return;
      }
      const _0x2850af = _0x1d8ddf.sender;
      await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
        'text': '@' + _0x2850af.split('@')[0x0] + ", Antitag is Active🔨",
        'contextInfo': {
          'mentionedJid': [_0x2850af]
        }
      }, {
        'quoted': _0x1d8ddf
      });
      await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
        'delete': {
          'remoteJid': _0x1d8ddf.chat,
          'fromMe': false,
          'id': _0x1d8ddf.key.id,
          'participant': _0x2850af
        }
      });
      await _0x318ec6.groupParticipantsUpdate(_0x1d8ddf.chat, [_0x2850af], 'remove');
    }
    async function _0x49317b() {
      var _0x5d82fc = ['💓', '❤️', '🧡', '💚', "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗽𝗲𝗲𝗱𝗧𝗲𝘀𝘁 𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗲!"];
      let {
        key: _0x135669
      } = await _0x318ec6.sendMessage(_0x4cef7b, {
        'text': "🅿🅾🅽🅶"
      });
      for (let _0x5c8405 = 0x0; _0x5c8405 < _0x5d82fc.length; _0x5c8405++) {
        await _0x318ec6.sendMessage(_0x4cef7b, {
          'text': _0x5d82fc[_0x5c8405],
          'edit': _0x135669
        });
      }
    }
    const _0x16ab89 = () => {
      const _0x20e00d = DateTime.now().setZone("Africa/Nairobi").hour;
      if (_0x20e00d >= 0x5 && _0x20e00d < 0xc) {
        return "𝗚𝗼𝗼𝗱 𝗠𝗼𝗿𝗻𝗶𝗻𝗴 🌅";
      } else {
        if (_0x20e00d >= 0xc && _0x20e00d < 0x10) {
          return "𝗚𝗼𝗼𝗱 𝗔𝗳𝘁𝗲𝗿𝗻𝗼𝗼𝗻 ☀️";
        } else {
          return _0x20e00d >= 0x10 && _0x20e00d < 0x14 ? "𝗚𝗼𝗼𝗱 𝗘𝘃𝗲𝗻𝗶𝗻𝗴 🌇" : "𝗚𝗼𝗼𝗱 𝗡𝗶𝗴𝗵𝘁 😴";
        }
      }
    };
    if (badwordkick === "TRUE" && _0x1b0633 && !_0x5a0801 && _0x435c84 && new RegExp("\\b" + _0x19fc94.join("\\b|\\b") + "\\b").test(_0x435c84.toLowerCase())) {
      _0x318ec6.groupParticipantsUpdate(_0x4cef7b, [_0x1bf0e2], "remove");
      _0x87f3c4("Hey niggah.\n\nMy owner hates usage of bad words in my presence!");
    }
    if (antilink === "TRUE" && _0x435c84.includes('chat.whatsapp.com') && !_0x3cd2e7 && _0x1b0633 && !_0x5a0801 && _0x1d8ddf.isGroup) {
      kid = _0x1d8ddf.sender;
      _0x318ec6.sendMessage(_0x1d8ddf.chat, {
        'delete': {
          'remoteJid': _0x1d8ddf.chat,
          'fromMe': false,
          'id': _0x1d8ddf.key.id,
          'participant': kid
        }
      }).then(() => _0x318ec6.groupParticipantsUpdate(_0x1d8ddf.chat, [kid], "remove"));
      _0x318ec6.sendMessage(_0x1d8ddf.chat, {
        'text': "𝑯𝒆𝒚 𝒎𝒐𝒕𝒉𝒆𝒓𝒇*𝒄𝒌𝒆𝒓 @" + kid.split('@')[0x0] + "👋\n\n𝒔𝒆𝒏𝒅𝒊𝒏𝒈 𝒍𝒊𝒏𝒌𝒔 𝒊𝒔 𝒑𝒓𝒐𝒉𝒊𝒃𝒊𝒕𝒆𝒅 𝒊𝒏 𝒕𝒉𝒊𝒔 𝒈𝒓𝒐𝒖𝒑 𝒃𝒚 VINIZIAZ-𝑿𝑴𝑫!",
        'contextInfo': {
          'mentionedJid': [kid]
        }
      }, {
        'quoted': _0x1d8ddf
      });
    }
    if (antilinkall === 'TRUE' && _0x435c84.includes("https://") && !_0x3cd2e7 && _0x1b0633 && !_0x5a0801 && _0x1d8ddf.isGroup) {
      ki = _0x1d8ddf.sender;
      _0x318ec6.sendMessage(_0x1d8ddf.chat, {
        'delete': {
          'remoteJid': _0x1d8ddf.chat,
          'fromMe': false,
          'id': _0x1d8ddf.key.id,
          'participant': ki
        }
      }).then(() => _0x318ec6.groupParticipantsUpdate(_0x1d8ddf.chat, [ki], "remove"));
      _0x318ec6.sendMessage(_0x1d8ddf.chat, {
        'text': "𝑯𝒆𝒚 stewpid niggah 🤔 @" + ki.split('@')[0x0] + "👋\n\n𝑺𝒆𝒏𝒅𝒊𝒏𝒈 𝒍𝒊𝒏𝒌𝒔 𝒊𝒔 𝒑𝒓𝒐𝒉𝒊𝒃𝒊𝒕𝒆𝒅 𝒊𝒏 𝒕𝒉𝒊𝒔 𝒈𝒓𝒐𝒖𝒑 𝒃𝒚 VINIZIAZ-𝑿𝑴𝑫 !",
        'contextInfo': {
          'mentionedJid': [ki]
        }
      }, {
        'quoted': _0x1d8ddf
      });
    }
    if (_0x1494bd && !_0x1d8ddf.isGroup) {
      console.log(chalk.black(chalk.bgWhite("[ VINIZIAZ-XMD ]")), !_0x563d(0x4d5) ? chalk.green(_0x3573be) : chalk.keyword("turquoise")(_0x3573be), chalk.magenta('From'), chalk.green(_0x215155), chalk.yellow("[ " + _0x1d8ddf.sender.replace("@s.whatsapp.net", '') + " ]"));
    } else if (_0x1494bd && _0x1d8ddf.isGroup) {
      console.log(chalk.black(chalk.bgWhite("[ LOGS ]")), chalk.keyword('turquoise')(_0x3573be), chalk.magenta("From"), chalk.green(_0x215155), chalk.yellow("[ " + _0x1d8ddf.sender.replace('@s.whatsapp.net', '') + " ]"), chalk.blueBright('IN'), chalk.green(_0x1ead2a));
    }
    if (_0x1494bd) {
      switch (_0x2b2e26) {
        case 'viniziaz':
        case "menu":
          await _0x5f3f83();
          let _0x3b774e = "𝗛𝗲𝘆 " + _0x1d8ddf.pushName + "😁, " + _0x16ab89() + "\n\n𝐀𝐬𝐩𝐢𝐫𝐞 𝐭𝐨 𝐢𝐧𝐬𝐩𝐢𝐫𝐞 𝐛𝐞𝐟𝐨𝐫𝐞 𝐲𝐨𝐮 𝐞𝐱𝐩𝐢𝐫𝐞\n\n╭═════〘 VINIZIAZ-𝐗𝐌𝐃 〙═════╮\n┃✫╭═─────────────────═╮\n┃✬│ 𝗨𝘀𝗲𝗿 : " + _0x1d8ddf.pushName + "\n┃✬│ 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 : Viniziaz-𝙽𝙴𝚃 𝚃𝙴𝙲𝙷 𝙺𝙴𝙽𝚈𝙰\n┃✫│ 𝗣𝗿𝗲𝗳𝗶𝘅 : " + prefix + "\n┃✫│ 𝗠𝗼𝗱𝗲 : " + mode + "\n┃✯│ 𝗦𝗽𝗲𝗲𝗱 :   " + _0x146cfe.toFixed(0x4) + " 𝗠𝘀\n┃✬│ 𝗧𝗶𝗺𝗲 : " + DateTime.now().setZone("Africa/Nairobi").toLocaleString(DateTime.TIME_SIMPLE) + " on " + _0x51c21c.toLocaleString("en-US", {
            'weekday': 'long',
            'timeZone': "Africa/Nairobi"
          }) + "\n┃✫│ 𝗔𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 𝗥𝗔𝗠 : 76𝗚𝗕 𝗼𝗳 256𝗚𝗕\n┃✫│═════════════════════\n┃✬│𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 VINIZIAZ-𝐗𝐌𝐃 𝐂𝐌𝐃𝐒\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎\n┃✫│═════════════════════\n╰══──────────────────══╯\n●════ 〘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝐂𝐌𝐃𝐒 〙═──═●\n╭══───────◇───────══╮\n┃💥│ 𝗩𝗶𝗱𝗲𝗼\n┃💥│ 𝗣𝗹𝗮𝘆\n┃💥│ 𝗣𝗹𝗮𝘆2\n┃💥│ 𝗦𝗼𝗻𝗴\n┃💥│ 𝗦𝗼𝗻𝗴2\n┃💥│ 𝗙𝗯𝗱𝗹\n┃💥│ 𝗧𝗶𝗸𝘁𝗼𝗸\n┃💥│ 𝗧𝘄𝗶𝘁𝘁𝗲𝗿\n┃💥│ 𝗧𝘄𝘁𝗱𝗹\n┃💥│ 𝗜𝗴𝗱𝗹\n┃💥│ 𝗜𝗴\n┃💥│ 𝗙𝗯𝗱𝗹\n┃💥│ 𝗙𝗯\n┃💥│ 𝗶𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺\n┃💥│ 𝗠𝗼𝘃𝗶𝗲\n┃💥│ 𝗟𝘆𝗿𝗶𝗰𝘀\n┃💥│ 𝗪𝗵𝗮𝘁𝘀𝗼𝗻𝗴\n┃💥│ 𝗬𝘁𝘀\n┃💥│ 𝗬𝘁𝗺𝗽3\n┃💥│ 𝗬𝘁𝗺𝗽4\n╰══───────◇───────══╯\n●═════  〘 𝗘𝗗𝗜𝗧 𝐂𝐌𝐃𝐒 〙══───═●\n╭══───────◇───────══╮\n┃💥│ 𝗦𝘁𝗶𝗰𝗸𝗲𝗿\n┃💥│ 𝗦𝗺𝗲𝗺𝗲\n┃💥│ 𝗣𝗵𝗼𝘁𝗼\n┃💥│ 𝗠𝗽4\n┃💥│ 𝗥𝗲𝘁𝗿𝗶𝗲𝘃𝗲\n┃💥│ 𝗩𝘃\n┃💥│ 𝗩𝘃2\n┃💥│ 𝐖𝐚𝐡\n┃💥│ 𝗦𝗰𝗿𝗲𝗲𝗻𝘀𝗵𝗼𝘁\n┃💥│ 𝗠𝗶𝘅\n┃💥│ 𝗧𝗮𝗸𝗲\n┃💥│ 𝗧𝘄𝗲𝗲𝘁\n┃💥│ 𝗤𝘂𝗼𝘁𝗲𝗹𝘆\n╰══───────◇───────══╯\n●═══〘 𝗖𝗢𝗡𝗙𝗜𝗚 𝗩𝗔𝗥𝗦 𝐂𝐌𝐃𝐒 〙═───═●\n╭══───────◇───────══╮\n┃💥│ 𝗔𝗻𝘁𝗶𝗱𝗲𝗹𝗲𝘁𝗲\n┃💥│ 𝗔𝗻𝘁𝗶𝗰𝗮𝗹𝗹\n┃💥│ 𝗔𝗻𝘁𝗶𝗳𝗼𝗿𝗲𝗶𝗴𝗻\n┃💥│ 𝗔𝗻𝘁𝗶𝘁𝗮𝗴\n┃💥│ 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸\n┃💥│ 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸_𝗮𝗹𝗹\n┃💥│ 𝗚𝗽𝘁_𝗜𝗻𝗯𝗼𝘅\n╰══───────◇───────══╯\n●═════  〘 𝗚𝗣𝗧 𝐂𝐌𝐃𝐒 〙═────═●\n╭══───────◇───────══╮\n┃💥│ 𝗔𝗶\n┃💥│ 𝗔𝗶2\n┃💥│ 𝗩𝗶𝘀𝗶𝗼𝗻\n┃💥│ 𝗗𝗲𝗳𝗶𝗻𝗲\n┃💥│ 𝗗𝗮𝗿𝗸𝗴𝗽𝘁\n┃💥│ 𝗪𝗶𝗻𝘅𝗲𝘆\n┃💥│ 𝗚𝗲𝗺𝗶𝗻𝗶\n┃💥│ 𝗚𝗼𝗼𝗴𝗹𝗲\n┃💥│ 𝗚𝗽𝘁\n┃💥│ 𝗚𝗽𝘁2\n┃💥│ 𝗚𝗽𝘁3\n╰══───────◇───────══╯\n●════  〘 𝗚𝗥𝗢𝗨𝗣 𝐂𝐌𝐃𝐒 〙═───═●\n╭══───────◇───────══╮\n┃💥│ 𝗔𝗽𝗽𝗿𝗼𝘃𝗲\n┃💥│ 𝗥𝗲𝗷𝗲𝗰𝘁\n┃💥│ 𝗣𝗿𝗼𝗺𝗼𝘁𝗲\n┃💥│ 𝗗𝗲𝗺𝗼𝘁𝗲\n┃💥│ 𝗗𝗲𝗹𝗲𝘁𝗲\n┃💥│ 𝗥𝗲𝗺𝗼𝘃𝗲\n┃💥│ 𝗙𝗮𝗸𝗲𝗿\n┃💥│ 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀\n┃💥│ 𝗖𝗹𝗼𝘀𝗲\n┃💥│ 𝗢𝗽𝗲𝗻\n┃💥│ 𝗖𝗹𝗼𝘀𝗲𝗧𝗶𝗺𝗲\n┃💥│ 𝗢𝗽𝗲𝗻𝗧𝗶𝗺𝗲\n┃💥│ 𝗗𝗶𝘀𝗽-𝗼𝗳𝗳\n┃💥│ 𝗗𝗶𝘀𝗽-1\n┃💥│ 𝗗𝗶𝘀𝗽-7\n┃💥│ 𝗗𝗶𝘀𝗽-90\n┃💥│ 𝗜𝗰𝗼𝗻\n┃💥│ 𝗚𝗰𝗽𝗿𝗼𝗳𝗶𝗹𝗲\n┃💥│ 𝗦𝘂𝗯𝗷𝗲𝗰𝘁\n┃💥│ 𝗗𝗲𝘀𝗰\n┃💥│ 𝗟𝗲𝗮𝘃𝗲\n┃💥│ 𝗔𝗱𝗱\n┃💥│ 𝗧𝗮𝗴𝗮𝗹𝗹\n┃💥│ 𝗛𝗶𝗱𝗲𝘁𝗮𝗴\n┃💥│ 𝗥𝗲𝘃𝗼𝗸𝗲\n┃💥│ 𝗠𝘂𝘁𝗲\n┃💥│ 𝗨𝗻𝗺𝘂𝘁𝗲\n╰══───────◇───────══╯\n●═══  〘 𝗖𝗢𝗗𝗜𝗡𝗚 𝐂𝐌𝐃𝐒 〙 ═───═●\n╭══───────◇───────══╮\n┃💥│ 𝗖𝗮𝗿𝗯𝗼𝗻\n┃💥│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗰\n┃💥│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗰++\n┃💥│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗷𝘀\n┃💥│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗽𝘆\n┃💥│ 𝗜𝗻𝘀𝗽𝗲𝗰𝘁\n┃💥│ 𝗘𝗻𝗰𝗿𝘆𝗽𝘁𝗲\n┃💥│ 𝗘𝘃𝗮𝗹\n╰══───────◇───────══╯\n●═══  〘 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 𝐂𝐌𝐃𝐒 〙 ═───═●\n╭══───────◇───────══╮\n┃💥│ 𝗢𝘄𝗻𝗲𝗿\n┃💥│ 𝗦𝗰𝗿𝗶𝗽𝘁\n┃💥│ 𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇\n┃💥│ 𝗟𝗶𝘀𝘁\n┃💥│ 𝗣𝗶𝗻𝗴\n┃💥│ 𝗣𝗼𝗹𝗹\n┃💥│ 𝗔𝗹𝗶𝘃𝗲\n┃💥│ 𝗦𝗽𝗲𝗲𝗱\n┃💥│ 𝗥𝗲𝗽𝗼\n┃💥│ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲\n┃💥│ 𝗨𝗽𝘁𝗶𝗺𝗲\n┃💥│ 𝗗𝗽\n┃💥│ 𝗗𝗹𝘁\n┃💥│ 𝗠𝗮𝗶𝗹\n┃💥│ 𝗜𝗻𝗯𝗼𝘅\n┃💥│ 𝗡𝗲𝘄𝘀\n┃💥│ 𝗔𝗻𝗶𝗺𝗲\n╰══───────◇───────══╯\n●═══   〘 𝗢𝗪𝗡𝗘𝗥 𝐂𝐌𝐃𝐒  〙═───═●\n╭══───────◇───────══╮\n┃💥│ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁\n┃💥│ 𝗔𝗱𝗺𝗶𝗻\n┃💥│ 𝗖𝗮𝘀𝘁\n┃💥│ 𝗕𝗿𝗼𝗮𝗱𝗰𝗮𝘀𝘁\n┃💥│ 𝗝𝗼𝗶𝗻\n┃💥│ 𝗚𝗲𝘁𝘃𝗮𝗿\n┃💥│ 𝗥𝗲𝗱𝗲𝗽𝗹𝗼𝘆\n┃💥│ 𝗨𝗽𝗱𝗮𝘁𝗲\n┃💥│ 𝗦𝗲𝘁𝘃𝗮𝗿\n┃💥│ 𝗕𝗼𝘁𝗽𝗽\n┃💥│ 𝗙𝘂𝗹𝗹𝗽𝗽\n┃💥│ 𝗕𝗹𝗼𝗰𝗸\n┃💥│ 𝗨𝗻𝗯𝗼𝗰𝗸\n┃💥│ 𝗞𝗶𝗹𝗹\n┃💥│ 𝗞𝗶𝗹𝗹2\n┃💥│ 𝗧𝗲𝗿𝗺𝗶𝗻𝗮𝘁𝗲\n┃💥│ 𝗦𝗮𝘃𝗲\n┃💥│ >\n╰══───────◇───────══╯\n●═══   〘 𝗣𝗥𝗔𝗡𝗞 𝐂𝐌𝐃  〙 ═──═●\n╭══───────◇───────══╮\n┃💥│ 𝗛𝗮𝗰𝗸\n╰══───────◇───────══╯\n●═══   〘 𝗟𝗢𝗚𝗢𝗦 𝐂𝐌𝐃𝐒 〙 ═──═●\n╭══───────◇───────══╮\n┃💥│ 𝗛𝗮𝗰𝗸𝗲𝗿\n┃💥│ 𝗛𝗮𝗰𝗸𝗲𝗿2\n┃💥│ 𝗚𝗿𝗮𝗳𝗳𝗶𝘁𝗶\n┃💥│ 𝗖𝗮𝘁\n┃💥│ 𝗦𝗮𝗻𝗱\n┃💥│ 𝗚𝗼𝗹𝗱\n┃💥│ 𝗔𝗿𝗲𝗻𝗮\n┃💥│ 𝗗𝗿𝗮𝗴𝗼𝗻𝗯𝗮𝗹𝗹\n┃💥│ 𝗡𝗮𝗿𝘂𝘁𝗼\n┃💥│ 𝗖𝗵𝗶𝗹𝗱\n┃💥│ 𝗟𝗲𝗮𝘃𝗲𝘀\n┃💥│ 1917\n┃💥│ 𝗧𝘆𝗽𝗼𝗴𝗿𝗮𝗽𝗵𝘆\n╰══───────◇───────══╯\n●═══ 〘  𝗧𝗘𝗫𝗧𝗠𝗔𝗞𝗘𝗥 𝐂𝐌𝐃𝐒  〙═──═●\n╭══───────◇───────══╮\n┃💥│ 𝗣𝘂𝗿𝗽𝗹𝗲\n┃💥│ 𝗡𝗲𝗼𝗻\n┃💥│ 𝗡𝗼𝗲𝗹\n┃💥│ 𝗠𝗲𝘁𝗮𝗹𝗹𝗶𝗰\n┃💥│ 𝗗𝗲𝘃𝗶𝗹\n┃💥│ 𝗜𝗺𝗽𝗿𝗲𝘀𝘀𝗶𝘃𝗲\n┃💥│ 𝗦𝗻𝗼𝘄\n┃💥│ 𝗪𝗮𝘁𝗲𝗿\n┃💥│ 𝗧𝗵𝘂𝗻𝗱𝗲𝗿\n┃💥│ 𝗜𝗰𝗲\n┃💥│ 𝗠𝗮𝘁𝗿𝗶𝘅\n┃💥│ 𝗦𝗶𝗹𝘃𝗲𝗿\n┃💥│ 𝗟𝗶𝗴𝗵𝘁\n╰══───────◇───────══╯\n●═══   〘 𝗠𝗜𝗦𝗖 𝐂𝐌𝐃 〙 ═──═●\n╭══───────◇───────══╮\n┃💥│ 𝗪𝗲𝗮𝘁𝗵𝗲𝗿\n┃💥│ 𝗚𝗶𝘁𝗵𝘂𝗯\n┃💥│ 𝗚𝗶𝘁𝗰𝗹𝗼𝗻𝗲\n┃💥│ 𝗔𝗱𝘃𝗶𝗰𝗲\n┃💥│ 𝗥𝗲𝗺𝗼𝘃𝗲𝗯𝗴\n┃💥│ 𝗥𝗲𝗺𝗶𝗻𝗶\n┃💥│ 𝗧𝘁𝘀\n┃💥│ 𝗧𝗿𝘁\n┃💥│ 𝗙𝗮𝗰𝘁\n┃💥│ 𝗖𝗮𝘁𝗳𝗮𝗰𝘁\n┃💥│ 𝗤𝘂𝗼𝘁𝗲𝘀\n┃💥│ 𝗣𝗶𝗰𝗸𝘂𝗽𝗹𝗶𝗻𝗲\n╰══───────◇───────══╯\n●═══  〘 𝗢𝗧𝗛𝗘𝗥𝗦 𝐂𝐌𝐃𝐒 〙 ═──═●\n╭══───────◇───────══╮\n┃💥│ 𝗖𝗿𝗲𝗱𝗶𝘁𝘀\n┃💥│ 𝗨𝗽𝗹𝗼𝗮𝗱\n┃💥│ 𝗔𝘁𝘁𝗽\n┃💥│ 𝗨𝗿𝗹\n┃💥│ 𝗜𝗺𝗮𝗴𝗲\n┃💥│ 𝗦𝘆𝘀𝘁𝗲𝗺\n┃✫╰═───────◇───────═╯\n┃   𝗠𝗮𝗱𝗲 𝗶𝗻 𝗞𝗲𝗻𝘆𝗮 𝗕𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭🤩\n┃   𝗕𝗘𝗦𝗧 𝗫𝗠𝗗 𝗕𝗢𝗧 𝗜𝗡 𝗨𝗡𝗜𝗩𝗘𝗥𝗦𝗘\n┃   🆃🅷🅰🅽🅺🆂 🆃🅾\n┃  ✦𝕯𝖊𝖛𝖊𝖑𝖔𝖕𝖊𝖗 (𝙼𝚉𝙰𝚉𝙸)\n┃  ✦𝕭𝖆𝖘𝖊 (𝙽𝚒𝚌𝚔)    \n┃  ✦𝕸𝖞 𝕲𝖎𝖗𝖑𝖋𝖗𝖎𝖊𝖓𝖉 (𝚊𝚗𝚘𝚗𝚢𝚖𝚘𝚞𝚜)\n┃  ✦𝖋𝖗𝖎𝖊𝖓𝖉𝖘 (𝚒𝚗𝚌. 𝙹𝚞𝚗𝚒𝚘𝚞𝚛, 𝚉𝚎𝚔𝚎 𝚊𝚗𝚍 𝚊𝚕𝚕 𝚘𝚏 𝚢𝚘𝚞)\n╰══────────────────══╯";
          if (menu === "VIDEO") {
            _0x318ec6.sendMessage(_0x1d8ddf.chat, {
              'video': fs.readFileSync("./Media/menu.mp4"),
              'caption': _0x3b774e,
              'gifPlayback': true
            }, {
              'quoted': _0x1d8ddf
            });
          } else {
            if (menu === "TEXT") {
              _0x318ec6.sendMessage(_0x4cef7b, {
                'text': _0x3b774e
              }, {
                'quoted': _0x1d8ddf
              });
            } else {
              if (menu === "IMAGE") {
                _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                  'image': {
                    'url': "https://i.imgur.com/HP6GyiD.jpeg"
                  },
                  'caption': _0x3b774e,
                  'fileLength': "9999999999"
                }, {
                  'quoted': _0x1d8ddf
                });
              } else if (menu === 'LINK') {
                _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                  'text': _0x3b774e,
                  'contextInfo': {
                    'externalAdReply': {
                      'showAdAttribution': true,
                      'title': "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗",
                      'body': '' + runtime(process.uptime()),
                      'thumbnail': fs.readFileSync('./Media/Viniziaz.jpg'),
                      'sourceUrl': "https://wa.me/254704009677?text=Hello👋+Viniziaz+Nihostie+Bot+Mkuu+😔",
                      'mediaType': 0x1,
                      'renderLargerThumbnail': true
                    }
                  }
                }, {
                  'quoted': _0x1d8ddf
                });
              }
            }
          }
          break;
        case "advice":
          _0x87f3c4(advice());
          console.log(advice());
          break;
        case "owner":
        case "developer":
        case "dev":
          _0x318ec6.sendContact(_0x4cef7b, _0x263eb1, _0x1d8ddf);
          break;
        case "lyrics2":
          try {
            if (!_0x5280ae) {
              return _0x87f3c4("𝑷𝒓𝒐𝒗𝒊𝒅𝒆 𝒂 𝒔𝒐𝒏𝒈 𝒏𝒂𝒎𝒆!\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
            }
            const _0x26b5ef = await Client.songs.search(_0x5280ae);
            const _0x319a55 = _0x26b5ef[0x0];
            const _0x15c8c7 = await _0x319a55.lyrics();
            await _0x318ec6.sendMessage(_0x4cef7b, {
              'text': _0x15c8c7
            }, {
              'quoted': _0x1d8ddf
            });
          } catch (_0x227cc9) {
            _0x87f3c4("𝑰 𝒅𝒊𝒅 𝒏𝒐𝒕 𝒈𝒊𝒏𝒅 𝒂𝒏𝒚 𝒍𝒚𝒓𝒊𝒄𝒔 𝒇𝒐𝒓 " + _0x5280ae + ". 𝑻𝒓𝒚 𝒔𝒆𝒂𝒓𝒄𝒉𝒊𝒏𝒈 𝒂 𝒅𝒊𝒇𝒇𝒆𝒓𝒆𝒏𝒕 𝒔𝒐𝒏𝒈.\n\n> ©𝖕𝖔𝖜𝖊𝖗 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
            console.log(_0x227cc9);
          }
          break;
        case "play2":
          {
            const _0x3039a4 = require("yt-search");
            try {
              if (!_0x5280ae) {
                return _0x1d8ddf.reply("𝑾𝒉𝒂𝒕 𝒔𝒐𝒏𝒈 𝒅𝒐 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕 𝒕𝒐 𝒅𝒐𝒘𝒏𝒍𝒐𝒂𝒅?\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
              }
              const {
                videos: _0x31ac8a
              } = await _0x3039a4(_0x5280ae);
              if (!_0x31ac8a || _0x31ac8a.length === 0x0) {
                return _0x1d8ddf.reply("𝑵𝒐 𝒔𝒐𝒏𝒈 𝒇𝒐𝒖𝒏𝒅!\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
              }
              const _0x2bf450 = _0x31ac8a[0x0].url;
              try {
                let _0x4a164d = await fetchJson('https://api.dreaded.site/api/ytdl/audio?url=' + _0x2bf450);
                const {
                  title: _0x40b71b,
                  format: _0x59ecc5,
                  url: _0x5bd181
                } = _0x4a164d.result;
                await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                  'document': {
                    'url': _0x5bd181
                  },
                  'mimetype': "audio/mpeg",
                  'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗",
                  'fileName': _0x40b71b + '.mp3'
                }, {
                  'quoted': _0x1d8ddf
                });
              } catch (_0x1b6161) {
                console.error("API request failed:", _0x1b6161.message);
                _0x1d8ddf.reply("𝑫𝒐𝒘𝒏𝒍𝒐𝒂𝒅 𝒇𝒂𝒊𝒍𝒆𝒅: 𝑼𝒏𝒂𝒃𝒍𝒆 𝒕𝒐 𝒓𝒆𝒕𝒓𝒊𝒆𝒗𝒆.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
              }
            } catch (_0x4908f4) {
              _0x1d8ddf.reply("Download failed\n" + _0x4908f4.message);
            }
          }
          ;
          break;
        case "music":
          {
            const _0x56025a = require("yt-search");
            const _0x4f3ae0 = require("node-fetch");
            try {
              if (!_0x5280ae) {
                return _0x1d8ddf.reply("𝑾𝒉𝒂𝒕 𝒔𝒐𝒏𝒈 𝒅𝒐 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕 𝒕𝒐 𝒅𝒐𝒘𝒏𝒍𝒐𝒂𝒅.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
              }
              let _0x58bca5 = await _0x56025a(_0x5280ae);
              if (!_0x58bca5.all.length) {
                return sendReply(_0x318ec6, _0x1d8ddf, "No results found for your query.");
              }
              let _0x283615 = _0x58bca5.all[0x0].url;
              const _0x36cffe = 'https://keith-api.vercel.app/download/dlmp3?url=' + _0x283615;
              let _0x5b9992 = await _0x4f3ae0(_0x36cffe);
              let _0x58ba34 = await _0x5b9992.json();
              if (_0x58ba34.status && _0x58ba34.result) {
                const _0x4691dc = {
                  'title': _0x58ba34.result.title,
                  'downloadUrl': _0x58ba34.result.downloadUrl,
                  'thumbnail': _0x58bca5.all[0x0].thumbnail,
                  'format': _0x58ba34.result.format,
                  'quality': _0x58ba34.result.quality
                };
                await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                  'document': {
                    'url': _0x4691dc.downloadUrl
                  },
                  'mimetype': "audio/mp3",
                  'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗",
                  'fileName': _0x4691dc.title.replace(/[^a-zA-Z0-9 ]/g, '') + '.mp3'
                }, {
                  'quoted': _0x1d8ddf
                });
                await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                  'audio': {
                    'url': _0x4691dc.downloadUrl
                  },
                  'mimetype': "audio/mp4"
                }, {
                  'quoted': _0x1d8ddf
                });
                return;
              } else {
                return _0x87f3c4("𝑼𝒏𝒂𝒃𝒍𝒆 𝒕𝒐 𝒇𝒆𝒕𝒄𝒉 𝒕𝒉𝒆 𝒔𝒐𝒏𝒈. 𝑻𝒓𝒚 𝒂𝒈𝒂𝒊𝒏 𝒍𝒂𝒕𝒆𝒓.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
              }
            } catch (_0x3d994f) {
              return _0x87f3c4("𝑨𝒏 𝒆𝒓𝒓𝒐𝒓 𝒐𝒄𝒄𝒖𝒓𝒆𝒅: ");
            }
          }
          break;
        case "video":
          {
            const _0x42809f = require("yt-search");
            const _0x3f26d2 = require('node-fetch');
            try {
              if (!_0x5280ae) {
                return sendReply(_0x318ec6, _0x1d8ddf, "𝑷𝒍𝒆𝒂𝒔𝒆 𝒔𝒑𝒆𝒄𝒊𝒇𝒚 𝒕𝒉𝒆 𝒗𝒊𝒅𝒆𝒐 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕 𝒕𝒐 𝒅𝒐𝒘𝒏𝒍𝒐𝒂𝒅.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖍𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
              }
              let _0x5e81f6 = await _0x42809f(_0x5280ae);
              if (!_0x5e81f6.all.length) {
                return sendReply(_0x318ec6, _0x1d8ddf, "No results found for your query.");
              }
              let _0x19a210 = _0x5e81f6.all[0x0].url;
              const _0x3ffe06 = "https://apis-keith.vercel.app/download/dlmp4?url=" + _0x19a210;
              let _0x519a29 = await _0x3f26d2(_0x3ffe06);
              let _0x29b2d5 = await _0x519a29.json();
              if (_0x29b2d5.status && _0x29b2d5.result) {
                const _0x3d6f0a = {
                  'title': _0x29b2d5.result.title,
                  'downloadUrl': _0x29b2d5.result.downloadUrl,
                  'thumbnail': _0x5e81f6.all[0x0].thumbnail,
                  'format': _0x29b2d5.result.format,
                  'quality': _0x29b2d5.result.quality
                };
                await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                  'video': {
                    'url': _0x3d6f0a.downloadUrl
                  },
                  'mimetype': "video/mp4",
                  'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
                }, {
                  'quoted': _0x1d8ddf
                });
                return;
              } else {
                return _0x87f3c4(_0x318ec6, _0x1d8ddf, "𝑼𝒏𝒂𝒃𝒍𝒆 𝒕𝒐 𝒇𝒆𝒕𝒄𝒉 𝒕𝒉𝒆 𝒗𝒊𝒅𝒆𝒐. 𝑷𝒍𝒆𝒂𝒔𝒆 𝒕𝒓𝒚 𝒂𝒈𝒂𝒊𝒏 𝒍𝒂𝒕𝒆𝒓, Viniziaz the better option😂.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
              }
            } catch (_0xb74bde) {
              return _0x87f3c4(_0x318ec6, _0x1d8ddf, "An error occurred: " + _0xb74bde.message);
            }
          }
          ;
          break;
        case "update":
        case 'redeploy':
          {
            const _0x2a0ba3 = require("axios");
            if (!_0x3cd2e7) {
              throw NotOwner;
            }
            if (!appname || !herokuapi) {
              await _0x1d8ddf.reply("𝑰𝒕 𝒍𝒐𝒐𝒌𝒔 𝒍𝒊𝒌𝒆 𝒕𝒉𝒆 𝒉𝒆𝒓𝒐𝒌𝒖 𝒂𝒑𝒑 𝒏𝒂𝒎𝒆 𝒐𝒓 𝑨𝑷𝑰 𝒌𝒆𝒚 𝒊𝒔 𝒏𝒐𝒕 𝒔𝒆𝒕. 𝑷𝒍𝒆𝒂𝒔𝒆 𝒎𝒂𝒌𝒆 𝒔𝒖𝒓𝒆 𝒚𝒐𝒖 𝒉𝒂𝒗𝒆 𝒔𝒆𝒕 𝒕𝒉𝒆 `APP_NAME` 𝒂𝒏𝒅 `HEROKU_API` 𝒆𝒏𝒗𝒊𝒓𝒐𝒏𝒎𝒆𝒏𝒕 𝒗𝒂𝒓𝒊𝒂𝒃𝒍𝒆𝒔.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
              return;
            }
            async function _0x647b40() {
              try {
                const _0x28e64c = await _0x2a0ba3.post("https://api.heroku.com/apps/" + appname + "/builds", {
                  'source_blob': {
                    'url': "https://github.com/Viniznimco/VINIZIAZ-XMD/tarball/main"
                  }
                }, {
                  'headers': {
                    'Authorization': "Bearer " + herokuapi,
                    'Accept': "application/vnd.heroku+json; version=3"
                  }
                });
                await _0x1d8ddf.reply("VINIZIAZ-𝑿𝑴𝑫 𝑩𝒐𝒕 𝒊𝒔 𝒖𝒏𝒅𝒆𝒓𝒈𝒐𝒊𝒏𝒈 𝒂 𝒓𝒖𝒕𝒉𝒍𝒆𝒔𝒔 𝒖𝒑𝒈𝒓𝒂𝒅𝒆, 𝒉𝒐𝒍𝒅 𝒐𝒏 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒏𝒆𝒙𝒕 2 𝒎𝒊𝒏𝒖𝒕𝒆𝒔 𝒂𝒔 𝒕𝒉𝒆 𝒓𝒆𝒅𝒆𝒑𝒍𝒐𝒚 𝒆𝒙𝒆𝒄𝒖𝒕𝒆𝒔! 𝑶𝒏𝒄𝒆 𝒅𝒐𝒏𝒆𝒆, 𝒚𝒐𝒖 𝒘𝒊𝒍𝒍 𝒉𝒂𝒗𝒆 𝒕𝒉𝒆 𝒇𝒓𝒆𝒔𝒉𝒆𝒔𝒕 𝒗𝒆𝒓𝒔𝒊𝒐𝒏 𝒐𝒇 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝒖𝒏𝒍𝒆𝒂𝒔𝒉𝒆𝒅 𝒖𝒑𝒐𝒏 𝒚𝒐𝒖.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
                console.log("Build details:", _0x28e64c.data);
              } catch (_0x197e52) {
                const _0x34aee7 = _0x197e52.response?.["data"] || _0x197e52.message;
                await _0x1d8ddf.reply("𝑭𝒂𝒊𝒍𝒆𝒅 𝒕𝒐 𝒖𝒑𝒅𝒂𝒕𝒆 𝒂𝒏𝒅 𝒓𝒆𝒅𝒆𝒑𝒍𝒐𝒚. 𝑪𝒉𝒆𝒄𝒌 𝒊𝒇 𝒚𝒐𝒖 𝒉𝒂𝒗𝒆 𝒔𝒆𝒕 𝒕𝒉𝒆 𝒉𝒆𝒓𝒐𝒌𝒖 𝑨𝑷𝑰 𝒌𝒆𝒚 𝒂𝒏𝒅 𝒂𝒑𝒑 𝒏𝒂𝒎𝒆 𝒄𝒐𝒓𝒓𝒆𝒄𝒕𝒍𝒚.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
                console.error("Error triggering redeploy:", _0x34aee7);
              }
            }
            _0x647b40();
          }
          break;
        case "credits":
          _0x318ec6.sendMessage(_0x1d8ddf.chat, {
            'image': {
              'url': "https://i.imgur.com/HP6GyiD.jpeg"
            },
            'caption': "We express sincere gratitude and acknowledgement to the following:\n\n -Nick ➪ Kenya\n - Writing the base code using case method\nhttps://github.com/HunterNick2\n\n -Viniziaz ➪ Kenya\n - Founder of the bot base\nhttps://github.com/Viniznimco\n\n𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
          }, {
            'quoted': _0x1d8ddf
          });
          break;
        case 'poll':
          {
            let [_0x423bfe, _0x2c83d4] = _0x5280ae.split('|');
            if (_0x5280ae.split('|') < 0x2) {
              return _0x1d8ddf.reply("Wrong format::\nExample:- poll who is the best developer|Putin, Viniziaz\n\n> ©𝕻𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
            }
            let _0x1f2d96 = [];
            for (let _0x15994f of _0x2c83d4.split(',')) {
              _0x1f2d96.push(_0x15994f);
            }
            await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
              'poll': {
                'name': _0x423bfe,
                'values': _0x1f2d96
              }
            });
          }
          break;
        case 'play':
          {
            const _0x34dee9 = require("axios");
            const _0x3a326a = require("yt-search");
            const _0x44e3be = require("fluent-ffmpeg");
            const _0x125531 = require('fs');
            const _0x45b59 = require("path");
            try {
              if (!_0x5280ae) {
                return _0x1d8ddf.reply("What song do you want to download?\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
              }
              let _0xf6ea36 = await _0x3a326a(_0x5280ae);
              let _0x120c9e = _0xf6ea36.all[0x0].url;
              const _0xf31639 = ['https://xploader-api.vercel.app/ytmp3?url=' + _0x120c9e, "https://apis.davidcyriltech.my.id/youtube/mp3?url=" + _0x120c9e, "https://api.ryzendesu.vip/api/downloader/ytmp3?url=" + _0x120c9e, "https://api.dreaded.site/api/ytdl/audio?url=" + _0x120c9e];
              for (const _0x26dc4e of _0xf31639) {
                try {
                  let _0x4374b4 = await fetchJson(_0x26dc4e);
                  if (_0x4374b4.status === 0xc8 || _0x4374b4.success) {
                    let _0x1cc27a = _0x4374b4.result?.['downloadUrl'] || _0x4374b4.url;
                    let _0x22dd21 = _0xf6ea36.all[0x0].title.replace(/[^a-zA-Z0-9 ]/g, '') + ".mp3";
                    let _0x29ef23 = _0x45b59.join(__dirname, _0x22dd21);
                    const _0x3623c1 = await _0x34dee9({
                      'url': _0x1cc27a,
                      'method': "GET",
                      'responseType': 'stream'
                    });
                    if (_0x3623c1.status !== 0xc8) {
                      _0x1d8ddf.reply("sorry but the API endpoint didn't respond correctly. Try again later.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
                      continue;
                    }
                    _0x44e3be(_0x3623c1.data).toFormat("mp3").save(_0x29ef23).on('end', async () => {
                      await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                        'document': {
                          'url': _0x29ef23
                        },
                        'mimetype': "audio/mp3",
                        'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗",
                        'fileName': _0x22dd21
                      }, {
                        'quoted': _0x1d8ddf
                      });
                      _0x125531.unlinkSync(_0x29ef23);
                    }).on('error', _0x31b2b5 => {
                      _0x1d8ddf.reply("Download failed\n" + _0x31b2b5.message);
                    });
                    return;
                  }
                } catch (_0xdfbc29) {
                  continue;
                }
              }
              _0x1d8ddf.reply("𝑨𝒏 𝒆𝒓𝒓𝒐𝒓 𝒐𝒄𝒄𝒖𝒓𝒆𝒅. 𝑨𝑳𝑳 𝑨𝑷𝑰𝒔 𝒎𝒊𝒈𝒉𝒕 𝒏𝒆 𝒅𝒐𝒘𝒏 𝒐𝒓 𝒖𝒏𝒂𝒃𝒍𝒆 𝒕𝒐 𝒑𝒓𝒐𝒄𝒆𝒔𝒔 𝒕𝒉𝒆 𝒓𝒆𝒒𝒖𝒆𝒔𝒕.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
            } catch (_0x2e1055) {
              _0x1d8ddf.reply("Download failed\n" + _0x2e1055.message);
            }
          }
          break;
        case "inspect":
          {
            const _0x460ce = require('node-fetch');
            const _0x5c553d = require("cheerio");
            if (!_0x5280ae) {
              return _0x1d8ddf.reply("𝑷𝒓𝒐𝒗𝒊𝒅𝒆 𝒂 𝒗𝒂𝒍𝒊𝒅 𝒘𝒆𝒃 𝒍𝒊𝒏𝒌 𝒕𝒐 𝒇𝒆𝒕𝒄𝒉! 𝑻𝒉𝒊𝒔 𝑩𝒐𝒕 𝒘𝒊𝒍𝒍 𝒄𝒓𝒂𝒘𝒍 𝒕𝒉𝒆 𝒘𝒆𝒃𝒔𝒊𝒕𝒆 𝒂𝒏𝒅 𝒇𝒆𝒕𝒄𝒉 𝒊𝒕𝒔 HTML, CSS, JavaScript, 𝒂𝒏𝒅 𝒂𝒏𝒚 𝒎𝒆𝒅𝒊𝒂 𝒆𝒎𝒃𝒆𝒅𝒅𝒆𝒅 𝒊𝒏 𝒊𝒕.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
            }
            if (!/^https?:\/\//i.test(_0x5280ae)) {
              return _0x1d8ddf.reply("𝑷𝒍𝒆𝒂𝒔𝒆 𝒑𝒓𝒐𝒗𝒊𝒅𝒆 𝒂 𝒍𝒊𝒏𝒌 𝒔𝒕𝒂𝒓𝒕𝒊𝒏𝒈 𝒘𝒊𝒕𝒉 http:// or https://\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
            }
            try {
              const _0x29e7ba = await _0x460ce(_0x5280ae);
              const _0x221ebd = await _0x29e7ba.text();
              const _0x3639ba = _0x5c553d.load(_0x221ebd);
              const _0x317bd = [];
              _0x3639ba("img[src], video[src], audio[src]").each((_0x30068a, _0x560472) => {
                let _0x135a8f = _0x3639ba(_0x560472).attr('src');
                if (_0x135a8f) {
                  _0x317bd.push(_0x135a8f);
                }
              });
              const _0x22dd14 = [];
              _0x3639ba("link[rel=\"stylesheet\"]").each((_0x21b5fe, _0x273358) => {
                let _0x2810d1 = _0x3639ba(_0x273358).attr("href");
                if (_0x2810d1) {
                  _0x22dd14.push(_0x2810d1);
                }
              });
              const _0xd0caf4 = [];
              _0x3639ba('script[src]').each((_0x3bf56d, _0x34ac5b) => {
                let _0x38173a = _0x3639ba(_0x34ac5b).attr("src");
                if (_0x38173a) {
                  _0xd0caf4.push(_0x38173a);
                }
              });
              await _0x1d8ddf.reply("**Full HTML Content**:\n\n" + _0x221ebd);
              if (_0x22dd14.length > 0x0) {
                for (const _0x2a47df of _0x22dd14) {
                  const _0x22479b = await _0x460ce(new URL(_0x2a47df, _0x5280ae));
                  const _0x13a00e = await _0x22479b.text();
                  await _0x1d8ddf.reply("**CSS File Content**:\n\n" + _0x13a00e);
                }
              } else {
                await _0x1d8ddf.reply("No external CSS files found.");
              }
              if (_0xd0caf4.length > 0x0) {
                for (const _0x218cbf of _0xd0caf4) {
                  const _0x177a03 = await _0x460ce(new URL(_0x218cbf, _0x5280ae));
                  const _0x5dbb3f = await _0x177a03.text();
                  await _0x1d8ddf.reply("**JavaScript File Content**:\n\n" + _0x5dbb3f);
                }
              } else {
                await _0x1d8ddf.reply("No external JavaScript files found.");
              }
              if (_0x317bd.length > 0x0) {
                await _0x1d8ddf.reply("**Media Files Found**:\n" + _0x317bd.join("\n"));
              } else {
                await _0x1d8ddf.reply("No media files (images, videos, audios) found.");
              }
            } catch (_0x262b30) {
              console.error(_0x262b30);
              return _0x1d8ddf.reply("An error occurred while fetching the website content.");
            }
          }
          break;
        case "metallic":
          {
            var _0x3ca0e7 = require("mumaker");
            if (!_0x5280ae || _0x5280ae == '') {
              _0x1d8ddf.reply("Example Usage : " + prefix + "Metallic Viniziaz");
              return;
            }
            try {
              var _0x3c4532 = await _0x3ca0e7.ephoto("https://en.ephoto360.com/impressive-decorative-3d-metal-text-effect-798.html", _0x5280ae);
              _0x1d8ddf.reply("*Wait a moment...*");
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'image': {
                  'url': _0x3c4532.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              });
            } catch (_0x2f80ec) {
              _0x1d8ddf.reply(_0x2f80ec);
            }
          }
          break;
        case "ice":
          {
            var _0x3ca0e7 = require("mumaker");
            if (!_0x5280ae || _0x5280ae == '') {
              _0x1d8ddf.reply("Example Usage : " + prefix + "Ice Viniziaz");
              return;
            }
            try {
              var _0x5c8187 = await _0x3ca0e7.ephoto('https://en.ephoto360.com/ice-text-effect-online-101.html', _0x5280ae);
              _0x1d8ddf.reply("*Wait a moment...*");
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'image': {
                  'url': _0x5c8187.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              });
            } catch (_0x1ad250) {
              _0x1d8ddf.reply(_0x1ad250);
            }
          }
          break;
        case "snow":
          {
            var _0x3ca0e7 = require('mumaker');
            if (!_0x5280ae || _0x5280ae == '') {
              _0x1d8ddf.reply("Example Usage : " + prefix + "Snow Viniziaz");
              return;
            }
            try {
              var _0x5bd395 = await _0x3ca0e7.ephoto("https://en.ephoto360.com/create-a-snow-3d-text-effect-free-online-621.html", _0x5280ae);
              _0x1d8ddf.reply("*Wait a moment...*");
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'image': {
                  'url': _0x5bd395.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              });
            } catch (_0x49cb0f) {
              _0x1d8ddf.reply(_0x49cb0f);
            }
          }
          break;
        case "impressive":
          {
            var _0x3ca0e7 = require('mumaker');
            if (!_0x5280ae || _0x5280ae == '') {
              _0x1d8ddf.reply("Example Usage : " + prefix + "impressive Nick");
              return;
            }
            try {
              var _0x4323c7 = await _0x3ca0e7.ephoto('https://en.ephoto360.com/create-3d-colorful-paint-text-effect-online-801.html', _0x5280ae);
              _0x1d8ddf.reply("*Wait a moment...*");
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'image': {
                  'url': _0x4323c7.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              });
            } catch (_0x42de7d) {
              _0x1d8ddf.reply(_0x42de7d);
            }
          }
          break;
        case 'noel':
          {
            var _0x3ca0e7 = require("mumaker");
            if (!_0x5280ae || _0x5280ae == '') {
              _0x1d8ddf.reply("Example usage: " + prefix + "Noel myself");
              return;
            }
            try {
              var _0x43e78f = await _0x3ca0e7.ephoto("https://en.ephoto360.com/noel-text-effect-online-99.html", _0x5280ae);
              _0x1d8ddf.reply("*Wait a moment...*");
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'image': {
                  'url': _0x43e78f.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0x1d8ddf
              });
            } catch (_0x48c575) {
              _0x1d8ddf.reply("💀💀" + _0x48c575);
            }
          }
          break;
        case "water":
          {
            var _0x3ca0e7 = require("mumaker");
            if (!_0x5280ae || _0x5280ae == '') {
              _0x1d8ddf.reply("Example usage: " + prefix + "Water myself");
              return;
            }
            try {
              var _0x4ed4 = await _0x3ca0e7.ephoto('https://en.ephoto360.com/create-water-effect-text-online-295.html', _0x5280ae);
              _0x1d8ddf.reply("*Wait a moment...*");
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'image': {
                  'url': _0x4ed4.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0x1d8ddf
              });
            } catch (_0x5b90de) {
              _0x1d8ddf.reply("💀💀" + _0x5b90de);
            }
          }
          break;
        case 'matrix':
          {
            var _0x3ca0e7 = require("mumaker");
            if (!_0x5280ae || _0x5280ae == '') {
              _0x1d8ddf.reply("Example usage: " + prefix + "Matrix myself");
              return;
            }
            try {
              var _0x4b5c7d = await _0x3ca0e7.ephoto('https://en.ephoto360.com/matrix-text-effect-154.html', _0x5280ae);
              _0x1d8ddf.reply("*Wait a moment...*");
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'image': {
                  'url': _0x4b5c7d.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0x1d8ddf
              });
            } catch (_0xeb5683) {
              _0x1d8ddf.reply('💀💀' + _0xeb5683);
            }
          }
          break;
        case "light":
          {
            var _0x3ca0e7 = require("mumaker");
            if (!_0x5280ae || _0x5280ae == '') {
              _0x1d8ddf.reply("Example usage: " + prefix + "Light myself");
              return;
            }
            try {
              var _0x3a0807 = await _0x3ca0e7.ephoto("https://en.ephoto360.com/light-text-effect-futuristic-technology-style-648.html", _0x5280ae);
              _0x1d8ddf.reply("*Wait a moment...*");
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'image': {
                  'url': _0x3a0807.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0x1d8ddf
              });
            } catch (_0x3084b5) {
              _0x1d8ddf.reply('💀💀' + _0x3084b5);
            }
          }
          break;
        case "neon":
          {
            var _0x3ca0e7 = require("mumaker");
            if (!_0x5280ae || _0x5280ae == '') {
              _0x1d8ddf.reply("Example Usage : " + prefix + "Neon Viniziaz");
              return;
            }
            try {
              var _0x33ad19 = await _0x3ca0e7.ephoto("https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html", _0x5280ae);
              _0x1d8ddf.reply("*Wait a moment...*");
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'image': {
                  'url': _0x33ad19.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              });
            } catch (_0x251d81) {
              _0x1d8ddf.reply(_0x251d81);
            }
          }
          break;
        case 'silver':
        case "silva":
          {
            var _0x3ca0e7 = require("mumaker");
            if (!_0x5280ae || _0x5280ae == " ") {
              _0x1d8ddf.reply("Example Usage : " + prefix + "Silva Viniziaz");
              return;
            }
            try {
              var _0x34f32d = await _0x3ca0e7.ephoto("https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html", _0x5280ae);
              _0x1d8ddf.reply("*Wait a moment...*");
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'image': {
                  'url': _0x34f32d.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              });
            } catch (_0x4df323) {
              _0x1d8ddf.reply(_0x4df323);
            }
          }
          break;
        case 'devil':
          {
            var _0x3ca0e7 = require('mumaker');
            if (!_0x5280ae || _0x5280ae == '') {
              _0x1d8ddf.reply("Example Usage : " + prefix + "Devil Viniziaz");
              return;
            }
            try {
              var _0x31f72b = await _0x3ca0e7.ephoto("https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html", _0x5280ae);
              _0x1d8ddf.reply("*Wait a moment...*");
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'image': {
                  'url': _0x31f72b.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              });
            } catch (_0x214e65) {
              _0x1d8ddf.reply(_0x214e65);
            }
          }
          break;
        case "typography":
          {
            var _0x3ca0e7 = require("mumaker");
            if (!_0x5280ae || _0x5280ae == '') {
              _0x1d8ddf.reply("Example Usage : " + prefix + "Typography Viniziaz");
              return;
            }
            try {
              var _0x48412c = await _0x3ca0e7.ephoto("https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html", _0x5280ae);
              _0x1d8ddf.reply("*Wait a moment...*");
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'image': {
                  'url': _0x48412c.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              });
            } catch (_0x73b0a6) {
              _0x1d8ddf.reply(_0x73b0a6);
            }
          }
          break;
        case "purple":
          {
            var _0x3ca0e7 = require('mumaker');
            if (!_0x5280ae || _0x5280ae == '') {
              _0x1d8ddf.reply("Example Usage : " + prefix + "purple Viniziaz");
              return;
            }
            try {
              var _0x36249f = await _0x3ca0e7.ephoto("https://en.ephoto360.com/purple-text-effect-online-100.html", _0x5280ae);
              _0x1d8ddf.reply("*Wait a moment...*");
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'image': {
                  'url': _0x36249f.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              });
            } catch (_0x48e32d) {
              _0x1d8ddf.reply(_0x48e32d);
            }
          }
          break;
        case "thunder":
          {
            var _0x3ca0e7 = require("mumaker");
            if (!_0x5280ae || _0x5280ae == '') {
              _0x1d8ddf.reply("Example Usage : " + prefix + "Thunder Viniziaz");
              return;
            }
            try {
              var _0x486890 = await _0x3ca0e7.ephoto('https://en.ephoto360.com/thunder-text-effect-online-97.html', _0x5280ae);
              _0x1d8ddf.reply("*Wait a moment...*");
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'image': {
                  'url': _0x486890.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              });
            } catch (_0x58050c) {
              _0x1d8ddf.reply(_0x58050c);
            }
          }
          break;
        case "leaves":
          {
            var _0x3ca0e7 = require("mumaker");
            if (!_0x5280ae || _0x5280ae == '') {
              _0x1d8ddf.reply("Example Usage : " + prefix + "Leaves RAVEN-BOT");
              return;
            }
            try {
              var _0xb80bc4 = await _0x3ca0e7.ephoto("https://en.ephoto360.com/green-brush-text-effect-typography-maker-online-153.html", _0x5280ae);
              _0x1d8ddf.reply("Wait a moment...");
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'image': {
                  'url': _0xb80bc4.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0x1d8ddf
              });
            } catch (_0x61b14d) {
              _0x1d8ddf.reply(_0x61b14d);
            }
          }
          break;
        case "1917":
          {
            var _0x3ca0e7 = require("mumaker");
            if (!_0x5280ae || _0x5280ae == '') {
              _0x1d8ddf.reply("Example Usage : " + prefix + "1917 Viniziaz");
              return;
            }
            try {
              var _0xd77b9a = await _0x3ca0e7.ephoto("https://en.ephoto360.com/1917-style-text-effect-523.html", _0x5280ae);
              _0x1d8ddf.reply("Wait a moment...");
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'image': {
                  'url': _0xd77b9a.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0x1d8ddf
              });
            } catch (_0x52ea56) {
              _0x1d8ddf.reply(_0x52ea56);
            }
          }
          break;
        case 'arena':
          {
            var _0x3ca0e7 = require("mumaker");
            if (!_0x5280ae || _0x5280ae == '') {
              _0x1d8ddf.reply("Example Usage : " + prefix + "arena VINIZIAZ-XMD");
              return;
            }
            try {
              var _0x30ffa5 = await _0x3ca0e7.ephoto("https://en.ephoto360.com/create-cover-arena-of-valor-by-mastering-360.html", _0x5280ae);
              _0x1d8ddf.reply("Wait a moment...");
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'image': {
                  'url': _0x30ffa5.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0x1d8ddf
              });
            } catch (_0x3d190b) {
              _0x1d8ddf.reply(_0x3d190b);
            }
          }
          break;
        case "hacker":
          {
            var _0x3ca0e7 = require("mumaker");
            if (!_0x5280ae || _0x5280ae == '') {
              _0x1d8ddf.reply("Example usage :  " + prefix + "hacker Viniziaz");
              return;
            }
            try {
              let _0x2980e1 = await _0x3ca0e7.ephoto("https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", _0x5280ae);
              _0x1d8ddf.reply("*Wait a moment...*");
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'image': {
                  'url': _0x2980e1.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0x1d8ddf
              });
            } catch (_0x5da2ce) {
              _0x1d8ddf.reply("🥵🥵 " + _0x5da2ce);
            }
          }
          break;
        case 'sand':
          {
            var _0x3ca0e7 = require("mumaker");
            if (!_0x5280ae || _0x5280ae == '') {
              _0x1d8ddf.reply("Example Usage : " + prefix + "sand Raven");
              return;
            }
            try {
              let _0x4c1f90 = await _0x3ca0e7.ephoto("https://en.ephoto360.com/write-names-and-messages-on-the-sand-online-582.html", _0x5280ae);
              _0x1d8ddf.reply("*Wait a moment...*");
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'image': {
                  'url': _0x4c1f90.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0x1d8ddf
              });
            } catch (_0x1cee47) {
              _0x1d8ddf.reply("🚫🚫 " + _0x1cee47);
            }
          }
          break;
        case "dragonball":
          {
            var _0x3ca0e7 = require("mumaker");
            if (!_0x5280ae || _0x5280ae == '') {
              _0x1d8ddf.reply("Example usage :  " + prefix + "dragonball Viniziaz");
              return;
            }
            try {
              const _0x4edf29 = await _0x3ca0e7.ephoto("https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html", _0x5280ae);
              _0x1d8ddf.reply("*Wait a moment...*");
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'image': {
                  'url': _0x4edf29.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0x1d8ddf
              });
            } catch (_0xa54e38) {
              _0x1d8ddf.reply("🥵🥵 " + _0xa54e38);
            }
          }
          break;
        case "naruto":
          {
            var _0x3ca0e7 = require("mumaker");
            if (!_0x5280ae || _0x5280ae == '') {
              _0x1d8ddf.reply("Example usage : " + prefix + "naruto Viniziaz");
              return;
            }
            try {
              var _0x4f03b2 = await _0x3ca0e7.ephoto('https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html', _0x5280ae);
              _0x1d8ddf.reply("*Wait a moment...*");
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'image': {
                  'url': _0x4f03b2.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0x1d8ddf
              });
            } catch (_0x247bf9) {
              _0x1d8ddf.reply("🥵🥵 " + _0x247bf9);
            }
          }
          break;
        case "graffiti":
          {
            var _0x3ca0e7 = require("mumaker");
            if (!_0x5280ae || _0x5280ae == '') {
              _0x1d8ddf.reply("Example usage : " + prefix + "graffiti Viniziaz");
              return;
            }
            try {
              let _0x217d77 = await _0x3ca0e7.ephoto('https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html', _0x5280ae);
              _0x1d8ddf.reply("*Wait a moment...*");
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'image': {
                  'url': _0x217d77.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0x1d8ddf
              });
            } catch (_0x384334) {
              _0x1d8ddf.reply("🥵🥵 " + _0x384334);
            }
          }
          break;
        case "cat":
          {
            var _0x3ca0e7 = require('mumaker');
            if (!_0x5280ae || _0x5280ae == '') {
              _0x1d8ddf.reply("Example usage : * " + prefix + "cat Viniziaz");
              return;
            }
            try {
              let _0x490ca9 = await _0x3ca0e7.ephoto("https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html", _0x5280ae);
              _0x1d8ddf.reply("*Wait a moment...*");
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'image': {
                  'url': _0x490ca9.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0x1d8ddf
              });
            } catch (_0x354e0b) {
              _0x1d8ddf.reply("🥵🥵 " + _0x354e0b);
            }
          }
          break;
        case "gold":
          {
            var _0x3ca0e7 = require("mumaker");
            if (!_0x5280ae || _0x5280ae == '') {
              _0x1d8ddf.reply("Example usage: " + prefix + "Gold myself");
              return;
            }
            try {
              var _0x926b8 = await _0x3ca0e7.ephoto("https://en.ephoto360.com/modern-gold-4-213.html", _0x5280ae);
              _0x1d8ddf.reply("*Wait a moment...*");
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'image': {
                  'url': _0x926b8.image
                },
                'caption': "GENERATED BY VINIZIAZ-XMD"
              }, {
                'quoted': _0x1d8ddf
              });
            } catch (_0x5ba94d) {
              _0x1d8ddf.reply("💀💀" + _0x5ba94d);
            }
          }
          break;
        case "child":
          {
            var _0x3ca0e7 = require('mumaker');
            if (!_0x5280ae || _0x5280ae == '') {
              _0x1d8ddf.reply("Example usage: " + prefix + "Child Viniziaz");
              return;
            }
            try {
              var _0x47feb7 = await _0x3ca0e7.ephoto("https://en.ephoto360.com/write-text-on-wet-glass-online-589.html", _0x5280ae);
              _0x1d8ddf.reply("*Wait a moment...*");
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'image': {
                  'url': _0x47feb7.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0x1d8ddf
              });
            } catch (_0x21bcf4) {
              _0x1d8ddf.reply("💀💀" + _0x21bcf4);
            }
          }
          break;
        case "Dommie":
          {
            if (!_0x5280ae) {
              return _0x87f3c4("Hello I'm 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗔𝗜. How can i help u?");
            }
            let _0x2711c8 = await fetchJson('https://bk9.fun/ai/llama?q=' + _0x5280ae);
            if (!_0x2711c8.BK9) {
              return _0x87f3c4("An error occurred while fetching the AI chatbot response. Please try again later.");
            } else {
              _0x87f3c4(_0x2711c8.BK9);
            }
          }
          break;
        case "gpt2":
          {
            if (!_0x5280ae) {
              return _0x87f3c4("What's your question ?");
            }
            let _0x3a2978 = await fetchJson("https://bk9.fun/ai/jeeves-chat?q=" + _0x5280ae);
            if (!_0x3a2978.BK9) {
              return _0x87f3c4("An error occurred while fetching the AI chatbot response. Please try again later.");
            } else {
              _0x87f3c4(_0x3a2978.BK9);
            }
          }
          break;
        case 'trt':
        case "translate":
          {
            try {
              const _0x36365d = _0x5280ae.split(" ");
              if (_0x36365d.length < 0x2) {
                return _0x1d8ddf.reply(" Please provide a language code and text to translate !");
              }
              const _0x485a31 = _0x36365d[0x0];
              const _0x4620a5 = _0x36365d.slice(0x1).join(" ");
              const _0xa40166 = await fetch("https://api.mymemory.translated.net/get?q=" + encodeURIComponent(_0x4620a5) + "&langpair=en|" + _0x485a31);
              if (!_0xa40166.ok) {
                return _0x1d8ddf.reply("Failed to fetch data. Please try again later.");
              }
              const _0x33cfb3 = await _0xa40166.json();
              if (!_0x33cfb3.responseData || !_0x33cfb3.responseData.translatedText) {
                return _0x1d8ddf.reply("No translation found for the provided text.");
              }
              const _0x1ed7c5 = _0x33cfb3.responseData.translatedText;
              const _0x4dc614 = " " + _0x1ed7c5;
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'text': _0x4dc614
              }, {
                'quoted': _0x1d8ddf
              });
            } catch (_0x1cd60d) {
              console.error("Error occurred:", _0x1cd60d);
              _0x1d8ddf.reply("An error occurred while fetching the data. Please try again later.\n" + _0x1cd60d);
            }
          }
          break;
        case "cast":
          {
            if (!_0x3cd2e7) {
              throw NotOwner;
            }
            if (!_0x1d8ddf.isGroup) {
              throw group;
            }
            if (!_0x5280ae) {
              return _0x1d8ddf.reply("provide a text to cast !");
            }
            let _0x5bce5d = await _0x211808.filter(_0x1fe342 => _0x1fe342.id.endsWith(".net")).map(_0x1c6499 => _0x1c6499.id);
            _0x1d8ddf.reply("Success in casting the message to contacts\n\nDo not always use this Command to avoid WA-bans ! ");
            for (let _0x4d0775 of _0x5bce5d) {
              _0x318ec6.sendMessage(_0x4d0775, {
                'text': q
              });
            }
            _0x1d8ddf.reply("Casting completed successfully😁");
          }
          break;
        case "img":
        case "ai-img":
        case "image":
        case 'images':
          {
            var _0x3a2eeb = require("g-i-s");
            if (!_0x5280ae) {
              return _0x1d8ddf.reply("Provide a text");
            }
            try {
              _0x3a2eeb(_0x5280ae, async (_0x348b02, _0x253827) => {
                if (_0x348b02) {
                  return _0x1d8ddf.reply("An error occurred while searching for images.\n" + _0x348b02);
                }
                if (_0x253827.length === 0x0) {
                  return _0x1d8ddf.reply("No images found.");
                }
                const _0xa7cbe = Math.min(_0x253827.length, 0x5);
                const _0x4051a5 = _0x253827.slice(0x0, _0xa7cbe).map(_0x1eee52 => _0x1eee52.url);
                const _0x4d174a = _0x4051a5.map(_0x358eea => ({
                  'image': {
                    'url': _0x358eea
                  },
                  'caption': "Downloaded by " + botname
                }));
                for (const _0x4d19a2 of _0x4d174a) {
                  await _0x318ec6.sendMessage(_0x1d8ddf.chat, _0x4d19a2, {
                    'quoted': _0x1d8ddf
                  });
                }
              });
            } catch (_0xf5dac7) {
              _0x1d8ddf.reply("An error occurred.\n" + _0xf5dac7);
            }
          }
          break;
        case "foreigners":
          {
            if (!_0x1d8ddf.isGroup) {
              throw group;
            }
            if (!_0x5a0801) {
              throw admin;
            }
            if (!_0x1b0633) {
              throw botAdmin;
            }
            let _0x4cf340 = _0x211808.filter(_0x390e17 => !_0x390e17.admin).map(_0x423d6b => _0x423d6b.id).filter(_0x28f355 => !_0x28f355.startsWith(mycode) && _0x28f355 != _0x318ec6.decodeJid(_0x318ec6.user.id));
            if (!_0xacd495 || !_0xacd495[0x0]) {
              if (_0x4cf340.length == 0x0) {
                return _0x1d8ddf.reply("No foreigners detected.");
              }
              let _0x19aaeb = "𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀 𝗮𝗿𝗲 𝗺𝗲𝗺𝗯𝗲𝗿𝘀 𝘄𝗵𝗼𝘀𝗲 𝗰𝗼𝘂𝗻𝘁𝗿𝘆 𝗰𝗼𝗱𝗲 𝗶𝘀 𝗻𝗼𝘁 " + mycode + ". 𝗧𝗵𝗲 𝗳𝗼𝗹𝗹𝗼𝘄𝗶𝗻𝗴  " + _0x4cf340.length + " 𝗳𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀 𝘄𝗲𝗿𝗲 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱:- \n";
              for (let _0x3013d4 of _0x4cf340) {
                _0x19aaeb += "𓅂 @" + _0x3013d4.split('@')[0x0] + "\n";
              }
              _0x19aaeb += "\n𝗧𝗼 𝗿𝗲𝗺𝗼𝘃𝗲 𝘁𝗵𝗲𝗺 𝘀𝗲𝗻𝗱 foreigners -x";
              _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'text': _0x19aaeb,
                'mentions': _0x4cf340
              }, {
                'quoted': _0x1d8ddf
              });
            } else if (_0xacd495[0x0] == '-x') {
              setTimeout(() => {
                _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                  'text': "𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇 𝘄𝗶𝗹𝗹 𝗻𝗼𝘄 𝗿𝗲𝗺𝗼𝘃𝗲 𝗮𝗹𝗹 " + _0x4cf340.length + " 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀 𝗳𝗿𝗼𝗺 𝘁𝗵𝗶𝘀 𝗴𝗿𝗼𝘂𝗽 𝗰𝗵𝗮𝘁 𝗶𝗻 𝘁𝗵𝗲 𝗻𝗲𝘅𝘁 𝘀𝗲𝗰𝗼𝗻𝗱.\n\n𝗚𝗼𝗼𝗱 𝗯𝘆𝗲 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀. 𝗧𝗵𝗶𝘀 𝗽𝗿𝗼𝗰𝗲𝘀𝘀 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗲 𝘁𝗲𝗿𝗺𝗶𝗻𝗮𝘁𝗲𝗱⚠️"
                }, {
                  'quoted': _0x1d8ddf
                });
                setTimeout(() => {
                  _0x318ec6.groupParticipantsUpdate(_0x1d8ddf.chat, _0x4cf340, "remove");
                  setTimeout(() => {
                    _0x1d8ddf.reply("𝗔𝗻𝘆 𝗿𝗲𝗺𝗮𝗶𝗻𝗶𝗻𝗴 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿 ?🌚.");
                  }, 0x3e8);
                }, 0x3e8);
              }, 0x3e8);
            }
          }
          break;
        case "dalle":
        case 'createimage':
          {
            if (!_0x5280ae) {
              return _0x1d8ddf.reply("*This command generates images from text prompts*\n\n*𝙴xample usage*\n*" + (prefix + _0x2b2e26) + " Beautiful anime girl*\n*" + (prefix + _0x2b2e26) + " girl in pink dress*");
            }
            try {
              _0x1d8ddf.reply("Please wait, i am generating your image...");
              const _0x2e6309 = "https://cute-tan-gorilla-yoke.cyclic.app/imagine?text=" + encodeURIComponent(_0x5280ae);
              const _0x1161f7 = await fetch(_0x2e6309);
              if (_0x1161f7.ok) {
                const _0x3c5b1a = await _0x1161f7.buffer();
                await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                  'image': _0x3c5b1a
                }, {
                  'quoted': _0x1d8ddf
                });
              } else {
                throw "*Aarrhhhg Image generation failed*";
              }
            } catch {
              _0x1d8ddf.reply("Oops! Something went wrong while generating your image. Please try again later.");
            }
          }
          break;
        case 'ai':
          {
            const {
              GoogleGenerativeAI: _0x4d784f
            } = require("@google/generative-ai");
            const _0x3d02b3 = require("axios");
            try {
              if (!_0x1d8ddf.quoted) {
                return _0x1d8ddf.reply("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵!");
              }
              if (!_0x5280ae) {
                return _0x1d8ddf.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝘀𝗼𝗺𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵! 𝗧𝗵𝗶𝘀 𝗶𝘀 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗔𝗶, 𝘂𝘀𝗶𝗻𝗴 𝗴𝗲𝗺𝗶𝗻𝗶-𝗽𝗿𝗼-𝘃𝗶𝘀𝗶𝗼𝗻 𝘁𝗼 𝗮𝗻𝗮𝗹𝘆𝘀𝗲 𝗶𝗺𝗮𝗴𝗲𝘀.");
              }
              if (!/image/.test(_0x1dad43)) {
                return _0x1d8ddf.reply("𝗛𝘂𝗵 𝘁𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲! 𝗣𝗹𝗲𝗮𝘀𝗲 𝗧𝗮𝗴 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵 !");
              }
              let _0x32021d = await _0x318ec6.downloadAndSaveMediaMessage(_0x1d8ddf.quoted);
              let _0x1a8bbe = await uploadtoimgur(_0x32021d);
              _0x1d8ddf.reply("𝗔 𝗺𝗼𝗺𝗲𝘁, 𝗹𝗲𝗺𝗺𝗲 𝗮𝗻𝗮𝗹𝘆𝘀𝗲 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝗼𝗳 𝘁𝗵𝗲 𝗜𝗺𝗮𝗴𝗲...");
              const _0x5ac103 = new _0x4d784f("AIzaSyDJUtskTG-MvQdlT4tNE319zBqLMFei8nQ");
              async function _0xcd6fa5(_0x28b30b, _0x37c1b3) {
                const _0x1e6248 = {
                  'responseType': "arraybuffer"
                };
                const _0x53aaab = await _0x3d02b3.get(_0x28b30b, _0x1e6248);
                const _0x5308cd = Buffer.from(_0x53aaab.data).toString("base64");
                const _0x54596c = {
                  'data': _0x5308cd,
                  'mimeType': _0x37c1b3
                };
                const _0x32bb01 = {
                  'inlineData': _0x54596c
                };
                return _0x32bb01;
              }
              const _0x49c41f = {
                'model': "gemini-1.5-flash"
              };
              const _0x48fddb = _0x5ac103.getGenerativeModel(_0x49c41f);
              const _0x397a78 = [await _0xcd6fa5(_0x1a8bbe, "image/jpeg")];
              const _0x41b624 = await _0x48fddb.generateContent([_0x5280ae, ..._0x397a78]);
              const _0x2139cb = await _0x41b624.response;
              const _0x5acc45 = _0x2139cb.text();
              await _0x1d8ddf.reply(_0x5acc45);
            } catch (_0x477a42) {
              _0x1d8ddf.reply("I am unable to analyze images at the moment\n" + _0x477a42);
            }
          }
          break;
        case "ai2":
          {
            try {
              if (!_0x1d8ddf.quoted) {
                return _0x1d8ddf.reply("Send the image then tag it with the instruction.");
              }
              if (!_0x5280ae) {
                return _0x1d8ddf.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝘀𝗼𝗺𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵! 𝗧𝗵𝗶𝘀 Viniziaz AI 𝗨𝘀𝗲 𝗚𝗲𝗺𝗶𝗻𝗶-𝗽𝗿𝗼-𝘃𝗶𝘀𝗶𝗼𝗻 𝘁𝗼 𝗮𝗻𝗮𝗹𝘆𝘀𝗲 𝗶𝗺𝗮𝗴𝗲𝘀.");
              }
              if (!/image/.test(_0x1dad43)) {
                return _0x1d8ddf.reply("That is not an image, try again while quoting an actual image.");
              }
              let _0x5cc9cd = await _0x318ec6.downloadAndSaveMediaMessage(_0x1d8ddf.quoted);
              let _0x3928be = await uploadtoimgur(_0x5cc9cd);
              _0x1d8ddf.reply("𝗔 𝗠𝗼𝗺𝗲𝗻𝘁, 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗[𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗔𝗜] 𝗶𝘀 𝗮𝗻𝗮𝗹𝘆𝘇𝗶𝗻𝗴 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝗼𝗳 𝘁𝗵𝗲 𝗶𝗺𝗮𝗴𝗲. . .");
              const _0x2ecad8 = await fetchJson("https://api.dreaded.site/api/gemini-vision?url=" + _0x3928be + "&instruction=" + _0x5280ae);
              let _0xe1d3ab = _0x2ecad8.result;
              await _0x1d8ddf.reply(_0xe1d3ab);
            } catch (_0x4e18b9) {
              _0x1d8ddf.reply("I am unable to analyze images at the moment\n" + _0x4e18b9);
            }
          }
          break;
        case 'vision':
          {
            if (!_0x3c8de7 || !_0x5280ae) {
              _0x1d8ddf.reply("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝗮𝗻𝗱 𝗴𝗶𝘃𝗲 𝘀𝗼𝗺𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵. 𝗜'𝗺 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭 𝗔𝗶, 𝗶 𝘂𝘀𝗲 𝗕𝗮𝗿𝗱 𝘁𝗼 𝗮𝗻𝗮𝗹𝘆𝘇𝗲 𝗶𝗺𝗮𝗴𝗲𝘀.");
              return;
            }
            ;
            let _0x32f0bd;
            if (_0x3c8de7.imageMessage) {
              _0x32f0bd = _0x3c8de7.imageMessage;
            } else {
              _0x1d8ddf.reply("𝗛𝘂𝗵, 𝗧𝗵𝗮𝘁'𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲, 𝗦𝗲𝗻𝗱 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘁𝗵𝗲𝗻 𝘁𝗮𝗴 𝗶𝘁 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 !");
              return;
            }
            ;
            try {
              let _0x177e64 = await _0x318ec6.downloadAndSaveMediaMessage(_0x32f0bd);
              let _0x3fb039 = await uploadtoimgur(_0x177e64);
              _0x1d8ddf.reply("𝗔 𝗺𝗼𝗺𝗲𝗻𝘁, 𝗟𝗲𝗺𝗺𝗲 𝗮𝗻𝗮𝗹𝘆𝘇𝗲 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝗼𝗳 𝘁𝗵𝗲 𝗶𝗺𝗮𝗴𝗲. . .");
              let _0x569698 = await (await fetch('https://bk9.fun/ai/geminiimg?url=' + _0x3fb039 + "&q=" + _0x5280ae)).json();
              const _0x17a118 = {
                'text': _0x569698.BK9
              };
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, _0x17a118, {
                'quoted': _0x1d8ddf
              });
            } catch (_0x31b322) {
              _0x1d8ddf.reply("An error occured\n" + _0x31b322);
            }
          }
          break;
        case "remini":
          {
            if (!_0x58ce36) {
              return _0x87f3c4("𝗪𝗵𝗲𝗿𝗲 𝗶𝘀 𝘁𝗵𝗲 𝗶𝗺𝗮𝗴𝗲 ?");
            }
            if (!/image/.test(_0x1dad43)) {
              return _0x87f3c4("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝗰𝗮𝗽𝘁𝗶𝗼𝗻𝘀 " + (prefix + _0x2b2e26));
            }
            const {
              remini: _0x5e21f4
            } = require("./lib/remini");
            let _0x3645b2 = await _0x58ce36.download();
            let _0x2f4fda = await _0x5e21f4(_0x3645b2, "enhance");
            _0x318ec6.sendMessage(_0x1d8ddf.chat, {
              'image': _0x2f4fda,
              'caption': "𝗚𝗲𝗻𝗲𝗿𝗮𝘁𝗲𝗱 𝗯𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
            }, {
              'quoted': _0x1d8ddf
            });
          }
          break;
        case "kill2":
        case 'kickall2':
        case "terminate":
          {
            if (!_0x3cd2e7) {
              throw NotOwner;
            }
            if (!_0x5280ae) {
              return _0x1d8ddf.reply("Provide a valid group link. Ensure the bot is in that group with admin privileges !");
            }
            let _0x402275;
            let _0xb7625e;
            try {
              let _0x536df2 = _0xacd495[0x0].split("https://chat.whatsapp.com/")[0x1];
              const _0x37151f = await _0x318ec6.groupGetInviteInfo(_0x536df2);
              ({
                id: _0x402275,
                subject: _0xb7625e
              } = _0x37151f);
            } catch (_0x3ba933) {
              _0x1d8ddf.reply("Why are you giving me an invalid group link?");
              return;
            }
            try {
              const _0x2e4b75 = await _0x318ec6.groupMetadata(_0x402275);
              const _0x1a8e42 = await _0x2e4b75.participants;
              let _0x526a85 = _0x1a8e42.filter(_0x1dd80f => _0x1dd80f.id !== _0x318ec6.decodeJid(_0x318ec6.user.id)).map(_0x5a8031 => _0x5a8031.id);
              await _0x1d8ddf.reply("☠️Initializing and Preparing to kill☠️ " + _0xb7625e);
              await _0x318ec6.groupSettingUpdate(_0x402275, "announcement");
              await _0x318ec6.removeProfilePicture(_0x402275);
              await _0x318ec6.groupUpdateSubject(_0x402275, "𝗧𝗵𝗶𝘀 𝗴𝗿𝗼𝘂𝗽 𝗶𝘀 𝗻𝗼 𝗹𝗼𝗻𝗴𝗲𝗿 𝗮𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 🚫");
              await _0x318ec6.groupUpdateDescription(_0x402275, "//𝗕𝘆 𝘁𝗵𝗲 𝗼𝗿𝗱𝗲𝗿 𝗼𝗳 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭 𝗗𝗲𝘃 !");
              await _0x318ec6.groupRevokeInvite(_0x402275);
              await _0x318ec6.sendMessage(_0x402275, {
                'text': "At this time, My owner has initiated kill command remotely.\nThis has triggered me to remove all " + _0x526a85.length + " group participants in the next second.\n\nGoodbye Everyone! 👋\n\n⚠️THIS PROCESS CANNOT BE TERMINATED⚠️",
                'mentions': _0x1a8e42.map(_0x2c7e6c => _0x2c7e6c.id)
              });
              await _0x318ec6.groupParticipantsUpdate(_0x402275, _0x526a85, 'remove');
              const _0x5185a8 = {
                'text': "Goodbye Group owner👋\nIt's too cold in Here🥶"
              };
              await _0x318ec6.sendMessage(_0x402275, _0x5185a8);
              await _0x318ec6.groupLeave(_0x402275);
              await _0x1d8ddf.reply("```𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍 𝑲𝒊𝒍𝒍𝒆𝒅 𝒃𝒚 VINIZIAZ-𝑿𝑴𝑫💀```");
            } catch (_0x3c0ea8) {
              _0x1d8ddf.reply("```Kill command failed, bot is either not in that group, or not an admin```.");
            }
          }
          break;
        case "carbon":
          {
            const _0x3702d6 = require("node-fetch");
            let _0x3d718e = "𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗗 𝗕𝗬 " + botname;
            if (_0x1d8ddf.quoted && _0x1d8ddf.quoted.text) {
              const _0x5b4dd9 = _0x1d8ddf.quoted.text;
              try {
                let _0x3224cb = await _0x3702d6("https://carbonara.solopov.dev/api/cook", {
                  'method': 'POST',
                  'headers': {
                    'Content-Type': "application/json"
                  },
                  'body': JSON.stringify({
                    'code': _0x5b4dd9,
                    'backgroundColor': "#1F816D"
                  })
                });
                if (!_0x3224cb.ok) {
                  return _0x1d8ddf.reply("API failed to fetch a valid response.");
                }
                let _0x576c0a = await _0x3224cb.buffer();
                await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                  'image': _0x576c0a,
                  'caption': _0x3d718e
                }, {
                  'quoted': _0x1d8ddf
                });
              } catch (_0x423016) {
                _0x1d8ddf.reply("An error occured\n" + _0x423016);
              }
            } else {
              _0x1d8ddf.reply("Quote a code message");
            }
          }
          break;
        case 'define':
          {
            try {
              if (!_0x5280ae) {
                return _0x1d8ddf.reply("Please provide a word.");
              }
              const _0x1095e2 = encodeURIComponent(_0x5280ae);
              const _0x3b5577 = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + _0x1095e2);
              if (!_0x3b5577.ok) {
                return _0x1d8ddf.reply("Failed to fetch data. Please try again later.");
              }
              const _0xfa587f = await _0x3b5577.json();
              if (!_0xfa587f || !_0xfa587f[0x0] || !_0xfa587f[0x0].meanings || _0xfa587f[0x0].meanings.length === 0x0) {
                return _0x1d8ddf.reply("No definitions found for the provided word.");
              }
              const _0x46b09b = _0xfa587f[0x0];
              const _0x1b5c18 = _0x46b09b.meanings[0x0].definitions[0x0].definition;
              const _0x92ae50 = '' + _0x1b5c18;
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'text': _0x92ae50
              }, {
                'quoted': _0x1d8ddf
              });
            } catch (_0x4cc377) {
              console.error("Error occurred:", _0x4cc377);
              _0x1d8ddf.reply("An error occurred while fetching the data. Please try again later.\n" + _0x4cc377);
            }
          }
          break;
        case 'tweet':
          {
            if (!_0x5280ae) {
              return _0x1d8ddf.reply("provide some text for the tweet");
            }
            const _0x2830ce = _0x1d8ddf.sender.split('@')[0x0];
            const _0x45e78e = await _0x318ec6.profilePictureUrl(_0x1d8ddf.sender, 'image')['catch'](_0x333ffa => "https://i.imgur.com/vuxJCTB.jpeg");
            const _0x3c760e = 'https://some-random-api.com/canvas/misc/tweet?displayname=' + encodeURIComponent(_0x215155) + "&username=" + encodeURIComponent(_0x2830ce) + "&avatar=" + encodeURIComponent(_0x45e78e) + "&comment=" + encodeURIComponent(_0x5280ae) + "&replies=" + encodeURIComponent("246") + "&retweets=" + encodeURIComponent('125') + "&theme=" + encodeURIComponent("dark");
            await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
              'image': {
                'url': _0x3c760e
              },
              'caption': "𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗲𝗱 𝗯𝘆 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧"
            }, {
              'quoted': _0x1d8ddf
            });
          }
          break;
        case "pickupline":
          {
            try {
              const _0x3b0af8 = await fetch("https://api.popcat.xyz/pickuplines");
              if (!_0x3b0af8.ok) {
                throw new Error("Failed to fetch data");
              }
              const {
                pickupline: _0xa880c8
              } = await _0x3b0af8.json();
              const _0x14cf41 = '' + _0xa880c8;
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'text': _0x14cf41
              }, {
                'quoted': _0x1d8ddf
              });
            } catch (_0x3b50a7) {
              console.error("Error fetching data:", _0x3b50a7);
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'text': "An error occurred while fetching the fact."
              }, {
                'quoted': _0x1d8ddf
              });
            }
          }
          break;
        case "quotes":
          {
            try {
              const _0x1da161 = await fetch('https://favqs.com/api/qotd');
              if (!_0x1da161.ok) {
                throw new Error("Failed to fetch data");
              }
              const {
                quote: _0x588d9b
              } = await _0x1da161.json();
              const _0x47aef6 = _0x588d9b.body + " \n\n𝗤𝘂𝗼𝘁𝗲 𝗕𝘆 " + _0x588d9b.author;
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'text': _0x47aef6
              }, {
                'quoted': _0x1d8ddf
              });
            } catch (_0x9de436) {
              console.error("Error fetching data:", _0x9de436);
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'text': "An error occurred while fetching the fact."
              }, {
                'quoted': _0x1d8ddf
              });
            }
          }
          break;
        case 'google':
          {
            const _0x3deeb1 = require('axios');
            if (!_0x5280ae) {
              _0x1d8ddf.reply("Provide a search term!\nEg: .Google What is treason");
              return;
            }
            let {
              data: _0x4d5e52
            } = await _0x3deeb1.get("https://www.googleapis.com/customsearch/v1?q=" + _0x5280ae + "&key=AIzaSyDMbI3nvmQUrfjoCJYLS69Lej1hSXQjnWI&cx=baf9bdb0c631236e5");
            if (_0x4d5e52.items.length == 0x0) {
              _0x1d8ddf.reply("❌ Unable to find a result");
              return;
            }
            let _0x525331 = "SEARCH FROM GOOGLE\n🔍 Term:- " + _0x5280ae + "\n\n";
            for (let _0x435281 = 0x0; _0x435281 < _0x4d5e52.items.length; _0x435281++) {
              _0x525331 += "🪧 Title:- " + _0x4d5e52.items[_0x435281].title + "\n🖥 Description:- " + _0x4d5e52.items[_0x435281].snippet + "\n🌐 Link:- " + _0x4d5e52.items[_0x435281].link + "\n\n";
            }
            _0x1d8ddf.reply(_0x525331);
          }
          break;
        case "hack":
          {
            if (!_0x3cd2e7) {
              throw NotOwner;
            }
            try {
              const _0x5c39f2 = ["⚠️𝗜𝗻𝗶𝘁𝗶𝗹𝗶𝗮𝘇𝗶𝗻𝗴 𝗛𝗮𝗰𝗸𝗶𝗻𝗴 𝗧𝗼𝗼𝗹𝘀⚠️", "𝗜𝗻𝗷𝗲𝗰𝘁𝗶𝗻𝗴 𝗠𝗮𝗹𝘄𝗮𝗿𝗲🐛..\n𝗟𝗼𝗮𝗱𝗶𝗻𝗴 𝗗𝗲𝘃𝗶𝗰𝗲 𝗚𝗮𝗹𝗹𝗲𝗿𝘆 𝗙𝗶𝗹𝗲𝘀⚠️", "```██ 10%``` ⏳", "```████ 20%``` ⏳", "```██████ 30%``` ⏳", "```████████ 40%``` ⏳", "```██████████ 50%``` ⏳", "```████████████ 60%``` ⏳", "```██████████████ 70%``` ⏳", "```████████████████ 80%``` ⏳", "```██████████████████ 90%``` ⏳", "```████████████████████ 100%``` ✅", "```𝗦𝘆𝘀𝘁𝗲𝗺 𝗛𝘆𝗷𝗮𝗰𝗸𝗶𝗻𝗴 𝗼𝗻 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...```\n```𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗶𝗻𝗴 𝘁𝗼 𝘁𝗵𝗲 𝗦𝗲𝗿𝘃𝗲𝗿 𝘁𝗼 𝗙𝗶𝗻𝗱 𝗘𝗿𝗿𝗼𝗿 404```", "```𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 𝘁𝗼 𝗗𝗲𝘃𝗶𝗰𝗲...\n𝗥𝗲𝗰𝗲𝗶𝘃𝗶𝗻𝗴 𝗗𝗮𝘁𝗮/𝗦𝗲𝗰𝗿𝗲𝘁 𝗣𝗮𝘀𝘀𝘄𝗼𝗿𝗱𝘀...```", "```𝗗𝗮𝘁𝗮 𝗧𝗿𝗮𝗻𝘀𝗳𝗲𝗿𝗲𝗱 𝗙𝗿𝗼𝗺 𝗱𝗲𝘃𝗶𝗰𝗲 100% 𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗲𝗱\n𝗘𝗿𝗮𝘀𝗶𝗻𝗴 𝗮𝗹𝗹 𝗘𝘃𝗶𝗱𝗲𝗻𝗰𝗲, 𝗞𝗶𝗹𝗹𝗶𝗻𝗴 𝗮𝗹𝗹 𝗠𝗮𝗹𝘄𝗮𝗿𝗲𝘀🐛...```", "```𝗦𝗘𝗡𝗗𝗜𝗡𝗗 𝗟𝗢𝗚 𝗗𝗢𝗖𝗨𝗠𝗘𝗡𝗧𝗦...```", "```𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗦𝗲𝗻𝘁 𝗗𝗮𝘁𝗮 𝗔𝗻𝗱 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗶𝗼𝗻 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗗𝗶𝘀𝗰𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱```", "```𝗔𝗹𝗹 𝗕𝗮𝗰𝗸𝗹𝗼𝗴𝘀 𝗖𝗹𝗲𝗮𝗿𝗲𝗱 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆💣\n𝗬𝗼𝘂𝗿 𝗦𝘆𝘀𝘁𝗲𝗺 𝗪𝗶𝗹𝗹 𝗕𝗲 𝗗𝗼𝘄𝗻 𝗜𝗻 𝗧𝗵𝗲 𝗡𝗲𝘅𝘁 𝗠𝗶𝗻𝘂𝘁𝗲⚠️```"];
              for (const _0x672c9a of _0x5c39f2) {
                await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                  'text': _0x672c9a
                }, {
                  'quoted': _0x1d8ddf
                });
                await new Promise(_0xf1a9c8 => setTimeout(_0xf1a9c8, 0x3e8));
              }
            } catch (_0x38dbe5) {
              console.error("Error during prank:", _0x38dbe5);
              _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'text': "❌ *Error!* Something went wrong. Reason: " + _0x38dbe5.message + ". Please try again later."
              });
            }
          }
          break;
        case 'compile-py':
          if (!_0x5280ae && !_0x1d8ddf.quoted) {
            throw "Quote/tag a python code to compile.";
          }
          const _0x28e147 = _0x1d8ddf.quoted ? _0x1d8ddf.quoted.text ? _0x1d8ddf.quoted.text : _0x5280ae ? _0x5280ae : _0x1d8ddf.text : _0x1d8ddf.text;
          let _0x37b21b = python.runSource(_0x28e147);
          _0x37b21b.then(_0x6560ac => {
            console.log(_0x6560ac);
            _0x87f3c4(_0x6560ac.stdout);
            _0x87f3c4(_0x6560ac.stderr);
          })["catch"](_0x165f4d => {
            console.log(resultt.stderr);
            _0x87f3c4(resultt.stderr);
          });
          break;
        case 'save':
          {
            const _0x26d444 = _0x1d8ddf.text.toLowerCase();
            const _0xa6929b = _0x1d8ddf.msg?.["contextInfo"]?.['quotedMessage'];
            if (_0xa6929b && _0x26d444.startsWith(prefix + "save") && !_0x1d8ddf.quoted.chat.includes("status@broadcast")) {
              return _0x1d8ddf.reply("You did not tag a status media to save.");
            }
            if (_0x3cd2e7 && _0xa6929b && _0x26d444.startsWith(prefix + "save") && _0x1d8ddf.quoted.chat.includes("status@broadcast")) {
              if (_0xa6929b.imageMessage) {
                let _0x31a39a = _0xa6929b.imageMessage.caption;
                let _0x1a61f7 = await _0x318ec6.downloadAndSaveMediaMessage(_0xa6929b.imageMessage);
                _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                  'image': {
                    'url': _0x1a61f7
                  },
                  'caption': _0x31a39a
                });
              }
              if (_0xa6929b.videoMessage) {
                let _0x5e2007 = _0xa6929b.videoMessage.caption;
                let _0x3868c6 = await _0x318ec6.downloadAndSaveMediaMessage(_0xa6929b.videoMessage);
                _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                  'video': {
                    'url': _0x3868c6
                  },
                  'caption': _0x5e2007
                });
              }
            }
          }
          break;
        case "gitclone":
          {
            if (!_0x5280ae) {
              return _0x1d8ddf.reply("Where is the link?");
            }
            if (!_0x5280ae.includes("github.com")) {
              return _0x1d8ddf.reply("Is that a GitHub repo link ?!");
            }
            let _0x428a25 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
            let [, _0x39eb9b, _0x441925] = _0x5280ae.match(_0x428a25) || [];
            _0x441925 = _0x441925.replace(/.git$/, '');
            let _0x271baf = "https://api.github.com/repos/" + _0x39eb9b + '/' + _0x441925 + "/zipball";
            let _0x4105d5 = (await fetch(_0x271baf, {
              'method': "HEAD"
            })).headers.get("content-disposition").match(/attachment; filename=(.*)/)[0x1];
            await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
              'document': {
                'url': _0x271baf
              },
              'fileName': _0x4105d5 + '.zip',
              'mimetype': "application/zip"
            }, {
              'quoted': _0x1d8ddf
            })["catch"](_0x4f4f4c => _0x1d8ddf.reply('error'));
          }
          break;
        case "darkgpt":
          {
            if (!_0x5280ae) {
              return _0x1d8ddf.reply("Hey there Fuckface😈, I'm Darkgpt, I respond to anything be it harmful, I'm a pure Evil👿, What sort of dark and delightful nonsense do you want to dive into Today😈 ?");
            }
            try {
              const _0x13302c = await fetchJson("https://api.dreaded.site/api/makgpt?text=" + _0x5280ae);
              if (_0x13302c && _0x13302c.result) {
                const _0x3bbbea = _0x13302c.result;
                await _0x1d8ddf.reply(_0x3bbbea);
              } else {
                _0x1d8ddf.reply("Huh, the silence is deafening, no response whatsoever💀.The API seems to have vanished into the abyss...😔");
              }
            } catch (_0x5ee4e5) {
              _0x87f3c4("An error occured while communicating with the APIs\n" + _0x5ee4e5);
            }
          }
          break;
        case "github":
          {
            if (!_0x5280ae) {
              return _0x1d8ddf.reply("Provide a github username to stalk");
            }
            try {
              const _0x104ae7 = await fetch("https://itzpire.com/stalk/github-user?username=" + _0x5280ae);
              const _0x214ee7 = await _0x104ae7.json();
              const _0x38a27c = _0x214ee7.data.username;
              const _0x1ad674 = _0x214ee7.data.nickname;
              const _0x535b6a = _0x214ee7.data.bio;
              const _0x113c62 = _0x214ee7.data.profile_pic;
              const _0x36ac8b = _0x214ee7.data.url;
              const _0x37ea0e = _0x214ee7.data.location;
              const _0x17b199 = _0x214ee7.data.public_repo;
              const _0x488704 = _0x214ee7.data.followers;
              const _0x1d2579 = _0x214ee7.data.following;
              const _0x2ee6a2 = _0x214ee7.data.ceated_at;
              const _0x5bfed5 = "Username:- " + _0x38a27c + "\n\nNickname:- " + _0x1ad674 + "\n\nBio:- " + _0x535b6a + "\n\nLink:- " + _0x36ac8b + "\n\nLocation:- " + _0x37ea0e + "\n\nFollowers:- " + _0x488704 + "\n\nFollowing:- " + _0x1d2579 + "\n\nRepos:- " + _0x17b199 + "\n\nCreated:- " + _0x2ee6a2;
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'image': {
                  'url': _0x113c62
                },
                'caption': _0x5bfed5
              }, {
                'quoted': _0x1d8ddf
              });
            } catch (_0xda7fa1) {
              _0x1d8ddf.reply("Unable to fetch data\n" + _0xda7fa1);
            }
          }
          break;
        case "screenshot":
        case 'ss':
          {
            try {
              let _0x4bb39b = "𝗦𝗰𝗿𝗲𝗲𝗻𝘀𝗵𝗼𝘁 𝗯𝘆 " + botname;
              if (!_0x5280ae) {
                return _0x1d8ddf.reply("Provide a website link to screenshot.");
              }
              const _0x4d8a0b = 'https://image.thum.io/get/fullpage/' + _0x5280ae;
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'image': {
                  'url': _0x4d8a0b
                },
                'caption': _0x4bb39b
              }, {
                'quoted': _0x1d8ddf
              });
            } catch (_0x1b8ec5) {
              _0x1d8ddf.reply("An error occured.");
            }
          }
          break;
        case "alive":
        case "test":
          {
            const _0x3fcdda = {
              'audio': {
                'url': "./Media/alive.mp3"
              },
              'mimetype': "audio/mp4",
              'ptt': true,
              'waveform': [0x64, 0x0, 0x64, 0x0, 0x64, 0x0, 0x64],
              'fileName': "𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇",
              'contextInfo': {
                'mentionedJid': [_0x1d8ddf.sender],
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
            await _0x318ec6.sendMessage(_0x1d8ddf.chat, _0x3fcdda, {
              'quoted': _0x1d8ddf
            });
          }
          break;
        case "removebg":
          {
            try {
              if (!_0x1d8ddf.quoted) {
                return _0x1d8ddf.reply("Send the image then tag it with the command.");
              }
              if (!/image/.test(_0x1dad43)) {
                return _0x1d8ddf.reply("That is not an image, try again while quoting an actual image.");
              }
              let _0x213f62 = await _0x318ec6.downloadAndSaveMediaMessage(_0x1d8ddf.quoted);
              let _0x287f23 = await uploadtoimgur(_0x213f62);
              _0x1d8ddf.reply("𝗔 𝗺𝗼𝗺𝗲𝗻𝘁, 𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇 𝗶𝘀 𝗲𝗿𝗮𝘀𝗶𝗻𝗴 𝘁𝗵𝗲 𝗯𝗮𝗰𝗸𝗴𝗿𝗼𝘂𝗻𝗱. . .");
              const _0x2dd629 = 'https://api.dreaded.site/api/removebg?imageurl=' + _0x287f23;
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'image': {
                  'url': _0x2dd629
                },
                'caption': "𝗘𝗱𝗶𝘁𝗲𝗱 𝗯𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0x1d8ddf
              });
            } catch (_0x15c90e) {
              _0x1d8ddf.reply("An error occured...");
            }
          }
          break;
        case "fact":
          {
            try {
              const _0x52eb3a = await fetchJson('https://api.dreaded.site/api/fact');
              const _0x2f1b33 = _0x52eb3a.fact;
              await _0x1d8ddf.reply(_0x2f1b33);
            } catch (_0x14a4e6) {
              _0x1d8ddf.reply("Something is wrong.");
            }
          }
          break;
        case 'catfact':
          {
            try {
              const _0x350783 = await fetchJson("https://api.dreaded.site/api/catfact");
              const _0x326b01 = _0x350783.fact;
              await _0x1d8ddf.reply(_0x326b01);
            } catch (_0xd35e89) {
              _0x1d8ddf.reply("Something is wrong.");
            }
          }
          break;
        case "tts":
        case "say":
          {
            const _0x1f763e = require("google-tts-api");
            if (!_0x5280ae) {
              return _0x1d8ddf.reply("Povide a text for conversion !");
            }
            const _0x51398c = _0x1f763e.getAudioUrl(_0x5280ae, {
              'lang': "hi-IN",
              'slow': false,
              'host': "https://translate.google.com"
            });
            _0x318ec6.sendMessage(_0x1d8ddf.chat, {
              'audio': {
                'url': _0x51398c
              },
              'mimetype': "audio/mp4",
              'ptt': true
            }, {
              'quoted': _0x1d8ddf
            });
          }
          break;
        case "gpt":
          {
            if (!_0x5280ae) {
              return _0x87f3c4("Hello there, what's your question?");
            }
            let _0x255474 = await fetchJson("https://bk9.fun/ai/jeeves-chat2?q=" + _0x5280ae);
            if (!_0x255474.BK9) {
              return _0x87f3c4("An error occurred while fetching the AI chatbot response. Please try again later.");
            } else {
              _0x87f3c4(_0x255474.BK9);
            }
          }
          break;
        case "weather":
          {
            try {
              if (!_0x5280ae) {
                return _0x1d8ddf.reply("provide a city/town name");
              }
              const _0x4c7f04 = await fetch("http://api.openweathermap.org/data/2.5/weather?q=" + _0x5280ae + "&units=metric&appid=1ad47ec6172f19dfaf89eb3307f74785");
              const _0x59a111 = await _0x4c7f04.json();
              console.log("Weather data:", _0x59a111);
              const _0x641c53 = _0x59a111.name;
              const _0x10fc95 = _0x59a111.main.temp;
              const _0x5420ea = _0x59a111.weather[0x0].description;
              const _0x5e5371 = _0x59a111.main.humidity;
              const _0x1d8cea = _0x59a111.wind.speed;
              const _0x48b808 = _0x59a111.rain ? _0x59a111.rain['1h'] : 0x0;
              const _0x4d8693 = _0x59a111.clouds.all;
              const _0x1137ed = new Date(_0x59a111.sys.sunrise * 0x3e8);
              const _0x90870 = new Date(_0x59a111.sys.sunset * 0x3e8);
              await _0x1d8ddf.reply("❄️ Weather in " + _0x641c53 + "\n\n🌡️ Temperature: " + _0x10fc95 + "°C\n📝 Description: " + _0x5420ea + "\n❄️ Humidity: " + _0x5e5371 + "%\n🌀 Wind Speed: " + _0x1d8cea + " m/s\n🌧️ Rain Volume (last hour): " + _0x48b808 + " mm\n☁️ Cloudiness: " + _0x4d8693 + "%\n🌄 Sunrise: " + _0x1137ed.toLocaleTimeString() + "\n🌅 Sunset: " + _0x90870.toLocaleTimeString());
            } catch (_0x220c45) {
              _0x1d8ddf.reply("Unable to find that location.");
            }
          }
          break;
        case "compile-js":
          if (!_0x5280ae && !_0x1d8ddf.quoted) {
            throw "Quote/tag a Js code to compile.";
          }
          const _0xbc8028 = _0x1d8ddf.quoted ? _0x1d8ddf.quoted.text ? _0x1d8ddf.quoted.text : _0x5280ae ? _0x5280ae : _0x1d8ddf.text : _0x1d8ddf.text;
          let _0x1b21ba = node.runSource(_0xbc8028);
          _0x1b21ba.then(_0xf839e5 => {
            console.log(_0xf839e5);
            _0x87f3c4(_0xf839e5.stdout);
            _0x87f3c4(_0xf839e5.stderr);
          })["catch"](_0x421bd7 => {
            console.log(resultt1.stderr);
            _0x87f3c4(resultt1.stderr);
          });
          break;
        case "quotely":
          {
            try {
              if (!_0x1d8ddf.quoted.text) {
                throw "qoute a text";
              }
              let _0x3ecd16 = _0x1d8ddf.quoted.text;
              const {
                quote: _0x7eed0e
              } = require("./lib/viniziazquotely.js");
              let _0x3b959d = await _0x318ec6.profilePictureUrl(_0x1d8ddf.sender, "image")["catch"](_0x4cd07d => "https://telegra.ph/file/75272825615a4dcb69526.png");
              const _0x5504c7 = await _0x7eed0e(_0x3ecd16, _0x215155, _0x3b959d);
              _0x318ec6.sendImageAsSticker(_0x1d8ddf.chat, _0x5504c7.result, _0x1d8ddf, {
                'packname': _0x215155,
                'author': "VINIZIAZ-XMD"
              });
            } catch (_0x3c45c7) {
              await _0x87f3c4("Qoute some text for quotely");
            }
          }
          break;
        case "fullpp":
          {
            if (!_0x3cd2e7) {
              throw NotOwner;
            }
            const {
              S_WHATSAPP_NET: _0x2f1907
            } = require('@whiskeysockets/baileys');
            try {
              const _0x7af78e = require('fs');
              if (!_0x3c8de7) {
                _0x1d8ddf.reply("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲...");
                return;
              }
              ;
              let _0x452509;
              if (_0x3c8de7.imageMessage) {
                _0x452509 = _0x3c8de7.imageMessage;
              } else {
                _0x1d8ddf.reply("𝗛𝘂𝗵 𝘁𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲...");
                return;
              }
              ;
              var _0x2b4aca = await _0x318ec6.downloadAndSaveMediaMessage(_0x452509);
              var {
                img: _0x245922
              } = await generateProfilePicture(_0x2b4aca);
              _0x318ec6.query({
                'tag': 'iq',
                'attrs': {
                  'target': undefined,
                  'to': _0x2f1907,
                  'type': "set",
                  'xmlns': "w:profile:picture"
                },
                'content': [{
                  'tag': "picture",
                  'attrs': {
                    'type': 'image'
                  },
                  'content': _0x245922
                }]
              });
              _0x7af78e.unlinkSync(_0x2b4aca);
              _0x1d8ddf.reply("𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗽𝗶𝗰𝘁𝘂𝗿𝗲 𝘂𝗽𝗱𝗮𝘁𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆✅");
            } catch (_0x34da63) {
              _0x1d8ddf.reply("An error occured while updating profile photo\n" + _0x34da63);
            }
          }
          break;
        case "upload":
        case "url":
          {
            let _0x4ccc70 = _0x1d8ddf.quoted ? _0x1d8ddf.quoted : _0x1d8ddf;
            let _0x367f92 = (_0x4ccc70.msg || _0x4ccc70).mimetype || '';
            if (!_0x367f92) {
              return _0x1d8ddf.reply("Quote an image or video");
            }
            let _0x212ea7 = await _0x4ccc70.download();
            if (_0x212ea7.length > 10485760) {
              return _0x1d8ddf.reply("Media is too large.");
            }
            let _0x377fd5 = /image\/(png|jpe?g|gif)|video\/mp4/.test(_0x367f92);
            if (_0x377fd5) {
              let _0x2c9220 = await _0x318ec6.downloadAndSaveMediaMessage(_0x4ccc70);
              let _0x14c96a = await uploadtoimgur(_0x2c9220);
              _0x1d8ddf.reply("Media Link:-\n\n" + _0x14c96a);
            } else {
              _0x1d8ddf.reply("Error occured...");
            }
          }
          break;
        case "attp":
          if (!q) {
            return _0x87f3c4("I need text;");
          }
          _0x318ec6.sendMessage(_0x1d8ddf.chat, {
            'sticker': {
              'url': "https://api.lolhuman.xyz/api/attp?apikey=cde5404984da80591a2692b6&text=" + q
            }
          }, {
            'quoted': _0x1d8ddf
          });
          break;
        case "smeme":
          {
            if (!/image/.test(_0x1dad43)) {
              return _0x87f3c4("Quote an image or sticker with the 2 texts separated with |");
            }
            if (!_0x5280ae) {
              return _0x87f3c4("Quote an image or sticker with the 2 texts separated with |");
            }
            atas = _0x5280ae.split('|')[0x0] ? _0x5280ae.split('|')[0x0] : '-';
            bawah = _0x5280ae.split('|')[0x1] ? _0x5280ae.split('|')[0x1] : '-';
            let _0x4eddbe = await _0x318ec6.downloadAndSaveMediaMessage(_0x3bea32);
            let _0x3dead4 = await uploadtoimgur(_0x4eddbe);
            let _0x4d2d7d = "https://api.memegen.link/images/custom/" + encodeURIComponent(bawah) + '/' + encodeURIComponent(atas) + ".png?background=" + _0x3dead4;
            let _0x33b4c0 = await _0x318ec6.sendImageAsSticker(_0x1d8ddf.chat, _0x4d2d7d, _0x1d8ddf, {
              'packname': packname
            });
            fs.unlinkSync(_0x33b4c0);
          }
          break;
        case 'compile-c':
          if (!_0x5280ae && !_0x1d8ddf.quoted) {
            throw "Quote/tag a C code to compile";
          }
          const _0x49c171 = _0x1d8ddf.quoted ? _0x1d8ddf.quoted.text ? _0x1d8ddf.quoted.text : _0x5280ae ? _0x5280ae : _0x1d8ddf.text : _0x1d8ddf.text;
          let _0x3f3e2d = c.runSource(_0x49c171);
          _0x3f3e2d.then(_0x558f71 => {
            console.log(_0x558f71);
            _0x87f3c4(_0x558f71.stdout);
            _0x87f3c4(_0x558f71.stderr);
          })["catch"](_0x4501f1 => {
            console.log(resultt3.stderr);
            _0x87f3c4(resultt3.stderr);
          });
          break;
        case "compile-c++":
          if (!_0x5280ae && !_0x1d8ddf.quoted) {
            throw "Quote/tag a C++ code to compile";
          }
          const _0x4598ff = _0x1d8ddf.quoted ? _0x1d8ddf.quoted.text ? _0x1d8ddf.quoted.text : _0x5280ae ? _0x5280ae : _0x1d8ddf.text : _0x1d8ddf.text;
          let _0x24a2bb = cpp.runSource(_0x4598ff);
          _0x24a2bb.then(_0x5258ec => {
            console.log(_0x5258ec);
            _0x87f3c4(_0x5258ec.stdout);
            _0x87f3c4(_0x5258ec.stderr);
          })['catch'](_0x31409a => {
            console.log(resultt4.stderr);
            _0x87f3c4(resultt4.stderr);
          });
          break;
        case "eval":
          {
            if (!_0x3cd2e7) {
              throw NotOwner;
            }
            if (!_0x5280ae) {
              throw "Provide a valid Bot Baileys Function to evaluate";
            }
            try {
              let _0x1ac4fa = await eval(_0x51c6c4.slice(0x2));
              if (typeof _0x1ac4fa !== "string") {
                _0x1ac4fa = require('util').inspect(_0x1ac4fa);
              }
              await _0x87f3c4(_0x1ac4fa);
            } catch (_0x316a2b) {
              await _0x87f3c4(String(_0x316a2b));
            }
          }
          break;
        case "add":
          if (!_0x5280ae) {
            return _0x87f3c4("provide a number to be added in this format. \n\n add 254704009677");
          }
          if (!_0x1d8ddf.isGroup) {
            throw group;
          }
          if (!_0x5a0801) {
            throw admin;
          }
          if (!_0x1b0633) {
            throw botAdmin;
          }
          await _0x318ec6.groupParticipantsUpdate(_0x1d8ddf.chat, [_0x5280ae], "add");
          _0x87f3c4("succesfully added");
          break;
        case "kill":
        case "kickall":
        case "terminate":
          if (!_0x1d8ddf.isGroup) {
            throw group;
          }
          if (!_0x1b0633) {
            throw "I need admin previlleges to execute this command.";
          }
          if (!_0x3cd2e7) {
            throw "Only Viniziaz owner can use this command😲!";
          }
          let _0x1b6ab8 = _0x211808.filter(_0x1bd4bf => _0x1bd4bf.id != _0x318ec6.decodeJid(_0x318ec6.user.id)).map(_0x348248 => _0x348248.id);
          _0x1d8ddf.reply("⚠️ Initializing Kick-all command💀...");
          setTimeout(() => {
            _0x318ec6.sendMessage(_0x1d8ddf.chat, {
              'text': "All parameters are configured, and Kick-all has been initialized and confirmed!. Now, Raven will remove all " + _0x1b6ab8.length + " group participants in the next second.\n\nGoodbye Everyone! 👋\n\nTHIS PROCESS CANNOT BE TERMINATED💀!"
            }, {
              'quoted': _0x1d8ddf
            });
            setTimeout(() => {
              _0x318ec6.groupParticipantsUpdate(_0x1d8ddf.chat, _0x1b6ab8, "remove");
              setTimeout(() => {
                _0x1d8ddf.reply("Done✅. All group participants have been removed. Do not always use this command to avoid Wa bans!");
              }, 0x3e8);
            }, 0x3e8);
          }, 0x3e8);
          break;
        case "system":
          _0x318ec6.sendMessage(_0x1d8ddf.chat, {
            'image': {
              'url': 'https://i.imgur.com/HP6GyiD.jpeg'
            },
            'caption': "*𝐁𝐎𝐓 𝐍𝐀𝐌𝐄: 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧*\n\n*𝐒𝐏𝐄𝐄𝐃: " + _0x146cfe.toFixed(0x4) + " 𝐌𝐒*\n\n*𝐑𝐔𝐍𝐓𝐈𝐌𝐄: " + runtime(process.uptime()) + "*\n\n*𝐏𝐋𝐀𝐓𝐅𝐎𝐑𝐌: 𝗛𝗲𝗿𝗼𝗸𝘂*\n\n*𝐇𝐎𝐒𝐓𝐍𝐀𝐌𝐄: 𝗥𝗮𝘃𝗲𝗻*\n\n*𝐋𝐈𝐁𝐑𝐀𝐑𝐘: Baileys*\n\n𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑: 𝗡𝗶𝗰𝗸༆"
          });
          break;
        case "vcf":
        case "group-vcf":
          {
            if (!_0x1d8ddf.isGroup) {
              return _0x1d8ddf.reply("Command meant for groups");
            }
            const _0x2aedb5 = require('fs');
            let _0x45f51a = await _0x318ec6.groupMetadata(_0x1d8ddf.chat);
            let _0x194df3 = '';
            let _0x5d6454 = 0x0;
            for (let _0x18ddfc of _0x45f51a.participants) {
              _0x194df3 += "BEGIN:VCARD\nVERSION:3.0\nFN:[" + _0x5d6454++ + "] +" + _0x18ddfc.id.split('@')[0x0] + "\nTEL;type=CELL;type=VOICE;waid=" + _0x18ddfc.id.split('@')[0x0] + ':+' + _0x18ddfc.id.split('@')[0x0] + "\nEND:VCARD\n";
            }
            await _0x1d8ddf.reply("𝗔 𝗺𝗼𝗺𝗲𝗻𝘁, VINIZIAZ-𝐗𝐌𝐃 𝗶𝘀 𝗖𝗼𝗺𝗽𝗶𝗹𝗶𝗻𝗴 " + _0x45f51a.participants.length + " 𝗖𝗼𝗻𝘁𝗮𝗰𝘁𝘀 𝗶𝗻𝘁𝗼 𝗮 𝗩𝗰𝗳...");
            await _0x2aedb5.writeFileSync("./contacts.vcf", _0x194df3.trim());
            await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
              'document': _0x2aedb5.readFileSync("./contacts.vcf"),
              'mimetype': "text/vcard",
              'fileName': "Group contacts.vcf",
              'caption': "VCF for " + _0x45f51a.subject + "\n" + _0x45f51a.participants.length + " contacts"
            }, {
              'ephemeralExpiration': 0x15180,
              'quoted': _0x1d8ddf
            });
            _0x2aedb5.unlinkSync("./contacts.vcf");
          }
          break;
        case "faker":
          if (!_0x1d8ddf.isGroup) {
            throw group;
          }
          if (!_0x1b0633) {
            throw botAdmin;
          }
          if (!_0x5a0801) {
            throw admin;
          }
          let _0x50e106 = _0x211808.filter(_0x1600c5 => !_0x1600c5.admin).map(_0x127e27 => _0x127e27.id).filter(_0x483c30 => _0x483c30.startsWith('1') && _0x483c30 != _0x318ec6.decodeJid(_0x318ec6.user.id));
          if (!_0xacd495 || !_0xacd495[0]) {
            if (_0x50e106.length == 0) {
              return _0x87f3c4("No virtual numbers detected!");
            }
            _0x1d8ddf.reply("Raven has detected " + _0x50e106.length + " members using +1 fake virtual WhatsApp accounts.  To remove them send faker -x");
          } else if (_0xacd495[0] == '-x') {
            await _0x318ec6.groupParticipantsUpdate(_0x1d8ddf.chat, [_0x50e106], "remove");
            await _0x1d8ddf.reply(_0x50e106.length + " +1 fake accounts successfully removed!");
          }
          break;
        case "mail":
          {
            const {
              TempMail: _0x59ff71
            } = require('tempmail.lol');
            const _0x51b713 = new _0x59ff71();
            const _0x834211 = await _0x51b713.createInbox();
            const _0x166530 = '' + _0x834211.address;
            await _0x1d8ddf.reply(_0x166530);
            const _0x5d15db = await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
              'text': '' + _0x834211.token
            });
            await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
              'text': "Quoted text is your token. To fetch messages in your email use <.inbox your-token>"
            }, {
              'quoted': _0x5d15db
            });
          }
          break;
        case "hacker2":
          {
            if (!/image/.test(_0x1dad43)) {
              return _0x1d8ddf.reply("Hello hacker 👋, quote an image, probably a clear image of yourself or a person.");
            }
            let _0x2789a3 = await _0x318ec6.downloadAndSaveMediaMessage(_0x3bea32);
            const _0x59494f = await uploadtoimgur(_0x2789a3);
            await UploadFileUgu();
            const _0x32d31a = "https://aemt.me/hacker2?link=" + _0x59494f;
            await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
              'image': {
                'url': _0x32d31a
              },
              'caption': "Converted by Raven! 🦄"
            }, {
              'quoted': _0x1d8ddf
            });
          }
          break;
        case "inbox":
          {
            if (!_0x5280ae) {
              return _0x1d8ddf.reply("To fetch messages from your mail, provide the email address which was issued.");
            }
            const _0x2adfda = encodeURIComponent(_0x5280ae);
            const _0x1102ab = "https://tempmail.apinepdev.workers.dev/api/getmessage?email=" + _0x2adfda;
            try {
              const _0x2e1367 = await fetch(_0x1102ab);
              if (!_0x2e1367.ok) {
                return _0x1d8ddf.reply(_0x2e1367.status + " error occurred while communicating with API.");
              }
              const _0x4a61fd = await _0x2e1367.json();
              if (!_0x4a61fd || !_0x4a61fd.messages) {
                return _0x1d8ddf.reply("I am unable to fetch messages from your mail, your inbox might be empty or some other error occurred.");
              }
              const _0x4a8b3e = _0x4a61fd.messages;
              for (const _0x37595f of _0x4a8b3e) {
                const _0x1de9dc = _0x37595f.sender;
                const _0x385bac = _0x37595f.subject;
                const _0x4d73a7 = new Date(JSON.parse(_0x37595f.message).date).toLocaleString();
                const _0x4d5f4b = JSON.parse(_0x37595f.message).body;
                const _0x3bdbb1 = "👥 Sender: " + _0x1de9dc + "\n📝 Subject: " + _0x385bac + "\n🕜 Date: " + _0x4d73a7 + "\n📩 Message: " + _0x4d5f4b;
                await _0x1d8ddf.reply(_0x3bdbb1);
              }
            } catch (_0x189d16) {
              console.error("𝗢𝗼𝗽𝘀 𝗘𝗿𝗿𝗼𝗿!");
              return _0x1d8ddf.reply("𝗦𝗼𝗺𝗲𝘁𝗵𝗶𝗻𝗴 𝗶𝘀 𝘄𝗿𝗼𝗻𝗴!");
            }
          }
          break;
        case "anime":
        case 'random-anime':
          {
            const _0x28cc25 = require("axios");
            try {
              const _0xe96865 = await _0x28cc25.get("https://api.jikan.moe/v4/random/anime");
              const _0x590e99 = _0xe96865.data.data;
              const _0xdcaf9e = _0x590e99.title;
              const _0x378d02 = _0x590e99.synopsis;
              const _0x2e162e = _0x590e99.images.jpg.image_url;
              const _0x59cd27 = _0x590e99.episodes;
              const _0x59987c = _0x590e99.status;
              const _0x5e98ed = "📺 Title: " + _0xdcaf9e + "\n🎬 Épisodes: " + _0x59cd27 + "\n📡 Status: " + _0x59987c + "\n📝 Synopsis: " + _0x378d02 + "\n🔗 URL: " + _0x590e99.url;
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'image': {
                  'url': _0x2e162e
                },
                'caption': _0x5e98ed
              }, {
                'quoted': _0x1d8ddf
              });
            } catch (_0x5c0304) {
              _0x1d8ddf.reply("𝗢𝗼𝗽𝘀 𝗘𝗿𝗿𝗼𝗿!");
            }
          }
          break;
        case 'news':
          {
            const _0x4ea762 = await fetch("https://fantox001-scrappy-api.vercel.app/technews/random");
            const _0x426211 = await _0x4ea762.json();
            const {
              thumbnail: _0x4e50aa,
              news: _0x5c7aaa
            } = _0x426211;
            await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
              'image': {
                'url': _0x4e50aa
              },
              'caption': _0x5c7aaa
            }, {
              'quoted': _0x1d8ddf
            });
          }
          break;
        case 'approve':
        case 'approve-all':
          {
            if (!_0x1d8ddf.isGroup) {
              throw group;
            }
            if (!_0x5a0801) {
              throw admin;
            }
            if (!_0x1b0633) {
              throw botAdmin;
            }
            const _0x399e43 = await _0x318ec6.groupRequestParticipantsList(_0x1d8ddf.chat);
            if (_0x399e43.length === 0x0) {
              return _0x1d8ddf.reply("𝗛𝘂𝗵, 𝗡𝗼 𝗣𝗲𝗻𝗱𝗶𝗻𝗴 𝗷𝗼𝗶𝗻 𝗿𝗲𝗾𝘂𝗲𝘀𝘁𝘀 𝘁𝗵𝗶𝘀 𝘁𝗶𝗺𝗲!");
            }
            for (const _0x42c761 of _0x399e43) {
              const _0x369b22 = await _0x318ec6.groupRequestParticipantsUpdate(_0x1d8ddf.chat, [_0x42c761.jid], "approve");
              console.log(_0x369b22);
            }
            _0x1d8ddf.reply("𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 ℎ𝑎𝑠 𝑎𝑝𝑝𝑟𝑜𝑣𝑒𝑑 𝑎𝑙𝑙 𝑡ℎ𝑒 𝑝𝑒𝑛𝑑𝑖𝑛𝑔 𝑟𝑒𝑞𝑢𝑒𝑠𝑡𝑠 𝑠𝑢𝑐𝑐𝑒𝑠𝑠𝑓𝑢𝑙𝑙𝑦 ✅");
          }
          break;
        case 'reject':
        case "reject-all":
          {
            if (!_0x1d8ddf.isGroup) {
              throw group;
            }
            if (!_0x5a0801) {
              throw admin;
            }
            if (!_0x1b0633) {
              throw botAdmin;
            }
            const _0x183d9c = await _0x318ec6.groupRequestParticipantsList(_0x1d8ddf.chat);
            if (_0x183d9c.length === 0x0) {
              return _0x1d8ddf.reply("𝗛𝘂𝗵, 𝗡𝗼 𝗽𝗲𝗻𝗱𝗶𝗻𝗴 𝗷𝗼𝗶𝗻 𝗿𝗲𝗾𝘂𝗲𝘀𝘁𝘀 𝘁𝗵𝗶𝘀 𝘁𝗶𝗺𝗲");
            }
            for (const _0x35a629 of _0x183d9c) {
              const _0x37ba68 = await _0x318ec6.groupRequestParticipantsUpdate(_0x1d8ddf.chat, [_0x35a629.jid], "reject");
              console.log(_0x37ba68);
            }
            _0x1d8ddf.reply("𝑃𝑒𝑛𝑑𝑖𝑛𝑔 𝑝𝑎𝑟𝑡𝑖𝑐𝑖𝑝𝑎𝑛𝑡𝑠 ℎ𝑎𝑣𝑒 𝑏𝑒𝑒𝑛 𝑟𝑒𝑗𝑒𝑐𝑡𝑒𝑑!");
          }
          break;
        case "admin":
          {
            if (!_0x1d8ddf.isGroup) {
              throw group;
            }
            if (!_0x1b0633) {
              throw botAdmin;
            }
            if (!_0x3cd2e7) {
              throw NotOwner;
            }
            await _0x318ec6.groupParticipantsUpdate(_0x1d8ddf.chat, [_0x1d8ddf.sender], "promote");
            _0x1d8ddf.reply("Promoted To Admin<🥇");
          }
          break;
        case 'getvar':
          if (!_0x3cd2e7) {
            throw NotOwner;
          }
          const _0x373c79 = new _0x2167f9({
            'token': herokuapi
          });
          let _0x5bd778 = "/apps/" + appname;
          let _0x248d0e = await _0x373c79.get(_0x5bd778 + "/config-vars");
          let _0x65e3b9 = "*𝗕𝗲𝗹𝗼𝘄 𝗔𝗿𝗲 𝗛𝗲𝗿𝗼𝗸𝘂 𝗩𝗮𝗿𝗶𝗮𝗯𝗹𝗲𝘀 𝗙𝗼𝗿 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗:*\n\n";
          for (vrt in _0x248d0e) {
            _0x65e3b9 += vrt + '=' + _0x248d0e[vrt] + "\n\n";
          }
          _0x87f3c4(_0x65e3b9);
          break;
        case "restart":
          if (!_0x3cd2e7) {
            throw NotOwner;
          }
          _0x87f3c4("VINIZIAZ-𝐗𝐌𝐃 𝐢𝐬 𝐫𝐞𝐬𝐭𝐚𝐫𝐭𝐢𝐧𝐠. . .");
          await sleep(0xbb8);
          process.exit();
          break;
        case "remove":
        case 'kick':
        case "toka":
          {
            if (!_0x1d8ddf.isGroup) {
              throw group;
            }
            if (!_0x1b0633) {
              throw botAdmin;
            }
            if (!_0x5a0801) {
              throw admin;
            }
            if (!_0x1d8ddf.quoted && (!_0x1d8ddf.mentionedJid || _0x1d8ddf.mentionedJid.length === 0x0)) {
              return _0x1d8ddf.reply("Who should i remove !?");
            }
            let _0x26727c = _0x1d8ddf.mentionedJid[0x0] ? _0x1d8ddf.mentionedJid[0x0] : _0x1d8ddf.quoted ? _0x1d8ddf.quoted.sender : null;
            const _0x3699f4 = _0x26727c.split('@')[0x0];
            if (_0x26727c == "254704009677@s.whatsapp.net") {
              return _0x1d8ddf.reply("It's an Owners Number and he is dating😂");
            }
            if (_0x26727c == _0x318ec6.decodeJid(_0x318ec6.user.id)) {
              throw "I cannot remove Myself 😂";
            }
            _0x1d8ddf.reply('@' + _0x3699f4 + " Goodbye🖕");
            await _0x318ec6.groupParticipantsUpdate(_0x1d8ddf.chat, [_0x26727c], "remove");
          }
          break;
        case "instagram":
        case "igdl":
        case 'ig':
          {
            const {
              igdl: _0x28536b
            } = require('ruhend-scraper');
            if (!_0x5280ae) {
              return _0x1d8ddf.reply("Please provide an Instagram link for the video.");
            }
            if (!_0x5280ae.includes("https://www.instagram.com/")) {
              return _0x1d8ddf.reply("That is not a valid Instagram link.");
            }
            try {
              const _0x46d77f = await _0x28536b(_0x5280ae);
              if (!_0x46d77f || !_0x46d77f.data || _0x46d77f.data.length === 0x0) {
                return _0x1d8ddf.reply("No video found at the provided link.");
              }
              const _0x4ae9a9 = _0x46d77f.data;
              for (let _0x125f57 = 0x0; _0x125f57 < Math.min(0x14, _0x4ae9a9.length); _0x125f57++) {
                const _0x56c8e2 = _0x4ae9a9[_0x125f57];
                const _0x2bdef2 = _0x56c8e2.url;
                await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                  'video': {
                    'url': _0x2bdef2
                  },
                  'mimetype': 'video/mp4',
                  'caption': "DOWNLOADED BY " + botname
                }, {
                  'quoted': _0x1d8ddf
                });
              }
            } catch (_0x4c5e15) {
              console.error(_0x4c5e15);
              return _0x1d8ddf.reply("An error occurred while processing the request.");
            }
          }
          break;
        case "twitter":
        case 'twtdl':
          {
            if (!_0x5280ae) {
              return _0x1d8ddf.reply("𝗽𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝘁𝘄𝗶𝘁𝘁𝗲𝗿 𝗹𝗶𝗻𝗸 !");
            }
            try {
              const _0x4f649b = await fetchJson("https://api.dreaded.site/api/alldl?url=" + _0x5280ae);
              if (!_0x4f649b || _0x4f649b.status !== 0xc8 || !_0x4f649b.data || !_0x4f649b.data.videoUrl) {
                return _0x1d8ddf.reply("𝗦𝗼𝗿𝗿𝘆 𝘁𝗵𝗲 𝗔𝗣𝗜 𝗱𝗶𝗱𝗻'𝘁 𝗿𝗲𝘀𝗽𝗼𝗻𝗱 𝗰𝗼𝗿𝗿𝗲𝗰𝘁𝗹𝘆. 𝗣𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗔𝗴𝗮𝗶𝗻 𝗹𝗮𝘁𝗲𝗿!");
              }
              const _0x35c104 = _0x4f649b.data.videoUrl;
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'video': {
                  'url': _0x35c104
                },
                'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧",
                'gifPlayback': false
              }, {
                'quoted': _0x1d8ddf
              });
            } catch (_0x58aeef) {
              _0x1d8ddf.reply("An error occured. API might be down\n" + _0x58aeef);
            }
          }
          break;
        case "facebook":
        case 'fb':
        case "fbdl":
          {
            if (!_0x5280ae) {
              return _0x1d8ddf.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗹𝗶𝗻𝗸 !");
            }
            if (!_0x5280ae.includes("facebook.com")) {
              return _0x1d8ddf.reply("That is not a facebook link.");
            }
            try {
              let _0x248539 = await fetchJson('https://api.dreaded.site/api/facebook?url=' + _0x5280ae);
              if (!_0x248539 || _0x248539.status !== 0xc8 || !_0x248539.facebook || !_0x248539.facebook.sdVideo) {
                return _0x1d8ddf.reply("𝗦𝗼𝗿𝗿𝘆 𝘁𝗵𝗲 𝗔𝗣𝗜 𝗱𝗶𝗱𝗻'𝘁 𝗿𝗲𝘀𝗽𝗼𝗻𝗱 𝗰𝗼𝗿𝗿𝗲𝗰𝘁𝗹𝘆. 𝗣𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗔𝗴𝗮𝗶𝗻 𝗹𝗮𝘁𝗲𝗿!");
              }
              const _0x336168 = _0x248539.facebook.sdVideo;
              if (!_0x336168) {
                return _0x1d8ddf.reply("Wrong facebook data. Please ensure the video exists.");
              }
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'video': {
                  'url': _0x336168
                },
                'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗",
                'gifPlayback': false
              }, {
                'quoted': _0x1d8ddf
              });
            } catch (_0x5446a3) {
              console.error("Error occurred:", _0x5446a3);
              _0x1d8ddf.reply("An error occurred. API might be down. Error: " + _0x5446a3.message);
            }
          }
          break;
        case "tiktok":
        case "tikdl":
          {
            if (!_0x5280ae) {
              return _0x1d8ddf.reply("Please provide a TikTok video link.");
            }
            try {
              const _0x462dea = await axios.get("https://bk9.fun/download/tiktok?url=" + encodeURIComponent(_0x5280ae));
              if (_0x462dea.data.status && _0x462dea.data.BK9) {
                const _0x48209d = _0x462dea.data.BK9.BK9;
                await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                  'text': "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝐹𝑒𝑡𝑐ℎ𝑒𝑑 𝑑𝑎𝑡𝑎 𝑠𝑢𝑐𝑐𝑒𝑠𝑠𝑓𝑢𝑙𝑙𝑦✅ 𝑤𝑎𝑖𝑡 𝑎 𝑚𝑜𝑚𝑒𝑛𝑡. . ."
                }, {
                  'quoted': _0x1d8ddf
                });
                await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                  'video': {
                    'url': _0x48209d
                  },
                  'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗",
                  'gifPlayback': false
                }, {
                  'quoted': _0x1d8ddf
                });
              } else {
                _0x87f3c4("Failed to retrieve video from the provided link.");
              }
            } catch (_0x1c555e) {
              _0x87f3c4("An error occurred during download: " + _0x1c555e.message);
            }
          }
          break;
        case 'song':
          {
            const _0x585f24 = require("yt-search");
            try {
              if (!_0x5280ae) {
                return _0x1d8ddf.reply("What song do you want to download?");
              }
              const {
                videos: _0x32559c
              } = await _0x585f24(_0x5280ae);
              if (!_0x32559c || _0x32559c.length === 0x0) {
                return _0x1d8ddf.reply("No songs found!");
              }
              await _0x1d8ddf.reply("_Please wait your download is in progress_");
              const _0x4f3a68 = _0x32559c[0x0].url;
              let _0xbbc21e = await fetchJson("https://api.dreaded.site/api/ytdl/audio?url=" + _0x4f3a68);
              if (!_0xbbc21e || !_0xbbc21e.result || !_0xbbc21e.result.url) {
                return _0x1d8ddf.reply("Failed to fetch audio from the API.");
              }
              const _0x18ce44 = _0xbbc21e.result.url;
              const _0x56d284 = _0xbbc21e.result.title;
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'audio': {
                  'url': _0x18ce44
                },
                'mimetype': "audio/mpeg",
                'fileName': _0x56d284 + ".mp3"
              }, {
                'quoted': _0x1d8ddf
              });
            } catch (_0x1fccee) {
              _0x1d8ddf.reply("Download failed\n" + _0x1fccee.message);
            }
          }
          break;
        case 'sc':
        case "script":
        case "repo":
          _0x318ec6.sendMessage(_0x1d8ddf.chat, {
            'image': {
              'url': 'https://i.imgur.com/HP6GyiD.jpeg'
            },
            'caption': " Hello👋 *" + _0x215155 + "*,You can deploy 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 using the GitHub link below 𓅂\n\nFork and give us a star✨.\n\n https://github.com/Viniznimco/VINIZIAZ-XMD\n\nLink with your whatsapp using pairing link below\n\nhttps://msnapdragon-junior.onrender.com/\n\nCopy the session_id and Fill in the required Variables before Deploy\n\nEnjoy and have fun with ░𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗░\n\n𝗠𝗮𝗱𝗲 𝗶𝗻 𝗞𝗲𝗻𝘆𝗮 𝗯𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭!\n\n𝗜𝗳 𝘆𝗼𝘂 𝗻𝗲𝗲𝗱 𝘁𝗼 𝗯𝗲 𝗱𝗲𝗽𝗹𝗼𝘆𝗲𝗱 𝘁𝗲𝘅𝘁 𝗺𝗲 𝗼𝗻 +254704009677 𝗼𝗿 𝘁𝗲𝘅𝘁 𝘆𝗼𝘂𝗿 𝗳𝗮𝘃𝗼𝘂𝗿𝗶𝘁𝗲 𝗱𝗲𝗽𝗹𝗼𝘆𝗲𝗿\n\n© 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭 "
          }, {
            'quoted': _0x1d8ddf
          });
          break;
        case "closetime":
          if (!_0x1d8ddf.isGroup) {
            throw group;
          }
          if (!_0x5a0801) {
            throw admin;
          }
          if (!_0x1b0633) {
            throw botAdmin;
          }
          if (_0xacd495[0x1] == "second") {
            var _0x265690 = _0xacd495[0x0] * "1000";
          } else {
            if (_0xacd495[0x1] == 'minute') {
              var _0x265690 = _0xacd495[0x0] * "60000";
            } else {
              if (_0xacd495[0x1] == "hour") {
                var _0x265690 = _0xacd495[0x0] * "3600000";
              } else {
                if (_0xacd495[0x1] == "day") {
                  var _0x265690 = _0xacd495[0x0] * "86400000";
                } else {
                  return _0x87f3c4("*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second");
                }
              }
            }
          }
          _0x87f3c4("Countdown of  " + q + " starting from now to close the group");
          setTimeout(() => {
            _0x318ec6.groupSettingUpdate(_0x1d8ddf.chat, "announcement");
            _0x87f3c4("𝗚𝗿𝗼𝘂𝗽 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗰𝗹𝗼𝘀𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗯𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
          }, _0x265690);
          break;
        case 'opentime':
          if (!_0x1d8ddf.isGroup) {
            throw group;
          }
          if (!_0x5a0801) {
            throw admin;
          }
          if (!_0x1b0633) {
            throw botAdmin;
          }
          if (_0xacd495[0x1] == "second") {
            var _0x265690 = _0xacd495[0x0] * "1000";
          } else {
            if (_0xacd495[0x1] == "minute") {
              var _0x265690 = _0xacd495[0x0] * "60000";
            } else {
              if (_0xacd495[0x1] == 'hour') {
                var _0x265690 = _0xacd495[0x0] * "3600000";
              } else {
                if (_0xacd495[0x1] == "day") {
                  var _0x265690 = _0xacd495[0x0] * "86400000";
                } else {
                  return _0x87f3c4("*select:*\nsecond\nminute\nhour\n\n*example*\n10 second");
                }
              }
            }
          }
          _0x87f3c4("Countdown of " + q + " starting from now to open the group");
          setTimeout(() => {
            _0x318ec6.groupSettingUpdate(_0x1d8ddf.chat, "not_announcement");
            _0x87f3c4("𝗚𝗿𝗼𝘂𝗽 𝗼𝗽𝗲𝗻𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗯𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗠𝗗");
          }, _0x265690);
          break;
        case "close":
        case "mute":
          {
            if (!_0x1d8ddf.isGroup) {
              throw group;
            }
            if (!_0x1b0633) {
              throw botAdmin;
            }
            if (!_0x5a0801) {
              throw admin;
            }
            await _0x318ec6.groupSettingUpdate(_0x1d8ddf.chat, "announcement");
            _0x1d8ddf.reply("Group successfully locked!");
          }
          break;
        case 'open':
        case "unmute":
          {
            if (!_0x1d8ddf.isGroup) {
              throw group;
            }
            if (!_0x1b0633) {
              throw botAdmin;
            }
            if (!_0x5a0801) {
              throw admin;
            }
            await _0x318ec6.groupSettingUpdate(_0x1d8ddf.chat, 'not_announcement');
            _0x1d8ddf.reply("𝗚𝗿𝗼𝘂𝗽 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗨𝗻𝗹𝗼𝗰𝗸𝗲𝗱 𝗕𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗!");
          }
          break;
        case 'disp-1':
          {
            if (!_0x1d8ddf.isGroup) {
              throw group;
            }
            if (!_0x1b0633) {
              throw botAdmin;
            }
            if (!_0x5a0801) {
              throw admin;
            }
            await _0x318ec6.groupToggleEphemeral(_0x1d8ddf.chat, 86400);
            _0x1d8ddf.reply("Dissapearing messages successfully turned on for 24hrs!");
          }
          break;
        case "promote":
          {
            if (!_0x1d8ddf.isGroup) {
              throw group;
            }
            if (!_0x1b0633) {
              throw botAdmin;
            }
            if (!_0x5a0801) {
              throw admin;
            }
            if (!_0x1d8ddf.quoted) {
              throw "Ttag someone with the command!";
            }
            let _0xd047d4 = _0x1d8ddf.mentionedJid[0x0] ? _0x1d8ddf.mentionedJid : _0x1d8ddf.quoted ? [_0x1d8ddf.quoted.sender] : [_0x5280ae.replace(/[^0-9]/g, '') + "@s.whatsapp.net"];
            await _0x318ec6.groupParticipantsUpdate(_0x1d8ddf.chat, _0xd047d4, "promote");
            _0x1d8ddf.reply("𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗽𝗿𝗼𝗺𝗼𝘁𝗲𝗱,𝗯𝗲 𝗮 𝗵𝗮𝗿𝗱𝘄𝗼𝗿𝗸𝗶𝗻𝗴 𝗮𝗱𝗺𝗶𝗻! 🦄");
          }
          break;
        case "demote":
          {
            if (!_0x1d8ddf.isGroup) {
              throw group;
            }
            if (!_0x1b0633) {
              throw botAdmin;
            }
            if (!_0x5a0801) {
              throw admin;
            }
            if (!_0x1d8ddf.quoted) {
              throw "Ttag someone with the command!";
            }
            let _0x2acfab = _0x1d8ddf.mentionedJid[0x0] ? _0x1d8ddf.mentionedJid : _0x1d8ddf.quoted ? [_0x1d8ddf.quoted.sender] : [_0x5280ae.replace(/[^0-9]/g, '') + '@s.whatsapp.net'];
            await _0x318ec6.groupParticipantsUpdate(_0x1d8ddf.chat, _0x2acfab, "demote");
            _0x1d8ddf.reply("𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗴𝘂𝗹𝗹𝘆 𝗱𝗲𝗺𝗼𝘁𝗲𝗱, 𝗵𝗼𝘄 𝗱𝗼 𝘆𝗼𝘂 𝗳𝗲𝗲𝗹 𝘆𝗼𝘂 𝗮𝗿𝗲 𝗻𝗼𝘁 𝗮𝗻 𝗮𝗱𝗺𝗶𝗻! 😲");
          }
          break;
        case "disp-7":
          {
            if (!_0x1d8ddf.isGroup) {
              throw group;
            }
            if (!_0x1b0633) {
              throw botAdmin;
            }
            if (!_0x5a0801) {
              throw admin;
            }
            await _0x318ec6.groupToggleEphemeral(_0x1d8ddf.chat, 604800);
            _0x1d8ddf.reply("𝗗𝗶𝘀𝗮𝗽𝗽𝗲𝗮𝗿𝗶𝗻𝗴 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝘁𝘂𝗿𝗻𝗲𝗱 𝗼𝗻 𝗳𝗼𝗿 7𝗱𝗮𝘆𝘀!");
          }
          break;
        case "disp-90":
          {
            if (!_0x1d8ddf.isGroup) {
              throw group;
            }
            if (!_0x1b0633) {
              throw botAdmin;
            }
            if (!_0x5a0801) {
              throw admin;
            }
            await _0x318ec6.groupToggleEphemeral(_0x1d8ddf.chat, 7776000);
            _0x1d8ddf.reply("𝗗𝗶𝘀𝗮𝗽𝗽𝗲𝗮𝗿𝗶𝗻𝗴 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝘁𝘂𝗿𝗻𝗲𝗱 𝗼𝗻 𝗳𝗼𝗿 90 𝗱𝗮𝘆𝘀!");
          }
          break;
        case "disp-off":
          {
            if (!_0x1d8ddf.isGroup) {
              throw group;
            }
            if (!_0x1b0633) {
              throw botAdmin;
            }
            if (!_0x5a0801) {
              throw admin;
            }
            await _0x318ec6.groupToggleEphemeral(_0x1d8ddf.chat, 0x0);
            _0x1d8ddf.reply("Dissapearing messages successfully turned off!");
          }
          break;
        case "icon":
          {
            if (!_0x1d8ddf.isGroup) {
              throw group;
            }
            if (!_0x5a0801) {
              throw admin;
            }
            if (!_0x1b0633) {
              throw botAdmin;
            }
            if (!_0x58ce36) {
              throw "Send or tag an image with the caption " + (prefix + _0x2b2e26);
            }
            if (!/image/.test(_0x1dad43)) {
              throw "Send or tag an image with the caption " + (prefix + _0x2b2e26);
            }
            if (/webp/.test(_0x1dad43)) {
              throw "Send or tag an image with the caption " + (prefix + _0x2b2e26);
            }
            let _0x38d71a = await _0x318ec6.downloadAndSaveMediaMessage(_0x58ce36);
            await _0x318ec6.updateProfilePicture(_0x1d8ddf.chat, {
              'url': _0x38d71a
            })["catch"](_0x46ff47 => fs.unlinkSync(_0x38d71a));
            _0x87f3c4("𝗚𝗿𝗼𝘂𝗽 𝗜𝗰𝗼𝗻 𝗨𝗽𝗱𝗮𝘁𝗲𝗱 𝗯𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
          }
          break;
        case "revoke":
        case "newlink":
        case 'reset':
          {
            if (!_0x1d8ddf.isGroup) {
              throw group;
            }
            if (!_0x5a0801) {
              throw admin;
            }
            if (!_0x1b0633) {
              throw botAdmin;
            }
            await _0x318ec6.groupRevokeInvite(_0x1d8ddf.chat);
            await _0x318ec6.sendText(_0x1d8ddf.chat, "Group link revoked!", _0x1d8ddf);
            let _0x5a4581 = await _0x318ec6.groupInviteCode(_0x1d8ddf.chat);
            _0x318ec6.sendText(_0x1d8ddf.sender, 'https://chat.whatsapp.com/' + _0x5a4581 + "\n\nHere is the new group link for " + _0x537f06.subject, _0x1d8ddf, {
              'detectLink': true
            });
            _0x318ec6.sendText(_0x1d8ddf.chat, "Sent you the new group link in your inbox!", _0x1d8ddf);
          }
          break;
        case "delete":
        case "del":
          {
            if (!_0x1d8ddf.isGroup) {
              throw group;
            }
            if (!_0x1b0633) {
              throw botAdmin;
            }
            if (!_0x5a0801) {
              throw admin;
            }
            if (!_0x1d8ddf.quoted) {
              throw "No message quoted for deletion";
            }
            let {
              chat: _0x3573d8,
              fromMe: _0x35cc24,
              id: _0x364f3d,
              isBaileys: _0x144698
            } = _0x1d8ddf.quoted;
            if (_0x144698) {
              throw "I cannot delete. Quoted message is my message or another bot message.";
            }
            _0x318ec6.sendMessage(_0x1d8ddf.chat, {
              'delete': {
                'remoteJid': _0x1d8ddf.chat,
                'fromMe': false,
                'id': _0x1d8ddf.quoted.id,
                'participant': _0x1d8ddf.quoted.sender
              }
            });
          }
          break;
        case "leave":
          {
            if (!_0x3cd2e7) {
              throw NotOwner;
            }
            if (!_0x1d8ddf.isGroup) {
              throw group;
            }
            await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
              'text': "𝗚𝗼𝗼𝗱𝗯𝘆𝗲 𝗲𝘃𝗲𝗿𝘆𝗼𝗻𝗲👋. 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗶𝘀 𝗟𝗲𝗮𝘃𝗶𝗻𝗴 𝘁𝗵𝗲 𝗚𝗿𝗼𝘂𝗽 𝗻𝗼𝘄...",
              'mentions': _0x211808.map(_0x1984ee => _0x1984ee.id)
            }, {
              'quoted': _0x1d8ddf
            });
            await _0x318ec6.groupLeave(_0x1d8ddf.chat);
          }
          break;
        case "subject":
        case "changesubject":
          {
            if (!_0x1d8ddf.isGroup) {
              throw group;
            }
            if (!_0x1b0633) {
              throw botAdmin;
            }
            if (!_0x5a0801) {
              throw admin;
            }
            if (!_0x5280ae) {
              throw "Provide the text for the group subject.";
            }
            await _0x318ec6.groupUpdateSubject(_0x1d8ddf.chat, _0x5280ae);
            _0x1d8ddf.reply("Group name successfully updated! 💀");
          }
          break;
        case "desc":
        case "setdesc":
          {
            if (!_0x1d8ddf.isGroup) {
              throw group;
            }
            if (!_0x1b0633) {
              throw botAdmin;
            }
            if (!_0x5a0801) {
              throw admin;
            }
            if (!_0x5280ae) {
              throw "Provide the text for the group description";
            }
            await _0x318ec6.groupUpdateDescription(_0x1d8ddf.chat, _0x5280ae);
            _0x1d8ddf.reply("Group description successfully updated! 🥶");
          }
          break;
        case 'hidetag':
        case "tag":
          {
            if (!_0x1d8ddf.isGroup) {
              throw group;
            }
            if (!_0x1b0633) {
              throw botAdmin;
            }
            if (!_0x5a0801) {
              throw admin;
            }
            _0x318ec6.sendMessage(_0x1d8ddf.chat, {
              'text': q ? q : "😅𝗕𝗹𝗶𝗻𝗱 𝗧𝗮𝗴𝘀😅",
              'mentions': _0x211808.map(_0x45bc81 => _0x45bc81.id)
            }, {
              'quoted': _0x1d8ddf
            });
          }
          break;
        case "tagall":
          {
            if (!_0x1d8ddf.isGroup) {
              throw group;
            }
            if (!_0x1b0633) {
              throw botAdmin;
            }
            if (!_0x5a0801) {
              throw admin;
            }
            let _0x58bb62 = "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗶𝘀 𝗧𝗮𝗴𝗶𝗻𝗴 𝘆𝗼𝘂 𝗼𝗻 𝗯𝗲𝗵𝗮𝗹𝗳 𝗼𝗳 𝘆𝗼𝘂𝗿 𝗶𝗻𝗮𝗰𝘁𝗶𝘃𝗲 𝗹𝗼𝘃𝗲𝗿🖕😅: \n   \n  Message " + (q ? q : '') + "*\n\n";
            for (let _0x49d2b8 of _0x211808) {
              _0x58bb62 += "📧 @" + _0x49d2b8.id.split('@')[0x0] + "\n";
            }
            _0x318ec6.sendMessage(_0x1d8ddf.chat, {
              'text': _0x58bb62,
              'mentions': _0x211808.map(_0x4ec98f => _0x4ec98f.id)
            }, {
              'quoted': _0x1d8ddf
            });
          }
          break;
        case "whatsong":
        case "shazam":
          let _0x3bfd2c = new acrcloud({
            'host': "identify-eu-west-1.acrcloud.com",
            'access_key': '2631ab98e77b49509e3edcf493757300',
            'access_secret': "KKbVWlTNCL3JjxjrWnywMdvQGanyhKRN0fpQxyUo"
          });
          if (!_0x1d8ddf.quoted) {
            throw "Tag a short video or audio";
          }
          let _0x31f7e3 = _0x1d8ddf.quoted ? _0x1d8ddf.quoted : _0x1d8ddf;
          let _0x346c84 = (_0x31f7e3.msg || _0x31f7e3).mimetype || _0x31f7e3.mediaType || '';
          if (/video|audio/.test(_0x346c84)) {
            let _0x6c4e02 = await _0x31f7e3.download();
            await _0x87f3c4("Analyzing the media...");
            let {
              status: _0xac4be2,
              metadata: _0x4fb343
            } = await _0x3bfd2c.identify(_0x6c4e02);
            if (_0xac4be2.code !== 0x0) {
              throw _0xac4be2.msg;
            }
            let {
              title: _0x2da8cc,
              artists: _0x5788fd,
              album: _0x2cbf0f,
              genres: _0x29d1e3,
              release_date: _0x46d594
            } = _0x4fb343.music[0x0];
            let _0x1fbc0e = "*• Title:* " + _0x2da8cc + (_0x5788fd ? "\n*• Artists:* " + _0x5788fd.map(_0x42cbb1 => _0x42cbb1.name).join(", ") : '');
            _0x1fbc0e += '' + (_0x2cbf0f ? "\n*• Album:* " + _0x2cbf0f.name : '') + (_0x29d1e3 ? "\n*• Genres:* " + _0x29d1e3.map(_0x28e3c2 => _0x28e3c2.name).join(", ") : '') + "\n";
            _0x1fbc0e += "*• Release Date:* " + _0x46d594;
            await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
              'text': _0x1fbc0e.trim()
            }, {
              'quoted': _0x1d8ddf
            });
            const {
              videos: _0xf4bfef
            } = await yts(_0x2da8cc);
            if (!_0xf4bfef || _0xf4bfef.length <= 0x0) {
              _0x87f3c4("No Matching videos found for : *" + _0xacd495[0x0] + "*!!");
              return;
            }
            let _0x1d82a2 = _0xf4bfef[0x0].url;
            let _0x4929be = await ytdl.getInfo(_0x1d82a2);
            if (_0x4929be.videoDetails.lengthSeconds >= 0x708) {
              _0x87f3c4("Too big!");
              return;
            }
            let _0xd6d251 = _0x4929be.videoDetails.title;
            let _0x446d0d = '' + Math.floor(Math.random() * 0x2710) + ".mp3";
            const _0x3622db = ytdl(_0x1d82a2, {
              'filter': _0x489b5b => _0x489b5b.audioBitrate == 0xa0 || _0x489b5b.audioBitrate == 0x80
            }).pipe(fs.createWriteStream('./' + _0x446d0d));
            console.log("Audio downloading ->", _0x1d82a2);
            await new Promise((_0x579787, _0x5b9858) => {
              _0x3622db.on("error", _0x5b9858);
              _0x3622db.on("finish", _0x579787);
            });
            let _0x24f6d9 = fs.statSync('./' + _0x446d0d);
            let _0x125b20 = _0x24f6d9.size;
            let _0x535c19 = _0x125b20 / 1048576;
            console.log("Audio downloaded ! \n Size: " + _0x535c19);
            if (_0x535c19 <= 0x28) {
              await _0x318ec6.sendMessage(_0x4cef7b, {
                'document': fs.readFileSync('./' + _0x446d0d),
                'mimetype': "audio/mpeg",
                'fileName': _0xd6d251 + ".mp3"
              }, {
                'quoted': _0x1d8ddf
              });
            } else {
              _0x87f3c4("File size bigger.");
            }
            fs.unlinkSync('./' + _0x446d0d);
          }
          break;
        case 's':
        case "sticker":
          {
            const {
              Sticker: _0x4b030d,
              createSticker: _0x718d39,
              StickerTypes: _0x1c2962
            } = require("wa-sticker-formatter");
            if (!_0x3c8de7) {
              _0x1d8ddf.reply("Quote an image or a short video.");
              return;
            }
            ;
            let _0x353db4;
            if (_0x3c8de7.imageMessage) {
              _0x353db4 = _0x3c8de7.imageMessage;
            } else {
              if (_0x3c8de7.videoMessage) {
                _0x353db4 = _0x3c8de7.videoMessage;
              } else {
                _0x1d8ddf.reply("That is neither an image nor a short video! ");
                return;
              }
            }
            ;
            var _0x302648 = await _0x318ec6.downloadAndSaveMediaMessage(_0x353db4);
            let _0x47d7af = new _0x4b030d(_0x302648, {
              'pack': packname,
              'author': author,
              'type': _0x1c2962.FULL,
              'categories': ['🤩', '🎉'],
              'id': "12345",
              'quality': 0x46,
              'background': "transparent"
            });
            const _0x5cfbc8 = await _0x47d7af.toBuffer();
            _0x318ec6.sendMessage(_0x1d8ddf.chat, {
              'sticker': _0x5cfbc8
            }, {
              'quoted': _0x1d8ddf
            });
          }
          break;
        case 'dp':
          {
            try {
              ha = _0x1d8ddf.quoted.sender;
              qd = await _0x318ec6.getName(ha);
              pp2 = await _0x318ec6.profilePictureUrl(ha, "image");
            } catch {
              pp2 = "https://tinyurl.com/yx93l6da";
            }
            if (!_0x1d8ddf.quoted) {
              throw "Tag a user!";
            }
            bar = "Profile Picture of " + qd;
            _0x318ec6.sendMessage(_0x1d8ddf.chat, {
              'image': {
                'url': pp2
              },
              'caption': bar,
              'fileLength': "999999999999"
            }, {
              'quoted': _0x1d8ddf
            });
          }
          break;
        case "list":
        case "vars":
        case 'help':
          _0x87f3c4("𝟏 Owner➣ 𝐆𝐞𝐭 𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇  𝐜𝐨𝐧𝐭𝐚𝐜𝐭\n\n𝟐 𝐁𝐫𝐨𝐚𝐝𝐜𝐚𝐬𝐭➣ 𝐒𝐞𝐧𝐝𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐭𝐨 𝐚𝐥𝐥 𝐠𝐫𝐨𝐮𝐩𝐬\n\n𝟑 𝐉𝐨𝐢𝐧➣ 𝐭𝐚𝐠 𝐠𝐫𝐨𝐮𝐩 𝐥𝐢𝐧𝐤 𝐰𝐢𝐭𝐡 𝐣𝐨𝐢𝐧\n\n𝟒 𝐛𝐨𝐭𝐩𝐩➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐛𝐨𝐭𝐬 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐝𝐩\n\n𝟓 𝐁𝐥𝐨𝐜𝐤➣ 𝐁𝐥𝐨𝐜𝐤 𝐭𝐡𝐞𝐦 𝐟𝐚𝐤𝐞 𝐟𝐫𝐢𝐞𝐧𝐝𝐬\n\n𝟔 𝐊𝐢𝐥𝐥➣ 𝐊𝐢𝐥𝐥𝐬 𝐠𝐫𝐨𝐮𝐩 𝐢𝐧 𝐬𝐞𝐜𝐨𝐧𝐝𝐬\n\n𝟕 𝐔𝐧𝐛𝐥𝐨𝐜𝐤➣ 𝐆𝐢𝐯𝐞 𝐭𝐡𝐞𝐦 𝐟𝐚𝐤𝐞 𝐟𝐫𝐢𝐞𝐧𝐝𝐬 𝐚 𝐬𝐞𝐜𝐨𝐧𝐝 𝐜𝐡𝐚𝐧𝐜𝐞\n\n𝟖 𝐒𝐞𝐭𝐯𝐚𝐫➣ 𝐒𝐞𝐭 𝐯𝐚𝐫𝐬 𝐢𝐧 𝐡𝐞𝐫𝐨𝐤𝐮\n\n𝟗 𝐒𝐭𝐢𝐜𝐤𝐞𝐫➣ 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐚 𝐩𝐡𝐨𝐭𝐨 𝐨𝐫 𝐚 𝐬𝐡𝐨𝐫𝐭 𝐯𝐢𝐝𝐞𝐨 𝐭𝐨 𝐚 𝐬𝐭𝐢𝐜𝐤𝐞𝐫\n\n𝟏𝟎 𝐓𝐨𝐢𝐦𝐠➣ 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐚 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐭𝐨 𝐚 𝐩𝐡𝐨𝐭𝐨\n\n𝟏𝟏 𝐏𝐥𝐚𝐲➣ 𝐆𝐞𝐭 𝐲𝐨𝐮𝐫 𝐟𝐚𝐯𝐨𝐫𝐢𝐭𝐞 𝐬𝐨𝐧𝐠\n\n𝟏𝟐 𝐖𝐡𝐚𝐭𝐬𝐨𝐧𝐠➣ 𝐠𝐞𝐭 𝐭𝐡𝐞 𝐭𝐢𝐭𝐥𝐞 𝐨𝐟 𝐭𝐡𝐞 𝐬𝐨𝐧𝐠\n\n𝟏𝟑 𝐘𝐭𝐬 ➣ 𝐆𝐞𝐭 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐯𝐢𝐝𝐞𝐨𝐬\n\n𝟏𝟒 𝐌𝐨𝐯𝐢𝐞➣ 𝐆𝐞𝐭 𝐲𝐨𝐮𝐫 𝐟𝐚𝐯𝐨𝐫𝐢𝐭𝐞 𝐦𝐨𝐯𝐢𝐞 𝐝𝐞𝐭𝐚𝐢𝐥𝐬\n\n𝟏𝟓 𝐌𝐢𝐱➣ 𝐂𝐨𝐦𝐛𝐢𝐧𝐞𝐬 +𝟐𝐞𝐦𝐨𝐣𝐢𝐬\n\n𝟏𝟔 𝐀𝐢-𝐢𝐦𝐠➣ 𝐆𝐞𝐭 𝐚𝐧 𝐀𝐢 𝐩𝐡𝐨𝐭𝐨\n\n𝟏𝟕 𝐆𝐩𝐭 ➣ 𝐇𝐞𝐫𝐞 𝐭𝐨 𝐚𝐧𝐬𝐰𝐞𝐫 𝐲𝐨𝐮𝐫 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧𝐬\n\n𝟏𝟖 𝐃𝐩➣ 𝐆𝐞𝐭𝐬 𝐚 𝐩𝐞𝐫𝐬𝐨𝐧 𝐝𝐩\n\n𝟏𝟗 𝐒𝐩𝐞𝐞𝐝 ➣ 𝐂𝐡𝐞𝐜𝐤𝐬 𝐛𝐨𝐭𝐬 𝐬𝐩𝐞𝐞𝐝\n\n𝟐𝟎 𝐀𝐥𝐢𝐯𝐞➣ 𝐂𝐡𝐞𝐜𝐤 𝐰𝐡𝐞𝐭𝐡𝐞𝐫 𝐭𝐡𝐞 𝐛𝐨𝐭 𝐢𝐬 𝐬𝐭𝐢𝐥𝐥 𝐤𝐢𝐜𝐤𝐢𝐧𝐠\n\n𝟐𝟏 𝐑𝐮𝐧𝐭𝐢𝐦𝐞➣ 𝐖𝐡𝐞𝐧 𝐝𝐢𝐝 𝐛𝐨𝐭 𝐬𝐭𝐚𝐫𝐭𝐞𝐝 𝐨𝐩𝐞𝐫𝐚𝐭𝐢𝐧𝐠\n\n𝟐𝟐 𝐒𝐜𝐫𝐢𝐩𝐭➣ 𝐆𝐞𝐭 𝐛𝐨𝐭 𝐬𝐜𝐫𝐢𝐩𝐭\n\n𝟐𝟑 𝐎𝐰𝐧𝐞𝐫  ➣ 𝐆𝐞𝐭 𝐨𝐰𝐧𝐞𝐫(𝐬) 𝐜𝐨𝐧𝐭𝐚𝐜𝐭\n\n𝟐𝟒 𝐕𝐚𝐫𝐬 ➣ 𝐒𝐞𝐞 𝐚𝐥𝐥 𝐯𝐚𝐫𝐢𝐚𝐛𝐥𝐞𝐬\n\n𝟐𝟓 𝐏𝐫𝐨𝐦𝐨𝐭𝐞➣ 𝐆𝐢𝐯𝐞𝐬 𝐨𝐧𝐞 𝐚𝐝𝐦𝐢𝐧 𝐫𝐨𝐥𝐞\n\n𝟐𝟔 𝐃𝐞𝐦𝐨𝐭𝐞➣ 𝐃𝐞𝐦𝐨𝐭𝐞𝐬 𝐟𝐫𝐨𝐦 𝐠𝐫𝐨𝐮𝐩 𝐚𝐝𝐦𝐢𝐧 𝐭𝐨 𝐚 𝐦𝐞𝐦𝐛𝐞𝐫\n\n𝟐𝟕 𝐃𝐞𝐥𝐞𝐭𝐞➣ 𝐃𝐞𝐥𝐞𝐭𝐞 𝐚 𝐦𝐞𝐬𝐬𝐚𝐠𝐞\n\n𝟐𝟖 𝐑𝐞𝐦𝐨𝐯𝐞/𝐤𝐢𝐜𝐤➣ 𝐊𝐢𝐜𝐤 𝐭𝐡𝐚𝐭 𝐭𝐞𝐫𝐫𝐨𝐫𝐢𝐬𝐭 𝐟𝐫𝐨𝐦 𝐚 𝐠𝐫𝐨𝐮𝐩\n\n𝟐𝟗 𝐅𝐨𝐫𝐞𝐢𝐠𝐧𝐞𝐫𝐬➣ 𝐆𝐞𝐭 𝐟𝐨𝐫𝐞𝐢𝐠𝐧 𝐧𝐮𝐦𝐛𝐞𝐫𝐬\n\n𝟑𝟎 𝐂𝐥𝐨𝐬𝐞➣ 𝐓𝐢𝐦𝐞 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞𝐦𝐛𝐞𝐫𝐬 𝐭𝐨 𝐭𝐚𝐤𝐞 𝐚 𝐛𝐫𝐞𝐚𝐤 𝐨𝐧𝐥𝐲 𝐚𝐝𝐦𝐢𝐧𝐬 𝐜𝐚𝐧 𝐜𝐡𝐚𝐭\n\n𝟑𝟏 𝐎𝐩𝐞𝐧 ➣ 𝐄𝐯𝐞𝐫𝐲𝐨𝐧𝐞 𝐜𝐚𝐧 𝐜𝐡𝐚𝐭 𝐢𝐧 𝐚 𝐠𝐫𝐨𝐮𝐩\n\n𝟑𝟐 𝐈𝐜𝐨𝐧➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐢𝐜𝐨𝐧\n\n𝟑𝟑 𝐒𝐮𝐛𝐣𝐞𝐜𝐭➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐬𝐮𝐛𝐣𝐞𝐜𝐭\n\n𝟑𝟒 𝐃𝐞𝐬𝐜➣ 𝐆𝐞𝐭 𝐠𝐫𝐨𝐮𝐩 𝐝𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧\n\n𝟑𝟓 𝐋𝐞𝐚𝐯𝐞➣ 𝐓𝐡𝐞 𝐠𝐫𝐨𝐮𝐩 𝐢𝐬 𝐛𝐨𝐫𝐢𝐧𝐠 ,𝐭𝐢𝐦𝐞 𝐟𝐨𝐫 𝐛𝐨𝐭 𝐭𝐨 𝐥𝐞𝐚𝐯𝐞\n\n𝟑𝟔 𝐓𝐚𝐠𝐚𝐥𝐥 ➣ 𝐓𝐚𝐠 𝐞𝐯𝐞𝐫𝐲𝐨𝐧𝐞 𝐢𝐧 𝐚 𝐠𝐫𝐨𝐮𝐩 𝐜𝐡𝐚𝐭\n\n𝟑𝟕 𝐇𝐢𝐝𝐞𝐭𝐚𝐠➣ 𝐀𝐭𝐭𝐞𝐧𝐭𝐢𝐨𝐧! 𝐀𝐭𝐭𝐞𝐧𝐭𝐢𝐨𝐧! 𝐬𝐨𝐦𝐞𝐨𝐧𝐞 𝐡𝐚𝐬 𝐬𝐨𝐦𝐞𝐭𝐡𝐢𝐧𝐠 𝐭𝐨 𝐬𝐚𝐲\n\n𝟑𝟖 𝐑𝐞𝐯𝐨𝐤𝐞 ➣ 𝐑𝐞𝐬𝐞𝐭 𝐠𝐫𝐨𝐮𝐩 𝐥𝐢𝐧𝐤");
          break;
        case 'vv':
        case "retrieve":
          {
            if (!_0x1d8ddf.quoted) {
              return _0x1d8ddf.reply("quote a viewonce message eh");
            }
            const _0x21038b = _0x1d8ddf.msg?.["contextInfo"]?.["quotedMessage"];
            if (_0x21038b.imageMessage) {
              let _0xb39fc0 = _0x21038b.imageMessage.caption;
              let _0x25aed3 = await _0x318ec6.downloadAndSaveMediaMessage(_0x21038b.imageMessage);
              _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'image': {
                  'url': _0x25aed3
                },
                'caption': "Retrieved by VINIZIAZ-XMD!\n" + _0xb39fc0
              }, {
                'quoted': _0x1d8ddf
              });
            }
            if (_0x21038b.videoMessage) {
              let _0x40e5bc = _0x21038b.videoMessage.caption;
              let _0x559b8d = await _0x318ec6.downloadAndSaveMediaMessage(_0x21038b.videoMessage);
              _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'video': {
                  'url': _0x559b8d
                },
                'caption': "Retrieved by VINIZIAZ-XMD!\n" + _0x40e5bc
              }, {
                'quoted': _0x1d8ddf
              });
            }
          }
          break;
        case "vv2":
        case "wah":
          {
            if (!_0x1d8ddf.quoted) {
              return _0x1d8ddf.reply("quote a viewonce message eh");
            }
            const _0x1e28f2 = _0x1d8ddf.msg?.['contextInfo']?.["quotedMessage"];
            if (_0x1e28f2.imageMessage) {
              let _0x2ae81d = _0x1e28f2.imageMessage.caption;
              let _0x61dca0 = await _0x318ec6.downloadAndSaveMediaMessage(_0x1e28f2.imageMessage);
              _0x318ec6.sendMessage(_0x318ec6.user.id, {
                'image': {
                  'url': _0x61dca0
                },
                'caption': "Retrieved by VINIZIAZ-XMD!\n" + _0x2ae81d
              }, {
                'quoted': _0x1d8ddf
              });
            }
            if (_0x1e28f2.videoMessage) {
              let _0x4f7dda = _0x1e28f2.videoMessage.caption;
              let _0x34bd2e = await _0x318ec6.downloadAndSaveMediaMessage(_0x1e28f2.videoMessage);
              _0x318ec6.sendMessage(_0x318ec6.user.id, {
                'video': {
                  'url': _0x34bd2e
                },
                'caption': "Retrieved by VINIZIAZ-XMD!\n" + _0x4f7dda
              }, {
                'quoted': _0x1d8ddf
              });
            }
          }
          break;
        case "take":
          {
            const {
              Sticker: _0x5664f1,
              createSticker: _0x55ea7a,
              StickerTypes: _0x4453ea
            } = require('wa-sticker-formatter');
            if (!_0x3c8de7) {
              _0x1d8ddf.reply("Quote an image, a short video or a sticker to change watermark.");
              return;
            }
            ;
            let _0x12b113;
            if (_0x3c8de7.imageMessage) {
              _0x12b113 = _0x3c8de7.imageMessage;
            } else {
              if (_0x3c8de7.videoMessage) {
                _0x12b113 = _0x3c8de7.videoMessage;
              } else {
                if (_0x3c8de7.stickerMessage) {
                  _0x12b113 = _0x3c8de7.stickerMessage;
                } else {
                  _0x1d8ddf.reply("This is neither a sticker, image nor a video...");
                  return;
                }
              }
            }
            ;
            var _0x302648 = await _0x318ec6.downloadAndSaveMediaMessage(_0x12b113);
            let _0xeabff9 = new _0x5664f1(_0x302648, {
              'pack': _0x215155,
              'author': _0x215155,
              'type': _0x4453ea.FULL,
              'categories': ['🤩', '🎉'],
              'id': "12345",
              'quality': 0x46,
              'background': 'transparent'
            });
            const _0x2328cc = await _0xeabff9.toBuffer();
            _0x318ec6.sendMessage(_0x1d8ddf.chat, {
              'sticker': _0x2328cc
            }, {
              'quoted': _0x1d8ddf
            });
          }
          break;
        case 'song2':
          {
            const _0x15964d = require('yt-search');
            const _0xe4fc29 = require('node-fetch');
            const _0x1d9d24 = async _0x10c5f8 => {
              const _0x43a24b = await _0xe4fc29(_0x10c5f8);
              return _0x43a24b.json();
            };
            try {
              if (!_0x5280ae || _0x5280ae.trim().length === 0x0) {
                return _0x1d8ddf.reply("What song do you want to download ?");
              }
              const _0x15a9e9 = await _0x15964d(_0x5280ae);
              if (!_0x15a9e9 || !_0x15a9e9.videos.length) {
                return message.reply("No video found for the specified query.");
              }
              const _0x5a921e = _0x15a9e9.videos[0x0];
              const _0x5b567b = _0x5a921e.url;
              _0x1d8ddf.reply("_Please wait your download on progress..._");
              let _0x54f60c;
              let _0x55b2c9;
              let _0x5a2e7e;
              _0x54f60c = await _0x1d9d24("https://xploader-api.vercel.app/ytmp3?url=" + encodeURIComponent(_0x5b567b));
              if (_0x54f60c.success) {
                _0x55b2c9 = _0x54f60c.result.download_url;
                _0x5a2e7e = _0x54f60c.result;
              } else {
                _0x54f60c = await _0x1d9d24("https://api.ryzendesu.vip/api/downloader/ytmp3?url=" + encodeURIComponent(_0x5b567b));
                if (_0x54f60c.success) {
                  _0x55b2c9 = _0x54f60c.result.download_url;
                  _0x5a2e7e = _0x54f60c.result;
                } else {
                  _0x54f60c = await _0x1d9d24('https://api.dreaded.site/api/ytdl/audio?url=' + encodeURIComponent(_0x5b567b));
                  if (_0x54f60c.success) {
                    _0x55b2c9 = _0x54f60c.result.download_url;
                    _0x5a2e7e = _0x54f60c.result;
                  }
                }
              }
              if (!_0x55b2c9 || !_0x5a2e7e) {
                return _0x1d8ddf.reply("Failed to retrieve download URL from all sources. Please try again later.");
              }
              const _0x3a350c = {
                'audio': {
                  'url': _0x55b2c9
                },
                'mimetype': "audio/mp4",
                'fileName': _0x5a2e7e.title + ".mp3"
              };
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, _0x3a350c, {
                'quoted': _0x1d8ddf
              });
            } catch (_0x5f2142) {
              console.error("Error during download process:", _0x5f2142);
              return _0x1d8ddf.reply("Download failed due to an error: " + (_0x5f2142.message || _0x5f2142));
            }
          }
          break;
        case 'ytsearch':
        case 'yts':
          {
            if (!_0x5280ae) {
              _0x87f3c4("Provide a search term!E.g: Alan walker alone");
              return;
            }
            const {
              videos: _0x1fd22f
            } = await yts(_0x5280ae);
            if (!_0x1fd22f || _0x1fd22f.length <= 0x0) {
              _0x87f3c4("No Matching videos found for : *" + _0x5280ae + "*!!");
              return;
            }
            const _0x526793 = _0x1fd22f.length < 0xa ? _0x1fd22f.length : 0xa;
            let _0x6ebe90 = "YouTube Search\n🔍 Query ~> " + _0x5280ae + "\n\n";
            for (let _0x292ec2 = 0x0; _0x292ec2 < _0x526793; _0x292ec2++) {
              _0x6ebe90 += "Link ~> " + _0x1fd22f[_0x292ec2].url + "\nChannel ~> " + _0x1fd22f[_0x292ec2].author.name + "\nTitle ~> " + _0x1fd22f[_0x292ec2].title + "\n\n";
            }
            _0x87f3c4(_0x6ebe90);
            return;
          }
          break;
        case "ytmp3":
        case "yta":
          {
            try {
              if (!_0x5280ae) {
                return _0x1d8ddf.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗹𝗶𝗻𝗸!");
              }
              let _0x3be362 = _0x5280ae.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
              if (!_0x3be362) {
                return _0x1d8ddf.reply("𝗧𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗟𝗶𝗻𝗸");
              }
              let _0x55c83f = parseInt(_0x5280ae) - 0x1;
              if (_0x55c83f < 0x0 || _0x55c83f >= _0x3be362.length) {
                return _0x1d8ddf.reply("𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗟𝗶𝗻𝗸.");
              }
              const {
                videos: _0x114b66
              } = await yts(_0x5280ae);
              if (!_0x114b66 || _0x114b66.length === 0x0) {
                return _0x1d8ddf.reply("No songs found!");
              }
              const _0x4f3e51 = _0x114b66[0x0].url;
              let _0x29848c = await fetchJson("https://api.dreaded.site/api/ytdl/audio?url=" + _0x4f3e51);
              if (!_0x29848c || !_0x29848c.result || !_0x29848c.result.url) {
                return _0x1d8ddf.reply("Failed to fetch audio from the API.");
              }
              const _0x7419a4 = _0x29848c.result.url;
              const _0x492d8d = _0x29848c.result.title;
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'audio': {
                  'url': _0x7419a4
                },
                'mimetype': "audio/mpeg",
                'fileName': _0x492d8d + ".mp3"
              }, {
                'quoted': _0x1d8ddf
              });
            } catch (_0x2f20f9) {
              _0x1d8ddf.reply("Download failed\n" + _0x2f20f9.message);
            }
          }
          break;
        case "ytmp4":
        case "ytv":
          {
            try {
              if (!_0x5280ae) {
                return _0x1d8ddf.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 𝗹𝗶𝗻𝗸!");
              }
              let _0x273da6 = _0x5280ae.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
              if (!_0x273da6) {
                return _0x1d8ddf.reply("𝗧𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 𝗹𝗶𝗻𝗸");
              }
              let _0x4d07c7 = parseInt(_0x5280ae) - 0x1;
              if (_0x4d07c7 < 0x0 || _0x4d07c7 >= _0x273da6.length) {
                return _0x1d8ddf.reply("𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗹𝗶𝗻𝗸.");
              }
              const {
                videos: _0x35bee1
              } = await yts(_0x5280ae);
              if (!_0x35bee1 || _0x35bee1.length === 0x0) {
                return _0x1d8ddf.reply("No songs found!");
              }
              const _0x31be00 = _0x35bee1[0x0].url;
              let _0xbf3802 = await fetchJson("https://api.dreaded.site/api/ytdl/video?url=" + _0x31be00);
              if (!_0xbf3802 || !_0xbf3802.result || !_0xbf3802.result.url) {
                return _0x1d8ddf.reply("Failed to fetch video from the API.");
              }
              const _0x510f9c = _0xbf3802.result.url;
              const _0x36d716 = _0xbf3802.result.title;
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'video': {
                  'url': _0x510f9c
                },
                'mimetype': 'video/mpeg',
                'fileName': _0x36d716 + ".mp4"
              }, {
                'quoted': _0x1d8ddf
              });
            } catch (_0x506ac5) {
              _0x1d8ddf.reply("Download failed\n" + _0x506ac5.message);
            }
          }
          break;
        case "ping":
        case "speed":
          {
            await _0x49317b();
            _0x1d8ddf.reply("𝗣𝗼𝗻𝗴\n " + _0x146cfe.toFixed(0x4) + " 𝗠𝘀");
          }
          break;
        case 'uptime':
          {
            _0x1d8ddf.reply('' + runtime(process.uptime()));
          }
          break;
        case 'runtime':
          let _0x55e5f0 = "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗿𝘂𝗻𝗻𝗶𝗻𝗴 𝘀𝗶𝗻𝗰𝗲 " + runtime(process.uptime());
          _0x318ec6.sendMessage(_0x1d8ddf.chat, {
            'text': _0x55e5f0,
            'contextInfo': {
              'externalAdReply': {
                'showAdAttribution': true,
                'title': "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗",
                'body': "https://chat.whatsapp.com/DefN96lXQ4i5iO1wDDeu2C",
                'thumbnailUrl': "https://i.imgur.com/HP6GyiD.jpeg",
                'sourceUrl': "https://chat.whatsapp.com/DefN96lXQ4i5iO1wDDeu2C",
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          }, {
            'quoted': _0x1d8ddf
          });
          break;
        case 'apk':
        case "app":
          {
            if (!_0x5280ae) {
              return _0x87f3c4("Where is the app name?");
            }
            let _0x5464de = await fetchJson('https://bk9.fun/search/apk?q=' + _0x5280ae);
            let _0x51a456 = await fetchJson("https://bk9.fun/download/apk?id=" + _0x5464de.BK9[0x0].id);
            await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
              'document': {
                'url': _0x51a456.BK9.dllink
              },
              'fileName': _0x51a456.BK9.name,
              'mimetype': "application/vnd.android.package-archive",
              'contextInfo': {
                'externalAdReply': {
                  'title': "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗",
                  'body': '' + _0x51a456.BK9.name,
                  'thumbnailUrl': '' + _0x51a456.BK9.icon,
                  'sourceUrl': '' + _0x51a456.BK9.dllink,
                  'mediaType': 0x2,
                  'showAdAttribution': true,
                  'renderLargerThumbnail': false
                }
              }
            }, {
              'quoted': _0x1d8ddf
            });
          }
          break;
        case "mix":
          {
            const {
              Sticker: _0x24dfce,
              createSticker: _0x498578,
              StickerTypes: _0x483602
            } = require("wa-sticker-formatter");
            if (!_0x5280ae) {
              return _0x1d8ddf.reply("No emojis provided ? ");
            }
            const _0x30dafa = _0x5280ae.split('+');
            if (_0x30dafa.length !== 0x2) {
              _0x1d8ddf.reply("Specify the emojis and separate with '+'");
              return;
            }
            const _0x493912 = _0x30dafa[0x0].trim();
            const _0x3a8967 = _0x30dafa[0x1].trim();
            try {
              const _0x443006 = require("axios");
              const _0x42ca2d = await _0x443006.get("https://levanter.onrender.com/emix?q=" + _0x493912 + _0x3a8967);
              if (_0x42ca2d.data.status === true) {
                let _0x2922ee = new _0x24dfce(_0x42ca2d.data.result, {
                  'pack': botname,
                  'type': _0x483602.CROPPED,
                  'categories': ['🤩', '🎉'],
                  'id': '12345',
                  'quality': 0x46,
                  'background': 'transparent'
                });
                const _0x4387c2 = await _0x2922ee.toBuffer();
                _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                  'sticker': _0x4387c2
                }, {
                  'quoted': _0x1d8ddf
                });
              } else {
                _0x1d8ddf.reply("Unable to create emoji mix.");
              }
            } catch (_0x2ecc47) {
              _0x1d8ddf.reply("An error occurred while creating the emoji mix." + _0x2ecc47);
            }
          }
          break;
        case "lyrics":
          {
            const _0x150b14 = require("node-fetch");
            const _0x2d9de3 = "https://api.dreaded.site/api/lyrics?title=" + encodeURIComponent(_0x5280ae);
            try {
              if (!_0x5280ae) {
                return _0x1d8ddf.reply("Provide a song name!");
              }
              const _0x188756 = await fetchJson(_0x2d9de3);
              if (!_0x188756.success || !_0x188756.result || !_0x188756.result.lyrics) {
                return _0x1d8ddf.reply("Sorry, I couldn't find any lyrics for \"" + _0x5280ae + "\".");
              }
              const {
                title: _0x21b631,
                artist: _0x36ce59,
                link: _0x5b2575,
                thumb: _0x2bf7bd,
                lyrics: _0x126273
              } = _0x188756.result;
              const _0x49b3bd = _0x2bf7bd || "https://i.imgur.com/HP6GyiD.jpeg";
              const _0x40f651 = await _0x150b14(_0x49b3bd).then(_0x451ebc => _0x451ebc.buffer())["catch"](_0x4ee9f2 => {
                console.error("Error fetching image:", _0x4ee9f2);
                return null;
              });
              if (!_0x40f651) {
                return _0x1d8ddf.reply("An error occurred while fetching the image.");
              }
              const _0x148235 = "**Title**: " + _0x21b631 + "\n**Artist**: " + _0x36ce59 + "\n\n" + _0x126273;
              await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'image': _0x40f651,
                'caption': _0x148235
              }, {
                'quoted': _0x1d8ddf
              });
            } catch (_0x54f281) {
              console.error(_0x54f281);
              _0x1d8ddf.reply("An error occurred while fetching the lyrics for \"" + _0x5280ae + "\".");
            }
          }
          break;
        case "toimage":
        case "photo":
          {
            if (!_0x58ce36) {
              throw "Tag a static video with the command!";
            }
            if (!/webp/.test(_0x1dad43)) {
              throw "Tag a sticker with " + (prefix + _0x2b2e26);
            }
            let _0x1ae841 = await _0x318ec6.downloadAndSaveMediaMessage(_0x58ce36);
            let _0x5b9abf = await getRandom(".png");
            exec("ffmpeg -i " + _0x1ae841 + " " + _0x5b9abf, _0x204572 => {
              fs.unlinkSync(_0x1ae841);
              if (_0x204572) {
                throw _0x204572;
              }
              let _0x4bb6a9 = fs.readFileSync(_0x5b9abf);
              _0x318ec6.sendMessage(_0x1d8ddf.chat, {
                'image': _0x4bb6a9,
                'caption': "𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗲𝗱 𝗯𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0x1d8ddf
              });
              fs.unlinkSync(_0x5b9abf);
            });
          }
          break;
        case "movie":
          if (!_0x5280ae) {
            return _0x87f3c4("Provide a series or movie name.");
          }
          let _0x33dfe5 = await axios.get("http://www.omdbapi.com/?apikey=742b2d09&t=" + _0x5280ae + "&plot=full");
          let _0x4e9853 = '';
          console.log(_0x33dfe5.data);
          _0x4e9853 += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n ``` IMDB MOVIE SEARCH```\n⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";
          _0x4e9853 += "🎬Title      : " + _0x33dfe5.data.Title + "\n";
          _0x4e9853 += "📅Year       : " + _0x33dfe5.data.Year + "\n";
          _0x4e9853 += "⭐Rated      : " + _0x33dfe5.data.Rated + "\n";
          _0x4e9853 += "📆Released   : " + _0x33dfe5.data.Released + "\n";
          _0x4e9853 += "⏳Runtime    : " + _0x33dfe5.data.Runtime + "\n";
          _0x4e9853 += "🌀Genre      : " + _0x33dfe5.data.Genre + "\n";
          _0x4e9853 += "👨🏻‍💻Director   : " + _0x33dfe5.data.Director + "\n";
          _0x4e9853 += "✍Writer     : " + _0x33dfe5.data.Writer + "\n";
          _0x4e9853 += "👨Actors     : " + _0x33dfe5.data.Actors + "\n";
          _0x4e9853 += "📃Plot       : " + _0x33dfe5.data.Plot + "\n";
          _0x4e9853 += "🌐Language   : " + _0x33dfe5.data.Language + "\n";
          _0x4e9853 += "🌍Country    : " + _0x33dfe5.data.Country + "\n";
          _0x4e9853 += "🎖️Awards     : " + _0x33dfe5.data.Awards + "\n";
          _0x4e9853 += "📦BoxOffice  : " + _0x33dfe5.data.BoxOffice + "\n";
          _0x4e9853 += "🏙️Production : " + _0x33dfe5.data.Production + "\n";
          _0x4e9853 += "🌟imdbRating : " + _0x33dfe5.data.imdbRating + "\n";
          _0x4e9853 += "❎imdbVotes  : " + _0x33dfe5.data.imdbVotes + '';
          _0x318ec6.sendMessage(_0x4cef7b, {
            'image': {
              'url': _0x33dfe5.data.Poster
            },
            'caption': _0x4e9853
          }, {
            'quoted': _0x1d8ddf
          });
          break;
        case "linkgroup":
        case "link":
          {
            if (!_0x1d8ddf.isGroup) {
              throw group;
            }
            if (!_0x1b0633) {
              throw botAdmin;
            }
            let _0x1340a2 = await _0x318ec6.groupInviteCode(_0x1d8ddf.chat);
            _0x318ec6.sendText(_0x1d8ddf.chat, 'https://chat.whatsapp.com/' + _0x1340a2 + "\n\nGroup link for  " + _0x537f06.subject, _0x1d8ddf, {
              'detectLink': true
            });
          }
          break;
        case "botpp":
          {
            if (!_0x3cd2e7) {
              throw NotOwner;
            }
            if (!_0x58ce36) {
              throw "Tag an image you want to be the bot's profile picture with " + (prefix + _0x2b2e26);
            }
            if (!/image/.test(_0x1dad43)) {
              throw "Tag an image you want to be the bot's profile picture with " + (prefix + _0x2b2e26);
            }
            if (/webp/.test(_0x1dad43)) {
              throw "Tag an image you want to be the bot's profile picture with " + (prefix + _0x2b2e26);
            }
            let _0x45b39c = await _0x318ec6.downloadAndSaveMediaMessage(_0x58ce36);
            await _0x318ec6.updateProfilePicture(_0x320154, {
              'url': _0x45b39c
            })["catch"](_0x34e64d => fs.unlinkSync(_0x45b39c));
            _0x87f3c4`Bot's profile picture has been successfully updated!`;
          }
          break;
        case "broadcast":
          {
            if (!_0x3cd2e7) {
              throw NotOwner;
              return;
            }
            if (!_0x5280ae) {
              _0x87f3c4("❌ No broadcast message provided!");
              return;
            }
            let _0x44e67d = await _0x318ec6.groupFetchAllParticipating();
            let _0x16feac = Object.entries(_0x44e67d).slice(0x0).map(_0x89f8f3 => _0x89f8f3[0x1]);
            let _0x3bdc5e = _0x16feac.map(_0x31a155 => _0x31a155.id);
            _0x87f3c4(" Broadcasting in " + _0x3bdc5e.length + " Group Chat, in " + _0x3bdc5e.length * 1.5 + " seconds");
            for (let _0x257528 of _0x3bdc5e) {
              let _0x4ec31c = "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗕𝗥𝗢𝗔𝗗𝗖𝗔𝗦𝗧 >\n\n🀄 Message: " + _0x5280ae + "\n\nAuthor: " + _0x215155;
              await _0x318ec6.sendMessage(_0x257528, {
                'image': {
                  'url': "https://telegra.ph/file/416c3ae0cfe59be8db011.jpg"
                },
                'caption': '' + _0x4ec31c
              });
            }
            _0x87f3c4("Broadcasted to " + _0x3bdc5e.length + " Groups.");
          }
          break;
        case "gemini":
          {
            try {
              if (!_0x5280ae) {
                return _0x1d8ddf.reply("This is VINIZIAZ-XMD, an AI using Gemini APIs to process text, provide yr query");
              }
              const {
                default: _0x3009fe
              } = await import("gemini-ai");
              const _0xacb0af = new _0x3009fe("AIzaSyDJUtskTG-MvQdlT4tNE319zBqLMFei8nQ");
              const _0x33986f = _0xacb0af.createChat();
              const _0x50b749 = await _0x33986f.ask(_0x5280ae);
              await _0x1d8ddf.reply(_0x50b749);
            } catch (_0x503fd9) {
              _0x1d8ddf.reply("I am unable to generate responses\n\n" + _0x503fd9);
            }
          }
          break;
        case "setvar":
          if (!_0x3cd2e7) {
            throw NotOwner;
          }
          if (!_0x5280ae.split('=')[0x1]) {
            return _0x87f3c4("Incorrect Usage:\nProvide the key and value correctly\nExample: setvar AUTOVIEW_STATUS=TRUE");
          }
          const _0x4d18cc = new _0x2167f9({
            'token': herokuapi
          });
          let _0x31350b = "/apps/" + appname;
          await _0x4d18cc.patch(_0x31350b + "/config-vars", {
            'body': {
              [_0x5280ae.split('=')[0x0]]: _0x5280ae.split('=')[0x1]
            }
          });
          await _0x87f3c4("✅ The variable " + _0x5280ae.split('=')[0x0] + " = " + _0x5280ae.split('=')[0x1] + " has been set Successfuly.\nWait 20s for changes to effect!");
          break;
        case "dlt":
        case "dil":
          {
            if (!_0x1d8ddf.quoted) {
              throw "No message quoted for deletion";
            }
            let {
              chat: _0xba13e5,
              fromMe: _0x160c36,
              id: _0x2d75c6,
              isBaileys: _0x23958b
            } = _0x1d8ddf.quoted;
            if (_0x23958b) {
              throw "I cannot delete. Quoted message is my message or another bot message.";
            }
            _0x318ec6.sendMessage(_0x1d8ddf.chat, {
              'delete': {
                'remoteJid': _0x1d8ddf.chat,
                'fromMe': true,
                'id': _0x1d8ddf.quoted.id,
                'participant': _0x1d8ddf.quoted.sender
              }
            });
          }
          break;
        case 'block':
          {
            if (!_0x3cd2e7) {
              throw NotOwner;
            }
            if (!_0x1d8ddf.quoted) {
              throw "𝗧𝗮𝗴 𝘀𝗼𝗺𝗲𝗼𝗻𝗲!";
            }
            let _0x2c2169 = _0x1d8ddf.mentionedJid[0x0] ? _0x1d8ddf.mentionedJid[0x0] : _0x1d8ddf.quoted ? _0x1d8ddf.quoted.sender : _0x5280ae.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
            if (_0x2c2169 == "254114660061@s.whatsapp.net") {
              return _0x1d8ddf.reply("𝗜 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗹𝗼𝗰𝗸 𝗺𝘆 𝗢𝘄𝗻𝗲𝗿 😡");
            }
            if (_0x2c2169 == _0x318ec6.decodeJid(_0x318ec6.user.id)) {
              throw "𝗜 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗹𝗼𝗰𝗸 𝗺𝘆𝘀𝗲𝗹𝗳 𝗶𝗱𝗶𝗼𝘁 😡";
            }
            await _0x318ec6.updateBlockStatus(_0x2c2169, "block");
            _0x1d8ddf.reply("𝗕𝗹𝗼𝗰𝗸𝗲𝗱 𝘁𝗵𝗶𝘀 𝗺𝗼𝘁𝗵𝗲𝗿𝗳*𝗰𝗸𝗲𝗿 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆!");
          }
          break;
        case "unblock":
          {
            if (!_0x3cd2e7) {
              throw NotOwner;
            }
            if (!_0x1d8ddf.quoted) {
              throw "𝗧𝗮𝗴 𝘀𝗼𝗺𝗲𝗼𝗻𝗲!";
            }
            let _0x32a8a8 = _0x1d8ddf.mentionedJid[0x0] ? _0x1d8ddf.mentionedJid[0x0] : _0x1d8ddf.quoted ? _0x1d8ddf.quoted.sender : _0x5280ae.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
            await _0x318ec6.updateBlockStatus(_0x32a8a8, "unblock");
            _0x1d8ddf.reply("𝗨𝗻𝗯𝗹𝗼𝗰𝗸𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆✅!");
          }
          break;
        case "join":
          {
            if (!_0x3cd2e7) {
              throw NotOwner;
            }
            if (!_0x5280ae) {
              return _0x87f3c4("provide a valid group link");
            }
            let _0x10f637 = _0xacd495[0x0].split("https://chat.whatsapp.com/")[0x1];
            await _0x318ec6.groupAcceptInvite(_0x10f637).then(_0x354259 => _0x87f3c4(jsonformat(_0x354259)))["catch"](_0x2aaaa8 => _0x87f3c4("Link has problem."));
          }
          break;
        case "enc":
        case "encrypte":
          {
            const _0x5c5931 = require("javascript-obfuscator");
            if (_0x1d8ddf.quoted && _0x1d8ddf.quoted.text) {
              const _0x15cded = _0x1d8ddf.quoted.text;
              const _0x2018da = _0x5c5931.obfuscate(_0x15cded, {
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
              _0x1d8ddf.reply(_0x2018da.getObfuscatedCode());
            } else {
              _0x1d8ddf.reply("Quote/Tag a valid JavaScript code to encrypt!");
            }
          }
          break;
        case "gpt3":
          {
            if (!_0x5280ae) {
              return _0x87f3c4("Hello there, How can i help you?");
            }
            let _0x4a58d1 = await fetchJson("https://bk9.fun/ai/blackbox?q=" + _0x5280ae);
            if (!_0x4a58d1.BK9) {
              return _0x87f3c4("An error occurred while fetching the AI chatbot response. Please try again later.");
            } else {
              _0x87f3c4(_0x4a58d1.BK9);
            }
          }
          break;
        case "gcprofile":
          {
            function _0x53a9a3(_0x3620e1) {
              const _0x3ade9d = new Date(_0x3620e1 * 0x3e8);
              const _0x3459a3 = ["Sunday", "Monday", 'Tuesday', "Wednesday", "Thursday", "Friday", "Saturday"];
              return {
                'date': _0x3ade9d.getDate(),
                'month': new Intl.DateTimeFormat("en-US", {
                  'month': 'long'
                }).format(_0x3ade9d),
                'year': _0x3ade9d.getFullYear(),
                'day': _0x3459a3[_0x3ade9d.getUTCDay()],
                'time': _0x3ade9d.getUTCHours() + ':' + _0x3ade9d.getUTCMinutes() + ':' + _0x3ade9d.getUTCSeconds()
              };
            }
            if (!_0x1d8ddf.isGroup) {
              return _0x1d8ddf.reply("This command is meant for groups");
            }
            let _0xda72fb = await _0x318ec6.groupMetadata(_0x1d8ddf.chat);
            let _0x43d6d5 = await _0x53a9a3(_0xda72fb.creation);
            try {
              pp = await _0x318ec6.profilePictureUrl(chat, "image");
            } catch {
              pp = "https://i.imgur.com/HP6GyiD.jpeg";
            }
            await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
              'image': {
                'url': pp
              },
              'caption': "_Name_ : *" + _0xda72fb.subject + "*\n\n_ID_ : *" + _0xda72fb.id + "*\n\n_Group owner_ : " + ('@' + _0xda72fb.owner.split('@')[0x0]) + " || 'No Creator'\n\n_Group created_ : *" + _0x43d6d5.day + ", " + _0x43d6d5.date + " " + _0x43d6d5.month + " " + _0x43d6d5.year + ", " + _0x43d6d5.time + "*\n\n_Participants_ : *" + _0xda72fb.size + "*\n_Members_ : *" + _0xda72fb.participants.filter(_0x3e7b70 => _0x3e7b70.admin == null).length + "*\n\n_Admins_ : *" + Number(_0xda72fb.participants.length - _0xda72fb.participants.filter(_0x386a61 => _0x386a61.admin == null).length) + "*\n\n_Who can send message_ : *" + (_0xda72fb.announce == true ? 'Admins' : "Everyone") + "*\n\n_Who can edit group info_ : *" + (_0xda72fb.restrict == true ? "Admins" : "Everyone") + "*\n\n_Who can add participants_ : *" + (_0xda72fb.memberAddMode == true ? "Everyone" : 'Admins') + '*'
            }, {
              'quoted': _0x1d8ddf
            });
          }
          break;
        case 'tovideo':
        case "mp4":
        case 'tovid':
          {
            if (!_0x58ce36) {
              return _0x87f3c4("Reply to Sticker");
            }
            if (!/webp/.test(_0x1dad43)) {
              return _0x87f3c4("reply sticker with caption *" + (prefix + _0x2b2e26) + '*');
            }
            let _0x165bd7 = await fetch("https://bk9.fun/converter/webpToMp4?url=" + _0x58ce36);
            let _0x109550 = await _0x318ec6.downloadAndSaveMediaMessage(_0x58ce36);
            let _0x166ca1 = await _0x165bd7(_0x109550);
            await _0x318ec6.sendMessage(_0x1d8ddf.chat, {
              'video': {
                'url': _0x166ca1.result,
                'caption': "Convert Webp To Video"
              }
            }, {
              'quoted': _0x1d8ddf
            });
            await fs.unlinkSync(_0x109550);
          }
          break;
        default:
          {
            if (_0x1494bd && _0x51c6c4.toLowerCase() != undefined) {
              if (_0x1d8ddf.chat.endsWith("broadcast")) {
                return;
              }
              if (_0x1d8ddf.isBaileys) {
                return;
              }
              if (!_0x51c6c4.toLowerCase()) {
                return;
              }
              if (_0x3573be || _0x1494bd && !_0x1d8ddf.isGroup) {
                console.log(chalk.black(chalk.bgRed("[ ERROR ]")), !_0x563d(0x4d5) ? chalk.green(_0x563d(0x4f7)) : chalk.keyword("turquoise")("command"), !_0x563d(0x4d5) ? chalk.green('' + prefix + _0x2b2e26) : chalk.keyword("turquoise")('' + prefix + _0x2b2e26), chalk.keyword('turquoise')("Viniziaz"));
              } else if (_0x3573be || _0x1494bd && _0x1d8ddf.isGroup) {
                console.log(chalk.black(chalk.bgRed("[ ERROR ]")), !_0x563d(0x4d5) ? chalk.green(_0x563d(0x4f7)) : chalk.keyword("turquoise")("command"), !_0x563d(0x4d5) ? chalk.green('' + prefix + _0x2b2e26) : chalk.keyword("turquoise")('' + prefix + _0x2b2e26), chalk.keyword('turquoise')('Viniziaz'));
              }
            }
          }
      }
    }
  } catch (_0x3f80e0) {
    _0x1d8ddf.reply(util.format(_0x3f80e0));
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});
