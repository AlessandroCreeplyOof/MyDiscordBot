// INIZIALIZZA IL BOT
const Discord = require("discord.js")
global.client = new Discord.Client({
    intents: 32767
});

client.login("OTM3MzQ1MTk3MDYxMzEyNTIz.YfaYvg.ALjAeWYBr4eOvS4fuLyfnUR0xuM")

const fs = require("fs");

//LOG BENVENUTO E ADDIO
client.on("guildMemberAdd", member => {
    if (member.user.bot) return
    var embed = new Discord.MessageEmbed()
        .setTitle("#WELCOME")
        .setDescription(`${member.user.tag} è entrato nel server, Siamo a **${member.guild.memberCount}° membri in totale**`)
        .setColor("YELLOW")
        .setTimestamp("")

    client.channels.cache.get("937720962730819614").send({embeds: [embed]}); 
})

client.on("guildMemberRemove", member => {
    if (member.user.bot) return
    var embed = new Discord.MessageEmbed()
        .setTitle("#GOODBYE")
        .setDescription(`${member.user.tag} è uscito dal server`)
        .setColor("RED")
        .setTimestamp("")

    client.channels.cache.get("937720962730819614").send({embeds: [embed]}); 
})