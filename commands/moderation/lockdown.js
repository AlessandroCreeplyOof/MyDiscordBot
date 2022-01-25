const Discord = require("discord.js")

var lockdownAttivato = false;
client.on("messageCreate", message => {
    if (message.content == "!lockdown") {
        if (!lockdownAttivato) {
            message.channel.send("Lockdown ATTIVATO!")

            var everyone = message.guild.roles.everyone
            everyone.setPermissions(["SEND_MESSAGES", "EMBED_LINKS", "READ_MESSAGE_HISTORY", "USE_VAD"]) //Scrivere tutti i permessi che di default @everyone deve avere tranne VIEW_CHANNEL

            client.channels.cache.get("887061611557294091").permissionOverwrites.edit(everyone, { //Canale in cui è presente un messaggio per avvisare del lockdown attivo (facoltativo)
                VIEW_CHANNEL: true,
            })
        }
        else {
            message.channel.send("Lockdown DISATTIVATO!")

            var everyone = message.guild.roles.everyone
            everyone.setPermissions(["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS", "READ_MESSAGE_HISTORY", "USE_VAD"]) //Scrivere tutti i permessi che di default @everyone

            client.channels.cache.get("887061611557294091").permissionOverwrites.edit(everyone, { //Canale in cui è presente un messaggio per avvisare del lockdown attivo (facoltativo)
                VIEW_CHANNEL: false,
            })
        }
        lockdownAttivato = !lockdownAttivato
    }
})