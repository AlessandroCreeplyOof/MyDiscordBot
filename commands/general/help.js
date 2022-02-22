const Discord = require("discord.js");

const row = new Discord.MessageActionRow()
.addComponents(
    new Discord.MessageSelectMenu()
.setPlaceholder("Seleziona la categoria...")
.setCustomId("help")
.setMinValues("1")
.setMaxValues("1")
.addOptions([
    {
        label: "General",
        description: "Comandi generali del server!",
        value: "uovo",
        emoji: "🎡",
    },
    {
        label: "Community",
        description: "Comandi per la community del server!",
        value: "community",
        emoji: "💡",
    }
])
)

client.on("messageCreate", message => {
    if (message.content == ("!help")) {
        var helpembed = new Discord.MessageEmbed()
        .setTitle(":robot: HELP COMMANDS :robot:")
        .setDescription("Ecco a te tutti i comandi **disponibili** all'interno del server! \n \n **Prefix:** `!` \n \n **Categorie comandi:** \n :ferris_wheel: Generali \n:bulb: Community \n :police_officer: Moderazione \n :closed_lock_with_key: Private rooms \n 🪧 Tickets \n Seleziona la categoria dal menù sottostante!")

        message.channel.send({embeds: [helpembed], components: [row]})
    }
})