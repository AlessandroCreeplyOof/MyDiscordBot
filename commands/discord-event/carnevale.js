const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content.startsWith("!coriandoli")) {
        var utente = message.mentions.members.first();

        const coriandoli = new Discord.MessageEmbed()
        .setTitle("UOOO! CORIANDOLI!")
        .setDescription("Hai lanciato i coriandoli in faccia ad " + utente.user.username + " ahhahaha!")
        .setColor("RED")
    }
})