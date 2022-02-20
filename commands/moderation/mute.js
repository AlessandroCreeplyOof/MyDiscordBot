const Discord = require("discord.js")

var nontrovato = new Discord.MessageEmbed()
.setTitle(`Errore`)
.setDescription(`Ooops, non sono riuscito a trovare questo utente!`)
.setColor(`GREY`)
.setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/942011608996147230/giastanza-removebg-preview_1.png`)

var nonpermesso1 = new Discord.MessageEmbed()
.setTitle(`Errore`)
.setDescription(`Non hai il permesso per mutare questo utente!`)
.setColor(`RED`)
.setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/942011608996147230/giastanza-removebg-preview_1.png`)

var nonmenzione = new Discord.MessageEmbed()
.setTitle(`Errore`)
.setDescription(`Non hai menzionato nessuno da mutare!`)
.setColor(`GREY`)
.setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/942011608996147230/giastanza-removebg-preview_1.png`)

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
        .setDescription(`Nuovo mute \n ${utente.user.username} è stato mutato \n 🌐 Moderatore: ${message.author.toString()}`)
        .setColor("RED")
        .setTimestamp("")

        var embed = new Discord.MessageEmbed()
            .setTitle(`#MUTE ${utente.user.username}`)
            .setDescription(`L'utente ${utente.user.username} è stato mutato \n 🌐 Moderatore: ${message.author.toString()}`)
            .setColor("PURPLE")
            .setTimestamp("")

        message.channel.send({ embeds: [embed] })
        client.channels.cache.get("944904295034290236").send({embeds: [logmute]}); 
    }
})