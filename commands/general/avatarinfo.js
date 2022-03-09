const Discord = require("discord.js")

module.exports = {
    name: "avatar",
    data: {
        name: "avatar",
        description: "Visualizza l'avatar di un utente",
        options: [
            {
                name: "user",
                description: "L'utente di cui vuoi l'avatar",
                type: "USER",
                required: true
            }
        ]
    }
}