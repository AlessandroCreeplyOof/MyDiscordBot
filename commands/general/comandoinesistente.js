const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content.startsWith == "!") {
        const embed = new Discord.MessageEmbed()
            .setTitle("🔴 COMANDO NON TROVATO!") //Titolo
            .setDescription("Questo comando non è stato trovato, sei sicuro di averlo scritto bene?") //Descrizione
            .setTimestamp() //Se mettere o no l'orario di arrivo del messaggio
        message.channel.send({embeds: [embed]})
    }
})