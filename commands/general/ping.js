const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content == "!test") {
        var embed = new Discord.MessageEmbed()
            .setTitle("Creeply Community - Bot")
            .setDescription("Ecco la latenza del bot")
            .addField("🐢 Ping", `${client.ws.ping}ms`)
            .setThumbnail("https://media.discordapp.net/attachments/941101779297378314/942913195570528296/logobot1.png")
            .setColor("DARK_AQUA")

        message.channel.send({embeds: [embed]})
    }
})