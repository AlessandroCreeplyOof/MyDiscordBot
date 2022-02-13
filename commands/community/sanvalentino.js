const Discord = require("discord.js")

const sanvalentino = new Discord.MessageEmbed()
.setTitle("Il giorno dell'amore... ❤️")
.setColor("RED")
.setDescription("La festa degli innamorati è arrivata.. festeggiamola insieme all'interno del server, e se non sei ancora mai stato innamorato, innamorati della community!")
.setImage("https://cdn.discordapp.com/attachments/941101779297378314/942412436307324979/SAN_VAlENTINO.png")


setInterval(function () {
var hour = new Date().getHours();
var minutes = new Date().getMinutes();
if (hour == "00" && minutes == "00") { 
client.channels.cache.get("942151565379256351").send( { embeds: [sanvalentino]} );
}
}, 1000 * 60)