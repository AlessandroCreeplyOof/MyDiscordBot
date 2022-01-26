const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content.startsWith("!channelinfo")) {
        if (message.content == "!channelinfo") {
            var canale = message.channel;
        }
        else {
            var canale = message.mentions.channels.first();
        }
        if (!canale) {
            return message.channel.send("Canale non trovato");
        }
        switch (canale.type) {
            case "GUILD_TEXT": canale.type = "Text"; break;
            case "GUILD_VOICE": canale.type = "Voice"; break;
            case "GUILD_CATEGORY": canale.type = "Category"; break;
        }
        if (canale.type == "Voice") {
            var embed = new Discord.MessageEmbed()
                .setTitle(canale.name)
                .setDescription("Tutte le statistiche su questo canale")
                .addField("Channel ID", canale.id, true)
                .addField("Type", canale.type, true)
                .addField("Position", canale.rawPosition.toString(), true)
                .addField("Category", `<#${canale.parentId}>`, true)
                .addField("Bitrate", canale.bitrate.toString(), true)
                .addField("User limit", canale.userLimit == 0 ? "∞" : canale.userLimit.toString(), true)
            return message.channel.send({ embeds: [embed] })
        }
        if (canale.type == "Category") {
            var embed = new Discord.MessageEmbed()
                .setTitle(canale.name)
                .setDescription("Tutte le statistiche su questa categoria")
                .addField("Category ID", canale.id, true)
                .addField("Type", canale.type, true)
                .addField("Position", canale.rawPosition.toString(), true)
                .addField("Category created", canale.createdAt.toDateString())
            return message.channel.send({ embeds: [embed] })
        }
        var embed = new Discord.MessageEmbed()
            .setTitle(canale.name)
            .setDescription("Tutte le statistiche su questo canale")
            .addField("Channel ID", canale.id, true)
            .addField("Type", canale.type, true)
            .addField("Position", canale.rawPosition.toString(), true)
            .addField("Category", `<#${canale.parentId}>`, true)
            .addField("Topic", !canale.topic ? "No topic" : canale.topic, true)
            .addField("NSFW", canale.nsfw ? "Yes" : "No", true)
            .addField("Channel created", canale.createdAt.toDateString())
        message.channel.send({ embeds: [embed] })
    }
})