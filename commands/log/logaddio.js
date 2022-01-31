const Discord = require("discord.js")

client.on("guildMemberRemove", member => {
    var embed = new Discord.MessageEmbed()
        .setTitle("#GOODBYE")
        .setDescription(`${member.toString()}, è uscito dal server`)
        .setColor("RED")

    client.channels.cache.get("937720962730819614").send({embeds: [embed]}); 
})