const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content == "!egg") {

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
})