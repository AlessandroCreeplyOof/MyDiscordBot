const Discord = require("discord.js")

client.on('ready', () => {
    //Stato classico (Sta guardando..., Sta giocando a...)
    client.user.setActivity('Changelog V0222', { type: 'LISTENING' }); //Oppure LISTENING, PLAYING
    client.user.setStatus('online') //Oppure idle, dnd, invisible
})

setInterval(function () {
    var canale = client.channels.cache.get("936771474809847908");
    canale.setName(`👤╵ Membri: ${canale.guild.memberCount}`);
}, 1000 * 60 * 5)

client.on("guildMemberAdd", member => {
    if (member.user.bot) return

    member.roles.add("933384681498505258");
});