const Discord = require("discord.js")

module.exports = {
    name: "suggest",
    data: {
        name: "suggest",
        description: "Suggerisci una nuova funzione per il server",
        options: [
            {
                name: "suggestion",
                description: "Inserisci un suggerimento",
                type: "STRING",
                required: true
            }
        ]
    },

    execute(interaction) {

        var suggestmessage = interaction.options.getString("suggestion")

        let suggest = new Discord.MessageEmbed()
        .setTitle("Suggestion")
        .setThumbnail(interaction.author.user.displayAvatarURL())
        .setDescription(suggestmessage)
        .setTimestamp()

        interaction.reply({ embeds: [suggest]} )
    }
}