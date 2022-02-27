const Discord = require("discord.js")

const nonpermesso1 = new Discord.MessageEmbed()
.setTitle(`Error 404`)
.setDescription(`Non hai il permesso per eseguire questa azione!`)
.setColor(`ORANGE`)
.setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/944975611208794162/permsscanvas-removebg-preview.png`)

const nonmenzione = new Discord.MessageEmbed()
.setTitle(`Error 404`)
.setDescription("Non hai menzionato nessun utente da unbannare/mutare! \n \n **Syntax:** `!unban/unmute [utente]`")
.setColor(`ORANGE`)
.setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/944976235568701491/mentionscanvas-removebg-preview.png`)

client.on("messageCreate", message => {
    if (message.content.startsWith("!unmute")) {
        var utente = message.mentions.members.first();
        if (!message.member.permissions.has("MANAGE_ROLES")) {
            return message.channel.send({ embeds: [nonpermesso1] });
        }
        if (!utente) {
            return message.channel.send({ embeds: [nonmenzione] });
        }

        utente.roles.remove("896396962113421392")

        var embed = new Discord.MessageEmbed()
            .setTitle(`[UNMUTE] ${utente.user.username}`)
            .setDescription(`Moderator: ${message.author.toString()}`)
            .setColor("PURPLE")

        message.channel.send({ embeds: [embed] })
        client.channels.cache.get("944904295034290236").send({embeds: [embed]}); 
    }
})

client.on("messageCreate", async message => {
    if (message.content.startsWith("!unban")) {
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            return message.channel.send({ embeds: [nonpermesso1] });
        }

        var args = message.content.split(/\s+/);
        var idUtente = args[1]

        if (!idUtente) {
            return message.channel.send({ embeds: [nonmenzione] });
        }

        message.guild.members.unban(idUtente)
            .then(() => {
                var embed = new Discord.MessageEmbed()
                    .setTitle(`[UNBAN] ${utente.user.username}`)
                    .setDescription(`Moderator: ${message.author.toString()}`)
                    .setColor("PURPLE")

                message.channel.send({ embeds: [embed] })
                client.channels.cache.get("944904295034290236").send({embeds: [embed]}); 
            })
            .catch(() => { message.channel.send("Utente non valido o non bannato") })
    }
})