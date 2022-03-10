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
    }
}