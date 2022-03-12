const Discord = require("discord.js")

module.exports = {
    name: "telegram",
    data: {
        name: "telegram",
        description: "Ricevi il link del canale telegram"
    },

execute(interaction) {

    let embed = new Discord.MessageEmbed()
        .setTitle("Social - Telegram")
        .setDescription("Ecco il canale Telegram di **Creeply** \n <:githublogo:947452305538691093> None")
        .setColor("AQUA")

    interaction.reply({ embeds: [embed] })

}}