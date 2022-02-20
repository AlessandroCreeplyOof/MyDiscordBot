const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content.startsWith("!tdo")) {
        var args = message.content.split(/\s+/);
        var thingstodo = args.slice(1).join(" ")

        const tdo1 = new Discord.MessageEmbed()
        .setTitle(`💡 Things To Do`)
        .setDescription("`", thingstodo, "` \n \n Stato: IN REVISIONE")
        .setColor("WHITE")
        .setTimestamp()
    }
})