const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content == "!test") {
        var embed = new Discord.MessageEmbed()
            .setTitle("Creeply's Bot - Ping")
            .setThumbnail("https://cdn.discordapp.com/attachments/941101779297378314/942913195570528296/logobot1.png")
            .setColor("AQUA")
            .setDescription("Ecco il ping del bot")
            .addField(":turtle: Ping", `${client.ws.ping}ms`)

        message.channel.send({embeds: [embed]})
    }
})