client.on("guildMemberAdd", member => {
    if (member.user.bot) return

    var annunci = new Discord.MessageButton()
.setLabel("Canale Annunci")
.setEmoji("📣")
.setStyle("LINK")
.setURL("https://discord.com/channels/869222535181529140/887061611557294091")

var chat = new Discord.MessageButton()
.setLabel("Regolamento")
.setEmoji("📜")
.setStyle("LINK")
.setURL("https://discord.com/channels/869222535181529140/869234720049872926")

var suggerimenti = new Discord.MessageButton()
.setLabel("Suggerimenti")
.setEmoji("🔮")
.setStyle("LINK")
.setURL("https://discord.com/channels/869222535181529140/934745362814623814")

var row = new Discord.MessageActionRow()
.addComponents(annunci, suggerimenti, chat)

    var welcome = new Discord.MessageEmbed()
        .setTitle("Benvenuto!")
        .setDescription(`Hey ${member.toString()}, benvenuto nel server ufficiale di **Creeply!** \n \n Divertiti nel mio server e chatta con altri utenti rispettando ovviamente il regolamento \n \n **Clicca i bottoni qui sotto per capire al meglio le funzioni del server!**`)
        .setImage("https://media.discordapp.net/attachments/941101779297378314/944266920255963206/communitybanner_1.png?width=1250&height=625")

    member.send({embeds: [welcome], components: [row]}); 
})