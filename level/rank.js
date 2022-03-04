const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content.startsWith("!avatar")) {

        const rankcard = new Discord.MessageEmbed()
        .setTitle(`Ranking - ${message.author.ToString()}`)
        .setDescription("🔥 Livello 1 \n ◻️ ◽◽◽◽◽ \n XP 0/100")
        .setFooter("Il Sistema di livellamento è al momento disattivato!")

        message.channel.send({ embeds: [rankcard] })
    }
})