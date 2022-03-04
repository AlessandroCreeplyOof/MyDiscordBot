const Discord = require("discord.js")

const nonmenzione = new Discord.MessageEmbed()
.setTitle(`Error 404`)
.setDescription("Non hai completato la sintassi del comando! \n \n **Syntax:** `!rifiutasuggest [utente] [testo]`")
.setColor(`ORANGE`)
.setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/947283060653690930/warn-removebg-preview.png`)

var nonvalido = new Discord.MessageEmbed()
.setTitle(`:x: Inserisci un messaggio`)
.setColor("#eb4034")
.setDescription("Scrivi un testo nel messaggio! \n \n **Sintassi corretta:** `!rifiutasuggest [utente] [testo]`")

client.on("messageCreate", message => {
    if (message.content.startsWith("!rifiutasuggest")) {
        var utente = message.mentions.members.first();
        var args = message.content.split(/\s+/);
        var testo = args.slice(2).join(" ")

        if (!utente) {
            return message.channel.send({ embeds: [nonmenzione]});
        }

        if (!testo) {
            return message.channel.send({ embeds: [nonvalido]});
        }

        var embed = new Discord.MessageEmbed()
        .setTitle(`:x: Suggerimento RIFIUTATO! :x:`)
        .setDescription(`Il tuo suggerimento è stato respinto! \n \n :bookmark_tabs: **Motivo** \n` + testo)
        .setColor("RED")
        .setTimestamp()

        var inviato = new Discord.MessageEmbed()
        .setTitle(`:x: Rifiuto INVIATO`)
        .setDescription(`Hai inviato la **ragioni** del rifiuto all'utente \n \n :bookmark_tabs: **Motivo** \n` + testo)
        .setColor("GREEN")
        .setTimestamp()

        utente.user.send({embeds: [embed]}).catch(() => {return})
        message.channel.send({ embeds: [inviato] }).catch(() => {return})
    }
})