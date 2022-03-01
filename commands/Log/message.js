const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (member.user.bot) return
    var embed = new Discord.MessageEmbed()
    .setTitle(`[MESSAGE LOG] ${member.toString()}`)
    .setDescription(`Un messaggio è stato inviato \n User: ${member.toString()} \n Messaggio: ${message.toString()}`)
    .setTimestamp()
    .setColor("GREEN")

    client.channels.cache.get("948344721368027246").send({embeds: [embed]}); 
})

client.on("messageUpdate", message => {
    if (member.user.bot) return
    var embed = new Discord.MessageEmbed()
    .setTitle(`[MESSAGE LOG] ${member.toString()}`)
    .setDescription(`Un messaggio è stato inviato \n User: ${member.toString()} \n Messaggio: ${message.toString()}`)
    .setColor("YELLOW")
    .setTimestamp()

    client.channels.cache.get("948344721368027246").send({embeds: [embed]}); 
})

client.on("messageDelete", message => {
    if (member.user.bot) return
    var embed = new Discord.MessageEmbed()
    .setTitle(`[MESSAGE LOG] ${member.toString()}`)
    .setDescription(`Un messaggio è stato inviato \n User: ${member.toString()} \n Messaggio: ${message.toString()}`)
    .setColor("RED")
    .setTimestamp()

    client.channels.cache.get("948344721368027246").send({embeds: [embed]}); 
})