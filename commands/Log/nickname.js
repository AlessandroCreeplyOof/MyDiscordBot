const Discord = require("discord.js")

client.on("userUpdate", (oldUser, newUser) => {

    const nick = new Discord.MessageEmbed()
    .setTitle("[NICKNAME UPDATE]")
    .setDescription("User changed the your nickname")
    .addField("Old Nick", `${oldUser}`, false)
    .addField("New Nick", `${newUser}`, false)
    .setTimestamp()
    .setColor("PURPLE")

    client.channels.cache.get("937720962730819614").send({embeds: [nick]})
})