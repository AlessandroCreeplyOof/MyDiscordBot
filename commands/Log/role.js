const Discord = require("discord.js")

client.on("roleUpdate", (oldRole, newRole) => {

    const ruolodelete = new Discord.MessageEmbed()
    .setTitle("[ROLE UPDATED]")
    .setDescription("Removed Role to the server.")
    .addField("New Role:", `${newRole.name}`, false)
    .addField("Old Role:", `${oldRole.name}`, false)
    .setTimestamp()
    .setColor("YELLOW")

    client.channels.cache.get("949068152048861214").send({embeds: [ruolodelete]})
})