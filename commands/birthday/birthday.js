client.on("messageCreate", message => {
    if (message.content.startsWith("!birthday")) {
if (!args[0]) {
    var utente = message.author;
}
else {
    var utente = message.mentions.users?.first()
    if (!utente) {
        var utente = await getUser(args.join(" "))
    }
}

if (!utente) {
    return botCommandMessage(message, "Error", "Utente non trovato o non valido", "Hai inserito un utente non disponibile o non valido", property)
}

if (utente.user) utente = utente.user

if (utente.bot) {
    return botCommandMessage(message, "Warning", "Non un bot", "Non puoi visualizzare il compleanno di un bot")
}

var userstats = userstatsList.find(x => x.id == utente.id);
if (!userstats) return botCommandMessage(message, "Error", "Utente non in memoria", "Questo utente non è presente nei dati del bot")

var embed = new Discord.MessageEmbed()
    .setTitle(`Birthday - ${utente.nickname ? utente.nickname : utente.username}`)

if (!userstats.birthday || !userstats.birthday[0]) {
    embed
        .setColor("#919191")
    if (utente.id == message.author.id) {
        embed
            .addField(`:grey_exclamation: Not setted`, `_Non hai ancora inserito il tuo compleanno_\rSe setterai il giorno del tuo compleanno, riceverai **auguri** e tanti **regali** personallizati. Fallo subito con il comando \`!setbirthday [month] [day]\``)
    }
    else {
        embed
            .addField(`:grey_exclamation: Not setted`, `_Questo utente non ha ancora inserito il suo compleanno_`)
    }
    message.channel.send(embed)
        .catch(() => { })
}
else {
    if ((new Date().getMonth() == userstats.birthday[0] - 1 && new Date().getDate() == userstats.birthday[1]) || (userstats.birthday[0] == 2 && userstats.birthday[1] == 29 && new Date().getMonth() == 2 && new Date.getMonth() == 1 && !isAnnoBisestile(new Date().getFullYear()))) {

        embed
            .setColor("#FF1180")
            .addField(`:gift: ${userstats.birthday[1]} ${moment().set("month", userstats.birthday[0] - 1).format("MMMM")}`, `**Oggi** è il compleanno di ${utente.toString()}\rFategli gli auguri e tanti regali`)
    }
    else {

        embed
            .setColor("#FB1B3A")

        if (moment(prossimoBirthday(userstats.birthday[0], userstats.birthday[1])).diff(moment(), "days") + 1 == 1) {
            embed.addField(`:balloon: ${userstats.birthday[1]} ${moment().set("month", userstats.birthday[0] - 1).format("MMMM")}`, `Manca **${moment(prossimoBirthday(userstats.birthday[0], userstats.birthday[1])).diff(moment(), "days") + 1} giorno** al compleanno di ${utente.toString()}`)
        }
        else
            embed.addField(`:balloon: ${userstats.birthday[1]} ${moment().set("month", userstats.birthday[0] - 1).format("MMMM")}`, `Mancano **${moment(prossimoBirthday(userstats.birthday[0], userstats.birthday[1])).diff(moment(), "days") + 1} giorni** al compleanno di ${utente.toString()}`)
    }

    message.channel.send({ embed: embed, files: [new Discord.MessageAttachment(canvas.toBuffer(), 'canvas.png')] })
        .catch(() => { })
}
}
});