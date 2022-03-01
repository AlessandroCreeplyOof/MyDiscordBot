const Discord = require("discord.js")

client.on("messageDelete", message => {
    
    const LogChannel = client.channels.cache.get("948344721368027246")
    const DeletedLog = new Discord.MessageEmbed()
    .setTitle("Deleted Message")
    .addField("Deleted by", message.author, false)
    .addField("In", message.channel, false)
    .addField("Content:", message.content)
    .setColor("RED")
    .setThumbnail(message.author.displayAvatarURL({dybamic: true}))

    LogChannel.send({ embeds: [DeletedLog]})

})

