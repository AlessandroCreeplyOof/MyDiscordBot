const Discord = require("discord.js")

const nonmenzione = new Discord.MessageEmbed()
.setTitle(`Error 404`)
.setDescription("Non hai completato la sintassi del comando! \n \n **Syntax:** `!accettasuggest [utente] [testo]`")
.setColor(`ORANGE`)
.setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/947283060653690930/warn-removebg-preview.png`)

client.on("messageCreate", message => {
    if (message.content.startsWith("!accettasuggest")) {
        var utente = message.mentions.members.first();

        if (!utente) {
            return message.channel.send({ embeds: [nonmenzione]});
        }

        var embed = new Discord.MessageEmbed()
        .setTitle(`✅ Suggerimento ACCETTATO! ✅`)
        .setDescription(`Il tuo suggerimento è stato accettato!`)
        .setColor("GREEN")
        .setTimestamp()

        var inviato = new Discord.MessageEmbed()
        .setTitle(`✅ Risposta INVIATO`)
        .setDescription(`Hai inviato la risposta al suggerimento del utente`)
        .setColor("GREEN")
        .setTimestamp()

        utente.user.send({embeds: [embed]}).catch(() => {return})
        message.channel.send({ embeds: [inviato] }).catch(() => {return})
    }
})