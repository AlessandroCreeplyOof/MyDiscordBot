const Discord = require("discord.js")

module.exports = {
    name: "userinfo",
    data: {
        name: "userinfo",
        description: "Ottieni le statistiche di un utente",
        options: [
            {
                name: "user",
                description: "L'utente di cui vuoi le statistiche",
                type: "USER",
                required: true
            },
        ]
    },

    execute(interaction) {

        var infouser = interaction.options.getUser("user")
        let utente = interaction.guild.members.cache.get(infouser.id)

        let embed = new Discord.MessageEmbed()
        .setTitle(utente.user.tag)
        .setDescription("Tutte le info di questo utente")
        .setThumbnail(utente.user.displayAvatarURL())
        .addField("User id", utente.user.id, true)
        .addField("Status", utente.presence ? utente.presence.status : "offline", true)
        .addField("Is a bot?", utente.user.bot ? "Yes" : "No", true)
        .addField("Account created", utente.user.createdAt.toDateString(), true)
        .addField("Joined this server", utente.joinedAt.toDateString(), true)

        interaction.reply({ embeds: [embed] })
    }
}