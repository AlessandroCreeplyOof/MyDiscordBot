const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content.startsWith("!suggest")) {
        var suggest = args.join(" ")

        var embed = new Discord.MessageEmbed()
        .setTitle("💡 Nuovo Suggerimento 💡")
        .setColor("BLUE")
        .setThumbnail(message.member.user.displayAvatarURL)
        .setDescription(" Suggestion:", suggest)

        client.channels.cache.get("935660406796591104").send( {embeds: [embed] })
    }
})