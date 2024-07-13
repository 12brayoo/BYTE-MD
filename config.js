
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "923072380380";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Your session "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU1DTTdxcXdhT2dwaGc2dXpNMjNFYzNFS1E0VlhSaTN4SlFqT2p0Z3UwWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHo0eGlLdU9peHV0Qlc0V3lyYjIydmt2N09haGdzaHdWbGpPVHFJc2JTWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzR0NISDQ3VmN0NHZralhQazhSZTlpcXVva1c5WEFYY0E5QjA1Zi9xMjJZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1aVhmN2Mwbzd0TEdqVTNwR04ybTVWQVpvQXdGS3FkRGhtY1VhOGI0VHpJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZBVHZjU2ZLY1dxeDl4TlVERXJobWJjYmNJWlBnOTczUDZyRnRyeUt6Rnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InE2bjRRWXVWNnpXZGNNNDd5bGxrVnIxdDBXRUowcytLd3FaZUJMQk1zMEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU9WamdYUEx2ZDRHcGNSNk8wODB1OHVJYWI0elRnVnlDSkp3eFhwbG9YST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTGFsZzhjUzAzaEc3VUxpNDBldHhBY2s2NFJaaVY0dldtZG1TN3ZDWXBBcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImUrQUk5VHViUFlyWlRGWTlTeEtacVNHaXVqRE5IMUViaVMyR2ZmRnVCeFlxS21pd0VaQjdiOUxpdDFoNnMzdjl0ekVUQTJzMmVqbTVlMkU5SWFlTEJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI1LCJhZHZTZWNyZXRLZXkiOiI2cTV1MVB4SHdDWi8vazg2d2tRSExpaFBPUzZsUmZiS0xQZUluMVNXQi8wPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXYjcta2M1c1I3S082cGkwaTlHZ0dRIiwicGhvbmVJZCI6IjY1NTA0ZmYzLWZiNjktNGIwZS04MTZjLThiNzcxOGNlMDEyOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzUzRiL0p5Mkk4cWNuZ0J6c0l0bUNLcG5tZk09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVhWQm9DQ09scXhmb1liWHhDcGlGRUJITCtzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlY4NERCWTM4IiwibWUiOnsiaWQiOiIyNTQ3OTQ5MzIyMTY6MjhAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0syb3FwRUNFSmZ1eTdRR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImxJMkZ3bkY2VThLcHBnNFl2KzV5MW1KU2p1UlR2QW1OWXdCbko5WUxMQ2s9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik9pM3hseDNaaTZqNDFGU0xDNUdvdEdKY3AvTG9uUWxQM3lWSlZrb09jTXVYbVhqclVOVU41cUdzMEZ1bUhTL2F0R1djY0lWbkNqZVkxZFZudzd6M0NnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJUaFo2NThXWFROTkNtYW5QeW05OHg2RjhxTlJGWlhBQ3RFaWQ1MUl3cXkzNndCSVlXNWtTWEV1NWthVktjaGh0Smt3aStHVDNSUlowOGt6eUZidWtDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc5NDkzMjIxNjoyOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaU05oY0p4ZWxQQ3FhWU9HTC91Y3RaaVVvN2tVN3dKaldNQVp5ZldDeXdwIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwOTA3NTYzfQ==" //Make sure session id starts with Byte;;;
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "Hamza",
  errorChat: process.env.ERROR_CHAT || "923072380380",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
