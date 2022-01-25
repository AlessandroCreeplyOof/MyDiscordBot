// INIZIALIZZA IL BOT
const Discord = require("discord.js")
global.client = new Discord.Client(
    { intents:["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGES"] }
)

client.login("OTMzMzUyMjgxNDgxNTcyMzUy.YegSDA.cVRn8mPzJ78o9LKtXmIwnvAUes0")

const fs = require("fs");

client.commands = new Discord.Collection();

const commandsFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commandsFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const commandsFolder = fs.readdirSync("./commands");
for (const folder of commandsFolder) {
    const commandsFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith(".js"));
    for (const file of commandsFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

const eventsFiles = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
for (const file of eventsFiles) {
    const event = require(`./events/${file}`);
    client.on(event.name, (...args) => event.execute(...args))
}

client.on("messageCreate", message => {
    const prefix = "!";

    if (!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command) && !client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command))) return

    var comando = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command))

    if (comando.onlyStaff) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send("Non hai il permesso di eseguire questo comando")
            return
        }
    }

    comando.execute(message, args);
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

