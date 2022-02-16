const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content.startsWith("!suggest")) {
        var suggest = args.join(" ")

        if (!suggest) {
            return botCommandMessage(message, "Errore", "Devi scrivere un testo!")
        }

        if (suggest.length > 200) {
            return botCommandMessage(message, "Errore!", "Il tuo suggerimento è troppo lungo", "Scrivi un suggerimento che non sia più lungo di 200")
        }
        var embed = new Discord.MessageEmbed()
        .setTitle("💡 Suggerimento 💡")
        .setColor("BLUE")
        .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true }))
        .setDescription(":bookmark_tabs: Suggestion", contenuto)

    message.channel.send({ embeds: [embed] })
    }
})