client.on("messageCreate", message => {
    if (message.content.startsWith("!setbirthday")) {
var userstats = userstatsList.find(x => x.id == message.author.id);
if (!userstats) return botCommandMessage(message, "Error", "Utente non in memoria", "Questo utente non è presente nei dati del bot", property)

if (userstats.birthday && userstats.birthday[0]) {
    return botCommandMessage(message, "Warning", "Compleanno già inserito", "Hai già settato il tuo compleanno, non puoi più **modificarlo**")
}

if (!args[0] || !args[1]) {
    return botCommandMessage(message, "Error", "Inserire una data valida", "Scrivi la data valida del tuo compleanno", property)
}

var month = args[0].toLowerCase()
var day = args[1].toLowerCase()

if (["gen", "gennaio", "jan", "january"].includes(month)) month = 1
if (["feb", "febbraio", "february"].includes(month)) month = 2
if (["mar", "marzo", "march"].includes(month)) month = 3
if (["apr", "aprile", "april"].includes(month)) month = 4
if (["mag", "maggio", "may"].includes(month)) month = 5
if (["giu", "giugno", "jun", "june"].includes(month)) month = 6
if (["lug", "luglio", "jul", "july"].includes(month)) month = 7
if (["ago", "agosto", "aug", "august"].includes(month)) month = 8
if (["set", "settembre", "sep", "september"].includes(month)) month = 9
if (["ott", "ottobre", "oct", "october"].includes(month)) month = 10
if (["nov", "novembre", "november"].includes(month)) month = 11
if (["dic", "dicembre", "dec", "december"].includes(month)) month = 12

month = parseInt(month)
day = parseInt(day)

if (!moment([2020, month - 1, day]).isValid() || (!moment([2020, month - 1, day]).isValid() && moment([2021, month - 1, day]).isValid())) {
    return botCommandMessage(message, "Error", "Inserire una data valida", "Scrivi la data valida del tuo compleanno", property)
}

var embed = new Discord.MessageEmbed()
    .setTitle("Confermi compleanno?")
    .setColor("#ebaa13")
    .setDescription("**Confermi** il complenno che hai inserito?")
    .addField(`:balloon: ${day} ${moment().set("month", month - 1).format("MMMM")}`, "Se vuoi **rinserire** la data, riscrivi il comando `!setbirthday` altrimenti clicca su **\"Conferma compleanno\"** per inserire quella seleziona\r_Non potrai più modificare la data del tuo compleanno_")

var button1 = new disbut.MessageButton()
    .setLabel("Annulla inserimento")
    .setStyle("red")
    .setID(`annullaCompleanno,${message.author.id}`)

var button2 = new disbut.MessageButton()
    .setLabel("Conferma compleanno")
    .setStyle("green")
    .setID(`confermaCompleanno,${message.author.id},${month},${day}`)

var row = new disbut.MessageActionRow()
    .addComponents(button1)
    .addComponents(button2)

message.channel.send({ embed: embed, components: row })
    .then(msg => {
        msg.delete({ timeout: 60000 })
            .catch(() => { })
        message.delete({ timeout: 60000 })
            .catch(() => { })
    })
    .catch(() => { })
}
});