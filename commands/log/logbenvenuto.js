const Discord = require("discord.js")

client.on("guildMemberAdd", member => {
    if (member.user.bot) return
    var embed = new Discord.MessageEmbed()
        .setTitle("#WELCOME")
        .setDescription(`${member.toString()} è entrato nel server, Siamo a **${member.guild.memberCount} Membri`)
        .setColor("YELLOW")

    client.channels.cache.get("937720962730819614").send({embeds: [embed]}); 
})
