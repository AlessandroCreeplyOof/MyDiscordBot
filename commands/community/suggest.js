const Discord = require("discord.js")
require('events').EventEmitter.prototype._maxListeners = 100;

client.on("messageCreate", message => {
    if (message.content.startsWith("!suggest")) {
        var args = message.content.split(/\s+/);
        var suggest = args.slice(1).join(" ")

        var accetta = new Discord.MessageButton()
            .setLabel("✅ Approva")
            .setCustomId("approvasuggest")
            .setStyle("SUCCESS")

        var rifiuta = new Discord.MessageButton()
            .setLabel("❌ Rifiuta")
            .setCustomId("rifiutasuggest")
            .setStyle("DANGER")

        var row = new Discord.MessageActionRow()
            .addComponents(accetta, rifiuta)

        var embed = new Discord.MessageEmbed()
        .setTitle(`💡 Nuovo Suggerimento`)
        .setThumbnail("https://media.discordapp.net/attachments/941101779297378314/944975611791822848/suggestcanvas-removebg-preview.png")
        .setColor("ORANGE")
        .setDescription(suggest)
        .setTimestamp()

         const suggerimentoinviato = new Discord.MessageEmbed()
         .setTitle(`💡 Suggerimento inviato`)
         .setDescription("`Il tuo suggerimento è stato inviato allo staff con successo!` \n \n Attendi che lo staff lo accetti!")
         .setColor("DARK_ORANGE")
         .setTimestamp()

        const suggesta = new Discord.MessageEmbed()
.setTitle(`💡 Suggestions`)
.setThumbnail("https://media.discordapp.net/attachments/941101779297378314/944975611791822848/suggestcanvas-removebg-preview.png")
.setColor("ORANGE")
.setDescription(suggest)
.setTimestamp()

client.on("interactionCreate", interaction => {
    if (interaction.customId == "approvasuggest") {
        interaction.deferUpdate()
            client.channels.cache.get("944987091421499404").send({ embeds: [suggesta] })
            .then(msg => {
                msg.react("👍")
                msg.react("💩")
            })
    }
})
        client.channels.cache.get("936758688180473887").send({embeds: [embed], components: [row] }); 
        message.channel.send({embeds: [suggerimentoinviato]});
    }
})


