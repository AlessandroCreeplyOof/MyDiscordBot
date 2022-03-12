const Discord = require("discord.js")

module.exports = {
    name: "channelinfo",
    data: {
        name: "channelinfo",
        description: "Ottieni le statistiche di un canale/categoria",
        options: [
            {
                name: "channel",
                description: "Il canale di cui vuoi le statistiche",
                type: "CHANNEL",
                required: true
            },
        ]
    },
}