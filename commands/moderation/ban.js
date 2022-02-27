const Discord = require("discord.js")

const nonpermesso1 = new Discord.MessageEmbed()
.setTitle(`Error 404`)
.setDescription(`Non hai il permesso per eseguire questa azione!`)
.setColor(`ORANGE`)
.setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/947283060653690930/warn-removebg-preview.png`)

const nonmenzione = new Discord.MessageEmbed()
.setTitle(`Error 404`)
.setDescription("Non hai menzionato nessun utente da bannare! \n \n **Syntax:** `!ban [utente]`")
.setColor(`ORANGE`)
.setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/947283060653690930/warn-removebg-preview.png`)

client.on("messageCreate", message => {
    if (message.content.startsWith("!ban")) {
        var utente = message.mentions.members.first();
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            return message.channel.send({embeds: [nonpermesso1]});
        }
        if (!utente) {
            return message.channel.send({ embeds: [nonmenzione]});
        }
        if (!utente.bannable) {
            return message.channel.send({embeds: [nonpermesso1]});
        }
        utente.ban()
            .then(() => {
                var embed = new Discord.MessageEmbed()
                    .setTitle(`[BAN] ${utente.user.username}`)
                    .setDescription(`Modertaor: ${message.author.toString()}`)
                    .setColor("RED")
                    .setImage("https://media.discordapp.net/attachments/941101779297378314/947283069763735572/ban__1_-removebg-preview.png")

                var logban = new Discord.MessageEmbed()
                    .setTitle(`[BAN] ${utente.user.username}`)
                    .setDescription(`Modertaor: ${message.author.toString()}`)
                    .setColor("PURPLE")
                    .setImage("https://media.discordapp.net/attachments/941101779297378314/947283069763735572/ban__1_-removebg-preview.png")

                message.channel.send({ embeds: [embed] })
                client.channels.cache.get("944904295034290236").send({embeds: [logban]}); 
            })
    }
})
    
