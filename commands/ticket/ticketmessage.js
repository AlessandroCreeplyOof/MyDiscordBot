const Discord = require("discord.js")

var ticket = new Discord.MessageEmbed()
.setTitle("**APRI un TICKET DI SUPPORTO!**")
.setDescription("Stai riscontrando **problemi?** \n \n Apri un ticket e lo staff ti aiuterà in ogni tuo problema ;)")
.setColor("#2969cf")
.setImage("https://media.discordapp.net/attachments/941101779297378314/942424504876015636/TICKETGRAPHIC.png?width=1193&height=671")

var giaticket = new Discord.MessageEmbed()
.setTitle("Hai già un ticket aperto!")
.setDescription("Non puoi aprire un altro ticket!")
.setColor("GREY")
.setImage("https://media.discordapp.net/attachments/941101779297378314/942424826373603378/TICKETGIA.png?width=1193&height=671")

var ticket1 = new Discord.MessageEmbed()
.setTitle("🚑 Benvenuto nel tuo ticket")
.setColor("#FFAC33")
.setImage("https://media.discordapp.net/attachments/941101779297378314/942424475415240714/TICKETOPEN.png?width=1193&height=671")
.addField(":bookmark_tabs: Ecco i comandi del ticket", `
- \`!tclose\` - **Chiudi** il tuo ticket
- \`!tadd [user]\` - **Aggiungi** un tuo amico al ticket
- \`!tremove [user]\` - **Rimuovi/Banna** un utente dal ticket`)

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
            interaction.user.send({ embeds: [giaticket] }).catch(() => { })
            return
        }
        interaction.guild.channels.create("📜 ╵ " + interaction.user.username, {
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