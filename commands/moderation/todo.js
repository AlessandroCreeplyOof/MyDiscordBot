const Discord = require("discord.js")

module.exports = {
    name: "todo",
    data: {
        name: "todo",
        description: "Inserisci un lavoro da fare nel server",
        options: [
            {
                name: "todo",
                description: "Inserisci il testo",
                type: "STRING",
                required: true
            }
        ]
    },

    execute(interaction) {

        var todomessage = interaction.options.getString("todo")

        let suggest = new Discord.MessageEmbed()
        .setTitle("Things To Do")
        .setDescription(todomessage)
        .setColor("ORANGE")
        .setTimestamp()

        interaction.reply({ embeds: [suggest]} )
    }
}