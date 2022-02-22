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
        value: "general",
        emoji: "🎡",
    },
    {
        label: "Community",
        description: "Comandi per la community del server!",
        value: "community",
        emoji: "💡",
    },
    {
        label: "Moderazione",
        description: "Comandi di moderazione del server",
        value: "moderazione",
        emoji: ":police_officer:",
    },
    {
        label: "Private Rooms",
        description: "Comandi delle stanze private del server",
        value: "rooms",
        emoji: ":closed_lock_with_key:",
    },
    {
        label: "Tickets",
        description: "Comandi dei ticket del server",
        value: "ticket",
        emoji: "🪧",
    }
])
)

client.on("messageCreate", message => {
    if (message.content == ("!help")) {
        var helpembed = new Discord.MessageEmbed()
        .setTitle("🔧 HELP COMMANDS 🔧")
        .setDescription("Ecco a te tutti i comandi **disponibili** all'interno del server! \n \n **Prefix:** `!` \n \n **Categorie comandi:** \n :ferris_wheel: Generali \n:bulb: Community \n :police_officer: Moderazione \n :closed_lock_with_key: Private rooms \n 🪧 Tickets \n \n *Seleziona la categoria dal menù sottostante!*")
        .setThumbnail("https://media.discordapp.net/attachments/941101779297378314/942913195570528296/logobot1.png")

        message.channel.send({embeds: [helpembed], components: [row]})
    }
})