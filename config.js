const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254768045269";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_01_11_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTksXG4gICAgICAgIDc4LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTksXG4gICAgICAgIDcsXG4gICAgICAgIDkyLFxuICAgICAgICA3MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDMwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MixcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjksXG4gICAgICAgIDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNixcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTUyLFxuICAgICAgICA2MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU5LFxuICAgICAgICA3OSxcbiAgICAgICAgODIsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1LFxuICAgICAgICA2NixcbiAgICAgICAgMjA0LFxuICAgICAgICA5MixcbiAgICAgICAgODUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM0LFxuICAgICAgICA0NyxcbiAgICAgICAgODMsXG4gICAgICAgIDQxLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNSxcbiAgICAgICAgMjM1LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzksXG4gICAgICAgIDEzLFxuICAgICAgICA5OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY3LFxuICAgICAgICA4NCxcbiAgICAgICAgNzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3NixcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgODQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMxLFxuICAgICAgICA4MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDMzLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlVKZncwOTl4LzhKODBqYXhpbnl6eFZqVVBXOURlRVVqT3FtUnFGUFFLd2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInpra0dhbnJZU2VXU0JVR3hPbnUtVmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmM5MDY4ZWEtM2VhNC00NjU5LTg1NDAtZDI3YmNhNmI5NmZmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyLFxuICAgICAgMTEsXG4gICAgICAyMTMsXG4gICAgICAxNDcsXG4gICAgICAxOTIsXG4gICAgICAyMTIsXG4gICAgICAxMDcsXG4gICAgICA3MSxcbiAgICAgIDIyMixcbiAgICAgIDE5MyxcbiAgICAgIDgwLFxuICAgICAgNjAsXG4gICAgICAxOTgsXG4gICAgICAxNzcsXG4gICAgICAxMjUsXG4gICAgICAxNjksXG4gICAgICAxODMsXG4gICAgICAyNixcbiAgICAgIDEzNSxcbiAgICAgIDIyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NCxcbiAgICAgIDE1NixcbiAgICAgIDE0NixcbiAgICAgIDE0MSxcbiAgICAgIDc5LFxuICAgICAgMixcbiAgICAgIDkyLFxuICAgICAgMTQwLFxuICAgICAgMTgzLFxuICAgICAgMTE4LFxuICAgICAgMTY2LFxuICAgICAgODUsXG4gICAgICA1LFxuICAgICAgODksXG4gICAgICAyNSxcbiAgICAgIDYyLFxuICAgICAgMTE2LFxuICAgICAgMjExLFxuICAgICAgMzQsXG4gICAgICAyNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMkxWNUtUMUdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc2ODA0NTI2OToxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjExMzM4MzYyMTUxMDU1OjExQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pmNjRkTUdFS1NraDdvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQjM4WFROb2VySFdmdlU3NEl1QTJXaUR0NllJSThOaCtqcjFib0ROSXFFbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJkUitLOVN4QTRaSlBpeDZKQmxYcDZHMGdLL0l3UlowMkhGMStZUERRVUhvQ3Q4dG5HRlZ4Zm4vYWdwVGFCNFpOR0lZNTlaWEtqeG5Bd3F0UlZTeFdEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJQVFkxV0thTHpwbm42NkVLVFljRWdGVERlK3k5SzZpWGhyNG45VWUxNmNjZ0hIV0RwYzBnblJDem5xbmxmNkR4bmt3ZjAzaWZjN01CMGVXOVlXSitEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NjgwNDUyNjk6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjM2Njg4OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUYzRlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRjNGLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOWZybnFRajI5blpoQkdPT1dpcHNkVFdWeVYxcFFKZkV0Y2U5L1pPeDdNOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzg2MjgxMjM3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
