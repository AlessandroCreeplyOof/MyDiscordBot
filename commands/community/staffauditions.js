const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content == "!staffauditions") {
        if (!message.member.roles.cache.has("936909892772593715")) return

        var embed = new Discord.MessageEmbed()
            .setTitle("Candidati come MODERATORE! <:festa:944921599059066931>")
            .setImage("https://media.discordapp.net/attachments/941101779297378314/944266920255963206/communitybanner_1.png?width=1342&height=671")
            .setColor("NAVY")
            .setDescription("Entra a far parte dei moderatori del server! \n Premi il bottone qui sotto per candidarti, dovrai semplicemnte compilare in breve forms! \n \n **BUONA FORTUNA A CHIUNQUE SI CANDIDERA'!**")

var bottone = new Discord.MessageButton()
.setLabel("Candidati Ora!")
.setEmoji("<:creeplykawai:945362115856846848>")
.setStyle("LINK")
.setURL("https://forms.gle/msqqDFynLAcmUk959")

var row = new Discord.MessageActionRow()
.addComponents(bottone)

        message.channel.send({embeds: [embed], components: [row]})
    }
})