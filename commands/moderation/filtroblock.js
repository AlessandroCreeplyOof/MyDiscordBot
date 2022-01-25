const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.channel.type == "DM") return

    if (message.member.roles.cache.has("933352810895007844") || message.member.roles.cache.has("933352811800969236")) return

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
            .setColor("DARK_RED")
            .setTimestamp("")

        message.channel.send({ embeds: [embed] })
    }
})