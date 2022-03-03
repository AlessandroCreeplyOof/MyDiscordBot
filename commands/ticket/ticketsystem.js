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

const nonqui = new Discord.MessageEmbed()
.setTitle("Non puoi qui!")
.setDescription("Non puoi usare questo comando in questa chat!")
.setColor("RED")
.setThumbnail("https://media.discordapp.net/attachments/941101779297378314/947283060653690930/warn-removebg-preview.png")

const giaaccesso = new Discord.MessageEmbed()
.setTitle("Questo utente ha gia' accesso!")
.setDescription("L'utente da te selezionato ha già accesso a questo ticket!")
.setThumbnail("https://media.discordapp.net/attachments/941101779297378314/947283060653690930/warn-removebg-preview.png")

const giarimosso = new Discord.MessageEmbed()
.setTitle("Questo utente non è mai stato qui!")
.setDescription("L'utente da te selezionato non ha mai avuto accesso a questo ticket!")
.setThumbnail("https://media.discordapp.net/attachments/941101779297378314/947283060653690930/warn-removebg-preview.png")

const utentenonvalido = new Discord.MessageEmbed()
.setTitle("Questo utente non è valido!")
.setDescription("L'utente da te selezionato non è valido!")
.setThumbnail("https://media.discordapp.net/attachments/941101779297378314/947283060653690930/warn-removebg-preview.png")

const adminrimosso = new Discord.MessageEmbed()
.setTitle("Non puoi rimuovere un admin!")
.setDescription("Non puoi rimuovere questo utente dal ticket!")
.setThumbnail("https://media.discordapp.net/attachments/941101779297378314/947283060653690930/warn-removebg-preview.png")

//Prima di tutto mandare il messaggio del ticket
client.on("messageCreate", message => {
    if (message.content == "!ticketmessage") {
        if (!message.member.roles.cache.has("869234525576765552")) {
            return message.channel.send("Non puoi eseguire questo comando perchè non hai il permesso");
        } 

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
        interaction.guild.channels.create("🎟️╵" + interaction.user.username, {
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
            message.channel.send({ embeds: [nonqui]});
            return
        }
        if (topic.startsWith("ID Ticket:")) {
            var idUtente = topic.slice(9);
        }
        else {
            message.channel.send({ embeds: [nonqui]})
        }
    }
    if (message.content.startsWith("!tadd")) {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send({ embeds: [nonqui]});
            return
        }
        if (topic.startsWith("ID Ticket:")) {
            var idUtente = topic.slice(9);
                if (!utente) {
                    message.channel.send({embeds: [utentenonvalido]});
                    return
                }
                var haIlPermesso = message.channel.permissionsFor(utente).has("VIEW_CHANNEL", true)
                if (haIlPermesso) {
                    message.channel.send({ embeds: [giaaccesso]})
                    return
                }
                message.channel.permissionOverwrites.edit(utente, {
                    VIEW_CHANNEL: true
                })
                const aggiunto = new Discord.MessageEmbed()
.setTitle(`Hai aggiunto con successo ${utente.toString()}`)
.setThumbnail("https://media.discordapp.net/attachments/941101779297378314/947443747673767946/fatto-removebg-preview.png")
.setDescription("Hai aggiunto con successo l'utente ", utente.toString(), " al ticket")

                message.channel.send({ embeds: [aggiunto]})
            }
        }
        else {
            message.channel.send({ embeds: [nonqui]})
        }
    if (message.content.startsWith("!tremove")) {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send({ embeds: [nonqui]});
            return
        }
        if (topic.startsWith("ID Ticket:")) {
            var idUtente = topic.slice(9);
                if (!utente) {
                    message.channel.send({ embeds: [utentenonvalido]});
                    return
                }
                var haIlPermesso = message.channel.permissionsFor(utente).has("VIEW_CHANNEL", true)
                if (!haIlPermesso) {
                    message.channel.send({ embeds: [giarimosso]})
                    return
                }
                if (utente.permissions.has("MANAGE_CHANNELS")) {
                    message.channel.send({ embeds: [adminrimosso]})
                    return
                }
                message.channel.permissionOverwrites.edit(utente, {
                    VIEW_CHANNEL: false
                })
                const rimosso = new Discord.MessageEmbed()
                .setTitle(`Hai rimosso con successo ${utente.toString()}`)
                .setThumbnail("https://media.discordapp.net/attachments/941101779297378314/947443747673767946/fatto-removebg-preview.png")
                .setDescription("Hai rimosso con successo l'utente ", utente.toString(), " al ticket")
                .setColor("RED")

                message.channel.send({ embeds: [rimosso]})
            }
        }
        else {
            message.channel.send({ embeds: [nonqui]})
        }
    })