const Discord = require("discord.js");

client.on("messageCreate", message => {
    if (message.channel.type == "DM") return

    if (message.member.roles.cache.has("869234525576765552")) return

    var parolacce = ["porcodio", "porco dio", "madonna porca", "porca madonna", "porcamadonna", "madonnaporca", "diostronzo", "diocane", "canedio", "dio cane", "cane dio"]
    var trovata = false;
    var testo = message.content;

    parolacce.forEach(parola => {
        if (message.content.toLowerCase().includes(parola.toLowerCase())) {
            trovata = true;
            testo = testo.replace(eval(`/${parola}/g`), "###");
        }
    })

    if (trovata) {
        message.delete();

        var embed = new Discord.MessageEmbed()
        .setAuthor("[BADWORD] ", message.author.username)
        .setDescription("Hai scritto un messaggio con parole bloccate\r**Message** \n " + testo)
        .setThumbnail("https://media.discordapp.net/attachments/941101779297378314/947283079863603251/parolabloccata-removebg-preview.png")
        .setColor("PURPLE")

        var dmembed = new Discord.MessageEmbed()
            .setTitle("Hai detto una parolaccia")
            .setDescription("Hai scritto un messaggio con parole bloccate\r**Message** \n " + testo)
            .setThumbnail("https://media.discordapp.net/attachments/941101779297378314/947283079863603251/parolabloccata-removebg-preview.png")
            .setColor("PURPLE")

        message.channel.send({ embeds: [embed] })
        message.user.send( {embeds: [dmembed] })
    }
})