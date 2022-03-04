const Discord = require("discord.js")

client.on("channelCreate", channel => {

    const canalecreato = new Discord.MessageEmbed()
    .setTitle("[CREATED CHANNEL]")
    .setDescription("Created the channel")
    .addField(`**Type:**`,`${channel.type}`) 
    .addField(`**ChannelName:**`, `${channel.name}`)
    .addField(`**ChannelID:**`, `${channel.id}`)
    .addField(`**CreatedAT:**`, `${channel.createdAt}`)
    .setColor("PURPLE")
    .setTimestamp()

    client.channels.cache.get("937711348664635453").send( { embeds: [canalecreato] } )
})

client.on("channelDelete", channel => {

    const canaledelete = new Discord.MessageEmbed()
    .setTitle("[DELETED CHANNEL]")
    .setDescription("Deleted the channel")
    .addField(`**Type:**`,`${channel.type}`) 
    .addField(`**ChannelName:**`, `${channel.name}`)
    .addField(`**ChannelID:**`, `${channel.id}`)
    .setColor("PURPLE")
    .setTimestamp()

    client.channels.cache.get("937711348664635453").send( { embeds: [canaledelete] } )
})