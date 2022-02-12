const Discord = require("discord.js")

var nontrovato = new Discord.MessageEmbed()
.setTitle(`Errore`)
.setDescription(`Ooops, non sono riuscito a trovare questo utente!`)
.setColor(`GREY`)
.setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/942011608996147230/giastanza-removebg-preview_1.png`)

var nonpermesso1 = new Discord.MessageEmbed()
.setTitle(`Errore`)
.setDescription(`Non hai il permesso per rimuovere le infrazioni a questo utente!`)
.setColor(`RED`)
.setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/942011608996147230/giastanza-removebg-preview_1.png`)

var nonmenzione = new Discord.MessageEmbed()
.setTitle(`Errore`)
.setDescription(`Non hai menzionato nessuno da cui togliere l'infrazione`)
.setColor(`GREY`)
.setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/942011608996147230/giastanza-removebg-preview_1.png`)

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
            .setTitle(`#UNMUTE ${utente.user.username}`)
            .setDescription(`Utente unmutato da ${message.author.toString()}`)
            .setTimestamp("")
            .setColor("PURPLE")

        message.channel.send({ embeds: [embed] })
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
                    .setTitle("#UNBAN")
                    .setDescription("Questo utente è stato sbannato")
                    .setColor("GREEN")
                    .setTimestamp("")

                message.channel.send({ embeds: [embed] })
            })
            .catch(() => { message.channel.send("Utente non valido o non bannato") })
    }
})