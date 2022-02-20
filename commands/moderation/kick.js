const Discord = require("discord.js")

var nontrovato = new Discord.MessageEmbed()
.setTitle(`Errore`)
.setDescription(`Ooops, non sono riuscito a trovare questo utente!`)
.setColor(`GREY`)
.setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/942011608996147230/giastanza-removebg-preview_1.png`)

var nonpermesso1 = new Discord.MessageEmbed()
.setTitle(`Errore`)
.setDescription(`Non hai il permesso per kickare questo utente!`)
.setColor(`RED`)
.setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/942011608996147230/giastanza-removebg-preview_1.png`)

var nonmenzione = new Discord.MessageEmbed()
.setTitle(`Errore`)
.setDescription(`Non hai menzionato nessuno da kickare!`)
.setColor(`GREY`)
.setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/942011608996147230/giastanza-removebg-preview_1.png`)

client.on("messageCreate", message => {
    if (message.content.startsWith("!kick")) {
        var utente = message.mentions.members.first();
        if (!message.member.permissions.has('KICK_MEMBERS')) {
            return message.channel.send({ embeds: [nontrovato] });
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
                    .setDescription(`L'utente ${utente.user.username} è stato kickato! \n \n 🌐 Moderatore: ${message.author.toString()}`)
                    .setColor("PURPLE")
                    .setThumbnail("https://cdn.discordapp.com/attachments/941101779297378314/941101829046042755/ban.png")

                var logkick = new Discord.MessageEmbed()
                    .setTitle(`#KICK ${utente.user.username}`)
                    .setDescription(`**Nuovo Kick** \n \n ${utente.user.username} è stato kickato \n \n 🌐 Moderatore: ${message.author.toString()}`)
                    .setColor("RED")
                    .setThumbnail("https://cdn.discordapp.com/attachments/941101779297378314/941101829046042755/ban.png")

                message.channel.send({ embeds: [embed] })
                client.channels.cache.get("944904295034290236").send({embeds: [logkick]}); 
            })
    }
})