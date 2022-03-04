const Discord = require("discord.js")

client.on("channelCreate", channel => {

    const canalecreato = new Discord.MessageEmbed()
    .setTitle("[CREATED CHANNEL]")
    .setDescription("Created the channel")
    .addField(`**Type**`,`${channel.type}`) 
    .setFooter(`**ChannelID:** ${channel.id} | **CreatedAT:** ${channel.createdAt}`)

    client.channels.cache.get("937711348664635453").send( { embeds: [canalecreato] } )
})