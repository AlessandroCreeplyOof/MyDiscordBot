const Discord = require("discord.js")

var lockdownon = new Discord.MessageEmbed()
.setTitle(`LOCKDOWN ATTIVATO`)
.setDescription(`E' appena stato attivato il sistema di LOCKDOWN del server! \n \n Da ora fino a tempo inderminato tutti gli utenti non potranno più visualizzare i canali del server`)
.setColor(`RED`)

var lockdownoff = new Discord.MessageEmbed()
.setTitle(`LOCKDOWN DISATTIVATO`)
.setDescription(`E' stato finalmente disattivato il sistema di LOCKDOWN del server! \n \n Da ora potrete continuare a chattare nel server! Buona permanenza e ci scusiamo per il disagio`)
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