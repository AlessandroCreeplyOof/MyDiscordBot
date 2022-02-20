const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content.startsWith("!suggest")) {
        var args = message.content.split(/\s+/);
        var suggest = args[1]

        var embed = new Discord.MessageEmbed()
        .setTitle(`💡Suggerimento by + ${message.author.toString}`)
        .setThumbnail("https://media.discordapp.net/attachments/941101779297378314/944975611791822848/suggestcanvas-removebg-preview.png")
        .setDescription(suggest)
        .setTimestamp()

        client.channels.cache.get("944545494531715112").send({embeds: [embed]}); 
    }
})

