const Discord = require("discord.js")

var online = new Discord.MessageEmbed()
.setTitle("🟢 **BOT ONLINE**")
.setDescription("Il Bot è Online ✅")
.setColor("GREEN")

client.on('ready', () => {
    console.log("✅Online | Bot On!")
client.channels.cache.get("934182975267041321").send( {embeds: [online] })
    }) 