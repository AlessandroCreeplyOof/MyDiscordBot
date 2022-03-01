const Discord = require("discord.js")

const nonmenzione = new Discord.MessageEmbed()
.setTitle(`Error 404`)
.setDescription("Non hai completato la sintassi del comando! \n \n **Syntax:** `!scherzo [utente] [testo]`")
.setColor(`ORANGE`)
.setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/947283060653690930/warn-removebg-preview.png`)

var nonvalido = new Discord.MessageEmbed()
.setTitle(`:x: Inserire un suggerimento`)
.setColor("#eb4034")
.setDescription("Scrivi un testo nel suggerimento! \n \n **Sintassi corretta:** `!suggest [testo]`")

client.on("messageCreate", message => {
    if (message.content == "!scherzo") {
        var args = message.content.split(/\s+/);
        var testo = args.slice(2).join(" ")

        var utente = message.mentions.members.first();

        if (!utente) {
            return message.channel.send({ embeds: [nonmenzione]});
        }

        if (!testo) {
            return message.channel.send({ embeds: [nonvalido]});
        }

        var embed = new Discord.MessageEmbed()
        .setTitle(`Hai ricevuto uno scherzo in anonimo!`)
        .setDescription(`Hai ricevuto uno **scherzo** in anonimo \n :bookmark_tabs: **Content:** \n` + testo)
        .setColor("ORANGE")
        .setTimestamp()

        utente.user.send({embeds: [embed]})
    }
})