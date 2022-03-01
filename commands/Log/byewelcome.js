const Discord = require("discord.js")

//! WELCOME LOG

client.on("guildMemberAdd", member => {
    if (member.user.bot) return
    var embed = new Discord.MessageEmbed()
    .setTitle(`[USER LOG] ${member.toString()}`)
    .setDescription(`Un utente è entrato nel server! \n User: ${member.toString()}`)

    client.channels.cache.get("937720962730819614").send({embeds: [embed]}); 
})

//* BYE LOG
client.on("guildMemberRemove", member => {
    if (member.user.bot) return
    var embed = new Discord.MessageEmbed()
        .setTitle(`[USER LOG] ${member.toString()}`)
        .setDescription(`Un utente è uscito dal server! \n User: ${member.toString()}`)

    client.channels.cache.get("937720962730819614").send({embeds: [embed]}); 
})