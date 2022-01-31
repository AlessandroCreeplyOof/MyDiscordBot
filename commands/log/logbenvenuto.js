const Discord = require("discord.js")

//BENVENUTO
client.on("guildMemberAdd", member => {
    if (member.user.bot) return
    var embed = new Discord.MessageEmbed()
        .setTitle("#WELCOME")
        .setDescription(`${member.toString()} è entrato nel server, Siamo a **${member.guild.memberCount}° membri in totale**`)

    client.channels.cache.get("937720962730819614").send({embeds: [embed]}); 
})
//ADDIO
client.on("guildMemberRemove", member => {
    if (member.user.bot) return
    var embed = new Discord.MessageEmbed()
        .setTitle("#GOODBYE")
        .setDescription(`${member.toString()} è uscito dal server`)

    client.channels.cache.get("937720962730819614").send({embeds: [embed]}); 
})
