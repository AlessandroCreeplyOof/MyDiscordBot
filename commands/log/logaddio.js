const Discord = require("discord.js")

var idcanale = 937720962730819614

client.on("guildMemberRemove", member => {
    if (member.user.bot) return
    var embed = new Discord.MessageEmbed()
        .setTitle(`${member.toString()} | #GOODBAY`)
        .setDescription(`${member.toString()}, è uscito dal server`)
        .setColor("RED")
        .setTimestamp("")

    client.channels.cache.get(idcanale).send({embeds: [embed]}); 
})