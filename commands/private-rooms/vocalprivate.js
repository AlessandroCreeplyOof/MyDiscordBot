const Discord = require("discord.js")

var privaterooms = new Discord.MessageEmbed()
.setTitle("🔐 **CREA UNA STANZA PRIVATA!** 🔐")
.setDescription("Scegli tramite i **bottoni** qui sotto quale tipo di stanza creare! (Vocale o Testuale)")
.setColor("GOLD")

//Prima di tutto mandare il messaggio del ticket
client.on("messageCreate", message => {
    if (message.content == "!privaterooms") {
        var button1 = new Discord.MessageButton()
            .setLabel("Canale Vocale")
            .setEmoji("🔊")
            .setCustomId("apriVocale")
            .setStyle("PRIMARY")

        var row2 = new Discord.MessageActionRow()
            .addComponents(button1)

        var button1 = new Discord.MessageButton()
            .setLabel("Canale Testuale")
            .setEmoji("✍️")
            .setCustomId("apriTestuale")
            .setStyle("PRIMARY")

        var row = new Discord.MessageActionRow()
            .addComponents(button2)

            message.channel.send({ embeds: [privaterooms], components: [row, row2]  })
    }
})

client.on("interactionCreate", interaction => {
    if (interaction.customId == "apriVocale") {
        interaction.deferUpdate()
        if (interaction.guild.channels.cache.find(canale => canale.name == `${interaction.user.name}`)) {
            interaction.user.send("Hai gia una stanza vocale aperta!").catch(() => { })
            return
        }
        interaction.guild.channels.create(interaction.user.username, {
            type: "GUILD_VOICE",
            parent: "937779880815378442", //Settare la categoria,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: ["VIEW_CHANNEL"]
                },
                {
                    id: interaction.user.id,
                    allow: ["VIEW_CHANNEL"]
                },
                { //Aggiungere altri "blocchi" se si vogliono dare permessi anche a ruoli o utenti
                    id: "870224089548226560",
                    allow: ["VIEW_CHANNEL"]
                }
            ]
        })
    }
})