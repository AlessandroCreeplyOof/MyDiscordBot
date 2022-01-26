const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content.startsWith("!avatar")) {
        if (message.content.trim() == "!avatar") {
            if (!message.member.roles.cache.has("870224089548226560")) {
                return message.channel.send("Disponibile quando uscirà il nuovo changelog!");
            var utente = message.member;
        }
        else {
            var utente = message.mentions.members.first();
        }
        if (!utente) {
            return message.channel.send("Utente non trovato")
        }
        var embed = new Discord.MessageEmbed()
            .setTitle(utente.user.tag)
            .setDescription("Ecco a te l'avatar dell'utente da scelto!")
            .setImage(utente.user.displayAvatarURL({
                dynamic: true,
                format: "png",
                size: 512
            }))
        message.channel.send({ embeds: [embed] })
    }
}})