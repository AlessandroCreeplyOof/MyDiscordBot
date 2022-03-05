const Discord = require("discord.js")

client.on("inviteCreate", invite => {

    const invitec = new Discord.MessageEmbed()
    .setDescription("[INVITE CREATED]")
    .addField("Invite", `${invite.name}`)
    .setColor("GREEN")

    client.channels.cache.get("937711348664635453").send( { embeds: [invitec] } )
})

client.on("inviteDelete", invite => {

    const inviteb = new Discord.MessageEmbed()
    .setDescription("[INVITE DELETED]")
    .addField("Invite", `${invite.name}`)
    .setColor("RED")

    client.channels.cache.get("937711348664635453").send( { embeds: [inviteb] } )
})