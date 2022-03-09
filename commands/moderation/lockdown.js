const Discord = require("discord.js")

module.exports = {
    name: "lockdown",
    data: {
        name: "lockdown",
        description: "Manda in lockdown il server",
        options: [
            {
                name: "off",
                description: "Lockdown off",
                type: "STRING",
                required: true
            },
            {
                name: "on",
                description: "Lockdown on",
                type: "STRING",
                required: true
            }
        ]
    }
}