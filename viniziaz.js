/* What does this mean....? */
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
} = require("compile-run");
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
module.exports = viniziaz = async (_0x38a88a, _0x338562, _0x54bef0, _0x19773a) => {
  try {
    var _0xee96b6 = _0x338562.mtype === "conversation" ? _0x338562.message.conversation : _0x338562.mtype == 'imageMessage' ? _0x338562.message.imageMessage.caption : _0x338562.mtype == "videoMessage" ? _0x338562.message.videoMessage.caption : _0x338562.mtype == 'extendedTextMessage' ? _0x338562.message.extendedTextMessage.text : _0x338562.mtype == "buttonsResponseMessage" ? _0x338562.message.buttonsResponseMessage.selectedButtonId : _0x338562.mtype == "listResponseMessage" ? _0x338562.message.listResponseMessage.singleSelectReply.selectedRowId : _0x338562.mtype == "templateButtonReplyMessage" ? _0x338562.message.templateButtonReplyMessage.selectedId : _0x338562.mtype === "messageContextInfo" ? _0x338562.message.buttonsResponseMessage?.["selectedButtonId"] || _0x338562.message.listResponseMessage?.['singleSelectReply']["selectedRowId"] || _0x338562.text : '';
    var _0x4867f8 = typeof _0x338562.text == "string" ? _0x338562.text : '';
    var _0x30e1f8 = _0x338562.message.extendedTextMessage?.["contextInfo"]?.['quotedMessage'];
    const _0x3d43ce = require("heroku-client");
    const _0x4cc17f = _0xee96b6.replace(prefix, '').trim().split(/ +/).shift().toLowerCase();
    const _0x5eadbb = _0xee96b6.trim().split(/ +/).slice(0x1);
    const _0x3d3499 = _0x338562.pushName || "No Name";
    const _0x1c9a44 = await _0x38a88a.decodeJid(_0x38a88a.user.id);
    const _0x24ebf2 = !!(_0x338562.sender == _0x1c9a44);
    let _0x2c14bf = q = _0x5eadbb.join(" ");
    _0x338562.isBaileys = _0x338562.id.startsWith("BAE5") && _0x338562.id.length === 0x10;
    const _0x4b480f = _0x338562.chat;
    const _0x91a68a = _0x338562.reply;
    const _0x20ead1 = _0x338562.sender;
    const _0x5a5c5c = _0x54bef0.messages[0x0];
    const _0x45adcc = _0x18d31e => {
      let _0x23852f = [];
      for (let _0x46f733 of _0x18d31e) {
        if (_0x46f733.admin === 'superadmin') {
          _0x23852f.push(_0x46f733.id);
        } else if (_0x46f733.admin === 'admin') {
          _0x23852f.push(_0x46f733.id);
        } else {
          '';
        }
      }
      return _0x23852f || [];
    };
    const _0x1f223d = _0x338562.quoted || _0x338562;
    const _0x2fea9f = _0x1f223d.mtype == "buttonsMessage" ? _0x1f223d[Object.keys(_0x1f223d)[0x1]] : _0x1f223d.mtype == "templateMessage" ? _0x1f223d.hydratedTemplate[Object.keys(_0x1f223d.hydratedTemplate)[0x1]] : _0x1f223d.mtype == "product" ? _0x1f223d[Object.keys(_0x1f223d)[0x0]] : _0x338562.quoted ? _0x338562.quoted : _0x338562;
    const _0x129ae5 = (_0x2fea9f.msg || _0x2fea9f).mimetype || '';
    const _0x9bea7f = _0x2fea9f.msg || _0x2fea9f;
    const _0x2dea82 = _0xee96b6.startsWith(prefix);
    const _0x2b94e9 = bad.split(',');
    const _0x25caea = DevViniziaz.map(_0x2aa544 => _0x2aa544.replace(/[^0-9]/g, '') + "@s.whatsapp.net").includes(_0x338562.sender);
    const _0x552411 = _0x338562.isGroup ? await _0x38a88a.groupMetadata(_0x338562.chat)["catch"](_0x2c67bd => {}) : '';
    const _0x4444eb = _0x338562.isGroup && _0x552411 ? await _0x552411.subject : '';
    const _0x23ae2f = _0x338562.isGroup && _0x552411 ? await _0x552411.participants : '';
    const _0xb8046d = _0x338562.isGroup ? await _0x45adcc(_0x23ae2f) : '';
    const _0x2437eb = _0x338562.isGroup ? _0xb8046d.includes(_0x1c9a44) : false;
    const _0x580faf = _0x338562.isGroup ? _0xb8046d.includes(_0x338562.sender) : false;
    const _0x521127 = "254759925133".split(',');
    const _0x561290 = new Date();
    const _0x6c20e6 = speed();
    const _0x44c1ca = speed() - _0x6c20e6;
    if (!fs.existsSync('message_data')) {
      fs.mkdirSync('message_data');
    }
    function _0x37079f(_0x5ed4ce, _0x58056f) {
      const _0x459b2a = path.join('message_data', _0x5ed4ce, _0x58056f + ".json");
      try {
        const _0x6efa35 = fs.readFileSync(_0x459b2a, "utf8");
        return JSON.parse(_0x6efa35) || [];
      } catch (_0x4deb11) {
        return [];
      }
    }
    function _0x1ea2b6(_0x385b75, _0xc1883d, _0x5f7101) {
      const _0x5037ba = path.join('message_data', _0x385b75);
      if (!fs.existsSync(_0x5037ba)) {
        fs.mkdirSync(_0x5037ba, {
          'recursive': true
        });
      }
      const _0x157f27 = path.join(_0x5037ba, _0xc1883d + ".json");
      try {
        fs.writeFileSync(_0x157f27, JSON.stringify(_0x5f7101, null, 0x2));
      } catch (_0x15fe43) {
        console.error("Error saving chat data:", _0x15fe43);
      }
    }
    function _0xa1fb59(_0x22c9fc) {
      const _0x5c8553 = _0x22c9fc.key.remoteJid;
      const _0x45f296 = _0x22c9fc.key.id;
      const _0xe1b106 = _0x37079f(_0x5c8553, _0x45f296);
      _0xe1b106.push(_0x22c9fc);
      _0x1ea2b6(_0x5c8553, _0x45f296, _0xe1b106);
    }
    async function _0x3659a5(_0x11ddaf, _0x2e0bdb) {
      const _0x5189ac = _0x2e0bdb.key.remoteJid;
      const _0x961ba6 = _0x2e0bdb.message.protocolMessage.key.id;
      const _0x3b6652 = _0x37079f(_0x5189ac, _0x961ba6);
      const _0x3fffc0 = _0x3b6652[0x0];
      if (_0x3fffc0) {
        const _0x1b970b = _0x2e0bdb.participant || _0x2e0bdb.key.participant || _0x2e0bdb.key.remoteJid;
        const _0x1b7eda = _0x3fffc0.key.participant || _0x3fffc0.key.remoteJid;
        const _0x49fad5 = '@' + _0x1b970b.split('@')[0x0];
        if (_0x1b970b.includes(_0x11ddaf.user.id) || _0x1b7eda.includes(_0x11ddaf.user.id)) {
          return;
        }
        let _0x4fb163 = "░𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭 𝗔𝗡𝗧𝗜𝗗𝗘𝗟𝗘𝗧𝗘 𝗥𝗘𝗣𝗢𝗥𝗧░\n\n" + (" 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗯𝘆: " + _0x49fad5 + "\n\n");
        if (_0x3fffc0.message?.["conversation"]) {
          const _0xe2396 = _0x3fffc0.message.conversation;
          _0x4fb163 += " 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗠𝗲𝘀𝘀𝗮𝗴𝗲: " + _0xe2396;
          await _0x11ddaf.sendMessage(_0x11ddaf.user.id, {
            'text': _0x4fb163
          }, {
            'quoted': _0x338562
          });
        } else {
          if (_0x3fffc0.message?.["extendedTextMessage"]) {
            const _0x5c8bad = _0x3fffc0.message.extendedTextMessage.text;
            _0x4fb163 += " 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗖𝗼𝗻𝘁𝗲𝗻𝘁: " + _0x5c8bad;
            await _0x11ddaf.sendMessage(_0x11ddaf.user.id, {
              'text': _0x4fb163
            }, {
              'quoted': _0x338562
            });
          }
        }
      }
    }
    let _0x4bf303 = _0x4867f8.length > 0x1e ? q.substring(0x0, 0x1e) + "..." : _0x4867f8;
    const _0x337005 = _0x5a5c5c.key.remoteJid;
    if (wapresence === "online") {
      _0x38a88a.sendPresenceUpdate("available", _0x337005);
    } else {
      if (wapresence === "typing") {
        _0x38a88a.sendPresenceUpdate("composing", _0x337005);
      } else if (wapresence === "recording") {
        _0x38a88a.sendPresenceUpdate("recording", _0x337005);
      } else {
        _0x38a88a.sendPresenceUpdate("unavailable", _0x337005);
      }
    }
    if (_0x2dea82 && mode === "PRIVATE" && !_0x24ebf2 && !_0x25caea && _0x338562.sender !== dev) {
      return;
    }
    if (autoread === 'TRUE' && !_0x338562.isGroup) {
      _0x38a88a.readMessages([_0x338562.key]);
    }
    if (_0x24ebf2 && _0x5a5c5c.key.id.startsWith("BAE5") && _0x5a5c5c.key.id.length === 0x10 && !_0x338562.isGroup) {
      return;
    }
    if (antidel === "TRUE") {
      if (_0x5a5c5c.message?.["protocolMessage"]?.['key']) {
        await _0x3659a5(_0x38a88a, _0x5a5c5c);
      } else {
        _0xa1fb59(_0x5a5c5c);
      }
    }
    _0x38a88a.sendContact = async (_0x4346db, _0x38bac2, _0x225c3a = '', _0x1f1730 = {}) => {
      let _0x43194c = [];
      for (let _0x3890d7 of _0x38bac2) {
        _0x43194c.push({
          'displayName': "VINIZIAZ DEV",
          'vcard': "BEGIN:VCARD\nVERSION:3.0\nN: VINIZIAZ DEV\nFN:VINIZIAZ DEV\nitem1.TEL;waid=" + _0x3890d7 + ':' + _0x3890d7 + "\nitem1.X-ABLabel:Number\nitem2.EMAIL;type=INTERNET:dicksonnicky50@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/nick_hunter9\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Kenya;;;;\nitem4.X-ABLabel:Region\nEND:VCARD"
        });
      }
      _0x38a88a.sendMessage(_0x4346db, {
        'contacts': {
          'displayName': "VINIZIAZ DEV",
          'contacts': _0x43194c
        },
        ..._0x1f1730
      }, {
        'quoted': _0x225c3a
      });
    };
    if (antibot === "TRUE" && _0x5a5c5c.key.id.startsWith("BAE5") && _0x338562.isGroup && !_0x580faf && _0x2437eb && _0x5a5c5c.key.id.length === 16) {
      kidts = _0x338562.sender;
      _0x38a88a.sendMessage(_0x338562.chat, {
        'text': "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 antibot:\n\n@" + kidts.split('@')[0] + " has been identified as a bot. Removed by VINIZIAZ to prevent unnecessary spam!",
        'contextInfo': {
          'mentionedJid': [kidts]
        }
      }, {
        'quoted': _0x338562
      });
      await _0x38a88a.groupParticipantsUpdate(_0x338562.chat, [kidts], "remove");
    }
    if (_0x4867f8.startsWith('>')) {
      if (!_0x25caea) {
        return _0x91a68a("Only owner can evaluate bailey codes");
      }
      try {
        let _0x1ed437 = await eval(_0x4867f8.slice(0x2));
        if (typeof _0x1ed437 !== "string") {
          _0x1ed437 = require('util').inspect(_0x1ed437);
        }
        await _0x91a68a(_0x1ed437);
      } catch (_0x5462d6) {
        await _0x91a68a(String(_0x5462d6));
      }
    }
    async function _0x4b4cc2() {}
    if (gptdm === "TRUE" && _0x338562.chat.endsWith("@s.whatsapp.net")) {
      let _0x46b159 = await fetchJson("https://bk9.fun/ai/llama?q=" + _0x2c14bf);
      if (!_0x46b159.BK9) {
        return _0x91a68a("An error occurred while fetching the AI chatbot response. Please try again later.");
      } else {
        _0x91a68a(_0x46b159.BK9);
      }
    }
    if (antitag === 'TRUE' && !_0x25caea && _0x2437eb && !_0x580faf && _0x338562.mentionedJid && _0x338562.mentionedJid.length > 0xa) {
      if (_0x24ebf2) {
        return;
      }
      const _0x1c478e = _0x338562.sender;
      await _0x38a88a.sendMessage(_0x338562.chat, {
        'text': '@' + _0x1c478e.split('@')[0x0] + ", Antitag is Active🔨",
        'contextInfo': {
          'mentionedJid': [_0x1c478e]
        }
      }, {
        'quoted': _0x338562
      });
      await _0x38a88a.sendMessage(_0x338562.chat, {
        'delete': {
          'remoteJid': _0x338562.chat,
          'fromMe': false,
          'id': _0x338562.key.id,
          'participant': _0x1c478e
        }
      });
      await _0x38a88a.groupParticipantsUpdate(_0x338562.chat, [_0x1c478e], "remove");
    }
    async function _0x5ca91f() {
      var _0x582964 = ['🖤', '🤬', '❤', '✅', "𝗣𝗶𝗻𝗴𝗶𝗻𝗴 𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗲!"];
      let {
        key: _0x39dc98
      } = await _0x38a88a.sendMessage(_0x4b480f, {
        'text': '𝗣𝗼𝗻𝗴'
      });
      for (let _0x38bc9a = 0x0; _0x38bc9a < _0x582964.length; _0x38bc9a++) {
        await _0x38a88a.sendMessage(_0x4b480f, {
          'text': _0x582964[_0x38bc9a],
          'edit': _0x39dc98
        });
      }
    }
    const _0x28a3c6 = () => {
      const _0x7d7acc = DateTime.now().setZone("Africa/Nairobi").hour;
      if (_0x7d7acc >= 0x5 && _0x7d7acc < 0xc) {
        return "𝗚𝗼𝗼𝗱 𝗠𝗼𝗿𝗻𝗶𝗻𝗴 🌅";
      } else {
        if (_0x7d7acc >= 0xc && _0x7d7acc < 0x10) {
          return "𝗚𝗼𝗼𝗱 𝗔𝗳𝘁𝗲𝗿𝗻𝗼𝗼𝗻 ☀️";
        } else {
          return _0x7d7acc >= 0x10 && _0x7d7acc < 0x14 ? "𝗚𝗼𝗼𝗱 𝗘𝘃𝗲𝗻𝗶𝗻𝗴 🌇" : "𝗚𝗼𝗼𝗱 𝗡𝗶𝗴𝗵𝘁 😴";
        }
      }
    };
    if (badwordkick === "TRUE" && _0x2437eb && !_0x580faf && _0xee96b6 && new RegExp("\\b" + _0x2b94e9.join("\\b|\\b") + "\\b").test(_0xee96b6.toLowerCase())) {
      _0x38a88a.groupParticipantsUpdate(_0x4b480f, [_0x20ead1], "remove");
      _0x91a68a("Hey niggah.\n\nMy owner hates usage of bad words in my presence!");
    }
    if (antilink === "TRUE" && _0xee96b6.includes('chat.whatsapp.com') && !_0x25caea && _0x2437eb && !_0x580faf && _0x338562.isGroup) {
      kid = _0x338562.sender;
      _0x38a88a.sendMessage(_0x338562.chat, {
        'delete': {
          'remoteJid': _0x338562.chat,
          'fromMe': false,
          'id': _0x338562.key.id,
          'participant': kid
        }
      }).then(() => _0x38a88a.groupParticipantsUpdate(_0x338562.chat, [kid], "remove"));
      _0x38a88a.sendMessage(_0x338562.chat, {
        'text': "𝗛𝗲𝘆 @" + kid.split('@')[0x0] + "👋\n\n𝗦𝗲𝗻𝗱𝗶𝗻𝗴 𝗚𝗿𝗼𝘂𝗽 𝗟𝗶𝗻𝗸𝘀 𝗶𝘀 𝗣𝗿𝗼𝗵𝗶𝗯𝗶𝘁𝗲𝗱 𝗶𝗻 𝘁𝗵𝗶𝘀 𝗚𝗿𝗼𝘂𝗽 !",
        'contextInfo': {
          'mentionedJid': [kid]
        }
      }, {
        'quoted': _0x338562
      });
    }
    if (antilinkall === 'TRUE' && _0xee96b6.includes("https://") && !_0x25caea && _0x2437eb && !_0x580faf && _0x338562.isGroup) {
      ki = _0x338562.sender;
      _0x38a88a.sendMessage(_0x338562.chat, {
        'delete': {
          'remoteJid': _0x338562.chat,
          'fromMe': false,
          'id': _0x338562.key.id,
          'participant': ki
        }
      }).then(() => _0x38a88a.groupParticipantsUpdate(_0x338562.chat, [ki], "remove"));
      _0x38a88a.sendMessage(_0x338562.chat, {
        'text': "𝗛𝗲𝘆 @" + ki.split('@')[0x0] + "👋\n\n𝗦𝗲𝗻𝗱𝗶𝗻𝗴 𝗟𝗶𝗻𝗸𝘀 𝗶𝘀 𝗣𝗿𝗼𝗵𝗶𝗯𝗶𝘁𝗲𝗱 𝗶𝗻 𝘁𝗵𝗶𝘀 𝗚𝗿𝗼𝘂𝗽 !",
        'contextInfo': {
          'mentionedJid': [ki]
        }
      }, {
        'quoted': _0x338562
      });
    }
    if (_0x2dea82 && !_0x338562.isGroup) {
      console.log(chalk.black(chalk.bgWhite("[ VINIZIAZ-XMD ]")), !_0x2437(0x417) ? chalk.green(_0x4bf303) : chalk.keyword("turquoise")(_0x4bf303), chalk.magenta("From"), chalk.green(_0x3d3499), chalk.yellow("[ " + _0x338562.sender.replace('@s.whatsapp.net', '') + " ]"));
    } else if (_0x2dea82 && _0x338562.isGroup) {
      console.log(chalk.black(chalk.bgWhite("[ LOGS ]")), !_0x2437(0x417) ? chalk.green(_0x4bf303) : chalk.keyword("turquoise")(_0x4bf303), chalk.magenta("From"), chalk.green(_0x3d3499), chalk.yellow("[ " + _0x338562.sender.replace("@s.whatsapp.net", '') + " ]"), chalk.blueBright('IN'), chalk.green(_0x4444eb));
    }
    if (_0x2dea82) {
      switch (_0x4cc17f) {
        case "menu":
          await _0x4b4cc2();
          let _0x516027 = "𝗛𝗲𝘆 𝘁𝗵𝗲𝗿𝗲😁, " + _0x28a3c6() + "\n\n╭═════〘 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭  𝗫𝗠𝗗 〙═════╮\n┃✫╭═─────────────────═╮\n┃✬│ 𝗨𝘀𝗲𝗿 : " + _0x338562.pushName + "\n┃✫│ 𝗣𝗿𝗲𝗳𝗶𝘅 : " + prefix + "\n┃✫│ 𝗠𝗼𝗱𝗲 : " + mode + "\n┃✯│ 𝗦𝗽𝗲𝗲𝗱 :   " + _0x44c1ca.toFixed(0x4) + " 𝗠𝘀\n┃✬│ 𝗧𝗶𝗺𝗲 : " + DateTime.now().setZone("Africa/Nairobi").toLocaleString(DateTime.TIME_SIMPLE) + " on " + _0x561290.toLocaleString("en-US", {
            'weekday': 'long',
            'timeZone': "Africa/Nairobi"
          }) + "\n┃✫│ 𝗔𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 𝗥𝗔𝗠 : 32𝗚𝗕 𝗼𝗳 64𝗚𝗕\n┃✫│═════════════════════\n┃✬│█▀██████▀█▀██▀███▄█▀█\n┃✫│═════════════════════\n╰══──────────────────══╯\n●════ 〘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 〙═──═●\n╭══───────◇───────══╮\n┃✬│ 𝗩𝗶𝗱𝗲𝗼\n┃✫│ 𝗣𝗹𝗮𝘆\n┃✬│ 𝗣𝗹𝗮𝘆2\n┃✫│ 𝗦𝗼𝗻𝗴\n┃✫│ 𝗦𝗼𝗻𝗴2\n┃✬│ 𝗙𝗯𝗱𝗹\n┃✫│ 𝗧𝗶𝗸𝘁𝗼𝗸\n┃✬│ 𝗧𝘄𝗶𝘁𝘁𝗲𝗿\n┃✫│ 𝗶𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺\n┃✫│ 𝗠𝗼𝘃𝗶𝗲\n┃✬│ 𝗟𝘆𝗿𝗶𝗰𝘀\n┃✫│ 𝗪𝗵𝗮𝘁𝘀𝗼𝗻𝗴\n┃✬│ 𝗬𝘁𝘀\n┃✫│ 𝗬𝘁𝗺𝗽3\n┃✬│ 𝗬𝘁𝗺𝗽4\n╰══───────◇───────══╯\n●═════  〘 𝗘𝗗𝗜𝗧 〙══───═●\n╭══───────◇───────══╮\n┃✫│ 𝗦𝘁𝗶𝗰𝗸𝗲𝗿\n┃✬│ 𝗦𝗺𝗲𝗺𝗲\n┃✫│ 𝗣𝗵𝗼𝘁𝗼\n┃✫│ 𝗠𝗽4\n┃✬│ 𝗥𝗲𝘁𝗿𝗶𝗲𝘃𝗲\n┃✫│ 𝗩𝘃\n┃✫│ 𝗩𝘃2\n┃✬│ 𝗦𝗰𝗿𝗲𝗲𝗻𝘀𝗵𝗼𝘁\n┃✫│ 𝗠𝗶𝘅\n┃✬│ 𝗧𝗮𝗸𝗲\n┃✫│ 𝗧𝘄𝗲𝗲𝘁\n┃✫│ 𝗤𝘂𝗼𝘁𝗲𝗹𝘆\n╰══───────◇───────══╯\n●═══〘 𝗖𝗢𝗡𝗙𝗜𝗚 𝗩𝗔𝗥𝗦 〙═───═●\n╭══───────◇───────══╮\n┃✯│ 𝗔𝗻𝘁𝗶𝗱𝗲𝗹𝗲𝘁𝗲\n┃✫│ 𝗔𝗻𝘁𝗶𝗰𝗮𝗹𝗹\n┃✯│ 𝗔𝗻𝘁𝗶𝗳𝗼𝗿𝗲𝗶𝗴𝗻\n┃✫│ 𝗔𝗻𝘁𝗶𝘁𝗮𝗴\n┃✯│ 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸\n┃✯│ 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸_𝗮𝗹𝗹\n┃✯│ 𝗚𝗽𝘁_𝗜𝗻𝗯𝗼𝘅\n╰══───────◇───────══╯\n●═════  〘 𝗚𝗣𝗧 〙═────═●\n╭══───────◇───────══╮\n┃✬│ 𝗔𝗶\n┃✯│ 𝗔𝗶2\n┃✫│ 𝗩𝗶𝘀𝗶𝗼𝗻\n┃✫│ 𝗗𝗲𝗳𝗶𝗻𝗲\n┃✯│ 𝗗𝗮𝗿𝗸𝗴𝗽𝘁\n┃✫│ 𝗥𝗮𝘃𝗲𝗻\n┃✬│ 𝗚𝗲𝗺𝗶𝗻𝗶\n┃✯│ 𝗚𝗼𝗼𝗴𝗹𝗲\n┃✫│ 𝗚𝗽𝘁\n┃✬│ 𝗚𝗽𝘁2\n┃✫│ 𝗚𝗽𝘁3\n╰══───────◇───────══╯\n●════  〘 𝗚𝗥𝗢𝗨𝗣 〙═───═●\n╭══───────◇───────══╮\n┃✫│ 𝗔𝗽𝗽𝗿𝗼𝘃𝗲\n┃✯│ 𝗥𝗲𝗷𝗲𝗰𝘁\n┃✫│ 𝗣𝗿𝗼𝗺𝗼𝘁𝗲\n┃✬│ 𝗗𝗲𝗺𝗼𝘁𝗲\n┃✫│ 𝗗𝗲𝗹𝗲𝘁𝗲\n┃✬│ 𝗥𝗲𝗺𝗼𝘃𝗲\n┃✫│ 𝗙𝗮𝗸𝗲𝗿\n┃✯│ 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀\n┃✬│ 𝗖𝗹𝗼𝘀𝗲\n┃✫│ 𝗢𝗽𝗲𝗻\n┃✬│ 𝗖𝗹𝗼𝘀𝗲𝗧𝗶𝗺𝗲\n┃✫│ 𝗢𝗽𝗲𝗻𝗧𝗶𝗺𝗲\n┃✬│ 𝗗𝗶𝘀𝗽-𝗼𝗳𝗳\n┃✫│ 𝗗𝗶𝘀𝗽-1\n┃✬│ 𝗗𝗶𝘀𝗽-7\n┃✫│ 𝗗𝗶𝘀𝗽-90\n┃✬│ 𝗜𝗰𝗼𝗻\n┃✯│ 𝗚𝗰𝗽𝗿𝗼𝗳𝗶𝗹𝗲\n┃✫│ 𝗦𝘂𝗯𝗷𝗲𝗰𝘁\n┃✬│ 𝗗𝗲𝘀𝗰\n┃✫│ 𝗟𝗲𝗮𝘃𝗲\n┃✯│ 𝗔𝗱𝗱\n┃✫│ 𝗧𝗮𝗴𝗮𝗹𝗹\n┃✬│ 𝗛𝗶𝗱𝗲𝘁𝗮𝗴\n┃✫│ 𝗥𝗲𝘃𝗼𝗸𝗲\n┃✬│ 𝗠𝘂𝘁𝗲\n┃✫│ 𝗨𝗻𝗺𝘂𝘁𝗲\n╰══───────◇───────══╯\n●═══  〘 𝗖𝗢𝗗𝗜𝗡𝗚 〙 ═───═●\n╭══───────◇───────══╮\n┃✫│ 𝗖𝗮𝗿𝗯𝗼𝗻\n┃✯│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗰\n┃✫│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗰++\n┃✯│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗷𝘀\n┃✫│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗽𝘆\n┃✫│ 𝗜𝗻𝘀𝗽𝗲𝗰𝘁\n┃✯│ 𝗘𝗻𝗰𝗿𝘆𝗽𝘁𝗲\n┃✫│ 𝗘𝘃𝗮𝗹\n╰══───────◇───────══╯\n●═══  〘 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 〙 ═───═●\n╭══───────◇───────══╮\n┃✬│ 𝗢𝘄𝗻𝗲𝗿\n┃✬│ 𝗦𝗰𝗿𝗶𝗽𝘁\n┃✫│ 𝗠𝗲𝗻𝘂\n┃✬│ 𝗟𝗶𝘀𝘁\n┃✫│ 𝗣𝗶𝗻𝗴\n┃✯│ 𝗣𝗼𝗹𝗹\n┃✬│ 𝗔𝗹𝗶𝘃𝗲\n┃✫│ 𝗦𝗽𝗲𝗲𝗱\n┃✬│ 𝗥𝗲𝗽𝗼\n┃✫│ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲\n┃✯│ 𝗨𝗽𝘁𝗶𝗺𝗲\n┃✫│ 𝗗𝗽\n┃✯│ 𝗗𝗹𝘁\n┃✬│ 𝗠𝗮𝗶𝗹\n┃✫│ 𝗜𝗻𝗯𝗼𝘅\n┃✯│ 𝗡𝗲𝘄𝘀\n┃✫│ 𝗔𝗻𝗶𝗺𝗲\n╰══───────◇───────══╯\n●═══   〘 𝗢𝗪𝗡𝗘𝗥  〙═───═●\n╭══───────◇───────══╮\n┃✬│ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁\n┃✫│ 𝗔𝗱𝗺𝗶𝗻\n┃✯│ 𝗖𝗮𝘀𝘁\n┃✬│ 𝗕𝗿𝗼𝗮𝗱𝗰𝗮𝘀𝘁\n┃✫│ 𝗝𝗼𝗶𝗻\n┃✯│ 𝗚𝗲𝘁𝘃𝗮𝗿\n┃✯│ 𝗥𝗲𝗱𝗲𝗽𝗹𝗼𝘆\n┃✯│ 𝗨𝗽𝗱𝗮𝘁𝗲\n┃✫│ 𝗦𝗲𝘁𝘃𝗮𝗿\n┃✬│ 𝗕𝗼𝘁𝗽𝗽\n┃✫│ 𝗙𝘂𝗹𝗹𝗽𝗽\n┃✬│ 𝗕𝗹𝗼𝗰𝗸\n┃✫│ 𝗨𝗻𝗯𝗼𝗰𝗸\n┃✬│ 𝗞𝗶𝗹𝗹\n┃✫│ 𝗞𝗶𝗹𝗹2\n┃✫│ 𝗦𝗮𝘃𝗲\n┃✬│ >\n╰══───────◇───────══╯\n●═══   〘 𝗣𝗥𝗔𝗡𝗞  〙 ═──═●\n╭══───────◇───────══╮\n┃✯│ 𝗛𝗮𝗰𝗸\n╰══───────◇───────══╯\n●═══   〘 𝗟𝗢𝗚𝗢𝗦  〙 ═──═●\n╭══───────◇───────══╮\n┃✯│ 𝗛𝗮𝗰𝗸𝗲𝗿\n┃✫│ 𝗛𝗮𝗰𝗸𝗲𝗿2\n┃✯│ 𝗚𝗿𝗮𝗳𝗳𝗶𝘁𝗶\n┃✫│ 𝗖𝗮𝘁\n┃✯│ 𝗦𝗮𝗻𝗱\n┃✫│ 𝗚𝗼𝗹𝗱\n┃✯│ 𝗔𝗿𝗲𝗻𝗮\n┃✫│ 𝗗𝗿𝗮𝗴𝗼𝗻𝗯𝗮𝗹𝗹\n┃✯│ 𝗡𝗮𝗿𝘂𝘁𝗼\n┃✫│ 𝗖𝗵𝗶𝗹𝗱\n┃✯│ 𝗟𝗲𝗮𝘃𝗲𝘀\n┃✫│ 1917\n┃✯│ 𝗧𝘆𝗽𝗼𝗴𝗿𝗮𝗽𝗵𝘆\n╰══───────◇───────══╯\n●═══ 〘  𝗧𝗘𝗫𝗧𝗠𝗔𝗞𝗘𝗥  〙═──═●\n╭══───────◇───────══╮\n┃✯│ 𝗣𝘂𝗿𝗽𝗹𝗲\n┃✫│ 𝗡𝗲𝗼𝗻\n┃✯│ 𝗡𝗼𝗲𝗹\n┃✫│ 𝗠𝗲𝘁𝗮𝗹𝗹𝗶𝗰\n┃✯│ 𝗗𝗲𝘃𝗶𝗹\n┃✫│ 𝗜𝗺𝗽𝗿𝗲𝘀𝘀𝗶𝘃𝗲\n┃✯│ 𝗦𝗻𝗼𝘄\n┃✫│ 𝗪𝗮𝘁𝗲𝗿\n┃✯│ 𝗧𝗵𝘂𝗻𝗱𝗲𝗿\n┃✫│ 𝗜𝗰𝗲\n┃✯│ 𝗠𝗮𝘁𝗿𝗶𝘅\n┃✫│ 𝗦𝗶𝗹𝘃𝗲𝗿\n┃✯│ 𝗟𝗶𝗴𝗵𝘁\n╰══───────◇───────══╯\n●═══   〘 𝗠𝗜𝗦𝗖  〙 ═──═●\n╭══───────◇───────══╮\n┃✫│ 𝗪𝗲𝗮𝘁𝗵𝗲𝗿\n┃✯│ 𝗚𝗶𝘁𝗵𝘂𝗯\n┃✫│ 𝗚𝗶𝘁𝗰𝗹𝗼𝗻𝗲\n┃✯│ 𝗔𝗱𝘃𝗶𝗰𝗲\n┃✫│ 𝗥𝗲𝗺𝗼𝘃𝗲𝗯𝗴\n┃✯│ 𝗥𝗲𝗺𝗶𝗻𝗶\n┃✯│ 𝗧𝘁𝘀\n┃✯│ 𝗧𝗿𝘁\n┃✫│ 𝗙𝗮𝗰𝘁\n┃✯│ 𝗖𝗮𝘁𝗳𝗮𝗰𝘁\n┃✫│ 𝗤𝘂𝗼𝘁𝗲𝘀\n┃✯│ 𝗣𝗶𝗰𝗸𝘂𝗽𝗹𝗶𝗻𝗲\n╰══───────◇───────══╯\n●═══  〘 𝗢𝗧𝗛𝗘𝗥𝗦  〙 ═──═●\n╭══───────◇───────══╮\n┃✫│ 𝗖𝗿𝗲𝗱𝗶𝘁𝘀\n┃✬│ 𝗨𝗽𝗹𝗼𝗮𝗱\n┃✫│ 𝗔𝘁𝘁𝗽\n┃✬│ 𝗨𝗿𝗹\n┃✫│ 𝗜𝗺𝗮𝗴𝗲\n┃✬│ 𝗦𝘆𝘀𝘁𝗲𝗺\n┃✫╰═───────◇───────═╯\n┃   𝗖𝗼𝗱𝗲𝗱 𝗯𝘆 𝗦𝗻𝗮𝗽𝗱𝗿𝗮𝗴𝗼𝗻 !\n╰══────────────────══╯";
          if (menu === "VIDEO") {
            _0x38a88a.sendMessage(_0x338562.chat, {
              'video': fs.readFileSync("./Media/menu.mp4"),
              'caption': _0x516027,
              'gifPlayback': true
            }, {
              'quoted': _0x338562
            });
          } else {
            if (menu === "TEXT") {
              _0x38a88a.sendMessage(_0x4b480f, {
                'text': _0x516027
              }, {
                'quoted': _0x338562
              });
            } else {
              if (menu === "IMAGE") {
                _0x38a88a.sendMessage(_0x338562.chat, {
                  'image': {
                    'url': "https://i.imgur.com/HP6GyiD.jpeg"
                  },
                  'caption': _0x516027,
                  'fileLength': '9999999999'
                }, {
                  'quoted': _0x338562
                });
              } else if (menu === 'LINK') {
                _0x38a88a.sendMessage(_0x338562.chat, {
                  'text': _0x516027,
                  'contextInfo': {
                    'externalAdReply': {
                      'showAdAttribution': true,
                      'title': "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗",
                      'body': '' + runtime(process.uptime()),
                      'thumbnail': fs.readFileSync("./Media/Viniziaz.jpg"),
                      'sourceUrl': "https://wa.me/254759925133?text=Hello👋+Nimco+Nihostie+Bot+Mkuu+😔",
                      'mediaType': 0x1,
                      'renderLargerThumbnail': true
                    }
                  }
                }, {
                  'quoted': _0x338562
                });
              }
            }
          }
          break;
        case "advice":
          _0x91a68a(advice());
          console.log(advice());
          break;
        case "owner":
          _0x38a88a.sendContact(_0x4b480f, _0x521127, _0x338562);
          break;
        case "lyrics2":
          try {
            if (!_0x2c14bf) {
              return _0x91a68a("Provide a song name!");
            }
            const _0x12f984 = await Client.songs.search(_0x2c14bf);
            const _0x1bc17e = _0x12f984[0x0];
            const _0x13a141 = await _0x1bc17e.lyrics();
            await _0x38a88a.sendMessage(_0x4b480f, {
              'text': _0x13a141
            }, {
              'quoted': _0x338562
            });
          } catch (_0x203a24) {
            _0x91a68a("I did not find any lyrics for " + _0x2c14bf + ". Try searching a different song.");
            console.log(_0x203a24);
          }
          break;
        case "play2":
          {
            const _0x3d11f4 = require("yt-search");
            try {
              if (!_0x2c14bf) {
                return _0x338562.reply("What song do you want to download?");
              }
              const {
                videos: _0x3b72e2
              } = await _0x3d11f4(_0x2c14bf);
              if (!_0x3b72e2 || _0x3b72e2.length === 0x0) {
                return _0x338562.reply("No songs found!");
              }
              const _0x13453a = _0x3b72e2[0x0].url;
              try {
                let _0xfcac2 = await fetchJson("https://api.dreaded.site/api/ytdl/audio?url=" + _0x13453a);
                const {
                  title: _0x563676,
                  format: _0x186a49,
                  url: _0x4b8369
                } = _0xfcac2.result;
                await _0x38a88a.sendMessage(_0x338562.chat, {
                  'document': {
                    'url': _0x4b8369
                  },
                  'mimetype': "audio/mpeg",
                  'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗",
                  'fileName': _0x563676 + '.mp3'
                }, {
                  'quoted': _0x338562
                });
              } catch (_0x2240ed) {
                console.error("API request failed:", _0x2240ed.message);
                _0x338562.reply("Download failed: Unable to retrieve audio.");
              }
            } catch (_0x332b0a) {
              _0x338562.reply("Download failed\n" + _0x332b0a.message);
            }
          }
          ;
          break;
        case 'music':
          {
            const _0xcdcc16 = require("yt-search");
            const _0x4ee527 = require('node-fetch');
            try {
              if (!_0x2c14bf) {
                return _0x338562.reply("What song you want to download.");
              }
              let _0x16c2c1 = await _0xcdcc16(_0x2c14bf);
              if (!_0x16c2c1.all.length) {
                return sendReply(_0x38a88a, _0x338562, "No results found for your query.");
              }
              let _0x25e50b = _0x16c2c1.all[0x0].url;
              const _0x57c56b = "https://keith-api.vercel.app/download/dlmp3?url=" + _0x25e50b;
              let _0x5c040a = await _0x4ee527(_0x57c56b);
              let _0x514170 = await _0x5c040a.json();
              if (_0x514170.status && _0x514170.result) {
                const _0x479119 = {
                  'title': _0x514170.result.title,
                  'downloadUrl': _0x514170.result.downloadUrl,
                  'thumbnail': _0x16c2c1.all[0x0].thumbnail,
                  'format': _0x514170.result.format,
                  'quality': _0x514170.result.quality
                };
                await _0x38a88a.sendMessage(_0x338562.chat, {
                  'document': {
                    'url': _0x479119.downloadUrl
                  },
                  'mimetype': 'audio/mp3',
                  'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗",
                  'fileName': _0x479119.title.replace(/[^a-zA-Z0-9 ]/g, '') + ".mp3"
                }, {
                  'quoted': _0x338562
                });
                await _0x38a88a.sendMessage(_0x338562.chat, {
                  'audio': {
                    'url': _0x479119.downloadUrl
                  },
                  'mimetype': "audio/mp4"
                }, {
                  'quoted': _0x338562
                });
                return;
              } else {
                return _0x91a68a("Unable to fetch the song. Please try again later.");
              }
            } catch (_0x2d7f93) {
              return _0x91a68a("An error occurred: ");
            }
          }
          break;
        case "video":
          {
            const _0x2ab882 = require('yt-search');
            const _0xae14bb = require('node-fetch');
            try {
              if (!_0x2c14bf) {
                return _0x338562.reply("What video you want to download?");
              }
              let _0x39d444 = await _0x2ab882(_0x2c14bf);
              if (!_0x39d444.all.length) {
                return _0x338562.reply("No results found for your query.");
              }
              let _0x159e87 = _0x39d444.all[0x0].url;
              const _0x30d0cd = "https://apis-keith.vercel.app/download/dlmp4?url=" + _0x159e87;
              let _0x322d65 = await _0xae14bb(_0x30d0cd);
              let _0x45b844 = await _0x322d65.json();
              if (_0x45b844.status && _0x45b844.result) {
                const _0x4432eb = {
                  'title': _0x45b844.result.title,
                  'downloadUrl': _0x45b844.result.downloadUrl,
                  'thumbnail': _0x39d444.all[0x0].thumbnail,
                  'format': _0x45b844.result.format,
                  'quality': _0x45b844.result.quality
                };
                await _0x38a88a.sendMessage(_0x338562.chat, {
                  'video': {
                    'url': _0x4432eb.downloadUrl
                  },
                  'mimetype': "video/mp4",
                  'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
                }, {
                  'quoted': _0x338562
                });
                return;
              } else {
                return _0x91a68a(_0x38a88a, _0x338562, "Unable to fetch the video. Please try again later.");
              }
            } catch (_0x31d63e) {
              return _0x91a68a(_0x38a88a, _0x338562, "An error occurred: " + _0x31d63e.message);
            }
          }
          ;
          break;
        case "update":
        case "redeploy":
          {
            const _0x46c252 = require("axios");
            if (!_0x25caea) {
              throw NotOwner;
            }
            if (!appname || !herokuapi) {
              await _0x338562.reply("It looks like the Heroku app name or API key is not set. Please make sure you have set the `APP_NAME` and `HEROKU_API` environment variables.");
              return;
            }
            async function _0x5edb5e() {
              try {
                const _0x26409b = await _0x46c252.post("https://api.heroku.com/apps/" + appname + '/builds', {
                  'source_blob': {
                    'url': 'https://github.com/Viniznimco/VINIZIAZ-XMD/tarball/main'
                  }
                }, {
                  'headers': {
                    'Authorization': "Bearer " + herokuapi,
                    'Accept': "application/vnd.heroku+json; version=3"
                  }
                });
                await _0x338562.reply("Your bot is undergoing a ruthless upgrade, hold tight for the next 2 minutes as the redeploy executes! Once done, you’ll have the freshest version of *VINIZIAZ-XMD* unleashed upon you.");
                console.log("Build details:", _0x26409b.data);
              } catch (_0x292427) {
                const _0x1703b6 = _0x292427.response?.["data"] || _0x292427.message;
                await _0x338562.reply("Failed to update and redeploy. Please check if you have set the Heroku API key and Heroku app name correctly.");
                console.error("Error triggering redeploy:", _0x1703b6);
              }
            }
            _0x5edb5e();
          }
          break;
        case 'credits':
          _0x38a88a.sendMessage(_0x338562.chat, {
            'image': {
              'url': "https://i.imgur.com/HP6GyiD.jpeg"
            },
            'caption': "We express sincere gratitude and acknowledgement to the following:\n\n -Dika Ardnt ➪ Indonesia\n - Writing the base code using case method\nhttps://github.com/DikaArdnt\n\n -Adiwajshing ➪ India\n - Writing and Coding the bot's library (baileys)\nhttps://github.com/WhiskeySockets/Baileys\n\n -WAWebSockets Discord Server community\n-Maintaining and reverse engineering the Web Sockets\nhttps://discord.gg/WeJM5FP9GG\n\n - Nick Hunter ➪ Kenya\n - Actively compiling and debugging parts of this bot script\nhttps://github.com/Viniznimco\n\n - Keithkeizzah (Ghost) ➪ Kenya\n - Compiling and debugging parts of this bot script\nhttps://github.com/Keithkeizzah\n\n - Fortunatus Mokaya ➪ Kenya\n - Founder of the bot Base\nhttps://github.com/Fortunatusmokaya\n\n𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
          }, {
            'quoted': _0x338562
          });
          break;
        case "poll":
          {
            let [_0x1c7ba1, _0x3a16e0] = _0x2c14bf.split('|');
            if (_0x2c14bf.split('|') < 0x2) {
              return _0x338562.reply("Wrong format::\nExample:- poll who is the best president|Putin, Ruto");
            }
            let _0x192693 = [];
            for (let _0x566c42 of _0x3a16e0.split(',')) {
              _0x192693.push(_0x566c42);
            }
            await _0x38a88a.sendMessage(_0x338562.chat, {
              'poll': {
                'name': _0x1c7ba1,
                'values': _0x192693
              }
            });
          }
          break;
        case "play":
          {
            const _0x16a98d = require("axios");
            const _0x42d468 = require("yt-search");
            const _0x490d3e = require('fluent-ffmpeg');
            const _0x4c6da2 = require('fs');
            const _0x26e67a = require("path");
            try {
              if (!_0x2c14bf) {
                return _0x338562.reply("What song do you want to download?");
              }
              let _0x558385 = await _0x42d468(_0x2c14bf);
              let _0x10e0c3 = _0x558385.all[0x0].url;
              const _0x3dee43 = ["https://xploader-api.vercel.app/ytmp3?url=" + _0x10e0c3, "https://apis.davidcyriltech.my.id/youtube/mp3?url=" + _0x10e0c3, "https://api.ryzendesu.vip/api/downloader/ytmp3?url=" + _0x10e0c3, "https://api.dreaded.site/api/ytdl/audio?url=" + _0x10e0c3];
              for (const _0x8f6e8a of _0x3dee43) {
                try {
                  let _0x1aaa40 = await fetchJson(_0x8f6e8a);
                  if (_0x1aaa40.status === 0xc8 || _0x1aaa40.success) {
                    let _0x3d83ff = _0x1aaa40.result?.["downloadUrl"] || _0x1aaa40.url;
                    let _0x463ce8 = _0x558385.all[0x0].title.replace(/[^a-zA-Z0-9 ]/g, '') + ".mp3";
                    let _0x531456 = _0x26e67a.join(__dirname, _0x463ce8);
                    const _0x480f76 = await _0x16a98d({
                      'url': _0x3d83ff,
                      'method': "GET",
                      'responseType': 'stream'
                    });
                    if (_0x480f76.status !== 0xc8) {
                      _0x338562.reply("sorry but the API endpoint didn't respond correctly. Try again later.");
                      continue;
                    }
                    _0x490d3e(_0x480f76.data).toFormat("mp3").save(_0x531456).on("end", async () => {
                      await _0x38a88a.sendMessage(_0x338562.chat, {
                        'document': {
                          'url': _0x531456
                        },
                        'mimetype': "audio/mp3",
                        'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗",
                        'fileName': _0x463ce8
                      }, {
                        'quoted': _0x338562
                      });
                      _0x4c6da2.unlinkSync(_0x531456);
                    }).on('error', _0x2469d7 => {
                      _0x338562.reply("Download failed\n" + _0x2469d7.message);
                    });
                    return;
                  }
                } catch (_0x3be502) {
                  continue;
                }
              }
              _0x338562.reply("An error occurred. All APIs might be down or unable to process the request.");
            } catch (_0x10bcba) {
              _0x338562.reply("Download failed\n" + _0x10bcba.message);
            }
          }
          break;
        case "inspect":
          {
            const _0x4be8be = require('node-fetch');
            const _0x48373b = require("cheerio");
            if (!_0x2c14bf) {
              return _0x338562.reply("Provide a valid web link to fetch! The bot will crawl the website and fetch its HTML, CSS, JavaScript, and any media embedded in it.");
            }
            if (!/^https?:\/\//i.test(_0x2c14bf)) {
              return _0x338562.reply("Please provide a URL starting with http:// or https://");
            }
            try {
              const _0x39807d = await _0x4be8be(_0x2c14bf);
              const _0x1f0bb4 = await _0x39807d.text();
              const _0x388baf = _0x48373b.load(_0x1f0bb4);
              const _0x4e5f97 = [];
              _0x388baf("img[src], video[src], audio[src]").each((_0x2ce647, _0x479f39) => {
                let _0x56a99d = _0x388baf(_0x479f39).attr("src");
                if (_0x56a99d) {
                  _0x4e5f97.push(_0x56a99d);
                }
              });
              const _0x46fb71 = [];
              _0x388baf("link[rel=\"stylesheet\"]").each((_0x1c1864, _0x461012) => {
                let _0x282c75 = _0x388baf(_0x461012).attr("href");
                if (_0x282c75) {
                  _0x46fb71.push(_0x282c75);
                }
              });
              const _0x13151c = [];
              _0x388baf("script[src]").each((_0x1601f3, _0xb2a5bc) => {
                let _0x3bdfba = _0x388baf(_0xb2a5bc).attr("src");
                if (_0x3bdfba) {
                  _0x13151c.push(_0x3bdfba);
                }
              });
              await _0x338562.reply("**Full HTML Content**:\n\n" + _0x1f0bb4);
              if (_0x46fb71.length > 0x0) {
                for (const _0x3f4255 of _0x46fb71) {
                  const _0x19bc92 = await _0x4be8be(new URL(_0x3f4255, _0x2c14bf));
                  const _0x58e4c2 = await _0x19bc92.text();
                  await _0x338562.reply("**CSS File Content**:\n\n" + _0x58e4c2);
                }
              } else {
                await _0x338562.reply("No external CSS files found.");
              }
              if (_0x13151c.length > 0x0) {
                for (const _0x36f3c2 of _0x13151c) {
                  const _0x3073d2 = await _0x4be8be(new URL(_0x36f3c2, _0x2c14bf));
                  const _0x425676 = await _0x3073d2.text();
                  await _0x338562.reply("**JavaScript File Content**:\n\n" + _0x425676);
                }
              } else {
                await _0x338562.reply("No external JavaScript files found.");
              }
              if (_0x4e5f97.length > 0x0) {
                await _0x338562.reply("**Media Files Found**:\n" + _0x4e5f97.join("\n"));
              } else {
                await _0x338562.reply("No media files (images, videos, audios) found.");
              }
            } catch (_0x4abdd8) {
              console.error(_0x4abdd8);
              return _0x338562.reply("An error occurred while fetching the website content.");
            }
          }
          break;
        case 'metallic':
          {
            var _0x489e29 = require("mumaker");
            if (!_0x2c14bf || _0x2c14bf == '') {
              _0x338562.reply("Example Usage : " + prefix + "Metallic Nick");
              return;
            }
            try {
              var _0x5da0e9 = await _0x489e29.ephoto("https://en.ephoto360.com/impressive-decorative-3d-metal-text-effect-798.html", _0x2c14bf);
              _0x338562.reply("*Wait a moment...*");
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'image': {
                  'url': _0x5da0e9.image
                },
                'caption': "GENERATED BY VINIZIAZ-XMD"
              });
            } catch (_0x228e01) {
              _0x338562.reply(_0x228e01);
            }
          }
          break;
        case 'ice':
          {
            var _0x489e29 = require("mumaker");
            if (!_0x2c14bf || _0x2c14bf == '') {
              _0x338562.reply("Example Usage : " + prefix + "Ice Nick");
              return;
            }
            try {
              var _0x16c635 = await _0x489e29.ephoto("https://en.ephoto360.com/ice-text-effect-online-101.html", _0x2c14bf);
              _0x338562.reply("*Wait a moment...*");
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'image': {
                  'url': _0x16c635.image
                },
                'caption': "GENERATED BY VINIZIAZ-XMD"
              });
            } catch (_0x95f51) {
              _0x338562.reply(_0x95f51);
            }
          }
          break;
        case "snow":
          {
            var _0x489e29 = require("mumaker");
            if (!_0x2c14bf || _0x2c14bf == '') {
              _0x338562.reply("Example Usage : " + prefix + "Snow Nick");
              return;
            }
            try {
              var _0x876124 = await _0x489e29.ephoto('https://en.ephoto360.com/create-a-snow-3d-text-effect-free-online-621.html', _0x2c14bf);
              _0x338562.reply("*Wait a moment...*");
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'image': {
                  'url': _0x876124.image
                },
                'caption': "GENERATED BY VINIZIAZ-XMD"
              });
            } catch (_0x47d45f) {
              _0x338562.reply(_0x47d45f);
            }
          }
          break;
        case 'impressive':
          {
            var _0x489e29 = require("mumaker");
            if (!_0x2c14bf || _0x2c14bf == '') {
              _0x338562.reply("Example Usage : " + prefix + "impressive Nick");
              return;
            }
            try {
              var _0xd9e3ac = await _0x489e29.ephoto("https://en.ephoto360.com/create-3d-colorful-paint-text-effect-online-801.html", _0x2c14bf);
              _0x338562.reply("*Wait a moment...*");
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'image': {
                  'url': _0xd9e3ac.image
                },
                'caption': "GENERATED BY VINIZIAZ-XMD"
              });
            } catch (_0x2fd04c) {
              _0x338562.reply(_0x2fd04c);
            }
          }
          break;
        case 'noel':
          {
            var _0x489e29 = require("mumaker");
            if (!_0x2c14bf || _0x2c14bf == '') {
              _0x338562.reply("Example usage: " + prefix + "Noel myself");
              return;
            }
            try {
              var _0x574032 = await _0x489e29.ephoto("https://en.ephoto360.com/noel-text-effect-online-99.html", _0x2c14bf);
              _0x338562.reply("*Wait a moment...*");
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'image': {
                  'url': _0x574032.image
                },
                'caption': "GENERATED BY VINIZIAZ-XMD"
              }, {
                'quoted': _0x338562
              });
            } catch (_0x5b5165) {
              _0x338562.reply('💀💀' + _0x5b5165);
            }
          }
          break;
        case "water":
          {
            var _0x489e29 = require("mumaker");
            if (!_0x2c14bf || _0x2c14bf == '') {
              _0x338562.reply("Example usage: " + prefix + "Water myself");
              return;
            }
            try {
              var _0x1c03f3 = await _0x489e29.ephoto('https://en.ephoto360.com/create-water-effect-text-online-295.html', _0x2c14bf);
              _0x338562.reply("*Wait a moment...*");
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'image': {
                  'url': _0x1c03f3.image
                },
                'caption': "GENERATED BY VINIZIAZ-XMD"
              }, {
                'quoted': _0x338562
              });
            } catch (_0xcbc3d6) {
              _0x338562.reply("💀💀" + _0xcbc3d6);
            }
          }
          break;
        case "matrix":
          {
            var _0x489e29 = require("mumaker");
            if (!_0x2c14bf || _0x2c14bf == '') {
              _0x338562.reply("Example usage: " + prefix + "Matrix myself");
              return;
            }
            try {
              var _0x37454c = await _0x489e29.ephoto('https://en.ephoto360.com/matrix-text-effect-154.html', _0x2c14bf);
              _0x338562.reply("*Wait a moment...*");
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'image': {
                  'url': _0x37454c.image
                },
                'caption': "GENERATED BY VINIZIAZ-XMD"
              }, {
                'quoted': _0x338562
              });
            } catch (_0x3a20b9) {
              _0x338562.reply("💀💀" + _0x3a20b9);
            }
          }
          break;
        case "light":
          {
            var _0x489e29 = require("mumaker");
            if (!_0x2c14bf || _0x2c14bf == '') {
              _0x338562.reply("Example usage: " + prefix + "Light myself");
              return;
            }
            try {
              var _0x5229ac = await _0x489e29.ephoto("https://en.ephoto360.com/light-text-effect-futuristic-technology-style-648.html", _0x2c14bf);
              _0x338562.reply("*Wait a moment...*");
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'image': {
                  'url': _0x5229ac.image
                },
                'caption': "GENERATED BY VINIZIAZ-XMD"
              }, {
                'quoted': _0x338562
              });
            } catch (_0x2032bf) {
              _0x338562.reply('💀💀' + _0x2032bf);
            }
          }
          break;
        case "neon":
          {
            var _0x489e29 = require("mumaker");
            if (!_0x2c14bf || _0x2c14bf == '') {
              _0x338562.reply("Example Usage : " + prefix + "Neon Nick");
              return;
            }
            try {
              var _0x41f031 = await _0x489e29.ephoto("https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html", _0x2c14bf);
              _0x338562.reply("*Wait a moment...*");
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'image': {
                  'url': _0x41f031.image
                },
                'caption': "GENERATED BY VINIZIAZ-XMD"
              });
            } catch (_0x33a7b8) {
              _0x338562.reply(_0x33a7b8);
            }
          }
          break;
        case "silver":
        case "silva":
          {
            var _0x489e29 = require("mumaker");
            if (!_0x2c14bf || _0x2c14bf == " ") {
              _0x338562.reply("Example Usage : " + prefix + "Silva Nick");
              return;
            }
            try {
              var _0x336faf = await _0x489e29.ephoto("https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html", _0x2c14bf);
              _0x338562.reply("*Wait a moment...*");
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'image': {
                  'url': _0x336faf.image
                },
                'caption': "GENERATED BY VINIZIAZ-XMD"
              });
            } catch (_0x42eb25) {
              _0x338562.reply(_0x42eb25);
            }
          }
          break;
        case "devil":
          {
            var _0x489e29 = require("mumaker");
            if (!_0x2c14bf || _0x2c14bf == '') {
              _0x338562.reply("Example Usage : " + prefix + "Devil Nick");
              return;
            }
            try {
              var _0xd9f2b3 = await _0x489e29.ephoto("https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html", _0x2c14bf);
              _0x338562.reply("*Wait a moment...*");
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'image': {
                  'url': _0xd9f2b3.image
                },
                'caption': "GENERATED BY VINIZIAZ-XMD"
              });
            } catch (_0x190343) {
              _0x338562.reply(_0x190343);
            }
          }
          break;
        case "typography":
          {
            var _0x489e29 = require("mumaker");
            if (!_0x2c14bf || _0x2c14bf == '') {
              _0x338562.reply("Example Usage : " + prefix + "Typography Nick");
              return;
            }
            try {
              var _0x57327c = await _0x489e29.ephoto("https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html", _0x2c14bf);
              _0x338562.reply("*Wait a moment...*");
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'image': {
                  'url': _0x57327c.image
                },
                'caption': "GENERATED BY VINIZIAZ-XMD"
              });
            } catch (_0x15d044) {
              _0x338562.reply(_0x15d044);
            }
          }
          break;
        case 'purple':
          {
            var _0x489e29 = require("mumaker");
            if (!_0x2c14bf || _0x2c14bf == '') {
              _0x338562.reply("Example Usage : " + prefix + "purple Nick");
              return;
            }
            try {
              var _0x1aa8fa = await _0x489e29.ephoto("https://en.ephoto360.com/purple-text-effect-online-100.html", _0x2c14bf);
              _0x338562.reply("*Wait a moment...*");
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'image': {
                  'url': _0x1aa8fa.image
                },
                'caption': "GENERATED BY VINIZIAZ-XMD"
              });
            } catch (_0x51350e) {
              _0x338562.reply(_0x51350e);
            }
          }
          break;
        case "thunder":
          {
            var _0x489e29 = require('mumaker');
            if (!_0x2c14bf || _0x2c14bf == '') {
              _0x338562.reply("Example Usage : " + prefix + "Thunder Nimco");
              return;
            }
            try {
              var _0x20c335 = await _0x489e29.ephoto("https://en.ephoto360.com/thunder-text-effect-online-97.html", _0x2c14bf);
              _0x338562.reply("*Wait a moment...*");
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'image': {
                  'url': _0x20c335.image
                },
                'caption': "GENERATED BY VINIZIAZ-XMD"
              });
            } catch (_0x38ba19) {
              _0x338562.reply(_0x38ba19);
            }
          }
          break;
        case "leaves":
          {
            var _0x489e29 = require('mumaker');
            if (!_0x2c14bf || _0x2c14bf == '') {
              _0x338562.reply("Example Usage : " + prefix + "Leaves VINIZIAZ-XMD");
              return;
            }
            try {
              var _0x3d922b = await _0x489e29.ephoto('https://en.ephoto360.com/green-brush-text-effect-typography-maker-online-153.html', _0x2c14bf);
              _0x338562.reply("Wait a moment...");
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'image': {
                  'url': _0x3d922b.image
                },
                'caption': "GENERATED BY VINIZIAZ-XMD"
              }, {
                'quoted': _0x338562
              });
            } catch (_0x549133) {
              _0x338562.reply(_0x549133);
            }
          }
          break;
        case "1917":
          {
            var _0x489e29 = require("mumaker");
            if (!_0x2c14bf || _0x2c14bf == '') {
              _0x338562.reply("Example Usage : " + prefix + "1917 Hunter");
              return;
            }
            try {
              var _0x3d7d76 = await _0x489e29.ephoto('https://en.ephoto360.com/1917-style-text-effect-523.html', _0x2c14bf);
              _0x338562.reply("Wait a moment...");
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'image': {
                  'url': _0x3d7d76.image
                },
                'caption': "GENERATED BY VINIZIAZ-XMD"
              }, {
                'quoted': _0x338562
              });
            } catch (_0x3e48a5) {
              _0x338562.reply(_0x3e48a5);
            }
          }
          break;
        case "arena":
          {
            var _0x489e29 = require('mumaker');
            if (!_0x2c14bf || _0x2c14bf == '') {
              _0x338562.reply("Example Usage : " + prefix + "arena VINIZIAZ-XMD");
              return;
            }
            try {
              var _0x2b868f = await _0x489e29.ephoto("https://en.ephoto360.com/create-cover-arena-of-valor-by-mastering-360.html", _0x2c14bf);
              _0x338562.reply("Wait a moment...");
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'image': {
                  'url': _0x2b868f.image
                },
                'caption': "GENERATED BY VINIZIAZ-XMD"
              }, {
                'quoted': _0x338562
              });
            } catch (_0x573d64) {
              _0x338562.reply(_0x573d64);
            }
          }
          break;
        case "hacker":
          {
            var _0x489e29 = require('mumaker');
            if (!_0x2c14bf || _0x2c14bf == '') {
              _0x338562.reply("Example usage :  " + prefix + "hacker Nimco");
              return;
            }
            try {
              let _0x33e7bf = await _0x489e29.ephoto("https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", _0x2c14bf);
              _0x338562.reply("*Wait a moment...*");
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'image': {
                  'url': _0x33e7bf.image
                },
                'caption': "GENERATED BY VINIZIAZ-XMD"
              }, {
                'quoted': _0x338562
              });
            } catch (_0x41a260) {
              _0x338562.reply("🥵🥵 " + _0x41a260);
            }
          }
          break;
        case "sand":
          {
            var _0x489e29 = require('mumaker');
            if (!_0x2c14bf || _0x2c14bf == '') {
              _0x338562.reply("Example Usage : " + prefix + "sand Viniziaz");
              return;
            }
            try {
              let _0x1f20a3 = await _0x489e29.ephoto("https://en.ephoto360.com/write-names-and-messages-on-the-sand-online-582.html", _0x2c14bf);
              _0x338562.reply("*Wait a moment...*");
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'image': {
                  'url': _0x1f20a3.image
                },
                'caption': "GENERATED BY VINIZIAZ-XMD"
              }, {
                'quoted': _0x338562
              });
            } catch (_0xb8defe) {
              _0x338562.reply("🚫🚫 " + _0xb8defe);
            }
          }
          break;
        case "dragonball":
          {
            var _0x489e29 = require("mumaker");
            if (!_0x2c14bf || _0x2c14bf == '') {
              _0x338562.reply("Example usage :  " + prefix + "dragonball Nick");
              return;
            }
            try {
              const _0x2a4e31 = await _0x489e29.ephoto("https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html", _0x2c14bf);
              _0x338562.reply("*Wait a moment...*");
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'image': {
                  'url': _0x2a4e31.image
                },
                'caption': "GENERATED BY VINIZIAZ-XMD"
              }, {
                'quoted': _0x338562
              });
            } catch (_0x3ba392) {
              _0x338562.reply("🥵🥵 " + _0x3ba392);
            }
          }
          break;
        case "naruto":
          {
            var _0x489e29 = require("mumaker");
            if (!_0x2c14bf || _0x2c14bf == '') {
              _0x338562.reply("Example usage : " + prefix + "naruto Hunter");
              return;
            }
            try {
              var _0x208ba7 = await _0x489e29.ephoto('https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html', _0x2c14bf);
              _0x338562.reply("*Wait a moment...*");
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'image': {
                  'url': _0x208ba7.image
                },
                'caption': "GENERATED BY VINIZIAZ-XMD"
              }, {
                'quoted': _0x338562
              });
            } catch (_0x443b10) {
              _0x338562.reply("🥵🥵 " + _0x443b10);
            }
          }
          break;
        case "graffiti":
          {
            var _0x489e29 = require("mumaker");
            if (!_0x2c14bf || _0x2c14bf == '') {
              _0x338562.reply("Example usage : " + prefix + "graffiti Nick");
              return;
            }
            try {
              let _0x4bfd00 = await _0x489e29.ephoto("https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html", _0x2c14bf);
              _0x338562.reply("*Wait a moment...*");
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'image': {
                  'url': _0x4bfd00.image
                },
                'caption': "GENERATED BY VINIZIAZ-XMD"
              }, {
                'quoted': _0x338562
              });
            } catch (_0x37734e) {
              _0x338562.reply("🥵🥵 " + _0x37734e);
            }
          }
          break;
        case "cat":
          {
            var _0x489e29 = require("mumaker");
            if (!_0x2c14bf || _0x2c14bf == '') {
              _0x338562.reply("Example usage : * " + prefix + "cat Nick");
              return;
            }
            try {
              let _0x4a6395 = await _0x489e29.ephoto("https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html", _0x2c14bf);
              _0x338562.reply("*Wait a moment...*");
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'image': {
                  'url': _0x4a6395.image
                },
                'caption': "GENERATED BY VINIZIAZ-XMD"
              }, {
                'quoted': _0x338562
              });
            } catch (_0x2b4e97) {
              _0x338562.reply("🥵🥵 " + _0x2b4e97);
            }
          }
          break;
        case "gold":
          {
            var _0x489e29 = require("mumaker");
            if (!_0x2c14bf || _0x2c14bf == '') {
              _0x338562.reply("Example usage: " + prefix + "Gold myself");
              return;
            }
            try {
              var _0x52ff99 = await _0x489e29.ephoto('https://en.ephoto360.com/modern-gold-4-213.html', _0x2c14bf);
              _0x338562.reply("*Wait a moment...*");
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'image': {
                  'url': _0x52ff99.image
                },
                'caption': "GENERATED BY VINIZIAZ-XMD"
              }, {
                'quoted': _0x338562
              });
            } catch (_0x4cfa38) {
              _0x338562.reply("💀💀" + _0x4cfa38);
            }
          }
          break;
        case "child":
          {
            var _0x489e29 = require("mumaker");
            if (!_0x2c14bf || _0x2c14bf == '') {
              _0x338562.reply("Example usage: " + prefix + "Child Viniziaz");
              return;
            }
            try {
              var _0x3d634a = await _0x489e29.ephoto('https://en.ephoto360.com/write-text-on-wet-glass-online-589.html', _0x2c14bf);
              _0x338562.reply("*Wait a moment...*");
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'image': {
                  'url': _0x3d634a.image
                },
                'caption': "GENERATED BY VINIZIAZ-XMD"
              }, {
                'quoted': _0x338562
              });
            } catch (_0x5cac4f) {
              _0x338562.reply('💀💀' + _0x5cac4f);
            }
          }
          break;
        case "viniziaz":
          {
            if (!_0x2c14bf) {
              return _0x91a68a("Hello I'm VINIZIAZ AI. How can i help u?");
            }
            let _0x347426 = await fetchJson("https://bk9.fun/ai/llama?q=" + _0x2c14bf);
            if (!_0x347426.BK9) {
              return _0x91a68a("An error occurred while fetching the AI chatbot response. Please try again later.");
            } else {
              _0x91a68a(_0x347426.BK9);
            }
          }
          break;
        case "gpt2":
          {
            if (!_0x2c14bf) {
              return _0x91a68a("What's your question ?");
            }
            let _0x2c92dc = await fetchJson("https://bk9.fun/ai/jeeves-chat?q=" + _0x2c14bf);
            if (!_0x2c92dc.BK9) {
              return _0x91a68a("An error occurred while fetching the AI chatbot response. Please try again later.");
            } else {
              _0x91a68a(_0x2c92dc.BK9);
            }
          }
          break;
        case "trt":
        case "translate":
          {
            try {
              const _0x3be872 = _0x2c14bf.split(" ");
              if (_0x3be872.length < 0x2) {
                return _0x338562.reply(" Please provide a language code and text to translate !");
              }
              const _0x5e4bc8 = _0x3be872[0x0];
              const _0x57c618 = _0x3be872.slice(0x1).join(" ");
              const _0x7b11f9 = await fetch("https://api.mymemory.translated.net/get?q=" + encodeURIComponent(_0x57c618) + "&langpair=en|" + _0x5e4bc8);
              if (!_0x7b11f9.ok) {
                return _0x338562.reply("Failed to fetch data. Please try again later.");
              }
              const _0x514ceb = await _0x7b11f9.json();
              if (!_0x514ceb.responseData || !_0x514ceb.responseData.translatedText) {
                return _0x338562.reply("No translation found for the provided text.");
              }
              const _0x1f3eca = _0x514ceb.responseData.translatedText;
              const _0x2abce6 = " " + _0x1f3eca;
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'text': _0x2abce6
              }, {
                'quoted': _0x338562
              });
            } catch (_0x1f99f6) {
              console.error("Error occurred:", _0x1f99f6);
              _0x338562.reply("An error occurred while fetching the data. Please try again later.\n" + _0x1f99f6);
            }
          }
          break;
        case "cast":
          {
            if (!_0x25caea) {
              throw NotOwner;
            }
            if (!_0x338562.isGroup) {
              throw group;
            }
            if (!_0x2c14bf) {
              return _0x338562.reply("provide a text to cast !");
            }
            let _0x2af121 = await _0x23ae2f.filter(_0x40ca09 => _0x40ca09.id.endsWith(".net")).map(_0x3b0777 => _0x3b0777.id);
            _0x338562.reply("Success in casting the message to contacts\n\nDo not allways use this Command to avoid WA-bans ! ");
            for (let _0x21b225 of _0x2af121) {
              _0x38a88a.sendMessage(_0x21b225, {
                'text': q
              });
            }
            _0x338562.reply("Casting completed successfully😁");
          }
          break;
        case "img":
        case "ai-img":
        case "image":
        case "images":
          {
            var _0x49a437 = require("g-i-s");
            if (!_0x2c14bf) {
              return _0x338562.reply("Provide a text");
            }
            try {
              _0x49a437(_0x2c14bf, async (_0x435d76, _0xc20a) => {
                if (_0x435d76) {
                  return _0x338562.reply("An error occurred while searching for images.\n" + _0x435d76);
                }
                if (_0xc20a.length === 0x0) {
                  return _0x338562.reply("No images found.");
                }
                const _0x5b759a = Math.min(_0xc20a.length, 0x5);
                const _0x3898c3 = _0xc20a.slice(0x0, _0x5b759a).map(_0x1bf966 => _0x1bf966.url);
                const _0x57376a = _0x3898c3.map(_0x29d83b => ({
                  'image': {
                    'url': _0x29d83b
                  },
                  'caption': "Downloaded by " + botname
                }));
                for (const _0x4607ec of _0x57376a) {
                  await _0x38a88a.sendMessage(_0x338562.chat, _0x4607ec, {
                    'quoted': _0x338562
                  });
                }
              });
            } catch (_0x22d012) {
              _0x338562.reply("An error occurred.\n" + _0x22d012);
            }
          }
          break;
        case "foreigners":
          {
            if (!_0x338562.isGroup) {
              throw group;
            }
            if (!_0x580faf) {
              throw admin;
            }
            if (!_0x2437eb) {
              throw botAdmin;
            }
            let _0x5d2510 = _0x23ae2f.filter(_0x4765a5 => !_0x4765a5.admin).map(_0x10a552 => _0x10a552.id).filter(_0x2a99fc => !_0x2a99fc.startsWith(mycode) && _0x2a99fc != _0x38a88a.decodeJid(_0x38a88a.user.id));
            if (!_0x5eadbb || !_0x5eadbb[0x0]) {
              if (_0x5d2510.length == 0x0) {
                return _0x338562.reply("No foreigners detected.");
              }
              let _0x4050e6 = "𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀 𝗮𝗿𝗲 𝗺𝗲𝗺𝗯𝗲𝗿𝘀 𝘄𝗵𝗼𝘀𝗲 𝗰𝗼𝘂𝗻𝘁𝗿𝘆 𝗰𝗼𝗱𝗲 𝗶𝘀 𝗻𝗼𝘁 " + mycode + ". 𝗧𝗵𝗲 𝗳𝗼𝗹𝗹𝗼𝘄𝗶𝗻𝗴  " + _0x5d2510.length + " 𝗳𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀 𝘄𝗲𝗿𝗲 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱:- \n";
              for (let _0x54d0e6 of _0x5d2510) {
                _0x4050e6 += "𓅂 @" + _0x54d0e6.split('@')[0x0] + "\n";
              }
              _0x4050e6 += "\n𝗧𝗼 𝗿𝗲𝗺𝗼𝘃𝗲 𝘁𝗵𝗲𝗺 𝘀𝗲𝗻𝗱 foreigners -x";
              _0x38a88a.sendMessage(_0x338562.chat, {
                'text': _0x4050e6,
                'mentions': _0x5d2510
              }, {
                'quoted': _0x338562
              });
            } else if (_0x5eadbb[0x0] == '-x') {
              setTimeout(() => {
                _0x38a88a.sendMessage(_0x338562.chat, {
                  'text': "𝗥𝗮𝘃𝗲𝗻 𝘄𝗶𝗹𝗹 𝗻𝗼𝘄 𝗿𝗲𝗺𝗼𝘃𝗲 𝗮𝗹𝗹 " + _0x5d2510.length + " 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀 𝗳𝗿𝗼𝗺 𝘁𝗵𝗶𝘀 𝗴𝗿𝗼𝘂𝗽 𝗰𝗵𝗮𝘁 𝗶𝗻 𝘁𝗵𝗲 𝗻𝗲𝘅𝘁 𝘀𝗲𝗰𝗼𝗻𝗱.\n\n𝗚𝗼𝗼𝗱 𝗯𝘆𝗲 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀. 𝗧𝗵𝗶𝘀 𝗽𝗿𝗼𝗰𝗲𝘀𝘀 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗲 𝘁𝗲𝗿𝗺𝗶𝗻𝗮𝘁𝗲𝗱⚠️"
                }, {
                  'quoted': _0x338562
                });
                setTimeout(() => {
                  _0x38a88a.groupParticipantsUpdate(_0x338562.chat, _0x5d2510, 'remove');
                  setTimeout(() => {
                    _0x338562.reply("𝗔𝗻𝘆 𝗿𝗲𝗺𝗮𝗶𝗻𝗶𝗻𝗴 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿 ?🌚.");
                  }, 0x3e8);
                }, 0x3e8);
              }, 0x3e8);
            }
          }
          break;
        case "dalle":
        case 'createimage':
          {
            if (!_0x2c14bf) {
              return _0x338562.reply("*This command generates images from text prompts*\n\n*𝙴xample usage*\n*" + (prefix + _0x4cc17f) + " Beautiful anime girl*\n*" + (prefix + _0x4cc17f) + " girl in pink dress*");
            }
            try {
              _0x338562.reply("Please wait, i am generating your image...");
              const _0x4745f3 = 'https://cute-tan-gorilla-yoke.cyclic.app/imagine?text=' + encodeURIComponent(_0x2c14bf);
              const _0x377508 = await fetch(_0x4745f3);
              if (_0x377508.ok) {
                const _0x507e7e = await _0x377508.buffer();
                await _0x38a88a.sendMessage(_0x338562.chat, {
                  'image': _0x507e7e
                }, {
                  'quoted': _0x338562
                });
              } else {
                throw "*Aarrhhhg Image generation failed*";
              }
            } catch {
              _0x338562.reply("Oops! Something went wrong while generating your image. Please try again later.");
            }
          }
          break;
        case 'ai':
          {
            const {
              GoogleGenerativeAI: _0x1b531e
            } = require("@google/generative-ai");
            const _0x5651b5 = require("axios");
            try {
              if (!_0x338562.quoted) {
                return _0x338562.reply("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵!");
              }
              if (!_0x2c14bf) {
                return _0x338562.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝘀𝗼𝗺𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵! 𝗧𝗵𝗶𝘀 𝗶𝘀 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭 𝗔𝗶, 𝘂𝘀𝗶𝗻𝗴 𝗴𝗲𝗺𝗶𝗻𝗶-𝗽𝗿𝗼-𝘃𝗶𝘀𝗶𝗼𝗻 𝘁𝗼 𝗮𝗻𝗮𝗹𝘆𝘀𝗲 𝗶𝗺𝗮𝗴𝗲𝘀.");
              }
              if (!/image/.test(_0x129ae5)) {
                return _0x338562.reply("𝗛𝘂𝗵 𝘁𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲! 𝗣𝗹𝗲𝗮𝘀𝗲 𝗧𝗮𝗴 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵 !");
              }
              let _0x407c32 = await _0x38a88a.downloadAndSaveMediaMessage(_0x338562.quoted);
              let _0x1d13f4 = await uploadtoimgur(_0x407c32);
              _0x338562.reply("𝗔 𝗺𝗼𝗺𝗲𝘁, 𝗹𝗲𝗺𝗺𝗲 𝗮𝗻𝗮𝗹𝘆𝘀𝗲 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝗼𝗳 𝘁𝗵𝗲 𝗜𝗺𝗮𝗴𝗲...");
              const _0x170c84 = new _0x1b531e('AIzaSyDJUtskTG-MvQdlT4tNE319zBqLMFei8nQ');
              async function _0x8c4641(_0x4c5c83, _0x3494e1) {
                const _0x93d66f = {
                  'responseType': "arraybuffer"
                };
                const _0x2ed95c = await _0x5651b5.get(_0x4c5c83, _0x93d66f);
                const _0x403239 = Buffer.from(_0x2ed95c.data).toString("base64");
                const _0x217e94 = {
                  'data': _0x403239,
                  'mimeType': _0x3494e1
                };
                const _0xaa6e06 = {
                  'inlineData': _0x217e94
                };
                return _0xaa6e06;
              }
              const _0x48a79e = {
                'model': "gemini-1.5-flash"
              };
              const _0x219395 = _0x170c84.getGenerativeModel(_0x48a79e);
              const _0x476fba = [await _0x8c4641(_0x1d13f4, "image/jpeg")];
              const _0x5380e6 = await _0x219395.generateContent([_0x2c14bf, ..._0x476fba]);
              const _0x166243 = await _0x5380e6.response;
              const _0x1d55ab = _0x166243.text();
              await _0x338562.reply(_0x1d55ab);
            } catch (_0x57a60b) {
              _0x338562.reply("I am unable to analyze images at the moment\n" + _0x57a60b);
            }
          }
          break;
        case "ai2":
          {
            try {
              if (!_0x338562.quoted) {
                return _0x338562.reply("Send the image then tag it with the instruction.");
              }
              if (!_0x2c14bf) {
                return _0x338562.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝘀𝗼𝗺𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵! 𝗧𝗵𝗶𝘀 Viniziaz AI 𝗨𝘀𝗲 𝗚𝗲𝗺𝗶𝗻𝗶-𝗽𝗿𝗼-𝘃𝗶𝘀𝗶𝗼𝗻 𝘁𝗼 𝗮𝗻𝗮𝗹𝘆𝘀𝗲 𝗶𝗺𝗮𝗴𝗲𝘀.");
              }
              if (!/image/.test(_0x129ae5)) {
                return _0x338562.reply("That is not an image, try again while quoting an actual image.");
              }
              let _0x566516 = await _0x38a88a.downloadAndSaveMediaMessage(_0x338562.quoted);
              let _0x4d96a4 = await uploadtoimgur(_0x566516);
              _0x338562.reply("𝗔 𝗠𝗼𝗺𝗲𝗻𝘁, 𝗥𝗮𝘃𝗲𝗻[𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗔𝗜] 𝗶𝘀 𝗮𝗻𝗮𝗹𝘆𝘇𝗶𝗻𝗴 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝗼𝗳 𝘁𝗵𝗲 𝗶𝗺𝗮𝗴𝗲. . .");
              const _0x159dc3 = await fetchJson("https://api.dreaded.site/api/gemini-vision?url=" + _0x4d96a4 + "&instruction=" + _0x2c14bf);
              let _0x555d7f = _0x159dc3.result;
              await _0x338562.reply(_0x555d7f);
            } catch (_0x2599a4) {
              _0x338562.reply("I am unable to analyze images at the moment\n" + _0x2599a4);
            }
          }
          break;
        case "vision":
          {
            if (!_0x30e1f8 || !_0x2c14bf) {
              _0x338562.reply("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝗮𝗻𝗱 𝗴𝗶𝘃𝗲 𝘀𝗼𝗺𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵. 𝗜'𝗺 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭 𝗔𝗶, 𝗶 𝘂𝘀𝗲 𝗕𝗮𝗿𝗱 𝘁𝗼 𝗮𝗻𝗮𝗹𝘆𝘇𝗲 𝗶𝗺𝗮𝗴𝗲𝘀.");
              return;
            }
            ;
            let _0x39177d;
            if (_0x30e1f8.imageMessage) {
              _0x39177d = _0x30e1f8.imageMessage;
            } else {
              _0x338562.reply("𝗛𝘂𝗵, 𝗧𝗵𝗮𝘁'𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲, 𝗦𝗲𝗻𝗱 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘁𝗵𝗲𝗻 𝘁𝗮𝗴 𝗶𝘁 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 !");
              return;
            }
            ;
            try {
              let _0x227876 = await _0x38a88a.downloadAndSaveMediaMessage(_0x39177d);
              let _0xae4913 = await uploadtoimgur(_0x227876);
              _0x338562.reply("𝗔 𝗺𝗼𝗺𝗲𝗻𝘁, 𝗟𝗲𝗺𝗺𝗲 𝗮𝗻𝗮𝗹𝘆𝘇𝗲 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝗼𝗳 𝘁𝗵𝗲 𝗶𝗺𝗮𝗴𝗲. . .");
              let _0x19bf05 = await (await fetch("https://bk9.fun/ai/geminiimg?url=" + _0xae4913 + "&q=" + _0x2c14bf)).json();
              const _0x3df23d = {
                'text': _0x19bf05.BK9
              };
              await _0x38a88a.sendMessage(_0x338562.chat, _0x3df23d, {
                'quoted': _0x338562
              });
            } catch (_0x270dc8) {
              _0x338562.reply("An error occured\n" + _0x270dc8);
            }
          }
          break;
        case "remini":
          {
            if (!_0x2fea9f) {
              return _0x91a68a("𝗪𝗵𝗲𝗿𝗲 𝗶𝘀 𝘁𝗵𝗲 𝗶𝗺𝗮𝗴𝗲 ?");
            }
            if (!/image/.test(_0x129ae5)) {
              return _0x91a68a("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝗰𝗮𝗽𝘁𝗶𝗼𝗻𝘀 " + (prefix + _0x4cc17f));
            }
            const {
              remini: _0x3ef4e4
            } = require('./lib/remini');
            let _0xd1897c = await _0x2fea9f.download();
            let _0x5eae6a = await _0x3ef4e4(_0xd1897c, "enhance");
            _0x38a88a.sendMessage(_0x338562.chat, {
              'image': _0x5eae6a,
              'caption': "𝗚𝗲𝗻𝗲𝗿𝗮𝘁𝗲𝗱 𝗯𝘆 Viniziaz-Xmd"
            }, {
              'quoted': _0x338562
            });
          }
          break;
        case "kill2":
        case "kickall2":
          {
            if (!_0x25caea) {
              throw NotOwner;
            }
            if (!_0x2c14bf) {
              return _0x338562.reply("Provide a valid group link. Ensure the bot is in that group with admin privileges !");
            }
            let _0x1d5e06;
            let _0x5294f5;
            try {
              let _0x12931f = _0x5eadbb[0x0].split('https://chat.whatsapp.com/')[0x1];
              const _0x41979e = await _0x38a88a.groupGetInviteInfo(_0x12931f);
              ({
                id: _0x1d5e06,
                subject: _0x5294f5
              } = _0x41979e);
            } catch (_0xfd2515) {
              _0x338562.reply("Why are you giving me an invalid group link?");
              return;
            }
            try {
              const _0x412149 = await _0x38a88a.groupMetadata(_0x1d5e06);
              const _0x187406 = await _0x412149.participants;
              let _0x50a893 = _0x187406.filter(_0xef24b5 => _0xef24b5.id !== _0x38a88a.decodeJid(_0x38a88a.user.id)).map(_0x14ae8a => _0x14ae8a.id);
              await _0x338562.reply("☠️Initializing and Preparing to kill☠️ " + _0x5294f5);
              await _0x38a88a.groupSettingUpdate(_0x1d5e06, "announcement");
              await _0x38a88a.removeProfilePicture(_0x1d5e06);
              await _0x38a88a.groupUpdateSubject(_0x1d5e06, "𝗧𝗵𝗶𝘀 𝗴𝗿𝗼𝘂𝗽 𝗶𝘀 𝗻𝗼 𝗹𝗼𝗻𝗴𝗲𝗿 𝗮𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 🚫");
              await _0x38a88a.groupUpdateDescription(_0x1d5e06, "//𝗕𝘆 𝘁𝗵𝗲 𝗼𝗿𝗱𝗲𝗿 𝗼𝗳 𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇 𝗗𝗲𝘃 !");
              await _0x38a88a.groupRevokeInvite(_0x1d5e06);
              await _0x38a88a.sendMessage(_0x1d5e06, {
                'text': "At this time, My owner has initiated kill command remotely.\nThis has triggered me to remove all " + _0x50a893.length + " group participants in the next second.\n\nGoodbye Everyone! 👋\n\n⚠️THIS PROCESS CANNOT BE TERMINATED⚠️",
                'mentions': _0x187406.map(_0x2fb20d => _0x2fb20d.id)
              });
              await _0x38a88a.groupParticipantsUpdate(_0x1d5e06, _0x50a893, 'remove');
              const _0x2bf32f = {
                'text': "Goodbye Group owner👋\nIt's too cold in Here🥶"
              };
              await _0x38a88a.sendMessage(_0x1d5e06, _0x2bf32f);
              await _0x38a88a.groupLeave(_0x1d5e06);
              await _0x338562.reply("```Successfully Killed💀```");
            } catch (_0x2190ac) {
              _0x338562.reply("```Kill command failed, bot is either not in that group, or not an admin```.");
            }
          }
          break;
        case "carbon":
          {
            const _0x6f8e0f = require("node-fetch");
            let _0xe80b01 = "𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗗 𝗕𝗬 " + botname;
            if (_0x338562.quoted && _0x338562.quoted.text) {
              const _0x56a52d = _0x338562.quoted.text;
              try {
                let _0x3276f5 = await _0x6f8e0f("https://carbonara.solopov.dev/api/cook", {
                  'method': "POST",
                  'headers': {
                    'Content-Type': "application/json"
                  },
                  'body': JSON.stringify({
                    'code': _0x56a52d,
                    'backgroundColor': '#1F816D'
                  })
                });
                if (!_0x3276f5.ok) {
                  return _0x338562.reply("API failed to fetch a valid response.");
                }
                let _0x50bbb2 = await _0x3276f5.buffer();
                await _0x38a88a.sendMessage(_0x338562.chat, {
                  'image': _0x50bbb2,
                  'caption': _0xe80b01
                }, {
                  'quoted': _0x338562
                });
              } catch (_0x50d8d3) {
                _0x338562.reply("An error occured\n" + _0x50d8d3);
              }
            } else {
              _0x338562.reply("Quote a code message");
            }
          }
          break;
        case "define":
          {
            try {
              if (!_0x2c14bf) {
                return _0x338562.reply("Please provide a word.");
              }
              const _0x4c937d = encodeURIComponent(_0x2c14bf);
              const _0x1c6b7e = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + _0x4c937d);
              if (!_0x1c6b7e.ok) {
                return _0x338562.reply("Failed to fetch data. Please try again later.");
              }
              const _0x587203 = await _0x1c6b7e.json();
              if (!_0x587203 || !_0x587203[0x0] || !_0x587203[0x0].meanings || _0x587203[0x0].meanings.length === 0x0) {
                return _0x338562.reply("No definitions found for the provided word.");
              }
              const _0x1f959d = _0x587203[0x0];
              const _0x2ae5ab = _0x1f959d.meanings[0x0].definitions[0x0].definition;
              const _0x348570 = '' + _0x2ae5ab;
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'text': _0x348570
              }, {
                'quoted': _0x338562
              });
            } catch (_0x12d3b4) {
              console.error("Error occurred:", _0x12d3b4);
              _0x338562.reply("An error occurred while fetching the data. Please try again later.\n" + _0x12d3b4);
            }
          }
          break;
        case "tweet":
          {
            if (!_0x2c14bf) {
              return _0x338562.reply("provide some text for the tweet");
            }
            const _0x3ad428 = _0x338562.sender.split('@')[0x0];
            const _0x438fb7 = await _0x38a88a.profilePictureUrl(_0x338562.sender, "image")["catch"](_0x1e3307 => 'https://i.imgur.com/vuxJCTB.jpeg');
            const _0x361800 = "https://some-random-api.com/canvas/misc/tweet?displayname=" + encodeURIComponent(_0x3d3499) + "&username=" + encodeURIComponent(_0x3ad428) + '&avatar=' + encodeURIComponent(_0x438fb7) + "&comment=" + encodeURIComponent(_0x2c14bf) + "&replies=" + encodeURIComponent("246") + "&retweets=" + encodeURIComponent("125") + "&theme=" + encodeURIComponent("dark");
            await _0x38a88a.sendMessage(_0x338562.chat, {
              'image': {
                'url': _0x361800
              },
              'caption': "𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗲𝗱 𝗯𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
            }, {
              'quoted': _0x338562
            });
          }
          break;
        case "pickupline":
          {
            try {
              const _0x3f756b = await fetch('https://api.popcat.xyz/pickuplines');
              if (!_0x3f756b.ok) {
                throw new Error("Failed to fetch data");
              }
              const {
                pickupline: _0x575004
              } = await _0x3f756b.json();
              const _0x86ffa3 = '' + _0x575004;
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'text': _0x86ffa3
              }, {
                'quoted': _0x338562
              });
            } catch (_0x4a644d) {
              console.error("Error fetching data:", _0x4a644d);
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'text': "An error occurred while fetching the fact."
              }, {
                'quoted': _0x338562
              });
            }
          }
          break;
        case "quotes":
          {
            try {
              const _0x49c592 = await fetch('https://favqs.com/api/qotd');
              if (!_0x49c592.ok) {
                throw new Error("Failed to fetch data");
              }
              const {
                quote: _0x38cb8c
              } = await _0x49c592.json();
              const _0x12b273 = _0x38cb8c.body + " \n\n𝗤𝘂𝗼𝘁𝗲 𝗕𝘆 " + _0x38cb8c.author;
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'text': _0x12b273
              }, {
                'quoted': _0x338562
              });
            } catch (_0x3e30f3) {
              console.error("Error fetching data:", _0x3e30f3);
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'text': "An error occurred while fetching the fact."
              }, {
                'quoted': _0x338562
              });
            }
          }
          break;
        case 'google':
          {
            const _0x3ef5cf = require("axios");
            if (!_0x2c14bf) {
              _0x338562.reply("Provide a search term!\nEg: .Google What is treason");
              return;
            }
            let {
              data: _0x21abdf
            } = await _0x3ef5cf.get("https://www.googleapis.com/customsearch/v1?q=" + _0x2c14bf + "&key=AIzaSyDMbI3nvmQUrfjoCJYLS69Lej1hSXQjnWI&cx=baf9bdb0c631236e5");
            if (_0x21abdf.items.length == 0x0) {
              _0x338562.reply("❌ Unable to find a result");
              return;
            }
            let _0x2324fb = "SEARCH FROM GOOGLE\n🔍 Term:- " + _0x2c14bf + "\n\n";
            for (let _0x543017 = 0x0; _0x543017 < _0x21abdf.items.length; _0x543017++) {
              _0x2324fb += "🪧 Title:- " + _0x21abdf.items[_0x543017].title + "\n🖥 Description:- " + _0x21abdf.items[_0x543017].snippet + "\n🌐 Link:- " + _0x21abdf.items[_0x543017].link + "\n\n";
            }
            _0x338562.reply(_0x2324fb);
          }
          break;
        case "hack":
          {
            if (!_0x25caea) {
              throw NotOwner;
            }
            try {
              const _0x12b416 = ["⚠️𝗜𝗻𝗶𝘁𝗶𝗹𝗶𝗮𝘇𝗶𝗻𝗴 𝗛𝗮𝗰𝗸𝗶𝗻𝗴 𝗧𝗼𝗼𝗹𝘀⚠️", "𝗜𝗻𝗷𝗲𝗰𝘁𝗶𝗻𝗴 𝗠𝗮𝗹𝘄𝗮𝗿𝗲🐛..\n𝗟𝗼𝗮𝗱𝗶𝗻𝗴 𝗗𝗲𝘃𝗶𝗰𝗲 𝗚𝗮𝗹𝗹𝗲𝗿𝘆 𝗙𝗶𝗹𝗲𝘀⚠️", "```██ 10%``` ⏳", "```████ 20%``` ⏳", "```██████ 30%``` ⏳", "```████████ 40%``` ⏳", "```██████████ 50%``` ⏳", "```████████████ 60%``` ⏳", "```██████████████ 70%``` ⏳", "```████████████████ 80%``` ⏳", "```██████████████████ 90%``` ⏳", "```████████████████████ 100%``` ✅", "```𝗦𝘆𝘀𝘁𝗲𝗺 𝗛𝘆𝗷𝗮𝗰𝗸𝗶𝗻𝗴 𝗼𝗻 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...```\n```𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗶𝗻𝗴 𝘁𝗼 𝘁𝗵𝗲 𝗦𝗲𝗿𝘃𝗲𝗿 𝘁𝗼 𝗙𝗶𝗻𝗱 𝗘𝗿𝗿𝗼𝗿 404```", "```𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 𝘁𝗼 𝗗𝗲𝘃𝗶𝗰𝗲...\n𝗥𝗲𝗰𝗲𝗶𝘃𝗶𝗻𝗴 𝗗𝗮𝘁𝗮/𝗦𝗲𝗰𝗿𝗲𝘁 𝗣𝗮𝘀𝘀𝘄𝗼𝗿𝗱𝘀...```", "```𝗗𝗮𝘁𝗮 𝗧𝗿𝗮𝗻𝘀𝗳𝗲𝗿𝗲𝗱 𝗙𝗿𝗼𝗺 𝗱𝗲𝘃𝗶𝗰𝗲 100% 𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗲𝗱\n𝗘𝗿𝗮𝘀𝗶𝗻𝗴 𝗮𝗹𝗹 𝗘𝘃𝗶𝗱𝗲𝗻𝗰𝗲, 𝗞𝗶𝗹𝗹𝗶𝗻𝗴 𝗮𝗹𝗹 𝗠𝗮𝗹𝘄𝗮𝗿𝗲𝘀🐛...```", "```𝗦𝗘𝗡𝗗𝗜𝗡𝗗 𝗟𝗢𝗚 𝗗𝗢𝗖𝗨𝗠𝗘𝗡𝗧𝗦...```", "```𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗦𝗲𝗻𝘁 𝗗𝗮𝘁𝗮 𝗔𝗻𝗱 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗶𝗼𝗻 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗗𝗶𝘀𝗰𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱```", "```𝗔𝗹𝗹 𝗕𝗮𝗰𝗸𝗹𝗼𝗴𝘀 𝗖𝗹𝗲𝗮𝗿𝗲𝗱 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆💣\n𝗬𝗼𝘂𝗿 𝗦𝘆𝘀𝘁𝗲𝗺 𝗪𝗶𝗹𝗹 𝗕𝗲 𝗗𝗼𝘄𝗻 𝗜𝗻 𝗧𝗵𝗲 𝗡𝗲𝘅𝘁 𝗠𝗶𝗻𝘂𝘁𝗲⚠️```"];
              for (const _0x5ec4a1 of _0x12b416) {
                await _0x38a88a.sendMessage(_0x338562.chat, {
                  'text': _0x5ec4a1
                }, {
                  'quoted': _0x338562
                });
                await new Promise(_0x1c7fcb => setTimeout(_0x1c7fcb, 0x3e8));
              }
            } catch (_0x5f0152) {
              console.error("Error during prank:", _0x5f0152);
              _0x38a88a.sendMessage(_0x338562.chat, {
                'text': "❌ *Error!* Something went wrong. Reason: " + _0x5f0152.message + ". Please try again later."
              });
            }
          }
          break;
        case "compile-py":
          if (!_0x2c14bf && !_0x338562.quoted) {
            throw "Quote/tag a python code to compile.";
          }
          const _0x3a072b = _0x338562.quoted ? _0x338562.quoted.text ? _0x338562.quoted.text : _0x2c14bf ? _0x2c14bf : _0x338562.text : _0x338562.text;
          let _0x2b822b = python.runSource(_0x3a072b);
          _0x2b822b.then(_0x413aea => {
            console.log(_0x413aea);
            _0x91a68a(_0x413aea.stdout);
            _0x91a68a(_0x413aea.stderr);
          })["catch"](_0x459215 => {
            console.log(resultt.stderr);
            _0x91a68a(resultt.stderr);
          });
          break;
        case "save":
          {
            const _0x1e3e2b = _0x338562.text.toLowerCase();
            const _0x43219b = _0x338562.msg?.["contextInfo"]?.['quotedMessage'];
            if (_0x43219b && _0x1e3e2b.startsWith(prefix + "save") && !_0x338562.quoted.chat.includes("status@broadcast")) {
              return _0x338562.reply("You did not tag a status media to save.");
            }
            if (_0x25caea && _0x43219b && _0x1e3e2b.startsWith(prefix + "save") && _0x338562.quoted.chat.includes("status@broadcast")) {
              if (_0x43219b.imageMessage) {
                let _0x112d9e = _0x43219b.imageMessage.caption;
                let _0x3c784e = await _0x38a88a.downloadAndSaveMediaMessage(_0x43219b.imageMessage);
                _0x38a88a.sendMessage(_0x338562.chat, {
                  'image': {
                    'url': _0x3c784e
                  },
                  'caption': _0x112d9e
                });
              }
              if (_0x43219b.videoMessage) {
                let _0x58fc43 = _0x43219b.videoMessage.caption;
                let _0x57a2cd = await _0x38a88a.downloadAndSaveMediaMessage(_0x43219b.videoMessage);
                _0x38a88a.sendMessage(_0x338562.chat, {
                  'video': {
                    'url': _0x57a2cd
                  },
                  'caption': _0x58fc43
                });
              }
            }
          }
          break;
        case "gitclone":
          {
            if (!_0x2c14bf) {
              return _0x338562.reply("Where is the link?");
            }
            if (!_0x2c14bf.includes("github.com")) {
              return _0x338562.reply("Is that a GitHub repo link ?!");
            }
            let _0x21d396 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
            let [, _0x53487c, _0xcde629] = _0x2c14bf.match(_0x21d396) || [];
            _0xcde629 = _0xcde629.replace(/.git$/, '');
            let _0x4c355b = "https://api.github.com/repos/" + _0x53487c + '/' + _0xcde629 + '/zipball';
            let _0x34d416 = (await fetch(_0x4c355b, {
              'method': "HEAD"
            })).headers.get("content-disposition").match(/attachment; filename=(.*)/)[0x1];
            await _0x38a88a.sendMessage(_0x338562.chat, {
              'document': {
                'url': _0x4c355b
              },
              'fileName': _0x34d416 + '.zip',
              'mimetype': 'application/zip'
            }, {
              'quoted': _0x338562
            })['catch'](_0x322514 => _0x338562.reply("error"));
          }
          break;
        case "darkgpt":
          {
            if (!_0x2c14bf) {
              return _0x338562.reply("Hey there Fuckface😈, I'm Darkgpt, I respond to anything be it harmful, I'm a pure Evil👿, What sort of dark and delightful nonsense do you want to dive into Today😈 ?");
            }
            try {
              const _0x5c9959 = await fetchJson('https://api.dreaded.site/api/makgpt?text=' + _0x2c14bf);
              if (_0x5c9959 && _0x5c9959.result) {
                const _0xf91825 = _0x5c9959.result;
                await _0x338562.reply(_0xf91825);
              } else {
                _0x338562.reply("Huh, the silence is deafening, no response whatsoever💀.The API seems to have vanished into the abyss...😔");
              }
            } catch (_0x4adc42) {
              _0x91a68a("An error occured while communicating with the APIs\n" + _0x4adc42);
            }
          }
          break;
        case "github":
          {
            if (!_0x2c14bf) {
              return _0x338562.reply("Provide a github username to stalk");
            }
            try {
              const _0x484ac9 = await fetch("https://itzpire.com/stalk/github-user?username=" + _0x2c14bf);
              const _0x501c28 = await _0x484ac9.json();
              const _0x50d250 = _0x501c28.data.username;
              const _0x576063 = _0x501c28.data.nickname;
              const _0x59c359 = _0x501c28.data.bio;
              const _0x46b0d3 = _0x501c28.data.profile_pic;
              const _0x47e297 = _0x501c28.data.url;
              const _0x30e749 = _0x501c28.data.location;
              const _0x421a42 = _0x501c28.data.public_repo;
              const _0x374c6e = _0x501c28.data.followers;
              const _0x44117c = _0x501c28.data.following;
              const _0x130fa9 = _0x501c28.data.ceated_at;
              const _0x59f23f = "Username:- " + _0x50d250 + "\n\nNickname:- " + _0x576063 + "\n\nBio:- " + _0x59c359 + "\n\nLink:- " + _0x47e297 + "\n\nLocation:- " + _0x30e749 + "\n\nFollowers:- " + _0x374c6e + "\n\nFollowing:- " + _0x44117c + "\n\nRepos:- " + _0x421a42 + "\n\nCreated:- " + _0x130fa9;
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'image': {
                  'url': _0x46b0d3
                },
                'caption': _0x59f23f
              }, {
                'quoted': _0x338562
              });
            } catch (_0x1b591f) {
              _0x338562.reply("Unable to fetch data\n" + _0x1b591f);
            }
          }
          break;
        case "screenshot":
        case 'ss':
          {
            try {
              let _0xe9df72 = "𝗦𝗰𝗿𝗲𝗲𝗻𝘀𝗵𝗼𝘁 𝗯𝘆 " + botname;
              if (!_0x2c14bf) {
                return _0x338562.reply("Provide a website link to screenshot.");
              }
              const _0x2a7826 = "https://image.thum.io/get/fullpage/" + _0x2c14bf;
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'image': {
                  'url': _0x2a7826
                },
                'caption': _0xe9df72
              }, {
                'quoted': _0x338562
              });
            } catch (_0x644a5) {
              _0x338562.reply("An error occured.");
            }
          }
          break;
        case "alive":
        case "test":
          {
            const _0x3c04fb = {
              'audio': {
                'url': "./Media/alive.mp3"
              },
              'mimetype': 'audio/mp4',
              'ptt': true,
              'waveform': [0x64, 0x0, 0x64, 0x0, 0x64, 0x0, 0x64],
              'fileName': "𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇",
              'contextInfo': {
                'mentionedJid': [_0x338562.sender],
                'externalAdReply': {
                  'title': "𝗛𝗶 𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇 𝘂𝘀𝗲𝗿🥰, 𝗜 𝗮𝗺 𝗔𝗰𝘁𝗶𝘃𝗲 𝗻𝗼𝘄",
                  'body': "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭 𝗫𝗠𝗗",
                  'thumbnailUrl': "https://i.imgur.com/HP6GyiD.jpeg",
                  'sourceUrl': '',
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            };
            await _0x38a88a.sendMessage(_0x338562.chat, _0x3c04fb, {
              'quoted': _0x338562
            });
          }
          break;
        case "removebg":
          {
            try {
              if (!_0x338562.quoted) {
                return _0x338562.reply("Send the image then tag it with the command.");
              }
              if (!/image/.test(_0x129ae5)) {
                return _0x338562.reply("That is not an image, try again while quoting an actual image.");
              }
              let _0x2cfaa2 = await _0x38a88a.downloadAndSaveMediaMessage(_0x338562.quoted);
              let _0xb6eb50 = await uploadtoimgur(_0x2cfaa2);
              _0x338562.reply("𝗔 𝗺𝗼𝗺𝗲𝗻𝘁, 𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇 𝗶𝘀 𝗲𝗿𝗮𝘀𝗶𝗻𝗴 𝘁𝗵𝗲 𝗯𝗮𝗰𝗸𝗴𝗿𝗼𝘂𝗻𝗱. . .");
              const _0x68caed = 'https://api.dreaded.site/api/removebg?imageurl=' + _0xb6eb50;
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'image': {
                  'url': _0x68caed
                },
                'caption': "𝗘𝗱𝗶𝘁𝗲𝗱 𝗯𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0x338562
              });
            } catch (_0x50893d) {
              _0x338562.reply("An error occured...");
            }
          }
          break;
        case 'fact':
          {
            try {
              const _0x262fde = await fetchJson('https://api.dreaded.site/api/fact');
              const _0x3ab657 = _0x262fde.fact;
              await _0x338562.reply(_0x3ab657);
            } catch (_0x354b17) {
              _0x338562.reply("Something is wrong.");
            }
          }
          break;
        case "catfact":
          {
            try {
              const _0x40f951 = await fetchJson("https://api.dreaded.site/api/catfact");
              const _0x256761 = _0x40f951.fact;
              await _0x338562.reply(_0x256761);
            } catch (_0x208ecf) {
              _0x338562.reply("Something is wrong.");
            }
          }
          break;
        case "tts":
        case "say":
          {
            const _0x4a6121 = require("google-tts-api");
            if (!_0x2c14bf) {
              return _0x338562.reply("Povide a text for conversion !");
            }
            const _0x537563 = _0x4a6121.getAudioUrl(_0x2c14bf, {
              'lang': "hi-IN",
              'slow': false,
              'host': "https://translate.google.com"
            });
            _0x38a88a.sendMessage(_0x338562.chat, {
              'audio': {
                'url': _0x537563
              },
              'mimetype': "audio/mp4",
              'ptt': true
            }, {
              'quoted': _0x338562
            });
          }
          break;
        case "gpt":
          {
            if (!_0x2c14bf) {
              return _0x91a68a("Hello there, what's your question?");
            }
            let _0x1edd72 = await fetchJson("https://bk9.fun/ai/jeeves-chat2?q=" + _0x2c14bf);
            if (!_0x1edd72.BK9) {
              return _0x91a68a("An error occurred while fetching the AI chatbot response. Please try again later.");
            } else {
              _0x91a68a(_0x1edd72.BK9);
            }
          }
          break;
        case "weather":
          {
            try {
              if (!_0x2c14bf) {
                return _0x338562.reply("provide a city/town name");
              }
              const _0x235897 = await fetch("http://api.openweathermap.org/data/2.5/weather?q=" + _0x2c14bf + '&units=metric&appid=1ad47ec6172f19dfaf89eb3307f74785');
              const _0x2ee6e8 = await _0x235897.json();
              console.log("Weather data:", _0x2ee6e8);
              const _0x331df9 = _0x2ee6e8.name;
              const _0x594f7d = _0x2ee6e8.main.temp;
              const _0x15c569 = _0x2ee6e8.weather[0x0].description;
              const _0x432413 = _0x2ee6e8.main.humidity;
              const _0x25f6bf = _0x2ee6e8.wind.speed;
              const _0x195b46 = _0x2ee6e8.rain ? _0x2ee6e8.rain['1h'] : 0x0;
              const _0x18f6cd = _0x2ee6e8.clouds.all;
              const _0x5a1f19 = new Date(_0x2ee6e8.sys.sunrise * 0x3e8);
              const _0x42e928 = new Date(_0x2ee6e8.sys.sunset * 0x3e8);
              await _0x338562.reply("❄️ Weather in " + _0x331df9 + "\n\n🌡️ Temperature: " + _0x594f7d + "°C\n📝 Description: " + _0x15c569 + "\n❄️ Humidity: " + _0x432413 + "%\n🌀 Wind Speed: " + _0x25f6bf + " m/s\n🌧️ Rain Volume (last hour): " + _0x195b46 + " mm\n☁️ Cloudiness: " + _0x18f6cd + "%\n🌄 Sunrise: " + _0x5a1f19.toLocaleTimeString() + "\n🌅 Sunset: " + _0x42e928.toLocaleTimeString());
            } catch (_0x886504) {
              _0x338562.reply("Unable to find that location.");
            }
          }
          break;
        case 'compile-js':
          if (!_0x2c14bf && !_0x338562.quoted) {
            throw "Quote/tag a Js code to compile.";
          }
          const _0x43d841 = _0x338562.quoted ? _0x338562.quoted.text ? _0x338562.quoted.text : _0x2c14bf ? _0x2c14bf : _0x338562.text : _0x338562.text;
          let _0x2aff43 = node.runSource(_0x43d841);
          _0x2aff43.then(_0x3dfa40 => {
            console.log(_0x3dfa40);
            _0x91a68a(_0x3dfa40.stdout);
            _0x91a68a(_0x3dfa40.stderr);
          })['catch'](_0x2f05c6 => {
            console.log(resultt1.stderr);
            _0x91a68a(resultt1.stderr);
          });
          break;
        case "quotely":
          {
            try {
              if (!_0x338562.quoted.text) {
                throw "qoute a text";
              }
              let _0x242a3d = _0x338562.quoted.text;
              const {
                quote: _0x290fdd
              } = require('./lib/viniziazquotely.js');
              let _0x29abb9 = await _0x38a88a.profilePictureUrl(_0x338562.sender, "image")["catch"](_0x3ea1eb => 'https://telegra.ph/file/75272825615a4dcb69526.png');
              const _0x675e0 = await _0x290fdd(_0x242a3d, _0x3d3499, _0x29abb9);
              _0x38a88a.sendImageAsSticker(_0x338562.chat, _0x675e0.result, _0x338562, {
                'packname': _0x3d3499,
                'author': "ViniziazBot"
              });
            } catch (_0x2e54e7) {
              await _0x91a68a("Qoute some text for quotely");
            }
          }
          break;
        case "fullpp":
          {
            if (!_0x25caea) {
              throw NotOwner;
            }
            const {
              S_WHATSAPP_NET: _0x3aee3b
            } = require('@whiskeysockets/baileys');
            try {
              const _0x3be364 = require('fs');
              if (!_0x30e1f8) {
                _0x338562.reply("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲...");
                return;
              }
              ;
              let _0x4ac5ed;
              if (_0x30e1f8.imageMessage) {
                _0x4ac5ed = _0x30e1f8.imageMessage;
              } else {
                _0x338562.reply("𝗛𝘂𝗵 𝘁𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲...");
                return;
              }
              ;
              var _0x1fcf51 = await _0x38a88a.downloadAndSaveMediaMessage(_0x4ac5ed);
              var {
                img: _0x3e8f13
              } = await generateProfilePicture(_0x1fcf51);
              _0x38a88a.query({
                'tag': 'iq',
                'attrs': {
                  'target': undefined,
                  'to': _0x3aee3b,
                  'type': 'set',
                  'xmlns': "w:profile:picture"
                },
                'content': [{
                  'tag': "picture",
                  'attrs': {
                    'type': "image"
                  },
                  'content': _0x3e8f13
                }]
              });
              _0x3be364.unlinkSync(_0x1fcf51);
              _0x338562.reply("𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗽𝗶𝗰𝘁𝘂𝗿𝗲 𝘂𝗽𝗱𝗮𝘁𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆✅");
            } catch (_0x35d08d) {
              _0x338562.reply("An error occured while updating profile photo\n" + _0x35d08d);
            }
          }
          break;
        case "upload":
        case "url":
          {
            let _0x3f821e = _0x338562.quoted ? _0x338562.quoted : _0x338562;
            let _0x561e54 = (_0x3f821e.msg || _0x3f821e).mimetype || '';
            if (!_0x561e54) {
              return _0x338562.reply("Quote an image or video");
            }
            let _0x5d738d = await _0x3f821e.download();
            if (_0x5d738d.length > 10485760) {
              return _0x338562.reply("Media is too large.");
            }
            let _0x191528 = /image\/(png|jpe?g|gif)|video\/mp4/.test(_0x561e54);
            if (_0x191528) {
              let _0x1340f2 = await _0x38a88a.downloadAndSaveMediaMessage(_0x3f821e);
              let _0x18e694 = await uploadtoimgur(_0x1340f2);
              _0x338562.reply("Media Link:-\n\n" + _0x18e694);
            } else {
              _0x338562.reply("Error occured...");
            }
          }
          break;
        case 'attp':
          if (!q) {
            return _0x91a68a("I need text;");
          }
          _0x38a88a.sendMessage(_0x338562.chat, {
            'sticker': {
              'url': "https://api.lolhuman.xyz/api/attp?apikey=cde5404984da80591a2692b6&text=" + q
            }
          }, {
            'quoted': _0x338562
          });
          break;
        case "smeme":
          {
            if (!/image/.test(_0x129ae5)) {
              return _0x91a68a("Quote an image or sticker with the 2 texts separated with |");
            }
            if (!_0x2c14bf) {
              return _0x91a68a("Quote an image or sticker with the 2 texts separated with |");
            }
            atas = _0x2c14bf.split('|')[0x0] ? _0x2c14bf.split('|')[0x0] : '-';
            bawah = _0x2c14bf.split('|')[0x1] ? _0x2c14bf.split('|')[0x1] : '-';
            let _0x2bf150 = await _0x38a88a.downloadAndSaveMediaMessage(_0x9bea7f);
            let _0x417ed9 = await uploadtoimgur(_0x2bf150);
            let _0x49aa20 = "https://api.memegen.link/images/custom/" + encodeURIComponent(bawah) + '/' + encodeURIComponent(atas) + ".png?background=" + _0x417ed9;
            let _0x4fb989 = await _0x38a88a.sendImageAsSticker(_0x338562.chat, _0x49aa20, _0x338562, {
              'packname': packname
            });
            fs.unlinkSync(_0x4fb989);
          }
          break;
        case "compile-c":
          if (!_0x2c14bf && !_0x338562.quoted) {
            throw "Quote/tag a C code to compile";
          }
          const _0x3807f3 = _0x338562.quoted ? _0x338562.quoted.text ? _0x338562.quoted.text : _0x2c14bf ? _0x2c14bf : _0x338562.text : _0x338562.text;
          let _0x32badd = c.runSource(_0x3807f3);
          _0x32badd.then(_0x40fd69 => {
            console.log(_0x40fd69);
            _0x91a68a(_0x40fd69.stdout);
            _0x91a68a(_0x40fd69.stderr);
          })['catch'](_0xe1601c => {
            console.log(resultt3.stderr);
            _0x91a68a(resultt3.stderr);
          });
          break;
        case "compile-c++":
          if (!_0x2c14bf && !_0x338562.quoted) {
            throw "Quote/tag a C++ code to compile";
          }
          const _0x212586 = _0x338562.quoted ? _0x338562.quoted.text ? _0x338562.quoted.text : _0x2c14bf ? _0x2c14bf : _0x338562.text : _0x338562.text;
          let _0x2750ad = cpp.runSource(_0x212586);
          _0x2750ad.then(_0x4f2819 => {
            console.log(_0x4f2819);
            _0x91a68a(_0x4f2819.stdout);
            _0x91a68a(_0x4f2819.stderr);
          })["catch"](_0x4d179d => {
            console.log(resultt4.stderr);
            _0x91a68a(resultt4.stderr);
          });
          break;
        case 'eval':
          {
            if (!_0x25caea) {
              throw NotOwner;
            }
            if (!_0x2c14bf) {
              throw "Provide a valid Bot Baileys Function to evaluate";
            }
            try {
              let _0x45cbe7 = await eval(_0x4867f8.slice(0x2));
              if (typeof _0x45cbe7 !== "string") {
                _0x45cbe7 = require("util").inspect(_0x45cbe7);
              }
              await _0x91a68a(_0x45cbe7);
            } catch (_0x38e39a) {
              await _0x91a68a(String(_0x38e39a));
            }
          }
          break;
        case "add":
          if (!_0x2c14bf) {
            return _0x91a68a("provide a number to be added in this format. \n\n add 254759925133");
          }
          if (!_0x338562.isGroup) {
            throw group;
          }
          if (!_0x580faf) {
            throw admin;
          }
          if (!_0x2437eb) {
            throw botAdmin;
          }
          await _0x38a88a.groupParticipantsUpdate(_0x338562.chat, [_0x2c14bf], "add");
          _0x91a68a("succesfully added");
          break;
        case "kill":
        case "kickall":
          if (!_0x338562.isGroup) {
            throw group;
          }
          if (!_0x2437eb) {
            throw "I need admin previlleges to execute this command.";
          }
          if (!_0x25caea) {
            throw "Only Viniziaz owner can use this command😲!";
          }
          let _0x9326d3 = _0x23ae2f.filter(_0x20c156 => _0x20c156.id != _0x38a88a.decodeJid(_0x38a88a.user.id)).map(_0x2e2f99 => _0x2e2f99.id);
          _0x338562.reply("⚠️ Initializing Kick-all command💀...");
          setTimeout(() => {
            _0x38a88a.sendMessage(_0x338562.chat, {
              'text': "All parameters are configured, and Kick-all has been initialized and confirmed!. Now, Viniziaz will remove all " + _0x9326d3.length + " group participants in the next second.\n\nGoodbye Everyone! 👋\n\nTHIS PROCESS CANNOT BE TERMINATED💀!"
            }, {
              'quoted': _0x338562
            });
            setTimeout(() => {
              _0x38a88a.groupParticipantsUpdate(_0x338562.chat, _0x9326d3, "remove");
              setTimeout(() => {
                _0x338562.reply("Done✅. All group participants have been removed. Do not always use this command to avoid Wa bans!");
              }, 0x3e8);
            }, 0x3e8);
          }, 0x3e8);
          break;
        case "system":
          _0x38a88a.sendMessage(_0x338562.chat, {
            'image': {
              'url': 'https://i.imgur.com/YpHG3eT.jpeg'
            },
            'caption': "*𝐁𝐎𝐓 𝐍𝐀𝐌𝐄: 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗*\n\n*𝐒𝐏𝐄𝐄𝐃: " + _0x44c1ca.toFixed(0x4) + " 𝐌𝐒*\n\n*𝐑𝐔𝐍𝐓𝐈𝐌𝐄: " + runtime(process.uptime()) + "*\n\n*𝐏𝐋𝐀𝐓𝐅𝐎𝐑𝐌: 𝗛𝗲𝗿𝗼𝗸𝘂*\n\n*𝐇𝐎𝐒𝐓𝐍𝐀𝐌𝐄: 𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇*\n\n*𝐋𝐈𝐁𝐑𝐀𝐑𝐘: Baileys*\n\n𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑: N̷i̷m̷c̷o̷"
          });
          break;
        case "vcf":
        case "group-vcf":
          {
            if (!_0x338562.isGroup) {
              return _0x338562.reply("Command meant for groups");
            }
            const _0xe5b20c = require('fs');
            let _0x2aa02f = await _0x38a88a.groupMetadata(_0x338562.chat);
            let _0x1dc4ac = '';
            let _0x289925 = 0x0;
            for (let _0x5e8f2a of _0x2aa02f.participants) {
              _0x1dc4ac += "BEGIN:VCARD\nVERSION:3.0\nFN:[" + _0x289925++ + "] +" + _0x5e8f2a.id.split('@')[0x0] + "\nTEL;type=CELL;type=VOICE;waid=" + _0x5e8f2a.id.split('@')[0x0] + ':+' + _0x5e8f2a.id.split('@')[0x0] + "\nEND:VCARD\n";
            }
            await _0x338562.reply("𝗔 𝗺𝗼𝗺𝗲𝗻𝘁, 𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇 𝗶𝘀 𝗖𝗼𝗺𝗽𝗶𝗹𝗶𝗻𝗴 " + _0x2aa02f.participants.length + " 𝗖𝗼𝗻𝘁𝗮𝗰𝘁𝘀 𝗶𝗻𝘁𝗼 𝗮 𝗩𝗰𝗳...");
            await _0xe5b20c.writeFileSync("./contacts.vcf", _0x1dc4ac.trim());
            await _0x38a88a.sendMessage(_0x338562.chat, {
              'document': _0xe5b20c.readFileSync("./contacts.vcf"),
              'mimetype': "text/vcard",
              'fileName': "Group contacts.vcf",
              'caption': "VCF for " + _0x2aa02f.subject + "\n" + _0x2aa02f.participants.length + " contacts"
            }, {
              'ephemeralExpiration': 0x15180,
              'quoted': _0x338562
            });
            _0xe5b20c.unlinkSync("./contacts.vcf");
          }
          break;
        case "faker":
          if (!_0x338562.isGroup) {
            throw group;
          }
          if (!_0x2437eb) {
            throw botAdmin;
          }
          if (!_0x580faf) {
            throw admin;
          }
          let _0x50d2b2 = _0x23ae2f.filter(_0x5c4b42 => !_0x5c4b42.admin).map(_0x506307 => _0x506307.id).filter(_0x1ebdd6 => _0x1ebdd6.startsWith('1') && _0x1ebdd6 != _0x38a88a.decodeJid(_0x38a88a.user.id));
          if (!_0x5eadbb || !_0x5eadbb[0]) {
            if (_0x50d2b2.length == 0) {
              return _0x91a68a("No virtual numbers detected!");
            }
            _0x338562.reply("Viniziaz has detected " + _0x50d2b2.length + " members using +1 fake virtual WhatsApp accounts.  To remove them send faker -x");
          } else if (_0x5eadbb[0] == '-x') {
            await _0x38a88a.groupParticipantsUpdate(_0x338562.chat, [_0x50d2b2], "remove");
            await _0x338562.reply(_0x50d2b2.length + " +1 fake accounts successfully removed!");
          }
          break;
        case "mail":
          {
            const {
              TempMail: _0x57f201
            } = require("tempmail.lol");
            const _0x133052 = new _0x57f201();
            const _0x2c97e1 = await _0x133052.createInbox();
            const _0x5e5835 = '' + _0x2c97e1.address;
            await _0x338562.reply(_0x5e5835);
            const _0x369c4b = await _0x38a88a.sendMessage(_0x338562.chat, {
              'text': '' + _0x2c97e1.token
            });
            await _0x38a88a.sendMessage(_0x338562.chat, {
              'text': "Quoted text is your token. To fetch messages in your email use <.inbox your-token>"
            }, {
              'quoted': _0x369c4b
            });
          }
          break;
        case 'hacker2':
          {
            if (!/image/.test(_0x129ae5)) {
              return _0x338562.reply("Hello hacker 👋, quote an image, probably a clear image of yourself or a person.");
            }
            let _0x2919ae = await _0x38a88a.downloadAndSaveMediaMessage(_0x9bea7f);
            const _0xf4ca08 = await uploadtoimgur(_0x2919ae);
            await UploadFileUgu();
            const _0x565526 = "https://aemt.me/hacker2?link=" + _0xf4ca08;
            await _0x38a88a.sendMessage(_0x338562.chat, {
              'image': {
                'url': _0x565526
              },
              'caption': "Converted by Viniziaz! 🦄"
            }, {
              'quoted': _0x338562
            });
          }
          break;
        case "inbox":
          {
            if (!_0x2c14bf) {
              return _0x338562.reply("To fetch messages from your mail, provide the email address which was issued.");
            }
            const _0x5d774c = encodeURIComponent(_0x2c14bf);
            const _0x412715 = "https://tempmail.apinepdev.workers.dev/api/getmessage?email=" + _0x5d774c;
            try {
              const _0x4b91b8 = await fetch(_0x412715);
              if (!_0x4b91b8.ok) {
                return _0x338562.reply(_0x4b91b8.status + " error occurred while communicating with API.");
              }
              const _0x31be2d = await _0x4b91b8.json();
              if (!_0x31be2d || !_0x31be2d.messages) {
                return _0x338562.reply("I am unable to fetch messages from your mail, your inbox might be empty or some other error occurred.");
              }
              const _0x54b383 = _0x31be2d.messages;
              for (const _0x1335a1 of _0x54b383) {
                const _0x245512 = _0x1335a1.sender;
                const _0x2ccbb8 = _0x1335a1.subject;
                const _0x382208 = new Date(JSON.parse(_0x1335a1.message).date).toLocaleString();
                const _0x4b5762 = JSON.parse(_0x1335a1.message).body;
                const _0x170cee = "👥 Sender: " + _0x245512 + "\n📝 Subject: " + _0x2ccbb8 + "\n🕜 Date: " + _0x382208 + "\n📩 Message: " + _0x4b5762;
                await _0x338562.reply(_0x170cee);
              }
            } catch (_0x1d2736) {
              console.error("𝗢𝗼𝗽𝘀 𝗘𝗿𝗿𝗼𝗿!");
              return _0x338562.reply("𝗦𝗼𝗺𝗲𝘁𝗵𝗶𝗻𝗴 𝗶𝘀 𝘄𝗿𝗼𝗻𝗴!");
            }
          }
          break;
        case 'anime':
        case "random-anime":
          {
            const _0x15decf = require("axios");
            try {
              const _0x5b4df0 = await _0x15decf.get("https://api.jikan.moe/v4/random/anime");
              const _0x262555 = _0x5b4df0.data.data;
              const _0x1749d2 = _0x262555.title;
              const _0x5e07b2 = _0x262555.synopsis;
              const _0x2e3c66 = _0x262555.images.jpg.image_url;
              const _0x27ba57 = _0x262555.episodes;
              const _0x499556 = _0x262555.status;
              const _0x2e75b3 = "📺 Title: " + _0x1749d2 + "\n🎬 Épisodes: " + _0x27ba57 + "\n📡 Status: " + _0x499556 + "\n📝 Synopsis: " + _0x5e07b2 + "\n🔗 URL: " + _0x262555.url;
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'image': {
                  'url': _0x2e3c66
                },
                'caption': _0x2e75b3
              }, {
                'quoted': _0x338562
              });
            } catch (_0x1b83a3) {
              _0x338562.reply("𝗢𝗼𝗽𝘀 𝗘𝗿𝗿𝗼𝗿!");
            }
          }
          break;
        case "news":
          {
            const _0xce3aea = await fetch("https://fantox001-scrappy-api.vercel.app/technews/random");
            const _0x2d5f81 = await _0xce3aea.json();
            const {
              thumbnail: _0x31b8ff,
              news: _0x2ccd7b
            } = _0x2d5f81;
            await _0x38a88a.sendMessage(_0x338562.chat, {
              'image': {
                'url': _0x31b8ff
              },
              'caption': _0x2ccd7b
            }, {
              'quoted': _0x338562
            });
          }
          break;
        case "approve":
        case "approve-all":
          {
            if (!_0x338562.isGroup) {
              throw group;
            }
            if (!_0x580faf) {
              throw admin;
            }
            if (!_0x2437eb) {
              throw botAdmin;
            }
            const _0x5c8781 = await _0x38a88a.groupRequestParticipantsList(_0x338562.chat);
            if (_0x5c8781.length === 0x0) {
              return _0x338562.reply("𝗛𝘂𝗵, 𝗡𝗼 𝗣𝗲𝗻𝗱𝗶𝗻𝗴 𝗷𝗼𝗶𝗻 𝗿𝗲𝗾𝘂𝗲𝘀𝘁𝘀 𝘁𝗵𝗶𝘀 𝘁𝗶𝗺𝗲!");
            }
            for (const _0x5bda21 of _0x5c8781) {
              const _0x41f995 = await _0x38a88a.groupRequestParticipantsUpdate(_0x338562.chat, [_0x5bda21.jid], 'approve');
              console.log(_0x41f995);
            }
            _0x338562.reply("𝗣𝗲𝗻𝗱𝗶𝗻𝗴 𝗣𝗮𝗿𝘁𝗶𝗰𝗶𝗽𝗮𝗻𝘁𝘀 𝗵𝗮𝘃𝗲 𝗯𝗲𝗲𝗻 𝗮𝗽𝗽𝗿𝗼𝘃𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆✅");
          }
          break;
        case 'reject':
        case 'reject-all':
          {
            if (!_0x338562.isGroup) {
              throw group;
            }
            if (!_0x580faf) {
              throw admin;
            }
            if (!_0x2437eb) {
              throw botAdmin;
            }
            const _0x4e02aa = await _0x38a88a.groupRequestParticipantsList(_0x338562.chat);
            if (_0x4e02aa.length === 0x0) {
              return _0x338562.reply("𝗛𝘂𝗵, 𝗡𝗼 𝗽𝗲𝗻𝗱𝗶𝗻𝗴 𝗷𝗼𝗶𝗻 𝗿𝗲𝗾𝘂𝗲𝘀𝘁𝘀 𝘁𝗵𝗶𝘀 𝘁𝗶𝗺𝗲");
            }
            for (const _0x59aa57 of _0x4e02aa) {
              const _0x54abd7 = await _0x38a88a.groupRequestParticipantsUpdate(_0x338562.chat, [_0x59aa57.jid], 'reject');
              console.log(_0x54abd7);
            }
            _0x338562.reply("𝗣𝗲𝗻𝗱𝗶𝗻𝗴 𝗣𝗮𝗿𝘁𝗶𝗰𝗶𝗽𝗮𝗻𝘁𝘀 𝗵𝗮𝘃𝗲 𝗯𝗲𝗲𝗻 𝗿𝗲𝗷𝗲𝗰𝘁𝗲𝗱!");
          }
          break;
        case 'admin':
          {
            if (!_0x338562.isGroup) {
              throw group;
            }
            if (!_0x2437eb) {
              throw botAdmin;
            }
            if (!_0x25caea) {
              throw NotOwner;
            }
            await _0x38a88a.groupParticipantsUpdate(_0x338562.chat, [_0x338562.sender], "promote");
            _0x338562.reply("Promoted To Admin<🥇");
          }
          break;
        case "getvar":
          if (!_0x25caea) {
            throw NotOwner;
          }
          const _0xafd7a7 = new _0x3d43ce({
            'token': herokuapi
          });
          let _0x463259 = "/apps/" + appname;
          let _0xd65f49 = await _0xafd7a7.get(_0x463259 + '/config-vars');
          let _0x59662b = "*𝗕𝗲𝗹𝗼𝘄 𝗔𝗿𝗲 𝗛𝗲𝗿𝗼𝗸𝘂 𝗩𝗮𝗿𝗶𝗮𝗯𝗹𝗲𝘀 𝗙𝗼𝗿 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗠𝗗:*\n\n";
          for (vrt in _0xd65f49) {
            _0x59662b += vrt + '=' + _0xd65f49[vrt] + "\n\n";
          }
          _0x91a68a(_0x59662b);
          break;
        case 'restart':
          if (!_0x25caea) {
            throw NotOwner;
          }
          _0x91a68a("Restarting. . .");
          await sleep(0xbb8);
          process.exit();
          break;
        case 'remove':
        case "kick":
          {
            if (!_0x338562.isGroup) {
              throw group;
            }
            if (!_0x2437eb) {
              throw botAdmin;
            }
            if (!_0x580faf) {
              throw admin;
            }
            if (!_0x338562.quoted && (!_0x338562.mentionedJid || _0x338562.mentionedJid.length === 0x0)) {
              return _0x338562.reply("Who should i remove !?");
            }
            let _0x29aa26 = _0x338562.mentionedJid[0x0] ? _0x338562.mentionedJid[0x0] : _0x338562.quoted ? _0x338562.quoted.sender : null;
            const _0x2c7d46 = _0x29aa26.split('@')[0x0];
            if (_0x29aa26 == "254759925133@s.whatsapp.net") {
              return _0x338562.reply("It's an Owner Number! 😡");
            }
            if (_0x29aa26 == _0x38a88a.decodeJid(_0x38a88a.user.id)) {
              throw "I cannot remove Myself 😡";
            }
            _0x338562.reply('@' + _0x2c7d46 + " Goodbye🤧");
            await _0x38a88a.groupParticipantsUpdate(_0x338562.chat, [_0x29aa26], "remove");
          }
          break;
        case "instagram":
        case "igdl":
        case 'ig':
          {
            const {
              igdl: _0x3bc715
            } = require("ruhend-scraper");
            if (!_0x2c14bf) {
              return _0x338562.reply("Please provide an Instagram link for the video.");
            }
            if (!_0x2c14bf.includes('https://www.instagram.com/')) {
              return _0x338562.reply("That is not a valid Instagram link.");
            }
            try {
              const _0xdbea30 = await _0x3bc715(_0x2c14bf);
              if (!_0xdbea30 || !_0xdbea30.data || _0xdbea30.data.length === 0x0) {
                return _0x338562.reply("No video found at the provided link.");
              }
              const _0x196f99 = _0xdbea30.data;
              for (let _0x1df127 = 0x0; _0x1df127 < Math.min(0x14, _0x196f99.length); _0x1df127++) {
                const _0x307c67 = _0x196f99[_0x1df127];
                const _0x45f84c = _0x307c67.url;
                await _0x38a88a.sendMessage(_0x338562.chat, {
                  'video': {
                    'url': _0x45f84c
                  },
                  'mimetype': "video/mp4",
                  'caption': "DOWNLOADED BY " + botname
                }, {
                  'quoted': _0x338562
                });
              }
            } catch (_0x305bcb) {
              console.error(_0x305bcb);
              return _0x338562.reply("An error occurred while processing the request.");
            }
          }
          break;
        case 'twitter':
        case 'twtdl':
          {
            if (!_0x2c14bf) {
              return _0x338562.reply("𝗽𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝘁𝘄𝗶𝘁𝘁𝗲𝗿 𝗹𝗶𝗻𝗸 !");
            }
            try {
              const _0x13940b = await fetchJson("https://api.dreaded.site/api/alldl?url=" + _0x2c14bf);
              if (!_0x13940b || _0x13940b.status !== 0xc8 || !_0x13940b.data || !_0x13940b.data.videoUrl) {
                return _0x338562.reply("𝗦𝗼𝗿𝗿𝘆 𝘁𝗵𝗲 𝗔𝗣𝗜 𝗱𝗶𝗱𝗻'𝘁 𝗿𝗲𝘀𝗽𝗼𝗻𝗱 𝗰𝗼𝗿𝗿𝗲𝗰𝘁𝗹𝘆. 𝗣𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗔𝗴𝗮𝗶𝗻 𝗹𝗮𝘁𝗲𝗿!");
              }
              const _0xfc50e3 = _0x13940b.data.videoUrl;
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'video': {
                  'url': _0xfc50e3
                },
                'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗",
                'gifPlayback': false
              }, {
                'quoted': _0x338562
              });
            } catch (_0x51093e) {
              _0x338562.reply("An error occured. API might be down\n" + _0x51093e);
            }
          }
          break;
        case "facebook":
        case 'fb':
        case "fbdl":
          {
            if (!_0x2c14bf) {
              return _0x338562.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗹𝗶𝗻𝗸 !");
            }
            if (!_0x2c14bf.includes('facebook.com')) {
              return _0x338562.reply("That is not a facebook link.");
            }
            try {
              let _0x33e546 = await fetchJson("https://api.dreaded.site/api/facebook?url=" + _0x2c14bf);
              if (!_0x33e546 || _0x33e546.status !== 0xc8 || !_0x33e546.facebook || !_0x33e546.facebook.sdVideo) {
                return _0x338562.reply("𝗦𝗼𝗿𝗿𝘆 𝘁𝗵𝗲 𝗔𝗣𝗜 𝗱𝗶𝗱𝗻'𝘁 𝗿𝗲𝘀𝗽𝗼𝗻𝗱 𝗰𝗼𝗿𝗿𝗲𝗰𝘁𝗹𝘆. 𝗣𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗔𝗴𝗮𝗶𝗻 𝗹𝗮𝘁𝗲𝗿!");
              }
              const _0x1efb5a = _0x33e546.facebook.sdVideo;
              if (!_0x1efb5a) {
                return _0x338562.reply("Wrong facebook data. Please ensure the video exists.");
              }
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'video': {
                  'url': _0x1efb5a
                },
                'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗",
                'gifPlayback': false
              }, {
                'quoted': _0x338562
              });
            } catch (_0x193c2d) {
              console.error("Error occurred:", _0x193c2d);
              _0x338562.reply("An error occurred. API might be down. Error: " + _0x193c2d.message);
            }
          }
          break;
        case "tiktok":
        case "tikdl":
          {
            if (!_0x2c14bf) {
              return _0x338562.reply("Please provide a TikTok video link.");
            }
            try {
              const _0x220285 = await axios.get("https://bk9.fun/download/tiktok?url=" + encodeURIComponent(_0x2c14bf));
              if (_0x220285.data.status && _0x220285.data.BK9) {
                const _0x3438e4 = _0x220285.data.BK9.BK9;
                await _0x38a88a.sendMessage(_0x338562.chat, {
                  'text': "Data fetched successfully✅ wait a moment. . ."
                }, {
                  'quoted': _0x338562
                });
                await _0x38a88a.sendMessage(_0x338562.chat, {
                  'video': {
                    'url': _0x3438e4
                  },
                  'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗",
                  'gifPlayback': false
                }, {
                  'quoted': _0x338562
                });
              } else {
                _0x91a68a("Failed to retrieve video from the provided link.");
              }
            } catch (_0x3ddbf7) {
              _0x91a68a("An error occurred during download: " + _0x3ddbf7.message);
            }
          }
          break;
        case "song":
          {
            const _0x312f77 = require("yt-search");
            try {
              if (!_0x2c14bf) {
                return _0x338562.reply("What song do you want to download?");
              }
              const {
                videos: _0x31101b
              } = await _0x312f77(_0x2c14bf);
              if (!_0x31101b || _0x31101b.length === 0x0) {
                return _0x338562.reply("No songs found!");
              }
              await _0x338562.reply("_Please wait your download is in progress_");
              const _0x26e620 = _0x31101b[0x0].url;
              let _0x1f0a1a = await fetchJson("https://api.dreaded.site/api/ytdl/audio?url=" + _0x26e620);
              if (!_0x1f0a1a || !_0x1f0a1a.result || !_0x1f0a1a.result.url) {
                return _0x338562.reply("Failed to fetch audio from the API.");
              }
              const _0x4225f9 = _0x1f0a1a.result.url;
              const _0x207df3 = _0x1f0a1a.result.title;
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'audio': {
                  'url': _0x4225f9
                },
                'mimetype': "audio/mpeg",
                'fileName': _0x207df3 + '.mp3'
              }, {
                'quoted': _0x338562
              });
            } catch (_0x1e5342) {
              _0x338562.reply("Download failed\n" + _0x1e5342.message);
            }
          }
          break;
        case 'sc':
        case "script":
        case "repo":
          _0x38a88a.sendMessage(_0x338562.chat, {
            'image': {
              'url': "https://i.imgur.com/HP6GyiD.jpeg"
            },
            'caption': " Hello👋 *" + _0x3d3499 + "*,You can deploy 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 using the GitHub link below 𓅂\n\nFork and give us a star✨.\n\n https://github.com/Viniznimco/VINIZIAZ-XMD\n\nLink with your whatsapp using pairing link below\n\nhttps://msnapdragon-junior.onrender.com\n\nCopy the session_id and Fill in the required Variables before Deploy\n\nEnjoy and have fun with ░𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭 𝗫𝗠𝗗░\n\n𝗖𝗼𝗱𝗲𝗱 𝗮𝗻𝗱 𝗽𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 ✦𝗦𝗻𝗮𝗽𝗱𝗿𝗮𝗴𝗼𝗻!"
          }, {
            'quoted': _0x338562
          });
          break;
        case 'closetime':
          if (!_0x338562.isGroup) {
            throw group;
          }
          if (!_0x580faf) {
            throw admin;
          }
          if (!_0x2437eb) {
            throw botAdmin;
          }
          if (_0x5eadbb[0x1] == "second") {
            var _0x561cc2 = _0x5eadbb[0x0] * "1000";
          } else {
            if (_0x5eadbb[0x1] == "minute") {
              var _0x561cc2 = _0x5eadbb[0x0] * "60000";
            } else {
              if (_0x5eadbb[0x1] == "hour") {
                var _0x561cc2 = _0x5eadbb[0x0] * "3600000";
              } else {
                if (_0x5eadbb[0x1] == "day") {
                  var _0x561cc2 = _0x5eadbb[0x0] * "86400000";
                } else {
                  return _0x91a68a("*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second");
                }
              }
            }
          }
          _0x91a68a("Countdown of  " + q + " starting from now to close the group");
          setTimeout(() => {
            _0x38a88a.groupSettingUpdate(_0x338562.chat, "announcement");
            _0x91a68a("𝗚𝗿𝗼𝘂𝗽 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗰𝗹𝗼𝘀𝗲𝗱");
          }, _0x561cc2);
          break;
        case "opentime":
          if (!_0x338562.isGroup) {
            throw group;
          }
          if (!_0x580faf) {
            throw admin;
          }
          if (!_0x2437eb) {
            throw botAdmin;
          }
          if (_0x5eadbb[0x1] == 'second') {
            var _0x561cc2 = _0x5eadbb[0x0] * "1000";
          } else {
            if (_0x5eadbb[0x1] == "minute") {
              var _0x561cc2 = _0x5eadbb[0x0] * "60000";
            } else {
              if (_0x5eadbb[0x1] == "hour") {
                var _0x561cc2 = _0x5eadbb[0x0] * '3600000';
              } else {
                if (_0x5eadbb[0x1] == 'day') {
                  var _0x561cc2 = _0x5eadbb[0x0] * "86400000";
                } else {
                  return _0x91a68a("*select:*\nsecond\nminute\nhour\n\n*example*\n10 second");
                }
              }
            }
          }
          _0x91a68a("Countdown of " + q + " starting from now to open the group");
          setTimeout(() => {
            _0x38a88a.groupSettingUpdate(_0x338562.chat, "not_announcement");
            _0x91a68a("𝗚𝗿𝗼𝘂𝗽 𝗼𝗽𝗲𝗻𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆");
          }, _0x561cc2);
          break;
        case "close":
        case "mute":
          {
            if (!_0x338562.isGroup) {
              throw group;
            }
            if (!_0x2437eb) {
              throw botAdmin;
            }
            if (!_0x580faf) {
              throw admin;
            }
            await _0x38a88a.groupSettingUpdate(_0x338562.chat, 'announcement');
            _0x338562.reply("Group successfully locked!");
          }
          break;
        case "open":
        case 'unmute':
          {
            if (!_0x338562.isGroup) {
              throw group;
            }
            if (!_0x2437eb) {
              throw botAdmin;
            }
            if (!_0x580faf) {
              throw admin;
            }
            await _0x38a88a.groupSettingUpdate(_0x338562.chat, "not_announcement");
            _0x338562.reply("Group successfully unlocked!");
          }
          break;
        case 'disp-1':
          {
            if (!_0x338562.isGroup) {
              throw group;
            }
            if (!_0x2437eb) {
              throw botAdmin;
            }
            if (!_0x580faf) {
              throw admin;
            }
            await _0x38a88a.groupToggleEphemeral(_0x338562.chat, 86400);
            _0x338562.reply("Dissapearing messages successfully turned on for 24hrs!");
          }
          break;
        case 'promote':
          {
            if (!_0x338562.isGroup) {
              throw group;
            }
            if (!_0x2437eb) {
              throw botAdmin;
            }
            if (!_0x580faf) {
              throw admin;
            }
            if (!_0x338562.quoted) {
              throw "Ttag someone with the command!";
            }
            let _0x24a432 = _0x338562.mentionedJid[0x0] ? _0x338562.mentionedJid : _0x338562.quoted ? [_0x338562.quoted.sender] : [_0x2c14bf.replace(/[^0-9]/g, '') + "@s.whatsapp.net"];
            await _0x38a88a.groupParticipantsUpdate(_0x338562.chat, _0x24a432, 'promote');
            _0x338562.reply("Successfully promoted! 🦄");
          }
          break;
        case "demote":
          {
            if (!_0x338562.isGroup) {
              throw group;
            }
            if (!_0x2437eb) {
              throw botAdmin;
            }
            if (!_0x580faf) {
              throw admin;
            }
            if (!_0x338562.quoted) {
              throw "Ttag someone with the command!";
            }
            let _0x13bf6f = _0x338562.mentionedJid[0x0] ? _0x338562.mentionedJid : _0x338562.quoted ? [_0x338562.quoted.sender] : [_0x2c14bf.replace(/[^0-9]/g, '') + "@s.whatsapp.net"];
            await _0x38a88a.groupParticipantsUpdate(_0x338562.chat, _0x13bf6f, 'demote');
            _0x338562.reply("Successfully demoted! 😲");
          }
          break;
        case "disp-7":
          {
            if (!_0x338562.isGroup) {
              throw group;
            }
            if (!_0x2437eb) {
              throw botAdmin;
            }
            if (!_0x580faf) {
              throw admin;
            }
            await _0x38a88a.groupToggleEphemeral(_0x338562.chat, 604800);
            _0x338562.reply("Dissapearing messages successfully turned on for 7 days!");
          }
          break;
        case "disp-90":
          {
            if (!_0x338562.isGroup) {
              throw group;
            }
            if (!_0x2437eb) {
              throw botAdmin;
            }
            if (!_0x580faf) {
              throw admin;
            }
            await _0x38a88a.groupToggleEphemeral(_0x338562.chat, 7776000);
            _0x338562.reply("Dissapearing messages successfully turned on for 90 days!");
          }
          break;
        case 'disp-off':
          {
            if (!_0x338562.isGroup) {
              throw group;
            }
            if (!_0x2437eb) {
              throw botAdmin;
            }
            if (!_0x580faf) {
              throw admin;
            }
            await _0x38a88a.groupToggleEphemeral(_0x338562.chat, 0x0);
            _0x338562.reply("Dissapearing messages successfully turned off!");
          }
          break;
        case "icon":
          {
            if (!_0x338562.isGroup) {
              throw group;
            }
            if (!_0x580faf) {
              throw admin;
            }
            if (!_0x2437eb) {
              throw botAdmin;
            }
            if (!_0x2fea9f) {
              throw "Send or tag an image with the caption " + (prefix + _0x4cc17f);
            }
            if (!/image/.test(_0x129ae5)) {
              throw "Send or tag an image with the caption " + (prefix + _0x4cc17f);
            }
            if (/webp/.test(_0x129ae5)) {
              throw "Send or tag an image with the caption " + (prefix + _0x4cc17f);
            }
            let _0x559c50 = await _0x38a88a.downloadAndSaveMediaMessage(_0x2fea9f);
            await _0x38a88a.updateProfilePicture(_0x338562.chat, {
              'url': _0x559c50
            })["catch"](_0xeea87e => fs.unlinkSync(_0x559c50));
            _0x91a68a("Group icon updated");
          }
          break;
        case "revoke":
        case "newlink":
        case "reset":
          {
            if (!_0x338562.isGroup) {
              throw group;
            }
            if (!_0x580faf) {
              throw admin;
            }
            if (!_0x2437eb) {
              throw botAdmin;
            }
            await _0x38a88a.groupRevokeInvite(_0x338562.chat);
            await _0x38a88a.sendText(_0x338562.chat, "Group link revoked!", _0x338562);
            let _0x1d1e2a = await _0x38a88a.groupInviteCode(_0x338562.chat);
            _0x38a88a.sendText(_0x338562.sender, "https://chat.whatsapp.com/" + _0x1d1e2a + "\n\nHere is the new group link for " + _0x552411.subject, _0x338562, {
              'detectLink': true
            });
            _0x38a88a.sendText(_0x338562.chat, "Sent you the new group link in your inbox!", _0x338562);
          }
          break;
        case "delete":
        case 'del':
          {
            if (!_0x338562.isGroup) {
              throw group;
            }
            if (!_0x2437eb) {
              throw botAdmin;
            }
            if (!_0x580faf) {
              throw admin;
            }
            if (!_0x338562.quoted) {
              throw "No message quoted for deletion";
            }
            let {
              chat: _0x3e15e6,
              fromMe: _0x47be11,
              id: _0x24d24e,
              isBaileys: _0x1cb3b8
            } = _0x338562.quoted;
            if (_0x1cb3b8) {
              throw "I cannot delete. Quoted message is my message or another bot message.";
            }
            _0x38a88a.sendMessage(_0x338562.chat, {
              'delete': {
                'remoteJid': _0x338562.chat,
                'fromMe': false,
                'id': _0x338562.quoted.id,
                'participant': _0x338562.quoted.sender
              }
            });
          }
          break;
        case "leave":
          {
            if (!_0x25caea) {
              throw NotOwner;
            }
            if (!_0x338562.isGroup) {
              throw group;
            }
            await _0x38a88a.sendMessage(_0x338562.chat, {
              'text': "𝗚𝗼𝗼𝗱𝗯𝘆𝗲 𝗲𝘃𝗲𝗿𝘆𝗼𝗻𝗲👋. 𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇-𝗔𝗶 𝗶𝘀 𝗟𝗲𝗮𝘃𝗶𝗻𝗴 𝘁𝗵𝗲 𝗚𝗿𝗼𝘂𝗽 𝗻𝗼𝘄...",
              'mentions': _0x23ae2f.map(_0x1387b9 => _0x1387b9.id)
            }, {
              'quoted': _0x338562
            });
            await _0x38a88a.groupLeave(_0x338562.chat);
          }
          break;
        case "subject":
        case 'changesubject':
          {
            if (!_0x338562.isGroup) {
              throw group;
            }
            if (!_0x2437eb) {
              throw botAdmin;
            }
            if (!_0x580faf) {
              throw admin;
            }
            if (!_0x2c14bf) {
              throw "Provide the text for the group subject.";
            }
            await _0x38a88a.groupUpdateSubject(_0x338562.chat, _0x2c14bf);
            _0x338562.reply("Group name successfully updated! 💀");
          }
          break;
        case "desc":
        case "setdesc":
          {
            if (!_0x338562.isGroup) {
              throw group;
            }
            if (!_0x2437eb) {
              throw botAdmin;
            }
            if (!_0x580faf) {
              throw admin;
            }
            if (!_0x2c14bf) {
              throw "Provide the text for the group description";
            }
            await _0x38a88a.groupUpdateDescription(_0x338562.chat, _0x2c14bf);
            _0x338562.reply("Group description successfully updated! 🥶");
          }
          break;
        case "hidetag":
        case 'tag':
          {
            if (!_0x338562.isGroup) {
              throw group;
            }
            if (!_0x2437eb) {
              throw botAdmin;
            }
            if (!_0x580faf) {
              throw admin;
            }
            _0x38a88a.sendMessage(_0x338562.chat, {
              'text': q ? q : "😅𝗕𝗹𝗶𝗻𝗱 𝗧𝗮𝗴𝘀😅",
              'mentions': _0x23ae2f.map(_0x5617df => _0x5617df.id)
            }, {
              'quoted': _0x338562
            });
          }
          break;
        case "tagall":
          {
            if (!_0x338562.isGroup) {
              throw group;
            }
            if (!_0x2437eb) {
              throw botAdmin;
            }
            if (!_0x580faf) {
              throw admin;
            }
            let _0x507b74 = "𝗢𝗻𝗹𝘆 𝗳𝗼𝗼𝗹𝘀 𝗮𝗿𝗲 𝘁𝗮𝗴𝗴𝗲𝗱 𝗵𝗲𝗿𝗲😅: \n   \n  Message " + (q ? q : '') + "*\n\n";
            for (let _0x2cf0ab of _0x23ae2f) {
              _0x507b74 += "📧 @" + _0x2cf0ab.id.split('@')[0x0] + "\n";
            }
            _0x38a88a.sendMessage(_0x338562.chat, {
              'text': _0x507b74,
              'mentions': _0x23ae2f.map(_0x36e6f7 => _0x36e6f7.id)
            }, {
              'quoted': _0x338562
            });
          }
          break;
        case "whatsong":
        case 'shazam':
          let _0x6177cb = new acrcloud({
            'host': "identify-eu-west-1.acrcloud.com",
            'access_key': "2631ab98e77b49509e3edcf493757300",
            'access_secret': "KKbVWlTNCL3JjxjrWnywMdvQGanyhKRN0fpQxyUo"
          });
          if (!_0x338562.quoted) {
            throw "Tag a short video or audio";
          }
          let _0x5c75a7 = _0x338562.quoted ? _0x338562.quoted : _0x338562;
          let _0x5d5435 = (_0x5c75a7.msg || _0x5c75a7).mimetype || _0x5c75a7.mediaType || '';
          if (/video|audio/.test(_0x5d5435)) {
            let _0x2bc103 = await _0x5c75a7.download();
            await _0x91a68a("Analyzing the media...");
            let {
              status: _0x1c5ed7,
              metadata: _0x4f4170
            } = await _0x6177cb.identify(_0x2bc103);
            if (_0x1c5ed7.code !== 0x0) {
              throw _0x1c5ed7.msg;
            }
            let {
              title: _0x3dc6e1,
              artists: _0x5b49d9,
              album: _0x26e82f,
              genres: _0x297986,
              release_date: _0x5371e8
            } = _0x4f4170.music[0x0];
            let _0x5e50a0 = "*• Title:* " + _0x3dc6e1 + (_0x5b49d9 ? "\n*• Artists:* " + _0x5b49d9.map(_0x5b7764 => _0x5b7764.name).join(", ") : '');
            _0x5e50a0 += '' + (_0x26e82f ? "\n*• Album:* " + _0x26e82f.name : '') + (_0x297986 ? "\n*• Genres:* " + _0x297986.map(_0x2c5b90 => _0x2c5b90.name).join(", ") : '') + "\n";
            _0x5e50a0 += "*• Release Date:* " + _0x5371e8;
            await _0x38a88a.sendMessage(_0x338562.chat, {
              'text': _0x5e50a0.trim()
            }, {
              'quoted': _0x338562
            });
            const {
              videos: _0x3f54b2
            } = await yts(_0x3dc6e1);
            if (!_0x3f54b2 || _0x3f54b2.length <= 0x0) {
              _0x91a68a("No Matching videos found for : *" + _0x5eadbb[0x0] + "*!!");
              return;
            }
            let _0x152231 = _0x3f54b2[0x0].url;
            let _0x32603c = await ytdl.getInfo(_0x152231);
            if (_0x32603c.videoDetails.lengthSeconds >= 0x708) {
              _0x91a68a("Too big!");
              return;
            }
            let _0x211231 = _0x32603c.videoDetails.title;
            let _0x3ba02a = '' + Math.floor(Math.random() * 0x2710) + ".mp3";
            const _0x5bb26d = ytdl(_0x152231, {
              'filter': _0x5a9c58 => _0x5a9c58.audioBitrate == 0xa0 || _0x5a9c58.audioBitrate == 0x80
            }).pipe(fs.createWriteStream('./' + _0x3ba02a));
            console.log("Audio downloading ->", _0x152231);
            await new Promise((_0x18b045, _0x2a1214) => {
              _0x5bb26d.on("error", _0x2a1214);
              _0x5bb26d.on("finish", _0x18b045);
            });
            let _0xc596e7 = fs.statSync('./' + _0x3ba02a);
            let _0x5a5d0e = _0xc596e7.size;
            let _0x1c743e = _0x5a5d0e / 1048576;
            console.log("Audio downloaded ! \n Size: " + _0x1c743e);
            if (_0x1c743e <= 0x28) {
              await _0x38a88a.sendMessage(_0x4b480f, {
                'document': fs.readFileSync('./' + _0x3ba02a),
                'mimetype': "audio/mpeg",
                'fileName': _0x211231 + ".mp3"
              }, {
                'quoted': _0x338562
              });
            } else {
              _0x91a68a("File size bigger.");
            }
            fs.unlinkSync('./' + _0x3ba02a);
          }
          break;
        case 's':
        case "sticker":
          {
            const {
              Sticker: _0x16a400,
              createSticker: _0x31b3ea,
              StickerTypes: _0x39876e
            } = require('wa-sticker-formatter');
            if (!_0x30e1f8) {
              _0x338562.reply("Quote an image or a short video.");
              return;
            }
            ;
            let _0x3d8c13;
            if (_0x30e1f8.imageMessage) {
              _0x3d8c13 = _0x30e1f8.imageMessage;
            } else {
              if (_0x30e1f8.videoMessage) {
                _0x3d8c13 = _0x30e1f8.videoMessage;
              } else {
                _0x338562.reply("That is neither an image nor a short video! ");
                return;
              }
            }
            ;
            var _0x558e3e = await _0x38a88a.downloadAndSaveMediaMessage(_0x3d8c13);
            let _0x1dc6c5 = new _0x16a400(_0x558e3e, {
              'pack': packname,
              'author': author,
              'type': _0x39876e.FULL,
              'categories': ['🤩', '🎉'],
              'id': "12345",
              'quality': 0x46,
              'background': 'transparent'
            });
            const _0x3892eb = await _0x1dc6c5.toBuffer();
            _0x38a88a.sendMessage(_0x338562.chat, {
              'sticker': _0x3892eb
            }, {
              'quoted': _0x338562
            });
          }
          break;
        case 'dp':
          {
            try {
              ha = _0x338562.quoted.sender;
              qd = await _0x38a88a.getName(ha);
              pp2 = await _0x38a88a.profilePictureUrl(ha, "image");
            } catch {
              pp2 = "https://tinyurl.com/yx93l6da";
            }
            if (!_0x338562.quoted) {
              throw "Tag a user!";
            }
            bar = "Profile Picture of " + qd;
            _0x38a88a.sendMessage(_0x338562.chat, {
              'image': {
                'url': pp2
              },
              'caption': bar,
              'fileLength': "999999999999"
            }, {
              'quoted': _0x338562
            });
          }
          break;
        case "list":
        case "vars":
        case 'help':
          _0x91a68a("𝟏 Owner➣ 𝐆𝐞𝐭 𝐍𝐢𝗺𝗰𝗼_𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇  𝐜𝐨𝐧𝐭𝐚𝐜𝐭\n\n𝟐 𝐁𝐫𝐨𝐚𝐝𝐜𝐚𝐬𝐭➣ 𝐒𝐞𝐧𝐝𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐭𝐨 𝐚𝐥𝐥 𝐠𝐫𝐨𝐮𝐩𝐬\n\n𝟑 𝐉𝐨𝐢𝐧➣ 𝐭𝐚𝐠 𝐠𝐫𝐨𝐮𝐩 𝐥𝐢𝐧𝐤 𝐰𝐢𝐭𝐡 𝐣𝐨𝐢𝐧\n\n𝟒 𝐛𝐨𝐭𝐩𝐩➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐛𝐨𝐭𝐬 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐝𝐩\n\n𝟓 𝐁𝐥𝐨𝐜𝐤➣ 𝐁𝐥𝐨𝐜𝐤 𝐭𝐡𝐞𝐦 𝐟𝐚𝐤𝐞 𝐟𝐫𝐢𝐞𝐧𝐝𝐬\n\n𝟔 𝐊𝐢𝐥𝐥➣ 𝐊𝐢𝐥𝐥𝐬 𝐠𝐫𝐨𝐮𝐩 𝐢𝐧 𝐬𝐞𝐜𝐨𝐧𝐝𝐬\n\n𝟕 𝐔𝐧𝐛𝐥𝐨𝐜𝐤➣ 𝐆𝐢𝐯𝐞 𝐭𝐡𝐞𝐦 𝐟𝐚𝐤𝐞 𝐟𝐫𝐢𝐞𝐧𝐝𝐬 𝐚 𝐬𝐞𝐜𝐨𝐧𝐝 𝐜𝐡𝐚𝐧𝐜𝐞\n\n𝟖 𝐒𝐞𝐭𝐯𝐚𝐫➣ 𝐒𝐞𝐭 𝐯𝐚𝐫𝐬 𝐢𝐧 𝐡𝐞𝐫𝐨𝐤𝐮\n\n𝟗 𝐒𝐭𝐢𝐜𝐤𝐞𝐫➣ 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐚 𝐩𝐡𝐨𝐭𝐨 𝐨𝐫 𝐚 𝐬𝐡𝐨𝐫𝐭 𝐯𝐢𝐝𝐞𝐨 𝐭𝐨 𝐚 𝐬𝐭𝐢𝐜𝐤𝐞𝐫\n\n𝟏𝟎 𝐓𝐨𝐢𝐦𝐠➣ 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐚 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐭𝐨 𝐚 𝐩𝐡𝐨𝐭𝐨\n\n𝟏𝟏 𝐏𝐥𝐚𝐲➣ 𝐆𝐞𝐭 𝐲𝐨𝐮𝐫 𝐟𝐚𝐯𝐨𝐫𝐢𝐭𝐞 𝐬𝐨𝐧𝐠\n\n𝟏𝟐 𝐖𝐡𝐚𝐭𝐬𝐨𝐧𝐠➣ 𝐠𝐞𝐭 𝐭𝐡𝐞 𝐭𝐢𝐭𝐥𝐞 𝐨𝐟 𝐭𝐡𝐞 𝐬𝐨𝐧𝐠\n\n𝟏𝟑 𝐘𝐭𝐬 ➣ 𝐆𝐞𝐭 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐯𝐢𝐝𝐞𝐨𝐬\n\n𝟏𝟒 𝐌𝐨𝐯𝐢𝐞➣ 𝐆𝐞𝐭 𝐲𝐨𝐮𝐫 𝐟𝐚𝐯𝐨𝐫𝐢𝐭𝐞 𝐦𝐨𝐯𝐢𝐞 𝐝𝐞𝐭𝐚𝐢𝐥𝐬\n\n𝟏𝟓 𝐌𝐢𝐱➣ 𝐂𝐨𝐦𝐛𝐢𝐧𝐞𝐬 +𝟐𝐞𝐦𝐨𝐣𝐢𝐬\n\n𝟏𝟔 𝐀𝐢-𝐢𝐦𝐠➣ 𝐆𝐞𝐭 𝐚𝐧 𝐀𝐢 𝐩𝐡𝐨𝐭𝐨\n\n𝟏𝟕 𝐆𝐩𝐭 ➣ 𝐇𝐞𝐫𝐞 𝐭𝐨 𝐚𝐧𝐬𝐰𝐞𝐫 𝐲𝐨𝐮𝐫 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧𝐬\n\n𝟏𝟖 𝐃𝐩➣ 𝐆𝐞𝐭𝐬 𝐚 𝐩𝐞𝐫𝐬𝐨𝐧 𝐝𝐩\n\n𝟏𝟗 𝐒𝐩𝐞𝐞𝐝 ➣ 𝐂𝐡𝐞𝐜𝐤𝐬 𝐛𝐨𝐭𝐬 𝐬𝐩𝐞𝐞𝐝\n\n𝟐𝟎 𝐀𝐥𝐢𝐯𝐞➣ 𝐂𝐡𝐞𝐜𝐤 𝐰𝐡𝐞𝐭𝐡𝐞𝐫 𝐭𝐡𝐞 𝐛𝐨𝐭 𝐢𝐬 𝐬𝐭𝐢𝐥𝐥 𝐤𝐢𝐜𝐤𝐢𝐧𝐠\n\n𝟐𝟏 𝐑𝐮𝐧𝐭𝐢𝐦𝐞➣ 𝐖𝐡𝐞𝐧 𝐝𝐢𝐝 𝐛𝐨𝐭 𝐬𝐭𝐚𝐫𝐭𝐞𝐝 𝐨𝐩𝐞𝐫𝐚𝐭𝐢𝐧𝐠\n\n𝟐𝟐 𝐒𝐜𝐫𝐢𝐩𝐭➣ 𝐆𝐞𝐭 𝐛𝐨𝐭 𝐬𝐜𝐫𝐢𝐩𝐭\n\n𝟐𝟑 𝐎𝐰𝐧𝐞𝐫  ➣ 𝐆𝐞𝐭 𝐨𝐰𝐧𝐞𝐫(𝐬) 𝐜𝐨𝐧𝐭𝐚𝐜𝐭\n\n𝟐𝟒 𝐕𝐚𝐫𝐬 ➣ 𝐒𝐞𝐞 𝐚𝐥𝐥 𝐯𝐚𝐫𝐢𝐚𝐛𝐥𝐞𝐬\n\n𝟐𝟓 𝐏𝐫𝐨𝐦𝐨𝐭𝐞➣ 𝐆𝐢𝐯𝐞𝐬 𝐨𝐧𝐞 𝐚𝐝𝐦𝐢𝐧 𝐫𝐨𝐥𝐞\n\n𝟐𝟔 𝐃𝐞𝐦𝐨𝐭𝐞➣ 𝐃𝐞𝐦𝐨𝐭𝐞𝐬 𝐟𝐫𝐨𝐦 𝐠𝐫𝐨𝐮𝐩 𝐚𝐝𝐦𝐢𝐧 𝐭𝐨 𝐚 𝐦𝐞𝐦𝐛𝐞𝐫\n\n𝟐𝟕 𝐃𝐞𝐥𝐞𝐭𝐞➣ 𝐃𝐞𝐥𝐞𝐭𝐞 𝐚 𝐦𝐞𝐬𝐬𝐚𝐠𝐞\n\n𝟐𝟖 𝐑𝐞𝐦𝐨𝐯𝐞/𝐤𝐢𝐜𝐤➣ 𝐊𝐢𝐜𝐤 𝐭𝐡𝐚𝐭 𝐭𝐞𝐫𝐫𝐨𝐫𝐢𝐬𝐭 𝐟𝐫𝐨𝐦 𝐚 𝐠𝐫𝐨𝐮𝐩\n\n𝟐𝟗 𝐅𝐨𝐫𝐞𝐢𝐠𝐧𝐞𝐫𝐬➣ 𝐆𝐞𝐭 𝐟𝐨𝐫𝐞𝐢𝐠𝐧 𝐧𝐮𝐦𝐛𝐞𝐫𝐬\n\n𝟑𝟎 𝐂𝐥𝐨𝐬𝐞➣ 𝐓𝐢𝐦𝐞 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞𝐦𝐛𝐞𝐫𝐬 𝐭𝐨 𝐭𝐚𝐤𝐞 𝐚 𝐛𝐫𝐞𝐚𝐤 𝐨𝐧𝐥𝐲 𝐚𝐝𝐦𝐢𝐧𝐬 𝐜𝐚𝐧 𝐜𝐡𝐚𝐭\n\n𝟑𝟏 𝐎𝐩𝐞𝐧 ➣ 𝐄𝐯𝐞𝐫𝐲𝐨𝐧𝐞 𝐜𝐚𝐧 𝐜𝐡𝐚𝐭 𝐢𝐧 𝐚 𝐠𝐫𝐨𝐮𝐩\n\n𝟑𝟐 𝐈𝐜𝐨𝐧➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐢𝐜𝐨𝐧\n\n𝟑𝟑 𝐒𝐮𝐛𝐣𝐞𝐜𝐭➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐬𝐮𝐛𝐣𝐞𝐜𝐭\n\n𝟑𝟒 𝐃𝐞𝐬𝐜➣ 𝐆𝐞𝐭 𝐠𝐫𝐨𝐮𝐩 𝐝𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧\n\n𝟑𝟓 𝐋𝐞𝐚𝐯𝐞➣ 𝐓𝐡𝐞 𝐠𝐫𝐨𝐮𝐩 𝐢𝐬 𝐛𝐨𝐫𝐢𝐧𝐠 ,𝐭𝐢𝐦𝐞 𝐟𝐨𝐫 𝐛𝐨𝐭 𝐭𝐨 𝐥𝐞𝐚𝐯𝐞\n\n𝟑𝟔 𝐓𝐚𝐠𝐚𝐥𝐥 ➣ 𝐓𝐚𝐠 𝐞𝐯𝐞𝐫𝐲𝐨𝐧𝐞 𝐢𝐧 𝐚 𝐠𝐫𝐨𝐮𝐩 𝐜𝐡𝐚𝐭\n\n𝟑𝟕 𝐇𝐢𝐝𝐞𝐭𝐚𝐠➣ 𝐀𝐭𝐭𝐞𝐧𝐭𝐢𝐨𝐧! 𝐀𝐭𝐭𝐞𝐧𝐭𝐢𝐨𝐧! 𝐬𝐨𝐦𝐞𝐨𝐧𝐞 𝐡𝐚𝐬 𝐬𝐨𝐦𝐞𝐭𝐡𝐢𝐧𝐠 𝐭𝐨 𝐬𝐚𝐲\n\n𝟑𝟖 𝐑𝐞𝐯𝐨𝐤𝐞 ➣ 𝐑𝐞𝐬𝐞𝐭 𝐠𝐫𝐨𝐮𝐩 𝐥𝐢𝐧𝐤");
          break;
        case 'vv':
        case 'retrieve':
          {
            if (!_0x338562.quoted) {
              return _0x338562.reply("quote a viewonce message eh");
            }
            const _0x3321ff = _0x338562.msg?.["contextInfo"]?.['quotedMessage'];
            if (_0x3321ff.imageMessage) {
              let _0x20353b = _0x3321ff.imageMessage.caption;
              let _0x32c0ab = await _0x38a88a.downloadAndSaveMediaMessage(_0x3321ff.imageMessage);
              _0x38a88a.sendMessage(_0x338562.chat, {
                'image': {
                  'url': _0x32c0ab
                },
                'caption': "Retrieved by Viniziaz!\n" + _0x20353b
              }, {
                'quoted': _0x338562
              });
            }
            if (_0x3321ff.videoMessage) {
              let _0x4dd582 = _0x3321ff.videoMessage.caption;
              let _0x19ce4c = await _0x38a88a.downloadAndSaveMediaMessage(_0x3321ff.videoMessage);
              _0x38a88a.sendMessage(_0x338562.chat, {
                'video': {
                  'url': _0x19ce4c
                },
                'caption': "Retrieved by Viniziaz!\n" + _0x4dd582
              }, {
                'quoted': _0x338562
              });
            }
          }
          break;
        case 'vv2':
        case "mmmh":
          {
            if (!_0x338562.quoted) {
              return _0x338562.reply("quote a viewonce message eh");
            }
            const _0x59201d = _0x338562.msg?.["contextInfo"]?.["quotedMessage"];
            if (_0x59201d.imageMessage) {
              let _0xd6efdd = _0x59201d.imageMessage.caption;
              let _0x158bda = await _0x38a88a.downloadAndSaveMediaMessage(_0x59201d.imageMessage);
              _0x38a88a.sendMessage(_0x38a88a.user.id, {
                'image': {
                  'url': _0x158bda
                },
                'caption': "Retrieved by Viniziaz!\n" + _0xd6efdd
              }, {
                'quoted': _0x338562
              });
            }
            if (_0x59201d.videoMessage) {
              let _0x391266 = _0x59201d.videoMessage.caption;
              let _0x3ed6b5 = await _0x38a88a.downloadAndSaveMediaMessage(_0x59201d.videoMessage);
              _0x38a88a.sendMessage(_0x38a88a.user.id, {
                'video': {
                  'url': _0x3ed6b5
                },
                'caption': "Retrieved by Viniziaz!\n" + _0x391266
              }, {
                'quoted': _0x338562
              });
            }
          }
          break;
        case 'take':
          {
            const {
              Sticker: _0x350222,
              createSticker: _0x28b6d2,
              StickerTypes: _0x1ac435
            } = require('wa-sticker-formatter');
            if (!_0x30e1f8) {
              _0x338562.reply("Quote an image, a short video or a sticker to change watermark.");
              return;
            }
            ;
            let _0x2ce44d;
            if (_0x30e1f8.imageMessage) {
              _0x2ce44d = _0x30e1f8.imageMessage;
            } else {
              if (_0x30e1f8.videoMessage) {
                _0x2ce44d = _0x30e1f8.videoMessage;
              } else {
                if (_0x30e1f8.stickerMessage) {
                  _0x2ce44d = _0x30e1f8.stickerMessage;
                } else {
                  _0x338562.reply("This is neither a sticker, image nor a video...");
                  return;
                }
              }
            }
            ;
            var _0x558e3e = await _0x38a88a.downloadAndSaveMediaMessage(_0x2ce44d);
            let _0x5cae54 = new _0x350222(_0x558e3e, {
              'pack': _0x3d3499,
              'author': _0x3d3499,
              'type': _0x1ac435.FULL,
              'categories': ['🤩', '🎉'],
              'id': "12345",
              'quality': 0x46,
              'background': "transparent"
            });
            const _0x417c73 = await _0x5cae54.toBuffer();
            _0x38a88a.sendMessage(_0x338562.chat, {
              'sticker': _0x417c73
            }, {
              'quoted': _0x338562
            });
          }
          break;
        case "song2":
          {
            const _0x5bcc00 = require("yt-search");
            const _0x5a0ef9 = require("node-fetch");
            const _0xd99370 = async _0x4a78cd => {
              const _0xc958f4 = await _0x5a0ef9(_0x4a78cd);
              return _0xc958f4.json();
            };
            try {
              if (!_0x2c14bf || _0x2c14bf.trim().length === 0x0) {
                return _0x338562.reply("What song do you want to download ?");
              }
              const _0x351d9d = await _0x5bcc00(_0x2c14bf);
              if (!_0x351d9d || !_0x351d9d.videos.length) {
                return message.reply("No video found for the specified query.");
              }
              const _0x3192ea = _0x351d9d.videos[0x0];
              const _0x118459 = _0x3192ea.url;
              _0x338562.reply("_Please wait your download on progress..._");
              let _0x3791bf;
              let _0xfabc6d;
              let _0x480edc;
              _0x3791bf = await _0xd99370("https://xploader-api.vercel.app/ytmp3?url=" + encodeURIComponent(_0x118459));
              if (_0x3791bf.success) {
                _0xfabc6d = _0x3791bf.result.download_url;
                _0x480edc = _0x3791bf.result;
              } else {
                _0x3791bf = await _0xd99370("https://api.ryzendesu.vip/api/downloader/ytmp3?url=" + encodeURIComponent(_0x118459));
                if (_0x3791bf.success) {
                  _0xfabc6d = _0x3791bf.result.download_url;
                  _0x480edc = _0x3791bf.result;
                } else {
                  _0x3791bf = await _0xd99370("https://api.dreaded.site/api/ytdl/audio?url=" + encodeURIComponent(_0x118459));
                  if (_0x3791bf.success) {
                    _0xfabc6d = _0x3791bf.result.download_url;
                    _0x480edc = _0x3791bf.result;
                  }
                }
              }
              if (!_0xfabc6d || !_0x480edc) {
                return _0x338562.reply("Failed to retrieve download URL from all sources. Please try again later.");
              }
              const _0x3a2a13 = {
                'audio': {
                  'url': _0xfabc6d
                },
                'mimetype': "audio/mp4",
                'fileName': _0x480edc.title + ".mp3"
              };
              await _0x38a88a.sendMessage(_0x338562.chat, _0x3a2a13, {
                'quoted': _0x338562
              });
            } catch (_0xe972a6) {
              console.error("Error during download process:", _0xe972a6);
              return _0x338562.reply("Download failed due to an error: " + (_0xe972a6.message || _0xe972a6));
            }
          }
          break;
        case "ytsearch":
        case "yts":
          {
            if (!_0x2c14bf) {
              _0x91a68a("Provide a search term!E.g: Alan walker alone");
              return;
            }
            const {
              videos: _0x39a772
            } = await yts(_0x2c14bf);
            if (!_0x39a772 || _0x39a772.length <= 0x0) {
              _0x91a68a("No Matching videos found for : *" + _0x2c14bf + '*!!');
              return;
            }
            const _0x180c56 = _0x39a772.length < 0xa ? _0x39a772.length : 0xa;
            let _0x56c37d = "YouTube Search\n🔍 Query ~> " + _0x2c14bf + "\n\n";
            for (let _0xcd758d = 0x0; _0xcd758d < _0x180c56; _0xcd758d++) {
              _0x56c37d += "Link ~> " + _0x39a772[_0xcd758d].url + "\nChannel ~> " + _0x39a772[_0xcd758d].author.name + "\nTitle ~> " + _0x39a772[_0xcd758d].title + "\n\n";
            }
            _0x91a68a(_0x56c37d);
            return;
          }
          break;
        case "ytmp3":
        case "yta":
          {
            try {
              if (!_0x2c14bf) {
                return _0x338562.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗹𝗶𝗻𝗸!");
              }
              let _0x3b3fc2 = _0x2c14bf.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
              if (!_0x3b3fc2) {
                return _0x338562.reply("𝗧𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗟𝗶𝗻𝗸");
              }
              let _0x174594 = parseInt(_0x2c14bf) - 0x1;
              if (_0x174594 < 0x0 || _0x174594 >= _0x3b3fc2.length) {
                return _0x338562.reply("𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗟𝗶𝗻𝗸.");
              }
              const {
                videos: _0x4e01ca
              } = await yts(_0x2c14bf);
              if (!_0x4e01ca || _0x4e01ca.length === 0x0) {
                return _0x338562.reply("No songs found!");
              }
              const _0x20a68f = _0x4e01ca[0x0].url;
              let _0x23b3a9 = await fetchJson('https://api.dreaded.site/api/ytdl/audio?url=' + _0x20a68f);
              if (!_0x23b3a9 || !_0x23b3a9.result || !_0x23b3a9.result.url) {
                return _0x338562.reply("Failed to fetch audio from the API.");
              }
              const _0x24fa1e = _0x23b3a9.result.url;
              const _0x131cf4 = _0x23b3a9.result.title;
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'audio': {
                  'url': _0x24fa1e
                },
                'mimetype': "audio/mpeg",
                'fileName': _0x131cf4 + '.mp3'
              }, {
                'quoted': _0x338562
              });
            } catch (_0x5a141f) {
              _0x338562.reply("Download failed\n" + _0x5a141f.message);
            }
          }
          break;
        case "ytmp4":
        case "ytv":
          {
            try {
              if (!_0x2c14bf) {
                return _0x338562.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 𝗹𝗶𝗻𝗸!");
              }
              let _0x1fb728 = _0x2c14bf.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
              if (!_0x1fb728) {
                return _0x338562.reply("𝗧𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 𝗹𝗶𝗻𝗸");
              }
              let _0x3737f9 = parseInt(_0x2c14bf) - 0x1;
              if (_0x3737f9 < 0x0 || _0x3737f9 >= _0x1fb728.length) {
                return _0x338562.reply("𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗹𝗶𝗻𝗸.");
              }
              const {
                videos: _0x44f52a
              } = await yts(_0x2c14bf);
              if (!_0x44f52a || _0x44f52a.length === 0x0) {
                return _0x338562.reply("No songs found!");
              }
              const _0x4fd6e6 = _0x44f52a[0x0].url;
              let _0x51e47e = await fetchJson('https://api.dreaded.site/api/ytdl/video?url=' + _0x4fd6e6);
              if (!_0x51e47e || !_0x51e47e.result || !_0x51e47e.result.url) {
                return _0x338562.reply("Failed to fetch video from the API.");
              }
              const _0x8a44ab = _0x51e47e.result.url;
              const _0x2bf14f = _0x51e47e.result.title;
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'video': {
                  'url': _0x8a44ab
                },
                'mimetype': "video/mpeg",
                'fileName': _0x2bf14f + ".mp4"
              }, {
                'quoted': _0x338562
              });
            } catch (_0x1458b7) {
              _0x338562.reply("Download failed\n" + _0x1458b7.message);
            }
          }
          break;
        case "ping":
        case 'speed':
          {
            await _0x5ca91f();
            _0x338562.reply("𝗣𝗼𝗻𝗴\n " + _0x44c1ca.toFixed(0x4) + " 𝗠𝘀");
          }
          break;
        case "uptime":
          {
            _0x338562.reply('' + runtime(process.uptime()));
          }
          break;
        case 'runtime':
          let _0x2b4ee7 = "𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗿𝘂𝗻𝗻𝗶𝗻𝗴 𝘀𝗶𝗻𝗰𝗲 " + runtime(process.uptime());
          _0x38a88a.sendMessage(_0x338562.chat, {
            'text': _0x2b4ee7,
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
            'quoted': _0x338562
          });
          break;
        case "apk":
        case "app":
          {
            if (!_0x2c14bf) {
              return _0x91a68a("Where is the app name?");
            }
            let _0x2185c6 = await fetchJson("https://bk9.fun/search/apk?q=" + _0x2c14bf);
            let _0x2b202d = await fetchJson('https://bk9.fun/download/apk?id=' + _0x2185c6.BK9[0x0].id);
            await _0x38a88a.sendMessage(_0x338562.chat, {
              'document': {
                'url': _0x2b202d.BK9.dllink
              },
              'fileName': _0x2b202d.BK9.name,
              'mimetype': "application/vnd.android.package-archive",
              'contextInfo': {
                'externalAdReply': {
                  'title': 'VINIZIAZ-XMD',
                  'body': '' + _0x2b202d.BK9.name,
                  'thumbnailUrl': '' + _0x2b202d.BK9.icon,
                  'sourceUrl': '' + _0x2b202d.BK9.dllink,
                  'mediaType': 0x2,
                  'showAdAttribution': true,
                  'renderLargerThumbnail': false
                }
              }
            }, {
              'quoted': _0x338562
            });
          }
          break;
        case 'mix':
          {
            const {
              Sticker: _0x4ddc9d,
              createSticker: _0x117a3c,
              StickerTypes: _0x2786c5
            } = require("wa-sticker-formatter");
            if (!_0x2c14bf) {
              return _0x338562.reply("No emojis provided ? ");
            }
            const _0x1c1e88 = _0x2c14bf.split('+');
            if (_0x1c1e88.length !== 0x2) {
              _0x338562.reply("Specify the emojis and separate with '+'");
              return;
            }
            const _0x3a740b = _0x1c1e88[0x0].trim();
            const _0x328d53 = _0x1c1e88[0x1].trim();
            try {
              const _0x5aae5b = require('axios');
              const _0x3ef22c = await _0x5aae5b.get('https://levanter.onrender.com/emix?q=' + _0x3a740b + _0x328d53);
              if (_0x3ef22c.data.status === true) {
                let _0x2cab36 = new _0x4ddc9d(_0x3ef22c.data.result, {
                  'pack': botname,
                  'type': _0x2786c5.CROPPED,
                  'categories': ['🤩', '🎉'],
                  'id': "12345",
                  'quality': 0x46,
                  'background': "transparent"
                });
                const _0x49f32b = await _0x2cab36.toBuffer();
                _0x38a88a.sendMessage(_0x338562.chat, {
                  'sticker': _0x49f32b
                }, {
                  'quoted': _0x338562
                });
              } else {
                _0x338562.reply("Unable to create emoji mix.");
              }
            } catch (_0xcb0247) {
              _0x338562.reply("An error occurred while creating the emoji mix." + _0xcb0247);
            }
          }
          break;
        case 'lyrics':
          {
            const _0x305608 = require('node-fetch');
            const _0x1b47f6 = "https://api.dreaded.site/api/lyrics?title=" + encodeURIComponent(_0x2c14bf);
            try {
              if (!_0x2c14bf) {
                return _0x338562.reply("Provide a song name!");
              }
              const _0x1fcbd7 = await fetchJson(_0x1b47f6);
              if (!_0x1fcbd7.success || !_0x1fcbd7.result || !_0x1fcbd7.result.lyrics) {
                return _0x338562.reply("Sorry, I couldn't find any lyrics for \"" + _0x2c14bf + "\".");
              }
              const {
                title: _0x6bd6a,
                artist: _0x110881,
                link: _0x4af152,
                thumb: _0x4ed694,
                lyrics: _0x178512
              } = _0x1fcbd7.result;
              const _0x57f30c = _0x4ed694 || "https://i.imgur.com/Cgte666.jpeg";
              const _0x1a6c2a = await _0x305608(_0x57f30c).then(_0x4ee9c6 => _0x4ee9c6.buffer())["catch"](_0x3fc083 => {
                console.error("Error fetching image:", _0x3fc083);
                return null;
              });
              if (!_0x1a6c2a) {
                return _0x338562.reply("An error occurred while fetching the image.");
              }
              const _0x164ddb = "**Title**: " + _0x6bd6a + "\n**Artist**: " + _0x110881 + "\n\n" + _0x178512;
              await _0x38a88a.sendMessage(_0x338562.chat, {
                'image': _0x1a6c2a,
                'caption': _0x164ddb
              }, {
                'quoted': _0x338562
              });
            } catch (_0x264f8c) {
              console.error(_0x264f8c);
              _0x338562.reply("An error occurred while fetching the lyrics for \"" + _0x2c14bf + "\".");
            }
          }
          break;
        case 'toimage':
        case 'photo':
          {
            if (!_0x2fea9f) {
              throw "Tag a static video with the command!";
            }
            if (!/webp/.test(_0x129ae5)) {
              throw "Tag a sticker with " + (prefix + _0x4cc17f);
            }
            let _0x1be842 = await _0x38a88a.downloadAndSaveMediaMessage(_0x2fea9f);
            let _0x2fc884 = await getRandom(".png");
            exec("ffmpeg -i " + _0x1be842 + " " + _0x2fc884, _0x180c6d => {
              fs.unlinkSync(_0x1be842);
              if (_0x180c6d) {
                throw _0x180c6d;
              }
              let _0x5108ac = fs.readFileSync(_0x2fc884);
              _0x38a88a.sendMessage(_0x338562.chat, {
                'image': _0x5108ac,
                'caption': "𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗲𝗱 𝗯𝘆 𝗩𝗶𝗻𝗶𝘇𝗶𝗮𝘇-𝗫𝗺𝗱"
              }, {
                'quoted': _0x338562
              });
              fs.unlinkSync(_0x2fc884);
            });
          }
          break;
        case "movie":
          if (!_0x2c14bf) {
            return _0x91a68a("Provide a series or movie name.");
          }
          let _0x351264 = await axios.get("http://www.omdbapi.com/?apikey=742b2d09&t=" + _0x2c14bf + '&plot=full');
          let _0x18d661 = '';
          console.log(_0x351264.data);
          _0x18d661 += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n ``` IMDB MOVIE SEARCH```\n⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";
          _0x18d661 += "🎬Title      : " + _0x351264.data.Title + "\n";
          _0x18d661 += "📅Year       : " + _0x351264.data.Year + "\n";
          _0x18d661 += "⭐Rated      : " + _0x351264.data.Rated + "\n";
          _0x18d661 += "📆Released   : " + _0x351264.data.Released + "\n";
          _0x18d661 += "⏳Runtime    : " + _0x351264.data.Runtime + "\n";
          _0x18d661 += "🌀Genre      : " + _0x351264.data.Genre + "\n";
          _0x18d661 += "👨🏻‍💻Director   : " + _0x351264.data.Director + "\n";
          _0x18d661 += "✍Writer     : " + _0x351264.data.Writer + "\n";
          _0x18d661 += "👨Actors     : " + _0x351264.data.Actors + "\n";
          _0x18d661 += "📃Plot       : " + _0x351264.data.Plot + "\n";
          _0x18d661 += "🌐Language   : " + _0x351264.data.Language + "\n";
          _0x18d661 += "🌍Country    : " + _0x351264.data.Country + "\n";
          _0x18d661 += "🎖️Awards     : " + _0x351264.data.Awards + "\n";
          _0x18d661 += "📦BoxOffice  : " + _0x351264.data.BoxOffice + "\n";
          _0x18d661 += "🏙️Production : " + _0x351264.data.Production + "\n";
          _0x18d661 += "🌟imdbRating : " + _0x351264.data.imdbRating + "\n";
          _0x18d661 += "❎imdbVotes  : " + _0x351264.data.imdbVotes + '';
          _0x38a88a.sendMessage(_0x4b480f, {
            'image': {
              'url': _0x351264.data.Poster
            },
            'caption': _0x18d661
          }, {
            'quoted': _0x338562
          });
          break;
        case "linkgroup":
        case 'link':
          {
            if (!_0x338562.isGroup) {
              throw group;
            }
            if (!_0x2437eb) {
              throw botAdmin;
            }
            let _0x276576 = await _0x38a88a.groupInviteCode(_0x338562.chat);
            _0x38a88a.sendText(_0x338562.chat, "https://chat.whatsapp.com/" + _0x276576 + "\n\nGroup link for  " + _0x552411.subject, _0x338562, {
              'detectLink': true
            });
          }
          break;
        case "botpp":
          {
            if (!_0x25caea) {
              throw NotOwner;
            }
            if (!_0x2fea9f) {
              throw "Tag an image you want to be the bot's profile picture with " + (prefix + _0x4cc17f);
            }
            if (!/image/.test(_0x129ae5)) {
              throw "Tag an image you want to be the bot's profile picture with " + (prefix + _0x4cc17f);
            }
            if (/webp/.test(_0x129ae5)) {
              throw "Tag an image you want to be the bot's profile picture with " + (prefix + _0x4cc17f);
            }
            let _0x3468aa = await _0x38a88a.downloadAndSaveMediaMessage(_0x2fea9f);
            await _0x38a88a.updateProfilePicture(_0x1c9a44, {
              'url': _0x3468aa
            })["catch"](_0x32ebf3 => fs.unlinkSync(_0x3468aa));
            _0x91a68a`Bot's profile picture has been successfully updated!`;
          }
          break;
        case 'broadcast':
          {
            if (!_0x25caea) {
              throw NotOwner;
              return;
            }
            if (!_0x2c14bf) {
              _0x91a68a("❌ No broadcast message provided!");
              return;
            }
            let _0x172ad5 = await _0x38a88a.groupFetchAllParticipating();
            let _0x37ac6c = Object.entries(_0x172ad5).slice(0x0).map(_0x53ed04 => _0x53ed04[0x1]);
            let _0x1b3a1e = _0x37ac6c.map(_0x1581f3 => _0x1581f3.id);
            _0x91a68a(" Broadcasting in " + _0x1b3a1e.length + " Group Chat, in " + _0x1b3a1e.length * 1.5 + " seconds");
            for (let _0x26319c of _0x1b3a1e) {
              let _0xe56955 = "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗕𝗥𝗢𝗔𝗗𝗖𝗔𝗦𝗧 >\n\n🀄 Message: " + _0x2c14bf + "\n\nAuthor: " + _0x3d3499;
              await _0x38a88a.sendMessage(_0x26319c, {
                'image': {
                  'url': 'https://i.imgur.com/HP6GyiD.jpeg'
                },
                'caption': '' + _0xe56955
              });
            }
            _0x91a68a("Broadcasted to " + _0x1b3a1e.length + " Groups.");
          }
          break;
        case 'gemini':
          {
            try {
              if (!_0x2c14bf) {
                return _0x338562.reply("This is Viniziaz, an AI using Gemini APIs to process text, provide yr query");
              }
              const {
                default: _0x2690c4
              } = await import("gemini-ai");
              const _0x5a8f31 = new _0x2690c4('AIzaSyDJUtskTG-MvQdlT4tNE319zBqLMFei8nQ');
              const _0x518b76 = _0x5a8f31.createChat();
              const _0x1608d6 = await _0x518b76.ask(_0x2c14bf);
              await _0x338562.reply(_0x1608d6);
            } catch (_0xfd3202) {
              _0x338562.reply("I am unable to generate responses\n\n" + _0xfd3202);
            }
          }
          break;
        case "setvar":
          if (!_0x25caea) {
            throw NotOwner;
          }
          if (!_0x2c14bf.split('=')[0x1]) {
            return _0x91a68a("Incorrect Usage:\nProvide the key and value correctly\nExample: setvar AUTOVIEW_STATUS=TRUE");
          }
          const _0x5c8e00 = new _0x3d43ce({
            'token': herokuapi
          });
          let _0x44d46b = "/apps/" + appname;
          await _0x5c8e00.patch(_0x44d46b + '/config-vars', {
            'body': {
              [_0x2c14bf.split('=')[0x0]]: _0x2c14bf.split('=')[0x1]
            }
          });
          await _0x91a68a("✅ The variable " + _0x2c14bf.split('=')[0x0] + " = " + _0x2c14bf.split('=')[0x1] + " has been set Successfuly.\nWait 20s for changes to effect!");
          break;
        case "dlt":
        case "dil":
          {
            if (!_0x338562.quoted) {
              throw "No message quoted for deletion";
            }
            let {
              chat: _0x3e1224,
              fromMe: _0x669c49,
              id: _0x4f3c15,
              isBaileys: _0x5b9ccf
            } = _0x338562.quoted;
            if (_0x5b9ccf) {
              throw "I cannot delete. Quoted message is my message or another bot message.";
            }
            _0x38a88a.sendMessage(_0x338562.chat, {
              'delete': {
                'remoteJid': _0x338562.chat,
                'fromMe': true,
                'id': _0x338562.quoted.id,
                'participant': _0x338562.quoted.sender
              }
            });
          }
          break;
        case 'block':
          {
            if (!_0x25caea) {
              throw NotOwner;
            }
            if (!_0x338562.quoted) {
              throw "𝗧𝗮𝗴 𝘀𝗼𝗺𝗲𝗼𝗻𝗲!";
            }
            let _0x36b33c = _0x338562.mentionedJid[0x0] ? _0x338562.mentionedJid[0x0] : _0x338562.quoted ? _0x338562.quoted.sender : _0x2c14bf.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
            if (_0x36b33c == '254759925133@s.whatsapp.net') {
              return _0x338562.reply("𝗜 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗹𝗼𝗰𝗸 𝗺𝘆 𝗢𝘄𝗻𝗲𝗿 😡");
            }
            if (_0x36b33c == _0x38a88a.decodeJid(_0x38a88a.user.id)) {
              throw "𝗜 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗹𝗼𝗰𝗸 𝗺𝘆𝘀𝗲𝗹𝗳 𝗶𝗱𝗶𝗼𝘁 😡";
            }
            await _0x38a88a.updateBlockStatus(_0x36b33c, "block");
            _0x338562.reply("𝗕𝗹𝗼𝗰𝗸𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆!");
          }
          break;
        case "unblock":
          {
            if (!_0x25caea) {
              throw NotOwner;
            }
            if (!_0x338562.quoted) {
              throw "𝗧𝗮𝗴 𝘀𝗼𝗺𝗲𝗼𝗻𝗲!";
            }
            let _0xe10b97 = _0x338562.mentionedJid[0x0] ? _0x338562.mentionedJid[0x0] : _0x338562.quoted ? _0x338562.quoted.sender : _0x2c14bf.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
            await _0x38a88a.updateBlockStatus(_0xe10b97, 'unblock');
            _0x338562.reply("𝗨𝗻𝗯𝗹𝗼𝗰𝗸𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆✅!");
          }
          break;
        case "join":
          {
            if (!_0x25caea) {
              throw NotOwner;
            }
            if (!_0x2c14bf) {
              return _0x91a68a("provide a valid group link");
            }
            let _0x1438da = _0x5eadbb[0x0].split('https://chat.whatsapp.com/')[0x1];
            await _0x38a88a.groupAcceptInvite(_0x1438da).then(_0x48a8fb => _0x91a68a(jsonformat(_0x48a8fb)))['catch'](_0x2931aa => _0x91a68a("Link has problem."));
          }
          break;
        case "enc":
        case 'encrypte':
          {
            const _0x4aa296 = require("javascript-obfuscator");
            if (_0x338562.quoted && _0x338562.quoted.text) {
              const _0x86ebd = _0x338562.quoted.text;
              const _0x33b445 = _0x4aa296.obfuscate(_0x86ebd, {
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
              _0x338562.reply(_0x33b445.getObfuscatedCode());
            } else {
              _0x338562.reply("Quote/Tag a valid JavaScript code to encrypt!");
            }
          }
          break;
        case "gpt3":
          {
            if (!_0x2c14bf) {
              return _0x91a68a("Hello there, How can i help you?");
            }
            let _0x28c31c = await fetchJson("https://bk9.fun/ai/blackbox?q=" + _0x2c14bf);
            if (!_0x28c31c.BK9) {
              return _0x91a68a("An error occurred while fetching the AI chatbot response. Please try again later.");
            } else {
              _0x91a68a(_0x28c31c.BK9);
            }
          }
          break;
        case "gcprofile":
          {
            function _0x42a74d(_0x2930ec) {
              const _0x58dd42 = new Date(_0x2930ec * 0x3e8);
              const _0x4c2f91 = ["Sunday", "Monday", "Tuesday", 'Wednesday', "Thursday", 'Friday', "Saturday"];
              return {
                'date': _0x58dd42.getDate(),
                'month': new Intl.DateTimeFormat("en-US", {
                  'month': "long"
                }).format(_0x58dd42),
                'year': _0x58dd42.getFullYear(),
                'day': _0x4c2f91[_0x58dd42.getUTCDay()],
                'time': _0x58dd42.getUTCHours() + ':' + _0x58dd42.getUTCMinutes() + ':' + _0x58dd42.getUTCSeconds()
              };
            }
            if (!_0x338562.isGroup) {
              return _0x338562.reply("This command is meant for groups");
            }
            let _0x10e005 = await _0x38a88a.groupMetadata(_0x338562.chat);
            let _0x2639db = await _0x42a74d(_0x10e005.creation);
            try {
              pp = await _0x38a88a.profilePictureUrl(chat, "image");
            } catch {
              pp = 'https://i.imgur.com/HP6GyiD.jpeg';
            }
            await _0x38a88a.sendMessage(_0x338562.chat, {
              'image': {
                'url': pp
              },
              'caption': "_Name_ : *" + _0x10e005.subject + "*\n\n_ID_ : *" + _0x10e005.id + "*\n\n_Group owner_ : " + ('@' + _0x10e005.owner.split('@')[0x0]) + " || 'No Creator'\n\n_Group created_ : *" + _0x2639db.day + ", " + _0x2639db.date + " " + _0x2639db.month + " " + _0x2639db.year + ", " + _0x2639db.time + "*\n\n_Participants_ : *" + _0x10e005.size + "*\n_Members_ : *" + _0x10e005.participants.filter(_0x43c834 => _0x43c834.admin == null).length + "*\n\n_Admins_ : *" + Number(_0x10e005.participants.length - _0x10e005.participants.filter(_0x59aa23 => _0x59aa23.admin == null).length) + "*\n\n_Who can send message_ : *" + (_0x10e005.announce == true ? "Admins" : "Everyone") + "*\n\n_Who can edit group info_ : *" + (_0x10e005.restrict == true ? "Admins" : "Everyone") + "*\n\n_Who can add participants_ : *" + (_0x10e005.memberAddMode == true ? 'Everyone' : "Admins") + '*'
            }, {
              'quoted': _0x338562
            });
          }
          break;
        case "tovideo":
        case "mp4":
        case "tovid":
          {
            if (!_0x2fea9f) {
              return _0x91a68a("Reply to Sticker");
            }
            if (!/webp/.test(_0x129ae5)) {
              return _0x91a68a("reply sticker with caption *" + (prefix + _0x4cc17f) + '*');
            }
            let _0x269d04 = await fetch('https://bk9.fun/converter/webpToMp4?url=' + _0x2fea9f);
            let _0x51ab8c = await _0x38a88a.downloadAndSaveMediaMessage(_0x2fea9f);
            let _0x3a354a = await _0x269d04(_0x51ab8c);
            await _0x38a88a.sendMessage(_0x338562.chat, {
              'video': {
                'url': _0x3a354a.result,
                'caption': "Convert Webp To Video"
              }
            }, {
              'quoted': _0x338562
            });
            await fs.unlinkSync(_0x51ab8c);
          }
          break;
        default:
          {
            if (_0x2dea82 && _0x4867f8.toLowerCase() != undefined) {
              if (_0x338562.chat.endsWith("broadcast")) {
                return;
              }
              if (_0x338562.isBaileys) {
                return;
              }
              if (!_0x4867f8.toLowerCase()) {
                return;
              }
              if (_0x4bf303 || _0x2dea82 && !_0x338562.isGroup) {
                console.log(chalk.black(chalk.bgRed("[ ERROR ]")), !_0x2437(0x417) ? chalk.green(_0x2437(0x353)) : chalk.keyword("turquoise")("command"), !_0x2437(0x417) ? chalk.green('' + prefix + _0x4cc17f) : chalk.keyword("turquoise")('' + prefix + _0x4cc17f), !_0x2437(0x417) ? chalk.green('Viniziaz') : chalk.keyword("turquoise")('Viniziaz'));
              } else if (_0x4bf303 || _0x2dea82 && _0x338562.isGroup) {
                console.log(chalk.black(chalk.bgRed("[ ERROR ]")), !_0x2437(0x417) ? chalk.green(_0x2437(0x353)) : chalk.keyword("turquoise")("command"), !_0x2437(0x417) ? chalk.green('' + prefix + _0x4cc17f) : chalk.keyword("turquoise")('' + prefix + _0x4cc17f), chalk.keyword('turquoise')("Viniziaz"));
              }
            }
          }
      }
    }
  } catch (_0x3d74c3) {
    _0x338562.reply(util.format(_0x3d74c3));
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});

/* No idea 😔 😔 */
