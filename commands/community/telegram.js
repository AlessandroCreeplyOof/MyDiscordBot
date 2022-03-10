const Discord = require("discord.js")

module.exports = {
    name: "youtube",
    data: {
        name: "youtube",
        description: "Ricevi il link del canale youtube"
    },

execute(interaction) {

    let embed = new Discord.MessageEmbed()
        .setTitle("Social - Telegram")
        .setDescription("Ecco il canale Telegram di **Creeply**")
        .addField("<:githublogo:947452305538691093> None", true)
        .setColor("AQUA")

    interaction.reply({ embeds: [embed] })

}}