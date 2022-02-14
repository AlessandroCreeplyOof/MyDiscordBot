const Discord = require("discord.js")

var stanzaprivata = new Discord.MessageEmbed()
.setTitle("**STANZA PRIVATA | Scegli che tipo di stanza aprire**")
.setImage("https://media.discordapp.net/attachments/941101779297378314/942864854413348874/ApriPrivateRooms.png?width=1193&height=671")
.setDescription("Hai voglia di parlare con i tuoi amici in una stanza privata? Bene! Segui le seguenti indicazioni. \n \n 💬 __Stanza testuale__ \n Apri una stanza di tipo testuale \n \n Le altre stanze sono in working progress...")
.setColor("GOLD")

var giastanza = new Discord.MessageEmbed()
.setTitle("Hai già una stanza")
.setDescription("Non puoi aprire un altra stanza privata!")
.setColor("GREY")
.setImage("https://media.discordapp.net/attachments/941101779297378314/942864854182678628/HaiPrivateRooms.png?width=1193&height=671")

var apristanza = new Discord.MessageEmbed()
.setTitle(":closed_lock_with_key: Come funzionano? :closed_lock_with_key:")
.setColor("#FFAC33")
.setImage("https://media.discordapp.net/attachments/941101779297378314/942864853985558538/WelcomePrivateRooms.png?width=1193&height=671")
.addField(":bookmark_tabs: Tutti i comandi delle stanze", `
- \`!pdelete\` - **Elimina** la tua stanza
- \`!padd [user]\` - **Aggiungi** un tuo amico alla stanza
- \`!pban [user]\` - **Rimuovi/Banna** un utente dalla stanza`)

//Prima di tutto mandare il messaggio del ticket
client.on("messageCreate", message => {
    if (message.content == "!stanzamessage") {
        var button1 = new Discord.MessageButton()
            .setLabel("Stanza Testuale")
            .setEmoji("✍️")
            .setCustomId("apriTestuale")
            .setStyle("SUCCESS")

        var button2 = new Discord.MessageButton()
            .setLabel("Stanza Vocale")
            .setEmoji("🔊")
            .setCustomId("apriVocale")
            .setStyle("DANGER")
            .setDisabled()

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