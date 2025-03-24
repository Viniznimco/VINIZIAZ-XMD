const welcomegoodbye = process.env.WELCOMEGOODBYE || "FALSE";
const botname = process.env.BOTNAME || "𝗩𝗜𝗡𝗜𝗭𝗜𝗔𝗭-𝗫𝗠𝗗";
const Events = async (_0x3e9038, _0xde2ef2) => {
  try {
    let _0x2c0ca0 = await _0x3e9038.groupMetadata(_0xde2ef2.id);
    let _0x3f99f2 = _0xde2ef2.participants;
    for (let _0x2c7d9b of _0x3f99f2) {
      let _0xf672f2;
      try {
        _0xf672f2 = await _0x3e9038.profilePictureUrl(_0x2c7d9b, "image");
      } catch {
        _0xf672f2 = "https://files.catbox.moe/xmlidu.jpg";
      }
      if (_0xde2ef2.action === 'add') {
        let _0x536efe = '@' + _0x2c7d9b.split('@')[0x0] + " Holla👋,\n\nWelcome to " + _0x2c0ca0.subject + ".\n\nYou might want to read group description,\nFollow group rules to avoid being removed.\n\n" + botname + " 2025.";
        if (welcomegoodbye === "TRUE") {
          await _0x3e9038.sendMessage(_0xde2ef2.id, {
            'image': {
              'url': _0xf672f2
            },
            'caption': _0x536efe,
            'mentions': [_0x2c7d9b]
          });
        }
      } else {
        if (_0xde2ef2.action === 'remove') {
          let _0x2e9b12 = '@' + _0x2c7d9b.split('@')[0x0] + " Has run out of data. Let's pray for the poor😔.\n\nAnyway Goodbye Hustler.\n\n" + botname + " 2025.";
          if (welcomegoodbye === "TRUE") {
            await _0x3e9038.sendMessage(_0xde2ef2.id, {
              'image': {
                'url': _0xf672f2
              },
              'caption': _0x2e9b12,
              'mentions': [_0x2c7d9b]
            });
          }
        }
      }
    }
  } catch (_0x193958) {
    console.log(_0x193958);
  }
};
module.exports = Events;
