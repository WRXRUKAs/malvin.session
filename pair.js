const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Malvin_King,    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function MALVIN_KING_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Malvin_King = Malvin_King({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Malvin_King.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Malvin_King.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Malvin_King.ev.on('creds.update', saveCreds)
            Pair_Code_By_Malvin_King.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_RUKSHAN_king.sendMessage(Pair_Code_By_RUKSHAN_King.user.id, { text: '' + b64data });

               let MALVIN_KING_TEXT = `
┏━━━━━━━━━━━━━━
┃RED-SAMURAI-XMD SESSION IS💭🥷
┃SUCCESSFULLY🇱🇰
┃CONNECTED ✅🔥
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❶ || Creator = 𖥘🇯🇵  RUKSHAN JAPANESE 🇯🇵𖥘
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❷ || MY WHATSAPP CHANNEL = https://whatsapp.com/channel/0029VawQLgP30LKW5sLcS01B/216
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❸ || Owner = https://wa.me/94759371545
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❺ || Bot Repo = https://github.com/RED-SAMURAI-RUKA/RED-SAMURAI-V1/tree/main 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❻ || YouTube = tama patan gatte ne sudda🥲 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
©2024-2099 𝚁𝙴𝙳_𝚂𝙰𝙼𝚄𝚁𝙰𝙸_𝚁𝚄𝙺𝙰_🥷`
 await Pair_Code_By_Malvin_King.sendMessage(Pair_Code_By_Malvin_King.user.id,{text:MALVIN_KING_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Malvin_King.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    MALVIN_KING_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await MALVIN_KING_PAIR_CODE()
});
module.exports = router
