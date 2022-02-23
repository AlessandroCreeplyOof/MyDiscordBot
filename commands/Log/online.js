const Discord = require("discord.js")

const online = new Discord.MessageEmbed()
.setTitle("Bot ONLINE")
.setDescription(":clock: Time \n `Soon...` ")
.setColor("DARK_GREEN")

const offline = new Discord.MessageEmbed()
.setTitle("📤 #BOTLOG")
.setDescription(`🔴 Il bot è andato offline!`)
.setColor("RED")
.setTimestamp()

client.on('ready', () => {
    console.log("✅Online | Bot On!")
    client.channels.cache.get("934182975267041321").send({embeds: [online]})
    })