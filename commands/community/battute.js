const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content == "!battuta") {
    var embed1 = new Discord.MessageEmbed()
        .setTitle("Battuta ORRIBILE...")
        .setDescription("Il gabibbo cade in un caffè... SPLASH! ☕")
        .setThumbnail("https://media.discordapp.net/attachments/941101779297378314/948322782079504444/caffe.png")
        .setColor("ORANGE")
    var embed2 = new Discord.MessageEmbed()
        .setTitle("Battuta ORRIBILE...")
        .setDescription("Una tv viene gettata in acqua, ora purtroppo.. va in onda 📺")
        .setThumbnail("https://media.discordapp.net/attachments/941101779297378314/948322781718786088/tv.png")
        .setColor("ORANGE")
    var messaggi = [embed1, embed2]
    message.channel.send({ embeds: [messaggi[Math.floor(Math.random() * messaggi.length)]] });
}
})

