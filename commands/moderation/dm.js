const Discord = require("discord.js")

module.exports = {
    name: "senddm",
    data: {
        name: "dmsend",
        description: "Invia un dm tramite bot",
        options: [
            {
                name: "utente",
                description: "Inserisci un utente a cui inviare il messaggio",
                type: "USER",
                required: true
            },
            {
                name: "messaggio",
                description: "Inserisci un messaggio",
                type: "STRING",
                required: true
            }
        ]
    },

    execute(interaction) {

        var messaggio = interaction.options.getString("messaggio")
        var utente = interaction.options.getUser("utente")

        let suggest = new Discord.MessageEmbed()
        .setTitle("Ti è stato inviato un messaggo in dm")
        .setDescription(messaggio)
        .setTimestamp()

        interaction.utente.reply({ embeds: [suggest]} )
    }
}