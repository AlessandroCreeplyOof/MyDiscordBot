const Discord = require("discord.js");
const { BulkOperationBase } = require("mongodb");
require('events').EventEmitter.prototype._maxListeners = 100;

var troppolungo = new Discord.MessageEmbed()
.setTitle(`💡 Suggerimento troppo lungo!`)
.setColor("ORANGE")
.setDescription("Il testo da te mandato è troppo lungo! \n `Max: 500 Caratteri`")

var nonvalido = new Discord.MessageEmbed()
.setTitle(`💡 Suggerimento non valido`)
.setColor("ORANGE")
.setDescription("Non hai inserito nessun testo! \n `Syntax: !suggest [testo]`")

client.on("messageCreate", message => {
    if (message.content.startsWith("!suggest")) {
        var args = message.content.split(/\s+/);
        var suggest = args.slice(1).join(" ")

        if (!suggest) {
            message.channel.send({embeds: [nonvalido]})
            return
        }

        if (suggest.lenght > 500) {
            message.channel.send({embeds: [troppolungo]})
            return
        }

// Embed & Buttons

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

const suggerimentorfiutatoo = new Discord.MessageEmbed()
.setTitle(`❌ Il tuo suggerimento è stato rifiutato!`)
.setThumbnail("https://media.discordapp.net/attachments/941101779297378314/944975611791822848/suggestcanvas-removebg-preview.png")
.setColor("RED")
.setDescription("Il tuo suggerimento purtroppo è stato rifiutato dallo staff, grazie per l'impegno per il suggerimento!")
.setTimestamp()

const giaaccettato = new Discord.MessageEmbed()
.setTitle(`👍 Questo suggerimento è stato già accettato!`)
.setThumbnail("https://media.discordapp.net/attachments/941101779297378314/944975611791822848/suggestcanvas-removebg-preview.png")
.setColor("GREEN")
.setDescription("`Questo suggerimento è stato accettato da un moderatore!` \n \n", suggest)
.setTimestamp()

// INTERAZIONI

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
client.on("interactionCreate", interaction => {
    if (interaction.customId == "rifiutasuggest") {
        client.message.set({embeds: [giaaccettato], components: [null]})
        interaction.deferUpdate()
            interaction.user.send({embeds: [suggerimentorfiutatoo]})
    }
})

// Inviare messaggi

        client.channels.cache.get("936758688180473887").send({embeds: [embed], components: [row] }); 
        message.channel.send({embeds: [suggerimentoinviato]});
    }
})


