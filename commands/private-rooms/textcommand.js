const Discord = require("discord.js")

var utenteaggiunto = new Discord.MessageEmbed()
.setTitle(`Utente Aggiunto con successo`)
.setDescription(`Da ora ` + `${utente.toString()}` + ` potrà scrivere in questa chat!`)
.setColor(`GREEN`)
.setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/941101829457051738/eseguito.png`)

client.on("messageCreate", message => {
    if (message.content == "!pdelete") {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("Stanza di:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                message.channel.delete();
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
    if (message.content.startsWith("!padd")) {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (name.startsWith("")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                var utente = message.mentions.members.first();
                if (!utente) {
                    message.channel.send("Inserire un utente valido");
                    return
                }
                var haIlPermesso = message.channel.permissionsFor(utente).has("VIEW_CHANNEL", true)
                if (haIlPermesso) {
                    message.channel.send("Questo utente ha gia accesso alla stanza")
                    return
                }
                message.channel.permissionOverwrites.edit(utente, {
                    VIEW_CHANNEL: true
                })
                message.channel.send({ embeds: [utenteaggiunto] })
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
    if (message.content.startsWith("!pban")) {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("Stanza di:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                var utente = message.mentions.members.first();
                if (!utente) {
                    message.channel.send("Inserire un utente valido");
                    return
                }
                var haIlPermesso = message.channel.permissionsFor(utente).has("VIEW_CHANNEL", true)
                if (!haIlPermesso) {
                    message.channel.send("Questo utente non è mai stato in questa stanza!")
                    return
                }
                if (utente.permissions.has("MANAGE_CHANNELS")) {
                    message.channel.send("Non puoi rimuovere questo utente poichè è un moderatore!")
                    return
                }
                message.channel.permissionOverwrites.edit(utente, {
                    VIEW_CHANNEL: false
                })
                message.channel.send(`${utente.toString()} è stato bannato dalla stanza`)
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
})