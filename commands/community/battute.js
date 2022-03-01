const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content.startsWith("!battuta")) {

        const embed1 = new Discord.MessageEmbed()
        .setTitle("BATTUTA ORRIBILE")
        .setDescription("Il gabibbo cade nel caffè... SPLASH! ☕")
        .setColor("BURPLE")
        .setTimestamp()

        const embed2 = new Discord.MessageEmbed()
        .setTitle("BATTUTA ORRIBILE")
        .setDescription("Una tv cade in acqua.. meglio perchè va in onda... 📺")
        .setColor("AQUA")
        .setTimestamp()

        message.channel.send({ embeds: [messaggi[Math.floor(Math.random() * messaggi.length)]] });
    }
})