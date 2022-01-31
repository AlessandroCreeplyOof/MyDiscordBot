const Discord = require("discord.js")

var privaterooms = new Discord.MessageEmbed()
.setTitle("🔐 **CREA UNA STANZA PRIVATA!** 🔐")
.setDescription("Scegli tramite i **bottoni** qui sotto:")
.addField("**Stanza Vocale:** __Una stanza vocale privata__")
.addField("**Stanza Testuale:** __Una stanza testuale privata__")
.setColor("GOLD")

var vocale = new Discord.MessageEmbed()
.setTitle("**Grazie per aver aperto un ticket!**")
.setDescription("A breve uno staffer ti risponderà, nel frattempo facci sapere di cosa hai bisogno!")
.setColor("GREEN")

//Prima di tutto mandare il messaggio del ticket
client.on("messageCreate", message => {
    if (message.content == "!privaterooms") {
        var button1 = new Discord.MessageButton()
            .setLabel("Canale Vocale")
            .setEmoji("🔊")
            .setCustomId("apriVocale")
            .setStyle("PRIMARY")

        var row = new Discord.MessageActionRow()
            .addComponents(button1)

            message.channel.send({ embeds: [ticket], components: [row]  })
    }
})

client.on("interactionCreate", interaction => {
    if (interaction.customId == "apriVocale") {
        interaction.deferUpdate()
        if (interaction.guild.channels.cache.find(canale => canale.topic == `Stanza di: ${interaction.user.id}`)) {
            interaction.user.send("Hai gia una stanza vocale aperta!").catch(() => { })
            return
        }
        interaction.guild.channels.create(interaction.user.username, {
            type: "voice",
            topic: `User ID: ${interaction.user.id}`,
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
        }).then(canale => {
            canale.send( { embeds: [ticket1] })
        })
    }
})