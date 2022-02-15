const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content == "!test") {
        var embed = new Discord.MessageEmbed()
            .setTitle("Creeply's Bot - Ping")
            .setThumbnail("https://cdn.discordapp.com/attachments/941101779297378314/942913195570528296/logobot1.png")
            .setColor("AQUA")
            .addField(":stopwatch: Uptime Bot", "```" + `${ms(client.uptime, { long: true })} - ${moment(new Date().getTime() - client.uptime).format("ddd DD MMM, HH:mm:ss")}` + "```")
            .addField(":turtle: Ping", "```" + `${client.ws.ping}ms` + "```", true)
            .addField(":floppy_disk: Ram usata", "```" + `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB` + "```", true)

        message.channel.send({embeds: [embed]})
    }
})