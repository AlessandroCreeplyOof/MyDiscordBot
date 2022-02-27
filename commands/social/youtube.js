const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content == "!youtube") {
        var embed = new Discord.MessageEmbed()
            .setTitle("Creeply&YouTube")
            .setColor("AQUA")
            .setDescription("Ecco il **canale** ufficiale di Creeply! \n Iscriviti e attiva la campanellina! \n \n :computer: Creeply \n https://youtube.com/c/creeply \n Tutorial, gaming e moltro altro!")

        message.channel.send({embeds: [embed]})
    }
})