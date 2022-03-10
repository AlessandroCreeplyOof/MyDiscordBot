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
    }
}