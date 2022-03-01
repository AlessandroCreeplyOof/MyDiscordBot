const Discord = require("discord.js")

client.on("messageDelete", message => {
    
    const DeletedLog = new Discord.MessageEmbed()
    .setTitle("Deleted Message")
    .addField("Deleted by", message.author, false)
    .addField("In", message.channel, false)
    .addField("Content:", message.content)
    .setColor("RED")
    .setThumbnail(message.author.displayAvatarURL({dybamic: true}))
})

