const Discord = require("discord.js")

module.exports = {
    name: "unban",
    data: {
        name: "unban",
        description: "Unbanna un utente dal server",
        options: [
            {
                name: "user",
                description: "L'Utente da UnBannare",
                type: "USER",
                required: true
            }
        ]
    }
}