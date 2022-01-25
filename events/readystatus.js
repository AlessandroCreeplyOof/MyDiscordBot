const Discord = require("discord.js")

client.on('ready', () => {
    //Stato classico (Sta guardando..., Sta giocando a...)
    client.user.setActivity('Changelog v2322', { type: 'WATCHING' }); //Oppure LISTENING, PLAYING
    client.user.setStatus('online') //Oppure idle, dnd, invisible
})