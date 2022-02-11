const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content.startsWith("!userinfo")) {
        if (message.content == "!userinfo") {
            var utente = message.member;
        }
        else {
            var utente = message.mentions.members.first();
        }
        if (!utente) {
            return message.channel.send("Non ho trovato questo utente")
        }
        var elencoPermessi = "";
        if (utente.permissions.has("ADMINISTRATOR")) {
            elencoPermessi = "👑 ADMINISTRATOR";
        }
        else {
            var permessi = ["CREATE_INSTANT_INVITE", "KICK_MEMBERS", "BAN_MEMBERS", "ADMINISTRATOR", "MANAGE_CHANNELS", "MANAGE_GUILD", "ADD_REACTIONS", "VIEW_AUDIT_LOG", "PRIORITY_SPEAKER", "STREAM", "VIEW_CHANNEL", "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "VIEW_GUILD_INSIGHTS", "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS", "MOVE_MEMBERS", "USE_VAD", "CHANGE_NICKNAME", "MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_WEBHOOKS", "MANAGE_EMOJIS_AND_STICKERS", "USE_APPLICATION_COMMANDS", "REQUEST_TO_SPEAK", "MANAGE_THREADS", "CREATE_PUBLIC_THREADS", "CREATE_PRIVATE_THREADS", "USE_EXTERNAL_STICKERS", "SEND_MESSAGES_IN_THREADS", "START_EMBEDDED_ACTIVITIES"]
            for (var i = 0; i < permessi.length; i++)
                if (utente.permissions.has(permessi[i]))
                    elencoPermessi += `- ${permessi[i]}\r`
        }
        var embed = new Discord.MessageEmbed()
            .setTitle("User Stats Of" + utente.user.tag)
            .setDescription("Tutte le info di questo utente")
            .setThumbnail(utente.user.displayAvatarURL())
            .addField("🧾 User id", utente.user.id, true)
            .addField("🌐 Status", utente.presence ? utente.presence.status : "offline", true)
            .addField("🤖 Is a bot?", utente.user.bot ? "Yes" : "No", true)
            .addField("💽 Account created", utente.user.createdAt.toDateString(), true)
            .addField("🗞️ Joined this server", utente.joinedAt.toDateString(), true)
            .addField("📁 Permissions", elencoPermessi, false)
            .addField("👕 Roles", utente.roles.cache.map(ruolo => ruolo.name).join("\r"), false)
        message.channel.send({ embeds: [embed] })
    }
})
