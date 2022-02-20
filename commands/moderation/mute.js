const Discord = require("discord.js")

const nonpermesso1 = new Discord.MessageEmbed()
.setTitle(`Error 404`)
.setDescription(`Non hai il permesso per eseguire questa azione!`)
.setColor(`ORANGE`)
.setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/944975611208794162/permsscanvas-removebg-preview.png`)

const nonmenzione = new Discord.MessageEmbed()
.setTitle(`Error 404`)
.setDescription("Non hai menzionato nessun utente da mutare! \n \n **Syntax:** `!mute [utente]`")
.setColor(`ORANGE`)
.setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/944976235568701491/mentionscanvas-removebg-preview.png`)

client.on("messageCreate", message => {
    if (message.content.startsWith("!mute")) {
        var utente = message.mentions.members.first();
        if (!message.member.permissions.has("MANAGE_ROLES")) {
            return message.channel.send({embeds: [nonpermesso1] });
        }
        if (!utente) {
            return message.channel.send({ embeds: [nonmenzione] });
        }

        utente.roles.add("896396962113421392")

        var logmute = new Discord.MessageEmbed()
        .setTitle(`#MUTE ${utente.user.username}`)
        .setDescription(`Nuovo mute \n \n ${utente.user.username} è stato mutato \n \n 🌐 Moderatore: ${message.author.toString()}`)
        .setColor("RED")
        .setTimestamp("")

        var embed = new Discord.MessageEmbed()
            .setAuthor(`#MUTE ${utente.user.username}`)
            .setDescription(`Reason: \n Nessun Motivo \n Moderator: ${message.author.toString()}`)
            .setColor("PURPLE")
            .setTimestamp("")

        message.channel.send({ embeds: [embed] })
        client.channels.cache.get("944904295034290236").send({embeds: [logmute]}); 
    }
})