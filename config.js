/*════════════════════════════════════════════════════════════════════════════
                                                                            
   ╰🚀𝐒𝐀𝐍𝐍𝐔 𝐊𝐈𝐍𝐆 𝐁𝐎𝐓 - 𝙑𝙀𝙍𝙎𝙄𝙊𝙉 7.0🚀╯                                     
                                                                            
     🤖 Multi-functional WhatsApp User Bot by SANNU Official               
     🔗 GitHub   : https://github.com/manulofficial7                        
     ▶️ YouTube  : https://youtube.com/@ManulOfficialTech                   
     📱 WhatsApp : +94 726700972                                            
                                                                            
   ╭────────────────────────────────────────────────────────────────────╮
╓─╖╓──╖╓─╖╓────╖╓────╖
║░║║░╓╜║░║║░╓──╜║░╓──╜
║░╙╜╓╜░║░║║░╙──╖║░╙──╖
║░╓╖╙╖░║░║╙──╖░║╙──╖░║
║░║║░╙╖║░║╓──╜░║╓──╜░║
╙─╜╙──╜╙─╜╙────╜╙────╜You’re
█▄█ █▀█ ▀█▀
█▀█ █▄█    █♡
╰────────────────────────────────────────────────────────────────────╯  
                                                                          
════════════════════════════════════════════════════════════════════════════
*/
/**
 * 🧠 Author        : Sannu Official
 * 🌐 Project Name  : SANNU-KING MD
 * 🛠 Base Script   : By  Pᴏᴡᴇʀᴅ  S ᴀɴɴᴜッ Official
 * 📝 Description   : SANNU is a powerful and customizable WhatsApp bot 
 *                    built for fun, automation, and productivity!
 * 🔒 License       : © 2025 SANNU-MD v8.0 - All Rights Reserved
 */
 
 const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || 'Put_Your_Session_ID', // Put your session id here ( after linked check your number and get session id it need start with Manu-MD& ) 🤍
PORT: process.env.PORT || '3000'
};
