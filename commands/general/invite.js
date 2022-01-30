const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content == "!invite") {
        const embed = new Discord.MessageEmbed()
            .setTitle("INVITO DEL SERVER") //Titolo
            .setColor("FUCHSIA") // Colore principale
            .setDescription("Con questo invito potrai invitare i tuoi amici nel server!") //Descrizione
            .addField("https://discord.gg/eXWPat6CTb")
        message.channel.send({embeds: [embed]})
    }
})