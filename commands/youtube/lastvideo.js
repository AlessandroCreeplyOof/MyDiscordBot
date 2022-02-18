const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content == "!lastvideo") {
        const channelId = 'UCqFJX8iQDEjfh-qMfB5Urww' //Settare id del tuo canale YouTube
        ytch.getChannelVideos(channelId, "newest").then((response) => {
            var embed = new Discord.MessageEmbed()
                .setTitle(response.items[0].title)
                .setURL("https://www.youtube.com/watch?v=" + response.items[0].videoId)
                .setImage(response.items[0].videoThumbnails[3].url)
                .setColor("LUMINOUS_VIVID_PINK")
                .addField("👁️ Views", response.items[0].viewCount.toString(), true)
                .addField("🪧 Durata", response.items[0].durationText, true)
                .addField("💼 Pubblicato il", response.items[0].publishedText, true)
            message.channel.send({embeds: [embed]})
        })
    }
})