const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content == "!youtube") {
        var embed = new Discord.MessageEmbed()
            .setTitle("Canale YouTube")
            .setImage("https://media.discordapp.net/attachments/941101779297378314/944266920255963206/communitybanner_1.png?width=1342&height=671")
            .setColor("WHITE")
            .setDescription("Ecco il canale telegram ufficiale: \n https://youtube.com/c/creeply")

        message.channel.send({embeds: [embed]})
    }
})