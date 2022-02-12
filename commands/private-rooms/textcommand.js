const Discord = require("discord.js")

var nonpuoi = new Discord.MessageEmbed()
.setTitle(`Errore`)
.setDescription(`Non puoi usare questo comando qui!`)
.setColor(`GREY`)
.setThumbnail(`https://cdn.discordapp.com/attachments/941101779297378314/942011608996147230/giastanza-removebg-preview_1.png`)

var sintassi = new Discord.MessageEmbed()
.setTitle(`Utente non rilevato`)
.setDescription(`Oops! Qualcosa è andato storto! Sintassi corretta: [!padd @utente o !premove @utente]`)
.setColor(`GREY`)
.setThumbnail(`https://cdn.discordapp.com/attachments/941101779297378314/942011608996147230/giastanza-removebg-preview_1.png`)

var maistato = new Discord.MessageEmbed()
.setTitle(`Errore`)
.setDescription(`Questo utente non è mai stato in questa chat!`)
.setColor(`GREY`)
.setThumbnail(`https://cdn.discordapp.com/attachments/941101779297378314/942011608996147230/giastanza-removebg-preview_1.png`)

var moderatoreno = new Discord.MessageEmbed()
.setTitle(`Errore`)
.setDescription(`Non puoi rimuovere un moderatore dalla tua stanza!`)
.setColor(`GREY`)
.setThumbnail(`https://cdn.discordapp.com/attachments/941101779297378314/942011608996147230/giastanza-removebg-preview_1.png`)

var giàaccesso = new Discord.MessageEmbed()
.setTitle(`Errore`)
.setDescription(`Questo utente ha già accesso alla stanza!`)
.setColor(`GREY`)
.setThumbnail(`https://cdn.discordapp.com/attachments/941101779297378314/942011608996147230/giastanza-removebg-preview_1.png`)

client.on("messageCreate", message => {
    if (message.content == "!pdelete") {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send({ embeds: [nonpuoi] });
            return
        }
        if (topic.startsWith("Stanza di:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                message.channel.delete();
            }
        }
        else {
            message.channel.send({ embeds: [nonpuoi] })
        }
    }
    if (message.content.startsWith("!padd")) {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send({ embeds: [nonpuoi] });
            return
        }
        if (topic.startsWith("Stanza di:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                var utente = message.mentions.members.first();
                if (!utente) {
                    message.channel.send({ embeds: [sintassi] });
                    return
                }
                var haIlPermesso = message.channel.permissionsFor(utente).has("VIEW_CHANNEL", true)
                if (haIlPermesso) {
                    message.channel.send({ embeds: [giàaccesso] })
                    return
                }
                message.channel.permissionOverwrites.edit(utente, {
                    VIEW_CHANNEL: true
                })
                var utenteaggiunto = new Discord.MessageEmbed()
                .setTitle(`Utente Aggiunto con successo`)
                .setDescription(`Da ora ` + `${utente.toString()}` + ` potrà scrivere in questa chat!`)
                .setColor(`GREEN`)
                .setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/941101829457051738/eseguito.png`)
                message.channel.send({ embeds: [utenteaggiunto] })
            }
        }
        else {
            message.channel.send({ embeds: [nonpuoi] })
        }
    }
    if (message.content.startsWith("!pban")) {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send({ embeds: [nonpuoi] });
            return
        }
        if (topic.startsWith("Stanza di:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                var utente = message.mentions.members.first();
                if (!utente) {
                    message.channel.send({ embeds: [sintassi] });
                    return
                }
                var haIlPermesso = message.channel.permissionsFor(utente).has("VIEW_CHANNEL", true)
                if (!haIlPermesso) {
                    message.channel.send({ embeds: [maistato] })
                    return
                }
                if (utente.permissions.has("MANAGE_CHANNELS")) {
                    message.channel.send({ embeds: [moderatoreno] })
                    return
                }
                message.channel.permissionOverwrites.edit(utente, {
                    VIEW_CHANNEL: false
                })
                var utenterimosso = new Discord.MessageEmbed()
                .setTitle(`#BAN ${utente.toString()}`)
                .setDescription(`Da ora ` + `${utente.toString()}` + ` sarà bannato dalla tua stanza`)
                .setColor(`PURPLE`)
                .setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/941101829847130122/noperms.png`)
                message.channel.send({ embeds: [utenterimosso] })
            }
        }
        else {
            message.channel.send({ embeds: [nonpuoi] })
        }
    }
})