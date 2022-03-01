const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content == "!prova") {
    var embed1 = new Discord.MessageEmbed()
        .setTitle("Embed1")
        .setDescription("Questo è il primo embed")
    var embed2 = new Discord.MessageEmbed()
        .setTitle("Embed1")
        .setDescription("Questo è il secondo embed")
    var embed3 = new Discord.MessageEmbed()
        .setTitle("Embed1")
        .setDescription("Questo è il terzo embed")
    var messaggi = [embed1, embed2, embed3]
    message.channel.send({ embeds: [messaggi[Math.floor(Math.random() * messaggi.length)]] });
}
})

