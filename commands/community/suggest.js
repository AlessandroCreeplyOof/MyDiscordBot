const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content.startsWith("!suggest")) {
        var args = message.content.split(/\s+/);
        var suggest = args.slice(1).join(" ")

        var accetta = new Discord.MessageButton()
            .setLabel("Approva")
            .setCustomId("approvasuggest")
            .setStyle("SUCCESS")

        var rifiuta = new Discord.MessageButton()
            .setLabel("Rifiuta")
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

        var suggestaccettato = new Discord.MessageEmbed()
        .setTitle(`💡 Suggest by ${message.author.toString()}`)
        .setThumbnail("https://media.discordapp.net/attachments/941101779297378314/944975611791822848/suggestcanvas-removebg-preview.png")
        .setColor("ORANGE")
        .setDescription(suggest)
        .setTimestamp()

        client.channels.cache.get("944545494531715112").send({embeds: [embed], components: [row] }); 
    }
})

client.on("interactionCreate", interaction => {
    if (interaction.customId == "approvasuggest") {
        interaction.deferUpdate()
            client.channels.cache.get("944987091421499404").send({ embeds: [suggestaccettato] }).catch(() => { })
            return
    }
})
