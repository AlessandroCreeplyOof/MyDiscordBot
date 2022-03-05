const Discord = require("discord.js")

client.on("channelCreate", channel => {

    const canalecreato = new Discord.MessageEmbed()
    .setTitle("[CREATED CHANNEL]")
    .setDescription("Created the channel")
    .addField(`**Type:**`,`${channel.type}`) 
    .addField(`**ChannelName:**`, `${channel.name}`)
    .addField(`**ChannelID:**`, `${channel.id}`)
    .addField(`**CreatedAT:**`, `${channel.createdAt}`)
    .setColor("GREEN")
    .setTimestamp()

    client.channels.cache.get("937711348664635453").send( { embeds: [canalecreato] } )
})

client.on("channelUpdate", (oldChannel, newChannel) => {

    const canaleupdate = new Discord.MessageEmbed()
    .setDescription("Channel name updated.")
    .addField("Old channel name", `\`${oldChannel.name}\``, true)
    .addField("New channel name", `\`${newChannel.name}\``, true)
    .setTimestamp()
    .setColor("YELLOW")

    client.channels.cache.get("937711348664635453").send( { embeds: [canaleupdate] } )
})

client.on("channelDelete", channel => {

    const canaledelete = new Discord.MessageEmbed()
    .setTitle("[DELETED CHANNEL]")
    .setDescription("Deleted the channel")
    .addField(`**Type:**`,`${channel.type}`) 
    .addField(`**ChannelName:**`, `${channel.name}`)
    .addField(`**ChannelID:**`, `${channel.id}`)
    .addField(`**RemovedAT:**`, `${channel.createdAt}`)
    .setColor("RED")
    .setTimestamp()

    client.channels.cache.get("937711348664635453").send( { embeds: [canalecreato] } )
})