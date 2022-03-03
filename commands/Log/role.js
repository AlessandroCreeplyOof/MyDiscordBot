const Discord = require("discord.js")

client.on("roleCreate", role => {

    const ruolocreato = new Discord.MessageEmbed()
    .setTitle("[ROLE CREATED]")
    .setDescription("Added Role to the server.")
    .addField("Role:", `${role.name}`, false)
    .setTimestamp()
    .setColor("PURPLE")

    client.channels.cache.get("949068152048861214").send({embeds: [ruolocreato]})
})

client.on("roleDelete", role => {

    const ruolodelete = new Discord.MessageEmbed()
    .setTitle("[ROLE DELETED]")
    .setDescription("Removed Role to the server.")
    .addField("Role:", `${role.name}`, false)
    .setTimestamp()
    .setColor("PURPLE")

    client.channels.cache.get("949068152048861214").send({embeds: [ruolodelete]})
})

client.on("roleUpdate", (oldRole, newRole) => {

    const ruolodelete = new Discord.MessageEmbed()
    .setTitle("[ROLE DELETED]")
    .setDescription("Removed Role to the server.")
    .addField("New Role:", `${newRole}`, false)
    .addField("Old Role:", `${oldRole}`, false)
    .setTimestamp()
    .setColor("PURPLE")

    client.channels.cache.get("949068152048861214").send({embeds: [ruolodelete]})
})