const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content == "ciao") {
        var messaggi = ["Ciao, come va?", "Ehi come stai?", "Tutto bene?"] 
        message.reply(messaggi[Math.floor(Math.random() * messaggi.length)]);
    }
})