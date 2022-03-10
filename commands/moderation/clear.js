const Discord = require("discord.js")

module.exports = {
    name: "clear",
    data: {
        name: "clear",
        description: "Elimina i messaggi da una chat",
        options: [
            {
                name: "numero",
                description: "Numero dei messaggi da eliminare",
                type: "STRING",
                required: true
            }
        ]
    },

    execute(interaction) {
        if (!interaction.member.permissions.has("MANAGE_MESSAGE")) {
            return interaction.reply({ content: "Non hai il permesso", ephemeral: true })
        }

        var count = interaction.options.getString("numero")

        interaction.channel.bulkDelete(count, true)
        interaction.reply(count + " messaggi eliminati").then(msg => {
            setTimeout(() => msg.delete(), 5000)
        })
    }

}