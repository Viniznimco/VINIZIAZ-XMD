//ENJOY
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
global.axios = require("axios")['default'];
const chalk = require("chalk");
const speed = require('performance-now');
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
const ytdl = require('ytdl-core');
const Client = new Genius.Client('TUoAEhL79JJyU-MpOsBDkFhJFWFH28nv6dgVgPA-9R1YRwLNP_zicdX2omG2qKE8gYLJat5F5VSBNLfdnlpfJg');
const {
  TelegraPh,
  UploadFileUgu,
  webp2mp4File,
  floNime
} = require("./lib/viniziazupload");
const {
  Configuration,
  OpenAI
} = require('openai');
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
module.exports = viniziaz = async (_0x5bd614, _0x3a96c2, _0x3b85b3, _0xe52c2) => {
  try {
    var _0x266791 = _0x3a96c2.mtype === "conversation" ? _0x3a96c2.message.conversation : _0x3a96c2.mtype == 'imageMessage' ? _0x3a96c2.message.imageMessage.caption : _0x3a96c2.mtype == 'videoMessage' ? _0x3a96c2.message.videoMessage.caption : _0x3a96c2.mtype == 'extendedTextMessage' ? _0x3a96c2.message.extendedTextMessage.text : _0x3a96c2.mtype == "buttonsResponseMessage" ? _0x3a96c2.message.buttonsResponseMessage.selectedButtonId : _0x3a96c2.mtype == "listResponseMessage" ? _0x3a96c2.message.listResponseMessage.singleSelectReply.selectedRowId : _0x3a96c2.mtype == "templateButtonReplyMessage" ? _0x3a96c2.message.templateButtonReplyMessage.selectedId : _0x3a96c2.mtype === "messageContextInfo" ? _0x3a96c2.message.buttonsResponseMessage?.["selectedButtonId"] || _0x3a96c2.message.listResponseMessage?.["singleSelectReply"]["selectedRowId"] || _0x3a96c2.text : '';
    var _0x1771c8 = typeof _0x3a96c2.text == 'string' ? _0x3a96c2.text : '';
    var _0x35c5cd = _0x3a96c2.message.extendedTextMessage?.["contextInfo"]?.['quotedMessage'];
    const _0xf1b21f = require("heroku-client");
    const _0x3b7157 = _0x266791.replace(prefix, '').trim().split(/ +/).shift().toLowerCase();
    const _0x55ac16 = _0x266791.trim().split(/ +/).slice(0x1);
    const _0x123049 = _0x3a96c2.pushName || "No Name";
    const _0x1b238d = await _0x5bd614.decodeJid(_0x5bd614.user.id);
    const _0x51899b = !!(_0x3a96c2.sender == _0x1b238d);
    let _0x53b418 = q = _0x55ac16.join(" ");
    _0x3a96c2.isBaileys = _0x3a96c2.id.startsWith("BAE5") && _0x3a96c2.id.length === 0x10;
    const _0x1d3785 = _0x3a96c2.chat;
    const _0x262d94 = _0x3a96c2.reply;
    const _0x18edd4 = _0x3a96c2.sender;
    const _0x2274cb = _0x3b85b3.messages[0x0];
    const _0x4eabbb = _0x44d00a => {
      let _0xfe39a5 = [];
      for (let _0x3b8b55 of _0x44d00a) {
        if (_0x3b8b55.admin === "superadmin") {
          _0xfe39a5.push(_0x3b8b55.id);
        } else if (_0x3b8b55.admin === "admin") {
          _0xfe39a5.push(_0x3b8b55.id);
        } else {
          '';
        }
      }
      return _0xfe39a5 || [];
    };
    const _0x4937b3 = _0x3a96c2.quoted || _0x3a96c2;
    const _0x34bd9a = _0x4937b3.mtype == "buttonsMessage" ? _0x4937b3[Object.keys(_0x4937b3)[0x1]] : _0x4937b3.mtype == "templateMessage" ? _0x4937b3.hydratedTemplate[Object.keys(_0x4937b3.hydratedTemplate)[0x1]] : _0x4937b3.mtype == 'product' ? _0x4937b3[Object.keys(_0x4937b3)[0x0]] : _0x3a96c2.quoted ? _0x3a96c2.quoted : _0x3a96c2;
    const _0x231894 = (_0x34bd9a.msg || _0x34bd9a).mimetype || '';
    const _0x1732f1 = _0x34bd9a.msg || _0x34bd9a;
    const _0xb1de4f = _0x266791.startsWith(prefix);
    const _0x34ffbf = bad.split(',');
    const _0x59cf5d = DevViniziaz.map(_0x1ba645 => _0x1ba645.replace(/[^0-9]/g, '') + "@s.whatsapp.net").includes(_0x3a96c2.sender);
    const _0x3d9849 = _0x3a96c2.isGroup ? await _0x5bd614.groupMetadata(_0x3a96c2.chat)['catch'](_0x1253fc => {}) : '';
    const _0x28c69e = _0x3a96c2.isGroup && _0x3d9849 ? await _0x3d9849.subject : '';
    const _0x4636d8 = _0x3a96c2.isGroup && _0x3d9849 ? await _0x3d9849.participants : '';
    const _0x5a1117 = _0x3a96c2.isGroup ? await _0x4eabbb(_0x4636d8) : '';
    const _0x28b9b0 = _0x3a96c2.isGroup ? _0x5a1117.includes(_0x1b238d) : false;
    const _0x56d74d = _0x3a96c2.isGroup ? _0x5a1117.includes(_0x3a96c2.sender) : false;
    const _0x562cbf = "254704009677".split(',');
    const _0x57c0b4 = new Date();
    const _0x41c372 = speed();
    const _0x54a229 = speed() - _0x41c372;
    if (!fs.existsSync("message_data")) {
      fs.mkdirSync("message_data");
    }
    function _0x413154(_0xa920fb, _0x83b68a) {
      const _0x58ecff = path.join("message_data", _0xa920fb, _0x83b68a + ".json");
      try {
        const _0x1726f0 = fs.readFileSync(_0x58ecff, "utf8");
        return JSON.parse(_0x1726f0) || [];
      } catch (_0x34fde4) {
        return [];
      }
    }
    function _0x2339e8(_0x5322ba, _0x150025, _0x3457b3) {
      const _0x1e8e89 = path.join("message_data", _0x5322ba);
      if (!fs.existsSync(_0x1e8e89)) {
        fs.mkdirSync(_0x1e8e89, {
          'recursive': true
        });
      }
      const _0x31d423 = path.join(_0x1e8e89, _0x150025 + ".json");
      try {
        fs.writeFileSync(_0x31d423, JSON.stringify(_0x3457b3, null, 0x2));
      } catch (_0x436329) {
        console.error("Error saving chat data:", _0x436329);
      }
    }
    function _0x5415bc(_0x1470bf) {
      const _0x4e09c0 = _0x1470bf.key.remoteJid;
      const _0x373974 = _0x1470bf.key.id;
      const _0x26564e = _0x413154(_0x4e09c0, _0x373974);
      _0x26564e.push(_0x1470bf);
      _0x2339e8(_0x4e09c0, _0x373974, _0x26564e);
    }
    async function _0x61ad13(_0x3a8290, _0x45fe07) {
      const _0x2e4dcd = _0x45fe07.key.remoteJid;
      const _0x23e967 = _0x45fe07.message.protocolMessage.key.id;
      const _0x5b9ade = _0x413154(_0x2e4dcd, _0x23e967);
      const _0x3bfb22 = _0x5b9ade[0x0];
      if (_0x3bfb22) {
        const _0x21092c = _0x45fe07.participant || _0x45fe07.key.participant || _0x45fe07.key.remoteJid;
        const _0x1fe7a2 = _0x3bfb22.key.participant || _0x3bfb22.key.remoteJid;
        const _0x53265e = '@' + _0x21092c.split('@')[0x0];
        if (_0x21092c.includes(_0x3a8290.user.id) || _0x1fe7a2.includes(_0x3a8290.user.id)) {
          return;
        }
        let _0x2b95ce = "░𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗔𝗡𝗧𝗜𝗗𝗘𝗟𝗘𝗧𝗘 𝗥𝗘𝗣𝗢𝗥𝗧░\n\n" + (" 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗯𝘆: " + _0x53265e + "\n\n");
        if (_0x3bfb22.message?.["conversation"]) {
          const _0x57cf83 = _0x3bfb22.message.conversation;
          _0x2b95ce += " 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗠𝗲𝘀𝘀𝗮𝗴𝗲: " + _0x57cf83;
          await _0x3a8290.sendMessage(_0x3a8290.user.id, {
            'text': _0x2b95ce
          }, {
            'quoted': _0x3a96c2
          });
        } else {
          if (_0x3bfb22.message?.['extendedTextMessage']) {
            const _0x23775b = _0x3bfb22.message.extendedTextMessage.text;
            _0x2b95ce += " 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗖𝗼𝗻𝘁𝗲𝗻𝘁: " + _0x23775b;
            await _0x3a8290.sendMessage(_0x3a8290.user.id, {
              'text': _0x2b95ce
            }, {
              'quoted': _0x3a96c2
            });
          }
        }
      }
    }
    let _0x43805a = _0x1771c8.length > 0x1e ? q.substring(0x0, 0x1e) + '...' : _0x1771c8;
    const _0x56c382 = _0x2274cb.key.remoteJid;
    if (wapresence === "online") {
      _0x5bd614.sendPresenceUpdate("available", _0x56c382);
    } else {
      if (wapresence === 'typing') {
        _0x5bd614.sendPresenceUpdate('composing', _0x56c382);
      } else if (wapresence === "recording") {
        _0x5bd614.sendPresenceUpdate("recording", _0x56c382);
      } else {
        _0x5bd614.sendPresenceUpdate('unavailable', _0x56c382);
      }
    }
    if (_0xb1de4f && mode === "PRIVATE" && !_0x51899b && !_0x59cf5d && _0x3a96c2.sender !== dev) {
      return;
    }
    if (autoread === "TRUE" && !_0x3a96c2.isGroup) {
      _0x5bd614.readMessages([_0x3a96c2.key]);
    }
    if (_0x51899b && _0x2274cb.key.id.startsWith("BAE5") && _0x2274cb.key.id.length === 0x10 && !_0x3a96c2.isGroup) {
      return;
    }
    if (antidel === 'TRUE') {
      if (_0x2274cb.message?.["protocolMessage"]?.["key"]) {
        await _0x61ad13(_0x5bd614, _0x2274cb);
      } else {
        _0x5415bc(_0x2274cb);
      }
    }
    _0x5bd614.sendContact = async (_0x182c63, _0x2bd357, _0x49144a = '', _0x5d7bfa = {}) => {
      let _0x571d5d = [];
      for (let _0x8f05d1 of _0x2bd357) {
        _0x571d5d.push({
          'displayName': "VINIZIAZ DEV",
          'vcard': "BEGIN:VCARD\nVERSION:3.0\nN: RAVINIZIAZ DEV\nFN:VINIZIAZ DEV\nitem1.TEL;waid=" + _0x8f05d1 + ':' + _0x8f05d1 + "\nitem1.X-ABLabel:Number\nitem2.EMAIL;type=INTERNET:dicksonnicky50@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/nick_hunter9\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Kenya;;;;\nitem4.X-ABLabel:Region\nEND:VCARD"
        });
      }
      _0x5bd614.sendMessage(_0x182c63, {
        'contacts': {
          'displayName': "VINIZIAZ DEV",
          'contacts': _0x571d5d
        },
        ..._0x5d7bfa
      }, {
        'quoted': _0x49144a
      });
    };
    if (antibot === "TRUE" && _0x2274cb.key.id.startsWith("BAE5") && _0x3a96c2.isGroup && !_0x56d74d && _0x28b9b0 && _0x2274cb.key.id.length === 16) {
      kidts = _0x3a96c2.sender;
      _0x5bd614.sendMessage(_0x3a96c2.chat, {
        'text': "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 antibot:\n\n@" + kidts.split('@')[0] + " has been identified as a bot. Removed by RAVEN to prevent unnecessary spam!",
        'contextInfo': {
          'mentionedJid': [kidts]
        }
      }, {
        'quoted': _0x3a96c2
      });
      await _0x5bd614.groupParticipantsUpdate(_0x3a96c2.chat, [kidts], "remove");
    }
    if (_0x1771c8.startsWith('>')) {
      if (!_0x59cf5d) {
        return _0x262d94("Only owner can evaluate bailey codes");
      }
      try {
        let _0x25a8b3 = await eval(_0x1771c8.slice(0x2));
        if (typeof _0x25a8b3 !== "string") {
          _0x25a8b3 = require("util").inspect(_0x25a8b3);
        }
        await _0x262d94(_0x25a8b3);
      } catch (_0x1846f5) {
        await _0x262d94(String(_0x1846f5));
      }
    }
    async function _0x2d5e0e() {}
    if (gptdm === "TRUE" && _0x3a96c2.chat.endsWith("@s.whatsapp.net")) {
      let _0x533e2f = await fetchJson('https://bk9.fun/ai/llama?q=' + _0x53b418);
      if (!_0x533e2f.BK9) {
        return _0x262d94("An error occurred while fetching the AI chatbot response. Please try again later.");
      } else {
        _0x262d94(_0x533e2f.BK9);
      }
    }
    if (antitag === 'TRUE' && !_0x59cf5d && _0x28b9b0 && !_0x56d74d && _0x3a96c2.mentionedJid && _0x3a96c2.mentionedJid.length > 0xa) {
      if (_0x51899b) {
        return;
      }
      const _0x922cfe = _0x3a96c2.sender;
      await _0x5bd614.sendMessage(_0x3a96c2.chat, {
        'text': '@' + _0x922cfe.split('@')[0x0] + ", Antitag is Active🔨",
        'contextInfo': {
          'mentionedJid': [_0x922cfe]
        }
      }, {
        'quoted': _0x3a96c2
      });
      await _0x5bd614.sendMessage(_0x3a96c2.chat, {
        'delete': {
          'remoteJid': _0x3a96c2.chat,
          'fromMe': false,
          'id': _0x3a96c2.key.id,
          'participant': _0x922cfe
        }
      });
      await _0x5bd614.groupParticipantsUpdate(_0x3a96c2.chat, [_0x922cfe], "remove");
    }
    async function _0x12b47e() {
      var _0x28434d = ['𝗩', '𝗩𝗜', "𝗩𝗜𝗡", "𝗩𝗜𝗡", '𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭', '𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-', "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖𝗢", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖𝗢𝗠", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖𝗢𝗠𝗣", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖𝗢𝗠𝗣𝗟", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖𝗢𝗠𝗣𝗟𝗘", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖𝗢𝗠𝗣𝗟𝗘𝗧", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗘", "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗘𝗗"];
      let {
        key: _0x2d731c
      } = await _0x5bd614.sendMessage(_0x1d3785, {
        'text': "𝐏𝐢𝐧𝐠𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐧𝐠"
      });
      for (let _0x207422 = 0x0; _0x207422 < _0x28434d.length; _0x207422++) {
        await _0x5bd614.sendMessage(_0x1d3785, {
          'text': _0x28434d[_0x207422],
          'edit': _0x2d731c
        });
      }
    }
    const _0x30d361 = () => {
      const _0x5f0ab7 = DateTime.now().setZone('Africa/Nairobi').hour;
      if (_0x5f0ab7 >= 0x5 && _0x5f0ab7 < 0xc) {
        return "𝗚𝗼𝗼𝗱 𝗠𝗼𝗿𝗻𝗶𝗻𝗴 🌅";
      } else {
        if (_0x5f0ab7 >= 0xc && _0x5f0ab7 < 0x10) {
          return "𝗚𝗼𝗼𝗱 𝗔𝗳𝘁𝗲𝗿𝗻𝗼𝗼𝗻 ☀️";
        } else {
          return _0x5f0ab7 >= 0x10 && _0x5f0ab7 < 0x14 ? "𝗚𝗼𝗼𝗱 𝗘𝘃𝗲𝗻𝗶𝗻𝗴 🌇" : "𝗚𝗼𝗼𝗱 𝗡𝗶𝗴𝗵𝘁 😴";
        }
      }
    };
    if (badwordkick === "TRUE" && _0x28b9b0 && !_0x56d74d && _0x266791 && new RegExp("\\b" + _0x34ffbf.join("\\b|\\b") + "\\b").test(_0x266791.toLowerCase())) {
      _0x5bd614.groupParticipantsUpdate(_0x1d3785, [_0x18edd4], "remove");
      _0x262d94("Hey niggah.\n\nMy owner hates usage of bad words in my presence!");
    }
    if (antilink === 'TRUE' && _0x266791.includes('chat.whatsapp.com') && !_0x59cf5d && _0x28b9b0 && !_0x56d74d && _0x3a96c2.isGroup) {
      kid = _0x3a96c2.sender;
      _0x5bd614.sendMessage(_0x3a96c2.chat, {
        'delete': {
          'remoteJid': _0x3a96c2.chat,
          'fromMe': false,
          'id': _0x3a96c2.key.id,
          'participant': kid
        }
      }).then(() => _0x5bd614.groupParticipantsUpdate(_0x3a96c2.chat, [kid], "remove"));
      _0x5bd614.sendMessage(_0x3a96c2.chat, {
        'text': "𝑯𝒆𝒚 𝑆ℎ𝑖𝑡𝑦 𝑏𝑢𝑙𝑙𝑠ℎ𝑖𝑡 @" + kid.split('@')[0x0] + "👋\n\n𝒔𝒆𝒏𝒅𝒊𝒏𝒈 𝒍𝒊𝒏𝒌𝒔 𝒊𝒔 𝒑𝒓𝒐𝒉𝒊𝒃𝒊𝒕𝒆𝒅 𝒊𝒏 𝒕𝒉𝒊𝒔 𝒈𝒓𝒐𝒖𝒑 𝒃𝒚 𝑽𝑰𝑵𝑰𝒁𝑰𝑨𝒁-𝑿𝑴𝑫!",
        'contextInfo': {
          'mentionedJid': [kid]
        }
      }, {
        'quoted': _0x3a96c2
      });
    }
    if (antilinkall === "TRUE" && _0x266791.includes("https://") && !_0x59cf5d && _0x28b9b0 && !_0x56d74d && _0x3a96c2.isGroup) {
      ki = _0x3a96c2.sender;
      _0x5bd614.sendMessage(_0x3a96c2.chat, {
        'delete': {
          'remoteJid': _0x3a96c2.chat,
          'fromMe': false,
          'id': _0x3a96c2.key.id,
          'participant': ki
        }
      }).then(() => _0x5bd614.groupParticipantsUpdate(_0x3a96c2.chat, [ki], "remove"));
      _0x5bd614.sendMessage(_0x3a96c2.chat, {
        'text': "𝑯𝒆𝒚 𝑆ℎ𝑖𝑡𝑦 𝑏𝑢𝑙𝑙𝑠ℎ𝑖𝑡@" + ki.split('@')[0x0] + "👋\n\n𝑺𝒆𝒏𝒅𝒊𝒏𝒈 𝒍𝒊𝒏𝒌𝒔 𝒊𝒔 𝒑𝒓𝒐𝒉𝒊𝒃𝒊𝒕𝒆𝒅 𝒊𝒏 𝒕𝒉𝒊𝒔 𝒈𝒓𝒐𝒖𝒑 𝒃𝒚 𝑽𝑰𝑵𝑰𝒁𝑰𝑨𝒁-𝑿𝑴𝑫 !",
        'contextInfo': {
          'mentionedJid': [ki]
        }
      }, {
        'quoted': _0x3a96c2
      });
    }
    if (_0xb1de4f && !_0x3a96c2.isGroup) {
      console.log(chalk.black(chalk.bgWhite("[ 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 ]")), !_0x502c(0x48d) ? chalk.green(_0x43805a) : chalk.keyword("turquoise")(_0x43805a), chalk.magenta('From'), chalk.green(_0x123049), chalk.yellow("[ " + _0x3a96c2.sender.replace("@s.whatsapp.net", '') + " ]"));
    } else if (_0xb1de4f && _0x3a96c2.isGroup) {
      console.log(chalk.black(chalk.bgWhite("[ LOGS ]")), !_0x502c(0x48d) ? chalk.green(_0x43805a) : chalk.keyword("turquoise")(_0x43805a), chalk.magenta("From"), chalk.green(_0x123049), chalk.yellow("[ " + _0x3a96c2.sender.replace("@s.whatsapp.net", '') + " ]"), chalk.blueBright('IN'), chalk.green(_0x28c69e));
    }
    if (_0xb1de4f) {
      switch (_0x3b7157) {
        case "viniziaz":
        case "menu":
          await _0x2d5e0e();
          let _0x10fbfe = "𝗛𝗲𝘆 " + _0x3a96c2.pushName + "😁, " + _0x30d361() + "\n\n𝐓𝐡𝐢𝐬 𝐢𝐬 𝐕𝐈𝐍𝐈𝐙𝐈𝐀𝐙-𝐗𝐌𝐃, 𝐜𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 𝐕𝐢𝐧𝐢𝐳𝐢𝐚𝐳\n\n╭═════〘 𝐕𝐈𝐍𝐈𝐙𝐈𝐀𝐙-𝐗𝐌𝐃 〙═════╮\n┃✫╭═─────────────────═╮\n┃✬│ 𝗨𝘀𝗲𝗿 : " + _0x3a96c2.pushName + "\n┃✬│ 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 : 𝚟𝙸𝙽𝙸𝚉𝙸𝙰𝚉\n┃✫│ 𝗣𝗿𝗲𝗳𝗶𝘅 : " + prefix + "\n┃✫│ 𝗠𝗼𝗱𝗲 : " + mode + "\n┃✯│ 𝗦𝗽𝗲𝗲𝗱 :   " + _0x54a229.toFixed(0x4) + " 𝗠𝘀\n┃✬│ 𝗧𝗶𝗺𝗲 : " + DateTime.now().setZone("Africa/Nairobi").toLocaleString(DateTime.TIME_SIMPLE) + " on " + _0x57c0b4.toLocaleString("en-US", {
            'weekday': "long",
            'timeZone': "Africa/Nairobi"
          }) + "\n┃✫│ 𝗔𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 𝗥𝗔𝗠 : 76𝗚𝗕 𝗼𝗳 256𝗚𝗕\n┃✫│═════════════════════\n┃✬│𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐕𝐈𝐍𝐈𝐙𝐈𝐀𝐙-𝐗𝐌𝐃 𝐂𝐌𝐃𝐒\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎\n┃✫│═════════════════════\n╰══──────────────────══╯\n●════ 〘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝐂𝐌𝐃𝐒 〙═──═●\n╭══───────◇───────══╮\n┃💥│ 𝗩𝗶𝗱𝗲𝗼\n┃💥│ 𝗣𝗹𝗮𝘆\n┃💥│ 𝗣𝗹𝗮𝘆2\n┃💥│ 𝗦𝗼𝗻𝗴\n┃💥│ 𝗦𝗼𝗻𝗴2\n┃💥│ 𝗙𝗯𝗱𝗹\n┃💥│ 𝗧𝗶𝗸𝘁𝗼𝗸\n┃💥│ 𝗧𝘄𝗶𝘁𝘁𝗲𝗿\n┃💥│ 𝗧𝘄𝘁𝗱𝗹\n┃💥│ 𝗜𝗴𝗱𝗹\n┃💥│ 𝗜𝗴\n┃💥│ 𝗙𝗯𝗱𝗹\n┃💥│ 𝗙𝗯\n┃💥│ 𝗶𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺\n┃💥│ 𝗠𝗼𝘃𝗶𝗲\n┃💥│ 𝗟𝘆𝗿𝗶𝗰𝘀\n┃💥│ 𝗪𝗵𝗮𝘁𝘀𝗼𝗻𝗴\n┃💥│ 𝗬𝘁𝘀\n┃💥│ 𝗬𝘁𝗺𝗽3\n┃💥│ 𝗬𝘁𝗺𝗽4\n╰══───────◇───────══╯\n●═════  〘 𝗘𝗗𝗜𝗧 𝐂𝐌𝐃𝐒 〙══───═●\n╭══───────◇───────══╮\n┃💥│ 𝗦𝘁𝗶𝗰𝗸𝗲𝗿\n┃💥│ 𝗦𝗺𝗲𝗺𝗲\n┃💥│ 𝗣𝗵𝗼𝘁𝗼\n┃💥│ 𝗠𝗽4\n┃💥│ 𝗥𝗲𝘁𝗿𝗶𝗲𝘃𝗲\n┃💥│ 𝗩𝘃\n┃💥│ 𝗩𝘃2\n┃💥│ 𝐖𝐚𝐡\n┃💥│ 𝗦𝗰𝗿𝗲𝗲𝗻𝘀𝗵𝗼𝘁\n┃💥│ 𝗠𝗶𝘅\n┃💥│ 𝗧𝗮𝗸𝗲\n┃💥│ 𝗧𝘄𝗲𝗲𝘁\n┃💥│ 𝗤𝘂𝗼𝘁𝗲𝗹𝘆\n╰══───────◇───────══╯\n●═══〘 𝗖𝗢𝗡𝗙𝗜𝗚 𝗩𝗔𝗥𝗦 𝐂𝐌𝐃𝐒 〙═───═●\n╭══───────◇───────══╮\n┃💥│ 𝗔𝗻𝘁𝗶𝗱𝗲𝗹𝗲𝘁𝗲\n┃💥│ 𝗔𝗻𝘁𝗶𝗰𝗮𝗹𝗹\n┃💥│ 𝗔𝗻𝘁𝗶𝗳𝗼𝗿𝗲𝗶𝗴𝗻\n┃💥│ 𝗔𝗻𝘁𝗶𝘁𝗮𝗴\n┃💥│ 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸\n┃💥│ 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸_𝗮𝗹𝗹\n┃💥│ 𝗚𝗽𝘁_𝗜𝗻𝗯𝗼𝘅\n╰══───────◇───────══╯\n●═════  〘 𝗚𝗣𝗧 𝐂𝐌𝐃𝐒 〙═────═●\n╭══───────◇───────══╮\n┃💥│ 𝗔𝗶\n┃💥│ 𝗔𝗶2\n┃💥│ 𝗩𝗶𝘀𝗶𝗼𝗻\n┃💥│ 𝗗𝗲𝗳𝗶𝗻𝗲\n┃💥│ 𝗗𝗮𝗿𝗸𝗴𝗽𝘁\n┃💥│ 𝗪𝗶𝗻𝘅𝗲𝘆\n┃💥│ 𝗚𝗲𝗺𝗶𝗻𝗶\n┃💥│ 𝗚𝗼𝗼𝗴𝗹𝗲\n┃💥│ 𝗚𝗽𝘁\n┃💥│ 𝗚𝗽𝘁2\n┃💥│ 𝗚𝗽𝘁3\n╰══───────◇───────══╯\n●════  〘 𝗚𝗥𝗢𝗨𝗣 𝐂𝐌𝐃𝐒 〙═───═●\n╭══───────◇───────══╮\n┃💥│ 𝗔𝗽𝗽𝗿𝗼𝘃𝗲\n┃💥│ 𝗥𝗲𝗷𝗲𝗰𝘁\n┃💥│ 𝗣𝗿𝗼𝗺𝗼𝘁𝗲\n┃💥│ 𝗗𝗲𝗺𝗼𝘁𝗲\n┃💥│ 𝗗𝗲𝗹𝗲𝘁𝗲\n┃💥│ 𝗥𝗲𝗺𝗼𝘃𝗲\n┃💥│ 𝗙𝗮𝗸𝗲𝗿\n┃💥│ 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀\n┃💥│ 𝗖𝗹𝗼𝘀𝗲\n┃💥│ 𝗢𝗽𝗲𝗻\n┃💥│ 𝗖𝗹𝗼𝘀𝗲𝗧𝗶𝗺𝗲\n┃💥│ 𝗢𝗽𝗲𝗻𝗧𝗶𝗺𝗲\n┃💥│ 𝗗𝗶𝘀𝗽-𝗼𝗳𝗳\n┃💥│ 𝗗𝗶𝘀𝗽-1\n┃💥│ 𝗗𝗶𝘀𝗽-7\n┃💥│ 𝗗𝗶𝘀𝗽-90\n┃💥│ 𝗜𝗰𝗼𝗻\n┃💥│ 𝗚𝗰𝗽𝗿𝗼𝗳𝗶𝗹𝗲\n┃💥│ 𝗦𝘂𝗯𝗷𝗲𝗰𝘁\n┃💥│ 𝗗𝗲𝘀𝗰\n┃💥│ 𝗟𝗲𝗮𝘃𝗲\n┃💥│ 𝗔𝗱𝗱\n┃💥│ 𝗧𝗮𝗴𝗮𝗹𝗹\n┃💥│ 𝗛𝗶𝗱𝗲𝘁𝗮𝗴\n┃💥│ 𝗥𝗲𝘃𝗼𝗸𝗲\n┃💥│ 𝗠𝘂𝘁𝗲\n┃💥│ 𝗨𝗻𝗺𝘂𝘁𝗲\n╰══───────◇───────══╯\n●═══  〘 𝗖𝗢𝗗𝗜𝗡𝗚 𝐂𝐌𝐃𝐒 〙 ═───═●\n╭══───────◇───────══╮\n┃💥│ 𝗖𝗮𝗿𝗯𝗼𝗻\n┃💥│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗰\n┃💥│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗰++\n┃💥│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗷𝘀\n┃💥│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗽𝘆\n┃💥│ 𝗜𝗻𝘀𝗽𝗲𝗰𝘁\n┃💥│ 𝗘𝗻𝗰𝗿𝘆𝗽𝘁𝗲\n┃💥│ 𝗘𝘃𝗮𝗹\n╰══───────◇───────══╯\n●═══  〘 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 𝐂𝐌𝐃𝐒 〙 ═───═●\n╭══───────◇───────══╮\n┃💥│ 𝗢𝘄𝗻𝗲𝗿\n┃💥│ 𝗦𝗰𝗿𝗶𝗽𝘁\n┃💥│ 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭\n┃💥│ 𝗟𝗶𝘀𝘁\n┃💥│ 𝗣𝗶𝗻𝗴\n┃💥│ 𝗣𝗼𝗹𝗹\n┃💥│ 𝗔𝗹𝗶𝘃𝗲\n┃💥│ 𝗦𝗽𝗲𝗲𝗱\n┃💥│ 𝗥𝗲𝗽𝗼\n┃💥│ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲\n┃💥│ 𝗨𝗽𝘁𝗶𝗺𝗲\n┃💥│ 𝗗𝗽\n┃💥│ 𝗗𝗹𝘁\n┃💥│ 𝗠𝗮𝗶𝗹\n┃💥│ 𝗜𝗻𝗯𝗼𝘅\n┃💥│ 𝗡𝗲𝘄𝘀\n┃💥│ 𝗔𝗻𝗶𝗺𝗲\n╰══───────◇───────══╯\n●═══   〘 𝗢𝗪𝗡𝗘𝗥 𝐂𝐌𝐃𝐒  〙═───═●\n╭══───────◇───────══╮\n┃💥│ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁\n┃💥│ 𝗔𝗱𝗺𝗶𝗻\n┃💥│ 𝗖𝗮𝘀𝘁\n┃💥│ 𝗕𝗿𝗼𝗮𝗱𝗰𝗮𝘀𝘁\n┃💥│ 𝗝𝗼𝗶𝗻\n┃💥│ 𝗚𝗲𝘁𝘃𝗮𝗿\n┃💥│ 𝗥𝗲𝗱𝗲𝗽𝗹𝗼𝘆\n┃💥│ 𝗨𝗽𝗱𝗮𝘁𝗲\n┃💥│ 𝗦𝗲𝘁𝘃𝗮𝗿\n┃💥│ 𝗕𝗼𝘁𝗽𝗽\n┃💥│ 𝗙𝘂𝗹𝗹𝗽𝗽\n┃💥│ 𝗕𝗹𝗼𝗰𝗸\n┃💥│ 𝗨𝗻𝗯𝗼𝗰𝗸\n┃💥│ 𝗞𝗶𝗹𝗹\n┃💥│ 𝗞𝗶𝗹𝗹2\n┃💥│ 𝗧𝗲𝗿𝗺𝗶𝗻𝗮𝘁𝗲\n┃💥│ 𝗦𝗮𝘃𝗲\n┃💥│ >\n╰══───────◇───────══╯\n●═══   〘 𝗣𝗥𝗔𝗡𝗞 𝐂𝐌𝐃  〙 ═──═●\n╭══───────◇───────══╮\n┃💥│ 𝗛𝗮𝗰𝗸\n╰══───────◇───────══╯\n●═══   〘 𝗟𝗢𝗚𝗢𝗦 𝐂𝐌𝐃𝐒 〙 ═──═●\n╭══───────◇───────══╮\n┃💥│ 𝗛𝗮𝗰𝗸𝗲𝗿\n┃💥│ 𝗛𝗮𝗰𝗸𝗲𝗿2\n┃💥│ 𝗚𝗿𝗮𝗳𝗳𝗶𝘁𝗶\n┃💥│ 𝗖𝗮𝘁\n┃💥│ 𝗦𝗮𝗻𝗱\n┃💥│ 𝗚𝗼𝗹𝗱\n┃💥│ 𝗔𝗿𝗲𝗻𝗮\n┃💥│ 𝗗𝗿𝗮𝗴𝗼𝗻𝗯𝗮𝗹𝗹\n┃💥│ 𝗡𝗮𝗿𝘂𝘁𝗼\n┃💥│ 𝗖𝗵𝗶𝗹𝗱\n┃💥│ 𝗟𝗲𝗮𝘃𝗲𝘀\n┃💥│ 1917\n┃💥│ 𝗧𝘆𝗽𝗼𝗴𝗿𝗮𝗽𝗵𝘆\n╰══───────◇───────══╯\n●═══ 〘  𝗧𝗘𝗫𝗧𝗠𝗔𝗞𝗘𝗥 𝐂𝐌𝐃𝐒  〙═──═●\n╭══───────◇───────══╮\n┃💥│ 𝗣𝘂𝗿𝗽𝗹𝗲\n┃💥│ 𝗡𝗲𝗼𝗻\n┃💥│ 𝗡𝗼𝗲𝗹\n┃💥│ 𝗠𝗲𝘁𝗮𝗹𝗹𝗶𝗰\n┃💥│ 𝗗𝗲𝘃𝗶𝗹\n┃💥│ 𝗜𝗺𝗽𝗿𝗲𝘀𝘀𝗶𝘃𝗲\n┃💥│ 𝗦𝗻𝗼𝘄\n┃💥│ 𝗪𝗮𝘁𝗲𝗿\n┃💥│ 𝗧𝗵𝘂𝗻𝗱𝗲𝗿\n┃💥│ 𝗜𝗰𝗲\n┃💥│ 𝗠𝗮𝘁𝗿𝗶𝘅\n┃💥│ 𝗦𝗶𝗹𝘃𝗲𝗿\n┃💥│ 𝗟𝗶𝗴𝗵𝘁\n╰══───────◇───────══╯\n●═══   〘 𝗠𝗜𝗦𝗖 𝐂𝐌𝐃 〙 ═──═●\n╭══───────◇───────══╮\n┃💥│ 𝗪𝗲𝗮𝘁𝗵𝗲𝗿\n┃💥│ 𝗚𝗶𝘁𝗵𝘂𝗯\n┃💥│ 𝗚𝗶𝘁𝗰𝗹𝗼𝗻𝗲\n┃💥│ 𝗔𝗱𝘃𝗶𝗰𝗲\n┃💥│ 𝗥𝗲𝗺𝗼𝘃𝗲𝗯𝗴\n┃💥│ 𝗥𝗲𝗺𝗶𝗻𝗶\n┃💥│ 𝗧𝘁𝘀\n┃💥│ 𝗧𝗿𝘁\n┃💥│ 𝗙𝗮𝗰𝘁\n┃💥│ 𝗖𝗮𝘁𝗳𝗮𝗰𝘁\n┃💥│ 𝗤𝘂𝗼𝘁𝗲𝘀\n┃💥│ 𝗣𝗶𝗰𝗸𝘂𝗽𝗹𝗶𝗻𝗲\n╰══───────◇───────══╯\n●═══  〘 𝗢𝗧𝗛𝗘𝗥𝗦 𝐂𝐌𝐃𝐒 〙 ═──═●\n╭══───────◇───────══╮\n┃💥│ 𝗖𝗿𝗲𝗱𝗶𝘁𝘀\n┃💥│ 𝗨𝗽𝗹𝗼𝗮𝗱\n┃💥│ 𝗔𝘁𝘁𝗽\n┃💥│ 𝗨𝗿𝗹\n┃💥│ 𝗜𝗺𝗮𝗴𝗲\n┃💥│ 𝗦𝘆𝘀𝘁𝗲𝗺\n┃✫╰═───────◇───────═╯\n┃   𝗠𝗮𝗱𝗲 𝗶𝗻 𝗞𝗲𝗻𝘆𝗮 𝗕𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭🤩\n┃   𝗕𝗘𝗦𝗧 𝗫𝗠𝗗 𝗕𝗢𝗧 𝗜𝗡 𝗨𝗡𝗜𝗩𝗘𝗥𝗦𝗘\n┃   🆃🅷🅰🅽🅺🆂 🆃🅾\n┃  ✦𝕯𝖊𝖛𝖊𝖑𝖔𝖕𝖊𝖗 (𝚟𝙸𝙽𝙸𝚉𝙸𝙰𝚉)\n┃  ✦𝕭𝖆𝖘𝖊 (𝙽𝚒𝚌𝚔)    \n┃  ✦𝕸𝖞 𝕲𝖎𝖗𝖑𝖋𝖗𝖎𝖊𝖓𝖉 (𝚆𝚒𝚗𝚡𝚎𝚢)\n┃  ✦𝖋𝖗𝖎𝖊𝖓𝖉𝖘 (𝚒𝚗𝚌. 𝙼𝚣𝚊𝚣𝚒, 𝚂𝚒𝚕𝚟𝚊, 𝙰𝚛𝚕𝚘𝚍𝚛𝚊𝚐𝚘𝚗 𝚊𝚗𝚍 𝚂𝚗𝚊𝚙𝚍𝚛𝚊𝚐𝚘𝚗)\n┃  ✦𝕒𝕟𝕕 𝕒𝕝𝕝 𝕠𝕗 𝕪𝕠𝕦🙂\n╰══────────────────══╯";
          if (menu === 'VIDEO') {
            _0x5bd614.sendMessage(_0x3a96c2.chat, {
              'video': fs.readFileSync("./Media/menu.mp4"),
              'caption': _0x10fbfe,
              'gifPlayback': true
            }, {
              'quoted': _0x3a96c2
            });
          } else {
            if (menu === "TEXT") {
              _0x5bd614.sendMessage(_0x1d3785, {
                'text': _0x10fbfe
              }, {
                'quoted': _0x3a96c2
              });
            } else {
              if (menu === "IMAGE") {
                _0x5bd614.sendMessage(_0x3a96c2.chat, {
                  'image': {
                    'url': "https://i.imgur.com/HP6GyiD.jpeg"
                  },
                  'caption': _0x10fbfe,
                  'fileLength': "9999999999"
                }, {
                  'quoted': _0x3a96c2
                });
              } else if (menu === "LINK") {
                _0x5bd614.sendMessage(_0x3a96c2.chat, {
                  'text': _0x10fbfe,
                  'contextInfo': {
                    'externalAdReply': {
                      'showAdAttribution': true,
                      'title': '𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗',
                      'body': '' + runtime(process.uptime()),
                      'thumbnail': fs.readFileSync("./Media/viniziaz.jpg"),
                      'sourceUrl': "https://wa.me/254704009677?text=Hello👋+Viniziaz+Nihostie+Bot+Mkuu+😔",
                      'mediaType': 0x1,
                      'renderLargerThumbnail': true
                    }
                  }
                }, {
                  'quoted': _0x3a96c2
                });
              }
            }
          }
          break;
        case 'advice':
          _0x262d94(advice());
          console.log(advice());
          break;
        case "owner":
        case 'developer':
        case 'dev':
          _0x5bd614.sendContact(_0x1d3785, _0x562cbf, _0x3a96c2);
          break;
        case "lyrics2":
          try {
            if (!_0x53b418) {
              return _0x262d94("𝑷𝒓𝒐𝒗𝒊𝒅𝒆 𝒂 𝒔𝒐𝒏𝒈 𝒏𝒂𝒎𝒆!\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
            }
            const _0x270c54 = await Client.songs.search(_0x53b418);
            const _0x55436f = _0x270c54[0x0];
            const _0x528a6c = await _0x55436f.lyrics();
            await _0x5bd614.sendMessage(_0x1d3785, {
              'text': _0x528a6c
            }, {
              'quoted': _0x3a96c2
            });
          } catch (_0x3cf796) {
            _0x262d94("𝑰 𝒅𝒊𝒅 𝒏𝒐𝒕 𝒈𝒊𝒏𝒅 𝒂𝒏𝒚 𝒍𝒚𝒓𝒊𝒄𝒔 𝒇𝒐𝒓 " + _0x53b418 + ". 𝑻𝒓𝒚 𝒔𝒆𝒂𝒓𝒄𝒉𝒊𝒏𝒈 𝒂 𝒅𝒊𝒇𝒇𝒆𝒓𝒆𝒏𝒕 𝒔𝒐𝒏𝒈.\n\n> ©𝖕𝖔𝖜𝖊𝖗 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
            console.log(_0x3cf796);
          }
          break;
        case "play2":
          {
            const _0x1a4d3d = require("yt-search");
            try {
              if (!_0x53b418) {
                return _0x3a96c2.reply("𝑾𝒉𝒂𝒕 𝒔𝒐𝒏𝒈 𝒅𝒐 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕 𝒕𝒐 𝒅𝒐𝒘𝒏𝒍𝒐𝒂𝒅?\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
              }
              const {
                videos: _0x303c89
              } = await _0x1a4d3d(_0x53b418);
              if (!_0x303c89 || _0x303c89.length === 0x0) {
                return _0x3a96c2.reply("𝑵𝒐 𝒔𝒐𝒏𝒈 𝒇𝒐𝒖𝒏𝒅!\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
              }
              const _0x4b18df = _0x303c89[0x0].url;
              try {
                let _0x54adcc = await fetchJson('https://api.dreaded.site/api/ytdl/audio?url=' + _0x4b18df);
                const {
                  title: _0x990c85,
                  format: _0x10cee7,
                  url: _0x697f83
                } = _0x54adcc.result;
                await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                  'document': {
                    'url': _0x697f83
                  },
                  'mimetype': "audio/mpeg",
                  'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗",
                  'fileName': _0x990c85 + ".mp3"
                }, {
                  'quoted': _0x3a96c2
                });
              } catch (_0x53ae1a) {
                console.error("API request failed:", _0x53ae1a.message);
                _0x3a96c2.reply("𝑫𝒐𝒘𝒏𝒍𝒐𝒂𝒅 𝒇𝒂𝒊𝒍𝒆𝒅: 𝑼𝒏𝒂𝒃𝒍𝒆 𝒕𝒐 𝒓𝒆𝒕𝒓𝒊𝒆𝒗𝒆.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
              }
            } catch (_0x1b53d0) {
              _0x3a96c2.reply("Download failed\n" + _0x1b53d0.message);
            }
          }
          ;
          break;
        case "music":
          {
            const _0x3bef86 = require("yt-search");
            const _0x57a4d2 = require("node-fetch");
            try {
              if (!_0x53b418) {
                return _0x3a96c2.reply("𝑾𝒉𝒂𝒕 𝒔𝒐𝒏𝒈 𝒅𝒐 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕 𝒕𝒐 𝒅𝒐𝒘𝒏𝒍𝒐𝒂𝒅.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
              }
              let _0x4bb9f9 = await _0x3bef86(_0x53b418);
              if (!_0x4bb9f9.all.length) {
                return sendReply(_0x5bd614, _0x3a96c2, "No results found for your query.");
              }
              let _0x4dcc8e = _0x4bb9f9.all[0x0].url;
              const _0x2ee66f = "https://keith-api.vercel.app/download/dlmp3?url=" + _0x4dcc8e;
              let _0x544b22 = await _0x57a4d2(_0x2ee66f);
              let _0x472016 = await _0x544b22.json();
              if (_0x472016.status && _0x472016.result) {
                const _0x1d8f0a = {
                  'title': _0x472016.result.title,
                  'downloadUrl': _0x472016.result.downloadUrl,
                  'thumbnail': _0x4bb9f9.all[0x0].thumbnail,
                  'format': _0x472016.result.format,
                  'quality': _0x472016.result.quality
                };
                await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                  'document': {
                    'url': _0x1d8f0a.downloadUrl
                  },
                  'mimetype': 'audio/mp3',
                  'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗",
                  'fileName': _0x1d8f0a.title.replace(/[^a-zA-Z0-9 ]/g, '') + ".mp3"
                }, {
                  'quoted': _0x3a96c2
                });
                await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                  'audio': {
                    'url': _0x1d8f0a.downloadUrl
                  },
                  'mimetype': "audio/mp4"
                }, {
                  'quoted': _0x3a96c2
                });
                return;
              } else {
                return _0x262d94("𝑼𝒏𝒂𝒃𝒍𝒆 𝒕𝒐 𝒇𝒆𝒕𝒄𝒉 𝒕𝒉𝒆 𝒔𝒐𝒏𝒈. 𝑻𝒓𝒚 𝒂𝒈𝒂𝒊𝒏 𝒍𝒂𝒕𝒆𝒓.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
              }
            } catch (_0x3a58d0) {
              return _0x262d94("𝑨𝒏 𝒆𝒓𝒓𝒐𝒓 𝒐𝒄𝒄𝒖𝒓𝒆𝒅: ");
            }
          }
          break;
        case "video":
          {
            const _0x5f51cb = require("yt-search");
            const _0x3e1520 = require("node-fetch");
            try {
              if (!_0x53b418) {
                return sendReply(_0x5bd614, _0x3a96c2, "𝑷𝒍𝒆𝒂𝒔𝒆 𝒔𝒑𝒆𝒄𝒊𝒇𝒚 𝒕𝒉𝒆 𝒗𝒊𝒅𝒆𝒐 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕 𝒕𝒐 𝒅𝒐𝒘𝒏𝒍𝒐𝒂𝒅.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖍𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
              }
              let _0x21a5d9 = await _0x5f51cb(_0x53b418);
              if (!_0x21a5d9.all.length) {
                return sendReply(_0x5bd614, _0x3a96c2, "No results found for your query.");
              }
              let _0x1a0a37 = _0x21a5d9.all[0x0].url;
              const _0x4d239a = "https://apis-keith.vercel.app/download/dlmp4?url=" + _0x1a0a37;
              let _0xbba919 = await _0x3e1520(_0x4d239a);
              let _0x316a5f = await _0xbba919.json();
              if (_0x316a5f.status && _0x316a5f.result) {
                const _0x5added = {
                  'title': _0x316a5f.result.title,
                  'downloadUrl': _0x316a5f.result.downloadUrl,
                  'thumbnail': _0x21a5d9.all[0x0].thumbnail,
                  'format': _0x316a5f.result.format,
                  'quality': _0x316a5f.result.quality
                };
                await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                  'video': {
                    'url': _0x5added.downloadUrl
                  },
                  'mimetype': "video/mp4",
                  'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
                }, {
                  'quoted': _0x3a96c2
                });
                return;
              } else {
                return _0x262d94(_0x5bd614, _0x3a96c2, "𝑼𝒏𝒂𝒃𝒍𝒆 𝒕𝒐 𝒇𝒆𝒕𝒄𝒉 𝒕𝒉𝒆 𝒗𝒊𝒅𝒆𝒐. 𝑷𝒍𝒆𝒂𝒔𝒆 𝒕𝒓𝒚 𝒂𝒈𝒂𝒊𝒏 𝒍𝒂𝒕𝒆𝒓, 𝒗𝒊𝒏𝒊𝒛𝒊𝒂𝒛 𝒊𝒔 𝒇𝒐𝒓 𝒚𝒐𝒖😂.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
              }
            } catch (_0x20d3f3) {
              return _0x262d94(_0x5bd614, _0x3a96c2, "An error occurred: " + _0x20d3f3.message);
            }
          }
          ;
          break;
        case "update":
        case "redeploy":
          {
            const _0xedaeca = require("axios");
            if (!_0x59cf5d) {
              throw NotOwner;
            }
            if (!appname || !herokuapi) {
              await _0x3a96c2.reply("𝑰𝒕 𝒍𝒐𝒐𝒌𝒔 𝒍𝒊𝒌𝒆 𝒕𝒉𝒆 𝒉𝒆𝒓𝒐𝒌𝒖 𝒂𝒑𝒑 𝒏𝒂𝒎𝒆 𝒐𝒓 𝑨𝑷𝑰 𝒌𝒆𝒚 𝒊𝒔 𝒏𝒐𝒕 𝒔𝒆𝒕. 𝑷𝒍𝒆𝒂𝒔𝒆 𝒎𝒂𝒌𝒆 𝒔𝒖𝒓𝒆 𝒚𝒐𝒖 𝒉𝒂𝒗𝒆 𝒔𝒆𝒕 𝒕𝒉𝒆 `APP_NAME` 𝒂𝒏𝒅 `HEROKU_API` 𝒆𝒏𝒗𝒊𝒓𝒐𝒏𝒎𝒆𝒏𝒕 𝒗𝒂𝒓𝒊𝒂𝒃𝒍𝒆𝒔.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
              return;
            }
            async function _0x34940b() {
              try {
                const _0x1bc9a1 = await _0xedaeca.post("https://api.heroku.com/apps/" + appname + "/builds", {
                  'source_blob': {
                    'url': "https://github.com/Viniznimco/VINIZIAZ-XMD/tarball/main"
                  }
                }, {
                  'headers': {
                    'Authorization': "Bearer " + herokuapi,
                    'Accept': "application/vnd.heroku+json; version=3"
                  }
                });
                await _0x3a96c2.reply("𝑽𝑰𝑵𝑰𝒁𝑰𝑨𝒁-𝑿𝑴𝑫 𝑩𝒐𝒕 𝒊𝒔 𝒖𝒏𝒅𝒆𝒓𝒈𝒐𝒊𝒏𝒈 𝒂 𝒓𝒖𝒕𝒉𝒍𝒆𝒔𝒔 𝒖𝒑𝒈𝒓𝒂𝒅𝒆, 𝒉𝒐𝒍𝒅 𝒐𝒏 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒏𝒆𝒙𝒕 2 𝒎𝒊𝒏𝒖𝒕𝒆𝒔 𝒂𝒔 𝒕𝒉𝒆 𝒓𝒆𝒅𝒆𝒑𝒍𝒐𝒚 𝒆𝒙𝒆𝒄𝒖𝒕𝒆𝒔! 𝑶𝒏𝒄𝒆 𝒅𝒐𝒏𝒆𝒆, 𝒚𝒐𝒖 𝒘𝒊𝒍𝒍 𝒉𝒂𝒗𝒆 𝒕𝒉𝒆 𝒇𝒓𝒆𝒔𝒉𝒆𝒔𝒕 𝒗𝒆𝒓𝒔𝒊𝒐𝒏 𝒐𝒇 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝒖𝒏𝒍𝒆𝒂𝒔𝒉𝒆𝒅 𝒖𝒑𝒐𝒏 𝒚𝒐𝒖.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
                console.log("Build details:", _0x1bc9a1.data);
              } catch (_0x5d1dc1) {
                const _0x1c2bbc = _0x5d1dc1.response?.["data"] || _0x5d1dc1.message;
                await _0x3a96c2.reply("𝑭𝒂𝒊𝒍𝒆𝒅 𝒕𝒐 𝒖𝒑𝒅𝒂𝒕𝒆 𝒂𝒏𝒅 𝒓𝒆𝒅𝒆𝒑𝒍𝒐𝒚. 𝑪𝒉𝒆𝒄𝒌 𝒊𝒇 𝒚𝒐𝒖 𝒉𝒂𝒗𝒆 𝒔𝒆𝒕 𝒕𝒉𝒆 𝒉𝒆𝒓𝒐𝒌𝒖 𝑨𝑷𝑰 𝒌𝒆𝒚 𝒂𝒏𝒅 𝒂𝒑𝒑 𝒏𝒂𝒎𝒆 𝒄𝒐𝒓𝒓𝒆𝒄𝒕𝒍𝒚.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
                console.error("Error triggering redeploy:", _0x1c2bbc);
              }
            }
            _0x34940b();
          }
          break;
        case 'credits':
          _0x5bd614.sendMessage(_0x3a96c2.chat, {
            'image': {
              'url': "https://i.imgur.com/HP6GyiD.jpeg"
            },
            'caption': "We express sincere gratitude and acknowledgement to the following:\n\n -Nick ➪ Kenya\n - Writing the base code using case method\nhttps://github.com/HunterNick2\n\n -Viniziaz ➪ Kenya\n - Founder of the bot base\nhttps://github.com/Viniznimco\n\n𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
          }, {
            'quoted': _0x3a96c2
          });
          break;
        case "poll":
          {
            let [_0x442fc4, _0x424955] = _0x53b418.split('|');
            if (_0x53b418.split('|') < 0x2) {
              return _0x3a96c2.reply("Wrong format::\nExample:- poll who is the best developer|Putin, Viniziaz\n\n> ©𝕻𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
            }
            let _0x5c36ca = [];
            for (let _0x17b7aa of _0x424955.split(',')) {
              _0x5c36ca.push(_0x17b7aa);
            }
            await _0x5bd614.sendMessage(_0x3a96c2.chat, {
              'poll': {
                'name': _0x442fc4,
                'values': _0x5c36ca
              }
            });
          }
          break;
        case "play":
          {
            const _0x2941e2 = require('axios');
            const _0x47a919 = require('yt-search');
            const _0x7c13bc = require("fluent-ffmpeg");
            const _0x3a6338 = require('fs');
            const _0x422f61 = require('path');
            try {
              if (!_0x53b418) {
                return _0x3a96c2.reply("What song do you want to download?\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
              }
              let _0x4cdef1 = await _0x47a919(_0x53b418);
              let _0x256886 = _0x4cdef1.all[0x0].url;
              const _0x51b370 = ["https://xploader-api.vercel.app/ytmp3?url=" + _0x256886, "https://apis.davidcyriltech.my.id/youtube/mp3?url=" + _0x256886, "https://api.ryzendesu.vip/api/downloader/ytmp3?url=" + _0x256886, "https://api.dreaded.site/api/ytdl/audio?url=" + _0x256886];
              for (const _0x269a1b of _0x51b370) {
                try {
                  let _0x16b204 = await fetchJson(_0x269a1b);
                  if (_0x16b204.status === 0xc8 || _0x16b204.success) {
                    let _0x545a7a = _0x16b204.result?.["downloadUrl"] || _0x16b204.url;
                    let _0x459adc = _0x4cdef1.all[0x0].title.replace(/[^a-zA-Z0-9 ]/g, '') + ".mp3";
                    let _0x8cc4df = _0x422f61.join(__dirname, _0x459adc);
                    const _0x296a52 = await _0x2941e2({
                      'url': _0x545a7a,
                      'method': "GET",
                      'responseType': 'stream'
                    });
                    if (_0x296a52.status !== 0xc8) {
                      _0x3a96c2.reply("sorry but the API endpoint didn't respond correctly. Try again later.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
                      continue;
                    }
                    _0x7c13bc(_0x296a52.data).toFormat("mp3").save(_0x8cc4df).on("end", async () => {
                      await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                        'document': {
                          'url': _0x8cc4df
                        },
                        'mimetype': "audio/mp3",
                        'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗",
                        'fileName': _0x459adc
                      }, {
                        'quoted': _0x3a96c2
                      });
                      _0x3a6338.unlinkSync(_0x8cc4df);
                    }).on("error", _0x27f445 => {
                      _0x3a96c2.reply("Download failed\n" + _0x27f445.message);
                    });
                    return;
                  }
                } catch (_0x4ea63d) {
                  continue;
                }
              }
              _0x3a96c2.reply("𝑨𝒏 𝒆𝒓𝒓𝒐𝒓 𝒐𝒄𝒄𝒖𝒓𝒆𝒅. 𝑨𝑳𝑳 𝑨𝑷𝑰𝒔 𝒎𝒊𝒈𝒉𝒕 𝒏𝒆 𝒅𝒐𝒘𝒏 𝒐𝒓 𝒖𝒏𝒂𝒃𝒍𝒆 𝒕𝒐 𝒑𝒓𝒐𝒄𝒆𝒔𝒔 𝒕𝒉𝒆 𝒓𝒆𝒒𝒖𝒆𝒔𝒕.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
            } catch (_0xe85141) {
              _0x3a96c2.reply("Download failed\n" + _0xe85141.message);
            }
          }
          break;
        case "inspect":
          {
            const _0x480820 = require("node-fetch");
            const _0x43c67a = require('cheerio');
            if (!_0x53b418) {
              return _0x3a96c2.reply("𝑷𝒓𝒐𝒗𝒊𝒅𝒆 𝒂 𝒗𝒂𝒍𝒊𝒅 𝒘𝒆𝒃 𝒍𝒊𝒏𝒌 𝒕𝒐 𝒇𝒆𝒕𝒄𝒉! 𝑻𝒉𝒊𝒔 𝑩𝒐𝒕 𝒘𝒊𝒍𝒍 𝒄𝒓𝒂𝒘𝒍 𝒕𝒉𝒆 𝒘𝒆𝒃𝒔𝒊𝒕𝒆 𝒂𝒏𝒅 𝒇𝒆𝒕𝒄𝒉 𝒊𝒕𝒔 HTML, CSS, JavaScript, 𝒂𝒏𝒅 𝒂𝒏𝒚 𝒎𝒆𝒅𝒊𝒂 𝒆𝒎𝒃𝒆𝒅𝒅𝒆𝒅 𝒊𝒏 𝒊𝒕.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
            }
            if (!/^https?:\/\//i.test(_0x53b418)) {
              return _0x3a96c2.reply("𝑷𝒍𝒆𝒂𝒔𝒆 𝒑𝒓𝒐𝒗𝒊𝒅𝒆 𝒂 𝒍𝒊𝒏𝒌 𝒔𝒕𝒂𝒓𝒕𝒊𝒏𝒈 𝒘𝒊𝒕𝒉 http:// or https://\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
            }
            try {
              const _0x564d89 = await _0x480820(_0x53b418);
              const _0x2a5883 = await _0x564d89.text();
              const _0x2b7b81 = _0x43c67a.load(_0x2a5883);
              const _0x261faf = [];
              _0x2b7b81("img[src], video[src], audio[src]").each((_0x356f56, _0x29de77) => {
                let _0x135732 = _0x2b7b81(_0x29de77).attr("src");
                if (_0x135732) {
                  _0x261faf.push(_0x135732);
                }
              });
              const _0x1540d4 = [];
              _0x2b7b81("link[rel=\"stylesheet\"]").each((_0x2adf79, _0x774424) => {
                let _0x422645 = _0x2b7b81(_0x774424).attr("href");
                if (_0x422645) {
                  _0x1540d4.push(_0x422645);
                }
              });
              const _0x49e344 = [];
              _0x2b7b81('script[src]').each((_0x28e6de, _0x11b884) => {
                let _0x5ea4b6 = _0x2b7b81(_0x11b884).attr('src');
                if (_0x5ea4b6) {
                  _0x49e344.push(_0x5ea4b6);
                }
              });
              await _0x3a96c2.reply("**Full HTML Content**:\n\n" + _0x2a5883);
              if (_0x1540d4.length > 0x0) {
                for (const _0x334ee5 of _0x1540d4) {
                  const _0x24fb40 = await _0x480820(new URL(_0x334ee5, _0x53b418));
                  const _0x3bd5d5 = await _0x24fb40.text();
                  await _0x3a96c2.reply("**CSS File Content**:\n\n" + _0x3bd5d5);
                }
              } else {
                await _0x3a96c2.reply("No external CSS files found.");
              }
              if (_0x49e344.length > 0x0) {
                for (const _0x5bbf82 of _0x49e344) {
                  const _0x2be9a4 = await _0x480820(new URL(_0x5bbf82, _0x53b418));
                  const _0x1c2d2c = await _0x2be9a4.text();
                  await _0x3a96c2.reply("**JavaScript File Content**:\n\n" + _0x1c2d2c);
                }
              } else {
                await _0x3a96c2.reply("No external JavaScript files found.");
              }
              if (_0x261faf.length > 0x0) {
                await _0x3a96c2.reply("**Media Files Found**:\n" + _0x261faf.join("\n"));
              } else {
                await _0x3a96c2.reply("No media files (images, videos, audios) found.");
              }
            } catch (_0x373eb8) {
              console.error(_0x373eb8);
              return _0x3a96c2.reply("An error occurred while fetching the website content.");
            }
          }
          break;
        case "metallic":
          {
            var _0x5641da = require("mumaker");
            if (!_0x53b418 || _0x53b418 == '') {
              _0x3a96c2.reply("Example Usage : " + prefix + "Metallic Viniziaz");
              return;
            }
            try {
              var _0x65cf1c = await _0x5641da.ephoto("https://en.ephoto360.com/impressive-decorative-3d-metal-text-effect-798.html", _0x53b418);
              _0x3a96c2.reply("*Wait a moment...*");
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'image': {
                  'url': _0x65cf1c.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              });
            } catch (_0xb0aa57) {
              _0x3a96c2.reply(_0xb0aa57);
            }
          }
          break;
        case "ice":
          {
            var _0x5641da = require("mumaker");
            if (!_0x53b418 || _0x53b418 == '') {
              _0x3a96c2.reply("Example Usage : " + prefix + "Ice Viniziaz");
              return;
            }
            try {
              var _0x4891a5 = await _0x5641da.ephoto("https://en.ephoto360.com/ice-text-effect-online-101.html", _0x53b418);
              _0x3a96c2.reply("*Wait a moment...*");
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'image': {
                  'url': _0x4891a5.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              });
            } catch (_0x5c05d3) {
              _0x3a96c2.reply(_0x5c05d3);
            }
          }
          break;
        case "snow":
          {
            var _0x5641da = require("mumaker");
            if (!_0x53b418 || _0x53b418 == '') {
              _0x3a96c2.reply("Example Usage : " + prefix + "Snow Viniziaz");
              return;
            }
            try {
              var _0x1541a1 = await _0x5641da.ephoto("https://en.ephoto360.com/create-a-snow-3d-text-effect-free-online-621.html", _0x53b418);
              _0x3a96c2.reply("*Wait a moment...*");
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'image': {
                  'url': _0x1541a1.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              });
            } catch (_0x5897f1) {
              _0x3a96c2.reply(_0x5897f1);
            }
          }
          break;
        case "impressive":
          {
            var _0x5641da = require("mumaker");
            if (!_0x53b418 || _0x53b418 == '') {
              _0x3a96c2.reply("Example Usage : " + prefix + "impressive Nick");
              return;
            }
            try {
              var _0x3fdf22 = await _0x5641da.ephoto("https://en.ephoto360.com/create-3d-colorful-paint-text-effect-online-801.html", _0x53b418);
              _0x3a96c2.reply("*Wait a moment...*");
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'image': {
                  'url': _0x3fdf22.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              });
            } catch (_0x52a16f) {
              _0x3a96c2.reply(_0x52a16f);
            }
          }
          break;
        case "noel":
          {
            var _0x5641da = require("mumaker");
            if (!_0x53b418 || _0x53b418 == '') {
              _0x3a96c2.reply("Example usage: " + prefix + "Noel myself");
              return;
            }
            try {
              var _0x8fc9d6 = await _0x5641da.ephoto("https://en.ephoto360.com/noel-text-effect-online-99.html", _0x53b418);
              _0x3a96c2.reply("*Wait a moment...*");
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'image': {
                  'url': _0x8fc9d6.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0x3a96c2
              });
            } catch (_0x55bfec) {
              _0x3a96c2.reply("💀💀" + _0x55bfec);
            }
          }
          break;
        case "water":
          {
            var _0x5641da = require("mumaker");
            if (!_0x53b418 || _0x53b418 == '') {
              _0x3a96c2.reply("Example usage: " + prefix + "Water myself");
              return;
            }
            try {
              var _0x179ddb = await _0x5641da.ephoto("https://en.ephoto360.com/create-water-effect-text-online-295.html", _0x53b418);
              _0x3a96c2.reply("*Wait a moment...*");
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'image': {
                  'url': _0x179ddb.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0x3a96c2
              });
            } catch (_0x2fd668) {
              _0x3a96c2.reply("💀💀" + _0x2fd668);
            }
          }
          break;
        case "matrix":
          {
            var _0x5641da = require("mumaker");
            if (!_0x53b418 || _0x53b418 == '') {
              _0x3a96c2.reply("Example usage: " + prefix + "Matrix myself");
              return;
            }
            try {
              var _0x2cb73c = await _0x5641da.ephoto("https://en.ephoto360.com/matrix-text-effect-154.html", _0x53b418);
              _0x3a96c2.reply("*Wait a moment...*");
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'image': {
                  'url': _0x2cb73c.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0x3a96c2
              });
            } catch (_0x215b25) {
              _0x3a96c2.reply("💀💀" + _0x215b25);
            }
          }
          break;
        case "light":
          {
            var _0x5641da = require("mumaker");
            if (!_0x53b418 || _0x53b418 == '') {
              _0x3a96c2.reply("Example usage: " + prefix + "Light myself");
              return;
            }
            try {
              var _0x1fc170 = await _0x5641da.ephoto("https://en.ephoto360.com/light-text-effect-futuristic-technology-style-648.html", _0x53b418);
              _0x3a96c2.reply("*Wait a moment...*");
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'image': {
                  'url': _0x1fc170.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0x3a96c2
              });
            } catch (_0x2f86de) {
              _0x3a96c2.reply("💀💀" + _0x2f86de);
            }
          }
          break;
        case 'neon':
          {
            var _0x5641da = require('mumaker');
            if (!_0x53b418 || _0x53b418 == '') {
              _0x3a96c2.reply("Example Usage : " + prefix + "Neon Viniziaz");
              return;
            }
            try {
              var _0x35b03a = await _0x5641da.ephoto("https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html", _0x53b418);
              _0x3a96c2.reply("*Wait a moment...*");
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'image': {
                  'url': _0x35b03a.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              });
            } catch (_0x42d185) {
              _0x3a96c2.reply(_0x42d185);
            }
          }
          break;
        case "silver":
        case "silva":
          {
            var _0x5641da = require("mumaker");
            if (!_0x53b418 || _0x53b418 == " ") {
              _0x3a96c2.reply("Example Usage : " + prefix + "Silva Viniziaz");
              return;
            }
            try {
              var _0x308855 = await _0x5641da.ephoto("https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html", _0x53b418);
              _0x3a96c2.reply("*Wait a moment...*");
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'image': {
                  'url': _0x308855.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              });
            } catch (_0x2ed662) {
              _0x3a96c2.reply(_0x2ed662);
            }
          }
          break;
        case "devil":
          {
            var _0x5641da = require("mumaker");
            if (!_0x53b418 || _0x53b418 == '') {
              _0x3a96c2.reply("Example Usage : " + prefix + "Devil Viniziaz");
              return;
            }
            try {
              var _0x4074df = await _0x5641da.ephoto('https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html', _0x53b418);
              _0x3a96c2.reply("*Wait a moment...*");
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'image': {
                  'url': _0x4074df.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              });
            } catch (_0x171438) {
              _0x3a96c2.reply(_0x171438);
            }
          }
          break;
        case "typography":
          {
            var _0x5641da = require("mumaker");
            if (!_0x53b418 || _0x53b418 == '') {
              _0x3a96c2.reply("Example Usage : " + prefix + "Typography Viniziaz");
              return;
            }
            try {
              var _0x49ecce = await _0x5641da.ephoto('https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html', _0x53b418);
              _0x3a96c2.reply("*Wait a moment...*");
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'image': {
                  'url': _0x49ecce.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              });
            } catch (_0x4bca7e) {
              _0x3a96c2.reply(_0x4bca7e);
            }
          }
          break;
        case "purple":
          {
            var _0x5641da = require('mumaker');
            if (!_0x53b418 || _0x53b418 == '') {
              _0x3a96c2.reply("Example Usage : " + prefix + "purple Viniziaz");
              return;
            }
            try {
              var _0x220a0d = await _0x5641da.ephoto("https://en.ephoto360.com/purple-text-effect-online-100.html", _0x53b418);
              _0x3a96c2.reply("*Wait a moment...*");
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'image': {
                  'url': _0x220a0d.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              });
            } catch (_0x162b5e) {
              _0x3a96c2.reply(_0x162b5e);
            }
          }
          break;
        case 'thunder':
          {
            var _0x5641da = require("mumaker");
            if (!_0x53b418 || _0x53b418 == '') {
              _0x3a96c2.reply("Example Usage : " + prefix + "Thunder Viniziaz");
              return;
            }
            try {
              var _0x2c798e = await _0x5641da.ephoto("https://en.ephoto360.com/thunder-text-effect-online-97.html", _0x53b418);
              _0x3a96c2.reply("*Wait a moment...*");
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'image': {
                  'url': _0x2c798e.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              });
            } catch (_0xfbdc2a) {
              _0x3a96c2.reply(_0xfbdc2a);
            }
          }
          break;
        case 'leaves':
          {
            var _0x5641da = require("mumaker");
            if (!_0x53b418 || _0x53b418 == '') {
              _0x3a96c2.reply("Example Usage : " + prefix + "Leaves RAVEN-BOT");
              return;
            }
            try {
              var _0x1b2dc2 = await _0x5641da.ephoto("https://en.ephoto360.com/green-brush-text-effect-typography-maker-online-153.html", _0x53b418);
              _0x3a96c2.reply("Wait a moment...");
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'image': {
                  'url': _0x1b2dc2.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0x3a96c2
              });
            } catch (_0x37ab6d) {
              _0x3a96c2.reply(_0x37ab6d);
            }
          }
          break;
        case '1917':
          {
            var _0x5641da = require("mumaker");
            if (!_0x53b418 || _0x53b418 == '') {
              _0x3a96c2.reply("Example Usage : " + prefix + "1917 Viniziaz");
              return;
            }
            try {
              var _0x5b7e9e = await _0x5641da.ephoto('https://en.ephoto360.com/1917-style-text-effect-523.html', _0x53b418);
              _0x3a96c2.reply("Wait a moment...");
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'image': {
                  'url': _0x5b7e9e.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0x3a96c2
              });
            } catch (_0x32efe8) {
              _0x3a96c2.reply(_0x32efe8);
            }
          }
          break;
        case "arena":
          {
            var _0x5641da = require("mumaker");
            if (!_0x53b418 || _0x53b418 == '') {
              _0x3a96c2.reply("Example Usage : " + prefix + "arena VINIZIAZ-XMD");
              return;
            }
            try {
              var _0x5aa8da = await _0x5641da.ephoto("https://en.ephoto360.com/create-cover-arena-of-valor-by-mastering-360.html", _0x53b418);
              _0x3a96c2.reply("Wait a moment...");
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'image': {
                  'url': _0x5aa8da.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0x3a96c2
              });
            } catch (_0x537e07) {
              _0x3a96c2.reply(_0x537e07);
            }
          }
          break;
        case "hacker":
          {
            var _0x5641da = require("mumaker");
            if (!_0x53b418 || _0x53b418 == '') {
              _0x3a96c2.reply("Example usage :  " + prefix + "hacker Viniziaz");
              return;
            }
            try {
              let _0x204140 = await _0x5641da.ephoto("https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", _0x53b418);
              _0x3a96c2.reply("*Wait a moment...*");
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'image': {
                  'url': _0x204140.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0x3a96c2
              });
            } catch (_0x1bf1f2) {
              _0x3a96c2.reply("🥵🥵 " + _0x1bf1f2);
            }
          }
          break;
        case "sand":
          {
            var _0x5641da = require("mumaker");
            if (!_0x53b418 || _0x53b418 == '') {
              _0x3a96c2.reply("Example Usage : " + prefix + "sand Raven");
              return;
            }
            try {
              let _0x45358d = await _0x5641da.ephoto("https://en.ephoto360.com/write-names-and-messages-on-the-sand-online-582.html", _0x53b418);
              _0x3a96c2.reply("*Wait a moment...*");
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'image': {
                  'url': _0x45358d.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0x3a96c2
              });
            } catch (_0x5c5b5a) {
              _0x3a96c2.reply("🚫🚫 " + _0x5c5b5a);
            }
          }
          break;
        case 'dragonball':
          {
            var _0x5641da = require('mumaker');
            if (!_0x53b418 || _0x53b418 == '') {
              _0x3a96c2.reply("Example usage :  " + prefix + "dragonball Viniziaz");
              return;
            }
            try {
              const _0xb9513f = await _0x5641da.ephoto("https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html", _0x53b418);
              _0x3a96c2.reply("*Wait a moment...*");
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'image': {
                  'url': _0xb9513f.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0x3a96c2
              });
            } catch (_0x2c32d6) {
              _0x3a96c2.reply("🥵🥵 " + _0x2c32d6);
            }
          }
          break;
        case 'naruto':
          {
            var _0x5641da = require('mumaker');
            if (!_0x53b418 || _0x53b418 == '') {
              _0x3a96c2.reply("Example usage : " + prefix + "naruto Viniziaz");
              return;
            }
            try {
              var _0xda8b73 = await _0x5641da.ephoto("https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html", _0x53b418);
              _0x3a96c2.reply("*Wait a moment...*");
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'image': {
                  'url': _0xda8b73.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0x3a96c2
              });
            } catch (_0x5c8ab7) {
              _0x3a96c2.reply("🥵🥵 " + _0x5c8ab7);
            }
          }
          break;
        case "graffiti":
          {
            var _0x5641da = require("mumaker");
            if (!_0x53b418 || _0x53b418 == '') {
              _0x3a96c2.reply("Example usage : " + prefix + "graffiti Viniziaz");
              return;
            }
            try {
              let _0x761387 = await _0x5641da.ephoto("https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html", _0x53b418);
              _0x3a96c2.reply("*Wait a moment...*");
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'image': {
                  'url': _0x761387.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0x3a96c2
              });
            } catch (_0x218aa5) {
              _0x3a96c2.reply("🥵🥵 " + _0x218aa5);
            }
          }
          break;
        case "cat":
          {
            var _0x5641da = require('mumaker');
            if (!_0x53b418 || _0x53b418 == '') {
              _0x3a96c2.reply("Example usage : * " + prefix + "cat Viniziaz");
              return;
            }
            try {
              let _0x93ae7a = await _0x5641da.ephoto("https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html", _0x53b418);
              _0x3a96c2.reply("*Wait a moment...*");
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'image': {
                  'url': _0x93ae7a.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0x3a96c2
              });
            } catch (_0x1fc3b2) {
              _0x3a96c2.reply("🥵🥵 " + _0x1fc3b2);
            }
          }
          break;
        case "gold":
          {
            var _0x5641da = require('mumaker');
            if (!_0x53b418 || _0x53b418 == '') {
              _0x3a96c2.reply("Example usage: " + prefix + "Gold myself");
              return;
            }
            try {
              var _0x2b3d39 = await _0x5641da.ephoto('https://en.ephoto360.com/modern-gold-4-213.html', _0x53b418);
              _0x3a96c2.reply("*Wait a moment...*");
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'image': {
                  'url': _0x2b3d39.image
                },
                'caption': "GENERATED BY RAVEN-BOT"
              }, {
                'quoted': _0x3a96c2
              });
            } catch (_0x547309) {
              _0x3a96c2.reply("💀💀" + _0x547309);
            }
          }
          break;
        case "child":
          {
            var _0x5641da = require('mumaker');
            if (!_0x53b418 || _0x53b418 == '') {
              _0x3a96c2.reply("Example usage: " + prefix + "Child Viniziaz");
              return;
            }
            try {
              var _0x33c56d = await _0x5641da.ephoto("https://en.ephoto360.com/write-text-on-wet-glass-online-589.html", _0x53b418);
              _0x3a96c2.reply("*Wait a moment...*");
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'image': {
                  'url': _0x33c56d.image
                },
                'caption': "GENERATED BY 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0x3a96c2
              });
            } catch (_0x134dd8) {
              _0x3a96c2.reply("💀💀" + _0x134dd8);
            }
          }
          break;
        case "Nimco":
          {
            if (!_0x53b418) {
              return _0x262d94("Hello I'm 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗔𝗜. How can i help u?");
            }
            let _0x187e55 = await fetchJson("https://bk9.fun/ai/llama?q=" + _0x53b418);
            if (!_0x187e55.BK9) {
              return _0x262d94("An error occurred while fetching the AI chatbot response. Please try again later.");
            } else {
              _0x262d94(_0x187e55.BK9);
            }
          }
          break;
        case "gpt2":
          {
            if (!_0x53b418) {
              return _0x262d94("What's your question ?");
            }
            let _0x24e45c = await fetchJson("https://bk9.fun/ai/jeeves-chat?q=" + _0x53b418);
            if (!_0x24e45c.BK9) {
              return _0x262d94("An error occurred while fetching the AI chatbot response. Please try again later.");
            } else {
              _0x262d94(_0x24e45c.BK9);
            }
          }
          break;
        case "trt":
        case "translate":
          {
            try {
              const _0x35512c = _0x53b418.split(" ");
              if (_0x35512c.length < 0x2) {
                return _0x3a96c2.reply(" Please provide a language code and text to translate !");
              }
              const _0x1745a6 = _0x35512c[0x0];
              const _0x4645d0 = _0x35512c.slice(0x1).join(" ");
              const _0x180a59 = await fetch("https://api.mymemory.translated.net/get?q=" + encodeURIComponent(_0x4645d0) + "&langpair=en|" + _0x1745a6);
              if (!_0x180a59.ok) {
                return _0x3a96c2.reply("Failed to fetch data. Please try again later.");
              }
              const _0x3d4652 = await _0x180a59.json();
              if (!_0x3d4652.responseData || !_0x3d4652.responseData.translatedText) {
                return _0x3a96c2.reply("No translation found for the provided text.");
              }
              const _0x1c1f2c = _0x3d4652.responseData.translatedText;
              const _0x5caa04 = " " + _0x1c1f2c;
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'text': _0x5caa04
              }, {
                'quoted': _0x3a96c2
              });
            } catch (_0x4469b5) {
              console.error("Error occurred:", _0x4469b5);
              _0x3a96c2.reply("An error occurred while fetching the data. Please try again later.\n" + _0x4469b5);
            }
          }
          break;
        case "antidelete":
          {
            try {
              if (!_0x3a96c2.isGroup) {
                return _0x3a96c2.reply("This feature is only for groups!");
              }
              let _0x473132 = _0x3a96c2.chat;
              let _0x475c9f = global.antiDeleteGroups?.["includes"](_0x473132);
              if (_0x55ac16[0x0] === 'on') {
                if (_0x475c9f) {
                  return _0x3a96c2.reply("Anti-Delete is already enabled!");
                }
                global.antiDeleteGroups.push(_0x473132);
                _0x3a96c2.reply("✅ Anti-Delete has been enabled!");
              } else {
                if (_0x55ac16[0x0] === "off") {
                  if (!_0x475c9f) {
                    return _0x3a96c2.reply("Anti-Delete is already disabled!");
                  }
                  global.antiDeleteGroups = global.antiDeleteGroups.filter(_0x36d28d => _0x36d28d !== _0x473132);
                  _0x3a96c2.reply("❌ Anti-Delete has been disabled!");
                } else {
                  _0x3a96c2.reply("Usage: *antidelete on* or *antidelete off*");
                }
              }
            } catch (_0x2b42d6) {
              console.error("Error in Anti-Delete:", _0x2b42d6);
              _0x3a96c2.reply("An error occurred while processing your request.");
            }
          }
          break;
        case "cast":
          {
            if (!_0x59cf5d) {
              throw NotOwner;
            }
            if (!_0x3a96c2.isGroup) {
              throw group;
            }
            if (!_0x53b418) {
              return _0x3a96c2.reply("provide a text to cast !");
            }
            let _0x20df0e = await _0x4636d8.filter(_0x229e48 => _0x229e48.id.endsWith(".net")).map(_0x220d7c => _0x220d7c.id);
            _0x3a96c2.reply("Success in casting the message to contacts\n\nDo not always use this Command to avoid WA-bans ! ");
            for (let _0x14a4e5 of _0x20df0e) {
              _0x5bd614.sendMessage(_0x14a4e5, {
                'text': q
              });
            }
            _0x3a96c2.reply("Casting completed successfully😁");
          }
          break;
        case "img":
        case "ai-img":
        case "image":
        case 'images':
          {
            var _0x419603 = require('g-i-s');
            if (!_0x53b418) {
              return _0x3a96c2.reply("Provide a text");
            }
            try {
              _0x419603(_0x53b418, async (_0x494889, _0x1a3f56) => {
                if (_0x494889) {
                  return _0x3a96c2.reply("An error occurred while searching for images.\n" + _0x494889);
                }
                if (_0x1a3f56.length === 0x0) {
                  return _0x3a96c2.reply("No images found.");
                }
                const _0x52f5f8 = Math.min(_0x1a3f56.length, 0x5);
                const _0x3a671b = _0x1a3f56.slice(0x0, _0x52f5f8).map(_0x59b05a => _0x59b05a.url);
                const _0x47c591 = _0x3a671b.map(_0x3ff03d => ({
                  'image': {
                    'url': _0x3ff03d
                  },
                  'caption': "Downloaded by " + botname
                }));
                for (const _0x587538 of _0x47c591) {
                  await _0x5bd614.sendMessage(_0x3a96c2.chat, _0x587538, {
                    'quoted': _0x3a96c2
                  });
                }
              });
            } catch (_0x26d0ff) {
              _0x3a96c2.reply("An error occurred.\n" + _0x26d0ff);
            }
          }
          break;
        case "foreigners":
          {
            if (!_0x3a96c2.isGroup) {
              throw group;
            }
            if (!_0x56d74d) {
              throw admin;
            }
            if (!_0x28b9b0) {
              throw botAdmin;
            }
            let _0x1b57e7 = _0x4636d8.filter(_0x25c595 => !_0x25c595.admin).map(_0x24ad2d => _0x24ad2d.id).filter(_0xee7b57 => !_0xee7b57.startsWith(mycode) && _0xee7b57 != _0x5bd614.decodeJid(_0x5bd614.user.id));
            if (!_0x55ac16 || !_0x55ac16[0x0]) {
              if (_0x1b57e7.length == 0x0) {
                return _0x3a96c2.reply("No foreigners detected.");
              }
              let _0x2a847c = "𝑭𝒐𝒓𝒆𝒊𝒈𝒏𝒆𝒓𝒔 𝒂𝒓𝒆 𝒕𝒉𝒐𝒔𝒆 𝒈𝒖𝒚𝒔 𝒘𝒉𝒐𝒔𝒆 𝒄𝒐𝒖𝒏𝒕𝒓𝒚 𝒄𝒐𝒅𝒆 𝒊𝒔 𝒏𝒐𝒕 " + mycode + ". 𝑻𝒉𝒆 𝒇𝒐𝒍𝒍𝒐𝒘𝒊𝒏𝒈 𝒓𝒆𝒇𝒖𝒈𝒆𝒆𝒔  " + _0x1b57e7.length + " 𝒐𝒓 𝒇𝒐𝒓𝒆𝒊𝒈𝒏𝒆𝒓𝒔 𝒘𝒆𝒓𝒆 𝒅𝒆𝒕𝒆𝒄𝒕𝒆𝒅:- \n";
              for (let _0x33b1af of _0x1b57e7) {
                _0x2a847c += "𓅂 @" + _0x33b1af.split('@')[0x0] + "\n";
              }
              _0x2a847c += "\n𝑻𝒐 𝒓𝒆𝒎𝒐𝒗𝒆 𝒕𝒉𝒆𝒎 𝒔𝒆𝒏𝒅 foreigners -x";
              _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'text': _0x2a847c,
                'mentions': _0x1b57e7
              }, {
                'quoted': _0x3a96c2
              });
            } else if (_0x55ac16[0x0] == '-x') {
              setTimeout(() => {
                _0x5bd614.sendMessage(_0x3a96c2.chat, {
                  'text': "𝑽𝒊𝒏𝒊𝒛𝒊𝒂𝒛 𝒘𝒊𝒍𝒍 𝒏𝒐𝒘 𝒓𝒆𝒎𝒐𝒗𝒆 𝒂𝒍𝒍 " + _0x1b57e7.length + " 𝒇𝒐𝒓𝒆𝒊𝒈𝒏𝒆𝒓𝒔/𝒓𝒆𝒇𝒖𝒈𝒆𝒆𝒔 𝒇𝒓𝒐𝒎 𝒕𝒉𝒊𝒔 𝒈𝒓𝒐𝒖𝒑 𝒄𝒉𝒂𝒕 𝒊𝒏 𝒕𝒉𝒆 𝒏𝒆𝒙𝒕 𝒔𝒆𝒄𝒐𝒏𝒅.\n\n𝒈𝒐𝒐𝒅𝒃𝒚𝒆. 𝑻𝒉𝒊𝒔 𝒑𝒓𝒐𝒄𝒆𝒔𝒔 𝒄𝒂𝒏 𝒏𝒐𝒕 𝒃𝒆 𝒕𝒆𝒓𝒎𝒊𝒏𝒂𝒕𝒆𝒅😂⚠️\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
                }, {
                  'quoted': _0x3a96c2
                });
                setTimeout(() => {
                  _0x5bd614.groupParticipantsUpdate(_0x3a96c2.chat, _0x1b57e7, 'remove');
                  setTimeout(() => {
                    _0x3a96c2.reply("𝑨𝒏𝒚 𝒓𝒆𝒎𝒂𝒊𝒏𝒊𝒏𝒈 𝒇𝒐𝒓𝒆𝒊𝒈𝒏𝒆𝒓, 𝒓𝒂𝒊𝒔𝒆 𝒚𝒐𝒖𝒓 𝒉𝒂𝒏𝒅𝒔?🌚😂.");
                  }, 0x3e8);
                }, 0x3e8);
              }, 0x3e8);
            }
          }
          break;
        case 'dalle':
        case "createimage":
          {
            if (!_0x53b418) {
              return _0x3a96c2.reply("*𝑻𝒉𝒊𝒔 𝒄𝒐𝒎𝒎𝒂𝒏𝒅 𝒈𝒆𝒏𝒆𝒓𝒂𝒕𝒆𝒔 𝒊𝒎𝒂𝒈𝒆𝒔 𝒇𝒓𝒐𝒎 𝒕𝒆𝒙𝒕 𝒑𝒓𝒐𝒎𝒑𝒕𝒔*\n\n*𝑬𝒙𝒂𝒎𝒑𝒍𝒆 𝒖𝒔𝒂𝒈𝒆*\n*" + (prefix + _0x3b7157) + " 𝑩𝒆𝒂𝒖𝒕𝒊𝒇𝒖𝒍 𝒂𝒏𝒊𝒎𝒆 𝒈𝒊𝒓𝒍*\n*" + (prefix + _0x3b7157) + " 𝒈𝒊𝒓𝒍 𝒊𝒏 𝒑𝒊𝒏𝒌 𝒅𝒓𝒆𝒔𝒔*");
            }
            try {
              _0x3a96c2.reply("𝒑𝒍𝒆𝒂𝒔𝒆 𝒘𝒂𝒊𝒕, 𝒂𝒎 𝒈𝒆𝒏𝒆𝒓𝒂𝒕𝒊𝒏𝒈 𝒚𝒐𝒖𝒓 𝒊𝒎𝒂𝒈𝒆...");
              const _0xf75dda = "https://cute-tan-gorilla-yoke.cyclic.app/imagine?text=" + encodeURIComponent(_0x53b418);
              const _0x18ab95 = await fetch(_0xf75dda);
              if (_0x18ab95.ok) {
                const _0x5e3990 = await _0x18ab95.buffer();
                await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                  'image': _0x5e3990
                }, {
                  'quoted': _0x3a96c2
                });
              } else {
                throw "*𝒂𝒂𝒉𝒉𝒉𝒓𝒈 𝒈𝒆𝒏𝒆𝒓𝒂𝒕𝒊𝒐𝒏 𝒇𝒂𝒊𝒍𝒆𝒅*\n\n© >𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗";
              }
            } catch {
              _0x3a96c2.reply("𝑶𝒐𝒑𝒔! 𝒔𝒐𝒎𝒆𝒕𝒉𝒊𝒏𝒈 𝒘𝒆𝒏𝒕 𝒘𝒓𝒐𝒏𝒈 𝒘𝒉𝒊𝒍𝒆 𝒈𝒆𝒏𝒆𝒓𝒂𝒕𝒊𝒏𝒈 𝒚𝒐𝒖𝒓 𝒊𝒎𝒂𝒈𝒆. 𝑷𝒍𝒆𝒂𝒔𝒆 𝒕𝒓𝒚 𝒂𝒈𝒂𝒊𝒏 𝒍𝒂𝒕𝒆𝒓, 𝑽𝑰𝑵𝑰𝒁𝑰𝑨𝒁 𝒊𝒔 𝒇𝒐𝒓 𝒚𝒐𝒖😂.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
            }
          }
          break;
        case 'ai':
          {
            const {
              GoogleGenerativeAI: _0x48d483
            } = require("@google/generative-ai");
            const _0x1e073d = require("axios");
            try {
              if (!_0x3a96c2.quoted) {
                return _0x3a96c2.reply("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵!");
              }
              if (!_0x53b418) {
                return _0x3a96c2.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝘀𝗼𝗺𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵! 𝗧𝗵𝗶𝘀 𝗶𝘀 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗔𝗶, 𝘂𝘀𝗶𝗻𝗴 𝗴𝗲𝗺𝗶𝗻𝗶-𝗽𝗿𝗼-𝘃𝗶𝘀𝗶𝗼𝗻 𝘁𝗼 𝗮𝗻𝗮𝗹𝘆𝘀𝗲 𝗶𝗺𝗮𝗴𝗲𝘀.");
              }
              if (!/image/.test(_0x231894)) {
                return _0x3a96c2.reply("𝗛𝘂𝗵 𝘁𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲! 𝗣𝗹𝗲𝗮𝘀𝗲 𝗧𝗮𝗴 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵 !");
              }
              let _0x116b06 = await _0x5bd614.downloadAndSaveMediaMessage(_0x3a96c2.quoted);
              let _0x408901 = await uploadtoimgur(_0x116b06);
              _0x3a96c2.reply("𝗔 𝗺𝗼𝗺𝗲𝘁, 𝗹𝗲𝗺𝗺𝗲 𝗮𝗻𝗮𝗹𝘆𝘀𝗲 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝗼𝗳 𝘁𝗵𝗲 𝗜𝗺𝗮𝗴𝗲...");
              const _0x230a81 = new _0x48d483('AIzaSyDJUtskTG-MvQdlT4tNE319zBqLMFei8nQ');
              async function _0x2fd9b4(_0x20eef7, _0x42b56b) {
                const _0x8bdb57 = {
                  'responseType': "arraybuffer"
                };
                const _0x42769c = await _0x1e073d.get(_0x20eef7, _0x8bdb57);
                const _0x30ea80 = Buffer.from(_0x42769c.data).toString("base64");
                const _0x5be05b = {
                  'data': _0x30ea80,
                  'mimeType': _0x42b56b
                };
                const _0x3b7455 = {
                  'inlineData': _0x5be05b
                };
                return _0x3b7455;
              }
              const _0x273b61 = {
                'model': "gemini-1.5-flash"
              };
              const _0x943db6 = _0x230a81.getGenerativeModel(_0x273b61);
              const _0x35343c = [await _0x2fd9b4(_0x408901, 'image/jpeg')];
              const _0x14167d = await _0x943db6.generateContent([_0x53b418, ..._0x35343c]);
              const _0x1d5e28 = await _0x14167d.response;
              const _0x1c70e5 = _0x1d5e28.text();
              await _0x3a96c2.reply(_0x1c70e5);
            } catch (_0x1a8aef) {
              _0x3a96c2.reply("I am unable to analyze images at the moment\n" + _0x1a8aef);
            }
          }
          break;
        case "ai2":
          {
            try {
              if (!_0x3a96c2.quoted) {
                return _0x3a96c2.reply("Send the image then tag it with the instruction.");
              }
              if (!_0x53b418) {
                return _0x3a96c2.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝘀𝗼𝗺𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵! 𝗧𝗵𝗶𝘀 Viniziaz AI 𝗨𝘀𝗲 𝗚𝗲𝗺𝗶𝗻𝗶-𝗽𝗿𝗼-𝘃𝗶𝘀𝗶𝗼𝗻 𝘁𝗼 𝗮𝗻𝗮𝗹𝘆𝘀𝗲 𝗶𝗺𝗮𝗴𝗲𝘀.");
              }
              if (!/image/.test(_0x231894)) {
                return _0x3a96c2.reply("That is not an image, try again while quoting an actual image.");
              }
              let _0x30b1d3 = await _0x5bd614.downloadAndSaveMediaMessage(_0x3a96c2.quoted);
              let _0xef1c2e = await uploadtoimgur(_0x30b1d3);
              _0x3a96c2.reply("𝗔 𝗠𝗼𝗺𝗲𝗻𝘁, 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗[𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗔𝗜] 𝗶𝘀 𝗮𝗻𝗮𝗹𝘆𝘇𝗶𝗻𝗴 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝗼𝗳 𝘁𝗵𝗲 𝗶𝗺𝗮𝗴𝗲. . .");
              const _0x2aa4ba = await fetchJson("https://api.dreaded.site/api/gemini-vision?url=" + _0xef1c2e + "&instruction=" + _0x53b418);
              let _0x3fd6ec = _0x2aa4ba.result;
              await _0x3a96c2.reply(_0x3fd6ec);
            } catch (_0x369aaa) {
              _0x3a96c2.reply("I am unable to analyze images at the moment\n" + _0x369aaa);
            }
          }
          break;
        case 'vision':
          {
            if (!_0x35c5cd || !_0x53b418) {
              _0x3a96c2.reply("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝗮𝗻𝗱 𝗴𝗶𝘃𝗲 𝘀𝗼𝗺𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵. 𝗜'𝗺 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭 𝗔𝗶, 𝗶 𝘂𝘀𝗲 𝗕𝗮𝗿𝗱 𝘁𝗼 𝗮𝗻𝗮𝗹𝘆𝘇𝗲 𝗶𝗺𝗮𝗴𝗲𝘀.");
              return;
            }
            ;
            let _0x717044;
            if (_0x35c5cd.imageMessage) {
              _0x717044 = _0x35c5cd.imageMessage;
            } else {
              _0x3a96c2.reply("𝗛𝘂𝗵, 𝗧𝗵𝗮𝘁'𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲, 𝗦𝗲𝗻𝗱 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘁𝗵𝗲𝗻 𝘁𝗮𝗴 𝗶𝘁 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 !");
              return;
            }
            ;
            try {
              let _0x4e0da5 = await _0x5bd614.downloadAndSaveMediaMessage(_0x717044);
              let _0x34c4a1 = await uploadtoimgur(_0x4e0da5);
              _0x3a96c2.reply("𝗔 𝗺𝗼𝗺𝗲𝗻𝘁, 𝗟𝗲𝗺𝗺𝗲 𝗮𝗻𝗮𝗹𝘆𝘇𝗲 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝗼𝗳 𝘁𝗵𝗲 𝗶𝗺𝗮𝗴𝗲. . .");
              let _0x3948a4 = await (await fetch("https://bk9.fun/ai/geminiimg?url=" + _0x34c4a1 + "&q=" + _0x53b418)).json();
              const _0x487f00 = {
                'text': _0x3948a4.BK9
              };
              await _0x5bd614.sendMessage(_0x3a96c2.chat, _0x487f00, {
                'quoted': _0x3a96c2
              });
            } catch (_0x57779d) {
              _0x3a96c2.reply("An error occured\n" + _0x57779d);
            }
          }
          break;
        case "remini":
          {
            if (!_0x34bd9a) {
              return _0x262d94("𝗪𝗵𝗲𝗿𝗲 𝗶𝘀 𝘁𝗵𝗲 𝗶𝗺𝗮𝗴𝗲 ?");
            }
            if (!/image/.test(_0x231894)) {
              return _0x262d94("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝗰𝗮𝗽𝘁𝗶𝗼𝗻𝘀 " + (prefix + _0x3b7157));
            }
            const {
              remini: _0x277bed
            } = require("./lib/remini");
            let _0x53e581 = await _0x34bd9a.download();
            let _0x5d0a5b = await _0x277bed(_0x53e581, "enhance");
            _0x5bd614.sendMessage(_0x3a96c2.chat, {
              'image': _0x5d0a5b,
              'caption': "𝗚𝗲𝗻𝗲𝗿𝗮𝘁𝗲𝗱 𝗯𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
            }, {
              'quoted': _0x3a96c2
            });
          }
          break;
        case "kill2":
        case "kickall2":
        case 'terminate':
          {
            if (!_0x59cf5d) {
              throw NotOwner;
            }
            if (!_0x53b418) {
              return _0x3a96c2.reply("Provide a valid group link. Ensure the bot is in that group with admin privileges !");
            }
            let _0x5da5e8;
            let _0x222278;
            try {
              let _0x10c5a4 = _0x55ac16[0x0].split("https://chat.whatsapp.com/")[0x1];
              const _0x22bd47 = await _0x5bd614.groupGetInviteInfo(_0x10c5a4);
              ({
                id: _0x5da5e8,
                subject: _0x222278
              } = _0x22bd47);
            } catch (_0x506e13) {
              _0x3a96c2.reply("Why are you giving me an invalid group link?");
              return;
            }
            try {
              const _0x278317 = await _0x5bd614.groupMetadata(_0x5da5e8);
              const _0xcaaafe = await _0x278317.participants;
              let _0x577a90 = _0xcaaafe.filter(_0x3df337 => _0x3df337.id !== _0x5bd614.decodeJid(_0x5bd614.user.id)).map(_0x1af578 => _0x1af578.id);
              await _0x3a96c2.reply("☠️𝑽𝒊𝒏𝒊𝒛𝒊𝒂𝒛 𝒊𝒔 𝒊𝒏𝒊𝒕𝒊𝒂𝒍𝒊𝒛𝒊𝒏𝒈 𝒂𝒏𝒅 𝒑𝒓𝒆𝒑𝒂𝒓𝒊𝒏𝒈 𝒕𝒐 𝒌𝒊𝒍𝒍☠️ " + _0x222278);
              await _0x5bd614.groupSettingUpdate(_0x5da5e8, "announcement");
              await _0x5bd614.removeProfilePicture(_0x5da5e8);
              await _0x5bd614.groupUpdateSubject(_0x5da5e8, "𝑻𝒉𝒊𝒔 𝒈𝒓𝒐𝒖𝒑 𝒊𝒔 𝒏𝒐 𝒍𝒐𝒏𝒈𝒆𝒓 𝒂𝒗𝒂𝒊𝒍𝒂𝒃𝒍𝒆 🚫");
              await _0x5bd614.groupUpdateDescription(_0x5da5e8, "//𝑩𝒚 𝒕𝒉𝒆 𝒐𝒓𝒅𝒆𝒕 𝒐𝒇 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭 𝗗𝗲𝘃 !");
              await _0x5bd614.groupRevokeInvite(_0x5da5e8);
              await _0x5bd614.sendMessage(_0x5da5e8, {
                'text': "𝑨𝒕 𝒕𝒉𝒊𝒔 𝒕𝒊𝒎𝒆, 𝑴𝒚 𝒐𝒘𝒏𝒆𝒓 𝒉𝒂𝒔 𝒊𝒏𝒊𝒕𝒊𝒂𝒕𝒆𝒅 𝒕𝒐 𝒄𝒐𝒎𝒎𝒂𝒏𝒅 𝒓𝒆𝒎𝒐𝒕𝒆𝒍𝒚.\n𝑻𝒉𝒊𝒔 𝒉𝒂𝒔 𝒕𝒓𝒊𝒈𝒈𝒆𝒓𝒆𝒅 𝒎𝒆 𝒕𝒐 𝒓𝒆𝒎𝒐𝒗𝒆 𝒂𝒍𝒍 𝒕𝒉𝒆 𝒔𝒕𝒖𝒑𝒊𝒅 " + _0x577a90.length + " 𝒈𝒓𝒐𝒖𝒑 𝒑𝒂𝒓𝒕𝒊𝒄𝒊𝒑𝒂𝒏𝒕𝒔 𝒊𝒏 𝒕𝒉𝒆 𝒏𝒆𝒙𝒕 𝒔𝒆𝒄𝒐𝒏𝒅.\n\n𝑮𝒐𝒐𝒅 𝒃𝒚𝒆 𝒎𝒐𝒕𝒉𝒆𝒓𝒇*𝒄𝒌𝒆𝒓𝒔! 👋\n\n⚠️𝑻𝑯𝑰𝑺 𝑷𝑹𝑶𝑪𝑬𝑺𝑺 𝑪𝑨𝑵𝑵𝑶𝑻 𝑩𝑬 𝑻𝑬𝑹𝑴𝑰𝑵𝑨𝑻𝑬𝑫⚠️",
                'mentions': _0xcaaafe.map(_0x3bf408 => _0x3bf408.id)
              });
              await _0x5bd614.groupParticipantsUpdate(_0x5da5e8, _0x577a90, "remove");
              const _0x5664d2 = {
                'text': "𝑮𝒐𝒐𝒅𝒃𝒚𝒆 𝑮𝒓𝒐𝒖𝒑 𝒐𝒘𝒏𝒆𝒓👋\n𝒕𝒉𝒊𝒔 𝒈𝒓𝒐𝒖𝒑 𝒊𝒔 𝒖𝒔𝒆𝒍𝒆𝒔𝒔, 𝒄𝒓𝒆𝒂𝒕𝒆 𝒂𝒏𝒐𝒕𝒉𝒆𝒓 𝒐𝒏𝒆🥶"
              };
              await _0x5bd614.sendMessage(_0x5da5e8, _0x5664d2);
              await _0x5bd614.groupLeave(_0x5da5e8);
              await _0x3a96c2.reply("```𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍 𝑲𝒊𝒍𝒍𝒆𝒅 𝒃𝒚 𝑽𝑰𝑵𝑰𝒁𝑰𝑨𝒁-𝑿𝑴𝑫💀```");
            } catch (_0x12285a) {
              _0x3a96c2.reply("```Kill command failed, bot is either not in that group, or not an admin```.");
            }
          }
          break;
        case "carbon":
          {
            const _0x1d1086 = require("node-fetch");
            let _0x1d6c71 = "𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗗 𝗕𝗬 " + botname;
            if (_0x3a96c2.quoted && _0x3a96c2.quoted.text) {
              const _0x109678 = _0x3a96c2.quoted.text;
              try {
                let _0x15daa6 = await _0x1d1086("https://carbonara.solopov.dev/api/cook", {
                  'method': "POST",
                  'headers': {
                    'Content-Type': "application/json"
                  },
                  'body': JSON.stringify({
                    'code': _0x109678,
                    'backgroundColor': '#1F816D'
                  })
                });
                if (!_0x15daa6.ok) {
                  return _0x3a96c2.reply("API failed to fetch a valid response.");
                }
                let _0x972e01 = await _0x15daa6.buffer();
                await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                  'image': _0x972e01,
                  'caption': _0x1d6c71
                }, {
                  'quoted': _0x3a96c2
                });
              } catch (_0x2480e6) {
                _0x3a96c2.reply("An error occured\n" + _0x2480e6);
              }
            } else {
              _0x3a96c2.reply("Quote a code message");
            }
          }
          break;
        case 'define':
          {
            try {
              if (!_0x53b418) {
                return _0x3a96c2.reply("Please provide a word.");
              }
              const _0x30dac7 = encodeURIComponent(_0x53b418);
              const _0x337c9d = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + _0x30dac7);
              if (!_0x337c9d.ok) {
                return _0x3a96c2.reply("Failed to fetch data. Please try again later.");
              }
              const _0x132125 = await _0x337c9d.json();
              if (!_0x132125 || !_0x132125[0x0] || !_0x132125[0x0].meanings || _0x132125[0x0].meanings.length === 0x0) {
                return _0x3a96c2.reply("No definitions found for the provided word.");
              }
              const _0x4d8025 = _0x132125[0x0];
              const _0x1116a2 = _0x4d8025.meanings[0x0].definitions[0x0].definition;
              const _0x4f4582 = '' + _0x1116a2;
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'text': _0x4f4582
              }, {
                'quoted': _0x3a96c2
              });
            } catch (_0x3b1a93) {
              console.error("Error occurred:", _0x3b1a93);
              _0x3a96c2.reply("An error occurred while fetching the data. Please try again later.\n" + _0x3b1a93);
            }
          }
          break;
        case 'tweet':
          {
            if (!_0x53b418) {
              return _0x3a96c2.reply("provide some text for the tweet");
            }
            const _0x295e28 = _0x3a96c2.sender.split('@')[0x0];
            const _0x395344 = await _0x5bd614.profilePictureUrl(_0x3a96c2.sender, 'image')['catch'](_0x3a356b => "https://i.imgur.com/vuxJCTB.jpeg");
            const _0x1da4ec = "https://some-random-api.com/canvas/misc/tweet?displayname=" + encodeURIComponent(_0x123049) + "&username=" + encodeURIComponent(_0x295e28) + "&avatar=" + encodeURIComponent(_0x395344) + "&comment=" + encodeURIComponent(_0x53b418) + "&replies=" + encodeURIComponent('246') + "&retweets=" + encodeURIComponent("125") + "&theme=" + encodeURIComponent("dark");
            await _0x5bd614.sendMessage(_0x3a96c2.chat, {
              'image': {
                'url': _0x1da4ec
              },
              'caption': "𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗲𝗱 𝗯𝘆 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧"
            }, {
              'quoted': _0x3a96c2
            });
          }
          break;
        case 'pickupline':
          {
            try {
              const _0x3cd376 = await fetch("https://api.popcat.xyz/pickuplines");
              if (!_0x3cd376.ok) {
                throw new Error("Failed to fetch data");
              }
              const {
                pickupline: _0x59c40c
              } = await _0x3cd376.json();
              const _0x399487 = '' + _0x59c40c;
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'text': _0x399487
              }, {
                'quoted': _0x3a96c2
              });
            } catch (_0x409930) {
              console.error("Error fetching data:", _0x409930);
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'text': "An error occurred while fetching the fact."
              }, {
                'quoted': _0x3a96c2
              });
            }
          }
          break;
        case "quotes":
          {
            try {
              const _0xe2e80b = await fetch('https://favqs.com/api/qotd');
              if (!_0xe2e80b.ok) {
                throw new Error("Failed to fetch data");
              }
              const {
                quote: _0x170658
              } = await _0xe2e80b.json();
              const _0x21220b = _0x170658.body + " \n\n𝗤𝘂𝗼𝘁𝗲 𝗕𝘆 " + _0x170658.author;
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'text': _0x21220b
              }, {
                'quoted': _0x3a96c2
              });
            } catch (_0x4ca7fd) {
              console.error("Error fetching data:", _0x4ca7fd);
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'text': "An error occurred while fetching the fact."
              }, {
                'quoted': _0x3a96c2
              });
            }
          }
          break;
        case "google":
          {
            const _0x399757 = require("axios");
            if (!_0x53b418) {
              _0x3a96c2.reply("Provide a search term!\nEg: .Google What is treason");
              return;
            }
            let {
              data: _0x1256ae
            } = await _0x399757.get("https://www.googleapis.com/customsearch/v1?q=" + _0x53b418 + "&key=AIzaSyDMbI3nvmQUrfjoCJYLS69Lej1hSXQjnWI&cx=baf9bdb0c631236e5");
            if (_0x1256ae.items.length == 0x0) {
              _0x3a96c2.reply("❌ Unable to find a result");
              return;
            }
            let _0x11b3e8 = "SEARCH FROM GOOGLE\n🔍 Term:- " + _0x53b418 + "\n\n";
            for (let _0x545c83 = 0x0; _0x545c83 < _0x1256ae.items.length; _0x545c83++) {
              _0x11b3e8 += "🪧 Title:- " + _0x1256ae.items[_0x545c83].title + "\n🖥 Description:- " + _0x1256ae.items[_0x545c83].snippet + "\n🌐 Link:- " + _0x1256ae.items[_0x545c83].link + "\n\n";
            }
            _0x3a96c2.reply(_0x11b3e8);
          }
          break;
        case "hack":
          {
            if (!_0x59cf5d) {
              throw NotOwner;
            }
            try {
              const _0x26903f = ["⚠️𝗜𝗻𝗶𝘁𝗶𝗹𝗶𝗮𝘇𝗶𝗻𝗴 𝗛𝗮𝗰𝗸𝗶𝗻𝗴 𝗧𝗼𝗼𝗹𝘀⚠️", "𝗜𝗻𝗷𝗲𝗰𝘁𝗶𝗻𝗴 𝗠𝗮𝗹𝘄𝗮𝗿𝗲🐛..\n𝗟𝗼𝗮𝗱𝗶𝗻𝗴 𝗗𝗲𝘃𝗶𝗰𝗲 𝗚𝗮𝗹𝗹𝗲𝗿𝘆 𝗙𝗶𝗹𝗲𝘀⚠️", "```██ 10%``` ⏳", "```████ 20%``` ⏳", "```██████ 30%``` ⏳", "```████████ 40%``` ⏳", "```██████████ 50%``` ⏳", "```████████████ 60%``` ⏳", "```██████████████ 70%``` ⏳", "```████████████████ 80%``` ⏳", "```██████████████████ 90%``` ⏳", "```████████████████████ 100%``` ✅", "```𝗦𝘆𝘀𝘁𝗲𝗺 𝗛𝘆𝗷𝗮𝗰𝗸𝗶𝗻𝗴 𝗼𝗻 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...```\n```𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗶𝗻𝗴 𝘁𝗼 𝘁𝗵𝗲 𝗦𝗲𝗿𝘃𝗲𝗿 𝘁𝗼 𝗙𝗶𝗻𝗱 𝗘𝗿𝗿𝗼𝗿 404```", "```𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 𝘁𝗼 𝗗𝗲𝘃𝗶𝗰𝗲...\n𝗥𝗲𝗰𝗲𝗶𝘃𝗶𝗻𝗴 𝗗𝗮𝘁𝗮/𝗦𝗲𝗰𝗿𝗲𝘁 𝗣𝗮𝘀𝘀𝘄𝗼𝗿𝗱𝘀...```", "```𝗗𝗮𝘁𝗮 𝗧𝗿𝗮𝗻𝘀𝗳𝗲𝗿𝗲𝗱 𝗙𝗿𝗼𝗺 𝗱𝗲𝘃𝗶𝗰𝗲 100% 𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗲𝗱\n𝗘𝗿𝗮𝘀𝗶𝗻𝗴 𝗮𝗹𝗹 𝗘𝘃𝗶𝗱𝗲𝗻𝗰𝗲, 𝗞𝗶𝗹𝗹𝗶𝗻𝗴 𝗮𝗹𝗹 𝗠𝗮𝗹𝘄𝗮𝗿𝗲𝘀🐛...```", "```𝗦𝗘𝗡𝗗𝗜𝗡𝗗 𝗟𝗢𝗚 𝗗𝗢𝗖𝗨𝗠𝗘𝗡𝗧𝗦...```", "```𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗦𝗲𝗻𝘁 𝗗𝗮𝘁𝗮 𝗔𝗻𝗱 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗶𝗼𝗻 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗗𝗶𝘀𝗰𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱```", "```𝗔𝗹𝗹 𝗕𝗮𝗰𝗸𝗹𝗼𝗴𝘀 𝗖𝗹𝗲𝗮𝗿𝗲𝗱 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆💣\n𝗬𝗼𝘂𝗿 𝗦𝘆𝘀𝘁𝗲𝗺 𝗪𝗶𝗹𝗹 𝗕𝗲 𝗗𝗼𝘄𝗻 𝗜𝗻 𝗧𝗵𝗲 𝗡𝗲𝘅𝘁 𝗠𝗶𝗻𝘂𝘁𝗲⚠️```"];
              for (const _0xb0c78c of _0x26903f) {
                await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                  'text': _0xb0c78c
                }, {
                  'quoted': _0x3a96c2
                });
                await new Promise(_0x3e910a => setTimeout(_0x3e910a, 0x3e8));
              }
            } catch (_0x3f58cd) {
              console.error("Error during prank:", _0x3f58cd);
              _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'text': "❌ *Error!* Something went wrong. Reason: " + _0x3f58cd.message + ". Please try again later."
              });
            }
          }
          break;
        case "compile-py":
          if (!_0x53b418 && !_0x3a96c2.quoted) {
            throw "Quote/tag a python code to compile.";
          }
          const _0x3de79e = _0x3a96c2.quoted ? _0x3a96c2.quoted.text ? _0x3a96c2.quoted.text : _0x53b418 ? _0x53b418 : _0x3a96c2.text : _0x3a96c2.text;
          let _0x2b6a44 = python.runSource(_0x3de79e);
          _0x2b6a44.then(_0x4614ef => {
            console.log(_0x4614ef);
            _0x262d94(_0x4614ef.stdout);
            _0x262d94(_0x4614ef.stderr);
          })["catch"](_0x379871 => {
            console.log(resultt.stderr);
            _0x262d94(resultt.stderr);
          });
          break;
        case "save":
          {
            const _0x5acac6 = _0x3a96c2.text.toLowerCase();
            const _0x374920 = _0x3a96c2.msg?.["contextInfo"]?.['quotedMessage'];
            if (_0x374920 && _0x5acac6.startsWith(prefix + "save") && !_0x3a96c2.quoted.chat.includes("status@broadcast")) {
              return _0x3a96c2.reply("You did not tag a status media to save.");
            }
            if (_0x59cf5d && _0x374920 && _0x5acac6.startsWith(prefix + "save") && _0x3a96c2.quoted.chat.includes('status@broadcast')) {
              if (_0x374920.imageMessage) {
                let _0x56703e = _0x374920.imageMessage.caption;
                let _0x8ec2eb = await _0x5bd614.downloadAndSaveMediaMessage(_0x374920.imageMessage);
                _0x5bd614.sendMessage(_0x3a96c2.chat, {
                  'image': {
                    'url': _0x8ec2eb
                  },
                  'caption': _0x56703e
                });
              }
              if (_0x374920.videoMessage) {
                let _0x4200ad = _0x374920.videoMessage.caption;
                let _0x43482e = await _0x5bd614.downloadAndSaveMediaMessage(_0x374920.videoMessage);
                _0x5bd614.sendMessage(_0x3a96c2.chat, {
                  'video': {
                    'url': _0x43482e
                  },
                  'caption': _0x4200ad
                });
              }
            }
          }
          break;
        case 'gitclone':
          {
            if (!_0x53b418) {
              return _0x3a96c2.reply("Where is the link?");
            }
            if (!_0x53b418.includes("github.com")) {
              return _0x3a96c2.reply("Is that a GitHub repo link ?!");
            }
            let _0x346416 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
            let [, _0x319ba8, _0x5ccb4e] = _0x53b418.match(_0x346416) || [];
            _0x5ccb4e = _0x5ccb4e.replace(/.git$/, '');
            let _0x40ca5b = "https://api.github.com/repos/" + _0x319ba8 + '/' + _0x5ccb4e + "/zipball";
            let _0x52cbf2 = (await fetch(_0x40ca5b, {
              'method': "HEAD"
            })).headers.get("content-disposition").match(/attachment; filename=(.*)/)[0x1];
            await _0x5bd614.sendMessage(_0x3a96c2.chat, {
              'document': {
                'url': _0x40ca5b
              },
              'fileName': _0x52cbf2 + ".zip",
              'mimetype': "application/zip"
            }, {
              'quoted': _0x3a96c2
            })["catch"](_0xfc2ff4 => _0x3a96c2.reply("error"));
          }
          break;
        case "darkgpt":
          {
            if (!_0x53b418) {
              return _0x3a96c2.reply("Hey there Fuckface😈, I'm Darkgpt, I respond to anything be it harmful, I'm a pure Evil👿, What sort of dark and delightful nonsense do you want to dive into Today😈 ?");
            }
            try {
              const _0x29aa7a = await fetchJson("https://api.dreaded.site/api/makgpt?text=" + _0x53b418);
              if (_0x29aa7a && _0x29aa7a.result) {
                const _0x34f8db = _0x29aa7a.result;
                await _0x3a96c2.reply(_0x34f8db);
              } else {
                _0x3a96c2.reply("Huh, the silence is deafening, no response whatsoever💀.The API seems to have vanished into the abyss...😔");
              }
            } catch (_0x20ad2d) {
              _0x262d94("An error occured while communicating with the APIs\n" + _0x20ad2d);
            }
          }
          break;
        case "github":
          {
            if (!_0x53b418) {
              return _0x3a96c2.reply("Provide a github username to stalk");
            }
            try {
              const _0x3c3c02 = await fetch('https://itzpire.com/stalk/github-user?username=' + _0x53b418);
              const _0xd795cd = await _0x3c3c02.json();
              const _0x3e88e6 = _0xd795cd.data.username;
              const _0x2f5d5c = _0xd795cd.data.nickname;
              const _0x54d8bd = _0xd795cd.data.bio;
              const _0x58485e = _0xd795cd.data.profile_pic;
              const _0x2f8c07 = _0xd795cd.data.url;
              const _0x4120f3 = _0xd795cd.data.location;
              const _0x55a8c5 = _0xd795cd.data.public_repo;
              const _0x184a3b = _0xd795cd.data.followers;
              const _0x153dbd = _0xd795cd.data.following;
              const _0x188894 = _0xd795cd.data.ceated_at;
              const _0x2555e2 = "Username:- " + _0x3e88e6 + "\n\nNickname:- " + _0x2f5d5c + "\n\nBio:- " + _0x54d8bd + "\n\nLink:- " + _0x2f8c07 + "\n\nLocation:- " + _0x4120f3 + "\n\nFollowers:- " + _0x184a3b + "\n\nFollowing:- " + _0x153dbd + "\n\nRepos:- " + _0x55a8c5 + "\n\nCreated:- " + _0x188894;
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'image': {
                  'url': _0x58485e
                },
                'caption': _0x2555e2
              }, {
                'quoted': _0x3a96c2
              });
            } catch (_0x145993) {
              _0x3a96c2.reply("Unable to fetch data\n" + _0x145993);
            }
          }
          break;
        case "screenshot":
        case 'ss':
          {
            try {
              let _0x42354d = "𝗦𝗰𝗿𝗲𝗲𝗻𝘀𝗵𝗼𝘁 𝗯𝘆 " + botname;
              if (!_0x53b418) {
                return _0x3a96c2.reply("Provide a website link to screenshot.");
              }
              const _0x5b31ad = "https://image.thum.io/get/fullpage/" + _0x53b418;
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'image': {
                  'url': _0x5b31ad
                },
                'caption': _0x42354d
              }, {
                'quoted': _0x3a96c2
              });
            } catch (_0x464c59) {
              _0x3a96c2.reply("An error occured.");
            }
          }
          break;
        case "alive":
        case "test":
          {
            const _0xd2ca79 = {
              'audio': {
                'url': "./Media/alive.mp3"
              },
              'mimetype': "audio/mp4",
              'ptt': true,
              'waveform': [0x64, 0x0, 0x64, 0x0, 0x64, 0x0, 0x64],
              'fileName': "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭",
              'contextInfo': {
                'mentionedJid': [_0x3a96c2.sender],
                'externalAdReply': {
                  'title': "𝗛𝗶 𝘆𝗼𝘂👋, 𝗜 𝗮𝗺 𝗔𝗹𝗶𝘃𝗲 𝗮𝗹𝗹 𝘁𝗵𝗲 𝘁𝗶𝗺𝗲😂",
                  'body': '𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗',
                  'thumbnailUrl': "https://i.imgur.com/HP6GyiD.jpeg",
                  'sourceUrl': '',
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            };
            await _0x5bd614.sendMessage(_0x3a96c2.chat, _0xd2ca79, {
              'quoted': _0x3a96c2
            });
          }
          break;
        case "removebg":
          {
            try {
              if (!_0x3a96c2.quoted) {
                return _0x3a96c2.reply("Send the image then tag it with the command.");
              }
              if (!/image/.test(_0x231894)) {
                return _0x3a96c2.reply("That is not an image, try again while quoting an actual image.");
              }
              let _0x12fd9a = await _0x5bd614.downloadAndSaveMediaMessage(_0x3a96c2.quoted);
              let _0x506c69 = await uploadtoimgur(_0x12fd9a);
              _0x3a96c2.reply("𝗔 𝗺𝗼𝗺𝗲𝗻𝘁, 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭 𝗶𝘀 𝗲𝗿𝗮𝘀𝗶𝗻𝗴 𝘁𝗵𝗲 𝗯𝗮𝗰𝗸𝗴𝗿𝗼𝘂𝗻𝗱. . .");
              const _0x55b5fd = "https://api.dreaded.site/api/removebg?imageurl=" + _0x506c69;
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'image': {
                  'url': _0x55b5fd
                },
                'caption': "𝗘𝗱𝗶𝘁𝗲𝗱 𝗯𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0x3a96c2
              });
            } catch (_0x4f2f16) {
              _0x3a96c2.reply("An error occured...");
            }
          }
          break;
        case "fact":
          {
            try {
              const _0x29417c = await fetchJson("https://api.dreaded.site/api/fact");
              const _0x550a49 = _0x29417c.fact;
              await _0x3a96c2.reply(_0x550a49);
            } catch (_0x560ed7) {
              _0x3a96c2.reply("Something is wrong.");
            }
          }
          break;
        case 'catfact':
          {
            try {
              const _0x49b900 = await fetchJson('https://api.dreaded.site/api/catfact');
              const _0x2d6bc4 = _0x49b900.fact;
              await _0x3a96c2.reply(_0x2d6bc4);
            } catch (_0x25b17e) {
              _0x3a96c2.reply("Something is wrong.");
            }
          }
          break;
        case "tts":
        case "say":
          {
            const _0x2691a2 = require('google-tts-api');
            if (!_0x53b418) {
              return _0x3a96c2.reply("Povide a text for conversion !");
            }
            const _0x2c5e59 = _0x2691a2.getAudioUrl(_0x53b418, {
              'lang': "hi-IN",
              'slow': false,
              'host': "https://translate.google.com"
            });
            _0x5bd614.sendMessage(_0x3a96c2.chat, {
              'audio': {
                'url': _0x2c5e59
              },
              'mimetype': "audio/mp4",
              'ptt': true
            }, {
              'quoted': _0x3a96c2
            });
          }
          break;
        case "gpt":
          {
            if (!_0x53b418) {
              return _0x262d94("Hello there, what's your question?");
            }
            let _0x450496 = await fetchJson("https://bk9.fun/ai/jeeves-chat2?q=" + _0x53b418);
            if (!_0x450496.BK9) {
              return _0x262d94("An error occurred while fetching the AI chatbot response. Please try again later.");
            } else {
              _0x262d94(_0x450496.BK9);
            }
          }
          break;
        case 'weather':
          {
            try {
              if (!_0x53b418) {
                return _0x3a96c2.reply("provide a city/town name");
              }
              const _0x19bddc = await fetch("http://api.openweathermap.org/data/2.5/weather?q=" + _0x53b418 + '&units=metric&appid=1ad47ec6172f19dfaf89eb3307f74785');
              const _0x4460b6 = await _0x19bddc.json();
              console.log("Weather data:", _0x4460b6);
              const _0x1bf925 = _0x4460b6.name;
              const _0x26484d = _0x4460b6.main.temp;
              const _0x28d353 = _0x4460b6.weather[0x0].description;
              const _0x5b69cb = _0x4460b6.main.humidity;
              const _0x2058af = _0x4460b6.wind.speed;
              const _0x7073e = _0x4460b6.rain ? _0x4460b6.rain['1h'] : 0x0;
              const _0x1c32cb = _0x4460b6.clouds.all;
              const _0x5c5f0a = new Date(_0x4460b6.sys.sunrise * 0x3e8);
              const _0x22142b = new Date(_0x4460b6.sys.sunset * 0x3e8);
              await _0x3a96c2.reply("❄️ Weather in " + _0x1bf925 + "\n\n🌡️ Temperature: " + _0x26484d + "°C\n📝 Description: " + _0x28d353 + "\n❄️ Humidity: " + _0x5b69cb + "%\n🌀 Wind Speed: " + _0x2058af + " m/s\n🌧️ Rain Volume (last hour): " + _0x7073e + " mm\n☁️ Cloudiness: " + _0x1c32cb + "%\n🌄 Sunrise: " + _0x5c5f0a.toLocaleTimeString() + "\n🌅 Sunset: " + _0x22142b.toLocaleTimeString());
            } catch (_0x1eee72) {
              _0x3a96c2.reply("Unable to find that location.");
            }
          }
          break;
        case "compile-js":
          if (!_0x53b418 && !_0x3a96c2.quoted) {
            throw "Quote/tag a Js code to compile.";
          }
          const _0x2e200e = _0x3a96c2.quoted ? _0x3a96c2.quoted.text ? _0x3a96c2.quoted.text : _0x53b418 ? _0x53b418 : _0x3a96c2.text : _0x3a96c2.text;
          let _0x37e333 = node.runSource(_0x2e200e);
          _0x37e333.then(_0x3048bf => {
            console.log(_0x3048bf);
            _0x262d94(_0x3048bf.stdout);
            _0x262d94(_0x3048bf.stderr);
          })['catch'](_0x2be6f1 => {
            console.log(resultt1.stderr);
            _0x262d94(resultt1.stderr);
          });
          break;
        case "quotely":
          {
            try {
              if (!_0x3a96c2.quoted.text) {
                throw "qoute a text";
              }
              let _0x3863c1 = _0x3a96c2.quoted.text;
              const {
                quote: _0x15187f
              } = require("./lib/viniziazquotely.js");
              let _0x363396 = await _0x5bd614.profilePictureUrl(_0x3a96c2.sender, "image")["catch"](_0x2fadb1 => "https://telegra.ph/file/75272825615a4dcb69526.png");
              const _0x5adc81 = await _0x15187f(_0x3863c1, _0x123049, _0x363396);
              _0x5bd614.sendImageAsSticker(_0x3a96c2.chat, _0x5adc81.result, _0x3a96c2, {
                'packname': _0x123049,
                'author': "VINIZIAZ-XMD"
              });
            } catch (_0x2d6888) {
              await _0x262d94("Qoute some text for quotely");
            }
          }
          break;
        case 'fullpp':
          {
            if (!_0x59cf5d) {
              throw NotOwner;
            }
            const {
              S_WHATSAPP_NET: _0x3977a3
            } = require("@whiskeysockets/baileys");
            try {
              const _0x2ff739 = require('fs');
              if (!_0x35c5cd) {
                _0x3a96c2.reply("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲...");
                return;
              }
              ;
              let _0x136a76;
              if (_0x35c5cd.imageMessage) {
                _0x136a76 = _0x35c5cd.imageMessage;
              } else {
                _0x3a96c2.reply("𝗛𝘂𝗵 𝘁𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲...");
                return;
              }
              ;
              var _0x38fe6c = await _0x5bd614.downloadAndSaveMediaMessage(_0x136a76);
              var {
                img: _0x58d742
              } = await generateProfilePicture(_0x38fe6c);
              _0x5bd614.query({
                'tag': 'iq',
                'attrs': {
                  'target': undefined,
                  'to': _0x3977a3,
                  'type': 'set',
                  'xmlns': "w:profile:picture"
                },
                'content': [{
                  'tag': "picture",
                  'attrs': {
                    'type': "image"
                  },
                  'content': _0x58d742
                }]
              });
              _0x2ff739.unlinkSync(_0x38fe6c);
              _0x3a96c2.reply("𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗽𝗶𝗰𝘁𝘂𝗿𝗲 𝘂𝗽𝗱𝗮𝘁𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆✅");
            } catch (_0x260ab6) {
              _0x3a96c2.reply("An error occured while updating profile photo\n" + _0x260ab6);
            }
          }
          break;
        case "upload":
        case "url":
          {
            let _0x2da57e = _0x3a96c2.quoted ? _0x3a96c2.quoted : _0x3a96c2;
            let _0x6a2605 = (_0x2da57e.msg || _0x2da57e).mimetype || '';
            if (!_0x6a2605) {
              return _0x3a96c2.reply("Quote an image or video");
            }
            let _0x55fe3d = await _0x2da57e.download();
            if (_0x55fe3d.length > 10485760) {
              return _0x3a96c2.reply("Media is too large.");
            }
            let _0xed1e00 = /image\/(png|jpe?g|gif)|video\/mp4/.test(_0x6a2605);
            if (_0xed1e00) {
              let _0x42e2b7 = await _0x5bd614.downloadAndSaveMediaMessage(_0x2da57e);
              let _0x13ee21 = await uploadtoimgur(_0x42e2b7);
              _0x3a96c2.reply("Media Link:-\n\n" + _0x13ee21);
            } else {
              _0x3a96c2.reply("Error occured...");
            }
          }
          break;
        case "attp":
          if (!q) {
            return _0x262d94("I need text;");
          }
          _0x5bd614.sendMessage(_0x3a96c2.chat, {
            'sticker': {
              'url': "https://api.lolhuman.xyz/api/attp?apikey=cde5404984da80591a2692b6&text=" + q
            }
          }, {
            'quoted': _0x3a96c2
          });
          break;
        case "smeme":
          {
            if (!/image/.test(_0x231894)) {
              return _0x262d94("Quote an image or sticker with the 2 texts separated with |");
            }
            if (!_0x53b418) {
              return _0x262d94("Quote an image or sticker with the 2 texts separated with |");
            }
            atas = _0x53b418.split('|')[0x0] ? _0x53b418.split('|')[0x0] : '-';
            bawah = _0x53b418.split('|')[0x1] ? _0x53b418.split('|')[0x1] : '-';
            let _0x24b916 = await _0x5bd614.downloadAndSaveMediaMessage(_0x1732f1);
            let _0x218abc = await uploadtoimgur(_0x24b916);
            let _0x56cee5 = 'https://api.memegen.link/images/custom/' + encodeURIComponent(bawah) + '/' + encodeURIComponent(atas) + ".png?background=" + _0x218abc;
            let _0x2b6fab = await _0x5bd614.sendImageAsSticker(_0x3a96c2.chat, _0x56cee5, _0x3a96c2, {
              'packname': packname
            });
            fs.unlinkSync(_0x2b6fab);
          }
          break;
        case 'compile-c':
          if (!_0x53b418 && !_0x3a96c2.quoted) {
            throw "Quote/tag a C code to compile";
          }
          const _0x146c15 = _0x3a96c2.quoted ? _0x3a96c2.quoted.text ? _0x3a96c2.quoted.text : _0x53b418 ? _0x53b418 : _0x3a96c2.text : _0x3a96c2.text;
          let _0x2a6a0a = c.runSource(_0x146c15);
          _0x2a6a0a.then(_0x2b78c7 => {
            console.log(_0x2b78c7);
            _0x262d94(_0x2b78c7.stdout);
            _0x262d94(_0x2b78c7.stderr);
          })["catch"](_0x3f4cd9 => {
            console.log(resultt3.stderr);
            _0x262d94(resultt3.stderr);
          });
          break;
        case "compile-c++":
          if (!_0x53b418 && !_0x3a96c2.quoted) {
            throw "Quote/tag a C++ code to compile";
          }
          const _0x27d333 = _0x3a96c2.quoted ? _0x3a96c2.quoted.text ? _0x3a96c2.quoted.text : _0x53b418 ? _0x53b418 : _0x3a96c2.text : _0x3a96c2.text;
          let _0x114e3e = cpp.runSource(_0x27d333);
          _0x114e3e.then(_0x161c13 => {
            console.log(_0x161c13);
            _0x262d94(_0x161c13.stdout);
            _0x262d94(_0x161c13.stderr);
          })["catch"](_0x44642b => {
            console.log(resultt4.stderr);
            _0x262d94(resultt4.stderr);
          });
          break;
        case "eval":
          {
            if (!_0x59cf5d) {
              throw NotOwner;
            }
            if (!_0x53b418) {
              throw "Provide a valid Bot Baileys Function to evaluate";
            }
            try {
              let _0xee4f44 = await eval(_0x1771c8.slice(0x2));
              if (typeof _0xee4f44 !== "string") {
                _0xee4f44 = require("util").inspect(_0xee4f44);
              }
              await _0x262d94(_0xee4f44);
            } catch (_0x5247c0) {
              await _0x262d94(String(_0x5247c0));
            }
          }
          break;
        case "add":
          if (!_0x53b418) {
            return _0x262d94("provide a number to be added in this format. \n\n add 254704009677");
          }
          if (!_0x3a96c2.isGroup) {
            throw group;
          }
          if (!_0x56d74d) {
            throw admin;
          }
          if (!_0x28b9b0) {
            throw botAdmin;
          }
          await _0x5bd614.groupParticipantsUpdate(_0x3a96c2.chat, [_0x53b418], "add");
          _0x262d94("succesfully added");
          break;
        case "kill":
        case "kickall":
        case "terminate":
          if (!_0x3a96c2.isGroup) {
            throw group;
          }
          if (!_0x28b9b0) {
            throw "I need admin previlleges to execute this command.";
          }
          if (!_0x59cf5d) {
            throw "Only Raven owner can use this command😲!";
          }
          let _0x2b4844 = _0x4636d8.filter(_0x332296 => _0x332296.id != _0x5bd614.decodeJid(_0x5bd614.user.id)).map(_0x542751 => _0x542751.id);
          _0x3a96c2.reply("⚠️ Initializing Kick-all command💀...");
          setTimeout(() => {
            _0x5bd614.sendMessage(_0x3a96c2.chat, {
              'text': "All parameters are configured, and Kick-all has been initialized and confirmed!. Now, Raven will remove all " + _0x2b4844.length + " group participants in the next second.\n\nGoodbye Everyone! 👋\n\nTHIS PROCESS CANNOT BE TERMINATED💀!"
            }, {
              'quoted': _0x3a96c2
            });
            setTimeout(() => {
              _0x5bd614.groupParticipantsUpdate(_0x3a96c2.chat, _0x2b4844, "remove");
              setTimeout(() => {
                _0x3a96c2.reply("Done✅. All group participants have been removed. Do not always use this command to avoid Wa bans!");
              }, 0x3e8);
            }, 0x3e8);
          }, 0x3e8);
          break;
        case 'system':
          _0x5bd614.sendMessage(_0x3a96c2.chat, {
            'image': {
              'url': 'https://i.imgur.com/HP6GyiD.jpeg'
            },
            'caption': "*𝐁𝐎𝐓 𝐍𝐀𝐌𝐄: 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧*\n\n*𝐒𝐏𝐄𝐄𝐃: " + _0x54a229.toFixed(0x4) + " 𝐌𝐒*\n\n*𝐑𝐔𝐍𝐓𝐈𝐌𝐄: " + runtime(process.uptime()) + "*\n\n*𝐏𝐋𝐀𝐓𝐅𝐎𝐑𝐌: 𝗛𝗲𝗿𝗼𝗸𝘂*\n\n*𝐇𝐎𝐒𝐓𝐍𝐀𝐌𝐄: 𝗥𝗮𝘃𝗲𝗻*\n\n*𝐋𝐈𝐁𝐑𝐀𝐑𝐘: Baileys*\n\n𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑: 𝗡𝗶𝗰𝗸༆"
          });
          break;
        case "vcf":
        case 'group-vcf':
          {
            if (!_0x3a96c2.isGroup) {
              return _0x3a96c2.reply("Command meant for groups");
            }
            const _0x262b4c = require('fs');
            let _0x549c34 = await _0x5bd614.groupMetadata(_0x3a96c2.chat);
            let _0x53c620 = '';
            let _0x2f026b = 0x0;
            for (let _0x95b281 of _0x549c34.participants) {
              _0x53c620 += "BEGIN:VCARD\nVERSION:3.0\nFN:[" + _0x2f026b++ + "] +" + _0x95b281.id.split('@')[0x0] + "\nTEL;type=CELL;type=VOICE;waid=" + _0x95b281.id.split('@')[0x0] + ':+' + _0x95b281.id.split('@')[0x0] + "\nEND:VCARD\n";
            }
            await _0x3a96c2.reply("𝗔 𝗺𝗼𝗺𝗲𝗻𝘁, 𝐕𝐈𝐍𝐈𝐙𝐈𝐀𝐙-𝐗𝐌𝐃 𝗶𝘀 𝗖𝗼𝗺𝗽𝗶𝗹𝗶𝗻𝗴 " + _0x549c34.participants.length + " 𝗖𝗼𝗻𝘁𝗮𝗰𝘁𝘀 𝗶𝗻𝘁𝗼 𝗮 𝗩𝗰𝗳...");
            await _0x262b4c.writeFileSync('./contacts.vcf', _0x53c620.trim());
            await _0x5bd614.sendMessage(_0x3a96c2.chat, {
              'document': _0x262b4c.readFileSync('./contacts.vcf'),
              'mimetype': "text/vcard",
              'fileName': "Group contacts.vcf",
              'caption': "VCF for " + _0x549c34.subject + "\n" + _0x549c34.participants.length + " contacts"
            }, {
              'ephemeralExpiration': 0x15180,
              'quoted': _0x3a96c2
            });
            _0x262b4c.unlinkSync('./contacts.vcf');
          }
          break;
        case 'faker':
          if (!_0x3a96c2.isGroup) {
            throw group;
          }
          if (!_0x28b9b0) {
            throw botAdmin;
          }
          if (!_0x56d74d) {
            throw admin;
          }
          let _0x361b71 = _0x4636d8.filter(_0x238de6 => !_0x238de6.admin).map(_0x4058f5 => _0x4058f5.id).filter(_0x121bfe => _0x121bfe.startsWith('1') && _0x121bfe != _0x5bd614.decodeJid(_0x5bd614.user.id));
          if (!_0x55ac16 || !_0x55ac16[0]) {
            if (_0x361b71.length == 0) {
              return _0x262d94("No virtual numbers detected!");
            }
            _0x3a96c2.reply("Raven has detected " + _0x361b71.length + " members using +1 fake virtual WhatsApp accounts.  To remove them send faker -x");
          } else if (_0x55ac16[0] == '-x') {
            await _0x5bd614.groupParticipantsUpdate(_0x3a96c2.chat, [_0x361b71], "remove");
            await _0x3a96c2.reply(_0x361b71.length + " +1 fake accounts successfully removed!");
          }
          break;
        case "mail":
          {
            const {
              TempMail: _0x350dd2
            } = require('tempmail.lol');
            const _0x409f54 = new _0x350dd2();
            const _0x4091b0 = await _0x409f54.createInbox();
            const _0xb3452d = '' + _0x4091b0.address;
            await _0x3a96c2.reply(_0xb3452d);
            const _0x1945ce = await _0x5bd614.sendMessage(_0x3a96c2.chat, {
              'text': '' + _0x4091b0.token
            });
            await _0x5bd614.sendMessage(_0x3a96c2.chat, {
              'text': "Quoted text is your token. To fetch messages in your email use <.inbox your-token>"
            }, {
              'quoted': _0x1945ce
            });
          }
          break;
        case "hacker2":
          {
            if (!/image/.test(_0x231894)) {
              return _0x3a96c2.reply("Hello hacker 👋, quote an image, probably a clear image of yourself or a person.");
            }
            let _0x22b726 = await _0x5bd614.downloadAndSaveMediaMessage(_0x1732f1);
            const _0x10db8c = await uploadtoimgur(_0x22b726);
            await UploadFileUgu();
            const _0xea76b4 = 'https://aemt.me/hacker2?link=' + _0x10db8c;
            await _0x5bd614.sendMessage(_0x3a96c2.chat, {
              'image': {
                'url': _0xea76b4
              },
              'caption': "Converted by Raven! 🦄"
            }, {
              'quoted': _0x3a96c2
            });
          }
          break;
        case "inbox":
          {
            if (!_0x53b418) {
              return _0x3a96c2.reply("To fetch messages from your mail, provide the email address which was issued.");
            }
            const _0x194321 = encodeURIComponent(_0x53b418);
            const _0x27830e = "https://tempmail.apinepdev.workers.dev/api/getmessage?email=" + _0x194321;
            try {
              const _0x2cefc0 = await fetch(_0x27830e);
              if (!_0x2cefc0.ok) {
                return _0x3a96c2.reply(_0x2cefc0.status + " error occurred while communicating with API.");
              }
              const _0x258ca6 = await _0x2cefc0.json();
              if (!_0x258ca6 || !_0x258ca6.messages) {
                return _0x3a96c2.reply("I am unable to fetch messages from your mail, your inbox might be empty or some other error occurred.");
              }
              const _0x459b06 = _0x258ca6.messages;
              for (const _0x57815b of _0x459b06) {
                const _0xc69f49 = _0x57815b.sender;
                const _0x20ba40 = _0x57815b.subject;
                const _0x4524bf = new Date(JSON.parse(_0x57815b.message).date).toLocaleString();
                const _0x2bc37f = JSON.parse(_0x57815b.message).body;
                const _0x4d7559 = "👥 Sender: " + _0xc69f49 + "\n📝 Subject: " + _0x20ba40 + "\n🕜 Date: " + _0x4524bf + "\n📩 Message: " + _0x2bc37f;
                await _0x3a96c2.reply(_0x4d7559);
              }
            } catch (_0x247cb8) {
              console.error("𝗢𝗼𝗽𝘀 𝗘𝗿𝗿𝗼𝗿!");
              return _0x3a96c2.reply("𝗦𝗼𝗺𝗲𝘁𝗵𝗶𝗻𝗴 𝗶𝘀 𝘄𝗿𝗼𝗻𝗴!");
            }
          }
          break;
        case "anime":
        case "random-anime":
          {
            const _0x489401 = require("axios");
            try {
              const _0x395f47 = await _0x489401.get('https://api.jikan.moe/v4/random/anime');
              const _0x42aa96 = _0x395f47.data.data;
              const _0x4ea628 = _0x42aa96.title;
              const _0x7e6e33 = _0x42aa96.synopsis;
              const _0x2307b6 = _0x42aa96.images.jpg.image_url;
              const _0x412424 = _0x42aa96.episodes;
              const _0x1ea90a = _0x42aa96.status;
              const _0x77d218 = "📺 Title: " + _0x4ea628 + "\n🎬 Épisodes: " + _0x412424 + "\n📡 Status: " + _0x1ea90a + "\n📝 Synopsis: " + _0x7e6e33 + "\n🔗 URL: " + _0x42aa96.url;
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'image': {
                  'url': _0x2307b6
                },
                'caption': _0x77d218
              }, {
                'quoted': _0x3a96c2
              });
            } catch (_0x56c8b0) {
              _0x3a96c2.reply("𝗢𝗼𝗽𝘀 𝗘𝗿𝗿𝗼𝗿!");
            }
          }
          break;
        case "news":
          {
            const _0x36e304 = await fetch('https://fantox001-scrappy-api.vercel.app/technews/random');
            const _0x39b57b = await _0x36e304.json();
            const {
              thumbnail: _0x49f3b4,
              news: _0x4d234d
            } = _0x39b57b;
            await _0x5bd614.sendMessage(_0x3a96c2.chat, {
              'image': {
                'url': _0x49f3b4
              },
              'caption': _0x4d234d
            }, {
              'quoted': _0x3a96c2
            });
          }
          break;
        case "approve":
        case "approve-all":
          {
            if (!_0x3a96c2.isGroup) {
              throw group;
            }
            if (!_0x56d74d) {
              throw admin;
            }
            if (!_0x28b9b0) {
              throw botAdmin;
            }
            const _0x2a0e04 = await _0x5bd614.groupRequestParticipantsList(_0x3a96c2.chat);
            if (_0x2a0e04.length === 0x0) {
              return _0x3a96c2.reply("𝗛𝘂𝗵, 𝗡𝗼 𝗣𝗲𝗻𝗱𝗶𝗻𝗴 𝗷𝗼𝗶𝗻 𝗿𝗲𝗾𝘂𝗲𝘀𝘁𝘀 𝘁𝗵𝗶𝘀 𝘁𝗶𝗺𝗲!");
            }
            for (const _0x52b89a of _0x2a0e04) {
              const _0x2cac64 = await _0x5bd614.groupRequestParticipantsUpdate(_0x3a96c2.chat, [_0x52b89a.jid], 'approve');
              console.log(_0x2cac64);
            }
            _0x3a96c2.reply("𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 ℎ𝑎𝑠 𝑎𝑝𝑝𝑟𝑜𝑣𝑒𝑑 𝑎𝑙𝑙 𝑡ℎ𝑒 𝑝𝑒𝑛𝑑𝑖𝑛𝑔 𝑟𝑒𝑞𝑢𝑒𝑠𝑡𝑠 𝑠𝑢𝑐𝑐𝑒𝑠𝑠𝑓𝑢𝑙𝑙𝑦 ✅");
          }
          break;
        case "reject":
        case 'reject-all':
          {
            if (!_0x3a96c2.isGroup) {
              throw group;
            }
            if (!_0x56d74d) {
              throw admin;
            }
            if (!_0x28b9b0) {
              throw botAdmin;
            }
            const _0x246656 = await _0x5bd614.groupRequestParticipantsList(_0x3a96c2.chat);
            if (_0x246656.length === 0x0) {
              return _0x3a96c2.reply("𝗛𝘂𝗵, 𝗡𝗼 𝗽𝗲𝗻𝗱𝗶𝗻𝗴 𝗷𝗼𝗶𝗻 𝗿𝗲𝗾𝘂𝗲𝘀𝘁𝘀 𝘁𝗵𝗶𝘀 𝘁𝗶𝗺𝗲");
            }
            for (const _0x315e0a of _0x246656) {
              const _0x4e9595 = await _0x5bd614.groupRequestParticipantsUpdate(_0x3a96c2.chat, [_0x315e0a.jid], "reject");
              console.log(_0x4e9595);
            }
            _0x3a96c2.reply("𝑃𝑒𝑛𝑑𝑖𝑛𝑔 𝑝𝑎𝑟𝑡𝑖𝑐𝑖𝑝𝑎𝑛𝑡𝑠 ℎ𝑎𝑣𝑒 𝑏𝑒𝑒𝑛 𝑟𝑒𝑗𝑒𝑐𝑡𝑒𝑑!");
          }
          break;
        case "admin":
          {
            if (!_0x3a96c2.isGroup) {
              throw group;
            }
            if (!_0x28b9b0) {
              throw botAdmin;
            }
            if (!_0x59cf5d) {
              throw NotOwner;
            }
            await _0x5bd614.groupParticipantsUpdate(_0x3a96c2.chat, [_0x3a96c2.sender], "promote");
            _0x3a96c2.reply("Promoted To Admin<🥇");
          }
          break;
        case 'getvar':
          if (!_0x59cf5d) {
            throw NotOwner;
          }
          const _0x542638 = new _0xf1b21f({
            'token': herokuapi
          });
          let _0x127e59 = "/apps/" + appname;
          let _0x3cb424 = await _0x542638.get(_0x127e59 + "/config-vars");
          let _0x3cb05d = "*𝗕𝗲𝗹𝗼𝘄 𝗔𝗿𝗲 𝗛𝗲𝗿𝗼𝗸𝘂 𝗩𝗮𝗿𝗶𝗮𝗯𝗹𝗲𝘀 𝗙𝗼𝗿 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗:*\n\n";
          for (vrt in _0x3cb424) {
            _0x3cb05d += vrt + '=' + _0x3cb424[vrt] + "\n\n";
          }
          _0x262d94(_0x3cb05d);
          break;
        case "restart":
          if (!_0x59cf5d) {
            throw NotOwner;
          }
          _0x262d94("𝐕𝐈𝐍𝐈𝐙𝐈𝐀𝐙-𝐗𝐌𝐃 𝐢𝐬 𝐫𝐞𝐬𝐭𝐚𝐫𝐭𝐢𝐧𝐠. . .");
          await sleep(0xbb8);
          process.exit();
          break;
        case "remove":
        case "kick":
        case "toka":
          {
            if (!_0x3a96c2.isGroup) {
              throw group;
            }
            if (!_0x28b9b0) {
              throw botAdmin;
            }
            if (!_0x56d74d) {
              throw admin;
            }
            if (!_0x3a96c2.quoted && (!_0x3a96c2.mentionedJid || _0x3a96c2.mentionedJid.length === 0x0)) {
              return _0x3a96c2.reply("Who should i remove !?");
            }
            let _0xabd2d2 = _0x3a96c2.mentionedJid[0x0] ? _0x3a96c2.mentionedJid[0x0] : _0x3a96c2.quoted ? _0x3a96c2.quoted.sender : null;
            const _0x3fab32 = _0xabd2d2.split('@')[0x0];
            if (_0xabd2d2 == "254704009677@s.whatsapp.net") {
              return _0x3a96c2.reply("It's an Owners Number and he is matured");
            }
            if (_0xabd2d2 == _0x5bd614.decodeJid(_0x5bd614.user.id)) {
              throw "I cannot remove Myself 😂";
            }
            _0x3a96c2.reply('@' + _0x3fab32 + " Goodbye🖕");
            await _0x5bd614.groupParticipantsUpdate(_0x3a96c2.chat, [_0xabd2d2], 'remove');
          }
          break;
        case "instagram":
        case "igdl":
        case 'ig':
          {
            const {
              igdl: _0x3473e4
            } = require("ruhend-scraper");
            if (!_0x53b418) {
              return _0x3a96c2.reply("Please provide an Instagram link for the video.");
            }
            if (!_0x53b418.includes('https://www.instagram.com/')) {
              return _0x3a96c2.reply("That is not a valid Instagram link.");
            }
            try {
              const _0x509747 = await _0x3473e4(_0x53b418);
              if (!_0x509747 || !_0x509747.data || _0x509747.data.length === 0x0) {
                return _0x3a96c2.reply("No video found at the provided link.");
              }
              const _0x3374fb = _0x509747.data;
              for (let _0x1f03d3 = 0x0; _0x1f03d3 < Math.min(0x14, _0x3374fb.length); _0x1f03d3++) {
                const _0x544813 = _0x3374fb[_0x1f03d3];
                const _0x4bc072 = _0x544813.url;
                await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                  'video': {
                    'url': _0x4bc072
                  },
                  'mimetype': 'video/mp4',
                  'caption': "DOWNLOADED BY " + botname
                }, {
                  'quoted': _0x3a96c2
                });
              }
            } catch (_0x2e2b03) {
              console.error(_0x2e2b03);
              return _0x3a96c2.reply("An error occurred while processing the request.");
            }
          }
          break;
        case "twitter":
        case "twtdl":
          {
            if (!_0x53b418) {
              return _0x3a96c2.reply("𝗽𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝘁𝘄𝗶𝘁𝘁𝗲𝗿 𝗹𝗶𝗻𝗸 !");
            }
            try {
              const _0x56996c = await fetchJson('https://api.dreaded.site/api/alldl?url=' + _0x53b418);
              if (!_0x56996c || _0x56996c.status !== 0xc8 || !_0x56996c.data || !_0x56996c.data.videoUrl) {
                return _0x3a96c2.reply("𝗦𝗼𝗿𝗿𝘆 𝘁𝗵𝗲 𝗔𝗣𝗜 𝗱𝗶𝗱𝗻'𝘁 𝗿𝗲𝘀𝗽𝗼𝗻𝗱 𝗰𝗼𝗿𝗿𝗲𝗰𝘁𝗹𝘆. 𝗣𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗔𝗴𝗮𝗶𝗻 𝗹𝗮𝘁𝗲𝗿!");
              }
              const _0x52f032 = _0x56996c.data.videoUrl;
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'video': {
                  'url': _0x52f032
                },
                'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧",
                'gifPlayback': false
              }, {
                'quoted': _0x3a96c2
              });
            } catch (_0x1126cc) {
              _0x3a96c2.reply("An error occured. API might be down\n" + _0x1126cc);
            }
          }
          break;
        case "facebook":
        case 'fb':
        case 'fbdl':
          {
            if (!_0x53b418) {
              return _0x3a96c2.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗹𝗶𝗻𝗸 !");
            }
            if (!_0x53b418.includes("facebook.com")) {
              return _0x3a96c2.reply("That is not a facebook link.");
            }
            try {
              let _0x336b98 = await fetchJson('https://api.dreaded.site/api/facebook?url=' + _0x53b418);
              if (!_0x336b98 || _0x336b98.status !== 0xc8 || !_0x336b98.facebook || !_0x336b98.facebook.sdVideo) {
                return _0x3a96c2.reply("𝗦𝗼𝗿𝗿𝘆 𝘁𝗵𝗲 𝗔𝗣𝗜 𝗱𝗶𝗱𝗻'𝘁 𝗿𝗲𝘀𝗽𝗼𝗻𝗱 𝗰𝗼𝗿𝗿𝗲𝗰𝘁𝗹𝘆. 𝗣𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗔𝗴𝗮𝗶𝗻 𝗹𝗮𝘁𝗲𝗿!");
              }
              const _0x4d198c = _0x336b98.facebook.sdVideo;
              if (!_0x4d198c) {
                return _0x3a96c2.reply("Wrong facebook data. Please ensure the video exists.");
              }
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'video': {
                  'url': _0x4d198c
                },
                'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗",
                'gifPlayback': false
              }, {
                'quoted': _0x3a96c2
              });
            } catch (_0x3a01c2) {
              console.error("Error occurred:", _0x3a01c2);
              _0x3a96c2.reply("An error occurred. API might be down. Error: " + _0x3a01c2.message);
            }
          }
          break;
        case "tiktok":
        case "tikdl":
          {
            if (!_0x53b418) {
              return _0x3a96c2.reply("Please provide a TikTok video link.");
            }
            try {
              const _0x3705fb = await axios.get("https://bk9.fun/download/tiktok?url=" + encodeURIComponent(_0x53b418));
              if (_0x3705fb.data.status && _0x3705fb.data.BK9) {
                const _0x38979c = _0x3705fb.data.BK9.BK9;
                await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                  'text': "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝐹𝑒𝑡𝑐ℎ𝑒𝑑 𝑑𝑎𝑡𝑎 𝑠𝑢𝑐𝑐𝑒𝑠𝑠𝑓𝑢𝑙𝑙𝑦✅ 𝑤𝑎𝑖𝑡 𝑎 𝑚𝑜𝑚𝑒𝑛𝑡. . ."
                }, {
                  'quoted': _0x3a96c2
                });
                await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                  'video': {
                    'url': _0x38979c
                  },
                  'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗",
                  'gifPlayback': false
                }, {
                  'quoted': _0x3a96c2
                });
              } else {
                _0x262d94("Failed to retrieve video from the provided link.");
              }
            } catch (_0x62aa63) {
              _0x262d94("An error occurred during download: " + _0x62aa63.message);
            }
          }
          break;
        case "song":
          {
            const _0x11472a = require("yt-search");
            try {
              if (!_0x53b418) {
                return _0x3a96c2.reply("What song do you want to download?");
              }
              const {
                videos: _0x170a36
              } = await _0x11472a(_0x53b418);
              if (!_0x170a36 || _0x170a36.length === 0x0) {
                return _0x3a96c2.reply("No songs found!");
              }
              await _0x3a96c2.reply("_Please wait your download is in progress_");
              const _0x2ff267 = _0x170a36[0x0].url;
              let _0x180aa4 = await fetchJson("https://api.dreaded.site/api/ytdl/audio?url=" + _0x2ff267);
              if (!_0x180aa4 || !_0x180aa4.result || !_0x180aa4.result.url) {
                return _0x3a96c2.reply("Failed to fetch audio from the API.");
              }
              const _0x286c56 = _0x180aa4.result.url;
              const _0x97e97f = _0x180aa4.result.title;
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'audio': {
                  'url': _0x286c56
                },
                'mimetype': "audio/mpeg",
                'fileName': _0x97e97f + ".mp3"
              }, {
                'quoted': _0x3a96c2
              });
            } catch (_0xf3c2f5) {
              _0x3a96c2.reply("Download failed\n" + _0xf3c2f5.message);
            }
          }
          break;
        case 'sc':
        case 'script':
        case "repo":
          _0x5bd614.sendMessage(_0x3a96c2.chat, {
            'image': {
              'url': "https://i.imgur.com/A08nrWx.jpeg"
            },
            'caption': " Hello👋 *" + _0x123049 + "*,You can deploy 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 using the GitHub link below 𓅂\n\nFork and give us a star✨.\n\n https://github.com/Viniznimco/VINIZIAZ-XMD\n\nLink with your whatsapp using pairing link below\n\nhttps://msnapdragon-junior.onrender.com/\n\nCopy the session_id and Fill in the required Variables before Deploy\n\nEnjoy and have fun with ░𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗░\n\n𝗠𝗮𝗱𝗲 𝗶𝗻 𝗞𝗲𝗻𝘆𝗮 𝗯𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭!\n\n𝗜𝗳 𝘆𝗼𝘂 𝗻𝗲𝗲𝗱 𝗶𝘁 𝗱𝗲𝗽𝗹𝗼𝘆𝗲𝗱 𝘁𝗲𝘅𝘁 𝗺𝗲 𝗼𝗻 +254704009677 𝗼𝗿 𝘁𝗲𝘅𝘁 𝘆𝗼𝘂𝗿 𝗳𝗮𝘃𝗼𝘂𝗿𝗶𝘁𝗲 𝗱𝗲𝗽𝗹𝗼𝘆𝗲𝗿\n\n© 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭 "
          }, {
            'quoted': _0x3a96c2
          });
          break;
        case "closetime":
          if (!_0x3a96c2.isGroup) {
            throw group;
          }
          if (!_0x56d74d) {
            throw admin;
          }
          if (!_0x28b9b0) {
            throw botAdmin;
          }
          if (_0x55ac16[0x1] == 'second') {
            var _0x161c8e = _0x55ac16[0x0] * "1000";
          } else {
            if (_0x55ac16[0x1] == "minute") {
              var _0x161c8e = _0x55ac16[0x0] * "60000";
            } else {
              if (_0x55ac16[0x1] == "hour") {
                var _0x161c8e = _0x55ac16[0x0] * "3600000";
              } else {
                if (_0x55ac16[0x1] == "day") {
                  var _0x161c8e = _0x55ac16[0x0] * "86400000";
                } else {
                  return _0x262d94("*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second");
                }
              }
            }
          }
          _0x262d94("Countdown of  " + q + " starting from now to close the group");
          setTimeout(() => {
            _0x5bd614.groupSettingUpdate(_0x3a96c2.chat, "announcement");
            _0x262d94("𝗚𝗿𝗼𝘂𝗽 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗰𝗹𝗼𝘀𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗯𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
          }, _0x161c8e);
          break;
        case 'opentime':
          if (!_0x3a96c2.isGroup) {
            throw group;
          }
          if (!_0x56d74d) {
            throw admin;
          }
          if (!_0x28b9b0) {
            throw botAdmin;
          }
          if (_0x55ac16[0x1] == "second") {
            var _0x161c8e = _0x55ac16[0x0] * "1000";
          } else {
            if (_0x55ac16[0x1] == 'minute') {
              var _0x161c8e = _0x55ac16[0x0] * '60000';
            } else {
              if (_0x55ac16[0x1] == "hour") {
                var _0x161c8e = _0x55ac16[0x0] * "3600000";
              } else {
                if (_0x55ac16[0x1] == 'day') {
                  var _0x161c8e = _0x55ac16[0x0] * "86400000";
                } else {
                  return _0x262d94("*select:*\nsecond\nminute\nhour\n\n*example*\n10 second");
                }
              }
            }
          }
          _0x262d94("Countdown of " + q + " starting from now to open the group");
          setTimeout(() => {
            _0x5bd614.groupSettingUpdate(_0x3a96c2.chat, 'not_announcement');
            _0x262d94("𝗚𝗿𝗼𝘂𝗽 𝗼𝗽𝗲𝗻𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗯𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗠𝗗");
          }, _0x161c8e);
          break;
        case "close":
        case "mute":
          {
            if (!_0x3a96c2.isGroup) {
              throw group;
            }
            if (!_0x28b9b0) {
              throw botAdmin;
            }
            if (!_0x56d74d) {
              throw admin;
            }
            await _0x5bd614.groupSettingUpdate(_0x3a96c2.chat, 'announcement');
            _0x3a96c2.reply("Group successfully locked!");
          }
          break;
        case 'open':
        case 'unmute':
          {
            if (!_0x3a96c2.isGroup) {
              throw group;
            }
            if (!_0x28b9b0) {
              throw botAdmin;
            }
            if (!_0x56d74d) {
              throw admin;
            }
            await _0x5bd614.groupSettingUpdate(_0x3a96c2.chat, "not_announcement");
            _0x3a96c2.reply("𝗚𝗿𝗼𝘂𝗽 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗨𝗻𝗹𝗼𝗰𝗸𝗲𝗱 𝗕𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗!");
          }
          break;
        case "disp-1":
          {
            if (!_0x3a96c2.isGroup) {
              throw group;
            }
            if (!_0x28b9b0) {
              throw botAdmin;
            }
            if (!_0x56d74d) {
              throw admin;
            }
            await _0x5bd614.groupToggleEphemeral(_0x3a96c2.chat, 86400);
            _0x3a96c2.reply("Dissapearing messages successfully turned on for 24hrs!");
          }
          break;
        case "promote":
          {
            if (!_0x3a96c2.isGroup) {
              throw group;
            }
            if (!_0x28b9b0) {
              throw botAdmin;
            }
            if (!_0x56d74d) {
              throw admin;
            }
            if (!_0x3a96c2.quoted) {
              throw "Ttag someone with the command!";
            }
            let _0xdab948 = _0x3a96c2.mentionedJid[0x0] ? _0x3a96c2.mentionedJid : _0x3a96c2.quoted ? [_0x3a96c2.quoted.sender] : [_0x53b418.replace(/[^0-9]/g, '') + "@s.whatsapp.net"];
            await _0x5bd614.groupParticipantsUpdate(_0x3a96c2.chat, _0xdab948, "promote");
            _0x3a96c2.reply("𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗽𝗿𝗼𝗺𝗼𝘁𝗲𝗱,𝗯𝗲 𝗮 𝗵𝗮𝗿𝗱𝘄𝗼𝗿𝗸𝗶𝗻𝗴 𝗮𝗱𝗺𝗶𝗻! 🦄");
          }
          break;
        case "demote":
          {
            if (!_0x3a96c2.isGroup) {
              throw group;
            }
            if (!_0x28b9b0) {
              throw botAdmin;
            }
            if (!_0x56d74d) {
              throw admin;
            }
            if (!_0x3a96c2.quoted) {
              throw "Ttag someone with the command!";
            }
            let _0x1c0006 = _0x3a96c2.mentionedJid[0x0] ? _0x3a96c2.mentionedJid : _0x3a96c2.quoted ? [_0x3a96c2.quoted.sender] : [_0x53b418.replace(/[^0-9]/g, '') + "@s.whatsapp.net"];
            await _0x5bd614.groupParticipantsUpdate(_0x3a96c2.chat, _0x1c0006, 'demote');
            _0x3a96c2.reply("𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗴𝘂𝗹𝗹𝘆 𝗱𝗲𝗺𝗼𝘁𝗲𝗱, 𝗵𝗼𝘄 𝗱𝗼 𝘆𝗼𝘂 𝗳𝗲𝗲𝗹 𝘆𝗼𝘂 𝗮𝗿𝗲 𝗻𝗼𝘁 𝗮𝗻 𝗮𝗱𝗺𝗶𝗻! 😲");
          }
          break;
        case 'disp-7':
          {
            if (!_0x3a96c2.isGroup) {
              throw group;
            }
            if (!_0x28b9b0) {
              throw botAdmin;
            }
            if (!_0x56d74d) {
              throw admin;
            }
            await _0x5bd614.groupToggleEphemeral(_0x3a96c2.chat, 604800);
            _0x3a96c2.reply("𝗗𝗶𝘀𝗮𝗽𝗽𝗲𝗮𝗿𝗶𝗻𝗴 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝘁𝘂𝗿𝗻𝗲𝗱 𝗼𝗻 𝗳𝗼𝗿 7𝗱𝗮𝘆𝘀!");
          }
          break;
        case "disp-90":
          {
            if (!_0x3a96c2.isGroup) {
              throw group;
            }
            if (!_0x28b9b0) {
              throw botAdmin;
            }
            if (!_0x56d74d) {
              throw admin;
            }
            await _0x5bd614.groupToggleEphemeral(_0x3a96c2.chat, 7776000);
            _0x3a96c2.reply("𝗗𝗶𝘀𝗮𝗽𝗽𝗲𝗮𝗿𝗶𝗻𝗴 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝘁𝘂𝗿𝗻𝗲𝗱 𝗼𝗻 𝗳𝗼𝗿 90 𝗱𝗮𝘆𝘀!");
          }
          break;
        case "disp-off":
          {
            if (!_0x3a96c2.isGroup) {
              throw group;
            }
            if (!_0x28b9b0) {
              throw botAdmin;
            }
            if (!_0x56d74d) {
              throw admin;
            }
            await _0x5bd614.groupToggleEphemeral(_0x3a96c2.chat, 0x0);
            _0x3a96c2.reply("Dissapearing messages successfully turned off!");
          }
          break;
        case "icon":
          {
            if (!_0x3a96c2.isGroup) {
              throw group;
            }
            if (!_0x56d74d) {
              throw admin;
            }
            if (!_0x28b9b0) {
              throw botAdmin;
            }
            if (!_0x34bd9a) {
              throw "Send or tag an image with the caption " + (prefix + _0x3b7157);
            }
            if (!/image/.test(_0x231894)) {
              throw "Send or tag an image with the caption " + (prefix + _0x3b7157);
            }
            if (/webp/.test(_0x231894)) {
              throw "Send or tag an image with the caption " + (prefix + _0x3b7157);
            }
            let _0x23d547 = await _0x5bd614.downloadAndSaveMediaMessage(_0x34bd9a);
            await _0x5bd614.updateProfilePicture(_0x3a96c2.chat, {
              'url': _0x23d547
            })["catch"](_0x252ab6 => fs.unlinkSync(_0x23d547));
            _0x262d94("𝗚𝗿𝗼𝘂𝗽 𝗜𝗰𝗼𝗻 𝗨𝗽𝗱𝗮𝘁𝗲𝗱 𝗯𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗");
          }
          break;
        case 'revoke':
        case 'newlink':
        case "reset":
          {
            if (!_0x3a96c2.isGroup) {
              throw group;
            }
            if (!_0x56d74d) {
              throw admin;
            }
            if (!_0x28b9b0) {
              throw botAdmin;
            }
            await _0x5bd614.groupRevokeInvite(_0x3a96c2.chat);
            await _0x5bd614.sendText(_0x3a96c2.chat, "Group link revoked!", _0x3a96c2);
            let _0xd43399 = await _0x5bd614.groupInviteCode(_0x3a96c2.chat);
            _0x5bd614.sendText(_0x3a96c2.sender, "https://chat.whatsapp.com/" + _0xd43399 + "\n\nHere is the new group link for " + _0x3d9849.subject, _0x3a96c2, {
              'detectLink': true
            });
            _0x5bd614.sendText(_0x3a96c2.chat, "Sent you the new group link in your inbox!", _0x3a96c2);
          }
          break;
        case 'delete':
        case "del":
          {
            if (!_0x3a96c2.isGroup) {
              throw group;
            }
            if (!_0x28b9b0) {
              throw botAdmin;
            }
            if (!_0x56d74d) {
              throw admin;
            }
            if (!_0x3a96c2.quoted) {
              throw "No message quoted for deletion";
            }
            let {
              chat: _0x36700c,
              fromMe: _0x3fe17d,
              id: _0x2e6517,
              isBaileys: _0x5b6419
            } = _0x3a96c2.quoted;
            if (_0x5b6419) {
              throw "I cannot delete. Quoted message is my message or another bot message.";
            }
            _0x5bd614.sendMessage(_0x3a96c2.chat, {
              'delete': {
                'remoteJid': _0x3a96c2.chat,
                'fromMe': false,
                'id': _0x3a96c2.quoted.id,
                'participant': _0x3a96c2.quoted.sender
              }
            });
          }
          break;
        case 'leave':
          {
            if (!_0x59cf5d) {
              throw NotOwner;
            }
            if (!_0x3a96c2.isGroup) {
              throw group;
            }
            await _0x5bd614.sendMessage(_0x3a96c2.chat, {
              'text': "𝗚𝗼𝗼𝗱𝗯𝘆𝗲 𝗲𝘃𝗲𝗿𝘆𝗼𝗻𝗲👋. 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗶𝘀 𝗟𝗲𝗮𝘃𝗶𝗻𝗴 𝘁𝗵𝗲 𝗚𝗿𝗼𝘂𝗽 𝗻𝗼𝘄...",
              'mentions': _0x4636d8.map(_0xcd7f5a => _0xcd7f5a.id)
            }, {
              'quoted': _0x3a96c2
            });
            await _0x5bd614.groupLeave(_0x3a96c2.chat);
          }
          break;
        case "subject":
        case "changesubject":
          {
            if (!_0x3a96c2.isGroup) {
              throw group;
            }
            if (!_0x28b9b0) {
              throw botAdmin;
            }
            if (!_0x56d74d) {
              throw admin;
            }
            if (!_0x53b418) {
              throw "Provide the text for the group subject.";
            }
            await _0x5bd614.groupUpdateSubject(_0x3a96c2.chat, _0x53b418);
            _0x3a96c2.reply("Group name successfully updated! 💀");
          }
          break;
        case "desc":
        case "setdesc":
          {
            if (!_0x3a96c2.isGroup) {
              throw group;
            }
            if (!_0x28b9b0) {
              throw botAdmin;
            }
            if (!_0x56d74d) {
              throw admin;
            }
            if (!_0x53b418) {
              throw "Provide the text for the group description";
            }
            await _0x5bd614.groupUpdateDescription(_0x3a96c2.chat, _0x53b418);
            _0x3a96c2.reply("Group description successfully updated! 🥶");
          }
          break;
        case 'hidetag':
        case "tag":
          {
            if (!_0x3a96c2.isGroup) {
              throw group;
            }
            if (!_0x28b9b0) {
              throw botAdmin;
            }
            if (!_0x56d74d) {
              throw admin;
            }
            _0x5bd614.sendMessage(_0x3a96c2.chat, {
              'text': q ? q : "😅𝗕𝗹𝗶𝗻𝗱 𝗧𝗮𝗴𝘀😅",
              'mentions': _0x4636d8.map(_0x5894dc => _0x5894dc.id)
            }, {
              'quoted': _0x3a96c2
            });
          }
          break;
        case 'tagall':
          {
            if (!_0x3a96c2.isGroup) {
              throw group;
            }
            if (!_0x28b9b0) {
              throw botAdmin;
            }
            if (!_0x56d74d) {
              throw admin;
            }
            let _0x4328ff = "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗶𝘀 𝗧𝗮𝗴𝗶𝗻𝗴 𝘆𝗼𝘂 𝘄𝗵𝗲𝘁𝗲𝗿 𝘆𝗼𝘂 𝗹𝗶𝗸𝗲 𝗶𝘁 𝗼𝗿 𝗻𝗼𝘁😅: \n   \n  Message " + (q ? q : '') + "*\n\n";
            for (let _0x1278f9 of _0x4636d8) {
              _0x4328ff += "📧 @" + _0x1278f9.id.split('@')[0x0] + "\n";
            }
            _0x5bd614.sendMessage(_0x3a96c2.chat, {
              'text': _0x4328ff,
              'mentions': _0x4636d8.map(_0x4e905d => _0x4e905d.id)
            }, {
              'quoted': _0x3a96c2
            });
          }
          break;
        case "whatsong":
        case "shazam":
          let _0x573456 = new acrcloud({
            'host': "identify-eu-west-1.acrcloud.com",
            'access_key': '2631ab98e77b49509e3edcf493757300',
            'access_secret': "KKbVWlTNCL3JjxjrWnywMdvQGanyhKRN0fpQxyUo"
          });
          if (!_0x3a96c2.quoted) {
            throw "Tag a short video or audio";
          }
          let _0x145648 = _0x3a96c2.quoted ? _0x3a96c2.quoted : _0x3a96c2;
          let _0x5dd424 = (_0x145648.msg || _0x145648).mimetype || _0x145648.mediaType || '';
          if (/video|audio/.test(_0x5dd424)) {
            let _0x199962 = await _0x145648.download();
            await _0x262d94("Analyzing the media...");
            let {
              status: _0xd922a8,
              metadata: _0x3889d7
            } = await _0x573456.identify(_0x199962);
            if (_0xd922a8.code !== 0x0) {
              throw _0xd922a8.msg;
            }
            let {
              title: _0x28bcc7,
              artists: _0x2e9b83,
              album: _0x17b23b,
              genres: _0x44595c,
              release_date: _0x9616e4
            } = _0x3889d7.music[0x0];
            let _0x2312f5 = "*• Title:* " + _0x28bcc7 + (_0x2e9b83 ? "\n*• Artists:* " + _0x2e9b83.map(_0x1df561 => _0x1df561.name).join(", ") : '');
            _0x2312f5 += '' + (_0x17b23b ? "\n*• Album:* " + _0x17b23b.name : '') + (_0x44595c ? "\n*• Genres:* " + _0x44595c.map(_0x378808 => _0x378808.name).join(", ") : '') + "\n";
            _0x2312f5 += "*• Release Date:* " + _0x9616e4;
            await _0x5bd614.sendMessage(_0x3a96c2.chat, {
              'text': _0x2312f5.trim()
            }, {
              'quoted': _0x3a96c2
            });
            const {
              videos: _0x182dc3
            } = await yts(_0x28bcc7);
            if (!_0x182dc3 || _0x182dc3.length <= 0x0) {
              _0x262d94("No Matching videos found for : *" + _0x55ac16[0x0] + "*!!");
              return;
            }
            let _0x438302 = _0x182dc3[0x0].url;
            let _0x3bdca7 = await ytdl.getInfo(_0x438302);
            if (_0x3bdca7.videoDetails.lengthSeconds >= 0x708) {
              _0x262d94("Too big!");
              return;
            }
            let _0x442d7a = _0x3bdca7.videoDetails.title;
            let _0x10c96e = '' + Math.floor(Math.random() * 0x2710) + '.mp3';
            const _0x4b13e8 = ytdl(_0x438302, {
              'filter': _0x3083a8 => _0x3083a8.audioBitrate == 0xa0 || _0x3083a8.audioBitrate == 0x80
            }).pipe(fs.createWriteStream('./' + _0x10c96e));
            console.log("Audio downloading ->", _0x438302);
            await new Promise((_0x51f890, _0x200059) => {
              _0x4b13e8.on("error", _0x200059);
              _0x4b13e8.on("finish", _0x51f890);
            });
            let _0x5496ab = fs.statSync('./' + _0x10c96e);
            let _0xaad284 = _0x5496ab.size;
            let _0x83b5ad = _0xaad284 / 1048576;
            console.log("Audio downloaded ! \n Size: " + _0x83b5ad);
            if (_0x83b5ad <= 0x28) {
              await _0x5bd614.sendMessage(_0x1d3785, {
                'document': fs.readFileSync('./' + _0x10c96e),
                'mimetype': "audio/mpeg",
                'fileName': _0x442d7a + ".mp3"
              }, {
                'quoted': _0x3a96c2
              });
            } else {
              _0x262d94("File size bigger.");
            }
            fs.unlinkSync('./' + _0x10c96e);
          }
          break;
        case 's':
        case "sticker":
          {
            const {
              Sticker: _0x24112d,
              createSticker: _0x240969,
              StickerTypes: _0x346f12
            } = require("wa-sticker-formatter");
            if (!_0x35c5cd) {
              _0x3a96c2.reply("Quote an image or a short video.");
              return;
            }
            ;
            let _0x1d860e;
            if (_0x35c5cd.imageMessage) {
              _0x1d860e = _0x35c5cd.imageMessage;
            } else {
              if (_0x35c5cd.videoMessage) {
                _0x1d860e = _0x35c5cd.videoMessage;
              } else {
                _0x3a96c2.reply("That is neither an image nor a short video! ");
                return;
              }
            }
            ;
            var _0x23e466 = await _0x5bd614.downloadAndSaveMediaMessage(_0x1d860e);
            let _0x5163af = new _0x24112d(_0x23e466, {
              'pack': packname,
              'author': author,
              'type': _0x346f12.FULL,
              'categories': ['🤩', '🎉'],
              'id': '12345',
              'quality': 0x46,
              'background': "transparent"
            });
            const _0x49d670 = await _0x5163af.toBuffer();
            _0x5bd614.sendMessage(_0x3a96c2.chat, {
              'sticker': _0x49d670
            }, {
              'quoted': _0x3a96c2
            });
          }
          break;
        case 'dp':
          {
            try {
              ha = _0x3a96c2.quoted.sender;
              qd = await _0x5bd614.getName(ha);
              pp2 = await _0x5bd614.profilePictureUrl(ha, "image");
            } catch {
              pp2 = "https://tinyurl.com/yx93l6da";
            }
            if (!_0x3a96c2.quoted) {
              throw "Tag a user!";
            }
            bar = "Profile Picture of " + qd;
            _0x5bd614.sendMessage(_0x3a96c2.chat, {
              'image': {
                'url': pp2
              },
              'caption': bar,
              'fileLength': "999999999999"
            }, {
              'quoted': _0x3a96c2
            });
          }
          break;
        case "list":
        case 'vars':
        case "help":
          _0x262d94("𝟏 Owner➣ 𝐆𝐞𝐭 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭  𝐜𝐨𝐧𝐭𝐚𝐜𝐭\n\n𝟐 𝐁𝐫𝐨𝐚𝐝𝐜𝐚𝐬𝐭➣ 𝐒𝐞𝐧𝐝𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐭𝐨 𝐚𝐥𝐥 𝐠𝐫𝐨𝐮𝐩𝐬\n\n𝟑 𝐉𝐨𝐢𝐧➣ 𝐭𝐚𝐠 𝐠𝐫𝐨𝐮𝐩 𝐥𝐢𝐧𝐤 𝐰𝐢𝐭𝐡 𝐣𝐨𝐢𝐧\n\n𝟒 𝐛𝐨𝐭𝐩𝐩➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐛𝐨𝐭𝐬 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐝𝐩\n\n𝟓 𝐁𝐥𝐨𝐜𝐤➣ 𝐁𝐥𝐨𝐜𝐤 𝐭𝐡𝐞𝐦 𝐟𝐚𝐤𝐞 𝐟𝐫𝐢𝐞𝐧𝐝𝐬\n\n𝟔 𝐊𝐢𝐥𝐥➣ 𝐊𝐢𝐥𝐥𝐬 𝐠𝐫𝐨𝐮𝐩 𝐢𝐧 𝐬𝐞𝐜𝐨𝐧𝐝𝐬\n\n𝟕 𝐔𝐧𝐛𝐥𝐨𝐜𝐤➣ 𝐆𝐢𝐯𝐞 𝐭𝐡𝐞𝐦 𝐟𝐚𝐤𝐞 𝐟𝐫𝐢𝐞𝐧𝐝𝐬 𝐚 𝐬𝐞𝐜𝐨𝐧𝐝 𝐜𝐡𝐚𝐧𝐜𝐞\n\n𝟖 𝐒𝐞𝐭𝐯𝐚𝐫➣ 𝐒𝐞𝐭 𝐯𝐚𝐫𝐬 𝐢𝐧 𝐡𝐞𝐫𝐨𝐤𝐮\n\n𝟗 𝐒𝐭𝐢𝐜𝐤𝐞𝐫➣ 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐚 𝐩𝐡𝐨𝐭𝐨 𝐨𝐫 𝐚 𝐬𝐡𝐨𝐫𝐭 𝐯𝐢𝐝𝐞𝐨 𝐭𝐨 𝐚 𝐬𝐭𝐢𝐜𝐤𝐞𝐫\n\n𝟏𝟎 𝐓𝐨𝐢𝐦𝐠➣ 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐚 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐭𝐨 𝐚 𝐩𝐡𝐨𝐭𝐨\n\n𝟏𝟏 𝐏𝐥𝐚𝐲➣ 𝐆𝐞𝐭 𝐲𝐨𝐮𝐫 𝐟𝐚𝐯𝐨𝐫𝐢𝐭𝐞 𝐬𝐨𝐧𝐠\n\n𝟏𝟐 𝐖𝐡𝐚𝐭𝐬𝐨𝐧𝐠➣ 𝐠𝐞𝐭 𝐭𝐡𝐞 𝐭𝐢𝐭𝐥𝐞 𝐨𝐟 𝐭𝐡𝐞 𝐬𝐨𝐧𝐠\n\n𝟏𝟑 𝐘𝐭𝐬 ➣ 𝐆𝐞𝐭 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐯𝐢𝐝𝐞𝐨𝐬\n\n𝟏𝟒 𝐌𝐨𝐯𝐢𝐞➣ 𝐆𝐞𝐭 𝐲𝐨𝐮𝐫 𝐟𝐚𝐯𝐨𝐫𝐢𝐭𝐞 𝐦𝐨𝐯𝐢𝐞 𝐝𝐞𝐭𝐚𝐢𝐥𝐬\n\n𝟏𝟓 𝐌𝐢𝐱➣ 𝐂𝐨𝐦𝐛𝐢𝐧𝐞𝐬 +𝟐𝐞𝐦𝐨𝐣𝐢𝐬\n\n𝟏𝟔 𝐀𝐢-𝐢𝐦𝐠➣ 𝐆𝐞𝐭 𝐚𝐧 𝐀𝐢 𝐩𝐡𝐨𝐭𝐨\n\n𝟏𝟕 𝐆𝐩𝐭 ➣ 𝐇𝐞𝐫𝐞 𝐭𝐨 𝐚𝐧𝐬𝐰𝐞𝐫 𝐲𝐨𝐮𝐫 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧𝐬\n\n𝟏𝟖 𝐃𝐩➣ 𝐆𝐞𝐭𝐬 𝐚 𝐩𝐞𝐫𝐬𝐨𝐧 𝐝𝐩\n\n𝟏𝟗 𝐒𝐩𝐞𝐞𝐝 ➣ 𝐂𝐡𝐞𝐜𝐤𝐬 𝐛𝐨𝐭𝐬 𝐬𝐩𝐞𝐞𝐝\n\n𝟐𝟎 𝐀𝐥𝐢𝐯𝐞➣ 𝐂𝐡𝐞𝐜𝐤 𝐰𝐡𝐞𝐭𝐡𝐞𝐫 𝐭𝐡𝐞 𝐛𝐨𝐭 𝐢𝐬 𝐬𝐭𝐢𝐥𝐥 𝐤𝐢𝐜𝐤𝐢𝐧𝐠\n\n𝟐𝟏 𝐑𝐮𝐧𝐭𝐢𝐦𝐞➣ 𝐖𝐡𝐞𝐧 𝐝𝐢𝐝 𝐛𝐨𝐭 𝐬𝐭𝐚𝐫𝐭𝐞𝐝 𝐨𝐩𝐞𝐫𝐚𝐭𝐢𝐧𝐠\n\n𝟐𝟐 𝐒𝐜𝐫𝐢𝐩𝐭➣ 𝐆𝐞𝐭 𝐛𝐨𝐭 𝐬𝐜𝐫𝐢𝐩𝐭\n\n𝟐𝟑 𝐎𝐰𝐧𝐞𝐫  ➣ 𝐆𝐞𝐭 𝐨𝐰𝐧𝐞𝐫(𝐬) 𝐜𝐨𝐧𝐭𝐚𝐜𝐭\n\n𝟐𝟒 𝐕𝐚𝐫𝐬 ➣ 𝐒𝐞𝐞 𝐚𝐥𝐥 𝐯𝐚𝐫𝐢𝐚𝐛𝐥𝐞𝐬\n\n𝟐𝟓 𝐏𝐫𝐨𝐦𝐨𝐭𝐞➣ 𝐆𝐢𝐯𝐞𝐬 𝐨𝐧𝐞 𝐚𝐝𝐦𝐢𝐧 𝐫𝐨𝐥𝐞\n\n𝟐𝟔 𝐃𝐞𝐦𝐨𝐭𝐞➣ 𝐃𝐞𝐦𝐨𝐭𝐞𝐬 𝐟𝐫𝐨𝐦 𝐠𝐫𝐨𝐮𝐩 𝐚𝐝𝐦𝐢𝐧 𝐭𝐨 𝐚 𝐦𝐞𝐦𝐛𝐞𝐫\n\n𝟐𝟕 𝐃𝐞𝐥𝐞𝐭𝐞➣ 𝐃𝐞𝐥𝐞𝐭𝐞 𝐚 𝐦𝐞𝐬𝐬𝐚𝐠𝐞\n\n𝟐𝟖 𝐑𝐞𝐦𝐨𝐯𝐞/𝐤𝐢𝐜𝐤➣ 𝐊𝐢𝐜𝐤 𝐭𝐡𝐚𝐭 𝐭𝐞𝐫𝐫𝐨𝐫𝐢𝐬𝐭 𝐟𝐫𝐨𝐦 𝐚 𝐠𝐫𝐨𝐮𝐩\n\n𝟐𝟗 𝐅𝐨𝐫𝐞𝐢𝐠𝐧𝐞𝐫𝐬➣ 𝐆𝐞𝐭 𝐟𝐨𝐫𝐞𝐢𝐠𝐧 𝐧𝐮𝐦𝐛𝐞𝐫𝐬\n\n𝟑𝟎 𝐂𝐥𝐨𝐬𝐞➣ 𝐓𝐢𝐦𝐞 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞𝐦𝐛𝐞𝐫𝐬 𝐭𝐨 𝐭𝐚𝐤𝐞 𝐚 𝐛𝐫𝐞𝐚𝐤 𝐨𝐧𝐥𝐲 𝐚𝐝𝐦𝐢𝐧𝐬 𝐜𝐚𝐧 𝐜𝐡𝐚𝐭\n\n𝟑𝟏 𝐎𝐩𝐞𝐧 ➣ 𝐄𝐯𝐞𝐫𝐲𝐨𝐧𝐞 𝐜𝐚𝐧 𝐜𝐡𝐚𝐭 𝐢𝐧 𝐚 𝐠𝐫𝐨𝐮𝐩\n\n𝟑𝟐 𝐈𝐜𝐨𝐧➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐢𝐜𝐨𝐧\n\n𝟑𝟑 𝐒𝐮𝐛𝐣𝐞𝐜𝐭➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐬𝐮𝐛𝐣𝐞𝐜𝐭\n\n𝟑𝟒 𝐃𝐞𝐬𝐜➣ 𝐆𝐞𝐭 𝐠𝐫𝐨𝐮𝐩 𝐝𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧\n\n𝟑𝟓 𝐋𝐞𝐚𝐯𝐞➣ 𝐓𝐡𝐞 𝐠𝐫𝐨𝐮𝐩 𝐢𝐬 𝐛𝐨𝐫𝐢𝐧𝐠 ,𝐭𝐢𝐦𝐞 𝐟𝐨𝐫 𝐛𝐨𝐭 𝐭𝐨 𝐥𝐞𝐚𝐯𝐞\n\n𝟑𝟔 𝐓𝐚𝐠𝐚𝐥𝐥 ➣ 𝐓𝐚𝐠 𝐞𝐯𝐞𝐫𝐲𝐨𝐧𝐞 𝐢𝐧 𝐚 𝐠𝐫𝐨𝐮𝐩 𝐜𝐡𝐚𝐭\n\n𝟑𝟕 𝐇𝐢𝐝𝐞𝐭𝐚𝐠➣ 𝐀𝐭𝐭𝐞𝐧𝐭𝐢𝐨𝐧! 𝐀𝐭𝐭𝐞𝐧𝐭𝐢𝐨𝐧! 𝐬𝐨𝐦𝐞𝐨𝐧𝐞 𝐡𝐚𝐬 𝐬𝐨𝐦𝐞𝐭𝐡𝐢𝐧𝐠 𝐭𝐨 𝐬𝐚𝐲\n\n𝟑𝟖 𝐑𝐞𝐯𝐨𝐤𝐞 ➣ 𝐑𝐞𝐬𝐞𝐭 𝐠𝐫𝐨𝐮𝐩 𝐥𝐢𝐧𝐤");
          break;
        case 'vv':
        case "retrieve":
          {
            if (!_0x3a96c2.quoted) {
              return _0x3a96c2.reply("quote a viewonce message eh");
            }
            const _0x59a617 = _0x3a96c2.msg?.["contextInfo"]?.['quotedMessage'];
            if (_0x59a617.imageMessage) {
              let _0x5f1555 = _0x59a617.imageMessage.caption;
              let _0x49ec76 = await _0x5bd614.downloadAndSaveMediaMessage(_0x59a617.imageMessage);
              _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'image': {
                  'url': _0x49ec76
                },
                'caption': "Retrieved by VINIZIAZ-XMD!\n" + _0x5f1555
              }, {
                'quoted': _0x3a96c2
              });
            }
            if (_0x59a617.videoMessage) {
              let _0x19fff7 = _0x59a617.videoMessage.caption;
              let _0x2cfca5 = await _0x5bd614.downloadAndSaveMediaMessage(_0x59a617.videoMessage);
              _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'video': {
                  'url': _0x2cfca5
                },
                'caption': "Retrieved by VINIZIAZ-XMD!\n" + _0x19fff7
              }, {
                'quoted': _0x3a96c2
              });
            }
          }
          break;
        case "vv2":
        case "wah":
          {
            if (!_0x3a96c2.quoted) {
              return _0x3a96c2.reply("quote a viewonce message eh");
            }
            const _0x796cc2 = _0x3a96c2.msg?.['contextInfo']?.["quotedMessage"];
            if (_0x796cc2.imageMessage) {
              let _0x20f712 = _0x796cc2.imageMessage.caption;
              let _0x5180f8 = await _0x5bd614.downloadAndSaveMediaMessage(_0x796cc2.imageMessage);
              _0x5bd614.sendMessage(_0x5bd614.user.id, {
                'image': {
                  'url': _0x5180f8
                },
                'caption': "Retrieved by VINIZIAZ-XMD!\n" + _0x20f712
              }, {
                'quoted': _0x3a96c2
              });
            }
            if (_0x796cc2.videoMessage) {
              let _0xc7a958 = _0x796cc2.videoMessage.caption;
              let _0x21e7a4 = await _0x5bd614.downloadAndSaveMediaMessage(_0x796cc2.videoMessage);
              _0x5bd614.sendMessage(_0x5bd614.user.id, {
                'video': {
                  'url': _0x21e7a4
                },
                'caption': "Retrieved by VINIZIAZ-XMD!\n" + _0xc7a958
              }, {
                'quoted': _0x3a96c2
              });
            }
          }
          break;
        case "take":
          {
            const {
              Sticker: _0x1b8405,
              createSticker: _0x1e8491,
              StickerTypes: _0x1ea562
            } = require('wa-sticker-formatter');
            if (!_0x35c5cd) {
              _0x3a96c2.reply("Quote an image, a short video or a sticker to change watermark.");
              return;
            }
            ;
            let _0x23acf0;
            if (_0x35c5cd.imageMessage) {
              _0x23acf0 = _0x35c5cd.imageMessage;
            } else {
              if (_0x35c5cd.videoMessage) {
                _0x23acf0 = _0x35c5cd.videoMessage;
              } else {
                if (_0x35c5cd.stickerMessage) {
                  _0x23acf0 = _0x35c5cd.stickerMessage;
                } else {
                  _0x3a96c2.reply("This is neither a sticker, image nor a video...");
                  return;
                }
              }
            }
            ;
            var _0x23e466 = await _0x5bd614.downloadAndSaveMediaMessage(_0x23acf0);
            let _0x37dd35 = new _0x1b8405(_0x23e466, {
              'pack': _0x123049,
              'author': _0x123049,
              'type': _0x1ea562.FULL,
              'categories': ['🤩', '🎉'],
              'id': "12345",
              'quality': 0x46,
              'background': 'transparent'
            });
            const _0x4a3b7d = await _0x37dd35.toBuffer();
            _0x5bd614.sendMessage(_0x3a96c2.chat, {
              'sticker': _0x4a3b7d
            }, {
              'quoted': _0x3a96c2
            });
          }
          break;
        case 'song2':
          {
            const _0x5ec1e5 = require("yt-search");
            const _0x1949e4 = require("node-fetch");
            const _0x5ba74a = async _0x56a054 => {
              const _0x1e9612 = await _0x1949e4(_0x56a054);
              return _0x1e9612.json();
            };
            try {
              if (!_0x53b418 || _0x53b418.trim().length === 0x0) {
                return _0x3a96c2.reply("What song do you want to download ?");
              }
              const _0x510727 = await _0x5ec1e5(_0x53b418);
              if (!_0x510727 || !_0x510727.videos.length) {
                return message.reply("No video found for the specified query.");
              }
              const _0x297cd1 = _0x510727.videos[0x0];
              const _0xbad4a2 = _0x297cd1.url;
              _0x3a96c2.reply("_Please wait your download on progress..._");
              let _0x106001;
              let _0x2be75a;
              let _0x3c5efe;
              _0x106001 = await _0x5ba74a("https://xploader-api.vercel.app/ytmp3?url=" + encodeURIComponent(_0xbad4a2));
              if (_0x106001.success) {
                _0x2be75a = _0x106001.result.download_url;
                _0x3c5efe = _0x106001.result;
              } else {
                _0x106001 = await _0x5ba74a('https://api.ryzendesu.vip/api/downloader/ytmp3?url=' + encodeURIComponent(_0xbad4a2));
                if (_0x106001.success) {
                  _0x2be75a = _0x106001.result.download_url;
                  _0x3c5efe = _0x106001.result;
                } else {
                  _0x106001 = await _0x5ba74a("https://api.dreaded.site/api/ytdl/audio?url=" + encodeURIComponent(_0xbad4a2));
                  if (_0x106001.success) {
                    _0x2be75a = _0x106001.result.download_url;
                    _0x3c5efe = _0x106001.result;
                  }
                }
              }
              if (!_0x2be75a || !_0x3c5efe) {
                return _0x3a96c2.reply("Failed to retrieve download URL from all sources. Please try again later.");
              }
              const _0x1ec1f1 = {
                'audio': {
                  'url': _0x2be75a
                },
                'mimetype': "audio/mp4",
                'fileName': _0x3c5efe.title + ".mp3"
              };
              await _0x5bd614.sendMessage(_0x3a96c2.chat, _0x1ec1f1, {
                'quoted': _0x3a96c2
              });
            } catch (_0x5ced01) {
              console.error("Error during download process:", _0x5ced01);
              return _0x3a96c2.reply("Download failed due to an error: " + (_0x5ced01.message || _0x5ced01));
            }
          }
          break;
        case "ytsearch":
        case "yts":
          {
            if (!_0x53b418) {
              _0x262d94("Provide a search term!E.g: Alan walker alone");
              return;
            }
            const {
              videos: _0x4a6962
            } = await yts(_0x53b418);
            if (!_0x4a6962 || _0x4a6962.length <= 0x0) {
              _0x262d94("No Matching videos found for : *" + _0x53b418 + "*!!");
              return;
            }
            const _0x5f4418 = _0x4a6962.length < 0xa ? _0x4a6962.length : 0xa;
            let _0x73e0c6 = "YouTube Search\n🔍 Query ~> " + _0x53b418 + "\n\n";
            for (let _0x4cca97 = 0x0; _0x4cca97 < _0x5f4418; _0x4cca97++) {
              _0x73e0c6 += "Link ~> " + _0x4a6962[_0x4cca97].url + "\nChannel ~> " + _0x4a6962[_0x4cca97].author.name + "\nTitle ~> " + _0x4a6962[_0x4cca97].title + "\n\n";
            }
            _0x262d94(_0x73e0c6);
            return;
          }
          break;
        case "ytmp3":
        case 'yta':
          {
            try {
              if (!_0x53b418) {
                return _0x3a96c2.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗹𝗶𝗻𝗸!");
              }
              let _0xf4e0c7 = _0x53b418.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
              if (!_0xf4e0c7) {
                return _0x3a96c2.reply("𝗧𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗟𝗶𝗻𝗸");
              }
              let _0x214ff3 = parseInt(_0x53b418) - 0x1;
              if (_0x214ff3 < 0x0 || _0x214ff3 >= _0xf4e0c7.length) {
                return _0x3a96c2.reply("𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗟𝗶𝗻𝗸.");
              }
              const {
                videos: _0x3b0492
              } = await yts(_0x53b418);
              if (!_0x3b0492 || _0x3b0492.length === 0x0) {
                return _0x3a96c2.reply("No songs found!");
              }
              const _0x4f2782 = _0x3b0492[0x0].url;
              let _0x89c4e5 = await fetchJson('https://api.dreaded.site/api/ytdl/audio?url=' + _0x4f2782);
              if (!_0x89c4e5 || !_0x89c4e5.result || !_0x89c4e5.result.url) {
                return _0x3a96c2.reply("Failed to fetch audio from the API.");
              }
              const _0x102a66 = _0x89c4e5.result.url;
              const _0x262a2 = _0x89c4e5.result.title;
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'audio': {
                  'url': _0x102a66
                },
                'mimetype': "audio/mpeg",
                'fileName': _0x262a2 + ".mp3"
              }, {
                'quoted': _0x3a96c2
              });
            } catch (_0x3a9457) {
              _0x3a96c2.reply("Download failed\n" + _0x3a9457.message);
            }
          }
          break;
        case "ytmp4":
        case "ytv":
          {
            try {
              if (!_0x53b418) {
                return _0x3a96c2.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 𝗹𝗶𝗻𝗸!");
              }
              let _0x30906e = _0x53b418.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
              if (!_0x30906e) {
                return _0x3a96c2.reply("𝗧𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 𝗹𝗶𝗻𝗸");
              }
              let _0x3d0258 = parseInt(_0x53b418) - 0x1;
              if (_0x3d0258 < 0x0 || _0x3d0258 >= _0x30906e.length) {
                return _0x3a96c2.reply("𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗹𝗶𝗻𝗸.");
              }
              const {
                videos: _0xb162a3
              } = await yts(_0x53b418);
              if (!_0xb162a3 || _0xb162a3.length === 0x0) {
                return _0x3a96c2.reply("No songs found!");
              }
              const _0x4ab27a = _0xb162a3[0x0].url;
              let _0x20b530 = await fetchJson("https://api.dreaded.site/api/ytdl/video?url=" + _0x4ab27a);
              if (!_0x20b530 || !_0x20b530.result || !_0x20b530.result.url) {
                return _0x3a96c2.reply("Failed to fetch video from the API.");
              }
              const _0x857482 = _0x20b530.result.url;
              const _0x56416a = _0x20b530.result.title;
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'video': {
                  'url': _0x857482
                },
                'mimetype': 'video/mpeg',
                'fileName': _0x56416a + ".mp4"
              }, {
                'quoted': _0x3a96c2
              });
            } catch (_0x476a31) {
              _0x3a96c2.reply("Download failed\n" + _0x476a31.message);
            }
          }
          break;
        case "ping":
        case 'speed':
          {
            await _0x12b47e();
            _0x3a96c2.reply("𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗\n " + _0x54a229.toFixed(0x4) + " 𝗠𝘀");
          }
          break;
        case "uptime":
          {
            _0x3a96c2.reply('' + runtime(process.uptime()));
          }
          break;
        case "runtime":
          let _0x5a3409 = "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗿𝘂𝗻𝗻𝗶𝗻𝗴 𝘀𝗶𝗻𝗰𝗲 " + runtime(process.uptime());
          _0x5bd614.sendMessage(_0x3a96c2.chat, {
            'text': _0x5a3409,
            'contextInfo': {
              'externalAdReply': {
                'showAdAttribution': true,
                'title': "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗",
                'body': "https://whatsapp.com/channel/0029Vb6jFwj89ine3b7qHB1y",
                'thumbnailUrl': "https://i.imgur.com/HP6GyiD.jpeg",
                'sourceUrl': 'https://chat.whatsapp.com/FRDtAailExp6hKbQgbLBnP',
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          }, {
            'quoted': _0x3a96c2
          });
          break;
        case "apk":
        case 'app':
          {
            if (!_0x53b418) {
              return _0x262d94("Where is the app name?");
            }
            let _0x22df7b = await fetchJson("https://bk9.fun/search/apk?q=" + _0x53b418);
            let _0x3a1548 = await fetchJson("https://bk9.fun/download/apk?id=" + _0x22df7b.BK9[0x0].id);
            await _0x5bd614.sendMessage(_0x3a96c2.chat, {
              'document': {
                'url': _0x3a1548.BK9.dllink
              },
              'fileName': _0x3a1548.BK9.name,
              'mimetype': "application/vnd.android.package-archive",
              'contextInfo': {
                'externalAdReply': {
                  'title': '𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗',
                  'body': '' + _0x3a1548.BK9.name,
                  'thumbnailUrl': '' + _0x3a1548.BK9.icon,
                  'sourceUrl': '' + _0x3a1548.BK9.dllink,
                  'mediaType': 0x2,
                  'showAdAttribution': true,
                  'renderLargerThumbnail': false
                }
              }
            }, {
              'quoted': _0x3a96c2
            });
          }
          break;
        case "mix":
          {
            const {
              Sticker: _0x535683,
              createSticker: _0x1560a7,
              StickerTypes: _0x2d8dbf
            } = require('wa-sticker-formatter');
            if (!_0x53b418) {
              return _0x3a96c2.reply("No emojis provided ? ");
            }
            const _0x38d567 = _0x53b418.split('+');
            if (_0x38d567.length !== 0x2) {
              _0x3a96c2.reply("Specify the emojis and separate with '+'");
              return;
            }
            const _0x3e8792 = _0x38d567[0x0].trim();
            const _0x3cd5c4 = _0x38d567[0x1].trim();
            try {
              const _0x1deeef = require("axios");
              const _0x2ae488 = await _0x1deeef.get("https://levanter.onrender.com/emix?q=" + _0x3e8792 + _0x3cd5c4);
              if (_0x2ae488.data.status === true) {
                let _0x5bb108 = new _0x535683(_0x2ae488.data.result, {
                  'pack': botname,
                  'type': _0x2d8dbf.CROPPED,
                  'categories': ['🤩', '🎉'],
                  'id': "12345",
                  'quality': 0x46,
                  'background': "transparent"
                });
                const _0x16f58f = await _0x5bb108.toBuffer();
                _0x5bd614.sendMessage(_0x3a96c2.chat, {
                  'sticker': _0x16f58f
                }, {
                  'quoted': _0x3a96c2
                });
              } else {
                _0x3a96c2.reply("Unable to create emoji mix.");
              }
            } catch (_0x2a3497) {
              _0x3a96c2.reply("An error occurred while creating the emoji mix." + _0x2a3497);
            }
          }
          break;
        case "lyrics":
          {
            const _0x10105f = require('node-fetch');
            const _0x5dfabd = 'https://api.dreaded.site/api/lyrics?title=' + encodeURIComponent(_0x53b418);
            try {
              if (!_0x53b418) {
                return _0x3a96c2.reply("Provide a song name!");
              }
              const _0x2ddcb7 = await fetchJson(_0x5dfabd);
              if (!_0x2ddcb7.success || !_0x2ddcb7.result || !_0x2ddcb7.result.lyrics) {
                return _0x3a96c2.reply("Sorry, I couldn't find any lyrics for \"" + _0x53b418 + "\".");
              }
              const {
                title: _0x6852ea,
                artist: _0x5154ca,
                link: _0x4d8985,
                thumb: _0x389ab5,
                lyrics: _0x4a5be7
              } = _0x2ddcb7.result;
              const _0x41834a = _0x389ab5 || "https://i.imgur.com/HP6GyiD.jpeg";
              const _0x11a9b3 = await _0x10105f(_0x41834a).then(_0x40b417 => _0x40b417.buffer())["catch"](_0x3cf5b9 => {
                console.error("Error fetching image:", _0x3cf5b9);
                return null;
              });
              if (!_0x11a9b3) {
                return _0x3a96c2.reply("An error occurred while fetching the image.");
              }
              const _0x19dc59 = "**Title**: " + _0x6852ea + "\n**Artist**: " + _0x5154ca + "\n\n" + _0x4a5be7;
              await _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'image': _0x11a9b3,
                'caption': _0x19dc59
              }, {
                'quoted': _0x3a96c2
              });
            } catch (_0x5aafd5) {
              console.error(_0x5aafd5);
              _0x3a96c2.reply("An error occurred while fetching the lyrics for \"" + _0x53b418 + "\".");
            }
          }
          break;
        case "toimage":
        case "photo":
          {
            if (!_0x34bd9a) {
              throw "Tag a static video with the command!";
            }
            if (!/webp/.test(_0x231894)) {
              throw "Tag a sticker with " + (prefix + _0x3b7157);
            }
            let _0x4e8dc3 = await _0x5bd614.downloadAndSaveMediaMessage(_0x34bd9a);
            let _0xd5304f = await getRandom('.png');
            exec("ffmpeg -i " + _0x4e8dc3 + " " + _0xd5304f, _0x27f3cd => {
              fs.unlinkSync(_0x4e8dc3);
              if (_0x27f3cd) {
                throw _0x27f3cd;
              }
              let _0x1d59f1 = fs.readFileSync(_0xd5304f);
              _0x5bd614.sendMessage(_0x3a96c2.chat, {
                'image': _0x1d59f1,
                'caption': "𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗲𝗱 𝗯𝘆 𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗"
              }, {
                'quoted': _0x3a96c2
              });
              fs.unlinkSync(_0xd5304f);
            });
          }
          break;
        case "movie":
          if (!_0x53b418) {
            return _0x262d94("Provide a series or movie name.");
          }
          let _0x5adc62 = await axios.get("http://www.omdbapi.com/?apikey=742b2d09&t=" + _0x53b418 + "&plot=full");
          let _0x41686e = '';
          console.log(_0x5adc62.data);
          _0x41686e += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n ``` IMDB MOVIE SEARCH```\n⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";
          _0x41686e += "🎬Title      : " + _0x5adc62.data.Title + "\n";
          _0x41686e += "📅Year       : " + _0x5adc62.data.Year + "\n";
          _0x41686e += "⭐Rated      : " + _0x5adc62.data.Rated + "\n";
          _0x41686e += "📆Released   : " + _0x5adc62.data.Released + "\n";
          _0x41686e += "⏳Runtime    : " + _0x5adc62.data.Runtime + "\n";
          _0x41686e += "🌀Genre      : " + _0x5adc62.data.Genre + "\n";
          _0x41686e += "👨🏻‍💻Director   : " + _0x5adc62.data.Director + "\n";
          _0x41686e += "✍Writer     : " + _0x5adc62.data.Writer + "\n";
          _0x41686e += "👨Actors     : " + _0x5adc62.data.Actors + "\n";
          _0x41686e += "📃Plot       : " + _0x5adc62.data.Plot + "\n";
          _0x41686e += "🌐Language   : " + _0x5adc62.data.Language + "\n";
          _0x41686e += "🌍Country    : " + _0x5adc62.data.Country + "\n";
          _0x41686e += "🎖️Awards     : " + _0x5adc62.data.Awards + "\n";
          _0x41686e += "📦BoxOffice  : " + _0x5adc62.data.BoxOffice + "\n";
          _0x41686e += "🏙️Production : " + _0x5adc62.data.Production + "\n";
          _0x41686e += "🌟imdbRating : " + _0x5adc62.data.imdbRating + "\n";
          _0x41686e += "❎imdbVotes  : " + _0x5adc62.data.imdbVotes + '';
          _0x5bd614.sendMessage(_0x1d3785, {
            'image': {
              'url': _0x5adc62.data.Poster
            },
            'caption': _0x41686e
          }, {
            'quoted': _0x3a96c2
          });
          break;
        case "linkgroup":
        case 'link':
          {
            if (!_0x3a96c2.isGroup) {
              throw group;
            }
            if (!_0x28b9b0) {
              throw botAdmin;
            }
            let _0x4aaac7 = await _0x5bd614.groupInviteCode(_0x3a96c2.chat);
            _0x5bd614.sendText(_0x3a96c2.chat, "https://chat.whatsapp.com/" + _0x4aaac7 + "\n\nGroup link for  " + _0x3d9849.subject, _0x3a96c2, {
              'detectLink': true
            });
          }
          break;
        case 'botpp':
          {
            if (!_0x59cf5d) {
              throw NotOwner;
            }
            if (!_0x34bd9a) {
              throw "Tag an image you want to be the bot's profile picture with " + (prefix + _0x3b7157);
            }
            if (!/image/.test(_0x231894)) {
              throw "Tag an image you want to be the bot's profile picture with " + (prefix + _0x3b7157);
            }
            if (/webp/.test(_0x231894)) {
              throw "Tag an image you want to be the bot's profile picture with " + (prefix + _0x3b7157);
            }
            let _0x5c4b92 = await _0x5bd614.downloadAndSaveMediaMessage(_0x34bd9a);
            await _0x5bd614.updateProfilePicture(_0x1b238d, {
              'url': _0x5c4b92
            })["catch"](_0x739f58 => fs.unlinkSync(_0x5c4b92));
            _0x262d94`Bot's profile picture has been successfully updated!`;
          }
          break;
        case "broadcast":
          {
            if (!_0x59cf5d) {
              throw NotOwner;
              return;
            }
            if (!_0x53b418) {
              _0x262d94("❌ No broadcast message provided!");
              return;
            }
            let _0x5e62dd = await _0x5bd614.groupFetchAllParticipating();
            let _0x174e94 = Object.entries(_0x5e62dd).slice(0x0).map(_0x3bdc7e => _0x3bdc7e[0x1]);
            let _0x89826a = _0x174e94.map(_0x3a0983 => _0x3a0983.id);
            _0x262d94(" Broadcasting in " + _0x89826a.length + " Group Chat, in " + _0x89826a.length * 1.5 + " seconds");
            for (let _0x2ad760 of _0x89826a) {
              let _0x5878e8 = "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗 𝗕𝗥𝗢𝗔𝗗𝗖𝗔𝗦𝗧 >\n\n🀄 Message: " + _0x53b418 + "\n\nAuthor: " + _0x123049;
              await _0x5bd614.sendMessage(_0x2ad760, {
                'image': {
                  'url': "https://telegra.ph/file/416c3ae0cfe59be8db011.jpg"
                },
                'caption': '' + _0x5878e8
              });
            }
            _0x262d94("Broadcasted to " + _0x89826a.length + " Groups.");
          }
          break;
        case 'gemini':
          {
            try {
              if (!_0x53b418) {
                return _0x3a96c2.reply("This is VINIZIAZ-XMD, an AI using Gemini APIs to process text, provide yr query");
              }
              const {
                default: _0x2c17bb
              } = await import("gemini-ai");
              const _0x223d05 = new _0x2c17bb("AIzaSyDJUtskTG-MvQdlT4tNE319zBqLMFei8nQ");
              const _0x1a482d = _0x223d05.createChat();
              const _0x107db6 = await _0x1a482d.ask(_0x53b418);
              await _0x3a96c2.reply(_0x107db6);
            } catch (_0xf2bf64) {
              _0x3a96c2.reply("I am unable to generate responses\n\n" + _0xf2bf64);
            }
          }
          break;
        case "setvar":
          if (!_0x59cf5d) {
            throw NotOwner;
          }
          if (!_0x53b418.split('=')[0x1]) {
            return _0x262d94("Incorrect Usage:\nProvide the key and value correctly\nExample: setvar AUTOVIEW_STATUS=TRUE");
          }
          const _0x360c60 = new _0xf1b21f({
            'token': herokuapi
          });
          let _0x4865ca = "/apps/" + appname;
          await _0x360c60.patch(_0x4865ca + '/config-vars', {
            'body': {
              [_0x53b418.split('=')[0x0]]: _0x53b418.split('=')[0x1]
            }
          });
          await _0x262d94("✅ The variable " + _0x53b418.split('=')[0x0] + " = " + _0x53b418.split('=')[0x1] + " has been set Successfuly.\nWait 20s for changes to effect!");
          break;
        case 'dlt':
        case "dil":
          {
            if (!_0x3a96c2.quoted) {
              throw "No message quoted for deletion";
            }
            let {
              chat: _0x3e9d94,
              fromMe: _0x37963f,
              id: _0x24de05,
              isBaileys: _0x141e3a
            } = _0x3a96c2.quoted;
            if (_0x141e3a) {
              throw "I cannot delete. Quoted message is my message or another bot message.";
            }
            _0x5bd614.sendMessage(_0x3a96c2.chat, {
              'delete': {
                'remoteJid': _0x3a96c2.chat,
                'fromMe': true,
                'id': _0x3a96c2.quoted.id,
                'participant': _0x3a96c2.quoted.sender
              }
            });
          }
          break;
        case 'block':
          {
            if (!_0x59cf5d) {
              throw NotOwner;
            }
            if (!_0x3a96c2.quoted) {
              throw "𝗧𝗮𝗴 𝘀𝗼𝗺𝗲𝗼𝗻𝗲!";
            }
            let _0xa40359 = _0x3a96c2.mentionedJid[0x0] ? _0x3a96c2.mentionedJid[0x0] : _0x3a96c2.quoted ? _0x3a96c2.quoted.sender : _0x53b418.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
            if (_0xa40359 == "254114660061@s.whatsapp.net") {
              return _0x3a96c2.reply("𝗜 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗹𝗼𝗰𝗸 𝗺𝘆 𝗢𝘄𝗻𝗲𝗿 😡");
            }
            if (_0xa40359 == _0x5bd614.decodeJid(_0x5bd614.user.id)) {
              throw "𝗜 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗹𝗼𝗰𝗸 𝗺𝘆𝘀𝗲𝗹𝗳 𝗶𝗱𝗶𝗼𝘁 😡";
            }
            await _0x5bd614.updateBlockStatus(_0xa40359, "block");
            _0x3a96c2.reply("𝗕𝗹𝗼𝗰𝗸𝗲𝗱 𝘁𝗵𝗶𝘀 𝗺𝗼𝘁𝗵𝗲𝗿𝗳*𝗰𝗸𝗲𝗿 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆!");
          }
          break;
        case "unblock":
          {
            if (!_0x59cf5d) {
              throw NotOwner;
            }
            if (!_0x3a96c2.quoted) {
              throw "𝗧𝗮𝗴 𝘀𝗼𝗺𝗲𝗼𝗻𝗲!";
            }
            let _0x77c986 = _0x3a96c2.mentionedJid[0x0] ? _0x3a96c2.mentionedJid[0x0] : _0x3a96c2.quoted ? _0x3a96c2.quoted.sender : _0x53b418.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
            await _0x5bd614.updateBlockStatus(_0x77c986, 'unblock');
            _0x3a96c2.reply("𝗨𝗻𝗯𝗹𝗼𝗰𝗸𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆✅!");
          }
          break;
        case "join":
          {
            if (!_0x59cf5d) {
              throw NotOwner;
            }
            if (!_0x53b418) {
              return _0x262d94("provide a valid group link");
            }
            let _0x4746f4 = _0x55ac16[0x0].split("https://chat.whatsapp.com/")[0x1];
            await _0x5bd614.groupAcceptInvite(_0x4746f4).then(_0x59d3dd => _0x262d94(jsonformat(_0x59d3dd)))["catch"](_0x29ccc8 => _0x262d94("Link has problem."));
          }
          break;
        case 'enc':
        case 'encrypte':
          {
            const _0x32d723 = require("javascript-obfuscator");
            if (_0x3a96c2.quoted && _0x3a96c2.quoted.text) {
              const _0x4c63f8 = _0x3a96c2.quoted.text;
              const _0x38753a = _0x32d723.obfuscate(_0x4c63f8, {
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
              _0x3a96c2.reply(_0x38753a.getObfuscatedCode());
            } else {
              _0x3a96c2.reply("Quote/Tag a valid JavaScript code to encrypt!");
            }
          }
          break;
        case "gpt3":
          {
            if (!_0x53b418) {
              return _0x262d94("Hello there, How can i help you?");
            }
            let _0x462e55 = await fetchJson("https://bk9.fun/ai/blackbox?q=" + _0x53b418);
            if (!_0x462e55.BK9) {
              return _0x262d94("An error occurred while fetching the AI chatbot response. Please try again later.");
            } else {
              _0x262d94(_0x462e55.BK9);
            }
          }
          break;
        case "gcprofile":
          {
            function _0x5479d8(_0x5c9e74) {
              const _0x198d71 = new Date(_0x5c9e74 * 0x3e8);
              const _0x2f31c1 = ["Sunday", "Monday", 'Tuesday', "Wednesday", 'Thursday', "Friday", "Saturday"];
              return {
                'date': _0x198d71.getDate(),
                'month': new Intl.DateTimeFormat("en-US", {
                  'month': "long"
                }).format(_0x198d71),
                'year': _0x198d71.getFullYear(),
                'day': _0x2f31c1[_0x198d71.getUTCDay()],
                'time': _0x198d71.getUTCHours() + ':' + _0x198d71.getUTCMinutes() + ':' + _0x198d71.getUTCSeconds()
              };
            }
            if (!_0x3a96c2.isGroup) {
              return _0x3a96c2.reply("This command is meant for groups");
            }
            let _0x239f5b = await _0x5bd614.groupMetadata(_0x3a96c2.chat);
            let _0x487f72 = await _0x5479d8(_0x239f5b.creation);
            try {
              pp = await _0x5bd614.profilePictureUrl(chat, "image");
            } catch {
              pp = "https://i.imgur.com/HP6GyiD.jpeg";
            }
            await _0x5bd614.sendMessage(_0x3a96c2.chat, {
              'image': {
                'url': pp
              },
              'caption': "_Name_ : *" + _0x239f5b.subject + "*\n\n_ID_ : *" + _0x239f5b.id + "*\n\n_Group owner_ : " + ('@' + _0x239f5b.owner.split('@')[0x0]) + " || 'No Creator'\n\n_Group created_ : *" + _0x487f72.day + ", " + _0x487f72.date + " " + _0x487f72.month + " " + _0x487f72.year + ", " + _0x487f72.time + "*\n\n_Participants_ : *" + _0x239f5b.size + "*\n_Members_ : *" + _0x239f5b.participants.filter(_0x4527ed => _0x4527ed.admin == null).length + "*\n\n_Admins_ : *" + Number(_0x239f5b.participants.length - _0x239f5b.participants.filter(_0x53c9c8 => _0x53c9c8.admin == null).length) + "*\n\n_Who can send message_ : *" + (_0x239f5b.announce == true ? "Admins" : 'Everyone') + "*\n\n_Who can edit group info_ : *" + (_0x239f5b.restrict == true ? "Admins" : "Everyone") + "*\n\n_Who can add participants_ : *" + (_0x239f5b.memberAddMode == true ? "Everyone" : 'Admins') + '*'
            }, {
              'quoted': _0x3a96c2
            });
          }
          break;
        case "tovideo":
        case "mp4":
        case "tovid":
          {
            if (!_0x34bd9a) {
              return _0x262d94("Reply to Sticker");
            }
            if (!/webp/.test(_0x231894)) {
              return _0x262d94("reply sticker with caption *" + (prefix + _0x3b7157) + '*');
            }
            let _0x5efcc6 = await fetch("https://bk9.fun/converter/webpToMp4?url=" + _0x34bd9a);
            let _0x1e6246 = await _0x5bd614.downloadAndSaveMediaMessage(_0x34bd9a);
            let _0x27f787 = await _0x5efcc6(_0x1e6246);
            await _0x5bd614.sendMessage(_0x3a96c2.chat, {
              'video': {
                'url': _0x27f787.result,
                'caption': "Convert Webp To Video"
              }
            }, {
              'quoted': _0x3a96c2
            });
            await fs.unlinkSync(_0x1e6246);
          }
          break;
        default:
          {
            if (_0xb1de4f && _0x1771c8.toLowerCase() != undefined) {
              if (_0x3a96c2.chat.endsWith("broadcast")) {
                return;
              }
              if (_0x3a96c2.isBaileys) {
                return;
              }
              if (!_0x1771c8.toLowerCase()) {
                return;
              }
              if (_0x43805a || _0xb1de4f && !_0x3a96c2.isGroup) {
                console.log(chalk.black(chalk.bgRed("[ ERROR ]")), !_0x502c(0x48d) ? chalk.green(_0x502c(0x4a1)) : chalk.keyword("turquoise")("command"), !_0x502c(0x48d) ? chalk.green('' + prefix + _0x3b7157) : chalk.keyword("turquoise")('' + prefix + _0x3b7157), chalk.keyword('turquoise')("Viniziaz"));
              } else if (_0x43805a || _0xb1de4f && _0x3a96c2.isGroup) {
                console.log(chalk.black(chalk.bgRed("[ ERROR ]")), !_0x502c(0x48d) ? chalk.green(_0x502c(0x4a1)) : chalk.keyword("turquoise")("command"), !_0x502c(0x48d) ? chalk.green('' + prefix + _0x3b7157) : chalk.keyword("turquoise")('' + prefix + _0x3b7157), !_0x502c(0x48d) ? chalk.green('Viniziaz') : chalk.keyword("turquoise")('Viniziaz'));
              }
            }
          }
      }
    }
  } catch (_0x1f345e) {
    _0x3a96c2.reply(util.format(_0x1f345e));
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});

//JUNIOR
