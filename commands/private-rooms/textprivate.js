const Discord = require("discord.js")

var stanzaprivata = new Discord.MessageEmbed()
.setTitle("**STANZA PRIVATA**")
.setDescription("Clicca uno di questi bottoni, per scegliere quale tipo di stanza aprire!")
.setColor("GOLD")

var apristanza = new Discord.MessageEmbed()
.setTitle(":closed_lock_with_key: Private room :closed_lock_with_key:")
.setColor("#FFAC33")
.addField(":bookmark_tabs: Tutti i comandi", `
- \`!pdelete\` - **Eliminare** la stanza
- \`!padd [user]\` - **Aggiungere** un utente alla stanza privata
- \`!premove [user]\` - **Rimuovere** un utente dalla stanza privata
- \`!pkick [user]\` - **Kickare** un utente dalla stanza (Potrà **rientrare** quando vuole)
- \`!prename [name]\` - **Rinominare** la stanza (Se hai una stanza compresa di chat **testuale** + **vocale** dovrà invece utilizzare rispettivamente \`!ptrename\` e \`!pvrename\` in modo da **scegliere** quale canale rinominare)`)
.addField(":scroll: Regole", `
- È vietato il **flood** e lo **spam**. Evitare di spammare messaggi ripetuti per ricevere esperienza
- Evitare la condivisione di immagini, contenuti o messaggi **NSFW**, con linguaggi sensibili o **violenti**
- Vietato lo spam di link **illeciti**, software o plugin **malevoli**
- Si applicano anche tutte le regole del server`)

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

client.on("interactionCreate", interaction => {
    if (interaction.customId == "apriVocale") {
        interaction.deferUpdate()
        if (interaction.guild.channels.cache.find(canale => canale.name == `🔐 ${interaction.user.name}`)) {
            interaction.user.send("Hai già un canale vocale aperto!").catch(() => { })
            return
        }
        interaction.guild.channels.create(interaction.user.username, {
            type: "voice",
            name: `🔐 ${interaction.user.name}`,
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