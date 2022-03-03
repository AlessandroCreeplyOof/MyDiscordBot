const Discord = require("discord.js")

client.on('ready', () => {
    client.user.setActivity('!help', { type: 'WATCHING' });
    client.user.setStatus('online');
});

setInterval(function () {
    var canale = client.channels.cache.get("936771474809847908");
    canale.setName(`👤・ Membri: ${canale.guild.memberCount}`);
}, 1000 * 60 * 5)