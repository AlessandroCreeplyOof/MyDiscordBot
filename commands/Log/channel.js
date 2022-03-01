const Discord = require("discord.js")

client.on("channelCreate", channel => {
    if (member.user.bot) return
    var embed = new Discord.MessageEmbed()
        .setTitle(`[SERVERS LOG] ${member.toString()}`)
        .setDescription(`E' stato creato un nuovo canale \n Channel: ${channel.toString()}`)

    client.channels.cache.get("937711348664635453").send({embeds: [embed]}); 
})

client.on("channelDelete", channel => {
    if (member.user.bot) return
    var embed = new Discord.MessageEmbed()
        .setTitle(`[SERVERS LOG] ${member.toString()}`)
        .setDescription(`E' stato rimosso un canale \n Channel: ${channel.name}`)

    client.channels.cache.get("937711348664635453").send({embeds: [embed]}); 
})

client.on("channelUpdate", channel => {
    if (member.user.bot) return
    var embed = new Discord.MessageEmbed()
        .setTitle(`[SERVERS LOG] ${member.toString()}`)
        .setDescription(`E' modificato un canale \n Channel: ${channel.toString()}`)

    client.channels.cache.get("937711348664635453").send({embeds: [embed]}); 
})