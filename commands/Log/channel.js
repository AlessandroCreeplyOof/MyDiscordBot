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
    let channelDeleteAuthor = channelDelete.action.author

    const canaledelete = new Discord.MessageEmbed()
    .setTitle("[DELETED CHANNEL]")
    .setDescription("Deleted the channel")
    .addField(`**ChannelName:**`, `${channel.name}`)
    .addField(`**Author**`, `${channelDeleteAuthor}`)
    .setColor("PURPLE")
    .setTimestamp()

    client.channels.cache.get("937711348664635453").send( { embeds: [canaledelete] } )
})

client.on("channelUpdate", channel => {
    let channelDeleteAuthor = channelDelete.action.author

    const canaleupdate = new Discord.MessageEmbed()
    .setDescription("Channel name updated.")
    .addField("Old channel name", `\`${oldChannel.name}\``, true)
    .addBlankField(true)
    .addField("New channel name", `\`${newChannel.name}\``, true)
    .addBlankField(true)
    .addField("Channel category", `${newCategory}`, true)
    .setFooter(`Channel ID: ${newChannel.id} 🔥`)
    .setTimestamp()
    .setColor("PURPLE")

    client.channels.cache.get("937711348664635453").send( { embeds: [canaleupdate] } )
})