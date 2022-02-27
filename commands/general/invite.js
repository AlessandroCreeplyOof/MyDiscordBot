const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content == "!invite") {
        const embed = new Discord.MessageEmbed()
            .setTitle(":woman_raising_hand: Invito del server")
            .setColor("#677BC4")
            .setDescription("<:festa:944921599059066931> Con questo invito potrai invitare i tuoi **amici** nel server \n \n https://dsc.gg/creeply")
        message.channel.send({embeds: [embed]})
    }
})