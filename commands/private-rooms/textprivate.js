const Discord = require("discord.js")

var stanzaprivata = new Discord.MessageEmbed()
.setTitle("**STANZA PRIVATA | Scegli che tipo di stanza aprire**")
.setDescription("✍️ Stanza di tipo: **TESTUALE**")
.setColor("GOLD")

var giastanza = new Discord.MessageEmbed()
.setTitle("Hai già una stanza")
.setDescription("Non puoi aprire un altra stanza privata!")
.setColor("GREY")
.setThumbnail("https://cdn.discordapp.com/attachments/941101779297378314/942011608996147230/giastanza-removebg-preview_1.png")

var apristanza = new Discord.MessageEmbed()
.setTitle(":closed_lock_with_key: Come funzionano? :closed_lock_with_key:")
.setColor("#FFAC33")
.addField(":bookmark_tabs: Tutti i comandi delle stanze", `
- \`!pdelete\` - **Elimina** la tua stanza
- \`!padd [user]\` - **Aggiungi** un tuo amico alla stanza
- \`!premove [user]\` - **Rimuovi/Banna** un utente dalla stanza`)

//Prima di tutto mandare il messaggio del ticket
client.on("messageCreate", message => {
    if (message.content == "!stanzamessage") {
        var button1 = new Discord.MessageButton()
            .setLabel("Stanza Testuale")
            .setEmoji("✍️")
            .setCustomId("apriTestuale")
            .setStyle("PRIMARY")

        var button2 = new Discord.MessageButton()
            .setLabel("Stanza Vocale")
            .setEmoji("🔊")
            .setCustomId("apriVocale")
            .setStyle("PRIMARY")

        var row = new Discord.MessageActionRow()
            .addComponents(button1, button2)

            message.channel.send({ embeds: [stanzaprivata], components: [row]  })
    }
})

client.on("interactionCreate", interaction => {
    if (interaction.customId == "apriTestuale") {
        interaction.deferUpdate()
        if (interaction.guild.channels.cache.find(canale => canale.topic == `Stanza di: ${interaction.user.id}`)) {
            interaction.user.send({ embeds: [giastanza] }).catch(() => { })
            return
        }
        interaction.guild.channels.create("💬╵" + interaction.user.username, {
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

client.on("interactionCreate", interaction => {
    if (interaction.customId == "apriVocale") {
        interaction.deferUpdate()
        if (interaction.guild.channels.cache.find(canale => canale.name == `🔊╵${interaction.user.username}`)) {
            interaction.user.send("Hai già un canale testuale aperto!").catch(() => { })
            return
        }
        interaction.guild.channels.create("🔊╵" + interaction.user.username, {
            type: "voice",
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
        })
    }
})