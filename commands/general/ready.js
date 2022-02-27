const Discord = require("discord.js")

client.on('ready', () => {
client.user.setActivity("Creeply&Bot", {
    type: "STREAMING",
    url: "https://www.twitch.tv/creeplyalessandro"
});
//Stato online/offine/non disturbare... (Potrebbe volerci qualche tempo per doversi settare)
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