const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content.startsWith("!suggest")) {
        var args = message.content.split(/\s+/);
        var suggest = args.join(" ")

        var embed = new Discord.MessageEmbed()
        .setTitle(`💡 Nuovo Suggerimento`)
        .setThumbnail("https://media.discordapp.net/attachments/941101779297378314/944975611791822848/suggestcanvas-removebg-preview.png")
        .setColor("AQUA")
        .setDescription(suggest)
        .setTimestamp()

        client.channels.cache.get("944545494531715112").send({embeds: [embed]}); 
    }
})

