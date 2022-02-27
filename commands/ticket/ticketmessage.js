const Discord = require("discord.js")

const embedticket = new Discord.MessageEmbed()
.setTitle("Hai bisogno di aiuto?")
.setDescription("Apri un **ticket** di supporto per richiedere aiuto allo staff! \n \n Potrai parlare e fare domande allo staff, se aprirai un ticket inutilmente subirai un **WARN!**")
.setImage("https://media.discordapp.net/attachments/941101779297378314/942424504876015636/TICKETGRAPHIC.png?width=1193&height=671")
.setColor("AQUA")

const apertoticket = new Discord.MessageEmbed()
.setTitle("Hai APERTO con successo un ticket!")
.setDescription("Ecco i comandi utili nei ticket!")
.addField("!tadd", "Aggiungi utente al ticket", false)
.addField("!tremove", "Rimuovi utente dal ticket", false)
.addField("!tclose", "Chiudi il ticket", false)
.setColor("AQUA")
.setImage("https://media.discordapp.net/attachments/941101779297378314/942424475415240714/TICKETOPEN.png?width=1193&height=671")

const giaperto = new Discord.MessageEmbed()
.setTitle("Hai GIA' un ticket aperto!")
.setDescription("Non puoi creare più di: **1** ticket!")
.setColor("RED")
.setImage("https://media.discordapp.net/attachments/941101779297378314/942424826373603378/TICKETGIA.png?width=1193&height=671")

//Prima di tutto mandare il messaggio del ticket
client.on("messageCreate", message => {
    if (message.content == "!comando") {
        var button1 = new Discord.MessageButton()
            .setLabel("Apri ticket")
            .setCustomId("apriTicket")
            .setStyle("SUCCESS")
            .setEmoji("🎟️")

        var row = new Discord.MessageActionRow()
            .addComponents(button1)

        message.channel.send({ embeds: [embedticket], components: [row] })
    }
})

client.on("interactionCreate", interaction => {
    if (interaction.customId == "apriTicket") {
        interaction.deferUpdate()
        if (interaction.guild.channels.cache.find(canale => canale.topic == `ID Ticket: ${interaction.user.id}`)) {
            interaction.user.send({ embeds: [giaperto] }).catch(() => { })
            return
        }
        interaction.guild.channels.create(interaction.user.username, {
            type: "text",
            topic: `ID Ticket: ${interaction.user.id}`,
            parent: "933801615545233408",
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: ["VIEW_CHANNEL"]
                },
                {
                    id: interaction.user.id,
                    allow: ["VIEW_CHANNEL"]
                },
                {
                    id: "946073035084025878",
                    allow: ["VIEW_CHANNEL"]
                },
            ]
        }).then(canale => {
            canale.send({ embeds: [apertoticket] })
        })
    }
})

client.on("messageCreate", message => {
    if (message.content == "!tclose") {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("ID Ticket:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                message.channel.delete();
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
    if (message.content.startsWith("!tadd")) {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("ID Ticket:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                var utente = message.mentions.members.first();
                if (!utente) {
                    message.channel.send("Inserire un utente valido");
                    return
                }
                var haIlPermesso = message.channel.permissionsFor(utente).has("VIEW_CHANNEL", true)
                if (haIlPermesso) {
                    message.channel.send("Questo utente ha gia accesso al ticket")
                    return
                }
                message.channel.permissionOverwrites.edit(utente, {
                    VIEW_CHANNEL: true
                })
                message.channel.send(`${utente.toString()} è stato aggiunto al ticket`)
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
    if (message.content.startsWith("!tremove")) {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("ID Ticket:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                var utente = message.mentions.members.first();
                if (!utente) {
                    message.channel.send("Inserire un utente valido");
                    return
                }
                var haIlPermesso = message.channel.permissionsFor(utente).has("VIEW_CHANNEL", true)
                if (!haIlPermesso) {
                    message.channel.send("Questo utente non ha gia accesso al ticket")
                    return
                }
                if (utente.permissions.has("MANAGE_CHANNELS")) {
                    message.channel.send("Non puoi rimuovere questo utente")
                    return
                }
                message.channel.permissionOverwrites.edit(utente, {
                    VIEW_CHANNEL: false
                })
                message.channel.send(`${utente.toString()} è stato rimosso al ticket`)
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
})