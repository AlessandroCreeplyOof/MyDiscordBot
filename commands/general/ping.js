const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content == "!ping", "!test") {
        var embed = new Discord.MessageEmbed()
            .setTitle("Ping del bot")
            .setDescription("Ecco la latenza del bot")
            .addField("Ping", `${client.ws.ping}ms`)
            .setColor("RANDOM")

        message.channel.send({embeds: [embed]})
    }
})