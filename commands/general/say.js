const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content.startsWith("!say")) {
        var args = message.content.split(/\s+/);
        var testo;
        testo = args.slice(1).join(" ");
        if (!testo) {
            return message.channel.send("Inserire un messaggio");
        }
        if (message.content.includes("@everyone") || message.content.includes("@here")) {
            return message.channel.send("Non taggare everyone o here");
        }
        message.delete()

        //Embed
        var embed = new Discord.MessageEmbed()
            .setTitle("Say By Utente")
            .setDescription(testo)
            .setColor("YELLOW")
            .setTimestamp("")

        message.channel.send({embeds: [embed]})
    }
})