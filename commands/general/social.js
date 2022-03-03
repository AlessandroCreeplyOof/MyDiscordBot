const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content == "!social") {

        const social = new Discord.MessageEmbed()
        .setTitle("Links Utili - Creeply&Community")
        .setDescription("Ecco alcuni link utili! \n 🎥 **YouTube** \n - https://youtube.com/c/Creeply \n <:githublogo:947452305538691093> **GitHub** \n - https://github.com/AlessandroCreeplyOof")
        .setFooter("Comando in continuo aggiornamento...")
        .setTimestamp()

        message.channels.send({ embeds: social })
    }
})