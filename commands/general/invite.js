const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content == "!invite") {
        const embed = new Discord.MessageEmbed()
            .setTitle(":woman_raising_hand: Invita i tuoi amici :man_raising_hand:")
            .setColor("#677BC4")
            .setDescription("Con questo invito potrai invitare i tuoi **amici** nel server \n https://discord.gg/eXWPat6CTb")
        message.channel.send({embeds: [embed]})
    }
})