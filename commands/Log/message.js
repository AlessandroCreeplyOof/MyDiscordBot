const Discord = require("discord.js")

client.on("messageUpdate", (oldMessage, newMessage) => {
    
    const messaggioupdate = new Discord.MessageEmbed()
    .setTitle("[UPDATE MESSAGE]")
    .setDescription("User edited message.")
    .addField("User:", `${newMessage.author.toString()}`, false)
    .addField("oldMessage:", `${oldMessage}`, false)
    .addField("newMessage", `${newMessage}`, false)
    .setTimestamp()
    .setColor("PURPLE")

    client.channels.cache.get("948344721368027246").send({embeds: [messaggioupdate]})
})

