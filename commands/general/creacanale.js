const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content == "!comando") {
        message.guild.channels.create("NomeCanale", { //Nome canale
            type: "text",
            topic: "Descrizione", //Descrizione (topic)
            parent: "Categoria", //Categoria
            permissionOverwrites: [
                /*
                    id = id dell'utente/ruolo
                    allow = permessi che vengono concesse in quel canale
                    deny = permessi che vengono tolte in quel canale
                */
                {
                    id: message.guild.id, //everyone
                    deny: ['VIEW_CHANNEL'],
                },
                {
                    id: message.member.id,
                    allow: ['VIEW_CHANNEL'],
                },
            ]
        })
    }
})