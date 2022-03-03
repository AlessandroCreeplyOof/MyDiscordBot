const Discord = require("discord.js")

const nonpermesso1 = new Discord.MessageEmbed()
.setTitle(`Error 404`)
.setDescription(`Non hai il permesso per eseguire questa azione!`)
.setColor(`ORANGE`)
.setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/944975611208794162/permsscanvas-removebg-preview.png`)

const nonmenzione = new Discord.MessageEmbed()
.setTitle(`Error 404`)
.setDescription("Non hai menzionato nessun utente da kickare! \n \n **Syntax:** `!kick [utente]`")
.setColor(`ORANGE`)
.setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/944976235568701491/mentionscanvas-removebg-preview.png`)

client.on("messageCreate", message => {
    if (message.content.startsWith("!kick")) {
        var utente = message.mentions.members.first();
        if (!message.member.permissions.has('KICK_MEMBERS')) {
            return message.channel.send({ embeds: [nonpermesso1] });
        }
        if (!utente) {
            return message.channel.send({embeds: [nonmenzione] });
        }
        if (!utente.kickable) {
            return message.channel.send({ embeds: [nonpermesso1] });
        }
        utente.kick()
            .then(() => {

                var embed = new Discord.MessageEmbed()
                    .setTitle(`#KICK ${utente.user.username}`)
                    .setDescription(`Kicked ${utente.user.username} \n Moderator: ${message.author.toString()}`)
                    .setColor("PURPLE")
                    .setThumbnail("https://media.discordapp.net/attachments/941101779297378314/947283069763735572/ban__1_-removebg-preview.png")

                var logkick = new Discord.MessageEmbed()
                    .setAuthor(`[KICK] ${utente.user.username}`)
                    .setDescription(`Moderator: ${message.author.toString()}`)
                    .setColor("PURPLE")
                    .setThumbnail("https://media.discordapp.net/attachments/941101779297378314/947283069763735572/ban__1_-removebg-preview.png")

                message.channel.send({ embeds: [embed] })
                client.channels.cache.get("944904295034290236").send({embeds: [logkick]}); 
            })
    }
})