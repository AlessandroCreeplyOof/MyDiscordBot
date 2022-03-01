const Discord = require("discord.js")

var data = new Date();
var datag = data.getUTCDate();
var hours = data.getHours();
var minuti = data.getMinutes();

const online = new Discord.MessageEmbed()
.setTitle("Bot ONLINE")
.setDescription("⏰ Il bot è online!")
.setColor("DARK_GREEN")

client.on('ready', () => {
    console.log("✅Online | Bot On!")
    client.channels.cache.get("934182975267041321").send({embeds: [online]})
    })