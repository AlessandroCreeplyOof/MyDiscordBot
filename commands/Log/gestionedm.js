const Discord = require("discord.js")

client.on("messageCreate", async (message, guild) => {

    if(message.author.Client) return;
    if(message.channel.type == "dm") {
        const dmEmbed = new Discord.MessageEmbed()
        .setTitle(`New DM`)
        .setColor(`RANDOM`)
        .setTimestamp()
        .setDescription(`**User:** ${message.author.tag}\n**User ID:** ${message.author.id}\n**At:** ${new Date()}\n\n**Content** \`\`\`${message.content}\`\`\``)

        client.channels.cache.get("944915188421910578").send({embeds: [dmEmbed]})
    }
})