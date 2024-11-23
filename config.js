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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || ""  // PUT your SESSUHAIL_11_59_11_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUxLFxuICAgICAgICA2MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExLFxuICAgICAgICA1NyxcbiAgICAgICAgMTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMixcbiAgICAgICAgOTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTExLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU4LFxuICAgICAgICA5MixcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDczLFxuICAgICAgICAzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTAyLFxuICAgICAgICA1MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDgzLFxuICAgICAgICAyNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA0LFxuICAgICAgICAyMTksXG4gICAgICAgIDY2LFxuICAgICAgICAyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDksXG4gICAgICAgIDQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcwLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQzLFxuICAgICAgICA1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDc1LFxuICAgICAgICA2OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkxLFxuICAgICAgICA4NyxcbiAgICAgICAgOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDg0LFxuICAgICAgICA5MixcbiAgICAgICAgNjMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjA5LFxuICAgICAgICA3NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDk5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDY5LFxuICAgICAgICA2OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDksXG4gICAgICAgIDAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDksXG4gICAgICAgIDcyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU2LFxuICAgICAgICA2MixcbiAgICAgICAgNTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDksXG4gICAgICAgIDk0LFxuICAgICAgICA3MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUSzhtaUthbHRPOFRucUloVVE0NU4vMG1sNDUxMkxZWkdQS25zNGxqNFcwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWYUlFczVqZlFKNjd1QUlWRWUzbXFnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjYxODQxZGZkLTg2ZTEtNGM3MS04NGMxLThkMjI5NzQ4Y2JiOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTgsXG4gICAgICAyNixcbiAgICAgIDE3MCxcbiAgICAgIDIxMixcbiAgICAgIDIzMixcbiAgICAgIDE2MixcbiAgICAgIDk2LFxuICAgICAgMTY3LFxuICAgICAgMjQyLFxuICAgICAgMTAxLFxuICAgICAgMTEsXG4gICAgICA2NCxcbiAgICAgIDk1LFxuICAgICAgMTE3LFxuICAgICAgMTI5LFxuICAgICAgMTI2LFxuICAgICAgMTM0LFxuICAgICAgMTg4LFxuICAgICAgMzEsXG4gICAgICAxMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU1LFxuICAgICAgMCxcbiAgICAgIDE5NixcbiAgICAgIDMsXG4gICAgICAyNTAsXG4gICAgICA0MCxcbiAgICAgIDc2LFxuICAgICAgMjIxLFxuICAgICAgMSxcbiAgICAgIDE0MixcbiAgICAgIDEzOCxcbiAgICAgIDIwMixcbiAgICAgIDE3OCxcbiAgICAgIDEyNCxcbiAgICAgIDE1OCxcbiAgICAgIDI0LFxuICAgICAgNjIsXG4gICAgICA4NyxcbiAgICAgIDExLFxuICAgICAgMjA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkQzNk5KMURCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NjgwNDUyNjk6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxMTMzODM2MjE1MTA1NToxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKYjY0ZE1HRUllSGg3b0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkIzOFhUTm9lckhXZnZVNzRJdUEyV2lEdDZZSUk4TmgranIxYm9ETklxRW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidTlWZVQrdndEU2gyODlOUDYzaHhCeVlteTE2a045RGJSaGxRelhUZWZNS0RqdHF6MUo1VVAyN0hnOENXdncyYVArR1d0NTAxL1VHOWJtalR2aGdkQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibnh1anZsWWJ0SnVXWjNYeEJWTHQzYzlqdklzaVF5OGVrbTZiRTQ4b1YwcDRyd0lOYk40cmwxSERGV3paR3gzNkljcTFpNkQ2UUJ0SFdkdzVuQy8raFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzY4MDQ1MjY5OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIzNjMxNDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGM0ZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUYzRi5qc29uIjogIntcImtleURhdGFcIjpcIjlmcm5xUWoyOW5aaEJHT09XaXBzZFRXVnlWMXBRSmZFdGNlOS9aT3g3TTg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc4NjI4MTIzNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9SION_ID 


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
