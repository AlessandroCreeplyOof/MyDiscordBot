const Discord = require("discord.js")

const ytch = require("yt-channel-info")

setInterval(function () {
    var canale = client.channels.cache.get("935928223320129596")
    ytch.getChannelInfo("UCqFJX8iQDEjfh-qMfB5Urww")
        .then(response => {
            canale.setName(`🧑Subscribers: ${response.subscriberCount}`)
        })
}, 1000 * 30 * 5)