const Discord = require("discord.js");
require('events').EventEmitter.prototype._maxListeners = 100;

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
        .setTitle(`🪲 Bug Report INVIATO 🪲`)
        .setDescription(`Grazie per aver segnalato un bug all'interno del server! \n Il Nostro staff cercherà di **risolverlo** il prima possibile!`)
        .addField(":bookmark_tabs: Content", bug, true)
        .setColor("#35781d")

       const bugreportato = new Discord.MessageEmbed()
.setTitle(`🪲 Bug Report By ${message.author.username} 🪲`)
.setThumbnail(message.author.displayAvatarURL())
.setDescription(bug)
.setColor("YELLOW")

        client.channels.cache.get("946088529199497237").send({embeds: [bugreportato]}); 
        message.channel.send({embeds: [buginviato]});
    }
})