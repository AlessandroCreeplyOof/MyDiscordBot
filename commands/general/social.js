const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content == "!social") {

        const social = new Discord.MessageEmbed()
        .setTitle("Links Utili - Creeply&Community")
        .setDescription("Ecco alcuni link utili! \n 🎥 **YouTube** \n - https://youtube.com/c/Creeply \n <:githublogo:947452305538691093> **GitHub** \n - https://github.com/AlessandroCreeplyOof")
        .setFooter("Comando in continuo aggiornamento...")
        .setTimestamp()
        .setImage("https://media.discordapp.net/attachments/941101779297378314/944266920255963206/communitybanner_1.png?width=1342&height=671")

        message.channel.send({ embeds: [social] })
    }
})