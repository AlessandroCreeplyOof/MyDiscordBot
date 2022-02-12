const Discord = require("discord.js")

var nontrovato = new Discord.MessageEmbed()
.setTitle(`UTENTE NON TROVATO`)
.setDescription(`Ooops, non sono riuscito a trovare questo utente!`)
.setColor(`GREEN`)
.setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/942011608996147230/giastanza-removebg-preview_1.png`)

client.on("messageCreate", message => {
    if (message.content.startsWith("!avatar")) {
        if (message.content.trim() == "!avatar") {
            var utente = message.member;
        }
        else {
            var utente = message.mentions.members.first();
        }
        if (!utente) {
            return message.channel.send({ embeds: [nontrovato] })
        }
        var embed = new Discord.MessageEmbed()
            .setTitle(utente.user.tag)
            .setDescription("Ecco a te l'avatar dell'utente da scelto!")
            .setColor("BLUE")
            .setImage(utente.user.displayAvatarURL({
                dynamic: true,
                format: "png",
                size: 512
            }))
        message.channel.send({ embeds: [embed] })
    }
})