const Discord = require("discord.js")

module.exports = {
    name: "youtube",
    data: {
        name: "youtube",
        description: "Ricevi il link del canale youtube"
    },

execute(interaction) {

    let embed = new Discord.MessageEmbed()
        .setTitle("Social - YouTube")
        .setDescription("Ecco il canale YouTube di **Creeply** \n 📹 https://youtube.com/c/creeply")
        .setColor("RED")

    interaction.reply({ embeds: [embed] })

}}