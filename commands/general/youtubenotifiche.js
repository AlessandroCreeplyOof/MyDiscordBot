const Discord = require("discord.js")
const ytch = require("yt-channel-info") //npm i yt-channel-info

//Messaggio classico
setInterval(() => {
    ytch.getChannelVideos("UCqFJX8iQDEjfh-qMfB5Urww", "newest").then(async response => {
        var idVideo = response.items[0]?.videoId
        if (!idVideo) return

        client.channels.cache.get("935660406796591104").messages.fetch()
            .then(messages => {
                var giaMandato = false;
                messages.forEach(msg => {
                    if (msg.content.includes(idVideo)) giaMandato = true;
                });

                if (!giaMandato) {
                    client.channels.cache.get("935660406796591104").send(`🎥  -- NUOVO VIDEO -- 🎥
Ciao, è appena uscito un video su **${response.items[0].author}**
Andate a vedere "${response.items[0].title}"
https://www.youtu.be/${idVideo}`) //Importate non levare l'id del video
                }
            })
    })
}, 1000 * 30)