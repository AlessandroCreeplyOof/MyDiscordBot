const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content.startsWith("!mute")) {
        var utente = message.mentions.members.first();
        if (!message.member.permissions.has("MANAGE_ROLES")) {
            return message.channel.send('Non hai il permesso');
        }
        if (!utente) {
            return message.channel.send('Non hai menzionato nessun utente');
        }

        utente.roles.add("896396962113421392")

        var embed = new Discord.MessageEmbed()
            .setTitle(`${utente.user.username} mutato`)
            .setDescription(`Utente mutato da ${message.author.toString()}`)
            .setColor("FUCHSIA")
            .setTimestamp("")

        message.channel.send({ embeds: [embed] })
    }
})