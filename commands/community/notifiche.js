const Discord = require("discord.js");

client.on("messageCreate", message => {
    if (message.content.startsWith("!notifiche")) {
        var embed = new Discord.MessageEmbed()
        .setTitle("Seleziona quali notifiche ricevere")
        .setDescription("Tramite i bottoni qui sotto, seleziona i ruoli a cui sei interessato!")
        .addField("📢 News Notifications", "Tutte le grandi notizie del server!", false)
        .addField("📹 Youtube Notifications", "Tutte le notifiche dei video youtube", false)
        .addField("📣 Mini News Notifications", "Tutte le piccole notizie del server!", false)

        var news = new Discord.MessageButton()
        .setEmoji("📢")
        .setStyle("SUCCESS")
        .setCustomId("news")

        var ytnews = new Discord.MessageButton()
        .setEmoji("📹")
        .setStyle("SUCCESS")
        .setCustomId("ytnews")

        var newsmini = new Discord.MessageButton()
        .setEmoji("📣")
        .setStyle("SUCCESS")
        .setCustomId("mininews")

        var row = new Discord.MessageActionRow()
        .addComponents(news, ytnews, newsmini)

        message.channel.send({embeds: [embed], components: [row]});
    }
})