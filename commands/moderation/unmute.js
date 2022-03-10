const Discord = require("discord.js")

module.exports = {
    name: "unmute",
    data: {
        name: "unmute",
        description: "UnMuta un utente dal server",
        options: [
            {
                name: "user",
                description: "L'Utente da UnMutare",
                type: "USER",
                required: true
            }
        ]
    }
}