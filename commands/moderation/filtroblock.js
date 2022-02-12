const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.channel.type == "DM") return

    if (message.member.roles.cache.has("870224089548226560") || message.member.roles.cache.has("870224089548226560")) return

    var parolacce = ["porcodio", "porco dio", "porcamadonna", "dioporco", "madonnaporca", "porca madonna", "madonna porca"]
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
            .setTitle("Hai scritto una parole bloccata!")
            .setDescription("Hai scritto un messaggio con parole bloccate\rIl tuo messaggio: " + testo)
            .setColor("PURPLE")
            .setThumbnail("https://cdn.discordapp.com/attachments/941101779297378314/941101829847130122/noperms.png")

        message.channel.send({ embeds: [embed] })
    }
})