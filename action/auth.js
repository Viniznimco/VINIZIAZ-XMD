const fs = require('fs');
const session = process.env.SESSION || '';
async function authenticationn() {
  try {
    if (!fs.existsSync("./session/creds.json")) {
      console.log('Connecting...');
      await fs.writeFileSync("./session/creds.json", atob(session), "utf8");
    } else if (session !== "zokk") {
      await fs.writeFileSync("./session/creds.json", atob(session), "utf8");
    }
  } catch (_0xf348d3) {
    console.log("Session is invalid: " + _0xf348d3);
    return;
  }
}
module.exports = authenticationn;
