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
    var embed3 = new Discord.MessageEmbed()
    .setTitle("Battuta ORRIBILE...")
    .setThumbnail("https://media.discordapp.net/attachments/941101779297378314/948324309540163655/astuccio.png")
    .setDescription("L'astuccio è pericoloso... ci lasci le penne")
    .setColor("ORANGE")
    var embed4 = new Discord.MessageEmbed()
    .setTitle("Battuta ORRIBILE...")
    .setThumbnail("https://media.discordapp.net/attachments/941101779297378314/948324310035099718/termometro.png")
    .setDescription("Oh vorrei fare una battuta sulla temperatura, ma non penso di essere in.. grado...")
    .setColor("ORANGE")
    var messaggi = [embed1, embed2, embed3, embed4]
    message.channel.send({ embeds: [messaggi[Math.floor(Math.random() * messaggi.length)]] });
}
})

