const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content == "!egg") {
        if (!message.member.roles.cache.has("936909892772593715")) {
            return message.channel.send("Non puoi eseguire questo comando adesso! Aspetta il 10 Aprile 2022!").then(msg => {
                setTimeout(() => msg.delete(), 3000);
            })

        const apriUovo = new Discord.MessageButton()
            .setLabel("Apri Uovo")
            .setCustomId("apriUovo")
            .setStyle("SUCCESS")
            .setEmoji("🥚")
    
        const chiudiUovo = new Discord.MessageButton()
            .setLabel("Regala Uovo")
            .setCustomId("regalaUovo")
            .setStyle("PRIMARY")
            .setEmoji("<:regalo:944925534624821248>")
        
        const forseUovo = new Discord.MessageButton()
            .setCustomId("forseUovo")
            .setStyle("SECONDARY")
            .setEmoji("🔄")

        var row = new Discord.MessageActionRow()
            .addComponents(apriUovo, forseUovo, chiudiUovo)

        const embed = new Discord.MessageEmbed()
            .setTitle("Uovo di Pasqua") //Titolo
            .setColor("AQUA") // Colore principale
            .setDescription("Oooh! Un uovo di pasqua, hai trovato un uovo di pasqua, clicca il pulsante sotto stante per aprirlo! \n \n *I Regali sono completamente casuali*") //Descrizione
            .setThumbnail("https://cdn.discordapp.com/attachments/941101779297378314/942865860765298718/PasquaEgg.png") //Copertina

            message.channel.send({embeds: [embed], components: [row]})
    }
}})

const uovoaperto = new Discord.MessageEmbed()
.setTitle("Uovo Di Pasqua | Aperto con successo")
.setColor("AQUA")
.setDescription("Hai aperto con successo un uovo di pasqua! \n \n <:regalo:944925534624821248> Premio: 500+ XP \n ⏰ Giorno: 1")
.setThumbnail("https://media.discordapp.net/attachments/941101779297378314/944926917897883678/EggAperto.png")

const row = new Discord.MessageActionRow()
.addComponents(
    new Discord.MessageSelectMenu()
.setPlaceholder("Apri altre uova")
.setCustomId("menu")
.setMinValues("1")
.setMaxValues("1")
.addOptions([
    {
        label: "Giorno 1",
        description: "Apri il primo uovo dell'evento!",
        value: "uovo",
        emoji: "<:regalo:944925534624821248>",
    },
    {
        label: "Giorno 2",
        description: "Apri il secondo uovo dell'evento!",
        value: "uovo",
        emoji: "<:regalo:944925534624821248>",
    },
    {
        label: "Giorno 3",
        description: "Apri il terzo uovo dell'evento!",
        value: "uovo",
        emoji: "<:regalo:944925534624821248>",
    },
    {
        label: "Giorno 4",
        description: "Apri il quarto uovo dell'evento!",
        value: "uovo",
        emoji: "<:regalo:944925534624821248>",
    },
    {
        label: "Giorno 5",
        description: "Apri il quinto uovo dell'evento!",
        value: "uovo",
        emoji: "<:regalo:944925534624821248>",
    },
    {
        label: "Giorno 6",
        description: "Apri il sesto uovo dell'evento!",
        value: "uovo",
        emoji: "<:regalo:944925534624821248>",
    }
])
)

var menu = new Discord.MessageSelectMenu()
.setPlaceholder("Apri altre uova")
.setCustomId("menu")
.setMinValues("1")
.setMaxValues("1")

client.on("interactionCreate", interaction => {
    if (interaction.customId == "apriUovo") {
        interaction.deferUpdate()
            interaction.update({ embeds: [uovoaperto], components: [row] })
            return
        }})