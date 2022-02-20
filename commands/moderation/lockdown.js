const Discord = require("discord.js")

var lockdownon = new Discord.MessageEmbed()
.setTitle(`LOCKDOWN ATTIVATO`)
.setDescription(`Da questo momento non sarà più possibile inviare messaggi nel server!`)
.setColor(`RED`)
.setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/941101829847130122/noperms.png`)

var lockdownoff = new Discord.MessageEmbed()
.setTitle(`LOCKDOWN DISATTIVATO`)
.setDescription(`Da ora sarà possibile continuare a mandare messaggi nel server!`)
.setColor(`GREEN`)
.setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/941101829457051738/eseguito.png`)

var lockdownAttivato = false;
client.on("messageCreate", message => {
    if (message.content == "!lockdown") {
        if (!lockdownAttivato) {
            message.channel.send({ embeds: [lockdownon] })
            client.channels.cache.get("944904295034290236").send({embeds: [lockdownon]}); 

            var everyone = message.guild.roles.everyone
            everyone.setPermissions(["SEND_MESSAGES", "EMBED_LINKS", "READ_MESSAGE_HISTORY", "USE_VAD"]) //Scrivere tutti i permessi che di default @everyone deve avere tranne VIEW_CHANNEL

            client.channels.cache.get("887061611557294091").permissionOverwrites.edit(everyone, { //Canale in cui è presente un messaggio per avvisare del lockdown attivo (facoltativo)
                VIEW_CHANNEL: true,
            })
        }
        else {
            message.channel.send({ embeds: [lockdownoff] })
            client.channels.cache.get("944904295034290236").send({embeds: [lockdownoff]}); 

            var everyone = message.guild.roles.everyone
            everyone.setPermissions(["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS", "READ_MESSAGE_HISTORY", "USE_VAD"]) //Scrivere tutti i permessi che di default @everyone

            client.channels.cache.get("887061611557294091").permissionOverwrites.edit(everyone, { //Canale in cui è presente un messaggio per avvisare del lockdown attivo (facoltativo)
                VIEW_CHANNEL: false,
            })
        }
        lockdownAttivato = !lockdownAttivato
    }
})