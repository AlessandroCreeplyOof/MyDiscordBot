const Discord = require("discord.js")

module.exports = {
    name: "mute",
    data: {
        name: "mute",
        description: "Muta un utente dal server",
        options: [
            {
                name: "user",
                description: "L'Utente da Mutare",
                type: "USER",
                required: true
            },
            {
                name: "reason",
                description: "Motivazione",
                type: "STRING",
                required: true
            }
        ]
    },
    execute(interaction) {

        var muteduser = interaction.options.getUser("user")
        let utente = interaction.guild.members.cache.get(muteduser.id)

        if (!message.member.permissions.has("MANAGE_ROLES")) {
            return message.channel.send({ content: "Non hai il permesso", ephemeral: true });
        }

        utente.roles.add("896396962113421392")

        var embed = new Discord.MessageEmbed()
            .setTitle(`Utente Mutato`)
            .setThumbnail(utente.displayAvatarURL())
            .addField("User", utente.toString())
            .addField("Reason", reason)

            interaction.reply({ embeds: [embed] })
    }
}