const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content == "!github") {
        var embed = new Discord.MessageEmbed()
            .setTitle("Github - Links")
            .setColor("AQUA")
            .setDescription("<:githublogo:947452305538691093> Github \n :link: https://github.com/AlessandroCreeplyOof")

        message.channel.send({embeds: [embed]})
    }
})