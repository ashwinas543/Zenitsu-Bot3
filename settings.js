const chalk = require("chalk")
const fs = require("fs")

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['916282137207'] //ur owner number
global.ownernomer = "916282137207" //ur owner number2
global.ownername = "Toxic boy" //ur owner name
global.ytname = "YT: _not.luffy" //ur yt chanel name
global.socialm = "GitHub: ashwinas543" //ur github or insta name
global.location = "India, karala, kannaravila" //ur location

//new
global.botname = "bot"
global.ownernumber = '916282137207'
global.ownername = '🦄toxic bwoy'
global.ownerNumber = ["916282137207@s.whatsapp.net"]
global.ownerweb = "https://instagram.com/_not.luffy?igshid=MzNlNGNkZWQ4Mg=="
global.websitex = "https://instagram.com/_not.luffy?igshid=MzNlNGNkZWQ4Mg=="
global.wagc = "https://instagram.com/_not.luffy?igshid=MzNlNGNkZWQ4Mg=="
global.themeemoji = '®'
global.wm = "toxic Bot Inc."
global.botscript = 'https://instagram.com/_not.luffy?igshid=MzNlNGNkZWQ4Mg==' //script link
global.packname = "sticker ano ith"
global.author = "audarshinta mon"
global.creator = "916282137207@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.hituet = 0

//media target
global.thum = fs.readFileSync("./DeepakMedia/theme/Zenitsu.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./DeepakMedia/theme/Zenitsu.jpg") //ur logo pic
global.err4r = fs.readFileSync("./DeepakMedia/theme/Zenitsu.jpg") //ur error pic
global.thumb = fs.readFileSync("./DeepakMedia/theme/Zenitsu.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: '𝐒𝐮𝐜𝐜𝐞𝐬𝐬!',
    admin: '𝐓𝐡𝐢𝐬 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐜𝐨𝐮𝐥𝐝 𝐛𝐞 𝐮𝐬𝐞𝐝 𝐛𝐲 𝐚𝐝𝐦𝐢𝐧𝐬 𝐨𝐧𝐥𝐲!',
    botAdmin: '𝐁𝐨𝐭 𝐌𝐮𝐬𝐭 𝐁𝐞 𝐀𝐝𝐦𝐢𝐧 𝐅𝐢𝐫𝐬𝐭!',
    premime: '𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐒𝐩𝐞𝐜𝐢𝐚𝐥 𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬 𝐈𝐟 𝐘𝐨𝐮 𝐖𝐚𝐧𝐭 𝐭𝐨 𝐑𝐞𝐠𝐢𝐬𝐭𝐞𝐫 𝐓𝐲𝐩𝐞 𝐑𝐞𝐧𝐭',
    owner: '𝐓𝐡𝐢𝐬 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐜𝐨𝐮𝐥𝐝 𝐛𝐞 𝐮𝐬𝐞𝐝 𝐛𝐲 me 𝐨𝐧𝐥𝐲',
    group: '𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬 𝐔𝐬𝐞𝐝 𝐎𝐧𝐥𝐲 𝐅𝐨𝐫 𝐆𝐫𝐨𝐮𝐩𝐬!',
    private: '𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬 𝐔𝐬𝐞𝐝 𝐎𝐧𝐥𝐲 𝐅𝐨𝐫 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 𝐂𝐡𝐚𝐭!',
    bot: '𝐓𝐡𝐢𝐬 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐜𝐨𝐮𝐥𝐝 𝐛𝐞 𝐮𝐬𝐞𝐝 𝐛𝐲 𝐙𝐞𝐧𝐢𝐭𝐬𝐮-𝐁𝐨𝐭 𝐨𝐧𝐥𝐲!',
    wait: '𝐖𝐚𝐢𝐭...',
    linkm: '𝐖𝐡𝐞𝐫𝐞 𝐢𝐬 𝐭𝐡𝐞 𝐥𝐢𝐧𝐤?',
    endLimit: '𝐘𝐨𝐮𝐫 𝐃𝐚𝐢𝐥𝐲 𝐋𝐢𝐦𝐢𝐭 𝐇𝐚𝐬 𝐄𝐱𝐩𝐢𝐫𝐞𝐝, 𝐓𝐡𝐞 𝐋𝐢𝐦𝐢𝐭 𝐖𝐢𝐥𝐥 𝐁𝐞 𝐑𝐞𝐬𝐞𝐭 𝐄𝐯𝐞𝐫𝐲 𝟏𝟐 𝐇𝐨𝐮𝐫𝐬',
    nsfw: '𝐓𝐡𝐞 𝐧𝐬𝐟𝐰 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐡𝐚𝐬 𝐧𝐨𝐭 𝐛𝐞𝐞𝐧 𝐚𝐜𝐭𝐢𝐯𝐚𝐭𝐞𝐝, 𝐩𝐥𝐞𝐚𝐬𝐞 𝐜𝐨𝐧𝐭𝐚𝐜𝐭 𝐭𝐡𝐞 𝐚𝐝𝐦𝐢𝐧 𝐭𝐨 𝐚𝐜𝐭𝐢𝐯𝐚𝐭𝐞(𝐓𝐲𝐩𝐞 𝐍𝐬𝐟𝐰 𝐨𝐧)𝐭𝐨 𝐚𝐜𝐭𝐢𝐯𝐚𝐭𝐞',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
