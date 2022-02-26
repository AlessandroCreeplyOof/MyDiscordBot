const Discord = require("discord.js");
require('events').EventEmitter.prototype._maxListeners = 100;

var troppolungo = new Discord.MessageEmbed()
.setTitle(`🚨 Messaggio troppo lungo!`)
.setColor("ORANGE")
.setDescription("Il testo da te mandato è troppo lungo! \n `Max: 500 Caratteri`")

var nonvalido = new Discord.MessageEmbed()
.setTitle(`:x: Inserire un bug da reportare`)
.setColor("#eb4034")
.setDescription("Scrivi un testo nel bug report! \n \n **Sintassi corretta:** `!bugreport [testo]`")

client.on("messageCreate", message => {
    if (message.content.startsWith("!bugreport")) {
        var args = message.content.split(/\s+/);
        var bug = args.slice(1).join(" ")

        if (!bug) {
            message.channel.send({embeds: [nonvalido]})
            return
        }

         const buginviato = new Discord.MessageEmbed()
         .setTitle(`🐙 BUG REPORT INVIATO 🐙`)
         .setDescription(`Grazie per aver segnalato un bug all'interno del server!`)
         .setThumbnail(message.author.displayAvatarURL())
         .addField(":bookmark_tabs: Content", suggest, true)
         .setColor("#356331")

        const suggesta = new Discord.MessageEmbed()
.setTitle(`🐙 BUG REPORTATO DA ${message.author.username} 🐙`)
.setThumbnail(message.author.displayAvatarURL())
.setColor("#356331")
.setDescription(bug)

        client.channels.cache.get("946088529199497237").send({embeds: [suggesta]}); 
        message.channel.send({embeds: [buginviato]});
    }
})