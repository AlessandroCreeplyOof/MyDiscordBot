const Discord = require("discord.js")

const maggiore = new Discord.MessageEmbed()
.setTitle("Error 404")
.setDescription("Non puoi cancellare più di 100 messaggi tutti insieme! \n Syntax `!clear [count]`")
.setColor("ORANGE")

const numero = new Discord.MessageEmbed()
.setTitle("Error 404")
.setDescription("Scrivi un numero corretto! \n Syntax `!clear [count]`")
.setColor("ORANGE")

const noperms = new Discord.MessageEmbed()
.setTitle("Error 404")
.setDescription("Non hai il permesso per utilizzare questo comando")
.setColor("ORANGE")

client.on("messageCreate", message => {
    if (message.content.startsWith("!clear")) {
        if (!message.member.permissions.has("MANAGE_MESSAGES")) {
            return message.channel.send({embeds: [noperms]});
        }
        if (!message.guild.me.permissions.has("MANAGE_MESSAGES")) {
            return message.channel.send({embeds: [noperms]});
        }
        var count = parseInt(message.content.split(/\s+/)[1]);
        if (!count) {
            return message.channel.send({embeds: [numero]})
        }
        if (count > 100) {
            return message.channel.send({embeds: [maggiore]})
        }
        message.channel.bulkDelete(count, true)
        const deletemessage = new Discord.MessageEmbed()
.setTitle("Eseguito con successo!")
.setDescription("Ho cancellato con successo" + count + " messaggi da questa chat")
.setColor("ORANGE")
        message.channel.send({embeds: [deletemessage]}).then(msg => {
            setTimeout(() => msg.delete(), 10000)
        })
    }
})