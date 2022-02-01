const Discord = require("discord.js")

var stanzaprivata = new Discord.MessageEmbed()
.setTitle("**STANZA PRIVATA**")
.setDescription("Clicca uno di questi bottoni, per scegliere quale tipo di stanza aprire!")
.setColor("GOLD")

var apristanza = new Discord.MessageEmbed()
.setTitle("**Ecco la tua stanza!**")
.setDescription("La tua stanza è stata creata correttamente!")
.setColor("GREEN")

//Prima di tutto mandare il messaggio del ticket
client.on("messageCreate", message => {
    if (message.content == "!stanzamessage") {
        var button1 = new Discord.MessageButton()
            .setLabel("Stanza Testuale")
            .setEmoji("✍️")
            .setCustomId("apriTestuale")
            .setStyle("PRIMARY")

        var row = new Discord.MessageActionRow()
            .addComponents(button1)

            message.channel.send({ embeds: [stanzaprivata], components: [row]  })
    }
})

client.on("interactionCreate", interaction => {
    if (interaction.customId == "apriTestuale") {
        interaction.deferUpdate()
        if (interaction.guild.channels.cache.find(canale => canale.topic == `Stanza di: ${interaction.user.id}`)) {
            interaction.user.send("Hai già un canale testuale aperto!").catch(() => { })
            return
        }
        interaction.guild.channels.create(interaction.user.username, {
            type: "text",
            topic: `Stanza di: ${interaction.user.id}`,
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
            ]
        }).then(canale => {
            canale.send( { embeds: [apristanza] })
        })
    }
})