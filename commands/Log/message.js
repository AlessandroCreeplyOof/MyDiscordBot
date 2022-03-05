const Discord = require("discord.js")

client.on("messageUpdate", (oldMessage, newMessage) => {
    
    const messaggioupdate = new Discord.MessageEmbed()
    .setTitle("[UPDATE MESSAGE]")
    .setDescription("User edited message.")
    .addField("User:", `${newMessage.author.toString()}`, false)
    .addField("oldMessage:", `${oldMessage}`, false)
    .addField("newMessage", `${newMessage}`, false)
    .setTimestamp()
    .setColor("YELLOW")

    client.channels.cache.get("948344721368027246").send({embeds: [messaggioupdate]})
})

client.on("messageDelete", message => {

    const messaggioeliminato = new Discord.MessageEmbed()
    .setTitle("[DELETE MESSAGE]")
    .setDescription("User deleted a message.")
    .addField("User:", `${message.author.toString()}`, false)
    .addField("Message:", `${message}`, false)
    .setTimestamp()
    .setColor("RED")

    client.channels.cache.get("948344721368027246").send({embeds: [messaggioeliminato]})
})

