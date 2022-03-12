const Discord = require("discord.js")

module.exports = {
    name: "github",
    data: {
        name: "github",
        description: "Ricevi il link del profilo GitHub"
    },

execute(interaction) {

    let embed = new Discord.MessageEmbed()
        .setTitle("Social - GitHub")
        .setDescription("Ecco il profilo GitHub di **Creeply** \n <:githublogo:947452305538691093> https://github.com/alessandrocreeply")
        .setColor("AQUA")

    interaction.reply({ embeds: [embed] })

}}