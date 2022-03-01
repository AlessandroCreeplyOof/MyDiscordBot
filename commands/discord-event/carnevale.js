const Discord = require("discord.js")

const nonmenzione = new Discord.MessageEmbed()
.setTitle(`Error 404`)
.setDescription("Non hai menzionato nessun utente da bannare! \n \n **Syntax:** `!ban [utente]`")
.setColor(`ORANGE`)
.setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/947283060653690930/warn-removebg-preview.png`)

client.on("messageCreate", message => {
    if (message.content.startsWith("!coriandoli")) {
        var utente = message.mentions.members.first();

        if (!utente) {
            return message.channel.send({ embeds: [nonmenzione]});
        }

        const coriandoli = new Discord.MessageEmbed()
        .setTitle("<:creeplyauguri:945362116221734922> UOOO! CORIANDOLI! 🎉")
        .setDescription("Hai lanciato i coriandoli in faccia ad " + utente.user.username)
        .setThumbnail("https://media.discordapp.net/attachments/941101779297378314/948304717690310797/festa-removebg-preview.png")
        .setColor("RANDOM")
        .setTimestamp()

        message.channel.send({ embeds: [coriandoli] })
    }
})