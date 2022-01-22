// INIZIALIZZA IL BOT
const Discord = require("discord.js")
const client = new Discord.Client(
    { intents:["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGES"] }
)

client.login("OTMzMzUyMjgxNDgxNTcyMzUy.YegSDA.uTatV2KjfoYkQyaJQFttIGPMOes")

//BAN
client.on("messageCreate", message => {
    if (message.content.startsWith("!ban")) {
        var utente = message.mentions.members.first();
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            return message.channel.send('Non hai il permesso');
        }
        if (!utente) {
            return message.channel.send('Non hai menzionato nessun utente');
        }
        if (!utente.bannable) {
            return message.channel.send('Io non ho il permesso');
        }
        utente.ban()
            .then(() => {
                var embed = new Discord.MessageEmbed()
                    .setTitle(`${utente.user.username} bannato`)
                    .setDescription(`Utente bannato da ${message.author.toString()}`)
                    .setColor("RED")
                    .setTimestamp("")
                    .setFooter("Bannato il")

                message.channel.send({ embeds: [embed] })
            })
    }
})

//FILTRO PAROLACCE
client.on("messageCreate", message => {
    if (message.channel.type == "DM") return

    if (message.member.roles.cache.has("933352810895007844") || message.member.roles.cache.has("933352811800969236")) return

    var parolacce = ["porcodio", "porco dio", "porcamadonna", "dioporco", "madonnaporca", "porca madonna", "madonna porca"]
    var trovata = false;
    var testo = message.content;

    parolacce.forEach(parola => {
        if (message.content.toLowerCase().includes(parola.toLowerCase())) {
            trovata = true;
            testo = testo.replace(eval(`/${parola}/g`), "###");
        }
    })

    if (trovata) {
        message.delete();
        var embed = new Discord.MessageEmbed()
            .setTitle("Hai scritto una parole bloccata!")
            .setDescription("Hai scritto un messaggio con parole bloccate\rIl tuo messaggio: " + testo)
            .setColor("DARK_RED")
            .setTimestamp("")

        message.channel.send({ embeds: [embed] })
    }
})

// SERVER INFO
client.on("messageCreate", message => {
    if (message.content == "!serverinfo") {
        var server = message.member.guild;
        var embed = new Discord.MessageEmbed()
            .setTitle(server.name)
            .setDescription("Tutte le info su questo server")
            .setThumbnail(server.iconURL())
            .addField("Owner", client.users.cache.get(server.ownerId).username, true)
            .addField("Server id", server.id, true)
            .addField("Members", server.memberCount.toString(), false)
            .addField("Channels", server.channels.cache.size.toString(), false)
            .addField("Server created", server.createdAt.toDateString(), true)
            .addField("Boost level", "Level " + (server.premiumTier != "NONE" ? server.premiumTier : 0) + " (Boost: " + server.premiumSubscriptionCount + ")", true)
        message.channel.send({ embeds: [embed] })
    }
})

// ROLE INFO
client.on("messageCreate", message => {
    if (message.content.startsWith("!roleinfo")) {
        var ruolo = message.mentions.roles.first()
        if (!ruolo) {
            return message.channel.send("Non ho trovato questo ruolo")
        }
        var memberCount = message.guild.members.cache.filter(member => member.roles.cache.find(role => role == ruolo)).size;
        var permessiRuolo = new Discord.Permissions(ruolo.permissions.bitfield);
        var elencoPermessi = "";
        if (permessiRuolo.has("ADMINISTRATOR")) {
            elencoPermessi = "ADMINISTRATOR";
        }
        else {
            var permessi = ["CREATE_INSTANT_INVITE", "KICK_MEMBERS", "BAN_MEMBERS", "MANAGE_CHANNELS", "MANAGE_GUILD", "ADD_REACTIONS", "VIEW_AUDIT_LOG", "PRIORITY_SPEAKER", "STREAM", "VIEW_CHANNEL", "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "VIEW_GUILD_INSIGHTS", "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS", "MOVE_MEMBERS", "USE_VAD", "CHANGE_NICKNAME", "MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_WEBHOOKS"]
            for (var i = 0; i < permessi.length; i++) {
                if (permessiRuolo.has(permessi[i])) {
                    elencoPermessi += `- ${permessi[i]}\r`
                }
            }
        }
        var embed = new Discord.MessageEmbed()
            .setTitle(ruolo.name)
            .setDescription("Tutte le statistiche di questo ruolo")
            .addField("Role ID", ruolo.id, true)
            .addField("Members", memberCount.toString(), true)
            .addField("Color", ruolo.hexColor, true)
            .addField("Role created", ruolo.createdAt.toDateString(), true)
            .addField("Permissions", elencoPermessi, false)
        message.channel.send({ embeds: [embed] })
    }
})

// CLEAR
client.on("messageCreate", message => {
    if (message.content.startsWith("!clear")) {
        if (!message.member.permissions.has("MANAGE_MESSAGES")) {
            return message.channel.send('Non hai il permesso');
        }
        if (!message.guild.me.permissions.has("MANAGE_MESSAGES")) {
            return message.channel.send('Non ho il permesso');
        }
        var count = parseInt(message.content.split(/\s+/)[1]);
        if (!count) {
            return message.channel.send("Inserisci un numero valido")
        }
        if (count > 100) {
            return message.channel.send("Non puoi cancellare più di 100 messaggi")
        }
        message.channel.bulkDelete(count, true)
        message.channel.send(count + " messaggi eliminati con successo!").then(msg => {
            msg.delete({ timeout: 100000 })
        })
    }
})

// MUTE
client.on("messageCreate", message => {
    if (message.content.startsWith("!mute")) {
        var utente = message.mentions.members.first();
        if (!message.member.permissions.has("MANAGE_ROLES")) {
            return message.channel.send('Non hai il permesso');
        }
        if (!utente) {
            return message.channel.send('Non hai menzionato nessun utente');
        }

        utente.roles.add("896396962113421392")

        var embed = new Discord.MessageEmbed()
            .setTitle(`${utente.user.username} mutato`)
            .setDescription(`Utente mutato da ${message.author.toString()}`)
            .setColor("FUCHSIA")
            .setTimestamp("")

        message.channel.send({ embeds: [embed] })
    }
})

// LOCKDOWN
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

//KICK
client.on("messageCreate", message => {
    if (message.content.startsWith("!kick")) {
        var utente = message.mentions.members.first();
        if (!message.member.permissions.has('KICK_MEMBERS')) {
            return message.channel.send('Non hai il permesso');
        }
        if (!utente) {
            return message.channel.send('Non hai menzionato nessun utente');
        }
        if (!utente.kickable) {
            return message.channel.send('Io non ho il permesso');
        }
        utente.kick()
            .then(() => {
                var embed = new Discord.MessageEmbed()
                    .setTitle(`${utente.user.username} kickato`)
                    .setDescription(`Utente kickato da ${message.author.toString()}`)
                    .setColor("ORANGE")
                    .setTimestamp("")

                message.channel.send({ embeds: [embed] })
            })
    }
})

//BENVENUTO RUOLO
client.on("guildMemberAdd", member => {
    if (member.user.bot) return

    member.roles.add("933384681498505258");
});

var ticket = new Discord.MessageEmbed()
.setTitle("**Hai bisogno di aiuto?**")
.setDescription("Clicca il bottone per aprire un ticket e parlare con lo staff di problemi che stai riscontrando nel server!")
.setColor("DARK_GOLD")

var ticket1 = new Discord.MessageEmbed()
.setTitle("**Grazie per aver aperto un ticket!**")
.setDescription("A breve uno staffer ti risponderà, nel frattempo facci sapere di cosa hai bisogno!")
.setColor("GREEN")

//Prima di tutto mandare il messaggio del ticket
client.on("messageCreate", message => {
    if (message.content == "!comando") {
        var button1 = new Discord.MessageButton()
            .setLabel("Apri ticket")
            .setCustomId("apriTicket")
            .setStyle("PRIMARY")

        var row = new Discord.MessageActionRow()
            .addComponents(button1)

            message.channel.send({ embeds: [ticket], components: [row]  })
    }
})

client.on("interactionCreate", interaction => {
    if (interaction.customId == "apriTicket") {
        interaction.deferUpdate()
        if (interaction.guild.channels.cache.find(canale => canale.topic == `User ID: ${interaction.user.id}`)) {
            interaction.user.send("Hai gia un ticket aperto").catch(() => { })
            return
        }
        interaction.guild.channels.create(interaction.user.username, {
            type: "text",
            topic: `User ID: ${interaction.user.id}`,
            parent: "933801615545233408", //Settare la categoria,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: ["VIEW_CHANNEL"]
                },
                {
                    id: interaction.user.id,
                    allow: ["VIEW_CHANNEL"]
                },
                { //Aggiungere altri "blocchi" se si vogliono dare permessi anche a ruoli o utenti
                    id: "870224089548226560",
                    allow: ["VIEW_CHANNEL"]
                }
            ]
        }).then(canale => {
            canale.send( {embeds: [ticket1] })
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
        if (topic.startsWith("User ID:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                message.channel.delete();
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
    if (message.content.startsWith("!add")) {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("User ID:")) {
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
    if (message.content.startsWith("!remove")) {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("User ID:")) {
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

var online = new Discord.MessageEmbed()
.setTitle("🟢 **BOT ONLINE**")
.setDescription("Il Bot è Online ✅")
.setColor("GREEN")

client.on('ready', () => {
    console.log("✅Online | Bot On!")
client.channels.cache.get("934182975267041321").send( {embeds: [online] })
    }) 

    client.on("messageCreate", message => {
        if (message.content.startsWith("!unmute")) {
            var utente = message.mentions.members.first();
            if (!message.member.permissions.has("MANAGE_ROLES")) {
                return message.channel.send('Non hai il permesso');
            }
            if (!utente) {
                return message.channel.send('Non hai menzionato nessun utente');
            }
    
            utente.roles.remove("896396962113421392")
    
            var embed = new Discord.MessageEmbed()
                .setTitle(`${utente.user.username} smutato`)
                .setDescription(`Utente smutato da ${message.author.toString()}`)
                .setTimestamp("")
                .setColor("GREEN")
    
            message.channel.send({ embeds: [embed] })
        }
    })

    client.on("messageCreate", async message => {
        if (message.content.startsWith("!unban")) {
            if (!message.member.permissions.has('BAN_MEMBERS')) {
                return message.channel.send('Non hai il permesso');
            }
    
            var args = message.content.split(/\s+/);
            var idUtente = args[1]
    
            if (!idUtente) {
                return message.channel.send("Non hai scritto l'id di nessun utente");
            }
    
            message.guild.members.unban(idUtente)
                .then(() => {
                    var embed = new Discord.MessageEmbed()
                        .setTitle("Utente sbannato")
                        .setDescription("Questo utente è stato sbannato")
                        .setColor("DARK_GREEN")
                        .setTimestamp("")
    
                    message.channel.send({ embeds: [embed] })
                })
                .catch(() => { message.channel.send("Utente non valido o non bannato") })
        }
    })

    client.on("messageCreate", message => {
        if (message.content.startsWith("!say")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");
            if (!testo) {
                return message.channel.send("Inserire un messaggio");
            }
            if (message.content.includes("@everyone") || message.content.includes("@here")) {
                return message.channel.send("Non taggare everyone o here");
            }
            message.delete()
    
            //Embed
            var embed = new Discord.MessageEmbed()
                .setTitle("Say By Utente")
                .setDescription(testo)
                .setColor("YELLOW")
                .setTimestamp("")
    
            message.channel.send({embeds: [embed]})
        }
    })

    client.on("messageCreate", message => {
        if (message.content == "!ping") {
            var embed = new Discord.MessageEmbed()
                .setTitle("Ping del bot")
                .setDescription("Ecco la latenza del bot")
                .addField("Ping", `${client.ws.ping}ms`)
                .setColor("RANDOM")
    
            message.channel.send({embeds: [embed]})
        }
    })

    client.on('ready', () => {
        //Stato classico (Sta guardando..., Sta giocando a...)
        client.user.setActivity('Creeply V1', { type: 'WATCHING' }); //Oppure LISTENING, PLAYING
        client.user.setStatus('idle') //Oppure idle, dnd, invisible
    })
