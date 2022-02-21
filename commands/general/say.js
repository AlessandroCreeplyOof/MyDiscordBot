const Discord = require("discord.js")

var inserisci = new Discord.MessageEmbed()
.setTitle("Error 404")
.setDescription("Inserisci un messaggio prima di inviare un say! \n \n **Syntax** `!say [messaggio]`")

var notag = new Discord.MessageEmbed()
.setTitle("Error 404")
.setDescription("Non puoi taggare tutti in un say! \n \n **Syntax** `!say [messaggio]`")

client.on("messageCreate", message => {
    if (message.content.startsWith("!say")) {
        var args = message.content.split(/\s+/);
        var testo;
        testo = args.slice(1).join(" ");
        if (!testo) {
            return message.channel.send({embeds: [inserisci]});
        }
        if (message.content.includes("@everyone") || message.content.includes("@here")) {
            return message.channel.send({embeds: [notag]});
        }
        message.delete()

        //Embed
        var log = new Discord.MessageEmbed()
            .setTitle(`Say By ${message.author.ToString()}`)
            .setDescription(testo)
            .setColor("BLURPLE")
            .setTimestamp()

        message.channel.send(testo)
        client.channels.cache.get("937720962730819614").send({embeds: [log]}); 
    }
})