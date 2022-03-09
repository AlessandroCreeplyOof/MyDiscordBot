module.exports = {
    name: "roleinfo",
    data: {
        name: "roleinfo",
        description: "Visualizza le statistiche di un ruolo",
        options: [
            {
                name: "ruolo",
                description: "L'utente di cui vuoi l'avatar",
                type: "ROLE",
                required: true
            }
        ]
    },

execute(interaction) {

    let role = interaction.options.getRole("ruolo")

    var memberCount = message.guild.members.cache.filter(member => member.roles.cache.find(role => role == ruolo)).size;
    var permessiRuolo = new Discord.Permissions(ruolo.permissions.bitfield);
    var elencoPermessi = "";
    if (permessiRuolo.has("ADMINISTRATOR")) {
        elencoPermessi = "👑ADMINISTRATOR";
    }
    else {
        let permessi = ["CREATE_INSTANT_INVITE", "KICK_MEMBERS", "BAN_MEMBERS", "MANAGE_CHANNELS", "MANAGE_GUILD", "ADD_REACTIONS", "VIEW_AUDIT_LOG", "PRIORITY_SPEAKER", "STREAM", "VIEW_CHANNEL", "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "VIEW_GUILD_INSIGHTS", "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS", "MOVE_MEMBERS", "USE_VAD", "CHANGE_NICKNAME", "MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_WEBHOOKS"]
        for (var i = 0; i < permessi.length; i++) {
            if (permessiRuolo.has(permessi[i])) {
                elencoPermessi += `- ${permessi[i]}\r`
            }
        }

    let embed = new Discord.MessageEmbed()
        .setTitle(role.name)
        .setDescription("Tutte le statistiche di questo ruolo")
        .addField("Role ID", ruolo.id, true)
        .addField("Members", memberCount.toString(), true)
        .addField("Color", ruolo.hexColor, true)
        .addField("Role created", ruolo.createdAt.toDateString(), true)
        .addField("Permissions", elencoPermessi, false)

    interaction.reply({ embeds: [embed] })

}
}}