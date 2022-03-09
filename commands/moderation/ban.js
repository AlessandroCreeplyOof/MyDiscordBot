module.exports = {
    name: "ban",
    data: {
        name: "ban",
        description: "Bannare un utente",
        options: [
            {
                name: "user",
                description: "L'utente da bannare",
                type: "USER",
                required: true
            },
            {
                name: "reason",
                description: "Motivazione",
                type: "STRING",
                required: false
            }
        ]
    },
    execute(interaction) {
        if (!interaction.member.permissions.has("BAN_MEMBERS")) {
            return interaction.reply({ content: "Non hai il permesso", ephemeral: true })
        }

        var utente = interaction.options.getUser("user")
        var reason = interaction.options.getString("reason") || "Nessun motivo"

        var member = interaction.guild.members.cache.get(utente.id)
        if (!member?.bannable) {
            return interaction.reply({ content: "Non posso bannare questo utente", ephemeral: true })
        }

        member.ban()

        var embed = new Discord.MessageEmbed()
            .setTitle("Utente bannato")
            .setThumbnail(utente.displayAvatarURL())
            .addField("User", utente.toString())
            .addField("Reason", reason)

        interaction.reply({ embeds: [embed] })
    }
}