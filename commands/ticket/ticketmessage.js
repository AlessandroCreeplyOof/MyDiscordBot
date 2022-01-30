const Discord = require("discord.js")

var ticket = new Discord.MessageEmbed()
.setTitle("**APRI un TICKET DI SUPPORTO!**")
.setDescription("Clicca il bottone per aprire un ticket e parlare con lo staff di problemi che stai riscontrando nel server!")
.setColor("DEFAULT")

var ticket1 = new Discord.MessageEmbed()
.setTitle("**Grazie per aver aperto un ticket!**")
.setDescription("A breve uno staffer ti risponderà, nel frattempo facci sapere di cosa hai bisogno!")
.setColor("GREEN")

//Prima di tutto mandare il messaggio del ticket
client.on("messageCreate", message => {
    if (message.content == "!ticketmessage") {
        var button1 = new Discord.MessageButton()
            .setLabel("Apri ticket")
            .setEmoji("🚑")
            .setCustomId("apriTicket")
            .setStyle("PRIMARY")

        var row = new Discord.MessageActionRow()
            .addComponents(button1)

            message.channel.send({ embeds: [ticket], components: [row]  })
    }
})

client.on("interactionCreate", interaction => {
    if (interaction.customId == "apriTicket") {
        interaction.deferUpdate()
        if (interaction.guild.channels.cache.find(canale => canale.topic == `User ID: ${interaction.user.id}`)) {
            interaction.user.send("Hai gia un ticket aperto").catch(() => { })
            return
        }
        interaction.guild.channels.create(interaction.user.username, {
            type: "text",
            topic: `User ID: ${interaction.user.id}`,
            parent: "933801615545233408", //Settare la categoria,
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